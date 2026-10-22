// All page copy for the DKIM generator, one object per language the page ships in.
// The page is components/tools/DkimGenerator/DkimGeneratorPage.tsx; the URLs live in
// CLUSTERS.dkimGenerator (lib/i18n/clusters.ts). The tool's own labels are in
// lib/i18n/tools/dkimToolStrings.ts.
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface DkimPageStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  ogImage: string
  ogAlt: string
  crumb: string
  appName: string
  featureList: string[]
  h1: string
  heroIntro: string
  howTitle: string
  howSteps: [string, string, string, string]
  /** May carry a link. */
  howNote: string
  imageAlt: string
  selectorTitle: string
  selectorParas: [string, string]
  recordTitle: string
  thTag: string
  thMeaning: string
  thExample: string
  /** One row per tag. `tag` and `example` are record syntax: keep them as they are. */
  tags: { tag: string; meaning: string; example: string }[]
  recordNote: string
  splitTitle: string
  splitText: string
  rotateTitle: string
  rotateText: string
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: DkimPageStrings = {
  metaTitle: 'Free DKIM Generator: Create a DKIM Key and Record | Giggal.ai',
  ogTitle: 'Free DKIM Generator: Create a DKIM Key and Record',
  description:
    'Generate a 2048-bit DKIM key pair and the DNS TXT record to publish, right in your browser. Your private key is never sent anywhere. Free, no signup.',
  ogImage: '/tools/dkim-generator-og-v2.webp',
  ogAlt: 'Free DKIM Generator',
  crumb: 'DKIM Generator',
  appName: 'Free DKIM Generator',
  featureList: [
    'Generate 2048-bit DKIM key pair in browser',
    'Formatted DNS TXT record for publication',
    'PKCS#1 and PKCS#8 private keys',
    '255-character string split for DNS compatibility',
    'Zero server transmission of private keys',
  ],
  h1: 'DKIM Generator',
  heroIntro: 'Create a DKIM key pair and the exact TXT record to publish.',
  howTitle: 'How to set up DKIM with a generated key',
  howSteps: [
    'Enter your domain and a selector, pick a key size and click Generate.',
    'At your DNS host, create a TXT record. Use the record name shown above (selector._domainkey, or the full name if your provider asks for it) and paste the TXT value.',
    "Install the private key in your mail server's DKIM signing settings, using the same selector and domain.",
    'Send a test message to a personal Gmail account and open Show original. Next to DKIM it should say PASS.',
  ],
  howNote:
    "If it doesn't pass, check that the DNS record has finished publishing and that the selector on the server matches the one in DNS exactly. For how DKIM fits with SPF and DMARC, see [SPF, DKIM and DMARC explained](/blog/spf-dkim-dmarc-explained).",
  imageAlt: 'Illustration of public and private keys securing an email message with cryptographic signature.',
  selectorTitle: 'Choosing a selector and key size',
  selectorParas: [
    "The selector is just a label, so pick one you'll recognize later. A date-based name like s2026a makes it obvious which key is current when you rotate. It can contain letters, digits and hyphens.",
    'For key size, 2048 bits is the safe default. Gmail requires DKIM keys of at least 1024 bits and recommends 2048, and RFC 8301 says signers must use at least 1024 bits and should use 2048. The same RFC requires receivers to handle keys up to 4096 bits, but a 4096-bit record is long enough that some DNS panels struggle with it, so only choose it if you have a reason to.',
  ],
  recordTitle: "What's in a DKIM record",
  thTag: 'Tag',
  thMeaning: 'What it means',
  thExample: 'Example',
  tags: [
    { tag: 'v', meaning: "Version. Optional, but if it's there it must come first", example: 'v=DKIM1' },
    { tag: 'k', meaning: 'Key type. rsa is the default', example: 'k=rsa' },
    { tag: 'p', meaning: 'The public key, base64 encoded. An empty p= means the key has been revoked', example: 'p=MIIBIjAN...' },
    { tag: 't', meaning: "Flags. y means testing, s means the key can't be used for subdomains", example: 't=y' },
  ],
  recordNote: 'Three more tags exist (h for hash algorithms, n for notes and s for service type), but you rarely need them.',
  splitTitle: 'Why long DKIM records get split',
  splitText:
    "A 2048-bit public key is about 390 characters long once it's base64 encoded. DNS stores TXT data as strings of up to 255 characters each (RFC 1035), so a key that long has to be published as two or more strings, and receivers join them back together before checking the signature. Most DNS panels split the value for you when you paste the single-string version. The zone-file version above is for people editing a BIND zone file directly, where the strings sit inside parentheses so the record can span several lines.",
  rotateTitle: 'Rotating DKIM keys',
  rotateText:
    'To change keys without breaking anything, generate a new pair under a new selector and publish its record alongside the old one. Switch your server to sign with the new selector, then remove the old record once the mail signed with it has been delivered.',
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'Is this DKIM generator safe to use?',
      a: 'The key pair is created by your browser’s built-in Web Crypto API, and the private key is never sent to our servers or anywhere else. That also means we can’t recover it, so download it before you leave the page.',
    },
    {
      q: 'Where does the private key go?',
      a: 'On your mail server, in its DKIM signing settings, and nowhere else. Never put it in DNS or send it by email. Only the public key, inside the TXT value, gets published.',
    },
    {
      q: 'Should I use 1024 or 2048 bits?',
      a: 'Use 2048 unless your DNS host can’t store the longer record. Gmail accepts 1024 as a minimum but recommends 2048, and RFC 8301 says signers should use at least 2048.',
    },
    {
      q: 'Why is my DKIM record split into several strings?',
      a: 'Each string in a TXT record can hold at most 255 characters, and a 2048-bit key is longer than that. Receivers join the strings back into one value, so splitting doesn’t change the record.',
    },
    {
      q: 'Which private key format should I use?',
      a: 'Many signing tools accept the standard PKCS#8 file (BEGIN PRIVATE KEY). If yours asks for BEGIN RSA PRIVATE KEY, download the PKCS#1 version instead; it’s the same key in an older format.',
    },
    {
      q: 'How do I check that DKIM is working?',
      a: 'Send a message from your server to a personal Gmail account, open it and choose Show original. Gmail lists the DKIM result near the top; you want PASS for your domain.',
    },
    {
      q: 'Can I use this key with Google Workspace or Microsoft 365?',
      a: 'No. Both create their own DKIM keys, so use the setup in their admin consoles. This tool is for servers where you control the signing key.',
    },
  ],
  ctaHeadline: 'DKIM sorted? Check your list next.',
  ctaSupporting: "Signed mail still bounces if the address doesn't exist. Verify your list before the next send. 1,000 free credits.",
  ctaButton: 'Get 1,000 free credits',
}

