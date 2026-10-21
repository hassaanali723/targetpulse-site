// PLATFORMS. Facts: lib/competitorPricing.ts and lib/compareProfiles.ts. Rules: see ./types.ts.
import type { PairContent } from './types'

export const PLATFORMS: Record<string, PairContent> = {
  'hunter-vs-apollo': {
    metaTitle: 'Hunter vs Apollo: Email Verification Compared | Giggal.ai',
    metaDescription:
      'Hunter vs Apollo compared as email verifiers: what each platform is for, subscription and seat pricing, catch-all handling and free plans.',
    ogTitle: 'Hunter vs Apollo: how each platform verifies email',
    intro:
      'Hunter and Apollo both verify email addresses, but neither is a pure email verifier. Hunter is an email finder with cold outreach campaigns built in. Apollo is a sales platform with a large B2B contact database, sequences and a dialer. This Hunter vs Apollo page compares them as verification tools: pricing, catch-all handling, free plans and fit.',
    sections: [
      {
        heading: 'Hunter vs Apollo: an email finder and a sales database',
        paragraphs: [
          'Hunter is built around finding emails. Its email finder and domain search are the core of the product. You can also run cold outreach campaigns from the same tool. It has a very large integration list and a public API.',
          'Apollo is built around its data. It gives you a very large B2B contact and company database. Sales engagement, sequences and a dialer sit in the same platform.',
          'In both tools, verification is one feature inside a larger product. Neither one is sold as a stand-alone email verifier. So the main choice is which platform your team needs for prospecting. The verification comes with that choice.',
        ],
      },
      {
        heading: 'How Hunter and Apollo verify catch-all addresses',
        paragraphs: [
          'A catch-all domain accepts mail for any name at that company. A standard check cannot tell whether the mailbox exists. B2B lists often contain many of these addresses.',
          'Hunter marks catch-all addresses as accept-all. It attempts to confirm them on some major providers, and otherwise leaves the flag in place. Hunter does not publish an accuracy figure.',
          'Apollo markets a seven-step process for catch-all domains. It claims 91% accuracy in telling valid from invalid addresses there. It still keeps a Catch-all label on its results. The 91% figure is Apollo’s own claim, not a third-party result.',
        ],
        giggalEdgeLabel: 'How Giggal.ai handles catch-all.',
        giggalEdge:
          'Giggal.ai returns a deliverable or undeliverable result on catch-all addresses, at 1 credit per email. It also verifies behind 15 named secure email gateways, such as Mimecast and Proofpoint.',
      },
      {
        heading: 'Hunter vs Apollo pricing for email verification',
        paragraphs: [
          'Hunter is a monthly subscription with pooled credits. Each verification uses half a credit. Paid plans start at $49 a month. The smallest plan that covers 10,000 verifications a month is Growth, at $149 a month billed monthly. Annual billing is lower. Volumes of 100,000 a month and above need an enterprise quote.',
          'Apollo is priced per user seat. Paid plans are Basic at $49, Professional at $79 and Organization at $119 per user each month, billed annually. Verification draws on email credits, which are fair-use unlimited on paid plans. So Apollo has no per-verification price to compare.',
          'Plan credits reset each month in both tools. Apollo does not roll unused credits over.',
        ],
        giggalEdgeLabel: 'How Giggal.ai prices it.',
        giggalEdge:
          'Giggal.ai is pay-as-you-go: $9.90 for 10,000 emails, $76 for 100,000 and $680 for a million. There is no subscription, and credits never expire.',
      },
      {
        heading: 'Free plans on Hunter and Apollo',
        paragraphs: [
          'Hunter has a free plan with 50 credits a month. Finding and verifying draw on the same pooled balance. Apollo has a free-forever starter plan with limited monthly credits.',
          'To compare verification fairly, run the same sample list through each tool. Then count how many addresses come back as accept-all or catch-all.',
        ],
        giggalEdgeLabel: 'Test a real list.',
        giggalEdge:
          'Giggal.ai gives 1,000 free credits with no card. They work on a bulk upload, so a real sample list fits.',
      },
      {
        heading: 'Hunter or Apollo: which one to choose',
        paragraphs: [
          'Choose Hunter if you mainly need to find email addresses by domain and email them from the same tool. It also suits teams that want a public API and many integrations.',
          'Choose Apollo if your team needs a B2B contact database, sequences and a dialer, priced per seat. Verification then comes bundled with each seat.',
          'If you already have your list and only need to check it, you may not need either platform. A dedicated [email verifier](/email-checker) can clean the list before it goes into your outreach sequences.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does Hunter or Apollo find email addresses?',
        a: 'Both do. Hunter is built around its email finder and domain search. Apollo gives access to a large B2B contact and company database. Giggal.ai does not find emails. It only verifies the addresses you already have.',
      },
      {
        q: 'Is Hunter or Apollo better for verifying B2B lists?',
        a: 'It depends on how many of your contacts sit on catch-all domains. Hunter flags most of them as accept-all. Apollo claims 91% accuracy on catch-all domains, which is its own figure. Run the same sample through both and compare the results.',
      },
      {
        q: 'How much do Hunter and Apollo cost for email verification?',
        a: 'Hunter covers 10,000 verifications a month on its Growth plan, at $149 a month billed monthly. Apollo charges per seat, from $49 per user a month billed annually, with fair-use unlimited email credits. In an Apollo vs Hunter cost check, seat count decides the total.',
      },
      {
        q: 'Do Hunter or Apollo credits roll over?',
        a: 'No. Hunter plan credits reset each month. Apollo plan credits also reset each month, with no rollover. Giggal.ai credits never expire.',
      },
      {
        q: 'Can I try Giggal.ai before deciding?',
        a: 'Yes. Giggal.ai gives 1,000 free credits with no card, usable on a bulk upload. Run the same list you would test in Hunter or Apollo and compare the catch-all results.',
      },
    ],
  },

  'hunter-vs-instantly': {
    metaTitle: 'Hunter vs Instantly for Email Verification | Giggal.ai',
    metaDescription:
      'Hunter vs Instantly: a finder-first platform against a cold email sender. Compare how each verifies leads, monthly plan prices and catch-all results.',
    ogTitle: 'Hunter vs Instantly: finder first or sending first',
    intro:
      'Hunter and Instantly both verify emails, but verification is a side feature in each. Hunter is a finder-first platform with outreach campaigns added. Instantly is a cold email sending platform with a lead database and verification built into the campaign flow. This Hunter vs Instantly page compares how each one verifies, what it costs and who it suits.',
    sections: [
      {
        heading: 'Hunter vs Instantly: finder first or sending first',
        paragraphs: [
          'Hunter starts with finding contacts. Its email finder and domain search are its main tools. It also runs cold outreach campaigns, and it offers a public API and a large integration list.',
          'Instantly starts with sending. It handles inbox rotation, warmup and sequencing in one platform. It also includes a B2B database of 450 million contacts in the same subscription.',
          'Both tools let you find leads and then email them. The difference is which half each one was built around.',
        ],
      },
      {
        heading: 'Where verification happens in Hunter and Instantly',
        paragraphs: [
          'In Hunter, verification is part of a finding and outreach workflow. Each verification uses half a credit from your monthly plan. That plan balance is shared with finding emails.',
          'In Instantly, verification runs automatically as leads enter a campaign. Each verified lead uses 0.25 of a credit. Those credits are shared with lead data and sending.',
          'So Instantly verifies without a separate step. In Hunter, the email verifier sits inside the finder workflow.',
        ],
        giggalEdgeLabel: 'Where Giggal.ai fits.',
        giggalEdge:
          'Giggal.ai is a separate email verifier. You can clean a list in it first, then import the confirmed addresses into Hunter or Instantly.',
      },
      {
        heading: 'Hunter vs Instantly on catch-all addresses',
        paragraphs: [
          'Catch-all domains accept mail sent to any address. A basic mailbox check gets no clear answer for them. Many company domains are set up this way.',
          'Hunter flags catch-all addresses as accept-all. On some major providers, it attempts a confirmation first.',
          'Instantly returns catch-all addresses as Valid, Invalid or Risky. By default, a campaign does not contact leads marked Risky. Neither Hunter nor Instantly publishes an accuracy figure for its checks.',
        ],
        giggalEdgeLabel: 'How Giggal.ai handles catch-all.',
        giggalEdge:
          'Giggal.ai resolves catch-all addresses to deliverable or undeliverable, at 1 credit per email. It also checks addresses behind 15 named secure email gateways.',
      },
      {
        heading: 'Hunter vs Instantly pricing',
        paragraphs: [
          'Hunter sells monthly plans with pooled credits. Paid plans start at $49 a month. Covering 10,000 verifications a month takes the Growth plan, at $149 a month billed monthly. Higher volumes are quoted as enterprise plans.',
          'Instantly sells credits for its lead and sending platform. Growth is $47 a month for 1,500 credits. Supersonic is $197 a month for 5,000 credits. At 0.25 credit per lead, 10,000 verifications a month needs 2,500 credits, which means Supersonic. The Hyper tier for higher volumes is published as a range starting at $197.',
          'Both platforms reset plan credits each month. Hunter has a free plan with 50 credits a month. Instantly does not publish a free tier. For [bulk email verification](/bulk-email-verifier) at 100,000 a month or more, neither platform publishes a fixed price.',
        ],
        giggalEdgeLabel: 'How Giggal.ai prices it.',
        giggalEdge:
          'Giggal.ai costs $9.90 for 10,000 emails, bought once. 100,000 emails cost $76 and a million cost $680. Credits never expire.',
      },
      {
        heading: 'Hunter or Instantly: which one to choose',
        paragraphs: [
          'Choose Hunter if finding emails by name and domain is your main task. Its finder, public API and integrations are the reasons to pick it.',
          'Choose Instantly if sending cold email at volume is your main task. Inbox rotation, warmup and automatic verification inside campaigns are built for that work.',
          'If your list already exists and many contacts sit on catch-all domains, test a dedicated [email checker](/email-checker) on a sample before you send.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does Hunter or Instantly send cold email campaigns?',
        a: 'Both do. Hunter includes cold outreach campaigns in the same tool as its finder. Instantly is built for sending, with inbox rotation, warmup and sequencing. Giggal.ai does not send campaigns. It verifies the list before you send.',
      },
      {
        q: 'Does Hunter or Instantly find email addresses?',
        a: 'Hunter is an email finder with domain search. Instantly includes a 450 million contact B2B database in its subscription. Giggal.ai does not find emails. It checks the addresses you already have.',
      },
      {
        q: 'How much does it cost to verify 10,000 emails a month in Hunter or Instantly?',
        a: 'Hunter needs its Growth plan, at $149 a month billed monthly. Instantly needs its Supersonic plan, at $197 a month. In an Instantly vs Hunter cost check, note that both plans also pay for finding or sending.',
      },
      {
        q: 'What happens to catch-all leads in Hunter and Instantly?',
        a: 'Hunter flags them as accept-all, with a confirmation attempt on some major providers. Instantly marks them Valid, Invalid or Risky, and does not contact Risky leads by default.',
      },
      {
        q: 'Can I try Giggal.ai before deciding?',
        a: 'Yes. Giggal.ai gives 1,000 free credits with no card, usable on a bulk upload. Run the same list you would test in Hunter or Instantly and compare the catch-all results.',
      },
    ],
  },

  'millionverifier-vs-hunter': {
    metaTitle: 'MillionVerifier vs Hunter: Email Verifier Comparison | Giggal.ai',
    metaDescription:
      'MillionVerifier vs Hunter: one-time verification packs against a finder subscription. Compare prices, catch-all results, free credits and expiry.',
    ogTitle: 'MillionVerifier vs Hunter: bulk verifier or finder platform',
    intro:
      'MillionVerifier is a pure email verifier sold in one-time credit packs. Hunter is an email finder with outreach campaigns, and its verification comes inside a monthly subscription. This MillionVerifier vs Hunter page compares what each tool does, how it charges and how it handles catch-all addresses. Prices are each vendor’s published figures.',
    sections: [
      {
        heading: 'MillionVerifier vs Hunter: a bulk verifier and a finder platform',
        paragraphs: [
          'MillionVerifier is an email verifier with one job. It checks lists of addresses you already have, in high volume, at a low published rate. It is ISO 27001 certified.',
          'Hunter has a different main job. It finds email addresses by name and domain, then lets you run cold outreach from the same tool. Verification is included, but it is not the core product.',
          'So the first question is whether you need to find contacts or only check them. If you only need bulk email verification, a finder subscription covers more than that job.',
        ],
      },
      {
        heading: 'MillionVerifier vs Hunter pricing: one-time packs or a monthly plan',
        paragraphs: [
          'MillionVerifier sells credits once. It costs $39 for 10,000 emails, $149 for 100,000 and $449 for a million. Its credits never expire.',
          'Hunter sells a monthly subscription with pooled credits, and each verification uses half a credit. Paid plans start at $49 a month. The smallest plan for 10,000 verifications a month is Growth, at $149 a month billed monthly. Annual billing is lower. For 100,000 or a million a month, Hunter quotes enterprise pricing.',
          'These numbers are not the same kind of price. MillionVerifier’s figures are one-time costs. Hunter’s is a monthly fee that repeats, and it also pays for finding emails. Hunter plan credits reset each month.',
        ],
        giggalEdgeLabel: 'How Giggal.ai prices it.',
        giggalEdge:
          'Giggal.ai also sells one-time packs: $9.90 for 10,000, $76 for 100,000 and $680 for a million. Credits never expire.',
      },
      {
        heading: 'How MillionVerifier and Hunter treat catch-all addresses',
        paragraphs: [
          'Catch-all servers accept every address at the domain, real or not. Each tool then has to decide how to report those addresses.',
          'MillionVerifier runs a Catch-All Verifier. It states that this resolves 30 to 40% of catch-all addresses and marks the rest Risky. In a test published by LeadMagic on 25 February 2026, it resolved 5% of them. LeadMagic sells a competing verifier, so read that as a vendor test.',
          'Hunter flags catch-all addresses as accept-all. It attempts confirmation on some major providers. Hunter does not publish an accuracy figure for this.',
        ],
        giggalEdgeLabel: 'How Giggal.ai handles catch-all.',
        giggalEdge:
          'Giggal.ai returns deliverable or undeliverable on catch-all addresses, at the same 1 credit as any other check.',
      },
      {
        heading: 'Free credits, unknown results and guarantees',
        paragraphs: [
          'MillionVerifier gives 100 free credits. It does not charge for risky or catch-all results. It offers a money-back guarantee if your hard bounce rate goes above 4%.',
          'MillionVerifier claims 99%+ accuracy. In the same LeadMagic test, it scored 95.8% overall. LeadMagic sells its own verifier, so that score is a vendor result.',
          'Hunter’s free plan gives 50 credits a month. Hunter does not publish a rule on charging for unknown results.',
        ],
        giggalEdgeLabel: 'Test a real list.',
        giggalEdge:
          'Giggal.ai does not charge for unknown results. It gives 1,000 free credits with no card, usable on a bulk upload.',
      },
      {
        heading: 'MillionVerifier or Hunter: which email checker to choose',
        paragraphs: [
          'Choose MillionVerifier if you clean large lists and want a low published rate per pack. It suits high-volume senders who do not need catch-all addresses confirmed.',
          'Choose Hunter if you need to find emails and verify them in one subscription. It suits teams that value prospecting and outreach in one place more than the verification price.',
          'If a large share of your list sits on catch-all domains, compare how many of those addresses each [email verification tool](/) resolves. Run the same sample through both first.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is MillionVerifier or Hunter better for bulk email verification?',
        a: 'MillionVerifier is built for bulk lists, sold in one-time packs up to a million emails for $449. Hunter verifies inside a monthly plan, and volumes above its standard plans need an enterprise quote.',
      },
      {
        q: 'Does MillionVerifier find email addresses like Hunter?',
        a: 'No. MillionVerifier only verifies addresses. Hunter finds addresses by name and domain and also verifies them. Giggal.ai is a verifier too and does not find emails.',
      },
      {
        q: 'How much do MillionVerifier and Hunter cost for 10,000 emails?',
        a: 'MillionVerifier costs $39 for 10,000 emails, bought once. Hunter covers 10,000 verifications a month on Growth, at $149 a month billed monthly. In a Hunter vs MillionVerifier price check, keep in mind that Hunter’s fee repeats each month.',
      },
      {
        q: 'Do MillionVerifier or Hunter credits expire?',
        a: 'MillionVerifier credits never expire. Hunter plan credits reset each month. Giggal.ai credits never expire.',
      },
      {
        q: 'Can I try Giggal.ai before deciding?',
        a: 'Yes. Giggal.ai gives 1,000 free credits with no card, usable on a bulk upload. Run the same list you would test in MillionVerifier or Hunter and compare the catch-all results.',
      },
    ],
  },

  'neverbounce-vs-apollo': {
    metaTitle: 'NeverBounce vs Apollo: Verifier or Sales Platform | Giggal.ai',
    metaDescription:
      'NeverBounce vs Apollo: a CRM-integrated email verifier against a per-seat sales platform. Compare pricing, catch-all claims, free credits and expiry.',
    ogTitle: 'NeverBounce vs Apollo: list cleaner or sales platform',
    intro:
      'NeverBounce is a pure email verifier known for cleaning lists inside CRMs. Apollo is a sales intelligence platform with a large B2B contact database, where verification is one bundled feature. This NeverBounce vs Apollo page compares what each tool does, how it prices verification and how it treats catch-all addresses.',
    sections: [
      {
        heading: 'NeverBounce vs Apollo: a list cleaner and a sales platform',
        paragraphs: [
          'NeverBounce is an email verifier built to clean lists. It offers roughly 80 or more native integrations, including Salesforce, HubSpot and Marketo. List cleaning can run natively inside the CRM. It is also a natural fit if your contact data lives in ZoomInfo.',
          'Apollo exists to find and contact buyers. It gives you a very large B2B contact and company database. Sales engagement, sequences and a dialer are part of the same platform. Verification comes bundled with your seat.',
          'If you already own a contact list, NeverBounce handles the verification job on its own. If you need the contacts as well, Apollo covers both.',
        ],
      },
      {
        heading: 'NeverBounce vs Apollo pricing',
        paragraphs: [
          'NeverBounce sells verification by volume. It costs $50 for 10,000 emails, $400 for 100,000 and $2,500 for a million. The smallest pack is 1,000 emails for $8. Credits expire 12 months after purchase.',
          'Apollo does not sell verification by volume. It charges per user seat: Basic at $49, Professional at $79 and Organization at $119 per user each month, billed annually. Paid plans include fair-use unlimited email credits, which reset each month. So there is no per-email price to set against NeverBounce.',
        ],
        giggalEdgeLabel: 'How Giggal.ai prices it.',
        giggalEdge:
          'Giggal.ai costs $9.90 for 10,000 emails, $76 for 100,000 and $680 for a million. Credits never expire.',
      },
      {
        heading: 'How NeverBounce and Apollo handle catch-all addresses',
        paragraphs: [
          'A catch-all address sits on a domain that accepts any mailbox name. A standard check gets no clear yes or no for it.',
          'NeverBounce labels these addresses Accept-All and resolves only a small share. In a LeadMagic test published on 25 February 2026, it resolved 8% of catch-all addresses and scored 96.9% overall. LeadMagic sells a competing verifier, so this is a vendor test.',
          'Apollo markets a seven-step process for catch-all domains. It claims 91% accuracy in separating valid from invalid addresses there. That is Apollo’s own claim, not a third-party result.',
        ],
        giggalEdgeLabel: 'How Giggal.ai handles catch-all.',
        giggalEdge:
          'Giggal.ai resolves catch-all addresses to deliverable or undeliverable at 1 credit each. It also verifies behind 15 named secure email gateways, including Barracuda.',
      },
      {
        heading: 'Free credits and where each tool connects',
        paragraphs: [
          'NeverBounce gives 10 free credits on signup. Apollo has a free-forever starter plan with limited monthly credits.',
          'NeverBounce connects to CRMs and marketing tools such as Salesforce, HubSpot and Marketo. Apollo keeps contacts, sequences and calls inside its own platform. Your choice may depend on where your contacts already live.',
        ],
        giggalEdgeLabel: 'Test a real list.',
        giggalEdge:
          'Giggal.ai gives 1,000 free credits with no card, and they work on a bulk upload.',
      },
      {
        heading: 'NeverBounce or Apollo: which email verification tool to choose',
        paragraphs: [
          'Choose NeverBounce if your list is already in Salesforce, HubSpot or Marketo and you want it cleaned there. It is a dedicated email verification tool with published volume prices.',
          'Choose Apollo if a sales team needs a B2B database, sequences and a dialer. Verification then comes with each seat, with no separate bill.',
          'If you use Apollo for data but your lists hold many catch-all contacts, test a separate [email verifier](/email-checker) on a sample before you send.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does NeverBounce or Apollo find email addresses?',
        a: 'Apollo does, through its B2B contact and company database. NeverBounce does not. It only verifies addresses you already have. Giggal.ai also only verifies.',
      },
      {
        q: 'How much do NeverBounce and Apollo cost for 100,000 emails?',
        a: 'NeverBounce costs $400 for 100,000 emails. Apollo has no volume price. It charges per seat, from $49 per user a month billed annually. Giggal.ai costs $76 for 100,000.',
      },
      {
        q: 'Is Apollo vs NeverBounce a fair comparison for list cleaning?',
        a: 'Partly. NeverBounce is built only for verification. Apollo bundles verification into a much larger sales suite. Compare them on your own list and on what else you need from the tool.',
      },
      {
        q: 'Do NeverBounce or Apollo credits expire?',
        a: 'NeverBounce credits expire 12 months after purchase. Apollo plan credits reset each month with no rollover. Giggal.ai credits never expire.',
      },
      {
        q: 'Can I try Giggal.ai before deciding?',
        a: 'Yes. Giggal.ai gives 1,000 free credits with no card, usable on a bulk upload. Run the same list you would test in NeverBounce or Apollo and compare the catch-all results.',
      },
    ],
  },
}
