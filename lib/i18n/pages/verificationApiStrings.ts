// All page copy for the email verification API page, one object per language the
// page ships in. The page is components/pages/VerificationApi/VerificationApiPage.tsx;
// the URLs live in CLUSTERS.verificationApi (lib/i18n/clusters.ts).
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists.
//
// {0}, {1} mark where the page puts an inline code token (a field name, header or
// endpoint). The tokens themselves live in the page component, so they stay the
// same in every language. Keep each placeholder once, in the right place.
//
// Code samples, endpoints, JSON, field paths, HTTP codes and rate limit numbers are
// not here. They are data in the page component.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

/** A row of the response status table. The status value itself is data in the page. */
export interface VerificationApiStatusRow {
  meaning: string
  action: string
}

/** One endpoint card. The method and path are data in the page. */
export interface VerificationApiEndpointCard {
  badge: string
  title: string
  /** May hold {0} for an inline code token. */
  body: string
  link: string
}

/** One use case card. */
export interface VerificationApiUseCase {
  title: string
  /** May hold a [label](/path) link. */
  body: string
}

/** A row of the flags table. The field path is data in the page. */
export interface VerificationApiFlagRow {
  name: string
  /** May hold {0} for an inline code token. */
  description: string
}

/** One review card. The reviewer name and platform badge are data in the page. */
export interface VerificationApiReview {
  quote: string
  role: string
}

export interface VerificationApiStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  /** Other languages only; English uses the route's file-based opengraph-image. */
  ogAlt?: string
  crumb: string
  appName: string

  // Hero
  /** H1 before the highlighted part. */
  h1Lead: string
  h1Highlight: string
  /** Optional H1 text after the highlighted part, for languages that need it. */
  h1Tail?: string
  heroIntro: string
  quickTestLabel: string
  heroCta: string
  heroDocsCta: string
  heroNote: string

  /** Ratings and award row text. English leaves them out and gets the components' defaults. */
  ratings?: {
    reviews: (count: number) => string
    ratedAria: (rating: string, platform: string) => string
    decimalComma?: boolean
  }
  awards?: { headingLead: string; headingRest: string; showLabel: string }

  // What one call returns
  returnsTitle: string
  returnsIntro: string
  jsonLabel: string
  statusTitle: string
  /** {0} is the `status` field. */
  statusIntro: string
  thStatus: string
  thMeaning: string
  thAction: string
  /** deliverable, undeliverable, unknown. */
  statusRows: [VerificationApiStatusRow, VerificationApiStatusRow, VerificationApiStatusRow]

  // Catch-all
  catchAllTitle: string
  /** Last paragraph: {0} catch_all_verdict, {1} catch_all_score, plus two links. */
  catchAllParas: [string, string, string]
  oldApiLabel: string
  oldApiSub: string
  oldApiNote: string
  ourApiLabel: string
  ourApiSub: string
  ourApiNote: string

  // Endpoints
  endpointsTitle: string
  endpointsIntro: string
  /** Single, bulk, job polling, bulk catch-all. */
  endpoints: [VerificationApiEndpointCard, VerificationApiEndpointCard, VerificationApiEndpointCard, VerificationApiEndpointCard]

  // Flags
  flagsTitle: string
  flagsIntro: string
  thFlag: string
  thFieldPath: string
  thDescription: string
  /** Disposable, role, free, catch-all, plus tag, mailbox full, no-reply, blacklist. */
  flags: [
    VerificationApiFlagRow,
    VerificationApiFlagRow,
    VerificationApiFlagRow,
    VerificationApiFlagRow,
    VerificationApiFlagRow,
    VerificationApiFlagRow,
    VerificationApiFlagRow,
    VerificationApiFlagRow,
  ]

  // Use cases
  useCasesTitle: string
  useCasesIntro: string
  /** Six cards; the last one is highlighted. */
  useCases: [VerificationApiUseCase, VerificationApiUseCase, VerificationApiUseCase, VerificationApiUseCase, VerificationApiUseCase, VerificationApiUseCase]

  // Code examples
  codeTitle: string
  codeIntro: string
  nodeLabel: string
  pythonLabel: string
  serverSideOnly: string
  bulkTitle: string
  /** {0} is the `completed` job status. */
  bulkIntro: string

  // Pricing
  pricingTitle: string
  pricingIntro: string
  /** Carries the pricing link. */
  pricingNote: string

  // Rate limits and errors
  limitsTitle: string
  /** {0} and {1} are the two rate limit headers. They carry their own left margin, so no space goes before them. */
  limitsIntro: string
  limitsCardTitle: string
  /** Single checks, batch jobs, catch-all jobs, polling. */
  limitLabels: [string, string, string, string]
  /** {n} is the request count. */
  limitUnit: string
  errorsCardTitle: string
  /** One line per HTTP code, in the page's order (400, 401, 402, 404, 409, 410, 429). */
  errors: [string, string, string, string, string, string, string]
  /** Carries the docs link. */
  errorsNote: string

  // Reviews
  reviewsTitle: string
  reviewsIntro: string
  /** G2, SourceForge, Product Hunt. Quotes are the customers' own words. */
  reviews: [VerificationApiReview, VerificationApiReview, VerificationApiReview]

  // FAQ
  faqTitle: string
  faqIntro: string
  faqs: FaqItem[]

  // CTA
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: VerificationApiStrings = {
  metaTitle: 'Email Verification API with Catch-All Resolution | Giggal.ai',
  ogTitle: 'Email Verification API with Catch-All Resolution',
  description:
    'Real-time email verification API that checks whether each mailbox exists, with catch-all resolution in one JSON response. Bulk jobs up to 50,000. 1,000 free credits.',
  crumb: 'Email verification API',
  appName: 'Giggal.ai Email Verification API',

  h1Lead: 'Email verification API that also',
  h1Highlight: 'resolves catch-all addresses',
  heroIntro:
    'Check whether any mailbox exists with one REST call. On catch-all domains, where most APIs stop at "accept-all" or "risky", you get a valid or invalid answer in the same response. Our email verification API gives engineering teams clean JSON data to protect sender reputation across outreach pipelines.',
  quickTestLabel: 'Quick test',
  heroCta: 'Get a free API key',
  heroDocsCta: 'Read the API reference',
  heroNote: '1,000 free credits, no card needed. Credits never expire.',

  returnsTitle: 'What one API call returns',
  returnsIntro:
    'A single call returns full deliverability data. You receive the top-level deliverability status, risk evaluation, numerical deliverability score, mailbox attributes, and in-line catch-all results.',
  jsonLabel: 'JSON Response',
  statusTitle: 'How to handle response status values',
  statusIntro:
    'The primary delivery status is returned in the {0} field. Here is how your backend application should interpret and route each enum value:',
  thStatus: 'Status',
  thMeaning: 'Meaning',
  thAction: 'Recommended action',
  statusRows: [
    {
      meaning: 'The destination mail server accepted the recipient socket. Mailbox is fully active.',
      action: 'Safe to send. Include in primary outreach campaigns.',
    },
    {
      meaning: 'The mailbox does not exist, syntax is invalid, domain has no MX records, or domain is disposable.',
      action: 'Do not send. Remove from campaigns to avoid hard bounces.',
    },
    {
      meaning: 'Inconclusive server response, typically due to greylisting or connection timeout.',
      action: 'Retry check later. Credits used for unknown answers are refunded automatically.',
    },
  ],

  catchAllTitle: 'Catch-all addresses resolved in the same call',
  catchAllParas: [
    'Standard checks fail on catch-all domains. When a company mail server accepts every incoming address, standard tools see a positive response for real mailboxes and fake typos alike. Unable to verify further, most tools tag the address "risky" or "accept-all" and leave the decision to you.',
    'Around 30% of a typical B2B list sits on catch-all domains or domains behind secure email gateways (SEGs) like Proofpoint and Mimecast. Deleting them discards real buyers; sending unverified causes bounce spikes.',
    'Our verification engine performs in-line deep catch-all resolution. It checks whether the mailbox exists to return a {0} ("valid" or "invalid") and a {1} from 0 to 100. Learn more in our dedicated guides on [catch-all verification](/catch-all-verification) and checking mailboxes behind [secure email gateways](/seg-email-verification).',
  ],
  oldApiLabel: 'Traditional verification API',
  oldApiSub: 'Gives up on accept-all domains',
  oldApiNote: 'Uncertainty passed to your team. Send and risk high bounces, or discard valid prospective buyers.',
  ourApiLabel: 'Giggal.ai API',
  ourApiSub: 'Resolves catch-alls in-line',
  ourApiNote: 'Confirmed active mailbox. Confidently keep your real catch-all leads and protect sender reputation.',

  endpointsTitle: 'Endpoints for single, bulk and catch-all checks',
  endpointsIntro:
    'Whether checking a single contact or verifying large lists, our email verify api provides purpose-built endpoints designed for performance and reliability.',
  endpoints: [
    {
      badge: '1 credit',
      title: 'Single email verification',
      body: 'Synchronous verification for a single email address. Checks if the email address exists, runs domain diagnostics and resolves catch-all addresses in-line. Returns a complete JSON result.',
      link: 'View endpoint docs',
    },
    {
      badge: 'Up to 50k emails',
      title: 'Bulk email verification',
      body: 'Asynchronous processing for up to 50,000 addresses per job. Strips duplicates and invalid syntax server-side. Supports the {0} header to prevent double-charges.',
      link: 'View batch docs',
    },
    {
      badge: 'Paginated',
      title: 'Job polling and results',
      body: 'Poll job progress with {0} every 10 to 15 seconds. Retrieve paginated results up to 500 records per page. Results are stored safely for 48 hours.',
      link: 'View polling docs',
    },
    {
      badge: '1 credit per address',
      title: 'Bulk catch-all resolution',
      body: 'Run deep catch-all resolution across addresses flagged as catch-all from a completed bulk job. Download results as a clean CSV with score and status columns.',
      link: 'View catch-all docs',
    },
  ],

  flagsTitle: 'Flags in every response',
  flagsIntro:
    'Beyond valid or invalid, every response includes detailed mailbox attributes to help you segment leads, prevent abuse, and apply automated filtering rules.',
  thFlag: 'Flag',
  thFieldPath: 'Field path',
  thDescription: 'Description and usage',
  flags: [
    { name: 'Disposable', description: 'Identifies temporary throwaway inboxes. Block immediately to stop trial fraud.' },
    {
      name: 'Role Account',
      description: 'Detects generic departmental mailboxes (info@, billing@, support@). Route to CRM teams.',
    },
    {
      name: 'Free Email',
      description: 'Flags consumer webmail domains (gmail.com, yahoo.com) to separate personal inboxes from corporate prospects.',
    },
    { name: 'Catch-All', description: 'Flags whether the host accepts all mail. Use with {0} to recover valid leads.' },
    {
      name: 'Plus Tag',
      description: 'Detects addresses using alias sub-addressing (user+tag@). Prevent multi-account manipulation.',
    },
    { name: 'Mailbox Full', description: 'Indicates the storage quota has been exceeded. Mail sent here will soft-bounce.' },
    { name: 'No-Reply', description: 'Flags unmonitored broadcast addresses. Avoid sending conversational outreach here.' },
    {
      name: 'Blacklist Check',
      description: 'Evaluates domain and server IPs across major DNSBL feeds with reputation scores.',
    },
  ],

  useCasesTitle: 'Where teams use the email verification API',
  useCasesIntro: 'Our endpoints connect directly to data pipelines, CRM workflows, and databases.',
  useCases: [
    {
      title: 'CRM and data warehouse sync',
      body: 'Verify contact data continuously before syncing to Salesforce, HubSpot, or Snowflake. Clean stale records on schedule and keep contact data accurate.',
    },
    {
      title: 'Campaign list cleaning',
      body: 'Scrub email lists prior to major outreach blasts. You can also upload lists directly through our [email list cleaning](/email-list-cleaning) interface for quick manual workflows.',
    },
    {
      title: 'Lead enrichment pipelines',
      body: 'Trigger automated mailbox checks whenever inbound SDR or outbound enrichment tools find new corporate emails, so reps only contact verified addresses.',
    },
    {
      title: 'Workflow automation',
      body: 'Connect our verification endpoints directly to Zapier, n8n, Make, and webhook workflows via our [integrations](/integrations) hub.',
    },
    {
      title: 'AI agents via MCP',
      body: 'Enable Claude, ChatGPT, Cursor, and custom AI agents to verify contacts natively during conversations using our [MCP server](/mcp).',
    },
    {
      title: 'Signup form validation',
      body: 'Looking to check addresses as users type them on signup and lead capture forms? Explore our dedicated [email validation API](/email-validation-api) built for real-time form checks.',
    },
  ],

  codeTitle: 'Code examples',
  codeIntro: 'Server-side snippets for single and bulk checks. Keep your API key in environment variables.',
  nodeLabel: 'Single verification: Node.js (fetch)',
  pythonLabel: 'Single verification: Python (requests)',
  serverSideOnly: 'server-side only',
  bulkTitle: 'Bulk workflow: submit, poll, and fetch results',
  bulkIntro: 'Submitting a batch job takes one call. Poll every 10 to 15 seconds until the job status reaches {0}.',

  pricingTitle: 'Email verification API pricing',
  pricingIntro:
    'Simple pay-as-you-go pricing with no monthly lock-in. One credit verifies one address. On single API checks, catch-all resolution is included in the same 1 credit. For bulk batch jobs, standard verification runs at 1 credit per address, and running deep verification on catch-all rows costs 1 credit per catch-all address checked. Credits never expire, and unknown results are refunded automatically.',
  pricingNote: 'Need higher enterprise volume? See our full [pricing tiers](/pricing).',

  limitsTitle: 'Rate limits and errors',
  limitsIntro:
    'Standard rate limits apply per API key. Rate limit status is returned on all requests via standard headers:{0} and{1}.',
  limitsCardTitle: 'Rate limits per 15-minute window',
  limitLabels: ['Single checks (/v1/verify)', 'Batch job creation', 'Catch-all job creation', 'Job polling & results'],
  limitUnit: '{n} requests / 15 min',
  errorsCardTitle: 'HTTP status error codes',
  errors: [
    'Invalid syntax or malformed JSON body.',
    'Missing, expired, or invalid API key.',
    'Insufficient account credit balance.',
    'Requested job ID does not exist.',
    'Idempotency key payload collision.',
    'Batch job results expired after 48 hours.',
    'Rate limit threshold exceeded.',
  ],
  errorsNote:
    'Detailed error response envelopes and payload descriptions are available in the [API errors documentation](/public/docs).',

  reviewsTitle: 'What customers say',
  reviewsIntro: 'Real feedback from engineering, sales and growth teams using Giggal.ai.',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'Verified G2 Reviewer',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'SourceForge Reviewer',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Product Hunt Reviewer',
    },
  ],

  faqTitle: 'Email verification API FAQ',
  faqIntro: 'Common technical questions about authentication, mailbox checks, and catch-all handling.',
  faqs: [
    {
      q: 'Is there a free email verification API?',
      a: 'Yes. Every new account receives 1,000 free credits immediately upon registration, with no credit card required. You can generate an API key in your developer dashboard and start sending verification requests right away. The free credits never expire and grant full access to every endpoint, including full mailbox checks and deep catch-all resolution.',
    },
    {
      q: 'How does the API check an address without sending an email?',
      a: 'The API checks whether the mailbox exists. It performs DNS and MX lookups, connects to the destination mail server, and checks whether the specific mailbox exists and can receive mail. The connection is closed cleanly before any message is transmitted, so your recipient never receives an email.',
    },
    {
      q: 'How are catch-all addresses handled?',
      a: 'On catch-all domains, a standard mail server reports that every address is acceptable, which causes ordinary tools to return "risky" or "unknown". Giggal checks whether the mailbox exists and returns a valid or invalid result with a catch_all_score from 0 to 100, saving you from discarding real leads.',
    },
    {
      q: 'What does "unknown" mean, and am I charged for it?',
      a: 'An "unknown" status occurs when the destination mail server fails to provide an unambiguous answer within our timeout threshold, typically due to aggressive greylisting or temporary server outages. You are never billed for inconclusive answers: credits used for any verification that returns an unknown status are refunded back to your account balance automatically.',
    },
    {
      q: 'How many emails can I verify per request?',
      a: 'Single verification requests check one email synchronously per call with a direct JSON response. For list verification, our bulk API endpoint accepts up to 50,000 email addresses per batch job asynchronously. You can track progress through job polling and retrieve paginated results when processing completes.',
    },
    {
      q: 'Can I verify emails from Claude, ChatGPT or Cursor?',
      a: 'Yes. Giggal.ai hosts an official remote MCP (Model Context Protocol) server at https://mcp.giggal.ai/mcp. Claude and ChatGPT connect to the hosted server via OAuth with no API key required. For local developer workflows in Cursor, VS Code, and other clients, you can configure the local giggal-mcp server with your API key to verify addresses directly from your editor.',
    },
    {
      q: "What's the difference between an email verification API and an email validation API?",
      a: 'An email verification API evaluates whether an actual mailbox exists by communicating directly with destination mail servers, checking DNS records, and resolving catch-all addresses across sales lists and customer databases. An email validation API focuses primarily on real-time front-end checks at signup forms to verify format, identify disposable domains, and block fake accounts on submission. If you need form protection, explore our email validation API.',
    },
    {
      q: 'What should I look for in an email verification API?',
      a: 'Look for three critical factors: genuine catch-all resolution so you do not lose up to 30% of your B2B contacts to "risky" buckets, transparent billing policies that automatically refund unknown results, and clear pricing per verification with zero hidden recurring fees or monthly minimums.',
    },
  ],

  ctaHeadline: 'Start verifying emails in minutes',
  ctaSupporting: '1,000 free credits, no card needed. Credits never expire.',
  ctaButton: 'Get a free API key',
}

