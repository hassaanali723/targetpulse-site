import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'Safeguarding Domain Health: Domain Reputation Check & Sender Score Protection'
const DESC =
  'Check and protect your email domain reputation. Monitor sender scores, fix authentication errors with SPF, DKIM, and DMARC, and keep bounce rates below 1%.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: {
    canonical: '/use-cases/safeguarding-domain-health',
    languages: hreflangAlternates('useCaseSafeguardingDomainHealth'),
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/blog/covers/outreach-email-deliverability.webp', width: 1600, height: 840, alt: 'Giggal.ai Domain Health and Reputation Solution' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/use-cases/safeguarding-domain-health',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

export default function SafeguardingDomainHealthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
