import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'E-Mail-Verifizierung API: Dokumentation (REST, JSON)'
const DESC =
  'Dokumentation der API für E-Mail-Verifizierung: REST-Endpunkte für Einzel- und Massenprüfung, Catch-all, Credits und Ergebnisse, mit JSON-Beispielen.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/de/api-dokumentation', languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai E-Mail-Verifizierung' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/de/api-dokumentation',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
