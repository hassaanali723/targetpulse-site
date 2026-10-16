import type { IntegrationPagesContent } from './types'

// English copy for the integration pages. Keyword targets (Ahrefs, US):
//   hubspot email validation 90 / KD 0, hubspot email verification 80 / KD 0
//   email verifier (links to /email-checker): IN 19,000 / KD 0
// Zapier, n8n and MCP have no measured demand, so they use plain product
// wording ("Zapier email verification", "n8n email verification node",
// "email verification MCP server").

const MCP_URL = 'https://mcp.giggal.ai/mcp'

export const EN: IntegrationPagesContent = {
  common: {
    locale: 'en',
    hubPath: '/integrations',
    hubCrumb: 'Integrations',
    checkerPath: '/email-checker',
    signupLabel: 'Start free with 1,000 credits',
    getStarted: 'Get started free',
    allIntegrations: 'Explore all integrations',
  },

  // ── Hub ───────────────────────────────────────────────────────────────────
  hub: {
    meta: {
      title: 'Email Verification Integrations: HubSpot, Zapier, n8n, MCP | Giggal.ai',
      description:
        'Email verification integrations for HubSpot, Zapier, n8n, Mailchimp, Claude and ChatGPT. Verify emails inside the tools you use, catch-all addresses included.',
      ogTitle: 'Email Verification Integrations: HubSpot, Zapier, n8n, MCP',
      ogDescription:
        'Connect the Giggal.ai email verifier to HubSpot, Zapier, n8n, Mailchimp, Google Sheets, Claude and ChatGPT.',
    },
    h1Lead: 'Email verification integrations for',
    h1Accent: 'the tools you already use',
    intro:
      'Giggal.ai is an [email verifier](/email-checker) that connects to your CRM, email platform, spreadsheets and AI assistant. Each check tells you if a mailbox exists. Catch-all addresses get a valid or invalid result too.',
    waysTitle: 'Four ways to add email verification to your stack',
    waysIntro:
      'Pick the route that fits how you work. Every route uses the same credits and returns the same result.',
    ways: [
      {
        label: 'Direct',
        title: 'Direct integrations',
        text: 'Connect [HubSpot](/integrations/hubspot), Mailchimp, SendGrid and other platforms inside the Giggal.ai dashboard. Import a list, verify it, and send the clean list back.',
      },
      {
        label: 'Automation',
        title: 'Zapier and n8n',
        text: 'Verify each new contact, form response or sheet row as it arrives. Use the Giggal.ai app on [Zapier](/integrations/zapier) or the official node for [n8n](/integrations/n8n).',
      },
      {
        label: 'MCP',
        title: 'AI assistants',
        text: 'Add the [Giggal.ai MCP server](/mcp) to Claude, ChatGPT, Cursor or VS Code. Then ask the assistant to verify addresses inside the chat.',
      },
      {
        label: 'API',
        title: 'REST API',
        text: 'Send single or bulk verification requests from your own code. Results come back as JSON. The [API reference](/public/docs) lists every endpoint.',
      },
    ],
    grid: {
      searchPlaceholder: 'Search integrations…',
      searchAria: 'Search integrations',
      connectionAria: 'Filter by connection type',
      connection: { all: 'All', direct: 'Direct', zapier: 'Via Zapier', api: 'API', mcp: 'MCP' },
      categoryAria: 'Filter by category',
      allCategories: 'All categories',
      categories: {},
      prevPage: 'Previous page',
      nextPage: 'Next page',
      pagination: 'Pagination',
      showing: 'Showing {from}-{to} of {total} integrations',
      noMatchTitle: 'No integrations match your search.',
      noMatchText:
        'Any tool that can send an HTTP request can use the [REST API](/public/docs).',
      descriptions: {},
      zapierAppDescription:
        'Verify the email addresses that reach {name}, in real time through Zapier.',
      logoAlt: '{name} email verification integration with Giggal.ai',
    },
    appListTitle: 'Every Zapier app we support',
    appListIntro: '{count} apps connect to Giggal.ai through Zapier. Each one has its own setup guide.',
    apiTitle: 'Your tool is not on the list?',
    apiText:
      'Any tool that can send an HTTP request can verify emails with Giggal.ai. Use the [email verification API](/email-verification-api) for single and bulk checks, or connect through Zapier.',
    apiCta: 'API reference',
    apiHref: '/public/docs',
  },

  // ── Zapier ────────────────────────────────────────────────────────────────
  zapier: {
    meta: {
      title: 'Zapier Email Verification for 8,000+ Apps | Giggal.ai',
      description:
        'Verify emails in Zapier with Giggal.ai. Check each new contact in real time, get a valid or invalid result on catch-all addresses, and keep lists clean. No code.',
      ogTitle: 'Zapier Email Verification for 8,000+ Apps',
      ogDescription:
        'Verify each new email address in Zapier with Giggal.ai. Works with HubSpot, Google Sheets, Salesforce, Mailchimp and 8,000+ other apps.',
    },
    crumb: 'Zapier',
    h1Lead: 'Zapier email verification for',
    h1Accent: '8,000+ apps',
    intro:
      'Add the Giggal.ai [email verifier](/email-checker) to any Zap and check each address the moment it arrives. It works with forms, CRMs, spreadsheets and email platforms. Catch-all addresses get a valid or invalid result. You do not need to write code.',
    viewOnZapier: 'View on Zapier',
    tabsTitle: 'Zapier workflows and setup guide',
    tabsIntro:
      'Start from a common workflow, or follow the guide to build your own Zap in about five minutes.',
    tabs: {
      cardSubtitle: 'Connect Giggal.ai to 8,000+ apps',
      tryFree: 'Try it free',
      actionsTitle: '4 Zapier actions',
      actions: [
        { name: 'Verify Email', description: 'Verify one email address in real time, catch-all addresses included.' },
        { name: 'Start Bulk Verification', description: 'Submit a list of addresses. Returns a job ID that later steps can use.' },
        { name: 'Get Bulk Verification Results', description: 'Fetch the results of a bulk job once its status is complete.' },
        { name: 'Get Credit Balance', description: 'Check how many Giggal.ai credits you have left.' },
      ],
      workflowsTab: 'Workflows',
      guideTab: 'Integration guide',
      workflows: [
        {
          title: 'Verify new HubSpot contacts',
          description:
            'When a contact is created in HubSpot, Giggal.ai verifies the email and writes the result to a contact property.',
        },
        {
          title: 'Verify new rows in Google Sheets',
          description:
            'Each new row is verified as it is added. The status, risk level and catch-all result are written back to the row.',
        },
        {
          title: 'Verify new Salesforce leads',
          description:
            'Every new lead is verified before a sales rep works on it, so nobody writes to a mailbox that does not exist.',
        },
        {
          title: 'Verify Mailchimp signups',
          description:
            'Verify each new subscriber at signup and add only deliverable addresses to your Mailchimp audience.',
        },
        {
          title: 'Check Typeform responses',
          description:
            'Find mistyped and disposable emails in form responses before they reach your other tools.',
        },
        {
          title: 'Send results to Slack',
          description:
            'Post a Slack message when a verification finishes, or when a lead on a catch-all domain is confirmed as valid.',
        },
      ],
      workflowCta: 'Set up on Zapier',
      guideTitle: 'Connecting Giggal.ai with Zapier',
      guideIntro:
        'Setup takes about five minutes. The example below verifies every new row in a Google Sheet.',
      steps: [
        {
          title: 'Pick your trigger app',
          text: 'Create a Zap and choose the app that starts it. Any of the 8,000+ apps on Zapier works. In this example, choose Google Sheets and the New or Updated Spreadsheet Row event. Connect your account and click Continue.',
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
          title: 'Choose an action event',
          text: 'Giggal.ai has four actions: Verify Email, Start Bulk Verification, Get Bulk Verification Results and Get Credit Balance. For this example, choose Verify Email.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step3.png',
          imageAlt: 'The four Giggal.ai action events in the Zapier event picker',
        },
        {
          title: 'Connect your Giggal.ai account',
          text: 'Zapier asks for your API key the first time. In the Giggal.ai dashboard, open the Developer API tab and click Create API Key. Paste the key into Zapier and click Connect. New accounts get 1,000 free credits with no card required.',
          image: '/integrations/zapier-integration/giggal-zapier-integration-step4.png',
          imageAlt: 'Connecting the Giggal.ai account to Zapier with an API key',
        },
        {
          title: 'Map the email field and use the result',
          text: 'Set the Email input to the column that holds the address, then run a test. Giggal.ai returns the status, risk level, score and catch-all result. Add Zapier filters or paths after this step. For example, write deliverable addresses back to the sheet and move invalid ones to another tab.',
        },
      ],
      help: 'Stuck on a step? [Contact our team](/contact-us) or read the [API reference](/public/docs) for the full response format.',
    },
    why: [
      {
        title: 'A catch-all email verifier on Zapier',
        text: 'Many verifiers mark catch-all addresses as risky and stop there. On a B2B list that can be about 30% of the addresses. Giggal.ai checks them further and returns valid or invalid inside your Zap.',
      },
      {
        title: 'Verification at the point of entry',
        text: 'Leads are verified the moment they arrive from a form, CRM or sheet. Bad addresses never reach your lists, so there is less to clean later.',
      },
      {
        title: 'Results your Zap can route on',
        text: 'Each check returns a status, risk level, deliverability score and catch-all result. Use them in Zapier filters and paths to send each lead to the right place.',
      },
    ],
    appsTitle: 'Verify emails from any of these apps',
    appsIntro: 'Each app below has its own setup guide for email verification through Zapier.',
    categories: {},
    faqTitle: 'Zapier email verification FAQ',
    faq: [
      {
        q: 'How does the Giggal.ai Zapier integration work?',
        a: 'You add a Giggal.ai step to a Zap. When the trigger fires, for example a new CRM contact or form response, Zapier sends the email address to Giggal.ai. Giggal.ai checks whether the mailbox exists and passes the result to the next step. No code is needed.',
      },
      {
        q: 'Can Zapier verify catch-all email addresses?',
        a: 'Yes, with Giggal.ai as the verification step. Most verifiers return risky or unknown for catch-all domains. Giggal.ai runs extra checks on those addresses and returns valid or invalid with a score.',
      },
      {
        q: 'Which apps can I connect?',
        a: 'Any app on Zapier, including HubSpot, Salesforce, Pipedrive, Google Sheets, Airtable, Mailchimp, Klaviyo, ActiveCampaign, Typeform and Slack. If an app is on Zapier, it can send addresses to Giggal.ai.',
      },
      {
        q: 'How many credits does a check through Zapier cost?',
        a: 'One credit per email address, the same as in the dashboard or the API. Catch-all checks cost the same 1 credit. New accounts get 1,000 free credits with no card required.',
      },
      {
        q: 'Should I verify in real time or in bulk?',
        a: 'Most teams do both. Real-time checks in Zapier stop bad addresses at entry. Bulk verification cleans the lists you already have, in the dashboard or with the Start Bulk Verification action.',
      },
    ],
    howToName: 'How to verify emails in Zapier with Giggal.ai',
    howToDescription:
      'Set up email verification, including catch-all addresses, in any Zapier workflow.',
    cta: {
      title: 'Verify every new email address in Zapier',
      text: 'Build your first verification Zap in about five minutes. You get 1,000 free credits, no card required, and catch-all checks are included.',
      primary: 'Get started free',
      secondary: 'Explore all integrations',
    },
  },

  // ── n8n ───────────────────────────────────────────────────────────────────
  n8n: {
    meta: {
      title: 'n8n Email Verification: Official Community Node | Giggal.ai',
      description:
        'Verify emails in n8n with the official Giggal.ai community node. Check single addresses or whole lists, catch-all included. Install n8n-nodes-giggal from npm.',
      ogTitle: 'n8n Email Verification: Official Community Node',
      ogDescription:
        'Verify single emails and whole lists in n8n workflows with the Giggal.ai community node. Catch-all addresses included.',
    },
    crumb: 'n8n',
    h1Lead: 'n8n email verification with the',
    h1Accent: 'official Giggal.ai node',
    intro:
      'Add the Giggal.ai [email verifier](/email-checker) to your n8n workflows. Verify one address in real time or send a whole list as a batch job. Catch-all addresses get a valid or invalid result. You install the node once from npm.',
    viewOnNpm: 'View on npm',
    opsTitle: 'What the n8n node can do',
    opsIntro:
      'The node has two resources and four operations. Use Email for single checks and Job for lists.',
    ops: [
      { name: 'Verify', detail: 'Verify one email address in real time, catch-all included. 1 credit per check.' },
      { name: 'Verify Batch', detail: 'Send a whole list in one request. Returns a job ID your workflow can check later.' },
      { name: 'Get Status', detail: 'See how far a batch job has got: processed count, percentage and finish time.' },
      { name: 'Get Results', detail: 'Get the finished results page by page, with an optional filter such as deliverable or catch_all.' },
    ],
    installTitle: 'Install the node and verify your first email',
    installIntro:
      'You need an n8n instance, cloud or self-hosted, and a free Giggal.ai account. Setup takes about five minutes.',
    installSteps: [
      {
        title: 'Open Community nodes in n8n settings',
        text: 'In n8n, click your account menu at the bottom left and open Settings. Then select Community nodes.',
        image: '/integrations/n8n/giggal-n8n-step1-community-node.png',
        imageAlt: 'The Community nodes entry in the n8n settings menu',
      },
      {
        title: 'Install n8n-nodes-giggal',
        text: 'Click Install a community node. Type `n8n-nodes-giggal` in the npm Package Name field, tick the checkbox and click Install. The Giggal.ai node then appears in your node list.',
        image: '/integrations/n8n/giggal-n8n-step2.png',
        imageAlt: 'Installing the n8n-nodes-giggal package in the Install community nodes dialog',
      },
      {
        title: 'Add the node and create a credential',
        text: 'Add the Giggal.ai node to a workflow. In the Credential dropdown, choose Create new credential.',
        image: '/integrations/n8n/giggal-n8n-step3-connect-account.png',
        imageAlt: 'Creating a new Giggal.ai credential on the node in n8n',
      },
      {
        title: 'Paste your API key',
        text: 'In the Giggal.ai dashboard, open the Developer API tab and click Create API Key. Paste the key into the API Key field and save. Every Giggal.ai node in your instance can now use it. New accounts get 1,000 free credits, no card needed.',
        image: '/integrations/n8n/giggal-n8n-step4-add-api-key.png',
        imageAlt: 'Adding the Giggal.ai API key to the n8n credential',
      },
      {
        title: 'Verify your first email',
        text: 'Set Resource to Email and Operation to Verify. Map the Email Address field to your data with an expression such as `{{ $json.email }}`, then click Execute step. The output shows the status, risk level, deliverability score and catch-all details.',
        image: '/integrations/n8n/giggal-n8n-step5-add-expression-and-execute.png',
        imageAlt: 'Running a single email verification in n8n and reading the output',
      },
    ],
    batchTitle: 'Verify a whole list in n8n',
    batchIntro:
      'For more than a few addresses, use the Job resource. The pattern is submit, check status, then fetch the results.',
    batchSteps: [
      {
        title: 'Submit the list with Verify Batch',
        text: 'Set Operation to Verify Batch and point Email Field at the property that holds the addresses. You can name the batch to find it later in the dashboard. Leave Enable Catch-All Rescue on so catch-all addresses are checked further. The node returns a job ID right away, and verification runs in the background.',
        image: '/integrations/n8n/giggal-n8n-verify-batch.png',
        imageAlt: 'Submitting a batch of emails for verification with the Giggal.ai n8n node',
      },
      {
        title: 'Check progress with Get Status',
        text: 'Set Resource to Job and Operation to Get Status, and pass in the job ID from the previous step. Put a Wait node between checks so the loop does not poll too often.',
        image: '/integrations/n8n/giggal-n8n-get-status-of-job.png',
        imageAlt: 'Checking batch job progress with the Get Status operation in n8n',
      },
      {
        title: 'Fetch the results with Get Results',
        text: 'When the status shows completed, run Get Results with the same job ID. You get one item per email with its status, risk level and score. Use the Status Filter field to fetch only deliverable, undeliverable or catch_all rows.',
        image: '/integrations/n8n/giggal-n8n-get-job-result.png',
        imageAlt: 'Fetching finished batch verification results in n8n',
      },
    ],
    calloutTitle: 'Catch-all and gateway addresses get a valid or invalid result',
    calloutText:
      'Many verifiers return unknown for addresses behind secure email gateways and risky for catch-all domains. Giggal.ai [verifies addresses behind gateways](/seg-email-verification) such as Proofpoint and Mimecast, and it runs extra checks on catch-all domains. [See how catch-all verification works](/catch-all-verification).',
    faqTitle: 'n8n email verification FAQ',
    faq: [
      {
        q: 'Does the Giggal.ai node work on n8n Cloud?',
        a: 'Yes. Install it from Settings, then Community nodes, and add your API key. It works the same on n8n Cloud and on self-hosted instances.',
      },
      {
        q: 'Is the community node safe to install?',
        a: 'The Giggal.ai team publishes the package as n8n-nodes-giggal on npm, and anyone can read the source. The node only talks to the Giggal.ai API, with the credential you set up.',
      },
      {
        q: 'Can n8n verify catch-all emails?',
        a: 'Yes, with the Giggal.ai node. Single checks handle catch-all domains automatically. Batch jobs do the same when Enable Catch-All Rescue is on. You get valid or invalid with a score, not a risky label.',
      },
      {
        q: 'What does verification cost in n8n?',
        a: 'One credit per email address, the same as everywhere else in Giggal.ai. Catch-all checks cost the same 1 credit. New accounts start with 1,000 free credits and no card.',
      },
      {
        q: 'What does the node output?',
        a: 'Each email returns a status, risk level and deliverability score. It also returns flags for free, role and disposable addresses, mail server details and the catch-all result. The output is normal n8n JSON that you can filter and map.',
      },
    ],
    howToName: 'How to verify emails in n8n with the Giggal.ai community node',
    howToDescription:
      'Install n8n-nodes-giggal, add your API key, and verify single emails or whole lists in n8n workflows.',
    cta: {
      title: 'Add email verification to your n8n workflows',
      text: 'Install n8n-nodes-giggal, paste your API key, and stop passing dead email addresses through your workflows. You get 1,000 free credits, no card required.',
      primary: 'Get started free',
      secondary: 'Explore all integrations',
    },
  },

  // ── HubSpot ───────────────────────────────────────────────────────────────
  hubspot: {
    meta: {
      title: 'HubSpot Email Verification and Validation | Giggal.ai',
      description:
        'HubSpot email verification with Giggal.ai. Validate the contacts and lists in your CRM, get a result on catch-all addresses, and filter on it in HubSpot.',
      ogTitle: 'HubSpot Email Verification and Validation',
      ogDescription:
        'Connect Giggal.ai to HubSpot, verify your contacts and lists, and filter on the result in your CRM.',
    },
    crumb: 'HubSpot',
    h1Lead: 'HubSpot email verification',
    h1Accent: 'and validation',
    intro:
      'Verify the contacts already in your HubSpot CRM. Connect once, pick a list, and each contact gets a result written to its record. Catch-all addresses get deliverable or undeliverable, not risky. You do not export or re-import anything.',
    openDashboard: 'Open the dashboard',
    capsTitle: 'What the HubSpot integration does',
    capsIntro: 'Four steps, all inside HubSpot and Giggal.ai.',
    caps: [
      {
        name: 'Import contacts or a list',
        detail: 'Choose All contacts or any HubSpot list. You see the number of emails first, so you know the credit cost before you start.',
      },
      {
        name: 'Verify every address',
        detail: 'Each mailbox is checked to see if it exists. Catch-all domains get a clear result, not risky. 1 credit per address.',
      },
      {
        name: 'Write results back',
        detail: 'Five Giggal properties are set on each contact, so the result stays with the record.',
      },
      {
        name: 'Filter and build lists',
        detail: 'Use Giggal email status in HubSpot filters and active lists. Remove bad addresses before your next send.',
      },
    ],
    stepsTitle: 'How to connect HubSpot and verify your first list',
    stepsIntro:
      'There are four steps and they take about two minutes. You need a Giggal.ai account and HubSpot permission to install apps and edit contact properties.',
    steps: [
      {
        title: 'Open the Integration tab in Giggal.ai',
        text: 'Sign in to Giggal.ai, go to Email Validation and open the Integration tab. Find the HubSpot card and click Connect. If you have no account yet, sign-up takes a minute and includes 1,000 free credits.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-connect-integration.png',
        imageAlt: 'The HubSpot card and Connect button in the Giggal.ai Integration tab',
      },
      {
        title: 'Approve the permissions in HubSpot',
        text: 'HubSpot shows its own approval screen with everything Giggal.ai can access: view contact properties, change contacts, change contact property settings, view contact lists, and read the installing account. Review the list and click Connect app. You return to Giggal.ai, and the HubSpot card now shows Verify.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-permissions-review.png',
        imageAlt: 'HubSpot permission review screen for the Giggal Email Verifier app',
      },
      {
        title: 'Import a contact list',
        text: 'Click Verify on the HubSpot card to open the Import from HubSpot window. Choose All contacts or any list in your portal. Each row shows how many emails it holds, so you know the cost before you start. Click Import.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-import-contact-list.png',
        imageAlt: 'Import from HubSpot window listing contact lists and email counts',
      },
      {
        title: 'Verify the list and sync the results',
        text: 'Giggal.ai checks every address and writes the result to each HubSpot contact as it finishes. The task card shows the breakdown and a Synced to HubSpot count. Click Sync to HubSpot to run the write again at any time.',
        image: '/integrations/hubspot/giggal-hubspot-email-verification-results-synced-to-hubspot.png',
        imageAlt: 'Finished HubSpot verification task in Giggal.ai with results synced back to HubSpot',
      },
    ],
    calloutTitle: 'Why use a catch-all email verifier with HubSpot',
    calloutText:
      'About 30% of a B2B list sits on catch-all domains. Many verifiers return those contacts as risky, so you cannot act on them. Giggal.ai is an [email verifier](/email-checker) that runs extra checks on catch-all domains and [verifies addresses behind secure email gateways](/seg-email-verification) such as Proofpoint and Mimecast. Most of those contacts come back as deliverable or undeliverable. [See how catch-all verification works](/catch-all-verification).',
    propsTitle: 'HubSpot properties Giggal.ai writes to each contact',
    propsIntro:
      'The five properties are created the first time you run a verification. They sit in a property group named Giggal Email Verifier. Your existing HubSpot properties are not changed.',
    propsHead: ['Property', 'Type', 'What it tells you'],
    props: [
      ['Giggal email is valid', 'Checkbox', 'Yes when the mailbox was confirmed to exist.'],
      ['Giggal email status', 'Dropdown', 'Deliverable, Undeliverable, Risky or Unknown.'],
      ['Giggal deliverability score', 'Number', 'Confidence from 0 to 100.'],
      ['Giggal email detail', 'Text', 'A short reason for the result.'],
      ['Giggal verified at', 'Date', 'When the address was last checked.'],
    ],
    scopesTitle: 'HubSpot permissions and data',
    scopesIntro: 'Giggal.ai asks for four HubSpot scopes. Each one has a single use.',
    scopes: [
      ['crm.objects.contacts.read', 'Read the email address on the contacts you choose to verify.'],
      ['crm.objects.contacts.write', 'Write the verification result back to those contacts.'],
      ['crm.schemas.contacts.write', 'Create the five Giggal properties on first use.'],
      ['crm.lists.read', 'Show your contact lists so you can pick one to verify.'],
    ],
    scopesNote:
      'Giggal.ai reads only the email address of the contacts you choose. It does not create or delete contacts, it changes no properties other than the five above, and it never sends email to the addresses it checks.',
    faqTitle: 'HubSpot email verification FAQ',
    faq: [
      {
        q: 'Does Giggal.ai send email to my contacts?',
        a: 'No. Verification talks to the receiving mail server and stops before any message is sent. Your contacts receive nothing, in their inbox or their spam folder.',
      },
      {
        q: 'What does it change in my HubSpot account?',
        a: 'On first use it creates a property group called Giggal Email Verifier with five custom contact properties. It then writes results into those properties only. Existing HubSpot properties are not changed, and no contacts are created or deleted.',
      },
      {
        q: 'Can it verify catch-all domains?',
        a: 'Yes. This is the main reason to use Giggal.ai with HubSpot. Many verifiers return risky or unknown on catch-all domains. Giggal.ai checks further and returns deliverable or undeliverable on most of them.',
      },
      {
        q: 'Is email validation the same as email verification?',
        a: 'In practice, yes. Both terms describe checking whether an address can receive mail. Giggal.ai checks the format, the domain mail servers and the mailbox, then writes one result to the HubSpot contact.',
      },
      {
        q: 'How much does it cost?',
        a: 'One credit per address, and catch-all checks are included. New accounts start with 1,000 free credits, and the price per address drops as volume goes up.',
      },
      {
        q: 'How do I use the results in HubSpot?',
        a: 'Filter contacts or build an active list on Giggal email status. A common setup is an active list of Deliverable contacts as the send audience and a suppression list of Undeliverable contacts.',
      },
      {
        q: 'How do I disconnect?',
        a: 'Open the Integration tab in Giggal.ai, click the settings icon on the HubSpot card and choose Disconnect. You can also remove the app in HubSpot under Settings, Integrations, Connected Apps. Results already written stay on your contacts.',
      },
    ],
    howToName: 'How to verify HubSpot contacts with Giggal.ai',
    howToDescription:
      'Connect Giggal.ai to HubSpot, verify a contact list, and read the result from five properties on every contact.',
    cta: {
      title: 'Clean up your HubSpot contacts',
      text: 'Connect once and every contact in your CRM gets a verification result you can filter on. You start with 1,000 free credits, no card required.',
      primary: 'Get started free',
      secondary: 'Explore all integrations',
    },
  },

  // ── MCP ───────────────────────────────────────────────────────────────────
  mcp: {
    meta: {
      title: 'Email Verification MCP Server for Claude and ChatGPT | Giggal.ai',
      description:
        'Connect Giggal.ai to Claude, ChatGPT, Cursor and VS Code over MCP and verify emails inside the chat. Catch-all addresses get a valid or invalid result.',
      ogTitle: 'Email Verification MCP Server for Claude and ChatGPT',
      ogDescription:
        'Giggal.ai runs a remote MCP server, so Claude, ChatGPT, Cursor and VS Code can verify email addresses. Catch-all checks included.',
    },
    crumb: 'MCP',
    h1Lead: 'An email verification MCP server for',
    h1Accent: 'Claude and ChatGPT',
    intro:
      'Giggal.ai runs a remote MCP server. Connect it to Claude, ChatGPT, Cursor or VS Code, and your AI assistant can work as an [email verifier](/email-checker). Ask it to check an address or a list, and it answers inside the chat.',
    urlLabel: 'MCP URL',
    directoryLabel: 'Add Giggal.ai to Claude',
    points: [
      'Claude and ChatGPT sign in with OAuth',
      'Code editors use your API key',
      'Catch-all checks included',
    ],
    setupTitle: 'Set up the MCP server in your AI tool',
    setupSubtitle:
      'Pick your tool to see the steps. Claude and ChatGPT connect with a sign-in. Code editors read a config file.',
    toolsTitle: 'What the AI assistant can do',
    toolsIntro:
      'The server gives your assistant three tools. You ask in plain English, and it picks the right one.',
    tools: [
      {
        tool: 'verify_emails',
        title: 'Verify addresses',
        body: 'Check one email or a list. Each address gets valid or invalid, including addresses on catch-all domains.',
      },
      {
        tool: 'get_verification_details',
        title: 'Get full results',
        body: 'Fetch the details of a past check: status, reason codes and deliverability score for each address.',
      },
      {
        tool: 'get_credit_balance',
        title: 'Check your credits',
        body: 'Ask how many credits are left before you start a large check.',
      },
    ],
    whyTitle: 'Why the catch-all result matters in a chat',
    why: [
      'About 30% of a B2B list sits on catch-all domains. These domains accept mail for any address, whether or not the mailbox exists. Many verifiers label those addresses risky, which means they could not tell.',
      'In a chat, that label does not help. The assistant repeats what it was given, so a third of your list comes back as uncertain. Giggal.ai checks those addresses further and returns valid or invalid. It does the same for mailboxes behind 15 named secure email gateways, including Proofpoint, Mimecast and Barracuda.',
      'For example prompts, read [verifying emails inside Claude and ChatGPT](/blog/verify-emails-inside-claude-and-chatgpt). The MCP server uses the same engine as the [email verification API](/email-verification-api).',
    ],
    faqTitle: 'Email verification MCP FAQ',
    faq: [
      {
        q: 'Can Claude verify email addresses?',
        a: `Yes, once you connect an email verification tool over MCP. Add the Giggal.ai server at ${MCP_URL} as a custom connector in Claude, or with the claude mcp add command in Claude Code. Then ask, for example, "verify these eleven addresses and tell me which will bounce". Claude calls the verify_emails tool and shows the result in the chat.`,
      },
      {
        q: 'Can ChatGPT verify email addresses?',
        a: 'Yes, on ChatGPT plans that allow custom connectors. Add Giggal.ai as a custom plugin with the MCP server URL and sign in with OAuth. Any client that supports remote MCP can use the same server, including Cursor, VS Code, Windsurf, Cline and Zed.',
      },
      {
        q: 'What can the AI assistant do?',
        a: 'Three things. verify_emails checks one address or a list. get_verification_details returns the full result for each address, including status and reason codes. get_credit_balance shows how many credits are left.',
      },
      {
        q: 'How does it handle catch-all addresses?',
        a: 'The same way as the rest of Giggal.ai. Many verifiers label catch-all addresses risky. Giggal.ai returns valid or invalid for them, and for mailboxes behind 15 named secure email gateways such as Proofpoint, Mimecast and Barracuda.',
      },
      {
        q: 'Do I need an API key?',
        a: 'Not for Claude or ChatGPT. Both connect with OAuth, so you sign in with your Giggal.ai account. Code editors such as Claude Code, Cursor and VS Code use an API key, which you find in the Developer API tab of the Giggal.ai app.',
      },
      {
        q: 'Does verifying through MCP cost more?',
        a: 'No. It uses the same credits as the dashboard and the REST API: 1 credit per address, catch-all included. New accounts get 1,000 free credits with no card, and credits never expire.',
      },
      {
        q: 'Should I clean a large list this way?',
        a: 'No. MCP works best when verification is one step in a task, such as checking a dozen contacts before you write outreach. For tens of thousands of addresses, use the bulk upload in the app or the REST API.',
      },
    ],
    howToName: 'Connect Giggal.ai email verification to Claude or ChatGPT over MCP',
    howToDescription:
      'Four steps to verify email addresses, catch-all included, in Claude, ChatGPT, Cursor or VS Code with the Giggal.ai MCP server.',
    setupSteps: [
      {
        name: 'Create a Giggal.ai account',
        text: 'Sign up at Giggal.ai. New accounts include 1,000 free verification credits with no card required.',
      },
      {
        name: 'Add the MCP server to your client',
        text: `Use the server URL ${MCP_URL}. In Claude, add it under Settings, then Connectors. In ChatGPT, add it as a custom plugin. Code editors read a JSON config file, shown on this page for each editor.`,
      },
      {
        name: 'Sign in or add your API key',
        text: 'Claude and ChatGPT ask you to sign in to Giggal.ai and click Allow. Code editors need the API key from the Developer API tab in the app.',
      },
      {
        name: 'Ask the assistant to verify an address',
        text: 'Ask in plain English, for example "verify hello@example.com and tell me if it is a real mailbox". The assistant calls verify_emails and shows the result.',
      },
    ],
    ctaTitle: 'Connect Giggal.ai to your AI assistant',
    ctaText:
      'Start with 1,000 free verification credits, no card required. Add the MCP URL to Claude, ChatGPT or your code editor.',
    ctaButton: 'Get started free',
  },
}
