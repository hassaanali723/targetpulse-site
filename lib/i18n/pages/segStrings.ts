// All page copy for the SEG email verification page, one object per language the page ships in.
// The page is components/pages/Seg/SegPage.tsx; the URLs live in CLUSTERS.seg
// (lib/i18n/clusters.ts). The it and de members of that cluster are older,
// separate pages (app/(it)/it/verifica-seg, app/(de)/de/secure-email-gateway)
// and do not read this file.
//
// Inline links use [label](/english-path). The page routes each path to the
// reader's language when that page exists. FAQ answers are plain text.
//
// Gateway names, result icons and link targets stay in the page component.
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface SegStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  ogAlt: string
  crumb: string
  /** H1 is lead text, a space, then the gradient accent. */
  h1Lead: string
  h1Accent: string
  heroIntro: string
  heroCta: string
  heroPricing: string
  heroNote: string
  whatTitle: string
  whatParas: [string, string]
  whyTitle: string
  whyParas: [string, string, string]
  ipTitle: string
  ipPara: string
  howTitle: string
  howParas: [string, string, string]
  gatewaysTitle: string
  gatewaysNote: string
  proofpointTitle: string
  proofpointPara: string
  mimecastTitle: string
  mimecastPara: string
  /** Label of the link to the Mimecast page, shown when MIMECAST_PAGE_LIVE is on. */
  mimecastLink: string
  barracudaTitle: string
  barracudaPara: string
  resultsTitle: string
  resultsHeadResult: string
  resultsHeadMeaning: string
  /** Deliverable, Undeliverable, Risky, Unknown, in that order (icons are in the page). */
  results: [ResultRow, ResultRow, ResultRow, ResultRow]
  refundNote: string
  /** Carries the catch-all verification link. */
  catchAllNote: string
  pricingTitle: string
  pricingStandardTag: string
  pricingStandardPrice: string
  pricingStandardUnit: string
  pricingCatchAllTag: string
  pricingCatchAllPrice: string
  pricingCatchAllUnit: string
  /** Carries the pricing link. */
  pricingNote: string
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line, button and trust items. */
  ctaOffer?: string
  ctaButton?: string
  ctaTrust?: [string, string, string]
}

export interface ResultRow {
  label: string
  meaning: string
}

const DESC =
  'Proofpoint, Mimecast, Barracuda and other gateways block the checks most verifiers use. Giggal.ai returns valid or invalid behind 15 secure email gateways.'

const en: SegStrings = {
  metaTitle: 'Verify Emails Behind Secure Email Gateways | Giggal.ai',
  ogTitle: 'Verify Emails Behind Secure Email Gateways',
  description: DESC,
  ogAlt: 'Giggal.ai email verification',
  crumb: 'SEG Email Verification',
  h1Lead: 'Verify emails protected by',
  h1Accent: 'SEG gateways',
  heroIntro:
    "Secure email gateways sit in front of a company's real mail server and refuse the checks most verifiers depend on. Giggal.ai routes around them and returns a real email verification result, valid or invalid, instead of an Unknown.",
  heroCta: 'Start free with 1,000 credits',
  heroPricing: 'See pricing',
  heroNote: 'No card required. Credits never expire.',
  whatTitle: 'What is a secure email gateway?',
  whatParas: [
    "A secure email gateway is a filtering layer that sits in front of a company's real mail server. Every message headed for the domain passes through the gateway first. Companies run one to block spam and malware, to stop phishing, and to enforce data loss prevention rules before anything reaches a mailbox. Vendors in this space include Proofpoint, Mimecast, Barracuda, and Cisco IronPort.",
    "Because the gateway stands in front of the mail server, it also answers on the mail server's behalf. Anything that tries to check whether a mailbox exists, including an email verifier, ends up talking to the gateway instead of the system that actually knows which mailboxes exist.",
  ],
  whyTitle: 'Why gateways break email verification',
  whyParas: [
    'Standard email verification checks whether a given mailbox exists. On a normal domain the server answers, and the verifier records a valid or invalid result.',
    "Behind a gateway that question never reaches the mail server. The gateway intercepts it and answers on the server's behalf. Gateways are built to prevent third parties from mapping a company's users. So the gateway gives a deliberately vague answer, accepts every address whether it exists or not, or refuses the connection outright.",
    'The verifier is left with nothing it can turn into an email verification result. It reports the address as Unknown or Risky, and the contact stays unresolved. On a business list where a large share of domains sit behind a gateway, that is a real part of your list you cannot confidently use.',
  ],
  ipTitle: 'The IP reputation problem',
  ipPara:
    'Retrying makes it worse. Repeatedly querying an endpoint that refuses the check gets the sending IP flagged. Once that happens, results degrade across every domain that verifier touches, not just the gateway domains. This is why Giggal.ai uses alternate verification methods on gateways that behave this way rather than retrying into a block.',
  howTitle: 'How Giggal.ai verifies behind a gateway',
  howParas: [
    "Giggal.ai reads the domain's MX records first to work out what is actually in front of the mailbox. That tells us whether the domain answers directly or sits behind a gateway.",
    'Domains behind a gateway are routed down a different verification path than domains that answer directly. Where a gateway blocks standard mailbox checks, the email verification result does not depend on that answer at all. We verify the address through a different signal, so it still comes back valid or invalid when a standard check would return nothing.',
    'Gateways also return responses designed to hide whether a mailbox exists, deliberately vague answers meant to throw off a verifier. Giggal.ai recognises these and does not mistake one for a real result. When the only thing coming back is noise, we treat it as no answer rather than guessing. So the address comes back valid or invalid, where most verifiers hand back an Unknown.',
  ],
  gatewaysTitle: 'Gateways we detect',
  gatewaysNote:
    "Detection happens automatically from the domain's MX records. You do not need to tell us anything about a list before you run it.",
  proofpointTitle: 'Proofpoint',
  proofpointPara:
    "Proofpoint is one of the most widely deployed secure email gateways on enterprise domains. If you sell into large companies, a meaningful part of your list sits behind it. Proofpoint fronts the real mail server and filters inbound mail for threats, which is also why a standard check against a Proofpoint domain tends to come back without a usable answer. Giggal.ai identifies Proofpoint from the domain's MX records and routes the address down the gateway path, so instead of an Unknown you get a real deliverable or undeliverable result on the mailbox behind it.",
  mimecastTitle: 'Mimecast',
  mimecastPara:
    'Mimecast is built to stop anyone working out which mailboxes exist on a domain, and it answers queries with a deliberately vague response rather than confirming or denying the address. Giggal.ai recognises that behaviour and avoids triggering that response, protecting sender reputation. It checks whether the mailbox exists another way, so it comes back with a real email verification result instead of an Unknown.',
  mimecastLink: 'how Mimecast verification works',
  barracudaTitle: 'Barracuda',
  barracudaPara:
    "Barracuda is common on mid-market domains and, like other gateways, sits in front of the real mail server and filters inbound mail. A standard verifier checking a Barracuda domain usually cannot get a clear answer about the mailbox, because the gateway is the thing responding. Giggal.ai detects Barracuda from the domain's MX records and sends the address down the gateway verification path. You get a deliverable or undeliverable result on the mailbox itself, not a Risky or Unknown label that leaves you guessing about whether the contact is real.",
  resultsTitle: 'What you get back',
  resultsHeadResult: 'Result',
  resultsHeadMeaning: 'Meaning',
  results: [
    { label: 'Deliverable', meaning: 'The mailbox exists and will accept mail' },
    { label: 'Undeliverable', meaning: 'The mailbox does not exist' },
    { label: 'Risky', meaning: 'The address exists but carries deliverability risk' },
    { label: 'Unknown', meaning: 'We could not verify the address' },
  ],
  refundNote:
    'When we cannot verify an address, the credit is refunded automatically. You only pay for verifications we complete.',
  catchAllNote:
    'A catch-all domain is a related but different problem. If your list has those too, we also [verify catch-all & risky emails](/catch-all-verification).',
  pricingTitle: 'Pay only for what you verify',
  pricingStandardTag: 'Standard & SEG',
  pricingStandardPrice: '1 credit',
  pricingStandardUnit: 'per email verification',
  pricingCatchAllTag: 'Catch-All',
  pricingCatchAllPrice: '1 credit',
  pricingCatchAllUnit: 'per catch-all email',
  pricingNote:
    'No monthly fees, no minimums, and credits never expire. Start with 1,000 free credits, no card required. See full [pricing and credits](/pricing).',
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'Does a secure email gateway mean the address is invalid?',
      a: 'No. A gateway is a filtering layer, not a signal about the mailbox behind it. Plenty of valid, active addresses sit behind Proofpoint or Mimecast. The gateway just makes them harder to check.',
    },
    {
      q: 'Why do other verifiers return Unknown on these addresses?',
      a: 'Most verifiers connect to the mail server directly to ask if the mailbox exists. Behind a gateway, that question gets intercepted and answered by the gateway instead, which is built to not tell you anything useful. Without an answer, the verifier has nothing to report.',
    },
    {
      q: 'Which gateways does Giggal.ai handle?',
      a: "Fifteen, including Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet and Forcepoint. Detection is automatic from the domain's MX records.",
    },
    {
      q: 'Do I need to separate SEG-protected addresses before uploading?',
      a: 'No. Upload the list as it is. Domains behind a gateway are identified and routed automatically during the run.',
    },
    {
      q: 'Does verifying behind a gateway cost extra?',
      a: 'No. Every email verification is a flat 1 credit, regardless of whether the domain sits behind a Secure Email Gateway, is a catch-all, or is a standard mailbox.',
    },
    {
      q: 'What happens if you still cannot verify an address?',
      a: 'The address comes back as Unknown and the credit is refunded automatically.',
    },
  ],
  ctaHeadline: 'Run a list and see the difference',
  ctaOffer: '1,000 free credits, no card required.',
  ctaButton: 'Start verifying for free',
  ctaTrust: ['Free trial', 'Credits never expire', 'Refunds on Unknown'],
}

