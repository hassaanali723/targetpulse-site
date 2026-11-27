/**
 * Pure DMARC record parser and DMARCbis (RFC 9989 / RFC 9990 / RFC 9991) validator.
 * Zero external imports for universal browser & Node execution.
 */

export type DmarcPolicy = 'none' | 'quarantine' | 'reject'
export type DmarcAlignment = 'relaxed' | 'strict'

export interface DmarcTagResult {
  tag: string
  value: string
  isValid: boolean
  description: string
  warning?: string
  error?: string
}

export interface DmarcExternalReportCheck {
  uri: string
  email: string
  destinationDomain: string
  isExternal: boolean
  reportAuthorizationRecord?: string
}

export interface DmarcValidationResult {
  rawRecord: string
  isValid: boolean
  hasMultipleRecords: boolean
  version: string | null
  policy: DmarcPolicy | null
  subdomainPolicy: DmarcPolicy | null
  percentage: number
  adkim: DmarcAlignment
  aspf: DmarcAlignment
  rua: DmarcExternalReportCheck[]
  ruf: DmarcExternalReportCheck[]
  fo: string[]
  interval: number
  reportFormat: string | null
  tags: DmarcTagResult[]
  warnings: string[]
  errors: string[]
  enforcementStatus: 'enforced' | 'partial' | 'monitoring' | 'invalid'
  complianceScore: number // 0 to 100
  recommendations: string[]
}

/**
 * Extracts the base organizational domain for comparison (e.g. mail.example.com -> example.com)
 */
export function getOrganizationalDomain(domain: string): string {
  const parts = domain.trim().toLowerCase().split('.')
  if (parts.length <= 2) return domain.toLowerCase()
  // Basic TLD handling (co.uk, com.au, etc.)
  const knownTwoPartTlds = new Set(['co.uk', 'gov.uk', 'ac.uk', 'com.au', 'net.au', 'co.nz', 'co.jp'])
  const lastTwo = parts.slice(-2).join('.')
  if (knownTwoPartTlds.has(lastTwo) && parts.length >= 3) {
    return parts.slice(-3).join('.')
  }
  return parts.slice(-2).join('.')
}

/**
 * Parses mailto: URIs and identifies whether the destination domain is external
 */
export function parseReportUris(
  val: string,
  policyDomain: string
): DmarcExternalReportCheck[] {
  const orgPolicyDomain = getOrganizationalDomain(policyDomain)
  const items = val.split(',').map((s) => s.trim()).filter(Boolean)
  const results: DmarcExternalReportCheck[] = []

  for (const item of items) {
    // Strip optional size limit e.g. !10m
    const [rawUri] = item.split('!')
    const mailtoMatch = rawUri.match(/^mailto:\s*([^@]+)@([^?]+)/i)
    if (mailtoMatch) {
      const email = `${mailtoMatch[1]}@${mailtoMatch[2]}`.trim()
      const destDomain = mailtoMatch[2].trim().toLowerCase()
      const destOrgDomain = getOrganizationalDomain(destDomain)
      const isExternal = destOrgDomain !== orgPolicyDomain

      results.push({
        uri: item,
        email,
        destinationDomain: destDomain,
        isExternal,
        reportAuthorizationRecord: isExternal
          ? `${policyDomain}._report._dmarc.${destDomain}`
          : undefined,
      })
    } else {
      results.push({
        uri: item,
        email: item,
        destinationDomain: '',
        isExternal: false,
      })
    }
  }

  return results
}

/**
 * Validates and parses a DMARC TXT record
 */
