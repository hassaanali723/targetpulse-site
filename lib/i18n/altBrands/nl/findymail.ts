// Dutch Findymail alternative page. Translated from
// app/(en)/findymail-alternative (2026-11-27). The competitor's words (free
// tier, expiry, strengths) are in lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'findymail',
  path: '/nl/findymail-alternatief',
  cluster: 'altFindymail',
  metaTitle: 'Findymail-alternatieven en prijzen van Findymail | Giggal.ai',
  ogTitle: 'Findymail-alternatieven en prijzen vergeleken',
  desc: 'Findymail begint bij US$ 99 per maand. Vergelijk Findymail-alternatieven en concurrenten, zoals Giggal.ai, een verificatietool voor US$ 9,90 per 10.000 credits.',
  h1: ['Een ', 'Findymail-alternatief', ' om e-mailadressen te verifiëren die je al hebt'],
  heroP:
    'Findymail vindt B2B-e-mailadressen en verifieert ze. De plannen beginnen bij US$ 99 per maand. Heb je al een lijst en hoef je die alleen te verifiëren, dan doet Giggal.ai dat voor US$ 9,90 per 10.000 e-mailadressen. Je koopt credits één keer, en ze verlopen nooit.',
  bluf: [
    { k: 'Hoofdtaak', v: 'Findymail vindt e-mailadressen en verifieert ze daarna. Giggal.ai verifieert alleen.' },
    { k: 'Prijs', v: 'Findymail begint bij US$ 99 per maand. Giggal.ai kost US$ 9,90 voor 10.000 credits, eenmalig gekocht.' },
    { k: 'Gratis credits', v: 'Findymail geeft 10 gratis credits. Giggal.ai geeft er 1.000, zonder creditcard.' },
    { k: 'Garantie', v: 'Findymail belooft een bouncepercentage onder 5%, en betaalt credits terug als het hoger is.' },
  ],
  about: {
    heading: 'Wat is Findymail?',
    paragraphs: [
      'Findymail is een B2B-e-mailfinder. Het vindt zakelijke e-mailadressen op basis van een naam en bedrijf, een LinkedIn-URL of een zoekopdracht in Sales Navigator. Elk e-mailadres dat het vindt, wordt geverifieerd voordat je het krijgt.',
      'Het heeft een Chrome-extensie, een add-on voor Google Sheets, een bulkupload, een API en een tool om telefoonnummers te vinden. Het heeft onder andere koppelingen met Clay, HubSpot, Salesforce, Pipedrive, Instantly, Smartlead en Lemlist.',
      'Findymail verkoopt ook verifier-credits voor lijsten uit andere bronnen. Het zegt dat het catch-all-adressen verifieert die andere tools als riskant markeren.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Prijzen van Findymail in 2026',
  pricingProse:
    'Findymail heeft twee soorten plannen. De plannen op basis van gebruik zijn Individual voor US$ 99 per maand, Pro voor US$ 249, Team voor US$ 399 en Scale voor US$ 999. Ze noemen het aantal gebruikers en de bestandsgrootte, geen aantal credits.',
  pricingExtra: [
    'Het Starter-plan met credits kost US$ 99 per maand. Het bevat 5.000 finder-credits en 5.000 verifier-credits. Grotere volumes vallen onder Enterprise, met een prijs op aanvraag. Ongebruikte credits schuiven door, tot twee keer het maandtegoed.',
    'Giggal.ai heeft geen maandplan. 10.000 credits kosten US$ 9,90, 100.000 kosten US$ 76 en een miljoen kost US$ 680.',
  ],
  reasons: {
    heading: 'Waarom teams een Findymail-alternatief zoeken',
    items: [
      { k: 'Alleen verifiëren', v: 'Veel teams hebben al een lijst. Ze hebben geen e-mailfinder nodig, alleen een verificatietool.' },
      { k: 'Volume', v: 'Starter bevat 5.000 verifier-credits per maand. Voor grotere volumes heb je een offerte voor Enterprise nodig.' },
      { k: 'Maandelijkse rekening', v: 'Findymail factureert elke maand. Credits van Giggal.ai koop je één keer en ze verlopen nooit.' },
      { k: 'Kleine proef', v: 'Findymail geeft 10 gratis credits. Dat is te weinig om een echte lijst te testen.' },
    ],
  },
  catchAllHeading: 'Findymail vs Giggal.ai bij catch-all-adressen',
  catchAllProse:
    'Findymail verifieert catch-all-adressen die andere tools als riskant markeren. Giggal.ai geeft ook een resultaat voor catch-all-adressen, voor 1 credit per adres. Het controleert ook adressen achter 15 bij naam genoemde secure email gateways, zoals Proofpoint, Mimecast en Barracuda. Findymail publiceert geen ondersteuning voor gateways.',
  strengths: {
    heading: 'Wat Findymail goed doet',
    intro: 'Findymail is de betere keuze als je dit nodig hebt:',
  },
  others: {
    heading: 'Andere Findymail-alternatieven en concurrenten',
    intro: 'Deze tools vinden of verifiëren ook B2B-e-mailadressen. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'Anymail Finder', text: 'Een e-mailfinder met plannen vanaf US$ 29 per maand voor 400 credits. Het belooft dat minstens 97% van de e-mailadressen die het vindt geen hard bounce geeft.' },
      { name: 'LeadMagic', text: 'Een B2B-dataplatform dat e-mailadressen, mobiele nummers en bedrijfsgegevens vindt. De plannen beginnen bij US$ 99 per maand voor 5.000 gedeelde credits.' },
      { name: 'Allegrow', text: 'Een verificatietool voor salesteams die ook inbox placement en de status van je domein volgt. Starter kost US$ 99 per maand voor 5.000 contacten.' },
    ],
  },
  testHeading: 'Verifieer een export van Findymail met Giggal.ai',
  testSteps: [
    'Exporteer een lijst die je al met Findymail hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de catch-all-regels met wat Findymail voor dezelfde contacten teruggaf.',
  ],
  ctaHeadline: 'Verifieer je lijst zonder abonnement',
  faqs: [
    {
      q: 'Wat kost Findymail?',
      a: 'De plannen van Findymail beginnen bij US$ 99 per maand. Het Starter-plan met credits bevat 5.000 finder-credits en 5.000 verifier-credits. Plannen op basis van gebruik lopen van US$ 99 tot US$ 999 per maand. Grotere volumes hebben een prijs op aanvraag.',
    },
    {
      q: 'Heeft Findymail een gratis plan?',
      a: 'Findymail geeft 10 gratis credits om te testen, zonder creditcard. Er is geen blijvend gratis plan. Giggal.ai geeft 1.000 gratis credits zonder creditcard.',
    },
    {
      q: 'Wat zijn de beste Findymail-alternatieven?',
      a: 'Om e-mailadressen te vinden, zijn Anymail Finder en LeadMagic veelgebruikte opties. Wil je een lijst verifiëren die je al hebt, dan kost Giggal.ai US$ 9,90 per 10.000 credits, zonder abonnement.',
    },
    {
      q: 'Is Findymail goed voor e-mailverificatie?',
      a: 'Ja. Findymail verifieert elk e-mailadres dat het vindt en belooft een bouncepercentage onder 5%. Starter heeft 5.000 verifier-credits per maand. Voor grote lijsten heb je dus een Enterprise-plan of een andere verificatietool nodig.',
    },
    {
      q: 'Kan Giggal.ai e-mailadressen vinden zoals Findymail?',
      a: 'Nee. Giggal.ai verifieert alleen. Zoek eerst de e-mailadressen en controleer de lijst daarna met Giggal.ai, voordat je verstuurt.',
    },
    {
      q: 'Verlopen de credits van Findymail?',
      a: 'Ongebruikte credits schuiven van maand tot maand door, tot twee keer je maandtegoed. Credits van Giggal.ai verlopen nooit.',
    },
  ],
  breadcrumb: 'Findymail-alternatief',
}

export default cfg
