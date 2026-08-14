// ─────────────────────────────────────────────────────────────────────────────
// Category-specific copy for the /integrations/zapier/{app} pages. Each app
// category gets its own hero line, intro, benefit blocks, routing advice and
// FAQ entry, so pages differ by the actual problem each tool family has, not
// just by the app name.
//
// COPY RULES: no em dashes, no "verdict" (use "result"), concrete language.
// Keyword targets per category are noted above each block.
// ─────────────────────────────────────────────────────────────────────────────

export interface CategoryCopy {
  /** Hero subtitle. */
  hero: (name: string, trigger: string) => string
  /** Intro paragraph under "How the {app} integration works". */
  intro: (name: string) => string
  /** Three benefit blocks. */
  benefits: { title: string; text: (name: string) => string }[]
  /** Step 4 of the setup guide (what to do with the result). */
  routing: (name: string) => string
  /** Category-specific FAQ entry. */
  faq: (name: string) => { q: string; a: string }
}

// Keywords: verify form submissions, block fake email signups, email
// validation for forms, typo and disposable emails
const forms: CategoryCopy = {
  hero: (name, trigger) =>
    `Connect ${name} to Giggal.ai through Zapier and validate every email address the moment ${trigger}. Giggal.ai is a catch-all email verifier, so typos, disposable addresses, fake signups and hard-to-check catch-all domains all get caught right at the form.`,
  intro: (name) =>
    `Forms collect whatever people type, and people mistype. Some enter throwaway addresses just to get past the gate. The ${name} integration checks each submitted email the second it arrives, so only real, deliverable addresses make it into your database.`,
  benefits: [
    {
      title: 'Typos get caught while they are still fixable',
      text: (name) =>
        `Someone fat-fingers their email into a ${name} form and normally you find out weeks later, when the campaign bounces. With verification in the Zap you know within seconds, while there is still a chance to do something about it.`,
    },
    {
      title: 'Work emails on catch-all domains still count',
      text: () =>
        'Plenty of real signups come from company domains that accept any address. Other tools call those risky and you end up binning genuine leads. Giggal.ai checks the actual mailbox and gives you a score, so you keep them.',
    },
    {
      title: 'Nobody has to type their email twice',
      text: (name) =>
        `You do not need confirmation screens or re-enter-your-email fields to keep data clean. The check runs quietly inside the ${name} Zap and the person filling the form never notices.`,
    },
  ],
  routing: (name) =>
    `Point the Email input at the address field from your ${name} submission and run a test. Then add a Zapier filter: deliverable addresses continue into your CRM or email list, invalid ones stop or get flagged for review, and catch-all results are routed by score.`,
  faq: (name) => ({
    q: `Can I stop fake email signups coming through ${name}?`,
    a: `Yes. Every ${name} submission is verified before it reaches the next step of your Zap. Disposable and mistyped addresses are labeled undeliverable, so you can filter them out automatically instead of discovering them as bounces in your next campaign.`,
  }),
}

// Keywords: CRM data quality, verify CRM contacts, lead verification, clean
// CRM data, invalid leads, wasted sales outreach
const crm: CategoryCopy = {
  hero: (name, trigger) =>
    `Connect ${name} to Giggal.ai through Zapier and verify every lead the moment ${trigger}. Built on a catch-all email verifier, it spots dead mailboxes and resolves the catch-all addresses other tools mark risky, before a rep wastes a sequence on them.`,
  intro: (name) =>
    `A CRM is only as good as the contact data inside it. The ${name} integration verifies email addresses as records are created, so your team works a pipeline of reachable people instead of guessing which leads are real.`,
  benefits: [
    {
      title: 'Reps stop writing sequences for dead leads',
      text: (name) =>
        `Few things waste a rep's morning like personalizing outreach for a lead whose email bounced on day one. Verify at entry into ${name} and that just stops happening.`,
    },
    {
      title: 'The catch-all leads are usually the good ones',
      text: () =>
        'Enterprise companies love catch-all domains, which is exactly why so many big-logo leads sit in CRMs marked risky. Giggal.ai checks the actual mailbox and returns a score, so those deals stay workable.',
    },
    {
      title: 'No more quarterly cleanup projects',
      text: (name) =>
        `Nobody actually does the quarterly data cleanup. When every new ${name} record is verified as it lands, you never need to schedule one again.`,
    },
  ],
  routing: (name) =>
    `Point the Email input at the lead or contact field from ${name} and run a test. Then write the status, score and catch-all result back to custom fields, and add a filter so undeliverable leads get tagged or routed to a review list instead of a rep's queue.`,
  faq: (name) => ({
    q: `How does email verification improve ${name} data quality?`,
    a: `Every new record is checked against the actual mailbox, not just syntax. Invalid addresses are tagged before they enter workflows, catch-all addresses get a usable score instead of a risky label, and your team can trust that a lead marked deliverable can actually be reached.`,
  }),
}

