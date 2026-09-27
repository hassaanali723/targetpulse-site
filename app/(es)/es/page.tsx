import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
import { MCP, REVIEW_BADGES, REVIEW_WALL } from '@/components/l10n/homeShared'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Spanish home. No head term of its own in the data (the demand sits on
// /es/validar-correo); emailverify.io's /es/ home ranks for 32 Spanish strings,
// so the features block names the verify nouns once. One page for every
// Spanish-speaking country. The hero sends the visitor to the free checker
// first and to sign-up second.

const DESC =
  'Servicio de verificación de correo que devuelve válido o no válido en dominios catch-all, no "arriesgado". 98,5 % de precisión, bulk, API, 1.000 créditos.'

export const metadata: Metadata = {
  title: { absolute: 'Servicio de Verificación de Correo Electrónico | Giggal.ai' },
  description: DESC,
  alternates: { canonical: '/es', languages: hreflangAlternates('home') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_LA',
    title: 'Servicio de verificación de correo electrónico',
    description: DESC,
    url: 'https://giggal.ai/es',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificación de correo' }],
  },
  twitter: { card: 'summary_large_image', title: 'Servicio de verificación de correo electrónico', description: DESC },
}

const heroLink = 'text-white font-semibold underline decoration-emerald-400 decoration-2 underline-offset-4 hover:decoration-white'
const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'Verificación de correo electrónico',
  h1Accent: 'que resuelve el catch-all',
  heroSub: (
    <>
      Servicio de verificación de correo con validación en bloque: descubre qué direcciones son reales, incluso en{' '}
      <Link href="/es/verificacion-catch-all" className={heroLink}>dominios catch-all</Link>.
    </>
  ),
  rating: { score: '4,9', on: 'en', reviews: '(129 reseñas)' },
  email: { label: 'Correo que quieres validar', placeholder: 'nombre@empresa.com', button: 'Validar gratis' },
  listQuestion: '¿Vas a limpiar una lista entera?',
  listCta: 'Consigue 1.000 validaciones de correo gratis',
  noCard: 'Sin tarjeta.',
  stats: [
    { n: '500M', suf: '+', l: 'Correos verificados' },
    { n: '98,5', suf: '\u00a0%', l: 'Precisión en listas de empresa' },
    { pre: '<\u00a0', n: '3', suf: '\u00a0%', l: 'Tasa de rebote tras la limpieza' },
    { n: '1.000', l: 'Créditos gratis, sin tarjeta' },
  ],
  bulk: {
    id: 'bloque',
    title: 'Validación de correo en bloque para toda tu lista',
    sub: 'Sube tu lista una sola vez y comprobamos todas sus direcciones.',
    points: [
      'Válido o no válido para cada dirección, sin escribir al destinatario',
      'Las direcciones catch-all también reciben una respuesta real',
      'CSV o Excel, hasta 50.000 direcciones por archivo',
      'Descarga la lista limpia en cuanto termine',
    ],
  },
  catchAll: {
    title: 'Por qué las direcciones catch-all merecen atención',
    intro: (
      <>
        Algunos servidores de correo de empresa aceptan cualquier dirección, real o inventada. Es lo que se llama un{' '}
        <Link href="/es/verificacion-catch-all" className={link}>dominio catch-all</Link>. La mayoría de los
        verificadores no nota la diferencia, así que marca estos correos como &quot;arriesgado&quot; y te deja a ti
        la decisión.
      </>
    ),
    others: 'La mayoría de los verificadores',
    othersDetail: 'Catch-all, sin respuesta clara',
    ourDetail: 'Catch-all, buzón encontrado',
    risky: 'Arriesgado',
    deliverable: 'Entregable',
    othersText: 'Ahora te toca a ti: enviar y arriesgarte a un rebote, o borrar un contacto que quizá sea real.',
    ourText: 'Sabes que es real y lo envías sin dudar.',
  },
  features: {
    title: 'Verificador y validador de correo: limpieza en bloque, API e integraciones con un solo saldo',
    intro: 'Sube una lista, llama a la API o conecta tu CRM: cada camino ejecuta la misma verificación de correo electrónico.',
    items: [
      { title: 'Limpieza de listas en bloque', body: 'Sube un archivo CSV o Excel y obtén los resultados en minutos.', points: ['Hasta 50.000 direcciones por archivo', 'Descarga la lista limpia en CSV'], link: 'Limpia una lista gratis' },
      { title: 'Verificación catch-all', body: 'Una respuesta real en dominios catch-all, no "desconocido".', points: ['Cuesta un crédito, como cualquier otra verificación', 'Funciona detrás de gateways como Mimecast y Proofpoint'], link: 'Cómo funciona la verificación catch-all' },
      { title: 'API para desarrolladores', body: 'Valida direcciones en tus formularios de registro y en tus apps.', points: ['Una dirección o una lista entera por llamada', 'Claves de API desde tu panel'], link: 'Documentación de la API (en inglés)' },
      { title: 'Integraciones con CRM y apps', body: 'Envía los contactos limpios a HubSpot, Mailchimp y más.', points: ['Funciona con las herramientas que ya usas', 'Zapier y n8n para todo lo demás'], link: 'Ver todas las integraciones' },
      { title: 'Pago por uso', body: 'Todos los precios son públicos. Los créditos no caducan.', points: ['Sin compromiso mensual', 'Compra más solo cuando lo necesites'], link: 'Ver todos los precios' },
      { title: 'Soporte prioritario', body: '¿Necesitas ayuda? Nuestros ingenieros te atienden directamente.', points: ['Personas reales, no un bot', 'Escríbenos por correo o desde el formulario de contacto'], link: 'Escribir a soporte' },
    ],
    preview: {
      done: 'Listo',
      deliverable: 'Entregable',
      undeliverable: 'No entregable',
      otherTools: 'Otras herramientas',
      risky: 'Arriesgado',
      credit: '1 crédito',
      email: '1 correo',
      creditNote: 'Las verificaciones catch-all cuestan lo mismo.',
      reply: '24 horas',
      replyNote: 'Nuestro tiempo de respuesta habitual.',
    },
  },
  pricing: {
    id: 'precios',
    claimTop: 'Precio bajo.',
    claimBottom: 'Gran relación calidad-precio.',
    fallbackTitle: 'Precios simples, en dólares',
    priceLine: (p) => `${p} por 10.000 correos, verificación catch-all incluida.`,
    claim: { before: '', link: 'Compáralo con otros verificadores', after: '.' },
    text: 'Pagas solo lo que usas. Los créditos no caducan.',
  },
  switcher: {
    id: 'alternativas',
    title: '¿Vienes de otro verificador?',
    intro: 'Compara Giggal.ai con otras herramientas de verificación de correo: catch-all, precios y precisión.',
    items: [
      { name: 'ZeroBounce', href: '/es/alternativa-a-zerobounce', blurb: 'Resuelve las direcciones catch-all que ZeroBounce devuelve como desconocidas.' },
      { name: 'NeverBounce', href: '/es/alternativa-a-neverbounce', blurb: 'Pago por uso, con créditos que nunca caducan.' },
      { name: 'Hunter', href: '/es/alternativa-a-hunter', blurb: 'Un verificador especializado en lugar de un buscador de correos con verificación incluida.' },
      { name: 'Snov.io', href: '/es/alternativa-a-snovio', blurb: 'Un verificador especializado, no un módulo dentro de una plataforma de prospección.' },
      { name: 'ZeroBounce vs NeverBounce', href: '/es/comparativa/zerobounce-vs-neverbounce', blurb: 'Sus diferencias en catch-all, precios y créditos.' },
    ],
    all: 'Compara los 28 verificadores (en inglés)',
  },
  integrations: {
    title: 'Conecta tus herramientas de marketing',
    sub: 'Giggal.ai se integra con los principales CRM y plataformas de email marketing y sincroniza automáticamente los contactos limpios.',
    more: '+80 más',
    alt: (n) => `Integración de ${n} con Giggal.ai para verificar correos`,
  },
  reviewBadges: REVIEW_BADGES.es,
  reviewWall: REVIEW_WALL.es,
  mcp: MCP.es,
  faq: {
    title: 'Preguntas frecuentes',
    sub: 'Respuestas breves sobre catch-all, precisión, precios y configuración.',
    more: '¿Tienes más preguntas?',
    moreLink: 'Escríbenos',
    items: [
      {
        q: '¿Qué hace Giggal.ai distinto de otros verificadores?',
        a: 'Resuelve las direcciones catch-all y las protegidas por gateways de seguridad (Mimecast, Proofpoint, Barracuda) con un resultado claro, válido o no válido, en lugar de la etiqueta "arriesgado" con la que otras herramientas se rinden. En una lista B2B esas direcciones son cerca de un tercio del total.',
      },
      {
        q: '¿Qué tan precisa es la verificación?',
        a: 'Un 98,5 % en listas de empresa, con una tasa de rebote que se mantiene por debajo del 3 % tras la limpieza. En los resultados "desconocido" se reembolsan los créditos.',
      },
      {
        q: '¿Cómo funcionan los créditos?',
        a: 'Una verificación consume un crédito, sea cual sea el tipo de dirección: catch-all y gateway incluidos. Los créditos no caducan. Los primeros 1.000 son gratis, sin tarjeta.',
      },
      {
        q: '¿Puedo subir un archivo?',
        a: 'Sí: CSV o Excel, hasta 50.000 direcciones por archivo. Los resultados llegan en minutos incluso en listas grandes, y la lista limpia se descarga en CSV.',
      },
      {
        q: '¿Hay una API?',
        a: 'Sí, una API REST con validación individual y en bloque, más un servidor MCP para usar la verificación desde Claude, ChatGPT y Cursor. La documentación está en inglés.',
      },
      {
        q: '¿Puedo probar un solo correo sin registrarme?',
        a: 'Sí, con el verificador de correo gratis: sin registro, sin tarjeta, sin enviar ningún mensaje al destinatario.',
      },
    ],
  },
  ctaHeadline: 'Empieza con 1.000 validaciones gratis',
}

export default function HomeEs() {
  return <HomeL10n locale="es" content={content} />
}
