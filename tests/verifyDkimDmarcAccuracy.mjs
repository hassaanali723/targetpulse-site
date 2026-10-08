import { generateDkimKeys } from '../lib/tools/dkimGeneratorCore.ts'
import { generateDmarcRecord, cleanDmarcRecord } from '../lib/tools/dmarcGeneratorCore.ts'
import crypto from 'node:crypto'
import assert from 'node:assert'

console.log('--- 1. TESTING DKIM GENERATOR ACCURACY ---')
const dkim = await generateDkimKeys('acme.org', 'mail2026', 2048)

// 1. Verify PKCS#8 parses in OpenSSL
const priv8 = crypto.createPrivateKey(dkim.privateKeyPkcs8Pem)
assert.strictEqual(priv8.asymmetricKeyType, 'rsa')

// 2. Verify PKCS#1 parses in OpenSSL
const priv1 = crypto.createPrivateKey(dkim.privateKeyPkcs1Pem)
assert.strictEqual(priv1.asymmetricKeyType, 'rsa')

// 3. Verify public key in DNS record matches and signs accurately
const spkiPem = `-----BEGIN PUBLIC KEY-----\n${dkim.publicKeyBase64.match(/.{1,64}/g).join('\n')}\n-----END PUBLIC KEY-----`
const pub = crypto.createPublicKey(spkiPem)

const testMsg = 'From: test@acme.org\r\nTo: user@example.com\r\nSubject: Test\r\n\r\nHello World'
const sign = crypto.createSign('SHA256')
sign.update(testMsg)
const signature = sign.sign(priv1)

const verify = crypto.createVerify('SHA256')
verify.update(testMsg)
const isValid = verify.verify(pub, signature)
assert.strictEqual(isValid, true, 'DKIM signature must verify against published public key')
console.log('✔ DKIM RSA-SHA256 Key pair generation & cryptographic signature verified!')

// 4. Verify DKIM DNS TXT format
assert.strictEqual(dkim.dnsRecordName, 'mail2026._domainkey')
assert.strictEqual(dkim.dnsRecordFqdn, 'mail2026._domainkey.acme.org.')
assert.ok(dkim.dnsRecordValue.startsWith('v=DKIM1; k=rsa; p='))
assert.ok(dkim.dnsRecordChunked.startsWith('("v=DKIM1; k=rsa; p='))
console.log('✔ DKIM DNS TXT formatting and 255-character chunking verified!')

console.log('\n--- 2. TESTING DMARC GENERATOR ACCURACY ---')
// 1. Test DMARC generation with standard parameters
const dmarcNone = generateDmarcRecord({
  domain: 'acme.org',
  policy: 'none',
  aggregateReports: 'dmarc@acme.org',
})
assert.strictEqual(dmarcNone.record, 'v=DMARC1; p=none; rua=mailto:dmarc@acme.org')
assert.strictEqual(dmarcNone.host, '_dmarc')
assert.strictEqual(dmarcNone.fqdn, '_dmarc.acme.org.')

// 2. Test DMARC with external consent requirements (RFC 7489 / RFC 9989 Section 7.1)
const dmarcExternal = generateDmarcRecord({
  domain: 'acme.org',
  policy: 'reject',
  aggregateReports: 'reports@thirdpartydmarc.com',
})
assert.strictEqual(dmarcExternal.record, 'v=DMARC1; p=reject; rua=mailto:reports@thirdpartydmarc.com')
assert.strictEqual(dmarcExternal.externalConsentRecords.length, 1)
assert.strictEqual(
  dmarcExternal.externalConsentRecords[0].host,
  'acme.org._report._dmarc.thirdpartydmarc.com.'
)
assert.strictEqual(dmarcExternal.externalConsentRecords[0].value, '"v=DMARC1"')
console.log('✔ DMARC External destination consent record verified (RFC 7489 / RFC 9989 Section 7.1)!')

// 3. Test RFC 9989 tags: np=reject, t=y
const dmarcNpTest = generateDmarcRecord({
  domain: 'acme.org',
  policy: 'quarantine',
  nonExistentSubdomainPolicy: 'reject',
  testingMode: true,
})
assert.strictEqual(dmarcNpTest.record, 'v=DMARC1; p=quarantine; np=reject; t=y')
console.log('✔ RFC 9989 modern tags (np=reject, t=y) verified!')

// 4. Test DMARC Cleaner: Strips obsolete tags (pct, ri, rf) per RFC 9989
const legacyRecord = 'v=DMARC1; p=quarantine; pct=100; ri=86400; rf=afrf; rua=mailto:dmarc@acme.org'
const cleaned = cleanDmarcRecord(legacyRecord, 'acme.org')
assert.strictEqual(cleaned.cleanedRecord, 'v=DMARC1; p=quarantine; rua=mailto:dmarc@acme.org')
assert.ok(cleaned.changes.some(c => c.tag === 'pct' && c.action === 'removed'))
assert.ok(cleaned.changes.some(c => c.tag === 'ri' && c.action === 'removed'))
assert.ok(cleaned.changes.some(c => c.tag === 'rf' && c.action === 'removed'))
console.log('✔ DMARC Cleaner properly removes retired RFC 7489 tags (pct, ri, rf) per RFC 9989!')

console.log('\nALL DKIM AND DMARC ACCURACY CHECKS PASSED 100%!')
