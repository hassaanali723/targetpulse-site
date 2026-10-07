import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/de'
import { copy } from '@/lib/i18n/emailChecker/de'

// German free checker. Primary query "email adresse prüfen" (2,300 searches a
// month, KD 2), with "email prüfen" 1,600, "mail adresse prüfen" 1,000,
// "email überprüfen" 600 and the rest of the prüfen family (plans/10 section
// 2.1). Page 1 is single-address tool pages whose titles say "kostenlos" and
// "gültig"; the BSI's provider-security test also sits on page 1, so the
// first sentence says what this page does and does not do.

const PATH = '/de/email-adresse-pruefen'
const DESC =
  'E-Mail-Adresse prüfen, ohne eine Mail zu senden: MX-Einträge, Postfachprüfung, Catch-all und Wegwerf-Domains in Sekunden. Kostenloser E-Mail-Prüfer ohne Anmeldung.'

export const metadata: Metadata = {
  title: { absolute: 'E-Mail-Adresse prüfen: Kostenloser E-Mail-Checker | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: 'E-Mail-Adresse prüfen: Kostenloser E-Mail-Checker',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai E-Mail-Prüfung' }],
  },
  twitter: { card: 'summary_large_image', title: 'E-Mail-Adresse prüfen: Kostenloser E-Mail-Checker', description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/de.tsx. Title, description and H1 stay the ones
// researched for this market.
export default function EmailAdressePruefenPage() {
  return (
    <EmailCheckerL10n
      locale="de"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbL10n('de', [{ name: 'E-Mail-Adresse prüfen', path: PATH }])} />
          <JsonLd data={webApplicationL10n('de', PATH, 'Kostenloser E-Mail-Prüfer von Giggal.ai', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
