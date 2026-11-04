import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC =
  'Giggal.ai 문의 페이지입니다. 이메일 검증 도구 사용 지원, 기능에 관한 질문, 대량 검증 상담을 받습니다. 보통 24시간 이내에 답변합니다.'

export const metadata: Metadata = {
  title: { absolute: '문의하기: 이메일 검증 도구 지원 | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/ko/contact', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ko_KR',
    title: '문의하기',
    description: DESC,
    url: 'https://giggal.ai/ko/contact',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai 이메일 검증' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
