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


const frTool: DmarcToolStrings = {
  copy: 'Copier',
  copied: 'Copié',

  // Step 1
  domainLabel: 'Votre domaine',
  domainPlaceholder: 'exemple.fr',
  domainHelp: "La partie après le @ dans votre adresse e-mail. Pour anna@exemple.fr, saisissez exemple.fr.",
  domainInvalid: "Ceci ne ressemble pas à un domaine valide. Saisissez par exemple exemple.fr.",

  // Step 2
  ruaLabel: 'Où envoyer les rapports ?',
  recommended: 'Recommandé',
  ruaPlaceholder: 'dmarc@exemple.fr',
  ruaHelp: 'Les fournisseurs de messagerie envoient des bilans réguliers à cette adresse (rapports agrégés rua).',
  ruaInvalid: "Ceci ne ressemble pas à une adresse e-mail valide. Elle est ignorée tant qu'elle n'est pas corrigée.",

  // Step 3
  policyLegend: 'Quel niveau de politique appliquer ?',
  policyIntro:
    "Les serveurs vérifient que les messages envoyés avec votre domaine proviennent bien de vous. Votre politique DMARC décide du sort des messages frauduleux.",
  policies: {
    none: {
      title: 'Surveillance seule',
      text: 'Rien ne change pour vos e-mails. Vous recevez des rapports montrant qui envoie des e-mails en votre nom.',
    },
    quarantine: {
      title: 'Mettre en spam',
      text: "Les e-mails suspects sont placés dans le dossier spam du destinataire. À choisir quand vos e-mails légitimes passent le test.",
    },
    reject: {
      title: 'Bloquer',
      text: "Les e-mails non authentifiés sont rejetés et non livrés. À activer une fois certain que tous vos e-mails légitimes sont conformes.",
    },
  },
  startHere: 'Commencer ici',

  // Advanced settings
  advancedTitle: 'Paramètres avancés',
  advancedHint: 'Sous-domaines, alignement, rapports d\'échec (forensiques) et mode test. Optionnel pour la plupart des utilisateurs.',
  testMode: 'Mode test',
  testModeHelp:
    "Demande aux récepteurs d\'appliquer un niveau de politique inférieur pendant vos tests. Le rejet devient quarantaine, la quarantaine devient surveillance.",
  testModeDisabled: 'Sélectionnez "Mettre en spam" ou "Bloquer" au préalable. Le mode test n\'a aucun effet en Surveillance seule.',
  spLabel: 'Politique pour les sous-domaines',
  spInherit: 'Identique au choix principal',
  spHelp: 'Pour les adresses comme contact.exemple.fr.',
  npLabel: 'Politique pour les sous-domaines inexistants',
  npInherit: 'Identique à la politique des sous-domaines',
  npHelp: 'Pour les sous-domaines inventés par des usurpateurs, comme factures.exemple.fr.',
  adkimLabel: 'Alignement DKIM',
  aspfLabel: 'Alignement SPF',
  alignRelaxed: 'Souple (défaut, recommandé)',
  alignStrict: 'Strict (domaine exact)',
  rufLabel: 'E-mail pour rapports d\'échec',
  rufPlaceholder: 'Optionnel',
  rufHelp: "Rapports d\'erreur détaillés message par message. Souvent ignorés par les serveurs pour des raisons de confidentialité.",
  foLabel: 'Quand envoyer les rapports d\'échec',
  foOptions: {
    '0': 'Lorsque SPF et DKIM échouent tous les deux (défaut)',
    '1': 'Lorsque SPF ou DKIM échoue',
    d: 'Lorsque DKIM échoue',
    s: 'Lorsque SPF échoue',
  },
  foNeedsRuf: 'Ajoutez d\'abord une adresse d\'e-mail pour les rapports d\'échec.',

  // The record
  recordTitle: 'Votre enregistrement DMARC',
  recordIntro: "Ajoutez ceci aux paramètres DNS de votre domaine sous forme d\'un nouvel enregistrement TXT.",
  typeLabel: 'Type',
  hostLabel: 'Nom / Hôte',
  fullName: 'Certains hébergeurs demandent le nom complet :',
  yourDomain: 'votredomaine.fr',
  valueLabel: 'Valeur',

  // External report domain
  consentTitle: 'Un enregistrement supplémentaire est requis sur le domaine de rapport',
  consentText:
    "Comme l\'adresse de rapport appartient à un autre domaine, ce dernier doit autoriser la réception (RFC 9990) pour recevoir les rapports.",
  consentAddTo: 'Ajoutez ceci aux paramètres DNS de {domain} :',
  consentName: 'Nom :',
  consentValue: 'Valeur :',

  // What to do next
  nextTitle: 'Prochaines étapes',
  nextCheck: '1. Assurez-vous au préalable de la configuration de SPF et DKIM. Utilisez notre {spf} et notre {guide}.',
  spfLabel: 'Vérificateur SPF',
  spfHref: '/fr/enregistrement-spf',
  guideLabel: 'Guide SPF, DKIM et DMARC',
  guideHref: '/blog/spf-dkim-dmarc-explained',
  nextSignIn: '2. Connectez-vous à votre console DNS (OVH, Cloudflare, Gandi, etc.).',
  nextAdd:
    "3. Créez un nouvel enregistrement TXT avec le nom et la valeur ci-dessus et sauvegardez. Conservez un unique enregistrement DMARC par domaine.",
  nextLevel: {
    noReports: "Spécifiez une adresse de rapport à l\'étape 2 pour pouvoir contrôler si vos e-mails légitimes passent les tests.",
    none: "Analysez les rapports pendant quelques semaines. Dès que tous vos e-mails légitimes réussissent, passez à \"Mettre en spam\".",
    quarantine: "Poursuivez la surveillance. Si aucun e-mail légitime ne finit en spam, passez à \"Bloquer\".",
    reject: "Consultez régulièrement vos rapports pour identifier immédiatement tout nouveau service expéditeur.",
  },

  cleanerToggle: 'Vous avez déjà un enregistrement DMARC ? Vérifiez sa conformité avec la RFC 9989.',
  importLabel: 'Collez votre enregistrement DMARC actuel',
  cleanButton: 'Vérifier et nettoyer l\'enregistrement',
  cleanedTitle: 'Enregistrement nettoyé',
  alreadyClean: 'Votre enregistrement est déjà parfaitement optimisé. Aucune modification requise.',
  whatChanged: (n) => `Modifications apportées (${n})`,
  changeLabel: { removed: 'Supprimé', normalized: 'Modifié', modernized: 'Recommandé' },

  warnings: {
    'bad-address': (address) =>
      `"${address}" n\'est pas une adresse e-mail valide. Elle n\'a pas été incluse dans l\'enregistrement.`,
    'reject-no-reports':
      'Cet enregistrement bloque les e-mails en échec (p=reject) sans définir d\'adresse de rapport rua. Vous ne pourrez pas détecter les faux positifs.',
    'reject-dkim':
      'N\'activez p=reject que si tous vos e-mails sont signés DKIM. Le transfert brise souvent SPF, rendant SPF seul insuffisant.',
    'strict-alignment':
      'L\'alignement strict impose un domaine identique. Si un service tiers émet depuis un sous-domaine, ses e-mails risquent d\'échouer.',
    'ruf-unreliable': 'La plupart des messageries n\'envoient plus de rapports ruf par souci de confidentialité.',
  },
  changes: {
    'missing-version': () =>
      'Un enregistrement DMARC doit impérativement débuter par v=DMARC1. L\'enregistrement nettoyé commence par cette balise.',
    'bad-policy': ({ value }) =>
      `L\'enregistrement n\'avait pas de politique valide${value ? ` ("p=${value}")` : ''}. Remplacée par p=none pour observer sans risque.`,
    retired: ({ tag, value }) =>
      `${tag}=${value} a été retiré du standard DMARC officiel (RFC 9989) et a été supprimé.`,
    'pct-partial': () =>
      'Votre enregistrement appliquait la politique à un pourcentage d\'e-mails. Pour adoucir les tests selon la RFC 9989, activez le mode test (t=y).',
    'sp-matches': ({ value }) => `sp=${value} était identique à votre politique principale et a été omis car redondant.`,
    default: ({ tag, value }) => `${tag}=${value} correspond déjà à la valeur par défaut et n\'était pas nécessaire.`,
  },
}