export function parseDmarcRecord(
  rawRecord: string,
  domain: string = 'example.com',
  recordCount: number = 1
): DmarcValidationResult {
  const clean = rawRecord.trim().replace(/^["']|["']$/g, '')
  const warnings: string[] = []
  const errors: string[] = []
  const tags: DmarcTagResult[] = []

  if (recordCount > 1) {
    errors.push(
      'Multiple DMARC records found at _dmarc. According to RFC 7489 Section 6.6.3, receiving MTAs will treat DMARC as not published and ignore policy.'
    )
  }

  if (!clean) {
    return {
      rawRecord: '',
      isValid: false,
      hasMultipleRecords: recordCount > 1,
      version: null,
      policy: null,
      subdomainPolicy: null,
      percentage: 100,
      adkim: 'relaxed',
      aspf: 'relaxed',
      rua: [],
      ruf: [],
      fo: ['0'],
      interval: 86400,
      reportFormat: null,
      tags: [],
      warnings: [],
      errors: ['Record is empty.'],
      enforcementStatus: 'invalid',
      complianceScore: 0,
      recommendations: ['Publish a valid DMARC TXT record at _dmarc.' + domain],
    }
  }

  // Tokenize by semicolon
  const rawParts = clean.split(';')
  const tagMap = new Map<string, string>()

  let isFirst = true
  let versionValid = false
  let rawVersion: string | null = null

  for (const part of rawParts) {
    const trimmed = part.trim()
    if (!trimmed) continue

    const equalIndex = trimmed.indexOf('=')
    if (equalIndex === -1) {
      warnings.push(`Malformed tag without '=' delimiter: "${trimmed}"`)
      continue
    }

    const tag = trimmed.slice(0, equalIndex).trim()
    const val = trimmed.slice(equalIndex + 1).trim()

    // RFC 7489 / DMARCbis: "v=DMARC1" must be the VERY FIRST tag
    if (isFirst) {
      isFirst = false
      if (tag !== 'v') {
        errors.push(
          `First tag must be 'v=DMARC1'. Found '${tag}=${val}'. Receivers will ignore this record.`
        )
      } else if (val !== 'DMARC1') {
        errors.push(`Version value must be 'DMARC1' (exact case). Found '${val}'.`)
      } else {
        versionValid = true
        rawVersion = val
      }
    } else {
      if (tag === 'v') {
        warnings.push(`Duplicate version tag 'v' found inside record body.`)
      }
    }

    if (tagMap.has(tag)) {
      warnings.push(`Duplicate tag '${tag}' found. Only the first occurrence should be relied upon.`)
    } else {
      tagMap.set(tag, val)
    }
  }

  if (!versionValid) {
    if (!tagMap.has('v')) {
      errors.push("Missing required 'v=DMARC1' tag at start of record.")
    }
  }

  // Policy tag 'p'
  let policy: DmarcPolicy | null = null
  const pVal = tagMap.get('p')?.toLowerCase()
  if (!pVal) {
    errors.push("Missing mandatory policy tag 'p=' (must be none, quarantine, or reject).")
  } else if (pVal === 'none' || pVal === 'quarantine' || pVal === 'reject') {
    policy = pVal as DmarcPolicy
  } else {
    errors.push(`Invalid policy tag value 'p=${pVal}'. Allowed values: none, quarantine, reject.`)
  }

  // Subdomain policy 'sp'
  let spVal: DmarcPolicy | null = null
  const rawSp = tagMap.get('sp')?.toLowerCase()
  if (rawSp) {
    if (rawSp === 'none' || rawSp === 'quarantine' || rawSp === 'reject') {
      spVal = rawSp as DmarcPolicy
    } else {
      warnings.push(`Invalid subdomain policy 'sp=${rawSp}'. Defaulting to 'p=${policy || 'none'}'.`)
    }
  }

  // Percentage tag 'pct'
  let pct = 100
  const rawPct = tagMap.get('pct')
  if (rawPct !== undefined) {
    const num = Number(rawPct)
    if (Number.isInteger(num) && num >= 0 && num <= 100) {
      pct = num
      if (pct < 100) {
        warnings.push(
          `Tag 'pct=${pct}' applies policy to only ${pct}% of messages. DMARCbis (RFC 9989) discourages partial enforcement.`
        )
      }
    } else {
      warnings.push(`Invalid percentage 'pct=${rawPct}'. Must be integer 0-100. Defaulting to 100.`)
    }
  }

  // DKIM Alignment 'adkim'
  let adkim: DmarcAlignment = 'relaxed'
  const rawAdkim = tagMap.get('adkim')?.toLowerCase()
  if (rawAdkim) {
    if (rawAdkim === 's') adkim = 'strict'
    else if (rawAdkim === 'r') adkim = 'relaxed'
    else warnings.push(`Invalid adkim='${rawAdkim}'. Must be 'r' (relaxed) or 's' (strict). Defaulting to 'r'.`)
  }

  // SPF Alignment 'aspf'
  let aspf: DmarcAlignment = 'relaxed'
  const rawAspf = tagMap.get('aspf')?.toLowerCase()
  if (rawAspf) {
    if (rawAspf === 's') aspf = 'strict'
    else if (rawAspf === 'r') aspf = 'relaxed'
    else warnings.push(`Invalid aspf='${rawAspf}'. Must be 'r' (relaxed) or 's' (strict). Defaulting to 'r'.`)
  }

  // Aggregate Reports 'rua'
  const rawRua = tagMap.get('rua') || ''
  const rua = parseReportUris(rawRua, domain)
  if (!rawRua) {
    warnings.push("No aggregate reporting URI ('rua') defined. You will not receive deliverability or abuse feedback reports.")
  }

  // Forensic Reports 'ruf'
  const rawRuf = tagMap.get('ruf') || ''
  const ruf = parseReportUris(rawRuf, domain)

  // Failure Options 'fo'
  const rawFo = tagMap.get('fo') || '0'
  const fo = rawFo.split(':').map((s) => s.trim())

  // Reporting Interval 'ri'
  let interval = 86400
  const rawRi = tagMap.get('ri')
  if (rawRi) {
    const riNum = Number(rawRi)
    if (Number.isInteger(riNum) && riNum > 0) {
      interval = riNum
    }
  }

  // Report Format 'rf'
  const rf = tagMap.get('rf') || null

  // Check external report authorizations
  for (const r of [...rua, ...ruf]) {
    if (r.isExternal && r.reportAuthorizationRecord) {
      warnings.push(
        `External destination '${r.email}' detected. The target domain must publish an authorization record at '${r.reportAuthorizationRecord}' containing 'v=DMARC1' to receive reports.`
      )
    }
  }

  // Build tag summaries
  tagMap.forEach((value, tag) => {
    let desc = ''
    switch (tag) {
      case 'v':
        desc = 'DMARC protocol version.'
        break
      case 'p':
        desc = 'Domain policy for unaligned mail (none, quarantine, reject).'
        break
      case 'sp':
        desc = 'Subdomain policy for unaligned mail.'
        break
      case 'pct':
        desc = 'Percentage of messages subjected to filtering.'
        break
      case 'rua':
        desc = 'Aggregate feedback report recipient destination.'
        break
      case 'ruf':
        desc = 'Forensic / message-specific failure report destination.'
        break
      case 'adkim':
        desc = 'DKIM identifier alignment mode (r = relaxed, s = strict).'
        break
      case 'aspf':
        desc = 'SPF identifier alignment mode (r = relaxed, s = strict).'
        break
      case 'fo':
        desc = 'Failure reporting options.'
        break
      case 'ri':
        desc = 'Reporting interval in seconds.'
        break
      default:
        desc = 'Custom or unrecognized DMARC tag.'
    }
    tags.push({
      tag,
      value,
      isValid: true,
      description: desc,
    })
  })

  // Enforcement status
  let enforcementStatus: 'enforced' | 'partial' | 'monitoring' | 'invalid' = 'invalid'
  const isValid = errors.length === 0 && versionValid && !!policy

  if (!isValid) {
    enforcementStatus = 'invalid'
  } else if (policy === 'reject' && pct === 100) {
    enforcementStatus = 'enforced'
  } else if (policy === 'reject' && pct < 100) {
    enforcementStatus = 'partial'
  } else if (policy === 'quarantine') {
    enforcementStatus = 'partial'
  } else {
    enforcementStatus = 'monitoring'
  }

  // Compliance score (0-100)
  let score = 0
  if (isValid) {
    score = 40 // Valid syntax
    if (policy === 'reject') score += 35
    else if (policy === 'quarantine') score += 20
    else score += 5 // none

    if (pct === 100) score += 10
    if (rua.length > 0) score += 15
  }

  // Actionable recommendations
  const recommendations: string[] = []
  if (policy === 'none') {
    recommendations.push(
      "Your domain is in 'p=none' (monitoring only) mode. Spoofed emails will still reach inboxes. Upgrade to 'p=quarantine' or 'p=reject' to protect your brand."
    )
  }
  if (pct < 100) {
    recommendations.push(
      `Increase 'pct' to 100. Partial enforcement (pct=${pct}) leaves a portion of spoofed messages unfiltered.`
    )
  }
  if (rua.length === 0) {
    recommendations.push(
      "Add a 'rua=mailto:dmarc@yourdomain.com' tag to receive aggregate XML reports from Gmail, Yahoo, and Microsoft."
    )
  }
  if (!tagMap.has('sp') && policy === 'reject') {
    recommendations.push(
      "Consider explicitly setting 'sp=reject' to protect all subdomains from being impersonated."
    )
  }

  return {
    rawRecord: clean,
    isValid,
    hasMultipleRecords: recordCount > 1,
    version: rawVersion,
    policy,
    subdomainPolicy: spVal || policy,
    percentage: pct,
    adkim,
    aspf,
    rua,
    ruf,
    fo,
    interval,
    reportFormat: rf,
    tags,
    warnings,
    errors,
    enforcementStatus,
    complianceScore: score,
    recommendations,
  }
}
