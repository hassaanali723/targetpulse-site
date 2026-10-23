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
    'A Gmail or Outlook address can still be wrong. The mailbox may not exist, or the address may be a typo. That is a separate check: whether the mailbox is real, not whether the domain is disposable. The [email checker](/email-checker) answers that one.',
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
    { href: '/email-checker', label: 'Email checker', desc: 'Check if a mailbox exists.' },
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

const nl: ProvidersStrings = {
  metaTitle: 'Tijdelijk e-mailadres: lijst van wegwerp e-maildiensten',
  ogTitle: 'Tijdelijk e-mailadres: lijst van wegwerp e-maildiensten en hun domeinen',
  description: 'Lijst van de bekende diensten voor een tijdelijk e-mailadres en de domeinen die ze gebruiken, met een gratis controle tegen meer dan 100.000 wegwerpdomeinen.',
  ogLocale: 'nl_NL',
  ogAlt: 'Giggal.ai lijst van diensten voor tijdelijke e-mailadressen en hun domeinen',
  crumb: 'Diensten voor tijdelijke e-mailadressen',
  h1: 'Diensten voor tijdelijke e-mailadressen',
  h1Accent: 'en de domeinen die ze gebruiken',
  heroIntro: 'Een overzicht van de diensten waarmee je een tijdelijk e-mailadres of wegwerp e-mailadres maakt, ingedeeld naar hoe ze werken. De volledige lijst van wegwerpdomeinen telt meer dan 100.000 domeinen en verandert elke dag.',
  ctaCheck: 'Een adres controleren',
  ctaBlock: 'Blokkeer ze bij de aanmelding',
  kindsTitle: 'De vier soorten diensten voor tijdelijke e-mail',
  kindsIntro: 'Niet elk wegwerpadres werkt op dezelfde manier. Aan het soort dienst zie je wat er gebeurt met een bericht dat je erheen stuurt.',
  categories: {
    timed: { label: 'Mailbox met tijdslimiet', badge: 'Tijdslimiet', desc: 'De mailbox of de berichten worden na een vaste tijd verwijderd.' },
    public: { label: 'Openbare mailbox', badge: 'Openbaar', desc: 'Iedereen die het adres kent, kan de mailbox lezen. Geen wachtwoord.' },
    alias: { label: 'Alias of doorsturen', badge: 'Alias / doorsturen', desc: 'Maakt een alias die mail doorstuurt naar een echte mailbox en die je later kunt uitzetten.' },
    api: { label: 'API of ontwikkelaars', badge: 'API / ontwikkelaars', desc: 'Gemaakt voor scripts en tests, met een API om berichten te lezen.' },
  },
  listTitle: 'Lijst van diensten voor een tijdelijk e-mailadres',
  listIntro: 'De bekendste diensten, met de domeinen waarvan elke dienst mail verstuurt. Veel diensten wisselen tussen meer domeinen dan hier staan.',
  blurbs: {
    'Temp-Mail': 'Geeft een willekeurige tijdelijke mailbox, zonder registratie.',
    'Mailinator': 'Openbare mailboxen zonder wachtwoord. Iedereen kan elk adres lezen.',
    '10MinuteMail': 'Geeft een adres dat tien minuten na het aanmaken verloopt.',
    'Guerrilla Mail': 'Verwijdert elk bericht een uur nadat het is binnengekomen. Gebruikt meerdere domeinen.',
    'YOPmail': 'Openbare mailboxen zonder wachtwoord. Berichten blijven een paar dagen bewaard.',
    'Maildrop': 'Openbare mailbox voor eenmalige aanmeldingen. Geen account nodig.',
    'Mohmal': 'Dienst voor tijdelijke mailboxen, zonder registratie.',
    'EmailOnDeck': 'Dienst voor tijdelijke mailboxen, zonder account.',
    'Dropmail': 'Tijdelijke e-mail met een API. Wisselt tussen veel domeinen.',
    'ThrowawayMail': 'Tijdelijke mailbox voor eenmalig gebruik.',
    'TrashMail': 'Doorstuuradres dat stopt na een vaste tijd of een vast aantal berichten.',
    'Temp Mail Plus': 'Tijdelijke e-mail met meerdere domeinen om uit te kiezen.',
    'Tempmailo': 'Tijdelijke mailbox voor eenmalig gebruik.',
    'Tempail': 'Wegwerpmailbox zonder registratie.',
    'Mint Email': 'Wegwerpmailbox voor kort gebruik.',
    'Mailnesia': 'Openbare wegwerpmailbox zonder wachtwoord.',
    'MailCatch': 'Openbare tijdelijke mailbox, zonder registratie.',
    'Spamgourmet': 'Doorstuuradressen die stoppen na een vast aantal berichten.',
    'Dispostable': 'Openbare wegwerpmailbox voor snelle aanmeldingen.',
    'Fake Mail Generator': 'Maakt wegwerpadressen op meerdere domeinen.',
    'GetAirMail': 'Tijdelijke mailbox zonder registratie.',
    'Inbox Kitten': 'Openbare wegwerpmailbox met open source code.',
    'Burner Mail': 'Maakt voor elke website een aparte alias die doorstuurt naar je echte mailbox.',
    'addy.io': 'Dienst voor aliassen met doorsturen, vroeger AnonAddy genoemd.',
    '33Mail': 'Aliassen met doorsturen op een eigen subdomein.',
    'Moakt': 'Tijdelijke mailbox zonder registratie.',
    'Minute Inbox': 'Tijdelijke mailbox voor kort gebruik.',
    'Harakirimail': 'Openbare wegwerpmailbox.',
    'Mailsac': 'Wegwerpmailboxen met een API, gebruikt voor tests.',
    'Email Fake': 'Maakt een tijdelijk adres op veel domeinen.',
    'Tmailor': 'Tijdelijke mailbox zonder registratie.',
    'Mail.tm': 'Tijdelijke e-mail met een gratis openbare API.',
    'DiscardMail': 'Openbare wegwerpmailbox, zonder registratie.',
    'Spambog': 'Openbare tijdelijke mailbox met meerdere domeinen.',
    'Fakeinbox': 'Tijdelijke mailbox voor eenmalig gebruik.',
  },
  moreTitle: 'Meer domeinen voor wegwerp e-mail',
  moreIntro: (n) =>
    `Nog ${n} domeinen voor wegwerp- en tijdelijke e-mail, naast de domeinen in de kaarten hierboven. Veel ervan horen bij dezelfde diensten, die extra domeinen registreren om langs blokkeerlijsten te komen. Dit is een klein deel van de volledige lijst van wegwerpdomeinen. De verificatiedienst controleert adressen tegen meer dan 100.000 domeinen en voegt er elke zes uur nieuwe aan toe.`,
  staleNote: 'Een vaste lijst raakt snel verouderd. Controleer een adres liever tegen de actuele lijst.',
  gmailTitle: 'Zijn Gmail, Outlook en Hotmail wegwerpdomeinen?',
  gmailParas: [
    'Nee. Gmail, Outlook, Hotmail, Yahoo en iCloud zijn providers van vaste mailboxen. Mensen houden deze accounts jarenlang. Ze staan daarom op geen enkele lijst van wegwerpdomeinen, en je moet ze niet blokkeren.',
    'Een adres bij Gmail of Outlook kan toch fout zijn. De mailbox bestaat misschien niet, of er zit een typefout in het adres. Dat is een andere controle: of de mailbox echt is, en niet of het domein een wegwerpdomein is. De [email checker](/email-checker) beantwoordt die vraag.',
  ],
  blockTitle: 'Hoe je wegwerp e-mailadressen blokkeert',
  blockIntro: 'Je kunt niet met de hand een lijst bijhouden van alle wegwerpdomeinen. Het zijn er te veel, en ze veranderen elke dag. De betrouwbare manier is elk adres te controleren als het wordt ingevuld, en te handelen op basis van het resultaat.',
  blockItems: [
    '**Bij de aanmelding:** controleer het adres met de [API voor e-mailvalidatie](/email-validation-api) en vraag om een ander adres als het een wegwerpadres is.',
    '**Op een lijst die je al hebt:** haal de lijst door de [dienst om e-maillijsten op te schonen](/email-list-cleaning) om wegwerpadressen, ongeldige adressen en rol-adressen in één keer te verwijderen.',
    '**Eén adres tegelijk:** gebruik de [checker voor wegwerp e-mailadressen](/disposable-email-checker).',
  ],
  faqTitle: 'Vragen over diensten voor tijdelijke e-mailadressen',
  faqs: [
    {
      q: 'Wat is een dienst voor tijdelijke e-mail?',
      a: 'Dat is een dienst die in een paar seconden een tijdelijke mailbox maakt, zonder wachtwoord en zonder registratie. Mensen gebruiken zo’n mailbox om een formulier of een afgeschermde download te gebruiken zonder hun echte adres te geven. Temp-Mail, Mailinator en 10MinuteMail zijn bekende voorbeelden.',
    },
    {
      q: 'Hoe maak ik een tijdelijk e-mailadres?',
      a: 'Kies een dienst uit de lijst op deze pagina. Temp-Mail geeft je meteen een tijdelijke mailbox, zonder registratie. Bij 10MinuteMail verloopt het adres tien minuten na het aanmaken. Bij openbare mailboxen zoals Mailinator kan iedereen die het adres kent je berichten lezen.',
    },
    {
      q: 'Hoeveel wegwerpdomeinen zijn er?',
      a: 'Veel meer dan op deze pagina staan. Eén dienst kan wisselen tussen honderden domeinen, en er komen elke dag nieuwe bij. De verificatiedienst van Giggal controleert adressen tegen een lijst van meer dan 100.000 wegwerpdomeinen die elke zes uur opnieuw wordt opgebouwd.',
    },
    {
      q: 'Zijn Gmail, Outlook en Hotmail wegwerpdomeinen?',
      a: 'Nee. Gmail, Outlook, Hotmail, Yahoo en iCloud zijn providers van vaste mailboxen, geen wegwerpdiensten. Ze staan op geen enkele lijst van wegwerpdomeinen. Een adres op een van deze domeinen kan toch ongeldig zijn als de mailbox niet bestaat. Dat is een andere controle.',
    },
    {
      q: 'Hoe blokkeer ik wegwerpdomeinen?',
      a: 'Controleer elk adres bij de aanmelding. Is het domein een wegwerpdomein, vraag de persoon dan om een ander adres voordat het account wordt aangemaakt. Je kunt dat in je formulieren automatiseren met de API voor e-mailvalidatie, die in realtime antwoordt.',
    },
    {
      q: 'Kan ik de volledige lijst van wegwerpdomeinen downloaden?',
      a: 'Deze pagina toont de bekende domeinen. De volledige lijst staat bij de verificatiedienst en wordt steeds bijgewerkt. De betrouwbare manier om de lijst te gebruiken is dus adressen te controleren via de API, en niet een vast bestand te kopiëren dat snel verouderd raakt.',
    },
    {
      q: 'Wat is het verschil tussen een wegwerpdienst en een aliasdienst?',
      a: 'Een wegwerpdienst geeft je een mailbox die bedoeld is om achter te laten. Een aliasdienst zoals addy.io of 33Mail stuurt mail door naar je echte mailbox, en je kunt de alias later uitzetten. Sommige aliasdomeinen staan op lijsten van wegwerpdomeinen, omdat de persoon je mail op elk moment kan afsluiten. Andere niet, omdat ze doorsturen naar een echte mailbox die iemand leest.',
    },
  ],
  ctaBand: 'Blokkeer wegwerpadressen voordat ze op je lijst komen',
  related: [
    { href: '/disposable-email-checker', label: 'Wegwerp e-mailadres controleren', desc: 'Controleer of één adres een wegwerpadres is.' },
    { href: '/email-validation-api', label: 'API voor e-mailvalidatie', desc: 'Blokkeer aanmeldingen met een wegwerpadres in realtime.' },
    { href: '/email-checker', label: 'Email checker', desc: 'Controleer of een mailbox bestaat.' },
    { href: '/email-list-cleaning', label: 'E-maillijst opschonen', desc: 'Schoon een hele lijst in één keer op.' },
  ],
  itemListName: 'Diensten voor tijdelijke e-mailadressen',
  itemListDesc: 'De bekende diensten voor wegwerp- en tijdelijke e-mail en de domeinen die ze gebruiken.',
  enSuffix: ' (in het Engels)',
}

