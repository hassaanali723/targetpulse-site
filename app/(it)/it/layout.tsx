import type { Metadata } from 'next'
import '../../globals.css'
import DeferredAnalytics from '@/components/DeferredAnalytics'
import { jakarta, jetbrainsMono } from '@/lib/fonts'

// Second root layout: the Italian site. It exists so that <html lang="it">
// is set on the server for every /it/ page (the English layout in app/(en)
// hard-codes lang="en", and a nested layout cannot change it). Fonts, the
// analytics loader and the head hints are the same as the English layout.

const baseUrl = 'https://giggal.ai'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Giggal.ai - Verifica email gratis per domini catch-all',
    template: '%s | Giggal.ai',
  },
  description:
    'Verifica email gratuita per domini catch-all e accept-all con il 98,5% di precisione. Pulisci la lista, riduci i rimbalzi e proteggi la reputazione del mittente.',
  authors: [{ name: 'Giggal.ai', url: baseUrl }],
  creator: 'Giggal.ai',
  publisher: 'Giggal.ai',
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

// Organization and WebSite nodes for the Italian pages. Same @id as the
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
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Giggal.ai',
      alternateName: 'Giggal',
      inLanguage: ['en', 'it'],
      publisher: { '@id': `${baseUrl}/#organization` },
    },
  ],
}

export default function ItalianRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`scroll-smooth ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#4f46e5" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://scripts.clarity.ms" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <DeferredAnalytics />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
