/**
 * DNS lookups from the browser through public DNS-over-HTTPS JSON APIs.
 * Google Public DNS answers first; Cloudflare is the fallback when Google
 * times out, errors or returns SERVFAIL. Both send Access-Control-Allow-Origin: *,
 * so no server of ours is involved. Used by the MX lookup and later DNS tools.
 * No path-alias imports, so the file also runs under plain Node for quick tests.
 */

export const DNS_TYPE = { A: 1, NS: 2, CNAME: 5, SOA: 6, MX: 15, TXT: 16, AAAA: 28 } as const
export type DnsTypeName = keyof typeof DNS_TYPE

export interface DnsAnswer {
  name: string
  type: number
  TTL: number
  data: string
}

export interface DnsResponse {
  /** DNS RCODE: 0 NOERROR, 2 SERVFAIL, 3 NXDOMAIN. */
  status: number
  answers: DnsAnswer[]
  /** True when the resolver validated the answer with DNSSEC (the AD flag). */
  dnssecValidated: boolean
  resolver: 'Google Public DNS' | 'Cloudflare'
}

export class DnsLookupError extends Error {}

interface Resolver {
  name: DnsResponse['resolver']
  url: (name: string, type: DnsTypeName) => string
  headers: Record<string, string>
}

const RESOLVERS: Resolver[] = [
  {
    name: 'Google Public DNS',
    url: (name, type) => `https://dns.google/resolve?name=${encodeURIComponent(name)}&type=${type}`,
    headers: {},
  },
  {
    name: 'Cloudflare',
    url: (name, type) => `https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${type}`,
    headers: { accept: 'application/dns-json' },
  },
]

async function queryOne(resolver: Resolver, name: string, type: DnsTypeName, timeoutMs: number): Promise<DnsResponse> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)
  try {
    const res = await fetch(resolver.url(name, type), { headers: resolver.headers, signal: controller.signal })
    if (!res.ok) throw new DnsLookupError(`${resolver.name} returned HTTP ${res.status}`)
    const json = await res.json()
    return {
      status: typeof json.Status === 'number' ? json.Status : 2,
      answers: Array.isArray(json.Answer) ? json.Answer : [],
      dnssecValidated: json.AD === true,
      resolver: resolver.name,
    }
  } finally {
    clearTimeout(timer)
  }
}

/**
 * Resolves one name and record type. Tries each resolver in order and returns
 * the first usable answer (anything except SERVFAIL). Throws DnsLookupError
 * only when every resolver fails.
 */
export async function resolveDns(name: string, type: DnsTypeName, timeoutMs = 6000): Promise<DnsResponse> {
  let lastError: unknown = null
  let lastServfail: DnsResponse | null = null
  for (const resolver of RESOLVERS) {
    try {
      const r = await queryOne(resolver, name, type, timeoutMs)
      if (r.status === 2) {
        lastServfail = r
        continue
      }
      return r
    } catch (err) {
      lastError = err
    }
  }
  if (lastServfail) return lastServfail
  throw new DnsLookupError(lastError instanceof Error ? lastError.message : 'DNS lookup failed')
}

/** Only the answers of one record type, dropping CNAME hops and other types. */
export function answersOfType(r: DnsResponse, type: DnsTypeName): DnsAnswer[] {
  return r.answers.filter((a) => a.type === DNS_TYPE[type])
}
