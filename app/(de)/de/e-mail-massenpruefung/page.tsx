import type { Metadata } from 'next'
import BulkVerifierL10n from '@/components/l10n/BulkVerifierL10n'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { SIGNUP_URL, deNumber, deUsd } from '@/lib/i18n/de'
import { copy } from '@/lib/i18n/bulkVerifier/de'
import { copy as checker } from '@/lib/i18n/emailChecker/de'

// The bulk email verifier in this language. Same sections and design as the
// English /bulk-email-verifier, rendered by components/l10n/BulkVerifierL10n.tsx.
// The text is in lib/i18n/bulkVerifier/de.tsx.

const PATH = '/de/e-mail-massenpruefung'

export const metadata: Metadata = {
  title: { absolute: `${copy.meta.title} | Giggal.ai` },
  description: copy.meta.description,
  alternates: { canonical: PATH, languages: hreflangAlternates('bulkVerifier') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: copy.meta.title,
    description: copy.meta.description,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: copy.meta.appName }],
  },
  twitter: { card: 'summary_large_image', title: copy.meta.title, description: copy.meta.description },
}

export default function EmailMassenpruefungPage() {
  return (
    <BulkVerifierL10n
      locale="de"
      copy={copy}
      signupUrl={SIGNUP_URL}
      checker={checker}
      num={deNumber}
      usd={deUsd}
    />
  )
}
