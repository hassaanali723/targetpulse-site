import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC =
  'Giggal.aiへのお問い合わせページです。サポート、メールアドレス検証に関するご質問、大量件数のご相談を受け付けています。通常24時間以内に返信します。'

export const metadata: Metadata = {
  title: { absolute: 'お問い合わせ：メールアドレス検証のサポート | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/ja/contact', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ja_JP',
    title: 'お問い合わせ',
    description: DESC,
    url: 'https://giggal.ai/ja/contact',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai メールアドレス検証' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
