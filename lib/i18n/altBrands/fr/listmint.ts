// French Listmint alternative page. Translated from app/(en)/listmint-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/fr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' '

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'listmint',
  path: '/fr/alternative-a-listmint',
  cluster: 'altListmint',
  metaTitle: 'Alternative à Listmint : vérification catch-all | Giggal.ai',
  ogTitle: 'Une alternative à Listmint pour vérifier les emails catch-all',
  desc: `Listmint coûte 99 $ par mois avec 5${K}000 crédits catch-all. Giggal.ai vérifie les emails catch-all à 1 crédit, soit 9,90 $ les 10${K}000, sans expiration.`,
  h1: ['Une ', 'alternative à Listmint', ' avec une seule réserve de crédits'],
  heroP:
    "Listmint est un vérificateur d'emails centré sur les adresses catch-all. Il divise chaque forfait en crédits standard et en une réserve plus petite de crédits catch-all. Giggal.ai utilise une seule réserve. Une vérification catch-all coûte 1 crédit, comme pour tout autre email.",
  bluf: [
    { k: 'Crédits', v: 'Listmint a deux réserves de crédits. Giggal.ai en a une seule, à 1 crédit par email.' },
    { k: 'Prix', v: `Listmint Starter coûte 99 $ par mois. Giggal.ai coûte 9,90 $ les 10${K}000 crédits, en un seul achat.` },
    { k: 'Catch-all', v: `Listmint Starter donne 5${K}000 crédits catch-all par mois. Giggal.ai n'a pas de limite séparée.` },
    { k: 'Passerelles', v: "Giggal.ai vérifie les adresses derrière 15 passerelles email citées par leur nom. Listmint n'en cite aucune." },
  ],
  about: {
    heading: "Qu'est-ce que Listmint ?",
    paragraphs: [
      "Listmint est un service de vérification d'emails, proposé sur listmint.io. Il fait des vérifications SMTP standard et une vérification catch-all séparée. Listmint dit vérifier les adresses catch-all à la main.",
      'Ses crédits catch-all coûtent plus cher que ses crédits standard. Chaque forfait comprend donc une grande réserve de crédits standard et une réserve plus petite de crédits catch-all.',
      'Listmint dit aussi pouvoir vérifier les adresses catch-all en temps réel.',
    ],
  },
  reasons: {
    heading: 'Pourquoi les utilisateurs cherchent une alternative à Listmint',
    items: [
      { k: 'Plafond catch-all', v: `Starter comprend 5${K}000 crédits catch-all par mois. Une seule grande liste B2B peut tous les utiliser.` },
      { k: 'Forfait mensuel', v: "Listmint est facturé chaque mois. Les crédits Giggal.ai s'achètent en une seule fois et n'expirent jamais." },
      { k: 'Volume', v: `Le plus grand forfait affiché est Agency, avec 50${K}000 crédits standard. Au-delà, il faut un devis Entreprise.` },
      { k: 'Passerelles', v: 'Listmint ne cite aucune secure email gateway derrière laquelle il peut vérifier.' },
    ],
  },
  catchAllHeading: 'Listmint vs Giggal.ai sur les adresses catch-all',
  catchAllProse: `Listmint facture les vérifications catch-all sur une réserve de crédits séparée. Sur le forfait Starter à 99 $, cette réserve est de 5${K}000 par mois. Giggal.ai n'a pas de réserve séparée. Chaque adresse coûte 1 crédit, catch-all ou non. Quand Giggal.ai ne peut pas obtenir de réponse, le résultat est inconnu et le crédit est remboursé.`,
  pricingHeading: 'Tarifs de Listmint face à Giggal.ai',
  pricingProse: `Listmint Starter coûte 99 $ par mois pour 20${K}000 crédits standard et 5${K}000 crédits catch-all. Agency coûte 187 $ par mois pour 50${K}000 crédits standard et 10${K}000 crédits catch-all. Le forfait Entreprise est sur devis.`,
  pricingExtra: [
    `Giggal.ai n'a pas de paliers de forfait. 10${K}000 crédits coûtent 9,90 $ et 100${K}000 coûtent 76 $. Chacun de ces crédits peut servir pour une adresse catch-all.`,
  ],
  strengths: {
    heading: 'Quand Listmint est un bon choix',
    intro: 'Listmint est pertinent si vous voulez ceci :',
  },
  others: {
    heading: 'Autres alternatives à Listmint',
    intro: 'Ces vérificateurs renvoient aussi un résultat sur les adresses catch-all. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.',
    items: [
      { name: 'Scrubby', text: "Vérifie les domaines catch-all et les domaines protégés par une passerelle pour 1 crédit. Sa Deep Verification coûte 3 crédits et envoie de vrais emails. Le paiement à l'usage coûte 0,008 $ par crédit." },
      { name: 'no2bounce', text: `Envoie des messages de test pour confirmer les boîtes catch-all. 10${K}000 crédits à l'usage coûtent 20 $ et n'expirent jamais.` },
      { name: 'Allegrow', text: `Renvoie valide ou invalide sur les contacts catch-all, pour les équipes commerciales. Starter coûte 99 $ par mois pour 5${K}000 contacts.` },
    ],
  },
  testHeading: 'Passez une liste Listmint dans Giggal.ai',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec Listmint.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    'Comparez les lignes catch-all avec ce que Listmint a renvoyé.',
  ],
  ctaHeadline: 'Vérifiez les emails catch-all sans plafond de crédits séparé',
  faqs: [
    {
      q: 'Combien coûte Listmint ?',
      a: `Listmint Starter coûte 99 $ par mois avec 20${K}000 crédits standard et 5${K}000 crédits catch-all. Agency coûte 187 $ par mois avec 50${K}000 crédits standard et 10${K}000 crédits catch-all. Le forfait Entreprise est sur devis.`,
    },
    {
      q: 'Pourquoi Listmint a-t-il des crédits catch-all séparés ?',
      a: 'Listmint dit que ses crédits catch-all coûtent plus cher que ses crédits SMTP normaux, car une vérification catch-all demande plus de travail. Giggal.ai facture 1 crédit pour chaque adresse, catch-all compris.',
    },
    {
      q: 'Giggal.ai est-il une bonne alternative à Listmint ?',
      a: `Oui, si vous vérifiez des listes avec beaucoup d'adresses catch-all. Giggal.ai n'a ni limite catch-all séparée ni forfait mensuel. Il coûte 9,90 $ les 10${K}000 crédits.`,
    },
    {
      q: 'Listmint a-t-il un essai gratuit ?',
      a: `Listmint propose un démarrage gratuit, mais ne publie pas le nombre de crédits inclus. Giggal.ai donne 1${K}000 crédits gratuits sans carte.`,
    },
  ],
  breadcrumb: 'Alternative à Listmint',
}

export default cfg
