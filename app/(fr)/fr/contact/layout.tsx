import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC = 'Contactez Giggal.ai pour le support, une question sur la vérification d’email ou un volume sur mesure. Nous répondons en général en moins de 24 heures.'

export const metadata: Metadata = {
  title: { absolute: 'Contact et Support Vérification d’Email | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/fr/contact', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    title: 'Contact',
    description: DESC,
    url: 'https://giggal.ai/fr/contact',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai vérification d’email' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
