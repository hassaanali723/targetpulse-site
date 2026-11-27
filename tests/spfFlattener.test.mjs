import test from 'node:test'
import assert from 'node:assert/strict'
import {
  parseIp4Cidr,
  deduplicateAndMergeIp4,
  expandIp6,
  parseIp6Cidr,
  deduplicateAndMergeIp6,
  splitIntoDnsChunks,
  assembleFlattenedRecord,
  UDP_SAFE_BYTE_LIMIT,
} from '../lib/tools/spfFlattenerPure.ts'

test('parseIp4Cidr and deduplicateAndMergeIp4 handle subnets and containment', () => {
  const parsed1 = parseIp4Cidr('192.168.1.5')
  assert.equal(parsed1?.raw, '192.168.1.5')
  assert.equal(parsed1?.prefix, 32)

  const parsed2 = parseIp4Cidr('192.168.1.0/24')
  assert.equal(parsed2?.raw, '192.168.1.0/24')
  assert.equal(parsed2?.prefix, 24)

  // Subnet containment: /24 covers /28 and /32 inside it
  const input = [
    '192.168.1.5',
    '192.168.1.0/24',
    '192.168.1.16/28',
    '10.0.0.1',
    '192.168.1.0/24', // duplicate
  ]
  const deduped = deduplicateAndMergeIp4(input)
  assert.deepEqual(deduped, ['10.0.0.1', '192.168.1.0/24'])
})

test('expandIp6 and deduplicateAndMergeIp6 handle IPv6 ranges and containment', () => {
  const exp = expandIp6('2001:db8::1')
  assert.equal(exp, '2001:0db8:0000:0000:0000:0000:0000:0001')

  const parsed = parseIp6Cidr('2001:db8::/32')
  assert.ok(parsed)
  assert.equal(parsed?.prefix, 32)

  const input = [
    '2001:db8::1',
    '2001:db8::/32',
    '2001:db8:1::/48',
    '2607:f8b0::/32',
  ]
  const deduped = deduplicateAndMergeIp6(input)
  assert.deepEqual(deduped, ['2001:db8::/32', '2607:f8b0::/32'])
})

test('splitIntoDnsChunks breaks long records into <= 255-char quoted chunks', () => {
  const shortRec = 'v=spf1 ip4:198.51.100.1 ~all'
  assert.equal(splitIntoDnsChunks(shortRec), `"${shortRec}"`)

  const longRec = 'v=spf1 ' + Array(30).fill('ip4:198.51.100.10/29').join(' ') + ' ~all'
  assert.ok(longRec.length > 255)
  const chunked = splitIntoDnsChunks(longRec)
  assert.ok(chunked.includes('" "'))
  const parts = chunked.slice(1, -1).split('" "')
  for (const part of parts) {
    assert.ok(part.length <= 255)
  }
})

test('assembleFlattenedRecord computes byte length and lookups accurately', () => {
  const res = assembleFlattenedRecord({
    ip4List: ['198.51.100.1', '198.51.100.2', '198.51.100.0/24'],
    ip6List: ['2001:db8::1'],
    preservedTerms: ['include:_spf.google.com'],
    allQualifier: '~',
  })

  assert.equal(res.lookupCount, 1) // only 1 preserved include
  assert.equal(res.ip4Count, 1) // 198.51.100.0/24 swallowed the /32s
  assert.equal(res.ip6Count, 1)
  assert.ok(res.record.startsWith('v=spf1 ip4:198.51.100.0/24 ip6:2001:db8::1 include:_spf.google.com ~all'))
  assert.ok(res.byteLength < UDP_SAFE_BYTE_LIMIT)
  assert.equal(res.isUnderUdpLimit, true)
})
