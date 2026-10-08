/**
 * Core email extraction, cleaning, filtering, and deduplication logic.
 * Runs 100% in-browser or in a Web Worker (zero external dependencies).
 */

export interface ExtractorOptions {
  deduplicate?: boolean
  sortBy?: 'none' | 'alpha' | 'domain'
  includeDomains?: string[]
  excludeDomains?: string[]
  excludeRoleBased?: boolean
  writtenOutObfuscation?: boolean
  lowercaseWholeAddress?: boolean
}

export interface ExtractedEmailItem {
  email: string
  localPart: string
  domain: string
  tld: string
}

export interface ExtractionResult {
  items: ExtractedEmailItem[]
  totalFound: number
  uniqueCount: number
  topDomains: { domain: string; count: number }[]
}

export const COMMON_ROLE_PREFIXES = new Set([
  'admin',
  'administrator',
  'support',
  'info',
  'sales',
  'contact',
  'help',
  'billing',
  'marketing',
  'team',
  'hello',
  'press',
  'jobs',
  'careers',
  'media',
  'security',
  'privacy',
  'legal',
  'office',
  'hr',
  'finance',
  'accounting',
  'operations',
  'service',
  'services',
  'inquiries',
  'feedback',
  'postmaster',
  'hostmaster',
  'webmaster',
  'abuse',
  'noc',
  'compliance',
  'general',
  'enquiries',
])

export const IMAGE_AND_MEDIA_EXTENSIONS = new Set([
  'png',
  'jpg',
  'jpeg',
  'gif',
  'svg',
  'webp',
  'avif',
  'ico',
  'bmp',
  'tiff',
  'tif',
  'mp4',
  'webm',
  'zip',
  'pdf',
  'woff',
  'woff2',
  'ttf',
  'eot',
  'css',
  'js',
  'map',
])

/**
 * Pre-processes text to decode HTML entities and popular obfuscations.
 * Bracketed [at]/[dot] obfuscations are only replaced if writtenOut is true.
 */
export function preprocessText(text: string, writtenOut = false): string {
  if (!text) return ''

  let processed = text

  // 1. Decode numeric entities &#64; -> @, &#x40; -> @, etc.
  processed = processed.replace(/&#(\d+);/g, (_, dec) => {
    try {
      const code = parseInt(dec, 10)
      return String.fromCharCode(code)
    } catch {
      return _
    }
  })
  processed = processed.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
    try {
      const code = parseInt(hex, 16)
      return String.fromCharCode(code)
    } catch {
      return _
    }
  })

  // 2. Decode common named entities
  processed = processed
    .replace(/&commat;/gi, '@')
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&period;/gi, '.')

  // 3. Decode obfuscated email patterns: [at], (at), {at} and matching dot versions
  // OFF by default. Only enabled when writtenOut is true.
  if (writtenOut) {
    processed = processed
      .replace(/(\w)[\s]*(\[at\]|\(at\)|\{at\})[\s]*(\w)/gi, '$1@$3')
      .replace(/(\w)[\s]*(\[dot\]|\(dot\)|\{dot\})[\s]*(\w)/gi, '$1.$3')
  }

  return processed
}

/**
 * Strips leading/trailing punctuation and protocol artifacts from an extracted candidate string.
 * Preserves local-part casing, lowercases domain.
 */
