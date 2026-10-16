// Every visible piece of text on the API reference page (/public/docs and its
// translated twins). Code structure (methods, paths, JSON samples, param names,
// types and required flags) lives in components/docs/ApiDocsPage.tsx; only
// text lives here.
//
// RICH TEXT: any string typed `Rich` may hold [anchor](/path) links and
// `code` spans. Plain `string` fields are rendered as-is.
//
// PLACEHOLDERS: `{n}` in groupCount is replaced with the endpoint count.

export type Rich = string

export interface ApiDocsEndpointStrings {
  title: string
  description: Rich
  /** Path & query param descriptions, keyed by param name. */
  params?: Record<string, string>
  /** Request body param descriptions, keyed by param name. */
  bodyParams?: Record<string, string>
}

export interface ApiDocsStrings {
  /** Breadcrumb JSON-LD name for this page. */
  breadcrumbName: string
  /** TechArticle JSON-LD. */
  schema: { headline: string; description: string }
  /** Contact page in this language ("Talk to us" and "Talk to our team"). */
  contactPath: string

  /** Banner above the H1 pointing to the overview pages. */
  overviewBanner: Rich
  hero: { h1: string; lead: string }

  sidebar: {
    searchPlaceholder: string
    /** aria-labels on the group expand/collapse button. */
    collapse: string
    expand: string
  }

  intro: {
    h2: string
    body: string
    baseUrlLabel: string
    apiKeyLabel: string
    apiKeyBody: string
    apiKeyLink: string
    envelopeLabel: string
    envelopeBody: string
    quickStartLabel: string
  }

  auth: {
    h2: string
    body: string
    bearerLabel: string
    xApiKeyLabel: string
    note: string
    idempotencyLabel: string
    idempotencyBody: Rich
  }

  /** Sidebar group labels and group H2s, keyed by group id. */
  groups: Record<string, string>
  /** Line under each group H2. `{n}` = number of endpoints. */
  groupCount: { one: string; other: string }

  /** Labels inside each endpoint section and its response panel. */
  endpoint: {
    authorizations: string
    pathParams: string
    requestBody: string
    required: string
    responseSamples: string
  }

  /** Endpoint text, keyed by endpoint id (e.g. 'verify-single'). */
  endpoints: Record<string, ApiDocsEndpointStrings>

  errors: {
    h2: string
    statusHeader: string
    meaningHeader: string
    statusRows: { status: string; meaning: string }[]
    rateLimitsH3: string
    rateLimitsBody: Rich
    categoryHeader: string
    limitHeader: string
    rateLimitRows: { category: string; limit: string }[]
    tierNote: Rich
    higherLimitsTitle: string
    higherLimitsBody: string
    higherLimitsCta: string
    h429: string
    body429: string
    backoff: Rich
  }

  cta: {
    h3: string
    body: string
    primary: string
    secondary: string
  }
}
