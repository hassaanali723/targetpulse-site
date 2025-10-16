import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TargetPulse - Professional Cold Email Marketing Services',
  description: 'Transform your outreach with TargetPulse. We deliver high-converting cold email campaigns that drive real results. Expert email marketing strategies, portfolio of successful campaigns, and proven processes.',
  keywords: 'cold email marketing, email outreach, B2B email campaigns, lead generation, email marketing services, sales outreach, business development, email automation',
  authors: [{ name: 'TargetPulse' }],
  creator: 'TargetPulse',
  publisher: 'TargetPulse',
  metadataBase: new URL('https://targetpulse.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TargetPulse - Professional Cold Email Marketing Services',
    description: 'Transform your outreach with expert cold email marketing campaigns that drive real results.',
    url: 'https://targetpulse.com',
    siteName: 'TargetPulse',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TargetPulse - Cold Email Marketing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TargetPulse - Professional Cold Email Marketing Services',
    description: 'Transform your outreach with expert cold email marketing campaigns that drive real results.',
    images: ['/og-image.jpg'],
    creator: '@targetpulse',
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
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

