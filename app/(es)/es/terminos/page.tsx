import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

export const metadata: Metadata = {
  title: 'Términos del servicio de verificación de correo',
  description: 'Términos de uso de Giggal.ai: tu cuenta, compra de créditos y suscripciones, consumo de créditos y reglas del servicio. Prevalece la versión en inglés.',
  alternates: { canonical: '/es/terminos', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'es_LA', title: 'Términos del servicio', url: 'https://giggal.ai/es/terminos', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Aceptación de los términos', paragraphs: [
    'Este servicio está operado por TargetPulse Ltd ("nosotros"), una sociedad registrada en Inglaterra y Gales con el número 17079825, con domicilio social en Office 17366, 182-184 High Street North, East Ham, London E6 2JA. TargetPulse Ltd es el responsable del tratamiento de los datos personales tratados a través de Giggal.ai. Contacto: info@giggal.ai. Denuncias de abuso: abuse@giggal.ai.',
    'Al acceder a los servicios de Giggal.ai y usarlos, aceptas los términos y disposiciones de este acuerdo y te comprometes a quedar vinculado por ellos. Si no estás de acuerdo en cumplir lo anterior, no uses este servicio.',
    'Estos Términos del servicio regulan tu uso del servicio Giggal.ai Email Verifier, operado por TargetPulse Ltd bajo el nombre comercial Giggal.ai.',
  ]},
  { heading: '2. Descripción del servicio', paragraphs: [
    'Giggal.ai Email Verifier es una herramienta en la nube que ayuda a los equipos a limpiar y validar listas de correo. Los usuarios suben archivos CSV o correos individuales, y nosotros comprobamos la entregabilidad, los registros del dominio y si cada buzón existe, para reducir las direcciones no válidas y mejorar la calidad de la lista. El producto se vende como un sistema de créditos de pago por uso, de modo que los clientes solo pagan por los correos que realmente validan.',
    'El Servicio se te presta con sujeción a estos Términos del servicio y a cualquier término y condición adicional que pueda aplicarse.',
  ]},
  { heading: '2.1 Servicio de verificación de correo', level: 3, paragraphs: ['Nuestro servicio principal es la verificación y validación de correos electrónicos, que incluye:'], list: [
    'Detección de pasarelas: identificación de pasarelas de correo seguras (SEG) y filtros perimetrales defensivos',
    'Validación de dominio: comprobación de que el dominio del correo existe y tiene registros MX válidos',
    'Verificación del buzón: comprobación de que la dirección de correo concreta existe y puede recibir correos',
    'Detección de correos desechables: identificación de direcciones de correo temporales o desechables',
    'Detección de correos de rol: detección de direcciones de correo genéricas (p. ej., info@, support@)',
    'Detección catch-all: identificación de dominios que aceptan todas las direcciones de correo',
    'Verificación en tiempo real: comprobación de si existe el buzón del destinatario',
    'Verificación en bloque: procesamiento simultáneo de miles de direcciones de correo',
  ]},
  { heading: '2.2 Sistema de créditos', level: 3, paragraphs: ['Nuestro servicio funciona con un modelo de créditos en el que:'], list: [
    '1 crédito = 1 verificación de correo: cada verificación de una dirección de correo consume exactamente 1 crédito del saldo de tu cuenta',
    'Pago por uso: compra créditos en paquetes de 3.000 a 1.000.000 de créditos en cualquier momento',
    'Suscripciones recurrentes: suscríbete a paquetes mensuales recurrentes de créditos con un 10 % de descuento sobre el precio normal',
    'Sin caducidad: los créditos nunca caducan y siguen disponibles en tu cuenta hasta que se usan',
    'Prueba gratuita: las cuentas nuevas reciben 1.000 créditos de cortesía para probar el servicio',
  ]},
  { heading: '2.3 Funciones del servicio', level: 3, paragraphs: ['Nuestro servicio de verificación de correo incluye:'], list: [
    'Acceso a la API en tiempo real para verificación instantánea',
    'Funciones de carga y procesamiento en bloque',
    'Informes de verificación y análisis detallados',
    'Exportación de resultados en formatos CSV, Excel y JSON',
    'Detección y eliminación de correos duplicados',
    'Herramientas de limpieza y segmentación de listas',
    'Soporte de integración mediante la API y sistemas de terceros compatibles',
  ]},
  { heading: '3. Cuenta de usuario', paragraphs: ['Para usar ciertas funciones del Servicio, debes registrar una cuenta. Te comprometes a:'], list: [
    'Proporcionar información exacta, actual y completa durante el registro',
    'Mantener y actualizar con prontitud la información de tu cuenta',
    'Mantener la seguridad de tu contraseña y aceptar todos los riesgos de un acceso no autorizado',
    'Notificarnos de inmediato cualquier uso no autorizado de tu cuenta',
    'Ser responsable de todas las actividades que se realicen con tu cuenta',
  ]},
  { heading: '4. Condiciones de pago', paragraphs: ['El procesamiento de pagos se realiza de forma segura a través de nuestra pasarela de pago autorizada. Al comprar créditos o servicios, te comprometes a:'], list: [
    'Proporcionar información de compra y de cuenta actual, completa y exacta',
    'Actualizar con prontitud la información de tu cuenta y de pago cuando sea necesario',
    'Pagar todos los cargos de tus compras a los precios vigentes en ese momento',
    'Pagar los impuestos, el IVA u otros cargos aplicables relacionados con tus compras',
  ]},
  { heading: '4.1 Modalidades de compra de créditos', level: 3, paragraphs: ['Puedes comprar créditos mediante las siguientes modalidades:'], list: [
    'Compra única (pago por uso): compra paquetes de créditos cuando los necesites, que se añaden a tu cuenta de inmediato',
    'Suscripción mensual recurrente: recibe créditos automáticamente cada mes con un 10 % de descuento',
  ]},
  { heading: '4.2 Precios y facturación', level: 3, paragraphs: [
    'Todos los precios se muestran en USD e incluyen los cargos aplicables. Los créditos se añaden a tu cuenta de inmediato tras la confirmación del pago. Todas las compras de créditos son no reembolsables, salvo cuando lo exija la ley o cuando nuestra Política de reembolsos lo indique expresamente.',
  ]},
  { heading: '4.3 Créditos de prueba gratuitos', level: 3, paragraphs: ['Los usuarios nuevos reciben 1.000 créditos de prueba gratuitos al registrar su cuenta. Los créditos de prueba:'], list: [
    'Se ofrecen sin costo y no requieren información de pago',
    'Funcionan igual que los créditos de pago para la verificación de correo',
    'No son reembolsables, ya que son de cortesía',
    'Permiten verificar hasta 1.000 direcciones de correo',
    'Te ayudan a evaluar la calidad de nuestro servicio antes de comprar',
  ]},
  { heading: '5. Servicios de suscripción recurrente', paragraphs: ['Las suscripciones mensuales recurrentes de créditos se cobran automáticamente cada mes. Se te cobrará por adelantado de forma mensual y recurrente, y los créditos se añadirán a tu cuenta cuando el pago se complete. Las condiciones principales son:'], list: [
    'Las suscripciones se renuevan automáticamente al final de cada ciclo de facturación, salvo que se cancelen',
    'Puedes cancelar tu suscripción en cualquier momento antes de la siguiente fecha de facturación',
    'Las cancelaciones surten efecto al final del periodo de facturación en curso',
    'Los créditos ya añadidos a tu cuenta siguen disponibles después de la cancelación',
    'Los suscriptores recurrentes reciben un 10 % de descuento en comparación con los precios de pago por uso',
  ]},
  { heading: '6. Uso y gestión de los créditos' },
  { heading: '6.1 Consumo de créditos', level: 3, paragraphs: ['Los créditos se consumen de la siguiente manera:'], list: [
    'Cada verificación de correo completada con éxito consume exactamente 1 crédito',
    'Los créditos se descuentan solo por verificaciones completadas',
    'Las verificaciones fallidas por errores del sistema no consumen créditos',
    'Los correos duplicados en el mismo lote de verificación se procesan una sola vez',
  ]},
  { heading: '6.2 Validez y transferencia de créditos', level: 3, paragraphs: ['Políticas importantes sobre los créditos:'], list: [
    'Sin caducidad: los créditos nunca caducan y permanecen en tu cuenta indefinidamente',
    'No transferibles: los créditos no se pueden transferir entre cuentas',
    'No reembolsables: una vez comprados, los créditos no son reembolsables (consulta las excepciones en la Política de reembolsos)',
    'Vinculados a la cuenta: los créditos están vinculados a tu cuenta y no se pueden compartir',
  ]},
  { id: 'cancellation-policy', heading: '7. Cancelación y reembolsos', paragraphs: ['Puedes cancelar tu suscripción recurrente en cualquier momento desde la configuración de tu cuenta o contactando a nuestro equipo de soporte en info@giggal.ai. Tras la cancelación:'], list: [
    'Tu suscripción no se renovará en el siguiente ciclo de facturación',
    'Conservarás todos los créditos de tu cuenta',
    'Puedes seguir usando tus créditos existentes sin restricciones',
    'Puedes seguir comprando paquetes de créditos de pago por uso',
  ], after: ['Los reembolsos por actividad inusual o circunstancias excepcionales se gestionan de acuerdo con nuestra Política de reembolsos. Si tienes problemas o sospechas de actividad fraudulenta, contacta de inmediato a nuestro equipo de soporte para que lo revise.']},
  { heading: '8. Política de uso aceptable', paragraphs: ['Te comprometes a usar el Servicio solo con fines lícitos y en cumplimiento de todas las leyes y normativas aplicables. Te comprometes a no usar el Servicio:'], list: [
    'Para verificar direcciones de correo obtenidas sin el consentimiento o la autorización adecuados',
    'Para enviar spam o mensajes de correo no solicitados después de la verificación',
    'Para infringir leyes o normativas aplicables, incluidas la Ley CAN-SPAM, el RGPD y la CASL',
    'Para infringir o vulnerar los derechos de otras personas',
    'Para distribuir malware u otro código dañino',
    'Para suplantar la identidad de cualquier persona o entidad',
    'Para realizar cualquier actividad fraudulenta o abusar de nuestro servicio',
    'Para revender o redistribuir nuestros servicios de verificación sin autorización',
    'Para intentar aplicar ingeniería inversa a nuestros sistemas de verificación o comprometerlos',
    'Para compartir las credenciales de tu cuenta o tus créditos con usuarios no autorizados',
  ]},
  { heading: '9. Precisión y limitaciones del servicio', paragraphs: ['Aunque buscamos la máxima precisión en la verificación de correo, reconoces y aceptas que:'], list: [
    'La verificación de correo no puede garantizar un 100 % de precisión debido a limitaciones técnicas',
    'Algunos servidores de correo pueden dar respuestas de falso positivo o falso negativo',
    'Los resultados de verificación se basan en comprobaciones en tiempo real y pueden cambiar con el tiempo',
    'Ofrecemos los resultados de verificación "tal cual" y no damos ninguna garantía sobre la entregabilidad',
    'Eres responsable del uso lícito de los datos verificados y de cualquier comunicación posterior',
  ]},
  { heading: '10. Uso lícito y cumplimiento en los mensajes', paragraphs: ['Si usas direcciones de correo verificadas para cualquier mensaje de prospección, transaccional o de soporte, eres el único responsable de garantizar el cumplimiento de todas las leyes y normativas aplicables, incluidas, entre otras:'], list: [
    'Ley CAN-SPAM (Estados Unidos)', 'RGPD (Unión Europea)', 'CASL (Canadá)', 'Otras leyes antispam y de protección de datos aplicables',
  ], after: ['Debes obtener cualquier consentimiento exigido e incluir los mecanismos de baja o de preferencias exigidos por la ley cuando corresponda. Giggal.ai no es responsable del uso que hagas de las direcciones de correo verificadas.']},
  { heading: '11. Propiedad intelectual', paragraphs: ['El Servicio y su contenido, funciones y funcionalidades originales son propiedad de Giggal.ai y están protegidos por las leyes internacionales de derechos de autor, marcas, patentes, secretos comerciales y otras leyes de propiedad intelectual. No puedes copiar, modificar, distribuir, vender ni arrendar ninguna parte de nuestros servicios sin permiso previo por escrito.']},
  { heading: '12. Datos y privacidad', paragraphs: [
    'Tu uso del Servicio también se rige por nuestra Política de privacidad. Recopilamos, almacenamos y tratamos tus datos según se describe en la Política de privacidad. Conservas todos los derechos sobre los datos de tus clientes y tus listas de correo, y no los usaremos salvo en la medida necesaria para prestar el Servicio o cuando lo exija la ley.',
    'Las direcciones de correo enviadas para verificación se procesan de forma segura y no se almacenan de forma permanente. No vendemos, compartimos ni usamos tus listas de correo para ningún fin distinto de la prestación de los servicios de verificación.',
  ]},
  { heading: '13. Modificaciones y disponibilidad del servicio', paragraphs: [
    'Nos reservamos el derecho de modificar o interrumpir el Servicio (o cualquier parte de él), de forma temporal o permanente, con o sin previo aviso. No seremos responsables ante ti ni ante ningún tercero por cualquier modificación, suspensión o interrupción del Servicio.',
    'Procuramos mantener una alta disponibilidad del servicio, pero no garantizamos un acceso ininterrumpido. El mantenimiento programado se anunciará con antelación cuando sea posible.',
  ]},
  { heading: '14. Limitación de responsabilidad', paragraphs: ['En la máxima medida permitida por la ley, en ningún caso Giggal.ai ni sus directores, empleados, socios, agentes, proveedores o afiliados serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, sin limitación, la pérdida de ganancias, de datos, de uso o de fondo de comercio, u otras pérdidas intangibles, derivados de:'], list: [
    'Tu acceso al Servicio o su uso, o la imposibilidad de acceder al Servicio o de usarlo',
    'Cualquier conducta o contenido de un tercero en el Servicio',
    'Cualquier contenido obtenido del Servicio',
    'El acceso, el uso o la alteración no autorizados de tus transmisiones o contenidos',
    'Resultados de verificación de correo inexactos',
    'Entregas de correo fallidas o rebotes después de la verificación',
    'Créditos consumidos por error o uso indebido del usuario',
  ]},
  { heading: '15. Exclusión de garantías', paragraphs: [
    'El Servicio se presta "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas. Giggal.ai rechaza todas las garantías, incluidas, entre otras, las garantías implícitas de comerciabilidad, idoneidad para un fin determinado y no infracción.',
    'No garantizamos que el Servicio sea ininterrumpido, oportuno, seguro o libre de errores, ni que los resultados de verificación de correo sean 100 % precisos.',
  ]},
  { heading: '16. Indemnización', paragraphs: ['Te comprometes a defender, indemnizar y mantener indemnes a Giggal.ai y a sus licenciatarios y licenciantes frente a cualquier reclamación, daño, obligación, pérdida, responsabilidad, costo o deuda, y gasto, derivado de tu uso del Servicio o del incumplimiento de estos Términos.']},
  { heading: '17. Terminación', paragraphs: ['Podemos terminar o suspender tu cuenta y tu acceso al Servicio de inmediato, sin previo aviso ni responsabilidad, por cualquier motivo, incluido, sin limitación, el incumplimiento de estos Términos. Tras la terminación:'], list: [
    'Tu derecho a usar el Servicio cesará de inmediato',
    'Los créditos no usados se perderán sin reembolso',
    'Las suscripciones recurrentes se cancelarán',
    'El acceso a tu cuenta y a tus datos puede revocarse de forma permanente',
  ]},
  { heading: '18. Ley aplicable', paragraphs: ['Estos Términos se regirán e interpretarán de acuerdo con las leyes de la jurisdicción en la que opera Giggal.ai, sin tener en cuenta sus normas sobre conflicto de leyes.']},
  { heading: '19. Resolución de disputas', paragraphs: ['Cualquier disputa derivada de estos Términos o del Servicio, o relacionada con ellos, se intentará resolver primero mediante negociaciones de buena fe. Si las negociaciones fracasan, las disputas se resolverán mediante arbitraje vinculante de acuerdo con las reglas de la asociación de arbitraje correspondiente.']},
  { heading: '20. Cambios en los términos', paragraphs: ['Nos reservamos el derecho de modificar o sustituir estos Términos en cualquier momento, a nuestra entera discreción. Si una revisión es sustancial, avisaremos con al menos 30 días de antelación antes de que entren en vigor los nuevos términos. Lo que constituye un cambio sustancial se determinará a nuestra entera discreción.']},
  { heading: '21. Divisibilidad', paragraphs: ['Si alguna disposición de estos Términos se considera inaplicable o inválida, dicha disposición se modificará e interpretará para cumplir sus objetivos en la mayor medida posible conforme a la ley aplicable, y las demás disposiciones seguirán plenamente vigentes.']},
  { heading: '22. Información de contacto', paragraphs: [
    'Si tienes preguntas sobre estos Términos del servicio, contáctanos en:',
    'Correo electrónico: info@giggal.ai',
    'Sitio web: https://giggal.ai',
    'Al usar los servicios de Giggal.ai, reconoces que has leído y comprendido estos Términos del servicio y aceptas quedar vinculado por ellos.',
  ]},
]

export default function TerminosPage() {
  return (
    <LegalPageL10n
      locale="es"
      path="/es/terminos"
      title="Términos del"
      accent="servicio"
      updated="22 de octubre de 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
