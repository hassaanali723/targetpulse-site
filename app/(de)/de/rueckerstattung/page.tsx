import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Rückerstattungsrichtlinie für Credits',
  description: 'Wann Giggal.ai Credits erstattet: Test-Credits, Einmalkäufe, Abos, Ausnahmefälle und Bearbeitungszeiten. Unverbindliche Übersetzung, die englische Fassung gilt.',
  alternates: { canonical: '/de/rueckerstattung', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'de_DE', title: 'Rückerstattungsrichtlinie', url: 'https://giggal.ai/de/rueckerstattung', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Überblick', paragraphs: [
    'Diese Richtlinie beschreibt, unter welchen Umständen Rückerstattungen für unseren Credit-basierten Dienst gewährt werden können.',
    'Wir erbringen ausschließlich digitale E-Mail-Verifizierungsdienste und verkaufen oder versenden keine physischen Waren.',
  ]},
  { heading: '2. So funktioniert das Credit-System', list: [
    '1 Credit = 1 Prüfung: Jede Prüfung verbraucht 1 Credit Ihres Kontos', 'Einmalkauf: Sie kaufen Credit-Pakete, wann Sie wollen',
    'Wiederkehrende Credits: monatliche Pakete im Abo mit Rabatt', 'Kein Verfall: Credits bleiben auf dem Konto, bis Sie sie nutzen',
  ]},
  { heading: '3. Kostenlose Test-Credits', paragraphs: ['Neue Nutzer erhalten 1.000 Test-Credits. Bitte beachten Sie:'], list: [
    'Sie sind kostenlos und erfordern keine Zahlung', 'Sie sind als Geschenk nicht erstattbar', 'Für sie gelten dieselben Regeln wie für bezahlte Credits', 'Sie erlauben die Prüfung von 1.000 Adressen',
  ]},
  { heading: '4. Erstattung gekaufter Credits' },
  { heading: '4.1 Einmalig gekaufte Credits', level: 3, paragraphs: ['Einmalig gekaufte Credits sind nach Abschluss des Kaufs in der Regel nicht erstattbar, weil:'], list: [
    'Sie dem Konto sofort gutgeschrieben werden und sofort verfügbar sind', 'Sie nicht verfallen und ihren Wert behalten', 'Sie sie jederzeit nutzen können',
  ]},
  { heading: '4.2 Wiederkehrende Credit-Abos', level: 3, list: [
    'Credits werden jeden Monat abgebucht und gutgeschrieben', 'Sie können jederzeit vor dem nächsten Zyklus kündigen', 'Bereits gutgeschriebene Credits sind nicht erstattbar',
    'Die Kündigung wird zum Ende des laufenden Zeitraums wirksam', 'Nicht genutzte Credits aus Vormonaten bleiben nach der Kündigung auf dem Konto',
  ]},
  { heading: '5. Ausnahmefälle und Support', paragraphs: ['Grundsätzlich sind Credits nicht erstattbar, aber wir wissen, dass ungewöhnliche Situationen vorkommen. Bei:'], list: [
    'Technischen Fehlern, die zu falschen Credit-Abbuchungen führen', 'Dienstausfällen, die die Prüfung verhindern', 'Doppelten Abbuchungen oder Abrechnungsfehlern',
    'Auffälligen Kontoaktivitäten oder Betrugsverdacht', 'Anderen außergewöhnlichen Umständen',
  ], after: ['Wenden Sie sich sofort an den Support unter info@giggal.ai. Wir prüfen den Fall und können nach eigenem Ermessen Rückerstattungen oder Credit-Korrekturen gewähren, jeweils im Einzelfall.']},
  { heading: '6. Probleme mit der Dienstqualität', paragraphs: ['Wenn technische Probleme oder Ausfälle die Prüfung verhindern:'], list: [
    'Werden für Prüfungen, die an Fehlern unseres Systems scheitern, keine Credits abgezogen', 'Melden Sie Prüfprobleme sofort dem Support',
    'Können wir für Ausfälle Ausgleichs-Credits gutschreiben', 'Können längere Ausfälle nach unserem Ermessen zu Teilerstattungen berechtigen',
  ]},
  { heading: '7. Kontoschließung und Verstöße', paragraphs: ['Wird das Konto wegen Verstoßes gegen die Nutzungsbedingungen oder die Richtlinie zur zulässigen Nutzung geschlossen:'], list: [
    'Werden nicht genutzte Credits nicht erstattet', 'Wird der Zugang zum Konto und zu den restlichen Credits dauerhaft entzogen', 'Werden Abos sofort gekündigt',
  ]},
  { heading: '8. Rückerstattung beantragen oder ein Problem melden', paragraphs: ['Schreiben Sie dem Support: E-Mail info@giggal.ai, Betreff "Refund Request / Issue Report". Bitte angeben:'], list: [
    'Die E-Mail-Adresse Ihres Kontos', 'Die Transaktions- oder Bestell-ID', 'Eine ausführliche Beschreibung des Problems', 'Datum und Uhrzeit des Vorfalls (falls zutreffend)',
    'Screenshots oder Belege (falls zutreffend)', 'Die Anzahl der betroffenen Credits',
  ]},
  { heading: '9. Bearbeitungszeiten', paragraphs: ['Wird der Antrag genehmigt:'], list: [
    'Prüfen wir den Fall innerhalb von 2 bis 3 Werktagen', 'Erhalten Sie die Entscheidung per E-Mail', 'Werden genehmigte Erstattungen innerhalb von 5 bis 10 Werktagen bearbeitet',
    'Erfolgt die Erstattung auf die ursprüngliche Zahlungsmethode über unseren Zahlungsdienstleister', 'Können weitere 5 bis 7 Werktage vergehen, bis sie auf Ihrem Konto erscheint',
  ]},
  { heading: '10. Rückbuchungen (Chargebacks)', paragraphs: ['Wenn Sie bei Ihrer Bank oder Ihrem Zahlungsanbieter eine Rückbuchung einleiten, ohne uns vorher zu kontaktieren:'], list: [
    'Behalten wir uns das Recht vor, Ihr Konto dauerhaft zu schließen', 'Können Sie unsere Dienste nicht mehr nutzen', 'Verfallen alle restlichen Credits',
    'Legen wir dem Zahlungsdienstleister Belege zur Verteidigung der Abbuchung vor',
  ], after: ['Bitte kontaktieren Sie zuerst den Support: Wir lösen Probleme fair und schnell.']},
  { heading: '11. Übertragung von Credits und geteilte Konten', paragraphs: ['Credits sind nicht zwischen Konten übertragbar. Nicht erstattet werden:'], list: [
    'Auf dem falschen Konto gekaufte Credits', 'Anträge auf Übertragung auf ein anderes Konto', 'Verstöße durch geteilte Konten',
  ]},
  { heading: '12. Änderungen dieser Richtlinie', paragraphs: ['Wir behalten uns das Recht vor, diese Richtlinie jederzeit zu ändern. Änderungen gelten ab Veröffentlichung auf der Website. Mit der weiteren Nutzung der Dienste akzeptieren Sie die neue Fassung.']},
  { heading: '13. Kontakt', paragraphs: [
    'Bei Fragen oder für Support: E-Mail info@giggal.ai, Website https://giggal.ai. Wir antworten in der Regel innerhalb von 24 bis 48 Stunden.',
    'Diese Richtlinie ist Teil der Nutzungsbedingungen. Mit der Nutzung der Dienste von Giggal.ai bestätigen Sie, sie gelesen und verstanden zu haben.',
  ]},
]

export default function RueckerstattungPage() {
  return (
    <LegalPageL10n
      locale="de"
      path="/de/rueckerstattung"
      title="Rückerstattungs"
      accent="richtlinie"
      updated="4. Februar 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
