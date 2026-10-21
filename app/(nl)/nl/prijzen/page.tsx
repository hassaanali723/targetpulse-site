import type { Metadata } from 'next'
import PricingPageL10n, { type PricingContent } from '@/components/l10n/PricingPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Dutch pricing page. Title starts with the planned "Prijzen voor
// e-mailverificatie" (SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md section 3)
// and adds the 10.000-credit price. No brand suffix, so it stays within 64
// characters. Money is written with the symbol first: US$ 9,90.

const PATH = '/nl/prijzen'
const DESC =
  'Prijzen voor e-mailverificatie: US$ 9,90 voor 10.000 credits, tot US$ 0,0007 per adres. Losse aankoop of abonnement met 10% korting. Credits verlopen niet.'

export const metadata: Metadata = {
  title: { absolute: 'Prijzen voor e-mailverificatie: 10.000 credits voor US$ 9,90' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('pricing') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'nl_NL',
    title: 'Prijzen voor e-mailverificatie',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-mailverificatie' }],
  },
}

const content: PricingContent = {
  path: PATH,
  crumb: 'Prijzen',
  h1Lead: 'Prijzen voor',
  h1Accent: 'e-mailverificatie',
  intro: (
    <>
      Je betaalt alleen voor wat je gebruikt. Geen verplicht abonnement, geen verborgen kosten, en credits verlopen niet.
      Je start met <strong className="text-indigo-600 font-extrabold">1.000 gratis testcredits</strong>, zonder creditcard.
    </>
  ),
  contactHref: '/nl/contact',
  includedTitle: 'Alles zit in elk pakket',
  includedText: 'Alle functies, in elk pakket. Geen niveaus en geen afgeschermde functies.',
  features: [
    'Controle van de mailbox',
    'Controle van het domein en de MX-records',
    'Herkenning van SEG-gateways',
    'Herkenning van wegwerpadressen',
    'Herkenning van rol-adressen',
    'Catch-all-verificatie',
    'Upload en verificatie in bulk',
    'Export naar CSV, Excel en JSON',
    'Dubbele adressen verwijderen',
    'Gedetailleerde verificatierapporten',
    'Credits die niet verlopen',
  ],
  rulesTitle: 'Prijzen die je snel begrijpt',
  rulesText: 'Vier regels houden de prijzen duidelijk en voorspelbaar.',
  rules: [
    { title: '1 credit = 1 adres', body: 'Elke controle kost precies één credit van je saldo. Dat geldt ook voor catch-all-adressen en adressen achter beveiligingsgateways.' },
    { title: 'Korting op volume', body: 'Hoe meer credits je koopt, hoe minder je per credit betaalt: van US$ 0,0017 tot US$ 0,0007.' },
    { title: '10% korting met een abonnement', body: 'Met het maandabonnement bespaar je automatisch 10% op elk pakket.' },
    { title: 'Credits verlopen niet', body: 'Gebruik ze wanneer je wilt. Ze blijven op je account staan zolang je ze nodig hebt.' },
  ],
  faqTitle: 'Veelgestelde vragen',
  faqText: 'Credits, betalingen en terugbetalingen.',
  faq: [
    { q: 'Welke betaalmethoden accepteren jullie?', a: 'Alle gangbare creditcards en debitcards, via Stripe. De prijzen zijn in Amerikaanse dollars. Je bank past de wisselkoers toe.' },
    { q: 'Kan ik het abonnement op elk moment opzeggen?', a: 'Ja, op elk moment. Je houdt alle credits op je account en je betaalt niets meer.' },
    { q: 'Wat gebeurt er als mijn credits op zijn?', a: 'Je koopt nieuwe credits wanneer je wilt. Je saldo wordt direct bijgewerkt.' },
    { q: 'Krijg ik mijn geld terug?', a: 'Credits worden in principe niet terugbetaald. Uitzonderlijke gevallen bekijken we een voor een. Voor resultaten met "onbekend" krijg je de credits terug. De details staan in het terugbetalingsbeleid.' },
    { q: 'Is er een minimale aankoop?', a: 'Het kleinste pakket is 3.000 credits (US$ 5,00). Voor je iets koopt, krijg je 1.000 gratis testcredits.' },
    { q: 'Verlopen credits?', a: 'Nooit. Ze blijven op je account tot je ze gebruikt.' },
  ],
  ctaTitle: 'Start met 1.000 gratis credits',
  ctaText: 'Geen creditcard nodig. Controleer je eerste adressen gratis en zie de resultaten binnen enkele seconden.',
  ctaButton: 'Gratis credits ophalen',
  ctaHref: '/nl/registreren',
}

export default function PrijzenPage() {
  return <PricingPageL10n locale="nl" content={content} />
}