// Korean. Formal polite style (합니다체); terms from SEO-Plan/i18n-batch4-ko-terminology.md.
// Review quotes stay in the customers' original English.
const ko: VerificationApiStrings = {
  metaTitle: '이메일 검증 API: 캐치올 주소까지 판별 | Giggal.ai',
  ogTitle: '이메일 검증 API: 캐치올 주소까지 판별',
  description:
    '메일함이 실제로 있는지 실시간으로 검사하는 이메일 검증 API입니다. 캐치올 판별 결과도 같은 JSON 응답에 들어 있습니다. 대량 작업은 최대 50,000개. 무료 크레딧 1,000개.',
  ogLocale: 'ko_KR',
  ogAlt: 'Giggal.ai 이메일 검증 API',
  crumb: '이메일 검증 API',
  appName: 'Giggal.ai 이메일 검증 API',

  h1Lead: '캐치올(catch-all) 주소까지 판별하는',
  h1Highlight: '이메일 검증 API',
  heroIntro:
    'REST 호출 한 번으로 메일함이 있는지 검사합니다. 캐치올 도메인에서는 대부분의 API가 “accept-all(모든 주소 수신)”이나 “위험”에서 멈추지만, 이 API는 같은 응답에 유효 또는 무효 결과를 드립니다. 이 이메일 검증 API는 개발팀에 깔끔한 JSON 데이터를 제공해, 아웃리치 파이프라인 전반에서 발신자 평판을 지키도록 돕습니다.',
  quickTestLabel: '빠른 테스트',
  heroCta: '무료 API 키 받기',
  heroDocsCta: 'API 레퍼런스 읽기',
  heroNote: '무료 크레딧 1,000개, 신용카드 불필요. 크레딧 유효기간 없음.',

  ratings: {
    reviews: (count) => `리뷰 ${count}개`,
    ratedAria: (rating, platform) => `Giggal.ai의 ${platform} 평점은 5점 만점에 ${rating}점입니다`,
  },
  awards: {
    headingLead: 'Giggal.ai는 SourceForge와 Slashdot에서',
    headingRest: 'Leader로 평가받았습니다',
    showLabel: '{badge} 보기',
  },

  returnsTitle: 'API 호출 한 번으로 받는 결과',
  returnsIntro:
    '호출 한 번으로 전체 도달률 데이터를 받습니다. 최상위 전송 상태, 위험 평가, 숫자로 된 도달률 점수, 메일함 속성, 캐치올 결과가 함께 들어 있습니다.',
  jsonLabel: 'JSON 응답',
  statusTitle: '응답 상태 값을 처리하는 방법',
  statusIntro:
    '기본 전송 상태는 {0} 필드로 반환됩니다. 백엔드 애플리케이션에서 각 enum 값을 다음과 같이 해석하고 처리하십시오.',
  thStatus: '상태',
  thMeaning: '의미',
  thAction: '권장 조치',
  statusRows: [
    {
      meaning: '수신 메일 서버가 수신자를 받아들였습니다. 메일함이 활성 상태입니다.',
      action: '발송해도 안전합니다. 주요 아웃리치 캠페인에 포함하십시오.',
    },
    {
      meaning: '메일함이 없거나, 형식이 잘못되었거나, 도메인에 MX 레코드가 없거나, 일회용 도메인입니다.',
      action: '발송하지 마십시오. 하드 바운스를 피하려면 캠페인에서 지우십시오.',
    },
    {
      meaning: '서버 응답이 분명하지 않습니다. 보통 그레이리스팅이나 연결 시간 초과 때문입니다.',
      action: '나중에 다시 검사하십시오. 알 수 없음 결과에 사용한 크레딧은 자동으로 환불됩니다.',
    },
  ],

  catchAllTitle: '캐치올 주소도 같은 호출에서 판별',
  catchAllParas: [
    '일반 검사는 캐치올 도메인에서 실패합니다. 회사 메일 서버가 들어오는 모든 주소를 받으면, 일반 도구는 실제 메일함과 오타 주소에서 똑같이 긍정 응답을 받습니다. 더 검증할 수 없으므로, 대부분의 도구는 주소에 “위험” 또는 “accept-all” 표시를 붙이고 판단을 고객님께 넘깁니다.',
    '일반적인 B2B 리스트의 약 30%는 캐치올 도메인이거나 Proofpoint, Mimecast 같은 보안 이메일 게이트웨이(SEG) 뒤에 있는 도메인입니다. 이 주소들을 지우면 실제 구매자를 버리게 되고, 검증하지 않고 보내면 반송이 급증합니다.',
    '이 검증 엔진은 같은 호출 안에서 캐치올 심층 판별을 실행합니다. 메일함이 있는지 검사해 {0}(“valid” 또는 “invalid”)와 0~100 사이의 {1}를 반환합니다. 자세한 내용은 [캐치올 검증](/catch-all-verification) 가이드와 [보안 이메일 게이트웨이](/seg-email-verification) 뒤의 메일함 검사 가이드를 참고하십시오.',
  ],
  oldApiLabel: '기존 검증 API',
  oldApiSub: 'accept-all 도메인에서 멈춤',
  oldApiNote: '불확실한 판단이 팀에 넘어옵니다. 보내고 높은 반송률을 감수하거나, 실제 구매 후보를 버려야 합니다.',
  ourApiLabel: 'Giggal.ai API',
  ourApiSub: '캐치올을 같은 호출에서 판별',
  ourApiNote: '활성 메일함이 확인됩니다. 실제 캐치올 리드를 남기고 발신자 평판을 지킬 수 있습니다.',

  endpointsTitle: '단일, 대량, 캐치올 검사용 엔드포인트',
  endpointsIntro:
    '연락처 하나를 검사하든 큰 리스트를 검증하든, 이 이메일 검증 API에는 성능과 안정성을 고려한 용도별 엔드포인트가 있습니다.',
  endpoints: [
    {
      badge: '크레딧 1개',
      title: '단일 이메일 검증',
      body: '이메일 주소 하나를 동기 방식으로 검증합니다. 주소가 있는지 검사하고, 도메인 진단을 실행하고, 캐치올 주소를 같은 호출에서 판별합니다. 전체 JSON 결과를 반환합니다.',
      link: '엔드포인트 문서 보기',
    },
    {
      badge: '최대 50,000개',
      title: '대량 이메일 검증',
      body: '작업 1개에 주소 최대 50,000개를 비동기 방식으로 처리합니다. 중복 주소와 잘못된 형식은 서버에서 제거합니다. 이중 과금을 막는 {0} 헤더를 지원합니다.',
      link: '배치 문서 보기',
    },
    {
      badge: '페이지 단위',
      title: '작업 폴링과 결과',
      body: '{0} 엔드포인트로 10~15초마다 작업 진행 상황을 확인합니다. 결과는 페이지당 최대 500건씩 가져옵니다. 결과는 48시간 동안 안전하게 보관됩니다.',
      link: '폴링 문서 보기',
    },
    {
      badge: '주소 1개당 크레딧 1개',
      title: '대량 캐치올 판별',
      body: '완료된 대량 작업에서 캐치올로 표시된 주소에 캐치올 심층 판별을 실행합니다. 점수 열과 상태 열이 있는 CSV 파일로 결과를 다운로드합니다.',
      link: '캐치올 문서 보기',
    },
  ],

  flagsTitle: '모든 응답에 들어 있는 플래그',
  flagsIntro:
    '유효 또는 무효 외에도 모든 응답에는 자세한 메일함 속성이 들어 있습니다. 리드를 분류하고, 악용을 막고, 자동 필터 규칙을 적용할 때 사용합니다.',
  thFlag: '플래그',
  thFieldPath: '필드 경로',
  thDescription: '설명과 사용법',
  flags: [
    { name: '일회용', description: '임시 일회용 메일함을 찾아냅니다. 체험판 악용을 막으려면 바로 차단하십시오.' },
    {
      name: '역할 계정',
      description: '부서 공용 메일함(info@, billing@, support@)을 찾아냅니다. CRM 팀에 배정하십시오.',
    },
    {
      name: '무료 이메일',
      description: '개인용 웹메일 도메인(gmail.com, yahoo.com)을 표시해 개인 메일함과 회사 잠재 고객을 구분합니다.',
    },
    { name: '캐치올', description: '호스트가 모든 메일을 받는지 표시합니다. {0}와 함께 사용하면 유효한 리드를 살릴 수 있습니다.' },
    {
      name: '플러스 태그',
      description: '하위 주소 별칭(user+tag@)을 사용하는 주소를 찾아냅니다. 여러 계정을 만드는 악용을 막습니다.',
    },
    { name: '메일함 가득 참', description: '저장 용량을 초과한 메일함입니다. 이 주소로 보낸 메일은 소프트 바운스됩니다.' },
    { name: '회신 불가(No-Reply)', description: '아무도 확인하지 않는 발송 전용 주소를 표시합니다. 대화형 아웃리치는 이 주소로 보내지 마십시오.' },
    {
      name: '블랙리스트 검사',
      description: '도메인과 서버 IP를 주요 DNSBL 목록에서 확인하고 평판 점수를 제공합니다.',
    },
  ],

  useCasesTitle: '이메일 검증 API 활용 사례',
  useCasesIntro: '엔드포인트는 데이터 파이프라인, CRM 워크플로, 데이터베이스에 바로 연결됩니다.',
  useCases: [
    {
      title: 'CRM과 데이터 웨어하우스 동기화',
      body: 'Salesforce, HubSpot, Snowflake에 동기화하기 전에 연락처 데이터를 계속 검증합니다. 오래된 기록을 정기적으로 정리해 연락처 데이터를 정확하게 유지합니다.',
    },
    {
      title: '캠페인 리스트 정리',
      body: '대규모 아웃리치 발송 전에 이메일 리스트를 정리합니다. 간단한 수작업이라면 [이메일 리스트 정리](/email-list-cleaning) 화면에서 리스트를 바로 업로드할 수도 있습니다.',
    },
    {
      title: '리드 보강 파이프라인',
      body: '인바운드 SDR 도구나 아웃바운드 보강 도구가 새 회사 이메일을 찾을 때마다 메일함 검사를 자동으로 실행합니다. 영업 담당자는 검증된 주소에만 연락합니다.',
    },
    {
      title: '워크플로 자동화',
      body: '[연동](/integrations) 페이지에서 검증 엔드포인트를 Zapier, n8n, Make, 웹훅 워크플로에 바로 연결합니다.',
    },
    {
      title: 'MCP를 통한 AI 에이전트',
      body: 'Claude, ChatGPT, Cursor와 직접 만든 AI 에이전트가 [MCP 서버](/mcp)를 통해 대화 중에 연락처를 바로 검증합니다.',
    },
    {
      title: '가입 폼 검증',
      body: '사용자가 가입 폼이나 리드 수집 폼에 입력하는 주소를 바로 검사하고 싶으십니까? 실시간 폼 검사용으로 만든 [이메일 유효성 검사 API](/email-validation-api)를 확인해 보십시오.',
    },
  ],

  codeTitle: '코드 예제',
  codeIntro: '단일 검사와 대량 검사용 서버 측 코드입니다. API 키는 환경 변수에 보관하십시오.',
  nodeLabel: '단일 검증: Node.js (fetch)',
  pythonLabel: '단일 검증: Python (requests)',
  serverSideOnly: '서버 측 전용',
  bulkTitle: '대량 워크플로: 제출, 폴링, 결과 가져오기',
  bulkIntro: '배치 작업 제출은 호출 한 번이면 됩니다. 작업 상태가 {0}가 될 때까지 10~15초마다 폴링하십시오.',

  pricingTitle: '이메일 검증 API 요금',
  pricingIntro:
    '월 약정 없는 간단한 종량제 요금입니다. 크레딧 1개로 주소 1개를 검증합니다. 단일 API 검사에서는 캐치올 판별이 같은 크레딧 1개에 포함됩니다. 대량 배치 작업에서는 일반 검증이 주소 1개당 크레딧 1개이고, 캐치올 행에 심층 검증을 실행하면 검사한 캐치올 주소 1개당 크레딧 1개가 듭니다. 크레딧은 유효기간이 없고, 알 수 없음 결과는 자동으로 환불됩니다.',
  pricingNote: '더 많은 양이 필요하십니까? 전체 [요금 구간](/pricing)을 확인하십시오.',

  limitsTitle: '요청 한도와 오류',
  limitsIntro:
    'API 키마다 기본 요청 한도가 적용됩니다. 모든 요청의 한도 상태는 표준 헤더인{0}과{1}으로 반환됩니다.',
  limitsCardTitle: '15분 단위 요청 한도',
  limitLabels: ['단일 검사 (/v1/verify)', '배치 작업 생성', '캐치올 작업 생성', '작업 폴링과 결과'],
  limitUnit: '15분당 요청 {n}회',
  errorsCardTitle: 'HTTP 상태 오류 코드',
  errors: [
    '형식이 잘못되었거나 JSON 본문이 올바르지 않습니다.',
    'API 키가 없거나, 만료되었거나, 올바르지 않습니다.',
    '계정의 크레딧 잔액이 부족합니다.',
    '요청한 작업 ID가 없습니다.',
    '멱등성 키(idempotency key)의 페이로드가 충돌합니다.',
    '배치 작업 결과가 48시간이 지나 만료되었습니다.',
    '요청 한도를 초과했습니다.',
  ],
  errorsNote:
    '오류 응답 형식과 페이로드 설명은 [API 오류 문서](/public/docs)에서 자세히 확인할 수 있습니다.',

  reviewsTitle: '고객 후기',
  reviewsIntro: 'Giggal.ai를 사용하는 엔지니어링, 영업, 그로스 팀의 실제 후기입니다. 후기는 고객이 작성한 원문(영어) 그대로 싣습니다.',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'G2 인증 리뷰어',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'SourceForge 리뷰어',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Product Hunt 리뷰어',
    },
  ],

  faqTitle: '이메일 검증 API FAQ',
  faqIntro: '인증, 메일함 검사, 캐치올 처리에 관해 자주 묻는 기술 질문입니다.',
  faqs: [
    {
      q: '무료 이메일 검증 API가 있습니까?',
      a: '네. 새 계정은 가입 즉시 무료 크레딧 1,000개를 받으며, 신용카드는 필요 없습니다. 개발자 대시보드에서 API 키를 만들고 바로 검증 요청을 보낼 수 있습니다. 무료 크레딧은 유효기간이 없고, 전체 메일함 검사와 캐치올 심층 판별을 포함한 모든 엔드포인트를 사용할 수 있습니다.',
    },
    {
      q: 'API는 이메일을 보내지 않고 어떻게 주소를 검사합니까?',
      a: 'API는 메일함이 있는지 검사합니다. DNS와 MX 조회를 실행하고, 수신 메일 서버에 연결해 해당 메일함이 있고 메일을 받을 수 있는지 확인합니다. 메시지를 전송하기 전에 연결을 정상적으로 닫으므로, 수신자는 이메일을 받지 않습니다.',
    },
    {
      q: '캐치올 주소는 어떻게 처리됩니까?',
      a: '캐치올 도메인에서는 메일 서버가 모든 주소를 받을 수 있다고 응답합니다. 그래서 일반 도구는 “위험” 또는 “알 수 없음”을 반환합니다. Giggal은 메일함이 있는지 검사하고, 0~100 사이의 catch_all_score와 함께 유효 또는 무효 결과를 반환합니다. 실제 리드를 버리지 않아도 됩니다.',
    },
    {
      q: '“알 수 없음”은 무슨 뜻이며, 비용이 청구됩니까?',
      a: '“알 수 없음” 상태는 수신 메일 서버가 제한 시간 안에 분명한 답을 주지 않을 때 나옵니다. 보통 강한 그레이리스팅이나 일시적인 서버 장애 때문입니다. 결론이 나지 않은 결과에는 비용이 청구되지 않습니다. 알 수 없음 상태로 끝난 검증에 사용한 크레딧은 계정 잔액으로 자동 환불됩니다.',
    },
    {
      q: '요청 한 번에 이메일을 몇 개까지 검증할 수 있습니까?',
      a: '단일 검증 요청은 호출 한 번에 이메일 1개를 동기 방식으로 검사하고 JSON 응답을 바로 반환합니다. 리스트 검증에는 대량 API 엔드포인트를 사용하며, 배치 작업 1개에 이메일 주소 최대 50,000개를 비동기 방식으로 처리합니다. 작업 폴링으로 진행 상황을 확인하고, 처리가 끝나면 페이지 단위로 결과를 가져옵니다.',
    },
    {
      q: 'Claude, ChatGPT, Cursor에서 이메일을 검증할 수 있습니까?',
      a: '네. Giggal.ai는 공식 원격 MCP(Model Context Protocol) 서버(https://mcp.giggal.ai/mcp)를 운영합니다. Claude와 ChatGPT는 OAuth로 이 서버에 연결하며, API 키가 필요 없습니다. Cursor, VS Code 같은 클라이언트의 로컬 개발 환경에서는 API 키로 로컬 giggal-mcp 서버를 설정해 편집기에서 바로 주소를 검증할 수 있습니다.',
    },
    {
      q: '이메일 검증 API와 이메일 유효성 검사 API는 무엇이 다릅니까?',
      a: '이메일 검증 API는 수신 메일 서버와 직접 통신하고, DNS 레코드를 확인하고, 캐치올 주소를 판별해 실제 메일함이 있는지 평가합니다. 영업 리스트와 고객 데이터베이스에 사용합니다. 이메일 유효성 검사 API는 주로 가입 폼의 실시간 검사에 사용합니다. 제출 시점에 형식을 확인하고, 일회용 도메인을 찾아내고, 가짜 계정을 막습니다. 폼 보호가 필요하다면 이메일 유효성 검사 API를 확인해 보십시오.',
    },
    {
      q: '이메일 검증 API를 고를 때 무엇을 확인해야 합니까?',
      a: '세 가지를 확인하십시오. 첫째, 실제 캐치올 판별입니다. 그래야 B2B 연락처의 최대 30%를 “위험” 분류로 잃지 않습니다. 둘째, 알 수 없음 결과를 자동으로 환불하는 투명한 과금 정책입니다. 셋째, 숨은 정기 요금이나 월 최소 금액이 없는 명확한 검증당 요금입니다.',
    },
  ],

  ctaHeadline: '몇 분 안에 이메일 검증을 시작하십시오',
}

const tr: VerificationApiStrings = {
  metaTitle: "Email doğrulama API'si: catch-all adresler dahil | Giggal.ai",
  ogTitle: "Email doğrulama API'si: catch-all adresler dahil",
  description: "Her posta kutusunun var olup olmadığını kontrol eden gerçek zamanlı email doğrulama API'si. Catch-all sonucu aynı JSON yanıtında. 1.000 ücretsiz kredi.",
  ogLocale: 'tr_TR',
  ogAlt: "Giggal.ai email doğrulama API'si",
  crumb: "Email doğrulama API'si",
  appName: "Giggal.ai email doğrulama API'si",
  h1Lead: 'Catch-all adresleri de doğrulayan',
  h1Highlight: "email doğrulama API'si",
  heroIntro: 'Herhangi bir posta kutusunun var olup olmadığını tek bir REST çağrısıyla kontrol edin. Çoğu API\'nin "accept-all" (her adresi kabul eden) veya "riskli" sonucunda durduğu catch-all alan adlarında, aynı yanıtta geçerli ya da geçersiz bir sonuç alırsınız. Email doğrulama API\'miz mühendislik ekiplerine temiz JSON verisi verir. Bu veri, gönderim hatlarınızda gönderen itibarını korumanıza yardım eder.',
  quickTestLabel: 'Hızlı test',
  heroCta: 'Ücretsiz API anahtarı alın',
  heroDocsCta: 'API referansını okuyun',
  heroNote: '1.000 ücretsiz kredi, kredi kartı gerekmez. Kredilerin süresi dolmaz.',
  ratings: {
    reviews: (count) => `${count} değerlendirme`,
    ratedAria: (rating, platform) => `Giggal.ai, ${platform} üzerinde 5 üzerinden ${rating.replace('.', ',')} puan aldı`,
    decimalComma: true,
  },
  awards: {
    headingLead: "Giggal.ai, SourceForge ve Slashdot'ta",
    headingRest: 'Leader olarak değerlendirildi',
    showLabel: '{badge} rozetini gösterin',
  },
  returnsTitle: 'Tek bir API çağrısı ne döndürür',
  returnsIntro: 'Tek bir çağrı, teslim edilebilirlik verilerinin tamamını döndürür. Üst düzey teslim edilebilirlik durumunu, risk değerlendirmesini, sayısal teslim edilebilirlik puanını, posta kutusu özelliklerini ve catch-all sonuçlarını aynı yanıtta alırsınız.',
  jsonLabel: 'JSON yanıtı',
  statusTitle: 'Yanıttaki durum değerleri nasıl işlenir',
  statusIntro: 'Ana teslim durumu {0} alanında döner. Arka uç uygulamanızın her enum değerini nasıl yorumlaması ve yönlendirmesi gerektiği aşağıdadır:',
  thStatus: 'Durum',
  thMeaning: 'Anlamı',
  thAction: 'Önerilen işlem',
  statusRows: [
    {
      meaning: 'Hedef e-posta sunucusu alıcıyı kabul etti. Posta kutusu etkin.',
      action: 'Gönderim güvenlidir. Ana kampanyalarınıza ekleyin.',
    },
    {
      meaning: 'Posta kutusu yok, söz dizimi geçersiz, alan adının MX kaydı yok veya alan adı geçici bir e-posta servisine ait.',
      action: "Göndermeyin. Hard bounce'u önlemek için kampanyalardan çıkarın.",
    },
    {
      meaning: 'Sunucunun yanıtı kesin değil. Bunun nedeni genellikle greylisting veya bağlantı zaman aşımıdır.',
      action: 'Kontrolü daha sonra tekrarlayın. Bilinmiyor sonuçları için kullanılan krediler otomatik olarak iade edilir.',
    },
  ],
  catchAllTitle: 'Catch-all adresler aynı çağrıda sonuçlandırılır',
  catchAllParas: [
    'Standart kontroller catch-all alan adlarında sonuç vermez. Bir şirketin e-posta sunucusu gelen her adresi kabul ettiğinde, standart araçlar gerçek posta kutuları için de yazım hatalı sahte adresler için de olumlu yanıt görür. Daha fazla doğrulama yapamayan çoğu araç adresi "riskli" veya "accept-all" olarak etiketler ve kararı size bırakır.',
    "Tipik bir B2B listesinin yaklaşık %30'u catch-all alan adlarında veya Proofpoint ve Mimecast gibi güvenli e-posta ağ geçitlerinin (SEG) arkasındaki alan adlarında bulunur. Bu adresleri silmek gerçek müşteri adaylarını kaybettirir. Doğrulamadan göndermek ise bounce sayısını birden artırır.",
    'Doğrulama motorumuz derin catch-all kontrolünü aynı çağrı içinde yapar. Posta kutusunun var olup olmadığını kontrol eder, bir {0} ("valid" veya "invalid") ve 0 ila 100 arasında bir {1} döndürür. Ayrıntılar için [catch-all doğrulama](/catch-all-verification) ve [güvenli e-posta ağ geçitlerinin](/seg-email-verification) arkasındaki posta kutularını kontrol etme rehberlerimize bakın.',
  ],
  oldApiLabel: "Geleneksel doğrulama API'si",
  oldApiSub: 'Accept-all alan adlarında sonuç vermez',
  oldApiNote: 'Belirsizlik ekibinize kalır. Ya gönderip yüksek bounce riskini alırsınız ya da geçerli müşteri adaylarını silersiniz.',
  ourApiLabel: "Giggal.ai API'si",
  ourApiSub: 'Catch-all adresleri aynı çağrıda sonuçlandırır',
  ourApiNote: 'Posta kutusunun etkin olduğu doğrulanır. Catch-all alan adlarındaki gerçek kişileri tutar ve gönderen itibarınızı korursunuz.',
  endpointsTitle: 'Tekli, toplu ve catch-all kontrolleri için uç noktalar',
  endpointsIntro: "Tek bir kişiyi de büyük listeleri de doğrulayabilirsiniz. Email doğrulama API'miz her iş için hız ve güvenilirlik gözetilerek tasarlanmış ayrı bir uç nokta sunar.",
  endpoints: [
    {
      badge: '1 kredi',
      title: 'Tekli e-posta doğrulama',
      body: 'Tek bir e-posta adresi için eşzamanlı doğrulama. Adresin var olup olmadığını kontrol eder, alan adı kontrollerini çalıştırır ve catch-all adresleri aynı çağrıda sonuçlandırır. Eksiksiz bir JSON sonucu döndürür.',
      link: 'Uç nokta belgelerini görün',
    },
    {
      badge: '50.000 adrese kadar',
      title: 'Toplu e-posta doğrulama',
      body: 'İş başına 50.000 adrese kadar eşzamansız işlem. Yinelenen adresleri ve söz dizimi geçersiz adresleri sunucu tarafında ayıklar. Çift ücretlendirmeyi önlemek için {0} başlığını destekler.',
      link: 'Toplu iş belgelerini görün',
    },
    {
      badge: 'Sayfalı',
      title: 'İş durumu sorgulama ve sonuçlar',
      body: 'İşin ilerlemesini her 10 ila 15 saniyede bir {0} ile sorgulayın. Sonuçları sayfa başına en fazla 500 kayıtla alın. Sonuçlar 48 saat boyunca güvenli şekilde saklanır.',
      link: 'Sorgulama belgelerini görün',
    },
    {
      badge: 'Adres başına 1 kredi',
      title: 'Toplu catch-all kontrolü',
      body: 'Tamamlanmış bir toplu işte catch-all olarak işaretlenen adreslerde derin catch-all kontrolü çalıştırın. Sonuçları puan ve durum sütunları olan temiz bir CSV dosyası olarak indirin.',
      link: 'Catch-all belgelerini görün',
    },
  ],
  flagsTitle: 'Her yanıttaki işaretler',
  flagsIntro: 'Her yanıt, geçerli ya da geçersiz sonucunun yanında ayrıntılı posta kutusu özellikleri de içerir. Bunlarla kişileri gruplara ayırabilir, kötüye kullanımı önleyebilir ve otomatik filtre kuralları uygulayabilirsiniz.',
  thFlag: 'İşaret',
  thFieldPath: 'Alan yolu',
  thDescription: 'Açıklama ve kullanım',
  flags: [
    {
      name: 'Geçici',
      description: 'Geçici, tek kullanımlık gelen kutularını belirler. Deneme sürümü suistimalini durdurmak için hemen engelleyin.',
    },
    {
      name: 'Rol hesabı',
      description: 'Genel departman posta kutularını (info@, billing@, support@) tespit eder. Bu adresleri CRM ekiplerine yönlendirin.',
    },
    {
      name: 'Ücretsiz e-posta',
      description: 'Kişisel gelen kutularını kurumsal adaylardan ayırmak için bireysel webmail alan adlarını (gmail.com, yahoo.com) işaretler.',
    },
    {
      name: 'Catch-all',
      description: 'Sunucunun tüm e-postaları kabul edip etmediğini gösterir. Geçerli kişileri geri kazanmak için {0} ile birlikte kullanın.',
    },
    {
      name: 'Artı etiketi',
      description: 'Artı işaretli alt adresleme (user+tag@) kullanan adresleri tespit eder. Birden fazla hesap açma suistimalini önleyin.',
    },
    {
      name: 'Posta kutusu dolu',
      description: 'Depolama kotasının aşıldığını gösterir. Bu adrese gönderilen e-posta soft bounce olur.',
    },
    {
      name: 'No-reply',
      description: 'İzlenmeyen toplu gönderim adreslerini işaretler. Yanıt bekleyen e-postaları bu adreslere göndermeyin.',
    },
    {
      name: 'Kara liste kontrolü',
      description: "Alan adını ve sunucu IP'lerini büyük DNSBL listelerinde itibar puanlarıyla değerlendirir.",
    },
  ],
  useCasesTitle: "Ekipler email doğrulama API'sini nerede kullanır",
  useCasesIntro: 'Uç noktalarımız doğrudan veri hatlarına, CRM iş akışlarına ve veritabanlarına bağlanır.',
  useCases: [
    {
      title: 'CRM ve veri ambarı senkronizasyonu',
      body: 'Kişi verilerini Salesforce, HubSpot veya Snowflake ile senkronize etmeden önce sürekli doğrulayın. Eski kayıtları düzenli aralıklarla temizleyin ve kişi verilerini doğru tutun.',
    },
    {
      title: 'Kampanya listesi temizleme',
      body: 'Büyük gönderimlerden önce e-posta listelerini temizleyin. Hızlı ve elle yapılan işler için listeleri doğrudan [mail listesi temizleme](/email-list-cleaning) arayüzümüze de yükleyebilirsiniz.',
    },
    {
      title: 'Veri zenginleştirme hatları',
      body: 'Inbound SDR araçları veya outbound veri zenginleştirme araçları yeni kurumsal e-posta adresleri bulduğunda otomatik posta kutusu kontrolleri başlatın. Böylece satış temsilcileri yalnızca doğrulanmış adreslerle iletişim kurar.',
    },
    {
      title: 'İş akışı otomasyonu',
      body: 'Doğrulama uç noktalarımızı [entegrasyonlar](/integrations) sayfamız üzerinden doğrudan Zapier, n8n, Make ve webhook iş akışlarına bağlayın.',
    },
    {
      title: 'MCP ile yapay zekâ ajanları',
      body: 'Claude, ChatGPT, Cursor ve özel yapay zekâ ajanlarının [MCP sunucumuz](/mcp) ile sohbet sırasında kişileri doğrulamasını sağlayın.',
    },
    {
      title: 'Kayıt formu doğrulama',
      body: "Kullanıcılar kayıt ve potansiyel müşteri formlarına adres yazarken kontrol etmek mi istiyorsunuz? Gerçek zamanlı form kontrolleri için hazırlanan [email validasyon API'mize](/email-validation-api) göz atın.",
    },
  ],
  codeTitle: 'Kod örnekleri',
  codeIntro: 'Tekli ve toplu kontroller için sunucu tarafı kod parçaları. API anahtarınızı ortam değişkenlerinde saklayın.',
  nodeLabel: 'Tekli doğrulama: Node.js (fetch)',
  pythonLabel: 'Tekli doğrulama: Python (requests)',
  serverSideOnly: 'yalnızca sunucu tarafı',
  bulkTitle: 'Toplu iş akışı: gönderin, sorgulayın ve sonuçları alın',
  bulkIntro: 'Toplu bir iş göndermek tek bir çağrı gerektirir. İş durumu {0} olana kadar her 10 ila 15 saniyede bir sorgulayın.',
  pricingTitle: "Email doğrulama API'si fiyatları",
  pricingIntro: 'Aylık bağlayıcılık olmadan, kullandıkça ödeme. Bir kredi bir adresi doğrular. Tekli API kontrollerinde catch-all kontrolü aynı 1 krediye dahildir. Toplu işlerde standart doğrulama adres başına 1 kredidir. Catch-all satırlarında derin doğrulama çalıştırmak, kontrol edilen her catch-all adres için 1 kredidir. Kredilerin süresi dolmaz ve bilinmiyor sonuçlarının kredileri otomatik olarak iade edilir.',
  pricingNote: 'Daha yüksek kurumsal hacim mi gerekiyor? Tüm [fiyat seviyelerini](/pricing) görün.',
  limitsTitle: 'Hız sınırları ve hatalar',
  limitsIntro: 'Her API anahtarı için standart hız sınırları geçerlidir. Hız sınırı durumu tüm isteklerde standart başlıklarla döner:{0} ve{1}.',
  limitsCardTitle: '15 dakikalık süre başına hız sınırları',
  limitLabels: [
    'Tekli kontroller (/v1/verify)',
    'Toplu iş oluşturma',
    'Catch-all işi oluşturma',
    'İş sorgulama ve sonuçlar',
  ],
  limitUnit: '15 dakikada {n} istek',
  errorsCardTitle: 'HTTP durum hata kodları',
  errors: [
    'Geçersiz söz dizimi veya bozuk JSON gövdesi.',
    'API anahtarı eksik, süresi dolmuş veya geçersiz.',
    'Hesapta yeterli kredi yok.',
    'İstenen iş kimliği yok.',
    'Idempotency anahtarı çakışması.',
    'Toplu iş sonuçlarının 48 saatlik saklama süresi doldu.',
    'Hız sınırı aşıldı.',
  ],
  errorsNote: 'Ayrıntılı hata yanıtları ve açıklamaları [API hata belgelerinde](/public/docs) bulunur.',
  reviewsTitle: 'Müşteriler ne diyor',
  reviewsIntro: 'Giggal.ai kullanan mühendislik, satış ve büyüme ekiplerinden gerçek geri bildirimler.',
  reviews: [
    {
      quote: "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'Doğrulanmış G2 yorumcusu',
    },
    {
      quote: 'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'SourceForge yorumcusu',
    },
    {
      quote: 'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Product Hunt yorumcusu',
    },
  ],
  faqTitle: "Email doğrulama API'si hakkında sık sorulan sorular",
  faqIntro: 'Kimlik doğrulama, posta kutusu kontrolleri ve catch-all adreslerin işlenmesi hakkında sık sorulan teknik sorular.',
  faqs: [
    {
      q: "Ücretsiz bir email doğrulama API'si var mı?",
      a: 'Evet. Her yeni hesap kayıttan hemen sonra 1.000 ücretsiz kredi alır. Kredi kartı gerekmez. Geliştirici panelinizde bir API anahtarı oluşturabilir ve hemen doğrulama istekleri göndermeye başlayabilirsiniz. Ücretsiz kredilerin süresi dolmaz. Bu krediler, tam posta kutusu kontrolleri ve derin catch-all kontrolü dahil her uç noktaya tam erişim sağlar.',
    },
    {
      q: 'API, mail göndermeden bir adresi nasıl kontrol eder?',
      a: 'API, posta kutusunun var olup olmadığını kontrol eder. DNS ve MX sorguları yapar, hedef e-posta sunucusuna bağlanır ve ilgili posta kutusunun var olup olmadığını ve e-posta alıp alamayacağını kontrol eder. Bağlantı herhangi bir mesaj iletilmeden önce düzgün şekilde kapatılır. Bu yüzden alıcınıza hiçbir e-posta gitmez.',
    },
    {
      q: 'Catch-all adresler nasıl işlenir?',
      a: 'Catch-all alan adlarında standart bir e-posta sunucusu her adresin kabul edilebilir olduğunu bildirir. Bu yüzden sıradan araçlar "riskli" veya "bilinmiyor" sonucu döndürür. Giggal posta kutusunun var olup olmadığını kontrol eder ve 0 ila 100 arasında bir catch_all_score ile geçerli ya da geçersiz bir sonuç döndürür. Böylece gerçek kişileri silmek zorunda kalmazsınız.',
    },
    {
      q: '"Bilinmiyor" ne anlama gelir ve bunun için ücret alınır mı?',
      a: 'Bilinmiyor durumu, hedef e-posta sunucusu zaman aşımı süremiz içinde net bir yanıt vermediğinde oluşur. Bunun nedeni genellikle sıkı greylisting veya geçici sunucu kesintileridir. Kesin olmayan yanıtlar için hiçbir zaman ücret alınmaz. Bilinmiyor sonucu veren her doğrulamada kullanılan krediler otomatik olarak hesap bakiyenize iade edilir.',
    },
    {
      q: 'Bir istekte kaç mail doğrulayabilirim?',
      a: 'Tekli doğrulama istekleri her çağrıda bir e-postayı eşzamanlı olarak kontrol eder ve doğrudan bir JSON yanıtı döndürür. Liste doğrulama için toplu API uç noktamız, toplu iş başına en fazla 50.000 e-posta adresini eşzamansız olarak kabul eder. İlerlemeyi iş durumu sorgulamasıyla izleyebilir ve işlem bitince sonuçları sayfalar hâlinde alabilirsiniz.',
    },
    {
      q: 'Claude, ChatGPT veya Cursor içinden mail doğrulayabilir miyim?',
      a: 'Evet. Giggal.ai, https://mcp.giggal.ai/mcp adresinde resmi bir uzak MCP (Model Context Protocol) sunucusu barındırır. Claude ve ChatGPT bu sunucuya OAuth ile bağlanır ve API anahtarı gerekmez. Cursor, VS Code ve diğer istemcilerdeki yerel geliştirici iş akışları için yerel giggal-mcp sunucusunu API anahtarınızla yapılandırabilir ve adresleri doğrudan düzenleyicinizden doğrulayabilirsiniz.',
    },
    {
      q: "Email doğrulama API'si ile email validasyon API'si arasındaki fark nedir?",
      a: "Email doğrulama API'si, hedef e-posta sunucularıyla doğrudan iletişim kurarak, DNS kayıtlarını kontrol ederek ve catch-all adresleri sonuçlandırarak gerçek bir posta kutusunun var olup olmadığını değerlendirir. Satış listelerinde ve müşteri veritabanlarında kullanılır. Email validasyon API'si ise kayıt formlarındaki gerçek zamanlı kontrollere odaklanır. Biçimi doğrular, geçici alan adlarını belirler ve form gönderilirken sahte hesapları engeller. Form koruması gerekiyorsa email validasyon API'mize göz atın.",
    },
    {
      q: "Bir email doğrulama API'sinde nelere bakmalıyım?",
      a: 'Üç önemli noktaya bakın. Birincisi gerçek bir catch-all kontrolüdür. Böylece B2B kişilerinizin %30\'a varan kısmını "riskli" grubuna kaybetmezsiniz. İkincisi, bilinmiyor sonuçlarını otomatik olarak iade eden şeffaf bir faturalandırma politikasıdır. Üçüncüsü, gizli tekrarlayan ücret veya aylık minimum olmadan doğrulama başına açık bir fiyattır.',
    },
  ],
  ctaHeadline: 'Birkaç dakika içinde mail doğrulamaya başlayın',
}

