import type { Metadata } from 'next'
import BulkVerifierL10n from '@/components/l10n/BulkVerifierL10n'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { SIGNUP_URL, nlNumber, nlUsd } from '@/lib/i18n/nl'
import { copy } from '@/lib/i18n/bulkVerifier/nl'
import { copy as checker } from '@/lib/i18n/emailChecker/nl'

// The bulk email verifier in Dutch. Same sections and design as the
// English /bulk-email-verifier, rendered by components/l10n/BulkVerifierL10n.tsx.
// The text is in lib/i18n/bulkVerifier/nl.tsx. The planned title
// ("Bulk email checker: ...") is 55 characters, so the brand suffix is only
// added when the full title stays within 64 characters.

const PATH = '/nl/bulk-e-mailverificatie'
const SUFFIX = ' | Giggal.ai'
const TITLE = copy.meta.title.length + SUFFIX.length <= 64 ? `${copy.meta.title}${SUFFIX}` : copy.meta.title

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: copy.meta.description,
  alternates: { canonical: PATH, languages: hreflangAlternates('bulkVerifier') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'nl_NL',
    title: copy.meta.title,
    description: copy.meta.description,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: copy.meta.appName }],
  },
  twitter: { card: 'summary_large_image', title: copy.meta.title, description: copy.meta.description },
}

export default function BulkEmailverificatiePage() {
  return (
    <BulkVerifierL10n
      locale="nl"
      copy={copy}
      signupUrl={SIGNUP_URL}
      checker={checker}
      num={nlNumber}
      usd={nlUsd}
    />
  )
}
