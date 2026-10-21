import type { Metadata } from 'next'
import LegalPageIt, { type LegalSection } from '@/components/it/LegalPageIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Termini di servizio per la verifica delle email',
  description: 'Termini di utilizzo di Giggal.ai: account, acquisto di crediti, abbonamenti, uso dei crediti e regole del servizio. Fa fede la versione inglese.',
  alternates: { canonical: '/it/termini', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'it_IT', title: 'Termini di servizio', url: 'https://giggal.ai/it/termini', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

// Courtesy translation of app/(en)/terms-of-service/page.tsx
// (English "Last Updated: October 22, 2026"). The English text is binding; the
// notice at the top of LegalPageL10n says so. Numbers in Italian format (1.000).

const sections: LegalSection[] = [
  { heading: '1. Accettazione dei termini', paragraphs: [
    'Il servizio è gestito da TargetPulse Ltd ("noi"), società registrata in Inghilterra e Galles con il numero 17079825, con sede legale in Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd è il titolare del trattamento dei dati personali trattati tramite Giggal.ai. Contatti: info@giggal.ai. Segnalazioni di abuso: abuse@giggal.ai.',
    'Accedendo ai servizi di Giggal.ai e utilizzandoli, accetti i termini e le disposizioni del presente accordo e accetti di esserne vincolato. Se non accetti di rispettare quanto sopra, ti preghiamo di non utilizzare questo servizio.',
    'I presenti Termini di servizio regolano l\'uso del servizio Giggal.ai Email Verifier gestito da TargetPulse Ltd, che opera con il nome commerciale Giggal.ai.',
  ]},
  { heading: '2. Descrizione del servizio', paragraphs: [
    'Giggal.ai Email Verifier è uno strumento basato su cloud che aiuta i team a pulire e convalidare liste di email. Gli utenti caricano file CSV o singoli indirizzi email. Noi controlliamo la consegnabilità, i record del dominio e l\'esistenza di ciascuna casella di posta, per ridurre gli indirizzi non validi e migliorare la qualità delle liste. Il prodotto è venduto come sistema a crediti con pagamento a consumo, quindi i clienti pagano solo per le email che convalidano effettivamente.',
    'Il Servizio ti viene fornito nel rispetto dei presenti Termini di servizio e di eventuali termini e condizioni aggiuntivi applicabili.',
  ]},
  { heading: '2.1 Servizio di verifica email', level: 3, paragraphs: ['Il nostro servizio principale è la verifica e la convalida delle email, che comprende:'], list: [
    'Rilevamento dei gateway: identificazione dei Secure Email Gateway e dei filtri perimetrali di difesa',
    'Convalida del dominio: controllo che il dominio dell\'email esista e abbia record MX validi',
    'Verifica della casella: controllo che lo specifico indirizzo email esista e possa ricevere email',
    'Rilevamento delle email usa e getta: identificazione degli indirizzi email temporanei o usa e getta',
    'Rilevamento delle email di ruolo: rilevamento degli indirizzi email generici (ad es. info@, support@)',
    'Rilevamento catch-all: identificazione dei domini che accettano tutti gli indirizzi email',
    'Verifica in tempo reale: controllo dell\'esistenza della casella di posta del destinatario',
    'Verifica in blocco: elaborazione simultanea di migliaia di indirizzi email',
  ]},
  { heading: '2.2 Sistema a crediti', level: 3, paragraphs: ['Il nostro servizio funziona con un modello a crediti in cui:'], list: [
    '1 credito = 1 verifica email: ogni verifica di un indirizzo email consuma esattamente 1 credito dal saldo del tuo account',
    'A consumo: acquista crediti in qualsiasi momento, in pacchetti da 3.000 a 1.000.000 di crediti',
    'Abbonamenti ricorrenti: sottoscrivi pacchetti di crediti mensili ricorrenti con uno sconto del 10% sul prezzo normale',
    'Nessuna scadenza: i crediti non scadono mai e restano disponibili nel tuo account finché non vengono usati',
    'Prova gratuita: i nuovi account ricevono 1.000 crediti omaggio per provare il servizio',
  ]},
  { heading: '2.3 Funzioni del servizio', level: 3, paragraphs: ['Il nostro servizio di verifica email comprende:'], list: [
    'Accesso API in tempo reale per la verifica istantanea',
    'Funzioni di caricamento ed elaborazione in blocco',
    'Report di verifica e analisi dettagliati',
    'Esportazione dei risultati nei formati CSV, Excel e JSON',
    'Rilevamento e rimozione delle email duplicate',
    'Strumenti di pulizia e segmentazione delle liste',
    'Supporto all\'integrazione tramite API e sistemi di terze parti compatibili',
  ]},
  { heading: '3. Account utente', paragraphs: ['Per usare alcune funzioni del Servizio devi registrare un account. Ti impegni a:'], list: [
    'Fornire informazioni accurate, aggiornate e complete durante la registrazione',
    'Mantenere e aggiornare tempestivamente le informazioni del tuo account',
    'Mantenere la sicurezza della tua password e accettare tutti i rischi di accesso non autorizzato',
    'Informarci immediatamente di qualsiasi uso non autorizzato del tuo account',
    'Essere responsabile di tutte le attività svolte con il tuo account',
  ]},
  { heading: '4. Condizioni di pagamento', paragraphs: ['L\'elaborazione dei pagamenti è gestita in modo sicuro tramite il nostro gateway di pagamento autorizzato. Acquistando crediti o servizi, ti impegni a:'], list: [
    'Fornire informazioni di acquisto e di account attuali, complete e accurate',
    'Aggiornare tempestivamente, quando necessario, le informazioni del tuo account e di pagamento',
    'Pagare tutti gli importi ai prezzi in vigore al momento dei tuoi acquisti',
    'Pagare le imposte, l\'IVA o altri oneri applicabili relativi ai tuoi acquisti',
  ]},
  { heading: '4.1 Modalità di acquisto dei crediti', level: 3, paragraphs: ['Puoi acquistare crediti con le seguenti modalità:'], list: [
    'Acquisto una tantum (a consumo): acquista pacchetti di crediti quando ti servono, con aggiunta immediata al tuo account',
    'Abbonamento mensile ricorrente: ricevi crediti automaticamente ogni mese con uno sconto del 10%',
  ]},
  { heading: '4.2 Prezzi e fatturazione', level: 3, paragraphs: [
    'Tutti i prezzi sono indicati in USD e includono le spese applicabili. I crediti vengono aggiunti immediatamente al tuo account alla conferma del pagamento. Nessun acquisto di crediti è rimborsabile, salvo quanto richiesto dalla legge o quanto espressamente previsto dalla nostra Politica sui rimborsi.',
  ]},
  { heading: '4.3 Crediti di prova gratuiti', level: 3, paragraphs: ['I nuovi utenti ricevono 1.000 crediti di prova gratuiti alla registrazione dell\'account. I crediti di prova:'], list: [
    'Sono forniti gratuitamente e non richiedono dati di pagamento',
    'Funzionano esattamente come i crediti a pagamento per la verifica email',
    'Non sono rimborsabili in quanto omaggio',
    'Possono essere usati per verificare fino a 1.000 indirizzi email',
    'Ti aiutano a valutare la qualità del nostro servizio prima dell\'acquisto',
  ]},
  { heading: '5. Servizi in abbonamento ricorrente', paragraphs: ['Gli abbonamenti mensili ricorrenti ai crediti vengono addebitati automaticamente ogni mese. L\'addebito avviene in anticipo su base mensile ricorrente, e i crediti vengono aggiunti al tuo account al buon esito del pagamento. Le condizioni principali sono:'], list: [
    'Gli abbonamenti si rinnovano automaticamente alla fine di ogni ciclo di fatturazione, salvo disdetta',
    'Puoi disdire l\'abbonamento in qualsiasi momento prima della successiva data di fatturazione',
    'La disdetta ha effetto alla fine del periodo di fatturazione in corso',
    'I crediti già aggiunti al tuo account restano disponibili dopo la disdetta',
    'Gli abbonati ricorrenti ricevono uno sconto del 10% rispetto al prezzo a consumo',
  ]},
  { heading: '6. Uso e gestione dei crediti' },
  { heading: '6.1 Consumo dei crediti', level: 3, paragraphs: ['I crediti vengono consumati come segue:'], list: [
    'Ogni verifica email completata con successo consuma esattamente 1 credito',
    'I crediti vengono scalati solo per le verifiche completate',
    'Le verifiche non riuscite a causa di errori del sistema non consumano crediti',
    'Le email duplicate nello stesso lotto di verifica vengono elaborate una sola volta',
  ]},
  { heading: '6.2 Validità e trasferimento dei crediti', level: 3, paragraphs: ['Regole importanti sui crediti:'], list: [
    'Nessuna scadenza: i crediti non scadono mai e restano nel tuo account a tempo indeterminato',
    'Non trasferibili: i crediti non possono essere trasferiti tra account',
    'Non rimborsabili: una volta acquistati, i crediti non sono rimborsabili (vedi la Politica sui rimborsi per le eccezioni)',
    'Legati all\'account: i crediti sono legati al tuo account e non possono essere condivisi',
  ]},
  { id: 'cancellation-policy', heading: '7. Disdetta e rimborsi', paragraphs: ['Puoi disdire il tuo abbonamento ricorrente in qualsiasi momento dalle impostazioni dell\'account o contattando il nostro team di assistenza a info@giggal.ai. Dopo la disdetta:'], list: [
    'Il tuo abbonamento non si rinnoverà per il ciclo di fatturazione successivo',
    'Conservi tutti i crediti presenti nel tuo account',
    'Puoi continuare a usare i crediti esistenti senza limitazioni',
    'Puoi comunque acquistare pacchetti di crediti a consumo',
  ], after: ['I rimborsi per attività anomale o circostanze eccezionali sono gestiti secondo la nostra Politica sui rimborsi. Se riscontri problemi o sospetti attività fraudolente, contatta immediatamente il nostro team di assistenza per una verifica.']},
  { heading: '8. Politica di uso accettabile', paragraphs: ['Ti impegni a usare il Servizio solo per scopi leciti e nel rispetto di tutte le leggi e i regolamenti applicabili. Ti impegni a non usare il Servizio:'], list: [
    'Per verificare indirizzi email ottenuti senza un consenso o un\'autorizzazione adeguati',
    'Per inviare spam o messaggi email non richiesti dopo la verifica',
    'Per violare leggi o regolamenti applicabili, tra cui il CAN-SPAM Act, il GDPR e la CASL',
    'Per ledere o violare i diritti di altri',
    'Per diffondere malware o altro codice dannoso',
    'Per impersonare qualsiasi persona o ente',
    'Per svolgere attività fraudolente o fare un uso abusivo del nostro servizio',
    'Per rivendere o ridistribuire i nostri servizi di verifica senza autorizzazione',
    'Per tentare di eseguire il reverse engineering dei nostri sistemi di verifica o di comprometterli',
    'Per condividere le credenziali o i crediti del tuo account con utenti non autorizzati',
  ]},
  { heading: '9. Precisione e limiti del servizio', paragraphs: ['Pur puntando alla massima precisione nella verifica email, riconosci e accetti che:'], list: [
    'La verifica email non può garantire una precisione del 100% a causa di limiti tecnici',
    'Alcuni server di posta possono fornire risposte falsamente positive o falsamente negative',
    'I risultati di verifica si basano su controlli in tempo reale e possono cambiare nel tempo',
    'Forniamo i risultati di verifica "così come sono" e non diamo alcuna garanzia sulla consegnabilità',
    'Sei responsabile dell\'uso lecito dei dati verificati e di tutte le comunicazioni successive',
  ]},
  { heading: '10. Uso lecito e conformità delle comunicazioni', paragraphs: ['Se usi indirizzi email verificati per messaggi di outreach, transazionali o di assistenza, sei l\'unico responsabile del rispetto di tutte le leggi e i regolamenti applicabili, tra cui, a titolo esemplificativo e non esaustivo:'], list: [
    'CAN-SPAM Act (Stati Uniti)',
    'GDPR (Unione Europea)',
    'CASL (Canada)',
    'Altre leggi applicabili in materia di antispam e di protezione dei dati',
  ], after: ['Devi ottenere i consensi richiesti e includere, ove applicabile, i meccanismi di disiscrizione o di gestione delle preferenze previsti dalla legge. Giggal.ai non è responsabile dell\'uso che fai degli indirizzi email verificati.']},
  { heading: '11. Proprietà intellettuale', paragraphs: ['Il Servizio e i suoi contenuti, caratteristiche e funzionalità originali sono di proprietà di Giggal.ai e sono protetti dalle leggi internazionali in materia di diritto d\'autore, marchi, brevetti, segreti commerciali e altri diritti di proprietà intellettuale. Non puoi copiare, modificare, distribuire, vendere o concedere in locazione alcuna parte dei nostri servizi senza previa autorizzazione scritta.']},
  { heading: '12. Dati e privacy', paragraphs: [
    'L\'uso del Servizio è regolato anche dalla nostra Informativa sulla privacy. Raccogliamo, conserviamo e trattiamo i tuoi dati come descritto nell\'Informativa sulla privacy. Conservi tutti i diritti sui tuoi dati di cliente e sulle tue liste di email, e non li useremo se non nella misura necessaria a fornire il Servizio o come richiesto dalla legge.',
    'Gli indirizzi email inviati per la verifica vengono trattati in modo sicuro e non sono conservati in modo permanente. Non vendiamo, non condividiamo e non usiamo le tue liste di email per scopi diversi dalla fornitura dei servizi di verifica.',
  ]},
  { heading: '13. Modifiche e disponibilità del servizio', paragraphs: [
    'Ci riserviamo il diritto di modificare o interrompere, temporaneamente o definitivamente, il Servizio (o qualsiasi sua parte), con o senza preavviso. Non saremo responsabili nei tuoi confronti o nei confronti di terzi per qualsiasi modifica, sospensione o interruzione del Servizio.',
    'Ci impegniamo a mantenere un\'elevata disponibilità del servizio, ma non garantiamo un accesso ininterrotto. La manutenzione programmata sarà annunciata in anticipo quando possibile.',
  ]},
  { heading: '14. Limitazione di responsabilità', paragraphs: ['Nella misura massima consentita dalla legge, in nessun caso Giggal.ai, i suoi amministratori, dipendenti, partner, agenti, fornitori o affiliati saranno responsabili di danni indiretti, incidentali, speciali, consequenziali o punitivi, inclusi, a titolo esemplificativo, la perdita di profitti, dati, uso, avviamento o altre perdite immateriali, derivanti da:'], list: [
    'Il tuo accesso al Servizio o il suo uso, oppure l\'impossibilità di accedervi o di usarlo',
    'Qualsiasi condotta o contenuto di terzi sul Servizio',
    'Qualsiasi contenuto ottenuto dal Servizio',
    'Accesso, uso o alterazione non autorizzati delle tue trasmissioni o dei tuoi contenuti',
    'Risultati di verifica email inesatti',
    'Mancate consegne di email o rimbalzi dopo la verifica',
    'Crediti consumati a causa di errore o uso improprio da parte dell\'utente',
  ]},
  { heading: '15. Esclusione di garanzie', paragraphs: [
    'Il Servizio è fornito "così com\'è" e "come disponibile", senza garanzie di alcun tipo, esplicite o implicite. Giggal.ai esclude qualsiasi garanzia, incluse, a titolo esemplificativo, le garanzie implicite di commerciabilità, di idoneità a uno scopo specifico e di non violazione di diritti altrui.',
    'Non garantiamo che il Servizio sia ininterrotto, tempestivo, sicuro o privo di errori, né che i risultati della verifica email siano accurati al 100%.',
  ]},
  { heading: '16. Manleva', paragraphs: ['Ti impegni a difendere, manlevare e tenere indenne Giggal.ai e i suoi licenziatari e licenzianti da e contro qualsiasi pretesa, danno, obbligo, perdita, responsabilità, costo o debito e spesa derivanti dal tuo uso del Servizio o dalla violazione dei presenti Termini.']},
  { heading: '17. Risoluzione', paragraphs: ['Possiamo risolvere o sospendere il tuo account e il tuo accesso al Servizio immediatamente, senza preavviso né responsabilità, per qualsiasi motivo, inclusa, a titolo esemplificativo, la violazione dei presenti Termini da parte tua. In caso di risoluzione:'], list: [
    'Il tuo diritto di usare il Servizio cessa immediatamente',
    'I crediti non utilizzati vengono persi senza rimborso',
    'Gli abbonamenti ricorrenti vengono annullati',
    'L\'accesso al tuo account e ai tuoi dati può essere revocato in modo permanente',
  ]},
  { heading: '18. Legge applicabile', paragraphs: ['I presenti Termini sono regolati e interpretati in conformità alle leggi della giurisdizione in cui opera Giggal.ai, senza riguardo alle sue norme sui conflitti di leggi.']},
  { heading: '19. Risoluzione delle controversie', paragraphs: ['Qualsiasi controversia derivante dai presenti Termini o dal Servizio, o a essi relativa, sarà in primo luogo oggetto di un tentativo di risoluzione mediante negoziazione in buona fede. Se la negoziazione non ha esito, la controversia sarà risolta mediante arbitrato vincolante secondo le regole dell\'associazione arbitrale competente.']},
  { heading: '20. Modifiche ai termini', paragraphs: ['Ci riserviamo il diritto di modificare o sostituire i presenti Termini in qualsiasi momento, a nostra esclusiva discrezione. Se una revisione è sostanziale, daremo un preavviso di almeno 30 giorni prima che i nuovi termini entrino in vigore. Ciò che costituisce una modifica sostanziale sarà stabilito a nostra esclusiva discrezione.']},
  { heading: '21. Clausola di salvaguardia', paragraphs: ['Se una disposizione dei presenti Termini viene ritenuta inapplicabile o non valida, tale disposizione sarà modificata e interpretata in modo da realizzarne gli obiettivi nella misura massima possibile ai sensi della legge applicabile, e le restanti disposizioni resteranno pienamente valide ed efficaci.']},
  { heading: '22. Contatti', paragraphs: [
    'Per qualsiasi domanda sui presenti Termini di servizio, contattaci a:',
    'Email: info@giggal.ai',
    'Sito web: https://giggal.ai',
    'Usando i servizi di Giggal.ai, dichiari di aver letto e compreso i presenti Termini di servizio e di accettare di esserne vincolato.',
  ]},
]

export default function TerminiPage() {
  return (
    <LegalPageIt
      path="/it/termini"
      title="Termini di"
      accent="servizio"
      updated="22 ottobre 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
