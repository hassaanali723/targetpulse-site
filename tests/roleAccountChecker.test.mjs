import test from 'node:test'
import assert from 'node:assert/strict'
import {
  extractEmailComponents,
  classifyEmail,
  parseCsvRows,
  processEmailList,
  generateExportCsv,
} from '../lib/tools/roleAccountCheckerPure.ts'

test('extractEmailComponents handles brackets, subaddressing tags, and dot protection', () => {
  const e1 = extractEmailComponents('John Doe <john.smith@acme.com>')
  assert.equal(e1.normalizedEmail, 'john.smith@acme.com')
  assert.equal(e1.localPart, 'john.smith')
  assert.equal(e1.domain, 'acme.com')
  assert.equal(e1.isValid, true)

  // Subaddressing + tag stripping
  const e2 = extractEmailComponents('sales+crm123@enterprise.org')
  assert.equal(e2.normalizedEmail, 'sales@enterprise.org')
  assert.equal(e2.localPart, 'sales')

  // Dot protection: do NOT strip dots from local-part
  const e3 = extractEmailComponents('admin.smith@company.com')
  assert.equal(e3.localPart, 'admin.smith')
  assert.equal(e3.isValid, true)
})

test('classifyEmail classifies 4 RFC 2142 tiers correctly and prevents dot false positives', () => {
  // Tier 1: Automated system
  const c1 = classifyEmail('noreply@service.com')
  assert.equal(c1.category, 'automated_system')
  assert.equal(c1.recommendedAction, 'remove')

  // Tier 2: Compliance / Security / Ops
  const c2 = classifyEmail('abuse@telecom.net')
  assert.equal(c2.category, 'compliance_security')
  assert.equal(c2.recommendedAction, 'suppress')

  // Tier 3: Support / Billing queue
  const c3 = classifyEmail('billing@saas.io')
  assert.equal(c3.category, 'support_ops')
  assert.equal(c3.recommendedAction, 'suppress')

  // Tier 4: General business / SMB
  const c4 = classifyEmail('info@localplumber.com')
  assert.equal(c4.category, 'general_business')
  assert.equal(c4.recommendedAction, 'segment_smb')

  // Personal named address with admin prefix in name: admin.smith@
  // Must NOT be false-flagged as role!
  const c5 = classifyEmail('admin.smith@company.com')
  assert.equal(c5.category, 'personal')
  assert.equal(c5.isRoleBased, false)
  assert.equal(c5.recommendedAction, 'keep')
})

test('parseCsvRows handles quotes, commas, and UTF-8 BOM', () => {
  const csv = `\uFEFF"Name","Email","Company"\n"John, Jr.","john@acme.com","Acme, Inc."\n"Sales Team","sales@acme.com","Acme, Inc."`
  const { headers, rows } = parseCsvRows(csv)
  assert.deepEqual(headers, ['Name', 'Email', 'Company'])
  assert.equal(rows.length, 2)
  assert.equal(rows[0]['Name'], 'John, Jr.')
  assert.equal(rows[0]['Email'], 'john@acme.com')
  assert.equal(rows[0]['Company'], 'Acme, Inc.')
})

test('processEmailList and generateExportCsv create filtered exports', () => {
  const rawList = [
    { email: 'john.doe@company.com' },
    { email: 'info@company.com' },
    { email: 'abuse@company.com' },
    { email: 'noreply@company.com' },
    { email: 'support@company.com' },
  ]
  const { items, summary } = processEmailList(rawList)
  assert.equal(summary.totalProcessed, 5)
  assert.equal(summary.personalCount, 1)
  assert.equal(summary.generalBusinessCount, 1)
  assert.equal(summary.supportOpsCount, 1)
  assert.equal(summary.complianceSecurityCount, 1)
  assert.equal(summary.automatedSystemCount, 1)

  const personalOnly = generateExportCsv(items, 'personal_only')
  assert.equal(personalOnly.trim(), 'john.doe@company.com')

  const smbSafe = generateExportCsv(items, 'personal_and_smb')
  assert.ok(smbSafe.includes('john.doe@company.com'))
  assert.ok(smbSafe.includes('info@company.com'))
  assert.ok(!smbSafe.includes('abuse@company.com'))
  assert.ok(!smbSafe.includes('noreply@company.com'))
})
