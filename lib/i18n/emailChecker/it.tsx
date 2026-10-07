import type { EmailCheckerCopy } from '@/components/l10n/EmailCheckerL10n'
import { InlineLink } from '@/components/l10n/EmailCheckerL10n'

// Italian copy for /it/verifica-email, translated from the English
// /email-checker page. Keyword family from the previous Italian page:
// verifica email (primary, 27,000/month), verifica mail, verifica indirizzo
// email, verifica email esistente, verifica email valida, controllo email,
// gratis. The H1 is the one chosen from Italian keyword research. Informal
// address (tu), as on the rest of the Italian site.

export const copy: EmailCheckerCopy = {
  hero: {
    h1Lead: 'Verifica email gratis,',
    h1Rest: 'senza inviare nessuna email',
    intro:
      'Verifica o controlla gratis online qualsiasi indirizzo email. Incollalo per controllare il formato, il server di posta e la casella stessa. Sui domini catch-all, questa verifica email continua i controlli e restituisce valida o non valida.',
  },
  tool: {
    caption: 'Senza registrazione, senza carta. Un indirizzo per controllo.',
    freeCredits: 'Ti servono più controlli? Crea un account e ricevi 1.000 crediti gratuiti. Nessuna carta richiesta.',
  },
  ratings: {
    reviews: (count) => `${count} recensioni`,
    ratedAria: (rating, platform) => `Valutazione di Giggal.ai su ${platform}: ${rating.replace('.', ',')} su 5`,
  },
  awards: {
    headingLead: 'Giggal.ai è stato nominato',
    headingRest: 'Leader su SourceForge e Slashdot',
    showLabel: 'Mostra {badge}',
  },
  steps: {
    title: 'Verifica indirizzo email: come verificare se un indirizzo è valido',
    intro:
      'Un controllo email completo, detto anche verifica email, ha quattro passaggi. Gli strumenti che fanno solo il primo sono il motivo per cui tante liste "verificate" rimbalzano ancora.',
    items: [
      {
        title: 'Formato',
        text: "L'indirizzo è scritto bene: una sola @, un nome valido prima di essa, un dominio con un'estensione come .com. Questo passaggio trova gli errori di battitura e nient'altro.",
      },
      {
        title: 'Server di posta',
        text: "Il dominio pubblica i record del server di posta (MX)? Senza record MX nessuna casella può esistere lì, quindi l'indirizzo è morto prima di inviare qualsiasi messaggio.",
      },
      {
        title: 'Casella',
        text: "Lo strumento chiede al server di posta se questa casella esiste, senza inviare un'email. Un sì significa che la casella esiste. Un no significa che non c'è.",
      },
      {
        title: 'Catch-all',
        text: 'Se il server dice sì anche a un indirizzo inventato, il passaggio tre non ha dimostrato nulla. Qui la maggior parte degli strumenti di verifica email scrive "catch-all" e si ferma. Giggal.ai usa segnali aggiuntivi che distinguono una casella reale da una risposta accept-all, e restituisce valida o non valida.',
      },
    ],
    footnote:
      "Il pannello dei risultati qui sopra mostra ogni passaggio mentre viene eseguito. Per controllare se un indirizzo email è valido, incollalo e premi il pulsante. Un indirizzo richiede pochi secondi.",
  },
  results: {
    title: 'Verifica mail: cosa ti mostra lo strumento per ogni indirizzo',
    intro: 'Ogni controllo termina con uno di tre risultati.',
    valid: {
      title: 'Valida',
      text: 'La casella esiste e ha superato i controlli aggiuntivi, quindi la posta inviata dovrebbe arrivare.',
    },
    invalid: {
      title: 'Non valida',
      text: "L'indirizzo ha un formato sbagliato, non ha un server di posta, oppure il server ha rifiutato la casella. La posta inviata a questo indirizzo rimbalzerà.",
    },
    unknown: {
      title: 'Sconosciuta',
      text: 'Qui è un caso raro. Il server non ha risposto in tempo o rallenta di proposito i mittenti nuovi. Ricontrolla più tardi invece di considerare morto l\'indirizzo.',
    },
    detailsIntro: 'Sotto il risultato, la verifica indirizzo email elenca i dettagli da cui dipende la consegna:',
    details: [
      { lead: 'Il provider di posta', rest: ' (Google Workspace, Microsoft 365 o un gateway come Proofpoint)' },
      { lead: 'Il server di posta che ha risposto', rest: '' },
      {
        lead: "Se l'indirizzo è usa e getta",
        rest: ' (una casella temporanea che sparirà)',
        href: '/it/verifica-email-temporanea',
      },
      {
        lead: 'Se è un indirizzo di ruolo',
        rest: ' (info@, vendite@, supporto@, che arrivano a una casella condivisa, non a una persona)',
      },
      {
        lead: 'Se si trova su un provider di posta personale',
        rest: ' come Gmail o Yahoo, un dato utile quando qualifichi contatti B2B',
      },
    ],
  },
  exists: {
    title: 'Verifica email esistente: come controllare se un indirizzo esiste',
    p1: "Un indirizzo email esiste quando la sua casella è attiva sul server di posta del destinatario e accetta posta. Per verificare l'indirizzo email, lo strumento chiede direttamente a quel server, senza inviare un messaggio. Così dimostra che la casella c'è. Non dimostra chi ne è il proprietario o quanto spesso la legge.",
    p2: 'Se non sei sicuro che un indirizzo dei tuoi contatti esista, controllalo con la verifica email qui sopra.',
    signsIntro: 'Gli indirizzi che non esistono di solito mostrano uno di questi segnali:',
    signs: [
      {
        lead: 'Domini con errori di battitura',
        rest: ' come gmial.com o yaho.com, che non hanno un server di posta o rifiutano tutto.',
      },
      { lead: 'Nessun record del server di posta', rest: ' sul dominio, quindi la posta non ha dove arrivare.' },
      {
        lead: 'Una casella rifiutata:',
        rest: " il dominio è reale, ma il server dice che questa persona non c'è, spesso perché ha lasciato l'azienda.",
      },
      {
        lead: 'Stringhe casuali',
        rest: ' prima della @, scritte da bot o da persone che non volevano compilare il modulo.',
      },
    ],
  },
  whySend: {
    title: "Perché verificare un indirizzo email prima dell'invio",
    p1: "La posta inviata a un indirizzo che non esiste torna indietro come hard bounce. Gmail, Outlook e gli altri provider di posta contano i tuoi bounce. Quando troppe tue email rimbalzano, si fidano meno del tuo dominio di invio. Allora più posta finisce nello spam o viene bloccata, anche quella inviata a persone reali. La verifica email trova quegli indirizzi prima dell'invio.",
    readMore: (
      <>
        Leggi la guida su{' '}
        <InlineLink href="/it/blog/hard-bounce-e-soft-bounce">hard bounce e soft bounce</InlineLink> per sapere cosa
        significa ogni codice di bounce e cosa fare.
      </>
    ),
    bounceTitle: 'Tasso di bounce più basso.',
    bounceText: 'Le liste pulite con Giggal.ai di solito hanno un tasso di bounce sotto il 3%.',
    benefits: [
      {
        title: 'Una buona reputazione del mittente.',
        text: 'Meno bounce mantengono affidabile il tuo dominio per i provider di posta.',
      },
      {
        title: 'Consegna migliore.',
        text: 'Con una buona reputazione, più email arrivano nella posta in arrivo invece che nello spam.',
      },
      {
        title: 'Dati più puliti.',
        text: 'Gli indirizzi morti escono dal tuo CRM prima di costarti tempo o crediti di invio.',
      },
    ],
  },
  whenToUse: {
    title: 'Quando usare la verifica email',
    intro: 'Usa questo strumento di verifica email ogni volta che un solo indirizzo decide cosa fare dopo:',
    items: [
      'Prima di rispondere a un contatto in entrata con un indirizzo che sembra scritto a mano.',
      "Quando un'iscrizione rimbalza e vuoi sapere se l'indirizzo è mai esistito.",
      'Prima di scrivere a un indirizzo trovato su un sito web o in un CRM.',
      'Per provare un indirizzo di una lista acquistata prima di pagare per pulire tutto il file.',
      'Per confermare un contatto su un dominio catch-all che un altro strumento ha segnato come "a rischio".',
    ],
  },
  catchAll: {
    title: 'Controllo email su domini catch-all: perché gli altri strumenti si fermano',
    paragraphs: [
      <>
        Alcuni server di posta aziendali accettano ogni indirizzo, reale o inventato. Questo è un{' '}
        <InlineLink href="/it/verifica-catch-all">dominio catch-all</InlineLink>. Se gli chiedi di un dipendente reale,
        risponde sì. Se gli chiedi di un nome inventato, risponde sì anche a quello. Per questo il normale controllo
        della casella lì non dimostra nulla.
      </>,
      <>
        Riconoscere un dominio catch-all è facile: provi un indirizzo inventato e vedi se viene accettato. Per questo
        quasi ogni strumento di controllo email ti dice se un dominio è catch-all. Capire quali caselle dietro quel
        dominio sono reali richiede molto più lavoro. Così la maggior parte degli strumenti si ferma all&apos;etichetta
        e lascia a te la decisione. Nelle liste B2B gli indirizzi catch-all sono spesso una grande parte dei contatti,
        e molti sono persone reali.
      </>,
      <>
        Giggal.ai esegue i controlli aggiuntivi su ogni indirizzo catch-all e restituisce valida o non valida. È anche
        il motivo per cui questa pagina consente solo pochi controlli per visitatore. Leggi{' '}
        <InlineLink href="/it/blog/cos-e-un-indirizzo-email-catch-all">cos&apos;è un indirizzo email catch-all</InlineLink>{' '}
        per tutti i dettagli.
      </>,
    ],
  },
  wholeList: {
    title: 'Verifica email in blocco per una lista intera',
    list: (
      <>
        La verifica email di questa pagina controlla un indirizzo alla volta. Per la verifica in blocco di una lista,
        crea un account e carica un file CSV o Excel fino a 50.000 indirizzi. Poi{' '}
        <InlineLink href="/it">pulisci la tua lista email</InlineLink> con gli stessi controlli su ogni riga. Parti con
        1.000 crediti gratuiti, senza carta.
      </>
    ),
    api: (
      <>
        Per controllare gli indirizzi nella tua app o nel tuo modulo di iscrizione, usa l&apos;
        <InlineLink href="/email-verification-api">API di verifica email</InlineLink>. Esegue gli stessi controlli e
        restituisce il risultato in JSON.
      </>
    ),
  },
  faqTitle: 'Domande frequenti sulla verifica email',
  faqs: [
    {
      q: "Cos'è uno strumento di verifica email?",
      a: "Uno strumento di verifica email ti dice se un indirizzo email è valido. Controlla il formato, il server di posta e la casella stessa. Si chiama anche verificatore o validatore di email. Funziona senza inviare un'email all'indirizzo.",
    },
    {
      q: 'Verifica email e controllo email sono la stessa cosa?',
      a: 'Sì. Verifica email, controllo email e validazione email sono tre nomi per lo stesso tipo di strumento. Tutti verificano un indirizzo email controllando il formato, il server di posta e la casella. La differenza è sui domini catch-all. Molti si fermano lì con "a rischio". Questo restituisce valida o non valida.',
    },
    {
      q: 'Come funziona la verifica email?',
      a: "Esegue quattro controlli in ordine. Prima il formato dell'indirizzo. Poi i record del server di posta del dominio. Poi chiede al server di posta se la casella esiste. Sui domini catch-all, dove il server dice sì a ogni indirizzo, Giggal.ai usa segnali aggiuntivi per distinguere una casella reale da una falsa.",
    },
    {
      q: 'Come verifico se un indirizzo email è valido?',
      a: "Incolla l'indirizzo nella verifica email in cima a questa pagina e avvia il controllo. Ricevi un risultato in pochi secondi: valida, non valida o sconosciuta. Sotto trovi il motivo e i dettagli del server di posta.",
    },
    {
      q: "Posso verificare se un indirizzo email esiste senza inviare un'email?",
      a: 'Sì. La verifica email chiede al server di posta del destinatario se la casella esiste e si ferma prima di inviare qualsiasi messaggio. Nella casella della persona non arriva nulla.',
    },
    {
      q: "La verifica email invia un'email all'indirizzo?",
      a: "No. Il controllo comunica solo con il server di posta. Il proprietario dell'indirizzo non riceve nulla e non sa che l'indirizzo è stato controllato.",
    },
    {
      q: 'La verifica email è accurata?',
      a: 'Dipende dallo strumento. La maggior parte è accurata sui domini normali e si ferma sui domini catch-all, dove restituisce "a rischio" o "sconosciuta". Giggal.ai continua i controlli sui domini catch-all e restituisce valida o non valida. Sulle liste aziendali misura un\'accuratezza del 98,5%.',
    },
    {
      q: 'Cosa significa "valida" su un dominio catch-all?',
      a: 'Significa che la casella è stata confermata, non solo che il dominio ha accettato il destinatario. Una semplice etichetta catch-all dice solo che il server risponde sì a tutto. Qui "valida" significa che l\'indirizzo ha superato i controlli aggiuntivi. Questi controlli separano una casella reale da una che produrrà un bounce.',
    },
    {
      q: 'Cosa significa "sconosciuta" in una verifica email?',
      a: "Il server di posta non ha dato una risposta chiara in tempo. Spesso succede perché rallenta di proposito i mittenti nuovi (greylisting). Non è provato che l'indirizzo sia morto. Ricontrollalo più tardi.",
    },
    {
      q: 'Quanti indirizzi posso verificare qui?',
      a: 'Pochi ogni ora, senza registrazione e senza carta. Ogni verifica esegue tutti i controlli, per questo il numero è basso. Per verificarne di più, crea un account.',
    },
    {
      q: 'Un indirizzo email valido può comunque rimbalzare?',
      a: 'Sì, ma raramente. Il risultato "valida" significa che la casella esisteva al momento del controllo. La posta può comunque rimbalzare se la casella è piena o se il server di posta è fuori servizio per un po\'. Succede anche se la persona lascia l\'azienda dopo il controllo, o se il server blocca il tuo dominio di invio. Verifica gli indirizzi poco prima dell\'invio.',
    },
    {
      q: 'I miei dati restano privati?',
      a: "Giggal.ai è gestito da TargetPulse Ltd e tratta i dati personali secondo il GDPR. L'informativa sulla privacy su giggal.ai/it/privacy spiega quali dati raccoglie, come li usa e per quanto tempo li conserva.",
    },
    {
      q: 'Posso verificare una lista intera qui?',
      a: 'Non da questa pagina. Crea un account e carica la lista come file CSV o Excel. Ogni indirizzo riceve gli stessi controlli. Parti con 1.000 crediti gratuiti, senza carta.',
    },
  ],
  ctaHeadline: 'Verifica tutta la tua lista',
  related: [
    { href: '/it/verifica-email/email-esistente', label: 'come verificare se un indirizzo email esiste' },
    { href: '/it/verifica-catch-all', label: 'verifica catch-all e indirizzi a rischio' },
    { href: '/it/blog/cos-e-un-indirizzo-email-catch-all', label: "cos'è un indirizzo email catch-all" },
    { href: '/it/prezzi', label: 'prezzi e crediti' },
    { href: '/it/verifica-email-temporanea', label: 'verifica email temporanee e usa e getta' },
  ],
}