export function cleanCandidate(candidate: string): string | null {
  let cleaned = candidate.trim()

  // Remove mailto: prefix
  if (cleaned.toLowerCase().startsWith('mailto:')) {
    cleaned = cleaned.slice(7).trim()
  }

  // Remove enclosing angle brackets, quotes, parentheses, brackets
  cleaned = cleaned.replace(/^[<(\[\{"']+|[>)\],;:\.!"'\}]+$/g, '')

  // Remove trailing dots, commas, slashes, or query string leftovers
  cleaned = cleaned.split('?')[0].split('#')[0]

  // If there's an @ symbol, check parts
  const atIndex = cleaned.lastIndexOf('@')
  if (atIndex <= 0 || atIndex === cleaned.length - 1) {
    return null
  }

  let local = cleaned.slice(0, atIndex)
  let domain = cleaned.slice(atIndex + 1)

  // Strip leading/trailing dots and special chars from local and domain
  local = local.replace(/^\.+|\.+$/g, '')
  domain = domain.replace(/^\.+|\.+$/g, '').toLowerCase()

  // Disallow consecutive dots
  if (local.includes('..') || domain.includes('..')) {
    return null
  }

  // Domain must contain at least one dot
  if (!domain.includes('.')) {
    return null
  }

  const domainParts = domain.split('.')
  const tld = domainParts[domainParts.length - 1]

  // TLD must be alphabetic and at least 2 characters
  if (!/^[a-z]{2,24}$/i.test(tld)) {
    return null
  }

  // Check if it's a false positive like retina image logo@2x.png or icon@3x.svg
  if (IMAGE_AND_MEDIA_EXTENSIONS.has(tld)) {
    return null
  }

  // Local part shouldn't contain spaces or control chars
  if (/[\s<>()[\]\\,;:]/.test(local)) {
    return null
  }

  // Domain shouldn't contain invalid characters
  if (!/^[a-z0-9.-]+$/.test(domain)) {
    return null
  }

  return `${local}@${domain}`
}

/**
 * Extracts all valid email addresses from raw text or parsed document strings.
 */
export function extractEmails(
  rawText: string,
  options: ExtractorOptions = {}
): ExtractionResult {
  const {
    deduplicate = true,
    sortBy = 'none',
    includeDomains = [],
    excludeDomains = [],
    excludeRoleBased = false,
    writtenOutObfuscation = false,
    lowercaseWholeAddress = false,
  } = options

  const text = preprocessText(rawText, writtenOutObfuscation)

  // RFC-compatible candidate regex
  const emailRegex = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+/g

  const matches = text.match(emailRegex) || []
  let totalFound = 0
  const candidateList: string[] = []

  for (const match of matches) {
    const cleaned = cleanCandidate(match)
    if (cleaned) {
      totalFound++
      candidateList.push(cleaned)
    }
  }

  // Clean domain filter sets
  const cleanIncludeDomains = new Set(
    includeDomains.map((d) => d.trim().toLowerCase().replace(/^@/, '')).filter(Boolean)
  )
  const cleanExcludeDomains = new Set(
    excludeDomains.map((d) => d.trim().toLowerCase().replace(/^@/, '')).filter(Boolean)
  )

  // Deduplicate and filter
  // Case-only duplicates collapse into one, keeping the first capitalization seen.
  // The whole address is only lowercased if lowercaseWholeAddress is on.
  // The domain part is lowercased by default.
  const seenKeys = new Set<string>()
  const domainCounts = new Map<string, number>()
  const finalItems: ExtractedEmailItem[] = []

  for (const candidate of candidateList) {
    const atIndex = candidate.indexOf('@')
    let localPart = candidate.slice(0, atIndex)
    const domain = candidate.slice(atIndex + 1) // already lowercased in cleanCandidate
    const domainParts = domain.split('.')
    const tld = domainParts[domainParts.length - 1]

    // Domain filters
    if (cleanIncludeDomains.size > 0 && !cleanIncludeDomains.has(domain)) {
      continue
    }
    if (cleanExcludeDomains.size > 0 && cleanExcludeDomains.has(domain)) {
      continue
    }

    // Role-based email exclusion (off by default)
    if (excludeRoleBased) {
      const lowerLocal = localPart.toLowerCase()
      const baseLocal = lowerLocal.split('+')[0].split('.')[0]
      if (COMMON_ROLE_PREFIXES.has(baseLocal) || COMMON_ROLE_PREFIXES.has(lowerLocal)) {
        continue
      }
    }

    const key = candidate.toLowerCase()
    if (deduplicate && seenKeys.has(key)) {
      continue
    }

    if (deduplicate) {
      seenKeys.add(key)
    }

    if (lowercaseWholeAddress) {
      localPart = localPart.toLowerCase()
    }

    const email = `${localPart}@${domain}`

    // Track domain count
    domainCounts.set(domain, (domainCounts.get(domain) || 0) + 1)

    finalItems.push({
      email,
      localPart,
      domain,
      tld,
    })
  }

  // Sorting
  if (sortBy === 'alpha') {
    finalItems.sort((a, b) => a.email.localeCompare(b.email, undefined, { sensitivity: 'base' }))
  } else if (sortBy === 'domain') {
    finalItems.sort((a, b) => {
      const domCmp = a.domain.localeCompare(b.domain)
      if (domCmp !== 0) return domCmp
      return a.localPart.localeCompare(b.localPart, undefined, { sensitivity: 'base' })
    })
  }

  // Top domains list
  const topDomains = Array.from(domainCounts.entries())
    .map(([domain, count]) => ({ domain, count }))
    .sort((a, b) => b.count - a.count || a.domain.localeCompare(b.domain))

  return {
    items: finalItems,
    totalFound,
    uniqueCount: deduplicate ? finalItems.length : seenKeys.size,
    topDomains,
  }
}
