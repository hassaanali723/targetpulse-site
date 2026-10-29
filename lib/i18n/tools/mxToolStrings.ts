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

const frTool: MxToolStrings = {
  label: 'Domaine ou adresse e-mail',
  placeholder: 'exemple.fr',
  button: 'Vérifier les enregistrements MX',
  tryLabel: 'Exemples :',
  thPriority: 'Priorité',
  thServer: 'Serveur de messagerie',
  thIps: 'Adresses IP',
  thTtl: 'TTL',
  none: 'aucun',
  nullMx: '. (Null MX)',
  legend: 'Les expéditeurs testent d’abord le serveur ayant le numéro le plus bas. Les serveurs avec le même numéro se partagent la charge.',
  copy: 'Copier les enregistrements',
  copied: 'Copié',
  answeredBy: 'Réponse fournie par',
  dnssec: ' · validé par DNSSEC',
  ctaTitle: 'Les enregistrements MX couvrent le domaine, pas la boîte mail',
  ctaText: 'Un domaine peut recevoir des e-mails sans que l’adresse spécifique existe. Vérifiez l’adresse elle-même avant d’envoyer.',
  ctaButton: 'Vérifier une adresse e-mail',
  ctaHref: '/fr/verifier-adresse-mail',
  lookupError: 'Impossible de joindre les résolveurs DNS. Vérifiez votre connexion et réessayez.',
  inputEmpty: 'Entrez un domaine valide, par exemple exemple.fr.',
  inputInvalid: 'Ceci ne ressemble pas à un domaine valide. Entrez un nom comme exemple.fr.',
  issues: {
    'ip-literal': 'Cet enregistrement pointe vers une adresse IP. Un enregistrement MX doit obligatoirement pointer vers un nom d’hôte (A ou AAAA).',
    'lookup-failed': 'Impossible de résoudre l’adresse IP de ce serveur. Réessayez dans un instant.',
    cname: 'Ce nom de serveur est un alias (CNAME). La RFC 2181 exige un nom d’hôte canonique direct.',
    'no-address': 'Ce nom de serveur ne possède aucune adresse IP. Aucun e-mail ne peut lui être acheminé.',
    'no-address-missing': 'Ce serveur est introuvable dans le DNS. Aucun e-mail ne peut lui être acheminé.',
    'null-mx-mixed': 'Le domaine publie un enregistrement Null MX ("0 .") combiné à d’autres serveurs. Un Null MX doit impérativement être unique.',
  },
  summary: {
    servers: (n) => `${n} serveur${n === 1 ? '' : 's'} de messagerie trouvé${n === 1 ? '' : 's'}`,
    provider: (name) => `. Les e-mails sont gérés par ${name}`,
    ok: (p) => ({
      title: `${p.domain} peut recevoir des e-mails`,
      text: `${p.servers} serveur${p.servers === 1 ? '' : 's'} de messagerie trouvé${p.servers === 1 ? '' : 's'}${p.provider ? `. Les e-mails sont gérés par ${p.provider}` : ''}.`,
    }),
    okWithIssues: (p) => ({
      title: `${p.domain} possède des enregistrements MX, mais nécessite une correction`,
      text: `${p.servers} serveur${p.servers === 1 ? '' : 's'} trouvé${p.servers === 1 ? '' : 's'}${p.provider ? `. Les e-mails sont gérés par ${p.provider}` : ''}. Les problèmes sont détaillés ci-dessous.`,
    }),
    implicit: (p) => ({
      title: `${p.domain} n’a aucun enregistrement MX`,
      text: `Les expéditeurs se rabattent sur l’adresse IP propre du domaine (${p.fallback}). Cela ne fonctionne que si un serveur SMTP y tourne. Ajoutez des enregistrements MX si vous souhaitez recevoir du courrier.`,
    }),
    none: (p) => ({
      title: `${p.domain} ne peut pas recevoir d’e-mails`,
      text: 'Aucun enregistrement MX ni adresse IP de secours. Les e-mails envoyés à ce domaine seront immédiatement rejetés.',
    }),
    nullMx: (p) => ({
      title: `${p.domain} n’accepte aucun e-mail`,
      text: 'Le domaine publie un Null MX (0 .), indiquant explicitement le refus de tout courrier (RFC 7505). C’est normal pour un domaine vitrine, mais à proscrire pour un domaine d’envoi.',
    }),
    nxdomain: (p) => ({
      title: `${p.domain} n’existe pas`,
      text: 'Aucun enregistrement DNS n’existe pour ce domaine. Vérifiez l’orthographe.',
    }),
  },
}

