import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/fr'
import { copy } from '@/lib/i18n/emailChecker/fr'

// French free checker, one page for every French-speaking country. Primary
// "verifier adresse mail" in its three spellings (3,800 / KD 0 to 4), with the
// test, vérification, vérificateur and validity families and the fraud family
// that is France's own (plans/12 section 2.2). Two sections are written for
// the market rather than translated: the test walk-through and the fraud
// section, which claims only what the result panel returns (plans/12 3.2.1).
// French punctuation keeps a no-break space before ":", "?" and "!".

const PATH = '/fr/verifier-adresse-mail'
const DESC =
  'Vérifiez si une adresse mail existe et est valide, sans envoyer de message : MX, existence de la boîte mail, catch-all et adresses jetables. Gratuit, sans inscription.'

export const metadata: Metadata = {
  title: { absolute: "Vérifier une Adresse Mail : Testeur d'Email Gratuit | Giggal.ai" },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    title: 'Vérifier une adresse mail gratuitement',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai vérification d’email' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vérifier une adresse mail gratuitement', description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/fr.tsx. Title, description and H1 stay the ones
// researched for this market.
export default function VerifierAdresseMailPage() {
  return (
    <EmailCheckerL10n
      locale="fr"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbL10n('fr', [{ name: 'Vérifier une adresse mail', path: PATH }])} />
          <JsonLd data={webApplicationL10n('fr', PATH, 'Vérificateur d’email gratuit de Giggal.ai', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
