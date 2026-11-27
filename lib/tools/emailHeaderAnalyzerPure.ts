/**
 * Pure RFC 5322 / 5321 / 8601 / 8617 Email Header Analyzer.
 * Zero relative or runtime-restricted imports so it executes both in the browser
 * and cleanly under Node type-stripping (`node --test`).
 */

export type AuthStatus = 'pass' | 'fail' | 'softfail' | 'neutral' | 'none' | 'temperror' | 'permerror' | 'bestguesspass' | 'unknown'

export interface ParsedHeaderLine {
  index: number
  name: string
  rawValue: string
  decodedValue: string
}

export interface ReceivedHop {
  hopNumber: number
  raw: string
  fromHost: string | null
  byHost: string | null
  ip: string | null
  isPublicIp: boolean
  protocol: string | null
  tlsEncrypted: boolean
  tlsDetail: string | null
  timestampIso: string | null
  timestampUtc: string | null
  delaySeconds: number | null
  clockSkew: boolean
  delayLabel: string
}

export interface AuthMethodResult {
  method: string
  status: AuthStatus
  rawStatus: string
  detail: string
  domain: string | null
  selector: string | null
  ip: string | null
  reason: string | null
}

export interface AuthResultsBlock {
  headerIndex: number
  isTopMost: boolean
  authservId: string
  methods: AuthMethodResult[]
  raw: string
}

export interface DkimSignatureInfo {
  domain: string | null
  selector: string | null
  algorithm: string | null
  headerFields: string | null
  raw: string
}

export interface ArcInstance {
  instance: number
  sealStatus: string | null
  sealDomain: string | null
  sealSelector: string | null
  amsDomain: string | null
  aarAuthservId: string | null
  aarSummary: string | null
}

export interface HeaderAlert {
  level: 'error' | 'warning' | 'info' | 'ok'
  code: string
  title: string
  detail: string
}

export interface HeaderAnalysisSummary {
  spfStatus: AuthStatus
  dkimStatus: AuthStatus
  dmarcStatus: AuthStatus
  arcStatus: AuthStatus
  authservId: string | null
  hopCount: number
  totalDelaySeconds: number | null
  totalDelayLabel: string
  hasClockSkew: boolean
  allExternalHopsTls: boolean | null
}

export interface HeaderAnalysisResult {
  summary: HeaderAnalysisSummary
  metadata: {
    fromRaw: string | null
    fromAddress: string | null
    fromDomain: string | null
    replyToRaw: string | null
    replyToAddress: string | null
    replyToDomain: string | null
    returnPathRaw: string | null
    returnPathAddress: string | null
    returnPathDomain: string | null
    toRaw: string | null
    subject: string | null
    dateRaw: string | null
    messageId: string | null
    listUnsubscribe: string | null
    listUnsubscribePost: string | null
    hasOneClickUnsubscribe: boolean
  }
  alerts: HeaderAlert[]
  hops: ReceivedHop[]
  authResults: AuthResultsBlock[]
  dkimSignatures: DkimSignatureInfo[]
  arcChain: ArcInstance[]
  headers: ParsedHeaderLine[]
}

const MAX_HEADER_CHARS = 512_000

function isPrivateOrReservedIpv4(ip: string): boolean {
  const m = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)
  if (!m) return true
  const parts = m.slice(1).map(Number)
  if (parts.some((n) => n < 0 || n > 255)) return true
  const [a, b, c] = parts
  if (a === 0 || a === 10 || a === 127) return true
  if (a === 169 && b === 254) return true
  if (a === 172 && b >= 16 && b <= 31) return true
  if (a === 192 && b === 168) return true
  if (a === 100 && b >= 64 && b <= 127) return true
  if (a >= 224) return true
  if (a === 192 && b === 0 && (c === 0 || c === 2)) return true
  if (a === 198 && (b === 18 || b === 19)) return true
  if (a === 198 && b === 51 && c === 100) return true
  if (a === 203 && b === 0 && c === 113) return true
  return false
}

