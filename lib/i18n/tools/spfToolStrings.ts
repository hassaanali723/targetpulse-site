// Labels and messages of the SPF checker tool (components/tools/SpfChecker/SpfCheckerTool.tsx),
// one object per language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/spfCheckerStrings.ts.
//
// English is the original wording moved here unchanged. Text that comes from
// lib/tools/spfCheckerCore.ts (issue messages, include failures) and from
// lib/tools/spfSenders.ts (service notes, reasons, names) stays there for
// English. The optional maps at the end of SpfToolStrings are used for the
// other languages, keyed by the core's codes or by the service.
//
// Templates: a string with {slot} markers is filled by the tool with text or
// elements (a code span, a button, a link). Keep every slot in a translation.

import type { Locale } from '@/lib/i18n/clusters'
import type { SpfFailureKind, SpfIssue, SpfIssueParams, SpfNode, SpfQualifier } from '@/lib/tools/spfCheckerCore'
import { senderName, type SpfSender, type SpfUnneeded } from '@/lib/tools/spfSenders'

export interface SpfSummaryParts {
  domain: string
  /** DNS lookups the record uses. */
  lookups: number
  /** The lookup limit (10). */
  limit: number
  /** The qualifier of the all that ends the record (after redirects), or null. */
  allQualifier: SpfQualifier | null
}

/** Every value an issue message can use; fields the core didn't set are empty. */
export type SpfIssueValues = Required<SpfIssueParams> & { domain: string }

/** One key per core message: the code, plus `-variant` when a code has more than one message. */
export type SpfIssueKey =
  | 'bad-syntax' // "raw" is written incorrectly
  | 'bad-syntax-percent' // "raw" has a % sign that isn't a valid macro
  | 'duplicate-modifier' // name
  | 'empty-modifier' // raw
  | 'equals-not-colon' // raw, name, value
  | 'unknown-term' // raw
  | 'bad-ip' // raw, family
  | 'bad-cidr' // raw, max
  | 'after-all'
  | 'include-plus-all'
  | 'long-record' // length
  | 'macro' // target: an include or redirect built from macros
  | 'macro-exists' // raw: exists with macros in the domain's own record
  | 'loop' // target, chain
  | 'too-deep' // limit
  | 'temperror' // target: an include or redirect didn't answer
  | 'temperror-term' // raw, target: an a or mx term couldn't be checked
  | 'include-no-spf' // target, missing
  | 'redirect-no-spf' // target, missing
  | 'multiple' // target, count: the checked domain itself
  | 'multiple-included' // target, count: an included domain
  | 'void-a' // raw, target
  | 'void-mx' // raw, target
  | 'mx-over-10' // target, count
  | 'ptr' // raw
  | 'exists' // raw, target
  | 'redirect-ignored'
  | 'plus-all'
  | 'neutral-all'
  | 'no-all'
  | 'too-many-lookups' // lookups, limit
  | 'near-limit' // lookups, limit: all 10 used
  | 'near-limit-one-left' // lookups, limit: 9 of 10 used
  | 'too-many-voids' // voids, limit

export interface SpfToolStrings {
  /** Widens the lookup-count column for languages whose "N lookups" label is longer than English. */
  wideCostColumn?: boolean
  // Tabs. The second part of each tab is hidden on phones and starts with a space.
  tabsLabel: string
  tabCheck: string
  tabCheckMore: string
  tabCreate: string
  tabCreateMore: string

  // Check form
  label: string
  placeholder: string
  button: string
  tryLabel: string
  inputEmpty: string
  inputInvalid: string
  lookupError: string
  /** The domain's DNS servers didn't answer. `message` is the core's English sentence. */
  noAnswer: (p: { domain: string; message: string }) => string

  // Result
  summary: {
    valid: (p: SpfSummaryParts) => { title: string; text: string }
    warnings: (p: SpfSummaryParts) => { title: string; text: string }
    /** Errors that make receivers return permerror. */
    broken: (p: SpfSummaryParts) => { title: string; text: string }
    /** No permerror, but +all lets every server pass. */
    unprotected: (p: SpfSummaryParts) => { title: string; text: string }
    none: (p: SpfSummaryParts) => { title: string; text: string }
    nxdomain: (p: SpfSummaryParts) => { title: string; text: string }
  }
  recordFor: (domain: string) => string
  copy: string
  copied: string
  lookupsMeter: string
  lookupsMeterNote: string
  voidMeter: string
  voidMeterNote: string
  /** After the number on a meter: "of 10". */
  meterOf: (limit: number) => string
  unlisted: string
  allLabel: Record<SpfQualifier, string>
  allNotSet: string
  allSetBy: (qualifier: SpfQualifier) => string
  allMissing: string
  fixTitle: string
  notesTitle: string
  /** Under an issue found in another domain's record. */
  inDomain: (domain: string) => string
  thPart: string
  thMeaning: string
  thCost: string
  /** Table header on phones. */
  partsTitle: string
  /** "1 lookup", "3 lookups". */
  lookups: (n: number) => string
  vSpf1: string
  showContents: (domain: string) => string
  hideContents: (domain: string) => string
  /** Plain-English meaning of each part of a record. */
  describe: {
    redirect: (domain: string) => string
    exp: string
    unknownModifier: string
    all: Record<SpfQualifier, string>
    /** One address (ip4 or ip6 without a range). */
    server: (address: string) => string
    ip4Range: (address: string, cidr: string, count: number) => string
    ip6Range: (address: string, cidr: string) => string
    /** `cidr` is empty when the term has none. */
    a: (domain: string, cidr: string) => string
    mx: (domain: string) => string
    include: (domain: string, service: string | null) => string
    ptr: (domain: string) => string
    existsMacro: string
    exists: (domain: string) => string
    /** Joins a subject above with what happens to its mail. `single`: the subject is one server. */
    sentence: (subject: string, qualifier: SpfQualifier, single: boolean) => string
  }
  nearMissTitle: string
  nearMissSpf2: string
  nearMissOther: string
  /** Template: {domain}, {record} (the code v=spf1 -all). */
  noMx: string
  createFor: (domain: string) => string
  fixInCreator: string
  answeredBy: string
  publicDns: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
  ctaHref: string

  // Create tab
  domainStep: string
  loadButton: string
  loadHelp: string
  load: {
    nxdomain: (domain: string) => string
    none: (domain: string) => string
    redirect: (domain: string, record: string) => string
    /** `multiple`: more than one record, the first was loaded. `changedAll`: the ending was changed to ~all. */
    loaded: (p: { domain: string; multiple: boolean; changedAll: boolean }) => string
  }
  sendersStep: string
  sendersHelp: string
  groupMailbox: string
  groupService: string
  /** Template for a service that usually needs no include: {include}, {name}, {reason}. */
  unneededInline: (subdomainOnly: boolean) => string
  /** The same note in the check results, with the lookups it would free. */
  unneeded: (p: { include: string; name: string; subdomainOnly: boolean; reason: string; cost: number }) => string
  unneededSummary: string
  otherLabel: string
  otherPlaceholder: string
  addButton: string
  otherHelp: string
  ownServer: string
  ipsLabel: string
  ipsPlaceholder: string
  ipsHelp: string
  aLabel: string
  aHelp: string
  mxLabel: string
  mxHelp: string
  keptTitle: string
  /** aria-label of the remove button on a term. */
  remove: (term: string) => string
  allStep: string
  softFail: { title: string; text: string }
  fail: { title: string; text: string }
  recordTitle: string
  recordHelp: string
  typeLabel: string
  nameLabel: string
  nameHelp: string
  valueLabel: string
  draftLookups: (n: number, limit: number) => string
  counting: string
  /** Template: {ending} (the code -all). */
  noSenders: string
  neverSends: string
  draftError: string
  howTitle: string
  howSteps: [string, string, string]
  /** Template: {check} (a button), {dkim} and {dmarc} (links). */
  howLast: string
  checkPublished: string
  dkimLabel: string
  dkimHref: string
  dmarcLabel: string
  dmarcHref: string

  // Text from the core and lib/tools/spfSenders.ts. English leaves these out and shows the original text.
  /** Issue messages by key (see SpfIssueKey). */
  issues?: Record<SpfIssueKey, (p: SpfIssueValues) => string>
  /** Why an include or redirect target failed, shown under the term. */
  failures?: Record<SpfFailureKind, string>
  /** Service names that carry words, by include domain (see OTHER_NAMES in spfSenders.ts). */
  senderNames?: Record<string, string>
  /** Notes under services in the builder, by SPF_SENDERS name. */
  senderNotes?: Record<string, string>
  /** Why a service needs no include, by SPF_NOT_NEEDED name. Also used on the page. */
  notNeededReasons?: Record<string, string>
}

const enLookups = (p: SpfSummaryParts) => `It uses ${p.lookups} of the ${p.limit} allowed DNS lookups.`
const enAll = (q: SpfQualifier | null) => {
  if (q === '-') return 'Mail from servers it doesn’t list fails SPF.'
  if (q === '~') return 'Mail from servers it doesn’t list gets a soft fail.'
  return ''
}
const enCount = (n: number) => `${n} lookup${n === 1 ? '' : 's'}`

const en: SpfToolStrings = {
  tabsLabel: 'SPF tool mode',
  tabCheck: 'Check',
  tabCheckMore: ' SPF record',
  tabCreate: 'Create',
  tabCreateMore: ' SPF record',

  label: 'Domain or email address',
  placeholder: 'example.com',
  button: 'Check SPF record',
  tryLabel: 'Try:',
  inputEmpty: 'Enter a domain, such as example.com.',
  inputInvalid: 'That doesn’t look like a domain. Enter something like example.com.',
  lookupError: 'We couldn’t reach the DNS services. Check your connection and try again.',
  noAnswer: ({ message }) => `${message} Receivers get the same temporary error (temperror) right now. Try again in a few minutes.`,

  summary: {
    valid: (p) => ({ title: `${p.domain} has a valid SPF record`, text: `${enLookups(p)} ${enAll(p.allQualifier)}`.trim() }),
    warnings: (p) => ({
      title: `${p.domain} has a working SPF record with warnings`,
      text: `Receivers can use it, but the warnings below weaken it or could break it later. ${enLookups(p)}`,
    }),
    broken: (p) => ({
      title: `${p.domain}’s SPF record is broken`,
      text: 'Receivers treat a record like this as an error (permerror), so SPF fails for all mail from this domain. The fixes are listed below.',
    }),
    unprotected: (p) => ({
      title: `${p.domain}’s SPF record doesn’t protect the domain`,
      text: `It lets any server on the internet pass SPF, so anyone can send mail that passes as ${p.domain}.`,
    }),
    none: (p) => ({
      title: `${p.domain} has no SPF record`,
      text: 'Receivers can’t tell which servers may send email for it. Gmail has required SPF or DKIM from every sender since February 2024.',
    }),
    nxdomain: (p) => ({ title: `${p.domain} doesn’t exist`, text: 'DNS has no record of this domain. Check the spelling.' }),
  },
  recordFor: (domain) => `SPF record for ${domain}`,
  copy: 'Copy',
  copied: 'Copied',
  lookupsMeter: 'DNS lookups',
  lookupsMeterNote: 'include, a, mx, ptr, exists and redirect each cost one, including inside includes.',
  voidMeter: 'Void lookups',
  voidMeterNote: 'Lookups that found nothing. More than 2 can make receivers fail SPF.',
  meterOf: (limit) => `of ${limit}`,
  unlisted: 'Servers not listed',
  allLabel: { '-': 'Fail', '~': 'Soft fail', '?': 'Neutral', '+': 'Pass (unsafe)' },
  allNotSet: 'Not set',
  allSetBy: (q) => `Set by ${q}all at the end of the record.`,
  allMissing: 'The record has no all at the end, so other servers get a neutral result.',
  fixTitle: 'What to fix',
  notesTitle: 'Notes',
  inDomain: (domain) => `in ${domain}`,
  thPart: 'Part',
  thMeaning: 'What it means',
  thCost: 'Cost',
  partsTitle: 'What each part means',
  lookups: enCount,
  vSpf1: 'Marks this TXT record as an SPF record. Every SPF record starts with it.',
  showContents: (domain) => `Show what ${domain} contains`,
  hideContents: (domain) => `Hide what ${domain} contains`,
  describe: {
    redirect: (domain) => `If nothing above matches, use the SPF record of ${domain} instead.`,
    exp: 'Names a TXT record with a message receivers can show when SPF fails.',
    unknownModifier: 'A setting SPF doesn’t define. Receivers ignore it.',
    all: {
      '-': 'Mail from every other server fails SPF.',
      '~': 'Mail from every other server gets a soft fail. Receivers usually accept it but treat it with more suspicion.',
      '?': 'Says nothing about other servers. Their mail gets a neutral result, which counts the same as having no SPF record.',
      '+': 'Every server on the internet passes SPF. This cancels out the rest of the record.',
    },
    server: (address) => `The server at ${address}`,
    ip4Range: (address, cidr, count) => `Servers in the range ${address}/${cidr} (${count.toLocaleString('en-US')} addresses)`,
    ip6Range: (address, cidr) => `Servers in the IPv6 range ${address}/${cidr}`,
    a: (domain, cidr) => `Servers at the IP addresses of ${domain}${cidr ? ` (widened by ${cidr})` : ''}`,
    mx: (domain) => `The mail servers that receive email for ${domain}`,
    include: (domain, service) => `Servers allowed by the SPF record of ${domain}${service ? ` (${service})` : ''}`,
    ptr: (domain) => `Servers whose IP address points back to a name under ${domain}`,
    existsMacro: 'Matches when a DNS lookup built from details of the sending server finds an address. Large senders use this for big server lists.',
    exists: (domain) => `Matches when ${domain} has an IP address.`,
    sentence: (subject, q, single) => {
      const verb = {
        '+': 'may send',
        '-': single ? 'fails SPF' : 'fail SPF',
        '~': single ? 'gets a soft fail' : 'get a soft fail',
        '?': single ? 'gets a neutral result' : 'get a neutral result',
      }[q]
      return `${subject} ${verb}.`
    },
  },
  nearMissTitle: 'We found a TXT record that looks like a broken SPF record:',
  nearMissSpf2: 'A record starting with v=spf2.0 belongs to Sender ID, an old system receivers no longer check. An SPF record must start with exactly v=spf1.',
  nearMissOther: 'Receivers ignore it, because an SPF record must start with exactly v=spf1 followed by a space.',
  noMx: '{domain} has no MX records either, so it may not be used for email at all. A domain that never sends email can publish {record}. That tells receivers no server may send for it, which makes it harder to fake.',
  createFor: (domain) => `Create an SPF record for ${domain}`,
  fixInCreator: 'Load this record into the SPF creator to fix it',
  answeredBy: 'Answered by',
  publicDns: 'public DNS',
  ctaTitle: 'SPF doesn’t stop bounces',
  ctaText: 'SPF shows that your mail comes from your servers. Mail sent to addresses that don’t exist still bounces, and a high bounce rate hurts delivery.',
  ctaButton: 'Verify an email list',
  ctaHref: '/bulk-email-verifier',

  domainStep: 'Your domain',
  loadButton: 'Load current record',
  loadHelp: 'If your domain already has an SPF record, load it and add the new sender to it. You can also skip this step.',
  load: {
    nxdomain: (domain) => `${domain} doesn’t exist in DNS. Check the spelling.`,
    none: (domain) => `${domain} has no SPF record yet. Pick your senders below to create one.`,
    redirect: (domain, record) => `${domain} uses a redirect in its SPF record (${record}). The form can’t edit that safely, so change it by hand.`,
    loaded: ({ domain, multiple, changedAll }) =>
      `We loaded the current record for ${domain}. Add or remove senders, then replace the old record with the new one.${
        multiple ? ' It has more than one SPF record, so we loaded the first. Delete the others after you publish this one.' : ''
      }${changedAll ? ' Its ending was not ~all or -all, so we changed it to ~all.' : ''}`,
  },
  sendersStep: 'Which services send email from your domain?',
  sendersHelp: 'Tick every service that sends mail with your domain in the address. The number is how many of the 10 allowed DNS lookups each one uses.',
  groupMailbox: 'Email providers',
  groupService: 'Sending, marketing and support tools',
  unneededInline: (subdomainOnly) => `{include} ({name}) is usually not needed${subdomainOnly ? ' on a main domain' : ''}. {reason}`,
  unneeded: ({ include, name, subdomainOnly, reason, cost }) =>
    `include:${include} (${name}) is usually not needed${subdomainOnly ? ' on a main domain' : ''}. ${reason} Removing it would free ${enCount(cost)}.`,
  unneededSummary: 'Using Mailchimp, SendGrid, Brevo or similar? They may not need an include.',
  otherLabel: 'Another service not listed here',
  otherPlaceholder: 'spf.example-service.com',
  addButton: 'Add',
  otherHelp: 'Copy the include value from the service’s setup guide.',
  ownServer: 'Do you also send from your own server?',
  ipsLabel: 'IP addresses of servers that send your mail',
  ipsPlaceholder: '192.0.2.10\n198.51.100.0/24\n2001:db8::/32',
  ipsHelp: 'One per line. IPv4 and IPv6 both work, and so do ranges like /24.',
  aLabel: 'The server my domain points to sends mail',
  aHelp: 'Adds the IP address of your domain itself. Uses 1 lookup.',
  mxLabel: 'My incoming mail servers also send mail',
  mxHelp: 'Adds the servers in your MX records. Uses 1 lookup. Not needed for Google Workspace or Microsoft 365, whose includes already cover sending.',
  keptTitle: 'Kept from your current record',
  remove: (term) => `Remove ${term}`,
  allStep: 'What should happen to mail from servers you didn’t list?',
  softFail: {
    title: 'Soft fail',
    text: 'Receivers accept the mail but treat it with more suspicion. Google and M3AAWG recommend this ending.',
  },
  fail: {
    title: 'Fail',
    text: 'Tells receivers the mail is not authorized. Microsoft recommends it once DKIM and DMARC are set up. Some receivers then reject mail before DMARC runs, so it never appears in DMARC reports.',
  },
  recordTitle: 'Your SPF record',
  recordHelp: 'Add it to your domain’s DNS as a TXT record.',
  typeLabel: 'Type',
  nameLabel: 'Name / Host',
  nameHelp: 'Some DNS hosts want the domain itself instead of @, or an empty name field.',
  valueLabel: 'Value',
  draftLookups: (n, limit) => `${n} of ${limit} DNS lookups`,
  counting: 'Counting against live DNS',
  noSenders:
    'No senders picked yet. A record with no senders says that no server may send for the domain. That is right only for a domain that never sends email, and then it should end in {ending}.',
  neverSends: 'This domain never sends email',
  draftError: 'We couldn’t reach the DNS services to count the lookups. Check your connection.',
  howTitle: 'How to add it',
  howSteps: [
    'Sign in where you manage your domain’s DNS. This is usually the company you bought the domain from.',
    'Look for a TXT record that starts with v=spf1. If there is one, replace its value with the record above. Don’t add a second SPF record, because two records break SPF for all your mail.',
    'If there isn’t one, add a new TXT record with the name and value above, then save.',
  ],
  howLast: 'Wait a few minutes, then {check}. Set up DKIM and DMARC too, with the {dkim} and the {dmarc}.',
  checkPublished: 'check the published record',
  dkimLabel: 'DKIM generator',
  dkimHref: '/dkim-generator',
  dmarcLabel: 'DMARC generator',
  dmarcHref: '/dmarc-generator',
}