const it: DkimPageStrings = {
  metaTitle: 'Record DKIM: genera la chiave e il record DKIM gratis | Giggal.ai',
  ogTitle: 'Record DKIM: genera la chiave e il record DKIM gratis',
  description:
    'Genera nel browser una coppia di chiavi DKIM a 2048 bit e il record DKIM da pubblicare. La chiave privata non viene mai inviata. Gratis, senza registrazione.',
  ogLocale: 'it_IT',
  ogImage: '/og-card.png',
  ogAlt: 'Generatore di record DKIM gratuito',
  crumb: 'Record DKIM',
  appName: 'Generatore DKIM gratuito',
  featureList: [
    'Genera nel browser una coppia di chiavi DKIM a 2048 bit',
    'Record TXT formattato per la pubblicazione nel DNS',
    'Chiave privata nei formati PKCS#1 e PKCS#8',
    'Divisione in stringhe da 255 caratteri per la compatibilità DNS',
    'La chiave privata non viene mai inviata a un server',
  ],
  h1: 'Genera il record DKIM',
  heroIntro: 'Crea una coppia di chiavi DKIM e il record TXT esatto da pubblicare nel DNS.',
  howTitle: 'Come configurare DKIM con la chiave generata',
  howSteps: [
    'Inserisci il tuo dominio e un selettore, scegli la lunghezza della chiave e clicca su Genera le chiavi DKIM.',
    'Presso il gestore del DNS, crea un record TXT. Usa il nome del record mostrato qui sopra (selettore._domainkey, o il nome completo se il gestore lo chiede). Poi incolla il valore TXT.',
    'Installa la chiave privata nelle impostazioni di firma DKIM del tuo server di posta, con lo stesso selettore e lo stesso dominio.',
    'Invia un messaggio di prova a un account Gmail personale e apri Mostra originale. Accanto a DKIM deve comparire PASS.',
  ],
  howNote:
    'Se non passa, controlla che il record DKIM sia già pubblicato nel DNS. Controlla anche che il selettore sul server sia identico a quello nel DNS. Per sapere come DKIM funziona insieme a SPF e DMARC, leggi la nostra [guida a SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-explained).',
  imageAlt: "Illustrazione di chiavi pubbliche e private che proteggono un'email con una firma crittografica.",
  selectorTitle: 'Come scegliere il selettore e la lunghezza della chiave',
  selectorParas: [
    "Il selettore è solo un'etichetta, quindi scegline uno che riconoscerai in seguito. Un nome con una data, come s2026a, mostra subito qual è la chiave attuale quando la cambi. Può contenere lettere, cifre e trattini.",
    'Per la lunghezza della chiave, 2048 bit è la scelta sicura. Gmail chiede chiavi DKIM di almeno 1024 bit e consiglia 2048. La RFC 8301 dice che chi firma deve usare almeno 1024 bit e dovrebbe usarne 2048. La stessa RFC chiede ai server di destinazione di gestire chiavi fino a 4096 bit. Un record da 4096 bit, però, è così lungo che alcuni pannelli DNS lo gestiscono male. Scegli 4096 bit solo se hai un motivo preciso.',
  ],
  recordTitle: 'Cosa contiene un record DKIM',
  thTag: 'Tag',
  thMeaning: 'Cosa significa',
  thExample: 'Esempio',
  tags: [
    { tag: 'v', meaning: "Versione. È facoltativo, ma se c'è deve essere il primo tag", example: 'v=DKIM1' },
    { tag: 'k', meaning: 'Tipo di chiave. rsa è il valore predefinito', example: 'k=rsa' },
    { tag: 'p', meaning: 'La chiave pubblica, codificata in base64. Un p= vuoto significa che la chiave è stata revocata', example: 'p=MIIBIjAN...' },
    { tag: 't', meaning: 'Flag. y indica una fase di test, s indica che la chiave non si può usare per i sottodomini', example: 't=y' },
  ],
  recordNote: 'Esistono altri tre tag, ma servono di rado. Sono h per gli algoritmi di hash, n per le note e s per il tipo di servizio.',
  splitTitle: 'Perché i record DKIM lunghi vengono divisi',
  splitText:
    "Una chiave pubblica da 2048 bit, codificata in base64, è lunga circa 390 caratteri. Il DNS salva i dati TXT in stringhe di massimo 255 caratteri ciascuna (RFC 1035). Una chiave così lunga va quindi pubblicata in due o più stringhe. I server di destinazione le riuniscono prima di controllare la firma. La maggior parte dei pannelli DNS divide il valore da sola quando incolli la versione a stringa singola. Il formato Zona BIND qui sopra serve a chi modifica direttamente un file di zona. Lì le stringhe stanno tra parentesi, così il record può occupare più righe.",
  rotateTitle: 'Rotazione delle chiavi DKIM',
  rotateText:
    'Per cambiare chiave senza far fallire i controlli DKIM, genera una nuova coppia con un nuovo selettore. Pubblica il suo record DKIM accanto a quello vecchio. Poi imposta il server in modo che firmi con il nuovo selettore. Togli il vecchio record quando la posta firmata con la vecchia chiave è stata consegnata.',
  faqTitle: 'Domande frequenti',
  faqs: [
    {
      q: 'Questo generatore DKIM è sicuro?',
      a: 'La coppia di chiavi viene creata dalla Web Crypto API integrata nel tuo browser. La chiave privata non viene mai inviata ai nostri server né altrove. Per questo non possiamo nemmeno recuperarla, quindi scaricala prima di lasciare la pagina.',
    },
    {
      q: 'Dove va la chiave privata?',
      a: "Sul tuo server di posta, nelle impostazioni di firma DKIM, e da nessun'altra parte. Non metterla mai nel DNS e non inviarla per email. Si pubblica solo la chiave pubblica, dentro il valore TXT del record DKIM.",
    },
    {
      q: 'Meglio una chiave da 1024 o da 2048 bit?',
      a: 'Usa 2048, a meno che il tuo gestore DNS non riesca a salvare il record più lungo. Gmail accetta 1024 come minimo ma consiglia 2048. La RFC 8301 dice che chi firma dovrebbe usare almeno 2048 bit.',
    },
    {
      q: 'Perché il mio record DKIM è diviso in più stringhe?',
      a: 'Ogni stringa di un record TXT può contenere al massimo 255 caratteri, e una chiave da 2048 bit è più lunga. I server di destinazione riuniscono le stringhe in un unico valore, quindi la divisione non cambia il record.',
    },
    {
      q: 'Quale formato di chiave privata devo usare?',
      a: 'Molti strumenti di firma accettano il file standard PKCS#8 (BEGIN PRIVATE KEY). Se il tuo chiede BEGIN RSA PRIVATE KEY, scarica invece la versione PKCS#1. È la stessa chiave in un formato più vecchio.',
    },
    {
      q: 'Come verifico che il mio record DKIM funzioni?',
      a: 'Invia un messaggio dal tuo server a un account Gmail personale, aprilo e scegli Mostra originale. Gmail mostra il risultato DKIM in alto. Per il tuo dominio deve indicare PASS.',
    },
    {
      q: 'Posso usare questa chiave con Google Workspace o Microsoft 365?',
      a: 'No. Entrambi creano le proprie chiavi DKIM, quindi usa la configurazione nelle loro console di amministrazione. Questo strumento serve per i server dove gestisci tu la chiave di firma.',
    },
  ],
  ctaHeadline: 'DKIM configurato? Ora verifica la tua lista.',
}

