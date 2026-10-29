// All page copy for the list of free email providers, one object per language
// the page ships in. The page is
// components/tools/FreeEmailProviders/FreeEmailProvidersPage.tsx; the URLs live
// in CLUSTERS.freeEmailProviders (lib/i18n/clusters.ts). The tool's own labels
// are in lib/i18n/tools/freeProvidersToolStrings.ts.
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists.
//
// The provider names in the two tables are data (COMPARE_PROVIDERS and the
// signup rows in the page). Their wording here is keyed by provider name, and a
// translation must fill every key.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

/** Providers of the comparison table, in the order shown. */
export const COMPARE_PROVIDERS = [
  'Gmail',
  'Outlook.com',
  'Yahoo Mail',
  'iCloud Mail',
  'Proton Mail',
  'Tuta',
  'Zoho Mail',
  'GMX',
  'mail.com',
] as const
export type CompareProvider = (typeof COMPARE_PROVIDERS)[number]
/** Providers of the "which domains you can still sign up for" table. */
export type SignupProvider = Exclude<CompareProvider, 'Zoho Mail'>

export interface FreeProvidersPageStrings {
  metaTitle: string
  ogTitle: string
  /** Meta and schema description, with the number of domains on the list. */
  description: (domains: number) => string
  ogLocale?: string
  ogImage: string
  ogAlt: string
  crumb: string
  /** ItemList schema of the comparison table. */
  listName: string
  listDescription: string
  appName: string
  featureList: (domains: number, providers: number) => string[]
  h1: string
  heroIntro: (domains: number) => string
  howTitle: string
  howSteps: [string, string, string]
  howNote: string
  imageAlt: string
  coverTitle: string
  /** The second and third paragraphs carry a link. */
  coverParas: [string, string, string]
  compareTitle: string
  compareIntro: string
  thProvider: string
  thStorage: string
  thNotes: string
  /**
   * Free plans as stated on each provider's own pages on 2026-10-12 (sources in
   * targetpulse-seo/plans/19-free-email-providers-plan.md). Figures we couldn't
   * confirm on an official page (AOL storage, Yandex and Mail.ru quotas) are left out.
   */
  compare: Record<CompareProvider, { storage: string; notes: string }>
  bestTitle: string
  bestIntro: string
  bestList: [string, string, string, string]
  bestNote: string
  signupTitle: string
  signupIntro: string
  thNewAccounts: string
  thOtherDomains: string
  /** Labels before each value on phones, where the header is hidden. Each ends with a space. */
  newAccountsLabel: string
  alsoInUseLabel: string
  /** Other domains in use, from the providers' help pages. The new-account domains are data in the page. */
  signupOther: Record<SignupProvider, string>
  signupNote: string
  closeTitle: string
  closeIntro: string
  closeList: [string, string, string, string, string]
  /** Carries two links. */
  closeNote: string
  b2bTitle: string
  /** The third paragraph carries a link. */
  b2bParas: [string, string, string]
  dupesTitle: string
  dupesIntro: string
  dupesList: [string, string, string, string]
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: FreeProvidersPageStrings = {
  metaTitle: 'List of Free Email Providers and Their Domains | Giggal.ai',
  ogTitle: 'List of Free Email Providers and Their Domains',
  description: (domains) =>
    `A list of free email providers, from Gmail and Outlook to Proton and GMX, with ${domains} free email domains you can check or download as CSV.`,
  ogImage: '/tools/free-email-providers-og-v2.webp',
  ogAlt: 'List of free email providers',
  crumb: 'Free Email Providers',
  listName: 'Free email providers compared',
  listDescription: 'The main free email services and what their free plans include.',
  appName: 'Free Email Domain Checker and List',
  featureList: (domains, providers) => [
    `${domains} free email domains from ${providers} providers`,
    'Every domain checked for working MX records',
    'Check whether a domain or email address is a free provider',
    'Download as TXT, CSV or JSON',
  ],
  h1: 'List of Free Email Providers',
  heroIntro: (domains) =>
    `The free email services people actually use, and the ${domains} domains their addresses end in. Check a domain, or download the whole list.`,
  howTitle: 'How to use this list',
  howSteps: [
    'To check one address, paste it into the box at the top. The tool tells you whether the domain belongs to a free provider, and which one.',
    "To find a provider's domains, type its name in the filter, for example hotmail or gmx. Outlook.com alone has dozens of country versions.",
    'To use the list in a spreadsheet, a CRM or your own code, download it. The CSV has the domain, the provider, the company behind it, its country and its type.',
  ],
  howNote: 'Downloads follow the filter you set. Choose Internet providers, for example, and you get only those domains.',
  imageAlt: 'Illustration of email addresses from different free providers sorted into a domain list.',
  coverTitle: "What's on the list, and what isn't",
  coverParas: [
    'This list of free email providers covers three kinds of services. Free webmail services such as Gmail, Outlook.com, Yahoo Mail, GMX and mail.com. Private, encrypted services such as Proton Mail and Tuta. And the consumer mailboxes of large internet providers, such as Comcast, AT&T, BT and Orange. Those come with a home internet plan rather than for free, but they are personal addresses all the same.',
    "We checked every domain's [MX records](/mx-lookup) before adding it. Where a provider runs its own mail servers, the records had to point there. Old domains that no longer accept mail, and domains that now belong to someone else, were left out. That's why a few old country versions, such as yahoo.ch and aol.ca, aren't here.",
    'Disposable services are not on this list. Those give out throwaway inboxes that expire after minutes or hours, and they have their own [list of disposable email providers](/disposable-email-providers).',
  ],
  compareTitle: 'Free email providers compared',
  compareIntro:
    "Here is what each main email service provider gives you on its free plan. Every figure comes from the provider's own pages, checked on 12 October 2026. Free plans change often, so check the provider's site before you decide.",
  thProvider: 'Provider',
  thStorage: 'Free storage',
  thNotes: 'Notes',
  compare: {
    Gmail: {
      storage: '15 GB, shared with Google Drive and Photos',
      notes:
        'Shows ads, but Google says it doesn’t use your email to choose them. Since March 2026, some new accounts start with 5 GB and get the other 10 GB after you verify a phone number.',
    },
    'Outlook.com': {
      storage: '15 GB for email',
      notes: 'Attachments count against a separate 5 GB of cloud storage. Shows ads unless you pay for Microsoft 365.',
    },
    'Yahoo Mail': {
      storage: '20 GB in the US',
      notes: 'Some countries get less. UK users were told about a cut to 15 GB in 2026. Yahoo Mail Plus removes the ads.',
    },
    'iCloud Mail': {
      storage: '5 GB, shared with the rest of iCloud',
      notes: 'Comes with every Apple Account. Using your own domain needs a paid iCloud+ plan.',
    },
    'Proton Mail': {
      storage: '500 MB, rising to 1 GB after the setup steps',
      notes: 'End-to-end encrypted. The free plan allows one address and 150 messages a day.',
    },
    Tuta: {
      storage: '1 GB',
      notes: 'End-to-end encrypted. No extra addresses or custom domain on the free plan.',
    },
    'Zoho Mail': {
      storage: '5 GB per user, for up to 5 users',
      notes:
        'Unusually for a free plan, it works with your own domain. Web and app only, with no IMAP or POP, and not offered in every region. No ads.',
    },
    GMX: {
      storage: '65 GB on gmx.com and gmx.co.uk',
      notes: 'Up to 10 extra addresses. The German service on gmx.de and gmx.net has a smaller free plan with 1 GB.',
    },
    'mail.com': {
      storage: '65 GB, plus 2 GB of cloud storage',
      notes: 'You pick your address from over 100 domains, such as email.com, usa.com and consultant.com. Premium removes the ads.',
    },
  },
  bestTitle: 'What is the best email service for you?',
  bestIntro: "There is no single best email service. The best email account for you depends on what you'll use it for.",
  bestList: [
    'For the most free storage, GMX and mail.com give 65 GB each.',
    'For privacy, Proton Mail and Tuta encrypt your mail end to end, even on the free plan.',
    "For your own domain at no cost, Zoho Mail's Forever Free plan covers up to five people.",
    'If you already use Apple, Google or Microsoft apps, iCloud Mail, Gmail or Outlook.com work with them.',
  ],
  bestNote:
    'For work, a free address is fine to start with. Some business forms block free addresses, though, and the section on B2B forms below explains why.',
  signupTitle: 'Which domains you can still sign up for',
  signupIntro:
    'The big providers collected extra domains over the years, and only some are offered to new accounts. The others keep working for the people who already have them.',
  thNewAccounts: 'New accounts',
  thOtherDomains: 'Other domains in use',
  newAccountsLabel: 'New accounts: ',
  alsoInUseLabel: 'Also in use: ',
  signupOther: {
    Gmail: 'googlemail.com, which reaches the same mailbox',
    'Outlook.com': 'live.com, msn.com and country versions such as hotmail.co.uk',
    'Yahoo Mail': 'ymail.com, rocketmail.com and country versions such as yahoo.co.uk',
    'iCloud Mail': 'me.com, mac.com',
    'Proton Mail': 'protonmail.ch. pm.me comes with paid plans.',
    Tuta: 'tuta.com comes with paid plans.',
    GMX: 'Other country versions',
    'mail.com': 'About 140 more, and every one is open to new accounts.',
  },
  signupNote:
    "For a B2B filter, the difference doesn't matter. An address on me.com or ymail.com is just as personal as one on gmail.com, so the list includes both kinds.",
  closeTitle: 'Free accounts close when nobody uses them',
  closeIntro: "Free providers delete accounts that sit unused. That's one reason an old list full of free addresses bounces more over time.",
  closeList: [
    "Gmail: Google can delete an account that hasn't been used for two years.",
    'Outlook.com: you need to sign in at least once a year to keep the inbox. The account closes after two years without a sign-in.',
    'Yahoo Mail: the mailbox is deleted after 12 months without use, and the account after 18 months.',
    'Proton Mail: free accounts are deleted after 12 months of inactivity.',
    'Tuta: free accounts are deleted after 6 months without a login.',
  ],
  closeNote:
    'Before you email an old list, check it. The [bulk email verifier](/bulk-email-verifier) finds the addresses that no longer exist, and the [email checker](/email-checker) does the same for one address.',
  b2bTitle: 'Free email domains on B2B forms',
  b2bParas: [
    'Many B2B companies only want sign-ups from work addresses. HubSpot, for example, has a form setting called Block free email providers that turns away free domains. You can do the same in your own form code with the CSV above.',
    'Blocking has a cost, though. Some sole traders and small businesses run everything from a Gmail or Outlook.com address, and a hard block turns them away. A softer option is to accept the address, mark it as personal in your CRM, and let your sales team decide.',
    "A free address isn't a fake one. Gmail and Outlook.com mailboxes are permanent and receive mail. Disposable addresses are the ones that stop working after a few minutes or hours, and the [disposable email checker](/disposable-email-checker) catches those.",
  ],
  dupesTitle: 'Spotting duplicate free addresses',
  dupesIntro: 'Some providers deliver several spellings of an address to the same inbox. That matters when you remove duplicates from a list.',
  dupesList: [
    "Gmail ignores dots in the name, so john.smith@gmail.com and johnsmith@gmail.com are the same inbox. That's true for personal Gmail, not for Google Workspace accounts.",
    'gmail.com and googlemail.com reach the same mailbox.',
    'Plus addresses, such as john+news@gmail.com, land in the main inbox too.',
    'Yandex treats dots and hyphens in the name as the same address.',
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'What is an email service provider?',
      a: 'It’s the company that runs your mailbox. It gives you an address, stores your mail and lets you send and receive. Gmail, Outlook.com and Proton Mail are email service providers. The same term is also used for bulk email services such as Mailchimp, which send newsletters rather than host inboxes.',
    },
    {
      q: 'Which free email service has the most storage?',
      a: 'Of the services compared on this page, GMX (on gmx.com and gmx.co.uk) and mail.com give the most, with 65 GB each. Yahoo gives 20 GB in the US, and Gmail and Outlook.com give 15 GB.',
    },
    {
      q: 'Which free email provider is the most private?',
      a: 'Proton Mail and Tuta encrypt your mail end to end, even on their free plans. Gmail, Outlook.com and iCloud Mail don’t offer end-to-end encryption on free accounts.',
    },
    {
      q: 'Can I get a free email address with my own domain?',
      a: 'Zoho Mail’s Forever Free plan works with one domain of your own, for up to five users, on the web and in Zoho’s apps. Gmail and Proton Mail need a paid plan for that, and iCloud Mail needs iCloud+.',
    },
    {
      q: 'Is a free email address the same as a disposable one?',
      a: 'No. A free address like name@gmail.com is a permanent mailbox. A disposable address stops working after minutes or hours, and people use it to get past sign-up forms. This list only covers permanent providers.',
    },
    {
      q: 'How do I block free email domains on a form?',
      a: 'In HubSpot, turn on Block free email providers in the form’s settings. In your own code, download the CSV or JSON above, then reject or flag any address whose domain is on it.',
    },
    {
      q: 'Do free email accounts expire?',
      a: 'Yes, if nobody uses them. Google can delete a Gmail account after two years without use. Yahoo deletes the mailbox after 12 months, and Outlook.com closes the inbox if you don’t sign in once a year.',
    },
    {
      q: 'Why isn’t a domain I know on the list?',
      a: 'It may no longer receive mail, it may now belong to another company, or it may be a smaller provider we haven’t added. Any domain without working MX records was left out when we checked the list.',
    },
  ],
  ctaHeadline: 'Check that each address exists, not just its provider',
  ctaSupporting: 'A Gmail address can still bounce if the mailbox was closed. Giggal checks each address before you send. 1,000 free credits.',
  ctaButton: 'Get 1,000 free credits',
}

