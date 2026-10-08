import test from 'node:test'
import assert from 'node:assert/strict'
import {
  generateDmarcRecord,
  cleanDmarcRecord,
  validateMailtoList,
} from '../lib/tools/dmarcGeneratorCore.ts'

test('DMARC Generator - Presets and Defaults', () => {
  // Monitor preset
  const monitor = generateDmarcRecord({
    domain: 'mycompany.com',
    policy: 'none',
    aggregateReports: 'dmarc@mycompany.com',
  })
  assert.equal(monitor.record, 'v=DMARC1; p=none; rua=mailto:dmarc@mycompany.com')
  assert.equal(monitor.host, '_dmarc')
  assert.equal(monitor.fqdn, '_dmarc.mycompany.com.')
  assert.equal(monitor.externalConsentRecords.length, 0)

  // Enforced Reject with RFC 9989 np=reject
  const reject = generateDmarcRecord({
    domain: 'mycompany.com',
    policy: 'reject',
    subdomainPolicy: 'reject', // Omitted from tag output because it matches p per RFC 9989
    nonExistentSubdomainPolicy: 'reject',
    aggregateReports: 'dmarc@mycompany.com',
    dkimAlignment: 'r', // Omitted because default
    spfAlignment: 'r', // Omitted because default
  })
  assert.equal(reject.record, 'v=DMARC1; p=reject; np=reject; rua=mailto:dmarc@mycompany.com')

  // Test mode t=y
  const testMode = generateDmarcRecord({
    domain: 'mycompany.com',
    policy: 'reject',
    testingMode: true,
    aggregateReports: 'dmarc@mycompany.com',
  })
  assert.equal(testMode.record, 'v=DMARC1; p=reject; t=y; rua=mailto:dmarc@mycompany.com')
})

test('DMARC Generator - External Reporting Consent Records', () => {
  const result = generateDmarcRecord({
    domain: 'client-brand.com',
    policy: 'reject',
    aggregateReports: 'reports@dmarc-aggregator.org',
  })

  assert.equal(result.externalConsentRecords.length, 1)
  assert.equal(
    result.externalConsentRecords[0].host,
    'client-brand.com._report._dmarc.dmarc-aggregator.org.'
  )
  assert.equal(result.externalConsentRecords[0].value, '"v=DMARC1"')
})

test('DMARC Cleaner - RFC 9989 (2026) Clean and Modernize', () => {
  // Old legacy record with pct, rf, ri
  const legacyRecord =
    'v=DMARC1; p=quarantine; pct=20; sp=quarantine; ri=86400; rf=afrf; adkim=r; aspf=r; rua=mailto:dmarc@corp.com'

  const cleaned = cleanDmarcRecord(legacyRecord, 'corp.com')

  // pct, ri, rf must be removed
  assert.ok(!cleaned.cleanedRecord.includes('pct='))
  assert.ok(!cleaned.cleanedRecord.includes('ri='))
  assert.ok(!cleaned.cleanedRecord.includes('rf='))

  // Redundant sp=quarantine (matches p) and defaults adkim=r, aspf=r should be stripped
  assert.ok(!cleaned.cleanedRecord.includes('sp='))
  assert.ok(!cleaned.cleanedRecord.includes('adkim='))
  assert.ok(!cleaned.cleanedRecord.includes('aspf='))

  // Verifying changes report
  const removedTags = cleaned.changes.filter((c) => c.action === 'removed').map((c) => c.tag)
  assert.ok(removedTags.includes('pct'))
  assert.ok(removedTags.includes('rf'))
  assert.ok(removedTags.includes('ri'))

  const normalizedTags = cleaned.changes.filter((c) => c.action === 'normalized').map((c) => c.tag)
  assert.ok(normalizedTags.includes('sp'))
  assert.ok(normalizedTags.includes('adkim'))
  assert.ok(normalizedTags.includes('aspf'))
})
