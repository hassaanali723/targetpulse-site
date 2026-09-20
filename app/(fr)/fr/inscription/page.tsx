import type { Metadata } from 'next'
import SignupPageL10n, { type SignupContent } from '@/components/l10n/SignupPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/fr/inscription'
const DESC =
  'Créez votre compte Giggal.ai en quelques secondes. 1 000 crédits de vérification offerts, sans carte. Vérifiez les domaines catch-all avec 98,5 % de précision.'

export const metadata: Metadata = {
  title: { absolute: 'Inscription : 1 000 vérifications d’email offertes | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('signup') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    title: 'Créez votre compte : 1 000 vérifications offertes',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai vérification d’email' }],
  },
}

const content: SignupContent = {
  path: PATH,
  crumb: 'Inscription',
  h1Lead: 'Créez votre compte',
  h1Accent: 'et commencez avec 1 000 crédits',
  intro: 'Créez votre compte Giggal.ai en moins de 30 secondes. Les 1 000 premières vérifications sont pour nous, y compris sur les domaines catch-all et accept-all que les autres outils marquent « inconnu ». Le tableau de bord est pour l’instant en anglais.',
  ctaPrimary: 'Créer mon compte gratuitement',
  pricingLabel: 'Voir les tarifs',
  pricingHref: '/fr/tarifs',
  trustPoints: ['Sans carte', 'Les crédits n’expirent pas', 'Résiliable à tout moment'],
  perksKicker: 'Ce qui est compris',
  perksTitle: 'Tout ce qu’il faut pour nettoyer votre liste',
  perksText: 'Accès complet à toutes les fonctions avec l’essai gratuit. Pas d’outil bloqué, pas d’astérisque.',
  perks: [
    { title: '1 000 crédits offerts', body: 'Les 1 000 premières vérifications, c’est cadeau. Sans carte, sans expiration.' },
    { title: 'Résultats en temps réel', body: 'Importez une liste et regardez les vérifications arriver ligne par ligne.' },
    { title: 'Vérification catch-all', body: 'Des résultats clairs, valide ou invalide, sur les domaines catch-all que les autres outils laissent de côté.' },
    { title: 'Tarifs à l’usage', body: 'À partir de 5 $ pour 3 000 crédits. Les crédits n’expirent pas, résiliez quand vous voulez.' },
  ],
  ctaTitle: 'Prêt à nettoyer votre liste ?',
  ctaText: 'Inscription en 30 secondes. Les 1 000 premières vérifications sont offertes.',
  ctaButton: 'S’inscrire gratuitement',
}

export default function InscriptionPage() {
  return <SignupPageL10n locale="fr" content={content} />
}