const es: FreeProvidersPageStrings = {
  metaTitle: 'Proveedores de correo electrónico gratuitos: lista | Giggal.ai',
  ogTitle: 'Proveedores de correo electrónico gratuitos: lista',
  description: (domains) =>
    `Lista de proveedores de correo electrónico gratuitos, de Gmail y Outlook a Proton y GMX. Incluye ${domains.toLocaleString('es-ES')} ${domains === 1 ? 'dominio' : 'dominios'} que puedes comprobar o descargar en CSV.`,
  ogLocale: 'es_LA',
  ogImage: '/og-card.png',
  ogAlt: 'Lista de proveedores de correo electrónico gratuitos',
  crumb: 'Proveedores de correo gratuitos',
  listName: 'Comparativa de proveedores de correo gratuitos',
  listDescription: 'Los principales servicios de correo gratuitos y lo que incluyen sus planes gratis.',
  appName: 'Verificador y lista de dominios de correo gratuitos',
  featureList: (domains, providers) => [
    `${domains.toLocaleString('es-ES')} ${domains === 1 ? 'dominio de correo gratuito' : 'dominios de correo gratuitos'} de ${providers.toLocaleString('es-ES')} ${providers === 1 ? 'proveedor' : 'proveedores'}`,
    'Registros MX activos comprobados en cada dominio',
    'Comprueba si un dominio o una dirección de correo es de un proveedor gratuito',
    'Descarga en TXT, CSV o JSON',
  ],
  h1: 'Lista de proveedores de correo electrónico gratuitos',
  heroIntro: (domains) =>
    `Los proveedores de correo electrónico gratuitos que la gente usa de verdad y ${domains === 1 ? 'el dominio en el que terminan' : `los ${domains.toLocaleString('es-ES')} dominios en los que terminan`} sus direcciones. Comprueba un dominio o descarga la lista completa.`,
  howTitle: 'Cómo usar esta lista',
  howSteps: [
    'Para comprobar una dirección, pégala en el campo de arriba. La herramienta te dice si el dominio es de un proveedor gratuito, y de cuál.',
    'Para ver los dominios de un proveedor, escribe su nombre en el filtro, por ejemplo hotmail o gmx. Outlook.com por sí solo tiene decenas de versiones por país.',
    'Para usar la lista en una hoja de cálculo, un CRM o tu propio código, descárgala. El CSV incluye el dominio, el proveedor, la empresa que lo gestiona, su país y su tipo.',
  ],
  howNote: 'La descarga respeta el filtro que elijas. Por ejemplo, si eliges Proveedores de internet, solo descargas esos dominios.',
  imageAlt: 'Ilustración de direcciones de correo de varios proveedores gratuitos, ordenadas en una lista de dominios.',
  coverTitle: 'Qué incluye la lista y qué no',
  coverParas: [
    'Esta lista de proveedores de correo gratuitos cubre tres tipos de servicios. Los servicios de correo web gratuitos, como Gmail, Outlook.com, Yahoo Mail, GMX y mail.com. Los servicios privados y cifrados, como Proton Mail y Tuta. Y los buzones personales de los grandes proveedores de internet, como Comcast, AT&T, BT y Orange. Vienen con la conexión a internet de casa y no son gratis, pero igualmente son direcciones personales.',
    'Antes de añadir cada dominio, comprobamos sus [registros MX](/mx-lookup). Si el proveedor tiene sus propios servidores de correo, los registros debían apuntar a ellos. Dejamos fuera los dominios antiguos que ya no aceptan correo y los que ahora tienen otro dueño. Por eso no aparecen algunas versiones antiguas por país, como yahoo.ch y aol.ca.',
    'Los servicios desechables no están en esta lista. Ofrecen bandejas temporales que caducan en minutos u horas, y tienen su propia [lista de proveedores de correo desechable](/disposable-email-providers).',
  ],
  compareTitle: 'Comparativa de proveedores de correo electrónico gratuitos',
  compareIntro:
    'Esto es lo que ofrece cada gran proveedor de correo electrónico en su plan gratis. Cada cifra sale de las páginas del propio proveedor, revisadas el 12 de octubre de 2026. Los planes gratis cambian a menudo, así que consulta el sitio web del proveedor antes de decidir.',
  thProvider: 'Proveedor',
  thStorage: 'Almacenamiento gratis',
  thNotes: 'Notas',
  compare: {
    Gmail: {
      storage: '15 GB, compartidos con Google Drive y Google Fotos',
      notes:
        'Muestra anuncios, pero Google dice que no usa tu correo para elegirlos. Desde marzo de 2026, algunas cuentas nuevas empiezan con 5 GB y reciben los otros 10 GB al verificar un número de teléfono.',
    },
    'Outlook.com': {
      storage: '15 GB para el correo',
      notes: 'Los adjuntos se descuentan de otro espacio de 5 GB en la nube. Muestra anuncios, salvo que pagues Microsoft 365.',
    },
    'Yahoo Mail': {
      storage: '20 GB en Estados Unidos',
      notes: 'En algunos países es menos. En 2026 se avisó a los usuarios del Reino Unido de un recorte a 15 GB. Yahoo Mail Plus quita los anuncios.',
    },
    'iCloud Mail': {
      storage: '5 GB, compartidos con el resto de iCloud',
      notes: 'Viene con cada cuenta de Apple. Para usar tu propio dominio necesitas un plan de pago de iCloud+.',
    },
    'Proton Mail': {
      storage: '500 MB, que suben a 1 GB tras los pasos de configuración',
      notes: 'Cifrado de extremo a extremo. El plan gratis permite una dirección y 150 mensajes al día.',
    },
    Tuta: {
      storage: '1 GB',
      notes: 'Cifrado de extremo a extremo. El plan gratis no incluye direcciones extra ni dominio propio.',
    },
    'Zoho Mail': {
      storage: '5 GB por usuario, hasta 5 usuarios',
      notes:
        'Algo poco común en un plan gratis: funciona con tu propio dominio. Solo web y app, sin IMAP ni POP, y no está disponible en todas las regiones. Sin anuncios.',
    },
    GMX: {
      storage: '65 GB en gmx.com y gmx.co.uk',
      notes: 'Hasta 10 direcciones extra. El servicio alemán en gmx.de y gmx.net tiene un plan gratis más pequeño, con 1 GB.',
    },
    'mail.com': {
      storage: '65 GB, más 2 GB de almacenamiento en la nube',
      notes: 'Eliges tu dirección entre más de 100 dominios, como email.com, usa.com y consultant.com. Premium quita los anuncios.',
    },
  },
  bestTitle: '¿Cuál es el mejor servicio de correo para ti?',
  bestIntro: 'No hay un servicio de correo que sea el mejor para todo el mundo. La mejor cuenta de correo para ti depende del uso que le vayas a dar.',
  bestList: [
    'Si buscas el mayor almacenamiento gratis, GMX y mail.com ofrecen 65 GB cada uno.',
    'Si buscas privacidad, Proton Mail y Tuta cifran tu correo de extremo a extremo, también en el plan gratis.',
    'Para usar tu propio dominio sin pagar, el plan Forever Free de Zoho Mail cubre hasta cinco personas.',
    'Si ya usas apps de Apple, Google o Microsoft, iCloud Mail, Gmail u Outlook.com funcionan con ellas.',
  ],
  bestNote:
    'Para el trabajo, una dirección gratis sirve para empezar. Aun así, algunos formularios de empresa bloquean las direcciones gratis. La sección sobre formularios B2B, más abajo, explica por qué.',
  signupTitle: 'Dominios en los que todavía puedes crear una cuenta',
  signupIntro:
    'Con los años, los grandes proveedores fueron sumando dominios, y solo algunos se ofrecen a las cuentas nuevas. Los demás siguen funcionando para quienes ya los tienen.',
  thNewAccounts: 'Cuentas nuevas',
  thOtherDomains: 'Otros dominios en uso',
  newAccountsLabel: 'Cuentas nuevas: ',
  alsoInUseLabel: 'También en uso: ',
  signupOther: {
    Gmail: 'googlemail.com, que comparte buzón con gmail.com',
    'Outlook.com': 'live.com, msn.com y versiones por país como hotmail.co.uk',
    'Yahoo Mail': 'ymail.com, rocketmail.com y versiones por país como yahoo.co.uk',
    'iCloud Mail': 'me.com, mac.com',
    'Proton Mail': 'protonmail.ch. pm.me viene con los planes de pago.',
    Tuta: 'tuta.com viene con los planes de pago.',
    GMX: 'Otras versiones por país',
    'mail.com': 'Unos 140 más, todos disponibles para cuentas nuevas.',
  },
  signupNote:
    'Para un filtro B2B, la diferencia no importa. Una dirección de me.com o ymail.com es tan personal como una de gmail.com, así que la lista incluye los dos tipos.',
  closeTitle: 'Las cuentas gratis se cierran cuando nadie las usa',
  closeIntro:
    'Los proveedores gratuitos borran las cuentas que no se usan. Por eso, entre otras razones, una lista antigua llena de direcciones gratis tiene cada vez más rebotes.',
  closeList: [
    'Gmail: Google puede borrar una cuenta que lleve dos años sin usarse.',
    'Outlook.com: tienes que iniciar sesión al menos una vez al año para conservar la bandeja de entrada. La cuenta se cierra tras dos años sin iniciar sesión.',
    'Yahoo Mail: el buzón se borra tras 12 meses sin uso, y la cuenta tras 18 meses.',
    'Proton Mail: las cuentas gratis se borran tras 12 meses de inactividad.',
    'Tuta: las cuentas gratis se borran tras 6 meses sin iniciar sesión.',
  ],
  closeNote:
    'Antes de enviar correos a una lista antigua, compruébala. El [validador de correos masivos](/bulk-email-verifier) encuentra las direcciones que ya no existen. Para una sola dirección, usa el [verificador de email gratis](/email-checker).',
  b2bTitle: 'Dominios de correo gratuitos en formularios B2B',
  b2bParas: [
    'Muchas empresas B2B solo quieren registros con un correo corporativo. HubSpot, por ejemplo, tiene un ajuste de formulario llamado Block free email providers que rechaza los dominios gratuitos. Puedes hacer lo mismo en el código de tu formulario con el CSV de arriba.',
    'Aun así, bloquear tiene una desventaja. Algunos profesionales independientes y pequeñas empresas lo gestionan todo desde una dirección de Gmail u Outlook.com, y un bloqueo total los deja fuera. Una opción menos estricta es aceptar la dirección, marcarla como personal en tu CRM y dejar que tu equipo de ventas decida.',
    'Una dirección gratis no es una dirección falsa. Los buzones de Gmail y Outlook.com son permanentes y reciben correo. Las direcciones desechables son las que dejan de funcionar tras unos minutos u horas, y el [verificador de correo desechable](/disposable-email-checker) las detecta.',
  ],
  dupesTitle: 'Cómo detectar direcciones gratis duplicadas',
  dupesIntro:
    'En algunos proveedores, varias formas de escribir una dirección llegan a la misma bandeja de entrada. Esto importa al eliminar duplicados de una lista.',
  dupesList: [
    'Gmail ignora los puntos en el nombre, así que juan.perez@gmail.com y juanperez@gmail.com llegan a la misma bandeja. Esto vale para las cuentas personales de Gmail, no para las de Google Workspace.',
    'gmail.com y googlemail.com comparten buzón.',
    'Las direcciones con +, como juan+noticias@gmail.com, también llegan a la bandeja principal.',
    'Yandex considera iguales los puntos y los guiones del nombre.',
  ],
  faqTitle: 'Preguntas frecuentes',
  faqs: [
    {
      q: '¿Qué es un proveedor de servicios de correo electrónico?',
      a: 'Es la empresa que gestiona tu buzón. Te da una dirección, guarda tu correo y te permite enviar y recibir mensajes. Gmail, Outlook.com y Proton Mail son proveedores de servicios de correo electrónico. El término también se usa para servicios de envío masivo como Mailchimp, que envían boletines y no alojan buzones.',
    },
    {
      q: '¿Cuál de los proveedores de correo electrónico gratuitos tiene más almacenamiento?',
      a: 'De los servicios que compara esta página, GMX (en gmx.com y gmx.co.uk) y mail.com son los que más espacio dan: 65 GB cada uno. Yahoo da 20 GB en Estados Unidos, y Gmail y Outlook.com dan 15 GB.',
    },
    {
      q: '¿Qué proveedor de correo gratuito es el más privado?',
      a: 'Proton Mail y Tuta cifran tu correo de extremo a extremo, también en sus planes gratis. Gmail, Outlook.com e iCloud Mail no ofrecen cifrado de extremo a extremo en las cuentas gratis.',
    },
    {
      q: '¿Puedo tener una dirección de correo electrónico gratis con mi propio dominio?',
      a: 'El plan Forever Free de Zoho Mail admite un dominio propio y hasta cinco usuarios, en la web y en las apps de Zoho. Gmail y Proton Mail necesitan un plan de pago para eso, e iCloud Mail necesita iCloud+.',
    },
    {
      q: '¿Una dirección de correo gratis es lo mismo que una desechable?',
      a: 'No. Una dirección gratis como nombre@gmail.com es un buzón permanente. Una dirección desechable deja de funcionar tras minutos u horas, y la gente la usa para pasar formularios de registro. Esta lista solo incluye proveedores permanentes.',
    },
    {
      q: '¿Cómo bloqueo los dominios de correo gratuitos en un formulario?',
      a: 'En HubSpot, activa Block free email providers en los ajustes del formulario. En tu propio código, descarga el CSV o el JSON de arriba. Después rechaza o marca cualquier dirección cuyo dominio esté en la lista.',
    },
    {
      q: '¿Caducan las cuentas de correo gratis?',
      a: 'Sí, si nadie las usa. Google puede borrar una cuenta de Gmail tras dos años sin uso. Yahoo borra el buzón tras 12 meses, y Outlook.com cierra la bandeja de entrada si no inicias sesión al menos una vez al año.',
    },
    {
      q: '¿Por qué no está en la lista un dominio que conozco?',
      a: 'Puede que ya no reciba correo, que ahora pertenezca a otra empresa o que sea un proveedor pequeño que aún no hemos añadido. Al revisar la lista, dejamos fuera cualquier dominio sin registros MX que funcionen.',
    },
  ],
  ctaHeadline: 'Comprueba que cada dirección existe, no solo su proveedor',
}


