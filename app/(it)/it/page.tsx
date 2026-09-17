import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Star, MailCheck, MailPlus } from 'lucide-react'
import AnnouncementBar from '@/components/AnnouncementBar'
import NavbarIt from '@/components/it/NavbarIt'
import FooterIt from '@/components/it/FooterIt'
import CtaBandIt from '@/components/it/CtaBandIt'
import VerifierConsole from '@/components/landing/VerifierConsole'
import PricingTable from '@/components/landing/PricingTable'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import Wordmark from '@/components/Wordmark'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { announcement, consoleStrings, pricing, SIGNUP_URL } from '@/lib/i18n/it'

// Italian home. No head term of its own in the data (the demand sits on
// /it/verifica-email), so the page is the product pitch in Italian: what
// Giggal does with catch-all addresses, how bulk works, prices, FAQ. The
// hero sends the visitor to the free checker first and to sign-up second.

const DESC =
  'Servizio di verifica email e verifica in blocco con un chiaro valida o non valida su ogni indirizzo, catch-all inclusi. 98,5% di precisione, 1.000 crediti.'

export const metadata: Metadata = {
  title: { absolute: 'Verifica Email per Liste e Domini Catch-All | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/it', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: 'Verifica email per liste e domini catch-all',
    description: DESC,
    url: 'https://giggal.ai/it',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
  twitter: { card: 'summary_large_image', title: 'Verifica email per liste e domini catch-all', description: DESC },
}

const faqItems: FaqItem[] = [
  {
    q: 'Cosa fa Giggal.ai di diverso dagli altri verificatori?',
    a: 'Risolve gli indirizzi catch-all e quelli protetti da gateway di sicurezza (Mimecast, Proofpoint, Barracuda) con un verdetto chiaro, valida o non valida, invece dell\'etichetta "a rischio" con cui gli altri strumenti si arrendono. Su una lista B2B quegli indirizzi sono circa un terzo del totale.',
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
    a: 'Sì: CSV, TXT o Excel. I risultati arrivano in pochi minuti anche su liste grandi, con esportazione in CSV, Excel o JSON e i duplicati rimossi.',
  },
  {
    q: 'Esiste un\'API?',
    a: 'Sì, una REST API con verifica singola e in blocco, più un server MCP per usare la verifica da Claude, ChatGPT e Cursor. La documentazione è in inglese.',
  },
  {
    q: 'Posso provare un singolo indirizzo senza registrarmi?',
    a: 'Sì, con lo strumento gratuito di verifica email: nessuna registrazione, nessuna carta, nessuna email inviata al destinatario.',
  },
]

const features = [
  { title: 'Pulizia di liste in blocco', body: 'Carica un file CSV o TXT e verifica migliaia di contatti in pochi minuti, con i duplicati rimossi.' },
  { title: 'Verifica catch-all', body: 'Conferma lo stato di consegna sui domini aziendali catch-all che i controlli standard segnano come sconosciuti.' },
  { title: 'Gateway di sicurezza', body: 'Verifica le caselle dietro Proofpoint, Mimecast e Barracuda, dove la maggior parte dei verificatori si ferma.' },
  { title: 'API per sviluppatori', body: 'Integra la verifica in tempo reale nei moduli di registrazione o nelle tue applicazioni.' },
  { title: 'Integrazioni', body: 'Sincronizza i contatti verificati con HubSpot, Mailchimp, Zapier, n8n e i principali strumenti di outreach.' },
  { title: 'Prezzi pubblici', body: 'Ogni fascia di volume è pubblicata, a consumo o in abbonamento con il 10% di sconto.' },
]

export default function HomeIt() {
  return (
    <main className="has-ann relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={faqPageLd(faqItems)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <AnnouncementBar strings={announcement} />
      <NavbarIt />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
            Servizio di verifica email <br />
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">che risolve i catch-all</span>
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
            Software di verifica email che controlla la casella reale, non solo la sintassi. Tasso di
            rimbalzo{' '}
            <strong className="text-indigo-600 font-extrabold">sotto il 3%</strong>, e il{' '}
            <strong className="text-slate-900 font-extrabold">30% di ogni lista B2B</strong> che gli
            altri segnano &quot;a rischio&quot; torna consegnabile.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl font-medium !mt-3">
            <a href="#blocco" className="text-indigo-600 font-bold hover:underline">
              Verifica in blocco
            </a>{' '}
            fino a 50.000 indirizzi per file, più una API. Funziona sui{' '}
            <Link href="/it/verifica-catch-all" className="text-indigo-600 font-bold hover:underline">
              domini catch-all
            </Link>
            .
          </p>

          <div className="pt-6 !mt-6 border-t border-slate-200/80 space-y-1">
            <p className="text-slate-900 font-black text-base">1.000 verifiche gratuite</p>
            <p className="text-slate-500 text-xs font-semibold leading-normal">Inizia subito a pulire la tua lista. Nessuna carta richiesta.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link
              href="/it/verifica-email"
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-center text-sm sm:w-auto"
            >
              Prova la verifica gratis
            </Link>
            <Link
              href="/it/prezzi"
              className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-indigo-600" /> Vedi i prezzi
            </Link>
          </div>

          <div className="flex items-center gap-3 !mt-6 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-0.5 text-amber-400" aria-hidden="true">
              <Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" /><Star className="w-3.5 h-3.5 fill-current" />
            </span>
            <span>4,8 su G2 &middot; oltre 500 milioni di email verificate</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 card-vivid-shadow">
            {[
              { n: '500M+', l: 'Email verificate' },
              { n: '98,5%', l: 'Precisione sulle liste aziendali' },
              { n: '< 3%', l: 'Tasso di rimbalzo dopo la pulizia' },
              { n: '1.000', l: 'Crediti gratis, senza carta' },
            ].map((s) => (
              <div key={s.l} className="bg-white p-6 text-center">
                <p className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">{s.n}</p>
                <p className="text-[12px] font-semibold text-slate-500 mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Console */}
      <section className="cv-section max-w-5xl mx-auto px-6 pt-8 pb-24 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Verifica un indirizzo in tempo reale</h2>
          <p className="text-slate-600 text-sm font-medium">
            Lo stesso motore della verifica in blocco, un indirizzo alla volta. Gratis e senza registrazione.
          </p>
        </div>
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
      </section>

      {/* Catch-all */}
      <section className="cv-section max-w-5xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Perché gli indirizzi catch-all hanno bisogno di un verdetto vero</h2>
          <p className="text-slate-600 text-sm font-medium">
            Un{' '}
            <Link href="/it/blog/cos-e-un-indirizzo-email-catch-all" className="text-indigo-600 font-bold hover:underline">
              dominio catch-all
            </Link>{' '}
            accetta la posta per qualsiasi indirizzo, reale o no, quindi la risposta SMTP su cui si
            basano gli strumenti standard non dice nulla. Loro scrivono &quot;a rischio&quot; e ti
            lasciano una scommessa al buio su un terzo della lista:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 card-vivid-shadow">
            <span className="text-xs font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">Verificatori standard</span>
            <span className="text-6xl sm:text-7xl font-black text-rose-500 tracking-tight leading-none mt-2">35%</span>
            <span className="text-xs font-extrabold text-rose-600 uppercase tracking-wider">Rischio medio di rimbalzo</span>
            <div className="w-full max-w-[200px] h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-rose-500 rounded-full" style={{ width: '80%' }} />
            </div>
            <p className="text-[11px] text-slate-500 font-bold leading-relaxed max-w-xs pt-2">
              Ti costringono a buttare via contatti validi o a rischiare il blocco dei tuoi domini di invio.
            </p>
          </div>
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center space-y-4 card-vivid-shadow ring-2 ring-indigo-600/5 relative overflow-hidden">
            <div className="flex items-center bg-indigo-50/60 border border-indigo-100/60 px-4 py-2 rounded-2xl">
              <Wordmark className="text-base sm:text-lg" />
              <span className="text-[9px] font-black uppercase text-indigo-600 tracking-wider bg-white px-2 py-0.5 rounded-md shadow-sm ml-2.5">Verificato</span>
            </div>
            <span className="text-6xl sm:text-7xl font-black text-emerald-500 tracking-tight leading-none mt-2">&lt;3%</span>
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-wider">Rimbalzi in uscita garantiti</span>
            <div className="w-full max-w-[200px] h-2 bg-slate-100 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '5%' }} />
            </div>
            <p className="text-[11px] text-slate-500 font-bold leading-relaxed max-w-xs pt-2">
              Identifica le caselle aziendali attive, così puoi fare outreach con la certezza di essere letto.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="blocco" className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-16 scroll-mt-28">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Pulizia liste email in blocco, API e integrazioni con un solo saldo crediti</h2>
          <p className="text-slate-600 text-sm font-medium">
            Carica una lista, chiama l&apos;API o collega il CRM: ogni strada esegue la stessa verifica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white border-2 border-slate-200 rounded-3xl p-7 space-y-3 card-vivid-shadow">
              <h3 className="text-lg font-black text-slate-900 tracking-tight">{f.title}</h3>
              <p className="text-[13.5px] text-slate-600 font-medium leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="prezzi" className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Prezzi semplici, in dollari USA</h2>
          <p className="text-slate-600 text-sm font-medium">Paghi solo quello che usi. I crediti non scadono.</p>
        </div>
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-2.5 text-center sm:text-left">
            <MailCheck className="w-4 h-4 text-indigo-600 shrink-0" />
            <p className="text-xs font-bold text-slate-700">
              {pricing.formula}{' '}
              <span className="font-semibold text-slate-500">{pricing.formulaNote}</span>{' '}
              = <strong className="text-indigo-700 font-extrabold">{pricing.formulaCredit}</strong>
            </p>
          </div>
        </div>
        <PricingTable strings={pricing} />
        <div className="bg-indigo-50/50 border-2 border-dashed border-indigo-200 rounded-3xl p-6 text-center max-w-2xl mx-auto shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 border border-indigo-200/30">
              <MailPlus className="w-5 h-5" />
            </div>
            <div className="text-left text-sm font-semibold flex-1">
              <h4 className="text-slate-900 font-extrabold text-base leading-tight">{pricing.customTitle}</h4>
              <p className="text-slate-500 text-xs mt-0.5">{pricing.customText}</p>
            </div>
            <Link href="/it/contatti" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black rounded-xl transition-all shadow shrink-0 whitespace-nowrap">
              {pricing.customButton}
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Domande frequenti</h2>
        </div>
        <FaqAccordion items={faqItems} />
        <p className="text-center text-sm text-slate-500 font-medium">
          Altre domande?{' '}
          <Link href="/it/contatti" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1">
            Scrivici <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </section>

      <CtaBandIt headline="Inizia con 1.000 verifiche gratuite" />
      <FooterIt />
    </main>
  )
}
