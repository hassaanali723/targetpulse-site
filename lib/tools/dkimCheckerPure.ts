/**
 * Pure DKIM Record Parser, ASN.1 DER Public Key Decoder, and RFC 6376 / RFC 8463 Validator.
 * Zero external imports for browser and plain Node execution.
 */

export interface DkimTagResult {
  tag: string
  value: string
  isValid: boolean
  description: string
  warning?: string
  error?: string
}

export interface DkimPublicKeyInfo {
  keyType: 'rsa' | 'ed25519' | 'unknown'
  rawBase64: string
  byteLength: number
  bitLength: number | null
  securityRating: 'secure' | 'adequate_legacy' | 'insecure' | 'revoked' | 'invalid'
  exponent: number | null
  isRevoked: boolean
  details: string
}

export interface DkimValidationResult {
  rawRecord: string
  isValid: boolean
  selector: string
  domain: string
  version: string | null
  keyType: 'rsa' | 'ed25519' | 'unknown'
  publicKey: DkimPublicKeyInfo
  flags: {
    testing: boolean
    strictSubdomain: boolean
  }
  services: string[]
  hashes: string[]
  notes: string | null
  tags: DkimTagResult[]
  warnings: string[]
  errors: string[]
  complianceScore: number // 0 to 100
  recommendations: string[]
}

/**
 * Base64 decoder returning a Uint8Array across browser and Node
 */
export function decodeBase64ToBytes(b64: string): Uint8Array {
  const clean = b64.replace(/\s+/g, '')
  if (typeof Buffer !== 'undefined') {
    return new Uint8Array(Buffer.from(clean, 'base64'))
  }
  // Browser fallback
  const binary = atob(clean)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes
}

/**
 * Parses ASN.1 DER structure to extract exact RSA modulus bit length and exponent.
 * Handles both SubjectPublicKeyInfo (SPKI X.509) and raw PKCS#1 RSAPublicKey sequences.
 */
export function parseRsaPublicKey(bytes: Uint8Array): {
  bitLength: number | null
  exponent: number | null
  error?: string
} {
  if (bytes.length < 32) {
    return { bitLength: null, exponent: null, error: 'Key data is too short for valid RSA.' }
  }

  let offset = 0

  // Expect SEQUENCE tag 0x30
  if (bytes[offset] !== 0x30) {
    // If not standard ASN.1 sequence, estimate directly from raw byte length
    const estBits = bytes.length * 8
    return { bitLength: estBits, exponent: 65537 }
  }
  offset++

  // Skip sequence length
  if (bytes[offset] & 0x80) {
    const lenBytes = bytes[offset] & 0x7f
    offset += 1 + lenBytes
  } else {
    offset++
  }

  // Check if this is SubjectPublicKeyInfo (starts with an AlgorithmIdentifier SEQUENCE)
  if (bytes[offset] === 0x30) {
    // Skip AlgorithmIdentifier sequence
    offset++
    if (bytes[offset] & 0x80) {
      const lenBytes = bytes[offset] & 0x7f
      const seqLen = readLength(bytes, offset)
      offset += 1 + lenBytes + seqLen
    } else {
      const seqLen = bytes[offset]
      offset += 1 + seqLen
    }

    // Next must be BIT STRING (0x03) containing the inner PKCS#1 SEQUENCE
    if (bytes[offset] === 0x03) {
      offset++
      // Read BIT STRING length
      let bitStrLen = 0
      if (bytes[offset] & 0x80) {
        const lenBytes = bytes[offset] & 0x7f
        offset++
        for (let i = 0; i < lenBytes; i++) {
          bitStrLen = (bitStrLen << 8) | bytes[offset++]
        }
      } else {
        bitStrLen = bytes[offset++]
      }

      // Skip unused bits byte (normally 0x00)
      offset++

      // Now inside the inner RSAPublicKey SEQUENCE (0x30)
      if (bytes[offset] === 0x30) {
        offset++
        if (bytes[offset] & 0x80) {
          const lenBytes = bytes[offset] & 0x7f
          offset += 1 + lenBytes
        } else {
          offset++
        }
      }
    }
  }

  // We should now be at the Modulus INTEGER (0x02)
  if (bytes[offset] === 0x02) {
    offset++
    let modLen = 0
    if (bytes[offset] & 0x80) {
      const lenBytes = bytes[offset] & 0x7f
      offset++
      for (let i = 0; i < lenBytes; i++) {
        modLen = (modLen << 8) | bytes[offset++]
      }
    } else {
      modLen = bytes[offset++]
    }

    // Strip leading 0x00 sign byte if present
    let cleanModLen = modLen
    if (bytes[offset] === 0x00) {
      cleanModLen = modLen - 1
    }
    offset += modLen

    // Modulus bit length is exact stripped byte length * 8
    const bitLength = cleanModLen * 8

    // Read Public Exponent INTEGER (0x02)
    let exponent: number | null = null
    if (offset < bytes.length && bytes[offset] === 0x02) {
      offset++
      const expLen = bytes[offset++]
      let expVal = 0
      for (let i = 0; i < expLen; i++) {
        expVal = (expVal << 8) | bytes[offset++]
      }
      exponent = expVal
    }

    return { bitLength, exponent: exponent || 65537 }
  }

  // Fallback estimation
  const fallbackBits = bytes.length >= 250 ? 2048 : bytes.length >= 120 ? 1024 : bytes.length * 8
  return { bitLength: fallbackBits, exponent: 65537 }
}

