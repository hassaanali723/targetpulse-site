/**
 * Spam Word Checker Core Logic
 * Browser-safe, pure TypeScript with zero external dependencies.
 */

export type SpamCategory = 'urgency' | 'money' | 'overpromising' | 'shady wording' | 'clickbait'

export interface SpamPhrase {
  phrase: string
  category: SpamCategory
  alternative?: string
}

export interface SpamMatch {
  phrase: string
  category: SpamCategory
  alternative?: string
  field: 'subject' | 'preview' | 'body'
  index: number
  length: number
}

export type FindingSeverity = 'worth fixing' | 'worth a look'

export interface StructuralFinding {
  id: string
  type: 'structural'
  severity: FindingSeverity
  title: string
  reason: string
  suggestion: string
  categoryLabel?: 'readability' | 'spam'
}

export interface WordFinding {
  id: string
  type: 'word'
  severity: FindingSeverity
  phrase: string
  category: SpamCategory
  field: 'subject' | 'preview' | 'body'
  reason: string
  suggestion: string
}

export type Finding = StructuralFinding | WordFinding

export type SummaryVerdict = 'Looks clean' | 'A few things to fix' | 'Needs work'

export interface SpamCheckResult {
  verdict: SummaryVerdict
  summaryText: string
  wordMatches: SpamMatch[]
  findings: Finding[]
  worthFixing: Finding[]
  worthALook: Finding[]
  cleanedBodyText: string
  stats: {
    subjectLength: number
    bodyWords: number
    linkCount: number
    imageCount: number
    emojiCount: number
  }
}

/**
 * 180+ curated phrases across 5 categories with plainer alternatives
 */
