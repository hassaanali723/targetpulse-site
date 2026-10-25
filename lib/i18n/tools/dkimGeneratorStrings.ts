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


const fr: DkimPageStrings = {
  metaTitle: 'Générateur DKIM Gratuit : Créer une Clé et un Enregistrement DKIM | Giggal.ai',
  ogTitle: 'Générateur DKIM Gratuit : Créer une Clé et un Enregistrement DKIM',
  description:
    'Générez directement dans votre navigateur une paire de clés DKIM de 2048 bits et l\'enregistrement DNS TXT à publier. Clé privée jamais transmise. Gratuit, sans inscription.',
  ogLocale: 'fr_FR',
  ogImage: '/og-card.png',
  ogAlt: 'Générateur DKIM Gratuit',
  crumb: 'Générateur DKIM',
  appName: 'Générateur DKIM Gratuit',
  featureList: [
    'Génération de clés DKIM RSA 2048 bits dans le navigateur',
    'Enregistrement DNS TXT préformaté pour publication immédiate',
    'Clés privées aux formats PKCS#1 et PKCS#8',
    'Découpage automatique en chaînes de 255 caractères (conformité DNS)',
    'Sécurité totale : aucune clé privée transmise au serveur',
  ],
  h1: 'Générateur DKIM',
  heroIntro: 'Créez une paire de clés DKIM et l\'enregistrement TXT exact à publier dans votre DNS.',
  howTitle: 'Comment configurer DKIM avec la clé générée',
  howSteps: [
    'Entrez votre nom de domaine et un sélecteur, choisissez la taille de clé et cliquez sur Générer.',
    'Chez votre hébergeur DNS, créez un enregistrement TXT. Utilisez le nom affiché (selecteur._domainkey ou nom FQDN complet) et collez la valeur TXT.',
    'Installez la clé privée dans les paramètres de signature DKIM de votre serveur de messagerie avec les mêmes domaine et sélecteur.',
    'Envoyez un message de test vers une adresse Gmail personnelle et ouvrez "Afficher l\'original". La ligne DKIM doit afficher PASS.',
  ],
  howNote:
    'Si le test échoue, vérifiez la propagation DNS et assurez-vous que le sélecteur sur le serveur correspond exactement à celui du DNS. Pour comprendre l\'articulation entre SPF, DKIM et DMARC, consultez notre [guide explicatif SPF, DKIM et DMARC](/blog/spf-dkim-dmarc-explained).',
  imageAlt: 'Illustration des clés publique et privée sécurisant un e-mail avec une signature cryptographique.',
  selectorTitle: 'Choisir un sélecteur et une taille de clé',
  selectorParas: [
    'Le sélecteur est simplement une étiquette textuelle : choisissez-en une facile à reconnaître plus tard. Un préfixe temporel comme s2026a indique clairement quelle clé est active lors des rotations. Il peut contenir des lettres, des chiffres et des tirets.',
    'Pour la taille de la clé, 2048 bits est le standard recommandé. Gmail exige au moins 1024 bits et préconise 2048 bits. La RFC 8301 stipule que les expéditeurs doivent utiliser au moins 1024 bits et devraient adopter 2048 bits. Bien que la RFC permette aux destinataires de gérer jusqu\'à 4096 bits, de nombreuses consoles DNS gèrent mal les chaînes très longues ; privilégiez 2048 bits.',
  ],
  recordTitle: 'Composition d\'un enregistrement DKIM',
  thTag: 'Balise',
  thMeaning: 'Signification',
  thExample: 'Exemple',
  tags: [
    { tag: 'v', meaning: 'Version du protocole. Optionnel, mais si présent doit figurer en premier', example: 'v=DKIM1' },
    { tag: 'k', meaning: 'Type d\'algorithme de clé. rsa est la valeur par défaut', example: 'k=rsa' },
    { tag: 'p', meaning: 'Clé publique encodée en base64. Une valeur vide (p=) révoque la clé', example: 'p=MIIBIjAN...' },
    { tag: 't', meaning: 'Indicateurs (flags). y pour le mode test, s pour restreindre au domaine principal', example: 't=y' },
  ],
  recordNote: 'Trois balises supplémentaires existent (h pour les algorithmes de hachage, n pour les notes, s pour le type de service), mais elles sont rarement nécessaires.',
  splitTitle: 'Pourquoi les longs enregistrements DKIM sont scindés',
  splitText:
    'Une clé publique de 2048 bits mesure environ 390 caractères une fois encodée en base64. Le protocole DNS stocke les données TXT sous forme de chaînes d\'au plus 255 caractères (RFC 1035). Une clé de 2048 bits doit donc être publiée sous forme de deux ou plusieurs chaînes concaténées que les serveurs récepteurs regroupent avant validation. La plupart des consoles DNS effectuent ce découpage automatiquement si vous collez la chaîne unique. Le format BIND est conçu pour l\'édition directe de fichiers de zone.',
  rotateTitle: 'Rotation des clés DKIM',
  rotateText:
    'Pour renouveler vos clés en toute sécurité, générez une nouvelle paire avec un nouveau sélecteur et publiez son enregistrement DNS à côté de l\'ancien. Configurez ensuite votre serveur pour signer avec le nouveau sélecteur, puis supprimez l\'ancien enregistrement une fois tous les e-mails en transit livrés.',
  faqTitle: 'Foire aux questions',
  faqs: [
    {
      q: 'Ce générateur DKIM est-il sécurisé ?',
      a: 'La paire de clés est créée directement par l\'API Web Crypto intégrée à votre navigateur. La clé privée n\'est jamais transmise à nos serveurs ni à aucun tiers. Nous ne pouvons pas la récupérer, veillez donc à la télécharger avant de quitter la page.',
    },
    {
      q: 'Où doit être installée la clé privée ?',
      a: 'Uniquement sur votre serveur de messagerie, dans ses paramètres de signature DKIM. Ne la publiez jamais dans le DNS et ne l\'envoyez jamais par e-mail. Seule la clé publique, dans la valeur TXT, est rendue publique.',
    },
    {
      q: 'Vaut-il mieux utiliser 1024 ou 2048 bits ?',
      a: 'Utilisez 2048 bits, à moins que votre hébergeur DNS ne supporte pas les enregistrements longs. Gmail accepte 1024 bits au minimum mais recommande 2048 bits, et la RFC 8301 préconise l\'adoption de 2048 bits.',
    },
    {
      q: 'Pourquoi mon enregistrement DKIM est-il divisé en plusieurs chaînes ?',
      a: 'Chaque chaîne d\'un enregistrement TXT DNS ne peut dépasser 255 caractères, et une clé 2048 bits est plus longue. Les serveurs de réception rassemblent ces fragments en une seule valeur lors de la vérification.',
    },
    {
      q: 'Quel format de clé privée dois-je choisir ?',
      a: 'La plupart des outils de messagerie acceptent le format standard PKCS#8 (BEGIN PRIVATE KEY). Si votre logiciel requiert BEGIN RSA PRIVATE KEY, téléchargez la version PKCS#1 ; c\'est la même clé dans un format plus traditionnel.',
    },
    {
      q: 'Comment vérifier que DKIM fonctionne correctement ?',
      a: 'Envoyez un e-mail depuis votre serveur vers un compte Gmail personnel, ouvrez le message et sélectionnez "Afficher l\'original". Gmail affiche le statut DKIM en haut : vous devez voir PASS pour votre domaine.',
    },
    {
      q: 'Puis-je utiliser cette clé avec Google Workspace ou Microsoft 365 ?',
      a: 'Non. Google Workspace et Microsoft 365 génèrent automatiquement leurs propres clés DKIM depuis leurs consoles d\'administration. Cet outil est destiné aux serveurs où vous gérez vous-même les clés de signature.',
    },
  ],
  ctaHeadline: 'DKIM configuré ? Vérifiez maintenant votre liste d\'e-mails.',
}

