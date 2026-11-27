// Dutch Scrubby alternative page. Translated from app/(en)/scrubby-alternative
// (2026-11-27). Scrubby's product names Quick Verification and Deep Verification
// stay in English. The competitor's words (free tier, expiry, strengths) live in
// lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'scrubby',
  path: '/nl/scrubby-alternatief',
  cluster: 'altScrubby',
  metaTitle: 'Scrubby-alternatief: Scrubby.io-prijzen vergeleken | Giggal.ai',
  ogTitle: 'Een Scrubby-alternatief voor catch-all- en gateway-adressen',
  desc: 'Scrubby vraagt US$ 0,008 per credit, en Deep Verification duurt tot 72 uur. Giggal.ai controleert catch-all- en gateway-adressen voor US$ 9,90 per 10.000.',
  h1: ['Een ', 'Scrubby-alternatief', ' voor US$ 9,90 per 10.000 e-mailadressen'],
  heroP:
    'Scrubby verifieert catch-all-adressen en e-mailadressen achter een gateway. Op die moeilijke adressen richt Giggal.ai zich ook. De verschillen zitten in de prijs en in hoe elke controle werkt. Scrubby vraagt US$ 0,008 per credit. Giggal.ai vraagt US$ 9,90 per 10.000.',
  bluf: [
    { k: 'Prijs', v: '10.000 credits kosten US$ 80 bij Scrubby en US$ 9,90 bij Giggal.ai.' },
    { k: 'Diepe controle', v: 'Deep Verification van Scrubby kost 3 credits en verstuurt echte e-mails. Je wacht tot 72 uur op de definitieve resultaten.' },
    { k: 'Gratis credits', v: 'Scrubby geeft 200 gratis credits. Giggal.ai geeft er 1.000. Bij geen van beide heb je een creditcard nodig.' },
    { k: 'Terugbetaling', v: 'Volgens Scrubby zijn alle aankopen definitief. Giggal.ai betaalt de credit terug bij onbekende resultaten.' },
  ],
  about: {
    heading: 'Wat is Scrubby?',
    paragraphs: [
      'Scrubby is een tool voor e-mailverificatie van scrubby.io. Het richt zich op catch-all-adressen en riskante adressen die andere verificatietools niet kunnen bevestigen.',
      'Het heeft twee controles. Quick Verification kost 1 credit en werkt voor standaarddomeinen, catch-all-domeinen en domeinen achter een SEG. Deep Verification kost 3 credits. Scrubby stuurt dan echte e-mails naar elk adres en geeft binnen 72 uur definitieve resultaten.',
      'Scrubby heeft koppelingen met tools zoals Clay, Instantly, Smartlead, Apollo en HubSpot.',
    ],
  },
  reasons: {
    heading: 'Waarom teams een Scrubby-alternatief zoeken',
    items: [
      { k: 'Prijs', v: 'Betalen per gebruik kost US$ 0,008 per credit. 10.000 controles kosten US$ 80 en 100.000 kosten US$ 800.' },
      { k: 'Wachttijd', v: 'Je wacht tot 72 uur op de resultaten van Deep Verification.' },
      { k: 'Echte e-mails', v: 'Deep Verification stuurt echte e-mails naar elk adres op je lijst.' },
      { k: 'Geen terugbetaling', v: 'Volgens Scrubby zijn alle aankopen definitief.' },
    ],
  },
  catchAllHeading: 'Scrubby vs Giggal.ai bij catch-all- en gateway-adressen',
  catchAllProse:
    'Scrubby en Giggal.ai geven allebei een resultaat voor catch-all-adressen en adressen achter een gateway. Giggal.ai rekent 1 credit voor elk adres, zonder aparte diepe controle. Het noemt 15 gateways waarachter het controleert, waaronder Proofpoint, Mimecast en Barracuda. Als het geen antwoord krijgt, wordt de credit terugbetaald.',
  pricingHeading: 'Prijzen van Scrubby en Giggal.ai vergeleken',
  pricingProse:
    'Betalen per gebruik bij Scrubby kost US$ 0,008 per credit, dus 10.000 credits kosten US$ 80. De maandplannen zijn Starter voor US$ 47 met 6.000 credits, Growth voor US$ 97 met 15.000 en Pro voor US$ 497 met 100.000. Credits voor betalen per gebruik verlopen nooit, en credits van een plan schuiven door.',
  pricingExtra: [
    'Een Deep Verification gebruikt 3 credits, dus 10.000 diepe controles gebruiken 30.000 credits. Giggal.ai verkoopt 10.000 credits voor US$ 9,90 en 100.000 voor US$ 76.',
  ],
  strengths: {
    heading: 'Wanneer Scrubby goed past',
    intro: 'Dit zijn de sterke punten van Scrubby:',
  },
  others: {
    heading: 'Andere Scrubby-alternatieven',
    intro: 'Deze tools geven ook een resultaat voor catch-all-adressen. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'no2bounce', text: 'Stuurt testberichten om catch-all-mailboxen te bevestigen. 10.000 credits kosten US$ 20 en verlopen nooit.' },
      { name: 'Listmint', text: 'Controleert catch-all-adressen handmatig. Starter kost US$ 99 per maand voor 20.000 standaardcredits en 5.000 catch-all-credits.' },
      { name: 'Allegrow', text: 'Geeft geldig of ongeldig terug voor catch-all-contacten en noemt Proofpoint en Mimecast. Starter kost US$ 99 per maand.' },
    ],
  },
  testHeading: 'Test Giggal.ai op je catch-all-adressen',
  testSteps: [
    'Exporteer een lijst die je al met Scrubby hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de resultaten met die van Scrubby voor dezelfde catch-all-adressen.',
  ],
  ctaHeadline: 'Controleer dezelfde moeilijke adressen voor US$ 9,90 per 10.000',
  faqs: [
    {
      q: 'Wat kost Scrubby?',
      a: 'Betalen per gebruik bij Scrubby kost US$ 0,008 per credit, of US$ 80 voor 10.000. Maandplannen beginnen bij US$ 47 voor 6.000 credits. Deep Verification gebruikt 3 credits per e-mailadres.',
    },
    {
      q: 'Wat is Scrubby Deep Verification?',
      a: 'Het is de langzamere controle van Scrubby voor moeilijke adressen. Het kost 3 credits, stuurt echte e-mails naar elk adres en geeft binnen 72 uur definitieve resultaten.',
    },
    {
      q: 'Heeft Scrubby een gratis proefperiode?',
      a: 'Ja. Scrubby geeft 200 gratis credits zonder creditcard. Giggal.ai geeft 1.000 gratis credits zonder creditcard.',
    },
    {
      q: 'Is Giggal.ai een goed Scrubby-alternatief?',
      a: 'Ja. Beide geven een resultaat voor catch-all- en gateway-adressen. Giggal.ai kost US$ 9,90 per 10.000 credits en betaalt de credit terug bij onbekende resultaten.',
    },
  ],
  breadcrumb: 'Scrubby-alternatief',
}

export default cfg