// Keywords: email list cleaning, reduce bounce rate, sender reputation,
// email deliverability, list hygiene
const emailMarketing: CategoryCopy = {
  hero: (name, trigger) =>
    `Connect ${name} to Giggal.ai through Zapier and verify every subscriber the moment ${trigger}. A catch-all email verifier keeps your list clean continuously, your bounce rate under 3%, and your sender reputation intact.`,
  intro: (name) =>
    `Email lists decay at 20 to 30% a year, and every hard bounce chips away at your sender reputation. The ${name} integration verifies each address as it joins your list, so decay never accumulates and cleanups stop being a recurring emergency.`,
  benefits: [
    {
      title: 'Bounces stay low without you thinking about it',
      text: (name) =>
        `Once the Zap is on, bad addresses simply never make it into ${name}. Your bounce rate sits under 3% because there is nothing left to bounce.`,
    },
    {
      title: 'Stop deleting subscribers who are actually real',
      text: () =>
        'List cleaning tools love to purge anything on a catch-all domain, and half of those people are real. Giggal.ai verifies the mailbox itself, so you only remove the ones that are actually gone.',
    },
    {
      title: 'Gmail and Outlook notice, in a good way',
      text: () =>
        'Inbox providers watch how many of your emails bounce. Send to verified addresses long enough and your campaigns start landing in the inbox instead of the spam folder.',
    },
  ],
  routing: (name) =>
    `Point the Email input at the subscriber address from ${name} and run a test. Then filter on the result: deliverable subscribers stay on the list, undeliverable ones are removed or suppressed, and catch-all results are kept or held based on score.`,
  faq: (name) => ({
    q: `Will this lower the bounce rate on my ${name} campaigns?`,
    a: `That is the primary outcome. Addresses are verified against the live mailbox before they can receive a campaign, so hard bounces drop immediately, typically under 3%. Lower bounces compound into better sender reputation and better inbox placement on every future send.`,
  }),
}

// Keywords: verify leads before nurture, marketing automation data quality,
// lead scoring accuracy
const marketingAutomation: CategoryCopy = {
  hero: (name, trigger) =>
    `Connect ${name} to Giggal.ai through Zapier and verify every contact the moment ${trigger}. With a catch-all email verifier at the entry point, nurture flows, lead scoring and attribution all run on addresses that are actually real.`,
  intro: (name) =>
    `Automation multiplies whatever you feed it, including bad data. One invalid email in a ${name} nurture flow means wasted sends, skewed engagement stats and polluted lead scores. Verifying on entry keeps the whole machine honest.`,
  benefits: [
    {
      title: 'Your flows reach people, not placeholders',
      text: (name) =>
        `An automation is only as good as the addresses inside it. When every contact entering ${name} is verified first, opens and clicks describe real people and your decisions get easier.`,
    },
    {
      title: 'Catch-all leads keep moving',
      text: () =>
        'Most tools freeze when a lead sits on a catch-all domain, and the automation quietly fills up with maybes. Giggal.ai checks the mailbox and hands back a score, so the flow can branch instead of stall.',
    },
    {
      title: 'Lead scores start meaning something again',
      text: () =>
        'It is hard to trust engagement scoring when part of the database could never open an email in the first place. Verify at entry and the scores reflect actual interest.',
    },
  ],
  routing: (name) =>
    `Point the Email input at the contact field from ${name} and run a test. Then branch your Zap on the result: verified contacts enter the nurture flow, invalid ones are suppressed, and catch-all scores decide the borderline cases.`,
  faq: (name) => ({
    q: `Why verify emails before they enter ${name} workflows?`,
    a: `Because automation amplifies bad data. An unverified address does not just bounce once, it drags down engagement metrics, corrupts lead scores and wastes every step of the flow it enters. Verifying at the entry point fixes all of it with one step.`,
  }),
}

