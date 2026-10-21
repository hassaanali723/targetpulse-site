import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Politique de confidentialité et données personnelles',
  description: 'Comment Giggal.ai, exploité par TargetPulse Ltd, collecte, utilise, partage et protège vos données, leur durée de conservation et vos droits RGPD.',
  alternates: { canonical: '/fr/confidentialite', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'fr_FR', title: 'Politique de confidentialité', url: 'https://giggal.ai/fr/confidentialite', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Introduction', paragraphs: [
    'Ce service est exploité par TargetPulse Ltd (« nous »), une société immatriculée en Angleterre et au pays de Galles sous le numéro 17079825, dont le siège social est situé Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd est le responsable du traitement des données personnelles traitées via Giggal.ai. Contact : info@giggal.ai. Signalement d’abus : abuse@giggal.ai.',
    'Giggal.ai (« nous », « notre » ou « nos ») s’engage à protéger votre vie privée. La présente politique de confidentialité explique comment nous collectons, utilisons, communiquons et protégeons vos informations lorsque vous utilisez nos services de vérification d’email et notre site web.',
  ]},
  { heading: '2. Informations que nous collectons' },
  { heading: '2.1 Informations personnelles', level: 3, paragraphs: ['Nous pouvons collecter les informations personnelles que vous nous fournissez volontairement lorsque vous :'], list: [
    'Créez un compte',
    'Achetez des crédits de vérification ou un abonnement',
    'Contactez notre support client',
    'Envoyez des listes d’adresses email pour vérification',
    'Utilisez les formulaires de contact ou de support de notre site web',
  ], after: ['Ces informations peuvent comprendre : le nom, l’adresse email, les identifiants du compte, des informations facultatives sur l’entreprise et les métadonnées des transactions. Les données de carte bancaire sont traitées par notre prestataire de paiement et nous ne les conservons pas.']},
  { heading: '2.2 Authentification et données techniques', level: 3, paragraphs: ['Nous utilisons Clerk pour l’inscription et la connexion aux comptes (y compris la connexion avec Google et l’inscription par email et mot de passe). Dans le cadre de ce processus d’authentification, nous collectons et traitons :'], list: [
    'Les identifiants du compte (tels que l’identifiant utilisateur, le nom et l’adresse email)',
    'Le fournisseur d’authentification et la méthode de connexion (Google ou email et mot de passe)',
    'Les métadonnées de l’activité de connexion (telles que la date et l’heure des connexions)',
    'Des données techniques liées à la sécurité (telles que l’adresse IP et le user agent), utilisées pour protéger les comptes et prévenir les abus',
    'Les cookies ou jetons de session essentiels, nécessaires pour vous garder connecté de manière sécurisée',
  ]},
  { heading: '2.3 Données de vérification d’email', level: 3, paragraphs: ['Lorsque vous utilisez nos services de vérification d’email, nous collectons et traitons :'], list: [
    'Les adresses email envoyées pour vérification',
    'Les résultats et le statut de la vérification (valide, invalide, catch-all, jetable, etc.)',
    'Les listes d’adresses email importées pour un traitement en masse',
    'Les données d’utilisation de l’API et l’historique des vérifications',
  ]},
  { heading: '3. Comment nous utilisons vos informations', paragraphs: ['Nous utilisons les informations collectées aux fins suivantes :'], list: [
    'Pour fournir et maintenir nos services',
    'Pour traiter vos transactions et gérer les abonnements',
    'Pour vous envoyer des notifications liées au service',
    'Pour assurer le support client',
    'Pour améliorer et optimiser nos services',
    'Pour détecter et prévenir la fraude et les abus',
    'Pour respecter nos obligations légales',
    'Pour analyser les habitudes et les tendances d’utilisation',
  ]},
  { heading: '4. Base légale du traitement (RGPD)', paragraphs: ['Si vous vous trouvez dans l’Espace économique européen (EEE), la base légale sur laquelle nous collectons et utilisons vos informations dépend des données concernées et du contexte :'], list: [
    'Exécution du contrat : le traitement est nécessaire pour fournir nos services',
    'Intérêts légitimes : le traitement répond à nos intérêts commerciaux légitimes',
    'Consentement : vous avez donné votre consentement explicite pour des finalités précises',
    'Obligation légale : le traitement est nécessaire pour respecter la loi',
  ]},
  { heading: '5. Partage et communication des données' },
  { heading: '5.1 Prestataires de services', level: 3, paragraphs: ['Nous partageons vos informations avec des prestataires de services tiers qui exécutent des services pour notre compte :'], list: [
    'Prestataires de paiement (notre passerelle de paiement agréée)',
    'Fournisseurs d’authentification (tels que Clerk)',
    'Fournisseurs d’hébergement cloud',
    'Prestataires de sécurité et de surveillance',
    'Outils de support client',
  ]},
  { heading: '5.2 Obligations légales', level: 3, paragraphs: ['Nous pouvons communiquer vos informations si la loi l’exige ou en réponse à des demandes valables des autorités publiques (par exemple, des décisions de justice ou des assignations).']},
  { heading: '5.3 Transferts d’entreprise', level: 3, paragraphs: ['Si nous sommes impliqués dans une fusion, une acquisition ou une cession d’actifs, vos informations peuvent être transférées dans le cadre de cette opération.']},
  { heading: '6. Sécurité des données', paragraphs: ['Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations, notamment :'], list: [
    'Le chiffrement des données en transit et au repos',
    'Des évaluations de sécurité régulières',
    'Des contrôles d’accès et l’authentification',
    'Des centres de données sécurisés',
    'La formation du personnel à la protection des données',
  ], after: ['Cependant, aucune méthode de transmission sur internet n’est sûre à 100 %, et nous ne pouvons pas garantir une sécurité absolue.']},
  { heading: '7. Conservation des données', paragraphs: ['Nous conservons vos informations personnelles uniquement pendant la durée nécessaire aux finalités décrites dans la présente politique de confidentialité, sauf si une durée de conservation plus longue est exigée ou permise par la loi. Lorsque nous n’avons plus besoin de vos informations, nous les supprimons ou les anonymisons de manière sécurisée.']},
  { heading: '8. Vos droits', paragraphs: ['Selon l’endroit où vous vous trouvez, vous pouvez disposer des droits suivants :'], list: [
    'Accès : demander l’accès à vos informations personnelles',
    'Rectification : demander la rectification des informations inexactes',
    'Effacement : demander l’effacement de vos informations',
    'Portabilité : demander une copie de vos données dans un format portable',
    'Limitation : demander la limitation du traitement',
    'Opposition : vous opposer au traitement de vos informations',
    'Retrait du consentement : retirer votre consentement lorsque le traitement repose sur le consentement',
  ], after: ['Pour exercer ces droits, veuillez nous contacter à l’adresse info@giggal.ai.']},
  { heading: '9. Cookies et technologies de suivi', paragraphs: ['Nous utilisons des cookies et des technologies de suivi similaires pour suivre l’activité sur notre site web et conserver certaines informations. Vous pouvez configurer votre navigateur pour qu’il refuse tous les cookies ou qu’il vous indique lorsqu’un cookie est envoyé. Toutefois, si vous n’acceptez pas les cookies, vous ne pourrez peut-être pas utiliser certaines parties de notre service.']},
  { heading: '10. Liens vers des sites tiers', paragraphs: ['Notre site web peut contenir des liens vers des sites web tiers. Nous ne sommes pas responsables des pratiques de ces sites externes en matière de confidentialité. Nous vous invitons à lire la politique de confidentialité de chaque site tiers que vous visitez.']},
  { heading: '11. Protection de la vie privée des enfants', paragraphs: ['Nos services ne s’adressent pas aux personnes âgées de moins de 18 ans. Nous ne collectons pas sciemment d’informations personnelles concernant des enfants. Si vous apprenez qu’un enfant nous a fourni des informations personnelles, veuillez nous contacter et nous prendrons des mesures pour supprimer ces informations.']},
  { heading: '12. Transferts internationaux de données', paragraphs: ['Vos informations peuvent être transférées et conservées sur des ordinateurs situés en dehors de votre État, province, pays ou autre juridiction gouvernementale, où les lois sur la protection des données peuvent être différentes. Nous veillons à ce que des garanties appropriées soient en place pour ces transferts.']},
  { heading: '13. Droits des résidents de Californie (CCPA)', paragraphs: ['Si vous résidez en Californie, vous disposez de droits spécifiques concernant vos informations personnelles :'], list: [
    'Droit de savoir quelles informations personnelles sont collectées',
    'Droit de savoir si des informations personnelles sont vendues ou communiquées',
    'Droit de s’opposer à la vente des informations personnelles',
    'Droit à l’effacement des informations personnelles',
    'Droit de ne pas subir de discrimination pour avoir exercé vos droits au titre du CCPA',
  ]},
  { heading: '14. Modifications de la présente politique de confidentialité', paragraphs: ['Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de toute modification en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date de « Dernière mise à jour ». Nous vous conseillons de consulter régulièrement la présente politique de confidentialité pour prendre connaissance de toute modification.']},
  { heading: '15. Nous contacter', paragraphs: [
    'Pour toute question sur la présente politique de confidentialité, veuillez nous contacter :',
    'Email : info@giggal.ai',
    'Site web : https://giggal.ai',
    'En utilisant les services de Giggal.ai, vous reconnaissez avoir lu et compris la présente politique de confidentialité et en accepter les termes.',
  ]},
]

export default function ConfidentialitePage() {
  return (
    <LegalPageL10n
      locale="fr"
      path="/fr/confidentialite"
      title="Politique de"
      accent="confidentialité"
      updated="1er octobre 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
