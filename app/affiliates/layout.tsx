import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Earn with Us — Affiliate Program',
  description:
    'Join the Giggal.ai affiliate program and earn 20% recurring commission on every payment your referrals make. 3-month attribution window, monthly payouts via PayPal or Wise, no earnings cap. Free to join.',
  alternates: {
    canonical: '/affiliates',
  },
  openGraph: {
    title: 'Earn with Us — Giggal.ai Affiliate Program',
    description:
      'Earn 20% recurring commission for every customer you refer to Giggal.ai. Forever. No caps.',
    url: 'https://giggal.ai/affiliates',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earn with Us — Giggal.ai Affiliate Program',
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
