// Labels and messages of the free email providers tool
// (components/tools/FreeEmailProviders/FreeEmailProvidersTool.tsx), one object
// per language the tool ships in. Client-safe: no server imports.
// The page copy around the tool lives in lib/i18n/tools/freeEmailProvidersStrings.ts.
//
// English is the original wording moved here unchanged. The download file names
// and the CSV header row are user-visible, so they are here too.
//
// Provider names, domains and country codes in lib/tools/freeEmailProviders.ts
// are data and stay as they are. The one company field that is a word rather
// than a name ("Various") can be translated with the optional companyNames map,
// keyed by provider name (the name is the provider's id in the data).
//
// Templates: a string with {slot} markers is filled by the tool with text or
// elements (links). Keep every slot in a translation.

import type { Locale } from '@/lib/i18n/clusters'
import type { FreeEmailProvider, ProviderKind } from '@/lib/tools/freeEmailProviders'

export interface FreeProvidersBannerParts {
  /** Number of domains on the list. */
  domains: number
  /** Number of providers on the list. */
  providers: number
  /** The date the list was checked, already formatted with dateLocale. */
  date: string
}

export interface FreeProvidersToolStrings {
  /** Line above the tool. */
  banner: (p: FreeProvidersBannerParts) => string
  /** Locale used to write the checked-on date (day, month name, year). */
  dateLocale: string
  checkLabel: string
  checkPlaceholder: string
  checkButton: string
  inputEmpty: string
  inputInvalid: string
  /** Result title when the domain is on the list. */
  isFree: (domain: string) => string
  /** First sentence of the result text. `company` is null when it equals the provider name. */
  belongsTo: (name: string, company: string | null) => string
  /** Second sentence of the result text: what each type of provider means for the address. */
  kindNotes: Record<ProviderKind, string>
  /** Result title when the domain isn't on the list. */
  notListed: (domain: string) => string
  /** Template: {mx} and {disposable} (links with mxLink and disposableLink). */
  notListedText: string
  mxLink: string
  /** The MX lookup page in this language; the tool adds ?domain=. */
  mxHref: string
  disposableLink: string
  /** The disposable email checker page in this language. */
  disposableHref: string
  browseLabel: string
  browsePlaceholder: string
  /** The filter buttons. */
  filters: Record<'all' | ProviderKind, string>
  /** The type badge in the table, also the "type" column of the CSV download. */
  kindLabels: Record<ProviderKind, string>
  /** Count line above the table. */
  showing: (domains: number, providers: number) => string
  copy: string
  copied: string
  thProvider: string
  thDomains: string
  /** Empty state of the table. */
  empty: string
  /** Download file names. */
  fileTxt: string
  fileCsv: string
  fileJson: string
  /** First row of the CSV download. Five columns: domain, provider, company, country, type. */
  csvHeader: string
  /** Company names that are words rather than names, by provider name. English leaves this out. */
  companyNames?: Record<string, string>
}

const enPlural = (n: number, word: string) => `${n} ${word}${n === 1 ? '' : 's'}`

