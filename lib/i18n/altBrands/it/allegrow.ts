// Italian Allegrow alternative page. Translated from app/(en)/allegrow-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words from lib/i18n/altBrands/it/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'it',
  slug: 'allegrow',
  path: '/it/alternativa-a-allegrow',
  cluster: 'altAllegrow',
  metaTitle: 'Alternativa ad Allegrow e prezzi di Allegrow | Giggal.ai',
  ogTitle: "Un'alternativa ad Allegrow che paghi per ogni email",
  desc: 'Prezzi di Allegrow: da 99 $ al mese per 5.000 contatti. Giggal.ai verifica email catch-all e dietro gateway a 9,90 $ per 10.000, con crediti senza scadenza.',
  h1: ["Un'", 'alternativa ad Allegrow', ' che paghi per ogni email'],
  heroP:
    'Allegrow è una piattaforma di verifica email e di consegnabilità per i team di vendita. È venduta come piano mensile da 99 $ per 5.000 contatti. Giggal.ai verifica le email con crediti che compri una volta. 10.000 crediti costano 9,90 $ e non scadono mai.',
  bluf: [
    { k: 'Fatturazione', v: 'Allegrow è un piano mensile. I crediti Giggal.ai si comprano una volta.' },
    { k: 'Prezzo', v: 'Allegrow Starter costa 99 $ al mese per 5.000 contatti. Giggal.ai costa 9,90 $ per 10.000.' },
    { k: 'Catch-all', v: 'Entrambi restituiscono valido o non valido sugli indirizzi catch-all. Entrambi indicano Proofpoint e Mimecast.' },
    { k: 'Altri strumenti', v: 'Allegrow monitora anche il posizionamento in inbox e lo stato del dominio. Giggal.ai no.' },
  ],
  about: {
    heading: "Che cos'è Allegrow?",
    paragraphs: [
      'Allegrow è una piattaforma di verifica email B2B per i team di vendita e di revenue. Verifica i contatti, compresi gli indirizzi catch-all, e restituisce valido o non valido. Allegrow dice di non inviare mai email per verificare un indirizzo catch-all.',
      'Monitora anche la reputazione del mittente e il posizionamento in inbox delle caselle collegate. Si integra con Outreach, Salesloft, HubSpot, Apollo, ZoomInfo e Clay.',
      "Allegrow offre report SOC 2. Lo SSO è un'opzione aggiuntiva nel piano più alto.",
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Prezzi di Allegrow nel 2026',
  pricingProse:
    'Allegrow Starter costa 99 $ al mese per 5.000 contatti. I contatti in più costano 8 $ ogni 1.000. Scale Plus Unlimited costa 1340 $ al mese con fatturazione annuale, senza limite di crediti. Un piano API ha un prezzo su richiesta.',
  pricingExtra: [
    'Quindi 10.000 contatti al mese con Starter costano 139 $. È un nostro calcolo sui prezzi pubblicati, non un piano in listino. Giggal.ai vende 10.000 crediti a 9,90 $ e 100.000 a 76 $, pagati una volta.',
  ],
  reasons: {
    heading: "Perché i team cercano un'alternativa ad Allegrow",
    items: [
      { k: 'Costo mensile', v: "Starter costa 99 $ ogni mese. I team che verificano poche volte all'anno pagano anche i mesi in cui non lo usano." },
      { k: 'Integrazioni', v: 'Le integrazioni native con HubSpot, Outreach e Salesloft sono nel piano Scale Plus. Starter si collega a Clay con una chiave API.' },
      { k: 'Limiti della prova', v: 'La prova di 14 giorni copre 1.000 indirizzi, senza integrazioni e senza accesso alla API.' },
    ],
  },
  catchAllHeading: 'Allegrow vs Giggal.ai sulle email catch-all e dietro gateway',
  catchAllProse:
    'Allegrow e Giggal.ai restituiscono entrambi un risultato valido o non valido sugli indirizzi catch-all. Entrambi indicano anche Proofpoint e Mimecast tra i gateway dietro cui verificano. La differenza principale è la fatturazione. Allegrow usa una quota mensile di contatti. Giggal.ai addebita 1 credito per indirizzo, da crediti che non scadono mai.',
  strengths: {
    heading: 'Cosa fa bene Allegrow',
    intro: 'Allegrow fa più della sola verifica. È la scelta migliore per queste esigenze:',
  },
  others: {
    heading: 'Altre alternative ad Allegrow',
    intro: 'Anche questi strumenti verificano gli indirizzi catch-all. I prezzi vengono dal sito di ciascun fornitore, al 27 novembre 2026.',
    items: [
      { name: 'Scrubby', text: 'Verifica domini catch-all e protetti da gateway. A consumo costa 0,008 $ per credito, e i piani mensili partono da 47 $.' },
      { name: 'Listmint', text: 'Verifica gli indirizzi catch-all con un pacchetto di crediti separato. Starter costa 99 $ al mese per 20.000 crediti standard e 5.000 crediti catch-all.' },
      { name: 'Bounceless', text: 'Include le indicazioni sui catch-all nella verifica da 1 credito, e ha strumenti per il posizionamento in inbox. 10.000 crediti costano 29 $.' },
    ],
  },
  testHeading: 'Prova Giggal.ai sui tuoi risultati di Allegrow',
  testSteps: [
    'Esporta una lista che hai già verificato con Allegrow.',
    'Verificala qui con i 1.000 crediti gratis. Senza carta.',
    'Confronta i risultati catch-all con quelli di Allegrow per gli stessi contatti.',
  ],
  ctaHeadline: 'Verifica gli stessi indirizzi difficili, pagando per ogni email',
  faqs: [
    {
      q: 'Quanto costa Allegrow?',
      a: 'Allegrow Starter costa 99 $ al mese per 5.000 contatti, con contatti in più a 8 $ ogni 1.000. Scale Plus Unlimited costa 1340 $ al mese con fatturazione annuale. Il piano API ha un prezzo su richiesta.',
    },
    {
      q: 'Allegrow ha una prova gratuita?',
      a: "Sì. Allegrow ha una prova di 14 giorni per un massimo di 1.000 indirizzi, senza carta. Le integrazioni e l'accesso alla API non fanno parte della prova.",
    },
    {
      q: 'Giggal.ai è una buona alternativa ad Allegrow?',
      a: 'Sì, se ti serve solo la verifica. Giggal.ai restituisce un risultato sugli indirizzi catch-all e dietro gateway a 9,90 $ per 10.000. Non monitora il posizionamento in inbox né la reputazione del mittente.',
    },
    {
      q: 'Allegrow invia email per verificare gli indirizzi catch-all?',
      a: 'No. Allegrow dice di non inviare mai email per verificare un indirizzo catch-all.',
    },
    {
      q: 'Allegrow ha un piano illimitato?',
      a: 'Sì. Scale Plus Unlimited costa 1340 $ al mese con fatturazione annuale, con verifica illimitata tramite integrazioni o CSV. Giggal.ai non ha un piano illimitato.',
    },
  ],
  breadcrumb: 'Alternativa ad Allegrow',
}

export default cfg
