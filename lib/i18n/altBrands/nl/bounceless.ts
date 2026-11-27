// Dutch Bounceless alternative page. Translated from app/(en)/bounceless-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) live in
// lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'bounceless',
  path: '/nl/bounceless-alternatief',
  cluster: 'altBounceless',
  metaTitle: 'Bounceless-alternatief: prijzen van Bounceless.io | Giggal.ai',
  ogTitle: 'Een Bounceless-alternatief met verificatie achter gateways',
  desc: 'Bounceless kost US$ 29 per 10.000 credits. Giggal.ai kost US$ 9,90, controleert catch-all-adressen en adressen achter een SEG, en de credits verlopen nooit.',
  h1: ['Een ', 'Bounceless-alternatief', ' dat ook e-mailadressen achter een gateway controleert'],
  heroP:
    'Bounceless is een goedkope e-mailverificatietool met eenmalige pakketten en maandplannen. De standaardcontrole bevat nu ook gegevens over catch-all. Giggal.ai geeft ook een resultaat voor catch-all-adressen en controleert achter 15 bij naam genoemde secure email gateways.',
  bluf: [
    { k: 'Prijs', v: '10.000 credits kosten US$ 29 bij Bounceless en US$ 9,90 bij Giggal.ai.' },
    { k: 'Bij groot volume', v: 'Een miljoen credits kost US$ 579 bij Bounceless en US$ 680 bij Giggal.ai.' },
    { k: 'Gateways', v: 'Giggal.ai noemt 15 e-mailgateways waarachter het controleert. Bounceless doet dat niet.' },
    { k: 'Gratis credits', v: 'Bounceless geeft er 1.000 per maand met een zakelijk e-mailadres. Giggal.ai geeft eenmalig 1.000.' },
  ],
  about: {
    heading: 'Wat is Bounceless?',
    paragraphs: [
      'Bounceless is een dienst voor e-mailverificatie van bounceless.io. Het controleert bulklijsten en losse e-mailadressen, en het biedt een API en een MCP-server.',
      'Het account bevat ook controles voor de status van de afzender, inbox placement en aanmeldformulieren. Bounceless zegt dat het meer dan 39.000 klantaccounts heeft.',
      'Bounceless heeft nog geen native koppelingen met apps. Het biedt handleidingen voor CSV en API voor tools zoals Mailchimp, HubSpot en ActiveCampaign.',
    ],
  },
  reasons: {
    heading: 'Waarom mensen een Bounceless-alternatief zoeken',
    items: [
      { k: 'Gateways', v: 'Bounceless noemt geen secure email gateways zoals Proofpoint of Mimecast.' },
      { k: 'Koppelingen', v: 'Het heeft nog geen native koppelingen met apps, alleen handleidingen voor CSV en API.' },
      { k: 'Prijs bij 10.000', v: '10.000 credits kosten US$ 29. Giggal.ai vraagt US$ 9,90 voor hetzelfde aantal.' },
      { k: 'Zakelijk e-mailadres', v: 'Voor de gratis credits per maand heb je een zakelijk e-mailadres nodig. Met een openbaar e-mailadres krijg je er geen.' },
    ],
  },
  catchAllHeading: 'Bounceless vs Giggal.ai bij catch-all-adressen',
  catchAllProse:
    'Bounceless neemt gegevens over catch-all op in de controle van 1 credit, en rekent onbevestigde resultaten niet af. Giggal.ai geeft ook een resultaat voor catch-all-adressen, voor 1 credit per adres, en betaalt de credit terug bij onbekende resultaten. Het belangrijkste verschil zijn secure email gateways. Giggal.ai controleert achter 15 daarvan, waaronder Proofpoint, Mimecast en Barracuda.',
  pricingHeading: 'Prijzen van Bounceless en Giggal.ai vergeleken',
  pricingProse:
    'De pakketten voor betalen per gebruik van Bounceless kosten US$ 19 voor 5.000, US$ 29 voor 10.000, US$ 159 voor 100.000 en US$ 579 voor een miljoen. Maandplannen beginnen bij US$ 19 voor 6.500 credits. Credits uit pakketten en plannen verlopen nooit.',
  pricingExtra: [
    'Giggal.ai verkoopt 10.000 credits voor US$ 9,90, 100.000 voor US$ 76 en een miljoen voor US$ 680. Bij een miljoen is Bounceless goedkoper. Bij 10.000 en 100.000 is Giggal.ai goedkoper.',
  ],
  strengths: {
    heading: 'Wanneer Bounceless goed past',
    intro: 'Bounceless heeft echte sterke punten:',
  },
  others: {
    heading: 'Andere Bounceless-alternatieven',
    intro: 'Deze verificatietools liggen qua prijs dicht bij Bounceless. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'no2bounce', text: '10.000 credits kosten US$ 20 en een miljoen kost US$ 679. Credits verlopen nooit.' },
      { name: 'QuickEmailVerification', text: 'Geeft elke dag 100 gratis credits. 10.000 blijvende credits kosten US$ 60.' },
      { name: 'Mailfloss', text: 'Maakt verbinding met 41 e-mailplatforms en verwijdert elke dag ongeldige adressen. 10.000 vooraf betaalde credits kosten US$ 40.' },
    ],
  },
  testHeading: 'Controleer één lijst met Bounceless en Giggal.ai',
  testSteps: [
    'Exporteer een lijst die je al met Bounceless hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de catch-all-regels met de gegevens over catch-all die Bounceless teruggaf.',
  ],
  ctaHeadline: 'Catch-all- en gateway-adressen voor 1 credit per adres',
  faqs: [
    {
      q: 'Wat kost Bounceless?',
      a: 'De pakketten voor betalen per gebruik van Bounceless beginnen bij US$ 19 voor 5.000 credits. 10.000 kosten US$ 29, 100.000 kosten US$ 159 en een miljoen kost US$ 579. Maandplannen beginnen bij US$ 19 voor 6.500 credits.',
    },
    {
      q: 'Is Bounceless gratis?',
      a: 'Bounceless geeft 1.000 gratis credits per maand als je je aanmeldt met een zakelijk e-mailadres. Je hebt geen creditcard nodig. Giggal.ai geeft eenmalig 1.000 gratis credits, zonder creditcard.',
    },
    {
      q: 'Verifieert Bounceless catch-all-e-mailadressen?',
      a: 'Ja. Bounceless neemt gegevens over catch-all op in de standaardcontrole van 1 credit, zonder extra kosten. Onbevestigde resultaten worden niet afgerekend.',
    },
    {
      q: 'Is Giggal.ai een goed Bounceless-alternatief?',
      a: 'Ja, als je lijst veel bedrijfsdomeinen heeft. Giggal.ai controleert achter 15 bij naam genoemde secure email gateways en kost US$ 9,90 per 10.000 credits.',
    },
  ],
  breadcrumb: 'Bounceless-alternatief',
}

export default cfg
