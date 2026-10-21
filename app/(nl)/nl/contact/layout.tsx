import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC = 'Neem contact op met Giggal.ai voor support, een vraag over e-mailverificatie of een volume op maat. We antwoorden meestal binnen 24 uur.'

export const metadata: Metadata = {
  title: { absolute: 'Contact en support voor e-mailverificatie | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/nl/contact', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'nl_NL',
    title: 'Contact',
    description: DESC,
    url: 'https://giggal.ai/nl/contact',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-mailverificatie' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
