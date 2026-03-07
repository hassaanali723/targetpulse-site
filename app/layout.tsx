import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const baseUrl = 'https://targetpulse.net'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'TargetPulse - Email Verification Tool & Bulk Email Validator',
    template: '%s | TargetPulse',
  },
  description: 'TargetPulse Email Verifier helps you validate email addresses, clean email lists, reduce bounce rates and improve deliverability. Bulk email verification with real-time results.',
  keywords: [
    // Primary keywords
    'email verifier',
    'email verification tool',
    'bulk email verifier',
    'email validator',
    'email list cleaning',
    'verify email address',
    'email deliverability tool',
    'catch all email check',
    'free email verification tool',
    // Secondary keywords
    'check if email exists',
    'email verification API',
    'verify email list',
    'clean email list',
    'email bounce checker',
    'smtp email verification',
    'real time email verification',
    // Long-tail keywords
    'best email verification tool',
    'bulk email verification service',
    'how to verify email addresses',
    'email list cleaning tool',
    'reduce email bounce rate',
  ],
  authors: [{ name: 'TargetPulse', url: baseUrl }],
  creator: 'TargetPulse',
  publisher: 'TargetPulse',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TargetPulse - Email Verification Tool & Bulk Email Validator',
    description: 'TargetPulse Email Verifier helps you validate email addresses, clean email lists, reduce bounce rates and improve deliverability. Bulk email verification with real-time results.',
    url: baseUrl,
    siteName: 'TargetPulse',
    images: [
      {
        url: '/Targetpulse-email verifier- logo.png',
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
    title: 'TargetPulse - Email Verification Tool & Bulk Email Validator',
    description: 'TargetPulse Email Verifier helps you validate email addresses, clean email lists, reduce bounce rates and improve deliverability. Bulk email verification with real-time results.',
    images: ['/Targetpulse-email verifier- logo.png'],
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
  category: 'technology',
  icons: {
    icon: '/Targetpulse-email verifier- logo.png',
    apple: '/Targetpulse-email verifier- logo.png',
    shortcut: '/Targetpulse-email verifier- logo.png',
  },
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
      sameAs: [
        'https://www.linkedin.com/company/target-pulse/',
        'https://www.youtube.com/@TargetPulseOfficial',
        'https://www.facebook.com/share/1D31DYxZL5/',
        'https://www.instagram.com/targetpulsee',
      ],
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
      screenshot: `${baseUrl}/Targetpulse-email verifier- logo.png`,
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
        <link rel="icon" href="/Targetpulse-email verifier- logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Targetpulse-email verifier- logo.png" />
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
