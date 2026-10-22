/**
 * MX record lookup: finds a domain's mail servers through public DNS-over-HTTPS,
 * sorts them by preference, resolves each server's IP addresses and flags the
 * problems that stop mail from arriving. Rules follow RFC 5321 section 5.1
 * (preference order, implicit MX), RFC 7505 (null MX) and RFC 2181 section 10.3
 * (an MX target must not be an alias).
 * No path-alias imports, so the file also runs under plain Node for quick tests.
 */
import { resolveDns, answersOfType, DNS_TYPE, DnsLookupError } from './dnsOverHttps'
import { normalizeDomainInput, looksLikeDomain } from './domainInput'

export type MxIssueCode = 'ip-literal' | 'cname' | 'no-address' | 'lookup-failed' | 'null-mx-mixed'

export interface MxIssue {
  code: MxIssueCode
  message: string
  /** For 'no-address': the server name itself doesn't exist (NXDOMAIN), not just its address. */
  missing?: boolean
}

export interface MxHost {
  preference: number
  /** Host name without the trailing dot. Empty string for a null MX ("0 ."). */
  exchange: string
  ttl: number
  ipv4: string[]
  ipv6: string[]
  provider: string | null
  issues: MxIssue[]
}

export type MxOutcome =
  | 'ok' // MX records found and every server resolves
  | 'ok-with-issues' // MX records found, but something needs fixing
  | 'implicit' // no MX records, but the domain has an A or AAAA record senders fall back to
  | 'none' // no MX records and no address: the domain can't receive email
  | 'null-mx' // the domain publishes "0 ." to say it accepts no email
  | 'nxdomain' // the domain doesn't exist in DNS

export interface MxLookupResult {
  domain: string
  outcome: MxOutcome
  hosts: MxHost[]
  /** A and AAAA addresses of the domain itself, filled in for the implicit case. */
  fallbackAddresses: string[]
  /** Provider of the first server senders try, if recognized. */
  primaryProvider: string | null
  issues: MxIssue[]
  dnssecValidated: boolean
  resolver: string
}

/** `kind` lets a localized page show its own wording for the two input errors. */
export class MxInputError extends Error {
  constructor(message: string, public kind: 'empty' | 'invalid') {
    super(message)
  }
}

// Host name patterns of common mail providers, matched against each MX target.
// Ordered from most to least specific; the first match wins.
const PROVIDERS: { name: string; pattern: RegExp }[] = [
  // gmail.com and Workspace domains share Google's mail servers, so the name covers both.
  { name: 'Google Workspace or Gmail', pattern: /(^|\.)(google\.com|googlemail\.com)$/ },
  { name: 'Microsoft 365', pattern: /(\.mail\.protection\.outlook\.com|\.mx\.microsoft)$/ },
  { name: 'Outlook.com', pattern: /\.olc\.protection\.outlook\.com$/ },
  { name: 'Zoho Mail', pattern: /(^|\.)zoho(mail|cloud)?\.[a-z.]+$/ },
  { name: 'Proton Mail', pattern: /\.protonmail\.ch$/ },
  { name: 'Fastmail', pattern: /\.messagingengine\.com$/ },
  { name: 'iCloud Mail', pattern: /\.mail\.icloud\.com$/ },
  { name: 'Yahoo Mail', pattern: /\.yahoodns\.net$/ },
  { name: 'GoDaddy', pattern: /\.secureserver\.net$/ },
  { name: 'Namecheap Private Email', pattern: /\.privateemail\.com$/ },
  { name: 'Cloudflare Email Routing', pattern: /\.mx\.cloudflare\.net$/ },
  { name: 'ImprovMX', pattern: /\.improvmx\.com$/ },
  { name: 'Amazon SES / WorkMail', pattern: /^inbound-smtp\.[a-z0-9-]+\.amazonaws\.com$/ },
  // Security gateways: mail passes through them before it reaches the mailbox provider.
  { name: 'Mimecast (security gateway)', pattern: /\.mimecast\.(com|co\.za)$/ },
  { name: 'Proofpoint (security gateway)', pattern: /\.(pphosted|ppe-hosted)\.com$/ },
  { name: 'Barracuda (security gateway)', pattern: /\.barracudanetworks\.com$/ },
  { name: 'Cisco Secure Email (security gateway)', pattern: /\.iphmx\.com$/ },
  { name: 'IONOS', pattern: /\.(ionos\.[a-z.]+|1and1\.[a-z.]+|kundenserver\.de)$/ },
  { name: 'Hostinger', pattern: /\.hostinger\.(com|io)$/ },
  { name: 'Titan', pattern: /\.titan\.email$/ },
  { name: 'Rackspace', pattern: /\.emailsrvr\.com$/ },
  { name: 'OVHcloud', pattern: /\.ovh\.net$/ },
  { name: 'Yandex Mail', pattern: /\.yandex\.(net|ru)$/ },
  { name: 'Mailgun', pattern: /\.mailgun\.org$/ },
  { name: 'SendGrid', pattern: /^mx\.sendgrid\.net$/ },
]

