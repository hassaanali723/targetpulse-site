import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarIt from '@/components/it/NavbarIt'
import FooterIt from '@/components/it/FooterIt'
import CtaBandIt from '@/components/it/CtaBandIt'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, howToLd } from '@/lib/schema'
import { breadcrumbIt } from '@/lib/i18n/schemaIt'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/it'

// The existence question: "verifica email esistente" 700 a month and seven
// phrasings around it (1,540 in all). Emailable ranks 15 for it with a tool
// page; this page answers the question in the first 60 words, then shows the
// three methods with their limits, with the checker embedded.

const PATH = '/it/verifica-email/email-esistente'
const DESC =
  'Come verificare se un indirizzo email esiste senza inviare messaggi: controllo SMTP, record MX e ricerca manuale, con i limiti di ognuno e uno strumento gratis.'

export const metadata: Metadata = {
  title: { absolute: 'Verifica Email Esistente: Come Sapere se Esiste | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: 'Verifica email esistente: come sapere se un indirizzo esiste',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'article',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
}

const steps = [
  {
    name: 'Verifica SMTP senza inviare email',
    text: 'Uno strumento di verifica apre una conversazione con il server di posta del dominio, indica il destinatario e legge il codice di risposta: 250 se la casella è accettata, 550 se non esiste. Nessun messaggio viene consegnato.',
  },
  {
    name: 'Cerca il record MX del dominio',
    text: 'Se il dominio non pubblica record MX, nessuna casella può esistere su quel dominio. Un controllo DNS lo dice in un secondo, ma un record MX presente non prova che la singola casella esista.',
  },
  {
    name: 'Controlla sul sito o su LinkedIn',
    text: "Per un contatto importante, cerca il formato degli indirizzi dell'azienda (nome.cognome@, iniziale+cognome@) sul sito o sui profili pubblici e confronta. Lento, ma utile quando il server risponde \"sconosciuta\".",
  },
]

const faqs: FaqItem[] = [
  {
    q: "Posso sapere se un'email esiste senza inviare nulla?",
    a: 'Sì. La verifica SMTP chiede al server di posta se la casella esiste e legge la risposta senza consegnare messaggi. È il metodo che usa lo strumento in questa pagina.',
  },
  {
    q: 'Se il messaggio non torna indietro, l\'indirizzo esiste?',
    a: 'Non necessariamente. Su un dominio catch-all il server accetta qualsiasi indirizzo e non genera rimbalzi, quindi l\'assenza di un bounce non dice nulla. Serve la risoluzione catch-all.',
  },
  {
    q: 'Perché il risultato dice "sconosciuta"?',
    a: 'Il server non ha risposto in tempo, applica il greylisting ai mittenti nuovi o si trova dietro un gateway di sicurezza che accetta tutto. Riprova più tardi o usa la verifica catch-all completa.',
  },
  {
    q: 'Le PEC si possono verificare?',
    a: 'Solo in parte: molti server PEC non rispondono alle richieste SMTP standard. Il controllo del record MX funziona, quello della singola casella spesso no.',
  },
  {
    q: 'Cosa faccio con un indirizzo che non esiste?',
    a: 'Rimuovilo dalla lista e non riprovare a inviare: ogni tentativo su una casella inesistente peggiora la reputazione del tuo dominio. Se il contatto è importante, cerca il suo indirizzo attuale.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailEsistentePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbIt([
          { name: 'Verifica email', path: '/it/verifica-email' },
          { name: 'Email esistente', path: PATH },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${PATH}#howto`,
          name: 'Come verificare se un indirizzo email esiste',
          description: DESC,
          steps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarIt />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">
          <Link href="/it/verifica-email" className="hover:underline">Verifica email</Link> › Email esistente
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          Come verificare se un indirizzo email esiste
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Un indirizzo email esiste se il server di posta del suo dominio accetta quella casella
          quando gliela si propone in una conversazione SMTP. Si può chiedere senza inviare nessun
          messaggio: è quello che fa lo strumento qui sotto in pochi secondi. Sui domini catch-all,
          che accettano tutto, servono controlli in più, e li esegue anche quelli.
        </p>
      </section>

      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Gratis, senza registrazione. Lo stesso strumento della pagina{' '}
          <Link href="/it/verifica-email" className="text-indigo-600 font-bold hover:underline">verifica email</Link>.
        </p>
      </section>

      {steps.map((s, i) => (
        <section key={s.name} className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
          <h2 className={sectionTitle}>Metodo {i + 1}: {s.name}</h2>
          <p className={proseP}>{s.text}</p>
          {i === 0 && (
            <p className={proseP}>
              È il metodo più affidabile e il più veloce, con un limite: alcuni server non rispondono
              ai mittenti sconosciuti (greylisting) o rispondono sì a tutto. Nel primo caso il
              risultato è &quot;sconosciuta&quot; e conviene riprovare; nel secondo caso il dominio è
              catch-all e serve il passaggio descritto più sotto.
            </p>
          )}
          {i === 1 && (
            <p className={proseP}>
              Un dominio con record MX validi e un server che risponde è la base. Se manca, puoi
              scartare l&apos;indirizzo senza altri controlli. Se c&apos;è, devi comunque passare al
              metodo 1 per la singola casella.
            </p>
          )}
        </section>
      ))}

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Perché &quot;l&apos;email è arrivata&quot; non prova nulla su un dominio catch-all</h2>
        <p className={proseP}>
          Molte guide consigliano di inviare un messaggio di prova e aspettare il rimbalzo. Su un
          dominio catch-all il server accetta ogni destinatario, quindi il messaggio non torna
          indietro anche se la casella non esiste: finisce in una cartella che nessuno legge, o
          viene scartato in silenzio. Il mancato rimbalzo non è una conferma. La{' '}
          <Link href="/it/verifica-catch-all" className="text-indigo-600 font-bold hover:underline">
            verifica catch-all
          </Link>{' '}
          di Giggal analizza altri segnali del server e della casella e restituisce valida o non
          valida anche in questi casi.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Cosa fare con un indirizzo che non esiste</h2>
        <p className={proseP}>
          Toglilo dalla lista e non riprovare: ogni invio a una casella inesistente è un hard bounce,
          e i provider contano gli hard bounce per decidere se sei un mittente affidabile. Se il
          contatto conta, cerca il suo indirizzo attuale invece di insistere sul vecchio. Per una
          lista intera, la verifica in blocco fa questa pulizia su ogni riga prima dell&apos;invio.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Domande frequenti</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandIt headline="Verifica tutta la tua lista" />
      <FooterIt />
    </main>
  )
}
