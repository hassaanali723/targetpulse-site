---
title: "¿Qué significa Cleaned en Mailchimp?"
seoTitle: "¿Qué significa Cleaned en Mailchimp? Causas y qué hacer"
description: "Cleaned en Mailchimp significa que la dirección tuvo un rebote duro o rebotes suaves repetidos y Mailchimp dejó de enviarle. Por qué pasa y qué hacer."
slug: que-significa-cleaned-en-mailchimp
date: 2026-10-19
updated: 2026-10-19
keyword: qué significa cleaned en mailchimp
image: /blog/covers/es/que-significa-cleaned-en-mailchimp.webp
imageAlt: Guía del estado Cleaned de la audiencia de Mailchimp con las causas de rebote y las diferencias entre estados
cta: Encuentra las direcciones no válidas antes de que Mailchimp las limpie
---

Cleaned en Mailchimp significa que Mailchimp dejó de enviar a esa dirección porque tuvo un rebote duro, o demasiados rebotes suaves, y Mailchimp la considera no válida. El nombre confunde a la gente. Cleaned significa "limpiado", y parece que Mailchimp ordenó o arregló algo por ti. En realidad no se reparó nada. El contacto sigue en tu audiencia con la etiqueta Cleaned, no puede recibir ningún correo tuyo y no cuenta para tu límite mensual de contactos.

## Por qué Mailchimp limpia una dirección

Los rebotes duros son fallos de entrega permanentes en los que un servidor de destino rechaza un correo directamente. Los motivos comunes que da Mailchimp son un buzón que no existe y un servidor de destino que ha bloqueado la entrega de forma permanente. Las erratas, como escribir con en lugar de com, y las direcciones antiguas de personas que se fueron de una empresa son ejemplos típicos. En la mayoría de los casos, Mailchimp limpia de forma automática e inmediata las direcciones con rebote duro, y las excluye de todas las campañas futuras que envíes a tu audiencia.

Los rebotes suaves funcionan de otra forma, porque son fallos de entrega temporales. Cuando una dirección da un rebote suave, Mailchimp vuelve a intentar la entrega en los envíos siguientes en lugar de cortarla de inmediato. Pero si una dirección sigue fallando una y otra vez, Mailchimp la convierte en rebote duro y la limpia. Mailchimp aplica una cifra concreta a este proceso. Limpia una dirección después de 7 rebotes suaves si el contacto no tiene actividad anterior como suscriptor. Y permite hasta 15 rebotes suaves para los contactos que sí tienen actividad anterior.

Mailchimp indica varios motivos por los que un mensaje de campaña puede dar un rebote suave. El buzón del destinatario puede estar lleno, inactivo o mal configurado. Su servidor de correo puede estar caído o desconectado, o tu campaña puede haber enviado demasiados correos a ese servidor en poco tiempo. Otros motivos de rebote suave son los mensajes demasiado grandes, los dominios que no existen de forma temporal, los filtros de contenido o los mensajes que no se pueden retransmitir. Un correo también puede dar un rebote suave si no cumple los requisitos de antivirus, antispam o de remitente del servidor de destino, o si el mensaje [no pasó DMARC](/blog/spf-dkim-dmarc-explained).

