// Italian Listmint alternative page. Translated from app/(en)/listmint-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words from lib/i18n/altBrands/it/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'it',
  slug: 'listmint',
  path: '/it/alternativa-a-listmint',
  cluster: 'altListmint',
  metaTitle: 'Alternativa a Listmint: verifica email catch-all | Giggal.ai',
  ogTitle: "Un'alternativa a Listmint per verificare le email catch-all",
  desc: 'Listmint costa 99 $ al mese con 5.000 crediti catch-all. Giggal.ai verifica le email catch-all a 1 credito, 9,90 $ per 10.000, con crediti che non scadono mai.',
  h1: ["Un'", 'alternativa a Listmint', ' con un unico pacchetto di crediti'],
  heroP:
    'Listmint è un verificatore email che si concentra sugli indirizzi catch-all. Divide ogni piano in crediti standard e in un pacchetto più piccolo di crediti catch-all. Giggal.ai usa un unico pacchetto. Una verifica catch-all costa 1 credito, come qualsiasi altra email.',
  bluf: [
    { k: 'Crediti', v: 'Listmint ha due pacchetti di crediti. Giggal.ai ne ha uno, a 1 credito per email.' },
    { k: 'Prezzo', v: 'Listmint Starter costa 99 $ al mese. Giggal.ai costa 9,90 $ per 10.000 crediti, pagati una volta.' },
    { k: 'Catch-all', v: 'Listmint Starter dà 5.000 crediti catch-all al mese. Giggal.ai non ha un limite separato.' },
    { k: 'Gateway', v: 'Giggal.ai verifica gli indirizzi dietro 15 gateway email indicati per nome. Listmint non ne indica nessuno.' },
  ],
  about: {
    heading: "Che cos'è Listmint?",
    paragraphs: [
      'Listmint è un servizio di verifica email di listmint.io. Esegue verifiche SMTP standard e una verifica catch-all separata. Listmint dice di verificare a mano gli indirizzi catch-all.',
      'I suoi crediti catch-all costano più dei crediti standard. Per questo ogni piano include un grande pacchetto di crediti standard e un pacchetto più piccolo di crediti catch-all.',
      'Listmint dice anche di poter verificare gli indirizzi catch-all in tempo reale.',
    ],
  },
  reasons: {
    heading: "Perché gli utenti cercano un'alternativa a Listmint",
    items: [
      { k: 'Limite catch-all', v: 'Starter include 5.000 crediti catch-all al mese. Una sola grande lista B2B può usarli tutti.' },
      { k: 'Piano mensile', v: 'Listmint si paga ogni mese. I crediti Giggal.ai si comprano una volta e non scadono mai.' },
      { k: 'Volume', v: 'Il piano più grande pubblicato è Agency, con 50.000 crediti standard. Per volumi maggiori serve un preventivo Enterprise.' },
      { k: 'Gateway', v: 'Listmint non indica i secure email gateway dietro cui riesce a verificare.' },
    ],
  },
  catchAllHeading: 'Listmint vs Giggal.ai sugli indirizzi catch-all',
  catchAllProse:
    'Listmint addebita le verifiche catch-all su un pacchetto di crediti separato. Nel piano Starter da 99 $ quel pacchetto è di 5.000 crediti al mese. Giggal.ai non ha un pacchetto separato. Ogni indirizzo costa 1 credito, catch-all o no. Quando Giggal.ai non ottiene una risposta, il risultato è sconosciuto e il credito viene rimborsato.',
  pricingHeading: 'Prezzi di Listmint e Giggal.ai a confronto',
  pricingProse:
    'Listmint Starter costa 99 $ al mese per 20.000 crediti standard e 5.000 crediti catch-all. Agency costa 187 $ al mese per 50.000 crediti standard e 10.000 crediti catch-all. Enterprise ha un prezzo su richiesta.',
  pricingExtra: [
    'Giggal.ai non ha fasce di piani. 10.000 crediti costano 9,90 $ e 100.000 costano 76 $. Puoi usarli tutti sugli indirizzi catch-all.',
  ],
  strengths: {
    heading: 'Quando Listmint è una buona scelta',
    intro: 'Listmint ha senso se vuoi queste cose:',
  },
  others: {
    heading: 'Altre alternative a Listmint',
    intro: 'Anche questi verificatori restituiscono un risultato sugli indirizzi catch-all. I prezzi vengono dal sito di ciascun fornitore, al 27 novembre 2026.',
    items: [
      { name: 'Scrubby', text: 'Verifica domini catch-all e protetti da gateway a 1 credito. La sua Deep Verification costa 3 crediti e invia email reali. A consumo costa 0,008 $ per credito.' },
      { name: 'no2bounce', text: 'Invia messaggi di prova per confermare le caselle catch-all. 10.000 crediti a consumo costano 20 $ e non scadono mai.' },
      { name: 'Allegrow', text: 'Restituisce valido o non valido sui contatti catch-all, per i team di vendita. Starter costa 99 $ al mese per 5.000 contatti.' },
    ],
  },
  testHeading: 'Passa una lista di Listmint in Giggal.ai',
  testSteps: [
    'Esporta una lista che hai già verificato con Listmint.',
    'Verificala qui con i 1.000 crediti gratis. Senza carta.',
    'Confronta le righe catch-all con il risultato che ha dato Listmint.',
  ],
  ctaHeadline: 'Verifica le email catch-all senza un limite di crediti separato',
  faqs: [
    {
      q: 'Quanto costa Listmint?',
      a: 'Listmint Starter costa 99 $ al mese con 20.000 crediti standard e 5.000 crediti catch-all. Agency costa 187 $ al mese con 50.000 crediti standard e 10.000 crediti catch-all. Enterprise ha un prezzo su richiesta.',
    },
    {
      q: 'Perché Listmint ha crediti catch-all separati?',
      a: 'Listmint dice che i suoi crediti catch-all costano più dei normali crediti SMTP, perché una verifica catch-all richiede più lavoro. Giggal.ai addebita 1 credito per ogni indirizzo, anche per i catch-all.',
    },
    {
      q: 'Giggal.ai è una buona alternativa a Listmint?',
      a: 'Sì, se verifichi liste con molti indirizzi catch-all. Giggal.ai non ha un limite catch-all separato e non ha un piano mensile. Costa 9,90 $ per 10.000 crediti.',
    },
    {
      q: 'Listmint ha una prova gratuita?',
      a: 'Listmint offre un avvio gratuito, ma non pubblica quanti crediti include. Giggal.ai dà 1.000 crediti gratis senza carta.',
    },
  ],
  breadcrumb: 'Alternativa a Listmint',
}

export default cfg
