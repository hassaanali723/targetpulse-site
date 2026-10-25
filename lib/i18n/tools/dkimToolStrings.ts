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


const frTool: DkimToolStrings = {
  domainLabel: 'Nom de domaine',
  domainPlaceholder: 'exemple.fr',
  domainHelp: "Le domaine d'expédition de vos e-mails sortants",
  selectorLabel: 'Sélecteur DKIM',
  selectorPlaceholder: 's2026a',
  selectorHelp: 'Identifie cette paire de clés dans le DNS (ex. s2026a)',
  keySizeLabel: 'Taille de clé',
  keySizeOptions: {
    2048: '2048 bits (Recommandé)',
    1024: '1024 bits (minimum accepté par Gmail)',
    4096: '4096 bits (enregistrement long, vérifiez votre DNS)',
  },
  keySizeHelp: {
    2048: 'Recommandé par Gmail et la RFC 8301',
    1024: 'Longueur historique, vulnérable aux attaques modernes',
    4096: 'Dépasse la limite standard de 512 octets des paquets DNS UDP',
  },
  invalidSelector: 'Sélecteur non valide',
  invalidDomain: 'Domaine non valide',
  generationFailed: 'Échec de la génération des clés',
  generating: 'Génération de la paire de clés RSA dans le navigateur...',
  generate: 'Générer les clés DKIM',

  dnsTitle: 'Enregistrement DNS TXT',
  keyInfo: (bits, chars) => `${bits} bits (${chars} ${chars === 1 ? 'caractère' : 'caractères'})`,
  formatLabel: 'Format :',
  formatSingle: 'Chaîne unique',
  formatChunked: 'Découpage 255 caractères',
  formatBind: 'Zone BIND',
  hostLabel: "Nom de l'enregistrement / Hôte :",
  copied: 'Copié',
  copyHost: "Copier l'hôte",
  orFqdn: (fqdn) => `(ou ${fqdn})`,
  valueLabel: "Valeur de l'enregistrement (TXT) :",
  copyValue: 'Copier la valeur',
  chunkedNote:
    'Utilisez ce format découpé si votre hébergeur DNS limite les chaînes TXT uniques à 255 caractères.',

  privateKeyTitle: 'Clé privée',
  pkcs1Label: 'PKCS#1 (RSA)',
  pkcs8Label: 'PKCS#8',
  hide: 'Masquer',
  show: 'Afficher',
  reveal: 'Cliquer pour afficher la clé privée',
  copiedKey: 'Clé copiée',
  copyPrivateKey: 'Copier la clé privée',
  downloadKey: 'Télécharger le fichier de clé',
  downloadBundle: 'Télécharger le guide de configuration (.txt)',
  rulesTitle: 'Règles importantes de déploiement :',
  rules: [
    'Gardez cette clé privée strictement confidentielle. Configurez-la uniquement sur votre serveur de messagerie ou MTA.',
    "Publiez d'abord l'enregistrement DNS TXT. Envoyer des e-mails signés avant la propagation causera des rejets.",
    'La plupart des serveurs (Postfix, OpenDKIM, cPanel, Exim) attendent le format traditionnel PKCS#1 RSA.',
  ],

  bundleFileName: (domain, selector) => `${domain}-${selector}-instructions-dkim.txt`,
  bundleText: (keys) => `INSTRUCTIONS DE CONFIGURATION DKIM POUR ${keys.domain.toUpperCase()}
Généré via le générateur DKIM côté client Giggal.ai

==================================================
1. ENREGISTREMENT DNS TXT
==================================================
Hôte / Nom :
${keys.dnsRecordName}
(ou Nom de domaine complet FQDN : ${keys.dnsRecordFqdn})

Valeur TXT (Chaîne unique) :
${keys.dnsRecordValue}

Valeur TXT (Découpée en chaînes de 255 caractères) :
${keys.dnsRecordChunked}

Format de zone BIND :
${keys.bindRecord}

==================================================
2. CLÉ PRIVÉE (À installer sur votre serveur de messagerie ou MTA)
==================================================
Format : PKCS#1 (RSA Traditionnel)
${keys.privateKeyPkcs1Pem}

Format : PKCS#8 (Standard)
${keys.privateKeyPkcs8Pem}

==================================================
CONSIGNES DE DÉPLOIEMENT IMPORTANTES :
- Publiez l'enregistrement DNS TXT et vérifiez sa propagation AVANT d'activer la signature DKIM.
- Conservez la clé privée confidentielle. Ne la publiez jamais dans le DNS.
`,

  errors: {
    'selector-empty': 'Le sélecteur ne peut pas être vide',
    'selector-too-long': 'Le sélecteur ne peut pas dépasser 63 caractères',
    'selector-chars':
      'Le sélecteur ne peut contenir que des lettres, des chiffres et des tirets, sans commencer ni finir par un tiret',
    'domain-empty': 'Le nom de domaine ne peut pas être vide',
    'domain-too-long': 'Le nom de domaine est trop long',
    'domain-no-tld': 'Le domaine doit comporter une extension TLD (ex. exemple.fr)',
    'domain-label-length': "Une partie du domaine a une longueur non valide",
    'domain-label': (label) => `Le domaine contient un élément non valide : "${label}"`,
    'no-web-crypto': "L'API Web Crypto (crypto.subtle) n'est pas disponible dans ce navigateur",
  },
}