const deTool: SpfToolStrings = {
  wideCostColumn: true,
  // German puts the verb last, so a hidden second part can't complete the phrase.
  // Both tabs use one short name that fits on phones.
  tabsLabel: 'Modus des SPF-Tools',
  tabCheck: 'SPF-Check',
  tabCheckMore: '',
  tabCreate: 'SPF-Generator',
  tabCreateMore: '',

  label: 'Domain oder E-Mail-Adresse',
  placeholder: 'beispiel.de',
  button: 'SPF-Eintrag prüfen',
  tryLabel: 'Beispiele:',
  inputEmpty: 'Geben Sie eine Domain ein, zum Beispiel beispiel.de.',
  inputInvalid: 'Das sieht nicht nach einer Domain aus. Geben Sie etwas wie beispiel.de ein.',
  lookupError: 'Wir konnten die DNS-Dienste nicht erreichen. Prüfen Sie Ihre Verbindung und versuchen Sie es noch einmal.',
  // `message` is the core's English sentence, so the German text is rebuilt from the domain.
  noAnswer: ({ domain }) =>
    `${domain ? `Die DNS-Server von ${domain} haben nicht geantwortet.` : 'Die DNS-Server haben nicht geantwortet.'} Empfänger bekommen gerade denselben vorübergehenden Fehler (temperror). Versuchen Sie es in ein paar Minuten noch einmal.`,

  summary: {
    valid: (p) => ({
      title: `${p.domain} hat einen gültigen SPF-Eintrag`,
      text: `Der Eintrag nutzt ${p.lookups} der ${p.limit} erlaubten DNS-Abfragen. ${
        p.allQualifier === '-'
          ? 'E-Mails von Servern, die er nicht aufführt, bestehen SPF nicht.'
          : p.allQualifier === '~'
            ? 'E-Mails von Servern, die er nicht aufführt, bekommen einen Softfail.'
            : ''
      }`.trim(),
    }),
    warnings: (p) => ({
      title: `${p.domain} hat einen funktionierenden SPF-Eintrag mit Warnungen`,
      text: `Empfänger können ihn nutzen, aber die Warnungen unten schwächen ihn oder könnten ihn später unbrauchbar machen. Der Eintrag nutzt ${p.lookups} der ${p.limit} erlaubten DNS-Abfragen.`,
    }),
    broken: (p) => ({
      title: `Der SPF-Eintrag von ${p.domain} ist fehlerhaft`,
      text: 'Empfänger werten einen solchen Eintrag als Fehler (permerror). SPF schlägt dann für alle E-Mails dieser Domain fehl. Die Korrekturen stehen unten.',
    }),
    unprotected: (p) => ({
      title: `Der SPF-Eintrag von ${p.domain} schützt die Domain nicht`,
      text: `Er lässt jeden Server im Internet SPF bestehen. Jeder kann also E-Mails senden, die als ${p.domain} durchgehen.`,
    }),
    none: (p) => ({
      title: `${p.domain} hat keinen SPF-Eintrag`,
      text: 'Empfänger können nicht erkennen, welche Server für diese Domain E-Mails senden dürfen. Gmail verlangt seit Februar 2024 SPF oder DKIM von jedem Absender.',
    }),
    nxdomain: (p) => ({ title: `${p.domain} existiert nicht`, text: 'Das DNS kennt diese Domain nicht. Prüfen Sie die Schreibweise.' }),
  },
  recordFor: (domain) => `SPF-Eintrag für ${domain}`,
  copy: 'Kopieren',
  copied: 'Kopiert',
  lookupsMeter: 'DNS-Abfragen',
  lookupsMeterNote: 'include, a, mx, ptr, exists und redirect kosten je eine, auch innerhalb von includes.',
  voidMeter: 'Leere Abfragen',
  voidMeterNote: 'Abfragen, die nichts gefunden haben. Bei mehr als 2 können Empfänger SPF als fehlgeschlagen werten.',
  meterOf: (limit) => `von ${limit}`,
  unlisted: 'Nicht aufgeführte Server',
  allLabel: { '-': 'Fail', '~': 'Softfail', '?': 'Neutral', '+': 'Pass (unsicher)' },
  allNotSet: 'Nicht festgelegt',
  allSetBy: (q) => `Festgelegt durch ${q}all am Ende des Eintrags.`,
  allMissing: 'Der Eintrag hat kein all am Ende. Andere Server bekommen deshalb ein neutrales Ergebnis.',
  fixTitle: 'Was Sie beheben sollten',
  notesTitle: 'Hinweise',
  inDomain: (domain) => `in ${domain}`,
  thPart: 'Teil',
  thMeaning: 'Bedeutung',
  thCost: 'Kosten',
  partsTitle: 'Was jeder Teil bedeutet',
  lookups: (n) => `${n} ${n === 1 ? 'Abfrage' : 'Abfragen'}`,
  vSpf1: 'Kennzeichnet diesen TXT-Eintrag als SPF-Eintrag. Jeder SPF-Eintrag beginnt damit.',
  showContents: (domain) => `Inhalt von ${domain} anzeigen`,
  hideContents: (domain) => `Inhalt von ${domain} ausblenden`,
  // The subjects below avoid relative clauses, so `sentence` can add the verb without a comma.
  describe: {
    redirect: (domain) => `Trifft keiner der Teile davor zu, gilt stattdessen der SPF-Eintrag von ${domain}.`,
    exp: 'Nennt einen TXT-Eintrag mit einer Meldung, die Empfänger anzeigen können, wenn SPF fehlschlägt.',
    unknownModifier: 'Eine Einstellung, die SPF nicht definiert. Empfänger ignorieren sie.',
    all: {
      '-': 'E-Mails von allen anderen Servern bestehen SPF nicht.',
      '~': 'E-Mails von allen anderen Servern bekommen einen Softfail. Empfänger nehmen sie meist an, behandeln sie aber mit mehr Misstrauen.',
      '?': 'Sagt nichts über andere Server. Ihre E-Mails bekommen ein neutrales Ergebnis. Das zählt genauso wie gar kein SPF-Eintrag.',
      '+': 'Jeder Server im Internet besteht SPF. Das hebt den Rest des Eintrags auf.',
    },
    server: (address) => `Der Server mit der Adresse ${address}`,
    ip4Range: (address, cidr, count) => `Server im Bereich ${address}/${cidr} (${count.toLocaleString('de-DE')} Adressen)`,
    ip6Range: (address, cidr) => `Server im IPv6-Bereich ${address}/${cidr}`,
    a: (domain, cidr) => `Die Server mit den IP-Adressen von ${domain}${cidr ? ` (erweitert auf ${cidr})` : ''}`,
    mx: (domain) => `Die Mailserver aus den MX-Einträgen von ${domain}`,
    include: (domain, service) => `Die Server aus dem SPF-Eintrag von ${domain}${service ? ` (${service})` : ''}`,
    ptr: (domain) => `Server mit einem Reverse-DNS-Namen unter ${domain}`,
    existsMacro:
      'Greift, wenn eine DNS-Abfrage eine Adresse findet. Die Abfrage wird aus Angaben zum sendenden Server gebildet. Große Absender nutzen das für lange Serverlisten.',
    exists: (domain) => `Greift, wenn ${domain} eine IP-Adresse hat.`,
    sentence: (subject, q, single) => {
      const verb = {
        '+': single ? 'darf senden' : 'dürfen senden',
        '-': single ? 'besteht SPF nicht' : 'bestehen SPF nicht',
        '~': single ? 'bekommt einen Softfail' : 'bekommen einen Softfail',
        '?': single ? 'bekommt ein neutrales Ergebnis' : 'bekommen ein neutrales Ergebnis',
      }[q]
      return `${subject} ${verb}.`
    },
  },
  nearMissTitle: 'Wir haben einen TXT-Eintrag gefunden, der wie ein fehlerhafter SPF-Eintrag aussieht:',
  nearMissSpf2:
    'Ein Eintrag, der mit v=spf2.0 beginnt, gehört zu Sender ID. Das ist ein altes System, das Empfänger nicht mehr prüfen. Ein SPF-Eintrag muss genau mit v=spf1 beginnen.',
  nearMissOther: 'Empfänger ignorieren ihn, denn ein SPF-Eintrag muss genau mit v=spf1 und einem Leerzeichen beginnen.',
  noMx: '{domain} hat auch keine MX-Einträge und wird vielleicht gar nicht für E-Mails genutzt. Eine Domain, die nie E-Mails sendet, kann {record} veröffentlichen. Das sagt Empfängern, dass kein Server für sie senden darf. So ist die Domain schwerer zu fälschen.',
  createFor: (domain) => `SPF-Eintrag für ${domain} erstellen`,
  fixInCreator: 'Diesen Eintrag zum Korrigieren in den SPF-Generator laden',
  answeredBy: 'Antwort von',
  publicDns: 'öffentlichen DNS-Servern',
  ctaTitle: 'SPF verhindert keine Bounces',
  ctaText:
    'SPF zeigt, dass Ihre E-Mails von Ihren Servern kommen. E-Mails an Adressen, die es nicht gibt, kommen trotzdem als Bounce zurück. Eine hohe Bounce-Rate schadet der Zustellung.',
  ctaButton: 'E-Mail-Liste prüfen',
  ctaHref: '/de/e-mail-massenpruefung',

  domainStep: 'Ihre Domain',
  loadButton: 'Aktuellen Eintrag laden',
  loadHelp: 'Hat Ihre Domain schon einen SPF-Eintrag, laden Sie ihn und fügen Sie den neuen Absender hinzu. Sie können diesen Schritt auch überspringen.',
  load: {
    nxdomain: (domain) => `${domain} existiert im DNS nicht. Prüfen Sie die Schreibweise.`,
    none: (domain) => `${domain} hat noch keinen SPF-Eintrag. Wählen Sie unten Ihre Absender aus, um einen zu erstellen.`,
    redirect: (domain, record) =>
      `Der SPF-Eintrag von ${domain} nutzt ein redirect (${record}). Das Formular kann das nicht sicher bearbeiten. Ändern Sie den Eintrag deshalb von Hand.`,
    loaded: ({ domain, multiple, changedAll }) =>
      `Wir haben den aktuellen Eintrag von ${domain} geladen. Fügen Sie Absender hinzu oder entfernen Sie welche. Ersetzen Sie dann den alten Eintrag durch den neuen.${
        multiple ? ' Die Domain hat mehr als einen SPF-Eintrag, deshalb haben wir den ersten geladen. Löschen Sie die anderen, wenn Sie diesen veröffentlicht haben.' : ''
      }${changedAll ? ' Das Ende des Eintrags war weder ~all noch -all. Wir haben es deshalb auf ~all geändert.' : ''}`,
  },
  sendersStep: 'Welche Dienste senden E-Mails von Ihrer Domain?',
  sendersHelp:
    'Kreuzen Sie jeden Dienst an, der E-Mails mit Ihrer Domain in der Adresse sendet. Die Zahl zeigt, wie viele der 10 erlaubten DNS-Abfragen jeder Dienst braucht.',
  groupMailbox: 'E-Mail-Anbieter',
  groupService: 'Versand-, Marketing- und Support-Tools',
  unneededInline: (subdomainOnly) => `{include} ({name}) ist${subdomainOnly ? ' auf einer Hauptdomain' : ''} meist nicht nötig. {reason}`,
  unneeded: ({ include, name, subdomainOnly, reason, cost }) =>
    `include:${include} (${name}) ist${subdomainOnly ? ' auf einer Hauptdomain' : ''} meist nicht nötig. ${reason} Ohne dieses include sparen Sie ${cost} ${cost === 1 ? 'Abfrage' : 'Abfragen'}.`,
  unneededSummary: 'Sie nutzen Mailchimp, SendGrid, Brevo oder Ähnliches? Dann brauchen Sie vielleicht kein include.',
  otherLabel: 'Ein anderer Dienst, der hier fehlt',
  otherPlaceholder: 'spf.beispiel-dienst.de',
  addButton: 'Hinzufügen',
  otherHelp: 'Kopieren Sie den include-Wert aus der Einrichtungsanleitung des Dienstes.',
  ownServer: 'Senden Sie auch von einem eigenen Server?',
  ipsLabel: 'IP-Adressen der Server, die Ihre E-Mails senden',
  ipsPlaceholder: '192.0.2.10\n198.51.100.0/24\n2001:db8::/32',
  ipsHelp: 'Eine pro Zeile. IPv4 und IPv6 funktionieren beide, ebenso Bereiche wie /24.',
  aLabel: 'Der Server, auf den meine Domain zeigt, sendet E-Mails',
  aHelp: 'Fügt die IP-Adresse Ihrer Domain selbst hinzu. Kostet 1 Abfrage.',
  mxLabel: 'Meine eingehenden Mailserver senden auch E-Mails',
  mxHelp:
    'Fügt die Server aus Ihren MX-Einträgen hinzu. Kostet 1 Abfrage. Bei Google Workspace und Microsoft 365 nicht nötig, denn deren includes decken den Versand schon ab.',
  keptTitle: 'Aus Ihrem aktuellen Eintrag übernommen',
  remove: (term) => `${term} entfernen`,
  allStep: 'Was soll mit E-Mails von Servern passieren, die Sie nicht aufgeführt haben?',
  softFail: {
    title: 'Softfail',
    text: 'Empfänger nehmen die E-Mails an, behandeln sie aber mit mehr Misstrauen. Google und M3AAWG empfehlen dieses Ende.',
  },
  fail: {
    title: 'Fail',
    text: 'Sagt Empfängern, dass die E-Mails nicht autorisiert sind. Microsoft empfiehlt das, sobald DKIM und DMARC eingerichtet sind. Manche Empfänger lehnen E-Mails dann ab, bevor DMARC geprüft wird. Diese E-Mails erscheinen nie in DMARC-Berichten.',
  },
  recordTitle: 'Ihr SPF-Eintrag',
  recordHelp: 'Legen Sie ihn im DNS Ihrer Domain als TXT-Eintrag an.',
  typeLabel: 'Typ',
  nameLabel: 'Name / Host',
  nameHelp: 'Manche DNS-Anbieter wollen statt @ die Domain selbst oder ein leeres Namensfeld.',
  valueLabel: 'Wert',
  draftLookups: (n, limit) => `${n} von ${limit} DNS-Abfragen`,
  counting: 'Wird mit echten DNS-Abfragen gezählt',
  noSenders:
    'Noch keine Absender ausgewählt. Ein Eintrag ohne Absender sagt, dass kein Server für die Domain senden darf. Das ist nur für eine Domain richtig, die nie E-Mails sendet. Dann sollte er auf {ending} enden.',
  neverSends: 'Diese Domain sendet nie E-Mails',
  draftError: 'Wir konnten die DNS-Dienste nicht erreichen, um die Abfragen zu zählen. Prüfen Sie Ihre Verbindung.',
  howTitle: 'So fügen Sie ihn hinzu',
  howSteps: [
    'Melden Sie sich dort an, wo Sie das DNS Ihrer Domain verwalten. Das ist meist die Firma, bei der Sie die Domain gekauft haben.',
    'Suchen Sie einen TXT-Eintrag, der mit v=spf1 beginnt. Gibt es einen, ersetzen Sie seinen Wert durch den Eintrag oben. Legen Sie keinen zweiten SPF-Eintrag an. Zwei Einträge machen SPF für alle Ihre E-Mails ungültig.',
    'Gibt es keinen, legen Sie einen neuen TXT-Eintrag mit dem Namen und dem Wert oben an und speichern Sie ihn.',
  ],
  howLast: 'Warten Sie ein paar Minuten und {check}. Richten Sie mit dem {dkim} und dem {dmarc} auch DKIM und DMARC ein.',
  checkPublished: 'prüfen Sie dann den veröffentlichten Eintrag',
  dkimLabel: 'DKIM-Generator',
  dkimHref: '/dkim-generator',
  dmarcLabel: 'DMARC-Generator',
  dmarcHref: '/dmarc-generator',

  issues: {
    'bad-syntax': (p) => `"${p.raw}" ist falsch geschrieben. Empfänger werten den Eintrag deshalb als fehlerhaft (permerror).`,
    'bad-syntax-percent': (p) =>
      `"${p.raw}" enthält ein %-Zeichen, das kein gültiges SPF-Makro ist. Empfänger werten den Eintrag deshalb als fehlerhaft (permerror).`,
    'duplicate-modifier': (p) =>
      `Der Eintrag enthält mehr als ein ${p.name}=. Erlaubt ist nur eines. Empfänger werten den Eintrag deshalb als fehlerhaft (permerror).`,
    'empty-modifier': (p) => `Bei "${p.raw}" fehlt nach dem Gleichheitszeichen die Domain.`,
    'equals-not-colon': (p) =>
      `"${p.raw}" nutzt ein =, wo SPF einen Doppelpunkt erwartet. Empfänger lesen das als unbekannte Einstellung und überspringen es. Schreiben Sie stattdessen ${p.name}:${p.value}.`,
    'unknown-term': (p) => `"${p.raw}" ist kein gültiger SPF-Mechanismus. Empfänger werten den ganzen Eintrag als fehlerhaft (permerror).`,
    'bad-ip': (p) => `"${p.raw}" enthält keine gültige ${p.family}-Adresse.`,
    'bad-cidr': (p) => `"${p.raw}" hat eine Präfixlänge über /${p.max}.`,
    'after-all': () => 'Nach "all" stehen noch Mechanismen. Empfänger hören bei "all" auf. Alles danach wird also nie genutzt.',
    'include-plus-all': () => 'Dieser eingebundene Eintrag endet auf "+all". Damit trifft das include auf jeden Server im Internet zu.',
    'long-record': (p) =>
      `Der Eintrag ist ${p.length} Zeichen lang. Laut RFC 7208 soll die DNS-Antwort klein bleiben (unter etwa 450 Byte), damit sie in ein UDP-Paket passt. Manche Empfänger können eine größere Antwort vielleicht nicht lesen.`,
    macro: (p) => `"${p.target}" nutzt SPF-Makros, die vom sendenden Server abhängen. Das Tool kann diesem Teil nicht folgen.`,
    'macro-exists': (p) =>
      `"${p.raw}" nutzt SPF-Makros, die für jeden sendenden Server ausgefüllt werden. Es zählt als 1 Abfrage, aber ein Prüftool kann die erlaubten Server nicht auflisten.`,
    loop: (p) => `${p.target} bindet sich über ${p.chain.join(' > ')} selbst ein. Empfänger werten das als fehlerhaft.`,
    'too-deep': (p) => `Die Kette der includes ist tiefer als ${p.limit} Ebenen. Das Tool hat deshalb abgebrochen.`,
    temperror: (p) =>
      `Die DNS-Server von ${p.target} haben nicht geantwortet. Empfänger bekommen dann einen vorübergehenden Fehler (temperror) und versuchen es eventuell später erneut. Prüfen Sie in ein paar Minuten noch einmal.`,
    'temperror-term': (p) =>
      `Die DNS-Server von ${p.target} haben nicht geantwortet. "${p.raw}" konnte deshalb nicht geprüft werden. Empfänger bekommen dann einen vorübergehenden Fehler (temperror).`,
    'include-no-spf': (p) =>
      `include:${p.target} zeigt auf ${p.missing ? 'eine Domain, die es nicht gibt' : 'eine Domain ohne SPF-Eintrag'}. Empfänger werten den ganzen Eintrag als fehlerhaft (permerror).`,
    'redirect-no-spf': (p) =>
      `redirect=${p.target} zeigt auf ${p.missing ? 'eine Domain, die es nicht gibt' : 'eine Domain ohne SPF-Eintrag'}. Empfänger werten den ganzen Eintrag als fehlerhaft (permerror).`,
    multiple: (p) =>
      `${p.target} veröffentlicht ${p.count} SPF-Einträge. RFC 7208 erlaubt genau einen. Empfänger werten SPF deshalb als fehlerhaft (permerror). Fassen Sie die Einträge zu einem zusammen.`,
    'multiple-included': (p) => `${p.target} veröffentlicht ${p.count} SPF-Einträge. Es darf nur genau einer sein.`,
    'void-a': (p) => `"${p.raw}" findet keine IP-Adresse für ${p.target}. Es trifft also nie zu und zählt als leere Abfrage (Void Lookup).`,
    'void-mx': (p) => `"${p.raw}" findet keine Mailserver für ${p.target}. Es trifft also nie zu und zählt als leere Abfrage (Void Lookup).`,
    'mx-over-10': (p) => `${p.target} hat ${p.count} MX-Einträge. RFC 7208 erlaubt für den Mechanismus mx höchstens 10.`,
    ptr: (p) =>
      `"${p.raw}" nutzt ptr. Laut RFC 7208 soll ptr nicht genutzt werden. Es ist langsam, kostet eine Abfrage und ist weniger zuverlässig als ip4 oder ip6.`,
    exists: (p) => `"${p.raw}" prüft, ob ${p.target} existiert. Normalerweise wird exists mit Makros genutzt.`,
    'redirect-ignored': () => 'Der Eintrag hat sowohl "all" als auch ein redirect. Empfänger ignorieren redirect, wenn "all" vorhanden ist.',
    'plus-all': () => '"+all" lässt jeden Server im Internet als Ihre Domain senden. Ändern Sie es in "~all" oder "-all".',
    'neutral-all': () =>
      '"?all" ist neutral. Es sagt Empfängern nichts über Server, die Sie nicht aufgeführt haben, und bietet deshalb keinen Schutz.',
    'no-all': () =>
      'Der Eintrag endet nicht mit "all". Empfänger behandeln nicht aufgeführte Server deshalb als neutral. Fügen Sie "~all" oder "-all" am Ende hinzu.',
    'too-many-lookups': (p) =>
      `Der Eintrag braucht ${p.lookups} DNS-Abfragen. Das Limit ist ${p.limit}. Empfänger brechen deshalb ab und werten SPF als fehlerhaft (permerror).`,
    'near-limit': (p) =>
      `Der Eintrag nutzt alle ${p.limit} erlaubten DNS-Abfragen. Schon ein weiteres include würde SPF für alle Ihre E-Mails ungültig machen.`,
    'near-limit-one-left': (p) =>
      `Der Eintrag nutzt ${p.lookups} der ${p.limit} erlaubten DNS-Abfragen. Es ist noch Platz für eine Abfrage, und die meisten includes kosten mehr als eine.`,
    'too-many-voids': (p) =>
      `${p.voids} Abfragen haben nichts gefunden. Laut RFC 7208 dürfen Empfänger SPF nach ${p.limit} solchen leeren Abfragen (Void Lookups) als fehlgeschlagen werten.`,
  },
  failures: {
    'no-answer': 'DNS hat nicht geantwortet',
    nxdomain: 'Domain existiert nicht',
    'no-spf': 'kein SPF-Eintrag',
    multiple: 'mehr als ein SPF-Eintrag',
  },
  // Only the names in OTHER_NAMES that carry words; the rest are product names.
  senderNames: {
    'zoho.com': 'Zoho Mail (älteres include)',
    'zoho.eu': 'Zoho Mail (EU, älteres include)',
  },
  senderNotes: {
    'Zoho Mail': 'Konten in anderen Regionen nutzen eine eigene Endung, zum Beispiel zohomail.eu.',
    Mailgun: 'Senden Sie von einer Subdomain wie mg.ihredomain.de, setzen Sie das include stattdessen in den Eintrag dieser Subdomain.',
  },
  notNeededReasons: {
    Mailchimp: 'Die Domain-Einrichtung von Mailchimp verlangt heute nur noch DKIM- und DMARC-Einträge, kein SPF.',
    Postmark:
      'Laut Postmark ist SPF nicht mehr nötig. Postmark sendet mit einer eigenen Bounce-Adresse oder mit einem Return-Path-Eintrag, den Sie auf Postmark zeigen lassen.',
    Brevo: 'Laut Brevo ist SPF nicht nötig, außer Sie senden von einer eigenen (dedizierten) IP-Adresse.',
    Klaviyo: 'Laut Klaviyo müssen Sie meist keinen SPF-Eintrag hinzufügen.',
    SendGrid: 'Die Domain-Authentifizierung von SendGrid legt SPF auf eine Subdomain, die SendGrid für Sie anlegt, zum Beispiel em1234.ihredomain.de.',
    'Amazon SES':
      'SES braucht das include nur auf einer eigenen MAIL-FROM-Subdomain, zum Beispiel bounce.ihredomain.de. Standardmäßig nutzt SES eine eigene Bounce-Adresse.',
  },
}

