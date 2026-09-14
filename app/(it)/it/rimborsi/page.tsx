import type { Metadata } from 'next'
import LegalPageIt, { type LegalSection } from '@/components/it/LegalPageIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Politica sui rimborsi',
  description: 'Quando e come Giggal.ai rimborsa i crediti di verifica email. Traduzione di cortesia; fa fede la versione inglese.',
  alternates: { canonical: '/it/rimborsi', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'it_IT', title: 'Politica sui rimborsi', url: 'https://giggal.ai/it/rimborsi', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Panoramica', paragraphs: [
    'Questa politica descrive le circostanze in cui possono essere concessi rimborsi per il nostro servizio a crediti.',
    'Forniamo esclusivamente servizi digitali di verifica email e non vendiamo né spediamo beni fisici.',
  ]},
  { heading: '2. Come funziona il sistema a crediti', list: [
    '1 credito = 1 verifica: ogni verifica consuma 1 credito dal tuo account', 'A consumo: acquisti crediti in blocco quando vuoi',
    'Crediti ricorrenti: pacchetti mensili in abbonamento con sconto', 'Nessuna scadenza: i crediti restano sull\'account finché non li usi',
  ]},
  { heading: '3. Crediti di prova gratuiti', paragraphs: ['I nuovi utenti ricevono 1.000 crediti di prova. Tieni presente che:'], list: [
    'Sono gratuiti e non richiedono pagamento', 'Non sono rimborsabili perché omaggio', 'Seguono le stesse regole dei crediti a pagamento', 'Permettono di verificare 1.000 indirizzi',
  ]},
  { heading: '4. Rimborso dei crediti acquistati' },
  { heading: '4.1 Crediti a consumo (acquisto una tantum)', level: 3, paragraphs: ['I crediti acquistati a consumo di norma non sono rimborsabili una volta completato l\'acquisto, perché:'], list: [
    'Vengono aggiunti subito all\'account e sono disponibili immediatamente', 'Non scadono e mantengono il loro valore', 'Puoi usarli in qualsiasi momento',
  ]},
  { heading: '4.2 Abbonamenti a crediti ricorrenti', level: 3, list: [
    'I crediti vengono addebitati e aggiunti ogni mese', 'Puoi disdire in qualsiasi momento prima del ciclo successivo', 'I crediti già aggiunti non sono rimborsabili',
    'La disdetta ha effetto alla fine del periodo in corso', 'I crediti non usati dei mesi precedenti restano sull\'account dopo la disdetta',
  ]},
  { heading: '5. Circostanze eccezionali e assistenza', paragraphs: ['La regola generale è che i crediti non sono rimborsabili, ma sappiamo che possono verificarsi situazioni insolite. In caso di:'], list: [
    'Errori tecnici che causano addebiti di crediti errati', 'Guasti del servizio che impediscono la verifica', 'Addebiti doppi o errori di fatturazione',
    'Attività anomale sull\'account o sospetta frode', 'Altre circostanze eccezionali',
  ], after: ['Contatta subito il supporto a info@giggal.ai. Esamineremo il caso e potremo concedere rimborsi o rettifiche di crediti, valutando caso per caso a nostra discrezione.']},
  { heading: '6. Problemi di qualità del servizio', paragraphs: ['Se problemi tecnici o interruzioni impediscono la verifica:'], list: [
    'I crediti non vengono scalati per le verifiche fallite a causa di errori del nostro sistema', 'Segnala subito al supporto qualsiasi problema di verifica',
    'Possiamo aggiungere crediti compensativi per le interruzioni', 'Interruzioni prolungate possono dare diritto a rimborsi parziali a nostra discrezione',
  ]},
  { heading: '7. Chiusura dell\'account e violazioni', paragraphs: ['Se l\'account viene chiuso per violazione dei Termini di servizio o della politica di uso accettabile:'], list: [
    'Non viene rimborsato alcun credito non usato', 'L\'accesso all\'account e ai crediti residui viene revocato in modo permanente', 'Gli abbonamenti vengono annullati immediatamente',
  ]},
  { heading: '8. Come richiedere un rimborso o segnalare un problema', paragraphs: ['Scrivi al supporto: email info@giggal.ai, oggetto "Refund Request / Issue Report". Includi:'], list: [
    'L\'email del tuo account', 'L\'ID della transazione o dell\'ordine', 'Una descrizione dettagliata del problema', 'Data e ora dell\'evento (se applicabile)',
    'Schermate o prove a supporto (se applicabile)', 'Il numero di crediti interessati',
  ]},
  { heading: '9. Tempi di elaborazione del rimborso', paragraphs: ['Se la richiesta viene approvata:'], list: [
    'Esaminiamo il caso entro 2-3 giorni lavorativi', 'Ricevi una risposta via email con la decisione', 'I rimborsi approvati vengono elaborati entro 5-10 giorni lavorativi',
    'Il rimborso viene emesso sul metodo di pagamento originale tramite il nostro processore', 'Possono servire altri 5-7 giorni lavorativi perché compaia sul tuo conto',
  ]},
  { heading: '10. Contestazioni di addebito (chargeback)', paragraphs: ['Se apri una contestazione con la tua banca o il tuo fornitore di pagamento senza prima contattarci:'], list: [
    'Ci riserviamo il diritto di chiudere il tuo account in modo permanente', 'Non potrai più usare i nostri servizi', 'Tutti i crediti residui vengono persi',
    'Forniremo al processore di pagamento le prove a difesa dell\'addebito',
  ], after: ['Ti invitiamo a contattare prima il supporto: risolviamo i problemi in modo corretto e rapido.']},
  { heading: '11. Trasferimento dei crediti e condivisione dell\'account', paragraphs: ['I crediti non sono trasferibili tra account. Non vengono rimborsati:'], list: [
    'Crediti acquistati sull\'account sbagliato', 'Richieste di trasferimento a un altro account', 'Violazioni per condivisione dell\'account',
  ]},
  { heading: '12. Modifiche a questa politica', paragraphs: ['Ci riserviamo il diritto di modificare questa politica in qualsiasi momento. Le modifiche hanno effetto dalla pubblicazione sul sito. Continuando a usare i servizi accetti la nuova versione.']},
  { heading: '13. Contatti', paragraphs: [
    'Per domande o assistenza: email info@giggal.ai, sito https://giggal.ai. Rispondiamo di norma entro 24-48 ore.',
    'Questa politica fa parte dei Termini di servizio. Usando i servizi di Giggal.ai dichiari di averla letta e compresa.',
  ]},
]

export default function RimborsiPage() {
  return (
    <LegalPageIt
      path="/it/rimborsi"
      title="Politica sui"
      accent="rimborsi"
      updated="4 febbraio 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
