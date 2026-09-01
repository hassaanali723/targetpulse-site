import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import DeferredAnalytics from '@/components/DeferredAnalytics'

// Primary UI typeface — used by the hero H1 (the LCP element), so it is the
// one we preload (next/font default) and keep on the critical path.
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'optional',
  variable: '--font-jakarta',
})

// Mono now appears in the hero verifier (above the fold), so preload it
// alongside the primary face. With display:'optional' + no preload it kept
// missing its ~100ms block window and rendering in the fallback mono for the
// whole pageview, which read as the font "loading weirdly." Preloading puts it
// on the critical path so email/code snippets show the right face from paint.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'optional',
  preload: true,
  variable: '--font-jetbrains-mono',
})

const baseUrl = 'https://giggal.ai'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Giggal.ai - Free Email Verification for Catch-all Domains',
    template: '%s | Giggal.ai',
  },
  description: 'Free email verifier built for catch-all and accept-all domains with 98.5% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
  authors: [{ name: 'Giggal.ai', url: baseUrl }],
  creator: 'Giggal.ai',
  publisher: 'Giggal.ai',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Giggal.ai - Free Email Verification for Catch-all Domains',
    description: 'Free email verifier built for catch-all and accept-all domains with 98.5% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
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
    // title/description are intentionally NOT set here. Next.js falls back
    // twitter.title/description -> openGraph.title/description, so each page's
    // Twitter card derives from its own og values instead of every page
    // inheriting the homepage's twitter copy.
    images: ['/giggal-logo.png'],
    // Add `creator` and `site` handles once Giggal.ai has an X/Twitter account.
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
  // public/manifest.json existed but nothing referenced it, so it was never
  // fetched. Declaring it here is what makes the install metadata real.
  manifest: '/manifest.json',
  // Favicons come from the official brand mark (public/giggal-catch-all-email-
  // verifier-icon.png), exported as app/icon.png (tab icon), app/apple-icon.png
  // (iOS home screen) and app/favicon.ico (legacy /favicon.ico requests).
  // Next.js serves and <link>s all three automatically by filename convention.
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
        url: `${baseUrl}/giggal-logo.png`,
      },
      description:
        'Email verification tool that verifies catch-all, risky and SEG-protected addresses with a clear valid or invalid result.',
      alternateName: ['Giggal', 'Giggal AI'],
      // Topical association. These are the subjects Giggal should be considered
      // an authority on, and the phrasing matches how people actually ask.
      knowsAbout: [
        'Catch-all email verification',
        'Accept-all email verification',
        'SEG-protected email verification',
        'Email deliverability',
        'Bounce rate reduction',
        'Email list cleaning',
        'B2B email validation',
      ],
      // Every profile that carries the Giggal name. The review and directory
      // listings matter more than the social ones here: they are the only
      // third-party corroboration an answer engine has that Giggal is a real
      // product, so they go first.
      //
      // The Trustpilot entry is a plain profile URL. It is not review content
      // and carries no rating, so it does not run into the same Legal Brand
      // Guidelines restriction that keeps Trustpilot quotes out of ReviewWall.
      sameAs: [
        'https://www.g2.com/products/giggal/reviews',
        'https://www.trustpilot.com/review/giggal.ai',
        'https://sourceforge.net/software/product/Giggal.ai/',
        'https://www.producthunt.com/products/giggal-ai',
        'https://glama.ai/mcp/servers/giggal-ai/giggal-mcp',
        'https://www.linkedin.com/company/giggal-ai/',
        'https://www.youtube.com/@giggal-ai',
        'https://www.facebook.com/share/1D31DYxZL5/',
        'https://www.instagram.com/giggal.ai',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        url: `${baseUrl}/contact-us`,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Giggal.ai',
      // This node is what Google reads to decide the site name shown above a
      // result, in place of the bare domain. Its docs specify a SINGLE
      // alternateName; an array here is non-standard and risks the whole
      // property being ignored, so the fallback is one plain string.
      alternateName: 'Giggal',
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
        {/* Warm up TCP/TLS to the third-party analytics origins so their
            scripts don't stall the main thread during the LCP window. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://scripts.clarity.ms" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* GA4 + Microsoft Clarity are loaded on first user interaction (see
            DeferredAnalytics) so their ~800 ms of main-thread work never lands on
            the LCP critical path. The preconnect hints above keep the eventual
            load fast. */}
        <DeferredAnalytics />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
