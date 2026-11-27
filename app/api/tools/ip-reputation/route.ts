import { NextResponse } from 'next/server'
import dns from 'node:dns'
import { getVisitorIp } from '@/lib/publicVerify'
import {
  isValidIpv4,
  isValidIpv6,
  checkIpv4Bogon,
  checkIpv6Bogon,
  formatDnsblQuery,
  decodeDnsblResponse,
  assessFcrdns,
  calculateReputationScore,
  DNSBL_ZONES,
  type DnsblResultItem,
  type IpReputationAnalysis,
} from '@/lib/tools/ipReputationPure'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// 10 minutes in-memory cache
const CACHE_TTL_MS = 10 * 60 * 1000
const cache = new Map<string, { at: number; data: IpReputationAnalysis }>()

// Rate limit: 25 requests per minute per visitor IP
const rateLimits = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000
const RATE_LIMIT_MAX = 25

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimits.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }
  entry.count++
  return true
}

export async function POST(req: Request) {
  const visitor = getVisitorIp(req)
  if (!checkRateLimit(visitor)) {
    return NextResponse.json(
      { error: 'Rate limit exceeded. Please wait a minute before checking another IP.' },
      { status: 429 }
    )
  }

  let rawIp = ''
  try {
    const body = await req.json()
    rawIp = String(body?.ip ?? '').trim()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON request body.' }, { status: 400 })
  }

  if (!rawIp) {
    return NextResponse.json({ error: 'IP address is required.' }, { status: 400 })
  }

  const isV4 = isValidIpv4(rawIp)
  const isV6 = isValidIpv6(rawIp)

  if (!isV4 && !isV6) {
    return NextResponse.json(
      { error: 'Invalid IP address format. Please enter a valid IPv4 or IPv6 address.' },
      { status: 400 }
    )
  }

  // Check Bogon & Reserved ranges
  const bogonCheck = isV4 ? checkIpv4Bogon(rawIp) : checkIpv6Bogon(rawIp)
  if (bogonCheck.isBogon) {
    const bogonAnalysis: IpReputationAnalysis = {
      ip: rawIp,
      version: isV4 ? 4 : 6,
      isBogon: true,
      bogonReason: bogonCheck.reason,
      fcrdns: {
        isValid: false,
        ptrRecords: [],
        matchedHostnames: [],
        forwardIpsMap: {},
        summary: `Reserved / Bogon IP: ${bogonCheck.reason}`,
      },
      results: [],
      score: 0,
      overallStatus: 'poor',
      totalChecked: 0,
      listedCount: 0,
    }
    return NextResponse.json(bogonAnalysis)
  }

  const cacheKey = rawIp.toLowerCase()
  const cached = cache.get(cacheKey)
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) {
    return NextResponse.json(cached.data)
  }

  // Set up low-timeout DNS resolver with single attempt
  const resolver = new dns.promises.Resolver({ timeout: 2500, tries: 1 })

  // 1. Resolve PTR for FCrDNS
  let ptrRecords: string[] = []
  try {
    ptrRecords = await resolver.reverse(rawIp)
  } catch {
    ptrRecords = []
  }

  // 2. Resolve forward A/AAAA for each PTR record
  const forwardIpsMap: Record<string, string[]> = {}
  for (const ptr of ptrRecords.slice(0, 3)) {
    try {
      if (isV4) {
        const ips = await resolver.resolve4(ptr)
        forwardIpsMap[ptr] = ips
      } else {
        const ips = await resolver.resolve6(ptr)
        forwardIpsMap[ptr] = ips
      }
    } catch {
      forwardIpsMap[ptr] = []
    }
  }

  const fcrdns = assessFcrdns(rawIp, ptrRecords, forwardIpsMap)

  // 3. Query DNSBL zones in parallel
  const queryPromises = DNSBL_ZONES.map(async (zone): Promise<DnsblResultItem> => {
    try {
      const queryHost = formatDnsblQuery(rawIp, zone.zone)
      const res = await resolver.resolve4(queryHost)
      const decoded = decodeDnsblResponse(zone.id, res)
      return {
        id: zone.id,
        name: zone.name,
        zone: zone.zone,
        category: zone.category,
        status: decoded.status,
        responseCode: res[0] || null,
        subList: decoded.subList,
        explanation: decoded.explanation,
        delistUrl: zone.delistUrl,
      }
    } catch (err: unknown) {
      // Node.js dns throws NODATA or NOTFOUND on NXDOMAIN, which means CLEAN!
      const code = (err as { code?: string })?.code
      if (code === 'ENOTFOUND' || code === 'ENODATA') {
        return {
          id: zone.id,
          name: zone.name,
          zone: zone.zone,
          category: zone.category,
          status: 'clean',
          responseCode: null,
          subList: null,
          explanation: 'Not listed in this DNSBL database (NXDOMAIN).',
          delistUrl: zone.delistUrl,
        }
      }

      // Timeout or query failure
      return {
        id: zone.id,
        name: zone.name,
        zone: zone.zone,
        category: zone.category,
        status: 'unverified',
        responseCode: null,
        subList: null,
        explanation: 'Query timed out or could not be resolved.',
        delistUrl: zone.delistUrl,
      }
    }
  })

  const results = await Promise.all(queryPromises)

  // 4. Calculate score
  const { score, overallStatus, listedCount } = calculateReputationScore(
    false,
    fcrdns.isValid,
    results
  )

  const analysis: IpReputationAnalysis = {
    ip: rawIp,
    version: isV4 ? 4 : 6,
    isBogon: false,
    bogonReason: null,
    fcrdns,
    results,
    score,
    overallStatus,
    totalChecked: results.length,
    listedCount,
  }

  cache.set(cacheKey, { at: Date.now(), data: analysis })
  return NextResponse.json(analysis)
}
