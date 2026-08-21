import AltPageScaffold, { altMetadata, type AltPageConfig } from '@/components/alternatives/AltPageScaffold'

const cfg: AltPageConfig = {
  slug: 'no2bounce',
  metaTitle: 'no2bounce Alternative | Catch-All & SEG Verifier | Giggal.ai',
  ogTitle: 'A no2bounce Alternative at $9.90 per 10,000',
  desc: 'no2bounce resolves catch-all and names gateways at $17 per 10,000. Giggal.ai does the same at $9.90, across 15 named secure email gateways.',
  h1Article: 'A',
  h1Tail: 'that costs less per email',
  heroP:
    'no2bounce is the closest match here on terms rather than on marketing: catch-all resolved, gateways named, credits that never expire, a published price ladder. The comparison is narrow and mostly comes down to price and gateway coverage, with one honest point in their favour on catch-all-heavy lists.',
  bluf: [
    { k: 'Both resolve catch-all', v: 'Both commit to a result on accept-all domains rather than labelling them.' },
    { k: 'Price', v: '$17 per 10,000 there, $9.90 here. $721 per million there, $680 here.' },
    { k: 'Catch-all surcharge', v: 'They publish no surcharge. We bill 1.5 credits, so on a heavily catch-all list the gap narrows.' },
    { k: 'Gateways', v: 'They name Proofpoint, Mimecast and Cisco. We detect 15, Barracuda included.' },
  ],
  catchAllHeading: 'How Giggal.ai verifies catch-all addresses',
  catchAllProse:
    'Both tools run multi-layer detection rather than sending a test message, and both return a real result on addresses that other verifiers hand back marked risky. no2bounce claims over 97% on catch-all and lists Microsoft 365, Google Workspace, Proofpoint, Mimecast and Cisco. Giggal.ai claims 98.5% on standard business lists and detects 15 named secure email gateways. The place to be careful is the credit maths: no2bounce publishes no catch-all surcharge, while Giggal.ai bills 1.5 credits inside a run. On a list that is 30% catch-all, Giggal.ai works out around $12.85 per 10,000 against their $17, so we are still cheaper, but by less than the headline suggests.',
  pricingHeading: 'no2bounce pricing vs Giggal.ai',
  pricingProse:
    'no2bounce publishes a seven-step ladder: $17 for 10,000, $41 for 25,000, $72 for 50,000, $126 for 100,000, $254 for 250,000, $424 for 500,000 and $721 for a million. Credits never expire and there is no monthly usage limit, and new accounts get 100 free credits with no card. Giggal.ai is $9.90 for 10,000, $76 for 100,000 and $680 for a million, credits never expire, and the free tier is 1,000 credits usable on a bulk upload rather than 100.',
  testStep3: 'Compare the catch-all rows, and check the credit spend against the surcharge difference.',
  ctaHeadline: 'Same job, lower per-email price',
  faqs: [
    {
      q: 'Is Giggal.ai a good no2bounce alternative?',
      a: 'They do the same job, so it comes down to numbers. Giggal.ai is $9.90 per 10,000 against $17, detects 15 named secure email gateways against their five, and gives 1,000 free credits against 100. no2bounce publishes no catch-all surcharge, which narrows the price gap on catch-all-heavy lists.',
    },
    {
      q: 'Which is cheaper on a list that is mostly catch-all?',
      a: 'Giggal.ai, but by less than the sticker price implies. We bill 1.5 credits per catch-all inside a run, so a list that is 30% catch-all costs about $12.85 per 10,000 here against $17 there. On a list of ordinary addresses the comparison is the straight $9.90 against $17.',
    },
    {
      q: 'How do the gateway claims compare?',
      a: 'no2bounce names Microsoft 365, Google Workspace, Proofpoint, Mimecast and Cisco. Giggal.ai detects 15 secure email gateways, Barracuda included. If your list leans enterprise, the wider coverage is the practical difference.',
    },
    {
      q: 'Do credits expire on either tool?',
      a: 'No, on both. no2bounce states credits remain until used with no expiry and no monthly limit. Giggal.ai credits never expire either, with no condition attached.',
    },
    {
      q: 'Can I try Giggal.ai before switching?',
      a: 'Yes. 1,000 free credits, no card, usable on a bulk upload rather than single lookups. Run the same list through both and compare row by row.',
    },
  ],
}

export const metadata = altMetadata(cfg)

export default function No2BounceAlternativePage() {
  return <AltPageScaffold config={cfg} />
}
