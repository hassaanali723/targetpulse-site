import type { BulkVerifierCopy } from '@/components/l10n/BulkVerifierL10n'
import { InlineLink } from '@/components/l10n/BulkVerifierL10n'

// French copy for /fr/verification-email-en-masse, translated from the English
// /bulk-email-verifier page (app/(en)/bulk-email-verifier/page.tsx). Keyword
// family: vérification d’email en masse, vérifier des adresses mail en masse,
// vérificateur d’email en masse, vérifier une liste d’adresses mail, liste
// d’adresses mail valides, gratuit. The English "bulk email verifier" appears
// once, in the definition. Terms follow lib/i18n/emailChecker/fr.tsx.
// French punctuation: a no-break space before the high signs, inside the
// guillemets, in 50 000 and before the percent sign.

export const copy: BulkVerifierCopy = {
  meta: {
    title: 'Vérification d’email en masse : vérificateur gratuit',
    description:
      'Vérification d’email en masse : fichiers CSV et Excel jusqu’à 50 000 adresses. Résultat valide ou invalide par ligne, catch-all inclus. 1 000 crédits gratuits.',
    breadcrumb: 'Vérification d’email en masse',
    appName: 'Giggal.ai Vérification d’email en masse',
  },
  hero: {
    h1Lead: 'Vérification d’email en masse :',
    h1Rest: 'vérifiez toute votre liste en une fois',
    intro:
      'Importez un fichier CSV ou Excel et ce vérificateur d’email en masse contrôle chaque adresse. Chaque ligne reçoit un résultat valide ou invalide, adresses catch-all comprises.',
    ctaPrimary: 'Vérifier une liste gratuitement',
    ctaPricing: 'Voir les tarifs',
    checks: ['1 000 crédits gratuits', 'Aucune carte requise', 'Les crédits n’expirent jamais'],
  },
  facts: [
    { v: '50 000', l: 'adresses par fichier' },
    { v: '98,5 %', l: 'de précision sur les listes professionnelles' },
    { v: '1 crédit', l: 'par adresse, catch-all inclus' },
    { v: '<3 %', l: 'de taux de rebond après vérification, en général' },
  ],
  definition: {
    title: 'Qu’est-ce que la vérification d’email en masse ?',
    text: 'La vérification d’email en masse contrôle une liste entière d’adresses mail en une fois. Elle indique lesquelles peuvent recevoir du courrier. Un vérificateur d’email en masse consulte les serveurs de messagerie de chaque domaine et demande si chaque boîte mail existe, sans envoyer d’email. Vous retirez les adresses qui rebondiraient avant l’envoi. Cela protège votre réputation d’expéditeur et votre délivrabilité. En anglais, cet outil s’appelle un bulk email verifier.',
  },
  steps: {
    title: 'Comment fonctionne la vérification d’email en masse',
    intro:
      'Trois étapes, et aucun email n’est envoyé aux contacts de votre liste. La plupart des listes sont traitées en quelques minutes.',
    items: [
      {
        title: 'Importez votre liste',
        text: 'Ajoutez un fichier CSV ou Excel contenant jusqu’à 50 000 adresses mail. Pour une liste plus grande, divisez-la en plusieurs fichiers.',
      },
      {
        title: 'Chaque adresse est vérifiée',
        text: 'Le vérificateur consulte les serveurs de messagerie de chaque domaine et demande si la boîte mail existe. Il signale aussi les adresses jetables, génériques, en double et catch-all.',
      },
      {
        title: 'Téléchargez les résultats',
        text: 'Vous recevez un fichier CSV avec un résultat sur chaque ligne. Gardez les adresses valides, retirez les invalides et vérifiez de nouveau les inconnues plus tard.',
      },
    ],
  },
  results: {
    title: 'Ce que le vérificateur d’email en masse renvoie pour chaque adresse',
    intro: 'Chaque ligne se termine par l’un de trois résultats.',
    valid: {
      title: 'Valide',
      text: 'La boîte mail existe, donc un email envoyé à cette adresse devrait arriver. Gardez ces adresses.',
    },
    invalid: {
      title: 'Invalide',
      text: 'Le format est incorrect, le domaine n’a pas de serveur de messagerie, ou la boîte mail n’existe pas. Un email envoyé ici rebondira. Retirez ces adresses.',
    },
    unknown: {
      title: 'Inconnu',
      text: 'Le serveur de messagerie n’a pas donné de réponse claire, souvent à cause du greylisting. Vérifiez ces adresses de nouveau plus tard. Les crédits des résultats inconnus sont remboursés.',
    },
    flagsIntro: 'Chaque ligne affiche aussi ces indicateurs, pour vous aider à choisir les adresses à garder :',
    flags: [
      { lead: 'Catch-all', rest: ', résolue en valide ou invalide au lieu de rester « risquée »' },
      { lead: 'Jetable', rest: ', une boîte temporaire qui va cesser de fonctionner' },
      { lead: 'Générique', rest: ', comme contact@ ou ventes@, une boîte partagée et non une personne' },
      { lead: 'En double', rest: ', la même adresse plusieurs fois dans votre fichier' },
    ],
  },
  catchAll: {
    title: 'Les adresses catch-all reçoivent un résultat valide ou invalide',
    paragraphs: [
      <>
        Certains serveurs de messagerie d’entreprise acceptent toutes les adresses, réelles ou inventées. C’est un{' '}
        <InlineLink locale="fr" href="/catch-all-verification">domaine catch-all</InlineLink>. Un contrôle normal
        obtient un oui pour chaque adresse de ce domaine. Il ne peut donc pas distinguer une vraie boîte mail d’une
        faute de frappe.
      </>,
      <>
        Beaucoup de validateurs d’email en masse s’arrêtent là et marquent chaque adresse catch-all comme
        « risquée ». Dans les listes B2B, cela peut représenter une grande part de vos contacts, et beaucoup sont de
        vraies personnes. Vous devez alors deviner à qui envoyer.
      </>,
      <>
        Giggal.ai vérifie chaque adresse catch-all et renvoie valide ou invalide, pour 1 crédit, comme toute autre
        adresse. Il fonctionne aussi sur les domaines protégés par des{' '}
        <InlineLink locale="fr" href="/seg-email-verification">passerelles de sécurité comme Proofpoint et Mimecast</InlineLink>{' '}
        (en anglais), où d’autres outils renvoient souvent inconnu.
      </>,
    ],
  },
  pricing: {
    title: 'Vérificateur d’email en masse gratuit : commencez avec 1 000 crédits',
    intro:
      'Chaque nouveau compte reçoit 1 000 crédits gratuits, sans carte. Cela permet de vérifier gratuitement une liste de 1 000 adresses maximum. Ensuite, ce service de vérification d’email en masse est payé à l’usage. Vous achetez des crédits une seule fois, sans abonnement mensuel, et les crédits n’expirent jamais.',
    colCredits: 'Crédits (adresses)',
    colPrice: 'Prix',
    colPer1k: 'Pour 1 000 adresses',
    freeLabel: 'Gratuit',
    freeNote: 'Nouveaux comptes, sans carte',
    footnote: (
      <>
        Un crédit vérifie une adresse, contrôles catch-all compris. Consultez tous les{' '}
        <InlineLink locale="fr" href="/pricing">tarifs</InlineLink>.
      </>
    ),
  },
  useCases: {
    title: 'Quand utiliser un vérificateur d’email en masse',
    intro:
      'Vérifiez une liste chaque fois que vous allez écrire à beaucoup d’adresses en une fois. Retirer d’abord les adresses qui n’existent plus protège votre délivrabilité.',
    items: [
      'Avant une campagne de prospection par email, pour que les rebonds ne nuisent pas à votre délivrabilité.',
      'Après avoir collecté des contacts depuis un formulaire, un événement ou une base de données de prospects.',
      'Avant d’écrire à une ancienne liste de newsletter inutilisée depuis des mois.',
      'Avant d’importer des contacts dans votre CRM ou votre outil d’emailing.',
    ],
  },
  software: {
    title: 'Logiciel de vérification d’email en masse pour vos propres outils',
    intro:
      'L’import d’un fichier est une première option. Vous pouvez aussi vérifier des adresses mail en masse depuis votre propre application ou votre workflow.',
    items: [
      {
        title: 'API de vérification d’email (en anglais)',
        text: 'Envoyez des adresses depuis votre application ou votre formulaire d’inscription et recevez le résultat en JSON.',
      },
      {
        title: 'Intégrations',
        text: 'Vérifiez automatiquement les nouveaux contacts avec Zapier ou n8n.',
      },
      {
        title: 'Serveur MCP (en anglais)',
        text: 'Vérifiez des emails depuis Claude, ChatGPT, Cursor et VS Code.',
      },
    ],
  },
  versus: {
    listTitle: 'Vérifier une liste d’adresses mail ou la nettoyer ?',
    listText: (
      <>
        La vérification d’une liste d’emails donne un résultat à chaque adresse. Le nettoyage est ce que vous faites
        de ces résultats : vous retirez les adresses invalides, jetables et en double, et vous gardez une liste
        d’adresses mail valides. Les deux commencent par le même import. En savoir plus sur le{' '}
        <InlineLink locale="fr" href="/email-list-cleaning">nettoyage de liste d’emails</InlineLink> (en anglais).
      </>
    ),
    oneTitle: 'Besoin de vérifier une seule adresse ?',
    oneText: (
      <>
        Utilisez le{' '}
        <InlineLink locale="fr" href="/email-checker">vérificateur d’email</InlineLink> gratuit. Il vérifie une
        adresse à la fois avec les mêmes contrôles, sans inscription.
      </>
    ),
  },
  faqTitle: 'Vérification d’email en masse : questions fréquentes',
  faqs: [
    {
      q: 'Qu’est-ce qu’un vérificateur d’email en masse ?',
      a: 'Un vérificateur d’email en masse contrôle une liste entière d’adresses mail en une fois, au lieu d’une adresse à la fois. Vous importez un fichier, et chaque adresse reçoit un résultat : valide, invalide ou inconnu. On l’appelle aussi outil de contrôle d’emails en masse ou validateur d’email en masse.',
    },
    {
      q: 'Combien d’emails puis-je vérifier en une fois ?',
      a: 'Jusqu’à 50 000 adresses par fichier. Si votre liste est plus grande, divisez-la en plusieurs fichiers et importez-les un par un.',
    },
    {
      q: 'Existe-t-il un vérificateur d’email en masse gratuit ?',
      a: 'Oui. Chaque nouveau compte reçoit 1 000 crédits gratuits, sans carte. Un crédit vérifie une adresse. Vous pouvez donc vérifier gratuitement une liste de 1 000 adresses maximum.',
    },
    {
      q: 'La validation d’email en masse gratuite est-elle vraiment gratuite ?',
      a: 'Oui. Vos 1 000 premières adresses sont gratuites, sans carte. Les crédits gratuits n’expirent jamais, vous pouvez donc les utiliser quand vous voulez. Vous payez seulement si vous devez vérifier plus de 1 000 adresses.',
    },
    {
      q: 'Combien de temps dure la vérification d’email en masse ?',
      a: 'La plupart des listes sont traitées en quelques minutes.',
    },
    {
      q: 'Quels formats de fichier puis-je importer ?',
      a: 'CSV ou Excel. Vous téléchargez les résultats en CSV, avec un résultat sur chaque ligne.',
    },
    {
      q: 'Le vérificateur d’email en masse envoie-t-il des emails à ma liste ?',
      a: 'Non. Il demande à chaque serveur de messagerie si la boîte mail existe et s’arrête avant tout envoi de message. Aucun contact de votre liste ne reçoit de message.',
    },
    {
      q: 'Combien coûte la vérification d’email en masse ?',
      a: 'Un crédit par adresse, contrôles catch-all compris. 10 000 adresses coûtent 9,90 $ et 100 000 coûtent 76 $. Vous payez une seule fois, sans abonnement mensuel, et les crédits n’expirent jamais.',
    },
    {
      q: 'Que deviennent les adresses catch-all ?',
      a: 'Chacune est vérifiée et renvoyée comme valide ou invalide, pour 1 crédit, comme toute autre adresse. Beaucoup de validateurs d’email en masse les marquent plutôt toutes comme « risquées ».',
    },
    {
      q: 'Que signifie « inconnu », et dois-je payer ce résultat ?',
      a: 'Inconnu signifie que le serveur de messagerie n’a pas donné de réponse claire, souvent parce qu’il retarde volontairement les nouveaux expéditeurs (greylisting). Vérifiez ces adresses de nouveau plus tard. Les crédits des résultats inconnus sont remboursés.',
    },
    {
      q: 'La validation d’email en masse est-elle la même chose que la vérification d’email en masse ?',
      a: 'Oui. Validation, vérification et contrôle sont trois mots pour le même travail : savoir quelles adresses d’une liste peuvent recevoir du courrier.',
    },
    {
      q: 'Quelle est la précision du vérificateur d’email en masse ?',
      a: 'Giggal.ai mesure une précision de 98,5 % sur les listes professionnelles. Les listes vérifiées avec cet outil ont en général un taux de rebond inférieur à 3 %.',
    },
    {
      q: 'Ma liste reste-t-elle privée ?',
      a: 'Giggal.ai est exploité par TargetPulse Ltd et traite les données personnelles conformément au RGPD. La politique de confidentialité sur giggal.ai/fr/confidentialite explique quelles données sont collectées, comment elles sont utilisées et combien de temps elles sont conservées.',
    },
  ],
  ctaHeadline: 'Vérifiez votre liste d’emails en quelques minutes',
}
