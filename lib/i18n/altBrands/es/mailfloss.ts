// Spanish Mailfloss alternative page. Translated from app/(en)/mailfloss-alternative
// (2026-11-27). Competitor words come from lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'mailfloss',
  path: '/es/alternativa-a-mailfloss',
  cluster: 'altMailfloss',
  metaTitle: 'Alternativa a Mailfloss: precios y catch-all | Giggal.ai',
  ogTitle: 'Una alternativa a Mailfloss que verifica correos catch-all',
  desc: 'Mailfloss limpia cada día la lista de tu plataforma de correo, pero marca los correos catch-all. Giggal.ai les da un resultado por 9,90 $ por 10.000 créditos.',
  h1: ['Una ', 'alternativa a Mailfloss', ' para limpiar listas de forma puntual'],
  heroP:
    'Mailfloss se conecta a tu plataforma de email marketing y limpia la lista cada día. Marca las direcciones catch-all, pero no las confirma. Giggal.ai verifica las listas que subes y devuelve un resultado en las direcciones catch-all, por 9,90 $ por 10.000 correos.',
  bluf: [
    { k: 'Cómo funciona', v: 'Mailfloss limpia tu lista dentro de tu plataforma de correo. Giggal.ai verifica las listas que subes o envías por API.' },
    { k: 'Catch-all', v: 'Mailfloss marca las direcciones catch-all. Giggal.ai devuelve un resultado en ellas.' },
    { k: 'Precio', v: 'Los créditos prepagados de Mailfloss cuestan 40 $ por 10.000. Giggal.ai cuesta 9,90 $.' },
    { k: 'Uso gratis', v: 'Mailfloss da 500 verificaciones gratis al mes. Giggal.ai da 1.000 una sola vez, sin tarjeta.' },
  ],
  about: {
    heading: '¿Qué es Mailfloss?',
    paragraphs: [
      'Mailfloss es un servicio de limpieza de listas de correo. Se conecta a 41 plataformas de correo, como Mailchimp, Klaviyo, HubSpot y ActiveCampaign. Después elimina cada día las direcciones no válidas de tu lista.',
      'También corrige errores tipográficos comunes en las direcciones de correo. Tiene una API en tiempo real, webhooks y un widget para formularios.',
      'Mailfloss vende suscripciones mensuales y créditos prepagados. Los créditos prepagados no caducan nunca.',
    ],
  },
  reasons: {
    heading: 'Por qué la gente busca una alternativa a Mailfloss',
    items: [
      { k: 'Catch-all', v: 'Mailfloss marca las direcciones catch-all. No confirma si el buzón existe.' },
      { k: 'Tarjeta para la prueba', v: 'La prueba de 7 días de las suscripciones pide una tarjeta de crédito.' },
      { k: 'Límite de plataformas', v: 'Lite se conecta a 1 plataforma de correo, y Business a 10.' },
      { k: 'Precio', v: 'Los créditos prepagados cuestan 40 $ por 10.000 y 300 $ por 100.000.' },
    ],
  },
  catchAllHeading: 'Cómo tratan Mailfloss y Giggal.ai los correos catch-all',
  catchAllProse:
    'Mailfloss marca las direcciones catch-all y te deja la decisión. Giggal.ai las verifica más a fondo y devuelve uno de cuatro resultados, a 1 crédito cada una. También verifica direcciones detrás de 15 secure email gateways identificados por su nombre.',
  pricingHeading: 'Precios de Mailfloss frente a Giggal.ai',
  pricingProse:
    'Las suscripciones de Mailfloss son Lite a 29 $ al mes por 10.000 créditos, Business a 59 $ por 25.000 y Pro a 209 $ por 125.000. Los créditos prepagados cuestan 8 $ por 1.000, 40 $ por 10.000, 300 $ por 100.000 y 1200 $ por un millón.',
  pricingExtra: [
    'Cada cuenta de Mailfloss recibe además 500 verificaciones gratis al mes. Giggal.ai vende 10.000 créditos por 9,90 $ y un millón por 680 $, sin suscripción.',
  ],
  strengths: {
    heading: 'Cuándo encaja bien Mailfloss',
    intro: 'Mailfloss hace algunas cosas que Giggal.ai no hace:',
  },
  others: {
    heading: 'Otras alternativas a Mailfloss',
    intro: 'Estos verificadores también limpian listas de marketing. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'Se integra con más de 50 herramientas de marketing. 10.000 créditos permanentes cuestan 60 $.' },
      { name: 'Bounceless', text: '10.000 créditos cuestan 29 $. Da 1.000 créditos gratis al mes con un correo de empresa.' },
      { name: 'no2bounce', text: 'Se integra con HubSpot, Klaviyo y Zoho. 10.000 créditos cuestan 20 $ y no caducan nunca.' },
    ],
  },
  testHeading: 'Prueba Giggal.ai con una exportación de tu plataforma de correo',
  testSteps: [
    'Exporta una lista que ya verificaste con Mailfloss.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Compara las filas catch-all con lo que marcó Mailfloss.',
  ],
  ctaHeadline: 'Obtén un resultado en las direcciones catch-all, no una marca',
  faqs: [
    {
      q: '¿Cuánto cuesta Mailfloss?',
      a: 'Las suscripciones empiezan en 29 $ al mes por 10.000 créditos. Los créditos prepagados cuestan 40 $ por 10.000 y 1200 $ por un millón, y no caducan nunca.',
    },
    {
      q: '¿Tiene Mailfloss un plan gratuito?',
      a: 'Sí. Cada cuenta recibe 500 verificaciones gratis al mes. Las suscripciones también tienen una prueba de 7 días, que pide tarjeta.',
    },
    {
      q: '¿Mailfloss verifica correos catch-all?',
      a: 'Los marca. No confirma si el buzón existe. Giggal.ai devuelve un resultado en las direcciones catch-all a 1 crédito cada una.',
    },
    {
      q: '¿Giggal.ai limpia la lista de mi plataforma de correo como Mailfloss?',
      a: 'No. Giggal.ai funciona con subidas de archivos, una API, Zapier, n8n y HubSpot. No ejecuta una limpieza diaria dentro de tu plataforma de correo.',
    },
  ],
  breadcrumb: 'Alternativa a Mailfloss',
}

export default cfg
