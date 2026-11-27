// Spanish Allegrow alternative page. Translated from app/(en)/allegrow-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'allegrow',
  path: '/es/alternativa-a-allegrow',
  cluster: 'altAllegrow',
  metaTitle: 'Alternativa a Allegrow: precios de Allegrow | Giggal.ai',
  ogTitle: 'Una alternativa a Allegrow que pagas por cada correo',
  desc: 'Precios de Allegrow: desde 99 $ al mes por 5.000 contactos. Giggal.ai verifica correos catch-all y tras gateways a 9,90 $ por 10.000. Sus créditos no caducan.',
  h1: ['Una ', 'alternativa a Allegrow', ' que pagas por cada correo'],
  heroP:
    'Allegrow es una plataforma de verificación de correos y entregabilidad para equipos de ventas. Se vende como plan mensual desde 99 $ por 5.000 contactos. Giggal.ai verifica correos con créditos de pago único. 10.000 créditos cuestan 9,90 $ y no caducan nunca.',
  bluf: [
    { k: 'Facturación', v: 'Allegrow es un plan mensual. Los créditos de Giggal.ai se compran una vez.' },
    { k: 'Precio', v: 'Allegrow Starter cuesta 99 $ al mes por 5.000 contactos. Giggal.ai cuesta 9,90 $ por 10.000.' },
    { k: 'Catch-all', v: 'Los dos devuelven válido o no válido en direcciones catch-all. Los dos nombran Proofpoint y Mimecast como gateways.' },
    { k: 'Herramientas extra', v: 'Allegrow también supervisa la ubicación en la bandeja de entrada y el estado del dominio. Giggal.ai no lo hace.' },
  ],
  about: {
    heading: '¿Qué es Allegrow?',
    paragraphs: [
      'Allegrow es una plataforma de verificación de correos B2B para equipos de ventas e ingresos. Verifica contactos, también direcciones catch-all, y devuelve válido o no válido. Allegrow dice que nunca envía correos para verificar una dirección catch-all.',
      'También supervisa la reputación del remitente y la ubicación en la bandeja de entrada de los buzones conectados. Se integra con Outreach, Salesloft, HubSpot, Apollo, ZoomInfo y Clay.',
      'Allegrow ofrece informes SOC 2, y SSO como complemento en su plan más alto.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Precios de Allegrow en 2026',
  pricingProse:
    'Allegrow Starter cuesta 99 $ al mes por 5.000 contactos. Los contactos extra cuestan 8 $ por cada 1.000. Scale Plus Unlimited cuesta 1340 $ al mes con pago anual, sin límite de créditos. Un plan de API tiene precio bajo petición.',
  pricingExtra: [
    'Así, 10.000 contactos al mes en Starter salen a 139 $. Es nuestro cálculo con sus precios publicados, no un plan que Allegrow ofrezca. Giggal.ai vende 10.000 créditos por 9,90 $ y 100.000 por 76 $, con un único pago.',
  ],
  reasons: {
    heading: 'Por qué los equipos buscan una alternativa a Allegrow',
    items: [
      { k: 'Coste mensual', v: 'Starter cuesta 99 $ cada mes. Los equipos que verifican pocas veces al año pagan meses que no usan.' },
      { k: 'Integraciones', v: 'Las integraciones nativas con HubSpot, Outreach y Salesloft están en Scale Plus. Starter se conecta con Clay mediante una clave de API.' },
      { k: 'Límites de la prueba', v: 'La prueba de 14 días cubre 1.000 direcciones, sin integraciones ni acceso a la API.' },
    ],
  },
  catchAllHeading: 'Allegrow vs Giggal.ai en correos catch-all y protegidos por gateways',
  catchAllProse:
    'Allegrow y Giggal.ai devuelven los dos un resultado válido o no válido en direcciones catch-all. Los dos nombran también Proofpoint y Mimecast entre los gateways detrás de los que verifican. La diferencia principal es la facturación. Allegrow usa una cuota mensual de contactos. Giggal.ai cobra 1 crédito por dirección, con créditos que no caducan nunca.',
  strengths: {
    heading: 'Lo que Allegrow hace bien',
    intro: 'Allegrow cubre más que la verificación. Es mejor opción para estas necesidades:',
  },
  others: {
    heading: 'Otras alternativas a Allegrow',
    intro: 'Estas herramientas también verifican direcciones catch-all. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'Scrubby', text: 'Verifica dominios catch-all y protegidos por gateways. El pago por uso cuesta 0,008 $ por crédito, y los planes mensuales empiezan en 47 $.' },
      { name: 'Listmint', text: 'Verifica direcciones catch-all con un fondo de créditos aparte. Starter cuesta 99 $ al mes por 20.000 créditos estándar y 5.000 créditos catch-all.' },
      { name: 'Bounceless', text: 'Incluye indicios de catch-all en su verificación de 1 crédito, y tiene herramientas de ubicación en la bandeja de entrada. 10.000 créditos cuestan 29 $.' },
    ],
  },
  testHeading: 'Prueba Giggal.ai frente a tus resultados de Allegrow',
  testSteps: [
    'Exporta una lista que ya verificaste con Allegrow.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Compara los resultados catch-all con los de Allegrow para los mismos contactos.',
  ],
  ctaHeadline: 'Verifica las mismas direcciones difíciles y paga por cada correo',
  faqs: [
    {
      q: '¿Cuánto cuesta Allegrow?',
      a: 'Allegrow Starter cuesta 99 $ al mes por 5.000 contactos, y los contactos extra cuestan 8 $ por cada 1.000. Scale Plus Unlimited cuesta 1340 $ al mes con pago anual. El plan de API tiene precio bajo petición.',
    },
    {
      q: '¿Allegrow tiene una prueba gratuita?',
      a: 'Sí. Allegrow tiene una prueba de 14 días para hasta 1.000 direcciones, sin tarjeta. Las integraciones y el acceso a la API no forman parte de la prueba.',
    },
    {
      q: '¿Es Giggal.ai una buena alternativa a Allegrow?',
      a: 'Sí, si solo necesitas verificar. Giggal.ai devuelve un resultado en direcciones catch-all y protegidas por gateways a 9,90 $ por 10.000. No supervisa la ubicación en la bandeja de entrada ni la reputación del remitente.',
    },
    {
      q: '¿Allegrow envía correos para verificar direcciones catch-all?',
      a: 'No. Allegrow dice que nunca envía correos para verificar una dirección catch-all.',
    },
    {
      q: '¿Allegrow tiene un plan ilimitado?',
      a: 'Sí. Scale Plus Unlimited cuesta 1340 $ al mes con pago anual, con verificación ilimitada mediante integraciones o CSV. Giggal.ai no tiene plan ilimitado.',
    },
  ],
  breadcrumb: 'Alternativa a Allegrow',
}

export default cfg
