// Spanish no2bounce alternative page. Translated from app/(en)/no2bounce-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) come from
// lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'no2bounce',
  path: '/es/alternativa-a-no2bounce',
  cluster: 'altNo2bounce',
  metaTitle: 'Alternativa a no2bounce: precios y catch-all | Giggal.ai',
  ogTitle: 'Una alternativa a no2bounce para verificar correos catch-all',
  desc: 'no2bounce cobra 20 $ por 10.000 créditos. Giggal.ai verifica correos catch-all y tras gateways por 9,90 $ por 10.000, con 1.000 créditos gratis sin tarjeta.',
  h1: ['Una ', 'alternativa a no2bounce', ' con un precio más bajo por correo'],
  heroP:
    'no2bounce es un verificador de correo con créditos de pago por uso que no caducan nunca. Giggal.ai funciona igual. Las diferencias están en el precio, en los créditos gratis y en cómo cada uno verifica las direcciones catch-all.',
  bluf: [
    { k: 'Precio', v: '10.000 créditos cuestan 20 $ en no2bounce y 9,90 $ en Giggal.ai.' },
    { k: 'Con volumen', v: 'Un millón de créditos cuesta 679 $ en no2bounce y 680 $ en Giggal.ai.' },
    { k: 'Créditos gratis', v: 'no2bounce da 100 créditos gratis. Giggal.ai da 1.000. Ninguno de los dos pide tarjeta.' },
    { k: 'Caducidad', v: 'Los créditos no caducan nunca en ninguna de las dos herramientas.' },
  ],
  about: {
    heading: '¿Qué es no2bounce?',
    paragraphs: [
      'no2bounce es un servicio de verificación de correo. Verifica correos sueltos, listas masivas y correos enviados por su API. Con los mismos créditos también pagas su buscador de correos, la búsqueda por dominio y la puntuación de correos.',
      'En los dominios catch-all, no2bounce envía mensajes de prueba controlados para confirmar si un buzón existe. Declara un 99,6% de precisión.',
      'Se conecta con HubSpot, Salesforce, Clay, Zapier, Google Sheets y Zoho CRM, entre otros.',
    ],
  },
  reasons: {
    heading: 'Por qué la gente busca una alternativa a no2bounce',
    items: [
      { k: 'Precio con 10.000', v: 'no2bounce cobra 20 $ por 10.000 créditos. Giggal.ai cobra 9,90 $ por la misma cantidad.' },
      { k: 'Con 100.000', v: '100.000 créditos cuestan 149 $ en no2bounce y 76 $ en Giggal.ai.' },
      { k: 'Prueba gratis', v: 'no2bounce da 100 créditos gratis. Giggal.ai da 1.000, suficientes para probar una muestra real.' },
    ],
  },
  catchAllHeading: 'Cómo verifican no2bounce y Giggal.ai las direcciones catch-all',
  catchAllProse:
    'no2bounce envía mensajes de prueba controlados desde sus propios servidores para confirmar los buzones catch-all. Giggal.ai devuelve un resultado en las direcciones catch-all a 1 crédito cada una, sin tarifa aparte. También verifica direcciones detrás de 15 secure email gateways identificados por su nombre, entre ellos Proofpoint, Mimecast y Barracuda.',
  pricingHeading: 'Precios de no2bounce frente a Giggal.ai',
  pricingProse:
    'no2bounce vende paquetes de pago por uso desde 10.000 créditos por 20 $ hasta 50 millones de créditos. 100.000 cuestan 149 $ y un millón cuesta 679 $. Los planes mensuales cuestan un 15% menos, y los anuales un 20% menos.',
  pricingExtra: [
    'Giggal.ai vende 10.000 créditos por 9,90 $, 100.000 por 76 $ y un millón por 680 $. No tienes que elegir un plan. Los créditos no caducan nunca en ninguna de las dos herramientas.',
  ],
  strengths: {
    heading: 'Cuándo encaja bien no2bounce',
    intro: 'no2bounce es una opción razonable para estas necesidades:',
  },
  others: {
    heading: 'Otras alternativas a no2bounce',
    intro: 'Estos verificadores también venden créditos que no caducan nunca. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'Bounceless', text: '10.000 créditos cuestan 29 $ y un millón cuesta 579 $. Da 1.000 créditos gratis al mes con un correo de empresa.' },
      { name: 'QuickEmailVerification', text: '10.000 créditos cuestan 60 $. Da 100 créditos gratis cada día.' },
      { name: 'Scrubby', text: 'El pago por uso cuesta 0,008 $ por crédito. Tiene una opción Deep Verification para direcciones difíciles.' },
    ],
  },
  testHeading: 'Compara no2bounce y Giggal.ai con una misma lista',
  testSteps: [
    'Exporta una lista que ya verificaste con no2bounce.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Compara las filas catch-all con lo que devolvió no2bounce.',
  ],
  ctaHeadline: 'El mismo trabajo a un precio más bajo por correo',
  faqs: [
    {
      q: '¿Cuánto cuesta no2bounce?',
      a: 'Los paquetes de pago por uso de no2bounce empiezan en 20 $ por 10.000 créditos. 100.000 cuestan 149 $ y un millón cuesta 679 $. Los planes mensuales cuestan un 15% menos, y los anuales un 20% menos.',
    },
    {
      q: '¿Es gratis no2bounce?',
      a: 'no2bounce da 100 créditos gratis sin tarjeta, y no caducan nunca. Después compras créditos. Giggal.ai da 1.000 créditos gratis sin tarjeta.',
    },
    {
      q: '¿Es Giggal.ai una buena alternativa a no2bounce?',
      a: 'Sí. Los dos venden créditos que no caducan nunca. Giggal.ai cuesta menos con 10.000 y 100.000 créditos, y da diez veces más créditos gratis. Con un millón de créditos, los dos precios son casi iguales.',
    },
    {
      q: '¿Caducan los créditos de no2bounce?',
      a: 'No. Los créditos comprados en no2bounce se quedan en tu cuenta hasta que los usas. Los créditos de una suscripción siguen siendo válidos mientras la suscripción esté activa. Los créditos de Giggal.ai no caducan nunca.',
    },
  ],
  breadcrumb: 'Alternativa a no2bounce',
}

export default cfg
