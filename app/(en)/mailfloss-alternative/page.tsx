import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

// Rewritten 2026-11-27 and taken out of noindex. No keyword data yet (not in
// the Ahrefs export). Prepaid prices read in Chrome from mailfloss.com/pricing
// the same day.
const cfg: AltPageConfig = {
  slug: 'mailfloss',
  metaTitle: 'Mailfloss Alternative: Pricing and Catch-All | Giggal.ai',
  ogTitle: 'Mailfloss alternative that checks catch-all emails',
  desc: 'Mailfloss cleans your email platform list every day but flags catch-all emails. Giggal.ai returns a result on them at $9.90 per 10,000 credits.',
  h1Article: 'A',
  h1Tail: 'for one-time list cleaning',
  heroP:
    'Mailfloss connects to your email marketing platform and cleans the list every day. It flags catch-all addresses but does not confirm them. Giggal.ai verifies lists you upload and returns a result on catch-all addresses, at $9.90 per 10,000 emails.',
  bluf: [
    { k: 'How it works', v: 'Mailfloss cleans your list inside your email platform. Giggal.ai checks lists you upload or send by API.' },
    { k: 'Catch-all', v: 'Mailfloss flags catch-all addresses. Giggal.ai returns a result on them.' },
    { k: 'Price', v: 'Mailfloss prepaid credits cost $40 per 10,000. Giggal.ai costs $9.90.' },
    { k: 'Free use', v: 'Mailfloss gives 500 free checks a month. Giggal.ai gives 1,000 once, with no card.' },
  ],
  about: {
    heading: 'What is Mailfloss?',
    paragraphs: [
      'Mailfloss is an email list cleaning service. It connects to 41 email platforms, such as Mailchimp, Klaviyo, HubSpot and ActiveCampaign. Then it removes invalid addresses from your list every day.',
      'It also fixes common typos in email addresses. It has a real-time API, webhooks and a form widget.',
      'Mailfloss sells monthly subscriptions and prepaid credits. Prepaid credits never expire.',
    ],
  },
  reasons: {
    heading: 'Why people look for a Mailfloss alternative',
    items: [
      { k: 'Catch-all', v: 'Mailfloss flags catch-all addresses. It does not confirm whether the mailbox exists.' },
      { k: 'Card for trial', v: 'The 7-day trial on subscriptions needs a credit card.' },
      { k: 'Platform limits', v: 'Lite connects to 1 email platform, and Business connects to 10.' },
      { k: 'Price', v: 'Prepaid credits cost $40 per 10,000 and $300 per 100,000.' },
    ],
  },
  catchAllHeading: 'How Mailfloss and Giggal.ai treat catch-all emails',
  catchAllProse:
    'Mailfloss flags catch-all addresses and leaves them for you to decide. Giggal.ai checks them further and returns one of four results, at 1 credit each. It also checks addresses behind 15 named secure email gateways.',
  pricingHeading: 'Mailfloss pricing vs Giggal.ai',
  pricingProse:
    'Mailfloss subscriptions are Lite at $29 a month for 10,000 credits, Business at $59 for 25,000 and Pro at $209 for 125,000. Prepaid credits cost $8 for 1,000, $40 for 10,000, $300 for 100,000 and $1,200 for a million.',
  pricingExtra: [
    'Every Mailfloss account also gets 500 free verifications a month. Giggal.ai sells 10,000 credits for $9.90 and a million for $680, with no subscription.',
  ],
  strengths: {
    heading: 'Where Mailfloss is a good fit',
    intro: 'Mailfloss does some things Giggal.ai does not:',
  },
  others: {
    heading: 'Other Mailfloss alternatives',
    intro: 'These verifiers also clean marketing lists. Prices are from each vendor’s site on 27 November 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Integrates with more than 50 marketing tools. 10,000 persistent credits cost $60.' },
      { name: 'Bounceless', text: '10,000 credits cost $29, with 1,000 free credits a month on a work email.' },
      { name: 'no2bounce', text: 'Integrates with HubSpot, Klaviyo and Zoho. 10,000 credits cost $20 and never expire.' },
    ],
  },
  testHeading: 'Test Giggal.ai on an export from your email platform',
  testStep3: 'Compare the catch-all rows with what Mailfloss flagged.',
  ctaHeadline: 'Get a result on catch-all addresses, not a flag',
  faqs: [
    {
      q: 'How much does Mailfloss cost?',
      a: 'Subscriptions start at $29 a month for 10,000 credits. Prepaid credits cost $40 for 10,000 and $1,200 for a million, and they never expire.',
    },
    {
      q: 'Does Mailfloss have a free plan?',
      a: 'Yes. Every account gets 500 free verifications a month. Subscriptions also have a 7-day trial, which needs a card.',
    },
    {
      q: 'Does Mailfloss verify catch-all emails?',
      a: 'It flags them. It does not confirm whether the mailbox exists. Giggal.ai returns a result on catch-all addresses at 1 credit each.',
    },
    {
      q: 'Does Giggal.ai clean my email platform list like Mailfloss?',
      a: 'No. Giggal.ai works with uploads, an API, Zapier, n8n and HubSpot. It does not run a daily cleaning job inside your email platform.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function MailflossAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
