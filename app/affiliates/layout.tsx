import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Earn with Us — Affiliate Program',
  description:
    'Join the TargetPulse affiliate program and earn 20% recurring commission on every payment your referrals make. 3-month attribution window, monthly payouts via PayPal or Wise, no earnings cap. Free to join.',
  keywords: [
    'targetpulse affiliate program',
    'email verification affiliate',
    'recurring commission email tool',
    'earn with targetpulse',
    'refer and earn email verifier',
    'saas affiliate program',
  ],
  alternates: {
    canonical: '/affiliates',
  },
  openGraph: {
    title: 'Earn with Us — TargetPulse Affiliate Program',
    description:
      'Earn 20% recurring commission for every customer you refer to TargetPulse. Forever. No caps.',
    url: 'https://targetpulse.net/affiliates',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earn with Us — TargetPulse Affiliate Program',
    description:
      'Earn 20% recurring commission for every customer you refer to TargetPulse. Forever. No caps.',
  },
}

export default function AffiliatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
