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
  totalUsd: number | null // null when unknown; for subscription tiers, the monthly plan price
  perEmailUsd: number | null
  status: Verification
  perMonth?: boolean // totalUsd is a recurring monthly plan price, not a one-time purchase
  note?: string // short label shown in place of a dash when there is no one-time price (e.g. "Quote", "Enterprise", "Per seat")
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
  resolvesCatchAll: boolean | 'partial' // does it return a real result on catch-alls
  catchAllCreditCost: string // e.g. "1 credit", "10 credits", "Marked Catch-All, not confirmed"
  advertisesSegSupport: boolean
  claimedAccuracy: string // e.g. "Claims 99%", or "Not published"
  benchmarkAccuracy: string | null // LeadMagic overall, if tested
  benchmarkCatchAllResolved: string | null // LeadMagic catch-alls resolved, if tested
  betterFitFor: string[] // honest, specific strengths
  pricingModel?: 'onetime' | 'subscription' | 'seat' // default onetime; subscription/seat platforms do not sell per-volume verification
  pricingBasisNote?: string // footnote under the pricing ladder when the numbers are not one-time per-volume prices
  estimateNote?: string // replaces the generic "third-party estimate" footnote when the estimate is our own arithmetic
}

// The date all competitor facts here were checked. Human-formatted by
// LastVerifiedNote. If you refresh a vendor, bump its lastVerified, not this.
export const CHECKED_ON = '2026-08-06'

