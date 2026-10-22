// Labels and messages of the DKIM generator tool (components/tools/DkimGenerator/DkimGeneratorTool.tsx),
// one object per language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/dkimGeneratorStrings.ts.
//
// English is the original wording moved here unchanged. The validation messages
// for English still come from lib/tools/dkimGeneratorCore.ts; the `errors` map
// here is used for the other languages, keyed by the core's error codes.
// Record syntax (v=DKIM1, k=rsa, p=..., PEM headers) is data and stays in the core.

import type { Locale } from '@/lib/i18n/clusters'
import type { DkimErrorCode, DkimGeneratedKeys, DkimKeySize } from '@/lib/tools/dkimGeneratorCore'

export interface DkimToolStrings {
  // Form
  domainLabel: string
  domainPlaceholder: string
  domainHelp: string
  selectorLabel: string
  selectorPlaceholder: string
  selectorHelp: string
  keySizeLabel: string
  /** The key size options, by size. */
  keySizeOptions: Record<DkimKeySize, string>
  /** The note under the key size select, by size. */
  keySizeHelp: Record<DkimKeySize, string>
  /** Fallbacks when a validation result carries no message. */
  invalidSelector: string
  invalidDomain: string
  /** A key generation error without a message (English), or any uncoded error (other languages). */
  generationFailed: string
  generating: string
  generate: string

  // DNS record card
  dnsTitle: string
  /** Badge next to the title: "2048 bits (392 chars)". */
  keyInfo: (bits: number, chars: number) => string
  formatLabel: string
  formatSingle: string
  formatChunked: string
  formatBind: string
  hostLabel: string
  copied: string
  copyHost: string
  /** After the host name: "(or s1._domainkey.example.com.)". */
  orFqdn: (fqdn: string) => string
  valueLabel: string
  copyValue: string
  chunkedNote: string

  // Private key card
  privateKeyTitle: string
  pkcs1Label: string
  pkcs8Label: string
  hide: string
  show: string
  reveal: string
  copiedKey: string
  copyPrivateKey: string
  downloadKey: string
  downloadBundle: string
  rulesTitle: string
  rules: [string, string, string]

  // Downloads
  /** File name of the setup bundle. */
  bundleFileName: (domain: string, selector: string) => string
  /** Text of the setup bundle (.txt). Keep the record and key values unchanged. */
  bundleText: (k: DkimGeneratedKeys) => string

  /** Validation messages by core code; English leaves this out and shows the core's own text. */
  errors?: { [K in Exclude<DkimErrorCode, 'domain-label'>]: string } & {
    'domain-label': (label: string) => string
  }
}

const en: DkimToolStrings = {
  domainLabel: 'Domain Name',
  domainPlaceholder: 'example.com',
  domainHelp: 'The sending domain for your outgoing mail',
  selectorLabel: 'DKIM Selector',
  selectorPlaceholder: 's2026a',
  selectorHelp: 'Identifies this key pair in DNS (e.g. s2026a)',
  keySizeLabel: 'Key Size',
  keySizeOptions: {
    2048: '2048 bits (Recommended)',
    1024: '1024 bits (minimum Gmail accepts)',
    4096: '4096 bits (long record, check your DNS host)',
  },
  keySizeHelp: {
    2048: 'Recommended by Gmail and RFC 8301',
    1024: 'Legacy length, weak against modern cryptanalysis',
    4096: 'Exceeds standard 512-byte UDP DNS packet limits',
  },
  invalidSelector: 'Invalid selector',
  invalidDomain: 'Invalid domain',
  generationFailed: 'Key generation failed',
  generating: 'Generating RSA key pair in browser...',
  generate: 'Generate DKIM keys',

  dnsTitle: 'DNS TXT Record',
  keyInfo: (bits, chars) => `${bits} bits (${chars} chars)`,
  formatLabel: 'Format:',
  formatSingle: 'Single string',
  formatChunked: '255-char split',
  formatBind: 'BIND zone',
  hostLabel: 'Record Name / Host:',
  copied: 'Copied',
  copyHost: 'Copy host',
  orFqdn: (fqdn) => `(or ${fqdn})`,
  valueLabel: 'Record Value (TXT):',
  copyValue: 'Copy value',
  chunkedNote:
    'Use this chunked format if your DNS provider (e.g. GoDaddy, Namecheap) limits single TXT strings to 255 characters.',

  privateKeyTitle: 'Private Key',
  pkcs1Label: 'PKCS#1 (RSA)',
  pkcs8Label: 'PKCS#8',
  hide: 'Hide',
  show: 'Show',
  reveal: 'Click to reveal private key',
  copiedKey: 'Copied key',
  copyPrivateKey: 'Copy private key',
  downloadKey: 'Download key file',
  downloadBundle: 'Download setup bundle (.txt)',
  rulesTitle: 'Important deployment rules:',
  rules: [
    'Keep this private key confidential. Only configure it inside your mail transfer agent (MTA) or email delivery platform.',
    'Publish the DNS TXT record first. Sending signed emails before DNS propagates will cause authentication failures and bounces.',
    'Most mail software (Postfix, OpenDKIM, cPanel, Exim) expects the traditional PKCS#1 RSA format.',
  ],

  bundleFileName: (domain, selector) => `${domain}-${selector}-dkim-instructions.txt`,
  bundleText: (keys) => `DKIM SETUP INSTRUCTIONS FOR ${keys.domain.toUpperCase()}
Generated via Giggal.ai client-side DKIM generator

==================================================
1. DNS TXT RECORD
==================================================
Host / Name:
${keys.dnsRecordName}
(or Fully Qualified Domain Name: ${keys.dnsRecordFqdn})

TXT Record Value (Single String):
${keys.dnsRecordValue}

TXT Record Value (255-character Split / Quoted):
${keys.dnsRecordChunked}

BIND Zone Format:
${keys.bindRecord}

==================================================
2. PRIVATE KEY (Install in mail server or MTA)
==================================================
Format: PKCS#1 (Traditional RSA)
${keys.privateKeyPkcs1Pem}

Format: PKCS#8 (Standard)
${keys.privateKeyPkcs8Pem}

==================================================
IMPORTANT DEPLOYMENT NOTES:
- Add the DNS TXT record and verify its propagation BEFORE enabling DKIM signing in your mail server.
- Keep the private key confidential. Never share it or publish it in DNS.
`,
}

