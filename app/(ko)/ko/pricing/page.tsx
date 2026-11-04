import type { Metadata } from 'next'
import PricingPageL10n, { type PricingContent } from '@/components/l10n/PricingPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Korean pricing page. Title starts with "이메일 검증 요금" and adds the
// 10,000-credit price. Money is written US$9.90, never converted to won
// (SEO-Plan/i18n-batch4-ko-terminology.md, Formats).

const PATH = '/ko/pricing'
const TITLE = '이메일 검증 요금: 크레딧 10,000개에 US$9.90'
const DESC =
  '이메일 검증 요금은 크레딧 10,000개에 US$9.90이고, 1건당 최저 US$0.0007입니다. 일회성 구매와 10% 할인되는 월간 구독 중에서 고를 수 있습니다. 크레딧에는 유효기간이 없습니다.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('pricing') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ko_KR',
    title: '이메일 검증 요금',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai 이메일 검증' }],
  },
}

const content: PricingContent = {
  path: PATH,
  crumb: '요금',
  h1Lead: '이메일 검증',
  h1Accent: '요금',
  intro: (
    <>
      사용한 만큼만 결제합니다. 월 고정 요금이나 숨은 비용이 없고, 크레딧에는 유효기간이 없습니다.{' '}
      <strong className="text-indigo-600 font-extrabold">무료 체험 크레딧 1,000개</strong>로 시작할 수 있으며, 신용카드는 필요 없습니다.
    </>
  ),
  contactHref: '/ko/contact',
  includedTitle: '모든 패키지에 포함된 기능',
  includedText: '모든 패키지에서 모든 기능을 쓸 수 있습니다. 등급별 제한이나 유료 잠금 기능은 없습니다.',
  features: [
    '메일함 확인',
    '도메인 및 MX 레코드 검증',
    '보안 이메일 게이트웨이(SEG) 감지',
    '일회용 이메일 감지',
    '역할 기반 주소(info@ 등) 감지',
    '캐치올 검증',
    '대량 업로드 및 일괄 처리',
    'CSV, Excel, JSON 내보내기',
    '중복 주소 제거',
    '상세 검증 보고서',
    '크레딧 유효기간 없음',
  ],
  rulesTitle: '단순한 요금 체계',
  rulesText: '요금을 투명하고 예측 가능하게 유지하는 4가지 원칙입니다.',
  rules: [
    { title: '크레딧 1개 = 이메일 1개', body: '이메일 주소 하나를 검증할 때마다 잔액에서 크레딧이 정확히 1개 차감됩니다. 캐치올 주소와 보안 이메일 게이트웨이(SEG)로 보호되는 주소도 같습니다.' },
    { title: '대량 구매 할인', body: '크레딧을 많이 살수록 크레딧 1개당 가격이 내려갑니다. US$0.0017부터 US$0.0007까지입니다.' },
    { title: '구독 시 10% 할인', body: '월간 구독을 선택하면 모든 패키지가 자동으로 10% 할인됩니다.' },
    { title: '크레딧 유효기간 없음', body: '크레딧은 언제든지 쓸 수 있습니다. 필요할 때까지 계정에 그대로 남아 있습니다.' },
  ],
  faqTitle: '자주 묻는 질문',
  faqText: '크레딧, 결제, 환불에 관해 알아야 할 내용입니다.',
  faq: [
    { q: '어떤 결제 수단을 쓸 수 있습니까?', a: '안전한 결제 대행사인 Stripe를 통해 주요 신용카드와 체크카드를 모두 쓸 수 있습니다. 요금은 미국 달러로 청구되며, 환율은 카드사가 적용합니다.' },
    { q: '구독은 언제든지 해지할 수 있습니까?', a: '네, 언제든지 해지할 수 있습니다. 계정에 있는 크레딧은 모두 그대로 남고, 이후에는 요금이 청구되지 않습니다.' },
    { q: '크레딧을 다 쓰면 어떻게 됩니까?', a: '언제든지 크레딧을 추가로 구매하면 됩니다. 잔액은 바로 충전됩니다.' },
    { q: '환불을 받을 수 있습니까?', a: '크레딧은 원칙적으로 환불되지 않습니다. 예외적인 사정은 사안별로 검토합니다. 결과가 “알 수 없음”이면 사용한 크레딧을 돌려드립니다. 자세한 내용은 환불 정책을 참고하십시오.' },
    { q: '최소 구매 수량이 있습니까?', a: '최소 구매 단위는 크레딧 3,000개(US$5.00)입니다. 구매 전에 무료 체험 크레딧 1,000개도 받을 수 있습니다.' },
    { q: '크레딧에 유효기간이 있습니까?', a: '없습니다. 크레딧은 다 쓸 때까지 계정에 남아 있습니다.' },
  ],
  ctaTitle: '무료 크레딧 1,000개로 시작하기',
  ctaText: '신용카드는 필요 없습니다. 첫 이메일 주소를 무료로 검증하고 몇 초 만에 결과를 확인하십시오.',
  ctaButton: '무료 크레딧 받기',
  ctaHref: '/ko/sign-up',
}

export default function PricingKoPage() {
  return <PricingPageL10n locale="ko" content={content} />
}
