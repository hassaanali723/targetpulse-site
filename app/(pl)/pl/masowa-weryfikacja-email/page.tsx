import type { Metadata } from 'next'
import BulkVerifierL10n from '@/components/l10n/BulkVerifierL10n'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { SIGNUP_URL, plNumber, plUsd } from '@/lib/i18n/pl'
import { copy } from '@/lib/i18n/bulkVerifier/pl'
import { copy as checker } from '@/lib/i18n/emailChecker/pl'

// The bulk email verifier in this language. Same sections and design as the
// English /bulk-email-verifier, rendered by components/l10n/BulkVerifierL10n.tsx.
// The text is in lib/i18n/bulkVerifier/pl.tsx.

const PATH = '/pl/masowa-weryfikacja-email'
// The keyword-plan title (55 characters) plus " | Giggal.ai" would pass the
// 64-character limit, so the brand suffix is added only when it fits.
const TITLE = copy.meta.title.length + 12 <= 64 ? `${copy.meta.title} | Giggal.ai` : copy.meta.title

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: copy.meta.description,
  alternates: { canonical: PATH, languages: hreflangAlternates('bulkVerifier') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pl_PL',
    title: copy.meta.title,
    description: copy.meta.description,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: copy.meta.appName }],
  },
  twitter: { card: 'summary_large_image', title: copy.meta.title, description: copy.meta.description },
}

export default function MasowaWeryfikacjaEmailPage() {
  return (
    <BulkVerifierL10n
      locale="pl"
      copy={copy}
      signupUrl={SIGNUP_URL}
      checker={checker}
      num={plNumber}
      usd={plUsd}
    />
  )
}
