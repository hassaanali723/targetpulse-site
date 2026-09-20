import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/de'

// German free checker. Primary query "email adresse prüfen" (2,300 searches a
// month, KD 2), with "email prüfen" 1,600, "mail adresse prüfen" 1,000,
// "email überprüfen" 600 and the rest of the prüfen family (plans/10 section
// 2.1). Page 1 is single-address tool pages whose titles say "kostenlos" and
// "gültig"; the BSI's provider-security test also sits on page 1, so the
// first sentence says what this page does and does not do.

const PATH = '/de/email-adresse-pruefen'
const DESC =
  'E-Mail-Adresse prüfen, ohne eine Mail zu senden: Syntax, MX, SMTP, Catch-all und Wegwerf-Domains in Sekunden. Kostenloser E-Mail-Prüfer ohne Anmeldung.'

export const metadata: Metadata = {
  title: { absolute: 'E-Mail-Adresse prüfen: Kostenloser E-Mail-Checker | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: 'E-Mail-Adresse prüfen: Kostenloser E-Mail-Checker',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai E-Mail-Prüfung' }],
  },
  twitter: { card: 'summary_large_image', title: 'E-Mail-Adresse prüfen: Kostenloser E-Mail-Checker', description: DESC },
}

const faqs: FaqItem[] = [
  {
    q: 'Wie prüfe ich, ob eine E-Mail-Adresse gültig ist?',
    a: 'Adresse oben eingeben und auf "Jetzt prüfen" klicken. Der E-Mail-Prüfer testet die Syntax, sucht die Mailserver der Domain, fragt den Server per SMTP nach dem Postfach und löst Catch-all-Domains auf. Nach wenigen Sekunden steht das Ergebnis: gültig, ungültig oder unbekannt. So lässt sich jede E-Mail-Adresse überprüfen, ohne eine Nachricht zu senden.',
  },
  {
    q: 'Wird eine E-Mail an die Adresse gesendet?',
    a: 'Nein. Die Prüfung ist ein SMTP-Gespräch mit dem Mailserver der Domain: wir fragen, ob das Postfach existiert, und lesen die Antwort, ohne eine Nachricht zuzustellen. Der Empfänger bekommt nichts.',
  },
  {
    q: 'Gibt es diese E-Mail-Adresse wirklich?',
    a: 'Das ist genau die Frage, die der SMTP-Schritt beantwortet: Der Server der Domain bestätigt oder verneint das Postfach. Wem die Adresse gehört, kann keine Prüfung sagen. Mehr dazu in der Anleitung "Gibt es diese E-Mail-Adresse?".',
  },
  {
    q: 'Was bedeutet "Catch-all"?',
    a: 'Eine Catch-all-Domain (auch Accept-all) nimmt Post an jede Adresse an, auch an erfundene. Ein normaler Check bekommt immer ein Ja und kann nicht sagen, ob das Postfach existiert. Giggal führt zusätzliche Prüfungen aus und liefert auch auf diesen Domains gültig oder ungültig.',
  },
  {
    q: 'Was ist ein E-Mail-Checker und was prüft er?',
    a: 'Das Werkzeug auf dieser Seite. Ein E-Mail-Checker prüft die Syntax, die MX-Einträge der Domain, das Postfach per SMTP und ob die Domain Catch-all ist; dazu erkennt er Wegwerfadressen, Rollenkonten und Freemail-Anbieter. Es wird keine E-Mail an die Adresse gesendet.',
  },
  {
    q: 'Was heißt "unbekannt"?',
    a: 'Der Server hat nicht rechtzeitig geantwortet oder wendet Greylisting an. Das heißt nicht, dass das Postfach nicht existiert: Prüfen Sie die Adresse später noch einmal, bevor Sie sie verwerfen.',
  },
  {
    q: 'Prüft der Checker, ob meine E-Mail-Adresse gehackt oder in einem Datenleck war?',
    a: 'Nein. Dieser E-Mail-Checker prüft, ob eine Adresse existiert und Post annimmt. Ob eine Adresse in einem Datenleck aufgetaucht ist, sagen Ihnen der Identity Leak Checker des Hasso-Plattner-Instituts oder die Hinweise des BSI.',
  },
  {
    q: 'Werden die eingegebenen Adressen gespeichert?',
    a: 'Die Adresse dient nur der Prüfung. Sie wird keiner Liste hinzugefügt und nicht für Nachrichten verwendet.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function EmailAdressePruefenPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n('de', [{ name: 'E-Mail-Adresse prüfen', path: PATH }])} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd data={webApplicationL10n('de', PATH, 'Kostenloser E-Mail-Prüfer von Giggal.ai', DESC)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="de" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          E-Mail-Adresse prüfen:{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            kostenloser E-Mail-Prüfer
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Prüfen Sie, ob eine E-Mail-Adresse existiert und zustellbar ist: Syntax, Mailserver,
          SMTP-Postfach und Catch-all-Domains in Sekunden. Es wird keine E-Mail an die Adresse gesendet.
        </p>
      </section>

      {/* ── DAS TOOL ─────────────────────────────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Kostenlos, ohne Anmeldung, ohne Karte. Eine Adresse pro Prüfung, vollständiger SMTP-Test.
        </p>
      </section>

      {/* ── WAS DAS ERGEBNIS BEDEUTET ────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Was das Ergebnis bedeutet</h2>
        <p className={proseP}>
          Jede Prüfung endet mit einem von drei Urteilen. <strong className="text-slate-900">Gültig</strong>{' '}
          heißt: Der Mailserver hat das Postfach bestätigt und die zusätzlichen Prüfungen bestanden;
          eine Mail an diese Adresse sollte ankommen. <strong className="text-slate-900">Ungültig</strong>{' '}
          heißt: Die Syntax ist falsch, die Domain hat keine Mailserver oder der Server hat das
          Postfach abgelehnt; die Mail würde als Hard Bounce zurückkommen.{' '}
          <strong className="text-slate-900">Unbekannt</strong> ist selten und bedeutet, dass der
          Server nicht rechtzeitig geantwortet hat oder Greylisting einsetzt: später noch einmal
          prüfen, statt die Adresse abzuschreiben.
        </p>
        <p className={proseP}>
          Unter dem Urteil stehen die Details, von denen die Zustellung abhängt: der Anbieter (Google
          Workspace, Microsoft 365, ein Gateway wie Proofpoint), der MX-Host, der geantwortet hat,
          ob die Adresse <strong className="text-slate-900">Wegwerf</strong> ist (ein temporäres
          Postfach, das bald verschwindet), <strong className="text-slate-900">Rollen-Adresse</strong>{' '}
          (info@, vertrieb@, support@: geteilte Postfächer, schlecht für Outreach) und ob sie bei
          einem <strong className="text-slate-900">Freemail-Anbieter</strong> wie Gmail, GMX oder
          Web.de liegt, ein nützliches Signal bei B2B-Kontakten.
        </p>
      </section>

      {/* ── GIBT ES DIESE E-MAIL-ADRESSE ─────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Gibt es diese E-Mail-Adresse? Existenz prüfen</h2>
        <p className={proseP}>
          Ob eine Adresse existiert, beantwortet der SMTP-Schritt: Der Mailserver der Domain
          bestätigt das Postfach oder lehnt es ab. Was keine Prüfung sagen kann, ist, wem die
          Adresse gehört; dafür gibt es keine öffentliche Datenbank. Wann sich die Prüfung lohnt,
          welche drei Methoden funktionieren und wo ihre Grenzen liegen, steht in der Anleitung{' '}
          <Link href="/de/email-adresse-pruefen/gibt-es-diese-email-adresse" className="text-indigo-600 font-bold hover:underline">
            Gibt es diese E-Mail-Adresse?
          </Link>
          .
        </p>
      </section>

      {/* ── WAS DER CHECK TESTET ─────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>E-Mail-Checker: E-Mail-Adresse kostenlos prüfen, Schritt für Schritt</h2>
        <p className={proseP}>
          E-Mail-Checker, E-Mail-Prüfer oder Verifizierer: gemeint ist dasselbe Werkzeug.
          E-Mail-Adresse prüfen kostenlos und ohne Anmeldung: das sind die vier Schritte dahinter. Kostenlose Tools, die nach dem ersten aufhören, sind der Grund, warum so viele
          &quot;geprüfte&quot; Listen weiter bouncen.
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
          <li>
            <strong className="text-slate-900">Syntax.</strong> Ist die Adresse richtig geschrieben:
            ein @, ein gültiger lokaler Teil, eine Domain mit Endung? Dieser Schritt findet Tippfehler
            und sonst nichts.
          </li>
          <li>
            <strong className="text-slate-900">MX-Einträge.</strong> Veröffentlicht die Domain
            Mailserver? Ohne MX-Eintrag kann kein Postfach existieren; die Adresse ist tot, bevor
            eine Mail unterwegs ist.
          </li>
          <li>
            <strong className="text-slate-900">SMTP-Prüfung des Postfachs.</strong> Wir öffnen ein
            Gespräch mit dem empfangenden Server, nennen den Empfänger und lesen die Antwort. Ein
            Code 250 heißt, das Postfach wird angenommen, ein 550 heißt, es existiert nicht.
          </li>
          <li>
            <strong className="text-slate-900">Catch-all-Auflösung.</strong> Hat der Server auch zu
            einer erfundenen Adresse Ja gesagt, hat Schritt drei nichts bewiesen. Hier schreiben die
            meisten Prüfer &quot;Catch-all&quot; und hören auf. Giggal wertet die Signale aus, die
            ein echtes Postfach von einer Accept-all-Antwort unterscheiden, und liefert gültig oder
            ungültig.
          </li>
        </ol>
        <p className={proseP}>
          Das Panel oben zeigt jeden Schritt, während er abgeschlossen wird, dazu den Anbieter, den
          MX-Host und ob die Adresse Wegwerf, Rolle oder Freemail ist.
        </p>
      </section>

      {/* ── DREI WÖRTER, EIN TEST ────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>E-Mail-Adresse überprüfen, verifizieren, validieren: drei Wörter, ein Test</h2>
        <p className={proseP}>
          Ob Sie eine E-Mail-Adresse überprüfen lassen, mehrere E-Mail-Adressen prüfen, eine E-Mail
          testen oder eine E-Mail verifizieren wollen: der Test ist derselbe. Geschrieben wird es auch
          Emailadresse prüfen oder Emailadressen prüfen, mal E-Mail-Adresse validieren, mal einfach
          Mailadresse prüfen. Streng genommen prüft die Validierung nur die Form
          der Adresse (Syntax, Domain), die Verifizierung fragt den Mailserver und bestätigt, dass
          das Postfach existiert. Dieser E-Mail-Prüfer macht beides in einem Durchgang, und das
          Ergebnis heißt auf jeder Seite dasselbe: gültig, ungültig, unbekannt.
        </p>
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Was ist eine Catch-all-Domain und warum sagen andere Checker &quot;riskant&quot;?</h2>
        <p className={proseP}>
          Eine Catch-all-Domain zu erkennen ist billig: Das Tool sucht die Mailserver, öffnet eine
          Verbindung und nennt eine zufällige Adresse, die es fast sicher nicht gibt. Nimmt der Server
          sie an, nimmt die Domain alles an, und die Antwort steht nach einem Austausch fest. Deshalb
          sagt Ihnen fast jeder kostenlose E-Mail-Check gern, dass eine Domain Catch-all ist. Welche
          Postfächer hinter der Domain echt sind, ist eine andere Arbeit: mehr Sonden, mehr Signale
          und eine Infrastruktur mit sauberer Absenderreputation. In einer B2B-Liste ist oft ein
          Drittel der Adressen Catch-all, und wer sie pauschal löscht, wirft echte Kunden weg. Giggal
          löst sie einzeln auf und sagt Ihnen, welche Sie behalten. Wie das funktioniert, steht unter{' '}
          <Link href="/de/catch-all-verifizierung" className="text-indigo-600 font-bold hover:underline">
            Catch-all-Verifizierung
          </Link>
          .
        </p>
      </section>

      {/* ── GANZE LISTE ──────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Ganze Liste prüfen: Bulk, API, Integrationen</h2>
        <p className={proseP}>
          Der Einzelcheck ist für eine Adresse nach der anderen. Für eine ganze Datei registrieren
          Sie sich, laden die CSV hoch, und die Massenprüfung führt auf jeder Zeile dieselben Tests
          aus, Catch-all inklusive. Die ersten 1.000 Credits sind gratis, ohne Karte. Die{' '}
          <Link href="/de/preise" className="text-indigo-600 font-bold hover:underline">
            Preise
          </Link>{' '}
          beginnen bei 9,90 $ für 10.000 Prüfungen. Dieselbe Prüfung gibt es als REST-API und über
          die{' '}
          <Link href="/de/integrationen" className="text-indigo-600 font-bold hover:underline">
            Integrationen
          </Link>{' '}
          mit Zapier, n8n und HubSpot.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Häufige Fragen</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="de" headline="Prüfen Sie Ihre ganze Liste" />

      {/* ── WEITERE SEITEN ───────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {[
            { href: '/de/email-adresse-pruefen/gibt-es-diese-email-adresse', label: 'Gibt es diese E-Mail-Adresse? So prüfen Sie es' },
            { href: '/de/catch-all-verifizierung', label: 'Catch-all-Verifizierung und riskante Adressen' },
            { href: '/de/preise', label: 'Preise und Credits' },
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

      <FooterL10n locale="de" />
    </main>
  )
}
