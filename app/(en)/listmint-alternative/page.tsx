import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

const cfg: AltPageConfig = {
  slug: 'listmint',
  metaTitle: 'Listmint Alternative | Catch-All Email Verifier | Giggal.ai',
  ogTitle: 'A Listmint Alternative With One Credit Pool and a Published Price',
  desc: 'Listmint meters catch-all from a separate, smaller credit pool. Giggal.ai resolves catch-all from one balance at $9.90 per 10,000.',
  h1Article: 'A',
  h1Tail: 'with one pool of credits',
  heroP:
    'Listmint returns catch_all_valid and catch_all_invalid as explicit result codes, which is a genuinely good design. The friction is the metering: catch-all verifications come out of a separate, smaller allowance, so the part of your list that needs the most work is the part you run out of first. Giggal.ai bills catch-all from the same credits as everything else.',
  bluf: [
    { k: 'Both resolve catch-all', v: 'Listmint returns catch_all_valid or catch_all_invalid. We return valid or invalid.' },
    { k: 'Metering', v: 'Listmint splits standard and catch-all credits into two pools. We use one pool, with flat 1 credit per verification.' },
    { k: 'Price transparency', v: 'Listmint builds its prices in the browser, so we could not verify them. Ours are published: $9.90 per 10,000.' },
    { k: 'Gateways', v: 'We verify behind 15 named secure email gateways. Listmint does not publish SEG support.' },
  ],
  catchAllHeading: 'How Giggal.ai verifies catch-all addresses',
  catchAllProse:
    'Listmint and Giggal.ai agree on the important thing: an accept-all domain deserves a real answer, not a label. Listmint expresses it as catch_all_valid and catch_all_invalid, which is easy to filter on and worth copying. The practical difference is what happens when a list is mostly catch-all. On Listmint that drains a separate allowance sized smaller than the standard one. On Giggal.ai every verification costs a flat 1 credit from the same balance, and there is no second pool to run dry. Giggal.ai also resolves mailboxes behind 15 named secure email gateways, which Listmint does not advertise.',
  pricingHeading: 'Listmint pricing vs Giggal.ai',
  pricingProse:
    'Listmint splits its allowance into standard credits and a separate, smaller pool of catch-all credits. Its pricing page assembles those figures in the browser, so we could not read them from the source and we would rather leave the rows blank than publish a number we did not verify. Giggal.ai publishes a flat list: $9.90 for 10,000, $76 for 100,000, $680 for a million, bought once, credits never expire, and catch-all comes out of the same balance at a flat 1 credit.',
  featureNote: 'Listmint’s pricing renders client-side and could not be read directly, so its rows are blank rather than estimated. Check listmint.io/pricing for current figures.',
  testStep3: 'Look at how far 1,000 credits goes on a catch-all heavy list, against Listmint’s separate catch-all allowance.',
  ctaHeadline: 'One balance, one price, catch-all included',
  faqs: [
    {
      q: 'Is Giggal.ai a good Listmint alternative?',
      a: 'Yes, and they are close on the core idea. Both resolve catch-all addresses to a real result rather than labelling them. Giggal.ai bills catch-all from a single credit balance at a flat 1 credit, publishes a flat price list starting at $9.90 per 10,000, and also verifies behind 15 named secure email gateways.',
    },
    {
      q: 'What is the difference between catch_all_valid and a Giggal.ai result?',
      a: 'Functionally very little. Listmint splits the catch-all case into its own result codes, Giggal.ai folds it into the same valid or invalid result as any other address. Both tell you whether the mailbox is real.',
    },
    {
      q: 'Why does the credit pool matter?',
      a: 'Because roughly 30% of a B2B list sits on catch-all domains. When catch-all is metered separately and sized smaller than the standard pool, that segment is where you run out first. A single balance means the mix of your list does not change what you can finish.',
    },
    {
      q: 'What does Giggal.ai cost?',
      a: '$9.90 for 10,000, $76 for 100,000 and $680 for a million, bought once with no subscription. Credits never expire, and all verifications cost a flat 1 credit.',
    },
    {
      q: 'Can I try Giggal.ai before switching?',
      a: 'Yes. 1,000 free credits, no card, on a bulk upload. Run a catch-all heavy segment and compare the results row by row.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function ListmintAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