const de: DkimPageStrings = {
  metaTitle: 'DKIM-Generator: Schlüssel und DKIM-Eintrag erstellen | Giggal.ai',
  ogTitle: 'DKIM-Generator: Schlüssel und DKIM-Eintrag erstellen',
  description:
    'Kostenloser DKIM-Generator: Erstellen Sie ein 2048-Bit-Schlüsselpaar und den DKIM-Eintrag im Browser. Der private Schlüssel bleibt bei Ihnen. Ohne Anmeldung.',
  ogLocale: 'de_DE',
  ogImage: '/og-card.png',
  ogAlt: 'Kostenloser DKIM-Generator von Giggal.ai',
  crumb: 'DKIM-Generator',
  appName: 'Kostenloser DKIM-Generator',
  featureList: [
    'Erstellt ein DKIM-Schlüsselpaar mit 2048 Bit im Browser',
    'Fertig formatierter DNS-TXT-Eintrag zum Veröffentlichen',
    'Private Schlüssel in den Formaten PKCS#1 und PKCS#8',
    'DNS-kompatible Aufteilung in Strings mit höchstens 255 Zeichen',
    'Private Schlüssel werden nie an einen Server gesendet',
  ],
  h1: 'DKIM-Generator',
  heroIntro: 'Der DKIM-Generator erstellt ein Schlüsselpaar und genau den TXT-Eintrag, den Sie im DNS veröffentlichen.',
  howTitle: 'So richten Sie DKIM mit dem neuen Schlüssel ein',
  howSteps: [
    'Geben Sie Ihre Domain und einen Selector ein. Wählen Sie eine Schlüssellänge und klicken Sie auf "DKIM-Schlüssel erstellen".',
    'Legen Sie bei Ihrem DNS-Anbieter einen TXT-Eintrag an. Nutzen Sie den Namen, der oben angezeigt wird: selector._domainkey oder den vollständigen Namen, wenn Ihr Anbieter ihn verlangt. Fügen Sie dann den TXT-Wert ein.',
    'Tragen Sie den privaten Schlüssel in die DKIM-Einstellungen Ihres Mailservers ein. Verwenden Sie dort denselben Selector und dieselbe Domain.',
    'Senden Sie eine Testnachricht an ein privates Gmail-Konto und öffnen Sie "Original anzeigen". Neben DKIM sollte PASS stehen.',
  ],
  howNote:
    'Steht dort kein PASS, prüfen Sie zwei Dinge. Ist der DKIM-Eintrag schon im DNS veröffentlicht? Und stimmt der Selector auf dem Server genau mit dem im DNS überein? Wie DKIM mit SPF und DMARC zusammenarbeitet, lesen Sie in [SPF, DKIM und DMARC erklärt](/blog/spf-dkim-dmarc-explained).',
  imageAlt: 'Illustration: Ein öffentlicher und ein privater DKIM-Schlüssel sichern eine E-Mail mit einer kryptografischen Signatur.',
  selectorTitle: 'Selector und Schlüssellänge wählen',
  selectorParas: [
    'Der Selector ist nur ein Name. Wählen Sie also einen, den Sie später wiedererkennen. Ein Name mit Datum wie s2026a zeigt beim Schlüsselwechsel sofort, welcher Schlüssel aktuell ist. Der Selector darf Buchstaben, Ziffern und Bindestriche enthalten.',
    'Bei der Schlüssellänge sind 2048 Bit die sichere Standardwahl. Gmail verlangt DKIM-Schlüssel mit mindestens 1024 Bit und empfiehlt 2048 Bit. Laut RFC 8301 müssen signierende Server mindestens 1024 Bit verwenden, sollten aber 2048 Bit wählen. Derselbe RFC verlangt, dass Empfänger Schlüssel bis 4096 Bit verarbeiten können. Ein Eintrag mit 4096 Bit ist aber so lang, dass manche DNS-Oberflächen damit Probleme haben. Wählen Sie 4096 Bit deshalb nur, wenn Sie einen Grund dafür haben.',
  ],
  recordTitle: 'Was in einem DKIM-Eintrag steht',
  thTag: 'Tag',
  thMeaning: 'Bedeutung',
  thExample: 'Beispiel',
  tags: [
    { tag: 'v', meaning: 'Version. Optional, aber wenn vorhanden, muss sie zuerst stehen', example: 'v=DKIM1' },
    { tag: 'k', meaning: 'Schlüsseltyp. rsa ist der Standard', example: 'k=rsa' },
    { tag: 'p', meaning: 'Der öffentliche Schlüssel, Base64-kodiert. Ein leeres p= bedeutet, dass der Schlüssel widerrufen wurde', example: 'p=MIIBIjAN...' },
    { tag: 't', meaning: 'Flags. y bedeutet Testmodus, s bedeutet, dass der Schlüssel nicht für Subdomains gilt', example: 't=y' },
  ],
  recordNote:
    'Der DKIM-Eintrag, oft auch DKIM-Record genannt, kennt drei weitere Tags: h für Hash-Algorithmen, n für Notizen und s für den Diensttyp. Sie werden selten gebraucht.',
  splitTitle: 'Warum lange DKIM-Einträge aufgeteilt werden',
  splitText:
    'Ein öffentlicher Schlüssel mit 2048 Bit ist Base64-kodiert etwa 390 Zeichen lang. Das DNS speichert TXT-Daten in Strings mit je höchstens 255 Zeichen (RFC 1035). Ein so langer Schlüssel muss deshalb als zwei oder mehr Strings veröffentlicht werden. Empfänger fügen sie wieder zusammen, bevor sie die Signatur prüfen. Die meisten DNS-Oberflächen teilen den Wert selbst auf, wenn Sie die Version als einzelnen String einfügen. Das Format "BIND-Zone" oben ist für alle, die eine BIND-Zonendatei direkt bearbeiten. Dort stehen die Strings in Klammern, damit der Eintrag über mehrere Zeilen gehen kann.',
  rotateTitle: 'DKIM-Schlüssel wechseln',
  rotateText:
    'So wechseln Sie den Schlüssel, ohne dass etwas ausfällt: Erstellen Sie ein neues Schlüsselpaar unter einem neuen Selector. Veröffentlichen Sie den neuen DKIM-Eintrag zusätzlich zum alten. Stellen Sie Ihren Server dann auf den neuen Selector um. Entfernen Sie den alten Eintrag erst, wenn alle damit signierten E-Mails zugestellt sind.',
  faqTitle: 'Häufige Fragen zum DKIM-Generator',
  faqs: [
    {
      q: 'Ist dieser DKIM-Generator sicher?',
      a: 'Die eingebaute Web Crypto API Ihres Browsers erstellt das Schlüsselpaar. Der private Schlüssel wird nie an unsere Server oder anderswohin gesendet. Deshalb können wir ihn auch nicht wiederherstellen. Laden Sie ihn herunter, bevor Sie die Seite verlassen.',
    },
    {
      q: 'Wohin gehört der private Schlüssel?',
      a: 'Auf Ihren Mailserver, in dessen DKIM-Einstellungen, und nirgendwo sonst. Tragen Sie ihn nie im DNS ein und senden Sie ihn nie per E-Mail. Veröffentlicht wird nur der öffentliche Schlüssel im TXT-Wert.',
    },
    {
      q: 'Soll ich 1024 oder 2048 Bit nutzen?',
      a: 'Nutzen Sie 2048 Bit, außer Ihr DNS-Anbieter kann den längeren Eintrag nicht speichern. Gmail akzeptiert 1024 Bit als Minimum, empfiehlt aber 2048 Bit. Laut RFC 8301 sollten signierende Server mindestens 2048 Bit nutzen.',
    },
    {
      q: 'Warum ist mein DKIM-Eintrag in mehrere Strings aufgeteilt?',
      a: 'Jeder String in einem TXT-Eintrag fasst höchstens 255 Zeichen, und ein Schlüssel mit 2048 Bit ist länger. Empfänger fügen die Strings wieder zu einem Wert zusammen. Die Aufteilung ändert den Eintrag also nicht.',
    },
    {
      q: 'Welches Format für den privaten Schlüssel soll ich nutzen?',
      a: 'Viele Signatur-Tools akzeptieren die Standarddatei im Format PKCS#8 (BEGIN PRIVATE KEY). Verlangt Ihr Tool BEGIN RSA PRIVATE KEY, laden Sie stattdessen die PKCS#1-Version herunter. Das ist derselbe Schlüssel in einem älteren Format.',
    },
    {
      q: 'Wie prüfe ich, ob DKIM funktioniert?',
      a: 'Senden Sie eine Nachricht von Ihrem Server an ein privates Gmail-Konto. Öffnen Sie sie und wählen Sie "Original anzeigen". Gmail zeigt das DKIM-Ergebnis weit oben. Dort sollte PASS für Ihre Domain stehen.',
    },
    {
      q: 'Kann ich diesen Schlüssel mit Google Workspace oder Microsoft 365 nutzen?',
      a: 'Nein. Beide erstellen ihre eigenen DKIM-Schlüssel. Richten Sie DKIM dort in der jeweiligen Admin-Konsole ein. Dieses Tool ist für Server, bei denen Sie den Signaturschlüssel selbst verwalten.',
    },
  ],
  ctaHeadline: 'DKIM eingerichtet? Prüfen Sie als Nächstes Ihre E-Mail-Liste',
}

export const DKIM_PAGE_STRINGS: Partial<Record<Locale, DkimPageStrings>> & { en: DkimPageStrings } = { en, it, de }
