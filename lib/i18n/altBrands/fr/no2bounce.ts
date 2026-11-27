// French no2bounce alternative page. Translated from app/(en)/no2bounce-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) match
// lib/i18n/altBrands/fr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' ' // narrow no-break space in thousands: 10 000
const NB = ' ' // no-break space before the percent sign: 15 %

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'no2bounce',
  path: '/fr/alternative-a-no2bounce',
  cluster: 'altNo2bounce',
  metaTitle: 'Alternative à no2bounce : prix et catch-all | Giggal.ai',
  ogTitle: 'Une alternative à no2bounce pour vérifier les emails catch-all',
  desc: `no2bounce coûte 20 $ les 10${K}000 crédits. Giggal.ai vérifie les emails catch-all et derrière un SEG à 9,90 $ les 10${K}000, avec 1${K}000 crédits gratuits sans carte.`,
  h1: ['Une ', 'alternative à no2bounce', ' avec un prix par email plus bas'],
  heroP:
    "no2bounce est un vérificateur d'emails avec des crédits à l'usage qui n'expirent jamais. Giggal.ai fonctionne de la même façon. Les différences portent sur le prix, les crédits gratuits et la façon dont chaque outil vérifie les adresses catch-all.",
  bluf: [
    { k: 'Prix', v: `10${K}000 crédits coûtent 20 $ chez no2bounce et 9,90 $ chez Giggal.ai.` },
    { k: 'Gros volumes', v: 'Un million de crédits coûte 679 $ chez no2bounce et 680 $ chez Giggal.ai.' },
    { k: 'Crédits gratuits', v: `no2bounce donne 100 crédits gratuits. Giggal.ai en donne 1${K}000. Aucun des deux ne demande de carte.` },
    { k: 'Expiration', v: "Les crédits n'expirent jamais, sur les deux outils." },
  ],
  about: {
    heading: "Qu'est-ce que no2bounce ?",
    paragraphs: [
      "no2bounce est un service de vérification d'emails. Il vérifie des emails un par un, des listes en masse et des emails envoyés par son API. Les mêmes crédits servent aussi à payer sa recherche d'emails, sa recherche par domaine et son scoring d'emails.",
      `Sur les domaines catch-all, no2bounce envoie des messages de test contrôlés pour confirmer si une boîte existe. Il annonce une précision de 99,6${NB}%.`,
      'Il se connecte à HubSpot, Salesforce, Clay, Zapier, Google Sheets et Zoho CRM, entre autres.',
    ],
  },
  reasons: {
    heading: 'Pourquoi les utilisateurs cherchent une alternative à no2bounce',
    items: [
      { k: `Prix à 10${K}000`, v: `no2bounce facture 20 $ pour 10${K}000 crédits. Giggal.ai facture 9,90 $ pour la même quantité.` },
      { k: `À 100${K}000`, v: `100${K}000 crédits coûtent 149 $ chez no2bounce et 76 $ chez Giggal.ai.` },
      { k: 'Essai gratuit', v: `no2bounce donne 100 crédits gratuits. Giggal.ai en donne 1${K}000, assez pour tester un vrai échantillon.` },
    ],
  },
  catchAllHeading: 'Comment no2bounce et Giggal.ai vérifient les adresses catch-all',
  catchAllProse:
    'no2bounce envoie des messages de test contrôlés depuis ses propres serveurs pour confirmer les boîtes catch-all. Giggal.ai renvoie un résultat sur les adresses catch-all, à 1 crédit chacune, sans frais séparés. Il vérifie aussi les adresses derrière 15 secure email gateways citées par leur nom, dont Proofpoint, Mimecast et Barracuda.',
  pricingHeading: 'Tarifs de no2bounce face à Giggal.ai',
  pricingProse: `no2bounce vend des packs à l'usage, de 10${K}000 crédits pour 20 $ jusqu'à 50 millions de crédits. 100${K}000 crédits coûtent 149 $ et un million coûte 679 $. Les forfaits mensuels coûtent 15${NB}% de moins, et les forfaits annuels 20${NB}% de moins.`,
  pricingExtra: [
    `Giggal.ai vend 10${K}000 crédits pour 9,90 $, 100${K}000 pour 76 $ et un million pour 680 $. Il n'y a pas de forfait à choisir. Les crédits n'expirent jamais, sur les deux outils.`,
  ],
  strengths: {
    heading: 'Quand no2bounce est un bon choix',
    intro: 'no2bounce est un choix raisonnable pour ces besoins :',
  },
  others: {
    heading: 'Autres alternatives à no2bounce',
    intro: "Ces vérificateurs vendent aussi des crédits qui n'expirent jamais. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.",
    items: [
      { name: 'Bounceless', text: `10${K}000 crédits coûtent 29 $ et un million coûte 579 $. Il donne 1${K}000 crédits gratuits par mois avec un email professionnel.` },
      { name: 'QuickEmailVerification', text: `10${K}000 crédits coûtent 60 $. Il donne 100 crédits gratuits chaque jour.` },
      { name: 'Scrubby', text: "Le paiement à l'usage coûte 0,008 $ par crédit, avec une option Deep Verification pour les adresses difficiles." },
    ],
  },
  testHeading: 'Comparez no2bounce et Giggal.ai sur une même liste',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec no2bounce.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    'Comparez les lignes catch-all avec les résultats de no2bounce.',
  ],
  ctaHeadline: 'Le même travail, à un prix par email plus bas',
  faqs: [
    {
      q: 'Combien coûte no2bounce ?',
      a: `Les packs à l'usage de no2bounce commencent à 20 $ pour 10${K}000 crédits. 100${K}000 crédits coûtent 149 $ et un million coûte 679 $. Les forfaits mensuels coûtent 15${NB}% de moins, et les forfaits annuels 20${NB}% de moins.`,
    },
    {
      q: 'no2bounce est-il gratuit ?',
      a: `no2bounce donne 100 crédits gratuits sans carte, et ils n'expirent jamais. Ensuite, vous achetez des crédits. Giggal.ai donne 1${K}000 crédits gratuits sans carte.`,
    },
    {
      q: 'Giggal.ai est-il une bonne alternative à no2bounce ?',
      a: `Oui. Les deux vendent des crédits qui n'expirent jamais. Giggal.ai coûte moins cher à 10${K}000 et à 100${K}000 crédits, et donne dix fois plus de crédits gratuits. À un million de crédits, les deux prix sont presque identiques.`,
    },
    {
      q: 'Les crédits no2bounce expirent-ils ?',
      a: "Non. Les crédits no2bounce achetés restent sur votre compte jusqu'à ce que vous les utilisiez. Les crédits d'abonnement restent valables tant que l'abonnement est actif. Les crédits Giggal.ai n'expirent jamais.",
    },
  ],
  breadcrumb: 'Alternative à no2bounce',
}

export default cfg
