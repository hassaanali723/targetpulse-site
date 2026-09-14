// Italian strings for the shared chrome and the two interactive components.
// Page copy lives in each page file under app/(it)/it; this file holds only
// what is reused across pages. Register: "tu", as the Italian tool pages that
// rank use. Technical terms stay as Italian deliverability practice keeps them:
// catch-all, SMTP, MX, DNS, hard bounce, soft bounce.

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  primary: { name: 'Verifica email', href: '/it/verifica-email' },
  links: [
    { name: 'Catch-all', href: '/it/verifica-catch-all' },
    { name: 'Integrazioni', href: '/it/integrazioni' },
    { name: 'Prezzi', href: '/it/prezzi' },
    { name: 'Blog', href: '/it/blog' },
    { name: 'Contatti', href: '/it/contatti' },
  ],
  login: 'Accedi',
  signup: 'Registrati gratis',
  menu: 'Apri il menu',
  homeAria: 'Giggal.ai, pagina iniziale',
}

export const footer = {
  blurb:
    'Verifica SMTP ad alte prestazioni che fa arrivare le tue campagne in caselle reali, compresi i domini catch-all e accept-all che gli altri strumenti saltano.',
  solutions: {
    heading: 'Soluzioni',
    links: [
      { name: 'Verifica catch-all', href: '/it/verifica-catch-all' },
      { name: 'Verifica dietro SEG', href: '/it/verifica-seg' },
      { name: 'Server MCP (in inglese)', href: '/mcp' },
    ],
  },
  resources: {
    heading: 'Risorse',
    links: [
      { name: 'Blog', href: '/it/blog' },
      { name: 'Confronto verificatori (in inglese)', href: '/alternatives' },
      { name: 'Documentazione API (in inglese)', href: '/public/docs' },
    ],
  },
  product: {
    heading: 'Prodotto',
    links: [
      { name: 'Verifica email gratis', href: '/it/verifica-email' },
      { name: 'Email esistente', href: '/it/verifica-email/email-esistente' },
      { name: 'Integrazioni', href: '/it/integrazioni' },
      { name: 'Prezzi', href: '/it/prezzi' },
      { name: 'Registrati gratis', href: '/it/registrati' },
    ],
  },
  company: {
    heading: 'Azienda',
    links: [
      { name: 'Contatti', href: '/it/contatti' },
      { name: 'Programma affiliati (in inglese)', href: '/affiliates' },
    ],
  },
  legal: [
    { name: 'Termini di servizio', href: '/it/termini' },
    { name: 'Privacy', href: '/it/privacy' },
    { name: 'Rimborsi', href: '/it/rimborsi' },
  ],
  rights: 'Tutti i diritti riservati.',
  language: 'Lingua',
}

export const announcement = {
  text: 'Caselle Google e Outlook dedicate da',
  brand: 'PureMail',
  tail: ', 2,90 $ a casella al mese.',
  dismiss: 'Chiudi avviso',
}

export const cta = {
  headline: 'Verifica una lista intera e confronta i risultati',
  offer: '1.000 crediti gratis, nessuna carta richiesta.',
  button: 'Inizia a verificare gratis',
  trust: ['Prova gratuita', 'I crediti non scadono', 'Rimborso sugli Sconosciuti'],
}

