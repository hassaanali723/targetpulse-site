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
      title: 'Block fake signups at the source',
      text: (name) =>
        `Disposable domains, mistyped addresses and made-up emails are flagged the moment a ${name} response lands. Your downstream tools only ever see contacts you can actually reach.`,
    },
    {
      title: 'Catch-all addresses resolved, not discarded',
      text: () =>
        'When someone signs up with a work email on a catch-all domain, most verifiers shrug and say risky. Giggal.ai runs deep catch-all verification and returns a clear result with a score, so legitimate business signups are kept.',
    },
    {
      title: 'Cleaner data without asking twice',
      text: (name) =>
        `No double opt-in friction, no "please re-enter your email" fields. Verification happens silently in the background of your ${name} workflow while the respondent moves on.`,
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
      title: 'No more sequences sent to dead mailboxes',
      text: (name) =>
        `Every new ${name} lead is verified before anyone touches it. Reps stop burning time and sender reputation on addresses that were never going to answer.`,
    },
    {
      title: 'B2B catch-all leads recovered',
      text: () =>
        'Around 30% of B2B emails sit on catch-all domains. Most verifiers mark them risky and your best enterprise leads go to waste. Giggal.ai resolves them into a clear result with a score, so qualified pipeline stays in play.',
    },
    {
      title: 'Data quality that holds up over time',
      text: (name) =>
        `Verification runs on entry, not as a quarterly cleanup project. Your ${name} data stays accurate continuously, and reporting built on it stays trustworthy.`,
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
      title: 'Bounce rate under 3%, permanently',
      text: (name) =>
        `Bad addresses never enter your ${name} list in the first place, so you stop bleeding deliverability with every send. Mailbox providers see a sender who hits real inboxes.`,
    },
    {
      title: 'Catch-all subscribers kept, not purged',
      text: () =>
        'Work emails on catch-all domains are some of your most valuable subscribers, and standard list cleaning throws them out as risky. Giggal.ai resolves catch-all addresses with a deep check and a score, so you keep the subscribers other tools delete.',
    },
    {
      title: 'Sender reputation protected on autopilot',
      text: (name) =>
        `Spam traps, disposable domains and dead mailboxes are filtered before your next ${name} campaign, which is exactly what inbox providers reward with placement.`,
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
      title: 'Nurture flows that reach real people',
      text: (name) =>
        `Every contact entering a ${name} journey has a verified, deliverable address. Open and click rates reflect actual humans, not a list padded with dead mailboxes.`,
    },
    {
      title: 'Catch-all leads scored, not skipped',
      text: () =>
        'B2B leads on catch-all domains usually stall in automation because no tool can say if they are real. Giggal.ai returns a clear result with a score you can branch on, so those leads keep moving.',
    },
    {
      title: 'Lead scoring you can trust',
      text: () =>
        'Engagement-based scoring falls apart when a chunk of the database can never engage. Verified-on-entry data means scores measure interest, not deliverability noise.',
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
      title: 'Protect the domain you send from',
      text: (name) =>
        `Every ${name} prospect is checked against the live mailbox before outreach starts. Bounces stay rare, and your sending domain keeps its reputation for the campaigns that matter.`,
    },
    {
      title: 'A third more prospects to work',
      text: () =>
        'Catch-all domains hide roughly 30% of B2B prospects. Other verifiers mark them risky and your TAM shrinks. Giggal.ai resolves them with a score, so you confidently email prospects your competitors skip.',
    },
    {
      title: 'Results built for sequencing logic',
      text: () =>
        'Status, risk level and score flow straight into Zapier paths: safe addresses enter the sequence, risky ones get a softer first touch, invalid ones never leave the gate.',
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
      title: 'Order and shipping emails that arrive',
      text: (name) =>
        `Catch checkout typos the moment a ${name} customer record is created, before the missing confirmation email becomes a support ticket.`,
    },
    {
      title: 'Abandoned cart flows with real reach',
      text: () =>
        'Cart recovery only earns money if the reminder lands. Verified addresses mean your highest-converting automation is not firing into the void.',
    },
    {
      title: 'Marketing list quality from day one',
      text: () =>
        'Every buyer added to your email marketing flows is verified on entry, keeping bounce rates low and your store’s sending reputation clean.',
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
      title: 'Ticket updates that actually land',
      text: (name) =>
        `Verify the requester address as each ${name} contact is created, so status updates and resolutions reach the customer instead of bouncing.`,
    },
    {
      title: 'Catch-all business contacts confirmed',
      text: () =>
        'B2B customers often write in from catch-all domains. Giggal.ai confirms those mailboxes with a deep check instead of leaving them unknown.',
    },
    {
      title: 'Cleaner CSAT and follow-up data',
      text: () =>
        'Surveys and follow-ups sent to verified addresses return response rates you can actually read, instead of being quietly diluted by dead contacts.',
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
      title: 'Receipts and invoices that arrive',
      text: (name) =>
        `Verify each new ${name} customer address so billing documents land in inboxes, not in your bounce log.`,
    },
    {
      title: 'Dunning that recovers revenue',
      text: () =>
        'Failed-payment recovery depends entirely on the customer seeing the notice. Verified addresses turn dunning from a formality into actual recovered revenue.',
    },
    {
      title: 'Fewer chargebacks from silence',
      text: () =>
        'Customers who never see a receipt or renewal reminder dispute charges. Verified delivery closes the loop before it becomes a chargeback.',
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
      title: 'Rows verified as they arrive',
      text: (name) =>
        `Every new ${name} row with an email gets checked automatically. Status, risk level and score are appended to the same row, no manual export and re-import.`,
    },
    {
      title: 'Catch-all columns finally resolved',
      text: () =>
        'Lists scraped or purchased for B2B are full of catch-all domains. Instead of a column of risky labels, you get clear results with scores you can sort and filter on.',
    },
    {
      title: 'A list that is always send-ready',
      text: () =>
        'When campaign day comes, there is no cleanup step. Filter the verified column, export the deliverable rows and send with a bounce rate you already know.',
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
      title: 'Signup quality without extra friction',
      text: (name) =>
        `No confirmation hoops for the visitor. ${name} captures the address, Giggal.ai verifies it in the background, and only deliverable signups reach your list.`,
    },
    {
      title: 'Disposable addresses filtered out',
      text: () =>
        'Visitors grabbing a discount with a burner email are caught instantly, keeping incentive-driven campaigns from filling your list with dead weight.',
    },
    {
      title: 'Real conversion numbers',
      text: () =>
        'When every counted signup is a verified one, your popup conversion rates measure actual list growth rather than a mix of subscribers and noise.',
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