const en: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains} domains from ${p.providers} providers. Every one had working MX records when we checked on ${p.date}.`,
  dateLocale: 'en-GB',
  checkLabel: 'Is this a free email domain?',
  checkPlaceholder: 'Enter a domain or an email address',
  checkButton: 'Check domain',
  inputEmpty: 'Enter a domain or an email address.',
  inputInvalid: 'That doesn’t look like a domain. Try something like gmail.com.',
  isFree: (domain) => `${domain} is a free email domain.`,
  belongsTo: (name, company) => `It belongs to ${name}${company ? `, run by ${company}` : ''}.`,
  kindNotes: {
    webmail: 'It’s a free webmail service that anyone can join.',
    privacy: 'It’s a private, encrypted email service.',
    isp: 'It comes with a home internet plan, so it’s a personal address too.',
  },
  notListed: (domain) => `${domain} isn’t on this list.`,
  notListedText:
    'It’s most likely a company, school or personal domain. It could also be a small free provider we don’t cover, or a disposable address service. You can {mx} or {disposable}.',
  mxLink: 'look up its mail servers',
  mxHref: '/es/mx-lookup',
  disposableLink: 'check if it’s disposable',
  disposableHref: '/disposable-email-checker',
  browseLabel: 'Browse the list',
  browsePlaceholder: 'Filter by domain or provider, e.g. hotmail or gmx',
  filters: {
    all: 'All',
    webmail: 'Free webmail',
    privacy: 'Private and encrypted',
    isp: 'Internet providers',
  },
  kindLabels: {
    webmail: 'Free webmail',
    privacy: 'Private and encrypted',
    isp: 'Internet provider',
  },
  showing: (domains, providers) => `Showing ${enPlural(domains, 'domain')} from ${enPlural(providers, 'provider')}`,
  copy: 'Copy domains',
  copied: 'Copied',
  thProvider: 'Provider',
  thDomains: 'Domains',
  empty: 'No domains match that filter.',
  fileTxt: 'free-email-domains.txt',
  fileCsv: 'free-email-domains.csv',
  fileJson: 'free-email-domains.json',
  csvHeader: 'domain,provider,company,country,type',
}

const esTool: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains.toLocaleString('es-ES')} ${p.domains === 1 ? 'dominio' : 'dominios'} de ${p.providers.toLocaleString('es-ES')} ${p.providers === 1 ? 'proveedor' : 'proveedores'}. ${p.domains === 1 ? 'Tenía registros MX que funcionaban cuando lo comprobamos' : 'Todos tenían registros MX que funcionaban cuando los comprobamos'} el ${p.date}.`,
  dateLocale: 'es',
  checkLabel: '¿Es un dominio de correo gratuito?',
  checkPlaceholder: 'Escribe un dominio o una dirección de correo',
  checkButton: 'Comprobar dominio',
  inputEmpty: 'Escribe un dominio o una dirección de correo.',
  inputInvalid: 'Eso no parece un dominio. Prueba con algo como gmail.com.',
  isFree: (domain) => `${domain} es un dominio de correo gratuito.`,
  belongsTo: (name, company) =>
    `Pertenece a ${name}${company ? `, gestionado por ${company === 'Varias empresas' ? 'varias empresas' : company}` : ''}.`,
  kindNotes: {
    webmail: 'Es un servicio de correo web gratuito, abierto a todo el mundo.',
    privacy: 'Es un servicio de correo privado y cifrado.',
    isp: 'Viene con la conexión a internet de casa, así que también es una dirección personal.',
  },
  notListed: (domain) => `${domain} no está en esta lista.`,
  notListedText:
    'Seguramente es el dominio de una empresa, una escuela o una persona. También podría ser un proveedor gratuito pequeño que no incluimos, o un servicio de correo desechable. Puedes {mx} o {disposable}.',
  mxLink: 'consultar sus servidores de correo',
  mxHref: '/es/mx-lookup',
  disposableLink: 'comprobar si es desechable',
  disposableHref: '/es/verificar-correo-desechable',
  browseLabel: 'Explorar la lista',
  browsePlaceholder: 'Filtra por dominio o proveedor, p. ej. hotmail o gmx',
  filters: {
    all: 'Todos',
    webmail: 'Correo web gratuito',
    privacy: 'Privado y cifrado',
    isp: 'Proveedores de internet',
  },
  kindLabels: {
    webmail: 'Correo web gratuito',
    privacy: 'Privado y cifrado',
    isp: 'Proveedor de internet',
  },
  showing: (domains, providers) =>
    `Mostrando ${domains.toLocaleString('es-ES')} ${domains === 1 ? 'dominio' : 'dominios'} de ${providers.toLocaleString('es-ES')} ${providers === 1 ? 'proveedor' : 'proveedores'}`,
  copy: 'Copiar dominios',
  copied: 'Copiados',
  thProvider: 'Proveedor',
  thDomains: 'Dominios',
  empty: 'Ningún dominio coincide con ese filtro.',
  fileTxt: 'dominios-correo-gratis.txt',
  fileCsv: 'dominios-correo-gratis.csv',
  fileJson: 'dominios-correo-gratis.json',
  csvHeader: 'dominio,proveedor,empresa,pais,tipo',
  companyNames: { 'Globo / Vivo': 'Varias empresas' },
}


