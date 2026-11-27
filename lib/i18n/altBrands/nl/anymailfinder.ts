// Dutch Anymail Finder alternative page. Translated from
// app/(en)/anymailfinder-alternative (2026-11-27). "Anymailfinder" as one word
// in the title, H1 and keyword H2s; "Anymail Finder" in body text, as in English.
// The competitor's words (free tier, expiry, strengths) are in
// lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'anymailfinder',
  path: '/nl/anymailfinder-alternatief',
  cluster: 'altAnymailfinder',
  metaTitle: 'Anymailfinder-alternatief voor e-mailverificatie | Giggal.ai',
  ogTitle: 'Een Anymailfinder-alternatief om e-maillijsten te controleren',
  desc: 'Zoek je een Anymailfinder-alternatief? Vergelijk de prijzen van Anymail Finder met Giggal.ai: betalen per gebruik, US$ 9,90 per 10.000 credits.',
  h1: ['Een ', 'Anymailfinder-alternatief', ' voor lijsten die je al hebt'],
  heroP:
    'Anymail Finder is gebouwd om e-mailadressen te vinden. De verificatietool is een extra functie, betaald uit een maandabonnement. Heb je je lijst al en wil je die alleen verifiëren, dan doet Giggal.ai dat voor US$ 9,90 per 10.000 e-mailadressen, zonder abonnement.',
  bluf: [
    { k: 'Hoofdtaak', v: 'Anymail Finder vindt e-mailadressen. Giggal.ai verifieert e-mailadressen die je al hebt.' },
    { k: 'Prijs', v: 'Een controle met de verificatietool kost 0,2 credit, bij plannen vanaf US$ 29 per maand. Giggal.ai kost US$ 9,90 voor 10.000, eenmalig gekocht.' },
    { k: 'Credits', v: 'Credits van Anymail Finder verlopen als je opzegt. Credits van Giggal.ai verlopen nooit.' },
    { k: 'Onbekend', v: 'Anymail Finder rekent elke controle af. Giggal.ai betaalt de credit terug bij onbekende resultaten.' },
  ],
  about: {
    heading: 'Wat is Anymail Finder?',
    paragraphs: [
      'Anymail Finder, ook geschreven als Anymailfinder, is een e-mailfinder voor B2B-sales. Je geeft een naam en een bedrijf op, en het geeft een geverifieerd zakelijk e-mailadres terug. Het kan ook zoeken op domein, functietitel of LinkedIn-URL.',
      'Het heeft een Chrome-extensie, een bulkupload voor maximaal 100.000 rijen en een API. Het e-mailadres van een persoon vinden kost 1 credit, en alleen als er een geverifieerd e-mailadres wordt gevonden.',
      'Anymail Finder heeft ook een verificatietool voor lijsten uit andere bronnen. Elke controle kost 0,2 credit en wordt elke keer afgerekend. De tool geeft geldig, riskant of ongeldig terug.',
    ],
  },
  reasons: {
    heading: 'Waarom mensen een Anymailfinder-alternatief zoeken',
    items: [
      { k: 'Maandplan', v: 'Je credits blijven alleen zolang je abonnement loopt. Zeg je op, dan verlopen ze aan het eind van de factuurperiode.' },
      { k: 'Per controle', v: 'De verificatietool rekent 0,2 credit voor elke controle, ook voor adressen die hij niet kan bevestigen.' },
      { k: 'Creditcard voor de proefperiode', v: 'De proefperiode van 7 dagen vraagt om een creditcard. Giggal.ai geeft 1.000 gratis credits zonder creditcard.' },
      { k: 'Gateways', v: 'Anymail Finder publiceert geen ondersteuning voor secure email gateways zoals Proofpoint of Mimecast.' },
    ],
  },
  catchAllHeading: 'Hoe Anymail Finder en Giggal.ai catch-all-adressen behandelen',
  catchAllProse:
    'Anymail Finder zegt dat het de meeste catch-all-adressen als geldig of ongeldig verifieert. De paar adressen die het niet kan bereiken, blijven riskant. Giggal.ai geeft ook een resultaat voor catch-all-adressen, voor 1 credit per adres, en controleert daarnaast achter 15 bij naam genoemde secure email gateways. Als Giggal.ai geen antwoord krijgt, is het resultaat onbekend en krijg je de credit terug.',
  pricingHeading: 'Prijzen van Anymail Finder voor e-mailverificatie',
  pricingProse:
    'Anymail Finder verkoopt maandplannen van US$ 29 voor 400 credits tot US$ 799 voor 100.000 credits. Bij jaarbetaling bespaar je 33%. Een controle met de verificatietool kost 0,2 credit, dus 10.000 controles gebruiken 2.000 credits.',
  pricingExtra: [
    'Daarmee vallen 10.000 controles per maand in het plan van US$ 89, en 100.000 controles in het plan van US$ 299. Ongebruikte credits schuiven door zolang je abonnement loopt. Giggal.ai verkoopt 10.000 credits voor US$ 9,90 en 100.000 voor US$ 76, eenmalig en zonder vervaldatum.',
  ],
  strengths: {
    heading: 'Wanneer Anymail Finder de betere keuze is',
    intro: 'Anymail Finder doet dingen die Giggal.ai niet doet. Kies Anymail Finder als je dit nodig hebt:',
  },
  others: {
    heading: 'Andere Anymailfinder-alternatieven',
    intro: 'Deze tools vinden e-mailadressen, verifiëren ze, of allebei. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'Findymail', text: 'Vindt en verifieert e-mailadressen, met een Chrome-extensie voor LinkedIn en Sales Navigator. Starter kost US$ 99 per maand voor 5.000 finder-credits en 5.000 verifier-credits.' },
      { name: 'LeadMagic', text: 'Een B2B-dataplatform dat e-mailadressen en mobiele nummers vindt en e-mailadressen valideert. Validatie kost 0,25 credit per eenduidig resultaat, in plannen vanaf US$ 99 per maand.' },
      { name: 'Scrubby', text: 'Een verificatietool voor catch-all-adressen en adressen achter een gateway. Credits voor betalen per gebruik kosten US$ 0,008 per stuk en verlopen nooit.' },
    ],
  },
  testHeading: 'Controleer een export van Anymail Finder met Giggal.ai',
  testSteps: [
    'Exporteer een lijst die je al met Anymail Finder hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de regels die Anymail Finder als riskant markeerde met de resultaten van Giggal.ai.',
  ],
  ctaHeadline: 'Verifieer de e-mailadressen die je al hebt gevonden',
  faqs: [
    {
      q: 'Wat is het beste Anymailfinder-alternatief?',
      a: 'Dat hangt af van de taak. Wil je e-mailadressen vinden, kijk dan naar Findymail of LeadMagic. Wil je een lijst verifiëren die je al hebt, dan kost Giggal.ai US$ 9,90 per 10.000 credits, zonder abonnement en met credits die nooit verlopen.',
    },
    {
      q: 'Wat kost Anymail Finder?',
      a: 'Maandplannen lopen van US$ 29 voor 400 credits tot US$ 799 voor 100.000 credits. Bij jaarbetaling bespaar je 33%. Een e-mailadres uit een andere bron verifiëren kost 0,2 credit.',
    },
    {
      q: 'Heeft Anymail Finder een gratis proefperiode?',
      a: 'Ja. Er is een proefperiode van 7 dagen met 100 credits. Je voegt een creditcard toe, die wordt gecontroleerd, maar er wordt niets afgeschreven. Giggal.ai geeft 1.000 gratis credits zonder creditcard.',
    },
    {
      q: 'Kan Giggal.ai e-mailadressen vinden zoals Anymail Finder?',
      a: 'Nee. Giggal.ai verifieert alleen adressen die je al hebt. Gebruik eerst een e-mailfinder en verifieer de lijst daarna met Giggal.ai, voordat je verstuurt.',
    },
    {
      q: 'Verlopen de credits van Anymail Finder?',
      a: 'Ze schuiven zonder limiet door zolang je plan actief is. Zeg je op, dan verlopen ze aan het eind van de factuurperiode. Credits van Giggal.ai verlopen nooit.',
    },
  ],
  breadcrumb: 'Anymail Finder-alternatief',
}

export default cfg
