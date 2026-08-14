import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

const cfg: AltPageConfig = {
  slug: 'hunter',
  metaTitle: 'Hunter Alternative | Giggal.ai',
  ogTitle: 'A Hunter Alternative Built for Email Verification',
  desc: 'Hunter is a finder-first platform where verification is bundled into monthly plans. Giggal.ai is a dedicated verifier that resolves catch-all, at $9.90 per 10,000. 1,000 free credits, no card.',
  h1Article: 'A',
  h1Tail: 'built for verification',
  heroP:
    'Hunter is an email finder first, with verification bundled into its monthly plans. If verification is the job you actually need, Giggal.ai is a dedicated verifier that resolves catch-all, at a published $9.90 per 10,000, with no subscription.',
  bluf: [
    { k: 'Focus', v: 'Hunter is a finder with verification attached; we do verification, and resolve catch-all.' },
    { k: 'Catch-all', v: 'We return valid or invalid. Hunter flags accept-all and stops.' },
    { k: 'Billing', v: 'Hunter bundles verification into $49-plus monthly plans; we are pay-as-you-go from $9.90 at 10k.' },
    { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
  ],
  catchAllHeading: 'How Giggal.ai verifies catch-all addresses',
  catchAllProse:
    'Hunter verifies as part of a finding-and-outreach workflow, and on catch-all domains it flags the address accept-all without confirming the mailbox. Giggal.ai is built for verification, so it routes those addresses down a separate path and returns one of four results, and it verifies behind secure email gateways too.',
  pricingHeading: 'Hunter pricing vs Giggal.ai',
  pricingProse:
    'Hunter is sold as a monthly subscription with pooled credits, and each verification spends half a credit from the plan allowance. The smallest plan that covers 10,000 verifications a month is Growth at $149 a month; 100,000 and a million a month run past the standard plans and are quoted by sales. Giggal.ai is pay-as-you-go at $9.90 for 10,000, $76 for 100,000 and $680 for a million, with credits that never expire and no monthly commitment.',
  featureNote: 'Hunter is billed monthly, so its figure is the smallest plan that covers that volume, not a one-time price. Higher volumes are enterprise-quoted.',
  testStep3: 'Look at the rows Hunter flagged accept-all. Count how many come back real.',
  ctaHeadline: 'A dedicated verifier, without the subscription',
  faqs: [
    {
      q: 'Is Giggal.ai a good Hunter alternative for verification?',
      a: 'If verification is what you need, yes. Giggal.ai is a dedicated verifier that resolves catch-all and verifies behind secure email gateways, priced pay-as-you-go from $9.90 per 10,000 with no subscription. Hunter also finds emails, which Giggal.ai does not.',
    },
    {
      q: 'Does Giggal.ai find email addresses like Hunter?',
      a: 'No. Giggal.ai is a verifier, not a finder. If you need to discover contacts and run outreach from one tool, Hunter’s platform is the better fit. If you need clean verification, Giggal.ai is built for it.',
    },
    {
      q: 'How does Giggal.ai handle catch-all where Hunter flags it?',
      a: 'Hunter flags catch-all as accept-all without confirming the mailbox. Giggal.ai returns a real deliverable or undeliverable result, at 1.5 credits in a run or 2 standalone.',
    },
    {
      q: 'What does the pricing look like side by side?',
      a: 'Hunter bundles verification into monthly plans from $49, spending half a credit per verification. Giggal.ai is pay-as-you-go at $9.90 per 10,000, with no monthly commitment and credits that never expire.',
    },
    {
      q: 'Can I try Giggal.ai before switching?',
      a: 'Yes. 1,000 free credits, no card, on a bulk upload. Run a list Hunter flagged accept-all and see how many resolve to a real result.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function HunterAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
