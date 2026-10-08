import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import {
  generateDkimKeys,
  validateSelector,
  validateDomain,
  chunkDnsString,
  extractPkcs1FromPkcs8,
} from '../lib/tools/dkimGeneratorCore.ts'

test('DKIM Generator - Validator rules', () => {
  assert.equal(validateSelector('s2026a').valid, true)
  assert.equal(validateSelector('selector-1').valid, true)
  assert.equal(validateSelector('-bad').valid, false)
  assert.equal(validateSelector('bad-').valid, false)
  assert.equal(validateSelector('bad selector').valid, false)

  assert.equal(validateDomain('example.com').valid, true)
  assert.equal(validateDomain('mail.example.co.uk').valid, true)
  assert.equal(validateDomain('invalid_domain').valid, false)
  assert.equal(validateDomain('nodot').valid, false)
})

test('DKIM Generator - Chunking 255 chars', () => {
  const sample = 'A'.repeat(520)
  const chunks = chunkDnsString(sample, 255)
  assert.equal(chunks.length, 3)
  assert.equal(chunks[0].length, 255)
  assert.equal(chunks[1].length, 255)
  assert.equal(chunks[2].length, 10)
})

test('DKIM Generator - Key Generation and OpenSSL verification', async () => {
  const result = await generateDkimKeys('example.com', 'mail2026', 2048)

  assert.equal(result.selector, 'mail2026')
  assert.equal(result.domain, 'example.com')
  assert.equal(result.keySize, 2048)
  assert.ok(result.publicKeyBase64.length > 200)
  assert.ok(result.dnsRecordValue.startsWith('v=DKIM1; k=rsa; p='))
  assert.ok(result.dnsRecordChunked.startsWith('("v=DKIM1; k=rsa; p='))
  assert.ok(result.bindRecord.includes('mail2026._domainkey.example.com. IN TXT ('))

  assert.ok(result.privateKeyPkcs8Pem.includes('-----BEGIN PRIVATE KEY-----'))
  assert.ok(result.privateKeyPkcs1Pem.includes('-----BEGIN RSA PRIVATE KEY-----'))

  // Verify with OpenSSL if available
  const opensslPath = 'C:\\Program Files\\Git\\usr\\bin\\openssl.exe'
  if (fs.existsSync(opensslPath)) {
    const tmpPkcs8 = path.join(process.cwd(), 'tmp_test_pkcs8.key')
    const tmpPkcs1 = path.join(process.cwd(), 'tmp_test_pkcs1.key')

    try {
      fs.writeFileSync(tmpPkcs8, result.privateKeyPkcs8Pem)
      fs.writeFileSync(tmpPkcs1, result.privateKeyPkcs1Pem)

      // Test PKCS#8
      const out8 = execFileSync(opensslPath, ['rsa', '-check', '-in', tmpPkcs8], { encoding: 'utf8' })
      assert.ok(out8.includes('RSA key ok'))

      // Test PKCS#1
      const out1 = execFileSync(opensslPath, ['rsa', '-check', '-in', tmpPkcs1], { encoding: 'utf8' })
      assert.ok(out1.includes('RSA key ok'))
    } finally {
      if (fs.existsSync(tmpPkcs8)) fs.unlinkSync(tmpPkcs8)
      if (fs.existsSync(tmpPkcs1)) fs.unlinkSync(tmpPkcs1)
    }
  }
})