const PLNB = ' '

const pl: ProvidersStrings = {
  metaTitle: `Tymczasowy adres email: lista usług jednorazowej poczty`,
  ogTitle: `Tymczasowy adres email: lista usług jednorazowej poczty i ich domen`,
  description: `Lista usług, które dają tymczasowy adres email, i domen, z których korzystają. Do tego darmowe sprawdzenie adresu na liście ponad 100${PLNB}000 domen.`,
  ogLocale: 'pl_PL',
  ogAlt: `Giggal.ai: tymczasowy adres email, lista usług i domen`,
  crumb: `Tymczasowy adres email`,
  h1: `Tymczasowy adres email:`,
  h1Accent: `usługi jednorazowej poczty i ich domeny`,
  heroIntro: `Lista usług, które tworzą tymczasowy email, czyli skrzynkę na krótki czas lub do jednorazowego użytku. Usługi są pogrupowane według sposobu działania. Pełna lista domen jednorazowych ma ponad 100${PLNB}000 pozycji i zmienia się codziennie.`,
  ctaCheck: `Sprawdź adres`,
  ctaBlock: `Blokuj je przy rejestracji`,
  kindsTitle: `Cztery rodzaje usług tymczasowej poczty`,
  kindsIntro: `Nie każdy tymczasowy email działa tak samo. Rodzaj usługi mówi, co się stanie z wiadomością wysłaną na taki adres.`,
  categories: {
    timed: { label: `Skrzynka czasowa`, badge: `Czasowa`, desc: `Skrzynka lub jej wiadomości są usuwane po ustalonym czasie.` },
    public: { label: `Skrzynka publiczna`, badge: `Publiczna`, desc: `Każdy, kto zna adres, może ją czytać. Bez hasła.` },
    alias: { label: `Alias lub przekierowanie`, badge: `Alias / przekierowanie`, desc: `Tworzy alias, który przekazuje pocztę do prawdziwej skrzynki. Alias można potem wyłączyć.` },
    api: { label: `API lub dla programistów`, badge: `API / programiści`, desc: `Zbudowana dla skryptów i testów, z API do odczytu wiadomości.` },
  },
  listTitle: `Lista usług, które dają tymczasowy adres email`,
  listIntro: `Najbardziej znane usługi wraz z domenami, z których wysyłają. Wiele z nich używa na zmianę więcej domen, niż pokazujemy tutaj.`,
  blurbs: {
    'Temp-Mail': `Daje losową tymczasową skrzynkę bez rejestracji.`,
    'Mailinator': `Publiczne skrzynki bez hasła. Każdy może czytać dowolny adres.`,
    '10MinuteMail': `Daje adres, który wygasa dziesięć minut po utworzeniu.`,
    'Guerrilla Mail': `Usuwa każdą wiadomość godzinę po jej dotarciu. Używa kilku domen.`,
    'YOPmail': `Publiczne skrzynki bez hasła. Wiadomości są przechowywane przez kilka dni.`,
    'Maildrop': `Publiczna skrzynka do jednorazowych rejestracji. Konto nie jest potrzebne.`,
    'Mohmal': `Usługa tymczasowej skrzynki bez rejestracji.`,
    'EmailOnDeck': `Usługa tymczasowej skrzynki bez zakładania konta.`,
    'Dropmail': `Tymczasowa poczta z API. Używa na zmianę wielu domen.`,
    'ThrowawayMail': `Tymczasowa skrzynka do jednorazowego użytku.`,
    'TrashMail': `Adres przekierowujący, który przestaje działać po ustalonym czasie lub liczbie wiadomości.`,
    'Temp Mail Plus': `Tymczasowa poczta z kilkoma domenami do wyboru.`,
    'Tempmailo': `Tymczasowa skrzynka do jednorazowego użytku.`,
    'Tempail': `Jednorazowa skrzynka bez rejestracji.`,
    'Mint Email': `Jednorazowa skrzynka do krótkiego użytku.`,
    'Mailnesia': `Publiczna jednorazowa skrzynka bez hasła.`,
    'MailCatch': `Publiczna tymczasowa skrzynka, bez rejestracji.`,
    'Spamgourmet': `Adresy przekierowujące, które przestają działać po ustalonej liczbie wiadomości.`,
    'Dispostable': `Publiczna jednorazowa skrzynka do szybkich rejestracji.`,
    'Fake Mail Generator': `Tworzy jednorazowe adresy w kilku domenach.`,
    'GetAirMail': `Tymczasowa skrzynka bez rejestracji.`,
    'Inbox Kitten': `Publiczna jednorazowa skrzynka o otwartym kodzie źródłowym.`,
    'Burner Mail': `Tworzy osobny alias dla każdej strony, który przekazuje pocztę do twojej prawdziwej skrzynki.`,
    'addy.io': `Usługa aliasów z przekierowaniem, wcześniej o nazwie AnonAddy.`,
    '33Mail': `Aliasy z przekierowaniem w osobistej subdomenie.`,
    'Moakt': `Tymczasowa skrzynka bez rejestracji.`,
    'Minute Inbox': `Tymczasowa skrzynka do krótkiego użytku.`,
    'Harakirimail': `Publiczna jednorazowa skrzynka.`,
    'Mailsac': `Jednorazowe skrzynki z API, używane do testów.`,
    'Email Fake': `Tworzy tymczasowy adres w wielu domenach.`,
    'Tmailor': `Tymczasowa skrzynka bez rejestracji.`,
    'Mail.tm': `Tymczasowa poczta z darmowym publicznym API.`,
    'DiscardMail': `Publiczna jednorazowa skrzynka, bez rejestracji.`,
    'Spambog': `Publiczna tymczasowa skrzynka z kilkoma domenami.`,
    'Fakeinbox': `Tymczasowa skrzynka do jednorazowego użytku.`,
  },
  moreTitle: `Więcej domen tymczasowej poczty`,
  moreIntro: (n) =>
    `Kolejne domeny jednorazowe i tymczasowe, poza tymi z kart usług powyżej. Liczba domen w tej sekcji: ${n}. Wiele z nich należy do tych samych usług, które rejestrują dodatkowe domeny, aby ominąć listy blokujące. To tylko mała część pełnej listy domen jednorazowej poczty. Usługa weryfikacji sprawdza adresy na liście ponad 100${PLNB}000 domen i co sześć godzin dodaje nowe.`,
  staleNote: `Statyczna lista szybko się dezaktualizuje. Zamiast tego sprawdź adres na aktualnej liście.`,
  gmailTitle: `Czy Gmail, Outlook albo Hotmail to domeny tymczasowej poczty?`,
  gmailParas: [
    `Nie. Gmail, Outlook, Hotmail, Yahoo i iCloud to dostawcy stałych skrzynek pocztowych. Ludzie korzystają z tych kont latami, więc nie ma ich na żadnej liście domen jednorazowych i nie należy ich blokować.`,
    `Adres w Gmailu albo Outlooku może mimo to być błędny. Skrzynka może nie istnieć albo adres może zawierać literówkę. To osobny test: czy skrzynka jest prawdziwa, a nie czy domena jest jednorazowa. Na to pytanie odpowiada [weryfikator email](/email-checker).`,
  ],
  blockTitle: `Jak blokować tymczasowe adresy e-mail`,
  blockIntro: `Nie da się ręcznie prowadzić listy wszystkich domen jednorazowych. Jest ich za dużo i zmieniają się codziennie. Pewny sposób to sprawdzanie każdego adresu w chwili wpisania i działanie zgodnie z wynikiem.`,
  blockItems: [
    `**Przy rejestracji:** sprawdź adres za pomocą [API do walidacji e-mail](/email-validation-api) i poproś o inny adres, jeśli ten jest jednorazowy.`,
    `**Na liście, którą już masz:** użyj usługi [czyszczenia listy mailingowej](/email-list-cleaning), aby za jednym razem usunąć adresy jednorazowe, nieprawidłowe i funkcyjne.`,
    `**Jeden adres naraz:** [sprawdź jednorazowy email](/disposable-email-checker) w naszym darmowym narzędziu.`,
  ],
  faqTitle: `Pytania o tymczasowy adres email i usługi jednorazowej poczty`,
  faqs: [
    {
      q: `Co to jest usługa tymczasowej poczty?`,
      a: `To usługa, która w kilka sekund tworzy email tymczasowy, bez hasła i bez rejestracji. Ludzie używają jej, aby przejść przez formularz albo pobrać plik bez podawania prawdziwego adresu. Popularne przykłady to Temp-Mail, Mailinator i 10MinuteMail.`,
    },
    {
      q: `Ile jest domen tymczasowej poczty?`,
      a: `Dużo więcej niż na tej stronie. Jedna usługa może używać na zmianę setek domen, a nowe pojawiają się codziennie. Usługa weryfikacji Giggal sprawdza adresy na liście ponad 100${PLNB}000 domen jednorazowych, budowanej od nowa co sześć godzin.`,
    },
    {
      q: `Czy Gmail, Outlook albo Hotmail to domeny tymczasowej poczty?`,
      a: `Nie. Gmail, Outlook, Hotmail, Yahoo i iCloud to dostawcy stałych skrzynek pocztowych, a nie usługi jednorazowe. Nie ma ich na żadnej liście domen jednorazowych. Adres w jednej z tych domen może mimo to być nieprawidłowy, jeśli skrzynka nie istnieje. To osobny test.`,
    },
    {
      q: `Jak blokować domeny tymczasowej poczty?`,
      a: `Sprawdzaj każdy adres przy rejestracji. Jeśli domena jest jednorazowa, poproś o inny adres, zanim powstanie konto. Możesz to zautomatyzować w formularzach za pomocą API do walidacji e-mail, które odpowiada w czasie rzeczywistym.`,
    },
    {
      q: `Czy mogę pobrać pełną listę domen jednorazowych?`,
      a: `Ta strona pokazuje najbardziej znane domeny. Pełną listę prowadzi usługa weryfikacji i aktualizuje ją na bieżąco. Pewny sposób to więc sprawdzanie adresów przez API, a nie kopiowanie statycznego pliku, który szybko się dezaktualizuje.`,
    },
    {
      q: `Czym różni się usługa tymczasowej poczty od usługi aliasów?`,
      a: `Usługa tymczasowej poczty daje skrzynkę, którą się porzuca. Usługa aliasów, taka jak addy.io albo 33Mail, przekazuje pocztę do twojej prawdziwej skrzynki i pozwala później wyłączyć alias. Niektóre domeny aliasów są na listach domen jednorazowych, bo osoba, która używa aliasu, może w każdej chwili przestać odbierać twoją pocztę. Inne nie są, bo przekazują pocztę do prawdziwej skrzynki, którą ktoś czyta.`,
    },
  ],
  ctaBand: `Blokuj tymczasowe adresy e-mail, zanim trafią na twoją listę`,
  related: [
    { href: '/disposable-email-checker', label: `Sprawdź jednorazowy email`, desc: `Sprawdź, czy jeden adres jest jednorazowy.` },
    { href: '/email-validation-api', label: `API do walidacji e-mail`, desc: `Blokuj jednorazowe rejestracje w czasie rzeczywistym.` },
    { href: '/email-checker', label: `Weryfikator email`, desc: `Sprawdź, czy skrzynka istnieje.` },
    { href: '/email-list-cleaning', label: `Czyszczenie listy mailingowej`, desc: `Wyczyść całą listę za jednym razem.` },
  ],
  itemListName: `Usługi tymczasowej poczty`,
  itemListDesc: `Główne usługi, które dają tymczasowy adres email, i domeny, z których korzystają.`,
  enSuffix: ' (po angielsku)',
}

