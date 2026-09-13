import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Catch-All Email Verification: Valid, Not Risky | Giggal.ai' },
  description:
    'Catch-all email verification that returns valid or invalid for accept-all domains, including mailboxes behind Mimecast and Proofpoint. 98.5% accuracy.',
  alternates: {
    canonical: '/catch-all-verification',
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
    title: 'Catch-All Email Verification: Valid, Not Risky',
    description:
      'Catch-all email verification that returns valid or invalid for accept-all domains, including mailboxes behind Mimecast and Proofpoint. 98.5% accuracy.',
    url: 'https://giggal.ai/catch-all-verification',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catch-All Email Verification: Valid, Not Risky',
    description:
      'Catch-all email verification that returns valid or invalid for accept-all domains, including mailboxes behind Mimecast and Proofpoint. 98.5% accuracy.',
  },
}

export default function CatchAllLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
