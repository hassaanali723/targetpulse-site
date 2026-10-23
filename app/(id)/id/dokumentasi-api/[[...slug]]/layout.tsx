import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// The title carries the searched English phrase "email verification API"
// (SEO-Plan/i18n-batch2-id-keyword-plan.md section 2).
const TITLE = 'Email Verification API: dokumentasi REST API'
const DESC =
  'Dokumentasi email verification API: endpoint REST untuk cek satu alamat email, verifikasi email massal, alamat catch-all, kredit, dan hasil verifikasi.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: '/id/dokumentasi-api', languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'id_ID',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifikasi email' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/id/dokumentasi-api',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
