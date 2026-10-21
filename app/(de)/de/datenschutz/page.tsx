import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung für die E-Mail-Verifizierung',
  description: 'Wie Giggal.ai (TargetPulse Ltd) Ihre Daten bei der E-Mail-Prüfung erhebt, nutzt, weitergibt und schützt, wie lange wir sie speichern und Ihre Rechte nach DSGVO.',
  alternates: { canonical: '/de/datenschutz', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'de_DE', title: 'Datenschutzerklärung', url: 'https://giggal.ai/de/datenschutz', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Einleitung', paragraphs: [
    'Dieser Dienst wird von TargetPulse Ltd ("wir", "uns") betrieben, einer in England und Wales unter der Nummer 17079825 eingetragenen Gesellschaft mit eingetragenem Sitz in Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd ist Verantwortlicher für die über Giggal.ai verarbeiteten personenbezogenen Daten. Kontakt: info@giggal.ai. Missbrauchsmeldungen: abuse@giggal.ai.',
    'Giggal.ai ("wir", "unser" oder "uns") verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzerklärung erläutert, wie wir Ihre Informationen erheben, verwenden, offenlegen und schützen, wenn Sie unsere E-Mail-Verifizierungsdienste und unsere Website nutzen.',
  ]},
  { heading: '2. Welche Informationen wir erheben' },
  { heading: '2.1 Personenbezogene Informationen', level: 3, paragraphs: ['Wir können personenbezogene Informationen erheben, die Sie uns freiwillig zur Verfügung stellen, wenn Sie:'], list: [
    'Ein Konto registrieren',
    'Verifizierungs-Credits oder ein Abonnement kaufen',
    'Unseren Kundensupport kontaktieren',
    'E-Mail-Listen zur Prüfung übermitteln',
    'Kontakt- oder Supportformulare auf unserer Website nutzen',
  ], after: ['Diese Informationen können Folgendes umfassen: Name, E-Mail-Adresse, Kontokennungen, optionale Unternehmensangaben und Transaktionsmetadaten. Zahlungskartendaten werden von unserem Zahlungsdienstleister verarbeitet und nicht von uns gespeichert.']},
  { heading: '2.2 Authentifizierung und technische Daten', level: 3, paragraphs: ['Wir nutzen Clerk für die Kontoregistrierung und die Anmeldung (einschließlich der Anmeldung mit Google und der Registrierung mit E-Mail und Passwort). Im Rahmen dieses Authentifizierungsprozesses erheben und verarbeiten wir:'], list: [
    'Kontokennungen (etwa Nutzer-ID, Name und E-Mail-Adresse)',
    'Authentifizierungsanbieter und Anmeldemethode (Google oder E-Mail und Passwort)',
    'Metadaten zur Anmeldeaktivität (etwa Zeitstempel der Anmeldungen)',
    'Sicherheitsbezogene technische Daten (etwa IP-Adresse und User Agent), die zum Schutz der Konten und zur Verhinderung von Missbrauch verwendet werden',
    'Notwendige Sitzungscookies oder Token, die erforderlich sind, damit Sie sicher angemeldet bleiben',
  ]},
  { heading: '2.3 Daten der E-Mail-Verifizierung', level: 3, paragraphs: ['Wenn Sie unsere E-Mail-Verifizierungsdienste nutzen, erheben und verarbeiten wir:'], list: [
    'Zur Prüfung übermittelte E-Mail-Adressen',
    'Prüfergebnisse und Status (gültig, ungültig, Catch-all, Wegwerfadresse usw.)',
    'Zur Verarbeitung hochgeladene E-Mail-Listen für die Massenprüfung',
    'API-Nutzungsdaten und Prüfverlauf',
  ]},
  { heading: '3. Wie wir Ihre Informationen verwenden', paragraphs: ['Wir verwenden die erhobenen Informationen für folgende Zwecke:'], list: [
    'Zur Bereitstellung und Pflege unserer Dienste',
    'Zur Abwicklung Ihrer Transaktionen und zur Verwaltung von Abonnements',
    'Zum Versand dienstbezogener Benachrichtigungen an Sie',
    'Zur Bereitstellung von Kundensupport',
    'Zur Verbesserung und Optimierung unserer Dienste',
    'Zur Erkennung und Verhinderung von Betrug und Missbrauch',
    'Zur Erfüllung rechtlicher Verpflichtungen',
    'Zur Analyse von Nutzungsmustern und Trends',
  ]},
  { heading: '4. Rechtsgrundlage der Verarbeitung (DSGVO)', paragraphs: ['Wenn Sie aus dem Europäischen Wirtschaftsraum (EWR) stammen, hängt unsere Rechtsgrundlage für die Erhebung und Verwendung Ihrer Informationen von den Daten und dem Kontext ab:'], list: [
    'Vertragserfüllung: Die Verarbeitung ist zur Erbringung unserer Dienste erforderlich',
    'Berechtigte Interessen: Die Verarbeitung liegt in unseren berechtigten geschäftlichen Interessen',
    'Einwilligung: Sie haben für bestimmte Zwecke ausdrücklich eingewilligt',
    'Rechtliche Verpflichtung: Die Verarbeitung ist zur Einhaltung gesetzlicher Vorschriften erforderlich',
  ]},
  { heading: '5. Weitergabe und Offenlegung von Daten' },
  { heading: '5.1 Dienstleister', level: 3, paragraphs: ['Wir geben Ihre Informationen an externe Dienstleister weiter, die in unserem Auftrag Leistungen erbringen:'], list: [
    'Zahlungsabwickler (unser autorisiertes Zahlungs-Gateway)',
    'Authentifizierungsanbieter (wie Clerk)',
    'Cloud-Hosting-Anbieter',
    'Anbieter für Sicherheit und Überwachung',
    'Tools für den Kundensupport',
  ]},
  { heading: '5.2 Gesetzliche Anforderungen', level: 3, paragraphs: ['Wir können Ihre Informationen offenlegen, wenn wir gesetzlich dazu verpflichtet sind oder wenn Behörden dies rechtmäßig verlangen (z. B. Gerichtsbeschlüsse, Vorladungen).']},
  { heading: '5.3 Unternehmensübertragungen', level: 3, paragraphs: ['Wenn wir an einer Fusion, einer Übernahme oder einem Verkauf von Vermögenswerten beteiligt sind, können Ihre Informationen im Rahmen dieser Transaktion übertragen werden.']},
  { heading: '6. Datensicherheit', paragraphs: ['Wir setzen geeignete technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Informationen zu schützen, darunter:'], list: [
    'Verschlüsselung von Daten bei der Übertragung und im Ruhezustand',
    'Regelmäßige Sicherheitsbewertungen',
    'Zugriffskontrollen und Authentifizierung',
    'Sichere Rechenzentren',
    'Schulung der Mitarbeiter zum Datenschutz',
  ], after: ['Allerdings ist keine Methode der Übertragung über das Internet zu 100 % sicher, und wir können keine absolute Sicherheit garantieren.']},
  { heading: '7. Aufbewahrung der Daten', paragraphs: ['Wir bewahren Ihre personenbezogenen Informationen nur so lange auf, wie es zur Erfüllung der in dieser Datenschutzerklärung genannten Zwecke erforderlich ist, sofern nicht eine längere Aufbewahrungsfrist gesetzlich vorgeschrieben oder zulässig ist. Wenn wir Ihre Informationen nicht mehr benötigen, löschen oder anonymisieren wir sie auf sichere Weise.']},
  { heading: '8. Ihre Rechte', paragraphs: ['Je nach Ihrem Standort können Ihnen folgende Rechte zustehen:'], list: [
    'Auskunft: Zugang zu Ihren personenbezogenen Informationen verlangen',
    'Berichtigung: Berichtigung unrichtiger Informationen verlangen',
    'Löschung: Löschung Ihrer Informationen verlangen',
    'Datenübertragbarkeit: Eine Kopie Ihrer Daten in einem übertragbaren Format verlangen',
    'Einschränkung: Einschränkung der Verarbeitung verlangen',
    'Widerspruch: Der Verarbeitung Ihrer Informationen widersprechen',
    'Widerruf der Einwilligung: Ihre Einwilligung widerrufen, wenn die Verarbeitung auf einer Einwilligung beruht',
  ], after: ['Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter info@giggal.ai.']},
  { heading: '9. Cookies und Tracking-Technologien', paragraphs: ['Wir verwenden Cookies und ähnliche Tracking-Technologien, um Aktivitäten auf unserer Website zu verfolgen und bestimmte Informationen zu speichern. Sie können Ihren Browser anweisen, alle Cookies abzulehnen oder anzuzeigen, wenn ein Cookie gesendet wird. Wenn Sie keine Cookies akzeptieren, können Sie jedoch einige Teile unseres Dienstes möglicherweise nicht nutzen.']},
  { heading: '10. Links zu Websites Dritter', paragraphs: ['Unsere Website kann Links zu Websites Dritter enthalten. Wir sind nicht für die Datenschutzpraktiken dieser externen Websites verantwortlich. Wir empfehlen Ihnen, die Datenschutzerklärungen aller Websites Dritter zu lesen, die Sie besuchen.']},
  { heading: '11. Datenschutz von Kindern', paragraphs: ['Unsere Dienste richten sich nicht an Personen unter 18 Jahren. Wir erheben wissentlich keine personenbezogenen Informationen von Kindern. Wenn Sie feststellen, dass ein Kind uns personenbezogene Informationen übermittelt hat, kontaktieren Sie uns bitte. Wir werden dann Schritte unternehmen, um diese Informationen zu löschen.']},
  { heading: '12. Internationale Datenübermittlungen', paragraphs: ['Ihre Informationen können auf Computer außerhalb Ihres Bundesstaats, Ihrer Provinz, Ihres Landes oder einer anderen staatlichen Rechtsordnung übertragen und dort gespeichert werden, in denen andere Datenschutzgesetze gelten können. Wir stellen sicher, dass für solche Übermittlungen geeignete Garantien bestehen.']},
  { heading: '13. Datenschutzrechte für Einwohner Kaliforniens (CCPA)', paragraphs: ['Wenn Sie in Kalifornien ansässig sind, haben Sie besondere Rechte in Bezug auf Ihre personenbezogenen Informationen:'], list: [
    'Recht zu erfahren, welche personenbezogenen Informationen erhoben werden',
    'Recht zu erfahren, ob personenbezogene Informationen verkauft oder offengelegt werden',
    'Recht, dem Verkauf personenbezogener Informationen zu widersprechen (Opt-out)',
    'Recht auf Löschung personenbezogener Informationen',
    'Recht auf Nichtdiskriminierung bei Ausübung der Rechte nach dem CCPA',
  ]},
  { heading: '14. Änderungen dieser Datenschutzerklärung', paragraphs: ['Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir informieren Sie über Änderungen, indem wir die neue Datenschutzerklärung auf dieser Seite veröffentlichen und das Datum "Zuletzt aktualisiert" anpassen. Wir empfehlen Ihnen, diese Datenschutzerklärung regelmäßig auf Änderungen zu prüfen.']},
  { heading: '15. Kontakt', paragraphs: ['Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte:'], list: [
    'E-Mail: info@giggal.ai',
    'Website: https://giggal.ai',
  ], after: ['Mit der Nutzung der Dienste von Giggal.ai bestätigen Sie, dass Sie diese Datenschutzerklärung gelesen und verstanden haben, und erklären sich mit ihren Bedingungen einverstanden.']},
]

export default function DatenschutzPage() {
  return (
    <LegalPageL10n
      locale="de"
      path="/de/datenschutz"
      title=""
      accent="Datenschutzerklärung"
      updated="1. Oktober 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
