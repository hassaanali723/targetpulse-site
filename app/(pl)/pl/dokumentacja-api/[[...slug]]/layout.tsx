import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// The title carries the loan term "email validator API" (pl, 50 a month;
// keyword plan section 2).
const TITLE = 'Email validator API: dokumentacja weryfikacji email'
const DESC =
  'Dokumentacja API do weryfikacji adresów email: endpointy REST do weryfikacji pojedynczej i masowej, catch-all, kredytów i wyników. Klucz API i odpowiedzi JSON.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/pl/dokumentacja-api', languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pl_PL',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai weryfikacja e-mail' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/pl/dokumentacja-api',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
