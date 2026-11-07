import type { Metadata } from 'next'
import '../../globals.css'
import DeferredAnalytics from '@/components/DeferredAnalytics'
import { EmailOffRoot } from '@/components/EmailOff'
import { jakarta, jetbrainsMono } from '@/lib/fontsPl'

// Root layout for the Turkish site, so that <html lang="tr">
// is set on the server for every /tr/ page (the English layout in app/(en)
// hard-codes lang="en", and a nested layout cannot change it). The analytics
// loader and the head hints are the same as the English layout. The fonts come
// from lib/fontsPl.ts, which adds the latin-ext subset for the Turkish letters
// (ş ğ ı İ).

const baseUrl = 'https://giggal.ai'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Giggal.ai: ücretsiz e-posta doğrulama, catch-all alan adı dahil',
    template: '%s | Giggal.ai',
  },
  description:
    'Catch-all ve accept-all alan adlarında %98,5 doğrulukla ücretsiz e-posta doğrulama. Listenizi temizleyin, bounce oranını düşürün, gönderen itibarınızı koruyun.',
  authors: [{ name: 'Giggal.ai', url: baseUrl }],
  creator: 'Giggal.ai',
  publisher: 'Giggal.ai',
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'tr_TR',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-posta doğrulama' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

// Organization and WebSite nodes for the localized pages. Same @id as the
// English layout so search engines merge them into one entity; only the
// language-dependent fields differ.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Giggal.ai',
      url: baseUrl,
      logo: { '@type': 'ImageObject', url: `${baseUrl}/giggal-logo.png` },
      alternateName: ['Giggal', 'Giggal AI'],
      sameAs: [
        'https://www.g2.com/products/giggal/reviews',
        'https://www.trustpilot.com/review/giggal.ai',
        'https://sourceforge.net/software/product/Giggal.ai/',
        'https://www.producthunt.com/products/giggal-ai',
        'https://www.linkedin.com/company/giggal-ai/',
        'https://www.capterra.com/p/10053924/Giggal-ai/',
        'https://claude.ai/directory/connectors/giggal-ai',
        'https://zapier.com/apps/giggalai/integrations',
        'https://github.com/giggal-ai/giggal-mcp',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Giggal.ai',
      alternateName: 'Giggal',
      inLanguage: ['en', 'it', 'de', 'es', 'pt-BR', 'fr', 'nl', 'pl', 'id', 'ja', 'ko', 'tr'],
      publisher: { '@id': `${baseUrl}/#organization` },
    },
  ],
}

export default function TurkishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`scroll-smooth ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#4f46e5" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://scripts.clarity.ms" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <DeferredAnalytics />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <EmailOffRoot>{children}</EmailOffRoot>
      </body>
    </html>
  )
}
