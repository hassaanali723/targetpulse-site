// ─────────────────────────────────────────────────────────────────────────────
// Textual "profile" DB for the programmatic /compare pages. This holds only the
// qualitative fields the comparison engine needs; every hard fact (price,
// catch-all cost, SEG, accuracy, expiry, free tier) still comes from
// competitorPricing.ts, the audited source of truth. A future competitor joins
// the /compare system by adding one entry here plus its pricing entry there.
//
// Writing rules (site-wide): no em dashes, no "cheaper/cheapest" verdicts.
// catchAllApproach is written verb-first ("Marks…", "Resolves…") so the engine
// can prefix it with the vendor name. bestFor is a noun phrase ("Teams that…").
// ─────────────────────────────────────────────────────────────────────────────

export type CompareCategory =
  | 'Pure verifier'
  | 'Catch-all specialist'
  | 'Enterprise suite'
  | 'ESP auto-cleaner'
  | 'Finder & outreach platform'
  | 'Sales intelligence platform'

export interface CompareProfile {
  category: CompareCategory
  oneLiner: string // full descriptor, engine may lower-case the first letter
  catchAllApproach: string // verb-first sentence
  limitations: string[] // 2 honest, specific limits
  bestFor: string // noun phrase: who it suits
}

export const COMPARE_PROFILES: Record<string, CompareProfile> = {
  zerobounce: {
    category: 'Pure verifier',
    oneLiner: 'A long-established verifier wrapped in a broad deliverability suite.',
    catchAllApproach:
      'Scores catch-all addresses from 1 to 10 with AI rather than confirming the mailbox.',
    limitations: ['Sits at the high end on price', 'Catch-all is scored, not resolved to valid or invalid'],
    bestFor: 'Teams that want verification alongside inbox placement, DMARC and blacklist monitoring.',
  },
  neverbounce: {
    category: 'Pure verifier',
    oneLiner: 'A verifier known for deep CRM integrations and cleaning lists inside your stack.',
    catchAllApproach: 'Marks accept-all addresses and resolves only a small share of them.',
    limitations: ['Credits expire 12 months after purchase', 'Resolved 8% of catch-alls in the LeadMagic test'],
    bestFor: 'Teams cleaning lists natively inside Salesforce, HubSpot or Marketo.',
  },
  bounceban: {
    category: 'Catch-all specialist',
    oneLiner: 'A verifier built to confirm catch-all and gateway-protected addresses without sending mail.',
    catchAllApproach:
      'Resolves catch-all addresses at a flat 1 credit, and names Mimecast, Proofpoint and Barracuda.',
    limitations: [
      'Free tier is single checks only, so you cannot test a bulk list',
      'Prices through a calculator rather than a public table',
    ],
    bestFor: 'Teams whose lists are heavy on catch-all and gateway-protected domains.',
  },
  millionverifier: {
    category: 'Pure verifier',
    oneLiner: 'A high-volume verifier with a very low headline rate and a bounce guarantee.',
    catchAllApproach:
      'Runs a Catch-All Verifier that resolves roughly a third and marks the rest Risky.',
    limitations: [
      'Resolved 5% of catch-alls in the LeadMagic test, the lowest measured',
      'Catch-all is largely returned as Risky, not confirmed',
    ],
    bestFor: 'High-volume senders who want a low per-credit rate and do not need catch-all resolved.',
  },
  reoon: {
    category: 'Pure verifier',
    oneLiner: 'A low-cost verifier with a generous daily free allowance and auto-refunds.',
    catchAllApproach: 'Reports catch-all as a status without confirming the mailbox.',
    limitations: ['Does not resolve catch-all', 'Does not advertise gateway verification'],
    bestFor: 'Solo senders and small teams that verify continuously and want free daily credits.',
  },
  debounce: {
    category: 'Pure verifier',
    oneLiner: 'A verifier with strong signup-form and WordPress validation, and free duplicates.',
    catchAllApproach: 'Sells catch-all verification as a separate product at 10 credits per address.',
    limitations: [
      'Catch-all is billed as a 10-credit add-on',
      'Resolved 6% of catch-alls in the LeadMagic test',
    ],
    bestFor: 'Teams that mostly need standard verification with strong form and WordPress tools.',
  },
  bouncer: {
    category: 'Pure verifier',
    oneLiner: 'A premium verifier with high review scores, a toxicity check and SOC 2 Type II.',
    catchAllApproach: 'Resolves catch-all on major providers through Deep Catch-All Verification.',
    limitations: ['Priced at the higher end', 'Does not advertise secure email gateway verification'],
    bestFor: 'Compliance-focused teams that value review scores and a spam-trap toxicity check.',
  },
  emailable: {
    category: 'Pure verifier',
    oneLiner: 'A fast verifier with a large free tier and around 90 integrations.',
    catchAllApproach: 'Marks accept-all addresses Risky without confirming the mailbox.',
    limitations: ['Does not resolve catch-all', 'Flags accept-all rather than returning a real result'],
    bestFor: 'Teams that want fast bulk speed and a generous free tier.',
  },
  clearout: {
    category: 'Pure verifier',
    oneLiner: 'A verifier bundled with an email finder and phone-number validation.',
    catchAllApproach: 'Returns catch-all as its own status, marked risky, without confirming the mailbox.',
    limitations: ['Does not resolve catch-all', 'Does not advertise gateway verification'],
    bestFor: 'Teams that want finding, phone validation and verification in one tool.',
  },
  kickbox: {
    category: 'Pure verifier',
    oneLiner: 'A developer-first verifier with a clean real-time API and a deliverability score.',
    catchAllApproach: 'Flags accept-all addresses with a field rather than resolving them.',
    limitations: ['Does not resolve catch-all', 'Does not publish a credit-expiry policy'],
    bestFor: 'Developers building verification into an app through a well-documented API.',
  },
  emaillistverify: {
    category: 'Pure verifier',
    oneLiner: 'A low-cost verifier with free utilities and a long-established pay-as-you-go model.',
    catchAllApproach: 'Returns accept-all addresses as ok_for_all without confirming the mailbox.',
    limitations: ['Does not resolve catch-all', 'Prices its million tier by quote'],
    bestFor: 'Budget-conscious teams that want a simple verifier with free extra tools.',
  },
  myemailverifier: {
    category: 'Pure verifier',
    oneLiner: 'A low-cost verifier with 100 free credits a day and bonus-credit promotions.',
    catchAllApproach: 'Returns catch-all as a separate status without confirming the mailbox.',
    limitations: ['Does not resolve catch-all', 'Does not advertise gateway verification'],
    bestFor: 'Cost-sensitive teams that verify daily and want a standing free allowance.',
  },
  briteverify: {
    category: 'Enterprise suite',
    oneLiner: "Validity's enterprise verifier, built for high throughput inside a deliverability suite.",
    catchAllApproach: 'Groups accept-all addresses as risky without confirming the mailbox.',
    limitations: ['Self-serve pricing has moved to a sales quote', 'Does not resolve catch-all'],
    bestFor: 'Large organisations already standardised on Validity.',
  },
  scrubby: {
    category: 'Catch-all specialist',
    oneLiner: 'A specialist that recovers catch-all and gateway-protected addresses others skip.',
    catchAllApproach: 'Resolves catch-all through a deep check at 3 credits per address.',
    limitations: ['Deep catch-all costs 3 credits per address', 'Prices its million tier by quote'],
    bestFor: 'Teams whose main job is recovering catch-all and risky addresses.',
  },
  quickemailverification: {
    category: 'Pure verifier',
    oneLiner: 'An established verifier with a daily free allowance and a real-time API.',
    catchAllApproach: 'Returns catch-all as a status without confirming the mailbox.',
    limitations: ['Does not resolve catch-all', 'Does not advertise gateway verification'],
    bestFor: 'Teams that want a steady free daily allowance and a proven API.',
  },
  mailfloss: {
    category: 'ESP auto-cleaner',
    oneLiner: 'A subscription that auto-cleans your email platform list every day.',
    catchAllApproach: 'Runs a standard check that flags catch-all without confirming the mailbox.',
    limitations: ['Does not resolve catch-all', 'Built around your ESP rather than one-off uploads'],
    bestFor: 'Teams that want hands-off daily cleaning wired into their email platform.',
  },
  bounceless: {
    category: 'Catch-all specialist',
    oneLiner: 'A low-cost verifier that now resolves catch-all through a deep add-on.',
    catchAllApproach: 'Resolves catch-all through a deep add-on at 5 credits per address, 3 if cached.',
    limitations: ['Deep catch-all costs 5 credits per address', 'Does not advertise gateway verification'],
    bestFor: 'Teams that want low pay-as-you-go pricing with catch-all resolution added on.',
  },
  hunter: {
    category: 'Finder & outreach platform',
    oneLiner: 'A finder-first platform where verification is bundled into monthly plans.',
    catchAllApproach: 'Attempts accept-all confirmation on some major providers, otherwise flags it.',
    limitations: [
      'Verification is a monthly subscription, not one-off credits',
      'Higher volumes need an enterprise quote',
    ],
    bestFor: 'Teams that want to find and verify prospects inside one subscription.',
  },
  snovio: {
    category: 'Finder & outreach platform',
    oneLiner: 'A finder, verifier and outreach suite billed on pooled monthly credits.',
    catchAllApproach: 'Labels catch-all addresses unknown rather than confirming the mailbox.',
    limitations: ['Verification spends monthly plan credits', 'Does not resolve catch-all'],
    bestFor: 'Teams that want finding, verifying and sending in one platform.',
  },
  apollo: {
    category: 'Sales intelligence platform',
    oneLiner: 'A per-seat sales platform with a large contact database and bundled verification.',
    catchAllApproach:
      'Markets a seven-step process that distinguishes valid from invalid on catch-all at 91%.',
    limitations: [
      'Priced per user seat, with no per-volume verification price',
      'Verification is one feature of a much larger suite',
    ],
    bestFor: 'Sales teams that need a contact database and outreach, not just verification.',
  },

  // ── Catch-all specialists and finder platforms ────────────────────────────
  // Added alongside their competitorPricing entries. Every qualitative line
  // below is drawn from the vendor's own live pages, same as the block above.
  findymail: {
    category: 'Finder & outreach platform',
    oneLiner: 'An email finder that verifies what it finds, sold as a single monthly plan.',
    catchAllApproach:
      'Verifies catch-all addresses rather than flagging them, and reports recovering around 23% more valid emails that way.',
    limitations: [
      'Publishes one $99 plan; anything above 5,000 verifier credits a month is quoted individually',
      'Does not advertise support for secure email gateways',
    ],
    bestFor: 'Teams that need to find addresses and verify them on one subscription.',
  },
  leadmagic: {
    category: 'Sales intelligence platform',
    oneLiner:
      'An enrichment platform where verification shares one credit pool with mobile numbers, company data and job changes.',
    catchAllApproach:
      'Resolves catch-all addresses, and publishes its own benchmark data on how many it recovers.',
    limitations: [
      'Credits are spent across every enrichment endpoint, so verification competes with the rest',
      'Does not publish a catch-all credit cost or a named gateway list',
    ],
    bestFor: 'Teams that want finding, enrichment and verification billed as one subscription.',
  },
  allegrow: {
    category: 'Catch-all specialist',
    oneLiner: 'A catch-all verifier with sender reputation and inbox placement tooling attached.',
    catchAllApproach:
      'Resolves catch-all addresses to valid or invalid through a signal-based process rather than SMTP probing, and names Mimecast and Proofpoint.',
    limitations: [
      'Sold as a monthly seat and allowance plan rather than per verification',
      'Add-on credits are billed separately once the plan allowance runs out',
    ],
    bestFor: 'Teams that want catch-all resolution and sender reputation monitoring from one vendor.',
  },
  listmint: {
    category: 'Catch-all specialist',
    oneLiner: 'A verifier that reports catch-all outcomes as their own explicit status codes.',
    catchAllApproach:
      'Resolves catch-all addresses and returns them as catch_all_valid or catch_all_invalid.',
    limitations: [
      'Catch-all is metered from a separate, smaller credit pool than standard verifications',
      'Builds its prices in the browser, so the figures cannot be read from the page source',
    ],
    bestFor: 'Teams that want catch-all outcomes as distinct result codes they can filter on.',
  },
  anymailfinder: {
    category: 'Finder & outreach platform',
    oneLiner: 'A long-running email finder that verifies catch-all addresses instead of skipping them.',
    catchAllApproach:
      'Verifies catch-all addresses rather than flagging them risky, and publishes a coverage figure next to its accuracy claim.',
    limitations: [
      'Credits stop rolling over and expire once the subscription ends',
      'Does not advertise support for secure email gateways',
    ],
    bestFor: 'Teams that need discovery and verification together and value a published coverage figure.',
  },
  no2bounce: {
    category: 'Catch-all specialist',
    oneLiner: 'A verifier built around catch-all detection with a published volume price ladder.',
    catchAllApproach:
      'Resolves catch-all addresses with no credit surcharge, and names Microsoft 365, Google Workspace, Proofpoint, Mimecast and Cisco.',
    limitations: [
      'Free tier is 100 credits, so testing a bulk list needs a purchase',
      'Names five mail platforms rather than a broader gateway list',
    ],
    bestFor: 'Teams with catch-all heavy lists that would rather not pay a per-address surcharge.',
  },
  instantly: {
    category: 'Finder & outreach platform',
    oneLiner: 'A cold email sending platform where verification is one step inside the campaign flow.',
    catchAllApproach:
      'Returns catch-all addresses as Valid, Invalid or Risky, and does not contact the Risky ones by default.',
    limitations: [
      'Verification credits are shared with lead data and sending',
      'Higher volume tiers are published as a range rather than a fixed price',
    ],
    bestFor: 'Teams that want verification to happen automatically as leads enter a campaign.',
  },
}

export function getProfile(slug: string): CompareProfile {
  const p = COMPARE_PROFILES[slug]
  if (!p) throw new Error(`No compare profile for slug: ${slug}`)
  return p
}
