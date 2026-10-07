import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/pt-br'
import { copy } from '@/lib/i18n/emailChecker/pt-br'

// Brazilian free checker, one page for Brazil and Portugal. Primary
// "verificação de e-mail" (3,000 / KD 0, no tracked competitor above 10),
// with the verificar, verificador, validador, consultar and confirmar
// families (plans/12 section 2.1). The BR SERP carries account-verification
// intent (Google's own help page at 6), so the first sentence says what this
// page does: it checks whether an address exists and sends nothing.

const PATH = '/pt-br/verificacao-de-email'
const DESC =
  'Verifique se um endereço de e-mail existe e é válido sem enviar mensagem: MX, existência da caixa de e-mail, catch-all e e-mails descartáveis em segundos. Grátis, sem cadastro.'

export const metadata: Metadata = {
  title: { absolute: 'Verificação de E-mail Grátis: Verificador Online | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pt_BR',
    title: 'Verificação de e-mail grátis: verificador de e-mails online',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificação de e-mail' }],
  },
  twitter: { card: 'summary_large_image', title: 'Verificação de e-mail grátis: verificador de e-mails online', description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/pt-br.tsx. Title, description and H1 stay the ones
// researched for this market.
export default function VerificacaoDeEmailPage() {
  return (
    <EmailCheckerL10n
      locale="pt-br"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbL10n('pt-br', [{ name: 'Verificação de e-mail', path: PATH }])} />
          <JsonLd data={webApplicationL10n('pt-br', PATH, 'Verificador de e-mail grátis da Giggal.ai', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