function isPrivateOrReservedIp(ip: string): boolean {
  const clean = ip.trim().toLowerCase()
  if (!clean) return true
  if (!clean.includes(':')) return isPrivateOrReservedIpv4(clean)
  if (clean === '::' || clean === '::1') return true
  if (clean.startsWith('::ffff:')) {
    const v4 = clean.slice(7)
    return isPrivateOrReservedIpv4(v4)
  }
  if (clean.startsWith('fc') || clean.startsWith('fd')) return true
  if (clean.startsWith('fe8') || clean.startsWith('fe9') || clean.startsWith('fea') || clean.startsWith('feb')) return true
  if (clean.startsWith('ff')) return true
  if (clean.startsWith('2001:db8:') || clean.startsWith('2001:0db8:')) return true
  return false
}

function isValidIp(ip: string): boolean {
  if (!ip.includes(':')) {
    const m = ip.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)
    return !!m && m.slice(1).every((n) => Number(n) >= 0 && Number(n) <= 255)
  }
  if (!/^[0-9a-fA-F:]+(\.\d{1,3}){0,4}$/.test(ip) || !ip.includes(':')) return false
  try {
    new URL(`http://[${ip}]/`)
    return true
  } catch {
    return false
  }
}

export function decodeRfc2047(input: string): string {
  // Collapse whitespace between adjacent RFC 2047 encoded words first (RFC 2047 Sec 6.2).
  const merged = input.replace(/(\?=)[ \t]+(=\?)/g, '$1$2')
  return merged.replace(/=\?([A-Za-z0-9_-]+)\?([BbQq])\?([^?]*)\?=/g, (_full, charset: string, enc: string, payload: string) => {
    try {
      let bytes: Uint8Array
      if (enc.toUpperCase() === 'B') {
        const bin = typeof atob === 'function' ? atob(payload) : Buffer.from(payload, 'base64').toString('binary')
        bytes = new Uint8Array(bin.length)
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i)
      } else {
        const out: number[] = []
        const normalized = payload.replace(/_/g, ' ')
        for (let i = 0; i < normalized.length; i++) {
          if (normalized[i] === '=' && /^[0-9A-Fa-f]{2}$/.test(normalized.slice(i + 1, i + 3))) {
            out.push(parseInt(normalized.slice(i + 1, i + 3), 16))
            i += 2
          } else {
            out.push(normalized.charCodeAt(i))
          }
        }
        bytes = new Uint8Array(out)
      }
      const normCharset = charset.toLowerCase() === 'latin1' ? 'iso-8859-1' : charset.toLowerCase()
      return new TextDecoder(normCharset, { fatal: false }).decode(bytes)
    } catch {
      return _full
    }
  })
}

export function extractHeaderBlock(rawInput: string): string {
  const limited = rawInput.slice(0, MAX_HEADER_CHARS).replace(/^\uFEFF/, '')
  const lines = limited.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n')
  let start = 0
  while (start < lines.length && lines[start].trim() === '') start++
  const headerLines: string[] = []
  for (let i = start; i < lines.length; i++) {
    if (lines[i].trim() === '') break
    headerLines.push(lines[i])
  }
  return headerLines.join('\n')
}

export function parseRawHeaders(rawInput: string): ParsedHeaderLine[] {
  const block = extractHeaderBlock(rawInput)
  if (!block) return []
  const rawLines = block.split('\n')
  const unfolded: string[] = []
  for (const line of rawLines) {
    if (/^[ \t]/.test(line) && unfolded.length > 0) {
      unfolded[unfolded.length - 1] += ' ' + line.trim()
    } else if (line.includes(':')) {
      unfolded.push(line)
    }
  }
  return unfolded.map((line, index) => {
    const colonIdx = line.indexOf(':')
    const name = line.slice(0, colonIdx).trim()
    const rawValue = line.slice(colonIdx + 1).trim()
    return {
      index,
      name,
      rawValue,
      decodedValue: decodeRfc2047(rawValue),
    }
  })
}

function extractEmailAddress(raw: string | null): string | null {
  if (!raw) return null
  const bracketMatch = raw.match(/<([^<>\s]+@[^<>\s]+)>/)
  if (bracketMatch) return bracketMatch[1].trim().toLowerCase()
  const bareMatch = raw.match(/\b([A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})\b/)
  return bareMatch ? bareMatch[1].trim().toLowerCase() : null
}