const fr: VerificationApiStrings = {
  metaTitle: 'API de vérification d’email qui résout les catch-all | Giggal.ai',
  ogTitle: 'API de vérification d’email qui résout les catch-all',
  description:
    'API de vérification d’email en temps réel : elle contrôle chaque boîte mail et résout les catch-all dans une seule réponse JSON. 1 000 crédits gratuits.',
  ogLocale: 'fr_FR',
  ogAlt: 'API de vérification d’email Giggal.ai',
  crumb: 'API de vérification d’email',
  appName: 'Giggal.ai API de vérification d’email',

  h1Lead: 'Une API de vérification d’email qui',
  h1Highlight: 'résout aussi les adresses catch-all',
  heroIntro:
    'Vérifiez si une boîte mail existe avec un seul appel REST. Sur les domaines catch-all, la plupart des API s’arrêtent à « accept-all » ou « risqué ». Ici, vous obtenez un résultat valide ou invalide dans la même réponse. Notre API de vérification d’email donne aux équipes techniques des données JSON propres. Elles protègent ainsi leur réputation d’expéditeur dans leurs flux de prospection.',
  quickTestLabel: 'Test rapide',
  heroCta: 'Obtenir une clé API gratuite',
  heroDocsCta: 'Lire la référence de l’API',
  heroNote: '1 000 crédits gratuits, aucune carte requise. Les crédits n’expirent jamais.',

  ratings: {
    reviews: (count) => `${count} avis`,
    ratedAria: (rating, platform) => `Note de Giggal.ai sur ${platform} : ${rating.replace('.', ',')} sur 5`,
    decimalComma: true,
  },
  awards: {
    headingLead: 'Giggal.ai est classé',
    headingRest: 'Leader sur SourceForge et Slashdot',
    showLabel: 'Afficher {badge}',
  },

  returnsTitle: 'Ce que renvoie un appel à l’API',
  returnsIntro:
    'Un seul appel renvoie toutes les données de délivrabilité. Vous recevez le statut de délivrabilité principal, l’évaluation du risque, un score de délivrabilité chiffré, les attributs de la boîte mail et le résultat catch-all dans la même réponse.',
  jsonLabel: 'Réponse JSON',
  statusTitle: 'Comment traiter les valeurs de statut',
  statusIntro:
    'Le statut de délivrabilité principal est renvoyé dans le champ {0}. Voici comment votre application backend doit lire et traiter chaque valeur :',
  thStatus: 'Statut',
  thMeaning: 'Signification',
  thAction: 'Action recommandée',
  statusRows: [
    {
      meaning: 'Le serveur de messagerie de destination a accepté le destinataire. La boîte mail est active.',
      action: 'Envoi sans risque. À inclure dans vos campagnes principales.',
    },
    {
      meaning: 'La boîte mail n’existe pas, la syntaxe est invalide, le domaine n’a pas d’enregistrement MX ou le domaine est jetable.',
      action: 'Ne pas envoyer. Retirez l’adresse des campagnes pour éviter les hard bounces.',
    },
    {
      meaning: 'La réponse du serveur n’est pas concluante, en général à cause du greylisting ou d’un délai de connexion dépassé.',
      action: 'Relancez la vérification plus tard. Les crédits des réponses inconnues sont remboursés automatiquement.',
    },
  ],

  catchAllTitle: 'Adresses catch-all résolues dans le même appel',
  catchAllParas: [
    'Les contrôles standard échouent sur les domaines catch-all. Quand le serveur de messagerie d’une entreprise accepte toutes les adresses, les outils standard reçoivent une réponse positive pour les vraies boîtes mail comme pour les fautes de frappe. Faute de pouvoir aller plus loin, la plupart des outils marquent l’adresse comme « risquée » ou « accept-all » et vous laissent décider.',
    'Environ 30 % d’une liste B2B typique se trouve sur des domaines catch-all ou derrière des passerelles de messagerie sécurisées (SEG) comme Proofpoint et Mimecast. Supprimer ces adresses fait perdre de vrais acheteurs. Leur écrire sans vérification fait grimper les rebonds.',
    'Notre moteur de vérification résout les adresses catch-all en détail dans le même appel. Il vérifie si la boîte mail existe et renvoie un {0} (« valid » ou « invalid ») et un {1} de 0 à 100. Pour en savoir plus, lisez nos guides sur la [vérification catch-all](/catch-all-verification) et sur la vérification des boîtes mail derrière les [passerelles de messagerie sécurisées](/seg-email-verification).',
  ],
  oldApiLabel: 'API de vérification classique',
  oldApiSub: 'Abandonne sur les domaines accept-all',
  oldApiNote: 'Le doute revient à votre équipe. Vous envoyez et risquez beaucoup de rebonds, ou vous écartez de vrais acheteurs potentiels.',
  ourApiLabel: 'API Giggal.ai',
  ourApiSub: 'Résout les catch-all dans le même appel',
  ourApiNote: 'Boîte mail active confirmée. Vous gardez vos vrais contacts catch-all et protégez votre réputation d’expéditeur.',

  endpointsTitle: 'Endpoints pour les vérifications unitaires, en masse et catch-all',
  endpointsIntro:
    'Que vous vérifiiez un seul contact ou de grandes listes, notre API propose des endpoints dédiés, conçus pour la rapidité et la fiabilité.',
  endpoints: [
    {
      badge: '1 crédit',
      title: 'Vérification d’un email',
      body: 'Vérification synchrone d’une seule adresse mail. Elle contrôle si l’adresse existe, analyse le domaine et résout les adresses catch-all dans le même appel. Elle renvoie un résultat JSON complet.',
      link: 'Voir la documentation de l’endpoint',
    },
    {
      badge: 'Jusqu’à 50 000 emails',
      title: 'Vérification d’emails en masse',
      body: 'Traitement asynchrone de 50 000 adresses au maximum par tâche. Les doublons et les syntaxes invalides sont retirés côté serveur. L’en-tête {0} évite les doubles facturations.',
      link: 'Voir la documentation des tâches en masse',
    },
    {
      badge: 'Paginé',
      title: 'Suivi des tâches et résultats',
      body: 'Suivez l’avancement d’une tâche avec {0} toutes les 10 à 15 secondes. Récupérez les résultats paginés, jusqu’à 500 lignes par page. Les résultats sont conservés 48 heures.',
      link: 'Voir la documentation du suivi',
    },
    {
      badge: '1 crédit par adresse',
      title: 'Résolution catch-all en masse',
      body: 'Lancez la résolution catch-all approfondie sur les adresses marquées catch-all dans une tâche en masse terminée. Téléchargez les résultats dans un fichier CSV propre, avec des colonnes de score et de statut.',
      link: 'Voir la documentation catch-all',
    },
  ],

  flagsTitle: 'Les indicateurs de chaque réponse',
  flagsIntro:
    'Au-delà de valide ou invalide, chaque réponse contient les attributs détaillés de la boîte mail. Ils vous aident à segmenter vos contacts, à prévenir les abus et à appliquer des règles de filtrage automatiques.',
  thFlag: 'Indicateur',
  thFieldPath: 'Chemin du champ',
  thDescription: 'Description et usage',
  flags: [
    { name: 'Jetable', description: 'Repère les boîtes temporaires et jetables. Bloquez-les tout de suite pour stopper les abus d’essai gratuit.' },
    {
      name: 'Adresse générique',
      description: 'Détecte les boîtes génériques de service (info@, billing@, support@). Dirigez-les vers les équipes CRM.',
    },
    {
      name: 'Messagerie gratuite',
      description: 'Signale les domaines de messagerie grand public (gmail.com, yahoo.com) pour séparer les boîtes personnelles des prospects d’entreprise.',
    },
    { name: 'Catch-all', description: 'Indique si le serveur accepte tout le courrier. Utilisez-le avec {0} pour récupérer les contacts valides.' },
    {
      name: 'Alias avec signe plus',
      description: 'Détecte les adresses avec sous-adressage (user+tag@). Empêche la création de comptes multiples.',
    },
    { name: 'Boîte pleine', description: 'Indique que le quota de stockage est dépassé. Un email envoyé à cette adresse provoquera un soft bounce.' },
    { name: 'No-reply', description: 'Signale les adresses d’envoi que personne ne lit. N’y envoyez pas de messages de prospection.' },
    {
      name: 'Contrôle de liste noire',
      description: 'Contrôle le domaine et les IP du serveur sur les principales listes DNSBL, avec des scores de réputation.',
    },
  ],

  useCasesTitle: 'Où les équipes utilisent l’API de vérification d’email',
  useCasesIntro: 'Nos endpoints se connectent directement aux flux de données, aux workflows CRM et aux bases de données.',
  useCases: [
    {
      title: 'Synchronisation CRM et entrepôt de données',
      body: 'Vérifiez les données de contact en continu avant de les synchroniser vers Salesforce, HubSpot ou Snowflake. Nettoyez les fiches obsolètes à intervalles réguliers et gardez des données de contact exactes.',
    },
    {
      title: 'Nettoyage de liste avant une campagne',
      body: 'Nettoyez vos listes email avant les grands envois de prospection. Vous pouvez aussi importer vos listes directement dans notre interface de [nettoyage de liste email](/email-list-cleaning) pour un traitement manuel rapide.',
    },
    {
      title: 'Flux d’enrichissement de leads',
      body: 'Lancez une vérification automatique de la boîte mail dès que vos SDR ou vos outils d’enrichissement trouvent de nouveaux emails d’entreprise. Vos commerciaux ne contactent ainsi que des adresses vérifiées.',
    },
    {
      title: 'Automatisation des workflows',
      body: 'Connectez nos endpoints de vérification à Zapier, n8n, Make et à vos workflows de webhooks via notre page [intégrations](/integrations).',
    },
    {
      title: 'Agents IA via MCP',
      body: 'Permettez à Claude, ChatGPT, Cursor et à vos agents IA de vérifier des contacts pendant les conversations grâce à notre [serveur MCP](/mcp).',
    },
    {
      title: 'Validation des formulaires d’inscription',
      body: 'Vous voulez contrôler les adresses au moment où les utilisateurs les saisissent dans vos formulaires d’inscription et de capture de leads ? Découvrez notre [API de validation d’email](/email-validation-api), conçue pour les contrôles de formulaire en temps réel.',
    },
  ],

  codeTitle: 'Exemples de code',
  codeIntro: 'Extraits côté serveur pour les vérifications unitaires et en masse. Gardez votre clé API dans des variables d’environnement.',
  nodeLabel: 'Vérification unitaire : Node.js (fetch)',
  pythonLabel: 'Vérification unitaire : Python (requests)',
  serverSideOnly: 'côté serveur uniquement',
  bulkTitle: 'Flux en masse : envoyer, suivre et récupérer les résultats',
  bulkIntro: 'Une tâche en masse s’envoie en un seul appel. Interrogez son statut toutes les 10 à 15 secondes jusqu’à ce qu’il passe à {0}.',

  pricingTitle: 'Tarifs de l’API de vérification d’email',
  pricingIntro:
    'Un tarif simple à l’usage, sans engagement mensuel. Un crédit vérifie une adresse. Pour les appels unitaires, la résolution catch-all est comprise dans ce même crédit. Pour les tâches en masse, la vérification standard coûte 1 crédit par adresse, et la vérification approfondie des lignes catch-all coûte 1 crédit par adresse catch-all vérifiée. Les crédits n’expirent jamais, et les résultats inconnus sont remboursés automatiquement.',
  pricingNote: 'Besoin d’un volume plus important ? Consultez tous nos [paliers de prix](/pricing).',

  limitsTitle: 'Limites de débit et erreurs',
  limitsIntro:
    'Des limites de débit standard s’appliquent à chaque clé API. L’état de ces limites est renvoyé dans chaque réponse par deux en-têtes standard :{0} et{1}.',
  limitsCardTitle: 'Limites de débit par fenêtre de 15 minutes',
  limitLabels: ['Vérifications unitaires (/v1/verify)', 'Création de tâches en masse', 'Création de tâches catch-all', 'Suivi des tâches et résultats'],
  limitUnit: '{n} requêtes / 15 min',
  errorsCardTitle: 'Codes d’erreur HTTP',
  errors: [
    'Syntaxe invalide ou corps JSON mal formé.',
    'Clé API absente, expirée ou invalide.',
    'Solde de crédits insuffisant.',
    'L’identifiant de tâche demandé n’existe pas.',
    'Conflit sur la clé d’idempotence.',
    'Les résultats de la tâche ont expiré après 48 heures.',
    'Limite de débit dépassée.',
  ],
  errorsNote:
    'Le format détaillé des réponses d’erreur et la description de leur contenu se trouvent dans la [documentation des erreurs de l’API](/public/docs).',

  reviewsTitle: 'Ce qu’en disent nos clients',
  reviewsIntro: 'Les avis réels d’équipes techniques, commerciales et marketing qui utilisent Giggal.ai.',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'Utilisateur vérifié sur G2',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'Utilisateur sur SourceForge',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Utilisateur sur Product Hunt',
    },
  ],

  faqTitle: 'FAQ sur l’API de vérification d’email',
  faqIntro: 'Les questions techniques fréquentes sur l’authentification, la vérification des boîtes mail et les adresses catch-all.',
  faqs: [
    {
      q: 'Existe-t-il une API de vérification d’email gratuite ?',
      a: 'Oui. Chaque nouveau compte reçoit 1 000 crédits gratuits dès l’inscription, sans carte bancaire. Vous pouvez créer une clé API dans votre tableau de bord et envoyer vos premières requêtes tout de suite. Les crédits gratuits n’expirent jamais et donnent accès à tous les endpoints, y compris la vérification complète des boîtes mail et la résolution catch-all approfondie.',
    },
    {
      q: 'Comment l’API vérifie-t-elle une adresse sans envoyer d’email ?',
      a: 'L’API vérifie si la boîte mail existe. Elle fait des requêtes DNS et MX, se connecte au serveur de messagerie de destination et contrôle si la boîte mail précise existe et peut recevoir du courrier. La connexion est fermée proprement avant l’envoi de tout message. Votre destinataire ne reçoit donc aucun email.',
    },
    {
      q: 'Comment les adresses catch-all sont-elles traitées ?',
      a: 'Sur les domaines catch-all, un serveur de messagerie standard indique que toutes les adresses sont acceptées. Les outils ordinaires renvoient alors « risqué » ou « inconnu ». Giggal vérifie si la boîte mail existe et renvoie un résultat valide ou invalide avec un catch_all_score de 0 à 100. Vous évitez ainsi de supprimer de vrais contacts.',
    },
    {
      q: 'Que signifie « inconnu », et est-ce facturé ?',
      a: 'Le statut « inconnu » apparaît quand le serveur de messagerie de destination ne donne pas de réponse claire dans notre délai, en général à cause d’un greylisting strict ou d’une panne temporaire du serveur. Les réponses non concluantes ne sont jamais facturées : les crédits de toute vérification qui renvoie le statut inconnu sont remboursés automatiquement sur votre solde.',
    },
    {
      q: 'Combien d’emails puis-je vérifier par requête ?',
      a: 'Une requête unitaire vérifie un email de façon synchrone et renvoie directement une réponse JSON. Pour les listes, notre endpoint en masse accepte jusqu’à 50 000 adresses par tâche, de façon asynchrone. Vous suivez l’avancement de la tâche et récupérez les résultats paginés à la fin du traitement.',
    },
    {
      q: 'Puis-je vérifier des emails depuis Claude, ChatGPT ou Cursor ?',
      a: 'Oui. Giggal.ai héberge un serveur MCP (Model Context Protocol) distant officiel à l’adresse https://mcp.giggal.ai/mcp. Claude et ChatGPT se connectent au serveur hébergé via OAuth, sans clé API. Pour un usage local dans Cursor, VS Code et d’autres clients, vous pouvez configurer le serveur local giggal-mcp avec votre clé API et vérifier des adresses depuis votre éditeur.',
    },
    {
      q: 'Quelle est la différence entre une API de vérification d’email et une API de validation d’email ?',
      a: 'Une API de vérification d’email contrôle si une boîte mail existe vraiment. Elle échange directement avec les serveurs de messagerie de destination, vérifie les enregistrements DNS et résout les adresses catch-all dans les listes commerciales et les bases clients. Une API de validation d’email sert surtout aux contrôles en temps réel dans les formulaires d’inscription. Elle vérifie le format, repère les domaines jetables et bloque les faux comptes à l’envoi du formulaire. Pour protéger vos formulaires, découvrez notre API de validation d’email.',
    },
    {
      q: 'Que faut-il regarder dans une API de vérification d’email ?',
      a: 'Regardez trois points : une vraie résolution des catch-all, pour ne pas perdre jusqu’à 30 % de vos contacts B2B dans la catégorie « risqué » ; une facturation transparente qui rembourse automatiquement les résultats inconnus ; un prix clair par vérification, sans frais récurrents cachés ni minimum mensuel.',
    },
  ],

  ctaHeadline: 'Commencez à vérifier des emails en quelques minutes',
}