const deTool: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains.toLocaleString('de-DE')} Domains von ${p.providers.toLocaleString('de-DE')} Anbietern. Alle hatten funktionierende MX-Einträge bei unserer Prüfung am ${p.date}.`,
  dateLocale: 'de-DE',
  checkLabel: 'Ist dies eine kostenlose E-Mail-Domain?',
  checkPlaceholder: 'Geben Sie eine Domain oder E-Mail-Adresse ein',
  checkButton: 'Domain prüfen',
  inputEmpty: 'Geben Sie eine Domain oder E-Mail-Adresse ein.',
  inputInvalid: 'Das sieht nicht nach einer gültigen Domain aus. Probieren Sie z. B. gmail.com.',
  isFree: (domain) => `${domain} ist eine kostenlose E-Mail-Domain.`,
  belongsTo: (name, company) =>
    `Sie gehört zu ${name}${company ? `, betrieben von ${company}` : ''}.`,
  kindNotes: {
    webmail: 'Es ist ein kostenloser Webmail-Dienst, der jedem offensteht.',
    privacy: 'Es ist ein privater, verschlüsselter E-Mail-Dienst.',
    isp: 'Gehört zu einem privaten Internetanschluss und ist daher ebenfalls eine Privatadresse.',
  },
  notListed: (domain) => `${domain} steht nicht auf dieser Liste.`,
  notListedText:
    'Höchstwahrscheinlich handelt es sich um eine Unternehmens-, Schul- oder private Domain. Es könnte auch ein kleinerer kostenloser Anbieter oder ein Wegwerf-Dienst sein. Sie können {mx} oder {disposable}.',
  mxLink: 'die Mailserver abfragen',
  mxHref: '/de/mx-lookup',
  disposableLink: 'auf Wegwerf-Adresse prüfen',
  disposableHref: '/de/wegwerf-e-mail-pruefen',
  browseLabel: 'Liste durchsuchen',
  browsePlaceholder: 'Nach Domain oder Anbieter filtern, z. B. hotmail oder gmx',
  filters: {
    all: 'Alle',
    webmail: 'Kostenloses Webmail',
    privacy: 'Privat & verschlüsselt',
    isp: 'Internetanbieter',
  },
  kindLabels: {
    webmail: 'Kostenloses Webmail',
    privacy: 'Privat & verschlüsselt',
    isp: 'Internetanbieter',
  },
  showing: (domains, providers) =>
    `${domains.toLocaleString('de-DE')} ${domains === 1 ? 'Domain' : 'Domains'} von ${providers.toLocaleString('de-DE')} ${providers === 1 ? 'Anbieter' : 'Anbietern'} angezeigt`,
  copy: 'Domains kopieren',
  copied: 'Kopiert',
  thProvider: 'Anbieter',
  thDomains: 'Domains',
  empty: 'Keine Domains passen zu diesem Filter.',
  fileTxt: 'kostenlose-e-mail-domains.txt',
  fileCsv: 'kostenlose-e-mail-domains.csv',
  fileJson: 'kostenlose-e-mail-domains.json',
  csvHeader: 'domain,anbieter,unternehmen,land,typ',
  companyNames: { 'Globo / Vivo': 'Verschiedene Unternehmen' },
}

const frTool: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains.toLocaleString('fr-FR')} domaines issus de ${p.providers.toLocaleString('fr-FR')} fournisseurs. Tous avaient des enregistrements MX fonctionnels lors de notre vérification du ${p.date}.`,
  dateLocale: 'fr-FR',
  checkLabel: 'Est-ce un domaine d’e-mail gratuit ?',
  checkPlaceholder: 'Entrez un domaine ou une adresse e-mail',
  checkButton: 'Vérifier le domaine',
  inputEmpty: 'Entrez un domaine ou une adresse e-mail.',
  inputInvalid: 'Ceci ne ressemble pas à un domaine valide. Essayez par exemple gmail.com.',
  isFree: (domain) => `${domain} est un domaine de messagerie gratuit.`,
  belongsTo: (name, company) =>
    `Il appartient à ${name}${company ? `, géré par ${company}` : ''}.`,
  kindNotes: {
    webmail: 'Il s’agit d’un service de webmail gratuit accessible à tous.',
    privacy: 'Il s’agit d’un service de messagerie privé et chiffré.',
    isp: 'Il est fourni avec un abonnement internet résidentiel, c’est donc aussi une adresse personnelle.',
  },
  notListed: (domain) => `${domain} ne figure pas sur cette liste.`,
  notListedText:
    'Il s’agit très probablement d’un domaine d’entreprise, d’école ou d’un domaine personnel. Il peut également s’agir d’un petit fournisseur gratuit non répertorié ou d’un service jetable. Vous pouvez {mx} ou {disposable}.',
  mxLink: 'consulter ses serveurs de messagerie',
  mxHref: '/fr/mx-lookup',
  disposableLink: 'vérifier s’il est jetable',
  disposableHref: '/fr/verifier-adresse-mail-jetable',
  browseLabel: 'Parcourir la liste',
  browsePlaceholder: 'Filtrer par domaine ou fournisseur, ex. hotmail ou gmx',
  filters: {
    all: 'Tous',
    webmail: 'Webmail gratuit',
    privacy: 'Privé et chiffré',
    isp: 'Fournisseurs d’accès internet',
  },
  kindLabels: {
    webmail: 'Webmail gratuit',
    privacy: 'Privé et chiffré',
    isp: 'Fournisseur d’accès internet',
  },
  showing: (domains, providers) =>
    `Affichage de ${domains.toLocaleString('fr-FR')} ${domains === 1 ? 'domaine' : 'domaines'} sur ${providers.toLocaleString('fr-FR')} ${providers === 1 ? 'fournisseur' : 'fournisseurs'}`,
  copy: 'Copier les domaines',
  copied: 'Copié',
  thProvider: 'Fournisseur',
  thDomains: 'Domaines',
  empty: 'Aucun domaine ne correspond à ce filtre.',
  fileTxt: 'domaines-email-gratuits.txt',
  fileCsv: 'domaines-email-gratuits.csv',
  fileJson: 'domaines-email-gratuits.json',
  csvHeader: 'domaine,fournisseur,entreprise,pays,type',
  companyNames: { 'Globo / Vivo': 'Plusieurs entreprises' },
}

