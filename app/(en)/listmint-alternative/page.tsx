import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

// Rewritten 2026-11-27 and taken out of noindex. Ahrefs US: "listmint" 150,
// "list mint" 10, "listmint pricing" 10. Plan figures read from the listmint.io
// home page the same day.
const cfg: AltPageConfig = {
  slug: 'listmint',
  metaTitle: 'Listmint Alternative: Catch-All Email Verification | Giggal.ai',
  ogTitle: 'Listmint alternative for catch-all email verification',
  desc: 'Listmint is $99 a month with 5,000 catch-all credits. Giggal.ai checks catch-all emails at 1 credit each, $9.90 per 10,000, with credits that never expire.',
  h1Article: 'A',
  h1Tail: 'with one pool of credits',
  heroP:
    'Listmint is an email verifier that focuses on catch-all addresses. It splits each plan into standard credits and a smaller pool of catch-all credits. Giggal.ai uses one pool. A catch-all check costs 1 credit, the same as any other email.',
  bluf: [
    { k: 'Credits', v: 'Listmint has two credit pools. Giggal.ai has one, at 1 credit per email.' },
    { k: 'Price', v: 'Listmint Starter is $99 a month. Giggal.ai is $9.90 for 10,000 credits, bought once.' },
    { k: 'Catch-all', v: 'Listmint Starter gives 5,000 catch-all credits a month. Giggal.ai has no separate limit.' },
    { k: 'Gateways', v: 'Giggal.ai checks addresses behind 15 named email gateways. Listmint does not name any.' },
  ],
  about: {
    heading: 'What is Listmint?',
    paragraphs: [
      'Listmint is an email verification service from listmint.io. It runs standard SMTP checks and a separate catch-all check. Listmint says it verifies catch-all addresses by hand.',
      'Its catch-all credits cost more than its standard credits. So each plan includes a large pool of standard credits and a smaller pool of catch-all credits.',
      'Listmint also says it can verify catch-all addresses in real time.',
    ],
  },
  reasons: {
    heading: 'Why people look for a Listmint alternative',
    items: [
      { k: 'Catch-all cap', v: 'Starter includes 5,000 catch-all credits a month. One large B2B list can use all of them.' },
      { k: 'Monthly plan', v: 'Listmint is billed monthly. Giggal.ai credits are bought once and never expire.' },
      { k: 'Volume', v: 'The largest listed plan is Agency, with 50,000 standard credits. More needs an Enterprise quote.' },
      { k: 'Gateways', v: 'Listmint does not name secure email gateways it can check behind.' },
    ],
  },
  catchAllHeading: 'Listmint vs Giggal.ai on catch-all addresses',
  catchAllProse:
    'Listmint bills catch-all checks from a separate pool of credits. On the $99 Starter plan, that pool is 5,000 a month. Giggal.ai has no separate pool. Every address costs 1 credit, catch-all or not. When Giggal.ai cannot get an answer, the result is unknown and the credit is refunded.',
  pricingHeading: 'Listmint pricing vs Giggal.ai',
  pricingProse:
    'Listmint Starter is $99 a month for 20,000 standard credits and 5,000 catch-all credits. Agency is $187 a month for 50,000 standard credits and 10,000 catch-all credits. Enterprise is priced on request.',
  pricingExtra: [
    'Giggal.ai has no plan tiers. 10,000 credits cost $9.90 and 100,000 cost $76. You can spend any of them on catch-all addresses.',
  ],
  strengths: {
    heading: 'Where Listmint is a good fit',
    intro: 'Listmint makes sense if you want these:',
  },
  others: {
    heading: 'Other Listmint alternatives',
    intro: 'These verifiers also return a result on catch-all addresses. Prices are from each vendor’s site on 27 November 2026.',
    items: [
      { name: 'Scrubby', text: 'Checks catch-all and gateway-protected domains at 1 credit. Its Deep Verification costs 3 credits and sends real emails. Pay-as-you-go is $0.008 per credit.' },
      { name: 'no2bounce', text: 'Sends test messages to confirm catch-all mailboxes. 10,000 pay-as-you-go credits cost $20 and never expire.' },
      { name: 'Allegrow', text: 'Returns valid or invalid on catch-all contacts for sales teams. Starter is $99 a month for 5,000 contacts.' },
    ],
  },
  testHeading: 'Run a Listmint list through Giggal.ai',
  testStep3: 'Compare the catch-all rows with what Listmint returned.',
  ctaHeadline: 'Check catch-all emails with no separate credit cap',
  faqs: [
    {
      q: 'How much does Listmint cost?',
      a: 'Listmint Starter is $99 a month with 20,000 standard credits and 5,000 catch-all credits. Agency is $187 a month with 50,000 standard and 10,000 catch-all credits. Enterprise is priced on request.',
    },
    {
      q: 'Why does Listmint have separate catch-all credits?',
      a: 'Listmint says its catch-all credits cost more than its normal SMTP credits, because a catch-all check takes more work. Giggal.ai charges 1 credit for every address, including catch-all.',
    },
    {
      q: 'Is Giggal.ai a good Listmint alternative?',
      a: 'Yes, if you verify lists with many catch-all addresses. Giggal.ai has no separate catch-all limit and no monthly plan. It costs $9.90 per 10,000 credits.',
    },
    {
      q: 'Does Listmint have a free trial?',
      a: 'Listmint offers a free start, but does not publish how many credits it includes. Giggal.ai gives 1,000 free credits with no card.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function ListmintAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
