/**
 * Pure Role-Based / Generic Email Classifier and List Cleaner.
 * Implements RFC 2142 categories and business email deliverability guidelines.
 * Zero relative/external imports for browser and plain Node execution.
 */

export type RoleCategory =
  | 'personal'
  | 'general_business'
  | 'support_ops'
  | 'compliance_security'
  | 'automated_system'
  | 'invalid'

export interface RoleClassifiedItem {
  originalInput: string
  normalizedEmail: string
  localPart: string
  domain: string
  category: RoleCategory
  isRoleBased: boolean
  matchedPrefix: string | null
  recommendedAction: 'keep' | 'segment_smb' | 'suppress' | 'remove'
  explanation: string
  originalRow?: Record<string, string>
}

export interface RoleAuditSummary {
  totalProcessed: number
  uniqueCount: number
  duplicatesCount: number
  personalCount: number
  generalBusinessCount: number
  supportOpsCount: number
  complianceSecurityCount: number
  automatedSystemCount: number
  invalidCount: number
  rolePercentage: number
}

// Tier 1: Automated / No-Reply / System senders - Remove Always
const AUTOMATED_SYSTEM_PREFIXES = new Set([
  'noreply',
  'no-reply',
  'do-not-reply',
  'donotreply',
  'mailer-daemon',
  'mailerdaemon',
  'daemon',
  'bounce',
  'bounces',
  'autoresponder',
  'notifications',
  'notification',
  'alerts',
  'alert',
  'automated',
  'automation',
  'system',
  'sysadmin',
  'root',
  'null',
  'blackhole',
  'devnull',
  'postbox',
  'inbox-notification',
  'robot',
  'bot',
  'calendar-notification',
])

// Tier 2: RFC 2142 Network & Service Ops / Compliance / Legal - Suppress Always (Spam Trap & Blocklist Hazard)
const COMPLIANCE_SECURITY_PREFIXES = new Set([
  'abuse',
  'postmaster',
  'hostmaster',
  'webmaster',
  'usenet',
  'news',
  'noc',
  'security',
  'privacy',
  'gdpr',
  'dpo',
  'legal',
  'compliance',
  'dmca',
  'copyright',
  'dns',
  'whois',
  'spam',
  'fraud',
  'cert',
  'cirt',
  'soc',
  'infosec',
  'law',
  'regulations',
  'ethics',
  'whistleblower',
])

// Tier 3: Support, Helpdesk, Billing & Operations Queues - Suppress for Cold Outreach
const SUPPORT_OPS_PREFIXES = new Set([
  'support',
  'help',
  'helpdesk',
  'billing',
  'billings',
  'invoice',
  'invoices',
  'accounts',
  'accounting',
  'finance',
  'payments',
  'payment',
  'payroll',
  'collections',
  'ap',
  'ar',
  'orders',
  'order',
  'shipping',
  'returns',
  'customerservice',
  'customer-service',
  'customercare',
  'customer-care',
  'service',
  'services',
  'care',
  'feedback',
  'tickets',
  'desk',
  'reception',
  'concierge',
  'frontdesk',
  'dispatch',
  'operations',
  'ops',
  'warehouse',
  'logistics',
  'it',
  'itsupport',
  'it-support',
  'techsupport',
  'tech-support',
  'maintenance',
  'facilities',
])

// Tier 4: General Business, Departments & Leadership Aliases - Segment / Review
const GENERAL_BUSINESS_PREFIXES = new Set([
  'info',
  'information',
  'hello',
  'hi',
  'hey',
  'contact',
  'contactus',
  'contact-us',
  'inquiries',
  'inquiry',
  'enquiries',
  'enquiry',
  'general',
  'sales',
  'marketing',
  'commercial',
  'biz',
  'business',
  'partners',
  'partnerships',
  'partner',
  'alliances',
  'press',
  'media',
  'pr',
  'hr',
  'humanresources',
  'human-resources',
  'careers',
  'career',
  'jobs',
  'job',
  'recruitment',
  'recruiting',
  'talent',
  'people',
  'hiring',
  'staff',
  'team',
  'office',
  'admin',
  'administration',
  'management',
  'executives',
  'leadership',
  'founders',
  'board',
  'investors',
  'ir',
  'leads',
  'outreach',
  'growth',
  'editorial',
  'editor',
  'newsroom',
  'agency',
  'studio',
  'mail',
  'email',
  'corporate',
  'headquarters',
  'hq',
])

