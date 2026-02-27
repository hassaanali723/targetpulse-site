import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = 'https://targetpulse.net'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'TargetPulse - Email Verifier & Email List Cleaner',
    template: '%s | TargetPulse',
  },
  description: 'Verify emails in real time and clean your email lists with TargetPulse. Improve deliverability, reduce bounces, and protect your sender reputation.',
  keywords: [
    'email verifier',
    'email verification',
    'email list cleaner',
    'bulk email verification',
    'email validation',
    'verify email address',
    'email bounce checker',
    'email deliverability',
    'real-time email verification',
    'email list hygiene',
    'invalid email checker',
    'email validator tool',
    'reduce email bounces',
    'sender reputation',
    'email marketing tool',
  ],
  authors: [{ name: 'TargetPulse', url: baseUrl }],
  creator: 'TargetPulse',
  publisher: 'TargetPulse',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TargetPulse - Email Verifier & Email List Cleaner',
    description: 'Verify emails in real time and clean your email lists with TargetPulse. Improve deliverability, reduce bounces, and protect your sender reputation.',
    url: baseUrl,
    siteName: 'TargetPulse',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TargetPulse Email Verifier',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TargetPulse - Email Verifier & Email List Cleaner',
    description: 'Verify emails in real time and clean your email lists with TargetPulse. Improve deliverability, reduce bounces, and protect your sender reputation.',
    images: ['/og-image.jpg'],
    creator: '@targetpulse',
    site: '@targetpulse',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'technology',
}

// JSON-LD structured data for rich search results (sitelinks, knowledge panel)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'TargetPulse',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/Targetpulse-email verifier- logo.png`,
        width: 300,
        height: 80,
      },
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@targetpulse.net',
        contactType: 'customer support',
        availableLanguage: 'English',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Office 17366, 182-184 High Street North',
        addressLocality: 'East Ham',
        addressRegion: 'London',
        postalCode: 'E6 2JA',
        addressCountry: 'GB',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'TargetPulse',
      description: 'Email Verifier & Email List Cleaner',
      publisher: {
        '@id': `${baseUrl}/#organization`,
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${baseUrl}/#software`,
      name: 'TargetPulse Email Verifier',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      url: baseUrl,
      description: 'Real-time email verification and bulk email list cleaning tool. Reduce bounces, improve deliverability, and protect your sender reputation.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free trial available. Pay-as-you-go pricing.',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '200',
        bestRating: '5',
      },
      featureList: [
        'Real-time email verification',
        'Bulk email list cleaning',
        'Syntax validation',
        'Domain & MX record check',
        'Disposable email detection',
        'Role-based email detection',
        'Catch-all email detection',
        'SMTP verification',
      ],
      screenshot: `${baseUrl}/og-image.jpg`,
      creator: {
        '@id': `${baseUrl}/#organization`,
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#295C51" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
