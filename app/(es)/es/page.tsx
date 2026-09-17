import type { Metadata } from 'next'
import Link from 'next/link'
import HomeL10n, { type HomeContent } from '@/components/l10n/Home'
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

const link = 'text-indigo-600 font-bold hover:underline'

const content: HomeContent = {
  h1Lead: 'Verificación de correo electrónico',
  h1Accent: 'que resuelve el catch-all',
  para1: (
    <>
      Un servicio de verificación de correo que comprueba el buzón real, no solo la sintaxis. Tasa de rebote{' '}
      <strong className="text-indigo-600 font-extrabold">por debajo del 3 %</strong>, y el{' '}
      <strong className="text-slate-900 font-extrabold">30 % de cada lista B2B</strong> que otras herramientas
      marcan como &quot;arriesgado&quot; vuelve a ser entregable.
    </>
  ),
  para2: (
    <>
      <a href="#bloque" className={link}>Validación en bloque</a> hasta 50.000 direcciones por archivo, más una API.
      Funciona en{' '}
      <Link href="/es/verificacion-catch-all" className={link}>dominios catch-all</Link>.
    </>
  ),
  freeTitle: '1.000 validaciones gratis',
  freeText: 'Empieza a limpiar tu lista ahora mismo. Sin tarjeta.',
  ctaPrimary: { label: 'Validar un correo gratis', href: '/es/validar-correo' },
  ctaSecondary: { label: 'Ver precios', href: '/es/precios' },
  proof: '4,8 en G2 · más de 500 millones de correos verificados',
  stats: [
    { n: '500M+', l: 'Correos verificados' },
    { n: '98,5 %', l: 'Precisión en listas de empresa' },
    { n: '< 3 %', l: 'Tasa de rebote tras la limpieza' },
    { n: '1.000', l: 'Créditos gratis, sin tarjeta' },
  ],
  consoleTitle: 'Verifica un correo en tiempo real',
  consoleText: 'El mismo motor que la validación en bloque, una dirección a la vez. Gratis y sin registro.',
  catchAll: {
    title: 'Por qué las direcciones catch-all necesitan un veredicto real',
    intro: (
      <>
        Un{' '}
        <Link href="/es/verificacion-catch-all" className={link}>dominio catch-all</Link> acepta correo para
        cualquier dirección, exista o no, así que la respuesta SMTP en la que se basan las herramientas
        estándar no dice nada. Ellas escriben &quot;arriesgado&quot; y te dejan apostando a ciegas con un
        tercio de la lista:
      </>
    ),
    standardLabel: 'Verificadores estándar',
    standardStat: '35 %',
    standardCaption: 'Riesgo medio de rebote',
    standardText: 'Te obligan a tirar contactos válidos o a arriesgar el bloqueo de tus dominios de envío.',
    verifiedBadge: 'Verificado',
    verifiedStat: '< 3 %',
    verifiedCaption: 'Rebotes en el envío',
    verifiedText: 'Identifica los buzones de empresa activos para que hagas outreach con la certeza de ser leído.',
  },
  featuresId: 'bloque',
  featuresTitle: 'Verificador y validador de correo: limpieza en bloque, API e integraciones con un solo saldo',
  featuresText: 'Sube una lista, llama a la API o conecta tu CRM: cada camino ejecuta la misma verificación de correo electrónico.',
  features: [
    { title: 'Limpieza de listas en bloque', body: 'Sube un archivo CSV o TXT y valida miles de contactos en minutos, con los duplicados eliminados.' },
    { title: 'Verificación catch-all', body: 'Confirma la entregabilidad en dominios de empresa catch-all que las comprobaciones estándar marcan como desconocido.' },
    { title: 'Gateways de seguridad', body: 'Verifica buzones detrás de Proofpoint, Mimecast y Barracuda, donde la mayoría de los verificadores se detiene.' },
    { title: 'API para desarrolladores', body: 'Integra la validación en tiempo real en formularios de registro o en tus aplicaciones.' },
    { title: 'Integraciones', body: 'Sincroniza los contactos verificados con HubSpot, Mailchimp, Zapier, n8n y las herramientas de outreach habituales.' },
    { title: 'Precios públicos', body: 'Cada tramo de volumen está publicado, por uso o en suscripción con un 10 % de descuento.' },
  ],
  pricingId: 'precios',
  pricingTitle: 'Precios simples, en dólares',
  pricingText: 'Pagas solo lo que usas. Los créditos no caducan.',
  contactHref: '/es/contacto',
  faqTitle: 'Preguntas frecuentes',
  faqMore: '¿Más preguntas?',
  faqMoreLink: 'Escríbenos',
  faq: [
    {
      q: '¿Qué hace Giggal.ai distinto de otros verificadores?',
      a: 'Resuelve las direcciones catch-all y las protegidas por gateways de seguridad (Mimecast, Proofpoint, Barracuda) con un veredicto claro, válido o no válido, en lugar de la etiqueta "arriesgado" con la que otras herramientas se rinden. En una lista B2B esas direcciones son cerca de un tercio del total.',
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
      a: 'Sí: CSV, TXT o Excel. Los resultados llegan en minutos incluso en listas grandes, con exportación a CSV, Excel o JSON y los duplicados eliminados.',
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
  ctaHeadline: 'Empieza con 1.000 validaciones gratis',
}

export default function HomeEs() {
  return <HomeL10n locale="es" content={content} />
}
