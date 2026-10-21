// PLATFORMS_B. Facts: lib/competitorPricing.ts and lib/compareProfiles.ts. Rules: see ./types.ts.
import type { PairContent } from './types'

export const PLATFORMS_B: Record<string, PairContent> = {
  'snovio-vs-instantly': {
    metaTitle: 'Snov.io vs Instantly: Email Verification Compared | Giggal.ai',
    metaDescription:
      'Snov.io vs Instantly compared on how each verifies leads, monthly plan prices, catch-all results, credit rollover, and finding emails vs sending them.',
    ogTitle: 'Snov.io vs Instantly: how each platform verifies your leads',
    intro:
      'Snov.io and Instantly are sales platforms that include email verification as one feature. Snov.io starts from finding emails, with drip campaigns and a lightweight CRM added on. Instantly starts from sending cold email, and verifies leads as they enter a campaign. This page compares how each one verifies, what the monthly plans cost, and how each treats catch-all addresses.',
    sections: [
      {
        heading: 'The main difference between Snov.io and Instantly',
        paragraphs: [
          'Snov.io is a finder-first platform. It finds email addresses, verifies them and sends drip campaigns. It also includes LinkedIn prospecting tools, a lightweight CRM, a large integration list and a public API.',
          'Instantly is a sending-first platform. It runs inbox rotation, warmup and sequencing for cold email. Its subscription also includes a B2B database of 450 million contacts.',
          'Both tools verify, but at different points. In Snov.io, you usually verify an address after you find it. In Instantly, verification runs automatically as leads enter a campaign. Neither platform is a standalone email verifier.',
        ],
      },
      {
        heading: 'How verification spends credits in each platform',
        paragraphs: [
          'Snov.io spends 1 pooled plan credit on each verification. The same monthly credits pay for its other features, so verification shares that allowance.',
          'Instantly spends 0.25 of a credit per lead verified. Its credits also pay for lead data and sending, so verification shares that pool too.',
          'For bulk email verification, this matters. A large cleaning job in either tool uses credits you may need for finding or sending later that month.',
        ],
        giggalEdgeLabel: 'A separate verification step.',
        giggalEdge:
          'Giggal.ai is only an email verifier. It does not find emails or send campaigns. Teams run a list through it, then import the clean list into the platform they send from.',
      },
      {
        heading: 'Snov.io vs Instantly pricing for verification',
        paragraphs: [
          'Both are monthly subscriptions, so these figures are plans, not one-time prices. Snov.io’s smallest plan covering 10,000 verifications a month costs $189. For 100,000 a month, the plan costs $738. A million a month is a custom plan. Annual billing is about 25% less.',
          'Instantly’s Growth plan is $47 a month for 1,500 credits. Supersonic is $197 a month for 5,000 credits. At 0.25 credit per lead, 10,000 verifications need 2,500 credits, which means Supersonic. Higher volumes sit on the Hyper tier, published as a range starting at $197.',
          'Credit rules differ. Snov.io plan credits roll over while the subscription is active. Instantly plan credits reset every month. Snov.io gives 50 credits on its free trial. Instantly does not publish a free allowance.',
        ],
        giggalEdgeLabel: 'How Giggal.ai prices it.',
        giggalEdge:
          'Giggal.ai has no subscription. It costs $9.90 for 10,000 emails, $76 for 100,000 and $680 for a million, and the credits never expire.',
      },
      {
        heading: 'Catch-all addresses in Snov.io and Instantly',
        paragraphs: [
          'A catch-all domain accepts mail for any name at that company. A standard [email checker](/email-checker) cannot tell whether the specific mailbox exists.',
          'Snov.io flags catch-all addresses and does not confirm the mailbox behind them. Instantly returns these addresses as Valid, Invalid or Risky. By default, it does not contact leads marked Risky.',
          'If your list has many company domains, check how many leads each tool flags or marks Risky.',
        ],
        giggalEdgeLabel: 'How Giggal.ai handles catch-all.',
        giggalEdge:
          'Giggal.ai returns deliverable or undeliverable on catch-all addresses at 1 credit each. It also verifies behind 15 named secure email gateways, including Mimecast and Proofpoint.',
      },
      {
        heading: 'Snov.io or Instantly: which one to choose',
        paragraphs: [
          'Choose Snov.io if you need to find email addresses and build lists from LinkedIn. Its finder, drip campaigns and CRM all sit on one plan.',
          'Choose Instantly if your main job is sending cold email at volume. Its inbox rotation, warmup and built-in contact database are the reasons to pick it.',
          'Pick the platform for the job you do most, not for its verification feature. You can keep either one and verify the list in a dedicated email verification tool before it goes in.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does Snov.io or Instantly find email addresses?',
        a: 'Snov.io has an email finder and LinkedIn prospecting tools. Instantly includes a B2B database of 450 million contacts in its subscription. Giggal.ai does not find emails. It only verifies addresses you already have.',
      },
      {
        q: 'How much do Snov.io and Instantly cost for 10,000 verifications a month?',
        a: 'Snov.io’s smallest plan covering 10,000 verifications a month is $189. Instantly needs its Supersonic plan at $197 a month, because each verification costs 0.25 credit. Giggal.ai costs $9.90 for 10,000, bought once.',
      },
      {
        q: 'Instantly vs Snov.io: how do they treat catch-all addresses?',
        a: 'Snov.io flags catch-all addresses without confirming them. Instantly returns Valid, Invalid or Risky, and skips Risky leads by default. Test the same sample in each tool and count the flagged or Risky results.',
      },
      {
        q: 'Do Snov.io or Instantly credits expire?',
        a: 'Snov.io plan credits roll over while your subscription stays active. Instantly plan credits reset every month. Giggal.ai credits never expire.',
      },
      {
        q: 'Can I try Giggal.ai before deciding?',
        a: 'Yes. Giggal.ai gives 1,000 free credits with no card, usable on a bulk upload. Run the same list you would test in Snov.io or Instantly and compare the catch-all results.',
      },
    ],
  },

  'neverbounce-vs-findymail': {
    metaTitle: 'NeverBounce vs Findymail: Email Verifier or Finder | Giggal.ai',
    metaDescription:
      'NeverBounce vs Findymail: a CRM-focused email verifier against an email finder that verifies. Compare pricing, catch-all results, free credits and expiry.',
    ogTitle: 'NeverBounce vs Findymail: verifier or finder for your list',
    intro:
      'NeverBounce is a pure email verifier built around CRM integrations. Findymail is an email finder that verifies the addresses it finds, sold as one monthly plan. The core difference is whether you already have your list or still need to build it. This page compares pricing, catch-all handling, free credits and credit rules, using each vendor’s published numbers.',
    sections: [
      {
        heading: 'The main difference between NeverBounce and Findymail',
        paragraphs: [
          'NeverBounce is an email verifier for addresses you already have. It offers 80 or more native integrations, including Salesforce, HubSpot and Marketo. That lets a team clean contacts inside its CRM without exporting a file. It is also a natural fit if your contact data lives in ZoomInfo.',
          'Findymail finds addresses first, then verifies them. It scrapes natively from Sales Navigator and Apollo exports. One subscription covers both the finding and the verifying.',
          'If you need new contacts, NeverBounce does not find them. If your contacts already sit in a CRM, NeverBounce’s integrations are the closer fit.',
        ],
      },
      {
        heading: 'NeverBounce vs Findymail pricing',
        paragraphs: [
          'NeverBounce sells credit packs. It costs $50 for 10,000 emails, $400 for 100,000 and $2,500 for a million. Its smallest pack is 1,000 emails for $8.',
          'Findymail publishes one standard plan, Starter, at $99 a month. It carries 5,000 finder credits and 5,000 verifier credits. Anything above that is quoted as Enterprise. So there is no published Findymail price for 10,000, 100,000 or a million verifications a month.',
          'Credit rules differ too. NeverBounce credits expire 12 months after purchase. Findymail rolls unused credits over, up to twice the monthly allowance.',
        ],
        giggalEdgeLabel: 'How Giggal.ai prices it.',
        giggalEdge:
          'Giggal.ai sells one-time credits: $9.90 for 10,000 emails, $76 for 100,000 and $680 for a million. The smallest pack is 3,000 for $5, and credits never expire.',
      },
      {
        heading: 'How NeverBounce and Findymail handle catch-all addresses',
        paragraphs: [
          'A catch-all domain accepts mail for every name, so a basic email checker cannot confirm the mailbox. B2B lists often contain many of these addresses.',
          'NeverBounce marks these addresses Accept-All and resolves only a small share. In a test published by LeadMagic in February 2026, it resolved 8% of catch-alls. LeadMagic sells a competing verifier, so treat that as a vendor test.',
          'Findymail verifies catch-all addresses instead of flagging them. Each one costs 1 credit, the same as any other check. Findymail reports recovering around 23% more valid emails this way.',
        ],
        giggalEdgeLabel: 'Catch-all and gateways.',
        giggalEdge:
          'Giggal.ai resolves catch-all addresses at 1 credit too. It also verifies behind 15 named secure email gateways, such as Mimecast, Proofpoint and Barracuda. Neither NeverBounce nor Findymail advertises gateway support.',
      },
      {
        heading: 'Free credits, unknown results and guarantees',
        paragraphs: [
          'NeverBounce gives 10 free credits on signup. Findymail gives 10 credits on signup, with no card. Neither amount is enough to test a full list.',
          'Findymail does not charge for unknown results. It also guarantees a bounce rate under 5%, and refunds credits above that. NeverBounce does not publish a rule on unknown results.',
        ],
        giggalEdgeLabel: 'Test a real list.',
        giggalEdge:
          'Giggal.ai gives 1,000 free credits with no card, and they work on a bulk upload. Unknown results are not charged.',
      },
      {
        heading: 'NeverBounce or Findymail: which one to choose',
        paragraphs: [
          'Choose NeverBounce if your contacts live in Salesforce, HubSpot or Marketo. It cleans them in place and publishes prices up to a million emails.',
          'Choose Findymail if you still need to find addresses, for example from Sales Navigator. Its single plan covers finding and verifying, with a bounce-rate guarantee.',
          'If you already have a large B2B list and only need it verified, add a third option. Run the same sample through a dedicated [email verification tool](/) and compare the catch-all results.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does NeverBounce or Findymail find email addresses?',
        a: 'Findymail finds addresses and verifies them on the same plan. NeverBounce only verifies addresses you already have. Giggal.ai also only verifies, and does not find emails.',
      },
      {
        q: 'How much do NeverBounce and Findymail cost for 10,000 emails?',
        a: 'NeverBounce costs $50 for 10,000 emails, bought once. Findymail publishes no price at that volume, since its $99 Starter plan carries 5,000 verifier credits. Giggal.ai costs $9.90 for 10,000.',
      },
      {
        q: 'Findymail vs NeverBounce: which handles catch-all addresses better?',
        a: 'Findymail verifies catch-all addresses at 1 credit each. NeverBounce marks them Accept-All and resolved 8% in a test by LeadMagic, a competing vendor. If your list has many company domains, test both on the same sample.',
      },
      {
        q: 'Do NeverBounce or Findymail credits expire?',
        a: 'NeverBounce credits expire 12 months after purchase. Findymail rolls unused credits over, up to twice the monthly allowance. Giggal.ai credits never expire.',
      },
      {
        q: 'Can I try Giggal.ai before deciding?',
        a: 'Yes. Giggal.ai gives 1,000 free credits with no card, usable on a bulk upload. Run the same list you would test in NeverBounce or Findymail and compare the catch-all results.',
      },
    ],
  },

  'zerobounce-vs-findymail': {
    metaTitle: 'ZeroBounce vs Findymail: Verifier or Email Finder? | Giggal.ai',
    metaDescription:
      'ZeroBounce vs Findymail: a deliverability suite against an email finder that verifies. Compare pricing, catch-all results, free credits and bounce guarantees.',
    ogTitle: 'ZeroBounce vs Findymail: which one fits your list',
    intro:
      'ZeroBounce is an email verifier wrapped in a broad deliverability suite. Findymail is an email finder that verifies what it finds, on one monthly plan. ZeroBounce adds tools for inbox placement and domain health, while Findymail adds tools for finding new contacts. This page compares pricing, catch-all handling, free credits and guarantees, using each vendor’s published numbers.',
    sections: [
      {
        heading: 'The main difference between ZeroBounce and Findymail',
        paragraphs: [
          'ZeroBounce is an email verifier for lists you already have. Around that, it sells inbox placement testing, DMARC monitoring, blacklist monitoring and email warmup.',
          'Findymail finds addresses and then verifies them. It scrapes natively from Sales Navigator and Apollo exports. Finding and verifying sit on a single subscription.',
          'So the choice depends on the state of your list. A list that already exists needs an [email verifier](/email-checker). A list you have not built yet needs a finder.',
        ],
      },
      {
        heading: 'ZeroBounce vs Findymail pricing',
        paragraphs: [
          'ZeroBounce publishes prices by credit volume. It costs $129 for 10,000 emails, $649 for 100,000 and $3,199 for a million. The minimum purchase is 2,000 credits for $39.',
          'Findymail’s only published plan is Starter at $99 a month. That plan includes 5,000 verifier credits and 5,000 finder credits. Higher volumes are quoted as Enterprise, with no public price.',
          'ZeroBounce credits never expire. Findymail carries unused credits forward, up to twice its monthly allowance.',
        ],
        giggalEdgeLabel: 'How Giggal.ai prices it.',
        giggalEdge:
          'Giggal.ai costs $9.90 for 10,000 emails, $76 for 100,000 and $680 for a million. There is no monthly plan, and credits never expire.',
      },
      {
        heading: 'Catch-all results: a score or a verified answer',
        paragraphs: [
          'Catch-all domains accept any address, so a standard check gives no clear result. ZeroBounce scores these addresses from 1 to 10 with AI. The score is a likelihood, not a valid or invalid result.',
          'In a test published by LeadMagic on 25 February 2026, ZeroBounce resolved 12% of catch-alls. Its overall accuracy in that test was 97.8%. LeadMagic sells a competing verifier, so this is a vendor test. ZeroBounce itself claims 99.6% accuracy.',
          'Findymail verifies catch-all addresses at 1 credit, like any other check. It reports finding around 23% more valid emails this way.',
        ],
        giggalEdgeLabel: 'How Giggal.ai handles catch-all.',
        giggalEdge:
          'Giggal.ai resolves catch-all addresses to deliverable or undeliverable at 1 credit. Like ZeroBounce, it verifies behind secure email gateways, and it names 15 of them.',
      },
      {
        heading: 'Free credits and what each tool does not charge for',
        paragraphs: [
          'ZeroBounce gives 100 free credits every month. Findymail gives 10 credits on signup, with no card required.',
          'Neither tool charges for unknown results. ZeroBounce also does not charge for duplicates. Findymail guarantees a bounce rate under 5%, and refunds credits when it goes above that.',
        ],
        giggalEdgeLabel: 'Test a real list.',
        giggalEdge:
          'Giggal.ai gives 1,000 free credits with no card. You can use them on a bulk upload, not only single checks.',
      },
      {
        heading: 'ZeroBounce or Findymail: which one to choose',
        paragraphs: [
          'Choose ZeroBounce if you send a lot of email and want domain health tools in one account. Its DMARC, blacklist and inbox placement tools go beyond verification.',
          'Choose Findymail if you prospect from Sales Navigator or Apollo and need addresses found. Its bounce-rate guarantee is backed by refunded credits.',
          'If you have a B2B list with many catch-all addresses, compare the results directly. Run one sample through each tool and a third email checker, then count the clear answers.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Does ZeroBounce or Findymail find email addresses?',
        a: 'Findymail finds email addresses and verifies them. ZeroBounce verifies addresses you already have. Giggal.ai is a verifier only and does not find emails.',
      },
      {
        q: 'How much do ZeroBounce and Findymail cost for 100,000 emails?',
        a: 'ZeroBounce costs $649 for 100,000 emails. Findymail does not publish a price at that volume and quotes it as Enterprise. Giggal.ai costs $76 for 100,000.',
      },
      {
        q: 'Findymail vs ZeroBounce: which handles catch-all addresses better?',
        a: 'Findymail verifies catch-all addresses and returns a result. ZeroBounce gives them an AI score from 1 to 10. A score still leaves you to decide whether to send.',
      },
      {
        q: 'Is ZeroBounce or Findymail better for B2B lists?',
        a: 'It depends on whether the list exists yet. Findymail suits teams building B2B lists from Sales Navigator or Apollo. ZeroBounce suits teams verifying lists they already own, with deliverability tools alongside.',
      },
      {
        q: 'Can I try Giggal.ai before deciding?',
        a: 'Yes. Giggal.ai gives 1,000 free credits with no card, usable on a bulk upload. Run the same list you would test in ZeroBounce or Findymail and compare the catch-all results.',
      },
    ],
  },

  'zerobounce-vs-leadmagic': {
    metaTitle: 'ZeroBounce vs LeadMagic: Email Verification Compared | Giggal.ai',
    metaDescription:
      'ZeroBounce vs LeadMagic compared on price at 10,000 and 100,000 emails, catch-all handling, credit rules, and who published the LeadMagic benchmark.',
    ogTitle: 'ZeroBounce vs LeadMagic: verifier or enrichment platform',
    intro:
      'ZeroBounce is an email verifier sold alongside a deliverability suite. LeadMagic is a sales intelligence platform where verification shares one credit pool with enrichment. The core difference is whether you want verification on its own or a wider data subscription. This page compares pricing, catch-all handling and credit rules, and explains the benchmark LeadMagic published.',
    sections: [
      {
        heading: 'The main difference between ZeroBounce and LeadMagic',
        paragraphs: [
          'ZeroBounce focuses on verification and sender health. It adds inbox placement testing, DMARC monitoring, blacklist monitoring and email warmup.',
          'LeadMagic focuses on data about contacts and companies. Its credits pay for mobile numbers, company data, job changes and ad intelligence. Verification is one of those endpoints, inside a developer-first API with per-endpoint credit pricing.',
          'In LeadMagic, verification shares the credit pool with every other endpoint. A big verification job leaves fewer credits for enrichment that month.',
        ],
      },
      {
        heading: 'ZeroBounce vs LeadMagic pricing',
        paragraphs: [
          'ZeroBounce publishes prices by credit volume. It costs $129 for 10,000 emails, $649 for 100,000 and $3,199 for a million. The minimum purchase is 2,000 credits for $39, and credits never expire.',
          'LeadMagic is a monthly subscription with a shared credit pool. Plans run from $49.99 a month for 2,000 credits to $849 for 100,000. The smallest plan covering 10,000 verifications a month is Growth at $249. For 100,000 a month, it is Ultimate at $849. A million a month is an Enterprise quote.',
          'Annual billing on LeadMagic is roughly 17% less. Credits roll over up to two months on the $99 plan and above. The $49.99 Basic plan has no rollover.',
        ],
        giggalEdgeLabel: 'How Giggal.ai prices it.',
        giggalEdge:
          'Giggal.ai is pay-as-you-go at $9.90 for 10,000 emails, $76 for 100,000 and $680 for a million. Credits never expire, and unknown results are not charged.',
      },
      {
        heading: 'Who ran the LeadMagic benchmark, and how to read it',
        paragraphs: [
          'LeadMagic published a verification test on 25 February 2026. It used 10,000 real B2B emails, 28% of them on catch-all domains.',
          'LeadMagic sells a competing email verifier, and it ranked itself first in its own results. That makes it a vendor test, not a neutral study. Read LeadMagic’s own placing in it with that in mind.',
          'In that test, ZeroBounce scored 97.8% overall and resolved 12% of catch-all addresses. ZeroBounce itself claims 99.6% accuracy.',
          'Giggal.ai was not one of the tools measured in that test. The fair check is to run your own list through each tool.',
        ],
      },
      {
        heading: 'ZeroBounce vs LeadMagic on catch-all addresses',
        paragraphs: [
          'On a catch-all domain, the server accepts every address. A normal [email checker](/email-checker) cannot tell whether the named mailbox is real.',
          'ZeroBounce scores catch-all addresses from 1 to 10 with AI. It does not return a valid or invalid result for them. LeadMagic resolves catch-all addresses instead of flagging them. It does not publish what a catch-all check costs in credits.',
          'Secure email gateways cause a similar problem on company domains. ZeroBounce advertises support for them. LeadMagic does not publish a named gateway list.',
        ],
        giggalEdgeLabel: 'How Giggal.ai handles catch-all.',
        giggalEdge:
          'Giggal.ai resolves catch-all addresses to deliverable or undeliverable at 1 credit. It names 15 secure email gateways it verifies behind, including Mimecast, Proofpoint and Barracuda.',
      },
      {
        heading: 'ZeroBounce or LeadMagic: which one to choose',
        paragraphs: [
          'Choose ZeroBounce if verification is your main job and you also manage sender health. Its credits never expire, and it gives 100 free credits a month.',
          'Choose LeadMagic if you want finding, enrichment and verification on one subscription. Mobile numbers, company data and job-change signals are the reasons to pick it.',
          'If your list needs [catch-all verification](/catch-all-verification) and nothing else, an enrichment plan includes data you may not use. In that case, test a dedicated email verifier on the same list.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is the LeadMagic benchmark a neutral test?',
        a: 'No. LeadMagic sells a competing email verifier and ranked itself first in its own results, so read it as a vendor test. ZeroBounce scored 97.8% overall in it. Giggal.ai was not one of the tools measured.',
      },
      {
        q: 'How much do ZeroBounce and LeadMagic cost for 10,000 emails?',
        a: 'ZeroBounce costs $129 for 10,000 emails. LeadMagic needs its Growth plan at $249 a month for that volume. Giggal.ai costs $9.90 for 10,000, bought once.',
      },
      {
        q: 'LeadMagic vs ZeroBounce: which is better for B2B lists?',
        a: 'LeadMagic resolves catch-all addresses, which are common on B2B lists, and adds contact and company data. ZeroBounce scores catch-alls from 1 to 10 instead. If you only need verification, compare the catch-all results on a sample.',
      },
      {
        q: 'Do ZeroBounce or LeadMagic credits expire?',
        a: 'ZeroBounce credits never expire. LeadMagic credits roll over up to two months on plans from $99 a month, and the Basic plan has no rollover. Giggal.ai credits never expire.',
      },
      {
        q: 'Can I try Giggal.ai before deciding?',
        a: 'Yes. Giggal.ai gives 1,000 free credits with no card, usable on a bulk upload. Run the same list you would test in ZeroBounce or LeadMagic and compare the catch-all results.',
      },
    ],
  },
}