const es: DkimPageStrings = {
  metaTitle: 'Generador DKIM Gratis: Crear Claves y Registro DKIM | Giggal.ai',
  ogTitle: 'Generador DKIM Gratis: Crear Claves y Registro DKIM',
  description:
    'Genera en tu navegador un par de claves DKIM de 2048 bits y el registro DNS TXT para publicar. Tu clave privada nunca se envía a ningún servidor. Gratis y sin registro.',
  ogLocale: 'es_ES',
  ogImage: '/og-card.png',
  ogAlt: 'Generador DKIM Gratuito',
  crumb: 'Generador DKIM',
  appName: 'Generador DKIM Gratis',
  featureList: [
    'Genera un par de claves DKIM RSA de 2048 bits en el navegador',
    'Registro DNS TXT formateado para publicación inmediata',
    'Claves privadas en formatos estándar PKCS#1 y PKCS#8',
    'División automática en fragmentos de 255 caracteres para DNS',
    'Máxima privacidad: la clave privada nunca sale de tu equipo',
  ],
  h1: 'Generador DKIM',
  heroIntro: 'Crea un par de claves DKIM y el registro TXT exacto para publicar en tu DNS.',
  howTitle: 'Cómo configurar DKIM con la clave generada',
  howSteps: [
    'Ingresa tu dominio y un selector, elige el tamaño de clave y haz clic en Generar claves DKIM.',
    'En tu proveedor DNS, crea un registro TXT. Usa el nombre mostrado arriba (selector._domainkey o nombre FQDN completo) y pega el valor TXT.',
    'Instala la clave privada en los ajustes de firma DKIM de tu servidor de correo, usando el mismo selector y dominio.',
    'Envía un mensaje de prueba a una cuenta personal de Gmail y abre "Mostrar original". Junto a DKIM debe indicar PASS.',
  ],
  howNote:
    'Si no pasa, comprueba que el registro DNS se haya propagado y que el selector en el servidor coincida exactamente con el de DNS. Para entender cómo DKIM se complementa con SPF y DMARC, lee nuestra [guía de SPF, DKIM y DMARC](/blog/spf-dkim-dmarc-explained).',
  imageAlt: 'Ilustración de claves pública y privada protegiendo un correo electrónico con firma criptográfica.',
  selectorTitle: 'Cómo elegir selector y tamaño de clave',
  selectorParas: [
    'El selector es simplemente una etiqueta identificadora: elige una que reconozcas fácilmente más adelante. Un nombre con fecha como s2026a permite identificar de inmediato qué clave está activa al realizar rotaciones. Puede contener letras, dígitos y guiones.',
    'Para el tamaño de la clave, 2048 bits es la opción recomendada y segura. Gmail requiere claves DKIM de al menos 1024 bits y recomienda 2048. El estándar RFC 8301 establece que los remitentes deben usar al menos 1024 bits y deberían usar 2048. Aunque el RFC exige a los receptores admitir claves de hasta 4096 bits, algunos paneles DNS presentan problemas con registros tan extensos; utiliza 2048 bits como estándar.',
  ],
  recordTitle: 'Qué contiene un registro DKIM',
  thTag: 'Etiqueta',
  thMeaning: 'Significado',
  thExample: 'Ejemplo',
  tags: [
    { tag: 'v', meaning: 'Versión del protocolo. Opcional, pero si existe debe ser la primera etiqueta', example: 'v=DKIM1' },
    { tag: 'k', meaning: 'Tipo de clave criptográfica. rsa es el valor por defecto', example: 'k=rsa' },
    { tag: 'p', meaning: 'Clave pública codificada en base64. Un valor vacío (p=) indica revocación', example: 'p=MIIBIjAN...' },
    { tag: 't', meaning: 'Indicadores (flags). y indica modo de prueba, s prohíbe subdominios', example: 't=y' },
  ],
  recordNote: 'Existen tres etiquetas adicionales (h para algoritmos hash, n para notas y s para tipo de servicio), pero rara vez se requieren.',
  splitTitle: 'Por qué se dividen los registros DKIM largos',
  splitText:
    'Una clave pública de 2048 bits tiene aproximadamente 390 caracteres tras su codificación en base64. El protocolo DNS almacena cadenas TXT en bloques de hasta 255 caracteres (RFC 1035). Por ello, una clave de 2048 bits debe publicarse en dos o más fragmentos entrecomillados que el servidor receptor une antes de comprobar la firma. La mayoría de paneles DNS dividen la clave automáticamente al pegar la versión de una sola línea. El formato de zona BIND permite estructurar registros en múltiples líneas entre paréntesis.',
  rotateTitle: 'Rotación periódica de claves DKIM',
  rotateText:
    'Para renovar claves sin interrumpir el flujo de correo, genera un nuevo par con un selector distinto y publica su registro DNS en paralelo con el anterior. Configura el servidor de correo para firmar con el nuevo selector y retira el registro antiguo solo cuando todos los correos enviados previamente hayan sido entregados.',
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      q: '¿Este generador DKIM es seguro?',
      a: 'El par de claves se genera directamente mediante la Web Crypto API integrada en tu navegador. La clave privada nunca se transmite a nuestros servidores ni a terceros. Por tanto, no podemos recuperarla: descárgala antes de salir de la página.',
    },
    {
      q: '¿Dónde se instala la clave privada?',
      a: 'Únicamente en tu servidor de correo, dentro de sus ajustes de firma DKIM. Jamás la publiques en el DNS ni la envíes por correo electrónico. Solo la clave pública, dentro del valor TXT, se hace pública.',
    },
    {
      q: '¿Es preferible una clave de 1024 o de 2048 bits?',
      a: 'Usa 2048 bits salvo que tu proveedor DNS no soporte registros extensos. Gmail acepta 1024 bits como mínimo pero recomienda 2048, y la RFC 8301 recomienda que los remitentes empleen al menos 2048 bits.',
    },
    {
      q: '¿Por qué mi registro DKIM aparece dividido en varias cadenas?',
      a: 'Cada cadena en un registro DNS TXT admite un máximo de 255 caracteres, y una clave de 2048 bits supera ese límite. Los servidores receptores unen automáticamente los fragmentos, por lo que la división no altera el registro.',
    },
    {
      q: '¿Qué formato de clave privada debo descargar?',
      a: 'Muchas plataformas admiten el formato estándar PKCS#8 (BEGIN PRIVATE KEY). Si tu software requiere BEGIN RSA PRIVATE KEY, descarga la versión PKCS#1; se trata de la misma clave en un formato tradicional.',
    },
    {
      q: '¿Cómo compruebo que DKIM está funcionando?',
      a: 'Envía un correo desde tu servidor a una cuenta personal de Gmail, abre el mensaje y selecciona "Mostrar original". En la cabecera verás el resultado de DKIM: debe indicar PASS para tu dominio.',
    },
    {
      q: '¿Puedo usar esta clave con Google Workspace o Microsoft 365?',
      a: 'No. Tanto Google Workspace como Microsoft 365 generan sus propias claves DKIM en sus respectivas consolas de administración. Esta herramienta está pensada para servidores propios o MTAs donde gestionas directamente las claves.',
    },
  ],
  ctaHeadline: '¿DKIM configurado? Verifica ahora tu lista de correo.',
}