const esTool: MxToolStrings = {
  label: 'Dominio o dirección de correo',
  placeholder: 'ejemplo.es',
  button: 'Consultar registros MX',
  tryLabel: 'Ejemplos:',
  thPriority: 'Prioridad',
  thServer: 'Servidor de correo',
  thIps: 'Direcciones IP',
  thTtl: 'TTL',
  none: 'ninguno',
  nullMx: '. (Null MX)',
  legend: 'Los remitentes intentan primero con el número más bajo. Los servidores con el mismo número comparten la carga.',
  copy: 'Copiar registros',
  copied: 'Copiado',
  answeredBy: 'Respuesta de',
  dnssec: ' · validado con DNSSEC',
  ctaTitle: 'Los registros MX cubren el dominio, no el buzón',
  ctaText: 'Un dominio puede recibir correo y aun así no tener la dirección a la que escribes. Comprueba la dirección antes de enviar.',
  ctaButton: 'Comprobar una dirección de correo',
  ctaHref: '/es/validar-correo',
  lookupError: 'No se pudo conectar con los servicios DNS. Comprueba tu conexión e inténtalo de nuevo.',
  inputEmpty: 'Introduce un dominio como ejemplo.es.',
  inputInvalid: 'Eso no parece un dominio válido. Introduce algo como ejemplo.es.',
  issues: {
    'ip-literal': 'Este registro apunta a una dirección IP. Debe apuntar a un nombre de host (registro A o AAAA).',
    'lookup-failed': 'No pudimos resolver la dirección de este servidor. Inténtalo de nuevo en unos momentos.',
    cname: 'Este nombre de servidor es un alias (CNAME). La RFC 2181 exige un nombre de host canónico.',
    'no-address': 'Este servidor no tiene una dirección IP asignada. El correo enviado a él no podrá entregarse.',
    'no-address-missing': 'Este servidor no existe en el DNS. El correo enviado a él no podrá entregarse.',
    'null-mx-mixed': 'El dominio publica un registro Null MX ("0 .") junto con otros servidores MX. Un Null MX debe ser el único registro publicado.',
  },
  summary: {
    servers: (n) => `${n} servidor${n === 1 ? '' : 'es'} de correo encontrado${n === 1 ? '' : 's'}`,
    provider: (name) => `. El correo lo gestiona ${name}`,
    ok: (p) => ({
      title: `${p.domain} puede recibir correos electrónicos`,
      text: `${p.servers} servidor${p.servers === 1 ? '' : 'es'} de correo encontrado${p.servers === 1 ? '' : 's'}${p.provider ? `. El correo lo gestiona ${p.provider}` : ''}.`,
    }),
    okWithIssues: (p) => ({
      title: `${p.domain} tiene registros MX, pero requiere corrección`,
      text: `${p.servers} servidor${p.servers === 1 ? '' : 'es'} encontrado${p.servers === 1 ? '' : 's'}${p.provider ? `. El correo lo gestiona ${p.provider}` : ''}. Los problemas se indican abajo.`,
    }),
    implicit: (p) => ({
      title: `${p.domain} no tiene registros MX`,
      text: `Los remitentes recurren a la dirección IP directa del dominio (${p.fallback}). Solo funciona si hay un servidor de correo activo allí. Agrega registros MX si deseas recibir mensajes.`,
    }),
    none: (p) => ({
      title: `${p.domain} no puede recibir correos`,
      text: 'No tiene registros MX ni dirección IP de respaldo. Los correos enviados a este dominio rebotarán.',
    }),
    nullMx: (p) => ({
      title: `${p.domain} no acepta correos electrónicos`,
      text: 'Publica un registro Null MX (0 .), indicando que no acepta correo alguno (RFC 7505). Adecuado para dominios que no envían ni reciben correo.',
    }),
    nxdomain: (p) => ({
      title: `${p.domain} no existe`,
      text: 'No existe constancia de este dominio en el DNS. Revisa la ortografía.',
    }),
  },
}

