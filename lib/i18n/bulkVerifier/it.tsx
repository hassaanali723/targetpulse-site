import type { BulkVerifierCopy } from '@/components/l10n/BulkVerifierL10n'
import { InlineLink } from '@/components/l10n/BulkVerifierL10n'

// Italian copy for /it/verifica-email-in-blocco, translated from the English
// /bulk-email-verifier page. Primary term from the Italian home title:
// "verifica email in blocco". Variants: verifica in blocco, verificare una
// lista di email, controllo email in blocco, verifica email massiva, gratis.
// The English "bulk email verifier" appears once, in the definition.
// Terms and informal address (tu) follow lib/i18n/emailChecker/it.tsx.

export const copy: BulkVerifierCopy = {
  meta: {
    title: 'Verifica email in blocco: controlla liste intere gratis',
    description:
      'Verifica email in blocco per liste CSV ed Excel fino a 50.000 indirizzi. Ogni riga ha il risultato valida o non valida, catch-all inclusi. 1.000 crediti gratis.',
    breadcrumb: 'Verifica email in blocco',
    appName: 'Giggal.ai Verifica email in blocco',
  },
  hero: {
    h1Lead: 'Verifica email in blocco:',
    h1Rest: 'controlla tutta la lista in una volta',
    intro:
      'Carica un file CSV o Excel e la verifica email in blocco controlla ogni indirizzo. Ogni riga riceve il risultato valida o non valida, anche per gli indirizzi catch-all.',
    ctaPrimary: 'Verifica una lista gratis',
    ctaPricing: 'Vedi i prezzi',
    checks: ['1.000 crediti gratuiti', 'Nessuna carta richiesta', 'I crediti non scadono mai'],
  },
  facts: [
    { v: '50.000', l: 'indirizzi per file' },
    { v: '98,5%', l: 'di accuratezza sulle liste aziendali' },
    { v: '1 credito', l: 'per indirizzo, catch-all incluso' },
    { v: '<3%', l: 'di bounce dopo la verifica, di solito' },
  ],
  definition: {
    title: "Cos'è la verifica email in blocco?",
    text: "La verifica email in blocco controlla una lista intera di indirizzi email in una volta. Ti dice quali indirizzi possono ricevere posta. In inglese lo strumento si chiama bulk email verifier. Cerca i server di posta di ogni dominio e chiede se ogni casella esiste, senza inviare un'email. Prima dell'invio rimuovi gli indirizzi che rimbalzerebbero. Così proteggi la tua reputazione del mittente e la consegna delle tue email.",
  },
  steps: {
    title: 'Come funziona la verifica email in blocco',
    intro:
      'Tre passaggi, e nessuna email viene inviata ai contatti della tua lista. La maggior parte delle liste è pronta in pochi minuti.',
    items: [
      {
        title: 'Carica la tua lista',
        text: 'Aggiungi un file CSV o Excel con un massimo di 50.000 indirizzi email. Per una lista più grande, dividila in più file.',
      },
      {
        title: 'Ogni indirizzo viene controllato',
        text: 'Il controllo email in blocco cerca i server di posta di ogni dominio e chiede se la casella esiste. Segnala anche gli indirizzi usa e getta, di ruolo, duplicati e catch-all.',
      },
      {
        title: 'Scarica i risultati',
        text: 'Ricevi un file CSV con un risultato su ogni riga. Tieni gli indirizzi validi, rimuovi quelli non validi e ricontrolla più tardi quelli sconosciuti.',
      },
    ],
  },
  results: {
    title: 'Cosa restituisce il controllo email in blocco per ogni indirizzo',
    intro: 'Ogni riga termina con uno di tre risultati.',
    valid: {
      title: 'Valida',
      text: 'La casella esiste, quindi la posta inviata dovrebbe arrivare. Tieni questi indirizzi.',
    },
    invalid: {
      title: 'Non valida',
      text: 'Il formato è sbagliato, il dominio non ha un server di posta, oppure la casella non esiste. La posta inviata qui rimbalzerà. Rimuovi questi indirizzi.',
    },
    unknown: {
      title: 'Sconosciuta',
      text: 'Il server di posta non ha dato una risposta chiara, spesso a causa del greylisting. Ricontrolla questi indirizzi più tardi. I crediti dei risultati sconosciuti vengono rimborsati.',
    },
    flagsIntro: 'Ogni riga mostra anche questi indicatori, così puoi decidere cosa tenere:',
    flags: [
      { lead: 'Catch-all', rest: ', con il risultato valida o non valida invece di "a rischio"' },
      { lead: 'Usa e getta', rest: ', una casella temporanea che smetterà di funzionare' },
      { lead: 'Di ruolo', rest: ', come info@ o vendite@, una casella condivisa e non una persona' },
      { lead: 'Duplicato', rest: ', lo stesso indirizzo presente più volte nel tuo file' },
    ],
  },
  catchAll: {
    title: 'Gli indirizzi catch-all ricevono il risultato valida o non valida',
    paragraphs: [
      <>
        Alcuni server di posta aziendali accettano ogni indirizzo, reale o inventato. Questo è un{' '}
        <InlineLink locale="it" href="/catch-all-verification">dominio catch-all</InlineLink>. Un controllo normale
        riceve un sì per ogni indirizzo su quel dominio. Per questo non distingue una casella reale da un errore di
        battitura.
      </>,
      <>
        Molti strumenti di validazione in blocco si fermano lì e segnano ogni indirizzo catch-all come &quot;a
        rischio&quot;. Nelle liste B2B questi indirizzi possono essere una grande parte dei contatti, e molti sono
        persone reali. A te resta da indovinare a chi inviare.
      </>,
      <>
        Giggal.ai controlla ogni indirizzo catch-all e restituisce valida o non valida, per lo stesso credito di
        qualsiasi altro indirizzo. Funziona anche sui domini protetti da{' '}
        <InlineLink locale="it" href="/seg-email-verification">gateway di sicurezza come Proofpoint e Mimecast</InlineLink>
        , dove altri strumenti spesso restituiscono sconosciuta.
      </>,
    ],
  },
  pricing: {
    title: 'Verifica email in blocco gratis: parti con 1.000 crediti',
    intro:
      "Ogni nuovo account riceve 1.000 crediti gratuiti, senza carta. Bastano per verificare gratis una lista fino a 1.000 indirizzi. Dopo, questo servizio di verifica email in blocco è a consumo. Compri i crediti una volta sola, non c'è un piano mensile e i crediti non scadono mai.",
    colCredits: 'Crediti (indirizzi)',
    colPrice: 'Prezzo',
    colPer1k: 'Per 1.000 indirizzi',
    freeLabel: 'Gratis',
    freeNote: 'Nuovi account, senza carta',
    footnote: (
      <>
        Un credito verifica un indirizzo, controlli catch-all inclusi. Vedi tutti i{' '}
        <InlineLink locale="it" href="/pricing">prezzi</InlineLink>.
      </>
    ),
  },
  useCases: {
    title: 'Quando usare la verifica email in blocco',
    intro:
      'Verifica una lista ogni volta che stai per scrivere a molti indirizzi insieme. Se rimuovi prima gli indirizzi morti, la consegna delle tue email resta alta.',
    items: [
      'Prima di una campagna di cold email, così i bounce non danneggiano la consegna delle tue email.',
      'Dopo aver raccolto contatti da un modulo, da un evento o da un database di lead.',
      'Prima di scrivere a una vecchia lista newsletter che non usi da mesi.',
      'Prima di importare i contatti nel tuo CRM o nel tuo strumento di email.',
    ],
  },
  software: {
    title: 'Software di verifica email in blocco per i tuoi strumenti',
    intro:
      'Caricare un file è un modo. Puoi anche eseguire la verifica email massiva dalla tua app o dal tuo flusso di lavoro.',
    items: [
      {
        title: 'API di verifica email (in inglese)',
        text: 'Invia gli indirizzi dalla tua app o dal tuo modulo di iscrizione e ricevi il risultato in JSON.',
      },
      {
        title: 'Integrazioni',
        text: 'Verifica i nuovi contatti in automatico con Zapier o n8n.',
      },
      {
        title: 'Server MCP',
        text: 'Verifica le email da Claude, ChatGPT, Cursor e VS Code.',
      },
    ],
  },
  versus: {
    listTitle: 'Verificare una lista di email o pulirla?',
    listText: (
      <>
        La verifica di una lista email dà un risultato a ogni indirizzo. La pulizia è quello che fai con quei
        risultati: rimuovi gli indirizzi non validi, usa e getta e duplicati, e tieni un file pulito. Entrambe partono
        dallo stesso caricamento. Leggi di più sulla{' '}
        <InlineLink locale="it" href="/email-list-cleaning">pulizia della lista email</InlineLink> (in inglese).
      </>
    ),
    oneTitle: 'Devi controllare un solo indirizzo?',
    oneText: (
      <>
        Usa la{' '}
        <InlineLink locale="it" href="/email-checker">verifica email gratuita</InlineLink>. Controlla un indirizzo alla
        volta con gli stessi controlli, senza registrazione.
      </>
    ),
  },
  faqTitle: 'Domande frequenti sulla verifica email in blocco',
  faqs: [
    {
      q: "Cos'è uno strumento di verifica email in blocco?",
      a: 'Uno strumento di verifica email in blocco controlla una lista intera di indirizzi email in una volta, invece di un indirizzo alla volta. Carichi un file e ogni indirizzo riceve un risultato: valida, non valida o sconosciuta. Si chiama anche controllo email in blocco o validazione email in blocco.',
    },
    {
      q: 'Quante email posso verificare in una volta?',
      a: 'Fino a 50.000 indirizzi per file. Se la tua lista è più grande, dividila in più file e carica ciascun file.',
    },
    {
      q: 'Esiste una verifica email in blocco gratis?',
      a: 'Sì. Ogni nuovo account riceve 1.000 crediti gratuiti, senza carta. Un credito verifica un indirizzo, quindi puoi verificare gratis una lista fino a 1.000 indirizzi.',
    },
    {
      q: 'La validazione email in blocco gratuita è davvero gratis?',
      a: 'Sì. I tuoi primi 1.000 indirizzi sono gratis, senza carta. I crediti gratuiti non scadono mai, quindi puoi usarli quando vuoi. Paghi solo se devi verificare più di 1.000 indirizzi.',
    },
    {
      q: 'Quanto tempo richiede la verifica email in blocco?',
      a: 'La maggior parte delle liste è pronta in pochi minuti.',
    },
    {
      q: 'Quali formati di file posso caricare?',
      a: 'CSV o Excel. Scarichi i risultati come file CSV, con un risultato su ogni riga.',
    },
    {
      q: 'Il controllo email in blocco invia email alla mia lista?',
      a: 'No. Chiede a ogni server di posta se la casella esiste e si ferma prima di inviare qualsiasi messaggio. Nessuno nella tua lista riceve nulla.',
    },
    {
      q: 'Quanto costa la verifica email in blocco?',
      a: 'Un credito per indirizzo, controlli catch-all inclusi. 10.000 indirizzi costano 9,90 $ e 100.000 costano 76 $. Paghi una volta, senza piano mensile, e i crediti non scadono mai.',
    },
    {
      q: 'Cosa succede agli indirizzi catch-all?',
      a: 'Ognuno viene controllato e riceve il risultato valida o non valida, per lo stesso credito di qualsiasi altro indirizzo. Molti strumenti di validazione in blocco invece li segnano tutti come "a rischio".',
    },
    {
      q: 'Cosa significa "sconosciuta"? Pago anche questi risultati?',
      a: 'Sconosciuta significa che il server di posta non ha dato una risposta chiara, spesso perché rallenta di proposito i mittenti nuovi (greylisting). Ricontrolla quegli indirizzi più tardi. I crediti dei risultati sconosciuti vengono rimborsati.',
    },
    {
      q: 'La validazione email in blocco è la stessa cosa della verifica email in blocco?',
      a: 'Sì. Validazione, verifica e controllo sono tre parole per lo stesso lavoro: capire quali indirizzi di una lista possono ricevere posta.',
    },
    {
      q: 'Quanto è accurata la verifica email in blocco?',
      a: "Giggal.ai misura un'accuratezza del 98,5% sulle liste aziendali. Le liste verificate con Giggal.ai di solito hanno un tasso di bounce sotto il 3%.",
    },
    {
      q: 'La mia lista resta privata?',
      a: "Giggal.ai è gestito da TargetPulse Ltd e tratta i dati personali secondo il GDPR. L'informativa sulla privacy su giggal.ai/it/privacy spiega quali dati raccoglie, come li usa e per quanto tempo li conserva.",
    },
  ],
  ctaHeadline: 'Verifica la tua lista email in pochi minuti',
}
