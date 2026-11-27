// Dutch Listmint alternative page. Translated from
// app/(en)/listmint-alternative (2026-11-27). The competitor's words (free
// tier, expiry, strengths) are in lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'listmint',
  path: '/nl/listmint-alternatief',
  cluster: 'altListmint',
  metaTitle: 'Listmint-alternatief: catch-all-e-mailverificatie | Giggal.ai',
  ogTitle: 'Een Listmint-alternatief voor verificatie van catch-all-adressen',
  desc: 'Listmint kost US$ 99 per maand met 5.000 catch-all-credits. Giggal.ai controleert catch-all-adressen voor 1 credit, US$ 9,90 per 10.000. Credits verlopen nooit.',
  h1: ['Een ', 'Listmint-alternatief', ' met één pool van credits'],
  heroP:
    'Listmint is een e-mailverificatietool die zich richt op catch-all-adressen. Het verdeelt elk plan in standaardcredits en een kleinere pool van catch-all-credits. Giggal.ai gebruikt één pool. Een catch-all-controle kost 1 credit, net als elk ander e-mailadres.',
  bluf: [
    { k: 'Credits', v: 'Listmint heeft twee pools van credits. Giggal.ai heeft er één, met 1 credit per e-mailadres.' },
    { k: 'Prijs', v: 'Listmint Starter kost US$ 99 per maand. Giggal.ai kost US$ 9,90 voor 10.000 credits, eenmalig gekocht.' },
    { k: 'Catch-all', v: 'Listmint Starter geeft 5.000 catch-all-credits per maand. Giggal.ai heeft geen aparte limiet.' },
    { k: 'Gateways', v: 'Giggal.ai controleert adressen achter 15 bij naam genoemde e-mailgateways. Listmint noemt er geen.' },
  ],
  about: {
    heading: 'Wat is Listmint?',
    paragraphs: [
      'Listmint is een dienst voor e-mailverificatie van listmint.io. Het voert standaard SMTP-controles uit en een aparte catch-all-controle. Listmint zegt dat het catch-all-adressen met de hand verifieert.',
      'De catch-all-credits kosten meer dan de standaardcredits. Daarom bevat elk plan een grote pool van standaardcredits en een kleinere pool van catch-all-credits.',
      'Listmint zegt ook dat het catch-all-adressen in realtime kan verifiëren.',
    ],
  },
  reasons: {
    heading: 'Waarom mensen een Listmint-alternatief zoeken',
    items: [
      { k: 'Limiet voor catch-all', v: 'Starter bevat 5.000 catch-all-credits per maand. Eén grote B2B-lijst kan ze allemaal opmaken.' },
      { k: 'Maandplan', v: 'Listmint wordt per maand gefactureerd. Credits van Giggal.ai koop je één keer en ze verlopen nooit.' },
      { k: 'Volume', v: 'Het grootste vermelde plan is Agency, met 50.000 standaardcredits. Voor meer heb je een offerte voor Enterprise nodig.' },
      { k: 'Gateways', v: 'Listmint noemt geen secure email gateways waarachter het kan controleren.' },
    ],
  },
  catchAllHeading: 'Listmint vs Giggal.ai bij catch-all-adressen',
  catchAllProse:
    'Listmint rekent catch-all-controles af uit een aparte pool van credits. In het Starter-plan van US$ 99 is die pool 5.000 per maand. Giggal.ai heeft geen aparte pool. Elk adres kost 1 credit, catch-all of niet. Als Giggal.ai geen antwoord krijgt, is het resultaat onbekend en wordt de credit terugbetaald.',
  pricingHeading: 'Prijzen van Listmint vergeleken met Giggal.ai',
  pricingProse:
    'Listmint Starter kost US$ 99 per maand voor 20.000 standaardcredits en 5.000 catch-all-credits. Agency kost US$ 187 per maand voor 50.000 standaardcredits en 10.000 catch-all-credits. Enterprise heeft een prijs op aanvraag.',
  pricingExtra: [
    'Giggal.ai heeft geen plannen in staffels. 10.000 credits kosten US$ 9,90 en 100.000 kosten US$ 76. Je kunt elke credit gebruiken voor catch-all-adressen.',
  ],
  strengths: {
    heading: 'Wanneer Listmint goed past',
    intro: 'Listmint is een logische keuze als je dit wilt:',
  },
  others: {
    heading: 'Andere Listmint-alternatieven',
    intro: 'Deze verificatietools geven ook een resultaat voor catch-all-adressen. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'Scrubby', text: 'Controleert catch-all-domeinen en domeinen achter een gateway voor 1 credit. De Deep Verification kost 3 credits en stuurt echte e-mails. Betalen per gebruik kost US$ 0,008 per credit.' },
      { name: 'no2bounce', text: 'Stuurt testberichten om catch-all-mailboxen te bevestigen. 10.000 credits voor betalen per gebruik kosten US$ 20 en verlopen nooit.' },
      { name: 'Allegrow', text: 'Een tool voor salesteams die geldig of ongeldig teruggeeft voor catch-all-contacten. Starter kost US$ 99 per maand voor 5.000 contacten.' },
    ],
  },
  testHeading: 'Controleer een lijst van Listmint met Giggal.ai',
  testSteps: [
    'Exporteer een lijst die je al met Listmint hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de catch-all-regels met wat Listmint teruggaf.',
  ],
  ctaHeadline: 'Controleer catch-all-adressen zonder aparte creditlimiet',
  faqs: [
    {
      q: 'Wat kost Listmint?',
      a: 'Listmint Starter kost US$ 99 per maand met 20.000 standaardcredits en 5.000 catch-all-credits. Agency kost US$ 187 per maand met 50.000 standaardcredits en 10.000 catch-all-credits. Enterprise heeft een prijs op aanvraag.',
    },
    {
      q: 'Waarom heeft Listmint aparte catch-all-credits?',
      a: 'Listmint zegt dat de catch-all-credits meer kosten dan de normale SMTP-credits, omdat een catch-all-controle meer werk is. Giggal.ai rekent 1 credit voor elk adres, ook voor catch-all.',
    },
    {
      q: 'Is Giggal.ai een goed Listmint-alternatief?',
      a: 'Ja, als je lijsten verifieert met veel catch-all-adressen. Giggal.ai heeft geen aparte limiet voor catch-all en geen maandplan. Het kost US$ 9,90 per 10.000 credits.',
    },
    {
      q: 'Heeft Listmint een gratis proefperiode?',
      a: 'Listmint biedt een gratis start, maar publiceert niet hoeveel credits daarbij horen. Giggal.ai geeft 1.000 gratis credits zonder creditcard.',
    },
  ],
  breadcrumb: 'Listmint-alternatief',
}

export default cfg
