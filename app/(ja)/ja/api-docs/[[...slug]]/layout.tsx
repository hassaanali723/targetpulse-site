import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// No Japanese search demand for API terms (SEO-Plan/i18n-batch3-ja-keyword-plan.md
// section 1), so the title carries the native term plus the English one.
const TITLE = 'メールアドレス検証API（Email Verification API）ドキュメント'
const DESC =
  'メールアドレス検証APIのドキュメントです。1件のアドレスの確認、メールアドレスの一括検証、キャッチオールドメインのアドレス、クレジット、検証結果のRESTエンドポイントを説明します。'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/ja/api-docs', languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ja_JP',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai メールアドレス検証' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/ja/api-docs',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
