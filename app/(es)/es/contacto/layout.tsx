import type { Metadata } from 'next'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const DESC = "Contacta con Giggal.ai para soporte, dudas sobre la verificación de correo o volúmenes a medida. Respondemos normalmente en menos de 24 horas."

export const metadata: Metadata = {
  title: { absolute: "Contacto y Soporte de Verificación de Correo | Giggal.ai" },
  description: DESC,
  alternates: { canonical: '/es/contacto', languages: hreflangAlternates('contact') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_LA',
    title: "Contacto",
    description: DESC,
    url: 'https://giggal.ai/es/contacto',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: "Giggal.ai verificación de correo" }],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
