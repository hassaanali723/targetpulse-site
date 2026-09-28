import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
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

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'Vérification d’adresses email',
  h1Accent: 'qui résout le catch-all',
  heroSub: (
    <>
      Service de vérification d&apos;email avec vérification en masse&nbsp;: découvrez quelles adresses sont réelles, même sur les{' '}
      <Link href="/fr/verification-catch-all" className={heroLink}>domaines catch-all</Link>.
    </>
  ),
  rating: { score: '4,9', on: 'sur', reviews: '(129 avis)' },
  email: { label: 'Adresse email à vérifier', placeholder: 'nom@entreprise.fr', button: 'Vérifier gratuitement' },
  listQuestion: 'Une liste entière à nettoyer\u00a0?',
  listCta: 'Obtenez 1\u00a0000 vérifications d’email offertes',
  noCard: 'Sans carte bancaire.',
  stats: [
    { n: '500\u00a0M', suf: '+', l: 'Emails vérifiés' },
    { n: '98,5', suf: '\u00a0%', l: 'Précision sur les listes B2B' },
    { pre: '<\u00a0', n: '3', suf: '\u00a0%', l: 'Taux de rebond après nettoyage' },
    { n: '1\u00a0000', l: 'Crédits offerts, sans carte' },
  ],
  bulk: {
    id: 'masse',
    title: 'Vérification d’emails en masse pour toute votre liste',
    sub: 'Importez votre liste une seule fois\u00a0: nous vérifions chaque adresse qu’elle contient.',
    points: [
      'Un statut valide ou invalide pour chaque adresse',
      'Une vraie réponse, même pour les adresses catch-all',
      'CSV ou Excel, jusqu’à 50\u00a0000 adresses par fichier',
      'Téléchargez la liste nettoyée dès qu’elle est prête',
    ],
  },
  catchAll: {
    title: 'Pourquoi les adresses catch-all méritent votre attention',
    intro: (
      <>
        Certains serveurs de messagerie d’entreprise acceptent n’importe quelle adresse, réelle ou
        inventée. C’est ce qu’on appelle un{' '}
        <Link href="/fr/verification-catch-all" className={link}>domaine catch-all</Link>. La plupart des
        vérificateurs ne voient pas la différence, classent ces emails comme «&nbsp;risqué&nbsp;» et vous laissent
        décider.
      </>
    ),
    others: 'La plupart des vérificateurs',
    othersDetail: 'Catch-all, pas de réponse claire',
    ourDetail: 'Catch-all, boîte trouvée',
    risky: 'Risqué',
    deliverable: 'Délivrable',
    othersText: 'À vous de choisir\u00a0: envoyer et risquer un rebond, ou supprimer un contact qui existe peut-être.',
    ourText: 'Vous savez que l’adresse est réelle\u00a0: vous envoyez sans hésiter.',
  },
  features: {
    title: 'Vérificateur et testeur d’email : nettoyage en masse, API et intégrations avec un seul solde',
    intro: 'Importez une liste, appelez l’API ou connectez votre CRM : chaque chemin exécute la même vérification d’adresse email.',
    items: [
      { title: 'Nettoyage de listes en masse', body: 'Importez un fichier CSV ou Excel et obtenez les résultats en quelques minutes.', points: ['Jusqu’à 50\u00a0000 adresses par fichier', 'Liste nettoyée téléchargeable en CSV'], link: 'Nettoyer une liste gratuitement' },
      { title: 'Vérification catch-all', body: 'Une vraie réponse sur les domaines catch-all, plutôt qu’un «\u00a0risqué\u00a0».', points: ['Un crédit, comme toute autre vérification', 'Fonctionne derrière des passerelles comme Mimecast et Proofpoint'], link: 'Comment fonctionne la vérification catch-all' },
      { title: 'API pour les développeurs', body: 'Vérifiez les adresses dans vos formulaires d’inscription et vos applications.', points: ['Une adresse ou une liste entière par appel', 'Clés API depuis votre tableau de bord'], link: 'Documentation de l’API (en anglais)' },
      { title: 'Intégrations CRM et applications', body: 'Envoyez les contacts nettoyés vers HubSpot, Mailchimp et bien d’autres.', points: ['Fonctionne avec les outils que vous utilisez déjà', 'Zapier et n8n pour tout le reste'], link: 'Voir toutes les intégrations' },
      { title: 'Paiement à l’usage', body: 'Tous les prix sont publics. Les crédits n’expirent pas.', points: ['Sans engagement mensuel', 'Rechargez seulement quand vous en avez besoin'], link: 'Voir tous les tarifs' },
      { title: 'Support prioritaire', body: 'Bloqué sur un point\u00a0? Nos ingénieurs vous aident directement.', points: ['De vraies personnes, pas un bot', 'Par email ou via le formulaire de contact'], link: 'Contacter le support' },
    ],
    preview: {
      done: 'Terminé',
      deliverable: 'Délivrable',
      undeliverable: 'Non délivrable',
      otherTools: 'Autres outils',
      risky: 'Risqué',
      credit: '1 crédit',
      email: '1 email',
      creditNote: 'Vérification catch-all incluse',
      reply: '24 heures',
      replyNote: 'Notre délai de réponse habituel.',
    },
  },
  pricing: {
    id: 'tarifs',
    claimTop: 'Petit prix.',
    claimBottom: 'Excellent rapport qualité-prix.',
    fallbackTitle: 'Des tarifs simples, en dollars',
    priceLine: (p) => `${p} pour 10\u00a0000 emails, vérification catch-all comprise.`,
    claim: { before: '', link: 'Comparez avec les autres vérificateurs', after: '.' },
    text: 'Vous ne payez que ce que vous utilisez. Les crédits n’expirent pas.',
  },
  switcher: {
    id: 'alternatives',
    title: 'Vous changez de vérificateur\u00a0?',
    intro: 'Comparez Giggal.ai aux autres outils de vérification d’email\u00a0: catch-all, prix et précision.',
    items: [
      { name: 'ZeroBounce', href: '/fr/alternative-a-zerobounce', blurb: 'Résolvez les adresses catch-all que ZeroBounce classe comme risquées.' },
      { name: 'NeverBounce', href: '/fr/alternative-a-neverbounce', blurb: 'Paiement à l’usage, avec des crédits qui n’expirent jamais.' },
      { name: 'Hunter', href: '/fr/alternative-a-hunter', blurb: 'Un vérificateur dédié plutôt qu’un outil de recherche d’emails avec vérification incluse.' },
      { name: 'Snov.io', href: '/fr/alternative-a-snovio', blurb: 'Un vérificateur dédié, pas un simple module de plateforme de prospection.' },
      { name: 'Apollo', href: '/fr/alternative-a-apollo', blurb: 'Une vérification pensée pour la délivrabilité, pas greffée sur une suite commerciale.' },
      { name: 'ZeroBounce vs NeverBounce', href: '/fr/comparatif/zerobounce-vs-neverbounce', blurb: 'Les deux outils comparés sur le catch-all, les prix et les crédits.' },
    ],
    all: 'Comparer les 28 vérificateurs (en anglais)',
  },
  integrations: {
    title: 'Connectez vos outils marketing',
    sub: 'Giggal.ai se connecte aux principaux CRM et services d’emailing pour synchroniser automatiquement les contacts nettoyés.',
    more: 'Plus de 80 autres',
    alt: (n) => `Intégration ${n} pour la vérification d’email avec Giggal.ai`,
  },
  reviewBadges: REVIEW_BADGES.fr,
  reviewWall: REVIEW_WALL.fr,
  mcp: MCP.fr,
  faq: {
    title: 'Questions fréquentes',
    sub: 'Des réponses courtes sur le catch-all, la précision, les prix et la configuration.',
    more: 'D’autres questions ?',
    moreLink: 'Écrivez-nous',
    items: [
      {
        q: 'Qu’est-ce qui distingue Giggal.ai des autres vérificateurs ?',
        a: 'Il résout les adresses catch-all et celles protégées par des passerelles de sécurité (Mimecast, Proofpoint, Barracuda) avec un résultat clair, valide ou invalide, au lieu de l’étiquette « risqué » sur laquelle les autres outils abandonnent. Dans une liste B2B, ces adresses représentent environ un tiers du total.',
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
        a: 'Oui\u00a0: CSV ou Excel, jusqu’à 50\u00a0000 adresses par fichier. Les résultats arrivent en quelques minutes même sur de grandes listes, et la liste nettoyée se télécharge en CSV.',
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
  },
  ctaHeadline: 'Commencez avec 1 000 vérifications offertes',
}

export default function HomeFr() {
  return <HomeL10n locale="fr" content={content} />
}
