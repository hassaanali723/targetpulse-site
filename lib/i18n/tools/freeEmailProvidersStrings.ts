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

export const FREE_PROVIDERS_PAGE_STRINGS: Partial<Record<Locale, FreeProvidersPageStrings>> & { en: FreeProvidersPageStrings } = { en, es }
