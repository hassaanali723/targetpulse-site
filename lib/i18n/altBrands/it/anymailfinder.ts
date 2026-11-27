// Italian Anymailfinder alternative page. Translated from
// app/(en)/anymailfinder-alternative (2026-11-27). Numbers come from
// lib/competitorPricing.ts; the competitor's words from lib/i18n/altBrands/it/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'it',
  slug: 'anymailfinder',
  path: '/it/alternativa-a-anymailfinder',
  cluster: 'altAnymailfinder',
  metaTitle: 'Alternativa ad Anymailfinder per la verifica email | Giggal.ai',
  ogTitle: "Un'alternativa ad Anymailfinder per verificare liste di email",
  desc: "Cerchi un'alternativa ad Anymailfinder? Confronta i prezzi di Anymail Finder con Giggal.ai, un verificatore email a consumo a 9,90 $ per 10.000 crediti.",
  h1: ["Un'", 'alternativa ad Anymailfinder', ' per le liste che hai già'],
  heroP:
    'Anymail Finder è fatto per trovare indirizzi email. Il suo verificatore è uno strumento secondario, pagato con un piano mensile. Se hai già la lista e ti serve solo verificarla, Giggal.ai lo fa a 9,90 $ ogni 10.000 email, senza abbonamento.',
  bluf: [
    { k: 'Compito principale', v: 'Anymail Finder trova le email. Giggal.ai verifica le email che hai già.' },
    { k: 'Prezzo', v: 'Una verifica costa 0,2 crediti, con piani da 29 $ al mese. Giggal.ai costa 9,90 $ per 10.000, pagati una volta.' },
    { k: 'Crediti', v: 'I crediti di Anymail Finder scadono se annulli. I crediti Giggal.ai non scadono mai.' },
    { k: 'Sconosciuti', v: 'Anymail Finder addebita ogni verifica. Giggal.ai rimborsa il credito sui risultati sconosciuti.' },
  ],
  about: {
    heading: "Che cos'è Anymail Finder?",
    paragraphs: [
      "Anymail Finder, scritto anche Anymailfinder, è un email finder per le vendite B2B. Gli dai un nome e un'azienda, e restituisce un'email di lavoro verificata. Può cercare anche per dominio, ruolo o URL di LinkedIn.",
      "Ha un'estensione per Chrome, il caricamento in blocco fino a 100.000 righe e una API. Trovare l'email di una persona costa 1 credito, e solo quando trova un'email verificata.",
      'Anymail Finder ha anche un verificatore email per le liste che vengono da altre fonti. Ogni verifica costa 0,2 crediti e viene addebitata ogni volta. Restituisce valido, rischioso o non valido.',
    ],
  },
  reasons: {
    heading: "Perché gli utenti cercano un'alternativa ad Anymailfinder",
    items: [
      { k: 'Piano mensile', v: 'I tuoi crediti restano solo finché resti abbonato. Se annulli, scadono alla fine del periodo di fatturazione.' },
      { k: 'Per verifica', v: 'Il verificatore addebita 0,2 crediti per ogni verifica, anche per gli indirizzi che non riesce a confermare.' },
      { k: 'Carta per la prova', v: 'La prova di 7 giorni chiede una carta. Giggal.ai dà 1.000 crediti gratis senza carta.' },
      { k: 'Gateway', v: 'Anymail Finder non dichiara il supporto per i secure email gateway come Proofpoint o Mimecast.' },
    ],
  },
  catchAllHeading: 'Come Anymail Finder e Giggal.ai gestiscono le email catch-all',
  catchAllProse:
    'Anymail Finder dice di verificare come valida o non valida la maggior parte degli indirizzi catch-all. I pochi che non riesce a raggiungere restano rischiosi. Anche Giggal.ai restituisce un risultato sugli indirizzi catch-all, a 1 credito ciascuno. In più verifica dietro 15 secure email gateway indicati per nome. Quando Giggal.ai non ottiene una risposta, il risultato è sconosciuto e il credito ti viene restituito.',
  pricingHeading: 'Prezzi di Anymail Finder per la verifica email',
  pricingProse:
    'Anymail Finder vende piani mensili da 29 $ per 400 crediti fino a 799 $ per 100.000 crediti. Con la fatturazione annuale risparmi il 33%. Una verifica costa 0,2 crediti, quindi 10.000 verifiche usano 2.000 crediti.',
  pricingExtra: [
    'Così 10.000 verifiche al mese rientrano nel piano da 89 $, e 100.000 verifiche nel piano da 299 $. I crediti non usati passano al mese successivo finché resti abbonato. Giggal.ai vende 10.000 crediti a 9,90 $ e 100.000 a 76 $, pagati una volta e senza scadenza.',
  ],
  strengths: {
    heading: 'Quando Anymail Finder è la scelta migliore',
    intro: 'Anymail Finder fa cose che Giggal.ai non fa. Sceglilo per queste esigenze:',
  },
  others: {
    heading: 'Altre alternative ad Anymailfinder',
    intro: 'Questi strumenti trovano le email, le verificano o fanno entrambe le cose. I prezzi vengono dal sito di ciascun fornitore, al 27 novembre 2026.',
    items: [
      { name: 'Findymail', text: "Trova e verifica le email, con un'estensione per Chrome per LinkedIn e Sales Navigator. Starter costa 99 $ al mese per 5.000 crediti finder e 5.000 crediti verifier." },
      { name: 'LeadMagic', text: 'Una piattaforma di dati B2B con ricerca email, numeri di cellulare e validazione. La validazione costa 0,25 crediti per risultato definitivo, con piani da 99 $ al mese.' },
      { name: 'Scrubby', text: "Un verificatore per indirizzi catch-all e protetti da gateway. I crediti a consumo costano 0,008 $ l'uno e non scadono mai." },
    ],
  },
  testHeading: 'Verifica un export di Anymail Finder con Giggal.ai',
  testSteps: [
    'Esporta una lista che hai già verificato con Anymail Finder.',
    'Verificala qui con i 1.000 crediti gratis. Senza carta.',
    'Confronta le righe che Anymail Finder ha segnato come rischiose con i risultati di Giggal.ai.',
  ],
  ctaHeadline: 'Verifica le email che hai già trovato',
  faqs: [
    {
      q: 'Qual è la migliore alternativa ad Anymailfinder?',
      a: 'Dipende dal compito. Per trovare le email, guarda Findymail o LeadMagic. Per verificare una lista che hai già, Giggal.ai costa 9,90 $ per 10.000 crediti, senza abbonamento e con crediti che non scadono mai.',
    },
    {
      q: 'Quanto costa Anymail Finder?',
      a: "I piani mensili vanno da 29 $ per 400 crediti a 799 $ per 100.000 crediti. Con la fatturazione annuale risparmi il 33%. Verificare un'email presa da un'altra fonte costa 0,2 crediti.",
    },
    {
      q: 'Anymail Finder ha una prova gratuita?',
      a: 'Sì. Ha una prova di 7 giorni con 100 crediti. Aggiungi una carta, che viene controllata ma non addebitata. Giggal.ai dà 1.000 crediti gratis senza carta.',
    },
    {
      q: 'Giggal.ai può trovare indirizzi email come Anymail Finder?',
      a: 'No. Giggal.ai verifica solo gli indirizzi che hai già. Usa prima un email finder, poi verifica la lista con Giggal.ai prima di inviare.',
    },
    {
      q: 'I crediti di Anymail Finder scadono?',
      a: 'Passano al mese successivo senza limite finché il piano è attivo. Se annulli, scadono alla fine del periodo di fatturazione. I crediti Giggal.ai non scadono mai.',
    },
  ],
  breadcrumb: 'Alternativa ad Anymailfinder',
}

export default cfg
