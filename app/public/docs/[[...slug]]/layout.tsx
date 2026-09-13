import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Email Verification API Reference (REST, JSON) | Giggal.ai' },
  description:
    'Email verification API reference: REST endpoints for single and bulk verification, catch-all resolution, credits and results, with JSON examples. API key auth.',
  alternates: { canonical: '/public/docs' },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai email verification' }],
    title: 'Email Verification API Reference (REST, JSON)',
    description:
      'Integrate Giggal.ai email verification into your product. REST API for single and bulk verification, catch-all detection, credits, and results.',
    url: 'https://giggal.ai/public/docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Email Verification API Reference (REST, JSON)',
    description:
      'Integrate Giggal.ai email verification into your product. REST API for single and bulk verification, catch-all detection.',
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
