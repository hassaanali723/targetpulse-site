/**
 * Common services and the SPF include each one asks for in its own setup
 * guide. `lookups` is what the include costs out of the 10-lookup limit,
 * measured against live DNS on 2026-10-12. Providers change their records,
 * so the builder also checks the finished record live.
 * Sources: targetpulse-seo/plans/22-spf-checker-plan.md.
 */
export interface SpfSender {
  name: string
  include: string
  lookups: number
  group: 'mailbox' | 'service'
  note?: string
}

export const SPF_SENDERS: SpfSender[] = [
  { name: 'Google Workspace', include: '_spf.google.com', lookups: 1, group: 'mailbox' },
  { name: 'Microsoft 365', include: 'spf.protection.outlook.com', lookups: 1, group: 'mailbox' },
  {
    name: 'Zoho Mail',
    include: 'zohomail.com',
    lookups: 2,
    group: 'mailbox',
    note: 'Accounts in other regions use their own ending, such as zohomail.eu.',
  },
  { name: 'Proton Mail', include: '_spf.protonmail.ch', lookups: 2, group: 'mailbox' },
  { name: 'Fastmail', include: 'spf.messagingengine.com', lookups: 1, group: 'mailbox' },
  { name: 'iCloud Mail', include: 'icloud.com', lookups: 5, group: 'mailbox' },
  { name: 'Namecheap Private Email', include: 'spf.privateemail.com', lookups: 4, group: 'mailbox' },
  { name: 'Hostinger', include: '_spf.mail.hostinger.com', lookups: 3, group: 'mailbox' },
  { name: 'GoDaddy', include: 'secureserver.net', lookups: 3, group: 'mailbox' },
  {
    name: 'Mailgun',
    include: 'mailgun.org',
    lookups: 5,
    group: 'service',
    note: 'If you send from a subdomain such as mg.yourdomain.com, add it to that subdomain’s record instead.',
  },
  { name: 'Salesforce', include: '_spf.salesforce.com', lookups: 2, group: 'service' },
  { name: 'Zendesk', include: 'mail.zendesk.com', lookups: 1, group: 'service' },
  { name: 'Freshdesk', include: 'email.freshdesk.com', lookups: 7, group: 'service' },
  { name: 'Mailjet', include: 'spf.mailjet.com', lookups: 1, group: 'service' },
]

/**
 * Services whose current setup guides don't ask for an include on your main
 * domain, because they send with their own bounce address or put SPF on a
 * subdomain. An include for them only uses up lookups.
 */
export interface SpfUnneeded {
  name: string
  includes: string[]
  reason: string
  /** True when the include is right on a subdomain, just not on the main domain. */
  subdomainOnly?: boolean
}

export const SPF_NOT_NEEDED: SpfUnneeded[] = [
  { name: 'Mailchimp', includes: ['servers.mcsv.net'], reason: 'Mailchimp’s domain setup now asks only for DKIM and DMARC records, not SPF.' },
  {
    name: 'Postmark',
    includes: ['spf.mtasv.net'],
    reason: 'Postmark says SPF is no longer required. It sends with its own bounce address, or a Return-Path record you point to it.',
  },
  { name: 'Brevo', includes: ['spf.brevo.com', 'spf.sendinblue.com'], reason: 'Brevo says SPF is not required unless you send from a dedicated IP address.' },
  { name: 'Klaviyo', includes: [], reason: 'Klaviyo says you usually don’t need to add an SPF record.' },
  {
    name: 'SendGrid',
    includes: ['sendgrid.net'],
    reason: 'SendGrid’s domain authentication puts SPF on a subdomain it creates for you, such as em1234.yourdomain.com.',
    subdomainOnly: true,
  },
  {
    name: 'Amazon SES',
    includes: ['amazonses.com'],
    reason: 'SES needs it only on a custom MAIL FROM subdomain, such as bounce.yourdomain.com. By default it uses its own bounce address.',
    subdomainOnly: true,
  },
]

// Includes seen in real records that aren't in the builder list.
const OTHER_NAMES: Record<string, string> = {
  'zoho.com': 'Zoho Mail (older include)',
  'zohomail.eu': 'Zoho Mail (EU)',
  'zoho.eu': 'Zoho Mail (EU, older include)',
  'one.zoho.com': 'Zoho One',
  'spf.mandrillapp.com': 'Mailchimp Transactional',
  '_netblocks.google.com': 'Google',
  'spf2.outlook.com': 'Outlook.com',
  'spf.protection.office365.us': 'Microsoft 365 GCC High',
  'aspmx.pardot.com': 'Salesforce Pardot',
  'mktomail.com': 'Adobe Marketo',
  'sparkpostmail.com': 'SparkPost',
  'spf.smtp2go.com': 'SMTP2GO',
  '_spf.mailersend.net': 'MailerSend',
  '_spf.elasticemail.com': 'Elastic Email',
  'spf.constantcontact.com': 'Constant Contact',
  'shops.shopify.com': 'Shopify',
  'eu.mailgun.org': 'Mailgun (EU)',
}

/** The service behind an include, if we know it. */
export function senderName(include: string): string | null {
  const d = include.toLowerCase().replace(/\.$/, '')
  const known = SPF_SENDERS.find((s) => s.include === d)
  if (known) return known.name
  const unneeded = SPF_NOT_NEEDED.find((s) => s.includes.includes(d))
  if (unneeded) return unneeded.name
  if (OTHER_NAMES[d]) return OTHER_NAMES[d]
  if (d.endsWith('.hubspotemail.net')) return 'HubSpot'
  return null
}

/** Why an include probably isn't needed, if it's one of the services above. */
export function unneededInclude(include: string): SpfUnneeded | null {
  const d = include.toLowerCase().replace(/\.$/, '')
  return SPF_NOT_NEEDED.find((s) => s.includes.includes(d)) ?? null
}