// Korean. Formal polite style (합니다체); terms from SEO-Plan/i18n-batch4-ko-terminology.md.
const ko: SegStrings = {
  metaTitle: '보안 이메일 게이트웨이(SEG) 뒤의 이메일 검증 | Giggal.ai',
  ogTitle: '보안 이메일 게이트웨이(SEG) 뒤의 이메일 검증',
  description:
    'Proofpoint, Mimecast, Barracuda 등 게이트웨이는 대부분의 검증 도구가 쓰는 검사를 막습니다. Giggal.ai는 보안 이메일 게이트웨이 15종 뒤에서도 유효 또는 무효 결과를 반환합니다.',
  ogLocale: 'ko_KR',
  ogAlt: 'Giggal.ai 이메일 검증',
  crumb: 'SEG 이메일 검증',
  h1Lead: '보안 이메일 게이트웨이(SEG)로 보호되는',
  h1Accent: '이메일 주소 검증',
  heroIntro:
    '보안 이메일 게이트웨이는 회사의 실제 메일 서버 앞에 있으며, 대부분의 검증 도구가 의존하는 검사를 거부합니다. Giggal.ai는 다른 경로를 사용해 알 수 없음 대신 유효 또는 무효라는 실제 이메일 검증 결과를 반환합니다.',
  heroCta: '무료 크레딧 1,000개로 시작하기',
  heroPricing: '요금 보기',
  heroNote: '신용카드 불필요. 크레딧 유효기간 없음.',
  whatTitle: '보안 이메일 게이트웨이란?',
  whatParas: [
    '보안 이메일 게이트웨이는 회사의 실제 메일 서버 앞에 있는 필터링 계층입니다. 도메인으로 가는 모든 메시지는 먼저 게이트웨이를 거칩니다. 회사는 메시지가 메일함에 도달하기 전에 스팸과 악성 코드를 막고, 피싱을 차단하고, 데이터 유출 방지(DLP) 규칙을 적용하려고 게이트웨이를 사용합니다. 이 분야의 업체로는 Proofpoint, Mimecast, Barracuda, Cisco IronPort가 있습니다.',
    '게이트웨이는 메일 서버 앞에 있으므로 메일 서버 대신 응답도 합니다. 이메일 검증 도구를 포함해 메일함이 있는지 확인하려는 모든 요청은, 어떤 메일함이 있는지 실제로 아는 시스템이 아니라 게이트웨이와 통신하게 됩니다.',
  ],
  whyTitle: '게이트웨이 때문에 이메일 검증이 실패하는 이유',
  whyParas: [
    '일반적인 이메일 검증은 특정 메일함이 있는지 확인합니다. 일반 도메인에서는 서버가 답하고, 검증 도구는 유효 또는 무효 결과를 기록합니다.',
    '게이트웨이 뒤에서는 이 질문이 메일 서버에 도달하지 않습니다. 게이트웨이가 질문을 가로채 서버 대신 답합니다. 게이트웨이는 외부인이 회사의 사용자 목록을 파악하지 못하도록 만들어졌습니다. 그래서 일부러 모호하게 답하거나, 실제로 있든 없든 모든 주소를 받거나, 연결을 바로 거부합니다.',
    '검증 도구는 이메일 검증 결과로 바꿀 정보를 얻지 못합니다. 주소를 알 수 없음이나 위험으로 보고하고, 연락처는 판별되지 않은 채 남습니다. 도메인의 상당수가 게이트웨이 뒤에 있는 비즈니스 리스트라면, 리스트의 상당 부분을 믿고 사용할 수 없게 됩니다.',
  ],
  ipTitle: 'IP 평판 문제',
  ipPara:
    '다시 시도하면 상황이 더 나빠집니다. 검사를 거부하는 엔드포인트에 반복해서 조회하면 발송 IP에 플래그가 붙습니다. 그러면 게이트웨이 도메인뿐 아니라 해당 검증 도구가 검사하는 모든 도메인의 결과가 나빠집니다. 그래서 Giggal.ai는 이렇게 동작하는 게이트웨이에는 차단될 때까지 다시 시도하지 않고 다른 검증 방법을 사용합니다.',
  howTitle: 'Giggal.ai가 게이트웨이 뒤의 주소를 검증하는 방법',
  howParas: [
    'Giggal.ai는 먼저 도메인의 MX 레코드를 읽어 메일함 앞에 실제로 무엇이 있는지 확인합니다. 이를 통해 도메인이 직접 응답하는지, 게이트웨이 뒤에 있는지 알 수 있습니다.',
    '게이트웨이 뒤의 도메인은 직접 응답하는 도메인과 다른 검증 경로로 처리됩니다. 게이트웨이가 일반 메일함 검사를 막는 경우, 이메일 검증 결과는 그 응답에 전혀 의존하지 않습니다. 다른 신호로 주소를 검증하므로, 일반 검사로는 아무 결과도 나오지 않을 때에도 유효 또는 무효 결과가 나옵니다.',
    '게이트웨이는 메일함이 있는지 숨기기 위한 응답도 보냅니다. 검증 도구가 잘못 판단하도록 일부러 모호하게 만든 답입니다. Giggal.ai는 이런 응답을 알아보고 실제 결과로 착각하지 않습니다. 의미 없는 응답만 돌아오면 추측하지 않고 답이 없는 것으로 처리합니다. 그래서 대부분의 검증 도구가 알 수 없음을 반환하는 주소도 유효 또는 무효로 돌아옵니다.',
  ],
  gatewaysTitle: '감지하는 게이트웨이',
  gatewaysNote:
    '감지는 도메인의 MX 레코드로 자동으로 이루어집니다. 리스트를 실행하기 전에 리스트에 대해 따로 알려 주실 내용은 없습니다.',
  proofpointTitle: 'Proofpoint',
  proofpointPara:
    'Proofpoint는 대기업 도메인에 가장 널리 쓰이는 보안 이메일 게이트웨이 중 하나입니다. 대기업을 상대로 영업한다면 리스트의 상당 부분이 Proofpoint 뒤에 있습니다. Proofpoint는 실제 메일 서버 앞에서 들어오는 메일의 위협을 걸러냅니다. 그래서 Proofpoint 도메인에 일반 검사를 하면 쓸 수 있는 답이 나오지 않는 경우가 많습니다. Giggal.ai는 도메인의 MX 레코드로 Proofpoint를 식별하고 주소를 게이트웨이 경로로 보냅니다. 그래서 알 수 없음 대신 그 뒤에 있는 메일함에 대한 실제 전송 가능 또는 전송 불가 결과를 받습니다.',
  mimecastTitle: 'Mimecast',
  mimecastPara:
    'Mimecast는 도메인에 어떤 메일함이 있는지 아무도 알아낼 수 없도록 만들어졌습니다. 조회를 받으면 주소가 있다고도 없다고도 하지 않고, 일부러 모호한 응답을 보냅니다. Giggal.ai는 이 동작을 알아보고 그런 응답이 나오지 않도록 하여 발신자 평판을 지킵니다. 메일함이 있는지는 다른 방법으로 검사하므로, 알 수 없음 대신 실제 이메일 검증 결과가 나옵니다.',
  mimecastLink: 'Mimecast 검증 방식',
  barracudaTitle: 'Barracuda',
  barracudaPara:
    'Barracuda는 중견 기업 도메인에 흔하며, 다른 게이트웨이처럼 실제 메일 서버 앞에서 들어오는 메일을 걸러냅니다. 일반 검증 도구로 Barracuda 도메인을 검사하면 보통 메일함에 대한 분명한 답을 얻지 못합니다. 응답하는 쪽이 게이트웨이이기 때문입니다. Giggal.ai는 도메인의 MX 레코드로 Barracuda를 감지하고 주소를 게이트웨이 검증 경로로 보냅니다. 연락처가 실제인지 추측하게 만드는 위험이나 알 수 없음 표시가 아니라, 메일함 자체에 대한 전송 가능 또는 전송 불가 결과를 받습니다.',
  resultsTitle: '받게 되는 결과',
  resultsHeadResult: '결과',
  resultsHeadMeaning: '의미',
  results: [
    { label: '전송 가능', meaning: '메일함이 있고 메일을 받습니다' },
    { label: '전송 불가', meaning: '메일함이 없습니다' },
    { label: '위험', meaning: '주소는 있지만 전송에 위험이 있습니다' },
    { label: '알 수 없음', meaning: '주소를 검증하지 못했습니다' },
  ],
  refundNote:
    '주소를 검증하지 못하면 크레딧이 자동으로 환불됩니다. 완료된 검증에 대해서만 비용을 냅니다.',
  catchAllNote:
    '캐치올(catch-all) 도메인은 관련은 있지만 다른 문제입니다. 리스트에 캐치올 도메인도 있다면 [캐치올 이메일과 위험 이메일 검증](/catch-all-verification)도 이용하실 수 있습니다.',
  pricingTitle: '검증한 만큼만 결제',
  pricingStandardTag: '일반 및 SEG',
  pricingStandardPrice: '크레딧 1개',
  pricingStandardUnit: '이메일 검증 1건당',
  pricingCatchAllTag: '캐치올',
  pricingCatchAllPrice: '크레딧 1개',
  pricingCatchAllUnit: '캐치올 이메일 1개당',
  pricingNote:
    '월 요금과 최소 사용량이 없고, 크레딧은 유효기간이 없습니다. 무료 크레딧 1,000개로 시작하며, 신용카드는 필요 없습니다. 전체 [요금과 크레딧](/pricing)을 확인하십시오.',
  faqTitle: '자주 묻는 질문',
  faqs: [
    {
      q: '보안 이메일 게이트웨이가 있으면 주소가 무효라는 뜻입니까?',
      a: '아니요. 게이트웨이는 필터링 계층이며, 그 뒤에 있는 메일함에 대한 신호가 아닙니다. Proofpoint나 Mimecast 뒤에도 유효하고 활성 상태인 주소가 많습니다. 게이트웨이 때문에 검사하기 어려울 뿐입니다.',
    },
    {
      q: '다른 검증 도구가 이런 주소에 알 수 없음을 반환하는 이유는 무엇입니까?',
      a: '대부분의 검증 도구는 메일 서버에 직접 연결해 메일함이 있는지 묻습니다. 게이트웨이 뒤에서는 게이트웨이가 이 질문을 가로채 대신 답합니다. 게이트웨이는 쓸모 있는 정보를 알려 주지 않도록 만들어졌습니다. 답이 없으니 검증 도구는 보고할 내용이 없습니다.',
    },
    {
      q: 'Giggal.ai는 어떤 게이트웨이를 처리합니까?',
      a: 'Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet, Forcepoint를 포함해 15종입니다. 감지는 도메인의 MX 레코드로 자동으로 이루어집니다.',
    },
    {
      q: '업로드 전에 SEG로 보호되는 주소를 분리해야 합니까?',
      a: '아니요. 리스트를 그대로 업로드하십시오. 게이트웨이 뒤의 도메인은 작업 중에 자동으로 식별되어 처리됩니다.',
    },
    {
      q: '게이트웨이 뒤의 주소를 검증하면 추가 비용이 듭니까?',
      a: '아니요. 도메인이 보안 이메일 게이트웨이 뒤에 있든, 캐치올 도메인이든, 일반 메일함이든 모든 이메일 검증은 똑같이 크레딧 1개입니다.',
    },
    {
      q: '그래도 주소를 검증하지 못하면 어떻게 됩니까?',
      a: '주소는 알 수 없음으로 돌아오고, 크레딧은 자동으로 환불됩니다.',
    },
  ],
  ctaHeadline: '리스트를 실행하고 차이를 확인하십시오',
}

