import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'API di verifica email: documentazione REST e JSON'
const DESC =
  "Documentazione dell'API di verifica email: endpoint REST per la verifica singola e in blocco, i domini catch-all, i crediti e i risultati, con esempi JSON."

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/it/documentazione-api', languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/it/documentazione-api',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
