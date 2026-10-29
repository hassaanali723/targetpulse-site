import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { getStrings } from '@/lib/i18n/strings'
import { AFFILIATES_PT_BR as c } from '@/lib/i18n/affiliates/pt-br'

export const metadata: Metadata = {
  title: { absolute: c.meta.title },
  description: c.meta.description,
  alternates: { canonical: '/pt-br/programa-de-afiliados', languages: hreflangAlternates('affiliates') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: getStrings('pt-br').ogLocale,
    title: c.meta.ogTitle,
    description: c.meta.ogDescription,
    url: 'https://giggal.ai/pt-br/programa-de-afiliados',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }],
  },
  twitter: { card: 'summary_large_image', title: c.meta.ogTitle, description: c.meta.ogDescription },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