const esTool: DmarcToolStrings = {
  copy: 'Copiar',
  copied: 'Copiado',

  // Step 1
  domainLabel: 'Tu dominio',
  domainPlaceholder: 'ejemplo.es',
  domainHelp: 'La parte después de la @ en tu correo. Para ana@ejemplo.es, escribe ejemplo.es.',
  domainInvalid: 'Esto no parece un dominio válido. Escribe algo como ejemplo.es.',

  // Step 2
  ruaLabel: '¿Dónde recibir los reportes?',
  recommended: 'Recomendado',
  ruaPlaceholder: 'dmarc@ejemplo.es',
  ruaHelp: 'Los proveedores envían resúmenes consolidados a esta dirección (reportes agregados rua).',
  ruaInvalid: 'Esto no parece una dirección de correo válida. Se omitirá hasta que la corrijas.',

  // Step 3
  policyLegend: '¿Qué política de protección aplicar?',
  policyIntro:
    'Los proveedores de correo comprueban que los emails enviados con tu dominio sean auténticos. Tu política decide qué hacer con los mensajes que fallen.',
  policies: {
    none: {
      title: 'Solo monitorizar',
      text: 'No altera la entrega de tus correos. Recibes reportes detallados sobre quién envía correos con tu dominio.',
    },
    quarantine: {
      title: 'Enviar a spam',
      text: 'Los correos no autenticados se envían a la carpeta de spam. Selecciónalo cuando compruebes que tus correos legítimos pasan.',
    },
    reject: {
      title: 'Bloquear',
      text: 'Los correos sospechosos son rechazados y no se entregan. Elígelo cuando estés seguro de que todo tu correo legítimo está autenticado.',
    },
  },
  startHere: 'Empezar aquí',

  // Advanced settings
  advancedTitle: 'Ajustes avanzados',
  advancedHint: 'Subdominios, alineación, reportes forenses y modo de prueba. La mayoría de usuarios puede omitirlos.',
  testMode: 'Modo de prueba',
  testModeHelp:
    'Pide a los servidores aplicar un nivel más suave durante las pruebas. Bloquear actúa como spam, y spam actúa como monitorizar.',
  testModeDisabled: 'Selecciona primero "Enviar a spam" o "Bloquear". El modo de prueba no tiene efecto en Solo monitorizar.',
  spLabel: 'Política para subdominios',
  spInherit: 'Igual que la política principal',
  spHelp: 'Para direcciones como boletin.ejemplo.es.',
  npLabel: 'Política para subdominios inexistentes',
  npInherit: 'Igual que la política de subdominios',
  npHelp: 'Para nombres ficticios usados por estafadores, como facturas.ejemplo.es.',
  adkimLabel: 'Alineación DKIM',
  aspfLabel: 'Alineación SPF',
  alignRelaxed: 'Relajada (predeterminada, recomendada)',
  alignStrict: 'Estricta (coincidencia de dominio exacta)',
  rufLabel: 'Correo para reportes de fallos',
  rufPlaceholder: 'Opcional',
  rufHelp: 'Reportes forenses individuales. Muchos proveedores no los envían por motivos de privacidad.',
  foLabel: 'Cuándo enviar reportes de fallo',
  foOptions: {
    '0': 'Cuando fallen tanto SPF como DKIM (predeterminado)',
    '1': 'Cuando falle SPF o DKIM',
    d: 'Cuando falle DKIM',
    s: 'Cuando falle SPF',
  },
  foNeedsRuf: 'Introduce primero un correo para reportes de fallos.',

  // The record
  recordTitle: 'Tu registro DMARC',
  recordIntro: 'Añade esto en la configuración DNS de tu dominio como un nuevo registro TXT.',
  typeLabel: 'Tipo',
  hostLabel: 'Nombre / Host',
  fullName: 'Algunos proveedores requieren el nombre completo:',
  yourDomain: 'tudominio.es',
  valueLabel: 'Valor',

  // External report domain
  consentTitle: 'Se requiere un registro adicional en el dominio de reportes',
  consentText:
    'Dado que la dirección de reporte pertenece a otro dominio, este debe autorizar la recepción de reportes (RFC 9990).',
  consentAddTo: 'Añade esto en la configuración DNS de {domain}:',
  consentName: 'Nombre:',
  consentValue: 'Valor:',

  // What to do next
  nextTitle: 'Siguientes pasos',
  nextCheck: '1. Comprueba antes que SPF y DKIM estén configurados. Usa nuestro {spf} y nuestra {guide}.',
  spfLabel: 'Verificador SPF',
  spfHref: '/es/registro-spf',
  guideLabel: 'Guía de SPF, DKIM y DMARC',
  guideHref: '/blog/spf-dkim-dmarc-explained',
  nextSignIn: '2. Inicia sesión en tu proveedor DNS (Cloudflare, GoDaddy, etc.).',
  nextAdd:
    '3. Añade un nuevo registro TXT con el nombre y valor indicados y guarda. Mantén un único registro DMARC en el dominio.',
  nextLevel: {
    noReports: 'Configura una dirección de reporte en el paso 2 para monitorear si tus correos legítimos pasan las comprobaciones.',
    none: 'Revisa los reportes durante unas semanas. Cuando tus correos auténticos pasen sistemáticamente, cambia a "Enviar a spam".',
    quarantine: 'Continúa revisando. Cuando ningún correo legítimo termine en spam, cambia a "Bloquear".',
    reject: 'Supervisa los reportes periódicamente para detectar de inmediato cualquier nuevo servicio remitente.',
  },

  cleanerToggle: '¿Ya tienes un registro DMARC? Comprueba si contiene etiquetas obsoletas según RFC 9989.',
  importLabel: 'Pega tu registro DMARC actual',
  cleanButton: 'Comprobar y limpiar registro',
  cleanedTitle: 'Registro limpio',
  alreadyClean: 'Tu registro ya está optimizado. No fue necesario realizar cambios.',
  whatChanged: (n) => `Cambios realizados (${n})`,
  changeLabel: { removed: 'Eliminado', normalized: 'Modificado', modernized: 'Sugerencia' },

  warnings: {
    'bad-address': (address) =>
      `"${address}" no es una dirección de correo válida. Se ha excluido del registro.`,
    'reject-no-reports':
      'Este registro bloquea correos en fallo (p=reject) sin definir dirección de reportes rua. No podrás detectar falsos positivos.',
    'reject-dkim':
      'Aplica p=reject únicamente cuando todos tus correos estén firmados con DKIM. El reenvío suele invalidar SPF.',
    'strict-alignment':
      'La alineación estricta requiere coincidencia exacta. Si envías correos desde subdominios, podrían ser rechazados.',
    'ruf-unreliable': 'La mayoría de servidores no envían reportes ruf por privacidad.',
  },
  changes: {
    'missing-version': () =>
      'Un registro DMARC debe comenzar obligatoriamente con v=DMARC1. El registro limpio incluye esta etiqueta.',
    'bad-policy': ({ value }) =>
      `El registro no contenía una política válida${value ? ` ("p=${value}")` : ''}. Se sustituyó por p=none para monitorizar sin riesgo.`,
    retired: ({ tag, value }) =>
      `${tag}=${value} ha sido retirado del estándar oficial DMARC (RFC 9989) y se ha eliminado.`,
    'pct-partial': () =>
      'Tu registro aplicaba la política solo a un porcentaje de emails. Para suavizar pruebas según RFC 9989, activa el modo de prueba (t=y).',
    'sp-matches': ({ value }) => `sp=${value} coincidía con tu política principal y no era necesario.`,
    default: ({ tag, value }) => `${tag}=${value} coincide con el valor predeterminado y se omitió por redundante.`,
  },
}