// Dutch. Terms: SEO-Plan/i18n-batch1-nl-pl-terminology.md (je, e-mailverificatie,
// API-sleutel, batchtaak, geldig/ongeldig/onbekend, credits). Review quotes stay in
// the customers' own English.
const nl: VerificationApiStrings = {
  metaTitle: 'E-mailverificatie-API met catch-all-controle | Giggal.ai',
  ogTitle: 'E-mailverificatie-API met catch-all-controle',
  description:
    'E-mailverificatie-API: controleer in realtime of een mailbox bestaat, met catch-all-controle in één JSON-antwoord. Bulktaken tot 50.000. 1.000 gratis credits.',
  ogLocale: 'nl_NL',
  ogAlt: 'Giggal.ai E-mailverificatie-API',
  crumb: 'E-mailverificatie-API',
  appName: 'Giggal.ai E-mailverificatie-API',

  h1Lead: 'E-mailverificatie-API die ook',
  h1Highlight: 'catch-all-adressen beoordeelt',
  heroIntro:
    'Controleer met één REST-call of een mailbox bestaat. Op catch-all-domeinen stoppen de meeste API’s bij "accept-all" of "riskant". Jij krijgt in hetzelfde antwoord geldig of ongeldig. Onze e-mailverificatie-API geeft ontwikkelteams duidelijke JSON-data, zodat ze de afzenderreputatie in hun outreach beschermen.',
  quickTestLabel: 'Snelle test',
  heroCta: 'Gratis API-sleutel aanmaken',
  heroDocsCta: 'API-documentatie lezen',
  heroNote: '1.000 gratis credits, geen creditcard nodig. Credits verlopen nooit.',

  ratings: {
    reviews: (count) => `${count} reviews`,
    ratedAria: (rating, platform) => `Giggal.ai krijgt op ${platform} een score van ${rating.replace('.', ',')} van 5`,
    decimalComma: true,
  },
  awards: {
    headingLead: 'Giggal.ai is beoordeeld als',
    headingRest: 'Leader op SourceForge en Slashdot',
    showLabel: 'Toon {badge}',
  },

  returnsTitle: 'Wat één API-call teruggeeft',
  returnsIntro:
    'Eén call geeft alle gegevens over bezorgbaarheid terug. Je krijgt de status, een risico-inschatting, een score voor bezorgbaarheid, de kenmerken van de mailbox en het catch-all-resultaat in hetzelfde antwoord.',
  jsonLabel: 'JSON-antwoord',
  statusTitle: 'Zo verwerk je de statuswaarden',
  statusIntro:
    'De belangrijkste status staat in het veld {0}. Zo moet je backend elke waarde lezen en verwerken:',
  thStatus: 'Status',
  thMeaning: 'Betekenis',
  thAction: 'Aanbevolen actie',
  statusRows: [
    {
      meaning: 'De ontvangende mailserver accepteerde de ontvanger. De mailbox is actief.',
      action: 'Veilig om te versturen. Neem het adres op in je campagnes.',
    },
    {
      meaning: 'De mailbox bestaat niet, het formaat is ongeldig, het domein heeft geen MX-records of het domein is een wegwerpdomein.',
      action: 'Niet versturen. Haal het adres uit je campagnes om hard bounces te voorkomen.',
    },
    {
      meaning: 'De server gaf geen duidelijk antwoord, meestal door greylisting of een time-out van de verbinding.',
      action: 'Controleer het adres later opnieuw. Credits voor onbekende antwoorden worden automatisch terugbetaald.',
    },
  ],

  catchAllTitle: 'Catch-all-adressen beoordeeld in dezelfde call',
  catchAllParas: [
    'Standaardcontroles werken niet op catch-all-domeinen. Als de mailserver van een bedrijf elk adres accepteert, krijgen gewone tools een positief antwoord voor echte mailboxen en voor tikfouten. Verder kunnen ze niet controleren. Daarom markeren de meeste tools het adres als "riskant" of "accept-all" en laten ze de beslissing aan jou.',
    'Ongeveer 30% van een gewone B2B-lijst staat op catch-all-domeinen of op domeinen achter een secure email gateway (SEG), zoals Proofpoint en Mimecast. Verwijder je die adressen, dan verlies je echte kopers. Mail je ze zonder controle, dan stijgt je aantal bounces.',
    'Onze verificatie beoordeelt catch-all-adressen in dezelfde call. Ze controleert of de mailbox bestaat en geeft een {0} ("valid" of "invalid") en een {1} van 0 tot 100 terug. Lees meer in onze artikelen over [catch-all-verificatie](/catch-all-verification) en over het controleren van mailboxen achter een [secure email gateway](/seg-email-verification).',
  ],
  oldApiLabel: 'Gewone verificatie-API',
  oldApiSub: 'Stopt bij accept-all-domeinen',
  oldApiNote: 'De twijfel komt bij je team terecht. Je mailt en riskeert veel bounces, of je gooit geldige kopers weg.',
  ourApiLabel: 'Giggal.ai API',
  ourApiSub: 'Beoordeelt catch-all in dezelfde call',
  ourApiNote: 'Bevestigd actieve mailbox. Je houdt de catch-all-leads die echt bestaan en beschermt je afzenderreputatie.',

  endpointsTitle: 'Endpoints voor losse controles, bulk en catch-all',
  endpointsIntro:
    'Of je nu één contact controleert of een grote lijst, onze e-mailverificatie-API heeft voor elk geval een eigen endpoint.',
  endpoints: [
    {
      badge: '1 credit',
      title: 'Eén e-mailadres verifiëren',
      body: 'Synchrone controle van één e-mailadres. Controleert of het adres bestaat, test het domein en beoordeelt catch-all-adressen in dezelfde call. Geeft een volledig JSON-resultaat terug.',
      link: 'Documentatie van het endpoint',
    },
    {
      badge: 'Tot 50.000 e-mails',
      title: 'Bulk e-mailverificatie',
      body: 'Asynchrone verwerking van maximaal 50.000 adressen per taak. Dubbele adressen en adressen met een ongeldige syntaxis worden op de server verwijderd. Ondersteunt de header {0}, zodat je niet twee keer betaalt.',
      link: 'Documentatie over batchtaken',
    },
    {
      badge: 'Per pagina',
      title: 'Status van een taak en resultaten',
      body: 'Vraag de voortgang van een taak op met {0}, elke 10 tot 15 seconden. Haal de resultaten op in pagina’s van maximaal 500 records. Resultaten blijven 48 uur bewaard.',
      link: 'Documentatie over status opvragen',
    },
    {
      badge: '1 credit per adres',
      title: 'Catch-all-controle in bulk',
      body: 'Voer de catch-all-controle uit op de adressen die een afgeronde bulktaak als catch-all heeft gemarkeerd. Download de resultaten als CSV-bestand met kolommen voor score en status.',
      link: 'Documentatie over catch-all',
    },
  ],

  flagsTitle: 'Kenmerken in elk antwoord',
  flagsIntro:
    'Naast geldig of ongeldig bevat elk antwoord kenmerken van de mailbox. Daarmee kun je leads indelen, misbruik voorkomen en automatische filterregels toepassen.',
  thFlag: 'Kenmerk',
  thFieldPath: 'Veldpad',
  thDescription: 'Beschrijving en gebruik',
  flags: [
    { name: 'Wegwerpadres', description: 'Herkent tijdelijke wegwerpmailboxen. Blokkeer ze direct om misbruik van proefaccounts te stoppen.' },
    {
      name: 'Rol-adres',
      description: 'Herkent algemene mailboxen van afdelingen (info@, billing@, support@). Stuur ze door naar je CRM-team.',
    },
    {
      name: 'Gratis e-mail',
      description: 'Markeert webmaildomeinen voor consumenten (gmail.com, yahoo.com), zodat je privéadressen scheidt van zakelijke prospects.',
    },
    { name: 'Catch-all', description: 'Geeft aan of de server alle mail accepteert. Gebruik dit samen met {0} om geldige leads terug te halen.' },
    {
      name: 'Plus-tag',
      description: 'Herkent adressen met een alias via plus-adressering (user+tag@). Voorkomt dat één persoon meerdere accounts maakt.',
    },
    { name: 'Mailbox vol', description: 'Geeft aan dat de opslaglimiet is bereikt. Mail naar dit adres geeft een soft bounce.' },
    { name: 'No-reply', description: 'Markeert adressen die niemand leest. Stuur hier geen persoonlijke outreach naartoe.' },
    {
      name: 'Blacklistcontrole',
      description: 'Controleert het domein en de IP-adressen van de server in de grote DNSBL-lijsten, met reputatiescores.',
    },
  ],

  useCasesTitle: 'Waar teams de e-mailverificatie-API gebruiken',
  useCasesIntro: 'Onze endpoints sluiten direct aan op datapijplijnen, CRM-workflows en databases.',
  useCases: [
    {
      title: 'Synchronisatie met CRM en datawarehouse',
      body: 'Controleer contactgegevens doorlopend voordat je ze synchroniseert met Salesforce, HubSpot of Snowflake. Schoon verouderde records volgens een schema op en houd je contactgegevens juist.',
    },
    {
      title: 'Lijsten opschonen voor campagnes',
      body: 'Schoon e-maillijsten op voor grote mailings. Je kunt lijsten ook direct uploaden via onze pagina voor [e-maillijst opschonen](/email-list-cleaning) als je het snel met de hand wilt doen.',
    },
    {
      title: 'Pijplijnen voor leadverrijking',
      body: 'Start automatisch een controle van de mailbox zodra je SDR- of verrijkingstools nieuwe zakelijke e-mailadressen vinden. Zo benaderen je verkopers alleen geverifieerde adressen.',
    },
    {
      title: 'Automatisering van workflows',
      body: 'Koppel onze endpoints direct aan Zapier, n8n, Make en webhook-workflows via onze [integraties](/integrations).',
    },
    {
      title: 'AI-agents via MCP',
      body: 'Laat Claude, ChatGPT, Cursor en je eigen AI-agents tijdens een gesprek contacten controleren met onze [MCP-server](/mcp).',
    },
    {
      title: 'Validatie in aanmeldformulieren',
      body: 'Wil je adressen controleren terwijl gebruikers ze invullen in aanmeld- en leadformulieren? Bekijk onze [e-mailvalidatie-API](/email-validation-api), gemaakt voor controles in formulieren in realtime.',
    },
  ],

  codeTitle: 'Codevoorbeelden',
  codeIntro: 'Codevoorbeelden voor de server, voor losse controles en bulkcontroles. Bewaar je API-sleutel in omgevingsvariabelen.',
  nodeLabel: 'Eén adres verifiëren: Node.js (fetch)',
  pythonLabel: 'Eén adres verifiëren: Python (requests)',
  serverSideOnly: 'alleen op de server',
  bulkTitle: 'Bulkworkflow: indienen, status opvragen en resultaten ophalen',
  bulkIntro: 'Een batchtaak indienen kost één call. Vraag elke 10 tot 15 seconden de status op tot de taak de status {0} heeft.',

  pricingTitle: 'Prijzen van de e-mailverificatie-API',
  pricingIntro:
    'Eenvoudig betalen per gebruik, zonder maandcontract. Eén credit verifieert één adres. Bij losse API-controles zit de catch-all-controle in dezelfde 1 credit. Bij batchtaken kost de standaardverificatie 1 credit per adres, en de extra controle van catch-all-regels kost 1 credit per gecontroleerd catch-all-adres. Credits verlopen nooit, en onbekende resultaten worden automatisch terugbetaald.',
  pricingNote: 'Heb je een groter volume nodig? Bekijk al onze [prijzen](/pricing).',

  limitsTitle: 'Rate limits en foutcodes',
  limitsIntro:
    'Per API-sleutel gelden standaard rate limits. Elk antwoord toont de status van je limiet in de standaardheaders{0} en{1}.',
  limitsCardTitle: 'Rate limits per periode van 15 minuten',
  limitLabels: ['Losse controles (/v1/verify)', 'Batchtaken aanmaken', 'Catch-all-taken aanmaken', 'Status en resultaten opvragen'],
  limitUnit: '{n} verzoeken / 15 min',
  errorsCardTitle: 'HTTP-foutcodes',
  errors: [
    'Ongeldige syntaxis of onjuiste JSON-body.',
    'API-sleutel ontbreekt, is verlopen of is ongeldig.',
    'Te weinig credits op je account.',
    'De opgevraagde taak-ID bestaat niet.',
    'Conflict met een eerder gebruikte idempotency key.',
    'De resultaten van de batchtaak zijn na 48 uur verlopen.',
    'Rate limit overschreden.',
  ],
  errorsNote:
    'De volledige foutberichten en hun beschrijving staan in de [API-documentatie over fouten](/public/docs).',

  reviewsTitle: 'Wat klanten zeggen',
  reviewsIntro: 'Echte feedback van ontwikkel-, sales- en growthteams die Giggal.ai gebruiken.',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'Geverifieerde reviewer op G2',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'Reviewer op SourceForge',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Reviewer op Product Hunt',
    },
  ],

  faqTitle: 'Veelgestelde vragen over de e-mailverificatie-API',
  faqIntro: 'Veelgestelde technische vragen over authenticatie, controles van de mailbox en catch-all-adressen.',
  faqs: [
    {
      q: 'Is er een gratis e-mailverificatie-API?',
      a: 'Ja. Elk nieuw account krijgt direct bij registratie 1.000 gratis credits, zonder creditcard. Je maakt een API-sleutel aan in je dashboard en kunt meteen verificatieverzoeken sturen. De gratis credits verlopen nooit en geven toegang tot elk endpoint, ook de controle van de mailbox en de catch-all-controle.',
    },
    {
      q: 'Hoe controleert de API een adres zonder een e-mail te versturen?',
      a: 'De API controleert of de mailbox bestaat. Hij doet DNS- en MX-lookups, maakt verbinding met de ontvangende mailserver en controleert of die mailbox bestaat en mail kan ontvangen. De verbinding wordt netjes gesloten voordat er een bericht wordt verstuurd. De ontvanger krijgt dus nooit een e-mail.',
    },
    {
      q: 'Hoe worden catch-all-adressen behandeld?',
      a: 'Op catch-all-domeinen zegt de mailserver dat elk adres geaccepteerd wordt. Daardoor geven gewone tools "riskant" of "onbekend" terug. Giggal controleert of de mailbox bestaat en geeft geldig of ongeldig terug, met een catch_all_score van 0 tot 100. Zo hoef je geen echte leads weg te gooien.',
    },
    {
      q: 'Wat betekent "onbekend", en betaal ik daarvoor?',
      a: 'De status "onbekend" krijg je als de ontvangende mailserver niet binnen onze time-out een duidelijk antwoord geeft, meestal door strenge greylisting of een tijdelijke storing van de server. Je betaalt nooit voor een onduidelijk antwoord. Credits voor een verificatie met de status onbekend worden automatisch teruggezet op je saldo.',
    },
    {
      q: 'Hoeveel e-mails kan ik per verzoek verifiëren?',
      a: 'Een los verzoek controleert één e-mailadres synchroon en geeft direct een JSON-antwoord. Voor lijsten accepteert ons bulk-endpoint tot 50.000 e-mailadressen per batchtaak, asynchroon. Je volgt de voortgang door de status op te vragen en haalt de resultaten per pagina op zodra de taak klaar is.',
    },
    {
      q: 'Kan ik e-mails verifiëren vanuit Claude, ChatGPT of Cursor?',
      a: 'Ja. Giggal.ai heeft een officiële MCP-server (Model Context Protocol) op https://mcp.giggal.ai/mcp. Claude en ChatGPT maken verbinding met die server via OAuth, zonder API-sleutel. Voor lokaal werk in Cursor, VS Code en andere clients stel je de lokale giggal-mcp-server in met je API-sleutel. Dan verifieer je adressen direct vanuit je editor.',
    },
    {
      q: 'Wat is het verschil tussen een e-mailverificatie-API en een e-mailvalidatie-API?',
      a: 'Een e-mailverificatie-API controleert of een mailbox echt bestaat. Hij praat direct met de ontvangende mailservers, controleert DNS-records en beoordeelt catch-all-adressen in saleslijsten en klantdatabases. Een e-mailvalidatie-API richt zich vooral op controles in realtime in aanmeldformulieren: hij controleert het formaat, herkent wegwerpdomeinen en blokkeert nepaccounts bij het verzenden van het formulier. Wil je je formulieren beschermen, bekijk dan onze e-mailvalidatie-API.',
    },
    {
      q: 'Waar let je op bij een e-mailverificatie-API?',
      a: 'Let op drie dingen. Ten eerste een echte catch-all-controle, zodat je niet tot 30% van je B2B-contacten verliest aan de categorie "riskant". Ten tweede duidelijke regels die onbekende resultaten automatisch terugbetalen. Ten derde een duidelijke prijs per verificatie, zonder verborgen terugkerende kosten of maandelijks minimum.',
    },
  ],

  ctaHeadline: 'Begin binnen enkele minuten met e-mails verifiëren',
}

/** 1 opinia, 2-4 opinie (not 12-14), 5+ opinii. Same as lib/i18n/emailChecker/pl.tsx. */
function plOpinie(n: number): string {
  if (n === 1) return '1 opinia'
  const last = n % 10
  const lastTwo = n % 100
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) return `${n} opinie`
  return `${n} opinii`
}

// Polish. Terms follow SEO-Plan/i18n-batch1-nl-pl-terminology.md: "API do
// weryfikacji email" in the title and H1, "weryfikacja e-mail" in running text,
// klucz API, zadanie wsadowe, register "ty". Review quotes stay in English.
const pl: VerificationApiStrings = {
  metaTitle: 'API do weryfikacji email z testem catch-all | Giggal.ai',
  ogTitle: 'API do weryfikacji email z testem catch-all',
  description:
    'API do weryfikacji email w czasie rzeczywistym: test skrzynki i catch-all w jednej odpowiedzi JSON. Do 50 000 adresów w zadaniu. 1000 kredytów gratis.',
  ogLocale: 'pl_PL',
  ogAlt: 'Giggal.ai, API do weryfikacji email',
  crumb: 'API do weryfikacji email',
  appName: 'Giggal.ai API do weryfikacji email',

  h1Lead: 'API do weryfikacji email, które',
  h1Highlight: 'sprawdza też adresy catch-all',
  heroIntro:
    'Sprawdź jednym wywołaniem REST, czy dana skrzynka istnieje. W domenach catch-all, gdzie większość API kończy na „accept-all” albo „ryzykowny”, dostajesz w tej samej odpowiedzi wynik prawidłowy albo nieprawidłowy. Nasze API do weryfikacji email daje zespołom programistów czyste dane JSON, które chronią reputację nadawcy we wszystkich kampaniach wychodzących.',
  quickTestLabel: 'Szybki test',
  heroCta: 'Odbierz darmowy klucz API',
  heroDocsCta: 'Przeczytaj dokumentację API',
  heroNote: '1000 darmowych kredytów, bez karty. Kredyty nigdy nie wygasają.',

  ratings: {
    reviews: (count) => plOpinie(count),
    ratedAria: (rating, platform) => `Ocena Giggal.ai w serwisie ${platform}: ${rating.replace('.', ',')} na 5`,
    decimalComma: true,
  },
  awards: {
    headingLead: 'Giggal.ai ma wyróżnienie',
    headingRest: 'Leader w serwisach SourceForge i Slashdot',
    showLabel: 'Pokaż {badge}',
  },

  returnsTitle: 'Co zwraca jedno wywołanie API',
  returnsIntro:
    'Jedno wywołanie zwraca pełne dane o dostarczalności. Dostajesz główny status dostarczalności, ocenę ryzyka, liczbowy wynik dostarczalności, atrybuty skrzynki i wynik catch-all w tej samej odpowiedzi.',
  jsonLabel: 'Odpowiedź JSON',
  statusTitle: 'Jak obsłużyć wartości statusu w odpowiedzi',
  statusIntro:
    'Główny status dostarczenia jest zwracany w polu {0}. Oto jak backend twojej aplikacji powinien interpretować każdą wartość i co z nią zrobić:',
  thStatus: 'Status',
  thMeaning: 'Znaczenie',
  thAction: 'Zalecane działanie',
  statusRows: [
    {
      meaning: 'Docelowy serwer pocztowy przyjął adresata. Skrzynka jest w pełni aktywna.',
      action: 'Można bezpiecznie wysyłać. Dodaj adres do głównych kampanii.',
    },
    {
      meaning: 'Skrzynka nie istnieje, składnia jest błędna, domena nie ma rekordów MX albo domena jest jednorazowa.',
      action: 'Nie wysyłaj. Usuń adres z kampanii, aby uniknąć twardych odbić.',
    },
    {
      meaning: 'Odpowiedź serwera nie daje jasnego wyniku, zwykle z powodu greylistingu lub przekroczenia czasu połączenia.',
      action: 'Sprawdź adres ponownie później. Kredyty za nieznane wyniki są zwracane automatycznie.',
    },
  ],

  catchAllTitle: 'Adresy catch-all sprawdzone w tym samym wywołaniu',
  catchAllParas: [
    'Zwykłe testy zawodzą w domenach catch-all. Gdy firmowy serwer pocztowy przyjmuje każdy przychodzący adres, zwykłe narzędzia widzą pozytywną odpowiedź zarówno dla prawdziwych skrzynek, jak i dla literówek. Nie mogą sprawdzić nic więcej, więc większość z nich oznacza adres jako „ryzykowny” albo „accept-all” i zostawia decyzję tobie.',
    'Około 30% typowej listy B2B to adresy w domenach catch-all albo w domenach za bramkami bezpieczeństwa poczty (SEG), takimi jak Proofpoint i Mimecast. Usunięcie tych adresów oznacza utratę prawdziwych kupujących. Wysyłka bez weryfikacji powoduje gwałtowny wzrost odbić.',
    'Nasz silnik weryfikacji dokładnie sprawdza adresy catch-all w tym samym wywołaniu. Sprawdza, czy skrzynka istnieje, i zwraca {0} („valid” albo „invalid”) oraz {1} w skali od 0 do 100. Więcej znajdziesz w poradnikach o [weryfikacji catch-all](/catch-all-verification) i o sprawdzaniu skrzynek za [bramkami bezpieczeństwa poczty](/seg-email-verification).',
  ],
  oldApiLabel: 'Tradycyjne API do weryfikacji',
  oldApiSub: 'Zatrzymuje się na domenach accept-all',
  oldApiNote: 'Niepewność przechodzi na twój zespół. Wysyłasz i ryzykujesz dużo odbić albo odrzucasz prawdziwych potencjalnych klientów.',
  ourApiLabel: 'API Giggal.ai',
  ourApiSub: 'Sprawdza catch-all w tym samym wywołaniu',
  ourApiNote: 'Potwierdzona aktywna skrzynka. Zachowujesz prawdziwe kontakty catch-all i chronisz reputację nadawcy.',

  endpointsTitle: 'Endpointy do testów pojedynczych, masowych i catch-all',
  endpointsIntro:
    'Niezależnie od tego, czy sprawdzasz jeden kontakt, czy dużą listę, nasze API do weryfikacji email ma osobne endpointy przygotowane z myślą o wydajności i niezawodności.',
  endpoints: [
    {
      badge: '1 kredyt',
      title: 'Weryfikacja pojedynczego adresu e-mail',
      body: 'Synchroniczna weryfikacja jednego adresu e-mail. Sprawdza, czy adres istnieje, wykonuje diagnostykę domeny i sprawdza adresy catch-all w tym samym wywołaniu. Zwraca pełny wynik w JSON.',
      link: 'Zobacz dokumentację endpointu',
    },
    {
      badge: 'Do 50 000 adresów',
      title: 'Masowa weryfikacja e-mail',
      body: 'Asynchroniczne przetwarzanie do 50 000 adresów w jednym zadaniu. Duplikaty i błędna składnia są usuwane po stronie serwera. Obsługuje nagłówek {0}, który zapobiega podwójnemu naliczeniu opłaty.',
      link: 'Zobacz dokumentację zadań wsadowych',
    },
    {
      badge: 'Z paginacją',
      title: 'Odpytywanie zadań i wyniki',
      body: 'Sprawdzaj postęp zadania przez {0} co 10 do 15 sekund. Pobieraj wyniki stronami, do 500 rekordów na stronę. Wyniki są bezpiecznie przechowywane przez 48 godzin.',
      link: 'Zobacz dokumentację odpytywania',
    },
    {
      badge: '1 kredyt za adres',
      title: 'Masowe sprawdzanie adresów catch-all',
      body: 'Uruchom dokładny test catch-all dla adresów oznaczonych jako catch-all w ukończonym zadaniu masowym. Pobierz wyniki jako czysty plik CSV z kolumnami wyniku liczbowego i statusu.',
      link: 'Zobacz dokumentację catch-all',
    },
  ],

  flagsTitle: 'Oznaczenia w każdej odpowiedzi',
  flagsIntro:
    'Poza wynikiem prawidłowy albo nieprawidłowy każda odpowiedź zawiera szczegółowe atrybuty skrzynki. Pomagają one dzielić kontakty na segmenty, zapobiegać nadużyciom i stosować automatyczne reguły filtrowania.',
  thFlag: 'Oznaczenie',
  thFieldPath: 'Ścieżka pola',
  thDescription: 'Opis i zastosowanie',
  flags: [
    { name: 'Jednorazowy', description: 'Wykrywa tymczasowe, jednorazowe skrzynki. Blokuj je od razu, aby zatrzymać nadużycia okresów próbnych.' },
    {
      name: 'Adres funkcyjny',
      description: 'Wykrywa ogólne skrzynki działów (info@, billing@, support@). Przekazuj je zespołom, które obsługują CRM.',
    },
    {
      name: 'Darmowa poczta',
      description: 'Oznacza domeny darmowej poczty dla konsumentów (gmail.com, yahoo.com), aby oddzielić prywatne skrzynki od firmowych kontaktów.',
    },
    { name: 'Catch-all', description: 'Pokazuje, czy serwer przyjmuje całą pocztę. Użyj razem z {0}, aby odzyskać prawidłowe kontakty.' },
    {
      name: 'Tag plus',
      description: 'Wykrywa adresy z aliasem (user+tag@). Zapobiega zakładaniu wielu kont przez jedną osobę.',
    },
    { name: 'Pełna skrzynka', description: 'Pokazuje, że limit miejsca został przekroczony. Poczta wysłana na ten adres da miękkie odbicie.' },
    { name: 'No-reply', description: 'Oznacza adresy nadawcze, których nikt nie czyta. Nie wysyłaj na nie wiadomości, które wymagają odpowiedzi.' },
    {
      name: 'Test czarnej listy',
      description: 'Sprawdza domenę i adresy IP serwera na głównych listach DNSBL i podaje wyniki reputacji.',
    },
  ],

  useCasesTitle: 'Gdzie zespoły używają API do weryfikacji email',
  useCasesIntro: 'Nasze endpointy łączą się bezpośrednio z potokami danych, procesami w CRM i bazami danych.',
  useCases: [
    {
      title: 'Synchronizacja z CRM i hurtownią danych',
      body: 'Weryfikuj dane kontaktowe na bieżąco przed synchronizacją z Salesforce, HubSpot lub Snowflake. Czyść nieaktualne rekordy według harmonogramu i utrzymuj dokładne dane kontaktowe.',
    },
    {
      title: 'Czyszczenie list przed kampanią',
      body: 'Czyść listy mailingowe przed dużymi wysyłkami. Jeśli pracujesz ręcznie, listy możesz też wgrać bezpośrednio w interfejsie [czyszczenia listy mailingowej](/email-list-cleaning).',
    },
    {
      title: 'Wzbogacanie danych o leadach',
      body: 'Uruchamiaj automatyczne testy skrzynek za każdym razem, gdy narzędzia SDR lub narzędzia do wzbogacania danych znajdą nowe firmowe adresy e-mail. Handlowcy piszą wtedy tylko na zweryfikowane adresy.',
    },
    {
      title: 'Automatyzacja procesów',
      body: 'Połącz nasze endpointy weryfikacji z Zapier, n8n, Make i webhookami przez nasze [integracje](/integrations).',
    },
    {
      title: 'Agenci AI przez MCP',
      body: 'Pozwól, aby Claude, ChatGPT, Cursor i własni agenci AI weryfikowali kontakty bezpośrednio w rozmowie przez nasz [serwer MCP](/mcp).',
    },
    {
      title: 'Walidacja formularzy rejestracji',
      body: 'Chcesz sprawdzać adresy, gdy użytkownicy wpisują je w formularzach rejestracji i formularzach kontaktowych? Zobacz nasze [API do walidacji email](/email-validation-api) do testów formularzy w czasie rzeczywistym.',
    },
  ],

  codeTitle: 'Przykłady kodu',
  codeIntro: 'Fragmenty kodu po stronie serwera do testów pojedynczych i masowych. Trzymaj klucz API w zmiennych środowiskowych.',
  nodeLabel: 'Pojedyncza weryfikacja: Node.js (fetch)',
  pythonLabel: 'Pojedyncza weryfikacja: Python (requests)',
  serverSideOnly: 'tylko po stronie serwera',
  bulkTitle: 'Proces masowy: wyślij zadanie, sprawdzaj postęp i pobierz wyniki',
  bulkIntro: 'Utworzenie zadania wsadowego wymaga jednego wywołania. Sprawdzaj postęp co 10 do 15 sekund, aż status zadania zmieni się na {0}.',

  pricingTitle: 'Cennik API do weryfikacji email',
  pricingIntro:
    'Prosty cennik za użycie, bez miesięcznego zobowiązania. Jeden kredyt weryfikuje jeden adres. W pojedynczych testach przez API sprawdzanie catch-all jest w cenie tego samego 1 kredytu. W zadaniach wsadowych standardowa weryfikacja kosztuje 1 kredyt za adres, a dokładna weryfikacja wierszy catch-all kosztuje 1 kredyt za każdy sprawdzony adres catch-all. Kredyty nigdy nie wygasają, a kredyty za nieznane wyniki są zwracane automatycznie.',
  pricingNote: 'Potrzebujesz większego wolumenu dla firmy? Zobacz pełny [cennik](/pricing).',

  limitsTitle: 'Limity zapytań i błędy',
  limitsIntro:
    'Standardowe limity zapytań obowiązują dla każdego klucza API. Stan limitu jest zwracany przy każdym zapytaniu w standardowych nagłówkach:{0} i{1}.',
  limitsCardTitle: 'Limity zapytań w oknie 15 minut',
  limitLabels: ['Pojedyncze testy (/v1/verify)', 'Tworzenie zadań wsadowych', 'Tworzenie zadań catch-all', 'Odpytywanie zadań i wyniki'],
  limitUnit: '{n} zapytań / 15 min',
  errorsCardTitle: 'Kody błędów HTTP',
  errors: [
    'Błędna składnia albo nieprawidłowa treść JSON.',
    'Brak klucza API, klucz wygasł albo jest nieprawidłowy.',
    'Za mało kredytów na koncie.',
    'Zadanie o podanym ID nie istnieje.',
    'Konflikt danych dla tego samego klucza idempotencji.',
    'Wyniki zadania wsadowego wygasły po 48 godzinach.',
    'Przekroczono limit zapytań.',
  ],
  errorsNote:
    'Szczegółowy opis odpowiedzi z błędami i ich treści znajdziesz w [dokumentacji błędów API](/public/docs).',

  reviewsTitle: 'Co mówią klienci',
  reviewsIntro: 'Prawdziwe opinie zespołów technicznych, sprzedaży i zespołów ds. wzrostu, które używają Giggal.ai.',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'Zweryfikowany recenzent G2',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'Recenzent SourceForge',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Recenzent Product Hunt',
    },
  ],

  faqTitle: 'API do weryfikacji email: pytania i odpowiedzi',
  faqIntro: 'Najczęstsze pytania techniczne o uwierzytelnianie, testy skrzynek i obsługę adresów catch-all.',
  faqs: [
    {
      q: 'Czy jest darmowe API do weryfikacji email?',
      a: 'Tak. Każde nowe konto dostaje 1000 darmowych kredytów od razu po rejestracji, bez karty płatniczej. Klucz API wygenerujesz w panelu dewelopera i od razu możesz wysyłać zapytania o weryfikację. Darmowe kredyty nigdy nie wygasają i dają pełny dostęp do każdego endpointu, w tym do pełnych testów skrzynek i dokładnego sprawdzania catch-all.',
    },
    {
      q: 'Jak API sprawdza adres bez wysyłania e-maila?',
      a: 'API sprawdza, czy skrzynka istnieje. Wykonuje zapytania DNS i MX, łączy się z docelowym serwerem pocztowym i sprawdza, czy konkretna skrzynka istnieje i może odbierać pocztę. Połączenie jest zamykane, zanim zostanie przesłana jakakolwiek wiadomość, więc odbiorca nie dostaje żadnego e-maila.',
    },
    {
      q: 'Jak obsługiwane są adresy catch-all?',
      a: 'W domenach catch-all serwer pocztowy odpowiada, że przyjmie każdy adres. Dlatego zwykłe narzędzia zwracają wynik „ryzykowny” albo „nieznany”. Giggal sprawdza, czy skrzynka istnieje, i zwraca wynik prawidłowy albo nieprawidłowy oraz catch_all_score w skali od 0 do 100. Dzięki temu nie odrzucasz prawdziwych kontaktów.',
    },
    {
      q: 'Co oznacza wynik „nieznany” i czy za niego płacę?',
      a: 'Status „nieznany” pojawia się, gdy docelowy serwer pocztowy nie da jednoznacznej odpowiedzi w naszym limicie czasu. Zwykle powodem jest agresywny greylisting albo chwilowa awaria serwera. Nigdy nie płacisz za niejasne odpowiedzi: kredyty za każdą weryfikację z wynikiem nieznanym wracają automatycznie na saldo twojego konta.',
    },
    {
      q: 'Ile adresów mogę zweryfikować w jednym zapytaniu?',
      a: 'Pojedyncze zapytanie synchronicznie sprawdza jeden adres i zwraca bezpośrednio odpowiedź JSON. Do weryfikacji list służy masowy endpoint API, który asynchronicznie przyjmuje do 50 000 adresów w jednym zadaniu wsadowym. Postęp śledzisz przez odpytywanie zadania, a po zakończeniu pobierasz wyniki stronami.',
    },
    {
      q: 'Czy mogę weryfikować adresy e-mail w Claude, ChatGPT lub Cursor?',
      a: 'Tak. Giggal.ai udostępnia oficjalny zdalny serwer MCP (Model Context Protocol) pod adresem https://mcp.giggal.ai/mcp. Claude i ChatGPT łączą się z nim przez OAuth, bez klucza API. W lokalnej pracy w Cursor, VS Code i innych klientach możesz skonfigurować lokalny serwer giggal-mcp ze swoim kluczem API i weryfikować adresy bezpośrednio w edytorze.',
    },
    {
      q: 'Czym różni się API do weryfikacji email od API do walidacji email?',
      a: 'API do weryfikacji email sprawdza, czy skrzynka naprawdę istnieje. Łączy się bezpośrednio z docelowymi serwerami pocztowymi, sprawdza rekordy DNS i ustala wynik dla adresów catch-all na listach sprzedażowych i w bazach klientów. API do walidacji email służy głównie do testów w czasie rzeczywistym w formularzach rejestracji. Sprawdza format, wykrywa domeny jednorazowe i blokuje fałszywe konta przy wysłaniu formularza. Jeśli potrzebujesz ochrony formularzy, zobacz nasze API do walidacji email.',
    },
    {
      q: 'Na co zwrócić uwagę przy wyborze API do weryfikacji email?',
      a: 'Zwróć uwagę na trzy rzeczy. Pierwsza to prawdziwe sprawdzanie adresów catch-all, aby nie stracić do 30% kontaktów B2B w grupie „ryzykowne”. Druga to przejrzyste zasady rozliczeń z automatycznym zwrotem kredytów za nieznane wyniki. Trzecia to jasna cena za weryfikację, bez ukrytych opłat cyklicznych i bez miesięcznych minimów.',
    },
  ],

  ctaHeadline: 'Zacznij weryfikować adresy e-mail w kilka minut',
}

