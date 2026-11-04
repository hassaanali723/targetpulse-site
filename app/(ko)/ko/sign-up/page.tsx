import type { Metadata } from 'next'
import SignupPageL10n, { type SignupContent } from '@/components/l10n/SignupPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Korean sign-up. "무료 가입" is the sign-up term of the terminology sheet;
// the title carries 이메일 검증 and the 1,000 free credits.

const PATH = '/ko/sign-up'
const DESC =
  'Giggal.ai 무료 계정을 만들고 이메일 검증 크레딧 1,000개를 받으십시오. 신용카드는 필요 없습니다. 캐치올(catch-all) 이메일도 98.5% 정확도로 검증합니다.'

export const metadata: Metadata = {
  title: { absolute: '무료 가입: 이메일 검증 크레딧 1,000개 제공 | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('signup') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ko_KR',
    title: '무료 가입: 이메일 검증 크레딧 1,000개 제공',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai 이메일 검증' }],
  },
}

const content: SignupContent = {
  path: PATH,
  crumb: '무료 가입',
  h1Lead: '무료 가입하고',
  h1Accent: '크레딧 1,000개로 시작하기',
  intro: 'Giggal.ai 무료 계정은 30초 안에 만들 수 있습니다. 처음 1,000개의 이메일 주소는 무료로 검증합니다. 다른 도구가 “위험”으로 표시하는 캐치올(catch-all) 도메인과 accept-all(모든 주소 수신) 도메인도 포함됩니다. 현재 대시보드는 영어로만 제공됩니다.',
  ctaPrimary: '무료 계정 만들기',
  pricingLabel: '요금 보기',
  pricingHref: '/ko/pricing',
  trustPoints: ['신용카드 필요 없음', '크레딧 유효기간 없음', '언제든지 해지 가능'],
  perksKicker: '제공 내용',
  perksTitle: '이메일 리스트 정리에 필요한 모든 기능',
  perksText: '무료 체험 기간에도 모든 기능을 쓸 수 있습니다. 제한된 기능이나 숨은 조건은 없습니다.',
  perks: [
    { title: '무료 크레딧 1,000개', body: '처음 1,000개의 이메일 주소는 무료로 검증합니다. 신용카드는 필요 없고 크레딧에 유효기간도 없습니다.' },
    { title: '실시간 결과', body: '리스트를 업로드하면 검증 결과가 바로 차례대로 표시됩니다.' },
    { title: '캐치올 검증', body: '다른 도구가 건너뛰는 캐치올 도메인에서도 유효 또는 무효로 분명한 결과를 제공합니다.' },
    { title: '사용한 만큼만 결제', body: '크레딧 3,000개를 US$5부터 구매할 수 있습니다. 크레딧에 유효기간이 없고 언제든지 해지할 수 있습니다.' },
  ],
  ctaTitle: '이메일 리스트를 정리할 준비가 되셨습니까?',
  ctaText: '가입은 30초면 끝납니다. 처음 1,000건의 검증은 무료입니다.',
  ctaButton: '무료 가입',
}

export default function SignUpKoPage() {
  return <SignupPageL10n locale="ko" content={content} />
}