const de: FreeProvidersPageStrings = {
  metaTitle: 'Kostenlose E-Mail-Anbieter: Liste und Domains | Giggal.ai',
  ogTitle: 'Kostenlose E-Mail-Anbieter: Liste und Domains',
  description: (domains) =>
    `Liste kostenloser E-Mail-Anbieter von Gmail und Outlook bis Proton und GMX. Enthält ${domains.toLocaleString('de-DE')} Domains zum Prüfen oder als CSV-Download.`,
  ogLocale: 'de_DE',
  ogImage: '/og-card.png',
  ogAlt: 'Liste kostenloser E-Mail-Anbieter',
  crumb: 'Kostenlose E-Mail-Anbieter',
  listName: 'Kostenlose E-Mail-Anbieter im Vergleich',
  listDescription: 'Die wichtigsten kostenlosen E-Mail-Dienste und was ihre Gratis-Tarife bieten.',
  appName: 'Kostenlose E-Mail-Domain-Prüfung und Liste',
  featureList: (domains, providers) => [
    `${domains.toLocaleString('de-DE')} kostenlose E-Mail-Domains von ${providers.toLocaleString('de-DE')} Anbietern`,
    'Jede Domain auf aktive MX-Records geprüft',
    'Prüfen, ob eine Domain oder E-Mail-Adresse zu einem Gratis-Anbieter gehört',
    'Download als TXT, CSV oder JSON',
  ],
  h1: 'Liste kostenloser E-Mail-Anbieter',
  heroIntro: (domains) =>
    `Die kostenlosen E-Mail-Dienste, die Menschen tatsächlich nutzen, und die ${domains.toLocaleString('de-DE')} Domains, auf die ihre Adressen enden. Prüfen Sie eine Domain oder laden Sie die vollständige Liste herunter.`,
  howTitle: 'So nutzen Sie diese Liste',
  howSteps: [
    'Um eine Adresse zu prüfen, fügen Sie sie in das Feld oben ein. Das Tool zeigt Ihnen, ob und zu welchem kostenlosen Anbieter die Domain gehört.',
    'Um die Domains eines bestimmten Anbieters zu finden, tippen Sie dessen Namen in den Filter, z. B. hotmail oder gmx. Outlook.com allein verfügt über Dutzende Länderversionen.',
    'Um die Liste in Tabellenkalkulationen, CRM-Systemen oder eigenem Code zu nutzen, laden Sie sie herunter. Die CSV enthält Domain, Anbieter, Betreiberunternehmen, Land und Typ.',
  ],
  howNote: 'Der Download richtet sich nach dem aktiven Filter. Wenn Sie Internetanbieter wählen, erhalten Sie nur diese Domains.',
  imageAlt: 'Grafische Darstellung von E-Mail-Adressen verschiedener kostenloser Anbieter in einer Domainliste sortiert.',
  coverTitle: 'Was auf der Liste steht und was nicht',
  coverParas: [
    'Diese Liste kostenloser E-Mail-Anbieter umfasst drei Arten von Diensten. Kostenlose Webmail-Dienste wie Gmail, Outlook.com, Yahoo Mail, GMX und mail.com. Private, verschlüsselte Dienste wie Proton Mail und Tuta. Und die Postfächer großer Internetanbieter wie Telekom, Vodafone, Comcast und Orange. Diese sind zwar Teil eines Internetvertrags, stellen aber dennoch Privatadressen dar.',
    'Wir haben die [MX-Records](/mx-lookup) jeder Domain vor der Aufnahme verifiziert. Betreibt ein Anbieter eigene Mailserver, mussten die Einträge dorthin verweisen. Veraltete Domains, die keine Mails mehr annehmen oder den Besitzer gewechselt haben, wurden ausgeschlossen. Deshalb fehlen einige alte Länderversionen wie yahoo.ch.',
    'Wegwerf-E-Mail-Dienste sind hier nicht enthalten. Diese bieten temporäre Postfächer, die nach Minuten oder Stunden verfallen, und werden in unserer separaten [Liste von Wegwerf-E-Mail-Anbietern](/disposable-email-providers) geführt.',
  ],
  compareTitle: 'Kostenlose E-Mail-Anbieter im Vergleich',
  compareIntro:
    'Hier sehen Sie, was die führenden Anbieter in ihren kostenlosen Tarifen bieten. Alle Angaben stammen von den offiziellen Seiten der Anbieter (Stand Oktober 2026). Da sich Gratis-Tarife ändern können, empfiehlt sich vor der Registrierung ein Blick auf die Anbieter-Website.',
  thProvider: 'Anbieter',
  thStorage: 'Gratis-Speicher',
  thNotes: 'Hinweise',
  compare: {
    Gmail: {
      storage: '15 GB, geteilt mit Google Drive und Google Fotos',
      notes:
        'Blendet Werbung ein, wertet laut Google jedoch keine E-Mails dafür aus. Bei manchen Neukonten werden zunächst 5 GB bereitgestellt und weitere 10 GB nach Telefonverifizierung freigeschaltet.',
    },
    'Outlook.com': {
      storage: '15 GB für E-Mails',
      notes: 'Anhänge werden auf separaten 5 GB Cloud-Speicher angerechnet. Zeigt Werbung ohne Microsoft 365-Abo.',
    },
    'Yahoo Mail': {
      storage: '20 GB in den USA',
      notes: 'In einigen Ländern weniger. Yahoo Mail Plus entfernt die Werbeeinblendungen.',
    },
    'iCloud Mail': {
      storage: '5 GB, geteilt mit dem gesamten iCloud-Speicher',
      notes: 'In jedem Apple-Account enthalten. Eine eigene Domain erfordert ein kostenpflichtiges iCloud+-Abo.',
    },
    'Proton Mail': {
      storage: '500 MB, erweiterbar auf 1 GB nach Einrichtungsschritten',
      notes: 'Ende-zu-Ende-verschlüsselt. Der Gratis-Tarif erlaubt 1 Adresse und 150 Nachrichten pro Tag.',
    },
    Tuta: {
      storage: '1 GB',
      notes: 'Ende-zu-Ende-verschlüsselt. Keine zusätzlichen Alias-Adressen oder eigene Domains im Gratis-Tarif.',
    },
    'Zoho Mail': {
      storage: '5 GB pro Nutzer, für bis zu 5 Nutzer',
      notes:
        'Ungewöhnlich für Gratis-Tarife: Funktioniert mit eigener Domain. Zugriff nur per Web und App (kein IMAP/POP), werbefrei.',
    },
    GMX: {
      storage: '65 GB auf gmx.com, 1 GB auf gmx.de / gmx.net',
      notes: 'Bis zu 10 zusätzliche Adressen. Der deutsche Dienst gmx.de bietet 1 GB im Basis-Tarif.',
    },
    'mail.com': {
      storage: '65 GB plus 2 GB Cloud-Speicher',
      notes: 'Auswahl aus über 100 Domains wie email.com oder consultant.com. Premium entfernt Werbung.',
    },
  },
  bestTitle: 'Welcher E-Mail-Dienst ist der beste für Sie?',
  bestIntro: 'Es gibt keinen universell perfekten Dienst. Das beste E-Mail-Konto hängt vom Einsatzzweck ab.',
  bestList: [
    'Für maximalen Gratis-Speicher bieten GMX (international) und mail.com jeweils 65 GB.',
    'Für Privatsphäre verschlüsseln Proton Mail und Tuta Ihre Nachrichten durchgehend Ende-zu-Ende.',
    'Für eine eigene Domain ohne monatliche Fixkosten eignet sich Zohos Forever-Free-Tarif für bis zu fünf Personen.',
    'Wer Apple-, Google- oder Microsoft-Apps nutzt, profitiert von der direkten Integration in iCloud Mail, Gmail oder Outlook.com.',
  ],
  bestNote:
    'Für den Start reicht eine kostenlose Adresse oft aus. In vielen geschäftlichen Formularen werden Gratis-Adressen jedoch blockiert; der Abschnitt zu B2B-Formularen unten erläutert die Hintergründe.',
  signupTitle: 'Domains, die für Neuanmeldungen noch offen sind',
  signupIntro:
    'Große Anbieter haben über die Jahre viele Domains übernommen. Nur ein Teil davon steht für neue Registrierungen offen; bestehende Adressen funktionieren weiterhin.',
  thNewAccounts: 'Neue Konten',
  thOtherDomains: 'Weitere aktive Domains',
  newAccountsLabel: 'Neue Konten: ',
  alsoInUseLabel: 'Ebenfalls aktiv: ',
  signupOther: {
    Gmail: 'googlemail.com, leitet in dasselbe Postfach weiter',
    'Outlook.com': 'live.com, msn.com und Länderversionen wie hotmail.de',
    'Yahoo Mail': 'ymail.com, rocketmail.com und Länderversionen wie yahoo.de',
    'iCloud Mail': 'me.com, mac.com',
    'Proton Mail': 'protonmail.ch. pm.me erfordert Bezahl-Abo.',
    Tuta: 'tuta.com steht in Bezahl-Abos zur Verfügung.',
    GMX: 'Weitere länderspezifische Domains',
    'mail.com': 'Rund 140 weitere Domains, alle für Neuanmeldungen offen.',
  },
  signupNote:
    'Für B2B-Filter spielt der Unterschied keine Rolle: me.com oder ymail.com sind genauso private Adressen wie gmail.com, daher enthält die Liste beide Varianten.',
  closeTitle: 'Kostenlose Konten werden bei Inaktivität gelöscht',
  closeIntro: 'Anbieter löschen ungenutzte Postfächer nach einer gewissen Frist. Deshalb steigen die Bounces in veralteten Empfängerlisten.',
  closeList: [
    'Gmail: Google kann Konten nach zwei Jahren Inaktivität unwiderruflich löschen.',
    'Outlook.com: Mindestens ein Login pro Jahr erforderlich; nach zwei Jahren ohne Login wird das Konto geschlossen.',
    'Yahoo Mail: Löschung des Postfachs nach 12 Monaten Inaktivität, Kontolöschung nach 18 Monaten.',
    'Proton Mail: Kostenlose Konten werden nach 12 Monaten ohne Aktivität entfernt.',
    'Tuta: Kostenlose Postfächer werden nach 6 Monaten ohne Anmeldung gelöscht.',
  ],
  closeNote:
    'Prüfen Sie alte E-Mail-Listen vor dem Versand. Die [Bulk-E-Mail-Prüfung](/bulk-email-verifier) filtert erloschene Adressen heraus; für Einzeladressen nutzen Sie den [E-Mail-Checker](/email-checker).',
  b2bTitle: 'Kostenlose E-Mail-Domains in B2B-Formularen',
  b2bParas: [
    'Viele B2B-Unternehmen möchten Leads nur mit geschäftlichen Adressen erfassen. HubSpot bietet hierfür etwa die Option Block free email providers. Mit unserer CSV-Liste können Sie diese Filterung im eigenen Code umsetzen.',
    'Das Blockieren bringt jedoch Nachteile mit sich: Manche Freiberufler oder Kleinunternehmer wickeln ihre Kommunikation über Gmail oder Outlook ab. Eine sanftere Alternative ist es, die Adresse zu akzeptieren, im CRM als privat zu markieren und das Vertriebsteam entscheiden zu lassen.',
    'Eine kostenlose Adresse ist keine Fake-Adresse. Postfächer bei Gmail oder Outlook.com sind dauerhaft aktiv. Wegwerf-Adressen verfallen nach kurzer Zeit; diese erkennt der [Wegwerf-E-Mail-Checker](/disposable-email-checker).',
  ],
  dupesTitle: 'Doppelte Gratis-Adressen erkennen',
  dupesIntro: 'Einige Anbieter leiten unterschiedliche Schreibweisen in dasselbe Postfach weiter. Das ist bei der Listenbereinigung entscheidend.',
  dupesList: [
    'Gmail ignoriert Punkte im Nutzernamen: max.mustermann@gmail.com und maxmustermann@gmail.com gehören zum selben Postfach (gilt für private Konten, nicht zwingend Google Workspace).',
    'gmail.com und googlemail.com landen im identischen Postfach.',
    'Plus-Adressen wie max+newsletter@gmail.com werden ebenfalls im Hauptpostfach empfangen.',
    'Yandex behandelt Punkte und Bindestriche im Nutzernamen als identisch.',
  ],
  faqTitle: 'Häufig gestellte Fragen (FAQ)',
  faqs: [
    {
      q: 'Was ist ein E-Mail-Service-Provider?',
      a: 'Das ist das Unternehmen, das Ihr Postfach bereitstellt, E-Mails speichert und den Empfang sowie Versand ermöglicht. Bekannte Beispiele sind Gmail, Outlook.com oder Proton Mail. Der Begriff wird mitunter auch für Newsletter-Dienste wie Mailchimp verwendet.',
    },
    {
      q: 'Welcher kostenlose E-Mail-Dienst bietet den meisten Speicherplatz?',
      a: 'GMX (international) und mail.com bieten mit je 65 GB den meisten Speicher. Yahoo stellt in den USA 20 GB bereit, Gmail und Outlook.com jeweils 15 GB.',
    },
    {
      q: 'Welcher Gratis-Anbieter schützt die Privatsphäre am besten?',
      a: 'Proton Mail und Tuta bieten standardmäßig Ende-zu-Ende-Verschlüsselung, auch im Gratis-Tarif. Gmail, Outlook.com und iCloud Mail bieten dies in ihren Basiskonten nicht.',
    },
    {
      q: 'Kann ich eine kostenlose E-Mail-Adresse mit eigener Domain nutzen?',
      a: 'Zohos Forever-Free-Tarif ermöglicht die Nutzung einer eigenen Domain für bis zu 5 Postfächer (Zugriff via Web/App). Bei Gmail und Proton Mail erfordert dies kostenpflichtige Abos.',
    },
    {
      q: 'Ist eine kostenlose E-Mail-Adresse dasselbe wie eine Wegwerf-Adresse?',
      a: 'Nein. Eine Adresse wie name@gmail.com ist ein dauerhaftes Postfach. Wegwerf-Adressen verfallen nach Minuten oder Stunden. Diese Liste enthält ausschließlich permanente Anbieter.',
    },
    {
      q: 'Wie blockiere ich kostenlose E-Mail-Domains in Formularen?',
      a: 'In Systemen wie HubSpot aktivieren Sie die entsprechende Option in den Formulareinstellungen. Im eigenen Quellcode laden Sie unsere CSV/JSON-Datei herunter und sperren die enthaltenen Domains.',
    },
    {
      q: 'Verfallen kostenlose E-Mail-Konten?',
      a: 'Ja, wenn sie über längere Zeit ungenutzt bleiben. Google löscht Konten nach zwei Jahren Inaktivität, Yahoo nach 12 Monaten, und bei Outlook.com ist mindestens ein jährlicher Login ratsam.',
    },
    {
      q: 'Warum fehlt eine bestimmte Domain auf der Liste?',
      a: 'Möglicherweise nimmt die Domain keine E-Mails mehr an, gehört einer anderen Organisation oder wurde noch nicht indexiert. Domains ohne funktionierende MX-Einträge werden automatisch ausgeschlossen.',
    },
  ],
  ctaHeadline: 'Prüfen Sie, ob Adressen existieren, nicht nur den Anbieter',
}



const fr: FreeProvidersPageStrings = {
  metaTitle: 'Fournisseurs de messagerie gratuite : liste | Giggal.ai',
  ogTitle: 'Fournisseurs de messagerie gratuite : liste des domaines',
  description: (domains) =>
    `Liste des fournisseurs de messagerie gratuite, de Gmail et Outlook à Proton et GMX, avec ${domains.toLocaleString('fr-FR')} domaines à vérifier ou télécharger en CSV.`,
  ogLocale: 'fr_FR',
  ogImage: '/og-card.png',
  ogAlt: 'Liste des fournisseurs de messagerie gratuite',
  crumb: 'Fournisseurs de messagerie gratuite',
  listName: 'Comparatif des fournisseurs de messagerie gratuite',
  listDescription: 'Les principaux services d’e-mail gratuits et ce qu’incluent leurs offres sans frais.',
  appName: 'Vérificateur et liste de domaines d’e-mail gratuits',
  featureList: (domains, providers) => [
    `${domains.toLocaleString('fr-FR')} domaines d’e-mail gratuits issus de ${providers.toLocaleString('fr-FR')} fournisseurs`,
    'Chaque domaine vérifié avec des enregistrements MX actifs',
    'Vérifiez si un domaine ou une adresse appartient à un fournisseur gratuit',
    'Téléchargement en TXT, CSV ou JSON',
  ],
  h1: 'Liste des fournisseurs de messagerie gratuite',
  heroIntro: (domains) =>
    `Les services de messagerie gratuits réellement utilisés et les ${domains.toLocaleString('fr-FR')} domaines sur lesquels se terminent leurs adresses. Vérifiez un domaine ou téléchargez la liste complète.`,
  howTitle: 'Comment utiliser cette liste',
  howSteps: [
    'Pour vérifier une adresse, collez-la dans le champ en haut. L’outil indique si le domaine appartient à un fournisseur gratuit et lequel.',
    'Pour trouver les domaines d’un fournisseur, saisissez son nom dans le filtre (ex. hotmail ou gmx). Outlook.com compte à lui seul des dizaines de versions nationales.',
    'Pour utiliser la liste dans un tableur, un CRM ou votre propre code, téléchargez-la. Le fichier CSV inclut le domaine, le fournisseur, l’entreprise éditrice, le pays et le type.',
  ],
  howNote: 'Le téléchargement applique le filtre sélectionné. Choisissez par exemple Fournisseurs d’accès internet pour n’exporter que ces domaines.',
  imageAlt: 'Illustration d’adresses e-mail de différents fournisseurs gratuits organisées dans une liste de domaines.',
  coverTitle: 'Ce que couvre cette liste et ce qui en est exclu',
  coverParas: [
    'Cette liste de fournisseurs de messagerie gratuite couvre trois catégories de services : les webmails grand public comme Gmail, Outlook.com, Yahoo Mail, GMX et mail.com ; les services privés et chiffrés comme Proton Mail et Tuta ; et les boîtes aux lettres des grands fournisseurs d’accès internet (Orange, Free, SFR, Bouygues, Comcast). Ces dernières sont liées à un abonnement box, mais constituent bien des adresses personnelles.',
    'Nous avons contrôlé les [enregistrements MX](/mx-lookup) de chaque domaine avant son intégration. Lorsqu’un fournisseur gère ses propres serveurs, les enregistrements devaient pointer vers ceux-ci. Les anciens domaines inactifs ou réattribués ont été écartés, comme yahoo.ch ou aol.ca.',
    'Les services de messagerie temporaire ne figurent pas sur cette liste. Ils génèrent des boîtes jetables expirant après quelques minutes ou heures et disposent de leur propre [liste de fournisseurs d’emails jetables](/disposable-email-providers).',
  ],
  compareTitle: 'Comparatif des principaux fournisseurs gratuits',
  compareIntro:
    'Voici les caractéristiques des offres gratuites de chaque grand service de messagerie, vérifiées en octobre 2026 d’après leurs documentations officielles. Les offres évoluant régulièrement, pensez à vérifier les conditions avant inscription.',
  thProvider: 'Fournisseur',
  thStorage: 'Stockage gratuit',
  thNotes: 'Remarques',
  compare: {
    Gmail: {
      storage: '15 Go, partagés avec Google Drive et Google Photos',
      notes:
        'Affiche des annonces, mais Google n’utilise pas vos e-mails pour les cibler. Certains nouveaux comptes démarrent à 5 Go et débloquent les 10 Go restants après validation téléphonique.',
    },
    'Outlook.com': {
      storage: '15 Go pour les e-mails',
      notes: 'Les pièces jointes sont décomptées d’un stockage cloud distinct de 5 Go. Annonces présentes sans abonnement Microsoft 365.',
    },
    'Yahoo Mail': {
      storage: '20 Go aux États-Unis',
      notes: 'Capacité variable selon les pays. Yahoo Mail Plus permet de supprimer la publicité.',
    },
    'iCloud Mail': {
      storage: '5 Go, partagés avec l’ensemble d’iCloud',
      notes: 'Inclus avec chaque compte Apple. L’usage d’un nom de domaine personnalisé nécessite l’abonnement iCloud+.',
    },
    'Proton Mail': {
      storage: '500 Mo, extensible à 1 Go après configuration',
      notes: 'Chiffrement de bout en bout. Le forfait gratuit autorise 1 adresse et 150 messages par jour.',
    },
    Tuta: {
      storage: '1 Go',
      notes: 'Chiffrement de bout en bout. Pas d’alias supplémentaire ni de domaine personnalisé sur l’offre gratuite.',
    },
    'Zoho Mail': {
      storage: '5 Go par utilisateur, jusqu’à 5 utilisateurs',
      notes:
        'Fait rare pour une offre gratuite : compatible avec votre propre domaine. Accès via web et application uniquement (sans IMAP ni POP). Sans publicité.',
    },
    GMX: {
      storage: '65 Go sur gmx.com, 1 Go sur les versions locales',
      notes: 'Jusqu’à 10 adresses alias. Version internationale avec 65 Go de stockage.',
    },
    'mail.com': {
      storage: '65 Go, plus 2 Go de stockage cloud',
      notes: 'Choix parmi plus de 100 domaines (email.com, usa.com, consultant.com). Version Premium sans publicité.',
    },
  },
  bestTitle: 'Quel est le meilleur service de messagerie pour vous ?',
  bestIntro: 'Il n’existe pas de service idéal pour tout le monde. Le meilleur choix dépend de votre usage.',
  bestList: [
    'Pour un stockage gratuit maximal, GMX (international) et mail.com offrent 65 Go chacun.',
    'Pour la confidentialité, Proton Mail et Tuta chiffrent vos messages de bout en bout dès l’offre gratuite.',
    'Pour utiliser votre propre nom de domaine sans frais, l’offre Forever Free de Zoho Mail prend en charge jusqu’à cinq personnes.',
    'Si vous utilisez déjà l’écosystème Apple, Google ou Microsoft, iCloud Mail, Gmail ou Outlook.com s’intègrent directement.',
  ],
  bestNote:
    'Pour démarrer une activité, une adresse gratuite convient parfaitement. Certains formulaires B2B bloquent toutefois ces adresses grand public ; la section ci-dessous en détaille les raisons.',
  signupTitle: 'Domaines encore ouverts aux nouvelles inscriptions',
  signupIntro:
    'Au fil des décennies, les grands fournisseurs ont accumulé de nombreux domaines. Seuls certains restent ouverts aux nouveaux comptes, tandis que les autres continuent de fonctionner pour leurs utilisateurs historiques.',
  thNewAccounts: 'Nouveaux comptes',
  thOtherDomains: 'Autres domaines actifs',
  newAccountsLabel: 'Nouveaux comptes : ',
  alsoInUseLabel: 'Également actifs : ',
  signupOther: {
    Gmail: 'googlemail.com, qui redirige vers la même boîte de réception',
    'Outlook.com': 'live.com, msn.com et extensions locales comme hotmail.fr',
    'Yahoo Mail': 'ymail.com, rocketmail.com et extensions locales comme yahoo.fr',
    'iCloud Mail': 'me.com, mac.com',
    'Proton Mail': 'protonmail.ch. pm.me est réservé aux offres payantes.',
    Tuta: 'tuta.com est inclus dans les forfaits payants.',
    GMX: 'Autres extensions nationales',
    'mail.com': 'Environ 140 autres domaines, tous ouverts à l’inscription.',
  },
  signupNote:
    'Pour un filtrage B2B, cette distinction importe peu : une adresse sur me.com ou ymail.com est tout aussi personnelle qu’une adresse gmail.com. La liste intègre donc les deux catégories.',
  closeTitle: 'Les comptes gratuits expirent en cas d’inactivité',
  closeIntro: 'Les fournisseurs suppriment les comptes inutilisés. C’est l’une des causes majeures de rebonds dans les listes anciennes de contacts personnels.',
  closeList: [
    'Gmail : Google peut supprimer un compte resté inactif pendant deux ans.',
    'Outlook.com : connexion requise au moins une fois par an pour conserver la boîte ; clôture après deux ans sans connexion.',
    'Yahoo Mail : boîte aux lettres supprimée après 12 mois sans connexion, compte clôturé après 18 mois.',
    'Proton Mail : les comptes gratuits sont supprimés après 12 mois d’inactivité.',
    'Tuta : suppression des comptes gratuits après 6 mois sans connexion.',
  ],
  closeNote:
    'Avant d’envoyer une campagne à une ancienne base, effectuez un contrôle. La [vérification d’e-mails en masse](/bulk-email-verifier) isole les adresses inexistantes ; pour une vérification unitaire, utilisez le [testeur d’e-mail](/email-checker).',
  b2bTitle: 'Domaines d’e-mail gratuits sur les formulaires B2B',
  b2bParas: [
    'De nombreuses entreprises B2B n’acceptent que des adresses professionnelles. HubSpot intègre par exemple l’option Block free email providers. Vous pouvez reproduire ce filtre dans votre application grâce à notre fichier CSV.',
    'Le blocage systématique comporte toutefois un risque : certains indépendants et dirigeants de TPE gèrent l’ensemble de leurs échanges avec une adresse Gmail ou Outlook.com. Une alternative souple consiste à accepter l’adresse tout en l’étiquetant comme personnelle dans votre CRM pour traitement commercial adapté.',
    'Une adresse gratuite n’est pas une fausse adresse. Les boîtes Gmail et Outlook sont durables. Ce sont les adresses jetables qui disparaissent après quelques minutes ; le [vérificateur d’e-mails jetables](/disposable-email-checker) permet de les repérer.',
  ],
  dupesTitle: 'Repérer les adresses gratuites en double',
  dupesIntro: 'Certains fournisseurs acheminent plusieurs variantes d’écriture vers la même boîte de réception. Ce point est capital lors de la déduplication de bases de données.',
  dupesList: [
    'Gmail ne tient pas compte des points : jean.dupont@gmail.com et jeandupont@gmail.com désignent la même boîte (sur les comptes personnels Gmail).',
    'gmail.com et googlemail.com aboutissent à la même boîte.',
    'Le sous-adressage avec le signe +, comme jean+actu@gmail.com, parvient également au compte principal.',
    'Yandex traite les points et les tirets dans le nom d’utilisateur comme des caractères équivalents.',
  ],
  faqTitle: 'Foire aux questions (FAQ)',
  faqs: [
    {
      q: 'Qu’est-ce qu’un fournisseur de messagerie (ESP) ?',
      a: 'C’est l’entreprise qui héberge votre boîte aux lettres, stocke vos courriers et gère l’envoi et la réception. Gmail, Outlook.com et Proton Mail sont des fournisseurs de messagerie. Le terme désigne aussi parfois les plateformes d’envoi d’e-mails en masse comme Mailchimp.',
    },
    {
      q: 'Quel service d’e-mail gratuit propose le plus d’espace de stockage ?',
      a: 'GMX (version internationale) et mail.com offrent chacun 65 Go. Yahoo propose 20 Go aux États-Unis, tandis que Gmail et Outlook.com allouent 15 Go.',
    },
    {
      q: 'Quel est le fournisseur d’e-mail gratuit le plus sécurisé et privé ?',
      a: 'Proton Mail et Tuta proposent un chiffrement de bout en bout dès l’offre gratuite. Gmail, Outlook.com et iCloud Mail ne chiffrent pas les messages de bout en bout sur leurs formules gratuites.',
    },
    {
      q: 'Puis-je avoir une adresse e-mail gratuite avec mon propre domaine ?',
      a: 'L’offre Forever Free de Zoho Mail prend en charge un domaine personnalisé pour jusqu’à 5 utilisateurs (via web et app). Gmail et Proton Mail demandent un abonnement payant pour cette option.',
    },
    {
      q: 'Une adresse e-mail gratuite est-elle comparable à une adresse jetable ?',
      a: 'Non. Une adresse sur gmail.com est un compte permanent. Une adresse jetable expire au bout de quelques minutes ou heures. Cette liste répertorie uniquement les fournisseurs pérennes.',
    },
    {
      q: 'Comment bloquer les adresses e-mail gratuites dans un formulaire ?',
      a: 'Dans un CRM comme HubSpot, activez l’option de restriction correspondante. Dans votre code, importez notre fichier CSV ou JSON et refusez les domaines figurant dans la liste.',
    },
    {
      q: 'Les comptes e-mail gratuits ont-ils une date d’expiration ?',
      a: 'Oui, s’ils restent inactifs. Google peut fermer un compte après deux ans sans connexion, Yahoo après 12 mois et Outlook.com exige une connexion annuelle pour préserver la boîte.',
    },
    {
      q: 'Pourquoi un domaine connu n’apparaît-il pas dans la liste ?',
      a: 'Il est possible qu’il ne reçoive plus de courriers, appartienne désormais à un autre tiers ou fasse partie d’un petit opérateur non encore catalogué. Tout domaine sans enregistrement MX valide est exclu.',
    },
  ],
  ctaHeadline: 'Vérifiez l’existence réelle de chaque adresse, pas seulement son fournisseur',
}



