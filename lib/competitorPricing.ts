// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for every competitor fact used across the
// /alternatives hub and the six /[competitor]-alternative pages. No price,
// policy or benchmark number is ever hardcoded in a page or component; it all
// reads from here, so a quarterly refresh is a one-file edit.
//
// STATUS RULES (enforced by the components that read this file):
//   'verified' → published as a number, with a "checked on" date next to it
//   'estimate' → number rendered with a superscript marker + footnote
//   'unknown'  → rendered as "Not published", never as a number
//
// Sourcing is noted per competitor. Anything not read from a vendor's own live
// page is marked 'unknown' rather than guessed. Vendor calculators that render
// client-side could not be read, so those dollar tiers stay 'unknown'.
// ─────────────────────────────────────────────────────────────────────────────

import { RAW_OFFERS } from '@/components/landing/pricingOffers'

export type Verification = 'verified' | 'estimate' | 'unknown'

export interface PricingTier {
  credits: number
  totalUsd: number | null // null when unknown
  perEmailUsd: number | null
  status: Verification
}

export interface Competitor {
  slug: string // "zerobounce"
  name: string // "ZeroBounce"
  pricingUrl: string
  lastVerified: string // ISO date the facts below were checked
  tiers: PricingTier[] // 10k / 100k / 1M, in that order
  // The smallest package the vendor actually publishes a fixed price for, so the
  // hub can compare each vendor at its own entry point instead of forcing a
  // shared volume most of them do not list. null = priced only via a calculator.
  startingPrice: { credits: number; totalUsd: number } | null
  minimumPurchase: string | null
  freeTier: string
  creditsExpire: string // plain sentence, or "Not published"
  chargesForUnknown: boolean | null // null = we did not confirm
  resolvesCatchAll: boolean // does it return a real result on catch-alls
  catchAllCreditCost: string // e.g. "1 credit", "10 credits", "Marked Catch-All, not confirmed"
  advertisesSegSupport: boolean
  claimedAccuracy: string // e.g. "Claims 99%", or "Not published"
  benchmarkAccuracy: string | null // LeadMagic overall, if tested
  benchmarkCatchAllResolved: string | null // LeadMagic catch-alls resolved, if tested
  betterFitFor: string[] // honest, specific strengths
}

// The date all competitor facts here were checked. Human-formatted by
// LastVerifiedNote. If you refresh a vendor, bump its lastVerified, not this.
export const CHECKED_ON = '2026-08-06'

// ── Independent benchmark ────────────────────────────────────────────────────
// LeadMagic, published 25 Feb 2026: 10,000 real B2B emails, 28% on catch-all
// domains, run within 48 hours. The caveat is mandatory wherever this is cited
// and is baked into BenchmarkCallout so it cannot be dropped by accident.
export const LEADMAGIC_BENCHMARK = {
  publisher: 'LeadMagic',
  publishedOn: '25 February 2026',
  sample: '10,000 real B2B emails, 28% of them on catch-all domains',
  caveat:
    'This test was published by LeadMagic, which sells a competing email verifier and ranked itself first in its own results. Read it as a vendor test, not a neutral study. Giggal.ai was not one of the tools measured in it.',
}

// ── Giggal reference numbers ─────────────────────────────────────────────────
// Prices come from RAW_OFFERS (the same array the pricing table renders), so the
// comparison can never drift from the real price list.
function giggalTier(credits: number): PricingTier {
  const offer = RAW_OFFERS.find((o) => o.credits === credits)
  if (!offer) throw new Error(`No Giggal offer for ${credits} credits`)
  return {
    credits,
    totalUsd: offer.price,
    perEmailUsd: offer.price / credits,
    status: 'verified',
  }
}

// Giggal's smallest package, read straight from the price list.
const MIN_GIGGAL_OFFER = RAW_OFFERS.reduce((a, b) => (a.credits <= b.credits ? a : b))

export const GIGGAL = {
  name: 'Giggal.ai',
  tiers: [giggalTier(10000), giggalTier(100000), giggalTier(1000000)],
  startingPrice: { credits: MIN_GIGGAL_OFFER.credits, totalUsd: MIN_GIGGAL_OFFER.price },
  freeTier: '1,000 credits, no card, usable on bulk',
  creditsExpire: 'Credits never expire, with no condition.',
  catchAllCreditCost: '1.5 credits in the same run, 2 credits standalone',
  resolvesCatchAll: true,
  advertisesSegSupport: true, // 15 detected gateways
  segGatewayCount: 15,
  claimedAccuracy: 'Claims 99%',
  perCreditUsd: 9.9 / 10000, // 0.00099
}

