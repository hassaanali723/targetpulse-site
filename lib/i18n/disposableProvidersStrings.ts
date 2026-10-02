// All text for the disposable email providers directory, in six languages.
// The page itself is components/disposable/ProvidersPage.tsx; the URLs live in
// CLUSTERS.disposableProviders (lib/i18n/clusters.ts).
//
// Inline markup in gmailParas and blockItems: **bold** and [label](/english-path).
// Link paths are always the English path; the page rewrites each one to the
// same page in the reader's language when it exists (localizeHref), and marks
// it hreflang="en" when it does not.
//
// Terms follow the data-backed glossary slugs: it "email temporanea" (with
// "usa e getta" as the synonym), de "Wegwerf-E-Mail", es "correo desechable",
// pt-br "e-mail descartável", fr "adresse mail jetable". Register: it "tu",
// de "Sie", es "tú", pt-br "você", fr "vous". French puts a no-break space
// before ? and : and inside 100 000.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'
import type { ProviderCategory, ProviderName } from '@/lib/data/disposableProviders'

const NB = ' '

export interface ProvidersStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  ogAlt: string
  crumb: string
  h1: string
  h1Accent: string
  heroIntro: string
  ctaCheck: string
  ctaBlock: string
  kindsTitle: string
  kindsIntro: string
  categories: Record<ProviderCategory, { label: string; badge: string; desc: string }>
  listTitle: string
  listIntro: string
  blurbs: Record<ProviderName, string>
  moreTitle: string
  moreIntro: (n: number) => string
  staleNote: string
  gmailTitle: string
  gmailParas: string[]
  blockTitle: string
  blockIntro: string
  blockItems: string[]
  faqTitle: string
  faqs: FaqItem[]
  ctaBand: string
  related: { href: string; label: string; desc: string }[]
  itemListName: string
  itemListDesc: string
  /** Appended to a related-link label whose target exists only in English. */
  enSuffix: string
}

const en: ProvidersStrings = {
  metaTitle: 'Disposable Email Providers and Domains List | Giggal.ai',
  ogTitle: 'Disposable Email Providers and Domains List',
  description:
    'A list of the major disposable and temporary email providers and the domains they use, plus a free check against 100,000+ disposable domains.',
  ogAlt: 'Giggal.ai disposable email providers and domains',
  crumb: 'Disposable Email Providers',
  h1: 'Disposable email providers',
  h1Accent: 'and the domains they use',
  heroIntro:
    'A reference list of the services that create temporary and throwaway inboxes, grouped by how they work. The full list of disposable domains runs past 100,000 and changes every day.',
  ctaCheck: 'Check an address',
  ctaBlock: 'Block them at signup',
  kindsTitle: 'The four kinds of disposable email service',
  kindsIntro:
    'Not every throwaway address works the same way. Knowing the type tells you what happens to a message you send there.',
  categories: {
    timed: { label: 'Timed inbox', badge: 'Timed inbox', desc: 'The inbox or its messages are deleted after a set time.' },
    public: { label: 'Public inbox', badge: 'Public inbox', desc: 'Anyone who knows the address can read it. No password.' },
    alias: { label: 'Alias or forwarding', badge: 'Alias / forwarding', desc: 'Creates an alias that forwards to a real inbox, then can be turned off.' },
    api: { label: 'API or developer', badge: 'API / developer', desc: 'Built for scripts and testing, with an API to read messages.' },
  },
  listTitle: 'List of disposable email providers',
  listIntro:
    'The best-known services, with the domains each one sends from. Many rotate through more domains than the ones shown here.',
  blurbs: {
    'Temp-Mail': 'Gives a random temporary inbox with no signup.',
    'Mailinator': 'Public inboxes with no password. Anyone can read any address.',
    '10MinuteMail': 'Gives an address that expires ten minutes after it is created.',
    'Guerrilla Mail': 'Deletes each message one hour after it arrives. Uses several domains.',
    'YOPmail': 'Public inboxes with no password. Messages are kept for a few days.',
    'Maildrop': 'Public inbox for one-time signups. No account needed.',
    'Mohmal': 'Temporary inbox service with no signup.',
    'EmailOnDeck': 'Temporary inbox service with no account needed.',
    'Dropmail': 'Temporary mail with an API. Rotates through many domains.',
    'ThrowawayMail': 'Temporary inbox for one-time use.',
    'TrashMail': 'Forwarding address that stops after a set time or number of messages.',
    'Temp Mail Plus': 'Temporary mail with several domains to choose from.',
    'Tempmailo': 'Temporary inbox for one-time use.',
    'Tempail': 'Disposable inbox with no signup.',
    'Mint Email': 'Disposable inbox for short-term use.',
    'Mailnesia': 'Public disposable inbox with no password.',
    'MailCatch': 'Public temporary inbox, no signup.',
    'Spamgourmet': 'Forwarding addresses that stop after a set number of messages.',
    'Dispostable': 'Public disposable inbox for quick signups.',
    'Fake Mail Generator': 'Generates throwaway addresses on several domains.',
    'GetAirMail': 'Temporary inbox with no signup.',
    'Inbox Kitten': 'Open-source public disposable inbox.',
    'Burner Mail': 'Creates a separate alias for each site that forwards to your real inbox.',
    'addy.io': 'Alias forwarding service, formerly called AnonAddy.',
    '33Mail': 'Forwarding aliases on a personal subdomain.',
    'Moakt': 'Temporary inbox with no signup.',
    'Minute Inbox': 'Temporary inbox for short-term use.',
    'Harakirimail': 'Public disposable inbox.',
    'Mailsac': 'Disposable inboxes with an API, used for testing.',
    'Email Fake': 'Generates a temporary address on many domains.',
    'Tmailor': 'Temporary inbox with no signup.',
    'Mail.tm': 'Temporary mail with a free public API.',
    'DiscardMail': 'Public disposable inbox, no registration.',
    'Spambog': 'Public temporary inbox with several domains.',
    'Fakeinbox': 'Temporary inbox for one-time use.',
  },
  moreTitle: 'More disposable email domains',
  moreIntro: (n) =>
    `${n} more disposable and temporary domains, beyond the ones in the provider cards above. Many belong to the same services, which register extra domains to get past blocklists. This is a small part of the full disposable email domains list. The verification service checks addresses against more than 100,000 domains and adds new ones every six hours.`,
  staleNote: 'A static list goes stale fast. Check an address against the live list instead.',
  gmailTitle: 'Is Gmail, Outlook or Hotmail a disposable email domain?',
  gmailParas: [
    'No. Gmail, Outlook, Hotmail, Yahoo and iCloud are permanent mailbox providers. People keep these accounts for years, so they are not on any disposable list, and you should not block them.',
    'A Gmail or Outlook address can still be wrong. The mailbox may not exist, or the address may be a typo. That is a separate check: whether the mailbox is real, not whether the domain is disposable. The [free email checker](/email-checker) answers that one.',
  ],
  blockTitle: 'How to block disposable email addresses',
  blockIntro:
    'You cannot keep a list of every disposable domain by hand. There are too many, and they change daily. The reliable way is to check each address when it is entered and act on the result.',
  blockItems: [
    '**At signup:** check the address with the [email validation API](/email-validation-api) and ask for another address when it is disposable.',
    '**On a list you already have:** run it through [email list cleaning](/email-list-cleaning) to remove disposable, invalid and role addresses in one pass.',
    '**One address at a time:** use the [disposable email checker](/disposable-email-checker).',
  ],
  faqTitle: 'Questions about disposable email providers',
  faqs: [
    {
      q: 'What is a disposable email provider?',
      a: 'A disposable email provider is a service that creates a temporary inbox in seconds, with no password and no signup. People use one to get past a form or a gated download without giving a real address. Temp-Mail, Mailinator and 10MinuteMail are common examples.',
    },
    {
      q: 'How many disposable email domains are there?',
      a: 'Far more than the list on this page. A single provider can rotate through hundreds of domains, and new ones appear every day. The Giggal verification service checks addresses against a list of more than 100,000 disposable domains that is rebuilt every six hours.',
    },
    {
      q: 'Is Gmail, Outlook or Hotmail a disposable email domain?',
      a: 'No. Gmail, Outlook, Hotmail, Yahoo and iCloud are permanent mailbox providers, not disposable services. They are not on any disposable list. An address on one of these domains can still be invalid if the mailbox does not exist, which is a separate check.',
    },
    {
      q: 'How do I block disposable email domains?',
      a: 'Check each address at signup. If the domain is disposable, ask the person for a different address before the account is created. You can automate this on your forms with the email validation API, which answers in real time.',
    },
    {
      q: 'Can I download the full disposable domains list?',
      a: 'This page shows the well-known domains. The full list is held by the verification service and updated continuously, so the reliable way to use it is to check addresses through the API rather than copy a static file that goes stale.',
    },
    {
      q: 'What is the difference between a disposable provider and an alias service?',
      a: 'A disposable provider gives you a throwaway inbox that is meant to be abandoned. An alias service like addy.io or 33Mail forwards mail to your real inbox and lets you turn the alias off later. Some alias domains are on disposable lists, because the person can cut off your mail at any time. Others are not, because they forward to a real inbox that someone reads.',
    },
  ],
  ctaBand: 'Block disposable emails before they reach your list',
  related: [
    { href: '/disposable-email-checker', label: 'Disposable email checker', desc: 'Check if one address is disposable.' },
    { href: '/email-validation-api', label: 'Email validation API', desc: 'Block disposable signups in real time.' },
    { href: '/email-checker', label: 'Free email checker', desc: 'Check if a mailbox exists.' },
    { href: '/email-list-cleaning', label: 'Email list cleaning', desc: 'Clean a whole list at once.' },
  ],
  itemListName: 'Disposable email providers',
  itemListDesc: 'Major disposable and temporary email providers and the domains they use.',
  enSuffix: '',
}