const itTool: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains.toLocaleString('it-IT')} domini di ${p.providers.toLocaleString('it-IT')} provider. Tutti avevano record MX funzionanti al nostro controllo del ${p.date}.`,
  dateLocale: 'it-IT',
  checkLabel: 'È un dominio email gratuito?',
  checkPlaceholder: 'Inserisci un dominio o un indirizzo email',
  checkButton: 'Verifica dominio',
  inputEmpty: 'Inserisci un dominio o un indirizzo email.',
  inputInvalid: 'Non sembra un dominio valido. Prova con qualcosa come gmail.com.',
  isFree: (domain) => `${domain} è un dominio email gratuito.`,
  belongsTo: (name, company) =>
    `Appartiene a ${name}${company ? `, gestito da ${company}` : ''}.`,
  kindNotes: {
    webmail: 'È un servizio webmail gratuito aperto a tutti.',
    privacy: 'È un servizio email privato e crittografato.',
    isp: 'È incluso in un abbonamento internet domestico, quindi è anch’esso un indirizzo personale.',
  },
  notListed: (domain) => `${domain} non è in questo elenco.`,
  notListedText:
    'Molto probabilmente è il dominio di un’azienda, scuola o privato. Potrebbe anche essere un piccolo provider gratuito non presente o un servizio temporaneo. Puoi {mx} oppure {disposable}.',
  mxLink: 'controllare i suoi mail server',
  mxHref: '/it/mx-lookup',
  disposableLink: 'verificare se è temporaneo',
  disposableHref: '/it/verifica-email-temporanea',
  browseLabel: 'Esplora l’elenco',
  browsePlaceholder: 'Filtra per dominio o provider, es. hotmail o gmx',
  filters: {
    all: 'Tutti',
    webmail: 'Webmail gratuita',
    privacy: 'Privato e crittografato',
    isp: 'Provider internet',
  },
  kindLabels: {
    webmail: 'Webmail gratuita',
    privacy: 'Privato e crittografato',
    isp: 'Provider internet',
  },
  showing: (domains, providers) =>
    `Mostrati ${domains.toLocaleString('it-IT')} ${domains === 1 ? 'dominio' : 'domini'} di ${providers.toLocaleString('it-IT')} ${providers === 1 ? 'provider' : 'provider'}`,
  copy: 'Copia domini',
  copied: 'Copiato',
  thProvider: 'Provider',
  thDomains: 'Domini',
  empty: 'Nessun dominio corrisponde a questo filtro.',
  fileTxt: 'domini-email-gratuiti.txt',
  fileCsv: 'domini-email-gratuiti.csv',
  fileJson: 'domini-email-gratuiti.json',
  csvHeader: 'dominio,provider,azienda,paese,tipo',
  companyNames: { 'Globo / Vivo': 'Varie aziende' },
}

const ptBrTool: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains.toLocaleString('pt-BR')} domínios de ${p.providers.toLocaleString('pt-BR')} provedores. Todos tinham registros MX funcionando quando verificamos em ${p.date}.`,
  dateLocale: 'pt-BR',
  checkLabel: 'Este é um domínio de email gratuito?',
  checkPlaceholder: 'Digite um domínio ou endereço de email',
  checkButton: 'Verificar domínio',
  inputEmpty: 'Digite um domínio ou endereço de email.',
  inputInvalid: 'Isso não parece um domínio válido. Tente algo como gmail.com.',
  isFree: (domain) => `${domain} é um domínio de email gratuito.`,
  belongsTo: (name, company) =>
    `Pertence a ${name}${company ? `, administrado por ${company}` : ''}.`,
  kindNotes: {
    webmail: 'É um serviço de webmail gratuito aberto a todos.',
    privacy: 'É um serviço de email privado e criptografado.',
    isp: 'Vem incluso com um plano de internet residencial, logo também é um endereço pessoal.',
  },
  notListed: (domain) => `${domain} não está nesta lista.`,
  notListedText:
    'Muito provavelmente é o domínio de uma empresa, instituição de ensino ou pessoal. Também pode ser um provedor gratuito menor ou um serviço descartável. Você pode {mx} ou {disposable}.',
  mxLink: 'consultar seus servidores de email',
  mxHref: '/pt-br/mx-lookup',
  disposableLink: 'verificar se é descartável',
  disposableHref: '/pt-br/verificador-de-e-mail-descartavel',
  browseLabel: 'Explorar a lista',
  browsePlaceholder: 'Filtrar por domínio ou provedor, ex.: hotmail ou gmx',
  filters: {
    all: 'Todos',
    webmail: 'Webmail gratuito',
    privacy: 'Privado e criptografado',
    isp: 'Provedores de internet',
  },
  kindLabels: {
    webmail: 'Webmail gratuito',
    privacy: 'Privado e criptografado',
    isp: 'Provedor de internet',
  },
  showing: (domains, providers) =>
    `Exibindo ${domains.toLocaleString('pt-BR')} ${domains === 1 ? 'domínio' : 'domínios'} de ${providers.toLocaleString('pt-BR')} ${providers === 1 ? 'provedor' : 'provedores'}`,
  copy: 'Copiar domínios',
  copied: 'Copiado',
  thProvider: 'Provedor',
  thDomains: 'Domínios',
  empty: 'Nenhum domínio corresponde a esse filtro.',
  fileTxt: 'dominios-email-gratuitos.txt',
  fileCsv: 'dominios-email-gratuitos.csv',
  fileJson: 'dominios-email-gratuitos.json',
  csvHeader: 'dominio,provedor,empresa,pais,tipo',
  companyNames: { 'Globo / Vivo': 'Várias empresas' },
}

