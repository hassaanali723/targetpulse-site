// ─────────────────────────────────────────────────────────────────────────────
// Comparison engine for the programmatic /compare/{c1}-vs-{c2} pages. Given two
// competitor slugs it returns a fully built, serialisable comparison: 3-way
// table rows (C1 | C2 | Giggal), generated prose sections, a per-section Giggal
// edge line, generated FAQ, and metadata. Every hard fact is read from
// competitorPricing.ts; the qualitative copy is read from compareProfiles.ts.
//
// Deterministic only: no Date/Math.random. Prose varies because the underlying
// facts vary per pair, so no two pages read alike.
// ─────────────────────────────────────────────────────────────────────────────
import {
  COMPETITORS,
  ALL_COMPETITOR_SLUGS,
  getCompetitor,
  tierAt,
  giggalTierAt,
  fmtUsd,
  GIGGAL,
  type Competitor,
} from './competitorPricing'
import { getProfile, type CompareProfile } from './compareProfiles'
import type { FaqItem } from '@/components/landing/FaqAccordion'

const ORDER = ALL_COMPETITOR_SLUGS as readonly string[]

// ── Pairing (canonical order = ALL_COMPETITOR_SLUGS index; c1 = lower index) ──
export function canonicalPair(a: string, b: string): [string, string] {
  return ORDER.indexOf(a) <= ORDER.indexOf(b) ? [a, b] : [b, a]
}

export function versusSlug(a: string, b: string): string {
  const [x, y] = canonicalPair(a, b)
  return `${x}-vs-${y}`
}

export function allPairs(): { a: string; b: string }[] {
  const out: { a: string; b: string }[] = []
  for (let i = 0; i < ORDER.length; i++)
    for (let j = i + 1; j < ORDER.length; j++) out.push({ a: ORDER[i], b: ORDER[j] })
  return out
}

// Parse a "{a}-vs-{b}" slug. Returns null unless both slugs are real competitors,
// distinct, and already in canonical order (so the reverse URL 404s, no dupes).
export function parseVersus(slug: string): { a: string; b: string } | null {
  const parts = slug.split('-vs-')
  if (parts.length !== 2) return null
  const [a, b] = parts
  if (!COMPETITORS[a] || !COMPETITORS[b] || a === b) return null
  const [x, y] = canonicalPair(a, b)
  if (x !== a || y !== b) return null
  return { a, b }
}

// ── Small text helpers ───────────────────────────────────────────────────────
const lc = (s: string) => (s ? s.charAt(0).toLowerCase() + s.slice(1) : s)

// Display price for one volume, mirroring PricingLadder: "$149/mo", "Quote only",
// "Per seat", or the plain total. Returns "-" only if nothing is known.
function priceCell(c: Competitor, credits: number): string {
  const t = tierAt(c, credits)
  if (t && t.status !== 'unknown' && t.totalUsd !== null)
    return fmtUsd(t.totalUsd) + (t.perMonth ? '/mo' : '')
  return t?.note ?? '-'
}
const giggalPrice = (credits: number) => fmtUsd(giggalTierAt(credits).totalUsd as number)

// A readable one-line price statement adapted to the vendor's billing model.
function priceSentence(c: Competitor): string {
  if (c.pricingModel === 'seat')
    return `${c.name} is priced per user seat, with verification bundled rather than sold by volume`
  if (c.pricingModel === 'subscription')
    return `${c.name} is sold by monthly plan, from ${priceCell(c, 10000)} for 10,000 verifications a month`
  return `${c.name} is ${priceCell(c, 10000)} at 10,000, ${priceCell(c, 100000)} at 100,000 and ${priceCell(c, 1000000)} at a million`
}

// Readable clauses that stay natural even when a vendor publishes nothing.
const expiryClause = (c: Competitor) =>
  c.creditsExpire === 'Not published'
    ? `${c.name} does not publish a credit-expiry policy`
    : `${c.name} ${lc(c.creditsExpire)}`
const freeClause = (c: Competitor) =>
  c.freeTier === 'Not published' ? 'lists no free tier' : `offers ${lc(c.freeTier)} to start`