const ptBr: DkimPageStrings = {
  metaTitle: 'Gerador DKIM Grátis: Criar Chaves e Registro DKIM | Giggal.ai',
  ogTitle: 'Gerador DKIM Grátis: Criar Chaves e Registro DKIM',
  description:
    'Gere no seu navegador um par de chaves DKIM de 2048 bits e o registro DNS TXT para publicar. Sua chave privada nunca é enviada ao servidor. Gratuito, sem cadastro.',
  ogLocale: 'pt_BR',
  ogImage: '/og-card.png',
  ogAlt: 'Gerador DKIM Gratuito',
  crumb: 'Gerador DKIM',
  appName: 'Gerador DKIM Gratuito',
  featureList: [
    'Geração de par de chaves DKIM RSA de 2048 bits direto no navegador',
    'Registro DNS TXT formatado para publicação imediata',
    'Chaves privadas nos formatos PKCS#1 e PKCS#8',
    'Divisão automática em strings de 255 caracteres para compatibilidade DNS',
    'Segurança total: a chave privada nunca é transmitida a servidores',
  ],
  h1: 'Gerador DKIM',
  heroIntro: 'Crie um par de chaves DKIM e o registro TXT exato para publicar no seu DNS.',
  howTitle: 'Como configurar o DKIM com a chave gerada',
  howSteps: [
    'Insira seu domínio e um seletor, escolha o tamanho da chave e clique em Gerar chaves DKIM.',
    'No seu provedor DNS, crie um registro TXT. Use o nome exibido acima (seletor._domainkey ou o nome FQDN completo) e cole o valor TXT.',
    'Instale a chave privada nas configurações de assinatura DKIM do seu servidor de e-mail, utilizando o mesmo seletor e domínio.',
    'Envie uma mensagem de teste para um Gmail pessoal e abra "Mostrar original". Ao lado de DKIM deve constar PASS.',
  ],
  howNote:
    'Se o teste falhar, verifique a propagação do DNS e confirme se o seletor no servidor coincide exatamente com o publicado no DNS. Para entender como o DKIM trabalha com SPF e DMARC, confira nosso [guia explicativo de SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-explained).',
  imageAlt: 'Ilustração de chaves pública e privada protegendo mensagens de e-mail com assinatura criptográfica.',
  selectorTitle: 'Escolhendo o seletor e o tamanho da chave',
  selectorParas: [
    'O seletor é apenas um identificador: escolha um nome que você reconheça facilmente mais tarde. Um prefixo com data como s2026a torna evidente qual chave está ativa durante rotatividades periódicas. Pode conter letras, números e hifens.',
    'Para o tamanho da chave, 2048 bits é o padrão seguro e recomendado. O Gmail exige chaves DKIM de pelo menos 1024 bits e recomenda 2048. O RFC 8301 estipula que remetentes devem usar no mínimo 1024 bits e deveriam adotar 2048. Embora receptores devam suportar até 4096 bits, registros de 4096 bits são extensos e causam problemas em alguns painéis DNS; utilize 2048 bits.',
  ],
  recordTitle: 'O que contém um registro DKIM',
  thTag: 'Tag',
  thMeaning: 'Significado',
  thExample: 'Exemplo',
  tags: [
    { tag: 'v', meaning: 'Versão do protocolo. Opcional, mas se presente deve ser a primeira tag', example: 'v=DKIM1' },
    { tag: 'k', meaning: 'Tipo de algoritmo de chave. rsa é o padrão', example: 'k=rsa' },
    { tag: 'p', meaning: 'Chave pública codificada em base64. Um p= vazio indica revogação da chave', example: 'p=MIIBIjAN...' },
    { tag: 't', meaning: 'Flags. y para modo de teste, s proíbe uso em subdomínios', example: 't=y' },
  ],
  recordNote: 'Existem outras três tags (h para algoritmos de hash, n para notas e s para tipo de serviço), mas raramente são necessárias.',
  splitTitle: 'Por que registros DKIM longos são divididos',
  splitText:
    'Uma chave pública de 2048 bits possui cerca de 390 caracteres após a codificação base64. O DNS armazena registros TXT em cadeias de até 255 caracteres (RFC 1035). Por isso, uma chave desse tamanho precisa ser publicada em duas ou mais strings entre aspas, que o servidor destinatário junta antes de validar a assinatura. A maioria dos painéis DNS divide automaticamente o texto ao colar a versão de linha única. O formato de zona BIND é indicado para quem edita diretamente arquivos de configuração de servidores DNS.',
  rotateTitle: 'Rotação de chaves DKIM',
  rotateText:
    'Para substituir chaves com segurança, gere um novo par com um novo seletor e publique o novo registro no DNS mantendo o antigo ativo. Configure seu servidor para assinar com o novo seletor e remova o registro anterior apenas quando todas as mensagens enviadas tiverem sido entregues.',
  faqTitle: 'Perguntas frequentes',
  faqs: [
    {
      q: 'Este gerador DKIM é seguro?',
      a: 'O par de chaves é gerado no próprio navegador usando a Web Crypto API. A chave privada nunca é enviada aos nossos servidores nem a terceiros. Como não temos acesso a ela, faça o download antes de fechar a página.',
    },
    {
      q: 'Onde deve ser salva a chave privada?',
      a: 'Apenas no seu servidor de e-mail ou MTA, nas configurações de assinatura DKIM. Nunca a publique no DNS nem a compartilhe por e-mail. Apenas a chave pública, dentro do valor TXT, é divulgada.',
    },
    {
      q: 'Devo escolher 1024 ou 2048 bits?',
      a: 'Escolha 2048 bits, a menos que seu host DNS não consiga salvar registros longos. O Gmail aceita 1024 como mínimo mas recomenda 2048, e o RFC 8301 define 2048 bits como o padrão ideal.',
    },
    {
      q: 'Por que meu registro DKIM foi dividido em várias partes?',
      a: 'Cada cadeia em um registro TXT no DNS suporta até 255 caracteres, e uma chave de 2048 bits ultrapassa esse limite. Os servidores de destino reconstroem o texto original ao verificar a assinatura.',
    },
    {
      q: 'Qual formato de chave privada devo usar?',
      a: 'Muitos softwares utilizam o formato moderno PKCS#8 (BEGIN PRIVATE KEY). Se sua ferramenta exigir BEGIN RSA PRIVATE KEY, baixe a versão PKCS#1; trata-se da mesma chave em formato clássico.',
    },
    {
      q: 'Como testar se o DKIM está funcionando?',
      a: 'Envie um e-mail do seu servidor para uma conta do Gmail, abra o e-mail e clique em "Mostrar original". No relatório de autenticação, o campo DKIM deve indicar PASS para o seu domínio.',
    },
    {
      q: 'Posso usar essa chave com Google Workspace ou Microsoft 365?',
      a: 'Não. O Google Workspace e o Microsoft 365 criam suas próprias chaves DKIM em seus painéis de administração. Este gerador é destinado a servidores próprios nos quais você gerencia diretamente as chaves.',
    },
  ],
  ctaHeadline: 'DKIM configurado? Valide sua lista de e-mails agora.',
}

