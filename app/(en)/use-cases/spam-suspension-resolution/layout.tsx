import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'Email Blacklist & Spam Suspension Recovery: Delisting Guide'
const DESC =
  'Recover from Spamhaus blocklists and Google Workspace spam suspensions. Follow a step-by-step email delisting playbook and verify prospect lists to stay off blacklists.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: {
    canonical: '/use-cases/spam-suspension-resolution',
    languages: hreflangAlternates('useCaseSpamSuspensionResolution'),
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/blog/covers/outreach-email-deliverability.webp', width: 1600, height: 840, alt: 'Giggal.ai Email Blacklist and Spam Suspension Recovery Guide' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/use-cases/spam-suspension-resolution',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

export default function SpamSuspensionResolutionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
