// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for the /integrations hub and every
// /integrations/{slug} detail page. Adding a new integration (or a new
// Zapier workflow template) is a one-entry edit here — pages render from
// this registry, nothing is hardcoded in components.
//
// COPY RULE: no em dashes anywhere in `description` or other rendered text.
//
// CONNECTION TYPES
//   'direct' → native in-dashboard integration built by us
//   'zapier' → connected through our Zapier app (no code)
//   'api'    → wired up via the developer REST API / HTTP requests
//   'mcp'    → through the Giggal MCP server (Claude, AI agents)
// ─────────────────────────────────────────────────────────────────────────────

export type ConnectionType = 'direct' | 'zapier' | 'api' | 'mcp'

export const CONNECTION_LABEL: Record<ConnectionType, string> = {
  direct: 'Direct',
  zapier: 'Via Zapier',
  api: 'API',
  mcp: 'MCP',
}

export type IntegrationCategory =
  | 'Email Marketing'
  | 'Automation'
  | 'CRM'
  | 'Sales & Outreach'
  | 'Spreadsheets'
  | 'Forms'
  | 'AI & Agents'
  | 'Developer'

export interface Integration {
  slug: string
  name: string
  description: string
  /** Loose string so programmatic Zapier apps can bring their own categories. */
  category: string
  connection: ConnectionType
  /** Internal detail page (preferred) or external destination. */
  href: string
  external?: boolean
  /** Local logo in /public/integrations (preferred). */
  icon?: string
  /** simpleicons.org slug fallback when no local logo exists. */
  iconSlug?: string
  /** Brand color used for the lettermark fallback + icon tint. */
  brandColor?: string
}

export const ZAPIER_APP_URL = 'https://zapier.com/apps/giggalai/integrations'

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'

