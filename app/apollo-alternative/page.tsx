import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

const cfg: AltPageConfig = {
  slug: 'apollo',
  metaTitle: 'Apollo Alternative | Giggal.ai',
  ogTitle: 'An Apollo Alternative for Dedicated Email Verification',
  desc: 'Apollo is a sales platform where verification is one feature; it claims 91% on catch-all. Giggal.ai is a dedicated verifier that resolves catch-all and SEG, at $9.90 per 10,000. 1,000 free credits, no card.',
  h1Article: 'An',
  h1Tail: 'for dedicated verification',
  heroP:
    'Apollo is a sales-intelligence platform, and verification is one feature of a large contact database and outreach suite. It markets catch-all resolution at 91%. Giggal.ai is a dedicated verifier that resolves catch-all at 98.5% and verifies behind secure email gateways, pay-as-you-go from $9.90 per 10,000 with no per-seat cost.',
  bluf: [
    { k: 'Focus', v: 'Apollo is a database and sales platform; we are a dedicated verifier, and add SEG.' },
    { k: 'Catch-all', v: 'Apollo claims 91% on catch-all; we resolve it at 98.5% and verify behind SEGs too.' },
    { k: 'Billing', v: 'Apollo prices per seat by subscription; we are pay-as-you-go from $9.90 at 10k.' },
    { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
  ],
  catchAllHeading: 'How Giggal.ai and Apollo handle catch-all',
  catchAllProse:
    'Apollo runs its own catch-all handling and markets a process that distinguishes valid from invalid on catch-all domains, at a stated 91% accuracy, though it still keeps a Catch-all label. Giggal.ai resolves catch-all at 98.5% and goes further to verify addresses behind secure email gateways such as Mimecast, Proofpoint and Barracuda, which Apollo does not cover.',
  pricingHeading: 'Apollo pricing vs Giggal.ai',
  pricingProse:
    'Apollo prices per user by subscription: a free plan, then Basic at $49, Professional at $79 and Organization at $119 per user each month on annual billing, with verification drawing on monthly credits. Giggal.ai is pay-as-you-go at $9.90 for 10,000, $76 for 100,000 and $680 for a million, with no per-seat cost and credits that never expire.',
  featureNote: 'Apollo is priced per user seat and bundles fair-use-unlimited verification, so there is no per-volume price; its column reads Per seat.',
  testStep3: 'Compare the catch-all results, and check the gateway addresses Apollo does not cover.',
  ctaHeadline: 'Dedicated verification, catch-all and SEG, no per-seat cost',
  faqs: [
    {
      q: 'Is Giggal.ai a good Apollo alternative for verification?',
      a: 'If verification is what you need, yes. Giggal.ai is a dedicated verifier that resolves catch-all at 98.5% and verifies behind secure email gateways, pay-as-you-go from $9.90 per 10,000. Apollo is a full contact database and sales-engagement platform, which Giggal.ai is not.',
    },
    {
      q: 'Does Apollo resolve catch-all?',
      a: 'Apollo markets a process that distinguishes valid from invalid on catch-all domains, at a stated 91% accuracy, while still keeping a Catch-all label. Giggal.ai resolves catch-all at 98.5% and also verifies behind secure email gateways, which Apollo does not.',
    },
    {
      q: 'Does Giggal.ai include a contact database like Apollo?',
      a: 'No. Giggal.ai verifies email addresses; it does not provide a prospecting database or a dialer. If you need data and outreach, Apollo fits. If you need clean verification, Giggal.ai is built for it.',
    },
    {
      q: 'How does the pricing compare?',
      a: 'Apollo prices per user by subscription, with verification drawing on monthly credits. Giggal.ai is pay-as-you-go at $9.90 per 10,000, with no per-seat cost and credits that never expire.',
    },
    {
      q: 'Can I try Giggal.ai before switching?',
      a: 'Yes. 1,000 free credits, no card, on a bulk upload. Run a catch-all-heavy list through both and compare the results.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function ApolloAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
