import test from 'node:test'
import assert from 'node:assert/strict'
import {
  cleanDomain,
  isValidDomain,
  parseDomains,
  normalizeNameVariants,
  generatePermutations,
  parseCsvRows,
  detectCsvColumns,
} from '../lib/tools/emailPermutatorCore.ts'

test('Email Permutator - Domain Cleanup & Validation', () => {
  assert.equal(cleanDomain('https://example.com/team'), 'example.com')
  assert.equal(cleanDomain('http://www.sub.corp.org/about?q=1'), 'sub.corp.org')
  assert.equal(cleanDomain('@gmail.com'), 'gmail.com')
  assert.equal(cleanDomain('WWW.COMPANY.CO.UK:8080/'), 'company.co.uk')

  assert.equal(isValidDomain('example.com'), true)
  assert.equal(isValidDomain('sub.corp.org'), true)
  assert.equal(isValidDomain('invalid'), false)
  assert.equal(isValidDomain('bad_domain.com'), false)

  const parsed = parseDomains('https://example.com, invalid, www.test.co.uk')
  assert.deepEqual(parsed.valid, ['example.com', 'test.co.uk'])
  assert.deepEqual(parsed.invalid, ['invalid'])
})

test('Email Permutator - Name Normalization Rules', () => {
  // Lowercase & basic
  assert.deepEqual(normalizeNameVariants('Jane'), ['jane'])

  // Accents: José -> jose, Zoë -> zoe
  assert.deepEqual(normalizeNameVariants('José'), ['jose'])
  assert.deepEqual(normalizeNameVariants('Zoë'), ['zoe'])

  // German umlauts: Müller -> both muller and mueller; ß -> ss
  const mullerVariants = normalizeNameVariants('Müller')
  assert.ok(mullerVariants.includes('muller'), 'Must include muller')
  assert.ok(mullerVariants.includes('mueller'), 'Must include mueller')

  assert.deepEqual(normalizeNameVariants('Groß'), ['gross'])

  // Apostrophes and full stops: O'Brien -> obrien, St. John
  assert.deepEqual(normalizeNameVariants("O'Brien"), ['obrien'])
  assert.deepEqual(normalizeNameVariants('St. John'), ['stjohn', 'john'])

  // Names with spaces (de la Cruz): joined form (delacruz) and last word only (cruz)
  const cruzVariants = normalizeNameVariants('de la Cruz')
  assert.ok(cruzVariants.includes('delacruz'), 'Must include joined form delacruz')
  assert.ok(cruzVariants.includes('cruz'), 'Must include last word cruz')

  // Hyphenated names (Smith-Jones): with hyphen, joined, and first part
  const smithJonesVariants = normalizeNameVariants('Smith-Jones')
  assert.ok(smithJonesVariants.includes('smith-jones'), 'Must include smith-jones')
  assert.ok(smithJonesVariants.includes('smithjones'), 'Must include smithjones')
  assert.ok(smithJonesVariants.includes('smith'), 'Must include smith')
})

test('Email Permutator - Pattern Order and Real Count for Single First and Last Name', () => {
  const perms = generatePermutations({
    firstName: 'Jane',
    lastName: 'Doe',
    domains: ['example.com'],
  })

  // Exact 18 patterns in order:
  // first.last, flast, first, firstlast, first_last, f.last, firstl, first.l,
  // last.first, lastf, last, last_first, lastfirst, first-last, f_last, l.first, lfirst, f
  assert.equal(perms.length, 18, 'Must generate exactly 18 formats for standard Jane Doe')

  const expectedPatterns = [
    'first.last',
    'flast',
    'first',
    'firstlast',
    'first_last',
    'f.last',
    'firstl',
    'first.l',
    'last.first',
    'lastf',
    'last',
    'last_first',
    'lastfirst',
    'first-last',
    'f_last',
    'l.first',
    'lfirst',
    'f',
  ]

  const actualPatterns = perms.map((p) => p.pattern)
  assert.deepEqual(actualPatterns, expectedPatterns)

  assert.equal(perms[0].email, 'jane.doe@example.com')
  assert.equal(perms[1].email, 'jdoe@example.com')
  assert.equal(perms[2].email, 'jane@example.com')
  assert.equal(perms[17].email, 'j@example.com')
})

