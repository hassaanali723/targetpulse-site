// Korean strings for the shared chrome and the two interactive components.
// One page set for Korea (SEO-Plan/i18n-batch4-ko-keyword-plan.md).
// Formal polite style (합니다체). Terms follow SEO-Plan/i18n-batch4-ko-terminology.md:
// 이메일 유효성 검사, 이메일 검증, 캐치올(catch-all) 도메인, 유효 / 무효 / 위험 /
// 알 수 없음. Numbers 1,000 and 10,000 (ko-KR), prices US$9.90 (currency stays
// USD), dates 2026년 10월 28일. Korean keeps normal spaces between words.

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  // Same links, in the same order, as the English navbar (components/Navbar.tsx).
  links: [
    { name: '캐치올 검증', href: '/ko/catch-all-verification' },
    { name: '연동', href: '/ko/integrations' },
    { name: 'MCP', href: '/ko/mcp' },
    { name: '요금', href: '/ko/pricing' },
    { name: '제휴 프로그램', href: '/ko/affiliates' },
  ],
  login: '로그인',
  signup: '무료 가입',
  menu: '메뉴 열기',
  homeAria: 'Giggal.ai 홈',
}

export const footer = {
  blurb:
    '메일함이 실제로 있는지 확인하는 이메일 검증 도구입니다. 캠페인이 실제 사람의 받은편지함에 도달하도록 돕습니다. 다른 도구가 건너뛰는 캐치올(catch-all) 도메인과 accept-all 도메인도 검증합니다.',
  solutions: {
    heading: '솔루션',
    links: [
      { name: '캐치올 도메인 검증', href: '/ko/catch-all-verification' },
      { name: 'MCP 서버', href: '/ko/mcp' },
    ],
  },
  resources: {
    heading: '리소스',
    links: [
      { name: '블로그', href: '/ko/blog' },
      { name: '용어집', href: '/ko/glossary' },
      { name: '검증 도구 비교(영어)', href: '/alternatives' },
      { name: 'ZeroBounce 대안', href: '/ko/zerobounce-alternative' },
      { name: 'NeverBounce 대안', href: '/ko/neverbounce-alternative' },
      { name: 'Snov.io 대안', href: '/ko/snovio-alternative' },
      { name: 'API 문서', href: '/ko/api-docs' },
    ],
  },
  freeTools: {
    heading: '무료 도구',
    links: [
      { name: '이메일 유효성 검사', href: '/ko/email-checker' },
      { name: '일회용 이메일 판별', href: '/ko/disposable-email-checker' },
      { name: '일회용 이메일 사이트 목록', href: '/ko/disposable-email' },
      { name: '무료 이메일 도메인 목록', href: '/ko/free-email-providers' },
      { name: '이메일 추출기', href: '/ko/email-extractor' },
      { name: 'DKIM 생성기', href: '/ko/dkim-generator' },
      { name: 'DMARC 레코드 생성기', href: '/ko/dmarc-generator' },
      { name: 'MX 레코드 조회', href: '/ko/mx-lookup' },
      { name: 'SPF 레코드 검사기', href: '/ko/spf-checker' },
      { name: 'Gmail 플러스 주소', href: '/ko/gmail-plus-addressing' },
      { name: '반송률 계산기', href: '/ko/bounce-rate-calculator' },
      { name: '이메일 주소 조합 생성기', href: '/ko/email-permutator' },
      { name: 'BIMI 레코드 생성기', href: '/ko/bimi-generator' },
      { name: '스팸 단어 검사기', href: '/ko/spam-word-checker' },
      { name: '이메일 서명 만들기', href: '/ko/email-signature-generator' },
    ],
  },
  product: {
    heading: '제품',
    // Same order as the English footer: the paid product only.
    links: [
      { name: '이메일 검증', href: '/ko' },
      { name: '대량 이메일 검증', href: '/ko/bulk-email-verifier' },
      { name: '이메일 리스트 정리(영어)', href: '/email-list-cleaning' },
      { name: '연동', href: '/ko/integrations' },
      { name: '이메일 검증 API(영어)', href: '/email-verification-api' },
      { name: '요금', href: '/ko/pricing' },
    ],
  },
  company: {
    heading: '회사',
    links: [
      { name: '문의하기', href: '/ko/contact' },
      { name: '제휴 프로그램', href: '/ko/affiliates' },
    ],
  },
  legal: [
    { name: '이용약관', href: '/ko/terms' },
    { name: '개인정보 처리방침', href: '/ko/privacy' },
    { name: '환불 정책', href: '/ko/refund-policy' },
  ],
  legalHeading: '법적 고지',
  rights: '모든 권리 보유.',
  operatedBy: 'Giggal.ai는 영국 런던의 TargetPulse Ltd가 운영합니다.',
  abuseReports: '악용 신고:',
  language: '언어',
}

export const announcement = {
  // Empty on purpose: the bar renders text + " " + brand + tail, and a leading
  // space at the start of the line collapses, so the line starts with PureMail.
  text: '',
  brand: 'PureMail',
  tail: '에서 전용 Google·Outlook 받은편지함을 1개당 월 US$2.90에 제공합니다.',
  dismiss: '공지 닫기',
}

export const cta = {
  headline: '리스트 전체를 검사하고 결과를 비교해 보십시오',
  offer: '무료 크레딧 1,000개를 드립니다. 신용카드는 필요 없습니다.',
  button: '무료로 시작하기',
  trust: ['무료 체험', '크레딧 유효기간 없음', '알 수 없음 결과는 크레딧 환불'],
}

