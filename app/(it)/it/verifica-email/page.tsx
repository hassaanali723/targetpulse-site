import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbIt, webApplicationIt } from '@/lib/i18n/schemaIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/it'
import { copy } from '@/lib/i18n/emailChecker/it'

// Italian free checker. Primary query "verifica email" (27,000 searches a
// month, KD 0); the page-1 competitors are all single-address tools, and
// their titles promise "gratis", "esiste" and "senza inviare una email", so
// the copy says those things in the first screen. The catch-all resolution
// is the reason to pick this one.

const PATH = '/it/verifica-email'
const DESC =
  'Verifica gratis se un indirizzo email esiste ed è valido, senza inviare nessuna email. Controllo di DNS, esistenza dell\'email e domini catch-all in pochi secondi.'

export const metadata: Metadata = {
  title: { absolute: 'Verifica Email Gratis: Scopri se Esiste | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: 'Verifica Email Gratis: Scopri se Esiste',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
  twitter: { card: 'summary_large_image', title: 'Verifica Email Gratis: Scopri se Esiste', description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/it.tsx. Title, description and H1 stay the ones
// researched for this market.
export default function VerificaEmailPage() {
  return (
    <EmailCheckerL10n
      locale="it"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbIt([{ name: 'Verifica email', path: PATH }])} />
          <JsonLd data={webApplicationIt(PATH, 'Verifica email gratis di Giggal.ai', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
