import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Politique de confidentialité de Giggal.ai',
  description: 'Comment Giggal.ai traite les données personnelles et les adresses envoyées pour vérification. Traduction de courtoisie ; la version anglaise prévaut.',
  alternates: { canonical: '/fr/confidentialite', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'fr_FR', title: 'Politique de confidentialité', url: 'https://giggal.ai/fr/confidentialite', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Introduction', paragraphs: ['Giggal.ai (« nous ») s’engage à protéger votre vie privée. La présente politique explique comment nous collectons, utilisons, partageons et protégeons vos informations lorsque vous utilisez nos services de vérification d’email et notre site.']},
  { heading: '2. Informations que nous collectons' },
  { heading: '2.1 Données personnelles', level: 3, paragraphs: ['Nous pouvons collecter les données personnelles que vous nous fournissez volontairement lorsque vous :'], list: [
    'Créez un compte', 'Achetez des crédits ou un abonnement', 'Contactez le support', 'Envoyez des listes d’adresses pour vérification', 'Utilisez les formulaires de contact ou de support du site',
  ], after: ['Ces données peuvent comprendre le nom, l’adresse email, les identifiants du compte, des données d’entreprise facultatives et les métadonnées des transactions. Les données de carte bancaire sont traitées par notre prestataire de paiement et nous ne les conservons pas.']},
  { heading: '2.2 Authentification et données techniques', level: 3, paragraphs: ['Nous utilisons Clerk pour l’inscription et la connexion (y compris l’accès avec Google et avec email et mot de passe). Dans ce cadre, nous collectons et traitons :'], list: [
    'Les identifiants du compte (identifiant utilisateur, nom, email)', 'Le fournisseur d’authentification et la méthode de connexion', 'Les métadonnées de connexion (date et heure des connexions)',
    'Des données techniques de sécurité (adresse IP, user agent) pour protéger les comptes et prévenir les abus', 'Les cookies ou jetons de session nécessaires à un accès sécurisé',
  ]},
  { heading: '2.3 Données de vérification d’email', level: 3, paragraphs: ['Lorsque vous utilisez nos services, nous collectons et traitons :'], list: [
    'Les adresses email envoyées pour vérification', 'Les résultats et l’état de la vérification (valide, invalide, catch-all, jetable, etc.)',
    'Les listes importées pour traitement en masse', 'Les données d’usage de l’API et l’historique des vérifications',
  ]},
  { heading: '3. Comment nous utilisons les informations', list: [
    'Fournir et maintenir les services', 'Traiter les transactions et gérer les abonnements', 'Envoyer les notifications liées au service', 'Assurer le support',
    'Améliorer et optimiser les services', 'Détecter et prévenir les fraudes et les abus', 'Respecter nos obligations légales', 'Analyser l’usage et les tendances',
  ]},
  { heading: '4. Base juridique du traitement (RGPD)', paragraphs: ['Si vous vous trouvez dans l’Espace économique européen, la base juridique dépend des données et du contexte :'], list: [
    'Exécution du contrat : le traitement est nécessaire pour fournir les services', 'Intérêt légitime : le traitement répond à nos intérêts légitimes',
    'Consentement : vous avez donné un consentement explicite pour des finalités précises', 'Obligation légale : le traitement est nécessaire pour respecter la loi',
  ]},
  { heading: '5. Partage des données' },
  { heading: '5.1 Prestataires de services', level: 3, paragraphs: ['Nous partageons des données avec des prestataires tiers qui agissent pour notre compte :'], list: [
    'Prestataires de paiement', 'Fournisseurs d’authentification (comme Clerk)', 'Hébergeurs cloud', 'Prestataires de sécurité et de supervision', 'Outils de support client',
  ]},
  { heading: '5.2 Obligations légales', level: 3, paragraphs: ['Nous pouvons communiquer des données lorsque la loi l’exige ou en réponse à des demandes valables des autorités publiques (par exemple une décision de justice).']},
  { heading: '5.3 Transferts d’entreprise', level: 3, paragraphs: ['En cas de fusion, d’acquisition ou de cession d’actifs, les données peuvent être transférées dans le cadre de l’opération.']},
  { heading: '6. Sécurité des données', paragraphs: ['Nous prenons des mesures techniques et organisationnelles appropriées pour protéger les données, notamment :'], list: [
    'Chiffrement des données en transit et au repos', 'Évaluations de sécurité régulières', 'Contrôles d’accès et authentification', 'Centres de données sécurisés', 'Formation du personnel à la protection des données',
  ], after: ['Aucune méthode de transmission sur internet n’est sûre à 100 % et nous ne pouvons garantir une sécurité absolue.']},
  { heading: '7. Conservation des données', paragraphs: ['Nous conservons les données personnelles uniquement le temps nécessaire aux finalités décrites dans la présente politique, sauf si la loi exige ou permet une durée plus longue. Lorsqu’elles ne sont plus nécessaires, elles sont supprimées ou anonymisées de manière sécurisée.']},
  { heading: '8. Vos droits', paragraphs: ['Selon l’endroit où vous vous trouvez, vous pouvez disposer des droits suivants :'], list: [
    'Accès : demander l’accès à vos données', 'Rectification : demander la correction de données inexactes', 'Effacement : demander la suppression des données',
    'Portabilité : recevoir une copie des données dans un format portable', 'Limitation : demander la limitation du traitement', 'Opposition : vous opposer au traitement',
    'Retrait du consentement : retirer votre consentement lorsque le traitement repose sur lui',
  ], after: ['Pour exercer ces droits, écrivez à info@giggal.ai.']},
  { heading: '9. Cookies et technologies de suivi', paragraphs: ['Nous utilisons des cookies et des technologies similaires pour suivre l’activité sur le site et conserver certaines informations. Vous pouvez configurer votre navigateur pour refuser les cookies ou vous avertir lorsqu’un cookie est envoyé ; certaines parties du service pourraient alors ne pas fonctionner correctement.']},
  { heading: '10. Liens vers des sites tiers', paragraphs: ['Le site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables de leurs pratiques en matière de confidentialité et vous invitons à lire leurs politiques.']},
  { heading: '11. Vie privée des mineurs', paragraphs: ['Nos services ne s’adressent pas aux personnes de moins de 18 ans. Nous ne collectons pas sciemment de données de mineurs. Si vous apprenez qu’un mineur nous a fourni des données personnelles, contactez-nous et nous les supprimerons.']},
  { heading: '12. Transferts internationaux', paragraphs: ['Les données peuvent être transférées et conservées sur des systèmes situés hors de votre pays, où les lois de protection des données peuvent différer. Nous mettons en place des garanties appropriées pour protéger les données conformément à la présente politique.']},
  { heading: '13. Droits des résidents de Californie (CCPA)', list: [
    'Droit de savoir quelles données personnelles sont collectées', 'Droit de savoir si les données sont vendues ou partagées',
    'Droit de s’opposer à la vente des données', 'Droit à l’effacement', 'Droit de ne pas subir de discrimination pour l’exercice de ces droits',
  ]},
  { heading: '14. Modifications de la présente politique', paragraphs: ['Nous pouvons mettre à jour la présente politique de temps à autre. Les modifications seront publiées sur cette page avec la nouvelle date de mise à jour. Nous vous recommandons de la relire régulièrement.']},
  { heading: '15. Contact', paragraphs: ['Pour toute question sur la présente politique : email info@giggal.ai, site https://giggal.ai.', 'En utilisant les services de Giggal.ai, vous déclarez avoir lu et compris la présente politique et en accepter les termes.']},
]

export default function ConfidentialitePage() {
  return (
    <LegalPageL10n
      locale="fr"
      path="/fr/confidentialite"
      title="Politique de"
      accent="confidentialité"
      updated="4 février 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
