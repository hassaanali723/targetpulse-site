import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: { absolute: 'Email Verification Pricing: $9.90 per 10k Credits | Giggal.ai' },
  description: 'Email verification pricing from $9.90 per 10,000 credits, $0.0007 per email at volume. Pay as you go or save 10% monthly. Credits never expire. 1,000 free.',
  alternates: {
    canonical: '/pricing',
    languages: hreflangAlternates('pricing'),
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
    title: 'Email Verification Pricing: $9.90 per 10k Credits',
    description: 'Email verification pricing from $9.90 per 10,000 credits. Pay as you go or save 10% monthly. Credits never expire. 1,000 free to start.',
    url: 'https://giggal.ai/pricing',
    type: 'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
