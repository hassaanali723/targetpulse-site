/**
 * BIMI Record Generator & SVG Tiny PS Checker Core Logic
 * Pure TypeScript, browser & Node.js test compatible with zero dependencies.
 */

export interface BimiRecordInput {
  domain: string
  selector?: string
  logoUrl?: string
  certificateUrl?: string
  leaveLogoEmpty?: boolean
}

export interface BimiRecordResult {
  hostFull: string
  hostShort: string
  recordType: 'TXT'
  recordValue: string
  zoneFileLine: string
  isNonDefaultSelector: boolean
  selectorWarning?: string
}

export function validateBimiUrl(url: string, extension: 'svg' | 'pem'): { valid: boolean; error?: string } {
  if (!url) return { valid: false, error: 'URL is required' }
  const trimmed = url.trim()
  if (!trimmed.startsWith('https://')) {
    return { valid: false, error: 'URL must start with https://' }
  }
  // Check extension before query or fragment
  const urlWithoutParams = trimmed.split('?')[0].split('#')[0].toLowerCase()
  if (!urlWithoutParams.endsWith(`.${extension}`)) {
    return { valid: false, error: `URL must end with .${extension}` }
  }
  try {
    new URL(trimmed)
    return { valid: true }
  } catch {
    return { valid: false, error: 'Invalid URL format' }
  }
}

