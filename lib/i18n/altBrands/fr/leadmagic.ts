// French LeadMagic alternative page. Translated from app/(en)/leadmagic-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/fr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' '
const NB = ' '

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'leadmagic',
  path: '/fr/alternative-a-leadmagic',
  cluster: 'altLeadmagic',
  metaTitle: 'Alternative à LeadMagic : tarifs LeadMagic comparés | Giggal.ai',
  ogTitle: "Une alternative à LeadMagic uniquement pour la vérification d'emails",
  desc: `Tarifs de LeadMagic : dès 99 $/mois pour 5${K}000 crédits partagés. Comparez avec Giggal.ai, un vérificateur à 9,90 $ les 10${K}000 crédits qui n'expirent jamais.`,
  h1: ['Une ', 'alternative à LeadMagic', " uniquement pour la vérification d'emails"],
  heroP: `LeadMagic est une plateforme de données B2B. La validation d'emails est l'un de ses produits, et elle partage une réserve mensuelle de crédits avec les autres. Si vous avez seulement besoin de vérifier des listes d'emails, Giggal.ai ne fait que cela. Il coûte 9,90 $ les 10${K}000 emails, en un seul achat.`,
  bluf: [
    { k: "Ce que c'est", v: "LeadMagic vend des données sur les contacts et les entreprises. Giggal.ai vérifie uniquement des adresses email." },
    { k: 'Prix', v: `LeadMagic démarre à 99 $ par mois. Giggal.ai coûte 9,90 $ les 10${K}000 crédits, en un seul achat.` },
    { k: 'Crédits gratuits', v: `LeadMagic ne donne aucun crédit gratuit. Giggal.ai en donne 1${K}000, sans carte.` },
    { k: 'Catch-all', v: 'Les deux renvoient un résultat sur les adresses catch-all. Giggal.ai vérifie aussi derrière 15 passerelles email citées par leur nom.' },
  ],
  about: {
    heading: "Qu'est-ce que LeadMagic ?",
    paragraphs: [
      "LeadMagic est une plateforme de données B2B pour les équipes commerciales. Elle trouve des emails professionnels et des numéros de mobile, et ajoute des données d'entreprise aux fiches de contact. Elle suit aussi les changements de poste et l'activité publicitaire.",
      "La validation d'emails est un produit de LeadMagic. Elle renvoie valide, invalide ou inconnu. Un résultat concluant coûte 0,25 crédit, et un résultat inconnu est gratuit. La validation catch-all est un produit séparé qui utilise les mêmes crédits.",
      "Les équipes utilisent LeadMagic via son application web, une API REST, une CLI ou un serveur MCP. LeadMagic se connecte à des outils comme Clay, Apollo, Smartlead, Instantly, Salesforce, Zapier et Make.",
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Tarifs de LeadMagic en 2026',
  pricingProse: `LeadMagic est un abonnement mensuel. Essential coûte 99 $ pour 5${K}000 crédits. Growth coûte 249 $ pour 20${K}000, Professional 499 $ pour 50${K}000 et Ultimate 849 $ pour 100${K}000. Tous les produits puisent dans les mêmes crédits.`,
  pricingExtra: [
    `À 0,25 crédit par validation, le forfait à 99 $ couvre 20${K}000 vérifications par mois. Pour 100${K}000 vérifications par mois, il faut Professional à 499 $. La facturation annuelle offre deux mois gratuits. Les crédits mensuels non utilisés sont reportés, jusqu'à deux fois le quota mensuel.`,
    `Giggal.ai n'a pas d'abonnement. 10${K}000 crédits coûtent 9,90 $, 100${K}000 coûtent 76 $ et un million coûte 680 $. Les crédits n'expirent jamais.`,
  ],
  reasons: {
    heading: 'Pourquoi les équipes cherchent une alternative à LeadMagic',
    items: [
      { k: 'Facture mensuelle', v: "LeadMagic facture chaque mois, même les mois où vous ne vérifiez rien. Les crédits Giggal.ai s'achètent en une seule fois." },
      { k: 'Crédits partagés', v: "La validation et l'enrichissement utilisent les mêmes crédits. Un gros nettoyage de liste laisse moins de crédits pour trouver des contacts." },
      { k: 'Pas de test gratuit', v: 'LeadMagic ne donne aucun crédit gratuit. Vous payez avant de pouvoir le tester sur votre propre liste.' },
      { k: 'Passerelles', v: "LeadMagic n'annonce pas de prise en charge des secure email gateways comme Proofpoint ou Mimecast." },
    ],
  },
  catchAllHeading: 'LeadMagic vs Giggal.ai sur les adresses catch-all',
  catchAllProse:
    "LeadMagic renvoie valide, invalide ou inconnu sur les domaines catch-all, et ne facture pas les résultats inconnus. Giggal.ai renvoie aussi un résultat sur les adresses catch-all, à 1 crédit par adresse. Il vérifie aussi les adresses derrière 15 secure email gateways, comme Proofpoint, Mimecast et Barracuda. Ces passerelles acceptent d'abord toutes les adresses. Une vérification simple ne peut donc pas distinguer une vraie adresse d'une fausse.",
  strengths: {
    heading: 'Ce que LeadMagic fait bien',
    intro: 'LeadMagic est le meilleur choix si vous avez besoin de ceci :',
  },
  others: {
    heading: 'Autres alternatives à LeadMagic',
    intro: "Si vous voulez trouver et vérifier des emails dans un seul outil, voici d'autres options. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.",
    items: [
      { name: 'Findymail', text: `Un outil de recherche d'emails qui vérifie aussi. Son forfait Starter coûte 99 $ par mois pour 5${K}000 crédits de recherche et 5${K}000 crédits de vérification. Findymail promet un taux de rebond sous 5${NB}%.` },
      { name: 'Anymail Finder', text: "Un outil de recherche d'emails avec un vérificateur séparé. Une vérification coûte 0,2 crédit, et les forfaits démarrent à 29 $ par mois pour 400 crédits." },
      { name: 'no2bounce', text: `Un vérificateur avec des crédits à l'usage qui n'expirent jamais. 10${K}000 crédits coûtent 20 $.` },
    ],
  },
  testHeading: 'Testez Giggal.ai sur une liste déjà vérifiée par LeadMagic',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec LeadMagic.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    'Comparez les lignes catch-all avec ce que LeadMagic a renvoyé pour les mêmes adresses.',
  ],
  ctaHeadline: 'Vérifiez votre liste sans forfait mensuel',
  faqs: [
    {
      q: 'Combien coûte LeadMagic ?',
      a: `LeadMagic démarre à 99 $ par mois pour 5${K}000 crédits. Les forfaits vont jusqu'à 849 $ par mois pour 100${K}000 crédits. La validation d'emails coûte 0,25 crédit par résultat concluant. Le forfait à 99 $ couvre donc 20${K}000 vérifications.`,
    },
    {
      q: 'LeadMagic a-t-il une offre gratuite ?',
      a: `Non. LeadMagic indique qu'il n'y a pas de crédits gratuits. Sa fonction Search a un essai de 14 jours. Giggal.ai donne 1${K}000 crédits gratuits sans carte, utilisables sur un import en masse.`,
    },
    {
      q: 'Giggal.ai est-il une bonne alternative à LeadMagic ?',
      a: `Oui, si vous avez seulement besoin de vérifier des emails. Giggal.ai vérifie des listes, renvoie un résultat sur les adresses catch-all et coûte 9,90 $ les 10${K}000. Il ne trouve ni emails ni numéros de téléphone. Il ne remplace donc pas les produits de données de LeadMagic.`,
    },
    {
      q: 'LeadMagic facture-t-il les résultats inconnus ?',
      a: 'Non. LeadMagic facture 0,25 crédit pour un résultat concluant et rien pour un résultat inconnu. Giggal.ai rembourse aussi le crédit quand un résultat est inconnu.',
    },
    {
      q: "LeadMagic vaut-il son prix pour la seule vérification d'emails ?",
      a: `Oui, si vous utilisez ses produits de données chaque mois. Pour la vérification seule, vous payez au moins 99 $ par mois. Giggal.ai vend 10${K}000 vérifications pour 9,90 $, en un seul achat.`,
    },
    {
      q: 'Le test catch-all de LeadMagic est-il neutre ?',
      a: "Non. LeadMagic l'a publié en février 2026 et s'est classé premier. Lisez-le comme un test d'éditeur. Giggal.ai ne faisait pas partie des outils mesurés.",
    },
  ],
  breadcrumb: 'Alternative à LeadMagic',
}

export default cfg