const id: VerificationApiStrings = {
  metaTitle: 'API Verifikasi Email yang Juga Mengecek Catch-All | Giggal.ai',
  ogTitle: 'API Verifikasi Email yang Juga Mengecek Catch-All',
  description:
    'API verifikasi email real-time yang mengecek apakah kotak masuk ada, dengan hasil catch-all dalam satu respons JSON. Batch hingga 50.000. 1.000 kredit gratis.',
  ogLocale: 'id_ID',
  ogAlt: 'API verifikasi email Giggal.ai',
  crumb: 'API verifikasi email',
  appName: 'Giggal.ai API Verifikasi Email',

  h1Lead: 'API verifikasi email yang juga',
  h1Highlight: 'mengecek alamat catch-all',
  heroIntro:
    'Cek apakah sebuah kotak masuk ada dengan satu panggilan REST. Pada domain catch-all, kebanyakan API berhenti di "accept-all" atau "berisiko". Di sini Anda mendapat jawaban valid atau tidak valid dalam respons yang sama. API verifikasi email kami memberi tim engineering data JSON yang rapi untuk melindungi reputasi pengirim di semua alur outreach.',
  quickTestLabel: 'Tes cepat',
  heroCta: 'Dapatkan API key gratis',
  heroDocsCta: 'Baca referensi API',
  heroNote: '1.000 kredit gratis, tanpa kartu kredit. Kredit tidak pernah kedaluwarsa.',

  ratings: {
    reviews: (count) => `${count} ulasan`,
    ratedAria: (rating, platform) => `Giggal.ai mendapat nilai ${rating.replace('.', ',')} dari 5 di ${platform}`,
    decimalComma: true,
  },
  awards: {
    headingLead: 'Giggal.ai dinilai sebagai',
    headingRest: 'Leader di SourceForge dan Slashdot',
    showLabel: 'Tampilkan {badge}',
  },

  returnsTitle: 'Yang dikembalikan oleh satu panggilan API',
  returnsIntro:
    'Satu panggilan mengembalikan data deliverability (tingkat keterkiriman email) yang lengkap. Anda menerima status deliverability utama, penilaian risiko, skor deliverability berupa angka, atribut kotak masuk, dan hasil catch-all dalam respons yang sama.',
  jsonLabel: 'Respons JSON',
  statusTitle: 'Cara menangani nilai status dalam respons',
  statusIntro:
    'Status pengiriman utama dikembalikan di field {0}. Berikut cara aplikasi backend Anda membaca dan meneruskan setiap nilai enum:',
  thStatus: 'Status',
  thMeaning: 'Artinya',
  thAction: 'Tindakan yang disarankan',
  statusRows: [
    {
      meaning: 'Server email tujuan menerima penerima ini. Kotak masuknya aktif.',
      action: 'Aman untuk dikirimi email. Masukkan ke kampanye outreach utama.',
    },
    {
      meaning: 'Kotak masuk tidak ada, formatnya tidak valid, domain tidak punya MX record, atau domainnya adalah domain email sekali pakai.',
      action: 'Jangan kirim. Hapus dari kampanye agar tidak terjadi hard bounce.',
    },
    {
      meaning: 'Respons server tidak jelas, biasanya karena greylisting atau batas waktu koneksi habis.',
      action: 'Cek ulang nanti. Kredit untuk jawaban tidak diketahui dikembalikan secara otomatis.',
    },
  ],

  catchAllTitle: 'Alamat catch-all dicek dalam panggilan yang sama',
  catchAllParas: [
    'Pemeriksaan biasa gagal pada domain catch-all. Jika server email perusahaan menerima setiap alamat yang masuk, alat biasa melihat respons positif untuk kotak masuk asli dan untuk salah ketik. Karena tidak bisa mengecek lebih jauh, kebanyakan alat menandai alamat itu "berisiko" atau "accept-all" dan menyerahkan keputusannya kepada Anda.',
    'Sekitar 30% dari daftar B2B biasa berada di domain catch-all atau di domain di balik secure email gateway (SEG), yaitu gateway keamanan email seperti Proofpoint dan Mimecast. Menghapus alamat ini berarti membuang pembeli sungguhan. Mengirim tanpa verifikasi menyebabkan lonjakan bounce.',
    'Mesin verifikasi kami menjalankan pemeriksaan catch-all yang mendalam dalam panggilan yang sama. Mesin ini mengecek apakah kotak masuknya ada, lalu mengembalikan {0} ("valid" atau "invalid") dan {1} dari 0 sampai 100. Pelajari lebih lanjut di panduan kami tentang [verifikasi catch-all](/catch-all-verification) dan pemeriksaan kotak masuk di balik [secure email gateway](/seg-email-verification).',
  ],
  oldApiLabel: 'API verifikasi biasa',
  oldApiSub: 'Berhenti pada domain accept-all',
  oldApiNote: 'Ketidakpastian diserahkan ke tim Anda. Kirim dan ambil risiko bounce tinggi, atau buang calon pembeli yang valid.',
  ourApiLabel: 'API Giggal.ai',
  ourApiSub: 'Mengecek catch-all dalam panggilan yang sama',
  ourApiNote: 'Kotak masuk aktif yang sudah dipastikan. Simpan kontak catch-all yang valid dan lindungi reputasi pengirim.',

  endpointsTitle: 'Endpoint untuk pemeriksaan tunggal, massal, dan catch-all',
  endpointsIntro:
    'Untuk mengecek satu kontak atau memverifikasi daftar besar, API verifikasi email kami menyediakan endpoint khusus untuk setiap pekerjaan.',
  endpoints: [
    {
      badge: '1 kredit',
      title: 'Verifikasi satu email',
      body: 'Verifikasi sinkron untuk satu alamat email. Mengecek apakah alamat email ada, menjalankan diagnostik domain, dan mengecek alamat catch-all dalam panggilan yang sama. Mengembalikan hasil JSON yang lengkap.',
      link: 'Lihat dokumentasi endpoint',
    },
    {
      badge: 'Hingga 50 ribu email',
      title: 'Verifikasi email massal',
      body: 'Pemrosesan asinkron untuk hingga 50.000 alamat per tugas. Alamat ganda dan alamat dengan format tidak valid dihapus di server. Mendukung header {0} untuk mencegah tagihan ganda.',
      link: 'Lihat dokumentasi batch',
    },
    {
      badge: 'Per halaman',
      title: 'Polling tugas dan hasil',
      body: 'Cek progres tugas dengan {0} setiap 10 sampai 15 detik. Ambil hasil per halaman, hingga 500 data per halaman. Hasil disimpan dengan aman selama 48 jam.',
      link: 'Lihat dokumentasi polling',
    },
    {
      badge: '1 kredit per alamat',
      title: 'Pemeriksaan catch-all massal',
      body: 'Jalankan pemeriksaan catch-all yang mendalam pada alamat yang ditandai catch-all dari tugas massal yang sudah selesai. Unduh hasilnya sebagai file CSV yang rapi dengan kolom skor dan status.',
      link: 'Lihat dokumentasi catch-all',
    },
  ],

  flagsTitle: 'Tanda di setiap respons',
  flagsIntro:
    'Selain valid atau tidak valid, setiap respons berisi atribut kotak masuk yang rinci. Atribut ini membantu Anda mengelompokkan kontak, mencegah penyalahgunaan, dan menerapkan aturan penyaringan otomatis.',
  thFlag: 'Tanda',
  thFieldPath: 'Path field',
  thDescription: 'Deskripsi dan penggunaan',
  flags: [
    { name: 'Email sekali pakai', description: 'Mengenali kotak masuk sementara. Blokir langsung untuk menghentikan penipuan uji coba gratis.' },
    {
      name: 'Alamat berbasis peran',
      description: 'Mendeteksi kotak masuk umum milik departemen (info@, billing@, support@). Teruskan ke tim CRM.',
    },
    {
      name: 'Email gratis',
      description: 'Menandai domain webmail konsumen (gmail.com, yahoo.com) untuk memisahkan kotak masuk pribadi dari calon pelanggan perusahaan.',
    },
    { name: 'Catch-all', description: 'Menandai apakah server menerima semua email. Pakai bersama {0} untuk menyelamatkan kontak yang valid.' },
    {
      name: 'Plus tag',
      description: 'Mendeteksi alamat yang memakai alias sub-addressing (user+tag@). Mencegah satu orang membuat banyak akun.',
    },
    { name: 'Kotak masuk penuh', description: 'Menunjukkan kuota penyimpanan sudah terlampaui. Email ke alamat ini akan soft bounce.' },
    { name: 'No-reply', description: 'Menandai alamat siaran yang tidak dipantau. Jangan kirim outreach percakapan ke alamat ini.' },
    {
      name: 'Pemeriksaan blacklist',
      description: 'Mengecek domain dan IP server di feed DNSBL utama, dengan skor reputasi.',
    },
  ],

  useCasesTitle: 'Cara tim memakai API verifikasi email',
  useCasesIntro: 'Endpoint kami terhubung langsung ke alur data, alur kerja CRM, dan database.',
  useCases: [
    {
      title: 'Sinkronisasi CRM dan data warehouse',
      body: 'Verifikasi data kontak secara terus-menerus sebelum disinkronkan ke Salesforce, HubSpot, atau Snowflake. Bersihkan data lama sesuai jadwal dan jaga data kontak tetap akurat.',
    },
    {
      title: 'Membersihkan daftar kampanye',
      body: 'Bersihkan daftar email sebelum pengiriman outreach besar. Anda juga bisa mengunggah daftar langsung melalui halaman [membersihkan daftar email](/email-list-cleaning) untuk pekerjaan manual yang cepat.',
    },
    {
      title: 'Alur pengayaan data kontak',
      body: 'Jalankan pemeriksaan kotak masuk otomatis setiap kali alat SDR inbound atau alat pengayaan outbound menemukan email perusahaan baru. Dengan begitu, tim sales hanya menghubungi alamat yang sudah diverifikasi.',
    },
    {
      title: 'Otomatisasi alur kerja',
      body: 'Hubungkan endpoint verifikasi kami langsung ke Zapier, n8n, Make, dan alur kerja webhook melalui halaman [integrasi](/integrations) kami.',
    },
    {
      title: 'Agen AI melalui MCP',
      body: 'Biarkan Claude, ChatGPT, Cursor, dan agen AI buatan Anda memverifikasi kontak langsung saat percakapan dengan [server MCP](/mcp) kami.',
    },
    {
      title: 'Validasi formulir pendaftaran',
      body: 'Ingin mengecek alamat saat pengguna mengetiknya di formulir pendaftaran dan formulir pengumpulan kontak? Lihat [API validasi email](/email-validation-api) kami yang dibuat untuk pemeriksaan formulir secara real-time.',
    },
  ],

  codeTitle: 'Contoh kode',
  codeIntro: 'Potongan kode sisi server untuk pemeriksaan tunggal dan massal. Simpan API key Anda di environment variable.',
  nodeLabel: 'Verifikasi tunggal: Node.js (fetch)',
  pythonLabel: 'Verifikasi tunggal: Python (requests)',
  serverSideOnly: 'hanya sisi server',
  bulkTitle: 'Alur massal: kirim, polling, dan ambil hasil',
  bulkIntro: 'Mengirim tugas batch cukup dengan satu panggilan. Lakukan polling setiap 10 sampai 15 detik sampai status tugas menjadi {0}.',

  pricingTitle: 'Harga API verifikasi email',
  pricingIntro:
    'Harga bayar sesuai pemakaian, tanpa ikatan bulanan. Satu kredit memverifikasi satu alamat. Pada pemeriksaan API tunggal, pemeriksaan catch-all sudah termasuk dalam 1 kredit yang sama. Untuk tugas batch massal, verifikasi standar dikenai 1 kredit per alamat, dan pemeriksaan mendalam pada baris catch-all dikenai 1 kredit per alamat catch-all yang dicek. Kredit tidak pernah kedaluwarsa, dan kredit untuk hasil tidak diketahui dikembalikan secara otomatis.',
  pricingNote: 'Butuh volume perusahaan yang lebih besar? Lihat semua [paket harga](/pricing) kami.',

  limitsTitle: 'Batas permintaan dan error',
  limitsIntro:
    'Batas permintaan standar berlaku per API key. Status batas permintaan dikembalikan di setiap permintaan melalui header standar:{0} dan{1}.',
  limitsCardTitle: 'Batas permintaan per jendela 15 menit',
  limitLabels: ['Pemeriksaan tunggal (/v1/verify)', 'Pembuatan tugas batch', 'Pembuatan tugas catch-all', 'Polling tugas dan hasil'],
  limitUnit: '{n} permintaan / 15 menit',
  errorsCardTitle: 'Kode error status HTTP',
  errors: [
    'Format tidak valid atau body JSON rusak.',
    'API key tidak ada, kedaluwarsa, atau tidak valid.',
    'Saldo kredit akun tidak cukup.',
    'ID tugas yang diminta tidak ada.',
    'Bentrok payload pada idempotency key.',
    'Hasil tugas batch kedaluwarsa setelah 48 jam.',
    'Batas permintaan terlampaui.',
  ],
  errorsNote:
    'Struktur respons error dan deskripsi payload yang rinci tersedia di [dokumentasi error API](/public/docs).',

  reviewsTitle: 'Kata pelanggan',
  reviewsIntro: 'Masukan asli dari tim engineering, sales, dan growth yang memakai Giggal.ai.',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'Pengulas G2 terverifikasi',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'Pengulas SourceForge',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Pengulas Product Hunt',
    },
  ],

  faqTitle: 'FAQ API verifikasi email',
  faqIntro: 'Pertanyaan teknis umum tentang autentikasi, pemeriksaan kotak masuk, dan penanganan catch-all.',
  faqs: [
    {
      q: 'Apakah ada API verifikasi email gratis?',
      a: 'Ada. Setiap akun baru langsung mendapat 1.000 kredit gratis saat mendaftar, tanpa kartu kredit. Anda bisa membuat API key di dashboard developer dan langsung mengirim permintaan verifikasi. Kredit gratis tidak pernah kedaluwarsa dan memberi akses penuh ke semua endpoint, termasuk pemeriksaan kotak masuk lengkap dan pemeriksaan catch-all yang mendalam.',
    },
    {
      q: 'Bagaimana API mengecek alamat tanpa mengirim email?',
      a: 'API mengecek apakah kotak masuknya ada. API menjalankan pencarian DNS dan MX, terhubung ke server email tujuan, lalu mengecek apakah kotak masuk tersebut ada dan bisa menerima email. Koneksi ditutup dengan benar sebelum ada pesan yang dikirim, jadi penerima tidak pernah menerima email.',
    },
    {
      q: 'Bagaimana alamat catch-all ditangani?',
      a: 'Pada domain catch-all, server email biasa melaporkan bahwa setiap alamat bisa diterima. Akibatnya, alat biasa memberi hasil "berisiko" atau "tidak diketahui". Giggal mengecek apakah kotak masuknya ada dan memberi hasil valid atau tidak valid dengan catch_all_score dari 0 sampai 100. Dengan begitu Anda tidak membuang kontak sungguhan.',
    },
    {
      q: 'Apa arti "tidak diketahui", dan apakah saya dikenai biaya?',
      a: 'Status "tidak diketahui" muncul jika server email tujuan tidak memberi jawaban yang jelas dalam batas waktu kami, biasanya karena greylisting yang ketat atau gangguan server sementara. Anda tidak pernah ditagih untuk jawaban yang tidak jelas. Kredit untuk setiap verifikasi dengan status tidak diketahui dikembalikan ke saldo akun Anda secara otomatis.',
    },
    {
      q: 'Berapa banyak email yang bisa saya verifikasi per permintaan?',
      a: 'Permintaan verifikasi tunggal mengecek satu email secara sinkron per panggilan, dengan respons JSON langsung. Untuk verifikasi daftar, endpoint API massal kami menerima hingga 50.000 alamat email per tugas batch secara asinkron. Anda bisa memantau progres melalui polling tugas dan mengambil hasil per halaman setelah pemrosesan selesai.',
    },
    {
      q: 'Bisakah saya memverifikasi email dari Claude, ChatGPT, atau Cursor?',
      a: 'Bisa. Giggal.ai menyediakan server MCP (Model Context Protocol) remote resmi di https://mcp.giggal.ai/mcp. Claude dan ChatGPT terhubung ke server ini melalui OAuth tanpa API key. Untuk alur kerja developer lokal di Cursor, VS Code, dan klien lain, Anda bisa mengatur server lokal giggal-mcp dengan API key Anda untuk memverifikasi alamat langsung dari editor.',
    },
    {
      q: 'Apa beda API verifikasi email dan API validasi email?',
      a: 'API verifikasi email menilai apakah kotak masuk benar-benar ada. API ini berkomunikasi langsung dengan server email tujuan, mengecek DNS record, dan mengecek alamat catch-all di daftar sales dan database pelanggan. API validasi email berfokus pada pemeriksaan real-time di formulir pendaftaran untuk mengecek format, mengenali domain email sekali pakai, dan memblokir akun palsu saat formulir dikirim. Jika Anda butuh perlindungan formulir, lihat API validasi email kami.',
    },
    {
      q: 'Apa yang perlu diperhatikan saat memilih API verifikasi email?',
      a: 'Perhatikan tiga hal: pemeriksaan catch-all yang sungguhan agar Anda tidak kehilangan hingga 30% kontak B2B ke kelompok "berisiko", kebijakan tagihan yang jelas dengan pengembalian kredit otomatis untuk hasil tidak diketahui, dan harga per verifikasi yang jelas tanpa biaya berulang tersembunyi atau minimum bulanan.',
    },
  ],

  ctaHeadline: 'Mulai verifikasi email dalam beberapa menit',
}

