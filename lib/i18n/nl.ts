// Dutch strings for the shared chrome and the two interactive components.
// One page set for the Netherlands and Flanders (SEO-Plan/i18n-batch1 plan).
// Register "je/jij". Standard spelling "e-mail", "e-mailadres"; the searched
// forms "mailadres controleren" and "email checker" appear where the keyword
// plan assigns them. Technical terms stay: catch-all, SMTP, MX, DNS, bounce.
// Numbers 1.000 and 10.000, prices US$ 9,90 (symbol first, currency stays USD).

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  // Same links, in the same order, as the English navbar (components/Navbar.tsx).
  links: [
    { name: 'Catch-all-verificatie', href: '/nl/catch-all-verificatie' },
    { name: 'Integraties', href: '/nl/integraties' },
    { name: 'MCP', href: '/nl/mcp' },
    { name: 'Prijzen', href: '/nl/prijzen' },
    { name: 'Verdien met ons', href: '/nl/partnerprogramma' },
  ],
  login: 'Inloggen',
  signup: 'Gratis registreren',
  menu: 'Menu openen',
  homeAria: 'Giggal.ai, startpagina',
}

export const footer = {
  blurb:
    'E-mailverificatie die controleert of elke mailbox bestaat, zodat je campagnes echte inboxen bereiken. Ook op de catch-all- en accept-all-domeinen die andere tools overslaan.',
  solutions: {
    heading: 'Oplossingen',
    links: [
      { name: 'Catch-all-verificatie', href: '/nl/catch-all-verificatie' },
      { name: 'MCP-server', href: '/nl/mcp' },
    ],
  },
  resources: {
    heading: 'Bronnen',
    links: [
      { name: 'Blog', href: '/nl/blog' },
      { name: 'Woordenlijst', href: '/nl/woordenlijst' },
      { name: 'Verificatietools vergeleken (in het Engels)', href: '/alternatives' },
      { name: 'ZeroBounce-alternatief', href: '/nl/zerobounce-alternatief' },
      { name: 'NeverBounce-alternatief', href: '/nl/neverbounce-alternatief' },
      { name: 'Snov.io-alternatief', href: '/nl/snovio-alternatief' },
      { name: 'API-documentatie', href: '/nl/api-documentatie' },
    ],
  },
  freeTools: {
    heading: 'Gratis tools',
    links: [
      { name: 'Mailadres controleren', href: '/nl/mailadres-controleren' },
      { name: 'Wegwerp e-mailadres controleren', href: '/nl/wegwerp-e-mailadres-controleren' },
      { name: 'Diensten voor tijdelijke e-mailadressen', href: '/nl/tijdelijk-e-mailadres-diensten' },
      { name: 'Gratis e-mailproviders', href: '/nl/gratis-email-providers' },
      { name: 'E-mailextractor', href: '/nl/email-extractor' },
      { name: 'DKIM-generator', href: '/nl/dkim-generator' },
      { name: 'DMARC-generator', href: '/nl/dmarc-generator' },
      { name: 'MX-records opzoeken', href: '/nl/mx-lookup' },
      { name: 'SPF-checker', href: '/nl/spf-record' },
      { name: 'Gmail-adressen met + (in het Engels)', href: '/gmail-plus-addressing' },
      { name: 'Bouncepercentage berekenen', href: '/nl/bouncepercentage-berekenen' },
      { name: 'E-mailadressen combineren (in het Engels)', href: '/email-permutator' },
      { name: 'BIMI-generator', href: '/nl/bimi-generator' },
      { name: 'Spamwoorden controleren (in het Engels)', href: '/spam-word-checker' },
      { name: 'E-mailhandtekening maken', href: '/nl/email-handtekening-generator' },
    ],
  },
  product: {
    heading: 'Product',
    // Same order as the English footer: the paid product only.
    links: [
      { name: 'E-mailverificatie', href: '/nl' },
      { name: 'Bulk e-mailverificatie', href: '/nl/bulk-e-mailverificatie' },
      { name: 'E-maillijst opschonen (in het Engels)', href: '/email-list-cleaning' },
      { name: 'Integraties', href: '/nl/integraties' },
      { name: 'API voor e-mailverificatie (in het Engels)', href: '/email-verification-api' },
      { name: 'Prijzen', href: '/nl/prijzen' },
    ],
  },
  company: {
    heading: 'Bedrijf',
    links: [
      { name: 'Contact', href: '/nl/contact' },
      { name: 'Partnerprogramma', href: '/nl/partnerprogramma' },
    ],
  },
  legal: [
    { name: 'Voorwaarden', href: '/nl/voorwaarden' },
    { name: 'Privacy', href: '/nl/privacy' },
    { name: 'Terugbetalingen', href: '/nl/terugbetalingen' },
  ],
  legalHeading: 'Juridisch',
  rights: 'Alle rechten voorbehouden.',
  operatedBy: 'Giggal.ai wordt beheerd door TargetPulse Ltd, Londen, Verenigd Koninkrijk.',
  abuseReports: 'Misbruik melden:',
  language: 'Taal',
}

export const announcement = {
  text: 'Eigen Google- en Outlook-mailboxen met',
  brand: 'PureMail',
  tail: ', US$ 2,90 per mailbox per maand.',
  dismiss: 'Melding sluiten',
}