const ptBrTool: MxToolStrings = {
  label: 'Domínio ou endereço de e-mail',
  placeholder: 'exemplo.com.br',
  button: 'Consultar registros MX',
  tryLabel: 'Exemplos:',
  thPriority: 'Prioridade',
  thServer: 'Servidor de e-mail',
  thIps: 'Endereços IP',
  thTtl: 'TTL',
  none: 'nenhum',
  nullMx: '. (Null MX)',
  legend: 'Os remetentes tentam primeiro o menor número. Servidores com o mesmo número dividem a carga.',
  copy: 'Copiar registros',
  copied: 'Copiado',
  answeredBy: 'Resposta de',
  dnssec: ' · validado por DNSSEC',
  ctaTitle: 'Registros MX cobrem o domínio, não a caixa postal',
  ctaText: 'Um domínio pode receber e-mails e ainda assim não ter o endereço que você procura. Verifique o e-mail antes do envio.',
  ctaButton: 'Verificar um endereço de e-mail',
  ctaHref: '/pt-br/verificacao-de-email',
  lookupError: 'Não foi possível contatar os serviços de DNS. Verifique sua conexão e tente novamente.',
  inputEmpty: 'Digite um domínio válido, como exemplo.com.br.',
  inputInvalid: 'Isso não parece um domínio válido. Digite algo como exemplo.com.br.',
  issues: {
    'ip-literal': 'Este registro aponta para um endereço IP literal. Registros MX devem apontar para um nome de host canônico.',
    'lookup-failed': 'Não conseguimos obter o endereço deste servidor. Tente novamente em instantes.',
    cname: 'Este nome de servidor é um alias (CNAME). A RFC 2181 exige um nome de host direto.',
    'no-address': 'Este servidor não possui endereço IP. O e-mail enviado a ele não será entregue.',
    'no-address-missing': 'Este servidor não existe no DNS. O e-mail enviado a ele não será entregue.',
    'null-mx-mixed': 'O domínio publica um registro Null MX ("0 .") misturado a servidores MX normais. O Null MX precisa ser único.',
  },
  summary: {
    servers: (n) => `${n} servidor${n === 1 ? '' : 'es'} de e-mail encontrado${n === 1 ? '' : 's'}`,
    provider: (name) => `. O e-mail é gerenciado por ${name}`,
    ok: (p) => ({
      title: `${p.domain} pode receber e-mails`,
      text: `${p.servers} servidor${p.servers === 1 ? '' : 'es'} de e-mail encontrado${p.servers === 1 ? '' : 's'}${p.provider ? `. O e-mail é gerenciado por ${p.provider}` : ''}.`,
    }),
    okWithIssues: (p) => ({
      title: `${p.domain} possui registros MX, mas requer correção`,
      text: `${p.servers} servidor${p.servers === 1 ? '' : 'es'} encontrado${p.servers === 1 ? '' : 's'}${p.provider ? `. O e-mail é gerenciado por ${p.provider}` : ''}. Os problemas estão listados abaixo.`,
    }),
    implicit: (p) => ({
      title: `${p.domain} não possui registros MX`,
      text: `Os remetentes tentam a entrega no endereço IP próprio do domínio (${p.fallback}). Isso só funciona se houver um servidor SMTP nele. Adicione registros MX se quiser receber e-mails.`,
    }),
    none: (p) => ({
      title: `${p.domain} não pode receber e-mails`,
      text: 'Não possui registros MX nem endereço IP para fallback. E-mails enviados a este domínio retornarão com erro.',
    }),
    nullMx: (p) => ({
      title: `${p.domain} não aceita e-mails`,
      text: 'Publica um registro Null MX (0 .), informando aos remetentes para não tentarem a entrega (RFC 7505). Comum em domínios sem serviço de correio.',
    }),
    nxdomain: (p) => ({
      title: `${p.domain} não existe`,
      text: 'O DNS não possui registro deste domínio. Verifique a ortografia.',
    }),
  },
}

