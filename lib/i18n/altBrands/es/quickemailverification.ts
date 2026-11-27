// Spanish QuickEmailVerification alternative page. Translated from
// app/(en)/quickemailverification-alternative (2026-11-27). The competitor's
// words come from lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'quickemailverification',
  path: '/es/alternativa-a-quickemailverification',
  cluster: 'altQuickemailverification',
  metaTitle: 'Alternativa a QuickEmailVerification y precios | Giggal.ai',
  ogTitle: 'Una alternativa a QuickEmailVerification que verifica el catch-all',
  desc: 'QuickEmailVerification cobra 60 $ por 10.000 y marca el catch-all como un estado. Giggal.ai devuelve un resultado en correos catch-all por 9,90 $ por 10.000.',
  h1: ['Una ', 'alternativa a QuickEmailVerification', ' que verifica correos catch-all'],
  heroP:
    'QuickEmailVerification es un verificador de correo con muchos años en el mercado y 100 créditos gratis al día. Marca las direcciones catch-all como catch-all y se detiene ahí. Giggal.ai devuelve un resultado en esas direcciones, por 9,90 $ por 10.000 correos.',
  bluf: [
    { k: 'Catch-all', v: 'QuickEmailVerification marca el catch-all como un estado. Giggal.ai devuelve un resultado.' },
    { k: 'Precio', v: '10.000 créditos cuestan 60 $ en QuickEmailVerification y 9,90 $ en Giggal.ai.' },
    { k: 'Créditos gratis', v: 'QuickEmailVerification da 100 al día. Giggal.ai da 1.000 una sola vez, sin tarjeta.' },
    { k: 'Caducidad', v: 'Los créditos de pago por uso no caducan nunca en ninguna de las dos herramientas.' },
  ],
  about: {
    heading: '¿Qué es QuickEmailVerification?',
    paragraphs: [
      'QuickEmailVerification es un servicio de verificación de correo de quickemailverification.com. Verifica listas masivas, correos sueltos y formularios de registro mediante una API REST.',
      'Su plan gratuito da 100 créditos cada día. Dice que se integra con más de 50 herramientas de marketing, entre ellas Zapier y WordPress.',
      'Muestra en su web los distintivos ISO 27001, GDPR, CCPA y HIPAA, y declara un 99% de precisión.',
    ],
  },
  reasons: {
    heading: 'Por qué los equipos buscan una alternativa a QuickEmailVerification',
    items: [
      { k: 'Catch-all', v: 'Las direcciones catch-all vuelven como catch-all. Sigues teniendo que decidir si envías o no.' },
      { k: 'Precio', v: '10.000 créditos cuestan 60 $, y 100.000 cuestan 320 $.' },
      { k: 'Gateways', v: 'No anuncia compatibilidad con secure email gateways como Proofpoint o Mimecast.' },
    ],
  },
  catchAllHeading: 'Qué pasa con los correos catch-all en cada herramienta',
  catchAllProse:
    'QuickEmailVerification devuelve las direcciones catch-all con un estado catch-all. No confirma el buzón. En una lista B2B, eso puede dejar muchas direcciones sin una respuesta clara. Giggal.ai verifica esas direcciones más a fondo y devuelve uno de cuatro resultados, a 1 crédito cada una.',
  pricingHeading: 'Precios de QuickEmailVerification frente a Giggal.ai',
  pricingProse:
    'QuickEmailVerification vende créditos permanentes que no caducan nunca. 500 créditos cuestan 4 $, 10.000 cuestan 60 $, 100.000 cuestan 320 $ y un millón cuesta 1350 $. Un plan gratuito diario da 100 créditos al día.',
  pricingExtra: ['Giggal.ai vende 10.000 créditos por 9,90 $, 100.000 por 76 $ y un millón por 680 $. Sus créditos tampoco caducan nunca.'],
  strengths: {
    heading: 'Cuándo encaja bien QuickEmailVerification',
    intro: 'QuickEmailVerification tiene puntos fuertes reales:',
  },
  others: {
    heading: 'Otras alternativas a QuickEmailVerification',
    intro: 'Estos verificadores tratan las direcciones catch-all de formas distintas. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'Bounceless', text: '10.000 créditos cuestan 29 $, con los indicios de catch-all incluidos en el precio.' },
      { name: 'no2bounce', text: '10.000 créditos cuestan 20 $. Envía mensajes de prueba para confirmar los buzones catch-all.' },
      { name: 'Mailfloss', text: 'Limpia listas dentro de 41 plataformas de correo cada día. Los créditos prepagados cuestan 40 $ por 10.000.' },
    ],
  },
  testHeading: 'Vuelve a verificar tus filas catch-all con Giggal.ai',
  testSteps: [
    'Exporta una lista que ya verificaste con QuickEmailVerification.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Mira las filas que QuickEmailVerification marcó como catch-all y compara los resultados.',
  ],
  ctaHeadline: 'Obtén un resultado en las direcciones marcadas como catch-all',
  faqs: [
    {
      q: '¿Cuánto cuesta QuickEmailVerification?',
      a: 'Los créditos permanentes empiezan en 4 $ por 500. 10.000 cuestan 60 $, 100.000 cuestan 320 $ y un millón cuesta 1350 $. Estos créditos no caducan nunca.',
    },
    {
      q: '¿Es gratis QuickEmailVerification?',
      a: 'Tiene un plan gratuito con 100 créditos al día, y los créditos se renuevan cada día. Giggal.ai da 1.000 créditos gratis una sola vez, sin tarjeta, válidos en una carga masiva.',
    },
    {
      q: '¿QuickEmailVerification verifica correos catch-all?',
      a: 'Detecta los dominios catch-all y devuelve un estado catch-all. No confirma si el buzón existe. Giggal.ai devuelve un resultado en esas direcciones.',
    },
    {
      q: '¿Es Giggal.ai una buena alternativa a QuickEmailVerification?',
      a: 'Sí, para listas B2B con muchas direcciones catch-all. Giggal.ai cuesta 9,90 $ por 10.000 créditos y devuelve un resultado en esas direcciones.',
    },
  ],
  breadcrumb: 'Alternativa a QuickEmailVerification',
}

export default cfg