// ── LeadMagic benchmark (a vendor test) ────────────────────────────────────────────────────
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
  catchAllCreditCost: '1 credit, the same as any other verification',
  resolvesCatchAll: true,
  advertisesSegSupport: true, // 15 detected gateways
  segGatewayCount: 15,
  claimedAccuracy: 'Claims 98.5%',
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
    resolvesCatchAll: 'partial', // offers catch-all handling (AI Scoring)
    catchAllCreditCost: 'AI score 1-10, not valid/invalid',
    advertisesSegSupport: true, // pricing page: "validate all, including catch-alls and protected by SEGs"
    claimedAccuracy: 'Claims 99.6%',
    benchmarkAccuracy: '97.8%',
    benchmarkCatchAllResolved: '12%',
    betterFitFor: [
      'A bundled deliverability suite Giggal.ai has no equivalent for: inbox placement testing, DMARC monitoring, blacklist monitoring and email warmup',
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
    freeTier: '10 credits on signup',
    creditsExpire: 'Credits expire 12 months after purchase',
    chargesForUnknown: null,
    resolvesCatchAll: 'partial', // secondary pattern detection on accept-all (8% resolved in test)
    catchAllCreditCost: 'Marked Accept-All, resolves few',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: '96.9%',
    benchmarkCatchAllResolved: '8%',
    betterFitFor: [
      'A much larger integration surface, roughly 80 or more native integrations including Salesforce, HubSpot and Marketo',
      'List cleaning that runs natively inside a CRM, which Giggal.ai does not do',
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
      { credits: 1000000, totalUsd: 1450, perEmailUsd: 0.00145, status: 'verified' },
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
      'Unlimited free single verifications, which Giggal.ai has no equivalent for',
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
    resolvesCatchAll: 'partial', // has a Catch-All Verifier (resolves ~30-40%, marks the rest Risky)
    catchAllCreditCost: 'Catch-All Verifier, resolves 30-40%, rest Risky',
    advertisesSegSupport: false,
    claimedAccuracy: 'Claims 99%+',
    benchmarkAccuracy: '95.8%',
    benchmarkCatchAllResolved: '5%',
    betterFitFor: [
      '$449 per 1,000,000 verifications',
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
    claimedAccuracy: 'Claims 99%',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'Unknown results are auto-refunded',
      'A free daily credit allowance that continues indefinitely',
      'A longer review history on G2 and Capterra',
      'A WordPress plugin',
      'A daily-subscription option for teams verifying continuously',
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

  // Tiers read live from the pricing page (static HTML): 10k $60, 100k $400,
  // 1M $2,000. Bouncer is one of the few here that resolves catch-all (Deep
  // Catch-All Verification, supplementary checks on Google/Microsoft).
  bouncer: {
    slug: 'bouncer',
    name: 'Bouncer',
    pricingUrl: 'https://www.usebouncer.com/pricing/',
    lastVerified: '2026-08-12',
    startingPrice: { credits: 1000, totalUsd: 8 },
    tiers: [
      { credits: 10000, totalUsd: 60, perEmailUsd: 0.006, status: 'verified' },
      { credits: 100000, totalUsd: 400, perEmailUsd: 0.004, status: 'verified' },
      { credits: 1000000, totalUsd: 2000, perEmailUsd: 0.002, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '100 credits',
    creditsExpire: 'Credits never expire',
    chargesForUnknown: false,
    resolvesCatchAll: true, // Deep Catch-All Verification, resolves major providers
    catchAllCreditCost: 'Deep Catch-All Verification, resolves major providers',
    advertisesSegSupport: false,
    claimedAccuracy: 'Claims over 99%',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'An Email Toxicity Check that flags spam traps and complainers, which Giggal.ai does not offer',
      'The highest review scores among dedicated verifiers, 4.8 on G2 and 4.9 on Capterra',
      'A mature real-time verification API and a deliverability toolkit',
      'SOC 2 Type II and GDPR compliance',
    ],
  },

  // Tiers read live from the pricing page data (pay-as-you-go, embedded in the
  // page): 10k $60, 100k $420, 1M $2,100. Flags accept-all as Risky rather than
  // resolving it.
  emailable: {
    slug: 'emailable',
    name: 'Emailable',
    pricingUrl: 'https://emailable.com/pricing/',
    lastVerified: '2026-08-12',
    startingPrice: { credits: 5000, totalUsd: 38 },
    tiers: [
      { credits: 10000, totalUsd: 60, perEmailUsd: 0.006, status: 'verified' },
      { credits: 100000, totalUsd: 420, perEmailUsd: 0.0042, status: 'verified' },
      { credits: 1000000, totalUsd: 2100, perEmailUsd: 0.0021, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '250 credits',
    creditsExpire: 'Credits never expire',
    chargesForUnknown: false,
    resolvesCatchAll: false, // marks accept-all as Risky, does not confirm the mailbox
    catchAllCreditCost: 'Marked Accept-All / Risky, not resolved',
    advertisesSegSupport: true, // advertises SEG *detection* (Proofpoint, Mimecast, Barracuda), flags not resolves
    claimedAccuracy: 'Claims 99%',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      '250 free credits to start, the largest free tier among these tools',
      'Rated among the fastest for bulk verification speed',
      'Around 90 native integrations',
      'No charge for unknown or duplicate results, and credits never expire',
    ],
  },

  // PAYG dollar tiers read from Clearout's own live pricing API
  // (api.clearout.io/public/products), the same source its calculator reads.
  // Volume-slab per-credit rates: $0.0065 at 10k, $0.004 at 100k, $0.0014 at 1M.
  // One-time credits, never expire. Returns Catch-All as its own status (risky),
  // charges 1 credit per check excluding Unknown.
  clearout: {
    slug: 'clearout',
    name: 'Clearout',
    pricingUrl: 'https://clearout.io/pricing/',
    lastVerified: '2026-08-14',
    startingPrice: { credits: 5000, totalUsd: 40 },
    tiers: [
      { credits: 10000, totalUsd: 65, perEmailUsd: 0.0065, status: 'verified' },
      { credits: 100000, totalUsd: 400, perEmailUsd: 0.004, status: 'verified' },
      { credits: 1000000, totalUsd: 1400, perEmailUsd: 0.0014, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '100 credits',
    creditsExpire: 'Credits never expire and roll over',
    chargesForUnknown: false,
    resolvesCatchAll: false, // Catch-All is a separate status, marked risky, not confirmed
    catchAllCreditCost: 'Returned as a Catch-All status, not confirmed',
    advertisesSegSupport: false,
    claimedAccuracy: 'Claims 99%',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A combined suite beyond verification, including an email finder and phone-number validation',
      'A 99%+ accuracy claim with free re-verification',
      '100 free credits that never expire',
      'A large integration list and a well-documented API',
    ],
  },

  // Kickbox blocks automated fetching; the pricing page publishes a FIXED
  // one-time bucket table (not a per-credit slider), read from dated Wayback
  // snapshots of kickbox.com/pricing (May + Aug 2026, byte-identical): 10k $70,
  // 100k $500, 1M $2,999. Flags accept-all via an accept_all field, does not
  // resolve it. Unknown/indeterminate results are refunded.
  kickbox: {
    slug: 'kickbox',
    name: 'Kickbox',
    pricingUrl: 'https://kickbox.com/pricing',
    lastVerified: '2026-08-14',
    startingPrice: { credits: 500, totalUsd: 5 },
    tiers: [
      { credits: 10000, totalUsd: 70, perEmailUsd: 0.007, status: 'verified' },
      { credits: 100000, totalUsd: 500, perEmailUsd: 0.005, status: 'verified' },
      { credits: 1000000, totalUsd: 2999, perEmailUsd: 0.002999, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '100 verifications',
    creditsExpire: 'Not published',
    chargesForUnknown: false, // pricing page: "Unknown Verification Results Are Free"
    resolvesCatchAll: false, // flags accept-all via an accept_all field, not resolved
    catchAllCreditCost: 'Flagged via an accept_all field, not resolved',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A developer-first API with strong documentation and a real-time verification endpoint',
      'The Sendex score, a per-address deliverability grade',
      'Native integrations with major ESPs such as SendGrid, Mailchimp and ActiveCampaign',
      '100 free verifications to start',
    ],
  },

  // Tiers read live from the pricing page: 10k $27, 100k $186. 1M is quote-only
  // (volume pricing), so that tier stays unknown. Flags accept-all as ok_for_all,
  // does not resolve it. 97% accuracy claim, credits never expire.
  emaillistverify: {
    slug: 'emaillistverify',
    name: 'EmailListVerify',
    pricingUrl: 'https://www.emaillistverify.com/pricing',
    lastVerified: '2026-08-12',
    startingPrice: { credits: 1000, totalUsd: 5 },
    tiers: [
      { credits: 10000, totalUsd: 27, perEmailUsd: 0.0027, status: 'verified' },
      { credits: 100000, totalUsd: 186, perEmailUsd: 0.00186, status: 'verified' },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Quote only' },
    ],
    minimumPurchase: null,
    freeTier: '100 verifications',
    creditsExpire: 'Credits never expire',
    chargesForUnknown: null,
    resolvesCatchAll: false, // returns accept-all as ok_for_all, not resolved
    catchAllCreditCost: 'Returned as ok_for_all (accept-all), not resolved',
    advertisesSegSupport: false,
    claimedAccuracy: 'Claims 97%',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A low per-credit price, $27 for 10,000, with free tools alongside',
      '100 free verifications that never expire',
      'An email finder plus free utilities like a blacklist checker and DNS health checker',
      'A long-established, simple pay-as-you-go model',
    ],
  },

  // Volume-tiered pay-as-you-go slab table read from the vendor's own page data
  // (with a +5% bonus-credits promo): 10k $15, 100k $99, 1M $349. Credits never
  // expire. Flags catch-all as a separate status, does not resolve it.
  myemailverifier: {
    slug: 'myemailverifier',
    name: 'MyEmailVerifier',
    pricingUrl: 'https://myemailverifier.com/pricing',
    lastVerified: '2026-08-12',
    startingPrice: { credits: 1000, totalUsd: 4 },
    tiers: [
      { credits: 10000, totalUsd: 15, perEmailUsd: 0.0015, status: 'verified' },
      { credits: 100000, totalUsd: 99, perEmailUsd: 0.00099, status: 'verified' },
      { credits: 1000000, totalUsd: 349, perEmailUsd: 0.000349, status: 'verified' },
    ],
    minimumPurchase: '1,000 credits',
    freeTier: '100 credits a day, free',
    creditsExpire: 'Credits never expire',
    chargesForUnknown: null,
    resolvesCatchAll: false, // flags catch-all as a separate status, not confirmed
    catchAllCreditCost: 'Returned as a catch-all status, not confirmed',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A very low headline rate of $0.0025 per verification',
      '100 free credits every day, which reset rather than expiring after a trial',
      'Credits that never expire, with bonus-credit promotions at high volume',
      'A strong public review history across G2, Capterra and Trustpilot',
    ],
  },

  // Verifier from Validity. Self-serve pay-as-you-go bundles (1 credit = 1
  // verification): 10k $80, 100k $600. A million is above the published range
  // (top self-serve bundle is 500k $2,250), so 1M is quote-only. Rates read from
  // dated Wayback snapshots of Validity's own pricing page (2025-08 and 2023-06,
  // identical); the LIVE page has since removed the table and now redirects, so
  // it is effectively quote-only today. Flags accept-all as risky, does not
  // resolve it. Credits expire 12 months after purchase.
  briteverify: {
    slug: 'briteverify',
    name: 'BriteVerify',
    pricingUrl: 'https://www.validity.com/briteverify/pricing/',
    lastVerified: '2026-08-14',
    startingPrice: { credits: 5000, totalUsd: 40 },
    tiers: [
      { credits: 10000, totalUsd: 80, perEmailUsd: 0.008, status: 'verified' },
      { credits: 100000, totalUsd: 600, perEmailUsd: 0.006, status: 'verified' },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Quote only' },
    ],
    minimumPurchase: null,
    freeTier: 'Not published',
    creditsExpire: 'Credits expire 12 months after purchase',
    chargesForUnknown: null,
    pricingBasisNote:
      'BriteVerify has removed its self-serve rate table from the live page (now quote-only). These are Validity’s last published pay-as-you-go bundle prices; confirm a current quote before relying on them.',
    resolvesCatchAll: false, // groups accept-all as risky, does not confirm the mailbox
    catchAllCreditCost: 'Grouped as Accept-All (risky), not confirmed',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'Part of Validity, an established deliverability suite with enterprise support',
      'High throughput, verifying on the order of 4,000 addresses a minute',
      'Real-time, batch and API verification with usage-based enterprise pricing',
      'Close relationships with inbox providers and a large data network',
    ],
  },

  // ── Finder / outreach platforms (verification is a bundled feature) ─────────
  // These are not per-credit verifiers, so their dollar tiers stay unknown and
  // the pages compare a dedicated verifier against a bundled platform.

  // Subscription platform with pooled credits (verification is 0.5 credit each),
  // read from hunter.io/pricing: Free 50 credits, Starter $49/mo (2,000cr),
  // Growth $149/mo (10,000cr), Scale $299/mo (25,000cr), Enterprise custom. The
  // smallest plan covering 10,000 verifications/mo is Growth ($149/mo);
  // 100k and 1M/mo exceed the top standard plan, so they are enterprise-quoted.
  hunter: {
    slug: 'hunter',
    name: 'Hunter',
    pricingUrl: 'https://hunter.io/pricing',
    lastVerified: '2026-08-14',
    startingPrice: null,
    pricingModel: 'subscription',
    tiers: [
      { credits: 10000, totalUsd: 149, perEmailUsd: null, status: 'verified', perMonth: true },
      { credits: 100000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Enterprise' },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Enterprise' },
    ],
    pricingBasisNote:
      'Hunter is sold as a monthly subscription with pooled credits (verification is 0.5 credit each). The 10k figure is the smallest monthly plan that covers that many verifications (Growth, billed monthly; annual billing is lower). Higher volumes are enterprise-quoted. Giggal.ai figures are one-time pay-as-you-go.',
    minimumPurchase: null,
    freeTier: '50 credits a month, free',
    creditsExpire: 'Plan credits reset each month',
    chargesForUnknown: null,
    resolvesCatchAll: false, // flags accept-all, does not resolve it
    catchAllCreditCost: 'Flagged as accept-all, not resolved',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A leading email finder and domain search, which Giggal.ai does not do',
      'Built-in cold outreach campaigns from the same tool',
      'A very large integration surface and public API',
      'A strong fit if prospecting and verifying in one platform matters more than price',
    ],
  },

  // Subscription platform with pooled credits (1 credit per verification), read
  // from snov.io/pricing: Starter $39/mo (1,000cr), Pro S $99 (5,000cr),
  // Pro M $189 (20,000cr), Pro L $369 (50,000cr), Ultra $738 (100,000cr);
  // annual billing is ~25% less. The smallest plan covering 10,000
  // verifications/mo is Pro M ($189/mo); 100k is Ultra ($738/mo); 1M is custom.
  snovio: {
    slug: 'snovio',
    name: 'Snov.io',
    pricingUrl: 'https://snov.io/pricing',
    lastVerified: '2026-08-14',
    startingPrice: null,
    pricingModel: 'subscription',
    tiers: [
      { credits: 10000, totalUsd: 189, perEmailUsd: null, status: 'verified', perMonth: true },
      { credits: 100000, totalUsd: 738, perEmailUsd: null, status: 'verified', perMonth: true },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Custom' },
    ],
    pricingBasisNote:
      'Snov.io is sold as a monthly subscription with pooled credits (1 credit per verification). Figures are the smallest monthly plan that covers that many verifications (billed monthly; annual billing is about 25% less). A million a month is a custom plan. Giggal.ai figures are one-time pay-as-you-go.',
    minimumPurchase: null,
    freeTier: '50 credits on the free trial',
    creditsExpire: 'Plan credits roll over while the subscription is active',
    chargesForUnknown: null,
    resolvesCatchAll: false,
    catchAllCreditCost: 'Flagged, not resolved',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'An email finder plus drip campaigns and a lightweight CRM',
      'LinkedIn prospecting tools alongside verification',
      'One platform for finding, verifying and sending',
      'A large integration list and public API',
    ],
  },

  // Sales-intelligence platform priced per user seat (Basic $49, Professional
  // $79, Organization $119 per user/mo billed annually; free plan too). Email
  // verification consumes email credits, which are fair-use-unlimited on paid
  // plans, so there is no per-volume verification price to quote. Verified from
  // apollo.io/pricing and Apollo's own help center.
  apollo: {
    slug: 'apollo',
    name: 'Apollo',
    pricingUrl: 'https://www.apollo.io/pricing',
    lastVerified: '2026-08-14',
    startingPrice: null,
    pricingModel: 'seat',
    tiers: [
      { credits: 10000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Per seat' },
      { credits: 100000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Per seat' },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Per seat' },
    ],
    pricingBasisNote:
      'Apollo is priced per user seat (from $49/user per month billed annually), and verification is bundled with fair-use-unlimited email credits rather than sold by volume, so there is no per-verification price to compare. Giggal.ai figures are one-time pay-as-you-go.',
    minimumPurchase: null,
    freeTier: 'Free plan with limited monthly credits',
    creditsExpire: 'Plan credits reset each month, no rollover',
    chargesForUnknown: null,
    resolvesCatchAll: true, // claims a 7-step process distinguishing valid/invalid on catch-all
    catchAllCreditCost: 'Claims to distinguish valid/invalid on catch-all (91%)',
    advertisesSegSupport: false,
    claimedAccuracy: 'Claims 91%',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A very large B2B contact and company database, which Giggal.ai does not offer',
      'Sales engagement, sequences and a dialer in one platform',
      'A free-forever starter plan',
      'A fit when you need data and outreach, not just verification',
    ],
  },

  // ── Mid-tier verifiers ──────────────────────────────────────────────────────

  // Catch-all specialist. Rechecked live 2026-11-27: pay-as-you-go is still a
  // flat $0.008 per credit (10k $80, 100k $800), credits never expire. Monthly
  // plans: Starter $47 (6,000), Growth $97 (15,000), Pro $497 (100,000), plan
  // credits roll over; above 100k a month is Contact Sales. Quick Verification is
  // 1 credit and covers standard, catch-all and SEG-protected domains. Deep
  // Verification is 3 credits and sends real emails, final results in 72 hours.
  // "All purchases are final." The 98.7% figure is no longer on its pages.
  scrubby: {
    slug: 'scrubby',
    name: 'Scrubby',
    pricingUrl: 'https://scrubby.io/pricing',
    lastVerified: '2026-11-27',
    startingPrice: null,
    tiers: [
      { credits: 10000, totalUsd: 80, perEmailUsd: 0.008, status: 'verified' },
      { credits: 100000, totalUsd: 800, perEmailUsd: 0.008, status: 'verified' },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Quote only' },
    ],
    minimumPurchase: null,
    freeTier: '200 credits',
    creditsExpire: 'Pay-as-you-go credits never expire; plan credits roll over',
    chargesForUnknown: null,
    resolvesCatchAll: true, // Quick Verification covers catch-all domains
    catchAllCreditCost: '1 credit on Quick Verification; Deep Verification is 3 credits and takes up to 72 hours',
    advertisesSegSupport: true, // page: "standard, catch-all, and SEG-protected domains"
    claimedAccuracy: 'Not published on its pricing page',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A Deep Verification option that sends real emails to hard-to-verify addresses',
      'A 200-credit free tier with no card',
      'Both pay-as-you-go and monthly plans, with plan credits that roll over',
      'A single, focused job rather than a broad suite',
    ],
  },

  // Persistent (pay-as-you-go) credit table read from the /plans slider,
  // rechecked live 2026-11-27: 10k $60, 100k $320, 1M $1,350; entry $4 for 500
  // credits; 100 free credits a day; credits never expire. 99% accuracy claim,
  // "50+" marketing tool integrations, ISO 27001 and GDPR badges. Flags catch-all.
  quickemailverification: {
    slug: 'quickemailverification',
    name: 'QuickEmailVerification',
    pricingUrl: 'https://quickemailverification.com/plans',
    lastVerified: '2026-11-27',
    startingPrice: { credits: 500, totalUsd: 4 },
    tiers: [
      { credits: 10000, totalUsd: 60, perEmailUsd: 0.006, status: 'verified' },
      { credits: 100000, totalUsd: 320, perEmailUsd: 0.0032, status: 'verified' },
      { credits: 1000000, totalUsd: 1350, perEmailUsd: 0.00135, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '100 credits a day, free',
    creditsExpire: 'Persistent pay-as-you-go credits never expire',
    chargesForUnknown: null,
    resolvesCatchAll: false, // returns catch-all as a status, not confirmed
    catchAllCreditCost: 'Returned as a catch-all status, not confirmed',
    advertisesSegSupport: false,
    claimedAccuracy: 'Claims 99%',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      '100 free credits every day, plus a monthly free allowance',
      'Persistent pay-as-you-go credits that never expire',
      'A low entry price from $4 for 500 credits',
      'An established real-time API',
    ],
  },

  // Subscription auto-cleaning tool (Lite $29/mo for 10,000, Business $59/mo for
  // 25,000, Pro $209/mo for 125,000; card required, 7-day trial). It also sells
  // one-time PREPAID credits, rechecked live 2026-11-27: 1k $8, 10k $40, 100k
  // $300, 1M $1,200. Prepaid credits never expire. Every account gets 500 free
  // verifications a month. 41 native email platform integrations; cleans lists
  // daily and fixes typos. Flags catch-all.
  mailfloss: {
    slug: 'mailfloss',
    name: 'Mailfloss',
    pricingUrl: 'https://mailfloss.com/pricing/',
    lastVerified: '2026-11-27',
    startingPrice: { credits: 1000, totalUsd: 8 },
    tiers: [
      { credits: 10000, totalUsd: 40, perEmailUsd: 0.004, status: 'verified' },
      { credits: 100000, totalUsd: 300, perEmailUsd: 0.003, status: 'verified' },
      { credits: 1000000, totalUsd: 1200, perEmailUsd: 0.0012, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '500 verifications a month, plus a 7-day trial on subscriptions',
    creditsExpire: 'Prepaid credits never expire; subscription credits reset monthly',
    chargesForUnknown: null,
    resolvesCatchAll: false,
    catchAllCreditCost: 'Flagged, not resolved',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'Automatic daily cleaning wired directly into your email platform',
      '41 native integrations, including Mailchimp, Klaviyo and HubSpot',
      'A set-and-forget subscription rather than manual uploads',
      'Both subscription and prepaid-credit options',
    ],
  },

  // Rechecked live 2026-11-27. Pay-as-you-go packs unchanged: 5k $19, 10k $29,
  // 100k $159, 1M $579. It now also sells monthly subscriptions (Starter 6,500
  // for $19 up to Scale 1,000,000 for $499). 1,000 free credits a month with a
  // work email, no card. Credits never expire, from packs or subscriptions.
  // "Catch-all evidence" is now included in the 1-credit standard price (the old
  // 5-credit add-on is gone); unconfirmed results are not billed. No native app
  // integrations yet (CSV and API guides only).
  bounceless: {
    slug: 'bounceless',
    name: 'Bounceless',
    pricingUrl: 'https://bounceless.io/pricing',
    lastVerified: '2026-11-27',
    startingPrice: { credits: 5000, totalUsd: 19 },
    tiers: [
      { credits: 10000, totalUsd: 29, perEmailUsd: 0.0029, status: 'verified' },
      { credits: 100000, totalUsd: 159, perEmailUsd: 0.00159, status: 'verified' },
      { credits: 1000000, totalUsd: 579, perEmailUsd: 0.000579, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '1,000 credits a month with a work email, no card',
    creditsExpire: 'Credits never expire, from packs or subscriptions',
    chargesForUnknown: false, // "Unconfirmed verification results are not billed."
    resolvesCatchAll: true,
    catchAllCreditCost: 'Catch-all evidence included in the 1-credit check',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A free allowance of 1,000 credits every month on a work email',
      'Both one-time packs and monthly subscriptions, with credits that never expire',
      'Extra tools in one account: sender health, inbox placement and signup form checks',
      'A low price at very high volume, $579 for a million',
    ],
  },

  // ── Catch-all specialists and finder platforms, added 2026-08-21 ───────────
  // These are the tools answer engines actually name when someone asks who
  // resolves catch-all addresses, which is why they are here. Several are
  // subscription platforms where verification shares a credit pool with lead
  // finding, so their tier figures are the smallest monthly plan that covers
  // that volume, not a one-time price.

  // Rechecked live 2026-11-27. findymail.com/pricing now leads with usage-based
  // plans (Individual $99, Pro $249, Team $399, Scale $999 a month) that list no
  // credit count. The credit-based Starter plan is unchanged at $99 a month for
  // 5,000 finder + 5,000 verifier credits; above that is Enterprise, custom. So
  // no verification volume here can be given a number. SOC 2 Type 2, EU hosted.
  findymail: {
    slug: 'findymail',
    name: 'Findymail',
    pricingUrl: 'https://www.findymail.com/pricing',
    lastVerified: '2026-11-27',
    startingPrice: null,
    pricingModel: 'subscription',
    tiers: [
      { credits: 10000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Enterprise' },
      { credits: 100000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Enterprise' },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Enterprise' },
    ],
    pricingBasisNote:
      'Findymail sells usage-based plans from $99 to $999 a month that list no credit count, and one credit-based plan, Starter at $99 a month with 5,000 finder credits and 5,000 verifier credits. Anything above that is quoted as Enterprise, so there is no published figure at 10,000, 100,000 or a million verifications a month. Giggal.ai figures are one-time pay-as-you-go.',
    minimumPurchase: null,
    freeTier: '10 credits on signup, no card',
    creditsExpire: 'Unused credits roll over up to twice the monthly allowance',
    chargesForUnknown: false, // "You only pay for verified results"
    resolvesCatchAll: true, // "We verify catch-all emails", claims 23% more valid emails
    catchAllCreditCost: '1 credit, the same as any other verification',
    advertisesSegSupport: false,
    claimedAccuracy: 'Guarantees under a 5% bounce rate, with credits refunded above it',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'Finding email addresses in the first place, which Giggal.ai does not do at all',
      'A bounce-rate guarantee backed by refunded credits',
      'A Chrome extension that finds and verifies emails on LinkedIn and Sales Navigator',
      'SOC 2 Type 2 and hosting in the EU',
    ],
  },

  // Rechecked live 2026-11-27 (leadmagic.io/pricing, monthly billing). Plans:
  // Essential $99 (5,000 credits), Growth $249 (20,000), Professional $499
  // (50,000), Ultimate $849 (100,000); the old $49.99 Basic plan is gone. One
  // shared credit pool. Email Validation costs 0.25 credits per conclusive
  // result and unknown results are free, so 10,000 validations is 2,500 credits
  // (Essential) and 100,000 is 25,000 credits (Professional). A million is
  // 250,000 credits, above Ultimate. No free credits. Rollover up to 2x the
  // monthly allowance. LeadMagic also publishes the catch-all benchmark cited
  // elsewhere in this file, in which it ranked itself first.
  leadmagic: {
    slug: 'leadmagic',
    name: 'LeadMagic',
    pricingUrl: 'https://leadmagic.io/pricing',
    lastVerified: '2026-11-27',
    startingPrice: null,
    pricingModel: 'subscription',
    tiers: [
      { credits: 10000, totalUsd: 99, perEmailUsd: null, status: 'verified', perMonth: true },
      { credits: 100000, totalUsd: 499, perEmailUsd: null, status: 'verified', perMonth: true },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Enterprise' },
    ],
    pricingBasisNote:
      'LeadMagic is a monthly subscription with one credit pool: Essential $99 (5,000 credits), Growth $249 (20,000), Professional $499 (50,000), Ultimate $849 (100,000). A conclusive validation costs 0.25 credits and an unknown result is free. The figures above are the smallest monthly plan that covers that many validations. Annual billing gives two months free. Giggal.ai figures are one-time pay-as-you-go.',
    minimumPurchase: null,
    freeTier: 'No free credits',
    creditsExpire: 'Unused monthly credits roll over, up to 2 times the monthly allowance',
    chargesForUnknown: false, // "Unknown results are free"
    resolvesCatchAll: true, // separate Catch-All Validation product
    catchAllCreditCost: '0.25 credits per conclusive result; unknown is free',
    advertisesSegSupport: false,
    claimedAccuracy: 'Claims 99.5% for validation',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A wide enrichment surface beyond verification: mobile numbers, company data, job changes and ad intelligence',
      'Publishing its own catch-all benchmark data, which most vendors do not',
      'Teams that want finding, enrichment and verification on one subscription',
      'A developer-first API with per-endpoint credit pricing',
    ],
  },

  // Rechecked live 2026-11-27, unchanged apart from a new custom-priced API plan
  // and a longer integration list (Outreach, Salesloft, HubSpot, Apollo,
  // ZoomInfo, Clay). It says it never sends emails to verify a catch-all.
  // Read live from allegrow.co/plans. Starter is $99/mo for 5,000 contacts with
  // add-on credits at $8 per 1,000, so 10,000 a month is $99 + $40 = $139 and is
  // marked an estimate because Allegrow does not publish that combination as a
  // plan. Scale Plus Unlimited is $1,340/mo billed annually for unlimited
  // verification, which covers both the 100k and 1M rows.
  allegrow: {
    slug: 'allegrow',
    name: 'Allegrow',
    pricingUrl: 'https://www.allegrow.co/plans',
    lastVerified: '2026-11-27',
    startingPrice: null,
    pricingModel: 'subscription',
    tiers: [
      { credits: 10000, totalUsd: 139, perEmailUsd: null, status: 'estimate', perMonth: true },
      { credits: 100000, totalUsd: 1340, perEmailUsd: null, status: 'verified', perMonth: true },
      { credits: 1000000, totalUsd: 1340, perEmailUsd: null, status: 'verified', perMonth: true, note: 'unlimited' },
    ],
    pricingBasisNote:
      'Allegrow is a monthly subscription. Starter is $99 a month for 5,000 contacts, with add-on credits at $8 per 1,000, so 10,000 a month works out at $139; that is our arithmetic on their published rates, not a plan they list. The 100,000 and 1,000,000 rows are Scale Plus Unlimited at $1,340 a month billed annually, which is unlimited verification. Giggal.ai figures are one-time pay-as-you-go.',
    estimateNote: 'Our calculation from Allegrow’s published rates, not a plan Allegrow lists.',
    minimumPurchase: null,
    freeTier: '14-day trial covering up to 1,000 addresses',
    creditsExpire: 'Plan allowance is monthly; the trial expires after 14 days',
    chargesForUnknown: null,
    resolvesCatchAll: true, // proprietary signal-based process, conclusive Valid/Invalid
    catchAllCreditCost: '1 contact from the plan allowance',
    advertisesSegSupport: true, // names Mimecast and Proofpoint
    claimedAccuracy: 'Claims 99%',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'An unlimited verification tier, which Giggal.ai has no equivalent for',
      'Sender reputation scoring and inbox placement monitoring alongside verification',
      'Native HubSpot, Outreach and Salesloft integrations with SSO and SOC 2 reporting',
      'A published false-positive study on fictional addresses',
    ],
  },

  // Rechecked live 2026-11-27. The plan figures are now readable on the
  // listmint.io home page: Starter $99/mo (20,000 standard + 5,000 catch-all
  // credits), Agency $187/mo (50,000 standard + 10,000 catch-all), Enterprise on
  // request. 10k fits Starter; 100k and 1M are above Agency, so Enterprise.
  // Catch-all credits are a separate, smaller and more expensive pool, and
  // Listmint says it "manually verifies catch-alls".
  listmint: {
    slug: 'listmint',
    name: 'Listmint',
    pricingUrl: 'https://listmint.io/pricing',
    lastVerified: '2026-11-27',
    startingPrice: null,
    pricingModel: 'subscription',
    tiers: [
      { credits: 10000, totalUsd: 99, perEmailUsd: null, status: 'verified', perMonth: true },
      { credits: 100000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Enterprise' },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Enterprise' },
    ],
    pricingBasisNote:
      'Listmint is a monthly subscription with two credit pools. Starter is $99 a month for 20,000 standard credits and 5,000 catch-all credits. Agency is $187 a month for 50,000 standard and 10,000 catch-all credits. Larger volumes are Enterprise, priced on request. Giggal.ai figures are one-time pay-as-you-go.',
    minimumPurchase: null,
    freeTier: 'Free start, amount not published',
    creditsExpire: 'Not published',
    chargesForUnknown: null,
    resolvesCatchAll: true, // "manually verifies catch-alls"
    catchAllCreditCost: 'Separate catch-all credits: 5,000 a month on the $99 plan',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A catch-all check that Listmint says it runs by hand',
      'Real-time catch-all verification',
      'A large monthly allowance of standard credits on the entry plan',
    ],
  },

  // Rechecked live 2026-11-27 (anymailfinder.com/pricing, monthly billing). The
  // ladder is unchanged: 400 credits $29 up to 100,000 credits $799. Verifying an
  // email from another source costs 0.2 credits, "charged for every check", so
  // 10,000 verifications is 2,000 credits ($89 plan) and 100,000 is 20,000
  // credits ($299 plan, 25,000 credits). A million is 200,000 credits a month,
  // above the monthly ladder. Trial: 7 days, 100 credits, card checked.
  anymailfinder: {
    slug: 'anymailfinder',
    name: 'Anymail Finder',
    pricingUrl: 'https://www.anymailfinder.com/pricing',
    lastVerified: '2026-11-27',
    startingPrice: null,
    pricingModel: 'subscription',
    tiers: [
      { credits: 10000, totalUsd: 89, perEmailUsd: null, status: 'verified', perMonth: true },
      { credits: 100000, totalUsd: 299, perEmailUsd: null, status: 'verified', perMonth: true },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Enterprise' },
    ],
    pricingBasisNote:
      'Anymail Finder is a monthly subscription with a credit ladder from 400 credits at $29 a month up to 100,000 at $799. Verifying an email you found elsewhere costs 0.2 credits per check. The figures above are the smallest monthly plans that cover that many checks. Annual billing saves 33%. A million checks a month is above the monthly ladder. Giggal.ai figures are one-time pay-as-you-go.',
    minimumPurchase: null,
    freeTier: '7-day trial with 100 credits; card checked, not charged',
    creditsExpire: 'Credits roll over with no cap while the subscription is active, and expire at the end of the billing period if you cancel',
    chargesForUnknown: true, // verifier: 0.2 credits, "charged for every check"
    resolvesCatchAll: true, // "only the few we genuinely can't reach stay risky"
    catchAllCreditCost: '0.2 credits per check, the same as any other verification',
    advertisesSegSupport: false,
    claimedAccuracy: 'Claims 98.9% accuracy at 86.4% coverage',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'Finding email addresses from a name and domain, which Giggal.ai does not do',
      'A stated delivery guarantee of 97% or better',
      'Credits that roll over with no cap while you stay subscribed',
      'A long-running brand with a large published content library',
    ],
  },

  // Rechecked live 2026-11-27 in the "All packages" table on
  // no2bounce.com/pricing (pay as you go): 10k $20, 25k $49, 50k $85, 100k $149,
  // 250k $299, 500k $399, 1M $679, up to 50M. Monthly auto-refill plans are 15%
  // less and yearly 20% less. 100 free credits, no card. Credits never expire.
  // To confirm a catch-all mailbox it sends controlled test messages. The pages
  // now claim 99.6% accuracy. Gateways were named on the August check.
  no2bounce: {
    slug: 'no2bounce',
    name: 'no2bounce',
    pricingUrl: 'https://www.no2bounce.com/pricing',
    lastVerified: '2026-11-27',
    startingPrice: { credits: 10000, totalUsd: 20 },
    tiers: [
      { credits: 10000, totalUsd: 20, perEmailUsd: 0.002, status: 'verified' },
      { credits: 100000, totalUsd: 149, perEmailUsd: 0.00149, status: 'verified' },
      { credits: 1000000, totalUsd: 679, perEmailUsd: 0.000679, status: 'verified' },
    ],
    minimumPurchase: null,
    freeTier: '100 credits, no card, credits never expire',
    creditsExpire: 'Credits never expire, with no monthly usage limit',
    chargesForUnknown: null,
    resolvesCatchAll: true, // sends test messages to confirm catch-all mailboxes
    catchAllCreditCost: '1 credit per email, the same as standard',
    advertisesSegSupport: true, // named Proofpoint, Mimecast and Cisco (Aug check)
    claimedAccuracy: 'Claims 99.6%',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'A long price ladder, from 10,000 credits up to 50 million',
      'Credits that never expire, the same as ours',
      'Monthly and yearly plans at 15% and 20% less than pay-as-you-go',
      'An email finder and domain search on the same credits',
    ],
  },

  // Instantly is a sending platform; verification is one feature inside it and
  // is billed from the same credit pool as lead data, at 0.25 credit per lead
  // (help centre). 10,000 verifications a month is 2,500 credits, so the
  // smallest plan that covers it is Supersonic at $197/mo. Above that the Hyper
  // tier is quoted as a range, so 100k and 1M stay unknown.
  instantly: {
    slug: 'instantly',
    name: 'Instantly',
    pricingUrl: 'https://instantly.ai/pricing',
    lastVerified: '2026-08-21',
    startingPrice: null,
    pricingModel: 'subscription',
    tiers: [
      { credits: 10000, totalUsd: 197, perEmailUsd: null, status: 'verified', perMonth: true },
      { credits: 100000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Quote' },
      { credits: 1000000, totalUsd: null, perEmailUsd: null, status: 'unknown', note: 'Enterprise' },
    ],
    pricingBasisNote:
      'Instantly sells credits for its sending and lead platform, and verification spends 0.25 of a credit per lead. Growth is $47 a month for 1,500 credits and Supersonic is $197 for 5,000, so 10,000 verifications a month (2,500 credits) needs Supersonic. The Hyper tier covering higher volumes is published as a range starting at $197 rather than a fixed price, so we leave those rows blank. Giggal.ai figures are one-time pay-as-you-go.',
    minimumPurchase: null,
    freeTier: 'Not published',
    creditsExpire: 'Plan credits reset monthly',
    chargesForUnknown: null,
    resolvesCatchAll: true, // returns Valid/Invalid/Risky on catch-alls; Risky is still a common outcome
    catchAllCreditCost: '0.25 credit per lead, the same as any other verification',
    advertisesSegSupport: false,
    claimedAccuracy: '-',
    benchmarkAccuracy: null,
    benchmarkCatchAllResolved: null,
    betterFitFor: [
      'Actually sending the campaign, which Giggal.ai does not do: inbox rotation, warmup and sequencing in one platform',
      'A 450 million contact B2B database built into the same subscription',
      'Verification that happens automatically as leads enter a campaign',
      'A much larger user base and review history',
    ],
  },
}