const nlTool: MxToolStrings = {
  label: 'Domein of e-mailadres',
  placeholder: 'voorbeeld.nl',
  button: 'MX-records opvragen',
  tryLabel: 'Voorbeelden:',
  thPriority: 'Prioriteit',
  thServer: 'Mailserver',
  thIps: 'IP-adressen',
  thTtl: 'TTL',
  none: 'geen',
  nullMx: '. (Null MX)',
  legend: 'Verzenders proberen eerst het laagste nummer. Servers met hetzelfde nummer verdelen de werklast.',
  copy: 'Records kopiëren',
  copied: 'Gekopieerd',
  answeredBy: 'Beantwoord door',
  dnssec: ' · DNSSEC-gevalideerd',
  ctaTitle: 'MX-records gelden voor het domein, niet de mailbox',
  ctaText: 'Een domein kan e-mail ontvangen zonder dat het gewenste adres bestaat. Controleer het adres zelf voordat u verzendt.',
  ctaButton: 'E-mailadres controleren',
  ctaHref: '/nl/mailadres-controleren',
  lookupError: 'We konden de DNS-diensten niet bereiken. Controleer uw verbinding en probeer het opnieuw.',
  inputEmpty: 'Voer een domeinnaam in, zoals voorbeeld.nl.',
  inputInvalid: 'Dit lijkt niet op een geldig domein. Voer iets in zoals voorbeeld.nl.',
  issues: {
    'ip-literal': 'Dit record verwijst naar een IP-adres. Een MX-record moet naar een hostnaam verwijzen.',
    'lookup-failed': 'We konden het IP-adres van deze server niet ophalen. Probeer het over enkele ogenblikken opnieuw.',
    cname: 'Deze servernaam is een alias (CNAME). Volgens RFC 2181 moet dit een directe canonieke hostnaam zijn.',
    'no-address': 'Deze servernaam heeft geen IP-adres. E-mails kunnen hier niet worden afgeleverd.',
    'no-address-missing': 'Deze servernaam bestaat niet in DNS. E-mails kunnen hier niet worden afgeleverd.',
    'null-mx-mixed': 'Het domein publiceert een Null MX ("0 .") samen met normale MX-records. Een Null MX moet uniek zijn.',
  },
  summary: {
    servers: (n) => `${n} mailserver${n === 1 ? '' : 's'} gevonden`,
    provider: (name) => `. E-mail wordt afgehandeld door ${name}`,
    ok: (p) => ({
      title: `${p.domain} kan e-mail ontvangen`,
      text: `${p.servers} mailserver${p.servers === 1 ? '' : 's'} gevonden${p.provider ? `. E-mail wordt afgehandeld door ${p.provider}` : ''}.`,
    }),
    okWithIssues: (p) => ({
      title: `${p.domain} heeft MX-records, maar er moet iets worden opgelost`,
      text: `${p.servers} mailserver${p.servers === 1 ? '' : 's'} gevonden${p.provider ? `. E-mail wordt afgehandeld door ${p.provider}` : ''}. De problemen staan hieronder.`,
    }),
    implicit: (p) => ({
      title: `${p.domain} heeft geen MX-records`,
      text: `Verzenders vallen terug op het eigen A- of AAAA-adres van het domein (${p.fallback}). Dit werkt alleen als daar een mailserver actief is. Voeg MX-records toe om betrouwbaar e-mail te ontvangen.`,
    }),
    none: (p) => ({
      title: `${p.domain} kan geen e-mail ontvangen`,
      text: 'Er zijn geen MX-records en geen fallback-adressen. E-mail naar dit domein wordt geweigerd.',
    }),
    nullMx: (p) => ({
      title: `${p.domain} accepteert geen e-mail`,
      text: 'Het domein publiceert een Null MX-record (0 .), waarmee verzenders weten dat er geen e-mail wordt geaccepteerd (RFC 7505).',
    }),
    nxdomain: (p) => ({
      title: `${p.domain} bestaat niet`,
      text: 'Het DNS kent dit domein niet. Controleer de spelling.',
    }),
  },
}

