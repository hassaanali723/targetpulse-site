// All text for the disposable email checker, in six languages. The page is
// components/disposable/CheckerPage.tsx; the URLs live in
// CLUSTERS.disposableChecker (lib/i18n/clusters.ts).
//
// Inline markup in toolNote, why[].text and bulkParas: **bold** and
// [label](/english-path). Paths are always English; the page routes each one to
// the reader's language when that page exists and marks it hreflang="en" when
// it does not.
//
// Same terms and register as the providers directory
// (lib/i18n/disposableProvidersStrings.ts). The tool's "valid" wording matches
// each language's existing console result title (Valida, Gültig, Válido, Valide).
// French: no-break space before ? and :, inside « », and in 100 000.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'
import type { DisposableConsoleStrings } from '@/components/landing/VerifierConsole'

const NB = ' '

export interface CheckerStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  ogAlt: string
  crumb: string
  h1: string
  h1Accent: string
  heroIntro: string
  toolNote: string
  howTitle: string
  howIntro: string
  /** Four steps, in order. */
  how: [ { title: string; text: string }, { title: string; text: string }, { title: string; text: string }, { title: string; text: string } ]
  servicesTitle: string
  servicesIntro: string
  services: { name: string; desc: string }[]
  viewAll: string
  whyTitle: string
  whyIntro: string
  /** Three cards: emails nobody reads, free trial abuse, wrong CRM numbers. */
  why: [ { title: string; text: string }, { title: string; text: string }, { title: string; text: string } ]
  bulkTitle: string
  bulkParas: string[]
  faqTitle: string
  faqs: FaqItem[]
  ctaBand: string
  related: { href: string; label: string }[]
  /** Tool labels; absent for English, which uses the console's defaults. */
  console?: DisposableConsoleStrings
  /** Appended to a related-link label whose target exists only in English. */
  enSuffix: string
}

const en: CheckerStrings = {
  metaTitle: 'Disposable Email Checker: Detect Fake & Temp Inboxes | Giggal.ai',
  ogTitle: 'Free Disposable Email Checker: Detect Fake & Temporary Inboxes',
  description:
    'Free disposable email checker to detect fake and temporary inboxes. Checks 100,000+ disposable domains, updated every six hours. No signup needed.',
  ogAlt: 'Giggal.ai disposable email checker',
  crumb: 'Disposable Email Checker',
  h1: 'Free disposable email checker to',
  h1Accent: 'detect fake & temporary inboxes',
  heroIntro:
    'Enter an email address to see whether it uses a disposable or temporary mail service. The domain is matched against 100,000+ disposable domains, updated every six hours.',
  toolNote:
    'Five free checks an hour, no signup. This tool tells you whether the domain is disposable. To find out whether the mailbox exists, use the [free email checker](/email-checker).',
  howTitle: 'How the disposable email check works',
  howIntro:
    'Disposable services register new domains all the time. A list that is not updated misses them. This is why the check runs on the Giggal verification service and not on a file inside this website.',
  how: [
    {
      title: 'Address format check',
      text: 'The tool checks that the address has a valid format: a local part, one @ sign and a domain. This runs before anything is sent to the server.',
    },
    {
      title: 'Domain check against 100,000+ disposable domains',
      text: 'The domain is matched against the disposable list held by the Giggal verification service. Subdomains of a listed domain count as disposable. The list is rebuilt every six hours and our team adds manual corrections.',
    },
    {
      title: 'Result',
      text: 'The tool reports "disposable" or "not disposable". Not disposable means the domain is not a known temporary mail service. It does not mean the mailbox exists.',
    },
    {
      title: 'Deliverability is a separate check',
      text: 'To find out whether the mailbox exists and accepts mail, use the free email checker. It checks whether the mailbox exists. This page only answers the disposable question.',
    },
  ],
  servicesTitle: 'Common disposable email services',
  servicesIntro:
    'These are some of the services on the list. The list also covers the many smaller domains these services register and switch between.',
  services: [
    { name: 'Temp-Mail', desc: 'Gives a random temporary inbox with no signup.' },
    { name: 'Mailinator', desc: 'Public inboxes. Anyone can read the mail without a password.' },
    { name: '10MinuteMail', desc: 'Inbox that expires ten minutes after it is created.' },
    { name: 'Guerrilla Mail', desc: 'Deletes each message one hour after it arrives.' },
    { name: 'ThrowawayMail', desc: 'Temporary inbox for one-time signups.' },
    { name: 'Yopmail', desc: 'Public inboxes with no password. Messages are kept for a few days.' },
    { name: 'SharkLasers', desc: 'One of the domains used by Guerrilla Mail.' },
    { name: 'TrashMail', desc: 'Temporary forwarding addresses that stop working after a set time.' },
  ],
  viewAll: 'View all disposable email providers',
  whyTitle: 'Why block disposable email addresses',
  whyIntro:
    'A disposable address is not a contact. The person will not see anything you send after the first few minutes. Three problems follow from that:',
  why: [
    {
      title: 'Emails nobody reads',
      text: 'Welcome emails, receipts and onboarding sequences go to an inbox that is gone or never opened. Some services reject the mail after the inbox expires, which shows up as a bounce in your reports.',
    },
    {
      title: 'Free trial abuse',
      text: 'One person can create many trial accounts with a new disposable address each time. Blocking these addresses at signup stops most of it. You can automate this on registration forms with our [email validation API](/email-validation-api).',
    },
    {
      title: 'Wrong numbers in your CRM',
      text: 'Disposable signups count as leads but never reply, open or buy. They make your signup numbers look better and your conversion rate look worse than they are.',
    },
  ],
  bulkTitle: 'Single check or bulk check',
  bulkParas: [
    'The tool above checks one address at a time. It is useful for a suspicious signup or a single lead. For a whole list, one address at a time is too slow.',
    'In the Giggal dashboard you can upload a CSV or TXT file to our [email list cleaning service](/email-list-cleaning) and check the whole list at once. Every address is checked for disposable domains, role accounts such as info@ or sales@, and whether the mailbox exists. On [catch-all domains](/catch-all-verification), where a standard check cannot confirm a mailbox, Giggal runs a deeper check. A free account comes with 1,000 credits.',
  ],
  faqTitle: 'Questions about disposable email checking',
  faqs: [
    {
      q: 'What is a disposable email address?',
      a: 'A disposable email address is a temporary inbox from a service such as Mailinator, Temp-Mail or 10MinuteMail. Anyone can create one in seconds without a password. People use them to get past a signup form or a gated download without giving a real address. The inbox is deleted after a set time, or the person never opens it again.',
    },
    {
      q: 'How does this disposable email checker work?',
      a: 'It sends the address to the Giggal verification service. The service holds a list of 100,000+ disposable and temporary mail domains. The list is rebuilt from public sources every six hours, and our team adds manual corrections. If the domain, or a parent domain, is on the list, the tool reports it as disposable. If not, the tool reports it as not disposable.',
    },
    {
      q: 'Does "not disposable" mean the address is valid?',
      a: 'No. It means the domain is not a known disposable mail service. The mailbox may still not exist. To check that, run the address through the free email checker. It does a live mailbox check and tells you whether the address can receive mail.',
    },
    {
      q: 'Will sending to a disposable email bounce?',
      a: 'Sometimes. Some services accept every message and delete it after a set time. Others close the inbox after a few minutes and reject mail after that. In both cases the person will not read your email later. Treat the address as unusable either way.',
    },
    {
      q: 'Is this disposable email checker free?',
      a: 'Yes. You get 5 free checks an hour with no signup. To check a whole list, sign up for a free account. It comes with 1,000 verification credits.',
    },
    {
      q: 'How do I block disposable emails on signup forms?',
      a: 'Connect Giggal to your form or app through the API or the Zapier integration. Each address is checked when it is submitted. If it is disposable, you can ask the person for a different address before the account is created.',
    },
    {
      q: 'What is the difference between a disposable email and a free email provider?',
      a: 'A free provider such as Gmail, Yahoo or Outlook gives people a permanent mailbox with a password. A disposable service gives people a temporary mailbox that is meant to be thrown away. Giggal flags disposable addresses and leaves normal free mailboxes alone.',
    },
    {
      q: 'Can I check disposable emails in bulk?',
      a: 'Yes. Upload a CSV or TXT file in the Giggal dashboard. Every address is checked for disposable domains, role accounts, catch-all domains and whether the mailbox exists.',
    },
  ],
  ctaBand: 'Block disposable emails and clean your list',
  related: [
    { href: '/email-validation-api', label: 'email validation API: block disposable signups in real time' },
    { href: '/email-checker', label: 'free email checker: does this mailbox exist?' },
    { href: '/catch-all-verification', label: 'verify catch-all and risky emails' },
    { href: '/seg-email-verification', label: 'verify emails behind secure email gateways' },
    { href: '/pricing', label: 'pricing, credits and plans' },
  ],
  enSuffix: '',
}

