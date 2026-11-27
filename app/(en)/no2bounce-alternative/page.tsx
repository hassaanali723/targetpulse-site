import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

// Rewritten 2026-11-27 and taken out of noindex. Ahrefs US: "no2bounce" 100.
// Prices read from the "All packages" table on no2bounce.com/pricing the same
// day; they rose since August ($17 to $20 at 10,000).
const cfg: AltPageConfig = {
  slug: 'no2bounce',
  metaTitle: 'no2bounce Alternative: Pricing and Catch-All | Giggal.ai',
  ogTitle: 'no2bounce alternative for catch-all email verification',
  desc: 'no2bounce charges $20 per 10,000 credits. Giggal.ai verifies catch-all and gateway emails at $9.90 per 10,000, with 1,000 free credits and no card.',
  h1Article: 'A',
  h1Tail: 'with a lower price per email',
  heroP:
    'no2bounce is an email verifier with pay-as-you-go credits that never expire. Giggal.ai works the same way. The differences are price, free credits and how each one checks catch-all addresses.',
  bluf: [
    { k: 'Price', v: '10,000 credits cost $20 on no2bounce and $9.90 on Giggal.ai.' },
    { k: 'At volume', v: 'A million credits cost $679 on no2bounce and $680 on Giggal.ai.' },
    { k: 'Free credits', v: 'no2bounce gives 100 free credits. Giggal.ai gives 1,000. Neither needs a card.' },
    { k: 'Expiry', v: 'Credits never expire on either tool.' },
  ],
  about: {
    heading: 'What is no2bounce?',
    paragraphs: [
      'no2bounce is an email verification service. It verifies single emails, bulk lists and emails sent through its API. The same credits also pay for its email finder, domain search and email scoring.',
      'For catch-all domains, no2bounce sends controlled test messages to confirm whether a mailbox exists. It claims 99.6% accuracy.',
      'It connects to HubSpot, Salesforce, Clay, Zapier, Google Sheets and Zoho CRM, among others.',
    ],
  },
  reasons: {
    heading: 'Why people look for a no2bounce alternative',
    items: [
      { k: 'Price at 10k', v: 'no2bounce charges $20 for 10,000 credits. Giggal.ai charges $9.90 for the same amount.' },
      { k: 'At 100k', v: '100,000 credits cost $149 on no2bounce and $76 on Giggal.ai.' },
      { k: 'Free test', v: 'no2bounce gives 100 free credits. Giggal.ai gives 1,000, enough to test a real sample.' },
    ],
  },
  catchAllHeading: 'How no2bounce and Giggal.ai check catch-all addresses',
  catchAllProse:
    'no2bounce sends controlled test messages through its own servers to confirm catch-all mailboxes. Giggal.ai returns a result on catch-all addresses at 1 credit each, with no separate fee. It also checks addresses behind 15 named secure email gateways, including Proofpoint, Mimecast and Barracuda.',
  pricingHeading: 'no2bounce pricing vs Giggal.ai',
  pricingProse:
    'no2bounce sells pay-as-you-go packs from 10,000 credits for $20 up to 50 million credits. 100,000 cost $149 and a million cost $679. Monthly plans are 15% less, and yearly plans are 20% less.',
  pricingExtra: [
    'Giggal.ai sells 10,000 credits for $9.90, 100,000 for $76 and a million for $680. There is no plan to choose. Credits never expire on either tool.',
  ],
  strengths: {
    heading: 'Where no2bounce is a good fit',
    intro: 'no2bounce is a fair choice for these needs:',
  },
  others: {
    heading: 'Other no2bounce alternatives',
    intro: 'These verifiers also sell credits that never expire. Prices are from each vendor’s site on 27 November 2026.',
    items: [
      { name: 'Bounceless', text: '10,000 credits cost $29 and a million cost $579. It gives 1,000 free credits a month with a work email.' },
      { name: 'QuickEmailVerification', text: '10,000 credits cost $60. It gives 100 free credits every day.' },
      { name: 'Scrubby', text: 'Pay-as-you-go is $0.008 per credit, with a Deep Verification option for hard addresses.' },
    ],
  },
  testHeading: 'Compare no2bounce and Giggal.ai on one list',
  testStep3: 'Compare the catch-all rows with what no2bounce returned.',
  ctaHeadline: 'The same job at a lower price per email',
  faqs: [
    {
      q: 'How much does no2bounce cost?',
      a: 'no2bounce pay-as-you-go packs start at $20 for 10,000 credits. 100,000 cost $149 and a million cost $679. Monthly plans are 15% less, and yearly plans are 20% less.',
    },
    {
      q: 'Is no2bounce free?',
      a: 'no2bounce gives 100 free credits with no card, and they never expire. After that you buy credits. Giggal.ai gives 1,000 free credits with no card.',
    },
    {
      q: 'Is Giggal.ai a good no2bounce alternative?',
      a: 'Yes. Both sell credits that never expire. Giggal.ai costs less at 10,000 and 100,000 credits, and gives ten times the free credits. At a million credits, the two prices are almost the same.',
    },
    {
      q: 'Do no2bounce credits expire?',
      a: 'No. Purchased no2bounce credits stay in your account until you use them. Subscription credits stay valid while the subscription is active. Giggal.ai credits never expire.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function No2bounceAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
