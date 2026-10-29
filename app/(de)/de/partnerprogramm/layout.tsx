import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { getStrings } from '@/lib/i18n/strings'
import { AFFILIATES_DE as c } from '@/lib/i18n/affiliates/de'

export const metadata: Metadata = {
  title: { absolute: c.meta.title },
  description: c.meta.description,
  alternates: { canonical: '/de/partnerprogramm', languages: hreflangAlternates('affiliates') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: getStrings('de').ogLocale,
    title: c.meta.ogTitle,
    description: c.meta.ogDescription,
    url: 'https://giggal.ai/de/partnerprogramm',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }],
  },
  twitter: { card: 'summary_large_image', title: c.meta.ogTitle, description: c.meta.ogDescription },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
