import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Politique de remboursement : crédits et abonnements',
  description: 'Quand Giggal.ai rembourse des crédits : crédits d’essai, achats uniques, abonnements, cas exceptionnels et délais. Version de courtoisie, l’anglais prévaut.',
  alternates: { canonical: '/fr/remboursements', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'fr_FR', title: 'Politique de remboursement', url: 'https://giggal.ai/fr/remboursements', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Présentation', paragraphs: [
    'Chez Giggal.ai, nous nous efforçons de fournir des services de vérification d’email exceptionnels. La présente politique de remboursement décrit les circonstances dans lesquelles des remboursements peuvent être accordés pour notre service à crédits.',
    'Nous fournissons uniquement des services numériques de vérification d’email. Nous ne vendons ni n’expédions de biens physiques.',
  ]},
  { heading: '2. Fonctionnement de notre système de crédits', paragraphs: ['Giggal.ai fonctionne avec un système de crédits pour la vérification d’email :'], list: [
    '1 crédit = 1 validation d’email : chaque vérification d’une adresse email consomme 1 crédit de votre compte',
    'Paiement à l’usage : vous achetez des crédits en volume à tout moment (packs de 3 000 à 1 000 000 crédits)',
    'Crédits récurrents : vous souscrivez à des packs de crédits mensuels récurrents avec une remise de 10 %',
    'Sans expiration : les crédits n’expirent jamais et restent sur votre compte jusqu’à leur utilisation',
  ]},
  { heading: '3. Crédits d’essai gratuits', paragraphs: ['Les nouveaux utilisateurs reçoivent 1 000 crédits d’essai gratuits pour tester notre service de vérification d’email. Veuillez noter que :'], list: [
    'Les crédits d’essai sont fournis gratuitement, sans aucun paiement requis',
    'Les crédits d’essai ne sont pas remboursables, car ils sont offerts',
    'Les crédits d’essai suivent les mêmes règles de validation que les crédits payants',
    'Les crédits d’essai permettent de vérifier 1 000 adresses email',
  ]},
  { heading: '4. Politique de remboursement des achats de crédits' },
  { heading: '4.1 Crédits à l’usage (achat unique)', level: 3, paragraphs: ['Les crédits achetés via les packs à l’usage ne sont en principe pas remboursables une fois l’achat finalisé, car :'], list: [
    'Les crédits sont ajoutés instantanément à votre compte et peuvent être utilisés immédiatement',
    'Les crédits n’expirent pas et conservent leur valeur indéfiniment',
    'Vous avez la liberté de les utiliser à tout moment',
  ]},
  { heading: '4.2 Abonnements de crédits récurrents', level: 3, paragraphs: ['Pour les abonnements de crédits mensuels récurrents :'], list: [
    'Les crédits sont facturés et ajoutés à votre compte chaque mois',
    'Vous pouvez résilier votre abonnement à tout moment avant le prochain cycle de facturation',
    'Les crédits déjà ajoutés à votre compte ne sont pas remboursables',
    'La résiliation prend effet à la fin de votre période de facturation en cours',
    'Les crédits non utilisés des mois précédents restent sur votre compte après la résiliation',
  ]},
  { heading: '5. Circonstances exceptionnelles et support', paragraphs: ['Notre politique standard prévoit que les crédits ne sont pas remboursables, mais nous savons que des situations inhabituelles peuvent survenir. En cas de :'], list: [
    'Erreurs techniques entraînant un décompte de crédits incorrect',
    'Pannes du service empêchant la validation des emails',
    'Doubles facturations ou erreurs de facturation',
    'Activité inhabituelle sur le compte ou suspicion de fraude',
    'Toute autre circonstance exceptionnelle',
  ], after: ['Veuillez contacter immédiatement notre équipe de support à info@giggal.ai. Nous examinerons votre cas de manière approfondie et pourrons accorder des remboursements ou des ajustements de crédits au cas par cas, à notre discrétion.']},
  { heading: '6. Problèmes de qualité du service', paragraphs: ['Si vous rencontrez des problèmes techniques ou des interruptions de service qui empêchent la vérification d’email :'], list: [
    'Les crédits ne seront pas décomptés pour les validations échouées à cause d’erreurs de notre système',
    'Signalez immédiatement tout problème de validation à notre équipe de support',
    'Nous pouvons ajouter des crédits de compensation à votre compte en cas d’interruption de service',
    'Les interruptions prolongées peuvent donner droit à des remboursements partiels, à notre discrétion',
  ]},
  { heading: '7. Résiliation de compte et infractions', paragraphs: ['Si votre compte est résilié pour violation de nos Conditions d’utilisation ou de notre Politique d’usage acceptable :'], list: [
    'Aucun remboursement ne sera accordé pour les crédits non utilisés',
    'L’accès à votre compte et aux crédits restants sera révoqué définitivement',
    'Les abonnements récurrents seront annulés immédiatement',
  ]},
  { heading: '8. Demander un remboursement ou signaler un problème', paragraphs: [
    'Pour demander un remboursement ou signaler une activité inhabituelle, veuillez contacter notre équipe de support :',
    'Email : info@giggal.ai',
    'Objet : Refund Request / Issue Report',
    'Veuillez inclure les informations suivantes dans votre demande :',
  ], list: [
    'L’adresse email de votre compte',
    'L’identifiant de transaction ou le numéro de commande',
    'Une description détaillée du problème ou de l’activité inhabituelle',
    'La date et l’heure de l’incident (le cas échéant)',
    'Des captures d’écran ou des preuves à l’appui de votre réclamation (le cas échéant)',
    'Le nombre de crédits concernés',
  ]},
  { heading: '9. Délais de traitement des remboursements', paragraphs: ['Si votre demande de remboursement est approuvée :'], list: [
    'Nous examinerons votre dossier sous 2 à 3 jours ouvrés',
    'Vous recevrez une réponse par email concernant la décision',
    'Les remboursements approuvés seront traités sous 5 à 10 jours ouvrés',
    'Les remboursements seront émis vers le moyen de paiement d’origine par l’intermédiaire de notre prestataire de paiement',
    'Un délai supplémentaire de 5 à 7 jours ouvrés peut être nécessaire avant que le remboursement n’apparaisse sur votre compte, selon votre prestataire de paiement',
  ]},
  { heading: '10. Rétrofacturations', paragraphs: ['Si vous déposez une demande de rétrofacturation ou une contestation de paiement auprès de votre banque ou de votre prestataire de paiement sans nous avoir d’abord contactés pour résoudre le problème :'], list: [
    'Nous nous réservons le droit de résilier définitivement votre compte',
    'Vous serez exclu de toute utilisation future de nos services',
    'Tous les crédits restants seront perdus',
    'Nous fournirons des preuves au prestataire de paiement pour défendre le paiement contesté',
  ], after: ['Nous vous encourageons vivement à contacter d’abord notre équipe de support. Nous nous engageons à résoudre les problèmes de manière équitable et rapide.']},
  { heading: '11. Transfert de crédits et partage de compte', paragraphs: ['Les crédits ne sont pas transférables d’un compte à un autre. Aucun remboursement ne sera accordé pour :'], list: [
    'Les crédits achetés sur le mauvais compte',
    'Les demandes de transfert de crédits vers un autre compte',
    'Les infractions liées au partage de compte',
  ]},
  { heading: '12. Modifications de la présente politique', paragraphs: ['Nous nous réservons le droit de modifier la présente politique de remboursement à tout moment. Les modifications prennent effet dès leur publication sur notre site web. La poursuite de l’utilisation de nos services après toute modification vaut acceptation de la nouvelle politique.']},
  { heading: '13. Coordonnées', paragraphs: [
    'Pour toute question sur la présente politique de remboursement ou pour obtenir de l’aide, veuillez nous contacter :',
    'Email : info@giggal.ai',
    'Site web : https://giggal.ai',
    'Notre équipe de support s’engage à traiter vos demandes et à trouver des solutions équitables. Nous répondons en général à toutes les demandes sous 24 à 48 heures.',
    'La présente politique de remboursement fait partie de nos Conditions d’utilisation. En utilisant les services de Giggal.ai, vous reconnaissez avoir lu et compris la présente politique.',
  ]},
]

export default function RemboursementsPage() {
  return (
    <LegalPageL10n
      locale="fr"
      path="/fr/remboursements"
      title="Politique de"
      accent="remboursement"
      updated="22 octobre 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
