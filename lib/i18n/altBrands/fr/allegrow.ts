// French Allegrow alternative page. Translated from app/(en)/allegrow-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths, estimate note) from lib/i18n/altBrands/fr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' '

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'allegrow',
  path: '/fr/alternative-a-allegrow',
  cluster: 'altAllegrow',
  metaTitle: "Alternative à Allegrow : tarifs d'Allegrow comparés | Giggal.ai",
  ogTitle: "Une alternative à Allegrow que vous payez à l'email",
  desc: `Tarifs d'Allegrow : dès 99 $/mois pour 5${K}000 contacts. Giggal.ai vérifie les emails catch-all et derrière un SEG à 9,90 $ les 10${K}000, crédits sans expiration.`,
  h1: ['Une ', 'alternative à Allegrow', " que vous payez à l'email"],
  heroP: `Allegrow est une plateforme de vérification d'emails et de délivrabilité pour les équipes commerciales. Elle est vendue en forfait mensuel, dès 99 $ pour 5${K}000 contacts. Giggal.ai vérifie les emails avec des crédits achetés en une seule fois. 10${K}000 crédits coûtent 9,90 $ et n'expirent jamais.`,
  bluf: [
    { k: 'Facturation', v: "Allegrow est un forfait mensuel. Les crédits Giggal.ai s'achètent en une seule fois." },
    { k: 'Prix', v: `Allegrow Starter coûte 99 $ par mois pour 5${K}000 contacts. Giggal.ai coûte 9,90 $ les 10${K}000.` },
    { k: 'Catch-all', v: 'Les deux renvoient valide ou invalide sur les adresses catch-all. Les deux citent Proofpoint et Mimecast.' },
    { k: 'Outils en plus', v: 'Allegrow suit aussi le placement en boîte de réception et la santé du domaine. Giggal.ai ne le fait pas.' },
  ],
  about: {
    heading: "Qu'est-ce qu'Allegrow ?",
    paragraphs: [
      "Allegrow est une plateforme de vérification d'emails B2B pour les équipes commerciales et les équipes chargées du chiffre d'affaires. Elle vérifie les contacts, y compris les adresses catch-all, et renvoie valide ou invalide. Allegrow dit ne jamais envoyer d'emails pour vérifier une adresse catch-all.",
      "Elle suit aussi la réputation de l'expéditeur et le placement en boîte de réception pour les boîtes connectées. Elle s'intègre à Outreach, Salesloft, HubSpot, Apollo, ZoomInfo et Clay.",
      'Allegrow propose des rapports SOC 2, et le SSO en option sur son forfait le plus élevé.',
    ],
  },
  pricingFirst: true,
  pricingHeading: "Tarifs d'Allegrow en 2026",
  pricingProse: `Allegrow Starter coûte 99 $ par mois pour 5${K}000 contacts. Les contacts supplémentaires coûtent 8 $ les 1${K}000. Scale Plus Unlimited coûte 1${K}340 $ par mois, facturé à l'année, sans limite de crédits. Un forfait API est sur devis.`,
  pricingExtra: [
    `Sur Starter, 10${K}000 contacts par mois reviennent donc à 139 $. C'est notre calcul à partir de ses tarifs publiés, pas un forfait affiché. Giggal.ai vend 10${K}000 crédits pour 9,90 $ et 100${K}000 pour 76 $, en un seul achat.`,
  ],
  reasons: {
    heading: 'Pourquoi les équipes cherchent une alternative à Allegrow',
    items: [
      { k: 'Coût mensuel', v: "Starter coûte 99 $ chaque mois. Les équipes qui vérifient quelques fois par an paient des mois qu'elles n'utilisent pas." },
      { k: 'Intégrations', v: 'Les intégrations natives HubSpot, Outreach et Salesloft sont sur Scale Plus. Starter se connecte à Clay par clé API.' },
      { k: "Limites de l'essai", v: `L'essai de 14 jours couvre 1${K}000 adresses, sans intégrations ni accès à l'API.` },
    ],
  },
  catchAllHeading: 'Allegrow vs Giggal.ai sur les emails catch-all et derrière une passerelle',
  catchAllProse:
    "Allegrow et Giggal.ai renvoient tous les deux un résultat valide ou invalide sur les adresses catch-all. Les deux citent aussi Proofpoint et Mimecast parmi les passerelles derrière lesquelles ils vérifient. La principale différence est la facturation. Allegrow utilise un quota mensuel de contacts. Giggal.ai facture 1 crédit par adresse, sur des crédits qui n'expirent jamais.",
  strengths: {
    heading: "Ce qu'Allegrow fait bien",
    intro: "Allegrow couvre plus que la vérification. C'est le meilleur choix pour ces besoins :",
  },
  others: {
    heading: 'Autres alternatives à Allegrow',
    intro: 'Ces outils vérifient aussi les adresses catch-all. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.',
    items: [
      { name: 'Scrubby', text: "Vérifie les domaines catch-all et les domaines protégés par une passerelle. Le paiement à l'usage coûte 0,008 $ par crédit, et les forfaits mensuels démarrent à 47 $." },
      { name: 'Listmint', text: `Vérifie les adresses catch-all sur une réserve de crédits séparée. Starter coûte 99 $ par mois pour 20${K}000 crédits standard et 5${K}000 crédits catch-all.` },
      { name: 'Bounceless', text: `Inclut des indices catch-all dans sa vérification à 1 crédit, et propose des outils de placement en boîte de réception. 10${K}000 crédits coûtent 29 $.` },
    ],
  },
  testHeading: 'Testez Giggal.ai face à vos résultats Allegrow',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec Allegrow.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    "Comparez les résultats catch-all avec ceux d'Allegrow pour les mêmes contacts.",
  ],
  ctaHeadline: 'Vérifiez les mêmes adresses difficiles, avec un prix par email',
  faqs: [
    {
      q: 'Combien coûte Allegrow ?',
      a: `Allegrow Starter coûte 99 $ par mois pour 5${K}000 contacts, avec des contacts supplémentaires à 8 $ les 1${K}000. Scale Plus Unlimited coûte 1${K}340 $ par mois, facturé à l'année. Le forfait API est sur devis.`,
    },
    {
      q: 'Allegrow a-t-il un essai gratuit ?',
      a: `Oui. Allegrow propose un essai de 14 jours pour 1${K}000 adresses au maximum, sans carte. Les intégrations et l'accès à l'API ne font pas partie de l'essai.`,
    },
    {
      q: 'Giggal.ai est-il une bonne alternative à Allegrow ?',
      a: `Oui, si vous avez seulement besoin de vérification. Giggal.ai renvoie un résultat sur les adresses catch-all et derrière une passerelle à 9,90 $ les 10${K}000. Il ne suit ni le placement en boîte de réception ni la réputation de l'expéditeur.`,
    },
    {
      q: 'Allegrow envoie-t-il des emails pour vérifier les adresses catch-all ?',
      a: "Non. Allegrow dit ne jamais envoyer d'emails pour vérifier une adresse catch-all.",
    },
    {
      q: 'Allegrow a-t-il un forfait illimité ?',
      a: "Oui. Scale Plus Unlimited coûte 1 340 $ par mois, facturé à l'année, avec une vérification illimitée via les intégrations ou un fichier CSV. Giggal.ai n'a pas de forfait illimité.",
    },
  ],
  breadcrumb: 'Alternative à Allegrow',
}

export default cfg