export function detectProvider(exchange: string): string | null {
  const host = exchange.toLowerCase()
  for (const p of PROVIDERS) if (p.pattern.test(host)) return p.name
  return null
}

const stripDot = (s: string) => s.replace(/\.$/, '').toLowerCase()

/** Punycode for DNS: Google's JSON API rejects non-ASCII names (münchen.de gives HTTP 400). */
function toAsciiDomain(domain: string): string {
  try {
    return new URL(`http://${domain}`).hostname
  } catch {
    return domain
  }
}
const isIpLiteral = (s: string) => /^\[?(\d{1,3}(\.\d{1,3}){3})\]?$/.test(s) || (s.includes(':') && /^[\[\]0-9a-f:.]+$/i.test(s))

/** "10 smtp.google.com." becomes { preference: 10, exchange: 'smtp.google.com' }. */
export function parseMxData(data: string): { preference: number; exchange: string } | null {
  const m = data.trim().match(/^(\d+)\s+(\S+)$/)
  if (!m) return null
  return { preference: Number(m[1]), exchange: m[2] === '.' ? '' : stripDot(m[2]) }
}

async function resolveHost(host: MxHost): Promise<void> {
  if (host.exchange === '') return
  if (isIpLiteral(host.exchange)) {
    host.issues.push({
      code: 'ip-literal',
      message: 'This record points to an IP address. An MX record has to name a host, and some mail servers (Exim, by default) refuse to deliver to it.',
    })
    return
  }
  const [a, aaaa] = await Promise.allSettled([resolveDns(host.exchange, 'A'), resolveDns(host.exchange, 'AAAA')])
  if (a.status === 'rejected' && aaaa.status === 'rejected') {
    host.issues.push({ code: 'lookup-failed', message: 'We could not look up the address of this server. Try again in a moment.' })
    return
  }
  const aRes = a.status === 'fulfilled' ? a.value : null
  const aaaaRes = aaaa.status === 'fulfilled' ? aaaa.value : null
  if (aRes) host.ipv4 = answersOfType(aRes, 'A').map((x) => x.data)
  if (aaaaRes) host.ipv6 = answersOfType(aaaaRes, 'AAAA').map((x) => x.data)

  const isAlias = [aRes, aaaaRes].some((r) => r?.answers.some((x) => x.type === DNS_TYPE.CNAME && stripDot(x.name) === host.exchange))
  if (isAlias) {
    host.issues.push({
      code: 'cname',
      message: 'This server name is an alias (CNAME). The MX rules say it should be the real host name. Many senders follow the alias anyway, but the standard doesn’t require them to.',
    })
  }
  if (host.ipv4.length === 0 && host.ipv6.length === 0) {
    const missing = aRes?.status === 3 || aaaaRes?.status === 3
    host.issues.push({
      code: 'no-address',
      missing,
      message: missing
        ? 'This server name doesn’t exist in DNS, so mail sent to it can’t be delivered.'
        : 'This server name has no IP address, so mail sent to it can’t be delivered.',
    })
  }
}