const tr: SegStrings = {
  metaTitle: 'SEG arkasındaki mail adreslerini doğrulama | Giggal.ai',
  ogTitle: 'SEG arkasındaki mail adreslerini doğrulama',
  description: 'Proofpoint, Mimecast ve Barracuda çoğu aracın mail kontrolünü engeller. Giggal.ai 15 güvenli e-posta ağ geçidinin arkasında geçerli ya da geçersiz sonuç verir.',
  ogLocale: 'tr_TR',
  ogAlt: 'Giggal.ai e-posta doğrulama',
  crumb: 'SEG mail doğrulama',
  h1Lead: 'SEG ağ geçitleriyle korunan',
  h1Accent: 'mail adreslerini doğrulayın',
  heroIntro: 'Güvenli e-posta ağ geçitleri (SEG) bir şirketin gerçek e-posta sunucusunun önünde durur ve çoğu doğrulama aracının dayandığı kontrolleri reddeder. Giggal.ai başka bir yol kullanır ve bilinmiyor yerine gerçek bir mail doğrulama sonucu, yani geçerli ya da geçersiz sonucunu döndürür.',
  heroCta: '1.000 krediyle ücretsiz başlayın',
  heroPricing: 'Fiyatları görün',
  heroNote: 'Kredi kartı gerekmez. Kredilerin süresi dolmaz.',
  whatTitle: 'Güvenli e-posta ağ geçidi nedir?',
  whatParas: [
    'Güvenli e-posta ağ geçidi, bir şirketin gerçek e-posta sunucusunun önünde duran bir filtreleme katmanıdır. Alan adına giden her mesaj önce ağ geçidinden geçer. Şirketler ağ geçidini spam ve zararlı yazılımı engellemek, oltalamayı (phishing) durdurmak ve herhangi bir şey posta kutusuna ulaşmadan önce veri kaybı önleme kurallarını uygulamak için kullanır. Bu alandaki satıcılar arasında Proofpoint, Mimecast, Barracuda ve Cisco IronPort vardır.',
    'Ağ geçidi e-posta sunucusunun önünde durduğu için e-posta sunucusu adına da yanıt verir. Bir posta kutusunun var olup olmadığını kontrol etmeye çalışan her şey, e-posta doğrulama araçları da dahil, hangi posta kutularının var olduğunu bilen sistemle değil, ağ geçidiyle konuşur.',
  ],
  whyTitle: 'Ağ geçitleri e-posta doğrulamayı neden bozar',
  whyParas: [
    'Standart e-posta doğrulama, belirli bir posta kutusunun var olup olmadığını kontrol eder. Normal bir alan adında sunucu yanıt verir ve doğrulama aracı geçerli ya da geçersiz sonucunu kaydeder.',
    'Ağ geçidinin arkasında bu soru e-posta sunucusuna hiç ulaşmaz. Ağ geçidi soruyu araya girerek alır ve sunucu adına yanıt verir. Ağ geçitleri, üçüncü tarafların bir şirketin kullanıcı listesini çıkarmasını önlemek için tasarlanmıştır. Bu yüzden ağ geçidi bilerek belirsiz bir yanıt verir, var olsun olmasın her adresi kabul eder ya da bağlantıyı doğrudan reddeder.',
    'Doğrulama aracının elinde e-posta doğrulama sonucuna dönüştürebileceği bir şey kalmaz. Adresi bilinmiyor veya riskli olarak bildirir ve kişi sonuçsuz kalır. Alan adlarının büyük bir kısmının ağ geçidi arkasında olduğu bir kurumsal listede bu, listenizin güvenle kullanamayacağınız gerçek bir bölümüdür.',
  ],
  ipTitle: 'IP itibarı sorunu',
  ipPara: "Tekrar denemek durumu kötüleştirir. Kontrolü reddeden bir uç noktayı tekrar tekrar sorgulamak, gönderen IP'nin işaretlenmesine yol açar. Bu olduğunda sonuçlar yalnızca ağ geçidi alan adlarında değil, o doğrulama aracının kontrol ettiği her alan adında kötüleşir. Bu yüzden Giggal.ai, böyle davranan ağ geçitlerinde engele rağmen tekrar denemek yerine başka doğrulama yöntemleri kullanır.",
  howTitle: 'Giggal.ai ağ geçidi arkasındaki adresleri nasıl doğrular',
  howParas: [
    'Giggal.ai, posta kutusunun önünde gerçekte ne olduğunu anlamak için önce alan adının MX kayıtlarını okur. Böylece alan adının doğrudan mı yanıt verdiğini, yoksa bir ağ geçidinin arkasında mı olduğunu öğreniriz.',
    'Ağ geçidi arkasındaki alan adları, doğrudan yanıt veren alan adlarından farklı bir doğrulama yoluna yönlendirilir. Bir ağ geçidi standart posta kutusu kontrollerini engellediğinde e-posta doğrulama sonucu o yanıta hiç bağlı değildir. Adresi farklı bir sinyalle doğrularız. Böylece standart bir kontrolün hiçbir şey döndürmeyeceği durumda da adres geçerli ya da geçersiz olarak döner.',
    'Ağ geçitleri, bir posta kutusunun var olup olmadığını gizlemek için tasarlanmış yanıtlar da döndürür. Bunlar doğrulama aracını yanıltmak için verilen, bilerek belirsiz bırakılmış yanıtlardır. Giggal.ai bunları tanır ve hiçbirini gerçek bir sonuç sanmaz. Gelen tek şey anlamsız bir yanıtsa bunu tahmin yürütmek yerine yanıt yok olarak kabul ederiz. Böylece çoğu doğrulama aracının bilinmiyor döndürdüğü yerde adres geçerli ya da geçersiz olarak döner.',
  ],
  gatewaysTitle: 'Tespit ettiğimiz ağ geçitleri',
  gatewaysNote: 'Tespit, alan adının MX kayıtlarından otomatik olarak yapılır. Bir listeyi çalıştırmadan önce bize liste hakkında bilgi vermeniz gerekmez.',
  proofpointTitle: 'Proofpoint',
  proofpointPara: "Proofpoint, kurumsal alan adlarında en yaygın kullanılan güvenli e-posta ağ geçitlerinden biridir. Büyük şirketlere satış yapıyorsanız listenizin önemli bir kısmı Proofpoint'in arkasındadır. Proofpoint gerçek e-posta sunucusunun önünde durur ve gelen e-postaları tehditlere karşı filtreler. Bir Proofpoint alan adına yapılan standart kontrolün çoğu zaman kullanılabilir bir yanıt olmadan dönmesinin nedeni de budur. Giggal.ai, Proofpoint'i alan adının MX kayıtlarından tanır ve adresi ağ geçidi yoluna yönlendirir. Böylece bilinmiyor yerine arkasındaki posta kutusu için gerçek bir teslim edilebilir veya teslim edilemez sonucu alırsınız.",
  mimecastTitle: 'Mimecast',
  mimecastPara: 'Mimecast, bir alan adında hangi posta kutularının var olduğunun öğrenilmesini engellemek için tasarlanmıştır. Sorgulara adresi doğrulamak veya reddetmek yerine bilerek belirsiz bir yanıtla karşılık verir. Giggal.ai bu davranışı tanır ve bu yanıtı tetiklemekten kaçınır. Bu da gönderen itibarını korur. Posta kutusunun var olup olmadığını başka bir yolla kontrol eder ve bilinmiyor yerine gerçek bir e-posta doğrulama sonucu döndürür.',
  mimecastLink: 'Mimecast doğrulama nasıl çalışır',
  barracudaTitle: 'Barracuda',
  barracudaPara: "Barracuda orta ölçekli şirketlerin alan adlarında yaygındır. Diğer ağ geçitleri gibi gerçek e-posta sunucusunun önünde durur ve gelen e-postaları filtreler. Bir Barracuda alan adını kontrol eden standart bir doğrulama aracı genellikle posta kutusu hakkında net bir yanıt alamaz, çünkü yanıt veren ağ geçididir. Giggal.ai, Barracuda'yı alan adının MX kayıtlarından tespit eder ve adresi ağ geçidi doğrulama yoluna gönderir. Kişinin gerçek olup olmadığını tahmin etmenizi gerektiren riskli veya bilinmiyor etiketi yerine posta kutusunun kendisi için teslim edilebilir veya teslim edilemez sonucu alırsınız.",
  resultsTitle: 'Ne sonuç alırsınız',
  resultsHeadResult: 'Sonuç',
  resultsHeadMeaning: 'Anlamı',
  results: [
    {
      label: 'Teslim edilebilir',
      meaning: 'Posta kutusu var ve e-posta kabul eder',
    },
    {
      label: 'Teslim edilemez',
      meaning: 'Posta kutusu yok',
    },
    {
      label: 'Riskli',
      meaning: 'Adres var ama teslim edilebilirlik riski taşır',
    },
    {
      label: 'Bilinmiyor',
      meaning: 'Adresi doğrulayamadık',
    },
  ],
  refundNote: 'Bir adresi doğrulayamadığımızda kredi otomatik olarak iade edilir. Yalnızca tamamladığımız doğrulamalar için ödeme yaparsınız.',
  catchAllNote: 'Catch-all alan adı benzer ama farklı bir sorundur. Listenizde bunlar da varsa [catch-all ve riskli e-postaları da doğrularız](/catch-all-verification).',
  pricingTitle: 'Yalnızca doğruladığınız kadar ödeyin',
  pricingStandardTag: 'Standart ve SEG',
  pricingStandardPrice: '1 kredi',
  pricingStandardUnit: 'e-posta doğrulama başına',
  pricingCatchAllTag: 'Catch-all',
  pricingCatchAllPrice: '1 kredi',
  pricingCatchAllUnit: 'catch-all e-posta başına',
  pricingNote: 'Aylık ücret yok, minimum tutar yok ve kredilerin süresi dolmaz. Kredi kartı gerekmeden 1.000 ücretsiz krediyle başlayın. Tüm [fiyatları ve kredileri](/pricing) görün.',
  faqTitle: 'Sık sorulan sorular',
  faqs: [
    {
      q: 'Güvenli e-posta ağ geçidi, mail adresinin geçersiz olduğu anlamına mı gelir?',
      a: 'Hayır. Ağ geçidi bir filtreleme katmanıdır, arkasındaki posta kutusu hakkında bir işaret değildir. Proofpoint veya Mimecast arkasında çok sayıda geçerli ve etkin adres vardır. Ağ geçidi yalnızca bu adreslerin kontrolünü zorlaştırır.',
    },
    {
      q: 'Diğer doğrulama araçları bu mail adreslerinde neden bilinmiyor sonucu verir?',
      a: 'Çoğu doğrulama aracı posta kutusunun var olup olmadığını sormak için doğrudan e-posta sunucusuna bağlanır. Ağ geçidinin arkasında bu soruyu ağ geçidi alır ve yanıtlar. Ağ geçidi de işe yarar bir bilgi vermemek için tasarlanmıştır. Yanıt olmadan doğrulama aracının bildirebileceği bir şey kalmaz.',
    },
    {
      q: 'Giggal.ai hangi ağ geçitlerinin arkasında mail doğrulayabilir?',
      a: 'On beş ağ geçidinin arkasında doğrulama yapar. Bunlar arasında Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet ve Forcepoint vardır. Tespit, alan adının MX kayıtlarından otomatik olarak yapılır.',
    },
    {
      q: 'Yüklemeden önce SEG korumalı adresleri ayırmam gerekir mi?',
      a: 'Hayır. Listeyi olduğu gibi yükleyin. Ağ geçidi arkasındaki alan adları çalıştırma sırasında otomatik olarak belirlenir ve doğru yola yönlendirilir.',
    },
    {
      q: 'Ağ geçidi arkasında mail doğrulamak ek ücretli mi?',
      a: 'Hayır. Alan adı bir güvenli e-posta ağ geçidinin arkasında olsun, catch-all olsun veya standart bir posta kutusu olsun, her e-posta doğrulaması sabit 1 kredidir.',
    },
    {
      q: 'Bir adresi yine de doğrulayamazsanız ne olur?',
      a: 'Adres bilinmiyor olarak döner ve kredi otomatik olarak iade edilir.',
    },
  ],
  ctaHeadline: 'Bir liste çalıştırın ve farkı görün',
}

const fr: SegStrings = {
  metaTitle: 'Vérifier les emails protégés par une passerelle SEG | Giggal.ai',
  ogTitle: 'Vérifier les emails protégés par une passerelle SEG',
  description:
    'Proofpoint, Mimecast, Barracuda et d’autres passerelles bloquent les contrôles habituels. Giggal.ai renvoie valide ou invalide derrière 15 passerelles.',
  ogLocale: 'fr_FR',
  ogAlt: 'Vérification d’email Giggal.ai',
  crumb: 'Vérification d’email SEG',
  h1Lead: 'Vérifiez les emails protégés par',
  h1Accent: 'une passerelle SEG',
  heroIntro:
    'Les passerelles de messagerie sécurisées se placent devant le vrai serveur de messagerie d’une entreprise et refusent les contrôles dont dépendent la plupart des vérificateurs. Giggal.ai les contourne et renvoie un vrai résultat de vérification d’email, valide ou invalide, au lieu d’un Inconnu.',
  heroCta: 'Commencer gratuitement avec 1 000 crédits',
  heroPricing: 'Voir les tarifs',
  heroNote: 'Aucune carte requise. Les crédits n’expirent jamais.',
  whatTitle: 'Qu’est-ce qu’une passerelle de messagerie sécurisée ?',
  whatParas: [
    'Une passerelle de messagerie sécurisée (secure email gateway, ou SEG) est une couche de filtrage placée devant le vrai serveur de messagerie d’une entreprise. Chaque message destiné au domaine passe d’abord par la passerelle. Les entreprises l’utilisent pour bloquer le spam et les logiciels malveillants, pour arrêter le phishing et pour appliquer des règles de prévention des fuites de données avant que rien n’arrive dans une boîte mail. Parmi les éditeurs de ce secteur figurent Proofpoint, Mimecast, Barracuda et Cisco IronPort.',
    'Comme la passerelle se trouve devant le serveur de messagerie, elle répond aussi à sa place. Tout ce qui tente de vérifier si une boîte mail existe, y compris un vérificateur d’email, parle à la passerelle et non au système qui sait quelles boîtes mail existent.',
  ],
  whyTitle: 'Pourquoi les passerelles cassent la vérification d’email',
  whyParas: [
    'La vérification d’email standard contrôle si une boîte mail donnée existe. Sur un domaine normal, le serveur répond, et le vérificateur enregistre un résultat valide ou invalide.',
    'Derrière une passerelle, la question n’arrive jamais au serveur de messagerie. La passerelle l’intercepte et répond à la place du serveur. Les passerelles sont conçues pour empêcher des tiers de dresser la liste des utilisateurs d’une entreprise. La passerelle donne donc une réponse volontairement vague, accepte toutes les adresses qu’elles existent ou non, ou refuse simplement la connexion.',
    'Le vérificateur n’obtient rien qu’il puisse transformer en résultat de vérification d’email. Il marque l’adresse comme Inconnu ou Risqué, et le contact reste sans réponse. Sur une liste B2B où une grande partie des domaines se trouve derrière une passerelle, c’est une vraie partie de votre liste que vous ne pouvez pas utiliser en confiance.',
  ],
  ipTitle: 'Le problème de la réputation IP',
  ipPara:
    'Réessayer aggrave la situation. Interroger plusieurs fois un serveur qui refuse le contrôle fait signaler l’IP d’envoi. Ensuite, les résultats se dégradent sur tous les domaines que ce vérificateur contrôle, pas seulement sur les domaines protégés par une passerelle. C’est pourquoi Giggal.ai utilise d’autres méthodes de vérification sur les passerelles qui se comportent ainsi, au lieu de réessayer jusqu’au blocage.',
  howTitle: 'Comment Giggal.ai vérifie derrière une passerelle',
  howParas: [
    'Giggal.ai lit d’abord les enregistrements MX du domaine pour savoir ce qui se trouve devant la boîte mail. Cela indique si le domaine répond directement ou s’il se trouve derrière une passerelle.',
    'Les domaines derrière une passerelle suivent un autre parcours de vérification que les domaines qui répondent directement. Quand une passerelle bloque les contrôles standard de boîte mail, le résultat de vérification d’email ne dépend pas du tout de cette réponse. Nous vérifions l’adresse avec un autre signal. Elle revient donc valide ou invalide, alors qu’un contrôle standard ne renverrait rien.',
    'Les passerelles renvoient aussi des réponses conçues pour cacher l’existence d’une boîte mail, des réponses volontairement vagues destinées à tromper un vérificateur. Giggal.ai les reconnaît et ne les prend pas pour un vrai résultat. Quand seul ce bruit revient, nous le traitons comme une absence de réponse au lieu de deviner. L’adresse revient donc valide ou invalide, là où la plupart des vérificateurs renvoient Inconnu.',
  ],
  gatewaysTitle: 'Les passerelles que nous détectons',
  gatewaysNote:
    'La détection se fait automatiquement à partir des enregistrements MX du domaine. Vous n’avez rien à nous indiquer sur une liste avant de la lancer.',
  proofpointTitle: 'Proofpoint',
  proofpointPara:
    'Proofpoint est l’une des passerelles de messagerie sécurisées les plus déployées sur les domaines d’entreprise. Si vous vendez à de grandes entreprises, une part importante de votre liste se trouve derrière elle. Proofpoint se place devant le vrai serveur de messagerie et filtre le courrier entrant pour bloquer les menaces. C’est aussi pourquoi un contrôle standard sur un domaine Proofpoint revient souvent sans réponse utilisable. Giggal.ai identifie Proofpoint à partir des enregistrements MX du domaine et fait suivre à l’adresse le parcours prévu pour les passerelles. Au lieu d’un Inconnu, vous obtenez un vrai résultat délivrable ou non délivrable sur la boîte mail qui se trouve derrière.',
  mimecastTitle: 'Mimecast',
  mimecastPara:
    'Mimecast est conçu pour empêcher quiconque de savoir quelles boîtes mail existent sur un domaine. Il répond aux requêtes par une réponse volontairement vague au lieu de confirmer ou de nier l’adresse. Giggal.ai reconnaît ce comportement et évite de déclencher cette réponse, ce qui protège la réputation d’expéditeur. Il vérifie autrement si la boîte mail existe, et renvoie un vrai résultat de vérification d’email au lieu d’un Inconnu.',
  mimecastLink: 'comment fonctionne la vérification Mimecast',
  barracudaTitle: 'Barracuda',
  barracudaPara:
    'Barracuda est courant sur les domaines des entreprises de taille moyenne. Comme les autres passerelles, il se place devant le vrai serveur de messagerie et filtre le courrier entrant. Un vérificateur standard qui contrôle un domaine Barracuda n’obtient en général pas de réponse claire sur la boîte mail, car c’est la passerelle qui répond. Giggal.ai détecte Barracuda à partir des enregistrements MX du domaine et fait suivre à l’adresse le parcours de vérification prévu pour les passerelles. Vous obtenez un résultat délivrable ou non délivrable sur la boîte mail elle-même, et non une étiquette Risqué ou Inconnu qui vous laisse deviner si le contact est réel.',
  resultsTitle: 'Ce que vous recevez',
  resultsHeadResult: 'Résultat',
  resultsHeadMeaning: 'Signification',
  results: [
    { label: 'Délivrable', meaning: 'La boîte mail existe et acceptera le courrier' },
    { label: 'Non délivrable', meaning: 'La boîte mail n’existe pas' },
    { label: 'Risqué', meaning: 'L’adresse existe mais présente un risque de délivrabilité' },
    { label: 'Inconnu', meaning: 'Nous n’avons pas pu vérifier l’adresse' },
  ],
  refundNote:
    'Quand nous ne pouvons pas vérifier une adresse, le crédit est remboursé automatiquement. Vous ne payez que les vérifications que nous terminons.',
  catchAllNote:
    'Un domaine catch-all est un problème proche mais différent. Si votre liste en contient aussi, nous savons également [vérifier les emails catch-all et risqués](/catch-all-verification).',
  pricingTitle: 'Payez seulement ce que vous vérifiez',
  pricingStandardTag: 'Standard et SEG',
  pricingStandardPrice: '1 crédit',
  pricingStandardUnit: 'par vérification d’email',
  pricingCatchAllTag: 'Catch-all',
  pricingCatchAllPrice: '1 crédit',
  pricingCatchAllUnit: 'par email catch-all',
  pricingNote:
    'Pas d’abonnement mensuel, pas de minimum, et les crédits n’expirent jamais. Commencez avec 1 000 crédits gratuits, sans carte. Consultez les [tarifs et crédits](/pricing).',
  faqTitle: 'Questions fréquentes',
  faqs: [
    {
      q: 'Une passerelle de messagerie sécurisée signifie-t-elle que l’adresse est invalide ?',
      a: 'Non. Une passerelle est une couche de filtrage, pas un signal sur la boîte mail qui se trouve derrière. Beaucoup d’adresses valides et actives se trouvent derrière Proofpoint ou Mimecast. La passerelle les rend seulement plus difficiles à vérifier.',
    },
    {
      q: 'Pourquoi les autres vérificateurs renvoient-ils Inconnu sur ces adresses ?',
      a: 'La plupart des vérificateurs se connectent directement au serveur de messagerie pour demander si la boîte mail existe. Derrière une passerelle, cette question est interceptée, et c’est la passerelle qui répond. Elle est conçue pour ne rien vous dire d’utile. Sans réponse, le vérificateur n’a rien à indiquer.',
    },
    {
      q: 'Quelles passerelles Giggal.ai prend-il en charge ?',
      a: 'Quinze, dont Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet et Forcepoint. La détection est automatique à partir des enregistrements MX du domaine.',
    },
    {
      q: 'Dois-je séparer les adresses protégées par une SEG avant l’import ?',
      a: 'Non. Importez la liste telle quelle. Les domaines derrière une passerelle sont identifiés et traités automatiquement pendant la vérification.',
    },
    {
      q: 'La vérification derrière une passerelle coûte-t-elle plus cher ?',
      a: 'Non. Chaque vérification d’email coûte 1 crédit, que le domaine soit derrière une passerelle de messagerie sécurisée, qu’il soit catch-all ou qu’il s’agisse d’une boîte mail standard.',
    },
    {
      q: 'Que se passe-t-il si vous ne pouvez toujours pas vérifier une adresse ?',
      a: 'L’adresse revient avec le résultat Inconnu, et le crédit est remboursé automatiquement.',
    },
  ],
  ctaHeadline: 'Lancez une liste et voyez la différence',
}

