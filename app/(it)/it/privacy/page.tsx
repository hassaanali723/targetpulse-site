import type { Metadata } from 'next'
import LegalPageIt, { type LegalSection } from '@/components/it/LegalPageIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Informativa sulla privacy e protezione dei dati',
  description: 'Come Giggal.ai, gestito da TargetPulse Ltd, raccoglie, usa, condivide e protegge i tuoi dati, per quanto tempo li conserva e i tuoi diritti GDPR.',
  alternates: { canonical: '/it/privacy', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'it_IT', title: 'Informativa sulla privacy', url: 'https://giggal.ai/it/privacy', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

// Courtesy translation of app/(en)/privacy-policy/page.tsx
// (English "Last Updated: October 1, 2026"). The English text is binding; the
// notice at the top of LegalPageL10n says so.

const sections: LegalSection[] = [
  { heading: '1. Introduzione', paragraphs: [
    'Il servizio è gestito da TargetPulse Ltd ("noi"), società registrata in Inghilterra e Galles con il numero 17079825, con sede legale in Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd è il titolare del trattamento dei dati personali trattati tramite Giggal.ai. Contatti: info@giggal.ai. Segnalazioni di abuso: abuse@giggal.ai.',
    'Giggal.ai ("noi") si impegna a proteggere la tua privacy. La presente Informativa sulla privacy spiega come raccogliamo, usiamo, comunichiamo e proteggiamo le tue informazioni quando usi i nostri servizi di verifica email e il nostro sito web.',
  ]},
  { heading: '2. Informazioni che raccogliamo' },
  { heading: '2.1 Dati personali', level: 3, paragraphs: ['Possiamo raccogliere i dati personali che ci fornisci volontariamente quando:'], list: [
    'Registri un account',
    'Acquisti crediti di verifica o un abbonamento',
    'Contatti la nostra assistenza clienti',
    'Invii liste di email per la verifica',
    'Usi i moduli di contatto o di assistenza sul nostro sito web',
  ], after: ['Questi dati possono includere: nome, indirizzo email, identificativi dell\'account, dati aziendali facoltativi e metadati delle transazioni. I dati delle carte di pagamento sono gestiti dal nostro processore di pagamento e non vengono conservati da noi.']},
  { heading: '2.2 Autenticazione e dati tecnici', level: 3, paragraphs: ['Usiamo Clerk per la registrazione e l\'accesso all\'account (compresi l\'accesso con Google e la registrazione con email e password). Tramite questo processo di autenticazione raccogliamo e trattiamo:'], list: [
    'Identificativi dell\'account (come ID utente, nome e indirizzo email)',
    'Provider di autenticazione e metodo di accesso (Google o email e password)',
    'Metadati dell\'attività di accesso (come data e ora degli accessi)',
    'Dati tecnici legati alla sicurezza (come indirizzo IP e user agent), usati per proteggere gli account e prevenire abusi',
    'Cookie o token di sessione essenziali, necessari per mantenere l\'accesso in modo sicuro',
  ]},
  { heading: '2.3 Dati di verifica email', level: 3, paragraphs: ['Quando usi i nostri servizi di verifica email, raccogliamo e trattiamo:'], list: [
    'Gli indirizzi email inviati per la verifica',
    'I risultati e lo stato della verifica (valido, non valido, catch-all, usa e getta, ecc.)',
    'Le liste di email in blocco caricate per l\'elaborazione',
    'I dati di utilizzo dell\'API e lo storico delle verifiche',
  ]},
  { heading: '3. Come usiamo le tue informazioni', paragraphs: ['Usiamo le informazioni raccolte per le seguenti finalità:'], list: [
    'Fornire e mantenere i nostri servizi',
    'Elaborare le tue transazioni e gestire gli abbonamenti',
    'Inviarti notifiche relative al servizio',
    'Fornire assistenza clienti',
    'Migliorare e ottimizzare i nostri servizi',
    'Individuare e prevenire frodi e abusi',
    'Adempiere agli obblighi di legge',
    'Analizzare modelli e tendenze di utilizzo',
  ]},
  { heading: '4. Base giuridica del trattamento (GDPR)', paragraphs: ['Se provieni dallo Spazio economico europeo (SEE), la base giuridica per la raccolta e l\'uso delle tue informazioni dipende dai dati e dal contesto:'], list: [
    'Esecuzione del contratto: il trattamento è necessario per fornire i nostri servizi',
    'Legittimo interesse: il trattamento rientra nei nostri legittimi interessi commerciali',
    'Consenso: hai dato il tuo consenso esplicito per finalità specifiche',
    'Obbligo di legge: il trattamento è necessario per adempiere alla legge',
  ]},
  { heading: '5. Condivisione e comunicazione dei dati' },
  { heading: '5.1 Fornitori di servizi', level: 3, paragraphs: ['Condividiamo le tue informazioni con fornitori di servizi terzi che svolgono servizi per nostro conto:'], list: [
    'Processori di pagamento (il nostro gateway di pagamento autorizzato)',
    'Provider di autenticazione (come Clerk)',
    'Provider di hosting in cloud',
    'Fornitori di servizi di sicurezza e monitoraggio',
    'Strumenti di assistenza clienti',
  ]},
  { heading: '5.2 Obblighi di legge', level: 3, paragraphs: ['Possiamo comunicare le tue informazioni se la legge ci obbliga a farlo o in risposta a richieste valide delle autorità pubbliche (ad esempio ordini del tribunale e citazioni a comparire).']},
  { heading: '5.3 Trasferimenti aziendali', level: 3, paragraphs: ['Se siamo coinvolti in una fusione, un\'acquisizione o una cessione di beni, le tue informazioni possono essere trasferite nell\'ambito di tale operazione.']},
  { heading: '6. Sicurezza dei dati', paragraphs: ['Adottiamo misure di sicurezza tecniche e organizzative adeguate a proteggere le tue informazioni, tra cui:'], list: [
    'Cifratura dei dati in transito e a riposo',
    'Valutazioni periodiche della sicurezza',
    'Controlli di accesso e autenticazione',
    'Data center sicuri',
    'Formazione dei dipendenti sulla protezione dei dati',
  ], after: ['Tuttavia, nessun metodo di trasmissione su internet è sicuro al 100% e non possiamo garantire una sicurezza assoluta.']},
  { heading: '7. Conservazione dei dati', paragraphs: ['Conserviamo i tuoi dati personali solo per il tempo necessario a realizzare le finalità indicate nella presente Informativa sulla privacy, salvo che la legge richieda o consenta un periodo di conservazione più lungo. Quando non abbiamo più bisogno delle tue informazioni, le cancelliamo o le rendiamo anonime in modo sicuro.']},
  { heading: '8. I tuoi diritti', paragraphs: ['A seconda di dove ti trovi, potresti avere i seguenti diritti:'], list: [
    'Accesso: chiedere l\'accesso ai tuoi dati personali',
    'Rettifica: chiedere la rettifica delle informazioni inesatte',
    'Cancellazione: chiedere la cancellazione delle tue informazioni',
    'Portabilità: chiedere una copia dei tuoi dati in un formato portabile',
    'Limitazione: chiedere la limitazione del trattamento',
    'Opposizione: opporti al trattamento delle tue informazioni',
    'Revoca del consenso: revocare il consenso quando il trattamento si basa sul consenso',
  ], after: ['Per esercitare questi diritti, contattaci a info@giggal.ai.']},
  { heading: '9. Cookie e tecnologie di tracciamento', paragraphs: ['Usiamo cookie e tecnologie di tracciamento simili per monitorare l\'attività sul nostro sito web e conservare alcune informazioni. Puoi impostare il browser in modo che rifiuti tutti i cookie o che segnali quando viene inviato un cookie. Tuttavia, se non accetti i cookie, potresti non riuscire a usare alcune parti del nostro servizio.']},
  { heading: '10. Link a siti di terzi', paragraphs: ['Il nostro sito web può contenere link a siti web di terzi. Non siamo responsabili delle pratiche sulla privacy di questi siti esterni. Ti invitiamo a leggere le informative sulla privacy di tutti i siti di terzi che visiti.']},
  { heading: '11. Privacy dei minori', paragraphs: ['I nostri servizi non sono destinati a persone di età inferiore a 18 anni. Non raccogliamo consapevolmente dati personali di minori. Se vieni a conoscenza che un minore ci ha fornito dati personali, contattaci e adotteremo misure per cancellare tali informazioni.']},
  { heading: '12. Trasferimenti internazionali dei dati', paragraphs: ['Le tue informazioni possono essere trasferite e conservate su computer situati al di fuori del tuo stato, della tua provincia, del tuo paese o di un\'altra giurisdizione governativa, dove le leggi sulla protezione dei dati possono essere diverse. Ci assicuriamo che per tali trasferimenti siano in atto garanzie adeguate.']},
  { heading: '13. Diritti sulla privacy dei residenti in California (CCPA)', paragraphs: ['Se risiedi in California, hai diritti specifici riguardo ai tuoi dati personali:'], list: [
    'Diritto di sapere quali dati personali vengono raccolti',
    'Diritto di sapere se i dati personali vengono venduti o comunicati',
    'Diritto di opporsi alla vendita dei dati personali (opt-out)',
    'Diritto alla cancellazione dei dati personali',
    'Diritto a non subire discriminazioni per l\'esercizio dei diritti previsti dal CCPA',
  ]},
  { heading: '14. Modifiche alla presente Informativa sulla privacy', paragraphs: ['Possiamo aggiornare la nostra Informativa sulla privacy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova Informativa sulla privacy su questa pagina e aggiornando la data di "Ultimo aggiornamento". Ti consigliamo di rileggere periodicamente la presente Informativa sulla privacy per verificare eventuali modifiche.']},
  { heading: '15. Contatti', paragraphs: [
    'Per qualsiasi domanda sulla presente Informativa sulla privacy, contattaci:',
    'Email: info@giggal.ai',
    'Sito web: https://giggal.ai',
    'Usando i servizi di Giggal.ai, dichiari di aver letto e compreso la presente Informativa sulla privacy e di accettarne i termini.',
  ]},
]

export default function PrivacyPage() {
  return (
    <LegalPageIt
      path="/it/privacy"
      title="Informativa sulla"
      accent="privacy"
      updated="1 ottobre 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