const it: ProvidersStrings = {
  metaTitle: 'Servizi di Email Temporanea e Lista dei Domini | Giggal.ai',
  ogTitle: 'Servizi di email temporanea e lista dei domini',
  description:
    'Elenco dei principali servizi di email temporanea e usa e getta e dei domini che usano, con un controllo gratuito su oltre 100.000 domini.',
  ogLocale: 'it_IT',
  ogAlt: 'Giggal.ai servizi di email temporanea e domini',
  crumb: 'Servizi di email temporanea',
  h1: 'Servizi di email temporanea',
  h1Accent: 'e i domini che usano',
  heroIntro:
    "Un elenco di riferimento dei servizi che creano caselle temporanee e usa e getta, divisi per come funzionano. L'elenco completo dei domini usa e getta supera i 100.000 e cambia ogni giorno.",
  ctaCheck: 'Controlla un indirizzo',
  ctaBlock: 'Bloccali alla registrazione',
  kindsTitle: 'I quattro tipi di servizio di email temporanea',
  kindsIntro:
    'Non tutti gli indirizzi usa e getta funzionano allo stesso modo. Il tipo ti dice cosa succede a un messaggio che invii lì.',
  categories: {
    timed: { label: 'Casella a tempo', badge: 'Casella a tempo', desc: 'La casella o i suoi messaggi vengono cancellati dopo un tempo fissato.' },
    public: { label: 'Casella pubblica', badge: 'Casella pubblica', desc: "Chiunque conosca l'indirizzo può leggerla. Nessuna password." },
    alias: { label: 'Alias o inoltro', badge: 'Alias / inoltro', desc: 'Crea un alias che inoltra a una casella reale e che si può disattivare.' },
    api: { label: 'API o sviluppatori', badge: 'API / sviluppatori', desc: "Pensato per script e test, con un'API per leggere i messaggi." },
  },
  listTitle: 'Lista dei servizi di email temporanea',
  listIntro:
    'I servizi più noti, con i domini da cui invia ognuno. Molti usano a rotazione più domini di quelli indicati qui.',
  blurbs: {
    'Temp-Mail': 'Fornisce una casella temporanea casuale senza registrazione.',
    'Mailinator': 'Caselle pubbliche senza password. Chiunque può leggere qualsiasi indirizzo.',
    '10MinuteMail': 'Fornisce un indirizzo che scade dieci minuti dopo la creazione.',
    'Guerrilla Mail': "Cancella ogni messaggio un'ora dopo l'arrivo. Usa diversi domini.",
    'YOPmail': 'Caselle pubbliche senza password. I messaggi restano per alcuni giorni.',
    'Maildrop': 'Casella pubblica per registrazioni una tantum. Nessun account richiesto.',
    'Mohmal': 'Servizio di casella temporanea senza registrazione.',
    'EmailOnDeck': 'Servizio di casella temporanea senza bisogno di un account.',
    'Dropmail': "Email temporanea con un'API. Usa a rotazione molti domini.",
    'ThrowawayMail': 'Casella temporanea per un uso singolo.',
    'TrashMail': 'Indirizzo di inoltro che si ferma dopo un tempo o un numero di messaggi fissato.',
    'Temp Mail Plus': 'Email temporanea con diversi domini tra cui scegliere.',
    'Tempmailo': 'Casella temporanea per un uso singolo.',
    'Tempail': 'Casella usa e getta senza registrazione.',
    'Mint Email': 'Casella usa e getta per un uso breve.',
    'Mailnesia': 'Casella usa e getta pubblica senza password.',
    'MailCatch': 'Casella temporanea pubblica, senza registrazione.',
    'Spamgourmet': 'Indirizzi di inoltro che si fermano dopo un numero fissato di messaggi.',
    'Dispostable': 'Casella usa e getta pubblica per registrazioni rapide.',
    'Fake Mail Generator': 'Genera indirizzi usa e getta su diversi domini.',
    'GetAirMail': 'Casella temporanea senza registrazione.',
    'Inbox Kitten': 'Casella usa e getta pubblica e open source.',
    'Burner Mail': 'Crea un alias diverso per ogni sito, che inoltra alla tua casella reale.',
    'addy.io': 'Servizio di alias con inoltro, prima chiamato AnonAddy.',
    '33Mail': 'Alias di inoltro su un sottodominio personale.',
    'Moakt': 'Casella temporanea senza registrazione.',
    'Minute Inbox': 'Casella temporanea per un uso breve.',
    'Harakirimail': 'Casella usa e getta pubblica.',
    'Mailsac': "Caselle usa e getta con un'API, usate per i test.",
    'Email Fake': 'Genera un indirizzo temporaneo su molti domini.',
    'Tmailor': 'Casella temporanea senza registrazione.',
    'Mail.tm': "Email temporanea con un'API pubblica gratuita.",
    'DiscardMail': 'Casella usa e getta pubblica, senza registrazione.',
    'Spambog': 'Casella temporanea pubblica con diversi domini.',
    'Fakeinbox': 'Casella temporanea per un uso singolo.',
  },
  moreTitle: 'Altri domini di email usa e getta',
  moreIntro: (n) =>
    `Altri ${n} domini usa e getta e temporanei, oltre a quelli nelle schede dei servizi qui sopra. Molti appartengono agli stessi servizi, che registrano domini in più per aggirare le blocklist. È solo una piccola parte della lista completa dei domini usa e getta. Il servizio di verifica controlla gli indirizzi su oltre 100.000 domini e ne aggiunge di nuovi ogni sei ore.`,
  staleNote: 'Una lista statica diventa vecchia in fretta. Controlla invece un indirizzo sulla lista aggiornata.',
  gmailTitle: 'Gmail, Outlook o Hotmail sono domini di email usa e getta?',
  gmailParas: [
    'No. Gmail, Outlook, Hotmail, Yahoo e iCloud sono servizi di posta permanenti. Le persone tengono questi account per anni, quindi non sono in nessuna lista usa e getta e non vanno bloccati.',
    "Un indirizzo Gmail o Outlook può comunque essere sbagliato. La casella può non esistere, oppure l'indirizzo può contenere un errore di battitura. È un controllo diverso: se la casella è reale, non se il dominio è usa e getta. La [verifica email gratuita](/email-checker) risponde a questa domanda.",
  ],
  blockTitle: 'Come bloccare gli indirizzi email usa e getta',
  blockIntro:
    'Non puoi tenere a mano una lista di tutti i domini usa e getta. Sono troppi e cambiano ogni giorno. Il modo affidabile è controllare ogni indirizzo quando viene inserito e agire in base al risultato.',
  blockItems: [
    "**Alla registrazione:** controlla l'indirizzo con l'[API di validazione email](/email-validation-api) e chiedine un altro quando è usa e getta.",
    '**Su una lista che hai già:** passala nella [pulizia della lista email](/email-list-cleaning) per togliere in un solo passaggio gli indirizzi usa e getta, non validi e di ruolo.',
    '**Un indirizzo alla volta:** usa il [controllo email usa e getta](/disposable-email-checker).',
  ],
  faqTitle: 'Domande sui servizi di email temporanea',
  faqs: [
    {
      q: "Cos'è un servizio di email temporanea?",
      a: 'È un servizio che crea una casella temporanea in pochi secondi, senza password e senza registrazione. Le persone lo usano per superare un modulo o scaricare un contenuto senza dare il proprio indirizzo reale. Temp-Mail, Mailinator e 10MinuteMail sono esempi comuni.',
    },
    {
      q: 'Quanti domini di email usa e getta esistono?',
      a: 'Molti più di quelli in questa pagina. Un solo servizio può usare a rotazione centinaia di domini, e ogni giorno ne compaiono di nuovi. Il servizio di verifica di Giggal controlla gli indirizzi su una lista di oltre 100.000 domini usa e getta, ricostruita ogni sei ore.',
    },
    {
      q: 'Gmail, Outlook o Hotmail sono domini usa e getta?',
      a: 'No. Gmail, Outlook, Hotmail, Yahoo e iCloud sono servizi di posta permanenti, non servizi usa e getta. Non sono in nessuna lista usa e getta. Un indirizzo su uno di questi domini può comunque non essere valido se la casella non esiste, e questo è un controllo diverso.',
    },
    {
      q: 'Come blocco i domini di email usa e getta?',
      a: "Controlla ogni indirizzo alla registrazione. Se il dominio è usa e getta, chiedi alla persona un altro indirizzo prima di creare l'account. Puoi automatizzarlo nei tuoi moduli con l'API di validazione email, che risponde in tempo reale.",
    },
    {
      q: 'Posso scaricare la lista completa dei domini usa e getta?',
      a: "Questa pagina mostra i domini più noti. La lista completa è gestita dal servizio di verifica e si aggiorna di continuo, quindi il modo affidabile per usarla è controllare gli indirizzi tramite l'API invece di copiare un file statico che diventa vecchio.",
    },
    {
      q: "Che differenza c'è tra un servizio usa e getta e un servizio di alias?",
      a: "Un servizio usa e getta ti dà una casella da abbandonare. Un servizio di alias come addy.io o 33Mail inoltra la posta alla tua casella reale e ti permette di disattivare l'alias in seguito. Alcuni domini di alias sono nelle liste usa e getta, perché la persona può bloccare la tua posta in qualsiasi momento. Altri no, perché inoltrano a una casella reale che qualcuno legge.",
    },
  ],
  ctaBand: 'Blocca le email usa e getta prima che entrino nella tua lista',
  related: [
    { href: '/disposable-email-checker', label: 'Controllo email usa e getta', desc: 'Controlla se un indirizzo è usa e getta.' },
    { href: '/email-validation-api', label: 'API di validazione email', desc: 'Blocca le registrazioni usa e getta in tempo reale.' },
    { href: '/email-checker', label: 'Verifica email gratuita', desc: 'Controlla se una casella esiste.' },
    { href: '/email-list-cleaning', label: 'Pulizia della lista email', desc: "Pulisci un'intera lista in una volta." },
  ],
  itemListName: 'Servizi di email temporanea',
  itemListDesc: 'Principali servizi di email temporanea e usa e getta e i domini che usano.',
  enSuffix: ' (in inglese)',
}

