// French Anymailfinder alternative page. Translated from app/(en)/anymailfinder-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/fr/facts.ts.
// "Anymailfinder" in one word in the title, H1 and H2s, "Anymail Finder" in the text.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const K = ' '
const NB = ' '

const cfg: AltL10nConfig = {
  locale: 'fr',
  slug: 'anymailfinder',
  path: '/fr/alternative-a-anymailfinder',
  cluster: 'altAnymailfinder',
  metaTitle: 'Alternative à Anymailfinder pour vérifier les emails | Giggal.ai',
  ogTitle: "Une alternative à Anymailfinder pour vérifier des listes d'emails",
  desc: `Vous cherchez une alternative à Anymailfinder ? Comparez les tarifs d'Anymail Finder avec Giggal.ai, un vérificateur à l'usage à 9,90 $ les 10${K}000 crédits.`,
  h1: ['Une ', 'alternative à Anymailfinder', ' pour les listes que vous avez déjà'],
  heroP: `Anymail Finder est conçu pour trouver des adresses email. Son vérificateur est un outil annexe, payé sur un forfait mensuel. Si votre liste existe déjà et que vous devez seulement la vérifier, Giggal.ai le fait pour 9,90 $ les 10${K}000 emails, sans abonnement.`,
  bluf: [
    { k: 'Rôle principal', v: 'Anymail Finder trouve des emails. Giggal.ai vérifie les emails que vous avez déjà.' },
    { k: 'Prix', v: `Une vérification coûte 0,2 crédit, sur des forfaits dès 29 $ par mois. Giggal.ai coûte 9,90 $ les 10${K}000, en un seul achat.` },
    { k: 'Crédits', v: "Les crédits Anymail Finder expirent si vous résiliez. Les crédits Giggal.ai n'expirent jamais." },
    { k: 'Inconnu', v: 'Anymail Finder facture chaque vérification. Giggal.ai rembourse le crédit sur les résultats inconnus.' },
  ],
  about: {
    heading: "Qu'est-ce qu'Anymail Finder ?",
    paragraphs: [
      "Anymail Finder, aussi écrit Anymailfinder, est un outil de recherche d'emails pour la vente B2B. Vous lui donnez un nom et une entreprise, et il renvoie un email professionnel vérifié. Il peut aussi chercher par domaine, par intitulé de poste ou par URL LinkedIn.",
      `Il propose une extension Chrome, un import en masse jusqu'à 100${K}000 lignes et une API. Trouver l'email d'une personne coûte 1 crédit, et seulement quand un email vérifié est trouvé.`,
      "Anymail Finder a aussi un vérificateur d'emails pour les listes venant d'autres sources. Chaque vérification coûte 0,2 crédit et est facturée à chaque fois. Il renvoie valide, risqué ou invalide.",
    ],
  },
  reasons: {
    heading: 'Pourquoi les utilisateurs cherchent une alternative à Anymailfinder',
    items: [
      { k: 'Forfait mensuel', v: 'Vos crédits restent seulement tant que vous êtes abonné. Si vous résiliez, ils expirent à la fin de la période de facturation.' },
      { k: 'Par vérification', v: "Le vérificateur facture 0,2 crédit pour chaque vérification, y compris pour les adresses qu'il ne peut pas confirmer." },
      { k: "Carte pour l'essai", v: `L'essai de 7 jours demande une carte. Giggal.ai donne 1${K}000 crédits gratuits sans carte.` },
      { k: 'Passerelles', v: "Anymail Finder n'annonce pas de prise en charge des secure email gateways comme Proofpoint ou Mimecast." },
    ],
  },
  catchAllHeading: 'Comment Anymail Finder et Giggal.ai traitent les emails catch-all',
  catchAllProse:
    "Anymail Finder dit qu'il vérifie la plupart des adresses catch-all comme valides ou invalides. Les quelques adresses qu'il ne peut pas joindre restent risquées. Giggal.ai renvoie aussi un résultat sur les adresses catch-all, à 1 crédit par adresse, et vérifie en plus derrière 15 secure email gateways citées par leur nom. Quand Giggal.ai ne peut pas obtenir de réponse, le résultat est inconnu et le crédit vous est rendu.",
  pricingHeading: "Tarifs d'Anymail Finder pour la vérification d'emails",
  pricingProse: `Anymail Finder vend des forfaits mensuels, de 29 $ pour 400 crédits jusqu'à 799 $ pour 100${K}000 crédits. La facturation annuelle fait économiser 33${NB}%. Une vérification coûte 0,2 crédit, donc 10${K}000 vérifications utilisent 2${K}000 crédits.`,
  pricingExtra: [
    `Pour 10${K}000 vérifications par mois, il faut donc le forfait à 89 $, et pour 100${K}000 vérifications le forfait à 299 $. Les crédits non utilisés sont reportés tant que vous restez abonné. Giggal.ai vend 10${K}000 crédits pour 9,90 $ et 100${K}000 pour 76 $, en un seul achat, sans expiration.`,
  ],
  strengths: {
    heading: 'Quand Anymail Finder est le meilleur choix',
    intro: 'Anymail Finder fait des choses que Giggal.ai ne fait pas. Choisissez-le pour ces besoins :',
  },
  others: {
    heading: 'Autres alternatives à Anymailfinder',
    intro: 'Ces outils trouvent des emails, les vérifient, ou font les deux. Les prix viennent du site de chaque éditeur, relevés le 27 novembre 2026.',
    items: [
      { name: 'Findymail', text: `Trouve et vérifie des emails, avec une extension Chrome pour LinkedIn et Sales Navigator. Starter coûte 99 $ par mois pour 5${K}000 crédits de recherche et 5${K}000 crédits de vérification.` },
      { name: 'LeadMagic', text: "Une plateforme de données B2B avec recherche d'emails, numéros de mobile et validation. La validation coûte 0,25 crédit par résultat concluant, sur des forfaits dès 99 $ par mois." },
      { name: 'Scrubby', text: "Un vérificateur pour les adresses catch-all et les adresses protégées par une passerelle. Les crédits à l'usage coûtent 0,008 $ pièce et n'expirent jamais." },
    ],
  },
  testHeading: 'Vérifiez un export Anymail Finder avec Giggal.ai',
  testSteps: [
    'Exportez une liste que vous avez déjà vérifiée avec Anymail Finder.',
    `Vérifiez-la ici avec les 1${K}000 crédits gratuits. Sans carte.`,
    "Comparez les lignes qu'Anymail Finder a marquées risquées avec les résultats de Giggal.ai.",
  ],
  ctaHeadline: 'Vérifiez les emails que vous avez déjà trouvés',
  faqs: [
    {
      q: 'Quelle est la meilleure alternative à Anymailfinder ?',
      a: `Cela dépend du besoin. Pour trouver des emails, regardez Findymail ou LeadMagic. Pour vérifier une liste que vous avez déjà, Giggal.ai coûte 9,90 $ les 10${K}000 crédits, sans abonnement et avec des crédits qui n'expirent jamais.`,
    },
    {
      q: 'Combien coûte Anymail Finder ?',
      a: `Les forfaits mensuels vont de 29 $ pour 400 crédits à 799 $ pour 100${K}000 crédits. La facturation annuelle fait économiser 33${NB}%. Vérifier un email venant d'une autre source coûte 0,2 crédit.`,
    },
    {
      q: 'Anymail Finder a-t-il un essai gratuit ?',
      a: `Oui. Il propose un essai de 7 jours avec 100 crédits. Vous ajoutez une carte, qui est vérifiée mais pas débitée. Giggal.ai donne 1${K}000 crédits gratuits sans carte.`,
    },
    {
      q: 'Giggal.ai peut-il trouver des adresses email comme Anymail Finder ?',
      a: "Non. Giggal.ai vérifie seulement les adresses que vous avez déjà. Utilisez d'abord un outil de recherche d'emails, puis vérifiez la liste avec Giggal.ai avant l'envoi.",
    },
    {
      q: 'Les crédits Anymail Finder expirent-ils ?',
      a: "Ils sont reportés sans plafond tant que votre forfait est actif. Si vous résiliez, ils expirent à la fin de la période de facturation. Les crédits Giggal.ai n'expirent jamais.",
    },
  ],
  breadcrumb: 'Alternative à Anymail Finder',
}

export default cfg
