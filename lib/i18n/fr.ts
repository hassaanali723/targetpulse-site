// French strings for the shared chrome and the two interactive components.
// One page set for every French-speaking country (plans/12 section 2.2):
// "adresse mail" as France types it, "adresse email" beside it, register
// "vous". French punctuation keeps a no-break space ( ) before ":", "?"
// and "!". Technical terms stay: catch-all, SMTP, MX, DNS, bounce (rebond).

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  primary: { name: 'Vérifier une adresse', href: '/fr/verifier-adresse-mail' },
  links: [
    { name: 'Catch-all', href: '/fr/verification-catch-all' },
    { name: 'Intégrations', href: '/fr/integrations' },
    { name: 'Tarifs', href: '/fr/tarifs' },
    { name: 'Contact', href: '/fr/contact' },
  ],
  login: 'Se connecter',
  signup: 'Inscription gratuite',
  menu: 'Ouvrir le menu',
  homeAria: 'Giggal.ai, page d’accueil',
}

export const footer = {
  blurb:
    'Vérification SMTP haute performance pour que vos campagnes atteignent de vraies boîtes, y compris sur les domaines catch-all et accept-all que les autres outils laissent de côté.',
  solutions: {
    heading: 'Solutions',
    links: [
      { name: 'Vérification catch-all', href: '/fr/verification-catch-all' },
      { name: 'Serveur MCP (en anglais)', href: '/mcp' },
    ],
  },
  resources: {
    heading: 'Ressources',
    links: [
      { name: 'Blog (en anglais)', href: '/blog' },
      { name: 'Comparatif des vérificateurs (en anglais)', href: '/alternatives' },
      { name: 'Documentation de l’API (en anglais)', href: '/public/docs' },
    ],
  },
  product: {
    heading: 'Produit',
    links: [
      { name: 'Vérifier une adresse mail gratuitement', href: '/fr/verifier-adresse-mail' },
      { name: 'Comment savoir si une adresse mail est valide ?', href: '/fr/verifier-adresse-mail/comment-savoir-si-une-adresse-mail-est-valide' },
      { name: 'Intégrations', href: '/fr/integrations' },
      { name: 'Tarifs', href: '/fr/tarifs' },
      { name: 'Inscription gratuite', href: '/fr/inscription' },
    ],
  },
  company: {
    heading: 'Entreprise',
    links: [
      { name: 'Contact', href: '/fr/contact' },
      { name: 'Programme d’affiliation (en anglais)', href: '/affiliates' },
    ],
  },
  legal: [
    { name: 'Conditions d’utilisation', href: '/fr/conditions' },
    { name: 'Confidentialité', href: '/fr/confidentialite' },
    { name: 'Remboursements', href: '/fr/remboursements' },
  ],
  legalHeading: 'Mentions',
  rights: 'Tous droits réservés.',
  language: 'Langue',
}

export const announcement = {
  text: 'Boîtes Google et Outlook dédiées avec',
  brand: 'PureMail',
  tail: ', 2,90 $ par boîte et par mois.',
  dismiss: 'Fermer l’annonce',
}

export const cta = {
  headline: 'Vérifiez une liste entière et comparez les résultats',
  offer: '1 000 crédits offerts, sans carte bancaire.',
  button: 'Commencer gratuitement',
  trust: ['Essai gratuit', 'Les crédits n’expirent pas', 'Les Inconnus sont remboursés'],
}

