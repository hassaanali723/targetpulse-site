import type { EmailCheckerCopy } from '@/components/l10n/EmailCheckerL10n'
import { InlineLink } from '@/components/l10n/EmailCheckerL10n'

// Spanish copy for /es/validar-correo, one page for every Spanish-speaking
// country (Latin America first). Translated from app/(en)/email-checker/page.tsx.
// Keyword family from the previous page: validar correo (primary), verificar
// correo, verificador de correo / de email, validador de correo, comprobar
// correo, gratis. Both nouns, correo and email, because Spain types "email"
// and Latin America "correo". Address form: tú.

export const copy: EmailCheckerCopy = {
  hero: {
    h1Lead: 'Validar correo:',
    h1Rest: 'verificador de correo electrónico gratis',
    intro:
      'Valida o verifica cualquier correo electrónico en línea y gratis. Pega la dirección para comprobar el formato, el servidor de correo y el propio buzón. En los dominios catch-all, este verificador de email sigue comprobando y devuelve válido o no válido.',
  },
  tool: {
    caption: 'Sin registro, sin tarjeta. Una dirección por consulta.',
    freeCredits: '¿Necesitas más validaciones? Crea una cuenta y recibe 1.000 créditos gratis. Sin tarjeta.',
  },
  ratings: {
    reviews: (count) => `${count} reseñas`,
    ratedAria: (rating, platform) => `Giggal.ai tiene una valoración de ${rating.replace('.', ',')} sobre 5 en ${platform}`,
  },
  awards: {
    headingLead: 'Giggal.ai está valorado como',
    headingRest: 'Líder en SourceForge y Slashdot',
    showLabel: 'Mostrar {badge}',
  },
  steps: {
    title: 'Cómo validar un correo electrónico',
    intro:
      'Una validación de correo completa, también llamada verificación de email, tiene cuatro pasos. Los verificadores que solo hacen el primero explican por qué tantas listas "verificadas" siguen rebotando.',
    items: [
      {
        title: 'Formato',
        text: 'La dirección está bien escrita: una sola arroba, un nombre válido antes de ella y un dominio con extensión, como .com. Este paso encuentra errores de escritura y nada más.',
      },
      {
        title: 'Servidor de correo',
        text: '¿El dominio publica registros de servidor de correo (MX)? Sin registros MX no puede existir ningún buzón, así que la dirección está muerta antes de enviar nada.',
      },
      {
        title: 'Buzón',
        text: 'El verificador pregunta al servidor de correo si este buzón existe, sin enviar ningún mensaje. Un sí significa que el buzón existe. Un no significa que no existe.',
      },
      {
        title: 'Catch-all',
        text: 'Si el servidor también dice sí a una dirección inventada, el paso tres no demostró nada. Aquí la mayoría de los verificadores de correo muestran "catch-all" y se detienen. Giggal.ai aplica señales adicionales que distinguen un buzón real de un servidor que acepta todo. Luego devuelve válido o no válido.',
      },
    ],
    footnote:
      'El panel de resultados de arriba muestra cada paso mientras se ejecuta. Para validar un correo, pega la dirección y pulsa el botón. Una dirección tarda unos segundos.',
  },
  results: {
    title: 'Qué muestra el verificador de correo para cada dirección',
    intro: 'Cada comprobación termina con uno de tres resultados.',
    valid: {
      title: 'Válido',
      text: 'El buzón existe y pasó las comprobaciones adicionales, así que un correo enviado a esa dirección debería llegar.',
    },
    invalid: {
      title: 'No válido',
      text: 'La dirección tiene un formato incorrecto, no tiene servidor de correo o el servidor rechazó el buzón. Un correo enviado a ella rebotará.',
    },
    unknown: {
      title: 'Desconocido',
      text: 'Es raro aquí. El servidor no respondió a tiempo o retrasa a propósito a los remitentes nuevos. Vuelve a comprobarlo más tarde en lugar de darlo por muerto.',
    },
    detailsIntro: 'Debajo del resultado, el validador de correo muestra los datos que necesitas para decidir si enviar:',
    details: [
      { lead: 'El proveedor de correo', rest: ' (Google Workspace, Microsoft 365 o un gateway como Proofpoint)' },
      { lead: 'El servidor de correo que respondió', rest: '' },
      {
        lead: 'Si la dirección es desechable',
        rest: ' (un buzón temporal que desaparecerá)',
        href: '/es/verificar-correo-desechable',
      },
      { lead: 'Si es de rol', rest: ' (info@, ventas@, soporte@, que llegan a un buzón compartido y no a una persona)' },
      { lead: 'Si está en un proveedor gratuito', rest: ' como Gmail o Yahoo, un dato que importa al calificar contactos B2B' },
    ],
  },
  exists: {
    title: '¿Cómo saber si un correo existe?',
    p1: 'Un correo existe cuando su buzón está creado en el servidor de correo de destino y acepta mensajes. Para verificar el correo, el verificador pregunta directamente a ese servidor, sin enviar ningún mensaje. Así demuestra que el buzón está ahí. No demuestra quién es su dueño ni con qué frecuencia lo lee.',
    p2: 'Si no sabes si una dirección de tus contactos existe, compruébala en el verificador de correo de arriba.',
    signsIntro: 'Las direcciones que no existen suelen mostrar una de estas señales:',
    signs: [
      { lead: 'Dominios mal escritos', rest: ' como gmial.com o yaho.com, que no tienen servidor de correo o lo rechazan todo.' },
      { lead: 'Sin registros de servidor de correo', rest: ' en el dominio, así que el correo no tiene adónde ir.' },
      {
        lead: 'Un buzón rechazado:',
        rest: ' el dominio es real, pero el servidor dice que esa persona no está, a menudo porque dejó la empresa.',
      },
      {
        lead: 'Cadenas aleatorias',
        rest: ' antes de la @, escritas por bots o por personas que rellenaban un formulario que no querían completar.',
      },
    ],
  },
  whySend: {
    title: 'Por qué verificar un correo antes de enviar',
    p1: 'Un correo enviado a una dirección que no existe vuelve como rebote duro. Gmail, Outlook y otros proveedores de correo cuentan tus rebotes. Cuando rebotan demasiados correos, confían menos en tu dominio de envío. Entonces más de tus correos van a spam o se bloquean, incluso los enviados a personas reales. La verificación de correo encuentra esas direcciones antes de que envíes.',
    readMore: (
      <>
        Lee <InlineLink href="/es/blog/rebote-duro-vs-rebote-suave">rebote duro vs rebote suave</InlineLink> para saber qué
        significa cada código de rebote y qué hacer con él.
      </>
    ),
    bounceTitle: 'Menor tasa de rebote.',
    bounceText: 'Las listas limpiadas con Giggal.ai suelen rebotar menos del 3 %.',
    benefits: [
      {
        title: 'Una buena reputación de remitente.',
        text: 'Con menos rebotes, tu dominio mantiene una buena posición ante los proveedores de correo.',
      },
      {
        title: 'Mejor entregabilidad.',
        text: 'Con una buena reputación, más de tus correos llegan a la bandeja de entrada y no a la carpeta de spam.',
      },
      {
        title: 'Datos más limpios.',
        text: 'Las direcciones muertas salen de tu CRM antes de costarte tiempo o créditos de envío.',
      },
    ],
  },
  whenToUse: {
    title: 'Cuándo usar un verificador de email',
    intro: 'Usa este verificador de email cada vez que una dirección decida tu siguiente paso:',
    items: [
      'Antes de responder a un contacto entrante cuya dirección parece escrita a mano.',
      'Cuando un registro rebota y quieres saber si la dirección existió alguna vez.',
      'Antes de enviar a una dirección que encontraste en un sitio web o en un CRM.',
      'Para probar una dirección de una lista comprada antes de pagar por limpiar el archivo entero.',
      'Para confirmar un contacto en un dominio catch-all que otra herramienta marcó como "arriesgado".',
    ],
  },
  catchAll: {
    title: 'Por qué otros validadores de correo se detienen en los dominios catch-all',
    paragraphs: [
      <>
        Algunos servidores de correo de empresa aceptan cualquier dirección, real o inventada. Eso es un{' '}
        <InlineLink href="/es/verificacion-catch-all">dominio catch-all</InlineLink>. Si le preguntas por un empleado real,
        dice que sí. Si le preguntas por un nombre que inventaste, también dice que sí. Por eso la comprobación normal del
        buzón no demuestra nada ahí.
      </>,
      'Detectar un dominio catch-all es fácil: pruebas una dirección inventada y ves si la acepta. Por eso casi cualquier verificador de correo puede decirte que un dominio es catch-all. Saber qué buzones son reales detrás de él cuesta mucho más trabajo. Por eso la mayoría de los validadores se quedan en la etiqueta y te dejan la decisión a ti. En las listas B2B, las direcciones catch-all suelen ser una gran parte de los contactos, y muchas son personas reales.',
      <>
        Giggal.ai aplica las señales adicionales a cada dirección catch-all y devuelve válido o no válido. Por eso esta
        página permite solo unas pocas comprobaciones por visitante. Lee{' '}
        <InlineLink href="/es/blog/que-es-un-correo-catch-all">qué es un correo catch-all</InlineLink> para conocer todo el
        contexto.
      </>,
    ],
  },
  wholeList: {
    title: 'Comprueba una lista entera en lugar de un solo correo',
    list: (
      <>
        El verificador de correo de esta página revisa una dirección cada vez. Para la validación en bloque de una lista,
        crea una cuenta y sube un archivo CSV o Excel de hasta 50.000 direcciones. Luego{' '}
        <InlineLink href="/es">limpia tu lista de correos</InlineLink> con las mismas comprobaciones en cada fila. Empiezas
        con 1.000 créditos gratis y sin tarjeta.
      </>
    ),
    api: (
      <>
        Para validar direcciones dentro de tu propia app o formulario de registro, usa la{' '}
        <InlineLink href="/email-verification-api">API de verificación de correo</InlineLink>. Ejecuta las mismas
        comprobaciones y devuelve el resultado en JSON.
      </>
    ),
  },
  faqTitle: 'Preguntas frecuentes sobre el verificador de correo',
  faqs: [
    {
      q: '¿Qué es un verificador de email?',
      a: 'Un verificador de email te dice si una dirección de correo es válida. Comprueba su formato, su servidor de correo y el propio buzón. También se llama validador de correo o verificador de correo. Funciona sin enviar ningún mensaje a la dirección.',
    },
    {
      q: '¿Un validador de correo es lo mismo que un verificador de correo?',
      a: 'Sí. Verificador de correo, validador de correo y comprobador de email son tres nombres para el mismo tipo de herramienta. Todos verifican una dirección comprobando su formato, su servidor de correo y el buzón. Se diferencian en los dominios catch-all. Muchos se detienen ahí con "arriesgado". Este devuelve válido o no válido.',
    },
    {
      q: '¿Cómo funciona un verificador de correo?',
      a: 'Hace cuatro comprobaciones en orden. Primero, el formato de la dirección. Después, los registros del servidor de correo del dominio. Luego pregunta al servidor de correo si el buzón existe. En los dominios catch-all, donde el servidor dice sí a cualquier dirección, Giggal.ai aplica señales adicionales para distinguir un buzón real de uno falso.',
    },
    {
      q: '¿Cómo validar un correo electrónico?',
      a: 'Pega la dirección en el verificador de correo de la parte superior de esta página y lanza la comprobación. En unos segundos tienes el resultado: válido, no válido o desconocido. Debajo aparecen el motivo y los datos del servidor de correo.',
    },
    {
      q: '¿Puedo saber si un correo existe sin enviar un mensaje?',
      a: 'Sí. El verificador de correo pregunta al servidor de destino si el buzón existe y se detiene antes de enviar ningún mensaje. No llega nada a la bandeja de entrada de la persona.',
    },
    {
      q: '¿El verificador de correo envía un mensaje a la dirección?',
      a: 'No. La comprobación solo se comunica con el servidor de correo. El dueño de la dirección no recibe nada y nadie le avisa de que se comprobó su dirección.',
    },
    {
      q: '¿Es preciso un verificador de correo?',
      a: 'Depende del verificador. La mayoría son precisos en dominios normales y se detienen en los dominios catch-all, donde devuelven "arriesgado" o "desconocido". Giggal.ai sigue comprobando en los dominios catch-all y devuelve válido o no válido. Su precisión medida en listas de empresas es del 98,5 %.',
    },
    {
      q: '¿Qué significa "válido" en un dominio catch-all?',
      a: 'Que el buzón fue confirmado, no solo que el dominio aceptó el destinatario. Una simple etiqueta catch-all solo indica que el servidor dice sí a todo. Aquí, válido significa que la dirección pasó las comprobaciones adicionales que separan un buzón real de uno que rebotará.',
    },
    {
      q: '¿Qué significa "desconocido" al validar un correo?',
      a: 'El servidor de correo no dio una respuesta clara a tiempo. A menudo es porque retrasa a propósito a los remitentes nuevos (greylisting). No significa que la dirección esté muerta. Vuelve a comprobarla más tarde.',
    },
    {
      q: '¿Cuántas direcciones puedo validar aquí?',
      a: 'Unas pocas por hora, sin registro y sin tarjeta. Cada consulta ejecuta todas las comprobaciones, por eso el número es pequeño. Para validar más, crea una cuenta.',
    },
    {
      q: '¿Puede rebotar un correo válido?',
      a: 'Sí, pero es raro. Un resultado válido significa que el buzón existía en el momento de la comprobación. El correo aún puede rebotar si el buzón está lleno o si el servidor de correo deja de funcionar un tiempo. También puede rebotar si la persona deja la empresa después de la comprobación, o si el servidor bloquea tu dominio de envío. Valida las direcciones poco antes de enviar.',
    },
    {
      q: '¿Mis datos son privados?',
      a: 'Giggal.ai está gestionado por TargetPulse Ltd y trata los datos personales conforme al RGPD, el reglamento europeo de protección de datos. La política de privacidad en giggal.ai/es/privacidad explica qué datos se recopilan, cómo se usan y cuánto tiempo se conservan.',
    },
    {
      q: '¿Puedo validar una lista entera aquí?',
      a: 'No desde esta página. Crea una cuenta y sube la lista como archivo CSV o Excel. Cada dirección pasa las mismas comprobaciones. Empiezas con 1.000 créditos gratis y sin tarjeta.',
    },
  ],
  ctaHeadline: 'Valida toda tu lista',
  related: [
    { href: '/es/validar-correo/como-saber-si-un-correo-existe', label: '¿Cómo saber si un correo existe? Cuatro métodos' },
    { href: '/es/verificacion-catch-all', label: 'Verificación catch-all y direcciones arriesgadas' },
    { href: '/es/precios', label: 'Precios y créditos' },
    { href: '/es/verificar-correo-desechable', label: 'Detectar correos desechables y temporales' },
    { href: '/es/blog/que-es-un-correo-catch-all', label: 'Qué es un correo catch-all' },
  ],
}
