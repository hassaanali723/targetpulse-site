// Labels and messages of the DMARC generator tool (components/tools/DmarcGenerator/DmarcGeneratorTool.tsx),
// one object per language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/dmarcGeneratorStrings.ts.
//
// English is the original wording moved here unchanged. The warnings and the
// cleaner's change notes for English still come from lib/tools/dmarcGeneratorCore.ts;
// the optional `warnings` and `changes` maps here are used for the other
// languages, keyed by the core's codes. Record syntax (v=DMARC1, p=, rua=,
// mailto:, _dmarc) is data and stays in the tool and the core.
//
// Templates: a string with {slot} markers is filled by the tool with text or
// elements (a code span, a link). Keep every slot in a translation.

import type { Locale } from '@/lib/i18n/clusters'
import type {
  DmarcChangeCode,
  DmarcFailureOption,
  DmarcPolicy,
  DmarcWarning,
  DmarcWarningCode,
  CleanedDmarcResult,
} from '@/lib/tools/dmarcGeneratorCore'

export interface DmarcToolStrings {
  copy: string
  copied: string

  // Step 1
  domainLabel: string
  domainPlaceholder: string
  domainHelp: string
  domainInvalid: string

  // Step 2
  ruaLabel: string
  recommended: string
  /** Placeholder before a domain is entered. Once it is, the tool shows dmarc@<domain>. */
  ruaPlaceholder: string
  ruaHelp: string
  ruaInvalid: string

  // Step 3
  policyLegend: string
  policyIntro: string
  /** The three levels, also used as the option labels of the sp= and np= selects. */
  policies: Record<DmarcPolicy, { title: string; text: string }>
  startHere: string

  // Advanced settings
  advancedTitle: string
  advancedHint: string
  testMode: string
  testModeHelp: string
  /** Shown instead of testModeHelp while Monitor only is selected. */
  testModeDisabled: string
  spLabel: string
  spInherit: string
  spHelp: string
  npLabel: string
  npInherit: string
  npHelp: string
  adkimLabel: string
  aspfLabel: string
  alignRelaxed: string
  alignStrict: string
  rufLabel: string
  rufPlaceholder: string
  rufHelp: string
  foLabel: string
  foOptions: Record<DmarcFailureOption, string>
  foNeedsRuf: string

  // The record
  recordTitle: string
  recordIntro: string
  typeLabel: string
  hostLabel: string
  /** Before the full host name, which follows after a space. */
  fullName: string
  /** Stands in for the domain in _dmarc.yourdomain.com until one is entered. */
  yourDomain: string
  valueLabel: string

  // External report domain
  consentTitle: string
  consentText: string
  /** Slot: {domain}, the report domain. */
  consentAddTo: string
  /** Before the record name. Ends with a space. */
  consentName: string
  /** Before the record value. Ends with a space. */
  consentValue: string

  // What to do next
  nextTitle: string
  /** Slots: {spf}, a link to the SPF checker; {guide}, a link to the SPF, DKIM and DMARC guide. */
  nextCheck: string
  spfLabel: string
  spfHref: string
  guideLabel: string
  guideHref: string
  nextSignIn: string
  nextAdd: string
  /** The last step, which depends on the level picked and on whether reports are set up. */
  nextLevel: {
    noReports: string
    none: string
    quarantine: string
    reject: string
  }

  // Check an existing record
  cleanerToggle: string
  importLabel: string
  cleanButton: string
  cleanedTitle: string
  alreadyClean: string
  whatChanged: (n: number) => string
  changeLabel: Record<CleanedDmarcResult['changes'][number]['action'], string>

  /** Warnings by core code; English leaves this out and shows the core's own text. */
  warnings?: { [K in Exclude<DmarcWarningCode, 'bad-address'>]: string } & {
    'bad-address': (address: string) => string
  }
  /** Cleaner change notes by core code; English leaves this out and shows the core's own text. */
  changes?: Record<DmarcChangeCode, (p: { tag: string; value: string }) => string>
}

