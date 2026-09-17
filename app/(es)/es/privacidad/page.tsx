import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Política de privacidad de Giggal.ai',
  description: 'Cómo trata Giggal.ai los datos personales y los correos enviados para su verificación. Traducción de cortesía; prevalece la versión en inglés.',
  alternates: { canonical: '/es/privacidad', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'es_LA', title: 'Política de privacidad', url: 'https://giggal.ai/es/privacidad', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Introducción', paragraphs: ['Giggal.ai ("nosotros") se compromete a proteger tu privacidad. Esta política explica cómo recogemos, usamos, comunicamos y protegemos tu información cuando usas nuestros servicios de verificación de correo y nuestro sitio.']},
  { heading: '2. Información que recogemos' },
  { heading: '2.1 Datos personales', level: 3, paragraphs: ['Podemos recoger los datos personales que nos facilitas voluntariamente cuando:'], list: [
    'Registras una cuenta', 'Compras créditos o una suscripción', 'Contactas con el soporte', 'Envías listas de correos para su verificación', 'Usas los formularios de contacto o de soporte del sitio',
  ], after: ['Estos datos pueden incluir nombre, dirección de correo, identificadores de la cuenta, datos de empresa opcionales y metadatos de las transacciones. Los datos de las tarjetas de pago los gestiona nuestro procesador de pagos y nosotros no los conservamos.']},
  { heading: '2.2 Autenticación y datos técnicos', level: 3, paragraphs: ['Usamos Clerk para el registro y el inicio de sesión (incluido el acceso con Google y con correo y contraseña). Mediante este proceso recogemos y tratamos:'], list: [
    'Identificadores de la cuenta (ID de usuario, nombre, correo)', 'Proveedor de autenticación y método de acceso', 'Metadatos de acceso (como fecha y hora de los inicios de sesión)',
    'Datos técnicos de seguridad (como dirección IP y user agent) para proteger las cuentas y prevenir abusos', 'Cookies o tokens de sesión necesarios para mantener un acceso seguro',
  ]},
  { heading: '2.3 Datos de verificación de correo', level: 3, paragraphs: ['Cuando usas nuestros servicios recogemos y tratamos:'], list: [
    'Las direcciones de correo enviadas para su verificación', 'Los resultados y el estado de la verificación (válido, no válido, catch-all, desechable, etc.)',
    'Las listas subidas para su procesamiento en bloque', 'Los datos de uso de la API y el historial de verificaciones',
  ]},
  { heading: '3. Cómo usamos la información', list: [
    'Prestar y mantener los servicios', 'Procesar transacciones y gestionar suscripciones', 'Enviar notificaciones relacionadas con el servicio', 'Prestar soporte',
    'Mejorar y optimizar los servicios', 'Detectar y prevenir fraudes y abusos', 'Cumplir obligaciones legales', 'Analizar el uso y las tendencias',
  ]},
  { heading: '4. Base jurídica del tratamiento (RGPD)', paragraphs: ['Si te encuentras en el Espacio Económico Europeo, la base jurídica depende de los datos y del contexto:'], list: [
    'Ejecución del contrato: el tratamiento es necesario para prestar los servicios', 'Interés legítimo: el tratamiento responde a nuestros intereses legítimos',
    'Consentimiento: has dado un consentimiento explícito para fines concretos', 'Obligación legal: el tratamiento es necesario para cumplir la ley',
  ]},
  { heading: '5. Comunicación de los datos' },
  { heading: '5.1 Proveedores de servicios', level: 3, paragraphs: ['Compartimos datos con proveedores terceros que actúan en nuestro nombre:'], list: [
    'Procesadores de pago', 'Proveedores de autenticación (como Clerk)', 'Proveedores de alojamiento en la nube', 'Proveedores de seguridad y monitorización', 'Herramientas de atención al cliente',
  ]},
  { heading: '5.2 Obligaciones legales', level: 3, paragraphs: ['Podemos comunicar datos cuando lo exija la ley o en respuesta a solicitudes válidas de las autoridades públicas (por ejemplo, órdenes judiciales).']},
  { heading: '5.3 Transferencias empresariales', level: 3, paragraphs: ['En caso de fusión, adquisición o venta de activos, los datos pueden transferirse como parte de la operación.']},
  { heading: '6. Seguridad de los datos', paragraphs: ['Adoptamos medidas técnicas y organizativas adecuadas para proteger los datos, entre ellas:'], list: [
    'Cifrado de los datos en tránsito y en reposo', 'Evaluaciones periódicas de seguridad', 'Controles de acceso y autenticación', 'Centros de datos seguros', 'Formación del personal en protección de datos',
  ], after: ['Ningún método de transmisión por internet es seguro al 100 % y no podemos garantizar una seguridad absoluta.']},
  { heading: '7. Conservación de los datos', paragraphs: ['Conservamos los datos personales solo durante el tiempo necesario para los fines indicados en esta política, salvo que la ley exija o permita un periodo mayor. Cuando ya no son necesarios, los eliminamos o anonimizamos de forma segura.']},
  { heading: '8. Tus derechos', paragraphs: ['Según dónde te encuentres, puedes tener los siguientes derechos:'], list: [
    'Acceso: solicitar acceso a tus datos', 'Rectificación: solicitar la corrección de datos inexactos', 'Supresión: solicitar la eliminación de los datos',
    'Portabilidad: recibir una copia de los datos en un formato portable', 'Limitación: solicitar la limitación del tratamiento', 'Oposición: oponerte al tratamiento',
    'Retirada del consentimiento: retirar el consentimiento cuando el tratamiento se basa en él',
  ], after: ['Para ejercer estos derechos escribe a info@giggal.ai.']},
  { heading: '9. Cookies y tecnologías de seguimiento', paragraphs: ['Usamos cookies y tecnologías similares para seguir la actividad en el sitio y conservar cierta información. Puedes configurar el navegador para rechazar las cookies o avisarte cuando se envía una; algunas partes del servicio podrían no funcionar correctamente.']},
  { heading: '10. Enlaces a sitios de terceros', paragraphs: ['El sitio puede contener enlaces a sitios de terceros. No somos responsables de sus prácticas de privacidad y te invitamos a leer sus políticas.']},
  { heading: '11. Privacidad de los menores', paragraphs: ['Nuestros servicios no están dirigidos a menores de 18 años. No recogemos a sabiendas datos de menores. Si tienes constancia de que un menor nos ha facilitado datos personales, contáctanos y los eliminaremos.']},
  { heading: '12. Transferencias internacionales', paragraphs: ['Los datos pueden transferirse y conservarse en sistemas situados fuera de tu país, donde las leyes de protección de datos pueden diferir. Adoptamos garantías adecuadas para proteger los datos conforme a esta política.']},
  { heading: '13. Derechos de los residentes en California (CCPA)', list: [
    'Derecho a saber qué datos personales se recogen', 'Derecho a saber si los datos se venden o comunican',
    'Derecho a oponerse a la venta de los datos', 'Derecho a la supresión', 'Derecho a no sufrir discriminación por ejercer estos derechos',
  ]},
  { heading: '14. Cambios en esta política', paragraphs: ['Podemos actualizar esta política de vez en cuando. Los cambios se publicarán en esta página con la nueva fecha de actualización. Te recomendamos releerla periódicamente.']},
  { heading: '15. Contacto', paragraphs: ['Para dudas sobre esta política: correo info@giggal.ai, web https://giggal.ai.', 'Al usar los servicios de Giggal.ai declaras haber leído y comprendido esta política y aceptar sus términos.']},
]

export default function PrivacidadPage() {
  return (
    <LegalPageL10n
      locale="es"
      path="/es/privacidad"
      title="Política de"
      accent="privacidad"
      updated="4 de febrero de 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