const de: ProvidersStrings = {
  metaTitle: 'Wegwerf-E-Mail-Anbieter und Domain-Liste | Giggal.ai',
  ogTitle: 'Wegwerf-E-Mail-Anbieter und Domain-Liste',
  description:
    'Liste der wichtigsten Wegwerf-E-Mail-Anbieter und ihrer Domains, mit einer kostenlosen Prüfung gegen mehr als 100.000 Wegwerf-Domains.',
  ogLocale: 'de_DE',
  ogAlt: 'Giggal.ai Wegwerf-E-Mail-Anbieter und Domains',
  crumb: 'Wegwerf-E-Mail-Anbieter',
  h1: 'Wegwerf-E-Mail-Anbieter',
  h1Accent: 'und die Domains, die sie nutzen',
  heroIntro:
    'Eine Referenzliste der Dienste, die temporäre Postfächer und Wegwerfadressen erstellen, sortiert nach ihrer Funktionsweise. Die vollständige Liste der Wegwerf-Domains umfasst mehr als 100.000 Einträge und ändert sich jeden Tag.',
  ctaCheck: 'Adresse prüfen',
  ctaBlock: 'Bei der Anmeldung blockieren',
  kindsTitle: 'Die vier Arten von Wegwerf-E-Mail-Diensten',
  kindsIntro:
    'Nicht jede Wegwerfadresse funktioniert gleich. Die Art des Dienstes zeigt Ihnen, was mit einer Nachricht passiert, die Sie dorthin senden.',
  categories: {
    timed: { label: 'Postfach mit Ablaufzeit', badge: 'Mit Ablaufzeit', desc: 'Das Postfach oder seine Nachrichten werden nach einer festen Zeit gelöscht.' },
    public: { label: 'Öffentliches Postfach', badge: 'Öffentlich', desc: 'Jeder, der die Adresse kennt, kann es lesen. Kein Passwort.' },
    alias: { label: 'Alias oder Weiterleitung', badge: 'Weiterleitung', desc: 'Erstellt einen Alias, der an ein echtes Postfach weiterleitet und sich abschalten lässt.' },
    api: { label: 'API oder Entwickler', badge: 'API / Entwickler', desc: 'Für Skripte und Tests gebaut, mit einer API zum Lesen der Nachrichten.' },
  },
  listTitle: 'Liste der Wegwerf-E-Mail-Anbieter',
  listIntro:
    'Die bekanntesten Dienste mit den Domains, von denen jeder sendet. Viele wechseln zwischen mehr Domains als den hier gezeigten.',
  blurbs: {
    'Temp-Mail': 'Stellt ein zufälliges temporäres Postfach ohne Anmeldung bereit.',
    'Mailinator': 'Öffentliche Postfächer ohne Passwort. Jeder kann jede Adresse lesen.',
    '10MinuteMail': 'Stellt eine Adresse bereit, die zehn Minuten nach der Erstellung abläuft.',
    'Guerrilla Mail': 'Löscht jede Nachricht eine Stunde nach dem Eingang. Nutzt mehrere Domains.',
    'YOPmail': 'Öffentliche Postfächer ohne Passwort. Nachrichten bleiben einige Tage gespeichert.',
    'Maildrop': 'Öffentliches Postfach für einmalige Anmeldungen. Kein Konto nötig.',
    'Mohmal': 'Dienst für temporäre Postfächer ohne Anmeldung.',
    'EmailOnDeck': 'Dienst für temporäre Postfächer, ohne Konto nutzbar.',
    'Dropmail': 'Temporäre E-Mail mit einer API. Wechselt zwischen vielen Domains.',
    'ThrowawayMail': 'Temporäres Postfach für die einmalige Nutzung.',
    'TrashMail': 'Weiterleitungsadresse, die nach einer festen Zeit oder Anzahl von Nachrichten endet.',
    'Temp Mail Plus': 'Temporäre E-Mail mit mehreren Domains zur Auswahl.',
    'Tempmailo': 'Temporäres Postfach für die einmalige Nutzung.',
    'Tempail': 'Wegwerf-Postfach ohne Anmeldung.',
    'Mint Email': 'Wegwerf-Postfach für die kurzfristige Nutzung.',
    'Mailnesia': 'Öffentliches Wegwerf-Postfach ohne Passwort.',
    'MailCatch': 'Öffentliches temporäres Postfach, ohne Anmeldung.',
    'Spamgourmet': 'Weiterleitungsadressen, die nach einer festen Anzahl von Nachrichten enden.',
    'Dispostable': 'Öffentliches Wegwerf-Postfach für schnelle Anmeldungen.',
    'Fake Mail Generator': 'Erstellt Wegwerfadressen auf mehreren Domains.',
    'GetAirMail': 'Temporäres Postfach ohne Anmeldung.',
    'Inbox Kitten': 'Öffentliches Wegwerf-Postfach mit offenem Quellcode.',
    'Burner Mail': 'Erstellt für jede Website einen eigenen Alias, der an Ihr echtes Postfach weiterleitet.',
    'addy.io': 'Dienst für Alias-Weiterleitungen, früher AnonAddy genannt.',
    '33Mail': 'Weiterleitungs-Aliase auf einer persönlichen Subdomain.',
    'Moakt': 'Temporäres Postfach ohne Anmeldung.',
    'Minute Inbox': 'Temporäres Postfach für die kurzfristige Nutzung.',
    'Harakirimail': 'Öffentliches Wegwerf-Postfach.',
    'Mailsac': 'Wegwerf-Postfächer mit einer API, genutzt für Tests.',
    'Email Fake': 'Erstellt eine temporäre Adresse auf vielen Domains.',
    'Tmailor': 'Temporäres Postfach ohne Anmeldung.',
    'Mail.tm': 'Temporäre E-Mail mit einer kostenlosen öffentlichen API.',
    'DiscardMail': 'Öffentliches Wegwerf-Postfach, ohne Registrierung.',
    'Spambog': 'Öffentliches temporäres Postfach mit mehreren Domains.',
    'Fakeinbox': 'Temporäres Postfach für die einmalige Nutzung.',
  },
  moreTitle: 'Weitere Wegwerf-E-Mail-Domains',
  moreIntro: (n) =>
    `${n} weitere Domains für Wegwerf- und temporäre E-Mails, zusätzlich zu denen in den Anbieter-Karten oben. Viele gehören zu denselben Diensten, die zusätzliche Domains registrieren, um Blocklisten zu umgehen. Das ist nur ein kleiner Teil der vollständigen Liste der Wegwerf-E-Mail-Domains. Der Prüfdienst gleicht Adressen mit mehr als 100.000 Domains ab und ergänzt alle sechs Stunden neue.`,
  staleNote: 'Eine statische Liste veraltet schnell. Prüfen Sie stattdessen eine Adresse gegen die aktuelle Liste.',
  gmailTitle: 'Ist Gmail, Outlook oder Hotmail eine Wegwerf-E-Mail-Domain?',
  gmailParas: [
    'Nein. Gmail, Outlook, Hotmail, Yahoo und iCloud sind dauerhafte E-Mail-Anbieter. Menschen nutzen diese Konten über Jahre, deshalb stehen sie auf keiner Wegwerf-Liste, und Sie sollten sie nicht blockieren.',
    'Eine Gmail- oder Outlook-Adresse kann trotzdem falsch sein. Das Postfach existiert vielleicht nicht, oder die Adresse enthält einen Tippfehler. Das ist eine andere Prüfung: ob das Postfach echt ist, nicht ob die Domain eine Wegwerf-Domain ist. Der [kostenlose E-Mail-Prüfer](/email-checker) beantwortet diese Frage.',
  ],
  blockTitle: 'So blockieren Sie Wegwerf-E-Mail-Adressen',
  blockIntro:
    'Sie können nicht von Hand eine Liste aller Wegwerf-Domains pflegen. Es gibt zu viele, und sie ändern sich täglich. Der zuverlässige Weg ist, jede Adresse bei der Eingabe zu prüfen und nach dem Ergebnis zu handeln.',
  blockItems: [
    '**Bei der Anmeldung:** Prüfen Sie die Adresse mit der [E-Mail-Validierungs-API](/email-validation-api) und fragen Sie nach einer anderen Adresse, wenn es eine Wegwerfadresse ist.',
    '**Bei einer bestehenden Liste:** Lassen Sie sie durch die [E-Mail-Listenbereinigung](/email-list-cleaning) laufen, um Wegwerfadressen, ungültige Adressen und Rollenadressen in einem Durchgang zu entfernen.',
    '**Eine Adresse nach der anderen:** Nutzen Sie den [Wegwerf-E-Mail-Prüfer](/disposable-email-checker).',
  ],
  faqTitle: 'Fragen zu Wegwerf-E-Mail-Anbietern',
  faqs: [
    {
      q: 'Was ist ein Wegwerf-E-Mail-Anbieter?',
      a: 'Ein Wegwerf-E-Mail-Anbieter ist ein Dienst, der in Sekunden ein temporäres Postfach erstellt, ohne Passwort und ohne Anmeldung. Menschen nutzen ihn, um ein Formular oder einen geschützten Download zu nutzen, ohne ihre echte Adresse anzugeben. Temp-Mail, Mailinator und 10MinuteMail sind bekannte Beispiele.',
    },
    {
      q: 'Wie viele Wegwerf-E-Mail-Domains gibt es?',
      a: 'Weit mehr als auf dieser Seite. Ein einzelner Anbieter kann Hunderte Domains im Wechsel nutzen, und jeden Tag kommen neue hinzu. Der Prüfdienst von Giggal gleicht Adressen mit einer Liste von mehr als 100.000 Wegwerf-Domains ab, die alle sechs Stunden neu erstellt wird.',
    },
    {
      q: 'Ist Gmail, Outlook oder Hotmail eine Wegwerf-E-Mail-Domain?',
      a: 'Nein. Gmail, Outlook, Hotmail, Yahoo und iCloud sind dauerhafte E-Mail-Anbieter, keine Wegwerfdienste. Sie stehen auf keiner Wegwerf-Liste. Eine Adresse bei einem dieser Anbieter kann trotzdem ungültig sein, wenn das Postfach nicht existiert. Das ist eine eigene Prüfung.',
    },
    {
      q: 'Wie blockiere ich Wegwerf-E-Mail-Domains?',
      a: 'Prüfen Sie jede Adresse bei der Anmeldung. Ist die Domain eine Wegwerf-Domain, fragen Sie nach einer anderen Adresse, bevor das Konto erstellt wird. Mit der E-Mail-Validierungs-API, die in Echtzeit antwortet, können Sie das in Ihren Formularen automatisieren.',
    },
    {
      q: 'Kann ich die vollständige Liste der Wegwerf-Domains herunterladen?',
      a: 'Diese Seite zeigt die bekannten Domains. Die vollständige Liste liegt beim Prüfdienst und wird laufend aktualisiert. Zuverlässig nutzen Sie sie deshalb, indem Sie Adressen über die API prüfen, statt eine statische Datei zu kopieren, die veraltet.',
    },
    {
      q: 'Was ist der Unterschied zwischen einem Wegwerf-Anbieter und einem Alias-Dienst?',
      a: 'Ein Wegwerf-Anbieter gibt Ihnen ein Postfach, das Sie wieder aufgeben. Ein Alias-Dienst wie addy.io oder 33Mail leitet E-Mails an Ihr echtes Postfach weiter und lässt Sie den Alias später abschalten. Manche Alias-Domains stehen auf Wegwerf-Listen, weil die Person Ihre E-Mails jederzeit abstellen kann. Andere nicht, weil sie an ein echtes Postfach weiterleiten, das jemand liest.',
    },
  ],
  ctaBand: 'Blockieren Sie Wegwerf-E-Mails, bevor sie auf Ihre Liste kommen',
  related: [
    { href: '/disposable-email-checker', label: 'Wegwerf-E-Mail-Prüfer', desc: 'Prüfen, ob eine Adresse eine Wegwerfadresse ist.' },
    { href: '/email-validation-api', label: 'E-Mail-Validierungs-API', desc: 'Wegwerf-Anmeldungen in Echtzeit blockieren.' },
    { href: '/email-checker', label: 'Kostenloser E-Mail-Prüfer', desc: 'Prüfen, ob ein Postfach existiert.' },
    { href: '/email-list-cleaning', label: 'E-Mail-Listenbereinigung', desc: 'Eine ganze Liste auf einmal bereinigen.' },
  ],
  itemListName: 'Wegwerf-E-Mail-Anbieter',
  itemListDesc: 'Wichtige Anbieter für Wegwerf- und temporäre E-Mails und die Domains, die sie nutzen.',
  enSuffix: ' (Englisch)',
}