const esTool: DkimToolStrings = {
  domainLabel: 'Nombre de dominio',
  domainPlaceholder: 'ejemplo.es',
  domainHelp: 'El dominio de envío para tus correos salientes',
  selectorLabel: 'Selector DKIM',
  selectorPlaceholder: 's2026a',
  selectorHelp: 'Identifica este par de claves en DNS (ej. s2026a)',
  keySizeLabel: 'Tamaño de clave',
  keySizeOptions: {
    2048: '2048 bits (Recomendado)',
    1024: '1024 bits (mínimo aceptado por Gmail)',
    4096: '4096 bits (registro largo, revisa tu proveedor DNS)',
  },
  keySizeHelp: {
    2048: 'Recomendado por Gmail y RFC 8301',
    1024: 'Longitud heredada, vulnerable al criptoanálisis moderno',
    4096: 'Supera el límite estándar de 512 bytes de paquetes DNS UDP',
  },
  invalidSelector: 'Selector no válido',
  invalidDomain: 'Dominio no válido',
  generationFailed: 'Fallo al generar las claves',
  generating: 'Generando par de claves RSA en el navegador...',
  generate: 'Generar claves DKIM',

  dnsTitle: 'Registro DNS TXT',
  keyInfo: (bits, chars) => `${bits} bits (${chars} ${chars === 1 ? 'carácter' : 'caracteres'})`,
  formatLabel: 'Formato:',
  formatSingle: 'Cadena única',
  formatChunked: 'División en 255 caracteres',
  formatBind: 'Zona BIND',
  hostLabel: 'Nombre de registro / Host:',
  copied: 'Copiado',
  copyHost: 'Copiar host',
  orFqdn: (fqdn) => `(o ${fqdn})`,
  valueLabel: 'Valor del registro (TXT):',
  copyValue: 'Copiar valor',
  chunkedNote:
    'Usa este formato dividido si tu proveedor DNS limita las cadenas TXT individuales a 255 caracteres.',

  privateKeyTitle: 'Clave privada',
  pkcs1Label: 'PKCS#1 (RSA)',
  pkcs8Label: 'PKCS#8',
  hide: 'Ocultar',
  show: 'Mostrar',
  reveal: 'Clic para mostrar la clave privada',
  copiedKey: 'Clave copiada',
  copyPrivateKey: 'Copiar clave privada',
  downloadKey: 'Descargar archivo de clave',
  downloadBundle: 'Descargar instrucciones (.txt)',
  rulesTitle: 'Normas importantes de despliegue:',
  rules: [
    'Mantén esta clave privada confidencial. Configúrala solo en tu servidor de correo o MTA.',
    'Publica primero el registro DNS TXT. Enviar correos firmados antes de que propague causará rebotes.',
    'La mayoría de servidores (Postfix, OpenDKIM, cPanel, Exim) requieren el formato tradicional PKCS#1 RSA.',
  ],

  bundleFileName: (domain, selector) => `${domain}-${selector}-instrucciones-dkim.txt`,
  bundleText: (keys) => `INSTRUCCIONES DE CONFIGURACIÓN DKIM PARA ${keys.domain.toUpperCase()}
Generado mediante el generador DKIM en navegador de Giggal.ai

==================================================
1. REGISTRO DNS TXT
==================================================
Host / Nombre:
${keys.dnsRecordName}
(o Nombre FQDN Completo: ${keys.dnsRecordFqdn})

Valor del registro TXT (Cadena única):
${keys.dnsRecordValue}

Valor del registro TXT (Dividido en fragmentos de 255 caracteres):
${keys.dnsRecordChunked}

Formato Zona BIND:
${keys.bindRecord}

==================================================
2. CLAVE PRIVADA (Instalar en tu servidor de correo o MTA)
==================================================
Formato: PKCS#1 (RSA Tradicional)
${keys.privateKeyPkcs1Pem}

Formato: PKCS#8 (Estándar)
${keys.privateKeyPkcs8Pem}

==================================================
NOTAS DE DESPLIEGUE IMPORTANTES:
- Publica el registro DNS TXT y confirma su propagación ANTES de activar la firma DKIM.
- Mantén la clave privada confidencial. Nunca la publiques en DNS.
`,

  errors: {
    'selector-empty': 'El selector no puede estar vacío',
    'selector-too-long': 'El selector no puede exceder 63 caracteres',
    'selector-chars':
      'El selector solo puede contener letras, dígitos y guiones, sin comenzar ni terminar con guion',
    'domain-empty': 'El dominio no puede estar vacío',
    'domain-too-long': 'El dominio es demasiado largo',
    'domain-no-tld': 'El dominio debe incluir una extensión TLD (ej. ejemplo.es)',
    'domain-label-length': 'Una sección del dominio tiene una longitud no válida',
    'domain-label': (label) => `El dominio contiene una sección no válida: "${label}"`,
    'no-web-crypto': 'La API Web Crypto (crypto.subtle) no está disponible en este navegador',
  },
}

