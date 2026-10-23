import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/id'
import { copy } from '@/lib/i18n/emailChecker/id'

// Indonesian free checker. Head term "cek email valid" (900 a month, its own
// parent topic) in the title, with the loan term "email checker online"
// (SEO-Plan/i18n-batch2-id-keyword-plan.md sections 1 and 2). The H1 "Cek
// email valid atau tidak" lives in lib/i18n/emailChecker/id.tsx. The "is this
// address still active" questions have their own child page,
// /id/cek-email-valid/cara-cek-email-aktif.

const PATH = '/id/cek-email-valid'
const TITLE = 'Cek Email Valid Gratis: email checker online'
const DESC =
  'Cek email valid atau tidak secara gratis, tanpa mengirim email. Email checker online ini mengecek format, MX record, mailbox, catch-all, dan email sementara.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'id_ID',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifikasi email' }],
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/id.tsx. Title, description and H1 stay the ones
// researched for this market.
export default function CekEmailValidPage() {
  return (
    <EmailCheckerL10n
      locale="id"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbL10n('id', [{ name: 'Cek email valid', path: PATH }])} />
          <JsonLd data={webApplicationL10n('id', PATH, 'Email checker gratis dari Giggal.ai', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
