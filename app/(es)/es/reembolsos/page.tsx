import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Política de reembolsos de créditos y suscripciones',
  description: 'Reembolsos de Giggal.ai: créditos de pago por uso, suscripciones, créditos de prueba, problemas del servicio, contracargos y cómo pedir un reembolso.',
  alternates: { canonical: '/es/reembolsos', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'es_LA', title: 'Política de reembolsos', url: 'https://giggal.ai/es/reembolsos', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Resumen', paragraphs: [
    'En Giggal.ai nos esforzamos por ofrecer servicios de verificación de correo excepcionales. Esta Política de reembolsos describe las circunstancias en las que pueden emitirse reembolsos en nuestro servicio basado en créditos.',
    'Prestamos únicamente servicios digitales de verificación de correo y no vendemos ni enviamos bienes físicos.',
  ]},
  { heading: '2. Cómo funciona nuestro sistema de créditos', paragraphs: ['Giggal.ai funciona con un sistema de créditos para la verificación de correo:'], list: [
    '1 crédito = 1 validación de correo: cada verificación de una dirección de correo consume 1 crédito de tu cuenta',
    'Pago por uso: compra créditos en bloque en cualquier momento (paquetes de 3.000 a 1.000.000 de créditos)',
    'Créditos recurrentes: suscríbete a paquetes mensuales recurrentes de créditos con un 10 % de descuento',
    'Sin caducidad: los créditos nunca caducan y permanecen en tu cuenta hasta que se usan',
  ]},
  { heading: '3. Créditos de prueba gratuitos', paragraphs: ['Los usuarios nuevos reciben 1.000 créditos de prueba gratuitos para probar nuestro servicio de verificación de correo. Ten en cuenta que:'], list: [
    'Los créditos de prueba se ofrecen sin cargo y no requieren ningún pago',
    'Los créditos de prueba no son reembolsables, ya que son de cortesía',
    'Los créditos de prueba siguen las mismas reglas de validación que los créditos de pago',
    'Los créditos de prueba permiten verificar 1.000 direcciones de correo',
  ]},
  { heading: '4. Política de reembolso de compras de créditos' },
  { heading: '4.1 Créditos de pago por uso (compra única)', level: 3, paragraphs: ['Los créditos comprados mediante paquetes de pago por uso, por lo general, no son reembolsables una vez completada la compra, porque:'], list: [
    'Los créditos se añaden a tu cuenta al instante y están disponibles para usarlos de inmediato',
    'Los créditos no caducan y conservan su valor indefinidamente',
    'Tienes la flexibilidad de usarlos en cualquier momento',
  ]},
  { heading: '4.2 Suscripciones de créditos recurrentes', level: 3, paragraphs: ['En las suscripciones mensuales recurrentes de créditos:'], list: [
    'Los créditos se cobran y se añaden a tu cuenta cada mes',
    'Puedes cancelar tu suscripción en cualquier momento antes del siguiente ciclo de facturación',
    'Los créditos ya añadidos a tu cuenta no son reembolsables',
    'La cancelación surte efecto al final de tu periodo de facturación en curso',
    'Los créditos no usados de meses anteriores permanecen en tu cuenta después de la cancelación',
  ]},
  { heading: '5. Circunstancias excepcionales y soporte', paragraphs: ['Aunque nuestra política general es que los créditos no son reembolsables, entendemos que pueden darse situaciones inusuales. En casos de:'], list: [
    'Errores técnicos que causen un descuento incorrecto de créditos',
    'Fallas del servicio que impidan la validación de correos',
    'Cargos duplicados o errores de facturación',
    'Actividad inusual en la cuenta o sospecha de fraude',
    'Cualquier otra circunstancia excepcional',
  ], after: ['Contacta de inmediato a nuestro equipo de soporte en info@giggal.ai. Revisaremos tu caso a fondo y podremos emitir reembolsos o ajustes de créditos caso por caso, a nuestra discreción.']},
  { heading: '6. Problemas de calidad del servicio', paragraphs: ['Si tienes problemas técnicos o interrupciones del servicio que impiden la verificación de correo:'], list: [
    'No se descontarán créditos por validaciones fallidas debidas a errores de nuestro sistema',
    'Informa de inmediato a nuestro equipo de soporte sobre cualquier problema de validación',
    'Podemos añadir créditos compensatorios a tu cuenta por las interrupciones del servicio',
    'Las interrupciones prolongadas pueden dar lugar a reembolsos parciales, a nuestra discreción',
  ]},
  { heading: '7. Terminación de la cuenta e infracciones', paragraphs: ['Si tu cuenta se termina por el incumplimiento de nuestros Términos del servicio o de nuestra Política de uso aceptable:'], list: [
    'No se emitirán reembolsos por los créditos no usados',
    'El acceso a tu cuenta y a los créditos restantes se revocará de forma permanente',
    'Las suscripciones recurrentes se cancelarán de inmediato',
  ]},
  { heading: '8. Cómo solicitar un reembolso o informar de un problema', paragraphs: [
    'Para solicitar un reembolso o informar de actividad inusual, contacta a nuestro equipo de soporte:',
    'Correo electrónico: info@giggal.ai',
    'Asunto: Refund Request / Issue Report',
    'Incluye la siguiente información en tu solicitud:',
  ], list: [
    'La dirección de correo electrónico de tu cuenta',
    'El ID de la transacción o el número de pedido',
    'Una descripción detallada del problema o de la actividad inusual',
    'La fecha y la hora del incidente (si corresponde)',
    'Capturas de pantalla o pruebas que respalden tu reclamación (si corresponde)',
    'El número de créditos afectados',
  ]},
  { heading: '9. Plazos de procesamiento de reembolsos', paragraphs: ['Si se aprueba tu solicitud de reembolso:'], list: [
    'Revisaremos tu caso en un plazo de 2 a 3 días hábiles',
    'Recibirás una respuesta por correo electrónico con la decisión',
    'Los reembolsos aprobados se procesarán en un plazo de 5 a 10 días hábiles',
    'Los reembolsos se emitirán al método de pago original a través de nuestro procesador de pagos',
    'Según tu proveedor de pago, el reembolso puede tardar otros 5 a 7 días hábiles en aparecer en tu cuenta',
  ]},
  { heading: '10. Contracargos', paragraphs: ['Si presentas un contracargo o una disputa de pago ante tu banco o tu proveedor de pago sin contactarnos antes para resolver el problema:'], list: [
    'Nos reservamos el derecho de terminar tu cuenta de forma permanente',
    'Se te prohibirá usar nuestros servicios en el futuro',
    'Perderás todos los créditos restantes',
    'Aportaremos pruebas al procesador de pagos en defensa del cargo',
  ], after: ['Te recomendamos firmemente que contactes primero a nuestro equipo de soporte. Nos comprometemos a resolver los problemas de forma justa y rápida.']},
  { heading: '11. Transferencia de créditos y cuentas compartidas', paragraphs: ['Los créditos no son transferibles entre cuentas. No se emitirán reembolsos por:'], list: [
    'Créditos comprados en la cuenta equivocada',
    'Solicitudes de transferencia de créditos a otra cuenta',
    'Infracciones por compartir la cuenta',
  ]},
  { heading: '12. Cambios en esta política', paragraphs: ['Nos reservamos el derecho de modificar esta Política de reembolsos en cualquier momento. Los cambios surtirán efecto de inmediato desde su publicación en nuestro sitio web. Si sigues usando nuestros servicios después de cualquier cambio, aceptas la nueva política.']},
  { heading: '13. Información de contacto', paragraphs: [
    'Si tienes preguntas sobre esta Política de reembolsos o necesitas ayuda, contáctanos:',
    'Correo electrónico: info@giggal.ai',
    'Sitio web: https://giggal.ai',
    'Nuestro equipo de soporte se compromete a atender tus inquietudes y a encontrar soluciones justas. Normalmente respondemos a todas las consultas en un plazo de 24 a 48 horas.',
    'Esta Política de reembolsos forma parte de nuestros Términos del servicio. Al usar los servicios de Giggal.ai, reconoces que has leído y comprendido esta política.',
  ]},
]

export default function ReembolsosPage() {
  return (
    <LegalPageL10n
      locale="es"
      path="/es/reembolsos"
      title="Política de"
      accent="reembolsos"
      updated="22 de octubre de 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