const nl: DkimPageStrings = {
  metaTitle: 'Gratis DKIM Generator: Maak DKIM Sleutels en TXT Record | Giggal.ai',
  ogTitle: 'Gratis DKIM Generator: Maak DKIM Sleutels en TXT Record',
  description:
    'Genereer direct in uw browser een 2048-bits DKIM-sleutelpaar en het DNS TXT-record om te publiceren. Uw privésleutel verlaat nooit uw apparaat. Gratis, zonder registratie.',
  ogLocale: 'nl_NL',
  ogImage: '/og-card.png',
  ogAlt: 'Gratis DKIM Generator',
  crumb: 'DKIM Generator',
  appName: 'Gratis DKIM Generator',
  featureList: [
    'Genereer een 2048-bits DKIM RSA-sleutelpaar direct in de browser',
    'Geformatteerd DNS TXT-record voor directe publicatie',
    'Privésleutels in standaard PKCS#1 en PKCS#8 formaten',
    'Automatische 255-tekens splitsing voor DNS-compatibiliteit',
    'Maximale beveiliging: privésleutels worden nooit naar een server verzonden',
  ],
  h1: 'DKIM Generator',
  heroIntro: 'Maak een DKIM-sleutelpaar en het exacte TXT-record om te publiceren in uw DNS.',
  howTitle: 'Hoe u DKIM instelt met de gegenereerde sleutel',
  howSteps: [
    'Voer uw domeinnaam en een selector in, kies een sleutellengte en klik op "DKIM-sleutels genereren".',
    'Maak bij uw DNS-provider een TXT-record aan. Gebruik de bovenstaande recordnaam (selector._domainkey of de volledige FQDN) en plak de TXT-waarde.',
    'Installeer de privésleutel in de DKIM-ondertekeningsinstellingen van uw mailserver, met dezelfde selector en hetzelfde domein.',
    'Stuur een testbericht naar een persoonlijk Gmail-account en open "Origineel weergeven". Naast DKIM moet PASS staan.',
  ],
  howNote:
    'Slaagt de verificatie niet? Controleer of het DNS-record volledig is gepubliceerd en of de selector op de server exact overeenkomt met die in DNS. Lees voor het samenspel tussen SPF, DKIM en DMARC onze [uitleg over SPF, DKIM en DMARC](/blog/spf-dkim-dmarc-explained).',
  imageAlt: 'Illustratie van openbare en privésleutels die e-mails beveiligen met cryptografische handtekeningen.',
  selectorTitle: 'Een selector en sleutellengte kiezen',
  selectorParas: [
    'De selector is slechts een label: kies een herkenbare naam. Een selector met datum zoals s2026a maakt bij sleutelrotatie direct duidelijk welke sleutel actief is. Toegestaan zijn letters, cijfers en koppeltekens.',
    'Voor de sleutellengte is 2048 bits de veilige standaard. Gmail vereist minimaal 1024 bits en adviseert 2048 bits. RFC 8301 schrijft voor dat verzenders minimaal 1024 bits moeten gebruiken en 2048 bits zouden moeten toepassen. Hoewel ontvangers sleutels tot 4096 bits moeten ondersteunen, leveren 4096-bits records in sommige DNS-beheerpanelen problemen op; kies daarom voor 2048 bits.',
  ],
  recordTitle: 'Wat staat er in een DKIM-record',
  thTag: 'Tag',
  thMeaning: 'Betekenis',
  thExample: 'Voorbeeld',
  tags: [
    { tag: 'v', meaning: 'Versie van het protocol. Optioneel, maar indien aanwezig moet deze vooraan staan', example: 'v=DKIM1' },
    { tag: 'k', meaning: 'Sleuteltype. rsa is de standaardwaarde', example: 'k=rsa' },
    { tag: 'p', meaning: 'De openbare sleutel in base64-codering. Een lege p= betekent dat de sleutel is ingetrokken', example: 'p=MIIBIjAN...' },
    { tag: 't', meaning: 'Vlaggen (flags). y betekent testmodus, s verbiedt gebruik voor subdomeinen', example: 't=y' },
  ],
  recordNote: 'Er bestaan nog drie aanvullende tags (h voor hash-algoritmen, n voor notities en s voor servicetype), maar deze zijn zelden nodig.',
  splitTitle: 'Waarom lange DKIM-records gesplitst worden',
  splitText:
    'Een 2048-bits openbare sleutel telt na base64-codering ongeveer 390 tekens. DNS slaat TXT-gegevens op in tekenreeksen van maximaal 255 tekens (RFC 1035). Een sleutel van deze lengte moet daarom worden gepubliceerd in twee of meer afzonderlijke strings tussen aanhalingstekens, die ontvangende servers samenvoegen voordat ze de handtekening controleren. De meeste DNS-panelen splitsen de invoer automatisch bij het plakken van één lange regel. Het BIND-zoneformaat is bedoeld voor directe bewerking van zonebestanden.',
  rotateTitle: 'DKIM-sleutels roteren',
  rotateText:
    'Om sleutels veilig te vernieuwen zonder verzendproblemen, genereert u een nieuw sleutelpaar met een nieuwe selector en publiceert u het DNS-record naast het oude record. Configureer uw mailserver om met de nieuwe selector te ondertekenen en verwijder het oude record pas wanneer alle eerder verzonden e-mails zijn afgeleverd.',
  faqTitle: 'Veelgestelde vragen',
  faqs: [
    {
      q: 'Is deze DKIM generator veilig in gebruik?',
      a: 'Het sleutelpaar wordt rechtstreeks gegenereerd via de ingebouwde Web Crypto API van uw browser. De privésleutel wordt nooit naar onze servers of derden verzonden. Wij kunnen deze niet herstellen, download het sleutelbestand dus voordat u de pagina verlaat.',
    },
    {
      q: 'Waar moet de privésleutel worden bewaard?',
      a: 'Uitsluitend op uw eigen mailserver in de DKIM-configuratie. Publiceer de privésleutel nooit in DNS en deel deze nooit per e-mail. Alleen de openbare sleutel in de TXT-waarde wordt gepubliceerd.',
    },
    {
      q: 'Moet ik kiezen voor 1024 of 2048 bits?',
      a: 'Kies voor 2048 bits, tenzij uw DNS-provider lange records niet ondersteunt. Gmail accepteert 1024 bits als minimum maar raadt 2048 bits aan, en RFC 8301 adviseert verzenders minimaal 2048 bits te gebruiken.',
    },
    {
      q: 'Waarom is mijn DKIM-record gesplitst in meerdere regels?',
      a: 'Elke string in een DNS TXT-record mag maximaal 255 tekens bevatten, en een 2048-bits sleutel is langer. Ontvangende servers voegen de strings automatisch weer samen tijdens de handtekeningcontrole.',
    },
    {
      q: 'Welk bestandsformaat voor de privésleutel moet ik downloaden?',
      a: 'Veel moderne mailservers accepteren het standaard PKCS#8 formaat (BEGIN PRIVATE KEY). Vraagt uw software om BEGIN RSA PRIVATE KEY, kies dan het PKCS#1 formaat; dit is dezelfde sleutel in klassieke notatie.',
    },
    {
      q: 'Hoe controleer ik of DKIM correct functioneert?',
      a: 'Stuur een e-mail vanaf uw server naar een Gmail-adres, open het bericht en kies "Origineel weergeven". In de verificatieregels moet bij DKIM de status PASS staan voor uw domein.',
    },
    {
      q: 'Kan ik deze sleutels gebruiken voor Google Workspace of Microsoft 365?',
      a: 'Nee. Zowel Google Workspace als Microsoft 365 maken hun eigen DKIM-sleutels aan binnen hun beheerconsole. Deze generator is bedoeld voor eigen servers waarop u zelf de ondertekeningssleutels beheert.',
    },
  ],
  ctaHeadline: 'DKIM geregeld? Controleer nu uw e-maillijst.',
}