const itTool: SpfToolStrings = {
  wideCostColumn: true,
  tabsLabel: 'Modalità dello strumento SPF',
  tabCheck: 'Verifica',
  tabCheckMore: ' record SPF',
  tabCreate: 'Genera',
  tabCreateMore: ' record SPF',

  label: 'Dominio o indirizzo email',
  placeholder: 'esempio.it',
  button: 'Verifica il record SPF',
  tryLabel: 'Prova:',
  inputEmpty: 'Inserisci un dominio, come esempio.it.',
  inputInvalid: 'Questo non sembra un dominio. Inserisci qualcosa come esempio.it.',
  lookupError: 'Non siamo riusciti a raggiungere i servizi DNS. Controlla la connessione e riprova.',
  noAnswer: ({ domain }) =>
    `${domain ? `I server DNS di ${domain} non hanno risposto.` : 'I server DNS non hanno risposto.'} In questo momento anche i server di destinazione ricevono lo stesso errore temporaneo (temperror). Riprova tra qualche minuto.`,

  summary: {
    valid: (p) => {
      const used = p.lookups === 0 ? `Non usa nessuna delle ${p.limit} ricerche DNS consentite.` : `Usa ${p.lookups} delle ${p.limit} ricerche DNS consentite.`
      const all =
        p.allQualifier === '-'
          ? 'Le email dai server non elencati non superano SPF.'
          : p.allQualifier === '~'
            ? 'Le email dai server non elencati ricevono un softfail.'
            : ''
      return { title: `${p.domain} ha un record SPF valido`, text: `${used} ${all}`.trim() }
    },
    warnings: (p) => ({
      title: `${p.domain} ha un record SPF funzionante, ma con avvisi`,
      text: `I server di destinazione possono usarlo, ma gli avvisi qui sotto lo indeboliscono o potrebbero renderlo non valido in futuro. ${
        p.lookups === 0 ? `Non usa nessuna delle ${p.limit} ricerche DNS consentite.` : `Usa ${p.lookups} delle ${p.limit} ricerche DNS consentite.`
      }`,
    }),
    broken: (p) => ({
      title: `Il record SPF di ${p.domain} non funziona`,
      text: 'I server di destinazione trattano un record così come un errore (permerror), quindi SPF fallisce per tutte le email di questo dominio. Le correzioni sono elencate qui sotto.',
    }),
    unprotected: (p) => ({
      title: `Il record SPF di ${p.domain} non protegge il dominio`,
      text: `Permette a qualsiasi server su internet di superare SPF. Così chiunque può inviare email a nome di ${p.domain} e superare il controllo.`,
    }),
    none: (p) => ({
      title: `${p.domain} non ha un record SPF`,
      text: 'I server di destinazione non possono sapere quali server sono autorizzati a inviare email per questo dominio. Da febbraio 2024 Gmail richiede SPF o DKIM a ogni mittente.',
    }),
    nxdomain: (p) => ({ title: `${p.domain} non esiste`, text: 'Il DNS non ha nessun record di questo dominio. Controlla che sia scritto bene.' }),
  },
  recordFor: (domain) => `Record SPF di ${domain}`,
  copy: 'Copia',
  copied: 'Copiato',
  lookupsMeter: 'Ricerche DNS',
  lookupsMeterNote: 'Ogni include, a, mx, ptr, exists e redirect ne costa una, anche dentro gli include.',
  voidMeter: 'Ricerche vuote',
  voidMeterNote: 'Ricerche che non hanno trovato nulla. Più di 2 possono far fallire SPF.',
  meterOf: (limit) => `su ${limit}`,
  unlisted: 'Server non elencati',
  allLabel: { '-': 'Fail', '~': 'Softfail', '?': 'Neutro', '+': 'Pass (non sicuro)' },
  allNotSet: 'Non impostato',
  allSetBy: (q) => `Impostato da ${q}all alla fine del record.`,
  allMissing: 'Il record non ha all alla fine, quindi gli altri server ricevono un risultato neutro.',
  fixTitle: 'Cosa correggere',
  notesTitle: 'Note',
  inDomain: (domain) => `in ${domain}`,
  thPart: 'Parte',
  thMeaning: 'Cosa significa',
  thCost: 'Costo',
  partsTitle: 'Cosa significa ogni parte',
  lookups: (n) => `${n} ${n === 1 ? 'ricerca' : 'ricerche'}`,
  vSpf1: 'Indica che questo record TXT è un record SPF. Ogni record SPF inizia così.',
  showContents: (domain) => `Mostra cosa contiene ${domain}`,
  hideContents: (domain) => `Nascondi cosa contiene ${domain}`,
  describe: {
    redirect: (domain) => `Se nessuna parte precedente corrisponde, usa invece il record SPF di ${domain}.`,
    exp: 'Indica un record TXT con un messaggio che i server di destinazione possono mostrare quando SPF fallisce.',
    unknownModifier: "Un'impostazione che SPF non definisce. I server di destinazione la ignorano.",
    all: {
      '-': 'Le email da tutti gli altri server non superano SPF.',
      '~': 'Le email da tutti gli altri server ricevono un softfail. Di solito vengono accettate, ma con più sospetto.',
      '?': 'Non dice nulla sugli altri server. Le loro email ricevono un risultato neutro, che vale come non avere un record SPF.',
      '+': 'Ogni server su internet supera SPF. Questo annulla il resto del record.',
    },
    server: (address) => `Il server con indirizzo ${address}`,
    ip4Range: (address, cidr, count) =>
      `I server nell'intervallo ${address}/${cidr} (${count.toLocaleString('it-IT')} ${count === 1 ? 'indirizzo' : 'indirizzi'})`,
    ip6Range: (address, cidr) => `I server nell'intervallo IPv6 ${address}/${cidr}`,
    a: (domain, cidr) => `I server con gli indirizzi IP di ${domain}${cidr ? ` (con prefisso ${cidr})` : ''}`,
    mx: (domain) => `I server di posta che ricevono le email di ${domain}`,
    include: (domain, service) => `I server autorizzati dal record SPF di ${domain}${service ? ` (${service})` : ''}`,
    ptr: (domain) => `I server il cui indirizzo IP rimanda a un nome sotto ${domain}`,
    existsMacro:
      'Corrisponde quando una ricerca DNS costruita con i dati del server di invio trova un indirizzo. I grandi mittenti lo usano per elenchi di server lunghi.',
    exists: (domain) => `Corrisponde quando ${domain} ha un indirizzo IP.`,
    sentence: (subject, q, single) => {
      const verb = {
        '+': single ? 'può inviare' : 'possono inviare',
        '-': single ? 'non supera SPF' : 'non superano SPF',
        '~': single ? 'riceve un softfail' : 'ricevono un softfail',
        '?': single ? 'riceve un risultato neutro' : 'ricevono un risultato neutro',
      }[q]
      return `${subject} ${verb}.`
    },
  },
  nearMissTitle: 'Abbiamo trovato un record TXT che sembra un record SPF scritto male:',
  nearMissSpf2:
    'Un record che inizia con v=spf2.0 appartiene a Sender ID, un vecchio sistema che i server non controllano più. Un record SPF deve iniziare esattamente con v=spf1.',
  nearMissOther: 'I server di destinazione lo ignorano, perché un record SPF deve iniziare esattamente con v=spf1 seguito da uno spazio.',
  noMx: '{domain} non ha nemmeno record MX, quindi forse non viene usato per le email. Un dominio che non invia mai email può pubblicare {record}. Così dici ai server di destinazione che nessun server può inviare a suo nome, e falsificarlo diventa più difficile.',
  createFor: (domain) => `Genera un record SPF per ${domain}`,
  fixInCreator: 'Carica questo record nel generatore SPF per correggerlo',
  answeredBy: 'Risposta fornita da',
  publicDns: 'DNS pubblico',
  ctaTitle: 'SPF non evita i rimbalzi',
  ctaText:
    'SPF dimostra che le tue email arrivano dai tuoi server. Le email verso indirizzi inesistenti rimbalzano comunque, e un alto tasso di rimbalzo danneggia la consegna.',
  ctaButton: 'Verifica una lista di email',
  ctaHref: '/it/verifica-email-in-blocco',

  domainStep: 'Il tuo dominio',
  loadButton: 'Carica il record attuale',
  loadHelp: 'Se il tuo dominio ha già un record SPF, caricalo e aggiungi il nuovo mittente. Puoi anche saltare questo passaggio.',
  load: {
    nxdomain: (domain) => `${domain} non esiste nel DNS. Controlla che sia scritto bene.`,
    none: (domain) => `${domain} non ha ancora un record SPF. Scegli qui sotto i tuoi mittenti per crearne uno.`,
    redirect: (domain, record) =>
      `${domain} usa un redirect nel suo record SPF (${record}). Il modulo non può modificarlo in modo sicuro, quindi cambialo a mano.`,
    loaded: ({ domain, multiple, changedAll }) =>
      `Abbiamo caricato il record attuale di ${domain}. Aggiungi o togli i mittenti, poi sostituisci il vecchio record con quello nuovo.${
        multiple ? ' Il dominio ha più di un record SPF, quindi abbiamo caricato il primo. Elimina gli altri dopo aver pubblicato questo.' : ''
      }${changedAll ? " La chiusura non era ~all o -all, quindi l'abbiamo cambiata in ~all." : ''}`,
  },
  sendersStep: 'Quali servizi inviano email dal tuo dominio?',
  sendersHelp: "Spunta ogni servizio che invia email con il tuo dominio nell'indirizzo. Il numero indica quante delle 10 ricerche DNS consentite usa ciascuno.",
  groupMailbox: 'Provider di posta',
  groupService: 'Strumenti di invio, marketing e assistenza',
  unneededInline: (subdomainOnly) => `Di solito {include} ({name}) non serve${subdomainOnly ? ' sul dominio principale' : ''}. {reason}`,
  unneeded: ({ include, name, subdomainOnly, reason, cost }) =>
    `Di solito include:${include} (${name}) non serve${subdomainOnly ? ' sul dominio principale' : ''}. ${reason} Se lo togli, liberi ${cost} ${cost === 1 ? 'ricerca' : 'ricerche'}.`,
  unneededSummary: 'Usi Mailchimp, SendGrid, Brevo o simili? Potrebbero non aver bisogno di un include.',
  otherLabel: 'Un altro servizio non elencato qui',
  otherPlaceholder: 'spf.example-service.com',
  addButton: 'Aggiungi',
  otherHelp: "Copia il valore dell'include dalla guida di configurazione del servizio.",
  ownServer: 'Invii email anche da un tuo server?',
  ipsLabel: 'Indirizzi IP dei server che inviano le tue email',
  ipsPlaceholder: '192.0.2.10\n198.51.100.0/24\n2001:db8::/32',
  ipsHelp: 'Uno per riga. Vanno bene IPv4 e IPv6, e anche intervalli come /24.',
  aLabel: 'Il server a cui punta il mio dominio invia email',
  aHelp: "Aggiunge l'indirizzo IP del tuo dominio. Usa 1 ricerca DNS.",
  mxLabel: 'Anche i miei server di posta in arrivo inviano email',
  mxHelp: "Aggiunge i server dei tuoi record MX. Usa 1 ricerca DNS. Non serve per Google Workspace o Microsoft 365, i cui include coprono già l'invio.",
  keptTitle: 'Termini mantenuti dal tuo record attuale',
  remove: (term) => `Rimuovi ${term}`,
  allStep: 'Cosa deve succedere alle email dai server che non hai elencato?',
  softFail: {
    title: 'Softfail',
    text: 'I server di destinazione accettano le email, ma con più sospetto. Google e M3AAWG consigliano questa chiusura.',
  },
  fail: {
    title: 'Fail',
    text: 'Dice ai server di destinazione che le email non sono autorizzate. Microsoft la consiglia quando DKIM e DMARC sono configurati. Alcuni server le rifiutano già prima del controllo DMARC, quindi non compaiono mai nei report DMARC.',
  },
  recordTitle: 'Il tuo record SPF',
  recordHelp: 'Aggiungilo al DNS del tuo dominio come record TXT.',
  typeLabel: 'Tipo',
  nameLabel: 'Nome / Host',
  nameHelp: 'Alcuni gestori DNS vogliono il dominio stesso al posto di @, o il campo nome vuoto.',
  valueLabel: 'Valore',
  draftLookups: (n, limit) => `${n} ${n === 1 ? 'ricerca' : 'ricerche'} DNS su ${limit}`,
  counting: 'Conteggio sul DNS pubblico in corso',
  noSenders:
    'Nessun mittente scelto finora. Un record senza mittenti dice che nessun server può inviare per il dominio. È giusto solo per un dominio che non invia mai email, e in quel caso deve finire con {ending}.',
  neverSends: 'Questo dominio non invia mai email',
  draftError: 'Non siamo riusciti a raggiungere i servizi DNS per contare le ricerche. Controlla la connessione.',
  howTitle: 'Come aggiungerlo',
  howSteps: [
    "Accedi al servizio dove gestisci il DNS del tuo dominio. Di solito è l'azienda da cui hai comprato il dominio.",
    "Cerca un record TXT che inizia con v=spf1. Se c'è, sostituisci il suo valore con il record qui sopra. Non aggiungere un secondo record SPF, perché due record bloccano SPF per tutte le tue email.",
    "Se non c'è, aggiungi un nuovo record TXT con il nome e il valore qui sopra, poi salva.",
  ],
  howLast: 'Aspetta qualche minuto, poi {check}. Configura anche DKIM e DMARC con il {dkim} e il {dmarc}.',
  checkPublished: 'verifica il record pubblicato',
  dkimLabel: 'generatore DKIM',
  dkimHref: '/dkim-generator',
  dmarcLabel: 'generatore DMARC',
  dmarcHref: '/dmarc-generator',

  issues: {
    'bad-syntax': (p) => `"${p.raw}" è scritto in modo errato, quindi i server di destinazione considerano il record non valido (permerror).`,
    'bad-syntax-percent': (p) =>
      `"${p.raw}" contiene un segno % che non è una macro SPF valida, quindi i server di destinazione considerano il record non valido (permerror).`,
    'duplicate-modifier': (p) =>
      `Il record contiene più di un ${p.name}=. Ne è consentito uno solo, quindi i server di destinazione considerano il record non valido (permerror).`,
    'empty-modifier': (p) => `"${p.raw}" non ha un dominio dopo il segno =.`,
    'equals-not-colon': (p) =>
      `"${p.raw}" usa = dove SPF si aspetta i due punti. I server di destinazione lo leggono come un'impostazione sconosciuta e lo saltano. Scrivi invece ${p.name}:${p.value}.`,
    'unknown-term': (p) => `"${p.raw}" non è un meccanismo SPF valido. I server di destinazione considerano l'intero record non valido (permerror).`,
    'bad-ip': (p) => `"${p.raw}" non contiene un indirizzo ${p.family} valido.`,
    'bad-cidr': (p) => `"${p.raw}" ha una lunghezza del prefisso superiore a /${p.max}.`,
    'after-all': () => 'Ci sono meccanismi dopo "all". I server di destinazione si fermano ad "all", quindi tutto quello che viene dopo non viene mai usato.',
    'include-plus-all': () => `Questo record incluso finisce con "+all", quindi l'include corrisponde a ogni server su internet.`,
    'long-record': (p) =>
      `Il record è lungo ${p.length} caratteri. La RFC 7208 dice che la risposta DNS dovrebbe restare piccola (sotto i 450 byte circa), così entra in un solo pacchetto UDP. Alcuni server di destinazione potrebbero non riuscire a leggere una risposta più grande.`,
    macro: (p) => `"${p.target}" usa macro SPF, che dipendono dal server di invio. Lo strumento non può seguirlo.`,
    'macro-exists': (p) =>
      `"${p.raw}" usa macro SPF, che vengono compilate con i dati di ogni server di invio. Conta come 1 ricerca DNS, ma nessuno strumento di verifica può elencare i server che autorizza.`,
    loop: (p) => `${p.target} include sé stesso attraverso ${p.chain.join(' > ')}. I server di destinazione lo considerano un errore.`,
    'too-deep': (p) => `La catena di include supera i ${p.limit} livelli, quindi lo strumento si è fermato.`,
    temperror: (p) =>
      `I server DNS di ${p.target} non hanno risposto. I server di destinazione riceverebbero un errore temporaneo (temperror) e potrebbero riprovare più tardi. Verifica di nuovo tra qualche minuto.`,
    'temperror-term': (p) =>
      `I server DNS di ${p.target} non hanno risposto, quindi non è stato possibile verificare "${p.raw}". I server di destinazione riceverebbero un errore temporaneo (temperror).`,
    'include-no-spf': (p) =>
      `include:${p.target} punta a ${p.missing ? 'un dominio che non esiste' : 'un dominio senza record SPF'}. I server di destinazione considerano l'intero record non valido (permerror).`,
    'redirect-no-spf': (p) =>
      `redirect=${p.target} punta a ${p.missing ? 'un dominio che non esiste' : 'un dominio senza record SPF'}. I server di destinazione considerano l'intero record non valido (permerror).`,
    multiple: (p) =>
      `${p.target} pubblica ${p.count} record SPF. La RFC 7208 ne consente esattamente uno, quindi i server di destinazione considerano SPF non valido (permerror). Uniscili in un solo record.`,
    'multiple-included': (p) => `${p.target} pubblica ${p.count} record SPF. Deve essercene esattamente uno.`,
    'void-a': (p) => `"${p.raw}" non trova nessun indirizzo IP per ${p.target}, quindi non corrisponde a niente e conta come ricerca vuota.`,
    'void-mx': (p) => `"${p.raw}" non trova nessun server di posta per ${p.target}, quindi non corrisponde a niente e conta come ricerca vuota.`,
    'mx-over-10': (p) => `${p.target} ha ${p.count} record MX. La RFC 7208 ne consente al massimo 10 per il meccanismo mx.`,
    ptr: (p) => `"${p.raw}" usa ptr, che secondo la RFC 7208 non andrebbe usato. È lento, costa una ricerca DNS ed è meno affidabile di ip4 o ip6.`,
    exists: (p) => `"${p.raw}" controlla se ${p.target} esiste. Di solito si usa con le macro.`,
    'redirect-ignored': () => `Il record contiene sia "all" sia un redirect. I server di destinazione ignorano il redirect quando c'è "all".`,
    'plus-all': () => '"+all" permette a ogni server su internet di inviare a nome del tuo dominio. Cambialo in "~all" o "-all".',
    'neutral-all': () => '"?all" è neutro: non dice nulla ai server di destinazione sui server che non hai elencato, quindi non dà nessuna protezione.',
    'no-all': () =>
      'Il record non finisce con "all", quindi i server di destinazione trattano come neutri i server non elencati. Aggiungi "~all" o "-all" alla fine.',
    'too-many-lookups': (p) =>
      `Il record richiede ${p.lookups} ricerche DNS. Il limite è ${p.limit}, quindi i server di destinazione si fermano e considerano SPF non valido (permerror).`,
    'near-limit': (p) => `Il record usa tutte le ${p.limit} ricerche DNS consentite. Un altro include bloccherebbe SPF per tutte le tue email.`,
    'near-limit-one-left': (p) =>
      `Il record usa ${p.lookups} delle ${p.limit} ricerche DNS consentite. C'è spazio per una sola altra ricerca, e la maggior parte degli include ne costa più di una.`,
    'too-many-voids': (p) =>
      `${p.voids} ricerche non hanno restituito nulla. La RFC 7208 permette ai server di destinazione di far fallire SPF dopo ${p.limit} ricerche vuote di questo tipo.`,
  },
  failures: {
    'no-answer': 'il DNS non ha risposto',
    nxdomain: 'il dominio non esiste',
    'no-spf': 'nessun record SPF',
    multiple: 'più di un record SPF',
  },
  senderNames: {
    'zoho.com': 'Zoho Mail (vecchio include)',
    'zohomail.eu': 'Zoho Mail (UE)',
    'zoho.eu': 'Zoho Mail (UE, vecchio include)',
    'eu.mailgun.org': 'Mailgun (UE)',
  },
  senderNotes: {
    'Zoho Mail': 'Gli account di altre regioni usano una parte finale diversa, come zohomail.eu.',
    Mailgun: 'Se invii da un sottodominio come mg.tuodominio.it, aggiungilo invece al record di quel sottodominio.',
  },
  notNeededReasons: {
    Mailchimp: 'La configurazione del dominio di Mailchimp ora chiede solo i record DKIM e DMARC, non SPF.',
    Postmark: 'Postmark dice che SPF non è più necessario. Invia con un proprio indirizzo di rimbalzo, o con un record Return-Path che punti a Postmark.',
    Brevo: 'Brevo dice che SPF non è necessario, a meno che tu non invii da un indirizzo IP dedicato.',
    Klaviyo: 'Klaviyo dice che di solito non serve aggiungere un record SPF.',
    SendGrid: "L'autenticazione del dominio di SendGrid mette SPF su un sottodominio che crea per te, come em1234.tuodominio.it.",
    'Amazon SES':
      'SES ne ha bisogno solo su un sottodominio MAIL FROM personalizzato, come bounce.tuodominio.it. Per impostazione predefinita usa un proprio indirizzo di rimbalzo.',
  },
}

