import type { AffiliatesContent } from '@/lib/i18n/affiliates/types'

// Dutch copy of the affiliate page. Source: app/(en)/affiliates.
// Register "je/jij", "e-mail" with the hyphen, numbers 1.000 and 10.000,
// money as US$ 50 (symbol first, currency stays USD), percentages 20%.

export const AFFILIATES_NL: AffiliatesContent = {
  meta: {
    title: 'Partnerprogramma: 20% terugkerende commissie | Giggal.ai',
    description:
      'Partnerprogramma van Giggal.ai: 20% terugkerende commissie op elke betaling van je doorverwezen klanten, 3 maanden attributie en maandelijkse uitbetaling.',
    ogTitle: 'Partnerprogramma: 20% terugkerende commissie',
    ogDescription:
      'Verdien 20% terugkerende commissie voor elke klant die je naar Giggal.ai doorverwijst. Zonder einddatum. Zonder limiet.',
  },
  crumb: 'Partnerprogramma',
  h1Lead: 'Verdien 20% commissie',
  h1Accent: 'elke maand, zonder einddatum',
  intro: {
    before: 'Deel',
    after:
      'met je publiek en verdien 20% commissie op elke betaling van je doorverwezen klanten, zolang ze klant blijven. Geen limiet, geen einddatum.',
  },
  joinCta: 'Doe mee aan het partnerprogramma',
  howCta: 'Bekijk hoe het werkt',
  stats: [
    { value: '20%', label: 'Terugkerend' },
    { value: '3 maanden', label: 'Attributie' },
    { value: 'Maandelijks', label: 'Uitbetaling' },
    { value: 'US$ 50', label: 'Minimale uitbetaling' },
  ],
  why: {
    eyebrow: 'Waarom meedoen',
    h2: 'Een van de royaalste partnerprogramma’s voor e-mailtools',
    sub: 'Echte terugkerende inkomsten, geen eenmalige beloning.',
    cards: [
      {
        title: '20% terugkerend',
        body: 'Verdien aan elke betaling van je doorverwezen klanten, maand na maand, jaar na jaar.',
      },
      {
        title: 'Geen limiet op je verdiensten',
        body: 'Verwijs 10 klanten door of 10.000. Er is geen maximum aan wat je kunt verdienen.',
      },
      {
        title: '3 maanden attributie',
        body: 'Een klant telt voor jou als die zich binnen 3 maanden na een klik op je link aanmeldt.',
      },
      {
        title: 'Maandelijkse uitbetaling',
        body: 'Je krijgt elke maand uitbetaald via PayPal of Wise zodra je het minimum van US$ 50 bereikt.',
      },
    ],
  },
  how: {
    eyebrow: 'Zo werkt het',
    h2: 'Van aanmelding tot eerste uitbetaling in dagen, niet in maanden',
    steps: [
      {
        title: 'Aanmelden in 30 seconden',
        body: 'Meld je aan voor het programma en ontvang direct je unieke partnerlink. Geen intakegesprek, geen wachttijd.',
      },
      {
        title: 'Deel je link',
        body: 'Promoot Giggal.ai op je blog, in je nieuwsbrief, op social media, op YouTube of direct bij klanten die schonere e-maillijsten nodig hebben.',
      },
      {
        title: 'Elke maand uitbetaald',
        body: 'Verdien 20% van elke betaling van je doorverwezen klanten. Dit wordt automatisch bijgehouden en elke maand uitbetaald.',
      },
    ],
  },
  earn: {
    eyebrow: 'Jouw potentieel',
    h2: 'Dit kun je verdienen',
    sub: 'Gebaseerd op klanten met ons meest gekozen pakket van 100.000 credits (US$ 76/maand). Andere pakketten leveren ook 20% op.',
    colCustomers: 'Doorverwezen klanten',
    colPlan: 'Pakket',
    colEarnings: 'Jouw verdiensten per maand',
    perMonth: '/maand',
    note: 'Deze cijfers zijn voorbeelden. Wat je echt verdient, hangt af van het pakket dat je doorverwezen klanten kiezen.',
  },
  who: {
    eyebrow: 'Voor wie',
    h2: 'Gemaakt voor mensen die om bezorgbaarheid geven',
    sub: 'Verstuurt je publiek e-mail? Dan is het ook een publiek voor Giggal.ai.',
    cards: [
      {
        title: 'E-mailmarketeers',
        body: 'Raad de tool aan die je al vertrouwt om lijsten op te schonen voor een campagne.',
      },
      {
        title: 'Bureaus',
        body: 'Verdien terugkerende inkomsten aan elke klant die je aanmeldt.',
      },
      {
        title: 'Makers van cursussen',
        body: 'Neem Giggal.ai op in je cursus over cold e-mail of leadgeneratie.',
      },
      {
        title: 'SaaS-communities',
        body: 'Deel Giggal.ai met je publiek van marketeers, oprichters en growth-professionals.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Veelgestelde vragen',
    items: [
      {
        q: 'Wanneer en hoe word ik betaald?',
        a: 'Uitbetalingen gaan elke maand via PayPal of Wise (naar keuze), zodra je openstaande saldo US$ 50 bereikt. We houden geen deel van je saldo achter. Zodra een doorverwezen klant betaalt, is de commissie van jou.',
      },
      {
        q: 'Hoe lang loopt de commissie?',
        a: 'Zolang je doorverwezen klant blijft betalen. Blijft die 3 jaar klant, dan verdien je 3 jaar lang 20% van elke betaling. Het zijn echte terugkerende inkomsten.',
      },
      {
        q: 'Wat als mijn doorverwezen klant opzegt?',
        a: 'Je verdient geen commissie meer op die klant zodra die opzegt. Neemt die later opnieuw een abonnement met hetzelfde account, dan loopt de commissie weer door.',
      },
      {
        q: 'Hoe lang is de attributieperiode?',
        a: 'De tracking duurt 3 maanden vanaf het moment dat iemand op je link klikt. Meldt die persoon zich binnen die periode aan, dan wordt de klant aan jou toegekend.',
      },
      {
        q: 'Mag ik Giggal.ai promoten op YouTube, blogs en met betaalde advertenties?',
        a: 'Ja voor YouTube, blogs, nieuwsbrieven, social media en Reddit. Betaalde advertenties op zoekwoorden met onze merknaam (bijvoorbeeld "Giggal.ai") zijn niet toegestaan. Al het andere mag.',
      },
      {
        q: 'Moet ik klant zijn om mee te doen?',
        a: 'Nee, maar we raden je sterk aan om het product eerst te proberen (je krijgt 1.000 gratis credits). Zo kun je het aanraden op basis van je eigen ervaring.',
      },
      {
        q: 'Is er een minimumbedrag voor uitbetaling?',
        a: 'Ja, US$ 50. Commissie die nog niet is uitbetaald, wordt meegenomen naar de volgende maand tot je dat bedrag bereikt. Daarna wordt die automatisch uitbetaald.',
      },
    ],
    more: 'Heb je nog vragen?',
    talk: 'Neem contact op',
  },
  final: {
    h2: 'Klaar om doorverwijzingen om te zetten in terugkerende inkomsten?',
    text: 'Meld je aan in 30 seconden en verdien 20% commissie op elke betaling van je doorverwezen klanten.',
    checks: ['Gratis deelname', 'Geen goedkeuring nodig', 'Levenslange commissie'],
  },
}
