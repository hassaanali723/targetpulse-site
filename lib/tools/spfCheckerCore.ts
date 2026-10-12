/**
 * SPF checker: reads a domain's SPF record through public DNS-over-HTTPS,
 * parses it, follows include and redirect, counts DNS lookups and flags the
 * problems that break SPF. Rules follow RFC 7208. Without a sending IP the
 * checker can't run a full check_host() evaluation, so it reports what the
 * record allows and where it breaks the rules.
 * No path-alias imports, so the file also runs under plain Node for quick tests.
 */
import { resolveDns, answersOfType, DnsLookupError } from './dnsOverHttps'
import { normalizeDomainInput, looksLikeDomain } from './domainInput'

export type SpfQualifier = '+' | '-' | '~' | '?'
export type IssueLevel = 'error' | 'warning' | 'info'

export interface SpfIssue {
  level: IssueLevel
  code: string
  message: string
  /** The record the issue was found in. */
  domain: string
}

export interface SpfTerm {
  raw: string
  type: 'mechanism' | 'modifier'
  /** all, include, a, mx, ptr, ip4, ip6, exists, redirect, exp, or another modifier name. */
  name: string
  qualifier: SpfQualifier
  /** Domain or address part, without the CIDR suffix. Empty when not given. */
  value: string
  cidr: string
  countsLookup: boolean
}

export interface SpfNode {
  domain: string
  via: 'root' | 'include' | 'redirect' | 'draft'
  record: string | null
  terms: SpfTerm[]
  /** Terms in this record that cost a DNS lookup. */
  ownLookups: number
  children: SpfNode[]
  /** Set when the record couldn't be fetched or parsed. */
  failure: string | null
}

export type SpfOutcome = 'valid' | 'warnings' | 'invalid' | 'none' | 'nxdomain'

export interface SpfCheckResult {
  domain: string
  outcome: SpfOutcome
  record: string | null
  root: SpfNode | null
  totalLookups: number
  voidLookups: number
  allQualifier: SpfQualifier | null
  issues: SpfIssue[]
  ip4: string[]
  ip6: string[]
  hasMx: boolean
  /** TXT records that look like a broken attempt at SPF (only filled when no valid record exists). */
  nearMisses: string[]
  resolver: string
}

export class SpfInputError extends Error {}

export const LOOKUP_LIMIT = 10
export const VOID_LIMIT = 2
const MAX_DEPTH = 12
const MAX_QUERIES = 80

const LOOKUP_TERMS = new Set(['include', 'a', 'mx', 'ptr', 'exists'])
const MECHANISMS = new Set(['all', 'include', 'a', 'mx', 'ptr', 'ip4', 'ip6', 'exists'])

/**
 * TXT data from the DoH APIs: Google joins the strings of a record with no
 * separator; Cloudflare returns them quoted, like "part one" "part two".
 * RFC 7208 section 3.3: the strings are joined with nothing in between.
 */
export function parseTxtData(data: string): string {
  const d = data.trim()
  if (!d.startsWith('"')) return d
  let out = ''
  let i = 0
  while (i < d.length) {
    if (d[i] !== '"') {
      i++
      continue
    }
    i++
    while (i < d.length && d[i] !== '"') {
      if (d[i] === '\\' && i + 1 < d.length) {
        const dec = d.slice(i + 1, i + 4)
        if (/^\d{3}$/.test(dec)) {
          out += String.fromCharCode(Number(dec))
          i += 4
        } else {
          out += d[i + 1]
          i += 2
        }
      } else {
        out += d[i++]
      }
    }
    i++
  }
  return out
}

export const isSpfRecord = (txt: string) => /^v=spf1(\s|$)/i.test(txt.trim())

function validIp4(ip: string): boolean {
  const m = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)
  return !!m && m.slice(1).every((x) => Number(x) <= 255)
}

function validIp6(ip: string): boolean {
  if (!ip.includes(':')) return false
  try {
    new URL(`http://[${ip}]/`)
    return true
  } catch {
    return false
  }
}