// Order used by the hub MASTER TABLE only. Kept at six so a 20-wide table never
// has to render; the rest of the competitors are linked from the routing list
// below the table, not added as columns.
export const COMPETITOR_ORDER = [
  'zerobounce',
  'neverbounce',
  'bounceban',
  'millionverifier',
  'reoon',
  'debounce',
] as const

// Every competitor that has a /{slug}-alternative page, in display order. Drives
// the hub routing list, and should match the sitemap. Newest additions appended.
export const ALL_COMPETITOR_SLUGS = [
  'zerobounce',
  'neverbounce',
  'bounceban',
  'millionverifier',
  'reoon',
  'debounce',
  'bouncer',
  'emailable',
  'clearout',
  'kickbox',
  'emaillistverify',
  'myemailverifier',
  'briteverify',
  'scrubby',
  'quickemailverification',
  'mailfloss',
  'bounceless',
  'hunter',
  'snovio',
  'apollo',
  // Catch-all specialists and finder platforms answer engines already name.
  'findymail',
  'leadmagic',
  'allegrow',
  'listmint',
  'anymailfinder',
  'no2bounce',
  'instantly',
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
  neverbounce: { expiry: '12 months', freeTier: '10 on signup' },
  bounceban: { expiry: 'Never, rolls over', freeTier: 'Unlimited single only' },
  millionverifier: { expiry: 'Never', freeTier: '100 credits' },
  reoon: { expiry: 'Never, instant credits', freeTier: '600 / month' },
  debounce: { expiry: 'Never', freeTier: '100 credits' },
  bouncer: { expiry: 'Never', freeTier: '100 credits' },
  emailable: { expiry: 'Never', freeTier: '250 credits' },
  clearout: { expiry: 'Never', freeTier: '100 credits' },
  kickbox: { expiry: 'Not published', freeTier: '100 checks' },
  emaillistverify: { expiry: 'Never', freeTier: '100 checks' },
  myemailverifier: { expiry: 'Never', freeTier: '100 / day' },
  briteverify: { expiry: 'Not published', freeTier: '-' },
  scrubby: { expiry: 'Never (PAYG)', freeTier: '200 credits' },
  quickemailverification: { expiry: 'Never (PAYG)', freeTier: '100 / day' },
  mailfloss: { expiry: 'Never (prepaid)', freeTier: '7-day trial' },
  bounceless: { expiry: 'Never (PAYG)', freeTier: '1,000 credits' },
  hunter: { expiry: 'Monthly reset', freeTier: '50 / month' },
  snovio: { expiry: 'Rolls over', freeTier: '50 trial' },
  apollo: { expiry: 'Monthly reset', freeTier: 'Free plan' },
}
