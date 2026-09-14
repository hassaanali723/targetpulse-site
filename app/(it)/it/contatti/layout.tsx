import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC =
  'Contatta Giggal.ai per assistenza, domande sulla verifica email o volumi su misura. Rispondiamo di norma entro 24 ore.'

export const metadata: Metadata = {
  title: { absolute: 'Contatti e Assistenza | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/it/contatti', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: 'Contatti',
    description: DESC,
    url: 'https://giggal.ai/it/contatti',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
}

export default function ContattiLayout({ children }: { children: React.ReactNode }) {
  return children
}
