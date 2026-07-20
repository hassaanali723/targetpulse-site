import type { Metadata } from 'next'

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Giggal.ai Email Verifier',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description: 'Start verifying emails for free with 1,000 trial credits. Flexible pay-as-you-go pricing with volume discounts. No monthly commitments required.',
  url: 'https://giggal.ai',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '7.50',
    highPrice: '1250.00',
    priceCurrency: 'USD',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      priceCurrency: 'USD',
      referenceQuantity: {
        '@type': 'QuantitativeValue',
        value: '1',
        unitText: 'email verification',
      },
    },
    offerCount: '9',
    availability: 'https://schema.org/InStock',
    url: 'https://giggal.ai/pricing',
    seller: {
      '@type': 'Organization',
      name: 'Giggal.ai',
    },
  },
  featureList: [
    'Bulk email verification',
    'Real-time email validation',
    'Catch-all detection',
    'Pay-as-you-go pricing',
    'No credit expiration',
    'Free email verification trial',
    'Free credits for email verification'
  ],
}

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, affordable email verification pricing. Pay only for what you verify. No monthly fees, no subscriptions. Start free and scale as you grow.',
  keywords: [
    'email verification pricing',
    'email verifier cost',
    'bulk email verification pricing',
    'free email verification tool',
    'email verification service',
    'bulk email verifier',
    'email validation pricing',
  ],
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing - Giggal.ai Email Verifier',
    description: 'Simple, affordable email verification pricing. Pay only for what you verify. No monthly fees, no subscriptions.',
    url: 'https://giggal.ai/pricing',
    type: 'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />
      {children}
    </>
  )
}