const ptBrTool: SpfToolStrings = {
  wideCostColumn: true,
  tabsLabel: 'Modo da ferramenta de SPF',
  tabCheck: 'Verificar',
  tabCheckMore: ' registro SPF',
  tabCreate: 'Criar',
  tabCreateMore: ' registro SPF',

  label: 'Domínio ou endereço de e-mail',
  placeholder: 'exemplo.com.br',
  button: 'Verificar registro SPF',
  tryLabel: 'Experimente:',
  inputEmpty: 'Digite um domínio, como exemplo.com.br.',
  inputInvalid: 'Isso não parece um domínio. Digite algo como exemplo.com.br.',
  lookupError: 'Não conseguimos acessar os serviços de DNS. Verifique sua conexão e tente de novo.',
  // `message` is the core's English sentence, so the Portuguese one is rebuilt from the domain.
  noAnswer: ({ domain }) =>
    `${domain ? `Os servidores DNS de ${domain} não responderam.` : 'Os servidores DNS do domínio não responderam.'} Neste momento, os servidores de destino recebem o mesmo erro temporário (temperror). Tente de novo em alguns minutos.`,

  summary: {
    valid: (p) => {
      const all =
        p.allQualifier === '-'
          ? ' O e-mail de servidores que ele não lista falha no SPF.'
          : p.allQualifier === '~'
            ? ' O e-mail de servidores que ele não lista recebe uma falha leve (softfail).'
            : ''
      return {
        title: `${p.domain} tem um registro SPF válido`,
        text: `Ele usa ${p.lookups} das ${p.limit} consultas DNS permitidas.${all}`,
      }
    },
    warnings: (p) => ({
      title: `${p.domain} tem um registro SPF que funciona, mas com avisos`,
      text: `Os servidores de destino conseguem usá-lo, mas os avisos abaixo o enfraquecem ou podem quebrá-lo no futuro. Ele usa ${p.lookups} das ${p.limit} consultas DNS permitidas.`,
    }),
    broken: (p) => ({
      title: `O registro SPF de ${p.domain} está quebrado`,
      text: 'Os servidores de destino tratam um registro assim como erro (permerror), então o SPF falha para todo e-mail deste domínio. As correções estão listadas abaixo.',
    }),
    unprotected: (p) => ({
      title: `O registro SPF de ${p.domain} não protege o domínio`,
      text: `Ele deixa qualquer servidor da internet passar no SPF, então qualquer pessoa pode enviar e-mails que se passam por ${p.domain}.`,
    }),
    none: (p) => ({
      title: `${p.domain} não tem registro SPF`,
      text: 'Os servidores de destino não conseguem saber quais servidores podem enviar e-mail em nome dele. O Gmail exige SPF ou DKIM de todo remetente desde fevereiro de 2024.',
    }),
    nxdomain: (p) => ({ title: `${p.domain} não existe`, text: 'O DNS não tem nenhum registro deste domínio. Confira a grafia.' }),
  },
  recordFor: (domain) => `Registro SPF de ${domain}`,
  copy: 'Copiar',
  copied: 'Copiado',
  lookupsMeter: 'Consultas DNS',
  lookupsMeterNote: 'include, a, mx, ptr, exists e redirect custam uma cada, inclusive dentro de includes.',
  voidMeter: 'Consultas vazias',
  voidMeterNote: 'Consultas que não encontraram nada. Mais de 2 podem fazer o SPF falhar.',
  meterOf: (limit) => `de ${limit}`,
  unlisted: 'Servidores não listados',
  allLabel: { '-': 'Falha', '~': 'Falha leve', '?': 'Neutro', '+': 'Aprovado (inseguro)' },
  allNotSet: 'Não definido',
  allSetBy: (q) => `Definido por ${q}all no final do registro.`,
  allMissing: 'O registro não tem all no final, então os outros servidores recebem um resultado neutro.',
  fixTitle: 'O que corrigir',
  notesTitle: 'Observações',
  inDomain: (domain) => `em ${domain}`,
  thPart: 'Parte',
  thMeaning: 'O que significa',
  thCost: 'Custo',
  partsTitle: 'O que cada parte significa',
  lookups: (n) => `${n} ${n === 1 ? 'consulta' : 'consultas'}`,
  vSpf1: 'Marca este registro TXT como registro SPF. Todo registro SPF começa com ele.',
  showContents: (domain) => `Mostrar o que ${domain} contém`,
  hideContents: (domain) => `Ocultar o que ${domain} contém`,
  describe: {
    redirect: (domain) => `Se nada acima corresponder, usa o registro SPF de ${domain} no lugar deste.`,
    exp: 'Indica um registro TXT com uma mensagem que os servidores de destino podem mostrar quando o SPF falha.',
    unknownModifier: 'Uma configuração que o SPF não define. Os servidores de destino a ignoram.',
    all: {
      '-': 'O e-mail de todos os outros servidores falha no SPF.',
      '~': 'O e-mail de todos os outros servidores recebe uma falha leve (softfail). Em geral, ele é aceito, mas com mais suspeita.',
      '?': 'Não diz nada sobre os outros servidores. O e-mail deles recebe um resultado neutro, que equivale a não ter registro SPF.',
      '+': 'Todos os servidores da internet passam no SPF. Isso anula o resto do registro.',
    },
    server: (address) => `O servidor no endereço ${address}`,
    ip4Range: (address, cidr, count) =>
      `Os servidores da faixa ${address}/${cidr} (${count.toLocaleString('pt-BR')} ${count === 1 ? 'endereço' : 'endereços'})`,
    ip6Range: (address, cidr) => `Os servidores da faixa IPv6 ${address}/${cidr}`,
    a: (domain, cidr) => `Os servidores nos endereços IP de ${domain}${cidr ? ` (faixa ampliada por ${cidr})` : ''}`,
    mx: (domain) => `Os servidores de entrada de e-mail de ${domain}`,
    include: (domain, service) => `Os servidores autorizados pelo registro SPF de ${domain}${service ? ` (${service})` : ''}`,
    ptr: (domain) => `Os servidores cujo endereço IP aponta de volta para um nome dentro de ${domain}`,
    existsMacro:
      'Corresponde quando uma consulta DNS montada com dados do servidor de envio encontra um endereço. Grandes remetentes usam isso para listas grandes de servidores.',
    exists: (domain) => `Corresponde quando ${domain} tem um endereço IP.`,
    // Every subject above starts with "O servidor" (single) or "Os servidores" (plural).
    sentence: (subject, q, single) => {
      const verb = {
        '+': single ? 'pode enviar' : 'podem enviar',
        '-': single ? 'falha no SPF' : 'falham no SPF',
        '~': single ? 'recebe uma falha leve' : 'recebem uma falha leve',
        '?': single ? 'recebe um resultado neutro' : 'recebem um resultado neutro',
      }[q]
      return `${subject} ${verb}.`
    },
  },
  nearMissTitle: 'Encontramos um registro TXT que parece um registro SPF quebrado:',
  nearMissSpf2:
    'Um registro que começa com v=spf2.0 pertence ao Sender ID, um sistema antigo que os servidores de destino não verificam mais. Um registro SPF precisa começar exatamente com v=spf1.',
  nearMissOther: 'Os servidores de destino o ignoram, porque um registro SPF precisa começar exatamente com v=spf1 seguido de um espaço.',
  noMx: '{domain} também não tem registros MX, então talvez nem seja usado para e-mail. Um domínio que nunca envia e-mail pode publicar {record}. Isso diz aos servidores de destino que nenhum servidor pode enviar em nome dele, o que dificulta a falsificação.',
  createFor: (domain) => `Criar um registro SPF para ${domain}`,
  fixInCreator: 'Carregue este registro no gerador de SPF para corrigi-lo',
  answeredBy: 'Resposta de',
  publicDns: 'DNS público',
  ctaTitle: 'O SPF não evita bounces',
  ctaText:
    'O SPF mostra que seus e-mails saem dos seus servidores. E-mails para endereços que não existem continuam voltando, e uma taxa de bounce alta prejudica a entrega.',
  ctaButton: 'Verificar uma lista de e-mails',
  ctaHref: '/pt-br/validador-de-email-em-massa',

  domainStep: 'Seu domínio',
  loadButton: 'Carregar o registro atual',
  loadHelp: 'Se o seu domínio já tem um registro SPF, carregue-o e adicione o novo remetente a ele. Você também pode pular esta etapa.',
  load: {
    nxdomain: (domain) => `${domain} não existe no DNS. Confira a grafia.`,
    none: (domain) => `${domain} ainda não tem registro SPF. Escolha seus remetentes abaixo para criar um.`,
    redirect: (domain, record) =>
      `${domain} usa um redirect no registro SPF (${record}). O formulário não consegue editar isso com segurança, então altere o registro à mão.`,
    loaded: ({ domain, multiple, changedAll }) =>
      `Carregamos o registro atual de ${domain}. Adicione ou remova remetentes e depois troque o registro antigo pelo novo.${
        multiple ? ' O domínio tem mais de um registro SPF, então carregamos o primeiro. Apague os outros depois de publicar este.' : ''
      }${changedAll ? ' O final não era ~all nem -all, então mudamos para ~all.' : ''}`,
  },
  sendersStep: 'Quais serviços enviam e-mail em nome do seu domínio?',
  sendersHelp:
    'Marque todos os serviços que enviam e-mail com o seu domínio no endereço. O número mostra quantas das 10 consultas DNS permitidas cada um usa.',
  groupMailbox: 'Provedores de e-mail',
  groupService: 'Ferramentas de envio, marketing e suporte',
  unneededInline: (subdomainOnly) => `{include} ({name}) normalmente não é necessário${subdomainOnly ? ' em um domínio principal' : ''}. {reason}`,
  unneeded: ({ include, name, subdomainOnly, reason, cost }) =>
    `include:${include} (${name}) normalmente não é necessário${subdomainOnly ? ' em um domínio principal' : ''}. ${reason} Removê-lo liberaria ${cost} ${cost === 1 ? 'consulta' : 'consultas'}.`,
  unneededSummary: 'Usa Mailchimp, SendGrid, Brevo ou similar? Talvez eles não precisem de include.',
  otherLabel: 'Outro serviço que não está nesta lista',
  otherPlaceholder: 'spf.example-service.com',
  addButton: 'Adicionar',
  otherHelp: 'Copie o valor do include do guia de configuração do serviço.',
  ownServer: 'Você também envia de um servidor próprio?',
  ipsLabel: 'Endereços IP dos servidores que enviam seus e-mails',
  ipsPlaceholder: '192.0.2.10\n198.51.100.0/24\n2001:db8::/32',
  ipsHelp: 'Um por linha. IPv4 e IPv6 funcionam, assim como faixas como /24.',
  aLabel: 'O servidor para onde meu domínio aponta envia e-mail',
  aHelp: 'Adiciona o endereço IP do próprio domínio. Usa 1 consulta.',
  mxLabel: 'Meus servidores de entrada também enviam e-mail',
  mxHelp:
    'Adiciona os servidores dos seus registros MX. Usa 1 consulta. Não é necessário para Google Workspace ou Microsoft 365, cujos includes já cobrem o envio.',
  keptTitle: 'Mantido do seu registro atual',
  remove: (term) => `Remover ${term}`,
  allStep: 'O que deve acontecer com e-mails de servidores que você não listou?',
  softFail: {
    title: 'Falha leve',
    text: 'Os servidores de destino aceitam o e-mail, mas com mais suspeita. O Google e o M3AAWG recomendam este final.',
  },
  fail: {
    title: 'Falha',
    text: 'Diz aos servidores de destino que o e-mail não está autorizado. A Microsoft recomenda este final quando DKIM e DMARC estão configurados. Alguns servidores recusam o e-mail antes de o DMARC rodar, e ele nunca aparece nos relatórios DMARC.',
  },
  recordTitle: 'Seu registro SPF',
  recordHelp: 'Adicione-o ao DNS do seu domínio como um registro TXT.',
  typeLabel: 'Tipo',
  nameLabel: 'Nome / Host',
  nameHelp: 'Alguns provedores de DNS pedem o próprio domínio em vez de @, ou o campo de nome vazio.',
  valueLabel: 'Valor',
  draftLookups: (n, limit) => `${n} de ${limit} consultas DNS`,
  counting: 'Contando no DNS em tempo real',
  noSenders:
    'Nenhum remetente escolhido ainda. Um registro sem remetentes diz que nenhum servidor pode enviar em nome do domínio. Isso só está certo para um domínio que nunca envia e-mail, e então ele deve terminar em {ending}.',
  neverSends: 'Este domínio nunca envia e-mail',
  draftError: 'Não conseguimos acessar os serviços de DNS para contar as consultas. Verifique sua conexão.',
  howTitle: 'Como adicionar',
  howSteps: [
    'Entre no painel do DNS do seu domínio. Em geral, ele fica na empresa onde você comprou o domínio.',
    'Procure um registro TXT que comece com v=spf1. Se houver um, troque o valor dele pelo registro acima. Não adicione um segundo registro SPF, porque dois registros quebram o SPF de todos os seus e-mails.',
    'Se não houver, adicione um novo registro TXT com o nome e o valor acima e salve.',
  ],
  howLast: 'Espere alguns minutos e {check}. Configure também o DKIM e o DMARC, com o {dkim} e o {dmarc}.',
  checkPublished: 'verifique o registro publicado',
  dkimLabel: 'gerador de DKIM',
  dkimHref: '/dkim-generator',
  dmarcLabel: 'gerador de DMARC',
  dmarcHref: '/dmarc-generator',

  issues: {
    'bad-syntax': (p) => `"${p.raw}" está escrito de forma incorreta, então os servidores de destino tratam o registro como quebrado (permerror).`,
    'bad-syntax-percent': (p) =>
      `"${p.raw}" tem um sinal % que não é uma macro SPF válida, então os servidores de destino tratam o registro como quebrado (permerror).`,
    'duplicate-modifier': (p) =>
      `O registro tem mais de um ${p.name}=. Só um é permitido, então os servidores de destino tratam o registro como quebrado (permerror).`,
    'empty-modifier': (p) => `"${p.raw}" não tem domínio depois do sinal =.`,
    'equals-not-colon': (p) =>
      `"${p.raw}" usa = onde o SPF espera dois-pontos. Os servidores de destino leem isso como uma configuração desconhecida e o ignoram. Escreva ${p.name}:${p.value}.`,
    'unknown-term': (p) => `"${p.raw}" não é um mecanismo SPF válido. Os servidores de destino tratam o registro inteiro como quebrado (permerror).`,
    'bad-ip': (p) => `"${p.raw}" não contém um endereço ${p.family} válido.`,
    'bad-cidr': (p) => `"${p.raw}" tem um tamanho de prefixo acima de /${p.max}.`,
    'after-all': () => 'Há mecanismos depois de "all". Os servidores de destino param em "all", então nada depois dele é usado.',
    'include-plus-all': () => 'Este registro incluído termina em "+all", o que faz o include corresponder a qualquer servidor da internet.',
    'long-record': (p) =>
      `O registro tem ${p.length} caracteres. A RFC 7208 diz que a resposta DNS deve ser pequena (abaixo de cerca de 450 bytes) para caber em um pacote UDP. Alguns servidores de destino podem não ler uma resposta maior.`,
    macro: (p) => `"${p.target}" usa macros SPF, que dependem do servidor de envio. O verificador não consegue segui-lo.`,
    'macro-exists': (p) =>
      `"${p.raw}" usa macros SPF, preenchidas com dados de cada servidor de envio. Conta como 1 consulta, mas um verificador não consegue listar os servidores que ele autoriza.`,
    loop: (p) => `${p.target} inclui a si mesmo pela cadeia ${p.chain.join(' > ')}. Os servidores de destino tratam isso como quebrado.`,
    'too-deep': (p) => `A cadeia de includes passa de ${p.limit} níveis, então o verificador parou.`,
    temperror: (p) =>
      `Os servidores DNS de ${p.target} não responderam. Os servidores de destino receberiam um erro temporário (temperror) e podem tentar de novo depois. Verifique de novo em alguns minutos.`,
    'temperror-term': (p) =>
      `Os servidores DNS de ${p.target} não responderam, então não foi possível verificar "${p.raw}". Os servidores de destino receberiam um erro temporário (temperror).`,
    'include-no-spf': (p) =>
      `include:${p.target} aponta para ${p.missing ? 'um domínio que não existe' : 'um domínio sem registro SPF'}. Os servidores de destino tratam o registro inteiro como quebrado (permerror).`,
    'redirect-no-spf': (p) =>
      `redirect=${p.target} aponta para ${p.missing ? 'um domínio que não existe' : 'um domínio sem registro SPF'}. Os servidores de destino tratam o registro inteiro como quebrado (permerror).`,
    multiple: (p) =>
      `${p.target} publica ${p.count} registros SPF. A RFC 7208 permite exatamente um, então os servidores de destino tratam o SPF como quebrado (permerror). Junte todos em um único registro.`,
    'multiple-included': (p) => `${p.target} publica ${p.count} registros SPF. Deve haver exatamente um.`,
    'void-a': (p) => `"${p.raw}" não encontra nenhum endereço IP para ${p.target}, então não corresponde a nada e conta como consulta vazia.`,
    'void-mx': (p) => `"${p.raw}" não encontra nenhum servidor de e-mail para ${p.target}, então não corresponde a nada e conta como consulta vazia.`,
    'mx-over-10': (p) => `${p.target} tem ${p.count} registros MX. A RFC 7208 permite no máximo 10 para o mecanismo mx.`,
    ptr: (p) => `"${p.raw}" usa ptr, que a RFC 7208 diz para não usar. É lento, gasta uma consulta e é menos confiável que ip4 ou ip6.`,
    exists: (p) => `"${p.raw}" verifica se ${p.target} existe. Normalmente é usado com macros.`,
    'redirect-ignored': () => 'O registro tem "all" e um redirect. Os servidores de destino ignoram o redirect quando "all" está presente.',
    'plus-all': () => '"+all" deixa qualquer servidor da internet enviar como o seu domínio. Troque por "~all" ou "-all".',
    'neutral-all': () => '"?all" é neutro: não diz nada aos servidores de destino sobre os servidores que você não listou, então não protege nada.',
    'no-all': () => 'O registro não termina com "all", então os servidores de destino tratam os servidores não listados como neutros. Adicione "~all" ou "-all" no final.',
    'too-many-lookups': (p) =>
      `O registro precisa de ${p.lookups} consultas DNS. O limite é ${p.limit}, então os servidores de destino param e tratam o SPF como quebrado (permerror).`,
    'near-limit': (p) => `O registro usa todas as ${p.limit} consultas DNS permitidas. Mais um include quebraria o SPF de todos os seus e-mails.`,
    'near-limit-one-left': (p) =>
      `O registro usa ${p.lookups} das ${p.limit} consultas DNS permitidas. Cabe mais uma consulta, e a maioria dos includes custa mais de uma.`,
    'too-many-voids': (p) =>
      `${p.voids} consultas não retornaram nada. A RFC 7208 permite que os servidores de destino façam o SPF falhar depois de ${p.limit} dessas consultas vazias ("void").`,
  },
  failures: {
    'no-answer': 'o DNS não respondeu',
    nxdomain: 'o domínio não existe',
    'no-spf': 'sem registro SPF',
    multiple: 'mais de um registro SPF',
  },
  senderNames: {
    'zoho.com': 'Zoho Mail (include antigo)',
    'zohomail.eu': 'Zoho Mail (UE)',
    'zoho.eu': 'Zoho Mail (UE, include antigo)',
    'eu.mailgun.org': 'Mailgun (UE)',
  },
  senderNotes: {
    'Zoho Mail': 'Contas de outras regiões usam um final próprio, como zohomail.eu.',
    Mailgun: 'Se você envia de um subdomínio como mg.seudominio.com.br, adicione o include ao registro desse subdomínio.',
  },
  notNeededReasons: {
    Mailchimp: 'A configuração de domínio do Mailchimp agora pede só registros DKIM e DMARC, não SPF.',
    Postmark:
      'O Postmark diz que o SPF não é mais necessário. Ele envia com um endereço de bounce próprio, ou com um registro Return-Path que você aponta para ele.',
    Brevo: 'O Brevo diz que o SPF não é necessário, a menos que você envie de um endereço IP dedicado.',
    Klaviyo: 'O Klaviyo diz que normalmente você não precisa adicionar um registro SPF.',
    SendGrid: 'A autenticação de domínio do SendGrid coloca o SPF em um subdomínio que ele cria para você, como em1234.seudominio.com.br.',
    'Amazon SES':
      'O SES só precisa dele em um subdomínio MAIL FROM personalizado, como bounce.seudominio.com.br. Por padrão, ele usa um endereço de bounce próprio.',
  },
}