const it: FreeProvidersPageStrings = {
  metaTitle: 'Provider email gratuiti: lista e domini | Giggal.ai',
  ogTitle: 'Provider email gratuiti: elenco completo dei domini',
  description: (domains) =>
    `Elenco dei provider email gratuiti, da Gmail e Outlook a Proton e GMX, con ${domains.toLocaleString('it-IT')} domini da verificare o scaricare in CSV.`,
  ogLocale: 'it_IT',
  ogImage: '/og-card.png',
  ogAlt: 'Elenco provider email gratuiti',
  crumb: 'Provider email gratuiti',
  listName: 'Confronto tra provider email gratuiti',
  listDescription: 'I principali servizi email gratuiti e cosa includono i loro piani a costo zero.',
  appName: 'Verifica e lista domini email gratuiti',
  featureList: (domains, providers) => [
    `${domains.toLocaleString('it-IT')} domini email gratuiti di ${providers.toLocaleString('it-IT')} provider`,
    'Tutti i domini controllati con record MX attivi',
    'Verifica se un dominio o indirizzo appartiene a un provider gratuito',
    'Download in formato TXT, CSV o JSON',
  ],
  h1: 'Lista dei provider email gratuiti',
  heroIntro: (domains) =>
    `I servizi email gratuiti realmente utilizzati dalle persone e i ${domains.toLocaleString('it-IT')} domini su cui terminano i loro indirizzi. Controlla un dominio o scarica l’elenco completo.`,
  howTitle: 'Come utilizzare questo elenco',
  howSteps: [
    'Per controllare un indirizzo, incollalo nel riquadro in alto. Il tool ti segnala se il dominio appartiene a un provider gratuito e a quale.',
    'Per trovare i domini di un provider specifico, scrivi il nome nel filtro (es. hotmail o gmx). Outlook.com da solo conta decine di estensioni per paese.',
    'Per integrare la lista in un foglio di calcolo, CRM o codice proprietario, scaricala. Il CSV include dominio, provider, società proprietaria, paese e tipologia.',
  ],
  howNote: 'I download rispettano il filtro applicato. Selezionando ad esempio Provider internet, scarichi solo quei domini.',
  imageAlt: 'Illustrazione di indirizzi email di diversi provider gratuiti ordinati in un elenco di domini.',
  coverTitle: 'Cosa include la lista e cosa è escluso',
  coverParas: [
    'Questo elenco copre tre tipologie di servizi: webmail gratuite universali come Gmail, Outlook.com, Yahoo Mail, GMX e mail.com; servizi orientati alla privacy con crittografia come Proton Mail e Tuta; caselle fornite dai principali operatori internet (TIM, Fastweb, Vodafone, WindTre, Comcast). Queste ultime fanno parte dell’abbonamento domestico ma costituiscono comunque indirizzi personali.',
    'Abbiamo verificato i [record MX](/mx-lookup) di ciascun dominio prima dell’inserimento. Se un provider gestisce server di posta propri, i record dovevano puntare a essi. Domini obsoleti che non ricevono più posta sono stati esclusi, motivo per cui non compaiono vecchie versioni come yahoo.ch.',
    'I servizi di posta usa e getta non sono inclusi. Questi generano caselle temporanee che scadono dopo pochi minuti od ore e sono raccolti nella nostra [lista di provider email temporanei](/disposable-email-providers).',
  ],
  compareTitle: 'Confronto tra provider email gratuiti',
  compareIntro:
    'Ecco le caratteristiche offerte nei piani gratuiti dei principali servizi, verificate a ottobre 2026 sulle pagine ufficiali dei provider. Poiché i piani gratuiti possono cambiare, controlla sempre il sito del fornitore prima di registrarti.',
  thProvider: 'Provider',
  thStorage: 'Spazio gratis',
  thNotes: 'Note',
  compare: {
    Gmail: {
      storage: '15 GB, condivisi con Google Drive e Google Foto',
      notes:
        'Mostra annunci pubblicitari, ma Google dichiara di non scansionare i messaggi per profilarli. Alcuni nuovi account partono da 5 GB ed estendono a 15 GB dopo la verifica del numero telefonico.',
    },
    'Outlook.com': {
      storage: '15 GB per le email',
      notes: 'Gli allegati vengono conteggiati in uno spazio cloud separato da 5 GB. Annunci presenti se non si possiede Microsoft 365.',
    },
    'Yahoo Mail': {
      storage: '20 GB negli USA',
      notes: 'Disponibilità variabile in base alla regione. Yahoo Mail Plus rimuove le inserzioni.',
    },
    'iCloud Mail': {
      storage: '5 GB, condivisi con l’intero spazio iCloud',
      notes: 'Incluso con ogni account Apple. L’uso di un dominio personalizzato richiede un piano a pagamento iCloud+.',
    },
    'Proton Mail': {
      storage: '500 MB, che salgono a 1 GB dopo i passaggi di configurazione',
      notes: 'Crittografia end-to-end. Il piano gratuito consente 1 indirizzo e 150 messaggi inviabili al giorno.',
    },
    Tuta: {
      storage: '1 GB',
      notes: 'Crittografia end-to-end. Nessun alias extra né dominio personalizzato nel piano gratis.',
    },
    'Zoho Mail': {
      storage: '5 GB per utente, fino a 5 utenti',
      notes:
        'Caratteristica rara per un piano gratis: supporta il proprio dominio. Accesso solo via web e app (senza IMAP/POP), senza pubblicità.',
    },
    GMX: {
      storage: '65 GB su gmx.com, 1 GB su edizioni locali',
      notes: 'Fino a 10 indirizzi alias. Versione internazionale con 65 GB di capienza.',
    },
    'mail.com': {
      storage: '65 GB più 2 GB di spazio cloud',
      notes: 'Scelta tra oltre 100 domini come email.com, usa.com e consultant.com. La versione Premium rimuove gli annunci.',
    },
  },
  bestTitle: 'Qual è il miglior servizio email per le tue esigenze?',
  bestIntro: 'Non esiste un servizio migliore in assoluto. La scelta ideale dipende dall’uso previsto.',
  bestList: [
    'Per la massima capacità gratuita, GMX e mail.com mettono a disposizione 65 GB ciascuno.',
    'Per la riservatezza, Proton Mail e Tuta offrono crittografia end-to-end nativa anche a costo zero.',
    'Per utilizzare un dominio personale senza canoni mensili, il piano Forever Free di Zoho Mail copre fino a 5 persone.',
    'Se utilizzi strumenti Apple, Google o Microsoft, iCloud Mail, Gmail e Outlook.com offrono una perfetta integrazione nativa.',
  ],
  bestNote:
    'Per iniziare un’attività lavorativa un indirizzo gratuito può bastare. Molti moduli aziendali tendono tuttavia a bloccarli: il capitolo dedicato ai moduli B2B qui sotto ne chiarisce le motivazioni.',
  signupTitle: 'Domini ancora aperti per nuove registrazioni',
  signupIntro:
    'Nel corso degli anni i grandi gruppi hanno ereditato e acquisito decine di estensioni. Solo una parte è aperta a nuove registrazioni, mentre le altre rimangono operative per chi già le possiede.',
  thNewAccounts: 'Nuovi account',
  thOtherDomains: 'Altri domini attivi',
  newAccountsLabel: 'Nuovi account: ',
  alsoInUseLabel: 'Attivi anche: ',
  signupOther: {
    Gmail: 'googlemail.com, che recapita nella medesima casella di posta',
    'Outlook.com': 'live.com, msn.com e varianti per paese come hotmail.it',
    'Yahoo Mail': 'ymail.com, rocketmail.com e varianti come yahoo.it',
    'iCloud Mail': 'me.com, mac.com',
    'Proton Mail': 'protonmail.ch. L’estensione breve pm.me è riservata ai piani a pagamento.',
    Tuta: 'tuta.com è incluso nei piani a pagamento.',
    GMX: 'Altre estensioni nazionali',
    'mail.com': 'Circa 140 domini aggiuntivi, tutti disponibili per nuove iscrizioni.',
  },
  signupNote:
    'Per un filtro B2B la differenza è irrilevante: un recapito me.com o ymail.com è personale esattamente come uno gmail.com, per cui l’elenco comprende entrambe le casistiche.',
  closeTitle: 'Gli account gratuiti vengono chiusi se rimangono inattivi',
  closeIntro: 'I provider eliminano le caselle non presidiate. Questo spiega perché vecchi elenchi di contatti gratuiti generano crescenti tassi di rimbalzo.',
  closeList: [
    'Gmail: Google può cancellare definitivamente un account non utilizzato per due anni consecutivi.',
    'Outlook.com: è necessario accedere almeno una volta all’anno per mantenere la casella; chiusura definitiva dopo due anni di inattività.',
    'Yahoo Mail: la casella viene eliminata dopo 12 mesi di inutilizzo e l’intero account dopo 18 mesi.',
    'Proton Mail: gli account gratuiti vengono rimossi dopo 12 mesi di mancata attività.',
    'Tuta: cancellazione delle caselle gratuite dopo 6 mesi senza alcun accesso.',
  ],
  closeNote:
    'Prima di inviare email a vecchi database, effettua una pulizia. Il nostro strumento di [verifica email in blocco](/bulk-email-verifier) intercetta gli indirizzi non più esistenti, mentre il [verificatore di email](/email-checker) controlla singoli contatti.',
  b2bTitle: 'Domini email gratuiti nei moduli B2B',
  b2bParas: [
    'Molte piattaforme B2B richiedono tassativamente email aziendali. HubSpot dispone dell’opzione Block free email providers per respingere i domini gratuiti. Puoi replicare questa logica nel tuo codice scaricando il nostro CSV.',
    'Bloccare a priori ha però un costo: numerosi liberi professionisti e ditte individuali utilizzano caselle Gmail o Outlook.com per il proprio lavoro. Un’opzione consigliata è accettare il contatto contrassegnandolo come personale nel CRM.',
    'Una casella gratuita non corrisponde a un indirizzo falso. Gli account Gmail e Outlook sono caselle permanenti. Sono le caselle temporanee a scadere dopo pochi minuti, e il nostro [controllo email temporanee](/disposable-email-checker) è pensato per rilevarle.',
  ],
  dupesTitle: 'Riconoscere gli indirizzi gratuiti duplicati',
  dupesIntro: 'Alcuni provider recapitano diverse forme di scrittura alla medesima casella. Questo fattore è determinante durante la deduplica delle liste.',
  dupesList: [
    'Gmail ignora i punti nel nome utente: mario.rossi@gmail.com e mariorossi@gmail.com arrivano nella stessa casella (valido per account privati Gmail).',
    'gmail.com e googlemail.com condividono la medesima casella postale.',
    'Le varianti con il segno più, come mario+news@gmail.com, confluiscono sempre nella cartella principale.',
    'Yandex considera identici punti e trattini all’interno del nome utente.',
  ],
  faqTitle: 'Domande frequenti (FAQ)',
  faqs: [
    {
      q: 'Cos’è un fornitore di servizi email (ESP)?',
      a: 'È l’azienda che gestisce la tua casella di posta, archivia i messaggi e ne consente invio e ricezione. Gmail, Outlook.com e Proton Mail sono esempi di provider. Il termine viene impiegato anche per servizi di invio massivo come Mailchimp.',
    },
    {
      q: 'Quale servizio email gratuito offre la maggior capienza di archiviazione?',
      a: 'GMX (versione internazionale) e mail.com garantiscono lo spazio più ampio con 65 GB ciascuno. Yahoo offre 20 GB negli USA, mentre Gmail e Outlook.com offrono 15 GB.',
    },
    {
      q: 'Qual è il provider email gratuito più attento alla privacy?',
      a: 'Proton Mail e Tuta integrano la crittografia end-to-end anche nei profili gratuiti. Gmail, Outlook.com e iCloud Mail non forniscono crittografia end-to-end sui profili base.',
    },
    {
      q: 'È possibile ottenere un indirizzo email gratuito con il proprio dominio?',
      a: 'Il piano Forever Free di Zoho Mail supporta un dominio personalizzato per un massimo di 5 utenti (tramite interfaccia web e app). Gmail e Proton Mail richiedono abbonamenti commerciali.',
    },
    {
      q: 'Un indirizzo email gratuito equivale a un indirizzo temporaneo?',
      a: 'No. Un indirizzo su gmail.com è una casella permanente. Un indirizzo temporaneo o usa e getta scade dopo pochi minuti o ore. Questa lista include unicamente provider permanenti.',
    },
    {
      q: 'Come posso bloccare i domini email gratuiti in un form di contatto?',
      a: 'In software come HubSpot è sufficiente spuntare l’opzione apposita nelle impostazioni del modulo. Nel tuo applicativo, scarica il nostro file CSV o JSON e blocca i domini ivi contenuti.',
    },
    {
      q: 'Le caselle email gratuite possono scadere o essere cancellate?',
      a: 'Sì, in caso di inattività prolungata. Google rimuove gli account dopo due anni senza accessi, Yahoo dopo 12 mesi e Outlook richiede almeno un login annuale.',
    },
    {
      q: 'Perché un dominio noto non compare nell’elenco?',
      a: 'Potrebbe non essere più abilitato alla ricezione di messaggi, appartenere a una diversa società o far parte di una piccola realtà locale non ancora censita. I domini privi di record MX attivi vengono rimossi.',
    },
  ],
  ctaHeadline: 'Verifica che ogni indirizzo sia realmente attivo, non solo il provider',
}



