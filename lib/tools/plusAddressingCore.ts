/**
 * Plus addressing (sub-addressing): build tagged addresses, and find addresses
 * in a list that reach the same inbox. Provider rules come from each provider's
 * documentation, checked on 2026-10-13 (sources in
 * targetpulse-seo/plans/25-gmail-plus-addressing-plan.md).
 * No path-alias imports, so the file also runs under plain Node for quick tests.
 *
 * The core holds no user-facing text. Provider notes, input errors and skip
 * reasons are keys; the wording for each language is in
 * lib/i18n/tools/plusAddressingToolStrings.ts.
 */

export type PlusSupport = 'yes' | 'tested' | 'other-separator' | 'unknown'

export interface ProviderRule {
  name: string
  domains: string[]
  support: PlusSupport
  /** Gmail ignores dots in the username, so a.b@gmail.com and ab@gmail.com are one inbox. */
  dotsIgnored: boolean
}

export const PROVIDER_RULES: ProviderRule[] = [
  {
    name: 'Gmail',
    domains: ['gmail.com', 'googlemail.com'],
    support: 'yes',
    dotsIgnored: true,
  },
  {
    name: 'Outlook.com',
    domains: ['outlook.com', 'hotmail.com', 'live.com', 'msn.com', 'hotmail.co.uk', 'outlook.co.uk', 'live.co.uk', 'hotmail.fr', 'outlook.fr', 'live.fr', 'hotmail.de', 'outlook.de', 'hotmail.it', 'outlook.it', 'hotmail.es', 'outlook.es'],
    support: 'yes',
    dotsIgnored: false,
  },
  {
    name: 'iCloud Mail',
    domains: ['icloud.com', 'me.com', 'mac.com'],
    support: 'tested',
    dotsIgnored: false,
  },
  {
    name: 'Proton Mail',
    domains: ['proton.me', 'protonmail.com', 'protonmail.ch', 'pm.me'],
    support: 'yes',
    dotsIgnored: false,
  },
  {
    name: 'Fastmail',
    domains: ['fastmail.com', 'fastmail.fm'],
    support: 'yes',
    dotsIgnored: false,
  },
  {
    name: 'Yandex Mail',
    domains: ['yandex.com', 'yandex.ru', 'ya.ru'],
    support: 'yes',
    dotsIgnored: false,
  },
  {
    name: 'Yahoo Mail',
    domains: ['yahoo.com', 'ymail.com', 'rocketmail.com', 'yahoo.co.uk', 'yahoo.fr', 'yahoo.de', 'yahoo.ca', 'yahoo.com.au', 'yahoo.in'],
    support: 'other-separator',
    dotsIgnored: false,
  },
]

const DOMAIN_RULE = new Map<string, ProviderRule>()
for (const r of PROVIDER_RULES) for (const d of r.domains) DOMAIN_RULE.set(d, r)

export const providerFor = (domain: string): ProviderRule | null => DOMAIN_RULE.get(domain.toLowerCase()) ?? null

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type PlusInputCode = 'empty' | 'invalid'

/** Thrown for an unusable address. `code` picks the message in the tool strings. */
export class PlusInputError extends Error {
  code: PlusInputCode
  constructor(code: PlusInputCode) {
    super(code)
    this.code = code
  }
}

/** Why a tag was skipped: characters outside a-z 0-9 . _ - , or a local part over 64 characters. */
export type PlusSkipReason = 'chars' | 'too-long'

export interface PlusResult {
  base: string
  local: string
  domain: string
  provider: ProviderRule | null
  addresses: { tag: string; address: string }[]
  /** Tags that were skipped, with the reason. */
  skipped: { tag: string; reason: PlusSkipReason }[]
}