// Keywords: cold outreach deliverability, bounce rate cold email, protect
// sending domain
const salesOutreach: CategoryCopy = {
  hero: (name, trigger) =>
    `Connect ${name} to Giggal.ai through Zapier and verify every prospect the moment ${trigger}. Cold outreach lives or dies on bounce rate, and a catch-all email verifier keeps your domain safe while unlocking the prospects other tools mark risky.`,
  intro: (name) =>
    `In cold outreach, a bounce rate above 3% can get a sending domain flagged in days. The ${name} integration verifies every prospect email before a single message goes out, including the catch-all addresses that make up a third of most B2B prospect lists.`,
  benefits: [
    {
      title: 'Your sending domain survives the quarter',
      text: (name) =>
        `One bad list can burn a domain you spent months warming up. Checking every ${name} prospect before the first email keeps bounces rare and your domain out of trouble.`,
    },
    {
      title: 'Email the prospects everyone else skips',
      text: () =>
        'Roughly a third of B2B addresses live on catch-all domains, and most competitors just drop them. Giggal.ai verifies the mailbox and scores it, which quietly gives you a bigger market from the same list.',
    },
    {
      title: 'Prospects route themselves by risk',
      text: () =>
        'Status, risk level and score arrive as fields in your Zap. Safe addresses go straight into the sequence, borderline ones get a lighter first touch, dead ones never leave the gate.',
    },
  ],
  routing: (name) =>
    `Point the Email input at the prospect address from ${name} and run a test. Then split paths: deliverable prospects enter your sequence, catch-all results above your score threshold get queued with monitoring, and everything else is excluded before it can hurt your domain.`,
  faq: (name) => ({
    q: `Does verifying ${name} prospects really protect my sending domain?`,
    a: `Yes, and it is the cheapest protection available. Mailbox providers track your bounce rate per domain. Keeping it under 3% by verifying before sending is the difference between landing in inboxes and burning a domain you then have to replace.`,
  }),
}

// Keywords: customer email verification ecommerce, order emails reaching
// customers, abandoned cart deliverability
const ecommerce: CategoryCopy = {
  hero: (name, trigger) =>
    `Connect ${name} to Giggal.ai through Zapier and verify every customer email the moment ${trigger}. A catch-all email verifier makes sure order confirmations, shipping updates and abandoned cart emails reach a real mailbox.`,
  intro: (name) =>
    `A mistyped email at checkout means a customer who never gets their receipt, their tracking link or your winback campaign. The ${name} integration verifies customer addresses as they are created, so transactional and marketing email both actually arrive.`,
  benefits: [
    {
      title: 'The receipt actually arrives',
      text: (name) =>
        `A typo at checkout means no confirmation, no tracking link, and an annoyed support ticket three days later. Verifying the address the moment ${name} creates the customer catches it while it is still easy to fix.`,
    },
    {
      title: 'Cart reminders that get seen',
      text: () =>
        'Abandoned cart emails are usually your best earner, but only when they land. Verified addresses mean the reminder reaches a person instead of bouncing into nothing.',
    },
    {
      title: 'Your marketing list grows clean',
      text: () =>
        'Every buyer joining your email flows is verified on the way in, so the list you build this year does not become the deliverability problem you fight next year.',
    },
  ],
  routing: (name) =>
    `Point the Email input at the customer address from ${name} and run a test. Then branch: verified customers flow into your marketing lists, invalid addresses get flagged so support can correct them while the order is still fresh.`,
  faq: (name) => ({
    q: `What happens when a ${name} customer mistypes their email?`,
    a: `Without verification, nothing good: the receipt bounces, tracking never arrives and the customer contacts support annoyed. With this Zap, the mistype is flagged within seconds of the record being created, while the correction is still easy to make.`,
  }),
}

