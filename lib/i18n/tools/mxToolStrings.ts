// Labels and messages of the MX lookup tool (components/tools/MxLookup/MxLookupTool.tsx),
// one object per language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/mxLookupStrings.ts.
//
// English is the original wording moved here unchanged. The issue messages for
// English still come from lib/tools/mxLookupCore.ts; the `issues` map here is
// used for the other languages, keyed by the core's issue codes.

import type { Locale } from '@/lib/i18n/clusters'
import type { MxIssue } from '@/lib/tools/mxLookupCore'

export interface MxSummaryParts {
  domain: string
  /** Number of mail servers with a host name (null MX excluded). */
  servers: number
  provider: string | null
  /** First fallback address, for the implicit-MX case. */
  fallback: string
}

export interface MxToolStrings {
  label: string
  placeholder: string
  button: string
  tryLabel: string
  thPriority: string
  thServer: string
  thIps: string
  thTtl: string
  none: string
  nullMx: string
  legend: string
  copy: string
  copied: string
  answeredBy: string
  dnssec: string
  ctaTitle: string
  ctaText: string
  ctaButton: string
  ctaHref: string
  lookupError: string
  inputEmpty: string
  inputInvalid: string
  /** Issue messages by core code; English leaves this out and shows the core's own text. */
  issues?: {
    'ip-literal': string
    'lookup-failed': string
    cname: string
    'no-address': string
    'no-address-missing': string
    'null-mx-mixed': string
  }
  summary: {
    servers: (n: number) => string
    provider: (name: string) => string
    ok: (p: MxSummaryParts) => { title: string; text: string }
    okWithIssues: (p: MxSummaryParts) => { title: string; text: string }
    implicit: (p: MxSummaryParts) => { title: string; text: string }
    none: (p: MxSummaryParts) => { title: string; text: string }
    nullMx: (p: MxSummaryParts) => { title: string; text: string }
    nxdomain: (p: MxSummaryParts) => { title: string; text: string }
  }
}

const enServers = (n: number) => `${n} mail server${n === 1 ? '' : 's'} found`
const enProvider = (name: string) => `. Mail goes to ${name}`
const enHead = (p: MxSummaryParts) => `${enServers(p.servers)}${p.provider ? enProvider(p.provider) : ''}`

const en: MxToolStrings = {
  label: 'Domain or email address',
  placeholder: 'example.com',
  button: 'Look up MX records',
  tryLabel: 'Try:',
  thPriority: 'Priority',
  thServer: 'Mail server',
  thIps: 'IP addresses',
  thTtl: 'TTL',
  none: 'none',
  nullMx: '. (null MX)',
  legend: 'Senders try the lowest number first. Servers with the same number share the load.',
  copy: 'Copy records',
  copied: 'Copied',
  answeredBy: 'Answered by',
  dnssec: ' · DNSSEC validated',
  ctaTitle: 'MX records cover the domain, not the mailbox',
  ctaText: 'A domain can receive mail and still not have the address you want to write to. Check the address itself before you send.',
  ctaButton: 'Check an email address',
  ctaHref: '/email-checker',
  lookupError: 'We couldn’t reach the DNS services. Check your connection and try again.',
  inputEmpty: 'Enter a domain, such as example.com.',
  inputInvalid: 'That doesn’t look like a domain. Enter something like example.com.',
  summary: {
    servers: enServers,
    provider: enProvider,
    ok: (p) => ({ title: `${p.domain} can receive email`, text: `${enHead(p)}.` }),
    okWithIssues: (p) => ({
      title: `${p.domain} has MX records, but something needs fixing`,
      text: `${enHead(p)}. The problems are listed below.`,
    }),
    implicit: (p) => ({
      title: `${p.domain} has no MX records`,
      text: `Senders fall back to the domain’s own address (${p.fallback}). That only works if a mail server runs there, so add MX records if this domain should receive email.`,
    }),
    none: (p) => ({
      title: `${p.domain} can’t receive email`,
      text: 'It has no MX records and no address for senders to fall back to. Mail sent to this domain will bounce.',
    }),
    nullMx: (p) => ({
      title: `${p.domain} accepts no email`,
      text: 'It publishes a null MX record (0 .), which tells senders not to try. That’s normal for a domain that isn’t used for email. A domain you send from shouldn’t have one, because replies and bounces can’t come back.',
    }),
    nxdomain: (p) => ({
      title: `${p.domain} doesn’t exist`,
      text: 'DNS has no record of this domain. Check the spelling.',
    }),
  },
}