function extractDomain(email: string | null): string | null {
  if (!email || !email.includes('@')) return null
  return email.slice(email.lastIndexOf('@') + 1).toLowerCase().replace(/\.$/, '')
}

function approximateOrgDomain(domain: string | null): string | null {
  if (!domain) return null
  const labels = domain.toLowerCase().split('.').filter(Boolean)
  if (labels.length <= 2) return labels.join('.')
  const twoPartTlds = new Set(['co.uk', 'org.uk', 'ac.uk', 'com.au', 'net.au', 'co.nz', 'co.jp', 'com.br', 'com.mx'])
  const tail2 = labels.slice(-2).join('.')
  if (twoPartTlds.has(tail2) && labels.length >= 3) {
    return labels.slice(-3).join('.')
  }
  return tail2
}

function splitTopLevelTokens(text: string, delimiter: string): string[] {
  const parts: string[] = []
  let current = ''
  let parenDepth = 0
  let inQuotes = false
  let escaped = false
  for (let i = 0; i < text.length; i++) {
    const ch = text[i]
    if (escaped) {
      current += ch
      escaped = false
      continue
    }
    if (ch === '\\' && inQuotes) {
      current += ch
      escaped = true
      continue
    }
    if (ch === '"') {
      inQuotes = !inQuotes
      current += ch
      continue
    }
    if (!inQuotes) {
      if (ch === '(') parenDepth++
      else if (ch === ')' && parenDepth > 0) parenDepth--
      else if (ch === delimiter && parenDepth === 0) {
        parts.push(current)
        current = ''
        continue
      }
    }
    current += ch
  }
  parts.push(current)
  return parts
}

function splitReceivedTimestamp(raw: string): { routePart: string; datePart: string | null } {
  let lastSemi = -1
  let parenDepth = 0
  let inQuotes = false
  for (let i = 0; i < raw.length; i++) {
    const ch = raw[i]
    if (ch === '"') inQuotes = !inQuotes
    else if (!inQuotes) {
      if (ch === '(') parenDepth++
      else if (ch === ')' && parenDepth > 0) parenDepth--
      else if (ch === ';' && parenDepth === 0) lastSemi = i
    }
  }
  if (lastSemi === -1) return { routePart: raw, datePart: null }
  return {
    routePart: raw.slice(0, lastSemi).trim(),
    datePart: raw.slice(lastSemi + 1).trim(),
  }
}

function parseEmailDate(raw: string | null): Date | null {
  if (!raw) return null
  // Remove trailing comment like "(UTC)" or "(PDT)" after timezone offset
  const cleaned = raw.replace(/\s*\([^)]*\)\s*$/, '').trim()
  const ms = Date.parse(cleaned)
  if (!Number.isFinite(ms)) return null
  return new Date(ms)
}

function formatDuration(seconds: number): string {
  const abs = Math.abs(Math.round(seconds))
  if (abs < 60) return `${abs}s`
  const mins = Math.floor(abs / 60)
  const remS = abs % 60
  if (mins < 60) return remS > 0 ? `${mins}m ${remS}s` : `${mins}m`
  const hrs = Math.floor(mins / 60)
  const remM = mins % 60
  return remM > 0 ? `${hrs}h ${remM}m` : `${hrs}h`
}

function extractIpFromRoute(route: string): string | null {
  const candidates: string[] = []
  const bracketed = route.match(/\[(?:IPv6:)?([^\]]+)\]/gi) || []
  for (const item of bracketed) {
    candidates.push(item.replace(/^\[(?:IPv6:)?/i, '').replace(/\]$/, '').trim())
  }
  const paren = route.match(/\((?:[^()]*?\s)?(?:\[)?(?:IPv6:)?([0-9a-fA-F:.]+)(?:\])?\)/g) || []
  for (const item of paren) {
    const m = item.match(/([0-9]{1,3}(?:\.[0-9]{1,3}){3}|[0-9a-fA-F:]*:[0-9a-fA-F:]+)/)
    if (m) candidates.push(m[1])
  }
  const validIps = candidates.filter((c) => isValidIp(c))
  if (validIps.length === 0) return null
  const publicFirst = validIps.find((c) => !isPrivateOrReservedIp(c))
  return publicFirst ?? validIps[0]
}