// ── Table model (serialisable; the component renders bool as icons) ───────────
export type CmpValue = { kind: 'text'; text: string } | { kind: 'bool'; yes: boolean | null }
const t = (text: string): CmpValue => ({ kind: 'text', text })
const b = (yes: boolean | null): CmpValue => ({ kind: 'bool', yes })

export interface CmpRow {
  label: string
  a: CmpValue
  b: CmpValue
  giggal: CmpValue
}

export interface CompareSection {
  heading: string
  prose: string
  giggalEdge: string
  giggalEdgeLabel: string // section-specific lead-in for the Giggal callout
}

export interface Comparison {
  a: Competitor
  b: Competitor
  pa: CompareProfile
  pb: CompareProfile
  rows: CmpRow[]
  intro: string
  sections: CompareSection[]
  faqs: FaqItem[]
  metaTitle: string
  metaDescription: string
  ogTitle: string
}

const GIGGAL_EDGE = {
  catchAll:
    'Giggal.ai resolves catch-all addresses to a real deliverable or undeliverable result at 1.5 credits in a run, or 2 standalone.',
  pricing:
    'Giggal.ai publishes a flat pay-as-you-go price, $9.90 at 10,000, $76 at 100,000 and $680 at a million, with credits that never expire.',
  seg: `Giggal.ai detects ${GIGGAL.segGatewayCount} named secure email gateways including Mimecast, Proofpoint and Barracuda, and returns a real result on addresses behind them.`,
  policies:
    'Giggal.ai credits never expire, it does not charge for unknown results, and every list starts on 1,000 free credits with no card.',
}

