// Spanish Listmint alternative page. Translated from app/(en)/listmint-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'listmint',
  path: '/es/alternativa-a-listmint',
  cluster: 'altListmint',
  metaTitle: 'Alternativa a Listmint: verificación catch-all | Giggal.ai',
  ogTitle: 'Una alternativa a Listmint para verificar correos catch-all',
  desc: 'Listmint cuesta 99 $ al mes con 5.000 créditos catch-all. Giggal.ai verifica correos catch-all a 1 crédito, 9,90 $ por 10.000, y sus créditos no caducan nunca.',
  h1: ['Una ', 'alternativa a Listmint', ' con un solo fondo de créditos'],
  heroP:
    'Listmint es un verificador de correos centrado en las direcciones catch-all. Divide cada plan en créditos estándar y un fondo más pequeño de créditos catch-all. Giggal.ai usa un solo fondo. Una verificación catch-all cuesta 1 crédito, igual que cualquier otro correo.',
  bluf: [
    { k: 'Créditos', v: 'Listmint tiene dos fondos de créditos. Giggal.ai tiene uno, a 1 crédito por correo.' },
    { k: 'Precio', v: 'Listmint Starter cuesta 99 $ al mes. Giggal.ai cuesta 9,90 $ por 10.000 créditos, con un único pago.' },
    { k: 'Catch-all', v: 'Listmint Starter da 5.000 créditos catch-all al mes. Giggal.ai no tiene un límite aparte.' },
    { k: 'Gateways', v: 'Giggal.ai verifica direcciones detrás de 15 gateways de correo identificados por su nombre. Listmint no nombra ninguno.' },
  ],
  about: {
    heading: '¿Qué es Listmint?',
    paragraphs: [
      'Listmint es un servicio de verificación de correos de listmint.io. Hace verificaciones SMTP estándar y una verificación catch-all aparte. Listmint dice que verifica a mano las direcciones catch-all.',
      'Sus créditos catch-all cuestan más que sus créditos estándar. Por eso cada plan incluye un fondo grande de créditos estándar y un fondo más pequeño de créditos catch-all.',
      'Listmint también dice que puede verificar direcciones catch-all en tiempo real.',
    ],
  },
  reasons: {
    heading: 'Por qué la gente busca una alternativa a Listmint',
    items: [
      { k: 'Límite de catch-all', v: 'Starter incluye 5.000 créditos catch-all al mes. Una sola lista B2B grande puede gastarlos todos.' },
      { k: 'Plan mensual', v: 'Listmint se factura cada mes. Los créditos de Giggal.ai se compran una vez y no caducan nunca.' },
      { k: 'Volumen', v: 'El plan más grande publicado es Agency, con 50.000 créditos estándar. Para más volumen necesitas un presupuesto Enterprise.' },
      { k: 'Gateways', v: 'Listmint no nombra ningún secure email gateway detrás del que pueda verificar.' },
    ],
  },
  catchAllHeading: 'Listmint vs Giggal.ai en direcciones catch-all',
  catchAllProse:
    'Listmint cobra las verificaciones catch-all de un fondo de créditos aparte. En el plan Starter de 99 $, ese fondo es de 5.000 al mes. Giggal.ai no tiene un fondo aparte. Cada dirección cuesta 1 crédito, sea catch-all o no. Cuando Giggal.ai no obtiene respuesta, el resultado es desconocido y el crédito se reembolsa.',
  pricingHeading: 'Precios de Listmint frente a Giggal.ai',
  pricingProse:
    'Listmint Starter cuesta 99 $ al mes por 20.000 créditos estándar y 5.000 créditos catch-all. Agency cuesta 187 $ al mes por 50.000 créditos estándar y 10.000 créditos catch-all. Enterprise tiene precio bajo petición.',
  pricingExtra: [
    'Giggal.ai no tiene niveles de plan. 10.000 créditos cuestan 9,90 $ y 100.000 cuestan 76 $. Puedes gastar cualquiera de ellos en direcciones catch-all.',
  ],
  strengths: {
    heading: 'Cuándo encaja bien Listmint',
    intro: 'Listmint tiene sentido si quieres esto:',
  },
  others: {
    heading: 'Otras alternativas a Listmint',
    intro: 'Estos verificadores también devuelven un resultado en direcciones catch-all. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'Scrubby', text: 'Verifica dominios catch-all y protegidos por gateways a 1 crédito. Su Deep Verification cuesta 3 créditos y envía correos reales. El pago por uso cuesta 0,008 $ por crédito.' },
      { name: 'no2bounce', text: 'Envía mensajes de prueba para confirmar buzones catch-all. 10.000 créditos de pago por uso cuestan 20 $ y no caducan nunca.' },
      { name: 'Allegrow', text: 'Devuelve válido o no válido en contactos catch-all para equipos de ventas. Starter cuesta 99 $ al mes por 5.000 contactos.' },
    ],
  },
  testHeading: 'Pasa una lista de Listmint por Giggal.ai',
  testSteps: [
    'Exporta una lista que ya verificaste con Listmint.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Compara las filas catch-all con lo que devolvió Listmint.',
  ],
  ctaHeadline: 'Verifica correos catch-all sin un límite de créditos aparte',
  faqs: [
    {
      q: '¿Cuánto cuesta Listmint?',
      a: 'Listmint Starter cuesta 99 $ al mes con 20.000 créditos estándar y 5.000 créditos catch-all. Agency cuesta 187 $ al mes con 50.000 créditos estándar y 10.000 créditos catch-all. Enterprise tiene precio bajo petición.',
    },
    {
      q: '¿Por qué Listmint tiene créditos catch-all aparte?',
      a: 'Listmint dice que sus créditos catch-all cuestan más que sus créditos SMTP normales, porque una verificación catch-all lleva más trabajo. Giggal.ai cobra 1 crédito por cada dirección, también por las catch-all.',
    },
    {
      q: '¿Es Giggal.ai una buena alternativa a Listmint?',
      a: 'Sí, si verificas listas con muchas direcciones catch-all. Giggal.ai no tiene un límite catch-all aparte ni un plan mensual. Cuesta 9,90 $ por 10.000 créditos.',
    },
    {
      q: '¿Listmint tiene una prueba gratuita?',
      a: 'Listmint ofrece un inicio gratis, pero no publica cuántos créditos incluye. Giggal.ai da 1.000 créditos gratis sin tarjeta.',
    },
  ],
  breadcrumb: 'Alternativa a Listmint',
}

export default cfg
