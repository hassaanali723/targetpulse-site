// fr words for the 11 brand alternative pages: competitor facts (keyed by
// slug, same fields as the English in lib/competitorPricing.ts) and the labels
// of the wide layout. Numbers never live here.
import type { AltFacts, AltWideUi } from '@/lib/i18n/altBrands/types'

// French typography: narrow no-break space in thousands (10 000), no-break
// space before the percent sign (98,5 %).
const K = ' '
const NB = ' '

export const FACTS: Record<string, AltFacts> = {
  leadmagic: {
    freeTier: 'Aucun crédit gratuit',
    creditsExpire: "Les crédits mensuels non utilisés sont reportés, jusqu'à 2 fois le quota mensuel",
    catchAllCreditCost: '0,25 crédit par résultat concluant ; un résultat inconnu est gratuit',
    claimedAccuracy: `Annonce 99,5${NB}% pour la validation`,
    pricingBasisNote: `LeadMagic est un abonnement mensuel avec une seule réserve de crédits : Essential 99 $ (5${K}000 crédits), Growth 249 $ (20${K}000), Professional 499 $ (50${K}000), Ultimate 849 $ (100${K}000). Une validation concluante coûte 0,25 crédit et un résultat inconnu est gratuit. Les chiffres ci-dessus correspondent au plus petit forfait mensuel qui couvre ce nombre de validations. La facturation annuelle offre deux mois gratuits. Les chiffres de Giggal.ai sont des prix ponctuels, sans abonnement.`,
    betterFitFor: [
      "Beaucoup de données d'enrichissement au-delà de la vérification : numéros de mobile, données d'entreprise, changements de poste et données publicitaires",
      'La publication de ses propres données de test sur le catch-all, ce que la plupart des éditeurs ne font pas',
      "Les équipes qui veulent la recherche, l'enrichissement et la vérification dans un seul abonnement",
      'Une API pensée pour les développeurs, avec un prix en crédits par endpoint',
    ],
    notes: { Enterprise: 'Entreprise' },
  },
  anymailfinder: {
    freeTier: 'Essai de 7 jours avec 100 crédits ; la carte est vérifiée, pas débitée',
    creditsExpire: "Les crédits sont reportés sans plafond tant que l'abonnement est actif, et expirent à la fin de la période de facturation en cas de résiliation",
    catchAllCreditCost: '0,2 crédit par vérification, comme toute autre vérification',
    claimedAccuracy: `Annonce 98,9${NB}% de précision pour 86,4${NB}% de couverture`,
    pricingBasisNote: `Anymail Finder est un abonnement mensuel avec une échelle de crédits, de 400 crédits à 29 $ par mois jusqu'à 100${K}000 à 799 $. Vérifier un email trouvé ailleurs coûte 0,2 crédit par vérification. Les chiffres ci-dessus sont les plus petits forfaits mensuels qui couvrent ce nombre de vérifications. La facturation annuelle fait économiser 33${NB}%. Un million de vérifications par mois dépasse l'échelle mensuelle. Les chiffres de Giggal.ai sont des prix ponctuels, sans abonnement.`,
    betterFitFor: [
      "Trouver des adresses email à partir d'un nom et d'un domaine, ce que Giggal.ai ne fait pas",
      `Une garantie de délivrabilité annoncée de 97${NB}% ou plus`,
      'Des crédits reportés sans plafond tant que vous restez abonné',
      'Une marque présente depuis longtemps, avec beaucoup de contenus publiés',
    ],
    notes: { Enterprise: 'Entreprise' },
  },
  findymail: {
    freeTier: "10 crédits à l'inscription, sans carte",
    creditsExpire: "Les crédits non utilisés sont reportés, jusqu'à 2 fois le quota mensuel",
    catchAllCreditCost: '1 crédit, comme toute autre vérification',
    claimedAccuracy: `Garantit un taux de rebond sous 5${NB}%, avec remboursement des crédits au-delà`,
    pricingBasisNote: `Findymail vend des forfaits basés sur l'usage, de 99 $ à 999 $ par mois, qui n'indiquent aucun nombre de crédits. Il propose aussi un forfait à crédits : Starter à 99 $ par mois avec 5${K}000 crédits de recherche et 5${K}000 crédits de vérification. Au-delà, tout est sur devis Entreprise. Il n'existe donc aucun prix publié pour 10${K}000, 100${K}000 ou un million de vérifications par mois. Les chiffres de Giggal.ai sont des prix ponctuels, sans abonnement.`,
    betterFitFor: [
      'Trouver des adresses email au départ, ce que Giggal.ai ne fait pas du tout',
      'Une garantie sur le taux de rebond, avec remboursement des crédits',
      'Une extension Chrome qui trouve et vérifie des emails sur LinkedIn et Sales Navigator',
      "SOC 2 Type 2 et un hébergement dans l'UE",
    ],
    notes: { Enterprise: 'Entreprise' },
  },
  listmint: {
    freeTier: 'Démarrage gratuit, quantité non publiée',
    creditsExpire: 'Non publié',
    catchAllCreditCost: `Crédits catch-all séparés : 5${K}000 par mois sur le forfait à 99 $`,
    pricingBasisNote: `Listmint est un abonnement mensuel avec deux réserves de crédits. Starter coûte 99 $ par mois pour 20${K}000 crédits standard et 5${K}000 crédits catch-all. Agency coûte 187 $ par mois pour 50${K}000 crédits standard et 10${K}000 crédits catch-all. Les volumes plus importants sont sur devis Entreprise. Les chiffres de Giggal.ai sont des prix ponctuels, sans abonnement.`,
    betterFitFor: [
      'Une vérification catch-all que Listmint dit faire à la main',
      'Une vérification catch-all en temps réel',
      "Un grand quota mensuel de crédits standard sur le forfait d'entrée",
    ],
    notes: { Enterprise: 'Entreprise' },
  },
  allegrow: {
    freeTier: `Essai de 14 jours pour 1${K}000 adresses au maximum`,
    creditsExpire: "Le quota du forfait est mensuel ; l'essai expire après 14 jours",
    catchAllCreditCost: '1 contact pris sur le quota du forfait',
    claimedAccuracy: `Annonce 99${NB}%`,
    pricingBasisNote: `Allegrow est un abonnement mensuel. Starter coûte 99 $ par mois pour 5${K}000 contacts, avec des crédits supplémentaires à 8 $ les 1${K}000. 10${K}000 par mois reviennent donc à 139 $. C'est notre calcul à partir de ses tarifs publiés, pas un forfait qu'Allegrow propose. Les lignes 100${K}000 et 1${K}000${K}000 correspondent à Scale Plus Unlimited, à 1${K}340 $ par mois en facturation annuelle, soit une vérification illimitée. Les chiffres de Giggal.ai sont des prix ponctuels, sans abonnement.`,
    estimateNote: "Notre calcul à partir des tarifs publiés d'Allegrow, pas un forfait proposé par Allegrow.",
    betterFitFor: [
      'Un forfait de vérification illimitée, sans équivalent chez Giggal.ai',
      "Une note de réputation de l'expéditeur et un suivi du placement en boîte de réception, en plus de la vérification",
      'Des intégrations natives avec HubSpot, Outreach et Salesloft, avec SSO et des rapports SOC 2',
      'Une étude publiée sur les faux positifs avec des adresses fictives',
    ],
    notes: { unlimited: 'illimité' },
  },
  no2bounce: {
    freeTier: "100 crédits sans carte, qui n'expirent jamais",
    creditsExpire: "Les crédits n'expirent jamais, sans limite d'utilisation mensuelle",
    catchAllCreditCost: '1 crédit par email, comme la vérification standard',
    claimedAccuracy: `Annonce 99,6${NB}%`,
    betterFitFor: [
      `Une longue grille de prix, de 10${K}000 crédits jusqu'à 50 millions`,
      "Des crédits qui n'expirent jamais, comme chez Giggal.ai",
      `Des forfaits mensuels et annuels 15${NB}% et 20${NB}% moins chers que le paiement à l'usage`,
      "Une recherche d'emails et une recherche par domaine sur les mêmes crédits",
    ],
  },
  quickemailverification: {
    freeTier: '100 crédits par jour, gratuits',
    creditsExpire: "Les crédits permanents à l'usage n'expirent jamais",
    catchAllCreditCost: 'Renvoyé avec le statut catch-all, non confirmé',
    claimedAccuracy: `Annonce 99${NB}%`,
    betterFitFor: [
      '100 crédits gratuits chaque jour, plus un quota gratuit chaque mois',
      "Des crédits permanents à l'usage qui n'expirent jamais",
      "Un prix d'entrée bas, dès 4 $ pour 500 crédits",
      'Une API en temps réel établie de longue date',
    ],
  },
  myemailverifier: {
    freeTier: '100 crédits par jour, gratuits',
    creditsExpire: "Les crédits n'expirent jamais",
    catchAllCreditCost: 'Renvoyé avec le statut catch-all, non confirmé',
    betterFitFor: [
      'Un tarif affiché très bas, 0,0025 $ par vérification',
      "100 crédits gratuits chaque jour, qui se renouvellent au lieu de s'arrêter après un essai",
      "Des crédits qui n'expirent jamais, avec des promotions de crédits bonus à gros volume",
      "Un solide historique d'avis publics sur G2, Capterra et Trustpilot",
    ],
  },
  scrubby: {
    freeTier: '200 crédits',
    creditsExpire: "Les crédits à l'usage n'expirent jamais ; les crédits des forfaits sont reportés",
    catchAllCreditCost: "1 crédit en Quick Verification ; Deep Verification coûte 3 crédits et prend jusqu'à 72 heures",
    claimedAccuracy: 'Non publié sur sa page de tarifs',
    betterFitFor: [
      'Une option Deep Verification qui envoie de vrais emails aux adresses difficiles à vérifier',
      'Une offre gratuite de 200 crédits sans carte',
      "Le paiement à l'usage et des forfaits mensuels, avec des crédits de forfait reportés",
      "Une seule tâche bien définie plutôt qu'une large suite d'outils",
    ],
    notes: { 'Quote only': 'Sur devis uniquement' },
  },
  mailfloss: {
    freeTier: '500 vérifications par mois, plus un essai de 7 jours sur les abonnements',
    creditsExpire: "Les crédits prépayés n'expirent jamais ; les crédits d'abonnement sont remis à zéro chaque mois",
    catchAllCreditCost: 'Signalé, non résolu',
    betterFitFor: [
      'Un nettoyage automatique chaque jour, branché directement sur votre plateforme email',
      '41 intégrations natives, dont Mailchimp, Klaviyo et HubSpot',
      'Un abonnement qui fonctionne seul une fois configuré, au lieu des imports manuels',
      'Le choix entre un abonnement et des crédits prépayés',
    ],
  },
  bounceless: {
    freeTier: `1${K}000 crédits par mois avec un email professionnel, sans carte`,
    creditsExpire: "Les crédits n'expirent jamais, en pack comme en abonnement",
    catchAllCreditCost: 'Les indices catch-all sont inclus dans la vérification à 1 crédit',
    betterFitFor: [
      `Un quota gratuit de 1${K}000 crédits chaque mois avec un email professionnel`,
      "Des packs ponctuels et des abonnements mensuels, avec des crédits qui n'expirent jamais",
      "Des outils en plus dans un seul compte : santé de l'expéditeur, placement en boîte de réception et contrôle des formulaires d'inscription",
      'Un prix bas à très gros volume, 579 $ pour un million',
    ],
  },
}

export const WIDE_UI: AltWideUi | null = {
  keyFacts: (n) => `${n} : les points clés`,
  factRows: { price10k: `10${K}000 vérifications`, free: 'Crédits gratuits', expiry: 'Expiration des crédits', catchAll: 'Catch-all' },
  perMonth: ' par mois',
  notPublished: 'Non publié',
}
