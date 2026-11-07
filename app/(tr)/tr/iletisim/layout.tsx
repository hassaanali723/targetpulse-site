import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC =
  'Giggal.ai ile iletişim: destek, e-posta doğrulama aracıyla ilgili sorular veya özel hacimler için bize yazın. Genellikle 24 saat içinde yanıt veririz.'

export const metadata: Metadata = {
  title: { absolute: 'İletişim: e-posta doğrulama desteği | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/tr/iletisim', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'tr_TR',
    title: 'İletişim',
    description: DESC,
    url: 'https://giggal.ai/tr/iletisim',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-posta doğrulama' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
