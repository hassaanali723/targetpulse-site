/**
 * Core DMARC Generator, Validator, External Consent Helper, and RFC 9989 (2026) Cleaner.
 * Runs 100% in-browser with zero external dependencies.
 */

// Shared with the other domain tools; re-exported so existing imports keep working.
import { normalizeDomainInput } from './domainInput'
export { normalizeDomainInput }

export type DmarcPolicy = 'none' | 'quarantine' | 'reject'
export type DmarcAlignment = 'r' | 's'
export type DmarcFailureOption = '0' | '1' | 'd' | 's'

export interface DmarcTagConfig {
  domain: string
  policy: DmarcPolicy
  subdomainPolicy?: DmarcPolicy | 'inherit'
  nonExistentSubdomainPolicy?: DmarcPolicy | 'none_specified'
  aggregateReports?: string // rua mailto addresses
  failureReports?: string // ruf mailto addresses
  dkimAlignment?: DmarcAlignment
  spfAlignment?: DmarcAlignment
  failureOptions?: DmarcFailureOption
  testingMode?: boolean // RFC 9989 t=y
  showDefaultTags?: boolean // Default false
}

export interface ExternalConsentRecord {
  destinationDomain: string
  host: string
  type: string
  value: string
  reason: string
}

/** Stable codes for the warnings, so a localized page can show its own wording. */
export type DmarcWarningCode =
  /** A report address isn't a valid email address; `address` holds it as typed. */
  | 'bad-address'
  | 'reject-no-reports'
  | 'reject-dkim'
  | 'strict-alignment'
  | 'ruf-unreliable'

export interface DmarcWarning {
  code: DmarcWarningCode
  /** The English text, the same as the matching entry of `warnings`. */
  message: string
  /** bad-address: the address as the user typed it. */
  address?: string
}

/**
 * Stable codes for the cleaner's change notes. With `tag` and `value` they let a
 * localized page rebuild the explanation.
 */
export type DmarcChangeCode =
  /** The record didn't start with v=DMARC1. */
  | 'missing-version'
  /** No valid p= tag; `value` is what p= held, or empty. */
  | 'bad-policy'
  /** pct, rf or ri (in `tag`) was removed; `value` is its old value. */
  | 'retired'
  /** pct was below 100; suggests t=y instead. */
  | 'pct-partial'
  /** sp= matched p=; `value` is the sp value as written. */
  | 'sp-matches'
  /** adkim=r, aspf=r or fo=0 (tag and value) is already the default. */
  | 'default'

export interface DmarcGenerationResult {
  record: string
  host: string
  fqdn: string
  warnings: string[]
  /** The same warnings, in the same order, with codes for localized pages. */
  warningItems: DmarcWarning[]
  externalConsentRecords: ExternalConsentRecord[]
}

export interface CleanedDmarcResult {
  originalRecord: string
  cleanedRecord: string
  parsedTags: Record<string, string>
  changes: {
    tag: string
    action: 'removed' | 'normalized' | 'modernized'
    explanation: string
    code: DmarcChangeCode
    /** The value the explanation quotes, or empty. */
    value: string
  }[]
  warnings: string[]
  /** The same warnings, in the same order, with codes for localized pages. */
  warningItems: DmarcWarning[]
  externalConsentRecords: ExternalConsentRecord[]
}

/**
 * Extracts domain name from an email address or raw domain.
 */
export function extractDomainFromEmailOrHost(input: string): string {
  const clean = input.trim().toLowerCase().replace(/^mailto:/, '').split('?')[0].split('!')[0]
  if (clean.includes('@')) {
    return clean.split('@')[1]
  }
  return clean
}

/**
 * Validates aggregate or failure reporting email list.
 * Normalizes plain addresses (e.g. dmarc@example.com) to mailto:dmarc@example.com.
 */
