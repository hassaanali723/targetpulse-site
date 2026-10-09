import test from 'node:test'
import assert from 'node:assert/strict'
import {
  generateSignatureHtml,
  generatePlainTextSignature,
  validateImageUrl,
  formatTelLink,
} from '../lib/tools/emailSignatureCore.ts'

const TEMPLATES = ['simple-text', 'logo-left', 'photo-divider', 'compact']

const FULL_DATA = {
  fullName: 'Jane Doe',
  jobTitle: 'Account Manager',
  company: 'Example Ltd',
  department: 'Client Success',
  pronouns: 'she/her',
  phone: '+44 20 7946 0000',
  mobile: '+44 7700 900077',
  email: 'jane@example.com',
  website: 'https://example.com',
  address: '100 Business Way, London',
  logoUrl: 'https://example.com/logo.png',
  photoUrl: 'https://example.com/photo.jpg',
  socialLinks: {
    linkedin: 'https://linkedin.com/in/janedoe',
    x: 'https://x.com/janedoe',
    facebook: 'https://facebook.com/janedoe',
  },
  useSocialIcons: false,
  template: 'simple-text',
  font: 'Arial',
  accentColor: '#4f46e5',
  ctaText: 'Book a 15-minute call',
  ctaUrl: 'https://cal.com/janedoe',
  disclaimer: 'Confidentiality Notice: This message contains confidential information.',
  showMadeWithGiggal: false,
}

const MINIMAL_DATA = {
  fullName: 'Jane Doe',
  template: 'simple-text',
  font: 'Arial',
  accentColor: '#4f46e5',
}

test('Email Signature Generator - Every Template Renders With All Fields', () => {
  for (const t of TEMPLATES) {
    const data = { ...FULL_DATA, template: t }
    const html = generateSignatureHtml(data)
    assert.ok(html.includes('Jane Doe'), `${t} must include full name`)
    assert.ok(html.includes('Account Manager'), `${t} must include job title`)
    assert.ok(html.includes('Example Ltd'), `${t} must include company`)
    assert.ok(html.includes('+44 20 7946 0000'), `${t} must include phone`)
    assert.ok(html.includes('jane@example.com'), `${t} must include email`)
    assert.ok(html.includes('Book a 15-minute call'), `${t} must include CTA`)
    assert.ok(html.includes('Confidentiality Notice'), `${t} must include disclaimer`)
    assert.ok(html.startsWith('<table'), `${t} must be table-based`)
    assert.ok(html.length < 10000, `${t} HTML size must be well under 10k Gmail limit`)
  }
})

test('Email Signature Generator - Every Template Renders With Minimal Fields', () => {
  for (const t of TEMPLATES) {
    const data = { ...MINIMAL_DATA, template: t }
    const html = generateSignatureHtml(data)
    assert.ok(html.includes('Jane Doe'), `${t} must include full name`)
    // Must NOT contain placeholders or empty separators
    assert.ok(!html.includes('undefined'), `${t} must not have undefined`)
    assert.ok(!html.includes('Phone:'), `${t} must not render phone row`)
    assert.ok(!html.includes('Email:'), `${t} must not render email row`)
    assert.ok(!html.includes('Web:'), `${t} must not render web row`)
    assert.ok(!html.includes('Confidentiality Notice'), `${t} must not render disclaimer`)
    assert.ok(html.length < 1500, `${t} minimal HTML must be compact`)
  }
})

test('Email Signature Generator - HTML Character Counter Accuracy', () => {
  const html = generateSignatureHtml(FULL_DATA)
  assert.equal(typeof html.length, 'number')
  assert.ok(html.length > 500 && html.length < 5000)
})

test('Email Signature Generator - Plain Text Output', () => {
  const plainFull = generatePlainTextSignature(FULL_DATA)
  assert.ok(plainFull.includes('Jane Doe (she/her)'))
  assert.ok(plainFull.includes('Account Manager'))
  assert.ok(plainFull.includes('Phone: +44 20 7946 0000'))
  assert.ok(plainFull.includes('jane@example.com'))
  assert.ok(plainFull.includes('Book a 15-minute call'))

  const plainMin = generatePlainTextSignature(MINIMAL_DATA)
  assert.equal(plainMin, 'Jane Doe\n---')
})

test('Email Signature Generator - Image URL Validation', () => {
  assert.equal(validateImageUrl('https://example.com/logo.png').valid, true)
  assert.equal(validateImageUrl('http://example.com/logo.png').valid, false)
  assert.equal(validateImageUrl('').valid, true)
})

test('Email Signature Generator - formatTelLink builds clean tel: links', () => {
  assert.equal(formatTelLink('+44 20 7946 0000'), 'tel:+442079460000')
  assert.equal(formatTelLink('(555) 010-4477'), 'tel:5550104477')
  assert.equal(formatTelLink('+1 (555) 010-4477'), 'tel:+15550104477')
  assert.equal(formatTelLink('tel:+44 20 7946 0000'), 'tel:+442079460000')
  assert.equal(formatTelLink(''), '')
})

test('Email Signature Generator - Every Template Builds tel: Links and Preserves Visible Text', () => {
  for (const t of TEMPLATES) {
    const data = {
      ...FULL_DATA,
      template: t,
      phone: '+44 20 7946 0000',
      mobile: '+44 7700 900077',
    }
    const html = generateSignatureHtml(data)
    assert.ok(html.includes('href="tel:+442079460000"'), `${t} must have phone tel link with no spaces`)
    assert.ok(html.includes('>+44 20 7946 0000</a>'), `${t} must preserve visible phone text`)
    assert.ok(html.includes('href="tel:+447700900077"'), `${t} must have mobile tel link with no spaces`)
    assert.ok(html.includes('>+44 7700 900077</a>'), `${t} must preserve visible mobile text`)

    const dataUs = {
      ...FULL_DATA,
      template: t,
      phone: '(555) 010-4477',
      mobile: '(555) 010-8899',
    }
    const htmlUs = generateSignatureHtml(dataUs)
    assert.ok(htmlUs.includes('href="tel:5550104477"'), `${t} must format US phone to tel:5550104477`)
    assert.ok(htmlUs.includes('>(555) 010-4477</a>'), `${t} must preserve visible US phone text`)
    assert.ok(htmlUs.includes('href="tel:5550108899"'), `${t} must format US mobile to tel:5550108899`)
    assert.ok(htmlUs.includes('>(555) 010-8899</a>'), `${t} must preserve visible US mobile text`)
  }
})

