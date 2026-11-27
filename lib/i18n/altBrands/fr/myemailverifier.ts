// French MyEmailVerifier alternative page. Translated from
// app/(en)/myemailverifier-alternative (2026-11-27). Its prices come from an
// August 2026 check, as the English says. The competitor's words (free tier,
// expiry, strengths) match lib/i18n/altBrands/fr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' ' // narrow no-break space in thousands: 10 000

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'myemailverifier',
  path: '/fr/alternative-a-myemailverifier',
  cluster: 'altMyemailverifier',
  metaTitle: 'Alternative à MyEmailVerifier : prix et catch-all | Giggal.ai',
  ogTitle: 'Une alternative à MyEmailVerifier pour les listes B2B',
  desc: `MyEmailVerifier donne 100 crédits gratuits par jour mais se limite à un statut catch-all. Giggal.ai renvoie un résultat sur ces emails à 9,90 $ les 10${K}000.`,
  h1: ['Une ', 'alternative à MyEmailVerifier', ' pour les listes B2B avec des domaines catch-all'],
  heroP: `MyEmailVerifier est un vérificateur d'emails à bas prix, avec 100 crédits gratuits par jour. Il donne aux adresses catch-all leur propre statut et ne les confirme pas. Giggal.ai renvoie un résultat sur ces adresses, à 9,90 $ les 10${K}000 emails.`,
  bluf: [
    { k: 'Catch-all', v: 'MyEmailVerifier se limite à un statut catch-all. Giggal.ai renvoie un résultat.' },
    { k: 'Prix', v: `10${K}000 crédits coûtent 15 $ chez MyEmailVerifier et 9,90 $ chez Giggal.ai.` },
    { k: 'Gros volumes', v: 'Un million de crédits coûte 349 $ chez MyEmailVerifier et 680 $ chez Giggal.ai.' },
    { k: 'Crédits gratuits', v: `MyEmailVerifier en donne 100 par jour. Giggal.ai en donne 1${K}000 une seule fois, sans carte.` },
  ],
  about: {
    heading: "Qu'est-ce que MyEmailVerifier ?",
    paragraphs: [
      "MyEmailVerifier est un service de vérification d'emails proposé par myemailverifier.com. Il vérifie des listes en masse et des emails un par un, et il a une API.",
      `Il donne 100 crédits gratuits chaque jour. Les crédits payants commencent à 4 $ pour 1${K}000 et n'expirent jamais.`,
      'Il renvoie les adresses catch-all avec un statut catch-all distinct. Il ne confirme pas si ces boîtes existent.',
    ],
  },
  reasons: {
    heading: 'Pourquoi les utilisateurs cherchent une alternative à MyEmailVerifier',
    items: [
      { k: 'Catch-all', v: 'Les adresses catch-all reviennent sans réponse claire. Sur une liste B2B, elles peuvent représenter une grande part de la liste.' },
      { k: 'Passerelles', v: "MyEmailVerifier ne cite ni Proofpoint, ni Mimecast, ni aucune autre passerelle derrière laquelle il peut vérifier." },
    ],
  },
  catchAllHeading: 'Emails catch-all : MyEmailVerifier face à Giggal.ai',
  catchAllProse:
    "Beaucoup de domaines d'entreprise acceptent toutes les adresses. Une vérification simple ne peut donc pas distinguer une vraie adresse d'une fausse. MyEmailVerifier marque ces adresses catch-all et vous laisse décider. Giggal.ai fait des vérifications supplémentaires sur ces adresses et renvoie l'un des quatre résultats ci-dessous, à 1 crédit chacune.",
  pricingHeading: 'Tarifs de MyEmailVerifier face à Giggal.ai',
  pricingProse: `MyEmailVerifier vend des crédits qui n'expirent jamais. Lors de notre relevé d'août 2026, 1${K}000 crédits coûtaient 4 $, 10${K}000 coûtaient 15 $, 100${K}000 coûtaient 99 $ et un million coûtait 349 $.`,
  pricingExtra: [
    `Giggal.ai vend 10${K}000 crédits pour 9,90 $, 100${K}000 pour 76 $ et un million pour 680 $. À un million, MyEmailVerifier coûte moins cher. Giggal.ai ajoute un résultat sur les adresses catch-all et derrière une passerelle.`,
  ],
  strengths: {
    heading: 'Quand MyEmailVerifier est un bon choix',
    intro: 'MyEmailVerifier est un bon choix pour certaines listes :',
  },
  others: {
    heading: 'Autres alternatives à MyEmailVerifier',
    intro: 'Ces vérificateurs ont aussi des prix bas ou des crédits gratuits chaque jour. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.',
    items: [
      { name: 'QuickEmailVerification', text: `Donne aussi 100 crédits gratuits par jour. 10${K}000 crédits permanents coûtent 60 $.` },
      { name: 'Bounceless', text: `Donne 1${K}000 crédits gratuits par mois avec un email professionnel. 10${K}000 crédits coûtent 29 $, indices catch-all inclus.` },
      { name: 'no2bounce', text: `10${K}000 crédits coûtent 20 $ et n'expirent jamais. Il envoie des messages de test pour confirmer les boîtes catch-all.` },
    ],
  },
  testHeading: 'Vérifiez vos lignes catch-all avec Giggal.ai',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec MyEmailVerifier.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    'Comparez les lignes que MyEmailVerifier a marquées catch-all.',
  ],
  ctaHeadline: 'Obtenez un résultat sur les adresses catch-all',
  faqs: [
    {
      q: 'Combien coûte MyEmailVerifier ?',
      a: `Lors de notre relevé d'août 2026, 1${K}000 crédits coûtaient 4 $, 10${K}000 coûtaient 15 $, 100${K}000 coûtaient 99 $ et un million coûtait 349 $. Les crédits n'expirent jamais.`,
    },
    {
      q: 'MyEmailVerifier est-il gratuit ?',
      a: `Il donne 100 crédits gratuits chaque jour. Ces crédits quotidiens se renouvellent au lieu de s'arrêter après un essai. Giggal.ai donne 1${K}000 crédits gratuits une seule fois, sans carte.`,
    },
    {
      q: 'MyEmailVerifier vérifie-t-il les emails catch-all ?',
      a: 'Il détecte les domaines catch-all et renvoie un statut catch-all. Il ne confirme pas la boîte. Giggal.ai renvoie un résultat sur les adresses catch-all, à 1 crédit chacune.',
    },
    {
      q: 'Les crédits Giggal.ai expirent-ils ?',
      a: "Non. Les crédits Giggal.ai n'expirent jamais. Les crédits MyEmailVerifier n'expirent jamais non plus.",
    },
  ],
  breadcrumb: 'Alternative à MyEmailVerifier',
}

export default cfg
