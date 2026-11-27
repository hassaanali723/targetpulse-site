import {
  checkSpf,
  checkSpfDraft,
  subtreeLookups,
  type SpfNode,
  type SpfTerm,
  type SpfCheckResult,
} from './spfCheckerCore'
import { resolveDns, answersOfType } from './dnsOverHttps'
import {
  assembleFlattenedRecord,
  type FlattenedSpfResult,
} from './spfFlattenerPure'

export interface FlattenableCandidate {
  id: string
  raw: string
  type: 'include' | 'a' | 'mx' | 'redirect' | 'direct-ip' | 'other'
  target: string
  subtreeLookups: number
  ip4List: string[]
  ip6List: string[]
  canFlatten: boolean
  isFlattened: boolean
  cannotFlattenReason?: string
}

export interface SpfFlatteningSession {
  originalRecord: string
  originalLookups: number
  domain: string
  candidates: FlattenableCandidate[]
  allQualifier: '-' | '~' | '?'
}

async function resolveHostIps(
  host: string,
  cidr4 = '',
  cidr6 = ''
): Promise<{ ip4: string[]; ip6: string[] }> {
  const ip4: string[] = []
  const ip6: string[] = []
  try {
    const [aRes, aaaaRes] = await Promise.all([
      resolveDns(host, 'A').catch(() => null),
      resolveDns(host, 'AAAA').catch(() => null),
    ])
    if (aRes) {
      for (const ans of answersOfType(aRes, 'A')) {
        const ip = ans.data.trim()
        if (ip) ip4.push(cidr4 ? `${ip}/${cidr4}` : ip)
      }
    }
    if (aaaaRes) {
      for (const ans of answersOfType(aaaaRes, 'AAAA')) {
        const ip = ans.data.trim()
        if (ip) ip6.push(cidr6 ? `${ip}/${cidr6}` : ip)
      }
    }
  } catch {
    // Ignore resolution errors
  }
  return { ip4, ip6 }
}

async function resolveMxIps(
  domain: string,
  cidr4 = '',
  cidr6 = ''
): Promise<{ ip4: string[]; ip6: string[] }> {
  const ip4: string[] = []
  const ip6: string[] = []
  try {
    const mxRes = await resolveDns(domain, 'MX').catch(() => null)
    if (!mxRes) return { ip4, ip6 }
    const mxAnswers = answersOfType(mxRes, 'MX')
      .map((a) => a.data.trim().split(/\s+/)[1])
      .filter((h): h is string => !!h && h !== '.')
      .slice(0, 10) // RFC 7208 Section 5.4 cap

    const hostPromises = mxAnswers.map((h) => resolveHostIps(h, cidr4, cidr6))
    const results = await Promise.all(hostPromises)
    for (const r of results) {
      ip4.push(...r.ip4)
      ip6.push(...r.ip6)
    }
  } catch {
    // Ignore resolution errors
  }
  return { ip4, ip6 }
}

