/**
 * Email Permutator Core Logic
 * Browser-safe, pure TypeScript with zero external dependencies.
 */

export interface PermutatorInput {
  firstName: string
  lastName?: string
  middleName?: string
  nickname?: string
  domains: string[]
}

export interface GeneratedEmail {
  email: string
  pattern: string
  domain: string
}

/**
 * Clean a domain string:
 * - strip http://, https://
 * - strip www.
 * - strip leading @
 * - strip path / query / hash
 * - trim and lowercase
 */
export function cleanDomain(raw: string): string {
  if (!raw) return ''
  let d = raw.trim().toLowerCase()
  d = d.replace(/^https?:\/\//i, '')
  d = d.replace(/^@+/, '')
  d = d.replace(/^www\./i, '')
  // strip path or query or hash
  d = d.split('/')[0].split('?')[0].split('#')[0]
  // strip trailing colon/port or dots
  d = d.replace(/:\d+$/, '').replace(/^\.+|\.+$/g, '')
  return d
}

/**
 * Validate a domain hostname
 */
export function isValidDomain(domain: string): boolean {
  if (!domain || domain.length > 253) return false
  // Hostname regex: labels separated by dots, each 1-63 chars, TLD at least 2 chars
  const domainRegex = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i
  return domainRegex.test(domain)
}

/**
 * Parse comma or whitespace separated domain string into cleaned valid domains
 */
export function parseDomains(raw: string): { valid: string[]; invalid: string[] } {
  const parts = raw
    .split(/[,;\s]+/)
    .map((p) => cleanDomain(p))
    .filter(Boolean)

  const valid: string[] = []
  const invalid: string[] = []

  for (const p of parts) {
    if (isValidDomain(p)) {
      if (!valid.includes(p)) valid.push(p)
    } else {
      if (!invalid.includes(p)) invalid.push(p)
    }
  }

  return { valid, invalid }
}

/**
 * Normalizes a single word/part:
 * - lowercase
 * - ß -> ss
 * - drop apostrophes and full stops
 */
function basicCleanWord(str: string): string {
  return str
    .toLowerCase()
    .replace(/ß/g, 'ss')
    .replace(/['’`.]/g, '')
    .trim()
}

/**
 * Handles accents and umlauts for a word without spaces/hyphens:
 * - remove accents (José -> jose, Zoë -> zoe)
 * - for ä, ö, ü generate BOTH spellings (Müller -> muller and mueller)
 */
function expandUmlautsAndAccents(word: string): string[] {
  const cleaned = basicCleanWord(word)
  if (!cleaned) return []

  const hasUmlaut = /[äöü]/.test(cleaned)

  // Variant 1: standard accent removal (ä -> a, ö -> o, ü -> u, é -> e, etc.)
  const stripped = cleaned
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  if (!hasUmlaut) {
    return [stripped]
  }

  // Variant 2: German transliteration (ä -> ae, ö -> oe, ü -> ue)
  const transliterated = cleaned
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  return stripped === transliterated ? [stripped] : [stripped, transliterated]
}

/**
 * Generate normalized name variants for a given name string according to rules:
 * - lowercase
 * - remove accents (José -> jose, Zoë -> zoe)
 * - for ä, ö, ü generate BOTH spellings (Müller -> muller and mueller); ß -> ss
 * - drop apostrophes and full stops (O'Brien -> obrien)
 * - names with spaces (de la Cruz): generate joined form (delacruz) and last word only (cruz)
 * - hyphenated names (Smith-Jones): generate with hyphen (smith-jones), joined (smithjones) and first part (smith)
 */
export function normalizeNameVariants(raw: string): string[] {
  if (!raw) return []

  const cleaned = raw.trim()
  if (!cleaned) return []

  // Check for spaces (e.g. de la Cruz)
  if (/\s+/.test(cleaned)) {
    const parts = cleaned.split(/\s+/).filter(Boolean)
    // Joined form: "delacruz"
    const joinedRaw = parts.join('')
    const joinedVariants = expandUmlautsAndAccents(joinedRaw)
    // Last word only: "cruz"
    const lastWordRaw = parts[parts.length - 1]
    const lastWordVariants = expandUmlautsAndAccents(lastWordRaw)

    const result: string[] = []
    for (const v of [...joinedVariants, ...lastWordVariants]) {
      if (v && !result.includes(v)) result.push(v)
    }
    return result
  }

  // Check for hyphens (e.g. Smith-Jones)
  if (cleaned.includes('-')) {
    const parts = cleaned.split('-').filter(Boolean)
    if (parts.length > 1) {
      // 1. With hyphen (smith-jones)
      const hyphenVariants: string[] = []
      const part0Exp = expandUmlautsAndAccents(parts[0])
      const part1Exp = expandUmlautsAndAccents(parts[1])
      for (const p0 of part0Exp) {
        for (const p1 of part1Exp) {
          const combined = `${p0}-${p1}`
          if (!hyphenVariants.includes(combined)) hyphenVariants.push(combined)
        }
      }

      // 2. Joined (smithjones)
      const joinedExp = expandUmlautsAndAccents(parts.join(''))

      // 3. First part only (smith)
      const firstPartExp = expandUmlautsAndAccents(parts[0])

      const result: string[] = []
      for (const v of [...hyphenVariants, ...joinedExp, ...firstPartExp]) {
        if (v && !result.includes(v)) result.push(v)
      }
      return result
    }
  }

  // Single word
  return expandUmlautsAndAccents(cleaned)
}

/**
 * Generate permutations for a single person and list of domains.
 */
export function generatePermutations(input: PermutatorInput): GeneratedEmail[] {
  const domains = input.domains.map((d) => cleanDomain(d)).filter((d) => isValidDomain(d))
  if (domains.length === 0) return []

  const firstVariants = normalizeNameVariants(input.firstName)
  if (firstVariants.length === 0) return []

  const lastVariants = input.lastName ? normalizeNameVariants(input.lastName) : []
  const middleVariants = input.middleName ? normalizeNameVariants(input.middleName) : []
  const nickVariants = input.nickname ? normalizeNameVariants(input.nickname) : []

  const results: GeneratedEmail[] = []
  const seenEmails = new Set<string>()

  function addEmail(localPart: string, pattern: string, domain: string) {
    if (!localPart) return
    const email = `${localPart}@${domain}`
    if (!seenEmails.has(email)) {
      seenEmails.add(email)
      results.push({ email, pattern, domain })
    }
  }

  for (const domain of domains) {
    // If no last name, only first-name formats
    if (lastVariants.length === 0) {
      for (const first of firstVariants) {
        addEmail(first, 'first', domain)
        addEmail(first.charAt(0), 'f', domain)
      }
      continue
    }

    // Standard patterns when both first and last are provided:
    // Order: first.last, flast, first, firstlast, first_last, f.last, firstl, first.l,
    // last.first, lastf, last, last_first, lastfirst, first-last, f_last, l.first, lfirst, f
    for (const first of firstVariants) {
      const f = first.charAt(0)
      for (const last of lastVariants) {
        const l = last.charAt(0)

        // 1. first.last
        addEmail(`${first}.${last}`, 'first.last', domain)
        // 2. flast
        addEmail(`${f}${last}`, 'flast', domain)
        // 3. first
        addEmail(first, 'first', domain)
        // 4. firstlast
        addEmail(`${first}${last}`, 'firstlast', domain)
        // 5. first_last
        addEmail(`${first}_${last}`, 'first_last', domain)
        // 6. f.last
        addEmail(`${f}.${last}`, 'f.last', domain)
        // 7. firstl
        addEmail(`${first}${l}`, 'firstl', domain)
        // 8. first.l
        addEmail(`${first}.${l}`, 'first.l', domain)
        // 9. last.first
        addEmail(`${last}.${first}`, 'last.first', domain)
        // 10. lastf
        addEmail(`${last}${f}`, 'lastf', domain)
        // 11. last
        addEmail(last, 'last', domain)
        // 12. last_first
        addEmail(`${last}_${first}`, 'last_first', domain)
        // 13. lastfirst
        addEmail(`${last}${first}`, 'lastfirst', domain)
        // 14. first-last
        addEmail(`${first}-${last}`, 'first-last', domain)
        // 15. f_last
        addEmail(`${f}_${last}`, 'f_last', domain)
        // 16. l.first
        addEmail(`${l}.${first}`, 'l.first', domain)
        // 17. lfirst
        addEmail(`${l}${first}`, 'lfirst', domain)
        // 18. f
        addEmail(f, 'f', domain)

        // Middle name patterns: first.m.last, fmlast, firstmlast, first.middle.last
        if (middleVariants.length > 0) {
          for (const mid of middleVariants) {
            const m = mid.charAt(0)
            addEmail(`${first}.${m}.${last}`, 'first.m.last', domain)
            addEmail(`${f}${m}${last}`, 'fmlast', domain)
            addEmail(`${first}${m}${last}`, 'firstmlast', domain)
            addEmail(`${first}.${mid}.${last}`, 'first.middle.last', domain)
          }
        }

        // Nickname patterns: nick.last, nick, nlast, nicklast
        if (nickVariants.length > 0) {
          for (const nick of nickVariants) {
            const n = nick.charAt(0)
            addEmail(`${nick}.${last}`, 'nick.last', domain)
            addEmail(nick, 'nick', domain)
            addEmail(`${n}${last}`, 'nlast', domain)
            addEmail(`${nick}${last}`, 'nicklast', domain)
          }
        }
      }
    }
  }

  return results
}

/**
 * Bulk CSV parsing helper
 * Parses CSV lines into rows, detects headers, maps columns
 */
export interface BulkRow {
  firstName: string
  lastName?: string
  domain: string
}

export function parseCsvRows(csvText: string): string[][] {
  const lines = csvText.split(/\r?\n/).filter((l) => l.trim().length > 0)
  const rows: string[][] = []

  for (const line of lines) {
    // Basic CSV cell extraction supporting quotes
    const cells: string[] = []
    let inQuotes = false
    let currentCell = ''

    for (let i = 0; i < line.length; i++) {
      const char = line[i]
      if (char === '"') {
        if (inQuotes && line[i + 1] === '"') {
          currentCell += '"'
          i++
        } else {
          inQuotes = !inQuotes
        }
      } else if (char === ',' && !inQuotes) {
        cells.push(currentCell.trim())
        currentCell = ''
      } else {
        currentCell += char
      }
    }
    cells.push(currentCell.trim())
    rows.push(cells)
  }

  return rows
}

export function detectCsvColumns(firstRow: string[]): {
  hasHeader: boolean
  firstNameIndex: number
  lastNameIndex: number
  domainIndex: number
} {
  let firstNameIndex = -1
  let lastNameIndex = -1
  let domainIndex = -1

  const lower = firstRow.map((c) => c.toLowerCase().replace(/[^a-z0-9]/g, ''))
  let score = 0

  lower.forEach((col, idx) => {
    if (['firstname', 'first', 'fname', 'givenname'].includes(col)) {
      firstNameIndex = idx
      score++
    } else if (['lastname', 'last', 'lname', 'surname', 'familyname'].includes(col)) {
      lastNameIndex = idx
      score++
    } else if (['domain', 'companydomain', 'website', 'companyurl', 'emaildomain'].includes(col)) {
      domainIndex = idx
      score++
    }
  })

  const hasHeader = score >= 2

  // Fallback defaults if no header detected
  if (!hasHeader) {
    firstNameIndex = 0
    lastNameIndex = firstRow.length > 2 ? 1 : -1
    domainIndex = firstRow.length > 2 ? 2 : 1
  }

  return { hasHeader, firstNameIndex, lastNameIndex, domainIndex }
}