const en: DmarcToolStrings = {
  copy: 'Copy',
  copied: 'Copied',

  domainLabel: 'Your domain',
  domainPlaceholder: 'example.com',
  domainHelp: 'The part after the @ in your email address. For anna@example.com, enter example.com.',
  domainInvalid: 'This doesn’t look like a domain. Enter something like example.com.',

  ruaLabel: 'Where should reports go?',
  recommended: 'Recommended',
  ruaPlaceholder: 'dmarc@example.com',
  ruaHelp: 'Mail providers send summaries here, called aggregate reports (rua). They show who sends email as your domain.',
  ruaInvalid: 'This doesn’t look like an email address. It is left out of the record until you fix it.',

  policyLegend: 'How strict should it be?',
  policyIntro:
    'Mail providers check that email using your domain really comes from you. Your DMARC policy decides what happens to email that fails, such as fake email sent in your name.',
  // Written for someone who has never set up DMARC before.
  policies: {
    none: {
      title: 'Monitor only',
      text: 'Nothing changes for your email yet. You get reports that show who sends email as your domain.',
    },
    quarantine: {
      title: 'Send to spam',
      text: 'Failing email is quarantined in the spam folder. Choose this after the reports show your real email passes.',
    },
    reject: {
      title: 'Block',
      text: 'Failing email is rejected and never arrives. Choose this last, when you are sure all your email passes.',
    },
  },
  startHere: 'Start here',

  advancedTitle: 'Advanced settings',
  advancedHint: 'Subdomains, alignment, failure reports (forensic) and test mode. Most people can skip these.',
  testMode: 'Test mode',
  testModeHelp:
    'Asks mail providers to go one step softer while you test. Block acts like Send to spam, and Send to spam acts like Monitor only.',
  testModeDisabled: 'Choose Send to spam or Block first. Test mode does nothing with Monitor only.',
  spLabel: 'Policy for subdomains',
  spInherit: 'Same as your main choice',
  spHelp: 'For addresses like news.example.com.',
  npLabel: "Policy for subdomains that don't exist",
  npInherit: 'Same as the subdomain policy',
  npHelp: 'For made-up names that scammers use, like invoices.example.com.',
  adkimLabel: 'DKIM alignment',
  aspfLabel: 'SPF alignment',
  alignRelaxed: 'Relaxed (default, recommended)',
  alignStrict: 'Strict (exact domain match)',
  rufLabel: 'Failure report email',
  rufPlaceholder: 'Optional',
  rufHelp: "Reports on single failed emails. Many providers don't send these.",
  foLabel: 'When to send failure reports',
  foOptions: {
    '0': 'When SPF and DKIM both fail (default)',
    '1': 'When SPF or DKIM fails',
    d: 'When DKIM fails',
    s: 'When SPF fails',
  },
  foNeedsRuf: 'Add a failure report email first.',

  recordTitle: 'Your DMARC record',
  recordIntro: "Add this to your domain's DNS settings as a new TXT record.",
  typeLabel: 'Type',
  hostLabel: 'Name / Host',
  fullName: 'Some providers want the full name:',
  yourDomain: 'yourdomain.com',
  valueLabel: 'Value',

  consentTitle: 'One more record is needed on the report domain',
  consentText:
    'Your report address is on a different domain. Mail providers only send reports there if that domain publishes the record below. Send it to whoever manages that domain.',
  consentAddTo: 'Add to the DNS of {domain}, type TXT:',
  consentName: 'Name: ',
  consentValue: 'Value: ',

  nextTitle: 'What to do next',
  nextCheck:
    'Check that SPF and DKIM are set up for your domain. DMARC relies on them, so without them even your real email fails. Your email service, such as Google Workspace or Microsoft 365, explains how to turn them on. The {spf} shows whether your SPF record works. {guide}.',
  spfLabel: 'SPF checker',
  spfHref: '/spf-checker',
  guideLabel: 'How SPF, DKIM and DMARC work together',
  guideHref: '/blog/spf-dkim-dmarc-explained',
  nextSignIn: "Sign in where you manage your domain's DNS. This is usually the company you bought the domain from.",
  nextAdd:
    'Add a new TXT record with the name and value above, then save. Keep only one DMARC record on the domain, because mail servers ignore both if they find two.',
  nextLevel: {
    noReports: 'Add a report address in step 2. Without reports, you can’t tell whether your real email passes.',
    none: 'Read the reports for a few weeks. When your real email passes, come back and choose Send to spam.',
    quarantine: 'Keep reading the reports. When none of your real email goes to spam, come back and choose Block.',
    reject: 'Keep reading the reports. They show any new service that starts sending email as your domain.',
  },

  cleanerToggle: 'Already have a DMARC record? Check it for settings retired in RFC 9989.',
  importLabel: 'Paste your current DMARC record',
  cleanButton: 'Check and clean record',
  cleanedTitle: 'Cleaned record',
  alreadyClean: 'Your record is already clean. Nothing needed to change.',
  whatChanged: (n) => `What changed (${n})`,
  changeLabel: { removed: 'Removed', normalized: 'Changed', modernized: 'Suggestion' },
}