const itTool: DmarcToolStrings = {
  copy: 'Copia',
  copied: 'Copiato',

  // Step 1
  domainLabel: 'Il tuo dominio',
  domainPlaceholder: 'esempio.it',
  domainHelp: 'La parte dopo la @ nel tuo indirizzo email. Per anna@esempio.it, inserisci esempio.it.',
  domainInvalid: 'Questo non sembra un dominio valido. Inserisci un dominio come esempio.it.',

  // Step 2
  ruaLabel: 'Dove inviare i report?',
  recommended: 'Consigliato',
  ruaPlaceholder: 'dmarc@esempio.it',
  ruaHelp: 'I provider di posta inviano resoconti aggregati periodici a questo indirizzo (report rua).',
  ruaInvalid: 'Questo non sembra un indirizzo email valido. Viene escluso finché non lo correggi.',

  // Step 3
  policyLegend: 'Quale livello di protezione applicare?',
  policyIntro:
    'I server di posta verificano che le email inviate con il tuo dominio provengano davvero da te. La policy DMARC decide cosa fare con le email fraudolente.',
  policies: {
    none: {
      title: 'Solo monitoraggio',
      text: 'Non cambia nulla per il recapito delle tue email. Ricevi report su chi invia email a tuo nome.',
    },
    quarantine: {
      title: 'Invia a spam',
      text: 'Le email non autenticate finiscono nella cartella spam. Sceglilo dopo aver verificato che le tue email legittime passano i controlli.',
    },
    reject: {
      title: 'Blocca',
      text: 'Le email fraudolente vengono respinte e non consegnate. Sceglilo solo quando sei certo che tutta la tua posta legittima sia autenticata.',
    },
  },
  startHere: 'Inizia qui',

  // Advanced settings
  advancedTitle: 'Impostazioni avanzate',
  advancedHint: 'Sottodomini, allineamento, report forensi e modalità test. La maggior parte degli utenti può saltare questa sezione.',
  testMode: 'Modalità test',
  testModeHelp:
    'Chiede ai destinatari di applicare una policy più morbida durante i test. Blocca agisce come spam, e spam agisce come monitoraggio.',
  testModeDisabled: 'Seleziona prima "Invia a spam" o "Blocca". La modalità test non ha effetto su Solo monitoraggio.',
  spLabel: 'Policy per i sottodomini',
  spInherit: 'Uguale alla policy principale',
  spHelp: 'Per indirizzi come newsletter.esempio.it.',
  npLabel: 'Policy per sottodomini inesistenti',
  npInherit: 'Uguale alla policy dei sottodomini',
  npHelp: 'Per nomi fittizi usati dai truffatori, come fatture.esempio.it.',
  adkimLabel: 'Allineamento DKIM',
  aspfLabel: 'Allineamento SPF',
  alignRelaxed: 'Rilassato (predefinito, consigliato)',
  alignStrict: 'Stretto (corrispondenza esatta del dominio)',
  rufLabel: 'Email per report forensi di errore',
  rufPlaceholder: 'Opzionale',
  rufHelp: 'Report dettagliati sui singoli messaggi falliti. Molti provider non li inviano per privacy.',
  foLabel: 'Quando inviare report forensi',
  foOptions: {
    '0': 'Quando sia SPF che DKIM falliscono (predefinito)',
    '1': 'Quando SPF o DKIM fallisce',
    d: 'Quando DKIM fallisce',
    s: 'Quando SPF fallisce',
  },
  foNeedsRuf: 'Inserisci prima un indirizzo email per i report di errore.',

  // The record
  recordTitle: 'Il tuo record DMARC',
  recordIntro: 'Aggiungi questo record nelle impostazioni DNS del tuo dominio come nuovo record TXT.',
  typeLabel: 'Tipo',
  hostLabel: 'Nome / Host',
  fullName: 'Alcuni provider richiedono il nome completo:',
  yourDomain: 'tuodominio.it',
  valueLabel: 'Valore',

  // External report domain
  consentTitle: 'È necessario un ulteriore record sul dominio dei report',
  consentText:
    'Poiché l\'indirizzo dei report appartiene a un altro dominio, quest\'ultimo deve autorizzare la ricezione dei report (RFC 9990).',
  consentAddTo: 'Aggiungi questo nelle impostazioni DNS di {domain}:',
  consentName: 'Nome:',
  consentValue: 'Valore:',

  // What to do next
  nextTitle: 'Passaggi successivi',
  nextCheck: '1. Verifica prima che SPF e DKIM siano attivi. Usa il nostro {spf} e la nostra {guide}.',
  spfLabel: 'Verificatore SPF',
  spfHref: '/it/record-spf',
  guideLabel: 'Guida a SPF, DKIM e DMARC',
  guideHref: '/blog/spf-dkim-dmarc-explained',
  nextSignIn: '2. Accedi al pannello di gestione del tuo DNS.',
  nextAdd:
    '3. Crea un nuovo record TXT con il nome e il valore indicati sopra e salva. Mantieni un solo record DMARC nel dominio.',
  nextLevel: {
    noReports: 'Imposta un indirizzo per i report al passaggio 2 per monitorare se le tue email legittime superano i controlli.',
    none: 'Analizza i report per qualche settimana. Quando tutte le tue email autentiche passano, imposta "Invia a spam".',
    quarantine: 'Continua a monitorare i report. Quando nessuna email buona finisce nello spam, imposta "Blocca".',
    reject: 'Monitora periodicamente i report per rilevare subito qualsiasi nuovo servizio che spedisce a tuo nome.',
  },

  cleanerToggle: 'Hai già un record DMARC? Controlla se contiene tag obsoleti secondo la RFC 9989.',
  importLabel: 'Incolla il tuo record DMARC attuale',
  cleanButton: 'Controlla e ripulisci il record',
  cleanedTitle: 'Record ripulito',
  alreadyClean: 'Il tuo record è già perfettamente pulito. Nessuna modifica necessaria.',
  whatChanged: (n) => `Modifiche apportate (${n})`,
  changeLabel: { removed: 'Rimosso', normalized: 'Modificato', modernized: 'Suggerimento' },

  warnings: {
    'bad-address': (address) =>
      `"${address}" non è un indirizzo email valido. È stato escluso dal record.`,
    'reject-no-reports':
      'Questo record blocca le email non autenticate (p=reject) ma non imposta un indirizzo rua. Non potrai monitorare eventuali falsi positivi.',
    'reject-dkim':
      'Imposta p=reject solo se tutte le tue email hanno una firma DKIM valida. L\'inoltro dei messaggi invalida spesso SPF.',
    'strict-alignment':
      'L\'allineamento strict richiede una corrispondenza esatta del dominio. Le email dai sottodomini potrebbero fallire.',
    'ruf-unreliable': 'Molti provider di posta non inviano report ruf per motivi di privacy.',
  },
  changes: {
    'missing-version': () =>
      'Un record DMARC deve iniziare con v=DMARC1. Il record ripulito include questa intestazione obbligatoria.',
    'bad-policy': ({ value }) =>
      `Il record non conteneva una policy valida${value ? ` ("p=${value}")` : ''}. È stata reimpostata su p=none.`,
    retired: ({ tag, value }) =>
      `${tag}=${value} è stato ritirato dallo standard ufficiale RFC 9989 ed è stato eliminato.`,
    'pct-partial': () =>
      'Il tuo record applicava la policy solo a una percentuale di email. Per attenuare i controlli nei test, usa la modalità test (t=y).',
    'sp-matches': ({ value }) => `sp=${value} coincideva con la policy principale ed era ridondante.`,
    default: ({ tag, value }) => `${tag}=${value} corrisponde al valore predefinito ed è stato omesso.`,
  },
}