// Keywords: support contact data, helpdesk email verification
const support: CategoryCopy = {
  hero: (name, trigger) =>
    `Connect ${name} to Giggal.ai through Zapier and verify every contact the moment ${trigger}. A catch-all email verifier confirms even hard-to-check business addresses, so ticket updates and follow-ups reach a real mailbox.`,
  intro: (name) =>
    `Support runs on email: ticket confirmations, resolution updates, satisfaction surveys. The ${name} integration verifies contact addresses as they enter your helpdesk, so your team never resolves a ticket into a void.`,
  benefits: [
    {
      title: 'Customers actually get your replies',
      text: (name) =>
        `It happens more than anyone admits: an agent resolves the ticket and the customer never hears about it because the address was wrong. Verify contacts entering ${name} and the reply lands.`,
    },
    {
      title: 'Business addresses checked properly',
      text: () =>
        'B2B customers often write in from domains that accept anything, which most tools cannot check. Giggal.ai verifies the actual mailbox, so you know the contact is real.',
    },
    {
      title: 'Surveys go to people who exist',
      text: () =>
        'CSAT numbers look worse than they are when part of the survey list is dead addresses. Verified contacts mean response rates reflect actual sentiment.',
    },
  ],
  routing: (name) =>
    `Point the Email input at the requester address from ${name} and run a test. Flag undeliverable contacts on the ticket so agents ask for a working address while the conversation is still open.`,
  faq: (name) => ({
    q: `Why verify emails in a support tool like ${name}?`,
    a: `Because a resolved ticket the customer never hears about is still a failed ticket. Verifying requester addresses on entry means updates, resolutions and CSAT surveys reach real mailboxes, and agents find out about a bad address while they can still fix it.`,
  }),
}

// Keywords: billing email deliverability, receipt emails, failed payment
// notifications
const payments: CategoryCopy = {
  hero: (name, trigger) =>
    `Connect ${name} to Giggal.ai through Zapier and verify every customer email the moment ${trigger}. Receipts, invoices and failed-payment notices are too important to bounce, and a catch-all email verifier confirms even the addresses standard checkers give up on.`,
  intro: (name) =>
    `Billing email is the one category customers genuinely need to receive. The ${name} integration verifies customer addresses as they are created, so receipts, renewal reminders and dunning emails reach the person paying you.`,
  benefits: [
    {
      title: 'Invoices reach the person paying you',
      text: (name) =>
        `Billing email is the one category nobody can afford to lose. Verify each new ${name} customer and receipts, invoices and renewal notices land where they should.`,
    },
    {
      title: 'Failed-payment emails that recover revenue',
      text: () =>
        'Dunning only works if someone sees it. When the address is verified, a failed card becomes a fixed card instead of silent churn.',
    },
    {
      title: 'Fewer surprise chargebacks',
      text: () =>
        'A customer who never saw the receipt is a customer who disputes the charge. Making sure billing email arrives closes that loop before it opens.',
    },
  ],
  routing: (name) =>
    `Point the Email input at the customer address from ${name} and run a test. Flag undeliverable addresses immediately so your team can request a working billing contact before the next invoice goes out.`,
  faq: (name) => ({
    q: `Why verify ${name} customer emails?`,
    a: `Because billing communication failing silently costs real money: missed renewal reminders become churn, unseen failed-payment notices become involuntary churn, and unseen receipts become chargebacks. Verification on entry catches the bad address before any of that happens.`,
  }),
}

