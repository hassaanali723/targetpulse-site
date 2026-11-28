// Batch 3D of hand-written /compare pairs (2026-11-27): five verifier pairs.
// Facts come only from lib/competitorPricing.ts, lib/compareProfiles.ts and the
// /<brand>-alternative pages. See ./types for the writing rules.
import type { PairContent } from './types'

export const BATCH3_D: Record<string, PairContent> = {
  'emailable-vs-clearout': {
    metaTitle: 'Emailable vs Clearout: Pricing and Catch-All | Giggal.ai',
    metaDescription:
      'Emailable vs Clearout compared on price from 10,000 to 1,000,000 emails, catch-all status, free credits and extra tools, with Giggal.ai as a third option.',
    ogTitle: 'Emailable vs Clearout: price, catch-all and free credits',
    intro:
      'Emailable is an email verifier known for fast bulk checks and around 90 native integrations. Clearout is an email verifier that also includes an email finder and phone-number validation. Both sell pay-as-you-go credits that never expire. This Emailable vs Clearout page compares price, catch-all handling, free credits and extra features, using each vendor’s published numbers.',
    giggalTop:
      'Emailable and Clearout both mark catch-all addresses as risky without confirming the mailbox. Giggal.ai returns a deliverable or undeliverable result on those addresses, at 1 credit each and $9.90 per 10,000.',
    sections: [
      {
        heading: 'What Emailable and Clearout are each built for',
        paragraphs: [
          'Emailable is a pure email verifier. It is rated among the fastest tools for bulk verification speed. It connects to around 90 other apps through native integrations.',
          'Clearout covers more than verification. Its suite adds an email finder and phone-number validation. It also offers a large integration list and a well-documented API.',
          'The difference is scope. Emailable focuses on checking lists fast. Clearout adds finding and phone checks to the same account. Both vendors claim 99% accuracy, and these are their own figures.',
        ],
      },
      {
        heading: 'Emailable vs Clearout on catch-all addresses',
        paragraphs: [
          'A catch-all domain accepts mail for any name. A standard check cannot tell whether a real person owns the mailbox.',
          'Emailable marks accept-all addresses as Risky and does not confirm the mailbox. Clearout returns Catch-All as one of four statuses, next to Valid, Invalid and Unknown. It marks those addresses risky and does not confirm them either.',
          'Emailable also advertises gateway detection for Proofpoint, Mimecast and Barracuda. It flags those addresses rather than verifying them. Clearout does not advertise gateway verification. Read how [catch-all verification](/catch-all-verification) works if your list is mostly company domains.',
        ],
        giggalEdgeLabel: 'Catch-all and gateways on Giggal.ai.',
        giggalEdge:
          'Giggal.ai returns deliverable or undeliverable on catch-all addresses for 1 credit each. It also verifies behind 15 named secure email gateways.',
      },
      {
        heading: 'Emailable vs Clearout pricing at 10,000, 100,000 and 1,000,000 emails',
        paragraphs: [
          'Emailable lists $60 for 10,000 emails, $420 for 100,000 and $2,100 for a million. Its smallest pack is 5,000 emails for $38.',
          'Clearout lists $65 for 10,000 emails, $400 for 100,000 and $1,400 for a million. Its smallest pack is 5,000 emails for $40. Its rate per credit steps down as the volume grows.',
          'Neither tool charges for unknown results. Emailable also does not charge for duplicates.',
        ],
        giggalEdgeLabel: 'Giggal.ai at the same volumes.',
        giggalEdge:
          'Giggal.ai lists $9.90 for 10,000 emails, $76 for 100,000 and $680 for a million. There is no subscription, and unknown results are refunded.',
      },
      {
        heading: 'Free credits and credit expiry on Emailable and Clearout',
        paragraphs: [
          'Emailable gives 250 free credits to start. Clearout gives 100 free credits. Both amounts let you test a small sample before you pay.',
          'Paid credits never expire on either tool. Clearout credits also roll over, and Clearout offers free re-verification.',
        ],
        giggalEdgeLabel: 'Free credits on Giggal.ai.',
        giggalEdge:
          'Giggal.ai gives 1,000 free credits with no card. You can use them on a bulk upload, and paid credits never expire.',
      },
      {
        heading: 'Emailable or Clearout: which email verifier to choose',
        paragraphs: [
          'Choose Emailable if bulk speed and a 250-credit free tier matter most. Around 90 native integrations also help if your lists live in other apps.',
          'Choose Clearout if you also need an email finder or phone-number validation. At 1,000,000 emails, its rate is $0.0014 per credit.',
          'If you only need to check a list you already have, a plain verifier is enough. In that case, compare how many rows each tool leaves as risky.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Emailable better than Clearout?',
        a: 'They suit different needs. Emailable focuses on fast bulk checks and gives 250 free credits. Clearout adds an email finder and phone-number validation, and gives 100 free credits.',
      },
      {
        q: 'How much do Emailable and Clearout cost for 10,000 emails?',
        a: 'Emailable lists $60 for 10,000 emails and Clearout lists $65. Giggal.ai lists $9.90 for the same volume.',
      },
      {
        q: 'What do Emailable and Clearout cost for 1,000,000 emails?',
        a: 'Emailable lists $2,100 for a million emails. Clearout lists $1,400. Giggal.ai lists $680.',
      },
      {
        q: 'Do Emailable or Clearout confirm catch-all addresses?',
        a: 'No. Emailable marks them Risky, and Clearout returns them with a Catch-All status. Neither confirms whether the mailbox exists.',
      },
      {
        q: 'Do Emailable and Clearout credits expire?',
        a: 'No. Credits never expire on either tool, and Clearout credits roll over. Giggal.ai credits never expire as well.',
      },
      {
        q: 'Can I test Giggal.ai on 1,000 free credits?',
        a: 'Yes. Sign up with no card and run a bulk list on the 1,000 free credits. Then compare the catch-all rows with your Emailable or Clearout results.',
      },
    ],
  },

  'millionverifier-vs-debounce': {
    metaTitle: 'MillionVerifier vs DeBounce: Catch-All and Price | Giggal.ai',
    metaDescription:
      'MillionVerifier vs DeBounce: prices from 10,000 to 1,000,000 emails, how each bills catch-all checks, free credits and guarantees. Giggal.ai shown too.',
    ogTitle: 'MillionVerifier vs DeBounce: how each prices catch-all checks',
    intro:
      'MillionVerifier is a high-volume email verifier with a low rate per credit and a bounce guarantee. DeBounce is an email verifier with strong signup-form and WordPress validation. Both sell credits that never expire. This MillionVerifier vs DeBounce page compares price, catch-all billing, free credits and guarantees from each vendor’s published numbers.',
    giggalTop:
      'Neither MillionVerifier nor DeBounce advertises verification behind secure email gateways. Giggal.ai verifies behind 15 named gateways and checks catch-all addresses at 1 credit each.',
    sections: [
      {
        heading: 'MillionVerifier and DeBounce: volume pricing or form validation',
        paragraphs: [
          'MillionVerifier is built for large lists. It lists $449 for 1,000,000 verifications. It is ISO 27001 certified.',
          'DeBounce is known for strong signup-form and WordPress validation. Its API access costs no extra credits, and duplicate addresses are free.',
          'Both vendors were part of a LeadMagic test published in February 2026. MillionVerifier scored 95.8% overall and DeBounce scored 94.1%. LeadMagic sells a competing verifier, so treat these as vendor test results.',
        ],
      },
      {
        heading: 'How MillionVerifier and DeBounce bill catch-all checks',
        paragraphs: [
          'A catch-all domain accepts every address sent to it. That hides whether the named mailbox is real.',
          'MillionVerifier runs a Catch-All Verifier. It resolves 30 to 40% of catch-all addresses and marks the rest Risky. It does not charge for risky or catch-all results.',
          'DeBounce sells catch-all verification as a separate product. Each catch-all address costs 10 credits instead of 1.',
          'In the LeadMagic test, MillionVerifier resolved 5% of catch-all addresses and DeBounce resolved 6%.',
        ],
        giggalEdgeLabel: 'Catch-all billing on Giggal.ai.',
        giggalEdge:
          'Giggal.ai returns deliverable or undeliverable on catch-all addresses. Each one costs 1 credit, inside the same run as the rest of the list.',
      },
      {
        heading: 'MillionVerifier vs DeBounce pricing for 10,000 to 1,000,000 emails',
        paragraphs: [
          'MillionVerifier lists $39 for 10,000 emails, which is also its smallest package. It lists $149 for 100,000 and $449 for a million.',
          'DeBounce lists $25 for 10,000 emails, $135 for 100,000 and $750 for a million. Its smallest package is 5,000 emails for $15.',
          'These are prices for standard checks. On DeBounce, a list with many catch-all addresses uses more credits, at 10 per catch-all.',
        ],
        giggalEdgeLabel: 'Giggal.ai pricing.',
        giggalEdge:
          'Giggal.ai lists $9.90 for 10,000 emails, $76 for 100,000 and $680 for a million, with no subscription.',
      },
      {
        heading: 'Free credits, expiry and guarantees',
        paragraphs: [
          'MillionVerifier and DeBounce each give 100 free credits. Bought credits do not expire on MillionVerifier or DeBounce. Neither charges for unknown results.',
          'MillionVerifier offers a money-back guarantee if your hard bounce rate goes above 4%. DeBounce claims a 97.5% deliverability guarantee. Both are the vendors’ own terms.',
        ],
        giggalEdgeLabel: 'Credits and refunds on Giggal.ai.',
        giggalEdge:
          'Giggal.ai gives 1,000 free credits with no card, usable on a bulk upload. Credits never expire, and unknown results are refunded.',
      },
      {
        heading: 'MillionVerifier or DeBounce: which one to choose',
        paragraphs: [
          'Choose MillionVerifier for very large lists where a low rate per credit matters. Its bounce guarantee and ISO 27001 certificate may also matter to your team.',
          'Choose DeBounce if you validate signups on a website or in WordPress. Free duplicates and API access at no extra credit cost come with it.',
          'If your list is mostly company domains, count the catch-all share first. Then check how each [bulk email verifier](/bulk-email-verifier) treats those rows.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is MillionVerifier better than DeBounce?',
        a: 'Each fits a different job. MillionVerifier lists $449 for a million emails and offers a bounce guarantee. DeBounce lists $750 for a million and focuses on signup-form and WordPress validation.',
      },
      {
        q: 'How much do MillionVerifier and DeBounce cost for 10,000 emails?',
        a: 'MillionVerifier lists $39 for 10,000 emails. DeBounce lists $25. Giggal.ai lists $9.90 for 10,000.',
      },
      {
        q: 'Does DeBounce charge extra for catch-all emails?',
        a: 'Yes. DeBounce sells catch-all verification as a separate product at 10 credits per address. Standard checks cost 1 credit.',
      },
      {
        q: 'Does MillionVerifier charge for catch-all results?',
        a: 'No. MillionVerifier does not charge for risky or catch-all results. Its Catch-All Verifier resolves 30 to 40% of those addresses and returns the rest as Risky.',
      },
      {
        q: 'How did MillionVerifier and DeBounce score in the LeadMagic test?',
        a: 'MillionVerifier scored 95.8% overall and DeBounce 94.1%. On catch-all addresses, they resolved 5% and 6%. LeadMagic sells a competing tool, so these are vendor test results.',
      },
      {
        q: 'Can I try Giggal.ai with 1,000 free credits?',
        a: 'Yes. New accounts get 1,000 free credits with no card. Run the same list you checked in MillionVerifier or DeBounce and compare the catch-all rows.',
      },
    ],
  },

  'millionverifier-vs-clearout': {
    metaTitle: 'MillionVerifier vs Clearout: Bulk Pricing Compared | Giggal.ai',
    metaDescription:
      'MillionVerifier vs Clearout: a high-volume verifier against one with a finder built in. Prices up to 1,000,000 emails, catch-all results, and Giggal.ai.',
    ogTitle: 'MillionVerifier vs Clearout: volume verifier or all-in-one suite',
    intro:
      'MillionVerifier focuses on one job, verifying large email lists at a low rate per credit. Clearout pairs its email verifier with an email finder and phone-number validation. Credits never expire on either tool. This MillionVerifier vs Clearout page compares pricing at three volumes, catch-all results, free credits and extra features.',
    giggalTop:
      'MillionVerifier and Clearout do not advertise gateway verification. Giggal.ai checks addresses behind 15 named gateways, including Proofpoint and Mimecast, at $9.90 per 10,000.',
    sections: [
      {
        heading: 'What MillionVerifier and Clearout each do',
        paragraphs: [
          'MillionVerifier is a pure verifier made for high volume. A million checks cost $449. The company holds ISO 27001 certification.',
          'Clearout is a wider suite. Besides verification, it includes an email finder and phone-number validation. It also has a large integration list and a well-documented API.',
          'If you only need lists cleaned, MillionVerifier stays on that one task. If you also build lists, Clearout covers finding and checking in one account.',
        ],
      },
      {
        heading: 'MillionVerifier vs Clearout on catch-all results',
        paragraphs: [
          'Catch-all servers say yes to any address at the domain. So a normal check cannot confirm the person behind it.',
          'MillionVerifier sends these addresses through its Catch-All Verifier. That step resolves 30 to 40% and returns the remainder as Risky. In a LeadMagic test from February 2026, it resolved 5%. LeadMagic sells a rival verifier, so that is a vendor test.',
          'Clearout returns catch-all addresses under their own Catch-All status. It marks them risky and does not confirm the mailbox. The [Clearout alternative](/clearout-alternative) page shows how Giggal.ai handles those rows.',
        ],
        giggalEdgeLabel: 'What Giggal.ai returns on catch-all.',
        giggalEdge:
          'Giggal.ai gives each catch-all address a deliverable or undeliverable result. The check costs 1 credit, like any other address.',
      },
      {
        heading: 'MillionVerifier vs Clearout pricing',
        paragraphs: [
          'MillionVerifier lists $39 for 10,000 emails, $149 for 100,000 and $449 for 1,000,000. Its smallest package is 10,000 credits.',
          'Clearout lists $65 for 10,000 emails, $400 for 100,000 and $1,400 for 1,000,000. Its entry pack is 5,000 credits for $40.',
          'Neither tool bills unknown results. MillionVerifier also skips billing for risky and catch-all rows.',
        ],
        giggalEdgeLabel: 'The same volumes on Giggal.ai.',
        giggalEdge:
          'Giggal.ai costs $9.90 for 10,000, $76 for 100,000 and $680 for 1,000,000. You pay once per pack, with no subscription.',
      },
      {
        heading: 'Free credits and expiry: MillionVerifier and Clearout',
        paragraphs: [
          'Both tools start new users with 100 free credits. Paid credits never expire on either one, and Clearout credits roll over.',
          'MillionVerifier claims over 99% accuracy and offers money back if hard bounces pass 4%. Clearout claims 99% accuracy and offers free re-verification. These are vendor claims, not independent results.',
        ],
        giggalEdgeLabel: 'Testing on Giggal.ai.',
        giggalEdge:
          'Giggal.ai starts you with 1,000 free credits and asks for no card. They work on a bulk upload, so you can test a real sample.',
      },
      {
        heading: 'MillionVerifier or Clearout: which email verifier fits your list',
        paragraphs: [
          'Choose MillionVerifier when you verify very large lists and want a low rate at 1,000,000 emails.',
          'Choose Clearout when you also need to find addresses or validate phone numbers. Keeping those jobs in one tool saves a second account.',
          'When your list already exists and only needs checking, a plain verifier does the job. Then compare how each tool reports catch-all and gateway rows.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is MillionVerifier or Clearout better for large lists?',
        a: 'At 1,000,000 emails, MillionVerifier lists $449 and Clearout lists $1,400. Giggal.ai lists $680. Compare the catch-all results too, since each tool reports them differently.',
      },
      {
        q: 'How much do MillionVerifier and Clearout charge for 100,000 emails?',
        a: 'MillionVerifier lists $149 for 100,000 emails. Clearout lists $400. Giggal.ai lists $76 for that volume.',
      },
      {
        q: 'Does Clearout find email addresses as well as verify them?',
        a: 'Yes. Clearout includes an email finder and phone-number validation next to its verifier. MillionVerifier is a pure verifier.',
      },
      {
        q: 'How do MillionVerifier and Clearout report catch-all emails?',
        a: 'MillionVerifier resolves 30 to 40% with its Catch-All Verifier and marks the rest Risky. Clearout returns them with a Catch-All status and does not confirm them.',
      },
      {
        q: 'Do MillionVerifier or Clearout credits expire?',
        a: 'No. Paid credits never expire on MillionVerifier or Clearout. Giggal.ai credits do not expire either.',
      },
      {
        q: 'Can I check my list on Giggal.ai for free?',
        a: 'Yes. You get 1,000 free credits with no card, usable on a bulk upload. Upload a sample from your MillionVerifier or Clearout list and compare the results.',
      },
    ],
  },

  'debounce-vs-emailable': {
    metaTitle: 'DeBounce vs Emailable: Email Verifier Pricing | Giggal.ai',
    metaDescription:
      'DeBounce vs Emailable compared on price per 10,000 to 1,000,000 emails, catch-all credits, free tiers and integrations, with Giggal.ai as a third option.',
    ogTitle: 'DeBounce vs Emailable: catch-all credits and pricing',
    intro:
      'DeBounce is an email verifier with strong signup-form and WordPress validation and free duplicates. Emailable is an email verifier with fast bulk checks, a 250-credit free tier and around 90 integrations. Both skip the charge on unknown results. This DeBounce vs Emailable page compares pricing, catch-all handling, free credits and integrations from the vendors’ own figures.',
    giggalTop:
      'DeBounce lists $25 and Emailable lists $60 for 10,000 emails. Giggal.ai lists $9.90 for the same volume and resolves catch-all addresses at 1 credit each.',
    sections: [
      {
        heading: 'What DeBounce and Emailable focus on',
        paragraphs: [
          'DeBounce focuses on validation at signup. It offers strong signup-form and WordPress validation. Its API access uses no extra credits.',
          'Emailable focuses on bulk work and links to other apps. It is rated among the fastest for bulk verification speed. It offers around 90 native integrations.',
          'DeBounce advertises a 97.5% deliverability guarantee. Emailable claims 99% accuracy. Both numbers are the vendors’ own claims.',
        ],
      },
      {
        heading: 'DeBounce vs Emailable on catch-all emails',
        paragraphs: [
          'An address on a catch-all domain is accepted by the server whether or not the mailbox exists.',
          'DeBounce returns results on catch-all addresses through a separate product. Each of those checks costs 10 credits. In a LeadMagic test from February 2026, DeBounce resolved 6% of catch-all addresses. LeadMagic sells a competing verifier.',
          'Emailable marks accept-all addresses Risky and does not confirm the mailbox. It advertises detection for Proofpoint, Mimecast and Barracuda gateways, and it flags those addresses. The [DeBounce alternative](/debounce-alternative) page works through the credit math on a sample list.',
        ],
        giggalEdgeLabel: 'Catch-all checks on Giggal.ai.',
        giggalEdge:
          'Giggal.ai charges 1 credit for a catch-all address and returns deliverable or undeliverable. It verifies behind 15 named secure email gateways as well.',
      },
      {
        heading: 'DeBounce vs Emailable pricing',
        paragraphs: [
          'DeBounce charges $25 at 10,000 emails, $135 at 100,000 and $750 at a million. Its entry package is 5,000 emails for $15.',
          'Emailable charges $60 at 10,000 emails, $420 at 100,000 and $2,100 at a million. Its entry package is 5,000 emails for $38.',
          'Both tools skip charges on duplicates and unknown results. On DeBounce, every catch-all check adds 10 credits to the bill.',
        ],
        giggalEdgeLabel: 'Giggal.ai prices for the same lists.',
        giggalEdge:
          'Giggal.ai lists $9.90 for 10,000, $76 for 100,000 and $680 for a million. Catch-all addresses cost the same 1 credit.',
      },
      {
        heading: 'Free tiers and credit expiry on DeBounce and Emailable',
        paragraphs: [
          'DeBounce gives 100 free credits. Emailable gives 250 free credits.',
          'Paid credits never expire on DeBounce or Emailable. You can buy a pack and use it over several months.',
        ],
        giggalEdgeLabel: 'Trying Giggal.ai first.',
        giggalEdge:
          'Giggal.ai gives 1,000 free credits with no card required. You can spend them on a bulk list, and paid credits never expire.',
      },
      {
        heading: 'DeBounce or Emailable: which one to pick',
        paragraphs: [
          'Pick DeBounce when your main need is form validation on a site or in WordPress. Its 10,000-email price is $25.',
          'Pick Emailable when bulk speed and native integrations matter more. Its 250 free credits also give you a larger first test.',
          'If you just need a finished list checked, a plain verifier covers it. Count the risky and catch-all rows each tool returns on the same sample.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is DeBounce better than Emailable?',
        a: 'It depends on the job. DeBounce focuses on signup-form and WordPress validation. Emailable focuses on bulk speed and offers around 90 integrations.',
      },
      {
        q: 'How much do DeBounce and Emailable cost for 100,000 emails?',
        a: 'DeBounce lists $135 for 100,000 emails. Emailable lists $420. Giggal.ai lists $76.',
      },
      {
        q: 'Does Emailable verify catch-all addresses?',
        a: 'Emailable marks accept-all addresses Risky and does not confirm the mailbox. DeBounce offers a catch-all product at 10 credits per address.',
      },
      {
        q: 'How many free credits do DeBounce and Emailable give?',
        a: 'Emailable gives 250 free credits and DeBounce gives 100. Giggal.ai gives 1,000, and no card is needed.',
      },
      {
        q: 'Do DeBounce and Emailable charge for duplicates?',
        a: 'No. Both tools treat duplicates as free, and neither charges for unknown results.',
      },
      {
        q: 'Can I run a free test on Giggal.ai?',
        a: 'Yes. New accounts get 1,000 free credits without a card, and they work on a bulk upload. Use a list you already ran in DeBounce or Emailable.',
      },
    ],
  },

  'bouncer-vs-emailable': {
    metaTitle: 'Bouncer vs Emailable: Catch-All and Gateways | Giggal.ai',
    metaDescription:
      'Bouncer vs Emailable: both list $60 per 10,000 emails. Compare catch-all results, gateway handling, free credits and compliance, plus Giggal.ai.',
    ogTitle: 'Bouncer vs Emailable: same entry price, different catch-all results',
    intro:
      'Bouncer is a premium email verifier with high review scores, a toxicity check and SOC 2 Type II compliance. Emailable is a fast email verifier with a 250-credit free tier and around 90 integrations. Both list $60 for 10,000 emails. This Bouncer vs Emailable page compares catch-all results, gateway handling, pricing at higher volumes and free credits.',
    giggalTop:
      'Bouncer and Emailable both list $60 for 10,000 emails. Giggal.ai lists $9.90 for 10,000, resolves catch-all addresses at 1 credit, and verifies behind 15 named secure email gateways.',
    sections: [
      {
        heading: 'What Bouncer and Emailable are each known for',
        paragraphs: [
          'Bouncer holds a 4.8 rating on G2 and 4.9 on Capterra. It adds an Email Toxicity Check that flags spam traps and complainers. It is SOC 2 Type II and GDPR compliant.',
          'Bouncer also offers a mature real-time verification API and a deliverability toolkit.',
          'Emailable is rated among the fastest for bulk verification speed. It connects to around 90 apps through native integrations. New users get 250 free credits.',
          'Bouncer claims over 99% accuracy, and Emailable claims 99%. Both are vendor figures.',
        ],
      },
      {
        heading: 'Bouncer vs Emailable on catch-all and gateway addresses',
        paragraphs: [
          'A catch-all domain will accept a message to any address on it. Without an extra check, you cannot tell which mailboxes are real.',
          'Bouncer resolves catch-all addresses on Google and Microsoft domains through Deep Catch-All Verification. Emailable marks accept-all addresses Risky and leaves the mailbox unconfirmed.',
          'Secure email gateways such as Proofpoint and Mimecast can hide whether a company mailbox exists. Emailable advertises detection for Proofpoint, Mimecast and Barracuda and flags those addresses. Bouncer does not advertise gateway verification.',
          'The [secure email gateway verification](/seg-email-verification) page explains how these addresses get checked.',
        ],
        giggalEdgeLabel: 'Catch-all and gateway rows on Giggal.ai.',
        giggalEdge:
          'Giggal.ai returns deliverable or undeliverable on catch-all addresses for 1 credit. It verifies behind 15 named gateways, including Proofpoint, Mimecast and Barracuda.',
      },
      {
        heading: 'Bouncer vs Emailable pricing from 10,000 to 1,000,000 emails',
        paragraphs: [
          'At 10,000 emails, both tools list $60. Bouncer lists $400 for 100,000 and $2,000 for a million. Emailable lists $420 for 100,000 and $2,100 for a million.',
          'Bouncer sells a smallest pack of 1,000 emails for $8. Emailable starts at 5,000 emails for $38.',
          'Unknown results are free on both tools. Emailable skips duplicates as well.',
        ],
        giggalEdgeLabel: 'Giggal.ai at 10,000 to 1,000,000.',
        giggalEdge:
          'Giggal.ai lists $9.90 for 10,000, $76 for 100,000 and $680 for 1,000,000. There is no subscription to keep.',
      },
      {
        heading: 'Free credits and expiry on Bouncer and Emailable',
        paragraphs: [
          'Bouncer gives 100 free credits. Emailable gives 250. Neither Bouncer nor Emailable sets an expiry date on paid credits.',
        ],
        giggalEdgeLabel: 'A larger free test on Giggal.ai.',
        giggalEdge:
          'Giggal.ai starts each account with 1,000 free credits and no card. They work on a bulk upload of a real list.',
      },
      {
        heading: 'Bouncer or Emailable: which verifier to choose',
        paragraphs: [
          'Choose Bouncer if you need catch-all results on Google and Microsoft domains. Its toxicity check and SOC 2 Type II report suit compliance-focused teams.',
          'Choose Emailable if you want fast bulk runs and a 250-credit start. Its native integrations cover around 90 apps.',
          'If you only need an existing list checked, a plain verifier is enough. Test the same sample in each tool and count the catch-all and gateway rows.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is Bouncer better than Emailable?',
        a: 'They differ on catch-all. Bouncer resolves catch-all addresses on Google and Microsoft domains. Emailable marks them Risky. Both list $60 for 10,000 emails.',
      },
      {
        q: 'How much do Bouncer and Emailable cost for 1,000,000 emails?',
        a: 'Bouncer lists $2,000 for a million emails. Emailable lists $2,100. Giggal.ai lists $680 at that volume.',
      },
      {
        q: 'What is the Bouncer Email Toxicity Check?',
        a: 'It is a Bouncer feature that flags spam traps and complainers on your list. Giggal.ai does not offer this check.',
      },
      {
        q: 'Do Bouncer and Emailable verify behind secure email gateways?',
        a: 'Emailable advertises detection for Proofpoint, Mimecast and Barracuda and flags those addresses. Bouncer does not advertise gateway verification. Giggal.ai verifies behind 15 named gateways.',
      },
      {
        q: 'Do Bouncer or Emailable credits expire?',
        a: 'No. Paid credits never expire on Bouncer or Emailable. The same is true on Giggal.ai.',
      },
      {
        q: 'Is there a free way to test Giggal.ai?',
        a: 'Yes. Sign up without a card and you get 1,000 free credits for a bulk upload. Run a list you already checked in Bouncer or Emailable.',
      },
    ],
  },
}