const deTool: MxToolStrings = {
  label: 'Domain oder E-Mail-Adresse',
  placeholder: 'beispiel.de',
  button: 'MX-Einträge abfragen',
  tryLabel: 'Beispiele:',
  thPriority: 'Priorität',
  thServer: 'Mailserver',
  thIps: 'IP-Adressen',
  thTtl: 'TTL',
  none: 'keine',
  nullMx: '. (Null-MX)',
  legend: 'Absender versuchen es zuerst bei der niedrigsten Zahl. Server mit derselben Zahl teilen sich die Last.',
  copy: 'Einträge kopieren',
  copied: 'Kopiert',
  answeredBy: 'Antwort von',
  dnssec: ' · DNSSEC-validiert',
  ctaTitle: 'MX-Einträge betreffen die Domain, nicht das Postfach',
  ctaText:
    'Eine Domain kann E-Mails empfangen, ohne dass es die Adresse gibt, an die Sie schreiben möchten. Prüfen Sie die Adresse selbst, bevor Sie senden.',
  ctaButton: 'E-Mail-Adresse prüfen',
  ctaHref: '/de/email-adresse-pruefen',
  lookupError: 'Wir konnten die DNS-Dienste nicht erreichen. Prüfen Sie Ihre Verbindung und versuchen Sie es noch einmal.',
  inputEmpty: 'Geben Sie eine Domain ein, zum Beispiel beispiel.de.',
  inputInvalid: 'Das sieht nicht nach einer Domain aus. Geben Sie etwas wie beispiel.de ein.',
  issues: {
    'ip-literal':
      'Dieser Eintrag zeigt auf eine IP-Adresse. Ein MX-Eintrag muss einen Hostnamen nennen. Manche Mailserver stellen an eine IP-Adresse nicht zu, zum Beispiel Exim in der Standardeinstellung.',
    'lookup-failed': 'Wir konnten die Adresse dieses Servers nicht abfragen. Versuchen Sie es gleich noch einmal.',
    cname:
      'Dieser Servername ist ein Alias (CNAME). Laut den MX-Regeln sollte hier der echte Hostname stehen. Viele Absender folgen dem Alias trotzdem, aber der Standard verpflichtet sie nicht dazu.',
    'no-address': 'Dieser Servername hat keine IP-Adresse. E-Mails an ihn können nicht zugestellt werden.',
    'no-address-missing': 'Diesen Servernamen gibt es im DNS nicht. E-Mails an ihn können nicht zugestellt werden.',
    'null-mx-mixed':
      'Die Domain veröffentlicht einen Null-MX ("0 .") neben normalen MX-Einträgen. Ein Null-MX muss der einzige MX-Eintrag sein. Entfernen Sie also das eine oder das andere.',
  },
  summary: {
    // "Mailserver" is the same in singular and plural: "1 Mailserver gefunden", "3 Mailserver gefunden".
    servers: (n) => `${n} Mailserver gefunden`,
    // The core's provider names are English ("Google Workspace or Gmail", "Mimecast (security gateway)").
    provider: (name) =>
      `. Die E-Mails gehen an ${name.replace(' or ', ' oder ').replace('(security gateway)', '(Sicherheits-Gateway)')}`,
    ok: (p) => ({
      title: `${p.domain} kann E-Mails empfangen`,
      text: `${p.servers} Mailserver gefunden${
        p.provider
          ? `. Die E-Mails gehen an ${p.provider.replace(' or ', ' oder ').replace('(security gateway)', '(Sicherheits-Gateway)')}`
          : ''
      }.`,
    }),
    okWithIssues: (p) => ({
      title: `${p.domain} hat MX-Einträge, aber etwas muss behoben werden`,
      text: `${p.servers} Mailserver gefunden${
        p.provider
          ? `. Die E-Mails gehen an ${p.provider.replace(' or ', ' oder ').replace('(security gateway)', '(Sicherheits-Gateway)')}`
          : ''
      }. Die Probleme sind unten aufgeführt.`,
    }),
    implicit: (p) => ({
      title: `${p.domain} hat keine MX-Einträge`,
      text: `Absender greifen dann auf die eigene Adresse der Domain zurück (${p.fallback}). Das funktioniert nur, wenn dort ein Mailserver läuft. Legen Sie also MX-Einträge an, wenn diese Domain E-Mails empfangen soll.`,
    }),
    none: (p) => ({
      title: `${p.domain} kann keine E-Mails empfangen`,
      text: 'Die Domain hat keine MX-Einträge und keine Adresse, auf die Absender zurückgreifen können. E-Mails an diese Domain kommen als Bounce zurück.',
    }),
    nullMx: (p) => ({
      title: `${p.domain} nimmt keine E-Mails an`,
      text: 'Die Domain veröffentlicht einen Null-MX-Eintrag (0 .). Er sagt Absendern, dass sie es nicht versuchen sollen. Für eine Domain, die nicht für E-Mails genutzt wird, ist das normal. Eine Domain, von der Sie senden, sollte keinen haben. Sonst kommen Antworten und Bounces nicht zurück.',
    }),
    nxdomain: (p) => ({
      title: `${p.domain} existiert nicht`,
      text: 'Das DNS kennt diese Domain nicht. Prüfen Sie die Schreibweise.',
    }),
  },
}