// Indonesian. Keyword plan (SEO-Plan/i18n-batch2-id-keyword-plan.md): the page
// is a list of temporary email services for the "email sementara" intent
// (16.000/mo), like the Polish page. Must appear: email sementara, email
// temporary, email sementara gratis, email palsu, buat email sementara.
// "email sekali pakai" is the standard term for disposable email.
const id: ProvidersStrings = {
  metaTitle: 'Email Sementara Gratis: daftar layanan email temporary',
  ogTitle: 'Email sementara: daftar layanan email temporary dan domainnya',
  description: 'Daftar layanan email sementara gratis dan domain yang mereka pakai, dari email temporary sampai email palsu. Plus cek gratis terhadap lebih dari 100.000 domain.',
  ogLocale: 'id_ID',
  ogAlt: 'Giggal.ai: email sementara, daftar layanan dan domain',
  crumb: 'Email sementara',
  h1: 'Email sementara:',
  h1Accent: 'daftar layanan dan domainnya',
  heroIntro: 'Daftar layanan untuk buat email sementara, yaitu kotak masuk untuk waktu singkat atau untuk sekali pakai. Orang juga menyebutnya email temporary atau email palsu. Layanan dikelompokkan menurut cara kerjanya. Daftar lengkap domain email sekali pakai berisi lebih dari 100.000 domain dan berubah setiap hari.',
  ctaCheck: 'Cek sebuah alamat',
  ctaBlock: 'Blokir saat pendaftaran',
  kindsTitle: 'Empat jenis layanan email sementara',
  kindsIntro: 'Tidak semua email sementara bekerja dengan cara yang sama. Jenis layanannya menunjukkan apa yang terjadi pada pesan yang Anda kirim ke alamat seperti itu.',
  categories: {
    timed: { label: 'Kotak masuk berbatas waktu', badge: 'Berbatas waktu', desc: 'Kotak masuk atau pesannya dihapus setelah waktu tertentu.' },
    public: { label: 'Kotak masuk publik', badge: 'Publik', desc: 'Siapa pun yang tahu alamatnya bisa membaca kotak masuk itu. Tanpa kata sandi.' },
    alias: { label: 'Alias atau penerusan', badge: 'Alias / penerusan', desc: 'Membuat alias yang meneruskan email ke kotak masuk asli. Alias itu bisa dimatikan nanti.' },
    api: { label: 'API atau developer', badge: 'API / developer', desc: 'Dibuat untuk skrip dan pengujian, dengan API untuk membaca pesan.' },
  },
  listTitle: 'Daftar layanan email sementara',
  listIntro: 'Layanan yang paling dikenal, beserta domain yang dipakai setiap layanan untuk mengirim email. Banyak layanan bergantian memakai lebih banyak domain daripada yang tercantum di sini.',
  blurbs: {
    'Temp-Mail': 'Memberi kotak masuk sementara secara acak, tanpa daftar.',
    'Mailinator': 'Kotak masuk publik tanpa kata sandi. Siapa pun bisa membaca alamat mana pun.',
    '10MinuteMail': 'Email sementara 10 menit: alamatnya kedaluwarsa sepuluh menit setelah dibuat.',
    'Guerrilla Mail': 'Menghapus setiap pesan satu jam setelah pesan itu masuk. Memakai beberapa domain.',
    'YOPmail': 'Kotak masuk publik tanpa kata sandi. Pesan disimpan selama beberapa hari.',
    'Maildrop': 'Kotak masuk publik untuk pendaftaran sekali pakai. Tidak perlu akun.',
    'Mohmal': 'Layanan kotak masuk sementara, tanpa daftar.',
    'EmailOnDeck': 'Layanan kotak masuk sementara, tanpa membuat akun.',
    'Dropmail': 'Email sementara dengan API. Bergantian memakai banyak domain.',
    'ThrowawayMail': 'Kotak masuk sementara untuk sekali pakai.',
    'TrashMail': 'Alamat penerusan yang berhenti setelah waktu tertentu atau setelah sejumlah pesan.',
    'Temp Mail Plus': 'Email sementara dengan beberapa domain yang bisa dipilih.',
    'Tempmailo': 'Kotak masuk sementara untuk sekali pakai.',
    'Tempail': 'Kotak masuk sekali pakai tanpa daftar.',
    'Mint Email': 'Kotak masuk sekali pakai untuk pemakaian singkat.',
    'Mailnesia': 'Kotak masuk sekali pakai yang publik, tanpa kata sandi.',
    'MailCatch': 'Kotak masuk sementara yang publik, tanpa daftar.',
    'Spamgourmet': 'Alamat penerusan yang berhenti setelah sejumlah pesan.',
    'Dispostable': 'Kotak masuk sekali pakai yang publik untuk pendaftaran cepat.',
    'Fake Mail Generator': 'Membuat alamat sekali pakai di beberapa domain.',
    'GetAirMail': 'Kotak masuk sementara tanpa daftar.',
    'Inbox Kitten': 'Kotak masuk sekali pakai yang publik, dengan kode sumber terbuka.',
    'Burner Mail': 'Membuat alias terpisah untuk setiap situs web, yang meneruskan email ke kotak masuk asli Anda.',
    'addy.io': 'Layanan alias dengan penerusan, dulu bernama AnonAddy.',
    '33Mail': 'Alias dengan penerusan di subdomain pribadi.',
    'Moakt': 'Kotak masuk sementara tanpa daftar.',
    'Minute Inbox': 'Kotak masuk sementara untuk pemakaian singkat.',
    'Harakirimail': 'Kotak masuk sekali pakai yang publik.',
    'Mailsac': 'Kotak masuk sekali pakai dengan API, dipakai untuk pengujian.',
    'Email Fake': 'Membuat alamat sementara di banyak domain.',
    'Tmailor': 'Kotak masuk sementara tanpa daftar.',
    'Mail.tm': 'Email sementara dengan API publik gratis.',
    'DiscardMail': 'Kotak masuk sekali pakai yang publik, tanpa daftar.',
    'Spambog': 'Kotak masuk sementara yang publik dengan beberapa domain.',
    'Fakeinbox': 'Kotak masuk sementara untuk sekali pakai.',
  },
  moreTitle: 'Domain email sementara lainnya',
  moreIntro: (n) =>
    `${n} domain email sekali pakai dan email sementara lainnya, di luar domain pada kartu layanan di atas. Banyak di antaranya milik layanan yang sama, yang mendaftarkan domain tambahan agar lolos dari daftar blokir. Ini hanya sebagian kecil dari daftar lengkap domain email sekali pakai. Layanan verifikasi mengecek alamat terhadap lebih dari 100.000 domain dan menambahkan domain baru setiap enam jam.`,
  staleNote: 'Daftar statis cepat usang. Lebih baik cek alamat terhadap daftar yang terbaru.',
  gmailTitle: 'Apakah Gmail, Outlook, dan Hotmail termasuk domain email sementara?',
  gmailParas: [
    'Tidak. Gmail, Outlook, Hotmail, Yahoo, dan iCloud adalah penyedia kotak masuk tetap. Orang memakai akun ini selama bertahun-tahun. Karena itu domain ini tidak ada di daftar domain email sekali pakai mana pun, dan Anda sebaiknya tidak memblokirnya.',
    'Alamat Gmail atau Outlook tetap bisa salah. Kotak masuknya mungkin tidak ada, atau ada salah ketik di alamatnya. Itu pemeriksaan yang berbeda: apakah kotak masuknya nyata, bukan apakah domainnya sekali pakai. [Email checker](/email-checker) menjawab pertanyaan itu.',
  ],
  blockTitle: 'Cara memblokir email sementara',
  blockIntro: 'Anda tidak bisa menyimpan daftar semua domain email sekali pakai secara manual. Jumlahnya terlalu banyak dan berubah setiap hari. Cara yang bisa diandalkan adalah mengecek setiap alamat saat diisi, lalu bertindak sesuai hasilnya.',
  blockItems: [
    '**Saat pendaftaran:** cek alamatnya dengan [API validasi email](/email-validation-api) dan minta alamat lain jika alamat itu sekali pakai.',
    '**Pada daftar yang sudah Anda punya:** jalankan daftar itu lewat [layanan pembersihan daftar email](/email-list-cleaning) untuk menghapus alamat sekali pakai, alamat tidak valid, dan alamat berbasis peran sekaligus.',
    '**Satu alamat sekali jalan:** pakai alat [cek email sementara](/disposable-email-checker) kami yang gratis.',
  ],
  faqTitle: 'Pertanyaan tentang email sementara dan layanannya',
  faqs: [
    {
      q: 'Apa itu layanan email sementara?',
      a: 'Layanan email sementara membuat kotak masuk sementara dalam beberapa detik, tanpa kata sandi dan tanpa daftar. Orang memakai kotak masuk seperti itu untuk mengisi formulir atau mengunduh file tanpa memberikan alamat asli mereka. Temp-Mail, Mailinator, dan 10MinuteMail adalah contoh yang dikenal.',
    },
    {
      q: 'Bagaimana cara buat email sementara?',
      a: 'Pilih layanan dari daftar di halaman ini. Banyak di antaranya adalah layanan email sementara gratis. Temp-Mail langsung memberi Anda kotak masuk sementara, tanpa daftar. Di 10MinuteMail, alamatnya kedaluwarsa sepuluh menit setelah dibuat. Di kotak masuk publik seperti Mailinator, siapa pun yang tahu alamatnya bisa membaca pesan Anda.',
    },
    {
      q: 'Ada berapa domain email sementara?',
      a: 'Jauh lebih banyak daripada yang ada di halaman ini. Satu layanan bisa bergantian memakai ratusan domain, dan domain baru muncul setiap hari. Layanan verifikasi Giggal mengecek alamat terhadap daftar lebih dari 100.000 domain email sekali pakai yang disusun ulang setiap enam jam.',
    },
    {
      q: 'Apakah Gmail, Outlook, dan Hotmail termasuk domain email sementara?',
      a: 'Tidak. Gmail, Outlook, Hotmail, Yahoo, dan iCloud adalah penyedia kotak masuk tetap, bukan layanan sekali pakai. Domain ini tidak ada di daftar domain email sekali pakai mana pun. Alamat di salah satu domain ini tetap bisa tidak valid jika kotak masuknya tidak ada. Itu pemeriksaan yang berbeda.',
    },
    {
      q: 'Bagaimana cara memblokir domain email sementara?',
      a: 'Cek setiap alamat saat pendaftaran. Jika domainnya sekali pakai, minta alamat lain sebelum akun dibuat. Anda bisa mengotomatiskannya di formulir dengan API validasi email, yang menjawab secara real-time.',
    },
    {
      q: 'Bisakah saya mengunduh daftar lengkap domain email sekali pakai?',
      a: 'Halaman ini menampilkan domain yang paling dikenal. Daftar lengkapnya ada di layanan verifikasi dan terus diperbarui. Jadi cara yang bisa diandalkan adalah mengecek alamat lewat API, bukan menyalin file statis yang cepat usang.',
    },
    {
      q: 'Apa bedanya layanan email sementara dan layanan alias?',
      a: 'Layanan email sementara memberi Anda kotak masuk yang memang dibuat untuk ditinggalkan. Layanan alias seperti addy.io atau 33Mail meneruskan email ke kotak masuk asli Anda, dan Anda bisa mematikan alias itu nanti. Sebagian domain alias ada di daftar domain email sekali pakai, karena orangnya bisa berhenti menerima email Anda kapan saja. Sebagian lain tidak, karena meneruskan email ke kotak masuk asli yang dibaca seseorang.',
    },
  ],
  ctaBand: 'Blokir email sementara sebelum masuk ke daftar Anda',
  related: [
    { href: '/disposable-email-checker', label: 'Cek email sementara', desc: 'Cek apakah satu alamat adalah email sekali pakai.' },
    { href: '/email-validation-api', label: 'API validasi email', desc: 'Blokir pendaftaran dengan alamat sekali pakai secara real-time.' },
    { href: '/email-checker', label: 'Email checker', desc: 'Cek apakah sebuah kotak masuk ada.' },
    { href: '/email-list-cleaning', label: 'Membersihkan daftar email', desc: 'Bersihkan seluruh daftar sekaligus.' },
  ],
  itemListName: 'Layanan email sementara',
  itemListDesc: 'Layanan utama untuk email sementara dan email sekali pakai, beserta domain yang mereka pakai.',
  enSuffix: ' (dalam bahasa Inggris)',
}

export const PROVIDERS_STRINGS: Record<Locale, ProvidersStrings> = { en, it, de, es, 'pt-br': ptBr, fr, nl, pl, id }
