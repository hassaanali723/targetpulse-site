import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Política de privacidad del verificador de correo',
  description: 'Cómo Giggal.ai (TargetPulse Ltd) recopila, usa, comparte y protege tus datos al verificar correos, cuánto tiempo los conserva y tus derechos según el RGPD.',
  alternates: { canonical: '/es/privacidad', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'es_LA', title: 'Política de privacidad', url: 'https://giggal.ai/es/privacidad', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Introducción', paragraphs: [
    'Este servicio está operado por TargetPulse Ltd ("nosotros"), una sociedad registrada en Inglaterra y Gales con el número 17079825, con domicilio social en Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd es el responsable del tratamiento de los datos personales tratados a través de Giggal.ai. Contacto: info@giggal.ai. Denuncias de abuso: abuse@giggal.ai.',
    'Giggal.ai ("nosotros") se compromete a proteger tu privacidad. Esta Política de privacidad explica cómo recopilamos, usamos, divulgamos y protegemos tu información cuando usas nuestros servicios de verificación de correo y nuestro sitio web.',
  ]},
  { heading: '2. Información que recopilamos' },
  { heading: '2.1 Información personal', level: 3, paragraphs: ['Podemos recopilar la información personal que nos proporcionas voluntariamente cuando:'], list: [
    'Registras una cuenta',
    'Compras créditos de verificación o una suscripción',
    'Contactas a nuestro equipo de atención al cliente',
    'Envías listas de correo para su verificación',
    'Usas los formularios de contacto o de soporte de nuestro sitio web',
  ], after: ['Esta información puede incluir: nombre, dirección de correo electrónico, identificadores de cuenta, datos opcionales de la empresa y metadatos de las transacciones. Los datos de las tarjetas de pago los gestiona nuestro procesador de pagos y nosotros no los almacenamos.']},
  { heading: '2.2 Datos de autenticación y técnicos', level: 3, paragraphs: ['Usamos Clerk para el registro de cuentas y el inicio de sesión (incluido el inicio de sesión con Google y el registro con correo y contraseña). Mediante este proceso de autenticación, recopilamos y tratamos:'], list: [
    'Identificadores de cuenta (como el ID de usuario, el nombre y la dirección de correo electrónico)',
    'Proveedor de autenticación y método de inicio de sesión (Google o correo y contraseña)',
    'Metadatos de la actividad de inicio de sesión (como la fecha y hora de los inicios de sesión)',
    'Datos técnicos relacionados con la seguridad (como la dirección IP y el user agent) que se usan para proteger las cuentas y prevenir abusos',
    'Cookies o tokens de sesión esenciales, necesarios para mantener tu sesión iniciada de forma segura',
  ]},
  { heading: '2.3 Datos de verificación de correo', level: 3, paragraphs: ['Cuando usas nuestros servicios de verificación de correo, recopilamos y tratamos:'], list: [
    'Las direcciones de correo enviadas para su verificación',
    'Los resultados y el estado de la verificación (válido, no válido, catch-all, desechable, etc.)',
    'Las listas de correo en bloque subidas para su procesamiento',
    'Los datos de uso de la API y el historial de verificaciones',
  ]},
  { heading: '3. Cómo usamos tu información', paragraphs: ['Usamos la información recopilada para los siguientes fines:'], list: [
    'Prestar y mantener nuestros servicios',
    'Procesar tus transacciones y gestionar las suscripciones',
    'Enviarte notificaciones relacionadas con el servicio',
    'Ofrecer atención al cliente',
    'Mejorar y optimizar nuestros servicios',
    'Detectar y prevenir el fraude y el abuso',
    'Cumplir con las obligaciones legales',
    'Analizar patrones y tendencias de uso',
  ]},
  { heading: '4. Base legal del tratamiento (RGPD)', paragraphs: ['Si te encuentras en el Espacio Económico Europeo (EEE), nuestra base legal para recopilar y usar tu información depende de los datos y del contexto:'], list: [
    'Ejecución del contrato: el tratamiento es necesario para prestar nuestros servicios',
    'Interés legítimo: el tratamiento responde a nuestros intereses comerciales legítimos',
    'Consentimiento: has dado tu consentimiento explícito para fines específicos',
    'Obligación legal: el tratamiento es necesario para cumplir con la ley',
  ]},
  { heading: '5. Intercambio y divulgación de datos' },
  { heading: '5.1 Proveedores de servicios', level: 3, paragraphs: ['Compartimos tu información con proveedores de servicios externos que prestan servicios en nuestro nombre:'], list: [
    'Procesadores de pago (nuestra pasarela de pago autorizada)',
    'Proveedores de autenticación (como Clerk)',
    'Proveedores de alojamiento en la nube',
    'Proveedores de seguridad y monitoreo',
    'Herramientas de atención al cliente',
  ]},
  { heading: '5.2 Requisitos legales', level: 3, paragraphs: ['Podemos divulgar tu información si la ley nos lo exige o en respuesta a solicitudes válidas de las autoridades públicas (por ejemplo, órdenes judiciales o citaciones).']},
  { heading: '5.3 Transferencias empresariales', level: 3, paragraphs: ['Si participamos en una fusión, una adquisición o una venta de activos, tu información puede transferirse como parte de esa operación.']},
  { heading: '6. Seguridad de los datos', paragraphs: ['Aplicamos medidas de seguridad técnicas y organizativas adecuadas para proteger tu información, entre ellas:'], list: [
    'Cifrado de los datos en tránsito y en reposo',
    'Evaluaciones periódicas de seguridad',
    'Controles de acceso y autenticación',
    'Centros de datos seguros',
    'Capacitación del personal en protección de datos',
  ], after: ['Sin embargo, ningún método de transmisión por internet es 100 % seguro, y no podemos garantizar una seguridad absoluta.']},
  { heading: '7. Conservación de los datos', paragraphs: ['Conservamos tu información personal solo durante el tiempo necesario para cumplir los fines descritos en esta Política de privacidad, salvo que la ley exija o permita un periodo de conservación más largo. Cuando ya no necesitemos tu información, la eliminaremos o anonimizaremos de forma segura.']},
  { heading: '8. Tus derechos', paragraphs: ['Según tu ubicación, puedes tener los siguientes derechos:'], list: [
    'Acceso: solicitar el acceso a tu información personal',
    'Rectificación: solicitar la corrección de información inexacta',
    'Supresión: solicitar la eliminación de tu información',
    'Portabilidad: solicitar una copia de tus datos en un formato portable',
    'Limitación: solicitar la limitación del tratamiento',
    'Oposición: oponerte al tratamiento de tu información',
    'Retirada del consentimiento: retirar tu consentimiento cuando el tratamiento se basa en él',
  ], after: ['Para ejercer estos derechos, contáctanos en info@giggal.ai.']},
  { heading: '9. Cookies y tecnologías de seguimiento', paragraphs: ['Usamos cookies y tecnologías de seguimiento similares para registrar la actividad en nuestro sitio web y almacenar cierta información. Puedes configurar tu navegador para que rechace todas las cookies o para que te avise cuando se envía una cookie. Sin embargo, si no aceptas las cookies, es posible que no puedas usar algunas partes de nuestro servicio.']},
  { heading: '10. Enlaces de terceros', paragraphs: ['Nuestro sitio web puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de estos sitios externos. Te recomendamos leer las políticas de privacidad de cualquier sitio de terceros que visites.']},
  { heading: '11. Privacidad de los menores', paragraphs: ['Nuestros servicios no están dirigidos a personas menores de 18 años. No recopilamos a sabiendas información personal de menores. Si sabes que un menor nos ha proporcionado información personal, contáctanos y tomaremos medidas para eliminar esa información.']},
  { heading: '12. Transferencias internacionales de datos', paragraphs: ['Tu información puede transferirse a computadoras ubicadas fuera de tu estado, provincia, país u otra jurisdicción gubernamental, y conservarse en ellas, donde las leyes de protección de datos pueden ser distintas. Nos aseguramos de que existan garantías adecuadas para estas transferencias.']},
  { heading: '13. Derechos de privacidad en California (CCPA)', paragraphs: ['Si resides en California, tienes derechos específicos sobre tu información personal:'], list: [
    'Derecho a saber qué información personal se recopila',
    'Derecho a saber si la información personal se vende o se divulga',
    'Derecho a excluirte de la venta de información personal',
    'Derecho a la eliminación de la información personal',
    'Derecho a no sufrir discriminación por ejercer los derechos de la CCPA',
  ]},
  { heading: '14. Cambios en esta Política de privacidad', paragraphs: ['Podemos actualizar nuestra Política de privacidad de vez en cuando. Te informaremos de cualquier cambio publicando la nueva Política de privacidad en esta página y actualizando la fecha de "Última actualización". Te recomendamos revisar esta Política de privacidad periódicamente para ver si hay cambios.']},
  { heading: '15. Contacto', paragraphs: [
    'Si tienes preguntas sobre esta Política de privacidad, contáctanos:',
    'Correo electrónico: info@giggal.ai',
    'Sitio web: https://giggal.ai',
    'Al usar los servicios de Giggal.ai, reconoces que has leído y comprendido esta Política de privacidad y aceptas sus términos.',
  ]},
]

export default function PrivacidadPage() {
  return (
    <LegalPageL10n
      locale="es"
      path="/es/privacidad"
      title="Política de"
      accent="privacidad"
      updated="1 de octubre de 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