const pl: DkimPageStrings = {
  metaTitle: 'Darmowy Generator DKIM: Wygeneruj Klucz i Rekord DKIM | Giggal.ai',
  ogTitle: 'Darmowy Generator DKIM: Wygeneruj Klucz i Rekord DKIM',
  description:
    'Wygeneruj w przeglądarce parę kluczy DKIM 2048-bit oraz gotowy rekord DNS TXT do publikacji. Klucz prywatny nigdy nie opuszcza Twojego urządzenia. Darmowy, bez rejestracji.',
  ogLocale: 'pl_PL',
  ogImage: '/og-card.png',
  ogAlt: 'Darmowy Generator Rekordów DKIM',
  crumb: 'Generator DKIM',
  appName: 'Darmowy Generator DKIM',
  featureList: [
    'Generowanie 2048-bitowej pary kluczy RSA DKIM bezpośrednio w przeglądarce',
    'Sformatowany rekord DNS TXT gotowy do wdrożenia',
    'Klucze prywatne w formatach PKCS#1 oraz PKCS#8',
    'Automatyczny podział na ciągi 255 znaków dla pełnej zgodności z DNS',
    'Pełna prywatność: klucz prywatny nigdy nie jest przesyłany na serwer',
  ],
  h1: 'Generator DKIM',
  heroIntro: 'Wygeneruj parę kluczy DKIM oraz dokładny rekord TXT do opublikowania w DNS.',
  howTitle: 'Jak skonfigurować DKIM za pomocą wygenerowanego klucza',
  howSteps: [
    'Wpisz nazwę domeny i selektor, wybierz długość klucza i kliknij "Generuj klucze DKIM".',
    'W panelu DNS swojego hostingu dodaj rekord TXT. Użyj nazwy rekordu (selektor._domainkey lub pełnej nazwy FQDN) i wklej wartość rekordu TXT.',
    'Wprowadź klucz prywatny w ustawieniach podpisywania DKIM na swoim serwerze pocztowym, używając tego samego selektora i domeny.',
    'Wyślij wiadomość testową na prywatne konto Gmail i wybierz "Pokaż oryginał". Przy nagłówku DKIM powinien widnieć status PASS.',
  ],
  howNote:
    'Jeśli test nie wykaże statusu PASS, upewnij się, że rekord w DNS został w pełni rozpropagowany oraz że selektor na serwerze odpowiada selektorowi w DNS. Aby zrozumieć, jak DKIM współpracuje z SPF i DMARC, przeczytaj nasz [przewodnik po SPF, DKIM i DMARC](/blog/spf-dkim-dmarc-explained).',
  imageAlt: 'Ilustracja przedstawiająca klucze publiczny i prywatny zabezpieczające pocztę elektroniczną podpisem kryptograficznym.',
  selectorTitle: 'Wybór selektora i długości klucza',
  selectorParas: [
    'Selektor to po prostu etykieta identyfikująca: wybierz nazwę, którą łatwo rozpoznasz w przyszłości. Nazwa zawierająca datę (np. s2026a) ułatwia późniejszą rotację kluczy. Może zawierać litery, cyfry i myślniki.',
    'Zalecanym i bezpiecznym standardem długości klucza jest 2048 bitów. Gmail wymaga kluczy o długości minimum 1024 bitów i rekomenduje 2048 bitów. Zgodnie z RFC 8301 nadawcy muszą używać co najmniej 1024 bitów i powinni stosować 2048 bitów. Choć serwery odbiorcze powinny obsługiwać do 4096 bitów, rekordy 4096-bitowe bywają problematyczne w niektórych panelach DNS; wybierz 2048 bitów.',
  ],
  recordTitle: 'Co zawiera rekord DKIM',
  thTag: 'Tag',
  thMeaning: 'Znaczenie',
  thExample: 'Przykład',
  tags: [
    { tag: 'v', meaning: 'Wersja protokołu. Opcjonalna, ale jeśli występuje, musi być pierwszym tagiem', example: 'v=DKIM1' },
    { tag: 'k', meaning: 'Typ algorytmu klucza. Domyślną wartością jest rsa', example: 'k=rsa' },
    { tag: 'p', meaning: 'Klucz publiczny zakodowany w base64. Pusta wartość (p=) oznacza odwołanie klucza', example: 'p=MIIBIjAN...' },
    { tag: 't', meaning: 'Flagi konfiguracyjne. y oznacza tryb testowy, s blokuje użycie dla subdomen', example: 't=y' },
  ],
  recordNote: 'Istnieją jeszcze trzy rzadziej stosowane tagi: h (algorytmy skrótu), n (notatki) oraz s (typ usługi).',
  splitTitle: 'Dlaczego długie rekordy DKIM są dzielone',
  splitText:
    'Klucz publiczny 2048-bitowy po zakodowaniu w base64 liczy około 390 znaków. Zgodnie ze specyfikacją DNS (RFC 1035) pojedynczy ciąg tekstowy w rekordzie TXT może zawierać maksymalnie 255 znaków. Dlatego tak długi klucz publikuje się w postaci dwóch lub więcej ciągów w cudzysłowach, które serwery odbiorcze łączą przed weryfikacją podpisu. Większość paneli DNS dzieli tekst automatycznie po wklejeniu całego ciągu. Format strefy BIND pozwala na podział w nawiasach w wielu wierszach.',
  rotateTitle: 'Rotacja kluczy DKIM',
  rotateText:
    'Aby bezpiecznie zmienić klucze bez przerw w dostarczaniu poczty, wygeneruj nową parę pod nowym selektorem i opublikuj nowy rekord obok starego. Skonfiguruj serwer pocztowy do podpisywania nowym selektorem, a stary rekord usuń dopiero po doręczeniu wszystkich wiadomości wysłanych wcześniej.',
  faqTitle: 'Często zadawane pytania',
  faqs: [
    {
      q: 'Czy ten generator DKIM jest w pełni bezpieczny?',
      a: 'Klucze są generowane w przeglądarce przy użyciu Web Crypto API. Klucz prywatny nigdy nie trafia na nasze serwery ani do osób trzecich. Ponieważ nie mamy do niego dostępu, pobierz plik klucza przed opuszczeniem witryny.',
    },
    {
      q: 'Gdzie należy zapisać klucz prywatny?',
      a: 'Tylko na Twoim serwerze pocztowym w konfiguracji podpisywania DKIM. Nigdy nie publikuj klucza prywatnego w DNS ani nie przesyłaj go mailem. Publiczny staje się jedynie klucz zawarty w rekordzie TXT.',
    },
    {
      q: 'Lepiej wybrać 1024 czy 2048 bitów?',
      a: 'Wybierz 2048 bitów, chyba że Twój rejestrator DNS nie radzi sobie z dłuższymi rekordami. Gmail wymaga minimum 1024 bitów i zaleca 2048 bitów, a RFC 8301 wskazuje 2048 bitów jako rekomendowane minimum.',
    },
    {
      q: 'Dlaczego rekord DKIM został podzielony na kilka ciągów?',
      a: 'Pojedynczy ciąg w rekordzie DNS TXT ma limit 255 znaków, a klucz 2048 bitów jest dłuższy. Serwery pocztowe automatycznie scalają te fragmenty podczas sprawdzania podpisu.',
    },
    {
      q: 'Który format klucza prywatnego wybrać?',
      a: 'Większość serwerów pocztowych obsługuje format PKCS#8 (BEGIN PRIVATE KEY). Jeśli Twoje oprogramowanie wymaga formatu BEGIN RSA PRIVATE KEY, wybierz PKCS#1; to ten sam klucz zapisany w tradycyjnym standardzie.',
    },
    {
      q: 'Jak sprawdzić, czy podpis DKIM działa?',
      a: 'Wyślij wiadomość z własnego serwera na konto Gmail, otwórz ją i kliknij "Pokaż oryginał". W sekcji uwierzytelniania wiersz DKIM powinien mieć oznaczenie PASS dla Twojej domeny.',
    },
    {
      q: 'Czy mogę użyć tego klucza w Google Workspace lub Microsoft 365?',
      a: 'Nie. Obie te usługi generują własne klucze DKIM w swoich panelach administracyjnych. Ten generator przeznaczony jest dla serwerów, na których samodzielnie kontrolujesz klucze kryptograficzne.',
    },
  ],
  ctaHeadline: 'DKIM skonfigurowany? Sprawdź teraz swoją listę odbiorców.',
}