export const SPAM_PHRASES: SpamPhrase[] = [
  // 1. Urgency (36 phrases)
  { phrase: 'act now', category: 'urgency', alternative: "when you're ready" },
  { phrase: 'action required', category: 'urgency', alternative: 'next step' },
  { phrase: 'apply now', category: 'urgency', alternative: 'view application' },
  { phrase: 'call now', category: 'urgency', alternative: 'reach out' },
  { phrase: 'clearance', category: 'urgency', alternative: 'discount' },
  { phrase: 'close out', category: 'urgency', alternative: 'final items' },
  { phrase: 'do it today', category: 'urgency', alternative: 'get started' },
  { phrase: "don't delay", category: 'urgency', alternative: 'available now' },
  { phrase: "don't hesitate", category: 'urgency', alternative: 'feel free to reply' },
  { phrase: "don't wait", category: 'urgency', alternative: 'whenever you are ready' },
  { phrase: 'expires today', category: 'urgency', alternative: 'valid through today' },
  { phrase: 'expires tonight', category: 'urgency', alternative: 'ends tonight' },
  { phrase: 'final call', category: 'urgency', alternative: 'last reminder' },
  { phrase: 'final chance', category: 'urgency', alternative: 'ending soon' },
  { phrase: 'for a limited time', category: 'urgency', alternative: 'this week' },
  { phrase: 'for immediate release', category: 'urgency', alternative: 'announcement' },
  { phrase: 'get it now', category: 'urgency', alternative: 'take a look' },
  { phrase: 'hurry up', category: 'urgency', alternative: 'take a look' },
  { phrase: 'immediately', category: 'urgency', alternative: 'promptly' },
  { phrase: 'instant access', category: 'urgency', alternative: 'ready to view' },
  { phrase: 'last chance', category: 'urgency', alternative: 'final update' },
  { phrase: 'limited supply', category: 'urgency', alternative: 'while available' },
  { phrase: 'limited time offer', category: 'urgency', alternative: 'current offer' },
  { phrase: 'now only', category: 'urgency', alternative: 'currently' },
  { phrase: 'offer expires', category: 'urgency', alternative: 'available until' },
  { phrase: 'once in a lifetime', category: 'urgency', alternative: 'rare' },
  { phrase: 'one time only', category: 'urgency', alternative: 'single-run' },
  { phrase: 'only a few left', category: 'urgency', alternative: 'limited stock' },
  { phrase: 'order now', category: 'urgency', alternative: 'place an order' },
  { phrase: 'order today', category: 'urgency', alternative: 'available today' },
  { phrase: 'running out', category: 'urgency', alternative: 'limited remaining' },
  { phrase: 'supplies running out', category: 'urgency', alternative: 'limited stock' },
  { phrase: 'take action now', category: 'urgency', alternative: 'review details' },
  { phrase: 'time is running out', category: 'urgency', alternative: 'ending shortly' },
  { phrase: 'urgent', category: 'urgency', alternative: 'time-sensitive' },
  { phrase: 'while supplies last', category: 'urgency', alternative: 'available this week' },

  // 2. Money (42 phrases)
  { phrase: '100% free', category: 'money', alternative: 'free or at no charge' },
  { phrase: 'all natural', category: 'money', alternative: 'plant-based or simple' },
  { phrase: 'best price', category: 'money', alternative: 'competitive pricing' },
  { phrase: 'big bucks', category: 'money', alternative: 'higher earnings' },
  { phrase: 'billion dollars', category: 'money', alternative: 'significant value' },
  { phrase: 'cash bonus', category: 'money', alternative: 'bonus' },
  { phrase: 'cash prize', category: 'money', alternative: 'prize' },
  { phrase: 'cents on the dollar', category: 'money', alternative: 'discounted rate' },
  { phrase: 'cheap', category: 'money', alternative: 'affordable or budget-friendly' },
  { phrase: 'compare rates', category: 'money', alternative: 'view rates' },
  { phrase: 'cost', category: 'money', alternative: 'pricing' },
  { phrase: 'credit card offers', category: 'money', alternative: 'card options' },
  { phrase: 'cures baldness', category: 'money', alternative: 'treatment' },
  { phrase: 'discount', category: 'money', alternative: 'promotional price' },
  { phrase: 'double your cash', category: 'money', alternative: 'grow revenue' },
  { phrase: 'double your income', category: 'money', alternative: 'increase revenue' },
  { phrase: 'earn cash', category: 'money', alternative: 'earn revenue' },
  { phrase: 'earn extra cash', category: 'money', alternative: 'supplement your income' },
  { phrase: 'earn extra income', category: 'money', alternative: 'additional earnings' },
  { phrase: 'earn money', category: 'money', alternative: 'generate revenue' },
  { phrase: 'earn per week', category: 'money', alternative: 'weekly rate' },
  { phrase: 'easy money', category: 'money', alternative: 'profitable' },
  { phrase: 'extra income', category: 'money', alternative: 'additional revenue' },
  { phrase: 'fast cash', category: 'money', alternative: 'quick payout' },
  { phrase: 'financial freedom', category: 'money', alternative: 'long-term growth' },
  { phrase: 'free gift', category: 'money', alternative: 'complimentary gift' },
  { phrase: 'free hosting', category: 'money', alternative: 'included hosting' },
  { phrase: 'free info', category: 'money', alternative: 'guide or documentation' },
  { phrase: 'free investment', category: 'money', alternative: 'no capital required' },
  { phrase: 'free membership', category: 'money', alternative: 'standard membership' },
  { phrase: 'free money', category: 'money', alternative: 'grant or funding' },
  { phrase: 'get paid', category: 'money', alternative: 'receive payment' },
  { phrase: 'giveaway', category: 'money', alternative: 'raffle or promotion' },
  { phrase: 'lower rates', category: 'money', alternative: 'reduced rates' },
  { phrase: 'lowest price', category: 'money', alternative: 'standard pricing' },
  { phrase: 'make money', category: 'money', alternative: 'generate income' },
  { phrase: 'money back', category: 'money', alternative: 'refund available' },
  { phrase: 'no cost', category: 'money', alternative: 'at no extra charge' },
  { phrase: 'no fees', category: 'money', alternative: 'included in plan' },
  { phrase: 'pure profit', category: 'money', alternative: 'net return' },
  { phrase: 'save big', category: 'money', alternative: 'save up to' },
  { phrase: 'unclaimed money', category: 'money', alternative: 'funds owed' },

  // 3. Overpromising (38 phrases)
  { phrase: '100% satisfied', category: 'overpromising', alternative: 'satisfaction guaranteed' },
  { phrase: 'all natural', category: 'overpromising', alternative: 'organic or certified' },
  { phrase: 'amazing', category: 'overpromising', alternative: 'noteworthy' },
  { phrase: 'be your own boss', category: 'overpromising', alternative: 'freelance or consult' },
  { phrase: 'certified', category: 'overpromising', alternative: 'accredited' },
  { phrase: 'cure', category: 'overpromising', alternative: 'manage or address' },
  { phrase: 'drastically reduce', category: 'overpromising', alternative: 'decrease' },
  { phrase: 'eliminate debt', category: 'overpromising', alternative: 'restructure debt' },
  { phrase: 'fantastic', category: 'overpromising', alternative: 'great' },
  { phrase: 'get out of debt', category: 'overpromising', alternative: 'repay debt' },
  { phrase: 'guarantee', category: 'overpromising', alternative: 'policy' },
  { phrase: 'guaranteed', category: 'overpromising', alternative: 'backed by our terms' },
  { phrase: 'increase sales', category: 'overpromising', alternative: 'support sales' },
  { phrase: 'increase traffic', category: 'overpromising', alternative: 'grow readership' },
  { phrase: 'instant results', category: 'overpromising', alternative: 'fast setup' },
  { phrase: 'lose weight', category: 'overpromising', alternative: 'fitness plan' },
  { phrase: 'miracle', category: 'overpromising', alternative: 'effective solution' },
  { phrase: 'no catch', category: 'overpromising', alternative: 'transparent pricing' },
  { phrase: 'no disappointment', category: 'overpromising', alternative: 'straightforward' },
  { phrase: 'no experience required', category: 'overpromising', alternative: 'beginner-friendly' },
  { phrase: 'no gimmick', category: 'overpromising', alternative: 'simple terms' },
  { phrase: 'no obligation', category: 'overpromising', alternative: 'cancel anytime' },
  { phrase: 'no purchase necessary', category: 'overpromising', alternative: 'free entry' },
  { phrase: 'no risk', category: 'overpromising', alternative: 'refundable' },
  { phrase: 'no strings attached', category: 'overpromising', alternative: 'no contract required' },
  { phrase: 'obligation free', category: 'overpromising', alternative: 'flexible terms' },
  { phrase: 'promise you', category: 'overpromising', alternative: 'we aim to' },
  { phrase: 'results guaranteed', category: 'overpromising', alternative: 'proven track record' },
  { phrase: 'risk free', category: 'overpromising', alternative: 'with a 30-day return policy' },
  { phrase: 'risk-free', category: 'overpromising', alternative: 'refundable' },
  { phrase: 'satisfaction guaranteed', category: 'overpromising', alternative: 'satisfaction policy' },
  { phrase: 'unbelievable', category: 'overpromising', alternative: 'impressive' },
  { phrase: 'unconditional guarantee', category: 'overpromising', alternative: 'standard warranty' },
  { phrase: 'unlimited', category: 'overpromising', alternative: 'unmetered or generous' },
  { phrase: 'valuable', category: 'overpromising', alternative: 'useful' },
  { phrase: 'warranty', category: 'overpromising', alternative: 'coverage terms' },
  { phrase: 'will not believe', category: 'overpromising', alternative: 'notable update' },
  { phrase: 'zero risk', category: 'overpromising', alternative: 'low financial commitment' },

  // 4. Shady wording (36 phrases)
  { phrase: 'as seen on', category: 'shady wording', alternative: 'featured in' },
  { phrase: 'avoid bankruptcy', category: 'shady wording', alternative: 'financial guidance' },
  { phrase: 'bad credit', category: 'shady wording', alternative: 'credit options' },
  { phrase: 'beneficiary', category: 'shady wording', alternative: 'recipient' },
  { phrase: 'billing address', category: 'shady wording', alternative: 'billing details' },
  { phrase: 'call free', category: 'shady wording', alternative: 'toll-free line' },
  { phrase: 'cancel at any time', category: 'shady wording', alternative: 'month-to-month' },
  { phrase: 'claims', category: 'shady wording', alternative: 'reports' },
  { phrase: 'clearance sale', category: 'shady wording', alternative: 'inventory sale' },
  { phrase: 'consolidate debt', category: 'shady wording', alternative: 'debt management' },
  { phrase: 'dear friend', category: 'shady wording', alternative: 'use recipient name' },
  { phrase: 'direct email', category: 'shady wording', alternative: 'direct message' },
  { phrase: 'direct marketing', category: 'shady wording', alternative: 'marketing campaign' },
  { phrase: 'hidden assets', category: 'shady wording', alternative: 'unlisted assets' },
  { phrase: 'hidden charges', category: 'shady wording', alternative: 'additional costs' },
  { phrase: 'investment decision', category: 'shady wording', alternative: 'financial decision' },
  { phrase: 'multi-level marketing', category: 'shady wording', alternative: 'distribution network' },
  { phrase: 'no credit check', category: 'shady wording', alternative: 'flexible underwriting' },
  { phrase: 'no hidden fees', category: 'shady wording', alternative: 'upfront pricing' },
  { phrase: 'no investment', category: 'shady wording', alternative: 'no upfront capital' },
  { phrase: 'not spam', category: 'shady wording', alternative: 'state purpose directly' },
  { phrase: 'offshore', category: 'shady wording', alternative: 'international' },
  { phrase: 'one hundred percent free', category: 'shady wording', alternative: 'free tier' },
  { phrase: 'opt in', category: 'shady wording', alternative: 'subscribe' },
  { phrase: 'passwords', category: 'shady wording', alternative: 'credentials' },
  { phrase: 'refinance', category: 'shady wording', alternative: 'refinancing' },
  { phrase: 'remove from list', category: 'shady wording', alternative: 'unsubscribe link' },
  { phrase: 'requires initial investment', category: 'shady wording', alternative: 'starting cost' },
  { phrase: 'social security number', category: 'shady wording', alternative: 'identity verification' },
  { phrase: 'spam', category: 'shady wording', alternative: 'unsolicited' },
  { phrase: 'special promotion', category: 'shady wording', alternative: 'seasonal offer' },
  { phrase: 'this is not a scam', category: 'shady wording', alternative: 'explain the offer directly' },
  { phrase: 'this is not spam', category: 'shady wording', alternative: 'explain why you are reaching out' },
  { phrase: 'undisclosed', category: 'shady wording', alternative: 'confidential' },
  { phrase: 'unsolicited', category: 'shady wording', alternative: 'introductory' },
  { phrase: 'winner', category: 'shady wording', alternative: 'selected participant' },

  // 5. Clickbait (34 phrases)
  { phrase: 'are you serious', category: 'clickbait', alternative: 'quick question' },
  { phrase: 'can you believe', category: 'clickbait', alternative: 'did you see' },
  { phrase: 'cannot be unseen', category: 'clickbait', alternative: 'surprising finding' },
  { phrase: 'check this out', category: 'clickbait', alternative: 'take a look' },
  { phrase: 'dont miss out', category: 'clickbait', alternative: 'upcoming deadline' },
  { phrase: "don't miss out", category: 'clickbait', alternative: 'upcoming deadline' },
  { phrase: 'insane', category: 'clickbait', alternative: 'remarkable' },
  { phrase: 'jaw-dropping', category: 'clickbait', alternative: 'notable' },
  { phrase: 'mind blowing', category: 'clickbait', alternative: 'notable insight' },
  { phrase: 'mind-blowing', category: 'clickbait', alternative: 'surprising analysis' },
  { phrase: 'one weird trick', category: 'clickbait', alternative: 'helpful technique' },
  { phrase: 'open immediately', category: 'clickbait', alternative: 'important update' },
  { phrase: 'read this now', category: 'clickbait', alternative: 'quick update' },
  { phrase: 'secret revealed', category: 'clickbait', alternative: 'key finding' },
  { phrase: 'see for yourself', category: 'clickbait', alternative: 'view details' },
  { phrase: 'shocked', category: 'clickbait', alternative: 'surprised' },
  { phrase: 'shocking', category: 'clickbait', alternative: 'unexpected' },
  { phrase: 'stop what you are doing', category: 'clickbait', alternative: 'brief note' },
  { phrase: 'the truth about', category: 'clickbait', alternative: 'overview of' },
  { phrase: 'unbelievable deal', category: 'clickbait', alternative: 'discounted rate' },
  { phrase: 'uncovered', category: 'clickbait', alternative: 'reported' },
  { phrase: 'what happened next', category: 'clickbait', alternative: 'the outcome' },
  { phrase: 'what happens next', category: 'clickbait', alternative: 'next steps' },
  { phrase: 'won’t believe', category: 'clickbait', alternative: 'you might find interesting' },
  { phrase: "won't believe", category: 'clickbait', alternative: 'might surprise you' },
  { phrase: 'you are a winner', category: 'clickbait', alternative: 'congratulations' },
  { phrase: 'you need to see this', category: 'clickbait', alternative: 'sharing an update' },
  { phrase: 'you won’t believe', category: 'clickbait', alternative: 'interesting finding' },
  { phrase: "you won't believe", category: 'clickbait', alternative: 'interesting finding' },
  { phrase: 'your eyes will pop', category: 'clickbait', alternative: 'compelling stats' },
  { phrase: 'your mind will explode', category: 'clickbait', alternative: 'striking numbers' },
  { phrase: 'zero effort', category: 'clickbait', alternative: 'low maintenance' },
  { phrase: 'zero work', category: 'clickbait', alternative: 'automated workflow' },
  { phrase: 'secret trick', category: 'clickbait', alternative: 'effective tip' },
]

