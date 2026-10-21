import type { Metadata } from 'next'
import LegalPageIt, { type LegalSection } from '@/components/it/LegalPageIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Politica sui rimborsi di crediti e abbonamenti',
  description: 'Quando Giggal.ai rimborsa i crediti: prova gratuita, acquisti a consumo, abbonamenti, casi eccezionali, chargeback e tempi. Fa fede la versione inglese.',
  alternates: { canonical: '/it/rimborsi', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'it_IT', title: 'Politica sui rimborsi', url: 'https://giggal.ai/it/rimborsi', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

// Courtesy translation of app/(en)/refund-policy/page.tsx
// (English "Last Updated: October 22, 2026"). The English text is binding; the
// notice at the top of LegalPageL10n says so. Numbers in Italian format (1.000).

const sections: LegalSection[] = [
  { heading: '1. Panoramica', paragraphs: [
    'Da Giggal.ai ci impegniamo a fornire servizi di verifica email eccezionali. La presente Politica sui rimborsi descrive le circostanze in cui possono essere concessi rimborsi per il nostro servizio a crediti.',
    'Forniamo esclusivamente servizi digitali di verifica email e non vendiamo né spediamo beni fisici.',
  ]},
  { heading: '2. Come funziona il nostro sistema a crediti', paragraphs: ['Giggal.ai funziona con un sistema a crediti per la verifica email:'], list: [
    '1 credito = 1 convalida email: ogni verifica di un indirizzo email consuma 1 credito dal tuo account',
    'A consumo: acquista crediti in blocco in qualsiasi momento (pacchetti da 3.000 a 1.000.000 di crediti)',
    'Crediti ricorrenti: sottoscrivi pacchetti di crediti mensili ricorrenti con uno sconto del 10%',
    'Nessuna scadenza: i crediti non scadono mai e restano nel tuo account finché non vengono usati',
  ]},
  { heading: '3. Crediti di prova gratuiti', paragraphs: ['I nuovi utenti ricevono 1.000 crediti di prova gratuiti per provare il nostro servizio di verifica email. Tieni presente che:'], list: [
    'I crediti di prova sono forniti gratuitamente, senza alcun pagamento richiesto',
    'I crediti di prova non sono rimborsabili in quanto omaggio',
    'I crediti di prova seguono le stesse regole di convalida dei crediti a pagamento',
    'I crediti di prova possono essere usati per verificare 1.000 indirizzi email',
  ]},
  { heading: '4. Politica di rimborso per l\'acquisto di crediti' },
  { heading: '4.1 Crediti a consumo (acquisto una tantum)', level: 3, paragraphs: ['I crediti acquistati tramite pacchetti a consumo di norma non sono rimborsabili una volta completato l\'acquisto, perché:'], list: [
    'I crediti vengono aggiunti istantaneamente al tuo account e sono disponibili per l\'uso immediato',
    'I crediti non scadono e mantengono il loro valore a tempo indeterminato',
    'Hai la flessibilità di usarli in qualsiasi momento',
  ]},
  { heading: '4.2 Abbonamenti a crediti ricorrenti', level: 3, paragraphs: ['Per gli abbonamenti mensili ricorrenti ai crediti:'], list: [
    'I crediti vengono addebitati e aggiunti al tuo account ogni mese',
    'Puoi disdire l\'abbonamento in qualsiasi momento prima del ciclo di fatturazione successivo',
    'I crediti già aggiunti al tuo account non sono rimborsabili',
    'La disdetta ha effetto alla fine del periodo di fatturazione in corso',
    'I crediti non usati dei mesi precedenti restano nel tuo account dopo la disdetta',
  ]},
  { heading: '5. Circostanze eccezionali e assistenza', paragraphs: ['Anche se la nostra regola standard è che i crediti non sono rimborsabili, sappiamo che possono verificarsi situazioni insolite. In caso di:'], list: [
    'Errori tecnici che causano una detrazione errata dei crediti',
    'Guasti del servizio che impediscono la convalida delle email',
    'Addebiti doppi o errori di fatturazione',
    'Attività insolite sull\'account o sospetta frode',
    'Qualsiasi altra circostanza eccezionale',
  ], after: ['Contatta immediatamente il nostro team di assistenza a info@giggal.ai. Esamineremo con attenzione il tuo caso e potremo concedere rimborsi o rettifiche dei crediti caso per caso, a nostra discrezione.']},
  { heading: '6. Problemi di qualità del servizio', paragraphs: ['Se riscontri problemi tecnici o interruzioni del servizio che impediscono la verifica delle email:'], list: [
    'I crediti non vengono scalati per le convalide non riuscite a causa di errori del nostro sistema',
    'Segnala immediatamente al nostro team di assistenza qualsiasi problema di convalida',
    'Possiamo aggiungere al tuo account crediti compensativi per le interruzioni del servizio',
    'Le interruzioni prolungate possono dare diritto a rimborsi parziali, a nostra discrezione',
  ]},
  { heading: '7. Chiusura dell\'account e violazioni', paragraphs: ['Se il tuo account viene chiuso per violazione dei nostri Termini di servizio o della nostra Politica di uso accettabile:'], list: [
    'Non verrà concesso alcun rimborso per i crediti non usati',
    'L\'accesso al tuo account e ai crediti residui verrà revocato in modo permanente',
    'Gli abbonamenti ricorrenti verranno annullati immediatamente',
  ]},
  { heading: '8. Come richiedere un rimborso o segnalare un problema', paragraphs: [
    'Per richiedere un rimborso o segnalare un\'attività insolita, contatta il nostro team di assistenza:',
    'Email: info@giggal.ai',
    'Oggetto: Refund Request / Issue Report',
    'Includi nella richiesta le seguenti informazioni:',
  ], list: [
    'L\'indirizzo email del tuo account',
    'L\'ID della transazione o il numero d\'ordine',
    'Una descrizione dettagliata del problema o dell\'attività insolita',
    'Data e ora dell\'evento (se applicabile)',
    'Schermate o prove a supporto della tua richiesta (se applicabile)',
    'Il numero di crediti interessati',
  ]},
  { heading: '9. Tempi di elaborazione del rimborso', paragraphs: ['Se la tua richiesta di rimborso viene approvata:'], list: [
    'Esamineremo il tuo caso entro 2-3 giorni lavorativi',
    'Riceverai via email una risposta con la decisione',
    'I rimborsi approvati verranno elaborati entro 5-10 giorni lavorativi',
    'I rimborsi verranno emessi sul metodo di pagamento originale tramite il nostro processore di pagamento',
    'Possono essere necessari altri 5-7 giorni lavorativi perché il rimborso compaia sul tuo conto, a seconda del tuo fornitore di pagamento',
  ]},
  { heading: '10. Contestazioni di addebito (chargeback)', paragraphs: ['Se apri una contestazione di addebito (chargeback) o una contestazione di pagamento presso la tua banca o il tuo fornitore di pagamento senza averci prima contattato per risolvere il problema:'], list: [
    'Ci riserviamo il diritto di chiudere il tuo account in modo permanente',
    'Ti sarà vietato l\'uso futuro dei nostri servizi',
    'Tutti i crediti residui andranno persi',
    'Forniremo al processore di pagamento le prove a difesa dell\'addebito',
  ], after: ['Ti invitiamo vivamente a contattare prima il nostro team di assistenza. Ci impegniamo a risolvere i problemi in modo equo e tempestivo.']},
  { heading: '11. Trasferimento dei crediti e condivisione dell\'account', paragraphs: ['I crediti non sono trasferibili tra account. Non verranno concessi rimborsi per:'], list: [
    'Crediti acquistati sull\'account sbagliato',
    'Richieste di trasferimento dei crediti a un altro account',
    'Violazioni legate alla condivisione dell\'account',
  ]},
  { heading: '12. Modifiche alla presente politica', paragraphs: ['Ci riserviamo il diritto di modificare la presente Politica sui rimborsi in qualsiasi momento. Le modifiche hanno effetto immediato dalla pubblicazione sul nostro sito web. Se continui a usare i nostri servizi dopo una modifica, accetti la nuova politica.']},
  { heading: '13. Contatti', paragraphs: [
    'Per qualsiasi domanda sulla presente Politica sui rimborsi o se hai bisogno di assistenza, contattaci:',
    'Email: info@giggal.ai',
    'Sito web: https://giggal.ai',
    'Il nostro team di assistenza si impegna a gestire le tue richieste e a trovare soluzioni eque. Di norma rispondiamo a tutte le richieste entro 24-48 ore.',
    'La presente Politica sui rimborsi fa parte dei nostri Termini di servizio. Usando i servizi di Giggal.ai, dichiari di aver letto e compreso la presente politica.',
  ]},
]

export default function RimborsiPage() {
  return (
    <LegalPageIt
      path="/it/rimborsi"
      title="Politica sui"
      accent="rimborsi"
      updated="22 ottobre 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
