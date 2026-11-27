/**
 * Pure IP reputation, DNSBL query construction, response code decoding, and FCrDNS logic.
 * Zero external/Node dependencies. Runs in browser and node.
 */

export interface DnsblZoneConfig {
  id: string
  zone: string
  name: string
  category: 'spam' | 'exploit' | 'policy' | 'reputation'
  delistUrl: string
  description: string
}

export interface DnsblResultItem {
  id: string
  name: string
  zone: string
  category: 'spam' | 'exploit' | 'policy' | 'reputation'
  status: 'clean' | 'listed' | 'policy_warning' | 'unverified' | 'error'
  responseCode: string | null
  subList: string | null
  explanation: string
  delistUrl: string
}

export interface FcrdnsAssessment {
  isValid: boolean
  ptrRecords: string[]
  matchedHostnames: string[]
  forwardIpsMap: Record<string, string[]>
  summary: string
}

export interface IpReputationAnalysis {
  ip: string
  version: 4 | 6
  isBogon: boolean
  bogonReason: string | null
  fcrdns: FcrdnsAssessment
  results: DnsblResultItem[]
  score: number // 0 to 100
  overallStatus: 'excellent' | 'good' | 'warning' | 'poor'
  totalChecked: number
  listedCount: number
}

export const DNSBL_ZONES: DnsblZoneConfig[] = [
  {
    id: 'spamhaus-zen',
    zone: 'zen.spamhaus.org',
    name: 'Spamhaus ZEN',
    category: 'spam',
    delistUrl: 'https://check.spamhaus.org/',
    description: 'Composite blocklist combining SBL (spammers), XBL (exploits/malware), and PBL (dynamic pools).',
  },
  {
    id: 'barracuda',
    zone: 'b.barracudacentral.org',
    name: 'Barracuda Reputation',
    category: 'spam',
    delistUrl: 'https://www.barracudacentral.org/lookups',
    description: 'Barracuda Networks real-time IP reputation system identifying high-volume spam sources.',
  },
  {
    id: 'spamcop',
    zone: 'bl.spamcop.net',
    name: 'SpamCop Blocking List',
    category: 'spam',
    delistUrl: 'https://www.spamcop.net/bl.shtml',
    description: 'Automated spam trap and recipient report blocklist based on recent email abuse.',
  },
  {
    id: 'uceprotect-1',
    zone: 'dnsbl-1.uceprotect.net',
    name: 'UCEPROTECT Level 1',
    category: 'spam',
    delistUrl: 'https://www.uceprotect.net/en/rblcheck.php',
    description: 'Direct single IP spam sources tracked within the last 7 days.',
  },
  {
    id: 'mailspike-bl',
    zone: 'bl.mailspike.net',
    name: 'Mailspike Blacklist',
    category: 'spam',
    delistUrl: 'https://mailspike.org/an-ip-is-listed.html',
    description: 'Real-time blacklist monitoring botnets, distributed attacks, and persistent spam.',
  },
  {
    id: 'mailspike-rep',
    zone: 'rep.mailspike.net',
    name: 'Mailspike Reputation',
    category: 'reputation',
    delistUrl: 'https://mailspike.org/',
    description: 'Granular reputation score tracking legitimate vs suspicious mail volume.',
  },
  {
    id: 'psbl',
    zone: 'psbl.surriel.com',
    name: 'PSBL (Passive Spam Block List)',
    category: 'spam',
    delistUrl: 'https://psbl.org/',
    description: 'Low-false-positive passive spam trap blocklist.',
  },
  {
    id: 'gbudb-truncate',
    zone: 'truncate.gbudb.net',
    name: 'GBUdb Truncate',
    category: 'reputation',
    delistUrl: 'https://www.armresearch.com/support/articles/software/snf/general/truncate.jsp',
    description: 'Autonomous collaborative spam footprint analyzer flagging high-risk IPs.',
  },
]

/**
 * Validates IPv4 address string format
 */
