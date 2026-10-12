import type { Metadata } from 'next'
import BulkVerifierL10n from '@/components/l10n/BulkVerifierL10n'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { SIGNUP_URL, itNumber, itUsd } from '@/lib/i18n/it'
import { copy } from '@/lib/i18n/bulkVerifier/it'
import { copy as checker } from '@/lib/i18n/emailChecker/it'

// The bulk email verifier in this language. Same sections and design as the
// English /bulk-email-verifier, rendered by components/l10n/BulkVerifierL10n.tsx.
// The text is in lib/i18n/bulkVerifier/it.tsx.

const PATH = '/it/verifica-email-in-blocco'

export const metadata: Metadata = {
  title: { absolute: `${copy.meta.title} | Giggal.ai` },
  description: copy.meta.description,
  alternates: { canonical: PATH, languages: hreflangAlternates('bulkVerifier') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: copy.meta.title,
    description: copy.meta.description,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: copy.meta.appName }],
  },
  twitter: { card: 'summary_large_image', title: copy.meta.title, description: copy.meta.description },
}

export default function VerificaEmailInBloccoPage() {
  return (
    <BulkVerifierL10n
      locale="it"
      copy={copy}
      signupUrl={SIGNUP_URL}
      checker={checker}
      num={itNumber}
      usd={itUsd}
    />
  )
}
