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
      'Verify emails and resolve catch-all addresses automatically in 8,000+ apps. No code required.',
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
      'Verify single emails and whole lists inside n8n workflows with the official Giggal.ai community node.',
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
      'Let Claude verify emails through the Giggal.ai MCP server, straight from a conversation.',
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
      'Connect ChatGPT to Giggal.ai and verify single emails or check results without leaving the chat.',
    category: 'AI & Agents',
    connection: 'direct',
    href: SIGNUP_URL,
    external: true,
    iconSlug: 'openai',
    brandColor: '#10A37F',
  },
  {
    slug: 'clay',
    name: 'Clay',
    description:
      'Enrich and verify prospect emails inside Clay tables with Giggal.ai catch-all verification.',
    category: 'Sales & Outreach',
    connection: 'api',
    href: '/public/docs',
    brandColor: '#EF4444',
  },
  {
    slug: 'rest-api',
    name: 'REST API',
    description:
      'Full developer API for single, bulk and catch-all verification. Build any custom integration.',
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
      'Import Mailchimp audiences into Giggal.ai, verify them, and keep only deliverable subscribers.',
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
      'Connect Mailgun and verify your sending lists before campaigns ever hit the wire.',
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
      'Pull Mailjet contact lists into Giggal.ai for verification and catch-all resolution.',
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
      'Verify SendGrid contacts in bulk to protect your sender reputation and inbox placement.',
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
      'Import ActiveCampaign contacts, verify them, and clean risky addresses before sends.',
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
      'Connect Campaign Monitor and validate every subscriber list inside Giggal.ai.',
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
      'Verify GetResponse lists to cut bounces and recover catch-all contacts other tools drop.',
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
      'Import AWeber subscribers for verification and push back a clean, deliverable list.',
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
      'Connect MailerLite and verify subscriber lists before your next campaign goes out.',
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
      'Validate Drip contacts in bulk and keep automated flows pointed at real mailboxes.',
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
      'Import Elastic Email lists for deep verification, including catch-all and SEG checks.',
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
      'Verify prospect emails before Reply.io sequences fire, so outreach only hits real mailboxes.',
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
      'Import Zoho CRM contacts and leads for verification and keep your pipeline data clean.',
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
      'Verify new rows as they are added and write results back to your sheet automatically.',
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
      'Verify new HubSpot contacts on creation so invalid and risky emails never reach your CRM.',
    category: 'CRM',
    connection: 'zapier',
    href: '/integrations/zapier/hubspot',
    iconSlug: 'hubspot',
    brandColor: '#FF7A59',
  },
  {
    slug: 'salesforce',
    icon: '/integrations/giggal-catch-all-email-verification-salesforce.png',
    name: 'Salesforce',
    description:
      'Keep Salesforce leads clean by verifying every new lead email the moment it lands.',
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
      'Verify emails captured in Typeform responses before they flow into your tools.',
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
      'Send verification results and list-cleaning alerts straight into a Slack channel.',
    category: 'Automation',
    connection: 'zapier',
    href: '/integrations/zapier',
    iconSlug: 'slack',
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
// Rendered as "workflow" cards on /integrations/zapier (NeverBounce-style).
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
    iconSlug: 'slack',
    brandColor: '#4A154B',
    description:
      'Post a Slack message when a verification finishes or when a high-value lead turns out to be catch-all deliverable.',
  },
]

// ── Zapier integration guide (second tab on /integrations/zapier) ───────────
// Also the source of the page's HowTo JSON-LD, so the structured data always
// matches the visible steps. Screenshots live in
// /public/integrations/zapier-integration/.
export const ZAPIER_ACTIONS = [
  {
    name: 'Verify Email',
    description: 'Verify a single email address in real time, including catch-all resolution.',
  },
  {
    name: 'Start Bulk Verification',
    description: 'Submit a list of emails for bulk verification. Returns a job ID you can use to poll results.',
  },
  {
    name: 'Get Bulk Verification Results',
    description: 'Fetch results from a bulk verification job once its status shows complete.',
  },
  {
    name: 'Get Credit Balance',
    description: 'Check your current Giggal.ai credit balance and available credits.',
  },
]

export const ZAPIER_GUIDE_STEPS: {
  title: string
  text: string
  image?: string
  imageAlt?: string
}[] = [
  {
    title: 'Pick your trigger app',
    text: 'You can start from any of the 8,000+ apps on Zapier. For this example we use a spreadsheet: create a Zap, choose Google Sheets as the trigger app, and select the New or Updated Spreadsheet Row event. Connect your account and hit Continue.',
    image: '/integrations/zapier-integration/giggal-zapier-integration-step1.png',
    imageAlt: 'Zapier trigger setup with Google Sheets and the New or Updated Spreadsheet Row event',
  },
  {
    title: 'Add Giggal.ai as the action step',
    text: 'In the action step, search for Giggal.ai in the app picker and select it.',
    image: '/integrations/zapier-integration/giggal-zapier-integration-step2.png',
    imageAlt: 'Searching for Giggal.ai in the Zapier app picker',
  },
  {
    title: 'Choose one of the four action events',
    text: 'Giggal.ai gives you four actions: Verify Email for single addresses, Start Bulk Verification to submit a whole list, Get Bulk Verification Results to fetch the finished job, and Get Credit Balance to check your credits. For this example, pick Verify Email.',
    image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
    imageAlt: 'The four Giggal.ai action events shown in the Zapier event picker',
  },
  {
    title: 'Connect your Giggal.ai account',
    text: 'Zapier asks for your API key the first time. Create one at emailverifier.giggal.ai under the developer settings, paste it in, and click Connect. New accounts get 1,000 free credits with no card required.',
    image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
    imageAlt: 'Connecting the Giggal.ai account to Zapier with an API key',
  },
  {
    title: 'Map the email field and route on the result',
    text: 'Point the Email input at the address column from your sheet and run a test. Giggal.ai returns status, risk level, score and catch-all result in seconds. Add Zapier filters or paths after it: write deliverable addresses back to the sheet, quarantine invalid ones, and use the catch-all score to decide on the rest.',
  },
]