const frTool: SpfToolStrings = {
  wideCostColumn: true,
  tabsLabel: 'Mode de l’outil SPF',
  tabCheck: 'Vérifier',
  tabCheckMore: ' un enregistrement SPF',
  tabCreate: 'Générer',
  tabCreateMore: ' un enregistrement SPF',

  label: 'Domaine ou adresse e-mail',
  placeholder: 'exemple.fr',
  button: 'Vérifier l’enregistrement SPF',
  tryLabel: 'Exemples :',
  inputEmpty: 'Entrez un domaine, comme exemple.fr.',
  inputInvalid: 'Ceci ne ressemble pas à un domaine valide. Entrez un nom comme exemple.fr.',
  lookupError: 'Impossible d’interroger les résolveurs DNS. Vérifiez votre connexion et réessayez.',
  noAnswer: ({ domain }) =>
    `${domain ? `Les serveurs DNS de ${domain} n’ont pas répondu.` : 'Les serveurs DNS du domaine n’ont pas répondu.'} Les serveurs destinataires reçoivent actuellement une erreur temporaire (temperror). Réessayez dans quelques minutes.`,

  summary: {
    valid: (p) => {
      const all =
        p.allQualifier === '-'
          ? ' Les e-mails provenant de serveurs non autorisés sont rejetés (fail).'
          : p.allQualifier === '~'
            ? ' Les e-mails de serveurs non listés reçoivent un avertissement (softfail).'
            : ''
      return {
        title: `${p.domain} possède un enregistrement SPF valide`,
        text: `Il consomme ${p.lookups} des ${p.limit} requêtes DNS autorisées.${all}`,
      }
    },
    warnings: (p) => ({
      title: `${p.domain} a un enregistrement SPF fonctionnel, mais avec des alertes`,
      text: `Les serveurs de réception peuvent l’interpréter, mais les points ci-dessous fragilisent sa configuration. Il consomme ${p.lookups} des ${p.limit} requêtes autorisées.`,
    }),
    broken: (p) => ({
      title: `L’enregistrement SPF de ${p.domain} est invalide`,
      text: 'Les serveurs de réception renvoient une erreur permanente (permerror), entraînant l’échec du SPF pour vos e-mails. Les corrections requises sont listées ci-dessous.',
    }),
    unprotected: (p) => ({
      title: `L’enregistrement SPF de ${p.domain} ne protège pas le domaine`,
      text: `La règle +all autorise n’importe quel serveur à envoyer des e-mails au nom de ${p.domain}.`,
    }),
    none: (p) => ({
      title: `${p.domain} ne possède aucun enregistrement SPF`,
      text: 'Les serveurs de messagerie ne peuvent pas vérifier quels serveurs ont le droit d’émettre du courrier en son nom.',
    }),
    nxdomain: (p) => ({ title: `${p.domain} n’existe pas`, text: 'Le DNS n’a aucun enregistrement pour ce domaine. Vérifiez l’orthographe.' }),
  },
  recordFor: (domain) => `Enregistrement SPF de ${domain}`,
  copy: 'Copier',
  copied: 'Copié',
  lookupsMeter: 'Requêtes DNS',
  lookupsMeterNote: 'include, a, mx, ptr, exists et redirect comptent chacun pour une requête (RFC 7208).',
  voidMeter: 'Requêtes vides (void lookups)',
  voidMeterNote: 'Requêtes sans résultat IP. Plus de 2 requêtes vides peuvent faire échouer le SPF.',
  meterOf: (limit) => `sur ${limit}`,
  unlisted: 'Serveurs non listés',
  allLabel: { '-': 'Refus (fail)', '~': 'Soft fail', '?': 'Neutre', '+': 'Autorisé (dangereux)' },
  allNotSet: 'Non configuré',
  allSetBy: (q) => `Défini par ${q}all à la fin de l’enregistrement.`,
  allMissing: 'L’enregistrement ne se termine pas par all, les serveurs non listés reçoivent un statut neutre.',
  fixTitle: 'Anomalies à corriger',
  notesTitle: 'Remarques techniques',
  inDomain: (domain) => `dans ${domain}`,
  thPart: 'Élément',
  thMeaning: 'Description',
  thCost: 'Coût DNS',
  partsTitle: 'Explication de chaque mécanisme',
  lookups: (n) => `${n} requête${n === 1 ? '' : 's'}`,
  vSpf1: 'Identifie cet enregistrement DNS comme un enregistrement SPF version 1.',
  showContents: (domain) => `Afficher le contenu de ${domain}`,
  hideContents: (domain) => `Masquer le contenu de ${domain}`,
  describe: {
    redirect: (domain) => `Délègue l’évaluation complète de la politique SPF à ${domain}.`,
    exp: 'Pointe vers un message d’explication TXT affiché en cas de rejet d’un e-mail.',
    unknownModifier: 'Modificateur non standard ignoré par les serveurs de réception.',
    all: {
      '-': 'Rejette formellement tout e-mail envoyé par des serveurs non listés (fail).',
      '~': 'Accepte les e-mails non listés en les marquant comme suspects (softfail).',
      '?': 'N’applique aucune politique stricte aux serveurs non déclarés (neutral).',
      '+': 'Autorise tous les serveurs d’Internet à envoyer au nom de votre domaine (+all).',
    },
    server: (address) => `le serveur avec l’adresse IP ${address}`,
    ip4Range: (address, cidr, count) => `les ${count} adresses IPv4 de ${address}/${cidr}`,
    ip6Range: (address, cidr) => `la plage d’adresses IPv6 ${address}/${cidr}`,
    a: (domain, cidr) => `les serveurs aux adresses IP de ${domain}${cidr ? ` (${cidr})` : ''}`,
    mx: (domain) => `les serveurs de réception de courrier (MX) de ${domain}`,
    include: (domain, service) =>
      `les serveurs de messagerie de ${domain}${service ? ` (${service})` : ''}`,
    ptr: (domain) => `les serveurs dont la résolution inverse correspond à ${domain}`,
    existsMacro: 'Effectue un test de présence dynamique par macro DNS.',
    exists: (domain) => `Autorise l’envoi si ${domain} résout une adresse IP valide.`,
    sentence: (subject, qualifier, single) => {
      const verb = single ? 'est' : 'sont'
      if (qualifier === '+') return `Le courrier provenant de ${subject} ${verb} autorisé.`
      if (qualifier === '-') return `Le courrier provenant de ${subject} ${verb} refusé.`
      if (qualifier === '~') return `Le courrier provenant de ${subject} reçoit un softfail.`
      return `Le courrier provenant de ${subject} reçoit un statut neutre.`
    },
  },
  nearMissTitle: 'Enregistrement ressemblant détecté',
  nearMissSpf2: 'Vous utilisez spf2.0 (Sender ID), qui est obsolète. Utilisez v=spf1.',
  nearMissOther: 'Cet enregistrement TXT ressemble à du SPF mais ne commence pas par v=spf1.',
  noMx: 'Le domaine {domain} ne dispose pas d’enregistrements MX. Pour interdire tout envoi d’e-mails, publiez {record}.',
  createFor: (domain) => `Générer un enregistrement pour ${domain}`,
  fixInCreator: 'Ajuster dans le générateur',
  answeredBy: 'Résolu par',
  publicDns: 'DNS public',
  ctaTitle: 'Le SPF valide le serveur, pas l’adresse e-mail',
  ctaText: 'Un enregistrement SPF parfait n’empêche pas les e-mails d’atterrir en boîte d’erreur si l’adresse n’existe pas. Vérifiez vos adresses avant chaque envoi.',
  ctaButton: 'Vérifier une adresse e-mail',
  ctaHref: '/fr/verifier-adresse-mail',

  domainStep: 'Votre domaine',
  loadButton: 'Charger l’enregistrement actuel',
  loadHelp: 'Si votre domaine possède déjà un enregistrement SPF, chargez-le pour y ajouter vos nouveaux services. Vous pouvez aussi ignorer cette étape.',
  load: {
    nxdomain: (domain: string) => `${domain} n’existe pas dans le DNS. Vérifiez l’orthographe.`,
    none: (domain: string) => `${domain} n’a pas encore d’enregistrement SPF. Choisissez vos services ci-dessous pour en créer un.`,
    redirect: (domain: string, record: string) =>
      `L’enregistrement SPF de ${domain} utilise une redirection (${record}). Modifiez directement l’enregistrement de ce domaine cible.`,
    loaded: ({ domain, multiple, changedAll }: { domain: string; multiple: boolean; changedAll: boolean }) =>
      `Nous avons chargé l’enregistrement actuel de ${domain}. Ajoutez ou supprimez des services, puis remplacez l’ancien enregistrement par le nouveau.${
        multiple ? ' Le domaine compte plusieurs enregistrements SPF, nous avons donc chargé le premier. Supprimez les autres après avoir publié celui-ci.' : ''
      }${changedAll ? ' La terminaison n’était ni ~all ni -all, nous l’avons donc ajustée en ~all.' : ''}`,
  },
  sendersStep: 'Quels services envoient des e-mails depuis votre domaine ?',
  sendersHelp: 'Cochez chaque service utilisé. Le chiffre indique le nombre de requêtes DNS consommées sur la limite de 10.',
  groupMailbox: 'Messageries d’entreprise',
  groupService: 'Plateformes marketing, transactionnelles et support',
  unneededInline: (subdomainOnly) => `{include} ({name}) n’est généralement pas nécessaire${subdomainOnly ? ' sur un domaine principal' : ''}. {reason}`,
  unneeded: ({ include, name, subdomainOnly, reason, cost }) =>
    `include:${include} (${name}) n’est généralement pas nécessaire${subdomainOnly ? ' sur un domaine principal' : ''}. ${reason} Le supprimer libère ${cost} requête${cost > 1 ? 's' : ''}.`,
  unneededSummary: 'Vous utilisez SendGrid, Mailchimp ou Brevo ? Ils ne requièrent souvent aucun include sur le domaine racine.',
  otherLabel: 'Autre service non listé',
  otherPlaceholder: 'spf.service-exemple.fr',
  addButton: 'Ajouter',
  otherHelp: 'Copiez l’adresse d’include indiquée dans la documentation de votre service.',
  ownServer: 'Envoyez-vous également depuis vos propres serveurs ?',
  ipsLabel: 'Adresses IP des serveurs d’envoi',
  ipsPlaceholder: '192.0.2.10\n198.51.100.0/24\n2001:db8::/32',
  ipsHelp: 'Une adresse ou plage CIDR par ligne (IPv4 ou IPv6).',
  aLabel: 'Le serveur web du domaine envoie des e-mails',
  aHelp: 'Ajoute le mécanisme a (1 requête DNS).',
  mxLabel: 'Les serveurs de réception MX envoient aussi des e-mails',
  mxHelp: 'Ajoute le mécanisme mx (1 requête DNS). Inutile pour Google Workspace ou Microsoft 365.',
  keptTitle: 'Conservé de votre enregistrement actuel',
  remove: (term) => `Supprimer ${term}`,
  allStep: 'Quel traitement appliquer aux serveurs non autorisés ?',
  softFail: {
    title: 'Soft fail (~all)',
    text: 'Recommandé par Google : les e-mails non listés sont remis mais marqués comme suspects.',
  },
  fail: {
    title: 'Fail (-all)',
    text: 'Rejet strict des serveurs non listés. Recommandé une fois DKIM et DMARC pleinement opérationnels.',
  },
  recordTitle: 'Votre enregistrement SPF généré',
  recordHelp: 'Publiez cette valeur sous forme d’enregistrement TXT dans votre zone DNS.',
  typeLabel: 'Type',
  nameLabel: 'Nom / Hôte',
  nameHelp: 'Certains hébergeurs demandent @ ou de laisser le champ hôte vide.',
  valueLabel: 'Valeur TXT',
  draftLookups: (n, limit) => `${n} sur ${limit} requêtes DNS utilisées`,
  counting: 'Calcul en temps réel...',
  noSenders: 'Aucun service sélectionné. Un enregistrement sans émetteur interdit tout envoi au nom du domaine.',
  neverSends: 'Ce domaine n’envoie jamais d’e-mails',
  draftError: 'Impossible d’interroger le DNS pour évaluer le coût des requêtes.',
  howTitle: 'Comment l’ajouter',
  howSteps: [
    'Connectez-vous à l’interface où vous gérez le DNS de votre domaine. Il s’agit généralement de l’hébergeur auprès duquel vous avez acheté le domaine.',
    'Recherchez un enregistrement TXT commençant par v=spf1. S’il en existe un, remplacez sa valeur par le nouvel enregistrement ci-dessus. N’ajoutez pas de second enregistrement SPF, car deux enregistrements invalident le SPF pour tous vos e-mails.',
    'S’il n’en existe aucun, créez un nouvel enregistrement TXT avec le nom et la valeur ci-dessus, puis enregistrez.',
  ],
  howLast: 'Patientez quelques minutes, puis {check}. Configurez également DKIM et DMARC avec le {dkim} et le {dmarc}.',
  checkPublished: 'vérifiez l’enregistrement publié',
  dkimLabel: 'générateur DKIM',
  dkimHref: '/dkim-generator',
  dmarcLabel: 'générateur DMARC',
  dmarcHref: '/dmarc-generator',
  issues: {
    'bad-syntax': (p) => `"${p.raw}" présente une erreur de syntaxe SPF.`,
    'bad-syntax-percent': (p) => `"${p.raw}" contient un caractère % qui n’est pas une macro SPF valide.`,
    'duplicate-modifier': (p) => `Le modificateur ${p.name} est défini plusieurs fois.`,
    'empty-modifier': (p) => `"${p.raw}" est un modificateur sans valeur assignée.`,
    'equals-not-colon': (p) => `"${p.raw}" utilise "=" au lieu de ":". Écrivez "${p.name}:${p.value}".`,
    'unknown-term': (p) => `"${p.raw}" n’est pas un mécanisme ou modificateur SPF reconnu.`,
    'bad-ip': (p) => `"${p.raw}" ne contient pas d’adresse ${p.family} valide.`,
    'bad-cidr': (p) => `"${p.raw}" dépasse la longueur de masque CIDR autorisée (maximum /${p.max}).`,
    'after-all': () => 'Des mécanismes sont placés après le mécanisme "all" et seront ignorés.',
    'include-plus-all': () => 'Un domaine inclus se termine par +all, ce qui annule toute protection.',
    'long-record': (p) => `Cet enregistrement mesure ${p.length} caractères, dépassant la limite pratique recommandée.`,
    macro: (p) => `L’include ${p.target} utilise des macros DNS dynamiques.`,
    'macro-exists': (p) => `"${p.raw}" utilise des macros avec le mécanisme exists.`,
    loop: (p) => `Boucle infinie détectée dans les includes : ${p.chain} -> ${p.target}.`,
    'too-deep': (p) => `La chaîne d’includes dépasse la profondeur maximale de ${p.limit} niveaux.`,
    temperror: (p) => `Impossible d’interroger le serveur DNS pour ${p.target}.`,
    'temperror-term': (p) => `Impossible de résoudre le mécanisme "${p.raw}" pour ${p.target}.`,
    'include-no-spf': (p) => `L’include ${p.target} ne possède aucun enregistrement SPF valide.`,
    'redirect-no-spf': (p) => `La redirection redirect=${p.target} pointe vers un domaine sans enregistrement SPF.`,
    multiple: (p) => `${p.target} publie ${p.count} enregistrements SPF. La RFC 7208 exige strictement un enregistrement unique.`,
    'multiple-included': (p) => `Le domaine inclus ${p.target} possède ${p.count} enregistrements SPF.`,
    'void-a': (p) => `"${p.raw}" ne résout aucune adresse IP pour ${p.target} (requête vide).`,
    'void-mx': (p) => `"${p.raw}" ne trouve aucun serveur MX pour ${p.target} (requête vide).`,
    'mx-over-10': (p) => `${p.target} possède ${p.count} serveurs MX, dépassant la limite autorisée par la RFC 7208.`,
    ptr: (p) => `"${p.raw}" utilise le mécanisme ptr, formellement déconseillé par la RFC 7208.`,
    exists: (p) => `"${p.raw}" utilise le mécanisme exists pour tester ${p.target}.`,
    'redirect-ignored': () => 'L’enregistrement combine un mécanisme all et un redirect. Le redirect est ignoré.',
    'plus-all': () => 'Le mécanisme "+all" autorise tous les serveurs à envoyer en votre nom. Remplacez-le par ~all ou -all.',
    'neutral-all': () => '"?all" est neutre et n’offre aucune protection contre l’usurpation.',
    'no-all': () => 'L’enregistrement ne se termine pas par un mécanisme all. Ajoutez ~all ou -all.',
    'too-many-lookups': (p) => `L’enregistrement requiert ${p.lookups} requêtes DNS, dépassant la limite stricte de ${p.limit}.`,
    'near-limit': (p) => `Toutes les ${p.limit} requêtes DNS sont consommées. Tout ajout provoquera un permerror.`,
    'near-limit-one-left': (p) => `L’enregistrement consomme ${p.lookups} des ${p.limit} requêtes autorisées. Il ne reste qu’une seule requête disponible.`,
    'too-many-voids': (p) => `${p.voids} requêtes vides détectées, risquant d’entraîner le rejet du message.`,
  },
  failures: {
    'no-answer': 'le serveur DNS n’a pas répondu',
    nxdomain: 'le domaine n’existe pas',
    'no-spf': 'aucun enregistrement SPF',
    multiple: 'plusieurs enregistrements SPF trouvés',
  },
  senderNames: {
    'zoho.com': 'Zoho Mail (ancien include)',
    'zohomail.eu': 'Zoho Mail (UE)',
    'zoho.eu': 'Zoho Mail (UE, ancien include)',
    'eu.mailgun.org': 'Mailgun (UE)',
  },
  senderNotes: {
    'Zoho Mail': 'Les comptes européens utilisent l’include zohomail.eu.',
    Mailgun: 'Si vous envoyez depuis un sous-domaine comme mg.domaine.fr, ajoutez l’include au sous-domaine.',
  },
  notNeededReasons: {
    Mailchimp: 'Mailchimp n’utilise plus d’include SPF sur le domaine racine et s’appuie sur DKIM et DMARC.',
    Postmark: 'Postmark gère les retours via son propre domaine de Return-Path.',
    Brevo: 'Brevo n’exige aucun enregistrement SPF sauf si vous disposez d’une IP dédiée.',
    Klaviyo: 'Klaviyo utilise son infrastructure d’envoi sans requérir d’include racine.',
    SendGrid: 'SendGrid isole le SPF sur un sous-domaine dédié généré lors de la validation.',
    'Amazon SES': 'SES utilise son propre domaine d’envoi sauf en cas de Return-Path personnalisé.',
  },
}


