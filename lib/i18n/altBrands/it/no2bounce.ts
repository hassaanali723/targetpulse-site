// Italian no2bounce alternative page. Translated from app/(en)/no2bounce-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) match
// lib/i18n/altBrands/it/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'it',
  slug: 'no2bounce',
  path: '/it/alternativa-a-no2bounce',
  cluster: 'altNo2bounce',
  metaTitle: 'Alternativa a no2bounce: prezzi e catch-all | Giggal.ai',
  ogTitle: "Un'alternativa a no2bounce per la verifica delle email catch-all",
  desc: 'no2bounce costa 20 $ per 10.000 crediti. Giggal.ai verifica le email catch-all e dietro gateway a 9,90 $ per 10.000, con 1.000 crediti gratis senza carta.',
  h1: ["Un'", 'alternativa a no2bounce', ' con un prezzo più basso per email'],
  heroP:
    'no2bounce è un verificatore email con crediti a consumo che non scadono mai. Giggal.ai funziona allo stesso modo. Le differenze sono il prezzo, i crediti gratis e il modo in cui ciascuno verifica gli indirizzi catch-all.',
  bluf: [
    { k: 'Prezzo', v: '10.000 crediti costano 20 $ su no2bounce e 9,90 $ su Giggal.ai.' },
    { k: 'Ad alti volumi', v: 'Un milione di crediti costa 679 $ su no2bounce e 680 $ su Giggal.ai.' },
    { k: 'Crediti gratis', v: 'no2bounce dà 100 crediti gratis. Giggal.ai ne dà 1.000. Nessuno dei due chiede una carta.' },
    { k: 'Scadenza', v: 'I crediti non scadono mai su nessuno dei due strumenti.' },
  ],
  about: {
    heading: "Che cos'è no2bounce?",
    paragraphs: [
      "no2bounce è un servizio di verifica email. Verifica singole email, liste in blocco ed email inviate tramite la sua API. Gli stessi crediti pagano anche il suo email finder, la ricerca per dominio e l'email scoring.",
      'Per i domini catch-all, no2bounce invia messaggi di prova controllati per confermare se una casella esiste. Dichiara una precisione del 99,6%.',
      'Si collega a HubSpot, Salesforce, Clay, Zapier, Google Sheets e Zoho CRM, tra gli altri.',
    ],
  },
  reasons: {
    heading: "Perché gli utenti cercano un'alternativa a no2bounce",
    items: [
      { k: 'Prezzo a 10.000', v: 'no2bounce chiede 20 $ per 10.000 crediti. Giggal.ai chiede 9,90 $ per la stessa quantità.' },
      { k: 'A 100.000', v: '100.000 crediti costano 149 $ su no2bounce e 76 $ su Giggal.ai.' },
      { k: 'Prova gratuita', v: 'no2bounce dà 100 crediti gratis. Giggal.ai ne dà 1.000, abbastanza per provare un campione reale.' },
    ],
  },
  catchAllHeading: 'Come no2bounce e Giggal.ai verificano gli indirizzi catch-all',
  catchAllProse:
    'no2bounce invia messaggi di prova controllati tramite i propri server per confermare le caselle catch-all. Giggal.ai restituisce un risultato sugli indirizzi catch-all a 1 credito ciascuno, senza costi separati. Verifica anche gli indirizzi dietro 15 secure email gateway indicati per nome, tra cui Proofpoint, Mimecast e Barracuda.',
  pricingHeading: 'Prezzi di no2bounce e Giggal.ai a confronto',
  pricingProse:
    'no2bounce vende pacchetti a consumo da 10.000 crediti per 20 $ fino a 50 milioni di crediti. 100.000 costano 149 $ e un milione costa 679 $. I piani mensili costano il 15% in meno, quelli annuali il 20% in meno.',
  pricingExtra: [
    "Giggal.ai vende 10.000 crediti a 9,90 $, 100.000 a 76 $ e un milione a 680 $. Non c'è un piano da scegliere. I crediti non scadono mai su nessuno dei due strumenti.",
  ],
  strengths: {
    heading: 'Quando no2bounce è una buona scelta',
    intro: 'no2bounce è una scelta sensata per queste esigenze:',
  },
  others: {
    heading: 'Altre alternative a no2bounce',
    intro: 'Anche questi verificatori vendono crediti che non scadono mai. I prezzi vengono dal sito di ciascun fornitore, al 27 novembre 2026.',
    items: [
      { name: 'Bounceless', text: '10.000 crediti costano 29 $ e un milione costa 579 $. Dà 1.000 crediti gratis al mese con un indirizzo email aziendale.' },
      { name: 'QuickEmailVerification', text: '10.000 crediti costano 60 $. Dà 100 crediti gratis ogni giorno.' },
      { name: 'Scrubby', text: "La tariffa a consumo è 0,008 $ per credito, con un'opzione Deep Verification per gli indirizzi difficili." },
    ],
  },
  testHeading: 'Confronta no2bounce e Giggal.ai su una lista',
  testSteps: [
    'Esporta una lista che hai già verificato con no2bounce.',
    'Verificala qui con i 1.000 crediti gratis. Senza carta.',
    'Confronta le righe catch-all con i risultati di no2bounce.',
  ],
  ctaHeadline: 'Lo stesso lavoro a un prezzo più basso per email',
  faqs: [
    {
      q: 'Quanto costa no2bounce?',
      a: 'I pacchetti a consumo di no2bounce partono da 20 $ per 10.000 crediti. 100.000 costano 149 $ e un milione costa 679 $. I piani mensili costano il 15% in meno, quelli annuali il 20% in meno.',
    },
    {
      q: 'no2bounce è gratis?',
      a: 'no2bounce dà 100 crediti gratis senza carta, e non scadono mai. Dopo, compri i crediti. Giggal.ai dà 1.000 crediti gratis senza carta.',
    },
    {
      q: "Giggal.ai è una buona alternativa a no2bounce?",
      a: 'Sì. Entrambi vendono crediti che non scadono mai. Giggal.ai costa meno a 10.000 e a 100.000 crediti, e dà dieci volte i crediti gratis. A un milione di crediti, i due prezzi sono quasi uguali.',
    },
    {
      q: 'I crediti di no2bounce scadono?',
      a: "No. I crediti acquistati su no2bounce restano nel tuo account finché non li usi. I crediti in abbonamento restano validi finché l'abbonamento è attivo. I crediti Giggal.ai non scadono mai.",
    },
  ],
  breadcrumb: 'Alternativa a no2bounce',
}

export default cfg