// Dutch. Terms: SEO-Plan/i18n-batch1-nl-pl-terminology.md (je, secure email gateway
// explained once as "beveiligingsgateway voor e-mail", bezorgbaar/niet bezorgbaar).
const nl: SegStrings = {
  metaTitle: 'E-mails verifiëren achter een secure email gateway | Giggal.ai',
  ogTitle: 'E-mails verifiëren achter een secure email gateway',
  description:
    'Proofpoint, Mimecast, Barracuda en andere gateways blokkeren de controles die de meeste tools gebruiken. Giggal.ai geeft geldig of ongeldig achter 15 gateways.',
  ogLocale: 'nl_NL',
  ogAlt: 'Giggal.ai e-mailverificatie',
  crumb: 'SEG-verificatie',
  h1Lead: 'E-mails verifiëren die beschermd zijn door',
  h1Accent: 'SEG-gateways',
  heroIntro:
    'Een secure email gateway staat vóór de echte mailserver van een bedrijf en weigert de controles waar de meeste verificatietools op rekenen. Giggal.ai gaat om de gateway heen en geeft een echt resultaat van de e-mailverificatie terug, geldig of ongeldig, in plaats van Onbekend.',
  heroCta: 'Gratis beginnen met 1.000 credits',
  heroPricing: 'Prijzen bekijken',
  heroNote: 'Geen creditcard nodig. Credits verlopen nooit.',
  whatTitle: 'Wat is een secure email gateway?',
  whatParas: [
    'Een secure email gateway (SEG), in het Nederlands een beveiligingsgateway voor e-mail, is een filterlaag vóór de echte mailserver van een bedrijf. Elk bericht voor het domein gaat eerst door de gateway. Bedrijven gebruiken er een om spam en malware te blokkeren, phishing te stoppen en regels tegen datalekken toe te passen voordat iets een mailbox bereikt. Leveranciers zijn onder meer Proofpoint, Mimecast, Barracuda en Cisco IronPort.',
    'Omdat de gateway vóór de mailserver staat, antwoordt hij ook namens de mailserver. Alles wat probeert te controleren of een mailbox bestaat, ook een verificatietool, praat dan met de gateway, en niet met het systeem dat echt weet welke mailboxen bestaan.',
  ],
  whyTitle: 'Waarom gateways e-mailverificatie blokkeren',
  whyParas: [
    'Een standaard e-mailverificatie controleert of een mailbox bestaat. Op een gewoon domein antwoordt de server, en de tool slaat geldig of ongeldig op.',
    'Achter een gateway komt die vraag nooit bij de mailserver aan. De gateway onderschept de vraag en antwoordt namens de server. Gateways zijn gemaakt om te voorkomen dat anderen de gebruikers van een bedrijf in kaart brengen. Daarom geeft de gateway met opzet een vaag antwoord, accepteert hij elk adres of het nu bestaat of niet, of weigert hij de verbinding.',
    'De tool heeft dan niets waar hij een resultaat van kan maken. Hij meldt het adres als Onbekend of Riskant, en het contact blijft zonder antwoord. Op een B2B-lijst waar veel domeinen achter een gateway staan, is dat een flink deel van je lijst dat je niet met zekerheid kunt gebruiken.',
  ],
  ipTitle: 'Het probleem met de IP-reputatie',
  ipPara:
    'Opnieuw proberen maakt het erger. Wie steeds een server bevraagt die de controle weigert, krijgt een markering op het verzendende IP-adres. Daarna worden de resultaten slechter voor elk domein dat die tool controleert, niet alleen voor de gateway-domeinen. Daarom gebruikt Giggal.ai andere verificatiemethoden bij gateways die zich zo gedragen, in plaats van steeds opnieuw te proberen tot er een blokkade volgt.',
  howTitle: 'Hoe Giggal.ai achter een gateway verifieert',
  howParas: [
    'Giggal.ai leest eerst de MX-records van het domein om te zien wat er echt vóór de mailbox staat. Zo weten we of het domein zelf antwoordt of achter een gateway staat.',
    'Domeinen achter een gateway volgen een andere verificatieroute dan domeinen die zelf antwoorden. Als een gateway de standaardcontrole van de mailbox blokkeert, hangt het resultaat helemaal niet van dat antwoord af. We verifiëren het adres via een ander signaal. Zo komt het toch terug als geldig of ongeldig, ook als een standaardcontrole niets zou opleveren.',
    'Gateways geven ook antwoorden die moeten verbergen of een mailbox bestaat. Dat zijn met opzet vage antwoorden die een verificatietool moeten misleiden. Giggal.ai herkent ze en ziet ze niet aan voor een echt resultaat. Als er alleen ruis terugkomt, behandelen we dat als geen antwoord en gokken we niet. Zo komt het adres terug als geldig of ongeldig, waar de meeste tools Onbekend teruggeven.',
  ],
  gatewaysTitle: 'Gateways die we herkennen',
  gatewaysNote:
    'De herkenning gebeurt automatisch op basis van de MX-records van het domein. Je hoeft ons niets over een lijst te vertellen voordat je hem controleert.',
  proofpointTitle: 'Proofpoint',
  proofpointPara:
    'Proofpoint is een van de meest gebruikte secure email gateways op domeinen van grote bedrijven. Verkoop je aan grote bedrijven, dan staat een flink deel van je lijst erachter. Proofpoint staat vóór de echte mailserver en filtert inkomende mail op dreigingen. Daarom geeft een standaardcontrole op een Proofpoint-domein meestal geen bruikbaar antwoord. Giggal.ai herkent Proofpoint aan de MX-records van het domein en stuurt het adres via de gateway-route. In plaats van Onbekend krijg je een echt resultaat, bezorgbaar of niet bezorgbaar, voor de mailbox erachter.',
  mimecastTitle: 'Mimecast',
  mimecastPara:
    'Mimecast is gemaakt om te voorkomen dat iemand uitzoekt welke mailboxen op een domein bestaan. Het geeft met opzet een vaag antwoord en bevestigt of ontkent het adres niet. Giggal.ai herkent dat gedrag en vermijdt dat dit antwoord wordt uitgelokt, wat je afzenderreputatie beschermt. Het controleert op een andere manier of de mailbox bestaat. Zo krijg je een echt resultaat van de e-mailverificatie in plaats van Onbekend.',
  mimecastLink: 'hoe Mimecast-verificatie werkt',
  barracudaTitle: 'Barracuda',
  barracudaPara:
    'Barracuda komt veel voor op domeinen van middelgrote bedrijven. Net als andere gateways staat het vóór de echte mailserver en filtert het inkomende mail. Een standaardtool die een Barracuda-domein controleert, krijgt meestal geen duidelijk antwoord over de mailbox, want de gateway is degene die antwoordt. Giggal.ai herkent Barracuda aan de MX-records van het domein en stuurt het adres via de verificatieroute voor gateways. Je krijgt een resultaat voor de mailbox zelf, bezorgbaar of niet bezorgbaar. Geen label Riskant of Onbekend waarbij je moet raden of het contact echt bestaat.',
  resultsTitle: 'Wat je terugkrijgt',
  resultsHeadResult: 'Resultaat',
  resultsHeadMeaning: 'Betekenis',
  results: [
    { label: 'Bezorgbaar', meaning: 'De mailbox bestaat en accepteert mail' },
    { label: 'Niet bezorgbaar', meaning: 'De mailbox bestaat niet' },
    { label: 'Riskant', meaning: 'Het adres bestaat, maar de bezorging brengt risico mee' },
    { label: 'Onbekend', meaning: 'We konden het adres niet verifiëren' },
  ],
  refundNote:
    'Als we een adres niet kunnen verifiëren, krijg je de credit automatisch terug. Je betaalt alleen voor verificaties die we afronden.',
  catchAllNote:
    'Een catch-all-domein is een verwant maar ander probleem. Staan die ook op je lijst, dan kunnen we ook [catch-all- en riskante e-mails verifiëren](/catch-all-verification).',
  pricingTitle: 'Je betaalt alleen voor wat je verifieert',
  pricingStandardTag: 'Standaard en SEG',
  pricingStandardPrice: '1 credit',
  pricingStandardUnit: 'per e-mailverificatie',
  pricingCatchAllTag: 'Catch-all',
  pricingCatchAllPrice: '1 credit',
  pricingCatchAllUnit: 'per catch-all-e-mail',
  pricingNote:
    'Geen maandkosten, geen minimum, en credits verlopen nooit. Begin met 1.000 gratis credits, zonder creditcard. Bekijk alle [prijzen en credits](/pricing).',
  faqTitle: 'Veelgestelde vragen',
  faqs: [
    {
      q: 'Betekent een secure email gateway dat het adres ongeldig is?',
      a: 'Nee. Een gateway is een filterlaag en zegt niets over de mailbox erachter. Veel geldige, actieve adressen staan achter Proofpoint of Mimecast. De gateway maakt ze alleen moeilijker te controleren.',
    },
    {
      q: 'Waarom geven andere tools Onbekend terug op deze adressen?',
      a: 'De meeste tools maken direct verbinding met de mailserver om te vragen of de mailbox bestaat. Achter een gateway wordt die vraag onderschept en beantwoordt de gateway hem. De gateway is juist gemaakt om niets bruikbaars te vertellen. Zonder antwoord heeft de tool niets te melden.',
    },
    {
      q: 'Met welke gateways kan Giggal.ai overweg?',
      a: 'Met vijftien, waaronder Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet en Forcepoint. De herkenning gebeurt automatisch op basis van de MX-records van het domein.',
    },
    {
      q: 'Moet ik adressen achter een SEG apart zetten voordat ik upload?',
      a: 'Nee. Upload de lijst zoals hij is. Domeinen achter een gateway worden tijdens de controle automatisch herkend en via de juiste route gecontroleerd.',
    },
    {
      q: 'Kost verifiëren achter een gateway extra?',
      a: 'Nee. Elke e-mailverificatie kost vast 1 credit, of het domein nu achter een secure email gateway staat, een catch-all-domein is of een gewone mailbox heeft.',
    },
    {
      q: 'Wat gebeurt er als jullie een adres toch niet kunnen verifiëren?',
      a: 'Het adres komt terug als Onbekend en de credit wordt automatisch terugbetaald.',
    },
  ],
  ctaHeadline: 'Controleer een lijst en zie het verschil',
}