Mailchimp dice que no puede predecir si un correo rebotará antes de que lo envíes, y que cada proveedor de correo rechaza el correo según sus propias reglas. Cuando termina el envío de una campaña, los avisos de rebote siguen disponibles en tus informes de correo de Mailchimp durante 30 días después del envío. Puedes leer más sobre cómo clasifican los servidores de correo los problemas de entrega en nuestra guía sobre [rebote duro vs rebote suave](/blog/hard-bounce-vs-soft-bounce), o revisar la guía de Mailchimp [Soft vs. Hard Bounces](https://mailchimp.com/help/soft-vs-hard-bounces/).

## Cleaned frente a Unsubscribed, Archived y otros tipos de contacto

Mailchimp divide los contactos en categorías distintas. Cada una decide si el contacto puede recibir mensajes y si pagas por él. En la tabla mantenemos el nombre del estado en inglés, como aparece en la interfaz en inglés de Mailchimp:

| Estado | Qué significa | Puede recibir | Cuenta para el límite de contactos |
| --- | --- | --- | --- |
| Subscribed (suscrito) | Aceptó recibir tus campañas de correo | Correos de marketing, SMS de marketing, anuncios, correos transaccionales | Sí |
| Unsubscribed (dado de baja) | Pidió no recibir tus campañas de marketing | Anuncios y correos transaccionales | Sí |
| Non-subscribed (no suscrito) | Interactuó contigo (una tienda, una integración o una importación) pero nunca dio su consentimiento | Anuncios y correos transaccionales | Sí |
| Cleaned (limpiado) | La dirección tuvo un rebote duro o rebotes suaves repetidos. No se puede entregar | Nada | No |
| Pending (pendiente) | Envió un formulario de registro pero no confirmó el doble opt-in | Nada | No |
| Archived (archivado) | Se quitó de la audiencia activa, pero se conservan los datos de su perfil | Nada | No |
| Deleted (eliminado) | Se borró de forma permanente. No se puede deshacer | Nada | No |

Los estados Cleaned y Unsubscribed impiden enviar campañas de marketing a una dirección, pero la diferencia importa para tu factura mensual. Unsubscribed es una decisión del suscriptor, y Mailchimp sigue contando ese contacto para tu límite mensual de contactos. Cleaned es una decisión de Mailchimp después de que falla la entrega. La dirección no puede recibir nada, y Mailchimp no te cobra por ella. Los contactos Pending que siguen sin confirmar se eliminan de tu audiencia de forma automática después de 60 días. Las cuentas con planes de pago antiguos creados antes del 15 de mayo de 2019 pueden tener otras reglas de límite de contactos.

## Qué hacer con los contactos Cleaned

Mailchimp recomienda archivar los contactos Cleaned en lugar de borrarlos. Archivar conserva el historial del contacto y mantiene registrada la dirección mala en tu audiencia. Según Mailchimp, eso te ayuda a no volver a rebotar en ella. Mailchimp aconseja borrar contactos solo para atender solicitudes del RGPD, porque borrar elimina el registro de forma permanente y no se puede deshacer. Archivar los contactos Cleaned no reduce tu factura mensual, porque las direcciones Cleaned no cuentan para el límite de tu plan. Mailchimp explica esta política en su documentación [About Cleaned Contacts](https://mailchimp.com/help/about-cleaned-contacts/).

Para revisar o exportar todas las direcciones Cleaned de tu audiencia de Mailchimp, puedes separarlas con segmentos:

1. Abre la pestaña Audience en tu panel de Mailchimp y haz clic en Segments.
2. Haz clic en Create segment.
3. Configura el criterio del segmento para que Email subscription status sea one of Cleaned.
4. Haz clic en Use segment, escribe un nombre para el segmento y guárdalo.
5. Abre el segmento guardado, haz clic en Export segment y confirma la exportación.
6. Haz clic en View exports en el aviso que aparece y luego en Download CSV para guardar el archivo.

Cuando un contacto se limpia por una errata simple, como user@gmai.com o name@conpany.com, no puedes editar el registro del contacto. Para corregir el error, añade la dirección corregida como un contacto totalmente nuevo. Como Mailchimp no cobra por las direcciones Cleaned, mantener el registro original con la errata no te cuesta nada.

A veces, direcciones de correo válidas dan un rebote duro. Antes de actuar, revisa el motivo del rebote en el informe de tu campaña. Un cortafuegos de empresa estricto o un filtro de spam pueden haber rechazado el mensaje con respuestas SMTP como Denied (denegado), Unacceptable Content (contenido no aceptable) o Blocked (bloqueado). En las empresas, un filtro puede bloquear por completo las direcciones IP de envío de Mailchimp. El equipo de TI del destinatario puede arreglarlo añadiendo las direcciones IP de Mailchimp a su lista de permitidas. En otros casos, un gran proveedor de correo puede estar bloqueándote de forma temporal. Mailchimp dice que eso puede levantarse en uno o dos días cuando bajan las quejas de spam. Puedes diagnosticar respuestas de error concretas del servidor si sabes [leer los mensajes de rebote](/blog/550-5-7-1-error). Si la dirección es válida con seguridad y el bloqueo de entrega ya no existe, el contacto tiene que volver a registrarse con tu formulario para entrar de nuevo en tu audiencia. Mailchimp no te deja cambiar a mano un contacto Cleaned a Subscribed.

## Cuando se limpian muchos contactos a la vez

Si una campaña reciente hizo que se limpiara un grupo grande de contactos a la vez, tu cuenta podría enfrentarse a una suspensión automática. Mailchimp suspende cuentas de forma automática cuando un solo envío supera los umbrales del sector para rebotes, bajas o quejas por abuso. Mailchimp dice que los proveedores de internet y las organizaciones antispam le exigen aplicar estos límites. Si Mailchimp suspende tu cuenta, el envío se desactiva mientras los equipos de cumplimiento investigan. Pero el inicio de sesión, las llamadas a la API y el acceso a los datos siguen funcionando con normalidad.

Las listas antiguas son la causa habitual, porque la gente cambia de trabajo, abandona buzones y cierra cuentas. Si hace tiempo que no escribes a tu audiencia, Mailchimp recomienda volver a confirmar tus contactos antes de programar una campaña masiva. Es decir, pedir a los suscriptores que confirmen que todavía quieren recibir tus mensajes.

Mailchimp también recomienda con firmeza autenticar tu dominio de envío, [configurar DMARC](/blog/what-is-a-dmarc-record) y no usar nunca una dirección gratis de Gmail o Yahoo como dirección From.

## Cómo evitar que se limpien tus contactos

La forma más directa de evitar que se limpien direcciones es verificar tus listas antes de importarlas o de enviar campañas. Una herramienta de verificación de correo comprueba si cada buzón existe de verdad en el servidor de destino antes de que salga una campaña. Así evita que las direcciones no válidas reboten en tu cuenta. Aquí es donde [Giggal puede conectarse a Mailchimp](/integrations) con una clave de API. Importa los contactos suscritos de tu audiencia, comprueba si cada buzón existe y resuelve las direcciones de [dominios catch-all](/catch-all-verification). Cuando termina la verificación, descargas los resultados en un archivo CSV y archivas o das de baja a mano las direcciones malas dentro de Mailchimp. No cambia nada en tu audiencia de Mailchimp.

Verificar antes de enviar mantiene bajos los rebotes. Si tienes un segmento antiguo que lleva tiempo sin recibir correo, pásalo por un verificador o envía una campaña de reconfirmación antes de incluirlo en una newsletter principal. Asegúrate de que tus registros de autenticación de dominio siguen siendo válidos en el DNS, porque un fallo de alineación DMARC es uno de los motivos de rebote suave que reconoce Mailchimp. Recuerda que verificar tu audiencia no recupera los contactos que Mailchimp ya ha limpiado. Cuando una dirección recibe el estado Cleaned, Mailchimp solo permite que esa persona vuelva con un registro nuevo en tu formulario.

## Preguntas frecuentes

**¿Los contactos Cleaned cuentan en mi factura de Mailchimp?**
No. Los contactos Cleaned no cuentan para tu límite mensual de contactos, y Mailchimp no te cobra por ellos. De los tipos de contacto, solo los Subscribed, Unsubscribed y Non-subscribed cuentan para el límite de contactos de tu plan.

**¿Puedo volver a suscribir un contacto Cleaned?**
No. No puedes cambiar a mano un contacto Cleaned a Subscribed desde tu panel de Mailchimp. El suscriptor tiene que volver a escribir sus datos en el formulario de registro alojado en Mailchimp o en un formulario integrado en tu web para volver a dar su consentimiento.

**¿Cuántos rebotes suaves hacen falta para que Mailchimp limpie un contacto?**
Mailchimp limpia una dirección después de 7 rebotes suaves si el contacto no tiene actividad anterior como suscriptor. Si el contacto tiene actividad anterior, Mailchimp permite hasta 15 rebotes suaves antes de convertir la dirección en rebote duro y limpiarla.

**¿Debo borrar los contactos Cleaned?**
No. Mailchimp recomienda archivar los contactos Cleaned en lugar de borrarlos. Archivar mantiene el registro en tu audiencia, y según Mailchimp eso te ayuda a no volver a rebotar en esa dirección. Mailchimp dice que solo hay que borrar contactos por motivos del RGPD.

**¿Por qué Mailchimp limpió una dirección que sé que es válida?**
Las direcciones de correo válidas pueden dar un rebote duro si un filtro de spam o un cortafuegos de empresa bloquea los servidores de Mailchimp con respuestas SMTP como Denied o Blocked. Si el destinatario pide a su administrador de red que añada las direcciones IP de envío de Mailchimp a la lista de permitidas, puede volver a unirse a tu audiencia con tu formulario de registro.

La etiqueta Cleaned es Mailchimp protegiendo tu reputación de remitente cuando el rebote ya ocurrió. Verificar antes evita que el rebote llegue a ocurrir. Pasa tu lista de suscriptores por [Giggal.ai](/email-list-cleaning) (en inglés) antes de tu próximo envío para encontrar las direcciones no válidas antes de que Mailchimp las limpie.
