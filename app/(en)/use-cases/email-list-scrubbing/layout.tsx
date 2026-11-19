import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'Email List Scrubbing & Hygiene Services: Cut Costs & Spam'
const DESC =
  'Scrub invalid contacts, spam traps, and dead mailboxes from your lists. Lower your Klaviyo and Mailchimp billing tiers while boosting campaign open rates.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: {
    canonical: '/use-cases/email-list-scrubbing',
    languages: hreflangAlternates('useCaseEmailListScrubbing'),
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/blog/covers/outreach-email-deliverability.webp', width: 1600, height: 840, alt: 'Giggal.ai Email List Scrubbing and Hygiene Services' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/use-cases/email-list-scrubbing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

export default function EmailListScrubbingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
