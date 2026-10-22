import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, AlertCircle, AlertTriangle, HelpCircle } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { LocalLink } from '@/components/disposable/LocalText'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { MIMECAST_PAGE_LIVE } from '@/lib/flags'
import { SIGNUP_URL } from '@/lib/i18n/strings'

// Verification behind secure email gateways, in German. German searchers use
// the English term, so "Secure Email Gateway", "SEG" and the vendor names stay
// as written. Same sections and order as app/(en)/seg-email-verification.
// Internal links take the English path; LocalLink sends them to the German
// page when one exists.

const PATH = '/de/secure-email-gateway'
const TITLE = 'E-Mails hinter einem Secure Email Gateway prüfen'
const DESC =
  'Proofpoint, Mimecast und Barracuda blockieren die übliche E-Mail-Prüfung. Giggal.ai liefert hinter 15 Secure Email Gateways ein Ergebnis: gültig oder ungültig.'

export const metadata: Metadata = {
  title: { absolute: 'Secure Email Gateway: E-Mails dahinter prüfen | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('seg') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai E-Mail-Verifizierung' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESC,
  },
}

const GATEWAYS = [
  'Mimecast', 'Proofpoint', 'Barracuda', 'Cisco IronPort', 'Sophos',
  'Trend Micro', 'Symantec', 'Fortinet', 'Forcepoint', 'Cloudmark',
  'MailRoute', 'AppRiver', 'Zix', 'SonicWall', 'CRAM Cloud',
]

const VERDICTS = [
  { Icon: CheckCircle2, tint: 'text-emerald-600', label: 'Zustellbar', meaning: 'Das Postfach existiert und nimmt E-Mails an' },
  { Icon: AlertCircle, tint: 'text-rose-600', label: 'Unzustellbar', meaning: 'Das Postfach existiert nicht' },
  { Icon: AlertTriangle, tint: 'text-amber-600', label: 'Riskant', meaning: 'Die Adresse existiert, aber die Zustellung ist riskant' },
  { Icon: HelpCircle, tint: 'text-slate-500', label: 'Unbekannt', meaning: 'Wir konnten die Adresse nicht prüfen' },
]

