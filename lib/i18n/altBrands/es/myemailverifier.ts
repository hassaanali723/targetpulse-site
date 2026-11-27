// Spanish MyEmailVerifier alternative page. Translated from
// app/(en)/myemailverifier-alternative (2026-11-27). myemailverifier.com blocked
// our check on 2026-11-27, so its prices are from the August 2026 check and the
// page says so. Competitor words come from lib/i18n/altBrands/es/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'es',
  slug: 'myemailverifier',
  path: '/es/alternativa-a-myemailverifier',
  cluster: 'altMyemailverifier',
  metaTitle: 'Alternativa a MyEmailVerifier: precios y catch-all | Giggal.ai',
  ogTitle: 'Una alternativa a MyEmailVerifier para listas B2B',
  desc: 'MyEmailVerifier da 100 créditos gratis al día, pero marca el catch-all como un estado. Giggal.ai da un resultado en correos catch-all por 9,90 $ por 10.000.',
  h1: ['Una ', 'alternativa a MyEmailVerifier', ' para listas B2B con dominios catch-all'],
  heroP:
    'MyEmailVerifier es un verificador de correo de bajo coste con 100 créditos gratis al día. Marca las direcciones catch-all con un estado propio y no las confirma. Giggal.ai devuelve un resultado en esas direcciones, por 9,90 $ por 10.000 correos.',
  bluf: [
    { k: 'Catch-all', v: 'MyEmailVerifier marca el catch-all como un estado. Giggal.ai devuelve un resultado.' },
    { k: 'Precio', v: '10.000 créditos cuestan 15 $ en MyEmailVerifier y 9,90 $ en Giggal.ai.' },
    { k: 'Con volumen', v: 'Un millón de créditos cuesta 349 $ en MyEmailVerifier y 680 $ en Giggal.ai.' },
    { k: 'Créditos gratis', v: 'MyEmailVerifier da 100 al día. Giggal.ai da 1.000 una sola vez, sin tarjeta.' },
  ],
  about: {
    heading: '¿Qué es MyEmailVerifier?',
    paragraphs: [
      'MyEmailVerifier es un servicio de verificación de correo de myemailverifier.com. Verifica listas masivas y correos sueltos, y tiene una API.',
      'Da 100 créditos gratis cada día. Los créditos de pago empiezan en 4 $ por 1.000 y no caducan nunca.',
      'Devuelve las direcciones catch-all con un estado catch-all aparte. No confirma si esos buzones existen.',
    ],
  },
  reasons: {
    heading: 'Por qué la gente busca una alternativa a MyEmailVerifier',
    items: [
      { k: 'Catch-all', v: 'Las direcciones catch-all vuelven sin una respuesta clara. En las listas B2B, pueden ser una gran parte de la lista.' },
      { k: 'Gateways', v: 'MyEmailVerifier no menciona Proofpoint, Mimecast ni otros gateways tras los que pueda verificar.' },
    ],
  },
  catchAllHeading: 'Correos catch-all: MyEmailVerifier frente a Giggal.ai',
  catchAllProse:
    'Muchos dominios de empresa aceptan cualquier dirección, así que una verificación básica no distingue una dirección real de una falsa. MyEmailVerifier marca estas direcciones como catch-all y te deja la decisión. Giggal.ai las verifica más a fondo y devuelve uno de los cuatro resultados de abajo, a 1 crédito cada una.',
  pricingHeading: 'Precios de MyEmailVerifier frente a Giggal.ai',
  pricingProse:
    'MyEmailVerifier vende créditos que no caducan nunca. En nuestra comprobación de agosto de 2026, 1.000 créditos costaban 4 $, 10.000 costaban 15 $, 100.000 costaban 99 $ y un millón costaba 349 $.',
  pricingExtra: [
    'Giggal.ai vende 10.000 créditos por 9,90 $, 100.000 por 76 $ y un millón por 680 $. Con un millón, MyEmailVerifier cuesta menos. Giggal.ai añade un resultado en las direcciones catch-all y tras gateways.',
  ],
  strengths: {
    heading: 'Cuándo encaja bien MyEmailVerifier',
    intro: 'MyEmailVerifier es una buena opción para algunas listas:',
  },
  others: {
    heading: 'Otras alternativas a MyEmailVerifier',
    intro: 'Estos verificadores también tienen precios bajos o créditos gratis diarios. Los precios son de la web de cada proveedor el 27 de noviembre de 2026.',
    items: [
      { name: 'QuickEmailVerification', text: 'También da 100 créditos gratis al día. 10.000 créditos permanentes cuestan 60 $.' },
      { name: 'Bounceless', text: 'Da 1.000 créditos gratis al mes con un correo de empresa. 10.000 créditos cuestan 29 $, con los indicios de catch-all incluidos.' },
      { name: 'no2bounce', text: '10.000 créditos cuestan 20 $ y no caducan nunca. Envía mensajes de prueba para confirmar los buzones catch-all.' },
    ],
  },
  testHeading: 'Verifica tus filas catch-all con Giggal.ai',
  testSteps: [
    'Exporta una lista que ya verificaste con MyEmailVerifier.',
    'Verifícala aquí con los 1.000 créditos gratis. Sin tarjeta.',
    'Compara las filas que MyEmailVerifier marcó como catch-all.',
  ],
  ctaHeadline: 'Obtén un resultado en las direcciones catch-all',
  faqs: [
    {
      q: '¿Cuánto cuesta MyEmailVerifier?',
      a: 'En nuestra comprobación de agosto de 2026, 1.000 créditos costaban 4 $, 10.000 costaban 15 $, 100.000 costaban 99 $ y un millón costaba 349 $. Los créditos no caducan nunca.',
    },
    {
      q: '¿Es gratis MyEmailVerifier?',
      a: 'Da 100 créditos gratis cada día. Los créditos diarios se renuevan en lugar de terminar tras una prueba. Giggal.ai da 1.000 créditos gratis una sola vez, sin tarjeta.',
    },
    {
      q: '¿MyEmailVerifier verifica correos catch-all?',
      a: 'Detecta los dominios catch-all y devuelve un estado catch-all. No confirma el buzón. Giggal.ai devuelve un resultado en las direcciones catch-all a 1 crédito cada una.',
    },
    {
      q: '¿Caducan los créditos de Giggal.ai?',
      a: 'No. Los créditos de Giggal.ai no caducan nunca. Los de MyEmailVerifier tampoco caducan.',
    },
  ],
  breadcrumb: 'Alternativa a MyEmailVerifier',
}

export default cfg
