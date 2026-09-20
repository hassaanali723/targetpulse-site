import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Politique de remboursement des crédits',
  description: 'Quand Giggal.ai rembourse des crédits : crédits d’essai, achats uniques, abonnements, cas exceptionnels et délais. Version de courtoisie, l’anglais prévaut.',
  alternates: { canonical: '/fr/remboursements', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'fr_FR', title: 'Politique de remboursement', url: 'https://giggal.ai/fr/remboursements', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Résumé', paragraphs: [
    'La présente politique décrit les circonstances dans lesquelles des remboursements peuvent être accordés sur notre service à crédits.',
    'Nous fournissons exclusivement des services numériques de vérification d’email et ne vendons ni n’expédions de biens physiques.',
  ]},
  { heading: '2. Fonctionnement du système de crédits', list: [
    '1 crédit = 1 vérification : chaque vérification consomme 1 crédit de votre compte', 'Paiement à l’usage : vous achetez des crédits par pack quand vous voulez',
    'Crédits récurrents : des packs mensuels par abonnement, avec remise', 'Sans expiration : les crédits restent sur le compte jusqu’à leur utilisation',
  ]},
  { heading: '3. Crédits d’essai offerts', paragraphs: ['Les nouveaux utilisateurs reçoivent 1 000 crédits d’essai. Notez que :'], list: [
    'Ils sont gratuits et ne demandent aucun paiement', 'Ils ne sont pas remboursables, s’agissant d’un cadeau', 'Ils suivent les mêmes règles que les crédits payants', 'Ils permettent de vérifier 1 000 adresses',
  ]},
  { heading: '4. Remboursement des crédits achetés' },
  { heading: '4.1 Crédits à l’usage (achat unique)', level: 3, paragraphs: ['Les crédits achetés à l’usage ne sont en principe pas remboursables une fois l’achat effectué, parce que :'], list: [
    'Ils sont ajoutés au compte immédiatement et disponibles aussitôt', 'Ils n’expirent pas et conservent leur valeur', 'Vous pouvez les utiliser à tout moment',
  ]},
  { heading: '4.2 Abonnements de crédits récurrents', level: 3, list: [
    'Les crédits sont facturés et ajoutés chaque mois', 'Vous pouvez résilier à tout moment avant le cycle suivant', 'Les crédits déjà ajoutés ne sont pas remboursables',
    'La résiliation prend effet à la fin de la période en cours', 'Les crédits non utilisés des mois précédents restent sur le compte après la résiliation',
  ]},
  { heading: '5. Circonstances exceptionnelles et support', paragraphs: ['La règle générale est que les crédits ne sont pas remboursables, mais nous savons que des situations inhabituelles peuvent survenir. En cas de :'], list: [
    'Erreurs techniques entraînant des décomptes de crédits incorrects', 'Pannes du service empêchant la vérification', 'Facturations en double ou erreurs de facturation',
    'Activité anormale sur le compte ou suspicion de fraude', 'Autres circonstances exceptionnelles',
  ], after: ['Contactez immédiatement le support à info@giggal.ai. Nous examinerons le cas et pourrons accorder des remboursements ou des corrections de crédits, au cas par cas et à notre appréciation.']},
  { heading: '6. Problèmes de qualité du service', paragraphs: ['Si des problèmes techniques ou des interruptions empêchent la vérification :'], list: [
    'Les crédits ne sont pas décomptés pour les vérifications échouées à cause d’erreurs de notre système', 'Signalez immédiatement au support tout problème de vérification',
    'Nous pouvons ajouter des crédits de compensation pour les interruptions', 'Les interruptions prolongées peuvent donner droit à des remboursements partiels, à notre appréciation',
  ]},
  { heading: '7. Fermeture de compte et infractions', paragraphs: ['Si le compte est fermé pour non-respect des Conditions d’utilisation ou de la politique d’usage acceptable :'], list: [
    'Aucun crédit non utilisé n’est remboursé', 'L’accès au compte et aux crédits restants est révoqué définitivement', 'Les abonnements sont annulés immédiatement',
  ]},
  { heading: '8. Demander un remboursement ou signaler un problème', paragraphs: ['Écrivez au support : email info@giggal.ai, objet « Refund Request / Issue Report ». Indiquez :'], list: [
    'L’adresse email de votre compte', 'L’identifiant de la transaction ou de la commande', 'Une description détaillée du problème', 'La date et l’heure de l’incident (le cas échéant)',
    'Des captures d’écran ou des preuves (le cas échéant)', 'Le nombre de crédits concernés',
  ]},
  { heading: '9. Délais de traitement du remboursement', paragraphs: ['Si la demande est approuvée :'], list: [
    'Nous examinons le cas sous 2 à 3 jours ouvrés', 'Vous recevez la décision par email', 'Les remboursements approuvés sont traités sous 5 à 10 jours ouvrés',
    'Le remboursement est émis vers le moyen de paiement d’origine par notre prestataire', 'Il peut s’écouler encore 5 à 7 jours ouvrés avant qu’il n’apparaisse sur votre compte',
  ]},
  { heading: '10. Contestations de paiement (rétrofacturations)', paragraphs: ['Si vous ouvrez une contestation auprès de votre banque ou de votre prestataire de paiement sans nous contacter d’abord :'], list: [
    'Nous nous réservons le droit de fermer définitivement votre compte', 'Vous ne pourrez plus utiliser nos services', 'Tous les crédits restants sont perdus',
    'Nous fournirons au prestataire de paiement les preuves en défense de la facturation',
  ], after: ['Nous vous demandons de contacter d’abord le support : nous réglons les problèmes de manière juste et rapide.']},
  { heading: '11. Transfert de crédits et comptes partagés', paragraphs: ['Les crédits ne sont pas transférables entre comptes. Ne sont pas remboursés :'], list: [
    'Les crédits achetés sur le mauvais compte', 'Les demandes de transfert vers un autre compte', 'Les infractions liées au partage de compte',
  ]},
  { heading: '12. Modifications de la présente politique', paragraphs: ['Nous nous réservons le droit de modifier la présente politique à tout moment. Les modifications prennent effet dès leur publication sur le site. En continuant à utiliser les services, vous acceptez la nouvelle version.']},
  { heading: '13. Contact', paragraphs: [
    'Pour toute question ou pour le support : email info@giggal.ai, site https://giggal.ai. Nous répondons en général sous 24 à 48 heures.',
    'La présente politique fait partie des Conditions d’utilisation. En utilisant les services de Giggal.ai, vous déclarez l’avoir lue et comprise.',
  ]},
]

export default function RemboursementsPage() {
  return (
    <LegalPageL10n
      locale="fr"
      path="/fr/remboursements"
      title="Politique de"
      accent="remboursement"
      updated="4 février 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
