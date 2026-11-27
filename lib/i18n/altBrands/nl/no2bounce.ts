// Dutch no2bounce alternative page. Translated from app/(en)/no2bounce-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) live in
// lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'no2bounce',
  path: '/nl/no2bounce-alternatief',
  cluster: 'altNo2bounce',
  metaTitle: 'no2bounce-alternatief: prijzen en catch-all | Giggal.ai',
  ogTitle: 'Een no2bounce-alternatief voor catch-all-e-mailverificatie',
  desc: 'no2bounce vraagt US$ 20 per 10.000. Giggal.ai controleert catch-all- en gateway-adressen voor US$ 9,90 per 10.000, met 1.000 gratis credits zonder creditcard.',
  h1: ['Een ', 'no2bounce-alternatief', ' met een lagere prijs per e-mailadres'],
  heroP:
    'no2bounce is een e-mailverificatietool met credits voor betalen per gebruik die nooit verlopen. Giggal.ai werkt op dezelfde manier. De verschillen zitten in de prijs, de gratis credits en hoe elke tool catch-all-adressen controleert.',
  bluf: [
    { k: 'Prijs', v: '10.000 credits kosten US$ 20 bij no2bounce en US$ 9,90 bij Giggal.ai.' },
    { k: 'Bij groot volume', v: 'Een miljoen credits kost US$ 679 bij no2bounce en US$ 680 bij Giggal.ai.' },
    { k: 'Gratis credits', v: 'no2bounce geeft 100 gratis credits. Giggal.ai geeft er 1.000. Bij geen van beide heb je een creditcard nodig.' },
    { k: 'Geldigheid', v: 'Bij beide tools verlopen de credits nooit.' },
  ],
  about: {
    heading: 'Wat is no2bounce?',
    paragraphs: [
      'no2bounce is een dienst voor e-mailverificatie. Het controleert losse e-mailadressen, bulklijsten en e-mailadressen die via de API binnenkomen. Met dezelfde credits betaal je ook de e-mailfinder, de zoekfunctie per domein en de e-mailscoring.',
      'Voor catch-all-domeinen stuurt no2bounce gecontroleerde testberichten om te bevestigen of een mailbox bestaat. Het claimt 99,6% nauwkeurigheid.',
      'Het heeft onder meer koppelingen met HubSpot, Salesforce, Clay, Zapier, Google Sheets en Zoho CRM.',
    ],
  },
  reasons: {
    heading: 'Waarom mensen een no2bounce-alternatief zoeken',
    items: [
      { k: 'Prijs bij 10.000', v: 'no2bounce vraagt US$ 20 voor 10.000 credits. Giggal.ai vraagt US$ 9,90 voor hetzelfde aantal.' },
      { k: 'Bij 100.000', v: '100.000 credits kosten US$ 149 bij no2bounce en US$ 76 bij Giggal.ai.' },
      { k: 'Gratis test', v: 'no2bounce geeft 100 gratis credits. Giggal.ai geeft er 1.000. Dat is genoeg om een echte steekproef te testen.' },
    ],
  },
  catchAllHeading: 'Hoe no2bounce en Giggal.ai catch-all-adressen controleren',
  catchAllProse:
    'no2bounce stuurt gecontroleerde testberichten via de eigen servers om catch-all-mailboxen te bevestigen. Giggal.ai geeft een resultaat voor catch-all-adressen, voor 1 credit per adres, zonder aparte toeslag. Het controleert ook adressen achter 15 bij naam genoemde secure email gateways, waaronder Proofpoint, Mimecast en Barracuda.',
  pricingHeading: 'Prijzen van no2bounce en Giggal.ai vergeleken',
  pricingProse:
    'no2bounce verkoopt pakketten voor betalen per gebruik, van 10.000 credits voor US$ 20 tot 50 miljoen credits. 100.000 kosten US$ 149 en een miljoen kost US$ 679. Maandabonnementen zijn 15% goedkoper en jaarabonnementen 20% goedkoper.',
  pricingExtra: [
    'Giggal.ai verkoopt 10.000 credits voor US$ 9,90, 100.000 voor US$ 76 en een miljoen voor US$ 680. Je hoeft geen plan te kiezen. Bij beide tools verlopen de credits nooit.',
  ],
  strengths: {
    heading: 'Wanneer no2bounce goed past',
    intro: 'no2bounce is een redelijke keuze als je dit nodig hebt:',
  },
  others: {
    heading: 'Andere no2bounce-alternatieven',
    intro: 'Deze verificatietools verkopen ook credits die nooit verlopen. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'Bounceless', text: '10.000 credits kosten US$ 29 en een miljoen kost US$ 579. Met een zakelijk e-mailadres krijg je 1.000 gratis credits per maand.' },
      { name: 'QuickEmailVerification', text: '10.000 credits kosten US$ 60. Je krijgt elke dag 100 gratis credits.' },
      { name: 'Scrubby', text: 'Betalen per gebruik kost US$ 0,008 per credit. Voor moeilijke adressen is er een optie Deep Verification.' },
    ],
  },
  testHeading: 'Vergelijk no2bounce en Giggal.ai op één lijst',
  testSteps: [
    'Exporteer een lijst die je al met no2bounce hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de catch-all-regels met wat no2bounce teruggaf.',
  ],
  ctaHeadline: 'Hetzelfde werk voor een lagere prijs per e-mailadres',
  faqs: [
    {
      q: 'Wat kost no2bounce?',
      a: 'De pakketten voor betalen per gebruik van no2bounce beginnen bij US$ 20 voor 10.000 credits. 100.000 kosten US$ 149 en een miljoen kost US$ 679. Maandabonnementen zijn 15% goedkoper en jaarabonnementen 20% goedkoper.',
    },
    {
      q: 'Is no2bounce gratis?',
      a: 'no2bounce geeft 100 gratis credits zonder creditcard, en die verlopen nooit. Daarna koop je credits. Giggal.ai geeft 1.000 gratis credits zonder creditcard.',
    },
    {
      q: 'Is Giggal.ai een goed no2bounce-alternatief?',
      a: 'Ja. Beide verkopen credits die nooit verlopen. Giggal.ai is goedkoper bij 10.000 en 100.000 credits en geeft tien keer zoveel gratis credits. Bij een miljoen credits zijn de twee prijzen bijna gelijk.',
    },
    {
      q: 'Verlopen de credits van no2bounce?',
      a: 'Nee. Gekochte credits van no2bounce blijven in je account tot je ze gebruikt. Credits uit een abonnement blijven geldig zolang het abonnement actief is. Credits van Giggal.ai verlopen nooit.',
    },
  ],
  breadcrumb: 'no2bounce-alternatief',
}

export default cfg
