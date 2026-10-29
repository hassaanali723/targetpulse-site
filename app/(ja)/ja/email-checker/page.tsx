import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/ja'
import { copy } from '@/lib/i18n/emailChecker/ja'

// Japanese free checker. Head term "メールアドレス 存在確認" (1,300 a month,
// plus メールアドレス存在確認 450) in the title, with "メールアドレスチェック"
// (SEO-Plan/i18n-batch3-ja-keyword-plan.md sections 1 and 2). The H1
// "メールアドレスの存在確認" lives in lib/i18n/emailChecker/ja.tsx. The
// "how to check / is it alive / is it valid" questions have their own child
// page, /ja/email-checker/check-if-email-exists. The page is about checking
// whether an address exists, never about looking up one's own address
// (メールアドレス確認) or breach checks (流出チェック).

const PATH = '/ja/email-checker'
const TITLE = 'メールアドレス存在確認ツール（無料）：メールアドレスチェック'
const DESC =
  'メールアドレスの存在確認を無料で行えます。メールを送らずに、形式、MXレコード、メールボックス、キャッチオールドメイン、使い捨てメールアドレス（捨てアド）をチェックします。'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ja_JP',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai メールアドレス検証' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/ja.tsx. Title, description and H1 stay the ones
// researched for this market.
export default function EmailCheckerJaPage() {
  return (
    <EmailCheckerL10n
      locale="ja"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbL10n('ja', [{ name: 'メールアドレスの存在確認', path: PATH }])} />
          <JsonLd data={webApplicationL10n('ja', PATH, 'Giggal.aiの無料メールアドレスチェッカー', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
