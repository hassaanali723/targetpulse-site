import type { Metadata } from 'next'
import IntegrationsPageL10n, { type IntegrationsContent } from '@/components/l10n/IntegrationsPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/de/integrationen'
const DESC = "Integrationen für die E-Mail-Verifizierung: Zapier, n8n, HubSpot, Mailchimp und Google Sheets. Adressen in den Tools prüfen, die Sie schon nutzen, ohne Code."

export const metadata: Metadata = {
  title: { absolute: "Integrationen E-Mail-Verifizierung: Zapier, n8n, CRM | Giggal.ai" },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('integrations') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: "Integrationen für die E-Mail-Verifizierung",
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: "Giggal.ai E-Mail-Verifizierung" }],
  },
}

const content: IntegrationsContent = {
  "path": "/de/integrationen",
  "crumb": "Integrationen",
  "h1Lead": "E-Mail-Verifizierung in den",
  "h1Accent": "Tools, die Sie schon nutzen",
  "intro": "Verbinden Sie den Catch-all-Verifizierer von Giggal.ai mit Ihrer E-Mail-Marketing-Plattform, dem CRM, Tabellen und Outreach-Tools. Prüfen Sie neue Kontakte in Echtzeit, halten Sie Listen automatisch sauber und stoppen Sie Bounces, bevor sie entstehen.",
  "routes": [
    {
      "title": "Zapier",
      "body": "Verbinden Sie Giggal.ai ohne Code mit über 8.000 Apps: HubSpot, Mailchimp, Google Sheets, Pipedrive, Typeform und mehr. Jeder neue Kontakt wird beim Eintreffen geprüft. Die Anleitungen je App sind auf Englisch.",
      "href": "/integrations/zapier",
      "cta": "Zapier-Anleitung (Englisch)"
    },
    {
      "title": "n8n",
      "body": "Für alle, die mit n8n automatisieren: Ein HTTP-Node zu unserer API prüft Adressen im Workflow und leitet die Ergebnisse dorthin, wo sie gebraucht werden.",
      "href": "/integrations/n8n",
      "cta": "n8n-Anleitung (Englisch)"
    },
    {
      "title": "REST-API",
      "body": "Einzel- und Massenprüfung, Catch-all-Auflösung, Credits und Ergebnisse als JSON, Authentifizierung per API-Schlüssel. Alles, was einen HTTP-Request senden kann, kann mit Giggal E-Mails prüfen.",
      "href": "/public/docs",
      "cta": "API-Dokumentation (Englisch)"
    }
  ],
  "notFoundTitle": "Ihr Tool ist nicht dabei?",
  "notFoundText": "Jedes System, das HTTP-Anfragen senden kann, kann E-Mails mit Giggal.ai prüfen. Schreiben Sie uns, wir zeigen Ihnen den kürzesten Weg.",
  "contactLabel": "Kontakt aufnehmen",
  "contactHref": "/de/kontakt"
}

export default function Page() {
  return <IntegrationsPageL10n locale="de" content={content} />
}