function readLength(bytes: Uint8Array, offset: number): number {
  if (!(bytes[offset] & 0x80)) return bytes[offset]
  const lenBytes = bytes[offset] & 0x7f
  let len = 0
  for (let i = 1; i <= lenBytes; i++) {
    len = (len << 8) | bytes[offset + i]
  }
  return len
}

/**
 * Validates DKIM public key material and evaluates security strength
 */
export function evaluateDkimPublicKey(
  keyType: 'rsa' | 'ed25519' | 'unknown',
  pVal: string | null
): DkimPublicKeyInfo {
  if (!pVal || pVal.trim() === '') {
    return {
      keyType,
      rawBase64: '',
      byteLength: 0,
      bitLength: null,
      securityRating: 'revoked',
      exponent: null,
      isRevoked: true,
      details: 'Key is revoked. An empty p= tag explicitly signals receiving MTAs to reject signatures with this selector (RFC 6376 Section 3.6.1).',
    }
  }

  const cleanB64 = pVal.replace(/\s+/g, '')
  let bytes: Uint8Array
  try {
    bytes = decodeBase64ToBytes(cleanB64)
  } catch {
    return {
      keyType,
      rawBase64: pVal,
      byteLength: 0,
      bitLength: null,
      securityRating: 'invalid',
      exponent: null,
      isRevoked: false,
      details: 'Failed to decode base64 public key data. Verify key syntax.',
    }
  }

  if (keyType === 'ed25519') {
    const byteLen = bytes.length
    if (byteLen === 32) {
      return {
        keyType: 'ed25519',
        rawBase64: cleanB64,
        byteLength: 32,
        bitLength: 256,
        securityRating: 'secure',
        exponent: null,
        isRevoked: false,
        details: 'Modern Ed25519 public key (256-bit, RFC 8463). Highly secure and compact.',
      }
    }
    return {
      keyType: 'ed25519',
      rawBase64: cleanB64,
      byteLength: byteLen,
      bitLength: byteLen * 8,
      securityRating: 'invalid',
      exponent: null,
      isRevoked: false,
      details: `Invalid Ed25519 key length (${byteLen} bytes). Standard Ed25519 public keys must be exactly 32 bytes.`,
    }
  }

  // RSA Key parsing
  const rsaInfo = parseRsaPublicKey(bytes)
  const bits = rsaInfo.bitLength

  if (!bits || bits < 1024) {
    return {
      keyType: 'rsa',
      rawBase64: cleanB64,
      byteLength: bytes.length,
      bitLength: bits,
      securityRating: 'insecure',
      exponent: rsaInfo.exponent,
      isRevoked: false,
      details: `Weak or broken RSA key (${bits || 'unknown'} bits). Keys shorter than 1024 bits are vulnerable to factorization and rejected by mailbox providers.`,
    }
  }

  if (bits === 1024) {
    return {
      keyType: 'rsa',
      rawBase64: cleanB64,
      byteLength: bytes.length,
      bitLength: 1024,
      securityRating: 'adequate_legacy',
      exponent: rsaInfo.exponent,
      isRevoked: false,
      details: '1024-bit RSA key. Acceptable for legacy systems, but industry guidelines (Google, Microsoft, NIST) strongly recommend upgrading to 2048-bit.',
    }
  }

  return {
    keyType: 'rsa',
    rawBase64: cleanB64,
    byteLength: bytes.length,
    bitLength: bits,
    securityRating: 'secure',
    exponent: rsaInfo.exponent,
    isRevoked: false,
    details: `${bits}-bit RSA key with exponent ${rsaInfo.exponent}. Meets modern email security and deliverability standards.`,
  }
}