const ptBrTool: DmarcToolStrings = {
  copy: 'Copiar',
  copied: 'Copiado',

  // Step 1
  domainLabel: 'Seu domínio',
  domainPlaceholder: 'exemplo.com.br',
  domainHelp: 'A parte após o @ no seu endereço de e-mail. Para ana@exemplo.com.br, informe exemplo.com.br.',
  domainInvalid: 'Isso não parece um domínio válido. Digite algo como exemplo.com.br.',

  // Step 2
  ruaLabel: 'Para onde enviar os relatórios?',
  recommended: 'Recomendado',
  ruaPlaceholder: 'dmarc@exemplo.com.br',
  ruaHelp: 'Os provedores enviam relatórios consolidados para este endereço (relatórios agregados rua).',
  ruaInvalid: 'Isso não parece um e-mail válido. O endereço será omitido até ser corrigido.',

  // Step 3
  policyLegend: 'Qual rigor de política adotar?',
  policyIntro:
    'Os servidores de e-mail verificam se as mensagens usando o seu domínio realmente pertencem a você. Sua política determina a ação contra mensagens forjadas.',
  policies: {
    none: {
      title: 'Apenas monitorar',
      text: 'O fluxo de e-mails permanece inalterado. Você recebe relatórios mostrando quem envia e-mails pelo seu domínio.',
    },
    quarantine: {
      title: 'Enviar para o spam',
      text: 'E-mails não autenticados são encaminhados para a caixa de spam. Selecione esta opção após validar seus e-mails legítimos.',
    },
    reject: {
      title: 'Bloquear',
      text: 'E-mails suspeitos são rejeitados na entrega. Escolha esta opção quando tiver certeza de que todo o seu envio é legítimo.',
    },
  },
  startHere: 'Comece aqui',

  // Advanced settings
  advancedTitle: 'Configurações avançadas',
  advancedHint: 'Subdomínios, alinhamento, relatórios de falha e modo de teste. A maioria das pessoas pode ignorar.',
  testMode: 'Modo de teste',
  testModeHelp:
    'Solicita aos servidores receptores que apliquem um nível mais brando durante seus testes. Bloquear atua como spam, e spam atua como monitorar.',
  testModeDisabled: 'Selecione "Enviar para o spam" ou "Bloquear" antes. O modo de teste não tem efeito em Apenas monitorar.',
  spLabel: 'Política para subdomínios',
  spInherit: 'Igual à política principal',
  spHelp: 'Para endereços como informativo.exemplo.com.br.',
  npLabel: 'Política para subdomínios inexistentes',
  npInherit: 'Igual à política de subdomínios',
  npHelp: 'Para nomes forjados por spammers, como boletos.exemplo.com.br.',
  adkimLabel: 'Alinhamento DKIM',
  aspfLabel: 'Alinhamento SPF',
  alignRelaxed: 'Relaxado (padrão, recomendado)',
  alignStrict: 'Estrito (correspondência exata do domínio)',
  rufLabel: 'E-mail para relatórios de falha',
  rufPlaceholder: 'Opcional',
  rufHelp: 'Relatórios sobre mensagens individuais que falharam. Muitos provedores não enviam por motivos de privacidade.',
  foLabel: 'Quando enviar relatórios de falha',
  foOptions: {
    '0': 'Quando SPF e DKIM falharem simultaneamente (padrão)',
    '1': 'Quando SPF ou DKIM falhar',
    d: 'Quando DKIM falhar',
    s: 'Quando SPF falhar',
  },
  foNeedsRuf: 'Adicione primeiro um endereço para relatórios de falha.',

  // The record
  recordTitle: 'Seu registro DMARC',
  recordIntro: 'Adicione isto nas configurações de DNS do seu domínio como um novo registro TXT.',
  typeLabel: 'Tipo',
  hostLabel: 'Nome / Host',
  fullName: 'Alguns provedores exigem o nome completo:',
  yourDomain: 'seudominio.com.br',
  valueLabel: 'Valor',

  // External report domain
  consentTitle: 'É necessário um registro extra no domínio do relatório',
  consentText:
    'Como o endereço de relatório pertence a outro domínio, ele deve autorizar o recebimento dos relatórios (RFC 9990).',
  consentAddTo: 'Adicione isto às configurações de DNS de {domain}:',
  consentName: 'Nome:',
  consentValue: 'Valor:',

  // What to do next
  nextTitle: 'Próximos passos',
  nextCheck: '1. Confirme antes se SPF e DKIM estão operando. Use nosso {spf} e nosso {guide}.',
  spfLabel: 'Verificador SPF',
  spfHref: '/pt-br/registro-spf',
  guideLabel: 'Guia de SPF, DKIM e DMARC',
  guideHref: '/blog/spf-dkim-dmarc-explained',
  nextSignIn: '2. Acesse seu painel de DNS (Registro.br, Cloudflare, etc.).',
  nextAdd:
    '3. Crie um novo registro TXT com o nome e o valor indicados acima e salve. Mantenha apenas um registro DMARC por domínio.',
  nextLevel: {
    noReports: 'Configure um endereço de relatório na etapa 2 para acompanhar se seus e-mails legítimos passam nos testes.',
    none: 'Acompanhe os relatórios por algumas semanas. Quando seus e-mails legítimos passarem, alterne para "Enviar para o spam".',
    quarantine: 'Continue monitorando. Se nenhuma mensagem legítima for para o spam, alterne para "Bloquear".',
    reject: 'Monitore os relatórios periodicamente para identificar novos serviços emissores.',
  },

  cleanerToggle: 'Já possui um registro DMARC? Verifique se contém tags obsoletas descontinuadas pela RFC 9989.',
  importLabel: 'Cole seu registro DMARC atual',
  cleanButton: 'Verificar e limpar registro',
  cleanedTitle: 'Registro limpo',
  alreadyClean: 'Seu registro já está totalmente otimizado. Nenhuma alteração foi necessária.',
  whatChanged: (n) => `Alterações efetuadas (${n})`,
  changeLabel: { removed: 'Removido', normalized: 'Modificado', modernized: 'Sugestão' },

  warnings: {
    'bad-address': (address) =>
      `"${address}" não é um e-mail válido. O endereço foi desconsiderado no registro.`,
    'reject-no-reports':
      'Este registro bloqueia e-mails (p=reject) mas não define endereço de relatórios rua. Você não terá visibilidade de falsos positivos.',
    'reject-dkim':
      'Adote p=reject somente se todas as suas mensagens tiverem assinatura DKIM. O encaminhamento frequentemente invalida o SPF.',
    'strict-alignment':
      'O alinhamento estrito exige correspondência exata de domínio. Envios de subdomínios podem ser rejeitados.',
    'ruf-unreliable': 'A maioria dos provedores não emite relatórios ruf por razões de privacidade.',
  },
  changes: {
    'missing-version': () =>
      'Um registro DMARC deve iniciar com v=DMARC1. O registro limpo inclui esse cabeçalho obrigatório.',
    'bad-policy': ({ value }) =>
      `O registro não continha uma política válida${value ? ` ("p=${value}")` : ''}. Foi reconfigurado para p=none.`,
    retired: ({ tag, value }) =>
      `${tag}=${value} foi descontinuado pelo padrão oficial RFC 9989 e foi removido.`,
    'pct-partial': () =>
      'Seu registro aplicava a política apenas a uma fração dos e-mails. Para suavizar testes, utilize o modo de teste (t=y).',
    'sp-matches': ({ value }) => `sp=${value} coincidia com a política principal e foi removido por redundância.`,
    default: ({ tag, value }) => `${tag}=${value} já representa o valor padrão e foi omitido.`,
  },
}

