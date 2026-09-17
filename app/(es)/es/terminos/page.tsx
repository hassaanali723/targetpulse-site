import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Términos del servicio de Giggal.ai',
  description: 'Términos y condiciones de uso del servicio de verificación de correo Giggal.ai. Traducción de cortesía; prevalece la versión en inglés.',
  alternates: { canonical: '/es/terminos', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'es_LA', title: 'Términos del servicio', url: 'https://giggal.ai/es/terminos', type: 'website' },
}

const sections: LegalSection[] = [
  { heading: '1. Aceptación de los términos', paragraphs: [
    'Al acceder a los servicios de Giggal.ai y usarlos, aceptas quedar vinculado por los términos y condiciones de este acuerdo. Si no vas a cumplirlos, no uses el servicio.',
    'Estos Términos del servicio regulan el uso del servicio Giggal.ai Email Verifier, operado por Hassaan Ali Mehmood bajo el nombre comercial Giggal.ai.',
  ]},
  { heading: '2. Descripción del servicio', paragraphs: [
    'Giggal.ai Email Verifier es una herramienta en la nube que ayuda a los equipos a limpiar y validar listas de correo. Los usuarios suben archivos CSV o direcciones individuales y nosotros comprobamos entregabilidad, sintaxis y estado del buzón para reducir las direcciones no válidas y mejorar la entrega.',
    'El Servicio se presta con sujeción a estos Términos y a cualquier condición adicional aplicable.',
  ]},
  { heading: '2.1 Servicio de verificación de correo', level: 3, paragraphs: ['Nuestro servicio principal es la verificación y validación de correos electrónicos, que incluye:'], list: [
    'Validación de sintaxis: comprobación del formato y la estructura de la dirección',
    'Validación de dominio: comprobación de que el dominio existe y tiene registros MX válidos',
    'Verificación del buzón: comprobación de que la dirección concreta existe y puede recibir correo',
    'Detección de correos desechables: identificación de direcciones temporales',
    'Detección de cuentas de rol: identificación de direcciones genéricas (p. ej. info@, soporte@)',
    'Detección catch-all: identificación de dominios que aceptan cualquier dirección',
    'Validación SMTP: verificación en tiempo real mediante el protocolo SMTP',
    'Verificación en bloque: procesamiento de miles de direcciones a la vez',
  ]},
  { heading: '2.2 Sistema de créditos', level: 3, paragraphs: ['El servicio funciona con créditos:'], list: [
    '1 crédito = 1 verificación: cada verificación consume exactamente 1 crédito del saldo',
    'Pago por uso: paquetes de créditos que puedes comprar en cualquier momento',
    'Suscripciones recurrentes: paquetes mensuales con descuento respecto al precio por uso',
    'Sin caducidad: los créditos siguen disponibles hasta que se usan',
    'Prueba gratuita: las cuentas nuevas reciben 1.000 créditos de regalo',
  ]},
  { heading: '2.3 Funciones del servicio', level: 3, list: [
    'Acceso a la API en tiempo real', 'Carga y procesamiento en bloque', 'Informes y análisis detallados',
    'Exportación a CSV, Excel y JSON', 'Detección y eliminación de duplicados', 'Herramientas de limpieza y segmentación de listas',
  ]},
  { heading: '3. Cuenta de usuario', paragraphs: ['Para usar algunas funciones debes registrar una cuenta. Te comprometes a:'], list: [
    'Facilitar información exacta, actual y completa al registrarte',
    'Mantener actualizada la información de la cuenta',
    'Proteger la contraseña y asumir los riesgos de un acceso no autorizado',
    'Avisarnos de inmediato de cualquier uso no autorizado de la cuenta',
    'Responder de toda la actividad realizada con tu cuenta',
  ]},
  { heading: '4. Condiciones de pago', paragraphs: ['Los pagos se gestionan de forma segura a través de nuestra pasarela de pago autorizada. Al comprar créditos o servicios aceptas:'], list: [
    'Facilitar información de compra y de cuenta actual, completa y exacta',
    'Actualizar con prontitud los datos de cuenta y de pago',
    'Pagar todos los importes a los precios vigentes en el momento de la compra',
    'Pagar los impuestos, el IVA u otros cargos aplicables',
  ]},
  { heading: '4.1 Modalidades de compra', level: 3, list: [
    'Compra única (pago por uso): paquetes de créditos que se añaden a la cuenta al instante',
    'Suscripción mensual: créditos recibidos automáticamente cada mes con descuento',
  ]},
  { heading: '4.2 Precios y facturación', level: 3, paragraphs: [
    'Todos los precios se expresan en dólares estadounidenses e incluyen los cargos aplicables. Los créditos se añaden a la cuenta al confirmarse el pago. Las compras de créditos no son reembolsables, salvo lo previsto por la ley o por la Política de reembolsos.',
  ]},
  { heading: '4.3 Créditos de prueba gratis', level: 3, paragraphs: ['Los usuarios nuevos reciben 1.000 créditos de prueba al registrarse. Los créditos de prueba:'], list: [
    'Son gratuitos y no requieren datos de pago', 'Funcionan como los créditos de pago', 'No son reembolsables por ser un regalo',
    'Permiten verificar hasta 1.000 direcciones', 'Sirven para evaluar la calidad del servicio antes de comprar',
  ]},
  { heading: '5. Suscripciones recurrentes', paragraphs: ['Las suscripciones mensuales se cobran automáticamente cada mes, por adelantado; los créditos se añaden a la cuenta cuando el pago se completa. En concreto:'], list: [
    'La suscripción se renueva automáticamente al final de cada ciclo, salvo cancelación',
    'Puedes cancelar en cualquier momento antes de la fecha de renovación',
    'La cancelación surte efecto al final del periodo en curso',
    'Los créditos ya añadidos siguen disponibles tras la cancelación',
    'Los suscriptores reciben un descuento respecto al precio por uso',
  ]},
  { heading: '6. Uso y gestión de los créditos' },
  { heading: '6.1 Consumo de créditos', level: 3, list: [
    'Cada verificación completada consume exactamente 1 crédito', 'Los créditos se descuentan solo por verificaciones completadas',
    'Las verificaciones fallidas por errores del sistema no consumen créditos', 'Las direcciones duplicadas en la misma carga se procesan una sola vez',
  ]},
  { heading: '6.2 Validez y transferencia de créditos', level: 3, list: [
    'Sin caducidad: los créditos permanecen en la cuenta indefinidamente', 'No transferibles entre cuentas',
    'No reembolsables tras la compra (salvo las excepciones de la Política de reembolsos)', 'Vinculados a la cuenta y no compartibles',
  ]},
  { id: 'cancellation-policy', heading: '7. Cancelación y reembolsos', paragraphs: ['Puedes cancelar la suscripción en cualquier momento desde la configuración de la cuenta o escribiendo a info@giggal.ai. Tras la cancelación:'], list: [
    'La suscripción no se renueva en el siguiente ciclo', 'Conservas todos los créditos de la cuenta',
    'Puedes seguir usando los créditos sin limitaciones', 'Puedes seguir comprando paquetes por uso',
  ], after: ['Los reembolsos por actividad anómala o circunstancias excepcionales se gestionan según la Política de reembolsos. Ante problemas o sospecha de fraude, contacta con el soporte de inmediato.']},
  { heading: '8. Uso aceptable', paragraphs: ['Te comprometes a usar el Servicio solo con fines lícitos y conforme a las leyes aplicables. En particular, no usarás el Servicio para:'], list: [
    'Verificar direcciones obtenidas sin consentimiento o autorización', 'Enviar spam o mensajes no solicitados tras la verificación',
    'Infringir leyes o normativas, incluidas CAN-SPAM, RGPD y CASL', 'Vulnerar derechos de terceros', 'Difundir malware o código dañino',
    'Suplantar a personas o entidades', 'Cometer fraude o abusar del servicio', 'Revender o redistribuir el servicio sin autorización',
    'Intentar descompilar o comprometer nuestros sistemas', 'Compartir credenciales o créditos con usuarios no autorizados',
  ]},
  { heading: '9. Precisión y límites del servicio', paragraphs: ['Buscamos la máxima precisión, pero reconoces y aceptas que:'], list: [
    'La verificación de correo no puede garantizar un 100 % de precisión por límites técnicos', 'Algunos servidores pueden dar respuestas falsamente positivas o negativas',
    'Los resultados se basan en comprobaciones en tiempo real y pueden cambiar', 'Los resultados se ofrecen "tal cual" sin garantía de entrega',
    'Eres responsable del uso lícito de los datos verificados y de las comunicaciones posteriores',
  ]},
  { heading: '10. Uso lícito y cumplimiento en las comunicaciones', paragraphs: ['Si usas las direcciones verificadas para outreach, mensajes transaccionales o de soporte, eres el único responsable de cumplir las leyes aplicables, entre ellas:'], list: [
    'CAN-SPAM Act (Estados Unidos)', 'RGPD (Unión Europea)', 'CASL (Canadá)', 'Otras leyes antispam y de protección de datos',
  ], after: ['Debes obtener los consentimientos exigidos e incluir los mecanismos de baja previstos por la ley. Giggal.ai no es responsable del uso que hagas de las direcciones verificadas.']},
  { heading: '11. Propiedad intelectual', paragraphs: ['El Servicio y sus contenidos, funciones y funcionalidades originales pertenecen a Giggal.ai y están protegidos por las leyes internacionales de derechos de autor, marcas, patentes, secretos comerciales y otras propiedades intelectuales. No puedes copiar, modificar, distribuir, vender ni licenciar ninguna parte del Servicio sin nuestro consentimiento por escrito.']},
  { heading: '12. Datos y privacidad', paragraphs: [
    'El uso del Servicio se rige también por nuestra Política de privacidad. Conservas todos los derechos sobre tus datos y tus listas, que no usaremos para fines distintos de la prestación del servicio.',
    'Las direcciones enviadas para su verificación se procesan de forma segura y no se conservan de forma permanente. No vendemos, compartimos ni usamos tus listas con otros fines.',
  ]},
  { heading: '13. Cambios y disponibilidad del servicio', paragraphs: [
    'Nos reservamos el derecho de modificar o interrumpir el Servicio, total o parcialmente, de forma temporal o definitiva, con o sin previo aviso, sin responsabilidad ante ti ni ante terceros.',
    'Buscamos una alta disponibilidad, pero no garantizamos un acceso ininterrumpido. El mantenimiento programado se anuncia con antelación cuando es posible.',
  ]},
  { heading: '14. Limitación de responsabilidad', paragraphs: ['En la máxima medida permitida por la ley, Giggal.ai y sus administradores, empleados, socios, agentes, proveedores y afiliados no son responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos lucro cesante, pérdida de datos, fondo de comercio u otras pérdidas intangibles, derivados de:'], list: [
    'El acceso al Servicio, su uso o la imposibilidad de acceder', 'Conductas o contenidos de terceros en el Servicio', 'Contenidos obtenidos del Servicio',
    'Accesos, usos o alteraciones no autorizados de tus transmisiones o contenidos', 'Resultados de verificación inexactos',
    'Entregas fallidas o rebotes tras la verificación', 'Créditos consumidos por error o uso indebido por parte del usuario',
  ]},
  { heading: '15. Exclusión de garantías', paragraphs: [
    'El Servicio se presta "tal cual" y "según disponibilidad", sin garantías de ningún tipo, expresas o implícitas, incluidas las garantías implícitas de comerciabilidad, idoneidad para un fin concreto y no infracción.',
    'No garantizamos que el Servicio sea ininterrumpido, puntual, seguro o libre de errores, ni que los resultados de verificación sean precisos al 100 %.',
  ]},
  { heading: '16. Indemnización', paragraphs: ['Te comprometes a defender, indemnizar y mantener indemne a Giggal.ai, sus licenciatarios y licenciantes frente a cualquier reclamación, daño, obligación, pérdida, responsabilidad, coste o gasto derivado del uso del Servicio, del incumplimiento de estos Términos o de la vulneración de derechos de terceros.']},
  { heading: '17. Terminación', paragraphs: ['Podemos cerrar o suspender tu cuenta y el acceso al Servicio de inmediato, sin previo aviso ni responsabilidad, por cualquier motivo, incluido el incumplimiento de estos Términos. En caso de terminación:'], list: [
    'El derecho a usar el Servicio cesa de inmediato', 'Los créditos no usados se pierden sin reembolso',
    'Las suscripciones se cancelan', 'El acceso a la cuenta y a los datos puede revocarse de forma permanente',
  ]},
  { heading: '18. Ley aplicable', paragraphs: ['Estos Términos se rigen e interpretan conforme a las leyes de la jurisdicción en la que opera Giggal.ai, sin atender a las normas sobre conflicto de leyes.']},
  { heading: '19. Resolución de disputas', paragraphs: ['Las disputas derivadas de estos Términos o del Servicio se abordarán primero mediante una negociación de buena fe. Si la negociación fracasa, se resolverán mediante arbitraje vinculante conforme a las reglas aplicables en la jurisdicción en la que opera Giggal.ai.']},
  { heading: '20. Cambios en los términos', paragraphs: ['Nos reservamos el derecho de modificar o sustituir estos Términos en cualquier momento. Si un cambio es sustancial, avisaremos con al menos 30 días de antelación a su entrada en vigor. Qué constituye un cambio sustancial queda a nuestro criterio.']},
  { heading: '21. Divisibilidad', paragraphs: ['Si alguna disposición de estos Términos resulta inaplicable o inválida, se modificará e interpretará para cumplir sus objetivos en la máxima medida permitida por la ley, y las demás disposiciones seguirán plenamente vigentes.']},
  { heading: '22. Contacto', paragraphs: ['Para dudas sobre estos Términos del servicio: correo info@giggal.ai, web https://giggal.ai.', 'Al usar los servicios de Giggal.ai declaras haber leído y comprendido estos Términos del servicio y aceptarlos.']},
]

export default function TerminosPage() {
  return (
    <LegalPageL10n
      locale="es"
      path="/es/terminos"
      title="Términos del"
      accent="servicio"
      updated="4 de febrero de 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