export const consoleStrings = {
  header: 'Test en temps réel',
  live: 'Sonde active',
  actionLabel: 'Action',
  actionTitle: 'Handshake avec le destinataire',
  placeholder: 'Saisissez une adresse email à vérifier...',
  ariaInput: 'Adresse email à vérifier',
  button: 'Vérifier',
  buttonRunning: 'Vérification',
  diagnostics: 'État des vérifications',
  checks: {
    basic: 'Vérifications de base',
    dns: 'Recherche des serveurs de messagerie',
    catchall: 'Vérification catch-all',
    mailbox: 'Existence de la boîte',
  },
  idleTitle: 'Prêt à vérifier',
  idleText: 'Saisissez une adresse professionnelle ou personnelle pour lancer une sonde DNS et SMTP en direct.',
  spawning: 'LANCEMENT DES VÉRIFICATIONS...',
  initLog: '[INIT] Ouverture du socket sécurisé de vérification...',
  limitTitle: 'Limite quotidienne atteinte',
  limitText: 'Vous avez utilisé les vérifications gratuites du jour. Inscrivez-vous pour recevoir 1 000 crédits offerts, sans carte, et vérifier toute votre liste.',
  limitButton: 'Recevoir 1 000 crédits offerts',
  errorTitle: 'Erreur de vérification',
  errorFailed: 'La vérification n’a pas abouti. Réessayez dans quelques secondes.',
  errorUnreachable: 'Le service de vérification ne répond pas.',
  invalidSyntax: 'Ce n’est pas une adresse email valide.',
  isCatchAll: 'est un domaine catch-all',
  notCatchAll: 'n’est pas un domaine catch-all',
  catchAllText: 'Il accepte le courrier pour n’importe quelle adresse, donc une vérification SMTP standard ne peut pas dire si cette boîte existe.',
  notCatchAllText: 'Ici, une vérification standard est fiable.',
  resultLabel: 'Résultat',
  verdictTitle: {
    deliverable: 'Valide',
    undeliverable: 'Invalide',
    risky: 'Risqué',
    unknown: 'Inconnu',
    catchall: 'Catch-all',
    error: 'Erreur',
  },
  verdictLine: {
    deliverable: 'Cette boîte existe.',
    undeliverable: 'Cette boîte n’existe pas.',
    risky: 'Le serveur accepte le courrier, mais nous ne pouvons pas confirmer entièrement cette boîte.',
    unknown: 'Nous n’avons pas pu confirmer cette boîte.',
    catchall: 'Nous n’avons pas pu confirmer cette boîte.',
    error: '',
  },
}

export const pricing = {
  payg: 'Paiement à l’usage (achat unique)',
  subscription: 'Abonnement mensuel',
  save: 'Économisez 10 %',
  colVolume: 'Crédits',
  colRate: 'Prix par crédit',
  colSave: 'Économie',
  colTotal: 'Prix total',
  credits: 'crédits',
  popular: 'Le plus choisi',
  perCredit: '/ crédit',
  oneTime: 'achat unique',
  perMonth: '/mois',
  saveBadge: 'Économisez {pct} %',
  buy: 'Acheter',
  subscribe: 'S’abonner',
  noDiscount: 'Sans remise',
  mobVolume: 'Crédits',
  mobRate: 'Prix',
  mobSave: 'Économie',
  mobPrice: 'Total',
  numberLocale: 'fr-FR',
  currencySuffix: true,
  formula: '1 vérification d’email',
  formulaNote: '(vérification catch-all/accept-all comprise)',
  formulaCredit: '1 crédit',
  customTitle: 'Besoin d’un volume sur mesure ?',
  customText: 'Nous proposons des offres personnalisées et des pools d’IP dédiés pour les gros volumes.',
  customButton: 'Contactez-nous',
}

export const notFound = {
  kicker: '404',
  title: 'Cette page n’existe pas',
  text: 'L’adresse est peut-être mal écrite ou la page a été déplacée. Le vérificateur d’email gratuit et les tarifs sont à un clic.',
  primary: 'Vérifier une adresse mail',
  secondary: 'Retour à l’accueil',
}

export const legal = {
  updated: 'Dernière mise à jour',
  notice: 'Ceci est une traduction de courtoisie. En cas de divergence, la',
  noticeLink: 'version anglaise',
  noticeTail: ' prévaut et est la seule juridiquement contraignante.',
  breadcrumbHome: 'Accueil',
}

/** French number formatting: 10 000 (narrow no-break space) and 9,90 $ (currency stays USD). */
export function frNumber(n: number, decimals = 0): string {
  return n.toLocaleString('fr-FR', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
export function frUsd(n: number, decimals = 2): string {
  return `${frNumber(n, decimals)} $`
}

/** 2026-09-13 -> "13 septembre 2026" */
export function formatDateFr(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  if (!y || !m || !d) return iso
  return `${d === 1 ? '1er' : d} ${months[m - 1]} ${y}`
}