const id: DkimPageStrings = {
  metaTitle: 'DKIM Generator Gratis: Buat Kunci dan Catatan DKIM | Giggal.ai',
  ogTitle: 'DKIM Generator Gratis: Buat Kunci dan Catatan DKIM',
  description:
    'Hasilkan pasangan kunci DKIM 2048-bit dan catatan DNS TXT langsung di browser Anda. Kunci privat tidak pernah dikirim ke server. Gratis, tanpa daftar.',
  ogLocale: 'id_ID',
  ogImage: '/og-card.png',
  ogAlt: 'DKIM Generator Gratis',
  crumb: 'DKIM Generator',
  appName: 'DKIM Generator Gratis',
  featureList: [
    'Hasilkan pasangan kunci DKIM RSA 2048-bit langsung di browser',
    'Format catatan DNS TXT siap publikasi instan',
    'Kunci privat dalam format standar PKCS#1 dan PKCS#8',
    'Pemisahan otomatis 255 karakter untuk kompatibilitas DNS',
    'Privasi penuh: kunci privat tidak pernah keluar dari perangkat Anda',
  ],
  h1: 'DKIM Generator',
  heroIntro: 'Buat pasangan kunci DKIM dan catatan TXT yang tepat untuk dipublikasikan di DNS Anda.',
  howTitle: 'Cara menyiapkan DKIM dengan kunci yang dihasilkan',
  howSteps: [
    'Masukkan nama domain dan selektor, pilih ukuran kunci, lalu klik "Buat kunci DKIM".',
    'Di panel DNS penyedia hosting Anda, buat catatan TXT. Gunakan nama yang ditampilkan di atas (selektor._domainkey atau nama FQDN lengkap) lalu tempelkan nilai TXT.',
    'Pasang kunci privat pada pengaturan penandatanganan DKIM di mail server Anda, dengan selektor dan domain yang sama persis.',
    'Kirim email uji coba ke akun Gmail pribadi dan buka "Lihat versi asli". Di samping baris DKIM harus tertera PASS.',
  ],
  howNote:
    'Jika verifikasi gagal, pastikan catatan DNS telah terpropagasi dan selektor pada mail server cocok dengan yang ada di DNS. Untuk memahami integrasi antara SPF, DKIM, dan DMARC, baca [panduan penjelasan SPF, DKIM, dan DMARC](/blog/spf-dkim-dmarc-explained).',
  imageAlt: 'Ilustrasi kunci publik dan privat yang mengamankan pesan email dengan tanda tangan kriptografi.',
  selectorTitle: 'Memilih selektor dan ukuran kunci',
  selectorParas: [
    'Selektor hanyalah sebuah label pengenal: pilihlah nama yang mudah Anda kenali di masa mendatang. Format berbasis tanggal seperti s2026a memudahkan identifikasi kunci mana yang aktif saat melakukan rotasi berkala. Selektor dapat memuat huruf, angka, dan tanda hubung.',
    'Untuk ukuran kunci, 2048 bit adalah standar default yang aman. Gmail mensyaratkan kunci DKIM minimal 1024 bit dan merekomendasikan 2048 bit. Berdasarkan RFC 8301, pengirim email wajib menggunakan minimal 1024 bit dan sangat disarankan 2048 bit. Meskipun server penerima mendukung hingga 4096 bit, beberapa panel DNS kesulitan memproses catatan sepanjang itu; gunakan 2048 bit.',
  ],
  recordTitle: 'Apa saja isi catatan DKIM',
  thTag: 'Tag',
  thMeaning: 'Arti',
  thExample: 'Contoh',
  tags: [
    { tag: 'v', meaning: 'Versi protokol. Bersifat opsional, namun jika ada wajib diletakkan di awal', example: 'v=DKIM1' },
    { tag: 'k', meaning: 'Jenis algoritma kunci. Default-nya adalah rsa', example: 'k=rsa' },
    { tag: 'p', meaning: 'Kunci publik yang dienkode dalam base64. Nilai p= kosong menandakan kunci telah dicabut', example: 'p=MIIBIjAN...' },
    { tag: 't', meaning: 'Flag penanda. y berarti mode uji coba, s membatasi agar tidak berlaku untuk subdomain', example: 't=y' },
  ],
  recordNote: 'Terdapat tiga tag tambahan lain (h untuk algoritma hash, n untuk catatan, dan s untuk tipe layanan), namun tag tersebut sangat jarang dibutuhkan.',
  splitTitle: 'Mengapa catatan DKIM yang panjang dipecah',
  splitText:
    'Kunci publik 2048 bit memiliki panjang sekitar 390 karakter setelah dienkode ke base64. Protokol DNS menyimpan data TXT dalam batas maksimal 255 karakter per string (RFC 1035). Karena itu, kunci sepanjang ini harus dipublikasikan dalam dua string atau lebih di dalam tanda kutip, yang nantinya digabungkan kembali oleh server penerima sebelum memvalidasi tanda tangan. Sebagian besar panel DNS memecah string ini secara otomatis saat Anda menempelkan versi satu baris. Format zona BIND digunakan saat mengedit file zona server DNS secara manual.',
  rotateTitle: 'Rotasi kunci DKIM secara berkala',
  rotateText:
    'Untuk mengganti kunci dengan aman tanpa mengganggu pengiriman email, buat pasangan kunci baru dengan selektor baru dan publikasikan catatan DNS-nya berdampingan dengan catatan lama. Alihkan mail server Anda untuk menandatangani email dengan selektor baru, lalu hapus catatan lama setelah semua email yang ditandatangani kunci lama selesai terkirim.',
  faqTitle: 'Pertanyaan umum',
  faqs: [
    {
      q: 'Apakah generator DKIM ini aman digunakan?',
      a: 'Pasangan kunci dibuat langsung oleh Web Crypto API bawaan browser Anda. Kunci privat tidak pernah dikirim ke server kami ataupun pihak ketiga. Kami tidak dapat memulihkannya, jadi pastikan Anda mengunduhnya sebelum menutup halaman.',
    },
    {
      q: 'Di mana kunci privat harus dipasang?',
      a: 'Hanya di mail server atau MTA Anda, tepatnya pada pengaturan tanda tangan DKIM. Jangan pernah memasukkannya ke DNS atau mengirimkannya via email. Hanya kunci publik dalam nilai TXT yang dipublikasikan ke publik.',
    },
    {
      q: 'Sebaiknya memilih 1024 atau 2048 bit?',
      a: 'Gunakan 2048 bit kecuali jika penyedia DNS Anda tidak mendukung catatan panjang. Gmail menetapkan 1024 bit sebagai batas minimum dan menyarankan 2048 bit, sementara RFC 8301 mewajibkan standar 2048 bit.',
    },
    {
      q: 'Mengapa catatan DKIM saya dipecah menjadi beberapa baris string?',
      a: 'Setiap string dalam catatan DNS TXT memiliki batas maksimal 255 karakter, dan kunci 2048 bit melebihi batas tersebut. Server penerima akan menggabungkan pecahan string tersebut saat memverifikasi tanda tangan.',
    },
    {
      q: 'Format kunci privat mana yang sebaiknya saya unduh?',
      a: 'Sebagian besar mail server modern menerima format standar PKCS#8 (BEGIN PRIVATE KEY). Jika software mail server Anda memerlukan BEGIN RSA PRIVATE KEY, gunakan versi PKCS#1; keduanya merupakan kunci yang sama dalam format berbeda.',
    },
    {
      q: 'Bagaimana cara memastikan DKIM berfungsi dengan benar?',
      a: 'Kirim email dari server Anda ke akun Gmail pribadi, buka pesan tersebut, lalu pilih "Lihat versi asli". Pada bagian header autentikasi, status DKIM harus menunjukkan PASS untuk domain Anda.',
    },
    {
      q: 'Bisakah kunci ini dipakai untuk Google Workspace atau Microsoft 365?',
      a: 'Tidak. Google Workspace dan Microsoft 365 membuat kunci DKIM mereka sendiri di dalam panel konsol admin masing-masing. Generator ini khusus untuk mail server mandiri di mana Anda mengelola kunci penandatanganan sendiri.',
    },
  ],
  ctaHeadline: 'DKIM sudah terpasang? Sekarang saatnya verifikasi daftar email Anda.',
}

export const DKIM_PAGE_STRINGS: Record<Locale, DkimPageStrings> = { en, it, de, fr, es, 'pt-br': ptBr, nl, pl, id }