export function generateBimiRecord(input: BimiRecordInput): BimiRecordResult {
  const domain = input.domain.trim().toLowerCase().replace(/^https?:\/\//i, '').replace(/^@+/, '')
  const selector = (input.selector || 'default').trim().toLowerCase() || 'default'
  const isNonDefaultSelector = selector !== 'default'

  const hostFull = `${selector}._bimi.${domain}`
  const hostShort = `${selector}._bimi`

  let value = 'v=BIMI1;'

  if (input.certificateUrl && input.certificateUrl.trim()) {
    if (input.leaveLogoEmpty) {
      value += ` l=; a=${input.certificateUrl.trim()}`
    } else if (input.logoUrl && input.logoUrl.trim()) {
      value += ` l=${input.logoUrl.trim()}; a=${input.certificateUrl.trim()}`
    } else {
      value += ` l=; a=${input.certificateUrl.trim()}`
    }
  } else if (input.logoUrl && input.logoUrl.trim()) {
    value += ` l=${input.logoUrl.trim()}`
  }

  const zoneFileLine = `${hostFull}. IN TXT "${value}"`

  return {
    hostFull,
    hostShort,
    recordType: 'TXT',
    recordValue: value,
    zoneFileLine,
    isNonDefaultSelector,
    selectorWarning: isNonDefaultSelector
      ? 'Non-default selectors require a BIMI-Selector header on outgoing mail.'
      : undefined,
  }
}

export interface SvgCheckItem {
  id: string
  title: string
  passed: boolean
  isWarning?: boolean
  message: string
}

export interface SvgCheckResult {
  passedAll: boolean
  checks: SvgCheckItem[]
  byteSize: number
  previewBlobUrl?: string
}

/**
 * Checks an SVG string against BIMI SVG Tiny PS requirements:
 * 1. root element is svg with baseProfile tiny-ps
 * 2. version 1.2
 * 3. viewBox is square
 * 4. no x or y attributes on the root svg
 * 5. has a title element
 * 6. file size 32 KB or less
 * 7. no script elements
 * 8. no embedded raster images (image elements)
 * 9. no foreignObject
 * 10. no animation elements (animate, set, animateTransform, animateMotion)
 * 11. no references to external files (href or xlink:href pointing to http, https or another file)
 */
export function checkBimiSvg(svgText: string, providedByteSize?: number): SvgCheckResult {
  const byteSize =
    typeof providedByteSize === 'number'
      ? providedByteSize
      : new TextEncoder().encode(svgText).length

  const checks: SvgCheckItem[] = []

  // Check 1: Root element is svg with baseProfile tiny-ps
  const rootTagMatch = svgText.match(/<svg\b([^>]*)>/i)
  const isSvgRoot = !!rootTagMatch
  const baseProfileMatch = rootTagMatch && rootTagMatch[1].match(/baseProfile\s*=\s*["']([^"']+)["']/i)
  const isTinyPs = baseProfileMatch && baseProfileMatch[1].toLowerCase() === 'tiny-ps'

  checks.push({
    id: 'baseProfile',
    title: 'Root element is svg with baseProfile tiny-ps',
    passed: !!(isSvgRoot && isTinyPs),
    message: isSvgRoot && isTinyPs
      ? 'Root element is <svg> with baseProfile="tiny-ps".'
      : 'The root <svg> element must declare baseProfile="tiny-ps".',
  })

  // Check 2: version 1.2
  const versionMatch = rootTagMatch && rootTagMatch[1].match(/version\s*=\s*["']([^"']+)["']/i)
  const isVersion12 = versionMatch && versionMatch[1] === '1.2'

  checks.push({
    id: 'version',
    title: 'Version 1.2',
    passed: !!isVersion12,
    message: isVersion12
      ? 'SVG version attribute is set to 1.2.'
      : 'The root <svg> element must declare version="1.2".',
  })

  // Check 3: viewBox is square
  let isSquare = false
  if (rootTagMatch) {
    const viewBoxMatch = rootTagMatch[1].match(/viewBox\s*=\s*["']([^"']+)["']/i)
    if (viewBoxMatch) {
      const parts = viewBoxMatch[1].trim().split(/[\s,]+/).map(Number)
      if (parts.length === 4) {
        const [, , w, h] = parts
        if (w > 0 && h > 0 && Math.abs(w - h) < 0.001) {
          isSquare = true
        }
      }
    }
  }

  checks.push({
    id: 'viewBox',
    title: 'viewBox is square',
    passed: isSquare,
    message: isSquare
      ? 'The viewBox has identical width and height.'
      : 'The SVG viewBox must have equal width and height (1:1 aspect ratio).',
  })

  // Check 4: no x or y attributes on the root svg
  const hasRootXY = rootTagMatch && /\b(x|y)\s*=\s*["'][^"']*["']/i.test(rootTagMatch[1])

  checks.push({
    id: 'no-root-xy',
    title: 'No x or y attributes on root svg',
    passed: !hasRootXY,
    message: !hasRootXY
      ? 'No x or y attributes on root <svg> element.'
      : 'The root <svg> tag must not include x or y coordinate attributes.',
  })

  // Check 5: has a title element
  const titleMatch = svgText.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)
  const hasTitle = !!(titleMatch && titleMatch[1].trim().length > 0)

  checks.push({
    id: 'title',
    title: 'Has a title element',
    passed: hasTitle,
    message: hasTitle
      ? 'Contains a non-empty <title> element with your brand name.'
      : 'A <title> element describing your company or brand name is required.',
  })

  // Check 6: file size 32 KB or less (32 * 1024 = 32768 bytes)
  const isUnder32Kb = byteSize <= 32 * 1024

  checks.push({
    id: 'filesize',
    title: 'File size 32 KB or less',
    passed: isUnder32Kb,
    message: isUnder32Kb
      ? `File size is ${(byteSize / 1024).toFixed(1)} KB (under 32 KB limit).`
      : `File size is ${(byteSize / 1024).toFixed(1)} KB, which exceeds the 32 KB limit.`,
  })

  // Check 7: no script elements
  const hasScript = /<\/?script\b/i.test(svgText)

  checks.push({
    id: 'no-script',
    title: 'No script elements',
    passed: !hasScript,
    message: !hasScript
      ? 'No executable <script> elements found.'
      : 'Scripts are forbidden in Tiny PS for mailbox security.',
  })

  // Check 8: no embedded raster images (image elements)
  const hasImage = /<image\b/i.test(svgText)

  checks.push({
    id: 'no-image',
    title: 'No embedded raster images (image elements)',
    passed: !hasImage,
    message: !hasImage
      ? 'No embedded raster <image> elements found.'
      : 'Tiny PS requires pure vector artwork; raster <image> tags are not allowed.',
  })

  // Check 9: no foreignObject
  const hasForeignObject = /<foreignObject\b/i.test(svgText)

  checks.push({
    id: 'no-foreignObject',
    title: 'No foreignObject',
    passed: !hasForeignObject,
    message: !hasForeignObject
      ? 'No <foreignObject> elements found.'
      : '<foreignObject> elements are not permitted in Tiny PS.',
  })

  // Check 10: no animation elements (animate, set, animateTransform, animateMotion)
  const hasAnimation = /<(animate|set|animateTransform|animateMotion)\b/i.test(svgText)

  checks.push({
    id: 'no-animation',
    title: 'No animation elements',
    passed: !hasAnimation,
    message: !hasAnimation
      ? 'No SVG animation elements found.'
      : 'Animated SVG elements (<animate>, <set>, etc.) are prohibited.',
  })

  // Check 11: no references to external files (href or xlink:href pointing to http, https or another file)
  let hasExternalReference = false
  const hrefRegex = /\b(?:xlink:href|href)\s*=\s*["']([^"']+)["']/gi
  let match: RegExpExecArray | null
  while ((match = hrefRegex.exec(svgText)) !== null) {
    const val = match[1].trim()
    // Local fragments (#id) are fine; http, https, //, or file paths without # are external
    if (/^(?:https?:|\/\/|[a-z0-9_.-]+\.(?:png|jpe?g|svg|webp|gif|css|js))/i.test(val)) {
      hasExternalReference = true
      break
    }
  }

  checks.push({
    id: 'no-external-ref',
    title: 'No references to external files',
    passed: !hasExternalReference,
    message: !hasExternalReference
      ? 'No outside URL or external file references.'
      : 'External file references or remote links are not permitted.',
  })

  // Check 12: text elements (warning only)
  const hasTextElement = /<text\b/i.test(svgText)
  checks.push({
    id: 'text-elements',
    title: 'Text elements',
    passed: !hasTextElement,
    isWarning: hasTextElement,
    message: hasTextElement
      ? 'Text in a logo may not render the same everywhere. Convert text to outlines in your design tool.'
      : 'No raw <text> elements found.',
  })

  const passedAll = checks.every((c) => c.passed || c.isWarning)

  return {
    passedAll,
    checks,
    byteSize,
  }
}
