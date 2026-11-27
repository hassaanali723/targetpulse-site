// Spanish Findymail alternative page. Translated from app/(en)/findymail-alternative
// (2026-11-27). Numbers come from lib/competitorPricing.ts; the competitor's
// words (free tier, expiry, strengths) from lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'findymail',
  path: '/es/alternativa-a-findymail',
  cluster: 'altFindymail',
  metaTitle: 'Alternativas a Findymail y precios de Findymail | Giggal.ai',
  ogTitle: 'Alternativas a Findymail y precios comparados',
  desc: 'Los precios de Findymail empiezan en 99 $ al mes. Compara alternativas y competidores de Findymail, como Giggal.ai, un verificador a 9,90 $ por 10.000 créditos.',
  h1: ['Una ', 'alternativa a Findymail', ' para verificar los correos que ya tienes'],
  heroP:
    'Findymail encuentra correos B2B y los verifica. Sus planes empiezan en 99 $ al mes. Si ya tienes una lista y solo necesitas verificarla, Giggal.ai lo hace por 9,90 $ por 10.000 correos. Compras los créditos una vez y no caducan nunca.',
  bluf: [
    { k: 'Función principal', v: 'Findymail encuentra correos y después los verifica. Giggal.ai solo verifica.' },
    { k: 'Precio', v: 'Findymail empieza en 99 $ al mes. Giggal.ai cuesta 9,90 $ por 10.000 créditos, con un único pago.' },
    { k: 'Créditos gratis', v: 'Findymail da 10 créditos gratis. Giggal.ai da 1.000, sin tarjeta.' },
    { k: 'Garantía', v: 'Findymail promete una tasa de rebote inferior al 5%, y devuelve créditos si la supera.' },
  ],
  about: {
    heading: '¿Qué es Findymail?',
    paragraphs: [
      'Findymail es un buscador de correos B2B. Encuentra correos de trabajo a partir de un nombre y una empresa, una URL de LinkedIn o una búsqueda en Sales Navigator. Cada correo que encuentra se verifica antes de que lo recibas.',
      'Tiene una extensión de Chrome, un complemento para Google Sheets, carga masiva, una API y un buscador de teléfonos. Se conecta con Clay, HubSpot, Salesforce, Pipedrive, Instantly, Smartlead y Lemlist, entre otras herramientas.',
      'Findymail también vende créditos de verificación para listas de otras fuentes. Dice que verifica correos catch-all que otras herramientas marcan como arriesgados.',
    ],
  },
  pricingFirst: true,
  pricingHeading: 'Precios de Findymail en 2026',
  pricingProse:
    'Findymail tiene dos tipos de planes. Los planes según el uso son Individual a 99 $ al mes, Pro a 249 $, Team a 399 $ y Scale a 999 $. Indican puestos y tamaños de archivo, no un número de créditos.',
  pricingExtra: [
    'El plan Starter con créditos cuesta 99 $ al mes. Incluye 5.000 créditos de búsqueda y 5.000 créditos de verificación. Los volúmenes mayores son Enterprise, con precio bajo petición. Los créditos no usados se acumulan, hasta el doble de la cuota mensual.',
    'Giggal.ai no tiene plan mensual. 10.000 créditos cuestan 9,90 $, 100.000 cuestan 76 $ y un millón cuesta 680 $.',
  ],
  reasons: {
    heading: 'Por qué los equipos buscan una alternativa a Findymail',
    items: [
      { k: 'Solo verificar', v: 'Muchos equipos ya tienen una lista. No necesitan un buscador, solo un verificador.' },
      { k: 'Volumen', v: 'Starter incluye 5.000 créditos de verificación al mes. Los volúmenes mayores necesitan un presupuesto Enterprise.' },
      { k: 'Factura mensual', v: 'Findymail cobra cada mes. Los créditos de Giggal.ai se compran una vez y no caducan nunca.' },
      { k: 'Prueba pequeña', v: 'Findymail da 10 créditos gratis. Son muy pocos para probar una lista real.' },
    ],
  },
  catchAllHeading: 'Findymail vs Giggal.ai en correos catch-all',
  catchAllProse:
    'Findymail verifica correos catch-all que otras herramientas marcan como arriesgados. Giggal.ai también devuelve un resultado en direcciones catch-all, a 1 crédito cada una. Además verifica direcciones detrás de 15 secure email gateways identificados por su nombre, como Proofpoint, Mimecast y Barracuda. Findymail no publica compatibilidad con gateways.',
  strengths: {
    heading: 'Lo que Findymail hace bien',
    intro: 'Findymail es mejor opción si necesitas esto:',
  },
  others: {
    heading: 'Otras alternativas y competidores de Findymail',
    intro: 'Estas herramientas también encuentran o verifican correos B2B. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'Anymail Finder', text: 'Un buscador de correos con planes desde 29 $ al mes por 400 créditos. Promete que al menos el 97% de los correos que encuentra no darán un rebote duro.' },
      { name: 'LeadMagic', text: 'Una plataforma de datos B2B con búsqueda de correos, números de móvil y datos de empresa. Los planes empiezan en 99 $ al mes por 5.000 créditos compartidos.' },
      { name: 'Allegrow', text: 'Un verificador para equipos de ventas que también supervisa la ubicación en la bandeja de entrada y el estado del dominio. Starter cuesta 99 $ al mes por 5.000 contactos.' },
    ],
  },
  testHeading: 'Verifica una exportación de Findymail con Giggal.ai',
  testSteps: [
    'Exporta una lista que ya verificaste con Findymail.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Compara las filas catch-all con lo que Findymail devolvió para los mismos contactos.',
  ],
  ctaHeadline: 'Verifica tu lista sin suscripción',
  faqs: [
    {
      q: '¿Cuánto cuesta Findymail?',
      a: 'Los planes de Findymail empiezan en 99 $ al mes. El plan Starter con créditos incluye 5.000 créditos de búsqueda y 5.000 créditos de verificación. Los planes según el uso van de 99 $ a 999 $ al mes. Los volúmenes mayores tienen precio bajo petición.',
    },
    {
      q: '¿Findymail tiene un plan gratuito?',
      a: 'Findymail da 10 créditos gratis para probar, sin tarjeta. No hay un plan gratuito permanente. Giggal.ai da 1.000 créditos gratis sin tarjeta.',
    },
    {
      q: '¿Cuáles son las mejores alternativas a Findymail?',
      a: 'Para encontrar correos, Anymail Finder y LeadMagic son opciones habituales. Para verificar una lista que ya tienes, Giggal.ai cuesta 9,90 $ por 10.000 créditos, sin suscripción.',
    },
    {
      q: '¿Findymail es bueno para verificar correos?',
      a: 'Sí. Findymail verifica cada correo que encuentra y promete una tasa de rebote inferior al 5%. Starter incluye 5.000 créditos de verificación al mes, así que las listas grandes necesitan un plan Enterprise u otro verificador.',
    },
    {
      q: '¿Giggal.ai puede encontrar correos como Findymail?',
      a: 'No. Giggal.ai solo verifica. Encuentra primero los correos y después pasa la lista por Giggal.ai antes de enviar.',
    },
    {
      q: '¿Caducan los créditos de Findymail?',
      a: 'Los créditos no usados pasan de un mes a otro, hasta el doble de tu cuota mensual. Los créditos de Giggal.ai no caducan nunca.',
    },
  ],
  breadcrumb: 'Alternativa a Findymail',
}

export default cfg
