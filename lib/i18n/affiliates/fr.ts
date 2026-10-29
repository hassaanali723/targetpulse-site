import type { AffiliatesContent } from '@/lib/i18n/affiliates/types'

// French copy of the affiliate page. Source: app/(en)/affiliates.
// Register "vous". No-break space before ":", "?", "!" and "%", inside « »,
// in 1 000 and 10 000, and in 50 $ (currency stays USD).

export const AFFILIATES_FR: AffiliatesContent = {
  meta: {
    title: 'Programme d’affiliation : 20 % récurrents | Giggal.ai',
    description:
      'Rejoignez le programme d’affiliation Giggal.ai : 20 % de commission récurrente sur chaque paiement de vos filleuls, attribution sur 3 mois et paiement mensuel.',
    ogTitle: 'Programme d’affiliation : 20 % de commission récurrente',
    ogDescription:
      'Gagnez 20 % de commission récurrente pour chaque client que vous recommandez à Giggal.ai. Sans limite de durée. Sans plafond.',
  },
  crumb: 'Programme d’affiliation',
  h1Lead: 'Gagnez 20 % de commission',
  h1Accent: 'chaque mois, sans limite de durée',
  intro: {
    before: 'Recommandez',
    after:
      'à votre audience et gagnez 20 % de commission sur chaque paiement de vos filleuls, tant qu’ils restent clients. Sans plafond, sans date de fin.',
  },
  joinCta: 'Rejoindre le programme d’affiliation',
  howCta: 'Voir comment ça fonctionne',
  stats: [
    { value: '20 %', label: 'Récurrent' },
    { value: '3 mois', label: 'Attribution' },
    { value: 'Chaque mois', label: 'Paiements' },
    { value: '50 $', label: 'Paiement minimum' },
  ],
  why: {
    eyebrow: 'Pourquoi nous rejoindre',
    h2: 'L’un des programmes les plus généreux parmi les outils d’email',
    sub: 'Un vrai revenu récurrent, pas une prime unique.',
    cards: [
      {
        title: '20 % récurrents',
        body: 'Touchez une commission sur chaque paiement de vos filleuls, mois après mois, année après année.',
      },
      {
        title: 'Gains sans plafond',
        body: 'Recommandez 10 clients ou 10 000. Vos gains n’ont pas de limite.',
      },
      {
        title: 'Attribution sur 3 mois',
        body: 'Le client vous est attribué s’il s’inscrit dans les 3 mois qui suivent le clic sur votre lien.',
      },
      {
        title: 'Paiements mensuels',
        body: 'Vous êtes payé chaque mois par PayPal ou Wise dès que vous atteignez le minimum de 50 $.',
      },
    ],
  },
  how: {
    eyebrow: 'Comment ça fonctionne',
    h2: 'De l’inscription au premier paiement en quelques jours, pas en quelques mois',
    steps: [
      {
        title: 'Inscrivez-vous en 30 secondes',
        body: 'Rejoignez le programme et recevez tout de suite votre lien d’affiliation unique. Pas d’entretien, pas de délai d’attente.',
      },
      {
        title: 'Partagez votre lien',
        body: 'Faites connaître Giggal.ai sur votre blog, dans votre newsletter, sur les réseaux sociaux, sur YouTube ou directement auprès de clients qui ont besoin de listes d’emails plus propres.',
      },
      {
        title: 'Soyez payé chaque mois',
        body: 'Gagnez 20 % de chaque paiement de vos filleuls. Le suivi est automatique et le versement a lieu chaque mois.',
      },
    ],
  },
  earn: {
    eyebrow: 'Votre potentiel',
    h2: 'Voici ce que vous pouvez gagner',
    sub: 'Calcul basé sur des clients abonnés au pack de 100 000 crédits, le plus choisi (76 $/mois). Les autres packs rapportent aussi 20 %.',
    colCustomers: 'Clients recommandés',
    colPlan: 'Pack',
    colEarnings: 'Vos gains par mois',
    perMonth: '/mois',
    note: 'Ces chiffres sont des exemples. Vos gains réels dépendent du pack choisi par vos filleuls.',
  },
  who: {
    eyebrow: 'Pour qui',
    h2: 'Conçu pour ceux qui tiennent à leur délivrabilité',
    sub: 'Si votre audience envoie des emails, c’est une audience pour Giggal.ai.',
    cards: [
      {
        title: 'Spécialistes de l’emailing',
        body: 'Recommandez l’outil auquel vous faites déjà confiance pour nettoyer les listes avant les campagnes.',
      },
      {
        title: 'Agences',
        body: 'Percevez un revenu récurrent sur chaque client que vous inscrivez.',
      },
      {
        title: 'Créateurs de formations',
        body: 'Intégrez Giggal.ai au programme de votre formation en cold email ou en génération de leads.',
      },
      {
        title: 'Communautés SaaS',
        body: 'Partagez Giggal.ai avec votre audience de marketeurs, de fondateurs et de spécialistes du growth.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Questions fréquentes',
    items: [
      {
        q: 'Quand et comment suis-je payé ?',
        a: 'Les paiements partent chaque mois par PayPal ou Wise (au choix), dès que votre solde en attente atteint 50 $. Aucune partie de vos gains n’est retenue. Dès qu’un filleul paie, la commission vous revient.',
      },
      {
        q: 'Combien de temps dure la commission ?',
        a: 'Aussi longtemps que votre filleul continue de payer. S’il reste client 3 ans, vous touchez 20 % de chaque paiement pendant 3 ans. C’est un vrai revenu récurrent.',
      },
      {
        q: 'Que se passe-t-il si mon filleul résilie ?',
        a: 'Vous ne touchez plus de commission sur ce client dès qu’il résilie. S’il se réabonne plus tard avec le même compte, la commission reprend.',
      },
      {
        q: 'Quelle est la durée de la fenêtre d’attribution ?',
        a: 'Le suivi dure 3 mois à partir du clic sur votre lien. Si la personne s’inscrit pendant cette période, le client vous est attribué.',
      },
      {
        q: 'Puis-je promouvoir Giggal.ai sur YouTube, sur des blogs et avec des publicités payantes ?',
        a: 'Oui pour YouTube, les blogs, les newsletters, les réseaux sociaux et Reddit. Les publicités payantes sur les mots-clés de notre marque (par exemple « Giggal.ai ») sont interdites. Tout le reste est autorisé.',
      },
      {
        q: 'Faut-il être client pour participer ?',
        a: 'Non, mais nous vous conseillons vivement d’essayer le produit d’abord (vous recevez 1 000 crédits gratuits). Vous pourrez ainsi le recommander en connaissance de cause.',
      },
      {
        q: 'Existe-t-il un seuil minimum de paiement ?',
        a: 'Oui, 50 $. La commission en attente est reportée d’un mois sur l’autre jusqu’à ce que vous atteigniez ce seuil. Elle est ensuite versée automatiquement.',
      },
    ],
    more: 'Vous avez encore des questions ?',
    talk: 'Contactez-nous',
  },
  final: {
    h2: 'Prêt à transformer vos recommandations en revenu récurrent ?',
    text: 'Inscrivez-vous en 30 secondes et commencez à gagner 20 % de commission sur chaque paiement de vos filleuls.',
    checks: ['Inscription gratuite', 'Sans validation préalable', 'Commissions à vie'],
  },
}
