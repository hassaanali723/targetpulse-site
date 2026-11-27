// Dutch Allegrow alternative page. Translated from
// app/(en)/allegrow-alternative (2026-11-27). The competitor's words (free
// tier, expiry, strengths, estimate note) are in lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'allegrow',
  path: '/nl/allegrow-alternatief',
  cluster: 'altAllegrow',
  metaTitle: 'Allegrow-alternatief en prijzen van Allegrow | Giggal.ai',
  ogTitle: 'Een Allegrow-alternatief waarvoor je per e-mailadres betaalt',
  desc: 'Allegrow begint bij US$ 99 per maand voor 5.000 contacten. Giggal.ai controleert catch-all- en gateway-adressen voor US$ 9,90 per 10.000. Credits verlopen niet.',
  h1: ['Een ', 'Allegrow-alternatief', ' waarvoor je per e-mailadres betaalt'],
  heroP:
    'Allegrow is een platform voor e-mailverificatie en bezorgbaarheid voor salesteams. Het wordt verkocht als maandplan, vanaf US$ 99 voor 5.000 contacten. Giggal.ai verifieert e-mailadressen met eenmalige credits. 10.000 credits kosten US$ 9,90 en verlopen nooit.',
  bluf: [
    { k: 'Facturering', v: 'Allegrow is een maandplan. Credits van Giggal.ai koop je één keer.' },
    { k: 'Prijs', v: 'Allegrow Starter kost US$ 99 per maand voor 5.000 contacten. Giggal.ai kost US$ 9,90 voor 10.000.' },
    { k: 'Catch-all', v: 'Beide geven geldig of ongeldig terug voor catch-all-adressen. Beide noemen Proofpoint en Mimecast.' },
    { k: 'Extra tools', v: 'Allegrow volgt ook inbox placement en de status van je domein. Giggal.ai doet dat niet.' },
  ],
  about: {
    heading: 'Wat is Allegrow?',
    paragraphs: [
      'Allegrow is een B2B-platform voor e-mailverificatie voor sales- en revenueteams. Het verifieert contacten, ook catch-all-adressen, en geeft geldig of ongeldig terug. Allegrow zegt dat het nooit e-mails verstuurt om een catch-all-adres te verifiëren.',
      'Het volgt ook de afzenderreputatie en inbox placement van gekoppelde mailboxen. Het heeft koppelingen met Outreach, Salesloft, HubSpot, Apollo, ZoomInfo en Clay.',
      'Allegrow biedt SOC 2-rapporten, en SSO als add-on in het hoogste plan.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Prijzen van Allegrow in 2026',
  pricingProse:
    'Allegrow Starter kost US$ 99 per maand voor 5.000 contacten. Extra contacten kosten US$ 8 per 1.000. Scale Plus Unlimited kost US$ 1.340 per maand, jaarlijks gefactureerd, zonder limiet op credits. Een API-plan heeft een prijs op aanvraag.',
  pricingExtra: [
    'Met Starter komen 10.000 contacten per maand dus op US$ 139. Dat is onze berekening op basis van de gepubliceerde tarieven, geen plan dat Allegrow vermeldt. Giggal.ai verkoopt 10.000 credits voor US$ 9,90 en 100.000 voor US$ 76, eenmalig.',
  ],
  reasons: {
    heading: 'Waarom teams een Allegrow-alternatief zoeken',
    items: [
      { k: 'Maandelijkse kosten', v: 'Starter kost elke maand US$ 99. Teams die een paar keer per jaar verifiëren, betalen voor maanden die ze niet gebruiken.' },
      { k: 'Integraties', v: 'Native koppelingen met HubSpot, Outreach en Salesloft zitten in Scale Plus. Starter maakt verbinding met Clay via een API-sleutel.' },
      { k: 'Grenzen van de proefperiode', v: 'De proefperiode van 14 dagen dekt 1.000 adressen, zonder integraties of API-toegang.' },
    ],
  },
  catchAllHeading: 'Allegrow vs Giggal.ai bij catch-all- en gateway-adressen',
  catchAllProse:
    'Allegrow en Giggal.ai geven allebei het resultaat geldig of ongeldig voor catch-all-adressen. Beide noemen ook Proofpoint en Mimecast bij de gateways waarachter ze controleren. Het grootste verschil is de facturering. Allegrow werkt met een maandelijks tegoed aan contacten. Giggal.ai rekent 1 credit per adres, uit credits die nooit verlopen.',
  strengths: {
    heading: 'Wat Allegrow goed doet',
    intro: 'Allegrow doet meer dan verificatie. Het is de betere keuze als je dit nodig hebt:',
  },
  others: {
    heading: 'Andere Allegrow-alternatieven',
    intro: 'Deze tools verifiëren ook catch-all-adressen. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'Scrubby', text: 'Controleert catch-all-domeinen en domeinen achter een gateway. Betalen per gebruik kost US$ 0,008 per credit, en maandplannen beginnen bij US$ 47.' },
      { name: 'Listmint', text: 'Controleert catch-all-adressen uit een aparte pool van credits. Starter kost US$ 99 per maand voor 20.000 standaardcredits en 5.000 catch-all-credits.' },
      { name: 'Bounceless', text: 'Geeft gegevens over catch-all in de controle van 1 credit en heeft tools voor inbox placement. 10.000 credits kosten US$ 29.' },
    ],
  },
  testHeading: 'Vergelijk Giggal.ai met je resultaten uit Allegrow',
  testSteps: [
    'Exporteer een lijst die je al met Allegrow hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de catch-all-resultaten met die van Allegrow voor dezelfde contacten.',
  ],
  ctaHeadline: 'Verifieer dezelfde moeilijke adressen en betaal per e-mailadres',
  faqs: [
    {
      q: 'Wat kost Allegrow?',
      a: 'Allegrow Starter kost US$ 99 per maand voor 5.000 contacten, en extra contacten kosten US$ 8 per 1.000. Scale Plus Unlimited kost US$ 1.340 per maand, jaarlijks gefactureerd. Het API-plan heeft een prijs op aanvraag.',
    },
    {
      q: 'Heeft Allegrow een gratis proefperiode?',
      a: 'Ja. Allegrow heeft een proefperiode van 14 dagen voor maximaal 1.000 adressen, zonder creditcard. Integraties en API-toegang horen niet bij de proefperiode.',
    },
    {
      q: 'Is Giggal.ai een goed Allegrow-alternatief?',
      a: 'Ja, als je alleen verificatie nodig hebt. Giggal.ai geeft een resultaat voor catch-all- en gateway-adressen voor US$ 9,90 per 10.000. Het volgt geen inbox placement of afzenderreputatie.',
    },
    {
      q: 'Verstuurt Allegrow e-mails om catch-all-adressen te verifiëren?',
      a: 'Nee. Allegrow zegt dat het nooit e-mails verstuurt om een catch-all-adres te verifiëren.',
    },
    {
      q: 'Heeft Allegrow een onbeperkt plan?',
      a: 'Ja. Scale Plus Unlimited kost US$ 1.340 per maand, jaarlijks gefactureerd, met onbeperkte verificatie via integraties of CSV. Giggal.ai heeft geen onbeperkt plan.',
    },
  ],
  breadcrumb: 'Allegrow-alternatief',
}

export default cfg
