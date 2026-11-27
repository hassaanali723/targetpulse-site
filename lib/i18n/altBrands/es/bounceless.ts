// Spanish Bounceless alternative page. Translated from app/(en)/bounceless-alternative
// (2026-11-27). Competitor words come from lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'bounceless',
  path: '/es/alternativa-a-bounceless',
  cluster: 'altBounceless',
  metaTitle: 'Alternativa a Bounceless: precios de Bounceless.io | Giggal.ai',
  ogTitle: 'Una alternativa a Bounceless con verificación tras gateways',
  desc: 'Bounceless cuesta 29 $ por 10.000 créditos. Giggal.ai cuesta 9,90 $ y verifica direcciones catch-all y tras secure email gateways, con créditos que no caducan.',
  h1: ['Una ', 'alternativa a Bounceless', ' que también verifica correos tras gateways'],
  heroP:
    'Bounceless es un verificador de correo de bajo coste con paquetes de pago único y planes mensuales. Ahora incluye indicios de catch-all en su verificación estándar. Giggal.ai también devuelve un resultado en las direcciones catch-all, y verifica detrás de 15 secure email gateways identificados por su nombre.',
  bluf: [
    { k: 'Precio', v: '10.000 créditos cuestan 29 $ en Bounceless y 9,90 $ en Giggal.ai.' },
    { k: 'Con volumen', v: 'Un millón de créditos cuesta 579 $ en Bounceless y 680 $ en Giggal.ai.' },
    { k: 'Gateways', v: 'Giggal.ai nombra 15 gateways de correo tras los que verifica. Bounceless no lo hace.' },
    { k: 'Créditos gratis', v: 'Bounceless da 1.000 al mes con un correo de empresa. Giggal.ai da 1.000 una sola vez.' },
  ],
  about: {
    heading: '¿Qué es Bounceless?',
    paragraphs: [
      'Bounceless es un servicio de verificación de correo de bounceless.io. Verifica listas masivas y correos sueltos, y ofrece una API y un servidor MCP.',
      'Su cuenta también incluye comprobaciones del estado del remitente, de la ubicación en la bandeja de entrada y de formularios de registro. Bounceless dice que tiene más de 39.000 cuentas de clientes.',
      'Bounceless aún no tiene integraciones nativas con aplicaciones. Ofrece guías de CSV y API para herramientas como Mailchimp, HubSpot y ActiveCampaign.',
    ],
  },
  reasons: {
    heading: 'Por qué la gente busca una alternativa a Bounceless',
    items: [
      { k: 'Gateways', v: 'Bounceless no nombra secure email gateways como Proofpoint o Mimecast.' },
      { k: 'Integraciones', v: 'Aún no tiene integraciones nativas con aplicaciones, solo guías de CSV y API.' },
      { k: 'Precio con 10.000', v: '10.000 créditos cuestan 29 $. Giggal.ai cobra 9,90 $ por la misma cantidad.' },
      { k: 'Correo de empresa', v: 'Los créditos gratis mensuales piden un correo de empresa. Las direcciones de correo gratuitas no reciben ninguno.' },
    ],
  },
  catchAllHeading: 'Bounceless frente a Giggal.ai en las direcciones catch-all',
  catchAllProse:
    'Bounceless incluye indicios de catch-all en su verificación de 1 crédito, y no cobra los resultados no confirmados. Giggal.ai también devuelve un resultado en las direcciones catch-all a 1 crédito, y reembolsa los resultados desconocidos. La diferencia principal son los secure email gateways. Giggal.ai verifica detrás de 15 de ellos, incluidos Proofpoint, Mimecast y Barracuda.',
  pricingHeading: 'Precios de Bounceless frente a Giggal.ai',
  pricingProse:
    'Los paquetes de pago por uso de Bounceless cuestan 19 $ por 5.000, 29 $ por 10.000, 159 $ por 100.000 y 579 $ por un millón. Los planes mensuales empiezan en 19 $ por 6.500 créditos. Los créditos no caducan nunca, ni los de los paquetes ni los de los planes.',
  pricingExtra: [
    'Giggal.ai vende 10.000 créditos por 9,90 $, 100.000 por 76 $ y un millón por 680 $. Bounceless cuesta menos con un millón. Giggal.ai cuesta menos con 10.000 y 100.000.',
  ],
  strengths: {
    heading: 'Cuándo encaja bien Bounceless',
    intro: 'Bounceless tiene puntos fuertes reales:',
  },
  others: {
    heading: 'Otras alternativas a Bounceless',
    intro: 'Estos verificadores tienen precios cercanos a los de Bounceless. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'no2bounce', text: '10.000 créditos cuestan 20 $ y un millón cuesta 679 $. Los créditos no caducan nunca.' },
      { name: 'QuickEmailVerification', text: 'Da 100 créditos gratis cada día. 10.000 créditos permanentes cuestan 60 $.' },
      { name: 'Mailfloss', text: 'Se conecta a 41 plataformas de correo y elimina cada día las direcciones no válidas. 10.000 créditos prepagados cuestan 40 $.' },
    ],
  },
  testHeading: 'Pasa una misma lista por Bounceless y Giggal.ai',
  testSteps: [
    'Exporta una lista que ya verificaste con Bounceless.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Compara las filas catch-all con los indicios que devolvió Bounceless.',
  ],
  ctaHeadline: 'Correos catch-all y tras gateways a 1 crédito cada uno',
  faqs: [
    {
      q: '¿Cuánto cuesta Bounceless?',
      a: 'Los paquetes de pago por uso de Bounceless empiezan en 19 $ por 5.000 créditos. 10.000 cuestan 29 $, 100.000 cuestan 159 $ y un millón cuesta 579 $. Los planes mensuales empiezan en 19 $ por 6.500 créditos.',
    },
    {
      q: '¿Es gratis Bounceless?',
      a: 'Bounceless da 1.000 créditos gratis al mes si te registras con un correo de empresa. No hace falta tarjeta. Giggal.ai da 1.000 créditos gratis una sola vez, sin tarjeta.',
    },
    {
      q: '¿Bounceless verifica correos catch-all?',
      a: 'Sí. Bounceless incluye indicios de catch-all en su verificación estándar de 1 crédito, sin coste extra. Los resultados no confirmados no se cobran.',
    },
    {
      q: '¿Es Giggal.ai una buena alternativa a Bounceless?',
      a: 'Sí, si tu lista tiene muchos dominios de empresa. Giggal.ai verifica detrás de 15 secure email gateways identificados por su nombre y cuesta 9,90 $ por 10.000 créditos.',
    },
  ],
  breadcrumb: 'Alternativa a Bounceless',
}

export default cfg