const itTool: DkimToolStrings = {
  domainLabel: 'Dominio',
  domainPlaceholder: 'esempio.it',
  domainHelp: 'Il dominio da cui invii le email',
  selectorLabel: 'Selettore DKIM',
  selectorPlaceholder: 's2026a',
  selectorHelp: 'Identifica la coppia di chiavi nel DNS (ad es. s2026a)',
  keySizeLabel: 'Lunghezza chiave',
  keySizeOptions: {
    2048: '2048 bit (consigliata)',
    1024: '1024 bit (minimo accettato da Gmail)',
    4096: '4096 bit (record lungo, controlla il gestore DNS)',
  },
  keySizeHelp: {
    2048: 'Consigliata da Gmail e dalla RFC 8301',
    1024: 'Lunghezza datata, debole contro la crittoanalisi moderna',
    4096: 'Supera il limite standard di 512 byte dei pacchetti DNS UDP',
  },
  invalidSelector: 'Selettore non valido',
  invalidDomain: 'Dominio non valido',
  generationFailed: 'Generazione della chiave non riuscita',
  generating: 'Generazione delle chiavi RSA nel browser...',
  generate: 'Genera le chiavi DKIM',

  dnsTitle: 'Record TXT del DNS',
  keyInfo: (bits, chars) => `${bits} bit (${chars} ${chars === 1 ? 'carattere' : 'caratteri'})`,
  formatLabel: 'Formato:',
  formatSingle: 'Stringa singola',
  formatChunked: 'Stringhe da 255',
  formatBind: 'Zona BIND',
  hostLabel: 'Nome del record / Host:',
  copied: 'Copiato',
  copyHost: 'Copia il nome',
  orFqdn: (fqdn) => `(oppure ${fqdn})`,
  valueLabel: 'Valore del record (TXT):',
  copyValue: 'Copia il valore',
  chunkedNote:
    'Usa questo formato diviso se il tuo gestore DNS (ad es. GoDaddy, Namecheap) limita ogni stringa TXT a 255 caratteri.',

  privateKeyTitle: 'Chiave privata',
  pkcs1Label: 'PKCS#1 (RSA)',
  pkcs8Label: 'PKCS#8',
  hide: 'Nascondi',
  show: 'Mostra',
  reveal: 'Clicca per mostrare la chiave privata',
  copiedKey: 'Chiave copiata',
  copyPrivateKey: 'Copia la chiave privata',
  downloadKey: 'Scarica il file della chiave',
  downloadBundle: 'Scarica le istruzioni (.txt)',
  rulesTitle: 'Regole importanti per la configurazione:',
  rules: [
    'Tieni riservata questa chiave privata. Configurala solo nel tuo server di posta (MTA) o nella piattaforma che invia le tue email.',
    'Pubblica prima il record TXT nel DNS. Se invii email firmate prima che il DNS si propaghi, avrai errori di autenticazione e rimbalzi.',
    'La maggior parte dei software di posta (Postfix, OpenDKIM, cPanel, Exim) richiede il formato tradizionale PKCS#1 RSA.',
  ],

  bundleFileName: (domain, selector) => `${domain}-${selector}-istruzioni-dkim.txt`,
  bundleText: (keys) => `ISTRUZIONI DI CONFIGURAZIONE DKIM PER ${keys.domain.toUpperCase()}
Create con il generatore DKIM di Giggal.ai, eseguito nel tuo browser

==================================================
1. RECORD TXT DEL DNS
==================================================
Host / Nome:
${keys.dnsRecordName}
(oppure il nome di dominio completo, FQDN: ${keys.dnsRecordFqdn})

Valore del record TXT (stringa singola):
${keys.dnsRecordValue}

Valore del record TXT (diviso in stringhe da 255 caratteri, tra virgolette):
${keys.dnsRecordChunked}

Formato zona BIND:
${keys.bindRecord}

==================================================
2. CHIAVE PRIVATA (da installare nel server di posta o nell'MTA)
==================================================
Formato: PKCS#1 (RSA tradizionale)
${keys.privateKeyPkcs1Pem}

Formato: PKCS#8 (standard)
${keys.privateKeyPkcs8Pem}

==================================================
NOTE IMPORTANTI PER LA CONFIGURAZIONE:
- Aggiungi il record TXT al DNS e verifica che si sia propagato PRIMA di attivare la firma DKIM nel server di posta.
- Tieni riservata la chiave privata. Non condividerla mai e non pubblicarla nel DNS.
`,

  errors: {
    'selector-empty': 'Il selettore non può essere vuoto',
    'selector-too-long': 'Il selettore deve avere al massimo 63 caratteri',
    'selector-chars': 'Il selettore può contenere solo lettere, numeri e trattini, e non può iniziare o finire con un trattino',
    'domain-empty': 'Il dominio non può essere vuoto',
    'domain-too-long': 'Il dominio è troppo lungo',
    'domain-no-tld': 'Il dominio deve includere un dominio di primo livello (ad es. esempio.it)',
    'domain-label-length': 'Una parte del dominio ha una lunghezza non valida',
    'domain-label': (label) => `Il dominio contiene una parte non valida: "${label}"`,
    'no-web-crypto': 'La Web Crypto API (crypto.subtle) non è disponibile in questo browser',
  },
}