const it: CheckerStrings = {
  metaTitle: 'Verifica Gratis le Email Temporanee e Usa e Getta | Giggal.ai',
  ogTitle: 'Verifica email temporanea gratis: scopri le email false e usa e getta',
  description:
    'Verifica gratuita delle email temporanee per scoprire le email false e usa e getta. Controlla oltre 100.000 domini usa e getta, aggiornati ogni sei ore.',
  ogLocale: 'it_IT',
  ogAlt: 'Giggal.ai verifica email temporanea',
  crumb: 'Verifica email temporanea',
  h1: 'Verifica gratuita delle email temporanee per',
  h1Accent: 'scoprire email false e usa e getta',
  heroIntro:
    'Inserisci un indirizzo email per sapere se usa un servizio di posta usa e getta o temporanea. Il dominio viene confrontato con oltre 100.000 domini usa e getta, aggiornati ogni sei ore.',
  toolNote:
    "Cinque controlli gratuiti all'ora, senza registrazione. Questo strumento ti dice se il dominio è usa e getta. Per sapere se la casella esiste, usa la [verifica email gratuita](/email-checker).",
  howTitle: 'Come funziona il controllo delle email usa e getta',
  howIntro:
    'I servizi usa e getta registrano nuovi domini di continuo. Una lista che non viene aggiornata li perde. Per questo il controllo gira sul servizio di verifica di Giggal e non su un file dentro questo sito.',
  how: [
    {
      title: 'Controllo del formato',
      text: "Lo strumento controlla che l'indirizzo abbia un formato valido: una parte locale, una sola @ e un dominio. Questo avviene prima di inviare qualcosa al server.",
    },
    {
      title: 'Controllo del dominio su oltre 100.000 domini usa e getta',
      text: 'Il dominio viene confrontato con la lista usa e getta del servizio di verifica di Giggal. I sottodomini di un dominio in lista contano come usa e getta. La lista viene ricostruita ogni sei ore e il nostro team aggiunge correzioni manuali.',
    },
    {
      title: 'Risultato',
      text: 'Lo strumento risponde "usa e getta" o "non usa e getta". Non usa e getta vuol dire che il dominio non è un servizio di posta temporanea noto. Non vuol dire che la casella esiste.',
    },
    {
      title: 'La validità è un controllo a parte',
      text: "Per sapere se la casella esiste e riceve posta, usa la verifica email gratuita. Verifica se l'indirizzo email esiste. Questa pagina risponde solo alla domanda sull'usa e getta.",
    },
  ],
  servicesTitle: 'Servizi di email usa e getta comuni',
  servicesIntro:
    'Questi sono alcuni dei servizi in lista. La lista copre anche i tanti domini minori che questi servizi registrano e usano a rotazione.',
  services: [
    { name: 'Temp-Mail', desc: 'Fornisce una casella temporanea casuale senza registrazione.' },
    { name: 'Mailinator', desc: 'Caselle pubbliche. Chiunque può leggere la posta senza password.' },
    { name: '10MinuteMail', desc: 'Casella che scade dieci minuti dopo la creazione.' },
    { name: 'Guerrilla Mail', desc: "Cancella ogni messaggio un'ora dopo l'arrivo." },
    { name: 'ThrowawayMail', desc: 'Casella temporanea per registrazioni una tantum.' },
    { name: 'Yopmail', desc: 'Caselle pubbliche senza password. I messaggi restano per alcuni giorni.' },
    { name: 'SharkLasers', desc: 'Uno dei domini usati da Guerrilla Mail.' },
    { name: 'TrashMail', desc: 'Indirizzi di inoltro temporanei che smettono di funzionare dopo un tempo fissato.' },
  ],
  viewAll: 'Vedi tutti i servizi di email temporanea',
  whyTitle: 'Perché bloccare gli indirizzi email usa e getta',
  whyIntro:
    'Un indirizzo usa e getta non è un contatto. La persona non vedrà nulla di quello che invii dopo i primi minuti. Da qui nascono tre problemi:',
  why: [
    {
      title: 'Email che nessuno legge',
      text: 'Email di benvenuto, ricevute e sequenze di onboarding finiscono in una casella che non esiste più o che nessuno apre. Alcuni servizi rifiutano la posta dopo la scadenza della casella, e nei tuoi report questo compare come rimbalzo.',
    },
    {
      title: 'Abuso delle prove gratuite',
      text: 'Una persona può creare molti account di prova con un nuovo indirizzo usa e getta ogni volta. Bloccare questi indirizzi alla registrazione ne ferma la maggior parte. Puoi automatizzarlo nei moduli di registrazione con la nostra [API di validazione email](/email-validation-api).',
    },
    {
      title: 'Numeri sbagliati nel CRM',
      text: 'Le registrazioni usa e getta contano come lead ma non rispondono, non aprono e non comprano. Fanno sembrare le registrazioni migliori e il tasso di conversione peggiore di quanto sono.',
    },
  ],
  bulkTitle: 'Controllo singolo o controllo in blocco',
  bulkParas: [
    "Lo strumento qui sopra controlla un indirizzo alla volta. È utile per una registrazione sospetta o un singolo lead. Per un'intera lista, un indirizzo alla volta è troppo lento.",
    "Nella dashboard di Giggal puoi caricare un file CSV o TXT nel nostro [servizio di pulizia della lista email](/email-list-cleaning) e controllare tutta la lista in una volta. Ogni indirizzo viene controllato per domini usa e getta, account di ruolo come info@ o sales@ e per capire se esiste davvero. Sui [domini catch-all](/catch-all-verification), dove un controllo standard non può confermare una casella, Giggal esegue un controllo più approfondito. Un account gratuito include 1.000 crediti.",
  ],
  faqTitle: 'Domande sul controllo delle email usa e getta',
  faqs: [
    {
      q: "Cos'è un indirizzo email usa e getta?",
      a: 'Un indirizzo email usa e getta è una casella temporanea di un servizio come Mailinator, Temp-Mail o 10MinuteMail. Chiunque può crearne una in pochi secondi senza password. Le persone le usano per superare un modulo di registrazione o scaricare un contenuto senza dare un indirizzo reale. La casella viene cancellata dopo un tempo fissato, oppure la persona non la apre più.',
    },
    {
      q: 'Come funziona questo controllo delle email usa e getta?',
      a: "Invia l'indirizzo al servizio di verifica di Giggal. Il servizio ha una lista di oltre 100.000 domini di posta usa e getta e temporanea. La lista viene ricostruita da fonti pubbliche ogni sei ore e il nostro team aggiunge correzioni manuali. Se il dominio, o il suo dominio principale, è in lista, lo strumento lo segnala come usa e getta. Altrimenti lo segnala come non usa e getta.",
    },
    {
      q: '"Non usa e getta" vuol dire che l\'indirizzo è valido?',
      a: "No. Vuol dire che il dominio non è un servizio di posta usa e getta noto. La casella potrebbe comunque non esistere. Per controllarlo, usa la verifica email gratuita. Fa un controllo dal vivo della casella e ti dice se l'indirizzo può ricevere posta.",
    },
    {
      q: 'Inviare a un indirizzo usa e getta causa un rimbalzo?',
      a: "A volte. Alcuni servizi accettano ogni messaggio e lo cancellano dopo un tempo fissato. Altri chiudono la casella dopo pochi minuti e da lì rifiutano la posta. In entrambi i casi la persona non leggerà la tua email più tardi. Considera l'indirizzo inutilizzabile in ogni caso.",
    },
    {
      q: 'Questo controllo delle email usa e getta è gratuito?',
      a: "Sì. Hai 5 controlli gratuiti all'ora senza registrazione. Per controllare un'intera lista, crea un account gratuito. Include 1.000 crediti di verifica.",
    },
    {
      q: 'Come blocco le email usa e getta nei moduli di registrazione?',
      a: "Collega Giggal al tuo modulo o alla tua app tramite l'API o l'integrazione con Zapier. Ogni indirizzo viene controllato quando viene inviato. Se è usa e getta, puoi chiedere alla persona un altro indirizzo prima di creare l'account.",
    },
    {
      q: "Che differenza c'è tra un'email usa e getta e un provider di email gratuito?",
      a: 'Un provider gratuito come Gmail, Yahoo o Outlook dà alle persone una casella permanente con una password. Un servizio usa e getta dà una casella temporanea fatta per essere buttata. Giggal segnala gli indirizzi usa e getta e lascia stare le normali caselle gratuite.',
    },
    {
      q: 'Posso controllare le email usa e getta in blocco?',
      a: "Sì. Carica un file CSV o TXT nella dashboard di Giggal. Ogni indirizzo viene controllato per domini usa e getta, account di ruolo, domini catch-all e per capire se esiste davvero.",
    },
  ],
  ctaBand: 'Blocca le email usa e getta e pulisci la tua lista',
  related: [
    { href: '/email-validation-api', label: 'API di validazione email: blocca le registrazioni usa e getta in tempo reale' },
    { href: '/email-checker', label: 'verifica email gratuita: questa casella esiste?' },
    { href: '/catch-all-verification', label: 'verifica le email catch-all e a rischio' },
    { href: '/seg-email-verification', label: 'verifica le email dietro i gateway di sicurezza' },
    { href: '/pricing', label: 'prezzi, crediti e piani' },
  ],
  console: {
    checks: { basic: 'Controlli di base', disposable: 'Controllo dominio usa e getta' },
    isDisposable: 'è un dominio email usa e getta',
    notDisposable: 'non è un dominio email usa e getta',
    disposableText: 'Questo dominio è un servizio di posta usa e getta o temporanea. Non aggiungere questo indirizzo alla tua lista.',
    notDisposableText:
      'Questo dominio non è nella lista dei servizi di posta usa e getta e temporanea. Questo non ti dice se la casella esiste.',
    deliverPrompt: 'Per sapere se questa casella esiste e riceve posta, controllala con la verifica email.',
    deliverButton: 'Controlla se questo indirizzo è valido',
    verifierPath: '/it/verifica-email',
    logs: {
      basicStart: '[BASIC] Controllo del formato per {email}...',
      basicOk: "[SUCCESS] Il formato dell'indirizzo è valido.",
      basicFail: "[FAILED] L'indirizzo non ha un formato email valido.",
      registry: '[DISPOSABLE] Controllo di {domain} nel registro dei domini usa e getta...',
      isDisposable: '[RESULT] {domain} è un servizio di posta usa e getta o temporanea.',
      notDisposable: '[RESULT] {domain} non è un servizio di posta usa e getta noto.',
    },
  },
  enSuffix: ' (in inglese)',
}