async function collectNodeIpsRecursive(
  node: SpfNode,
  collectedIp4: string[],
  collectedIp6: string[],
  visited = new Set<string>()
): Promise<void> {
  const dom = node.domain.toLowerCase()
  if (visited.has(dom)) return
  visited.add(dom)

  for (const term of node.terms) {
    if (term.type !== 'mechanism' && term.name !== 'redirect') continue

    // Crucial RFC 7208 rule: Only flatten + mechanisms! Do not flatten -, ~, ? exclusions into allowed IPs.
    if (term.qualifier !== '+') continue

    if (term.name === 'ip4' && term.value) {
      collectedIp4.push(term.value + (term.cidr ? `/${term.cidr}` : ''))
    } else if (term.name === 'ip6' && term.value) {
      collectedIp6.push(term.value + (term.cidr ? `/${term.cidr}` : ''))
    } else if (term.name === 'a') {
      const target = term.value || node.domain
      const masks = term.cidr.split('//')
      const cidr4 = masks[0]?.replace(/^\//, '') || ''
      const cidr6 = masks[1] || ''
      const ips = await resolveHostIps(target, cidr4, cidr6)
      collectedIp4.push(...ips.ip4)
      collectedIp6.push(...ips.ip6)
    } else if (term.name === 'mx') {
      const target = term.value || node.domain
      const masks = term.cidr.split('//')
      const cidr4 = masks[0]?.replace(/^\//, '') || ''
      const cidr6 = masks[1] || ''
      const ips = await resolveMxIps(target, cidr4, cidr6)
      collectedIp4.push(...ips.ip4)
      collectedIp6.push(...ips.ip6)
    } else if (term.name === 'include') {
      const child = node.children.find((c) => c.domain === term.value.toLowerCase().replace(/\.$/, ''))
      if (child && !child.failure) {
        await collectNodeIpsRecursive(child, collectedIp4, collectedIp6, visited)
      }
    } else if (term.name === 'redirect') {
      const child = node.children.find((c) => c.via === 'redirect')
      if (child && !child.failure) {
        await collectNodeIpsRecursive(child, collectedIp4, collectedIp6, visited)
      }
    }
  }
}

export async function prepareSpfFlattening(
  input: string,
  isDraft = false
): Promise<SpfFlatteningSession> {
  const checkResult: SpfCheckResult = isDraft
    ? await checkSpfDraft('example.com', input)
    : await checkSpf(input)

  if (!checkResult.record || !checkResult.root) {
    throw new Error('No valid SPF record found to flatten.')
  }

  const root = checkResult.root
  const candidates: FlattenableCandidate[] = []

  let candIdx = 0
  for (const term of root.terms) {
    const id = `term-${candIdx++}`
    if (term.name === 'all') continue

    if (term.name === 'include') {
      const target = term.value.toLowerCase().replace(/\.$/, '')
      const child = root.children.find((c) => c.domain === target)
      const lookups = child ? subtreeLookups(child) : 1
      const ip4List: string[] = []
      const ip6List: string[] = []
      if (child && !child.failure) {
        await collectNodeIpsRecursive(child, ip4List, ip6List)
      }
      candidates.push({
        id,
        raw: term.raw,
        type: 'include',
        target,
        subtreeLookups: lookups,
        ip4List,
        ip6List,
        canFlatten: term.qualifier === '+' && !term.value.includes('%'),
        isFlattened: term.qualifier === '+' && !term.value.includes('%'), // default flatten
        cannotFlattenReason:
          term.qualifier !== '+'
            ? `Cannot flatten non-pass mechanism (${term.qualifier}include). Exclusions must remain dynamic.`
            : term.value.includes('%')
            ? 'Cannot flatten dynamic SPF % macros.'
            : undefined,
      })
    } else if (term.name === 'a') {
      const target = term.value || root.domain
      const masks = term.cidr.split('//')
      const cidr4 = masks[0]?.replace(/^\//, '') || ''
      const cidr6 = masks[1] || ''
      const ips = await resolveHostIps(target, cidr4, cidr6)
      candidates.push({
        id,
        raw: term.raw,
        type: 'a',
        target,
        subtreeLookups: 1,
        ip4List: ips.ip4,
        ip6List: ips.ip6,
        canFlatten: term.qualifier === '+',
        isFlattened: false, // by default keep domain's own 'a' mechanism dynamic
      })
    } else if (term.name === 'mx') {
      const target = term.value || root.domain
      const masks = term.cidr.split('//')
      const cidr4 = masks[0]?.replace(/^\//, '') || ''
      const cidr6 = masks[1] || ''
      const ips = await resolveMxIps(target, cidr4, cidr6)
      candidates.push({
        id,
        raw: term.raw,
        type: 'mx',
        target,
        subtreeLookups: 1,
        ip4List: ips.ip4,
        ip6List: ips.ip6,
        canFlatten: term.qualifier === '+',
        isFlattened: false, // by default keep domain's own 'mx' mechanism dynamic
      })
    } else if (term.name === 'ip4') {
      candidates.push({
        id,
        raw: term.raw,
        type: 'direct-ip',
        target: term.value,
        subtreeLookups: 0,
        ip4List: [term.value + (term.cidr ? `/${term.cidr}` : '')],
        ip6List: [],
        canFlatten: true,
        isFlattened: true,
      })
    } else if (term.name === 'ip6') {
      candidates.push({
        id,
        raw: term.raw,
        type: 'direct-ip',
        target: term.value,
        subtreeLookups: 0,
        ip4List: [],
        ip6List: [term.value + (term.cidr ? `/${term.cidr}` : '')],
        canFlatten: true,
        isFlattened: true,
      })
    } else {
      candidates.push({
        id,
        raw: term.raw,
        type: 'other',
        target: term.value || term.raw,
        subtreeLookups: term.countsLookup ? 1 : 0,
        ip4List: [],
        ip6List: [],
        canFlatten: false,
        isFlattened: false,
        cannotFlattenReason: 'Modifier or macro cannot be statically flattened.',
      })
    }
  }

  const allTerm = root.terms.find((t) => t.name === 'all')
  const allQualifier = allTerm?.qualifier === '-' ? '-' : allTerm?.qualifier === '?' ? '?' : '~'

  return {
    originalRecord: checkResult.record,
    originalLookups: checkResult.totalLookups,
    domain: checkResult.domain,
    candidates,
    allQualifier,
  }
}

export function executeSpfFlattening(
  session: SpfFlatteningSession,
  activeFlattenedIds: Set<string>
): FlattenedSpfResult {
  const accumulatedIp4: string[] = []
  const accumulatedIp6: string[] = []
  const preservedTerms: string[] = []

  for (const cand of session.candidates) {
    if (cand.canFlatten && activeFlattenedIds.has(cand.id)) {
      accumulatedIp4.push(...cand.ip4List)
      accumulatedIp6.push(...cand.ip6List)
    } else {
      preservedTerms.push(cand.raw)
    }
  }

  return assembleFlattenedRecord({
    ip4List: accumulatedIp4,
    ip6List: accumulatedIp6,
    preservedTerms,
    allQualifier: session.allQualifier,
  })
}
