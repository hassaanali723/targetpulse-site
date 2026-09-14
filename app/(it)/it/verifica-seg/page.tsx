import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, AlertCircle, AlertTriangle, HelpCircle } from 'lucide-react'
import NavbarIt from '@/components/it/NavbarIt'
import FooterIt from '@/components/it/FooterIt'
import CtaBandIt from '@/components/it/CtaBandIt'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbIt } from '@/lib/i18n/schemaIt'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { SIGNUP_URL } from '@/lib/i18n/it'

// Verification behind secure email gateways, in Italian. "SEG" and the
// vendor names stay as they are; Italian deliverability practice uses them.

const PATH = '/it/verifica-seg'
const DESC =
  'Verifica email dietro i gateway di sicurezza: Proofpoint, Mimecast, Barracuda e altri 12. Valida o non valida invece di sconosciuta, 1 credito a email.'

export const metadata: Metadata = {
  title: { absolute: 'Verifica Email dietro Proofpoint, Mimecast e Barracuda | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('seg') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'it_IT',
    title: 'Verifica email dietro i gateway di sicurezza (SEG)',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verifica email' }],
  },
}

const GATEWAYS = [
  'Mimecast', 'Proofpoint', 'Barracuda', 'Cisco IronPort', 'Sophos',
  'Trend Micro', 'Symantec', 'Fortinet', 'Forcepoint', 'Cloudmark',
  'MailRoute', 'AppRiver', 'Zix', 'SonicWall', 'CRAM Cloud',
]

const VERDICTS = [
  { Icon: CheckCircle2, tint: 'text-emerald-600', label: 'Valida', meaning: 'La casella esiste e accetta la posta' },
  { Icon: AlertCircle, tint: 'text-rose-600', label: 'Non valida', meaning: 'La casella non esiste' },
  { Icon: AlertTriangle, tint: 'text-amber-600', label: 'A rischio', meaning: "L'indirizzo esiste ma comporta un rischio di consegna" },
  { Icon: HelpCircle, tint: 'text-slate-500', label: 'Sconosciuta', meaning: "Non siamo riusciti a verificare l'indirizzo" },
]