export function extractEmailComponents(raw: string): {
  normalizedEmail: string
  localPart: string
  domain: string
  isValid: boolean
} {
  let cleaned = raw.trim().replace(/^\uFEFF/, '')
  const bracketMatch = cleaned.match(/<([^<>\s]+@[^<>\s]+)>/)
  if (bracketMatch) cleaned = bracketMatch[1]
  cleaned = cleaned.toLowerCase()

  const atIdx = cleaned.lastIndexOf('@')
  if (atIdx <= 0 || atIdx === cleaned.length - 1) {
    return { normalizedEmail: cleaned, localPart: '', domain: '', isValid: false }
  }

  let local = cleaned.slice(0, atIdx).trim()
  const domain = cleaned.slice(atIdx + 1).trim()

  // Strip RFC 5233 subaddressing tag: sales+crm -> sales
  const plusIdx = local.indexOf('+')
  if (plusIdx > 0) {
    local = local.slice(0, plusIdx)
  }

  // Validate domain has a dot and no invalid chars
  const domainValid = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/.test(
    domain
  )
  const localValid = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/.test(local)

  return {
    normalizedEmail: `${local}@${domain}`,
    localPart: local,
    domain,
    isValid: domainValid && localValid,
  }
}

export function classifyEmail(raw: string): RoleClassifiedItem {
  const { normalizedEmail, localPart, domain, isValid } = extractEmailComponents(raw)

  if (!isValid || !localPart || !domain) {
    return {
      originalInput: raw,
      normalizedEmail: normalizedEmail || raw,
      localPart: localPart || '',
      domain: domain || '',
      category: 'invalid',
      isRoleBased: false,
      matchedPrefix: null,
      recommendedAction: 'remove',
      explanation: 'Malformed or invalid email address syntax.',
    }
  }

  // Exact prefix match first
  if (AUTOMATED_SYSTEM_PREFIXES.has(localPart)) {
    return {
      originalInput: raw,
      normalizedEmail,
      localPart,
      domain,
      category: 'automated_system',
      isRoleBased: true,
      matchedPrefix: localPart,
      recommendedAction: 'remove',
      explanation: 'Automated or no-reply system address. Messages sent here will bounce or be discarded.',
    }
  }

  if (COMPLIANCE_SECURITY_PREFIXES.has(localPart)) {
    return {
      originalInput: raw,
      normalizedEmail,
      localPart,
      domain,
      category: 'compliance_security',
      isRoleBased: true,
      matchedPrefix: localPart,
      recommendedAction: 'suppress',
      explanation:
        'RFC 2142 compliance, abuse, or security address. Sending cold outreach triggers spam complaints and blocklists.',
    }
  }

  if (SUPPORT_OPS_PREFIXES.has(localPart)) {
    return {
      originalInput: raw,
      normalizedEmail,
      localPart,
      domain,
      category: 'support_ops',
      isRoleBased: true,
      matchedPrefix: localPart,
      recommendedAction: 'suppress',
      explanation:
        'Support ticket, billing, or customer service queue. High spam-complaint hazard for cold outreach.',
    }
  }

  if (GENERAL_BUSINESS_PREFIXES.has(localPart)) {
    return {
      originalInput: raw,
      normalizedEmail,
      localPart,
      domain,
      category: 'general_business',
      isRoleBased: true,
      matchedPrefix: localPart,
      recommendedAction: 'segment_smb',
      explanation:
        'General business or departmental inbox. May be monitored by small business owners, but routes to shared queues in enterprise.',
    }
  }

  // Dot-separated compound checks: e.g. "it.support" or "info.sales"
  const segments = localPart.split('.')
  if (segments.length === 2) {
    const [first, second] = segments
    if (COMPLIANCE_SECURITY_PREFIXES.has(first) || COMPLIANCE_SECURITY_PREFIXES.has(second)) {
      return {
        originalInput: raw,
        normalizedEmail,
        localPart,
        domain,
        category: 'compliance_security',
        isRoleBased: true,
        matchedPrefix: `${first}.${second}`,
        recommendedAction: 'suppress',
        explanation: 'Compound security or compliance role prefix.',
      }
    }
    if (SUPPORT_OPS_PREFIXES.has(first) || SUPPORT_OPS_PREFIXES.has(second)) {
      return {
        originalInput: raw,
        normalizedEmail,
        localPart,
        domain,
        category: 'support_ops',
        isRoleBased: true,
        matchedPrefix: `${first}.${second}`,
        recommendedAction: 'suppress',
        explanation: 'Compound customer service or billing queue prefix.',
      }
    }
    if (GENERAL_BUSINESS_PREFIXES.has(first) && GENERAL_BUSINESS_PREFIXES.has(second)) {
      return {
        originalInput: raw,
        normalizedEmail,
        localPart,
        domain,
        category: 'general_business',
        isRoleBased: true,
        matchedPrefix: `${first}.${second}`,
        recommendedAction: 'segment_smb',
        explanation: 'Compound business department prefix.',
      }
    }
  }

  // Named personal address
  return {
    originalInput: raw,
    normalizedEmail,
    localPart,
    domain,
    category: 'personal',
    isRoleBased: false,
    matchedPrefix: null,
    recommendedAction: 'keep',
    explanation: 'Named personal address suitable for direct B2B outreach.',
  }
}

