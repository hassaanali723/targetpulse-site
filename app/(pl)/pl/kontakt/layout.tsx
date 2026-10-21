import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC = 'Skontaktuj się z Giggal.ai w sprawie wsparcia, pytań o weryfikację e-mail lub większego wolumenu. Zwykle odpowiadamy w ciągu 24 godzin.'

export const metadata: Metadata = {
  title: { absolute: 'Kontakt i wsparcie: weryfikacja adresów email | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/pl/kontakt', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pl_PL',
    title: 'Kontakt',
    description: DESC,
    url: 'https://giggal.ai/pl/kontakt',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai weryfikacja e-mail' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
