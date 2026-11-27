// Italian Bounceless alternative page. Translated from app/(en)/bounceless-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) match
// lib/i18n/altBrands/it/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'it',
  slug: 'bounceless',
  path: '/it/alternativa-a-bounceless',
  cluster: 'altBounceless',
  metaTitle: 'Alternativa a Bounceless: prezzi di Bounceless.io | Giggal.ai',
  ogTitle: "Un'alternativa a Bounceless con verifica dietro i gateway",
  desc: 'Bounceless costa 29 $ per 10.000 crediti. Giggal.ai costa 9,90 $ e verifica le email catch-all e dietro secure email gateway. I crediti non scadono mai.',
  h1: ["Un'", 'alternativa a Bounceless', ' che verifica anche le email dietro gateway'],
  heroP:
    'Bounceless è un verificatore email a basso costo, con pacchetti una tantum e piani mensili. Ora include indicazioni sui catch-all nel suo controllo standard. Anche Giggal.ai restituisce un risultato sugli indirizzi catch-all, e verifica dietro 15 secure email gateway indicati per nome.',
  bluf: [
    { k: 'Prezzo', v: '10.000 crediti costano 29 $ su Bounceless e 9,90 $ su Giggal.ai.' },
    { k: 'Ad alti volumi', v: 'Un milione di crediti costa 579 $ su Bounceless e 680 $ su Giggal.ai.' },
    { k: 'Gateway', v: 'Giggal.ai indica per nome 15 email gateway dietro cui verifica. Bounceless no.' },
    { k: 'Crediti gratis', v: 'Bounceless ne dà 1.000 al mese con un indirizzo email aziendale. Giggal.ai ne dà 1.000 una sola volta.' },
  ],
  about: {
    heading: "Che cos'è Bounceless?",
    paragraphs: [
      'Bounceless è un servizio di verifica email di bounceless.io. Verifica liste in blocco e singole email, e offre una API e un server MCP.',
      'Il suo account include anche controlli sullo stato del mittente, sul posizionamento in inbox e sui moduli di iscrizione. Bounceless dichiara di avere più di 39.000 account clienti.',
      'Bounceless non ha ancora integrazioni native con altre app. Offre guide CSV e API per strumenti come Mailchimp, HubSpot e ActiveCampaign.',
    ],
  },
  reasons: {
    heading: "Perché gli utenti cercano un'alternativa a Bounceless",
    items: [
      { k: 'Gateway', v: 'Bounceless non indica per nome secure email gateway come Proofpoint o Mimecast.' },
      { k: 'Integrazioni', v: 'Non ha ancora integrazioni native con altre app, solo guide CSV e API.' },
      { k: 'Prezzo a 10.000', v: '10.000 crediti costano 29 $. Giggal.ai chiede 9,90 $ per la stessa quantità.' },
      { k: 'Email aziendale', v: 'I crediti gratis mensili richiedono un indirizzo email aziendale. Gli indirizzi su domini email pubblici non ne ricevono.' },
    ],
  },
  catchAllHeading: 'Bounceless e Giggal.ai sugli indirizzi catch-all',
  catchAllProse:
    'Bounceless include indicazioni sui catch-all nel suo controllo da 1 credito, e non addebita i risultati non confermati. Anche Giggal.ai restituisce un risultato sugli indirizzi catch-all a 1 credito, e rimborsa il credito sui risultati sconosciuti. La differenza principale sono i secure email gateway. Giggal.ai verifica dietro 15 di essi, tra cui Proofpoint, Mimecast e Barracuda.',
  pricingHeading: 'Prezzi di Bounceless e Giggal.ai a confronto',
  pricingProse:
    'I pacchetti a consumo di Bounceless costano 19 $ per 5.000, 29 $ per 10.000, 159 $ per 100.000 e 579 $ per un milione. I piani mensili partono da 19 $ per 6.500 crediti. I crediti non scadono mai, sia quelli dei pacchetti sia quelli dei piani.',
  pricingExtra: [
    'Giggal.ai vende 10.000 crediti a 9,90 $, 100.000 a 76 $ e un milione a 680 $. Bounceless costa meno a un milione. Giggal.ai costa meno a 10.000 e a 100.000.',
  ],
  strengths: {
    heading: 'Quando Bounceless è una buona scelta',
    intro: 'Bounceless ha punti di forza reali:',
  },
  others: {
    heading: 'Altre alternative a Bounceless',
    intro: 'Questi verificatori hanno prezzi vicini a quelli di Bounceless. I prezzi vengono dal sito di ciascun fornitore, al 27 novembre 2026.',
    items: [
      { name: 'no2bounce', text: '10.000 crediti costano 20 $ e un milione costa 679 $. I crediti non scadono mai.' },
      { name: 'QuickEmailVerification', text: 'Dà 100 crediti gratis ogni giorno. 10.000 crediti permanenti costano 60 $.' },
      { name: 'Mailfloss', text: 'Si collega a 41 piattaforme email e rimuove ogni giorno gli indirizzi non validi. 10.000 crediti prepagati costano 40 $.' },
    ],
  },
  testHeading: 'Verifica la stessa lista con Bounceless e con Giggal.ai',
  testSteps: [
    'Esporta una lista che hai già verificato con Bounceless.',
    'Verificala qui con i 1.000 crediti gratis. Senza carta.',
    'Confronta le righe catch-all con le indicazioni restituite da Bounceless.',
  ],
  ctaHeadline: 'Email catch-all e dietro gateway a 1 credito ciascuna',
  faqs: [
    {
      q: 'Quanto costa Bounceless?',
      a: 'I pacchetti a consumo di Bounceless partono da 19 $ per 5.000 crediti. 10.000 costano 29 $, 100.000 costano 159 $ e un milione costa 579 $. I piani mensili partono da 19 $ per 6.500 crediti.',
    },
    {
      q: 'Bounceless è gratis?',
      a: 'Bounceless dà 1.000 crediti gratis al mese se ti registri con un indirizzo email aziendale. Non serve una carta. Giggal.ai dà 1.000 crediti gratis una sola volta, senza carta.',
    },
    {
      q: 'Bounceless verifica le email catch-all?',
      a: 'Sì. Bounceless include indicazioni sui catch-all nel suo controllo standard da 1 credito, senza costi aggiuntivi. I risultati non confermati non vengono addebitati.',
    },
    {
      q: 'Giggal.ai è una buona alternativa a Bounceless?',
      a: 'Sì, se la tua lista ha molti domini aziendali. Giggal.ai verifica dietro 15 secure email gateway indicati per nome e costa 9,90 $ per 10.000 crediti.',
    },
  ],
  breadcrumb: 'Alternativa a Bounceless',
}

export default cfg
