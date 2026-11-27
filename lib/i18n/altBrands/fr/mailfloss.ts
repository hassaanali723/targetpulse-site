// French Mailfloss alternative page. Translated from app/(en)/mailfloss-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) match
// lib/i18n/altBrands/fr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' ' // narrow no-break space in thousands: 10 000

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'mailfloss',
  path: '/fr/alternative-a-mailfloss',
  cluster: 'altMailfloss',
  metaTitle: 'Alternative à Mailfloss : prix et catch-all | Giggal.ai',
  ogTitle: 'Une alternative à Mailfloss qui vérifie les emails catch-all',
  desc: `Mailfloss nettoie chaque jour la liste de votre plateforme email mais signale seulement les emails catch-all. Giggal.ai renvoie un résultat à 9,90 $ les 10${K}000.`,
  h1: ['Une ', 'alternative à Mailfloss', ' pour nettoyer une liste en une seule fois'],
  heroP: `Mailfloss se connecte à votre plateforme d'email marketing et nettoie la liste chaque jour. Il signale les adresses catch-all mais ne les confirme pas. Giggal.ai vérifie les listes que vous importez et renvoie un résultat sur les adresses catch-all, à 9,90 $ les 10${K}000 emails.`,
  bluf: [
    { k: 'Fonctionnement', v: 'Mailfloss nettoie votre liste dans votre plateforme email. Giggal.ai vérifie les listes que vous importez ou envoyez par API.' },
    { k: 'Catch-all', v: 'Mailfloss signale les adresses catch-all. Giggal.ai renvoie un résultat pour ces adresses.' },
    { k: 'Prix', v: `Les crédits prépayés Mailfloss coûtent 40 $ les 10${K}000. Giggal.ai coûte 9,90 $.` },
    { k: 'Usage gratuit', v: `Mailfloss donne 500 vérifications gratuites par mois. Giggal.ai en donne 1${K}000 une seule fois, sans carte.` },
  ],
  about: {
    heading: "Qu'est-ce que Mailfloss ?",
    paragraphs: [
      "Mailfloss est un service de nettoyage de listes d'emails. Il se connecte à 41 plateformes email, comme Mailchimp, Klaviyo, HubSpot et ActiveCampaign. Il retire ensuite chaque jour les adresses invalides de votre liste.",
      'Il corrige aussi les fautes de frappe courantes dans les adresses email. Il a une API en temps réel, des webhooks et un widget de formulaire.',
      "Mailfloss vend des abonnements mensuels et des crédits prépayés. Les crédits prépayés n'expirent jamais.",
    ],
  },
  reasons: {
    heading: 'Pourquoi les utilisateurs cherchent une alternative à Mailfloss',
    items: [
      { k: 'Catch-all', v: 'Mailfloss signale les adresses catch-all. Il ne confirme pas si la boîte existe.' },
      { k: "Carte pour l'essai", v: "L'essai de 7 jours sur les abonnements demande une carte bancaire." },
      { k: 'Limites de plateformes', v: 'Lite se connecte à 1 plateforme email, et Business à 10.' },
      { k: 'Prix', v: `Les crédits prépayés coûtent 40 $ les 10${K}000 et 300 $ les 100${K}000.` },
    ],
  },
  catchAllHeading: 'Comment Mailfloss et Giggal.ai traitent les emails catch-all',
  catchAllProse:
    "Mailfloss signale les adresses catch-all et vous laisse décider. Giggal.ai fait des vérifications supplémentaires sur ces adresses et renvoie l'un de quatre résultats, à 1 crédit chacune. Il vérifie aussi les adresses derrière 15 secure email gateways citées par leur nom.",
  pricingHeading: 'Tarifs de Mailfloss face à Giggal.ai',
  pricingProse: `Les abonnements Mailfloss sont Lite à 29 $ par mois pour 10${K}000 crédits, Business à 59 $ pour 25${K}000 et Pro à 209 $ pour 125${K}000. Les crédits prépayés coûtent 8 $ pour 1${K}000, 40 $ pour 10${K}000, 300 $ pour 100${K}000 et 1${K}200 $ pour un million.`,
  pricingExtra: [
    `Chaque compte Mailfloss reçoit aussi 500 vérifications gratuites par mois. Giggal.ai vend 10${K}000 crédits pour 9,90 $ et un million pour 680 $, sans abonnement.`,
  ],
  strengths: {
    heading: 'Quand Mailfloss est un bon choix',
    intro: 'Mailfloss fait certaines choses que Giggal.ai ne fait pas :',
  },
  others: {
    heading: 'Autres alternatives à Mailfloss',
    intro: 'Ces vérificateurs nettoient aussi les listes marketing. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.',
    items: [
      { name: 'QuickEmailVerification', text: `S'intègre à plus de 50 outils marketing. 10${K}000 crédits permanents coûtent 60 $.` },
      { name: 'Bounceless', text: `10${K}000 crédits coûtent 29 $. Il donne 1${K}000 crédits gratuits par mois avec un email professionnel.` },
      { name: 'no2bounce', text: `S'intègre à HubSpot, Klaviyo et Zoho. 10${K}000 crédits coûtent 20 $ et n'expirent jamais.` },
    ],
  },
  testHeading: 'Testez Giggal.ai sur un export de votre plateforme email',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec Mailfloss.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    'Comparez les lignes catch-all avec ce que Mailfloss a signalé.',
  ],
  ctaHeadline: 'Un résultat sur les adresses catch-all, pas un simple signalement',
  faqs: [
    {
      q: 'Combien coûte Mailfloss ?',
      a: `Les abonnements commencent à 29 $ par mois pour 10${K}000 crédits. Les crédits prépayés coûtent 40 $ pour 10${K}000 et 1${K}200 $ pour un million, et ils n'expirent jamais.`,
    },
    {
      q: 'Mailfloss a-t-il une offre gratuite ?',
      a: 'Oui. Chaque compte reçoit 500 vérifications gratuites par mois. Les abonnements ont aussi un essai de 7 jours, qui demande une carte.',
    },
    {
      q: 'Mailfloss vérifie-t-il les emails catch-all ?',
      a: 'Il les signale. Il ne confirme pas si la boîte existe. Giggal.ai renvoie un résultat sur les adresses catch-all, à 1 crédit chacune.',
    },
    {
      q: 'Giggal.ai nettoie-t-il la liste de ma plateforme email comme Mailfloss ?',
      a: 'Non. Giggal.ai fonctionne avec des imports, une API, Zapier, n8n et HubSpot. Il ne lance pas de nettoyage quotidien dans votre plateforme email.',
    },
  ],
  breadcrumb: 'Alternative à Mailfloss',
}

export default cfg
