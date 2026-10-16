import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/pt-br/documentacao-api'

export const metadata: Metadata = {
  title: { absolute: 'API de verificação de e-mail: referência REST e JSON | Giggal.ai' },
  description:
    'Referência da API de verificação de e-mail: endpoints REST para verificar e-mails individuais e em massa, catch-all, créditos e resultados, com exemplos JSON.',
  alternates: { canonical: PATH, languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'pt_BR',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificação de e-mail' }],
    title: 'API de verificação de e-mail: referência REST e JSON',
    description:
      'Integre a verificação de e-mail da Giggal.ai ao seu produto. API REST para verificar e-mails individuais e em massa, catch-all, créditos e resultados.',
    url: `https://giggal.ai${PATH}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'API de verificação de e-mail: referência REST e JSON',
    description:
      'Integre a verificação de e-mail da Giggal.ai ao seu produto. API REST para verificar e-mails individuais e em massa, com verificação catch-all.',
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
