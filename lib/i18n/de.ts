// German strings for the shared chrome and the two interactive components.
// Page copy lives in each page file under app/(de)/de; this file holds only
// what is reused across pages. Register: "Sie", as the German tool pages that
// rank use (experte.de, EmailListVerify). Technical terms stay as German
// deliverability practice keeps them: Catch-all, SMTP, MX, DNS, Bounce.

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  primary: { name: 'E-Mail prüfen', href: '/de/email-adresse-pruefen' },
  links: [
    { name: 'Catch-all', href: '/de/catch-all-verifizierung' },
    { name: 'Integrationen', href: '/de/integrationen' },
    { name: 'Preise', href: '/de/preise' },
    { name: 'Kontakt', href: '/de/kontakt' },
  ],
  login: 'Anmelden',
  signup: 'Kostenlos registrieren',
  menu: 'Menü öffnen',
  homeAria: 'Giggal.ai, Startseite',
}

export const footer = {
  blurb:
    'Schnelle SMTP-Verifizierung, damit Ihre Kampagnen echte Postfächer erreichen, auch auf Catch-all- und Accept-all-Domains, die andere Tools überspringen.',
  solutions: {
    heading: 'Lösungen',
    links: [
      { name: 'Catch-all-Verifizierung', href: '/de/catch-all-verifizierung' },
      { name: 'MCP-Server (Englisch)', href: '/mcp' },
    ],
  },
  resources: {
    heading: 'Ressourcen',
    links: [
      { name: 'Blog', href: '/de/blog' },
      { name: 'Verifizierer im Vergleich (Englisch)', href: '/alternatives' },
      { name: 'API-Dokumentation (Englisch)', href: '/public/docs' },
    ],
  },
  product: {
    heading: 'Produkt',
    links: [
      { name: 'E-Mail-Adresse kostenlos prüfen', href: '/de/email-adresse-pruefen' },
      { name: 'Gibt es diese E-Mail-Adresse?', href: '/de/email-adresse-pruefen/gibt-es-diese-email-adresse' },
      { name: 'Integrationen', href: '/de/integrationen' },
      { name: 'Preise', href: '/de/preise' },
      { name: 'Kostenlos registrieren', href: '/de/registrieren' },
    ],
  },
  company: {
    heading: 'Unternehmen',
    links: [
      { name: 'Kontakt', href: '/de/kontakt' },
      { name: 'Partnerprogramm (Englisch)', href: '/affiliates' },
    ],
  },
  legal: [
    { name: 'AGB', href: '/de/agb' },
    { name: 'Datenschutz', href: '/de/datenschutz' },
    { name: 'Rückerstattung', href: '/de/rueckerstattung' },
  ],
  legalHeading: 'Rechtliches',
  rights: 'Alle Rechte vorbehalten.',
  language: 'Sprache',
}

export const announcement = {
  text: 'Dedizierte Google- und Outlook-Postfächer von',
  brand: 'PureMail',
  tail: ', 2,90 $ pro Postfach und Monat.',
  dismiss: 'Hinweis schließen',
}

export const cta = {
  headline: 'Prüfen Sie eine ganze Liste und vergleichen Sie die Ergebnisse',
  offer: '1.000 Credits gratis, keine Kreditkarte nötig.',
  button: 'Jetzt kostenlos prüfen',
  trust: ['Kostenlos testen', 'Credits verfallen nicht', 'Erstattung für Unbekannt'],
}

