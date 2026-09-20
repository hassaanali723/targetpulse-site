import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// French home. No head term of its own in the data (the demand sits on
// /fr/verifier-adresse-mail); one page for every French-speaking country. The
// hero sends the visitor to the free checker first and to sign-up second
// (plans/12 section 3.3). No gateway line in the hero, no G2 rating in the
// proof line (plans/11 items 10 and 12). No-break spaces before ":" and "?".

const DESC =
  'Vérification d’email qui confirme la boîte sur les domaines catch-all : taux de rebond sous 3 %, vérification en masse, API et 1 000 crédits offerts sans carte.'

export const metadata: Metadata = {
  title: { absolute: 'Service de Vérification d’Adresses Email | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/fr', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    title: 'Service de vérification d’adresses email',
    description: DESC,
    url: 'https://giggal.ai/fr',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai vérification d’email' }],
  },
  twitter: { card: 'summary_large_image', title: 'Service de vérification d’adresses email', description: DESC },
}

const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'Vérification d’adresses email',
  h1Accent: 'qui résout le catch-all',
  para1: (
    <>
      Un service de vérification d&apos;email qui contrôle la boîte elle-même, pas seulement la syntaxe. Taux de rebond{' '}
      <strong className="text-indigo-600 font-extrabold">sous 3&nbsp;%</strong>, et les{' '}
      <strong className="text-slate-900 font-extrabold">30&nbsp;% de chaque liste B2B</strong> que les autres outils
      marquent «&nbsp;risqué&nbsp;» redeviennent délivrables.
    </>
  ),
  para2: (
    <>
      <a href="#masse" className={link}>Vérification en masse</a> jusqu&apos;à 50&nbsp;000 adresses par fichier, plus une API.
      Fonctionne sur les{' '}
      <Link href="/fr/verification-catch-all" className={link}>domaines catch-all</Link>.
    </>
  ),
  freeTitle: '1 000 vérifications offertes',
  freeText: 'Commencez à nettoyer votre liste maintenant. Sans carte bancaire.',
  ctaPrimary: { label: 'Vérifier une adresse gratuitement', href: '/fr/verifier-adresse-mail' },
  ctaSecondary: { label: 'Voir les tarifs', href: '/fr/tarifs' },
  proof: 'Plus de 500 millions d’emails vérifiés',
  stats: [
    { n: '500M+', l: 'Emails vérifiés' },
    { n: '98,5 %', l: 'Précision sur les listes B2B' },
    { n: '< 3 %', l: 'Taux de rebond après nettoyage' },
    { n: '1 000', l: 'Crédits offerts, sans carte' },
  ],
  consoleTitle: 'Vérifiez une adresse en temps réel',
  consoleText: 'Le même moteur que la vérification en masse, une adresse à la fois. Gratuit et sans inscription.',
  catchAll: {
    title: 'Pourquoi les adresses catch-all ont besoin d’un vrai verdict',
    intro: (
      <>
        Un{' '}
        <Link href="/fr/verification-catch-all" className={link}>domaine catch-all</Link> accepte le courrier pour
        n&apos;importe quelle adresse, qu&apos;elle existe ou non, donc la réponse SMTP sur laquelle les outils
        standards s&apos;appuient ne dit rien. Ils écrivent «&nbsp;risqué&nbsp;» et vous laissent parier à
        l&apos;aveugle sur un tiers de la liste&nbsp;:
      </>
    ),
    standardLabel: 'Vérificateurs standards',
    standardStat: '35 %',
    standardCaption: 'Risque de rebond moyen',
    standardText: 'Ils vous obligent à jeter des contacts valides ou à risquer le blocage de vos domaines d’envoi.',
    verifiedBadge: 'Vérifié',
    verifiedStat: '< 3 %',
    verifiedCaption: 'Rebonds à l’envoi',
    verifiedText: 'Identifie les boîtes professionnelles actives pour que votre prospection soit lue.',
  },
  featuresId: 'masse',
  featuresTitle: 'Vérificateur et testeur d’email : nettoyage en masse, API et intégrations avec un seul solde',
  featuresText: 'Importez une liste, appelez l’API ou connectez votre CRM : chaque chemin exécute la même vérification d’adresse email.',
  features: [
    { title: 'Nettoyage de listes en masse', body: 'Importez un fichier CSV ou TXT et vérifiez des milliers de contacts en quelques minutes, doublons supprimés.' },
    { title: 'Vérification catch-all', body: 'Confirme la délivrabilité sur les domaines professionnels catch-all que les contrôles standards marquent « inconnu ».' },
    { title: 'Passerelles de sécurité', body: 'Vérifie les boîtes derrière Proofpoint, Mimecast et Barracuda, là où la plupart des vérificateurs s’arrêtent.' },
    { title: 'API pour les développeurs', body: 'Intégrez la vérification en temps réel dans vos formulaires d’inscription ou vos applications.' },
    { title: 'Intégrations', body: 'Synchronisez les contacts vérifiés avec HubSpot, Mailchimp, Zapier, n8n et vos outils de prospection habituels.' },
    { title: 'Tarifs publics', body: 'Chaque palier de volume est publié, à l’usage ou par abonnement avec 10 % de remise.' },
  ],
  pricingId: 'tarifs',
  pricingTitle: 'Des tarifs simples, en dollars',
  pricingText: 'Vous ne payez que ce que vous utilisez. Les crédits n’expirent pas.',
  contactHref: '/fr/contact',
  faqTitle: 'Questions fréquentes',
  faqMore: 'D’autres questions ?',
  faqMoreLink: 'Écrivez-nous',
  faq: [
    {
      q: 'Qu’est-ce qui distingue Giggal.ai des autres vérificateurs ?',
      a: 'Il résout les adresses catch-all et celles protégées par des passerelles de sécurité (Mimecast, Proofpoint, Barracuda) avec un verdict clair, valide ou invalide, au lieu de l’étiquette « risqué » sur laquelle les autres outils abandonnent. Dans une liste B2B, ces adresses représentent environ un tiers du total.',
    },
    {
      q: 'Quelle est la précision de la vérification ?',
      a: '98,5 % sur les listes professionnelles, avec un taux de rebond qui reste sous 3 % après nettoyage. Les résultats « inconnu » sont remboursés en crédits.',
    },
    {
      q: 'Comment fonctionnent les crédits ?',
      a: 'Une vérification consomme un crédit, quel que soit le type d’adresse : catch-all et passerelle compris. Les crédits n’expirent pas. Les 1 000 premiers sont offerts, sans carte.',
    },
    {
      q: 'Puis-je importer un fichier ?',
      a: 'Oui : CSV, TXT ou Excel. Les résultats arrivent en quelques minutes même sur de grandes listes, avec export CSV, Excel ou JSON et doublons supprimés.',
    },
    {
      q: 'Y a-t-il une API ?',
      a: 'Oui, une API REST avec vérification unitaire et en masse, plus un serveur MCP pour vérifier depuis Claude, ChatGPT et Cursor. La documentation est en anglais.',
    },
    {
      q: 'Puis-je tester une seule adresse sans m’inscrire ?',
      a: 'Oui, avec le vérificateur d’email gratuit : sans inscription, sans carte, sans envoyer le moindre message au destinataire.',
    },
  ],
  ctaHeadline: 'Commencez avec 1 000 vérifications offertes',
}

export default function HomeFr() {
  return <HomeL10n locale="fr" content={content} />
}
