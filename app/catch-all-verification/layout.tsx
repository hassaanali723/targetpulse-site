import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catch-All Email Verification',
  description:
    'Verify catch-all and accept-all email addresses with clear valid or invalid results. Stop guessing on Risky and Unknown labels. 99% accuracy, free to start.',
  keywords: [
    'catch-all email verification',
    'accept-all email verification',
    'verify catch-all emails',
    'catch-all email checker',
    'catch-all domain verifier',
    'how to verify catch-all emails',
    'catch-all email validator',
    'free catch-all verifier',
  ],
  alternates: {
    canonical: '/catch-all-verification',
  },
  openGraph: {
    title: 'Catch-All Email Verification | Giggal.ai',
    description:
      'Verify catch-all and accept-all email addresses with clear valid or invalid results. 99% accuracy, free to start.',
    url: 'https://giggal.ai/catch-all-verification',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catch-All Email Verification | Giggal.ai',
    description:
      'Verify catch-all and accept-all email addresses with clear valid or invalid results. 99% accuracy, free to start.',
  },
}

export default function CatchAllLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
