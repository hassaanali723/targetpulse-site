import test from 'node:test'
import assert from 'node:assert/strict'
import {
  matchSpamPhrases,
  stripHtml,
  findMergeTags,
  findLinkShorteners,
  checkSpamIssues,
  SHORTENER_DOMAINS,
} from '../lib/tools/spamWordCheckerCore.ts'

test('Spam Word Checker - Word-Boundary Matching (free vs freedom)', () => {
  // Should match "100% free" and single word "free" if in list, but NOT "freedom" or "carefree"
  const textWithFreedom = 'We celebrate personal freedom and carefree living.'
  const matches1 = matchSpamPhrases(textWithFreedom, 'body')
  // None of the matches should be "freedom"
  const matchedPhrases1 = matches1.map((m) => m.phrase.toLowerCase())
  assert.equal(matchedPhrases1.includes('freedom'), false)
  assert.equal(matchedPhrases1.includes('free'), false)

  // Should match exact phrase "100% free" or "free money"
  const textWithSpam = 'Get 100% free access and make money today.'
  const matches2 = matchSpamPhrases(textWithSpam, 'body')
  const matchedPhrases2 = matches2.map((m) => m.phrase.toLowerCase())
  assert.ok(matchedPhrases2.includes('100% free'))
  assert.ok(matchedPhrases2.includes('make money'))
})

test('Spam Word Checker - Each Merge-Tag Style Detection', () => {
  // 1. {{...}}
  assert.deepEqual(findMergeTags('Hello {{first_name}} at {{company}}!'), ['{{first_name}}', '{{company}}'])

  // 2. {FIRSTNAME}-style
  assert.deepEqual(findMergeTags('Hi {FIRSTNAME}, your account is ready.'), ['{FIRSTNAME}'])

  // 3. [First Name]-style
  assert.deepEqual(findMergeTags('Dear [First Name], here is the report.'), ['[First Name]'])

  // 4. *|FNAME|*
  assert.deepEqual(findMergeTags('Hey *|FNAME|*, check this update.'), ['*|FNAME|*'])

  // 5. %first_name%
  assert.deepEqual(findMergeTags('Welcome %first_name% to our webinar.'), ['%first_name%'])
})

test('Spam Word Checker - Link Shorteners (all 8 domains)', () => {
  for (const domain of SHORTENER_DOMAINS) {
    const text = `Click this link: https://${domain}/abc123xyz for details.`
    const found = findLinkShorteners(text)
    assert.ok(found.length > 0, `Must detect shortener domain ${domain}`)
  }
})

test('Spam Word Checker - Re: and Fwd: Subject Detection', () => {
  const check1 = checkSpamIssues({
    subject: 'Re: Quick question about our proposal',
    body: 'Following up on our earlier chat.',
  })
  assert.ok(check1.worthFixing.some((f) => f.id === 'fake-reply'))

  const check2 = checkSpamIssues({
    subject: 'Fwd: Project update',
    body: 'Please see attached info.',
  })
  assert.ok(check2.worthFixing.some((f) => f.id === 'fake-reply'))

  const checkNormal = checkSpamIssues({
    subject: 'Regarding the conference schedule',
    body: 'Here is the draft agenda for next week.',
  })
  assert.equal(checkNormal.worthFixing.some((f) => f.id === 'fake-reply'), false)
})

test('Spam Word Checker - HTML Stripping', () => {
  const html = `<p>Hello <strong>World</strong>!</p><br/><div>Please visit <a href="https://example.com">our site</a>.</div>`
  const text = stripHtml(html)
  assert.ok(!text.includes('<p>'))
  assert.ok(!text.includes('<strong>'))
  assert.ok(!text.includes('<a'))
  assert.ok(text.includes('Hello World!'))
  assert.ok(text.includes('Please visit our site.'))
})

test('Spam Word Checker - Summary Verdict Thresholds (No Numeric Score)', () => {
  // 1. Looks clean: ordinary professional email
  const cleanResult = checkSpamIssues({
    subject: 'Quarterly review discussion',
    body: 'Hi Sarah, are you available for a brief catch-up next Tuesday to review the quarterly numbers? Best, Alex.',
  })
  assert.equal(cleanResult.verdict, 'Looks clean')
  assert.equal(cleanResult.worthFixing.length, 0)
  assert.ok(!('score' in cleanResult), 'No numeric score allowed')

  // 2. A few things to fix: single issue (e.g. Re: fake thread or 1 urgent phrase)
  const aFewThings = checkSpamIssues({
    subject: 'Re: Let us chat next week',
    body: 'Would love to connect briefly whenever you have a minute.',
  })
  assert.equal(aFewThings.verdict, 'A few things to fix')

  // 3. Needs work: multiple aggressive triggers
  const needsWork = checkSpamIssues({
    subject: 'ACT NOW FOR FREE MONEY $$$$$',
    body: '{{first_name}}, you won’t believe this! Double your income immediately with bit.ly/promo! Call now!!!!',
  })
  assert.equal(needsWork.verdict, 'Needs work')
  assert.ok(needsWork.worthFixing.length >= 2)
})

test('Spam Word Checker - Over 500 Words Labeled as Readability Note', () => {
  const longBody = Array.from({ length: 550 }, (_, i) => `word${i}`).join(' ')
  const res = checkSpamIssues({
    subject: 'A polite update on our project schedule',
    body: longBody,
  })

  const wordCountFinding = res.findings.find((f) => f.id === 'body-word-count')
  assert.ok(wordCountFinding, 'Must flag body over 500 words')
  assert.equal(wordCountFinding.categoryLabel, 'readability')
  assert.ok(wordCountFinding.title.includes('readability note'))
})
