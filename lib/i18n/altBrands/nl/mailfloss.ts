// Dutch Mailfloss alternative page. Translated from app/(en)/mailfloss-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) live in
// lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'mailfloss',
  path: '/nl/mailfloss-alternatief',
  cluster: 'altMailfloss',
  metaTitle: 'Mailfloss-alternatief: prijzen en catch-all | Giggal.ai',
  ogTitle: 'Een Mailfloss-alternatief dat catch-all-adressen controleert',
  desc: 'Mailfloss schoont elke dag de lijst in je e-mailplatform op, maar markeert catch-all alleen. Giggal.ai geeft een resultaat, voor US$ 9,90 per 10.000 credits.',
  h1: ['Een ', 'Mailfloss-alternatief', ' voor het eenmalig opschonen van een lijst'],
  heroP:
    'Mailfloss maakt verbinding met je e-mailmarketingplatform en schoont de lijst elke dag op. Het markeert catch-all-adressen, maar bevestigt ze niet. Giggal.ai verifieert lijsten die je uploadt en geeft een resultaat voor catch-all-adressen, voor US$ 9,90 per 10.000 e-mailadressen.',
  bluf: [
    { k: 'Hoe het werkt', v: 'Mailfloss schoont je lijst op binnen je e-mailplatform. Giggal.ai controleert lijsten die je uploadt of via de API stuurt.' },
    { k: 'Catch-all', v: 'Mailfloss markeert catch-all-adressen. Giggal.ai geeft er een resultaat voor.' },
    { k: 'Prijs', v: 'Vooraf betaalde credits van Mailfloss kosten US$ 40 per 10.000. Giggal.ai kost US$ 9,90.' },
    { k: 'Gratis gebruik', v: 'Mailfloss geeft 500 gratis controles per maand. Giggal.ai geeft eenmalig 1.000, zonder creditcard.' },
  ],
  about: {
    heading: 'Wat is Mailfloss?',
    paragraphs: [
      'Mailfloss is een dienst voor het opschonen van e-maillijsten. Het maakt verbinding met 41 e-mailplatforms, zoals Mailchimp, Klaviyo, HubSpot en ActiveCampaign. Daarna verwijdert het elke dag ongeldige adressen uit je lijst.',
      'Het verbetert ook veelvoorkomende typefouten in e-mailadressen. Het heeft een realtime API, webhooks en een formulierwidget.',
      'Mailfloss verkoopt maandabonnementen en vooraf betaalde credits. Vooraf betaalde credits verlopen nooit.',
    ],
  },
  reasons: {
    heading: 'Waarom mensen een Mailfloss-alternatief zoeken',
    items: [
      { k: 'Catch-all', v: 'Mailfloss markeert catch-all-adressen. Het bevestigt niet of de mailbox bestaat.' },
      { k: 'Creditcard voor de proefperiode', v: 'De proefperiode van 7 dagen voor abonnementen vraagt om een creditcard.' },
      { k: 'Platformlimiet', v: 'Lite werkt met 1 e-mailplatform en Business met 10.' },
      { k: 'Prijs', v: 'Vooraf betaalde credits kosten US$ 40 per 10.000 en US$ 300 per 100.000.' },
    ],
  },
  catchAllHeading: 'Hoe Mailfloss en Giggal.ai met catch-all-adressen omgaan',
  catchAllProse:
    'Mailfloss markeert catch-all-adressen en laat de beslissing aan jou. Giggal.ai controleert ze verder en geeft een van vier resultaten terug, voor 1 credit per adres. Het controleert ook adressen achter 15 bij naam genoemde secure email gateways.',
  pricingHeading: 'Prijzen van Mailfloss en Giggal.ai vergeleken',
  pricingProse:
    'Bij Mailfloss kost het abonnement Lite US$ 29 per maand voor 10.000 credits, Business US$ 59 voor 25.000 en Pro US$ 209 voor 125.000. Vooraf betaalde credits kosten US$ 8 voor 1.000, US$ 40 voor 10.000, US$ 300 voor 100.000 en US$ 1.200 voor een miljoen.',
  pricingExtra: [
    'Elk account bij Mailfloss krijgt ook 500 gratis verificaties per maand. Giggal.ai verkoopt 10.000 credits voor US$ 9,90 en een miljoen voor US$ 680, zonder abonnement.',
  ],
  strengths: {
    heading: 'Wanneer Mailfloss goed past',
    intro: 'Mailfloss doet een aantal dingen die Giggal.ai niet doet:',
  },
  others: {
    heading: 'Andere Mailfloss-alternatieven',
    intro: 'Deze verificatietools schonen ook marketinglijsten op. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Heeft koppelingen met meer dan 50 marketingtools. 10.000 blijvende credits kosten US$ 60.' },
      { name: 'Bounceless', text: '10.000 credits kosten US$ 29, met 1.000 gratis credits per maand met een zakelijk e-mailadres.' },
      { name: 'no2bounce', text: 'Heeft koppelingen met HubSpot, Klaviyo en Zoho. 10.000 credits kosten US$ 20 en verlopen nooit.' },
    ],
  },
  testHeading: 'Test Giggal.ai op een export uit je e-mailplatform',
  testSteps: [
    'Exporteer een lijst die je al met Mailfloss hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de catch-all-regels met wat Mailfloss markeerde.',
  ],
  ctaHeadline: 'Krijg een resultaat voor catch-all-adressen, geen markering',
  faqs: [
    {
      q: 'Wat kost Mailfloss?',
      a: 'Abonnementen beginnen bij US$ 29 per maand voor 10.000 credits. Vooraf betaalde credits kosten US$ 40 voor 10.000 en US$ 1.200 voor een miljoen, en ze verlopen nooit.',
    },
    {
      q: 'Heeft Mailfloss een gratis plan?',
      a: 'Ja. Elk account krijgt 500 gratis verificaties per maand. Abonnementen hebben ook een proefperiode van 7 dagen, waarvoor je een creditcard nodig hebt.',
    },
    {
      q: 'Verifieert Mailfloss catch-all-e-mailadressen?',
      a: 'Het markeert ze. Het bevestigt niet of de mailbox bestaat. Giggal.ai geeft een resultaat voor catch-all-adressen, voor 1 credit per adres.',
    },
    {
      q: 'Schoont Giggal.ai de lijst in mijn e-mailplatform op zoals Mailfloss?',
      a: 'Nee. Giggal.ai werkt met uploads, een API, Zapier, n8n en HubSpot. Het voert geen dagelijkse opschoning uit binnen je e-mailplatform.',
    },
  ],
  breadcrumb: 'Mailfloss-alternatief',
}

export default cfg