const ptBr: FreeProvidersPageStrings = {
  metaTitle: 'Provedores de email gratuitos: lista de domínios | Giggal.ai',
  ogTitle: 'Provedores de email gratuitos: lista completa',
  description: (domains) =>
    `Lista de provedores de email gratuitos, do Gmail e Outlook ao Proton e GMX, com ${domains.toLocaleString('pt-BR')} domínios para consultar ou baixar em CSV.`,
  ogLocale: 'pt_BR',
  ogImage: '/og-card.png',
  ogAlt: 'Lista de provedores de email gratuitos',
  crumb: 'Provedores de email gratuitos',
  listName: 'Comparativo de provedores de email gratuitos',
  listDescription: 'Os principais serviços de email grátis e o que seus planos gratuitos oferecem.',
  appName: 'Verificador e lista de domínios de email gratuitos',
  featureList: (domains, providers) => [
    `${domains.toLocaleString('pt-BR')} domínios de email gratuitos de ${providers.toLocaleString('pt-BR')} provedores`,
    'Todos os domínios verificados com registros MX operacionais',
    'Consulte se um domínio ou endereço pertence a um provedor gratuito',
    'Download em formato TXT, CSV ou JSON',
  ],
  h1: 'Lista de provedores de email gratuitos',
  heroIntro: (domains) =>
    `Os serviços de email gratuitos que as pessoas realmente utilizam no dia a dia e os ${domains.toLocaleString('pt-BR')} domínios nos quais seus endereços terminam. Consulte um domínio ou baixe a lista na íntegra.`,
  howTitle: 'Como usar esta lista',
  howSteps: [
    'Para consultar um endereço, cole-o no campo acima. A ferramenta indica se o domínio pertence a um provedor gratuito e a qual deles.',
    'Para localizar os domínios de um provedor específico, digite o nome no filtro, como hotmail ou gmx. Somente o Outlook.com possui dezenas de variantes por país.',
    'Para trabalhar com os dados em planilhas, CRM ou sistemas próprios, faça o download. O arquivo CSV contém domínio, provedor, empresa responsável, país e categoria.',
  ],
  howNote: 'Os downloads respeitam os filtros ativos. Caso escolha Provedores de internet, apenas esses domínios serão exportados.',
  imageAlt: 'Ilustração de endereços de email de diferentes provedores gratuitos organizados em uma lista de domínios.',
  coverTitle: 'O que está incluído na lista e o que fica de fora',
  coverParas: [
    'Esta lista abrange três categorias principais de serviços: webmails gratuitos populares como Gmail, Outlook.com, Yahoo Mail, GMX e mail.com; serviços com foco em privacidade e criptografia como Proton Mail e Tuta; e caixas de correio de grandes provedores de internet (Claro, Vivo, Oi, Comcast). Embora vinculadas a contratos residenciais, também são contas pessoais.',
    'Validamos os [registros MX](/mx-lookup) de cada domínio antes da inclusão. Quando o provedor opera servidores próprios, os registros precisavam apontar para essa infraestrutura. Domínios antigos desativados ou transferidos foram descartados, motivo pelo qual algumas extensões como yahoo.ch não aparecem.',
    'Serviços de email descartável não fazem parte desta listagem. Eles fornecem caixas temporárias que expiram em minutos ou horas e contam com uma [lista própria de emails descartáveis](/disposable-email-providers).',
  ],
  compareTitle: 'Comparativo dos provedores de email gratuitos',
  compareIntro:
    'Confira o que cada provedor de destaque oferece em seu plano gratuito. Todos os números foram coletados diretamente das documentações oficiais dos provedores em outubro de 2026. Como as condições podem mudar, recomendamos confirmar no site da empresa antes de criar sua conta.',
  thProvider: 'Provedor',
  thStorage: 'Espaço grátis',
  thNotes: 'Observações',
  compare: {
    Gmail: {
      storage: '15 GB, compartilhados com Google Drive e Google Fotos',
      notes:
        'Exibe anúncios, mas o Google afirma não escanear mensagens para direcionamento. Algumas contas novas iniciam com 5 GB e liberam os 10 GB adicionais após validação telefônica.',
    },
    'Outlook.com': {
      storage: '15 GB para emails',
      notes: 'Anexos são contabilizados em um armazenamento em nuvem separado de 5 GB. Apresenta anúncios sem assinatura do Microsoft 365.',
    },
    'Yahoo Mail': {
      storage: '20 GB nos EUA',
      notes: 'Cotas menores em determinados países. O plano Yahoo Mail Plus remove os anúncios da interface.',
    },
    'iCloud Mail': {
      storage: '5 GB, compartilhados com todo o iCloud',
      notes: 'Incluso em toda conta Apple. O uso de domínio personalizado exige a assinatura do iCloud+.',
    },
    'Proton Mail': {
      storage: '500 MB, expansíveis para 1 GB após configuração',
      notes: 'Criptografia de ponta a ponta. O plano gratuito inclui 1 endereço e limite de 150 mensagens diárias.',
    },
    Tuta: {
      storage: '1 GB',
      notes: 'Criptografia de ponta a ponta. Não permite apelidos extras nem domínio personalizado no plano gratuito.',
    },
    'Zoho Mail': {
      storage: '5 GB por usuário, para até 5 usuários',
      notes:
        'Raridade entre planos gratuitos: aceita domínio próprio. Acesso restrito a web e aplicativo (sem IMAP/POP), totalmente sem anúncios.',
    },
    GMX: {
      storage: '65 GB no gmx.com, 1 GB em edições regionais',
      notes: 'Até 10 endereços adicionais. Versão global com generosos 65 GB de armazenamento.',
    },
    'mail.com': {
      storage: '65 GB, além de 2 GB de armazenamento em nuvem',
      notes: 'Possibilidade de escolher entre mais de 100 domínios, como email.com e usa.com. O plano Premium remove anúncios.',
    },
  },
  bestTitle: 'Qual é o melhor serviço de email para você?',
  bestIntro: 'Não existe uma resposta única. O serviço ideal depende das suas prioridades de uso.',
  bestList: [
    'Para quem busca a maior cota gratuita, GMX e mail.com disponibilizam 65 GB cada.',
    'Para foco em privacidade, Proton Mail e Tuta protegem seus dados com criptografia de ponta a ponta.',
    'Para usar domínio corporativo próprio sem custos, o plano Forever Free da Zoho atende até cinco colaboradores.',
    'Se você já utiliza os ecossistemas da Apple, Google ou Microsoft, o iCloud Mail, Gmail ou Outlook.com oferecem sincronização nativa.',
  ],
  bestNote:
    'Para atividades profissionais iniciais, um endereço gratuito funciona bem. No entanto, formulários B2B frequentemente rejeitam contas públicas; a seção abaixo esclarece os motivos.',
  signupTitle: 'Domínios ainda disponíveis para novas contas',
  signupIntro:
    'Ao longo das décadas, os provedores absorveram diversas marcas e extensões. Apenas um subconjunto segue liberado para novas inscrições, enquanto os demais permanecem ativos para quem já os utilizava.',
  thNewAccounts: 'Novas contas',
  thOtherDomains: 'Outros domínios ativos',
  newAccountsLabel: 'Novas contas: ',
  alsoInUseLabel: 'Também ativos: ',
  signupOther: {
    Gmail: 'googlemail.com, que entrega exatamente na mesma caixa de entrada',
    'Outlook.com': 'live.com, msn.com e extensões por país como hotmail.com.br',
    'Yahoo Mail': 'ymail.com, rocketmail.com e extensões como yahoo.com.br',
    'iCloud Mail': 'me.com, mac.com',
    'Proton Mail': 'protonmail.ch. O domínio curto pm.me faz parte dos planos pagos.',
    Tuta: 'tuta.com é exclusivo para assinantes pagos.',
    GMX: 'Outras extensões internacionais',
    'mail.com': 'Cerca de 140 outros domínios, todos abertos a novos cadastros.',
  },
  signupNote:
    'Para regras de filtragem B2B essa diferença não influi: um endereço em me.com ou ymail.com tem a mesma natureza pessoal de um gmail.com, razão pela qual a lista contempla ambos.',
  closeTitle: 'Contas gratuitas são canceladas por inatividade',
  closeIntro: 'Empresas de email excluem contas abandonadas. Esse é um dos motivos pelos quais cadastros desatualizados de clientes geram altas taxas de rejeição (bounce).',
  closeList: [
    'Gmail: o Google pode desativar e excluir contas sem login por dois anos.',
    'Outlook.com: exige ao menos um acesso anual para manter a caixa; cancelamento definitivo após dois anos sem login.',
    'Yahoo Mail: a caixa de mensagens é deletada após 12 meses sem uso, e a conta aos 18 meses.',
    'Proton Mail: contas gratuitas são encerradas após 12 meses de inatividade.',
    'Tuta: encerramento de contas gratuitas após 6 meses sem acesso registrado.',
  ],
  closeNote:
    'Antes de realizar disparos para listas antigas, faça uma higienização. O [validador de email em massa](/bulk-email-verifier) detecta endereços inexistentes, enquanto o [verificador de email](/email-checker) checa contatos individuais.',
  b2bTitle: 'Domínios de email gratuitos em formulários B2B',
  b2bParas: [
    'Muitas empresas focadas no mercado B2B exigem o preenchimento com emails corporativos. Soluções como o HubSpot disponibilizam o recurso Block free email providers. Você pode aplicar o mesmo mecanismo em sua plataforma utilizando a lista em CSV.',
    'Contudo, o bloqueio irrestrito possui desvantagens: profissionais autônomos e pequenos comerciantes frequentemente conduzem negócios por um Gmail ou Outlook.com. Uma alternativa inteligente é receber o lead e marcá-lo como pessoal no CRM para direcionamento apropriado.',
    'Um email gratuito não é um email falso. Caixas do Gmail e Outlook são seguras e permanentes. Os emails descartáveis são aqueles que duram poucos minutos; nosso [verificador de email descartável](/disposable-email-checker) foi desenvolvido para detectá-los.',
  ],
  dupesTitle: 'Como identificar emails gratuitos duplicados',
  dupesIntro: 'Alguns provedores direcionam diferentes formatos de escrita para uma mesma caixa postal. Conhecer essas regras é essencial ao deduplicar listas.',
  dupesList: [
    'O Gmail desconsidera pontos no nome de usuário: fulano.silva@gmail.com e fulanosilva@gmail.com acessam a mesma caixa (válido para contas pessoais).',
    'gmail.com e googlemail.com convergem para a mesma caixa de mensagens.',
    'Sufixos com o sinal de adição (+), como fulano+teste@gmail.com, também chegam à caixa principal.',
    'O Yandex trata pontos e hifens no nome de usuário como equivalentes.',
  ],
  faqTitle: 'Perguntas frequentes (FAQ)',
  faqs: [
    {
      q: 'O que é um provedor de serviço de email (ESP)?',
      a: 'É a empresa que hospeda sua caixa postal, armazena seus dados e permite o envio e recebimento de mensagens. Gmail, Outlook.com e Proton Mail são provedores de email. O termo também é aplicado a ferramentas de envio em massa como o Mailchimp.',
    },
    {
      q: 'Qual provedor de email gratuito disponibiliza mais espaço?',
      a: 'GMX (versão internacional) e mail.com lideram com 65 GB cada. O Yahoo oferece 20 GB nos Estados Unidos, enquanto Gmail e Outlook.com fornecem 15 GB.',
    },
    {
      q: 'Qual é o provedor de email gratuito mais seguro e privado?',
      a: 'Proton Mail e Tuta aplicam criptografia de ponta a ponta desde seus planos gratuitos. Gmail, Outlook.com e iCloud Mail não oferecem essa proteção por padrão em contas sem custo.',
    },
    {
      q: 'Posso ter um email gratuito utilizando meu próprio domínio?',
      a: 'O plano Forever Free da Zoho Mail permite configurar um domínio personalizado para até 5 usuários (com acesso via web e app). No Gmail e Proton Mail esse recurso é pago.',
    },
    {
      q: 'Um email gratuito é o mesmo que um email descartável?',
      a: 'Não. Um endereço como nome@gmail.com é uma caixa postal definitiva. Um email temporário expira em poucos minutos. Esta lista abrange exclusivamente serviços duradouros.',
    },
    {
      q: 'Como posso bloquear domínios de email gratuitos em formulários?',
      a: 'Em plataformas como o HubSpot, ative o bloqueio nas opções do formulário. Em sistemas próprios, faça o download do arquivo CSV/JSON e configure a validação para rejeitar os domínios listados.',
    },
    {
      q: 'Contas de email gratuitas possuem prazo de expiração?',
      a: 'Sim, se ficarem sem uso. O Google pode excluir contas após dois anos de inatividade, o Yahoo exclui a caixa após 12 meses e o Outlook requer um login ao menos uma vez ao ano.',
    },
    {
      q: 'Por que um domínio conhecido não está presente na lista?',
      a: 'Ele pode ter sido desativado para recebimento, vendido a terceiros ou ser de pequeno porte ainda não catalogado. Qualquer domínio sem registros MX operacionais é excluído da base.',
    },
  ],
  ctaHeadline: 'Verifique se cada endereço realmente existe, não apenas o provedor',
}



