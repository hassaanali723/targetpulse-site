// Italian Findymail alternative page. Translated from app/(en)/findymail-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words from lib/i18n/altBrands/it/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'it',
  slug: 'findymail',
  path: '/it/alternativa-a-findymail',
  cluster: 'altFindymail',
  metaTitle: 'Alternative a Findymail e prezzi di Findymail | Giggal.ai',
  ogTitle: 'Alternative a Findymail e prezzi a confronto',
  desc: 'Prezzi di Findymail: da 99 $ al mese. Confronta le alternative e i concorrenti di Findymail, tra cui Giggal.ai, un verificatore a 9,90 $ per 10.000 crediti.',
  h1: ["Un'", 'alternativa a Findymail', ' per verificare le email che hai già'],
  heroP:
    'Findymail trova email B2B e le verifica. I suoi piani partono da 99 $ al mese. Se hai già una lista e ti serve solo verificarla, Giggal.ai lo fa a 9,90 $ ogni 10.000 email. Compri i crediti una volta, e non scadono mai.',
  bluf: [
    { k: 'Compito principale', v: 'Findymail trova le email, poi le verifica. Giggal.ai fa solo la verifica.' },
    { k: 'Prezzo', v: 'Findymail parte da 99 $ al mese. Giggal.ai costa 9,90 $ per 10.000 crediti, pagati una volta.' },
    { k: 'Crediti gratis', v: 'Findymail dà 10 crediti gratis. Giggal.ai ne dà 1.000, senza carta.' },
    { k: 'Garanzia', v: 'Findymail promette un tasso di rimbalzo sotto il 5%, e rimborsa i crediti se lo supera.' },
  ],
  about: {
    heading: "Che cos'è Findymail?",
    paragraphs: [
      'Findymail è un email finder B2B. Trova email di lavoro partendo da nome e azienda, da un URL di LinkedIn o da una ricerca in Sales Navigator. Ogni email che trova viene verificata prima che tu la riceva.',
      "Ha un'estensione per Chrome, un componente aggiuntivo per Google Sheets, il caricamento in blocco, una API e una ricerca di numeri di telefono. Si collega, tra gli altri, a Clay, HubSpot, Salesforce, Pipedrive, Instantly, Smartlead e Lemlist.",
      'Findymail vende anche crediti verifier per le liste che vengono da altre fonti. Dice di verificare le email catch-all che altri strumenti segnano come rischiose.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Prezzi di Findymail nel 2026',
  pricingProse:
    "Findymail ha due tipi di piani. I piani basati sull'utilizzo sono Individual a 99 $ al mese, Pro a 249 $, Team a 399 $ e Scale a 999 $. Indicano postazioni e dimensioni dei file, non un numero di crediti.",
  pricingExtra: [
    'Il piano Starter a crediti costa 99 $ al mese. Include 5.000 crediti finder e 5.000 crediti verifier. I volumi più grandi sono Enterprise, con prezzo su richiesta. I crediti non usati passano al mese successivo, fino al doppio della quota mensile.',
    'Giggal.ai non ha un piano mensile. 10.000 crediti costano 9,90 $, 100.000 costano 76 $ e un milione costa 680 $.',
  ],
  reasons: {
    heading: "Perché i team cercano un'alternativa a Findymail",
    items: [
      { k: 'Solo verifica', v: 'Molti team hanno già una lista. Non serve loro un email finder, solo un verificatore.' },
      { k: 'Volume', v: 'Starter include 5.000 crediti verifier al mese. Per volumi più grandi serve un preventivo Enterprise.' },
      { k: 'Fattura mensile', v: 'Findymail fattura ogni mese. I crediti Giggal.ai si comprano una volta e non scadono mai.' },
      { k: 'Prova piccola', v: 'Findymail dà 10 crediti gratis. Sono troppo pochi per provare una lista reale.' },
    ],
  },
  catchAllHeading: 'Findymail vs Giggal.ai sulle email catch-all',
  catchAllProse:
    'Findymail verifica le email catch-all che altri strumenti segnano come rischiose. Anche Giggal.ai restituisce un risultato sugli indirizzi catch-all, a 1 credito ciascuno. Verifica inoltre gli indirizzi dietro 15 secure email gateway indicati per nome, come Proofpoint, Mimecast e Barracuda. Findymail non dichiara il supporto per i gateway.',
  strengths: {
    heading: 'Cosa fa bene Findymail',
    intro: 'Findymail è la scelta migliore se ti serve questo:',
  },
  others: {
    heading: 'Altre alternative e concorrenti di Findymail',
    intro: 'Anche questi strumenti trovano o verificano email B2B. I prezzi vengono dal sito di ciascun fornitore, al 27 novembre 2026.',
    items: [
      { name: 'Anymail Finder', text: 'Un email finder con piani da 29 $ al mese per 400 crediti. Promette che almeno il 97% delle email che trova non darà un hard bounce.' },
      { name: 'LeadMagic', text: 'Una piattaforma di dati B2B con ricerca email, numeri di cellulare e dati aziendali. I piani partono da 99 $ al mese per 5.000 crediti condivisi.' },
      { name: 'Allegrow', text: 'Un verificatore per i team di vendita che segue anche il posizionamento in inbox e lo stato del dominio. Starter costa 99 $ al mese per 5.000 contatti.' },
    ],
  },
  testHeading: 'Verifica un export di Findymail con Giggal.ai',
  testSteps: [
    'Esporta una lista che hai già verificato con Findymail.',
    'Verificala qui con i 1.000 crediti gratis. Senza carta.',
    'Confronta le righe catch-all con il risultato che Findymail ha dato per gli stessi contatti.',
  ],
  ctaHeadline: 'Verifica la tua lista senza abbonamento',
  faqs: [
    {
      q: 'Quanto costa Findymail?',
      a: "I piani di Findymail partono da 99 $ al mese. Il piano Starter a crediti include 5.000 crediti finder e 5.000 crediti verifier. I piani basati sull'utilizzo vanno da 99 $ a 999 $ al mese. I volumi più grandi hanno un prezzo su richiesta.",
    },
    {
      q: 'Findymail ha un piano gratuito?',
      a: "Findymail dà 10 crediti gratis per provarlo, senza carta. Non c'è un piano gratuito permanente. Giggal.ai dà 1.000 crediti gratis senza carta.",
    },
    {
      q: 'Quali sono le migliori alternative a Findymail?',
      a: 'Per trovare le email, Anymail Finder e LeadMagic sono scelte comuni. Per verificare una lista che hai già, Giggal.ai costa 9,90 $ per 10.000 crediti, senza abbonamento.',
    },
    {
      q: 'Findymail va bene per la verifica email?',
      a: 'Sì. Findymail verifica ogni email che trova e promette un tasso di rimbalzo sotto il 5%. Starter include 5.000 crediti verifier al mese, quindi per le liste grandi serve un piano Enterprise o un altro verificatore.',
    },
    {
      q: 'Giggal.ai può trovare le email come Findymail?',
      a: 'No. Giggal.ai fa solo la verifica. Trova prima le email, poi passa la lista in Giggal.ai prima di inviare.',
    },
    {
      q: 'I crediti di Findymail scadono?',
      a: "I crediti non usati passano da un mese all'altro, fino al doppio della tua quota mensile. I crediti Giggal.ai non scadono mai.",
    },
  ],
  breadcrumb: 'Alternativa a Findymail',
}

export default cfg
