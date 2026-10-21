import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Conditions d’utilisation du vérificateur d’email',
  description: 'Conditions d’utilisation de Giggal.ai : compte, achat de crédits, abonnements, consommation des crédits et règles du service. La version anglaise prévaut.',
  alternates: { canonical: '/fr/conditions', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'fr_FR', title: 'Conditions d’utilisation', url: 'https://giggal.ai/fr/conditions', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

// Courtesy translation of app/(en)/terms-of-service/page.tsx
// (English "Last Updated: October 22, 2026"). The English text is binding; the
// notice at the top of LegalPageL10n says so. Numbers as in English, French
// format (10 000 with a no-break space).

const sections: LegalSection[] = [
  { heading: '1. Acceptation des conditions', paragraphs: [
    'Le service est exploité par TargetPulse Ltd (« nous »), société immatriculée en Angleterre et au Pays de Galles sous le numéro 17079825, dont le siège social est situé Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd est le responsable du traitement des données personnelles traitées via Giggal.ai. Contact : info@giggal.ai. Signalements d’abus : abuse@giggal.ai.',
    'En accédant aux services de Giggal.ai et en les utilisant, vous acceptez les conditions et dispositions du présent accord et vous acceptez d’être lié par celles-ci. Si vous n’acceptez pas de respecter ce qui précède, veuillez ne pas utiliser ce service.',
    'Les présentes Conditions d’utilisation régissent votre utilisation du service Giggal.ai Email Verifier, exploité par TargetPulse Ltd sous le nom commercial Giggal.ai.',
  ]},
  { heading: '2. Description du service', paragraphs: [
    'Giggal.ai Email Verifier est un outil hébergé dans le cloud qui aide les équipes à nettoyer et à valider des listes d’adresses email. Les utilisateurs importent des fichiers CSV ou des adresses email individuelles. Nous contrôlons la délivrabilité, les enregistrements du domaine et l’existence de chaque boîte mail, afin de réduire les adresses invalides et d’améliorer la qualité des listes. Le produit est vendu sous la forme d’un système de crédits avec paiement à l’usage : les clients ne paient que pour les adresses email qu’ils valident réellement.',
    'Le Service vous est fourni sous réserve des présentes Conditions d’utilisation et de toutes conditions supplémentaires susceptibles de s’appliquer.',
  ]},
  { heading: '2.1 Service de vérification d’email', level: 3, paragraphs: ['Notre service principal est la vérification et la validation d’adresses email, qui comprend :'], list: [
    'Détection des passerelles : identification des passerelles de messagerie sécurisées (SEG) et des filtres de sécurité périmétriques',
    'Validation du domaine : vérification que le domaine de l’adresse existe et possède des enregistrements MX valides',
    'Vérification de la boîte mail : vérification que l’adresse email précise existe et peut recevoir des emails',
    'Détection des adresses jetables : identification des adresses email temporaires ou jetables',
    'Détection des adresses de rôle : détection des adresses email génériques (par exemple info@, support@)',
    'Détection catch-all : identification des domaines qui acceptent toutes les adresses email',
    'Vérification en temps réel : vérification de l’existence de la boîte mail du destinataire',
    'Vérification en masse : traitement simultané de milliers d’adresses email',
  ]},
  { heading: '2.2 Système de crédits', level: 3, paragraphs: ['Notre service fonctionne selon un modèle à crédits, dans lequel :'], list: [
    '1 crédit = 1 vérification d’email : chaque vérification d’adresse email consomme exactement 1 crédit du solde de votre compte',
    'Paiement à l’usage : achetez à tout moment des crédits en packs de 3 000 à 1 000 000 crédits',
    'Abonnements récurrents : abonnez-vous à des packs de crédits mensuels récurrents avec une remise de 10 % sur le prix normal',
    'Sans expiration : les crédits n’expirent jamais et restent disponibles sur votre compte jusqu’à leur utilisation',
    'Essai gratuit : les nouveaux comptes reçoivent 1 000 crédits offerts pour tester le service',
  ]},
  { heading: '2.3 Fonctionnalités du service', level: 3, paragraphs: ['Notre service de vérification d’email comprend :'], list: [
    'Un accès à l’API en temps réel pour une vérification instantanée',
    'Des capacités d’import et de traitement en masse',
    'Des rapports de vérification et des analyses détaillés',
    'L’export des résultats aux formats CSV, Excel et JSON',
    'La détection et la suppression des adresses email en double',
    'Des outils de nettoyage et de segmentation de listes',
    'Une prise en charge des intégrations via l’API et des systèmes tiers compatibles',
  ]},
  { heading: '3. Compte utilisateur', paragraphs: ['Pour utiliser certaines fonctionnalités du Service, vous devez créer un compte. Vous vous engagez à :'], list: [
    'Fournir des informations exactes, à jour et complètes lors de l’inscription',
    'Tenir à jour les informations de votre compte et les modifier sans délai',
    'Préserver la sécurité de votre mot de passe et accepter tous les risques liés à un accès non autorisé',
    'Nous informer immédiatement de toute utilisation non autorisée de votre compte',
    'Être responsable de toutes les activités effectuées sous votre compte',
  ]},
  { heading: '4. Conditions de paiement', paragraphs: ['Le traitement des paiements est assuré de manière sécurisée par notre passerelle de paiement agréée. En achetant des crédits ou des services, vous acceptez de :'], list: [
    'Fournir des informations d’achat et de compte à jour, complètes et exactes',
    'Mettre à jour sans délai les informations de votre compte et de paiement si nécessaire',
    'Payer tous les frais aux prix en vigueur au moment de vos achats',
    'Payer les taxes, la TVA ou les autres frais applicables à vos achats',
  ]},
  { heading: '4.1 Options d’achat de crédits', level: 3, paragraphs: ['Vous pouvez acheter des crédits selon les modalités suivantes :'], list: [
    'Achat unique (paiement à l’usage) : achetez des packs de crédits selon vos besoins, ajoutés immédiatement à votre compte',
    'Abonnement mensuel récurrent : recevez automatiquement des crédits chaque mois avec une remise de 10 %',
  ]},
  { heading: '4.2 Prix et facturation', level: 3, paragraphs: [
    'Tous les prix sont affichés en dollars américains (USD) et incluent les frais applicables. Les crédits sont ajoutés immédiatement à votre compte dès la confirmation du paiement. Aucun achat de crédits n’est remboursable, sauf si la loi l’exige ou si notre Politique de remboursement le prévoit expressément.',
  ]},
  { heading: '4.3 Crédits d’essai gratuits', level: 3, paragraphs: ['Les nouveaux utilisateurs reçoivent 1 000 crédits d’essai gratuits lors de l’inscription. Les crédits d’essai :'], list: [
    'Sont fournis gratuitement et ne nécessitent aucune information de paiement',
    'Fonctionnent exactement comme les crédits payants pour la vérification d’email',
    'Ne sont pas remboursables, car ils sont offerts',
    'Permettent de vérifier jusqu’à 1 000 adresses email',
    'Vous aident à évaluer la qualité de notre service avant tout achat',
  ]},
  { heading: '5. Services d’abonnement récurrent', paragraphs: ['Les abonnements mensuels récurrents de crédits sont facturés automatiquement chaque mois. Vous êtes facturé d’avance sur une base mensuelle récurrente, et les crédits sont ajoutés à votre compte une fois le paiement réussi. Les principales conditions sont les suivantes :'], list: [
    'Les abonnements se renouvellent automatiquement à la fin de chaque cycle de facturation, sauf résiliation',
    'Vous pouvez résilier votre abonnement à tout moment avant la prochaine date de facturation',
    'La résiliation prend effet à la fin de la période de facturation en cours',
    'Les crédits déjà ajoutés à votre compte restent disponibles après la résiliation',
    'Les abonnés récurrents bénéficient d’une remise de 10 % par rapport au prix du paiement à l’usage',
  ]},
  { heading: '6. Utilisation et gestion des crédits' },
  { heading: '6.1 Consommation des crédits', level: 3, paragraphs: ['Les crédits sont consommés comme suit :'], list: [
    'Chaque vérification d’email réussie consomme exactement 1 crédit',
    'Les crédits ne sont déduits que pour les vérifications terminées',
    'Les vérifications échouées en raison d’erreurs système ne consomment pas de crédits',
    'Les adresses email en double dans un même lot de vérification ne sont traitées qu’une seule fois',
  ]},
  { heading: '6.2 Validité et transfert des crédits', level: 3, paragraphs: ['Règles importantes concernant les crédits :'], list: [
    'Sans expiration : les crédits n’expirent jamais et restent sur votre compte indéfiniment',
    'Non transférables : les crédits ne peuvent pas être transférés d’un compte à un autre',
    'Non remboursables : une fois achetés, les crédits ne sont pas remboursables (voir la Politique de remboursement pour les exceptions)',
    'Liés au compte : les crédits sont rattachés à votre compte et ne peuvent pas être partagés',
  ]},
  { id: 'cancellation-policy', heading: '7. Résiliation et remboursements', paragraphs: ['Vous pouvez résilier votre abonnement récurrent à tout moment depuis les paramètres de votre compte ou en contactant notre équipe d’assistance à info@giggal.ai. Après la résiliation :'], list: [
    'Votre abonnement ne sera pas renouvelé pour le cycle de facturation suivant',
    'Vous conservez tous les crédits de votre compte',
    'Vous pouvez continuer à utiliser vos crédits existants sans restriction',
    'Vous pouvez toujours acheter des packs de crédits en paiement à l’usage',
  ], after: ['Les remboursements liés à une activité inhabituelle ou à des circonstances exceptionnelles sont traités conformément à notre Politique de remboursement. Si vous rencontrez un problème ou soupçonnez une activité frauduleuse, contactez immédiatement notre équipe d’assistance pour un examen.']},
  { heading: '8. Politique d’utilisation acceptable', paragraphs: ['Vous vous engagez à utiliser le Service uniquement à des fins licites et dans le respect de toutes les lois et réglementations applicables. Vous vous engagez à ne pas utiliser le Service :'], list: [
    'Pour vérifier des adresses email obtenues sans le consentement ou l’autorisation nécessaires',
    'Pour envoyer du spam ou des emails non sollicités après la vérification',
    'Pour enfreindre les lois ou réglementations applicables, notamment le CAN-SPAM Act, le RGPD et la CASL',
    'Pour porter atteinte aux droits d’autrui ou pour les violer',
    'Pour diffuser des logiciels malveillants ou tout autre code nuisible',
    'Pour usurper l’identité d’une personne ou d’une entité',
    'Pour vous livrer à une activité frauduleuse ou à un usage abusif de notre service',
    'Pour revendre ou redistribuer nos services de vérification sans autorisation',
    'Pour tenter de rétroconcevoir ou de compromettre nos systèmes de vérification',
    'Pour partager les identifiants ou les crédits de votre compte avec des utilisateurs non autorisés',
  ]},
  { heading: '9. Précision et limites du service', paragraphs: ['Bien que nous visions la plus grande précision possible dans la vérification d’email, vous reconnaissez et acceptez que :'], list: [
    'La vérification d’email ne peut pas garantir une précision de 100 % en raison de limites techniques',
    'Certains serveurs de messagerie peuvent renvoyer des réponses faussement positives ou faussement négatives',
    'Les résultats de vérification reposent sur des contrôles en temps réel et peuvent évoluer dans le temps',
    'Nous fournissons les résultats de vérification « en l’état » et ne donnons aucune garantie quant à la délivrabilité',
    'Vous êtes responsable de l’utilisation licite des données vérifiées et de toutes les communications qui en découlent',
  ]},
  { heading: '10. Usage licite et conformité des communications', paragraphs: ['Si vous utilisez des adresses email vérifiées pour des messages de prospection, des messages transactionnels ou des messages d’assistance, vous êtes seul responsable du respect de toutes les lois et réglementations applicables, y compris, sans s’y limiter :'], list: [
    'CAN-SPAM Act (États-Unis)',
    'RGPD (Union européenne)',
    'CASL (Canada)',
    'Autres lois applicables en matière de lutte contre le spam et de protection des données',
  ], after: ['Vous devez obtenir tout consentement requis et inclure, le cas échéant, les mécanismes de désinscription ou de gestion des préférences exigés par la loi. Giggal.ai n’est pas responsable de l’usage que vous faites des adresses email vérifiées.']},
  { heading: '11. Propriété intellectuelle', paragraphs: ['Le Service et ses contenus, fonctionnalités et fonctions originaux sont la propriété de Giggal.ai et sont protégés par les lois internationales sur le droit d’auteur, les marques, les brevets, les secrets d’affaires et les autres droits de propriété intellectuelle. Vous ne pouvez pas copier, modifier, distribuer, vendre ou louer une quelconque partie de nos services sans autorisation écrite préalable.']},
  { heading: '12. Données et confidentialité', paragraphs: [
    'Votre utilisation du Service est également régie par notre Politique de confidentialité. Nous collectons, conservons et traitons vos données comme décrit dans la Politique de confidentialité. Vous conservez tous les droits sur vos données clients et vos listes d’adresses email, et nous ne les utiliserons que dans la mesure nécessaire à la fourniture du Service ou lorsque la loi l’exige.',
    'Les adresses email soumises pour vérification sont traitées de manière sécurisée et ne sont pas stockées de façon permanente. Nous ne vendons pas, ne partageons pas et n’utilisons pas vos listes d’adresses email à d’autres fins que la fourniture des services de vérification.',
  ]},
  { heading: '13. Modifications et disponibilité du service', paragraphs: [
    'Nous nous réservons le droit de modifier ou d’interrompre le Service (ou toute partie de celui-ci), temporairement ou définitivement, avec ou sans préavis. Nous ne serons pas responsables envers vous ni envers un tiers de toute modification, suspension ou interruption du Service.',
    'Nous nous efforçons de maintenir une haute disponibilité du service, mais nous ne garantissons pas un accès ininterrompu. La maintenance programmée sera annoncée à l’avance lorsque cela est possible.',
  ]},
  { heading: '14. Limitation de responsabilité', paragraphs: ['Dans toute la mesure permise par la loi, Giggal.ai, ses administrateurs, employés, partenaires, mandataires, fournisseurs ou sociétés affiliées ne pourront en aucun cas être tenus responsables des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris, sans limitation, la perte de bénéfices, de données, d’usage, de clientèle ou d’autres pertes immatérielles, résultant de :'], list: [
    'Votre accès au Service ou son utilisation, ou l’impossibilité d’accéder au Service ou de l’utiliser',
    'Tout comportement ou contenu d’un tiers sur le Service',
    'Tout contenu obtenu à partir du Service',
    'Tout accès, toute utilisation ou toute modification non autorisés de vos transmissions ou de vos contenus',
    'Des résultats de vérification d’email inexacts',
    'Des échecs de distribution d’emails ou des rebonds après vérification',
    'Des crédits consommés à la suite d’une erreur ou d’un mauvais usage de l’utilisateur',
  ]},
  { heading: '15. Exclusion de garanties', paragraphs: [
    'Le Service est fourni « en l’état » et « selon disponibilité », sans garantie d’aucune sorte, expresse ou implicite. Giggal.ai exclut toute garantie, y compris, sans s’y limiter, les garanties implicites de qualité marchande, d’adéquation à un usage particulier et d’absence de contrefaçon.',
    'Nous ne garantissons pas que le Service sera ininterrompu, ponctuel, sécurisé ou exempt d’erreurs, ni que les résultats de vérification d’email seront exacts à 100 %.',
  ]},
  { heading: '16. Indemnisation', paragraphs: ['Vous vous engagez à défendre, indemniser et dégager de toute responsabilité Giggal.ai ainsi que ses licenciés et concédants de licence contre toute réclamation, tout dommage, toute obligation, perte, responsabilité, tout coût ou toute dette, et tous frais découlant de votre utilisation du Service ou de la violation des présentes Conditions.']},
  { heading: '17. Résiliation', paragraphs: ['Nous pouvons résilier ou suspendre votre compte et votre accès au Service immédiatement, sans préavis ni responsabilité, pour quelque motif que ce soit, y compris, sans limitation, si vous enfreignez les présentes Conditions. En cas de résiliation :'], list: [
    'Votre droit d’utiliser le Service prend fin immédiatement',
    'Les crédits non utilisés sont perdus sans remboursement',
    'Les abonnements récurrents sont annulés',
    'L’accès à votre compte et à vos données peut être révoqué définitivement',
  ]},
  { heading: '18. Droit applicable', paragraphs: ['Les présentes Conditions sont régies et interprétées conformément aux lois de la juridiction dans laquelle Giggal.ai exerce ses activités, sans égard à ses règles de conflit de lois.']},
  { heading: '19. Règlement des litiges', paragraphs: ['Tout litige découlant des présentes Conditions ou du Service, ou s’y rapportant, fera d’abord l’objet d’une tentative de règlement par une négociation de bonne foi. Si la négociation échoue, le litige sera réglé par un arbitrage contraignant, conformément aux règles de l’organisme d’arbitrage approprié.']},
  { heading: '20. Modification des conditions', paragraphs: ['Nous nous réservons le droit de modifier ou de remplacer les présentes Conditions à tout moment, à notre seule discrétion. Si une révision est substantielle, nous vous en informerons au moins 30 jours avant l’entrée en vigueur des nouvelles conditions. Ce qui constitue une modification substantielle sera déterminé à notre seule discrétion.']},
  { heading: '21. Divisibilité', paragraphs: ['Si une disposition des présentes Conditions est jugée inapplicable ou invalide, cette disposition sera modifiée et interprétée de manière à atteindre ses objectifs dans toute la mesure possible en vertu du droit applicable, et les autres dispositions resteront pleinement en vigueur.']},
  { heading: '22. Coordonnées', paragraphs: [
    'Pour toute question sur les présentes Conditions d’utilisation, veuillez nous contacter :',
    'Email : info@giggal.ai',
    'Site web : https://giggal.ai',
    'En utilisant les services de Giggal.ai, vous reconnaissez avoir lu et compris les présentes Conditions d’utilisation et acceptez d’être lié par celles-ci.',
  ]},
]

export default function ConditionsPage() {
  return (
    <LegalPageL10n
      locale="fr"
      path="/fr/conditions"
      title="Conditions"
      accent="d’utilisation"
      updated="22 octobre 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
