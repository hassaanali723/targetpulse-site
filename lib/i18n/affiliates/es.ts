import type { AffiliatesContent } from '@/lib/i18n/affiliates/types'

// Spanish copy of the affiliate page. Source: app/(en)/affiliates/page.tsx.
// Neutral Spanish, register "tú", as in lib/i18n/es.ts. Money as on the Spanish
// site: "50 $", "20 %".

export const AFFILIATES_ES: AffiliatesContent = {
  meta: {
    title: 'Programa de afiliados: 20 % de comisión recurrente | Giggal.ai',
    description:
      'Únete al programa de afiliados de Giggal.ai: 20 % de comisión recurrente por cada pago de tus referidos, atribución de 3 meses, pagos mensuales y sin tope.',
    ogTitle: 'Programa de afiliados: 20 % recurrente en verificación de correo',
    ogDescription:
      'Gana un 20 % de comisión recurrente por cada cliente que refieras a Giggal.ai. Sin fecha de fin y sin tope.',
  },
  crumb: 'Programa de afiliados',
  h1Lead: 'Gana un 20 % recurrente',
  h1Accent: 'cada mes, sin fecha de fin',
  intro: {
    before: 'Comparte',
    after:
      'con tu audiencia y gana una comisión del 20 % por cada pago de tus referidos, mientras sigan siendo clientes. Sin tope y sin caducidad.',
  },
  joinCta: 'Únete al programa de afiliados',
  howCta: 'Ver cómo funciona',
  stats: [
    { value: '20 %', label: 'Recurrente' },
    { value: '3 meses', label: 'Atribución' },
    { value: 'Mensuales', label: 'Pagos' },
    { value: '50 $', label: 'Pago mínimo' },
  ],
  why: {
    eyebrow: 'Por qué unirte',
    h2: 'Uno de los programas más generosos entre las herramientas de correo',
    sub: 'Ingresos recurrentes reales, no un pago único.',
    cards: [
      {
        title: '20 % recurrente',
        body: 'Ganas con cada pago de tus referidos, mes tras mes, año tras año.',
      },
      {
        title: 'Sin tope de ganancias',
        body: 'Refiere a 10 clientes o a 10.000. No hay límite para lo que puedes ganar.',
      },
      {
        title: 'Atribución de 3 meses',
        body: 'El referido cuenta para ti si se registra dentro de los 3 meses siguientes al clic en tu enlace.',
      },
      {
        title: 'Pagos mensuales',
        body: 'Cobras cada mes por PayPal o Wise cuando alcanzas el mínimo de 50 $.',
      },
    ],
  },
  how: {
    eyebrow: 'Cómo funciona',
    h2: 'Del registro al primer pago en días, no en meses',
    steps: [
      {
        title: 'Regístrate en 30 segundos',
        body: 'Regístrate en el programa y recibe al instante tu enlace de referido único. Sin entrevista y sin periodo de espera.',
      },
      {
        title: 'Comparte tu enlace',
        body: 'Promociona Giggal.ai en tu blog, tu newsletter, tus redes sociales, YouTube o directamente con clientes que necesitan listas de correo más limpias.',
      },
      {
        title: 'Cobra cada mes',
        body: 'Ganas el 20 % de cada pago de tus referidos. El seguimiento es automático y el pago llega cada mes.',
      },
    ],
  },
  earn: {
    eyebrow: 'Tu potencial',
    h2: 'Esto es lo que puedes ganar',
    sub: 'Calculado con clientes del plan 100K, el más elegido (76 $/mes). Los demás planes también pagan el 20 %.',
    colCustomers: 'Clientes referidos',
    colPlan: 'En el plan',
    colEarnings: 'Tus ganancias mensuales',
    perMonth: '/mes',
    note: 'Estas cifras son ilustrativas. Las ganancias reales dependen del plan que elijan tus referidos.',
  },
  who: {
    eyebrow: 'Para quién es',
    h2: 'Pensado para quienes cuidan la entregabilidad',
    sub: 'Si tu audiencia envía correos, tienes una audiencia para Giggal.ai.',
    cards: [
      {
        title: 'Especialistas en email marketing',
        body: 'Recomienda la herramienta en la que ya confías para limpiar listas antes de cada campaña.',
      },
      {
        title: 'Agencias',
        body: 'Obtén ingresos recurrentes por cada cliente que incorporas a Giggal.ai.',
      },
      {
        title: 'Creadores de cursos',
        body: 'Incluye Giggal.ai en el temario de tu curso de cold email o de generación de leads.',
      },
      {
        title: 'Comunidades SaaS',
        body: 'Compártelo con tu audiencia de marketers, fundadores y profesionales del crecimiento.',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    h2: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Cuándo y cómo cobro?',
        a: 'Los pagos se hacen cada mes por PayPal o Wise (tú eliges), cuando tu saldo pendiente llega a 50 $. No aplicamos retenciones. Cuando un referido paga, la comisión es tuya.',
      },
      {
        q: '¿Cuánto dura la comisión?',
        a: 'Mientras tu referido siga pagando. Si sigue siendo cliente durante 3 años, ganas el 20 % de cada pago durante 3 años. Son ingresos recurrentes reales.',
      },
      {
        q: '¿Qué pasa si mi referido cancela?',
        a: 'Dejas de ganar comisión por ese cliente en el momento en que cancela. Si más adelante vuelve a suscribirse con la misma cuenta, la comisión se reanuda.',
      },
      {
        q: '¿Cuánto dura la ventana de atribución?',
        a: 'El seguimiento dura 3 meses desde que alguien hace clic en tu enlace. Si se registra dentro de ese plazo, el referido se te atribuye.',
      },
      {
        q: '¿Puedo promocionar en YouTube, blogs y anuncios de pago?',
        a: 'Sí en YouTube, blogs, newsletters, redes sociales y Reddit. No se permiten anuncios de pago sobre palabras clave de nuestra marca (por ejemplo, "Giggal.ai"). Todo lo demás está permitido.',
      },
      {
        q: '¿Tengo que ser cliente para unirme?',
        a: 'No, pero te recomendamos encarecidamente probar primero el producto (recibes 1.000 créditos gratis). Así puedes recomendarlo desde tu propia experiencia.',
      },
      {
        q: '¿Hay un umbral mínimo de pago?',
        a: 'Sí, 50 $. La comisión pendiente se acumula de un mes a otro hasta que alcanzas el umbral. Después se paga automáticamente.',
      },
    ],
    more: '¿Tienes más preguntas?',
    talk: 'Escríbenos',
  },
  final: {
    h2: '¿Quieres convertir tus referidos en ingresos recurrentes?',
    text: 'Regístrate en 30 segundos y empieza a ganar un 20 % de comisión por cada pago de tus referidos.',
    checks: ['Unirse es gratis', 'Sin aprobación previa', 'Comisiones de por vida'],
  },
}
