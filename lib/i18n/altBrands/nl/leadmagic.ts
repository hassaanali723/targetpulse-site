// Dutch LeadMagic alternative page. Translated from app/(en)/leadmagic-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'leadmagic',
  path: '/nl/leadmagic-alternatief',
  cluster: 'altLeadmagic',
  metaTitle: 'LeadMagic-alternatief en prijzen van LeadMagic | Giggal.ai',
  ogTitle: 'Een LeadMagic-alternatief alleen voor e-mailverificatie',
  desc: 'LeadMagic begint bij US$ 99 per maand voor 5.000 gedeelde credits. Vergelijk met Giggal.ai, een verifier voor US$ 9,90 per 10.000 credits die nooit verlopen.',
  h1: ['Een ', 'LeadMagic-alternatief', ' alleen voor e-mailverificatie'],
  heroP:
    'LeadMagic is een B2B-dataplatform. E-mailvalidatie is een van de producten. Het gebruikt dezelfde maandelijkse credits als de andere producten. Wil je alleen e-maillijsten verifiëren, dan doet Giggal.ai precies die ene taak. Het kost US$ 9,90 per 10.000 e-mailadressen, eenmalig gekocht.',
  bluf: [
    { k: 'Wat het is', v: 'LeadMagic verkoopt contact- en bedrijfsgegevens. Giggal.ai controleert alleen e-mailadressen.' },
    { k: 'Prijs', v: 'LeadMagic begint bij US$ 99 per maand. Giggal.ai kost US$ 9,90 voor 10.000 credits, eenmalig gekocht.' },
    { k: 'Gratis credits', v: 'LeadMagic geeft geen gratis credits. Giggal.ai geeft er 1.000, zonder creditcard.' },
    { k: 'Catch-all', v: 'Beide geven een resultaat voor catch-all-adressen. Giggal.ai controleert ook achter 15 bij naam genoemde e-mailgateways.' },
  ],
  about: {
    heading: 'Wat is LeadMagic?',
    paragraphs: [
      'LeadMagic is een B2B-dataplatform voor salesteams. Het vindt zakelijke e-mailadressen en mobiele nummers, en het voegt bedrijfsgegevens toe aan contacten. Het volgt ook functiewisselingen en advertentieactiviteit.',
      'E-mailvalidatie is één product binnen LeadMagic. Het geeft geldig, ongeldig of onbekend terug. Een eenduidig resultaat kost 0,25 credit, en een onbekend resultaat is gratis. Catch-all-validatie is een apart product dat dezelfde credits gebruikt.',
      'Teams gebruiken LeadMagic via de webapp, een REST API, een CLI of een MCP-server. Het heeft koppelingen met tools zoals Clay, Apollo, Smartlead, Instantly, Salesforce, Zapier en Make.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Prijzen van LeadMagic in 2026',
  pricingProse:
    'LeadMagic is een maandabonnement. Essential kost US$ 99 voor 5.000 credits. Growth kost US$ 249 voor 20.000, Professional US$ 499 voor 50.000 en Ultimate US$ 849 voor 100.000. Elk product gebruikt dezelfde credits.',
  pricingExtra: [
    'Bij 0,25 credit per validatie is het plan van US$ 99 genoeg voor 20.000 controles per maand. Voor 100.000 controles per maand heb je Professional nodig, voor US$ 499. Bij jaarbetaling krijg je twee maanden gratis. Ongebruikte maandcredits schuiven door, tot twee keer het maandtegoed.',
    'Giggal.ai heeft geen abonnement. 10.000 credits kosten US$ 9,90, 100.000 kosten US$ 76 en een miljoen kost US$ 680. De credits verlopen nooit.',
  ],
  reasons: {
    heading: 'Waarom teams een LeadMagic-alternatief zoeken',
    items: [
      { k: 'Maandelijkse rekening', v: 'LeadMagic factureert elke maand, ook in maanden waarin je niets controleert. Credits van Giggal.ai koop je één keer.' },
      { k: 'Gedeelde credits', v: 'Validatie en verrijking gebruiken dezelfde credits. Schoon je een grote lijst op, dan houd je minder credits over om contacten te vinden.' },
      { k: 'Geen gratis test', v: 'LeadMagic geeft geen gratis credits. Je betaalt voordat je het op je eigen lijst kunt testen.' },
      { k: 'Gateways', v: 'LeadMagic publiceert geen ondersteuning voor secure email gateways zoals Proofpoint of Mimecast.' },
    ],
  },
  catchAllHeading: 'LeadMagic vs Giggal.ai bij catch-all-adressen',
  catchAllProse:
    'LeadMagic geeft op catch-all-domeinen geldig, ongeldig of onbekend terug, en rekent een onbekend resultaat niet af. Giggal.ai geeft ook een resultaat voor catch-all-adressen, voor 1 credit per adres. Het controleert ook adressen achter 15 secure email gateways, zoals Proofpoint, Mimecast en Barracuda. Deze gateways accepteren eerst elk adres. Een eenvoudige controle kan daardoor een echt adres niet van een nepadres onderscheiden.',
  strengths: {
    heading: 'Wat LeadMagic goed doet',
    intro: 'LeadMagic is de betere keuze als je dit nodig hebt:',
  },
  others: {
    heading: 'Andere LeadMagic-alternatieven',
    intro: 'Heb je zoeken en verifiëren in één tool nodig, dan zijn dit andere opties. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'Findymail', text: 'Een e-mailfinder die ook verifieert. Het Starter-plan kost US$ 99 per maand voor 5.000 finder-credits en 5.000 verifier-credits. Findymail belooft een bouncepercentage onder 5%.' },
      { name: 'Anymail Finder', text: 'Een e-mailfinder met een aparte verificatietool. Een controle met die tool kost 0,2 credit, en de plannen beginnen bij US$ 29 per maand voor 400 credits.' },
      { name: 'no2bounce', text: 'Een verificatietool met credits voor betalen per gebruik die nooit verlopen. 10.000 credits kosten US$ 20.' },
    ],
  },
  testHeading: 'Test Giggal.ai op een lijst die LeadMagic al heeft gecontroleerd',
  testSteps: [
    'Exporteer een lijst die je al met LeadMagic hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de catch-all-regels met wat LeadMagic voor dezelfde adressen teruggaf.',
  ],
  ctaHeadline: 'Controleer je lijst zonder maandabonnement',
  faqs: [
    {
      q: 'Wat kost LeadMagic?',
      a: 'LeadMagic begint bij US$ 99 per maand voor 5.000 credits. De plannen gaan tot US$ 849 per maand voor 100.000 credits. E-mailvalidatie kost 0,25 credit per eenduidig resultaat. Het plan van US$ 99 is dus genoeg voor 20.000 controles.',
    },
    {
      q: 'Heeft LeadMagic een gratis plan?',
      a: 'Nee. LeadMagic zegt dat er geen gratis credits zijn. De zoekfunctie heeft een proefperiode van 14 dagen. Giggal.ai geeft 1.000 gratis credits zonder creditcard, te gebruiken bij een bulkupload.',
    },
    {
      q: 'Is Giggal.ai een goed LeadMagic-alternatief?',
      a: 'Ja, als je alleen e-mailverificatie nodig hebt. Giggal.ai verifieert lijsten, geeft een resultaat voor catch-all-adressen en kost US$ 9,90 per 10.000. Het vindt geen e-mailadressen of telefoonnummers. Het vervangt de dataproducten van LeadMagic dus niet.',
    },
    {
      q: 'Rekent LeadMagic onbekende resultaten af?',
      a: 'Nee. LeadMagic rekent 0,25 credit voor een eenduidig resultaat en niets voor een onbekend resultaat. Giggal.ai betaalt de credit ook terug als een resultaat onbekend is.',
    },
    {
      q: 'Is LeadMagic de moeite waard voor alleen e-mailverificatie?',
      a: 'Het is de moeite waard als je de dataproducten elke maand gebruikt. Voor alleen verificatie betaal je minstens US$ 99 per maand. Giggal.ai verkoopt 10.000 controles voor US$ 9,90, eenmalig.',
    },
    {
      q: 'Is de catch-all-test van LeadMagic neutraal?',
      a: 'Nee. LeadMagic publiceerde hem in februari 2026 en zette zichzelf op de eerste plaats. Lees het als een test van een leverancier. Giggal.ai zat niet bij de tools in die test.',
    },
  ],
  breadcrumb: 'LeadMagic-alternatief',
}

export default cfg
