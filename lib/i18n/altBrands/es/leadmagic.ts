// Spanish LeadMagic alternative page. Translated from app/(en)/leadmagic-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'leadmagic',
  path: '/es/alternativa-a-leadmagic',
  cluster: 'altLeadmagic',
  metaTitle: 'Alternativa a LeadMagic: precios de LeadMagic | Giggal.ai',
  ogTitle: 'Una alternativa a LeadMagic solo para verificar correos',
  desc: 'Los precios de LeadMagic empiezan en 99 $ al mes por 5.000 créditos compartidos. Giggal.ai es un verificador a 9,90 $ por 10.000 créditos que no caducan nunca.',
  h1: ['Una ', 'alternativa a LeadMagic', ' solo para verificar correos'],
  heroP:
    'LeadMagic es una plataforma de datos B2B. La validación de correos es uno de sus productos y comparte un fondo mensual de créditos con los demás. Si solo necesitas verificar listas de correo, Giggal.ai hace solo ese trabajo. Cuesta 9,90 $ por 10.000 correos, con un único pago.',
  bluf: [
    { k: 'Qué es', v: 'LeadMagic vende datos de contactos y de empresas. Giggal.ai solo verifica direcciones de correo.' },
    { k: 'Precio', v: 'LeadMagic empieza en 99 $ al mes. Giggal.ai cuesta 9,90 $ por 10.000 créditos, con un único pago.' },
    { k: 'Créditos gratis', v: 'LeadMagic no da créditos gratis. Giggal.ai da 1.000 sin tarjeta.' },
    { k: 'Catch-all', v: 'Los dos devuelven un resultado en direcciones catch-all. Giggal.ai también verifica detrás de 15 gateways de correo identificados por su nombre.' },
  ],
  about: {
    heading: '¿Qué es LeadMagic?',
    paragraphs: [
      'LeadMagic es una plataforma de datos B2B para equipos de ventas. Encuentra correos de trabajo y números de móvil, y añade datos de empresa a los contactos. También sigue los cambios de empleo y la actividad publicitaria.',
      'La validación de correos es un producto dentro de LeadMagic. Devuelve válido, no válido o desconocido. Un resultado concluyente cuesta 0,25 créditos, y un resultado desconocido es gratis. La validación catch-all es un producto aparte que usa los mismos créditos.',
      'Los equipos usan LeadMagic desde su aplicación web, una API REST, una CLI o un servidor MCP. Se conecta con herramientas como Clay, Apollo, Smartlead, Instantly, Salesforce, Zapier y Make.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Precios de LeadMagic en 2026',
  pricingProse:
    'LeadMagic es una suscripción mensual. Essential cuesta 99 $ por 5.000 créditos. Growth cuesta 249 $ por 20.000, Professional 499 $ por 50.000 y Ultimate 849 $ por 100.000. Todos los productos usan los mismos créditos.',
  pricingExtra: [
    'Con 0,25 créditos por validación, el plan de 99 $ cubre 20.000 verificaciones al mes. Para 100.000 verificaciones al mes necesitas Professional, a 499 $. Con el pago anual, dos meses son gratis. Los créditos mensuales no usados se acumulan, hasta el doble de la cuota mensual.',
    'Giggal.ai no tiene suscripción. 10.000 créditos cuestan 9,90 $, 100.000 cuestan 76 $ y un millón cuesta 680 $. Los créditos no caducan nunca.',
  ],
  reasons: {
    heading: 'Por qué los equipos buscan una alternativa a LeadMagic',
    items: [
      { k: 'Factura mensual', v: 'LeadMagic cobra cada mes, también en los meses en que no verificas nada. Los créditos de Giggal.ai se compran una vez.' },
      { k: 'Créditos compartidos', v: 'La validación y el enriquecimiento usan los mismos créditos. Una limpieza grande de listas deja menos créditos para buscar contactos.' },
      { k: 'Sin prueba gratis', v: 'LeadMagic no da créditos gratis. Pagas antes de poder probarlo con tu propia lista.' },
      { k: 'Gateways', v: 'LeadMagic no publica compatibilidad con secure email gateways como Proofpoint o Mimecast.' },
    ],
  },
  catchAllHeading: 'LeadMagic vs Giggal.ai en direcciones catch-all',
  catchAllProse:
    'LeadMagic devuelve válido, no válido o desconocido en dominios catch-all, y no cobra los resultados desconocidos. Giggal.ai también devuelve un resultado en direcciones catch-all, a 1 crédito cada una. Además verifica direcciones detrás de 15 secure email gateways, como Proofpoint, Mimecast y Barracuda. Estos gateways aceptan al principio todas las direcciones. Por eso una verificación básica no distingue una dirección real de una falsa.',
  strengths: {
    heading: 'Lo que LeadMagic hace bien',
    intro: 'LeadMagic es mejor opción si necesitas esto:',
  },
  others: {
    heading: 'Otras alternativas a LeadMagic',
    intro: 'Si necesitas buscar y verificar en una sola herramienta, estas son otras opciones. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'Findymail', text: 'Un buscador de correos que también verifica. Su plan Starter cuesta 99 $ al mes por 5.000 créditos de búsqueda y 5.000 créditos de verificación. Promete una tasa de rebote inferior al 5%.' },
      { name: 'Anymail Finder', text: 'Un buscador de correos con un verificador aparte. Una verificación cuesta 0,2 créditos, y los planes empiezan en 29 $ al mes por 400 créditos.' },
      { name: 'no2bounce', text: 'Un verificador con créditos de pago por uso que no caducan nunca. 10.000 créditos cuestan 20 $.' },
    ],
  },
  testHeading: 'Prueba Giggal.ai con una lista que LeadMagic ya verificó',
  testSteps: [
    'Exporta una lista que ya verificaste con LeadMagic.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Compara las filas catch-all con lo que LeadMagic devolvió para las mismas direcciones.',
  ],
  ctaHeadline: 'Verifica tu lista sin un plan mensual',
  faqs: [
    {
      q: '¿Cuánto cuesta LeadMagic?',
      a: 'LeadMagic empieza en 99 $ al mes por 5.000 créditos. Los planes llegan hasta 849 $ al mes por 100.000 créditos. La validación de correos cuesta 0,25 créditos por resultado concluyente, así que el plan de 99 $ cubre 20.000 verificaciones.',
    },
    {
      q: '¿LeadMagic tiene un plan gratuito?',
      a: 'No. LeadMagic dice que no hay créditos gratis. Su función de búsqueda tiene una prueba de 14 días. Giggal.ai da 1.000 créditos gratis sin tarjeta, válidos en una carga masiva.',
    },
    {
      q: '¿Es Giggal.ai una buena alternativa a LeadMagic?',
      a: 'Sí, si solo necesitas verificar correos. Giggal.ai verifica listas, devuelve un resultado en direcciones catch-all y cuesta 9,90 $ por 10.000. No encuentra correos ni números de teléfono, así que no sustituye los productos de datos de LeadMagic.',
    },
    {
      q: '¿LeadMagic cobra los resultados desconocidos?',
      a: 'No. LeadMagic cobra 0,25 créditos por un resultado concluyente y nada por un resultado desconocido. Giggal.ai también devuelve el crédito cuando un resultado es desconocido.',
    },
    {
      q: '¿Vale la pena LeadMagic solo para verificar correos?',
      a: 'Vale la pena si usas sus productos de datos cada mes. Solo para verificar, pagas al menos 99 $ al mes. Giggal.ai vende 10.000 verificaciones por 9,90 $, con un único pago.',
    },
    {
      q: '¿Es neutral la prueba catch-all de LeadMagic?',
      a: 'No. LeadMagic la publicó en febrero de 2026 y se situó en primer lugar. Léela como una prueba de un proveedor. Giggal.ai no estaba entre las herramientas de esa prueba.',
    },
  ],
  breadcrumb: 'Alternativa a LeadMagic',
}

export default cfg