// Polish. Terms follow SEO-Plan/i18n-batch1-nl-pl-terminology.md: "secure email
// gateway (SEG)", explained once as "bramka bezpieczeństwa poczty", then
// "bramka". Result labels as on the Polish Mimecast page.
const pl: SegStrings = {
  metaTitle: 'Weryfikacja email za bramkami bezpieczeństwa (SEG) | Giggal.ai',
  ogTitle: 'Weryfikacja email za bramkami bezpieczeństwa (SEG)',
  description:
    'Proofpoint, Mimecast, Barracuda i inne bramki blokują testy większości weryfikatorów. Giggal.ai zwraca wynik prawidłowy albo nieprawidłowy za 15 bramkami SEG.',
  ogLocale: 'pl_PL',
  ogAlt: 'Giggal.ai, weryfikacja e-mail',
  crumb: 'Weryfikacja email za bramkami SEG',
  h1Lead: 'Weryfikuj adresy e-mail chronione przez',
  h1Accent: 'bramki SEG',
  heroIntro:
    'Bramki bezpieczeństwa poczty (secure email gateway, SEG) stoją przed prawdziwym serwerem pocztowym firmy i odrzucają testy, na których opiera się większość weryfikatorów. Giggal.ai sprawdza adres inną drogą i zwraca prawdziwy wynik weryfikacji e-mail, prawidłowy albo nieprawidłowy, zamiast wyniku nieznany.',
  heroCta: 'Zacznij za darmo z 1000 kredytów',
  heroPricing: 'Zobacz cennik',
  heroNote: 'Bez karty płatniczej. Kredyty nigdy nie wygasają.',
  whatTitle: 'Co to jest secure email gateway?',
  whatParas: [
    'Secure email gateway, czyli bramka bezpieczeństwa poczty, to warstwa filtrująca przed prawdziwym serwerem pocztowym firmy. Każda wiadomość kierowana do domeny najpierw przechodzi przez bramkę. Firmy używają jej, aby blokować spam i złośliwe oprogramowanie, zatrzymywać phishing i egzekwować zasady ochrony przed wyciekiem danych (DLP), zanim cokolwiek trafi do skrzynki. Dostawcy takich rozwiązań to między innymi Proofpoint, Mimecast, Barracuda i Cisco IronPort.',
    'Bramka stoi przed serwerem pocztowym, więc odpowiada też w jego imieniu. Wszystko, co próbuje sprawdzić, czy skrzynka istnieje, także weryfikator e-mail, łączy się z bramką, a nie z systemem, który naprawdę wie, jakie skrzynki istnieją.',
  ],
  whyTitle: 'Dlaczego bramki uniemożliwiają zwykłą weryfikację e-mail',
  whyParas: [
    'Standardowa weryfikacja e-mail sprawdza, czy dana skrzynka istnieje. W zwykłej domenie serwer odpowiada, a weryfikator zapisuje wynik prawidłowy albo nieprawidłowy.',
    'Za bramką to pytanie nigdy nie trafia do serwera pocztowego. Bramka je przechwytuje i odpowiada w imieniu serwera. Bramki są budowane po to, aby osoby z zewnątrz nie mogły poznać listy użytkowników firmy. Dlatego bramka odpowiada celowo niejasno, przyjmuje każdy adres bez względu na to, czy istnieje, albo od razu odrzuca połączenie.',
    'Weryfikator nie dostaje niczego, z czego mógłby zrobić wynik weryfikacji e-mail. Zgłasza adres jako nieznany albo ryzykowny, a kontakt zostaje bez wyniku. Na liście B2B, na której duża część domen stoi za bramką, to realna część listy, której nie możesz pewnie użyć.',
  ],
  ipTitle: 'Problem z reputacją adresu IP',
  ipPara:
    'Ponawianie prób pogarsza sytuację. Gdy wysyłający adres IP wielokrotnie odpytuje serwer, który odrzuca test, zostaje oznaczony. Wtedy wyniki pogarszają się dla każdej domeny, którą sprawdza dany weryfikator, a nie tylko dla domen za bramkami. Dlatego Giggal.ai na bramkach, które tak działają, używa innych metod weryfikacji, zamiast ponawiać próby aż do blokady.',
  howTitle: 'Jak Giggal.ai weryfikuje adresy za bramką',
  howParas: [
    'Giggal.ai najpierw odczytuje rekordy MX domeny, aby ustalić, co naprawdę stoi przed skrzynką. Dzięki temu wiemy, czy domena odpowiada bezpośrednio, czy stoi za bramką.',
    'Domeny za bramką trafiają na inną ścieżkę weryfikacji niż domeny, które odpowiadają bezpośrednio. Gdy bramka blokuje standardowe testy skrzynki, wynik weryfikacji e-mail w ogóle nie zależy od tej odpowiedzi. Weryfikujemy adres na podstawie innego sygnału. Dlatego wynik nadal brzmi prawidłowy albo nieprawidłowy tam, gdzie standardowy test nie zwróciłby nic.',
    'Bramki zwracają też odpowiedzi, które mają ukryć, czy skrzynka istnieje. To celowo niejasne odpowiedzi, które mają zmylić weryfikator. Giggal.ai je rozpoznaje i nie myli ich z prawdziwym wynikiem. Gdy jedyne, co wraca, to szum, traktujemy to jako brak odpowiedzi i nie zgadujemy. Adres dostaje więc wynik prawidłowy albo nieprawidłowy tam, gdzie większość weryfikatorów zwraca wynik nieznany.',
  ],
  gatewaysTitle: 'Bramki, które wykrywamy',
  gatewaysNote:
    'Wykrywanie działa automatycznie na podstawie rekordów MX domeny. Przed uruchomieniem nie musisz nam nic mówić o liście.',
  proofpointTitle: 'Proofpoint',
  proofpointPara:
    'Proofpoint to jedna z najczęściej używanych bramek bezpieczeństwa poczty w domenach dużych firm. Jeśli sprzedajesz dużym firmom, znacząca część twojej listy stoi za tą bramką. Proofpoint stoi przed prawdziwym serwerem pocztowym i sprawdza przychodzącą pocztę pod kątem zagrożeń. Dlatego standardowy test domeny Proofpoint zwykle nie daje użytecznej odpowiedzi. Giggal.ai rozpoznaje Proofpoint po rekordach MX domeny i kieruje adres na ścieżkę dla bramek. Zamiast wyniku nieznany dostajesz prawdziwy wynik dostarczalny albo niedostarczalny dla skrzynki za bramką.',
  mimecastTitle: 'Mimecast',
  mimecastPara:
    'Mimecast ma uniemożliwiać ustalenie, które skrzynki istnieją w domenie. Na zapytania odpowiada celowo niejasno, zamiast potwierdzić istnienie adresu albo mu zaprzeczyć. Giggal.ai rozpoznaje to zachowanie i nie wywołuje takiej odpowiedzi, co chroni reputację nadawcy. Sprawdza, czy skrzynka istnieje, w inny sposób, więc zwraca prawdziwy wynik weryfikacji e-mail zamiast wyniku nieznany.',
  mimecastLink: 'jak działa weryfikacja za bramką Mimecast',
  barracudaTitle: 'Barracuda',
  barracudaPara:
    'Barracuda jest popularna w domenach średnich firm. Jak inne bramki stoi przed prawdziwym serwerem pocztowym i filtruje przychodzącą pocztę. Standardowy weryfikator, który sprawdza domenę Barracuda, zwykle nie dostaje jasnej odpowiedzi o skrzynce, bo odpowiada bramka. Giggal.ai wykrywa Barracudę po rekordach MX domeny i kieruje adres na ścieżkę weryfikacji dla bramek. Dostajesz wynik dostarczalny albo niedostarczalny dla samej skrzynki, a nie etykietę „ryzykowny” albo „nieznany”, przy której musisz zgadywać, czy kontakt jest prawdziwy.',
  resultsTitle: 'Co dostajesz',
  resultsHeadResult: 'Wynik',
  resultsHeadMeaning: 'Znaczenie',
  results: [
    { label: 'Dostarczalny', meaning: 'Skrzynka istnieje i przyjmie pocztę' },
    { label: 'Niedostarczalny', meaning: 'Skrzynka nie istnieje' },
    { label: 'Ryzykowny', meaning: 'Adres istnieje, ale wiąże się z ryzykiem dla dostarczalności' },
    { label: 'Nieznany', meaning: 'Nie udało nam się zweryfikować adresu' },
  ],
  refundNote:
    'Gdy nie możemy zweryfikować adresu, kredyt jest zwracany automatycznie. Płacisz tylko za ukończone weryfikacje.',
  catchAllNote:
    'Domena catch-all to podobny, ale inny problem. Jeśli masz na liście także takie domeny, [weryfikujemy też adresy catch-all i ryzykowne](/catch-all-verification).',
  pricingTitle: 'Płacisz tylko za to, co weryfikujesz',
  pricingStandardTag: 'Standard i SEG',
  pricingStandardPrice: '1 kredyt',
  pricingStandardUnit: 'za weryfikację adresu e-mail',
  pricingCatchAllTag: 'Catch-all',
  pricingCatchAllPrice: '1 kredyt',
  pricingCatchAllUnit: 'za adres catch-all',
  pricingNote:
    'Bez opłat miesięcznych i bez minimów, a kredyty nigdy nie wygasają. Zacznij od 1000 darmowych kredytów, bez karty. Zobacz pełny [cennik i kredyty](/pricing).',
  faqTitle: 'Najczęstsze pytania',
  faqs: [
    {
      q: 'Czy secure email gateway oznacza, że adres jest nieprawidłowy?',
      a: 'Nie. Bramka to warstwa filtrująca, a nie sygnał o skrzynce za nią. Wiele prawidłowych, aktywnych adresów stoi za Proofpoint albo Mimecast. Bramka tylko utrudnia ich sprawdzenie.',
    },
    {
      q: 'Dlaczego inne weryfikatory zwracają wynik nieznany dla takich adresów?',
      a: 'Większość weryfikatorów łączy się bezpośrednio z serwerem pocztowym i pyta, czy skrzynka istnieje. Za bramką to pytanie przechwytuje bramka i sama na nie odpowiada, a jest zbudowana tak, aby nie zdradzać nic użytecznego. Bez odpowiedzi weryfikator nie ma czego zgłosić.',
    },
    {
      q: 'Które bramki obsługuje Giggal.ai?',
      a: 'Piętnaście, w tym Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet i Forcepoint. Wykrywanie działa automatycznie na podstawie rekordów MX domeny.',
    },
    {
      q: 'Czy muszę oddzielić adresy chronione przez SEG przed wgraniem listy?',
      a: 'Nie. Wgraj listę bez zmian. Domeny za bramką są rozpoznawane i kierowane automatycznie podczas przebiegu.',
    },
    {
      q: 'Czy weryfikacja za bramką kosztuje więcej?',
      a: 'Nie. Każda weryfikacja e-mail kosztuje stały 1 kredyt, bez względu na to, czy domena stoi za bramką bezpieczeństwa poczty, jest domeną catch-all, czy ma zwykłą skrzynkę.',
    },
    {
      q: 'Co się dzieje, jeśli nadal nie możecie zweryfikować adresu?',
      a: 'Adres wraca z wynikiem nieznany, a kredyt jest zwracany automatycznie.',
    },
  ],
  ctaHeadline: 'Sprawdź listę i zobacz różnicę',
}