export const SHORTENER_DOMAINS = [
  'bit.ly',
  'tinyurl.com',
  'ow.ly',
  'is.gd',
  'buff.ly',
  'rebrand.ly',
  'cutt.ly',
  'shorturl.at',
]

/**
 * Strip HTML tags from text while preserving readable whitespace.
 */
export function stripHtml(html: string): string {
  if (!html) return ''
  // Remove script and style contents
  let s = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  s = s.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
  // Replace break / paragraph / table tags with newlines
  s = s.replace(/<(?:br|\/p|\/div|\/tr|hr)\b[^>]*>/gi, '\n')
  // Strip all other HTML tags
  s = s.replace(/<[^>]+>/g, ' ')
  // Decode basic HTML entities
  s = s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
  // Collapse whitespace while keeping clean punctuation
  s = s.replace(/[ \t]+/g, ' ').replace(/ \n/g, '\n').replace(/\n /g, '\n').replace(/ +([.,!?:;])/g, '$1')
  return s.trim()
}

/**
 * Whole-word matching for phrases.
 * "free" must NOT match "freedom" or "carefree".
 */
export function matchSpamPhrases(text: string, field: 'subject' | 'preview' | 'body'): SpamMatch[] {
  if (!text) return []
  const matches: SpamMatch[] = []

  for (const item of SPAM_PHRASES) {
    const escaped = item.phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    // Word boundary matching
    const regex = new RegExp(`(?:^|\\b)${escaped}(?:\\b|$)`, 'gi')
    let m: RegExpExecArray | null
    while ((m = regex.exec(text)) !== null) {
      // Find actual start index of phrase
      const matchedStr = m[0]
      const offset = matchedStr.toLowerCase().indexOf(item.phrase.toLowerCase())
      const realIndex = m.index + (offset >= 0 ? offset : 0)
      matches.push({
        phrase: item.phrase,
        category: item.category,
        alternative: item.alternative,
        field,
        index: realIndex,
        length: item.phrase.length,
      })
    }
  }

  return matches
}