const deTool: DmarcToolStrings = {
  copy: 'Kopieren',
  copied: 'Kopiert',

  domainLabel: 'Ihre Domain',
  domainPlaceholder: 'beispiel.de',
  domainHelp: 'Der Teil nach dem @ in Ihrer E-Mail-Adresse. Bei anna@beispiel.de geben Sie beispiel.de ein.',
  domainInvalid: 'Das sieht nicht nach einer Domain aus. Geben Sie etwas wie beispiel.de ein.',

  ruaLabel: 'Wohin sollen die Berichte gehen?',
  recommended: 'Empfohlen',
  ruaPlaceholder: 'dmarc@beispiel.de',
  ruaHelp: 'Hierher senden E-Mail-Anbieter Zusammenfassungen, sogenannte Sammelberichte (rua). Sie zeigen, wer E-Mails unter Ihrer Domain sendet.',
  ruaInvalid: 'Das sieht nicht nach einer E-Mail-Adresse aus. Bis Sie die Adresse korrigieren, fehlt sie im Eintrag.',

  policyLegend: 'Wie streng soll die Richtlinie sein?',
  policyIntro:
    'E-Mail-Anbieter prüfen, ob E-Mails mit Ihrer Domain wirklich von Ihnen kommen. Ihre DMARC-Richtlinie legt fest, was mit E-Mails passiert, die durchfallen, etwa mit gefälschten E-Mails in Ihrem Namen.',
  // Written for someone who has never set up DMARC before.
  policies: {
    none: {
      title: 'Nur beobachten',
      text: 'Für Ihre E-Mails ändert sich noch nichts. Sie bekommen Berichte, die zeigen, wer E-Mails unter Ihrer Domain sendet.',
    },
    quarantine: {
      title: 'In den Spam-Ordner',
      text: 'E-Mails, die durchfallen, landen im Spam-Ordner (Quarantäne). Wählen Sie das, wenn die Berichte zeigen, dass Ihre echten E-Mails bestehen.',
    },
    reject: {
      title: 'Blockieren',
      text: 'E-Mails, die durchfallen, werden abgelehnt und kommen nie an. Wählen Sie das zuletzt, wenn Sie sicher sind, dass alle Ihre E-Mails bestehen.',
    },
  },
  startHere: 'Hier beginnen',

  advancedTitle: 'Erweiterte Einstellungen',
  advancedHint: 'Subdomains, Alignment, Fehlerberichte (forensisch) und Testmodus. Die meisten Nutzer können diesen Teil überspringen.',
  testMode: 'Testmodus',
  testModeHelp:
    'Bittet E-Mail-Anbieter, eine Stufe milder vorzugehen, während Sie testen. "Blockieren" wirkt dann wie "In den Spam-Ordner", und "In den Spam-Ordner" wirkt wie "Nur beobachten".',
  testModeDisabled: 'Wählen Sie zuerst "In den Spam-Ordner" oder "Blockieren". Mit "Nur beobachten" hat der Testmodus keine Wirkung.',
  spLabel: 'Richtlinie für Subdomains',
  spInherit: 'Wie Ihre Hauptauswahl',
  spHelp: 'Für Adressen wie news.beispiel.de.',
  npLabel: 'Richtlinie für Subdomains, die es nicht gibt',
  npInherit: 'Wie die Richtlinie für Subdomains',
  npHelp: 'Für erfundene Namen, die Betrüger nutzen, etwa rechnungen.beispiel.de.',
  adkimLabel: 'DKIM-Alignment',
  aspfLabel: 'SPF-Alignment',
  alignRelaxed: 'Relaxed (Standard, empfohlen)',
  alignStrict: 'Strict (Domain muss genau übereinstimmen)',
  rufLabel: 'Adresse für Fehlerberichte',
  rufPlaceholder: 'Optional',
  rufHelp: 'Berichte zu einzelnen durchgefallenen E-Mails. Viele Anbieter senden diese nicht.',
  foLabel: 'Wann Fehlerberichte gesendet werden',
  foOptions: {
    '0': 'Wenn SPF und DKIM beide fehlschlagen (Standard)',
    '1': 'Wenn SPF oder DKIM fehlschlägt',
    d: 'Wenn DKIM fehlschlägt',
    s: 'Wenn SPF fehlschlägt',
  },
  foNeedsRuf: 'Geben Sie zuerst eine Adresse für Fehlerberichte an.',

  recordTitle: 'Ihr DMARC-Eintrag',
  recordIntro: 'Legen Sie ihn in den DNS-Einstellungen Ihrer Domain als neuen TXT-Eintrag an.',
  typeLabel: 'Typ',
  hostLabel: 'Name / Host',
  fullName: 'Manche Anbieter wollen den vollständigen Namen:',
  yourDomain: 'ihredomain.de',
  valueLabel: 'Wert',

  consentTitle: 'Auf der Berichtsdomain ist ein weiterer Eintrag nötig',
  consentText:
    'Ihre Berichtsadresse liegt auf einer anderen Domain. E-Mail-Anbieter senden nur dann Berichte dorthin, wenn diese Domain den Eintrag unten veröffentlicht. Senden Sie ihn an die Person, die diese Domain verwaltet.',
  consentAddTo: 'Im DNS von {domain} anlegen, Typ TXT:',
  consentName: 'Name: ',
  consentValue: 'Wert: ',

  nextTitle: 'So geht es weiter',
  nextCheck:
    'Prüfen Sie, ob SPF und DKIM für Ihre Domain eingerichtet sind. DMARC baut auf beiden auf. Ohne sie fallen sogar Ihre echten E-Mails durch. Ihr E-Mail-Dienst, etwa Google Workspace oder Microsoft 365, erklärt, wie Sie beide einschalten. Der {spf} zeigt, ob Ihr SPF-Eintrag funktioniert. {guide}.',
  spfLabel: 'SPF-Check',
  spfHref: '/de/spf-generator',
  guideLabel: 'So arbeiten SPF, DKIM und DMARC zusammen',
  guideHref: '/de/blog/spf-dkim-dmarc-einfach-erklaert',
  nextSignIn: 'Melden Sie sich dort an, wo Sie das DNS Ihrer Domain verwalten. Das ist meist die Firma, bei der Sie die Domain gekauft haben.',
  nextAdd:
    'Legen Sie einen neuen TXT-Eintrag mit dem Namen und dem Wert oben an und speichern Sie ihn. Behalten Sie nur einen DMARC-Eintrag auf der Domain. Finden Mailserver zwei, ignorieren sie beide.',
  nextLevel: {
    noReports: 'Geben Sie in Schritt 2 eine Adresse für Berichte an. Ohne Berichte sehen Sie nicht, ob Ihre echten E-Mails bestehen.',
    none: 'Lesen Sie einige Wochen lang die Berichte. Wenn Ihre echten E-Mails bestehen, kommen Sie zurück und wählen Sie "In den Spam-Ordner".',
    quarantine: 'Lesen Sie die Berichte weiter. Wenn keine Ihrer echten E-Mails mehr im Spam landet, kommen Sie zurück und wählen Sie "Blockieren".',
    reject: 'Lesen Sie die Berichte weiter. Sie zeigen jeden neuen Dienst, der beginnt, E-Mails unter Ihrer Domain zu senden.',
  },

  cleanerToggle: 'Sie haben schon einen DMARC-Eintrag? Prüfen Sie ihn auf Einstellungen, die RFC 9989 abgeschafft hat.',
  importLabel: 'Fügen Sie Ihren aktuellen DMARC-Eintrag ein',
  cleanButton: 'Eintrag prüfen und bereinigen',
  cleanedTitle: 'Bereinigter Eintrag',
  alreadyClean: 'Ihr Eintrag ist schon sauber. Es musste nichts geändert werden.',
  whatChanged: (n) => `Was geändert wurde (${n})`,
  changeLabel: { removed: 'Entfernt', normalized: 'Geändert', modernized: 'Vorschlag' },

  warnings: {
    'bad-address': (address) =>
      `"${address}" ist keine gültige E-Mail-Adresse. Die Adresse wurde deshalb nicht in den Eintrag übernommen.`,
    'reject-no-reports':
      'Dieser Eintrag blockiert durchgefallene E-Mails (p=reject), hat aber keine Adresse für Berichte. Sie erfahren dann nicht, ob echte E-Mails abgelehnt werden.',
    'reject-dkim':
      'Nutzen Sie p=reject nur, wenn alle Ihre E-Mails DKIM-signiert sind. Weitergeleitete E-Mails fallen oft bei SPF durch. SPF allein reicht deshalb nicht.',
    'strict-alignment':
      'Striktes Alignment verlangt, dass die Domain genau übereinstimmt. Signiert oder sendet ein Dienst Ihre E-Mails von einer Subdomain wie mail.beispiel.de, fallen diese E-Mails durch.',
    'ruf-unreliable': 'Viele E-Mail-Anbieter senden aus Datenschutzgründen keine Fehlerberichte. Verlassen Sie sich nicht darauf.',
  },
  changes: {
    'missing-version': () =>
      'Ein DMARC-Eintrag muss mit v=DMARC1 beginnen. Sonst ignorieren Mailserver ihn. Der bereinigte Eintrag beginnt damit.',
    'bad-policy': ({ value }) =>
      `Der Eintrag hatte keine gültige Richtlinie${value ? ` ("p=${value}")` : ''}. Die Richtlinie ist jetzt p=none. Damit wird nur beobachtet.`,
    retired: ({ tag, value }) => `${tag}=${value} gehört nicht mehr zum DMARC-Standard (RFC 9989) und wurde deshalb entfernt.`,
    'pct-partial': () =>
      'Ihr Eintrag hat die Richtlinie nur auf einen Teil Ihrer E-Mails angewendet. Um die Richtlinie beim Testen abzuschwächen, schalten Sie stattdessen den Testmodus (t=y) in den erweiterten Einstellungen ein.',
    'sp-matches': ({ value }) => `sp=${value} entsprach Ihrer Hauptrichtlinie und war deshalb nicht nötig.`,
    default: ({ tag, value }) => `${tag}=${value} ist bereits der Standardwert und war deshalb nicht nötig.`,
  },
}

export const DMARC_TOOL_STRINGS: Partial<Record<Locale, DmarcToolStrings>> & { en: DmarcToolStrings } = { en, de: deTool }

export function dmarcToolStrings(locale: Locale): DmarcToolStrings {
  return DMARC_TOOL_STRINGS[locale] ?? en
}

/** The text of a warning: the core's English text, or the localized one by code. */
export function dmarcWarningText(t: DmarcToolStrings, w: DmarcWarning): string {
  if (!t.warnings) return w.message
  if (w.code === 'bad-address') return t.warnings['bad-address'](w.address ?? '')
  return t.warnings[w.code]
}

/** The explanation of a cleaner change: the core's English text, or the localized one by code. */
export function dmarcChangeText(t: DmarcToolStrings, c: CleanedDmarcResult['changes'][number]): string {
  if (!t.changes) return c.explanation
  return t.changes[c.code]({ tag: c.tag, value: c.value })
}