export function validateMailtoList(
  input: string
): { valid: boolean; normalized: string; domains: string[]; error?: string; invalid?: string } {
  if (!input.trim()) return { valid: true, normalized: '', domains: [] }

  const parts = input
    .split(',')
    .map((p) => p.trim())
    .filter(Boolean)

  const normalizedParts: string[] = []
  const domains: string[] = []

  for (const part of parts) {
    const raw = part.toLowerCase()
    const withPrefix = raw.startsWith('mailto:') ? raw : `mailto:${raw}`
    const emailOnly = withPrefix.slice(7).split('!')[0]

    // Validate email format
    if (!/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/.test(emailOnly)) {
      return {
        valid: false,
        normalized: '',
        domains: [],
        error: `"${part}" is not a valid email address, so it was left out of the record.`,
        invalid: part,
      }
    }

    const domain = emailOnly.split('@')[1]
    domains.push(domain)
    normalizedParts.push(withPrefix)
  }

  return {
    valid: true,
    normalized: normalizedParts.join(','),
    domains: Array.from(new Set(domains)),
  }
}

/**
 * Builds the RFC 9989 compliant DMARC record from configuration options.
 * Default tags (adkim=r, aspf=r, fo=0, t=n, psd=u) are omitted unless showDefaultTags is true.
 */
export function generateDmarcRecord(config: DmarcTagConfig): DmarcGenerationResult {
  const domain = normalizeDomainInput(config.domain)
  const showDefaults = config.showDefaultTags ?? false
  const warningItems: DmarcWarning[] = []
  const tags: string[] = ['v=DMARC1', `p=${config.policy}`]

  // Policy warnings
  if (config.policy === 'reject') {
    if (!config.aggregateReports?.trim()) {
      warningItems.push({
        code: 'reject-no-reports',
        message: 'This record blocks failing email (p=reject) but has no report address. You won’t know if real email is being refused.',
      })
    }
    warningItems.push({
      code: 'reject-dkim',
      message: 'Use p=reject only when all your email is DKIM-signed. Forwarded email often fails SPF, so SPF alone is not enough.',
    })
  }

  if (config.dkimAlignment === 's' || config.spfAlignment === 's') {
    warningItems.push({
      code: 'strict-alignment',
      message: 'Strict alignment needs an exact domain match. If a service signs or sends your email from a subdomain, such as mail.example.com, that email will fail.',
    })
  }

  // Subdomain policy (sp)
  if (config.subdomainPolicy && config.subdomainPolicy !== 'inherit') {
    if (config.subdomainPolicy === config.policy) {
      if (showDefaults) {
        tags.push(`sp=${config.subdomainPolicy}`)
      }
    } else {
      tags.push(`sp=${config.subdomainPolicy}`)
    }
  }

  // Non-existent subdomain policy (np - RFC 9989)
  if (config.nonExistentSubdomainPolicy && config.nonExistentSubdomainPolicy !== 'none_specified') {
    tags.push(`np=${config.nonExistentSubdomainPolicy}`)
  }

  // DKIM Alignment (adkim) - default is r (relaxed)
  if (config.dkimAlignment === 's') {
    tags.push('adkim=s')
  } else if (showDefaults) {
    tags.push('adkim=r')
  }

  // SPF Alignment (aspf) - default is r (relaxed)
  if (config.spfAlignment === 's') {
    tags.push('aspf=s')
  } else if (showDefaults) {
    tags.push('aspf=r')
  }

  // Failure reporting options (fo) - default is 0
  if (config.failureOptions && config.failureOptions !== '0') {
    tags.push(`fo=${config.failureOptions}`)
  } else if (showDefaults) {
    tags.push('fo=0')
  }

  // Testing mode (t - RFC 9989) - default is n (or omitted)
  if (config.testingMode) {
    tags.push('t=y')
  } else if (showDefaults) {
    tags.push('t=n')
  }

  // Public Suffix Domain (psd) - default is u
  if (showDefaults) {
    tags.push('psd=u')
  }

  // Aggregate reporting (rua). A bad address is left out and reported first,
  // because it is the one warning the user can fix by retyping.
  const reportingDomains: string[] = []
  if (config.aggregateReports && config.aggregateReports.trim()) {
    const val = validateMailtoList(config.aggregateReports)
    if (val.valid && val.normalized) {
      tags.push(`rua=${val.normalized}`)
      reportingDomains.push(...val.domains)
    } else if (val.error) {
      warningItems.unshift({ code: 'bad-address', message: val.error, address: val.invalid })
    }
  }

  // Failure reporting (ruf)
  if (config.failureReports && config.failureReports.trim()) {
    const val = validateMailtoList(config.failureReports)
    if (val.valid && val.normalized) {
      tags.push(`ruf=${val.normalized}`)
      reportingDomains.push(...val.domains)
      warningItems.push({
        code: 'ruf-unreliable',
        message: 'Many mail providers don’t send failure reports, for privacy reasons. Don’t rely on them.',
      })
    } else if (val.error) {
      warningItems.unshift({ code: 'bad-address', message: val.error, address: val.invalid })
    }
  }

  const record = tags.join('; ')
  const host = '_dmarc'
  const fqdn = domain ? `_dmarc.${domain}.` : '_dmarc'

  // Calculate external consent records required
  const externalConsentRecords: ExternalConsentRecord[] = []
  const uniqueReportingDomains = Array.from(new Set(reportingDomains))

  for (const repDom of uniqueReportingDomains) {
    if (domain && repDom !== domain && !domain.endsWith(`.${repDom}`) && !repDom.endsWith(`.${domain}`)) {
      externalConsentRecords.push({
        destinationDomain: repDom,
        host: `${domain}._report._dmarc.${repDom}.`,
        type: 'TXT',
        value: '"v=DMARC1"',
        reason: `Reports go to ${repDom}, a different domain. ${repDom} must publish this record before mail providers send reports there.`,
      })
    }
  }

  return {
    record,
    host,
    fqdn,
    warnings: warningItems.map((w) => w.message),
    warningItems,
    externalConsentRecords,
  }
}