test('Email Permutator - Middle name, Nickname, and First-name only', () => {
  // First-name only: last name omitted
  const firstOnly = generatePermutations({
    firstName: 'Jane',
    domains: ['example.com'],
  })
  assert.equal(firstOnly.length, 2)
  assert.deepEqual(
    firstOnly.map((p) => p.email),
    ['jane@example.com', 'j@example.com']
  )

  // Middle name additions
  const withMiddle = generatePermutations({
    firstName: 'Jane',
    middleName: 'Marie',
    lastName: 'Doe',
    domains: ['example.com'],
  })
  // 18 base + 4 middle = 22
  assert.equal(withMiddle.length, 22)
  const middlePatterns = withMiddle.map((p) => p.pattern)
  assert.ok(middlePatterns.includes('first.m.last'))
  assert.ok(middlePatterns.includes('fmlast'))
  assert.ok(middlePatterns.includes('firstmlast'))
  assert.ok(middlePatterns.includes('first.middle.last'))

  // Nickname additions: with nickname "Janey", n is "j", so "jdoe" (nlast) is deduplicated with "flast"!
  // Thus 18 + 3 = 21 unique addresses.
  const withNick = generatePermutations({
    firstName: 'Jane',
    nickname: 'Janey',
    lastName: 'Doe',
    domains: ['example.com'],
  })
  assert.equal(withNick.length, 21)
  const nickPatterns = withNick.map((p) => p.pattern)
  assert.ok(nickPatterns.includes('nick.last'))
  assert.ok(nickPatterns.includes('nick'))
  assert.ok(nickPatterns.includes('nicklast'))

  // With a nickname having a different initial (e.g. "Peggy" for Margaret)
  const withPeggy = generatePermutations({
    firstName: 'Margaret',
    nickname: 'Peggy',
    lastName: 'Smith',
    domains: ['example.com'],
  })
  // 18 base + 4 nickname = 22
  assert.equal(withPeggy.length, 22)
  assert.ok(withPeggy.map((p) => p.pattern).includes('nlast'))
})

test('Email Permutator - Deduplication & Multiple Domains', () => {
  const multiDomain = generatePermutations({
    firstName: 'Jane',
    lastName: 'Doe',
    domains: ['acme.com', 'example.com'],
  })
  assert.equal(multiDomain.length, 36)

  // Deduplication check: no duplicate email in list
  const emails = multiDomain.map((m) => m.email)
  const uniqueEmails = new Set(emails)
  assert.equal(uniqueEmails.size, emails.length)
})

test('Email Permutator - CSV Parsing with and without headers', () => {
  const csvWithHeader = `First Name,Last Name,Domain\nJane,Doe,example.com\nJohn,Smith,acme.org`
  const rows1 = parseCsvRows(csvWithHeader)
  assert.equal(rows1.length, 3)
  const detection1 = detectCsvColumns(rows1[0])
  assert.equal(detection1.hasHeader, true)
  assert.equal(detection1.firstNameIndex, 0)
  assert.equal(detection1.lastNameIndex, 1)
  assert.equal(detection1.domainIndex, 2)

  const csvNoHeader = `Jane,Doe,example.com\nJohn,Smith,acme.org`
  const rows2 = parseCsvRows(csvNoHeader)
  assert.equal(rows2.length, 2)
  const detection2 = detectCsvColumns(rows2[0])
  assert.equal(detection2.hasHeader, false)
  assert.equal(detection2.firstNameIndex, 0)
  assert.equal(detection2.lastNameIndex, 1)
  assert.equal(detection2.domainIndex, 2)
})