function parseReceivedHops(receivedHeaders: ParsedHeaderLine[]): ReceivedHop[] {
  // RFC 5321 trace headers are prepended top-down: reverse so Hop 1 is Origin.
  const chronological = [...receivedHeaders].reverse()
  const parsedDates: (Date | null)[] = []

  const draft = chronological.map((hdr, idx) => {
    const raw = hdr.rawValue
    const { routePart, datePart } = splitReceivedTimestamp(raw)
    const dt = parseEmailDate(datePart)
    parsedDates.push(dt)

    const fromMatch = routePart.match(/(?:^|\s)from\s+([^\s(]+(?:\s+\([^)]*\))?)/i)
    const byMatch = routePart.match(/(?:^|\s)by\s+([^\s(]+)/i)
    const withMatch = routePart.match(/(?:^|\s)with\s+([A-Za-z0-9_-]+)/i)

    const fromHost = fromMatch ? fromMatch[1].replace(/\s*\([^)]*\)$/, '').trim() : null
    const byHost = byMatch ? byMatch[1].trim() : null
    const protocol = withMatch ? withMatch[1].toUpperCase() : null

    const ip = extractIpFromRoute(routePart)
    const isPublicIp = !!ip && !isPrivateOrReservedIp(ip)

    const tlsMatch = raw.match(/(version=TLS[^\s)]+|TLSv[0-9.]+|cipher=[^\s)]+|SMTPS|ESMTPSA?)/i)
    const isInternalOnly = protocol === 'HTTP' || protocol === 'LOCAL' || protocol === 'INTERNAL' || (ip ? isPrivateOrReservedIp(ip) : false)
    const tlsEncrypted =
      (protocol ? protocol.includes('S') || protocol === 'HTTPS' : false) ||
      /TLSv|cipher=|STARTTLS/i.test(raw) ||
      isInternalOnly
    const tlsDetail = tlsMatch ? tlsMatch[1] : tlsEncrypted ? (protocol?.includes('S') ? protocol : null) : null

    return {
      hopNumber: idx + 1,
      raw,
      fromHost,
      byHost,
      ip,
      isPublicIp,
      protocol,
      tlsEncrypted,
      tlsDetail,
      timestampIso: dt ? dt.toISOString() : null,
      timestampUtc: dt ? dt.toUTCString().replace(' GMT', ' UTC') : datePart,
      delaySeconds: null as number | null,
      clockSkew: false,
      delayLabel: idx === 0 ? 'Origin hop' : 'Unknown',
    }
  })

  let prevMs: number | null = parsedDates[0] ? parsedDates[0].getTime() : null
  for (let i = 1; i < draft.length; i++) {
    const cur = parsedDates[i]
    if (cur && prevMs !== null) {
      const deltaSec = (cur.getTime() - prevMs) / 1000
      if (deltaSec < 0) {
        draft[i].clockSkew = true
        draft[i].delaySeconds = Math.round(deltaSec)
        draft[i].delayLabel = `Clock skew (-${formatDuration(deltaSec)})`
      } else {
        draft[i].delaySeconds = Math.round(deltaSec)
        draft[i].delayLabel = deltaSec === 0 ? '0s' : formatDuration(deltaSec)
      }
      prevMs = cur.getTime()
    } else if (cur) {
      prevMs = cur.getTime()
    }
  }

  return draft
}

function normalizeAuthStatus(raw: string | undefined): AuthStatus {
  const s = (raw ?? '').toLowerCase()
  if (s === 'pass' || s === 'fail' || s === 'softfail' || s === 'neutral' || s === 'none' || s === 'temperror' || s === 'permerror' || s === 'bestguesspass') {
    return s
  }
  return 'unknown'
}

