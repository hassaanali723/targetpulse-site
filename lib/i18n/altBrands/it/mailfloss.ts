// Italian Mailfloss alternative page. Translated from app/(en)/mailfloss-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) match
// lib/i18n/altBrands/it/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'it',
  slug: 'mailfloss',
  path: '/it/alternativa-a-mailfloss',
  cluster: 'altMailfloss',
  metaTitle: 'Alternativa a Mailfloss: prezzi e catch-all | Giggal.ai',
  ogTitle: "Un'alternativa a Mailfloss che verifica le email catch-all",
  desc: 'Mailfloss pulisce ogni giorno la lista della tua piattaforma email, ma segnala le email catch-all. Giggal.ai dà un risultato a 9,90 $ per 10.000 crediti.',
  h1: ["Un'", 'alternativa a Mailfloss', ' per pulire una lista una sola volta'],
  heroP:
    'Mailfloss si collega alla tua piattaforma di email marketing e pulisce la lista ogni giorno. Segnala gli indirizzi catch-all ma non li conferma. Giggal.ai verifica le liste che carichi e restituisce un risultato sugli indirizzi catch-all, a 9,90 $ per 10.000 email.',
  bluf: [
    { k: 'Come funziona', v: 'Mailfloss pulisce la lista dentro la tua piattaforma email. Giggal.ai verifica le liste che carichi o invii tramite API.' },
    { k: 'Catch-all', v: 'Mailfloss segnala gli indirizzi catch-all. Giggal.ai restituisce un risultato su di essi.' },
    { k: 'Prezzo', v: 'I crediti prepagati di Mailfloss costano 40 $ per 10.000. Giggal.ai costa 9,90 $.' },
    { k: 'Uso gratuito', v: 'Mailfloss dà 500 verifiche gratis al mese. Giggal.ai dà 1.000 crediti una sola volta, senza carta.' },
  ],
  about: {
    heading: "Che cos'è Mailfloss?",
    paragraphs: [
      'Mailfloss è un servizio di pulizia delle liste email. Si collega a 41 piattaforme email, come Mailchimp, Klaviyo, HubSpot e ActiveCampaign. Poi rimuove ogni giorno gli indirizzi non validi dalla tua lista.',
      'Corregge anche gli errori di battitura più comuni negli indirizzi email. Ha una API in tempo reale, webhook e un widget per i moduli.',
      'Mailfloss vende abbonamenti mensili e crediti prepagati. I crediti prepagati non scadono mai.',
    ],
  },
  reasons: {
    heading: "Perché gli utenti cercano un'alternativa a Mailfloss",
    items: [
      { k: 'Catch-all', v: 'Mailfloss segnala gli indirizzi catch-all. Non conferma se la casella esiste.' },
      { k: 'Carta per la prova', v: 'La prova di 7 giorni sugli abbonamenti richiede una carta di credito.' },
      { k: 'Limite di piattaforme', v: 'Lite si collega a 1 piattaforma email, e Business si collega a 10.' },
      { k: 'Prezzo', v: 'I crediti prepagati costano 40 $ per 10.000 e 300 $ per 100.000.' },
    ],
  },
  catchAllHeading: 'Come Mailfloss e Giggal.ai gestiscono le email catch-all',
  catchAllProse:
    'Mailfloss segnala gli indirizzi catch-all e lascia a te la decisione. Giggal.ai esegue altri controlli su di essi e restituisce uno di quattro risultati, a 1 credito ciascuno. Verifica anche gli indirizzi dietro 15 secure email gateway indicati per nome.',
  pricingHeading: 'Prezzi di Mailfloss e Giggal.ai a confronto',
  pricingProse:
    'Gli abbonamenti Mailfloss sono Lite a 29 $ al mese per 10.000 crediti, Business a 59 $ per 25.000 e Pro a 209 $ per 125.000. I crediti prepagati costano 8 $ per 1.000, 40 $ per 10.000, 300 $ per 100.000 e 1200 $ per un milione.',
  pricingExtra: [
    'Ogni account Mailfloss riceve anche 500 verifiche gratis al mese. Giggal.ai vende 10.000 crediti a 9,90 $ e un milione a 680 $, senza abbonamento.',
  ],
  strengths: {
    heading: 'Quando Mailfloss è una buona scelta',
    intro: 'Mailfloss fa alcune cose che Giggal.ai non fa:',
  },
  others: {
    heading: 'Altre alternative a Mailfloss',
    intro: 'Anche questi verificatori puliscono le liste di marketing. I prezzi vengono dal sito di ciascun fornitore, al 27 novembre 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Si integra con più di 50 strumenti di marketing. 10.000 crediti permanenti costano 60 $.' },
      { name: 'Bounceless', text: '10.000 crediti costano 29 $, con 1.000 crediti gratis al mese per chi usa un indirizzo email aziendale.' },
      { name: 'no2bounce', text: 'Si integra con HubSpot, Klaviyo e Zoho. 10.000 crediti costano 20 $ e non scadono mai.' },
    ],
  },
  testHeading: 'Prova Giggal.ai su un export della tua piattaforma email',
  testSteps: [
    'Esporta una lista che hai già verificato con Mailfloss.',
    'Verificala qui con i 1.000 crediti gratis. Senza carta.',
    'Confronta le righe catch-all con quelle che Mailfloss ha segnalato.',
  ],
  ctaHeadline: 'Un risultato sugli indirizzi catch-all, non una segnalazione',
  faqs: [
    {
      q: 'Quanto costa Mailfloss?',
      a: 'Gli abbonamenti partono da 29 $ al mese per 10.000 crediti. I crediti prepagati costano 40 $ per 10.000 e 1200 $ per un milione, e non scadono mai.',
    },
    {
      q: 'Mailfloss ha un piano gratuito?',
      a: 'Sì. Ogni account riceve 500 verifiche gratis al mese. Gli abbonamenti hanno anche una prova di 7 giorni, che richiede una carta.',
    },
    {
      q: 'Mailfloss verifica le email catch-all?',
      a: 'Le segnala. Non conferma se la casella esiste. Giggal.ai restituisce un risultato sugli indirizzi catch-all a 1 credito ciascuno.',
    },
    {
      q: 'Giggal.ai pulisce la lista della mia piattaforma email come Mailfloss?',
      a: 'No. Giggal.ai funziona con i caricamenti, una API, Zapier, n8n e HubSpot. Non esegue una pulizia giornaliera dentro la tua piattaforma email.',
    },
  ],
  breadcrumb: 'Alternativa a Mailfloss',
}

export default cfg