const deTool: DkimToolStrings = {
  domainLabel: 'Domainname',
  domainPlaceholder: 'beispiel.de',
  domainHelp: 'Die Domain, von der Ihre ausgehenden E-Mails gesendet werden',
  selectorLabel: 'DKIM-Selector',
  selectorPlaceholder: 's2026a',
  selectorHelp: 'Kennzeichnet dieses Schlüsselpaar im DNS (zum Beispiel s2026a)',
  keySizeLabel: 'Schlüssellänge',
  keySizeOptions: {
    2048: '2048 Bit (empfohlen)',
    1024: '1024 Bit (Minimum für Gmail)',
    4096: '4096 Bit (langer Eintrag, DNS-Anbieter vorher prüfen)',
  },
  keySizeHelp: {
    2048: 'Empfohlen von Gmail und RFC 8301',
    1024: 'Veraltete Länge, schwach gegen moderne Kryptoanalyse',
    4096: 'Überschreitet die übliche Grenze von 512 Byte für DNS-Pakete über UDP',
  },
  invalidSelector: 'Ungültiger Selector',
  invalidDomain: 'Ungültige Domain',
  generationFailed: 'Die Schlüssel konnten nicht erstellt werden',
  generating: 'RSA-Schlüsselpaar wird im Browser erstellt...',
  generate: 'DKIM-Schlüssel erstellen',

  dnsTitle: 'DNS-TXT-Eintrag',
  keyInfo: (bits, chars) => `${bits} Bit (${chars} Zeichen)`,
  formatLabel: 'Format:',
  formatSingle: 'Einzelner String',
  formatChunked: 'Je 255 Zeichen',
  formatBind: 'BIND-Zone',
  hostLabel: 'Name / Host des Eintrags:',
  copied: 'Kopiert',
  copyHost: 'Host kopieren',
  orFqdn: (fqdn) => `(oder ${fqdn})`,
  valueLabel: 'Wert des Eintrags (TXT):',
  copyValue: 'Wert kopieren',
  chunkedNote:
    'Nutzen Sie dieses aufgeteilte Format, wenn Ihr DNS-Anbieter (zum Beispiel GoDaddy oder Namecheap) einzelne TXT-Strings auf 255 Zeichen begrenzt.',

  privateKeyTitle: 'Privater Schlüssel',
  pkcs1Label: 'PKCS#1 (RSA)',
  pkcs8Label: 'PKCS#8',
  hide: 'Ausblenden',
  show: 'Anzeigen',
  reveal: 'Klicken Sie, um den privaten Schlüssel anzuzeigen',
  copiedKey: 'Schlüssel kopiert',
  copyPrivateKey: 'Privaten Schlüssel kopieren',
  downloadKey: 'Schlüsseldatei herunterladen',
  downloadBundle: 'Einrichtungsdatei herunterladen (.txt)',
  rulesTitle: 'Wichtige Regeln für die Einrichtung:',
  rules: [
    'Halten Sie diesen privaten Schlüssel geheim. Tragen Sie ihn nur in Ihrem Mail Transfer Agent (MTA) oder Ihrer Versandplattform ein.',
    'Veröffentlichen Sie zuerst den DNS-TXT-Eintrag. Wenn Sie signierte E-Mails senden, bevor der Eintrag im DNS sichtbar ist, schlägt die Authentifizierung fehl und es gibt Bounces.',
    'Die meisten Mailserver-Programme (Postfix, OpenDKIM, cPanel, Exim) erwarten das klassische RSA-Format PKCS#1.',
  ],

  bundleFileName: (domain, selector) => `${domain}-${selector}-dkim-anleitung.txt`,
  bundleText: (keys) => `DKIM-EINRICHTUNG FÜR ${keys.domain.toUpperCase()}
Erstellt mit dem DKIM-Generator von Giggal.ai (direkt im Browser)

==================================================
1. DNS-TXT-EINTRAG
==================================================
Host / Name:
${keys.dnsRecordName}
(oder vollständiger Name, FQDN: ${keys.dnsRecordFqdn})

Wert des TXT-Eintrags (einzelner String):
${keys.dnsRecordValue}

Wert des TXT-Eintrags (aufgeteilt in je 255 Zeichen, in Anführungszeichen):
${keys.dnsRecordChunked}

BIND-Zonenformat:
${keys.bindRecord}

==================================================
2. PRIVATER SCHLÜSSEL (auf dem Mailserver oder MTA eintragen)
==================================================
Format: PKCS#1 (klassisches RSA)
${keys.privateKeyPkcs1Pem}

Format: PKCS#8 (Standard)
${keys.privateKeyPkcs8Pem}

==================================================
WICHTIGE HINWEISE ZUR EINRICHTUNG:
- Legen Sie den DNS-TXT-Eintrag an und prüfen Sie, ob er im DNS sichtbar ist. Tun Sie das, BEVOR Sie die DKIM-Signatur auf Ihrem Mailserver einschalten.
- Halten Sie den privaten Schlüssel geheim. Geben Sie ihn nie weiter und veröffentlichen Sie ihn nie im DNS.
`,

  errors: {
    'selector-empty': 'Der Selector darf nicht leer sein',
    'selector-too-long': 'Der Selector darf höchstens 63 Zeichen lang sein',
    'selector-chars':
      'Der Selector darf nur Buchstaben, Ziffern und Bindestriche enthalten, aber nicht mit einem Bindestrich beginnen oder enden',
    'domain-empty': 'Die Domain darf nicht leer sein',
    'domain-too-long': 'Die Domain ist zu lang',
    'domain-no-tld': 'Die Domain braucht eine Top-Level-Domain (zum Beispiel beispiel.de)',
    'domain-label-length': 'Ein Teil der Domain hat eine ungültige Länge',
    'domain-label': (label) => `Die Domain enthält einen ungültigen Teil: "${label}"`,
    'no-web-crypto': 'Die Web Crypto API (crypto.subtle) ist in diesem Browser nicht verfügbar',
  },
}

export const DKIM_TOOL_STRINGS: Partial<Record<Locale, DkimToolStrings>> & { en: DkimToolStrings } = { en, it: itTool, de: deTool }

export function dkimToolStrings(locale: Locale): DkimToolStrings {
  return DKIM_TOOL_STRINGS[locale] ?? en
}

/**
 * The message for a failed validation or a thrown key generation error: the
 * core's English text, or the localized one by code. `fallback` is used when
 * there is no message (English) or no code (other languages).
 */
export function dkimErrorText(
  t: DkimToolStrings,
  e: { code?: DkimErrorCode; label?: string; message?: string },
  fallback: string,
): string {
  if (!t.errors) return e.message || fallback
  if (!e.code) return fallback
  if (e.code === 'domain-label') return t.errors['domain-label'](e.label ?? '')
  return t.errors[e.code] ?? fallback
}