const plTool: MxToolStrings = {
  label: 'Domena lub adres e-mail',
  placeholder: 'przyklad.pl',
  button: 'Sprawdź rekordy MX',
  tryLabel: 'Przykłady:',
  thPriority: 'Priorytet',
  thServer: 'Serwer pocztowy',
  thIps: 'Adresy IP',
  thTtl: 'TTL',
  none: 'brak',
  nullMx: '. (Null MX)',
  legend: 'Nadawcy próbują najpierw serwera o najniższym numerze. Serwery o tym samym numerze dzielą obciążenie.',
  copy: 'Kopiuj rekordy',
  copied: 'Skopiowano',
  answeredBy: 'Odpowiedź z',
  dnssec: ' · zweryfikowano przez DNSSEC',
  ctaTitle: 'Rekordy MX dotyczą domeny, a nie konkretnej skrzynki',
  ctaText: 'Domena może odbierać pocztę, ale konkretny adres może nie istnieć. Sprawdź poprawność adresu przed wysyłką.',
  ctaButton: 'Sprawdź adres e-mail',
  ctaHref: '/pl/weryfikator-email',
  lookupError: 'Nie udało się połączyć z serwerami DNS. Sprawdź połączenie i spróbuj ponownie.',
  inputEmpty: 'Wpisz domenę, np. przyklad.pl.',
  inputInvalid: 'To nie wygląda na poprawną domenę. Wpisz np. przyklad.pl.',
  issues: {
    'ip-literal': 'Ten rekord wskazuje na adres IP. Rekord MX musi wskazywać na nazwę hosta.',
    'lookup-failed': 'Nie udało się ustalić adresu IP tego serwera. Spróbuj ponownie za chwilę.',
    cname: 'Ta nazwa serwera to alias (CNAME). Zgodnie z RFC 2181 rekord MX musi wskazywać na bezpośrednią nazwę hosta.',
    'no-address': 'Ten serwer pocztowy nie ma przypisanego adresu IP. Poczta nie może zostać do niego doręczona.',
    'no-address-missing': 'Ten serwer nie istnieje w DNS. Poczta nie może zostać do niego doręczona.',
    'null-mx-mixed': 'Domena publikuje rekord Null MX ("0 .") wraz ze standardowymi rekordami MX. Null MX musi być jedynym rekordem.',
  },
  summary: {
    servers: (n) => `${n} serwer${n === 1 ? '' : n >= 2 && n <= 4 ? 'y' : 'ów'} pocztow${n === 1 ? 'y' : n >= 2 && n <= 4 ? 'e' : 'ych'}`,
    provider: (name) => `. Poczta jest obsługiwana przez ${name}`,
    ok: (p) => ({
      title: `${p.domain} może odbierać wiadomości e-mail`,
      text: `Znaleziono ${p.servers} serwer${p.servers === 1 ? '' : p.servers >= 2 && p.servers <= 4 ? 'y' : 'ów'} pocztow${p.servers === 1 ? 'y' : p.servers >= 2 && p.servers <= 4 ? 'e' : 'ych'}${p.provider ? `. Poczta jest obsługiwana przez ${p.provider}` : ''}.`,
    }),
    okWithIssues: (p) => ({
      title: `${p.domain} ma rekordy MX, ale wymagają one naprawy`,
      text: `Znaleziono ${p.servers} serwer${p.servers === 1 ? '' : p.servers >= 2 && p.servers <= 4 ? 'y' : 'ów'} pocztow${p.servers === 1 ? 'y' : p.servers >= 2 && p.servers <= 4 ? 'e' : 'ych'}${p.provider ? `. Poczta jest obsługiwana przez ${p.provider}` : ''}. Problemy wymieniono poniżej.`,
    }),
    implicit: (p) => ({
      title: `${p.domain} nie ma rekordów MX`,
      text: `Nadawcy korzystają bezpośrednio z adresu domeny (${p.fallback}). Działa to tylko wtedy, gdy działa tam serwer pocztowy. Dodaj rekordy MX, jeśli chcesz odbierać pocztę.`,
    }),
    none: (p) => ({
      title: `${p.domain} nie może odbierać poczty`,
      text: 'Brak rekordów MX oraz adresów zapasowych. Wiadomości wysyłane do tej domeny zostaną odrzucone.',
    }),
    nullMx: (p) => ({
      title: `${p.domain} nie przyjmuje wiadomości e-mail`,
      text: 'Domena publikuje rekord Null MX (0 .), informując nadawców o braku możliwości doręczenia poczty (RFC 7505).',
    }),
    nxdomain: (p) => ({
      title: `${p.domain} nie istnieje`,
      text: 'W DNS nie odnaleziono wpisów dla tej domeny. Sprawdź pisownię.',
    }),
  },
}

