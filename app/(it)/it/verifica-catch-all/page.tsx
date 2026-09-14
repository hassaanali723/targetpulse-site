import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight, Mail, Globe, ShieldCheck, CheckCircle2, AlertCircle, AlertTriangle,
  Megaphone, Building2, Users, MailCheck,
} from 'lucide-react'
import NavbarIt from '@/components/it/NavbarIt'
import FooterIt from '@/components/it/FooterIt'
import CtaBandIt from '@/components/it/CtaBandIt'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbIt } from '@/lib/i18n/schemaIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { SIGNUP_URL } from '@/lib/i18n/it'

// The product explainer for catch-all verification, in Italian. Mirrors the
// sections of /catch-all-verification without the animated toggle card: the
// before/after numbers are shown as two static cards.

const PATH = '/it/verifica-catch-all'
const DESC =
  'Verifica catch-all che restituisce valida o non valida sui domini accept-all, anche dietro Mimecast e Proofpoint. 98,5% di precisione, 1 credito a email.'

export const metadata: Metadata = {
  title: { absolute: 'Verifica Catch-All: Valida o Non Valida, Non a Rischio | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: 'Verifica catch-all: valida o non valida, non a rischio',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
}

const signals = [
  { Icon: Mail, wrap: 'bg-indigo-600 shadow-indigo-600/10', title: 'Verifica profonda della casella', body: 'Confermiamo l\'esistenza reale di ogni casella, non solo che il dominio accetti tutto. Dove un controllo SMTP standard vede un\'accettazione generica e si ferma, noi continuiamo fino a una risposta vera.' },
  { Icon: Globe, wrap: 'bg-violet-600 shadow-violet-600/10', title: 'Segnali di fiducia del dominio', body: 'Analizziamo la configurazione di ogni dominio: record SPF, DKIM e DMARC, certificati SSL e reputazione dell\'hosting. I domini configurati bene ospitano molto più spesso caselle reali.' },
  { Icon: ShieldCheck, wrap: 'bg-emerald-500 shadow-emerald-500/10', title: 'Gateway di sicurezza', body: 'Gli indirizzi protetti da gateway come Mimecast, Proofpoint e Barracuda vengono verificati direttamente. Il gateway non nasconde più se dietro l\'indirizzo c\'è una casella reale.' },
]

const audience = [
  { Icon: Megaphone, wrap: 'bg-indigo-600 shadow-indigo-600/10', title: 'Team di outreach', body: 'Invii solo a contatti verificati. Meno rimbalzi, più risposte, domini di invio più sani.' },
  { Icon: Building2, wrap: 'bg-violet-600 shadow-violet-600/10', title: 'Agenzie', body: 'Pulisci le liste di ogni cliente con lo stesso verificatore, così report e consegna restano prevedibili.' },
  { Icon: Users, wrap: 'bg-blue-600 shadow-blue-600/10', title: 'Sales operations', body: 'Tieni nel CRM solo i contatti che ricevono davvero le tue sequenze e i tuoi aggiornamenti.' },
  { Icon: MailCheck, wrap: 'bg-emerald-500 shadow-emerald-500/10', title: 'Newsletter', body: 'Proteggi aperture e clic rimuovendo gli indirizzi che sembrano veri ma non consegnano mai.' },
]

const faqs: FaqItem[] = [
  { q: 'Cos\'è un dominio catch-all?', a: 'Un dominio che accetta ogni email inviata, anche a indirizzi che non esistono. Il server risponde "sì, esiste" a qualsiasi indirizzo, per questo i controlli SMTP tradizionali non possono dire se una casella specifica è reale.' },
  { q: 'La verifica catch-all costa crediti in più?', a: 'No. Costa 1 credito a email, esattamente come una verifica standard.' },
  { q: 'Quanto è precisa la verifica catch-all?', a: 'Circa il 98,5% sulle liste aziendali. Invece di indovinare dalle sole risposte SMTP, verifichiamo l\'esistenza reale della casella, così il risultato regge anche al momento dell\'invio.' },
  { q: 'Rallenta la verifica del resto della lista?', a: 'No. I controlli catch-all girano in parallelo alla verifica normale, non dopo. La lista completa finisce nello stesso tempo.' },
  { q: 'Posso verificare solo gli indirizzi catch-all di una lista già pulita altrove?', a: 'Sì. Nella dashboard apri Catch-All Detection, incolla o carica solo gli indirizzi che vuoi controllare e verifica quelli. Il costo è lo stesso: 1 credito a email.' },
  { q: 'Cosa succede se un controllo catch-all torna "sconosciuta"?', a: 'È raro, ma se non riusciamo ad arrivare a un risultato il credito viene rimborsato in automatico. Paghi solo le verifiche completate.' },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const kicker = 'text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

function Row({ Icon, label, value, tone }: { Icon: typeof CheckCircle2; label: string; value: string; tone: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
      <div className={`flex items-center gap-2 ${tone}`}>
        <Icon className="w-4 h-4" />
        <span className="text-[13px] font-bold">{label}</span>
      </div>
      <span className={`text-lg font-black ${tone}`}>{value}</span>
    </div>
  )
}

export default function VerificaCatchAllPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbIt([{ name: 'Verifica catch-all', path: PATH }])} />
      <JsonLd data={faqPageLd(faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarIt />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-28 md:pt-32 pb-24 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="min-w-0 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
            <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
              Verifica catch-all
            </span>{' '}
            con una risposta vera su ogni indirizzo
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl font-medium">
            La maggior parte dei verificatori si ferma davanti ai domini catch-all e accept-all.
            Giggal.ai conferma l&apos;esistenza reale di ogni casella, comprese quelle dietro gateway
            di sicurezza come Mimecast e Proofpoint, con il 98,5% di precisione.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl font-medium">
            Hai una lista piena di gateway? Guarda come verifichiamo le{' '}
            <Link href="/it/verifica-seg" className="text-indigo-600 font-bold hover:underline">
              email protette da SEG
            </Link>
            . Per un solo indirizzo, usa la{' '}
            <Link href="/it/verifica-email" className="text-indigo-600 font-bold hover:underline">
              verifica email gratuita
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href={SIGNUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
            >
              Inizia a verificare i catch-all
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <Link href="/it/prezzi" className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm">
              Vedi i prezzi
            </Link>
          </div>
          <p className="text-[12px] text-slate-400 font-medium">1.000 crediti gratuiti per iniziare. Nessuna carta richiesta.</p>
        </div>

        <div className="min-w-0">
          <div className="bg-white border-2 border-slate-200 rounded-3xl card-vivid-shadow overflow-hidden">
            <div className="bg-indigo-600 px-6 py-5 text-white">
              <div className="text-[10px] font-black uppercase tracking-[0.16em] text-emerald-300 mb-2">Verifica profonda attiva</div>
              <div className="text-xl font-black mb-1">Risultati della lista</div>
              <div className="text-[12px] text-white/70">contatti_2026.csv</div>
            </div>
            <div className="p-5 space-y-2">
              <Row Icon={CheckCircle2} label="Valide" value="39.113" tone="text-emerald-700" />
              <Row Icon={AlertCircle} label="Non valide" value="10.508" tone="text-rose-700" />
              <Row Icon={AlertTriangle} label="A rischio" value="0" tone="text-slate-400" />
              <p className="text-[12px] text-slate-500 leading-relaxed font-medium pt-2">
                Su una lista tipica circa il 30% degli indirizzi è su domini catch-all. Li verifichiamo uno per uno: la maggior parte risulta valida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cos'è */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-8">
        <div className="text-center space-y-3">
          <p className={kicker}>Il contesto</p>
          <h2 className={sectionTitle}>Cos&apos;è un dominio catch-all</h2>
        </div>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            Un dominio catch-all accetta ogni email che riceve, anche per indirizzi che non
            esistono. Il server risponde con un&apos;accettazione generica a qualsiasi indirizzo, quindi
            un normale controllo SMTP non può dire se dietro c&apos;è una casella reale.
          </p>
          <p>
            Su una lista commerciale tipica circa il 30% dei contatti si trova su domini catch-all.
            La maggior parte degli strumenti riconosce lo schema, si arrende e segna tutto come a
            rischio o sconosciuto. Ti ritrovi con una lunga lista di contatti che non puoi usare
            con sicurezza.
          </p>
          <p>
            Restano due scelte, entrambe cattive: inviare e rischiare rimbalzi, spam trap e una
            reputazione danneggiata, oppure cancellare e perdere clienti veri. La verifica
            catch-all risolve il problema controllando l&apos;esistenza effettiva della casella
            invece di indovinare.
          </p>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight pt-2">Catch-all e accept-all sono la stessa cosa</h3>
          <p>
            Alcuni verificatori scrivono &quot;accept all&quot;, altri &quot;catch-all&quot; o
            &quot;catchall&quot;. Descrivono un&apos;unica configurazione: un dominio il cui server di
            posta risponde 250 OK a qualsiasi destinatario. Qualunque etichetta abbia usato il tuo
            ultimo strumento, la soluzione è la stessa, ed è quella descritta in questa pagina.
          </p>
          <p>
            Se il termine è nuovo, il blog spiega{' '}
            <Link href="/it/blog/cos-e-un-indirizzo-email-catch-all" className="text-indigo-600 font-bold hover:underline">
              cos&apos;è un indirizzo email catch-all
            </Link>{' '}
            in parole semplici.
          </p>
        </div>
      </section>

      {/* Come funziona */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={kicker}>Come funziona</p>
          <h2 className={sectionTitle}>Come Giggal.ai verifica le email catch-all</h2>
          <p className={proseP}>
            Ogni indirizzo catch-all passa più livelli di verifica che si combinano in un unico
            risultato chiaro. Vedi valida o non valida, non un report tecnico.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {signals.map(({ Icon, wrap, title, body }) => (
            <div key={title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 min-h-[190px] card-vivid-shadow flex flex-col text-left space-y-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                <p className="text-[13px] sm:text-sm text-slate-500 font-semibold leading-normal">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Confronto */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={kicker}>Risultati chiari</p>
          <h2 className={sectionTitle}>Dalle ipotesi ai risultati</h2>
          <p className={proseP}>La differenza tra un verificatore tipico e Giggal.ai sulla stessa lista di 48.000 email.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow space-y-5">
            <span className="inline-block text-[10px] font-black uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-lg">Un verificatore tipico</span>
            <div className="text-[15px] font-bold text-slate-700">48.028 email verificate</div>
            <div className="space-y-2">
              <Row Icon={CheckCircle2} label="Valide" value="31.566" tone="text-emerald-700" />
              <Row Icon={AlertCircle} label="Non valide" value="5.982" tone="text-rose-700" />
              <Row Icon={AlertTriangle} label="Catch-all" value="10.480" tone="text-amber-700" />
            </div>
            <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
              Oltre 10.000 contatti catch-all a cui non puoi scrivere con sicurezza. Circa l&apos;80% è
              reale, ma non sai quali.
            </p>
          </div>
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 card-vivid-shadow ring-2 ring-indigo-600/5 space-y-5">
            <span className="inline-block text-[10px] font-black uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg">Giggal.ai</span>
            <div className="text-[15px] font-bold text-slate-700">48.028 email verificate</div>
            <div className="space-y-2">
              <Row Icon={CheckCircle2} label="Valide" value="39.950" tone="text-emerald-700" />
              <Row Icon={AlertCircle} label="Non valide" value="8.078" tone="text-rose-700" />
              <Row Icon={AlertTriangle} label="Catch-all" value="0" tone="text-slate-400" />
            </div>
            <p className="text-[12px] text-indigo-800 font-semibold leading-relaxed">
              Circa 8.400 contatti consegnabili in più recuperati dal mucchio catch-all. Ogni indirizzo ha un risultato chiaro.
            </p>
          </div>
        </div>
      </section>

      {/* Per chi */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className={kicker}>Per chi è</p>
          <h2 className={sectionTitle}>Chi usa la verifica catch-all</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map(({ Icon, wrap, title, body }) => (
            <div key={title} className="bg-white border-2 border-slate-200 rounded-2xl p-6 card-vivid-shadow flex flex-col text-left space-y-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-md shrink-0 ${wrap}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-black text-slate-900 leading-tight">{title}</h3>
                <p className="text-[13px] text-slate-500 font-semibold leading-normal">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-24 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Domande frequenti</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandIt headline="Verifica una lista e confronta i risultati" />
      <FooterIt />
    </main>
  )
}