const es: ProvidersStrings = {
  metaTitle: 'Proveedores de Correo Desechable y Lista de Dominios | Giggal.ai',
  ogTitle: 'Proveedores de correo desechable y lista de dominios',
  description:
    'Lista de los principales proveedores de correo desechable y temporal y sus dominios, con una comprobación gratis contra más de 100.000 dominios.',
  ogLocale: 'es_LA',
  ogAlt: 'Giggal.ai proveedores de correo desechable y dominios',
  crumb: 'Proveedores de correo desechable',
  h1: 'Proveedores de correo desechable',
  h1Accent: 'y los dominios que usan',
  heroIntro:
    'Una lista de referencia de los servicios que crean bandejas temporales y desechables, agrupados según cómo funcionan. La lista completa de dominios desechables supera los 100.000 y cambia cada día.',
  ctaCheck: 'Comprobar una dirección',
  ctaBlock: 'Bloquéalos en el registro',
  kindsTitle: 'Los cuatro tipos de servicio de correo desechable',
  kindsIntro:
    'No todas las direcciones desechables funcionan igual. El tipo te dice qué pasa con un mensaje que envías allí.',
  categories: {
    timed: { label: 'Bandeja con caducidad', badge: 'Con caducidad', desc: 'La bandeja o sus mensajes se borran después de un tiempo fijo.' },
    public: { label: 'Bandeja pública', badge: 'Pública', desc: 'Cualquiera que conozca la dirección puede leerla. Sin contraseña.' },
    alias: { label: 'Alias o reenvío', badge: 'Alias / reenvío', desc: 'Crea un alias que reenvía a una bandeja real y que se puede desactivar.' },
    api: { label: 'API o desarrolladores', badge: 'API / desarrollo', desc: 'Pensado para scripts y pruebas, con una API para leer los mensajes.' },
  },
  listTitle: 'Lista de proveedores de correo desechable',
  listIntro:
    'Los servicios más conocidos, con los dominios desde los que envía cada uno. Muchos rotan entre más dominios que los que se muestran aquí.',
  blurbs: {
    'Temp-Mail': 'Da una bandeja temporal aleatoria sin registro.',
    'Mailinator': 'Bandejas públicas sin contraseña. Cualquiera puede leer cualquier dirección.',
    '10MinuteMail': 'Da una dirección que caduca diez minutos después de crearla.',
    'Guerrilla Mail': 'Borra cada mensaje una hora después de que llega. Usa varios dominios.',
    'YOPmail': 'Bandejas públicas sin contraseña. Los mensajes se guardan unos días.',
    'Maildrop': 'Bandeja pública para registros de un solo uso. No hace falta cuenta.',
    'Mohmal': 'Servicio de bandeja temporal sin registro.',
    'EmailOnDeck': 'Servicio de bandeja temporal sin necesidad de cuenta.',
    'Dropmail': 'Correo temporal con una API. Rota entre muchos dominios.',
    'ThrowawayMail': 'Bandeja temporal para un solo uso.',
    'TrashMail': 'Dirección de reenvío que se detiene tras un tiempo o un número de mensajes fijo.',
    'Temp Mail Plus': 'Correo temporal con varios dominios para elegir.',
    'Tempmailo': 'Bandeja temporal para un solo uso.',
    'Tempail': 'Bandeja desechable sin registro.',
    'Mint Email': 'Bandeja desechable para un uso corto.',
    'Mailnesia': 'Bandeja desechable pública sin contraseña.',
    'MailCatch': 'Bandeja temporal pública, sin registro.',
    'Spamgourmet': 'Direcciones de reenvío que se detienen tras un número fijo de mensajes.',
    'Dispostable': 'Bandeja desechable pública para registros rápidos.',
    'Fake Mail Generator': 'Genera direcciones desechables en varios dominios.',
    'GetAirMail': 'Bandeja temporal sin registro.',
    'Inbox Kitten': 'Bandeja desechable pública y de código abierto.',
    'Burner Mail': 'Crea un alias distinto para cada sitio, que reenvía a tu bandeja real.',
    'addy.io': 'Servicio de alias con reenvío, antes llamado AnonAddy.',
    '33Mail': 'Alias de reenvío en un subdominio personal.',
    'Moakt': 'Bandeja temporal sin registro.',
    'Minute Inbox': 'Bandeja temporal para un uso corto.',
    'Harakirimail': 'Bandeja desechable pública.',
    'Mailsac': 'Bandejas desechables con una API, usadas para pruebas.',
    'Email Fake': 'Genera una dirección temporal en muchos dominios.',
    'Tmailor': 'Bandeja temporal sin registro.',
    'Mail.tm': 'Correo temporal con una API pública gratuita.',
    'DiscardMail': 'Bandeja desechable pública, sin registro.',
    'Spambog': 'Bandeja temporal pública con varios dominios.',
    'Fakeinbox': 'Bandeja temporal para un solo uso.',
  },
  moreTitle: 'Más dominios de correo desechable',
  moreIntro: (n) =>
    `${n} dominios desechables y temporales más, además de los que aparecen en las tarjetas de proveedores de arriba. Muchos pertenecen a los mismos servicios, que registran dominios extra para saltarse las listas de bloqueo. Es solo una pequeña parte de la lista completa de dominios de correo desechable. El servicio de verificación comprueba las direcciones contra más de 100.000 dominios y añade nuevos cada seis horas.`,
  staleNote: 'Una lista estática se queda vieja rápido. Comprueba una dirección contra la lista actualizada.',
  gmailTitle: '¿Gmail, Outlook o Hotmail son dominios de correo desechable?',
  gmailParas: [
    'No. Gmail, Outlook, Hotmail, Yahoo e iCloud son proveedores de correo permanentes. La gente mantiene estas cuentas durante años, así que no están en ninguna lista de desechables y no debes bloquearlas.',
    'Una dirección de Gmail u Outlook aún puede estar mal. Puede que el buzón no exista o que la dirección tenga una errata. Es una comprobación distinta: si el buzón es real, no si el dominio es desechable. El [verificador de email gratis](/email-checker) responde a eso.',
  ],
  blockTitle: 'Cómo bloquear direcciones de correo desechable',
  blockIntro:
    'No puedes mantener a mano una lista de todos los dominios desechables. Hay demasiados y cambian cada día. La forma fiable es comprobar cada dirección cuando se introduce y actuar según el resultado.',
  blockItems: [
    '**En el registro:** comprueba la dirección con la [API de validación de correo](/email-validation-api) y pide otra dirección cuando sea desechable.',
    '**En una lista que ya tienes:** pásala por la [limpieza de listas de correo](/email-list-cleaning) para quitar direcciones desechables, no válidas y de rol en una sola pasada.',
    '**Una dirección cada vez:** usa el [verificador de correo desechable](/disposable-email-checker).',
  ],
  faqTitle: 'Preguntas sobre proveedores de correo desechable',
  faqs: [
    {
      q: '¿Qué es un proveedor de correo desechable?',
      a: 'Es un servicio que crea una bandeja temporal en segundos, sin contraseña y sin registro. La gente lo usa para pasar un formulario o una descarga protegida sin dar su dirección real. Temp-Mail, Mailinator y 10MinuteMail son ejemplos comunes.',
    },
    {
      q: '¿Cuántos dominios de correo desechable existen?',
      a: 'Muchos más que los de esta página. Un solo proveedor puede rotar entre cientos de dominios, y cada día aparecen nuevos. El servicio de verificación de Giggal comprueba las direcciones contra una lista de más de 100.000 dominios desechables que se reconstruye cada seis horas.',
    },
    {
      q: '¿Gmail, Outlook o Hotmail son dominios de correo desechable?',
      a: 'No. Gmail, Outlook, Hotmail, Yahoo e iCloud son proveedores de correo permanentes, no servicios desechables. No están en ninguna lista de desechables. Una dirección en uno de estos dominios aún puede no ser válida si el buzón no existe, y eso es otra comprobación.',
    },
    {
      q: '¿Cómo bloqueo los dominios de correo desechable?',
      a: 'Comprueba cada dirección en el registro. Si el dominio es desechable, pide a la persona otra dirección antes de crear la cuenta. Puedes automatizarlo en tus formularios con la API de validación de correo, que responde en tiempo real.',
    },
    {
      q: '¿Puedo descargar la lista completa de dominios desechables?',
      a: 'Esta página muestra los dominios más conocidos. La lista completa la mantiene el servicio de verificación y se actualiza sin parar, así que la forma fiable de usarla es comprobar las direcciones con la API en lugar de copiar un archivo estático que se queda viejo.',
    },
    {
      q: '¿Qué diferencia hay entre un proveedor desechable y un servicio de alias?',
      a: 'Un proveedor desechable te da una bandeja pensada para abandonarla. Un servicio de alias como addy.io o 33Mail reenvía el correo a tu bandeja real y te deja desactivar el alias más tarde. Algunos dominios de alias están en las listas de desechables, porque la persona puede cortar tu correo en cualquier momento. Otros no, porque reenvían a una bandeja real que alguien lee.',
    },
  ],
  ctaBand: 'Bloquea el correo desechable antes de que llegue a tu lista',
  related: [
    { href: '/disposable-email-checker', label: 'Verificador de correo desechable', desc: 'Comprueba si una dirección es desechable.' },
    { href: '/email-validation-api', label: 'API de validación de correo', desc: 'Bloquea registros desechables en tiempo real.' },
    { href: '/email-checker', label: 'Verificador de email gratis', desc: 'Comprueba si un buzón existe.' },
    { href: '/email-list-cleaning', label: 'Limpieza de listas de correo', desc: 'Limpia una lista entera de una vez.' },
  ],
  itemListName: 'Proveedores de correo desechable',
  itemListDesc: 'Principales proveedores de correo desechable y temporal y los dominios que usan.',
  enSuffix: ' (en inglés)',
}

