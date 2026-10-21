import type { Metadata } from 'next'
import Link from 'next/link'
import CatchAllPageL10n, { type CatchAllContent } from '@/components/l10n/CatchAllPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Dutch catch-all page. Title from the keyword plan, with the searched phrase
// "catch all email" (SEO-Plan/i18n-batch1-nl-pl-keyword-plan.md section 3).
// "What is catch all email" is answered in the first H2. The title carries
// no brand suffix so it stays within 64 characters.

const PATH = '/nl/catch-all-verificatie'
const DESC =
  'Catch all email verificatie: geldig of ongeldig op catch-all- en accept-all-domeinen, ook achter Mimecast en Proofpoint. 98,5% nauwkeurig, 1 credit per adres.'

export const metadata: Metadata = {
  title: { absolute: 'Catch all email verificatie: catch-all-adressen controleren' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'nl_NL',
    title: 'Catch all email verificatie: catch-all-adressen controleren',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai e-mailverificatie' }],
  },
}

const content: CatchAllContent = {
  path: PATH,
  crumb: 'Catch-all-verificatie',
  h1Accent: 'Catch-all-verificatie',
  h1Tail: 'met een duidelijk resultaat voor elk adres',
  intro:
    'De meeste verificatietools stoppen bij catch-all- en accept-all-domeinen. Giggal.ai controleert of elke mailbox echt bestaat, ook achter beveiligingsgateways zoals Mimecast en Proofpoint. De nauwkeurigheid is 98,5%.',
  toolLine: (
    <>
      Wil je één adres controleren? Gebruik dan de{' '}
      <Link href="/nl/mailadres-controleren" className="text-indigo-600 font-bold hover:underline">gratis email checker</Link>.
    </>
  ),
  ctaPrimary: 'Catch-all-adressen controleren',
  ctaSecondary: { label: 'Bekijk de prijzen', href: '/nl/prijzen' },
  ctaNote: 'Je start met 1.000 gratis credits. Geen creditcard nodig.',
  card: {
    kicker: 'Diepe verificatie actief', title: 'Resultaten van de lijst', file: 'contacten_2026.csv',
    valid: '39.113', invalid: '10.508', risky: '0',
    note: 'In een gemiddelde lijst staat ongeveer 30% van de adressen op catch-all-domeinen. Wij controleren ze een voor een. De meeste blijken geldig.',
    labels: { valid: 'Geldig', invalid: 'Ongeldig', risky: 'Riskant' },
  },
  whatKicker: 'De achtergrond',
  whatTitle: 'Wat is catch all email?',
  whatParas: [
    'Een catch-all-domein accepteert alle e-mail die binnenkomt, ook voor adressen die niet bestaan. De server geeft op elk adres een algemene bevestiging. Een gewone controle kan daardoor niet zien of er een echte mailbox achter zit.',
    'In een gemiddelde zakelijke lijst staat ongeveer 30% van de contacten op catch-all-domeinen. De meeste tools herkennen dit patroon en stoppen. Ze markeren alles als riskant of onbekend. Je houdt dan een lange lijst contacten over die je niet met vertrouwen kunt gebruiken.',
    'Je hebt dan twee keuzes, en beide zijn slecht. Je verstuurt toch en riskeert bounces, spamvallen en een slechtere reputatie. Of je verwijdert de contacten en verliest echte klanten. Catch-all-verificatie lost dit op: we controleren of de mailbox echt bestaat, in plaats van te gokken.',
  ],
  sameH3: 'Catch-all en accept-all zijn hetzelfde',
  sameParas: [
    'Sommige tools schrijven "accept all", andere "catch-all" of "catchall". Ze bedoelen dezelfde instelling: een domein waarvan de mailserver met 250 OK antwoordt op elke ontvanger. Welk label je vorige tool ook gebruikte, de oplossing is dezelfde. Die oplossing staat op deze pagina.',
  ],
  howKicker: 'Zo werkt het',
  howTitle: 'Zo controleert Giggal.ai catch-all-adressen',
  howText: 'Elk catch-all-adres gaat door meerdere controles. Samen geven die één duidelijk resultaat. Je ziet geldig of ongeldig, geen technisch rapport.',
  signals: [
    { title: 'Diepe controle van de mailbox', body: 'We controleren of elke mailbox echt bestaat, niet alleen of het domein alles accepteert. Een gewone controle ziet een algemene bevestiging en stopt. Wij gaan door tot er een echt antwoord is.' },
    { title: 'Vertrouwenssignalen van het domein', body: 'We bekijken de instellingen van elk domein: SPF-, DKIM- en DMARC-records, SSL-certificaten en de reputatie van de hosting. Goed ingestelde domeinen hebben veel vaker echte mailboxen.' },
    { title: 'Beveiligingsgateways', body: 'Adressen achter gateways zoals Mimecast, Proofpoint en Barracuda controleren we rechtstreeks. De gateway verbergt dan niet meer of er een echte mailbox achter het adres zit.' },
  ],
  compareKicker: 'Duidelijke resultaten',
  compareTitle: 'Van gokken naar resultaten',
  compareText: 'Het verschil tussen een gewone verificatietool en Giggal.ai op dezelfde lijst van 48.000 adressen.',
  compare: {
    typicalLabel: 'Een gewone verificatietool', giggalLabel: 'Giggal.ai', count: '48.028 adressen gecontroleerd', catchAllLabel: 'Catch-all',
    typical: ['31.566', '5.982', '10.480'], giggal: ['39.950', '8.078', '0'],
    typicalNote: 'Meer dan 10.000 catch-all-contacten die je niet met vertrouwen kunt mailen. Ongeveer 80% is echt, maar je weet niet welke.',
    giggalNote: 'Ongeveer 8.400 extra bezorgbare contacten uit de catch-all-groep. Elk adres heeft een duidelijk resultaat.',
  },
  whoKicker: 'Voor wie',
  whoTitle: 'Wie gebruikt catch-all-verificatie',
  audience: [
    { title: 'Outreachteams', body: 'Je mailt alleen geverifieerde contacten. Minder bounces, meer reacties en gezondere verzenddomeinen.' },
    { title: 'Bureaus', body: 'Schoon de lijst van elke klant op met dezelfde tool. Zo blijven rapporten en bezorgbaarheid voorspelbaar.' },
    { title: 'Sales operations', body: 'Houd in je CRM alleen de contacten die je e-mailreeksen en updates echt ontvangen.' },
    { title: 'Nieuwsbrieven', body: 'Bescherm je open- en klikcijfers. Verwijder adressen die echt lijken maar nooit worden bezorgd.' },
  ],
  faqTitle: 'Veelgestelde vragen',
  faq: [
    { q: 'Wat is een catch-all-domein?', a: 'Een domein dat alle e-mail accepteert, ook naar adressen die niet bestaan. De server zegt "ja, dit adres bestaat" op elk adres. Daarom kunnen gewone controles niet zien of een bepaalde mailbox echt is.' },
    { q: 'Kost catch-all-verificatie extra credits?', a: 'Nee. Het kost 1 credit per adres, precies zoals een gewone controle.' },
    { q: 'Hoe nauwkeurig is catch-all-verificatie?', a: 'Ongeveer 98,5% op zakelijke lijsten. We gokken niet op basis van oppervlakkige antwoorden. We controleren of de mailbox echt bestaat. Daardoor klopt het resultaat ook op het moment dat je verstuurt.' },
    { q: 'Wordt de rest van de lijst er trager door?', a: 'Nee. De catch-all-controles lopen tegelijk met de gewone verificatie, niet erna. De hele lijst is in dezelfde tijd klaar.' },
    { q: 'Kan ik alleen de catch-all-adressen controleren van een lijst die al elders is opgeschoond?', a: 'Ja. Open in het dashboard Catch-All Detection. Plak of upload alleen de adressen die je wilt controleren en start de verificatie. De prijs is dezelfde: 1 credit per adres.' },
    { q: 'Wat als een catch-all-controle "onbekend" geeft?', a: 'Dat gebeurt zelden. Als we geen resultaat krijgen, krijg je de credit automatisch terug. Je betaalt alleen voor controles met een resultaat.' },
  ],
  ctaHeadline: 'Controleer een lijst en vergelijk de resultaten',
}

export default function CatchAllVerificatiePage() {
  return <CatchAllPageL10n locale="nl" content={content} />
}