/**
 * Runs the full lookup for whatever the user typed (a domain, a URL or an email
 * address). Throws MxInputError for input that isn't a domain and
 * DnsLookupError when the DNS services can't be reached.
 */
export async function lookupMx(rawInput: string): Promise<MxLookupResult> {
  const domain = normalizeDomainInput(rawInput)
  if (!domain) throw new MxInputError('Enter a domain, such as example.com.', 'empty')
  if (!looksLikeDomain(domain)) throw new MxInputError('That doesn’t look like a domain. Enter something like example.com.', 'invalid')

  const queryName = toAsciiDomain(domain)
  const mx = await resolveDns(queryName, 'MX')
  const base = { domain, hosts: [] as MxHost[], fallbackAddresses: [] as string[], primaryProvider: null, issues: [] as MxIssue[], dnssecValidated: mx.dnssecValidated, resolver: mx.resolver }

  if (mx.status === 3) return { ...base, outcome: 'nxdomain' }
  if (mx.status !== 0) throw new DnsLookupError('The DNS servers for this domain didn’t answer. Try again in a few minutes.')

  const hosts: MxHost[] = answersOfType(mx, 'MX')
    .map((a) => ({ parsed: parseMxData(a.data), ttl: a.TTL }))
    .filter((x): x is { parsed: { preference: number; exchange: string }; ttl: number } => x.parsed !== null)
    .map(({ parsed, ttl }) => ({ ...parsed, ttl, ipv4: [], ipv6: [], provider: null, issues: [] }))
    .sort((x, y) => x.preference - y.preference || x.exchange.localeCompare(y.exchange))

  if (hosts.length === 0) {
    // RFC 5321 section 5.1: with no MX records, senders treat the domain's own address as the mail server.
    const [a, aaaa] = await Promise.allSettled([resolveDns(queryName, 'A'), resolveDns(queryName, 'AAAA')])
    const addrs = [
      ...(a.status === 'fulfilled' ? answersOfType(a.value, 'A').map((x) => x.data) : []),
      ...(aaaa.status === 'fulfilled' ? answersOfType(aaaa.value, 'AAAA').map((x) => x.data) : []),
    ]
    return { ...base, outcome: addrs.length ? 'implicit' : 'none', fallbackAddresses: addrs }
  }

  const hasNull = hosts.some((h) => h.exchange === '')
  if (hasNull && hosts.length === 1) return { ...base, hosts, outcome: 'null-mx' }

  const issues: MxIssue[] = []
  if (hasNull) {
    issues.push({
      code: 'null-mx-mixed',
      message: 'The domain publishes a null MX ("0 .") next to normal MX records. A null MX has to be the only MX record, so remove one or the other.',
    })
  }

  // Resolve at most 10 servers; real domains rarely list more.
  const toResolve = hosts.filter((h) => h.exchange !== '').slice(0, 10)
  await Promise.all(toResolve.map(resolveHost))
  for (const h of hosts) h.provider = h.exchange ? detectProvider(h.exchange) : null

  const anyIssue = issues.length > 0 || hosts.some((h) => h.issues.length > 0)
  const first = hosts.find((h) => h.exchange !== '')
  return { ...base, hosts, issues, primaryProvider: first?.provider ?? null, outcome: anyIssue ? 'ok-with-issues' : 'ok' }
}

/** The records in zone-file form, for the Copy button. */
export function toZoneText(result: MxLookupResult): string {
  return result.hosts.map((h) => `${result.domain}. ${h.ttl} IN MX ${h.preference} ${h.exchange ? h.exchange + '.' : '.'}`).join('\n')
}