const ptBrTool: DkimToolStrings = {
  domainLabel: 'Nome de domínio',
  domainPlaceholder: 'exemplo.com.br',
  domainHelp: 'O domínio remetente para suas mensagens enviadas',
  selectorLabel: 'Seletor DKIM',
  selectorPlaceholder: 's2026a',
  selectorHelp: 'Identifica este par de chaves no DNS (ex: s2026a)',
  keySizeLabel: 'Tamanho da chave',
  keySizeOptions: {
    2048: '2048 bits (Recomendado)',
    1024: '1024 bits (mínimo aceito pelo Gmail)',
    4096: '4096 bits (registro longo, verifique seu DNS)',
  },
  keySizeHelp: {
    2048: 'Recomendado pelo Gmail e pelo RFC 8301',
    1024: 'Tamanho legado, vulnerável a criptoanálise moderna',
    4096: 'Ultrapassa o limite padrão de 512 bytes de pacotes DNS UDP',
  },
  invalidSelector: 'Seletor inválido',
  invalidDomain: 'Domínio inválido',
  generationFailed: 'Falha na geração das chaves',
  generating: 'Gerando par de chaves RSA no navegador...',
  generate: 'Gerar chaves DKIM',

  dnsTitle: 'Registro DNS TXT',
  keyInfo: (bits, chars) => `${bits} bits (${chars} ${chars === 1 ? 'caractere' : 'caracteres'})`,
  formatLabel: 'Formato:',
  formatSingle: 'String única',
  formatChunked: 'Divisão em 255 caracteres',
  formatBind: 'Zona BIND',
  hostLabel: 'Nome do registro / Host:',
  copied: 'Copiado',
  copyHost: 'Copiar host',
  orFqdn: (fqdn) => `(ou ${fqdn})`,
  valueLabel: 'Valor do registro (TXT):',
  copyValue: 'Copiar valor',
  chunkedNote:
    'Use este formato dividido se seu provedor DNS limitar strings TXT individuais a 255 caracteres.',

  privateKeyTitle: 'Chave privada',
  pkcs1Label: 'PKCS#1 (RSA)',
  pkcs8Label: 'PKCS#8',
  hide: 'Ocultar',
  show: 'Mostrar',
  reveal: 'Clique para exibir a chave privada',
  copiedKey: 'Chave copiada',
  copyPrivateKey: 'Copiar chave privada',
  downloadKey: 'Baixar arquivo da chave',
  downloadBundle: 'Baixar instruções (.txt)',
  rulesTitle: 'Regras importantes para publicação:',
  rules: [
    'Mantenha esta chave privada confidencial. Configure-a apenas no seu servidor de e-mail ou MTA.',
    'Publique primeiro o registro DNS TXT. Enviar mensagens assinadas antes da propagação gerará rejeições.',
    'A maioria dos servidores (Postfix, OpenDKIM, cPanel, Exim) requer o formato clássico PKCS#1 RSA.',
  ],

  bundleFileName: (domain, selector) => `${domain}-${selector}-instrucoes-dkim.txt`,
  bundleText: (keys) => `INSTRUÇÕES DE CONFIGURAÇÃO DKIM PARA ${keys.domain.toUpperCase()}
Gerado via gerador DKIM do cliente Giggal.ai

==================================================
1. REGISTRO DNS TXT
==================================================
Host / Nome:
${keys.dnsRecordName}
(ou Nome FQDN Completo: ${keys.dnsRecordFqdn})

Valor do Registro TXT (String única):
${keys.dnsRecordValue}

Valor do Registro TXT (Dividido em strings de 255 caracteres):
${keys.dnsRecordChunked}

Formato Zona BIND:
${keys.bindRecord}

==================================================
2. CHAVE PRIVADA (Instalar no servidor de e-mail ou MTA)
==================================================
Formato: PKCS#1 (RSA Tradicional)
${keys.privateKeyPkcs1Pem}

Formato: PKCS#8 (Padrão)
${keys.privateKeyPkcs8Pem}

==================================================
NOTAS IMPORTANTES DE IMPLANTAÇÃO:
- Publique o registro DNS TXT e confirme sua propagação ANTES de ativar a assinatura DKIM.
- Mantenha a chave privada estritamente confidencial. Nunca a publique no DNS.
`,

  errors: {
    'selector-empty': 'O seletor não pode estar vazio',
    'selector-too-long': 'O seletor não pode ultrapassar 63 caracteres',
    'selector-chars':
      'O seletor só pode conter letras, dígitos e hifens, sem iniciar ou terminar com hífen',
    'domain-empty': 'O domínio não pode estar vazio',
    'domain-too-long': 'O domínio é muito longo',
    'domain-no-tld': 'O domínio deve conter uma extensão TLD (ex: exemplo.com.br)',
    'domain-label-length': 'Uma seção do domínio possui tamanho inválido',
    'domain-label': (label) => `O domínio contém uma parte inválida: "${label}"`,
    'no-web-crypto': 'A API Web Crypto (crypto.subtle) não está disponível neste navegador',
  },
}