// Italian, "tu". Status and field values (deliverable, valid, invalid) are API data
// and stay in English. Review quotes stay as written.
const it: VerificationApiStrings = {
  metaTitle: 'API di verifica email che risolve i catch-all | Giggal.ai',
  ogTitle: 'API di verifica email con risoluzione dei catch-all',
  description:
    'API di verifica email in tempo reale: controlla se ogni casella esiste e risolve i catch-all in un JSON. Job fino a 50.000. 1.000 crediti gratuiti.',
  ogLocale: 'it_IT',
  ogAlt: 'API di verifica email di Giggal.ai',
  crumb: 'API di verifica email',
  appName: 'Giggal.ai API di verifica email',

  h1Lead: 'API di verifica email che',
  h1Highlight: 'risolve anche gli indirizzi catch-all',
  heroIntro:
    'Controlla se una casella esiste con una sola chiamata REST. Sui domini catch-all, dove la maggior parte delle API si ferma a "accept-all" o "a rischio", ricevi un risultato valido o non valido nella stessa risposta. La nostra API di verifica email dà ai team di sviluppo dati JSON puliti per proteggere la reputazione del mittente in tutti i flussi di outreach.',
  quickTestLabel: 'Test rapido',
  heroCta: 'Ottieni una chiave API gratuita',
  heroDocsCta: 'Leggi la documentazione API',
  heroNote: '1.000 crediti gratuiti, senza carta. I crediti non scadono mai.',

  ratings: {
    reviews: (count) => `${count} recensioni`,
    ratedAria: (rating, platform) => `Valutazione di Giggal.ai su ${platform}: ${rating.replace('.', ',')} su 5`,
    decimalComma: true,
  },
  awards: {
    headingLead: 'Giggal.ai è stato nominato',
    headingRest: 'Leader su SourceForge e Slashdot',
    showLabel: 'Mostra {badge}',
  },

  returnsTitle: 'Cosa restituisce una chiamata API',
  returnsIntro:
    'Una sola chiamata restituisce tutti i dati di consegna. Ricevi lo stato di consegna principale, la valutazione del rischio, un punteggio numerico di consegna, gli attributi della casella e i risultati catch-all nella stessa risposta.',
  jsonLabel: 'Risposta JSON',
  statusTitle: 'Come gestire i valori di stato della risposta',
  statusIntro:
    'Lo stato di consegna principale arriva nel campo {0}. Ecco come la tua applicazione backend deve interpretare e instradare ogni valore:',
  thStatus: 'Stato',
  thMeaning: 'Significato',
  thAction: 'Azione consigliata',
  statusRows: [
    {
      meaning: 'Il server di posta di destinazione ha accettato il destinatario durante la connessione. La casella è attiva.',
      action: 'Puoi inviare. Includi l\'indirizzo nelle principali campagne di outreach.',
    },
    {
      meaning: 'La casella non esiste, la sintassi non è valida, il dominio non ha record MX oppure il dominio è usa e getta.',
      action: 'Non inviare. Rimuovi l\'indirizzo dalle campagne per evitare hard bounce.',
    },
    {
      meaning: 'Risposta del server non conclusiva, di solito per greylisting o per timeout della connessione.',
      action: 'Ricontrolla più tardi. I crediti usati per le risposte sconosciute vengono rimborsati in automatico.',
    },
  ],

  catchAllTitle: 'Indirizzi catch-all risolti nella stessa chiamata',
  catchAllParas: [
    'I controlli standard falliscono sui domini catch-all. Quando il server di posta di un\'azienda accetta ogni indirizzo in arrivo, gli strumenti standard ricevono una risposta positiva sia per le caselle reali sia per gli errori di battitura. Non potendo verificare oltre, la maggior parte segna l\'indirizzo come "a rischio" o "accept-all" e lascia a te la decisione.',
    'Circa il 30% di una tipica lista B2B si trova su domini catch-all o su domini dietro gateway di sicurezza (SEG) come Proofpoint e Mimecast. Eliminarli significa perdere acquirenti reali. Inviare senza verifica causa picchi di bounce.',
    'Il nostro motore di verifica esegue la risoluzione approfondita dei catch-all nella stessa chiamata. Controlla se la casella esiste e restituisce {0} ("valid" o "invalid") e {1} da 0 a 100. Approfondisci nelle nostre guide sulla [verifica catch-all](/catch-all-verification) e sul controllo delle caselle dietro i [gateway di sicurezza](/seg-email-verification).',
  ],
  oldApiLabel: 'API di verifica tradizionale',
  oldApiSub: 'Si arrende sui domini accept-all',
  oldApiNote: 'Il dubbio passa al tuo team. Invii e rischi molti bounce, oppure scarti potenziali acquirenti validi.',
  ourApiLabel: 'API di Giggal.ai',
  ourApiSub: 'Risolve i catch-all nella stessa chiamata',
  ourApiNote: 'Casella attiva confermata. Tieni i tuoi contatti catch-all reali e proteggi la reputazione del mittente.',

  endpointsTitle: 'Endpoint per controlli singoli, in blocco e catch-all',
  endpointsIntro:
    'Che tu debba controllare un solo contatto o verificare liste grandi, la nostra API per verificare le email ha endpoint pensati per prestazioni e affidabilità.',
  endpoints: [
    {
      badge: '1 credito',
      title: 'Verifica di una singola email',
      body: 'Verifica sincrona di un singolo indirizzo email. Controlla se l\'indirizzo esiste, esegue la diagnostica del dominio e risolve gli indirizzi catch-all nella stessa chiamata. Restituisce un risultato JSON completo.',
      link: 'Vedi la documentazione dell\'endpoint',
    },
    {
      badge: 'Fino a 50.000 email',
      title: 'Verifica email in blocco',
      body: 'Elaborazione asincrona fino a 50.000 indirizzi per job. Rimuove sul server i duplicati e la sintassi non valida. Supporta l\'header {0} per evitare doppi addebiti.',
      link: 'Vedi la documentazione dei batch',
    },
    {
      badge: 'Paginato',
      title: 'Polling del job e risultati',
      body: 'Controlla l\'avanzamento del job con {0} ogni 10-15 secondi. Recupera i risultati paginati fino a 500 record per pagina. I risultati restano salvati in modo sicuro per 48 ore.',
      link: 'Vedi la documentazione del polling',
    },
    {
      badge: '1 credito per indirizzo',
      title: 'Risoluzione catch-all in blocco',
      body: 'Esegui la risoluzione approfondita dei catch-all sugli indirizzi segnalati come catch-all in un job in blocco completato. Scarica i risultati in un CSV pulito con colonne di punteggio e stato.',
      link: 'Vedi la documentazione catch-all',
    },
  ],

  flagsTitle: 'Indicatori in ogni risposta',
  flagsIntro:
    'Oltre a valida o non valida, ogni risposta include attributi dettagliati della casella per segmentare i contatti, prevenire gli abusi e applicare regole di filtro automatiche.',
  thFlag: 'Indicatore',
  thFieldPath: 'Percorso del campo',
  thDescription: 'Descrizione e uso',
  flags: [
    { name: 'Usa e getta', description: 'Identifica le caselle temporanee usa e getta. Bloccale subito per fermare gli abusi delle prove gratuite.' },
    {
      name: 'Account di ruolo',
      description: 'Rileva le caselle generiche di reparto (info@, billing@, support@). Inviale ai team CRM.',
    },
    {
      name: 'Email gratuita',
      description: 'Segnala i domini webmail per privati (gmail.com, yahoo.com) per separare le caselle personali dai contatti aziendali.',
    },
    { name: 'Catch-all', description: 'Indica se il server accetta tutta la posta. Usalo con {0} per recuperare i contatti validi.' },
    {
      name: 'Alias con il più',
      description: 'Rileva gli indirizzi che usano alias con il segno più (user+tag@). Impedisce la creazione di più account da parte della stessa persona.',
    },
    { name: 'Casella piena', description: 'Indica che la quota di spazio è stata superata. La posta inviata qui genererà un soft bounce.' },
    { name: 'No-reply', description: 'Segnala gli indirizzi di invio massivo che nessuno legge. Non inviare qui messaggi di outreach che chiedono una risposta.' },
    {
      name: 'Controllo blacklist',
      description: 'Valuta il dominio e gli IP del server nelle principali liste DNSBL, con punteggi di reputazione.',
    },
  ],

  useCasesTitle: 'Dove i team usano l\'API di verifica email',
  useCasesIntro: 'I nostri endpoint si collegano direttamente a pipeline di dati, flussi CRM e database.',
  useCases: [
    {
      title: 'Sincronizzazione con CRM e data warehouse',
      body: 'Verifica i dati dei contatti in modo continuo prima di sincronizzarli con Salesforce, HubSpot o Snowflake. Pulisci i record vecchi a intervalli programmati e tieni corretti i dati dei contatti.',
    },
    {
      title: 'Pulizia delle liste per le campagne',
      body: 'Pulisci le liste email prima dei grandi invii di outreach. Puoi anche caricare le liste direttamente nella nostra interfaccia di [pulizia lista email](/email-list-cleaning) per un lavoro manuale rapido.',
    },
    {
      title: 'Pipeline di arricchimento dei lead',
      body: 'Avvia controlli automatici della casella ogni volta che i tuoi strumenti per SDR inbound o di arricchimento outbound trovano nuove email aziendali, così i commerciali contattano solo indirizzi verificati.',
    },
    {
      title: 'Automazione dei flussi di lavoro',
      body: 'Collega i nostri endpoint di verifica direttamente a flussi Zapier, n8n, Make e webhook tramite la nostra pagina delle [integrazioni](/integrations).',
    },
    {
      title: 'Agenti AI tramite MCP',
      body: 'Permetti a Claude, ChatGPT, Cursor e ai tuoi agenti AI di verificare i contatti durante le conversazioni con il nostro [server MCP](/mcp).',
    },
    {
      title: 'Validazione dei moduli di iscrizione',
      body: 'Vuoi controllare gli indirizzi mentre gli utenti li scrivono nei moduli di iscrizione e di raccolta lead? Scopri la nostra [API di validazione email](/email-validation-api), pensata per i controlli in tempo reale nei moduli.',
    },
  ],

  codeTitle: 'Esempi di codice',
  codeIntro: 'Snippet lato server per controlli singoli e in blocco. Tieni la tua chiave API nelle variabili d\'ambiente.',
  nodeLabel: 'Verifica singola: Node.js (fetch)',
  pythonLabel: 'Verifica singola: Python (requests)',
  serverSideOnly: 'solo lato server',
  bulkTitle: 'Flusso in blocco: invia, controlla e scarica i risultati',
  bulkIntro: 'Per inviare un job batch basta una chiamata. Controlla ogni 10-15 secondi finché lo stato del job diventa {0}.',

  pricingTitle: 'Prezzi dell\'API di verifica email',
  pricingIntro:
    'Prezzi semplici a consumo, senza vincoli mensili. Un credito verifica un indirizzo. Nei controlli API singoli la risoluzione catch-all è inclusa nello stesso credito. Nei job batch in blocco la verifica standard costa 1 credito per indirizzo, e la verifica approfondita delle righe catch-all costa 1 credito per ogni indirizzo catch-all controllato. I crediti non scadono mai e i risultati sconosciuti vengono rimborsati in automatico.',
  pricingNote: 'Ti serve un volume più alto per la tua azienda? Vedi tutte le nostre [fasce di prezzo](/pricing).',

  limitsTitle: 'Limiti di richiesta ed errori',
  limitsIntro:
    'Per ogni chiave API valgono limiti di richiesta standard. Lo stato del limite viene restituito in tutte le richieste tramite header standard:{0} e{1}.',
  limitsCardTitle: 'Limiti per finestra di 15 minuti',
  limitLabels: ['Controlli singoli (/v1/verify)', 'Creazione di job batch', 'Creazione di job catch-all', 'Polling dei job e risultati'],
  limitUnit: '{n} richieste / 15 min',
  errorsCardTitle: 'Codici di errore HTTP',
  errors: [
    'Sintassi non valida o corpo JSON malformato.',
    'Chiave API mancante, scaduta o non valida.',
    'Saldo crediti dell\'account insufficiente.',
    'L\'ID del job richiesto non esiste.',
    'Conflitto sulla chiave di idempotenza.',
    'I risultati del job batch sono scaduti dopo 48 ore.',
    'Limite di richieste superato.',
  ],
  errorsNote:
    'I formati dettagliati delle risposte di errore e le descrizioni dei payload sono nella [documentazione degli errori API](/public/docs).',

  reviewsTitle: 'Cosa dicono i clienti',
  reviewsIntro: 'Opinioni reali dei team di sviluppo, vendite e growth che usano Giggal.ai.',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'Recensione verificata su G2',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'Recensione su SourceForge',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Recensione su Product Hunt',
    },
  ],

  faqTitle: 'Domande frequenti sull\'API di verifica email',
  faqIntro: 'Domande tecniche comuni su autenticazione, controllo delle caselle e gestione dei catch-all.',
  faqs: [
    {
      q: 'Esiste un\'API di verifica email gratuita?',
      a: 'Sì. Ogni nuovo account riceve subito 1.000 crediti gratuiti alla registrazione, senza carta di credito. Puoi generare una chiave API nella dashboard sviluppatore e iniziare subito a inviare richieste di verifica. I crediti gratuiti non scadono mai e danno accesso completo a tutti gli endpoint, compresi il controllo completo della casella e la risoluzione approfondita dei catch-all.',
    },
    {
      q: 'Come fa l\'API a controllare un indirizzo senza inviare un\'email?',
      a: 'L\'API controlla se la casella esiste. Esegue lookup DNS e MX, si collega al server di posta di destinazione e controlla se quella casella esiste e può ricevere posta. La connessione viene chiusa in modo pulito prima che venga trasmesso qualsiasi messaggio, quindi il destinatario non riceve mai un\'email.',
    },
    {
      q: 'Come vengono gestiti gli indirizzi catch-all?',
      a: 'Sui domini catch-all un server di posta standard dichiara accettabile ogni indirizzo, e per questo gli strumenti comuni restituiscono "a rischio" o "sconosciuta". Giggal controlla se la casella esiste e restituisce un risultato valido o non valido con un catch_all_score da 0 a 100, così non scarti contatti reali.',
    },
    {
      q: 'Cosa significa "sconosciuta" e mi viene addebitato?',
      a: 'Lo stato "sconosciuta" compare quando il server di posta di destinazione non dà una risposta chiara entro il nostro tempo limite, di solito per un greylisting aggressivo o per interruzioni temporanee del server. Non paghi mai le risposte non conclusive: i crediti usati per qualsiasi verifica con stato sconosciuto tornano in automatico sul saldo del tuo account.',
    },
    {
      q: 'Quante email posso verificare per richiesta?',
      a: 'Le richieste di verifica singola controllano un\'email per chiamata, in modo sincrono e con una risposta JSON diretta. Per le liste, il nostro endpoint in blocco accetta fino a 50.000 indirizzi email per job, in modo asincrono. Puoi seguire l\'avanzamento con il polling del job e recuperare i risultati paginati quando l\'elaborazione è finita.',
    },
    {
      q: 'Posso verificare le email da Claude, ChatGPT o Cursor?',
      a: 'Sì. Giggal.ai gestisce un server MCP (Model Context Protocol) remoto ufficiale su https://mcp.giggal.ai/mcp. Claude e ChatGPT si collegano al server tramite OAuth, senza chiave API. Per i flussi di sviluppo locali in Cursor, VS Code e altri client, puoi configurare il server locale giggal-mcp con la tua chiave API e verificare gli indirizzi direttamente dal tuo editor.',
    },
    {
      q: 'Che differenza c\'è tra un\'API di verifica email e un\'API di validazione email?',
      a: 'Un\'API di verifica email controlla se una casella esiste davvero: comunica direttamente con i server di posta di destinazione, controlla i record DNS e risolve gli indirizzi catch-all in liste commerciali e database di clienti. Un\'API di validazione email si concentra sui controlli in tempo reale nei moduli di iscrizione: verifica il formato, riconosce i domini usa e getta e blocca gli account falsi all\'invio del modulo. Se devi proteggere dei moduli, scopri la nostra API di validazione email.',
    },
    {
      q: 'Cosa cercare in un\'API di verifica email?',
      a: 'Cerca tre cose: una vera risoluzione dei catch-all, per non perdere fino al 30% dei tuoi contatti B2B nel gruppo "a rischio"; regole di addebito chiare, con rimborso automatico dei risultati sconosciuti; e un prezzo chiaro per verifica, senza costi ricorrenti nascosti né minimi mensili.',
    },
  ],

  ctaHeadline: 'Inizia a verificare le email in pochi minuti',
}

// German, "Sie". Status and field values (deliverable, valid, invalid) are API data
// and stay in English. Review quotes stay as written.
const de: VerificationApiStrings = {
  metaTitle: 'E-Mail-Verifizierungs-API mit Catch-all-Prüfung | Giggal.ai',
  ogTitle: 'E-Mail-Verifizierungs-API mit Catch-all-Prüfung',
  description:
    'E-Mail-Verifizierungs-API in Echtzeit: prüft, ob jedes Postfach existiert, mit Catch-all-Prüfung in einer JSON-Antwort. Bulk bis 50.000. 1.000 Credits gratis.',
  ogLocale: 'de_DE',
  ogAlt: 'Giggal.ai E-Mail-Verifizierungs-API',
  crumb: 'E-Mail-Verifizierungs-API',
  appName: 'Giggal.ai E-Mail-Verifizierungs-API',

  h1Lead: 'E-Mail-Verifizierungs-API, die auch',
  h1Highlight: 'Catch-all-Adressen prüft',
  heroIntro:
    'Prüfen Sie mit einem einzigen REST-Aufruf, ob ein Postfach existiert. Auf Catch-all-Domains, bei denen die meisten APIs bei "accept-all" oder "riskant" stehen bleiben, erhalten Sie in derselben Antwort das Ergebnis gültig oder ungültig. Unsere E-Mail-Verifizierungs-API liefert Entwicklerteams saubere JSON-Daten, damit die Absenderreputation in allen Akquise-Pipelines geschützt bleibt.',
  quickTestLabel: 'Schnelltest',
  heroCta: 'Kostenlosen API-Key holen',
  heroDocsCta: 'API-Referenz lesen',
  heroNote: '1.000 kostenlose Credits, ohne Karte. Credits verfallen nie.',

  ratings: {
    reviews: (count) => `${count} Bewertungen`,
    ratedAria: (rating, platform) => `Giggal.ai mit ${rating.replace('.', ',')} von 5 auf ${platform} bewertet`,
    decimalComma: true,
  },
  awards: {
    headingLead: 'Giggal.ai ist ausgezeichnet als',
    headingRest: 'Leader auf SourceForge und Slashdot',
    showLabel: '{badge} anzeigen',
  },

  returnsTitle: 'Was ein API-Aufruf zurückgibt',
  returnsIntro:
    'Ein einziger Aufruf liefert alle Daten zur Zustellbarkeit. Sie erhalten den Zustellstatus, die Risikobewertung, einen numerischen Zustellbarkeits-Score, die Attribute des Postfachs und die Catch-all-Ergebnisse in derselben Antwort.',
  jsonLabel: 'JSON-Antwort',
  statusTitle: 'So behandeln Sie die Statuswerte der Antwort',
  statusIntro:
    'Der wichtigste Zustellstatus steht im Feld {0}. So sollte Ihre Backend-Anwendung jeden Wert auswerten und weiterleiten:',
  thStatus: 'Status',
  thMeaning: 'Bedeutung',
  thAction: 'Empfohlene Aktion',
  statusRows: [
    {
      meaning: 'Der Ziel-Mailserver hat den Empfänger in der Verbindung angenommen. Das Postfach ist aktiv.',
      action: 'Versand ist sicher. In die wichtigsten Akquise-Kampagnen aufnehmen.',
    },
    {
      meaning: 'Das Postfach existiert nicht, die Syntax ist ungültig, die Domain hat keine MX-Einträge oder die Domain ist eine Wegwerf-Domain.',
      action: 'Nicht senden. Aus den Kampagnen entfernen, um Hard Bounces zu vermeiden.',
    },
    {
      meaning: 'Keine eindeutige Antwort des Servers, meist wegen Greylisting oder einer Zeitüberschreitung der Verbindung.',
      action: 'Später erneut prüfen. Credits für unbekannte Antworten werden automatisch erstattet.',
    },
  ],

  catchAllTitle: 'Catch-all-Adressen im selben Aufruf geprüft',
  catchAllParas: [
    'Normale Prüfungen scheitern an Catch-all-Domains. Wenn der Mailserver eines Unternehmens jede eingehende Adresse annimmt, erhalten normale Tools für echte Postfächer und für Tippfehler dieselbe positive Antwort. Weil sie nicht weiter prüfen können, markieren die meisten Tools die Adresse als "riskant" oder "accept-all" und überlassen Ihnen die Entscheidung.',
    'Rund 30 % einer typischen B2B-Liste liegen auf Catch-all-Domains oder auf Domains hinter Secure Email Gateways (SEGs) wie Proofpoint und Mimecast. Wer diese Adressen löscht, verliert echte Käufer. Wer ungeprüft sendet, riskiert viele Bounces auf einmal.',
    'Unsere Prüf-Engine führt die gründliche Catch-all-Prüfung im selben Aufruf aus. Sie prüft, ob das Postfach existiert, und liefert {0} ("valid" oder "invalid") und {1} von 0 bis 100. Mehr dazu in unseren Ratgebern zur [Catch-all-Verifizierung](/catch-all-verification) und zur Prüfung von Postfächern hinter [Secure Email Gateways](/seg-email-verification).',
  ],
  oldApiLabel: 'Klassische Verifizierungs-API',
  oldApiSub: 'Gibt bei Accept-all-Domains auf',
  oldApiNote: 'Die Unsicherheit landet bei Ihrem Team. Sie senden und riskieren viele Bounces, oder Sie verwerfen gültige potenzielle Käufer.',
  ourApiLabel: 'Giggal.ai API',
  ourApiSub: 'Prüft Catch-all-Adressen im selben Aufruf',
  ourApiNote: 'Aktives Postfach bestätigt. Behalten Sie Ihre echten Catch-all-Leads und schützen Sie Ihre Absenderreputation.',

  endpointsTitle: 'Endpunkte für Einzel-, Bulk- und Catch-all-Prüfungen',
  endpointsIntro:
    'Ob Sie einen einzelnen Kontakt prüfen oder große Listen verifizieren: Unsere API zur E-Mail-Prüfung bietet passende Endpunkte für Leistung und Zuverlässigkeit.',
  endpoints: [
    {
      badge: '1 Credit',
      title: 'Einzelne E-Mail prüfen',
      body: 'Synchrone Prüfung einer einzelnen E-Mail-Adresse. Prüft, ob die Adresse existiert, analysiert die Domain und prüft Catch-all-Adressen im selben Aufruf. Liefert ein vollständiges JSON-Ergebnis.',
      link: 'Endpunkt-Doku ansehen',
    },
    {
      badge: 'Bis zu 50.000 E-Mails',
      title: 'E-Mail-Massenprüfung',
      body: 'Asynchrone Verarbeitung von bis zu 50.000 Adressen pro Job. Entfernt Duplikate und ungültige Syntax auf dem Server. Unterstützt den Header {0}, um doppelte Abbuchungen zu vermeiden.',
      link: 'Batch-Doku ansehen',
    },
    {
      badge: 'Seitenweise',
      title: 'Job-Status und Ergebnisse',
      body: 'Fragen Sie den Fortschritt des Jobs alle 10 bis 15 Sekunden mit {0} ab. Rufen Sie die Ergebnisse seitenweise ab, bis zu 500 Einträge pro Seite. Die Ergebnisse werden 48 Stunden lang sicher gespeichert.',
      link: 'Polling-Doku ansehen',
    },
    {
      badge: '1 Credit pro Adresse',
      title: 'Catch-all-Prüfung für Bulk-Jobs',
      body: 'Führen Sie die gründliche Catch-all-Prüfung für alle Adressen aus, die ein abgeschlossener Bulk-Job als Catch-all markiert hat. Laden Sie die Ergebnisse als saubere CSV-Datei mit Score- und Statusspalten herunter.',
      link: 'Catch-all-Doku ansehen',
    },
  ],

  flagsTitle: 'Kennzeichnungen in jeder Antwort',
  flagsIntro:
    'Neben gültig oder ungültig enthält jede Antwort genaue Attribute des Postfachs. Damit können Sie Leads segmentieren, Missbrauch verhindern und automatische Filterregeln anwenden.',
  thFlag: 'Kennzeichnung',
  thFieldPath: 'Feldpfad',
  thDescription: 'Beschreibung und Nutzung',
  flags: [
    { name: 'Wegwerfadresse', description: 'Erkennt temporäre Wegwerf-Postfächer. Sofort blockieren, um Missbrauch von Testzugängen zu stoppen.' },
    {
      name: 'Rollen-Adresse',
      description: 'Erkennt allgemeine Abteilungs-Postfächer (info@, billing@, support@). An CRM-Teams weiterleiten.',
    },
    {
      name: 'Freemail',
      description: 'Kennzeichnet Webmail-Domains für Privatnutzer (gmail.com, yahoo.com), um private Postfächer von Firmenkontakten zu trennen.',
    },
    { name: 'Catch-all', description: 'Zeigt, ob der Server alle E-Mails annimmt. Zusammen mit {0} nutzen, um gültige Leads zu retten.' },
    {
      name: 'Plus-Adresse',
      description: 'Erkennt Adressen mit Alias per Plus-Zeichen (user+tag@). Verhindert, dass eine Person mehrere Konten anlegt.',
    },
    { name: 'Postfach voll', description: 'Zeigt, dass der Speicherplatz überschritten ist. E-Mails an diese Adresse erzeugen einen Soft Bounce.' },
    { name: 'No-Reply', description: 'Kennzeichnet Versandadressen, die niemand liest. Senden Sie hierhin keine Akquise-Nachrichten, auf die Sie eine Antwort erwarten.' },
    {
      name: 'Blacklist-Prüfung',
      description: 'Prüft Domain und Server-IPs in den wichtigsten DNSBL-Listen, mit Reputations-Scores.',
    },
  ],

  useCasesTitle: 'Wo Teams die E-Mail-Verifizierungs-API einsetzen',
  useCasesIntro: 'Unsere Endpunkte lassen sich direkt an Daten-Pipelines, CRM-Workflows und Datenbanken anbinden.',
  useCases: [
    {
      title: 'Abgleich mit CRM und Data Warehouse',
      body: 'Prüfen Sie Kontaktdaten laufend, bevor Sie sie mit Salesforce, HubSpot oder Snowflake abgleichen. Bereinigen Sie veraltete Einträge nach Zeitplan und halten Sie die Kontaktdaten korrekt.',
    },
    {
      title: 'Listenbereinigung vor Kampagnen',
      body: 'Bereinigen Sie E-Mail-Listen vor großen Akquise-Aussendungen. Sie können Listen auch direkt in unserer Oberfläche zum [Bereinigen von E-Mail-Listen](/email-list-cleaning) hochladen, für schnelle manuelle Abläufe.',
    },
    {
      title: 'Pipelines zur Lead-Anreicherung',
      body: 'Starten Sie automatische Postfach-Prüfungen, sobald Ihre Tools für Inbound-SDR oder Outbound-Anreicherung neue Firmen-E-Mails finden. So kontaktiert Ihr Vertrieb nur geprüfte Adressen.',
    },
    {
      title: 'Workflow-Automatisierung',
      body: 'Verbinden Sie unsere Prüf-Endpunkte direkt mit Workflows in Zapier, n8n, Make und per Webhook, über unsere Seite zu den [Integrationen](/integrations).',
    },
    {
      title: 'KI-Agenten über MCP',
      body: 'Lassen Sie Claude, ChatGPT, Cursor und eigene KI-Agenten Kontakte direkt im Gespräch prüfen, mit unserem [MCP-Server](/mcp).',
    },
    {
      title: 'Prüfung von Anmeldeformularen',
      body: 'Sie möchten Adressen prüfen, während Nutzer sie in Anmelde- und Lead-Formulare eingeben? Nutzen Sie unsere [E-Mail-Validierungs-API](/email-validation-api), die für Echtzeit-Prüfungen in Formularen gebaut ist.',
    },
  ],

  codeTitle: 'Code-Beispiele',
  codeIntro: 'Serverseitige Beispiele für Einzel- und Bulk-Prüfungen. Speichern Sie Ihren API-Key in Umgebungsvariablen.',
  nodeLabel: 'Einzelprüfung: Node.js (fetch)',
  pythonLabel: 'Einzelprüfung: Python (requests)',
  serverSideOnly: 'nur serverseitig',
  bulkTitle: 'Bulk-Ablauf: senden, abfragen und Ergebnisse holen',
  bulkIntro: 'Für einen Batch-Job genügt ein Aufruf. Fragen Sie alle 10 bis 15 Sekunden ab, bis der Job-Status {0} lautet.',

  pricingTitle: 'Preise der E-Mail-Verifizierungs-API',
  pricingIntro:
    'Einfache Preise nach Verbrauch, ohne monatliche Bindung. Ein Credit prüft eine Adresse. Bei einzelnen API-Prüfungen ist die Catch-all-Prüfung im selben Credit enthalten. Bei Bulk-Jobs kostet die Standardprüfung 1 Credit pro Adresse, und die gründliche Prüfung der Catch-all-Zeilen kostet 1 Credit pro geprüfter Catch-all-Adresse. Credits verfallen nie, und unbekannte Ergebnisse werden automatisch erstattet.',
  pricingNote: 'Sie brauchen ein höheres Volumen für Ihr Unternehmen? Alle [Preisstufen](/pricing) finden Sie hier.',

  limitsTitle: 'Rate Limits und Fehler',
  limitsIntro:
    'Pro API-Key gelten Standard-Rate-Limits. Der Status des Limits steht bei allen Anfragen in Standard-Headern:{0} und{1}.',
  limitsCardTitle: 'Rate Limits pro 15-Minuten-Fenster',
  limitLabels: ['Einzelprüfungen (/v1/verify)', 'Batch-Jobs anlegen', 'Catch-all-Jobs anlegen', 'Job-Abfrage und Ergebnisse'],
  limitUnit: '{n} Anfragen / 15 Min.',
  errorsCardTitle: 'HTTP-Fehlercodes',
  errors: [
    'Ungültige Syntax oder fehlerhafter JSON-Body.',
    'API-Key fehlt, ist abgelaufen oder ungültig.',
    'Nicht genug Credits auf dem Konto.',
    'Die angefragte Job-ID existiert nicht.',
    'Konflikt beim Idempotency-Key.',
    'Die Ergebnisse des Batch-Jobs sind nach 48 Stunden abgelaufen.',
    'Rate Limit überschritten.',
  ],
  errorsNote:
    'Genaue Fehlerantworten und Beschreibungen der Inhalte finden Sie in der [Dokumentation zu API-Fehlern](/public/docs).',

  reviewsTitle: 'Was Kunden sagen',
  reviewsIntro: 'Echtes Feedback von Entwicklungs-, Vertriebs- und Growth-Teams, die Giggal.ai nutzen.',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'Verifizierte Bewertung auf G2',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'Bewertung auf SourceForge',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Bewertung auf Product Hunt',
    },
  ],

  faqTitle: 'Häufige Fragen zur E-Mail-Verifizierungs-API',
  faqIntro: 'Häufige technische Fragen zu Authentifizierung, Postfach-Prüfung und Catch-all-Adressen.',
  faqs: [
    {
      q: 'Gibt es eine kostenlose E-Mail-Verifizierungs-API?',
      a: 'Ja. Jedes neue Konto erhält bei der Registrierung sofort 1.000 kostenlose Credits, ohne Kreditkarte. Sie können in Ihrem Entwickler-Dashboard einen API-Key erstellen und sofort Prüfanfragen senden. Die kostenlosen Credits verfallen nie und geben vollen Zugriff auf alle Endpunkte, auch auf die vollständige Postfach-Prüfung und die gründliche Catch-all-Prüfung.',
    },
    {
      q: 'Wie prüft die API eine Adresse, ohne eine E-Mail zu senden?',
      a: 'Die API prüft, ob das Postfach existiert. Sie führt DNS- und MX-Abfragen aus, verbindet sich mit dem Ziel-Mailserver und prüft, ob genau dieses Postfach existiert und E-Mails empfangen kann. Die Verbindung wird sauber beendet, bevor eine Nachricht übertragen wird. Der Empfänger erhält also nie eine E-Mail.',
    },
    {
      q: 'Wie werden Catch-all-Adressen behandelt?',
      a: 'Auf Catch-all-Domains meldet ein normaler Mailserver jede Adresse als annehmbar. Deshalb liefern übliche Tools "riskant" oder "unbekannt". Giggal prüft, ob das Postfach existiert, und liefert gültig oder ungültig mit einem catch_all_score von 0 bis 100. So verwerfen Sie keine echten Leads.',
    },
    {
      q: 'Was bedeutet "unbekannt", und muss ich dafür zahlen?',
      a: 'Der Status "unbekannt" entsteht, wenn der Ziel-Mailserver innerhalb unseres Zeitlimits keine eindeutige Antwort gibt, meist wegen aggressiven Greylistings oder eines vorübergehenden Serverausfalls. Für unklare Antworten zahlen Sie nie: Credits für jede Prüfung mit dem Status unbekannt werden automatisch Ihrem Kontoguthaben gutgeschrieben.',
    },
    {
      q: 'Wie viele E-Mails kann ich pro Anfrage prüfen?',
      a: 'Einzelanfragen prüfen eine E-Mail pro Aufruf, synchron und mit direkter JSON-Antwort. Für Listen nimmt unser Bulk-Endpunkt bis zu 50.000 E-Mail-Adressen pro Batch-Job an, asynchron. Den Fortschritt verfolgen Sie per Job-Abfrage, und wenn die Verarbeitung fertig ist, rufen Sie die Ergebnisse seitenweise ab.',
    },
    {
      q: 'Kann ich E-Mails aus Claude, ChatGPT oder Cursor prüfen?',
      a: 'Ja. Giggal.ai betreibt einen offiziellen Remote-MCP-Server (Model Context Protocol) unter https://mcp.giggal.ai/mcp. Claude und ChatGPT verbinden sich per OAuth mit dem gehosteten Server, ohne API-Key. Für lokale Entwicklung in Cursor, VS Code und anderen Clients können Sie den lokalen Server giggal-mcp mit Ihrem API-Key einrichten und Adressen direkt im Editor prüfen.',
    },
    {
      q: 'Was ist der Unterschied zwischen einer E-Mail-Verifizierungs-API und einer E-Mail-Validierungs-API?',
      a: 'Eine E-Mail-Verifizierungs-API prüft, ob ein Postfach wirklich existiert. Sie spricht direkt mit den Ziel-Mailservern, prüft DNS-Einträge und klärt Catch-all-Adressen in Vertriebslisten und Kundendatenbanken. Eine E-Mail-Validierungs-API konzentriert sich auf Echtzeit-Prüfungen in Anmeldeformularen: Sie prüft das Format, erkennt Wegwerf-Domains und blockiert gefälschte Konten beim Absenden. Wenn Sie Formulare schützen möchten, nutzen Sie unsere E-Mail-Validierungs-API.',
    },
    {
      q: 'Worauf sollte ich bei einer E-Mail-Verifizierungs-API achten?',
      a: 'Achten Sie auf drei Punkte: eine echte Catch-all-Prüfung, damit Sie nicht bis zu 30 % Ihrer B2B-Kontakte an die Kategorie "riskant" verlieren; klare Abrechnungsregeln, die unbekannte Ergebnisse automatisch erstatten; und einen klaren Preis pro Prüfung, ohne versteckte laufende Gebühren und ohne Mindestbeträge pro Monat.',
    },
  ],

  ctaHeadline: 'In wenigen Minuten mit der E-Mail-Prüfung starten',
}

