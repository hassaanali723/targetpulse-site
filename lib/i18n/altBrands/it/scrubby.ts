// Italian Scrubby alternative page. Translated from app/(en)/scrubby-alternative
// (2026-11-27). "Quick Verification" and "Deep Verification" stay in English.
// The competitor's words (free tier, expiry, strengths) match
// lib/i18n/altBrands/it/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'it',
  slug: 'scrubby',
  path: '/it/alternativa-a-scrubby',
  cluster: 'altScrubby',
  metaTitle: 'Alternativa a Scrubby e prezzi di Scrubby.io | Giggal.ai',
  ogTitle: "Un'alternativa a Scrubby per le email catch-all e dietro gateway",
  desc: 'Scrubby costa 0,008 $ per credito, e la Deep Verification richiede fino a 72 ore. Giggal.ai verifica email catch-all e dietro gateway a 9,90 $ per 10.000.',
  h1: ["Un'", 'alternativa a Scrubby', ' a 9,90 $ per 10.000 email'],
  heroP:
    'Scrubby verifica le email catch-all e quelle protette da gateway, gli stessi indirizzi difficili su cui si concentra Giggal.ai. Le differenze sono il prezzo e il funzionamento di ciascun controllo. Scrubby costa 0,008 $ per credito. Giggal.ai costa 9,90 $ per 10.000.',
  bluf: [
    { k: 'Prezzo', v: '10.000 crediti costano 80 $ su Scrubby e 9,90 $ su Giggal.ai.' },
    { k: 'Controllo approfondito', v: 'La Deep Verification di Scrubby costa 3 crediti e invia email reali. I risultati finali richiedono fino a 72 ore.' },
    { k: 'Crediti gratis', v: 'Scrubby dà 200 crediti gratis. Giggal.ai ne dà 1.000. Nessuno dei due chiede una carta.' },
    { k: 'Rimborsi', v: 'Scrubby dichiara che tutti gli acquisti sono definitivi. Giggal.ai rimborsa il credito sui risultati sconosciuti.' },
  ],
  about: {
    heading: "Che cos'è Scrubby?",
    paragraphs: [
      'Scrubby è uno strumento di verifica email di scrubby.io. Si concentra sugli indirizzi catch-all e rischiosi che altri verificatori non riescono a confermare.',
      'Ha due controlli. Quick Verification costa 1 credito e copre domini standard, catch-all e protetti da SEG. Deep Verification costa 3 crediti. Scrubby invia email reali a ogni indirizzo e dà i risultati finali entro 72 ore.',
      'Scrubby si collega a strumenti come Clay, Instantly, Smartlead, Apollo e HubSpot.',
    ],
  },
  reasons: {
    heading: "Perché i team cercano un'alternativa a Scrubby",
    items: [
      { k: 'Prezzo', v: 'La tariffa a consumo è 0,008 $ per credito. 10.000 controlli costano 80 $ e 100.000 costano 800 $.' },
      { k: 'Tempo di attesa', v: 'I risultati della Deep Verification richiedono fino a 72 ore.' },
      { k: 'Email reali', v: 'La Deep Verification invia email reali a ogni indirizzo della tua lista.' },
      { k: 'Nessun rimborso', v: 'Scrubby dichiara che tutti gli acquisti sono definitivi.' },
    ],
  },
  catchAllHeading: 'Scrubby e Giggal.ai sulle email catch-all e dietro gateway',
  catchAllProse:
    'Scrubby e Giggal.ai restituiscono entrambi un risultato sugli indirizzi catch-all e protetti da gateway. Giggal.ai chiede 1 credito per ogni indirizzo, senza un livello più approfondito. Indica per nome 15 gateway dietro cui verifica, tra cui Proofpoint, Mimecast e Barracuda. Quando non ottiene una risposta, il credito viene rimborsato.',
  pricingHeading: 'Prezzi di Scrubby e Giggal.ai a confronto',
  pricingProse:
    'La tariffa a consumo di Scrubby è 0,008 $ per credito, quindi 10.000 crediti costano 80 $. I piani mensili sono Starter a 47 $ per 6.000 crediti, Growth a 97 $ per 15.000 e Pro a 497 $ per 100.000. I crediti a consumo non scadono mai, e i crediti dei piani passano al mese successivo.',
  pricingExtra: [
    'Una Deep Verification usa 3 crediti, quindi 10.000 controlli approfonditi usano 30.000 crediti. Giggal.ai vende 10.000 crediti a 9,90 $ e 100.000 a 76 $.',
  ],
  strengths: {
    heading: 'Quando Scrubby è una buona scelta',
    intro: 'Scrubby ha punti di forza da conoscere:',
  },
  others: {
    heading: 'Altre alternative a Scrubby',
    intro: 'Anche questi strumenti restituiscono un risultato sugli indirizzi catch-all. I prezzi vengono dal sito di ciascun fornitore, al 27 novembre 2026.',
    items: [
      { name: 'no2bounce', text: 'Invia messaggi di prova per confermare le caselle catch-all. 10.000 crediti costano 20 $ e non scadono mai.' },
      { name: 'Listmint', text: 'Verifica a mano gli indirizzi catch-all. Starter costa 99 $ al mese per 20.000 crediti standard e 5.000 crediti catch-all.' },
      { name: 'Allegrow', text: 'Restituisce valido o non valido sui contatti catch-all e indica per nome Proofpoint e Mimecast. Starter costa 99 $ al mese.' },
    ],
  },
  testHeading: 'Prova Giggal.ai sui tuoi indirizzi catch-all',
  testSteps: [
    'Esporta una lista che hai già verificato con Scrubby.',
    'Verificala qui con i 1.000 crediti gratis. Senza carta.',
    'Confronta i risultati con quelli di Scrubby per gli stessi indirizzi catch-all.',
  ],
  ctaHeadline: 'Verifica gli stessi indirizzi difficili a 9,90 $ per 10.000',
  faqs: [
    {
      q: 'Quanto costa Scrubby?',
      a: 'La tariffa a consumo di Scrubby è 0,008 $ per credito, cioè 80 $ per 10.000. I piani mensili partono da 47 $ per 6.000 crediti. La Deep Verification usa 3 crediti per email.',
    },
    {
      q: "Che cos'è la Deep Verification di Scrubby?",
      a: 'È il controllo più lento di Scrubby per gli indirizzi difficili. Costa 3 crediti, invia email reali a ogni indirizzo e dà i risultati finali entro 72 ore.',
    },
    {
      q: 'Scrubby ha una prova gratuita?',
      a: 'Sì. Scrubby dà 200 crediti gratis senza carta. Giggal.ai dà 1.000 crediti gratis senza carta.',
    },
    {
      q: 'Giggal.ai è una buona alternativa a Scrubby?',
      a: 'Sì. Entrambi restituiscono un risultato sugli indirizzi catch-all e dietro gateway. Giggal.ai costa 9,90 $ per 10.000 crediti e rimborsa il credito sui risultati sconosciuti.',
    },
  ],
  breadcrumb: 'Alternativa a Scrubby',
}

export default cfg
