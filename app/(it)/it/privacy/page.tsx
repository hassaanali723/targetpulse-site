import type { Metadata } from 'next'
import LegalPageIt, { type LegalSection } from '@/components/it/LegalPageIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Informativa sulla privacy',
  description: 'Come Giggal.ai raccoglie, usa e protegge i tuoi dati quando usi il servizio di verifica email. Traduzione di cortesia; fa fede la versione inglese.',
  alternates: { canonical: '/it/privacy', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'it_IT', title: 'Informativa sulla privacy', url: 'https://giggal.ai/it/privacy', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Introduzione', paragraphs: ['Giggal.ai ("noi") si impegna a proteggere la tua privacy. Questa informativa spiega come raccogliamo, usiamo, comunichiamo e proteggiamo le tue informazioni quando usi i nostri servizi di verifica email e il nostro sito.']},
  { heading: '2. Informazioni che raccogliamo' },
  { heading: '2.1 Dati personali', level: 3, paragraphs: ['Possiamo raccogliere i dati personali che ci fornisci volontariamente quando:'], list: [
    'Registri un account', 'Acquisti crediti o un abbonamento', 'Contatti l\'assistenza', 'Invii liste di email per la verifica', 'Usi i moduli di contatto o di supporto del sito',
  ], after: ['Questi dati possono includere nome, indirizzo email, identificativi dell\'account, dati aziendali facoltativi e metadati delle transazioni. I dati delle carte di pagamento sono gestiti dal nostro processore di pagamento e non vengono conservati da noi.']},
  { heading: '2.2 Autenticazione e dati tecnici', level: 3, paragraphs: ['Usiamo Clerk per la registrazione e l\'accesso (compreso l\'accesso con Google e con email e password). Tramite questo processo raccogliamo e trattiamo:'], list: [
    'Identificativi dell\'account (ID utente, nome, email)', 'Provider di autenticazione e metodo di accesso', 'Metadati di accesso (come data e ora dei login)',
    'Dati tecnici di sicurezza (come indirizzo IP e user agent) per proteggere gli account e prevenire abusi', 'Cookie o token di sessione necessari per mantenere l\'accesso sicuro',
  ]},
  { heading: '2.3 Dati di verifica email', level: 3, paragraphs: ['Quando usi i nostri servizi raccogliamo e trattiamo:'], list: [
    'Gli indirizzi email inviati per la verifica', 'I risultati e lo stato della verifica (valida, non valida, catch-all, usa e getta, ecc.)',
    'Le liste caricate per l\'elaborazione in blocco', 'I dati di utilizzo dell\'API e lo storico delle verifiche',
  ]},
  { heading: '3. Come usiamo le informazioni', list: [
    'Fornire e mantenere i servizi', 'Elaborare le transazioni e gestire gli abbonamenti', 'Inviare notifiche relative al servizio', 'Fornire assistenza',
    'Migliorare e ottimizzare i servizi', 'Individuare e prevenire frodi e abusi', 'Adempiere agli obblighi di legge', 'Analizzare l\'utilizzo e le tendenze',
  ]},
  { heading: '4. Base giuridica del trattamento (GDPR)', paragraphs: ['Se ti trovi nello Spazio economico europeo, la base giuridica dipende dai dati e dal contesto:'], list: [
    'Esecuzione del contratto: il trattamento è necessario per fornire i servizi', 'Legittimo interesse: il trattamento rientra nei nostri legittimi interessi',
    'Consenso: hai dato un consenso esplicito per scopi specifici', 'Obbligo di legge: il trattamento è necessario per rispettare la legge',
  ]},
  { heading: '5. Comunicazione dei dati' },
  { heading: '5.1 Fornitori di servizi', level: 3, paragraphs: ['Condividiamo i dati con fornitori terzi che operano per nostro conto:'], list: [
    'Processori di pagamento', 'Provider di autenticazione (come Clerk)', 'Provider di hosting in cloud', 'Fornitori di sicurezza e monitoraggio', 'Strumenti di assistenza clienti',
  ]},
  { heading: '5.2 Obblighi di legge', level: 3, paragraphs: ['Possiamo comunicare i dati se richiesto dalla legge o in risposta a richieste valide delle autorità pubbliche (ad esempio ordini del tribunale).']},
  { heading: '5.3 Trasferimenti aziendali', level: 3, paragraphs: ['In caso di fusione, acquisizione o cessione di attività, i dati possono essere trasferiti nell\'ambito dell\'operazione.']},
  { heading: '6. Sicurezza dei dati', paragraphs: ['Adottiamo misure tecniche e organizzative adeguate a proteggere i dati, tra cui:'], list: [
    'Cifratura dei dati in transito e a riposo', 'Valutazioni periodiche della sicurezza', 'Controlli di accesso e autenticazione', 'Data center sicuri', 'Formazione del personale sulla protezione dei dati',
  ], after: ['Nessun metodo di trasmissione su internet è sicuro al 100% e non possiamo garantire una sicurezza assoluta.']},
  { heading: '7. Conservazione dei dati', paragraphs: ['Conserviamo i dati personali solo per il tempo necessario agli scopi indicati in questa informativa, salvo che la legge richieda o consenta un periodo più lungo. Quando non servono più, li cancelliamo o li rendiamo anonimi in modo sicuro.']},
  { heading: '8. I tuoi diritti', paragraphs: ['A seconda di dove ti trovi, puoi avere i seguenti diritti:'], list: [
    'Accesso: chiedere l\'accesso ai tuoi dati', 'Rettifica: chiedere la correzione di dati inesatti', 'Cancellazione: chiedere la cancellazione dei dati',
    'Portabilità: ricevere una copia dei dati in formato portabile', 'Limitazione: chiedere la limitazione del trattamento', 'Opposizione: opporti al trattamento',
    'Revoca del consenso: revocare il consenso quando il trattamento si basa su di esso',
  ], after: ['Per esercitare questi diritti scrivi a info@giggal.ai.']},
  { heading: '9. Cookie e tecnologie di tracciamento', paragraphs: ['Usiamo cookie e tecnologie simili per monitorare l\'attività sul sito e conservare alcune informazioni. Puoi impostare il browser per rifiutare i cookie o segnalare quando ne viene inviato uno; alcune parti del servizio potrebbero però non funzionare correttamente.']},
  { heading: '10. Link a siti terzi', paragraphs: ['Il sito può contenere link a siti di terzi. Non siamo responsabili delle loro pratiche sulla privacy e ti invitiamo a leggere le loro informative.']},
  { heading: '11. Privacy dei minori', paragraphs: ['I nostri servizi non sono destinati a persone di età inferiore a 18 anni. Non raccogliamo consapevolmente dati di minori. Se vieni a conoscenza che un minore ci ha fornito dati personali, contattaci e li cancelleremo.']},
  { heading: '12. Trasferimenti internazionali', paragraphs: ['I dati possono essere trasferiti e conservati su sistemi situati fuori dal tuo paese, dove le leggi sulla protezione dei dati possono differire. Adottiamo garanzie adeguate a proteggere i dati in conformità a questa informativa.']},
  { heading: '13. Diritti dei residenti in California (CCPA)', list: [
    'Diritto di sapere quali dati personali vengono raccolti', 'Diritto di sapere se i dati vengono venduti o comunicati',
    'Diritto di opporsi alla vendita dei dati', 'Diritto alla cancellazione', 'Diritto a non subire discriminazioni per l\'esercizio di questi diritti',
  ]},
  { heading: '14. Modifiche a questa informativa', paragraphs: ['Possiamo aggiornare questa informativa di tanto in tanto. Le modifiche saranno pubblicate su questa pagina con la nuova data di aggiornamento. Ti consigliamo di rileggerla periodicamente.']},
  { heading: '15. Contatti', paragraphs: ['Per domande su questa informativa: email info@giggal.ai, sito https://giggal.ai.', 'Usando i servizi di Giggal.ai dichiari di aver letto e compreso questa informativa e di accettarne i termini.']},
]

export default function PrivacyPage() {
  return (
    <LegalPageIt
      path="/it/privacy"
      title="Informativa sulla"
      accent="privacy"
      updated="4 febbraio 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
