import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const TITLE = 'CRM Data Cleaning & Email Hygiene for HubSpot and Salesforce'
const DESC =
  'Keep your CRM database accurate and deliverable. Clean bad CRM data, verify HubSpot and Salesforce email lists, resolve catch-all contacts, and cut wasted bounce costs.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: {
    canonical: '/use-cases/crm-data-cleaning',
    languages: hreflangAlternates('useCaseCrmDataCleaning'),
  },
  openGraph: {
    siteName: 'Giggal.ai',
    images: [{ url: '/blog/covers/outreach-email-deliverability.webp', width: 1600, height: 840, alt: 'Giggal.ai CRM Data Cleaning and Email Hygiene' }],
    title: TITLE,
    description: DESC,
    url: 'https://giggal.ai/use-cases/crm-data-cleaning',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

export default function CrmDataCleaningLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