const ptBr: ProvidersStrings = {
  metaTitle: 'Provedores de E-mail Descartável e Lista de Domínios | Giggal.ai',
  ogTitle: 'Provedores de e-mail descartável e lista de domínios',
  description:
    'Lista dos principais provedores de e-mail descartável e temporário e dos seus domínios, com uma verificação grátis contra mais de 100.000 domínios.',
  ogLocale: 'pt_BR',
  ogAlt: 'Giggal.ai provedores de e-mail descartável e domínios',
  crumb: 'Provedores de e-mail descartável',
  h1: 'Provedores de e-mail descartável',
  h1Accent: 'e os domínios que eles usam',
  heroIntro:
    'Uma lista de referência dos serviços que criam caixas de entrada temporárias e descartáveis, agrupados pelo jeito como funcionam. A lista completa de domínios descartáveis passa de 100.000 e muda todo dia.',
  ctaCheck: 'Verificar um endereço',
  ctaBlock: 'Bloquear no cadastro',
  kindsTitle: 'Os quatro tipos de serviço de e-mail descartável',
  kindsIntro:
    'Nem todo endereço descartável funciona do mesmo jeito. O tipo mostra o que acontece com uma mensagem que você envia para lá.',
  categories: {
    timed: { label: 'Caixa com prazo', badge: 'Com prazo', desc: 'A caixa ou as mensagens são apagadas depois de um tempo fixo.' },
    public: { label: 'Caixa pública', badge: 'Pública', desc: 'Qualquer pessoa que saiba o endereço pode ler. Sem senha.' },
    alias: { label: 'Alias ou encaminhamento', badge: 'Encaminhamento', desc: 'Cria um alias que encaminha para uma caixa real e que pode ser desligado.' },
    api: { label: 'API ou desenvolvedores', badge: 'API', desc: 'Feito para scripts e testes, com uma API para ler as mensagens.' },
  },
  listTitle: 'Lista de provedores de e-mail descartável',
  listIntro:
    'Os serviços mais conhecidos, com os domínios de onde cada um envia. Muitos alternam entre mais domínios do que os mostrados aqui.',
  blurbs: {
    'Temp-Mail': 'Dá uma caixa temporária aleatória sem cadastro.',
    'Mailinator': 'Caixas públicas sem senha. Qualquer pessoa pode ler qualquer endereço.',
    '10MinuteMail': 'Dá um endereço que expira dez minutos depois de criado.',
    'Guerrilla Mail': 'Apaga cada mensagem uma hora depois que ela chega. Usa vários domínios.',
    'YOPmail': 'Caixas públicas sem senha. As mensagens ficam guardadas por alguns dias.',
    'Maildrop': 'Caixa pública para cadastros de uso único. Não precisa de conta.',
    'Mohmal': 'Serviço de caixa temporária sem cadastro.',
    'EmailOnDeck': 'Serviço de caixa temporária sem precisar de conta.',
    'Dropmail': 'E-mail temporário com uma API. Alterna entre muitos domínios.',
    'ThrowawayMail': 'Caixa temporária para uso único.',
    'TrashMail': 'Endereço de encaminhamento que para depois de um tempo ou de um número de mensagens fixo.',
    'Temp Mail Plus': 'E-mail temporário com vários domínios para escolher.',
    'Tempmailo': 'Caixa temporária para uso único.',
    'Tempail': 'Caixa descartável sem cadastro.',
    'Mint Email': 'Caixa descartável para uso curto.',
    'Mailnesia': 'Caixa descartável pública sem senha.',
    'MailCatch': 'Caixa temporária pública, sem cadastro.',
    'Spamgourmet': 'Endereços de encaminhamento que param depois de um número fixo de mensagens.',
    'Dispostable': 'Caixa descartável pública para cadastros rápidos.',
    'Fake Mail Generator': 'Gera endereços descartáveis em vários domínios.',
    'GetAirMail': 'Caixa temporária sem cadastro.',
    'Inbox Kitten': 'Caixa descartável pública e de código aberto.',
    'Burner Mail': 'Cria um alias diferente para cada site, que encaminha para sua caixa real.',
    'addy.io': 'Serviço de alias com encaminhamento, antes chamado AnonAddy.',
    '33Mail': 'Aliases de encaminhamento em um subdomínio pessoal.',
    'Moakt': 'Caixa temporária sem cadastro.',
    'Minute Inbox': 'Caixa temporária para uso curto.',
    'Harakirimail': 'Caixa descartável pública.',
    'Mailsac': 'Caixas descartáveis com uma API, usadas para testes.',
    'Email Fake': 'Gera um endereço temporário em muitos domínios.',
    'Tmailor': 'Caixa temporária sem cadastro.',
    'Mail.tm': 'E-mail temporário com uma API pública gratuita.',
    'DiscardMail': 'Caixa descartável pública, sem cadastro.',
    'Spambog': 'Caixa temporária pública com vários domínios.',
    'Fakeinbox': 'Caixa temporária para uso único.',
  },
  moreTitle: 'Mais domínios de e-mail descartável',
  moreIntro: (n) =>
    `Mais ${n} domínios descartáveis e temporários, além dos que aparecem nos cartões de provedores acima. Muitos pertencem aos mesmos serviços, que registram domínios extras para passar pelas listas de bloqueio. Isto é só uma pequena parte da lista completa de domínios de e-mail descartável. O serviço de verificação confere os endereços contra mais de 100.000 domínios e adiciona novos a cada seis horas.`,
  staleNote: 'Uma lista estática fica desatualizada rápido. Verifique um endereço contra a lista atualizada.',
  gmailTitle: 'Gmail, Outlook ou Hotmail são domínios de e-mail descartável?',
  gmailParas: [
    'Não. Gmail, Outlook, Hotmail, Yahoo e iCloud são provedores de e-mail permanentes. As pessoas mantêm essas contas por anos, então elas não estão em nenhuma lista de descartáveis, e você não deve bloqueá-las.',
    'Um endereço do Gmail ou do Outlook ainda pode estar errado. A caixa pode não existir, ou o endereço pode ter um erro de digitação. Essa é outra verificação: se a caixa é real, não se o domínio é descartável. O [verificador de e-mail grátis](/email-checker) responde a isso.',
  ],
  blockTitle: 'Como bloquear endereços de e-mail descartável',
  blockIntro:
    'Você não consegue manter à mão uma lista de todos os domínios descartáveis. São muitos, e eles mudam todo dia. O jeito confiável é verificar cada endereço quando ele é digitado e agir de acordo com o resultado.',
  blockItems: [
    '**No cadastro:** verifique o endereço com a [API de validação de e-mail](/email-validation-api) e peça outro endereço quando ele for descartável.',
    '**Em uma lista que você já tem:** passe a lista pela [limpeza de lista de e-mails](/email-list-cleaning) para remover endereços descartáveis, inválidos e de função de uma vez.',
    '**Um endereço por vez:** use o [verificador de e-mail descartável](/disposable-email-checker).',
  ],
  faqTitle: 'Perguntas sobre provedores de e-mail descartável',
  faqs: [
    {
      q: 'O que é um provedor de e-mail descartável?',
      a: 'É um serviço que cria uma caixa temporária em segundos, sem senha e sem cadastro. As pessoas usam para passar por um formulário ou baixar um material sem informar o endereço real. Temp-Mail, Mailinator e 10MinuteMail são exemplos comuns.',
    },
    {
      q: 'Quantos domínios de e-mail descartável existem?',
      a: 'Muito mais do que os desta página. Um único provedor pode alternar entre centenas de domínios, e surgem novos todo dia. O serviço de verificação da Giggal confere os endereços contra uma lista de mais de 100.000 domínios descartáveis, refeita a cada seis horas.',
    },
    {
      q: 'Gmail, Outlook ou Hotmail são domínios de e-mail descartável?',
      a: 'Não. Gmail, Outlook, Hotmail, Yahoo e iCloud são provedores de e-mail permanentes, não serviços descartáveis. Eles não estão em nenhuma lista de descartáveis. Um endereço em um desses domínios ainda pode ser inválido se a caixa não existir, e isso é outra verificação.',
    },
    {
      q: 'Como bloquear domínios de e-mail descartável?',
      a: 'Verifique cada endereço no cadastro. Se o domínio for descartável, peça outro endereço antes de criar a conta. Você pode automatizar isso nos seus formulários com a API de validação de e-mail, que responde em tempo real.',
    },
    {
      q: 'Posso baixar a lista completa de domínios descartáveis?',
      a: 'Esta página mostra os domínios mais conhecidos. A lista completa fica no serviço de verificação e é atualizada o tempo todo. Por isso, o jeito confiável de usá-la é verificar os endereços pela API, em vez de copiar um arquivo estático que fica desatualizado.',
    },
    {
      q: 'Qual a diferença entre um provedor descartável e um serviço de alias?',
      a: 'Um provedor descartável dá uma caixa feita para ser abandonada. Um serviço de alias como addy.io ou 33Mail encaminha o e-mail para sua caixa real e deixa você desligar o alias depois. Alguns domínios de alias estão nas listas de descartáveis, porque a pessoa pode cortar seus e-mails a qualquer momento. Outros não, porque encaminham para uma caixa real que alguém lê.',
    },
  ],
  ctaBand: 'Bloqueie e-mails descartáveis antes que entrem na sua lista',
  related: [
    { href: '/disposable-email-checker', label: 'Verificador de e-mail descartável', desc: 'Veja se um endereço é descartável.' },
    { href: '/email-validation-api', label: 'API de validação de e-mail', desc: 'Bloqueie cadastros descartáveis em tempo real.' },
    { href: '/email-checker', label: 'Verificador de e-mail grátis', desc: 'Veja se uma caixa existe.' },
    { href: '/email-list-cleaning', label: 'Limpeza de lista de e-mails', desc: 'Limpe uma lista inteira de uma vez.' },
  ],
  itemListName: 'Provedores de e-mail descartável',
  itemListDesc: 'Principais provedores de e-mail descartável e temporário e os domínios que eles usam.',
  enSuffix: ' (em inglês)',
}