const itTool: MxToolStrings = {
  label: 'Dominio o indirizzo email',
  placeholder: 'esempio.it',
  button: 'Verifica i record MX',
  tryLabel: 'Prova:',
  thPriority: 'Priorità',
  thServer: 'Server di posta',
  thIps: 'Indirizzi IP',
  thTtl: 'TTL',
  none: 'nessuno',
  nullMx: '. (MX nullo)',
  legend: 'Chi invia contatta prima il server con il numero più basso. I server con lo stesso numero si dividono il carico.',
  copy: 'Copia i record',
  copied: 'Copiato',
  answeredBy: 'Risposta fornita da',
  dnssec: ' · convalidato con DNSSEC',
  ctaTitle: 'I record MX riguardano il dominio, non la casella',
  ctaText: "Un dominio può ricevere posta e non avere l'indirizzo a cui vuoi scrivere. Verifica l'indirizzo prima di inviare.",
  ctaButton: 'Verifica un indirizzo email',
  ctaHref: '/it/verifica-email',
  lookupError: 'Non siamo riusciti a raggiungere i servizi DNS. Controlla la connessione e riprova.',
  inputEmpty: 'Inserisci un dominio, come esempio.it.',
  inputInvalid: 'Questo non sembra un dominio. Inserisci qualcosa come esempio.it.',
  issues: {
    'ip-literal':
      'Questo record punta a un indirizzo IP. Un record MX deve indicare un nome host, e alcuni server di posta (Exim, nella configurazione predefinita) si rifiutano di consegnare lì.',
    'lookup-failed': "Non siamo riusciti a trovare l'indirizzo di questo server. Riprova tra poco.",
    cname:
      "Questo nome di server è un alias (CNAME). Le regole sui record MX dicono che deve essere il vero nome host. Molti mittenti seguono comunque l'alias, ma lo standard non li obbliga a farlo.",
    'no-address': 'Questo nome di server non ha un indirizzo IP, quindi la posta inviata lì non può essere consegnata.',
    'no-address-missing': 'Questo nome di server non esiste nel DNS, quindi la posta inviata lì non può essere consegnata.',
    'null-mx-mixed':
      'Il dominio pubblica un MX nullo ("0 .") insieme a record MX normali. Un MX nullo deve essere l\'unico record MX, quindi togli l\'uno o gli altri.',
  },
  summary: {
    servers: (n) => `${n} server di posta ${n === 1 ? 'trovato' : 'trovati'}`,
    provider: (name) => `. La posta è gestita da ${name}`,
    ok: (p) => ({
      title: `${p.domain} può ricevere email`,
      text: `${p.servers} server di posta ${p.servers === 1 ? 'trovato' : 'trovati'}${p.provider ? `. La posta è gestita da ${p.provider}` : ''}.`,
    }),
    okWithIssues: (p) => ({
      title: `${p.domain} ha record MX, ma qualcosa va corretto`,
      text: `${p.servers} server di posta ${p.servers === 1 ? 'trovato' : 'trovati'}${p.provider ? `. La posta è gestita da ${p.provider}` : ''}. I problemi sono elencati qui sotto.`,
    }),
    implicit: (p) => ({
      title: `${p.domain} non ha record MX`,
      text: `Chi invia ripiega sull'indirizzo del dominio stesso (${p.fallback}). Funziona solo se lì c'è un server di posta, quindi aggiungi i record MX se questo dominio deve ricevere email.`,
    }),
    none: (p) => ({
      title: `${p.domain} non può ricevere email`,
      text: 'Non ha record MX né un indirizzo di riserva per chi invia. La posta inviata a questo dominio rimbalzerà.',
    }),
    nullMx: (p) => ({
      title: `${p.domain} non accetta email`,
      text: 'Pubblica un record MX nullo (0 .), che dice ai mittenti di non tentare la consegna. È normale per un dominio che non serve per le email. Un dominio da cui invii non dovrebbe averlo, perché risposte e rimbalzi non possono tornare indietro.',
    }),
    nxdomain: (p) => ({
      title: `${p.domain} non esiste`,
      text: 'Il DNS non ha nessun record di questo dominio. Controlla che sia scritto bene.',
    }),
  },
}

export const MX_TOOL_STRINGS: Partial<Record<Locale, MxToolStrings>> & { en: MxToolStrings } = { en, de: deTool, it: itTool }

export function mxToolStrings(locale: Locale): MxToolStrings {
  return MX_TOOL_STRINGS[locale] ?? en
}

/** The message to show for an issue: the core's English text, or the localized one by code. */
export function mxIssueText(t: MxToolStrings, issue: MxIssue): string {
  if (!t.issues) return issue.message
  if (issue.code === 'no-address') return issue.missing ? t.issues['no-address-missing'] : t.issues['no-address']
  return t.issues[issue.code]
}