const de: CheckerStrings = {
  metaTitle: 'Wegwerf-E-Mail prüfen: Fake-E-Mail-Adressen erkennen | Giggal.ai',
  ogTitle: 'Wegwerf-E-Mail prüfen: gefälschte und temporäre Adressen erkennen',
  description:
    'Kostenloser Wegwerf-E-Mail-Prüfer für gefälschte und temporäre Adressen. Abgleich mit mehr als 100.000 Wegwerf-Domains, alle sechs Stunden aktualisiert.',
  ogLocale: 'de_DE',
  ogAlt: 'Giggal.ai Wegwerf-E-Mail-Prüfer',
  crumb: 'Wegwerf-E-Mail-Prüfer',
  h1: 'Kostenloser Wegwerf-E-Mail-Prüfer:',
  h1Accent: 'gefälschte und temporäre Adressen erkennen',
  heroIntro:
    'Geben Sie eine E-Mail-Adresse ein, um zu sehen, ob sie zu einem Dienst für Wegwerf- oder temporäre E-Mails gehört. Die Domain wird mit mehr als 100.000 Wegwerf-Domains abgeglichen, die alle sechs Stunden aktualisiert werden.',
  toolNote:
    'Fünf kostenlose Prüfungen pro Stunde, ohne Anmeldung. Dieses Tool zeigt, ob die Domain eine Wegwerf-Domain ist. Ob das Postfach existiert, prüfen Sie mit dem [kostenlosen E-Mail-Prüfer](/email-checker).',
  howTitle: 'So funktioniert die Prüfung auf Wegwerf-E-Mails',
  howIntro:
    'Wegwerfdienste registrieren ständig neue Domains. Eine Liste, die nicht aktualisiert wird, übersieht sie. Deshalb läuft die Prüfung im Prüfdienst von Giggal und nicht über eine Datei auf dieser Website.',
  how: [
    {
      title: 'Formatprüfung',
      text: 'Das Tool prüft, ob die Adresse ein gültiges Format hat: einen lokalen Teil, genau ein @-Zeichen und eine Domain. Das passiert, bevor etwas an den Server gesendet wird.',
    },
    {
      title: 'Domain-Abgleich mit mehr als 100.000 Wegwerf-Domains',
      text: 'Die Domain wird mit der Wegwerf-Liste des Prüfdienstes von Giggal abgeglichen. Subdomains einer gelisteten Domain gelten ebenfalls als Wegwerf-Domains. Die Liste wird alle sechs Stunden neu erstellt, und unser Team ergänzt manuelle Korrekturen.',
    },
    {
      title: 'Ergebnis',
      text: 'Das Tool meldet "Wegwerf-Domain" oder "keine Wegwerf-Domain". Keine Wegwerf-Domain bedeutet, dass die Domain kein bekannter Dienst für temporäre E-Mails ist. Es bedeutet nicht, dass das Postfach existiert.',
    },
    {
      title: 'Die Gültigkeit ist eine eigene Prüfung',
      text: 'Ob das Postfach existiert und E-Mails annimmt, prüfen Sie mit dem kostenlosen E-Mail-Prüfer. Er prüft, ob die E-Mail-Adresse wirklich existiert. Diese Seite beantwortet nur die Frage nach der Wegwerf-Domain.',
    },
  ],
  servicesTitle: 'Bekannte Wegwerf-E-Mail-Dienste',
  servicesIntro:
    'Das sind einige der Dienste auf der Liste. Die Liste umfasst auch die vielen kleineren Domains, die diese Dienste registrieren und abwechselnd nutzen.',
  services: [
    { name: 'Temp-Mail', desc: 'Stellt ein zufälliges temporäres Postfach ohne Anmeldung bereit.' },
    { name: 'Mailinator', desc: 'Öffentliche Postfächer. Jeder kann die E-Mails ohne Passwort lesen.' },
    { name: '10MinuteMail', desc: 'Postfach, das zehn Minuten nach der Erstellung abläuft.' },
    { name: 'Guerrilla Mail', desc: 'Löscht jede Nachricht eine Stunde nach dem Eingang.' },
    { name: 'ThrowawayMail', desc: 'Temporäres Postfach für einmalige Anmeldungen.' },
    { name: 'Yopmail', desc: 'Öffentliche Postfächer ohne Passwort. Nachrichten bleiben einige Tage gespeichert.' },
    { name: 'SharkLasers', desc: 'Eine der Domains, die Guerrilla Mail nutzt.' },
    { name: 'TrashMail', desc: 'Temporäre Weiterleitungsadressen, die nach einer festen Zeit nicht mehr funktionieren.' },
  ],
  viewAll: 'Alle Wegwerf-E-Mail-Anbieter ansehen',
  whyTitle: 'Warum Sie Wegwerf-E-Mail-Adressen blockieren sollten',
  whyIntro:
    'Eine Wegwerfadresse ist kein Kontakt. Die Person sieht nach den ersten Minuten nichts mehr von dem, was Sie senden. Daraus folgen drei Probleme:',
  why: [
    {
      title: 'E-Mails, die niemand liest',
      text: 'Willkommens-E-Mails, Belege und Onboarding-Sequenzen landen in einem Postfach, das nicht mehr existiert oder nie geöffnet wird. Manche Dienste lehnen E-Mails ab, wenn das Postfach abgelaufen ist. Das erscheint in Ihren Berichten als Bounce.',
    },
    {
      title: 'Missbrauch von Testphasen',
      text: 'Eine Person kann viele Testkonten anlegen, jedes Mal mit einer neuen Wegwerfadresse. Wenn Sie diese Adressen bei der Anmeldung blockieren, stoppen Sie den Großteil davon. Mit unserer [E-Mail-Validierungs-API](/email-validation-api) können Sie das in Anmeldeformularen automatisieren.',
    },
    {
      title: 'Falsche Zahlen im CRM',
      text: 'Wegwerf-Anmeldungen zählen als Leads, antworten aber nie, öffnen nichts und kaufen nichts. Ihre Anmeldezahlen sehen dadurch besser aus und Ihre Conversion-Rate schlechter, als sie wirklich sind.',
    },
  ],
  bulkTitle: 'Einzelprüfung oder Massenprüfung',
  bulkParas: [
    'Das Tool oben prüft eine Adresse nach der anderen. Das hilft bei einer verdächtigen Anmeldung oder einem einzelnen Lead. Für eine ganze Liste ist das zu langsam.',
    'Im Giggal-Dashboard können Sie eine CSV- oder TXT-Datei in unsere [E-Mail-Listenbereinigung](/email-list-cleaning) hochladen und die ganze Liste auf einmal prüfen. Jede Adresse wird auf Wegwerf-Domains, Rollenkonten wie info@ oder sales@ und auf ein existierendes Postfach geprüft. Bei [Catch-all-Domains](/catch-all-verification), wo eine normale Prüfung ein Postfach nicht bestätigen kann, führt Giggal eine tiefere Prüfung durch. Ein kostenloses Konto enthält 1.000 Credits.',
  ],
  faqTitle: 'Fragen zur Prüfung auf Wegwerf-E-Mails',
  faqs: [
    {
      q: 'Was ist eine Wegwerf-E-Mail-Adresse?',
      a: 'Eine Wegwerf-E-Mail-Adresse ist ein temporäres Postfach von einem Dienst wie Mailinator, Temp-Mail oder 10MinuteMail. Jeder kann in Sekunden eines ohne Passwort erstellen. Menschen nutzen sie, um ein Anmeldeformular oder einen geschützten Download zu nutzen, ohne eine echte Adresse anzugeben. Das Postfach wird nach einer festen Zeit gelöscht, oder die Person öffnet es nie wieder.',
    },
    {
      q: 'Wie funktioniert dieser Wegwerf-E-Mail-Prüfer?',
      a: 'Er sendet die Adresse an den Prüfdienst von Giggal. Der Dienst führt eine Liste mit mehr als 100.000 Domains für Wegwerf- und temporäre E-Mails. Die Liste wird alle sechs Stunden aus öffentlichen Quellen neu erstellt, und unser Team ergänzt manuelle Korrekturen. Steht die Domain oder eine übergeordnete Domain auf der Liste, meldet das Tool sie als Wegwerf-Domain. Sonst meldet es sie als keine Wegwerf-Domain.',
    },
    {
      q: 'Bedeutet "keine Wegwerf-Domain", dass die Adresse gültig ist?',
      a: 'Nein. Es bedeutet, dass die Domain kein bekannter Wegwerfdienst ist. Das Postfach existiert vielleicht trotzdem nicht. Um das zu prüfen, nutzen Sie den kostenlosen E-Mail-Prüfer. Er prüft das Postfach live und zeigt, ob die Adresse E-Mails empfangen kann.',
    },
    {
      q: 'Gibt es einen Bounce, wenn ich an eine Wegwerf-E-Mail sende?',
      a: 'Manchmal. Manche Dienste nehmen jede Nachricht an und löschen sie nach einer festen Zeit. Andere schließen das Postfach nach ein paar Minuten und lehnen danach E-Mails ab. In beiden Fällen liest die Person Ihre E-Mail später nicht. Behandeln Sie die Adresse in jedem Fall als unbrauchbar.',
    },
    {
      q: 'Ist dieser Wegwerf-E-Mail-Prüfer kostenlos?',
      a: 'Ja. Sie haben 5 kostenlose Prüfungen pro Stunde, ohne Anmeldung. Um eine ganze Liste zu prüfen, erstellen Sie ein kostenloses Konto. Es enthält 1.000 Prüf-Credits.',
    },
    {
      q: 'Wie blockiere ich Wegwerf-E-Mails in Anmeldeformularen?',
      a: 'Verbinden Sie Giggal über die API oder die Zapier-Integration mit Ihrem Formular oder Ihrer App. Jede Adresse wird beim Absenden geprüft. Ist sie eine Wegwerfadresse, können Sie nach einer anderen Adresse fragen, bevor das Konto erstellt wird.',
    },
    {
      q: 'Was ist der Unterschied zwischen einer Wegwerf-E-Mail und einem kostenlosen E-Mail-Anbieter?',
      a: 'Ein kostenloser Anbieter wie Gmail, Yahoo oder Outlook gibt Menschen ein dauerhaftes Postfach mit Passwort. Ein Wegwerfdienst gibt ein temporäres Postfach, das zum Wegwerfen gedacht ist. Giggal markiert Wegwerfadressen und lässt normale kostenlose Postfächer in Ruhe.',
    },
    {
      q: 'Kann ich Wegwerf-E-Mails in großen Mengen prüfen?',
      a: 'Ja. Laden Sie eine CSV- oder TXT-Datei im Giggal-Dashboard hoch. Jede Adresse wird auf Wegwerf-Domains, Rollenkonten, Catch-all-Domains und auf ein existierendes Postfach geprüft.',
    },
  ],
  ctaBand: 'Wegwerf-E-Mails blockieren und Ihre Liste bereinigen',
  related: [
    { href: '/email-validation-api', label: 'E-Mail-Validierungs-API: Wegwerf-Anmeldungen in Echtzeit blockieren' },
    { href: '/email-checker', label: 'kostenloser E-Mail-Prüfer: existiert dieses Postfach?' },
    { href: '/catch-all-verification', label: 'Catch-all- und riskante E-Mails verifizieren' },
    { href: '/seg-email-verification', label: 'E-Mails hinter Sicherheits-Gateways verifizieren' },
    { href: '/pricing', label: 'Preise, Credits und Tarife' },
  ],
  console: {
    checks: { basic: 'Basisprüfungen', disposable: 'Prüfung auf Wegwerf-Domain' },
    isDisposable: 'ist eine Wegwerf-E-Mail-Domain',
    notDisposable: 'ist keine Wegwerf-E-Mail-Domain',
    disposableText:
      'Diese Domain gehört zu einem Dienst für Wegwerf- oder temporäre E-Mails. Nehmen Sie diese Adresse nicht in Ihre Liste auf.',
    notDisposableText:
      'Diese Domain steht nicht auf der Liste der Dienste für Wegwerf- und temporäre E-Mails. Das sagt nichts darüber, ob das Postfach existiert.',
    deliverPrompt: 'Ob dieses Postfach existiert und E-Mails annimmt, prüfen Sie mit dem E-Mail-Prüfer.',
    deliverButton: 'Prüfen, ob diese Adresse gültig ist',
    verifierPath: '/de/email-adresse-pruefen',
    logs: {
      basicStart: '[BASIC] Format von {email} wird geprüft...',
      basicOk: '[SUCCESS] Das Adressformat ist gültig.',
      basicFail: '[FAILED] Die Adresse hat kein gültiges E-Mail-Format.',
      registry: '[DISPOSABLE] {domain} wird mit dem Register der Wegwerf-Domains abgeglichen...',
      isDisposable: '[RESULT] {domain} ist ein Dienst für Wegwerf- oder temporäre E-Mails.',
      notDisposable: '[RESULT] {domain} ist kein bekannter Wegwerf-E-Mail-Dienst.',
    },
  },
  enSuffix: ' (Englisch)',
}

