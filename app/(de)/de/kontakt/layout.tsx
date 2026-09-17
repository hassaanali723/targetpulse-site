import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC = "Kontaktieren Sie Giggal.ai für Support, Fragen zur E-Mail-Verifizierung oder individuelle Volumen. Wir antworten in der Regel innerhalb von 24 Stunden."

export const metadata: Metadata = {
  title: { absolute: "Kontakt und Support zur E-Mail-Verifizierung | Giggal.ai" },
  description: DESC,
  alternates: { canonical: '/de/kontakt', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: "Kontakt",
    description: DESC,
    url: 'https://giggal.ai/de/kontakt',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: "Giggal.ai E-Mail-Verifizierung" }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
