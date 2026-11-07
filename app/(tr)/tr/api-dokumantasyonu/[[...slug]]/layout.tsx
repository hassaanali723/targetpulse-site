import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// No Turkish search data yet (SEO-Plan/i18n-batch5-tr-keyword-plan.md is
// provisional), so the title carries the native term "e-posta doğrulama API"
// and the format words of the English title (REST, JSON).
const TITLE = 'E-posta doğrulama API dokümantasyonu (REST, JSON)'
const DESC =
  'Tekli ve toplu doğrulama, catch-all adresler, krediler ve sonuçlar için e-posta doğrulama REST API endpointleri. JSON örnekleri ve API anahtarıyla erişim.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/tr/api-dokumantasyonu', languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'tr_TR',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-posta doğrulama' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/tr/api-dokumantasyonu',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
