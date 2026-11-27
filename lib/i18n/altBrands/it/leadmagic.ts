// Italian LeadMagic alternative page. Translated from app/(en)/leadmagic-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/it/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'it',
  slug: 'leadmagic',
  path: '/it/alternativa-a-leadmagic',
  cluster: 'altLeadmagic',
  metaTitle: 'Alternativa a LeadMagic e prezzi di LeadMagic | Giggal.ai',
  ogTitle: "Un'alternativa a LeadMagic solo per la verifica email",
  desc: 'Prezzi di LeadMagic: da 99 $ al mese per 5.000 crediti condivisi. Giggal.ai è un verificatore email a 9,90 $ per 10.000 crediti, che non scadono mai.',
  h1: ["Un'", 'alternativa a LeadMagic', ' solo per la verifica email'],
  heroP:
    'LeadMagic è una piattaforma di dati B2B. La validazione delle email è uno dei suoi prodotti, e condivide con gli altri un unico pacchetto mensile di crediti. Se ti serve solo verificare liste di email, Giggal.ai fa solo questo. Costa 9,90 $ ogni 10.000 email, pagati una volta.',
  bluf: [
    { k: "Cos'è", v: 'LeadMagic vende dati su contatti e aziende. Giggal.ai verifica solo indirizzi email.' },
    { k: 'Prezzo', v: 'LeadMagic parte da 99 $ al mese. Giggal.ai costa 9,90 $ per 10.000 crediti, pagati una volta.' },
    { k: 'Crediti gratis', v: 'LeadMagic non dà crediti gratis. Giggal.ai ne dà 1.000 senza carta.' },
    { k: 'Catch-all', v: 'Entrambi restituiscono un risultato sugli indirizzi catch-all. Giggal.ai verifica anche dietro 15 gateway email indicati per nome.' },
  ],
  about: {
    heading: "Che cos'è LeadMagic?",
    paragraphs: [
      "LeadMagic è una piattaforma di dati B2B per i team di vendita. Trova email di lavoro e numeri di cellulare, e aggiunge dati aziendali alle schede dei contatti. Segue anche i cambi di lavoro e l'attività pubblicitaria.",
      'La validazione delle email è un prodotto dentro LeadMagic. Restituisce valido, non valido o sconosciuto. Un risultato definitivo costa 0,25 crediti, e un risultato sconosciuto è gratis. La validazione catch-all è un prodotto separato che usa gli stessi crediti.',
      'I team usano LeadMagic tramite la sua web app, una REST API, una CLI o un server MCP. Si collega a strumenti come Clay, Apollo, Smartlead, Instantly, Salesforce, Zapier e Make.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Prezzi di LeadMagic nel 2026',
  pricingProse:
    'LeadMagic è un abbonamento mensile. Essential costa 99 $ per 5.000 crediti. Growth costa 249 $ per 20.000, Professional 499 $ per 50.000 e Ultimate 849 $ per 100.000. Tutti i prodotti usano gli stessi crediti.',
  pricingExtra: [
    'Con 0,25 crediti per validazione, il piano da 99 $ copre 20.000 verifiche al mese. Per 100.000 verifiche al mese serve Professional a 499 $. Con la fatturazione annuale due mesi sono gratis. I crediti mensili non usati passano al mese successivo, fino al doppio della quota mensile.',
    'Giggal.ai non ha abbonamenti. 10.000 crediti costano 9,90 $, 100.000 costano 76 $ e un milione costa 680 $. I crediti non scadono mai.',
  ],
  reasons: {
    heading: "Perché i team cercano un'alternativa a LeadMagic",
    items: [
      { k: 'Fattura mensile', v: 'LeadMagic fattura ogni mese, anche nei mesi in cui non verifichi nulla. I crediti Giggal.ai si comprano una volta.' },
      { k: 'Crediti condivisi', v: 'Validazione e arricchimento usano gli stessi crediti. Una grande pulizia di liste lascia meno crediti per trovare contatti.' },
      { k: 'Nessuna prova gratis', v: 'LeadMagic non dà crediti gratis. Paghi prima di poterlo provare sulla tua lista.' },
      { k: 'Gateway', v: 'LeadMagic non dichiara il supporto per i secure email gateway come Proofpoint o Mimecast.' },
    ],
  },
  catchAllHeading: 'LeadMagic vs Giggal.ai sugli indirizzi catch-all',
  catchAllProse:
    "Sui domini catch-all LeadMagic restituisce valido, non valido o sconosciuto, e non addebita i risultati sconosciuti. Anche Giggal.ai restituisce un risultato sugli indirizzi catch-all, a 1 credito ciascuno. Verifica inoltre gli indirizzi dietro 15 secure email gateway, come Proofpoint, Mimecast e Barracuda. Questi gateway all'inizio accettano ogni indirizzo. Per questo una verifica di base non distingue un indirizzo reale da uno falso.",
  strengths: {
    heading: 'Cosa fa bene LeadMagic',
    intro: 'LeadMagic è la scelta migliore se ti serve questo:',
  },
  others: {
    heading: 'Altre alternative a LeadMagic',
    intro: 'Se vuoi trovare e verificare le email con un solo strumento, ecco altre opzioni. I prezzi vengono dal sito di ciascun fornitore, al 27 novembre 2026.',
    items: [
      { name: 'Findymail', text: 'Un email finder che verifica anche. Il piano Starter costa 99 $ al mese per 5.000 crediti finder e 5.000 crediti verifier. Promette un tasso di rimbalzo sotto il 5%.' },
      { name: 'Anymail Finder', text: 'Un email finder con un verificatore separato. Una verifica costa 0,2 crediti, e i piani partono da 29 $ al mese per 400 crediti.' },
      { name: 'no2bounce', text: 'Un verificatore con crediti a consumo che non scadono mai. 10.000 crediti costano 20 $.' },
    ],
  },
  testHeading: 'Prova Giggal.ai su una lista che LeadMagic ha già verificato',
  testSteps: [
    'Esporta una lista che hai già verificato con LeadMagic.',
    'Verificala qui con i 1.000 crediti gratis. Senza carta.',
    'Confronta le righe catch-all con il risultato che LeadMagic ha dato per gli stessi indirizzi.',
  ],
  ctaHeadline: 'Verifica la tua lista senza un piano mensile',
  faqs: [
    {
      q: 'Quanto costa LeadMagic?',
      a: 'LeadMagic parte da 99 $ al mese per 5.000 crediti. I piani arrivano a 849 $ al mese per 100.000 crediti. La validazione delle email costa 0,25 crediti per risultato definitivo. Quindi il piano da 99 $ copre 20.000 verifiche.',
    },
    {
      q: 'LeadMagic ha un piano gratuito?',
      a: 'No. LeadMagic dice che non ci sono crediti gratis. La sua funzione Search ha una prova di 14 giorni. Giggal.ai dà 1.000 crediti gratis senza carta, utilizzabili su un caricamento in blocco.',
    },
    {
      q: 'Giggal.ai è una buona alternativa a LeadMagic?',
      a: 'Sì, se ti serve solo la verifica email. Giggal.ai verifica liste, restituisce un risultato sugli indirizzi catch-all e costa 9,90 $ per 10.000. Non trova email né numeri di telefono, quindi non sostituisce i prodotti di dati di LeadMagic.',
    },
    {
      q: 'LeadMagic addebita i risultati sconosciuti?',
      a: 'No. LeadMagic addebita 0,25 crediti per un risultato definitivo e niente per uno sconosciuto. Anche Giggal.ai rimborsa il credito quando un risultato è sconosciuto.',
    },
    {
      q: 'LeadMagic conviene se ti serve solo la verifica email?',
      a: 'Conviene se usi i suoi prodotti di dati ogni mese. Solo per la verifica paghi almeno 99 $ al mese. Giggal.ai vende 10.000 verifiche a 9,90 $, una volta sola.',
    },
    {
      q: 'Il test catch-all di LeadMagic è neutrale?',
      a: 'No. LeadMagic lo ha pubblicato a febbraio 2026 e si è messo al primo posto. Leggilo come il test di un fornitore. Giggal.ai non era tra gli strumenti del test.',
    },
  ],
  breadcrumb: 'Alternativa a LeadMagic',
}

export default cfg