export function buildComparison(aSlug: string, bSlug: string): Comparison {
  const a = getCompetitor(aSlug)
  const b_ = getCompetitor(bSlug)
  const pa = getProfile(aSlug)
  const pb = getProfile(bSlug)
  const A = a.name
  const B = b_.name

  const rows: CmpRow[] = [
    { label: 'Category', a: t(pa.category), b: t(pb.category), giggal: t('Catch-all and SEG verifier') },
    { label: 'Resolves catch-all', a: b(a.resolvesCatchAll), b: b(b_.resolvesCatchAll), giggal: b(true) },
    {
      label: 'Catch-all cost',
      a: t(a.catchAllCreditCost),
      b: t(b_.catchAllCreditCost),
      giggal: t(GIGGAL.catchAllCreditCost),
    },
    {
      label: 'Secure email gateways',
      a: b(a.advertisesSegSupport),
      b: b(b_.advertisesSegSupport),
      giggal: t(`${GIGGAL.segGatewayCount} gateways`),
    },
    { label: 'Price at 10,000', a: t(priceCell(a, 10000)), b: t(priceCell(b_, 10000)), giggal: t(giggalPrice(10000)) },
    { label: 'Price at 100,000', a: t(priceCell(a, 100000)), b: t(priceCell(b_, 100000)), giggal: t(giggalPrice(100000)) },
    { label: 'Price at 1,000,000', a: t(priceCell(a, 1000000)), b: t(priceCell(b_, 1000000)), giggal: t(giggalPrice(1000000)) },
    { label: 'Credit expiry', a: t(a.creditsExpire), b: t(b_.creditsExpire), giggal: t(GIGGAL.creditsExpire) },
    { label: 'Free tier', a: t(a.freeTier), b: t(b_.freeTier), giggal: t(GIGGAL.freeTier) },
    { label: 'Charges for unknown results', a: b(a.chargesForUnknown), b: b(b_.chargesForUnknown), giggal: b(false) },
    { label: 'Accuracy figure', a: t(a.claimedAccuracy), b: t(b_.claimedAccuracy), giggal: t(GIGGAL.claimedAccuracy) },
  ]

  const intro =
    `Choosing between ${A} and ${B} usually comes down to how each one deals with the addresses your list actually struggles with. ` +
    `${A} is ${lc(pa.oneLiner)} ${B} is ${lc(pb.oneLiner)} ` +
    `Below we walk through how they price, what they do with catch-all addresses, and how accurate each claims to be, and we show where Giggal.ai lands on the same list so you have a third number to weigh.`

  const caResolve = (c: Competitor) =>
    c.resolvesCatchAll
      ? `${c.name} returns a result on catch-all addresses`
      : `${c.name} flags catch-all without confirming the mailbox`

  const sections: CompareSection[] = [
    {
      heading: `How ${A} and ${B} handle catch-all`,
      prose: `${A} ${lc(pa.catchAllApproach)} ${B} ${lc(pb.catchAllApproach)} Catch-all domains accept mail for every name, so a normal check cannot tell a real mailbox from a dead one, and this is usually where a list quietly loses good contacts.`,
      giggalEdge: GIGGAL_EDGE.catchAll,
      giggalEdgeLabel: 'How Giggal.ai handles catch-all.',
    },
    {
      heading: `${A} vs ${B} pricing`,
      prose: `${priceSentence(a)}. ${priceSentence(b_)}. Both numbers come straight from each vendor's own pricing, so put them next to the volume you send each month.`,
      giggalEdge: GIGGAL_EDGE.pricing,
      giggalEdgeLabel: 'How Giggal.ai prices it.',
    },
    {
      heading: 'Secure email gateway support',
      prose: `On enterprise domains a gateway like Mimecast, Proofpoint or Barracuda often sits in front of the mailbox and blocks the usual check. ${A} ${a.advertisesSegSupport ? 'says it verifies behind those gateways' : 'does not cover those gateways'}, and ${B} ${b_.advertisesSegSupport ? 'does too' : 'does not'}.`,
      giggalEdge: GIGGAL_EDGE.seg,
      giggalEdgeLabel: 'How Giggal.ai handles gateways.',
    },
    {
      heading: 'Credits, free tiers and expiry',
      prose: `${expiryClause(a)}, and ${freeClause(a)}. ${expiryClause(b_)}, and ${freeClause(b_)}.`,
      giggalEdge: GIGGAL_EDGE.policies,
      giggalEdgeLabel: 'How Giggal.ai treats credits.',
    },
  ]

  const faqs: FaqItem[] = [
    {
      q: `Which should I choose, ${A} or ${B}?`,
      a: `It depends on your list. ${A} suits ${lc(pa.bestFor)} ${B} suits ${lc(pb.bestFor)} If catch-all resolution and secure email gateway coverage matter most, Giggal.ai handles both at $9.90 per 10,000.`,
    },
    {
      q: `How do ${A} and ${B} compare on price?`,
      a: `${priceSentence(a)}. ${priceSentence(b_)}. Giggal.ai is $9.90 at 10,000, $76 at 100,000 and $680 at a million, with credits that never expire.`,
    },
    {
      q: `Do ${A} or ${B} resolve catch-all addresses?`,
      a: `${caResolve(a)}. ${caResolve(b_)}. Giggal.ai resolves catch-all to a real deliverable or undeliverable result at 1.5 credits in a run and also verifies behind ${GIGGAL.segGatewayCount} secure email gateways.`,
    },
    {
      q: `Is there a better option than ${A} or ${B}?`,
      a: `Giggal.ai is built for the hard addresses both tend to skip. It resolves catch-all to a real result at 1.5 credits, verifies behind ${GIGGAL.segGatewayCount} secure email gateways, and publishes a flat price of $9.90 per 10,000 with credits that never expire. You can run a list on 1,000 free credits, no card.`,
    },
    {
      q: `Can I try Giggal.ai before deciding?`,
      a: `Yes. Giggal.ai gives 1,000 free credits with no card, usable on a bulk upload, so you can run the same list you would test in ${A} or ${B} and compare the catch-all rows.`,
    },
  ]

  return {
    a,
    b: b_,
    pa,
    pb,
    rows,
    intro,
    sections,
    faqs,
    metaTitle: `${A} vs ${B} Comparison | Giggal.ai`,
    ogTitle: `${A} vs ${B}, and how Giggal.ai compares`,
    metaDescription: `Comparing ${A} and ${B}? See how the two email verifiers line up on price, catch-all handling and accuracy, plus where Giggal.ai lands on the same list.`,
  }
}
