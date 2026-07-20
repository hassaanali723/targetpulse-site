import type { Metadata } from 'next'
import React from 'react'
import Navbar from '@/components/Navbar'
import HomeHeroWithVerification from '@/components/HomeHeroWithVerification'
import HomeCatchAllSection from '@/components/HomeCatchAllSection'
import HomeFeatureShowcase from '@/components/HomeFeatureShowcase'
import HomeFAQSection from '@/components/HomeFAQSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    absolute: 'Giggal.ai - Free Email Verification for Catch-all Domains',
  },
  description:
    'Free email verifier built for catch-all and accept-all domains with 99% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
  keywords: [
    // Catch-all positioning (primary niche)
    'catch-all email verification',
    'accept-all email verification',
    'verify catch-all emails',
    'catch-all domain checker',
    'free catch-all email verifier',
    // Core verification keywords
    'email verifier',
    'email verification tool',
    'bulk email verifier',
    'email validator',
    'verify email address',
    'email list cleaning',
    'free email verification tool',
    'real time email verification',
    'best email verification tool',
    // Outcome keywords
    'reduce email bounce rate',
    'improve email deliverability',
    'sender reputation tool',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Giggal.ai - Free Email Verification for Catch-all Domains',
    description:
      'Free email verifier built for catch-all and accept-all domains with 99% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
    url: 'https://giggal.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giggal.ai - Free Email Verification for Catch-all Domains',
    description:
      'Free email verifier built for catch-all and accept-all domains with 99% accuracy. Clean your list, cut bounces, and protect your sender reputation.',
  },
}

// FAQ structured data for rich results in Google
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is email verification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Email verification is the process of checking whether an email address is valid, deliverable, and safe to send to. It checks syntax, domain records, and mailbox existence without actually sending an email.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is Giggal.ai email verification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Giggal.ai uses multi-layer verification including syntax checks, DNS/MX record validation, and real-time SMTP verification to deliver industry-leading accuracy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I verify emails in bulk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Giggal.ai supports bulk email list verification. Simply upload your list and get a clean, verified list back with full results.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does email verification improve deliverability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By removing invalid, fake, and undeliverable emails from your list before sending, you reduce bounce rates, avoid spam traps, and protect your sender reputation — leading to better inbox placement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a free trial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Giggal.ai offers a free trial so you can verify emails and experience the accuracy before committing to a paid plan.',
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <HomeHeroWithVerification />
      <HomeCatchAllSection />
      <HomeFeatureShowcase />
      <HomeFAQSection />
      <Footer />
    </main>
  )
}