export const consoleStrings = {
  header: 'Live-Test',
  live: 'Prüfung aktiv',
  actionLabel: 'Aktion',
  actionTitle: 'Handshake mit dem Empfänger',
  placeholder: 'E-Mail-Adresse zum Prüfen...',
  ariaInput: 'E-Mail-Adresse zum Prüfen',
  button: 'Jetzt prüfen',
  buttonRunning: 'Prüfung läuft',
  diagnostics: 'Status der Prüfungen',
  checks: {
    basic: 'Basisprüfungen',
    dns: 'Mailserver ermitteln',
    catchall: 'Catch-all-Prüfung',
    mailbox: 'Existenz des Postfachs',
  },
  idleTitle: 'Bereit zur Prüfung',
  idleText: 'Geben Sie eine geschäftliche oder private Adresse ein, um eine DNS- und SMTP-Prüfung zu starten.',
  spawning: 'PRÜFUNGEN WERDEN GESTARTET...',
  initLog: '[INIT] Sicheren Prüf-Socket öffnen...',
  limitTitle: 'Tageslimit erreicht',
  limitText: 'Die kostenlosen Prüfungen für heute sind aufgebraucht. Registrieren Sie sich für 1.000 Gratis-Credits, ohne Karte, und prüfen Sie die ganze Liste.',
  limitButton: '1.000 Gratis-Credits sichern',
  errorTitle: 'Fehler bei der Prüfung',
  errorFailed: 'Die Prüfung ist fehlgeschlagen. Bitte versuchen Sie es gleich noch einmal.',
  errorUnreachable: 'Der Prüfdienst antwortet nicht.',
  invalidSyntax: 'Das ist keine gültige E-Mail-Adresse.',
  isCatchAll: 'ist eine Catch-all-Domain',
  notCatchAll: 'ist keine Catch-all-Domain',
  catchAllText: 'Sie nimmt Post an jede Adresse an, daher kann eine normale SMTP-Prüfung nicht sagen, ob dieses Postfach existiert.',
  notCatchAllText: 'Hier ist eine normale Prüfung zuverlässig.',
  resultLabel: 'Ergebnis',
  verdictTitle: {
    deliverable: 'Gültig',
    undeliverable: 'Ungültig',
    risky: 'Riskant',
    unknown: 'Unbekannt',
    catchall: 'Catch-all',
    error: 'Fehler',
  },
  verdictLine: {
    deliverable: 'Dieses Postfach existiert.',
    undeliverable: 'Dieses Postfach existiert nicht.',
    risky: 'Der Server nimmt Post an, aber wir können dieses Postfach nicht sicher bestätigen.',
    unknown: 'Wir konnten dieses Postfach nicht bestätigen.',
    catchall: 'Wir konnten dieses Postfach nicht bestätigen.',
    error: '',
  },
}

export const pricing = {
  payg: 'Einmalig (Pay as you go)',
  subscription: 'Monatsabo',
  save: '10 % sparen',
  colVolume: 'Credits',
  colRate: 'Preis pro Credit',
  colSave: 'Ersparnis',
  colTotal: 'Gesamtpreis',
  credits: 'Credits',
  popular: 'Am beliebtesten',
  perCredit: '/ Credit',
  oneTime: 'einmalig',
  perMonth: '/Monat',
  saveBadge: '{pct} % gespart',
  buy: 'Kaufen',
  subscribe: 'Abonnieren',
  noDiscount: 'Kein Rabatt',
  mobVolume: 'Credits',
  mobRate: 'Preis',
  mobSave: 'Ersparnis',
  mobPrice: 'Gesamt',
  numberLocale: 'de-DE',
  currencySuffix: true,
  formula: '1 E-Mail-Prüfung',
  formulaNote: '(Catch-all-/Accept-all-Prüfung inklusive)',
  formulaCredit: '1 Credit',
  customTitle: 'Brauchen Sie ein individuelles Volumen?',
  customText: 'Für große Volumen bieten wir individuelle Pläne und dedizierte IP-Pools.',
  customButton: 'Sprechen Sie mit uns',
}

export const notFound = {
  kicker: '404',
  title: 'Diese Seite gibt es nicht',
  text: 'Die Adresse ist vielleicht falsch geschrieben oder die Seite wurde verschoben. Die kostenlose E-Mail-Prüfung und die Preise sind einen Klick entfernt.',
  primary: 'E-Mail-Adresse kostenlos prüfen',
  secondary: 'Zur Startseite',
}

export const legal = {
  updated: 'Zuletzt aktualisiert',
  notice: 'Dies ist eine unverbindliche Übersetzung. Bei Abweichungen gilt die',
  noticeLink: 'englische Fassung',
  noticeTail: ', die allein rechtlich bindend ist.',
  breadcrumbHome: 'Startseite',
}

/** German number formatting: 10.000 and 9,90 $ (currency stays USD). */
export function deNumber(n: number, decimals = 0): string {
  return n.toLocaleString('de-DE', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
export function deUsd(n: number, decimals = 2): string {
  return `${deNumber(n, decimals)} $`
}

/** 2026-09-13 -> "13. September 2026" */
export function formatDateDe(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  if (!y || !m || !d) return iso
  return `${d}. ${months[m - 1]} ${y}`
}
