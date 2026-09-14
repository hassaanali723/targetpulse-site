import type { Metadata } from 'next'
import LegalPageIt, { type LegalSection } from '@/components/it/LegalPageIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Termini di servizio',
  description: 'Termini e condizioni di utilizzo del servizio di verifica email Giggal.ai. Traduzione di cortesia; fa fede la versione inglese.',
  alternates: { canonical: '/it/termini', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'it_IT', title: 'Termini di servizio', url: 'https://giggal.ai/it/termini', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Accettazione dei termini', paragraphs: [
    'Accedendo ai servizi di Giggal.ai e usandoli, accetti di essere vincolato dai termini e dalle condizioni di questo accordo. Se non intendi rispettarli, non usare il servizio.',
    'Questi Termini di servizio regolano l\'uso del servizio Giggal.ai Email Verifier gestito da Hassaan Ali Mehmood, che opera con il nome commerciale Giggal.ai.',
  ]},
  { heading: '2. Descrizione del servizio', paragraphs: [
    'Giggal.ai Email Verifier è uno strumento in cloud che aiuta i team a pulire e convalidare liste di email. Gli utenti caricano file CSV o singoli indirizzi e noi controlliamo consegnabilità, sintassi e stato della casella per ridurre gli indirizzi non validi e migliorare la consegna.',
    'Il Servizio è fornito nel rispetto di questi Termini e di eventuali condizioni aggiuntive applicabili.',
  ]},
  { heading: '2.1 Servizio di verifica email', level: 3, paragraphs: ['Il nostro servizio principale è la verifica e la convalida delle email, che comprende:'], list: [
    'Convalida della sintassi: verifica del formato e della struttura dell\'indirizzo',
    'Convalida del dominio: controllo che il dominio esista e abbia record MX validi',
    'Verifica della casella: controllo che l\'indirizzo specifico esista e possa ricevere posta',
    'Rilevamento email usa e getta: identificazione degli indirizzi temporanei',
    'Rilevamento account di ruolo: identificazione degli indirizzi generici (es. info@, supporto@)',
    'Rilevamento catch-all: identificazione dei domini che accettano qualsiasi indirizzo',
    'Convalida SMTP: verifica in tempo reale tramite protocollo SMTP',
    'Verifica in blocco: elaborazione di migliaia di indirizzi contemporaneamente',
  ]},
  { heading: '2.2 Sistema a crediti', level: 3, paragraphs: ['Il servizio funziona a crediti:'], list: [
    '1 credito = 1 verifica: ogni verifica consuma esattamente 1 credito dal saldo',
    'A consumo: pacchetti di crediti acquistabili in qualsiasi momento',
    'Abbonamenti ricorrenti: pacchetti mensili con sconto rispetto al prezzo a consumo',
    'Nessuna scadenza: i crediti restano disponibili finché non vengono usati',
    'Prova gratuita: i nuovi account ricevono 1.000 crediti omaggio',
  ]},
  { heading: '2.3 Funzioni del servizio', level: 3, list: [
    'Accesso API in tempo reale', 'Caricamento ed elaborazione in blocco', 'Report e analisi dettagliati',
    'Esportazione in CSV, Excel e JSON', 'Rilevamento e rimozione dei duplicati', 'Strumenti di pulizia e segmentazione delle liste',
    'Integrazioni tramite API e sistemi di terze parti compatibili',
  ]},
  { heading: '3. Account utente', paragraphs: ['Per usare alcune funzioni devi registrare un account. Ti impegni a:'], list: [
    'Fornire informazioni accurate, aggiornate e complete alla registrazione',
    'Mantenere aggiornate le informazioni dell\'account',
    'Proteggere la password e accettare i rischi di un accesso non autorizzato',
    'Segnalarci subito qualsiasi uso non autorizzato dell\'account',
    'Rispondere di tutte le attività svolte con il tuo account',
  ]},
  { heading: '4. Condizioni di pagamento', paragraphs: ['I pagamenti sono gestiti in modo sicuro dal nostro gateway di pagamento autorizzato. Acquistando crediti o servizi accetti di:'], list: [
    'Fornire informazioni di acquisto e di account attuali, complete e accurate',
    'Aggiornare tempestivamente i dati di account e di pagamento',
    'Pagare tutti gli importi ai prezzi in vigore al momento dell\'acquisto',
    'Pagare le imposte, l\'IVA o altre spese applicabili',
  ]},
  { heading: '4.1 Modalità di acquisto', level: 3, list: [
    'Acquisto una tantum (a consumo): pacchetti di crediti aggiunti subito all\'account',
    'Abbonamento mensile: crediti ricevuti automaticamente ogni mese con sconto',
  ]},
  { heading: '4.2 Prezzi e fatturazione', level: 3, paragraphs: [
    'Tutti i prezzi sono espressi in dollari USA e includono le spese applicabili. I crediti vengono aggiunti all\'account alla conferma del pagamento. Gli acquisti di crediti non sono rimborsabili, salvo quanto previsto dalla legge o dalla Politica sui rimborsi.',
  ]},
  { heading: '4.3 Crediti di prova gratuiti', level: 3, paragraphs: ['I nuovi utenti ricevono 1.000 crediti di prova alla registrazione. I crediti di prova:'], list: [
    'Sono gratuiti e non richiedono dati di pagamento', 'Funzionano come i crediti a pagamento', 'Non sono rimborsabili perché omaggio',
    'Permettono di verificare fino a 1.000 indirizzi', 'Servono a valutare la qualità del servizio prima dell\'acquisto',
  ]},
  { heading: '5. Abbonamenti ricorrenti', paragraphs: ['Gli abbonamenti mensili vengono addebitati automaticamente ogni mese, in anticipo; i crediti vengono aggiunti all\'account al buon esito del pagamento. In particolare:'], list: [
    'L\'abbonamento si rinnova automaticamente alla fine di ogni ciclo, salvo disdetta',
    'Puoi disdire in qualsiasi momento prima della data di rinnovo',
    'La disdetta ha effetto alla fine del periodo in corso',
    'I crediti già aggiunti restano disponibili dopo la disdetta',
    'Gli abbonati ricevono uno sconto rispetto al prezzo a consumo',
  ]},
  { heading: '6. Uso e gestione dei crediti' },
  { heading: '6.1 Consumo dei crediti', level: 3, list: [
    'Ogni verifica completata consuma esattamente 1 credito', 'I crediti vengono scalati solo per le verifiche completate',
    'Le verifiche fallite per errori del sistema non consumano crediti', 'Gli indirizzi duplicati nello stesso caricamento vengono elaborati una sola volta',
  ]},
  { heading: '6.2 Validità e trasferimento dei crediti', level: 3, list: [
    'Nessuna scadenza: i crediti restano sull\'account a tempo indeterminato', 'Non trasferibili tra account',
    'Non rimborsabili dopo l\'acquisto (salvo le eccezioni della Politica sui rimborsi)', 'Legati all\'account e non condivisibili',
  ]},
  { id: 'cancellation-policy', heading: '7. Disdetta e rimborsi', paragraphs: ['Puoi disdire l\'abbonamento in qualsiasi momento dalle impostazioni dell\'account o scrivendo a info@giggal.ai. Dopo la disdetta:'], list: [
    'L\'abbonamento non si rinnova al ciclo successivo', 'Conservi tutti i crediti presenti sull\'account',
    'Puoi continuare a usare i crediti senza limitazioni', 'Puoi ancora acquistare pacchetti a consumo',
  ], after: ['I rimborsi per attività anomale o circostanze eccezionali sono gestiti secondo la Politica sui rimborsi. In caso di problemi o sospetta frode, contatta subito il supporto.']},
  { heading: '8. Uso accettabile', paragraphs: ['Ti impegni a usare il Servizio solo per scopi leciti e nel rispetto delle leggi applicabili. In particolare non userai il Servizio per:'], list: [
    'Verificare indirizzi ottenuti senza consenso o autorizzazione', 'Inviare spam o messaggi non richiesti dopo la verifica',
    'Violare leggi o regolamenti, tra cui CAN-SPAM, GDPR e CASL', 'Violare i diritti di terzi', 'Diffondere malware o codice dannoso',
    'Impersonare persone o enti', 'Compiere frodi o abusare del servizio', 'Rivendere o ridistribuire il servizio senza autorizzazione',
    'Tentare di decompilare o compromettere i nostri sistemi', 'Condividere credenziali o crediti con utenti non autorizzati',
  ]},
  { heading: '9. Precisione e limiti del servizio', paragraphs: ['Puntiamo alla massima precisione, ma riconosci e accetti che:'], list: [
    'La verifica email non può garantire il 100% di precisione per limiti tecnici', 'Alcuni server possono dare risposte falsamente positive o negative',
    'I risultati si basano su controlli in tempo reale e possono cambiare', 'I risultati sono forniti "così come sono" senza garanzie di consegna',
    'Sei responsabile dell\'uso lecito dei dati verificati e delle comunicazioni successive',
  ]},
  { heading: '10. Uso lecito e conformità delle comunicazioni', paragraphs: ['Se usi gli indirizzi verificati per attività di outreach, messaggi transazionali o di assistenza, sei l\'unico responsabile del rispetto delle leggi applicabili, tra cui:'], list: [
    'CAN-SPAM Act (Stati Uniti)', 'GDPR (Unione Europea)', 'CASL (Canada)', 'Altre leggi antispam e sulla protezione dei dati',
  ], after: ['Devi ottenere i consensi richiesti e includere i meccanismi di disiscrizione previsti dalla legge. Giggal.ai non è responsabile dell\'uso che fai degli indirizzi verificati.']},
  { heading: '11. Proprietà intellettuale', paragraphs: ['Il Servizio e i suoi contenuti, funzioni e funzionalità originali appartengono a Giggal.ai e sono protetti dalle leggi internazionali su diritto d\'autore, marchi, brevetti, segreti industriali e altre proprietà intellettuali. Non puoi copiare, modificare, distribuire, vendere o concedere in licenza alcuna parte del Servizio senza il nostro consenso scritto.']},
  { heading: '12. Dati e privacy', paragraphs: [
    'L\'uso del Servizio è regolato anche dalla nostra Informativa sulla privacy. Conservi tutti i diritti sui tuoi dati e sulle tue liste, che non useremo per scopi diversi dalla fornitura del servizio.',
    'Gli indirizzi inviati per la verifica sono elaborati in modo sicuro e non conservati in modo permanente. Non vendiamo, condividiamo né usiamo le tue liste per altri scopi.',
  ]},
  { heading: '13. Modifiche e disponibilità del servizio', paragraphs: [
    'Ci riserviamo il diritto di modificare o interrompere il Servizio, in tutto o in parte, temporaneamente o definitivamente, con o senza preavviso, senza responsabilità verso te o terzi.',
    'Puntiamo a un\'alta disponibilità ma non garantiamo un accesso ininterrotto. Le manutenzioni programmate vengono annunciate in anticipo quando possibile.',
  ]},
  { heading: '14. Limitazione di responsabilità', paragraphs: ['Nella misura massima consentita dalla legge, Giggal.ai e i suoi amministratori, dipendenti, partner, agenti, fornitori e affiliati non sono responsabili di danni indiretti, incidentali, speciali, consequenziali o punitivi, compresi perdita di profitti, dati, avviamento o altre perdite immateriali, derivanti da:'], list: [
    'L\'accesso o l\'uso del Servizio, o l\'impossibilità di accedervi', 'Condotte o contenuti di terzi sul Servizio', 'Contenuti ottenuti dal Servizio',
    'Accessi, usi o alterazioni non autorizzati delle tue trasmissioni o dei tuoi contenuti', 'Risultati di verifica inesatti',
    'Mancate consegne o rimbalzi dopo la verifica', 'Crediti consumati per errore o uso improprio da parte dell\'utente',
  ]},
  { heading: '15. Esclusione di garanzie', paragraphs: [
    'Il Servizio è fornito "così com\'è" e "secondo disponibilità", senza garanzie di alcun tipo, esplicite o implicite, comprese le garanzie implicite di commerciabilità, idoneità a uno scopo specifico e non violazione.',
    'Non garantiamo che il Servizio sia ininterrotto, puntuale, sicuro o privo di errori, né che i risultati di verifica siano precisi al 100%.',
  ]},
  { heading: '16. Manleva', paragraphs: ['Ti impegni a difendere, manlevare e tenere indenne Giggal.ai, i suoi licenziatari e licenzianti da qualsiasi pretesa, danno, obbligo, perdita, responsabilità, costo o spesa derivante dall\'uso del Servizio, dalla violazione di questi Termini o dalla violazione dei diritti di terzi.']},
  { heading: '17. Risoluzione', paragraphs: ['Possiamo chiudere o sospendere il tuo account e l\'accesso al Servizio immediatamente, senza preavviso né responsabilità, per qualsiasi motivo, compresa la violazione di questi Termini. In caso di risoluzione:'], list: [
    'Il diritto di usare il Servizio cessa immediatamente', 'I crediti non usati vengono persi senza rimborso',
    'Gli abbonamenti vengono annullati', 'L\'accesso all\'account e ai dati può essere revocato in modo permanente',
  ]},
  { heading: '18. Legge applicabile', paragraphs: ['Questi Termini sono regolati e interpretati secondo le leggi della giurisdizione in cui opera Giggal.ai, senza riguardo alle norme sui conflitti di legge.']},
  { heading: '19. Risoluzione delle controversie', paragraphs: ['Le controversie derivanti da questi Termini o dal Servizio verranno prima affrontate con una negoziazione in buona fede. Se la negoziazione fallisce, saranno risolte tramite arbitrato vincolante secondo le regole applicabili nella giurisdizione in cui opera Giggal.ai.']},
  { heading: '20. Modifiche ai termini', paragraphs: ['Ci riserviamo il diritto di modificare o sostituire questi Termini in qualsiasi momento. Se una modifica è sostanziale, daremo un preavviso di almeno 30 giorni prima dell\'entrata in vigore. Cosa costituisca una modifica sostanziale è a nostra discrezione.']},
  { heading: '21. Clausola di salvaguardia', paragraphs: ['Se una disposizione di questi Termini risulta inapplicabile o non valida, verrà modificata e interpretata per realizzarne gli obiettivi nella misura massima consentita dalla legge, e le altre disposizioni resteranno pienamente efficaci.']},
  { heading: '22. Contatti', paragraphs: ['Per domande su questi Termini di servizio: email info@giggal.ai, sito https://giggal.ai.', 'Usando i servizi di Giggal.ai dichiari di aver letto e compreso questi Termini di servizio e di accettarli.']},
]

export default function TerminiPage() {
  return (
    <LegalPageIt
      path="/it/termini"
      title="Termini di"
      accent="servizio"
      updated="4 febbraio 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