export function parseCsvRows(text: string): { headers: string[]; rows: Record<string, string>[] } {
  const clean = text.replace(/^\uFEFF/, '').trim()
  if (!clean) return { headers: [], rows: [] }

  // Detect delimiter
  const firstLine = clean.split(/\r?\n/)[0]
  const commaCount = (firstLine.match(/,/g) || []).length
  const tabCount = (firstLine.match(/\t/g) || []).length
  const semiCount = (firstLine.match(/;/g) || []).length
  const delim = tabCount > commaCount && tabCount > semiCount ? '\t' : semiCount > commaCount ? ';' : ','

  // RFC 4180 quote-aware tokenizer
  const records: string[][] = []
  let row: string[] = []
  let cell = ''
  let inQuotes = false

  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i]
    if (ch === '"') {
      if (inQuotes && clean[i + 1] === '"') {
        cell += '"'
        i++
      } else {
        inQuotes = !inQuotes
      }
    } else if (ch === delim && !inQuotes) {
      row.push(cell.trim())
      cell = ''
    } else if ((ch === '\n' || (ch === '\r' && clean[i + 1] === '\n')) && !inQuotes) {
      if (ch === '\r') i++
      row.push(cell.trim())
      if (row.some((c) => c !== '')) records.push(row)
      row = []
      cell = ''
    } else {
      cell += ch
    }
  }
  if (cell !== '' || row.length > 0) {
    row.push(cell.trim())
    if (row.some((c) => c !== '')) records.push(row)
  }

  if (records.length === 0) return { headers: [], rows: [] }
  const headers = records[0].map((h, i) => h || `Column_${i + 1}`)
  const rows: Record<string, string>[] = []
  for (let r = 1; r < records.length; r++) {
    const item: Record<string, string> = {}
    const line = records[r]
    for (let c = 0; c < headers.length; c++) {
      item[headers[c]] = line[c] ?? ''
    }
    rows.push(item)
  }
  return { headers, rows }
}

export function findEmailColumn(headers: string[], rows: Record<string, string>[]): string | null {
  const explicit = headers.find((h) => /^(email|e-mail|mail|email_address|contact_email)$/i.test(h.trim()))
  if (explicit) return explicit

  const partial = headers.find((h) => /email|mail/i.test(h))
  if (partial) return partial

  // Sample first 10 rows to find column with highest @ concentration
  for (const h of headers) {
    let matchCount = 0
    const sample = rows.slice(0, 15)
    for (const r of sample) {
      const val = (r[h] || '').trim()
      if (val.includes('@') && val.includes('.')) matchCount++
    }
    if (matchCount >= Math.min(3, sample.length)) return h
  }
  return headers[0] || null
}

