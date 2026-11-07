import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/tr'
import { copy } from '@/lib/i18n/emailChecker/tr'

// Turkish free checker. Final keyword plan (SEO-Plan/i18n-batch5-tr-keyword-plan.md,
// Ahrefs Turkey 2026-11-07): head term "mail adresi doğrulama" in the title and
// H1, with "email checker" (1,400/mo) in the title, and "mail adresi
// sorgulama", "mail doğrulama" and "mail kontrol" in the description, intro
// and FAQ. The H1 lives in lib/i18n/emailChecker/tr.tsx. The "is this address valid"
// questions have their own child page,
// /tr/mail-adresi-dogrulama/mail-adresi-gecerli-mi. The page never
// frames the tool as finding the reader's own address and never claims leak
// checks (sızıntı kontrolü).
//
// The title gets the brand suffix only when the full title stays within 64
// characters.

const PATH = '/tr/mail-adresi-dogrulama'
const TITLE = 'Mail adresi doğrulama: ücretsiz email checker'
const SUFFIX = ' | Giggal.ai'
const FULL_TITLE = TITLE.length + SUFFIX.length <= 64 ? `${TITLE}${SUFFIX}` : TITLE
const DESC =
  'Ücretsiz mail adresi doğrulama ve sorgulama. Email checker, mail göndermeden biçimi, MX kaydını ve posta kutusunu kontrol eder. Catch-all dahil, kayıt yok.'

export const metadata: Metadata = {
  title: { absolute: FULL_TITLE },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'tr_TR',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai mail adresi doğrulama' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/tr.tsx. Title, description and H1 stay the ones
// planned for this market.
export default function EpostaAdresiDogrulamaPage() {
  return (
    <EmailCheckerL10n
      locale="tr"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbL10n('tr', [{ name: 'Mail adresi doğrulama', path: PATH }])} />
          <JsonLd data={webApplicationL10n('tr', PATH, 'Giggal.ai ücretsiz mail adresi doğrulama aracı (email checker)', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