const nlTool: DmarcToolStrings = {
  copy: 'Kopiëren',
  copied: 'Gekopieerd',

  // Step 1
  domainLabel: 'Uw domein',
  domainPlaceholder: 'voorbeeld.nl',
  domainHelp: 'Het deel na de @ in uw e-mailadres. Voor anna@voorbeeld.nl vult u voorbeeld.nl in.',
  domainInvalid: 'Dit lijkt niet op een geldig domein. Voer iets in zoals voorbeeld.nl.',

  // Step 2
  ruaLabel: 'Waar moeten rapporten naartoe?',
  recommended: 'Aanbevolen',
  ruaPlaceholder: 'dmarc@voorbeeld.nl',
  ruaHelp: 'E-mailproviders verzenden periodieke samenvattingen naar dit adres (geaggregeerde rapporten rua).',
  ruaInvalid: 'Dit lijkt niet op een geldig e-mailadres. Dit wordt weggelaten totdat u het corrigeert.',

  // Step 3
  policyLegend: 'Hoe streng moet het beleid zijn?',
  policyIntro:
    'E-mailproviders controleren of e-mails onder uw domeinnaam echt van u afkomstig zijn. Uw DMARC-beleid bepaalt wat er gebeurt met verdachte e-mails.',
  policies: {
    none: {
      title: 'Alleen monitoren',
      text: 'Er verandert nog niets voor uw e-mails. U ontvangt rapporten over wie namens uw domein verzendt.',
    },
    quarantine: {
      title: 'Naar spambox',
      text: 'Niet-geauthenticeerde e-mails worden in de spambox geplaatst. Kies dit zodra uw legitieme e-mails slagen.',
    },
    reject: {
      title: 'Blokkeren',
      text: 'Verdachte e-mails worden direct geweigerd en niet afgeleverd. Kies dit pas als u zeker weet dat al uw e-mails slagen.',
    },
  },
  startHere: 'Begin hier',

  // Advanced settings
  advancedTitle: 'Geavanceerde instellingen',
  advancedHint: 'Subdomeinen, uitlijning, foutrapporten en testmodus. De meeste gebruikers kunnen dit overslaan.',
  testMode: 'Testmodus',
  testModeHelp:
    'Vraagt ontvangende servers om tijdens het testen één niveau milder te handelen. Blokkeren werkt als spam, en spam als monitoren.',
  testModeDisabled: 'Kies eerst "Naar spambox" of "Blokkeren". Testmodus heeft geen effect bij Alleen monitoren.',
  spLabel: 'Beleid voor subdomeinen',
  spInherit: 'Gelijk aan hoofdbeleid',
  spHelp: 'Voor adressen zoals nieuwsbrief.voorbeeld.nl.',
  npLabel: 'Beleid voor niet-bestaande subdomeinen',
  npInherit: 'Gelijk aan subdomeinbeleid',
  npHelp: 'Voor verzonnen namen die oplichters gebruiken, zoals factuur.voorbeeld.nl.',
  adkimLabel: 'DKIM-uitlijning',
  aspfLabel: 'SPF-uitlijning',
  alignRelaxed: 'Ontspannen (standaard, aanbevolen)',
  alignStrict: 'Strikt (exacte domeinovereenkomst)',
  rufLabel: 'E-mail voor foutrapporten',
  rufPlaceholder: 'Optioneel',
  rufHelp: 'Gedetailleerde rapporten over afzonderlijke mislukte e-mails. Veel providers sturen deze niet wegens privacy.',
  foLabel: 'Wanneer foutrapporten verzenden',
  foOptions: {
    '0': 'Wanneer SPF en DKIM beide mislukken (standaard)',
    '1': 'Wanneer SPF of DKIM mislukt',
    d: 'Wanneer DKIM mislukt',
    s: 'Wanneer SPF mislukt',
  },
  foNeedsRuf: 'Vul eerst een e-mailadres voor foutrapporten in.',

  // The record
  recordTitle: 'Uw DMARC-record',
  recordIntro: 'Voeg dit toe aan de DNS-instellingen van uw domein als nieuw TXT-record.',
  typeLabel: 'Type',
  hostLabel: 'Naam / Host',
  fullName: 'Sommige providers vereisen de volledige naam:',
  yourDomain: 'uwdomein.nl',
  valueLabel: 'Waarde',

  // External report domain
  consentTitle: 'Er is een extra record nodig op het rapportagedomein',
  consentText:
    'Omdat het rapportadres op een ander domein staat, moet dat externe domein autorisatie verlenen om rapporten te ontvangen (RFC 9990).',
  consentAddTo: 'Voeg dit toe aan de DNS-instellingen van {domain}:',
  consentName: 'Naam:',
  consentValue: 'Waarde:',

  // What to do next
  nextTitle: 'Volgende stappen',
  nextCheck: '1. Controleer vooraf of SPF en DKIM actief zijn. Gebruik onze {spf} en onze {guide}.',
  spfLabel: 'SPF-checker',
  spfHref: '/nl/spf-record',
  guideLabel: 'Gids voor SPF, DKIM en DMARC',
  guideHref: '/blog/spf-dkim-dmarc-explained',
  nextSignIn: '2. Log in bij uw DNS-provider.',
  nextAdd:
    '3. Maak een nieuw TXT-record aan met de bovenstaande naam en waarde en sla op. Houd slechts één DMARC-record per domein aan.',
  nextLevel: {
    noReports: 'Stel bij stap 2 een rapportadres in om te controleren of uw echte e-mails aan de voorwaarden voldoen.',
    none: 'Bekijk enkele weken de rapportages. Zodra al uw echte e-mails slagen, kiest u "Naar spambox".',
    quarantine: 'Blijf monitoren. Zodra er geen legitieme e-mails meer in spam belanden, kiest u "Blokkeren".',
    reject: 'Blijf rapporten monitoren om nieuwe verzendende diensten direct op te merken.',
  },

  cleanerToggle: 'Heeft u al een DMARC-record? Controleer deze op verouderde tags volgens RFC 9989.',
  importLabel: 'Plak uw huidige DMARC-record',
  cleanButton: 'Record controleren en opschonen',
  cleanedTitle: 'Opgeschoond record',
  alreadyClean: 'Uw record is al optimaal geconfigureerd. Geen wijzigingen vereist.',
  whatChanged: (n) => `Aantal wijzigingen (${n})`,
  changeLabel: { removed: 'Verwijderd', normalized: 'Gewijzigd', modernized: 'Aanbeveling' },

  warnings: {
    'bad-address': (address) =>
      `"${address}" is geen geldig e-mailadres en is weggelaten uit het record.`,
    'reject-no-reports':
      'Dit record blokkeert afgekeurde e-mails (p=reject) maar heeft geen rapportadres. U heeft geen inzicht in eventuele fouten.',
    'reject-dkim':
      'Stel p=reject alleen in als al uw e-mails voorzien zijn van DKIM. Doorgestuurde e-mails falen vaak bij SPF.',
    'strict-alignment':
      'Strikte uitlijning vereist een exacte domeinovereenkomst. Verzendingen vanaf subdomeinen kunnen mislukken.',
    'ruf-unreliable': 'Veel mailproviders verzenden geen ruf-rapporten vanwege privacybeleid.',
  },
  changes: {
    'missing-version': () =>
      'Een DMARC-record moet beginnen met v=DMARC1. Het opgeschoonde record begint met deze verplichte tag.',
    'bad-policy': ({ value }) =>
      `Het record bevatte geen geldig beleid${value ? ` ("p=${value}")` : ''}. Gewijzigd naar p=none voor veilige monitoring.`,
    retired: ({ tag, value }) =>
      `${tag}=${value} maakt geen deel meer uit van de DMARC-standaard (RFC 9989) en is verwijderd.`,
    'pct-partial': () =>
      'Uw record paste het beleid toe op een percentage. Gebruik in plaats daarvan de testmodus (t=y) conform RFC 9989.',
    'sp-matches': ({ value }) => `sp=${value} was gelijk aan het hoofdbeleid en was overbodig.`,
    default: ({ tag, value }) => `${tag}=${value} is reeds de standaardwaarde en is weggelaten.`,
  },
}

