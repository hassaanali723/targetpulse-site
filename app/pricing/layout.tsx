import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, affordable email verification pricing. Pay only for what you verify. No monthly fees, no subscriptions. Start free and scale as you grow.',
  keywords: [
    'email verification pricing',
    'email verifier cost',
    'bulk email verification pricing',
    'cheap email verification',
    'pay as you go email verification',
    'email validation pricing',
  ],
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing - TargetPulse Email Verifier',
    description: 'Simple, affordable email verification pricing. Pay only for what you verify. No monthly fees, no subscriptions.',
    url: 'https://targetpulse.net/pricing',
    type: 'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