const faqs: FaqItem[] = [
  {
    q: 'Bedeutet ein Secure Email Gateway, dass die Adresse ungültig ist?',
    a: 'Nein. Ein Gateway ist eine Filterschicht und sagt nichts über das Postfach dahinter aus. Viele gültige, aktive Adressen liegen hinter Proofpoint oder Mimecast. Das Gateway macht sie nur schwerer zu prüfen.',
  },
  {
    q: 'Warum melden andere Verifizierer diese Adressen als Unbekannt?',
    a: 'Die meisten Verifizierer verbinden sich direkt mit dem Mailserver und fragen, ob das Postfach existiert. Steht ein Gateway davor, fängt es diese Frage ab und antwortet selbst. Es ist so gebaut, dass es nichts Nützliches verrät. Ohne Antwort hat der Verifizierer nichts zu melden.',
  },
  {
    q: 'Welche Gateways unterstützt Giggal.ai?',
    a: 'Fünfzehn, darunter Proofpoint, Mimecast, Barracuda, Cisco IronPort, Sophos, Trend Micro, Symantec, Fortinet und Forcepoint. Die Erkennung läuft automatisch über die MX-Einträge der Domain.',
  },
  {
    q: 'Muss ich SEG-geschützte Adressen vor dem Hochladen aussortieren?',
    a: 'Nein. Laden Sie die Liste so hoch, wie sie ist. Domains hinter einem Gateway werden während der Prüfung automatisch erkannt und auf den passenden Prüfweg geleitet.',
  },
  {
    q: 'Kostet die Prüfung hinter einem Gateway mehr?',
    a: 'Nein. Jede E-Mail-Prüfung kostet pauschal 1 Credit. Das gilt für Domains hinter einem Secure Email Gateway, für Catch-all-Domains und für normale Postfächer.',
  },
  {
    q: 'Was passiert, wenn Giggal.ai eine Adresse trotzdem nicht prüfen kann?',
    a: 'Die Adresse kommt als Unbekannt zurück, und der Credit wird automatisch erstattet.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const inlineLink = 'text-indigo-700 hover:text-indigo-800 font-extrabold transition-colors'

export default function SecureEmailGatewayPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n('de', [{ name: 'Secure Email Gateway', path: PATH }])} />
      <JsonLd data={faqPageLd(faqs)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[600px] right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.06] blur-[100px] -z-10 pointer-events-none" />

      <NavbarL10n locale="de" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-20 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          E-Mails hinter einem{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            Secure Email Gateway
          </span>{' '}
          prüfen
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Ein Secure Email Gateway steht vor dem eigentlichen Mailserver eines Unternehmens. Es lehnt
          die Prüfungen ab, auf die sich die meisten Verifizierer verlassen. Giggal.ai prüft auf einem
          anderen Weg und liefert ein echtes Ergebnis, gültig oder ungültig, statt Unbekannt.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 font-extrabold rounded-xl text-white shadow-md shadow-indigo-600/10 hover:-translate-y-0.5 transition-all text-sm"
          >
            Mit 1.000 Credits kostenlos starten
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <LocalLink
            href="/pricing"
            locale="de"
            className="px-8 py-3.5 bg-white border border-slate-300 hover:border-slate-800 hover:bg-slate-50 font-bold rounded-xl text-slate-700 hover:text-slate-950 transition-all text-center text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            Preise ansehen
          </LocalLink>
        </div>
        <p className="text-[12px] text-slate-400 font-medium">Keine Kreditkarte nötig. Credits verfallen nicht.</p>
      </section>

      {/* ── WHAT IS A SEG ────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Was ist ein Secure Email Gateway?</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            Ein Secure Email Gateway (SEG) ist eine Filterschicht vor dem eigentlichen Mailserver eines
            Unternehmens. Jede Nachricht an die Domain läuft zuerst durch das Gateway. Unternehmen setzen
            es ein, um Spam und Malware zu blockieren und Phishing zu stoppen. Außerdem setzt es Regeln
            zum Schutz vor Datenabfluss durch, bevor eine Nachricht ein Postfach erreicht. Anbieter in
            diesem Bereich sind zum Beispiel Proofpoint, Mimecast, Barracuda und Cisco IronPort.
          </p>
          <p>
            Weil das Gateway vor dem Mailserver steht, antwortet es auch an seiner Stelle. Jede Anfrage,
            die prüfen soll, ob ein Postfach existiert, landet deshalb beim Gateway. Das gilt auch für
            die Anfragen eines E-Mail-Verifizierers. Das System, das wirklich weiß, welche Postfächer
            existieren, erreichen sie nicht.
          </p>
        </div>
      </section>

      {/* ── WHY GATEWAYS BREAK VERIFICATION ──────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Warum Gateways die E-Mail-Verifizierung blockieren</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            Eine Standardprüfung fragt, ob ein bestimmtes Postfach existiert. Auf einer gewöhnlichen
            Domain antwortet der Mailserver. Der Verifizierer notiert dann das Ergebnis: gültig oder
            ungültig.
          </p>
          <p>
            Hinter einem Gateway erreicht diese Frage den Mailserver nie. Das Gateway fängt sie ab und
            antwortet an seiner Stelle. Gateways sollen verhindern, dass Dritte herausfinden, welche
            Nutzer ein Unternehmen hat. Deshalb gibt das Gateway eine absichtlich vage Antwort. Oder es
            nimmt jede Adresse an, ob sie existiert oder nicht. Oder es lehnt die Verbindung ganz ab.
          </p>
          <p>
            Der Verifizierer hat dann nichts, woraus er ein Ergebnis machen kann. Er meldet die Adresse
            als Unbekannt oder Riskant, und der Kontakt bleibt ungeklärt. Liegt auf einer Firmenliste
            ein großer Teil der Domains hinter einem Gateway, können Sie einen echten Teil Ihrer Liste
            nicht sicher nutzen.
          </p>
        </div>
        <div className="pt-2 space-y-4">
          <h3 className="text-lg font-black text-slate-900">Das Problem mit der IP-Reputation</h3>
          <p className={proseP}>
            Erneute Versuche machen es schlimmer. Fragt man einen Server, der die Prüfung ablehnt,
            immer wieder ab, wird die sendende IP-Adresse markiert. Danach verschlechtern sich die
            Ergebnisse bei allen Domains, die dieser Verifizierer prüft, nicht nur bei Gateway-Domains.
            Deshalb nutzt Giggal.ai bei Gateways mit diesem Verhalten andere Prüfmethoden. Wir
            wiederholen die Abfrage nicht so lange, bis eine Sperre folgt.
          </p>
        </div>
      </section>

      {/* ── HOW GIGGAL VERIFIES BEHIND A GATEWAY ─────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Wie Giggal.ai hinter einem Gateway prüft</h2>
        <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base font-medium">
          <p>
            Giggal.ai liest zuerst die MX-Einträge der Domain. So sehen wir, was tatsächlich vor dem
            Postfach steht. Daran erkennen wir, ob die Domain direkt antwortet oder hinter einem
            Gateway liegt.
          </p>
          <p>
            Domains hinter einem Gateway laufen über einen anderen Prüfweg als Domains, die direkt
            antworten. Wo ein Gateway die normale Postfachprüfung blockiert, hängt das Ergebnis gar
            nicht von dieser Antwort ab. Wir prüfen die Adresse über ein anderes Signal. So kommt sie
            trotzdem als gültig oder ungültig zurück, wo eine Standardprüfung nichts liefern würde.
          </p>
          <p>
            Gateways senden außerdem Antworten, die verbergen sollen, ob ein Postfach existiert. Diese
            Antworten sind absichtlich vage und sollen einen Verifizierer täuschen. Giggal.ai erkennt
            sie und hält sie nicht für ein echtes Ergebnis. Kommen nur solche Antworten zurück, werten
            wir das als fehlende Antwort und raten nicht. So erhalten Sie ein Ergebnis, gültig oder
            ungültig, wo die meisten Verifizierer nur Unbekannt melden.
          </p>
        </div>
      </section>

      {/* ── GATEWAYS WE DETECT ───────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-8">
        <h2 className={`${sectionTitle} text-center`}>Gateways, die wir erkennen</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {GATEWAYS.map((g) => (
            <span
              key={g}
              className="inline-flex items-center bg-white border-2 border-slate-200 rounded-xl px-4 py-2.5 text-[13px] font-bold text-slate-700 card-vivid-shadow"
            >
              {g}
            </span>
          ))}
        </div>
        <p className={`${proseP} text-center max-w-2xl mx-auto`}>
          Die Erkennung läuft automatisch über die MX-Einträge der Domain. Sie müssen uns vor dem
          Prüfen nichts über Ihre Liste mitteilen.
        </p>
      </section>

      {/* ── PROOFPOINT ───────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>Proofpoint</h2>
        <p className={proseP}>
          Proofpoint ist eines der am weitesten verbreiteten Secure Email Gateways auf
          Konzern-Domains. Wenn Sie an große Unternehmen verkaufen, liegt ein spürbarer Teil Ihrer
          Liste dahinter. Proofpoint steht vor dem eigentlichen Mailserver und filtert eingehende
          E-Mails auf Bedrohungen. Deshalb liefert eine Standardprüfung bei einer Proofpoint-Domain
          meist keine brauchbare Antwort. Giggal.ai erkennt Proofpoint an den MX-Einträgen der Domain
          und schickt die Adresse über den Gateway-Prüfweg. Statt Unbekannt erhalten Sie ein echtes
          Ergebnis für das Postfach dahinter: zustellbar oder unzustellbar.
        </p>
      </section>

      {/* ── MIMECAST ─────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>Mimecast</h2>
        <p className={proseP}>
          Mimecast soll verhindern, dass jemand herausfindet, welche Postfächer auf einer Domain
          existieren. Auf Anfragen antwortet es absichtlich vage, statt die Adresse zu bestätigen oder
          abzulehnen. Giggal.ai erkennt dieses Verhalten und löst diese Antwort gar nicht erst aus.
          Das schützt die Absenderreputation. Ob das Postfach existiert, prüft Giggal.ai auf einem
          anderen Weg. So erhalten Sie ein echtes Ergebnis statt Unbekannt.
        </p>
        {MIMECAST_PAGE_LIVE && (
          <p className="text-sm font-medium">
            <LocalLink href="/mimecast-email-verification" locale="de" className={`inline-flex items-center gap-1 ${inlineLink}`}>
              So funktioniert die Mimecast-Verifizierung (Englisch)
              <ArrowRight className="w-4 h-4" />
            </LocalLink>
          </p>
        )}
      </section>

      {/* ── BARRACUDA ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-5">
        <h2 className={sectionTitle}>Barracuda</h2>
        <p className={proseP}>
          Barracuda ist auf Domains mittelgroßer Unternehmen verbreitet. Wie andere Gateways steht es
          vor dem eigentlichen Mailserver und filtert eingehende E-Mails. Ein Standard-Verifizierer
          bekommt bei einer Barracuda-Domain meist keine klare Antwort zum Postfach. Der Grund: Es
          antwortet das Gateway, nicht der Mailserver. Giggal.ai erkennt Barracuda an den
          MX-Einträgen der Domain und schickt die Adresse über den Gateway-Prüfweg. Sie erhalten ein
          Ergebnis für das Postfach selbst: zustellbar oder unzustellbar. Sie bekommen also kein Label
          wie Riskant oder Unbekannt, bei dem Sie raten müssen, ob der Kontakt echt ist.
        </p>
      </section>

      {/* ── WHAT YOU GET BACK ────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Welche Ergebnisse Sie erhalten</h2>
        <div className="overflow-hidden rounded-2xl border-2 border-slate-200 card-vivid-shadow bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b-2 border-slate-200">
                <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400">Ergebnis</th>
                <th className="px-5 py-3 text-[11px] font-black uppercase tracking-wider text-slate-400">Bedeutung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {VERDICTS.map(({ Icon, tint, label, meaning }) => (
                <tr key={label}>
                  <td className="px-5 py-4 align-top">
                    <span className="inline-flex items-center gap-2 text-sm font-black text-slate-900">
                      <Icon className={`w-4 h-4 ${tint}`} />
                      {label}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-[13px] sm:text-sm text-slate-600 font-medium">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-600 text-sm md:text-base font-medium">
          Wenn wir eine Adresse nicht prüfen können, wird der Credit automatisch erstattet. Sie zahlen
          nur für Prüfungen, die wir abschließen.
        </p>
        <p className="text-slate-600 text-sm md:text-base font-medium">
          Eine Catch-all-Domain ist ein verwandtes, aber anderes Problem. Enthält Ihre Liste auch
          solche Domains, können wir ebenfalls{' '}
          <LocalLink href="/catch-all-verification" locale="de" className={inlineLink}>
            Catch-all- und riskante E-Mails verifizieren
          </LocalLink>
          .
        </p>
      </section>

      {/* ── PRICING ──────────────────────────────────────────── */}
      <section className="cv-section max-w-6xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className={sectionTitle}>Sie zahlen nur für Adressen, die Sie prüfen</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 card-vivid-shadow text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
              Standard und SEG
            </div>
            <div className="text-3xl font-black text-slate-900">1 Credit</div>
            <div className="text-[13px] text-slate-500 font-semibold">pro E-Mail-Prüfung</div>
          </div>
          <div className="bg-white border-2 border-indigo-100 rounded-3xl p-6 sm:p-8 card-vivid-shadow ring-2 ring-indigo-600/5 text-left space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-indigo-700 bg-indigo-100 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              Catch-all
            </div>
            <div className="text-3xl font-black text-indigo-700">1 Credit</div>
            <div className="text-[13px] text-slate-500 font-semibold">pro Catch-all-E-Mail</div>
          </div>
        </div>
        <p className="text-center text-slate-600 text-sm md:text-base font-medium max-w-2xl mx-auto">
          Keine Monatsgebühren, kein Mindestvolumen, kein Verfall der Credits. Starten Sie mit 1.000
          Gratis-Credits, ohne Kreditkarte. Alle Details finden Sie unter{' '}
          <LocalLink href="/pricing" locale="de" className={inlineLink}>
            Preise und Credits
          </LocalLink>
          .
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Häufige Fragen</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="de" headline="Prüfen Sie eine Liste und sehen Sie den Unterschied" />
      <FooterL10n locale="de" />
    </main>
  )
}