const nlTool: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains.toLocaleString('nl-NL')} domeinen van ${p.providers.toLocaleString('nl-NL')} providers. Stuk voor stuk gecontroleerd op werkende MX-records op ${p.date}.`,
  dateLocale: 'nl-NL',
  checkLabel: 'Is dit een gratis e-maildomein?',
  checkPlaceholder: 'Voer een domein of e-mailadres in',
  checkButton: 'Domein controleren',
  inputEmpty: 'Voer een domein of e-mailadres in.',
  inputInvalid: 'Dit lijkt geen geldig domein. Probeer iets als gmail.com.',
  isFree: (domain) => `${domain} is een gratis e-maildomein.`,
  belongsTo: (name, company) =>
    `Het hoort bij ${name}${company ? `, beheerd door ${company}` : ''}.`,
  kindNotes: {
    webmail: 'Het is een gratis webmaildienst waar iedereen lid van kan worden.',
    privacy: 'Het is een veilige, versleutelde privégegevensdienst.',
    isp: 'Het hoort bij een vast internetabonnement en is dus eveneens een privéadres.',
  },
  notListed: (domain) => `${domain} staat niet op deze lijst.`,
  notListedText:
    'Hoogstwaarschijnlijk is het een bedrijfs-, school- of persoonlijk domein. Het kan ook een kleine gratis provider zijn die we niet dekken, of een tijdelijke e-maildienst. U kunt {mx} of {disposable}.',
  mxLink: 'de mailservers opzoeken',
  mxHref: '/nl/mx-lookup',
  disposableLink: 'controleren of het wegwerp is',
  disposableHref: '/nl/wegwerp-e-mailadres-controleren',
  browseLabel: 'Lijst doorzoeken',
  browsePlaceholder: 'Filter op domein of provider, bijv. hotmail of gmx',
  filters: {
    all: 'Alles',
    webmail: 'Gratis webmail',
    privacy: 'Privé en versleuteld',
    isp: 'Internetproviders',
  },
  kindLabels: {
    webmail: 'Gratis webmail',
    privacy: 'Privé en versleuteld',
    isp: 'Internetprovider',
  },
  showing: (domains, providers) =>
    `Weergave van ${domains.toLocaleString('nl-NL')} ${domains === 1 ? 'domein' : 'domeinen'} van ${providers.toLocaleString('nl-NL')} ${providers === 1 ? 'provider' : 'providers'}`,
  copy: 'Domeinen kopiëren',
  copied: 'Gekopieerd',
  thProvider: 'Provider',
  thDomains: 'Domeinen',
  empty: 'Geen enkel domein voldoet aan dit filter.',
  fileTxt: 'gratis-email-domeinen.txt',
  fileCsv: 'gratis-email-domeinen.csv',
  fileJson: 'gratis-email-domeinen.json',
  csvHeader: 'domein,provider,bedrijf,land,type',
  companyNames: { 'Globo / Vivo': 'Diverse bedrijven' },
}

const plTool: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains.toLocaleString('pl-PL')} domen od ${p.providers.toLocaleString('pl-PL')} dostawców. Każda domena miała działające rekordy MX podczas weryfikacji w dniu ${p.date}.`,
  dateLocale: 'pl-PL',
  checkLabel: 'Czy to darmowa domena email?',
  checkPlaceholder: 'Wpisz domenę lub adres email',
  checkButton: 'Sprawdź domenę',
  inputEmpty: 'Wpisz domenę lub adres email.',
  inputInvalid: 'To nie wygląda na poprawną domenę. Wpisz np. gmail.com.',
  isFree: (domain) => `${domain} to darmowa domena pocztowa.`,
  belongsTo: (name, company) =>
    `Należy do ${name}${company ? `, prowadzonego przez ${company}` : ''}.`,
  kindNotes: {
    webmail: 'To bezpłatna usługa poczty internetowej (webmail) otwarta dla każdego.',
    privacy: 'To prywatna, szyfrowana usługa poczty elektronicznej.',
    isp: 'Dołączona do domowego abonamentu internetowego, więc jest to również adres prywatny.',
  },
  notListed: (domain) => `Domeny ${domain} nie ma na tej liście.`,
  notListedText:
    'Najprawdopodobniej jest to domena firmowa, szkolna lub prywatna. Może to być również mniejszy darmowy dostawca lub usługa poczty jednorazowej. Możesz {mx} lub {disposable}.',
  mxLink: 'sprawdzić serwery pocztowe MX',
  mxHref: '/pl/mx-lookup',
  disposableLink: 'sprawdzić, czy to adres jednorazowy',
  disposableHref: '/pl/sprawdz-jednorazowy-email',
  browseLabel: 'Przeglądaj listę',
  browsePlaceholder: 'Filtruj według domeny lub dostawcy, np. hotmail lub gmx',
  filters: {
    all: 'Wszystkie',
    webmail: 'Darmowy webmail',
    privacy: 'Prywatne i szyfrowane',
    isp: 'Dostawcy internetu',
  },
  kindLabels: {
    webmail: 'Darmowy webmail',
    privacy: 'Prywatne i szyfrowane',
    isp: 'Dostawca internetu',
  },
  showing: (domains, providers) =>
    `Wyświetlanie ${domains.toLocaleString('pl-PL')} domen od ${providers.toLocaleString('pl-PL')} dostawców`,
  copy: 'Kopiuj domeny',
  copied: 'Skopiowano',
  thProvider: 'Dostawca',
  thDomains: 'Domeny',
  empty: 'Żadna domena nie pasuje do tego filtra.',
  fileTxt: 'darmowe-domeny-email.txt',
  fileCsv: 'darmowe-domeny-email.csv',
  fileJson: 'darmowe-domeny-email.json',
  csvHeader: 'domena,dostawca,firma,kraj,typ',
  companyNames: { 'Globo / Vivo': 'Różne firmy' },
}