const id: SegStrings = {
  metaTitle: 'Verifikasi Email di Balik Secure Email Gateway | Giggal.ai',
  ogTitle: 'Verifikasi Email di Balik Secure Email Gateway',
  description:
    'Proofpoint, Mimecast, Barracuda, dan gateway lain memblokir pemeriksaan biasa. Giggal.ai memberi hasil valid atau tidak valid di balik 15 secure email gateway.',
  ogLocale: 'id_ID',
  ogAlt: 'Verifikasi email Giggal.ai',
  crumb: 'Verifikasi Email SEG',
  h1Lead: 'Verifikasi email yang dilindungi',
  h1Accent: 'gateway SEG',
  heroIntro:
    'Secure email gateway berada di depan server email perusahaan yang sebenarnya dan menolak pemeriksaan yang diandalkan kebanyakan alat verifikasi. Giggal.ai memakai jalur lain dan memberi hasil verifikasi email yang nyata, valid atau tidak valid, bukan tidak diketahui.',
  heroCta: 'Mulai gratis dengan 1.000 kredit',
  heroPricing: 'Lihat harga',
  heroNote: 'Tanpa kartu kredit. Kredit tidak pernah kedaluwarsa.',
  whatTitle: 'Apa itu secure email gateway?',
  whatParas: [
    'Secure email gateway (SEG), atau gateway keamanan email, adalah lapisan penyaring di depan server email perusahaan yang sebenarnya. Setiap pesan yang menuju domain itu melewati gateway lebih dulu. Perusahaan memakainya untuk memblokir spam dan malware, menghentikan phishing, dan menerapkan aturan pencegahan kebocoran data sebelum pesan sampai ke kotak masuk. Vendor di bidang ini antara lain Proofpoint, Mimecast, Barracuda, dan Cisco IronPort.',
    'Karena gateway berada di depan server email, gateway juga menjawab atas nama server email. Setiap upaya untuk mengecek apakah kotak masuk ada, termasuk dari alat verifikasi email, akhirnya berkomunikasi dengan gateway. Alat itu tidak berkomunikasi dengan sistem yang benar-benar tahu kotak masuk mana yang ada.',
  ],
  whyTitle: 'Kenapa gateway membuat verifikasi email gagal',
  whyParas: [
    'Verifikasi email standar mengecek apakah sebuah kotak masuk ada. Pada domain biasa, server menjawab, lalu alat verifikasi mencatat hasil valid atau tidak valid.',
    'Di balik gateway, pertanyaan itu tidak pernah sampai ke server email. Gateway mencegatnya dan menjawab atas nama server. Gateway dibuat untuk mencegah pihak ketiga memetakan pengguna sebuah perusahaan. Jadi gateway memberi jawaban yang sengaja dibuat samar, menerima setiap alamat baik ada maupun tidak, atau langsung menolak koneksi.',
    'Alat verifikasi tidak mendapat apa pun yang bisa diubah menjadi hasil verifikasi email. Alat itu melaporkan alamat sebagai tidak diketahui atau berisiko, dan kontak itu tetap tanpa kepastian. Pada daftar bisnis dengan banyak domain di balik gateway, itu adalah bagian nyata dari daftar Anda yang tidak bisa Anda pakai dengan yakin.',
  ],
  ipTitle: 'Masalah reputasi IP',
  ipPara:
    'Mencoba ulang justru memperburuk keadaan. Kueri berulang ke endpoint yang menolak pemeriksaan membuat IP pengirim ditandai. Setelah itu terjadi, kualitas hasil turun di setiap domain yang dicek oleh alat verifikasi itu, bukan hanya di domain gateway. Karena itu, Giggal.ai memakai metode verifikasi lain pada gateway yang berperilaku seperti ini, bukan terus mencoba sampai terblokir.',
  howTitle: 'Cara Giggal.ai memverifikasi di balik gateway',
  howParas: [
    'Giggal.ai membaca MX record domain lebih dulu untuk mengetahui apa yang sebenarnya ada di depan kotak masuk. Dari situ kami tahu apakah domain menjawab langsung atau berada di balik gateway.',
    'Domain di balik gateway diarahkan ke jalur verifikasi yang berbeda dari domain yang menjawab langsung. Jika gateway memblokir pemeriksaan kotak masuk standar, hasil verifikasi email sama sekali tidak bergantung pada jawaban itu. Kami memverifikasi alamat melalui sinyal lain, sehingga alamat tetap kembali dengan hasil valid atau tidak valid saat pemeriksaan standar tidak memberi apa pun.',
    'Gateway juga mengirim respons yang dibuat untuk menyembunyikan apakah kotak masuk ada, yaitu jawaban yang sengaja dibuat samar untuk mengecoh alat verifikasi. Giggal.ai mengenali respons ini dan tidak menganggapnya sebagai hasil nyata. Jika yang kembali hanya respons yang tidak berarti, kami menganggapnya tidak ada jawaban dan tidak menebak. Jadi alamat kembali dengan hasil valid atau tidak valid, sedangkan kebanyakan alat verifikasi memberi hasil tidak diketahui.',
  ],
  gatewaysTitle: 'Gateway yang kami deteksi',
  gatewaysNote:
    'Deteksi berjalan otomatis dari MX record domain. Anda tidak perlu memberi tahu kami apa pun tentang daftar sebelum menjalankannya.',
  proofpointTitle: 'Proofpoint',
  proofpointPara:
    'Proofpoint adalah salah satu secure email gateway yang paling banyak dipakai pada domain perusahaan besar. Jika Anda menjual ke perusahaan besar, bagian yang cukup berarti dari daftar Anda berada di baliknya. Proofpoint berada di depan server email yang sebenarnya dan menyaring email masuk dari ancaman. Karena itu juga, pemeriksaan standar pada domain Proofpoint biasanya tidak memberi jawaban yang bisa dipakai. Giggal.ai mengenali Proofpoint dari MX record domain dan mengarahkan alamat ke jalur gateway. Jadi Anda mendapat hasil nyata, dapat dikirim atau tidak dapat dikirim, untuk kotak masuk di baliknya, bukan hasil tidak diketahui.',
  mimecastTitle: 'Mimecast',
  mimecastPara:
    'Mimecast dibuat agar tidak ada yang bisa mengetahui kotak masuk mana yang ada di sebuah domain. Mimecast menjawab kueri dengan respons yang sengaja dibuat samar dan tidak membenarkan atau menyangkal alamat itu. Giggal.ai mengenali perilaku itu dan menghindari pemicu respons tersebut, sehingga reputasi pengirim tetap terlindungi. Giggal.ai mengecek apakah kotak masuk ada dengan cara lain, sehingga alamat kembali dengan hasil verifikasi email yang nyata, bukan tidak diketahui.',
  mimecastLink: 'cara kerja verifikasi Mimecast',
  barracudaTitle: 'Barracuda',
  barracudaPara:
    'Barracuda sering dipakai pada domain perusahaan menengah. Seperti gateway lain, Barracuda berada di depan server email yang sebenarnya dan menyaring email masuk. Alat verifikasi standar yang mengecek domain Barracuda biasanya tidak bisa mendapat jawaban jelas tentang kotak masuk, karena yang menjawab adalah gateway. Giggal.ai mendeteksi Barracuda dari MX record domain dan mengirim alamat ke jalur verifikasi gateway. Anda mendapat hasil dapat dikirim atau tidak dapat dikirim untuk kotak masuk itu sendiri, bukan label berisiko atau tidak diketahui yang membuat Anda menebak apakah kontak itu nyata.',
  resultsTitle: 'Hasil yang Anda dapatkan',
  resultsHeadResult: 'Hasil',
  resultsHeadMeaning: 'Artinya',
  results: [
    { label: 'Dapat dikirim', meaning: 'Kotak masuknya ada dan akan menerima email' },
    { label: 'Tidak dapat dikirim', meaning: 'Kotak masuknya tidak ada' },
    { label: 'Berisiko', meaning: 'Alamatnya ada, tetapi punya risiko dalam pengiriman' },
    { label: 'Tidak diketahui', meaning: 'Kami tidak bisa memverifikasi alamat ini' },
  ],
  refundNote:
    'Jika kami tidak bisa memverifikasi sebuah alamat, kreditnya dikembalikan secara otomatis. Anda hanya membayar verifikasi yang berhasil kami selesaikan.',
  catchAllNote:
    'Domain catch-all adalah masalah yang terkait, tetapi berbeda. Jika daftar Anda juga berisi domain seperti itu, kami juga bisa [memverifikasi email catch-all dan berisiko](/catch-all-verification).',
  pricingTitle: 'Bayar hanya untuk yang Anda verifikasi',
  pricingStandardTag: 'Standar dan SEG',
  pricingStandardPrice: '1 kredit',
  pricingStandardUnit: 'per verifikasi email',
  pricingCatchAllTag: 'Catch-all',
  pricingCatchAllPrice: '1 kredit',
  pricingCatchAllUnit: 'per email catch-all',
  pricingNote:
    'Tanpa biaya bulanan, tanpa minimum, dan kredit tidak pernah kedaluwarsa. Mulai dengan 1.000 kredit gratis, tanpa kartu kredit. Lihat semua [harga dan kredit](/pricing).',
  faqTitle: 'Pertanyaan yang sering diajukan',
  faqs: [
    {
      q: 'Apakah secure email gateway berarti alamatnya tidak valid?',
      a: 'Tidak. Gateway adalah lapisan penyaring, bukan tanda tentang kotak masuk di baliknya. Banyak alamat yang valid dan aktif berada di balik Proofpoint atau Mimecast. Gateway hanya membuat alamat itu lebih sulit dicek.',
    },
    {
      q: 'Kenapa alat verifikasi lain memberi hasil tidak diketahui pada alamat ini?',
      a: 'Kebanyakan alat verifikasi terhubung langsung ke server email untuk menanyakan apakah kotak masuk ada. Di balik gateway, pertanyaan itu dicegat dan dijawab oleh gateway, yang memang dibuat untuk tidak memberi informasi yang berguna. Tanpa jawaban, alat verifikasi tidak punya apa pun untuk dilaporkan.',
    },
    {
      q: 'Gateway apa saja yang ditangani Giggal.ai?',
      a: 'Lima belas, termasuk Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet, dan Forcepoint. Deteksi berjalan otomatis dari MX record domain.',
    },
    {
      q: 'Apakah saya perlu memisahkan alamat yang dilindungi SEG sebelum mengunggah?',
      a: 'Tidak. Unggah daftar apa adanya. Domain di balik gateway dikenali dan diarahkan secara otomatis selama proses berjalan.',
    },
    {
      q: 'Apakah verifikasi di balik gateway dikenai biaya tambahan?',
      a: 'Tidak. Setiap verifikasi email dikenai biaya tetap 1 kredit, baik domainnya berada di balik secure email gateway, merupakan domain catch-all, maupun memakai kotak masuk standar.',
    },
    {
      q: 'Apa yang terjadi jika alamat tetap tidak bisa diverifikasi?',
      a: 'Alamat itu kembali dengan hasil tidak diketahui dan kreditnya dikembalikan secara otomatis.',
    },
  ],
  ctaHeadline: 'Jalankan satu daftar dan lihat perbedaannya',
}