export const INTEGRATIONS: Integration[] = [
  // ── Flagship ────────────────────────────────────────────────────────────
  {
    slug: 'zapier',
    icon: '/integrations/giggal-catch-all-email-verification-zapier.png',
    name: 'Zapier',
    description:
      'Verify each new email in real time across 8,000+ apps, catch-all addresses included. No code required.',
    category: 'Automation',
    connection: 'direct',
    href: '/integrations/zapier',
    iconSlug: 'zapier',
    brandColor: '#FF4F00',
  },
  {
    slug: 'n8n',
    icon: '/integrations/giggal-catch-all-email-verification-n8n.png',
    name: 'n8n',
    description:
      'Verify single emails and whole lists in n8n workflows with the official Giggal.ai community node.',
    category: 'Automation',
    connection: 'direct',
    href: '/integrations/n8n',
    brandColor: '#EA4B71',
  },
  {
    slug: 'claude',
    icon: '/integrations/giggal-catch-all-email-verification-claude.png',
    name: 'Claude',
    description:
      'Add the Giggal.ai MCP server to Claude and verify email addresses inside the chat.',
    category: 'AI & Agents',
    connection: 'mcp',
    href: '/mcp',
    iconSlug: 'claude',
    brandColor: '#D97757',
  },
  {
    slug: 'chatgpt',
    icon: '/integrations/giggal-catch-all-email-verification-chatgpt.png',
    name: 'ChatGPT',
    description:
      'Add the Giggal.ai MCP server to ChatGPT and verify email addresses inside the chat.',
    category: 'AI & Agents',
    connection: 'mcp',
    href: '/mcp',
    iconSlug: 'openai',
    brandColor: '#10A37F',
  },
  {
    slug: 'clay',
    name: 'Clay',
    description:
      'Verify prospect emails in Clay tables through the Giggal.ai API, catch-all addresses included.',
    category: 'Sales & Outreach',
    connection: 'api',
    href: '/public/docs',
    brandColor: '#EF4444',
  },
  {
    slug: 'rest-api',
    name: 'REST API',
    description:
      'REST API for single, bulk and catch-all email verification. Build any custom integration.',
    category: 'Developer',
    connection: 'api',
    href: '/public/docs',
    brandColor: '#4F46E5',
  },

  // ── Direct in-dashboard ESP integrations ────────────────────────────────
  // Connect the tool, import contacts, verify, and push clean lists back.
  {
    slug: 'mailchimp',
    icon: '/integrations/giggal-catch-all-email-verification-mailchimp.png',
    name: 'Mailchimp',
    description:
      'Import a Mailchimp audience, verify it, and keep only deliverable subscribers.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    iconSlug: 'mailchimp',
    brandColor: '#FFE01B',
  },
  {
    slug: 'mailgun',
    icon: '/integrations/giggal-catch-all-email-verification-mailgun.png',
    name: 'Mailgun',
    description:
      'Connect Mailgun and verify your sending lists before each campaign.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    iconSlug: 'mailgun',
    brandColor: '#F06B66',
  },
  {
    slug: 'mailjet',
    icon: '/integrations/giggal-catch-all-email-verification-mailjet.png',
    name: 'Mailjet',
    description:
      'Import Mailjet contact lists into Giggal.ai and verify them, catch-all addresses included.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    iconSlug: 'mailjet',
    brandColor: '#FEAD0C',
  },
  {
    slug: 'sendgrid',
    icon: '/integrations/giggal-catch-all-email-verification-sendgrid.png',
    name: 'SendGrid',
    description:
      'Verify SendGrid contacts in bulk to protect your sender reputation.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    brandColor: '#1A82E2',
  },
  {
    slug: 'activecampaign',
    icon: '/integrations/giggal-catch-all-email-verification-activecampaign.png',
    name: 'ActiveCampaign',
    description:
      'Import ActiveCampaign contacts, verify them, and remove bad addresses before you send.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    iconSlug: 'activecampaign',
    brandColor: '#356AE6',
  },
  {
    slug: 'campaign-monitor',
    icon: '/integrations/giggal-catch-all-email-verification-campaignmonitor.png',
    name: 'Campaign Monitor',
    description:
      'Connect Campaign Monitor and verify every subscriber list in Giggal.ai.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    brandColor: '#7856FF',
  },
  {
    slug: 'getresponse',
    icon: '/integrations/giggal-catch-all-email-verification-getresponse.png',
    name: 'GetResponse',
    description:
      'Verify GetResponse lists to cut bounces, including contacts on catch-all domains.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    brandColor: '#00BAFF',
  },
  {
    slug: 'aweber',
    icon: '/integrations/giggal-catch-all-email-verification-aweber.png',
    name: 'AWeber',
    description:
      'Import AWeber subscribers, verify them, and send a clean list back.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    iconSlug: 'aweber',
    brandColor: '#246BE2',
  },
  {
    slug: 'mailerlite',
    icon: '/integrations/giggal-catch-all-email-verification-mailerlite.png',
    name: 'MailerLite',
    description:
      'Connect MailerLite and verify subscriber lists before your next campaign.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    iconSlug: 'mailerlite',
    brandColor: '#09C269',
  },
  {
    slug: 'drip',
    icon: '/integrations/giggal-catch-all-email-verification-drip.png',
    name: 'Drip',
    description:
      'Verify Drip contacts in bulk so your automated emails reach real mailboxes.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    brandColor: '#EC38BC',
  },
  {
    slug: 'elastic-email',
    icon: '/integrations/giggal-catch-all-email-verification-elasticemail.png',
    name: 'Elastic Email',
    description:
      'Import Elastic Email lists and verify them, including catch-all and secure gateway addresses.',
    category: 'Email Marketing',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    brandColor: '#1F2437',
  },

  {
    slug: 'reply-io',
    icon: '/integrations/giggal-catch-all-email-verification-reply.png',
    name: 'Reply.io',
    description:
      'Verify prospect emails before your Reply.io sequences start, so outreach reaches real mailboxes.',
    category: 'Sales & Outreach',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    brandColor: '#7C3AED',
  },
  {
    slug: 'zoho-crm',
    icon: '/integrations/giggal-catch-all-email-verification-zohocrm.png',
    name: 'Zoho CRM',
    description:
      'Import Zoho CRM contacts and leads, verify them, and keep your CRM data clean.',
    category: 'CRM',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    brandColor: '#E42527',
  },

  // ── A few popular apps connected through Zapier ─────────────────────────
  // The Zapier page explains setup once; thousands more apps work the same way.
  {
    slug: 'google-sheets',
    name: 'Google Sheets',
    description:
      'Verify each new row as it is added and write the result back to your sheet.',
    category: 'Spreadsheets',
    connection: 'zapier',
    href: '/integrations/zapier/google-sheets',
    iconSlug: 'googlesheets',
    brandColor: '#34A853',
  },
  {
    slug: 'hubspot',
    icon: '/integrations/giggal-catch-all-email-verification-hubspot.png',
    name: 'HubSpot',
    description:
      'Verify the contacts and lists in your HubSpot CRM, then filter on the result in HubSpot.',
    category: 'CRM',
    connection: 'direct',
    href: '/integrations/hubspot',
    iconSlug: 'hubspot',
    brandColor: '#FF7A59',
  },
  {
    slug: 'salesforce',
    icon: '/integrations/giggal-catch-all-email-verification-salesforce.png',
    name: 'Salesforce',
    description:
      'Verify the email on each new Salesforce lead as soon as it is created.',
    category: 'CRM',
    connection: 'zapier',
    href: '/integrations/zapier/salesforce',
    iconSlug: 'salesforce',
    brandColor: '#00A1E0',
  },
  {
    slug: 'typeform',
    name: 'Typeform',
    description:
      'Verify emails from Typeform responses before they reach your other tools.',
    category: 'Forms',
    connection: 'zapier',
    href: '/integrations/zapier/typeform',
    iconSlug: 'typeform',
    brandColor: '#262627',
  },
  {
    slug: 'slack',
    name: 'Slack',
    description:
      'Post verification results and list alerts to a Slack channel.',
    category: 'Automation',
    connection: 'zapier',
    href: '/integrations/zapier',
    // No iconSlug: the Simple Icons CDN no longer serves Slack's logo (404),
    // so the card shows its lettermark tile in Slack's brand colour instead.
    brandColor: '#4A154B',
  },
]