// Spanish, "tú". Status and field values (deliverable, valid, invalid) are API data
// and stay in English; the text around them is Spanish. Review quotes stay as written.
const es: VerificationApiStrings = {
  metaTitle: 'API de verificación de correo que resuelve catch-all | Giggal.ai',
  ogTitle: 'API de verificación de correo con resolución catch-all',
  description:
    'API de verificación de correo en tiempo real: comprueba si cada buzón existe y resuelve los catch-all en un JSON. Lotes de hasta 50.000. 1.000 créditos gratis.',
  ogLocale: 'es_LA',
  ogAlt: 'API de verificación de correo de Giggal.ai',
  crumb: 'API de verificación de correo',
  appName: 'Giggal.ai API de verificación de correo',

  h1Lead: 'API de verificación de correo que también',
  h1Highlight: 'resuelve las direcciones catch-all',
  heroIntro:
    'Comprueba si cualquier buzón existe con una sola llamada REST. En los dominios catch-all, donde la mayoría de las API se quedan en "accept-all" o "arriesgado", recibes un resultado válido o no válido en la misma respuesta. Nuestra API de verificación de correo da a los equipos de desarrollo datos JSON limpios para proteger la reputación de remitente en sus flujos de prospección.',
  quickTestLabel: 'Prueba rápida',
  heroCta: 'Obtén una clave de API gratis',
  heroDocsCta: 'Lee la referencia de la API',
  heroNote: '1.000 créditos gratis, sin tarjeta. Los créditos no caducan.',

  ratings: {
    reviews: (count) => `${count} reseñas`,
    ratedAria: (rating, platform) => `Giggal.ai tiene una valoración de ${rating.replace('.', ',')} sobre 5 en ${platform}`,
    decimalComma: true,
  },
  awards: {
    headingLead: 'Giggal.ai está valorado como',
    headingRest: 'Líder en SourceForge y Slashdot',
    showLabel: 'Mostrar {badge}',
  },

  returnsTitle: 'Qué devuelve una llamada a la API',
  returnsIntro:
    'Una sola llamada devuelve todos los datos de entregabilidad. Recibes el estado de entregabilidad principal, la evaluación de riesgo, una puntuación numérica de entregabilidad, los atributos del buzón y los resultados catch-all en la misma respuesta.',
  jsonLabel: 'Respuesta JSON',
  statusTitle: 'Cómo tratar los valores de estado de la respuesta',
  statusIntro:
    'El estado de entrega principal llega en el campo {0}. Así debe interpretar y enrutar cada valor tu aplicación backend:',
  thStatus: 'Estado',
  thMeaning: 'Significado',
  thAction: 'Acción recomendada',
  statusRows: [
    {
      meaning: 'El servidor de correo de destino aceptó al destinatario en la conexión. El buzón está activo.',
      action: 'Se puede enviar. Inclúyelo en las campañas principales de prospección.',
    },
    {
      meaning: 'El buzón no existe, la sintaxis no es válida, el dominio no tiene registros MX o el dominio es desechable.',
      action: 'No envíes. Elimínalo de las campañas para evitar rebotes duros.',
    },
    {
      meaning: 'Respuesta del servidor no concluyente, normalmente por greylisting o por un tiempo de espera agotado.',
      action: 'Vuelve a comprobarlo más tarde. Los créditos de las respuestas desconocidas se reembolsan automáticamente.',
    },
  ],

  catchAllTitle: 'Direcciones catch-all resueltas en la misma llamada',
  catchAllParas: [
    'Las comprobaciones normales fallan en los dominios catch-all. Cuando el servidor de correo de una empresa acepta cualquier dirección entrante, las herramientas normales reciben una respuesta positiva tanto para buzones reales como para errores de escritura. Como no pueden verificar más, la mayoría marca la dirección como "arriesgada" o "accept-all" y te deja la decisión.',
    'Alrededor del 30 % de una lista B2B típica está en dominios catch-all o en dominios protegidos por gateways de seguridad (SEG) como Proofpoint y Mimecast. Si los borras, descartas compradores reales. Si envías sin verificar, los rebotes se disparan.',
    'Nuestro motor de verificación resuelve los catch-all a fondo en la misma llamada. Comprueba si el buzón existe y devuelve {0} ("valid" o "invalid") y {1} de 0 a 100. Más información en nuestras guías sobre la [verificación catch-all](/catch-all-verification) y sobre cómo comprobar buzones protegidos por [gateways de seguridad](/seg-email-verification).',
  ],
  oldApiLabel: 'API de verificación tradicional',
  oldApiSub: 'Se rinde ante los dominios accept-all',
  oldApiNote: 'La duda pasa a tu equipo. Envías y te arriesgas a muchos rebotes, o descartas compradores potenciales válidos.',
  ourApiLabel: 'API de Giggal.ai',
  ourApiSub: 'Resuelve los catch-all en la misma llamada',
  ourApiNote: 'Buzón activo confirmado. Conserva tus contactos catch-all reales y protege tu reputación de remitente.',

  endpointsTitle: 'Endpoints para comprobaciones individuales, masivas y catch-all',
  endpointsIntro:
    'Tanto si compruebas un contacto como si verificas listas grandes, nuestra API para verificar correos tiene endpoints diseñados para el rendimiento y la fiabilidad.',
  endpoints: [
    {
      badge: '1 crédito',
      title: 'Verificación de un correo',
      body: 'Verificación síncrona de una dirección de correo. Comprueba si la dirección existe, analiza el dominio y resuelve las direcciones catch-all en la misma llamada. Devuelve un resultado JSON completo.',
      link: 'Ver la documentación del endpoint',
    },
    {
      badge: 'Hasta 50.000 correos',
      title: 'Verificación masiva de correos',
      body: 'Procesamiento asíncrono de hasta 50.000 direcciones por trabajo. Elimina en el servidor los duplicados y la sintaxis no válida. Admite la cabecera {0} para evitar cobros dobles.',
      link: 'Ver la documentación de lotes',
    },
    {
      badge: 'Paginado',
      title: 'Consulta del trabajo y resultados',
      body: 'Consulta el progreso del trabajo con {0} cada 10 a 15 segundos. Obtén resultados paginados de hasta 500 registros por página. Los resultados se guardan de forma segura durante 48 horas.',
      link: 'Ver la documentación de consulta',
    },
    {
      badge: '1 crédito por dirección',
      title: 'Resolución catch-all masiva',
      body: 'Aplica la resolución catch-all a fondo a las direcciones marcadas como catch-all en un trabajo masivo terminado. Descarga los resultados en un CSV limpio con columnas de puntuación y estado.',
      link: 'Ver la documentación catch-all',
    },
  ],

  flagsTitle: 'Indicadores en cada respuesta',
  flagsIntro:
    'Además de válido o no válido, cada respuesta incluye atributos detallados del buzón para segmentar contactos, evitar abusos y aplicar reglas de filtrado automáticas.',
  thFlag: 'Indicador',
  thFieldPath: 'Ruta del campo',
  thDescription: 'Descripción y uso',
  flags: [
    { name: 'Desechable', description: 'Identifica buzones temporales de usar y tirar. Bloquéalos de inmediato para frenar el fraude en las pruebas gratuitas.' },
    {
      name: 'Cuenta de rol',
      description: 'Detecta buzones genéricos de departamento (info@, billing@, support@). Envíalos a los equipos de CRM.',
    },
    {
      name: 'Correo gratuito',
      description: 'Marca los dominios de webmail de consumo (gmail.com, yahoo.com) para separar los buzones personales de los contactos de empresa.',
    },
    { name: 'Catch-all', description: 'Indica si el servidor acepta todo el correo. Úsalo con {0} para recuperar contactos válidos.' },
    {
      name: 'Alias con signo más',
      description: 'Detecta direcciones con subdirecciones de alias (user+tag@). Evita que una misma persona cree varias cuentas.',
    },
    { name: 'Buzón lleno', description: 'Indica que se superó la cuota de almacenamiento. El correo enviado aquí tendrá un rebote suave.' },
    { name: 'No-reply', description: 'Marca direcciones de difusión que nadie revisa. No envíes aquí mensajes de prospección que esperan respuesta.' },
    {
      name: 'Comprobación de listas negras',
      description: 'Evalúa el dominio y las IP del servidor en las principales listas DNSBL, con puntuaciones de reputación.',
    },
  ],

  useCasesTitle: 'Dónde usan los equipos la API de verificación de correo',
  useCasesIntro: 'Nuestros endpoints se conectan directamente a flujos de datos, procesos de CRM y bases de datos.',
  useCases: [
    {
      title: 'Sincronización con CRM y almacén de datos',
      body: 'Verifica los datos de contacto de forma continua antes de sincronizarlos con Salesforce, HubSpot o Snowflake. Limpia los registros antiguos de forma programada y mantén exactos los datos de contacto.',
    },
    {
      title: 'Limpieza de listas para campañas',
      body: 'Depura las listas de correo antes de los grandes envíos de prospección. También puedes subir listas directamente en nuestra interfaz de [limpieza de listas de correo](/email-list-cleaning) para un trabajo manual rápido.',
    },
    {
      title: 'Flujos de enriquecimiento de leads',
      body: 'Lanza comprobaciones automáticas del buzón cada vez que tus herramientas de SDR inbound o de enriquecimiento outbound encuentran nuevos correos de empresa, para que los comerciales solo contacten direcciones verificadas.',
    },
    {
      title: 'Automatización de flujos de trabajo',
      body: 'Conecta nuestros endpoints de verificación directamente a flujos de Zapier, n8n, Make y webhooks desde nuestro centro de [integraciones](/integrations).',
    },
    {
      title: 'Agentes de IA con MCP',
      body: 'Permite que Claude, ChatGPT, Cursor y tus propios agentes de IA verifiquen contactos durante las conversaciones con nuestro [servidor MCP](/mcp).',
    },
    {
      title: 'Validación de formularios de registro',
      body: '¿Quieres comprobar las direcciones mientras los usuarios las escriben en formularios de registro y de captación de leads? Mira nuestra [API de validación de correo](/email-validation-api), hecha para comprobaciones en tiempo real en formularios.',
    },
  ],

  codeTitle: 'Ejemplos de código',
  codeIntro: 'Fragmentos de servidor para comprobaciones individuales y masivas. Guarda tu clave de API en variables de entorno.',
  nodeLabel: 'Verificación individual: Node.js (fetch)',
  pythonLabel: 'Verificación individual: Python (requests)',
  serverSideOnly: 'solo en el servidor',
  bulkTitle: 'Flujo masivo: enviar, consultar y obtener resultados',
  bulkIntro: 'Enviar un trabajo por lotes requiere una sola llamada. Consulta cada 10 a 15 segundos hasta que el estado del trabajo sea {0}.',

  pricingTitle: 'Precios de la API de verificación de correo',
  pricingIntro:
    'Precios sencillos de pago por uso, sin permanencia mensual. Un crédito verifica una dirección. En las comprobaciones individuales por API, la resolución catch-all está incluida en el mismo crédito. En los trabajos masivos, la verificación estándar cuesta 1 crédito por dirección, y la verificación a fondo de las filas catch-all cuesta 1 crédito por cada dirección catch-all comprobada. Los créditos no caducan y los resultados desconocidos se reembolsan automáticamente.',
  pricingNote: '¿Necesitas un volumen mayor para tu empresa? Consulta todos nuestros [planes de precios](/pricing).',

  limitsTitle: 'Límites de uso y errores',
  limitsIntro:
    'Se aplican límites de uso estándar por clave de API. El estado del límite se devuelve en todas las solicitudes mediante cabeceras estándar:{0} y{1}.',
  limitsCardTitle: 'Límites por ventana de 15 minutos',
  limitLabels: ['Comprobaciones individuales (/v1/verify)', 'Creación de trabajos por lotes', 'Creación de trabajos catch-all', 'Consulta de trabajos y resultados'],
  limitUnit: '{n} solicitudes / 15 min',
  errorsCardTitle: 'Códigos de error de estado HTTP',
  errors: [
    'Sintaxis no válida o cuerpo JSON mal formado.',
    'Clave de API ausente, caducada o no válida.',
    'Saldo de créditos insuficiente en la cuenta.',
    'El ID de trabajo solicitado no existe.',
    'Conflicto con la clave de idempotencia.',
    'Los resultados del trabajo por lotes caducaron tras 48 horas.',
    'Se superó el límite de uso.',
  ],
  errorsNote:
    'Los formatos detallados de las respuestas de error y sus descripciones están en la [documentación de errores de la API](/public/docs).',

  reviewsTitle: 'Qué dicen los clientes',
  reviewsIntro: 'Opiniones reales de equipos de desarrollo, ventas y crecimiento que usan Giggal.ai.',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'Usuario verificado de G2',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'Usuario de SourceForge',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Usuario de Product Hunt',
    },
  ],

  faqTitle: 'Preguntas frecuentes sobre la API de verificación de correo',
  faqIntro: 'Preguntas técnicas habituales sobre autenticación, comprobación de buzones y tratamiento de los catch-all.',
  faqs: [
    {
      q: '¿Hay una API de verificación de correo gratis?',
      a: 'Sí. Cada cuenta nueva recibe 1.000 créditos gratis al registrarse, sin tarjeta de crédito. Puedes generar una clave de API en tu panel de desarrollador y empezar a enviar solicitudes de verificación de inmediato. Los créditos gratis no caducan y dan acceso completo a todos los endpoints, incluidas la comprobación completa del buzón y la resolución catch-all a fondo.',
    },
    {
      q: '¿Cómo comprueba la API una dirección sin enviar un correo?',
      a: 'La API comprueba si el buzón existe. Hace consultas DNS y MX, se conecta al servidor de correo de destino y comprueba si ese buzón existe y puede recibir correo. La conexión se cierra de forma limpia antes de transmitir ningún mensaje, así que el destinatario nunca recibe un correo.',
    },
    {
      q: '¿Cómo se tratan las direcciones catch-all?',
      a: 'En los dominios catch-all, un servidor de correo normal responde que cualquier dirección es aceptable, y por eso las herramientas habituales devuelven "arriesgado" o "desconocido". Giggal comprueba si el buzón existe y devuelve un resultado válido o no válido con un catch_all_score de 0 a 100, para que no descartes contactos reales.',
    },
    {
      q: '¿Qué significa "desconocido" y me lo cobran?',
      a: 'El estado "desconocido" aparece cuando el servidor de correo de destino no da una respuesta clara dentro de nuestro tiempo límite, normalmente por un greylisting agresivo o por caídas temporales del servidor. Nunca pagas por respuestas no concluyentes: los créditos de cualquier verificación con estado desconocido se devuelven automáticamente al saldo de tu cuenta.',
    },
    {
      q: '¿Cuántos correos puedo verificar por solicitud?',
      a: 'Las solicitudes de verificación individual comprueban un correo por llamada, de forma síncrona y con una respuesta JSON directa. Para verificar listas, nuestro endpoint masivo acepta hasta 50.000 direcciones de correo por trabajo, de forma asíncrona. Puedes seguir el progreso consultando el trabajo y obtener los resultados paginados cuando termina el proceso.',
    },
    {
      q: '¿Puedo verificar correos desde Claude, ChatGPT o Cursor?',
      a: 'Sí. Giggal.ai aloja un servidor MCP (Model Context Protocol) remoto oficial en https://mcp.giggal.ai/mcp. Claude y ChatGPT se conectan al servidor alojado mediante OAuth, sin clave de API. Para flujos locales de desarrollo en Cursor, VS Code y otros clientes, puedes configurar el servidor local giggal-mcp con tu clave de API y verificar direcciones desde tu editor.',
    },
    {
      q: '¿Qué diferencia hay entre una API de verificación de correo y una API de validación de correo?',
      a: 'Una API de verificación de correo comprueba si un buzón existe: habla directamente con los servidores de correo de destino, revisa los registros DNS y resuelve las direcciones catch-all en listas de ventas y bases de datos de clientes. Una API de validación de correo se centra en comprobaciones en tiempo real en los formularios de registro: revisa el formato, detecta dominios desechables y bloquea cuentas falsas al enviar el formulario. Si necesitas proteger formularios, mira nuestra API de validación de correo.',
    },
    {
      q: '¿Qué debo buscar en una API de verificación de correo?',
      a: 'Busca tres cosas: una resolución catch-all real, para no perder hasta el 30 % de tus contactos B2B en el grupo de "arriesgados"; una facturación clara que reembolse automáticamente los resultados desconocidos; y un precio claro por verificación, sin cuotas recurrentes ocultas ni mínimos mensuales.',
    },
  ],

  ctaHeadline: 'Empieza a verificar correos en minutos',
}

