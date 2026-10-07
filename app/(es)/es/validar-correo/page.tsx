import type { Metadata } from 'next'
import EmailCheckerL10n from '@/components/l10n/EmailCheckerL10n'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/es'
import { copy } from '@/lib/i18n/emailChecker/es'

// Spanish free checker, one page for every Spanish-speaking country. Primary
// "validar correo" (PE 1,300 / KD 0, CO 500 / 0, MX 1,300 / 22), with the
// verificar, verificador, validador and comprobar families (plans/10 section
// 2.2). Page 1 is ten single-address tool pages whose titles say "gratis" and
// "gratuitamente"; the copy says so in the first screen and uses both nouns,
// correo and email, because Spain types "email" and Latin America "correo".

const PATH = '/es/validar-correo'
const DESC =
  'Valida y verifica cualquier correo electrónico sin enviar un mensaje: MX, existencia del buzón, catch-all y correos desechables en segundos. Gratis y sin registro.'

export const metadata: Metadata = {
  title: { absolute: 'Validar Correo: Verificador de Email Gratis | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_LA',
    title: 'Validar correo: verificador de email gratis',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai validación de correo' }],
  },
  twitter: { card: 'summary_large_image', title: 'Validar correo: verificador de email gratis', description: DESC },
}

// Same sections and design as the English /email-checker page, rendered by
// components/l10n/EmailCheckerL10n.tsx. The text is in
// lib/i18n/emailChecker/es.tsx. Title, description and H1 stay the ones
// researched for this market.
export default function ValidarCorreoPage() {
  return (
    <EmailCheckerL10n
      locale="es"
      copy={copy}
      signupUrl={SIGNUP_URL}
      consoleStrings={consoleStrings}
      schema={
        <>
          <JsonLd data={breadcrumbL10n('es', [{ name: 'Validar correo', path: PATH }])} />
          <JsonLd data={webApplicationL10n('es', PATH, 'Verificador de correo gratis de Giggal.ai', DESC)} />
          <JsonLd data={faqPageLd(copy.faqs)} />
        </>
      }
    />
  )
}
