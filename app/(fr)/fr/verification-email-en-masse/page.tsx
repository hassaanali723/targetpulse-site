import type { Metadata } from 'next'
import BulkVerifierL10n from '@/components/l10n/BulkVerifierL10n'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { SIGNUP_URL, frNumber, frUsd } from '@/lib/i18n/fr'
import { copy } from '@/lib/i18n/bulkVerifier/fr'
import { copy as checker } from '@/lib/i18n/emailChecker/fr'

// The bulk email verifier in this language. Same sections and design as the
// English /bulk-email-verifier, rendered by components/l10n/BulkVerifierL10n.tsx.
// The text is in lib/i18n/bulkVerifier/fr.tsx.

const PATH = '/fr/verification-email-en-masse'

export const metadata: Metadata = {
  title: { absolute: `${copy.meta.title} | Giggal.ai` },
  description: copy.meta.description,
  alternates: { canonical: PATH, languages: hreflangAlternates('bulkVerifier') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    title: copy.meta.title,
    description: copy.meta.description,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: copy.meta.appName }],
  },
  twitter: { card: 'summary_large_image', title: copy.meta.title, description: copy.meta.description },
}

export default function VerificationEmailEnMassePage() {
  return (
    <BulkVerifierL10n
      locale="fr"
      copy={copy}
      signupUrl={SIGNUP_URL}
      checker={checker}
      num={frNumber}
      usd={frUsd}
    />
  )
}
