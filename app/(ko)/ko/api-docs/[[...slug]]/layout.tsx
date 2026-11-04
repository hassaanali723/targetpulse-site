import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// No Korean search demand was measured for API terms
// (SEO-Plan/i18n-batch4-ko-keyword-plan.md), so the title carries the native
// term plus the English one, as on the English and Japanese pages.
const TITLE = '이메일 검증 API(Email Verification API) 문서'
const DESC =
  '이메일 검증 API 문서입니다. 단일 검증과 대량 검증, 캐치올(catch-all) 도메인 주소 검증, 크레딧, 결과 조회에 쓰는 REST 엔드포인트를 JSON 예시와 함께 설명합니다.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/ko/api-docs', languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ko_KR',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai 이메일 검증' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/ko/api-docs',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