export const consoleStrings = {
  header: '실시간 테스트',
  live: '라이브 테스트',
  actionLabel: '작업',
  actionTitle: '메일함 검증',
  placeholder: '검증할 이메일 주소 입력...',
  ariaInput: '검증할 이메일 주소',
  button: '검증하기',
  buttonRunning: '분석 중',
  diagnostics: '검사 상태',
  checks: {
    basic: '기본 유효성 검사',
    dns: '메일 서버 찾기',
    catchall: '캐치올 도메인 검사',
    mailbox: '메일함 검사',
  },
  idleTitle: '메일함 검증 준비 완료',
  idleText: '회사 또는 개인 이메일 주소를 입력하면 메일함이 실제로 있는지 확인할 수 있습니다.',
  spawning: '검사를 시작하는 중...',
  initLog: '[INIT] 검증용 보안 연결을 여는 중...',
  limitTitle: '무료 검사 한도 도달',
  limitText: '이번 1시간 동안 사용할 수 있는 무료 검사 5회를 모두 사용했습니다. 무료로 가입하면 무료 크레딧 1,000개를 받을 수 있으며 신용카드는 필요 없습니다. 이 크레딧으로 리스트 전체를 검증할 수 있습니다.',
  limitButton: '무료 크레딧 1,000개 받기',
  errorTitle: '검증 오류',
  errorFailed: '검증에 실패했습니다. 다시 시도해 주십시오.',
  errorUnreachable: '검증 서비스에 연결할 수 없습니다.',
  invalidSyntax: '올바른 이메일 주소 형식이 아닙니다.',
  // Rendered as "{domain} " + this text (Korean keeps the space), so the line
  // reads as a sentence: "example.com 도메인은 캐치올 도메인입니다".
  isCatchAll: '도메인은 캐치올 도메인입니다',
  notCatchAll: '도메인은 캐치올 도메인이 아닙니다',
  catchAllText: '이 도메인은 모든 주소로 오는 메일을 받습니다. 그래서 기본 검사만으로는 이 메일함이 실제로 있는지 알 수 없습니다.',
  notCatchAllText: '이 도메인에서는 일반 검사 결과를 신뢰할 수 있습니다.',
  resultLabel: '결과',
  verdictTitle: {
    deliverable: '유효',
    undeliverable: '무효',
    risky: '위험',
    unknown: '알 수 없음',
    catchall: '캐치올 도메인',
    error: '오류',
  },
  verdictLine: {
    deliverable: '이 메일함은 존재합니다.',
    undeliverable: '이 메일함은 존재하지 않습니다.',
    risky: '서버가 메일을 받지만, 이 메일함이 있는지 완전히 확인할 수는 없습니다.',
    unknown: '이 메일함을 확인할 수 없었습니다.',
    catchall: '이 메일함을 확인할 수 없었습니다.',
    error: '',
  },
}

export const pricing = {
  payg: '종량제(1회 결제)',
  subscription: '월 구독',
  save: '10% 할인',
  colVolume: '크레딧 수량',
  colRate: '크레딧당 가격',
  colSave: '할인',
  colTotal: '총 금액',
  credits: '크레딧',
  popular: '인기',
  perCredit: '/ 크레딧',
  oneTime: '1회 결제',
  perMonth: '/월',
  saveBadge: '{pct}% 할인',
  buy: '구매하기',
  subscribe: '구독하기',
  noDiscount: '할인 없음',
  mobVolume: '수량',
  mobRate: '단가',
  mobSave: '할인',
  mobPrice: '가격',
  numberLocale: 'ko-KR',
  currencySuffix: false,
  currencyPrefix: 'US$',
  formula: '이메일 주소 1개 검증',
  formulaNote: '(캐치올 도메인, accept-all 도메인, SEG 뒤에 있는 주소의 검증 포함)',
  formulaCredit: '크레딧 1개',
  customTitle: '맞춤 크레딧 수량이 필요하십니까?',
  customText: '대량 검증에는 맞춤 요금제와 전용 IP 풀을 제공합니다.',
  customButton: '문의하기',
}

export const notFound = {
  kicker: '404',
  title: '이 페이지는 존재하지 않습니다',
  text: '주소가 잘못 입력되었거나 페이지가 이동했을 수 있습니다. 무료 이메일 유효성 검사 도구와 요금 페이지는 여기에서 바로 열 수 있습니다.',
  primary: '이메일 유효성 검사',
  secondary: '홈으로 돌아가기',
}

export const legal = {
  updated: '최종 업데이트',
  // Rendered as notice + " " + link + tail, so the sentence ends before the link.
  notice: '이 페이지는 참고용 번역본입니다. 법적 구속력은 영어 원문에만 있으며, 내용이 다를 경우 영어 원문이 우선합니다.',
  noticeLink: '영어 원문 보기',
  noticeTail: '',
  breadcrumbHome: '홈',
}

/** Korean number formatting: 10,000 and US$9.90 (currency stays USD). */
export function koNumber(n: number, decimals = 0): string {
  return n.toLocaleString('ko-KR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
export function koUsd(n: number, decimals = 2): string {
  return `US$${koNumber(n, decimals)}`
}

/** 2026-10-28 -> "2026년 10월 28일" */
export function formatDateKo(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  if (!y || !m || !d) return iso
  return `${y}년 ${m}월 ${d}일`
}
