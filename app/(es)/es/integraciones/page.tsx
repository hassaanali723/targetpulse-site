import type { Metadata } from 'next'
import IntegrationsPageL10n, { type IntegrationsContent } from '@/components/l10n/IntegrationsPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/es/integraciones'
const DESC = "Integraciones para la verificación de correo: Zapier, n8n, HubSpot, Mailchimp y Google Sheets. Verifica direcciones en las herramientas que ya usas, sin código."

export const metadata: Metadata = {
  title: { absolute: "Integraciones: Zapier, n8n y CRM para Validar Correo | Giggal.ai" },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('integrations') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_LA',
    title: "Integraciones para la verificación de correo",
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: "Giggal.ai verificación de correo" }],
  },
}

const content: IntegrationsContent = {
  "path": "/es/integraciones",
  "crumb": "Integraciones",
  "h1Lead": "Verificación de correo en las",
  "h1Accent": "herramientas que ya usas",
  "intro": "Conecta el verificador catch-all de Giggal.ai a tu plataforma de email marketing, al CRM, a las hojas de cálculo y a las herramientas de outreach. Verifica los contactos nuevos en tiempo real, mantén las listas limpias en automático y frena los rebotes antes de que ocurran.",
  "routes": [
    {
      "title": "Zapier",
      "body": "Conecta Giggal.ai con más de 8.000 apps sin escribir código: HubSpot, Mailchimp, Google Sheets, Pipedrive, Typeform y más. Cada contacto nuevo se verifica al entrar. Las guías por app están en inglés.",
      "href": "/integrations/zapier",
      "cta": "Guía de Zapier (en inglés)"
    },
    {
      "title": "n8n",
      "body": "Para quien automatiza con n8n: un nodo HTTP hacia nuestra API verifica las direcciones dentro del flujo y envía los resultados a donde hagan falta.",
      "href": "/integrations/n8n",
      "cta": "Guía de n8n (en inglés)"
    },
    {
      "title": "API REST",
      "body": "Verificación individual y en bloque, resolución catch-all, créditos y resultados en JSON, con autenticación por clave de API. Todo lo que pueda hacer una petición HTTP puede verificar correos con Giggal.",
      "href": "/public/docs",
      "cta": "Documentación de la API (en inglés)"
    }
  ],
  "notFoundTitle": "¿No encuentras tu herramienta?",
  "notFoundText": "Cualquier sistema que envíe peticiones HTTP puede verificar correos con Giggal.ai. Escríbenos y te indicamos el camino más corto.",
  "contactLabel": "Contáctanos",
  "contactHref": "/es/contacto"
}

export default function Page() {
  return <IntegrationsPageL10n locale="es" content={content} />
}
