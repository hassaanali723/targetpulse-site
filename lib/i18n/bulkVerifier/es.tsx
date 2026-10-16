import type { BulkVerifierCopy } from '@/components/l10n/BulkVerifierL10n'
import { InlineLink } from '@/components/l10n/BulkVerifierL10n'

// Spanish copy for /es/validador-de-correos-masivos, one page for every
// Spanish-speaking country (Latin America first). Translated from
// app/(en)/bulk-email-verifier/page.tsx. Keywords: validador de correos masivos
// (primary, Ahrefs "validador de correos masivos gratis" 20/month), verificar
// listas de email (20/month), verificación masiva de correos (the Spanish home
// title), validar correos masivos, verificador de correos masivos, gratis.
// Both nouns, correo and email, as in lib/i18n/emailChecker/es.tsx. Address
// form: tú. The English "bulk email verifier" appears once, in the definition.

export const copy: BulkVerifierCopy = {
  meta: {
    title: 'Validador de correos masivos: verifica listas gratis',
    description:
      'Validador de correos masivos para CSV y Excel de hasta 50.000 direcciones. Resultado válido o no válido en cada fila, catch-all incluido. 1.000 créditos gratis.',
    breadcrumb: 'Validador de correos masivos',
    appName: 'Giggal.ai Validador de correos masivos',
  },
  hero: {
    h1Lead: 'Validador de correos masivos:',
    h1Rest: 'verifica toda tu lista a la vez',
    intro:
      'Sube un archivo CSV o Excel y este validador de correos masivos comprueba cada dirección. Cada fila recibe un resultado válido o no válido, también las direcciones catch-all.',
    ctaPrimary: 'Verifica una lista gratis',
    ctaPricing: 'Ver precios',
    checks: ['1.000 créditos gratis', 'Sin tarjeta', 'Los créditos no caducan'],
  },
  facts: [
    { v: '50.000', l: 'direcciones por archivo' },
    { v: '98,5 %', l: 'de precisión en listas de empresas' },
    { v: '1 crédito', l: 'por dirección, catch-all incluido' },
    { v: '<3 %', l: 'de rebote tras la verificación, normalmente' },
  ],
  definition: {
    title: '¿Qué es la verificación masiva de correos?',
    text: 'La verificación masiva de correos comprueba una lista entera de direcciones a la vez y te dice cuáles pueden recibir correo. Un validador de correos masivos consulta los servidores de correo de cada dominio y pregunta si cada buzón existe, sin enviar ningún mensaje. En inglés, esta herramienta se llama bulk email verifier. Así eliminas las direcciones que rebotarían antes de enviar. Eso protege tu reputación de remitente y tu entregabilidad.',
  },
  steps: {
    title: 'Cómo funciona la verificación masiva de correos',
    intro: 'Son tres pasos, y nadie de tu lista recibe ningún correo. La mayoría de las listas se procesan en minutos.',
    items: [
      {
        title: 'Sube tu lista',
        text: 'Añade un archivo CSV o Excel con hasta 50.000 direcciones de email. Si tu lista es más grande, divídela en varios archivos.',
      },
      {
        title: 'Se comprueba cada dirección',
        text: 'El verificador de correos masivos consulta los servidores de correo de cada dominio y pregunta si el buzón existe. También marca las direcciones desechables, de rol, duplicadas y catch-all.',
      },
      {
        title: 'Descarga los resultados',
        text: 'Recibes un CSV con un resultado en cada fila. Conserva las direcciones válidas, elimina las no válidas y vuelve a comprobar las desconocidas más tarde.',
      },
    ],
  },
  results: {
    title: 'Qué devuelve el validador de correos masivos para cada dirección',
    intro: 'Cada fila termina con uno de tres resultados.',
    valid: {
      title: 'Válido',
      text: 'El buzón existe, así que un correo enviado a esa dirección debería llegar. Conserva estas direcciones.',
    },
    invalid: {
      title: 'No válido',
      text: 'El formato es incorrecto, el dominio no tiene servidor de correo o el buzón no existe. Un correo enviado ahí rebotará. Elimina estas direcciones.',
    },
    unknown: {
      title: 'Desconocido',
      text: 'El servidor de correo no dio una respuesta clara, a menudo por greylisting. Vuelve a comprobarlas más tarde. Los créditos de los resultados desconocidos se reembolsan.',
    },
    flagsIntro: 'Cada fila muestra también estas marcas, para que decidas qué conservar:',
    flags: [
      { lead: 'Catch-all', rest: ', resuelta como válida o no válida en lugar de quedarse como arriesgada' },
      { lead: 'Desechable', rest: ', un buzón temporal que dejará de funcionar' },
      { lead: 'De rol', rest: ', como info@ o ventas@, un buzón compartido y no una persona' },
      { lead: 'Duplicada', rest: ', la misma dirección más de una vez en tu archivo' },
    ],
  },
  catchAll: {
    title: 'Las direcciones catch-all reciben un resultado válido o no válido',
    paragraphs: [
      <>
        Algunos servidores de correo de empresa aceptan cualquier dirección, real o inventada. Eso es un{' '}
        <InlineLink locale="es" href="/catch-all-verification">dominio catch-all</InlineLink>. Una comprobación normal
        recibe un sí para cada dirección de ese dominio. Por eso no puede distinguir un buzón real de un error de
        escritura.
      </>,
      'Muchos validadores de correo masivo se detienen ahí y marcan cada dirección catch-all como "arriesgada". En las listas B2B pueden ser una gran parte de tus contactos, y muchos son personas reales. Te toca adivinar a cuáles enviar.',
      <>
        Giggal.ai comprueba cada dirección catch-all y devuelve válido o no válido, por el mismo crédito que cualquier
        otra dirección. También funciona en dominios protegidos por{' '}
        <InlineLink locale="es" href="/seg-email-verification">gateways de seguridad como Proofpoint y Mimecast</InlineLink>{' '}
        (en inglés), donde otras herramientas suelen devolver desconocido.
      </>,
    ],
  },
  pricing: {
    title: 'Validador de correos masivos gratis: empieza con 1.000 créditos',
    intro:
      'Cada cuenta nueva recibe 1.000 créditos gratis, sin tarjeta. Con ellos verificas gratis una lista de hasta 1.000 direcciones. Después, este servicio de verificación masiva de correos es de pago por uso. Compras créditos una sola vez, no hay plan mensual y los créditos no caducan.',
    colCredits: 'Créditos (direcciones)',
    colPrice: 'Precio',
    colPer1k: 'Por 1.000 direcciones',
    freeLabel: 'Gratis',
    freeNote: 'Cuentas nuevas, sin tarjeta',
    footnote: (
      <>
        Un crédito verifica una dirección, con la comprobación catch-all incluida. Consulta todos los{' '}
        <InlineLink locale="es" href="/pricing">precios</InlineLink>.
      </>
    ),
  },
  useCases: {
    title: 'Cuándo usar un validador de correos masivos',
    intro:
      'Verifica una lista siempre que vayas a enviar a muchas direcciones a la vez. Si eliminas antes las direcciones muertas, tu entregabilidad se mantiene alta.',
    items: [
      'Antes de una campaña de correo en frío, para que los rebotes no dañen tu entregabilidad.',
      'Después de reunir contactos de un formulario, un evento o una base de datos de leads.',
      'Antes de escribir a una lista antigua de newsletter que no usas desde hace meses.',
      'Antes de importar contactos a tu CRM o a tu herramienta de email.',
    ],
  },
  software: {
    title: 'Software de verificación masiva de correos para tus propias herramientas',
    intro:
      'Subir un archivo es una opción. También puedes validar correos masivos desde tu propia app o tu flujo de trabajo.',
    items: [
      {
        title: 'API de verificación de correo (en inglés)',
        text: 'Envía direcciones desde tu app o tu formulario de registro y recibe el resultado en JSON.',
      },
      {
        title: 'Integraciones',
        text: 'Verifica automáticamente los contactos nuevos con Zapier o n8n.',
      },
      {
        title: 'Servidor MCP',
        text: 'Verifica correos desde Claude, ChatGPT, Cursor y VS Code.',
      },
    ],
  },
  versus: {
    listTitle: '¿Verificar listas de email o limpiar listas de email?',
    listText: (
      <>
        Verificar una lista de email da un resultado a cada dirección. Limpiarla es lo que haces con esos resultados:
        eliminas las direcciones no válidas, desechables y duplicadas y conservas un archivo limpio. Las dos tareas
        empiezan con la misma carga. Lee más sobre la{' '}
        <InlineLink locale="es" href="/email-list-cleaning">limpieza de listas de email</InlineLink> (en inglés).
      </>
    ),
    oneTitle: '¿Solo necesitas comprobar una dirección?',
    oneText: (
      <>
        Usa el <InlineLink locale="es" href="/email-checker">verificador de correo</InlineLink> gratis. Comprueba una
        dirección cada vez con las mismas comprobaciones y sin registro.
      </>
    ),
  },
  faqTitle: 'Preguntas frecuentes sobre el validador de correos masivos',
  faqs: [
    {
      q: '¿Qué es un validador de correos masivos?',
      a: 'Un validador de correos masivos comprueba una lista entera de direcciones de email de una sola vez, en lugar de una dirección cada vez. Subes un archivo y cada dirección recibe un resultado: válido, no válido o desconocido. También se llama verificador de correos masivos o herramienta de verificación masiva de correos.',
    },
    {
      q: '¿Cuántos correos puedo verificar a la vez?',
      a: 'Hasta 50.000 direcciones por archivo. Si tu lista es más grande, divídela en varios archivos y sube cada uno.',
    },
    {
      q: '¿Hay un validador de correos masivos gratis?',
      a: 'Sí. Cada cuenta nueva recibe 1.000 créditos gratis, sin tarjeta. Un crédito verifica una dirección, así que puedes verificar gratis una lista de hasta 1.000 direcciones.',
    },
    {
      q: '¿Validar correos masivos gratis es de verdad gratis?',
      a: 'Sí. Tus primeras 1.000 direcciones son gratis, sin tarjeta. Los créditos gratis no caducan, así que puedes usarlos cuando quieras. Solo pagas si necesitas verificar más de 1.000 direcciones.',
    },
    {
      q: '¿Cuánto tarda la verificación masiva de correos?',
      a: 'La mayoría de las listas se procesan en minutos.',
    },
    {
      q: '¿Qué formatos de archivo puedo subir?',
      a: 'CSV o Excel. Descargas los resultados en un CSV, con un resultado en cada fila.',
    },
    {
      q: '¿El verificador de correos masivos envía mensajes a mi lista?',
      a: 'No. Pregunta a cada servidor de correo si el buzón existe y se detiene antes de enviar ningún mensaje. Nadie de tu lista recibe nada.',
    },
    {
      q: '¿Cuánto cuesta la verificación masiva de correos?',
      a: 'Un crédito por dirección, con la comprobación catch-all incluida. 10.000 direcciones cuestan 9,90 $ y 100.000 cuestan 76 $. Pagas una sola vez, sin plan mensual, y los créditos no caducan.',
    },
    {
      q: '¿Qué pasa con las direcciones catch-all?',
      a: 'Cada una se comprueba y se devuelve como válida o no válida, por el mismo crédito que cualquier otra dirección. Muchos validadores de correo masivo las marcan todas como "arriesgadas".',
    },
    {
      q: '¿Qué significa "desconocido" y lo pago?',
      a: 'Desconocido significa que el servidor de correo no dio una respuesta clara. A menudo es porque retrasa a propósito a los remitentes nuevos (greylisting). Vuelve a comprobar esas direcciones más tarde. Los créditos de los resultados desconocidos se reembolsan.',
    },
    {
      q: '¿Validar correos masivos es lo mismo que verificar listas de correos?',
      a: 'Sí. Validar, verificar y comprobar son tres palabras para la misma tarea: saber qué direcciones de una lista pueden recibir correo.',
    },
    {
      q: '¿Qué precisión tiene el validador de correos masivos?',
      a: 'Giggal.ai mide una precisión del 98,5 % en listas de empresas. Las listas verificadas con él suelen rebotar menos del 3 %.',
    },
    {
      q: '¿Mi lista se mantiene privada?',
      a: 'Giggal.ai está gestionado por TargetPulse Ltd y trata los datos personales conforme al RGPD, el reglamento europeo de protección de datos. La política de privacidad en giggal.ai/es/privacidad explica qué datos se recopilan, cómo se usan y cuánto tiempo se conservan.',
    },
  ],
  ctaHeadline: 'Verifica tu lista de correos en minutos',
}
