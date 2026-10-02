---
title: "Rebote duro vs rebote suave: qué significa cada uno y qué hacer"
seoTitle: "Rebote duro vs rebote suave: qué es y qué hacer"
description: Rebote duro (hard bounce) y rebote suave explicados: cómo leer el código, por qué las herramientas lo etiquetan distinto y qué tasa de rebote es segura.
slug: rebote-duro-vs-rebote-suave
date: 2026-09-27
updated: 2026-09-27
keyword: rebote duro y rebote suave
image: /blog/covers/es/rebote-duro-vs-rebote-suave.webp
imageAlt: Rebote duro vs rebote suave, un 5 en el código significa permanente y un 4 significa volver a intentar
cta: Encuentra los rebotes duros antes de enviar
---

Un rebote duro, o hard bounce, es un fallo permanente. La dirección de correo no existe, el dominio no existe, o el servidor de destino te ha bloqueado. Si vuelves a enviar, vuelve a rebotar.

Un rebote suave, o soft bounce, es un fallo temporal. La dirección es real, pero algo detuvo la entrega por ahora. La bandeja está llena, el servidor está ocupado, o el servidor te pide que lo intentes más tarde. Si vuelves a enviar, el correo suele llegar.

Esas son las definiciones. Hay tres cosas más que necesitas saber, y importan más que las definiciones:

- Cada herramienta de envío usa reglas distintas. El mismo rebote puede contar como duro en una herramienta y como suave en otra.
- Una dirección correcta y activa puede dar un rebote duro igualmente. Pasa cuando la configuración de tu correo está mal, no la dirección.
- La tasa de rebote que hace que suspendan tu cuenta no siempre es la que ves en el informe de tu campaña.

Esta guía cubre los tres puntos.

## Rebote duro vs rebote suave: la diferencia

| | Rebote duro (hard bounce) | Rebote suave (soft bounce) |
|---|---|---|
| Qué significa | Permanente. El correo no se entregará | Temporal. Puede entregarse en un intento posterior |
| Código en el mensaje de rebote | Empieza por 5 (550, 5.1.1, 5.7.1) | Empieza por 4 (421, 450, 4.2.2) |
| Causas comunes | La dirección no existe, el dominio no existe, remitente bloqueado | Bandeja llena, servidor ocupado, demasiados correos a la vez |
| Qué hace tu herramienta de envío | Deja de enviar a esa dirección, normalmente de inmediato | Vuelve a intentarlo durante un tiempo, a menudo hasta 72 horas |
| Qué deberías hacer | Eliminar la dirección. No volver a enviar | Esperar. Eliminarla solo si sigue rebotando |
| Daño a tu reputación | Alto. Muchos rebotes duros le dicen a los proveedores que tu lista es mala | Bajo si es uno. Se acumula si las mismas direcciones siguen rebotando |

## ¿Qué es un rebote duro?

Un rebote duro significa que el servidor de destino rechazó tu correo de forma definitiva. Volver a intentarlo no sirve.

El estándar del correo electrónico, la RFC 5321, lo llama fallo permanente. Sus palabras exactas son que el remitente "should not retry", es decir, no debe repetir la misma petición.

Hay dos tipos de rebote duro. En tu informe se ven igual, pero necesitan arreglos distintos.

**Tipo uno: la dirección está mal.** El buzón no existe. O el dominio no existe. O la dirección está mal escrita. Una lista verificada nunca debería producir estos rebotes. Así se ven:

- Gmail dice: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft dice: `5.1.1 Bad destination mailbox address`
- Microsoft también dice: `5.4.1 Recipient address rejected: Access denied`. La documentación de Microsoft explica este código así: "the recipient's address doesn't exist", la dirección del destinatario no existe.

Una dirección que se cerró cuando alguien dejó su empresa también entra en este grupo.

**Tipo dos: estás bloqueado.** La dirección es real. Pero el servidor de destino no acepta correo tuyo. Estos rebotes tienen códigos que empiezan por 5.7:

- `550 5.7.1` significa un bloqueo por política.
- `550 5.7.26` significa que Gmail rechazó tu correo porque tu dominio no está autenticado.
- `550 5.7.30` significa que tu correo no pasó la comprobación DKIM.

Tu herramienta de envío los cuenta como rebotes duros, porque el código empieza por 5. Pero la dirección está bien. El problema está de tu lado. Lo explicamos más abajo, porque desde 2025 es la causa de rebotes duros que más crece en listas limpias.

## ¿Qué es un rebote suave?

