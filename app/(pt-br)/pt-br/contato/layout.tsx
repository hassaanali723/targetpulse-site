import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC = 'Fale com a Giggal.ai para suporte, dúvidas sobre a verificação de e-mail ou volumes sob medida. Normalmente respondemos em menos de 24 horas.'

export const metadata: Metadata = {
  title: { absolute: 'Contato e Suporte de Verificação de E-mail | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/pt-br/contato', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pt_BR',
    title: 'Contato',
    description: DESC,
    url: 'https://giggal.ai/pt-br/contato',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificação de e-mail' }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
