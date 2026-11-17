import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'Email Warmup & SDR Onboarding Deliverability'
const DESC =
  'Warm up new email domains and onboard SDR mailboxes without landing in spam. Follow a safe 4-week ramp schedule and verify prospect lists before sending.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: {
    canonical: '/use-cases/email-warmup-deliverability',
    languages: hreflangAlternates('useCaseEmailWarmupDeliverability'),
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/blog/covers/outreach-email-deliverability.webp', width: 1600, height: 840, alt: 'Giggal.ai Email Warmup and SDR Onboarding Deliverability' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/use-cases/email-warmup-deliverability',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

export default function EmailWarmupDeliverabilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
