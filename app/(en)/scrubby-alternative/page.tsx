import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

// Rewritten 2026-11-27 and taken out of noindex. Semrush US: "scrubby ai" 40.
// Facts checked on scrubby.io the same day (pay-as-you-go read in Chrome).
const cfg: AltPageConfig = {
  slug: 'scrubby',
  metaTitle: 'Scrubby Alternative: Scrubby.io Pricing Compared | Giggal.ai',
  ogTitle: 'Scrubby alternative for catch-all and gateway emails',
  desc: 'Scrubby charges $0.008 per credit, and Deep Verification takes up to 72 hours. Giggal.ai checks catch-all and gateway emails at $9.90 per 10,000.',
  h1Article: 'A',
  h1Tail: 'at $9.90 per 10,000 emails',
  heroP:
    'Scrubby verifies catch-all and gateway-protected emails, the same hard addresses Giggal.ai focuses on. The differences are price and how each check works. Scrubby charges $0.008 per credit. Giggal.ai charges $9.90 per 10,000.',
  bluf: [
    { k: 'Price', v: '10,000 credits cost $80 on Scrubby and $9.90 on Giggal.ai.' },
    { k: 'Deep check', v: 'Scrubby Deep Verification costs 3 credits and sends real emails. Final results take up to 72 hours.' },
    { k: 'Free credits', v: 'Scrubby gives 200 free credits. Giggal.ai gives 1,000. Neither needs a card.' },
    { k: 'Refunds', v: 'Scrubby says all purchases are final. Giggal.ai refunds the credit on unknown results.' },
  ],
  about: {
    heading: 'What is Scrubby?',
    paragraphs: [
      'Scrubby is an email verification tool from scrubby.io. It focuses on catch-all and risky addresses that other verifiers cannot confirm.',
      'It has two checks. Quick Verification costs 1 credit and covers standard, catch-all and SEG-protected domains. Deep Verification costs 3 credits. Scrubby sends real emails to each address and gives final results within 72 hours.',
      'Scrubby connects to tools such as Clay, Instantly, Smartlead, Apollo and HubSpot.',
    ],
  },
  reasons: {
    heading: 'Why teams look for a Scrubby alternative',
    items: [
      { k: 'Price', v: 'Pay-as-you-go is $0.008 per credit. 10,000 checks cost $80, and 100,000 cost $800.' },
      { k: 'Wait time', v: 'Deep Verification results take up to 72 hours.' },
      { k: 'Real emails', v: 'Deep Verification sends real emails to each address on your list.' },
      { k: 'No refunds', v: 'Scrubby says all purchases are final.' },
    ],
  },
  catchAllHeading: 'Scrubby vs Giggal.ai on catch-all and gateway emails',
  catchAllProse:
    'Scrubby and Giggal.ai both return a result on catch-all and gateway-protected addresses. Giggal.ai charges 1 credit for every address, with no deeper tier. It names 15 gateways it checks behind, including Proofpoint, Mimecast and Barracuda. When it cannot get an answer, the credit is refunded.',
  pricingHeading: 'Scrubby pricing vs Giggal.ai',
  pricingProse:
    'Scrubby pay-as-you-go is $0.008 per credit, so 10,000 credits cost $80. Monthly plans are Starter at $47 for 6,000 credits, Growth at $97 for 15,000 and Pro at $497 for 100,000. Pay-as-you-go credits never expire, and plan credits roll over.',
  pricingExtra: [
    'A Deep Verification uses 3 credits, so 10,000 deep checks use 30,000 credits. Giggal.ai sells 10,000 credits for $9.90 and 100,000 for $76.',
  ],
  strengths: {
    heading: 'Where Scrubby is a good fit',
    intro: 'Scrubby has strengths worth knowing:',
  },
  others: {
    heading: 'Other Scrubby alternatives',
    intro: 'These tools also return a result on catch-all addresses. Prices are from each vendor’s site on 27 November 2026.',
    items: [
      { name: 'no2bounce', text: 'Sends test messages to confirm catch-all mailboxes. 10,000 credits cost $20 and never expire.' },
      { name: 'Listmint', text: 'Checks catch-all addresses by hand. Starter is $99 a month for 20,000 standard and 5,000 catch-all credits.' },
      { name: 'Allegrow', text: 'Returns valid or invalid on catch-all contacts and names Proofpoint and Mimecast. Starter is $99 a month.' },
    ],
  },
  testHeading: 'Test Giggal.ai on your catch-all addresses',
  testStep3: 'Compare the results with Scrubby’s for the same catch-all addresses.',
  ctaHeadline: 'Check the same hard addresses at $9.90 per 10,000',
  faqs: [
    {
      q: 'How much does Scrubby cost?',
      a: 'Scrubby pay-as-you-go is $0.008 per credit, or $80 for 10,000. Monthly plans start at $47 for 6,000 credits. Deep Verification uses 3 credits per email.',
    },
    {
      q: 'What is Scrubby Deep Verification?',
      a: 'It is Scrubby’s slower check for hard addresses. It costs 3 credits, sends real emails to each address and gives final results within 72 hours.',
    },
    {
      q: 'Does Scrubby have a free trial?',
      a: 'Yes. Scrubby gives 200 free credits with no card. Giggal.ai gives 1,000 free credits with no card.',
    },
    {
      q: 'Is Giggal.ai a good Scrubby alternative?',
      a: 'Yes. Both return a result on catch-all and gateway addresses. Giggal.ai costs $9.90 per 10,000 credits and refunds unknown results.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function ScrubbyAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