const idTool: MxToolStrings = {
  label: 'Domain atau alamat email',
  placeholder: 'contoh.id',
  button: 'Cek Record MX',
  tryLabel: 'Contoh:',
  thPriority: 'Prioritas',
  thServer: 'Mail Server',
  thIps: 'Alamat IP',
  thTtl: 'TTL',
  none: 'tidak ada',
  nullMx: '. (Null MX)',
  legend: 'Pengirim mencoba angka terendah terlebih dahulu. Server dengan nomor sama membagi beban kerja.',
  copy: 'Salin record',
  copied: 'Tersalin',
  answeredBy: 'Dijawab oleh',
  dnssec: ' · divalidasi dengan DNSSEC',
  ctaTitle: 'Record MX berlaku untuk domain, bukan kotak surat',
  ctaText: 'Domain dapat menerima email meski alamat yang Anda tuju tidak ada. Periksa alamat sebelum mengirim.',
  ctaButton: 'Periksa alamat email',
  ctaHref: '/id/cek-email-valid',
  lookupError: 'Kami tidak dapat menghubungi layanan DNS. Periksa koneksi Anda dan coba lagi.',
  inputEmpty: 'Masukkan nama domain, seperti contoh.id.',
  inputInvalid: 'Itu tidak terlihat seperti domain yang valid. Masukkan format seperti contoh.id.',
  issues: {
    'ip-literal': 'Record ini mengarah ke alamat IP. Record MX harus mengarah ke host name (record A atau AAAA).',
    'lookup-failed': 'Kami tidak dapat menemukan alamat server ini. Coba lagi sebentar lagi.',
    cname: 'Nama server ini adalah alias (CNAME). RFC 2181 mewajibkan nama host langsung.',
    'no-address': 'Nama server ini tidak memiliki alamat IP. Email tidak dapat dikirim ke server ini.',
    'no-address-missing': 'Nama server ini tidak ada di DNS. Email tidak dapat dikirim ke server ini.',
    'null-mx-mixed': 'Domain menerbitkan record Null MX ("0 .") bersama dengan record MX normal. Null MX harus berdiri sendiri.',
  },
  summary: {
    servers: (n) => `${n} mail server ditemukan`,
    provider: (name) => `. Email dikelola oleh ${name}`,
    ok: (p) => ({
      title: `${p.domain} dapat menerima email`,
      text: `${p.servers} mail server ditemukan${p.provider ? `. Email dikelola oleh ${p.provider}` : ''}.`,
    }),
    okWithIssues: (p) => ({
      title: `${p.domain} memiliki record MX, tetapi ada yang perlu diperbaiki`,
      text: `${p.servers} mail server ditemukan${p.provider ? `. Email dikelola oleh ${p.provider}` : ''}. Masalah tercantum di bawah ini.`,
    }),
    implicit: (p) => ({
      title: `${p.domain} tidak memiliki record MX`,
      text: `Pengirim akan beralih ke alamat IP domain itu sendiri (${p.fallback}). Ini hanya berfungsi jika server email berjalan di sana. Tambahkan record MX jika domain ini perlu menerima email.`,
    }),
    none: (p) => ({
      title: `${p.domain} tidak dapat menerima email`,
      text: 'Tidak ada record MX maupun alamat IP cadangan. Email yang dikirim ke domain ini akan membal (bounce).',
    }),
    nullMx: (p) => ({
      title: `${p.domain} tidak menerima email sama sekali`,
      text: 'Domain menerbitkan record Null MX (0 .), yang memberi tahu pengirim untuk tidak mencoba pengiriman (RFC 7505).',
    }),
    nxdomain: (p) => ({
      title: `${p.domain} tidak ada / tidak ditemukan`,
      text: 'DNS tidak memiliki catatan untuk domain ini. Periksa ejaan.',
    }),
  },
}

const jaServers = (n: number) => `メールサーバーが${n}台見つかりました`
const jaProvider = (name: string) => `。メールの受信先は${name}です`
const jaHead = (p: MxSummaryParts) => `${jaServers(p.servers)}${p.provider ? jaProvider(p.provider) : ''}`

