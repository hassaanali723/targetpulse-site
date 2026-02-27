import type { Metadata } from 'next'
import React from 'react'
import Navbar from '@/components/Navbar'
import HomeHeroWithVerification from '@/components/HomeHeroWithVerification'
import HomeFeatureShowcase from '@/components/HomeFeatureShowcase'
import HomeFAQSection from '@/components/HomeFAQSection'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'TargetPulse - Email Verifier & Email List Cleaner',
  description: 'Verify emails in real time and clean your email lists with TargetPulse. Improve deliverability, reduce bounces, and protect your sender reputation.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TargetPulse - Email Verifier & Email List Cleaner',
    description: 'Verify emails in real time and clean your email lists with TargetPulse. Improve deliverability, reduce bounces, and protect your sender reputation.',
    url: 'https://targetpulse.net',
    type: 'website',
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
      name: 'How accurate is TargetPulse email verification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TargetPulse uses multi-layer verification including syntax checks, DNS/MX record validation, and real-time SMTP verification to deliver industry-leading accuracy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I verify emails in bulk?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! TargetPulse supports bulk email list verification. Simply upload your list and get a clean, verified list back with full results.',
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
        text: 'Yes, TargetPulse offers a free trial so you can verify emails and experience the accuracy before committing to a paid plan.',
      },
    },
  ],
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <HomeHeroWithVerification />
      <HomeFeatureShowcase />
      <HomeFAQSection />
      <Footer />
    </main>
  )
}
