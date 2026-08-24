import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

const cfg: AltPageConfig = {
  slug: 'mailfloss',
  metaTitle: 'Mailfloss Alternative | Giggal.ai',
  ogTitle: 'A Mailfloss Alternative That Resolves Catch-All',
  desc: 'Mailfloss auto-cleans your ESP list but flags catch-all rather than resolving it, and its prepaid is $40 per 10,000. Giggal.ai resolves catch-all at $9.90. 1,000 free credits, no card.',
  h1Article: 'A',
  h1Tail: 'that resolves catch-all',
  heroP:
    'Mailfloss quietly cleans your email platform on a subscription, which is convenient, but on catch-all domains it flags rather than resolving. Giggal.ai returns a real result, pay-as-you-go, at $9.90 per 10,000 against its $40 prepaid.',
  bluf: [
    { k: 'Catch-all', v: 'We resolve it, valid or invalid. Mailfloss flags it and stops.' },
    { k: 'Price', v: 'Mailfloss prepaid is $40 at 10k against our $9.90; both publish tiers.' },
    { k: 'Free tier', v: 'Mailfloss has a 7-day trial; we give 1,000 bulk credits, no card.' },
    { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
  ],
  catchAllHeading: 'How Giggal.ai verifies catch-all addresses',
  catchAllProse:
    'Mailfloss is built to run in the background and clean your list automatically, and for that it does a standard verification that flags catch-all without confirming the mailbox. We route those addresses down a separate path and return one of four results, so the real mailboxes come back deliverable rather than flagged.',
  pricingHeading: 'Mailfloss pricing vs Giggal.ai',
  pricingProse:
    'Mailfloss sells one-time prepaid credits at $40 for 10,000, $300 for 100,000 and $1,200 for a million, alongside a monthly auto-clean subscription from $29. Giggal.ai is $9.90, $76 and $680 at those volumes, and it resolves catch-all where Mailfloss flags it. Prepaid credits never expire on either tool.',
  testStep3: 'Look at the rows Mailfloss flagged catch-all. Count how many come back real.',
  ctaHeadline: 'Resolve catch-all instead of only flagging it',
  faqs: [
    {
      q: 'Does Giggal.ai resolve catch-all where Mailfloss flags it?',
      a: 'Yes. Mailfloss runs a standard verification and flags catch-all without confirming the mailbox. Giggal.ai returns a real deliverable or undeliverable result on those addresses, at a flat 1 credit per email.',
    },
    {
      q: 'How does the pricing compare?',
      a: 'Mailfloss prepaid credits are $40 at 10,000, $300 at 100,000 and $1,200 at a million; its subscription starts at $29 a month. Giggal.ai is $9.90, $76 and $680 pay-as-you-go, and prepaid credits never expire on either.',
    },
    {
      q: 'What is Mailfloss better at?',
      a: 'Mailfloss connects directly to about 40 email platforms and cleans your list automatically every day. If hands-off, always-on cleaning inside your ESP matters more than resolving catch-all, it is a good fit.',
    },
    {
      q: 'Do Giggal.ai credits expire?',
      a: 'No. Giggal.ai credits never expire, and Mailfloss prepaid credits never expire either. Its subscription credits reset each month.',
    },
    {
      q: 'Can I try Giggal.ai before switching?',
      a: 'Yes. 1,000 free credits, no card, on a bulk upload. Run a list Mailfloss flagged catch-all and see how many resolve to a real result.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function MailflossAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
