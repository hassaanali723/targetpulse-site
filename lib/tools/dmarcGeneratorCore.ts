/**
 * Core DMARC Generator, Validator, External Consent Helper, and RFC 9989 (2026) Cleaner.
 * Runs 100% in-browser with zero external dependencies.
 */

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

export interface DmarcGenerationResult {
  record: string
  host: string
  fqdn: string
  warnings: string[]
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
  }[]
  warnings: string[]
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
): { valid: boolean; normalized: string; domains: string[]; error?: string } {
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
        error: `Invalid reporting address format: "${part}"`,
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
  const domain = config.domain.trim().toLowerCase().replace(/\.$/, '')
  const showDefaults = config.showDefaultTags ?? false
  const warnings: string[] = []
  const tags: string[] = ['v=DMARC1', `p=${config.policy}`]

  // Policy warnings
  if (config.policy === 'reject' && !config.aggregateReports) {
    warnings.push('Setting p=reject without an aggregate report (rua) risks dropping legitimate mail without your knowledge.')
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

  // Aggregate reporting (rua)
  const reportingDomains: string[] = []
  if (config.aggregateReports && config.aggregateReports.trim()) {
    const val = validateMailtoList(config.aggregateReports)
    if (val.valid && val.normalized) {
      tags.push(`rua=${val.normalized}`)
      reportingDomains.push(...val.domains)
    }
  }

  // Failure reporting (ruf)
  if (config.failureReports && config.failureReports.trim()) {
    const val = validateMailtoList(config.failureReports)
    if (val.valid && val.normalized) {
      tags.push(`ruf=${val.normalized}`)
      reportingDomains.push(...val.domains)
      warnings.push('Failure reports (ruf) contain message headers and may be restricted by privacy regulations or ignored by major mailbox providers.')
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
        reason: `Because reports go to ${repDom}, RFC 7489 / RFC 9989 requires ${repDom} to publish this DNS record verifying they consent to receive your reports.`,
      })
    }
  }

  return {
    record,
    host,
    fqdn,
    warnings,
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

  const newConfig: DmarcTagConfig = {
    domain: domainContext || '',
    policy: (parsedTags.p as DmarcPolicy) || 'none',
    showDefaultTags: false,
  }

  // 1. Check retired tags
  if ('pct' in parsedTags) {
    const pctVal = parseInt(parsedTags.pct, 10)
    changes.push({
      tag: 'pct',
      action: 'removed',
      explanation: `Tag "pct=${parsedTags.pct}" was retired in RFC 9989 (2026). Modern mailbox providers enforce policy strictly; partial rollout percentages created inconsistent delivery.`,
    })
    if (pctVal < 100) {
      changes.push({
        tag: 't',
        action: 'modernized',
        explanation: 'Suggested: use "t=y" (RFC 9989 test mode) instead of partial pct if you want receivers to apply quarantine instead of reject, or to test policy rollout safely.',
      })
    }
  }

  if ('rf' in parsedTags) {
    changes.push({
      tag: 'rf',
      action: 'removed',
      explanation: `Tag "rf=${parsedTags.rf}" was retired in RFC 9989. The report format is standardized to AFRF, making this tag obsolete.`,
    })
  }

  if ('ri' in parsedTags) {
    changes.push({
      tag: 'ri',
      action: 'removed',
      explanation: `Tag "ri=${parsedTags.ri}" was retired in RFC 9989. Mailbox providers deliver aggregate reports on their standard daily cycle, ignoring custom intervals.`,
    })
  }

  // 2. Subdomain policy (sp)
  if (parsedTags.sp) {
    const spVal = parsedTags.sp.toLowerCase() as DmarcPolicy
    if (spVal === parsedTags.p?.toLowerCase()) {
      changes.push({
        tag: 'sp',
        action: 'normalized',
        explanation: `Tag "sp=${parsedTags.sp}" matched the main policy "p=${parsedTags.p}". RFC 9989 recommends omitting redundant tags to save DNS bandwidth.`,
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
        explanation: 'Omitted default "adkim=r" (relaxed DKIM alignment). Relaxed is the RFC standard default.',
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
        explanation: 'Omitted default "aspf=r" (relaxed SPF alignment). Relaxed is the RFC standard default.',
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
      explanation: 'Omitted default "fo=0" (generate failure report only if all underlying mechanisms fail).',
    })
  }

  const generated = generateDmarcRecord(newConfig)

  return {
    originalRecord,
    cleanedRecord: generated.record,
    parsedTags,
    changes,
    warnings: [...warnings, ...generated.warnings],
    externalConsentRecords: generated.externalConsentRecords,
  }
}