/** Splits a record into terms. Syntax problems are returned as issues. */
export function parseSpfRecord(record: string, domain: string): { terms: SpfTerm[]; issues: SpfIssue[] } {
  const issues: SpfIssue[] = []
  const add = (level: IssueLevel, code: string, message: string) => issues.push({ level, code, message, domain })
  const tokens = record.trim().split(/\s+/).slice(1)
  const terms: SpfTerm[] = []
  for (const raw of tokens) {
    if (/%(?![{%_-])/.test(raw)) {
      add('error', 'bad-syntax', `"${raw}" has a % sign that isn't a valid SPF macro, so receivers treat the record as broken (permerror).`)
      continue
    }
    const mod = raw.match(/^([a-z][a-z0-9_.-]*)=(.*)$/i)
    if (mod) {
      const name = mod[1].toLowerCase()
      if ((name === 'redirect' || name === 'exp') && terms.some((t) => t.name === name)) {
        add('error', 'duplicate-modifier', `The record has more than one ${name}=. Only one is allowed, so receivers treat the record as broken (permerror).`)
        continue
      }
      terms.push({ raw, type: 'modifier', name, qualifier: '+', value: mod[2], cidr: '', countsLookup: name === 'redirect' })
      if ((name === 'redirect' || name === 'exp') && !mod[2]) add('error', 'empty-modifier', `"${raw}" has no domain after the = sign.`)
      if (MECHANISMS.has(name)) {
        add('warning', 'equals-not-colon', `"${raw}" uses = where SPF expects a colon. Receivers read it as an unknown setting and skip it. Write ${name}:${mod[2]} instead.`)
      }
      continue
    }
    const m = raw.match(/^([+\-~?]?)([a-z0-9]+)(.*)$/i)
    const name = m ? m[2].toLowerCase() : ''
    if (!m || !MECHANISMS.has(name)) {
      add('error', 'unknown-term', `"${raw}" isn't a valid SPF mechanism. Receivers treat the whole record as broken (permerror).`)
      continue
    }
    const qualifier = (m[1] || '+') as SpfQualifier
    const rest = m[3]
    let value = ''
    let cidr = ''
    let ok = true
    if (name === 'all') {
      ok = rest === ''
    } else if (name === 'ip4' || name === 'ip6') {
      const p = rest.match(/^:([^/]+)(?:\/(\d+))?$/)
      ok = !!p
      if (p) {
        value = p[1]
        cidr = p[2] ?? ''
        const max = name === 'ip4' ? 32 : 128
        if (!(name === 'ip4' ? validIp4(value) : validIp6(value))) {
          add('error', 'bad-ip', `"${raw}" doesn't contain a valid ${name === 'ip4' ? 'IPv4' : 'IPv6'} address.`)
        } else if (cidr && Number(cidr) > max) {
          add('error', 'bad-cidr', `"${raw}" has a prefix length over /${max}.`)
        }
      }
    } else if (name === 'include' || name === 'exists') {
      const p = rest.match(/^:(.+)$/)
      ok = !!p
      if (p) value = p[1]
    } else {
      // a, mx, ptr: optional :domain, then a and mx may add /cidr4 and //cidr6.
      const p = rest.match(/^(?::([^/]+))?((?:\/\d+)?(?:\/\/\d+)?)$/)
      ok = !!p && !(name === 'ptr' && !!p[2])
      if (p) {
        value = p[1] ?? ''
        cidr = p[2] ?? ''
      }
    }
    if (!ok) {
      add('error', 'bad-syntax', `"${raw}" is written incorrectly, so receivers treat the record as broken (permerror).`)
      continue
    }
    terms.push({ raw, type: 'mechanism', name, qualifier, value, cidr, countsLookup: LOOKUP_TERMS.has(name) })
  }
  return { terms, issues }
}

interface Ctx {
  lookups: number
  voids: number
  queries: number
  issues: SpfIssue[]
  ip4: Set<string>
  ip6: Set<string>
  resolver: string
  /** Builder drafts without a domain: count a and mx, but don't resolve them. */
  skipHosts: boolean
}

const hasMacro = (s: string) => s.includes('%')
const stripDot = (s: string) => s.replace(/\.$/, '').toLowerCase()

async function query(ctx: Ctx, name: string, type: 'TXT' | 'A' | 'AAAA' | 'MX') {
  if (++ctx.queries > MAX_QUERIES) throw new DnsLookupError('This SPF record needs too many DNS queries to check.')
  const r = await resolveDns(name, type)
  ctx.resolver = r.resolver
  return r
}

/** Fetches the SPF records published at a name. */
async function fetchSpf(
  ctx: Ctx,
  name: string,
): Promise<{ status: 'ok' | 'none' | 'nxdomain' | 'multiple'; record: string | null; count: number; nearMisses: string[]; empty: boolean }> {
  const r = await query(ctx, name, 'TXT')
  if (r.status === 3) return { status: 'nxdomain', record: null, count: 0, nearMisses: [], empty: true }
  if (r.status !== 0) throw new DnsLookupError(`The DNS servers for ${name} didn't answer.`)
  const txt = answersOfType(r, 'TXT').map((a) => parseTxtData(a.data))
  const spf = txt.filter(isSpfRecord)
  if (spf.length === 0) return { status: 'none', record: null, count: 0, nearMisses: txt.filter((t) => /spf/i.test(t)), empty: txt.length === 0 }
  if (spf.length > 1) return { status: 'multiple', record: spf[0], count: spf.length, nearMisses: [], empty: false }
  return { status: 'ok', record: spf[0], count: 1, nearMisses: [], empty: false }
}

async function analyze(ctx: Ctx, domain: string, record: string, via: SpfNode['via'], chain: string[]): Promise<SpfNode> {
  const add = (level: IssueLevel, code: string, message: string) => ctx.issues.push({ level, code, message, domain })
  const { terms, issues } = parseSpfRecord(record, domain)
  ctx.issues.push(...issues)
  const node: SpfNode = { domain, via, record, terms, ownLookups: 0, children: [], failure: null }

  const allIdx = terms.findIndex((t) => t.type === 'mechanism' && t.name === 'all')
  const all = allIdx >= 0 ? terms[allIdx] : null
  if (all && terms.slice(allIdx + 1).some((t) => t.type === 'mechanism')) {
    add('warning', 'after-all', 'There are mechanisms after "all". Receivers stop at "all", so anything after it is never used.')
  }
  if (via === 'include' && all?.qualifier === '+') {
    add('error', 'include-plus-all', 'This included record ends in "+all", which makes the include match every server on the internet.')
  }
  // Only the domain owner's own record: they can't shorten a provider's record.
  if ((via === 'root' || via === 'draft') && record.length > 450) {
    add('warning', 'long-record', `The record is ${record.length} characters long. RFC 7208 says the DNS answer should stay small (under about 450 bytes) so it fits in one UDP packet. Some receivers may fail to read a larger answer.`)
  }

  const recurse = async (target: string, kind: 'include' | 'redirect') => {
    const t = stripDot(target)
    if (hasMacro(t)) {
      add('info', 'macro', `"${target}" uses SPF macros, which depend on the sending server. The checker can't follow it.`)
      return
    }
    if (chain.includes(t)) {
      add('error', 'loop', `${t} includes itself through ${chain.join(' > ')}. Receivers treat this as broken.`)
      return
    }
    if (chain.length >= MAX_DEPTH) {
      add('error', 'too-deep', `The include chain goes deeper than ${MAX_DEPTH} levels, so the checker stopped.`)
      return
    }
    let f: Awaited<ReturnType<typeof fetchSpf>>
    try {
      f = await fetchSpf(ctx, t)
    } catch (err) {
      if (ctx.queries > MAX_QUERIES) throw err
      node.children.push({ domain: t, via: kind, record: null, terms: [], ownLookups: 0, children: [], failure: 'DNS didn’t answer' })
      add('warning', 'temperror', `The DNS servers for ${t} didn't answer. Receivers would get a temporary error (temperror) and may retry later. Check again in a few minutes.`)
      return
    }
    const child: SpfNode = { domain: t, via: kind, record: f.record, terms: [], ownLookups: 0, children: [], failure: null }
    if (f.status === 'nxdomain' || f.status === 'none') {
      ctx.voids += f.empty ? 1 : 0
      child.failure = f.status === 'nxdomain' ? 'domain does not exist' : 'no SPF record'
      add('error', `${kind}-no-spf`, `${kind === 'include' ? 'include' : 'redirect'}:${t} points to ${f.status === 'nxdomain' ? 'a domain that doesn’t exist' : 'a domain with no SPF record'}. Receivers treat the whole record as broken (permerror).`)
      node.children.push(child)
      return
    }
    if (f.status === 'multiple') {
      child.failure = 'more than one SPF record'
      ctx.issues.push({ level: 'error', code: 'multiple', message: `${t} publishes ${f.count} SPF records. There must be exactly one.`, domain: t })
      node.children.push(child)
      return
    }
    node.children.push(await analyze(ctx, t, f.record!, kind, [...chain, t]))
  }

  for (const term of terms) {
    if (term.type !== 'mechanism') continue
    if (term.countsLookup) {
      ctx.lookups++
      node.ownLookups++
    }
    const target = term.value || domain
    if (term.name === 'include') {
      await recurse(term.value, 'include')
    } else if (term.name === 'a' || term.name === 'mx') {
      if (hasMacro(target) || ctx.skipHosts) continue
      if (term.name === 'a') {
        const [a4, a6] = await Promise.all([query(ctx, target, 'A'), query(ctx, target, 'AAAA')])
        if (a4.status === 2 || a6.status === 2) {
          add('warning', 'temperror', `The DNS servers for ${target} didn't answer, so "${term.raw}" couldn't be checked. Receivers would get a temporary error (temperror).`)
        } else if (answersOfType(a4, 'A').length + answersOfType(a6, 'AAAA').length === 0) {
          ctx.voids++
          add('warning', 'void-a', `"${term.raw}" finds no IP address for ${target}, so it matches nothing and counts as a void lookup.`)
        }
      } else {
        const mx = await query(ctx, target, 'MX')
        const hosts = answersOfType(mx, 'MX').filter((x) => !/^\d+\s+\.$/.test(x.data.trim()))
        if (mx.status === 2) {
          add('warning', 'temperror', `The DNS servers for ${target} didn't answer, so "${term.raw}" couldn't be checked. Receivers would get a temporary error (temperror).`)
        } else if (hosts.length === 0) {
          ctx.voids++
          add('warning', 'void-mx', `"${term.raw}" finds no mail servers for ${target}, so it matches nothing and counts as a void lookup.`)
        } else if (hosts.length > 10) {
          add('error', 'mx-over-10', `${target} has ${hosts.length} MX records. RFC 7208 allows at most 10 for the mx mechanism.`)
        }
      }
    } else if (term.name === 'ptr') {
      add('warning', 'ptr', `"${term.raw}" uses ptr, which RFC 7208 says should not be used. It's slow, costs a lookup, and is less reliable than ip4 or ip6.`)
    } else if (term.name === 'exists') {
      if (!hasMacro(term.value)) add('info', 'exists', `"${term.raw}" checks whether ${term.value} exists. It's normally used with macros.`)
      else if (via === 'root' || via === 'draft') add('info', 'macro', `"${term.raw}" uses SPF macros, which are filled in from each sending server. It counts as 1 lookup, but a checker can't list the servers it allows.`)
    } else if (term.name === 'ip4') {
      ctx.ip4.add(term.value + (term.cidr ? `/${term.cidr}` : ''))
    } else if (term.name === 'ip6') {
      ctx.ip6.add(term.value + (term.cidr ? `/${term.cidr}` : ''))
    }
  }

  const redirect = terms.find((t) => t.type === 'modifier' && t.name === 'redirect')
  if (redirect) {
    if (all) {
      add('info', 'redirect-ignored', `The record has both "all" and a redirect. Receivers ignore redirect when "all" is present.`)
    } else {
      ctx.lookups++
      node.ownLookups++
      await recurse(redirect.value, 'redirect')
    }
  }
  return node
}

/** DNS lookups used by a record and everything it pulls in. */
export function subtreeLookups(node: SpfNode): number {
  return node.ownLookups + node.children.reduce((sum, c) => sum + subtreeLookups(c), 0)
}

/** The qualifier that decides what happens to unlisted servers, following redirects. */
function finalAll(node: SpfNode): SpfQualifier | null {
  const all = node.terms.find((t) => t.type === 'mechanism' && t.name === 'all')
  if (all) return all.qualifier
  const redirect = node.children.find((c) => c.via === 'redirect')
  return redirect ? finalAll(redirect) : null
}

function summarize(ctx: Ctx, domain: string, root: SpfNode, hasMx: boolean): SpfCheckResult {
  const allQ = finalAll(root)
  const add = (level: IssueLevel, code: string, message: string) => ctx.issues.push({ level, code, message, domain })
  if (allQ === '+') add('error', 'plus-all', '"+all" lets every server on the internet send as your domain. Change it to "~all" or "-all".')
  else if (allQ === '?') add('warning', 'neutral-all', '"?all" is neutral: it tells receivers nothing about servers you didn\'t list, so it gives no protection.')
  else if (allQ === null) add('warning', 'no-all', 'The record doesn\'t end with "all", so receivers treat unlisted servers as neutral. Add "~all" or "-all" at the end.')
  if (ctx.lookups > LOOKUP_LIMIT) {
    add('error', 'too-many-lookups', `The record needs ${ctx.lookups} DNS lookups. The limit is ${LOOKUP_LIMIT}, so receivers stop and treat SPF as broken (permerror).`)
  } else if (ctx.lookups === LOOKUP_LIMIT) {
    add('warning', 'near-limit', `The record uses all ${LOOKUP_LIMIT} allowed DNS lookups. One more include would break SPF for all your mail.`)
  } else if (ctx.lookups === LOOKUP_LIMIT - 1) {
    add('warning', 'near-limit', `The record uses 9 of the ${LOOKUP_LIMIT} allowed DNS lookups. There's room for one more lookup, and most includes cost more than one.`)
  }
  if (ctx.voids > VOID_LIMIT) {
    add('error', 'too-many-voids', `${ctx.voids} lookups returned nothing. RFC 7208 lets receivers fail SPF after ${VOID_LIMIT} of these "void" lookups.`)
  }
  const order: Record<IssueLevel, number> = { error: 0, warning: 1, info: 2 }
  const issues = [...ctx.issues].sort((a, b) => order[a.level] - order[b.level])
  const outcome: SpfOutcome = issues.some((i) => i.level === 'error') ? 'invalid' : issues.some((i) => i.level === 'warning') ? 'warnings' : 'valid'
  return {
    domain,
    outcome,
    record: root.record,
    root,
    totalLookups: ctx.lookups,
    voidLookups: ctx.voids,
    allQualifier: allQ,
    issues,
    ip4: Array.from(ctx.ip4),
    ip6: Array.from(ctx.ip6),
    hasMx,
    nearMisses: [],
    resolver: ctx.resolver,
  }
}

const newCtx = (skipHosts = false): Ctx => ({ lookups: 0, voids: 0, queries: 0, issues: [], ip4: new Set(), ip6: new Set(), resolver: '', skipHosts })

function cleanDomain(rawInput: string): string {
  const domain = normalizeDomainInput(rawInput)
  if (!domain) throw new SpfInputError('Enter a domain, such as example.com.')
  if (!looksLikeDomain(domain)) throw new SpfInputError('That doesn’t look like a domain. Enter something like example.com.')
  try {
    return new URL(`http://${domain}`).hostname
  } catch {
    return domain
  }
}

/** Checks the SPF record a domain publishes. */
export async function checkSpf(rawInput: string): Promise<SpfCheckResult> {
  const domain = cleanDomain(rawInput)
  const ctx = newCtx()
  const [f, mx] = await Promise.all([fetchSpf(ctx, domain), resolveDns(domain, 'MX').catch(() => null)])
  const hasMx = !!mx && answersOfType(mx, 'MX').some((x) => !/^\d+\s+\.$/.test(x.data.trim()))
  const empty = { domain, record: null, root: null, totalLookups: 0, voidLookups: 0, allQualifier: null, ip4: [], ip6: [], hasMx, resolver: ctx.resolver }
  if (f.status === 'nxdomain') return { ...empty, outcome: 'nxdomain', issues: [], nearMisses: [] }
  // Near misses like "v=spf 1 ..." or "spf1 ..." are shown so the owner can fix them.
  if (f.status === 'none') return { ...empty, outcome: 'none', issues: [], nearMisses: f.nearMisses }
  if (f.status === 'multiple') {
    ctx.issues.push({ level: 'error', code: 'multiple', message: `${domain} publishes ${f.count} SPF records. RFC 7208 allows exactly one, so receivers treat SPF as broken (permerror). Merge them into one record.`, domain })
  }
  const root = await analyze(ctx, domain, f.record!, 'root', [domain])
  return summarize(ctx, domain, root, hasMx)
}

/** Reads the SPF record a domain publishes, without checking it (for the builder). */
export async function fetchSpfRecord(rawInput: string): Promise<{ domain: string; status: 'ok' | 'none' | 'nxdomain' | 'multiple'; record: string | null }> {
  const domain = cleanDomain(rawInput)
  const f = await fetchSpf(newCtx(), domain)
  return { domain, status: f.status, record: f.record }
}

/** Checks a record you haven't published yet (for the builder). */
export async function checkSpfDraft(rawDomain: string, record: string): Promise<SpfCheckResult> {
  const domain = rawDomain.trim() ? cleanDomain(rawDomain) : 'example.com'
  const ctx = newCtx(!rawDomain.trim())
  if (!isSpfRecord(record)) throw new SpfInputError('An SPF record has to start with v=spf1.')
  const root = await analyze(ctx, domain, record.trim(), 'draft', [domain])
  return summarize(ctx, domain, root, true)
}

export interface SpfBuildOptions {
  includes: string[]
  ip4: string[]
  ip6: string[]
  mx: boolean
  a: boolean
  /** Terms from a loaded record that the form has no field for, kept as written. */
  extra: string[]
  all: '-' | '~'
}

/** Builds an SPF record in the usual order: a, mx, ip4, ip6, include, other terms, all. */
export function buildSpfRecord(o: SpfBuildOptions): string {
  const parts = ['v=spf1']
  if (o.a) parts.push('a')
  if (o.mx) parts.push('mx')
  for (const ip of o.ip4.map((s) => s.trim()).filter(Boolean)) parts.push(`ip4:${ip}`)
  for (const ip of o.ip6.map((s) => s.trim()).filter(Boolean)) parts.push(`ip6:${ip}`)
  for (const inc of o.includes) parts.push(`include:${inc}`)
  parts.push(...o.extra)
  parts.push(`${o.all}all`)
  return parts.join(' ')
}

/**
 * Turns a published record into builder fields, so a sender can be added
 * without retyping the rest. Returns null for records the form can't hold
 * (a redirect), which the user has to edit by hand.
 */
export function recordToBuildOptions(record: string): (SpfBuildOptions & { changedAll: boolean }) | null {
  const { terms } = parseSpfRecord(record, '')
  if (terms.some((t) => t.name === 'redirect')) return null
  const o: SpfBuildOptions & { changedAll: boolean } = { includes: [], ip4: [], ip6: [], mx: false, a: false, extra: [], all: '~', changedAll: false }
  for (const t of terms) {
    const plain = t.qualifier === '+'
    if (t.name === 'all') {
      o.all = t.qualifier === '-' ? '-' : '~'
      o.changedAll = t.qualifier !== '-' && t.qualifier !== '~'
    } else if (plain && t.name === 'include') o.includes.push(stripDot(t.value))
    else if (plain && t.name === 'ip4') o.ip4.push(t.value + (t.cidr ? `/${t.cidr}` : ''))
    else if (plain && t.name === 'ip6') o.ip6.push(t.value + (t.cidr ? `/${t.cidr}` : ''))
    else if (plain && t.name === 'a' && !t.value && !t.cidr) o.a = true
    else if (plain && t.name === 'mx' && !t.value && !t.cidr) o.mx = true
    else o.extra.push(t.raw)
  }
  return o
}