export function processEmailList(
  inputs: { email: string; originalRow?: Record<string, string> }[]
): {
  items: RoleClassifiedItem[]
  summary: RoleAuditSummary
} {
  const items: RoleClassifiedItem[] = []
  const seen = new Set<string>()
  let duplicatesCount = 0

  let personalCount = 0
  let generalBusinessCount = 0
  let supportOpsCount = 0
  let complianceSecurityCount = 0
  let automatedSystemCount = 0
  let invalidCount = 0

  for (const { email, originalRow } of inputs) {
    const classified = classifyEmail(email)
    if (originalRow) classified.originalRow = originalRow

    if (classified.category !== 'invalid') {
      if (seen.has(classified.normalizedEmail)) {
        duplicatesCount++
      } else {
        seen.add(classified.normalizedEmail)
      }
    }

    switch (classified.category) {
      case 'personal':
        personalCount++
        break
      case 'general_business':
        generalBusinessCount++
        break
      case 'support_ops':
        supportOpsCount++
        break
      case 'compliance_security':
        complianceSecurityCount++
        break
      case 'automated_system':
        automatedSystemCount++
        break
      case 'invalid':
        invalidCount++
        break
    }
    items.push(classified)
  }

  const roleTotal = generalBusinessCount + supportOpsCount + complianceSecurityCount + automatedSystemCount
  const rolePercentage = items.length > 0 ? Math.round((roleTotal / items.length) * 100) : 0

  return {
    items,
    summary: {
      totalProcessed: items.length,
      uniqueCount: seen.size,
      duplicatesCount,
      personalCount,
      generalBusinessCount,
      supportOpsCount,
      complianceSecurityCount,
      automatedSystemCount,
      invalidCount,
      rolePercentage,
    },
  }
}

export function classifyRoleBatch(rawInput: string): {
  items: RoleClassifiedItem[]
  summary: RoleAuditSummary
} {
  const clean = rawInput.trim()
  if (!clean) {
    return {
      items: [],
      summary: {
        totalProcessed: 0,
        uniqueCount: 0,
        duplicatesCount: 0,
        personalCount: 0,
        generalBusinessCount: 0,
        supportOpsCount: 0,
        complianceSecurityCount: 0,
        automatedSystemCount: 0,
        invalidCount: 0,
        rolePercentage: 0,
      },
    }
  }

  // Attempt CSV parse first if there are commas/tabs and newlines
  if ((clean.includes(',') || clean.includes('\t')) && clean.includes('\n')) {
    const parsed = parseCsvRows(clean)
    if (parsed.headers.length > 1 && parsed.rows.length > 0) {
      const emailCol = findEmailColumn(parsed.headers, parsed.rows)
      if (emailCol) {
        const inputs = parsed.rows.map((row) => ({
          email: row[emailCol] || '',
          originalRow: row,
        }))
        return processEmailList(inputs)
      }
    }
  }

  // Fallback: line-by-line or comma-separated emails
  const lines = clean.split(/[\r\n,;]+/).map((l) => l.trim()).filter(Boolean)
  const inputs = lines.map((email) => ({ email }))
  return processEmailList(inputs)
}

export function generateExportCsv(
  items: RoleClassifiedItem[],
  mode: 'personal_only' | 'personal_and_smb' | 'full_audit'
): string {
  const filtered = items.filter((item) => {
    if (mode === 'personal_only') return item.category === 'personal'
    if (mode === 'personal_and_smb') return item.category === 'personal' || item.category === 'general_business'
    return true
  })

  if (filtered.length === 0) return ''

  if (mode === 'full_audit') {
    const lines = ['Email,Category,Is Role Based,Recommended Action,Explanation']
    for (const it of filtered) {
      const escapedEmail = `"${it.normalizedEmail.replace(/"/g, '""')}"`
      const escapedCat = `"${it.category}"`
      const isRole = it.isRoleBased ? 'Yes' : 'No'
      const action = `"${it.recommendedAction}"`
      const explanation = `"${it.explanation.replace(/"/g, '""')}"`
      lines.push(`${escapedEmail},${escapedCat},${isRole},${action},${explanation}`)
    }
    return lines.join('\n')
  }

  // Preserve original CSV headers if available
  const hasRows = filtered.some((f) => !!f.originalRow)
  if (hasRows) {
    const firstRow = filtered.find((f) => !!f.originalRow)?.originalRow || {}
    const colKeys = Object.keys(firstRow)
    const headerLine = colKeys.map((k) => `"${k.replace(/"/g, '""')}"`).join(',')
    const lines = [headerLine]
    for (const it of filtered) {
      if (it.originalRow) {
        const line = colKeys.map((k) => `"${(it.originalRow?.[k] || '').replace(/"/g, '""')}"`).join(',')
        lines.push(line)
      } else {
        lines.push(`"${it.normalizedEmail}"`)
      }
    }
    return lines.join('\n')
  }

  return filtered.map((f) => f.normalizedEmail).join('\n')
}