const nlTool: DkimToolStrings = {
  domainLabel: 'Domeinnaam',
  domainPlaceholder: 'voorbeeld.nl',
  domainHelp: 'Het verzendende domein voor uw uitgaande e-mail',
  selectorLabel: 'DKIM Selector',
  selectorPlaceholder: 's2026a',
  selectorHelp: 'Identificeert dit sleutelpaar in DNS (bijv. s2026a)',
  keySizeLabel: 'Sleutellengte',
  keySizeOptions: {
    2048: '2048 bits (Aanbevolen)',
    1024: '1024 bits (minimum voor Gmail)',
    4096: '4096 bits (lang record, controleer uw DNS-host)',
  },
  keySizeHelp: {
    2048: 'Aanbevolen door Gmail en RFC 8301',
    1024: 'Verouderde lengte, kwetsbaar voor moderne cryptanalyse',
    4096: 'Overschrijdt de standaard 512-byte UDP DNS-pakketlimiet',
  },
  invalidSelector: 'Ongeldige selector',
  invalidDomain: 'Ongeldig domein',
  generationFailed: 'Sleutelgeneratie mislukt',
  generating: 'RSA-sleutelpaar genereren in de browser...',
  generate: 'DKIM-sleutels genereren',

  dnsTitle: 'DNS TXT-record',
  keyInfo: (bits, chars) => `${bits} bits (${chars} ${chars === 1 ? 'teken' : 'tekens'})`,
  formatLabel: 'Formaat:',
  formatSingle: 'Enkele regel',
  formatChunked: 'Gesplitst (255 tekens)',
  formatBind: 'BIND-zone',
  hostLabel: 'Recordnaam / Host:',
  copied: 'Gekopieerd',
  copyHost: 'Kopieer host',
  orFqdn: (fqdn) => `(of ${fqdn})`,
  valueLabel: 'Recordwaarde (TXT):',
  copyValue: 'Kopieer waarde',
  chunkedNote:
    'Gebruik dit gesplitste formaat als uw DNS-host TXT-invoer beperkt tot 255 tekens per string.',

  privateKeyTitle: 'Privésleutel',
  pkcs1Label: 'PKCS#1 (RSA)',
  pkcs8Label: 'PKCS#8',
  hide: 'Verbergen',
  show: 'Tonen',
  reveal: 'Klik om privésleutel te tonen',
  copiedKey: 'Sleutel gekopieerd',
  copyPrivateKey: 'Kopieer privésleutel',
  downloadKey: 'Download sleutelbestand',
  downloadBundle: 'Download configuratie-instructies (.txt)',
  rulesTitle: 'Belangrijke implementatieregels:',
  rules: [
    'Houd deze privésleutel strikt vertrouwelijk. Configureer deze uitsluitend in uw mailserver of MTA.',
    'Publiceer eerst het DNS TXT-record. E-mails ondertekenen vóór DNS-propagatie leidt tot afleverproblemen.',
    'De meeste mailservers (Postfix, OpenDKIM, cPanel, Exim) verwachten het traditionele PKCS#1 RSA-formaat.',
  ],

  bundleFileName: (domain, selector) => `${domain}-${selector}-dkim-instructies.txt`,
  bundleText: (keys) => `DKIM CONFIGURATIE-INSTRUCTIES VOOR ${keys.domain.toUpperCase()}
Gegenereerd via de browser-gebaseerde DKIM-generator van Giggal.ai

==================================================
1. DNS TXT-RECORD
==================================================
Host / Naam:
${keys.dnsRecordName}
(of Volledige Domeinnaam FQDN: ${keys.dnsRecordFqdn})

TXT-recordwaarde (Enkele regel):
${keys.dnsRecordValue}

TXT-recordwaarde (Gesplitst in 255 tekens):
${keys.dnsRecordChunked}

BIND-zoneformaat:
${keys.bindRecord}

==================================================
2. PRIVÉSLEUTEL (Installeren in mailserver of MTA)
==================================================
Formaat: PKCS#1 (Klassiek RSA)
${keys.privateKeyPkcs1Pem}

Formaat: PKCS#8 (Standaard)
${keys.privateKeyPkcs8Pem}

==================================================
BELANGRIJKE IMPLEMENTATIE-INSTRUCTIES:
- Voeg het DNS TXT-record toe en controleer de zichtbaarheid VOORDAT u DKIM inschakelt.
- Houd de privésleutel vertrouwelijk. Publiceer deze nooit in DNS.
`,

  errors: {
    'selector-empty': 'De selector mag niet leeg zijn',
    'selector-too-long': 'De selector mag maximaal 63 tekens lang zijn',
    'selector-chars':
      'De selector mag alleen letters, cijfers en koppeltekens bevatten, en mag niet beginnen of eindigen met een koppelteken',
    'domain-empty': 'De domeinnaam mag niet leeg zijn',
    'domain-too-long': 'De domeinnaam is te lang',
    'domain-no-tld': 'Het domein moet een geldige extensie hebben (bijv. voorbeeld.nl)',
    'domain-label-length': 'Een onderdeel van het domein heeft een ongeldige lengte',
    'domain-label': (label) => `Het domein bevat een ongeldig onderdeel: "${label}"`,
    'no-web-crypto': 'De Web Crypto API (crypto.subtle) is niet beschikbaar in deze browser',
  },
}

