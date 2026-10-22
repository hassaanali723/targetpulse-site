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

export const SPF_TOOL_STRINGS: Partial<Record<Locale, SpfToolStrings>> & { en: SpfToolStrings } = { en, de: deTool, it: itTool, 'pt-br': ptBrTool }

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