/**
 * Checks for unfilled merge tags:
 * - {{...}}
 * - {FIRSTNAME}-style
 * - [First Name]-style
 * - *|FNAME|*
 * - %first_name%
 */
export function findMergeTags(text: string): string[] {
  if (!text) return []
  const tags: string[] = []

  // 1. {{...}}
  const doubleCurly = text.match(/\{\{([^{}]+)\}\}/g)
  if (doubleCurly) tags.push(...doubleCurly)

  // 2. {FIRSTNAME}-style (uppercase letters/underscores inside single curly)
  const singleCurly = text.match(/\{([A-Z0-9_]{2,})\}/g)
  if (singleCurly) tags.push(...singleCurly)

  // 3. [First Name]-style (brackets with common merge tag names)
  const bracketTags = text.match(/\[(First Name|Last Name|Email|Company|Name|Contact|Phone|Address)\]/gi)
  if (bracketTags) tags.push(...bracketTags)

  // 4. *|FNAME|* (Mailchimp)
  const mcTags = text.match(/\*\|([A-Z0-9_]+)\|\*/g)
  if (mcTags) tags.push(...mcTags)

  // 5. %first_name% (ActiveCampaign/others)
  const percentTags = text.match(/%([a-zA-Z0-9_]{3,})%/g)
  if (percentTags) tags.push(...percentTags)

  return Array.from(new Set(tags))
}