export const cta = {
  headline: 'Controleer een hele lijst en vergelijk de resultaten',
  offer: '1.000 gratis credits, zonder creditcard.',
  button: 'Gratis beginnen',
  trust: ['Gratis proberen', 'Credits verlopen niet', 'Credits terug bij onbekende resultaten'],
}

export const consoleStrings = {
  header: 'Test in realtime',
  live: 'Live test',
  actionLabel: 'Actie',
  actionTitle: 'Controle van de mailbox',
  placeholder: 'Voer een e-mailadres in om te controleren...',
  ariaInput: 'E-mailadres om te controleren',
  button: 'Controleren',
  buttonRunning: 'Bezig met controleren',
  diagnostics: 'Status van de controles',
  checks: {
    basic: 'Basiscontroles',
    dns: 'Mailservers opzoeken',
    catchall: 'Catch-all-controle',
    mailbox: 'Controle van de mailbox',
  },
  idleTitle: 'Klaar om te controleren',
  idleText: 'Voer een zakelijk of privé e-mailadres in om te zien of de mailbox bestaat.',
  spawning: 'CONTROLES WORDEN GESTART...',
  initLog: '[INIT] Beveiligde verbinding voor de controle wordt geopend...',
  limitTitle: 'Gastlimiet bereikt',
  limitText: 'Je hebt de 5 gratis controles van dit uur gebruikt. Registreer je voor 1.000 gratis credits, zonder creditcard, en controleer je hele lijst.',
  limitButton: 'Ontvang 1.000 gratis credits',
  errorTitle: 'Fout bij de controle',
  errorFailed: 'De controle is niet gelukt. Probeer het over een paar seconden opnieuw.',
  errorUnreachable: 'De verificatiedienst reageert niet.',
  invalidSyntax: 'Dit is geen geldig e-mailadres.',
  isCatchAll: 'is een catch-all-domein',
  notCatchAll: 'is geen catch-all-domein',
  catchAllText: 'Het domein accepteert mail voor elk adres. Een basiscontrole kan dus niet zeggen of deze mailbox bestaat.',
  notCatchAllText: 'Hier is een standaardcontrole betrouwbaar.',
  resultLabel: 'Resultaat',
  verdictTitle: {
    deliverable: 'Geldig',
    undeliverable: 'Ongeldig',
    risky: 'Riskant',
    unknown: 'Onbekend',
    catchall: 'Catch-all',
    error: 'Fout',
  },
  verdictLine: {
    deliverable: 'Deze mailbox bestaat.',
    undeliverable: 'Deze mailbox bestaat niet.',
    risky: 'De server accepteert mail, maar we kunnen deze mailbox niet volledig bevestigen.',
    unknown: 'We konden deze mailbox niet bevestigen.',
    catchall: 'We konden deze mailbox niet bevestigen.',
    error: '',
  },
}

export const pricing = {
  payg: 'Betalen per gebruik (eenmalige aankoop)',
  subscription: 'Maandabonnement',
  save: 'Bespaar 10%',
  colVolume: 'Credits',
  colRate: 'Prijs per credit',
  colSave: 'Besparing',
  colTotal: 'Totaalprijs',
  credits: 'credits',
  popular: 'Meest gekozen',
  perCredit: '/ credit',
  oneTime: 'eenmalig',
  perMonth: '/maand',
  saveBadge: 'Bespaar {pct}%',
  buy: 'Kopen',
  subscribe: 'Abonneren',
  noDiscount: 'Geen korting',
  mobVolume: 'Credits',
  mobRate: 'Prijs',
  mobSave: 'Besparing',
  mobPrice: 'Totaal',
  numberLocale: 'nl-NL',
  currencySuffix: false,
  currencyPrefix: 'US$ ',
  formula: '1 e-mailverificatie',
  formulaNote: '(inclusief catch-all/accept-all-verificatie)',
  formulaCredit: '1 credit',
  customTitle: 'Een volume op maat nodig?',
  customText: 'Voor grote volumes bieden we plannen op maat en eigen IP-pools.',
  customButton: 'Neem contact op',
}

export const notFound = {
  kicker: '404',
  title: 'Deze pagina bestaat niet',
  text: 'Misschien is het adres verkeerd getypt of is de pagina verplaatst. De gratis email checker en de prijzen zijn één klik verwijderd.',
  primary: 'Mailadres controleren',
  secondary: 'Terug naar de startpagina',
}

export const legal = {
  updated: 'Laatst bijgewerkt',
  notice: 'Dit is een vertaling voor het gemak. Bij verschillen geldt de',
  noticeLink: 'Engelse versie',
  noticeTail: ', die als enige juridisch bindend is.',
  breadcrumbHome: 'Home',
}

/** Dutch number formatting: 10.000 and US$ 9,90 (currency stays USD). */
export function nlNumber(n: number, decimals = 0): string {
  return n.toLocaleString('nl-NL', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
export function nlUsd(n: number, decimals = 2): string {
  return `US$ ${nlNumber(n, decimals)}`
}

/** 2026-10-21 -> "21 oktober 2026" */
export function formatDateNl(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december']
  if (!y || !m || !d) return iso
  return `${d} ${months[m - 1]} ${y}`
}
