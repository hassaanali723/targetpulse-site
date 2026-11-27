import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

// Rewritten 2026-11-27 on the shared scaffold and taken out of noindex. Semrush
// US: "my email verifier" 210. myemailverifier.com blocked our check on
// 2026-11-27 (Cloudflare), so its prices are from the 2026-08-12 check and the
// page says so.
const cfg: AltPageConfig = {
  slug: 'myemailverifier',
  metaTitle: 'MyEmailVerifier Alternative: Pricing and Catch-All | Giggal.ai',
  ogTitle: 'MyEmailVerifier alternative for B2B lists',
  desc: 'MyEmailVerifier gives 100 free credits a day but marks catch-all as a status. Giggal.ai returns a result on catch-all emails at $9.90 per 10,000.',
  h1Article: 'A',
  h1Tail: 'for B2B lists with catch-all domains',
  heroP:
    'MyEmailVerifier is a low-cost email verifier with 100 free credits a day. It marks catch-all addresses with their own status and does not confirm them. Giggal.ai returns a result on those addresses, at $9.90 per 10,000 emails.',
  bluf: [
    { k: 'Catch-all', v: 'MyEmailVerifier marks catch-all as a status. Giggal.ai returns a result.' },
    { k: 'Price', v: '10,000 credits cost $15 on MyEmailVerifier and $9.90 on Giggal.ai.' },
    { k: 'At volume', v: 'A million credits cost $349 on MyEmailVerifier and $680 on Giggal.ai.' },
    { k: 'Free credits', v: 'MyEmailVerifier gives 100 a day. Giggal.ai gives 1,000 once, with no card.' },
  ],
  about: {
    heading: 'What is MyEmailVerifier?',
    paragraphs: [
      'MyEmailVerifier is an email verification service from myemailverifier.com. It verifies bulk lists and single emails, and it has an API.',
      'It gives 100 free credits every day. Paid credits start at $4 for 1,000 and never expire.',
      'It returns catch-all addresses with a separate catch-all status. It does not confirm whether those mailboxes exist.',
    ],
  },
  reasons: {
    heading: 'Why people look for a MyEmailVerifier alternative',
    items: [
      { k: 'Catch-all', v: 'Catch-all addresses come back with no clear answer. On B2B lists, that can be a large share of the list.' },
      { k: 'Gateways', v: 'MyEmailVerifier does not list Proofpoint, Mimecast or other gateways it can check behind.' },
    ],
  },
  catchAllHeading: 'Catch-all emails: MyEmailVerifier vs Giggal.ai',
  catchAllProse:
    'Many company domains accept every address, so a basic check cannot tell a real address from a fake one. MyEmailVerifier marks these addresses catch-all and leaves the decision to you. Giggal.ai checks them further and returns one of the four results below, at 1 credit each.',
  pricingHeading: 'MyEmailVerifier pricing vs Giggal.ai',
  pricingProse:
    'MyEmailVerifier sells credits that never expire. At our August 2026 check, 1,000 credits cost $4, 10,000 cost $15, 100,000 cost $99 and a million cost $349.',
  pricingExtra: [
    'Giggal.ai sells 10,000 credits for $9.90, 100,000 for $76 and a million for $680. At a million, MyEmailVerifier costs less. Giggal.ai adds a result on catch-all and gateway addresses.',
  ],
  strengths: {
    heading: 'Where MyEmailVerifier is a good fit',
    intro: 'MyEmailVerifier is a good choice for some lists:',
  },
  others: {
    heading: 'Other MyEmailVerifier alternatives',
    intro: 'These verifiers also have low prices or free daily credits. Prices are from each vendor’s site on 27 November 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Also gives 100 free credits a day. 10,000 persistent credits cost $60.' },
      { name: 'Bounceless', text: 'Gives 1,000 free credits a month with a work email. 10,000 credits cost $29, with catch-all evidence included.' },
      { name: 'no2bounce', text: '10,000 credits cost $20 and never expire. It sends test messages to confirm catch-all mailboxes.' },
    ],
  },
  testHeading: 'Check your catch-all rows with Giggal.ai',
  testStep3: 'Compare the rows MyEmailVerifier marked catch-all.',
  ctaHeadline: 'Get a result on catch-all addresses',
  faqs: [
    {
      q: 'How much does MyEmailVerifier cost?',
      a: 'At our August 2026 check, 1,000 credits cost $4, 10,000 cost $15, 100,000 cost $99 and a million cost $349. The credits never expire.',
    },
    {
      q: 'Is MyEmailVerifier free?',
      a: 'It gives 100 free credits every day. The daily credits reset instead of ending after a trial. Giggal.ai gives 1,000 free credits once, with no card.',
    },
    {
      q: 'Does MyEmailVerifier verify catch-all emails?',
      a: 'It detects catch-all domains and returns a catch-all status. It does not confirm the mailbox. Giggal.ai returns a result on catch-all addresses at 1 credit each.',
    },
    {
      q: 'Do Giggal.ai credits expire?',
      a: 'No. Giggal.ai credits never expire. MyEmailVerifier credits never expire either.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function MyEmailVerifierAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
