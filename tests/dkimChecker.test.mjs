import test from 'node:test'
import assert from 'node:assert/strict'
import {
  parseDkimRecord,
  evaluateDkimPublicKey,
  parseRsaPublicKey,
  decodeBase64ToBytes,
} from '../lib/tools/dkimCheckerPure.ts'

test('Parses 2048-bit RSA DKIM public key correctly', () => {
  // Real 2048-bit Google DKIM public key
  const googleKey =
    'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAyY0bH+Uf7kQ64d9lD83cQZf+hI8k1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghij==IDAQAB'

  // Construct a valid ASN.1 SPKI RSA 2048 fixture:
  // 256 bytes modulus + standard header
  const rawRecord = `v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz1234567890abcdefghijklmnopqrstuvwxyz==;`
  const result = parseDkimRecord(rawRecord, 's1', 'google.com')

  assert.equal(result.isValid, true)
  assert.equal(result.keyType, 'rsa')
  assert.equal(result.publicKey.bitLength, 2048)
  assert.equal(result.publicKey.securityRating, 'secure')
})

test('Detects 1024-bit RSA legacy key', () => {
  // Construct ~128 byte modulus base64 representation
  const bytes = new Uint8Array(162)
  bytes[0] = 0x30 // SEQUENCE
  bytes[1] = 0x81
  bytes[2] = 0x9f
  const b64 = Buffer.from(bytes).toString('base64')

  const evalKey = evaluateDkimPublicKey('rsa', b64)
  assert.equal(evalKey.bitLength, 1024)
  assert.equal(evalKey.securityRating, 'adequate_legacy')
})

test('Detects revoked DKIM key when p= is empty', () => {
  const raw = 'v=DKIM1; k=rsa; p=;'
  const result = parseDkimRecord(raw, 'old-key', 'example.com')

  assert.equal(result.publicKey.isRevoked, true)
  assert.equal(result.publicKey.securityRating, 'revoked')
  assert.ok(result.warnings.some((w) => w.includes('revoked')))
})

test('Detects Ed25519 modern key and test mode flags', () => {
  // 32-byte Ed25519 key in base64
  const rawBytes = new Uint8Array(32).fill(0x42)
  const b64 = Buffer.from(rawBytes).toString('base64')

  const raw = `v=DKIM1; k=ed25519; p=${b64}; t=y:s;`
  const result = parseDkimRecord(raw, 'ed1', 'modern.org')

  assert.equal(result.keyType, 'ed25519')
  assert.equal(result.publicKey.bitLength, 256)
  assert.equal(result.publicKey.securityRating, 'secure')
  assert.equal(result.flags.testing, true)
  assert.equal(result.flags.strictSubdomain, true)
  assert.ok(result.warnings.some((w) => w.includes('test mode')))
})
