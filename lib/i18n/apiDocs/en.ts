import type { ApiDocsStrings } from './types'

export const API_DOCS_EN: ApiDocsStrings = {
  breadcrumbName: 'API Documentation',
  schema: {
    headline: 'Giggal.ai API Reference',
    description:
      'REST API for verifying single emails, running bulk batches, and deep-checking catch-all and SEG-protected addresses. JSON endpoints, API key auth, billed per successful verification.',
  },
  contactPath: '/contact-us',

  overviewBanner:
    'Looking for an overview? See the [email verification API](/email-verification-api), or the [email validation API for signup forms](/email-validation-api).',
  hero: {
    h1: 'Email verification API reference',
    lead: 'Verify single emails, run bulk batches, and deep-check catch-all and SEG-protected addresses. All endpoints use JSON, are authenticated with an API key, and are billed per successful verification.',
  },

  sidebar: {
    searchPlaceholder: 'Search…',
    collapse: 'Collapse',
    expand: 'Expand',
  },

  intro: {
    h2: 'Introduction',
    body: 'The Giggal.ai API lets you verify single email addresses, run bulk batches of up to 50,000 emails per job, and deep-check catch-all and SEG-protected addresses via a simple JSON REST API. Every successful verification costs credits from your account.',
    baseUrlLabel: 'Base URL',
    apiKeyLabel: 'Get an API key',
    apiKeyBody:
      'Create an API key from your Giggal.ai dashboard: open the Developer API tab in the sidebar and click Create API Key. Each key is scoped to your account, tracks its own usage, and can be revoked at any time.',
    apiKeyLink: 'Open the Developer API tab',
    envelopeLabel: 'Response envelope',
    envelopeBody: 'Every response follows a consistent JSON envelope:',
    quickStartLabel: 'Quick start: verify one email with cURL',
  },

  auth: {
    h2: 'Authentication',
    body: 'Pass your API key with every request via one of two headers. Either works.',
    bearerLabel: 'Option 1: Bearer token',
    xApiKeyLabel: 'Option 2: X-API-Key header',
    note: 'Missing, invalid, or revoked keys return HTTP 401. Never expose API keys in client-side code. Proxy calls through your backend instead.',
    idempotencyLabel: 'Idempotency (bulk & catch-all)',
    idempotencyBody:
      'For `POST /v1/verify-batch` and `POST /v1/catchall`, pass an `Idempotency-Key` header. Retries with the same key return the original response without creating a duplicate job or double-charging credits.',
  },

  groups: {
    'single-verification': 'Single verification',
    'bulk-verification': 'Bulk verification',
    'catchall-verification': 'Catch-all verification',
    account: 'Account',
  },
  groupCount: {
    one: '{n} endpoint in this group.',
    other: '{n} endpoints in this group.',
  },

  endpoint: {
    authorizations: 'Authorizations',
    pathParams: 'Path & query parameters',
    requestBody: 'Request body',
    required: 'Required',
    responseSamples: 'Response samples',
  },

  endpoints: {
    'verify-single': {
      title: 'Verify a single email',
      description:
        'Verify one email address synchronously. Costs 1 credit. When the domain is catch-all, deep verification runs in-line and the response includes catch_all_score plus catch_all_verdict.',
      bodyParams: {
        email: 'The email address to verify.',
      },
    },
    'submit-batch': {
      title: 'Submit a bulk verification job',
      description:
        'Submit up to 50,000 emails per job. Processing is asynchronous, so poll GET /v1/jobs/:jobId for progress. Pass an Idempotency-Key header to safely retry job creation without double charges.',
      bodyParams: {
        emails:
          'Array of email addresses to verify. Max 50,000 per job. Duplicates and malformed addresses are stripped server-side.',
        name: 'Optional human-readable label for the job. Shown in your dashboard.',
      },
    },
    'get-job': {
      title: 'Get bulk job status',
      description:
        'Poll to check progress. Status transitions: processing → completed (or failed). Recommended polling interval: 10–15 seconds. Small batches (< 50 emails) typically finish inside 30 seconds.',
      params: {
        jobId: 'The job ID returned from POST /v1/verify-batch.',
      },
    },
    'get-job-results': {
      title: 'Get bulk job results',
      description:
        'Once status is "completed", fetch per-email results. Results are paginated, so pass page and limit query params. Results are retained for 48 hours (see resultsExpiresAt on the job).',
      params: {
        jobId: 'The job ID.',
        page: 'Page number, defaults to 1.',
        limit: 'Results per page, defaults to 25, max 500.',
      },
    },
    'start-catchall': {
      title: 'Start a catch-all verification task',
      description:
        'Kick off deep catch-all verification for a completed bulk job. Only addresses flagged as catch-all in the source job are re-checked. Billed at 1 credit per address (see creditsRequired in the response).',
      bodyParams: {
        jobId:
          'A completed bulk verification job ID. Only catch-all addresses from that job will be deep-verified.',
        name: 'Optional human-readable label for the task.',
      },
    },
    'get-catchall': {
      title: 'Get catch-all task status',
      description:
        'Poll to check progress and live verdictCounts. Catch-all tasks usually resolve in a few seconds to a few minutes depending on volume.',
      params: {
        taskId: 'The task ID returned from POST /v1/catchall.',
      },
    },
    'catchall-results': {
      title: 'Get catch-all task results',
      description:
        'Fetch paginated per-email results with the underlying scoring breakdown (domain triage signals and domain age).',
      params: {
        taskId: 'The task ID.',
        page: 'Page number, defaults to 1.',
        limit: 'Results per page, defaults to 25, max 500.',
        verdict: 'Filter by verdict: valid | invalid.',
      },
    },
    'catchall-download': {
      title: 'Download catch-all results as CSV',
      description:
        'Downloads all results for a completed catch-all task as a CSV file with Email, Score, Verdict columns. Content-Type is text/csv.',
      params: {
        taskId: 'The task ID.',
        verdict: 'Filter by verdict: valid | invalid.',
      },
    },
    'get-credits': {
      title: 'Get current credit balance',
      description:
        'Returns your account balance including available, reserved (held for in-flight jobs), and lifetime totals. Verifications that come back as "unknown" are refunded automatically and reflected here.',
    },
  },

  errors: {
    h2: 'Errors & rate limits',
    statusHeader: 'Status',
    meaningHeader: 'Meaning',
    statusRows: [
      { status: '200 OK', meaning: 'Request succeeded (synchronous verification or status/results fetch).' },
      { status: '202 Accepted', meaning: 'Async job or task created and queued.' },
      { status: '400 Bad Request', meaning: 'Missing or invalid parameters (bad email format, empty emails array, missing jobId).' },
      { status: '401 Unauthorized', meaning: 'Missing, invalid, or revoked API key.' },
      { status: '402 Payment Required', meaning: 'Insufficient credits for the requested operation.' },
      { status: '404 Not Found', meaning: 'Job or task ID does not exist under your account.' },
      { status: '409 Conflict', meaning: 'Job is not in the required state (e.g. requesting results before completion).' },
      { status: '410 Gone', meaning: 'Job results have passed the 48-hour retention window.' },
      { status: '429 Too Many Requests', meaning: 'Rate limit exceeded, so back off and retry.' },
      { status: '500 / 502 / 503', meaning: 'Server or upstream verification service is temporarily unavailable.' },
    ],
    rateLimitsH3: 'Rate limits',
    rateLimitsBody:
      'Every response includes `RateLimit-Limit`, `RateLimit-Remaining`, and `RateLimit-Reset` headers (RFC casing) so you can pace requests. `RateLimit-Reset` is the number of seconds until the current window resets.',
    categoryHeader: 'Category',
    limitHeader: 'Limit',
    rateLimitRows: [
      { category: 'All endpoints (default)', limit: '300 requests / 15 minutes' },
      { category: 'Batch creation (POST /v1/verify-batch, POST /v1/catchall)', limit: '30 requests / 15 minutes' },
      { category: 'Job polling (GET /v1/jobs/:id, GET /v1/jobs/:id/results)', limit: '600 requests / 15 minutes' },
      { category: 'Max emails per bulk job', limit: '50,000' },
      { category: 'Job results retention', limit: '48 hours' },
    ],
    tierNote:
      'The three-tier split exists because polling naturally happens more often than batch creation, since you might poll every few seconds while a job runs, so `600 / 15 min` (≈ 40/min) gives you room without hammering the backend.',
    higherLimitsTitle: 'Need higher limits?',
    higherLimitsBody: 'We routinely lift limits for verified integration partners.',
    higherLimitsCta: 'Talk to us',
    h429: '429 response format',
    body429: 'When you hit a rate limit, the API returns HTTP 429 with this body:',
    backoff:
      'Back off using the `RateLimit-Reset` header value (seconds until the window resets) before retrying.',
  },

  cta: {
    h3: 'Ready to integrate?',
    body: 'Create your API key in seconds. Free trial credits included so you can wire it up end-to-end before spending a cent.',
    primary: 'Get your API key',
    secondary: 'Talk to our team',
  },
}