export const INTEGRATION_CATEGORIES: IntegrationCategory[] = [
  'Email Marketing',
  'Automation',
  'CRM',
  'Sales & Outreach',
  'Spreadsheets',
  'Forms',
  'AI & Agents',
  'Developer',
]

// ── Zapier workflow templates ────────────────────────────────────────────────
// Partner logos for the "workflow" cards on /integrations/zapier, by position.
// The visible titles and descriptions (and the guide steps and actions) live
// in lib/i18n/integrationPages so every language can translate them; title and
// description here are English reference only.
// When we publish real shared Zaps / custom workflows, set `url` on the entry
// and the card CTA deep-links to it; until then the CTA goes to the Zapier
// app listing.
export interface ZapierWorkflow {
  title: string
  apps: string // "HubSpot + Giggal.ai"
  description: string
  /** Local logo of the partner app in /public/integrations. */
  icon?: string
  /** simpleicons.org slug fallback for the partner app logo. */
  iconSlug?: string
  brandColor?: string
  url?: string
}

export const ZAPIER_WORKFLOWS: ZapierWorkflow[] = [
  {
    title: 'Verify new HubSpot contacts automatically',
    apps: 'HubSpot + Giggal.ai',
    icon: '/integrations/giggal-catch-all-email-verification-hubspot.png',
    brandColor: '#FF7A59',
    description:
      'When a contact is created in HubSpot, Giggal.ai verifies the email, resolves catch-all domains, and writes the result back to a contact property.',
  },
  {
    title: 'Verify new rows in Google Sheets',
    apps: 'Google Sheets + Giggal.ai',
    iconSlug: 'googlesheets',
    brandColor: '#34A853',
    description:
      'Each new spreadsheet row is verified in real time. Status, risk level and catch-all result are appended to the row.',
  },
  {
    title: 'Clean Salesforce leads on entry',
    apps: 'Salesforce + Giggal.ai',
    icon: '/integrations/giggal-catch-all-email-verification-salesforce.png',
    brandColor: '#00A1E0',
    description:
      'Every new Salesforce lead is verified before your SDRs touch it, so nobody wastes a sequence on a dead mailbox.',
  },
  {
    title: 'Gate Mailchimp signups',
    apps: 'Mailchimp + Giggal.ai',
    icon: '/integrations/giggal-catch-all-email-verification-mailchimp.png',
    brandColor: '#FFE01B',
    description:
      'Verify subscribers the moment they sign up and only add deliverable addresses to your Mailchimp audience.',
  },
  {
    title: 'Screen Typeform responses',
    apps: 'Typeform + Giggal.ai',
    iconSlug: 'typeform',
    brandColor: '#262627',
    description:
      'Catch mistyped and disposable emails in form submissions before they enter your funnel.',
  },
  {
    title: 'Alert your team in Slack',
    apps: 'Giggal.ai + Slack',
    // No iconSlug: the Simple Icons CDN no longer serves Slack's logo (404),
    // so the card shows its lettermark tile in Slack's brand colour instead.
    brandColor: '#4A154B',
    description:
      'Post a Slack message when a verification finishes or when a high-value lead turns out to be catch-all deliverable.',
  },
]
