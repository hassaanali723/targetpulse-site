import type { Metadata } from 'next'
import PricingPageL10n, { type PricingContent } from '@/components/l10n/PricingPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

const PATH = '/es/precios'
const DESC =
  'Precios de la verificación de correo: desde 9,90 $ por 10.000 créditos, hasta 0,0007 $ por correo. Por uso o suscripción con 10 % de descuento. Sin caducidad.'

export const metadata: Metadata = {
  title: { absolute: 'Precios: 10.000 Verificaciones de Correo por 9,90 $ | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('pricing') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'es_LA',
    title: 'Precios de la verificación de correo',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai verificación de correo' }],
  },
}

const content: PricingContent = {
  path: PATH,
  crumb: 'Precios',
  h1Lead: 'Precios de la verificación de',
  h1Accent: 'correo',
  intro: (
    <>
      Pagas solo lo que usas. Sin cuota fija, sin costes ocultos, y los créditos no caducan.
      Empiezas con <strong className="text-indigo-600 font-extrabold">1.000 créditos de prueba gratis</strong>, sin tarjeta.
    </>
  ),
  contactHref: '/es/contacto',
  includedTitle: 'Todo incluido en cada paquete',
  includedText: 'Todas las funciones, en todos los paquetes. Sin niveles, sin bloqueos.',
  features: [
    'Comprobación de sintaxis',
    'Verificación del dominio y los registros MX',
    'Verificación SMTP del buzón',
    'Detección de correos desechables',
    'Detección de cuentas de rol',
    'Verificación catch-all',
    'Carga y validación en bloque',
    'Exportación a CSV, Excel y JSON',
    'Eliminación de duplicados',
    'Informes de verificación detallados',
    'Créditos sin caducidad',
  ],
  rulesTitle: 'Precios fáciles de entender',
  rulesText: 'Cuatro reglas que mantienen los precios claros y predecibles.',
  rules: [
    { title: '1 crédito = 1 correo', body: 'Cada verificación usa exactamente un crédito de tu saldo, también en direcciones catch-all y detrás de gateways de seguridad.' },
    { title: 'Descuento por volumen', body: 'Cuantos más créditos compras, menos pagas por crédito: de 0,0017 $ a 0,0007 $.' },
    { title: '10 % de descuento en suscripción', body: 'Con la suscripción mensual ahorras automáticamente un 10 % en cada paquete.' },
    { title: 'Los créditos no caducan', body: 'Úsalos cuando quieras. Se quedan en tu cuenta mientras los necesites.' },
  ],
  faqTitle: 'Preguntas frecuentes',
  faqText: 'Créditos, pagos y reembolsos.',
  faq: [
    { q: '¿Qué métodos de pago aceptan?', a: 'Todas las tarjetas de crédito y débito habituales, a través de Stripe. Los precios están en dólares estadounidenses; tu banco aplica el cambio.' },
    { q: '¿Puedo cancelar la suscripción cuando quiera?', a: 'Sí, en cualquier momento. Conservas todos los créditos de tu cuenta y no se te cobra nada más.' },
    { q: '¿Qué pasa si me quedo sin créditos?', a: 'Compras más cuando quieras. El saldo se actualiza al instante.' },
    { q: '¿Hacen reembolsos?', a: 'Los créditos normalmente no son reembolsables. Los casos excepcionales se evalúan uno por uno; los resultados "desconocido" se reembolsan en créditos. Los detalles están en la política de reembolsos.' },
    { q: '¿Hay una compra mínima?', a: 'El paquete mínimo es de 3.000 créditos (5,00 $). Antes de comprar tienes 1.000 créditos de prueba gratis.' },
    { q: '¿Los créditos caducan?', a: 'Nunca. Se quedan en tu cuenta hasta que los uses.' },
  ],
  ctaTitle: 'Empieza con 1.000 créditos gratis',
  ctaText: 'Sin tarjeta. Verifica los primeros correos gratis y ve los resultados en segundos.',
  ctaButton: 'Conseguir los créditos gratis',
  ctaHref: '/es/registro',
}

export default function PreciosPage() {
  return <PricingPageL10n locale="es" content={content} />
}
