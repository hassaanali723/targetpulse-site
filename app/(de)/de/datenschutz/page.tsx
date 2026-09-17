import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung von Giggal.ai',
  description: 'Wie Giggal.ai personenbezogene Daten und zur Prüfung übermittelte E-Mail-Adressen verarbeitet. Unverbindliche Übersetzung; die englische Fassung ist maßgeblich.',
  alternates: { canonical: '/de/datenschutz', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'de_DE', title: 'Datenschutzerklärung', url: 'https://giggal.ai/de/datenschutz', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Einleitung', paragraphs: ['Giggal.ai ("wir") verpflichtet sich zum Schutz Ihrer Privatsphäre. Diese Erklärung beschreibt, wie wir Ihre Daten erheben, nutzen, weitergeben und schützen, wenn Sie unsere E-Mail-Verifizierungsdienste und unsere Website nutzen.']},
  { heading: '2. Welche Daten wir erheben' },
  { heading: '2.1 Personenbezogene Daten', level: 3, paragraphs: ['Wir können personenbezogene Daten erheben, die Sie uns freiwillig mitteilen, wenn Sie:'], list: [
    'Ein Konto registrieren', 'Credits oder ein Abo kaufen', 'Den Support kontaktieren', 'E-Mail-Listen zur Prüfung übermitteln', 'Kontakt- oder Supportformulare der Website nutzen',
  ], after: ['Dazu können Name, E-Mail-Adresse, Kontokennungen, optionale Firmendaten und Transaktionsmetadaten gehören. Kartendaten werden von unserem Zahlungsdienstleister verarbeitet und nicht von uns gespeichert.']},
  { heading: '2.2 Authentifizierung und technische Daten', level: 3, paragraphs: ['Wir nutzen Clerk für Registrierung und Anmeldung (einschließlich Anmeldung mit Google und mit E-Mail und Passwort). Dabei erheben und verarbeiten wir:'], list: [
    'Kontokennungen (Nutzer-ID, Name, E-Mail)', 'Authentifizierungsanbieter und Anmeldemethode', 'Anmeldemetadaten (etwa Datum und Uhrzeit der Logins)',
    'Technische Sicherheitsdaten (etwa IP-Adresse und User Agent) zum Schutz der Konten und zur Missbrauchsverhinderung', 'Cookies oder Sitzungstoken, die für eine sichere Anmeldung nötig sind',
  ]},
  { heading: '2.3 Daten der E-Mail-Verifizierung', level: 3, paragraphs: ['Bei der Nutzung unserer Dienste erheben und verarbeiten wir:'], list: [
    'Die zur Prüfung übermittelten E-Mail-Adressen', 'Ergebnisse und Status der Prüfung (gültig, ungültig, Catch-all, Wegwerf usw.)',
    'Für die Massenverarbeitung hochgeladene Listen', 'API-Nutzungsdaten und den Prüfverlauf',
  ]},
  { heading: '3. Wie wir die Daten nutzen', list: [
    'Bereitstellung und Pflege der Dienste', 'Abwicklung von Transaktionen und Verwaltung der Abos', 'Versand dienstbezogener Benachrichtigungen', 'Support',
    'Verbesserung und Optimierung der Dienste', 'Erkennung und Verhinderung von Betrug und Missbrauch', 'Erfüllung gesetzlicher Pflichten', 'Analyse von Nutzung und Trends',
  ]},
  { heading: '4. Rechtsgrundlage der Verarbeitung (DSGVO)', paragraphs: ['Wenn Sie sich im Europäischen Wirtschaftsraum befinden, hängt die Rechtsgrundlage von den Daten und dem Kontext ab:'], list: [
    'Vertragserfüllung: Die Verarbeitung ist zur Erbringung der Dienste erforderlich', 'Berechtigtes Interesse: Die Verarbeitung dient unseren berechtigten Interessen',
    'Einwilligung: Sie haben für bestimmte Zwecke ausdrücklich eingewilligt', 'Rechtliche Verpflichtung: Die Verarbeitung ist zur Einhaltung von Gesetzen erforderlich',
  ]},
  { heading: '5. Weitergabe der Daten' },
  { heading: '5.1 Dienstleister', level: 3, paragraphs: ['Wir geben Daten an Drittanbieter weiter, die in unserem Auftrag tätig sind:'], list: [
    'Zahlungsdienstleister', 'Authentifizierungsanbieter (wie Clerk)', 'Cloud-Hosting-Anbieter', 'Sicherheits- und Monitoring-Anbieter', 'Kundensupport-Tools',
  ]},
  { heading: '5.2 Gesetzliche Pflichten', level: 3, paragraphs: ['Wir können Daten offenlegen, wenn dies gesetzlich vorgeschrieben ist oder auf berechtigte Anfragen von Behörden (etwa Gerichtsbeschlüsse) hin.']},
  { heading: '5.3 Unternehmensübertragungen', level: 3, paragraphs: ['Bei einer Fusion, Übernahme oder Veräußerung von Vermögenswerten können Daten im Rahmen der Transaktion übertragen werden.']},
  { heading: '6. Datensicherheit', paragraphs: ['Wir setzen angemessene technische und organisatorische Maßnahmen zum Schutz der Daten ein, darunter:'], list: [
    'Verschlüsselung der Daten bei der Übertragung und im Ruhezustand', 'Regelmäßige Sicherheitsbewertungen', 'Zugriffskontrollen und Authentifizierung', 'Sichere Rechenzentren', 'Schulung des Personals zum Datenschutz',
  ], after: ['Keine Übertragungsmethode über das Internet ist zu 100 % sicher, und wir können keine absolute Sicherheit garantieren.']},
  { heading: '7. Aufbewahrung der Daten', paragraphs: ['Wir bewahren personenbezogene Daten nur so lange auf, wie es für die in dieser Erklärung genannten Zwecke nötig ist, sofern das Gesetz keine längere Frist verlangt oder erlaubt. Werden sie nicht mehr benötigt, löschen oder anonymisieren wir sie sicher.']},
  { heading: '8. Ihre Rechte', paragraphs: ['Je nach Ihrem Standort können Ihnen folgende Rechte zustehen:'], list: [
    'Auskunft: Zugang zu Ihren Daten verlangen', 'Berichtigung: Korrektur unrichtiger Daten verlangen', 'Löschung: Löschung der Daten verlangen',
    'Übertragbarkeit: eine Kopie der Daten in einem übertragbaren Format erhalten', 'Einschränkung: Einschränkung der Verarbeitung verlangen', 'Widerspruch: der Verarbeitung widersprechen',
    'Widerruf der Einwilligung: die Einwilligung widerrufen, wenn die Verarbeitung darauf beruht',
  ], after: ['Zur Ausübung dieser Rechte schreiben Sie an info@giggal.ai.']},
  { heading: '9. Cookies und Tracking-Technologien', paragraphs: ['Wir nutzen Cookies und ähnliche Technologien, um die Aktivität auf der Website zu verfolgen und bestimmte Informationen zu speichern. Sie können Ihren Browser so einstellen, dass er Cookies ablehnt oder anzeigt, wenn ein Cookie gesetzt wird; einige Teile des Dienstes funktionieren dann möglicherweise nicht richtig.']},
  { heading: '10. Links zu Websites Dritter', paragraphs: ['Die Website kann Links zu Websites Dritter enthalten. Für deren Datenschutzpraktiken sind wir nicht verantwortlich; bitte lesen Sie deren Erklärungen.']},
  { heading: '11. Datenschutz von Minderjährigen', paragraphs: ['Unsere Dienste richten sich nicht an Personen unter 18 Jahren. Wir erheben wissentlich keine Daten von Minderjährigen. Sollten Sie erfahren, dass ein Minderjähriger uns personenbezogene Daten übermittelt hat, kontaktieren Sie uns; wir löschen sie.']},
  { heading: '12. Internationale Übermittlungen', paragraphs: ['Daten können auf Systeme außerhalb Ihres Landes übertragen und dort gespeichert werden, wo die Datenschutzgesetze abweichen können. Wir treffen angemessene Garantien, um die Daten im Einklang mit dieser Erklärung zu schützen.']},
  { heading: '13. Rechte von Einwohnern Kaliforniens (CCPA)', list: [
    'Recht zu erfahren, welche personenbezogenen Daten erhoben werden', 'Recht zu erfahren, ob Daten verkauft oder weitergegeben werden',
    'Recht, dem Verkauf der Daten zu widersprechen', 'Recht auf Löschung', 'Recht, für die Ausübung dieser Rechte nicht benachteiligt zu werden',
  ]},
  { heading: '14. Änderungen dieser Erklärung', paragraphs: ['Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit neuem Aktualisierungsdatum veröffentlicht. Wir empfehlen, sie regelmäßig zu lesen.']},
  { heading: '15. Kontakt', paragraphs: ['Bei Fragen zu dieser Erklärung: E-Mail info@giggal.ai, Website https://giggal.ai.', 'Mit der Nutzung der Dienste von Giggal.ai bestätigen Sie, diese Erklärung gelesen und verstanden zu haben und ihre Bedingungen anzunehmen.']},
]

export default function DatenschutzPage() {
  return (
    <LegalPageL10n
      locale="de"
      path="/de/datenschutz"
      title="Datenschutz"
      accent="erklärung"
      updated="4. Februar 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