Un rebote suave significa que el servidor de destino dijo "ahora no". La RFC 5321 lo llama fallo temporal. Sus palabras son: "the error condition is temporary and the action may be requested again", la condición de error es temporal y la acción puede solicitarse de nuevo. Tu herramienta de envío lo toma al pie de la letra y lo intenta más tarde.

Estas son las causas comunes, con los códigos que verás:

- **Bandeja llena.** Gmail dice `452 4.2.2 The recipient's inbox is out of storage space`. La persona puede borrar correos y hacer sitio.
- **Demasiados correos demasiado rápido.** Gmail dice `450 4.2.1 The user you are trying to contact is receiving email too quickly`. O `421 4.7.28` cuando ve demasiado correo desde tu dirección IP. Microsoft dice de `4.7.500` a `4.7.699 Access denied, please try again later` mientras revisa tu actividad.
- **Greylisting.** Algunos servidores, y muchos secure email gateways, rechazan el primer correo de un remitente que no conocen. Luego lo aceptan en el segundo intento. La espera suele ser de unos 15 minutos.
- **Servidor caído.** Un código `421` significa que el servidor no está disponible. Un `4.4.1` o `4.4.2` significa que la conexión falló o se agotó el tiempo.
- **Correo caducado.** Un código `4.4.7` significa que tu servidor siguió intentándolo y luego se rindió. La RFC 5321 dice que los servidores deben seguir intentándolo unos cuatro o cinco días.

Un rebote suave es normal. Un rebote suave que se repite es un problema. Si una bandeja está "llena" en cada envío durante seis semanas, esa bandeja no está llena. Está abandonada. Toda herramienta de envío acabará tratándola así.

## Cómo leer el código de un mensaje de rebote

Cada mensaje de rebote lleva un código. Cuando sabes leerlo, no necesitas la etiqueta de nadie. Ves por ti mismo qué pasó.

Hay dos códigos en cada mensaje.

**El primer código tiene tres dígitos**, como 550 o 421. Aquí solo importa el primer dígito. Un 4 significa temporal. Un 5 significa permanente.

**El segundo código tiene tres números con puntos**, como 5.1.1. El primer número repite la misma regla: 4 es temporal, 5 es permanente. El segundo y el tercer número te dicen el motivo:

- `.1.1` significa que el buzón no existe (la parte antes de la @ está mal).
- `.1.2` significa que el dominio no existe (la parte después de la @ está mal).
- `.2.2` significa que la bandeja está llena.
- `.7.1` significa que el servidor te rechazó por una política.

![Cómo leer un código de rebote: el primer dígito dice si es duro o suave, el código extendido dice por qué, y la acción depende de ambos](/blog/fig-es-bounce-code-reading.webp)
Lee el primer dígito para saber el tipo. Lee el código completo para saber el motivo. Luego actúa según el motivo.

La tabla de abajo muestra los códigos que verás de verdad. El texto de los mensajes está copiado de la documentación oficial de Gmail y de Microsoft.

| Código | Dónde lo ves | Qué significa | Tipo | Qué hacer |
|---|---|---|---|---|
| 550 5.1.1 | Gmail, Microsoft, casi todos los servidores | El buzón no existe | Duro | Elimina la dirección |
| 5.1.2 | Cualquier servidor | El dominio no existe | Duro | Elimina la dirección |
| 5.4.1 Recipient address rejected: Access denied | Microsoft | La dirección no existe | Duro | Elimina la dirección |
| 550 5.2.1 | Gmail | La cuenta está inactiva | Duro | Elimina la dirección |
| 552 5.2.2 | Gmail | Bandeja llena y cuenta inactiva | Duro | Elimina la dirección |
| 452 4.2.2 | Gmail | Bandeja llena | Suave | Espera. Elimínala si se repite |
| 450 4.2.1 | Gmail | La persona está recibiendo demasiados correos | Suave | Espera |
| 421 4.7.28 | Gmail | Demasiado correo desde tu IP | Suave | Envía más despacio. Revisa tu lista |
| 550 5.7.28 | Gmail | Demasiado correo no deseado desde tu IP | Duro | Deja de enviar. Arregla tu lista y tu volumen |
| 550 5.7.1 | Gmail, Microsoft | Bloqueado por una política | Duro, pero la dirección está bien | Revisa tu autenticación y tu reputación |
| 550 5.7.26 | Gmail | Tu dominio no está autenticado | Duro, pero la dirección está bien | Configura SPF y DKIM |
| 550 5.7.30 | Gmail | Tu correo no pasó DKIM | Duro, pero la dirección está bien | Arregla tu configuración DKIM |
| 5.7.23 | Microsoft | Tu correo no pasó SPF | Duro, pero la dirección está bien | Arregla tu registro SPF |
| 5.7.606 a 5.7.649 | Microsoft | Tu IP de envío está bloqueada | Duro, pero la dirección está bien | Pide a Microsoft que retire el bloqueo y arregla la causa |
| 4.7.500 a 4.7.699 | Microsoft | Actividad sospechosa, bloqueado por ahora | Suave | Espera. Se libera solo si eres un remitente legítimo |
| 4.4.7 | Cualquier servidor | El correo caducó tras días de intentos | Suave, pero se rindió | Elimina la dirección si se repite |

