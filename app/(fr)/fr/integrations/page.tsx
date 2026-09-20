import type { Metadata } from 'next'
import IntegrationsPageL10n, { type IntegrationsContent } from '@/components/l10n/IntegrationsPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/fr/integrations'
const DESC = 'Intégrations pour la vérification d’email : Zapier, n8n, HubSpot, Mailchimp et Google Sheets. Vérifiez les adresses dans vos outils habituels, sans code.'

export const metadata: Metadata = {
  title: { absolute: 'Intégrations Zapier, n8n et API de vérification | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('integrations') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    title: 'Intégrations pour la vérification d’email',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai vérification d’email' }],
  },
}

const content: IntegrationsContent = {
  path: PATH,
  crumb: 'Intégrations',
  h1Lead: 'La vérification d’email dans les',
  h1Accent: 'outils que vous utilisez déjà',
  intro: 'Connectez le vérificateur catch-all de Giggal.ai à votre plateforme d’emailing, à votre CRM, à vos feuilles de calcul et à vos outils de prospection. Vérifiez les nouveaux contacts en temps réel, gardez vos listes propres automatiquement et arrêtez les rebonds avant qu’ils n’arrivent.',
  routes: [
    {
      title: 'Zapier',
      body: 'Connectez Giggal.ai à plus de 8 000 applications sans écrire de code : HubSpot, Mailchimp, Google Sheets, Pipedrive, Typeform et d’autres. Chaque nouveau contact est vérifié à son arrivée. Les guides par application sont en anglais.',
      href: '/integrations/zapier',
      cta: 'Guide Zapier (en anglais)',
    },
    {
      title: 'n8n',
      body: 'Pour ceux qui automatisent avec n8n : un nœud HTTP vers notre API vérifie les adresses dans le flux et envoie les résultats là où il faut.',
      href: '/integrations/n8n',
      cta: 'Guide n8n (en anglais)',
    },
    {
      title: 'API REST',
      body: 'Vérification unitaire et en masse, résolution catch-all, crédits et résultats en JSON, avec authentification par clé d’API. Tout ce qui peut faire une requête HTTP peut vérifier des adresses avec Giggal.',
      href: '/public/docs',
      cta: 'Documentation de l’API (en anglais)',
    },
  ],
  notFoundTitle: 'Vous ne trouvez pas votre outil ?',
  notFoundText: 'Tout système qui envoie des requêtes HTTP peut vérifier des adresses avec Giggal.ai. Écrivez-nous et nous vous indiquons le chemin le plus court.',
  contactLabel: 'Nous contacter',
  contactHref: '/fr/contact',
}

export default function Page() {
  return <IntegrationsPageL10n locale="fr" content={content} />
}
