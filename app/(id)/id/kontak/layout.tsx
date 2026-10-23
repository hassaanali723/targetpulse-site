import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC = 'Hubungi Giggal.ai untuk dukungan, pertanyaan tentang verifikasi email, atau volume khusus. Kami biasanya membalas dalam 24 jam.'

export const metadata: Metadata = {
  title: { absolute: 'Hubungi kami: dukungan verifikasi email | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/id/kontak', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'id_ID',
    title: 'Kontak',
    description: DESC,
    url: 'https://giggal.ai/id/kontak',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifikasi email' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
