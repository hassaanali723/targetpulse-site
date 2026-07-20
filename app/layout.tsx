import type { Metadata } from 'next'
import Script from 'next/script'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

const baseUrl = 'https://giggal.ai'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Giggal.ai - Free Email Verification for Catch-all Domains',
    template: '%s | Giggal.ai',
  },
  description: 'Free email verifier built for catch-all and accept-all domains with 99% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
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
  authors: [{ name: 'Giggal.ai', url: baseUrl }],
  creator: 'Giggal.ai',
  publisher: 'Giggal.ai',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Giggal.ai - Free Email Verification for Catch-all Domains',
    description: 'Free email verifier built for catch-all and accept-all domains with 99% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
    url: baseUrl,
    siteName: 'Giggal.ai',
    images: [
      {
        url: '/giggal-logo.png',
        width: 1200,
        height: 630,
        alt: 'Giggal.ai Email Verifier',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giggal.ai - Free Email Verification for Catch-all Domains',
    description: 'Free email verifier built for catch-all and accept-all domains with 99% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
    images: ['/giggal-logo.png'],
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
  // Favicon is the Giggal "G." mark at app/icon.svg — Next.js serves it at
  // /icon.svg and injects the <link rel="icon"> automatically. No override needed.
}

// JSON-LD structured data for rich search results (sitelinks, knowledge panel)
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'Giggal.ai',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        // Square logo required by Google for knowledge panel / brand recognition
        url: `${baseUrl}/giggal-logo.png`,
        width: 2000,
        height: 2000,
      },
      sameAs: [
        'https://www.linkedin.com/company/target-pulse/',
        'https://www.youtube.com/@TargetPulseOfficial',
        'https://www.facebook.com/share/1D31DYxZL5/',
        'https://www.instagram.com/targetpulsee',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@giggal.ai',
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
      name: 'Giggal.ai',
      alternateName: ['Giggal.ai Email Verifier', 'Giggal.ai Email Validator'],
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
      '@type': 'SiteNavigationElement',
      '@id': `${baseUrl}/#sitenav`,
      name: [
        'Free Email Verification Tool',
        'Sign up free',
        'Pricing',
        'Earn with Us',
        'Catch-All Verification',
        'Talk to us',
      ],
      url: [
        baseUrl,
        `${baseUrl}/sign-up`,
        `${baseUrl}/pricing`,
        `${baseUrl}/affiliates`,
        `${baseUrl}/catch-all-verification`,
        `${baseUrl}/contact-us`,
      ],
    },
    {
      '@type': 'ItemList',
      '@id': `${baseUrl}/#mainpages`,
      name: 'Main Pages',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Free Email Verification Tool',
          url: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Sign up free',
          url: `${baseUrl}/sign-up`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Pricing',
          url: `${baseUrl}/pricing`,
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Earn with Us',
          url: `${baseUrl}/affiliates`,
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Catch-All Verification',
          url: `${baseUrl}/catch-all-verification`,
        },
        {
          '@type': 'ListItem',
          position: 6,
          name: 'Talk to us',
          url: `${baseUrl}/contact-us`,
        },
      ],
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${baseUrl}/#software`,
      name: 'Giggal.ai Email Verifier',
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
      screenshot: `${baseUrl}/giggal-logo.png`,
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
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <meta name="theme-color" content="#4f46e5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wx383m5xrf");
          `}
        </Script>
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
