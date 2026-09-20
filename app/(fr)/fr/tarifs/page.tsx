import type { Metadata } from 'next'
import PricingPageL10n, { type PricingContent } from '@/components/l10n/PricingPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/fr/tarifs'
const DESC =
  'Tarifs de la vérification d’email : dès 9,90 $ pour 10 000 crédits, jusqu’à 0,0007 $ par adresse. À l’usage ou par abonnement, 10 % de remise. Sans expiration.'

export const metadata: Metadata = {
  title: { absolute: 'Tarifs : 10 000 Vérifications d’Email pour 9,90 $ | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('pricing') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    title: 'Tarifs de la vérification d’email',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai vérification d’email' }],
  },
}

const content: PricingContent = {
  path: PATH,
  crumb: 'Tarifs',
  h1Lead: 'Tarifs de la vérification',
  h1Accent: 'd’email',
  intro: (
    <>
      Vous ne payez que ce que vous utilisez. Pas d&apos;abonnement imposé, pas de frais cachés, et les crédits n&apos;expirent pas.
      Vous commencez avec <strong className="text-indigo-600 font-extrabold">1&nbsp;000 crédits d&apos;essai offerts</strong>, sans carte.
    </>
  ),
  contactHref: '/fr/contact',
  includedTitle: 'Tout est compris dans chaque pack',
  includedText: 'Toutes les fonctions, dans tous les packs. Pas de paliers, pas de blocages.',
  features: [
    'Contrôle de la syntaxe',
    'Vérification du domaine et des enregistrements MX',
    'Vérification SMTP de la boîte',
    'Détection des adresses jetables',
    'Détection des adresses génériques',
    'Vérification catch-all',
    'Import et vérification en masse',
    'Export CSV, Excel et JSON',
    'Suppression des doublons',
    'Rapports de vérification détaillés',
    'Crédits sans expiration',
  ],
  rulesTitle: 'Des tarifs faciles à comprendre',
  rulesText: 'Quatre règles qui gardent les prix clairs et prévisibles.',
  rules: [
    { title: '1 crédit = 1 adresse', body: 'Chaque vérification consomme exactement un crédit de votre solde, y compris sur les adresses catch-all et derrière les passerelles de sécurité.' },
    { title: 'Remise sur le volume', body: 'Plus vous achetez de crédits, moins vous payez par crédit : de 0,0017 $ à 0,0007 $.' },
    { title: '10 % de remise par abonnement', body: 'Avec l’abonnement mensuel, vous économisez automatiquement 10 % sur chaque pack.' },
    { title: 'Les crédits n’expirent pas', body: 'Utilisez-les quand vous voulez. Ils restent sur votre compte tant que vous en avez besoin.' },
  ],
  faqTitle: 'Questions fréquentes',
  faqText: 'Crédits, paiements et remboursements.',
  faq: [
    { q: 'Quels moyens de paiement acceptez-vous ?', a: 'Toutes les cartes de crédit et de débit courantes, via Stripe. Les prix sont en dollars américains ; votre banque applique le taux de change.' },
    { q: 'Puis-je résilier l’abonnement quand je veux ?', a: 'Oui, à tout moment. Vous gardez tous les crédits de votre compte et rien de plus ne vous est facturé.' },
    { q: 'Que se passe-t-il si je n’ai plus de crédits ?', a: 'Vous en achetez quand vous voulez. Le solde est mis à jour immédiatement.' },
    { q: 'Faites-vous des remboursements ?', a: 'Les crédits ne sont en principe pas remboursables. Les cas exceptionnels sont examinés un par un ; les résultats « inconnu » sont remboursés en crédits. Les détails sont dans la politique de remboursement.' },
    { q: 'Y a-t-il un achat minimum ?', a: 'Le pack minimum est de 3 000 crédits (5,00 $). Avant d’acheter, vous disposez de 1 000 crédits d’essai offerts.' },
    { q: 'Les crédits expirent-ils ?', a: 'Jamais. Ils restent sur votre compte jusqu’à ce que vous les utilisiez.' },
  ],
  ctaTitle: 'Commencez avec 1 000 crédits offerts',
  ctaText: 'Sans carte. Vérifiez vos premières adresses gratuitement et voyez les résultats en quelques secondes.',
  ctaButton: 'Recevoir les crédits offerts',
  ctaHref: '/fr/inscription',
}

export default function TarifsPage() {
  return <PricingPageL10n locale="fr" content={content} />
}