const es: CheckerStrings = {
  metaTitle: 'Verificador de Correo Desechable y Temporal Gratis | Giggal.ai',
  ogTitle: 'Verificador de correo desechable gratis: detecta correos falsos y temporales',
  description:
    'Verificador de correo desechable gratis para detectar correos falsos y temporales. Compara con más de 100.000 dominios, actualizados cada seis horas.',
  ogLocale: 'es_LA',
  ogAlt: 'Giggal.ai verificador de correo desechable',
  crumb: 'Verificador de correo desechable',
  h1: 'Verificador de correo desechable gratis para',
  h1Accent: 'detectar correos falsos y temporales',
  heroIntro:
    'Escribe una dirección de correo para ver si usa un servicio de correo desechable o temporal. El dominio se compara con más de 100.000 dominios desechables, actualizados cada seis horas.',
  toolNote:
    'Cinco comprobaciones gratis por hora, sin registro. Esta herramienta te dice si el dominio es desechable. Para saber si el buzón existe, usa el [verificador de email gratis](/email-checker).',
  howTitle: 'Cómo funciona la comprobación de correo desechable',
  howIntro:
    'Los servicios desechables registran dominios nuevos todo el tiempo. Una lista que no se actualiza los pierde. Por eso la comprobación se hace en el servicio de verificación de Giggal y no con un archivo dentro de este sitio.',
  how: [
    {
      title: 'Comprobación de formato',
      text: 'La herramienta comprueba que la dirección tenga un formato válido: una parte local, una sola @ y un dominio. Esto ocurre antes de enviar nada al servidor.',
    },
    {
      title: 'Comprobación del dominio contra más de 100.000 dominios desechables',
      text: 'El dominio se compara con la lista de desechables del servicio de verificación de Giggal. Los subdominios de un dominio de la lista también cuentan como desechables. La lista se reconstruye cada seis horas y nuestro equipo añade correcciones manuales.',
    },
    {
      title: 'Resultado',
      text: 'La herramienta responde "desechable" o "no desechable". No desechable significa que el dominio no es un servicio de correo temporal conocido. No significa que el buzón exista.',
    },
    {
      title: 'La validez es otra comprobación',
      text: 'Para saber si el buzón existe y acepta correo, usa el verificador de email gratis. Comprueba si el buzón existe. Esta página solo responde si el dominio es desechable.',
    },
  ],
  servicesTitle: 'Servicios de correo desechable comunes',
  servicesIntro:
    'Estos son algunos de los servicios de la lista. La lista también incluye los muchos dominios más pequeños que estos servicios registran y van rotando.',
  services: [
    { name: 'Temp-Mail', desc: 'Da una bandeja temporal aleatoria sin registro.' },
    { name: 'Mailinator', desc: 'Bandejas públicas. Cualquiera puede leer el correo sin contraseña.' },
    { name: '10MinuteMail', desc: 'Bandeja que caduca diez minutos después de crearla.' },
    { name: 'Guerrilla Mail', desc: 'Borra cada mensaje una hora después de que llega.' },
    { name: 'ThrowawayMail', desc: 'Bandeja temporal para registros de un solo uso.' },
    { name: 'Yopmail', desc: 'Bandejas públicas sin contraseña. Los mensajes se guardan unos días.' },
    { name: 'SharkLasers', desc: 'Uno de los dominios que usa Guerrilla Mail.' },
    { name: 'TrashMail', desc: 'Direcciones de reenvío temporales que dejan de funcionar tras un tiempo fijo.' },
  ],
  viewAll: 'Ver todos los proveedores de correo desechable',
  whyTitle: 'Por qué bloquear las direcciones de correo desechable',
  whyIntro:
    'Una dirección desechable no es un contacto. La persona no verá nada de lo que envíes después de los primeros minutos. De ahí salen tres problemas:',
  why: [
    {
      title: 'Correos que nadie lee',
      text: 'Los correos de bienvenida, los recibos y las secuencias de onboarding van a una bandeja que ya no existe o que nadie abre. Algunos servicios rechazan el correo cuando la bandeja caduca, y eso aparece como rebote en tus informes.',
    },
    {
      title: 'Abuso de las pruebas gratuitas',
      text: 'Una persona puede crear muchas cuentas de prueba con una dirección desechable nueva cada vez. Bloquear estas direcciones en el registro frena la mayor parte. Puedes automatizarlo en los formularios de registro con nuestra [API de validación de correo](/email-validation-api).',
    },
    {
      title: 'Cifras equivocadas en tu CRM',
      text: 'Los registros desechables cuentan como leads, pero nunca responden, abren ni compran. Hacen que tus registros parezcan mejores y tu tasa de conversión peor de lo que son.',
    },
  ],
  bulkTitle: 'Comprobación individual o masiva',
  bulkParas: [
    'La herramienta de arriba comprueba una dirección cada vez. Sirve para un registro sospechoso o un solo lead. Para una lista entera, una dirección cada vez es demasiado lento.',
    'En el panel de Giggal puedes subir un archivo CSV o TXT a nuestro [servicio de limpieza de listas de correo](/email-list-cleaning) y comprobar toda la lista de una vez. Cada dirección se comprueba para detectar dominios desechables, cuentas de rol como info@ o sales@ y si el buzón existe. En los [dominios catch-all](/catch-all-verification), donde una comprobación normal no puede confirmar un buzón, Giggal hace una comprobación más profunda. Una cuenta gratis incluye 1.000 créditos.',
  ],
  faqTitle: 'Preguntas sobre la comprobación de correo desechable',
  faqs: [
    {
      q: '¿Qué es una dirección de correo desechable?',
      a: 'Una dirección de correo desechable es una bandeja temporal de un servicio como Mailinator, Temp-Mail o 10MinuteMail. Cualquiera puede crear una en segundos sin contraseña. La gente las usa para pasar un formulario de registro o una descarga protegida sin dar una dirección real. La bandeja se borra tras un tiempo fijo, o la persona no la vuelve a abrir.',
    },
    {
      q: '¿Cómo funciona este verificador de correo desechable?',
      a: 'Envía la dirección al servicio de verificación de Giggal. El servicio tiene una lista de más de 100.000 dominios de correo desechable y temporal. La lista se reconstruye desde fuentes públicas cada seis horas y nuestro equipo añade correcciones manuales. Si el dominio, o su dominio principal, está en la lista, la herramienta lo marca como desechable. Si no, lo marca como no desechable.',
    },
    {
      q: '¿"No desechable" significa que la dirección es válida?',
      a: 'No. Significa que el dominio no es un servicio de correo desechable conocido. Puede que el buzón aun así no exista. Para comprobarlo, usa el verificador de email gratis. Hace una comprobación del buzón en vivo y te dice si la dirección puede recibir correo.',
    },
    {
      q: '¿Enviar a un correo desechable produce un rebote?',
      a: 'A veces. Algunos servicios aceptan cada mensaje y lo borran tras un tiempo fijo. Otros cierran la bandeja a los pocos minutos y a partir de ahí rechazan el correo. En los dos casos la persona no leerá tu correo más tarde. Trata la dirección como inservible en cualquier caso.',
    },
    {
      q: '¿Este verificador de correo desechable es gratis?',
      a: 'Sí. Tienes 5 comprobaciones gratis por hora sin registro. Para comprobar una lista entera, crea una cuenta gratis. Incluye 1.000 créditos de verificación.',
    },
    {
      q: '¿Cómo bloqueo los correos desechables en los formularios de registro?',
      a: 'Conecta Giggal a tu formulario o app mediante la API o la integración con Zapier. Cada dirección se comprueba al enviarse. Si es desechable, puedes pedirle a la persona otra dirección antes de crear la cuenta.',
    },
    {
      q: '¿Qué diferencia hay entre un correo desechable y un proveedor de correo gratuito?',
      a: 'Un proveedor gratuito como Gmail, Yahoo u Outlook da a la gente un buzón permanente con contraseña. Un servicio desechable da un buzón temporal pensado para tirarlo. Giggal marca las direcciones desechables y deja en paz los buzones gratuitos normales.',
    },
    {
      q: '¿Puedo comprobar correos desechables de forma masiva?',
      a: 'Sí. Sube un archivo CSV o TXT en el panel de Giggal. Cada dirección se comprueba para detectar dominios desechables, cuentas de rol, dominios catch-all y si el buzón existe.',
    },
  ],
  ctaBand: 'Bloquea el correo desechable y limpia tu lista',
  related: [
    { href: '/email-validation-api', label: 'API de validación de correo: bloquea registros desechables en tiempo real' },
    { href: '/email-checker', label: 'verificador de email gratis: ¿existe este buzón?' },
    { href: '/catch-all-verification', label: 'verifica correos catch-all y arriesgados' },
    { href: '/seg-email-verification', label: 'verifica correos detrás de gateways de seguridad' },
    { href: '/pricing', label: 'precios, créditos y planes' },
  ],
  console: {
    checks: { basic: 'Comprobaciones básicas', disposable: 'Comprobación de dominio desechable' },
    isDisposable: 'es un dominio de correo desechable',
    notDisposable: 'no es un dominio de correo desechable',
    disposableText: 'Este dominio es un servicio de correo desechable o temporal. No añadas esta dirección a tu lista.',
    notDisposableText:
      'Este dominio no está en la lista de servicios de correo desechable y temporal. Esto no te dice si el buzón existe.',
    deliverPrompt: 'Para saber si este buzón existe y acepta correo, compruébalo con el verificador de email.',
    deliverButton: 'Comprobar si esta dirección es válida',
    verifierPath: '/es/validar-correo',
    logs: {
      basicStart: '[BASIC] Comprobando el formato de {email}...',
      basicOk: '[SUCCESS] El formato de la dirección es válido.',
      basicFail: '[FAILED] La dirección no tiene un formato de correo válido.',
      registry: '[DISPOSABLE] Comprobando {domain} en el registro de dominios desechables...',
      isDisposable: '[RESULT] {domain} es un servicio de correo desechable o temporal.',
      notDisposable: '[RESULT] {domain} no es un servicio de correo desechable conocido.',
    },
  },
  enSuffix: ' (en inglés)',
}