export function isValidIpv4(ip: string): boolean {
  const parts = ip.trim().split('.')
  if (parts.length !== 4) return false
  for (const part of parts) {
    if (!/^\d+$/.test(part)) return false
    const num = Number(part)
    if (num < 0 || num > 255) return false
    // Reject leading zero if more than 1 digit
    if (part.length > 1 && part.startsWith('0')) return false
  }
  return true
}

/**
 * Validates IPv6 address string format
 */
export function isValidIpv6(ip: string): boolean {
  const clean = ip.trim()
  if (!clean.includes(':')) return false
  // Basic regex check for full or compressed IPv6
  const regex =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  return regex.test(clean)
}

/**
 * Identifies Bogon, private, and reserved ranges for IPv4
 */
export function checkIpv4Bogon(ip: string): { isBogon: boolean; reason: string | null } {
  if (!isValidIpv4(ip)) return { isBogon: true, reason: 'Invalid IPv4 address format.' }
  const [b0, b1, b2, b3] = ip.trim().split('.').map(Number)

  if (b0 === 0) return { isBogon: true, reason: 'Current network (RFC 1122 0.0.0.0/8).' }
  if (b0 === 10) return { isBogon: true, reason: 'Private network (RFC 1918 10.0.0.0/8).' }
  if (b0 === 100 && b1 >= 64 && b1 <= 127) {
    return { isBogon: true, reason: 'Shared address / Carrier-grade NAT (RFC 6598 100.64.0.0/10).' }
  }
  if (b0 === 127) return { isBogon: true, reason: 'Loopback address (RFC 1122 127.0.0.0/8).' }
  if (b0 === 169 && b1 === 254) return { isBogon: true, reason: 'Link-local address (RFC 3927 169.254.0.0/16).' }
  if (b0 === 172 && b1 >= 16 && b1 <= 31) {
    return { isBogon: true, reason: 'Private network (RFC 1918 172.16.0.0/12).' }
  }
  if (b0 === 192 && b1 === 0 && b2 === 2) {
    return { isBogon: true, reason: 'Documentation TEST-NET-1 (RFC 5737 192.0.2.0/24).' }
  }
  if (b0 === 192 && b1 === 168) return { isBogon: true, reason: 'Private network (RFC 1918 192.168.0.0/16).' }
  if (b0 === 198 && (b1 === 18 || b1 === 19)) {
    return { isBogon: true, reason: 'Benchmarking (RFC 2544 198.18.0.0/15).' }
  }
  if (b0 === 198 && b1 === 51 && b2 === 100) {
    return { isBogon: true, reason: 'Documentation TEST-NET-2 (RFC 5737 198.51.100.0/24).' }
  }
  if (b0 === 203 && b1 === 0 && b2 === 113) {
    return { isBogon: true, reason: 'Documentation TEST-NET-3 (RFC 5737 203.0.113.0/24).' }
  }
  if (b0 >= 224 && b0 <= 239) return { isBogon: true, reason: 'Multicast address (RFC 5771 224.0.0.0/4).' }
  if (b0 >= 240) {
    if (b0 === 255 && b1 === 255 && b2 === 255 && b3 === 255) {
      return { isBogon: true, reason: 'Limited broadcast address (RFC 919 255.255.255.255).' }
    }
    return { isBogon: true, reason: 'Reserved for future use (RFC 1112 240.0.0.0/4).' }
  }

  return { isBogon: false, reason: null }
}

/**
 * Identifies Bogon and reserved ranges for IPv6
 */
export function checkIpv6Bogon(ip: string): { isBogon: boolean; reason: string | null } {
  if (!isValidIpv6(ip)) return { isBogon: true, reason: 'Invalid IPv6 address format.' }
  const clean = ip.trim().toLowerCase()

  if (clean === '::' || clean === '0:0:0:0:0:0:0:0') {
    return { isBogon: true, reason: 'Unspecified IPv6 address (RFC 4291 ::/128).' }
  }
  if (clean === '::1' || clean === '0:0:0:0:0:0:0:1') {
    return { isBogon: true, reason: 'Loopback IPv6 address (RFC 4291 ::1/128).' }
  }
  if (clean.startsWith('fe80:')) return { isBogon: true, reason: 'Link-local IPv6 (RFC 4291 fe80::/10).' }
  if (clean.startsWith('fc00:') || clean.startsWith('fd00:')) {
    return { isBogon: true, reason: 'Unique Local IPv6 address (RFC 4193 fc00::/7).' }
  }
  if (clean.startsWith('2001:db8:') || clean.startsWith('2001:0db8:')) {
    return { isBogon: true, reason: 'Documentation IPv6 range (RFC 3849 2001:db8::/32).' }
  }
  if (clean.startsWith('ff')) return { isBogon: true, reason: 'Multicast IPv6 (RFC 4291 ff00::/8).' }

  return { isBogon: false, reason: null }
}

