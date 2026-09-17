import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Política de reembolsos de créditos',
  description: 'Cuándo reembolsa créditos Giggal.ai: créditos de prueba, compras únicas, suscripciones, casos excepcionales y plazos. Versión de cortesía, prevalece el inglés.',
  alternates: { canonical: '/es/reembolsos', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'es_LA', title: 'Política de reembolsos', url: 'https://giggal.ai/es/reembolsos', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Resumen', paragraphs: [
    'Esta política describe las circunstancias en las que pueden concederse reembolsos en nuestro servicio basado en créditos.',
    'Prestamos exclusivamente servicios digitales de verificación de correo y no vendemos ni enviamos bienes físicos.',
  ]},
  { heading: '2. Cómo funciona el sistema de créditos', list: [
    '1 crédito = 1 verificación: cada verificación consume 1 crédito de tu cuenta', 'Pago por uso: compras créditos en bloque cuando quieres',
    'Créditos recurrentes: paquetes mensuales en suscripción con descuento', 'Sin caducidad: los créditos permanecen en la cuenta hasta que los usas',
  ]},
  { heading: '3. Créditos de prueba gratis', paragraphs: ['Los usuarios nuevos reciben 1.000 créditos de prueba. Ten en cuenta que:'], list: [
    'Son gratuitos y no requieren pago', 'No son reembolsables por ser un regalo', 'Siguen las mismas reglas que los créditos de pago', 'Permiten verificar 1.000 direcciones',
  ]},
  { heading: '4. Reembolso de créditos comprados' },
  { heading: '4.1 Créditos por uso (compra única)', level: 3, paragraphs: ['Los créditos comprados por uso normalmente no son reembolsables una vez completada la compra, porque:'], list: [
    'Se añaden a la cuenta al instante y están disponibles de inmediato', 'No caducan y mantienen su valor', 'Puedes usarlos en cualquier momento',
  ]},
  { heading: '4.2 Suscripciones de créditos recurrentes', level: 3, list: [
    'Los créditos se cobran y añaden cada mes', 'Puedes cancelar en cualquier momento antes del siguiente ciclo', 'Los créditos ya añadidos no son reembolsables',
    'La cancelación surte efecto al final del periodo en curso', 'Los créditos no usados de meses anteriores permanecen en la cuenta tras la cancelación',
  ]},
  { heading: '5. Circunstancias excepcionales y soporte', paragraphs: ['La regla general es que los créditos no son reembolsables, pero sabemos que pueden darse situaciones inusuales. En caso de:'], list: [
    'Errores técnicos que causen cobros de créditos incorrectos', 'Fallos del servicio que impidan la verificación', 'Cobros duplicados o errores de facturación',
    'Actividad anómala en la cuenta o sospecha de fraude', 'Otras circunstancias excepcionales',
  ], after: ['Contacta de inmediato con el soporte en info@giggal.ai. Revisaremos el caso y podremos conceder reembolsos o correcciones de créditos, evaluando caso por caso a nuestro criterio.']},
  { heading: '6. Problemas de calidad del servicio', paragraphs: ['Si problemas técnicos o interrupciones impiden la verificación:'], list: [
    'Los créditos no se descuentan por verificaciones fallidas por errores de nuestro sistema', 'Comunica al soporte de inmediato cualquier problema de verificación',
    'Podemos añadir créditos compensatorios por las interrupciones', 'Las interrupciones prolongadas pueden dar derecho a reembolsos parciales a nuestro criterio',
  ]},
  { heading: '7. Cierre de cuenta e infracciones', paragraphs: ['Si la cuenta se cierra por incumplimiento de los Términos del servicio o de la política de uso aceptable:'], list: [
    'No se reembolsa ningún crédito no usado', 'El acceso a la cuenta y a los créditos restantes se revoca de forma permanente', 'Las suscripciones se cancelan de inmediato',
  ]},
  { heading: '8. Cómo solicitar un reembolso o comunicar un problema', paragraphs: ['Escribe al soporte: correo info@giggal.ai, asunto "Refund Request / Issue Report". Incluye:'], list: [
    'El correo de tu cuenta', 'El ID de la transacción o del pedido', 'Una descripción detallada del problema', 'Fecha y hora del incidente (si procede)',
    'Capturas de pantalla o pruebas (si procede)', 'El número de créditos afectados',
  ]},
  { heading: '9. Plazos de tramitación del reembolso', paragraphs: ['Si la solicitud se aprueba:'], list: [
    'Revisamos el caso en 2 o 3 días laborables', 'Recibes la decisión por correo', 'Los reembolsos aprobados se tramitan en 5 a 10 días laborables',
    'El reembolso se emite al método de pago original a través de nuestro procesador', 'Pueden pasar otros 5 a 7 días laborables hasta que aparezca en tu cuenta',
  ]},
  { heading: '10. Disputas de cargo (contracargos)', paragraphs: ['Si abres una disputa con tu banco o tu proveedor de pago sin contactarnos antes:'], list: [
    'Nos reservamos el derecho de cerrar tu cuenta de forma permanente', 'No podrás volver a usar nuestros servicios', 'Se pierden todos los créditos restantes',
    'Aportaremos al procesador de pagos las pruebas en defensa del cargo',
  ], after: ['Te pedimos que contactes primero con el soporte: resolvemos los problemas de forma justa y rápida.']},
  { heading: '11. Transferencia de créditos y cuentas compartidas', paragraphs: ['Los créditos no son transferibles entre cuentas. No se reembolsan:'], list: [
    'Créditos comprados en la cuenta equivocada', 'Solicitudes de transferencia a otra cuenta', 'Infracciones por compartir la cuenta',
  ]},
  { heading: '12. Cambios en esta política', paragraphs: ['Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios surten efecto desde su publicación en el sitio. Al seguir usando los servicios aceptas la nueva versión.']},
  { heading: '13. Contacto', paragraphs: [
    'Para dudas o soporte: correo info@giggal.ai, web https://giggal.ai. Respondemos normalmente en 24 a 48 horas.',
    'Esta política forma parte de los Términos del servicio. Al usar los servicios de Giggal.ai declaras haberla leído y comprendido.',
  ]},
]

export default function ReembolsosPage() {
  return (
    <LegalPageL10n
      locale="es"
      path="/es/reembolsos"
      title="Política de"
      accent="reembolsos"
      updated="4 de febrero de 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