const ptBr: CheckerStrings = {
  metaTitle: 'Verificador de E-mail Descartável e Temporário Grátis | Giggal.ai',
  ogTitle: 'Verificador de e-mail descartável grátis: detecte e-mails falsos e temporários',
  description:
    'Verificador de e-mail descartável grátis para detectar e-mails falsos e temporários. Compara com mais de 100.000 domínios, atualizados a cada seis horas.',
  ogLocale: 'pt_BR',
  ogAlt: 'Giggal.ai verificador de e-mail descartável',
  crumb: 'Verificador de e-mail descartável',
  h1: 'Verificador de e-mail descartável grátis para',
  h1Accent: 'detectar e-mails falsos e temporários',
  heroIntro:
    'Digite um endereço de e-mail para ver se ele usa um serviço de e-mail descartável ou temporário. O domínio é comparado com mais de 100.000 domínios descartáveis, atualizados a cada seis horas.',
  toolNote:
    'Cinco verificações grátis por hora, sem cadastro. Esta ferramenta mostra se o domínio é descartável. Para saber se a caixa existe, use o [verificador de e-mail grátis](/email-checker).',
  howTitle: 'Como funciona a verificação de e-mail descartável',
  howIntro:
    'Os serviços descartáveis registram domínios novos o tempo todo. Uma lista que não é atualizada deixa esses domínios passarem. Por isso a verificação roda no serviço de verificação da Giggal, e não em um arquivo dentro deste site.',
  how: [
    {
      title: 'Verificação de formato',
      text: 'A ferramenta confere se o endereço tem um formato válido: uma parte local, um único @ e um domínio. Isso acontece antes de qualquer envio ao servidor.',
    },
    {
      title: 'Verificação do domínio contra mais de 100.000 domínios descartáveis',
      text: 'O domínio é comparado com a lista de descartáveis do serviço de verificação da Giggal. Subdomínios de um domínio da lista também contam como descartáveis. A lista é refeita a cada seis horas, e nossa equipe adiciona correções manuais.',
    },
    {
      title: 'Resultado',
      text: 'A ferramenta responde "descartável" ou "não descartável". Não descartável significa que o domínio não é um serviço de e-mail temporário conhecido. Não significa que a caixa existe.',
    },
    {
      title: 'A validade é outra verificação',
      text: 'Para saber se a caixa existe e aceita e-mails, use o verificador de e-mail grátis. Ele confere se a caixa de e-mail existe. Esta página só responde se o domínio é descartável.',
    },
  ],
  servicesTitle: 'Serviços de e-mail descartável comuns',
  servicesIntro:
    'Estes são alguns dos serviços da lista. A lista também cobre os muitos domínios menores que esses serviços registram e alternam.',
  services: [
    { name: 'Temp-Mail', desc: 'Dá uma caixa temporária aleatória sem cadastro.' },
    { name: 'Mailinator', desc: 'Caixas públicas. Qualquer pessoa pode ler os e-mails sem senha.' },
    { name: '10MinuteMail', desc: 'Caixa que expira dez minutos depois de criada.' },
    { name: 'Guerrilla Mail', desc: 'Apaga cada mensagem uma hora depois que ela chega.' },
    { name: 'ThrowawayMail', desc: 'Caixa temporária para cadastros de uso único.' },
    { name: 'Yopmail', desc: 'Caixas públicas sem senha. As mensagens ficam guardadas por alguns dias.' },
    { name: 'SharkLasers', desc: 'Um dos domínios usados pelo Guerrilla Mail.' },
    { name: 'TrashMail', desc: 'Endereços de encaminhamento temporários que param de funcionar depois de um tempo fixo.' },
  ],
  viewAll: 'Ver todos os provedores de e-mail descartável',
  whyTitle: 'Por que bloquear endereços de e-mail descartável',
  whyIntro:
    'Um endereço descartável não é um contato. A pessoa não vai ver nada do que você enviar depois dos primeiros minutos. Isso gera três problemas:',
  why: [
    {
      title: 'E-mails que ninguém lê',
      text: 'E-mails de boas-vindas, recibos e sequências de onboarding vão para uma caixa que já não existe ou que ninguém abre. Alguns serviços recusam o e-mail depois que a caixa expira, e isso aparece como bounce nos seus relatórios.',
    },
    {
      title: 'Abuso de testes grátis',
      text: 'Uma pessoa pode criar várias contas de teste com um novo endereço descartável a cada vez. Bloquear esses endereços no cadastro impede a maior parte disso. Você pode automatizar isso nos formulários de cadastro com a nossa [API de validação de e-mail](/email-validation-api).',
    },
    {
      title: 'Números errados no seu CRM',
      text: 'Cadastros descartáveis contam como leads, mas nunca respondem, abrem ou compram. Eles fazem seus números de cadastro parecerem melhores e sua taxa de conversão parecer pior do que realmente é.',
    },
  ],
  bulkTitle: 'Verificação individual ou em massa',
  bulkParas: [
    'A ferramenta acima verifica um endereço por vez. Ela serve para um cadastro suspeito ou um único lead. Para uma lista inteira, um endereço por vez é lento demais.',
    'No painel da Giggal você pode enviar um arquivo CSV ou TXT para o nosso [serviço de limpeza de lista de e-mails](/email-list-cleaning) e verificar a lista inteira de uma vez. Cada endereço é verificado quanto a domínios descartáveis, contas de função como info@ ou sales@ e se a caixa existe. Em [domínios catch-all](/catch-all-verification), onde uma verificação comum não consegue confirmar uma caixa, a Giggal faz uma verificação mais profunda. Uma conta grátis vem com 1.000 créditos.',
  ],
  faqTitle: 'Perguntas sobre a verificação de e-mail descartável',
  faqs: [
    {
      q: 'O que é um endereço de e-mail descartável?',
      a: 'Um endereço de e-mail descartável é uma caixa temporária de um serviço como Mailinator, Temp-Mail ou 10MinuteMail. Qualquer pessoa cria uma em segundos, sem senha. As pessoas usam para passar por um formulário de cadastro ou baixar um material sem informar um endereço real. A caixa é apagada depois de um tempo fixo, ou a pessoa nunca mais abre.',
    },
    {
      q: 'Como funciona este verificador de e-mail descartável?',
      a: 'Ele envia o endereço para o serviço de verificação da Giggal. O serviço tem uma lista de mais de 100.000 domínios de e-mail descartável e temporário. A lista é refeita a partir de fontes públicas a cada seis horas, e nossa equipe adiciona correções manuais. Se o domínio, ou o domínio principal dele, estiver na lista, a ferramenta marca como descartável. Se não, marca como não descartável.',
    },
    {
      q: '"Não descartável" significa que o endereço é válido?',
      a: 'Não. Significa que o domínio não é um serviço de e-mail descartável conhecido. A caixa ainda pode não existir. Para verificar isso, use o verificador de e-mail grátis. Ele faz uma verificação da caixa em tempo real e mostra se o endereço pode receber e-mails.',
    },
    {
      q: 'Enviar para um e-mail descartável gera bounce?',
      a: 'Às vezes. Alguns serviços aceitam toda mensagem e apagam depois de um tempo fixo. Outros fecham a caixa depois de alguns minutos e passam a recusar e-mails. Nos dois casos a pessoa não vai ler seu e-mail depois. Trate o endereço como inutilizável de qualquer jeito.',
    },
    {
      q: 'Este verificador de e-mail descartável é grátis?',
      a: 'Sim. Você tem 5 verificações grátis por hora, sem cadastro. Para verificar uma lista inteira, crie uma conta grátis. Ela vem com 1.000 créditos de verificação.',
    },
    {
      q: 'Como bloquear e-mails descartáveis em formulários de cadastro?',
      a: 'Conecte a Giggal ao seu formulário ou app pela API ou pela integração com o Zapier. Cada endereço é verificado no envio. Se for descartável, você pode pedir outro endereço antes de criar a conta.',
    },
    {
      q: 'Qual a diferença entre um e-mail descartável e um provedor de e-mail gratuito?',
      a: 'Um provedor gratuito como Gmail, Yahoo ou Outlook dá às pessoas uma caixa permanente com senha. Um serviço descartável dá uma caixa temporária feita para ser jogada fora. A Giggal marca os endereços descartáveis e deixa as caixas gratuitas normais em paz.',
    },
    {
      q: 'Posso verificar e-mails descartáveis em massa?',
      a: 'Sim. Envie um arquivo CSV ou TXT no painel da Giggal. Cada endereço é verificado quanto a domínios descartáveis, contas de função, domínios catch-all e se a caixa existe.',
    },
  ],
  ctaBand: 'Bloqueie e-mails descartáveis e limpe sua lista',
  related: [
    { href: '/email-validation-api', label: 'API de validação de e-mail: bloqueie cadastros descartáveis em tempo real' },
    { href: '/email-checker', label: 'verificador de e-mail grátis: esta caixa existe?' },
    { href: '/catch-all-verification', label: 'verifique e-mails catch-all e arriscados' },
    { href: '/seg-email-verification', label: 'verifique e-mails atrás de gateways de segurança' },
    { href: '/pricing', label: 'preços, créditos e planos' },
  ],
  console: {
    checks: { basic: 'Verificações básicas', disposable: 'Verificação de domínio descartável' },
    isDisposable: 'é um domínio de e-mail descartável',
    notDisposable: 'não é um domínio de e-mail descartável',
    disposableText: 'Este domínio é um serviço de e-mail descartável ou temporário. Não adicione este endereço à sua lista.',
    notDisposableText:
      'Este domínio não está na lista de serviços de e-mail descartável e temporário. Isso não mostra se a caixa existe.',
    deliverPrompt: 'Para saber se esta caixa existe e aceita e-mails, verifique com o verificador de e-mail.',
    deliverButton: 'Verificar se este endereço é válido',
    verifierPath: '/pt-br/verificacao-de-email',
    logs: {
      basicStart: '[BASIC] Verificando o formato de {email}...',
      basicOk: '[SUCCESS] O formato do endereço é válido.',
      basicFail: '[FAILED] O endereço não tem um formato de e-mail válido.',
      registry: '[DISPOSABLE] Verificando {domain} no registro de domínios descartáveis...',
      isDisposable: '[RESULT] {domain} é um serviço de e-mail descartável ou temporário.',
      notDisposable: '[RESULT] {domain} não é um serviço de e-mail descartável conhecido.',
    },
  },
  enSuffix: ' (em inglês)',
}