/**
 * Expands full 32 hex nibbles of an IPv6 address
 */
export function expandIpv6ToNibbles(ip: string): string[] {
  let clean = ip.trim().toLowerCase()
  // Handle :: compression
  if (clean.includes('::')) {
    const parts = clean.split('::')
    const left = parts[0] ? parts[0].split(':') : []
    const right = parts[1] ? parts[1].split(':') : []
    const missing = 8 - (left.length + right.length)
    const middle = Array(missing).fill('0000')
    const full = [...left, ...middle, ...right]
    clean = full.join(':')
  }

  const groups = clean.split(':')
  const nibbles: string[] = []
  for (const group of groups) {
    const padded = group.padStart(4, '0')
    for (const char of padded) {
      nibbles.push(char)
    }
  }
  return nibbles
}

/**
 * Builds the DNSBL lookup query hostname
 * IPv4: a.b.c.d -> d.c.b.a.<zone>
 * IPv6: expanded nibbles reversed -> n.n.n...<zone>
 */
export function formatDnsblQuery(ip: string, zone: string): string {
  const trimmed = ip.trim()
  if (isValidIpv4(trimmed)) {
    const parts = trimmed.split('.')
    return `${parts[3]}.${parts[2]}.${parts[1]}.${parts[0]}.${zone}`
  }
  if (isValidIpv6(trimmed)) {
    const nibbles = expandIpv6ToNibbles(trimmed)
    const reversed = [...nibbles].reverse().join('.')
    return `${reversed}.${zone}`
  }
  throw new Error(`Invalid IP address format: ${ip}`)
}

/**
 * Decodes DNSBL returned IP into human status and explanation
 */
export function decodeDnsblResponse(
  zoneId: string,
  returnedIps: string[]
): {
  status: 'clean' | 'listed' | 'policy_warning' | 'unverified'
  subList: string | null
  explanation: string
} {
  if (returnedIps.length === 0) {
    return {
      status: 'clean',
      subList: null,
      explanation: 'Not listed in this DNSBL database.',
    }
  }

  const primaryIp = returnedIps[0]

  // Spamhaus ZEN specific codes
  if (zoneId === 'spamhaus-zen') {
    // Open resolver / blocked public DNS check
    if (primaryIp.startsWith('127.255.255.')) {
      return {
        status: 'unverified',
        subList: 'Query Blocked',
        explanation:
          'Spamhaus blocked query via public/cloud DNS resolver (RFC 6471 error code). Check direct on Spamhaus.',
      }
    }
    if (primaryIp === '127.0.0.2') {
      return {
        status: 'listed',
        subList: 'SBL',
        explanation: 'Direct spam sending source verified by Spamhaus SBL team.',
      }
    }
    if (primaryIp === '127.0.0.3') {
      return {
        status: 'listed',
        subList: 'CSS',
        explanation: 'Snowshoe spam detection from low-reputation sending cluster.',
      }
    }
    if (['127.0.0.4', '127.0.0.5', '127.0.0.6', '127.0.0.7'].includes(primaryIp)) {
      return {
        status: 'listed',
        subList: 'XBL',
        explanation: 'Compromised machine, virus/trojan infection, or open proxy exploit.',
      }
    }
    if (['127.0.0.10', '127.0.0.11'].includes(primaryIp)) {
      return {
        status: 'policy_warning',
        subList: 'PBL',
        explanation:
          'End-user dynamic or residential IP pool. Mail servers should not send direct MX delivery from this IP.',
      }
    }
  }

  // Mailspike Reputation codes
  if (zoneId === 'mailspike-rep') {
    const lastByte = Number(primaryIp.split('.')[3])
    if (lastByte >= 17 && lastByte <= 20) {
      return {
        status: 'clean',
        subList: `Rep L${lastByte - 10}`,
        explanation: `Good reputation mail server tier (${lastByte}/20).`,
      }
    }
    if (lastByte >= 10 && lastByte <= 14) {
      return {
        status: 'listed',
        subList: `Rep L${lastByte - 10}`,
        explanation: `Suspicious or bad reputation mail server tier (${lastByte}/20).`,
      }
    }
  }

  // Default blocklist listing (127.0.0.2 etc)
  return {
    status: 'listed',
    subList: primaryIp,
    explanation: `Active listing detected in ${zoneId} (Response: ${primaryIp}).`,
  }
}