const idTool: FreeProvidersToolStrings = {
  banner: (p) =>
    `${p.domains.toLocaleString('id-ID')} domain dari ${p.providers.toLocaleString('id-ID')} penyedia. Semuanya memiliki catatan MX aktif saat kami periksa pada ${p.date}.`,
  dateLocale: 'id-ID',
  checkLabel: 'Apakah ini domain email gratis?',
  checkPlaceholder: 'Masukkan domain atau alamat email',
  checkButton: 'Periksa domain',
  inputEmpty: 'Masukkan domain atau alamat email.',
  inputInvalid: 'Format tidak menyerupai domain valid. Coba seperti gmail.com.',
  isFree: (domain) => `${domain} adalah domain email gratis.`,
  belongsTo: (name, company) =>
    `Domain ini milik ${name}${company ? `, dikelola oleh ${company}` : ''}.`,
  kindNotes: {
    webmail: 'Ini adalah layanan webmail gratis yang terbuka untuk siapa saja.',
    privacy: 'Ini adalah layanan email pribadi dan terenkripsi.',
    isp: 'Disediakan bersama paket internet rumah, sehingga juga merupakan alamat pribadi.',
  },
  notListed: (domain) => `${domain} tidak ada dalam daftar ini.`,
  notListedText:
    'Kemungkinan besar ini adalah domain perusahaan, institusi pendidikan, atau pribadi. Bisa juga penyedia gratis berskala kecil atau layanan email sementara. Anda dapat {mx} atau {disposable}.',
  mxLink: 'memeriksa mail server MX-nya',
  mxHref: '/id/mx-lookup',
  disposableLink: 'memeriksa apakah email sementara',
  disposableHref: '/id/cek-email-sementara',
  browseLabel: 'Jelajahi daftar',
  browsePlaceholder: 'Filter berdasarkan domain atau penyedia, cth. hotmail atau gmx',
  filters: {
    all: 'Semua',
    webmail: 'Webmail gratis',
    privacy: 'Pribadi & terenkripsi',
    isp: 'Penyedia internet',
  },
  kindLabels: {
    webmail: 'Webmail gratis',
    privacy: 'Pribadi & terenkripsi',
    isp: 'Penyedia internet',
  },
  showing: (domains, providers) =>
    `Menampilkan ${domains.toLocaleString('id-ID')} domain dari ${providers.toLocaleString('id-ID')} penyedia`,
  copy: 'Salin domain',
  copied: 'Tersalin',
  thProvider: 'Penyedia',
  thDomains: 'Domain',
  empty: 'Tidak ada domain yang cocok dengan filter ini.',
  fileTxt: 'domain-email-gratis.txt',
  fileCsv: 'domain-email-gratis.csv',
  fileJson: 'domain-email-gratis.json',
  csvHeader: 'domain,penyedia,perusahaan,negara,tipe',
  companyNames: { 'Globo / Vivo': 'Berbagai perusahaan' },
}


export const FREE_PROVIDERS_TOOL_STRINGS: Record<Locale, FreeProvidersToolStrings> = {
  en,
  es: esTool,
  de: deTool,
  fr: frTool,
  it: itTool,
  'pt-br': ptBrTool,
  nl: nlTool,
  pl: plTool,
  id: idTool,
}

export function freeProvidersToolStrings(locale: Locale): FreeProvidersToolStrings {
  return FREE_PROVIDERS_TOOL_STRINGS[locale] ?? en
}

/** The company behind a provider, translated where the data holds a word instead of a name. */
export function freeProviderCompany(t: FreeProvidersToolStrings, p: FreeEmailProvider): string {
  return t.companyNames?.[p.name] ?? p.company
}
