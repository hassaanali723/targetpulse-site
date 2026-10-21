import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'API voor e-mailverificatie: REST-documentatie'
const DESC =
  'Documentatie van de API voor e-mailverificatie: REST-endpoints voor losse controles en bulk e-mailverificatie, catch-all-adressen, credits en resultaten.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/nl/api-documentatie', languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'nl_NL',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-mailverificatie' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/nl/api-documentatie',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