const nl: FreeProvidersPageStrings = {
  metaTitle: 'Gratis e-mailproviders: overzicht en domeinen | Giggal.ai',
  ogTitle: 'Gratis e-mailproviders: lijst en domeinen',
  description: (domains) =>
    `Overzicht van gratis e-mailproviders, van Gmail en Outlook tot Proton en GMX, met ${domains.toLocaleString('nl-NL')} domeinen om te controleren of te downloaden als CSV.`,
  ogLocale: 'nl_NL',
  ogImage: '/og-card.png',
  ogAlt: 'Lijst met gratis e-mailproviders',
  crumb: 'Gratis e-mailproviders',
  listName: 'Gratis e-mailproviders vergeleken',
  listDescription: 'De populairste gratis e-maildiensten en wat hun kosteloze abonnementen inhouden.',
  appName: 'Gratis e-maildomein checker en lijst',
  featureList: (domains, providers) => [
    `${domains.toLocaleString('nl-NL')} gratis e-maildomeinen van ${providers.toLocaleString('nl-NL')} providers`,
    'Elk domein gecontroleerd op actieve MX-records',
    'Controleer of een domein of adres van een gratis aanbieder is',
    'Downloaden als TXT, CSV of JSON',
  ],
  h1: 'Lijst van gratis e-mailproviders',
  heroIntro: (domains) =>
    `De gratis e-maildiensten die men daadwerkelijk gebruikt en de ${domains.toLocaleString('nl-NL')} domeinen waarop adressen eindigen. Controleer een domein of download het complete overzicht.`,
  howTitle: 'Hoe u deze lijst gebruikt',
  howSteps: [
    'Om een adres te controleren, plakt u het in het bovenstaande veld. De tool toont direct of en bij welke gratis provider het domein hoort.',
    'Om de domeinen van een provider op te zoeken, typt u de naam in het filter, bijvoorbeeld hotmail of gmx. Alleen Outlook.com telt al tientallen landspecifieke varianten.',
    'Om de gegevens te gebruiken in een spreadsheet, CRM of eigen software, downloadt u het overzicht. Het CSV-bestand bevat het domein, de provider, het moederbedrijf, het land en het type.',
  ],
  howNote: 'Downloads volgen het actieve filter. Kiest u bijvoorbeeld Internetproviders, dan exporteert u uitsluitend die domeinen.',
  imageAlt: 'Illustratie van e-mailadressen van verschillende gratis providers gesorteerd in een domeinenoverzicht.',
  coverTitle: 'Wat staat er op de lijst en wat niet',
  coverParas: [
    'Deze lijst van gratis e-mailproviders omvat drie categorieën: openbare webmaildiensten zoals Gmail, Outlook.com, Yahoo Mail, GMX en mail.com; op privacy gerichte diensten met encryptie zoals Proton Mail en Tuta; en consumentenpostvakken van grote internetproviders (Ziggo, KPN, Proximus, Telenet, Comcast). Deze laatste zijn gekoppeld aan een vast internetabonnement, maar functioneren evengoed als privéadressen.',
    'We hebben vooraf de [MX-records](/mx-lookup) van elk afzonderlijk domein geverifieerd. Beheert een provider eigen mailservers, dan moesten de records daarnaar verwijzen. Vervallen domeinen die geen e-mail meer accepteren zijn weggelaten, waardoor sommige historische landextensies zoals yahoo.ch niet voorkomen.',
    'Tijdelijke wegwerp-e-maildiensten zijn niet in deze lijst opgenomen. Die leveren tijdelijke inboxen die na enkele minuten of uren verdwijnen en hebben hun eigen [overzicht van tijdelijke e-maildiensten](/disposable-email-providers).',
  ],
  compareTitle: 'Gratis e-mailproviders vergeleken',
  compareIntro:
    'Hieronder ziet u wat de belangrijkste e-maildiensten bieden in hun kosteloze pakket. Alle cijfers zijn in oktober 2026 gecontroleerd aan de hand van officiële pagina’s van de aanbieders. Omdat voorwaarden wijzigen, is het verstandig vooraf de site van de aanbieder te raadplegen.',
  thProvider: 'Provider',
  thStorage: 'Gratis opslag',
  thNotes: 'Opmerkingen',
  compare: {
    Gmail: {
      storage: '15 GB, gedeeld met Google Drive en Google Foto’s',
      notes:
        'Toont advertenties, maar Google stelt e-mails niet te analyseren voor advertentiedoeleinden. Sommige nieuwe accounts starten met 5 GB en ontvangen de overige 10 GB na sms-verificatie.',
    },
    'Outlook.com': {
      storage: '15 GB voor e-mail',
      notes: 'Bijlagen tellen mee tegen een afzonderlijke 5 GB aan cloudopslag. Advertenties zichtbaar tenzij u beschikt over Microsoft 365.',
    },
    'Yahoo Mail': {
      storage: '20 GB in de VS',
      notes: 'In sommige landen minder opslagruimte. Yahoo Mail Plus verwijdert advertenties.',
    },
    'iCloud Mail': {
      storage: '5 GB, gedeeld met de rest van iCloud',
      notes: 'Inbegrepen bij elk Apple-account. Gebruik van een eigen domeinnaam vereist een betaald iCloud+-abonnement.',
    },
    'Proton Mail': {
      storage: '500 MB, oplopend naar 1 GB na configuratiestappen',
      notes: 'End-to-end versleuteld. Het gratis pakket staat 1 adres en 150 uitgaande berichten per dag toe.',
    },
    Tuta: {
      storage: '1 GB',
      notes: 'End-to-end versleuteld. Geen extra aliassen of eigen domein binnen het gratis abonnement.',
    },
    'Zoho Mail': {
      storage: '5 GB per gebruiker, tot 5 gebruikers',
      notes:
        'Uitzonderlijk voor een gratis pakket: ondersteunt uw eigen domeinnaam. Toegang via web en app (geen IMAP/POP), reclamevrij.',
    },
    GMX: {
      storage: '65 GB op gmx.com, 1 GB op regionale versies',
      notes: 'Tot 10 extra aliassen. De internationale gmx.com-dienst biedt 65 GB gratis opslagruimte.',
    },
    'mail.com': {
      storage: '65 GB plus 2 GB cloudopslag',
      notes: 'Keuze uit meer dan 100 domeinen zoals email.com en usa.com. Premium verwijdert reclame.',
    },
  },
  bestTitle: 'Wat is voor u de beste e-maildienst?',
  bestIntro: 'Er is geen universele winnaar; de beste keuze hangt af van hoe u het postvak gebruikt.',
  bestList: [
    'Voor de meeste gratis opslag bieden GMX en mail.com elk 65 GB.',
    'Voor maximale privacy versleutelen Proton Mail en Tuta uw e-mailverkeer end-to-end.',
    'Wilt u kosteloos een eigen domeinnaam koppelen, dan dekt het Forever Free-pakket van Zoho Mail tot vijf personen.',
    'Wie al gebruikmaakt van Apple-, Google- of Microsoft-producten profiteert van naadloze koppeling met respectievelijk iCloud Mail, Gmail of Outlook.com.',
  ],
  bestNote:
    'Voor zakelijk gebruik volstaat een gratis adres prima om mee te starten. Veel B2B-formulieren blokkeren echter consumentenadressen; de onderstaande B2B-paragraaf legt uit waarom.',
  signupTitle: 'Domeinen waarvoor u zich nog steeds kunt registreren',
  signupIntro:
    'Grote aanbieders hebben in de loop der jaren vele merknamen verzameld. Slechts een deel wordt aangeboden voor nieuwe accounts, terwijl overige domeinen operationeel blijven voor bestaande gebruikers.',
  thNewAccounts: 'Nieuwe accounts',
  thOtherDomains: 'Overige actieve domeinen',
  newAccountsLabel: 'Nieuwe accounts: ',
  alsoInUseLabel: 'Tevens actief: ',
  signupOther: {
    Gmail: 'googlemail.com, dat in dezelfde inbox uitkomt',
    'Outlook.com': 'live.com, msn.com en landenextensies zoals hotmail.nl',
    'Yahoo Mail': 'ymail.com, rocketmail.com en extensies zoals yahoo.nl',
    'iCloud Mail': 'me.com, mac.com',
    'Proton Mail': 'protonmail.ch. pm.me is gereserveerd voor betaalde accounts.',
    Tuta: 'tuta.com is inbegrepen bij betaalde abonnementen.',
    GMX: 'Andere nationale extensies',
    'mail.com': 'Circa 140 overige domeinen, allemaal open voor nieuwe registraties.',
  },
  signupNote:
    'Voor een B2B-filter maakt dit onderscheid niet uit: een adres op me.com of ymail.com is net zo privé als een adres op gmail.com, waardoor de lijst beide categorieën bevat.',
  closeTitle: 'Gratis accounts worden gesloten bij inactiviteit',
  closeIntro: 'Providers heffen ongebruikte inboxen op. Dat is een voorname reden waarom oude e-maillijsten met gratis adressen na verloop van tijd meer bouncen.',
  closeList: [
    'Gmail: Google kan accounts na twee jaar zonder activiteit permanent verwijderen.',
    'Outlook.com: u dient minstens één keer per jaar in te loggen; na twee jaar inactiviteit volgt definitieve sluiting.',
    'Yahoo Mail: de mailbox wordt na 12 maanden verwijderd, het account na 18 maanden.',
    'Proton Mail: gratis accounts worden na 12 maanden inactiviteit gewist.',
    'Tuta: gratis accounts worden opgeheven na 6 maanden zonder aanmelding.',
  ],
  closeNote:
    'Controleer uw adressenbestand alvorens een mailing te versturen. Onze [bulk e-mailverificatie](/bulk-email-verifier) spoort opgeheven adressen op; voor afzonderlijke adressen gebruikt u de [e-mail checker](/email-checker).',
  b2bTitle: 'Gratis e-maildomeinen op B2B-webformulieren',
  b2bParas: [
    'Veel B2B-organisaties wensen enkel inschrijvingen met een zakelijk e-mailadres. HubSpot biedt hiervoor bijvoorbeeld de optie Block free email providers. Met ons CSV-bestand implementeert u deze controle eenvoudig in uw eigen formulieren.',
    'Het strikt weren van gratis adressen brengt echter ook een nadeel mee: zzp’ers en kleine ondernemingen handelen al hun zakelijke communicatie dikwijls af via een Gmail- of Outlook.com-adres. Een zachtere methode is het adres accepteren en in uw CRM als particulier aanmerken ter beoordeling door verkoop.',
    'Een gratis adres is geen nep-adres. Gmail- en Outlook-inboxen zijn permanent en ontvangen reguliere e-mail. Wegwerp-e-mails zijn de adressen die na enkele minuten vervallen, en die worden onderschept door de [tijdelijke e-mail checker](/disposable-email-checker).',
  ],
  dupesTitle: 'Dubbele gratis adressen herkennen',
  dupesIntro: 'Verschillende providers bezorgen afwijkende spellingen van hetzelfde adres in één en hetzelfde postvak. Dit is cruciaal bij het ontdubbelen van bestanden.',
  dupesList: [
    'Gmail negeert punten in de gebruikersnaam: jan.jansen@gmail.com en janjansen@gmail.com komen in hetzelfde postvak terecht (geldt voor consumenten-Gmail).',
    'gmail.com en googlemail.com zijn gekoppeld aan dezelfde inbox.',
    'Plus-adressen, zoals jan+nieuws@gmail.com, worden eveneens in de hoofdinbox afgeleverd.',
    'Yandex behandelt punten en koppeltekens in de gebruikersnaam als volstrekt gelijkwaardig.',
  ],
  faqTitle: 'Veelgestelde vragen (FAQ)',
  faqs: [
    {
      q: 'Wat is een e-mail service provider (ESP)?',
      a: 'Dat is het bedrijf dat uw postvak host, berichten bewaart en het verzenden en ontvangen afhandelt. Gmail, Outlook.com en Proton Mail zijn e-mailproviders. De term wordt ook gebruikt voor bulkverzenders zoals Mailchimp.',
    },
    {
      q: 'Welke gratis e-maildienst biedt de meeste opslag?',
      a: 'GMX (internationaal) en mail.com bieden met elk 65 GB de grootste gratis capaciteit. Yahoo biedt 20 GB in de VS, terwijl Gmail en Outlook.com elk 15 GB leveren.',
    },
    {
      q: 'Welke gratis e-mailprovider beschermt de privacy het best?',
      a: 'Proton Mail en Tuta passen standaard end-to-end encryptie toe, ook binnen hun kosteloze abonnementen. Gmail, Outlook.com en iCloud Mail doen dat niet bij gratis accounts.',
    },
    {
      q: 'Kan ik een gratis e-mailadres krijgen met mijn eigen domeinnaam?',
      a: 'Het Forever Free-abonnement van Zoho Mail ondersteunt één eigen domein voor maximaal vijf gebruikers (via web en app). Bij Gmail en Proton Mail is hiervoor een betaald abonnement vereist.',
    },
    {
      q: 'Is een gratis e-mailadres hetzelfde als een wegwerp-e-mailadres?',
      a: 'Nee. Een gratis adres zoals naam@gmail.com is een permanent postvak. Een wegwerp-adres stopt na enkele minuten of uren met functioneren. Dit overzicht bevat uitsluitend permanente providers.',
    },
    {
      q: 'Hoe blokkeer ik gratis e-maildomeinen op een webformulier?',
      a: 'Binnen platforms als HubSpot vinkt u de optie aan bij de formulierinstellingen. In eigen code downloadt u ons CSV- of JSON-bestand en weigert u domeinen die op de lijst voorkomen.',
    },
    {
      q: 'Verlopen gratis e-mailaccounts?',
      a: 'Ja, als ze langere tijd niet worden gebruikt. Google kan een account na twee jaar inactiviteit verwijderen, Yahoo na 12 maanden en Outlook.com adviseert minstens jaarlijks in te loggen.',
    },
    {
      q: 'Waarom staat een bekend domein niet op deze lijst?',
      a: 'Het domein accepteert mogelijk geen berichten meer, is overgedragen aan een andere partij of betreft een kleine aanbieder die we nog niet hebben toegevoegd. Domeinen zonder werkende MX-records worden uitgesloten.',
    },
  ],
  ctaHeadline: 'Controleer of elk adres echt bestaat, niet alleen de provider',
}



const pl: FreeProvidersPageStrings = {
  metaTitle: 'Darmowi dostawcy poczty email: lista domen | Giggal.ai',
  ogTitle: 'Darmowi dostawcy poczty email: lista domen',
  description: (domains) =>
    `Zestawienie darmowych dostawców poczty email, od Gmaila i Outlooka po Proton i GMX, z ${domains.toLocaleString('pl-PL')} domenami do sprawdzenia lub pobrania w CSV.`,
  ogLocale: 'pl_PL',
  ogImage: '/og-card.png',
  ogAlt: 'Lista darmowych dostawców poczty email',
  crumb: 'Darmowi dostawcy email',
  listName: 'Porównanie darmowych dostawców poczty email',
  listDescription: 'Główne bezpłatne skrzynki pocztowe i możliwości ich darmowych pakietów.',
  appName: 'Weryfikator i lista darmowych domen email',
  featureList: (domains, providers) => [
    `${domains.toLocaleString('pl-PL')} darmowych domen email od ${providers.toLocaleString('pl-PL')} dostawców`,
    'Każda domena zweryfikowana pod kątem poprawnych rekordów MX',
    'Sprawdź, czy domena lub adres pochodzi od bezpłatnego dostawcy',
    'Pobieranie w formacie TXT, CSV lub JSON',
  ],
  h1: 'Lista darmowych dostawców poczty email',
  heroIntro: (domains) =>
    `Darmowe usługi pocztowe, z których ludzie rzeczywiście korzystają, oraz ${domains.toLocaleString('pl-PL')} domen, na które kończą się ich adresy. Sprawdź domenę lub pobierz całą listę.`,
  howTitle: 'Jak korzystać z tej listy',
  howSteps: [
    'Aby sprawdzić pojedynczy adres, wklej go w polu u góry. Narzędzie wskaże, czy domena należy do darmowego dostawcy i jakiego.',
    'Aby wyszukać domeny konkretnego dostawcy, wpisz jego nazwę w filtrze, np. hotmail lub gmx. Sam Outlook.com posiada dziesiątki wersji krajowych.',
    'Aby wykorzystać bazę w arkuszu kalkulacyjnym, systemie CRM lub aplikacji, pobierz plik. CSV zawiera domenę, dostawcę, spółkę zarządzającą, kraj i kategorię.',
  ],
  howNote: 'Pobierane pliki uwzględniają wybrany filtr. Wybierając Dostawców internetu, pobierzesz wyłącznie te domeny.',
  imageAlt: 'Ilustracja adresów email od różnych bezpłatnych dostawców posortowanych w zestawieniu domen.',
  coverTitle: 'Co obejmuje ta lista, a co zostało wykluczone',
  coverParas: [
    'Zestawienie obejmuje trzy główne kategorie usług: popularne webmaile, takie jak Gmail, Outlook.com, Yahoo Mail, GMX i mail.com; prywatne, szyfrowane serwisy jak Proton Mail i Tuta; oraz skrzynki pocztowe oferowane przez dostawców internetu (Orange, UPC, Vectra, Comcast). Choć te ostatnie są powiązane z abonamentem domowym, stanowią adresy prywatne.',
    'Przed dodaniem każdej domeny zweryfikowaliśmy jej [rekordy MX](/mx-lookup). Gdy dostawca posiada własne serwery pocztowe, rekordy musiały na nie wskazywać. Wycofane domeny, które przestały odbierać pocztę, zostały usunięte (dlatego brak starych wersji, np. yahoo.ch).',
    'W wykazie nie ma jednorazowych skrzynek tymczasowych. Takie usługi generują adresy wygasające po kilku minutach lub godzinach i mają własną [listę dostawców poczty jednorazowej](/disposable-email-providers).',
  ],
  compareTitle: 'Porównanie darmowych dostawców poczty',
  compareIntro:
    'Oto zestawienie możliwości darmowych pakietów czołowych dostawców poczty elektronicznej, zweryfikowane w październiku 2026 roku na podstawie oficjalnych stron. Ponieważ warunki bezpłatnych planów ulegają zmianom, warto sprawdzić stronę dostawcy przed rejestracją.',
  thProvider: 'Dostawca',
  thStorage: 'Darmowa przestrzeń',
  thNotes: 'Uwagi',
  compare: {
    Gmail: {
      storage: '15 GB, współdzielone z Dyskiem Google i Zdjęciami',
      notes:
        'Wyświetla reklamy, lecz Google deklaruje brak skanowania treści wiadomości w celach reklamowych. Niektóre nowe konta rozpoczynają z 5 GB i odblokowują kolejne 10 GB po weryfikacji numeru telefonu.',
    },
    'Outlook.com': {
      storage: '15 GB na wiadomości email',
      notes: 'Załączniki wliczają się do oddzielnej puli 5 GB pamięci w chmurze. Reklamy obecne bez subskrypcji Microsoft 365.',
    },
    'Yahoo Mail': {
      storage: '20 GB w USA',
      notes: 'W niektórych krajach limit jest niższy. Yahoo Mail Plus pozwala na usunięcie reklam.',
    },
    'iCloud Mail': {
      storage: '5 GB, współdzielone z całą chmurą iCloud',
      notes: 'W pakiecie z każdym Kontem Apple. Obsługa własnej domeny wymaga płatnej subskrypcji iCloud+.',
    },
    'Proton Mail': {
      storage: '500 MB, powiększane do 1 GB po konfiguracji',
      notes: 'Szyfrowanie end-to-end. Darmowy pakiet dopuszcza 1 adres i 150 wiadomości dziennie.',
    },
    Tuta: {
      storage: '1 GB',
      notes: 'Szyfrowanie end-to-end. Brak dodatkowych aliasów i własnej domeny w wersji bezpłatnej.',
    },
    'Zoho Mail': {
      storage: '5 GB na użytkownika, do 5 użytkowników',
      notes:
        'Niezwykła cecha darmowego pakietu: obsługa własnej domeny firmowej. Dostęp wyłącznie przez web i aplikację (brak IMAP/POP), bez reklam.',
    },
    GMX: {
      storage: '65 GB na gmx.com, 1 GB w wersjach lokalnych',
      notes: 'Do 10 dodatkowych aliasów. Globalna wersja gmx.com zapewnia 65 GB darmowego miejsca.',
    },
    'mail.com': {
      storage: '65 GB oraz 2 GB przestrzeni dyskowej w chmurze',
      notes: 'Wybór spośród ponad 100 domen, np. email.com i consultant.com. Wersja Premium usuwa reklamy.',
    },
  },
  bestTitle: 'Która usługa pocztowa jest dla Ciebie najlepsza?',
  bestIntro: 'Nie ma jednego uniwersalnego rozwiązania. Wybór zależy od Twoich priorytetów.',
  bestList: [
    'Najwięcej darmowej przestrzeni oferują GMX oraz mail.com (po 65 GB).',
    'Dla bezwzględnej prywatności Proton Mail i Tuta szyfrują całą korespondencję end-to-end.',
    'Do bezpłatnego podpięcia własnej domeny pakiet Forever Free od Zoho Mail obsługuje do pięciu osób.',
    'W przypadku korzystania z ekosystemów Apple, Google lub Microsoftu natywną integrację zapewniają iCloud Mail, Gmail lub Outlook.com.',
  ],
  bestNote:
    'Do celów biznesowych darmowy adres wystarczy na start. Jednak formularze B2B często odrzucają skrzynki bezpłatne; poniższa sekcja wyjaśnia powody.',
  signupTitle: 'Domeny otwarte na rejestrację nowych kont',
  signupIntro:
    'Wielkie korporacje przez lata gromadziły liczne adresy internetowe. Tylko część z nich pozostaje dostępna dla nowych rejestracji, a pozostałe nadal obsługują dotychczasowych użytkowników.',
  thNewAccounts: 'Nowe konta',
  thOtherDomains: 'Inne aktywne domeny',
  newAccountsLabel: 'Nowe konta: ',
  alsoInUseLabel: 'Również w użyciu: ',
  signupOther: {
    Gmail: 'googlemail.com, obsługujące tę samą skrzynkę odbiorczą',
    'Outlook.com': 'live.com, msn.com oraz wersje krajowe, np. hotmail.pl',
    'Yahoo Mail': 'ymail.com, rocketmail.com oraz wersje krajowe, np. yahoo.pl',
    'iCloud Mail': 'me.com, mac.com',
    'Proton Mail': 'protonmail.ch. Krótka domena pm.me wymaga planu płatnego.',
    Tuta: 'tuta.com dostępna jest w abonamentach płatnych.',
    GMX: 'Inne wersje krajowe',
    'mail.com': 'Około 140 innych domen, wszystkie otwarte na nowe rejestracje.',
  },
  signupNote:
    'Dla filtrów B2B różnica nie ma znaczenia: adres w domenie me.com czy ymail.com jest tak samo prywatny jak gmail.com, dlatego zestawienie obejmuje obydwa warianty.',
  closeTitle: 'Darmowe konta wygasają przy braku logowania',
  closeIntro: 'Dostawcy usuwają nieużywane skrzynki. To podstawowy powód, dla którego stare bazy adresowe generują z czasem coraz więcej zwrotów (bounce).',
  closeList: [
    'Gmail: Google może usunąć konto nieużywane przez okres dwóch lat.',
    'Outlook.com: wymagane logowanie co najmniej raz w roku; po dwóch latach braku aktywności następuje zamknięcie konta.',
    'Yahoo Mail: skrzynka pocztowa jest usuwana po 12 miesiącach braku logowania, a całe konto po 18 miesiącach.',
    'Proton Mail: bezpłatne konta są kasowane po 12 miesiącach bezczynności.',
    'Tuta: bezpłatne konta są likwidowane po 6 miesiącach braku logowania.',
  ],
  closeNote:
    'Przed wysyłką do starej bazy odbiorców zweryfikuj kontakty. Nasza [masowa weryfikacja email](/bulk-email-verifier) wykrywa nieistniejące konta, a [weryfikator pojedynczych adresów](/email-checker) sprawdza wybrane adresy.',
  b2bTitle: 'Darmowe domeny pocztowe w formularzach B2B',
  b2bParas: [
    'Wiele firm B2B akceptuje wyłącznie rejestracje z adresów służbowych. HubSpot posiada funkcję Block free email providers. Korzystając z naszego pliku CSV, możesz wdrożyć identyczny mechanizm w swoim formularzu.',
    'Całkowite blokowanie wiąże się jednak z utratą części klientów: wielu freelancerów i właścicieli mikroprzedsiębiorstw prowadzi działalność w oparciu o adres Gmail lub Outlook.com. Łagodniejszym podejściem jest akceptacja adresu i oznaczenie go w CRM jako prywatny do weryfikacji handlowej.',
    'Darmowy adres nie oznacza fałszywego konta. Skrzynki Gmail i Outlook są trwałe. Zupełnie czym innym są adresy jednorazowe, które wygasają po kilkunastu minutach – do ich wykrywania służy nasz [weryfikator poczty tymczasowej](/disposable-email-checker).',
  ],
  dupesTitle: 'Identyfikacja zduplikowanych darmowych adresów',
  dupesIntro: 'Niektórzy dostawcy kierują różne zapisy adresu do tej samej skrzynki odbiorczej. Ma to kluczowe znaczenie przy usuwaniu duplikatów z baz.',
  dupesList: [
    'Gmail ignoruje kropki w nazwie użytkownika: jan.kowalski@gmail.com i jankowalski@gmail.com trafiają do tej samej skrzynki (w kontach prywatnych).',
    'gmail.com oraz googlemail.com prowadzą do identycznej skrzynki pocztowej.',
    'Adresy z plusem, np. jan+newsletter@gmail.com, również trafiają do głównego folderu poczty.',
    'Yandex traktuje kropki i myślniki w nazwie konta jako całkowicie tożsame.',
  ],
  faqTitle: 'Często zadawane pytania (FAQ)',
  faqs: [
    {
      q: 'Czym jest dostawca usług poczty elektronicznej (ESP)?',
      a: 'To podmiot zarządzający skrzynką, przechowujący korespondencję oraz umożliwiający wysyłanie i odbieranie wiadomości. Gmail, Outlook.com czy Proton Mail to typowe przykłady ESP. Określenie to bywa też stosowane wobec platform masowej wysyłki newsletterów (np. Mailchimp).',
    },
    {
      q: 'Który darmowy serwis pocztowy oferuje najwięcej pamięci?',
      a: 'GMX (wersja globalna) oraz mail.com przodują z pojemnością 65 GB każdy. Yahoo oferuje 20 GB w USA, a Gmail i Outlook.com zapewniają po 15 GB.',
    },
    {
      q: 'Który darmowy dostawca poczty najlepiej dba o prywatność?',
      a: 'Proton Mail oraz Tuta gwarantują pełne szyfrowanie end-to-end również w wersjach bezpłatnych. Gmail, Outlook.com i iCloud Mail nie oferują szyfrowania end-to-end w standardowych kontach.',
    },
    {
      q: 'Czy mogę posiadać darmową skrzynkę z własną domeną internetową?',
      a: 'Plan Forever Free w Zoho Mail obsługuje jedną domenę dla maksymalnie 5 użytkowników (przez przeglądarkę i aplikację). Gmail oraz Proton Mail wymagają w tym celu planów płatnych.',
    },
    {
      q: 'Czy darmowy adres pocztowy to to samo co adres jednorazowy?',
      a: 'Nie. Adres w rodzaju nazwisko@gmail.com to stała skrzynka odbiorcza. Adres tymczasowy wygasa po paru minutach lub godzinach. Ta lista gromadzi wyłącznie stałych operatorów.',
    },
    {
      q: 'Jak zablokować darmowe domeny pocztowe w formularzu www?',
      a: 'W rozwiązaniach takich jak HubSpot wystarczy zaznaczyć odpowiednią opcję w ustawieniach. We własnej aplikacji można pobrać nasz plik CSV/JSON i blokować domeny z listy.',
    },
    {
      q: 'Czy darmowe konta pocztowe ulegają przedawnieniu?',
      a: 'Tak, jeśli pozostają nieaktywne. Google może usunąć konto po 2 latach bezczynności, Yahoo po 12 miesiącach, a w Outlook.com warto zalogować się minimum raz w roku.',
    },
    {
      q: 'Dlaczego znana domena nie znajduje się w tym wykazie?',
      a: 'Mogła przestać odbierać maile, zmienić właściciela lub być mniejszym regionalnym operatorem, którego jeszcze nie dodaliśmy. Domeny pozbawione działających rekordów MX są automatycznie eliminowane.',
    },
  ],
  ctaHeadline: 'Sprawdź, czy adres faktycznie istnieje, a nie tylko jego dostawcę',
}



