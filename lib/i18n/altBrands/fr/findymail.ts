// French Findymail alternative page. Translated from app/(en)/findymail-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/fr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' '
const NB = ' '

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'findymail',
  path: '/fr/alternative-a-findymail',
  cluster: 'altFindymail',
  metaTitle: 'Alternatives à Findymail et tarifs de Findymail | Giggal.ai',
  ogTitle: 'Alternatives à Findymail et tarifs comparés',
  desc: `Tarifs de Findymail : dès 99 $ par mois. Comparez les alternatives et concurrents de Findymail, dont Giggal.ai, un vérificateur à 9,90 $ les 10${K}000 crédits.`,
  h1: ['Une ', 'alternative à Findymail', ' pour vérifier les emails que vous avez déjà'],
  heroP: `Findymail trouve des emails B2B et les vérifie. Ses forfaits démarrent à 99 $ par mois. Si vous avez déjà une liste et devez seulement la vérifier, Giggal.ai le fait pour 9,90 $ les 10${K}000 emails. Vous achetez les crédits une fois, et ils n'expirent jamais.`,
  bluf: [
    { k: 'Rôle principal', v: 'Findymail trouve des emails, puis les vérifie. Giggal.ai vérifie seulement.' },
    { k: 'Prix', v: `Findymail démarre à 99 $ par mois. Giggal.ai coûte 9,90 $ les 10${K}000 crédits, en un seul achat.` },
    { k: 'Crédits gratuits', v: `Findymail donne 10 crédits gratuits. Giggal.ai en donne 1${K}000, sans carte.` },
    { k: 'Garantie', v: `Findymail promet un taux de rebond sous 5${NB}%, et rembourse les crédits au-delà.` },
  ],
  about: {
    heading: "Qu'est-ce que Findymail ?",
    paragraphs: [
      "Findymail est un outil de recherche d'emails B2B. Il trouve des emails professionnels à partir d'un nom et d'une entreprise, d'une URL LinkedIn ou d'une recherche Sales Navigator. Chaque email trouvé est vérifié avant de vous être remis.",
      "Il propose une extension Chrome, un module complémentaire Google Sheets, l'import en masse, une API et une recherche de numéros de téléphone. Il se connecte entre autres à Clay, HubSpot, Salesforce, Pipedrive, Instantly, Smartlead et Lemlist.",
      "Findymail vend aussi des crédits de vérification pour les listes venant d'autres sources. Il dit vérifier les emails catch-all que d'autres outils marquent comme risqués.",
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Tarifs de Findymail en 2026',
  pricingProse:
    "Findymail a deux types de forfaits. Les forfaits basés sur l'usage sont Individual à 99 $ par mois, Pro à 249 $, Team à 399 $ et Scale à 999 $. Ils indiquent un nombre d'utilisateurs et une taille de fichier, pas un nombre de crédits.",
  pricingExtra: [
    `Le forfait Starter, basé sur les crédits, coûte 99 $ par mois. Il comprend 5${K}000 crédits de recherche et 5${K}000 crédits de vérification. Les volumes plus importants sont sur devis Entreprise. Les crédits non utilisés sont reportés, jusqu'à deux fois le quota mensuel.`,
    `Giggal.ai n'a pas de forfait mensuel. 10${K}000 crédits coûtent 9,90 $, 100${K}000 coûtent 76 $ et un million coûte 680 $.`,
  ],
  reasons: {
    heading: 'Pourquoi les équipes cherchent une alternative à Findymail',
    items: [
      { k: 'Vérifier seulement', v: "Beaucoup d'équipes ont déjà une liste. Elles n'ont pas besoin d'un outil de recherche, seulement d'un vérificateur." },
      { k: 'Volume', v: `Starter comprend 5${K}000 crédits de vérification par mois. Les volumes plus importants demandent un devis Entreprise.` },
      { k: 'Facture mensuelle', v: "Findymail facture chaque mois. Les crédits Giggal.ai s'achètent en une seule fois et n'expirent jamais." },
      { k: 'Petit essai', v: "Findymail donne 10 crédits gratuits. C'est trop peu pour tester une vraie liste." },
    ],
  },
  catchAllHeading: 'Findymail vs Giggal.ai sur les emails catch-all',
  catchAllProse:
    "Findymail vérifie les emails catch-all que d'autres outils marquent comme risqués. Giggal.ai renvoie aussi un résultat sur les adresses catch-all, à 1 crédit par adresse. Il vérifie aussi les adresses derrière 15 secure email gateways citées par leur nom, comme Proofpoint, Mimecast et Barracuda. Findymail n'annonce pas de prise en charge des passerelles.",
  strengths: {
    heading: 'Ce que Findymail fait bien',
    intro: 'Findymail est le meilleur choix si vous avez besoin de ceci :',
  },
  others: {
    heading: 'Autres alternatives et concurrents de Findymail',
    intro: 'Ces outils trouvent ou vérifient aussi des emails B2B. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.',
    items: [
      { name: 'Anymail Finder', text: `Un outil de recherche d'emails avec des forfaits dès 29 $ par mois pour 400 crédits. Il promet qu'au moins 97${NB}% des emails qu'il trouve ne provoqueront pas de hard bounce.` },
      { name: 'LeadMagic', text: `Une plateforme de données B2B avec recherche d'emails, numéros de mobile et données d'entreprise. Les forfaits démarrent à 99 $ par mois pour 5${K}000 crédits partagés.` },
      { name: 'Allegrow', text: `Un vérificateur pour les équipes commerciales, qui suit aussi le placement en boîte de réception et la santé du domaine. Starter coûte 99 $ par mois pour 5${K}000 contacts.` },
    ],
  },
  testHeading: 'Vérifiez un export Findymail avec Giggal.ai',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec Findymail.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    'Comparez les lignes catch-all avec ce que Findymail a renvoyé pour les mêmes contacts.',
  ],
  ctaHeadline: 'Vérifiez votre liste sans abonnement',
  faqs: [
    {
      q: 'Combien coûte Findymail ?',
      a: `Les forfaits Findymail démarrent à 99 $ par mois. Le forfait Starter, basé sur les crédits, comprend 5${K}000 crédits de recherche et 5${K}000 crédits de vérification. Les forfaits basés sur l'usage vont de 99 $ à 999 $ par mois. Les volumes plus importants sont sur devis.`,
    },
    {
      q: 'Findymail a-t-il une offre gratuite ?',
      a: `Findymail donne 10 crédits gratuits pour tester, sans carte. Il n'y a pas d'offre gratuite permanente. Giggal.ai donne 1${K}000 crédits gratuits sans carte.`,
    },
    {
      q: 'Quelles sont les meilleures alternatives à Findymail ?',
      a: `Pour trouver des emails, Anymail Finder et LeadMagic sont des options courantes. Pour vérifier une liste que vous avez déjà, Giggal.ai coûte 9,90 $ les 10${K}000 crédits, sans abonnement.`,
    },
    {
      q: "Findymail est-il un bon outil de vérification d'emails ?",
      a: `Oui. Findymail vérifie chaque email qu'il trouve et promet un taux de rebond sous 5${NB}%. Starter comprend 5${K}000 crédits de vérification par mois. Les grandes listes demandent donc un forfait Entreprise ou un autre vérificateur.`,
    },
    {
      q: 'Giggal.ai peut-il trouver des emails comme Findymail ?',
      a: "Non. Giggal.ai vérifie seulement. Trouvez d'abord les emails, puis passez la liste dans Giggal.ai avant l'envoi.",
    },
    {
      q: 'Les crédits Findymail expirent-ils ?',
      a: "Les crédits non utilisés sont reportés d'un mois sur l'autre, jusqu'à deux fois votre quota mensuel. Les crédits Giggal.ai n'expirent jamais.",
    },
  ],
  breadcrumb: 'Alternative à Findymail',
}

export default cfg
