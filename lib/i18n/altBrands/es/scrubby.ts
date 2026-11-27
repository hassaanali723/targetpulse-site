// Spanish Scrubby alternative page. Translated from app/(en)/scrubby-alternative
// (2026-11-27). Scrubby's product names Quick Verification and Deep Verification
// stay in English. Competitor words come from lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'scrubby',
  path: '/es/alternativa-a-scrubby',
  cluster: 'altScrubby',
  metaTitle: 'Alternativa a Scrubby: precios de Scrubby.io | Giggal.ai',
  ogTitle: 'Una alternativa a Scrubby para correos catch-all y tras gateways',
  desc: 'Scrubby cobra 0,008 $ por crédito, y Deep Verification tarda hasta 72 horas. Giggal.ai verifica correos catch-all y tras gateways por 9,90 $ por 10.000.',
  h1: ['Una ', 'alternativa a Scrubby', ' a 9,90 $ por 10.000 correos'],
  heroP:
    'Scrubby verifica correos catch-all y protegidos por gateways, las mismas direcciones difíciles en las que se centra Giggal.ai. Las diferencias son el precio y cómo funciona cada verificación. Scrubby cobra 0,008 $ por crédito. Giggal.ai cobra 9,90 $ por 10.000.',
  bluf: [
    { k: 'Precio', v: '10.000 créditos cuestan 80 $ en Scrubby y 9,90 $ en Giggal.ai.' },
    { k: 'Verificación profunda', v: 'La Deep Verification de Scrubby cuesta 3 créditos y envía correos reales. Los resultados finales tardan hasta 72 horas.' },
    { k: 'Créditos gratis', v: 'Scrubby da 200 créditos gratis. Giggal.ai da 1.000. Ninguno de los dos pide tarjeta.' },
    { k: 'Reembolsos', v: 'Scrubby dice que todas las compras son definitivas. Giggal.ai reembolsa el crédito de los resultados desconocidos.' },
  ],
  about: {
    heading: '¿Qué es Scrubby?',
    paragraphs: [
      'Scrubby es una herramienta de verificación de correo de scrubby.io. Se centra en las direcciones catch-all y arriesgadas que otros verificadores no pueden confirmar.',
      'Tiene dos verificaciones. Quick Verification cuesta 1 crédito y cubre dominios estándar, dominios catch-all y dominios protegidos por SEG. Deep Verification cuesta 3 créditos. Scrubby envía correos reales a cada dirección y da los resultados finales en un plazo de 72 horas.',
      'Scrubby se conecta con herramientas como Clay, Instantly, Smartlead, Apollo y HubSpot.',
    ],
  },
  reasons: {
    heading: 'Por qué los equipos buscan una alternativa a Scrubby',
    items: [
      { k: 'Precio', v: 'El pago por uso cuesta 0,008 $ por crédito. 10.000 verificaciones cuestan 80 $, y 100.000 cuestan 800 $.' },
      { k: 'Tiempo de espera', v: 'Los resultados de Deep Verification tardan hasta 72 horas.' },
      { k: 'Correos reales', v: 'Deep Verification envía correos reales a cada dirección de tu lista.' },
      { k: 'Sin reembolsos', v: 'Scrubby dice que todas las compras son definitivas.' },
    ],
  },
  catchAllHeading: 'Scrubby frente a Giggal.ai en correos catch-all y tras gateways',
  catchAllProse:
    'Scrubby y Giggal.ai devuelven los dos un resultado en las direcciones catch-all y protegidas por gateways. Giggal.ai cobra 1 crédito por cada dirección, sin un nivel más profundo. Nombra 15 gateways tras los que verifica, entre ellos Proofpoint, Mimecast y Barracuda. Cuando no consigue una respuesta, el crédito se reembolsa.',
  pricingHeading: 'Precios de Scrubby frente a Giggal.ai',
  pricingProse:
    'El pago por uso de Scrubby cuesta 0,008 $ por crédito, así que 10.000 créditos cuestan 80 $. Los planes mensuales son Starter a 47 $ por 6.000 créditos, Growth a 97 $ por 15.000 y Pro a 497 $ por 100.000. Los créditos de pago por uso no caducan nunca, y los créditos de los planes se acumulan de un mes a otro.',
  pricingExtra: [
    'Una Deep Verification usa 3 créditos, así que 10.000 verificaciones profundas usan 30.000 créditos. Giggal.ai vende 10.000 créditos por 9,90 $ y 100.000 por 76 $.',
  ],
  strengths: {
    heading: 'Cuándo encaja bien Scrubby',
    intro: 'Scrubby tiene puntos fuertes que conviene conocer:',
  },
  others: {
    heading: 'Otras alternativas a Scrubby',
    intro: 'Estas herramientas también devuelven un resultado en las direcciones catch-all. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'no2bounce', text: 'Envía mensajes de prueba para confirmar los buzones catch-all. 10.000 créditos cuestan 20 $ y no caducan nunca.' },
      { name: 'Listmint', text: 'Verifica las direcciones catch-all a mano. Starter cuesta 99 $ al mes por 20.000 créditos estándar y 5.000 créditos catch-all.' },
      { name: 'Allegrow', text: 'Devuelve válido o no válido en los contactos catch-all y nombra Proofpoint y Mimecast. Starter cuesta 99 $ al mes.' },
    ],
  },
  testHeading: 'Prueba Giggal.ai con tus direcciones catch-all',
  testSteps: [
    'Exporta una lista que ya verificaste con Scrubby.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Compara los resultados con los de Scrubby para las mismas direcciones catch-all.',
  ],
  ctaHeadline: 'Verifica las mismas direcciones difíciles a 9,90 $ por 10.000',
  faqs: [
    {
      q: '¿Cuánto cuesta Scrubby?',
      a: 'El pago por uso de Scrubby cuesta 0,008 $ por crédito, o 80 $ por 10.000. Los planes mensuales empiezan en 47 $ por 6.000 créditos. Deep Verification usa 3 créditos por correo.',
    },
    {
      q: '¿Qué es la Deep Verification de Scrubby?',
      a: 'Es la verificación más lenta de Scrubby para direcciones difíciles. Cuesta 3 créditos, envía correos reales a cada dirección y da los resultados finales en un plazo de 72 horas.',
    },
    {
      q: '¿Tiene Scrubby una prueba gratis?',
      a: 'Sí. Scrubby da 200 créditos gratis sin tarjeta. Giggal.ai da 1.000 créditos gratis sin tarjeta.',
    },
    {
      q: '¿Es Giggal.ai una buena alternativa a Scrubby?',
      a: 'Sí. Los dos devuelven un resultado en las direcciones catch-all y tras gateways. Giggal.ai cuesta 9,90 $ por 10.000 créditos y reembolsa los resultados desconocidos.',
    },
  ],
  breadcrumb: 'Alternativa a Scrubby',
}

export default cfg