const jaTool: MxToolStrings = {
  label: 'ドメインまたはメールアドレス',
  placeholder: 'example.com',
  button: 'MXレコードを確認',
  tryLabel: '例：',
  thPriority: '優先度',
  thServer: 'メールサーバー',
  thIps: 'IPアドレス',
  thTtl: 'TTL',
  none: 'なし',
  nullMx: '. (Null MX)',
  legend: '送信側は数値が最も小さいサーバーから順に試します。同じ数値のサーバーは負荷を分け合います。',
  copy: 'レコードをコピー',
  copied: 'コピーしました',
  answeredBy: '応答元',
  dnssec: ' · DNSSEC検証済み',
  ctaTitle: 'MXレコードで確認できるのはドメインまでで、メールボックスは確認できません',
  ctaText: 'ドメインがメールを受信できても、送信先のメールアドレスが存在するとは限りません。送信する前に、メールアドレスそのものを確認してください。',
  ctaButton: 'メールアドレスを確認する',
  ctaHref: '/ja/email-checker',
  lookupError: 'DNSサービスに接続できませんでした。通信環境を確認して、もう一度お試しください。',
  inputEmpty: 'example.com のようにドメインを入力してください。',
  inputInvalid: 'ドメインの形式ではないようです。example.com のような形式で入力してください。',
  issues: {
    'ip-literal': 'このレコードはIPアドレスを指しています。MXレコードにはホスト名を指定する必要があり、一部のメールサーバー（初期設定のEximなど）はこの宛先への配信を拒否します。',
    'lookup-failed': 'このサーバーのアドレスを取得できませんでした。しばらくしてから、もう一度お試しください。',
    cname: 'このサーバー名はエイリアス（CNAME）です。MXの規則では、実際のホスト名を指定する必要があります。多くの送信側はエイリアスをたどりますが、規格上その義務はありません。',
    'no-address': 'このサーバー名にはIPアドレスがありません。そのため、このサーバー宛てのメールは配信できません。',
    'no-address-missing': 'このサーバー名はDNSに存在しません。そのため、このサーバー宛てのメールは配信できません。',
    'null-mx-mixed': 'このドメインは、通常のMXレコードと一緒にNull MX（0 .）を公開しています。Null MXは唯一のMXレコードである必要があるため、どちらか一方を削除してください。',
  },
  summary: {
    servers: jaServers,
    provider: jaProvider,
    ok: (p) => ({ title: `${p.domain} はメールを受信できます`, text: `${jaHead(p)}。` }),
    okWithIssues: (p) => ({
      title: `${p.domain} にはMXレコードがありますが、修正が必要な点があります`,
      text: `${jaHead(p)}。問題点は下に表示しています。`,
    }),
    implicit: (p) => ({
      title: `${p.domain} にはMXレコードがありません`,
      text: `送信側は、ドメイン自体のアドレス（${p.fallback}）に配信を試みます。これは、そのアドレスでメールサーバーが動いている場合にのみ機能します。このドメインでメールを受信する場合は、MXレコードを追加してください。`,
    }),
    none: (p) => ({
      title: `${p.domain} はメールを受信できません`,
      text: 'MXレコードがなく、送信側が代わりに使えるアドレスもありません。このドメイン宛てのメールはバウンスします。',
    }),
    nullMx: (p) => ({
      title: `${p.domain} はメールを一切受け付けません`,
      text: 'このドメインはNull MXレコード（0 .）を公開しており、送信側に配信を試みないよう伝えています。メールに使っていないドメインであれば通常の設定です。メールの送信に使うドメインでは設定しないでください。返信やバウンス通知が戻ってこなくなります。',
    }),
    nxdomain: (p) => ({
      title: `${p.domain} は存在しません`,
      text: 'このドメインのレコードはDNSにありません。つづりを確認してください。',
    }),
  },
}

export const MX_TOOL_STRINGS: Partial<Record<Locale, MxToolStrings>> & { en: MxToolStrings } = {
  en,
  de: deTool,
  it: itTool,
  fr: frTool,
  es: esTool,
  'pt-br': ptBrTool,
  nl: nlTool,
  pl: plTool,
  id: idTool,
  ja: jaTool,
}

export function mxToolStrings(locale: Locale): MxToolStrings {
  return MX_TOOL_STRINGS[locale] ?? en
}

/** The message to show for an issue: the core's English text, or the localized one by code. */
export function mxIssueText(t: MxToolStrings, issue: MxIssue): string {
  if (!t.issues) return issue.message
  if (issue.code === 'no-address') return issue.missing ? t.issues['no-address-missing'] : t.issues['no-address']
  return t.issues[issue.code]
}
