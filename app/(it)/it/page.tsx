import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Italian home. No head term of its own in the data (the demand sits on
// /it/verifica-email), so the page is the product pitch in Italian: what
// Giggal does with catch-all addresses, how bulk works, prices, FAQ. The
// hero's email box opens the free checker; the amber button goes to sign-up.
// Keeps the plan's phrases: "servizio di verifica email" (H1), "software di
// verifica email", "verifica in blocco", "pulizia liste email" (H2), catch-all.

const DESC =
  'Servizio di verifica email e verifica in blocco con un chiaro valida o non valida su ogni indirizzo, catch-all inclusi. 98,5% di precisione, 1.000 crediti.'

export const metadata: Metadata = {
  title: { absolute: 'Servizio di Verifica Email e Verifica in Blocco | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/it', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: 'Servizio di verifica email e verifica in blocco',
    description: DESC,
    url: 'https://giggal.ai/it',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
  twitter: { card: 'summary_large_image', title: 'Servizio di verifica email e verifica in blocco', description: DESC },
}

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'Servizio di verifica email',
  h1Accent: 'per ridurre i rimbalzi',
  heroSub: (
    <>
      Software di verifica email per la verifica in blocco: scopri quali indirizzi sono reali, anche sui{' '}
      <Link href="/it/verifica-catch-all" className={heroLink}>domini catch-all</Link>.
    </>
  ),
  rating: { on: 'su', reviews: (n) => `(${n} recensioni)` },
  email: { label: 'Indirizzo email da verificare', placeholder: 'nome@azienda.it', button: 'Verifica gratis' },
  listQuestion: 'Devi pulire un’intera lista?',
  listCta: 'Ottieni 1.000 verifiche email gratis',
  noCard: 'Nessuna carta richiesta.',
  stats: [
    { n: '500M', suf: '+', l: 'Email verificate' },
    { n: '98,5', suf: '%', l: 'Precisione sulle liste aziendali' },
    { pre: '<', n: '3', suf: '%', l: 'Tasso di rimbalzo dopo la pulizia' },
    { n: '1.000', l: 'Crediti gratis, senza carta' },
  ],
  bulk: {
    id: 'blocco',
    title: 'Verifica email in blocco per tutta la lista',
    sub: 'Carica la lista una volta sola: controlliamo ogni singolo indirizzo.',
    points: [
      'Per ogni email: valida o non valida',
      'Risposta certa anche per gli indirizzi catch-all',
      'CSV o Excel, fino a 50.000 indirizzi per file',
      'Scarica la lista pulita con le email verificate',
    ],
  },
  catchAll: {
    title: 'Perché gli indirizzi catch-all meritano attenzione',
    intro: (
      <>
        Alcuni server di posta aziendali accettano qualsiasi indirizzo, reale o inventato. In questo caso si parla di{' '}
        <Link href="/it/blog/cos-e-un-indirizzo-email-catch-all" className={link}>dominio catch-all</Link>. La
        maggior parte dei verificatori non vede la differenza, quindi segna queste email come &quot;a rischio&quot; e
        lascia a te la scelta.
      </>
    ),
    others: 'La maggior parte dei verificatori',
    othersDetail: 'Catch-all, nessuna risposta chiara',
    ourDetail: 'Catch-all, casella trovata',
    risky: 'A rischio',
    deliverable: 'Consegnabile',
    othersText: 'Ora tocca a te: invii e rischi un rimbalzo, oppure cancelli un contatto che forse è reale.',
    ourText: 'Sai che è reale, quindi invii. Niente supposizioni.',
  },
  features: {
    title: 'Pulizia liste email in blocco, API e integrazioni con un solo saldo crediti',
    intro: 'Carica una lista, chiama l’API o collega il CRM: ogni strada esegue la stessa verifica.',
    items: [
      { title: 'Pulizia di liste in blocco', body: 'Carica un file CSV o Excel e ricevi i risultati in pochi minuti.', points: ['Fino a 50.000 indirizzi per file', 'Scarica la lista pulita in CSV'], link: 'Pulisci una lista gratis' },
      { title: 'Verifica catch-all', body: 'Una risposta certa sui domini catch-all, non "a rischio".', points: ['Costa quanto ogni altra verifica', 'Funziona dietro gateway come Mimecast e Proofpoint'], link: 'Come funziona la verifica catch-all' },
      { title: 'API per sviluppatori', body: 'Verifica gli indirizzi nei moduli di registrazione e nelle tue app.', points: ['Un indirizzo o una lista intera per chiamata', 'Chiavi API dalla tua dashboard'], link: 'Documentazione API (in inglese)' },
      { title: 'Integrazioni con CRM e app', body: 'Invia i contatti puliti a HubSpot, Mailchimp e altri.', points: ['Funziona con gli strumenti che usi già', 'Zapier e n8n per tutto il resto'], link: 'Vedi tutte le integrazioni' },
      { title: 'Prezzi a consumo', body: 'Tutti i prezzi sono pubblici. I crediti non scadono.', points: ['Nessun abbonamento obbligatorio', 'Ricarichi solo quando ti serve'], link: 'Vedi tutti i prezzi' },
      { title: 'Supporto prioritario', body: 'Bloccato su qualcosa? I nostri tecnici ti aiutano direttamente.', points: ['Persone vere, non un bot', 'Scrivici per email o dal modulo di contatto'], link: 'Contatta il supporto' },
    ],
    preview: {
      done: 'Fatto',
      deliverable: 'Consegnabile',
      undeliverable: 'Non consegnabile',
      otherTools: 'Altri strumenti',
      risky: 'A rischio',
      credit: '1 credito',
      email: '1 email',
      creditNote: 'Verifica catch-all inclusa',
      reply: '24 ore',
      replyNote: 'Il nostro tempo di risposta abituale.',
    },
  },
  reviewBadges: REVIEW_BADGES.it,
  reviewWall: REVIEW_WALL.it,
  pricing: {
    id: 'prezzi',
    claimTop: 'Prezzo basso.',
    claimBottom: 'Valore alto.',
    fallbackTitle: 'Prezzi semplici, in dollari USA',
    priceLine: (p) => `${p} per 10.000 email, verifica catch-all inclusa.`,
    claim: { before: '', link: 'Confronta con gli altri verificatori', after: '.' },
    text: 'Paghi solo quello che usi. I crediti non scadono.',
  },
  switcher: {
    id: 'alternative',
    title: 'Stai passando da un altro verificatore?',
    intro: 'Confronta Giggal.ai con altri strumenti di verifica email su catch-all, prezzi e precisione.',
    items: [
      { name: 'ZeroBounce', href: '/it/alternativa-a-zerobounce', blurb: 'Risolvi gli indirizzi catch-all che ZeroBounce segna come a rischio.' },
      { name: 'NeverBounce', href: '/it/alternativa-a-neverbounce', blurb: 'Prezzi a consumo, con crediti che non scadono mai.' },
      { name: 'Snov.io', href: '/it/alternativa-a-snovio', blurb: 'Un verificatore dedicato, non un modulo dentro una piattaforma di outreach.' },
      { name: 'ZeroBounce vs NeverBounce', href: '/it/confronto/zerobounce-vs-neverbounce', blurb: 'Le differenze su catch-all, prezzi e crediti.' },
    ],
    all: 'Confronta tutti i 28 verificatori (in inglese)',
  },
  integrations: {
    title: 'Collega i tuoi strumenti di marketing',
    sub: 'Giggal.ai si collega ai principali CRM e servizi di email marketing per sincronizzare i contatti puliti in automatico.',
    more: 'Altre 80+',
    alt: (n) => `Integrazione di ${n} con Giggal.ai per la verifica email`,
  },
  mcp: MCP.it,
  faq: {
    title: 'Domande frequenti',
    sub: 'Risposte brevi su catch-all, precisione, prezzi e configurazione.',
    more: 'Altre domande?',
    moreLink: 'Scrivici',
    items: [
      {
        q: 'Cosa fa Giggal.ai di diverso dagli altri verificatori?',
        a: 'Risolve gli indirizzi catch-all e quelli protetti da gateway di sicurezza (Mimecast, Proofpoint, Barracuda) con un risultato chiaro, valida o non valida, invece dell\'etichetta "a rischio" con cui gli altri strumenti si arrendono. Su una lista B2B quegli indirizzi sono circa un terzo del totale.',
      },
      {
        q: 'Quanto è precisa la verifica?',
        a: 'Il 98,5% sulle liste aziendali, con un tasso di rimbalzo che resta sotto il 3% dopo la pulizia. Sui risultati "sconosciuta" i crediti vengono rimborsati.',
      },
      {
        q: 'Come funzionano i crediti?',
        a: 'Una verifica consuma un credito, qualunque sia il tipo di indirizzo: catch-all e gateway compresi. I crediti non scadono. I primi 1.000 sono gratuiti, senza carta.',
      },
      {
        q: 'Posso caricare un file?',
        a: 'Sì: CSV o Excel, fino a 50.000 indirizzi per file. I risultati arrivano in pochi minuti anche su liste grandi, e la lista pulita si scarica in CSV.',
      },
      {
        q: 'Esiste un\'API?',
        a: 'Sì, una REST API con verifica singola e in blocco, più un server MCP per usare la verifica da Claude, ChatGPT e Cursor. La documentazione è in inglese.',
      },
      {
        q: 'Posso provare un singolo indirizzo senza registrarmi?',
        a: 'Sì, con lo strumento gratuito di verifica email: nessuna registrazione, nessuna carta, nessuna email inviata al destinatario.',
      },
    ],
  },
  ctaHeadline: 'Inizia con 1.000 verifiche gratuite',
}

export default function HomeIt() {
  return <HomeL10n locale="it" content={content} />
}