Mira la última columna. Dos códigos pueden ser ambos rebotes duros y pedir acciones opuestas. Un `5.1.1` significa borra la dirección. Un `5.7.26` significa conserva la dirección y arregla tu DNS.

## Por qué el mismo rebote es duro en una herramienta y suave en otra

La gente compara tasas de rebote entre herramientas y se confunde. Este es el motivo.

El servidor de destino envía un código. Eso es todo lo que hace. Luego tu herramienta de envío decide qué hacer con ese código. Cada herramienta tiene su propia regla, y las reglas son distintas. La guía de Twilio lo dice claro: "not all ISPs adhere to that code consistently", no todos los proveedores respetan ese código de forma consistente.

Aquí tienes cuatro herramientas populares y sus reglas:

| Herramienta | Qué hace con un rebote suave | Cuándo un rebote suave se convierte en duro |
|---|---|---|
| Mailchimp | Vuelve a intentarlo y conserva el contacto | Tras 7 rebotes suaves si el contacto nunca abrió nada. Tras 15 si ha abierto antes |
| HubSpot | Lo llama "pending" y lo intenta hasta 72 horas. Luego registra un rebote suave | No automáticamente. Pero HubSpot pone "buzón lleno" en el grupo de rebotes duros, no suaves |
| SendGrid | Vuelve a intentarlo hasta 72 horas | A las 72 horas deja de intentarlo. Los rebotes duros van a una lista de bloqueo |
| Amazon SES | Lo intenta un tiempo y luego te avisa de que paró | Nunca automáticamente. Solo los rebotes duros cuentan para tu tasa de rebote. Las respuestas automáticas no cuentan nada |

![Cuatro plataformas de envío y sus reglas sobre cuándo un rebote suave se convierte en duro](/blog/fig-es-bounce-rules-by-platform.webp)
El mismo código, cuatro reglas distintas. Mueve una lista de Mailchimp a HubSpot y tu número de rebotes duros cambia, aunque las direcciones sean las mismas.

Así que un buzón lleno es un rebote suave en Gmail. Es un rebote duro en HubSpot. Y en Amazon SES es un rebote suave que nunca se convierte en duro. Si tu tasa de rebote cambia después de cambiar de herramienta, revisa las reglas antes de culpar a la lista.

La solución sencilla es dejar de fiarte de la etiqueta y leer el código. Todas las herramientas permiten exportar el mensaje de rebote. El código que hay dentro es el mismo, da igual qué herramienta lo recogió.

## ¿Cuál es una tasa de rebote duro aceptable?

El límite lo fija la empresa que envía tu correo. La mayoría no lo publica. Amazon SES sí, y sus cifras son una buena guía de cómo piensan los proveedores.

| Tasa de rebote duro | Qué hace Amazon SES |
|---|---|
| Menos del 2 % | El nivel bajo el que SES te dice que te mantengas "for best results", para obtener los mejores resultados |
| 5 % o más | Tu cuenta pasa a revisión |
| 10 % o más | Tu envío puede quedar pausado hasta que lo arregles |

Dos detalles importan. SES solo cuenta rebotes duros. Los rebotes suaves y los rebotes por IP bloqueada no cuentan en tu contra. Y SES no usa una ventana de tiempo fija. Mira una cantidad típica de tu envío, así que un remitente pequeño se juzga igual que uno grande.

Las quejas de spam van de la mano de los rebotes. Las directrices para remitentes de Google dicen que mantengas tu tasa de quejas por debajo del 0,10 por ciento y que nunca llegue al 0,30 por ciento. Amazon SES revisa cuentas al 0,1 por ciento y puede pausarlas al 0,5 por ciento. Una lista que da rebotes duros por encima del 2 por ciento suele recibir quejas también. Las dos cosas vienen de la misma causa: gente que no pidió tu correo, y direcciones que nadie comprobó.

El artículo sobre [valores de referencia de la tasa de rebote](/blog/how-to-reduce-email-bounce-rate) desglosa los límites seguros por tipo de correo y por origen de la lista.

