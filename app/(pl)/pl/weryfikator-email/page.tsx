import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/pl'
import { copy } from '@/lib/i18n/emailChecker/pl'

// Polish free checker. Head term "weryfikator email" (80 / KD 0), title term
// "sprawdzanie adresu email" (60 / KD 0), H1 "sprawdź czy mail istnieje"
// (70 / KD 0), with "weryfikacja adresu email" and the loan term "email
// checker" in the copy (keyword plan sections 2 to 4). The existence-question
// family has its own child page, /pl/weryfikator-email/jak-sprawdzic-czy-mail-istnieje.

const PATH = '/pl/weryfikator-email'
const DESC =
  'Sprawdź, czy mail istnieje, bez wysyłania wiadomości. Weryfikator email sprawdza format, rekordy MX, skrzynkę, catch-all i adresy jednorazowe. Za darmo.'

export const metadata: Metadata = {
  title: { absolute: 'Weryfikator email: sprawdzanie adresu email za darmo | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pl_PL',
    title: 'Weryfikator email: sprawdź, czy mail istnieje',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai weryfikacja e-mail' }],
  },
  twitter: { card: 'summary_large_image', title: 'Weryfikator email: sprawdź, czy mail istnieje', description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/pl.tsx. Title, description and H1 stay the ones
// researched for this market.
export default function WeryfikatorEmailPage() {
  return (
    <EmailCheckerL10n
      locale="pl"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbL10n('pl', [{ name: 'Weryfikator email', path: PATH }])} />
          <JsonLd data={webApplicationL10n('pl', PATH, 'Darmowy weryfikator email Giggal.ai', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
