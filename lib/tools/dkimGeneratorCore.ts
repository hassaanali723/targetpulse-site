/**
 * Core DKIM Key Pair Generation and DNS TXT Formatting.
 * Runs 100% in-browser using Web Crypto API.
 */

export type DkimKeySize = 1024 | 2048 | 4096

export interface DkimGeneratedKeys {
  selector: string
  domain: string
  keySize: DkimKeySize
  publicKeyBase64: string
  dnsRecordName: string
  dnsRecordFqdn: string
  dnsRecordValue: string
  dnsRecordChunked: string
  bindRecord: string
  privateKeyPkcs8Pem: string
  privateKeyPkcs1Pem: string
  recordCharCount: number
}

/**
 * Validates DKIM selector according to RFC 6376 (letters, digits, hyphens).
 */
export function validateSelector(selector: string): { valid: boolean; error?: string } {
  const trimmed = selector.trim()
  if (!trimmed) {
    return { valid: false, error: 'Selector cannot be empty' }
  }
  if (trimmed.length > 63) {
    return { valid: false, error: 'Selector must be 63 characters or fewer' }
  }
  if (!/^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(trimmed)) {
    return {
      valid: false,
      error: 'Selector must contain only letters, numbers, and hyphens, and cannot start or end with a hyphen',
    }
  }
  return { valid: true }
}

/**
 * Validates domain name.
 */
export function validateDomain(domain: string): { valid: boolean; error?: string } {
  const trimmed = domain.trim().toLowerCase().replace(/\.$/, '')
  if (!trimmed) {
    return { valid: false, error: 'Domain cannot be empty' }
  }
  if (trimmed.length > 253) {
    return { valid: false, error: 'Domain is too long' }
  }
  // Standard hostname check
  const labels = trimmed.split('.')
  if (labels.length < 2) {
    return { valid: false, error: 'Domain must include a top-level domain (e.g., example.com)' }
  }
  for (const label of labels) {
    if (!label || label.length > 63) {
      return { valid: false, error: 'Invalid domain label length' }
    }
    if (!/^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/.test(label)) {
      return { valid: false, error: `Invalid label "${label}" in domain name` }
    }
  }
  return { valid: true }
}

/**
 * Helper to convert ArrayBuffer or Uint8Array to Base64 string without external dependencies.
 */
export function arrayBufferToBase64(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer)
  let binary = ''
  const len = bytes.byteLength
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  if (typeof btoa === 'function') {
    return btoa(binary)
  }
  return Buffer.from(bytes).toString('base64')
}

/**
 * Wraps a base64 string into standard 64-character PEM format.
 */
export function formatPem(base64: string, label: string): string {
  const lines: string[] = []
  for (let i = 0; i < base64.length; i += 64) {
    lines.push(base64.slice(i, i + 64))
  }
  return `-----BEGIN ${label}-----\n${lines.join('\n')}\n-----END ${label}-----`
}

function readDerLength(bytes: Uint8Array, offset: number): { length: number; nextOffset: number } {
  const initial = bytes[offset++]
  if ((initial & 0x80) === 0) {
    return { length: initial, nextOffset: offset }
  }
  const numBytes = initial & 0x7f
  let length = 0
  for (let i = 0; i < numBytes; i++) {
    length = (length << 8) | bytes[offset++]
  }
  return { length, nextOffset: offset }
}

/**
 * Extracts PKCS#1 RSAPrivateKey DER from PKCS#8 PrivateKeyInfo DER.
 * RFC 5208 PrivateKeyInfo ::= SEQUENCE { version, privateKeyAlgorithm, privateKey (OCTET STRING), ... }
 */