/**
 * Parses and cleans an existing DMARC record to RFC 9989 (2026).
 */
export function cleanDmarcRecord(rawInput: string, domainContext = ''): CleanedDmarcResult {
  const originalRecord = rawInput.trim().replace(/^"|"$/g, '').trim()
  const warnings: string[] = []
  const changes: CleanedDmarcResult['changes'] = []

  // Split tags by semicolon
  const rawTags = originalRecord
    .split(';')
    .map((t) => t.trim())
    .filter(Boolean)

  const parsedTags: Record<string, string> = {}
  for (const item of rawTags) {
    const eqIdx = item.indexOf('=')
    if (eqIdx !== -1) {
      const k = item.slice(0, eqIdx).trim().toLowerCase()
      const v = item.slice(eqIdx + 1).trim()
      parsedTags[k] = v
    }
  }

  const pVal = parsedTags.p?.toLowerCase()
  const validPolicy = pVal === 'none' || pVal === 'quarantine' || pVal === 'reject'
  const newConfig: DmarcTagConfig = {
    domain: domainContext || '',
    policy: validPolicy ? (pVal as DmarcPolicy) : 'none',
    showDefaultTags: false,
  }

  // 0. Basic shape: v=DMARC1 first, and a real policy
  if (rawTags[0]?.replace(/\s/g, '').toLowerCase() !== 'v=dmarc1') {
    changes.push({
      tag: 'v',
      action: 'normalized',
      explanation: 'A DMARC record must start with v=DMARC1. Mail servers ignore it otherwise. The cleaned record starts with it.',
      code: 'missing-version',
      value: '',
    })
  }
  if (!validPolicy) {
    changes.push({
      tag: 'p',
      action: 'normalized',
      explanation: `The record had no valid policy${parsedTags.p ? ` ("p=${parsedTags.p}")` : ''}. It was set to p=none, which only monitors.`,
      code: 'bad-policy',
      value: parsedTags.p || '',
    })
  }

  // 1. Check retired tags
  if ('pct' in parsedTags) {
    const pctVal = parseInt(parsedTags.pct, 10)
    changes.push({
      tag: 'pct',
      action: 'removed',
      explanation: `pct=${parsedTags.pct} is no longer part of the DMARC standard (RFC 9989), so it was removed.`,
      code: 'retired',
      value: parsedTags.pct,
    })
    if (pctVal < 100) {
      changes.push({
        tag: 't',
        action: 'modernized',
        explanation: 'Your record applied the policy to only part of your email. To soften the policy while you test, turn on test mode (t=y) in Advanced settings instead.',
        code: 'pct-partial',
        value: '',
      })
    }
  }

  if ('rf' in parsedTags) {
    changes.push({
      tag: 'rf',
      action: 'removed',
      explanation: `rf=${parsedTags.rf} is no longer part of the DMARC standard (RFC 9989), so it was removed.`,
      code: 'retired',
      value: parsedTags.rf,
    })
  }

  if ('ri' in parsedTags) {
    changes.push({
      tag: 'ri',
      action: 'removed',
      explanation: `ri=${parsedTags.ri} is no longer part of the DMARC standard (RFC 9989), so it was removed.`,
      code: 'retired',
      value: parsedTags.ri,
    })
  }

  // 2. Subdomain policy (sp)
  if (parsedTags.sp) {
    const spVal = parsedTags.sp.toLowerCase() as DmarcPolicy
    if (spVal === parsedTags.p?.toLowerCase()) {
      changes.push({
        tag: 'sp',
        action: 'normalized',
        explanation: `sp=${parsedTags.sp} matched your main policy, so it wasn’t needed.`,
        code: 'sp-matches',
        value: parsedTags.sp,
      })
    } else {
      newConfig.subdomainPolicy = spVal
    }
  }

  // 3. Non-existent subdomains (np)
  if (parsedTags.np) {
    newConfig.nonExistentSubdomainPolicy = parsedTags.np.toLowerCase() as DmarcPolicy
  }

  // 4. Alignment
  if (parsedTags.adkim) {
    const adkim = parsedTags.adkim.toLowerCase() as DmarcAlignment
    if (adkim === 'r') {
      changes.push({
        tag: 'adkim',
        action: 'normalized',
        explanation: 'adkim=r is already the default, so it wasn’t needed.',
        code: 'default',
        value: 'r',
      })
    } else {
      newConfig.dkimAlignment = adkim
    }
  }

  if (parsedTags.aspf) {
    const aspf = parsedTags.aspf.toLowerCase() as DmarcAlignment
    if (aspf === 'r') {
      changes.push({
        tag: 'aspf',
        action: 'normalized',
        explanation: 'aspf=r is already the default, so it wasn’t needed.',
        code: 'default',
        value: 'r',
      })
    } else {
      newConfig.spfAlignment = aspf
    }
  }

  // 5. Testing mode t=y
  if (parsedTags.t === 'y') {
    newConfig.testingMode = true
  }

  // 6. Reports
  if (parsedTags.rua) {
    newConfig.aggregateReports = parsedTags.rua
  }
  if (parsedTags.ruf) {
    newConfig.failureReports = parsedTags.ruf
  }
  if (parsedTags.fo && parsedTags.fo !== '0') {
    newConfig.failureOptions = parsedTags.fo as DmarcFailureOption
  } else if (parsedTags.fo === '0') {
    changes.push({
      tag: 'fo',
      action: 'normalized',
      explanation: 'fo=0 is already the default, so it wasn’t needed.',
      code: 'default',
      value: '0',
    })
  }

  const generated = generateDmarcRecord(newConfig)

  return {
    originalRecord,
    cleanedRecord: generated.record,
    parsedTags,
    changes,
    warnings: [...warnings, ...generated.warnings],
    warningItems: generated.warningItems,
    externalConsentRecords: generated.externalConsentRecords,
  }
}
