import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Conditions d’utilisation de Giggal.ai',
  description: 'Conditions générales d’utilisation du service de vérification d’email Giggal.ai. Traduction de courtoisie ; la version anglaise prévaut.',
  alternates: { canonical: '/fr/conditions', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'fr_FR', title: 'Conditions d’utilisation', url: 'https://giggal.ai/fr/conditions', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Acceptation des conditions', paragraphs: [
    'En accédant aux services de Giggal.ai et en les utilisant, vous acceptez d’être lié par les conditions du présent accord. Si vous ne comptez pas les respecter, n’utilisez pas le service.',
    'Les présentes Conditions d’utilisation régissent l’usage du service Giggal.ai Email Verifier, exploité par Hassaan Ali Mehmood sous le nom commercial Giggal.ai.',
  ]},
  { heading: '2. Description du service', paragraphs: [
    'Giggal.ai Email Verifier est un outil en ligne qui aide les équipes à nettoyer et valider des listes d’adresses email. Les utilisateurs importent des fichiers CSV ou des adresses individuelles et nous contrôlons la délivrabilité, la syntaxe et l’état de la boîte pour réduire les adresses invalides et améliorer la délivrabilité.',
    'Le Service est fourni sous réserve des présentes Conditions et de toute condition supplémentaire applicable.',
  ]},
  { heading: '2.1 Service de vérification d’email', level: 3, paragraphs: ['Notre service principal est la vérification et la validation d’adresses email, qui comprend :'], list: [
    'Validation de la syntaxe : contrôle du format et de la structure de l’adresse',
    'Validation du domaine : contrôle que le domaine existe et possède des enregistrements MX valides',
    'Vérification de la boîte : contrôle que l’adresse précise existe et peut recevoir du courrier',
    'Détection des adresses jetables : identification des adresses temporaires',
    'Détection des adresses génériques : identification des adresses de rôle (par exemple contact@, support@)',
    'Détection catch-all : identification des domaines qui acceptent n’importe quelle adresse',
    'Validation SMTP : vérification en temps réel par le protocole SMTP',
    'Vérification en masse : traitement de milliers d’adresses à la fois',
  ]},
  { heading: '2.2 Système de crédits', level: 3, paragraphs: ['Le service fonctionne avec des crédits :'], list: [
    '1 crédit = 1 vérification : chaque vérification consomme exactement 1 crédit du solde',
    'Paiement à l’usage : des packs de crédits achetables à tout moment',
    'Abonnements récurrents : des packs mensuels remisés par rapport au prix à l’usage',
    'Sans expiration : les crédits restent disponibles jusqu’à leur utilisation',
    'Essai gratuit : les nouveaux comptes reçoivent 1 000 crédits offerts',
  ]},
  { heading: '2.3 Fonctions du service', level: 3, list: [
    'Accès à l’API en temps réel', 'Import et traitement en masse', 'Rapports et analyses détaillés',
    'Export CSV, Excel et JSON', 'Détection et suppression des doublons', 'Outils de nettoyage et de segmentation de listes',
  ]},
  { heading: '3. Compte utilisateur', paragraphs: ['Pour utiliser certaines fonctions, vous devez créer un compte. Vous vous engagez à :'], list: [
    'Fournir des informations exactes, à jour et complètes à l’inscription',
    'Maintenir les informations du compte à jour',
    'Protéger votre mot de passe et assumer les risques d’un accès non autorisé',
    'Nous signaler immédiatement tout usage non autorisé du compte',
    'Répondre de toute activité effectuée avec votre compte',
  ]},
  { heading: '4. Conditions de paiement', paragraphs: ['Les paiements sont traités de manière sécurisée par notre prestataire de paiement agréé. En achetant des crédits ou des services, vous acceptez de :'], list: [
    'Fournir des informations d’achat et de compte à jour, complètes et exactes',
    'Mettre à jour rapidement vos données de compte et de paiement',
    'Payer tous les montants aux prix en vigueur au moment de l’achat',
    'Payer les taxes, la TVA et autres frais applicables',
  ]},
  { heading: '4.1 Modes d’achat', level: 3, list: [
    'Achat unique (paiement à l’usage) : des packs de crédits ajoutés immédiatement au compte',
    'Abonnement mensuel : des crédits reçus automatiquement chaque mois avec remise',
  ]},
  { heading: '4.2 Prix et facturation', level: 3, paragraphs: [
    'Tous les prix sont exprimés en dollars américains et comprennent les frais applicables. Les crédits sont ajoutés au compte à la confirmation du paiement. Les achats de crédits ne sont pas remboursables, sauf disposition légale ou prévue par la Politique de remboursement.',
  ]},
  { heading: '4.3 Crédits d’essai offerts', level: 3, paragraphs: ['Les nouveaux utilisateurs reçoivent 1 000 crédits d’essai à l’inscription. Les crédits d’essai :'], list: [
    'Sont gratuits et ne demandent aucune donnée de paiement', 'Fonctionnent comme les crédits payants', 'Ne sont pas remboursables, s’agissant d’un cadeau',
    'Permettent de vérifier jusqu’à 1 000 adresses', 'Servent à évaluer la qualité du service avant achat',
  ]},
  { heading: '5. Abonnements récurrents', paragraphs: ['Les abonnements mensuels sont facturés automatiquement chaque mois, d’avance ; les crédits sont ajoutés au compte une fois le paiement effectué. En particulier :'], list: [
    'L’abonnement se renouvelle automatiquement à la fin de chaque cycle, sauf résiliation',
    'Vous pouvez résilier à tout moment avant la date de renouvellement',
    'La résiliation prend effet à la fin de la période en cours',
    'Les crédits déjà ajoutés restent disponibles après la résiliation',
    'Les abonnés bénéficient d’une remise par rapport au prix à l’usage',
  ]},
  { heading: '6. Utilisation et gestion des crédits' },
  { heading: '6.1 Consommation des crédits', level: 3, list: [
    'Chaque vérification aboutie consomme exactement 1 crédit', 'Les crédits ne sont décomptés que pour les vérifications abouties',
    'Les vérifications échouées à cause d’erreurs système ne consomment pas de crédit', 'Les adresses en double dans un même import sont traitées une seule fois',
  ]},
  { heading: '6.2 Validité et transfert des crédits', level: 3, list: [
    'Sans expiration : les crédits restent sur le compte indéfiniment', 'Non transférables entre comptes',
    'Non remboursables après achat (sauf exceptions de la Politique de remboursement)', 'Liés au compte et non partageables',
  ]},
  { id: 'cancellation-policy', heading: '7. Résiliation et remboursements', paragraphs: ['Vous pouvez résilier l’abonnement à tout moment depuis les paramètres du compte ou en écrivant à info@giggal.ai. Après la résiliation :'], list: [
    'L’abonnement ne se renouvelle pas au cycle suivant', 'Vous conservez tous les crédits du compte',
    'Vous pouvez continuer à utiliser les crédits sans limitation', 'Vous pouvez continuer à acheter des packs à l’usage',
  ], after: ['Les remboursements pour activité anormale ou circonstances exceptionnelles sont traités selon la Politique de remboursement. En cas de problème ou de suspicion de fraude, contactez immédiatement le support.']},
  { heading: '8. Usage acceptable', paragraphs: ['Vous vous engagez à n’utiliser le Service qu’à des fins licites et conformément aux lois applicables. En particulier, vous n’utiliserez pas le Service pour :'], list: [
    'Vérifier des adresses obtenues sans consentement ni autorisation', 'Envoyer du spam ou des messages non sollicités après vérification',
    'Enfreindre des lois ou règlements, y compris CAN-SPAM, RGPD et CASL', 'Porter atteinte aux droits de tiers', 'Diffuser des logiciels malveillants ou du code nuisible',
    'Usurper l’identité de personnes ou d’entités', 'Commettre une fraude ou abuser du service', 'Revendre ou redistribuer le service sans autorisation',
    'Tenter de décompiler ou de compromettre nos systèmes', 'Partager des identifiants ou des crédits avec des utilisateurs non autorisés',
  ]},
  { heading: '9. Précision et limites du service', paragraphs: ['Nous visons la plus grande précision, mais vous reconnaissez et acceptez que :'], list: [
    'La vérification d’email ne peut garantir une précision de 100 % en raison de limites techniques', 'Certains serveurs peuvent donner des réponses faussement positives ou négatives',
    'Les résultats reposent sur des contrôles en temps réel et peuvent changer', 'Les résultats sont fournis « en l’état », sans garantie de délivrabilité',
    'Vous êtes responsable de l’usage licite des données vérifiées et des communications qui suivent',
  ]},
  { heading: '10. Usage licite et conformité des communications', paragraphs: ['Si vous utilisez les adresses vérifiées pour de la prospection, des messages transactionnels ou de support, vous êtes seul responsable du respect des lois applicables, notamment :'], list: [
    'CAN-SPAM Act (États-Unis)', 'RGPD (Union européenne)', 'CASL (Canada)', 'Autres lois antispam et de protection des données',
  ], after: ['Vous devez obtenir les consentements requis et inclure les mécanismes de désinscription prévus par la loi. Giggal.ai n’est pas responsable de l’usage que vous faites des adresses vérifiées.']},
  { heading: '11. Propriété intellectuelle', paragraphs: ['Le Service et ses contenus, fonctions et fonctionnalités originaux appartiennent à Giggal.ai et sont protégés par les lois internationales sur le droit d’auteur, les marques, les brevets, les secrets d’affaires et les autres droits de propriété intellectuelle. Vous ne pouvez pas copier, modifier, distribuer, vendre ni concéder sous licence une partie du Service sans notre accord écrit.']},
  { heading: '12. Données et confidentialité', paragraphs: [
    'L’usage du Service est également régi par notre Politique de confidentialité. Vous conservez tous les droits sur vos données et vos listes, que nous n’utiliserons pas à d’autres fins que la fourniture du service.',
    'Les adresses envoyées pour vérification sont traitées de manière sécurisée et ne sont pas conservées de façon permanente. Nous ne vendons, ne partageons ni n’utilisons vos listes à d’autres fins.',
  ]},
  { heading: '13. Modifications et disponibilité du service', paragraphs: [
    'Nous nous réservons le droit de modifier ou d’interrompre le Service, en tout ou partie, temporairement ou définitivement, avec ou sans préavis, sans responsabilité envers vous ni envers des tiers.',
    'Nous visons une haute disponibilité mais ne garantissons pas un accès ininterrompu. La maintenance programmée est annoncée à l’avance quand c’est possible.',
  ]},
  { heading: '14. Limitation de responsabilité', paragraphs: ['Dans toute la mesure permise par la loi, Giggal.ai et ses dirigeants, employés, partenaires, agents, fournisseurs et affiliés ne sont pas responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris la perte de bénéfices, de données, de clientèle ou d’autres pertes immatérielles, résultant de :'], list: [
    'L’accès au Service, son usage ou l’impossibilité d’y accéder', 'La conduite ou les contenus de tiers sur le Service', 'Des contenus obtenus via le Service',
    'L’accès, l’usage ou la modification non autorisés de vos transmissions ou contenus', 'Des résultats de vérification inexacts',
    'Des remises échouées ou des rebonds après vérification', 'Des crédits consommés par erreur ou par mauvais usage de l’utilisateur',
  ]},
  { heading: '15. Exclusion de garanties', paragraphs: [
    'Le Service est fourni « en l’état » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite, y compris les garanties implicites de qualité marchande, d’adéquation à un usage particulier et de non-contrefaçon.',
    'Nous ne garantissons pas que le Service sera ininterrompu, ponctuel, sûr ou sans erreur, ni que les résultats de vérification seront exacts à 100 %.',
  ]},
  { heading: '16. Indemnisation', paragraphs: ['Vous vous engagez à défendre, indemniser et dégager de toute responsabilité Giggal.ai, ses concédants et licenciés contre toute réclamation, dommage, obligation, perte, responsabilité, coût ou dépense découlant de l’usage du Service, du non-respect des présentes Conditions ou de la violation de droits de tiers.']},
  { heading: '17. Résiliation par Giggal.ai', paragraphs: ['Nous pouvons fermer ou suspendre votre compte et l’accès au Service immédiatement, sans préavis ni responsabilité, pour quelque motif que ce soit, y compris le non-respect des présentes Conditions. En cas de résiliation :'], list: [
    'Le droit d’utiliser le Service cesse immédiatement', 'Les crédits non utilisés sont perdus sans remboursement',
    'Les abonnements sont annulés', 'L’accès au compte et aux données peut être révoqué définitivement',
  ]},
  { heading: '18. Droit applicable', paragraphs: ['Les présentes Conditions sont régies et interprétées conformément aux lois de la juridiction dans laquelle Giggal.ai opère, sans égard aux règles de conflit de lois.']},
  { heading: '19. Règlement des litiges', paragraphs: ['Les litiges découlant des présentes Conditions ou du Service seront d’abord traités par une négociation de bonne foi. Si la négociation échoue, ils seront réglés par arbitrage contraignant selon les règles applicables dans la juridiction dans laquelle Giggal.ai opère.']},
  { heading: '20. Modification des conditions', paragraphs: ['Nous nous réservons le droit de modifier ou de remplacer les présentes Conditions à tout moment. Si une modification est substantielle, nous la signalerons au moins 30 jours avant son entrée en vigueur. Ce qui constitue une modification substantielle est laissé à notre appréciation.']},
  { heading: '21. Divisibilité', paragraphs: ['Si une disposition des présentes Conditions est jugée inapplicable ou invalide, elle sera modifiée et interprétée pour atteindre ses objectifs dans toute la mesure permise par la loi, et les autres dispositions resteront pleinement en vigueur.']},
  { heading: '22. Contact', paragraphs: ['Pour toute question sur les présentes Conditions d’utilisation : email info@giggal.ai, site https://giggal.ai.', 'En utilisant les services de Giggal.ai, vous déclarez avoir lu et compris les présentes Conditions d’utilisation et les accepter.']},
]

export default function ConditionsPage() {
  return (
    <LegalPageL10n
      locale="fr"
      path="/fr/conditions"
      title="Conditions"
      accent="d’utilisation"
      updated="4 février 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