const esTool: SpfToolStrings = {
  wideCostColumn: true,
  tabsLabel: 'Modo de la herramienta SPF',
  tabCheck: 'Comprobar',
  tabCheckMore: ' registro SPF',
  tabCreate: 'Crear',
  tabCreateMore: ' registro SPF',

  label: 'Dominio o dirección de correo',
  placeholder: 'ejemplo.es',
  button: 'Comprobar registro SPF',
  tryLabel: 'Ejemplos:',
  inputEmpty: 'Introduce un dominio, como ejemplo.es.',
  inputInvalid: 'Eso no parece un dominio válido. Introduce algo como ejemplo.es.',
  lookupError: 'No se pudo contactar con los servicios de DNS. Comprueba tu conexión e inténtalo de nuevo.',
  noAnswer: ({ domain }) =>
    `${domain ? `Los servidores DNS de ${domain} no respondieron.` : 'Los servidores DNS del dominio no respondieron.'} En este momento los servidores de destino reciben un error temporal (temperror). Inténtalo de nuevo en unos minutos.`,

  summary: {
    valid: (p) => {
      const all =
        p.allQualifier === '-'
          ? ' El correo de servidores no autorizados es rechazado (fail).'
          : p.allQualifier === '~'
            ? ' El correo de servidores no autorizados recibe un fallo leve (softfail).'
            : ''
      return {
        title: `${p.domain} tiene un registro SPF válido`,
        text: `Consume ${p.lookups} de las ${p.limit} consultas DNS permitidas.${all}`,
      }
    },
    warnings: (p) => ({
      title: `${p.domain} tiene un registro SPF funcional, pero con avisos`,
      text: `Los servidores receptores pueden procesarlo, pero los avisos inferiores debilitan la configuración. Consume ${p.lookups} de las ${p.limit} consultas DNS permitidas.`,
    }),
    broken: (p) => ({
      title: `El registro SPF de ${p.domain} es erróneo`,
      text: 'Los servidores receptores interpretan este registro como un error permanente (permerror), por lo que el SPF fallará para tus correos. Las correcciones se detallan abajo.',
    }),
    unprotected: (p) => ({
      title: `El registro SPF de ${p.domain} no protege el dominio`,
      text: `La regla +all permite a cualquier servidor en internet enviar correo en nombre de ${p.domain}.`,
    }),
    none: (p) => ({
      title: `${p.domain} no tiene registro SPF`,
      text: 'Los servidores de correo no pueden saber qué servidores están autorizados para enviar mensajes en su nombre.',
    }),
    nxdomain: (p) => ({ title: `${p.domain} no existe`, text: 'El DNS no tiene constancia de este dominio. Revisa la ortografía.' }),
  },
  recordFor: (domain) => `Registro SPF de ${domain}`,
  copy: 'Copiar',
  copied: 'Copiado',
  lookupsMeter: 'Consultas DNS',
  lookupsMeterNote: 'include, a, mx, ptr, exists y redirect consumen 1 consulta cada uno, incluso dentro de includes.',
  voidMeter: 'Consultas vacías (void lookups)',
  voidMeterNote: 'Consultas que no devuelven ninguna IP. Más de 2 pueden provocar que el SPF falle.',
  meterOf: (limit) => `de ${limit}`,
  unlisted: 'Servidores no listados',
  allLabel: { '-': 'Rechazo (fail)', '~': 'Fallo leve (softfail)', '?': 'Neutro', '+': 'Permitido (inseguro)' },
  allNotSet: 'No definido',
  allSetBy: (q) => `Definido por ${q}all al final del registro.`,
  allMissing: 'El registro no termina en all, por lo que los servidores no listados reciben un resultado neutro.',
  fixTitle: 'Qué corregir',
  notesTitle: 'Notas técnicas',
  inDomain: (domain) => `en ${domain}`,
  thPart: 'Parte',
  thMeaning: 'Qué significa',
  thCost: 'Coste DNS',
  partsTitle: 'Qué significa cada parte',
  lookups: (n) => `${n} ${n === 1 ? 'consulta' : 'consultas'}`,
  vSpf1: 'Identifica este registro como SPF versión 1.',
  showContents: (domain) => `Mostrar contenido de ${domain}`,
  hideContents: (domain) => `Ocultar contenido de ${domain}`,
  describe: {
    redirect: (domain) => `Delega la evaluación de la política SPF en ${domain}.`,
    exp: 'Apunta a un registro TXT con una explicación si el mensaje es rechazado.',
    unknownModifier: 'Modificador desconocido ignorado por los servidores receptores.',
    all: {
      '-': 'Rechaza mensajes de servidores no listados (-all).',
      '~': 'Acepta mensajes de servidores no listados pero marcándolos como sospechosos (~all).',
      '?': 'Trata a los servidores no listados de forma neutral (?all).',
      '+': 'Permite a cualquier servidor enviar correo (+all).',
    },
    server: (address) => `el servidor con la dirección IP ${address}`,
    ip4Range: (address, cidr, count) => `las ${count} direcciones IPv4 de ${address}/${cidr}`,
    ip6Range: (address, cidr) => `el rango IPv6 ${address}/${cidr}`,
    a: (domain, cidr) => `los servidores en las direcciones IP de ${domain}${cidr ? ` (${cidr})` : ''}`,
    mx: (domain) => `los servidores de correo entrante (MX) de ${domain}`,
    include: (domain, service) =>
      `los servidores de correo de ${domain}${service ? ` (${service})` : ''}`,
    ptr: (domain) => `los servidores cuya resolución inversa coincida con ${domain}`,
    existsMacro: 'Comprueba la existencia de un registro DNS dinámico mediante macros.',
    exists: (domain) => `Comprueba si ${domain} resuelve una dirección IP válida.`,
    sentence: (subject, qualifier, single) => {
      const verb = single ? 'está' : 'están'
      if (qualifier === '+') return `El correo de ${subject} ${verb} autorizado.`
      if (qualifier === '-') return `El correo de ${subject} ${verb} rechazado.`
      if (qualifier === '~') return `El correo de ${subject} recibe un fallo leve (softfail).`
      return `El correo de ${subject} recibe un resultado neutro.`
    },
  },
  nearMissTitle: 'Registro similar detectado',
  nearMissSpf2: 'Estás usando spf2.0 (Sender ID), que está obsoleto. Usa v=spf1.',
  nearMissOther: 'Este registro TXT se parece a SPF pero no empieza por v=spf1.',
  noMx: '{domain} no tiene registros MX. Si no debe enviar correos, añade {record}.',
  createFor: (domain) => `Crear registro para ${domain}`,
  fixInCreator: 'Corregir en el generador',
  answeredBy: 'Respondido por',
  publicDns: 'DNS público',
  ctaTitle: 'SPF comprueba el servidor, no el buzón',
  ctaText: 'Un registro SPF correcto no garantiza que la dirección exista. Comprueba la validez de cada buzón antes de enviar.',
  ctaButton: 'Comprobar una dirección de correo',
  ctaHref: '/es/validar-correo',

  domainStep: 'Tu dominio',
  loadButton: 'Cargar el registro actual',
  loadHelp: 'Si tu dominio ya tiene un registro SPF, cárgalo y añade los nuevos remitentes. También puedes saltarte este paso.',
  load: {
    nxdomain: (domain: string) => `${domain} no existe en el DNS. Comprueba el nombre.`,
    none: (domain: string) => `${domain} aún no tiene registro SPF. Elige tus remitentes abajo para crear uno.`,
    redirect: (domain: string, record: string) =>
      `El registro SPF de ${domain} utiliza un redirect (${record}). Modifica el registro de ese dominio directamente.`,
    loaded: ({ domain, multiple, changedAll }: { domain: string; multiple: boolean; changedAll: boolean }) =>
      `Hemos cargado el registro actual de ${domain}. Añade o elimina remitentes y sustituye el registro antiguo por el nuevo.${
        multiple ? ' El dominio tiene más de un registro SPF, por lo que hemos cargado el primero. Elimina los demás tras publicar este.' : ''
      }${changedAll ? ' El final no era ni ~all ni -all, así que lo hemos cambiado a ~all.' : ''}`,
  },
  sendersStep: '¿Qué servicios envían correo desde tu dominio?',
  sendersHelp: 'Marca cada servicio que utilices. El número indica cuántas de las 10 consultas DNS permitidas consume.',
  groupMailbox: 'Proveedores de correo',
  groupService: 'Herramientas de marketing, envío y soporte',
  unneededInline: (subdomainOnly) => `{include} ({name}) normalmente no es necesario${subdomainOnly ? ' en un dominio principal' : ''}. {reason}`,
  unneeded: ({ include, name, subdomainOnly, reason, cost }) =>
    `include:${include} (${name}) normalmente no es necesario${subdomainOnly ? ' en un dominio principal' : ''}. ${reason} Eliminarlo liberaría ${cost} consulta${cost > 1 ? 's' : ''}.`,
  unneededSummary: '¿Usas SendGrid, Mailchimp o Brevo? A menudo no necesitan un include en el dominio raíz.',
  otherLabel: 'Otro servicio no listado',
  otherPlaceholder: 'spf.servicio-ejemplo.es',
  addButton: 'Añadir',
  otherHelp: 'Copia el valor del include de la guía oficial de tu proveedor.',
  ownServer: '¿Envías también desde tu propio servidor?',
  ipsLabel: 'Direcciones IP de los servidores de envío',
  ipsPlaceholder: '192.0.2.10\n198.51.100.0/24\n2001:db8::/32',
  ipsHelp: 'Una dirección o rango CIDR por línea (IPv4 o IPv6).',
  aLabel: 'El servidor de mi página web envía correos',
  aHelp: 'Añade la dirección IP de tu dominio (mecanismo a, 1 consulta DNS).',
  mxLabel: 'Mis servidores de correo entrante (MX) también envían correos',
  mxHelp: 'Añade los servidores MX (1 consulta DNS). Innecesario para Google Workspace o Microsoft 365.',
  keptTitle: 'Mantenido de tu registro actual',
  remove: (term) => `Eliminar ${term}`,
  allStep: '¿Qué debe ocurrir con el correo de servidores no listados?',
  softFail: {
    title: 'Fallo leve (~all)',
    text: 'Recomendado por Google: los mensajes no autorizados se aceptan pero se marcan como sospechosos.',
  },
  fail: {
    title: 'Rechazo estricto (-all)',
    text: 'Rechaza mensajes no listados. Recomendado una vez que DKIM y DMARC estén bien configurados.',
  },
  recordTitle: 'Tu registro SPF generado',
  recordHelp: 'Añádelo como registro TXT en la zona DNS de tu dominio.',
  typeLabel: 'Tipo',
  nameLabel: 'Nombre / Host',
  nameHelp: 'Algunos proveedores piden @ o dejar el campo de nombre en blanco.',
  valueLabel: 'Valor TXT',
  draftLookups: (n, limit) => `${n} de ${limit} consultas DNS utilizadas`,
  counting: 'Calculando consultas en vivo...',
  noSenders: 'No has seleccionado remitentes. Un registro sin remitentes impide cualquier envío desde el dominio.',
  neverSends: 'Este dominio nunca envía correo',
  draftError: 'No se pudo consultar el DNS para contar las búsquedas.',
  howTitle: 'Cómo añadirlo',
  howSteps: [
    'Accede al panel donde gestionas el DNS de tu dominio. Habitualmente es la empresa donde compraste el dominio.',
    'Busca un registro TXT que comience por v=spf1. Si existe uno, sustituye su valor por el registro anterior. No añadas un segundo registro SPF, ya que dos registros anulan el SPF de todos tus correos.',
    'Si no existe ninguno, añade un nuevo registro TXT con el nombre y valor indicados arriba y guarda los cambios.',
  ],
  howLast: 'Espera unos minutos y {check}. Configura también DKIM y DMARC con el {dkim} y el {dmarc}.',
  checkPublished: 'comprueba el registro publicado',
  dkimLabel: 'generador DKIM',
  dkimHref: '/dkim-generator',
  dmarcLabel: 'generador DMARC',
  dmarcHref: '/dmarc-generator',
  issues: {
    'bad-syntax': (p) => `"${p.raw}" tiene un error de sintaxis SPF.`,
    'bad-syntax-percent': (p) => `"${p.raw}" contiene un símbolo % que no es una macro válida.`,
    'duplicate-modifier': (p) => `El modificador ${p.name} está duplicado.`,
    'empty-modifier': (p) => `"${p.raw}" es un modificador sin valor.`,
    'equals-not-colon': (p) => `"${p.raw}" usa "=" en vez de ":". Escribe "${p.name}:${p.value}".`,
    'unknown-term': (p) => `"${p.raw}" no es un mecanismo ni modificador SPF reconocido.`,
    'bad-ip': (p) => `"${p.raw}" no es una dirección ${p.family} válida.`,
    'bad-cidr': (p) => `"${p.raw}" supera la longitud de máscara CIDR máxima (/${p.max}).`,
    'after-all': () => 'Hay mecanismos colocados después de "all" que serán ignorados.',
    'include-plus-all': () => 'Un include termina en +all, anulando la protección.',
    'long-record': (p) => `El registro mide ${p.length} caracteres, superando el límite práctico recomendado.`,
    macro: (p) => `El include ${p.target} utiliza macros dinámicas.`,
    'macro-exists': (p) => `"${p.raw}" usa macros con el mecanismo exists.`,
    loop: (p) => `Bucle infinito en includes: ${p.chain} -> ${p.target}.`,
    'too-deep': (p) => `Los includes superan la profundidad máxima permitida de ${p.limit} niveles.`,
    temperror: (p) => `No se pudo obtener respuesta DNS para ${p.target}.`,
    'temperror-term': (p) => `No se pudo consultar el mecanismo "${p.raw}" para ${p.target}.`,
    'include-no-spf': (p) => `El dominio incluido ${p.target} no tiene un registro SPF válido.`,
    'redirect-no-spf': (p) => `redirect=${p.target} apunta a un dominio sin registro SPF.`,
    multiple: (p) => `${p.target} publica ${p.count} registros SPF. La RFC 7208 exige estrictamente un solo registro.`,
    'multiple-included': (p) => `El dominio incluido ${p.target} publica ${p.count} registros SPF.`,
    'void-a': (p) => `"${p.raw}" no devuelve ninguna IP para ${p.target} (consulta vacía).`,
    'void-mx': (p) => `"${p.raw}" no encuentra servidores MX para ${p.target} (consulta vacía).`,
    'mx-over-10': (p) => `${p.target} tiene ${p.count} servidores MX, superando el límite de 10.`,
    ptr: (p) => `"${p.raw}" usa ptr, mecanismo desaconsejado formalmente por la RFC 7208.`,
    exists: (p) => `"${p.raw}" usa exists para comprobar ${p.target}.`,
    'redirect-ignored': () => 'El registro combina all y redirect. El redirect es ignorado.',
    'plus-all': () => '"+all" autoriza a cualquier servidor en internet a suplantar tu dominio. Cambia a ~all o -all.',
    'neutral-all': () => '"?all" es neutro y no ofrece protección contra suplantación.',
    'no-all': () => 'El registro no termina en all. Añade ~all o -all al final.',
    'too-many-lookups': (p) => `El registro requiere ${p.lookups} consultas DNS, superando el límite estricto de ${p.limit}.`,
    'near-limit': (p) => `Se han usado las ${p.limit} consultas DNS permitidas.`,
    'near-limit-one-left': (p) => `El registro usa ${p.lookups} de las ${p.limit} consultas DNS permitidas. Solo queda una disponible.`,
    'too-many-voids': (p) => `${p.voids} consultas vacías detectadas; pueden provocar el rechazo del correo.`,
  },
  failures: {
    'no-answer': 'el DNS no respondió',
    nxdomain: 'el dominio no existe',
    'no-spf': 'sin registro SPF',
    multiple: 'múltiples registros SPF',
  },
  senderNames: {
    'zoho.com': 'Zoho Mail (antiguo include)',
    'zohomail.eu': 'Zoho Mail (UE)',
    'zoho.eu': 'Zoho Mail (UE, antiguo include)',
    'eu.mailgun.org': 'Mailgun (UE)',
  },
  senderNotes: {
    'Zoho Mail': 'Cuentas en Europa usan zohomail.eu.',
    Mailgun: 'Si envías desde un subdominio como mg.tudominio.es, añade el include en ese subdominio.',
  },
  notNeededReasons: {
    Mailchimp: 'Mailchimp gestiona la autenticación mediante registros CNAME de DKIM.',
    Postmark: 'Postmark envía desde su propio dominio de Return-Path.',
    Brevo: 'Brevo no requiere SPF en el dominio raíz salvo con IP dedicada.',
    Klaviyo: 'Klaviyo no requiere un include SPF en el dominio raíz.',
    SendGrid: 'SendGrid ubica el SPF en un subdominio generado durante la autenticación.',
    'Amazon SES': 'SES solo lo requiere en subdominios MAIL FROM personalizados.',
  },
}

const nlTool: SpfToolStrings = {
  wideCostColumn: true,
  tabsLabel: 'SPF-tool modus',
  tabCheck: 'Controleren',
  tabCheckMore: ' SPF-record',
  tabCreate: 'Aanmaken',
  tabCreateMore: ' SPF-record',

  label: 'Domein of e-mailadres',
  placeholder: 'voorbeeld.nl',
  button: 'SPF-record controleren',
  tryLabel: 'Probeer:',
  inputEmpty: 'Voer een domein in, zoals voorbeeld.nl.',
  inputInvalid: 'Dit lijkt niet op een geldig domein. Voer iets in zoals voorbeeld.nl.',
  lookupError: 'We konden de DNS-diensten niet bereiken. Controleer uw verbinding en probeer het opnieuw.',
  noAnswer: ({ domain }) =>
    `${domain ? `De DNS-servers van ${domain} antwoordden niet.` : 'De DNS-servers antwoordden niet.'} Ontvangende servers krijgen nu een tijdelijke fout (temperror). Probeer het over enkele minuten opnieuw.`,

  summary: {
    valid: (p) => {
      const all =
        p.allQualifier === '-'
          ? ' E-mail van niet-vermelde servers wordt geweigerd (fail).'
          : p.allQualifier === '~'
            ? ' E-mail van niet-vermelde servers krijgt een softfail.'
            : ''
      return {
        title: `${p.domain} heeft een geldig SPF-record`,
        text: `Het record gebruikt ${p.lookups} van de ${p.limit} toegestane DNS-zoekopdrachten.${all}`,
      }
    },
    warnings: (p) => ({
      title: `${p.domain} heeft een werkend SPF-record met waarschuwingen`,
      text: `Ontvangende servers kunnen het verwerken, maar de onderstaande punten verzwakken het record. Het gebruikt ${p.lookups} van de ${p.limit} zoekopdrachten.`,
    }),
    broken: (p) => ({
      title: `Het SPF-record van ${p.domain} bevat fouten`,
      text: 'Ontvangende servers beschouwen dit record als ongeldig (permerror). SPF faalt voor al uw e-mails. De vereiste aanpassingen staan hieronder.',
    }),
    unprotected: (p) => ({
      title: `Het SPF-record van ${p.domain} biedt geen bescherming`,
      text: `Dankzij +all mag elke server op internet namens ${p.domain} verzenden.`,
    }),
    none: (p) => ({
      title: `${p.domain} heeft geen SPF-record`,
      text: 'Ontvangende mailservers kunnen niet controleren welke servers namens dit domein mogen verzenden.',
    }),
    nxdomain: (p) => ({ title: `${p.domain} bestaat niet`, text: 'DNS heeft geen vermelding van dit domein. Controleer de spelling.' }),
  },
  recordFor: (domain) => `SPF-record voor ${domain}`,
  copy: 'Kopiëren',
  copied: 'Gekopieerd',
  lookupsMeter: 'DNS-zoekopdrachten',
  lookupsMeterNote: 'include, a, mx, ptr, exists en redirect kosten elk 1 zoekopdracht.',
  voidMeter: 'Lege zoekopdrachten (void lookups)',
  voidMeterNote: 'Zoekopdrachten zonder IP-resultaat. Meer dan 2 kan leiden tot SPF-fouten.',
  meterOf: (limit) => `van ${limit}`,
  unlisted: 'Niet-vermelde servers',
  allLabel: { '-': 'Weigeren (fail)', '~': 'Softfail', '?': 'Neutraal', '+': 'Toegestaan (onveilig)' },
  allNotSet: 'Niet ingesteld',
  allSetBy: (q) => `Bepaald door ${q}all aan het einde van het record.`,
  allMissing: 'Het record eindigt niet op all; niet-vermelde servers krijgen een neutraal resultaat.',
  fixTitle: 'Wat u moet oplossen',
  notesTitle: 'Opmerkingen',
  inDomain: (domain) => `in ${domain}`,
  thPart: 'Onderdeel',
  thMeaning: 'Betekenis',
  thCost: 'DNS-kosten',
  partsTitle: 'Betekenis van elk onderdeel',
  lookups: (n) => `${n} ${n === 1 ? 'zoekopdracht' : 'zoekopdrachten'}`,
  vSpf1: 'Geeft aan dat dit een SPF versie 1 record is.',
  showContents: (domain) => `Inhoud tonen van ${domain}`,
  hideContents: (domain) => `Inhoud verbergen van ${domain}`,
  describe: {
    redirect: (domain) => `Draagt het SPF-beleid volledig over aan ${domain}.`,
    exp: 'Verwijst naar een TXT-record met toelichting bij geweigerde e-mails.',
    unknownModifier: 'Onbekende modifier die door ontvangende servers wordt genegeerd.',
    all: {
      '-': 'Weigert e-mail van niet-vermelde servers (-all).',
      '~': 'Accepteert e-mail van niet-vermelde servers maar markeert deze als verdacht (~all).',
      '?': 'Hanteert een neutraal standpunt voor niet-vermelde servers (?all).',
      '+': 'Stelt elke server op internet in staat namens u te verzenden (+all).',
    },
    server: (address) => `de server met IP-adres ${address}`,
    ip4Range: (address, cidr, count) => `de ${count} IPv4-adressen in ${address}/${cidr}`,
    ip6Range: (address, cidr) => `de IPv6-reeks ${address}/${cidr}`,
    a: (domain, cidr) => `de servers op de IP-adressen van ${domain}${cidr ? ` (${cidr})` : ''}`,
    mx: (domain) => `de inkomende mailservers (MX) van ${domain}`,
    include: (domain, service) =>
      `de mailservers van ${domain}${service ? ` (${service})` : ''}`,
    ptr: (domain) => `servers waarvan de reverse DNS overeenkomt met ${domain}`,
    existsMacro: 'Voert een dynamische macro-zoekopdracht uit.',
    exists: (domain) => `Controleert of ${domain} naar een geldig IP-adres verwijst.`,
    sentence: (subject, qualifier, single) => {
      const verb = single ? 'is' : 'zijn'
      if (qualifier === '+') return `E-mail vanaf ${subject} ${verb} toegestaan.`
      if (qualifier === '-') return `E-mail vanaf ${subject} ${verb} geweigerd.`
      if (qualifier === '~') return `E-mail vanaf ${subject} krijgt een softfail.`
      return `E-mail vanaf ${subject} krijgt een neutraal resultaat.`
    },
  },
  nearMissTitle: 'Lijkend record gedetecteerd',
  nearMissSpf2: 'U gebruikt spf2.0 (Sender ID), wat verouderd is. Gebruik v=spf1.',
  nearMissOther: 'Dit TXT-record lijkt op SPF maar begint niet met v=spf1.',
  noMx: '{domain} heeft geen MX-records. Publiceer {record} als dit domein nooit e-mail verzendt.',
  createFor: (domain) => `Record aanmaken voor ${domain}`,
  fixInCreator: 'Aanpassen in de generator',
  answeredBy: 'Beantwoord door',
  publicDns: 'Publieke DNS',
  ctaTitle: 'SPF controleert de server, niet de mailbox',
  ctaText: 'Een correct SPF-record voorkomt niet dat e-mails bouncen naar onbestaande adressen. Controleer adressen vooraf.',
  ctaButton: 'E-mailadres controleren',
  ctaHref: '/nl/mailadres-controleren',

  domainStep: 'Je domeinnaam',
  loadButton: 'Huidig record laden',
  loadHelp: 'Als je domein al een SPF-record heeft, laad het dan in en voeg de nieuwe verzender toe. Je kunt deze stap ook overslaan.',
  load: {
    nxdomain: (domain: string) => `${domain} bestaat niet in DNS. Controleer de spelling.`,
    none: (domain: string) => `${domain} heeft nog geen SPF-record. Kies hieronder je verzenders om er een aan te maken.`,
    redirect: (domain: string, record: string) =>
      `Het SPF-record van ${domain} gebruikt een redirect (${record}). Pas dat record rechtstreeks aan.`,
    loaded: ({ domain, multiple, changedAll }: { domain: string; multiple: boolean; changedAll: boolean }) =>
      `We hebben het huidige record van ${domain} geladen. Voeg verzenders toe of verwijder ze, en vervang het oude record door het nieuwe.${
        multiple ? ' Het domein heeft meerdere SPF-records; we hebben het eerste geladen. Verwijder de overige zodra je deze publiceert.' : ''
      }${changedAll ? ' Het einde was geen ~all of -all, daarom hebben we het aangepast naar ~all.' : ''}`,
  },
  sendersStep: 'Welke diensten verzenden e-mail namens uw domein?',
  sendersHelp: 'Vink elke dienst aan. Het getal geeft aan hoeveel van de 10 toegestane zoekopdrachten worden verbruikt.',
  groupMailbox: 'E-mailproviders',
  groupService: 'Marketing-, transactionele en supporttools',
  unneededInline: (subdomainOnly) => `{include} ({name}) is meestal niet nodig${subdomainOnly ? ' op een hoofddomein' : ''}. {reason}`,
  unneeded: ({ include, name, subdomainOnly, reason, cost }) =>
    `include:${include} (${name}) is meestal niet nodig${subdomainOnly ? ' op een hoofddomein' : ''}. ${reason} Verwijderen bespaart ${cost} zoekopdracht${cost > 1 ? 'en' : ''}.`,
  unneededSummary: 'Gebruikt u Mailchimp, SendGrid of Brevo? Vaak is hiervoor geen include op het hoofddomein vereist.',
  otherLabel: 'Andere niet-vermelde dienst',
  otherPlaceholder: 'spf.voorbeeld-dienst.nl',
  addButton: 'Toevoegen',
  otherHelp: 'Kopieer de include-waarde uit de handleiding van uw dienst.',
  ownServer: 'Verzendt u ook vanaf uw eigen server?',
  ipsLabel: 'IP-adressen van verzendende servers',
  ipsPlaceholder: '192.0.2.10\n198.51.100.0/24\n2001:db8::/32',
  ipsHelp: 'Eén adres of CIDR-reeks per regel (IPv4 of IPv6).',
  aLabel: 'De webserver van mijn domein verzendt e-mail',
  aHelp: 'Voegt het a-mechanisme toe (kost 1 zoekopdracht).',
  mxLabel: 'Mijn inkomende mailservers (MX) verzenden ook e-mail',
  mxHelp: 'Voegt het mx-mechanisme toe (kost 1 zoekopdracht). Niet nodig voor Google Workspace of Microsoft 365.',
  keptTitle: 'Behouden uit uw huidige record',
  remove: (term) => `Verwijder ${term}`,
  allStep: 'Wat moet er gebeuren met e-mail van niet-vermelde servers?',
  softFail: {
    title: 'Softfail (~all)',
    text: 'Aanbevolen door Google: niet-vermelde e-mails worden geaccepteerd maar als verdacht gemarkeerd.',
  },
  fail: {
    title: 'Weigeren (-all)',
    text: 'Strikte weigering. Aanbevolen zodra DKIM en DMARC volledig functioneren.',
  },
  recordTitle: 'Uw gegenereerde SPF-record',
  recordHelp: 'Voeg dit toe als TXT-record in het DNS-beheer van uw domein.',
  typeLabel: 'Type',
  nameLabel: 'Naam / Host',
  nameHelp: 'Sommige providers vereisen @ of laten dit veld leeg.',
  valueLabel: 'TXT-waarde',
  draftLookups: (n, limit) => `${n} van ${limit} DNS-zoekopdrachten gebruikt`,
  counting: 'Zoekopdrachten tellen...',
  noSenders: 'Geen afzenders gekozen. Zonder afzenders mag geen enkele server e-mail namens het domein versturen.',
  neverSends: 'Dit domein verzendt nooit e-mail',
  draftError: 'Kon DNS-diensten niet bereiken om zoekopdrachten te tellen.',
  howTitle: 'Hoe voeg je het toe',
  howSteps: [
    'Log in waar je het DNS van je domein beheert. Dit is meestal het bedrijf waar je het domein hebt geregistreerd.',
    'Zoek een TXT-record dat begint met v=spf1. Vervang de waarde door het bovenstaande record als het al bestaat. Maak geen tweede SPF-record aan, want twee records maken SPF voor al je e-mail ongeldig.',
    'Is er nog geen record, voeg dan een nieuw TXT-record toe met de bovenstaande naam en waarde en sla op.',
  ],
  howLast: 'Wacht enkele minuten en {check}. Stel ook DKIM en DMARC in met de {dkim} en de {dmarc}.',
  checkPublished: 'controleer het gepubliceerde record',
  dkimLabel: 'DKIM-generator',
  dkimHref: '/dkim-generator',
  dmarcLabel: 'DMARC-generator',
  dmarcHref: '/dmarc-generator',
  issues: {
    'bad-syntax': (p) => `"${p.raw}" bevat een SPF-syntaxisfout.`,
    'bad-syntax-percent': (p) => `"${p.raw}" bevat een %-teken dat geen geldige macro is.`,
    'duplicate-modifier': (p) => `Modifier ${p.name} is dubbel gedefinieerd.`,
    'empty-modifier': (p) => `"${p.raw}" is een modifier zonder waarde.`,
    'equals-not-colon': (p) => `"${p.raw}" gebruikt "=" in plaats van ":". Schrijf "${p.name}:${p.value}".`,
    'unknown-term': (p) => `"${p.raw}" is geen herkend SPF-mechanisme of modifier.`,
    'bad-ip': (p) => `"${p.raw}" bevat geen geldig ${p.family}-adres.`,
    'bad-cidr': (p) => `"${p.raw}" overschrijdt het maximale CIDR-masker (max /${p.max}).`,
    'after-all': () => 'Er staan mechanismen na "all"; deze worden genegeerd.',
    'include-plus-all': () => 'Een include eindigt op +all, waardoor alle bescherming vervalt.',
    'long-record': (p) => `Het record telt ${p.length} tekens en overschrijdt de aanbevolen limiet.`,
    macro: (p) => `Include ${p.target} maakt gebruik van dynamische macro's.`,
    'macro-exists': (p) => `"${p.raw}" gebruikt macro's met het exists-mechanisme.`,
    loop: (p) => `Oneindige lus in includes ontdekt: ${p.chain} -> ${p.target}.`,
    'too-deep': (p) => `De keten van includes overschrijdt de maximale diepte van ${p.limit} niveaus.`,
    temperror: (p) => `DNS-server reageerde niet voor ${p.target}.`,
    'temperror-term': (p) => `Kon mechanisme "${p.raw}" niet controleren voor ${p.target}.`,
    'include-no-spf': (p) => `Opgenomen domein ${p.target} heeft geen geldig SPF-record.`,
    'redirect-no-spf': (p) => `redirect=${p.target} verwijst naar een domein zonder SPF-record.`,
    multiple: (p) => `${p.target} publiceert ${p.count} SPF-records. RFC 7208 staat exact één record toe.`,
    'multiple-included': (p) => `Opgenomen domein ${p.target} heeft ${p.count} SPF-records.`,
    'void-a': (p) => `"${p.raw}" vindt geen IP-adres voor ${p.target} (lege zoekopdracht).`,
    'void-mx': (p) => `"${p.raw}" vindt geen MX-servers voor ${p.target} (lege zoekopdracht).`,
    'mx-over-10': (p) => `${p.target} heeft ${p.count} MX-records, wat het maximum van 10 overschrijdt.`,
    ptr: (p) => `"${p.raw}" gebruikt ptr, wat door RFC 7208 sterk wordt afgeraden.`,
    exists: (p) => `"${p.raw}" controleert of ${p.target} bestaat.`,
    'redirect-ignored': () => 'Het record bevat zowel all als een redirect. De redirect wordt genegeerd.',
    'plus-all': () => '"+all" geeft elke server ter wereld toestemming om namens u te mailen. Wijzig in ~all of -all.',
    'neutral-all': () => '"?all" is neutraal en biedt geen bescherming tegen spoofing.',
    'no-all': () => 'Het record eindigt niet op all. Voeg ~all of -all toe.',
    'too-many-lookups': (p) => `Het record vereist ${p.lookups} DNS-zoekopdrachten; de limiet is ${p.limit}.`,
    'near-limit': (p) => `Alle ${p.limit} toegestane zoekopdrachten zijn in gebruik.`,
    'near-limit-one-left': (p) => `Het record gebruikt ${p.lookups} van de ${p.limit} zoekopdrachten. Er is nog slechts 1 over.`,
    'too-many-voids': (p) => `${p.voids} lege zoekopdrachten gevonden; dit kan leiden tot SPF-weigering.`,
  },
  failures: {
    'no-answer': 'DNS gaf geen antwoord',
    nxdomain: 'domein bestaat niet',
    'no-spf': 'geen SPF-record',
    multiple: 'meerdere SPF-records',
  },
  senderNames: {
    'zoho.com': 'Zoho Mail (oude include)',
    'zohomail.eu': 'Zoho Mail (EU)',
    'zoho.eu': 'Zoho Mail (EU, oude include)',
    'eu.mailgun.org': 'Mailgun (EU)',
  },
  senderNotes: {
    'Zoho Mail': 'Europese accounts gebruiken zohomail.eu.',
    Mailgun: 'Bij verzenden vanaf een subdomein (zoals mg.domein.nl) voegt u de include daar toe.',
  },
  notNeededReasons: {
    Mailchimp: 'Mailchimp configureert authenticatie via CNAME-records voor DKIM.',
    Postmark: 'Postmark gebruikt zijn eigen Return-Path-domein.',
    Brevo: 'Brevo vereist geen SPF-record op het hoofddomein behalve bij dedicated IP.',
    Klaviyo: 'Klaviyo vereist geen SPF-include op het hoofddomein.',
    SendGrid: 'SendGrid plaatst SPF op een specifiek subdomein tijdens domeinauthenticatie.',
    'Amazon SES': 'SES vereist dit alleen op een aangepast MAIL FROM-subdomein.',
  },
}