const plTool: DkimToolStrings = {
  domainLabel: 'Nazwa domeny',
  domainPlaceholder: 'przyklad.pl',
  domainHelp: 'Domena nadawcy dla Twojej poczty wychodzącej',
  selectorLabel: 'Selektor DKIM',
  selectorPlaceholder: 's2026a',
  selectorHelp: 'Identyfikuje parę kluczy w DNS (np. s2026a)',
  keySizeLabel: 'Długość klucza',
  keySizeOptions: {
    2048: '2048 bitów (Zalecane)',
    1024: '1024 bity (minimum akceptowane przez Gmail)',
    4096: '4096 bitów (długi rekord, sprawdź swój hosting DNS)',
  },
  keySizeHelp: {
    2048: 'Rekomendowane przez Gmail oraz RFC 8301',
    1024: 'Standard przestarzały, podatny na współczesną kryptoanalizę',
    4096: 'Przekracza standardowy limit 512 bajtów pakietów DNS UDP',
  },
  invalidSelector: 'Nieprawidłowy selektor',
  invalidDomain: 'Nieprawidłowa domena',
  generationFailed: 'Generowanie kluczy nie powiodło się',
  generating: 'Generowanie pary kluczy RSA w przeglądarce...',
  generate: 'Generuj klucze DKIM',

  dnsTitle: 'Rekord DNS TXT',
  keyInfo: (bits, chars) => `${bits} bitów (${chars} ${chars === 1 ? 'znak' : chars < 5 ? 'znaki' : 'znaków'})`,
  formatLabel: 'Format:',
  formatSingle: 'Pojedynczy ciąg',
  formatChunked: 'Podział na 255 znaków',
  formatBind: 'Strefa BIND',
  hostLabel: 'Nazwa rekordu / Host:',
  copied: 'Skopiowano',
  copyHost: 'Kopiuj host',
  orFqdn: (fqdn) => `(lub ${fqdn})`,
  valueLabel: 'Wartość rekordu (TXT):',
  copyValue: 'Kopiuj wartość',
  chunkedNote:
    'Użyj tego formatu, jeśli Twój panel DNS ogranicza pojedynczy ciąg TXT do 255 znaków.',

  privateKeyTitle: 'Klucz prywatny',
  pkcs1Label: 'PKCS#1 (RSA)',
  pkcs8Label: 'PKCS#8',
  hide: 'Ukryj',
  show: 'Pokaż',
  reveal: 'Kliknij, aby odsłonić klucz prywatny',
  copiedKey: 'Klucz skopiowany',
  copyPrivateKey: 'Kopiuj klucz prywatny',
  downloadKey: 'Pobierz plik klucza',
  downloadBundle: 'Pobierz instrukcję wdrożenia (.txt)',
  rulesTitle: 'Ważne zasady wdrożenia:',
  rules: [
    'Zachowaj klucz prywatny w ścisłej tajemnicy. Skonfiguruj go wyłącznie na swoim serwerze pocztowym lub MTA.',
    'Najpierw opublikuj rekord DNS TXT. Wysyłanie podpisanych maili przed rozpropagowaniem DNS spowoduje błędy.',
    'Większość serwerów (Postfix, OpenDKIM, cPanel, Exim) oczekuje tradycyjnego formatu PKCS#1 RSA.',
  ],

  bundleFileName: (domain, selector) => `${domain}-${selector}-instrukcja-dkim.txt`,
  bundleText: (keys) => `INSTRUKCJA WDROŻENIA DKIM DLA ${keys.domain.toUpperCase()}
Wygenerowano za pomocą generatora DKIM w przeglądarce na Giggal.ai

==================================================
1. REKORD DNS TXT
==================================================
Host / Nazwa:
${keys.dnsRecordName}
(lub Pełna Nazwa Domenowa FQDN: ${keys.dnsRecordFqdn})

Wartość rekordu TXT (Pojedynczy ciąg):
${keys.dnsRecordValue}

Wartość rekordu TXT (Podział na 255 znaków w cudzysłowach):
${keys.dnsRecordChunked}

Format strefy BIND:
${keys.bindRecord}

==================================================
2. KLUCZ PRYWATNY (Do zainstalowania na serwerze pocztowym lub MTA)
==================================================
Format: PKCS#1 (Tradycyjne RSA)
${keys.privateKeyPkcs1Pem}

Format: PKCS#8 (Standardowy)
${keys.privateKeyPkcs8Pem}

==================================================
WAŻNE WSKAZÓWKI DOTYCZĄCE WDROŻENIA:
- Dodaj rekord DNS TXT i sprawdź jego dostępność ZANIM włączysz podpisywanie DKIM.
- Nie udostępniaj nikomu klucza prywatnego ani nie publikuj go w DNS.
`,

  errors: {
    'selector-empty': 'Selektor nie może być pusty',
    'selector-too-long': 'Selektor może mieć maksymalnie 63 znaki',
    'selector-chars':
      'Selektor może zawierać tylko litery, cyfry i myślniki, i nie może zaczynać się ani kończyć myślnikiem',
    'domain-empty': 'Nazwa domeny nie może być pusta',
    'domain-too-long': 'Nazwa domeny jest zbyt długa',
    'domain-no-tld': 'Domena musi posiadać prawidłowe rozszerzenie TLD (np. przyklad.pl)',
    'domain-label-length': 'Część nazwy domeny ma nieprawidłową długość',
    'domain-label': (label) => `Domena zawiera nieprawidłowy człon: "${label}"`,
    'no-web-crypto': 'API Web Crypto (crypto.subtle) nie jest dostępne w tej przeglądarce',
  },
}