/**
 * Assesses Forward Confirmed Reverse DNS (FCrDNS) as mandated by RFC 1912 and Google/Yahoo 2024.
 */
export function assessFcrdns(
  ip: string,
  ptrRecords: string[],
  forwardIpsMap: Record<string, string[]>
): FcrdnsAssessment {
  const cleanIp = ip.trim().toLowerCase()
  if (ptrRecords.length === 0) {
    return {
      isValid: false,
      ptrRecords: [],
      matchedHostnames: [],
      forwardIpsMap,
      summary: 'Missing reverse DNS PTR record. Google and Yahoo will reject or rate-limit inbound messages.',
    }
  }

  const matchedHostnames: string[] = []
  for (const ptr of ptrRecords) {
    const cleanPtr = ptr.toLowerCase().replace(/\.$/, '')
    const forwardIps = forwardIpsMap[cleanPtr] || forwardIpsMap[ptr] || []
    const hasMatch = forwardIps.some((fIp) => fIp.trim().toLowerCase() === cleanIp)
    if (hasMatch) {
      matchedHostnames.push(cleanPtr)
    }
  }

  if (matchedHostnames.length > 0) {
    return {
      isValid: true,
      ptrRecords,
      matchedHostnames,
      forwardIpsMap,
      summary: `Forward Confirmed Reverse DNS (FCrDNS) is valid. Hostname ${matchedHostnames[0]} resolves back to ${cleanIp}.`,
    }
  }

  return {
    isValid: false,
    ptrRecords,
    matchedHostnames: [],
    forwardIpsMap,
    summary: `Reverse DNS PTR exists (${ptrRecords[0]}) but does not forward-resolve back to ${cleanIp}. FCrDNS verification failed.`,
  }
}

/**
 * Computes an overall email deliverability reputation score (0 to 100)
 */
export function calculateReputationScore(
  isBogon: boolean,
  fcrdnsValid: boolean,
  results: DnsblResultItem[]
): {
  score: number
  overallStatus: 'excellent' | 'good' | 'warning' | 'poor'
  listedCount: number
} {
  if (isBogon) {
    return { score: 0, overallStatus: 'poor', listedCount: 0 }
  }

  let baseScore = 100

  // FCrDNS is worth 25 points
  if (!fcrdnsValid) {
    baseScore -= 25
  }

  let listedCount = 0
  for (const item of results) {
    if (item.status === 'listed') {
      listedCount++
      if (item.category === 'spam') baseScore -= 30
      else if (item.category === 'exploit') baseScore -= 35
      else baseScore -= 15
    } else if (item.status === 'policy_warning') {
      // Policy warning (PBL) reduces score for direct mail sending
      baseScore -= 20
    }
  }

  const finalScore = Math.max(0, Math.min(100, baseScore))

  let overallStatus: 'excellent' | 'good' | 'warning' | 'poor' = 'excellent'
  if (finalScore >= 90 && listedCount === 0 && fcrdnsValid) {
    overallStatus = 'excellent'
  } else if (finalScore >= 70 && listedCount === 0) {
    overallStatus = 'good'
  } else if (finalScore >= 45 || listedCount === 1) {
    overallStatus = 'warning'
  } else {
    overallStatus = 'poor'
  }

  return {
    score: finalScore,
    overallStatus,
    listedCount,
  }
}
