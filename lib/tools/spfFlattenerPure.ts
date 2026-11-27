/**
 * Pure CIDR math, deduplication, chunking, and byte-budget calculations for SPF flattening.
 * Zero relative/external imports so it executes in browser and under plain Node type-stripping.
 */

export interface Ip4Subnet {
  raw: string
  ip: string
  prefix: number
  startInt: number
  endInt: number
}

export interface Ip6Subnet {
  raw: string
  ip: string
  prefix: number
  startBig: bigint
  endBig: bigint
}

export interface FlattenedSpfResult {
  record: string
  chunkedRecord: string
  byteLength: number
  isUnderUdpLimit: boolean
  lookupCount: number
  ip4Count: number
  ip6Count: number
  preservedTerms: string[]
  flattenedTerms: string[]
  warnings: string[]
}

// RFC 7208 Section 3.4 practical payload threshold
export const UDP_SAFE_BYTE_LIMIT = 450

export function ip4ToInt(ip: string): number {
  const parts = ip.split('.').map(Number)
  if (parts.length !== 4 || parts.some((p) => isNaN(p) || p < 0 || p > 255)) {
    throw new Error(`Invalid IPv4 address: ${ip}`)
  }
  return ((parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3]) >>> 0
}

export function intToIp4(intVal: number): string {
  const u = intVal >>> 0
  return [(u >>> 24) & 255, (u >>> 16) & 255, (u >>> 8) & 255, u & 255].join('.')
}

export function parseIp4Cidr(raw: string): Ip4Subnet | null {
  const clean = raw.trim().toLowerCase().replace(/^ip4:/, '')
  const slashIdx = clean.indexOf('/')
  const ip = slashIdx === -1 ? clean : clean.slice(0, slashIdx)
  const prefixStr = slashIdx === -1 ? '32' : clean.slice(slashIdx + 1)
  const prefix = Number(prefixStr)
  if (!Number.isInteger(prefix) || prefix < 0 || prefix > 32) return null
  try {
    const ipInt = ip4ToInt(ip)
    const mask = prefix === 0 ? 0 : (~0 << (32 - prefix)) >>> 0
    const startInt = (ipInt & mask) >>> 0
    const endInt = (startInt | ~mask) >>> 0
    return {
      raw: prefix === 32 ? ip : `${intToIp4(startInt)}/${prefix}`,
      ip: intToIp4(startInt),
      prefix,
      startInt,
      endInt,
    }
  } catch {
    return null
  }
}

export function deduplicateAndMergeIp4(ranges: string[]): string[] {
  const parsed = ranges.map(parseIp4Cidr).filter((r): r is Ip4Subnet => r !== null)
  if (parsed.length <= 1) return parsed.map((p) => p.raw)

  // Sort by startInt ascending, then prefix ascending (wider subnets first)
  parsed.sort((a, b) => {
    if (a.startInt !== b.startInt) return a.startInt < b.startInt ? -1 : 1
    return a.prefix - b.prefix
  })

  const merged: Ip4Subnet[] = []
  for (const item of parsed) {
    if (merged.length === 0) {
      merged.push(item)
      continue
    }
    const last = merged[merged.length - 1]
    // Subnet containment: if item is fully inside last, skip it
    if (item.startInt >= last.startInt && item.endInt <= last.endInt) {
      continue
    }
    merged.push(item)
  }

  return merged.map((m) => m.raw)
}

export function expandIp6(ip: string): string | null {
  const clean = ip.trim().toLowerCase().replace(/^ip6:/, '')
  if (!clean.includes(':')) return null
  try {
    const u = new URL(`http://[${clean}]/`)
    const bracketed = u.hostname.replace(/^\[/, '').replace(/\]$/, '')
    // Normalize into 8 4-hex groups
    const parts = bracketed.split(':')
    const doubleColon = clean.includes('::')
    let groups: string[] = []
    if (doubleColon) {
      const [head, tail] = clean.split('::')
      const headParts = head ? head.split(':') : []
      const tailParts = tail ? tail.split(':') : []
      const missing = 8 - (headParts.length + tailParts.length)
      groups = [...headParts, ...Array(missing).fill('0'), ...tailParts]
    } else {
      groups = parts
    }
    if (groups.length !== 8) return null
    return groups.map((g) => g.padStart(4, '0')).join(':')
  } catch {
    return null
  }
}

export function ip6ToBigInt(expandedIp: string): bigint {
  const hex = expandedIp.replace(/:/g, '')
  return BigInt(`0x${hex}`)
}

export function bigIntToIp6(big: bigint): string {
  const hex = big.toString(16).padStart(32, '0')
  const groups: string[] = []
  for (let i = 0; i < 32; i += 4) {
    groups.push(hex.slice(i, i + 4).replace(/^0+/, '') || '0')
  }
  return groups.join(':')
}