const fr: ProvidersStrings = {
  metaTitle: `Fournisseurs d’Adresse Mail Jetable et Liste des Domaines | Giggal.ai`,
  ogTitle: `Fournisseurs d’adresse mail jetable et liste des domaines`,
  description: `Liste des principaux fournisseurs d’adresse mail jetable et temporaire et de leurs domaines, avec une vérification gratuite parmi plus de 100${NB}000 domaines.`,
  ogLocale: 'fr_FR',
  ogAlt: `Giggal.ai fournisseurs d’adresse mail jetable et domaines`,
  crumb: `Fournisseurs d’adresse mail jetable`,
  h1: `Fournisseurs d’adresse mail jetable`,
  h1Accent: `et les domaines qu’ils utilisent`,
  heroIntro: `Une liste de référence des services qui créent des boîtes de réception temporaires et jetables, classés selon leur fonctionnement. La liste complète des domaines jetables dépasse 100${NB}000 et change chaque jour.`,
  ctaCheck: `Vérifier une adresse`,
  ctaBlock: `Les bloquer à l’inscription`,
  kindsTitle: `Les quatre types de service d’email jetable`,
  kindsIntro: `Toutes les adresses jetables ne fonctionnent pas de la même façon. Le type vous dit ce qui arrive à un message que vous y envoyez.`,
  categories: {
    timed: { label: `Boîte à durée limitée`, badge: `Durée limitée`, desc: `La boîte ou ses messages sont supprimés après un délai fixe.` },
    public: { label: `Boîte publique`, badge: `Publique`, desc: `Toute personne qui connaît l’adresse peut la lire. Pas de mot de passe.` },
    alias: { label: `Alias ou transfert`, badge: `Alias / transfert`, desc: `Crée un alias qui transfère vers une vraie boîte et qui peut être désactivé.` },
    api: { label: `API ou développeurs`, badge: `API / développeurs`, desc: `Conçu pour les scripts et les tests, avec une API pour lire les messages.` },
  },
  listTitle: `Liste des fournisseurs d’adresse mail jetable`,
  listIntro: `Les services les plus connus, avec les domaines depuis lesquels chacun envoie. Beaucoup alternent entre plus de domaines que ceux indiqués ici.`,
  blurbs: {
    'Temp-Mail': `Donne une boîte temporaire aléatoire sans inscription.`,
    'Mailinator': `Boîtes publiques sans mot de passe. Tout le monde peut lire n’importe quelle adresse.`,
    '10MinuteMail': `Donne une adresse qui expire dix minutes après sa création.`,
    'Guerrilla Mail': `Supprime chaque message une heure après son arrivée. Utilise plusieurs domaines.`,
    'YOPmail': `Boîtes publiques sans mot de passe. Les messages sont conservés quelques jours.`,
    'Maildrop': `Boîte publique pour les inscriptions ponctuelles. Aucun compte requis.`,
    'Mohmal': `Service de boîte temporaire sans inscription.`,
    'EmailOnDeck': `Service de boîte temporaire sans compte.`,
    'Dropmail': `Email temporaire avec une API. Alterne entre de nombreux domaines.`,
    'ThrowawayMail': `Boîte temporaire pour un usage unique.`,
    'TrashMail': `Adresse de transfert qui s’arrête après un délai ou un nombre de messages fixe.`,
    'Temp Mail Plus': `Email temporaire avec plusieurs domaines au choix.`,
    'Tempmailo': `Boîte temporaire pour un usage unique.`,
    'Tempail': `Boîte jetable sans inscription.`,
    'Mint Email': `Boîte jetable pour un usage court.`,
    'Mailnesia': `Boîte jetable publique sans mot de passe.`,
    'MailCatch': `Boîte temporaire publique, sans inscription.`,
    'Spamgourmet': `Adresses de transfert qui s’arrêtent après un nombre fixe de messages.`,
    'Dispostable': `Boîte jetable publique pour les inscriptions rapides.`,
    'Fake Mail Generator': `Génère des adresses jetables sur plusieurs domaines.`,
    'GetAirMail': `Boîte temporaire sans inscription.`,
    'Inbox Kitten': `Boîte jetable publique et open source.`,
    'Burner Mail': `Crée un alias différent pour chaque site, qui transfère vers votre vraie boîte.`,
    'addy.io': `Service d’alias avec transfert, anciennement appelé AnonAddy.`,
    '33Mail': `Alias de transfert sur un sous-domaine personnel.`,
    'Moakt': `Boîte temporaire sans inscription.`,
    'Minute Inbox': `Boîte temporaire pour un usage court.`,
    'Harakirimail': `Boîte jetable publique.`,
    'Mailsac': `Boîtes jetables avec une API, utilisées pour les tests.`,
    'Email Fake': `Génère une adresse temporaire sur de nombreux domaines.`,
    'Tmailor': `Boîte temporaire sans inscription.`,
    'Mail.tm': `Email temporaire avec une API publique gratuite.`,
    'DiscardMail': `Boîte jetable publique, sans inscription.`,
    'Spambog': `Boîte temporaire publique avec plusieurs domaines.`,
    'Fakeinbox': `Boîte temporaire pour un usage unique.`,
  },
  moreTitle: `Autres domaines d’email jetable`,
  moreIntro: (n) =>
    `${n} autres domaines jetables et temporaires, en plus de ceux des fiches de fournisseurs ci-dessus. Beaucoup appartiennent aux mêmes services, qui enregistrent des domaines supplémentaires pour passer les listes de blocage. Ce n’est qu’une petite partie de la liste complète des domaines d’email jetable. Le service de vérification contrôle les adresses parmi plus de 100${NB}000 domaines et en ajoute de nouveaux toutes les six heures.`,
  staleNote: `Une liste statique devient vite obsolète. Vérifiez plutôt une adresse avec la liste à jour.`,
  gmailTitle: `Gmail, Outlook ou Hotmail sont-ils des domaines d’email jetable${NB}?`,
  gmailParas: [
    `Non. Gmail, Outlook, Hotmail, Yahoo et iCloud sont des fournisseurs de messagerie permanents. Les gens gardent ces comptes pendant des années, donc ils ne figurent sur aucune liste de domaines jetables, et vous ne devez pas les bloquer.`,
    `Une adresse Gmail ou Outlook peut quand même être fausse. La boîte peut ne pas exister, ou l’adresse peut contenir une faute de frappe. C’est une autre vérification${NB}: savoir si la boîte est réelle, et non si le domaine est jetable. Le [testeur d’email gratuit](/email-checker) répond à cette question.`,
  ],
  blockTitle: `Comment bloquer les adresses mail jetables`,
  blockIntro: `Vous ne pouvez pas tenir à la main une liste de tous les domaines jetables. Il y en a trop, et ils changent chaque jour. La méthode fiable consiste à vérifier chaque adresse au moment de la saisie et à agir selon le résultat.`,
  blockItems: [
    `**À l’inscription${NB}:** vérifiez l’adresse avec l’[API de validation d’email](/email-validation-api) et demandez une autre adresse si elle est jetable.`,
    `**Sur une liste existante${NB}:** passez-la dans le [nettoyage de liste email](/email-list-cleaning) pour retirer en une seule fois les adresses jetables, invalides et de rôle.`,
    `**Une adresse à la fois${NB}:** utilisez le [vérificateur d’email jetable](/disposable-email-checker).`,
  ],
  faqTitle: `Questions sur les fournisseurs d’adresse mail jetable`,
  faqs: [
    {
      q: `Qu’est-ce qu’un fournisseur d’adresse mail jetable${NB}?`,
      a: `C’est un service qui crée une boîte temporaire en quelques secondes, sans mot de passe et sans inscription. On l’utilise pour passer un formulaire ou un téléchargement protégé sans donner sa vraie adresse. Temp-Mail, Mailinator et 10MinuteMail sont des exemples courants.`,
    },
    {
      q: `Combien existe-t-il de domaines d’email jetable${NB}?`,
      a: `Bien plus que ceux de cette page. Un seul fournisseur peut alterner entre des centaines de domaines, et de nouveaux apparaissent chaque jour. Le service de vérification de Giggal contrôle les adresses avec une liste de plus de 100${NB}000 domaines jetables, reconstruite toutes les six heures.`,
    },
    {
      q: `Gmail, Outlook ou Hotmail sont-ils des domaines d’email jetable${NB}?`,
      a: `Non. Gmail, Outlook, Hotmail, Yahoo et iCloud sont des fournisseurs de messagerie permanents, pas des services jetables. Ils ne figurent sur aucune liste de domaines jetables. Une adresse sur l’un de ces domaines peut quand même être invalide si la boîte n’existe pas, et c’est une autre vérification.`,
    },
    {
      q: `Comment bloquer les domaines d’email jetable${NB}?`,
      a: `Vérifiez chaque adresse à l’inscription. Si le domaine est jetable, demandez une autre adresse avant de créer le compte. Vous pouvez l’automatiser dans vos formulaires avec l’API de validation d’email, qui répond en temps réel.`,
    },
    {
      q: `Puis-je télécharger la liste complète des domaines jetables${NB}?`,
      a: `Cette page montre les domaines les plus connus. La liste complète est tenue par le service de vérification et mise à jour en continu. La méthode fiable consiste donc à vérifier les adresses avec l’API plutôt qu’à copier un fichier statique qui devient obsolète.`,
    },
    {
      q: `Quelle différence entre un fournisseur jetable et un service d’alias${NB}?`,
      a: `Un fournisseur jetable vous donne une boîte faite pour être abandonnée. Un service d’alias comme addy.io ou 33Mail transfère les messages vers votre vraie boîte et vous permet de désactiver l’alias plus tard. Certains domaines d’alias figurent sur les listes de domaines jetables, car la personne peut couper vos messages à tout moment. D’autres non, car ils transfèrent vers une vraie boîte que quelqu’un lit.`,
    },
  ],
  ctaBand: `Bloquez les emails jetables avant qu’ils n’entrent dans votre liste`,
  related: [
    { href: '/disposable-email-checker', label: `Vérificateur d’email jetable`, desc: `Vérifiez si une adresse est jetable.` },
    { href: '/email-validation-api', label: `API de validation d’email`, desc: `Bloquez les inscriptions jetables en temps réel.` },
    { href: '/email-checker', label: `Testeur d’email gratuit`, desc: `Vérifiez si une boîte existe.` },
    { href: '/email-list-cleaning', label: `Nettoyage de liste email`, desc: `Nettoyez une liste entière en une fois.` },
  ],
  itemListName: `Fournisseurs d’adresse mail jetable`,
  itemListDesc: `Principaux fournisseurs d’adresse mail jetable et temporaire et les domaines qu’ils utilisent.`,
  enSuffix: ' (en anglais)',
}

export const PROVIDERS_STRINGS: Record<Locale, ProvidersStrings> = { en, it, de, es, 'pt-br': ptBr, fr }