const idTool: DkimToolStrings = {
  domainLabel: 'Nama Domain',
  domainPlaceholder: 'contoh.id',
  domainHelp: 'Domain pengirim untuk email keluar Anda',
  selectorLabel: 'Selektor DKIM',
  selectorPlaceholder: 's2026a',
  selectorHelp: 'Mengidentifikasi pasangan kunci ini di DNS (mis. s2026a)',
  keySizeLabel: 'Ukuran Kunci',
  keySizeOptions: {
    2048: '2048 bit (Direkomendasikan)',
    1024: '1024 bit (batas minimum Gmail)',
    4096: '4096 bit (catatan panjang, periksa penyedia DNS Anda)',
  },
  keySizeHelp: {
    2048: 'Direkomendasikan oleh Gmail dan RFC 8301',
    1024: 'Panjang usang, rentan terhadap kriptanalisis modern',
    4096: 'Melebihi batas standar paket UDP DNS 512 byte',
  },
  invalidSelector: 'Selektor tidak valid',
  invalidDomain: 'Domain tidak valid',
  generationFailed: 'Gagal membuat kunci',
  generating: 'Membuat pasangan kunci RSA di browser...',
  generate: 'Buat kunci DKIM',

  dnsTitle: 'Catatan DNS TXT',
  keyInfo: (bits, chars) => `${bits} bit (${chars} karakter)`,
  formatLabel: 'Format:',
  formatSingle: 'String tunggal',
  formatChunked: 'Pemisahan 255 karakter',
  formatBind: 'Zona BIND',
  hostLabel: 'Nama Catatan / Host:',
  copied: 'Tersalin',
  copyHost: 'Salin host',
  orFqdn: (fqdn) => `(atau ${fqdn})`,
  valueLabel: 'Nilai Catatan (TXT):',
  copyValue: 'Salin nilai',
  chunkedNote:
    'Gunakan format terpisah ini jika penyedia DNS Anda membatasi teks TXT hingga 255 karakter per string.',

  privateKeyTitle: 'Kunci Privat',
  pkcs1Label: 'PKCS#1 (RSA)',
  pkcs8Label: 'PKCS#8',
  hide: 'Sembunyikan',
  show: 'Tampilkan',
  reveal: 'Klik untuk melihat kunci privat',
  copiedKey: 'Kunci tersalin',
  copyPrivateKey: 'Salin kunci privat',
  downloadKey: 'Unduh file kunci',
  downloadBundle: 'Unduh petunjuk pengaturan (.txt)',
  rulesTitle: 'Aturan penting pemasangan:',
  rules: [
    'Jaga kerahasiaan kunci privat ini. Hanya pasang di mail transfer agent (MTA) atau mail server Anda.',
    'Publikasikan catatan DNS TXT terlebih dahulu. Mengirim email sebelum propagasi DNS akan menyebabkan kegagalan autentikasi.',
    'Sebagian besar mail server (Postfix, OpenDKIM, cPanel, Exim) membutuhkan format tradisional PKCS#1 RSA.',
  ],

  bundleFileName: (domain, selector) => `${domain}-${selector}-petunjuk-dkim.txt`,
  bundleText: (keys) => `PETUNJUK PENYIAPAN DKIM UNTUK ${keys.domain.toUpperCase()}
Dibuat menggunakan generator DKIM sisi klien Giggal.ai

==================================================
1. CATATAN DNS TXT
==================================================
Host / Nama:
${keys.dnsRecordName}
(atau Nama Domain Lengkap FQDN: ${keys.dnsRecordFqdn})

Nilai Catatan TXT (String Tunggal):
${keys.dnsRecordValue}

Nilai Catatan TXT (Pemisahan 255 Karakter dalam Tanda Kutip):
${keys.dnsRecordChunked}

Format Zona BIND:
${keys.bindRecord}

==================================================
2. KUNCI PRIVAT (Pasang di mail server atau MTA Anda)
==================================================
Format: PKCS#1 (RSA Tradisional)
${keys.privateKeyPkcs1Pem}

Format: PKCS#8 (Standar)
${keys.privateKeyPkcs8Pem}

==================================================
CATATAN PENTING IMPLEMENTASI:
- Tambahkan catatan DNS TXT dan pastikan propagasinya SEBELUM mengaktifkan penandatanganan DKIM.
- Jangan pernah membagikan kunci privat atau mempublikasikannya di DNS.
`,

  errors: {
    'selector-empty': 'Selektor tidak boleh kosong',
    'selector-too-long': 'Selektor tidak boleh melebihi 63 karakter',
    'selector-chars':
      'Selektor hanya boleh memuat huruf, angka, dan tanda hubung, serta tidak boleh diawali atau diakhiri tanda hubung',
    'domain-empty': 'Nama domain tidak boleh kosong',
    'domain-too-long': 'Nama domain terlalu panjang',
    'domain-no-tld': 'Domain harus memiliki ekstensi TLD yang valid (mis. contoh.id)',
    'domain-label-length': 'Bagian nama domain memiliki panjang tidak valid',
    'domain-label': (label) => `Domain memuat bagian yang tidak valid: "${label}"`,
    'no-web-crypto': 'Web Crypto API (crypto.subtle) tidak tersedia pada browser ini',
  },
}

export const DKIM_TOOL_STRINGS: Record<Locale, DkimToolStrings> = { en, it: itTool, de: deTool, fr: frTool, es: esTool, 'pt-br': ptBrTool, nl: nlTool, pl: plTool, id: idTool }

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
