import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import NavbarIt from '@/components/it/NavbarIt'
import FooterIt from '@/components/it/FooterIt'
import CtaBandIt from '@/components/it/CtaBandIt'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbIt, webApplicationIt } from '@/lib/i18n/schemaIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/it'

// Italian free checker. Primary query "verifica email" (27,000 searches a
// month, KD 0); the page-1 competitors are all single-address tools, and
// their titles promise "gratis", "esiste" and "senza inviare una email", so
// the copy says those things in the first screen. The catch-all resolution
// is the reason to pick this one.

const PATH = '/it/verifica-email'
const DESC =
  'Verifica gratis se un indirizzo email esiste ed è valido, senza inviare nessuna email. Controllo di sintassi, DNS, SMTP e domini catch-all in pochi secondi.'

export const metadata: Metadata = {
  title: { absolute: 'Verifica Email Gratis: Scopri se Esiste | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: 'Verifica Email Gratis: Scopri se Esiste',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
  twitter: { card: 'summary_large_image', title: 'Verifica Email Gratis: Scopri se Esiste', description: DESC },
}

const faqs: FaqItem[] = [
  {
    q: "Lo strumento invia un'email all'indirizzo?",
    a: 'No. La verifica avviene con una conversazione SMTP con il server di posta del dominio: chiediamo se la casella esiste e leggiamo la risposta, senza consegnare nessun messaggio. Il destinatario non riceve nulla.',
  },
  {
    q: 'Cosa significa "catch-all"?',
    a: 'Un dominio catch-all (o accept-all) accetta la posta per qualsiasi indirizzo, anche inventato. Un controllo standard riceve sempre un sì e non può dire se la casella esiste davvero. Giggal esegue controlli aggiuntivi e restituisce valida o non valida anche su questi domini.',
  },
  {
    q: 'Verifica mail e verifica email sono la stessa cosa?',
    a: 'Sì. "Mail" è la parola di tutti i giorni, "email" quella formale: il controllo è lo stesso, e lo strumento di questa pagina lo esegue su qualsiasi indirizzo. Vale anche per controllo mail, controllo email e verifica indirizzo email.',
  },
  {
    q: 'La verifica funziona con Gmail, Outlook e le PEC?',
    a: 'Sì con Gmail, Google Workspace, Outlook e Microsoft 365, dove il server risponde in modo affidabile. Le caselle PEC usano server che spesso non rispondono alle richieste SMTP standard: in quel caso il risultato può essere "sconosciuta".',
  },
  {
    q: 'Cosa vuol dire "sconosciuta"?',
    a: 'Il server non ha risposto in tempo oppure applica il greylisting ai mittenti nuovi. Non significa che la casella non esista: riprova più tardi prima di scartare l\'indirizzo.',
  },
  {
    q: 'Posso verificare una lista intera qui?',
    a: 'Non da questa pagina. Registrati, ottieni 1.000 crediti gratuiti senza carta e carica il file: ogni riga passa gli stessi controlli di questo strumento.',
  },
  {
    q: 'Gli indirizzi inseriti vengono salvati?',
    a: "L'indirizzo serve solo per eseguire il controllo. Non viene aggiunto a nessuna lista né usato per inviare comunicazioni.",
  },
  {
    q: 'Che differenza c\'è tra verifica e validazione?',
    a: 'La validazione controlla la forma dell\'indirizzo (sintassi, dominio). La verifica va oltre: interroga il server di posta e conferma che la casella esista. Questo strumento fa entrambe le cose.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function VerificaEmailPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbIt([{ name: 'Verifica email', path: PATH }])} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd data={webApplicationIt(PATH, 'Verifica email gratis di Giggal.ai', DESC)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarIt />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Verifica email gratis,{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            senza inviare nessuna email
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Controlla sintassi, server di posta, casella SMTP e domini catch-all in pochi secondi.
          Nessuna registrazione, nessuna email inviata al destinatario.
        </p>
      </section>

      {/* ── LO STRUMENTO ─────────────────────────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Gratis, senza registrazione, senza carta. Un indirizzo per controllo, verifica SMTP completa.
        </p>
      </section>

      {/* ── COME FUNZIONA UN CONTROLLO ───────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Verifica indirizzo email: come verificare se un indirizzo è valido</h2>
        <p className={proseP}>
          Un controllo indirizzo email serio, cioè verificare indirizzo email fino alla casella, ha
          quattro passaggi. Gli strumenti gratuiti che si
          fermano al primo sono il motivo per cui tante liste &quot;verificate&quot; continuano a
          rimbalzare.
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
          <li>
            <strong className="text-slate-900">Sintassi.</strong> L&apos;indirizzo è scritto bene:
            una sola chiocciola, una parte locale valida, un dominio con estensione. Questo passaggio
            trova gli errori di battitura e nient&apos;altro.
          </li>
          <li>
            <strong className="text-slate-900">Record MX.</strong> Il dominio pubblica dei server di
            posta? Senza record MX nessuna casella può esistere, quindi l&apos;indirizzo è morto prima
            ancora di inviare.
          </li>
          <li>
            <strong className="text-slate-900">Verifica SMTP della casella.</strong> Apriamo una
            conversazione con il server ricevente, indichiamo il destinatario e leggiamo la risposta.
            Un codice 250 significa che la casella è accettata, un 550 che non esiste.
          </li>
          <li>
            <strong className="text-slate-900">Risoluzione catch-all.</strong> Se il server ha detto
            sì anche a un indirizzo inventato, il passaggio tre non ha dimostrato nulla. Qui la
            maggior parte dei verificatori scrive &quot;catch-all&quot; e si ferma. Giggal analizza
            i segnali che distinguono una casella reale da una risposta accept-all e restituisce
            valida o non valida.
          </li>
        </ol>
        <p className={proseP}>
          Il pannello qui sopra mostra ogni passaggio mentre viene completato, più il provider di
          posta, l&apos;host MX e se l&apos;indirizzo è usa e getta, di ruolo o su un provider gratuito.
        </p>
      </section>

      {/* ── COSA DICE LO STRUMENTO ───────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Verifica mail o verifica email: cosa ti dice questo strumento</h2>
        <p className={proseP}>
          In italiano si dice verifica mail, verifica email o controllo mail: è lo stesso controllo,
          e lo strumento qui sopra lo esegue in pochi secondi. Ogni controllo termina con uno di tre
          verdetti. <strong className="text-slate-900">Valida</strong>{' '}
          significa che la casella ha accettato il destinatario e superato i controlli aggiuntivi:
          la posta inviata dovrebbe arrivare. <strong className="text-slate-900">Non valida</strong>{' '}
          significa che l&apos;indirizzo ha una sintassi sbagliata, non ha server di posta o il server
          ha rifiutato la casella: produrrà un hard bounce. <strong className="text-slate-900">Sconosciuta</strong>{' '}
          è rara e indica che il server non ha risposto in tempo o applica il greylisting: riprova
          più tardi invece di considerarla morta.
        </p>
        <p className={proseP}>
          Sotto il verdetto trovi i dettagli da cui dipende la consegna: il provider (Google
          Workspace, Microsoft 365, un gateway come Proofpoint), l&apos;host MX che ha risposto, se
          l&apos;indirizzo è <strong className="text-slate-900">usa e getta</strong> (una casella
          temporanea che sparirà), <strong className="text-slate-900">di ruolo</strong> (info@,
          vendite@, supporto@: caselle condivise, pessime per l&apos;outreach) e se si trova su un{' '}
          <strong className="text-slate-900">provider gratuito</strong> come Gmail o Libero, un dato
          utile quando qualifichi contatti B2B.
        </p>
      </section>

      {/* ── CONTROLLO EMAIL SU DOMINI CATCH-ALL ──────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Controllo email su domini catch-all</h2>
        <p className={proseP}>
          Individuare un dominio catch-all costa poco: lo strumento cerca i server di posta, apre
          una connessione e propone un indirizzo casuale che quasi certamente non esiste. Se il
          server lo accetta, il dominio accetta tutto, e la risposta arriva in un solo scambio. Per
          questo quasi ogni controllo email gratuito ti dirà volentieri che un dominio è catch-all.
          Controlla email e dominio insieme: su questi domini la verifica indirizzo mail da sola non
          basta. Capire quali caselle sono reali dietro quel dominio è un altro lavoro: servono più sonde,
          più segnali e un&apos;infrastruttura con una reputazione di invio pulita. Su una lista B2B
          gli indirizzi catch-all sono spesso un terzo dei contatti, e cancellarli in blocco butta
          via clienti veri. Giggal li risolve uno per uno e ti dice quali tenere. Per i dettagli sul
          metodo, leggi come funziona la{' '}
          <Link href="/it/verifica-catch-all" className="text-indigo-600 font-bold hover:underline">
            verifica catch-all
          </Link>
          .
        </p>
      </section>

      {/* ── EMAIL ESISTENTE ──────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Verifica email esistente e verifica email attiva: quando serve</h2>
        <p className={proseP}>
          Prima di rispondere a un contatto scritto a mano, quando un modulo di iscrizione rimbalza,
          per provare un indirizzo di una lista acquistata prima di pulirla tutta. In ogni caso la
          domanda è la stessa: questa casella esiste ed è attiva? La verifica esistenza mail, cioè
          la verifica email se esiste davvero, è quello che fa lo strumento qui sopra in pochi
          secondi. Abbiamo raccolto i tre metodi che funzionano,
          con i loro limiti, in una guida su{' '}
          <Link href="/it/verifica-email/email-esistente" className="text-indigo-600 font-bold hover:underline">
            come verificare se un indirizzo email esiste
          </Link>
          .
        </p>
      </section>

      {/* ── EMAIL VALIDA O NO ────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Verifica email valida: gli errori più comuni</h2>
        <p className={proseP}>
          Verificare email o verificare mail prima dell&apos;invio serve soprattutto contro tre
          errori. Gli indirizzi non validi che vediamo più spesso sono di questi tre tipi. Gli errori di battitura
          nel dominio (gmial.com, hotmial.it) passano qualsiasi controllo visivo e falliscono al
          record MX. Le caselle usa e getta sono valide oggi e sparite tra una settimana: un
          verificatore le riconosce dal dominio. Gli account di ruolo (info@, amministrazione@)
          esistono, ma nessuno risponde da lì e i filtri antispam li trattano con sospetto. Il
          pannello dei risultati segnala tutti e tre i casi, così decidi tu cosa tenere.
        </p>
      </section>

      {/* ── LISTA INTERA ─────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Per una lista intera: verifica in blocco</h2>
        <p className={proseP}>
          Il controllo singolo serve per un indirizzo alla volta. Per un file intero registrati,
          carica il CSV e la{' '}
          <Link href="/it/verifica-catch-all" className="text-indigo-600 font-bold hover:underline">
            verifica in blocco
          </Link>{' '}
          esegue gli stessi controlli su ogni riga, catch-all compresi. I primi 1.000 crediti sono
          gratuiti, senza carta. I{' '}
          <Link href="/it/prezzi" className="text-indigo-600 font-bold hover:underline">
            prezzi
          </Link>{' '}
          partono da 9,90 $ per 10.000 verifiche.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Domande frequenti</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandIt headline="Verifica tutta la tua lista" />

      {/* ── LINK CORRELATI ───────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {[
            { href: '/it/verifica-email/email-esistente', label: 'come verificare se un indirizzo email esiste' },
            { href: '/it/verifica-catch-all', label: 'verifica catch-all e indirizzi a rischio' },
            { href: '/it/blog/cos-e-un-indirizzo-email-catch-all', label: "cos'è un indirizzo email catch-all" },
            { href: '/it/prezzi', label: 'prezzi e crediti' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all card-vivid-shadow"
            >
              <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700">{l.label}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      <FooterIt />
    </main>
  )
}