const plTool: DmarcToolStrings = {
  copy: 'Kopiuj',
  copied: 'Skopiowano',

  // Step 1
  domainLabel: 'Twoja domena',
  domainPlaceholder: 'twojadomena.pl',
  domainHelp: 'Część adresu po znaku @. Dla jan@twojadomena.pl wpisz twojadomena.pl.',
  domainInvalid: 'To nie wygląda na poprawną domenę. Wpisz np. twojadomena.pl.',

  // Step 2
  ruaLabel: 'Gdzie wysyłać raporty?',
  recommended: 'Zalecane',
  ruaPlaceholder: 'dmarc@twojadomena.pl',
  ruaHelp: 'Serwery pocztowe wysyłają podsumowania na ten adres (raporty zbiorcze rua).',
  ruaInvalid: 'To nie wygląda na poprawny adres e-mail. Zostanie pominięty do czasu poprawienia.',

  // Step 3
  policyLegend: 'Jaki poziom ochrony wybrać?',
  policyIntro:
    'Serwery odbiorcze weryfikują autentyczność wiadomości z Twojej domeny. Polityka DMARC decyduje o losie fałszywych e-maili.',
  policies: {
    none: {
      title: 'Tylko monitoruj',
      text: 'Nie wpływa na doręczalność Twoich wiadomości. Otrzymujesz raporty o tym, kto wysyła pocztę z Twojej domeny.',
    },
    quarantine: {
      title: 'Kieruj do spamu',
      text: 'Niezweryfikowane wiadomości trafiają do folderu spam. Wybierz tę opcję, gdy upewnisz się, że autentyczne wiadomości przechodzą testy.',
    },
    reject: {
      title: 'Blokuj',
      text: 'Podejrzane wiadomości są odrzucane i niedoręczane. Wybierz tę opcję, gdy masz pewność, że cała autentyczna poczta jest poprawnie uwierzytelniona.',
    },
  },
  startHere: 'Zacznij tutaj',

  // Advanced settings
  advancedTitle: 'Ustawienia zaawansowane',
  advancedHint: 'Subdomeny, dopasowanie, raporty o błędach i tryb testowy. Większość użytkowników może to pominąć.',
  testMode: 'Tryb testowy',
  testModeHelp:
    'Zaleca odbiorcom łagodniejsze traktowanie wiadomości podczas testów. Blokuj działa jak spam, a spam jak monitorowanie.',
  testModeDisabled: 'Wybierz najpierw "Kieruj do spamu" lub "Blokuj". Tryb testowy nie działa przy monitorowaniu.',
  spLabel: 'Polityka dla subdomen',
  spInherit: 'Taka sama jak główna',
  spHelp: 'Dla adresów takich jak biuletyn.twojadomena.pl.',
  npLabel: 'Polityka dla nieistniejących subdomen',
  npInherit: 'Taka sama jak dla subdomen',
  npHelp: 'Dla zmyślonych nazw używanych przez oszustów, np. faktury.twojadomena.pl.',
  adkimLabel: 'Dopasowanie DKIM',
  aspfLabel: 'Dopasowanie SPF',
  alignRelaxed: 'Łagodne (domyślne, zalecane)',
  alignStrict: 'Rygorystyczne (dokładna zgodność domeny)',
  rufLabel: 'E-mail do raportów o błędach',
  rufPlaceholder: 'Opcjonalnie',
  rufHelp: 'Raporty o pojedynczych nieudanych wiadomościach. Większość dostawców ich nie wysyła ze względów prywatności.',
  foLabel: 'Kiedy wysyłać raporty o błędach',
  foOptions: {
    '0': 'Gdy zarówno SPF, jak i DKIM zawiodą (domyślnie)',
    '1': 'Gdy SPF lub DKIM zawiedzie',
    d: 'Gdy DKIM zawiedzie',
    s: 'Gdy SPF zawiedzie',
  },
  foNeedsRuf: 'Wprowadź najpierw adres e-mail do raportów o błędach.',

  // The record
  recordTitle: 'Twój rekord DMARC',
  recordIntro: 'Dodaj ten wpis w ustawieniach DNS swojej domeny jako nowy rekord TXT.',
  typeLabel: 'Typ',
  hostLabel: 'Nazwa / Host',
  fullName: 'Niektóre panele wymagają pełnej nazwy:',
  yourDomain: 'twojadomena.pl',
  valueLabel: 'Wartość',

  // External report domain
  consentTitle: 'Wymagany jest dodatkowy rekord w domenie raportowania',
  consentText:
    'Ponieważ adres raportowania znajduje się w innej domenie, musi ona wyrazić zgodę na odbiór raportów (RFC 9990).',
  consentAddTo: 'Dodaj to w ustawieniach DNS domeny {domain}:',
  consentName: 'Nazwa:',
  consentValue: 'Wartość:',

  // What to do next
  nextTitle: 'Kolejne kroki',
  nextCheck: '1. Upewnij się, że SPF i DKIM działają poprawnie. Skorzystaj z naszego {spf} oraz {guide}.',
  spfLabel: 'Testera SPF',
  spfHref: '/pl/rekord-spf',
  guideLabel: 'Przewodnika po SPF, DKIM i DMARC',
  guideHref: '/blog/spf-dkim-dmarc-explained',
  nextSignIn: '2. Zaloguj się do panelu zarządzania DNS.',
  nextAdd:
    '3. Dodaj nowy rekord TXT z podaną powyżej nazwą i wartością, a następnie zapisz. Utrzymuj tylko jeden rekord DMARC w domenie.',
  nextLevel: {
    noReports: 'Skonfiguruj adres raportowania w kroku 2, aby monitorować poprawność dostarczania autentycznych wiadomości.',
    none: 'Przeglądaj raporty przez kilka tygodni. Gdy autentyczna poczta przechodzi testy, przełącz na "Kieruj do spamu".',
    quarantine: 'Kontynuuj monitoring. Gdy żadna pożądana wiadomość nie trafia do spamu, przełącz na "Blokuj".',
    reject: 'Okresowo weryfikuj raporty, aby od razu wykrywać nowe serwery wysyłkowe.',
  },

  cleanerToggle: 'Masz już rekord DMARC? Sprawdź, czy nie zawiera tagów wycofanych przez RFC 9989.',
  importLabel: 'Wklej swój obecny rekord DMARC',
  cleanButton: 'Sprawdź i zoptymalizuj rekord',
  cleanedTitle: 'Zoptymalizowany rekord',
  alreadyClean: 'Twój rekord jest już w pełni poprawny. Nie wymagał żadnych modyfikacji.',
  whatChanged: (n) => `Liczba modyfikacji (${n})`,
  changeLabel: { removed: 'Usunięto', normalized: 'Zmieniono', modernized: 'Zalecenie' },

  warnings: {
    'bad-address': (address) =>
      `"${address}" nie jest poprawnym adresem e-mail i został pominięty w rekordzie.`,
    'reject-no-reports':
      'Ten rekord blokuje wiadomości (p=reject), ale nie ma adresu raportów rua. Utracisz wiedzę o fałszywych odrzuceniach.',
    'reject-dkim':
      'Używaj p=reject tylko wtedy, gdy cała poczta jest podpisana przez DKIM. Przekierowania często powodują błędy SPF.',
    'strict-alignment':
      'Rygorystyczne dopasowanie wymaga identycznej domeny. Wiadomości z subdomen mogą zostać odrzucone.',
    'ruf-unreliable': 'Większość dostawców poczty nie przesyła raportów ruf z uwagi na ochronę danych osobowych.',
  },
  changes: {
    'missing-version': () =>
      'Rekord DMARC musi rozpoczynać się od v=DMARC1. Oczyszczony rekord zawiera ten wymagany nagłówek.',
    'bad-policy': ({ value }) =>
      `Rekord nie zawierał prawidłowej polityki${value ? ` ("p=${value}")` : ''}. Zmieniono na p=none.`,
    retired: ({ tag, value }) =>
      `${tag}=${value} nie wchodzi już w skład oficjalnego standardu DMARC (RFC 9989) i został usunięty.`,
    'pct-partial': () =>
      'Twój rekord stosował politykę tylko do części poczty. W celu łagodnego testowania użyj trybu testowego (t=y).',
    'sp-matches': ({ value }) => `sp=${value} pokrywało się z główną polityką i było zbędne.`,
    default: ({ tag, value }) => `${tag}=${value} jest wartością domyślną i zostało pominięte.`,
  },
}

