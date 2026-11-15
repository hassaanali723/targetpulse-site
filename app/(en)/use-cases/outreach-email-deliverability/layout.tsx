import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'Outreach Deliverability: Cold Email Outreach & Inbox Placement'
const DESC =
  'Optimize Outreach.io and sales engagement deliverability. Eliminate catch-all bounces, protect domain reputation, and keep cold sequences in the primary inbox.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: {
    canonical: '/use-cases/outreach-email-deliverability',
    languages: hreflangAlternates('useCaseOutreachDeliverability'),
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/blog/covers/outreach-email-deliverability.webp', width: 1600, height: 840, alt: 'Giggal.ai Outreach Deliverability Guide & Solution' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/use-cases/outreach-email-deliverability',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

export default function OutreachDeliverabilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