function parseAuthResultsHeader(hdr: ParsedHeaderLine, isTopMost: boolean): AuthResultsBlock {
  const cleaned = hdr.decodedValue.replace(/^\s+/, '')
  const segments = splitTopLevelTokens(cleaned, ';').map((s) => s.trim()).filter(Boolean)
  const firstSegment = segments[0] ?? 'unknown'
  const authservId = firstSegment.replace(/\s*\([^)]*\)\s*/g, ' ').trim().split(/\s+/)[0] || 'unknown'
  const methodSegments = segments.slice(1)
  const methods: AuthMethodResult[] = []

  for (const seg of methodSegments) {
    const withoutComments = seg.replace(/\((?:[^()]|\([^)]*\))*\)/g, ' ').trim()
    const m = withoutComments.match(/^([a-zA-Z0-9_-]+)=([a-zA-Z0-9_-]+)(.*)$/)
    if (!m) continue
    const method = m[1].toLowerCase()
    const rawStatus = m[2].toLowerCase()
    const rest = m[3] ?? ''

    const domainMatch =
      rest.match(/header\.from=([^\s;]+)/i) ||
      rest.match(/header\.d=([^\s;]+)/i) ||
      rest.match(/smtp\.mailfrom=([^\s;]+)/i) ||
      rest.match(/smtp\.helo=([^\s;]+)/i)
    const domainRaw = domainMatch ? domainMatch[1].replace(/^[^@]*@/, '') : null
    const selectorMatch = rest.match(/header\.s=([^\s;]+)/i)
    const ipMatch = rest.match(/smtp\.remote-ip=([^\s;]+)/i)
    const reasonMatch = rest.match(/reason="([^"]*)"/i) || rest.match(/action=([^\s;]+)/i)

    methods.push({
      method,
      status: normalizeAuthStatus(rawStatus),
      rawStatus,
      detail: withoutComments,
      domain: domainRaw ? domainRaw.toLowerCase() : null,
      selector: selectorMatch ? selectorMatch[1] : null,
      ip: ipMatch ? ipMatch[1] : null,
      reason: reasonMatch ? reasonMatch[1] : null,
    })
  }

  return {
    headerIndex: hdr.index,
    isTopMost,
    authservId,
    methods,
    raw: hdr.rawValue,
  }
}

function parseTagPairs(raw: string): Record<string, string> {
  const out: Record<string, string> = {}
  for (const part of splitTopLevelTokens(raw, ';')) {
    const eq = part.indexOf('=')
    if (eq === -1) continue
    const key = part.slice(0, eq).trim().toLowerCase()
    const val = part.slice(eq + 1).trim()
    if (key) out[key] = val
  }
  return out
}

function parseArcChain(headers: ParsedHeaderLine[]): ArcInstance[] {
  const map = new Map<number, ArcInstance>()
  const ensure = (i: number): ArcInstance => {
    let entry = map.get(i)
    if (!entry) {
      entry = {
        instance: i,
        sealStatus: null,
        sealDomain: null,
        sealSelector: null,
        amsDomain: null,
        aarAuthservId: null,
        aarSummary: null,
      }
      map.set(i, entry)
    }
    return entry
  }

  for (const h of headers) {
    const lower = h.name.toLowerCase()
    if (lower === 'arc-seal') {
      const tags = parseTagPairs(h.rawValue)
      const i = Number(tags.i)
      if (!Number.isInteger(i) || i < 1) continue
      const row = ensure(i)
      row.sealStatus = tags.cv ?? null
      row.sealDomain = tags.d ?? null
      row.sealSelector = tags.s ?? null
    } else if (lower === 'arc-message-signature') {
      const tags = parseTagPairs(h.rawValue)
      const i = Number(tags.i)
      if (!Number.isInteger(i) || i < 1) continue
      const row = ensure(i)
      row.amsDomain = tags.d ?? null
    } else if (lower === 'arc-authentication-results') {
      const semi = h.rawValue.indexOf(';')
      if (semi === -1) continue
      const prefix = h.rawValue.slice(0, semi)
      const iMatch = prefix.match(/\bi=(\d+)/i)
      if (!iMatch) continue
      const i = Number(iMatch[1])
      const row = ensure(i)
      const afterI = prefix.replace(/\bi=\d+\s*;?\s*/i, '').trim()
      row.aarAuthservId = afterI || null
      row.aarSummary = h.rawValue.slice(semi + 1).trim()
    }
  }

  return Array.from(map.values()).sort((a, b) => a.instance - b.instance)
}