const id: FreeProvidersPageStrings = {
  metaTitle: 'Penyedia Email Gratis: Daftar Lengkap Domain | Giggal.ai',
  ogTitle: 'Penyedia Email Gratis: Daftar Domain Populer',
  description: (domains) =>
    `Daftar penyedia email gratis, dari Gmail dan Outlook hingga Proton dan GMX, dengan ${domains.toLocaleString('id-ID')} domain yang dapat diperiksa atau diunduh sebagai CSV.`,
  ogLocale: 'id_ID',
  ogImage: '/og-card.png',
  ogAlt: 'Daftar penyedia email gratis',
  crumb: 'Penyedia Email Gratis',
  listName: 'Perbandingan penyedia email gratis',
  listDescription: 'Layanan email gratis utama dan apa saja yang disertakan dalam paket gratisnya.',
  appName: 'Pemeriksa dan Daftar Domain Email Gratis',
  featureList: (domains, providers) => [
    `${domains.toLocaleString('id-ID')} domain email gratis dari ${providers.toLocaleString('id-ID')} penyedia`,
    'Setiap domain telah diverifikasi memiliki catatan MX yang aktif',
    'Periksa apakah domain atau alamat email berasal dari penyedia gratis',
    'Unduh sebagai TXT, CSV, atau JSON',
  ],
  h1: 'Daftar Penyedia Email Gratis',
  heroIntro: (domains) =>
    `Layanan email gratis yang digunakan sehari-hari dan ${domains.toLocaleString('id-ID')} domain tujuan alamat email mereka. Periksa domain atau unduh seluruh daftar.`,
  howTitle: 'Cara menggunakan daftar ini',
  howSteps: [
    'Untuk memeriksa suatu alamat, tempelkan di kotak pencarian di bagian atas. Alat ini akan memberi tahu apakah domain tersebut milik penyedia gratis dan siapa penyedianya.',
    'Untuk mencari domain dari penyedia tertentu, ketik namanya pada filter (misalnya hotmail atau gmx). Outlook.com sendiri memiliki puluhan versi domain negara.',
    'Untuk mengolah data di spreadsheet, CRM, atau program Anda sendiri, unduh daftarnya. File CSV menyertakan domain, nama penyedia, perusahaan induk, negara, dan tipenya.',
  ],
  howNote: 'Hasil unduhan akan mengikuti filter yang Anda tetapkan. Jika Anda memilih Penyedia internet, Anda hanya akan mengunduh domain-domain tersebut.',
  imageAlt: 'Ilustrasi alamat email dari berbagai penyedia gratis yang disusun dalam daftar domain.',
  coverTitle: 'Apa saja yang ada dalam daftar ini dan apa yang tidak',
  coverParas: [
    'Daftar penyedia email gratis ini mencakup tiga kategori layanan: webmail publik gratis seperti Gmail, Outlook.com, Yahoo Mail, GMX, dan mail.com; layanan terenkripsi dengan privasi tinggi seperti Proton Mail dan Tuta; serta kotak surat dari penyedia internet terkemuka (Telkom IndiHome, Biznet, Comcast). Meskipun email penyedia internet sepaket dengan langganan rumah tangga, jenisnya tetap merupakan alamat pribadi.',
    'Kami memverifikasi [catatan MX](/mx-lookup) setiap domain sebelum menambahkannya. Jika penyedia mengoperasikan mail server sendiri, catatan MX harus mengarah ke server tersebut. Domain lama yang sudah tidak menerima email atau telah berpindah kepemilikan telah disisihkan (itulah sebabnya beberapa ekstensi negara lawas seperti yahoo.ch tidak disertakan).',
    'Layanan email sementara (disposable email) tidak termasuk dalam daftar ini. Layanan tersebut menyediakan kotak masuk sekali pakai yang kedaluwarsa setelah beberapa menit atau jam, dan memiliki [daftar penyedia email sementara](/disposable-email-providers) tersendiri.',
  ],
  compareTitle: 'Perbandingan penyedia email gratis populer',
  compareIntro:
    'Berikut adalah perbandingan fitur paket gratis dari masing-masing penyedia email utama, diverifikasi pada Oktober 2026 berdasarkan informasi resmi penyedia. Karena ketentuan paket gratis dapat berubah sewaktu-waktu, disarankan memeriksa situs resmi sebelum mendaftar.',
  thProvider: 'Penyedia',
  thStorage: 'Penyimpanan gratis',
  thNotes: 'Catatan',
  compare: {
    Gmail: {
      storage: '15 GB, dibagi bersama Google Drive dan Google Foto',
      notes:
        'Menampilkan iklan, namun Google menyatakan tidak membaca email Anda untuk memilih iklan. Beberapa akun baru mulai dengan 5 GB dan bertambah 10 GB setelah verifikasi nomor telepon.',
    },
    'Outlook.com': {
      storage: '15 GB untuk email',
      notes: 'Lampiran dihitung dalam kuota cloud terpisah sebesar 5 GB. Menampilkan iklan kecuali berlangganan Microsoft 365.',
    },
    'Yahoo Mail': {
      storage: '20 GB di AS',
      notes: 'Beberapa negara mendapatkan kuota lebih kecil. Yahoo Mail Plus menghapus tampilan iklan.',
    },
    'iCloud Mail': {
      storage: '5 GB, dibagi bersama layanan iCloud lainnya',
      notes: 'Tersedia dengan setiap Akun Apple. Menggunakan domain sendiri memerlukan paket berlangganan iCloud+.',
    },
    'Proton Mail': {
      storage: '500 MB, bertambah menjadi 1 GB setelah menyelesaikan langkah persiapan',
      notes: 'Terenkripsi end-to-end. Paket gratis mengizinkan 1 alamat dan pengiriman 150 pesan per hari.',
    },
    Tuta: {
      storage: '1 GB',
      notes: 'Terenkripsi end-to-end. Tidak menyediakan alias tambahan atau domain kustom pada paket gratis.',
    },
    'Zoho Mail': {
      storage: '5 GB per pengguna, hingga 5 pengguna',
      notes:
        'Fitur langka untuk paket gratis: mendukung domain kustom Anda sendiri. Akses web dan aplikasi saja (tanpa IMAP/POP), bebas iklan.',
    },
    GMX: {
      storage: '65 GB di gmx.com, 1 GB pada versi domain lokal',
      notes: 'Hingga 10 alamat alias. Layanan internasional gmx.com menyediakan penyimpanan gratis hingga 65 GB.',
    },
    'mail.com': {
      storage: '65 GB ditambah 2 GB penyimpanan cloud',
      notes: 'Pilihan lebih dari 100 domain seperti email.com dan consultant.com. Versi Premium bebas iklan.',
    },
  },
  bestTitle: 'Apa layanan email terbaik untuk Anda?',
  bestIntro: 'Tidak ada satu layanan yang terbaik untuk semua orang. Akun terbaik bergantung pada kebutuhan penggunaan Anda.',
  bestList: [
    'Untuk kuota penyimpanan gratis terbesar, GMX dan mail.com memberikan masing-masing 65 GB.',
    'Untuk perlindungan privasi maksimal, Proton Mail dan Tuta mengenkripsi email Anda secara end-to-end.',
    'Untuk memakai domain sendiri tanpa biaya langganan, paket Forever Free dari Zoho Mail mencakup hingga lima pengguna.',
    'Bagi pengguna ekosistem Apple, Google, atau Microsoft, iCloud Mail, Gmail, atau Outlook.com menawarkan integrasi terbaik.',
  ],
  bestNote:
    'Untuk keperluan awal bisnis, alamat email gratis dapat digunakan. Namun banyak formulir B2B memblokir email publik; penjelasan di bawah merincikan alasannya.',
  signupTitle: 'Domain yang masih menerima pendaftaran akun baru',
  signupIntro:
    'Penyedia besar mengumpulkan banyak domain selama bertahun-tahun. Hanya sebagian yang ditawarkan untuk akun baru, sementara domain lainnya tetap aktif bagi pengguna yang sudah memilikinya.',
  thNewAccounts: 'Akun baru',
  thOtherDomains: 'Domain aktif lainnya',
  newAccountsLabel: 'Akun baru: ',
  alsoInUseLabel: 'Juga aktif: ',
  signupOther: {
    Gmail: 'googlemail.com, yang terhubung ke kotak masuk yang sama',
    'Outlook.com': 'live.com, msn.com, serta versi negara seperti hotmail.co.id',
    'Yahoo Mail': 'ymail.com, rocketmail.com, serta versi negara seperti yahoo.co.id',
    'iCloud Mail': 'me.com, mac.com',
    'Proton Mail': 'protonmail.ch. pm.me hanya tersedia untuk akun berbayar.',
    Tuta: 'tuta.com termasuk dalam paket berbayar.',
    GMX: 'Versi negara lainnya',
    'mail.com': 'Sekitar 140 domain tambahan lainnya, semuanya terbuka untuk akun baru.',
  },
  signupNote:
    'Bagi filter formulir B2B perbedaan ini tidak berpengaruh: alamat di me.com atau ymail.com sama pribadinya dengan gmail.com, sehingga daftar ini mencakup kedua jenis tersebut.',
  closeTitle: 'Akun gratis akan ditutup jika tidak pernah digunakan',
  closeIntro: 'Penyedia email menghapus akun yang ditinggalkan. Hal inilah yang menjadi salah satu pemicu melonjaknya bounce rate pada daftar email lama.',
  closeList: [
    'Gmail: Google berhak menghapus akun yang tidak pernah dibuka selama dua tahun.',
    'Outlook.com: Anda harus masuk minimal sekali dalam setahun agar kotak masuk tetap aktif; penutupan permanen setelah dua tahun tanpa aktivitas.',
    'Yahoo Mail: kotak pesan dihapus setelah 12 bulan tidak aktif, dan seluruh akun setelah 18 bulan.',
    'Proton Mail: akun gratis akan dihapus setelah 12 bulan tidak ada aktivitas.',
    'Tuta: akun gratis dihapus jika tidak ada aktivitas login selama 6 bulan.',
  ],
  closeNote:
    'Sebelum mengirim pesan ke daftar kontak lama, lakukan verifikasi terlebih dahulu. Alat [verifikasi email massal](/bulk-email-verifier) kami menemukan alamat yang sudah tidak aktif, dan [pemeriksa email](/email-checker) dapat mengecek alamat satuan.',
  b2bTitle: 'Domain email gratis pada formulir B2B',
  b2bParas: [
    'Banyak perusahaan B2B hanya menginginkan pendaftaran dengan email kantor resmi. HubSpot, misalnya, memiliki pengaturan Block free email providers. Anda dapat menerapkan hal serupa pada kode formulir Anda menggunakan file CSV di atas.',
    'Namun demikian, pemblokiran total memiliki konsekuensi: sebagian pekerja lepas dan pemilik usaha mikro menjalankan seluruh bisnisnya melalui alamat Gmail atau Outlook.com. Opsi yang lebih ramah adalah menerima alamat tersebut, menandainya sebagai email pribadi di CRM, dan menyerahkan tindak lanjutnya kepada tim penjualan.',
    'Alamat email gratis bukanlah alamat palsu. Kotak pesan Gmail dan Outlook.com bersifat permanen dan aktif. Alamat sekali pakai yang cepat kedaluwarsalah yang perlu diwaspadai, dan [pemeriksa email sekali pakai](/disposable-email-checker) kami dirancang untuk mendeteksinya.',
  ],
  dupesTitle: 'Mengenali alamat gratis ganda (duplikat)',
  dupesIntro: 'Beberapa penyedia mengarahkan beberapa variasi penulisan ke kotak surat yang sama. Hal ini sangat penting saat Anda membersihkan duplikat dalam database.',
  dupesList: [
    'Gmail mengabaikan tanda titik pada nama pengguna: john.smith@gmail.com dan johnsmith@gmail.com masuk ke kotak masuk yang sama (berlaku untuk akun pribadi Gmail).',
    'gmail.com dan googlemail.com terhubung ke kotak surat yang sama.',
    'Penggunaan tanda plus, seperti john+berita@gmail.com, juga akan mendarat di kotak masuk utama.',
    'Yandex memperlakukan tanda titik dan tanda hubung pada nama pengguna sebagai karakter yang sama.',
  ],
  faqTitle: 'Pertanyaan yang sering diajukan (FAQ)',
  faqs: [
    {
      q: 'Apa itu penyedia layanan email (ESP)?',
      a: 'Yaitu perusahaan yang mengoperasikan kotak surat Anda, menyimpan pesan, serta mengelola pengiriman dan penerimaan email. Gmail, Outlook.com, dan Proton Mail adalah contoh ESP. Istilah ini juga dipakai untuk penyedia email massal seperti Mailchimp.',
    },
    {
      q: 'Layanan email gratis mana yang menyediakan penyimpanan terbesar?',
      a: 'GMX (versi internasional) dan mail.com memberikan kapasitas terbesar dengan masing-masing 65 GB. Yahoo menyediakan 20 GB di AS, sementara Gmail dan Outlook.com masing-masing memberikan 15 GB.',
    },
    {
      q: 'Penyedia email gratis mana yang paling menjaga privasi?',
      a: 'Proton Mail dan Tuta menyediakan enkripsi end-to-end secara standar pada paket gratis mereka. Gmail, Outlook.com, dan iCloud Mail tidak menyediakan enkripsi end-to-end pada akun gratis.',
    },
    {
      q: 'Bisakah saya mendapatkan alamat email gratis dengan domain saya sendiri?',
      a: 'Paket Forever Free dari Zoho Mail mendukung domain pribadi untuk hingga 5 pengguna (melalui web dan aplikasi). Gmail dan Proton Mail membutuhkan paket berbayar untuk fitur tersebut.',
    },
    {
      q: 'Apakah alamat email gratis sama dengan email sementara (disposable)?',
      a: 'Tidak. Alamat seperti nama@gmail.com adalah kotak surat permanen. Alamat email sementara kedaluwarsa setelah hitungan menit atau jam. Daftar ini khusus merangkum penyedia permanen.',
    },
    {
      q: 'Bagaimana cara memblokir domain email gratis pada formulir pendaftaran?',
      a: 'Di platform seperti HubSpot, aktifkan opsi pada pengaturan formulir. Pada kode kustom Anda sendiri, unduh file CSV atau JSON kami di atas, lalu tolak atau beri tanda pada domain yang tercantum.',
    },
    {
      q: 'Apakah akun email gratis bisa kedaluwarsa?',
      a: 'Ya, jika tidak pernah digunakan. Google dapat menghapus akun setelah dua tahun tanpa aktivitas, Yahoo setelah 12 bulan, dan Outlook.com menyarankan login minimal sekali dalam setahun.',
    },
    {
      q: 'Mengapa ada domain populer yang tidak tercantum dalam daftar?',
      a: 'Mungkin domain tersebut sudah tidak menerima email, telah dialihkan ke pihak lain, atau penyedia lokal yang belum terdata. Setiap domain tanpa catatan MX aktif tidak dimasukkan ke dalam daftar.',
    },
  ],
  ctaHeadline: 'Pastikan setiap alamat email benar-benar aktif, bukan hanya mengecek penyedianya',
}


