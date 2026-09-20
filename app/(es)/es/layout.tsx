import type { Metadata } from 'next'
import '../../globals.css'
import DeferredAnalytics from '@/components/DeferredAnalytics'
import { jakarta, jetbrainsMono } from '@/lib/fonts'

// Root layout for the Spanish site, so that <html lang="es">
// is set on the server for every /es/ page (the English layout in app/(en)
// hard-codes lang="en", and a nested layout cannot change it). Fonts, the
// analytics loader and the head hints are the same as the English layout.

const baseUrl = 'https://giggal.ai'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Giggal.ai - Validar correo gratis, dominios catch-all incluidos',
    template: '%s | Giggal.ai',
  },
  description:
    'Validación de correo gratis para dominios catch-all y accept-all con un 98,5 % de precisión. Limpia tu lista, reduce los rebotes y protege la reputación del remitente.',
  authors: [{ name: 'Giggal.ai', url: baseUrl }],
  creator: 'Giggal.ai',
  publisher: 'Giggal.ai',
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_LA',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai validación de correo' }],
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
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Giggal.ai',
      alternateName: 'Giggal',
      inLanguage: ['en', 'it', 'de', 'es', 'pt-BR', 'fr'],
      publisher: { '@id': `${baseUrl}/#organization` },
    },
  ],
}

export default function SpanishRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`scroll-smooth ${jakarta.variable} ${jetbrainsMono.variable}`}>
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
