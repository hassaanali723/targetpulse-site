// All page copy for the email validation API page, one object per language the page
// ships in. The page is components/pages/ValidationApi/ValidationApiPage.tsx; the URLs
// live in CLUSTERS.validationApi (lib/i18n/clusters.ts).
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// [label](/english-path). Paths are always English; the page routes each one to the
// reader's language when that page exists. `{0}` and `{1}` mark where the page puts an
// inline <code> sample (an address or a field name). The samples themselves are data in
// the page component, so they stay identical in every language.
//
// Code blocks, endpoints, JSON field names and types are not here: they live in the
// page component and are never translated.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

interface Card {
  title: string
  body: string
}

export interface ValidationApiStrings {
  metaTitle: string
  ogTitle: string
  description: string
  /** Other languages only; English keeps its own opengraph-image file. */
  ogLocale?: string
  crumb: string
  /** Name in the SoftwareApplication JSON-LD. */
  appName: string

  // Hero
  h1Lead: string
  /** The gradient words at the end of the H1. */
  h1Accent: string
  heroIntro: string
  /** Header of the hero code block: file label and the right-hand tag. */
  heroCodeLabel: string
  heroCodeTag: string
  heroCta: string
  heroSecondaryCta: string
  heroNote: string

  // Why regex alone isn't email validation
  regexTitle: string
  /** The second paragraph has {0} and {1}: the two example addresses. */
  regexParas: [string, string, string, string]
  /** Syntax check, DNS and MX verification, mailbox check. */
  checkCards: [Card, Card, Card]

  // What to block, flag or allow at signup
  decisionTitle: string
  decisionIntro: string
  /** Table headers: result, field condition, what the form should do. */
  decisionHeaders: [string, string, string]
  /**
   * One row per result: invalid, disposable, role account, free email, catch-all,
   * unknown. The catch-all action has {0}: the catch_all_verdict field name.
   */
  decisionRows: [Card, Card, Card, Card, Card, Card]

  // Add email validation to your signup form
  formTitle: string
  formParas: [string, string]
  /** The four integration steps. */
  formSteps: [Card, Card, Card, Card]
  codeTitle: string
  /** Header labels of the Node.js, Python and browser code blocks. */
  codeLabels: [string, string, string]
  codeTagServer: string
  codeTagClient: string
  codeNote: string

  // Stop disposable and fake signups
  fakeTitle: string
  fakeIntro: string
  /** Disposable inboxes (carries a link), plus addressing ({0}: the alias sample), no-reply. */
  fakeCards: [Card, Card, Card]
  typoTitle: string
  typoBody: string

  // Where to validate emails in real time
  whereTitle: string
  whereIntro: string
  /** Six places. The webhook card carries a link. */
  whereCards: [Card, Card, Card, Card, Card, Card]

  // Response fields you'll use at signup
  fieldsTitle: string
  fieldsIntro: string
  /** Table headers: JSON field, type, signup usage. */
  fieldsHeaders: [string, string, string]
  /** Usage text for each field row, in the order of the page's field list. */
  fieldUsage: [string, string, string, string, string, string, string]
  /** Carries the link to the API reference. */
  fieldsNote: string

  // Pricing
  pricingTitle: string
  pricingIntro: string
  /** Carries the link to the pricing page. */
  pricingNote: string

  // FAQ
  faqTitle: string
  faqIntro: string
  faqs: FaqItem[]

