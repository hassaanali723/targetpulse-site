import type { Metadata } from 'next'
import Link from 'next/link'
import CatchAllPageL10n, { type CatchAllContent } from '@/components/l10n/CatchAllPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/es/verificacion-catch-all'
const DESC =
  'Verificación catch-all que devuelve válido o no válido en dominios accept-all, también tras Mimecast y Proofpoint. 98,5 % de precisión, 1 crédito por correo.'

export const metadata: Metadata = {
  title: { absolute: 'Verificación Catch-All: Válido, No Arriesgado | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('catchall') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_LA',
    title: 'Verificación catch-all: válido, no arriesgado',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificación de correo' }],
  },
}

const content: CatchAllContent = {
  path: PATH,
  crumb: 'Verificación catch-all',
  h1Accent: 'Verificación catch-all',
  h1Tail: 'con una respuesta real en cada dirección',
  intro:
    'La mayoría de los verificadores se detiene ante los dominios catch-all y accept-all. Giggal.ai confirma si cada buzón existe de verdad, incluidos los que están detrás de gateways de seguridad como Mimecast y Proofpoint, con un 98,5 % de precisión.',
  toolLine: (
    <>
      Para una sola dirección, usa el{' '}
      <Link href="/es/validar-correo" className="text-indigo-600 font-bold hover:underline">verificador de correo gratis</Link>.
    </>
  ),
  ctaPrimary: 'Empieza a verificar los catch-all',
  ctaSecondary: { label: 'Ver precios', href: '/es/precios' },
  ctaNote: '1.000 créditos gratis para empezar. Sin tarjeta.',
  card: {
    kicker: 'Verificación profunda activa', title: 'Resultados de la lista', file: 'contactos_2026.csv',
    valid: '39.113', invalid: '10.508', risky: '0',
    note: 'En una lista típica cerca del 30 % de las direcciones está en dominios catch-all. Las verificamos una por una: la mayoría resulta válida.',
    labels: { valid: 'Válidos', invalid: 'No válidos', risky: 'Arriesgados' },
  },
  whatKicker: 'El contexto',
  whatTitle: 'Qué es un dominio catch-all',
  whatParas: [
    'Un dominio catch-all acepta todo el correo que recibe, incluso para direcciones que no existen. El servidor responde con una aceptación genérica a cualquier dirección, así que una comprobación SMTP normal no puede saber si detrás hay un buzón real.',
    'En una lista comercial típica cerca del 30 % de los contactos está en dominios catch-all. La mayoría de las herramientas reconoce el patrón, se rinde y marca todo como arriesgado o desconocido. Te quedas con una larga lista de contactos que no puedes usar con seguridad.',
    'Quedan dos opciones, las dos malas: enviar y arriesgar rebotes, spam traps y una reputación dañada, o borrar y perder clientes reales. La verificación catch-all resuelve el problema comprobando la existencia real del buzón en lugar de adivinar.',
  ],
  sameH3: 'Catch-all y accept-all son lo mismo',
  sameParas: [
    'Algunos verificadores escriben "accept all", otros "catch-all" o "catchall". Describen una única configuración: un dominio cuyo servidor de correo responde 250 OK a cualquier destinatario. Sea cual sea la etiqueta que usó tu última herramienta, la solución es la misma y es la de esta página.',
  ],
  howKicker: 'Cómo funciona',
  howTitle: 'Cómo verifica Giggal.ai los correos catch-all',
  howText: 'Cada dirección catch-all pasa por varios niveles de verificación que se combinan en un único resultado claro. Ves válido o no válido, no un informe técnico.',
  signals: [
    { title: 'Verificación profunda del buzón', body: 'Confirmamos la existencia real de cada buzón, no solo que el dominio acepte todo. Donde una comprobación SMTP estándar ve una aceptación genérica y se detiene, nosotros seguimos hasta una respuesta real.' },
    { title: 'Señales de confianza del dominio', body: 'Analizamos la configuración de cada dominio: registros SPF, DKIM y DMARC, certificados SSL y reputación del hosting. Los dominios bien configurados alojan buzones reales con mucha más frecuencia.' },
    { title: 'Gateways de seguridad', body: 'Las direcciones protegidas por gateways como Mimecast, Proofpoint y Barracuda se verifican directamente. El gateway ya no oculta si detrás de la dirección hay un buzón real.' },
  ],
  compareKicker: 'Resultados claros',
  compareTitle: 'De las suposiciones a los resultados',
  compareText: 'La diferencia entre un verificador típico y Giggal.ai en la misma lista de 48.000 correos.',
  compare: {
    typicalLabel: 'Un verificador típico', giggalLabel: 'Giggal.ai', count: '48.028 correos verificados', catchAllLabel: 'Catch-all',
    typical: ['31.566', '5.982', '10.480'], giggal: ['39.950', '8.078', '0'],
    typicalNote: 'Más de 10.000 contactos catch-all a los que no puedes escribir con seguridad. Cerca del 80 % es real, pero no sabes cuáles.',
    giggalNote: 'Unos 8.400 contactos entregables más recuperados del montón catch-all. Cada dirección tiene un resultado claro.',
  },
  whoKicker: 'Para quién es',
  whoTitle: 'Quién usa la verificación catch-all',
  audience: [
    { title: 'Equipos de outreach', body: 'Envías solo a contactos verificados. Menos rebotes, más respuestas, dominios de envío más sanos.' },
    { title: 'Agencias', body: 'Limpia las listas de cada cliente con el mismo verificador, para que informes y entrega sigan siendo predecibles.' },
    { title: 'Sales operations', body: 'Mantén en el CRM solo los contactos que reciben de verdad tus secuencias y tus actualizaciones.' },
    { title: 'Newsletters', body: 'Protege aperturas y clics eliminando direcciones que parecen reales pero nunca se entregan.' },
  ],
  faqTitle: 'Preguntas frecuentes',
  faq: [
    { q: '¿Qué es un dominio catch-all?', a: 'Un dominio que acepta cualquier correo enviado, incluso a direcciones que no existen. El servidor responde "sí, existe" a cualquier dirección, por eso las comprobaciones SMTP tradicionales no pueden saber si un buzón concreto es real.' },
    { q: '¿La verificación catch-all cuesta créditos extra?', a: 'No. Cuesta 1 crédito por correo, exactamente igual que una verificación estándar.' },
    { q: '¿Qué tan precisa es la verificación catch-all?', a: 'Cerca del 98,5 % en listas de empresa. En lugar de adivinar solo con las respuestas SMTP, verificamos la existencia real del buzón, así el resultado se mantiene también en el momento del envío.' },
    { q: '¿Ralentiza la verificación del resto de la lista?', a: 'No. Las comprobaciones catch-all corren en paralelo con la verificación normal, no después. La lista completa termina en el mismo tiempo.' },
    { q: '¿Puedo verificar solo las direcciones catch-all de una lista ya limpiada en otro sitio?', a: 'Sí. En el panel abre Catch-All Detection, pega o sube solo las direcciones que quieres comprobar y verifícalas. El coste es el mismo: 1 crédito por correo.' },
    { q: '¿Qué pasa si una comprobación catch-all devuelve "desconocido"?', a: 'Es raro, pero si no llegamos a un resultado el crédito se reembolsa automáticamente. Solo pagas las verificaciones completadas.' },
  ],
  ctaHeadline: 'Verifica una lista y compara los resultados',
}

export default function VerificacionCatchAllPage() {
  return <CatchAllPageL10n locale="es" content={content} />
}
