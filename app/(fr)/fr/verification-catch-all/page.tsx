import type { Metadata } from 'next'
import Link from 'next/link'
import CatchAllPageL10n, { type CatchAllContent } from '@/components/l10n/CatchAllPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/fr/verification-catch-all'
const DESC =
  'Vérification catch-all : renvoie valide ou invalide sur les domaines accept-all, même derrière Mimecast et Proofpoint. 98,5 % de précision, 1 crédit par email.'

export const metadata: Metadata = {
  title: { absolute: 'Vérification Catch-all : valide, pas risqué | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    title: 'Vérification catch-all : valide, pas risqué',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai vérification d’email' }],
  },
}

const content: CatchAllContent = {
  path: PATH,
  crumb: 'Vérification catch-all',
  h1Accent: 'Vérification catch-all',
  h1Tail: 'avec une vraie réponse pour chaque adresse',
  intro:
    'La plupart des vérificateurs s’arrêtent devant les domaines catch-all et accept-all. Giggal.ai confirme si chaque boîte existe réellement, y compris derrière des passerelles de sécurité comme Mimecast et Proofpoint, avec 98,5 % de précision.',
  toolLine: (
    <>
      Pour une seule adresse, utilisez le{' '}
      <Link href="/fr/verifier-adresse-mail" className="text-indigo-600 font-bold hover:underline">vérificateur d&apos;email gratuit</Link>.
    </>
  ),
  ctaPrimary: 'Commencer à vérifier les catch-all',
  ctaSecondary: { label: 'Voir les tarifs', href: '/fr/tarifs' },
  ctaNote: '1 000 crédits offerts pour commencer. Sans carte.',
  card: {
    kicker: 'Vérification approfondie active', title: 'Résultats de la liste', file: 'contacts_2026.csv',
    valid: '39 113', invalid: '10 508', risky: '0',
    note: 'Dans une liste type, environ 30 % des adresses sont sur des domaines catch-all. Nous les vérifions une par une : la plupart sont valides.',
    labels: { valid: 'Valides', invalid: 'Invalides', risky: 'Risquées' },
  },
  whatKicker: 'Le contexte',
  whatTitle: 'Qu’est-ce qu’un domaine catch-all',
  whatParas: [
    'Un domaine catch-all accepte tout le courrier qu’il reçoit, même pour des adresses qui n’existent pas. Le serveur répond par une acceptation générique à n’importe quelle adresse, donc un contrôle SMTP classique ne peut pas savoir s’il y a une vraie boîte derrière.',
    'Dans une liste commerciale type, environ 30 % des contacts sont sur des domaines catch-all. La plupart des outils reconnaissent le schéma, abandonnent et marquent tout comme risqué ou inconnu. Il vous reste une longue liste de contacts que vous ne pouvez pas utiliser en confiance.',
    'Deux options restent, toutes deux mauvaises : envoyer et risquer les rebonds, les spam traps et une réputation abîmée, ou supprimer et perdre de vrais clients. La vérification catch-all résout le problème en contrôlant l’existence réelle de la boîte au lieu de deviner.',
  ],
  sameH3: 'Catch-all et accept-all, c’est la même chose',
  sameParas: [
    'Certains vérificateurs écrivent « accept all », d’autres « catch-all » ou « catchall ». Ils décrivent une seule configuration : un domaine dont le serveur de messagerie répond 250 OK à n’importe quel destinataire. Quelle que soit l’étiquette qu’a utilisée votre dernier outil, la solution est la même et c’est celle de cette page.',
  ],
  howKicker: 'Comment ça marche',
  howTitle: 'Comment Giggal.ai vérifie les adresses catch-all',
  howText: 'Chaque adresse catch-all passe par plusieurs niveaux de vérification qui se combinent en un seul résultat clair. Vous voyez valide ou invalide, pas un rapport technique.',
  signals: [
    { title: 'Vérification approfondie de la boîte', body: 'Nous confirmons l’existence réelle de chaque boîte, pas seulement que le domaine accepte tout. Là où un contrôle SMTP standard voit une acceptation générique et s’arrête, nous continuons jusqu’à une vraie réponse.' },
    { title: 'Signaux de confiance du domaine', body: 'Nous analysons la configuration de chaque domaine : enregistrements SPF, DKIM et DMARC, certificats SSL et réputation de l’hébergement. Les domaines bien configurés hébergent de vraies boîtes bien plus souvent.' },
    { title: 'Passerelles de sécurité', body: 'Les adresses protégées par des passerelles comme Mimecast, Proofpoint et Barracuda sont vérifiées directement. La passerelle ne cache plus s’il y a une vraie boîte derrière l’adresse.' },
  ],
  compareKicker: 'Des résultats clairs',
  compareTitle: 'Des suppositions aux résultats',
  compareText: 'La différence entre un vérificateur classique et Giggal.ai sur la même liste de 48 000 adresses.',
  compare: {
    typicalLabel: 'Un vérificateur classique', giggalLabel: 'Giggal.ai', count: '48 028 adresses vérifiées', catchAllLabel: 'Catch-all',
    typical: ['31 566', '5 982', '10 480'], giggal: ['39 950', '8 078', '0'],
    typicalNote: 'Plus de 10 000 contacts catch-all auxquels vous ne pouvez pas écrire en confiance. Environ 80 % sont réels, mais vous ne savez pas lesquels.',
    giggalNote: 'Environ 8 400 contacts délivrables de plus, récupérés dans le tas catch-all. Chaque adresse a un résultat clair.',
  },
  whoKicker: 'Pour qui',
  whoTitle: 'Qui utilise la vérification catch-all',
  audience: [
    { title: 'Équipes de prospection', body: 'Vous n’envoyez qu’à des contacts vérifiés. Moins de rebonds, plus de réponses, des domaines d’envoi en meilleure santé.' },
    { title: 'Agences', body: 'Nettoyez les listes de chaque client avec le même vérificateur, pour que les rapports et la délivrabilité restent prévisibles.' },
    { title: 'Sales operations', body: 'Ne gardez dans le CRM que les contacts qui reçoivent réellement vos séquences et vos mises à jour.' },
    { title: 'Newsletters', body: 'Protégez ouvertures et clics en supprimant les adresses qui ont l’air réelles mais ne sont jamais délivrées.' },
  ],
  faqTitle: 'Questions fréquentes',
  faq: [
    { q: 'Qu’est-ce qu’un domaine catch-all ?', a: 'Un domaine qui accepte tout email envoyé, même vers des adresses qui n’existent pas. Le serveur répond « oui, elle existe » à n’importe quelle adresse, c’est pourquoi les contrôles SMTP traditionnels ne peuvent pas savoir si une boîte précise est réelle.' },
    { q: 'La vérification catch-all coûte-t-elle des crédits en plus ?', a: 'Non. Elle coûte 1 crédit par adresse, exactement comme une vérification standard.' },
    { q: 'Quelle est la précision de la vérification catch-all ?', a: 'Environ 98,5 % sur les listes professionnelles. Au lieu de deviner à partir des seules réponses SMTP, nous vérifions l’existence réelle de la boîte, donc le résultat tient aussi au moment de l’envoi.' },
    { q: 'Ralentit-elle la vérification du reste de la liste ?', a: 'Non. Les contrôles catch-all tournent en parallèle de la vérification normale, pas après. La liste complète se termine dans le même temps.' },
    { q: 'Puis-je vérifier seulement les adresses catch-all d’une liste déjà nettoyée ailleurs ?', a: 'Oui. Dans le tableau de bord, ouvrez Catch-All Detection, collez ou importez seulement les adresses à contrôler et lancez la vérification. Le coût est le même : 1 crédit par adresse.' },
    { q: 'Que se passe-t-il si un contrôle catch-all renvoie « inconnu » ?', a: 'C’est rare, mais si nous n’arrivons pas à un résultat, le crédit est remboursé automatiquement. Vous ne payez que les vérifications abouties.' },
  ],
  ctaHeadline: 'Vérifiez une liste et comparez les résultats',
}

export default function VerificationCatchAllPage() {
  return <CatchAllPageL10n locale="fr" content={content} />
}