// ── Competitors ──────────────────────────────────────────────────────────────
export const COMPETITORS: Record<string, Competitor> = {
  // Prices + policies verified live from the pricing calculator (headless Chrome).
  zerobounce: {
    slug: 'zerobounce',
    name: 'ZeroBounce',
    pricingUrl: 'https://www.zerobounce.net/pricing/',
    lastVerified: CHECKED_ON,
    startingPrice: { credits: 2000, totalUsd: 39 }, // minimum purchase
    tiers: [
      { credits: 10000, totalUsd: 129, perEmailUsd: 0.0129, status: 'verified' },
      { credits: 100000, totalUsd: 649, perEmailUsd: 0.00649, status: 'verified' },
      { credits: 1000000, totalUsd: 3199, perEmailUsd: 0.003199, status: 'verified' },
    ],
    minimumPurchase: '2,000 credits ($39)',
    freeTier: '100 credits per month',
    creditsExpire: 'Credits never expire',
    chargesForUnknown: false,
    resolvesCatchAll: true, // offers catch-all handling (AI Scoring)
    catchAllCreditCost: 'AI score 1-10, not valid/invalid',
    advertisesSegSupport: false,
    claimedAccuracy: 'Claims 99.6%',
    benchmarkAccuracy: '97.8%',
    benchmarkCatchAllResolved: '12%',
    betterFitFor: [
      'A bundled deliverability suite Giggal has no equivalent for: inbox placement testing, DMARC monitoring, blacklist monitoring and email warmup',
      'A larger public review corpus',
      'No charge for duplicate or unknown results',
    ],
  },

  // PAYG "Basic Plans" table + 12-month expiry verified live from the page data
  // (headless Chrome). Entry is 1,000 credits for $8 ($0.008/credit).
  neverbounce: {
    slug: 'neverbounce',
    name: 'NeverBounce',
    pricingUrl: 'https://neverbounce.com/pricing',
    lastVerified: CHECKED_ON,
    startingPrice: { credits: 1000, totalUsd: 8 }, // 1k entry from the PAYG Basic Plans table
    tiers: [
      { credits: 10000, totalUsd: 50, perEmailUsd: 0.005, status: 'verified' },
      { credits: 100000, totalUsd: 400, perEmailUsd: 0.004, status: 'verified' },
      { credits: 1000000, totalUsd: 2500, perEmailUsd: 0.0025, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '-',
    creditsExpire: 'Credits expire 12 months after purchase',
    chargesForUnknown: null,
    resolvesCatchAll: true, // secondary pattern detection on accept-all (8% resolved in test)
    catchAllCreditCost: 'Marked Accept-All, resolves few',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: '96.9%',
    benchmarkCatchAllResolved: '8%',
    betterFitFor: [
      'A much larger integration surface, roughly 80 or more native integrations including Salesforce, HubSpot and Marketo',
      'List cleaning that runs natively inside a CRM, which Giggal does not do',
      'A natural fit if your contact data already lives in ZoomInfo',
    ],
  },

  // VERIFIED (1 credit per verification, free single mode, rollover, named
  // gateways). Dollar tiers verified live from the pricing calculator (headless).
  bounceban: {
    slug: 'bounceban',
    name: 'BounceBan',
    pricingUrl: 'https://bounceban.com/pricing',
    lastVerified: CHECKED_ON,
    startingPrice: { credits: 10000, totalUsd: 34 }, // 10k package via the pricing calculator
    tiers: [
      { credits: 10000, totalUsd: 34, perEmailUsd: 0.0034, status: 'verified' },
      { credits: 100000, totalUsd: 255, perEmailUsd: 0.00255, status: 'verified' },
      { credits: 1000000, totalUsd: 450, perEmailUsd: 0.00045, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: 'Unlimited single verifications, but no bulk credits',
    creditsExpire: 'Unused credits roll over and do not expire',
    chargesForUnknown: null,
    resolvesCatchAll: true,
    catchAllCreditCost: '1 credit',
    advertisesSegSupport: true, // names Mimecast, Proofpoint, Barracuda
    claimedAccuracy: 'Claims over 97% on catch-all addresses',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'Unlimited free single verifications, which Giggal has no equivalent for',
      'A CRM Sync feature that verifies new contacts automatically each day',
      'A wider automation surface: a ChatGPT GPT, a Claude Code plugin, published AI skills, an n8n node and a Google Sheets add-on',
      '306 G2 reviews against Giggal’s smaller review corpus',
    ],
  },

  // All tiers verified live from the pricing calculator (headless Chrome).
  millionverifier: {
    slug: 'millionverifier',
    name: 'MillionVerifier',
    pricingUrl: 'https://www.millionverifier.com/',
    lastVerified: CHECKED_ON,
    startingPrice: { credits: 10000, totalUsd: 39 }, // smallest package
    tiers: [
      { credits: 10000, totalUsd: 39, perEmailUsd: 0.0039, status: 'verified' },
      { credits: 100000, totalUsd: 149, perEmailUsd: 0.00149, status: 'verified' },
      { credits: 1000000, totalUsd: 449, perEmailUsd: 0.000449, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '100 credits',
    creditsExpire: 'Credits never expire',
    chargesForUnknown: false,
    resolvesCatchAll: true, // has a Catch-All Verifier (marks most Risky; ~5% resolved in test)
    catchAllCreditCost: 'Catch-All Verifier, marks most Risky',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: '95.8%',
    benchmarkCatchAllResolved: '5%',
    betterFitFor: [
      'Cheaper at high volume, $449 per 1,000,000 verifications',
      'No charge for risky or catch-all results at all',
      'Credits never expire',
      'ISO 27001 certified',
      'A money-back guarantee if your hard bounce rate exceeds 4%',
    ],
  },

  // VERIFIED from reoon.com pricing.
  reoon: {
    slug: 'reoon',
    name: 'Reoon',
    pricingUrl: 'https://www.reoon.com/products/email-verifier',
    lastVerified: CHECKED_ON,
    startingPrice: { credits: 10000, totalUsd: 11.9 }, // smallest instant-credit package
    tiers: [
      { credits: 10000, totalUsd: 11.9, perEmailUsd: 0.00119, status: 'verified' },
      { credits: 100000, totalUsd: 116.4, perEmailUsd: 0.001164, status: 'verified' },
      { credits: 1000000, totalUsd: 960, perEmailUsd: 0.00096, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '600 free credits a month',
    creditsExpire:
      'Instant credits never expire. Daily subscription credits reset each day and do not roll over.',
    chargesForUnknown: false,
    resolvesCatchAll: false,
    catchAllCreditCost: 'Reported as a status, not confirmed',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'Unknown results are auto-refunded',
      'A free daily credit allowance that continues indefinitely',
      'A longer review history on G2 and Capterra',
      'A WordPress plugin',
      'Cheaper daily-subscription pricing for teams verifying continuously',
    ],
  },

  // Credit COSTS verified (1 credit standard, 10 credits catch-all, 20 data
  // enrichment). Dollar tiers verified live from the pricing slider (headless).
  debounce: {
    slug: 'debounce',
    name: 'DeBounce',
    pricingUrl: 'https://debounce.com/pricing/',
    lastVerified: CHECKED_ON,
    startingPrice: { credits: 5000, totalUsd: 15 }, // 5k package via the pricing slider
    tiers: [
      { credits: 10000, totalUsd: 25, perEmailUsd: 0.0025, status: 'verified' },
      { credits: 100000, totalUsd: 135, perEmailUsd: 0.00135, status: 'verified' },
      { credits: 1000000, totalUsd: 750, perEmailUsd: 0.00075, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '100 credits',
    creditsExpire: 'Credits never expire, and duplicates are free',
    chargesForUnknown: false,
    resolvesCatchAll: true,
    catchAllCreditCost: '10 credits, as a separate product',
    advertisesSegSupport: false,
    claimedAccuracy: 'Claims a 97.5% deliverability guarantee',
    benchmarkAccuracy: '94.1%',
    benchmarkCatchAllResolved: '6%',
    betterFitFor: [
      'Strong WordPress and signup-form validation',
      'Free deduplication',
      'No charge for unknown results',
      'Credits never expire',
      'API access with no extra credit cost',
      'A large public review corpus',
    ],
  },
}

// Order used by the hub master table and the footer Compare column.
export const COMPETITOR_ORDER = [
  'zerobounce',
  'neverbounce',
  'bounceban',
  'millionverifier',
  'reoon',
  'debounce',
] as const

// Helpers

export function getCompetitor(slug: string): Competitor {
  const c = COMPETITORS[slug]
  if (!c) throw new Error(`Unknown competitor slug: ${slug}`)
  return c
}

export function tierAt(c: Competitor, credits: number): PricingTier | undefined {
  return c.tiers.find((t) => t.credits === credits)
}

export function giggalTierAt(credits: number): PricingTier {
  return giggalTier(credits)
}

// "10,000" style formatting for credit counts.
export function fmtCredits(n: number): string {
  return n.toLocaleString('en-US')
}

// A dollar figure the way the tables show it: "$129" or "$11.90".
export function fmtUsd(n: number): string {
  return n % 1 === 0 ? `$${n.toLocaleString('en-US')}` : `$${n.toFixed(2)}`
}

// Compact versions of the credit-expiry and free-tier facts, for the hub master
// table where the full sentences above would not fit in a cell. These are
// shortened restatements of the same facts, kept in this file so the hub still
// reads everything from one source.
export const HUB_LABELS: Record<string, { expiry: string; freeTier: string }> = {
  giggal: { expiry: 'Never', freeTier: '1,000, no card' },
  zerobounce: { expiry: 'Never', freeTier: '100 / month' },
  neverbounce: { expiry: '12 months', freeTier: '-' },
  bounceban: { expiry: 'Never, rolls over', freeTier: 'Unlimited single only' },
  millionverifier: { expiry: 'Never', freeTier: '100 credits' },
  reoon: { expiry: 'Never, instant credits', freeTier: '600 / month' },
  debounce: { expiry: 'Never', freeTier: '100 credits' },
}
