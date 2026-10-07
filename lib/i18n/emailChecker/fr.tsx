import type { EmailCheckerCopy } from '@/components/l10n/EmailCheckerL10n'
import { InlineLink } from '@/components/l10n/EmailCheckerL10n'

// French copy for /fr/verifier-adresse-mail, translated from the English
// /email-checker page (app/(en)/email-checker/page.tsx). Keyword family from
// the previous French page: vérifier une adresse mail (and the adresse e-mail /
// adresse email spellings), tester une adresse mail, vérification d’adresse
// mail, vérificateur d’email, adresse mail valide, gratuit. French
// punctuation: a no-break space before ":", "?", "!" and ";", inside « », in
// 1 000 and before "%".

export const copy: EmailCheckerCopy = {
  hero: {
    h1Lead: 'Vérifier une adresse mail',
    h1Rest: 'gratuitement',
    intro:
      'Vérifiez ou testez gratuitement n’importe quelle adresse mail en ligne. Collez-la pour tester le format, le serveur de messagerie et la boîte mail elle-même. Sur les domaines catch-all, ce vérificateur d’email poursuit les contrôles et renvoie valide ou invalide.',
  },
  tool: {
    caption: 'Sans inscription, sans carte. Une adresse par vérification.',
    freeCredits: 'Besoin de plus de vérifications ? Créez un compte et recevez 1 000 crédits gratuits. Aucune carte requise.',
  },
  ratings: {
    reviews: (count) => `${count} avis`,
    ratedAria: (rating, platform) => `Note de Giggal.ai sur ${platform} : ${rating.replace('.', ',')} sur 5`,
  },
  awards: {
    headingLead: 'Giggal.ai est classé',
    headingRest: 'Leader sur SourceForge et Slashdot',
    showLabel: 'Afficher {badge}',
  },
  steps: {
    title: 'Comment vérifier si une adresse mail est valide',
    intro:
      'Un test d’adresse mail complet, aussi appelé vérification d’adresse mail, compte quatre étapes. Les vérificateurs qui s’arrêtent à la première expliquent pourquoi tant de listes « vérifiées » rebondissent encore.',
    items: [
      {
        title: 'Format',
        text: 'L’adresse est-elle bien formée : une seule arobase, un nom valide avant elle, un domaine avec une extension comme .com. Cette étape trouve les fautes de frappe, rien d’autre.',
      },
      {
        title: 'Serveur de messagerie',
        text: 'Le domaine publie-t-il des enregistrements de serveur de messagerie (MX) ? Sans enregistrement MX, aucune boîte mail ne peut exister sur ce domaine. L’adresse est donc morte avant tout envoi.',
      },
      {
        title: 'Boîte mail',
        text: 'Le vérificateur demande au serveur de messagerie si cette boîte existe, sans envoyer d’email. Un oui signifie que la boîte existe. Un non signifie qu’elle n’existe pas.',
      },
      {
        title: 'Catch-all',
        text: 'Si le serveur dit aussi oui à une adresse inventée, l’étape trois n’a rien prouvé. C’est là que la plupart des vérificateurs d’email affichent « catch-all » et s’arrêtent. Giggal.ai analyse des signaux supplémentaires qui distinguent une vraie boîte d’une réponse accept-all, puis renvoie valide ou invalide.',
      },
    ],
    footnote:
      'Le panneau de résultat ci-dessus affiche chaque étape pendant son exécution. Pour tester la validité d’une adresse mail, collez-la et cliquez sur le bouton. Une adresse prend quelques secondes.',
  },
  results: {
    title: 'Ce que le vérificateur d’email affiche pour chaque adresse',
    intro: 'Chaque vérification se termine par l’un de trois résultats.',
    valid: {
      title: 'Valide',
      text: 'La boîte mail existe et a passé les contrôles supplémentaires. Un email envoyé à cette adresse devrait donc arriver.',
    },
    invalid: {
      title: 'Invalide',
      text: 'L’adresse a un format incorrect, aucun serveur de messagerie, ou le serveur a refusé la boîte. Un email envoyé à cette adresse rebondira.',
    },
    unknown: {
      title: 'Inconnu',
      text: 'Rare ici. Le serveur n’a pas répondu à temps ou retarde volontairement les nouveaux expéditeurs. Réessayez plus tard au lieu de considérer l’adresse comme morte.',
    },
    detailsIntro: 'Sous le résultat, le vérificateur d’adresse mail affiche les détails utiles pour juger la délivrabilité :',
    details: [
      { lead: 'Le fournisseur de messagerie', rest: ' (Google Workspace, Microsoft 365 ou une passerelle comme Proofpoint)' },
      { lead: 'Le serveur de messagerie qui a répondu', rest: '' },
      { lead: 'Si l’adresse est jetable', rest: ' (une boîte temporaire qui va disparaître)', href: '/fr/verifier-adresse-mail-jetable' },
      { lead: 'Si elle est générique', rest: ' (contact@, ventes@, support@, qui mènent à une boîte partagée, pas à une personne)' },
      { lead: 'Si elle est chez un fournisseur grand public', rest: ' comme Gmail ou Yahoo, une donnée utile pour qualifier des contacts B2B' },
    ],
  },
  exists: {
    title: 'Comment vérifier si une adresse mail existe',
    p1: 'Une adresse mail existe quand sa boîte est créée sur le serveur de messagerie du destinataire et accepte le courrier. Pour vérifier l’adresse mail, le vérificateur interroge directement ce serveur, sans envoyer de message. Il prouve que la boîte est là. Il ne prouve pas qui la possède, ni à quelle fréquence elle est lue.',
    p2: 'Si vous ne savez pas si une adresse de vos contacts existe, testez-la dans le vérificateur d’email ci-dessus.',
    signsIntro: 'Les adresses qui n’existent pas présentent souvent l’un de ces signes :',
    signs: [
      { lead: 'Un domaine avec une faute de frappe', rest: ' comme gmial.com ou yaho.com, qui n’a pas de serveur de messagerie ou refuse tout.' },
      { lead: 'Aucun enregistrement de serveur de messagerie', rest: ' sur le domaine, donc le courrier n’a nulle part où aller.' },
      { lead: 'Une boîte refusée :', rest: ' le domaine est réel, mais le serveur indique que cette personne n’y est pas, souvent parce qu’elle a quitté l’entreprise.' },
      { lead: 'Des caractères au hasard', rest: ' avant l’arobase, saisis par des robots ou par des personnes qui ne voulaient pas remplir le formulaire.' },
    ],
  },
  whySend: {
    title: 'Pourquoi vérifier une adresse mail avant d’envoyer',
    p1: 'Un email envoyé à une adresse qui n’existe pas revient sous forme de hard bounce. Gmail, Outlook et les autres fournisseurs de messagerie comptent vos rebonds. Quand trop de vos emails rebondissent, ils font moins confiance à votre domaine d’envoi. Plus de vos emails vont alors en spam ou sont bloqués, même ceux envoyés à de vraies personnes. La vérification d’adresse mail trouve ces adresses avant l’envoi.',
    readMore: (
      <>
        Lisez{' '}
        <InlineLink href="/fr/blog/hard-bounce-et-soft-bounce">hard bounce et soft bounce</InlineLink>{' '}
        pour connaître le sens de chaque code de rebond et ce qu’il faut faire dans chaque cas.
      </>
    ),
    bounceTitle: 'Un taux de rebond plus bas.',
    bounceText: 'Les listes nettoyées avec Giggal.ai ont en général un taux de rebond inférieur à 3 %.',
    benefits: [
      {
        title: 'Une bonne réputation d’expéditeur.',
        text: 'Avec moins de rebonds, votre domaine garde la confiance des fournisseurs de messagerie.',
      },
      {
        title: 'Une meilleure délivrabilité.',
        text: 'Avec une bonne réputation, plus de vos emails arrivent en boîte de réception au lieu du dossier spam.',
      },
      {
        title: 'Des données plus propres.',
        text: 'Les adresses mortes sortent de votre CRM avant de vous coûter du temps ou des crédits d’envoi.',
      },
    ],
  },
  whenToUse: {
    title: 'Quand utiliser un vérificateur d’email',
    intro: 'Utilisez ce vérificateur d’email chaque fois qu’une seule adresse décide de la suite :',
    items: [
      'Avant de répondre à un contact entrant dont l’adresse semble tapée à la main.',
      'Quand une inscription rebondit et que vous voulez savoir si l’adresse a déjà existé.',
      'Avant d’écrire à une adresse trouvée sur un site web ou dans un CRM.',
      'Pour tester une adresse d’une liste achetée avant de payer le nettoyage du fichier entier.',
      'Pour confirmer un contact sur un domaine catch-all qu’un autre outil a marqué « risqué ».',
    ],
  },
  catchAll: {
    title: 'Pourquoi les autres vérificateurs d’email s’arrêtent au catch-all',
    paragraphs: [
      <>
        Certains serveurs de messagerie d’entreprise acceptent toutes les adresses, réelles ou inventées. C’est un{' '}
        <InlineLink href="/fr/verification-catch-all">domaine catch-all</InlineLink>. Interrogez-le sur un vrai
        salarié et il répond oui. Interrogez-le sur un nom inventé et il répond oui aussi. Le contrôle normal de la
        boîte mail ne prouve donc rien sur ce domaine.
      </>,
      <>
        Repérer un domaine catch-all est facile : il suffit de tester une adresse inventée et de voir si elle est
        acceptée. C’est pourquoi presque tous les vérificateurs d’email peuvent vous dire qu’un domaine est
        catch-all. Savoir quelles boîtes sont réelles derrière ce domaine demande beaucoup plus de travail. La
        plupart des vérificateurs s’arrêtent donc à l’étiquette et vous laissent décider. Dans les listes B2B, les
        adresses catch-all représentent souvent une grande part des contacts, et beaucoup sont de vraies personnes.
      </>,
      <>
        Giggal.ai analyse les signaux supplémentaires sur chaque adresse catch-all et renvoie valide ou invalide.
        C’est aussi pourquoi cette page ne permet que quelques vérifications par visiteur. Lisez{' '}
        <InlineLink href="/fr/blog/qu-est-ce-qu-une-adresse-email-catch-all">
          ce qu’est une adresse email catch-all
        </InlineLink>{' '}
        pour le contexte complet.
      </>,
    ],
  },
  wholeList: {
    title: 'Vérifier une liste entière au lieu d’une seule adresse',
    list: (
      <>
        Le vérificateur d’email de cette page traite une adresse à la fois. Pour la vérification en masse d’une
        liste, créez un compte et importez un fichier CSV ou Excel contenant jusqu’à 50 000 adresses. Puis{' '}
        <InlineLink href="/fr">nettoyez votre liste d’emails</InlineLink> avec les mêmes contrôles sur chaque
        ligne. Vous commencez avec 1 000 crédits gratuits, sans carte.
      </>
    ),
    api: (
      <>
        Pour vérifier des adresses dans votre propre application ou formulaire d’inscription, utilisez l’
        <InlineLink href="/email-verification-api">API de vérification d’email</InlineLink>. Elle exécute les mêmes
        contrôles et renvoie le résultat en JSON.
      </>
    ),
  },
  faqTitle: 'Vérifier une adresse mail : questions fréquentes',
  faqs: [
    {
      q: 'Qu’est-ce qu’un vérificateur d’email ?',
      a: 'Un vérificateur d’email indique si une adresse mail est valide. Il contrôle son format, son serveur de messagerie et la boîte mail elle-même. On l’appelle aussi testeur ou validateur d’email. Il fonctionne sans envoyer d’email à l’adresse.',
    },
    {
      q: 'Vérificateur, testeur et validateur d’email : est-ce la même chose ?',
      a: 'Oui. Vérificateur, testeur et validateur d’email sont trois noms pour le même type d’outil. Tous vérifient une adresse mail en contrôlant son format, son serveur de messagerie et la boîte mail. Ils diffèrent sur les domaines catch-all. Beaucoup s’arrêtent là avec « risqué ». Celui-ci renvoie valide ou invalide.',
    },
    {
      q: 'Comment fonctionne un vérificateur d’email ?',
      a: 'Il effectue quatre contrôles dans l’ordre. D’abord le format de l’adresse. Puis les enregistrements de serveur de messagerie du domaine. Ensuite, il demande au serveur de messagerie si la boîte existe. Sur les domaines catch-all, où le serveur dit oui à toutes les adresses, Giggal.ai analyse des signaux supplémentaires pour distinguer une vraie boîte d’une fausse.',
    },
    {
      q: 'Comment vérifier si une adresse mail est valide ?',
      a: 'Collez l’adresse dans le vérificateur en haut de cette page et lancez la vérification. Vous avez un résultat en quelques secondes : valide, invalide ou inconnu, avec la raison et les détails du serveur de messagerie en dessous.',
    },
    {
      q: 'Peut-on vérifier si une adresse mail existe sans envoyer d’email ?',
      a: 'Oui. Le vérificateur demande au serveur de messagerie du destinataire si la boîte existe et s’arrête avant tout envoi de message. Rien n’arrive dans la boîte de la personne.',
    },
    {
      q: 'Le vérificateur envoie-t-il un email à l’adresse ?',
      a: 'Non. La vérification communique uniquement avec le serveur de messagerie. Le titulaire de l’adresse ne reçoit rien et n’est pas informé que son adresse a été vérifiée.',
    },
    {
      q: 'Un vérificateur d’email est-il précis ?',
      a: 'Cela dépend du vérificateur. La plupart sont précis sur les domaines normaux et abandonnent sur les domaines catch-all, où ils renvoient « risqué » ou « inconnu ». Giggal.ai continue sur les domaines catch-all et renvoie valide ou invalide. Il mesure une précision de 98,5 % sur les listes professionnelles.',
    },
    {
      q: 'Que signifie « valide » sur un domaine catch-all ?',
      a: 'Que la boîte mail a été confirmée, et pas seulement que le domaine a accepté le destinataire. Une simple étiquette catch-all indique seulement que le serveur dit oui à tout. Ici, valide signifie que l’adresse a passé les contrôles supplémentaires qui séparent une vraie boîte d’une boîte qui rebondira.',
    },
    {
      q: 'Que signifie « inconnu » dans une vérification d’adresse mail ?',
      a: 'Le serveur de messagerie n’a pas donné de réponse claire à temps, souvent parce qu’il retarde volontairement les nouveaux expéditeurs (greylisting). Rien ne prouve que l’adresse est morte. Vérifiez-la de nouveau plus tard.',
    },
    {
      q: 'Combien d’adresses puis-je vérifier ici ?',
      a: 'Quelques-unes par heure, sans inscription et sans carte. Chaque vérification exécute tous les contrôles, c’est pourquoi le nombre est faible. Pour en vérifier plus, créez un compte.',
    },
    {
      q: 'Une adresse mail valide peut-elle quand même rebondir ?',
      a: 'Oui, mais rarement. Un résultat valide signifie que la boîte existait au moment de la vérification. Un email peut quand même rebondir si la boîte est pleine ou si le serveur de messagerie est en panne un moment. Il peut aussi rebondir si la personne quitte l’entreprise après la vérification, ou si le serveur bloque votre domaine d’envoi. Vérifiez les adresses peu de temps avant l’envoi.',
    },
    {
      q: 'Mes données restent-elles privées ?',
      a: 'Giggal.ai est exploité par TargetPulse Ltd et traite les données personnelles conformément au RGPD. La politique de confidentialité sur giggal.ai/fr/confidentialite explique quelles données sont collectées, comment elles sont utilisées et combien de temps elles sont conservées.',
    },
    {
      q: 'Puis-je vérifier une liste entière ici ?',
      a: 'Pas sur cette page. Créez un compte, importez la liste en fichier CSV ou Excel, et chaque adresse reçoit les mêmes contrôles. Vous commencez avec 1 000 crédits gratuits, sans carte.',
    },
  ],
  ctaHeadline: 'Vérifiez toute votre liste',
  related: [
    { href: '/fr/verifier-adresse-mail/comment-savoir-si-une-adresse-mail-est-valide', label: 'Comment savoir si une adresse mail est valide ? Quatre méthodes' },
    { href: '/fr/verification-catch-all', label: 'Vérification catch-all et adresses risquées' },
    { href: '/fr/tarifs', label: 'Tarifs et crédits' },
    { href: '/fr/verifier-adresse-mail-jetable', label: 'Vérifier une adresse mail jetable' },
    { href: '/fr/blog/qu-est-ce-qu-une-adresse-email-catch-all', label: 'Qu’est-ce qu’une adresse email catch-all ?' },
  ],
}