// Spanish, "tú". "Secure email gateway" kept as the Spanish blog post
// /es/blog/que-es-un-secure-email-gateway names it, with "gateway de seguridad".
const es: SegStrings = {
  metaTitle: 'Verifica correos detrás de gateways de seguridad | Giggal.ai',
  ogTitle: 'Verifica correos detrás de gateways de seguridad',
  description:
    'Proofpoint, Mimecast, Barracuda y otros gateways bloquean las comprobaciones habituales. Giggal.ai da válido o no válido detrás de 15 gateways de seguridad.',
  ogLocale: 'es_LA',
  ogAlt: 'Verificación de correo de Giggal.ai',
  crumb: 'Verificación SEG',
  h1Lead: 'Verifica correos protegidos por',
  h1Accent: 'gateways de seguridad (SEG)',
  heroIntro:
    'Los secure email gateways se colocan delante del servidor de correo real de una empresa y rechazan las comprobaciones de las que dependen la mayoría de los verificadores. Giggal.ai sigue otra ruta y devuelve un resultado real de verificación de correo, válido o no válido, en lugar de desconocido.',
  heroCta: 'Empieza gratis con 1.000 créditos',
  heroPricing: 'Ver precios',
  heroNote: 'Sin tarjeta. Los créditos no caducan.',
  whatTitle: '¿Qué es un secure email gateway (SEG)?',
  whatParas: [
    'Un secure email gateway es una capa de filtrado que se coloca delante del servidor de correo real de una empresa. Cada mensaje dirigido al dominio pasa primero por el gateway. Las empresas lo usan para bloquear spam y malware, frenar el phishing y aplicar reglas de prevención de pérdida de datos antes de que algo llegue a un buzón. Entre los proveedores de este tipo están Proofpoint, Mimecast, Barracuda y Cisco IronPort.',
    'Como el gateway está delante del servidor de correo, también responde en su nombre. Todo lo que intenta comprobar si un buzón existe, incluido un verificador de correo, acaba hablando con el gateway y no con el sistema que sabe qué buzones existen.',
  ],
  whyTitle: 'Por qué los gateways rompen la verificación de correo',
  whyParas: [
    'La verificación de correo estándar comprueba si un buzón existe. En un dominio normal el servidor responde y el verificador registra un resultado válido o no válido.',
    'Detrás de un gateway, esa pregunta nunca llega al servidor de correo. El gateway la intercepta y responde en su lugar. Los gateways están hechos para impedir que terceros descubran los usuarios de una empresa. Por eso el gateway da a propósito una respuesta vaga, acepta todas las direcciones existan o no, o rechaza la conexión directamente.',
    'El verificador se queda sin nada que pueda convertir en un resultado de verificación. Marca la dirección como desconocida o arriesgada, y el contacto queda sin resolver. En una lista de empresas donde una gran parte de los dominios está detrás de un gateway, es una parte real de tu lista que no puedes usar con confianza.',
  ],
  ipTitle: 'El problema de la reputación de la IP',
  ipPara:
    'Reintentar lo empeora. Consultar una y otra vez un servidor que rechaza la comprobación hace que se marque la IP de envío. Cuando eso pasa, los resultados empeoran en todos los dominios que toca ese verificador, no solo en los dominios con gateway. Por eso Giggal.ai usa métodos de verificación alternativos en los gateways que se comportan así, en lugar de reintentar hasta quedar bloqueado.',
  howTitle: 'Cómo verifica Giggal.ai detrás de un gateway',
  howParas: [
    'Giggal.ai lee primero los registros MX del dominio para saber qué hay delante del buzón. Eso nos dice si el dominio responde directamente o está detrás de un gateway.',
    'Los dominios detrás de un gateway siguen una ruta de verificación distinta de la de los dominios que responden directamente. Cuando un gateway bloquea las comprobaciones normales del buzón, el resultado de la verificación no depende de esa respuesta. Verificamos la dirección con otra señal, así que vuelve como válida o no válida donde una comprobación normal no devolvería nada.',
    'Los gateways también devuelven respuestas pensadas para ocultar si un buzón existe: respuestas vagas a propósito para confundir al verificador. Giggal.ai las reconoce y no las confunde con un resultado real. Cuando lo único que llega es ruido, lo tratamos como una falta de respuesta en lugar de adivinar. Así la dirección vuelve como válida o no válida, donde la mayoría de los verificadores devuelven desconocido.',
  ],
  gatewaysTitle: 'Gateways que detectamos',
  gatewaysNote:
    'La detección se hace automáticamente a partir de los registros MX del dominio. No tienes que decirnos nada sobre una lista antes de verificarla.',
  proofpointTitle: 'Proofpoint',
  proofpointPara:
    'Proofpoint es uno de los secure email gateways más usados en los dominios corporativos. Si vendes a grandes empresas, una parte importante de tu lista está detrás de él. Proofpoint se coloca delante del servidor de correo real y filtra el correo entrante en busca de amenazas. Por eso una comprobación normal contra un dominio con Proofpoint suele volver sin una respuesta útil. Giggal.ai identifica Proofpoint por los registros MX del dominio y envía la dirección por la ruta para gateways. Así, en lugar de desconocido, recibes un resultado real, entregable o no entregable, sobre el buzón que hay detrás.',
  mimecastTitle: 'Mimecast',
  mimecastPara:
    'Mimecast está hecho para impedir que alguien averigüe qué buzones existen en un dominio, y responde a las consultas con una respuesta vaga a propósito en lugar de confirmar o negar la dirección. Giggal.ai reconoce ese comportamiento y evita provocar esa respuesta, lo que protege la reputación de remitente. Comprueba de otra forma si el buzón existe, así que devuelve un resultado real de verificación de correo en lugar de desconocido.',
  mimecastLink: 'cómo funciona la verificación de Mimecast',
  barracudaTitle: 'Barracuda',
  barracudaPara:
    'Barracuda es habitual en los dominios de empresas medianas y, como otros gateways, se coloca delante del servidor de correo real y filtra el correo entrante. Un verificador normal que comprueba un dominio con Barracuda no suele obtener una respuesta clara sobre el buzón, porque quien responde es el gateway. Giggal.ai detecta Barracuda por los registros MX del dominio y envía la dirección por la ruta de verificación para gateways. Recibes un resultado entregable o no entregable sobre el propio buzón, no una etiqueta de arriesgado o desconocido que te deja sin saber si el contacto es real.',
  resultsTitle: 'Qué recibes',
  resultsHeadResult: 'Resultado',
  resultsHeadMeaning: 'Significado',
  results: [
    { label: 'Entregable', meaning: 'El buzón existe y aceptará correo' },
    { label: 'No entregable', meaning: 'El buzón no existe' },
    { label: 'Arriesgado', meaning: 'La dirección existe, pero tiene riesgo de entrega' },
    { label: 'Desconocido', meaning: 'No pudimos verificar la dirección' },
  ],
  refundNote:
    'Cuando no podemos verificar una dirección, el crédito se reembolsa automáticamente. Solo pagas por las verificaciones que completamos.',
  catchAllNote:
    'Un dominio catch-all es un problema relacionado, pero distinto. Si tu lista también los tiene, podemos [verificar correos catch-all y arriesgados](/catch-all-verification).',
  pricingTitle: 'Paga solo por lo que verificas',
  pricingStandardTag: 'Estándar y SEG',
  pricingStandardPrice: '1 crédito',
  pricingStandardUnit: 'por verificación de correo',
  pricingCatchAllTag: 'Catch-all',
  pricingCatchAllPrice: '1 crédito',
  pricingCatchAllUnit: 'por correo catch-all',
  pricingNote:
    'Sin cuotas mensuales ni mínimos, y los créditos no caducan. Empieza con 1.000 créditos gratis, sin tarjeta. Consulta todos los [precios y créditos](/pricing).',
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      q: '¿Un secure email gateway significa que la dirección no es válida?',
      a: 'No. Un gateway es una capa de filtrado, no una señal sobre el buzón que hay detrás. Muchas direcciones válidas y activas están detrás de Proofpoint o Mimecast. El gateway solo hace que sean más difíciles de comprobar.',
    },
    {
      q: '¿Por qué otros verificadores devuelven desconocido en estas direcciones?',
      a: 'La mayoría de los verificadores se conectan directamente al servidor de correo para preguntar si el buzón existe. Detrás de un gateway, esa pregunta la intercepta y la responde el gateway, que está hecho para no dar ninguna información útil. Sin una respuesta, el verificador no tiene nada que informar.',
    },
    {
      q: '¿Qué gateways maneja Giggal.ai?',
      a: 'Quince, entre ellos Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet y Forcepoint. La detección es automática a partir de los registros MX del dominio.',
    },
    {
      q: '¿Tengo que separar las direcciones protegidas por un SEG antes de subir la lista?',
      a: 'No. Sube la lista tal como está. Los dominios detrás de un gateway se identifican y se envían por su ruta automáticamente durante el proceso.',
    },
    {
      q: '¿Verificar detrás de un gateway cuesta más?',
      a: 'No. Cada verificación de correo cuesta 1 crédito fijo, tanto si el dominio está detrás de un secure email gateway como si es catch-all o un buzón normal.',
    },
    {
      q: '¿Qué pasa si aun así no se puede verificar una dirección?',
      a: 'La dirección vuelve como desconocida y el crédito se reembolsa automáticamente.',
    },
  ],
  ctaHeadline: 'Verifica una lista y comprueba la diferencia',
}

// Brazilian Portuguese, "você". "Secure email gateway" kept as the Brazilian blog
// post /pt-br/blog/o-que-e-um-secure-email-gateway names it, with "gateway de segurança".
const ptBr: SegStrings = {
  metaTitle: 'Verifique e-mails atrás de gateways de segurança | Giggal.ai',
  ogTitle: 'Verifique e-mails atrás de gateways de segurança',
  description:
    'Proofpoint, Mimecast, Barracuda e outros gateways bloqueiam as verificações comuns. A Giggal.ai devolve válido ou inválido atrás de 15 gateways de segurança.',
  ogLocale: 'pt_BR',
  ogAlt: 'Verificação de e-mail da Giggal.ai',
  crumb: 'Verificação SEG',
  h1Lead: 'Verifique e-mails protegidos por',
  h1Accent: 'gateways de segurança (SEG)',
  heroIntro:
    'Os secure email gateways ficam na frente do servidor de e-mail real de uma empresa e recusam as verificações das quais a maioria dos verificadores depende. A Giggal.ai segue outro caminho e devolve um resultado real de verificação de e-mail, válido ou inválido, em vez de desconhecido.',
  heroCta: 'Comece grátis com 1.000 créditos',
  heroPricing: 'Ver preços',
  heroNote: 'Sem cartão. Os créditos nunca expiram.',
  whatTitle: 'O que é um secure email gateway (SEG)?',
  whatParas: [
    'Um secure email gateway é uma camada de filtragem que fica na frente do servidor de e-mail real de uma empresa. Toda mensagem enviada para o domínio passa primeiro pelo gateway. As empresas usam esse filtro para bloquear spam e malware, impedir phishing e aplicar regras de prevenção contra perda de dados antes que qualquer coisa chegue a uma caixa. Entre os fornecedores desse tipo estão Proofpoint, Mimecast, Barracuda e Cisco IronPort.',
    'Como o gateway fica na frente do servidor de e-mail, ele também responde no lugar do servidor. Qualquer coisa que tente verificar se uma caixa existe, incluindo um verificador de e-mail, acaba falando com o gateway, e não com o sistema que sabe quais caixas existem.',
  ],
  whyTitle: 'Por que os gateways quebram a verificação de e-mail',
  whyParas: [
    'A verificação de e-mail padrão confere se uma caixa existe. Em um domínio comum, o servidor responde e o verificador registra um resultado válido ou inválido.',
    'Atrás de um gateway, essa pergunta nunca chega ao servidor de e-mail. O gateway a intercepta e responde no lugar do servidor. Os gateways são feitos para impedir que terceiros mapeiem os usuários de uma empresa. Por isso o gateway dá uma resposta vaga de propósito, aceita todos os endereços, existam ou não, ou recusa a conexão de vez.',
    'O verificador fica sem nada que possa virar um resultado de verificação. Ele marca o endereço como desconhecido ou arriscado, e o contato fica sem resposta. Em uma lista B2B em que uma parte grande dos domínios fica atrás de um gateway, isso é uma parte real da sua lista que você não pode usar com segurança.',
  ],
  ipTitle: 'O problema da reputação do IP',
  ipPara:
    'Tentar de novo piora a situação. Consultar várias vezes um servidor que recusa a verificação faz o IP de envio ser marcado. Quando isso acontece, os resultados pioram em todos os domínios que esse verificador consulta, não só nos domínios com gateway. Por isso a Giggal.ai usa métodos alternativos de verificação nos gateways que se comportam assim, em vez de repetir tentativas até ser bloqueada.',
  howTitle: 'Como a Giggal.ai verifica atrás de um gateway',
  howParas: [
    'A Giggal.ai lê primeiro os registros MX do domínio para descobrir o que está na frente da caixa. Isso nos diz se o domínio responde diretamente ou fica atrás de um gateway.',
    'Domínios atrás de um gateway seguem um caminho de verificação diferente dos domínios que respondem diretamente. Quando um gateway bloqueia as verificações comuns da caixa, o resultado da verificação não depende dessa resposta. Verificamos o endereço por outro sinal, então ele volta como válido ou inválido quando uma verificação comum não devolveria nada.',
    'Os gateways também devolvem respostas feitas para esconder se uma caixa existe: respostas vagas de propósito, para confundir o verificador. A Giggal.ai reconhece essas respostas e não as confunde com um resultado real. Quando tudo o que volta é ruído, tratamos isso como falta de resposta, em vez de adivinhar. Assim o endereço volta como válido ou inválido, onde a maioria dos verificadores devolve desconhecido.',
  ],
  gatewaysTitle: 'Gateways que detectamos',
  gatewaysNote:
    'A detecção é automática a partir dos registros MX do domínio. Você não precisa nos dizer nada sobre uma lista antes de verificá-la.',
  proofpointTitle: 'Proofpoint',
  proofpointPara:
    'O Proofpoint é um dos secure email gateways mais usados em domínios corporativos. Se você vende para grandes empresas, uma parte relevante da sua lista fica atrás dele. O Proofpoint fica na frente do servidor de e-mail real e filtra as mensagens recebidas em busca de ameaças. É por isso que uma verificação comum em um domínio com Proofpoint costuma voltar sem uma resposta útil. A Giggal.ai identifica o Proofpoint pelos registros MX do domínio e manda o endereço pelo caminho para gateways. Assim, em vez de desconhecido, você recebe um resultado real, entregável ou não entregável, sobre a caixa que está por trás.',
  mimecastTitle: 'Mimecast',
  mimecastPara:
    'O Mimecast foi feito para impedir que alguém descubra quais caixas existem em um domínio, e responde às consultas com uma resposta vaga de propósito, em vez de confirmar ou negar o endereço. A Giggal.ai reconhece esse comportamento e evita provocar essa resposta, o que protege a reputação de remetente. Ela verifica de outra forma se a caixa existe, então devolve um resultado real de verificação de e-mail em vez de desconhecido.',
  mimecastLink: 'como funciona a verificação do Mimecast',
  barracudaTitle: 'Barracuda',
  barracudaPara:
    'O Barracuda é comum em domínios de empresas médias e, como outros gateways, fica na frente do servidor de e-mail real e filtra as mensagens recebidas. Um verificador comum que consulta um domínio com Barracuda normalmente não consegue uma resposta clara sobre a caixa, porque quem responde é o gateway. A Giggal.ai detecta o Barracuda pelos registros MX do domínio e manda o endereço pelo caminho de verificação para gateways. Você recebe um resultado entregável ou não entregável sobre a própria caixa, e não um rótulo de arriscado ou desconhecido que deixa você sem saber se o contato é real.',
  resultsTitle: 'O que você recebe',
  resultsHeadResult: 'Resultado',
  resultsHeadMeaning: 'Significado',
  results: [
    { label: 'Entregável', meaning: 'A caixa existe e vai aceitar mensagens' },
    { label: 'Não entregável', meaning: 'A caixa não existe' },
    { label: 'Arriscado', meaning: 'O endereço existe, mas tem risco de entrega' },
    { label: 'Desconhecido', meaning: 'Não conseguimos verificar o endereço' },
  ],
  refundNote:
    'Quando não conseguimos verificar um endereço, o crédito é reembolsado automaticamente. Você só paga pelas verificações que concluímos.',
  catchAllNote:
    'Um domínio catch-all é um problema relacionado, mas diferente. Se a sua lista também tem esses domínios, nós podemos [verificar e-mails catch-all e arriscados](/catch-all-verification).',
  pricingTitle: 'Pague só pelo que você verifica',
  pricingStandardTag: 'Padrão e SEG',
  pricingStandardPrice: '1 crédito',
  pricingStandardUnit: 'por verificação de e-mail',
  pricingCatchAllTag: 'Catch-all',
  pricingCatchAllPrice: '1 crédito',
  pricingCatchAllUnit: 'por e-mail catch-all',
  pricingNote:
    'Sem mensalidade, sem mínimo, e os créditos nunca expiram. Comece com 1.000 créditos grátis, sem cartão. Veja todos os [preços e créditos](/pricing).',
  faqTitle: 'Perguntas frequentes',
  faqs: [
    {
      q: 'Um secure email gateway significa que o endereço é inválido?',
      a: 'Não. Um gateway é uma camada de filtragem, não um sinal sobre a caixa que está por trás. Muitos endereços válidos e ativos ficam atrás do Proofpoint ou do Mimecast. O gateway só torna esses endereços mais difíceis de verificar.',
    },
    {
      q: 'Por que outros verificadores devolvem desconhecido nesses endereços?',
      a: 'A maioria dos verificadores se conecta direto ao servidor de e-mail para perguntar se a caixa existe. Atrás de um gateway, essa pergunta é interceptada e respondida pelo gateway, que é feito para não dar nenhuma informação útil. Sem resposta, o verificador não tem nada para informar.',
    },
    {
      q: 'Quais gateways a Giggal.ai consegue tratar?',
      a: 'Quinze, entre eles Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet e Forcepoint. A detecção é automática a partir dos registros MX do domínio.',
    },
    {
      q: 'Preciso separar os endereços protegidos por SEG antes de enviar a lista?',
      a: 'Não. Envie a lista como ela está. Os domínios atrás de um gateway são identificados e encaminhados automaticamente durante o processamento.',
    },
    {
      q: 'Verificar atrás de um gateway custa mais?',
      a: 'Não. Cada verificação de e-mail custa 1 crédito fixo, seja o domínio protegido por um secure email gateway, seja catch-all, seja uma caixa comum.',
    },
    {
      q: 'O que acontece se mesmo assim vocês não conseguirem verificar um endereço?',
      a: 'O endereço volta como desconhecido e o crédito é reembolsado automaticamente.',
    },
  ],
  ctaHeadline: 'Verifique uma lista e veja a diferença',
}

