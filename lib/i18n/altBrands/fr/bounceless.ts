// French Bounceless alternative page. Translated from app/(en)/bounceless-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) match
// lib/i18n/altBrands/fr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' ' // narrow no-break space in thousands: 10 000

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'bounceless',
  path: '/fr/alternative-a-bounceless',
  cluster: 'altBounceless',
  metaTitle: 'Alternative à Bounceless : tarifs de Bounceless.io | Giggal.ai',
  ogTitle: 'Une alternative à Bounceless qui vérifie derrière les passerelles',
  desc: `Bounceless coûte 29 $ les 10${K}000 crédits. Giggal.ai coûte 9,90 $ et vérifie les emails catch-all et derrière un SEG, avec des crédits qui n'expirent jamais.`,
  h1: ['Une ', 'alternative à Bounceless', ' qui vérifie aussi les emails derrière une passerelle'],
  heroP:
    "Bounceless est un vérificateur d'emails à bas prix, avec des packs ponctuels et des abonnements mensuels. Il inclut désormais des indices catch-all dans sa vérification standard. Giggal.ai renvoie aussi un résultat sur les adresses catch-all, et vérifie derrière 15 secure email gateways citées par leur nom.",
  bluf: [
    { k: 'Prix', v: `10${K}000 crédits coûtent 29 $ chez Bounceless et 9,90 $ chez Giggal.ai.` },
    { k: 'Gros volumes', v: 'Un million de crédits coûte 579 $ chez Bounceless et 680 $ chez Giggal.ai.' },
    { k: 'Passerelles', v: "Giggal.ai cite 15 passerelles email derrière lesquelles il vérifie. Bounceless n'en cite aucune." },
    { k: 'Crédits gratuits', v: `Bounceless en donne 1${K}000 par mois avec un email professionnel. Giggal.ai en donne 1${K}000 une seule fois.` },
  ],
  about: {
    heading: "Qu'est-ce que Bounceless ?",
    paragraphs: [
      "Bounceless est un service de vérification d'emails proposé par bounceless.io. Il vérifie des listes en masse et des emails un par un. Il propose une API et un serveur MCP.",
      `Son compte inclut aussi des contrôles de santé de l'expéditeur, de placement en boîte de réception et de formulaires d'inscription. Bounceless dit avoir plus de 39${K}000 comptes clients.`,
      "Bounceless n'a pas encore d'intégrations natives avec des applications. Il propose des guides CSV et API pour des outils comme Mailchimp, HubSpot et ActiveCampaign.",
    ],
  },
  reasons: {
    heading: 'Pourquoi les utilisateurs cherchent une alternative à Bounceless',
    items: [
      { k: 'Passerelles', v: 'Bounceless ne cite aucune secure email gateway, par exemple Proofpoint ou Mimecast.' },
      { k: 'Intégrations', v: "Il n'a pas encore d'intégrations natives avec des applications, seulement des guides CSV et API." },
      { k: `Prix à 10${K}000`, v: `10${K}000 crédits coûtent 29 $. Giggal.ai facture 9,90 $ pour la même quantité.` },
      { k: 'Email professionnel', v: "Les crédits gratuits mensuels demandent un email professionnel. Les adresses grand public n'en reçoivent pas." },
    ],
  },
  catchAllHeading: 'Bounceless face à Giggal.ai sur les adresses catch-all',
  catchAllProse:
    "Bounceless inclut des indices catch-all dans sa vérification à 1 crédit, et ne facture pas les résultats non confirmés. Giggal.ai renvoie aussi un résultat sur les adresses catch-all à 1 crédit, et rembourse le crédit des résultats inconnus. La principale différence porte sur les secure email gateways. Giggal.ai vérifie derrière 15 d'entre elles, dont Proofpoint, Mimecast et Barracuda.",
  pricingHeading: 'Tarifs de Bounceless face à Giggal.ai',
  pricingProse: `Les packs à l'usage de Bounceless coûtent 19 $ pour 5${K}000, 29 $ pour 10${K}000, 159 $ pour 100${K}000 et 579 $ pour un million. Les abonnements mensuels commencent à 19 $ pour 6${K}500 crédits. Les crédits n'expirent jamais, en pack comme en abonnement.`,
  pricingExtra: [
    `Giggal.ai vend 10${K}000 crédits pour 9,90 $, 100${K}000 pour 76 $ et un million pour 680 $. Bounceless coûte moins cher à un million. Giggal.ai coûte moins cher à 10${K}000 et à 100${K}000.`,
  ],
  strengths: {
    heading: 'Quand Bounceless est un bon choix',
    intro: 'Bounceless a de vrais points forts :',
  },
  others: {
    heading: 'Autres alternatives à Bounceless',
    intro: 'Ces vérificateurs ont des prix proches de ceux de Bounceless. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.',
    items: [
      { name: 'no2bounce', text: `10${K}000 crédits coûtent 20 $ et un million coûte 679 $. Les crédits n'expirent jamais.` },
      { name: 'QuickEmailVerification', text: `Donne 100 crédits gratuits chaque jour. 10${K}000 crédits permanents coûtent 60 $.` },
      { name: 'Mailfloss', text: `Se connecte à 41 plateformes email et retire chaque jour les adresses invalides. 10${K}000 crédits prépayés coûtent 40 $.` },
    ],
  },
  testHeading: 'Passez une même liste dans Bounceless et dans Giggal.ai',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec Bounceless.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    'Comparez les lignes catch-all avec les indices renvoyés par Bounceless.',
  ],
  ctaHeadline: 'Emails catch-all et derrière une passerelle, à 1 crédit chacun',
  faqs: [
    {
      q: 'Combien coûte Bounceless ?',
      a: `Les packs à l'usage de Bounceless commencent à 19 $ pour 5${K}000 crédits. 10${K}000 coûtent 29 $, 100${K}000 coûtent 159 $ et un million coûte 579 $. Les abonnements mensuels commencent à 19 $ pour 6${K}500 crédits.`,
    },
    {
      q: 'Bounceless est-il gratuit ?',
      a: `Bounceless donne 1${K}000 crédits gratuits par mois si vous vous inscrivez avec un email professionnel. Aucune carte n'est demandée. Giggal.ai donne 1${K}000 crédits gratuits une seule fois, sans carte.`,
    },
    {
      q: 'Bounceless vérifie-t-il les emails catch-all ?',
      a: 'Oui. Bounceless inclut des indices catch-all dans sa vérification standard à 1 crédit, sans frais en plus. Les résultats non confirmés ne sont pas facturés.',
    },
    {
      q: 'Giggal.ai est-il une bonne alternative à Bounceless ?',
      a: `Oui, si votre liste contient beaucoup de domaines d'entreprise. Giggal.ai vérifie derrière 15 secure email gateways citées par leur nom et coûte 9,90 $ les 10${K}000 crédits.`,
    },
  ],
  breadcrumb: 'Alternative à Bounceless',
}

export default cfg
