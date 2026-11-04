import type { Metadata } from 'next'
import BulkVerifierL10n from '@/components/l10n/BulkVerifierL10n'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { SIGNUP_URL, koNumber, koUsd } from '@/lib/i18n/ko'
import { copy } from '@/lib/i18n/bulkVerifier/ko'
import { copy as checker } from '@/lib/i18n/emailChecker/ko'

// The bulk email verifier in Korean. Same sections and design as the
// English /bulk-email-verifier, rendered by components/l10n/BulkVerifierL10n.tsx.
// The text is in lib/i18n/bulkVerifier/ko.tsx. The title
// (native term plus the English one, keyword plan section 1) gets
// the brand suffix only when the full title stays within 64 characters.

const PATH = '/ko/bulk-email-verifier'
const SUFFIX = ' | Giggal.ai'
const TITLE = copy.meta.title.length + SUFFIX.length <= 64 ? `${copy.meta.title}${SUFFIX}` : copy.meta.title

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: copy.meta.description,
  alternates: { canonical: PATH, languages: hreflangAlternates('bulkVerifier') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'ko_KR',
    title: copy.meta.title,
    description: copy.meta.description,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: copy.meta.appName }],
  },
  twitter: { card: 'summary_large_image', title: copy.meta.title, description: copy.meta.description },
}

export default function BulkEmailVerifierKoPage() {
  return (
    <BulkVerifierL10n
      locale="ko"
      copy={copy}
      signupUrl={SIGNUP_URL}
      checker={checker}
      num={koNumber}
      usd={koUsd}
    />
  )
}
