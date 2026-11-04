import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/ko'
import { copy } from '@/lib/i18n/emailChecker/ko'

// Korean free checker. Head term "이메일 유효성 검사" (150 a month, KD 0) in
// the title and H1, with "이메일 주소 존재 확인" in the copy
// (SEO-Plan/i18n-batch4-ko-keyword-plan.md). The H1 lives in
// lib/i18n/emailChecker/ko.tsx. The "how to check if an address is valid"
// questions have their own child page,
// /ko/email-checker/check-if-email-is-valid. The page never uses
// 이메일 주소 확인 (own-address lookup) or 이메일 인증 (verification codes)
// as a heading, and never claims breach checks (유출 확인).

const PATH = '/ko/email-checker'
const TITLE = '무료 이메일 유효성 검사: 이메일 주소가 실제로 있는지 확인'
const DESC =
  '이메일 주소가 유효한지 알려 주는 무료 이메일 유효성 검사 도구입니다. 메일을 보내지 않고 형식, MX 레코드, 메일 서버, 메일함을 확인합니다. 캐치올(catch-all) 도메인도 검사하며 가입은 필요 없습니다.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ko_KR',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai 이메일 검증' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/ko.tsx. Title, description and H1 stay the ones
// researched for this market.
export default function EmailCheckerKoPage() {
  return (
    <EmailCheckerL10n
      locale="ko"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbL10n('ko', [{ name: '이메일 유효성 검사', path: PATH }])} />
          <JsonLd data={webApplicationL10n('ko', PATH, 'Giggal.ai 무료 이메일 유효성 검사 도구', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
