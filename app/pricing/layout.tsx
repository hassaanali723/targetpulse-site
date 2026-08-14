import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent email verification pricing. Pay only for what you verify. No monthly fees, no subscriptions. Start free and scale as you grow.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing - Giggal.ai Email Verifier',
    description: 'Simple, transparent email verification pricing. Pay only for what you verify. No monthly fees, no subscriptions.',
    url: 'https://giggal.ai/pricing',
    type: 'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
