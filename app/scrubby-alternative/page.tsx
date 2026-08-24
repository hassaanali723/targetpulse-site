import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

const cfg: AltPageConfig = {
  slug: 'scrubby',
  metaTitle: 'Scrubby Alternative | Giggal.ai',
  ogTitle: 'A Scrubby Alternative With Flat, Published Pricing',
  desc: 'Scrubby resolves catch-all and SEG too, at $0.008 a credit and 3 credits per catch-all ($0.024/ea), with a million priced by quote. Giggal.ai is $9.90 per 10,000 and a flat 1 credit per catch-all ($0.00099/ea), every tier published. 1,000 free credits, no card.',
  h1Article: 'A',
  h1Tail: 'with flat, published pricing',
  heroP:
    'Scrubby specialises in validating catch-all and SEG-protected addresses, and so does Giggal.ai. They differ on price and credit cost. Scrubby is $0.008 a credit, $80 per 10,000, and its deep catch-all check is 3 credits per email ($0.024 each). Giggal.ai is $9.90 per 10,000 and resolves catch-all at a flat 1 credit ($0.00099 each).',
  bluf: [
    { k: 'Catch-all', v: 'Both resolve it. Scrubby bills 3 credits per catch-all ($0.024); we charge 1 credit ($0.00099).' },
    { k: 'Price', v: 'Scrubby is $80 at 10k against our $9.90. We publish flat tiers.' },
    { k: 'Gateways', v: 'Both verify behind gateways; we detect 15 named ones and price it flat.' },
    { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
  ],
  catchAllHeading: 'Where Giggal.ai and Scrubby differ',
  catchAllProse:
    'Scrubby and Giggal.ai take the same stand on the hard addresses: both validate catch-all and SEG-protected mailboxes that other tools return as unknown. Where they part is cost. Scrubby resolves catch-all through a deep check billed at 3 credits per email, and at $0.008 a credit that is roughly $0.024 each. Giggal.ai resolves catch-all at a flat 1 credit from a $9.90-per-10,000 base (under $0.001 each).',
  pricingHeading: 'Scrubby pricing vs Giggal.ai',
  pricingProse:
    'Scrubby pay-as-you-go is a flat $0.008 a credit, $80 at 10,000 and $800 at 100,000; a million is priced on an enterprise demo call. Giggal.ai is $9.90, $76 and $680 at those volumes, published in full. On catch-all specifically, Giggal.ai charges a flat 1 credit per address against Scrubby’s 3.',
  featureNote: 'Scrubby prices a million by enterprise quote, so that tier reads Quote only. Its deep (catch-all) verification is 3 credits per email.',
  testStep3: 'Compare the catch-all cost, 1 credit here against 3 on Scrubby.',
  ctaHeadline: 'The same hard addresses, priced flat and in full',
  faqs: [
    {
      q: 'Does Scrubby resolve catch-all like Giggal.ai?',
      a: 'Yes, that is its specialty, and it verifies SEG-protected addresses too. Both tools return a real result where others return unknown. The difference is price: Scrubby’s deep catch-all check is 3 credits per email at $0.008 a credit ($0.024/ea), while Giggal.ai resolves catch-all at a flat 1 credit from a $9.90-per-10,000 base ($0.00099/ea).',
    },
    {
      q: 'How do the two compare on price?',
      a: 'Scrubby pay-as-you-go is $80 at 10,000 and $800 at 100,000, with a million priced by quote. Giggal.ai is $9.90, $76 and $680 at the same volumes, and its catch-all is a flat 1 credit per address against Scrubby’s 3.',
    },
    {
      q: 'What is Scrubby better at?',
      a: 'Scrubby is a focused specialist for catch-all and risky recovery, with a 200-credit free tier and a 98.7% accuracy claim. If that single job is all you need, it does it well.',
    },
    {
      q: 'Does Giggal.ai verify behind secure email gateways too?',
      a: 'Yes. Giggal.ai detects 15 gateways, including Mimecast, Proofpoint and Barracuda, and returns a real result on addresses behind them, at the same flat pricing.',
    },
    {
      q: 'Can I try Giggal.ai before switching?',
      a: 'Yes. 1,000 free credits, no card, on a bulk upload. Run a catch-all-heavy list through both and compare the cost per usable contact.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function ScrubbyAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