## ¿Debes eliminar los rebotes duros de tu lista?

Sí. De inmediato.

Las palabras exactas de Amazon son: "you should immediately remove the recipient's email address from your mailing list", debes eliminar de inmediato la dirección del destinatario de tu lista. La misma página avisa de que, si sigues enviando a direcciones con rebote duro, tu envío puede quedar pausado. Mailchimp ni siquiera te da a elegir. Las direcciones con rebote duro se "cleaned from your audience automatically and immediately", se limpian de tu audiencia de forma automática e inmediata, y no vuelven a recibir nada.

No vuelvas a intentarlo. No las guardes para la próxima campaña por si el buzón vuelve. Una dirección `5.1.1` que rebotó el mes pasado rebotará el mes que viene. Cada intento extra le dice al proveedor que envías a direcciones que no conoces.

Hay una excepción. Si el código es `5.7.26`, `5.7.30`, `5.7.23`, o un código de IP bloqueada como `5.7.6xx`, la dirección no es el problema. Borrarla no arregla nada. Arregla tu autenticación o tu reputación. Luego vuelve a enviar a la misma dirección.

Los rebotes suaves son lo contrario. Déjalos en paz. Tu herramienta de envío lo intentará de nuevo por su cuenta. Si tu herramienta no tiene una regla para rebotes repetidos, crea una. Una dirección que rebota suave en tres envíos seguidos en un mes no va a volver. La regla de siete de Mailchimp es un límite seguro para cualquiera.

## ¿Por qué una dirección correcta da rebote duro?

Porque un rebote duro mide si el correo fue aceptado. No mide si la dirección existe. Cuatro cosas provocan un rebote 5xx en un buzón real y activo.

**Tu correo no está autenticado.** El 5 de mayo de 2025, Microsoft empezó a exigir SPF, DKIM y DMARC a cualquier dominio que envíe más de 5.000 correos al día a direcciones de Outlook.com, Hotmail y Live. Primero movió el correo que no cumplía a la carpeta de spam. Luego empezó a rechazarlo con `550 5.7.15 Access denied, sending domain does not meet the required authentication level`. Google exige los mismos tres registros a los remitentes masivos. Los códigos `550 5.7.26` y `550 5.7.30` de Gmail son lo que ves desde tu lado cuando falta un registro. Todos estos códigos empiezan por 5. Así que caen en tu columna de rebotes duros, aunque las direcciones habrían aceptado el correo.

**La empresa bloquea las direcciones desconocidas en la puerta.** Microsoft Exchange se puede configurar para rechazar cualquier dirección que no esté en el directorio de la empresa. Lo hace con `5.4.1 Recipient address rejected: Access denied`. La mayoría de las veces es un rebote duro real. A veces es un empleado nuevo cuyo buzón aún no se ha añadido. Por eso un verificador que comprueba el buzón en sí te da mejor respuesta que el rebote.

**Hay un secure email gateway delante del buzón.** Muchas empresas pasan todo el correo entrante por un [secure email gateway](/blog/what-is-a-secure-email-gateway) como Proofpoint, Mimecast o Barracuda. El gateway responde por todo el dominio. Analiza cada correo y rechaza cualquiera que rompa una de sus reglas, normalmente con un código de política `5.7.1`. Eso es un rebote duro contra un buzón que existe. Los gateways también provocan rebotes tardíos. El gateway acepta el correo en la puerta sin comprobar si el buzón existe. El rebote llega minutos u horas después, cuando el servidor detrás del gateway no encuentra ese buzón. Tu informe muestra un rebote duro, pero llegó después del envío, no durante.

**El dominio es catch-all.** Es el problema inverso. Un [dominio catch-all](/blog/what-is-a-catch-all-email-address) acepta correo para cualquier dirección, real o no. Así que nunca dice `5.1.1` en la puerta. El correo se acepta, luego rebota más tarde, o se descarta sin avisar. Alrededor del 30 por ciento de una lista B2B está en estos dominios. De ahí salen los rebotes duros que no esperabas.

Si quieres saber [por qué rebotan los correos](/blog/why-cold-emails-bounce) en cold outreach en concreto, las causas se acumulan de otra forma. Ahí la antigüedad de la lista hace la mayor parte del daño.

## Cómo evitar los rebotes duros antes de enviar

Casi cualquier `5.1.1` de un informe de campaña se podía haber evitado. El buzón ya no existía antes de que pulsaras enviar. La verificación le hace al servidor de destino la misma pregunta que le habría hecho el rebote, pero antes de la campaña en vez de después.

