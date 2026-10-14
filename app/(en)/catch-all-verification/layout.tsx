import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Title and description rebuilt 2026-10-14 from SEO-Plan/29-catch-all-competitor-analysis.md.
// "Verifier" forms (catch all email verifier, catchall email verifier, catch all
// verifier) are ~350 searches a month across US, UK and IN, about 3x the
// "verification" forms, so the title leads with "Catch-All Email Verifier".
const TITLE = 'Catch-All Email Verifier: Verify Catch-All Emails Free'
const DESC =
  'Free catch-all email verifier. Get valid or invalid for catch-all emails, not risky or accept-all. Also verifies emails behind Mimecast and Proofpoint.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: {
    canonical: '/catch-all-verification',
    languages: hreflangAlternates('catchall'),
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai catch-all email verifier' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/catch-all-verification',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

export default function CatchAllLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
