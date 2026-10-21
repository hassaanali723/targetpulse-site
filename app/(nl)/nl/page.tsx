import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Dutch home, one page for the Netherlands and Flanders. The title follows
// the keyword plan ("E-mailverificatie en email checker",
// SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md section 3); the main search
// demand sits on /nl/mailadres-controleren. The hero sends the visitor to the
// free checker first and to sign-up second. No gateway line in the hero, no
// G2 rating in the proof line. Only the alternatives registered for nl are
// listed (no Hunter, no Apollo).

const DESC =
  'E-mailverificatie die ook op catch-all-domeinen de mailbox bevestigt: bouncepercentage onder 3%, bulk e-mailverificatie, API en 1.000 gratis credits.'

export const metadata: Metadata = {
  title: { absolute: 'E-mailverificatie en email checker, ook in bulk | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/nl', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'nl_NL',
    title: 'E-mailverificatie en email checker, ook in bulk',
    description: DESC,
    url: 'https://giggal.ai/nl',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-mailverificatie' }],
  },
  twitter: { card: 'summary_large_image', title: 'E-mailverificatie en email checker, ook in bulk', description: DESC },
}

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'E-mailverificatie',
  h1Accent: 'voor minder bounces',
  heroSub: (
    <>
      E-mailverificatie voor losse adressen en hele lijsten. Je ziet welke adressen echt zijn, ook op{' '}
      <Link href="/nl/catch-all-verificatie" className={heroLink}>catch-all-domeinen</Link>.
    </>
  ),
  rating: { on: 'op', reviews: (n) => `(${n} reviews)` },
  email: { label: 'E-mailadres om te controleren', placeholder: 'naam@bedrijf.nl', button: 'Gratis controleren' },
  listQuestion: 'Een hele lijst opschonen?',
  listCta: 'Krijg 1.000 gratis e-mailverificaties',
  noCard: 'Geen creditcard nodig.',
  stats: [
    { n: '500 mln', suf: '+', l: 'Gecontroleerde e-mails' },
    { n: '98,5', suf: '%', l: 'Nauwkeurigheid op B2B-lijsten' },
    { pre: '< ', n: '3', suf: '%', l: 'Bouncepercentage na het opschonen' },
    { n: '1.000', l: 'Gratis credits, zonder creditcard' },
  ],
  bulk: {
    id: 'bulk',
    title: 'Bulk e-mailverificatie voor je hele lijst',
    sub: 'Upload je lijst één keer. Wij controleren elk adres dat erin staat.',
    points: [
      'Geldig of ongeldig voor elk adres',
      'Een echt antwoord, ook voor catch-all-adressen',
      'CSV of Excel, tot 50.000 adressen per bestand',
      'Download de opgeschoonde lijst zodra die klaar is',
    ],
  },
  catchAll: {
    title: 'Waarom catch-all-adressen aandacht nodig hebben',
    intro: (
      <>
        Sommige zakelijke mailservers accepteren elk adres, echt of verzonnen. Dat heet een{' '}
        <Link href="/nl/catch-all-verificatie" className={link}>catch-all-domein</Link>. De meeste
        verificatietools zien het verschil niet. Ze markeren deze adressen als &quot;riskant&quot; en laten de keuze aan jou.
      </>
    ),
    others: 'De meeste verificatietools',
    othersDetail: 'Catch-all, geen duidelijk antwoord',
    ourDetail: 'Catch-all, mailbox gevonden',
    risky: 'Riskant',
    deliverable: 'Bezorgbaar',
    othersText: 'Nu moet jij kiezen: versturen en een bounce riskeren, of een contact verwijderen dat misschien echt is.',
    ourText: 'Je weet dat het adres echt is. Je kunt het zonder twijfel mailen.',
  },
  features: {
    title: 'Email checker en email verificatie: bulk, API en integraties met één saldo',
    intro: 'Upload een lijst, roep de API aan of koppel je CRM. Elke route voert dezelfde controle van het e-mailadres uit.',
    items: [
      { title: 'Lijsten in bulk opschonen', body: 'Upload een CSV- of Excel-bestand en krijg de resultaten binnen enkele minuten.', points: ['Tot 50.000 adressen per bestand', 'Opgeschoonde lijst downloaden als CSV'], link: 'Gratis een lijst opschonen' },
      { title: 'Catch-all-verificatie', body: 'Een echt antwoord op catch-all-domeinen, in plaats van "riskant".', points: ['Eén credit, net als elke andere controle', 'Werkt achter gateways zoals Mimecast en Proofpoint'], link: 'Zo werkt catch-all-verificatie' },
      { title: 'API voor ontwikkelaars', body: 'Controleer adressen in je aanmeldformulieren en je apps.', points: ['Eén adres of een hele lijst per aanroep', 'API-sleutels in je dashboard'], link: 'API-documentatie' },
      { title: 'Integraties met CRM en apps', body: 'Stuur opgeschoonde contacten naar HubSpot, Mailchimp en meer.', points: ['Werkt met de tools die je al gebruikt', 'Zapier en n8n voor al het andere'], link: 'Alle integraties bekijken' },
      { title: 'Betalen per gebruik', body: 'Alle prijzen zijn openbaar. Credits verlopen niet.', points: ['Geen maandelijkse verplichting', 'Bijkopen alleen als je het nodig hebt'], link: 'Alle prijzen bekijken' },
      { title: 'Support met voorrang', body: 'Heb je een probleem? Onze engineers helpen je direct.', points: ['Echte mensen, geen bot', 'Via e-mail of het contactformulier'], link: 'Contact opnemen met support' },
    ],
    preview: {
      done: 'Klaar',
      deliverable: 'Bezorgbaar',
      undeliverable: 'Niet bezorgbaar',
      otherTools: 'Andere tools',
      risky: 'Riskant',
      credit: '1 credit',
      email: '1 e-mail',
      creditNote: 'Inclusief catch-all-verificatie',
      reply: '24 uur',
      replyNote: 'Onze gebruikelijke reactietijd.',
    },
  },
  pricing: {
    id: 'prijzen',
    claimTop: 'Lage prijs.',
    claimBottom: 'Goede prijs-kwaliteitverhouding.',
    fallbackTitle: 'Eenvoudige prijzen in dollars',
    priceLine: (p) => `${p} voor 10.000 e-mails, inclusief catch-all-verificatie.`,
    claim: { before: '', link: 'Vergelijk met andere verificatietools', after: '.' },
    text: 'Je betaalt alleen voor wat je gebruikt. Credits verlopen niet.',
  },
  switcher: {
    id: 'alternatieven',
    title: 'Overstappen van een andere verificatietool?',
    intro: 'Vergelijk Giggal.ai met andere tools voor e-mailverificatie op catch-all, prijs en nauwkeurigheid.',
    items: [
      { name: 'ZeroBounce', href: '/nl/zerobounce-alternatief', blurb: 'Krijg een resultaat voor catch-all-adressen die ZeroBounce als riskant markeert.' },
      { name: 'NeverBounce', href: '/nl/neverbounce-alternatief', blurb: 'Betalen per gebruik, met credits die nooit verlopen.' },
      { name: 'Snov.io', href: '/nl/snovio-alternatief', blurb: 'Een aparte verificatietool, geen module in een outreachplatform.' },
      { name: 'ZeroBounce vs NeverBounce', href: '/nl/vergelijking/zerobounce-vs-neverbounce', blurb: 'De twee tools vergeleken op catch-all, prijzen en credits.' },
    ],
    all: 'Vergelijk alle 28 verificatietools (in het Engels)',
  },
  integrations: {
    title: 'Koppel je marketingtools',
    sub: 'Giggal.ai werkt samen met de grote CRM- en e-mailmarketingplatforms en synchroniseert opgeschoonde contacten automatisch.',
    more: 'Meer dan 80 andere',
    alt: (n) => `${n}-integratie voor e-mailverificatie met Giggal.ai`,
  },
  reviewBadges: REVIEW_BADGES.nl,
  reviewWall: REVIEW_WALL.nl,
  mcp: MCP.nl,
  faq: {
    title: 'Veelgestelde vragen',
    sub: 'Korte antwoorden over catch-all, nauwkeurigheid, prijzen en de installatie.',
    more: 'Nog andere vragen?',
    moreLink: 'Stuur ons een bericht',
    items: [
      {
        q: 'Wat maakt Giggal.ai anders dan andere verificatietools?',
        a: 'Giggal.ai geeft een duidelijk resultaat, geldig of ongeldig, voor catch-all-adressen en adressen achter beveiligingsgateways (Mimecast, Proofpoint, Barracuda). Andere tools stoppen daar met het label "riskant". In een B2B-lijst gaat het om ongeveer een derde van alle adressen.',
      },
      {
        q: 'Hoe nauwkeurig is de verificatie?',
        a: '98,5% op zakelijke lijsten. Het bouncepercentage blijft na het opschonen onder 3%. Voor resultaten met "onbekend" krijg je de credits terug.',
      },
      {
        q: 'Hoe werken de credits?',
        a: 'Eén controle kost één credit, voor elk type adres. Dat geldt ook voor catch-all-adressen en adressen achter een gateway. Credits verlopen niet. De eerste 1.000 zijn gratis, zonder creditcard.',
      },
      {
        q: 'Kan ik een bestand uploaden?',
        a: 'Ja. CSV of Excel, tot 50.000 adressen per bestand. Ook bij grote lijsten krijg je de resultaten binnen enkele minuten. De opgeschoonde lijst download je als CSV.',
      },
      {
        q: 'Is er een API?',
        a: 'Ja, een REST API voor losse controles en bulk e-mailverificatie. Er is ook een MCP-server, zodat je kunt controleren vanuit Claude, ChatGPT en Cursor.',
      },
      {
        q: 'Kan ik één adres testen zonder account?',
        a: 'Ja, met de gratis email checker. Je hebt geen account en geen creditcard nodig, en de ontvanger krijgt geen bericht.',
      },
    ],
  },
  ctaHeadline: 'Start met 1.000 gratis verificaties',
}

export default function HomeNl() {
  return <HomeL10n locale="nl" content={content} />
}