// Keywords: clean email lists in spreadsheets, verify emails in Google
// Sheets, bulk list hygiene
const spreadsheets: CategoryCopy = {
  hero: (name, trigger) =>
    `Connect ${name} to Giggal.ai through Zapier and verify every address the moment ${trigger}. With a catch-all email verifier working the rows, your spreadsheet stays the single source of truth, and now it is a verified one.`,
  intro: (name) =>
    `Half the lead lists in the world live in a spreadsheet. The ${name} integration verifies each new row as it is added and writes the result right back, turning a static list into one that cleans itself.`,
  benefits: [
    {
      title: 'The sheet cleans itself',
      text: (name) =>
        `A new row lands in ${name}, the address gets checked, and the result is written right back next to it. No exporting, no uploading to a separate tool, no re-importing.`,
    },
    {
      title: 'Catch-all rows finally get answers',
      text: () =>
        'Scraped and purchased lists are full of catch-all domains, and a column that just says risky tells you nothing. A score you can sort on tells you exactly who to email.',
    },
    {
      title: 'Campaign day needs no prep',
      text: () =>
        'When the list is verified as it grows, pulling a sending list is just filtering a column. You already know what the bounce rate will be before you hit send.',
    },
  ],
  routing: (name) =>
    `Point the Email input at the address column from ${name} and run a test. Then use a second action to write status, score and catch-all result back to the row, and filter or color-code on those columns whenever you pull a sending list.`,
  faq: (name) => ({
    q: `Can I verify an email list living in ${name} automatically?`,
    a: `Yes, that is exactly this workflow. Each new row triggers a verification, and the results are written back to the sheet within seconds. For an existing backlog, run bulk verification once in the Giggal.ai dashboard, then let the Zap keep the sheet clean from that point on.`,
  }),
}

// Keywords: popup signup quality, newsletter signup verification, website
// lead capture
const websitePopups: CategoryCopy = {
  hero: (name, trigger) =>
    `Connect ${name} to Giggal.ai through Zapier and verify every signup the moment ${trigger}. Popups capture volume; a catch-all email verifier makes sure it is volume you can actually email.`,
  intro: (name) =>
    `Popups and on-site widgets optimize for the fastest possible signup, which is exactly when people mistype or feed you a throwaway address. The ${name} integration verifies each capture in real time, so growth in signups means growth in reachable subscribers.`,
  benefits: [
    {
      title: 'Burner emails from discount hunters get filtered',
      text: (name) =>
        `Run a popup with an incentive and a chunk of signups will be throwaway addresses grabbing the code. Verification catches them the moment ${name} passes them along.`,
    },
    {
      title: 'Zero extra steps for the visitor',
      text: () =>
        'The signup feels exactly the same to the person subscribing. The check happens in the background of the Zap, and only real addresses continue to your list.',
    },
    {
      title: 'Signup numbers you can report with a straight face',
      text: () =>
        'When every counted signup is a verified one, popup conversion numbers describe list growth you can actually email, which makes the reporting worth reading.',
    },
  ],
  routing: (name) =>
    `Point the Email input at the signup address from ${name} and run a test. Add a filter so deliverable signups continue to your email platform and invalid ones are dropped or logged separately for review.`,
  faq: (name) => ({
    q: `Do ${name} signups need verification if I already use double opt-in?`,
    a: `They complement each other. Double opt-in confirms intent but still sends a confirmation email to every address, including dead ones, which costs deliverability. Verifying first means confirmation emails only go to mailboxes that exist, and your opt-in completion rate goes up.`,
  }),
}

const DEFAULT_COPY = crm

const COPY_BY_CATEGORY: Record<string, CategoryCopy> = {
  'Forms & Surveys': forms,
  CRM: crm,
  'Email Marketing': emailMarketing,
  'Marketing Automation': marketingAutomation,
  'Sales & Outreach': salesOutreach,
  Ecommerce: ecommerce,
  Support: support,
  Payments: payments,
  'Spreadsheets & Data': spreadsheets,
  'Website & Popups': websitePopups,
}

export function categoryCopy(category: string): CategoryCopy {
  return COPY_BY_CATEGORY[category] ?? DEFAULT_COPY
}
