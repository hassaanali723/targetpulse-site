import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/es/documentacion-api'

export const metadata: Metadata = {
  title: { absolute: 'API para validar correos: referencia REST y JSON | Giggal.ai' },
  description:
    'Referencia de la API de verificación de correo: endpoints REST para verificar correos uno a uno y en bloque, catch-all, créditos y resultados, con ejemplos JSON.',
  alternates: { canonical: PATH, languages: hreflangAlternates('apiDocs') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_ES',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificación de correo' }],
    title: 'API para validar correos: referencia REST y JSON',
    description:
      'Integra la verificación de correo de Giggal.ai en tu producto. API REST para verificar correos uno a uno y en bloque, catch-all, créditos y resultados.',
    url: `https://giggal.ai${PATH}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'API para validar correos: referencia REST y JSON',
    description:
      'Integra la verificación de correo de Giggal.ai en tu producto. API REST para verificar correos uno a uno y en bloque, con detección de catch-all.',
  },
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return children
}