/**
 * Check for link shorteners in text or HTML
 */
export function findLinkShorteners(text: string): string[] {
  if (!text) return []
  const found: string[] = []

  for (const domain of SHORTENER_DOMAINS) {
    const escaped = domain.replace('.', '\\.')
    const reg = new RegExp(`(?:https?:\\/\\/)?(?:www\\.)?${escaped}(?:\\/[a-zA-Z0-9_-]+)?`, 'gi')
    const matches = text.match(reg)
    if (matches) {
      for (const m of matches) found.push(m)
    }
  }

  return Array.from(new Set(found))
}

/**
 * Main analysis function
 */
export function checkSpamIssues(input: {
  subject: string
  preview?: string
  body: string
}): SpamCheckResult {
  const subject = input.subject || ''
  const preview = input.preview || ''
  const rawBody = input.body || ''

  const isHtml = /<[a-z][\s\S]*>/i.test(rawBody)
  const cleanedBodyText = isHtml ? stripHtml(rawBody) : rawBody

  const findings: Finding[] = []

  // 1. Check spam word lists
  const subjectMatches = matchSpamPhrases(subject, 'subject')
  const previewMatches = matchSpamPhrases(preview, 'preview')
  const bodyMatches = matchSpamPhrases(cleanedBodyText, 'body')
  const allWordMatches = [...subjectMatches, ...previewMatches, ...bodyMatches]

  // Deduplicate matched phrases for finding list
  const seenPhrases = new Set<string>()
  for (const wm of allWordMatches) {
    const key = `${wm.phrase.toLowerCase()}:${wm.field}`
    if (!seenPhrases.has(key)) {
      seenPhrases.add(key)
      findings.push({
        id: `word-${key}`,
        type: 'word',
        severity: wm.field === 'subject' ? 'worth fixing' : 'worth a look',
        phrase: wm.phrase,
        category: wm.category,
        field: wm.field,
        reason: `Flagged in the ${wm.category} list. Mailbox filters score pushy words, especially in the subject line.`,
        suggestion: wm.alternative ? `Consider replacing with "${wm.alternative}".` : 'Consider using plainer phrasing.',
      })
    }
  }

  // 2. Structural Check: Subject mostly in capitals
  const subjectLetters = subject.replace(/[^a-zA-Z]/g, '')
  if (subjectLetters.length >= 5) {
    const uppercaseLetters = subjectLetters.replace(/[^A-Z]/g, '').length
    const uppercaseRatio = uppercaseLetters / subjectLetters.length
    if (uppercaseRatio >= 0.65) {
      findings.push({
        id: 'subject-caps',
        type: 'structural',
        severity: 'worth fixing',
        title: 'Subject mostly in capitals',
        reason: 'Subject lines with excessive capital letters trigger spam filters and feel like shouting to recipients.',
        suggestion: 'Use normal sentence case or standard title case instead.',
      })
    }
  }

  // 3. Structural Check: 2 or more exclamation marks in a row, or more than 3 in total
  const combinedText = `${subject} ${preview} ${cleanedBodyText}`
  const exclamationMatches = combinedText.match(/!/g) || []
  const hasConsecutiveExclamation = /!!+/.test(combinedText)
  if (hasConsecutiveExclamation || exclamationMatches.length > 3) {
    findings.push({
      id: 'exclamation-marks',
      type: 'structural',
      severity: 'worth fixing',
      title: 'Excessive exclamation marks',
      reason: hasConsecutiveExclamation
        ? 'Multiple exclamation marks in a row (!!) are strongly penalized by content filters.'
        : `Found ${exclamationMatches.length} exclamation marks in total. Overuse looks aggressive and spammy.`,
      suggestion: 'Use periods for calm, professional copy, keeping at most one exclamation mark.',
    })
  }

  // 4. Structural Check: Repeated currency symbols ($$$)
  const currencyMatches = combinedText.match(/(\${2,}|€{2,}|£{2,})/g)
  if (currencyMatches && currencyMatches.length > 0) {
    findings.push({
      id: 'repeated-currency',
      type: 'structural',
      severity: 'worth fixing',
      title: 'Repeated currency symbols ($$$)',
      reason: 'Stacking dollar signs or currency symbols is a legacy spam marker.',
      suggestion: 'State the price clearly with a single symbol (e.g. "$100" instead of "$$$").',
    })
  }

  // 5. Structural Check: More than 2 emojis in the subject
  // Matches astral plane emojis via surrogate pairs and common misc symbols without /u flag
  const emojiRegex = /(?:[\uD83C-\uD83F][\uDC00-\uDFFF]|[\u2600-\u27BF])/g
  const subjectEmojis = subject.match(emojiRegex) || []
  if (subjectEmojis.length > 2) {
    findings.push({
      id: 'subject-emojis',
      type: 'structural',
      severity: 'worth a look',
      title: 'More than 2 emojis in the subject',
      reason: 'Multiple emojis reduce subject line readability and increase the risk of rendering issues on some email clients.',
      suggestion: 'Stick to at most one relevant emoji or remove them.',
    })
  }

  // 6. Structural Check: Link shorteners
  const shortenersFound = findLinkShorteners(`${rawBody} ${subject} ${preview}`)
  if (shortenersFound.length > 0) {
    findings.push({
      id: 'link-shorteners',
      type: 'structural',
      severity: 'worth fixing',
      title: 'Link shorteners detected',
      reason: `Found shortened URLs (${shortenersFound.join(', ')}). Shorteners obscure destinations and are heavily filtered.`,
      suggestion: 'Replace with direct links on your own branded domain.',
    })
  }

  // 7. Structural Check: More than 3 links in body
  const urlRegex = /(?:https?:\/\/|www\.)[^\s<>"']+/gi
  const hrefRegex = /href=["'][^"']+["']/gi
  let linkCount = 0
  if (isHtml) {
    const hrefs = rawBody.match(hrefRegex) || []
    linkCount = hrefs.length
  } else {
    const urls = rawBody.match(urlRegex) || []
    linkCount = urls.length
  }
  if (linkCount > 3) {
    findings.push({
      id: 'many-links',
      type: 'structural',
      severity: 'worth a look',
      title: 'More than 3 links in email body',
      reason: `Found ${linkCount} links. Cold emails with multiple links look promotional and divide recipient attention.`,
      suggestion: 'Focus on a single clear call-to-action link.',
    })
  }

  // 8. Structural Check: Unfilled merge tags
  const mergeTags = findMergeTags(combinedText)
  if (mergeTags.length > 0) {
    findings.push({
      id: 'unfilled-merge-tags',
      type: 'structural',
      severity: 'worth fixing',
      title: 'Unfilled merge tags',
      reason: `Detected unpopulated placeholder tags (${mergeTags.slice(0, 3).join(', ')}). This signals an accidental template broadcast.`,
      suggestion: 'Ensure fallback values are configured in your sending tool before launching.',
    })
  }

  // 9. Structural Check: Re: or Fwd: at start of subject
  if (/^(?:re|fwd):\s*/i.test(subject.trim())) {
    findings.push({
      id: 'fake-reply',
      type: 'structural',
      severity: 'worth fixing',
      title: 'Re: or Fwd: at the start of the subject',
      reason: 'Faking an existing thread or reply trick readers into opening, which quickly draws spam complaints.',
      suggestion: 'Only use Re: or Fwd: if this is an authentic reply to an incoming message.',
    })
  }

  // 10. Structural Check: Subject longer than 60 characters (readability, not spam)
  if (subject.length > 60) {
    findings.push({
      id: 'subject-length',
      type: 'structural',
      severity: 'worth a look',
      categoryLabel: 'readability',
      title: 'Subject longer than 60 characters (readability)',
      reason: 'Most mobile email clients truncate subject lines after 50 to 60 characters.',
      suggestion: 'Front-load your key message so it is visible before mobile screens cut it off.',
    })
  }

  // 11. Structural Check: HTML mostly images with little text
  const imgTags = rawBody.match(/<img\b[^>]*>/gi) || []
  const imageCount = imgTags.length
  const words = cleanedBodyText.split(/\s+/).filter(Boolean)
  const bodyWordCount = words.length

  if (isHtml && imageCount >= 1 && bodyWordCount < 30) {
    findings.push({
      id: 'image-heavy',
      type: 'structural',
      severity: 'worth fixing',
      title: 'HTML is mostly images with little text',
      reason: 'Emails consisting primarily of images with little body copy resemble image-based spam designed to evade text filters.',
      suggestion: 'Add substantive paragraphs of text to maintain a healthy text-to-image ratio.',
    })
  }

  // 12. Structural Check: Body longer than 500 words (readability note, not a spam finding)
  if (bodyWordCount > 500) {
    findings.push({
      id: 'body-word-count',
      type: 'structural',
      severity: 'worth a look',
      categoryLabel: 'readability',
      title: 'Body longer than 500 words (readability note)',
      reason: `Found ${bodyWordCount} words. Longer cold emails have lower reply rates. Mobile readers often skim or drop off after 150 to 200 words.`,
      suggestion: 'Trim secondary details and aim for 50 to 200 words for cold outreach.',
    })
  }

  // Group findings
  const worthFixing = findings.filter((f) => f.severity === 'worth fixing')
  const worthALook = findings.filter((f) => f.severity === 'worth a look')

  // Summary Verdict calculation:
  // - "Looks clean": 0 worth fixing, <= 1 minor worth a look
  // - "Needs work": >= 2 worth fixing OR total findings >= 5
  // - "A few things to fix": anything in between
  let verdict: SummaryVerdict
  let summaryText = ''

  if (worthFixing.length === 0 && worthALook.length <= 1) {
    verdict = 'Looks clean'
    summaryText = 'No critical spam triggers or structural flags detected in this draft.'
  } else if (worthFixing.length >= 2 || findings.length >= 5) {
    verdict = 'Needs work'
    summaryText = `Multiple high-priority items (${worthFixing.length} to fix) require attention before sending.`
  } else {
    verdict = 'A few things to fix'
    summaryText = `Found ${findings.length} item${findings.length > 1 ? 's' : ''} that could increase filter scrutiny.`
  }

  return {
    verdict,
    summaryText,
    wordMatches: allWordMatches,
    findings,
    worthFixing,
    worthALook,
    cleanedBodyText,
    stats: {
      subjectLength: subject.length,
      bodyWords: bodyWordCount,
      linkCount,
      imageCount,
      emojiCount: subjectEmojis.length,
    },
  }
}