Un [verificador de direcciones de correo](/email-checker) hace tres comprobaciones en orden:

- **Sintaxis.** Detecta cosas como `nombre@gmail..com` antes de que te cuesten un envío.
- **Dominio.** Detecta erratas como `gmial.com` y dominios caducados.
- **Buzón.** Abre una conexión con el servidor de destino y pregunta si acepta correo para esa dirección exacta. Si la respuesta es `5.1.1`, es el mismo rebote que habrías recibido en la campaña. Pero no te cuesta reputación, porque no se envió ningún correo.

La verificación estándar deja de funcionar en un punto. En un dominio catch-all, el servidor dice sí a todas las direcciones. Así que la comprobación vuelve como "desconocido" o "arriesgado", y tienes que adivinar. Giggal.ai se construyó para convertir esa parte de la lista en una respuesta real: válido o no válido. La página de [verificación catch-all](/catch-all-verification) explica cómo.

Los gateways provocan el mismo problema. Un gateway acepta la pregunta del verificador para cualquier dirección, así que una comprobación estándar también vuelve ahí como "desconocido". Giggal.ai comprueba estas direcciones de otra forma. El artículo sobre [verificar correos detrás de secure email gateways](/blog/how-to-verify-emails-behind-secure-email-gateways) explica qué hace el gateway y cómo la comprobación lo supera.

Para los formularios de registro, añade una llamada de [verificación en tiempo real](/public/docs) al enviar el formulario. Una dirección mal escrita se detecta mientras la persona sigue en la página. Es el único paso que reduce los rebotes en listas que todavía no has construido.

Después, ocúpate de dos tipos de dirección que pasan la verificación pero te perjudican igual. Las direcciones de rol como info@ y support@ existen, así que pasan. Pero nadie es su dueño personal, y reciben más quejas. Las direcciones desechables pasan mientras existen y desaparecen después. Cualquier buen verificador marca las dos. Una lista de [cold email](/blog/good-bounce-rate-for-cold-email) en particular debería quitarlas antes del primer envío.

## Preguntas frecuentes

**¿Cuál es la diferencia entre la tasa de rebote duro y la tasa de rebote suave?**
Cada una es ese tipo de rebote dividido entre los correos que enviaste. La tasa de rebote duro es la que te mete en problemas, porque muestra la calidad de tu lista. Amazon SES, por ejemplo, solo cuenta rebotes duros cuando decide revisar o pausar una cuenta. La tasa de rebote suave dice más de tu velocidad de envío, tu volumen y tu reputación. Léela por separado.

**¿Debo borrar los correos que rebotaron?**
Borra de inmediato los rebotes duros con códigos de dirección: `5.1.1`, `5.1.2`, `5.2.1` y similares. Conserva los rebotes duros con códigos de autenticación, `5.7.26`, `5.7.30` y `5.7.23`, y arregla tu autenticación. Conserva los rebotes suaves y deja que el reintento siga. Elimina cualquier dirección que rebote suave varias veces seguidas.

**¿Un rebote suave puede convertirse en rebote duro?**
Sí, de dos formas. El servidor de destino puede cambiar su respuesta. Gmail informa de una bandeja llena como `452 4.2.2` mientras la cuenta está activa, y como `552 5.2.2` cuando la cuenta pasa a inactiva. O tu herramienta de envío puede cambiar la etiqueta. Mailchimp convierte una dirección en rebote duro tras 7 rebotes suaves sin actividad, o 15 con actividad.

**¿Los rebotes suaves dañan la reputación del remitente?**
Uno no. Un flujo constante sí. Los proveedores ven que envías una y otra vez a buzones que no pueden recibir. Y una tasa alta de rebotes suaves suele ser un aviso por sí misma. Un código como `421 4.7.28` es el proveedor diciéndote directamente que vayas más despacio.

**¿Por qué mi correo dio rebote duro si la dirección es correcta?**
Casi siempre por la autenticación. Gmail y Outlook.com ahora rechazan el correo masivo que no tiene SPF, DKIM y DMARC. Ese rechazo es un código 5xx, así que tu herramienta lo archiva como rebote duro. Mira el código. Si empieza por `5.7`, la dirección no es el problema.

Un informe de rebotes solo sirve si sabes leerlo. Lee el primer dígito. Luego lee el motivo. Luego actúa según el motivo. Las direcciones que habrían rebotado con `5.1.1` son la parte fácil, porque puedes encontrarlas antes de enviar. Pasa la lista por [Giggal.ai](/) primero. La columna de rebotes duros de tu próximo informe tendrá casi solo cosas que no podías saber.
