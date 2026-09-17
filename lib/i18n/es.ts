// Spanish strings for the shared chrome and the two interactive components.
// One Spanish for every country (plans/10 section 2.2): neutral vocabulary,
// "correo electrónico" and "correo" as the Latin American pages that rank use,
// "email" kept where Spain types it. Register: "tú". Technical terms stay:
// catch-all, SMTP, MX, DNS, bounce (rebote).

export const SIGNUP_URL = 'https://emailverifier.giggal.ai/sign-up'
export const SIGNIN_URL = 'https://emailverifier.giggal.ai/sign-in'

export const nav = {
  primary: { name: 'Validar correo', href: '/es/validar-correo' },
  links: [
    { name: 'Catch-all', href: '/es/verificacion-catch-all' },
    { name: 'Integraciones', href: '/es/integraciones' },
    { name: 'Precios', href: '/es/precios' },
    { name: 'Contacto', href: '/es/contacto' },
  ],
  login: 'Iniciar sesión',
  signup: 'Regístrate gratis',
  menu: 'Abrir el menú',
  homeAria: 'Giggal.ai, página de inicio',
}

export const footer = {
  blurb:
    'Verificación SMTP de alto rendimiento para que tus campañas lleguen a buzones reales, incluidos los dominios catch-all y accept-all que otras herramientas se saltan.',
  solutions: {
    heading: 'Soluciones',
    links: [
      { name: 'Verificación catch-all', href: '/es/verificacion-catch-all' },
      { name: 'Servidor MCP (en inglés)', href: '/mcp' },
    ],
  },
  resources: {
    heading: 'Recursos',
    links: [
      { name: 'Blog (en inglés)', href: '/blog' },
      { name: 'Comparativa de verificadores (en inglés)', href: '/alternatives' },
      { name: 'Documentación de la API (en inglés)', href: '/public/docs' },
    ],
  },
  product: {
    heading: 'Producto',
    links: [
      { name: 'Validar correo gratis', href: '/es/validar-correo' },
      { name: '¿Cómo saber si un correo existe?', href: '/es/validar-correo/como-saber-si-un-correo-existe' },
      { name: 'Integraciones', href: '/es/integraciones' },
      { name: 'Precios', href: '/es/precios' },
      { name: 'Regístrate gratis', href: '/es/registro' },
    ],
  },
  company: {
    heading: 'Empresa',
    links: [
      { name: 'Contacto', href: '/es/contacto' },
      { name: 'Programa de afiliados (en inglés)', href: '/affiliates' },
    ],
  },
  legal: [
    { name: 'Términos del servicio', href: '/es/terminos' },
    { name: 'Privacidad', href: '/es/privacidad' },
    { name: 'Reembolsos', href: '/es/reembolsos' },
  ],
  legalHeading: 'Legal',
  rights: 'Todos los derechos reservados.',
  language: 'Idioma',
}

export const announcement = {
  text: 'Buzones dedicados de Google y Outlook con',
  brand: 'PureMail',
  tail: ', 2,90 $ por buzón al mes.',
  dismiss: 'Cerrar aviso',
}

export const cta = {
  headline: 'Valida una lista entera y compara los resultados',
  offer: '1.000 créditos gratis, sin tarjeta.',
  button: 'Empieza a validar gratis',
  trust: ['Prueba gratuita', 'Los créditos no caducan', 'Reembolso de los Desconocidos'],
}

