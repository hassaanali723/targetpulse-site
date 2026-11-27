// Dutch MyEmailVerifier alternative page. Translated from
// app/(en)/myemailverifier-alternative (2026-11-27). Its prices come from the
// August 2026 check, and the page says so. The competitor's words (free tier,
// expiry, strengths) live in lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'myemailverifier',
  path: '/nl/myemailverifier-alternatief',
  cluster: 'altMyemailverifier',
  metaTitle: 'MyEmailVerifier-alternatief: prijzen en catch-all | Giggal.ai',
  ogTitle: 'Een MyEmailVerifier-alternatief voor B2B-lijsten',
  desc: 'MyEmailVerifier geeft 100 gratis credits per dag, maar markeert catch-all als status. Giggal.ai geeft een resultaat voor catch-all, voor US$ 9,90 per 10.000.',
  h1: ['Een ', 'MyEmailVerifier-alternatief', ' voor B2B-lijsten met catch-all-domeinen'],
  heroP:
    'MyEmailVerifier is een goedkope e-mailverificatietool met 100 gratis credits per dag. Het geeft catch-all-adressen een eigen status en bevestigt ze niet. Giggal.ai geeft een resultaat voor die adressen, voor US$ 9,90 per 10.000 e-mailadressen.',
  bluf: [
    { k: 'Catch-all', v: 'MyEmailVerifier markeert catch-all als status. Giggal.ai geeft een resultaat.' },
    { k: 'Prijs', v: '10.000 credits kosten US$ 15 bij MyEmailVerifier en US$ 9,90 bij Giggal.ai.' },
    { k: 'Bij groot volume', v: 'Een miljoen credits kost US$ 349 bij MyEmailVerifier en US$ 680 bij Giggal.ai.' },
    { k: 'Gratis credits', v: 'MyEmailVerifier geeft er 100 per dag. Giggal.ai geeft eenmalig 1.000, zonder creditcard.' },
  ],
  about: {
    heading: 'Wat is MyEmailVerifier?',
    paragraphs: [
      'MyEmailVerifier is een dienst voor e-mailverificatie van myemailverifier.com. Het controleert bulklijsten en losse e-mailadressen, en het heeft een API.',
      'Het geeft elke dag 100 gratis credits. Betaalde credits beginnen bij US$ 4 voor 1.000 en verlopen nooit.',
      'Het geeft catch-all-adressen terug met een aparte status catch-all. Het bevestigt niet of die mailboxen bestaan.',
    ],
  },
  reasons: {
    heading: 'Waarom mensen een MyEmailVerifier-alternatief zoeken',
    items: [
      { k: 'Catch-all', v: 'Catch-all-adressen komen terug zonder duidelijk antwoord. Bij B2B-lijsten kan dat een groot deel van de lijst zijn.' },
      { k: 'Gateways', v: 'MyEmailVerifier noemt geen Proofpoint, Mimecast of andere gateways waarachter het kan controleren.' },
    ],
  },
  catchAllHeading: 'Catch-all-e-mailadressen: MyEmailVerifier vs Giggal.ai',
  catchAllProse:
    'Veel bedrijfsdomeinen accepteren elk adres. Een eenvoudige controle kan daardoor een echt adres niet van een nepadres onderscheiden. MyEmailVerifier markeert deze adressen als catch-all en laat de beslissing aan jou. Giggal.ai controleert ze verder en geeft een van de vier resultaten hieronder terug, voor 1 credit per adres.',
  pricingHeading: 'Prijzen van MyEmailVerifier en Giggal.ai vergeleken',
  pricingProse:
    'MyEmailVerifier verkoopt credits die nooit verlopen. Bij onze prijscontrole in augustus 2026 kostten 1.000 credits US$ 4, 10.000 kostten US$ 15, 100.000 kostten US$ 99 en een miljoen kostte US$ 349.',
  pricingExtra: [
    'Giggal.ai verkoopt 10.000 credits voor US$ 9,90, 100.000 voor US$ 76 en een miljoen voor US$ 680. Bij een miljoen is MyEmailVerifier goedkoper. Giggal.ai geeft daarnaast een resultaat voor catch-all- en gateway-adressen.',
  ],
  strengths: {
    heading: 'Wanneer MyEmailVerifier goed past',
    intro: 'MyEmailVerifier is een goede keuze voor sommige lijsten:',
  },
  others: {
    heading: 'Andere MyEmailVerifier-alternatieven',
    intro: 'Deze verificatietools hebben ook lage prijzen of gratis credits per dag. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Geeft ook 100 gratis credits per dag. 10.000 blijvende credits kosten US$ 60.' },
      { name: 'Bounceless', text: 'Geeft 1.000 gratis credits per maand met een zakelijk e-mailadres. 10.000 credits kosten US$ 29, met gegevens over catch-all inbegrepen.' },
      { name: 'no2bounce', text: '10.000 credits kosten US$ 20 en verlopen nooit. Het stuurt testberichten om catch-all-mailboxen te bevestigen.' },
    ],
  },
  testHeading: 'Controleer je catch-all-regels met Giggal.ai',
  testSteps: [
    'Exporteer een lijst die je al met MyEmailVerifier hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Vergelijk de regels die MyEmailVerifier als catch-all markeerde.',
  ],
  ctaHeadline: 'Krijg een resultaat voor catch-all-adressen',
  faqs: [
    {
      q: 'Wat kost MyEmailVerifier?',
      a: 'Bij onze prijscontrole in augustus 2026 kostten 1.000 credits US$ 4, 10.000 kostten US$ 15, 100.000 kostten US$ 99 en een miljoen kostte US$ 349. De credits verlopen nooit.',
    },
    {
      q: 'Is MyEmailVerifier gratis?',
      a: 'Het geeft elke dag 100 gratis credits. De dagelijkse credits worden gereset in plaats van te stoppen na een proefperiode. Giggal.ai geeft eenmalig 1.000 gratis credits, zonder creditcard.',
    },
    {
      q: 'Verifieert MyEmailVerifier catch-all-e-mailadressen?',
      a: 'Het herkent catch-all-domeinen en geeft de status catch-all terug. Het bevestigt de mailbox niet. Giggal.ai geeft een resultaat voor catch-all-adressen, voor 1 credit per adres.',
    },
    {
      q: 'Verlopen de credits van Giggal.ai?',
      a: 'Nee. Credits van Giggal.ai verlopen nooit. Credits van MyEmailVerifier verlopen ook nooit.',
    },
  ],
  breadcrumb: 'MyEmailVerifier-alternatief',
}

export default cfg
