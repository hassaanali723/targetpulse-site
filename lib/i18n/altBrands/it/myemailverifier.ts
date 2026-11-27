// Italian MyEmailVerifier alternative page. Translated from
// app/(en)/myemailverifier-alternative (2026-11-27). Its prices are from the
// August 2026 check, as the English says. The competitor's words (free tier,
// expiry, strengths) match lib/i18n/altBrands/it/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'it',
  slug: 'myemailverifier',
  path: '/it/alternativa-a-myemailverifier',
  cluster: 'altMyemailverifier',
  metaTitle: 'Alternativa a MyEmailVerifier: prezzi e catch-all | Giggal.ai',
  ogTitle: "Un'alternativa a MyEmailVerifier per le liste B2B",
  desc: 'MyEmailVerifier dà 100 crediti gratis al giorno, ma segna i catch-all come stato. Giggal.ai restituisce un risultato sulle email catch-all a 9,90 $ per 10.000.',
  h1: ["Un'", 'alternativa a MyEmailVerifier', ' per liste B2B con domini catch-all'],
  heroP:
    'MyEmailVerifier è un verificatore email a basso costo, con 100 crediti gratis al giorno. Segna gli indirizzi catch-all con uno stato a parte e non li conferma. Giggal.ai restituisce un risultato su quegli indirizzi, a 9,90 $ per 10.000 email.',
  bluf: [
    { k: 'Catch-all', v: 'MyEmailVerifier segna i catch-all come stato. Giggal.ai restituisce un risultato.' },
    { k: 'Prezzo', v: '10.000 crediti costano 15 $ su MyEmailVerifier e 9,90 $ su Giggal.ai.' },
    { k: 'Ad alti volumi', v: 'Un milione di crediti costa 349 $ su MyEmailVerifier e 680 $ su Giggal.ai.' },
    { k: 'Crediti gratis', v: 'MyEmailVerifier ne dà 100 al giorno. Giggal.ai ne dà 1.000 una sola volta, senza carta.' },
  ],
  about: {
    heading: "Che cos'è MyEmailVerifier?",
    paragraphs: [
      'MyEmailVerifier è un servizio di verifica email di myemailverifier.com. Verifica liste in blocco e singole email, e ha una API.',
      'Dà 100 crediti gratis ogni giorno. I crediti a pagamento partono da 4 $ per 1.000 e non scadono mai.',
      'Restituisce gli indirizzi catch-all con uno stato catch-all separato. Non conferma se quelle caselle esistono.',
    ],
  },
  reasons: {
    heading: "Perché gli utenti cercano un'alternativa a MyEmailVerifier",
    items: [
      { k: 'Catch-all', v: 'Gli indirizzi catch-all tornano senza una risposta chiara. Nelle liste B2B, possono essere una parte ampia della lista.' },
      { k: 'Gateway', v: 'MyEmailVerifier non elenca Proofpoint, Mimecast o altri gateway dietro cui può verificare.' },
    ],
  },
  catchAllHeading: 'Email catch-all: MyEmailVerifier e Giggal.ai a confronto',
  catchAllProse:
    'Molti domini aziendali accettano ogni indirizzo, quindi un controllo di base non distingue un indirizzo reale da uno falso. MyEmailVerifier segna questi indirizzi come catch-all e lascia a te la decisione. Giggal.ai esegue altri controlli e restituisce uno dei quattro risultati qui sotto, a 1 credito ciascuno.',
  pricingHeading: 'Prezzi di MyEmailVerifier e Giggal.ai a confronto',
  pricingProse:
    'MyEmailVerifier vende crediti che non scadono mai. Secondo il nostro controllo di agosto 2026, 1.000 crediti costavano 4 $, 10.000 costavano 15 $, 100.000 costavano 99 $ e un milione costava 349 $.',
  pricingExtra: [
    'Giggal.ai vende 10.000 crediti a 9,90 $, 100.000 a 76 $ e un milione a 680 $. A un milione, MyEmailVerifier costa meno. Giggal.ai aggiunge un risultato sugli indirizzi catch-all e dietro gateway.',
  ],
  strengths: {
    heading: 'Quando MyEmailVerifier è una buona scelta',
    intro: 'MyEmailVerifier è una buona scelta per alcune liste:',
  },
  others: {
    heading: 'Altre alternative a MyEmailVerifier',
    intro: 'Anche questi verificatori hanno prezzi bassi o crediti gratis giornalieri. I prezzi vengono dal sito di ciascun fornitore, al 27 novembre 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Anche questo dà 100 crediti gratis al giorno. 10.000 crediti permanenti costano 60 $.' },
      { name: 'Bounceless', text: 'Dà 1.000 crediti gratis al mese con un indirizzo email aziendale. 10.000 crediti costano 29 $, con le indicazioni sui catch-all incluse.' },
      { name: 'no2bounce', text: '10.000 crediti costano 20 $ e non scadono mai. Invia messaggi di prova per confermare le caselle catch-all.' },
    ],
  },
  testHeading: 'Verifica le tue righe catch-all con Giggal.ai',
  testSteps: [
    'Esporta una lista che hai già verificato con MyEmailVerifier.',
    'Verificala qui con i 1.000 crediti gratis. Senza carta.',
    'Confronta le righe che MyEmailVerifier ha segnato catch-all.',
  ],
  ctaHeadline: 'Ottieni un risultato sugli indirizzi catch-all',
  faqs: [
    {
      q: 'Quanto costa MyEmailVerifier?',
      a: 'Secondo il nostro controllo di agosto 2026, 1.000 crediti costavano 4 $, 10.000 costavano 15 $, 100.000 costavano 99 $ e un milione costava 349 $. I crediti non scadono mai.',
    },
    {
      q: 'MyEmailVerifier è gratis?',
      a: 'Dà 100 crediti gratis ogni giorno. I crediti giornalieri si rinnovano invece di finire dopo una prova. Giggal.ai dà 1.000 crediti gratis una sola volta, senza carta.',
    },
    {
      q: 'MyEmailVerifier verifica le email catch-all?',
      a: 'Rileva i domini catch-all e restituisce lo stato catch-all. Non conferma la casella. Giggal.ai restituisce un risultato sugli indirizzi catch-all a 1 credito ciascuno.',
    },
    {
      q: 'I crediti Giggal.ai scadono?',
      a: 'No. I crediti Giggal.ai non scadono mai. Nemmeno i crediti di MyEmailVerifier scadono.',
    },
  ],
  breadcrumb: 'Alternativa a MyEmailVerifier',
}

export default cfg
