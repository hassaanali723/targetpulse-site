import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Giggal.ai API Reference | Email Verification API',
  description:
    'Integrate Giggal.ai email verification into your product. REST API for single and bulk verification, catch-all detection, credits, and results. Auth via API key.',
  keywords: [
    'email verification API',
    'catch-all email API',
    'bulk email verification API',
    'email validator API',
    'giggal.ai API',
    'developer API email',
    'REST email verification',
  ],
  alternates: { canonical: '/public/docs' },
  openGraph: {
    title: 'Giggal.ai API Reference | Email Verification API',
    description:
      'Integrate Giggal.ai email verification into your product. REST API for single and bulk verification, catch-all detection, credits, and results.',
    url: 'https://giggal.ai/public/docs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Giggal.ai API Reference | Email Verification API',
    description:
      'Integrate Giggal.ai email verification into your product. REST API for single and bulk verification, catch-all detection.',
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
