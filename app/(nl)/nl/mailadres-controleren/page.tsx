import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/nl'
import { copy } from '@/lib/i18n/emailChecker/nl'

// Dutch free checker, one page for the Netherlands and Flanders. Head term
// "mailadres controleren" with "op echtheid" in the title and H1, and the
// loan term "email checker" in the title (SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md
// sections 3 and 4). Dutch has no child page: the existence questions
// ("bestaat dit e-mailadres", beschikbaarheid) are answered in the FAQ.
// The title carries no brand suffix so the planned title stays within 64 characters.

const PATH = '/nl/mailadres-controleren'
const DESC =
  'Mailadres controleren op echtheid: zie gratis of een e-mailadres bestaat, zonder een mail te sturen. Met controle van MX, mailbox, catch-all en wegwerpadres.'

export const metadata: Metadata = {
  title: { absolute: 'Email checker: mailadres gratis controleren op echtheid' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'nl_NL',
    title: 'Mailadres gratis controleren op echtheid',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-mailverificatie' }],
  },
  twitter: { card: 'summary_large_image', title: 'Mailadres gratis controleren op echtheid', description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/nl.tsx. Title, description and H1 stay the ones
// researched for this market.
export default function MailadresControlerenPage() {
  return (
    <EmailCheckerL10n
      locale="nl"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbL10n('nl', [{ name: 'Mailadres controleren', path: PATH }])} />
          <JsonLd data={webApplicationL10n('nl', PATH, 'Gratis email checker van Giggal.ai', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