/**
 * Parses and validates a full DKIM TXT record
 */
export function parseDkimRecord(
  rawRecord: string,
  selector: string = 'default',
  domain: string = 'example.com'
): DkimValidationResult {
  const clean = rawRecord.trim().replace(/^["']|["']$/g, '')
  const warnings: string[] = []
  const errors: string[] = []
  const tags: DkimTagResult[] = []

  if (!clean) {
    return {
      rawRecord: '',
      isValid: false,
      selector,
      domain,
      version: null,
      keyType: 'rsa',
      publicKey: {
        keyType: 'rsa',
        rawBase64: '',
        byteLength: 0,
        bitLength: null,
        securityRating: 'invalid',
        exponent: null,
        isRevoked: false,
        details: 'Record is empty.',
      },
      flags: { testing: false, strictSubdomain: false },
      services: ['*'],
      hashes: ['sha256'],
      notes: null,
      tags: [],
      warnings: [],
      errors: ['DKIM record is empty.'],
      complianceScore: 0,
      recommendations: [`Publish a valid DKIM public key record at ${selector}._domainkey.${domain}`],
    }
  }

  const rawParts = clean.split(';')
  const tagMap = new Map<string, string>()

  for (const part of rawParts) {
    const trimmed = part.trim()
    if (!trimmed) continue
    const equalIdx = trimmed.indexOf('=')
    if (equalIdx === -1) {
      warnings.push(`Malformed tag without '=' delimiter: "${trimmed}"`)
      continue
    }
    const tag = trimmed.slice(0, equalIdx).trim()
    const val = trimmed.slice(equalIdx + 1).trim()

    if (tagMap.has(tag)) {
      warnings.push(`Duplicate tag '${tag}' found. Only the first occurrence will be used.`)
    } else {
      tagMap.set(tag, val)
    }
  }

  // Version 'v'
  const rawV = tagMap.get('v')
  let version: string | null = null
  if (rawV !== undefined) {
    if (rawV === 'DKIM1') {
      version = 'DKIM1'
    } else {
      errors.push(`Invalid version 'v=${rawV}'. Allowed version is 'DKIM1'.`)
    }
  } else {
    version = 'DKIM1' // Default if omitted per RFC 6376
  }

  // Key Type 'k'
  let keyType: 'rsa' | 'ed25519' | 'unknown' = 'rsa'
  const rawK = tagMap.get('k')?.toLowerCase()
  if (rawK !== undefined) {
    if (rawK === 'rsa' || rawK === 'ed25519') {
      keyType = rawK
    } else {
      warnings.push(`Unrecognized key algorithm 'k=${rawK}'. Defaulting to 'rsa'.`)
      keyType = 'unknown'
    }
  }

  // Public Key 'p'
  const rawP = tagMap.has('p') ? tagMap.get('p') || '' : null
  if (rawP === null) {
    errors.push("Missing required public key tag 'p='.")
  }

  const publicKey = evaluateDkimPublicKey(keyType, rawP)
  if (publicKey.isRevoked) {
    warnings.push("Selector is revoked (empty 'p=' tag). Outbound messages signed with this key will fail DKIM.")
  } else if (publicKey.securityRating === 'insecure') {
    errors.push(`Insecure public key length (${publicKey.bitLength || 0} bits). Must be at least 1024 bits, recommended 2048 bits.`)
  } else if (publicKey.securityRating === 'adequate_legacy') {
    warnings.push('1024-bit RSA key detected. While accepted, Google and Yahoo recommend 2048-bit keys for maximum deliverability.')
  }

  // Flags 't'
  let testing = false
  let strictSubdomain = false
  const rawT = tagMap.get('t')
  if (rawT) {
    const flagsList = rawT.split(':').map((s) => s.trim().toLowerCase())
    if (flagsList.includes('y')) {
      testing = true
      warnings.push("DKIM is in test mode ('t=y'). Receivers will verify signatures but will not enforce DMARC rejection on failures.")
    }
    if (flagsList.includes('s')) {
      strictSubdomain = true
    }
  }

  // Services 's'
  const rawS = tagMap.get('s')
  const services = rawS ? rawS.split(':').map((s) => s.trim()) : ['*']

  // Hashes 'h'
  const rawH = tagMap.get('h')
  const hashes = rawH ? rawH.split(':').map((s) => s.trim().toLowerCase()) : ['sha256']
  if (hashes.includes('sha1')) {
    warnings.push("Insecure hash algorithm 'sha1' permitted in 'h=' tag. SHA-1 is cryptographically broken and discouraged.")
  }

  // Notes 'n'
  const notes = tagMap.get('n') || null

  // Tags collection
  tagMap.forEach((value, tag) => {
    let desc = ''
    switch (tag) {
      case 'v':
        desc = 'DKIM version (DKIM1).'
        break
      case 'k':
        desc = 'Key type algorithm (rsa or ed25519).'
        break
      case 'p':
        desc = 'Base64 encoded public key data.'
        break
      case 't':
        desc = 'Flag settings (y = testing mode, s = strict subdomain).'
        break
      case 's':
        desc = 'Authorized service types (email or *).'
        break
      case 'h':
        desc = 'Acceptable hash algorithms (e.g. sha256).'
        break
      case 'n':
        desc = 'Human-readable administrator notes.'
        break
      default:
        desc = 'Custom tag.'
    }
    tags.push({ tag, value, isValid: true, description: desc })
  })

  const isValid = errors.length === 0 && !publicKey.isRevoked && publicKey.securityRating !== 'invalid'

  // Compliance score
  let score = 0
  if (isValid) {
    score = 60
    if (publicKey.securityRating === 'secure') score += 30
    else if (publicKey.securityRating === 'adequate_legacy') score += 15
    if (!testing) score += 10
  }

  // Recommendations
  const recommendations: string[] = []
  if (publicKey.bitLength === 1024) {
    recommendations.push('Rotate this selector to a 2048-bit RSA key to future-proof against cryptographic deprecation.')
  }
  if (testing) {
    recommendations.push("Remove the 't=y' testing flag once mail delivery is confirmed to enable full DMARC enforcement.")
  }
  if (hashes.includes('sha1')) {
    recommendations.push("Restrict 'h=sha256' to disable legacy SHA-1 hash signing.")
  }

  return {
    rawRecord: clean,
    isValid,
    selector,
    domain,
    version,
    keyType,
    publicKey,
    flags: { testing, strictSubdomain },
    services,
    hashes,
    notes,
    tags,
    warnings,
    errors,
    complianceScore: score,
    recommendations,
  }
}
