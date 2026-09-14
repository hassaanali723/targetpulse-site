import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

const cfg: AltPageConfig = {
  slug: 'bounceless',
  metaTitle: 'Bounceless Alternative | Giggal.ai',
  ogTitle: 'A Bounceless Alternative That Adds SEG Verification',
  desc: 'Bounceless now resolves catch-all too, but bills 5 credits per catch-all. Giggal.ai charges a flat 1 credit, adds SEG, and is $9.90 per 10,000. 1,000 free credits, no card.',
  h1Article: 'A',
  h1Tail: 'that adds SEG verification',
  heroP:
    'Bounceless is a low-cost verifier that now resolves catch-all as a Deep add-on, but it bills 5 credits per catch-all. Giggal.ai resolves catch-all at a flat 1 credit, verifies behind secure email gateways too, and is $9.90 per 10,000.',
  bluf: [
    { k: 'Catch-all', v: 'Both resolve it now. Bounceless charges 5 credits per catch-all; we charge 1 credit flat.' },
    { k: 'Price', v: 'Bounceless is $29 at 10k against our $9.90. Both publish flat tiers.' },
    { k: 'Gateways', v: 'We verify behind 15 secure email gateways; Bounceless does not.' },
    { k: 'Try it', v: '1,000 free credits on a bulk list, no card.' },
  ],
  catchAllHeading: 'Where Giggal.ai and Bounceless differ on catch-all',
  catchAllProse:
    'Bounceless has added Deep catch-all resolution, so like Giggal.ai it now returns a real result on catch-all domains rather than flagging them. The difference is the bill and the coverage: Bounceless charges 5 credits per catch-all, or 3 if cached, while Giggal.ai charges a flat 1 credit, and Giggal.ai also verifies addresses behind secure email gateways such as Mimecast, Proofpoint and Barracuda, which Bounceless does not.',
  pricingHeading: 'Bounceless pricing vs Giggal.ai',
  pricingProse:
    'Bounceless publishes flat pay-as-you-go tiers: $29 at 10,000, $159 at 100,000 and $579 at a million. Giggal.ai is $9.90, $76 and $680 at those volumes. On catch-all, Bounceless bills 5 credits per address and Giggal.ai bills a flat 1 credit.',
  featureNote: 'Catch-all pricing is where the two diverge: 5 credits per catch-all on Bounceless against 1 credit flat on Giggal.ai.',
  testStep3: 'Compare the catch-all cost, and check the gateway addresses Bounceless leaves out.',
  ctaHeadline: 'Catch-all at 1 credit flat, plus gateways',
  faqs: [
    {
      q: 'Does Bounceless resolve catch-all like Giggal.ai?',
      a: 'It does now, through a Deep catch-all add-on, so both return a real result rather than a flag. The difference is cost: Bounceless charges 5 credits per catch-all (3 if cached), while Giggal.ai charges a flat 1 credit, and Giggal.ai also verifies behind secure email gateways, which Bounceless does not.',
    },
    {
      q: 'How does the pricing compare?',
      a: 'Bounceless publishes flat tiers, $29 at 10,000, $159 at 100,000 and $579 at a million. Giggal.ai is $9.90, $76 and $680 at those volumes. On catch-all, Bounceless bills 5 credits per address and Giggal.ai bills a flat 1 credit.',
    },
    {
      q: 'What is Bounceless better at?',
      a: 'Bounceless keeps a low per-credit rate, gives 1,000 free credits with no card, and keeps pay-as-you-go credits from expiring.',
    },
    {
      q: 'Do Giggal.ai credits expire?',
      a: 'No. Giggal.ai credits never expire, and Bounceless pay-as-you-go credits never expire either.',
    },
    {
      q: 'Can I try Giggal.ai before switching?',
      a: 'Yes. 1,000 free credits, no card, on a bulk upload. Run a catch-all-heavy list through both and compare the cost per usable contact.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function BouncelessAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
