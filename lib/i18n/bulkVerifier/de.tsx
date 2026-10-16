import type { BulkVerifierCopy } from '@/components/l10n/BulkVerifierL10n'
import { InlineLink } from '@/components/l10n/BulkVerifierL10n'

// German copy for /de/e-mail-massenpruefung. Same sections, order and facts as
// the English /bulk-email-verifier page. Keyword family: E-Mail-Massenprüfung
// (primary), E-Mail-Listen prüfen, E-Mail-Liste prüfen, Massenprüfung von
// E-Mail-Adressen, Bulk-E-Mail-Verifizierung, kostenlos. The English "bulk
// email verifier" appears once, in the definition. Formal address (Sie), and
// the same terms as lib/i18n/emailChecker/de.tsx.

export const copy: BulkVerifierCopy = {
  meta: {
    title: 'E-Mail-Massenprüfung: E-Mail-Listen kostenlos prüfen',
    description:
      'E-Mail-Massenprüfung für CSV- und Excel-Listen mit bis zu 50.000 Adressen. Ergebnis gültig oder ungültig für jede Zeile, auch Catch-all. 1.000 Credits kostenlos.',
    breadcrumb: 'E-Mail-Massenprüfung',
    appName: 'Giggal.ai E-Mail-Massenprüfung',
  },
  hero: {
    h1Lead: 'E-Mail-Massenprüfung:',
    h1Rest: 'die ganze Liste auf einmal prüfen',
    intro:
      'Laden Sie eine CSV- oder Excel-Datei hoch, und die Massenprüfung testet jede Adresse darin. Jede Zeile erhält das Ergebnis gültig oder ungültig, auch bei Catch-all-Adressen.',
    ctaPrimary: 'Liste kostenlos prüfen',
    ctaPricing: 'Preise ansehen',
    checks: ['1.000 kostenlose Credits', 'Keine Karte nötig', 'Credits verfallen nie'],
  },
  facts: [
    { v: '50.000', l: 'Adressen pro Datei' },
    { v: '98,5 %', l: 'Genauigkeit auf Business-Listen' },
    { v: '1 Credit', l: 'pro Adresse, Catch-all inklusive' },
    { v: '<3 %', l: 'Bounce-Rate nach der Prüfung, in der Regel' },
  ],
  definition: {
    title: 'Was ist eine E-Mail-Massenprüfung?',
    text: 'Eine E-Mail-Massenprüfung testet eine ganze Liste von E-Mail-Adressen auf einmal. Sie zeigt, welche Adressen Mail empfangen können. Das Tool sucht die Mailserver jeder Domain und fragt, ob jedes Postfach existiert. Dabei wird keine E-Mail gesendet. Sie entfernen die Adressen, die bouncen würden, bevor Sie versenden. Das schützt Ihre Absenderreputation und Ihre Zustellbarkeit. Auf Englisch heißt ein solches Tool "bulk email verifier".',
  },
  steps: {
    title: 'So funktioniert die E-Mail-Massenprüfung',
    intro:
      'Drei Schritte, und niemand auf Ihrer Liste erhält eine E-Mail. Die meisten Listen sind in wenigen Minuten fertig.',
    items: [
      {
        title: 'Liste hochladen',
        text: 'Laden Sie eine CSV- oder Excel-Datei mit bis zu 50.000 E-Mail-Adressen hoch. Eine größere Liste teilen Sie in mehrere Dateien auf.',
      },
      {
        title: 'Jede Adresse wird geprüft',
        text: 'Die Massenprüfung sucht die Mailserver jeder Domain und fragt, ob das Postfach existiert. Sie markiert außerdem Wegwerfadressen, Rollen-Adressen, Duplikate und Catch-all-Adressen.',
      },
      {
        title: 'Ergebnisse herunterladen',
        text: 'Sie erhalten eine CSV-Datei mit einem Ergebnis in jeder Zeile. Behalten Sie die gültigen Adressen, entfernen Sie die ungültigen und prüfen Sie die unbekannten später noch einmal.',
      },
    ],
  },
  results: {
    title: 'Was die E-Mail-Massenprüfung für jede Adresse anzeigt',
    intro: 'Jede Zeile endet mit einem von drei Ergebnissen.',
    valid: {
      title: 'Gültig',
      text: 'Das Postfach existiert, also sollte eine Mail an diese Adresse ankommen. Behalten Sie diese Adressen.',
    },
    invalid: {
      title: 'Ungültig',
      text: 'Das Format ist fehlerhaft, die Domain hat keinen Mailserver oder das Postfach existiert nicht. Eine Mail an diese Adresse kommt als Bounce zurück. Entfernen Sie diese Adressen.',
    },
    unknown: {
      title: 'Unbekannt',
      text: 'Der Mailserver hat keine klare Antwort gegeben, oft wegen Greylisting. Prüfen Sie diese Adressen später noch einmal. Credits für unbekannte Ergebnisse werden erstattet.',
    },
    flagsIntro: 'Jede Zeile zeigt außerdem diese Kennzeichnungen. So entscheiden Sie, welche Adressen Sie behalten:',
    flags: [
      { lead: 'Catch-all', rest: ', mit dem Ergebnis gültig oder ungültig statt nur "riskant"' },
      { lead: 'Wegwerfadresse', rest: ', ein temporäres Postfach, das bald nicht mehr funktioniert' },
      { lead: 'Rollen-Adresse', rest: ', etwa info@ oder vertrieb@, ein geteiltes Postfach und keine Person' },
      { lead: 'Duplikat', rest: ', dieselbe Adresse mehr als einmal in Ihrer Datei' },
    ],
  },
  catchAll: {
    title: 'Catch-all-Adressen erhalten das Ergebnis gültig oder ungültig',
    paragraphs: [
      <>
        Manche Mailserver von Unternehmen nehmen jede Adresse an, echt oder erfunden. Das ist eine{' '}
        <InlineLink locale="de" href="/catch-all-verification">Catch-all-Domain</InlineLink>. Eine normale Prüfung
        erhält dort für jede Adresse ein Ja. Sie kann also ein echtes Postfach nicht von einem Tippfehler
        unterscheiden.
      </>,
      'Viele Tools für die Bulk-E-Mail-Verifizierung hören hier auf und markieren jede Catch-all-Adresse als "riskant". In B2B-Listen kann das ein großer Teil Ihrer Kontakte sein, und viele davon sind echte Personen. Sie müssen dann raten, an welche Adressen Sie senden.',
      <>
        Giggal.ai prüft jede Catch-all-Adresse und liefert gültig oder ungültig. Das kostet 1 Credit, wie bei jeder
        anderen Adresse. Es funktioniert auch bei Domains hinter{' '}
        <InlineLink locale="de" href="/seg-email-verification">Sicherheits-Gateways wie Proofpoint und Mimecast</InlineLink>{' '}
        (Englisch), bei denen andere Tools oft unbekannt liefern.
      </>,
    ],
  },
  pricing: {
    title: 'Kostenlose E-Mail-Massenprüfung: Start mit 1.000 Credits',
    intro:
      'Jedes neue Konto erhält 1.000 kostenlose Credits, ohne Karte. Damit prüfen Sie eine Liste mit bis zu 1.000 Adressen kostenlos. Danach zahlen Sie bei diesem Dienst für die E-Mail-Massenprüfung nur, was Sie nutzen. Sie kaufen Credits einmalig, es gibt kein Monatsabo, und Credits verfallen nie.',
    colCredits: 'Credits (Adressen)',
    colPrice: 'Preis',
    colPer1k: 'Pro 1.000 Adressen',
    freeLabel: 'Kostenlos',
    freeNote: 'Neue Konten, ohne Karte',
    footnote: (
      <>
        Ein Credit prüft eine Adresse, Catch-all-Prüfungen inklusive. Alle Details finden Sie unter{' '}
        <InlineLink locale="de" href="/pricing">Preise</InlineLink>.
      </>
    ),
  },
  useCases: {
    title: 'Wann Sie eine E-Mail-Massenprüfung nutzen sollten',
    intro:
      'Prüfen Sie eine Liste immer dann, wenn Sie an viele Adressen auf einmal senden wollen. Wenn Sie ungültige Adressen vorher entfernen, bleibt Ihre Zustellbarkeit hoch.',
    items: [
      'Vor einer Cold-E-Mail-Kampagne, damit Bounces Ihrer Zustellbarkeit nicht schaden.',
      'Nachdem Sie Leads über ein Formular, eine Veranstaltung oder eine Lead-Datenbank gesammelt haben.',
      'Bevor Sie eine alte Newsletter-Liste anschreiben, die seit Monaten nicht genutzt wurde.',
      'Bevor Sie Kontakte in Ihr CRM oder Ihr E-Mail-Tool importieren.',
    ],
  },
  software: {
    title: 'Software zur E-Mail-Massenprüfung für Ihre eigenen Tools',
    intro:
      'Eine Datei hochzuladen ist ein Weg. Sie können die Massenprüfung von E-Mail-Adressen auch aus Ihrer eigenen App oder Ihrem Workflow starten.',
    items: [
      {
        title: 'E-Mail-Verifizierungs-API (Englisch)',
        text: 'Senden Sie Adressen aus Ihrer App oder Ihrem Anmeldeformular und erhalten Sie das Ergebnis als JSON zurück.',
      },
      {
        title: 'Integrationen',
        text: 'Prüfen Sie neue Kontakte automatisch mit Zapier oder n8n.',
      },
      {
        title: 'MCP-Server',
        text: 'Prüfen Sie E-Mail-Adressen in Claude, ChatGPT, Cursor und VS Code.',
      },
    ],
  },
  versus: {
    listTitle: 'E-Mail-Liste prüfen oder E-Mail-Liste bereinigen?',
    listText: (
      <>
        Beim Prüfen einer E-Mail-Liste erhält jede Adresse ein Ergebnis. Beim Bereinigen arbeiten Sie mit diesen
        Ergebnissen: Sie entfernen die ungültigen Adressen, die Wegwerfadressen und die Duplikate und behalten eine
        saubere Datei. Beides beginnt mit demselben Upload. Mehr dazu lesen Sie auf der Seite{' '}
        <InlineLink locale="de" href="/email-list-cleaning">E-Mail-Listen bereinigen</InlineLink> (Englisch).
      </>
    ),
    oneTitle: 'Sie möchten nur eine einzelne Adresse prüfen?',
    oneText: (
      <>
        Nutzen Sie den kostenlosen{' '}
        <InlineLink locale="de" href="/email-checker">E-Mail-Checker</InlineLink>. Er prüft eine Adresse nach der
        anderen, mit denselben Prüfungen und ohne Anmeldung.
      </>
    ),
  },
  faqTitle: 'Häufige Fragen zur E-Mail-Massenprüfung',
  faqs: [
    {
      q: 'Was ist eine E-Mail-Massenprüfung?',
      a: 'Eine E-Mail-Massenprüfung testet eine ganze Liste von E-Mail-Adressen in einem Durchgang, statt eine Adresse nach der anderen. Sie laden eine Datei hoch, und jede Adresse erhält ein Ergebnis: gültig, ungültig oder unbekannt. Man nennt das auch Bulk-E-Mail-Verifizierung oder Massenprüfung von E-Mail-Adressen.',
    },
    {
      q: 'Wie viele E-Mail-Adressen kann ich auf einmal prüfen?',
      a: 'Bis zu 50.000 Adressen pro Datei. Ist Ihre Liste größer, teilen Sie sie in mehrere Dateien auf und laden Sie jede einzeln hoch.',
    },
    {
      q: 'Gibt es eine kostenlose E-Mail-Massenprüfung?',
      a: 'Ja. Jedes neue Konto erhält 1.000 kostenlose Credits, ohne Karte. Ein Credit prüft eine Adresse. Sie können also eine Liste mit bis zu 1.000 Adressen kostenlos prüfen.',
    },
    {
      q: 'Ist das kostenlose Prüfen von E-Mail-Listen wirklich kostenlos?',
      a: 'Ja. Ihre ersten 1.000 Adressen sind kostenlos, ohne Karte. Die kostenlosen Credits verfallen nie, Sie können sie also jederzeit nutzen. Sie zahlen nur, wenn Sie mehr als 1.000 Adressen prüfen möchten.',
    },
    {
      q: 'Wie lange dauert eine E-Mail-Massenprüfung?',
      a: 'Die meisten Listen sind in wenigen Minuten fertig.',
    },
    {
      q: 'Welche Dateiformate kann ich hochladen?',
      a: 'CSV oder Excel. Die Ergebnisse laden Sie als CSV-Datei herunter, mit einem Ergebnis in jeder Zeile.',
    },
    {
      q: 'Sendet die Massenprüfung E-Mails an meine Liste?',
      a: 'Nein. Sie fragt jeden Mailserver, ob das Postfach existiert, und hört auf, bevor eine Nachricht gesendet wird. Niemand auf Ihrer Liste erhält etwas.',
    },
    {
      q: 'Was kostet eine E-Mail-Massenprüfung?',
      a: 'Ein Credit pro Adresse, Catch-all-Prüfungen inklusive. 10.000 Adressen kosten 9,90 $ und 100.000 Adressen kosten 76 $. Sie zahlen einmalig, ohne Monatsabo, und Credits verfallen nie.',
    },
    {
      q: 'Was passiert mit Catch-all-Adressen?',
      a: 'Jede Catch-all-Adresse wird geprüft und erhält das Ergebnis gültig oder ungültig. Das kostet 1 Credit, wie bei jeder anderen Adresse. Viele andere Tools zum Prüfen von E-Mail-Listen markieren sie stattdessen alle als "riskant".',
    },
    {
      q: 'Was bedeutet "unbekannt", und zahle ich dafür?',
      a: 'Unbekannt heißt, der Mailserver hat keine klare Antwort gegeben. Oft verzögert er neue Absender absichtlich (Greylisting). Prüfen Sie diese Adressen später noch einmal. Credits für unbekannte Ergebnisse werden erstattet.',
    },
    {
      q: 'Ist das Validieren von E-Mail-Listen dasselbe wie die E-Mail-Massenprüfung?',
      a: 'Ja. Validieren, Verifizieren und Prüfen sind drei Wörter für dieselbe Aufgabe. Dabei finden Sie heraus, welche Adressen einer Liste Mail empfangen können.',
    },
    {
      q: 'Wie genau ist die E-Mail-Massenprüfung?',
      a: 'Giggal.ai misst auf Business-Listen eine Genauigkeit von 98,5 %. Listen, die damit geprüft wurden, bouncen meist unter 3 %.',
    },
    {
      q: 'Bleibt meine Liste vertraulich?',
      a: 'Giggal.ai wird von TargetPulse Ltd betrieben und verarbeitet personenbezogene Daten nach der DSGVO. Die Datenschutzerklärung unter giggal.ai/de/datenschutz erklärt, welche Daten erhoben werden, wie sie genutzt werden und wie lange sie gespeichert bleiben.',
    },
  ],
  ctaHeadline: 'Prüfen Sie Ihre E-Mail-Liste in wenigen Minuten',
}