const plTool: SpfToolStrings = {
  wideCostColumn: true,
  tabsLabel: 'Tryb narzędzia SPF',
  tabCheck: 'Sprawdź',
  tabCheckMore: ' rekord SPF',
  tabCreate: 'Wygeneruj',
  tabCreateMore: ' rekord SPF',

  label: 'Domena lub adres e-mail',
  placeholder: 'przyklad.pl',
  button: 'Sprawdź rekord SPF',
  tryLabel: 'Przykłady:',
  inputEmpty: 'Wpisz domenę, np. przyklad.pl.',
  inputInvalid: 'To nie wygląda na poprawną domenę. Wpisz np. przyklad.pl.',
  lookupError: 'Nie udało się połączyć z serwerami DNS. Sprawdź połączenie i spróbuj ponownie.',
  noAnswer: ({ domain }) =>
    `${domain ? `Serwery DNS domeny ${domain} nie odpowiedziały.` : 'Serwery DNS nie odpowiedziały.'} Serwery odbiorców otrzymują błąd tymczasowy (temperror). Spróbuj ponownie za kilka minut.`,

  summary: {
    valid: (p) => {
      const all =
        p.allQualifier === '-'
          ? ' Poczta z nieuwzględnionych serwerów jest odrzucana (fail).'
          : p.allQualifier === '~'
            ? ' Poczta z nieuwzględnionych serwerów otrzymuje ostrzeżenie (softfail).'
            : ''
      return {
        title: `${p.domain} ma poprawny rekord SPF`,
        text: `Wykorzystuje ${p.lookups} z ${p.limit} dozwolonych zapytań DNS.${all}`,
      }
    },
    warnings: (p) => ({
      title: `${p.domain} ma działający rekord SPF z ostrzeżeniami`,
      text: `Serwery odbiorców mogą go przetworzyć, ale poniższe uwagi mogą powodować problemy w przyszłości. Używa ${p.lookups} z ${p.limit} dozwolonych zapytań.`,
    }),
    broken: (p) => ({
      title: `Rekord SPF domeny ${p.domain} jest uszkodzony`,
      text: 'Serwery odbiorców traktują ten rekord jako trwały błąd (permerror), powodując odrzucenie SPF dla Twojej poczty. Wymagane poprawki wymieniono poniżej.',
    }),
    unprotected: (p) => ({
      title: `Rekord SPF domeny ${p.domain} nie zapewnia ochrony`,
      text: `Reguła +all pozwala każdemu serwerowi w internecie na podszywanie się pod domenę ${p.domain}.`,
    }),
    none: (p) => ({
      title: `${p.domain} nie posiada rekordu SPF`,
      text: 'Serwery pocztowe nie mają możliwości weryfikacji serwerów uprawnionych do nadawania poczty w jej imieniu.',
    }),
    nxdomain: (p) => ({ title: `${p.domain} nie istnieje`, text: 'W systemie DNS nie znaleziono wpisów dla tej domeny. Sprawdź pisownię.' }),
  },
  recordFor: (domain) => `Rekord SPF dla ${domain}`,
  copy: 'Kopiuj',
  copied: 'Skopiowano',
  lookupsMeter: 'Zapytania DNS',
  lookupsMeterNote: 'include, a, mx, ptr, exists oraz redirect kosztują po 1 zapytaniu DNS.',
  voidMeter: 'Puste zapytania (void lookups)',
  voidMeterNote: 'Zapytania niekończące się adresem IP. Więcej niż 2 może unieważnić SPF.',
  meterOf: (limit) => `z ${limit}`,
  unlisted: 'Niewymienione serwery',
  allLabel: { '-': 'Odrzucenie (fail)', '~': 'Częściowe odrzucenie (softfail)', '?': 'Neutralny', '+': 'Zezwolono (niebezpieczne)' },
  allNotSet: 'Nieustawione',
  allSetBy: (q) => `Określone przez ${q}all na końcu rekordu.`,
  allMissing: 'Rekord nie kończy się dyrektywą all; nieuwzględnione serwery otrzymają status neutralny.',
  fixTitle: 'Co należy naprawić',
  notesTitle: 'Uwagi techniczne',
  inDomain: (domain) => `w ${domain}`,
  thPart: 'Element',
  thMeaning: 'Znaczenie',
  thCost: 'Koszt DNS',
  partsTitle: 'Co oznacza każdy element',
  lookups: (n) => `${n} ${n === 1 ? 'zapytanie' : n >= 2 && n <= 4 ? 'zapytania' : 'zapytań'}`,
  vSpf1: 'Wskazuje, że jest to rekord SPF w wersji 1.',
  showContents: (domain) => `Pokaż zawartość ${domain}`,
  hideContents: (domain) => `Ukryj zawartość ${domain}`,
  describe: {
    redirect: (domain) => `Przekazuje pełną politykę SPF do domeny ${domain}.`,
    exp: 'Wskazuje na rekord TXT z wyjaśnieniem w przypadku odrzucenia wiadomości.',
    unknownModifier: 'Nierozpoznany modyfikator ignorowany przez serwery odbiorcze.',
    all: {
      '-': 'Odrzuca pocztę ze wszystkich niewymienionych serwerów (-all).',
      '~': 'Akceptuje pocztę z niewymienionych serwerów, oznaczając ją jako podejrzaną (~all).',
      '?': 'Traktuje nieuwzględnione serwery jako neutralne (?all).',
      '+': 'Pozwala dowolnemu serwerowi wysyłać pocztę w Twoim imieniu (+all).',
    },
    server: (address) => `serwer o adresie IP ${address}`,
    ip4Range: (address, cidr, count) => `zakres ${count} adresów IPv4 ${address}/${cidr}`,
    ip6Range: (address, cidr) => `zakres IPv6 ${address}/${cidr}`,
    a: (domain, cidr) => `serwery powiązane z adresem IP domeny ${domain}${cidr ? ` (${cidr})` : ''}`,
    mx: (domain) => `serwery odbiorcze poczty (MX) domeny ${domain}`,
    include: (domain, service) =>
      `serwery pocztowe domeny ${domain}${service ? ` (${service})` : ''}`,
    ptr: (domain) => `serwery, których odwrotny DNS pasuje do ${domain}`,
    existsMacro: 'Wykonuje dynamiczne sprawdzenie istnienia rekordu DNS za pomocą makra.',
    exists: (domain) => `Sprawdza, czy ${domain} rozwiązuje się na poprawny adres IP.`,
    sentence: (subject, qualifier, single) => {
      const verb = single ? 'jest' : 'są'
      if (qualifier === '+') return `Poczta z ${subject} ${verb} autoryzowana.`
      if (qualifier === '-') return `Poczta z ${subject} ${verb} odrzucana.`
      if (qualifier === '~') return `Poczta z ${subject} otrzymuje status softfail.`
      return `Poczta z ${subject} otrzymuje wynik neutralny.`
    },
  },
  nearMissTitle: 'Wykryto zbliżony rekord',
  nearMissSpf2: 'Używasz przestarzałego formatu spf2.0 (Sender ID). Użyj v=spf1.',
  nearMissOther: 'Ten rekord TXT przypomina SPF, lecz nie zaczyna się od v=spf1.',
  noMx: 'Domena {domain} nie posiada rekordów MX. Jeśli nie wysyła poczty, dodaj {record}.',
  createFor: (domain) => `Utwórz rekord dla ${domain}`,
  fixInCreator: 'Dostosuj w generatorze',
  answeredBy: 'Odpowiedź z',
  publicDns: 'Publiczny DNS',
  ctaTitle: 'SPF weryfikuje serwer, a nie skrzynkę pocztową',
  ctaText: 'Poprawny rekord SPF nie uchroni Cię przed odbiciami, jeśli adres odbiorcy nie istnieje. Sprawdź listę przed wysyłką.',
  ctaButton: 'Sprawdź adres e-mail',
  ctaHref: '/pl/weryfikator-email',

  domainStep: 'Twoja domena',
  loadButton: 'Wczytaj obecny rekord',
  loadHelp: 'Jeśli Twoja domena posiada już rekord SPF, wczytaj go i dodaj nowego nadawcę. Możesz też pominąć ten krok.',
  load: {
    nxdomain: (domain: string) => `${domain} nie istnieje w DNS. Sprawdź pisownię.`,
    none: (domain: string) => `${domain} nie posiada jeszcze rekordu SPF. Wybierz nadawców poniżej, aby go utworzyć.`,
    redirect: (domain: string, record: string) =>
      `Rekord SPF domeny ${domain} korzysta z redirect (${record}). Edytuj bezpośrednio rekord wskazanej domeny.`,
    loaded: ({ domain, multiple, changedAll }: { domain: string; multiple: boolean; changedAll: boolean }) =>
      `Wczytano bieżący rekord domeny ${domain}. Dodaj lub usuń nadawców, a następnie zastąp stary wpis nowym.${
        multiple ? ' Domena ma więcej niż jeden rekord SPF, załadowano pierwszy. Usuń pozostałe po opublikowaniu tego wpisu.' : ''
      }${changedAll ? ' Zakończenie nie było ani ~all ani -all, zmieniono je na ~all.' : ''}`,
  },
  sendersStep: 'Które serwisy wysyłają wiadomości e-mail z Twojej domeny?',
  sendersHelp: 'Zaznacz wszystkie używane narzędzia. Liczba oznacza, ile z 10 zapytań DNS zużywa dane narzędzie.',
  groupMailbox: 'Poczta firmowa',
  groupService: 'Narzędzia marketingowe, transakcyjne i helpdesk',
  unneededInline: (subdomainOnly) => `Wpis {include} ({name}) zazwyczaj nie jest potrzebny${subdomainOnly ? ' na domenie głównej' : ''}. {reason}`,
  unneeded: ({ include, name, subdomainOnly, reason, cost }) =>
    `include:${include} (${name}) zazwyczaj nie jest potrzebny${subdomainOnly ? ' na domenie głównej' : ''}. ${reason} Usunięcie go zwolni ${cost} zapytani${cost === 1 ? 'e' : cost >= 2 && cost <= 4 ? 'a' : 'e'}.`,
  unneededSummary: 'Korzystasz z Mailchimp, SendGrid lub Brevo? Zazwyczaj nie wymagają wpisu include na domenie głównej.',
  otherLabel: 'Inny niewymieniony serwis',
  otherPlaceholder: 'spf.serwis-przyklad.pl',
  addButton: 'Dodaj',
  otherHelp: 'Skopiuj wartość include z oficjalnej dokumentacji dostawcy.',
  ownServer: 'Czy wysyłasz również z własnego serwera?',
  ipsLabel: 'Adresy IP serwerów nadawczych',
  ipsPlaceholder: '192.0.2.10\n198.51.100.0/24\n2001:db8::/32',
  ipsHelp: 'Jeden adres lub zakres CIDR w wierszu (IPv4 lub IPv6).',
  aLabel: 'Serwer www mojej domeny wysyła maile',
  aHelp: 'Dodaje adres IP samej domeny (mechanizm a, 1 zapytanie DNS).',
  mxLabel: 'Moje serwery pocztowe MX również wysyłają maile',
  mxHelp: 'Dodaje serwery MX (1 zapytanie DNS). Niewymagane dla Google Workspace ani Microsoft 365.',
  keptTitle: 'Zachowane z dotychczasowego rekordu',
  remove: (term) => `Usuń ${term}`,
  allStep: 'Co powinno stać się z pocztą z nieuwzględnionych serwerów?',
  softFail: {
    title: 'Częściowe odrzucenie (~all)',
    text: 'Zalecane przez Google: wiadomości są doręczane, lecz oznaczane jako podejrzane.',
  },
  fail: {
    title: 'Odrzucenie (-all)',
    text: 'Rygorystyczne odrzucenie. Zalecane po poprawnym skonfigurowaniu DKIM i DMARC.',
  },
  recordTitle: 'Twój wygenerowany rekord SPF',
  recordHelp: 'Wklej poniższą wartość jako rekord TXT w strefie DNS domeny.',
  typeLabel: 'Typ',
  nameLabel: 'Nazwa / Host',
  nameHelp: 'Niektóre panele DNS wymagają wpisania @ lub pozostawienia pustego pola.',
  valueLabel: 'Wartość TXT',
  draftLookups: (n, limit) => `Wykorzystano ${n} z ${limit} zapytań DNS`,
  counting: 'Przeliczanie zapytań DNS...',
  noSenders: 'Nie wybrano żadnych serwisów. Rekord bez nadawców zabrania wysyłania jakiejkolwiek poczty z domeny.',
  neverSends: 'Ta domena nigdy nie wysyła poczty',
  draftError: 'Nie udało się połączyć z DNS, aby policzyć zapytania.',
  howTitle: 'Jak dodać rekord',
  howSteps: [
    'Zaloguj się do panelu zarządzania DNS swojej domeny. Zazwyczaj jest to firma, w której domena została kupiona.',
    'Znajdź rekord TXT zaczynający się od v=spf1. Jeśli istnieje, zastąp jego wartość powyższym wpisem. Nie dodawaj drugiego rekordu SPF, ponieważ dwa rekordy unieważniają SPF dla całej Twojej poczty.',
    'Jeśli rekord nie istnieje, utwórz nowy rekord TXT z powyższą nazwą i wartością, a następnie zapisz zmiany.',
  ],
  howLast: 'Odczekaj kilka minut, a następnie {check}. Skonfiguruj również DKIM i DMARC za pomocą {dkim} i {dmarc}.',
  checkPublished: 'sprawdź opublikowany rekord',
  dkimLabel: 'generatora DKIM',
  dkimHref: '/dkim-generator',
  dmarcLabel: 'generatora DMARC',
  dmarcHref: '/dmarc-generator',
  issues: {
    'bad-syntax': (p) => `"${p.raw}" zawiera błąd składniowy SPF.`,
    'bad-syntax-percent': (p) => `"${p.raw}" zawiera znak %, który nie jest poprawną makrodefinicją.`,
    'duplicate-modifier': (p) => `Modyfikator ${p.name} został zdefiniowany wielokrotnie.`,
    'empty-modifier': (p) => `"${p.raw}" to modyfikator pozbawiony wartości.`,
    'equals-not-colon': (p) => `"${p.raw}" stosuje "=" zamiast ":". Zapisz jako "${p.name}:${p.value}".`,
    'unknown-term': (p) => `"${p.raw}" nie jest rozpoznawanym mechanizmem ani modyfikatorem SPF.`,
    'bad-ip': (p) => `"${p.raw}" nie jest poprawnym adresem ${p.family}.`,
    'bad-cidr': (p) => `"${p.raw}" przekracza maksymalną maskę CIDR (/${p.max}).`,
    'after-all': () => 'Mechanizmy umieszczone za dyrektywą all zostaną zignorowane.',
    'include-plus-all': () => 'Dołączony rekord include kończy się dyrektywą +all, niwecząc ochronę.',
    'long-record': (p) => `Rekord liczy ${p.length} znaków, przekraczając zalecaną długość.`,
    macro: (p) => `Wpis include ${p.target} stosuje dynamiczne makra DNS.`,
    'macro-exists': (p) => `"${p.raw}" stosuje makra w połączeniu z exists.`,
    loop: (p) => `Wykryto zapętlenie w dyrektywach include: ${p.chain} -> ${p.target}.`,
    'too-deep': (p) => `Zagnieżdżenie dyrektyw include przekracza maksymalny poziom ${p.limit}.`,
    temperror: (p) => `Brak odpowiedzi DNS dla ${p.target}.`,
    'temperror-term': (p) => `Nie udało się sprawdzić mechanizmu "${p.raw}" dla ${p.target}.`,
    'include-no-spf': (p) => `Dołączona domena ${p.target} nie posiada rekordu SPF.`,
    'redirect-no-spf': (p) => `redirect=${p.target} wskazuje na domenę bez rekordu SPF.`,
    multiple: (p) => `${p.target} publikuje ${p.count} rekordy SPF. RFC 7208 dopuszcza ściśle jeden rekord.`,
    'multiple-included': (p) => `Dołączona domena ${p.target} posiada ${p.count} rekordy SPF.`,
    'void-a': (p) => `"${p.raw}" nie zwraca adresu IP dla ${p.target} (puste zapytanie).`,
    'void-mx': (p) => `"${p.raw}" nie odnajduje serwerów MX dla ${p.target} (puste zapytanie).`,
    'mx-over-10': (p) => `${p.target} posiada ${p.count} serwerów MX, przekraczając dopuszczalny limit 10.`,
    ptr: (p) => `"${p.raw}" stosuje mechanizm ptr, stanowczo odradzany przez RFC 7208.`,
    exists: (p) => `"${p.raw}" odpytuje exists dla domeny ${p.target}.`,
    'redirect-ignored': () => 'Rekord łączy dyrektywę all oraz redirect. Redirect zostanie zignorowany.',
    'plus-all': () => '"+all" uprawnia każdy serwer na świecie do wysyłki w Twoim imieniu. Zmień na ~all lub -all.',
    'neutral-all': () => '"?all" jest neutralny i nie chroni domeny przed podszywaniem się.',
    'no-all': () => 'Rekord nie kończy się dyrektywą all. Dodaj ~all lub -all na końcu.',
    'too-many-lookups': (p) => `Rekord wymaga ${p.lookups} zapytań DNS; limit wynosi ${p.limit}.`,
    'near-limit': (p) => `Wykorzystano limit ${p.limit} zapytań DNS. Kolejny include spowoduje permerror.`,
    'near-limit-one-left': (p) => `Rekord zużywa ${p.lookups} z ${p.limit} zapytań DNS. Pozostało tylko 1 zapytanie.`,
    'too-many-voids': (p) => `Wykryto ${p.voids} pustych zapytań; może to doprowadzić do błędu SPF.`,
  },
  failures: {
    'no-answer': 'DNS nie odpowiedział',
    nxdomain: 'domena nie istnieje',
    'no-spf': 'brak rekordu SPF',
    multiple: 'wiele rekordów SPF',
  },
  senderNames: {
    'zoho.com': 'Zoho Mail (starszy include)',
    'zohomail.eu': 'Zoho Mail (UE)',
    'zoho.eu': 'Zoho Mail (UE, starszy include)',
    'eu.mailgun.org': 'Mailgun (UE)',
  },
  senderNotes: {
    'Zoho Mail': 'Konta w Europie stosują zohomail.eu.',
    Mailgun: 'W przypadku wysyłki z subdomeny (np. mg.twojadomena.pl) dodaj include w tej subdomenie.',
  },
  notNeededReasons: {
    Mailchimp: 'Mailchimp konfiguruje autoryzację za pomocą rekordów CNAME dla DKIM.',
    Postmark: 'Postmark realizuje wysyłkę z własnej domeny Return-Path.',
    Brevo: 'Brevo nie wymaga rekordu SPF na domenie głównej (chyba że posiadasz dedykowany adres IP).',
    Klaviyo: 'Klaviyo nie wymaga dodawania include SPF na domenie głównej.',
    SendGrid: 'SendGrid konfiguruje SPF na dedykowanej subdomenie podczas uwierzytelniania.',
    'Amazon SES': 'SES wymaga SPF jedynie w przypadku niestandardowej subdomeny MAIL FROM.',
  },
}