export function parseIp6Cidr(raw: string): Ip6Subnet | null {
  const clean = raw.trim().toLowerCase().replace(/^ip6:/, '')
  const slashIdx = clean.indexOf('/')
  const ip = slashIdx === -1 ? clean : clean.slice(0, slashIdx)
  const prefixStr = slashIdx === -1 ? '128' : clean.slice(slashIdx + 1)
  const prefix = Number(prefixStr)
  if (!Number.isInteger(prefix) || prefix < 0 || prefix > 128) return null
  const expanded = expandIp6(ip)
  if (!expanded) return null
  try {
    const ipBig = ip6ToBigInt(expanded)
    const totalBits = BigInt(128)
    const zero = BigInt(0)
    const one = BigInt(1)
    const mask =
      prefix === 0
        ? zero
        : ((one << totalBits) - one) ^ ((one << (totalBits - BigInt(prefix))) - one)
    const startBig = ipBig & mask
    const endBig = startBig | ((one << (totalBits - BigInt(prefix))) - one)
    return {
      raw: prefix === 128 ? ip : `${ip}/${prefix}`,
      ip,
      prefix,
      startBig,
      endBig,
    }
  } catch {
    return null
  }
}

export function deduplicateAndMergeIp6(ranges: string[]): string[] {
  const parsed = ranges.map(parseIp6Cidr).filter((r): r is Ip6Subnet => r !== null)
  if (parsed.length <= 1) return parsed.map((p) => p.raw)

  parsed.sort((a, b) => {
    if (a.startBig !== b.startBig) return a.startBig < b.startBig ? -1 : 1
    return a.prefix - b.prefix
  })

  const merged: Ip6Subnet[] = []
  for (const item of parsed) {
    if (merged.length === 0) {
      merged.push(item)
      continue
    }
    const last = merged[merged.length - 1]
    if (item.startBig >= last.startBig && item.endBig <= last.endBig) {
      continue
    }
    merged.push(item)
  }

  return merged.map((m) => m.raw)
}

export function splitIntoDnsChunks(record: string, maxChunkLength = 255): string {
  if (record.length <= maxChunkLength) {
    return `"${record}"`
  }
  const chunks: string[] = []
  let remaining = record
  while (remaining.length > 0) {
    if (remaining.length <= maxChunkLength) {
      chunks.push(remaining)
      break
    }
    // Attempt to split at a space boundary within the last 40 chars of chunk
    let splitIdx = remaining.lastIndexOf(' ', maxChunkLength)
    if (splitIdx === -1 || splitIdx < maxChunkLength - 40) {
      splitIdx = maxChunkLength
    }
    chunks.push(remaining.slice(0, splitIdx))
    remaining = remaining.slice(splitIdx).trimStart()
  }
  return chunks.map((c) => `"${c}"`).join(' ')
}

export interface AssembleOptions {
  ip4List: string[]
  ip6List: string[]
  preservedTerms: string[]
  allQualifier?: '-' | '~' | '?'
}

export function assembleFlattenedRecord(options: AssembleOptions): FlattenedSpfResult {
  const dedupedIp4 = deduplicateAndMergeIp4(options.ip4List)
  const dedupedIp6 = deduplicateAndMergeIp6(options.ip6List)
  const allQ = options.allQualifier || '~'

  const tokens = ['v=spf1']
  for (const ip4 of dedupedIp4) tokens.push(`ip4:${ip4}`)
  for (const ip6 of dedupedIp6) tokens.push(`ip6:${ip6}`)
  for (const term of options.preservedTerms) {
    if (term.trim() && term.trim() !== 'v=spf1' && !term.endsWith('all')) {
      tokens.push(term.trim())
    }
  }
  tokens.push(`${allQ}all`)

  const record = tokens.join(' ')
  const chunkedRecord = splitIntoDnsChunks(record)
  const byteLength = new TextEncoder().encode(record).length
  const isUnderUdpLimit = byteLength <= UDP_SAFE_BYTE_LIMIT

  // Calculate remaining DNS lookups from preserved terms
  const lookupMechanisms = new Set(['include', 'a', 'mx', 'ptr', 'exists', 'redirect'])
  let lookupCount = 0
  for (const t of options.preservedTerms) {
    const clean = t.toLowerCase().replace(/^[+\-~?]/, '').split(':')[0].split('=')[0]
    if (lookupMechanisms.has(clean)) lookupCount++
  }

  const warnings: string[] = []
  if (!isUnderUdpLimit) {
    warnings.push(
      `Record is ${byteLength} bytes, exceeding the RFC 7208 Section 3.4 recommendation of ~${UDP_SAFE_BYTE_LIMIT} bytes. Some legacy DNS resolvers without EDNS0 support may truncate or drop UDP answers.`
    )
  }
  if (lookupCount > 10) {
    warnings.push(`Record still has ${lookupCount} DNS lookups, which exceeds the RFC 7208 limit of 10.`)
  }

  return {
    record,
    chunkedRecord,
    byteLength,
    isUnderUdpLimit,
    lookupCount,
    ip4Count: dedupedIp4.length,
    ip6Count: dedupedIp6.length,
    preservedTerms: options.preservedTerms,
    flattenedTerms: [...dedupedIp4.map((i) => `ip4:${i}`), ...dedupedIp6.map((i) => `ip6:${i}`)],
    warnings,
  }
}