export const consoleStrings = {
  header: 'Test in tempo reale',
  live: 'Sonda attiva',
  actionLabel: 'Azione',
  actionTitle: 'Handshake con il destinatario',
  placeholder: 'Indirizzo email da verificare...',
  ariaInput: 'Indirizzo email da verificare',
  button: 'Avvia la verifica',
  buttonRunning: 'Verifica in corso',
  diagnostics: 'Stato dei controlli',
  checks: {
    basic: 'Controlli di base',
    dns: 'Ricerca dei server di posta',
    catchall: 'Verifica catch-all',
    mailbox: 'Esistenza della casella',
  },
  idleTitle: 'Pronto per la verifica',
  idleText: 'Inserisci un indirizzo aziendale o personale per avviare una sonda DNS e SMTP dal vivo.',
  spawning: 'AVVIO DEI CONTROLLI...',
  initLog: '[INIT] Apertura del socket di verifica sicuro...',
  limitTitle: 'Limite giornaliero raggiunto',
  limitText: 'Hai usato i controlli gratuiti di oggi. Registrati per 1.000 crediti gratis, senza carta, e verifica tutta la lista.',
  limitButton: 'Ottieni 1.000 crediti gratis',
  errorTitle: 'Errore di verifica',
  errorFailed: 'La verifica non è riuscita. Riprova tra poco.',
  errorUnreachable: 'Il servizio di verifica non risponde.',
  invalidSyntax: 'Questo non è un indirizzo email valido.',
  isCatchAll: 'è un dominio catch-all',
  notCatchAll: 'non è un dominio catch-all',
  catchAllText: 'Accetta posta per qualsiasi indirizzo, quindi un controllo SMTP standard non può dire se questa casella esiste.',
  notCatchAllText: 'Qui un controllo standard è affidabile.',
  resultLabel: 'Risultato',
  verdictTitle: {
    deliverable: 'Valida',
    undeliverable: 'Non valida',
    risky: 'A rischio',
    unknown: 'Sconosciuta',
    catchall: 'Catch-all',
    error: 'Errore',
  },
  verdictLine: {
    deliverable: 'Questa casella esiste.',
    undeliverable: 'Questa casella non esiste.',
    risky: 'Il server accetta la posta, ma non possiamo confermare del tutto questa casella.',
    unknown: 'Non siamo riusciti a confermare questa casella.',
    catchall: 'Non siamo riusciti a confermare questa casella.',
    error: '',
  },
}

export const pricing = {
  payg: 'A consumo (una tantum)',
  subscription: 'Abbonamento mensile',
  save: 'Risparmia il 10%',
  colVolume: 'Crediti',
  colRate: 'Prezzo per credito',
  colSave: 'Risparmio',
  colTotal: 'Prezzo totale',
  credits: 'crediti',
  popular: 'Più scelto',
  perCredit: '/ credito',
  oneTime: 'una tantum',
  perMonth: '/mese',
  saveBadge: 'Risparmi il {pct}%',
  buy: 'Acquista',
  subscribe: 'Abbonati',
  noDiscount: 'Nessuno sconto',
  mobVolume: 'Crediti',
  mobRate: 'Prezzo',
  mobSave: 'Risparmio',
  mobPrice: 'Totale',
  numberLocale: 'it-IT',
  currencySuffix: true,
  formula: '1 verifica email',
  formulaNote: '(verifica catch-all/accept-all e superamento SEG inclusi)',
  formulaCredit: '1 credito',
  customTitle: 'Ti serve un volume su misura?',
  customText: 'Offriamo piani personalizzati e pool di IP dedicati per chi verifica grandi volumi.',
  customButton: 'Parla con noi',
}

export const notFound = {
  kicker: '404',
  title: 'Questa pagina non esiste',
  text: "L'indirizzo potrebbe essere sbagliato o la pagina potrebbe essere stata spostata. La verifica email gratuita e i prezzi sono a un clic.",
  primary: 'Verifica email gratis',
  secondary: 'Torna alla pagina iniziale',
}

/** Italian number formatting: 10.000 and 9,90 $ (currency stays USD). */
export function itNumber(n: number, decimals = 0): string {
  return n.toLocaleString('it-IT', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
export function itUsd(n: number, decimals = 2): string {
  return `${itNumber(n, decimals)} $`
}

/** 2026-09-13 -> "13 settembre 2026" */
export function formatDateIt(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre']
  if (!y || !m || !d) return iso
  return `${d} ${months[m - 1]} ${y}`
}
