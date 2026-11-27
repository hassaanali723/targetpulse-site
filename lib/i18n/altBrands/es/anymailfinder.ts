// Spanish Anymailfinder alternative page. Translated from app/(en)/anymailfinder-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'anymailfinder',
  path: '/es/alternativa-a-anymailfinder',
  cluster: 'altAnymailfinder',
  metaTitle: 'Alternativa a Anymailfinder para verificar correos | Giggal.ai',
  ogTitle: 'Una alternativa a Anymailfinder para verificar listas de correo',
  desc: '¿Buscas una alternativa a Anymailfinder? Compara los precios de Anymail Finder con Giggal.ai, un verificador de pago por uso a 9,90 $ por 10.000 créditos.',
  h1: ['Una ', 'alternativa a Anymailfinder', ' para las listas que ya tienes'],
  heroP:
    'Anymail Finder está hecho para encontrar direcciones de correo. Su verificador es una herramienta secundaria y se paga con un plan mensual. Si tu lista ya existe y solo necesitas verificarla, Giggal.ai lo hace por 9,90 $ por 10.000 correos, sin suscripción.',
  bluf: [
    { k: 'Función principal', v: 'Anymail Finder encuentra correos. Giggal.ai verifica los correos que ya tienes.' },
    { k: 'Precio', v: 'Una verificación cuesta 0,2 créditos, en planes desde 29 $ al mes. Giggal.ai cuesta 9,90 $ por 10.000, con un único pago.' },
    { k: 'Créditos', v: 'Los créditos de Anymail Finder caducan si cancelas. Los créditos de Giggal.ai no caducan nunca.' },
    { k: 'Desconocido', v: 'Anymail Finder cobra cada verificación. Giggal.ai devuelve el crédito en los resultados desconocidos.' },
  ],
  about: {
    heading: '¿Qué es Anymail Finder?',
    paragraphs: [
      'Anymail Finder, también escrito Anymailfinder, es un buscador de correos para ventas B2B. Le das un nombre y una empresa, y devuelve un correo de trabajo verificado. También puede buscar por dominio, cargo o URL de LinkedIn.',
      'Tiene una extensión de Chrome, carga masiva de hasta 100.000 filas y una API. Encontrar el correo de una persona cuesta 1 crédito, y solo cuando encuentra un correo verificado.',
      'Anymail Finder también tiene un verificador de correos para listas de otras fuentes. Cada verificación cuesta 0,2 créditos y se cobra siempre. Devuelve válido, arriesgado o no válido.',
    ],
  },
  reasons: {
    heading: 'Por qué la gente busca una alternativa a Anymailfinder',
    items: [
      { k: 'Plan mensual', v: 'Tus créditos solo se mantienen mientras sigas suscrito. Si cancelas, caducan al final del periodo de facturación.' },
      { k: 'Por verificación', v: 'El verificador cobra 0,2 créditos por cada verificación, también por las direcciones que no puede confirmar.' },
      { k: 'Tarjeta para la prueba', v: 'La prueba de 7 días pide una tarjeta. Giggal.ai da 1.000 créditos gratis sin tarjeta.' },
      { k: 'Gateways', v: 'Anymail Finder no publica compatibilidad con secure email gateways como Proofpoint o Mimecast.' },
    ],
  },
  catchAllHeading: 'Cómo tratan Anymail Finder y Giggal.ai los correos catch-all',
  catchAllProse:
    'Anymail Finder dice que verifica la mayoría de las direcciones catch-all como válidas o no válidas. Las pocas que no puede alcanzar quedan como arriesgadas. Giggal.ai también devuelve un resultado en direcciones catch-all, a 1 crédito cada una. Además verifica detrás de 15 secure email gateways identificados por su nombre. Cuando Giggal.ai no obtiene respuesta, el resultado es desconocido y recuperas el crédito.',
  pricingHeading: 'Precios de Anymail Finder para verificar correos',
  pricingProse:
    'Anymail Finder vende planes mensuales desde 29 $ por 400 créditos hasta 799 $ por 100.000 créditos. El pago anual ahorra un 33%. Una verificación cuesta 0,2 créditos, así que 10.000 verificaciones usan 2.000 créditos.',
  pricingExtra: [
    'Por eso 10.000 verificaciones al mes entran en el plan de 89 $, y 100.000 verificaciones en el plan de 299 $. Los créditos no usados se acumulan mientras sigas suscrito. Giggal.ai vende 10.000 créditos por 9,90 $ y 100.000 por 76 $, con un único pago y sin caducidad.',
  ],
  strengths: {
    heading: 'Cuándo Anymail Finder es mejor opción',
    intro: 'Anymail Finder hace cosas que Giggal.ai no hace. Elígelo para estas necesidades:',
  },
  others: {
    heading: 'Otras alternativas a Anymailfinder',
    intro: 'Estas herramientas encuentran correos, los verifican o hacen las dos cosas. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'Findymail', text: 'Encuentra y verifica correos, con una extensión de Chrome para LinkedIn y Sales Navigator. Starter cuesta 99 $ al mes por 5.000 créditos de búsqueda y 5.000 créditos de verificación.' },
      { name: 'LeadMagic', text: 'Una plataforma de datos B2B con búsqueda de correos, números de móvil y validación. La validación cuesta 0,25 créditos por resultado concluyente, en planes desde 99 $ al mes.' },
      { name: 'Scrubby', text: 'Un verificador para direcciones catch-all y direcciones protegidas por gateways. Los créditos de pago por uso cuestan 0,008 $ cada uno y no caducan nunca.' },
    ],
  },
  testHeading: 'Verifica una exportación de Anymail Finder con Giggal.ai',
  testSteps: [
    'Exporta una lista que ya verificaste con Anymail Finder.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Compara las filas que Anymail Finder marcó como arriesgadas con los resultados que devuelve Giggal.ai.',
  ],
  ctaHeadline: 'Verifica los correos que ya encontraste',
  faqs: [
    {
      q: '¿Cuál es la mejor alternativa a Anymailfinder?',
      a: 'Depende de la tarea. Para encontrar correos, mira Findymail o LeadMagic. Para verificar una lista que ya tienes, Giggal.ai cuesta 9,90 $ por 10.000 créditos, sin suscripción y con créditos que no caducan nunca.',
    },
    {
      q: '¿Cuánto cuesta Anymail Finder?',
      a: 'Los planes mensuales van desde 29 $ por 400 créditos hasta 799 $ por 100.000 créditos. El pago anual ahorra un 33%. Verificar un correo de otra fuente cuesta 0,2 créditos.',
    },
    {
      q: '¿Anymail Finder tiene una prueba gratuita?',
      a: 'Sí. Tiene una prueba de 7 días con 100 créditos. Añades una tarjeta, que se comprueba pero no se cobra. Giggal.ai da 1.000 créditos gratis sin tarjeta.',
    },
    {
      q: '¿Giggal.ai puede encontrar direcciones de correo como Anymail Finder?',
      a: 'No. Giggal.ai solo verifica las direcciones que ya tienes. Usa primero un buscador de correos y luego verifica la lista con Giggal.ai antes de enviar.',
    },
    {
      q: '¿Caducan los créditos de Anymail Finder?',
      a: 'Se acumulan sin límite mientras tu plan esté activo. Si cancelas, caducan al final del periodo de facturación. Los créditos de Giggal.ai no caducan nunca.',
    },
  ],
  breadcrumb: 'Alternativa a Anymail Finder',
}

export default cfg