const idTool: DmarcToolStrings = {
  copy: 'Salin',
  copied: 'Tersalin',

  // Step 1
  domainLabel: 'Domain Anda',
  domainPlaceholder: 'domainanda.id',
  domainHelp: 'Bagian setelah tanda @ pada alamat email Anda. Untuk anna@domainanda.id, masukkan domainanda.id.',
  domainInvalid: 'Format domain tidak valid. Masukkan format seperti domainanda.id.',

  // Step 2
  ruaLabel: 'Ke mana laporan harus dikirim?',
  recommended: 'Direkomendasikan',
  ruaPlaceholder: 'dmarc@domainanda.id',
  ruaHelp: 'Penyedia email mengirimkan laporan agregat berkala ke alamat ini (laporan rua).',
  ruaInvalid: 'Format email tidak valid. Bagian ini akan diabaikan sampai diperbaiki.',

  // Step 3
  policyLegend: 'Seberapa ketat kebijakan yang diinginkan?',
  policyIntro:
    'Penyedia email memvalidasi apakah email yang mengatasnamakan domain Anda benar-benar resmi. Kebijakan DMARC menentukan tindakan terhadap email palsu.',
  policies: {
    none: {
      title: 'Hanya pantau',
      text: 'Tidak memengaruhi pengiriman email Anda. Anda menerima laporan mengenai siapa saja yang mengirim email atas nama domain Anda.',
    },
    quarantine: {
      title: 'Kirim ke spam',
      text: 'Email yang gagal autentikasi diarahkan ke folder spam penerima. Pilih opsi ini setelah memastikan email sah lolos pengujian.',
    },
    reject: {
      title: 'Tolak',
      text: 'Email yang gagal langsung ditolak dan tidak sampai ke penerima. Pilih opsi ini setelah yakin seluruh email resmi terautentikasi.',
    },
  },
  startHere: 'Mulai dari sini',

  // Advanced settings
  advancedTitle: 'Pengaturan lanjutan',
  advancedHint: 'Subdomain, penyelarasan, laporan kegagalan forensik, dan mode uji coba. Dapat dilewati oleh sebagian besar pengguna.',
  testMode: 'Mode uji coba',
  testModeHelp:
    'Meminta server penerima menerapkan tindakan satu tingkat lebih lunak selama uji coba. Tolak berlaku sebagai karantina, karantina berlaku sebagai pantau.',
  testModeDisabled: 'Pilih "Kirim ke spam" atau "Tolak" terlebih dahulu. Mode uji coba tidak berpengaruh pada opsi Hanya pantau.',
  spLabel: 'Kebijakan untuk subdomain',
  spInherit: 'Sama dengan kebijakan utama',
  spHelp: 'Untuk alamat seperti buletin.domainanda.id.',
  npLabel: 'Kebijakan untuk subdomain yang tidak ada',
  npInherit: 'Sama dengan kebijakan subdomain',
  npHelp: 'Untuk nama palsu yang dimanfaatkan penipu, seperti tagihan.domainanda.id.',
  adkimLabel: 'Penyelarasan DKIM',
  aspfLabel: 'Penyelarasan SPF',
  alignRelaxed: 'Longgar (standar, direkomendasikan)',
  alignStrict: 'Ketat (pencocokan domain persis)',
  rufLabel: 'Email untuk laporan kegagalan',
  rufPlaceholder: 'Opsional',
  rufHelp: 'Laporan per pesan yang gagal autentikasi. Banyak penyedia email tidak mengirimkannya demi privasi.',
  foLabel: 'Kapan laporan kegagalan dikirim',
  foOptions: {
    '0': 'Ketika SPF dan DKIM sama-sama gagal (standar)',
    '1': 'Ketika SPF atau DKIM gagal',
    d: 'Ketika DKIM gagal',
    s: 'Ketika SPF gagal',
  },
  foNeedsRuf: 'Masukkan alamat email laporan kegagalan terlebih dahulu.',

  // The record
  recordTitle: 'Catatan DMARC Anda',
  recordIntro: 'Tambahkan catatan ini ke pengaturan DNS domain Anda sebagai catatan TXT baru.',
  typeLabel: 'Tipe',
  hostLabel: 'Nama / Host',
  fullName: 'Beberapa penyedia membutuhkan nama lengkap:',
  yourDomain: 'domainanda.id',
  valueLabel: 'Nilai',

  // External report domain
  consentTitle: 'Diperlukan satu catatan tambahan pada domain laporan',
  consentText:
    'Karena alamat laporan berada di domain yang berbeda, domain tersebut harus memberikan otorisasi untuk menerima laporan (RFC 9990).',
  consentAddTo: 'Tambahkan ini ke pengaturan DNS domain {domain}:',
  consentName: 'Nama:',
  consentValue: 'Nilai:',

  // What to do next
  nextTitle: 'Langkah berikutnya',
  nextCheck: '1. Pastikan SPF dan DKIM sudah dikonfigurasi sebelumnya. Gunakan {spf} dan {guide} kami.',
  spfLabel: 'Pemeriksa SPF',
  spfHref: '/id/spf-record',
  guideLabel: 'Panduan SPF, DKIM, dan DMARC',
  guideHref: '/blog/spf-dkim-dmarc-explained',
  nextSignIn: '2. Masuk ke panel DNS penyedia hosting Anda.',
  nextAdd:
    '3. Buat catatan TXT baru dengan nama dan nilai di atas lalu simpan. Pastikan hanya ada satu catatan DMARC pada domain Anda.',
  nextLevel: {
    noReports: 'Tentukan alamat laporan pada langkah 2 agar Anda dapat memantau apakah email resmi Anda lolos verifikasi.',
    none: 'Pantau laporan selama beberapa pekan. Jika email resmi Anda lolos dengan stabil, tingkatkan ke "Kirim ke spam".',
    quarantine: 'Lanjutkan pemantauan. Jika tidak ada email sah yang masuk ke spam, tingkatkan ke "Tolak".',
    reject: 'Pantau laporan secara berkala untuk mendeteksi layanan pengirim baru secara cepat.',
  },

  cleanerToggle: 'Sudah memiliki catatan DMARC? Periksa apakah memuat tag yang telah dihapus oleh RFC 9989.',
  importLabel: 'Tempelkan catatan DMARC Anda saat ini',
  cleanButton: 'Periksa dan bersihkan catatan',
  cleanedTitle: 'Catatan yang dibersihkan',
  alreadyClean: 'Catatan DMARC Anda sudah optimal. Tidak ada perubahan yang diperlukan.',
  whatChanged: (n) => `Perubahan yang dilakukan (${n})`,
  changeLabel: { removed: 'Dihapus', normalized: 'Diubah', modernized: 'Saran' },

  warnings: {
    'bad-address': (address) =>
      `"${address}" bukan alamat email yang valid dan telah diabaikan dari catatan.`,
    'reject-no-reports':
      'Catatan ini menolak email (p=reject) tanpa menyertakan alamat laporan rua. Anda tidak dapat mendeteksi kegagalan email resmi.',
    'reject-dkim':
      'Terapkan p=reject hanya jika seluruh email telah ditandatangani dengan DKIM. Pengalihan email sering merusak validasi SPF.',
    'strict-alignment':
      'Penyelarasan ketat mewajibkan domain persis sama. Email dari subdomain dapat mengalami kegagalan.',
    'ruf-unreliable': 'Banyak penyedia email tidak mengirimkan laporan ruf demi alasan privasi.',
  },
  changes: {
    'missing-version': () =>
      'Catatan DMARC wajib diawali dengan v=DMARC1. Catatan yang dibersihkan kini menyertakan awalan ini.',
    'bad-policy': ({ value }) =>
      `Catatan tidak memiliki kebijakan yang valid${value ? ` ("p=${value}")` : ''}. Diubah menjadi p=none.`,
    retired: ({ tag, value }) =>
      `${tag}=${value} telah dihapus dari standar resmi DMARC (RFC 9989) dan telah dibersihkan.`,
    'pct-partial': () =>
      'Catatan Anda sebelumnya menerapkan kebijakan hanya ke sebagian email. Untuk uji coba bertahap, gunakan mode uji coba (t=y).',
    'sp-matches': ({ value }) => `sp=${value} sama persis dengan kebijakan utama dan dihapus karena mubazir.`,
    default: ({ tag, value }) => `${tag}=${value} adalah nilai bawaan dan tidak perlu dicantumkan.`,
  },
}

export const DMARC_TOOL_STRINGS: Record<Locale, DmarcToolStrings> = { en, de: deTool, fr: frTool, es: esTool, it: itTool, 'pt-br': ptBrTool, nl: nlTool, pl: plTool, id: idTool }

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