function parseDkimSignatures(headers: ParsedHeaderLine[]): DkimSignatureInfo[] {
  return headers
    .filter((h) => h.name.toLowerCase() === 'dkim-signature')
    .map((h) => {
      const tags = parseTagPairs(h.rawValue)
      return {
        domain: tags.d ? tags.d.toLowerCase().replace(/\.$/, '') : null,
        selector: tags.s ?? null,
        algorithm: tags.a ?? null,
        headerFields: tags.h ?? null,
        raw: h.rawValue,
      }
    })
}

function statusPriority(results: AuthMethodResult[]): AuthStatus {
  if (results.length === 0) return 'none'
  if (results.some((r) => r.status === 'pass')) return 'pass'
  return results[0].status
}

export function analyzeEmailHeaders(rawInput: string): HeaderAnalysisResult {
  const headers = parseRawHeaders(rawInput)
  const firstVal = (name: string): string | null => {
    const found = headers.find((h) => h.name.toLowerCase() === name.toLowerCase())
    return found ? found.decodedValue : null
  }

  const fromRaw = firstVal('From')
  const fromAddress = extractEmailAddress(fromRaw)
  const fromDomain = extractDomain(fromAddress)

  const replyToRaw = firstVal('Reply-To')
  const replyToAddress = extractEmailAddress(replyToRaw)
  const replyToDomain = extractDomain(replyToAddress)

  const returnPathRaw = firstVal('Return-Path')
  const returnPathAddress = extractEmailAddress(returnPathRaw)
  const returnPathDomain = extractDomain(returnPathAddress)

  const listUnsubscribe = firstVal('List-Unsubscribe')
  const listUnsubscribePost = firstVal('List-Unsubscribe-Post')
  const hasOneClickUnsubscribe = !!listUnsubscribePost && /List-Unsubscribe=One-Click/i.test(listUnsubscribePost)

  const receivedHeaders = headers.filter((h) => h.name.toLowerCase() === 'received')
  const hops = parseReceivedHops(receivedHeaders)

  const authHeaders = headers.filter((h) => h.name.toLowerCase() === 'authentication-results')
  const authResults = authHeaders.map((h, i) => parseAuthResultsHeader(h, i === 0))
  const dkimSignatures = parseDkimSignatures(headers)
  const arcChain = parseArcChain(headers)

  const primaryBlock = authResults[0]
  const spfMethods = primaryBlock ? primaryBlock.methods.filter((m) => m.method === 'spf') : []
  const dkimMethods = primaryBlock ? primaryBlock.methods.filter((m) => m.method === 'dkim') : []
  const dmarcMethods = primaryBlock ? primaryBlock.methods.filter((m) => m.method === 'dmarc') : []
  const arcMethods = primaryBlock ? primaryBlock.methods.filter((m) => m.method === 'arc') : []

  const spfStatus = statusPriority(spfMethods)
  const dkimStatus = statusPriority(dkimMethods)
  const dmarcStatus = statusPriority(dmarcMethods)
  const arcStatus = arcMethods.length > 0 ? statusPriority(arcMethods) : arcChain.length > 0 ? 'unknown' : 'none'

  // Compute total transit time from earliest valid hop timestamp to final hop timestamp.
  const validDates = hops.map((h) => (h.timestampIso ? Date.parse(h.timestampIso) : NaN)).filter(Number.isFinite)
  let totalDelaySeconds: number | null = null
  let totalDelayLabel = 'Unknown'
  if (validDates.length >= 2) {
    const rawDelta = Math.round((validDates[validDates.length - 1] - validDates[0]) / 1000)
    totalDelaySeconds = Math.max(0, rawDelta)
    totalDelayLabel = rawDelta < 0 ? 'Clock skew across hops' : rawDelta === 0 ? '0s' : formatDuration(rawDelta)
  }

  const externalHops = hops.filter((h) => h.isPublicIp || (!h.ip && h.protocol && h.protocol !== 'INTERNAL' && h.protocol !== 'LOCAL'))
  const allExternalHopsTls = externalHops.length > 0 ? externalHops.every((h) => h.tlsEncrypted) : null

  const alerts: HeaderAlert[] = []
  if (primaryBlock) {
    alerts.push({
      level: 'info',
      code: 'authserv-trust',
      title: `Verify trusted authserv-id: ${primaryBlock.authservId}`,
      detail: 'Under RFC 8601, external senders can inject fake Authentication-Results headers. Only trust the top header stamped by your own receiving mail server.',
    })
  } else {
    alerts.push({
      level: 'warning',
      code: 'no-auth-results',
      title: 'No Authentication-Results header found',
      detail: 'Make sure you pasted raw source headers from your receiving mailbox (for example Gmail Show original) rather than forwarded body text.',
    })
  }

  const fromOrg = approximateOrgDomain(fromDomain)
  const replyOrg = approximateOrgDomain(replyToDomain)
  const rpOrg = approximateOrgDomain(returnPathDomain)

  if (fromDomain && replyToDomain && fromOrg !== replyOrg) {
    alerts.push({
      level: 'warning',
      code: 'reply-to-mismatch',
      title: `From (${fromDomain}) and Reply-To (${replyToDomain}) domains differ`,
      detail: 'Replies go to a different organizational domain than the displayed sender. Confirm this is expected (for example a CRM reply domain) before trusting.',
    })
  }

  if (fromDomain && returnPathDomain && fromOrg !== rpOrg && spfStatus === 'pass') {
    alerts.push({
      level: 'info',
      code: 'spf-unaligned',
      title: `SPF passes on bounce domain (${returnPathDomain}), unaligned with From (${fromDomain})`,
      detail: 'Third-party ESPs often pass SPF on their own Return-Path domain. DMARC passes via aligned DKIM when Return-Path uses a different domain.',
    })
  }

  if (dmarcStatus === 'fail') {
    alerts.push({
      level: 'error',
      code: 'dmarc-fail',
      title: 'DMARC failed alignment or authentication',
      detail: 'Neither SPF nor DKIM passed in alignment with the visible From header domain.',
    })
  }

  if (allExternalHopsTls === false) {
    alerts.push({
      level: 'warning',
      code: 'unencrypted-hop',
      title: 'At least one external relay transferred mail without TLS',
      detail: 'Receiving hops lacking ESMTPS or TLS cipher details indicate unencrypted SMTP transit on part of the path.',
    })
  }

  if (listUnsubscribe && !hasOneClickUnsubscribe) {
    alerts.push({
      level: 'info',
      code: 'missing-one-click',
      title: 'List-Unsubscribe found without RFC 8058 One-Click header',
      detail: 'Google and Yahoo bulk sender guidelines expect List-Unsubscribe-Post: List-Unsubscribe=One-Click on promotional and bulk campaigns.',
    })
  }

  if (arcChain.length > 0 && arcMethods.length === 0) {
    alerts.push({
      level: 'info',
      code: 'arc-self-asserted',
      title: 'ARC headers present without top-level arc= evaluation',
      detail: 'ARC-Seal tags inside message headers are self-asserted until your border MTA records an arc=pass or arc=fail outcome.',
    })
  }

  return {
    summary: {
      spfStatus,
      dkimStatus,
      dmarcStatus,
      arcStatus,
      authservId: primaryBlock ? primaryBlock.authservId : null,
      hopCount: hops.length,
      totalDelaySeconds,
      totalDelayLabel,
      hasClockSkew: hops.some((h) => h.clockSkew),
      allExternalHopsTls,
    },
    metadata: {
      fromRaw,
      fromAddress,
      fromDomain,
      replyToRaw,
      replyToAddress,
      replyToDomain,
      returnPathRaw,
      returnPathAddress,
      returnPathDomain,
      toRaw: firstVal('To'),
      subject: firstVal('Subject'),
      dateRaw: firstVal('Date'),
      messageId: firstVal('Message-ID'),
      listUnsubscribe,
      listUnsubscribePost,
      hasOneClickUnsubscribe,
    },
    alerts,
    hops,
    authResults,
    dkimSignatures,
    arcChain,
    headers,
  }
}
