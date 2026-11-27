// French Scrubby alternative page. Translated from app/(en)/scrubby-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) match
// lib/i18n/altBrands/fr/facts.ts. Scrubby's product names "Quick Verification"
// and "Deep Verification" stay in English.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' ' // narrow no-break space in thousands: 10 000

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'scrubby',
  path: '/fr/alternative-a-scrubby',
  cluster: 'altScrubby',
  metaTitle: 'Alternative à Scrubby : prix de Scrubby.io comparés | Giggal.ai',
  ogTitle: 'Une alternative à Scrubby pour le catch-all et les passerelles',
  desc: `Scrubby facture 0,008 $ le crédit, et sa Deep Verification prend jusqu'à 72 h. Giggal.ai vérifie les emails catch-all et derrière un SEG à 9,90 $ les 10${K}000.`,
  h1: ['Une ', 'alternative à Scrubby', ` à 9,90 $ les 10${K}000 emails`],
  heroP: `Scrubby vérifie les emails catch-all et ceux protégés par une passerelle. Ce sont les mêmes adresses difficiles sur lesquelles Giggal.ai se concentre. Les différences portent sur le prix et sur le fonctionnement de chaque vérification. Scrubby facture 0,008 $ par crédit. Giggal.ai facture 9,90 $ les 10${K}000.`,
  bluf: [
    { k: 'Prix', v: `10${K}000 crédits coûtent 80 $ chez Scrubby et 9,90 $ chez Giggal.ai.` },
    { k: 'Vérification approfondie', v: "La Deep Verification de Scrubby coûte 3 crédits et envoie de vrais emails. Les résultats finaux peuvent prendre jusqu'à 72 heures." },
    { k: 'Crédits gratuits', v: `Scrubby donne 200 crédits gratuits. Giggal.ai en donne 1${K}000. Aucun des deux ne demande de carte.` },
    { k: 'Remboursements', v: 'Scrubby indique que tous les achats sont définitifs. Giggal.ai rembourse le crédit sur les résultats inconnus.' },
  ],
  about: {
    heading: "Qu'est-ce que Scrubby ?",
    paragraphs: [
      "Scrubby est un outil de vérification d'emails proposé par scrubby.io. Il se concentre sur les adresses catch-all et risquées que les autres vérificateurs ne peuvent pas confirmer.",
      'Il propose deux vérifications. La Quick Verification coûte 1 crédit et couvre les domaines standard, catch-all et protégés par un SEG. La Deep Verification coûte 3 crédits. Scrubby envoie de vrais emails à chaque adresse et donne les résultats finaux sous 72 heures.',
      'Scrubby se connecte à des outils comme Clay, Instantly, Smartlead, Apollo et HubSpot.',
    ],
  },
  reasons: {
    heading: 'Pourquoi les équipes cherchent une alternative à Scrubby',
    items: [
      { k: 'Prix', v: `Le paiement à l'usage coûte 0,008 $ par crédit. 10${K}000 vérifications coûtent 80 $, et 100${K}000 coûtent 800 $.` },
      { k: 'Délai', v: "Les résultats de la Deep Verification peuvent prendre jusqu'à 72 heures." },
      { k: 'Vrais emails', v: 'La Deep Verification envoie de vrais emails à chaque adresse de votre liste.' },
      { k: 'Pas de remboursement', v: 'Scrubby indique que tous les achats sont définitifs.' },
    ],
  },
  catchAllHeading: 'Scrubby face à Giggal.ai sur les emails catch-all et derrière une passerelle',
  catchAllProse:
    "Scrubby et Giggal.ai renvoient tous les deux un résultat sur les adresses catch-all et protégées par une passerelle. Giggal.ai facture 1 crédit par adresse, sans niveau plus approfondi. Il cite 15 passerelles derrière lesquelles il vérifie, dont Proofpoint, Mimecast et Barracuda. Quand il n'obtient pas de réponse, le crédit est remboursé.",
  pricingHeading: 'Tarifs de Scrubby face à Giggal.ai',
  pricingProse: `Le paiement à l'usage de Scrubby coûte 0,008 $ par crédit, donc 10${K}000 crédits coûtent 80 $. Les forfaits mensuels sont Starter à 47 $ pour 6${K}000 crédits, Growth à 97 $ pour 15${K}000 et Pro à 497 $ pour 100${K}000. Les crédits à l'usage n'expirent jamais, et les crédits des forfaits sont reportés.`,
  pricingExtra: [
    `Une Deep Verification utilise 3 crédits, donc 10${K}000 vérifications approfondies utilisent 30${K}000 crédits. Giggal.ai vend 10${K}000 crédits pour 9,90 $ et 100${K}000 pour 76 $.`,
  ],
  strengths: {
    heading: 'Quand Scrubby est un bon choix',
    intro: 'Scrubby a des points forts à connaître :',
  },
  others: {
    heading: 'Autres alternatives à Scrubby',
    intro: 'Ces outils renvoient aussi un résultat sur les adresses catch-all. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.',
    items: [
      { name: 'no2bounce', text: `Envoie des messages de test pour confirmer les boîtes catch-all. 10${K}000 crédits coûtent 20 $ et n'expirent jamais.` },
      { name: 'Listmint', text: `Vérifie les adresses catch-all à la main. Starter coûte 99 $ par mois pour 20${K}000 crédits standard et 5${K}000 crédits catch-all.` },
      { name: 'Allegrow', text: 'Renvoie valide ou invalide sur les contacts catch-all et cite Proofpoint et Mimecast. Starter coûte 99 $ par mois.' },
    ],
  },
  testHeading: 'Testez Giggal.ai sur vos adresses catch-all',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec Scrubby.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    'Comparez les résultats avec ceux de Scrubby pour les mêmes adresses catch-all.',
  ],
  ctaHeadline: `Vérifiez les mêmes adresses difficiles à 9,90 $ les 10${K}000`,
  faqs: [
    {
      q: 'Combien coûte Scrubby ?',
      a: `Le paiement à l'usage de Scrubby coûte 0,008 $ par crédit, soit 80 $ pour 10${K}000. Les forfaits mensuels commencent à 47 $ pour 6${K}000 crédits. La Deep Verification utilise 3 crédits par email.`,
    },
    {
      q: "Qu'est-ce que la Deep Verification de Scrubby ?",
      a: "C'est la vérification plus lente de Scrubby pour les adresses difficiles. Elle coûte 3 crédits, envoie de vrais emails à chaque adresse et donne les résultats finaux sous 72 heures.",
    },
    {
      q: 'Scrubby a-t-il un essai gratuit ?',
      a: `Oui. Scrubby donne 200 crédits gratuits sans carte. Giggal.ai donne 1${K}000 crédits gratuits sans carte.`,
    },
    {
      q: 'Giggal.ai est-il une bonne alternative à Scrubby ?',
      a: `Oui. Les deux renvoient un résultat sur les adresses catch-all et derrière une passerelle. Giggal.ai coûte 9,90 $ les 10${K}000 crédits et rembourse le crédit des résultats inconnus.`,
    },
  ],
  breadcrumb: 'Alternative à Scrubby',
}

export default cfg
