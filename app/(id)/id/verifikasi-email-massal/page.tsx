import type { Metadata } from 'next'
import BulkVerifierL10n from '@/components/l10n/BulkVerifierL10n'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { SIGNUP_URL, idNumber, idUsd } from '@/lib/i18n/id'
import { copy } from '@/lib/i18n/bulkVerifier/id'
import { copy as checker } from '@/lib/i18n/emailChecker/id'

// The bulk email verifier in Indonesian. Same sections and design as the
// English /bulk-email-verifier, rendered by components/l10n/BulkVerifierL10n.tsx.
// The text is in lib/i18n/bulkVerifier/id.tsx. The planned title
// ("Bulk Email Checker: verifikasi email massal", keyword plan section 2) gets
// the brand suffix only when the full title stays within 64 characters.

const PATH = '/id/verifikasi-email-massal'
const SUFFIX = ' | Giggal.ai'
const TITLE = copy.meta.title.length + SUFFIX.length <= 64 ? `${copy.meta.title}${SUFFIX}` : copy.meta.title

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: copy.meta.description,
  alternates: { canonical: PATH, languages: hreflangAlternates('bulkVerifier') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'id_ID',
    title: copy.meta.title,
    description: copy.meta.description,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: copy.meta.appName }],
  },
  twitter: { card: 'summary_large_image', title: copy.meta.title, description: copy.meta.description },
}

export default function VerifikasiEmailMassalPage() {
  return (
    <BulkVerifierL10n
      locale="id"
      copy={copy}
      signupUrl={SIGNUP_URL}
      checker={checker}
      num={idNumber}
      usd={idUsd}
    />
  )
}
