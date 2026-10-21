import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Rückerstattungsrichtlinie für Credits und Abos',
  description: 'Wie Rückerstattungen bei Giggal.ai funktionieren: Pay-as-you-go-Credits, Abos, Test-Credits, Qualitätsprobleme, Rückbuchungen und der Antrag auf Erstattung.',
  alternates: { canonical: '/de/rueckerstattung', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'de_DE', title: 'Rückerstattungsrichtlinie', url: 'https://giggal.ai/de/rueckerstattung', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Überblick', paragraphs: [
    'Bei Giggal.ai bemühen wir uns, hervorragende E-Mail-Verifizierungsdienste zu erbringen. Diese Rückerstattungsrichtlinie beschreibt, unter welchen Umständen Rückerstattungen für unseren Credit-basierten Dienst gewährt werden können.',
    'Wir erbringen ausschließlich digitale E-Mail-Verifizierungsdienste und verkaufen oder versenden keine physischen Waren.',
  ]},
  { heading: '2. So funktioniert unser Credit-System', paragraphs: ['Giggal.ai arbeitet bei der E-Mail-Verifizierung mit einem Credit-System:'], list: [
    '1 Credit = 1 E-Mail-Prüfung: Jede Prüfung einer E-Mail-Adresse verbraucht 1 Credit von Ihrem Konto',
    'Pay as you go: Sie können jederzeit Credits in größeren Mengen kaufen (Pakete von 3.000 bis 1.000.000 Credits)',
    'Wiederkehrende Credits: Sie können monatlich wiederkehrende Credit-Pakete mit 10 % Rabatt abonnieren',
    'Kein Verfall: Credits verfallen nie und bleiben auf Ihrem Konto, bis sie genutzt werden',
  ]},
  { heading: '3. Kostenlose Test-Credits', paragraphs: ['Neue Nutzer erhalten 1.000 kostenlose Test-Credits, um unseren E-Mail-Verifizierungsdienst zu testen. Bitte beachten Sie:'], list: [
    'Test-Credits werden kostenlos bereitgestellt und erfordern keine Zahlung',
    'Test-Credits sind nicht erstattbar, da sie kostenlos gewährt werden',
    'Für Test-Credits gelten dieselben Prüfregeln wie für bezahlte Credits',
    'Mit Test-Credits können 1.000 E-Mail-Adressen geprüft werden',
  ]},
  { heading: '4. Rückerstattungsregeln für gekaufte Credits' },
  { heading: '4.1 Pay-as-you-go-Credits (Einmalkauf)', level: 3, paragraphs: ['Über Pay-as-you-go-Pakete gekaufte Credits sind nach Abschluss des Kaufs in der Regel nicht erstattbar, weil:'], list: [
    'Credits Ihrem Konto sofort gutgeschrieben werden und sofort nutzbar sind',
    'Credits nicht verfallen und ihren Wert unbegrenzt behalten',
    'Sie flexibel sind und die Credits jederzeit nutzen können',
  ]},
  { heading: '4.2 Wiederkehrende Credit-Abonnements', level: 3, paragraphs: ['Für monatlich wiederkehrende Credit-Abonnements gilt:'], list: [
    'Credits werden monatlich abgerechnet und Ihrem Konto gutgeschrieben',
    'Sie können Ihr Abonnement jederzeit vor dem nächsten Abrechnungszeitraum kündigen',
    'Bereits auf Ihr Konto gutgeschriebene Credits sind nicht erstattbar',
    'Die Kündigung wird zum Ende Ihres laufenden Abrechnungszeitraums wirksam',
    'Nicht genutzte Credits aus Vormonaten bleiben nach der Kündigung auf Ihrem Konto',
  ]},
  { heading: '5. Ausnahmefälle und Support', paragraphs: ['Nach unserer Standardregelung sind Credits nicht erstattbar. Wir wissen jedoch, dass ungewöhnliche Situationen vorkommen können. In folgenden Fällen:'], list: [
    'Technische Fehler, die zu einer falschen Abbuchung von Credits führen',
    'Dienstausfälle, die eine E-Mail-Prüfung verhindern',
    'Doppelte Belastungen oder Abrechnungsfehler',
    'Ungewöhnliche Kontoaktivitäten oder Verdacht auf Betrug',
    'Sonstige außergewöhnliche Umstände',
  ], after: ['Bitte wenden Sie sich sofort an unser Support-Team unter info@giggal.ai. Wir prüfen Ihren Fall gründlich und können nach unserem Ermessen im Einzelfall Rückerstattungen oder Credit-Korrekturen gewähren.']},
  { heading: '6. Probleme mit der Dienstqualität', paragraphs: ['Wenn technische Probleme oder Dienstunterbrechungen die E-Mail-Prüfung verhindern:'], list: [
    'Werden für Prüfungen, die aufgrund von Fehlern unseres Systems fehlschlagen, keine Credits abgezogen',
    'Melden Sie Probleme bei der Prüfung bitte sofort unserem Support-Team',
    'Können wir Ihrem Konto für Dienstunterbrechungen Ausgleichs-Credits gutschreiben',
    'Können längere Ausfälle nach unserem Ermessen zu einer Teilerstattung berechtigen',
  ]},
  { heading: '7. Kontokündigung und Verstöße', paragraphs: ['Wenn Ihr Konto wegen eines Verstoßes gegen unsere Nutzungsbedingungen oder unsere Richtlinie zur zulässigen Nutzung gekündigt wird:'], list: [
    'Werden für nicht genutzte Credits keine Rückerstattungen gewährt',
    'Wird der Zugang zu Ihrem Konto und zu den verbleibenden Credits dauerhaft entzogen',
    'Werden wiederkehrende Abonnements sofort gekündigt',
  ]},
  { heading: '8. Rückerstattung beantragen oder Probleme melden', paragraphs: [
    'Um eine Rückerstattung zu beantragen oder ungewöhnliche Aktivitäten zu melden, wenden Sie sich bitte an unser Support-Team:',
    'E-Mail: info@giggal.ai',
    'Betreff: Refund Request / Issue Report',
    'Bitte geben Sie in Ihrem Antrag folgende Informationen an:',
  ], list: [
    'Die E-Mail-Adresse Ihres Kontos',
    'Transaktions-ID oder Bestellnummer',
    'Ausführliche Beschreibung des Problems oder der ungewöhnlichen Aktivität',
    'Datum und Uhrzeit des Vorfalls (falls zutreffend)',
    'Screenshots oder Nachweise, die Ihr Anliegen belegen (falls zutreffend)',
    'Anzahl der betroffenen Credits',
  ]},
  { heading: '9. Bearbeitungszeiten für Rückerstattungen', paragraphs: ['Wenn Ihr Rückerstattungsantrag genehmigt wird:'], list: [
    'Prüfen wir Ihren Fall innerhalb von 2 bis 3 Werktagen',
    'Erhalten Sie per E-Mail eine Antwort zu unserer Entscheidung',
    'Werden genehmigte Rückerstattungen innerhalb von 5 bis 10 Werktagen bearbeitet',
    'Erfolgt die Rückerstattung über unseren Zahlungsdienstleister auf die ursprüngliche Zahlungsmethode',
    'Kann es je nach Zahlungsanbieter weitere 5 bis 7 Werktage dauern, bis die Rückerstattung auf Ihrem Konto erscheint',
  ]},
  { heading: '10. Rückbuchungen (Chargebacks)', paragraphs: ['Wenn Sie bei Ihrer Bank oder Ihrem Zahlungsanbieter eine Rückbuchung oder einen Zahlungseinspruch einleiten, ohne sich zuvor an uns zu wenden, um das Problem zu lösen:'], list: [
    'Behalten wir uns das Recht vor, Ihr Konto dauerhaft zu kündigen',
    'Werden Sie von der künftigen Nutzung unserer Dienste ausgeschlossen',
    'Verfallen alle verbleibenden Credits',
    'Legen wir dem Zahlungsdienstleister Nachweise vor, um die Belastung zu verteidigen',
  ], after: ['Wir empfehlen Ihnen dringend, sich zuerst an unser Support-Team zu wenden. Wir setzen uns dafür ein, Probleme fair und zügig zu lösen.']},
  { heading: '11. Übertragung von Credits und geteilte Konten', paragraphs: ['Credits sind nicht zwischen Konten übertragbar. Keine Rückerstattung erfolgt für:'], list: [
    'Auf dem falschen Konto gekaufte Credits',
    'Anfragen zur Übertragung von Credits auf ein anderes Konto',
    'Verstöße durch das Teilen von Konten',
  ]},
  { heading: '12. Änderungen dieser Richtlinie', paragraphs: ['Wir behalten uns das Recht vor, diese Rückerstattungsrichtlinie jederzeit zu ändern. Änderungen werden mit ihrer Veröffentlichung auf unserer Website sofort wirksam. Wenn Sie unsere Dienste nach einer Änderung weiter nutzen, gilt dies als Annahme der neuen Richtlinie.']},
  { heading: '13. Kontakt', paragraphs: ['Wenn Sie Fragen zu dieser Rückerstattungsrichtlinie haben oder Unterstützung benötigen, kontaktieren Sie uns bitte:'], list: [
    'E-Mail: info@giggal.ai',
    'Website: https://giggal.ai',
  ], after: [
    'Unser Support-Team setzt sich dafür ein, Ihre Anliegen zu bearbeiten und faire Lösungen zu finden. Wir beantworten alle Anfragen in der Regel innerhalb von 24 bis 48 Stunden.',
    'Diese Rückerstattungsrichtlinie ist Teil unserer Nutzungsbedingungen. Mit der Nutzung der Dienste von Giggal.ai bestätigen Sie, dass Sie diese Richtlinie gelesen und verstanden haben.',
  ]},
]

export default function RueckerstattungPage() {
  return (
    <LegalPageL10n
      locale="de"
      path="/de/rueckerstattung"
      title=""
      accent="Rückerstattungsrichtlinie"
      updated="22. Oktober 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