export const consoleStrings = {
  header: 'Prueba en tiempo real',
  live: 'Sonda activa',
  actionLabel: 'Acción',
  actionTitle: 'Handshake con el destinatario',
  placeholder: 'Escribe un correo electrónico para validarlo...',
  ariaInput: 'Correo electrónico a validar',
  button: 'Validar',
  buttonRunning: 'Validando',
  diagnostics: 'Estado de las comprobaciones',
  checks: {
    basic: 'Comprobaciones básicas',
    dns: 'Búsqueda de servidores de correo',
    catchall: 'Verificación catch-all',
    mailbox: 'Existencia del buzón',
  },
  idleTitle: 'Listo para validar',
  idleText: 'Escribe una dirección de empresa o personal para lanzar una sonda DNS y SMTP en vivo.',
  spawning: 'INICIANDO COMPROBACIONES...',
  initLog: '[INIT] Abriendo el socket seguro de verificación...',
  limitTitle: 'Límite diario alcanzado',
  limitText: 'Ya usaste las validaciones gratis de hoy. Regístrate para recibir 1.000 créditos gratis, sin tarjeta, y valida toda tu lista.',
  limitButton: 'Conseguir 1.000 créditos gratis',
  errorTitle: 'Error de validación',
  errorFailed: 'La validación no se completó. Inténtalo de nuevo en unos segundos.',
  errorUnreachable: 'El servicio de validación no responde.',
  invalidSyntax: 'Esto no es una dirección de correo válida.',
  isCatchAll: 'es un dominio catch-all',
  notCatchAll: 'no es un dominio catch-all',
  catchAllText: 'Acepta correo para cualquier dirección, así que una comprobación SMTP estándar no puede decir si este buzón existe.',
  notCatchAllText: 'Aquí una comprobación estándar es fiable.',
  resultLabel: 'Resultado',
  verdictTitle: {
    deliverable: 'Válido',
    undeliverable: 'No válido',
    risky: 'Arriesgado',
    unknown: 'Desconocido',
    catchall: 'Catch-all',
    error: 'Error',
  },
  verdictLine: {
    deliverable: 'Este buzón existe.',
    undeliverable: 'Este buzón no existe.',
    risky: 'El servidor acepta correo, pero no podemos confirmar del todo este buzón.',
    unknown: 'No pudimos confirmar este buzón.',
    catchall: 'No pudimos confirmar este buzón.',
    error: '',
  },
}

export const pricing = {
  payg: 'Pago por uso (una sola vez)',
  subscription: 'Suscripción mensual',
  save: 'Ahorra un 10 %',
  colVolume: 'Créditos',
  colRate: 'Precio por crédito',
  colSave: 'Ahorro',
  colTotal: 'Precio total',
  credits: 'créditos',
  popular: 'El más elegido',
  perCredit: '/ crédito',
  oneTime: 'una sola vez',
  perMonth: '/mes',
  saveBadge: 'Ahorras un {pct} %',
  buy: 'Comprar',
  subscribe: 'Suscribirse',
  noDiscount: 'Sin descuento',
  mobVolume: 'Créditos',
  mobRate: 'Precio',
  mobSave: 'Ahorro',
  mobPrice: 'Total',
  numberLocale: 'es-ES',
  currencySuffix: true,
  formula: '1 validación de correo',
  formulaNote: '(verificación catch-all/accept-all incluida)',
  formulaCredit: '1 crédito',
  customTitle: '¿Necesitas un volumen a medida?',
  customText: 'Ofrecemos planes personalizados y pools de IP dedicados para quien valida grandes volúmenes.',
  customButton: 'Habla con nosotros',
}

export const notFound = {
  kicker: '404',
  title: 'Esta página no existe',
  text: 'La dirección puede estar mal escrita o la página se movió. El validador de correo gratis y los precios están a un clic.',
  primary: 'Validar correo gratis',
  secondary: 'Volver al inicio',
}

export const legal = {
  updated: 'Última actualización',
  notice: 'Esta es una traducción de cortesía. En caso de diferencias, prevalece la',
  noticeLink: 'versión en inglés',
  noticeTail: ', que es la única jurídicamente vinculante.',
  breadcrumbHome: 'Inicio',
}

/** Spanish number formatting: 10.000 and 9,90 $ (currency stays USD). */
export function esNumber(n: number, decimals = 0): string {
  return n.toLocaleString('es-ES', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
}
export function esUsd(n: number, decimals = 2): string {
  return `${esNumber(n, decimals)} $`
}

/** 2026-09-13 -> "13 de septiembre de 2026" */
export function formatDateEs(iso: string): string {
  if (!iso) return ''
  const [y, m, d] = iso.split('-').map(Number)
  const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  if (!y || !m || !d) return iso
  return `${d} de ${months[m - 1]} de ${y}`
}