const idTool: SpfToolStrings = {
  wideCostColumn: true,
  tabsLabel: 'Mode alat SPF',
  tabCheck: 'Cek',
  tabCheckMore: ' Record SPF',
  tabCreate: 'Buat',
  tabCreateMore: ' Record SPF',

  label: 'Domain atau alamat email',
  placeholder: 'contoh.id',
  button: 'Cek Record SPF',
  tryLabel: 'Contoh:',
  inputEmpty: 'Masukkan nama domain, seperti contoh.id.',
  inputInvalid: 'Itu tidak terlihat seperti domain yang valid. Masukkan nama seperti contoh.id.',
  lookupError: 'Kami tidak dapat menghubungi layanan DNS. Periksa koneksi Anda dan coba lagi.',
  noAnswer: ({ domain }) =>
    `${domain ? `Server DNS ${domain} tidak merespons.` : 'Server DNS tidak merespons.'} Server penerima saat ini mendapatkan error sementara (temperror). Coba lagi dalam beberapa menit.`,

  summary: {
    valid: (p) => {
      const all =
        p.allQualifier === '-'
          ? ' Email dari server yang tidak terdaftar akan ditolak (fail).'
          : p.allQualifier === '~'
            ? ' Email dari server yang tidak terdaftar akan ditandai mencurigakan (softfail).'
            : ''
      return {
        title: `${p.domain} memiliki record SPF yang valid`,
        text: `Record ini menggunakan ${p.lookups} dari batas ${p.limit} kueri DNS yang diizinkan.${all}`,
      }
    },
    warnings: (p) => ({
      title: `${p.domain} memiliki record SPF yang berfungsi dengan peringatan`,
      text: `Server penerima dapat memprosesnya, tetapi peringatan di bawah ini dapat menimbulkan kendala. Record ini memakai ${p.lookups} dari ${p.limit} kueri DNS yang diizinkan.`,
    }),
    broken: (p) => ({
      title: `Record SPF ${p.domain} bermasalah`,
      text: 'Server penerima menganggap record ini sebagai error permanen (permerror), sehingga SPF gagal untuk semua email Anda. Perbaikan yang diperlukan tertera di bawah.',
    }),
    unprotected: (p) => ({
      title: `Record SPF ${p.domain} tidak melindungi domain`,
      text: `Mekanisme +all mengizinkan semua server di internet untuk mengirimkan email atas nama ${p.domain}.`,
    }),
    none: (p) => ({
      title: `${p.domain} tidak memiliki record SPF`,
      text: 'Server email penerima tidak dapat mengetahui server mana saja yang berhak mengirim email atas nama domain ini.',
    }),
    nxdomain: (p) => ({ title: `${p.domain} tidak ditemukan`, text: 'DNS tidak memiliki data untuk domain ini. Periksa kembali ejaan Anda.' }),
  },
  recordFor: (domain) => `Record SPF untuk ${domain}`,
  copy: 'Salin',
  copied: 'Tersalin',
  lookupsMeter: 'Kueri DNS',
  lookupsMeterNote: 'include, a, mx, ptr, exists, dan redirect masing-masing dihitung 1 kueri DNS.',
  voidMeter: 'Kueri kosong (void lookups)',
  voidMeterNote: 'Kueri tanpa alamat IP. Lebih dari 2 kueri kosong dapat menggagalkan evaluasi SPF.',
  meterOf: (limit) => `dari ${limit}`,
  unlisted: 'Server tidak terdaftar',
  allLabel: { '-': 'Tolak (fail)', '~': 'Softfail', '?': 'Netral', '+': 'Diizinkan (tidak aman)' },
  allNotSet: 'Belum diatur',
  allSetBy: (q) => `Ditetapkan oleh ${q}all di akhir record.`,
  allMissing: 'Record tidak diakhiri dengan all; server tidak terdaftar mendapat status netral.',
  fixTitle: 'Masalah yang perlu diperbaiki',
  notesTitle: 'Catatan teknis',
  inDomain: (domain) => `pada ${domain}`,
  thPart: 'Bagian',
  thMeaning: 'Arti',
  thCost: 'Biaya DNS',
  partsTitle: 'Arti setiap bagian',
  lookups: (n) => `${n} kueri`,
  vSpf1: 'Menandai bahwa ini adalah record SPF versi 1.',
  showContents: (domain) => `Tampilkan isi ${domain}`,
  hideContents: (domain) => `Sembunyikan isi ${domain}`,
  describe: {
    redirect: (domain) => `Mengalihkan evaluasi kebijakan SPF sepenuhnya ke ${domain}.`,
    exp: 'Menunjuk ke record TXT dengan penjelasan jika pengiriman email ditolak.',
    unknownModifier: 'Modifier tak dikenal yang diabaikan oleh server penerima.',
    all: {
      '-': 'Menolak email dari server yang tidak terdaftar (-all).',
      '~': 'Menerima email dari server tidak terdaftar tetapi menandainya mencurigakan (~all).',
      '?': 'Memperlakukan server tidak terdaftar secara netral (?all).',
      '+': 'Mengizinkan server apa pun mengirimkan email atas nama Anda (+all).',
    },
    server: (address) => `server dengan alamat IP ${address}`,
    ip4Range: (address, cidr, count) => `rentang ${count} alamat IPv4 ${address}/${cidr}`,
    ip6Range: (address, cidr) => `rentang IPv6 ${address}/${cidr}`,
    a: (domain, cidr) => `server pada alamat IP domain ${domain}${cidr ? ` (${cidr})` : ''}`,
    mx: (domain) => `server penerima email (MX) domain ${domain}`,
    include: (domain, service) =>
      `server email dari ${domain}${service ? ` (${service})` : ''}`,
    ptr: (domain) => `server yang reverse DNS-nya cocok dengan ${domain}`,
    existsMacro: 'Memeriksa keberadaan record DNS dinamis via makro.',
    exists: (domain) => `Memeriksa apakah ${domain} menghasilkan alamat IP yang valid.`,
    sentence: (subject, qualifier, single) => {
      const verb = single ? 'adalah' : 'adalah'
      if (qualifier === '+') return `Email dari ${subject} diizinkan.`
      if (qualifier === '-') return `Email dari ${subject} ditolak.`
      if (qualifier === '~') return `Email dari ${subject} mendapat status softfail.`
      return `Email dari ${subject} mendapat status netral.`
    },
  },
  nearMissTitle: 'Record mirip terdeteksi',
  nearMissSpf2: 'Anda menggunakan spf2.0 (Sender ID) yang sudah usang. Gunakan v=spf1.',
  nearMissOther: 'Record TXT ini mirip SPF tetapi tidak dimulai dengan v=spf1.',
  noMx: '{domain} tidak memiliki record MX. Jika tidak mengirim email, gunakan {record}.',
  createFor: (domain) => `Buat record untuk ${domain}`,
  fixInCreator: 'Sesuaikan di generator',
  answeredBy: 'Dijawab oleh',
  publicDns: 'DNS Publik',
  ctaTitle: 'SPF memvalidasi server, bukan kotak surat',
  ctaText: 'Record SPF yang sempurna tidak mencegah email membal jika alamat penerima tidak aktif. Periksa alamat sebelum mengirim.',
  ctaButton: 'Periksa alamat email',
  ctaHref: '/id/cek-email-valid',

  domainStep: 'Domain Anda',
  loadButton: 'Muat record saat ini',
  loadHelp: 'Jika domain Anda sudah memiliki SPF record, muat record tersebut dan tambahkan pengirim baru ke dalamnya. Anda juga dapat melewati langkah ini.',
  load: {
    nxdomain: (domain: string) => `${domain} tidak ditemukan di DNS. Periksa kembali ejaannya.`,
    none: (domain: string) => `${domain} belum memiliki SPF record. Pilih pengirim di bawah untuk membuatnya.`,
    redirect: (domain: string, record: string) =>
      `SPF record ${domain} mengarahkan ke domain lain (${record}). Edit langsung record domain tujuan tersebut.`,
    loaded: ({ domain, multiple, changedAll }: { domain: string; multiple: boolean; changedAll: boolean }) =>
      `Kami telah memuat SPF record aktif dari ${domain}. Tambahkan atau hapus pengirim, lalu ganti record lama dengan yang baru.${
        multiple ? ' Domain memiliki lebih dari satu SPF record; kami memuat record pertama. Hapus record lainnya setelah memublikasikan record ini.' : ''
      }${changedAll ? ' Akhiran record bukan ~all atau -all, sehingga kami mengubahnya menjadi ~all.' : ''}`,
  },
  sendersStep: 'Layanan apa saja yang mengirim email dari domain Anda?',
  sendersHelp: 'Centang setiap layanan yang digunakan. Angka menunjukkan berapa dari 10 batas kueri DNS yang terpakai.',
  groupMailbox: 'Penyedia email',
  groupService: 'Alat pemasaran, transaksional, dan bantuan pelanggan',
  unneededInline: (subdomainOnly) => `{include} ({name}) biasanya tidak diperlukan${subdomainOnly ? ' pada domain utama' : ''}. {reason}`,
  unneeded: ({ include, name, subdomainOnly, reason, cost }) =>
    `include:${include} (${name}) biasanya tidak diperlukan${subdomainOnly ? ' pada domain utama' : ''}. ${reason} Menghapusnya menghemat ${cost} kueri.`,
  unneededSummary: 'Menggunakan SendGrid, Mailchimp, atau Brevo? Mereka sering kali tidak butuh include di domain utama.',
  otherLabel: 'Layanan lain yang tidak terdaftar',
  otherPlaceholder: 'spf.layanan-contoh.id',
  addButton: 'Tambah',
  otherHelp: 'Salin nilai include dari panduan resmi penyedia Anda.',
  ownServer: 'Apakah Anda juga mengirim dari server sendiri?',
  ipsLabel: 'Alamat IP server pengirim Anda',
  ipsPlaceholder: '192.0.2.10\n198.51.100.0/24\n2001:db8::/32',
  ipsHelp: 'Satu alamat atau rentang CIDR per baris (IPv4 atau IPv6).',
  aLabel: 'Server website domain saya mengirimkan email',
  aHelp: 'Menambahkan mekanisme a (memakai 1 kueri DNS).',
  mxLabel: 'Server email masuk (MX) saya juga mengirim email',
  mxHelp: 'Menambahkan mekanisme mx (memakai 1 kueri DNS). Tidak perlu untuk Google Workspace atau Microsoft 365.',
  keptTitle: 'Dipertahankan dari record lama',
  remove: (term) => `Hapus ${term}`,
  allStep: 'Apa yang harus dilakukan pada email dari server tidak terdaftar?',
  softFail: {
    title: 'Softfail (~all)',
    text: 'Direkomendasikan oleh Google: email tidak dikenal diterima namun ditandai mencurigakan.',
  },
  fail: {
    title: 'Tolak (-all)',
    text: 'Penolakan ketat. Disarankan jika DKIM dan DMARC sudah terkonfigurasi dengan baik.',
  },
  recordTitle: 'Record SPF yang Anda buat',
  recordHelp: 'Tambahkan sebagai record TXT pada pengaturan DNS domain Anda.',
  typeLabel: 'Tipe',
  nameLabel: 'Nama / Host',
  nameHelp: 'Beberapa DNS meminta @ atau mengosongkan kolom nama host.',
  valueLabel: 'Nilai TXT',
  draftLookups: (n, limit) => `${n} dari ${limit} kueri DNS digunakan`,
  counting: 'Menghitung kueri DNS...',
  noSenders: 'Belum ada pengirim dipilih. Record tanpa pengirim melarang semua server mengirim email untuk domain ini.',
  neverSends: 'Domain ini tidak pernah mengirim email',
  draftError: 'Tidak dapat menghubungi DNS untuk menghitung kueri.',
  howTitle: 'Cara menambahkannya',
  howSteps: [
    'Masuk ke tempat Anda mengelola DNS domain Anda. Biasanya ini adalah perusahaan tempat Anda membeli domain.',
    'Cari record TXT yang diawali dengan v=spf1. Jika ada, ganti nilainya dengan record di atas. Jangan menambahkan SPF record kedua, karena dua record akan membatalkan SPF untuk seluruh email Anda.',
    'Jika belum ada, tambahkan record TXT baru dengan nama dan nilai di atas, lalu simpan.',
  ],
  howLast: 'Tunggu beberapa menit, lalu {check}. Konfigurasikan juga DKIM dan DMARC menggunakan {dkim} dan {dmarc}.',
  checkPublished: 'periksa record yang telah dipublikasikan',
  dkimLabel: 'generator DKIM',
  dkimHref: '/dkim-generator',
  dmarcLabel: 'generator DMARC',
  dmarcHref: '/dmarc-generator',
  issues: {
    'bad-syntax': (p) => `"${p.raw}" memiliki kesalahan sintaksis SPF.`,
    'bad-syntax-percent': (p) => `"${p.raw}" memuat tanda % yang bukan makro valid.`,
    'duplicate-modifier': (p) => `Modifier ${p.name} didefinisikan ganda.`,
    'empty-modifier': (p) => `"${p.raw}" adalah modifier tanpa nilai.`,
    'equals-not-colon': (p) => `"${p.raw}" menggunakan "=" bukan ":". Tulis sebagai "${p.name}:${p.value}".`,
    'unknown-term': (p) => `"${p.raw}" bukan mekanisme atau modifier SPF yang valid.`,
    'bad-ip': (p) => `"${p.raw}" bukan alamat ${p.family} yang valid.`,
    'bad-cidr': (p) => `"${p.raw}" melampaui batas subnet CIDR maksimum (maks /${p.max}).`,
    'after-all': () => 'Terdapat mekanisme setelah kata all; mekanisme tersebut akan diabaikan.',
    'include-plus-all': () => 'Domain include diakhiri dengan +all, menghilangkan proteksi.',
    'long-record': (p) => `Panjang record mencapai ${p.length} karakter, melebihi batas yang disarankan.`,
    macro: (p) => `Include ${p.target} menggunakan makro dinamis.`,
    'macro-exists': (p) => `"${p.raw}" menggunakan makro dengan mekanisme exists.`,
    loop: (p) => `Perulangan tak terbatas pada include: ${p.chain} -> ${p.target}.`,
    'too-deep': (p) => `Rantai include melampaui batas kedalaman maksimum ${p.limit} tingkat.`,
    temperror: (p) => `Tidak ada respons DNS untuk ${p.target}.`,
    'temperror-term': (p) => `Gagal memeriksa mekanisme "${p.raw}" untuk ${p.target}.`,
    'include-no-spf': (p) => `Domain include ${p.target} tidak memiliki record SPF valid.`,
    'redirect-no-spf': (p) => `redirect=${p.target} mengarah ke domain tanpa record SPF.`,
    multiple: (p) => `${p.target} menerbitkan ${p.count} record SPF. RFC 7208 mewajibkan tepat satu record.`,
    'multiple-included': (p) => `Domain include ${p.target} memiliki ${p.count} record SPF.`,
    'void-a': (p) => `"${p.raw}" tidak menemukan IP untuk ${p.target} (kueri kosong).`,
    'void-mx': (p) => `"${p.raw}" tidak menemukan server MX untuk ${p.target} (kueri kosong).`,
    'mx-over-10': (p) => `${p.target} memiliki ${p.count} server MX, melebihi batas 10.`,
    ptr: (p) => `"${p.raw}" menggunakan ptr yang sangat tidak disarankan oleh RFC 7208.`,
    exists: (p) => `"${p.raw}" memeriksa exists untuk ${p.target}.`,
    'redirect-ignored': () => 'Record memuat all dan redirect sekaligus. Redirect akan diabaikan.',
    'plus-all': () => '"+all" mengizinkan siapa pun memalsukan domain Anda. Ganti ke ~all atau -all.',
    'neutral-all': () => '"?all" bersifat netral dan tidak memberi perlindungan dari pemalsuan email.',
    'no-all': () => 'Record tidak diakhiri dengan all. Tambahkan ~all atau -all di akhir.',
    'too-many-lookups': (p) => `Record memerlukan ${p.lookups} kueri DNS; batas maksimumnya adalah ${p.limit}.`,
    'near-limit': (p) => `Semua batas ${p.limit} kueri DNS telah terpakai.`,
    'near-limit-one-left': (p) => `Record menggunakan ${p.lookups} dari batas ${p.limit} kueri DNS. Hanya tersisa 1 kueri.`,
    'too-many-voids': (p) => `${p.voids} kueri kosong ditemukan; ini dapat menyebabkan kegagalan evaluasi SPF.`,
  },
  failures: {
    'no-answer': 'DNS tidak merespons',
    nxdomain: 'domain tidak ditemukan',
    'no-spf': 'tidak ada record SPF',
    multiple: 'memiliki lebih dari satu record SPF',
  },
  senderNames: {
    'zoho.com': 'Zoho Mail (include lama)',
    'zohomail.eu': 'Zoho Mail (UE)',
    'zoho.eu': 'Zoho Mail (UE, include lama)',
    'eu.mailgun.org': 'Mailgun (UE)',
  },
  senderNotes: {
    'Zoho Mail': 'Akun regional Eropa menggunakan zohomail.eu.',
    Mailgun: 'Jika mengirim dari subdomain seperti mg.domain.id, pasang include pada subdomain tersebut.',
  },
  notNeededReasons: {
    Mailchimp: 'Mailchimp mengelola otentikasi via record CNAME untuk DKIM.',
    Postmark: 'Postmark mengirim email dari domain Return-Path miliknya sendiri.',
    Brevo: 'Brevo tidak membutuhkan SPF pada domain utama kecuali menggunakan IP dedicated.',
    Klaviyo: 'Klaviyo tidak mewajibkan include SPF pada domain utama.',
    SendGrid: 'SendGrid memasang SPF pada subdomain khusus saat proses otentikasi domain.',
    'Amazon SES': 'SES hanya membutuhkannya jika Anda menyetel subdomain MAIL FROM kustom.',
  },
}

export const SPF_TOOL_STRINGS: Partial<Record<Locale, SpfToolStrings>> & { en: SpfToolStrings } = {
  en,
  de: deTool,
  it: itTool,
  'pt-br': ptBrTool,
  fr: frTool,
  es: esTool,
  nl: nlTool,
  pl: plTool,
  id: idTool,
}

export function spfToolStrings(locale: Locale): SpfToolStrings {
  return SPF_TOOL_STRINGS[locale] ?? en
}

const NO_VALUES: Required<SpfIssueParams> = {
  raw: '',
  target: '',
  name: '',
  value: '',
  family: 'IPv4',
  max: 0,
  count: 0,
  length: 0,
  lookups: 0,
  voids: 0,
  limit: 0,
  chain: [],
  missing: false,
}

/** The message to show for an issue: the core's English text, or the localized one by key. */
export function spfIssueText(t: SpfToolStrings, issue: SpfIssue): string {
  if (!t.issues) return issue.message
  const key = (issue.variant ? `${issue.code}-${issue.variant}` : issue.code) as SpfIssueKey
  const text = t.issues[key]
  // Issues the tool adds itself (unneeded-include) are already in the page's language.
  return text ? text({ ...NO_VALUES, ...issue.params, domain: issue.domain }) : issue.message
}

/** Why an include or redirect target failed: the core's English text, or the localized one. */
export function spfFailureText(t: SpfToolStrings, node: SpfNode): string {
  return (t.failures && node.failureKind && t.failures[node.failureKind]) || node.failure || ''
}

/** The service behind an include, if known, with localized wording where the name carries words. */
export function spfSenderName(t: SpfToolStrings, include: string): string | null {
  return t.senderNames?.[include.toLowerCase().replace(/\.$/, '')] ?? senderName(include)
}

export function spfSenderNote(t: SpfToolStrings, s: SpfSender): string | undefined {
  return (s.note && t.senderNotes?.[s.name]) || s.note
}

export function spfNotNeededReason(t: SpfToolStrings, u: SpfUnneeded): string {
  return t.notNeededReasons?.[u.name] ?? u.reason
}
