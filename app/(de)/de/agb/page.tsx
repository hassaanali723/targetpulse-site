import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB)',
  description: 'Nutzungsbedingungen des E-Mail-Verifizierungsdienstes Giggal.ai. Unverbindliche Übersetzung; die englische Fassung ist maßgeblich.',
  alternates: { canonical: '/de/agb', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'de_DE', title: 'Allgemeine Geschäftsbedingungen', url: 'https://giggal.ai/de/agb', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Annahme der Bedingungen', paragraphs: [
    'Mit dem Zugriff auf die Dienste von Giggal.ai und deren Nutzung erklären Sie sich mit den Bedingungen dieser Vereinbarung einverstanden. Wenn Sie sie nicht einhalten möchten, nutzen Sie den Dienst nicht.',
    'Diese Nutzungsbedingungen regeln die Nutzung des Dienstes Giggal.ai Email Verifier, betrieben von Hassaan Ali Mehmood unter dem Handelsnamen Giggal.ai.',
  ]},
  { heading: '2. Beschreibung des Dienstes', paragraphs: [
    'Giggal.ai Email Verifier ist ein Cloud-Tool, mit dem Teams E-Mail-Listen bereinigen und validieren. Nutzer laden CSV-Dateien oder einzelne Adressen hoch, und wir prüfen Zustellbarkeit, Syntax und Postfachstatus, um ungültige Adressen zu reduzieren und die Zustellung zu verbessern.',
    'Der Dienst wird nach Maßgabe dieser Bedingungen und etwaiger zusätzlicher Bedingungen bereitgestellt.',
  ]},
  { heading: '2.1 E-Mail-Verifizierungsdienst', level: 3, paragraphs: ['Unser Kerndienst ist die Verifizierung und Validierung von E-Mail-Adressen, darunter:'], list: [
    'Syntaxprüfung: Format und Aufbau der Adresse',
    'Domainprüfung: Existenz der Domain und gültige MX-Einträge',
    'Postfachprüfung: Existenz der konkreten Adresse und Empfangsfähigkeit',
    'Erkennung von Wegwerfadressen: Identifikation temporärer Adressen',
    'Erkennung von Rollen-Adressen: Identifikation generischer Adressen (z. B. info@, support@)',
    'Catch-all-Erkennung: Identifikation von Domains, die jede Adresse annehmen',
    'SMTP-Validierung: Prüfung in Echtzeit über das SMTP-Protokoll',
    'Massenprüfung: Verarbeitung Tausender Adressen gleichzeitig',
  ]},
  { heading: '2.2 Credit-System', level: 3, paragraphs: ['Der Dienst arbeitet mit Credits:'], list: [
    '1 Credit = 1 Prüfung: Jede Prüfung verbraucht genau 1 Credit vom Guthaben',
    'Einmalkauf: Credit-Pakete jederzeit erwerbbar',
    'Wiederkehrende Abos: monatliche Pakete mit Rabatt gegenüber dem Einmalpreis',
    'Kein Verfall: Credits bleiben verfügbar, bis sie genutzt werden',
    'Kostenloser Test: neue Konten erhalten 1.000 Gratis-Credits',
  ]},
  { heading: '2.3 Funktionen des Dienstes', level: 3, list: [
    'API-Zugang in Echtzeit', 'Upload und Verarbeitung in Masse', 'Ausführliche Berichte und Analysen',
    'Export als CSV, Excel und JSON', 'Erkennung und Entfernung von Duplikaten', 'Werkzeuge zur Listenbereinigung und Segmentierung',
  ]},
  { heading: '3. Nutzerkonto', paragraphs: ['Für einige Funktionen müssen Sie ein Konto anlegen. Sie verpflichten sich:'], list: [
    'Bei der Registrierung richtige, aktuelle und vollständige Angaben zu machen',
    'Die Kontodaten aktuell zu halten',
    'Das Passwort zu schützen und die Risiken eines unbefugten Zugriffs zu tragen',
    'Uns jede unbefugte Nutzung des Kontos umgehend zu melden',
    'Für alle Aktivitäten über Ihr Konto verantwortlich zu sein',
  ]},
  { heading: '4. Zahlungsbedingungen', paragraphs: ['Zahlungen werden sicher über unseren autorisierten Zahlungsdienstleister abgewickelt. Mit dem Kauf von Credits oder Diensten erklären Sie sich einverstanden:'], list: [
    'Aktuelle, vollständige und richtige Kauf- und Kontodaten anzugeben',
    'Konto- und Zahlungsdaten zeitnah zu aktualisieren',
    'Alle Beträge zu den beim Kauf geltenden Preisen zu zahlen',
    'Anfallende Steuern, Umsatzsteuer oder sonstige Gebühren zu zahlen',
  ]},
  { heading: '4.1 Kaufarten', level: 3, list: [
    'Einmalkauf (Pay as you go): Credit-Pakete werden dem Konto sofort gutgeschrieben',
    'Monatsabo: Credits werden jeden Monat automatisch mit Rabatt gutgeschrieben',
  ]},
  { heading: '4.2 Preise und Abrechnung', level: 3, paragraphs: [
    'Alle Preise sind in US-Dollar angegeben und enthalten die anfallenden Gebühren. Credits werden nach Zahlungsbestätigung gutgeschrieben. Credit-Käufe sind nicht erstattbar, soweit nicht gesetzlich oder in der Rückerstattungsrichtlinie vorgesehen.',
  ]},
  { heading: '4.3 Kostenlose Test-Credits', level: 3, paragraphs: ['Neue Nutzer erhalten bei der Registrierung 1.000 Test-Credits. Test-Credits:'], list: [
    'Sind kostenlos und erfordern keine Zahlungsdaten', 'Funktionieren wie bezahlte Credits', 'Sind als Geschenk nicht erstattbar',
    'Erlauben die Prüfung von bis zu 1.000 Adressen', 'Dienen der Bewertung der Dienstqualität vor dem Kauf',
  ]},
  { heading: '5. Wiederkehrende Abos', paragraphs: ['Monatsabos werden jeden Monat automatisch im Voraus abgebucht; die Credits werden nach erfolgreicher Zahlung gutgeschrieben. Im Einzelnen:'], list: [
    'Das Abo verlängert sich am Ende jedes Zyklus automatisch, sofern nicht gekündigt',
    'Sie können jederzeit vor dem Verlängerungsdatum kündigen',
    'Die Kündigung wird zum Ende des laufenden Zeitraums wirksam',
    'Bereits gutgeschriebene Credits bleiben nach der Kündigung verfügbar',
    'Abonnenten erhalten einen Rabatt gegenüber dem Einmalpreis',
  ]},
  { heading: '6. Nutzung und Verwaltung der Credits' },
  { heading: '6.1 Verbrauch der Credits', level: 3, list: [
    'Jede abgeschlossene Prüfung verbraucht genau 1 Credit', 'Credits werden nur für abgeschlossene Prüfungen abgezogen',
    'Prüfungen, die an Systemfehlern scheitern, verbrauchen keine Credits', 'Doppelte Adressen im selben Upload werden nur einmal verarbeitet',
  ]},
  { heading: '6.2 Gültigkeit und Übertragung der Credits', level: 3, list: [
    'Kein Verfall: Credits bleiben unbegrenzt auf dem Konto', 'Nicht zwischen Konten übertragbar',
    'Nach dem Kauf nicht erstattbar (außer den Ausnahmen der Rückerstattungsrichtlinie)', 'An das Konto gebunden und nicht teilbar',
  ]},
  { id: 'cancellation-policy', heading: '7. Kündigung und Rückerstattung', paragraphs: ['Sie können das Abo jederzeit in den Kontoeinstellungen oder per E-Mail an info@giggal.ai kündigen. Nach der Kündigung:'], list: [
    'Verlängert sich das Abo nicht in den nächsten Zyklus', 'Behalten Sie alle Credits auf dem Konto',
    'Können Sie die Credits ohne Einschränkung weiter nutzen', 'Können Sie weiterhin Einmalpakete kaufen',
  ], after: ['Rückerstattungen bei auffälligen Aktivitäten oder außergewöhnlichen Umständen werden nach der Rückerstattungsrichtlinie behandelt. Bei Problemen oder Betrugsverdacht wenden Sie sich sofort an den Support.']},
  { heading: '8. Zulässige Nutzung', paragraphs: ['Sie verpflichten sich, den Dienst nur für rechtmäßige Zwecke und im Einklang mit geltendem Recht zu nutzen. Insbesondere werden Sie den Dienst nicht nutzen, um:'], list: [
    'Adressen zu prüfen, die ohne Einwilligung oder Berechtigung erlangt wurden', 'Nach der Prüfung Spam oder unerwünschte Nachrichten zu senden',
    'Gegen Gesetze oder Vorschriften zu verstoßen, darunter CAN-SPAM, DSGVO und CASL', 'Rechte Dritter zu verletzen', 'Malware oder schädlichen Code zu verbreiten',
    'Sich als andere Personen oder Organisationen auszugeben', 'Betrug zu begehen oder den Dienst zu missbrauchen', 'Den Dienst ohne Erlaubnis weiterzuverkaufen oder weiterzugeben',
    'Unsere Systeme zu dekompilieren oder zu kompromittieren', 'Zugangsdaten oder Credits mit unbefugten Nutzern zu teilen',
  ]},
  { heading: '9. Genauigkeit und Grenzen des Dienstes', paragraphs: ['Wir streben höchste Genauigkeit an, Sie erkennen jedoch an, dass:'], list: [
    'E-Mail-Verifizierung aus technischen Gründen keine 100 % Genauigkeit garantieren kann', 'Manche Server falsch positive oder falsch negative Antworten geben können',
    'Ergebnisse auf Echtzeitprüfungen beruhen und sich ändern können', 'Ergebnisse "wie besehen" ohne Zustellgarantie bereitgestellt werden',
    'Sie für die rechtmäßige Nutzung der geprüften Daten und die anschließende Kommunikation verantwortlich sind',
  ]},
  { heading: '10. Rechtmäßige Nutzung und Konformität der Kommunikation', paragraphs: ['Wenn Sie geprüfte Adressen für Outreach, Transaktions- oder Supportnachrichten nutzen, sind Sie allein für die Einhaltung des geltenden Rechts verantwortlich, darunter:'], list: [
    'CAN-SPAM Act (USA)', 'DSGVO (Europäische Union)', 'CASL (Kanada)', 'Weitere Anti-Spam- und Datenschutzgesetze',
  ], after: ['Sie müssen die erforderlichen Einwilligungen einholen und die gesetzlich vorgesehenen Abmeldemöglichkeiten anbieten. Giggal.ai haftet nicht für Ihre Nutzung der geprüften Adressen.']},
  { heading: '11. Geistiges Eigentum', paragraphs: ['Der Dienst und seine ursprünglichen Inhalte, Funktionen und Merkmale gehören Giggal.ai und sind durch internationale Urheber-, Marken-, Patent-, Geschäftsgeheimnis- und sonstige Schutzrechte geschützt. Sie dürfen keinen Teil des Dienstes ohne unsere schriftliche Zustimmung kopieren, verändern, verbreiten, verkaufen oder lizenzieren.']},
  { heading: '12. Daten und Datenschutz', paragraphs: [
    'Die Nutzung des Dienstes unterliegt auch unserer Datenschutzerklärung. Sie behalten alle Rechte an Ihren Daten und Listen, die wir zu keinem anderen Zweck als der Erbringung des Dienstes nutzen.',
    'Zur Prüfung übermittelte Adressen werden sicher verarbeitet und nicht dauerhaft gespeichert. Wir verkaufen, teilen oder nutzen Ihre Listen nicht für andere Zwecke.',
  ]},
  { heading: '13. Änderungen und Verfügbarkeit des Dienstes', paragraphs: [
    'Wir behalten uns das Recht vor, den Dienst ganz oder teilweise, vorübergehend oder dauerhaft, mit oder ohne Ankündigung zu ändern oder einzustellen, ohne Haftung Ihnen oder Dritten gegenüber.',
    'Wir streben hohe Verfügbarkeit an, garantieren aber keinen unterbrechungsfreien Zugang. Geplante Wartungen werden nach Möglichkeit vorab angekündigt.',
  ]},
  { heading: '14. Haftungsbeschränkung', paragraphs: ['Im gesetzlich zulässigen Umfang haften Giggal.ai und seine Geschäftsführer, Mitarbeiter, Partner, Vertreter, Lieferanten und verbundenen Unternehmen nicht für indirekte, beiläufige, besondere, Folge- oder Strafschäden, einschließlich entgangenem Gewinn, Daten-, Goodwill- oder anderen immateriellen Verlusten, die entstehen aus:'], list: [
    'Dem Zugriff auf den Dienst, seiner Nutzung oder der Unmöglichkeit des Zugriffs', 'Verhalten oder Inhalten Dritter im Dienst', 'Aus dem Dienst bezogenen Inhalten',
    'Unbefugtem Zugriff, unbefugter Nutzung oder Veränderung Ihrer Übertragungen oder Inhalte', 'Ungenauen Prüfergebnissen',
    'Fehlgeschlagenen Zustellungen oder Bounces nach der Prüfung', 'Durch Fehler oder unsachgemäße Nutzung des Nutzers verbrauchten Credits',
  ]},
  { heading: '15. Gewährleistungsausschluss', paragraphs: [
    'Der Dienst wird "wie besehen" und "wie verfügbar" ohne jede ausdrückliche oder stillschweigende Gewährleistung bereitgestellt, einschließlich der stillschweigenden Gewährleistung der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten.',
    'Wir gewährleisten nicht, dass der Dienst unterbrechungsfrei, pünktlich, sicher oder fehlerfrei ist oder dass Prüfergebnisse zu 100 % genau sind.',
  ]},
  { heading: '16. Freistellung', paragraphs: ['Sie verpflichten sich, Giggal.ai, seine Lizenznehmer und Lizenzgeber von allen Ansprüchen, Schäden, Verpflichtungen, Verlusten, Haftungen, Kosten oder Aufwendungen freizustellen, die aus der Nutzung des Dienstes, der Verletzung dieser Bedingungen oder der Verletzung von Rechten Dritter entstehen.']},
  { heading: '17. Beendigung', paragraphs: ['Wir können Ihr Konto und den Zugang zum Dienst sofort, ohne Ankündigung oder Haftung, aus beliebigem Grund beenden oder sperren, auch bei Verstoß gegen diese Bedingungen. Bei Beendigung:'], list: [
    'Endet das Recht zur Nutzung des Dienstes sofort', 'Verfallen nicht genutzte Credits ohne Erstattung',
    'Werden Abos gekündigt', 'Kann der Zugang zum Konto und zu den Daten dauerhaft entzogen werden',
  ]},
  { heading: '18. Anwendbares Recht', paragraphs: ['Diese Bedingungen unterliegen dem Recht der Gerichtsbarkeit, in der Giggal.ai tätig ist, und werden nach diesem ausgelegt, ohne Rücksicht auf kollisionsrechtliche Bestimmungen.']},
  { heading: '19. Streitbeilegung', paragraphs: ['Streitigkeiten aus diesen Bedingungen oder dem Dienst werden zunächst durch Verhandlung in gutem Glauben angegangen. Scheitert die Verhandlung, werden sie durch ein verbindliches Schiedsverfahren nach den in der Gerichtsbarkeit von Giggal.ai geltenden Regeln beigelegt.']},
  { heading: '20. Änderungen der Bedingungen', paragraphs: ['Wir behalten uns das Recht vor, diese Bedingungen jederzeit zu ändern oder zu ersetzen. Bei einer wesentlichen Änderung kündigen wir sie mindestens 30 Tage vor Inkrafttreten an. Was eine wesentliche Änderung ist, liegt in unserem Ermessen.']},
  { heading: '21. Salvatorische Klausel', paragraphs: ['Sollte eine Bestimmung dieser Bedingungen undurchsetzbar oder ungültig sein, wird sie so geändert und ausgelegt, dass ihr Zweck im gesetzlich zulässigen Umfang erreicht wird; die übrigen Bestimmungen bleiben in vollem Umfang wirksam.']},
  { heading: '22. Kontakt', paragraphs: ['Bei Fragen zu diesen Nutzungsbedingungen: E-Mail info@giggal.ai, Website https://giggal.ai.', 'Mit der Nutzung der Dienste von Giggal.ai bestätigen Sie, diese Nutzungsbedingungen gelesen und verstanden zu haben und sie anzunehmen.']},
]

export default function AgbPage() {
  return (
    <LegalPageL10n
      locale="de"
      path="/de/agb"
      title="Allgemeine"
      accent="Geschäftsbedingungen"
      updated="4. Februar 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
