import test from 'node:test'
import assert from 'node:assert/strict'
import {
  isValidIpv4,
  isValidIpv6,
  checkIpv4Bogon,
  checkIpv6Bogon,
  formatDnsblQuery,
  decodeDnsblResponse,
  assessFcrdns,
  calculateReputationScore,
  expandIpv6ToNibbles,
} from '../lib/tools/ipReputationPure.ts'

test('IPv4 and IPv6 syntax and bogon checks', () => {
  assert.equal(isValidIpv4('209.85.220.41'), true)
  assert.equal(isValidIpv4('10.0.0.1'), true)
  assert.equal(isValidIpv4('999.1.1.1'), false)
  assert.equal(isValidIpv4('abc.def.ghi.jkl'), false)

  assert.equal(checkIpv4Bogon('10.0.0.1').isBogon, true)
  assert.equal(checkIpv4Bogon('192.168.1.100').isBogon, true)
  assert.equal(checkIpv4Bogon('127.0.0.1').isBogon, true)
  assert.equal(checkIpv4Bogon('198.51.100.14').isBogon, true)
  assert.equal(checkIpv4Bogon('209.85.220.41').isBogon, false)

  assert.equal(isValidIpv6('2607:f8b0:4023:c0d::52a'), true)
  assert.equal(isValidIpv6('::1'), true)
  assert.equal(checkIpv6Bogon('::1').isBogon, true)
  assert.equal(checkIpv6Bogon('fe80::1').isBogon, true)
  assert.equal(checkIpv6Bogon('2001:db8::1').isBogon, true)
  assert.equal(checkIpv6Bogon('2607:f8b0:4023:c0d::52a').isBogon, false)
})

test('DNSBL query formatting for IPv4 and IPv6', () => {
  // IPv4: 209.85.220.41 -> 41.220.85.209.zen.spamhaus.org
  const v4Query = formatDnsblQuery('209.85.220.41', 'zen.spamhaus.org')
  assert.equal(v4Query, '41.220.85.209.zen.spamhaus.org')

  // IPv6 nibble expansion and reversing
  const nibbles = expandIpv6ToNibbles('2001:db8::1')
  assert.equal(nibbles.length, 32)
  assert.equal(nibbles[0], '2')
  assert.equal(nibbles[31], '1')

  const v6Query = formatDnsblQuery('2001:db8::1', 'zen.spamhaus.org')
  assert.match(v6Query, /^1\.0\.0\.0.*\.zen\.spamhaus\.org$/)
})

test('Spamhaus and Mailspike response code decoding', () => {
  // Open resolver block
  const unverified = decodeDnsblResponse('spamhaus-zen', ['127.255.255.254'])
  assert.equal(unverified.status, 'unverified')
  assert.equal(unverified.subList, 'Query Blocked')

  // SBL
  const sbl = decodeDnsblResponse('spamhaus-zen', ['127.0.0.2'])
  assert.equal(sbl.status, 'listed')
  assert.equal(sbl.subList, 'SBL')

  // XBL
  const xbl = decodeDnsblResponse('spamhaus-zen', ['127.0.0.4'])
  assert.equal(xbl.status, 'listed')
  assert.equal(xbl.subList, 'XBL')

  // PBL
  const pbl = decodeDnsblResponse('spamhaus-zen', ['127.0.0.10'])
  assert.equal(pbl.status, 'policy_warning')
  assert.equal(pbl.subList, 'PBL')

  // Clean
  const clean = decodeDnsblResponse('spamhaus-zen', [])
  assert.equal(clean.status, 'clean')
})

test('FCrDNS and overall reputation scoring', () => {
  // Valid FCrDNS
  const validFcrdns = assessFcrdns(
    '209.85.220.41',
    ['mail-sor-f41.google.com'],
    { 'mail-sor-f41.google.com': ['209.85.220.41'] }
  )
  assert.equal(validFcrdns.isValid, true)
  assert.equal(validFcrdns.matchedHostnames[0], 'mail-sor-f41.google.com')

  // Mismatched FCrDNS
  const invalidFcrdns = assessFcrdns(
    '209.85.220.41',
    ['spoofed.example.com'],
    { 'spoofed.example.com': ['1.2.3.4'] }
  )
  assert.equal(invalidFcrdns.isValid, false)
  assert.equal(invalidFcrdns.matchedHostnames.length, 0)

  // Scoring
  const cleanScore = calculateReputationScore(false, true, [
    {
      id: 'spamhaus-zen',
      name: 'Spamhaus ZEN',
      zone: 'zen.spamhaus.org',
      category: 'spam',
      status: 'clean',
      responseCode: null,
      subList: null,
      explanation: 'Clean',
      delistUrl: '',
    },
  ])
  assert.equal(cleanScore.score, 100)
  assert.equal(cleanScore.overallStatus, 'excellent')

  const listedScore = calculateReputationScore(false, true, [
    {
      id: 'spamhaus-zen',
      name: 'Spamhaus ZEN',
      zone: 'zen.spamhaus.org',
      category: 'spam',
      status: 'listed',
      responseCode: '127.0.0.2',
      subList: 'SBL',
      explanation: 'Listed',
      delistUrl: '',
    },
  ])
  assert.equal(listedScore.score, 70)
  assert.equal(listedScore.overallStatus, 'warning')
  assert.equal(listedScore.listedCount, 1)
})