const fr: CheckerStrings = {
  metaTitle: `Vérifier une Adresse Mail Jetable ou Temporaire | Giggal.ai`,
  ogTitle: `Vérifier une adresse mail jetable${NB}: détecter les fausses adresses et les boîtes temporaires`,
  description: `Vérificateur gratuit d’adresse mail jetable pour repérer les fausses adresses. Plus de 100${NB}000 domaines jetables, mis à jour toutes les six heures.`,
  ogLocale: 'fr_FR',
  ogAlt: `Giggal.ai vérificateur d’adresse mail jetable`,
  crumb: `Vérificateur d’adresse mail jetable`,
  h1: `Vérificateur gratuit d’adresse mail jetable pour`,
  h1Accent: `détecter les fausses adresses et les boîtes temporaires`,
  heroIntro: `Saisissez une adresse email pour savoir si elle utilise un service de messagerie jetable ou temporaire. Le domaine est comparé à plus de 100${NB}000 domaines jetables, mis à jour toutes les six heures.`,
  toolNote: `Cinq vérifications gratuites par heure, sans inscription. Cet outil vous dit si le domaine est jetable. Pour savoir si la boîte existe, utilisez le [testeur d’email gratuit](/email-checker).`,
  howTitle: `Comment fonctionne la vérification d’email jetable`,
  howIntro: `Les services jetables enregistrent sans cesse de nouveaux domaines. Une liste qui n’est pas mise à jour les rate. C’est pourquoi la vérification tourne sur le service de vérification de Giggal et non sur un fichier de ce site.`,
  how: [
    {
      title: `Vérification du format`,
      text: `L’outil vérifie que l’adresse a un format valide${NB}: une partie locale, un seul @ et un domaine. Cela se fait avant tout envoi au serveur.`,
    },
    {
      title: `Vérification du domaine parmi plus de 100${NB}000 domaines jetables`,
      text: `Le domaine est comparé à la liste des domaines jetables du service de vérification de Giggal. Les sous-domaines d’un domaine de la liste comptent aussi comme jetables. La liste est reconstruite toutes les six heures et notre équipe ajoute des corrections manuelles.`,
    },
    {
      title: `Résultat`,
      text: `L’outil répond «${NB}jetable${NB}» ou «${NB}non jetable${NB}». Non jetable veut dire que le domaine n’est pas un service de messagerie temporaire connu. Cela ne veut pas dire que la boîte existe.`,
    },
    {
      title: `La validité est une vérification à part`,
      text: `Pour savoir si la boîte existe et accepte les messages, utilisez le testeur d’email gratuit. Il vérifie si la boîte mail existe. Cette page répond seulement à la question du jetable.`,
    },
  ],
  servicesTitle: `Services d’email jetable courants`,
  servicesIntro: `Voici quelques-uns des services de la liste. La liste couvre aussi les nombreux petits domaines que ces services enregistrent et utilisent à tour de rôle.`,
  services: [
    { name: 'Temp-Mail', desc: `Donne une boîte temporaire aléatoire sans inscription.` },
    { name: 'Mailinator', desc: `Boîtes publiques. Tout le monde peut lire les messages sans mot de passe.` },
    { name: '10MinuteMail', desc: `Boîte qui expire dix minutes après sa création.` },
    { name: 'Guerrilla Mail', desc: `Supprime chaque message une heure après son arrivée.` },
    { name: 'ThrowawayMail', desc: `Boîte temporaire pour les inscriptions ponctuelles.` },
    { name: 'Yopmail', desc: `Boîtes publiques sans mot de passe. Les messages sont conservés quelques jours.` },
    { name: 'SharkLasers', desc: `L’un des domaines utilisés par Guerrilla Mail.` },
    { name: 'TrashMail', desc: `Adresses de transfert temporaires qui cessent de fonctionner après un délai fixe.` },
  ],
  viewAll: `Voir tous les fournisseurs d’adresse mail jetable`,
  whyTitle: `Pourquoi bloquer les adresses mail jetables`,
  whyIntro: `Une adresse jetable n’est pas un contact. La personne ne verra rien de ce que vous envoyez après les premières minutes. Cela crée trois problèmes${NB}:`,
  why: [
    {
      title: `Des emails que personne ne lit`,
      text: `Les emails de bienvenue, les reçus et les séquences d’onboarding partent vers une boîte qui n’existe plus ou que personne n’ouvre. Certains services refusent les messages une fois la boîte expirée, ce qui apparaît comme un rebond dans vos rapports.`,
    },
    {
      title: `Abus des essais gratuits`,
      text: `Une personne peut créer de nombreux comptes d’essai avec une nouvelle adresse jetable à chaque fois. Bloquer ces adresses à l’inscription en arrête la plus grande partie. Vous pouvez l’automatiser sur vos formulaires d’inscription avec notre [API de validation d’email](/email-validation-api).`,
    },
    {
      title: `Des chiffres faussés dans votre CRM`,
      text: `Les inscriptions jetables comptent comme des leads, mais ne répondent jamais, n’ouvrent rien et n’achètent rien. Elles font paraître vos inscriptions meilleures et votre taux de conversion pire qu’ils ne le sont.`,
    },
  ],
  bulkTitle: `Vérification unitaire ou en masse`,
  bulkParas: [
    `L’outil ci-dessus vérifie une adresse à la fois. Il sert pour une inscription suspecte ou un seul lead. Pour une liste entière, une adresse à la fois est trop lent.`,
    `Dans le tableau de bord de Giggal, vous pouvez envoyer un fichier CSV ou TXT à notre [service de nettoyage de liste email](/email-list-cleaning) et vérifier toute la liste en une fois. Chaque adresse est vérifiée pour les domaines jetables, les comptes de rôle comme info@ ou sales@ et l’existence de la boîte mail. Sur les [domaines catch-all](/catch-all-verification), où une vérification standard ne peut pas confirmer une boîte, Giggal fait une vérification plus poussée. Un compte gratuit inclut 1${NB}000 crédits.`,
  ],
  faqTitle: `Questions sur la vérification d’email jetable`,
  faqs: [
    {
      q: `Qu’est-ce qu’une adresse mail jetable${NB}?`,
      a: `Une adresse mail jetable est une boîte temporaire fournie par un service comme Mailinator, Temp-Mail ou 10MinuteMail. N’importe qui peut en créer une en quelques secondes, sans mot de passe. On l’utilise pour passer un formulaire d’inscription ou un téléchargement protégé sans donner sa vraie adresse. La boîte est supprimée après un délai fixe, ou la personne ne l’ouvre plus jamais.`,
    },
    {
      q: `Comment fonctionne ce vérificateur d’email jetable${NB}?`,
      a: `Il envoie l’adresse au service de vérification de Giggal. Le service tient une liste de plus de 100${NB}000 domaines de messagerie jetable et temporaire. La liste est reconstruite à partir de sources publiques toutes les six heures et notre équipe ajoute des corrections manuelles. Si le domaine, ou son domaine parent, figure sur la liste, l’outil le signale comme jetable. Sinon, il le signale comme non jetable.`,
    },
    {
      q: `«${NB}Non jetable${NB}» veut-il dire que l’adresse est valide${NB}?`,
      a: `Non. Cela veut dire que le domaine n’est pas un service de messagerie jetable connu. La boîte peut quand même ne pas exister. Pour le vérifier, utilisez le testeur d’email gratuit. Il vérifie la boîte en direct et vous dit si l’adresse peut recevoir des messages.`,
    },
    {
      q: `Un envoi vers une adresse jetable provoque-t-il un rebond${NB}?`,
      a: `Parfois. Certains services acceptent chaque message et le suppriment après un délai fixe. D’autres ferment la boîte au bout de quelques minutes et refusent ensuite les messages. Dans les deux cas, la personne ne lira pas votre email plus tard. Considérez l’adresse comme inutilisable dans tous les cas.`,
    },
    {
      q: `Ce vérificateur d’email jetable est-il gratuit${NB}?`,
      a: `Oui. Vous avez 5 vérifications gratuites par heure, sans inscription. Pour vérifier une liste entière, créez un compte gratuit. Il inclut 1${NB}000 crédits de vérification.`,
    },
    {
      q: `Comment bloquer les adresses jetables sur les formulaires d’inscription${NB}?`,
      a: `Connectez Giggal à votre formulaire ou à votre application avec l’API ou l’intégration Zapier. Chaque adresse est vérifiée à l’envoi. Si elle est jetable, vous pouvez demander une autre adresse avant de créer le compte.`,
    },
    {
      q: `Quelle différence entre une adresse jetable et un fournisseur de messagerie gratuit${NB}?`,
      a: `Un fournisseur gratuit comme Gmail, Yahoo ou Outlook donne une boîte permanente avec un mot de passe. Un service jetable donne une boîte temporaire faite pour être jetée. Giggal signale les adresses jetables et laisse tranquilles les boîtes gratuites normales.`,
    },
    {
      q: `Puis-je vérifier des adresses jetables en masse${NB}?`,
      a: `Oui. Envoyez un fichier CSV ou TXT dans le tableau de bord de Giggal. Chaque adresse est vérifiée pour les domaines jetables, les comptes de rôle, les domaines catch-all et l’existence de la boîte mail.`,
    },
  ],
  ctaBand: `Bloquez les emails jetables et nettoyez votre liste`,
  related: [
    { href: '/email-validation-api', label: `API de validation d’email${NB}: bloquer les inscriptions jetables en temps réel` },
    { href: '/email-checker', label: `testeur d’email gratuit${NB}: cette boîte existe-t-elle${NB}?` },
    { href: '/catch-all-verification', label: `vérifier les emails catch-all et risqués` },
    { href: '/seg-email-verification', label: `vérifier les emails derrière une passerelle de sécurité` },
    { href: '/pricing', label: `tarifs, crédits et forfaits` },
  ],
  console: {
    checks: { basic: `Vérifications de base`, disposable: `Vérification du domaine jetable` },
    isDisposable: `est un domaine d’email jetable`,
    notDisposable: `n’est pas un domaine d’email jetable`,
    disposableText: `Ce domaine est un service de messagerie jetable ou temporaire. N’ajoutez pas cette adresse à votre liste.`,
    notDisposableText: `Ce domaine ne figure pas sur la liste des services de messagerie jetables et temporaires. Cela ne dit pas si la boîte existe.`,
    deliverPrompt: `Pour savoir si cette boîte existe et accepte les messages, vérifiez-la avec le testeur d’email.`,
    deliverButton: `Vérifier si cette adresse est valide`,
    verifierPath: '/fr/verifier-adresse-mail',
    logs: {
      basicStart: `[BASIC] Vérification du format de {email}...`,
      basicOk: `[SUCCESS] Le format de l’adresse est valide.`,
      basicFail: `[FAILED] L’adresse n’a pas un format email valide.`,
      registry: `[DISPOSABLE] Vérification de {domain} dans le registre des domaines jetables...`,
      isDisposable: `[RESULT] {domain} est un service de messagerie jetable ou temporaire.`,
      notDisposable: `[RESULT] {domain} n’est pas un service de messagerie jetable connu.`,
    },
  },
  enSuffix: ' (en anglais)',
}

export const CHECKER_STRINGS: Record<Locale, CheckerStrings> = { en, it, de, es, 'pt-br': ptBr, fr }
