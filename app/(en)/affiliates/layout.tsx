import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Affiliate Program: 20% Recurring on Verification | Giggal.ai' },
  description:
    'Join the Giggal.ai affiliate program: 20% recurring commission on every payment your referrals make, 3-month attribution, monthly payouts, no earnings cap.',
  alternates: {
    canonical: '/affiliates',
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
    title: 'Affiliate Program: 20% Recurring on Verification',
    description:
      'Earn 20% recurring commission for every customer you refer to Giggal.ai. Forever. No caps.',
    url: 'https://giggal.ai/affiliates',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affiliate Program: 20% Recurring on Verification',
    description:
      'Earn 20% recurring commission for every customer you refer to Giggal.ai. Forever. No caps.',
  },
}

export default function AffiliatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