export function extractPkcs1FromPkcs8(pkcs8Bytes: Uint8Array): Uint8Array {
  let offset = 0

  // Outer SEQUENCE (0x30)
  if (pkcs8Bytes[offset++] !== 0x30) {
    throw new Error('Invalid PKCS#8: expected outer SEQUENCE')
  }
  const outerLen = readDerLength(pkcs8Bytes, offset)
  offset = outerLen.nextOffset

  // Version INTEGER (0x02)
  if (pkcs8Bytes[offset++] !== 0x02) {
    throw new Error('Invalid PKCS#8: expected version INTEGER')
  }
  const vLen = readDerLength(pkcs8Bytes, offset)
  offset = vLen.nextOffset + vLen.length

  // AlgorithmIdentifier SEQUENCE (0x30)
  if (pkcs8Bytes[offset++] !== 0x30) {
    throw new Error('Invalid PKCS#8: expected AlgorithmIdentifier SEQUENCE')
  }
  const algLen = readDerLength(pkcs8Bytes, offset)
  offset = algLen.nextOffset + algLen.length

  // PrivateKey OCTET STRING (0x04)
  if (pkcs8Bytes[offset++] !== 0x04) {
    throw new Error('Invalid PKCS#8: expected OCTET STRING')
  }
  const octetLen = readDerLength(pkcs8Bytes, offset)
  return pkcs8Bytes.slice(octetLen.nextOffset, octetLen.nextOffset + octetLen.length)
}

/**
 * Splits a long string into 255-character chunks for DNS TXT records.
 */
export function chunkDnsString(recordValue: string, chunkSize = 255): string[] {
  const chunks: string[] = []
  for (let i = 0; i < recordValue.length; i += chunkSize) {
    chunks.push(recordValue.slice(i, i + chunkSize))
  }
  return chunks
}

/**
 * Generates an RSA DKIM key pair and constructs all DNS record formats.
 */
export async function generateDkimKeys(
  rawDomain: string,
  rawSelector = 's2026a',
  keySize: DkimKeySize = 2048
): Promise<DkimGeneratedKeys> {
  const domain = rawDomain.trim().toLowerCase().replace(/\.$/, '')
  const selector = rawSelector.trim()

  const selVal = validateSelector(selector)
  if (!selVal.valid) throw new Error(selVal.error)

  const domVal = validateDomain(domain)
  if (!domVal.valid) throw new Error(domVal.error)

  // Web Crypto SubtleCrypto
  const cryptoObj = typeof globalThis !== 'undefined' ? globalThis.crypto?.subtle : undefined
  if (!cryptoObj) {
    throw new Error('Web Crypto API (crypto.subtle) is not available in this environment')
  }

  const keyPair = await cryptoObj.generateKey(
    {
      name: 'RSASSA-PKCS1-v1_5',
      modulusLength: keySize,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: 'SHA-256',
    },
    true,
    ['sign', 'verify']
  )

  // Export Public Key (spki)
  const spkiBuffer = await cryptoObj.exportKey('spki', keyPair.publicKey)
  const publicKeyBase64 = arrayBufferToBase64(spkiBuffer)

  // Export Private Key (pkcs8)
  const pkcs8Buffer = await cryptoObj.exportKey('pkcs8', keyPair.privateKey)
  const pkcs8Bytes = new Uint8Array(pkcs8Buffer)
  const privateKeyPkcs8Pem = formatPem(arrayBufferToBase64(pkcs8Bytes), 'PRIVATE KEY')

  // Derive PKCS#1 PEM
  const pkcs1Bytes = extractPkcs1FromPkcs8(pkcs8Bytes)
  const privateKeyPkcs1Pem = formatPem(arrayBufferToBase64(pkcs1Bytes), 'RSA PRIVATE KEY')

  // DNS Record parts
  const dnsRecordName = `${selector}._domainkey`
  const dnsRecordFqdn = `${selector}._domainkey.${domain}.`
  const dnsRecordValue = `v=DKIM1; k=rsa; p=${publicKeyBase64}`

  // 255-character chunked format
  const chunks = chunkDnsString(dnsRecordValue, 255)
  const dnsRecordChunked = `(${chunks.map((c) => `"${c}"`).join(' ')})`

  // BIND zone format
  const bindChunks = chunks.map((c) => `    "${c}"`).join('\n')
  const bindRecord = `${dnsRecordFqdn} IN TXT (\n${bindChunks}\n)`

  return {
    selector,
    domain,
    keySize,
    publicKeyBase64,
    dnsRecordName,
    dnsRecordFqdn,
    dnsRecordValue,
    dnsRecordChunked,
    bindRecord,
    privateKeyPkcs8Pem,
    privateKeyPkcs1Pem,
    recordCharCount: dnsRecordValue.length,
  }
}
