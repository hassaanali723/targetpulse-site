// French QuickEmailVerification alternative page. Translated from
// app/(en)/quickemailverification-alternative (2026-11-27). The competitor's
// words (free tier, expiry, strengths) match lib/i18n/altBrands/fr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' ' // narrow no-break space in thousands: 10 000
const NB = ' ' // no-break space before the percent sign: 99 %

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'quickemailverification',
  path: '/fr/alternative-a-quickemailverification',
  cluster: 'altQuickemailverification',
  metaTitle: 'Alternative à QuickEmailVerification et tarifs | Giggal.ai',
  ogTitle: 'Une alternative à QuickEmailVerification qui vérifie le catch-all',
  desc: `QuickEmailVerification facture 60 $ les 10${K}000 et se limite à un statut catch-all. Giggal.ai renvoie un résultat sur ces emails à 9,90 $ les 10${K}000.`,
  h1: ['Une ', 'alternative à QuickEmailVerification', ' qui vérifie les emails catch-all'],
  heroP: `QuickEmailVerification est un vérificateur d'emails présent depuis longtemps, avec 100 crédits gratuits par jour. Il marque les adresses catch-all comme catch-all et s'arrête là. Giggal.ai renvoie un résultat sur ces adresses, à 9,90 $ les 10${K}000 emails.`,
  bluf: [
    { k: 'Catch-all', v: 'QuickEmailVerification se limite à un statut catch-all. Giggal.ai renvoie un résultat.' },
    { k: 'Prix', v: `10${K}000 crédits coûtent 60 $ chez QuickEmailVerification et 9,90 $ chez Giggal.ai.` },
    { k: 'Crédits gratuits', v: `QuickEmailVerification en donne 100 par jour. Giggal.ai en donne 1${K}000 une seule fois, sans carte.` },
    { k: 'Expiration', v: "Les crédits à l'usage n'expirent jamais, sur les deux outils." },
  ],
  about: {
    heading: "Qu'est-ce que QuickEmailVerification ?",
    paragraphs: [
      "QuickEmailVerification est un service de vérification d'emails proposé par quickemailverification.com. Il vérifie des listes en masse, des emails un par un et des formulaires d'inscription via une API REST.",
      "Son offre gratuite donne 100 crédits chaque jour. Il dit s'intégrer à plus de 50 outils marketing, dont Zapier et WordPress.",
      `Son site affiche des badges ISO 27001, RGPD, CCPA et HIPAA. Il annonce une précision de 99${NB}%.`,
    ],
  },
  reasons: {
    heading: 'Pourquoi les équipes cherchent une alternative à QuickEmailVerification',
    items: [
      { k: 'Catch-all', v: "Les adresses catch-all reviennent avec le statut catch-all. Vous devez encore décider s'il faut leur écrire." },
      { k: 'Prix', v: `10${K}000 crédits coûtent 60 $, et 100${K}000 coûtent 320 $.` },
      { k: 'Passerelles', v: "Il n'annonce pas de prise en charge des secure email gateways comme Proofpoint ou Mimecast." },
    ],
  },
  catchAllHeading: 'Ce que deviennent les emails catch-all dans chaque outil',
  catchAllProse:
    "QuickEmailVerification renvoie les adresses catch-all avec un statut catch-all. Il ne confirme pas la boîte. Sur une liste B2B, beaucoup d'adresses peuvent ainsi rester sans réponse claire. Giggal.ai fait des vérifications supplémentaires sur ces adresses et renvoie l'un de quatre résultats, à 1 crédit chacune.",
  pricingHeading: 'Tarifs de QuickEmailVerification face à Giggal.ai',
  pricingProse: `QuickEmailVerification vend des crédits permanents qui n'expirent jamais. 500 crédits coûtent 4 $, 10${K}000 coûtent 60 $, 100${K}000 coûtent 320 $ et un million coûte 1${K}350 $. Une offre gratuite donne 100 crédits par jour.`,
  pricingExtra: [
    `Giggal.ai vend 10${K}000 crédits pour 9,90 $, 100${K}000 pour 76 $ et un million pour 680 $. Ses crédits n'expirent jamais non plus.`,
  ],
  strengths: {
    heading: 'Quand QuickEmailVerification est un bon choix',
    intro: 'QuickEmailVerification a de vrais points forts :',
  },
  others: {
    heading: 'Autres alternatives à QuickEmailVerification',
    intro: 'Ces vérificateurs traitent les adresses catch-all de façons différentes. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.',
    items: [
      { name: 'Bounceless', text: `10${K}000 crédits coûtent 29 $, avec les indices catch-all inclus dans le prix.` },
      { name: 'no2bounce', text: `10${K}000 crédits coûtent 20 $. Il envoie des messages de test pour confirmer les boîtes catch-all.` },
      { name: 'Mailfloss', text: `Nettoie les listes chaque jour dans 41 plateformes email. Les crédits prépayés coûtent 40 $ les 10${K}000.` },
    ],
  },
  testHeading: 'Revérifiez vos lignes catch-all avec Giggal.ai',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec QuickEmailVerification.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    'Regardez les lignes que QuickEmailVerification a marquées catch-all et comparez les résultats.',
  ],
  ctaHeadline: 'Obtenez un résultat sur les adresses marquées catch-all',
  faqs: [
    {
      q: 'Combien coûte QuickEmailVerification ?',
      a: `Les crédits permanents commencent à 4 $ pour 500. 10${K}000 coûtent 60 $, 100${K}000 coûtent 320 $ et un million coûte 1${K}350 $. Ces crédits n'expirent jamais.`,
    },
    {
      q: 'QuickEmailVerification est-il gratuit ?',
      a: `Il a une offre gratuite de 100 crédits par jour, et les crédits sont remis à zéro chaque jour. Giggal.ai donne 1${K}000 crédits gratuits une seule fois, sans carte, utilisables sur un import en masse.`,
    },
    {
      q: 'QuickEmailVerification vérifie-t-il les emails catch-all ?',
      a: 'Il détecte les domaines catch-all et renvoie un statut catch-all. Il ne confirme pas si la boîte existe. Giggal.ai renvoie un résultat sur ces adresses.',
    },
    {
      q: 'Giggal.ai est-il une bonne alternative à QuickEmailVerification ?',
      a: `Oui, pour les listes B2B avec beaucoup d'adresses catch-all. Giggal.ai coûte 9,90 $ les 10${K}000 crédits et renvoie un résultat sur ces adresses.`,
    },
  ],
  breadcrumb: 'Alternative à QuickEmailVerification',
}

export default cfg
