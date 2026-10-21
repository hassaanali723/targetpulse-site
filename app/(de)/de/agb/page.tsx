import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'AGB für den E-Mail-Verifizierungsdienst',
  description: 'Die Nutzungsbedingungen der E-Mail-Verifizierung von Giggal.ai: Ihr Konto, Kauf von Credits und Abos, Verbrauch der Credits und die Regeln des Dienstes.',
  alternates: { canonical: '/de/agb', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'de_DE', title: 'Allgemeine Geschäftsbedingungen', url: 'https://giggal.ai/de/agb', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Annahme der Bedingungen', paragraphs: [
    'Dieser Dienst wird von TargetPulse Ltd ("wir", "uns") betrieben, einer in England und Wales unter der Nummer 17079825 eingetragenen Gesellschaft mit eingetragenem Sitz in Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd ist Verantwortlicher für die über Giggal.ai verarbeiteten personenbezogenen Daten. Kontakt: info@giggal.ai. Missbrauchsmeldungen: abuse@giggal.ai.',
    'Mit dem Zugriff auf die Dienste von Giggal.ai und deren Nutzung nehmen Sie die Bedingungen und Bestimmungen dieser Vereinbarung an und erklären sich damit einverstanden, an sie gebunden zu sein. Wenn Sie mit dem Vorstehenden nicht einverstanden sind, nutzen Sie diesen Dienst bitte nicht.',
    'Diese Nutzungsbedingungen regeln Ihre Nutzung des Dienstes Giggal.ai Email Verifier, der von TargetPulse Ltd unter dem Handelsnamen Giggal.ai betrieben wird.',
  ]},
  { heading: '2. Beschreibung des Dienstes', paragraphs: [
    'Giggal.ai Email Verifier ist ein cloudbasiertes Tool, mit dem Teams E-Mail-Listen bereinigen und validieren. Nutzer laden CSV-Dateien oder einzelne E-Mail-Adressen hoch, und wir prüfen die Zustellbarkeit, die Domain-Einträge und ob jedes Postfach existiert, um ungültige Adressen zu reduzieren und die Listenqualität zu verbessern. Das Produkt wird als Pay-as-you-go-Credit-System verkauft, sodass Kunden nur für die E-Mails zahlen, die sie tatsächlich validieren.',
    'Der Dienst wird Ihnen nach Maßgabe dieser Nutzungsbedingungen und etwaiger zusätzlicher Geschäftsbedingungen bereitgestellt, die gelten können.',
  ]},
  { heading: '2.1 E-Mail-Verifizierungsdienst', level: 3, paragraphs: ['Unser Hauptdienst ist die Verifizierung und Validierung von E-Mail-Adressen. Er umfasst:'], list: [
    'Gateway-Erkennung: Identifikation von Secure Email Gateways und defensiven Perimeterfiltern',
    'Domainprüfung: Prüfung, ob die E-Mail-Domain existiert und gültige MX-Einträge hat',
    'Postfachprüfung: Prüfung, ob die konkrete E-Mail-Adresse existiert und E-Mails empfangen kann',
    'Erkennung von Wegwerfadressen: Identifikation temporärer oder Wegwerf-E-Mail-Adressen',
    'Erkennung von Rollenadressen: Erkennung generischer E-Mail-Adressen (z. B. info@, support@)',
    'Catch-all-Erkennung: Identifikation von Domains, die alle E-Mail-Adressen annehmen',
    'Echtzeit-Prüfung: Prüfung, ob das Postfach des Empfängers existiert',
    'Massenprüfung: Gleichzeitige Verarbeitung Tausender E-Mail-Adressen',
  ]},
  { heading: '2.2 Credit-System', level: 3, paragraphs: ['Unser Dienst arbeitet mit einem Credit-Modell. Dabei gilt:'], list: [
    '1 Credit = 1 E-Mail-Prüfung: Jede Prüfung einer E-Mail-Adresse verbraucht genau 1 Credit von Ihrem Kontoguthaben',
    'Pay as you go: Sie können jederzeit Credits in Paketen von 3.000 bis 1.000.000 Credits kaufen',
    'Wiederkehrende Abonnements: Sie können monatlich wiederkehrende Credit-Pakete mit 10 % Rabatt auf den regulären Preis abonnieren',
    'Kein Verfall: Credits verfallen nie und bleiben auf Ihrem Konto verfügbar, bis sie genutzt werden',
    'Kostenloser Test: Neue Konten erhalten 1.000 kostenlose Credits, um den Dienst zu testen',
  ]},
  { heading: '2.3 Funktionen des Dienstes', level: 3, paragraphs: ['Unser E-Mail-Verifizierungsdienst umfasst:'], list: [
    'API-Zugang in Echtzeit für sofortige Prüfungen',
    'Funktionen für Massen-Upload und Massenverarbeitung',
    'Ausführliche Prüfberichte und Analysen',
    'Export der Ergebnisse als CSV, Excel und JSON',
    'Erkennung und Entfernung doppelter E-Mail-Adressen',
    'Werkzeuge zur Listenbereinigung und Segmentierung',
    'Integrationsunterstützung über die API und kompatible Drittsysteme',
  ]},
  { heading: '3. Nutzerkonto', paragraphs: ['Für bestimmte Funktionen des Dienstes müssen Sie ein Konto registrieren. Sie verpflichten sich:'], list: [
    'Bei der Registrierung richtige, aktuelle und vollständige Angaben zu machen',
    'Ihre Kontodaten zu pflegen und umgehend zu aktualisieren',
    'Die Sicherheit Ihres Passworts zu wahren und alle Risiken eines unbefugten Zugriffs zu tragen',
    'Uns umgehend über jede unbefugte Nutzung Ihres Kontos zu informieren',
    'Für alle Aktivitäten verantwortlich zu sein, die über Ihr Konto erfolgen',
  ]},
  { heading: '4. Zahlungsbedingungen', paragraphs: ['Die Zahlungsabwicklung erfolgt sicher über unseren autorisierten Zahlungsdienstleister. Mit dem Kauf von Credits oder Diensten verpflichten Sie sich:'], list: [
    'Aktuelle, vollständige und richtige Kauf- und Kontodaten anzugeben',
    'Ihre Konto- und Zahlungsdaten bei Bedarf umgehend zu aktualisieren',
    'Alle Entgelte zu den für Ihre Käufe jeweils geltenden Preisen zu zahlen',
    'Anfallende Steuern, Umsatzsteuer oder sonstige Gebühren im Zusammenhang mit Ihren Käufen zu zahlen',
  ]},
  { heading: '4.1 Kaufarten für Credits', level: 3, paragraphs: ['Sie können Credits auf folgende Weise kaufen:'], list: [
    'Einmalkauf (Pay as you go): Kauf von Credit-Paketen nach Bedarf mit sofortiger Gutschrift auf Ihrem Konto',
    'Monatlich wiederkehrendes Abonnement: Automatische monatliche Gutschrift von Credits mit 10 % Rabatt',
  ]},
  { heading: '4.2 Preise und Abrechnung', level: 3, paragraphs: [
    'Alle Preise werden in US-Dollar angezeigt und enthalten die anfallenden Gebühren. Credits werden Ihrem Konto sofort nach erfolgreicher Zahlungsbestätigung gutgeschrieben. Alle Credit-Käufe sind nicht erstattbar, es sei denn, dies ist gesetzlich vorgeschrieben oder in unserer Rückerstattungsrichtlinie ausdrücklich vorgesehen.',
  ]},
  { heading: '4.3 Kostenlose Test-Credits', level: 3, paragraphs: ['Neue Nutzer erhalten bei der Registrierung eines Kontos 1.000 kostenlose Test-Credits. Test-Credits:'], list: [
    'Werden kostenlos bereitgestellt und erfordern keine Zahlungsdaten',
    'Funktionieren bei der E-Mail-Prüfung genauso wie bezahlte Credits',
    'Sind nicht erstattbar, da sie kostenlos gewährt werden',
    'Können zur Prüfung von bis zu 1.000 E-Mail-Adressen genutzt werden',
    'Helfen Ihnen, die Qualität unseres Dienstes vor einem Kauf zu bewerten',
  ]},
  { heading: '5. Wiederkehrende Abonnements', paragraphs: ['Monatlich wiederkehrende Credit-Abonnements werden jeden Monat automatisch abgerechnet. Die Abrechnung erfolgt monatlich wiederkehrend im Voraus, und die Credits werden Ihrem Konto nach erfolgreicher Zahlung gutgeschrieben. Die wichtigsten Bedingungen:'], list: [
    'Abonnements verlängern sich am Ende jedes Abrechnungszeitraums automatisch, sofern sie nicht gekündigt werden',
    'Sie können Ihr Abonnement jederzeit vor dem nächsten Abrechnungsdatum kündigen',
    'Kündigungen werden zum Ende des laufenden Abrechnungszeitraums wirksam',
    'Bereits auf Ihr Konto gutgeschriebene Credits bleiben nach der Kündigung verfügbar',
    'Abonnenten erhalten 10 % Rabatt gegenüber den Pay-as-you-go-Preisen',
  ]},
  { heading: '6. Nutzung und Verwaltung der Credits' },
  { heading: '6.1 Verbrauch der Credits', level: 3, paragraphs: ['Credits werden wie folgt verbraucht:'], list: [
    'Jede erfolgreiche E-Mail-Prüfung verbraucht genau 1 Credit',
    'Credits werden nur für abgeschlossene Prüfungen abgezogen',
    'Prüfungen, die aufgrund von Systemfehlern fehlschlagen, verbrauchen keine Credits',
    'Doppelte E-Mail-Adressen im selben Prüfauftrag werden nur einmal verarbeitet',
  ]},
  { heading: '6.2 Gültigkeit und Übertragung der Credits', level: 3, paragraphs: ['Wichtige Regeln für Credits:'], list: [
    'Kein Verfall: Credits verfallen nie und bleiben unbegrenzt auf Ihrem Konto',
    'Nicht übertragbar: Credits können nicht zwischen Konten übertragen werden',
    'Nicht erstattbar: Gekaufte Credits sind nicht erstattbar (Ausnahmen siehe Rückerstattungsrichtlinie)',
    'Kontogebunden: Credits sind an Ihr Konto gebunden und können nicht geteilt werden',
  ]},
  { id: 'cancellation-policy', heading: '7. Kündigung und Rückerstattungen', paragraphs: ['Sie können Ihr wiederkehrendes Abonnement jederzeit in Ihren Kontoeinstellungen oder über unser Support-Team unter info@giggal.ai kündigen. Nach der Kündigung:'], list: [
    'Verlängert sich Ihr Abonnement nicht für den nächsten Abrechnungszeitraum',
    'Behalten Sie alle Credits auf Ihrem Konto',
    'Können Sie Ihre vorhandenen Credits ohne Einschränkung weiter nutzen',
    'Können Sie weiterhin Pay-as-you-go-Credit-Pakete kaufen',
  ], after: ['Rückerstattungen bei ungewöhnlichen Aktivitäten oder außergewöhnlichen Umständen werden gemäß unserer Rückerstattungsrichtlinie behandelt. Wenn Sie Probleme haben oder betrügerische Aktivitäten vermuten, wenden Sie sich sofort zur Prüfung an unser Support-Team.']},
  { heading: '8. Richtlinie zur zulässigen Nutzung', paragraphs: ['Sie verpflichten sich, den Dienst nur für rechtmäßige Zwecke und unter Einhaltung aller geltenden Gesetze und Vorschriften zu nutzen. Sie verpflichten sich, den Dienst nicht zu nutzen, um:'], list: [
    'E-Mail-Adressen zu prüfen, die ohne ordnungsgemäße Einwilligung oder Berechtigung erlangt wurden',
    'Nach der Prüfung Spam oder unerwünschte E-Mail-Nachrichten zu senden',
    'Gegen geltende Gesetze oder Vorschriften zu verstoßen, darunter den CAN-SPAM Act, die DSGVO und CASL',
    'Rechte anderer zu beeinträchtigen oder zu verletzen',
    'Malware oder anderen schädlichen Code zu verbreiten',
    'Sich als eine andere Person oder Organisation auszugeben',
    'Betrügerische Aktivitäten zu begehen oder unseren Dienst zu missbrauchen',
    'Unsere Verifizierungsdienste ohne Genehmigung weiterzuverkaufen oder weiterzuverbreiten',
    'Zu versuchen, unsere Verifizierungssysteme zurückzuentwickeln (Reverse Engineering) oder zu kompromittieren',
    'Ihre Zugangsdaten oder Credits mit unbefugten Nutzern zu teilen',
  ]},
  { heading: '9. Genauigkeit und Grenzen des Dienstes', paragraphs: ['Wir streben bei der E-Mail-Prüfung größtmögliche Genauigkeit an. Sie erkennen jedoch an und erklären sich damit einverstanden, dass:'], list: [
    'Die E-Mail-Prüfung aus technischen Gründen keine 100 % Genauigkeit garantieren kann',
    'Manche E-Mail-Server falsch positive oder falsch negative Antworten liefern können',
    'Prüfergebnisse auf Echtzeitprüfungen beruhen und sich im Lauf der Zeit ändern können',
    'Wir Prüfergebnisse "wie besehen" bereitstellen und keine Garantie für die Zustellbarkeit übernehmen',
    'Sie für die rechtmäßige Nutzung der geprüften Daten und jede nachfolgende Kommunikation verantwortlich sind',
  ]},
  { heading: '10. Rechtmäßige Nutzung und Konformität der Kommunikation', paragraphs: ['Wenn Sie geprüfte E-Mail-Adressen für Outreach-, Transaktions- oder Supportnachrichten nutzen, sind Sie allein dafür verantwortlich, alle geltenden Gesetze und Vorschriften einzuhalten, einschließlich, aber nicht beschränkt auf:'], list: [
    'CAN-SPAM Act (Vereinigte Staaten)', 'DSGVO (Europäische Union)', 'CASL (Kanada)', 'Sonstige geltende Anti-Spam- und Datenschutzgesetze',
  ], after: ['Sie müssen alle erforderlichen Einwilligungen einholen und, soweit anwendbar, die gesetzlich vorgeschriebenen Abmelde- oder Präferenzoptionen bereitstellen. Giggal.ai ist nicht für Ihre Nutzung der geprüften E-Mail-Adressen verantwortlich.']},
  { heading: '11. Geistiges Eigentum', paragraphs: ['Der Dienst und seine ursprünglichen Inhalte, Merkmale und Funktionen sind Eigentum von Giggal.ai und durch internationale Urheberrechts-, Marken-, Patent-, Geschäftsgeheimnis- und sonstige Gesetze zum Schutz des geistigen Eigentums geschützt. Sie dürfen ohne vorherige schriftliche Genehmigung keinen Teil unserer Dienste kopieren, verändern, verbreiten, verkaufen oder vermieten.']},
  { heading: '12. Daten und Datenschutz', paragraphs: [
    'Ihre Nutzung des Dienstes unterliegt auch unserer Datenschutzerklärung. Wir erheben, speichern und verarbeiten Ihre Daten wie in der Datenschutzerklärung beschrieben. Sie behalten alle Rechte an Ihren Kundendaten und E-Mail-Listen, und wir nutzen diese nur, soweit dies zur Erbringung des Dienstes erforderlich oder gesetzlich vorgeschrieben ist.',
    'Zur Prüfung übermittelte E-Mail-Adressen werden sicher verarbeitet und nicht dauerhaft gespeichert. Wir verkaufen oder teilen Ihre E-Mail-Listen nicht und nutzen sie für keinen anderen Zweck als die Erbringung der Verifizierungsdienste.',
  ]},
  { heading: '13. Änderungen und Verfügbarkeit des Dienstes', paragraphs: [
    'Wir behalten uns das Recht vor, den Dienst (oder einen Teil davon) vorübergehend oder dauerhaft, mit oder ohne Ankündigung, zu ändern oder einzustellen. Wir haften weder Ihnen noch Dritten gegenüber für eine Änderung, Aussetzung oder Einstellung des Dienstes.',
    'Wir bemühen uns um eine hohe Verfügbarkeit des Dienstes, garantieren aber keinen unterbrechungsfreien Zugang. Geplante Wartungsarbeiten werden nach Möglichkeit im Voraus angekündigt.',
  ]},
  { heading: '14. Haftungsbeschränkung', paragraphs: ['Im gesetzlich größtmöglichen Umfang haften Giggal.ai, seine Geschäftsführer, Mitarbeiter, Partner, Vertreter, Lieferanten oder verbundenen Unternehmen in keinem Fall für mittelbare, zufällige, besondere, Folge- oder Strafschäden, einschließlich, aber nicht beschränkt auf entgangenen Gewinn, Verlust von Daten, Nutzung oder Goodwill oder andere immaterielle Verluste, die entstehen aus:'], list: [
    'Ihrem Zugriff auf den Dienst oder dessen Nutzung oder der Unmöglichkeit, auf den Dienst zuzugreifen oder ihn zu nutzen',
    'Dem Verhalten oder den Inhalten Dritter im Dienst',
    'Inhalten, die über den Dienst bezogen wurden',
    'Unbefugtem Zugriff auf Ihre Übertragungen oder Inhalte oder deren unbefugter Nutzung oder Veränderung',
    'Ungenauen Ergebnissen der E-Mail-Prüfung',
    'Fehlgeschlagenen E-Mail-Zustellungen oder Bounces nach der Prüfung',
    'Credits, die durch Fehler oder Missbrauch des Nutzers verbraucht wurden',
  ]},
  { heading: '15. Gewährleistungsausschluss', paragraphs: [
    'Der Dienst wird "wie besehen" und "wie verfügbar" ohne ausdrückliche oder stillschweigende Gewährleistungen jeglicher Art bereitgestellt. Giggal.ai schließt alle Gewährleistungen aus, einschließlich, aber nicht beschränkt auf die stillschweigende Gewährleistung der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten Dritter.',
    'Wir gewährleisten nicht, dass der Dienst unterbrechungsfrei, pünktlich, sicher oder fehlerfrei ist oder dass die Ergebnisse der E-Mail-Prüfung zu 100 % genau sind.',
  ]},
  { heading: '16. Freistellung', paragraphs: ['Sie verpflichten sich, Giggal.ai und seine Lizenznehmer und Lizenzgeber gegen alle Ansprüche, Schäden, Verpflichtungen, Verluste, Haftungen, Kosten oder Schulden sowie Aufwendungen zu verteidigen, freizustellen und schadlos zu halten, die aus Ihrer Nutzung des Dienstes oder einem Verstoß gegen diese Bedingungen entstehen.']},
  { heading: '17. Kündigung', paragraphs: ['Wir können Ihr Konto und Ihren Zugang zum Dienst sofort, ohne vorherige Ankündigung oder Haftung, aus jedem beliebigen Grund kündigen oder sperren, einschließlich, aber nicht beschränkt auf den Fall, dass Sie gegen diese Bedingungen verstoßen. Nach der Kündigung:'], list: [
    'Endet Ihr Recht zur Nutzung des Dienstes sofort',
    'Verfallen nicht genutzte Credits ohne Erstattung',
    'Werden wiederkehrende Abonnements gekündigt',
    'Kann der Zugang zu Ihrem Konto und Ihren Daten dauerhaft entzogen werden',
  ]},
  { heading: '18. Anwendbares Recht', paragraphs: ['Diese Bedingungen unterliegen den Gesetzen der Rechtsordnung, in der Giggal.ai tätig ist, und werden nach diesen ausgelegt, ohne Berücksichtigung der kollisionsrechtlichen Bestimmungen.']},
  { heading: '19. Streitbeilegung', paragraphs: ['Streitigkeiten, die sich aus diesen Bedingungen oder dem Dienst ergeben oder damit zusammenhängen, sollen zunächst durch Verhandlungen in gutem Glauben beigelegt werden. Scheitern die Verhandlungen, werden Streitigkeiten durch ein verbindliches Schiedsverfahren nach den Regeln der zuständigen Schiedsorganisation beigelegt.']},
  { heading: '20. Änderungen der Bedingungen', paragraphs: ['Wir behalten uns das Recht vor, diese Bedingungen jederzeit nach unserem alleinigen Ermessen zu ändern oder zu ersetzen. Ist eine Änderung wesentlich, kündigen wir sie mindestens 30 Tage vor Inkrafttreten der neuen Bedingungen an. Was eine wesentliche Änderung ist, bestimmen wir nach unserem alleinigen Ermessen.']},
  { heading: '21. Salvatorische Klausel', paragraphs: ['Sollte eine Bestimmung dieser Bedingungen für undurchsetzbar oder ungültig erklärt werden, wird sie so geändert und ausgelegt, dass ihre Ziele im größtmöglichen nach geltendem Recht zulässigen Umfang erreicht werden. Die übrigen Bestimmungen bleiben in vollem Umfang wirksam.']},
  { heading: '22. Kontakt', paragraphs: ['Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns bitte unter:'], list: [
    'E-Mail: info@giggal.ai',
    'Website: https://giggal.ai',
  ], after: ['Mit der Nutzung der Dienste von Giggal.ai bestätigen Sie, dass Sie diese Nutzungsbedingungen gelesen und verstanden haben, und erklären sich damit einverstanden, an sie gebunden zu sein.']},
]

export default function AgbPage() {
  return (
    <LegalPageL10n
      locale="de"
      path="/de/agb"
      title="Allgemeine"
      accent="Geschäftsbedingungen"
      updated="22. Oktober 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