  // Final CTA
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: ValidationApiStrings = {
  metaTitle: 'Email Validation API for Real-Time Signup Checks | Giggal.ai',
  ogTitle: 'Email Validation API for Real-Time Signup Checks',
  description:
    'Email validation API for signup and checkout forms. Block invalid, disposable and role-based emails in real time with one JSON call. 1,000 free credits.',
  crumb: 'Email validation API',
  appName: 'Giggal.ai Email Validation API',

  h1Lead: 'Real-time email validation API for',
  h1Accent: 'signup forms',
  heroIntro:
    'Validate addresses as users submit them: mail server and whether the mailbox exists in one call, with disposable and role-based flags so you decide what to accept. Our email validation api blocks bad data at the door, keeping fake accounts out of your database.',
  heroCodeLabel: 'Backend signup handler',
  heroCodeTag: 'Form Decision',
  heroCta: 'Get a free API key',
  heroSecondaryCta: 'See how to add it to a form',
  heroNote: '1,000 free credits, no card needed. Credits never expire.',

  regexTitle: "Why regex alone isn't email validation",
  regexParas: [
    'A regular expression checks only string structure: whether an @ symbol exists, if the domain format looks plausible, and whether characters fall within standard ASCII ranges. Regex answers only whether an input looks like an email address, not whether anyone can receive messages there.',
    'Typing {0} or {1} passes every RFC-compliant regex perfectly. Yet one domain may have no active mail servers, and the other mailbox may not exist.',
    'Our email validation api json service goes far beyond regular expressions. In a single request, it inspects DNS records, performs MX host lookups, connects to the destination mail server to test mailbox responsiveness, and verifies the domain against extensive disposable lists.',
    'Rigid regex patterns also cause false rejections. Custom expressions frequently reject uncommon top-level domains like .studio or .cloud, valid international characters, or legitimate addresses with unusual punctuation. Our API handles all RFC 5322 syntax specifications automatically, eliminating the need to maintain fragile regex libraries in your codebase.',
  ],
  checkCards: [
    {
      title: 'Syntax check',
      body: 'Catches basic typos, missing TLDs, illegal punctuation, and spacing issues before any external network lookups.',
    },
    {
      title: 'DNS & MX verification',
      body: 'Verifies domain registration status and discovers configured mail exchangers capable of accepting inbound messages.',
    },
    {
      title: 'Mailbox check',
      body: 'Communicates with the remote mail server directly to confirm whether the specific mailbox exists and can receive mail.',
    },
  ],

  decisionTitle: 'What to block, flag or allow at signup',
  decisionIntro:
    'Different businesses have different signup requirements. A B2B enterprise SaaS might enforce company emails, while a consumer social app welcomes personal Gmail addresses. Here is the recommended decision matrix based on real API response attributes:',
  decisionHeaders: ['API Result', 'Field condition', 'What the form should do'],
  decisionRows: [
    { title: 'Invalid', body: 'Block immediately. Display: "Please enter a valid, active email address."' },
    { title: 'Disposable', body: 'Block, or ask for another address. Display: "Temporary email addresses are not permitted."' },
    { title: 'Role Account', body: 'Allow; flag on B2B forms. Alert account managers or route to general leads bucket.' },
    { title: 'Free Email', body: 'Allow on B2C apps; require corporate work email on B2B demo or trial forms.' },
    { title: 'Catch-All', body: 'Check {0}: if "valid" allow; if "invalid" block; if null permit registration.' },
    { title: 'Unknown', body: 'Accept and re-check later (refunded). Fail open so legitimate users are never blocked.' },
  ],

  formTitle: 'Add email validation to your signup form',
  formParas: [
    'Follow this four-step sequence to integrate real-time validation safely. Because requests require your private API key, run the check from your backend server.',
    'Why the fail-open pattern matters: Signup forms are sensitive to delays. If an external API call experiences network latency, blocking the form could lose a real customer. Setting a short timeout and automatically allowing the registration to proceed ensures legitimate users are not turned away, while your backend queues the address for a background check later.',
  ],
  formSteps: [
    {
      title: 'Form posts to your backend',
      body: 'When a visitor submits registration details, your browser client transmits the email address to your application endpoint.',
    },
    {
      title: 'Backend calls validation API',
      body: 'Your server sends a synchronous POST request to Giggal using your private key stored in an environment variable.',
    },
    {
      title: 'Backend applies decision table',
      body: 'Parse the JSON attributes. If the email is disposable or undeliverable, return a clear error prompt back to the browser.',
    },
    {
      title: 'Fail open on timeouts',
      body: 'If upstream network communication times out, fail open: accept the registration and enqueue a background job to verify later.',
    },
  ],
  codeTitle: 'Implementation code examples',
  codeLabels: [
    'Backend: Node.js (Express Route)',
    'Backend: Python (Flask Route)',
    'Frontend: Browser client (calls your own backend)',
  ],
  codeTagServer: 'server-side only',
  codeTagClient: 'client-side script',
  codeNote:
    'Important: Never call the Giggal API endpoint directly from client-side scripts. Keep your credentials private on your server.',

  fakeTitle: 'Stop disposable and fake signups',
  fakeIntro:
    'Temporary inboxes degrade your product analytics, consume free trial quotas, and never convert into paid customers. Our service actively monitors and flags high-risk signup patterns.',
  fakeCards: [
    {
      title: 'Disposable inboxes',
      body: 'Checked against our active registry of 100,000+ temporary domains. Learn more about how we identify throwaway mailboxes with our [disposable email checker](/disposable-email-checker).',
    },
    {
      title: 'Plus-addressing detection',
      body: 'Flags aliases created with plus-tagging ({0}), preventing single users from creating duplicate trial accounts.',
    },
    {
      title: 'No-reply mailbox detection',
      body: 'Detects broadcast and automated mailboxes that discard incoming communication, preventing users from signing up with non-interactive addresses.',
    },
  ],
  typoTitle: 'Avoid auto-correcting user typos',
  typoBody:
    'Never silently transform user inputs (e.g. changing gnail.com to gmail.com automatically). If an address fails validation, prompt the user with a clear message to verify their entry. Silent rewriting risks delivering account activation tokens or billing receipts to the wrong party.',

  whereTitle: 'Where to validate emails in real time',
  whereIntro: 'Validate email addresses wherever users submit forms across your product.',
  whereCards: [
    {
      title: 'User registration forms',
      body: 'Prevent registration spam and help ensure welcome emails and verification links reach active inboxes.',
    },
    {
      title: 'E-commerce checkout',
      body: 'Ensure shipping notices, receipts, and order confirmations reach customers without delivery failures.',
    },
    {
      title: 'Lead and demo requests',
      body: 'Filter out fake competitor entries and verify company domains before routing prospects to sales representatives.',
    },
    {
      title: 'Newsletter subscriptions',
      body: 'Protect your broadcast domain reputation by rejecting malformed entries and bot signups at opt-in.',
    },
    {
      title: 'Webhook automations',
      body: 'Trigger validation automatically on form webhooks using our pre-built [Zapier and n8n integrations](/integrations).',
    },
    {
      title: 'Account profile updates',
      body: 'Verify new email destinations when existing users modify their profile or billing contact settings.',
    },
  ],

  fieldsTitle: "Response fields you'll use at signup",
  fieldsIntro: 'A compact reference of the core JSON fields required to enforce form validation logic.',
  fieldsHeaders: ['JSON Field', 'Type', 'Signup Usage'],
  fieldUsage: [
    'Quick boolean check. True when domain and mailbox verification checks pass.',
    'Primary delivery status: "deliverable", "undeliverable", "unknown".',
    'Quality score based on mailbox responses, MX stability, and reputation checks.',
    'True when the domain is a known temporary or disposable inbox service.',
    'True for consumer providers (Gmail, Outlook). Enforce corporate domains on B2B forms.',
    'True for organizational addresses like info@, admin@, or support@.',
    'In-line resolution for catch-all domains. Recover valid leads without discarding.',
  ],
  fieldsNote:
    'For complete endpoint definitions, parameter schemas, and error codes, refer to the [full API reference](/public/docs).',

  pricingTitle: 'Email validation API pricing',
  pricingIntro:
    'Pay only for the validations you execute, with no monthly minimums or commitments. Each API validation call consumes 1 credit, with in-line catch-all checks included. Unknown results are refunded automatically, and your first 1,000 credits are completely free.',
  pricingNote: 'Explore all volume plans and monthly subscription discounts on our [pricing overview page](/pricing).',

  faqTitle: 'Email validation API FAQ',
  faqIntro: 'Answers to common implementation questions regarding registration forms and real-time validation.',
  faqs: [
    {
      q: 'Is there a free email validation API?',
      a: 'Yes. Every new account receives 1,000 free credits upon registration, with no credit card required. You can generate an API key in your developer dashboard and begin testing real-time form validations immediately. The free credits never expire and provide full access to all validation attributes and checks.',
    },
    {
      q: 'Can I call the API directly from the browser?',
      a: 'No. Calling the API directly from client-side JavaScript would expose your secret API key to anyone inspecting browser network requests. Always submit user form inputs to your own backend server or serverless function first, and have your server execute the request to https://api.giggal.ai/v1/verify.',
    },
    {
      q: 'Does validation send an email to the user?',
      a: 'No message is ever dispatched. The API checks whether the mailbox exists. It closes the connection before any email data or body content is transmitted, ensuring zero inbox noise for your users.',
    },
    {
      q: 'Does it detect disposable and temporary addresses?',
      a: 'Yes. Every check inspects the domain against our registry of over 100,000 disposable, throwaway, and temporary email domains. If a match is found, details.attributes.disposable returns true and the status is set to undeliverable, allowing your backend to block temporary accounts.',
    },
    {
      q: 'Should I block role-based addresses like info@?',
      a: 'It depends on your business model. For consumer apps, role accounts like support@ or info@ may represent legitimate organizations. For self-serve B2B SaaS where user accountability is necessary, many companies choose to flag or disallow generic role accounts to prevent shared credential abuse.',
    },
    {
      q: 'What happens with catch-all domains at signup?',
      a: 'Catch-all domains accept all recipient addresses unconditionally, making standard checks inconclusive. Our API runs in-line deep catch-all verification to evaluate whether the mailbox exists. If the catch-all check returns "valid", you can safely allow signup; if "invalid", the address will bounce and should be stopped.',
    },
    {
      q: "What should my form do if the API doesn't answer in time?",
      a: 'We recommend implementing a fail-open pattern. If your backend call experiences a network timeout or connection error, allow the registration to complete rather than blocking a potential customer. Queue the unvalidated address in your background worker to re-check delivery status later.',
    },
    {
      q: 'Do I need an email validation API or an email verification API?',
      a: 'Choose an email validation API when you need real-time checks on web registration forms to stop typos, disposable inboxes, and bots on form submission. Choose an email verification API when auditing existing marketing databases, synchronizing CRM contacts, or cleaning bulk email files before sending campaigns.',
    },
  ],

  ctaHeadline: 'Protect your signup forms today',
  ctaSupporting: '1,000 free credits, no card needed. Credits never expire.',
  ctaButton: 'Get a free API key',
}

// Korean. Formal polite style (합니다체); terms from SEO-Plan/i18n-batch4-ko-terminology.md.
const ko: ValidationApiStrings = {
  metaTitle: '이메일 유효성 검사 API: 가입 폼 실시간 검사 | Giggal.ai',
  ogTitle: '이메일 유효성 검사 API: 가입 폼 실시간 검사',
  description:
    '가입 폼과 결제 폼을 위한 이메일 유효성 검사 API입니다. JSON 호출 한 번으로 무효, 일회용, 역할 기반 이메일 주소를 실시간으로 차단합니다. 무료 크레딧 1,000개.',
  ogLocale: 'ko_KR',
  crumb: '이메일 유효성 검사 API',
  appName: 'Giggal.ai 이메일 유효성 검사 API',

  h1Lead: '가입 폼을 위한 실시간',
  h1Accent: '이메일 유효성 검사 API',
  heroIntro:
    '사용자가 주소를 제출하는 순간 유효성을 검사합니다. 호출 한 번으로 메일 서버와 메일함이 있는지 확인하고, 일회용 주소와 역할 기반 주소 플래그도 받습니다. 어떤 주소를 받을지는 직접 정합니다. 이 이메일 유효성 검사 API는 잘못된 데이터를 입력 단계에서 막아, 가짜 계정이 데이터베이스에 들어오지 않게 합니다.',
  heroCodeLabel: '백엔드 가입 처리 코드',
  heroCodeTag: '폼 처리 결정',
  heroCta: '무료 API 키 받기',
  heroSecondaryCta: '폼에 추가하는 방법 보기',
  heroNote: '무료 크레딧 1,000개, 신용카드 불필요. 크레딧 유효기간 없음.',

  regexTitle: '정규식만으로는 이메일 유효성 검사가 되지 않는 이유',
  regexParas: [
    '정규식(regular expression)은 문자열의 구조만 확인합니다. @ 기호가 있는지, 도메인 형식이 그럴듯한지, 문자가 표준 ASCII 범위 안에 있는지만 봅니다. 정규식은 입력값이 이메일 주소처럼 보이는지만 알려 줍니다. 그 주소로 실제로 메시지를 받을 수 있는지는 알려 주지 않습니다.',
    '{0}, {1} 같은 주소는 RFC를 따르는 모든 정규식을 통과합니다. 하지만 한쪽 도메인에는 작동하는 메일 서버가 없을 수 있고, 다른 쪽 메일함은 존재하지 않을 수 있습니다.',
    '이 이메일 유효성 검사 API(JSON 응답)는 정규식보다 훨씬 많은 것을 확인합니다. 요청 한 번으로 DNS 레코드를 확인하고, MX 호스트를 조회하고, 수신 메일 서버에 연결해 메일함 응답을 테스트하고, 도메인을 대규모 일회용 도메인 목록과 대조합니다.',
    '엄격한 정규식 패턴은 정상 주소를 잘못 거부하기도 합니다. 직접 만든 정규식은 .studio나 .cloud 같은 흔하지 않은 최상위 도메인, 올바른 국제 문자, 특이한 문장 부호가 들어간 정상 주소를 거부하는 경우가 많습니다. 이 API는 RFC 5322 문법을 자동으로 처리하므로, 코드베이스에서 깨지기 쉬운 정규식 라이브러리를 관리할 필요가 없습니다.',
  ],
  checkCards: [
    {
      title: '문법 검사',
      body: '외부 네트워크 조회 전에 기본 오타, 빠진 TLD, 허용되지 않는 문장 부호, 공백 문제를 잡아냅니다.',
    },
    {
      title: 'DNS 및 MX 확인',
      body: '도메인 등록 상태를 확인하고, 들어오는 메시지를 받도록 설정된 메일 교환 서버(MX)를 찾습니다.',
    },
    {
      title: '메일함 검사',
      body: '원격 메일 서버와 직접 통신해 해당 메일함이 있고 메일을 받을 수 있는지 확인합니다.',
    },
  ],

  decisionTitle: '가입 시 차단, 표시, 허용할 주소',
  decisionIntro:
    '가입 요건은 회사마다 다릅니다. B2B 기업용 SaaS는 회사 이메일만 받을 수 있고, 소비자용 소셜 앱은 개인 Gmail 주소도 받습니다. 실제 API 응답 속성을 기준으로 한 권장 판단표는 다음과 같습니다.',
  decisionHeaders: ['API 결과', '필드 조건', '폼에서 할 일'],
  decisionRows: [
    { title: '무효', body: '바로 차단합니다. 표시 문구: “사용 중인 올바른 이메일 주소를 입력해 주십시오.”' },
    { title: '일회용', body: '차단하거나 다른 주소를 요청합니다. 표시 문구: “임시 이메일 주소는 사용할 수 없습니다.”' },
    { title: '역할 계정', body: '허용하되 B2B 폼에서는 표시합니다. 계정 담당자에게 알리거나 일반 리드 분류로 보냅니다.' },
    { title: '무료 이메일', body: 'B2C 앱에서는 허용합니다. B2B 데모 신청 폼이나 체험판 폼에서는 회사 이메일을 요구합니다.' },
    { title: '캐치올', body: '{0} 값을 확인합니다. “valid”이면 허용, “invalid”이면 차단, null이면 가입을 허용합니다.' },
    { title: '알 수 없음', body: '받아들이고 나중에 다시 검사합니다(크레딧 환불). 정상 사용자가 차단되지 않도록 실패 시 허용(fail open) 방식으로 처리합니다.' },
  ],

  formTitle: '가입 폼에 이메일 유효성 검사 추가하기',
  formParas: [
    '실시간 유효성 검사를 안전하게 연동하려면 다음 네 단계를 따르십시오. 요청에는 비공개 API 키가 필요하므로 검사는 백엔드 서버에서 실행하십시오.',
    '실패 시 허용 방식이 중요한 이유: 가입 폼은 지연에 민감합니다. 외부 API 호출에 네트워크 지연이 생겼을 때 폼을 막으면 실제 고객을 잃을 수 있습니다. 제한 시간을 짧게 두고 시간이 지나면 가입을 자동으로 진행하면, 정상 사용자를 돌려보내지 않습니다. 백엔드는 그 주소를 나중에 백그라운드에서 검사하도록 대기열에 넣습니다.',
  ],
  formSteps: [
    {
      title: '폼이 백엔드로 전송',
      body: '방문자가 가입 정보를 제출하면 브라우저가 이메일 주소를 애플리케이션 엔드포인트로 보냅니다.',
    },
    {
      title: '백엔드가 유효성 검사 API 호출',
      body: '서버가 환경 변수에 저장된 비공개 키로 Giggal에 동기 POST 요청을 보냅니다.',
    },
    {
      title: '백엔드가 판단표 적용',
      body: 'JSON 속성을 파싱합니다. 이메일이 일회용이거나 전송 불가이면 브라우저에 분명한 오류 메시지를 반환합니다.',
    },
    {
      title: '시간 초과 시 허용',
      body: '외부 네트워크 통신이 시간 초과되면 실패 시 허용 방식으로 처리합니다. 가입을 받아들이고, 나중에 검증할 백그라운드 작업을 대기열에 넣습니다.',
    },
  ],
  codeTitle: '구현 코드 예제',
  codeLabels: [
    '백엔드: Node.js (Express 라우트)',
    '백엔드: Python (Flask 라우트)',
    '프런트엔드: 브라우저 클라이언트 (자체 백엔드 호출)',
  ],
  codeTagServer: '서버 측 전용',
  codeTagClient: '클라이언트 측 스크립트',
  codeNote:
    '중요: 클라이언트 측 스크립트에서 Giggal API 엔드포인트를 직접 호출하지 마십시오. 인증 정보는 서버에 비공개로 보관하십시오.',

  fakeTitle: '일회용 주소와 가짜 가입 차단',
  fakeIntro:
    '임시 메일함은 제품 분석 데이터를 왜곡하고, 무료 체험 한도를 소모하며, 유료 고객으로 전환되지 않습니다. 이 서비스는 위험도가 높은 가입 패턴을 찾아 표시합니다.',
  fakeCards: [
    {
      title: '일회용 메일함',
      body: '100,000개가 넘는 임시 도메인 목록과 대조합니다. 일회용 메일함을 찾아내는 방법은 [일회용 이메일 판별 도구](/disposable-email-checker)에서 자세히 확인하십시오.',
    },
    {
      title: '플러스 주소 감지',
      body: '플러스 태그({0})로 만든 별칭을 표시해, 한 사용자가 체험판 계정을 여러 개 만드는 것을 막습니다.',
    },
    {
      title: '회신 불가(No-Reply) 메일함 감지',
      body: '받은 메일을 버리는 발송 전용 자동 메일함을 찾아내, 사용자가 응답할 수 없는 주소로 가입하지 못하게 합니다.',
    },
  ],
  typoTitle: '사용자 오타를 자동으로 고치지 않기',
  typoBody:
    '사용자 입력을 알리지 않고 바꾸지 마십시오(예: gnail.com을 gmail.com으로 자동 변경). 주소가 유효성 검사를 통과하지 못하면 분명한 메시지로 사용자에게 입력을 확인하도록 요청하십시오. 알리지 않고 고치면 계정 활성화 토큰이나 결제 영수증이 다른 사람에게 전달될 수 있습니다.',

  whereTitle: '실시간 이메일 유효성 검사를 적용할 곳',
  whereIntro: '제품에서 사용자가 폼을 제출하는 모든 곳에서 이메일 주소를 검사합니다.',
  whereCards: [
    {
      title: '회원 가입 폼',
      body: '가입 스팸을 막고, 환영 이메일과 인증 링크가 실제 받은편지함에 도달하도록 돕습니다.',
    },
    {
      title: '전자상거래 결제',
      body: '배송 알림, 영수증, 주문 확인 메일이 전송 실패 없이 고객에게 도달하게 합니다.',
    },
    {
      title: '리드와 데모 신청',
      body: '경쟁사의 가짜 입력을 걸러내고, 영업 담당자에게 넘기기 전에 회사 도메인을 검증합니다.',
    },
    {
      title: '뉴스레터 구독',
      body: '구독 신청 단계에서 잘못된 입력과 봇 가입을 거부해 발송 도메인의 평판을 지킵니다.',
    },
    {
      title: '웹훅 자동화',
      body: '미리 만들어진 [Zapier와 n8n 연동](/integrations)으로 폼 웹훅에서 유효성 검사를 자동으로 실행합니다.',
    },
    {
      title: '계정 프로필 변경',
      body: '기존 사용자가 프로필이나 결제 담당자 정보를 바꿀 때 새 이메일 주소를 검증합니다.',
    },
  ],

  fieldsTitle: '가입 시 사용하는 응답 필드',
  fieldsIntro: '폼 유효성 검사 로직에 필요한 핵심 JSON 필드를 간단히 정리했습니다.',
  fieldsHeaders: ['JSON 필드', '타입', '가입 시 용도'],
  fieldUsage: [
    '빠른 불리언 검사입니다. 도메인과 메일함 검증을 통과하면 true입니다.',
    '기본 전송 상태: "deliverable", "undeliverable", "unknown".',
    '메일함 응답, MX 안정성, 평판 검사를 기준으로 한 품질 점수입니다.',
    '도메인이 알려진 임시 또는 일회용 메일함 서비스이면 true입니다.',
    '개인용 이메일 제공업체(Gmail, Outlook)이면 true입니다. B2B 폼에서는 회사 도메인을 요구하십시오.',
    'info@, admin@, support@ 같은 조직 주소이면 true입니다.',
    '캐치올 도메인을 같은 호출에서 판별합니다. 유효한 리드를 버리지 않고 살릴 수 있습니다.',
  ],
  fieldsNote:
    '전체 엔드포인트 정의, 파라미터 스키마, 오류 코드는 [전체 API 레퍼런스](/public/docs)를 참고하십시오.',

  pricingTitle: '이메일 유효성 검사 API 요금',
  pricingIntro:
    '실행한 유효성 검사만큼만 결제하며, 월 최소 금액이나 약정은 없습니다. API 유효성 검사 호출 1회에 크레딧 1개가 들고, 캐치올 검사도 포함됩니다. 알 수 없음 결과는 자동으로 환불되며, 처음 크레딧 1,000개는 무료입니다.',
  pricingNote: '모든 구간별 요금과 월 구독 할인은 [요금 페이지](/pricing)에서 확인하십시오.',

  faqTitle: '이메일 유효성 검사 API FAQ',
  faqIntro: '가입 폼과 실시간 유효성 검사 구현에 관해 자주 묻는 질문입니다.',
  faqs: [
    {
      q: '무료 이메일 유효성 검사 API가 있습니까?',
      a: '네. 새 계정은 가입 시 무료 크레딧 1,000개를 받으며, 신용카드는 필요 없습니다. 개발자 대시보드에서 API 키를 만들고 바로 실시간 폼 검사를 테스트할 수 있습니다. 무료 크레딧은 유효기간이 없고, 모든 유효성 검사 속성과 검사를 사용할 수 있습니다.',
    },
    {
      q: '브라우저에서 API를 직접 호출할 수 있습니까?',
      a: '아니요. 클라이언트 측 JavaScript에서 API를 직접 호출하면, 브라우저 네트워크 요청을 살펴보는 누구에게나 비밀 API 키가 노출됩니다. 사용자 폼 입력은 먼저 자체 백엔드 서버나 서버리스 함수로 보내고, 서버에서 API(https://api.giggal.ai/v1/verify)로 요청을 보내십시오.',
    },
    {
      q: '유효성 검사를 하면 사용자에게 이메일이 발송됩니까?',
      a: '메시지는 전혀 발송되지 않습니다. API는 메일함이 있는지 검사하고, 이메일 데이터나 본문을 전송하기 전에 연결을 닫습니다. 사용자의 받은편지함에는 아무것도 도착하지 않습니다.',
    },
    {
      q: '일회용 주소와 임시 주소도 찾아냅니까?',
      a: '네. 모든 검사에서 도메인을 100,000개가 넘는 일회용, 임시 이메일 도메인 목록과 대조합니다. 일치하면 details.attributes.disposable 값이 true가 되고 상태가 undeliverable로 설정됩니다. 백엔드에서 이 값으로 임시 계정을 차단할 수 있습니다.',
    },
    {
      q: 'info@ 같은 역할 기반 주소를 차단해야 합니까?',
      a: '비즈니스 모델에 따라 다릅니다. 소비자용 앱에서는 support@, info@ 같은 역할 계정이 정상적인 조직일 수 있습니다. 사용자별 책임이 필요한 셀프서비스 B2B SaaS에서는 계정 공유 악용을 막기 위해 일반 역할 계정을 표시하거나 허용하지 않는 회사가 많습니다.',
    },
    {
      q: '가입 시 캐치올 도메인은 어떻게 처리됩니까?',
      a: '캐치올 도메인은 모든 수신 주소를 조건 없이 받으므로, 일반 검사로는 결론이 나지 않습니다. 이 API는 같은 호출 안에서 캐치올 심층 검증을 실행해 메일함이 있는지 평가합니다. 캐치올 검사가 “valid”를 반환하면 가입을 허용해도 안전합니다. “invalid”이면 그 주소는 반송되므로 막아야 합니다.',
    },
    {
      q: 'API가 제시간에 응답하지 않으면 폼은 어떻게 해야 합니까?',
      a: '실패 시 허용(fail open) 방식을 권장합니다. 백엔드 호출에서 네트워크 시간 초과나 연결 오류가 생기면 잠재 고객을 막지 말고 가입을 완료하게 하십시오. 검사하지 못한 주소는 백그라운드 작업 대기열에 넣어 나중에 전송 상태를 다시 확인하십시오.',
    },
    {
      q: '이메일 유효성 검사 API와 이메일 검증 API 중 무엇이 필요합니까?',
      a: '웹 가입 폼에서 제출 시점에 오타, 일회용 메일함, 봇을 막는 실시간 검사가 필요하면 이메일 유효성 검사 API를 선택하십시오. 기존 마케팅 데이터베이스를 점검하거나, CRM 연락처를 동기화하거나, 캠페인 발송 전에 대량 이메일 파일을 정리하려면 이메일 검증 API를 선택하십시오.',
    },
  ],

  ctaHeadline: '지금 가입 폼을 보호하십시오',
}

const tr: ValidationApiStrings = {
  metaTitle: "Email validasyon API'si: anlık kayıt formu kontrolü | Giggal.ai",
  ogTitle: "Email validasyon API'si: anlık kayıt formu kontrolü",
  description: "Kayıt ve ödeme formları için email validasyon API'si. Geçersiz, geçici ve rol tabanlı adresleri tek bir JSON çağrısıyla anında engelleyin. 1.000 ücretsiz kredi.",
  ogLocale: 'tr_TR',
  crumb: "Email validasyon API'si",
  appName: "Giggal.ai email validasyon API'si",
  h1Lead: 'Kayıt formları için gerçek zamanlı',
  h1Accent: "email validasyon API'si",
  heroIntro: "Adresleri kullanıcılar formu gönderirken doğrulayın. Tek çağrıda e-posta sunucusu ve posta kutusunun var olup olmadığı kontrol edilir. Geçici ve rol tabanlı adres işaretleri sayesinde neyi kabul edeceğinize siz karar verirsiniz. Email validasyon API'miz (email validation API) kötü verileri daha girişte durdurur ve sahte hesapları veritabanınızdan uzak tutar.",
  heroCodeLabel: 'Arka uç kayıt işleyicisi',
  heroCodeTag: 'Form kararı',
  heroCta: 'Ücretsiz API anahtarı alın',
  heroSecondaryCta: 'Forma nasıl ekleneceğini görün',
  heroNote: '1.000 ücretsiz kredi, kredi kartı gerekmez. Kredilerin süresi dolmaz.',
  regexTitle: 'Regex neden tek başına email validasyonu sayılmaz',
  regexParas: [
    'Düzenli ifade (regex) yalnızca metnin yapısını kontrol eder: @ işaretinin olup olmadığını, alan adı biçiminin makul görünüp görünmediğini ve karakterlerin standart ASCII aralıklarında olup olmadığını. Regex yalnızca bir girdinin e-posta adresine benzeyip benzemediğini söyler. O adreste birinin mesaj alıp alamayacağını söylemez.',
    "{0} veya {1} adresleri RFC'ye uygun her regex kontrolünden sorunsuz geçer. Oysa alan adlarından birinin etkin bir e-posta sunucusu olmayabilir, öteki posta kutusu ise hiç var olmayabilir.",
    "Email validasyon API'mizin JSON hizmeti düzenli ifadelerin çok ötesine geçer. Tek bir istekte DNS kayıtlarını inceler, MX sunucu sorguları yapar, posta kutusunun yanıt verip vermediğini test etmek için hedef e-posta sunucusuna bağlanır ve alan adını kapsamlı geçici alan adı listeleriyle karşılaştırır.",
    "Katı regex kalıpları yanlış retlere de yol açar. Özel ifadeler sık sık .studio veya .cloud gibi yaygın olmayan üst düzey alan adlarını, geçerli uluslararası karakterleri ya da alışılmadık noktalama içeren geçerli adresleri reddeder. API'miz RFC 5322 söz dizimi kurallarının tamamını otomatik olarak uygular. Böylece kod tabanınızda kırılgan regex kütüphaneleri tutmanız gerekmez.",
  ],
  checkCards: [
    {
      title: 'Söz dizimi kontrolü',
      body: 'Dış ağ sorgularından önce basit yazım hatalarını, eksik üst düzey alan adlarını (TLD), geçersiz noktalamayı ve boşluk sorunlarını yakalar.',
    },
    {
      title: 'DNS ve MX doğrulama',
      body: 'Alan adının kayıt durumunu doğrular ve gelen mesajları kabul edebilecek e-posta sunucularını (MX) bulur.',
    },
    {
      title: 'Posta kutusu kontrolü',
      body: 'İlgili posta kutusunun var olup olmadığını ve e-posta alıp alamayacağını doğrulamak için uzak e-posta sunucusuyla doğrudan iletişim kurar.',
    },
  ],
  decisionTitle: 'Kayıtta neyi engellemeli, işaretlemeli veya kabul etmelisiniz',
  decisionIntro: 'Her işletmenin kayıt gereksinimleri farklıdır. Kurumsal bir B2B SaaS şirket e-postası zorunlu tutabilir. Bireysel kullanıcılara yönelik bir sosyal uygulama ise kişisel Gmail adreslerini kabul eder. Gerçek API yanıt özelliklerine dayanan önerilen karar tablosu aşağıdadır:',
  decisionHeaders: ['API sonucu', 'Alan koşulu', 'Formun yapması gereken'],
  decisionRows: [
    {
      title: 'Geçersiz',
      body: 'Hemen engelleyin. Gösterilecek mesaj: "Lütfen geçerli ve etkin bir e-posta adresi girin."',
    },
    {
      title: 'Geçici',
      body: 'Engelleyin veya başka bir adres isteyin. Gösterilecek mesaj: "Geçici e-posta adreslerine izin verilmez."',
    },
    {
      title: 'Rol hesabı',
      body: 'Kabul edin, B2B formlarında işaretleyin. Hesap yöneticilerini bilgilendirin veya genel potansiyel müşteri grubuna yönlendirin.',
    },
    {
      title: 'Ücretsiz e-posta',
      body: 'B2C uygulamalarda kabul edin. B2B demo veya deneme formlarında kurumsal iş e-postası isteyin.',
    },
    {
      title: 'Catch-all',
      body: '{0} alanını kontrol edin: "valid" ise kabul edin, "invalid" ise engelleyin, null ise kayda izin verin.',
    },
    {
      title: 'Bilinmiyor',
      body: 'Kabul edin ve daha sonra tekrar kontrol edin (kredi iade edilir). Gerçek kullanıcıların hiç engellenmemesi için hata durumunda kaydı açık bırakın (fail open).',
    },
  ],
  formTitle: 'Kayıt formunuza email validasyonu ekleyin',
  formParas: [
    'Gerçek zamanlı doğrulamayı güvenli şekilde entegre etmek için bu dört adımı izleyin. İstekler gizli API anahtarınızı gerektirdiği için kontrolü arka uç sunucunuzdan çalıştırın.',
    'Fail-open kalıbı neden önemlidir: Kayıt formları gecikmelere duyarlıdır. Harici bir API çağrısında ağ gecikmesi olursa formu engellemek gerçek bir müşteriyi kaybettirebilir. Kısa bir zaman aşımı belirleyip kaydın otomatik olarak devam etmesine izin verirseniz gerçek kullanıcılar geri çevrilmez. Arka ucunuz da adresi daha sonra arka planda kontrol etmek üzere sıraya alır.',
  ],
  formSteps: [
    {
      title: 'Form arka ucunuza gönderilir',
      body: 'Bir ziyaretçi kayıt bilgilerini gönderdiğinde tarayıcı istemciniz e-posta adresini uygulamanızın uç noktasına iletir.',
    },
    {
      title: "Arka uç validasyon API'sini çağırır",
      body: "Sunucunuz, ortam değişkeninde saklanan gizli anahtarınızla Giggal'a eşzamanlı bir POST isteği gönderir.",
    },
    {
      title: 'Arka uç karar tablosunu uygular',
      body: 'JSON özelliklerini ayrıştırın. E-posta geçici veya teslim edilemez ise tarayıcıya net bir hata mesajı döndürün.',
    },
    {
      title: 'Zaman aşımında kaydı açık bırakın',
      body: 'Harici ağ iletişimi zaman aşımına uğrarsa fail open uygulayın: kaydı kabul edin ve adresi daha sonra doğrulamak için arka planda bir iş kuyruğa alın.',
    },
  ],
  codeTitle: 'Uygulama kod örnekleri',
  codeLabels: [
    'Arka uç: Node.js (Express rotası)',
    'Arka uç: Python (Flask rotası)',
    'Ön uç: tarayıcı istemcisi (kendi arka ucunuzu çağırır)',
  ],
  codeTagServer: 'yalnızca sunucu tarafı',
  codeTagClient: 'istemci tarafı betik',
  codeNote: 'Önemli: Giggal API uç noktasını hiçbir zaman istemci tarafı betiklerden doğrudan çağırmayın. Kimlik bilgilerinizi sunucunuzda gizli tutun.',
  fakeTitle: 'Geçici ve sahte kayıtları durdurun',
  fakeIntro: 'Geçici gelen kutuları ürün analizlerinizi bozar, ücretsiz deneme kotalarını tüketir ve hiçbir zaman ücretli müşteriye dönüşmez. Hizmetimiz yüksek riskli kayıt kalıplarını izler ve işaretler.',
  fakeCards: [
    {
      title: 'Geçici gelen kutuları',
      body: "Adres, 100.000'den fazla geçici alan adından oluşan güncel listemizle karşılaştırılır. Tek kullanımlık posta kutularını nasıl belirlediğimizi [geçici mail kontrolü](/disposable-email-checker) aracımızda görebilirsiniz.",
    },
    {
      title: 'Artı adresleme tespiti',
      body: 'Artı etiketiyle ({0}) oluşturulan takma adları işaretler. Böylece tek bir kullanıcının birden fazla deneme hesabı açmasını önler.',
    },
    {
      title: 'No-reply posta kutusu tespiti',
      body: 'Gelen iletileri okumayan toplu ve otomatik posta kutularını tespit eder. Böylece kullanıcıların yanıt alınamayan adreslerle kaydolmasını önler.',
    },
  ],
  typoTitle: 'Kullanıcının yazım hatalarını otomatik düzeltmeyin',
  typoBody: "Kullanıcı girdilerini hiçbir zaman sessizce değiştirmeyin (örneğin gnail.com'u otomatik olarak gmail.com yapmak). Bir adres doğrulamadan geçemezse kullanıcıdan girdisini kontrol etmesini isteyen net bir mesaj gösterin. Sessiz düzeltme, hesap etkinleştirme bağlantılarının veya fatura makbuzlarının yanlış kişiye gitmesine neden olabilir.",
  whereTitle: 'Mail adreslerini gerçek zamanlı olarak nerede doğrulamalısınız',
  whereIntro: 'Ürününüzde kullanıcıların form gönderdiği her yerde e-posta adreslerini doğrulayın.',
  whereCards: [
    {
      title: 'Kullanıcı kayıt formları',
      body: 'Kayıt spamını önleyin. Hoş geldiniz e-postalarının ve doğrulama bağlantılarının etkin gelen kutularına ulaşmasına yardım edin.',
    },
    {
      title: 'E-ticaret ödeme sayfası',
      body: 'Kargo bildirimlerinin, makbuzların ve sipariş onaylarının müşterilere teslim hatası olmadan ulaşmasını sağlayın.',
    },
    {
      title: 'Potansiyel müşteri ve demo talepleri',
      body: 'Rakiplerden gelen sahte girişleri ayıklayın ve adayları satış temsilcilerine yönlendirmeden önce şirket alan adlarını doğrulayın.',
    },
    {
      title: 'Bülten abonelikleri',
      body: 'Abonelik sırasında bozuk girişleri ve bot kayıtlarını reddederek gönderim alan adınızın itibarını koruyun.',
    },
    {
      title: 'Webhook otomasyonları',
      body: "Hazır [Zapier ve n8n entegrasyonlarımızla](/integrations) form webhook'larında doğrulamayı otomatik olarak başlatın.",
    },
    {
      title: 'Hesap profili güncellemeleri',
      body: 'Mevcut kullanıcılar profillerini veya fatura iletişim ayarlarını değiştirdiğinde yeni e-posta adreslerini doğrulayın.',
    },
  ],
  fieldsTitle: 'Kayıtta kullanacağınız yanıt alanları',
  fieldsIntro: 'Form doğrulama mantığını uygulamak için gereken temel JSON alanlarının kısa bir özeti.',
  fieldsHeaders: ['JSON alanı', 'Tür', 'Kayıtta kullanımı'],
  fieldUsage: [
    'Hızlı boolean kontrolü. Alan adı ve posta kutusu kontrolleri geçtiğinde true olur.',
    'Ana teslim durumu: "deliverable", "undeliverable", "unknown".',
    'Posta kutusu yanıtlarına, MX kararlılığına ve itibar kontrollerine dayanan kalite puanı.',
    'Alan adı bilinen bir geçici veya tek kullanımlık gelen kutusu servisiyse true olur.',
    'Bireysel sağlayıcılar (Gmail, Outlook) için true olur. B2B formlarında kurumsal alan adı isteyin.',
    'info@, admin@ veya support@ gibi kurumsal adresler için true olur.',
    'Catch-all alan adları için aynı yanıttaki sonuç. Geçerli kişileri silmeden geri kazanın.',
  ],
  fieldsNote: 'Uç nokta tanımlarının, parametre şemalarının ve hata kodlarının tamamı için [API referansına](/public/docs) bakın.',
  pricingTitle: "Email validasyon API'si fiyatları",
  pricingIntro: 'Aylık minimum veya taahhüt olmadan yalnızca yaptığınız validasyonlar için ödeme yaparsınız. Her API validasyon çağrısı 1 kredi kullanır, catch-all kontrolleri dahildir. Bilinmiyor sonuçlarının kredileri otomatik olarak iade edilir ve ilk 1.000 krediniz tamamen ücretsizdir.',
  pricingNote: 'Tüm hacim planlarını ve aylık abonelik indirimlerini [fiyatlar sayfamızda](/pricing) inceleyin.',
  faqTitle: "Email validasyon API'si hakkında sık sorulan sorular",
  faqIntro: 'Kayıt formları ve gerçek zamanlı doğrulama hakkında sık sorulan uygulama soruları.',
  faqs: [
    {
      q: "Ücretsiz bir email validasyon API'si var mı?",
      a: 'Evet. Her yeni hesap kayıt sırasında 1.000 ücretsiz kredi alır. Kredi kartı gerekmez. Geliştirici panelinizde bir API anahtarı oluşturabilir ve gerçek zamanlı form doğrulamalarını hemen test etmeye başlayabilirsiniz. Ücretsiz kredilerin süresi dolmaz ve tüm doğrulama özelliklerine ve kontrollerine tam erişim sağlar.',
    },
    {
      q: "API'yi doğrudan tarayıcıdan çağırabilir miyim?",
      a: "Hayır. API'yi doğrudan istemci tarafı JavaScript'ten çağırmak, gizli API anahtarınızı tarayıcının ağ isteklerini inceleyen herkese açık hâle getirir. Kullanıcı form girdilerini her zaman önce kendi arka uç sunucunuza veya sunucusuz fonksiyonunuza gönderin. https://api.giggal.ai/v1/verify isteğini sunucunuz yapsın.",
    },
    {
      q: 'Validasyon kullanıcıya mail gönderir mi?',
      a: 'Hiçbir mesaj gönderilmez. API posta kutusunun var olup olmadığını kontrol eder. Herhangi bir e-posta verisi veya içerik iletilmeden önce bağlantıyı kapatır. Böylece kullanıcılarınızın gelen kutusuna hiçbir şey düşmez.',
    },
    {
      q: 'Geçici ve tek kullanımlık mail adreslerini tespit eder mi?',
      a: "Evet. Her kontrol, alan adını 100.000'den fazla geçici ve tek kullanımlık e-posta alan adından oluşan listemizle karşılaştırır. Eşleşme bulunursa details.attributes.disposable true döner ve durum undeliverable olarak ayarlanır. Böylece arka ucunuz geçici hesapları engelleyebilir.",
    },
    {
      q: 'info@ gibi rol tabanlı adresleri engellemeli miyim?',
      a: 'Bu, iş modelinize bağlıdır. Bireysel kullanıcılara yönelik uygulamalarda support@ veya info@ gibi rol hesapları gerçek kuruluşlara ait olabilir. Kullanıcının kim olduğunun önemli olduğu self-servis B2B SaaS ürünlerinde birçok şirket, ortak kullanılan hesap bilgilerinin kötüye kullanımını önlemek için genel rol hesaplarını işaretler veya kabul etmez.',
    },
    {
      q: 'Kayıt sırasında catch-all alan adlarında ne olur?',
      a: 'Catch-all alan adları tüm alıcı adreslerini koşulsuz kabul eder. Bu yüzden standart kontroller sonuç vermez. API\'miz posta kutusunun var olup olmadığını değerlendirmek için aynı çağrıda derin catch-all doğrulaması yapar. Catch-all kontrolü "valid" dönerse kayda güvenle izin verebilirsiniz. "invalid" dönerse adres geri dönecektir ve kayıt durdurulmalıdır.',
    },
    {
      q: 'API zamanında yanıt vermezse formum ne yapmalı?',
      a: 'Fail-open kalıbını uygulamanızı öneririz. Arka uç çağrınızda ağ zaman aşımı veya bağlantı hatası olursa olası bir müşteriyi engellemek yerine kaydın tamamlanmasına izin verin. Doğrulanmamış adresi arka plan işleyicinizde sıraya alın ve teslim durumunu daha sonra tekrar kontrol edin.',
    },
    {
      q: "Email validasyon API'si mi, email doğrulama API'si mi gerekiyor?",
      a: "Web kayıt formlarında yazım hatalarını, geçici gelen kutularını ve botları form gönderilirken durdurmak için gerçek zamanlı kontrol gerekiyorsa email validasyon API'sini seçin. Mevcut pazarlama veritabanlarını denetlerken, CRM kişilerini senkronize ederken veya kampanya göndermeden önce toplu e-posta dosyalarını temizlerken email doğrulama API'sini seçin.",
    },
  ],
  ctaHeadline: 'Kayıt formlarınızı bugün koruyun',
}

const fr: ValidationApiStrings = {
  metaTitle: 'API de validation d’email pour les inscriptions | Giggal.ai',
  ogTitle: 'API de validation d’email pour les inscriptions',
  description:
    'API de validation d’email pour vos formulaires. Bloquez en temps réel les adresses invalides, jetables et génériques en un appel JSON. 1 000 crédits gratuits.',
  ogLocale: 'fr_FR',
  crumb: 'API de validation d’email',
  appName: 'Giggal.ai API de validation d’email',

  h1Lead: 'API de validation d’email en temps réel pour',
  h1Accent: 'les formulaires d’inscription',
  heroIntro:
    'Validez les adresses au moment où les utilisateurs les envoient. Un seul appel contrôle le serveur de messagerie et l’existence de la boîte mail. Il signale aussi les adresses jetables et génériques, pour que vous décidiez quoi accepter. Notre API de validation d’email bloque les mauvaises données dès l’entrée et garde les faux comptes hors de votre base.',
  heroCodeLabel: 'Traitement de l’inscription côté backend',
  heroCodeTag: 'Décision du formulaire',
  heroCta: 'Obtenir une clé API gratuite',
  heroSecondaryCta: 'Voir comment l’ajouter à un formulaire',
  heroNote: '1 000 crédits gratuits, aucune carte requise. Les crédits n’expirent jamais.',

  regexTitle: 'Pourquoi une regex seule ne suffit pas à valider un email',
  regexParas: [
    'Une expression régulière ne contrôle que la structure du texte : la présence d’un @, un format de domaine plausible et des caractères dans les plages ASCII standard. Une regex indique seulement si une saisie ressemble à une adresse mail. Elle ne dit pas si quelqu’un peut y recevoir des messages.',
    'Les saisies {0} ou {1} passent sans problème toutes les regex conformes aux RFC. Pourtant, l’un des domaines peut n’avoir aucun serveur de messagerie actif, et l’autre boîte mail peut ne pas exister.',
    'Notre API de validation d’email au format JSON va bien plus loin que les expressions régulières. En une seule requête, elle inspecte les enregistrements DNS, recherche les serveurs MX, se connecte au serveur de messagerie de destination pour tester la boîte mail et compare le domaine à de longues listes de domaines jetables.',
    'Les regex trop strictes provoquent aussi de faux refus. Les expressions maison rejettent souvent des domaines de premier niveau peu courants comme .studio ou .cloud, des caractères internationaux valides ou des adresses légitimes avec une ponctuation inhabituelle. Notre API applique automatiquement toutes les règles de syntaxe de la RFC 5322. Vous n’avez plus à maintenir des bibliothèques de regex fragiles dans votre code.',
  ],
  checkCards: [
    {
      title: 'Contrôle de syntaxe',
      body: 'Repère les fautes de frappe simples, les extensions de domaine manquantes, la ponctuation interdite et les espaces, avant toute requête réseau.',
    },
    {
      title: 'Vérification DNS et MX',
      body: 'Vérifie que le domaine est enregistré et trouve les serveurs de messagerie configurés pour accepter le courrier entrant.',
    },
    {
      title: 'Contrôle de la boîte mail',
      body: 'Échange directement avec le serveur de messagerie distant pour confirmer que la boîte mail précise existe et peut recevoir du courrier.',
    },
  ],

  decisionTitle: 'Que bloquer, signaler ou accepter à l’inscription',
  decisionIntro:
    'Chaque entreprise a ses propres règles d’inscription. Un SaaS B2B peut exiger des emails professionnels, alors qu’une application grand public accepte volontiers les adresses Gmail personnelles. Voici la grille de décision recommandée, basée sur les vrais attributs de la réponse de l’API :',
  decisionHeaders: ['Résultat de l’API', 'Condition sur le champ', 'Ce que le formulaire doit faire'],
  decisionRows: [
    { title: 'Invalide', body: 'Bloquer tout de suite. Message : « Veuillez saisir une adresse mail valide et active. »' },
    { title: 'Jetable', body: 'Bloquer, ou demander une autre adresse. Message : « Les adresses mail temporaires ne sont pas acceptées. »' },
    { title: 'Adresse générique', body: 'Accepter, mais signaler sur les formulaires B2B. Prévenir les responsables de compte ou classer dans les leads généraux.' },
    { title: 'Messagerie gratuite', body: 'Accepter sur les applications B2C. Exiger un email professionnel sur les formulaires B2B de démo ou d’essai.' },
    { title: 'Catch-all', body: 'Lire {0} : si « valid », accepter ; si « invalid », bloquer ; si null, autoriser l’inscription.' },
    { title: 'Inconnu', body: 'Accepter et vérifier de nouveau plus tard (remboursé). En cas de doute, laisser passer, pour ne jamais bloquer un vrai utilisateur.' },
  ],

  formTitle: 'Ajouter la validation d’email à votre formulaire d’inscription',
  formParas: [
    'Suivez ces quatre étapes pour intégrer la validation en temps réel en toute sécurité. Les requêtes exigent votre clé API privée. Lancez donc le contrôle depuis votre serveur backend.',
    'Pourquoi laisser passer en cas d’échec : les formulaires d’inscription sont sensibles aux délais. Si un appel à une API externe est ralenti par le réseau, bloquer le formulaire peut vous faire perdre un vrai client. Avec un délai d’attente court et une inscription autorisée par défaut, les vrais utilisateurs ne sont pas refusés. Votre backend place l’adresse en file d’attente pour un contrôle en arrière-plan plus tard.',
  ],
  formSteps: [
    {
      title: 'Le formulaire envoie les données à votre backend',
      body: 'Quand un visiteur envoie ses informations d’inscription, le navigateur transmet l’adresse mail à un endpoint de votre application.',
    },
    {
      title: 'Le backend appelle l’API de validation',
      body: 'Votre serveur envoie une requête POST synchrone à Giggal avec votre clé privée, stockée dans une variable d’environnement.',
    },
    {
      title: 'Le backend applique la grille de décision',
      body: 'Lisez les attributs JSON. Si l’email est jetable ou non délivrable, renvoyez un message d’erreur clair au navigateur.',
    },
    {
      title: 'Laisser passer si le délai est dépassé',
      body: 'Si l’appel réseau dépasse le délai, laissez passer : acceptez l’inscription et créez une tâche en arrière-plan pour vérifier l’adresse plus tard.',
    },
  ],
  codeTitle: 'Exemples de code d’intégration',
  codeLabels: [
    'Backend : Node.js (route Express)',
    'Backend : Python (route Flask)',
    'Frontend : script navigateur (appelle votre propre backend)',
  ],
  codeTagServer: 'côté serveur uniquement',
  codeTagClient: 'script côté client',
  codeNote:
    'Important : n’appelez jamais l’endpoint de l’API Giggal directement depuis un script côté client. Gardez vos identifiants privés sur votre serveur.',

  fakeTitle: 'Bloquer les inscriptions jetables et fausses',
  fakeIntro:
    'Les boîtes temporaires faussent les statistiques de votre produit, consomment vos quotas d’essai gratuit et ne deviennent jamais des clients payants. Notre service surveille et signale les schémas d’inscription à risque.',
  fakeCards: [
    {
      title: 'Boîtes jetables',
      body: 'Comparées à notre registre de plus de 100 000 domaines temporaires, tenu à jour. Découvrez comment nous repérons les boîtes jetables avec notre [vérificateur d’adresse mail jetable](/disposable-email-checker).',
    },
    {
      title: 'Détection des alias avec signe plus',
      body: 'Signale les alias créés avec un signe plus ({0}), pour qu’un même utilisateur ne crée pas plusieurs comptes d’essai.',
    },
    {
      title: 'Détection des boîtes no-reply',
      body: 'Repère les boîtes d’envoi automatique qui ignorent les messages reçus. Les utilisateurs ne peuvent pas s’inscrire avec une adresse que personne ne consulte.',
    },
  ],
  typoTitle: 'Ne corrigez pas automatiquement les fautes de frappe',
  typoBody:
    'Ne modifiez jamais une saisie sans prévenir l’utilisateur (par exemple remplacer gnail.com par gmail.com automatiquement). Si une adresse échoue à la validation, affichez un message clair pour que l’utilisateur vérifie sa saisie. Une correction silencieuse risque d’envoyer des liens d’activation de compte ou des reçus de paiement à la mauvaise personne.',

  whereTitle: 'Où valider les emails en temps réel',
  whereIntro: 'Validez les adresses mail partout où les utilisateurs envoient un formulaire dans votre produit.',
  whereCards: [
    {
      title: 'Formulaires d’inscription',
      body: 'Empêchez les inscriptions de spam et assurez-vous que les emails de bienvenue et les liens de confirmation arrivent dans des boîtes actives.',
    },
    {
      title: 'Paiement en e-commerce',
      body: 'Assurez-vous que les avis d’expédition, les reçus et les confirmations de commande arrivent chez vos clients sans échec de livraison.',
    },
    {
      title: 'Demandes de contact et de démo',
      body: 'Écartez les fausses demandes de concurrents et vérifiez les domaines d’entreprise avant d’envoyer les prospects à vos commerciaux.',
    },
    {
      title: 'Inscriptions à la newsletter',
      body: 'Protégez la réputation de votre domaine d’envoi en refusant les saisies mal formées et les inscriptions de robots dès l’opt-in.',
    },
    {
      title: 'Automatisations par webhook',
      body: 'Lancez la validation automatiquement sur les webhooks de vos formulaires avec nos [intégrations Zapier et n8n](/integrations) prêtes à l’emploi.',
    },
    {
      title: 'Modification du profil',
      body: 'Vérifiez les nouvelles adresses quand un utilisateur existant modifie son profil ou son contact de facturation.',
    },
  ],

  fieldsTitle: 'Les champs de réponse utiles à l’inscription',
  fieldsIntro: 'Une référence courte des principaux champs JSON nécessaires pour appliquer vos règles de validation de formulaire.',
  fieldsHeaders: ['Champ JSON', 'Type', 'Usage à l’inscription'],
  fieldUsage: [
    'Contrôle booléen rapide. Vrai quand les vérifications du domaine et de la boîte mail réussissent.',
    'Statut de délivrabilité principal : "deliverable", "undeliverable", "unknown".',
    'Score de qualité basé sur les réponses de la boîte mail, la stabilité des MX et les contrôles de réputation.',
    'Vrai quand le domaine est un service connu de boîtes temporaires ou jetables.',
    'Vrai pour les messageries grand public (Gmail, Outlook). Exigez un domaine d’entreprise sur les formulaires B2B.',
    'Vrai pour les adresses génériques d’organisation comme info@, admin@ ou support@.',
    'Résolution des domaines catch-all dans le même appel. Récupérez les contacts valides au lieu de les supprimer.',
  ],
  fieldsNote:
    'Pour les définitions complètes des endpoints, les schémas des paramètres et les codes d’erreur, consultez la [référence complète de l’API](/public/docs).',

  pricingTitle: 'Tarifs de l’API de validation d’email',
  pricingIntro:
    'Payez seulement les validations que vous lancez, sans minimum mensuel ni engagement. Chaque appel de validation consomme 1 crédit, contrôles catch-all compris. Les résultats inconnus sont remboursés automatiquement, et vos 1 000 premiers crédits sont gratuits.',
  pricingNote: 'Découvrez tous les paliers de volume et les remises des abonnements mensuels sur notre [page des tarifs](/pricing).',

  faqTitle: 'FAQ sur l’API de validation d’email',
  faqIntro: 'Les réponses aux questions fréquentes sur l’intégration dans les formulaires d’inscription et la validation en temps réel.',
  faqs: [
    {
      q: 'Existe-t-il une API de validation d’email gratuite ?',
      a: 'Oui. Chaque nouveau compte reçoit 1 000 crédits gratuits à l’inscription, sans carte bancaire. Vous pouvez créer une clé API dans votre tableau de bord et tester tout de suite la validation de formulaires en temps réel. Les crédits gratuits n’expirent jamais et donnent accès à tous les attributs et contrôles de validation.',
    },
    {
      q: 'Puis-je appeler l’API directement depuis le navigateur ?',
      a: 'Non. Un appel direct depuis du JavaScript côté client exposerait votre clé API secrète à toute personne qui inspecte les requêtes réseau du navigateur. Envoyez toujours les saisies du formulaire à votre propre serveur backend ou à une fonction serverless. C’est votre serveur qui exécute ensuite la requête vers https://api.giggal.ai/v1/verify.',
    },
    {
      q: 'La validation envoie-t-elle un email à l’utilisateur ?',
      a: 'Aucun message n’est jamais envoyé. L’API vérifie si la boîte mail existe. Elle ferme la connexion avant la transmission de tout contenu d’email. Vos utilisateurs ne reçoivent donc rien dans leur boîte.',
    },
    {
      q: 'L’API détecte-t-elle les adresses jetables et temporaires ?',
      a: 'Oui. Chaque contrôle compare le domaine à notre registre de plus de 100 000 domaines d’emails jetables et temporaires. En cas de correspondance, details.attributes.disposable renvoie true et le statut passe à undeliverable. Votre backend peut alors bloquer les comptes temporaires.',
    },
    {
      q: 'Faut-il bloquer les adresses génériques comme info@ ?',
      a: 'Cela dépend de votre modèle. Pour les applications grand public, une adresse générique comme support@ ou info@ peut appartenir à une vraie organisation. Pour un SaaS B2B en libre-service qui a besoin de savoir qui utilise chaque compte, beaucoup d’entreprises signalent ou refusent les adresses génériques. Elles évitent ainsi le partage d’identifiants.',
    },
    {
      q: 'Que se passe-t-il avec les domaines catch-all à l’inscription ?',
      a: 'Les domaines catch-all acceptent toutes les adresses sans condition, donc les contrôles standard ne donnent pas de réponse claire. Notre API lance une vérification catch-all approfondie dans le même appel pour savoir si la boîte mail existe. Si le contrôle catch-all renvoie « valid », vous pouvez accepter l’inscription. S’il renvoie « invalid », l’adresse rebondira et doit être bloquée.',
    },
    {
      q: 'Que doit faire mon formulaire si l’API ne répond pas à temps ?',
      a: 'Nous recommandons de laisser passer en cas d’échec. Si l’appel de votre backend dépasse le délai ou subit une erreur de connexion, laissez l’inscription se terminer au lieu de bloquer un client potentiel. Placez l’adresse non validée dans une file de tâches en arrière-plan pour vérifier sa délivrabilité plus tard.',
    },
    {
      q: 'Ai-je besoin d’une API de validation d’email ou d’une API de vérification d’email ?',
      a: 'Choisissez une API de validation d’email pour des contrôles en temps réel dans vos formulaires web, afin de stopper les fautes de frappe, les boîtes jetables et les robots à l’envoi. Choisissez une API de vérification d’email pour contrôler une base marketing existante, synchroniser des contacts CRM ou nettoyer de gros fichiers d’emails avant une campagne.',
    },
  ],

  ctaHeadline: 'Protégez vos formulaires d’inscription dès aujourd’hui',
}

// Dutch. Terms: SEO-Plan/i18n-batch1-nl-pl-terminology.md (je, e-mailvalidatie,
// API-sleutel, wegwerpadres, rol-adres, credits). Code, endpoints and JSON fields
// stay in the page component.
const nl: ValidationApiStrings = {
  metaTitle: 'E-mailvalidatie-API voor aanmeldformulieren | Giggal.ai',
  ogTitle: 'E-mailvalidatie-API voor aanmeldformulieren',
  description:
    'E-mailvalidatie-API voor aanmeld- en afrekenformulieren. Blokkeer ongeldige, wegwerp- en rol-adressen in realtime met één JSON-call. 1.000 gratis credits.',
  ogLocale: 'nl_NL',
  crumb: 'E-mailvalidatie-API',
  appName: 'Giggal.ai E-mailvalidatie-API',

  h1Lead: 'E-mailvalidatie-API in realtime voor',
  h1Accent: 'aanmeldformulieren',
  heroIntro:
    'Valideer adressen op het moment dat gebruikers ze versturen. Eén call controleert de mailserver en of de mailbox bestaat. Kenmerken voor wegwerpadressen en rol-adressen laten jou beslissen wat je accepteert. Onze e-mailvalidatie-API houdt slechte adressen tegen voordat ze in je database komen. Zo krijg je geen nepaccounts.',
  heroCodeLabel: 'Aanmeldhandler in de backend',
  heroCodeTag: 'Beslissing in het formulier',
  heroCta: 'Gratis API-sleutel aanmaken',
  heroSecondaryCta: 'Zo voeg je het toe aan een formulier',
  heroNote: '1.000 gratis credits, geen creditcard nodig. Credits verlopen nooit.',

  regexTitle: 'Waarom regex alleen geen e-mailvalidatie is',
  regexParas: [
    'Een reguliere expressie controleert alleen de opbouw van de tekst: of er een @ in staat, of het domein er plausibel uitziet en of de tekens binnen het gewone ASCII-bereik vallen. Regex vertelt je alleen of een invoer eruitziet als een e-mailadres. Het vertelt je niet of iemand daar berichten kan ontvangen.',
    'Typ je {0} of {1}, dan komt dat door elke regex die de RFC volgt. Toch kan het ene domein geen actieve mailservers hebben, en kan de andere mailbox niet bestaan.',
    'Onze e-mailvalidatie-API met JSON-antwoord gaat veel verder dan reguliere expressies. In één verzoek bekijkt hij de DNS-records, zoekt hij de MX-hosts op, maakt hij verbinding met de ontvangende mailserver om de mailbox te testen en vergelijkt hij het domein met grote lijsten van wegwerpdomeinen.',
    'Strakke regex-patronen wijzen ook goede adressen af. Eigen expressies weigeren vaak minder gewone topleveldomeinen zoals .studio of .cloud, geldige internationale tekens of echte adressen met ongewone leestekens. Onze API verwerkt alle syntaxisregels van RFC 5322 automatisch. Je hoeft dus geen kwetsbare regex-bibliotheken in je code te onderhouden.',
  ],
  checkCards: [
    {
      title: 'Syntaxiscontrole',
      body: 'Vindt eenvoudige tikfouten, ontbrekende topleveldomeinen, ongeldige leestekens en spaties, nog voor er iets op het netwerk wordt opgezocht.',
    },
    {
      title: 'DNS- en MX-controle',
      body: 'Controleert of het domein geregistreerd is en zoekt de ingestelde mailservers die inkomende berichten kunnen ontvangen.',
    },
    {
      title: 'Controle van de mailbox',
      body: 'Praat direct met de externe mailserver om te bevestigen of die mailbox bestaat en mail kan ontvangen.',
    },
  ],

  decisionTitle: 'Wat je bij aanmelding blokkeert, markeert of toestaat',
  decisionIntro:
    'Elk bedrijf stelt andere eisen aan een aanmelding. Een B2B-SaaS voor grote bedrijven kan een zakelijk e-mailadres verplicht stellen, terwijl een sociale app voor consumenten persoonlijke Gmail-adressen welkom heet. Dit is de aanbevolen beslistabel, gebaseerd op echte kenmerken in het API-antwoord:',
  decisionHeaders: ['API-resultaat', 'Veldvoorwaarde', 'Wat het formulier doet'],
  decisionRows: [
    { title: 'Ongeldig', body: 'Direct blokkeren. Toon: "Vul een geldig en actief e-mailadres in."' },
    { title: 'Wegwerpadres', body: 'Blokkeren of om een ander adres vragen. Toon: "Tijdelijke e-mailadressen zijn niet toegestaan."' },
    { title: 'Rol-adres', body: 'Toestaan, en markeren op B2B-formulieren. Laat accountmanagers het weten of zet het adres bij de algemene leads.' },
    { title: 'Gratis e-mail', body: 'Toestaan in B2C-apps. Op B2B-formulieren voor een demo of proefperiode een zakelijk e-mailadres verplichten.' },
    { title: 'Catch-all', body: 'Controleer {0}: bij "valid" toestaan, bij "invalid" blokkeren, bij null de registratie toestaan.' },
    { title: 'Onbekend', body: 'Accepteren en later opnieuw controleren (terugbetaald). Laat het formulier doorgaan, zodat echte gebruikers nooit worden geblokkeerd.' },
  ],

  formTitle: 'E-mailvalidatie toevoegen aan je aanmeldformulier',
  formParas: [
    'Volg deze vier stappen om validatie in realtime veilig in te bouwen. De verzoeken hebben je geheime API-sleutel nodig. Voer de controle daarom uit vanaf je backendserver.',
    'Waarom fail-open belangrijk is: aanmeldformulieren zijn gevoelig voor vertraging. Als een externe API-call traag is door het netwerk, kun je een echte klant verliezen door het formulier te blokkeren. Stel een korte time-out in en laat de registratie daarna automatisch doorgaan. Zo stuur je echte gebruikers niet weg, en zet je backend het adres in een wachtrij voor een controle op de achtergrond.',
  ],
  formSteps: [
    {
      title: 'Het formulier stuurt naar je backend',
      body: 'Als een bezoeker zijn registratiegegevens verstuurt, stuurt de browser het e-mailadres naar een endpoint van je applicatie.',
    },
    {
      title: 'De backend roept de validatie-API aan',
      body: 'Je server stuurt een synchroon POST-verzoek naar Giggal met je geheime sleutel, die in een omgevingsvariabele staat.',
    },
    {
      title: 'De backend past de beslistabel toe',
      body: 'Lees de kenmerken in de JSON. Is het e-mailadres een wegwerpadres of niet bezorgbaar, stuur dan een duidelijke foutmelding terug naar de browser.',
    },
    {
      title: 'Doorgaan bij een time-out',
      body: 'Duurt de verbinding met de API te lang, laat de registratie dan doorgaan (fail-open) en zet een taak in de wachtrij om het adres later te controleren.',
    },
  ],
  codeTitle: 'Codevoorbeelden voor de implementatie',
  codeLabels: [
    'Backend: Node.js (Express-route)',
    'Backend: Python (Flask-route)',
    'Frontend: browser (roept je eigen backend aan)',
  ],
  codeTagServer: 'alleen op de server',
  codeTagClient: 'script in de browser',
  codeNote:
    'Belangrijk: roep het endpoint van de Giggal API nooit direct aan vanuit scripts in de browser. Houd je gegevens geheim op je server.',

  fakeTitle: 'Stop aanmeldingen met wegwerpadressen en nepadressen',
  fakeIntro:
    'Tijdelijke mailboxen maken je productcijfers onbetrouwbaar, gebruiken gratis proefperiodes op en worden nooit betalende klanten. Onze dienst herkent en markeert riskante patronen bij aanmeldingen.',
  fakeCards: [
    {
      title: 'Wegwerpmailboxen',
      body: 'Gecontroleerd tegen onze actuele lijst van meer dan 100.000 tijdelijke domeinen. Lees hoe we wegwerpmailboxen herkennen op de pagina van onze [wegwerp-e-mailchecker](/disposable-email-checker).',
    },
    {
      title: 'Plus-adressering herkennen',
      body: 'Markeert aliassen die met een plus-tag zijn gemaakt ({0}). Zo maakt één gebruiker geen dubbele proefaccounts.',
    },
    {
      title: 'No-reply-mailboxen herkennen',
      body: 'Herkent automatische mailboxen en verzendadressen die inkomende berichten weggooien. Zo melden gebruikers zich niet aan met een adres dat niemand leest.',
    },
  ],
  typoTitle: 'Verbeter tikfouten van gebruikers niet automatisch',
  typoBody:
    'Pas wat een gebruiker invult nooit stilletjes aan (bijvoorbeeld gnail.com automatisch veranderen in gmail.com). Komt een adres niet door de validatie, vraag de gebruiker dan met een duidelijke melding om zijn invoer te controleren. Als je adressen stilletjes aanpast, kunnen activatielinks of facturen bij de verkeerde persoon terechtkomen.',

  whereTitle: 'Waar je e-mailadressen in realtime valideert',
  whereIntro: 'Valideer e-mailadressen overal waar gebruikers in je product een formulier versturen.',
  whereCards: [
    {
      title: 'Registratieformulieren',
      body: 'Voorkom spam bij registratie en zorg dat welkomstmails en verificatielinks in actieve mailboxen aankomen.',
    },
    {
      title: 'Afrekenen in een webshop',
      body: 'Zorg dat verzendberichten, bonnen en orderbevestigingen klanten bereiken zonder bezorgfouten.',
    },
    {
      title: 'Aanvragen voor leads en demo’s',
      body: 'Filter nepinzendingen van concurrenten en controleer bedrijfsdomeinen voordat je prospects doorstuurt naar je verkopers.',
    },
    {
      title: 'Aanmeldingen voor de nieuwsbrief',
      body: 'Bescherm de reputatie van je verzenddomein door onjuiste invoer en aanmeldingen van bots te weigeren bij de opt-in.',
    },
    {
      title: 'Automatisering met webhooks',
      body: 'Start de validatie automatisch via webhooks van formulieren met onze kant-en-klare [integraties voor Zapier en n8n](/integrations).',
    },
    {
      title: 'Wijzigingen in het profiel',
      body: 'Controleer het nieuwe e-mailadres als bestaande gebruikers hun profiel of hun factuurcontact wijzigen.',
    },
  ],

  fieldsTitle: 'Velden in het antwoord die je bij aanmelding gebruikt',
  fieldsIntro: 'Een kort overzicht van de belangrijkste JSON-velden voor de validatieregels in je formulier.',
  fieldsHeaders: ['JSON-veld', 'Type', 'Gebruik bij aanmelding'],
  fieldUsage: [
    'Snelle booleaanse controle. True als de controles van domein en mailbox slagen.',
    'Belangrijkste status: "deliverable", "undeliverable", "unknown".',
    'Kwaliteitsscore op basis van de antwoorden van de mailbox, de stabiliteit van de MX en reputatiecontroles.',
    'True als het domein een bekende dienst voor tijdelijke of wegwerpmailboxen is.',
    'True voor providers voor consumenten (Gmail, Outlook). Vraag om een zakelijk domein op B2B-formulieren.',
    'True voor adressen van een organisatie, zoals info@, admin@ of support@.',
    'Beoordeling van catch-all-domeinen in dezelfde call. Zo haal je geldige leads terug zonder ze weg te gooien.',
  ],
  fieldsNote:
    'Alle endpoints, parameterschema’s en foutcodes staan in de [volledige API-documentatie](/public/docs).',

  pricingTitle: 'Prijzen van de e-mailvalidatie-API',
  pricingIntro:
    'Je betaalt alleen voor de validaties die je uitvoert, zonder maandelijks minimum of verplichting. Elke validatie via de API kost 1 credit, inclusief de catch-all-controle. Onbekende resultaten worden automatisch terugbetaald, en je eerste 1.000 credits zijn gratis.',
  pricingNote: 'Bekijk alle volumes en de korting op maandabonnementen op onze [prijspagina](/pricing).',

  faqTitle: 'Veelgestelde vragen over de e-mailvalidatie-API',
  faqIntro: 'Antwoorden op veelgestelde vragen over het inbouwen in registratieformulieren en validatie in realtime.',
  faqs: [
    {
      q: 'Is er een gratis e-mailvalidatie-API?',
      a: 'Ja. Elk nieuw account krijgt bij registratie 1.000 gratis credits, zonder creditcard. Je maakt een API-sleutel aan in je dashboard en kunt meteen validaties in formulieren testen. De gratis credits verlopen nooit en geven toegang tot alle kenmerken en controles.',
    },
    {
      q: 'Kan ik de API direct vanuit de browser aanroepen?',
      a: 'Nee. Als je de API direct aanroept vanuit JavaScript in de browser, kan iedereen die de netwerkverzoeken bekijkt je geheime API-sleutel zien. Stuur de invoer van het formulier altijd eerst naar je eigen backendserver of serverless functie. Laat je server daarna het verzoek naar https://api.giggal.ai/v1/verify uitvoeren.',
    },
    {
      q: 'Stuurt de validatie een e-mail naar de gebruiker?',
      a: 'Er wordt nooit een bericht verstuurd. De API controleert of de mailbox bestaat. Hij sluit de verbinding voordat er e-mailgegevens of inhoud worden verstuurd. Je gebruikers krijgen dus niets in hun inbox.',
    },
    {
      q: 'Herkent de API wegwerpadressen en tijdelijke adressen?',
      a: 'Ja. Elke controle vergelijkt het domein met onze lijst van meer dan 100.000 wegwerpdomeinen en tijdelijke e-maildomeinen. Is er een match, dan geeft details.attributes.disposable true terug en wordt de status undeliverable. Zo kan je backend tijdelijke accounts blokkeren.',
    },
    {
      q: 'Moet ik rol-adressen zoals info@ blokkeren?',
      a: 'Dat hangt af van je bedrijfsmodel. In apps voor consumenten kunnen rol-adressen zoals support@ of info@ bij echte organisaties horen. Bij self-service B2B-SaaS, waar je wilt weten wie een account gebruikt, kiezen veel bedrijven ervoor om algemene rol-adressen te markeren of te weigeren. Zo voorkomen ze dat inloggegevens worden gedeeld.',
    },
    {
      q: 'Wat gebeurt er met catch-all-domeinen bij aanmelding?',
      a: 'Catch-all-domeinen accepteren elk adres zonder voorwaarde. Daardoor geeft een standaardcontrole geen duidelijk antwoord. Onze API voert de catch-all-controle in dezelfde call uit en kijkt of de mailbox bestaat. Geeft de catch-all-controle "valid", dan kun je de aanmelding veilig toestaan. Bij "invalid" zal het adres bouncen en moet je het tegenhouden.',
    },
    {
      q: 'Wat moet mijn formulier doen als de API niet op tijd antwoordt?',
      a: 'We raden fail-open aan. Krijgt je backend een time-out of een verbindingsfout, laat de registratie dan doorgaan in plaats van een mogelijke klant te blokkeren. Zet het niet gevalideerde adres in de wachtrij van je achtergrondproces, zodat je de status later opnieuw controleert.',
    },
    {
      q: 'Heb ik een e-mailvalidatie-API of een e-mailverificatie-API nodig?',
      a: 'Kies een e-mailvalidatie-API als je in realtime wilt controleren in registratieformulieren op je website, om tikfouten, wegwerpmailboxen en bots te stoppen bij het verzenden. Kies een e-mailverificatie-API als je bestaande marketingdatabases controleert, CRM-contacten synchroniseert of bulkbestanden met e-mailadressen opschoont voordat je campagnes verstuurt.',
    },
  ],

  ctaHeadline: 'Bescherm je aanmeldformulieren vandaag nog',
}

// Polish. Terms follow SEO-Plan/i18n-batch1-nl-pl-terminology.md: "API do
// walidacji email" in the title and H1, "walidacja e-mail" in running text,
// klucz API, register "ty". API values ("valid", "invalid", "deliverable")
// stay in English because they are what the JSON returns.
const pl: ValidationApiStrings = {
  metaTitle: 'API do walidacji email w formularzach rejestracji | Giggal.ai',
  ogTitle: 'API do walidacji email w formularzach rejestracji',
  description:
    'API do walidacji email w czasie rzeczywistym dla formularzy. Blokuj adresy nieprawidłowe, jednorazowe i funkcyjne jednym wywołaniem JSON. 1000 kredytów gratis.',
  ogLocale: 'pl_PL',
  crumb: 'API do walidacji email',
  appName: 'Giggal.ai API do walidacji email',

  h1Lead: 'API do walidacji email w czasie rzeczywistym dla',
  h1Accent: 'formularzy rejestracji',
  heroIntro:
    'Waliduj adresy w chwili, gdy użytkownicy je wysyłają. Jedno wywołanie sprawdza serwer pocztowy i to, czy skrzynka istnieje. Dostajesz też oznaczenia adresów jednorazowych i funkcyjnych, więc to ty decydujesz, co przyjąć. Nasze API do walidacji email zatrzymuje złe dane, zanim trafią do twojej bazy, i blokuje fałszywe konta.',
  heroCodeLabel: 'Obsługa rejestracji w backendzie',
  heroCodeTag: 'Decyzja formularza',
  heroCta: 'Odbierz darmowy klucz API',
  heroSecondaryCta: 'Zobacz, jak dodać je do formularza',
  heroNote: '1000 darmowych kredytów, bez karty. Kredyty nigdy nie wygasają.',

  regexTitle: 'Dlaczego sam regex to jeszcze nie walidacja e-mail',
  regexParas: [
    'Wyrażenie regularne sprawdza tylko budowę ciągu znaków: czy jest znak @, czy format domeny wygląda wiarygodnie i czy znaki mieszczą się w standardowym zakresie ASCII. Regex mówi tylko, czy wpis wygląda jak adres e-mail. Nie mówi, czy ktoś może pod nim odbierać wiadomości.',
    'Adres {0} albo {1} przejdzie przez każdy regex zgodny z RFC. Mimo to jedna domena może nie mieć aktywnych serwerów pocztowych, a druga skrzynka może nie istnieć.',
    'Nasze API do walidacji email z odpowiedzią JSON robi znacznie więcej niż wyrażenia regularne. W jednym zapytaniu sprawdza rekordy DNS, wyszukuje hosty MX, łączy się z docelowym serwerem pocztowym, aby sprawdzić odpowiedź skrzynki, i porównuje domenę z obszernymi listami domen jednorazowych.',
    'Sztywne wzorce regex powodują też błędne odrzucenia. Własne wyrażenia często odrzucają rzadsze domeny najwyższego poziomu, takie jak .studio czy .cloud, prawidłowe znaki narodowe albo poprawne adresy z nietypową interpunkcją. Nasze API automatycznie obsługuje całą składnię RFC 5322, więc nie musisz utrzymywać w kodzie zawodnych bibliotek regex.',
  ],
  checkCards: [
    {
      title: 'Test składni',
      body: 'Wyłapuje proste literówki, brak domeny najwyższego poziomu, niedozwoloną interpunkcję i spacje, zanim zostanie wykonane jakiekolwiek zapytanie sieciowe.',
    },
    {
      title: 'Weryfikacja DNS i MX',
      body: 'Sprawdza, czy domena jest zarejestrowana, i wyszukuje skonfigurowane serwery pocztowe, które mogą przyjmować wiadomości.',
    },
    {
      title: 'Test skrzynki',
      body: 'Łączy się bezpośrednio ze zdalnym serwerem pocztowym, aby potwierdzić, czy konkretna skrzynka istnieje i może odbierać pocztę.',
    },
  ],

  decisionTitle: 'Co blokować, co oznaczać, a co przepuszczać przy rejestracji',
  decisionIntro:
    'Różne firmy mają różne wymagania przy rejestracji. Firmowy SaaS B2B może wymagać adresów firmowych, a aplikacja społecznościowa dla konsumentów chętnie przyjmie prywatne adresy Gmail. Oto zalecana tabela decyzji oparta na prawdziwych atrybutach odpowiedzi API:',
  decisionHeaders: ['Wynik API', 'Warunek pola', 'Co powinien zrobić formularz'],
  decisionRows: [
    { title: 'Nieprawidłowy', body: 'Zablokuj od razu. Pokaż komunikat: „Podaj prawidłowy, aktywny adres e-mail.”' },
    { title: 'Jednorazowy', body: 'Zablokuj albo poproś o inny adres. Pokaż komunikat: „Tymczasowe adresy e-mail są niedozwolone.”' },
    { title: 'Adres funkcyjny', body: 'Przepuść, ale oznacz w formularzach B2B. Powiadom opiekunów klientów albo przekaż adres do ogólnej puli leadów.' },
    { title: 'Darmowa poczta', body: 'Przepuść w aplikacjach B2C. W formularzach demo i okresu próbnego B2B wymagaj firmowego adresu.' },
    { title: 'Catch-all', body: 'Sprawdź {0}: jeśli „valid”, przepuść; jeśli „invalid”, zablokuj; jeśli null, pozwól na rejestrację.' },
    { title: 'Nieznany', body: 'Przyjmij i sprawdź ponownie później (kredyt jest zwracany). Przy braku odpowiedzi przepuszczaj, aby nigdy nie blokować prawdziwych użytkowników.' },
  ],

  formTitle: 'Dodaj walidację e-mail do formularza rejestracji',
  formParas: [
    'Wykonaj te cztery kroki, aby bezpiecznie wdrożyć walidację w czasie rzeczywistym. Zapytania wymagają twojego prywatnego klucza API, więc uruchamiaj test z serwera backendu.',
    'Dlaczego wzorzec fail-open jest ważny: formularze rejestracji są wrażliwe na opóźnienia. Jeśli zewnętrzne wywołanie API ma opóźnienie sieciowe, zablokowanie formularza może kosztować cię prawdziwego klienta. Krótki limit czasu i automatyczne przepuszczenie rejestracji sprawiają, że prawdziwi użytkownicy nie są odrzucani. W tym czasie backend dodaje adres do kolejki na późniejszy test w tle.',
  ],
  formSteps: [
    {
      title: 'Formularz wysyła dane do backendu',
      body: 'Gdy odwiedzający wysyła dane rejestracji, przeglądarka przesyła adres e-mail do endpointu twojej aplikacji.',
    },
    {
      title: 'Backend wywołuje API do walidacji',
      body: 'Twój serwer wysyła synchroniczne zapytanie POST do Giggal z prywatnym kluczem zapisanym w zmiennej środowiskowej.',
    },
    {
      title: 'Backend stosuje tabelę decyzji',
      body: 'Odczytaj atrybuty JSON. Jeśli adres jest jednorazowy albo niedostarczalny, zwróć do przeglądarki jasny komunikat o błędzie.',
    },
    {
      title: 'Fail-open przy przekroczeniu czasu',
      body: 'Jeśli komunikacja z API przekroczy limit czasu, przepuść rejestrację i dodaj do kolejki zadanie w tle, które zweryfikuje adres później.',
    },
  ],
  codeTitle: 'Przykłady kodu wdrożenia',
  codeLabels: [
    'Backend: Node.js (trasa Express)',
    'Backend: Python (trasa Flask)',
    'Frontend: klient w przeglądarce (wywołuje twój backend)',
  ],
  codeTagServer: 'tylko po stronie serwera',
  codeTagClient: 'skrypt po stronie klienta',
  codeNote:
    'Ważne: nigdy nie wywołuj endpointu API Giggal bezpośrednio ze skryptów po stronie klienta. Trzymaj dane uwierzytelniające na swoim serwerze.',

  fakeTitle: 'Zatrzymaj jednorazowe i fałszywe rejestracje',
  fakeIntro:
    'Tymczasowe skrzynki zaburzają analitykę produktu, zużywają limity darmowych okresów próbnych i nigdy nie zamieniają się w płacących klientów. Nasza usługa stale monitoruje i oznacza rejestracje o wysokim ryzyku.',
  fakeCards: [
    {
      title: 'Jednorazowe skrzynki',
      body: 'Sprawdzane w naszym aktualnym rejestrze ponad 100 000 tymczasowych domen. Dowiedz się, jak rozpoznajemy jednorazowe skrzynki, w naszym [narzędziu do sprawdzania jednorazowych adresów e-mail](/disposable-email-checker).',
    },
    {
      title: 'Wykrywanie adresów z plusem',
      body: 'Oznacza aliasy utworzone z tagiem plus ({0}), dzięki czemu jedna osoba nie założy kilku kont próbnych.',
    },
    {
      title: 'Wykrywanie skrzynek no-reply',
      body: 'Wykrywa skrzynki nadawcze i automatyczne, które odrzucają przychodzącą korespondencję. Użytkownicy nie zarejestrują się więc adresem, z którym nie da się komunikować.',
    },
  ],
  typoTitle: 'Nie poprawiaj literówek automatycznie',
  typoBody:
    'Nigdy nie zmieniaj po cichu tego, co wpisał użytkownik (na przykład automatycznie z gnail.com na gmail.com). Jeśli adres nie przejdzie walidacji, pokaż użytkownikowi jasny komunikat z prośbą o sprawdzenie wpisu. Ciche poprawianie grozi tym, że link aktywacyjny albo rachunek trafi do niewłaściwej osoby.',

  whereTitle: 'Gdzie walidować adresy e-mail w czasie rzeczywistym',
  whereIntro: 'Waliduj adresy e-mail wszędzie tam, gdzie użytkownicy wysyłają formularze w twoim produkcie.',
  whereCards: [
    {
      title: 'Formularze rejestracji użytkowników',
      body: 'Zapobiegaj spamowi przy rejestracji i pomóż, by e-maile powitalne i linki weryfikacyjne trafiały do aktywnych skrzynek.',
    },
    {
      title: 'Zamówienia w sklepie internetowym',
      body: 'Zadbaj, aby powiadomienia o wysyłce, rachunki i potwierdzenia zamówień docierały do klientów bez błędów dostarczenia.',
    },
    {
      title: 'Zapytania o demo i kontakt',
      body: 'Odfiltruj fałszywe zgłoszenia od konkurencji i sprawdź domeny firm, zanim przekażesz kontakty handlowcom.',
    },
    {
      title: 'Zapisy do newslettera',
      body: 'Chroń reputację domeny, z której wysyłasz newsletter. Odrzucaj błędne wpisy i rejestracje botów już przy zapisie.',
    },
    {
      title: 'Automatyzacje z webhookami',
      body: 'Uruchamiaj walidację automatycznie po webhooku z formularza dzięki gotowym [integracjom z Zapier i n8n](/integrations).',
    },
    {
      title: 'Zmiany w profilu konta',
      body: 'Weryfikuj nowe adresy e-mail, gdy obecni użytkownicy zmieniają profil albo dane kontaktowe do rozliczeń.',
    },
  ],

  fieldsTitle: 'Pola odpowiedzi, których użyjesz przy rejestracji',
  fieldsIntro: 'Krótki przegląd głównych pól JSON potrzebnych do reguł walidacji formularza.',
  fieldsHeaders: ['Pole JSON', 'Typ', 'Zastosowanie przy rejestracji'],
  fieldUsage: [
    'Szybki test logiczny. True, gdy testy domeny i skrzynki przejdą pomyślnie.',
    'Główny status dostarczenia: „deliverable”, „undeliverable”, „unknown”.',
    'Wynik jakości oparty na odpowiedziach skrzynki, stabilności MX i testach reputacji.',
    'True, gdy domena to znana usługa tymczasowych lub jednorazowych skrzynek.',
    'True dla dostawców poczty dla konsumentów (Gmail, Outlook). W formularzach B2B wymagaj domen firmowych.',
    'True dla adresów organizacyjnych, takich jak info@, admin@ lub support@.',
    'Sprawdzanie domen catch-all w tym samym wywołaniu. Odzyskujesz prawidłowe kontakty, zamiast je odrzucać.',
  ],
  fieldsNote:
    'Pełne definicje endpointów, schematy parametrów i kody błędów znajdziesz w [pełnej dokumentacji API](/public/docs).',

  pricingTitle: 'Cennik API do walidacji email',
  pricingIntro:
    'Płacisz tylko za wykonane walidacje, bez miesięcznych minimów i zobowiązań. Każde wywołanie API zużywa 1 kredyt, a test catch-all w tym samym wywołaniu jest w cenie. Kredyty za nieznane wyniki są zwracane automatycznie, a pierwsze 1000 kredytów dostajesz za darmo.',
  pricingNote: 'Wszystkie pakiety i rabat w abonamencie miesięcznym znajdziesz na [stronie z cennikiem](/pricing).',

  faqTitle: 'API do walidacji email: pytania i odpowiedzi',
  faqIntro: 'Odpowiedzi na częste pytania o wdrożenie w formularzach rejestracji i walidację w czasie rzeczywistym.',
  faqs: [
    {
      q: 'Czy jest darmowe API do walidacji email?',
      a: 'Tak. Każde nowe konto dostaje 1000 darmowych kredytów przy rejestracji, bez karty płatniczej. Klucz API wygenerujesz w panelu dewelopera i od razu możesz testować walidację formularzy w czasie rzeczywistym. Darmowe kredyty nigdy nie wygasają i dają pełny dostęp do wszystkich atrybutów i testów walidacji.',
    },
    {
      q: 'Czy mogę wywołać API bezpośrednio z przeglądarki?',
      a: 'Nie. Wywołanie API bezpośrednio z JavaScriptu po stronie klienta ujawniłoby twój tajny klucz API każdemu, kto podejrzy zapytania sieciowe w przeglądarce. Zawsze wysyłaj dane z formularza najpierw do własnego serwera backendu lub funkcji serverless. Zapytanie do https://api.giggal.ai/v1/verify powinien wykonać twój serwer.',
    },
    {
      q: 'Czy walidacja wysyła e-mail do użytkownika?',
      a: 'Nie jest wysyłana żadna wiadomość. API sprawdza, czy skrzynka istnieje. Zamyka połączenie, zanim zostaną przesłane jakiekolwiek dane lub treść e-maila, więc do skrzynek twoich użytkowników nic nie trafia.',
    },
    {
      q: 'Czy API wykrywa jednorazowe i tymczasowe adresy?',
      a: 'Tak. Każdy test porównuje domenę z naszym rejestrem ponad 100 000 jednorazowych i tymczasowych domen e-mail. Jeśli domena jest w rejestrze, details.attributes.disposable zwraca true, a status ma wartość undeliverable. Twój backend może wtedy zablokować tymczasowe konto.',
    },
    {
      q: 'Czy blokować adresy funkcyjne, takie jak info@?',
      a: 'To zależy od twojego modelu biznesowego. W aplikacjach dla konsumentów adresy funkcyjne, takie jak support@ czy info@, mogą należeć do prawdziwych organizacji. W samoobsługowym SaaS B2B, gdzie liczy się odpowiedzialność konkretnego użytkownika, wiele firm oznacza albo blokuje ogólne adresy funkcyjne, aby zapobiec nadużyciom wspólnych danych logowania.',
    },
    {
      q: 'Co się dzieje z domenami catch-all przy rejestracji?',
      a: 'Domeny catch-all przyjmują każdy adres odbiorcy bez warunków, więc zwykłe testy nie dają jasnego wyniku. Nasze API w tym samym wywołaniu wykonuje dokładną weryfikację catch-all i sprawdza, czy skrzynka istnieje. Jeśli test catch-all zwróci „valid”, możesz bezpiecznie przepuścić rejestrację. Jeśli zwróci „invalid”, adres da odbicie i trzeba go zatrzymać.',
    },
    {
      q: 'Co ma zrobić formularz, jeśli API nie odpowie na czas?',
      a: 'Zalecamy wzorzec fail-open. Jeśli wywołanie z backendu przekroczy limit czasu albo wystąpi błąd połączenia, pozwól dokończyć rejestrację, zamiast blokować potencjalnego klienta. Dodaj niesprawdzony adres do kolejki zadań w tle i sprawdź jego status później.',
    },
    {
      q: 'Potrzebuję API do walidacji email czy API do weryfikacji email?',
      a: 'Wybierz API do walidacji email, gdy potrzebujesz testów w czasie rzeczywistym w formularzach rejestracji, aby zatrzymać literówki, jednorazowe skrzynki i boty przy wysłaniu formularza. Wybierz API do weryfikacji email, gdy sprawdzasz istniejące bazy marketingowe, synchronizujesz kontakty w CRM albo masowo czyścisz pliki z adresami przed kampanią.',
    },
  ],

  ctaHeadline: 'Chroń swoje formularze rejestracji już dziś',
}

const id: ValidationApiStrings = {
  metaTitle: 'API Validasi Email untuk Cek Pendaftaran Real-Time | Giggal.ai',
  ogTitle: 'API Validasi Email untuk Cek Pendaftaran Real-Time',
  description:
    'API validasi email untuk formulir pendaftaran dan checkout. Blokir email tidak valid, sekali pakai, dan berbasis peran secara real-time. 1.000 kredit gratis.',
  ogLocale: 'id_ID',
  crumb: 'API validasi email',
  appName: 'Giggal.ai API Validasi Email',

  h1Lead: 'API validasi email real-time untuk',
  h1Accent: 'formulir pendaftaran',
  heroIntro:
    'Validasi alamat saat pengguna mengirim formulir. Satu panggilan mengecek server email dan apakah kotak masuknya ada, lengkap dengan tanda email sekali pakai dan alamat berbasis peran, sehingga Anda yang menentukan alamat mana yang diterima. API validasi email kami memblokir data buruk sejak awal, sehingga akun palsu tidak masuk ke database Anda.',
  heroCodeLabel: 'Handler pendaftaran di backend',
  heroCodeTag: 'Keputusan formulir',
  heroCta: 'Dapatkan API key gratis',
  heroSecondaryCta: 'Lihat cara memasangnya di formulir',
  heroNote: '1.000 kredit gratis, tanpa kartu kredit. Kredit tidak pernah kedaluwarsa.',

  regexTitle: 'Kenapa regex saja bukan validasi email',
  regexParas: [
    'Regular expression (regex) hanya mengecek susunan teks: apakah ada simbol @, apakah format domainnya masuk akal, dan apakah karakternya termasuk rentang ASCII standar. Regex hanya menjawab apakah input terlihat seperti alamat email. Regex tidak menjawab apakah ada orang yang bisa menerima pesan di alamat itu.',
    'Alamat {0} atau {1} lolos dari setiap regex yang sesuai RFC. Padahal satu domain mungkin tidak punya server email yang aktif, dan kotak masuk yang lain mungkin tidak ada.',
    'API validasi email kami dengan respons JSON jauh melampaui regular expression. Dalam satu permintaan, API ini memeriksa DNS record, mencari host MX, terhubung ke server email tujuan untuk mengetes respons kotak masuk, dan mencocokkan domain dengan daftar email sekali pakai yang besar.',
    'Pola regex yang kaku juga menyebabkan penolakan yang salah. Regex buatan sendiri sering menolak domain tingkat atas yang jarang dipakai seperti .studio atau .cloud, karakter internasional yang valid, atau alamat sah dengan tanda baca yang tidak biasa. API kami menangani semua spesifikasi sintaks RFC 5322 secara otomatis, jadi Anda tidak perlu merawat library regex yang rapuh di kode Anda.',
  ],
  checkCards: [
    {
      title: 'Cek sintaks',
      body: 'Menemukan salah ketik dasar, TLD yang hilang, tanda baca yang tidak diizinkan, dan spasi sebelum ada pencarian jaringan ke luar.',
    },
    {
      title: 'Verifikasi DNS dan MX',
      body: 'Mengecek status pendaftaran domain dan menemukan mail exchanger yang sudah diatur dan bisa menerima pesan masuk.',
    },
    {
      title: 'Cek kotak masuk',
      body: 'Berkomunikasi langsung dengan server email tujuan untuk memastikan apakah kotak masuk tersebut ada dan bisa menerima email.',
    },
  ],

  decisionTitle: 'Yang perlu diblokir, ditandai, atau diizinkan saat pendaftaran',
  decisionIntro:
    'Setiap bisnis punya kebutuhan pendaftaran yang berbeda. SaaS B2B untuk perusahaan mungkin mewajibkan email kantor, sedangkan aplikasi sosial untuk konsumen menerima alamat Gmail pribadi. Berikut tabel keputusan yang kami sarankan, berdasarkan atribut respons API yang sebenarnya:',
  decisionHeaders: ['Hasil API', 'Kondisi field', 'Yang harus dilakukan formulir'],
  decisionRows: [
    { title: 'Tidak valid', body: 'Langsung blokir. Tampilkan: "Masukkan alamat email yang valid dan aktif."' },
    { title: 'Email sekali pakai', body: 'Blokir, atau minta alamat lain. Tampilkan: "Alamat email sementara tidak diizinkan."' },
    { title: 'Alamat berbasis peran', body: 'Izinkan, tetapi tandai di formulir B2B. Beri tahu account manager atau masukkan ke kelompok kontak umum.' },
    { title: 'Email gratis', body: 'Izinkan di aplikasi B2C. Wajibkan email kantor di formulir demo atau uji coba B2B.' },
    { title: 'Catch-all', body: 'Cek {0}: jika "valid", izinkan. Jika "invalid", blokir. Jika null, izinkan pendaftaran.' },
    { title: 'Tidak diketahui', body: 'Terima dan cek ulang nanti (kredit dikembalikan). Pakai pola fail-open agar pengguna asli tidak pernah terblokir.' },
  ],

  formTitle: 'Tambahkan validasi email ke formulir pendaftaran Anda',
  formParas: [
    'Ikuti empat langkah ini untuk memasang validasi real-time dengan aman. Karena permintaan memerlukan API key pribadi Anda, jalankan pemeriksaan dari server backend.',
    'Kenapa pola fail-open penting: formulir pendaftaran sensitif terhadap keterlambatan. Jika panggilan API eksternal mengalami latensi jaringan, memblokir formulir bisa membuat Anda kehilangan pelanggan sungguhan. Dengan batas waktu yang singkat dan pendaftaran yang otomatis tetap berjalan, pengguna asli tidak ditolak. Sementara itu, backend Anda memasukkan alamat tersebut ke antrean untuk dicek di latar belakang nanti.',
  ],
  formSteps: [
    {
      title: 'Formulir mengirim data ke backend',
      body: 'Saat pengunjung mengirim data pendaftaran, browser mengirim alamat email ke endpoint aplikasi Anda.',
    },
    {
      title: 'Backend memanggil API validasi',
      body: 'Server Anda mengirim permintaan POST sinkron ke Giggal dengan API key pribadi yang disimpan di environment variable.',
    },
    {
      title: 'Backend menerapkan tabel keputusan',
      body: 'Baca atribut JSON. Jika email itu email sekali pakai atau tidak dapat dikirim, kembalikan pesan error yang jelas ke browser.',
    },
    {
      title: 'Fail-open saat batas waktu habis',
      body: 'Jika komunikasi jaringan ke API melewati batas waktu, pakai fail-open: terima pendaftaran dan masukkan tugas latar belakang ke antrean untuk verifikasi nanti.',
    },
  ],
  codeTitle: 'Contoh kode implementasi',
  codeLabels: [
    'Backend: Node.js (route Express)',
    'Backend: Python (route Flask)',
    'Frontend: klien browser (memanggil backend Anda sendiri)',
  ],
  codeTagServer: 'hanya sisi server',
  codeTagClient: 'skrip sisi klien',
  codeNote:
    'Penting: jangan pernah memanggil endpoint API Giggal langsung dari skrip sisi klien. Simpan kredensial Anda secara pribadi di server.',

  fakeTitle: 'Hentikan pendaftaran dengan email sekali pakai dan email palsu',
  fakeIntro:
    'Kotak masuk sementara merusak data analitik produk Anda, menghabiskan kuota uji coba gratis, dan tidak pernah menjadi pelanggan berbayar. Layanan kami memantau dan menandai pola pendaftaran berisiko tinggi.',
  fakeCards: [
    {
      title: 'Kotak masuk sekali pakai',
      body: 'Dicocokkan dengan daftar aktif kami yang berisi lebih dari 100.000 domain sementara. Pelajari cara kami mengenali kotak masuk sekali pakai di [pemeriksa email sekali pakai](/disposable-email-checker) kami.',
    },
    {
      title: 'Deteksi plus addressing',
      body: 'Menandai alias yang dibuat dengan tanda plus ({0}), sehingga satu pengguna tidak bisa membuat beberapa akun uji coba.',
    },
    {
      title: 'Deteksi kotak masuk no-reply',
      body: 'Mendeteksi kotak masuk siaran dan otomatis yang membuang pesan masuk, sehingga pengguna tidak bisa mendaftar dengan alamat yang tidak bisa dibalas.',
    },
  ],
  typoTitle: 'Jangan mengoreksi salah ketik pengguna secara otomatis',
  typoBody:
    'Jangan pernah mengubah input pengguna diam-diam (misalnya mengganti gnail.com menjadi gmail.com secara otomatis). Jika alamat gagal validasi, tampilkan pesan yang jelas agar pengguna mengecek isiannya. Perubahan diam-diam berisiko mengirim token aktivasi akun atau bukti tagihan ke orang yang salah.',

  whereTitle: 'Di mana memvalidasi email secara real-time',
  whereIntro: 'Validasi alamat email di setiap formulir yang diisi pengguna di produk Anda.',
  whereCards: [
    {
      title: 'Formulir pendaftaran pengguna',
      body: 'Cegah spam pendaftaran dan pastikan email sambutan serta tautan verifikasi sampai ke kotak masuk yang aktif.',
    },
    {
      title: 'Checkout e-commerce',
      body: 'Pastikan pemberitahuan pengiriman, bukti pembayaran, dan konfirmasi pesanan sampai ke pelanggan tanpa gagal kirim.',
    },
    {
      title: 'Permintaan kontak dan demo',
      body: 'Saring isian palsu dari pesaing dan verifikasi domain perusahaan sebelum meneruskan calon pelanggan ke tim sales.',
    },
    {
      title: 'Langganan newsletter',
      body: 'Lindungi reputasi domain pengiriman Anda dengan menolak isian yang salah format dan pendaftaran bot saat opt-in.',
    },
    {
      title: 'Otomatisasi webhook',
      body: 'Jalankan validasi otomatis pada webhook formulir dengan [integrasi Zapier dan n8n](/integrations) kami yang siap pakai.',
    },
    {
      title: 'Perubahan profil akun',
      body: 'Verifikasi alamat email baru saat pengguna lama mengubah profil atau kontak tagihan mereka.',
    },
  ],

  fieldsTitle: 'Field respons yang Anda pakai saat pendaftaran',
  fieldsIntro: 'Referensi singkat tentang field JSON utama yang diperlukan untuk menjalankan logika validasi formulir.',
  fieldsHeaders: ['Field JSON', 'Tipe', 'Penggunaan saat pendaftaran'],
  fieldUsage: [
    'Cek boolean cepat. Bernilai true jika pemeriksaan domain dan kotak masuk lolos.',
    'Status pengiriman utama: "deliverable", "undeliverable", "unknown".',
    'Skor kualitas berdasarkan respons kotak masuk, stabilitas MX, dan pemeriksaan reputasi.',
    'Bernilai true jika domain adalah layanan kotak masuk sementara atau sekali pakai yang dikenal.',
    'Bernilai true untuk penyedia konsumen (Gmail, Outlook). Wajibkan domain perusahaan di formulir B2B.',
    'Bernilai true untuk alamat organisasi seperti info@, admin@, atau support@.',
    'Hasil pemeriksaan untuk domain catch-all dalam panggilan yang sama. Selamatkan kontak yang valid tanpa membuangnya.',
  ],
  fieldsNote:
    'Untuk definisi endpoint, skema parameter, dan kode error yang lengkap, lihat [referensi API lengkap](/public/docs).',

  pricingTitle: 'Harga API validasi email',
  pricingIntro:
    'Bayar hanya untuk validasi yang Anda jalankan, tanpa minimum atau komitmen bulanan. Setiap panggilan validasi API memakai 1 kredit, termasuk pemeriksaan catch-all dalam panggilan yang sama. Kredit untuk hasil tidak diketahui dikembalikan secara otomatis, dan 1.000 kredit pertama Anda gratis.',
  pricingNote: 'Lihat semua paket volume dan diskon langganan bulanan di [halaman harga](/pricing) kami.',

  faqTitle: 'FAQ API validasi email',
  faqIntro: 'Jawaban untuk pertanyaan umum tentang pemasangan di formulir pendaftaran dan validasi real-time.',
  faqs: [
    {
      q: 'Apakah ada API validasi email gratis?',
      a: 'Ada. Setiap akun baru mendapat 1.000 kredit gratis saat mendaftar, tanpa kartu kredit. Anda bisa membuat API key di dashboard developer dan langsung mulai mengetes validasi formulir secara real-time. Kredit gratis tidak pernah kedaluwarsa dan memberi akses penuh ke semua atribut dan pemeriksaan validasi.',
    },
    {
      q: 'Bisakah saya memanggil API langsung dari browser?',
      a: 'Tidak. Memanggil API langsung dari JavaScript sisi klien akan memperlihatkan API key rahasia Anda kepada siapa pun yang memeriksa permintaan jaringan di browser. Selalu kirim isian formulir pengguna ke server backend atau serverless function Anda sendiri dulu, lalu biarkan server Anda mengirim permintaan ke https://api.giggal.ai/v1/verify.',
    },
    {
      q: 'Apakah validasi mengirim email ke pengguna?',
      a: 'Tidak ada pesan yang pernah dikirim. API mengecek apakah kotak masuknya ada. API menutup koneksi sebelum data atau isi email apa pun dikirim, jadi tidak ada email yang masuk ke kotak masuk pengguna Anda.',
    },
    {
      q: 'Apakah API ini mendeteksi alamat email sekali pakai dan sementara?',
      a: 'Ya. Setiap pemeriksaan mencocokkan domain dengan daftar kami yang berisi lebih dari 100.000 domain email sekali pakai dan sementara. Jika cocok, details.attributes.disposable bernilai true dan status diatur ke undeliverable, sehingga backend Anda bisa memblokir akun sementara.',
    },
    {
      q: 'Haruskah saya memblokir alamat berbasis peran seperti info@?',
      a: 'Tergantung model bisnis Anda. Untuk aplikasi konsumen, alamat berbasis peran seperti support@ atau info@ bisa saja milik organisasi yang sah. Untuk SaaS B2B self-serve yang membutuhkan tanggung jawab per pengguna, banyak perusahaan memilih menandai atau menolak alamat berbasis peran umum untuk mencegah penyalahgunaan akun bersama.',
    },
    {
      q: 'Apa yang terjadi pada domain catch-all saat pendaftaran?',
      a: 'Domain catch-all menerima semua alamat penerima tanpa syarat, sehingga pemeriksaan biasa tidak memberi kepastian. API kami menjalankan pemeriksaan catch-all mendalam dalam panggilan yang sama untuk menilai apakah kotak masuknya ada. Jika pemeriksaan catch-all memberi hasil "valid", Anda bisa mengizinkan pendaftaran dengan aman. Jika hasilnya "invalid", alamat itu akan bounce dan sebaiknya ditolak.',
    },
    {
      q: 'Apa yang harus dilakukan formulir saya jika API tidak menjawab tepat waktu?',
      a: 'Kami menyarankan pola fail-open. Jika panggilan dari backend Anda mengalami batas waktu jaringan atau error koneksi, biarkan pendaftaran selesai daripada memblokir calon pelanggan. Masukkan alamat yang belum divalidasi ke antrean worker latar belakang untuk mengecek ulang status pengirimannya nanti.',
    },
    {
      q: 'Apakah saya butuh API validasi email atau API verifikasi email?',
      a: 'Pilih API validasi email jika Anda butuh pemeriksaan real-time di formulir pendaftaran web untuk menghentikan salah ketik, kotak masuk sekali pakai, dan bot saat formulir dikirim. Pilih API verifikasi email jika Anda mengaudit database marketing yang sudah ada, menyinkronkan kontak CRM, atau membersihkan file email massal sebelum mengirim kampanye.',
    },
  ],

  ctaHeadline: 'Lindungi formulir pendaftaran Anda hari ini',
}

// Italian, "tu". Field values (valid, invalid, deliverable, null, true) are API data
// and stay in English.
const it: ValidationApiStrings = {
  metaTitle: 'API di validazione email per moduli in tempo reale | Giggal.ai',
  ogTitle: 'API di validazione email per i moduli di iscrizione in tempo reale',
  description:
    'API di validazione email per moduli di iscrizione e checkout. Blocca in tempo reale email non valide, usa e getta e di ruolo. 1.000 crediti gratuiti.',
  ogLocale: 'it_IT',
  crumb: 'API di validazione email',
  appName: 'Giggal.ai API di validazione email',

  h1Lead: 'API di validazione email in tempo reale per i',
  h1Accent: 'moduli di iscrizione',
  heroIntro:
    'Valida gli indirizzi nel momento in cui gli utenti li inviano: server di posta ed esistenza della casella in una sola chiamata, con gli indicatori usa e getta e di ruolo per decidere cosa accettare. La nostra API di validazione email blocca i dati sbagliati prima che entrino e tiene gli account falsi fuori dal tuo database.',
  heroCodeLabel: 'Handler di iscrizione nel backend',
  heroCodeTag: 'Decisione del modulo',
  heroCta: 'Ottieni una chiave API gratuita',
  heroSecondaryCta: 'Scopri come aggiungerla a un modulo',
  heroNote: '1.000 crediti gratuiti, senza carta. I crediti non scadono mai.',

  regexTitle: 'Perché una regex da sola non è validazione email',
  regexParas: [
    "Un'espressione regolare controlla solo la struttura del testo: se c'è una @, se il formato del dominio sembra plausibile e se i caratteri rientrano negli intervalli ASCII standard. La regex dice solo se un input sembra un indirizzo email, non se qualcuno può ricevere messaggi lì.",
    'Scrivere {0} o {1} supera senza problemi qualsiasi regex conforme agli RFC. Eppure uno dei due domini può non avere server di posta attivi, e l\'altra casella può non esistere.',
    'La nostra API di validazione email con risposta JSON va molto oltre le espressioni regolari. In una sola richiesta controlla i record DNS, esegue il lookup dei server MX, si collega al server di posta di destinazione per verificare se la casella risponde e confronta il dominio con ampie liste di domini usa e getta.',
    'I pattern regex rigidi causano anche falsi rifiuti. Le espressioni personalizzate spesso rifiutano domini di primo livello poco comuni come .studio o .cloud, caratteri internazionali validi o indirizzi legittimi con punteggiatura insolita. La nostra API gestisce in automatico tutta la sintassi RFC 5322, così non devi mantenere fragili librerie regex nel tuo codice.',
  ],
  checkCards: [
    {
      title: 'Controllo della sintassi',
      body: 'Trova errori di battitura, TLD mancanti, punteggiatura non ammessa e spazi prima di qualsiasi lookup di rete esterno.',
    },
    {
      title: 'Verifica DNS e MX',
      body: 'Controlla che il dominio sia registrato e trova i server di posta configurati che possono accettare messaggi in arrivo.',
    },
    {
      title: 'Controllo della casella',
      body: 'Comunica direttamente con il server di posta remoto per confermare se quella casella esiste e può ricevere posta.',
    },
  ],

  decisionTitle: 'Cosa bloccare, segnalare o accettare in fase di iscrizione',
  decisionIntro:
    "Ogni attività ha requisiti di iscrizione diversi. Un SaaS B2B per aziende può richiedere email aziendali, mentre un'app social per privati accetta indirizzi Gmail personali. Ecco la tabella decisionale consigliata, basata sugli attributi reali della risposta API:",
  decisionHeaders: ['Risultato API', 'Condizione del campo', 'Cosa deve fare il modulo'],
  decisionRows: [
    { title: 'Non valida', body: 'Blocca subito. Mostra: "Inserisci un indirizzo email valido e attivo."' },
    { title: 'Usa e getta', body: 'Blocca o chiedi un altro indirizzo. Mostra: "Gli indirizzi email temporanei non sono ammessi."' },
    { title: 'Account di ruolo', body: 'Accetta; segnala nei moduli B2B. Avvisa gli account manager o invia al gruppo dei lead generici.' },
    { title: 'Email gratuita', body: "Accetta nelle app B2C; richiedi un'email aziendale nei moduli B2B per demo o prove." },
    { title: 'Catch-all', body: 'Controlla {0}: se "valid" accetta; se "invalid" blocca; se null accetta l\'iscrizione.' },
    { title: 'Sconosciuta', body: 'Accetta e ricontrolla più tardi (rimborsata). In caso di errore lascia passare (fail-open), così non blocchi mai gli utenti reali.' },
  ],

  formTitle: 'Aggiungi la validazione email al tuo modulo di iscrizione',
  formParas: [
    'Segui questa sequenza in quattro passaggi per integrare la validazione in tempo reale in modo sicuro. Le richieste usano la tua chiave API privata, quindi esegui il controllo dal tuo server backend.',
    "Perché conta il modello fail-open: i moduli di iscrizione sono sensibili ai ritardi. Se una chiamata a un'API esterna subisce latenza di rete, bloccare il modulo può farti perdere un cliente reale. Con un timeout breve e l'iscrizione che prosegue in automatico, gli utenti reali non vengono respinti, e il backend mette l'indirizzo in coda per un controllo successivo in background.",
  ],
  formSteps: [
    {
      title: 'Il modulo invia i dati al backend',
      body: 'Quando un visitatore invia i dati di iscrizione, il browser trasmette l\'indirizzo email all\'endpoint della tua applicazione.',
    },
    {
      title: 'Il backend chiama l\'API di validazione',
      body: 'Il tuo server invia una richiesta POST sincrona a Giggal con la chiave privata salvata in una variabile d\'ambiente.',
    },
    {
      title: 'Il backend applica la tabella decisionale',
      body: 'Leggi gli attributi del JSON. Se l\'email è usa e getta o non consegnabile, rimanda al browser un messaggio di errore chiaro.',
    },
    {
      title: 'Lascia passare in caso di timeout',
      body: 'Se la comunicazione con l\'API va in timeout, applica il fail-open: accetta l\'iscrizione e metti in coda un job in background per verificarla più tardi.',
    },
  ],
  codeTitle: 'Esempi di codice di implementazione',
  codeLabels: [
    'Backend: Node.js (route Express)',
    'Backend: Python (route Flask)',
    'Frontend: client nel browser (chiama il tuo backend)',
  ],
  codeTagServer: 'solo lato server',
  codeTagClient: 'script lato client',
  codeNote:
    'Importante: non chiamare mai l\'endpoint dell\'API Giggal direttamente da script lato client. Tieni le tue credenziali private sul tuo server.',

  fakeTitle: 'Blocca le iscrizioni usa e getta e false',
  fakeIntro:
    'Le caselle temporanee falsano le analisi del tuo prodotto, consumano le quote delle prove gratuite e non diventano mai clienti paganti. Il nostro servizio controlla e segnala gli schemi di iscrizione ad alto rischio.',
  fakeCards: [
    {
      title: 'Caselle usa e getta',
      body: 'Controllate con il nostro registro aggiornato di oltre 100.000 domini temporanei. Scopri come riconosciamo le caselle usa e getta con la nostra [verifica email temporanea](/disposable-email-checker).',
    },
    {
      title: 'Rilevamento degli alias con il più',
      body: 'Segnala gli alias creati con il segno più ({0}), così una stessa persona non può creare più account di prova.',
    },
    {
      title: 'Rilevamento delle caselle no-reply',
      body: 'Rileva le caselle automatiche e di invio massivo che scartano la posta in arrivo, così nessuno si iscrive con indirizzi che non rispondono.',
    },
  ],
  typoTitle: 'Non correggere in automatico gli errori di battitura',
  typoBody:
    "Non modificare mai in silenzio ciò che scrive l'utente (per esempio cambiare gnail.com in gmail.com in automatico). Se un indirizzo non supera la validazione, mostra un messaggio chiaro perché l'utente controlli ciò che ha scritto. Se lo riscrivi in silenzio, rischi di inviare link di attivazione o ricevute di pagamento alla persona sbagliata.",

  whereTitle: 'Dove validare le email in tempo reale',
  whereIntro: 'Valida gli indirizzi email in ogni modulo del tuo prodotto in cui gli utenti inviano dati.',
  whereCards: [
    {
      title: 'Moduli di registrazione',
      body: 'Previeni lo spam nelle registrazioni e aiuta le email di benvenuto e i link di verifica ad arrivare in caselle attive.',
    },
    {
      title: 'Checkout e-commerce',
      body: 'Fai arrivare ai clienti avvisi di spedizione, ricevute e conferme d\'ordine senza errori di consegna.',
    },
    {
      title: 'Richieste di contatto e demo',
      body: 'Filtra le richieste false dei concorrenti e verifica i domini aziendali prima di passare i contatti ai commerciali.',
    },
    {
      title: 'Iscrizioni alla newsletter',
      body: 'Proteggi la reputazione del tuo dominio di invio: rifiuta gli indirizzi malformati e le iscrizioni dei bot al momento dell\'opt-in.',
    },
    {
      title: 'Automazioni con webhook',
      body: 'Avvia la validazione in automatico dai webhook dei moduli con le nostre [integrazioni Zapier e n8n](/integrations).',
    },
    {
      title: 'Modifiche al profilo',
      body: 'Verifica i nuovi indirizzi quando gli utenti modificano il profilo o il contatto di fatturazione.',
    },
  ],

  fieldsTitle: 'I campi della risposta che userai in fase di iscrizione',
  fieldsIntro: 'Un riepilogo dei campi JSON principali che servono per applicare la logica di validazione del modulo.',
  fieldsHeaders: ['Campo JSON', 'Tipo', 'Uso in iscrizione'],
  fieldUsage: [
    'Controllo booleano rapido. È true quando i controlli del dominio e della casella sono superati.',
    'Stato di consegna principale: "deliverable", "undeliverable", "unknown".',
    'Punteggio di qualità basato sulle risposte della casella, sulla stabilità dei server MX e sui controlli di reputazione.',
    'È true quando il dominio è un servizio noto di caselle temporanee o usa e getta.',
    'È true per i provider per privati (Gmail, Outlook). Richiedi domini aziendali nei moduli B2B.',
    'È true per gli indirizzi di organizzazione come info@, admin@ o support@.',
    'Risoluzione dei domini catch-all nella stessa chiamata. Recupera i contatti validi senza scartarli.',
  ],
  fieldsNote:
    'Per le definizioni complete degli endpoint, gli schemi dei parametri e i codici di errore, consulta la [documentazione API completa](/public/docs).',

  pricingTitle: "Prezzi dell'API di validazione email",
  pricingIntro:
    'Paghi solo le validazioni che esegui, senza minimi mensili né vincoli. Ogni chiamata di validazione API consuma 1 credito, con i controlli catch-all inclusi nella stessa chiamata. I risultati sconosciuti vengono rimborsati in automatico e i primi 1.000 crediti sono del tutto gratuiti.',
  pricingNote: 'Vedi tutti i piani a volume e gli sconti degli abbonamenti mensili nella nostra [pagina dei prezzi](/pricing).',

  faqTitle: "Domande frequenti sull'API di validazione email",
  faqIntro: 'Risposte alle domande più comuni sull\'implementazione nei moduli di iscrizione e sulla validazione in tempo reale.',
  faqs: [
    {
      q: "Esiste un'API di validazione email gratuita?",
      a: 'Sì. Ogni nuovo account riceve 1.000 crediti gratuiti alla registrazione, senza carta di credito. Puoi generare una chiave API nella dashboard sviluppatore e iniziare subito a provare la validazione dei moduli in tempo reale. I crediti gratuiti non scadono mai e danno accesso completo a tutti gli attributi e i controlli di validazione.',
    },
    {
      q: "Posso chiamare l'API direttamente dal browser?",
      a: "No. Chiamare l'API da JavaScript lato client esporrebbe la tua chiave API segreta a chiunque controlli le richieste di rete del browser. Invia sempre i dati del modulo prima al tuo server backend o a una funzione serverless, e fai inviare al tuo server la richiesta a https://api.giggal.ai/v1/verify.",
    },
    {
      q: "La validazione invia un'email all'utente?",
      a: "Non viene mai inviato nessun messaggio. L'API controlla se la casella esiste. Chiude la connessione prima che venga trasmesso qualsiasi dato o contenuto dell'email, quindi i tuoi utenti non ricevono nulla nella posta in arrivo.",
    },
    {
      q: 'Rileva gli indirizzi usa e getta e temporanei?',
      a: 'Sì. Ogni controllo confronta il dominio con il nostro registro di oltre 100.000 domini email usa e getta e temporanei. Se c\'è una corrispondenza, details.attributes.disposable restituisce true e lo stato diventa undeliverable, così il tuo backend può bloccare gli account temporanei.',
    },
    {
      q: 'Devo bloccare gli indirizzi di ruolo come info@?',
      a: 'Dipende dal tuo modello di business. Nelle app per privati, account di ruolo come support@ o info@ possono appartenere a organizzazioni reali. Nei SaaS B2B self-service, dove serve sapere chi è ogni utente, molte aziende segnalano o non ammettono gli account di ruolo generici per evitare che le credenziali vengano condivise.',
    },
    {
      q: "Cosa succede con i domini catch-all in fase di iscrizione?",
      a: "I domini catch-all accettano qualsiasi indirizzo di destinazione senza condizioni, quindi i controlli standard non danno una risposta certa. La nostra API esegue la verifica catch-all approfondita nella stessa chiamata per capire se la casella esiste. Se il controllo catch-all restituisce \"valid\", puoi accettare l'iscrizione in sicurezza; se restituisce \"invalid\", l'indirizzo rimbalzerà e l'iscrizione va fermata.",
    },
    {
      q: "Cosa deve fare il mio modulo se l'API non risponde in tempo?",
      a: "Consigliamo il modello fail-open. Se la chiamata del tuo backend va in timeout di rete o dà un errore di connessione, lascia completare l'iscrizione invece di bloccare un potenziale cliente. Metti l'indirizzo non validato nella coda del tuo worker in background per ricontrollare più tardi lo stato di consegna.",
    },
    {
      q: "Mi serve un'API di validazione email o un'API di verifica email?",
      a: "Scegli un'API di validazione email quando ti servono controlli in tempo reale nei moduli di iscrizione web, per fermare errori di battitura, caselle usa e getta e bot all'invio del modulo. Scegli un'API di verifica email quando devi controllare database di marketing esistenti, sincronizzare i contatti del CRM o pulire file di email in blocco prima di inviare campagne.",
    },
  ],

  ctaHeadline: 'Proteggi oggi i tuoi moduli di iscrizione',
}

// German, "Sie". Field values (valid, invalid, deliverable, null, true) are API data
// and stay in English.
const de: ValidationApiStrings = {
  metaTitle: 'E-Mail-Validierungs-API für Anmeldungen in Echtzeit | Giggal.ai',
  ogTitle: 'E-Mail-Validierungs-API für Anmeldungen in Echtzeit',
  description:
    'E-Mail-Validierungs-API für Anmelde- und Checkout-Formulare. Blockiert ungültige, Wegwerf- und Rollen-Adressen in Echtzeit per JSON. 1.000 Credits gratis.',
  ogLocale: 'de_DE',
  crumb: 'E-Mail-Validierungs-API',
  appName: 'Giggal.ai E-Mail-Validierungs-API',

  h1Lead: 'E-Mail-Validierungs-API in Echtzeit für',
  h1Accent: 'Anmeldeformulare',
  heroIntro:
    'Prüfen Sie Adressen in dem Moment, in dem Nutzer sie absenden: Mailserver und Existenz des Postfachs in einem Aufruf, dazu Kennzeichnungen für Wegwerf- und Rollen-Adressen. So entscheiden Sie selbst, was Sie annehmen. Unsere E-Mail-Validierungs-API blockiert fehlerhafte Daten, bevor sie in Ihre Datenbank gelangen. So bleiben gefälschte Konten draußen.',
  heroCodeLabel: 'Backend-Handler für Anmeldungen',
  heroCodeTag: 'Formular-Entscheidung',
  heroCta: 'Kostenlosen API-Key holen',
  heroSecondaryCta: 'So bauen Sie es in ein Formular ein',
  heroNote: '1.000 kostenlose Credits, ohne Karte. Credits verfallen nie.',

  regexTitle: 'Warum ein Regex allein keine E-Mail-Validierung ist',
  regexParas: [
    'Ein regulärer Ausdruck prüft nur die Struktur des Textes: ob ein @-Zeichen vorhanden ist, ob das Domain-Format plausibel aussieht und ob die Zeichen im üblichen ASCII-Bereich liegen. Ein Regex beantwortet nur, ob eine Eingabe wie eine E-Mail-Adresse aussieht. Er sagt nicht, ob dort jemand Nachrichten empfangen kann.',
    'Die Eingabe {0} oder {1} besteht jeden RFC-konformen Regex. Trotzdem hat die eine Domain vielleicht keine aktiven Mailserver, und das andere Postfach existiert vielleicht nicht.',
    'Unsere E-Mail-Validierungs-API mit JSON-Antwort geht weit über reguläre Ausdrücke hinaus. In einer einzigen Anfrage prüft sie die DNS-Einträge, fragt die MX-Server ab, verbindet sich mit dem Ziel-Mailserver, um zu testen, ob das Postfach antwortet, und gleicht die Domain mit umfangreichen Listen von Wegwerf-Domains ab.',
    'Starre Regex-Muster führen außerdem zu falschen Ablehnungen. Eigene Ausdrücke lehnen oft seltene Top-Level-Domains wie .studio oder .cloud ab, gültige internationale Zeichen oder echte Adressen mit ungewöhnlicher Zeichensetzung. Unsere API beherrscht automatisch die gesamte Syntax nach RFC 5322. Sie müssen keine anfälligen Regex-Bibliotheken in Ihrem Code pflegen.',
  ],
  checkCards: [
    {
      title: 'Syntax-Prüfung',
      body: 'Findet einfache Tippfehler, fehlende TLDs, unzulässige Zeichen und Leerzeichen, noch vor jeder externen Netzwerkabfrage.',
    },
    {
      title: 'DNS- und MX-Prüfung',
      body: 'Prüft, ob die Domain registriert ist, und findet die eingerichteten Mailserver, die eingehende Nachrichten annehmen können.',
    },
    {
      title: 'Postfach-Prüfung',
      body: 'Spricht direkt mit dem entfernten Mailserver und bestätigt, ob genau dieses Postfach existiert und E-Mails empfangen kann.',
    },
  ],

  decisionTitle: 'Was Sie bei der Anmeldung blockieren, markieren oder zulassen',
  decisionIntro:
    'Jedes Unternehmen hat andere Anforderungen an die Anmeldung. Ein B2B-SaaS für Unternehmen verlangt vielleicht Firmenadressen, während eine Social-App für Privatnutzer private Gmail-Adressen gern annimmt. Hier ist die empfohlene Entscheidungstabelle auf Basis echter Attribute der API-Antwort:',
  decisionHeaders: ['API-Ergebnis', 'Feldbedingung', 'Was das Formular tun sollte'],
  decisionRows: [
    { title: 'Ungültig', body: 'Sofort blockieren. Anzeigen: "Bitte geben Sie eine gültige, aktive E-Mail-Adresse ein."' },
    { title: 'Wegwerfadresse', body: 'Blockieren oder nach einer anderen Adresse fragen. Anzeigen: "Temporäre E-Mail-Adressen sind nicht erlaubt."' },
    { title: 'Rollen-Adresse', body: 'Zulassen; in B2B-Formularen markieren. Account Manager benachrichtigen oder in den allgemeinen Lead-Pool leiten.' },
    { title: 'Freemail', body: 'In B2C-Apps zulassen; in B2B-Formularen für Demo oder Testzugang eine Firmenadresse verlangen.' },
    { title: 'Catch-all', body: '{0} prüfen: bei "valid" zulassen, bei "invalid" blockieren, bei null die Anmeldung zulassen.' },
    { title: 'Unbekannt', body: 'Annehmen und später erneut prüfen (wird erstattet). Im Fehlerfall durchlassen (Fail-open), damit echte Nutzer nie blockiert werden.' },
  ],

  formTitle: 'E-Mail-Validierung in Ihr Anmeldeformular einbauen',
  formParas: [
    'Folgen Sie diesen vier Schritten, um die Echtzeit-Validierung sicher einzubinden. Die Anfragen brauchen Ihren privaten API-Key. Führen Sie die Prüfung deshalb auf Ihrem Backend-Server aus.',
    'Warum das Fail-open-Muster wichtig ist: Anmeldeformulare reagieren empfindlich auf Verzögerungen. Wenn ein externer API-Aufruf durch Netzwerklatenz hängt, kann ein blockiertes Formular Sie einen echten Kunden kosten. Mit einem kurzen Timeout und einer Anmeldung, die automatisch weiterläuft, weisen Sie echte Nutzer nicht ab. Ihr Backend stellt die Adresse dann für eine spätere Prüfung im Hintergrund in eine Warteschlange.',
  ],
  formSteps: [
    {
      title: 'Formular sendet an Ihr Backend',
      body: 'Wenn ein Besucher seine Anmeldedaten absendet, überträgt der Browser die E-Mail-Adresse an den Endpunkt Ihrer Anwendung.',
    },
    {
      title: 'Backend ruft die Validierungs-API auf',
      body: 'Ihr Server sendet eine synchrone POST-Anfrage an Giggal, mit Ihrem privaten Key aus einer Umgebungsvariable.',
    },
    {
      title: 'Backend wendet die Entscheidungstabelle an',
      body: 'Werten Sie die JSON-Attribute aus. Ist die E-Mail eine Wegwerfadresse oder unzustellbar, senden Sie eine klare Fehlermeldung an den Browser zurück.',
    },
    {
      title: 'Bei Timeouts durchlassen',
      body: 'Wenn die Verbindung zur API in einen Timeout läuft, lassen Sie die Anmeldung zu (Fail-open) und legen einen Hintergrund-Job an, der die Adresse später prüft.',
    },
  ],
  codeTitle: 'Code-Beispiele für die Einbindung',
  codeLabels: [
    'Backend: Node.js (Express-Route)',
    'Backend: Python (Flask-Route)',
    'Frontend: Browser-Client (ruft Ihr eigenes Backend auf)',
  ],
  codeTagServer: 'nur serverseitig',
  codeTagClient: 'clientseitiges Skript',
  codeNote:
    'Wichtig: Rufen Sie den Giggal-API-Endpunkt nie direkt aus clientseitigen Skripten auf. Halten Sie Ihre Zugangsdaten auf Ihrem Server.',

  fakeTitle: 'Wegwerf- und Fake-Anmeldungen stoppen',
  fakeIntro:
    'Temporäre Postfächer verfälschen Ihre Produktanalysen, verbrauchen Testkontingente und werden nie zu zahlenden Kunden. Unser Dienst erkennt und markiert riskante Anmeldemuster.',
  fakeCards: [
    {
      title: 'Wegwerf-Postfächer',
      body: 'Abgeglichen mit unserem aktiven Verzeichnis von über 100.000 temporären Domains. Wie wir Wegwerf-Postfächer erkennen, zeigt unsere [Prüfung auf Wegwerf-E-Mails](/disposable-email-checker).',
    },
    {
      title: 'Erkennung von Plus-Adressen',
      body: 'Kennzeichnet Aliase mit Plus-Zeichen ({0}). So kann eine Person nicht mehrere Testkonten anlegen.',
    },
    {
      title: 'Erkennung von No-Reply-Postfächern',
      body: 'Erkennt automatische Versand-Postfächer, die eingehende Nachrichten verwerfen. So meldet sich niemand mit einer Adresse an, die nicht antwortet.',
    },
  ],
  typoTitle: 'Tippfehler nicht automatisch korrigieren',
  typoBody:
    'Ändern Sie Eingaben nie still im Hintergrund (zum Beispiel gnail.com automatisch zu gmail.com). Besteht eine Adresse die Validierung nicht, zeigen Sie eine klare Meldung, damit der Nutzer seine Eingabe prüft. Wer still umschreibt, riskiert, dass Aktivierungslinks oder Rechnungen an die falsche Person gehen.',

  whereTitle: 'Wo Sie E-Mails in Echtzeit validieren sollten',
  whereIntro: 'Validieren Sie E-Mail-Adressen überall dort, wo Nutzer in Ihrem Produkt Formulare absenden.',
  whereCards: [
    {
      title: 'Registrierungsformulare',
      body: 'Verhindern Sie Spam-Registrierungen und sorgen Sie dafür, dass Willkommens-E-Mails und Bestätigungslinks aktive Postfächer erreichen.',
    },
    {
      title: 'Checkout im Onlineshop',
      body: 'Sorgen Sie dafür, dass Versandinfos, Belege und Bestellbestätigungen ohne Zustellfehler bei den Kunden ankommen.',
    },
    {
      title: 'Kontakt- und Demo-Anfragen',
      body: 'Filtern Sie gefälschte Einträge von Wettbewerbern und prüfen Sie Firmendomains, bevor Sie Interessenten an den Vertrieb geben.',
    },
    {
      title: 'Newsletter-Anmeldungen',
      body: 'Schützen Sie die Reputation Ihrer Versanddomain: Weisen Sie fehlerhafte Eingaben und Bot-Anmeldungen schon beim Opt-in ab.',
    },
    {
      title: 'Webhook-Automatisierungen',
      body: 'Starten Sie die Validierung automatisch über Formular-Webhooks, mit unseren fertigen [Integrationen für Zapier und n8n](/integrations).',
    },
    {
      title: 'Änderungen am Benutzerprofil',
      body: 'Prüfen Sie neue E-Mail-Adressen, wenn bestehende Nutzer ihr Profil oder ihren Rechnungskontakt ändern.',
    },
  ],

  fieldsTitle: 'Antwortfelder, die Sie bei der Anmeldung nutzen',
  fieldsIntro: 'Eine kurze Übersicht der wichtigsten JSON-Felder für die Validierungslogik im Formular.',
  fieldsHeaders: ['JSON-Feld', 'Typ', 'Nutzung bei der Anmeldung'],
  fieldUsage: [
    'Schnelle Boolean-Prüfung. Ist true, wenn die Prüfungen von Domain und Postfach bestanden sind.',
    'Wichtigster Zustellstatus: "deliverable", "undeliverable", "unknown".',
    'Qualitäts-Score auf Basis der Postfach-Antworten, der Stabilität der MX-Server und der Reputationsprüfungen.',
    'Ist true, wenn die Domain ein bekannter Dienst für temporäre oder Wegwerf-Postfächer ist.',
    'Ist true bei Anbietern für Privatnutzer (Gmail, Outlook). In B2B-Formularen Firmendomains verlangen.',
    'Ist true bei Adressen einer Organisation wie info@, admin@ oder support@.',
    'Prüfung von Catch-all-Domains im selben Aufruf. Gültige Leads behalten, statt sie zu verwerfen.',
  ],
  fieldsNote:
    'Alle Endpunkt-Definitionen, Parameter-Schemas und Fehlercodes finden Sie in der [vollständigen API-Referenz](/public/docs).',

  pricingTitle: 'Preise der E-Mail-Validierungs-API',
  pricingIntro:
    'Sie zahlen nur für die Validierungen, die Sie ausführen, ohne monatliche Mindestbeträge und ohne Bindung. Jeder Validierungsaufruf kostet 1 Credit, die Catch-all-Prüfung im selben Aufruf ist enthalten. Unbekannte Ergebnisse werden automatisch erstattet, und Ihre ersten 1.000 Credits sind komplett kostenlos.',
  pricingNote: 'Alle Volumenpläne und Rabatte für Monatsabos finden Sie auf unserer [Preisseite](/pricing).',

  faqTitle: 'Häufige Fragen zur E-Mail-Validierungs-API',
  faqIntro: 'Antworten auf häufige Fragen zur Einbindung in Anmeldeformulare und zur Validierung in Echtzeit.',
  faqs: [
    {
      q: 'Gibt es eine kostenlose E-Mail-Validierungs-API?',
      a: 'Ja. Jedes neue Konto erhält bei der Registrierung 1.000 kostenlose Credits, ohne Kreditkarte. Sie können in Ihrem Entwickler-Dashboard einen API-Key erstellen und die Echtzeit-Validierung von Formularen sofort testen. Die kostenlosen Credits verfallen nie und geben vollen Zugriff auf alle Attribute und Prüfungen.',
    },
    {
      q: 'Kann ich die API direkt aus dem Browser aufrufen?',
      a: 'Nein. Ein Aufruf aus clientseitigem JavaScript würde Ihren geheimen API-Key für jeden sichtbar machen, der die Netzwerkanfragen des Browsers ansieht. Senden Sie Formulardaten immer zuerst an Ihren eigenen Backend-Server oder eine Serverless-Funktion, und lassen Sie Ihren Server die Anfrage an https://api.giggal.ai/v1/verify stellen.',
    },
    {
      q: 'Sendet die Validierung eine E-Mail an den Nutzer?',
      a: 'Es wird nie eine Nachricht verschickt. Die API prüft, ob das Postfach existiert. Sie beendet die Verbindung, bevor E-Mail-Daten oder Inhalte übertragen werden. Ihre Nutzer erhalten also nichts in ihrem Posteingang.',
    },
    {
      q: 'Erkennt die API Wegwerf- und temporäre Adressen?',
      a: 'Ja. Jede Prüfung gleicht die Domain mit unserem Verzeichnis von über 100.000 Wegwerf- und temporären E-Mail-Domains ab. Bei einem Treffer liefert details.attributes.disposable true, und der Status wird auf undeliverable gesetzt. So kann Ihr Backend temporäre Konten blockieren.',
    },
    {
      q: 'Sollte ich Rollen-Adressen wie info@ blockieren?',
      a: 'Das hängt von Ihrem Geschäftsmodell ab. In Apps für Privatnutzer können Rollen-Adressen wie support@ oder info@ zu echten Organisationen gehören. Bei Self-Service-B2B-SaaS, wo klar sein muss, wer welches Konto nutzt, markieren oder verbieten viele Unternehmen allgemeine Rollen-Adressen, um geteilte Zugangsdaten zu verhindern.',
    },
    {
      q: 'Was passiert bei der Anmeldung mit Catch-all-Domains?',
      a: 'Catch-all-Domains nehmen jede Empfängeradresse ohne Bedingung an. Normale Prüfungen liefern dort kein klares Ergebnis. Unsere API führt im selben Aufruf eine gründliche Catch-all-Prüfung aus, um festzustellen, ob das Postfach existiert. Liefert die Catch-all-Prüfung "valid", können Sie die Anmeldung sicher zulassen. Bei "invalid" wird die Adresse bouncen, und Sie sollten die Anmeldung stoppen.',
    },
    {
      q: 'Was soll mein Formular tun, wenn die API nicht rechtzeitig antwortet?',
      a: 'Wir empfehlen das Fail-open-Muster. Wenn Ihr Backend-Aufruf in einen Netzwerk-Timeout oder einen Verbindungsfehler läuft, lassen Sie die Anmeldung abschließen, statt einen möglichen Kunden zu blockieren. Stellen Sie die ungeprüfte Adresse in die Warteschlange Ihres Hintergrund-Workers und prüfen Sie den Zustellstatus später erneut.',
    },
    {
      q: 'Brauche ich eine E-Mail-Validierungs-API oder eine E-Mail-Verifizierungs-API?',
      a: 'Wählen Sie eine E-Mail-Validierungs-API, wenn Sie Echtzeit-Prüfungen in Web-Anmeldeformularen brauchen, um Tippfehler, Wegwerf-Postfächer und Bots beim Absenden zu stoppen. Wählen Sie eine E-Mail-Verifizierungs-API, wenn Sie bestehende Marketing-Datenbanken prüfen, CRM-Kontakte abgleichen oder große E-Mail-Dateien vor dem Versand von Kampagnen bereinigen.',
    },
  ],

  ctaHeadline: 'Schützen Sie Ihre Anmeldeformulare noch heute',
}

// Spanish, "tú". Field values (valid, invalid, deliverable, null, true) are API data
// and stay in English.
const es: ValidationApiStrings = {
  metaTitle: 'API de validación de correo en tiempo real | Giggal.ai',
  ogTitle: 'API de validación de correo para registros en tiempo real',
  description:
    'API de validación de correo para formularios de registro y de pago. Bloquea en tiempo real correos no válidos, desechables y de rol. 1.000 créditos gratis.',
  ogLocale: 'es_LA',
  crumb: 'API de validación de correo',
  appName: 'Giggal.ai API de validación de correo',

  h1Lead: 'API de validación de correo en tiempo real para',
  h1Accent: 'formularios de registro',
  heroIntro:
    'Valida las direcciones cuando los usuarios las envían: el servidor de correo y si el buzón existe en una sola llamada, con indicadores de desechable y de rol para que decidas qué aceptar. Nuestra API de validación de correo bloquea los datos malos antes de que entren y mantiene las cuentas falsas fuera de tu base de datos.',
  heroCodeLabel: 'Gestor de registro en el backend',
  heroCodeTag: 'Decisión del formulario',
  heroCta: 'Obtén una clave de API gratis',
  heroSecondaryCta: 'Mira cómo añadirla a un formulario',
  heroNote: '1.000 créditos gratis, sin tarjeta. Los créditos no caducan.',

  regexTitle: 'Por qué una regex por sí sola no es validación de correo',
  regexParas: [
    'Una expresión regular solo comprueba la estructura del texto: si hay una @, si el formato del dominio parece plausible y si los caracteres están dentro de los rangos ASCII estándar. Una regex solo responde si una entrada parece una dirección de correo, no si alguien puede recibir mensajes en ella.',
    'Escribir {0} o {1} pasa sin problema cualquier regex que cumpla el RFC. Sin embargo, uno de los dominios puede no tener servidores de correo activos, y el otro buzón puede no existir.',
    'Nuestra API de validación de correo con respuesta JSON va mucho más allá de las expresiones regulares. En una sola solicitud revisa los registros DNS, consulta los servidores MX, se conecta al servidor de correo de destino para probar si el buzón responde y compara el dominio con amplias listas de dominios desechables.',
    'Los patrones regex rígidos también causan rechazos falsos. Las expresiones personalizadas suelen rechazar dominios de nivel superior poco comunes como .studio o .cloud, caracteres internacionales válidos o direcciones legítimas con puntuación poco habitual. Nuestra API maneja automáticamente toda la sintaxis de RFC 5322, así que no tienes que mantener frágiles bibliotecas de regex en tu código.',
  ],
  checkCards: [
    {
      title: 'Comprobación de sintaxis',
      body: 'Detecta errores de escritura básicos, TLD que faltan, puntuación no permitida y espacios antes de cualquier consulta de red externa.',
    },
    {
      title: 'Verificación DNS y MX',
      body: 'Comprueba que el dominio está registrado y encuentra los servidores de correo configurados que pueden aceptar mensajes entrantes.',
    },
    {
      title: 'Comprobación del buzón',
      body: 'Se comunica directamente con el servidor de correo remoto para confirmar si ese buzón existe y puede recibir correo.',
    },
  ],

  decisionTitle: 'Qué bloquear, marcar o permitir en el registro',
  decisionIntro:
    'Cada negocio tiene requisitos de registro distintos. Un SaaS B2B para empresas puede exigir correos corporativos, mientras que una app social de consumo acepta direcciones personales de Gmail. Esta es la tabla de decisiones recomendada según los atributos reales de la respuesta de la API:',
  decisionHeaders: ['Resultado de la API', 'Condición del campo', 'Qué debe hacer el formulario'],
  decisionRows: [
    { title: 'No válido', body: 'Bloquear de inmediato. Mostrar: "Escribe una dirección de correo válida y activa."' },
    { title: 'Desechable', body: 'Bloquear o pedir otra dirección. Mostrar: "No se permiten direcciones de correo temporales."' },
    { title: 'Cuenta de rol', body: 'Permitir; marcar en formularios B2B. Avisar a los gestores de cuenta o enviar al grupo general de leads.' },
    { title: 'Correo gratuito', body: 'Permitir en apps B2C; exigir un correo corporativo en formularios de demo o de prueba B2B.' },
    { title: 'Catch-all', body: 'Revisar {0}: si es "valid", permitir; si es "invalid", bloquear; si es null, permitir el registro.' },
    { title: 'Desconocido', body: 'Aceptar y volver a comprobar más tarde (se reembolsa). Si falla, dejar pasar (fail-open), así nunca se bloquea a usuarios legítimos.' },
  ],

  formTitle: 'Añade validación de correo a tu formulario de registro',
  formParas: [
    'Sigue esta secuencia de cuatro pasos para integrar la validación en tiempo real de forma segura. Como las solicitudes necesitan tu clave de API privada, haz la comprobación desde tu servidor backend.',
    'Por qué importa el patrón fail-open: los formularios de registro son sensibles a los retrasos. Si una llamada a una API externa sufre latencia de red, bloquear el formulario puede hacerte perder a un cliente real. Si usas un tiempo de espera corto y dejas que el registro siga automáticamente, no rechazas a usuarios legítimos, y tu backend pone la dirección en cola para comprobarla más tarde en segundo plano.',
  ],
  formSteps: [
    {
      title: 'El formulario envía los datos a tu backend',
      body: 'Cuando un visitante envía sus datos de registro, el navegador transmite la dirección de correo al endpoint de tu aplicación.',
    },
    {
      title: 'El backend llama a la API de validación',
      body: 'Tu servidor envía una solicitud POST síncrona a Giggal con tu clave privada guardada en una variable de entorno.',
    },
    {
      title: 'El backend aplica la tabla de decisiones',
      body: 'Lee los atributos del JSON. Si el correo es desechable o no entregable, devuelve al navegador un mensaje de error claro.',
    },
    {
      title: 'Dejar pasar si se agota el tiempo',
      body: 'Si la comunicación con la API agota el tiempo de espera, aplica fail-open: acepta el registro y pon en cola una tarea en segundo plano para verificarlo más tarde.',
    },
  ],
  codeTitle: 'Ejemplos de código de implementación',
  codeLabels: [
    'Backend: Node.js (ruta de Express)',
    'Backend: Python (ruta de Flask)',
    'Frontend: cliente del navegador (llama a tu propio backend)',
  ],
  codeTagServer: 'solo en el servidor',
  codeTagClient: 'script del cliente',
  codeNote:
    'Importante: nunca llames al endpoint de la API de Giggal directamente desde scripts del cliente. Mantén tus credenciales privadas en tu servidor.',

  fakeTitle: 'Frena los registros desechables y falsos',
  fakeIntro:
    'Los buzones temporales distorsionan la analítica de tu producto, gastan las cuotas de prueba gratuita y nunca se convierten en clientes de pago. Nuestro servicio detecta y marca los patrones de registro de alto riesgo.',
  fakeCards: [
    {
      title: 'Buzones desechables',
      body: 'Se comparan con nuestro registro activo de más de 100.000 dominios temporales. Mira cómo identificamos los buzones de usar y tirar con nuestro [verificador de correos desechables](/disposable-email-checker).',
    },
    {
      title: 'Detección de alias con signo más',
      body: 'Marca los alias creados con el signo más ({0}), para que una misma persona no cree varias cuentas de prueba.',
    },
    {
      title: 'Detección de buzones no-reply',
      body: 'Detecta los buzones automáticos y de difusión que descartan los mensajes entrantes, para que nadie se registre con direcciones que no responden.',
    },
  ],
  typoTitle: 'No corrijas automáticamente los errores de escritura',
  typoBody:
    'Nunca cambies en silencio lo que escribe el usuario (por ejemplo, cambiar gnail.com por gmail.com de forma automática). Si una dirección no pasa la validación, muestra un mensaje claro para que el usuario revise lo que escribió. Si reescribes en silencio, puedes enviar enlaces de activación de cuenta o recibos de pago a otra persona.',

  whereTitle: 'Dónde validar correos en tiempo real',
  whereIntro: 'Valida las direcciones de correo en cualquier formulario de tu producto donde los usuarios envían datos.',
  whereCards: [
    {
      title: 'Formularios de registro de usuarios',
      body: 'Evita el spam de registros y ayuda a que los correos de bienvenida y los enlaces de verificación lleguen a buzones activos.',
    },
    {
      title: 'Pago en tiendas online',
      body: 'Asegura que los avisos de envío, los recibos y las confirmaciones de pedido lleguen a los clientes sin fallos de entrega.',
    },
    {
      title: 'Solicitudes de contacto y de demo',
      body: 'Filtra las entradas falsas de la competencia y verifica los dominios de empresa antes de pasar los contactos a los comerciales.',
    },
    {
      title: 'Suscripciones a newsletters',
      body: 'Protege la reputación de tu dominio de envío: rechaza las entradas mal formadas y los registros de bots en el alta.',
    },
    {
      title: 'Automatizaciones con webhooks',
      body: 'Lanza la validación automáticamente desde los webhooks de tus formularios con nuestras [integraciones de Zapier y n8n](/integrations).',
    },
    {
      title: 'Cambios en el perfil de la cuenta',
      body: 'Verifica las nuevas direcciones cuando los usuarios cambian su perfil o su contacto de facturación.',
    },
  ],

  fieldsTitle: 'Campos de la respuesta que usarás en el registro',
  fieldsIntro: 'Una referencia breve de los campos JSON principales que necesitas para aplicar la lógica de validación del formulario.',
  fieldsHeaders: ['Campo JSON', 'Tipo', 'Uso en el registro'],
  fieldUsage: [
    'Comprobación booleana rápida. Es true cuando pasan las comprobaciones del dominio y del buzón.',
    'Estado de entrega principal: "deliverable", "undeliverable", "unknown".',
    'Puntuación de calidad basada en las respuestas del buzón, la estabilidad de los MX y las comprobaciones de reputación.',
    'Es true cuando el dominio es un servicio conocido de buzones temporales o desechables.',
    'Es true en proveedores de consumo (Gmail, Outlook). Exige dominios corporativos en formularios B2B.',
    'Es true en direcciones de organización como info@, admin@ o support@.',
    'Resolución de los dominios catch-all en la misma llamada. Recupera contactos válidos sin descartarlos.',
  ],
  fieldsNote:
    'Para ver todas las definiciones de endpoints, los esquemas de parámetros y los códigos de error, consulta la [referencia completa de la API](/public/docs).',

  pricingTitle: 'Precios de la API de validación de correo',
  pricingIntro:
    'Paga solo por las validaciones que haces, sin mínimos mensuales ni compromisos. Cada llamada de validación a la API consume 1 crédito, con las comprobaciones catch-all incluidas en la misma llamada. Los resultados desconocidos se reembolsan automáticamente y tus primeros 1.000 créditos son totalmente gratis.',
  pricingNote: 'Mira todos los planes por volumen y los descuentos de la suscripción mensual en nuestra [página de precios](/pricing).',

  faqTitle: 'Preguntas frecuentes sobre la API de validación de correo',
  faqIntro: 'Respuestas a preguntas habituales de implementación sobre formularios de registro y validación en tiempo real.',
  faqs: [
    {
      q: '¿Hay una API de validación de correo gratis?',
      a: 'Sí. Cada cuenta nueva recibe 1.000 créditos gratis al registrarse, sin tarjeta de crédito. Puedes generar una clave de API en tu panel de desarrollador y empezar a probar la validación de formularios en tiempo real de inmediato. Los créditos gratis no caducan y dan acceso completo a todos los atributos y comprobaciones de validación.',
    },
    {
      q: '¿Puedo llamar a la API directamente desde el navegador?',
      a: 'No. Llamar a la API desde JavaScript del cliente expondría tu clave de API secreta a cualquiera que revise las solicitudes de red del navegador. Envía siempre los datos del formulario primero a tu propio servidor backend o a una función serverless, y haz que tu servidor envíe la solicitud a https://api.giggal.ai/v1/verify.',
    },
    {
      q: '¿La validación envía un correo al usuario?',
      a: 'Nunca se envía ningún mensaje. La API comprueba si el buzón existe. Cierra la conexión antes de transmitir ningún dato ni contenido del correo, así que tus usuarios no reciben nada en su bandeja de entrada.',
    },
    {
      q: '¿Detecta direcciones desechables y temporales?',
      a: 'Sí. Cada comprobación compara el dominio con nuestro registro de más de 100.000 dominios de correo desechables y temporales. Si hay coincidencia, details.attributes.disposable devuelve true y el estado pasa a undeliverable, para que tu backend pueda bloquear las cuentas temporales.',
    },
    {
      q: '¿Debo bloquear direcciones de rol como info@?',
      a: 'Depende de tu modelo de negocio. En las apps de consumo, cuentas de rol como support@ o info@ pueden ser de organizaciones legítimas. En un SaaS B2B de autoservicio donde importa saber quién es cada usuario, muchas empresas marcan o no permiten las cuentas de rol genéricas para evitar el uso compartido de credenciales.',
    },
    {
      q: '¿Qué pasa con los dominios catch-all en el registro?',
      a: 'Los dominios catch-all aceptan cualquier dirección de destinatario sin condiciones, así que las comprobaciones normales no son concluyentes. Nuestra API hace una verificación catch-all a fondo en la misma llamada para saber si el buzón existe. Si la comprobación catch-all devuelve "valid", puedes permitir el registro con seguridad; si devuelve "invalid", la dirección rebotará y debes detener el registro.',
    },
    {
      q: '¿Qué debe hacer mi formulario si la API no responde a tiempo?',
      a: 'Recomendamos aplicar un patrón fail-open. Si la llamada de tu backend agota el tiempo de espera o da un error de conexión, deja que el registro se complete en lugar de bloquear a un posible cliente. Pon la dirección sin validar en la cola de tu proceso en segundo plano para volver a comprobar su estado de entrega más tarde.',
    },
    {
      q: '¿Necesito una API de validación de correo o una API de verificación de correo?',
      a: 'Elige una API de validación de correo cuando necesites comprobaciones en tiempo real en formularios web de registro para frenar errores de escritura, buzones desechables y bots al enviar el formulario. Elige una API de verificación de correo cuando revises bases de datos de marketing existentes, sincronices contactos del CRM o limpies archivos masivos de correo antes de enviar campañas.',
    },
  ],

  ctaHeadline: 'Protege hoy tus formularios de registro',
}

// Brazilian Portuguese, "você". Field values (valid, invalid, deliverable, null, true)
// are API data and stay in English.
const ptBr: ValidationApiStrings = {
  metaTitle: 'API de validação de e-mail em tempo real | Giggal.ai',
  ogTitle: 'API de validação de e-mail para cadastros em tempo real',
  description:
    'API de validação de e-mail para formulários de cadastro e checkout. Bloqueie e-mails inválidos, descartáveis e de função em tempo real. 1.000 créditos grátis.',
  ogLocale: 'pt_BR',
  crumb: 'API de validação de e-mail',
  appName: 'Giggal.ai API de validação de e-mail',

  h1Lead: 'API de validação de e-mail em tempo real para',
  h1Accent: 'formulários de cadastro',
  heroIntro:
    'Valide os endereços no momento em que os usuários enviam o formulário: servidor de e-mail e existência da caixa em uma única chamada, com indicadores de descartável e de função para você decidir o que aceitar. Nossa API de validação de e-mail bloqueia dados ruins antes que entrem e mantém contas falsas fora do seu banco de dados.',
  heroCodeLabel: 'Handler de cadastro no backend',
  heroCodeTag: 'Decisão do formulário',
  heroCta: 'Gere sua chave de API grátis',
  heroSecondaryCta: 'Veja como adicionar a um formulário',
  heroNote: '1.000 créditos grátis, sem cartão. Os créditos nunca expiram.',

  regexTitle: 'Por que uma regex sozinha não é validação de e-mail',
  regexParas: [
    'Uma expressão regular confere apenas a estrutura do texto: se existe um @, se o formato do domínio parece plausível e se os caracteres estão dentro das faixas ASCII padrão. A regex responde apenas se uma entrada parece um endereço de e-mail, não se alguém consegue receber mensagens nele.',
    'Digitar {0} ou {1} passa sem problema em qualquer regex compatível com o RFC. Mesmo assim, um dos domínios pode não ter servidores de e-mail ativos, e a outra caixa pode não existir.',
    'Nossa API de validação de e-mail com resposta JSON vai muito além das expressões regulares. Em uma única requisição, ela confere os registros DNS, consulta os servidores MX, se conecta ao servidor de e-mail de destino para testar se a caixa responde e compara o domínio com listas extensas de domínios descartáveis.',
    'Padrões de regex rígidos também causam rejeições falsas. Expressões personalizadas costumam rejeitar domínios de topo pouco comuns como .studio ou .cloud, caracteres internacionais válidos ou endereços legítimos com pontuação incomum. Nossa API trata automaticamente toda a sintaxe do RFC 5322, então você não precisa manter bibliotecas de regex frágeis no seu código.',
  ],
  checkCards: [
    {
      title: 'Verificação de sintaxe',
      body: 'Encontra erros de digitação básicos, TLDs ausentes, pontuação proibida e problemas de espaço antes de qualquer consulta de rede externa.',
    },
    {
      title: 'Verificação de DNS e MX',
      body: 'Confere se o domínio está registrado e encontra os servidores de e-mail configurados que podem aceitar mensagens recebidas.',
    },
    {
      title: 'Verificação da caixa',
      body: 'Fala diretamente com o servidor de e-mail remoto para confirmar se aquela caixa existe e pode receber mensagens.',
    },
  ],

  decisionTitle: 'O que bloquear, marcar ou permitir no cadastro',
  decisionIntro:
    'Cada negócio tem requisitos de cadastro diferentes. Um SaaS B2B para empresas pode exigir e-mails corporativos, enquanto um app social para consumidores aceita endereços pessoais do Gmail. Esta é a tabela de decisão recomendada com base nos atributos reais da resposta da API:',
  decisionHeaders: ['Resultado da API', 'Condição do campo', 'O que o formulário deve fazer'],
  decisionRows: [
    { title: 'Inválido', body: 'Bloquear na hora. Mostrar: "Digite um endereço de e-mail válido e ativo."' },
    { title: 'Descartável', body: 'Bloquear ou pedir outro endereço. Mostrar: "Endereços de e-mail temporários não são permitidos."' },
    { title: 'Conta de função', body: 'Permitir; marcar em formulários B2B. Avisar os gerentes de conta ou enviar para o grupo geral de leads.' },
    { title: 'E-mail gratuito', body: 'Permitir em apps B2C; exigir e-mail corporativo em formulários de demo ou de teste B2B.' },
    { title: 'Catch-all', body: 'Conferir {0}: se for "valid", permitir; se for "invalid", bloquear; se for null, permitir o cadastro.' },
    { title: 'Desconhecido', body: 'Aceitar e verificar de novo mais tarde (reembolsado). Em caso de falha, deixar passar (fail-open), para nunca bloquear usuários legítimos.' },
  ],

  formTitle: 'Adicione validação de e-mail ao seu formulário de cadastro',
  formParas: [
    'Siga esta sequência de quatro passos para integrar a validação em tempo real com segurança. Como as requisições exigem sua chave de API privada, faça a verificação a partir do seu servidor backend.',
    'Por que o padrão fail-open importa: formulários de cadastro são sensíveis a atrasos. Se uma chamada a uma API externa sofrer latência de rede, bloquear o formulário pode fazer você perder um cliente real. Com um tempo limite curto e o cadastro seguindo automaticamente, usuários legítimos não são recusados, e o seu backend coloca o endereço em uma fila para verificação em segundo plano depois.',
  ],
  formSteps: [
    {
      title: 'O formulário envia para o seu backend',
      body: 'Quando um visitante envia os dados de cadastro, o navegador transmite o endereço de e-mail para o endpoint da sua aplicação.',
    },
    {
      title: 'O backend chama a API de validação',
      body: 'Seu servidor envia uma requisição POST síncrona para a Giggal usando sua chave privada guardada em uma variável de ambiente.',
    },
    {
      title: 'O backend aplica a tabela de decisão',
      body: 'Leia os atributos do JSON. Se o e-mail for descartável ou não entregável, devolva ao navegador uma mensagem de erro clara.',
    },
    {
      title: 'Deixar passar quando o tempo esgota',
      body: 'Se a comunicação com a API esgotar o tempo limite, aplique fail-open: aceite o cadastro e coloque um job em segundo plano na fila para verificar depois.',
    },
  ],
  codeTitle: 'Exemplos de código de implementação',
  codeLabels: [
    'Backend: Node.js (rota Express)',
    'Backend: Python (rota Flask)',
    'Frontend: cliente no navegador (chama o seu próprio backend)',
  ],
  codeTagServer: 'apenas no servidor',
  codeTagClient: 'script no cliente',
  codeNote:
    'Importante: nunca chame o endpoint da API da Giggal diretamente de scripts no cliente. Mantenha suas credenciais protegidas no seu servidor.',

  fakeTitle: 'Bloqueie cadastros descartáveis e falsos',
  fakeIntro:
    'Caixas temporárias distorcem as métricas do seu produto, consomem cotas de teste grátis e nunca viram clientes pagantes. Nosso serviço identifica e marca padrões de cadastro de alto risco.',
  fakeCards: [
    {
      title: 'Caixas descartáveis',
      body: 'Comparadas com a nossa base ativa de mais de 100.000 domínios temporários. Saiba como identificamos caixas descartáveis com o nosso [verificador de e-mail descartável](/disposable-email-checker).',
    },
    {
      title: 'Detecção de alias com sinal de mais',
      body: 'Marca aliases criados com o sinal de mais ({0}), para impedir que uma mesma pessoa crie várias contas de teste.',
    },
    {
      title: 'Detecção de caixas no-reply',
      body: 'Detecta caixas automáticas e de envio em massa que descartam as mensagens recebidas, para que ninguém se cadastre com endereços que não respondem.',
    },
  ],
  typoTitle: 'Não corrija automaticamente os erros de digitação',
  typoBody:
    'Nunca altere em silêncio o que o usuário digitou (por exemplo, trocar gnail.com por gmail.com automaticamente). Se um endereço não passar na validação, mostre uma mensagem clara para o usuário conferir o que digitou. Se você reescrever em silêncio, pode enviar links de ativação de conta ou recibos de cobrança para outra pessoa.',

  whereTitle: 'Onde validar e-mails em tempo real',
  whereIntro: 'Valide endereços de e-mail em qualquer formulário do seu produto em que os usuários enviam dados.',
  whereCards: [
    {
      title: 'Formulários de cadastro de usuários',
      body: 'Evite spam de cadastro e ajude os e-mails de boas-vindas e os links de verificação a chegarem a caixas ativas.',
    },
    {
      title: 'Checkout de e-commerce',
      body: 'Garanta que avisos de envio, recibos e confirmações de pedido cheguem aos clientes sem falhas de entrega.',
    },
    {
      title: 'Pedidos de contato e de demo',
      body: 'Filtre entradas falsas de concorrentes e verifique os domínios das empresas antes de passar os contatos para os vendedores.',
    },
    {
      title: 'Assinaturas de newsletter',
      body: 'Proteja a reputação do seu domínio de envio: rejeite entradas malformadas e cadastros de bots no opt-in.',
    },
    {
      title: 'Automações com webhook',
      body: 'Dispare a validação automaticamente nos webhooks dos seus formulários com nossas [integrações com Zapier e n8n](/integrations).',
    },
    {
      title: 'Alterações no perfil da conta',
      body: 'Verifique os novos endereços quando usuários alteram o perfil ou o contato de cobrança.',
    },
  ],

  fieldsTitle: 'Campos da resposta que você vai usar no cadastro',
  fieldsIntro: 'Uma referência curta dos principais campos JSON necessários para aplicar a lógica de validação do formulário.',
  fieldsHeaders: ['Campo JSON', 'Tipo', 'Uso no cadastro'],
  fieldUsage: [
    'Verificação booleana rápida. É true quando as verificações do domínio e da caixa passam.',
    'Status principal de entrega: "deliverable", "undeliverable", "unknown".',
    'Pontuação de qualidade com base nas respostas da caixa, na estabilidade do MX e nas verificações de reputação.',
    'É true quando o domínio é um serviço conhecido de caixas temporárias ou descartáveis.',
    'É true para provedores pessoais (Gmail, Outlook). Exija domínios corporativos em formulários B2B.',
    'É true para endereços de organização como info@, admin@ ou support@.',
    'Resolução de domínios catch-all na mesma chamada. Recupere leads válidos sem descartá-los.',
  ],
  fieldsNote:
    'Para ver todas as definições de endpoints, os esquemas de parâmetros e os códigos de erro, consulte a [referência completa da API](/public/docs).',

  pricingTitle: 'Preços da API de validação de e-mail',
  pricingIntro:
    'Pague apenas pelas validações que você faz, sem mínimos mensais nem fidelidade. Cada chamada de validação à API consome 1 crédito, com as verificações de catch-all incluídas na mesma chamada. Resultados desconhecidos são reembolsados automaticamente, e seus primeiros 1.000 créditos são totalmente grátis.',
  pricingNote: 'Veja todos os planos por volume e os descontos da assinatura mensal na nossa [página de preços](/pricing).',

  faqTitle: 'Perguntas frequentes sobre a API de validação de e-mail',
  faqIntro: 'Respostas para dúvidas comuns de implementação sobre formulários de cadastro e validação em tempo real.',
  faqs: [
    {
      q: 'Existe uma API de validação de e-mail grátis?',
      a: 'Sim. Cada conta nova recebe 1.000 créditos grátis no cadastro, sem cartão de crédito. Você pode gerar uma chave de API no seu painel de desenvolvedor e começar a testar a validação de formulários em tempo real na hora. Os créditos grátis nunca expiram e dão acesso completo a todos os atributos e verificações de validação.',
    },
    {
      q: 'Posso chamar a API diretamente pelo navegador?',
      a: 'Não. Chamar a API direto do JavaScript no cliente exporia sua chave de API secreta a qualquer pessoa que inspecionasse as requisições de rede do navegador. Envie sempre os dados do formulário primeiro para o seu próprio servidor backend ou para uma função serverless, e deixe o seu servidor fazer a requisição para https://api.giggal.ai/v1/verify.',
    },
    {
      q: 'A validação envia um e-mail para o usuário?',
      a: 'Nenhuma mensagem é enviada. A API verifica se a caixa existe. Ela encerra a conexão antes de transmitir qualquer dado ou conteúdo do e-mail, então seus usuários não recebem nada na caixa de entrada.',
    },
    {
      q: 'Ela detecta endereços descartáveis e temporários?',
      a: 'Sim. Cada verificação compara o domínio com a nossa base de mais de 100.000 domínios de e-mail descartáveis e temporários. Se houver correspondência, details.attributes.disposable retorna true e o status passa a ser undeliverable, para que o seu backend possa bloquear contas temporárias.',
    },
    {
      q: 'Devo bloquear endereços de função como info@?',
      a: 'Depende do seu modelo de negócio. Em apps para consumidores, contas de função como support@ ou info@ podem representar organizações legítimas. Em um SaaS B2B self-service, em que é preciso saber quem é cada usuário, muitas empresas marcam ou proíbem contas de função genéricas para evitar o compartilhamento de login.',
    },
    {
      q: 'O que acontece com domínios catch-all no cadastro?',
      a: 'Domínios catch-all aceitam qualquer endereço de destinatário sem condição, o que deixa as verificações comuns inconclusivas. Nossa API faz a verificação completa de catch-all na mesma chamada para saber se a caixa existe. Se a verificação de catch-all retornar "valid", você pode permitir o cadastro com segurança; se retornar "invalid", o endereço vai dar bounce e o cadastro deve ser barrado.',
    },
    {
      q: 'O que meu formulário deve fazer se a API não responder a tempo?',
      a: 'Recomendamos usar o padrão fail-open. Se a chamada do seu backend sofrer um timeout de rede ou um erro de conexão, deixe o cadastro ser concluído em vez de bloquear um possível cliente. Coloque o endereço não validado na fila do seu processo em segundo plano para verificar o status de entrega mais tarde.',
    },
    {
      q: 'Preciso de uma API de validação de e-mail ou de uma API de verificação de e-mail?',
      a: 'Escolha uma API de validação de e-mail quando precisar de verificações em tempo real em formulários de cadastro na web, para barrar erros de digitação, caixas descartáveis e bots no envio do formulário. Escolha uma API de verificação de e-mail quando for auditar bases de marketing existentes, sincronizar contatos do CRM ou limpar arquivos de e-mail em massa antes de enviar campanhas.',
    },
  ],

  ctaHeadline: 'Proteja seus formulários de cadastro hoje',
}

const ja: ValidationApiStrings = {
  metaTitle: 'メールアドレスのバリデーションAPI：登録フォームをリアルタイムでチェック | Giggal.ai',
  ogTitle: 'メールアドレスのバリデーションAPI：登録フォームをリアルタイムでチェック',
  description:
    '登録フォームと購入フォームのためのメールアドレスのバリデーションAPIです。無効、使い捨て、役割アドレスを、1回のJSON呼び出しでリアルタイムに防ぎます。無料クレジット1,000件付き。',
  ogLocale: 'ja_JP',
  crumb: 'メールアドレスのバリデーションAPI',
  appName: 'Giggal.ai メールアドレスのバリデーションAPI',

  h1Lead: 'メールアドレスのバリデーションAPI：',
  h1Accent: '登録フォームをリアルタイムでチェック',
  heroIntro:
    'ユーザーが送信したアドレスを、その場で確認します。1回の呼び出しで、メールサーバーとメールボックスが存在するかを確認し、使い捨てと役割アドレスのフラグも返します。どのアドレスを受け付けるかは、そのフラグをもとに決められます。このメールアドレスのバリデーションAPI（email validation API）は、入口で不正なデータを止め、偽のアカウントがデータベースに入るのを防ぎます。',
  heroCodeLabel: 'バックエンドの登録処理',
  heroCodeTag: 'フォームの判断',
  heroCta: '無料のAPIキーを取得',
  heroSecondaryCta: 'フォームへの追加方法を見る',
  heroNote: '無料クレジット1,000件付き。クレジットカードは不要です。クレジットに有効期限はありません。',

  regexTitle: '正規表現だけではメールアドレスのバリデーションにならない理由',
  regexParas: [
    '正規表現が確認するのは、文字列の構造だけです。@記号があるか、ドメインの形式がそれらしく見えるか、文字が標準のASCIIの範囲に入っているかです。正規表現でわかるのは、入力がメールアドレスのように見えるかどうかだけです。そのアドレスで誰かがメッセージを受け取れるかどうかはわかりません。',
    '{0}や{1}と入力すると、RFCに沿った正規表現はどれも問題なく通します。それでも、一方のドメインには使われているメールサーバーがなく、もう一方のメールボックスは存在しないかもしれません。',
    'このメールアドレスのバリデーションAPIは、JSONで結果を返し、正規表現よりもずっと多くのことを確認します。1回のリクエストで、DNSレコードを調べ、MXホストを検索し、送信先のメールサーバーに接続してメールボックスの応答を確かめます。さらに、ドメインを大規模な使い捨てドメインのリストと照合します。',
    '厳しすぎる正規表現は、正しいアドレスを誤って拒否する原因にもなります。独自の正規表現は、.studioや.cloudのような珍しいトップレベルドメイン、正しい国際文字、珍しい記号を含む正規のアドレスを拒否することがよくあります。このAPIはRFC 5322の構文の仕様をすべて自動で扱うため、壊れやすい正規表現のライブラリをコードの中で管理する必要がなくなります。',
  ],
  checkCards: [
    {
      title: '構文のチェック',
      body: '外部のネットワークを調べる前に、基本的な入力ミス、トップレベルドメインの抜け、使えない記号、空白の問題を見つけます。',
    },
    {
      title: 'DNSとMXの確認',
      body: 'ドメインが登録されているかを確認し、受信メールを受け付けるメールサーバー（MX）が設定されているかを調べます。',
    },
    {
      title: 'メールボックスのチェック',
      body: '相手のメールサーバーと直接やり取りし、そのメールボックスが存在してメールを受け取れるかを確認します。',
    },
  ],

  decisionTitle: '登録時にブロックするもの、印を付けるもの、受け付けるもの',
  decisionIntro:
    '登録の条件は、事業によって違います。企業向けのB2B SaaSは会社のメールアドレスを必須にすることがあり、個人向けのSNSアプリは個人のGmailアドレスも受け付けます。実際のAPIレスポンスの属性をもとにした、推奨の判断表は次のとおりです。',
  decisionHeaders: ['APIの結果', 'フィールドの条件', 'フォームでの対応'],
  decisionRows: [
    { title: '無効', body: 'すぐにブロックします。表示例：「使用中の正しいメールアドレスを入力してください。」' },
    { title: '使い捨て', body: 'ブロックするか、別のアドレスを求めます。表示例：「一時的なメールアドレスは使用できません。」' },
    { title: '役割アドレス', body: '受け付けます。B2Bのフォームでは印を付けます。担当者に知らせるか、一般のリードとして振り分けます。' },
    { title: 'フリーメール', body: 'B2Cのアプリでは受け付けます。B2Bのデモやトライアルのフォームでは、会社のメールアドレスを必須にします。' },
    { title: 'キャッチオールドメイン', body: '{0}を確認します。"valid"なら受け付け、"invalid"ならブロックし、nullなら登録を受け付けます。' },
    { title: '不明', body: '受け付けて、後でもう一度チェックします（クレジットは返却されます）。正規のユーザーを決してブロックしないよう、エラー時は通過させます（フェイルオープン）。' },
  ],

  formTitle: '登録フォームにメールアドレスのバリデーションを追加する',
  formParas: [
    'リアルタイムのバリデーションを安全に組み込むには、次の4つの手順に従ってください。リクエストには非公開のAPIキーが必要なので、チェックはバックエンドのサーバーから実行します。',
    'フェイルオープンが重要な理由：登録フォームは遅延の影響を受けやすいものです。外部のAPI呼び出しがネットワークの遅延で止まったときにフォームをブロックすると、実際の顧客を失うことがあります。タイムアウトを短く設定し、時間切れのときは登録をそのまま進めるようにすれば、正規のユーザーを断らずに済みます。その間に、バックエンドはそのアドレスを後でバックグラウンドでチェックするよう順番待ちに入れます。',
  ],
  formSteps: [
    {
      title: 'フォームからバックエンドへ送信',
      body: '訪問者が登録内容を送信すると、ブラウザがメールアドレスを自社のアプリケーションのエンドポイントに送ります。',
    },
    {
      title: 'バックエンドがバリデーションAPIを呼び出す',
      body: 'サーバーは、環境変数に保存した非公開のキーを使って、GiggalにPOSTリクエストを同期で送ります。',
    },
    {
      title: 'バックエンドが判断表を適用',
      body: 'JSONの属性を読み取ります。アドレスが使い捨てか配信不可なら、わかりやすいエラーメッセージをブラウザに返します。',
    },
    {
      title: 'タイムアウト時は通過させる',
      body: '外部との通信がタイムアウトしたら、フェイルオープンにします。登録を受け付け、後で検証するバックグラウンドのジョブを順番待ちに入れます。',
    },
  ],
  codeTitle: '実装のコード例',
  codeLabels: [
    'バックエンド：Node.js（Expressのルート）',
    'バックエンド：Python（Flaskのルート）',
    'フロントエンド：ブラウザのクライアント（自社のバックエンドを呼び出す）',
  ],
  codeTagServer: 'サーバー側のみ',
  codeTagClient: 'クライアント側のスクリプト',
  codeNote:
    '重要：クライアント側のスクリプトからGiggalのAPIのエンドポイントを直接呼び出さないでください。認証情報はサーバーに置き、公開しないでください。',

  fakeTitle: '使い捨てのアドレスと偽のアドレスでの登録を防ぐ',
  fakeIntro:
    '一時的な受信トレイは、製品の分析データを不正確にし、無料トライアルの枠を消費し、有料の顧客になることはありません。このサービスは、リスクの高い登録のパターンに印を付けます。',
  fakeCards: [
    {
      title: '使い捨ての受信トレイ',
      body: '100,000以上の一時的なドメインを登録したリストと照合します。使い捨てのメールボックスを見分ける方法は、[捨てメアド判定ツール](/disposable-email-checker)で詳しく紹介しています。',
    },
    {
      title: 'プラスアドレスの検出',
      body: 'プラス記号で作った別名（{0}）に印を付けます。1人のユーザーがトライアルのアカウントを重複して作るのを防げます。',
    },
    {
      title: '返信不可のメールボックスの検出',
      body: '受信したメールを破棄する一斉送信用や自動送信用のメールボックスを見分けます。やり取りのできないアドレスでの登録を防げます。',
    },
  ],
  typoTitle: 'ユーザーの入力ミスを自動で修正しない',
  typoBody:
    'ユーザーの入力を黙って書き換えないでください（例：gnail.comを自動でgmail.comに変える）。アドレスがバリデーションに通らなかったときは、入力を確認するようはっきりしたメッセージで伝えてください。黙って書き換えると、アカウントの有効化用のトークンや請求の領収書が別の人に届くおそれがあります。',

  whereTitle: 'メールアドレスをリアルタイムでバリデーションする場所',
  whereIntro: '製品の中でユーザーがフォームを送信する場所なら、どこでもメールアドレスをチェックできます。',
  whereCards: [
    {
      title: 'ユーザー登録フォーム',
      body: 'スパムの登録を防ぎ、ウェルカムメールや確認用のリンクが使われている受信トレイに届くようにします。',
    },
    {
      title: 'ECサイトの購入手続き',
      body: '発送のお知らせ、領収書、注文確認が、配信エラーなしで顧客に届くようにします。',
    },
    {
      title: 'リードとデモの申し込み',
      body: '競合他社による偽の入力を除き、見込み客を営業担当者に回す前に会社のドメインを確認します。',
    },
    {
      title: 'ニュースレターの購読',
      body: '購読の申し込み時に、形式の正しくない入力やボットの登録を拒否し、配信用ドメインのレピュテーションを守ります。',
    },
    {
      title: 'Webhookでの自動化',
      body: '用意済みの[Zapierとn8nの連携](/integrations)を使って、フォームのWebhookでバリデーションを自動で実行します。',
    },
    {
      title: 'アカウント情報の変更',
      body: '既存のユーザーがプロフィールや請求先の連絡先を変更したときに、新しいメールアドレスを確認します。',
    },
  ],

  fieldsTitle: '登録時に使うレスポンスのフィールド',
  fieldsIntro: 'フォームのバリデーションのロジックに必要な、主なJSONフィールドの一覧です。',
  fieldsHeaders: ['JSONフィールド', '型', '登録時の使い方'],
  fieldUsage: [
    'すばやく確認できる真偽値です。ドメインとメールボックスのチェックに通るとtrueになります。',
    '主な配信ステータスです："deliverable"、"undeliverable"、"unknown"。',
    'メールボックスの応答、MXの安定性、レピュテーションのチェックをもとにした品質スコアです。',
    'ドメインが既知の一時的または使い捨ての受信トレイのサービスのときにtrueになります。',
    '個人向けのプロバイダー（Gmail、Outlook）のときにtrueになります。B2Bのフォームでは会社のドメインを必須にできます。',
    'info@、admin@、support@のような組織のアドレスのときにtrueになります。',
    'キャッチオールドメインを同じ呼び出しで判定した結果です。有効な見込み客を削除せずに残せます。',
  ],
  fieldsNote:
    'エンドポイントの定義、パラメーターのスキーマ、エラーコードのすべては、[APIリファレンス](/public/docs)をご覧ください。',

  pricingTitle: 'メールアドレスのバリデーションAPIの料金',
  pricingIntro:
    '実行したバリデーションの分だけ支払います。月額の最低料金や契約はありません。APIのバリデーション呼び出し1回につき1クレジットを使い、キャッチオールドメインのチェックも含まれます。不明の結果は自動で返却され、最初の1,000クレジットは無料です。',
  pricingNote: 'すべての料金プランと月額プランの割引は、[料金ページ](/pricing)をご覧ください。',

  faqTitle: 'メールアドレスのバリデーションAPIに関するよくある質問',
  faqIntro: '登録フォームとリアルタイムのバリデーションの実装について、よくある質問への回答です。',
  faqs: [
    {
      q: '無料のメールアドレスのバリデーションAPIはありますか？',
      a: 'はい。新しいアカウントには、登録時に無料クレジット1,000件が付きます。クレジットカードは不要です。開発者用のダッシュボードでAPIキーを作成すれば、すぐにフォームのリアルタイムのバリデーションを試せます。無料クレジットに有効期限はなく、バリデーションのすべての属性とチェックを使えます。',
    },
    {
      q: 'ブラウザからAPIを直接呼び出せますか？',
      a: 'いいえ。クライアント側のJavaScriptからAPIを直接呼び出すと、ブラウザのネットワークのリクエストを見た人に秘密のAPIキーが知られてしまいます。ユーザーのフォームの入力は、必ず先に自社のバックエンドのサーバーかサーバーレス関数に送り、サーバーからhttps://api.giggal.ai/v1/verifyにリクエストしてください。',
    },
    {
      q: 'バリデーションのときにユーザーにメールが送られますか？',
      a: 'メッセージは一切送られません。APIはメールボックスが存在するかを確認し、メールのデータや本文を送る前に接続を閉じます。ユーザーの受信トレイには何も届きません。',
    },
    {
      q: '使い捨てのアドレスや一時的なアドレスを見分けられますか？',
      a: 'はい。すべてのチェックで、ドメインを100,000以上の使い捨て、一時的なメールのドメインのリストと照合します。一致すると、details.attributes.disposableがtrueになり、ステータスはundeliverableになります。バックエンドで一時的なアカウントをブロックできます。',
    },
    {
      q: 'info@のような役割アドレスはブロックするべきですか？',
      a: '事業のモデルによります。個人向けのアプリでは、support@やinfo@のような役割アドレスが正規の組織のこともあります。ユーザー本人の責任が必要なセルフサービスのB2B SaaSでは、認証情報の共有による不正利用を防ぐため、一般的な役割アドレスに印を付けたり、使えなくしたりする会社が多くあります。',
    },
    {
      q: '登録時にキャッチオールドメインのアドレスはどうなりますか？',
      a: 'キャッチオールドメインは、すべての受信者のアドレスを無条件に受け付けるため、通常のチェックでは結論が出ません。このAPIは、同じ呼び出しの中でキャッチオールドメインのアドレスを詳しく検証し、メールボックスが存在するかを調べます。結果が"valid"なら登録を受け付けて問題ありません。"invalid"ならそのアドレスはバウンスするので、止めてください。',
    },
    {
      q: 'APIが時間内に応答しないとき、フォームはどうすればよいですか？',
      a: 'フェイルオープンの実装をおすすめします。バックエンドの呼び出しでネットワークのタイムアウトや接続エラーが起きたときは、見込み客をブロックせずに登録を完了させてください。バリデーションしていないアドレスはバックグラウンドの処理の順番待ちに入れ、後で配信ステータスをもう一度チェックします。',
    },
    {
      q: '必要なのはメールアドレスのバリデーションAPIですか、メールアドレス検証APIですか？',
      a: 'ウェブの登録フォームで、入力ミス、使い捨ての受信トレイ、ボットを送信の時点で止めたい場合は、メールアドレスのバリデーションAPIを選んでください。既存のマーケティング用データベースの点検、CRMの連絡先の同期、キャンペーン前の大量のメールリストのクリーニングには、メールアドレス検証APIを選んでください。',
    },
  ],

  ctaHeadline: '登録フォームを今日から守りましょう',
}

export const VALIDATION_API_STRINGS: Partial<Record<Locale, ValidationApiStrings>> & { en: ValidationApiStrings } = {
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

/** The page copy for `locale`, or English while that language is not written yet. */
export function getValidationApiStrings(locale: Locale): ValidationApiStrings {
  return VALIDATION_API_STRINGS[locale] ?? VALIDATION_API_STRINGS.en
}