// Brazilian Portuguese, "você". Status and field values (deliverable, valid, invalid)
// are API data and stay in English. Review quotes stay as written.
const ptBr: VerificationApiStrings = {
  metaTitle: 'API de verificação de e-mail que resolve catch-all | Giggal.ai',
  ogTitle: 'API de verificação de e-mail com resolução de catch-all',
  description:
    'API de verificação de e-mail em tempo real: confere se cada caixa existe e resolve catch-all em um JSON. Lotes de até 50.000. 1.000 créditos grátis.',
  ogLocale: 'pt_BR',
  ogAlt: 'API de verificação de e-mail da Giggal.ai',
  crumb: 'API de verificação de e-mail',
  appName: 'Giggal.ai API de verificação de e-mail',

  h1Lead: 'API de verificação de e-mail que também',
  h1Highlight: 'resolve os endereços catch-all',
  heroIntro:
    'Verifique se qualquer caixa existe com uma única chamada REST. Em domínios catch-all, onde a maioria das APIs para em "accept-all" ou "arriscado", você recebe um resultado válido ou inválido na mesma resposta. Nossa API de verificação de e-mail entrega aos times de engenharia dados JSON limpos para proteger a reputação de remetente em todos os fluxos de prospecção.',
  quickTestLabel: 'Teste rápido',
  heroCta: 'Gere sua chave de API grátis',
  heroDocsCta: 'Leia a referência da API',
  heroNote: '1.000 créditos grátis, sem cartão. Os créditos nunca expiram.',

  ratings: {
    reviews: (count) => `${count} avaliações`,
    ratedAria: (rating, platform) => `Giggal.ai tem nota ${rating.replace('.', ',')} de 5 no ${platform}`,
    decimalComma: true,
  },
  awards: {
    headingLead: 'A Giggal.ai é avaliada como',
    headingRest: 'Líder no SourceForge e no Slashdot',
    showLabel: 'Mostrar {badge}',
  },

  returnsTitle: 'O que uma chamada à API devolve',
  returnsIntro:
    'Uma única chamada devolve todos os dados de entregabilidade. Você recebe o status principal de entregabilidade, a avaliação de risco, uma pontuação numérica de entregabilidade, os atributos da caixa e os resultados de catch-all na mesma resposta.',
  jsonLabel: 'Resposta JSON',
  statusTitle: 'Como tratar os valores de status da resposta',
  statusIntro:
    'O status principal de entrega vem no campo {0}. Veja como a sua aplicação backend deve interpretar e encaminhar cada valor:',
  thStatus: 'Status',
  thMeaning: 'Significado',
  thAction: 'Ação recomendada',
  statusRows: [
    {
      meaning: 'O servidor de e-mail de destino aceitou o destinatário na conexão. A caixa está ativa.',
      action: 'Pode enviar. Inclua nas campanhas principais de prospecção.',
    },
    {
      meaning: 'A caixa não existe, a sintaxe é inválida, o domínio não tem registros MX ou o domínio é descartável.',
      action: 'Não envie. Remova das campanhas para evitar hard bounces.',
    },
    {
      meaning: 'Resposta inconclusiva do servidor, normalmente por greylisting ou por tempo de conexão esgotado.',
      action: 'Verifique de novo mais tarde. Os créditos das respostas desconhecidas são reembolsados automaticamente.',
    },
  ],

  catchAllTitle: 'Endereços catch-all resolvidos na mesma chamada',
  catchAllParas: [
    'As verificações comuns falham em domínios catch-all. Quando o servidor de e-mail de uma empresa aceita qualquer endereço recebido, as ferramentas comuns veem uma resposta positiva tanto para caixas reais quanto para erros de digitação. Sem conseguir verificar mais, a maioria marca o endereço como "arriscado" ou "accept-all" e deixa a decisão com você.',
    'Cerca de 30 % de uma lista B2B típica fica em domínios catch-all ou em domínios atrás de gateways de segurança (SEGs) como Proofpoint e Mimecast. Apagar esses endereços descarta compradores reais. Enviar sem verificar causa picos de bounce.',
    'Nosso motor de verificação faz a resolução completa de catch-all na mesma chamada. Ele verifica se a caixa existe para devolver {0} ("valid" ou "invalid") e {1} de 0 a 100. Saiba mais nos nossos guias sobre [verificação catch-all](/catch-all-verification) e sobre como verificar caixas atrás de [gateways de segurança](/seg-email-verification).',
  ],
  oldApiLabel: 'API de verificação tradicional',
  oldApiSub: 'Desiste dos domínios accept-all',
  oldApiNote: 'A dúvida fica com o seu time. Você envia e arrisca muitos bounces, ou descarta compradores em potencial válidos.',
  ourApiLabel: 'API da Giggal.ai',
  ourApiSub: 'Resolve catch-all na mesma chamada',
  ourApiNote: 'Caixa ativa confirmada. Mantenha seus leads catch-all reais e proteja sua reputação de remetente.',

  endpointsTitle: 'Endpoints para verificações individuais, em massa e catch-all',
  endpointsIntro:
    'Para verificar um único contato ou listas grandes, nossa API para verificar e-mails tem endpoints feitos para desempenho e confiabilidade.',
  endpoints: [
    {
      badge: '1 crédito',
      title: 'Verificação de um e-mail',
      body: 'Verificação síncrona de um único endereço de e-mail. Confere se o endereço existe, faz o diagnóstico do domínio e resolve endereços catch-all na mesma chamada. Devolve um resultado JSON completo.',
      link: 'Ver a documentação do endpoint',
    },
    {
      badge: 'Até 50.000 e-mails',
      title: 'Verificação de e-mail em massa',
      body: 'Processamento assíncrono de até 50.000 endereços por job. Remove duplicados e sintaxe inválida no servidor. Aceita o cabeçalho {0} para evitar cobrança em dobro.',
      link: 'Ver a documentação de lotes',
    },
    {
      badge: 'Paginado',
      title: 'Consulta do job e resultados',
      body: 'Consulte o progresso do job com {0} a cada 10 a 15 segundos. Obtenha resultados paginados com até 500 registros por página. Os resultados ficam guardados com segurança por 48 horas.',
      link: 'Ver a documentação de consulta',
    },
    {
      badge: '1 crédito por endereço',
      title: 'Resolução de catch-all em massa',
      body: 'Faça a resolução completa de catch-all nos endereços marcados como catch-all em um job em massa concluído. Baixe os resultados em um CSV limpo com colunas de pontuação e status.',
      link: 'Ver a documentação de catch-all',
    },
  ],

  flagsTitle: 'Indicadores em todas as respostas',
  flagsIntro:
    'Além de válido ou inválido, toda resposta traz atributos detalhados da caixa para você segmentar leads, evitar abusos e aplicar regras de filtragem automáticas.',
  thFlag: 'Indicador',
  thFieldPath: 'Caminho do campo',
  thDescription: 'Descrição e uso',
  flags: [
    { name: 'Descartável', description: 'Identifica caixas temporárias descartáveis. Bloqueie na hora para impedir fraude em testes grátis.' },
    {
      name: 'Conta de função',
      description: 'Detecta caixas genéricas de departamento (info@, billing@, support@). Encaminhe para os times de CRM.',
    },
    {
      name: 'E-mail gratuito',
      description: 'Marca domínios de webmail pessoal (gmail.com, yahoo.com) para separar caixas pessoais de leads corporativos.',
    },
    { name: 'Catch-all', description: 'Indica se o servidor aceita todas as mensagens. Use com {0} para recuperar leads válidos.' },
    {
      name: 'Alias com sinal de mais',
      description: 'Detecta endereços com subendereçamento de alias (user+tag@). Evita que uma mesma pessoa crie várias contas.',
    },
    { name: 'Caixa cheia', description: 'Indica que a cota de armazenamento foi excedida. Mensagens enviadas para esse endereço vão dar soft bounce.' },
    { name: 'No-reply', description: 'Marca endereços de envio em massa que ninguém acompanha. Evite enviar para esses endereços mensagens de prospecção que esperam resposta.' },
    {
      name: 'Verificação de blacklist',
      description: 'Avalia o domínio e os IPs do servidor nas principais listas DNSBL, com pontuações de reputação.',
    },
  ],

  useCasesTitle: 'Onde os times usam a API de verificação de e-mail',
  useCasesIntro: 'Nossos endpoints se conectam diretamente a pipelines de dados, fluxos de CRM e bancos de dados.',
  useCases: [
    {
      title: 'Sincronização com CRM e data warehouse',
      body: 'Verifique os dados de contato continuamente antes de sincronizar com Salesforce, HubSpot ou Snowflake. Limpe registros antigos de forma programada e mantenha os dados de contato corretos.',
    },
    {
      title: 'Limpeza de listas para campanhas',
      body: 'Limpe as listas de e-mail antes de grandes disparos de prospecção. Você também pode enviar listas direto pela nossa interface de [limpeza de lista de e-mail](/email-list-cleaning) para um trabalho manual rápido.',
    },
    {
      title: 'Pipelines de enriquecimento de leads',
      body: 'Dispare verificações automáticas de caixa sempre que suas ferramentas de SDR inbound ou de enriquecimento outbound encontrarem novos e-mails corporativos, para que os vendedores só contatem endereços verificados.',
    },
    {
      title: 'Automação de fluxos de trabalho',
      body: 'Conecte nossos endpoints de verificação diretamente a fluxos do Zapier, n8n, Make e webhooks pela nossa central de [integrações](/integrations).',
    },
    {
      title: 'Agentes de IA via MCP',
      body: 'Permita que Claude, ChatGPT, Cursor e seus próprios agentes de IA verifiquem contatos durante as conversas com o nosso [servidor MCP](/mcp).',
    },
    {
      title: 'Validação de formulários de cadastro',
      body: 'Quer verificar endereços enquanto os usuários digitam em formulários de cadastro e de captura de leads? Conheça nossa [API de validação de e-mail](/email-validation-api), feita para verificações em tempo real em formulários.',
    },
  ],

  codeTitle: 'Exemplos de código',
  codeIntro: 'Trechos para o servidor, para verificações individuais e em massa. Guarde sua chave de API em variáveis de ambiente.',
  nodeLabel: 'Verificação individual: Node.js (fetch)',
  pythonLabel: 'Verificação individual: Python (requests)',
  serverSideOnly: 'apenas no servidor',
  bulkTitle: 'Fluxo em massa: enviar, consultar e buscar resultados',
  bulkIntro: 'Enviar um job em lote exige uma única chamada. Consulte a cada 10 a 15 segundos até o status do job chegar a {0}.',

  pricingTitle: 'Preços da API de verificação de e-mail',
  pricingIntro:
    'Preço simples, pago conforme o uso, sem fidelidade mensal. Um crédito verifica um endereço. Nas verificações individuais pela API, a resolução de catch-all está incluída no mesmo crédito. Nos jobs em lote, a verificação padrão custa 1 crédito por endereço, e a verificação completa das linhas catch-all custa 1 crédito por endereço catch-all verificado. Os créditos nunca expiram, e os resultados desconhecidos são reembolsados automaticamente.',
  pricingNote: 'Precisa de um volume maior para a sua empresa? Veja todas as nossas [faixas de preço](/pricing).',

  limitsTitle: 'Limites de requisição e erros',
  limitsIntro:
    'Limites padrão de requisição valem por chave de API. O status do limite volta em todas as requisições por cabeçalhos padrão:{0} e{1}.',
  limitsCardTitle: 'Limites por janela de 15 minutos',
  limitLabels: ['Verificações individuais (/v1/verify)', 'Criação de jobs em lote', 'Criação de jobs de catch-all', 'Consulta de jobs e resultados'],
  limitUnit: '{n} requisições / 15 min',
  errorsCardTitle: 'Códigos de erro de status HTTP',
  errors: [
    'Sintaxe inválida ou corpo JSON malformado.',
    'Chave de API ausente, expirada ou inválida.',
    'Saldo de créditos insuficiente na conta.',
    'O ID de job solicitado não existe.',
    'Conflito de chave de idempotência.',
    'Os resultados do job em lote expiraram após 48 horas.',
    'Limite de requisições excedido.',
  ],
  errorsNote:
    'Os formatos detalhados das respostas de erro e suas descrições estão na [documentação de erros da API](/public/docs).',

  reviewsTitle: 'O que os clientes dizem',
  reviewsIntro: 'Opiniões reais de times de engenharia, vendas e growth que usam a Giggal.ai.',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'Avaliação verificada no G2',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'Avaliação no SourceForge',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Avaliação no Product Hunt',
    },
  ],

  faqTitle: 'Perguntas frequentes sobre a API de verificação de e-mail',
  faqIntro: 'Dúvidas técnicas comuns sobre autenticação, verificação de caixas e tratamento de catch-all.',
  faqs: [
    {
      q: 'Existe uma API de verificação de e-mail grátis?',
      a: 'Sim. Cada conta nova recebe 1.000 créditos grátis logo no cadastro, sem cartão de crédito. Você pode gerar uma chave de API no seu painel de desenvolvedor e começar a enviar requisições de verificação na hora. Os créditos grátis nunca expiram e dão acesso completo a todos os endpoints, incluindo a verificação completa da caixa e a resolução completa de catch-all.',
    },
    {
      q: 'Como a API verifica um endereço sem enviar um e-mail?',
      a: 'A API verifica se a caixa existe. Ela faz consultas DNS e MX, se conecta ao servidor de e-mail de destino e confere se aquela caixa existe e pode receber mensagens. A conexão é encerrada de forma limpa antes de qualquer mensagem ser transmitida, então o destinatário nunca recebe um e-mail.',
    },
    {
      q: 'Como os endereços catch-all são tratados?',
      a: 'Em domínios catch-all, um servidor de e-mail comum informa que qualquer endereço é aceito, o que faz as ferramentas comuns devolverem "arriscado" ou "desconhecido". A Giggal verifica se a caixa existe e devolve um resultado válido ou inválido com um catch_all_score de 0 a 100, para você não descartar leads reais.',
    },
    {
      q: 'O que significa "desconhecido" e eu pago por isso?',
      a: 'O status "desconhecido" aparece quando o servidor de e-mail de destino não dá uma resposta clara dentro do nosso tempo limite, normalmente por greylisting agressivo ou por falhas temporárias do servidor. Você nunca paga por respostas inconclusivas: os créditos de qualquer verificação com status desconhecido voltam automaticamente para o saldo da sua conta.',
    },
    {
      q: 'Quantos e-mails posso verificar por requisição?',
      a: 'As requisições de verificação individual conferem um e-mail por chamada, de forma síncrona, com uma resposta JSON direta. Para verificar listas, nosso endpoint em massa aceita até 50.000 endereços de e-mail por job, de forma assíncrona. Você acompanha o progresso consultando o job e busca os resultados paginados quando o processamento termina.',
    },
    {
      q: 'Posso verificar e-mails pelo Claude, ChatGPT ou Cursor?',
      a: 'Sim. A Giggal.ai hospeda um servidor MCP (Model Context Protocol) remoto oficial em https://mcp.giggal.ai/mcp. Claude e ChatGPT se conectam ao servidor hospedado por OAuth, sem chave de API. Para fluxos de desenvolvimento locais no Cursor, no VS Code e em outros clientes, você pode configurar o servidor local giggal-mcp com sua chave de API e verificar endereços direto do seu editor.',
    },
    {
      q: 'Qual é a diferença entre uma API de verificação de e-mail e uma API de validação de e-mail?',
      a: 'Uma API de verificação de e-mail confere se uma caixa realmente existe: ela fala direto com os servidores de e-mail de destino, verifica os registros DNS e resolve endereços catch-all em listas de vendas e bases de clientes. Uma API de validação de e-mail foca em verificações em tempo real nos formulários de cadastro: confere o formato, identifica domínios descartáveis e bloqueia contas falsas no envio do formulário. Se você precisa proteger formulários, conheça nossa API de validação de e-mail.',
    },
    {
      q: 'O que procurar em uma API de verificação de e-mail?',
      a: 'Procure três fatores: resolução real de catch-all, para não perder até 30 % dos seus contatos B2B no grupo dos "arriscados"; regras de cobrança claras, com reembolso automático dos resultados desconhecidos; e preço claro por verificação, sem taxas recorrentes escondidas nem mínimos mensais.',
    },
  ],

  ctaHeadline: 'Comece a verificar e-mails em minutos',
}

const ja: VerificationApiStrings = {
  metaTitle: 'メールアドレス検証API：キャッチオールドメインのアドレスも判定 | Giggal.ai',
  ogTitle: 'メールアドレス検証API：キャッチオールドメインのアドレスも判定',
  description:
    'メールボックスが存在するかをリアルタイムで確認するメールアドレス検証APIです。キャッチオールドメインの判定も1回のJSONレスポンスで返します。一括ジョブは最大50,000件。無料クレジット1,000件付き。',
  ogLocale: 'ja_JP',
  ogAlt: 'Giggal.ai メールアドレス検証API',
  crumb: 'メールアドレス検証API',
  appName: 'Giggal.ai メールアドレス検証API',

  h1Lead: 'メールアドレス検証API：',
  h1Highlight: 'キャッチオールドメインのアドレスも判定',
  heroIntro:
    '1回のREST呼び出しで、メールボックスが存在するかを確認できます。キャッチオールドメインでは、多くのAPIは「accept-all」や「リスクあり」で止まります。このAPIは、同じレスポンスの中で有効か無効かの答えを返します。開発チームは、整ったJSONデータを使って、営業メールの送信フロー全体で送信者レピュテーションを守れます。',
  quickTestLabel: 'クイックテスト',
  heroCta: '無料のAPIキーを取得',
  heroDocsCta: 'APIリファレンスを読む',
  heroNote: '無料クレジット1,000件付き。クレジットカードは不要です。クレジットに有効期限はありません。',

  ratings: {
    reviews: (count) => `${count}件のレビュー`,
    ratedAria: (rating, platform) => `Giggal.aiの${platform}での評価は5点中${rating}点です`,
  },
  awards: {
    headingLead: 'Giggal.aiはSourceForgeとSlashdotで',
    headingRest: 'Leaderと評価されています',
    showLabel: '{badge}を表示',
  },

  returnsTitle: '1回のAPI呼び出しで返るデータ',
  returnsIntro:
    '1回の呼び出しで、到達率に関するデータをまとめて返します。到達可否のステータス、リスクの評価、数値の到達スコア、メールボックスの属性、キャッチオールドメインの判定結果が含まれます。',
  jsonLabel: 'JSONレスポンス',
  statusTitle: 'ステータスの値の扱い方',
  statusIntro:
    '主な配信ステータスは{0}フィールドで返されます。バックエンドのアプリケーションでは、それぞれの値を次のように扱ってください。',
  thStatus: 'ステータス',
  thMeaning: '意味',
  thAction: '推奨する対応',
  statusRows: [
    {
      meaning: '送信先のメールサーバーが受信者を受け付けました。メールボックスは使われています。',
      action: '送信できます。主なキャンペーンに含めてください。',
    },
    {
      meaning: 'メールボックスが存在しない、形式が正しくない、ドメインにMXレコードがない、またはドメインが使い捨てです。',
      action: '送信しないでください。ハードバウンスを避けるため、キャンペーンから削除してください。',
    },
    {
      meaning: 'サーバーの応答から結論が出ませんでした。グレーリスティングや接続のタイムアウトが主な原因です。',
      action: '後でもう一度チェックしてください。不明の結果に使ったクレジットは自動で返却されます。',
    },
  ],

  catchAllTitle: 'キャッチオールドメインのアドレスを同じ呼び出しで判定',
  catchAllParas: [
    '通常のチェックは、キャッチオールドメインでは答えを出せません。企業のメールサーバーがすべてのアドレスを受け付ける場合、通常のツールには、実在するメールボックスにも入力ミスのアドレスにも同じ肯定の応答が返ります。それ以上確認できないため、多くのツールはアドレスを「リスクあり」や「accept-all」とし、判断を利用者に任せます。',
    '一般的なB2Bのリストでは、約30%のアドレスが、キャッチオールドメインか、ProofpointやMimecastのようなセキュアメールゲートウェイ（SEG）の背後にあるドメインにあります。これらを削除すると、実在する購入者を失います。検証せずに送信すると、バウンスが急に増えます。',
    'Giggalの検証エンジンは、同じ呼び出しの中でキャッチオールドメインのアドレスを詳しく判定します。メールボックスが存在するかをチェックし、{0}（"valid"または"invalid"）と、0〜100の{1}を返します。詳しくは、[キャッチオールドメインの検証](/catch-all-verification)と、[セキュアメールゲートウェイ](/seg-email-verification)の背後にあるメールボックスのチェックについてのガイドをご覧ください。',
  ],
  oldApiLabel: '従来の検証API',
  oldApiSub: 'accept-allのドメインでは判定しない',
  oldApiNote: '判断はチームに任されます。送信してバウンスの増加を受け入れるか、有効な見込み客を削除するかです。',
  ourApiLabel: 'Giggal.ai API',
  ourApiSub: 'キャッチオールドメインを同じ呼び出しで判定',
  ourApiNote: 'メールボックスが存在することを確認済みです。キャッチオールドメインの実在する連絡先を残し、送信者レピュテーションを守れます。',

  endpointsTitle: '1件、一括、キャッチオールドメインのチェック用のエンドポイント',
  endpointsIntro:
    '連絡先1件のチェックにも、大きなリストの検証にも、それぞれ専用のエンドポイントがあります。',
  endpoints: [
    {
      badge: '1クレジット',
      title: 'メールアドレス1件の検証',
      body: 'メールアドレス1件を同期で検証します。アドレスが存在するかを確認し、ドメインを診断し、キャッチオールドメインのアドレスも同じ呼び出しで判定します。結果はすべてJSONで返します。',
      link: 'エンドポイントのドキュメントを見る',
    },
    {
      badge: '最大50,000件',
      title: 'メールアドレスの一括検証',
      body: '1ジョブあたり最大50,000件のアドレスを非同期で処理します。重複と形式の誤りはサーバー側で取り除きます。二重課金を防ぐ{0}ヘッダーに対応しています。',
      link: 'バッチのドキュメントを見る',
    },
    {
      badge: 'ページ分割',
      title: 'ジョブの状態確認と結果の取得',
      body: '{0}で、10〜15秒ごとにジョブの進み具合を確認します。結果は1ページ最大500件で、ページ分割して取得します。結果は48時間保存されます。',
      link: '状態確認のドキュメントを見る',
    },
    {
      badge: 'アドレス1件につき1クレジット',
      title: 'キャッチオールドメインの一括判定',
      body: '完了した一括ジョブでキャッチオールドメインと判定されたアドレスを、まとめて詳しく判定します。結果は、スコアとステータスの列が入ったCSVでダウンロードできます。',
      link: 'キャッチオールドメインのドキュメントを見る',
    },
  ],

  flagsTitle: 'すべてのレスポンスに含まれるフラグ',
  flagsIntro:
    'すべてのレスポンスには、有効か無効かのほかに、メールボックスの詳しい属性が含まれます。見込み客の分類、不正利用の防止、自動のフィルタールールに使えます。',
  thFlag: 'フラグ',
  thFieldPath: 'フィールドのパス',
  thDescription: '説明と使い方',
  flags: [
    { name: '使い捨て', description: '一時的な使い捨ての受信トレイを見分けます。無料トライアルの不正利用を防ぐため、すぐにブロックしてください。' },
    {
      name: '役割アドレス',
      description: '部署共通のメールボックス（info@、billing@、support@）を見分けます。CRMの担当チームに回してください。',
    },
    {
      name: 'フリーメール',
      description: '個人向けのウェブメールのドメイン（gmail.com、yahoo.com）に印を付けます。個人の受信トレイと企業の見込み客を分けられます。',
    },
    { name: 'キャッチオールドメイン', description: 'ホストがすべてのメールを受け付けるかを示します。{0}と組み合わせて、有効な見込み客を残せます。' },
    {
      name: 'プラスタグ',
      description: 'サブアドレス（user+tag@）を使ったアドレスを見分けます。1人が複数のアカウントを作るのを防げます。',
    },
    { name: 'メールボックスの容量超過', description: '保存容量の上限を超えていることを示します。このアドレスに送るとソフトバウンスになります。' },
    { name: '返信不可（No-Reply）', description: '誰も読んでいない一斉送信用のアドレスに印を付けます。やり取りを目的とした営業メールは送らないでください。' },
    {
      name: 'ブラックリストのチェック',
      description: 'ドメインとサーバーのIPを主要なDNSBLで確認し、レピュテーションのスコアを付けます。',
    },
  ],

  useCasesTitle: 'メールアドレス検証APIの使いみち',
  useCasesIntro: 'エンドポイントは、データパイプライン、CRMのワークフロー、データベースに直接つなげられます。',
  useCases: [
    {
      title: 'CRMとデータウェアハウスの同期',
      body: 'Salesforce、HubSpot、Snowflakeに同期する前に、連絡先データを継続して検証します。古いレコードを定期的にクリーニングし、連絡先データを正確に保てます。',
    },
    {
      title: 'キャンペーン用のリストのクリーニング',
      body: '大きな配信の前にメールリストをクリーニングします。手作業ですばやく行うなら、[メールリストのクリーニング](/email-list-cleaning)の画面から直接リストをアップロードすることもできます。',
    },
    {
      title: 'リードのエンリッチメント',
      body: 'インバウンドのSDRやアウトバウンドのエンリッチメントツールが新しい企業のメールアドレスを見つけるたびに、メールボックスのチェックを自動で実行します。営業担当者は検証済みのアドレスにだけ連絡できます。',
    },
    {
      title: 'ワークフローの自動化',
      body: '[連携](/integrations)のページから、検証のエンドポイントをZapier、n8n、Make、Webhookのワークフローに直接つなげられます。',
    },
    {
      title: 'MCPを使うAIエージェント',
      body: '[MCPサーバー](/mcp)を使うと、Claude、ChatGPT、Cursor、独自のAIエージェントが、会話の中で連絡先を検証できます。',
    },
    {
      title: '登録フォームでのチェック',
      body: '登録フォームやリード獲得フォームで、入力されたアドレスをその場でチェックしたい場合は、フォームのリアルタイムチェック用の[メールアドレスのバリデーションAPI](/email-validation-api)をご覧ください。',
    },
  ],

  codeTitle: 'コード例',
  codeIntro: '1件と一括のチェックのための、サーバー側のコード例です。APIキーは環境変数に保存してください。',
  nodeLabel: '1件の検証：Node.js（fetch）',
  pythonLabel: '1件の検証：Python（requests）',
  serverSideOnly: 'サーバー側のみ',
  bulkTitle: '一括の流れ：送信、状態確認、結果の取得',
  bulkIntro: 'バッチジョブの送信は1回の呼び出しで済みます。ジョブのステータスが{0}になるまで、10〜15秒ごとに状態を確認してください。',

  pricingTitle: 'メールアドレス検証APIの料金',
  pricingIntro:
    '月額の契約がない、わかりやすい従量課金です。1クレジットでアドレス1件を検証します。1件ずつのAPIチェックでは、キャッチオールドメインの判定も同じ1クレジットに含まれます。一括のバッチジョブでは、通常の検証がアドレス1件につき1クレジットで、キャッチオールドメインの行を詳しく判定すると、チェックしたキャッチオールドメインのアドレス1件につき1クレジットかかります。クレジットに有効期限はなく、不明の結果は自動で返却されます。',
  pricingNote: 'さらに大量の検証が必要な場合は、[すべての料金プラン](/pricing)をご覧ください。',

  limitsTitle: 'レート制限とエラー',
  limitsIntro:
    'APIキーごとに標準のレート制限があります。レート制限の状況は、すべてのリクエストで標準のヘッダー{0}と{1}で返されます。',
  limitsCardTitle: '15分間あたりのレート制限',
  limitLabels: ['1件のチェック（/v1/verify）', 'バッチジョブの作成', 'キャッチオールドメインのジョブの作成', 'ジョブの状態確認と結果の取得'],
  limitUnit: '15分あたり{n}リクエスト',
  errorsCardTitle: 'HTTPステータスのエラーコード',
  errors: [
    '形式が正しくない、またはJSONの本文が壊れています。',
    'APIキーがない、期限切れ、または無効です。',
    'アカウントのクレジット残高が足りません。',
    '指定したジョブIDが存在しません。',
    'Idempotency-Keyのペイロードが競合しています。',
    'バッチジョブの結果は48時間で期限切れになりました。',
    'レート制限の上限を超えました。',
  ],
  errorsNote:
    'エラーレスポンスの詳しい形式と内容は、[APIのエラーに関するドキュメント](/public/docs)にあります。',

  reviewsTitle: '利用者の声',
  reviewsIntro: 'Giggal.aiを使っている開発、営業、グロースのチームからの実際の声です。',
  reviews: [
    {
      quote:
        "Before Giggal, our team spent hours manually reviewing catch-all addresses because other tools couldn't verify them with confidence. Now we upload large email lists, verify them in minutes, and move directly into campaign preparation.",
      role: 'G2の認証済みレビュアー',
    },
    {
      quote:
        'Fast and accurate email verification, excellent catch-all detection, easy-to-use interface, quick processing for large lists, lower bounce rates, improved sender reputation, and more confidence before launching email campaigns.',
      role: 'SourceForgeのレビュアー',
    },
    {
      quote:
        'Giggal Email Verifier makes email validation fast, simple, and reliable. It helps us clean our lists, reduce bounce rates, and improve the overall performance of our outreach campaigns. The accuracy of the verification results makes it a valuable tool.',
      role: 'Product Huntのレビュアー',
    },
  ],

  faqTitle: 'メールアドレス検証APIに関するよくある質問',
  faqIntro: '認証、メールボックスのチェック、キャッチオールドメインの扱いについての、技術的なよくある質問です。',
  faqs: [
    {
      q: '無料のメールアドレス検証APIはありますか？',
      a: 'はい。新しいアカウントには、登録するとすぐに無料クレジット1,000件が付きます。クレジットカードは不要です。開発者用のダッシュボードでAPIキーを作成すれば、すぐに検証のリクエストを送れます。無料クレジットに有効期限はなく、メールボックスのチェックやキャッチオールドメインの詳しい判定を含め、すべてのエンドポイントを使えます。',
    },
    {
      q: 'APIはメールを送らずに、どうやってアドレスをチェックしますか？',
      a: 'APIはメールボックスが存在するかを確認します。DNSとMXを調べ、送信先のメールサーバーに接続し、そのメールボックスが存在してメールを受け取れるかをチェックします。メッセージを送る前に接続を正しく閉じるため、受信者にメールは届きません。',
    },
    {
      q: 'キャッチオールドメインのアドレスはどう扱われますか？',
      a: 'キャッチオールドメインでは、メールサーバーがすべてのアドレスを受け付けると答えます。そのため、通常のツールは「リスクあり」や「不明」を返します。Giggalはメールボックスが存在するかをチェックし、有効か無効かの結果と、0〜100のcatch_all_scoreを返します。実在する見込み客を削除せずに済みます。',
    },
    {
      q: '「不明」とは何ですか？料金はかかりますか？',
      a: '「不明」のステータスは、送信先のメールサーバーが制限時間内にはっきりした答えを返さなかったときに出ます。主な原因は、厳しいグレーリスティングやサーバーの一時的な停止です。結論が出なかった答えに料金はかかりません。不明のステータスが返った検証に使ったクレジットは、自動でアカウントの残高に返却されます。',
    },
    {
      q: '1回のリクエストで何件のメールアドレスを検証できますか？',
      a: '1件の検証リクエストは、1回の呼び出しでメールアドレス1件を同期でチェックし、JSONで直接返します。リストの検証には一括APIのエンドポイントを使います。1つのバッチジョブで最大50,000件のメールアドレスを非同期で受け付けます。ジョブの状態確認で進み具合を追い、処理が終わったら結果をページ分割して取得できます。',
    },
    {
      q: 'Claude、ChatGPT、Cursorからメールアドレスを検証できますか？',
      a: 'はい。Giggal.aiは公式のリモートMCP（Model Context Protocol）サーバーをhttps://mcp.giggal.ai/mcpで提供しています。ClaudeとChatGPTは、OAuthでこのサーバーに接続するため、APIキーは不要です。Cursor、VS Codeなどのクライアントでローカルに使う場合は、APIキーを設定したローカルのgiggal-mcpサーバーで、エディターから直接アドレスを検証できます。',
    },
    {
      q: 'メールアドレス検証APIとメールアドレスのバリデーションAPIの違いは何ですか？',
      a: 'メールアドレス検証APIは、送信先のメールサーバーと直接やり取りし、DNSレコードを確認して、メールボックスが実際に存在するかを調べます。営業リストや顧客データベースにあるキャッチオールドメインのアドレスも判定します。メールアドレスのバリデーションAPIは、主に登録フォームでのリアルタイムのチェックに使います。形式を確認し、使い捨てのドメインを見分け、送信の時点で偽のアカウントを防ぎます。フォームを守りたい場合は、メールアドレスのバリデーションAPIをご覧ください。',
    },
    {
      q: 'メールアドレス検証APIを選ぶときは何を確認すればよいですか？',
      a: '確認するべき点は3つです。1つ目は、キャッチオールドメインを本当に判定できることです。判定できないと、B2Bの連絡先の最大30%が「リスクあり」に分類されて使えなくなります。2つ目は、不明の結果のクレジットを自動で返却する、わかりやすい課金ルールです。3つ目は、検証1件あたりの料金が明確で、隠れた定期料金や月額の最低料金がないことです。',
    },
  ],

  ctaHeadline: '数分でメールアドレスの検証を始められます',
}

export const VERIFICATION_API_STRINGS: Partial<Record<Locale, VerificationApiStrings>> & { en: VerificationApiStrings } = {
  en,
  ja,
  'pt-br': ptBr,
  es,
  de,
  it,
  fr,
  nl,
  pl,
  id,
  ko,
  tr,
}

/** The page copy for `locale`, English when that language has none yet. */
export function getVerificationApiStrings(locale: Locale): VerificationApiStrings {
  return VERIFICATION_API_STRINGS[locale] ?? VERIFICATION_API_STRINGS.en
}
