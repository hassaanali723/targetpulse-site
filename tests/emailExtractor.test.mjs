import test from 'node:test'
import assert from 'node:assert/strict'
import { extractEmails, preprocessText, cleanCandidate } from '../lib/tools/emailExtractorCore.ts'

test('Email Extractor - Entity Decoding and Obfuscation', () => {
  const input = `
    Reach us at support&#64;example.com or sales&commat;test.org.
    You can also contact john.doe [at] company [dot] com,
    jane(at)corp(dot)net.
  `
  // Default: written-out is OFF
  const defaultResult = extractEmails(input)
  const defaultEmails = defaultResult.items.map((i) => i.email)
  assert.ok(defaultEmails.includes('support@example.com'))
  assert.ok(defaultEmails.includes('sales@test.org'))
  assert.ok(!defaultEmails.includes('john.doe@company.com'))

  // With written-out enabled
  const writtenResult = extractEmails(input, { writtenOutObfuscation: true })
  const writtenEmails = writtenResult.items.map((i) => i.email)
  assert.ok(writtenEmails.includes('john.doe@company.com'))
  assert.ok(writtenEmails.includes('jane@corp.net'))
})

test('Email Extractor - Clean mailto, punctuation, and exclude false positives', () => {
  const input = `
    Check <mailto:hello@startup.co>, (test@agency.dev), and logo@2x.png!
    Here is another: info@valid.com... and consecutive..dots@invalid.com.
    Also visit https://user:pass@example.com/login and user@site.com;
  `
  const result = extractEmails(input)
  const emails = result.items.map((i) => i.email)

  assert.ok(emails.includes('hello@startup.co'))
  assert.ok(emails.includes('test@agency.dev'))
  assert.ok(emails.includes('info@valid.com'))
  assert.ok(emails.includes('user@site.com'))

  // False positives must be excluded
  assert.ok(!emails.some((e) => e.includes('logo@2x.png')))
  assert.ok(!emails.some((e) => e.includes('consecutive..dots')))
})

test('Email Extractor - Deduplication and Domain Statistics', () => {
  const input = `
    User1@Domain.COM
    user1@domain.com
    user2@domain.com
    boss@another.org
  `
  const result = extractEmails(input, { deduplicate: true, sortBy: 'alpha' })
  assert.equal(result.totalFound, 4)
  assert.equal(result.uniqueCount, 3)
  assert.equal(result.items.length, 3)

  // Case-only duplicate collapsed to first seen capitalization, domain lowercased
  assert.equal(result.items[0].email, 'boss@another.org')
  assert.equal(result.items[1].email, 'User1@domain.com')
  assert.equal(result.items[2].email, 'user2@domain.com')

  // Top domains
  assert.equal(result.topDomains[0].domain, 'domain.com')
  assert.equal(result.topDomains[0].count, 2)
  assert.equal(result.topDomains[1].domain, 'another.org')
  assert.equal(result.topDomains[1].count, 1)
})

test('Email Extractor - Role-based filtering', () => {
  const input = `
    admin@company.com
    support@company.com
    sarah.connor@company.com
    billing+test@company.com
  `
  // Default is OFF
  const defResult = extractEmails(input)
  assert.equal(defResult.items.length, 4)

  // With filter ON
  const result = extractEmails(input, { excludeRoleBased: true })
  const emails = result.items.map((i) => i.email)

  assert.equal(emails.length, 1)
  assert.equal(emails[0], 'sarah.connor@company.com')
})

test('Email Extractor - Domain Include / Exclude Filters', () => {
  const input = `
    a@apple.com
    b@google.com
    c@microsoft.com
  `
  const included = extractEmails(input, { includeDomains: ['apple.com'] })
  assert.equal(included.items.length, 1)
  assert.equal(included.items[0].email, 'a@apple.com')

  const excluded = extractEmails(input, { excludeDomains: ['apple.com'] })
  assert.equal(excluded.items.length, 2)
  assert.ok(!excluded.items.some((i) => i.domain === 'apple.com'))
})

test('Email Extractor - Written-out bracketed vs plain words', () => {
  // Plain words without brackets must never be converted
  const plainInput = 'meet us at the office dot com'
  const plainResult = extractEmails(plainInput, { writtenOutObfuscation: true })
  assert.equal(plainResult.items.length, 0)

  // Bracketed form must be converted
  const bracketInput = 'anna [at] example [dot] com'
  const bracketResult = extractEmails(bracketInput, { writtenOutObfuscation: true })
  assert.equal(bracketResult.items.length, 1)
  assert.equal(bracketResult.items[0].email, 'anna@example.com')

  // Other bracketed forms: (), {}, [], with optional spaces
  const formsInput = `
    anna (at) example (dot) com
    anna {at} example {dot} com
    anna[at]example[dot]com
    anna   [at]   example   [dot]   com
  `
  const formsResult = extractEmails(formsInput, { writtenOutObfuscation: true, deduplicate: true })
  assert.equal(formsResult.items.length, 1)
  assert.equal(formsResult.items[0].email, 'anna@example.com')
})

