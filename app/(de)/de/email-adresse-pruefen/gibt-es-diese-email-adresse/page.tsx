import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, howToLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/de'

// The existence question: "gibt es diese email adresse" 250 a month, "gibt es
// die email adresse" 150, "existiert diese email" 100 and the smaller
// phrasings (700 in all, KD 1 to 5; plans/10 section 2.1). "Wem gehört sie"
// (500) is answered honestly in one paragraph: a check cannot tell.

const PATH = '/de/email-adresse-pruefen/gibt-es-diese-email-adresse'
const DESC =
  'Gibt es diese E-Mail-Adresse? So prüfen Sie, ob sie existiert, ohne eine Mail zu senden: SMTP-Prüfung, MX-Eintrag und manuelle Suche, mit ihren Grenzen.'

export const metadata: Metadata = {
  title: { absolute: 'Gibt es diese E-Mail-Adresse? Existenz prüfen | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'de_DE',
    title: 'Gibt es diese E-Mail-Adresse? So prüfen Sie, ob sie existiert',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'article',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai E-Mail-Prüfung' }],
  },
}

const steps = [
  {
    name: 'SMTP-Prüfung ohne E-Mail-Versand',
    text: 'Ein Prüf-Tool öffnet ein Gespräch mit dem Mailserver der Domain, nennt den Empfänger und liest den Antwortcode: 250, wenn das Postfach angenommen wird, 550, wenn es nicht existiert. Es wird keine Nachricht zugestellt.',
  },
  {
    name: 'MX-Eintrag der Domain nachschlagen',
    text: 'Veröffentlicht die Domain keine MX-Einträge, kann auf ihr kein Postfach existieren. Eine DNS-Abfrage zeigt das in einer Sekunde; ein vorhandener MX-Eintrag beweist aber nicht, dass das einzelne Postfach existiert.',
  },
  {
    name: 'Auf der Website oder bei LinkedIn nachsehen',
    text: 'Bei einem wichtigen Kontakt: Suchen Sie das Adressformat des Unternehmens (vorname.nachname@, initiale+nachname@) auf der Website oder in öffentlichen Profilen und vergleichen Sie. Langsam, aber nützlich, wenn der Server "unbekannt" antwortet.',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'Gibt es diese E-Mail-Adresse, ohne dass ich eine Mail schicken muss?',
    a: 'Ja. Die SMTP-Prüfung fragt den Mailserver, ob das Postfach existiert, und liest die Antwort, ohne eine Nachricht zuzustellen. Genau das macht das Tool auf dieser Seite.',
  },
  {
    q: 'Existiert die E-Mail-Adresse, wenn meine Mail nicht zurückkommt?',
    a: 'Nicht unbedingt. Auf einer Catch-all-Domain nimmt der Server jede Adresse an und erzeugt keinen Bounce; das Ausbleiben einer Fehlermeldung sagt also nichts. Dafür braucht es die Catch-all-Auflösung.',
  },
  {
    q: 'Wem gehört diese E-Mail-Adresse?',
    a: 'Das kann keine Prüfung beantworten. Eine SMTP-Prüfung sagt, ob das Postfach existiert, und die Domain verrät das Unternehmen oder den Anbieter; den Namen des Inhabers gibt kein Mailserver preis. Wer den Inhaber sucht, vergleicht das Adressformat mit öffentlichen Profilen.',
  },
  {
    q: 'Warum steht im Ergebnis "unbekannt"?',
    a: 'Der Server hat nicht rechtzeitig geantwortet, wendet bei neuen Absendern Greylisting an oder steht hinter einem Sicherheits-Gateway, das alles annimmt. Später noch einmal prüfen oder die vollständige Catch-all-Verifizierung nutzen.',
  },
  {
    q: 'Lassen sich GMX-, Web.de- und T-Online-Adressen prüfen?',
    a: 'Ja. Die großen deutschen Anbieter antworten auf SMTP-Anfragen; GMX und Web.de setzen bei unbekannten Absendern manchmal Greylisting ein, dann hilft ein zweiter Versuch nach einigen Minuten.',
  },
  {
    q: 'Was mache ich mit einer Adresse, die es nicht gibt?',
    a: 'Aus der Liste entfernen und nicht erneut senden: Jeder Versuch an ein nicht existierendes Postfach verschlechtert die Reputation Ihrer Domain. Ist der Kontakt wichtig, suchen Sie seine aktuelle Adresse.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function GibtEsDieseEmailAdressePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbL10n('de', [
          { name: 'E-Mail-Adresse prüfen', path: '/de/email-adresse-pruefen' },
          { name: 'Gibt es diese E-Mail-Adresse?', path: PATH },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${PATH}#howto`,
          name: 'So prüfen Sie, ob eine E-Mail-Adresse existiert',
          description: DESC,
          steps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="de" />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">
          <Link href="/de/email-adresse-pruefen" className="hover:underline">E-Mail-Adresse prüfen</Link> › Gibt es diese Adresse?
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          Gibt es diese E-Mail-Adresse? So prüfen Sie, ob sie existiert
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Eine E-Mail-Adresse existiert, wenn der Mailserver ihrer Domain das Postfach annimmt,
          sobald man es ihm in einem SMTP-Gespräch nennt. Das lässt sich fragen, ohne eine Nachricht
          zu senden: Genau das tut das Tool unten in wenigen Sekunden. Gibt es die E-Mail-Adresse,
          oder gibt es sie nicht: die Antwort kommt vom Server selbst. Auf Catch-all-Domains, die
          alles annehmen, braucht es zusätzliche Prüfungen, und auch die führt es aus.
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
          Kostenlos, ohne Anmeldung. Dasselbe Tool wie auf der Seite{' '}
          <Link href="/de/email-adresse-pruefen" className="text-indigo-600 font-bold hover:underline">E-Mail-Adresse prüfen</Link>.
        </p>
      </section>

      {steps.map((s, i) => (
        <section key={s.name} className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
          <h2 className={sectionTitle}>Methode {i + 1}: {s.name}</h2>
          <p className={proseP}>{s.text}</p>
          {i === 0 && (
            <p className={proseP}>
              Das ist die zuverlässigste und schnellste Methode, mit einer Grenze: Manche Server
              antworten unbekannten Absendern nicht (Greylisting) oder sagen zu allem Ja. Im ersten
              Fall lautet das Ergebnis &quot;unbekannt&quot;, und ein zweiter Versuch lohnt sich; im
              zweiten Fall ist die Domain Catch-all, und es braucht den Schritt weiter unten.
            </p>
          )}
          {i === 1 && (
            <p className={proseP}>
              Eine Domain mit gültigen MX-Einträgen und einem antwortenden Server ist die Grundlage.
              Fehlt sie, können Sie die Adresse ohne weitere Prüfung verwerfen. Ist sie da, müssen
              Sie für das einzelne Postfach trotzdem zu Methode 1.
            </p>
          )}
        </section>
      ))}

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Wem gehört die E-Mail-Adresse? Was eine Prüfung nicht sagen kann</h2>
        <p className={proseP}>
          Viele suchen nach &quot;E-Mail-Adresse prüfen, wem gehört sie&quot;. Die ehrliche Antwort:
          Ein Mailserver bestätigt oder verneint ein Postfach, mehr nicht. Er nennt keinen Namen, und
          es gibt keine öffentliche Datenbank, die Adressen Personen zuordnet. Was die Prüfung liefert,
          ist die Domain (und damit das Unternehmen oder den Anbieter), der MX-Host und ob die Adresse
          eine Rollen-, Wegwerf- oder Freemail-Adresse ist. Für den Inhaber bleibt nur Methode 3:
          das Adressformat mit öffentlichen Profilen vergleichen.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Warum &quot;die Mail kam nicht zurück&quot; auf einer Catch-all-Domain nichts beweist</h2>
        <p className={proseP}>
          Viele Anleitungen raten, eine Testmail zu schicken und auf den Bounce zu warten. Auf einer
          Catch-all-Domain nimmt der Server jeden Empfänger an, die Mail kommt also auch dann nicht
          zurück, wenn das Postfach nicht existiert: Sie landet in einem Ordner, den niemand liest,
          oder wird still verworfen. Ein ausbleibender Bounce ist keine Bestätigung. Die{' '}
          <Link href="/de/catch-all-verifizierung" className="text-indigo-600 font-bold hover:underline">
            Catch-all-Verifizierung
          </Link>{' '}
          von Giggal wertet weitere Signale des Servers und des Postfachs aus und liefert auch hier
          gültig oder ungültig.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Was tun mit einer Adresse, die es nicht gibt</h2>
        <p className={proseP}>
          Aus der Liste nehmen und nicht erneut versuchen: Jede Mail an ein nicht existierendes
          Postfach ist ein Hard Bounce, und die Anbieter zählen Hard Bounces, um zu entscheiden, ob
          Sie ein vertrauenswürdiger Absender sind. Ist der Kontakt wichtig, suchen Sie seine aktuelle
          Adresse, statt auf der alten zu bestehen. Für eine ganze Liste erledigt die Massenprüfung
          diese Bereinigung auf jeder Zeile vor dem Versand.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Häufige Fragen</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="de" headline="Prüfen Sie Ihre ganze Liste" />
      <FooterL10n locale="de" />
    </main>
  )
}
