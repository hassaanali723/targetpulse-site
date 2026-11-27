import test from 'node:test'
import assert from 'node:assert/strict'
import {
  parseDmarcRecord,
  getOrganizationalDomain,
  parseReportUris,
} from '../lib/tools/dmarcCheckerPure.ts'

test('Organizational domain extraction', () => {
  assert.equal(getOrganizationalDomain('sub.example.com'), 'example.com')
  assert.equal(getOrganizationalDomain('deep.sub.example.co.uk'), 'example.co.uk')
  assert.equal(getOrganizationalDomain('example.com'), 'example.com')
})

test('Valid enforced DMARC record parsing', () => {
  const raw = 'v=DMARC1; p=reject; sp=reject; pct=100; rua=mailto:dmarc@example.com; adkim=s; aspf=s;'
  const result = parseDmarcRecord(raw, 'example.com')

  assert.equal(result.isValid, true)
  assert.equal(result.policy, 'reject')
  assert.equal(result.subdomainPolicy, 'reject')
  assert.equal(result.percentage, 100)
  assert.equal(result.adkim, 'strict')
  assert.equal(result.aspf, 'strict')
  assert.equal(result.enforcementStatus, 'enforced')
  assert.equal(result.complianceScore, 100)
  assert.equal(result.errors.length, 0)
})

test('External report destination authorization detection', () => {
  const raw = 'v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@thirdpartyanalytics.com;'
  const result = parseDmarcRecord(raw, 'mycompany.com')

  assert.equal(result.isValid, true)
  assert.equal(result.rua.length, 1)
  assert.equal(result.rua[0].isExternal, true)
  assert.equal(
    result.rua[0].reportAuthorizationRecord,
    'mycompany.com._report._dmarc.thirdpartyanalytics.com'
  )
  assert.ok(
    result.warnings.some((w) => w.includes('reportAuthorizationRecord') || w.includes('External destination'))
  )
})

test('DMARC syntax errors and multiple records detection', () => {
  // Missing v=
  const noV = parseDmarcRecord('p=reject; rua=mailto:a@b.com', 'b.com')
  assert.equal(noV.isValid, false)
  assert.ok(noV.errors.some((e) => e.includes("First tag must be 'v=DMARC1'")))

  // Invalid policy
  const badP = parseDmarcRecord('v=DMARC1; p=destroy;', 'b.com')
  assert.equal(badP.isValid, false)
  assert.ok(badP.errors.some((e) => e.includes("Invalid policy tag value 'p=destroy'")))

  // Multiple records per RFC 7489 Section 6.6.3
  const multi = parseDmarcRecord('v=DMARC1; p=reject;', 'b.com', 2)
  assert.equal(multi.hasMultipleRecords, true)
  assert.ok(multi.errors.some((e) => e.includes('Multiple DMARC records found')))
})