const ja: SegStrings = {
  metaTitle: 'セキュアメールゲートウェイ（SEG）の背後にあるメールアドレスの検証 | Giggal.ai',
  ogTitle: 'セキュアメールゲートウェイ（SEG）の背後にあるメールアドレスの検証',
  description:
    'Proofpoint、Mimecast、Barracudaなどのゲートウェイは、多くの検証ツールが使うチェックを止めます。Giggal.aiは15種類のセキュアメールゲートウェイの背後でも、有効か無効かを返します。',
  ogLocale: 'ja_JP',
  ogAlt: 'Giggal.aiのメールアドレス検証',
  crumb: 'SEGの背後にあるメールアドレスの検証',
  h1Lead: 'メールアドレス検証：',
  h1Accent: 'セキュアメールゲートウェイ（SEG）の背後にあるアドレスも確認',
  heroIntro:
    'セキュアメールゲートウェイは、企業の実際のメールサーバーの前に置かれ、多くの検証ツールが頼っているチェックを拒否します。Giggal.aiは別の方法を使い、「不明」ではなく、有効か無効かというメールアドレス検証の実際の結果を返します。',
  heroCta: '1,000クレジットで無料で始める',
  heroPricing: '料金を見る',
  heroNote: 'クレジットカードは不要です。クレジットに有効期限はありません。',
  whatTitle: 'セキュアメールゲートウェイとは',
  whatParas: [
    'セキュアメールゲートウェイは、企業の実際のメールサーバーの前に置かれるフィルタリングの層です。そのドメイン宛てのメッセージは、すべて最初にゲートウェイを通ります。企業がゲートウェイを使うのは、メールボックスに届く前に、スパムやマルウェアを止め、フィッシングを防ぎ、情報漏えい防止（DLP）のルールを適用するためです。この分野のベンダーには、Proofpoint、Mimecast、Barracuda、Cisco IronPortがあります。',
    'ゲートウェイはメールサーバーの前にあるため、メールサーバーの代わりに応答もします。メールボックスが存在するかを確認しようとするものは、メールアドレス検証ツールも含め、どのメールボックスが存在するかを実際に知っているシステムではなく、ゲートウェイとやり取りすることになります。',
  ],
  whyTitle: 'ゲートウェイがメールアドレス検証を妨げる理由',
  whyParas: [
    '通常のメールアドレス検証は、あるメールボックスが存在するかを確認します。通常のドメインではサーバーが答え、検証ツールは有効か無効かの結果を記録します。',
    'ゲートウェイの背後では、この問い合わせはメールサーバーに届きません。ゲートウェイが問い合わせを横取りし、サーバーの代わりに答えます。ゲートウェイは、第三者が企業のユーザーの一覧を作れないように作られています。そのため、ゲートウェイは意図的にあいまいな答えを返すか、存在するかどうかに関係なくすべてのアドレスを受け付けるか、接続をそのまま拒否します。',
    '検証ツールには、メールアドレス検証の結果にできる材料が残りません。アドレスを「不明」や「リスクあり」とし、連絡先は判定されないまま残ります。多くのドメインがゲートウェイの背後にあるビジネス向けのリストでは、それはリストの中で安心して使えない、無視できない割合になります。',
  ],
  ipTitle: 'IPレピュテーションの問題',
  ipPara:
    '再試行すると、問題は悪化します。チェックを拒否する相手に照会をくり返すと、送信元のIPに印が付きます。そうなると、ゲートウェイのドメインだけでなく、その検証ツールが扱うすべてのドメインで結果が悪くなります。そのため、Giggal.aiはこのように動作するゲートウェイでは、ブロックされるまで再試行せず、別の検証方法を使います。',
  howTitle: 'Giggal.aiがゲートウェイの背後で検証する方法',
  howParas: [
    'Giggal.aiは、まずドメインのMXレコードを読み、メールボックスの前に実際に何があるかを調べます。これで、そのドメインが直接答えるのか、ゲートウェイの背後にあるのかがわかります。',
    'ゲートウェイの背後にあるドメインは、直接答えるドメインとは別の検証の手順で処理されます。ゲートウェイが通常のメールボックスのチェックを止める場合、メールアドレス検証の結果はその答えにまったく頼りません。別のシグナルでアドレスを検証するので、通常のチェックでは何も返らない場合でも、有効か無効かの結果が返ります。',
    'ゲートウェイは、メールボックスが存在するかを隠すための応答も返します。検証ツールを惑わせるための、意図的にあいまいな答えです。Giggal.aiはこれを見分け、実際の結果と取り違えません。返ってくるのが意味のない応答だけのときは、推測せず、答えがなかったものとして扱います。そのため、多くの検証ツールが「不明」を返すところで、アドレスは有効か無効かの結果として返ります。',
  ],
  gatewaysTitle: '見分けられるゲートウェイ',
  gatewaysNote:
    'ゲートウェイは、ドメインのMXレコードから自動で見分けます。リストを処理する前に、こちらに何かを伝える必要はありません。',
  proofpointTitle: 'Proofpoint',
  proofpointPara:
    'Proofpointは、企業のドメインで最も広く使われているセキュアメールゲートウェイの一つです。大企業に販売している場合、リストのかなりの部分がProofpointの背後にあります。Proofpointは実際のメールサーバーの前に置かれ、受信メールの脅威をフィルタリングします。そのため、Proofpointのドメインに通常のチェックを行うと、使える答えが返らないことが多くなります。Giggal.aiはドメインのMXレコードからProofpointを見分け、アドレスをゲートウェイ用の手順で処理します。そのため、「不明」ではなく、その背後にあるメールボックスについて、配信可能か配信不可かの実際の結果を受け取れます。',
  mimecastTitle: 'Mimecast',
  mimecastPara:
    'Mimecastは、ドメインにどのメールボックスが存在するかを外部から調べられないように作られています。照会には、アドレスがあるともないとも答えず、意図的にあいまいな応答を返します。Giggal.aiはこの動作を見分け、その応答を引き起こさないようにして、送信者レピュテーションを守ります。メールボックスが存在するかは別の方法で確認するので、「不明」ではなく、メールアドレス検証の実際の結果が返ります。',
  mimecastLink: 'Mimecastの背後にあるメールアドレスの検証のしくみ',
  barracudaTitle: 'Barracuda',
  barracudaPara:
    'Barracudaは中堅企業のドメインでよく使われています。ほかのゲートウェイと同じく、実際のメールサーバーの前に置かれ、受信メールをフィルタリングします。Barracudaのドメインを通常の検証ツールでチェックしても、応答しているのはゲートウェイなので、メールボックスについてはっきりした答えはたいてい得られません。Giggal.aiはドメインのMXレコードからBarracudaを見分け、アドレスをゲートウェイ用の検証の手順で処理します。連絡先が実在するかを推測するしかない「リスクあり」や「不明」ではなく、メールボックスそのものについて、配信可能か配信不可かの結果を受け取れます。',
  resultsTitle: '返される結果',
  resultsHeadResult: '結果',
  resultsHeadMeaning: '意味',
  results: [
    { label: '配信可能', meaning: 'メールボックスが存在し、メールを受け付けます' },
    { label: '配信不可', meaning: 'メールボックスが存在しません' },
    { label: 'リスクあり', meaning: 'アドレスは存在しますが、到達率のリスクがあります' },
    { label: '不明', meaning: 'アドレスを検証できませんでした' },
  ],
  refundNote:
    'アドレスを検証できなかったときは、クレジットが自動で返却されます。料金がかかるのは、完了した検証だけです。',
  catchAllNote:
    'キャッチオールドメインは、関連していますが別の問題です。リストにキャッチオールドメインのアドレスもある場合は、[キャッチオールドメインとリスクありのメールアドレスの検証](/catch-all-verification)にも対応しています。',
  pricingTitle: '検証した分だけ支払う料金',
  pricingStandardTag: '通常とSEG',
  pricingStandardPrice: '1クレジット',
  pricingStandardUnit: 'メールアドレス1件の検証あたり',
  pricingCatchAllTag: 'キャッチオールドメイン',
  pricingCatchAllPrice: '1クレジット',
  pricingCatchAllUnit: 'キャッチオールドメインのアドレス1件あたり',
  pricingNote:
    '月額料金も最低料金もなく、クレジットに有効期限はありません。無料クレジット1,000件で始められます。クレジットカードは不要です。詳しくは[料金とクレジット](/pricing)をご覧ください。',
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'セキュアメールゲートウェイがあるということは、アドレスが無効という意味ですか？',
      a: 'いいえ。ゲートウェイはフィルタリングの層で、その背後にあるメールボックスについて何かを示すものではありません。ProofpointやMimecastの背後には、有効で使われているアドレスがたくさんあります。ゲートウェイがあると、チェックが難しくなるだけです。',
    },
    {
      q: 'ほかの検証ツールが、これらのアドレスで「不明」を返すのはなぜですか？',
      a: '多くの検証ツールは、メールサーバーに直接接続して、メールボックスが存在するかを尋ねます。ゲートウェイの背後では、その問い合わせはゲートウェイに横取りされ、ゲートウェイが代わりに答えます。ゲートウェイは役に立つ情報を何も返さないように作られています。答えがないので、検証ツールには報告できる内容がありません。',
    },
    {
      q: 'Giggal.aiはどのゲートウェイに対応していますか？',
      a: '15種類です。Proofpoint、Mimecast、Barracuda、Cisco IronPort、Sophos、Trend Micro、Symantec、Fortinet、Forcepointなどがあります。ゲートウェイは、ドメインのMXレコードから自動で見分けます。',
    },
    {
      q: 'アップロードの前に、SEGで保護されたアドレスを分ける必要がありますか？',
      a: 'いいえ。リストをそのままアップロードしてください。ゲートウェイの背後にあるドメインは、処理の中で自動で見分けられ、別の手順で処理されます。',
    },
    {
      q: 'ゲートウェイの背後にあるアドレスの検証に追加料金はかかりますか？',
      a: 'いいえ。ドメインがセキュアメールゲートウェイの背後にあっても、キャッチオールドメインでも、通常のメールボックスでも、メールアドレス検証は一律で1件1クレジットです。',
    },
    {
      q: 'それでもアドレスを検証できなかった場合はどうなりますか？',
      a: 'アドレスは「不明」として返り、クレジットは自動で返却されます。',
    },
  ],
  ctaHeadline: 'リストを処理して、結果の違いを確かめてください',
}

export const SEG_STRINGS: Partial<Record<Locale, SegStrings>> & { en: SegStrings } = {
  en,
  ja,
  'pt-br': ptBr,
  es,
  fr,
  nl,
  pl,
  id,
  ko,
  tr,
}

/** The page copy for `locale`, or English when that language has none yet. */
export function segStrings(locale: Locale): SegStrings {
  return SEG_STRINGS[locale] ?? SEG_STRINGS.en
}