/** Builds name+tag@domain for each tag. */
export function makePlusAddresses(rawAddress: string, rawTags: string): PlusResult {
  const address = rawAddress.trim()
  if (!address) throw new PlusInputError('empty')
  if (!EMAIL_RE.test(address)) throw new PlusInputError('invalid')
  const at = address.lastIndexOf('@')
  const domain = address.slice(at + 1).toLowerCase()
  // Start from the base address if the user typed one that already has a tag.
  const local = address.slice(0, at).split('+')[0]
  const provider = providerFor(domain)
  const tags = rawTags
    .split(/[\n,;]+/)
    .map((t) => t.trim())
    .filter(Boolean)
  const seen = new Set<string>()
  const addresses: PlusResult['addresses'] = []
  const skipped: PlusResult['skipped'] = []
  for (const raw of tags) {
    const tag = raw.toLowerCase().replace(/\s+/g, '-')
    if (seen.has(tag)) continue
    seen.add(tag)
    if (!/^[a-z0-9._-]+$/.test(tag)) {
      skipped.push({ tag: raw, reason: 'chars' })
      continue
    }
    const full = `${local}+${tag}@${domain}`
    // RFC 5321: 64 octets before the @. RFC 3696 erratum 1690: 254 in total.
    if (local.length + 1 + tag.length > 64 || full.length > 254) {
      skipped.push({ tag: raw, reason: 'too-long' })
      continue
    }
    addresses.push({ tag, address: full })
  }
  return { base: `${local}@${domain}`, local, domain, provider, addresses, skipped }
}

export interface NormalizedAddress {
  original: string
  key: string
  provider: string | null
  changed: boolean
}

/**
 * The address a message really lands in, for spotting duplicates only.
 * Gmail: dots and +tags removed, googlemail.com read as gmail.com.
 * Other providers that support +: the +tag removed, dots kept.
 * Yahoo, unknown providers and custom domains are left alone, unless
 * stripAllTags is on (for lists full of Google Workspace or Microsoft 365 addresses).
 */
export function normalizeAddress(address: string, stripAllTags = false): NormalizedAddress {
  const original = address.trim()
  const at = original.lastIndexOf('@')
  let local = original.slice(0, at)
  let domain = original.slice(at + 1).toLowerCase()
  const rule = providerFor(domain)
  if (rule?.name === 'Gmail') {
    domain = 'gmail.com'
    local = local.split('+')[0].replace(/\./g, '').toLowerCase()
  } else if (rule && (rule.support === 'yes' || rule.support === 'tested')) {
    local = local.split('+')[0].toLowerCase()
  } else if (!rule && stripAllTags && local.indexOf('+') > 0) {
    local = local.split('+')[0].toLowerCase()
  } else {
    local = local.toLowerCase()
  }
  const key = `${local}@${domain}`
  return { original, key, provider: rule?.name ?? null, changed: key !== original.toLowerCase() }
}

export interface DuplicateGroup {
  key: string
  provider: string | null
  members: string[]
}

export interface CleanResult {
  found: number
  unique: string[]
  groups: DuplicateGroup[]
  invalid: number
}

const FIND_RE = /[^\s,;<>"'()[\]]+@[^\s,;<>"'()[\]]+\.[a-z]{2,}/gi

/** Finds the addresses in pasted text and groups the ones that reach the same inbox. */
export function findDuplicates(text: string, stripAllTags = false): CleanResult {
  const tokens = text.split(/[\n\r,;\t]+/).map((t) => t.trim()).filter(Boolean)
  const found: string[] = []
  let invalid = 0
  for (const t of tokens) {
    const m = t.match(FIND_RE)
    if (m) found.push(...m.map((x) => x.replace(/\.$/, '')))
    else if (/\S/.test(t) && !/^(email|e-mail|address|name)s?$/i.test(t)) invalid++
  }
  const byKey = new Map<string, DuplicateGroup>()
  const unique: string[] = []
  for (const a of found) {
    const n = normalizeAddress(a, stripAllTags)
    const g = byKey.get(n.key)
    if (g) {
      g.members.push(a)
    } else {
      byKey.set(n.key, { key: n.key, provider: n.provider, members: [a] })
      // Keep the first address exactly as written, so the person's filters keep working.
      unique.push(a)
    }
  }
  const groups = Array.from(byKey.values()).filter((g) => g.members.length > 1)
  return { found: found.length, unique, groups, invalid }
}