const ja: FreeProvidersPageStrings = {
  metaTitle: 'フリーメール一覧：無料メールサービスとドメインのリスト | Giggal.ai',
  ogTitle: 'フリーメール一覧：無料メールサービスとドメインのリスト',
  description: (domains) =>
    `GmailやOutlookからProton、GMXまで、フリーメールのサービスを一覧にまとめました。${domains.toLocaleString('ja-JP')}件のフリーメールのドメインを確認でき、CSVでダウンロードもできます。`,
  ogLocale: 'ja_JP',
  ogImage: '/og-card.png',
  ogAlt: 'フリーメールのサービス一覧',
  crumb: 'フリーメール一覧',
  listName: 'フリーメールのサービス比較',
  listDescription: '主な無料メールサービスと、それぞれの無料プランに含まれる内容です。',
  appName: 'フリーメールのドメイン確認ツールと一覧',
  featureList: (domains, providers) => [
    `${providers.toLocaleString('ja-JP')}サービス、${domains.toLocaleString('ja-JP')}件のフリーメールのドメイン`,
    'すべてのドメインで、MXレコードが機能していることを確認済み',
    'ドメインやメールアドレスがフリーメールかどうかを確認',
    'TXT、CSV、JSONでダウンロード',
  ],
  h1: 'フリーメールのサービス一覧',
  heroIntro: (domains) =>
    `実際に使われている無料メールサービスと、そのメールアドレスに使われている${domains.toLocaleString('ja-JP')}件のドメインの一覧です。ドメインを確認するか、一覧全体をダウンロードしてください。`,
  howTitle: 'この一覧の使い方',
  howSteps: [
    '1件のメールアドレスを確認するには、上部の入力欄に貼り付けます。そのドメインがフリーメールのものかどうかと、どのサービスのものかが表示されます。',
    'サービスのドメインを探すには、フィルターにサービス名を入力します。たとえば hotmail や gmx です。Outlook.comだけでも、国別のドメインが数十あります。',
    '表計算ソフト、CRM、自社のプログラムで使うには、一覧をダウンロードします。CSVには、ドメイン、サービス名、運営会社、国、種類が含まれます。',
  ],
  howNote: 'ダウンロードの内容は、設定したフィルターに従います。たとえば「インターネットプロバイダー」を選ぶと、そのドメインだけをダウンロードできます。',
  imageAlt: 'さまざまなフリーメールのメールアドレスを、ドメインの一覧に整理する様子のイラスト。',
  coverTitle: 'この一覧に含まれるもの、含まれないもの',
  coverParas: [
    'このフリーメールの一覧は、3種類のサービスを対象にしています。1つ目は、Gmail、Outlook.com、Yahoo Mail、GMX、mail.comなどの無料Webメールです。2つ目は、Proton MailやTutaなど、暗号化に対応したプライバシー重視のサービスです。3つ目は、Comcast、AT&T、BT、Orangeなど、大手インターネットプロバイダーの個人向けメールボックスです。これらは無料ではなく家庭用インターネット契約に付いてくるものですが、個人のメールアドレスであることに変わりはありません。',
    '追加する前に、すべてのドメインの[MXレコード](/mx-lookup)を確認しました。サービスが自社のメールサーバーを運用している場合は、レコードがそのサーバーを指していることを条件にしました。メールを受け付けなくなった古いドメインや、現在は別の会社が所有しているドメインは除外しています。そのため、yahoo.ch や aol.ca など一部の古い国別ドメインは含まれていません。',
    '使い捨てメールアドレス（捨てアド）のサービスは、この一覧に含まれていません。これらは数分〜数時間で期限が切れる使い捨ての受信トレイを提供するサービスで、別に[使い捨てメールアドレスのサービス一覧](/disposable-email-providers)があります。',
  ],
  compareTitle: 'フリーメールのサービス比較',
  compareIntro:
    '主なメールサービスの無料プランで使える内容をまとめました。すべての数値は各サービスの公式ページに基づき、2026年10月12日に確認したものです。無料プランの内容は頻繁に変わるため、決める前に各サービスのサイトを確認してください。',
  thProvider: 'サービス',
  thStorage: '無料の容量',
  thNotes: '備考',
  compare: {
    Gmail: {
      storage: '15 GB（Google ドライブ、Google フォトと共有）',
      notes:
        '広告が表示されますが、Googleは広告の選択にメールの内容を使わないとしています。2026年3月以降、一部の新規アカウントは5 GBから始まり、電話番号を確認すると残りの10 GBが追加されます。',
    },
    'Outlook.com': {
      storage: 'メール用に15 GB',
      notes: '添付ファイルは、別枠の5 GBのクラウドストレージに計上されます。Microsoft 365を有料で契約しない限り、広告が表示されます。',
    },
    'Yahoo Mail': {
      storage: '米国では20 GB',
      notes: '国によっては容量が少なくなります。英国のユーザーには、2026年に15 GBへ削減すると通知されました。Yahoo Mail Plusでは広告が表示されません。',
    },
    'iCloud Mail': {
      storage: '5 GB（iCloudの他の機能と共有）',
      notes: 'すべてのApple Accountに付いています。独自ドメインを使うには、有料のiCloud+プランが必要です。',
    },
    'Proton Mail': {
      storage: '500 MB（初期設定の手順を終えると1 GBに増加）',
      notes: 'エンドツーエンドで暗号化されます。無料プランでは、メールアドレスは1つ、送信は1日150通までです。',
    },
    Tuta: {
      storage: '1 GB',
      notes: 'エンドツーエンドで暗号化されます。無料プランでは、追加のメールアドレスや独自ドメインは使えません。',
    },
    'Zoho Mail': {
      storage: '1ユーザーあたり5 GB（最大5ユーザー）',
      notes:
        '無料プランとしては珍しく、独自ドメインで使えます。利用できるのはWebとアプリだけで、IMAPやPOPには対応していません。すべての地域で提供されているわけではありません。広告はありません。',
    },
    GMX: {
      storage: 'gmx.com と gmx.co.uk で65 GB',
      notes: '追加のメールアドレスを最大10個まで作れます。gmx.de と gmx.net のドイツ向けサービスは無料プランの容量が小さく、1 GBです。',
    },
    'mail.com': {
      storage: '65 GB（別に2 GBのクラウドストレージ）',
      notes: 'email.com、usa.com、consultant.comなど、100以上のドメインからメールアドレスを選べます。Premiumでは広告が表示されません。',
    },
  },
  bestTitle: '自分に合ったメールサービスはどれですか？',
  bestIntro: 'すべての人にとって一番のメールサービスはありません。どのメールアカウントが合うかは、何に使うかによって決まります。',
  bestList: [
    '無料の容量を重視するなら、GMXとmail.comがそれぞれ65 GBです。',
    'プライバシーを重視するなら、Proton MailとTutaは無料プランでもメールをエンドツーエンドで暗号化します。',
    '独自ドメインを無料で使いたいなら、Zoho MailのForever Freeプランが最大5人まで対応しています。',
    'Apple、Google、Microsoftのアプリをすでに使っているなら、iCloud Mail、Gmail、Outlook.comがそれぞれのアプリと連携します。',
  ],
  bestNote:
    '仕事で使う場合も、最初は無料のメールアドレスで問題ありません。ただし、企業向けのフォームでは無料のメールアドレスを受け付けないことがあります。理由は、下のBtoBフォームの項目で説明しています。',
  signupTitle: '今でも新規登録できるドメイン',
  signupIntro:
    '大手のサービスは長年のうちにドメインを増やしてきましたが、新規アカウントで選べるのはその一部だけです。それ以外のドメインも、すでに持っている人は引き続き使えます。',
  thNewAccounts: '新規アカウント',
  thOtherDomains: '使用中の他のドメイン',
  newAccountsLabel: '新規アカウント：',
  alsoInUseLabel: '使用中の他のドメイン：',
  signupOther: {
    Gmail: 'googlemail.com（同じメールボックスに届きます）',
    'Outlook.com': 'live.com、msn.com、hotmail.co.uk などの国別ドメイン',
    'Yahoo Mail': 'ymail.com、rocketmail.com、yahoo.co.uk などの国別ドメイン',
    'iCloud Mail': 'me.com、mac.com',
    'Proton Mail': 'protonmail.ch。pm.me は有料プランで使えます。',
    Tuta: 'tuta.com は有料プランで使えます。',
    GMX: 'その他の国別ドメイン',
    'mail.com': 'ほかに約140のドメインがあり、すべて新規アカウントで選べます。',
  },
  signupNote:
    'BtoB向けのフィルターでは、この違いは問題になりません。me.com や ymail.com のメールアドレスも、gmail.com のものと同じく個人のメールアドレスです。そのため、この一覧には両方を含めています。',
  closeTitle: '使われていない無料アカウントは閉鎖されます',
  closeIntro: 'フリーメールのサービスは、使われていないアカウントを削除します。無料のメールアドレスが多い古いリストで、時間とともにバウンスが増える理由の1つです。',
  closeList: [
    'Gmail：2年間使われていないアカウントは、Googleが削除することがあります。',
    'Outlook.com：受信トレイを維持するには、少なくとも年に1回サインインする必要があります。2年間サインインがないと、アカウントは閉鎖されます。',
    'Yahoo Mail：12か月使われないとメールボックスが削除され、18か月でアカウントが削除されます。',
    'Proton Mail：無料アカウントは、12か月間利用がないと削除されます。',
    'Tuta：無料アカウントは、6か月間ログインがないと削除されます。',
  ],
  closeNote:
    '古いリストにメールを送る前に、リストを確認してください。[メールアドレスの一括検証](/bulk-email-verifier)で、存在しなくなったメールアドレスを見つけられます。1件だけなら[メールアドレスの存在確認](/email-checker)で同じ確認ができます。',
  b2bTitle: 'BtoBフォームとフリーメールのドメイン',
  b2bParas: [
    '多くのBtoB企業は、仕事用のメールアドレスでの登録だけを受け付けたいと考えています。たとえばHubSpotには「Block free email providers」というフォーム設定があり、フリーメールのドメインを受け付けないようにできます。上のCSVを使えば、自社のフォームのコードでも同じことができます。',
    'ただし、ブロックにはデメリットもあります。個人事業主や小規模な会社の中には、すべての業務をGmailやOutlook.comのメールアドレスで行っているところもあります。一律にブロックすると、こうした人たちを断ることになります。より緩やかな方法は、メールアドレスを受け付けた上でCRMで個人用として印を付け、営業チームに判断を任せることです。',
    '無料のメールアドレスは、偽物のメールアドレスではありません。GmailやOutlook.comのメールボックスは恒久的なもので、メールを受信します。数分〜数時間で使えなくなるのは使い捨てメールアドレス（捨てアド）で、これは[捨てメアド判定ツール](/disposable-email-checker)で見つけられます。',
  ],
  dupesTitle: '重複したフリーメールのメールアドレスを見つける',
  dupesIntro: '一部のサービスでは、表記の異なる複数のメールアドレスが同じ受信トレイに届きます。リストから重複を取り除くときに、この点が重要になります。',
  dupesList: [
    'Gmailは名前の部分のドットを無視します。そのため、john.smith@gmail.com と johnsmith@gmail.com は同じ受信トレイです。これは個人のGmailの場合で、Google Workspaceのアカウントには当てはまりません。',
    'gmail.com と googlemail.com は同じメールボックスに届きます。',
    'john+news@gmail.com のようなプラス記号付きのメールアドレスも、メインの受信トレイに届きます。',
    'Yandexは、名前の部分のドットとハイフンを同じものとして扱います。',
  ],
  faqTitle: 'よくある質問',
  faqs: [
    {
      q: 'メールサービスプロバイダーとは何ですか？',
      a: 'メールボックスを運営する会社です。メールアドレスを発行し、メールを保存し、送受信できるようにします。Gmail、Outlook.com、Proton Mailはメールサービスプロバイダーです。同じ言葉は、Mailchimpのような一斉配信サービスにも使われます。こちらは受信トレイを提供するのではなく、ニュースレターを送るサービスです。',
    },
    {
      q: '容量が最も大きい無料メールサービスはどれですか？',
      a: 'このページで比較したサービスの中では、GMX（gmx.com と gmx.co.uk）とmail.comが最も大きく、それぞれ65 GBです。Yahooは米国で20 GB、GmailとOutlook.comは15 GBです。',
    },
    {
      q: 'プライバシーを最も重視したフリーメールはどれですか？',
      a: 'Proton MailとTutaは、無料プランでもメールをエンドツーエンドで暗号化します。Gmail、Outlook.com、iCloud Mailは、無料アカウントでエンドツーエンド暗号化を提供していません。',
    },
    {
      q: '独自ドメインのメールアドレスを無料で持てますか？',
      a: 'Zoho MailのForever Freeプランは、独自ドメイン1つで最大5ユーザーまで、WebとZohoのアプリで使えます。GmailとProton Mailでは有料プランが必要で、iCloud MailではiCloud+が必要です。',
    },
    {
      q: '無料のメールアドレスと使い捨てメールアドレスは同じですか？',
      a: '違います。name@gmail.com のような無料のメールアドレスは、恒久的なメールボックスです。使い捨てメールアドレスは数分〜数時間で使えなくなり、登録フォームを通過するために使われます。この一覧は、恒久的なメールサービスだけを対象にしています。',
    },
    {
      q: 'フォームでフリーメールのドメインをブロックするには？',
      a: 'HubSpotでは、フォームの設定で「Block free email providers」をオンにします。自社のコードでは、上のCSVまたはJSONをダウンロードし、ドメインが一覧にあるメールアドレスを拒否するか、印を付けてください。',
    },
    {
      q: '無料のメールアカウントには期限がありますか？',
      a: 'はい、使われていない場合は期限があります。Googleは、2年間使われていないGmailアカウントを削除することがあります。Yahooは12か月でメールボックスを削除します。Outlook.comは、年に1回サインインしないと受信トレイを閉鎖します。',
    },
    {
      q: '知っているドメインが一覧にないのはなぜですか？',
      a: 'そのドメインがメールを受信しなくなったか、別の会社のものになったか、まだ追加していない小規模なサービスである可能性があります。一覧を確認したときに、MXレコードが機能していないドメインは除外しました。',
    },
  ],
  ctaHeadline: 'サービス名だけでなく、各メールアドレスが存在するかを確認しましょう',
}

export const FREE_PROVIDERS_PAGE_STRINGS: Record<Locale, FreeProvidersPageStrings> = {
  en,
  es,
  de,
  fr,
  it,
  'pt-br': ptBr,
  nl,
  pl,
  id,
  ja,
}