const faqs: FaqItem[] = [
  { q: 'Un gateway di sicurezza significa che l\'indirizzo non è valido?', a: 'No. Il gateway è un filtro, non un segnale sulla casella che sta dietro. Moltissimi indirizzi validi e attivi si trovano dietro Proofpoint o Mimecast. Il gateway li rende solo più difficili da controllare.' },
  { q: 'Perché gli altri verificatori restituiscono "sconosciuta" su questi indirizzi?', a: 'La maggior parte interroga direttamente il server di posta via SMTP. Dietro un gateway la domanda viene intercettata e riceve risposta dal gateway stesso, progettato per non dire nulla di utile. Senza una risposta, il verificatore non ha niente da riportare.' },
  { q: 'Quali gateway gestisce Giggal.ai?', a: 'Quindici, tra cui Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet e Forcepoint. Il riconoscimento è automatico dai record MX del dominio.' },
  { q: 'Devo separare gli indirizzi protetti da SEG prima di caricare la lista?', a: 'No. Carica la lista così com\'è. I domini dietro un gateway vengono riconosciuti e instradati in automatico durante la verifica.' },
  { q: 'Verificare dietro un gateway costa di più?', a: 'No. Ogni verifica costa 1 credito, che il dominio sia dietro un gateway, catch-all o una casella standard.' },
  { q: 'E se non riuscite comunque a verificare un indirizzo?', a: 'Il risultato è "sconosciuta" e il credito viene rimborsato in automatico.' },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function VerificaSegPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbIt([{ name: 'Verifica dietro SEG', path: PATH }])} />
      <JsonLd data={faqPageLd(faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarIt />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-16 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Verifica email dietro i{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">gateway di sicurezza</span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Proofpoint, Mimecast e Barracuda accettano ogni indirizzo all&apos;ingresso, e questo rompe
          il controllo su cui si basano quasi tutti i verificatori. Giggal.ai riconosce il gateway
          dai record MX e verifica la casella per un&apos;altra strada: ottieni valida o non valida
          dove gli altri restituiscono sconosciuta.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <a href={SIGNUP_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm">
            Verifica la tua lista <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <Link href="/it/prezzi" className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm">
            Vedi i prezzi
          </Link>
        </div>
        <p className="text-[12px] text-slate-400 font-medium">1.000 crediti gratuiti per iniziare. Nessuna carta richiesta.</p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Cos&apos;è un gateway di sicurezza per la posta</h2>
        <p className={proseP}>
          Un secure email gateway (SEG) è un filtro che sta davanti al vero server di posta di
          un&apos;azienda. Ogni messaggio diretto al dominio passa prima dal gateway. Le aziende lo
          usano per bloccare spam e malware, fermare il phishing e applicare le regole di prevenzione
          delle perdite di dati prima che qualcosa arrivi in una casella. I fornitori più diffusi sono
          Proofpoint, Mimecast, Barracuda e Cisco IronPort.
        </p>
        <p className={proseP}>
          Poiché il gateway sta davanti al server di posta, risponde anche al posto suo. Qualsiasi
          sistema che prova a fare una domanda al server, compreso un verificatore, finisce per
          parlare con il gateway invece che con il sistema che sa davvero quali caselle esistono.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Perché i gateway rompono la verifica email</h2>
        <p className={proseP}>
          La verifica standard apre una conversazione SMTP con il server di posta e chiede, in
          pratica, se una casella esiste. Su un dominio normale il server risponde e il verificatore
          registra valida o non valida.
        </p>
        <p className={proseP}>
          Dietro un gateway quella conversazione non arriva mai al server. Il gateway la intercetta
          e risponde al posto suo. I gateway sono costruiti proprio per impedire questo tipo di
          sondaggio, perché la stessa tecnica viene usata da chi attacca per mappare gli utenti di
          un&apos;azienda. Così il gateway dà una risposta volutamente vaga, accetta ogni indirizzo che
          esista o no, oppure rifiuta la connessione.
        </p>
        <p className={proseP}>
          Il verificatore resta senza nulla da trasformare in un risultato. Segna l&apos;indirizzo come
          sconosciuto o a rischio, e il contatto resta irrisolto. Su una lista aziendale, dove una
          quota rilevante di domini sta dietro un gateway, è una parte vera della lista che non puoi
          usare con sicurezza. Riprovare peggiora le cose: sondare più volte un endpoint che rifiuta
          il controllo fa segnalare l&apos;IP di invio, e da lì i risultati peggiorano su ogni dominio.
          Per questo Giggal.ai salta del tutto l&apos;SMTP sui gateway che si comportano così.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Come Giggal.ai verifica dietro un gateway</h2>
        <p className={proseP}>
          Giggal.ai legge prima i record MX del dominio, prima di qualsiasi sonda, per capire cosa c&apos;è
          davanti alla casella. Questo ci dice se il dominio risponde direttamente o sta dietro un
          gateway.
        </p>
        <p className={proseP}>
          I domini dietro un gateway seguono un percorso di verifica diverso da quelli che rispondono
          direttamente. Dove il gateway rifiuta il sondaggio SMTP, il risultato non dipende affatto da
          quella risposta: verifichiamo l&apos;indirizzo con un altro segnale, così torna comunque valida
          o non valida dove un controllo SMTP semplice non restituirebbe nulla.
        </p>
        <p className={proseP}>
          I gateway restituiscono anche risposte pensate per nascondere se una casella esiste.
          Giggal.ai le riconosce e non le scambia per un risultato vero. Quando l&apos;unica cosa che
          torna è rumore, lo trattiamo come nessuna risposta invece di indovinare.
        </p>
      </section>

      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-8">
        <h2 className={`${sectionTitle} text-center`}>I gateway che riconosciamo</h2>
        <div className="flex flex-wrap justify-center gap-2.5">
          {GATEWAYS.map((g) => (
            <span key={g} className="px-4 py-2 bg-white border-2 border-slate-200 rounded-xl text-[13px] font-bold text-slate-700 card-vivid-shadow">{g}</span>
          ))}
        </div>
        <p className={`${proseP} text-center max-w-2xl mx-auto`}>
          Il riconoscimento avviene in automatico dai record MX del dominio. Non devi dirci nulla
          sulla lista prima di verificarla.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-10">
        <div className="space-y-4">
          <h2 className={sectionTitle}>Proofpoint</h2>
          <p className={proseP}>
            Proofpoint è uno dei gateway più diffusi sui domini delle grandi aziende. Se vendi a
            imprese di grandi dimensioni, una parte consistente della tua lista sta dietro di lui.
            Giggal.ai lo riconosce dai record MX e instrada l&apos;indirizzo sul percorso gateway, così
            invece di uno sconosciuto ottieni un vero risultato sulla casella che c&apos;è dietro.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className={sectionTitle}>Mimecast</h2>
          <p className={proseP}>
            Mimecast è costruito per impedire a chiunque di capire quali caselle esistono su un
            dominio, e risponde alle sonde con una risposta volutamente vaga. Giggal.ai riconosce
            questo comportamento e salta del tutto l&apos;SMTP verso Mimecast, invece di provocare la
            risposta e pagarne il prezzo in reputazione. Verifica l&apos;indirizzo per un&apos;altra strada.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className={sectionTitle}>Barracuda</h2>
          <p className={proseP}>
            Barracuda è comune sui domini delle medie imprese e, come gli altri gateway, sta davanti
            al vero server di posta. Un verificatore standard che sonda un dominio Barracuda via SMTP
            di solito non ottiene una risposta chiara sulla casella. Giggal.ai lo riconosce e usa il
            percorso gateway anche qui.
          </p>
        </div>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Cosa ottieni</h2>
        <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden card-vivid-shadow">
          <table className="w-full text-sm">
            <tbody>
              {VERDICTS.map(({ Icon, tint, label, meaning }) => (
                <tr key={label} className="border-b border-slate-100 last:border-0">
                  <td className={`px-5 py-3.5 font-black whitespace-nowrap ${tint}`}>
                    <span className="inline-flex items-center gap-2"><Icon className="w-4 h-4" />{label}</span>
                  </td>
                  <td className="px-5 py-3.5 text-slate-600 font-medium">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={proseP}>
          Quando non riusciamo a verificare un indirizzo, il credito viene rimborsato in automatico.
          Paghi solo le verifiche completate. Un dominio catch-all è un problema collegato ma diverso:
          se la tua lista ha anche quelli, la{' '}
          <Link href="/it/verifica-catch-all" className="text-indigo-600 font-bold hover:underline">
            verifica catch-all
          </Link>{' '}
          li risolve nello stesso passaggio.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Domande frequenti</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandIt headline="Verifica gli indirizzi dietro i gateway" />
      <FooterIt />
    </main>
  )
}
