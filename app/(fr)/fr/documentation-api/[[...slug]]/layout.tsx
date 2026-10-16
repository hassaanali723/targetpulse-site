import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'API de vérification d’adresse mail : documentation REST'
const DESC =
  'Documentation de l’API de vérification d’adresse mail : endpoints REST pour la vérification unitaire et en masse, les catch-all, les crédits et les résultats.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/fr/documentation-api', languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai vérification d’email' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/fr/documentation-api',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
