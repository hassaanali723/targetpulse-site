import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

const cfg: AltPageConfig = {
  slug: 'instantly',
  metaTitle: 'Instantly Alternative for Email Verification | Giggal.ai',
  ogTitle: 'An Instantly Alternative for the Verification Half',
  desc: 'Instantly verifies inside its sending platform at 0.25 credit per lead. Giggal.ai is a dedicated catch-all email verifier at $9.90 per 10,000.',
  h1Article: 'An',
  h1Tail: 'for the verification step',
  heroP:
    'Instantly is a sending platform. Verification is one feature inside it, spending the same credits as lead data, and on a catch-all address the result can still come back Risky. Giggal.ai does not send campaigns and does not want to. It cleans the list before Instantly sends it, at $9.90 per 10,000.',
  bluf: [
    { k: 'Not really rivals', v: 'Instantly sends. We verify. Most teams that switch the verification step keep sending with Instantly.' },
    { k: 'Catch-all', v: 'Instantly returns Valid, Invalid or Risky. We return valid or invalid, and Risky is not one of our outputs.' },
    { k: 'Billing', v: 'Verification spends 0.25 credit per lead there, so 10,000 a month needs the $197 plan. Ours is $9.90 per 10,000.' },
    { k: 'Gateways', v: 'We verify behind 15 named secure email gateways. Instantly does not publish SEG support.' },
  ],
  catchAllHeading: 'How Giggal.ai verifies catch-all addresses',
  catchAllProse:
    'Instantly documents its verification as returning Valid, Invalid or Risky, and by default it will not contact anything marked Invalid or Risky. That is a safe default and the wrong outcome for a B2B list, because roughly 30% of one sits on catch-all domains and lands in Risky. You can tick a box to send to risky addresses, but that is a guess with your sender reputation behind it. Giggal.ai resolves those addresses first, across catch-all domains and 15 named secure email gateways, so what reaches Instantly is a list of confirmed mailboxes rather than a pile you have to decide about.',
  pricingHeading: 'Instantly pricing vs Giggal.ai',
  pricingProse:
    'Instantly sells credits for its lead and sending platform, and verification spends 0.25 of a credit per lead. Growth is $47 a month for 1,500 credits and Supersonic is $197 for 5,000, so 10,000 verifications a month means 2,500 credits and the Supersonic plan. Higher volumes sit on the Hyper tier, published as a range starting at $197 rather than a fixed price. Giggal.ai is $9.90 for 10,000 bought once, $76 for 100,000 and $680 for a million, with credits that never expire and no plan to sit on.',
  featureNote: 'Instantly credits cover lead data and sending as well as verification, so its figure is the smallest monthly plan covering that many verifications, not a verification price.',
  testStep3: 'Look at the rows Instantly returned as Risky. Count how many come back as real mailboxes.',
  ctaHeadline: 'Clean the list, then let Instantly send it',
  faqs: [
    {
      q: 'Is Giggal.ai a replacement for Instantly?',
      a: 'No, and it is not meant to be. Instantly sends campaigns, rotates inboxes and runs warmup. Giggal.ai verifies email addresses. Teams usually keep Instantly for sending and move the verification step to Giggal.ai so that catch-all contacts stop being written off as risky.',
    },
    {
      q: 'What is wrong with Instantly’s built-in verification?',
      a: 'Nothing, for ordinary addresses. The gap is catch-all: Instantly can return Risky, and its default is not to contact those leads. On a B2B list that is roughly 30% of your contacts sitting unused. Giggal.ai resolves them to valid or invalid so you can act on them.',
    },
    {
      q: 'Can I use both together?',
      a: 'Yes, and that is the common setup. Verify with Giggal.ai, then import the confirmed addresses into Instantly. Giggal.ai connects through Zapier and n8n if you want that step automated.',
    },
    {
      q: 'What does the pricing look like side by side?',
      a: 'Instantly spends 0.25 credit per lead verified, so 10,000 a month is 2,500 credits and needs the $197 Supersonic plan. Giggal.ai is $9.90 for 10,000, bought once, with credits that never expire.',
    },
    {
      q: 'Can I try Giggal.ai before changing anything?',
      a: 'Yes. 1,000 free credits, no card. Export the leads Instantly marked Risky and run them through Giggal.ai to see how many are real.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function InstantlyAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
