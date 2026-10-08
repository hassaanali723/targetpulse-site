import test from 'node:test'
import assert from 'node:assert/strict'
import {
  validateBimiUrl,
  generateBimiRecord,
  checkBimiSvg,
} from '../lib/tools/bimiGeneratorCore.ts'

test('BIMI Generator - URL Validation', () => {
  // SVG URL
  assert.equal(validateBimiUrl('https://example.com/logo.svg', 'svg').valid, true)
  assert.equal(validateBimiUrl('http://example.com/logo.svg', 'svg').valid, false)
  assert.equal(validateBimiUrl('https://example.com/logo.png', 'svg').valid, false)

  // PEM URL
  assert.equal(validateBimiUrl('https://example.com/cert.pem', 'pem').valid, true)
  assert.equal(validateBimiUrl('http://example.com/cert.pem', 'pem').valid, false)
  assert.equal(validateBimiUrl('https://example.com/cert.crt', 'pem').valid, false)
})

test('BIMI Generator - Record Output in Both Forms', () => {
  // Form 1: Standard with logo only
  const rec1 = generateBimiRecord({
    domain: 'example.com',
    selector: 'default',
    logoUrl: 'https://example.com/bimi/logo.svg',
  })
  assert.equal(rec1.hostFull, 'default._bimi.example.com')
  assert.equal(rec1.hostShort, 'default._bimi')
  assert.equal(rec1.recordValue, 'v=BIMI1; l=https://example.com/bimi/logo.svg')
  assert.equal(rec1.zoneFileLine, 'default._bimi.example.com. IN TXT "v=BIMI1; l=https://example.com/bimi/logo.svg"')
  assert.equal(rec1.isNonDefaultSelector, false)

  // Form 2: With certificate and l= populated
  const rec2 = generateBimiRecord({
    domain: 'example.com',
    selector: 'default',
    logoUrl: 'https://example.com/bimi/logo.svg',
    certificateUrl: 'https://example.com/bimi/cert.pem',
    leaveLogoEmpty: false,
  })
  assert.equal(rec2.recordValue, 'v=BIMI1; l=https://example.com/bimi/logo.svg; a=https://example.com/bimi/cert.pem')

  // Form 3: With certificate and leaveLogoEmpty toggled ON (l= left empty)
  const rec3 = generateBimiRecord({
    domain: 'example.com',
    selector: 'default',
    logoUrl: 'https://example.com/bimi/logo.svg',
    certificateUrl: 'https://example.com/bimi/cert.pem',
    leaveLogoEmpty: true,
  })
  assert.equal(rec3.recordValue, 'v=BIMI1; l=; a=https://example.com/bimi/cert.pem')

  // Non-default selector warning
  const rec4 = generateBimiRecord({
    domain: 'example.com',
    selector: 'promo',
    logoUrl: 'https://example.com/bimi/logo.svg',
  })
  assert.equal(rec4.hostFull, 'promo._bimi.example.com')
  assert.equal(rec4.isNonDefaultSelector, true)
  assert.ok(rec4.selectorWarning?.includes('BIMI-Selector header'))
})

test('BIMI SVG Checker - Valid Tiny PS File Fixture', () => {
  const validSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 100 100">
    <title>Acme Corp Logo</title>
    <circle cx="50" cy="50" r="40" fill="#4f46e5"/>
  </svg>`

  const res = checkBimiSvg(validSvg)
  assert.equal(res.passedAll, true, 'Valid SVG must pass all checks')
  assert.equal(res.checks.length, 12)
  assert.ok(res.checks.every((c) => c.passed || c.isWarning))
})

test('BIMI SVG Checker - Missing baseProfile Fixture', () => {
  const badSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 100 100">
    <title>Acme Corp Logo</title>
    <circle cx="50" cy="50" r="40" fill="#4f46e5"/>
  </svg>`

  const res = checkBimiSvg(badSvg)
  assert.equal(res.passedAll, false)
  const baseProfileCheck = res.checks.find((c) => c.id === 'baseProfile')
  assert.equal(baseProfileCheck?.passed, false)
})

test('BIMI SVG Checker - Non-Square viewBox Fixture', () => {
  const badSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 200 100">
    <title>Acme Corp Logo</title>
    <circle cx="50" cy="50" r="40" fill="#4f46e5"/>
  </svg>`

  const res = checkBimiSvg(badSvg)
  assert.equal(res.passedAll, false)
  const viewBoxCheck = res.checks.find((c) => c.id === 'viewBox')
  assert.equal(viewBoxCheck?.passed, false)
})

test('BIMI SVG Checker - Containing Script Fixture', () => {
  const badSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 100 100">
    <title>Acme Corp Logo</title>
    <script>alert('XSS')</script>
    <circle cx="50" cy="50" r="40" fill="#4f46e5"/>
  </svg>`

  const res = checkBimiSvg(badSvg)
  assert.equal(res.passedAll, false)
  const scriptCheck = res.checks.find((c) => c.id === 'no-script')
  assert.equal(scriptCheck?.passed, false)
})

test('BIMI SVG Checker - Containing Image Element Fixture', () => {
  const badSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 100 100">
    <title>Acme Corp Logo</title>
    <image href="logo.png" width="100" height="100"/>
  </svg>`

  const res = checkBimiSvg(badSvg)
  assert.equal(res.passedAll, false)
  const imageCheck = res.checks.find((c) => c.id === 'no-image')
  assert.equal(imageCheck?.passed, false)
})

test('BIMI SVG Checker - Larger than 32 KB Fixture', () => {
  // Padding SVG to exceed 32 KB (32768 bytes)
  const hugePadding = '<!-- ' + 'A'.repeat(35000) + ' -->\n'
  const hugeSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 100 100">
    <title>Acme Corp Logo</title>
    ${hugePadding}
    <circle cx="50" cy="50" r="40" fill="#4f46e5"/>
  </svg>`

  const res = checkBimiSvg(hugeSvg)
  assert.equal(res.passedAll, false)
  const sizeCheck = res.checks.find((c) => c.id === 'filesize')
  assert.equal(sizeCheck?.passed, false)
  assert.ok(res.byteSize > 32768)
})

test('BIMI SVG Checker - Text Element Warning Fixture', () => {
  const textSvg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 100 100">
    <title>Acme Corp Logo</title>
    <text x="10" y="50">Acme</text>
  </svg>`

  const res = checkBimiSvg(textSvg)
  assert.equal(res.passedAll, true, 'Warning alone does not fail the file')
  const textCheck = res.checks.find((c) => c.id === 'text-elements')
  assert.ok(textCheck)
  assert.equal(textCheck.isWarning, true)
  assert.equal(textCheck.passed, false)
  assert.equal(
    textCheck.message,
    'Text in a logo may not render the same everywhere. Convert text to outlines in your design tool.'
  )
})
