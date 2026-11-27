// Dutch QuickEmailVerification alternative page. Translated from
// app/(en)/quickemailverification-alternative (2026-11-27). The competitor's
// words (free tier, expiry, strengths) live in lib/i18n/altBrands/nl/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'nl',
  slug: 'quickemailverification',
  path: '/nl/quickemailverification-alternatief',
  cluster: 'altQuickemailverification',
  metaTitle: 'QuickEmailVerification-alternatief en prijzen | Giggal.ai',
  ogTitle: 'Een QuickEmailVerification-alternatief dat catch-all controleert',
  desc: 'QuickEmailVerification vraagt US$ 60 per 10.000 en markeert catch-all als status. Giggal.ai geeft catch-all-adressen een resultaat, voor US$ 9,90 per 10.000.',
  h1: ['Een ', 'QuickEmailVerification-alternatief', ' dat catch-all-adressen controleert'],
  heroP:
    'QuickEmailVerification is een e-mailverificatietool die al lang bestaat, met 100 gratis credits per dag. Catch-all-adressen markeert het als catch-all, en daar stopt het. Giggal.ai geeft een resultaat voor die adressen, voor US$ 9,90 per 10.000 e-mailadressen.',
  bluf: [
    { k: 'Catch-all', v: 'QuickEmailVerification markeert catch-all als status. Giggal.ai geeft een resultaat.' },
    { k: 'Prijs', v: '10.000 credits kosten US$ 60 bij QuickEmailVerification en US$ 9,90 bij Giggal.ai.' },
    { k: 'Gratis credits', v: 'QuickEmailVerification geeft er 100 per dag. Giggal.ai geeft eenmalig 1.000, zonder creditcard.' },
    { k: 'Geldigheid', v: 'Bij beide tools verlopen credits voor betalen per gebruik nooit.' },
  ],
  about: {
    heading: 'Wat is QuickEmailVerification?',
    paragraphs: [
      'QuickEmailVerification is een dienst voor e-mailverificatie van quickemailverification.com. Het controleert bulklijsten, losse e-mailadressen en aanmeldformulieren via een REST API.',
      'In het gratis plan krijg je elke dag 100 gratis credits. Volgens QuickEmailVerification heeft het koppelingen met meer dan 50 marketingtools, waaronder Zapier en WordPress.',
      'Op de website staan badges voor ISO 27001, AVG (GDPR), CCPA en HIPAA. Het claimt 99% nauwkeurigheid.',
    ],
  },
  reasons: {
    heading: 'Waarom teams een QuickEmailVerification-alternatief zoeken',
    items: [
      { k: 'Catch-all', v: 'Catch-all-adressen komen terug als catch-all. Je moet dan nog zelf beslissen of je ernaar verstuurt.' },
      { k: 'Prijs', v: '10.000 credits kosten US$ 60 en 100.000 kosten US$ 320.' },
      { k: 'Gateways', v: 'QuickEmailVerification noemt geen ondersteuning voor secure email gateways zoals Proofpoint of Mimecast.' },
    ],
  },
  catchAllHeading: 'Wat er in elke tool met catch-all-adressen gebeurt',
  catchAllProse:
    'QuickEmailVerification geeft catch-all-adressen terug met de status catch-all. Het bevestigt de mailbox niet. Bij een B2B-lijst kunnen zo veel adressen zonder duidelijk antwoord blijven. Giggal.ai controleert die adressen verder en geeft een van vier resultaten terug, voor 1 credit per adres.',
  pricingHeading: 'Prijzen van QuickEmailVerification en Giggal.ai vergeleken',
  pricingProse:
    'QuickEmailVerification verkoopt blijvende credits die nooit verlopen. 500 credits kosten US$ 4, 10.000 kosten US$ 60, 100.000 kosten US$ 320 en een miljoen kost US$ 1.350. Een gratis dagplan geeft 100 credits per dag.',
  pricingExtra: ['Giggal.ai verkoopt 10.000 credits voor US$ 9,90, 100.000 voor US$ 76 en een miljoen voor US$ 680. Ook die credits verlopen nooit.'],
  strengths: {
    heading: 'Wanneer QuickEmailVerification goed past',
    intro: 'QuickEmailVerification heeft echte sterke punten:',
  },
  others: {
    heading: 'Andere QuickEmailVerification-alternatieven',
    intro: 'Deze verificatietools gaan op verschillende manieren om met catch-all-adressen. De prijzen komen van de website van elke leverancier, gecontroleerd op 27 november 2026.',
    items: [
      { name: 'Bounceless', text: '10.000 credits kosten US$ 29, met gegevens over catch-all inbegrepen in de prijs.' },
      { name: 'no2bounce', text: '10.000 credits kosten US$ 20. Het stuurt testberichten om catch-all-mailboxen te bevestigen.' },
      { name: 'Mailfloss', text: 'Schoont elke dag lijsten op in 41 e-mailplatforms. Vooraf betaalde credits kosten US$ 40 per 10.000.' },
    ],
  },
  testHeading: 'Controleer je catch-all-regels opnieuw met Giggal.ai',
  testSteps: [
    'Exporteer een lijst die je al met QuickEmailVerification hebt gecontroleerd.',
    'Controleer die hier met de 1.000 gratis credits. Zonder creditcard.',
    'Bekijk de regels die QuickEmailVerification als catch-all markeerde en vergelijk de resultaten.',
  ],
  ctaHeadline: 'Krijg een resultaat voor de adressen die als catch-all gemarkeerd zijn',
  faqs: [
    {
      q: 'Wat kost QuickEmailVerification?',
      a: 'Blijvende credits beginnen bij US$ 4 voor 500. 10.000 kosten US$ 60, 100.000 kosten US$ 320 en een miljoen kost US$ 1.350. Deze credits verlopen nooit.',
    },
    {
      q: 'Is QuickEmailVerification gratis?',
      a: 'Er is een gratis plan met 100 credits per dag, en de credits worden elke dag gereset. Giggal.ai geeft eenmalig 1.000 gratis credits, zonder creditcard, te gebruiken bij een bulkupload.',
    },
    {
      q: 'Verifieert QuickEmailVerification catch-all-e-mailadressen?',
      a: 'Het herkent catch-all-domeinen en geeft de status catch-all terug. Het bevestigt niet of de mailbox bestaat. Giggal.ai geeft een resultaat voor die adressen.',
    },
    {
      q: 'Is Giggal.ai een goed QuickEmailVerification-alternatief?',
      a: 'Ja, voor B2B-lijsten met veel catch-all-adressen. Giggal.ai kost US$ 9,90 per 10.000 credits en geeft een resultaat voor die adressen.',
    },
  ],
  breadcrumb: 'QuickEmailVerification-alternatief',
}

export default cfg
