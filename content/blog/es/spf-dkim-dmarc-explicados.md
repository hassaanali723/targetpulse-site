---
title: "SPF, DKIM y DMARC explicados"
seoTitle: "SPF, DKIM y DMARC explicados: cómo funcionan juntos (2026)"
description: "SPF comprueba el servidor, DKIM la firma y DMARC que uno coincida con tu dominio From. Los registros que debes publicar, fallos comunes y cambios de 2026."
slug: spf-dkim-dmarc-explicados
date: 2026-10-19
updated: 2026-10-19
keyword: qué son SPF, DKIM y DMARC
image: /blog/covers/es/spf-dkim-dmarc-explicados.webp
imageAlt: Banner azul oscuro con el texto SPF, DKIM, DMARC y tres columnas con el desglose técnico de cada registro
cta: Autentica tu dominio y limpia tu lista antes de enviar
---

SPF, DKIM y DMARC son tres registros DNS. Cada uno responde a una pregunta distinta sobre un correo. SPF (Sender Policy Framework) indica qué servidores pueden enviar correo en nombre de tu dominio. DKIM (DomainKeys Identified Mail) añade una firma a cada mensaje, para que el receptor sepa que nada cambió después de que saliera de tu servidor. DMARC (Domain-based Message Authentication, Reporting and Conformance) comprueba que al menos uno de esos dos coincide con el dominio de tu dirección From. También le dice al receptor qué hacer cuando ninguno coincide. Desde 2024 ya no son opcionales: Gmail y Outlook.com ahora rechazan mucho correo que no pasa estas comprobaciones, en lugar de solo enviarlo a spam.

| Registro | Qué comprueba | Dónde está |
| --- | --- | --- |
| SPF | Qué servidores pueden enviar en nombre de tu dominio | Registro TXT en tu dominio |
| DKIM | Una firma digital en cada mensaje | Registro TXT en selector._domainkey.yourdomain |
| DMARC | Que SPF o DKIM coincidan con tu dominio From, y qué hacer si no | Registro TXT en _dmarc.yourdomain |

## Por qué ya no puedes saltártelos

Desde el 1 de febrero de 2024, Google aplica reglas obligatorias para cualquiera que envíe correo a cuentas personales de Gmail. Según estos requisitos básicos, todo remitente debe configurar SPF o DKIM. También debe tener un DNS directo e inverso válido, con registros PTR que coincidan para las IP de envío. Debe usar cifrado TLS en la transmisión y cumplir las especificaciones de la RFC 5322. Tu tasa de spam en Google Postmaster Tools tiene que mantenerse por debajo del 0,3%, y Google recomienda mantenerla por debajo del 0,1%. Si envías correo sin autenticar, Google avisa de que los mensajes pueden ir a la carpeta de spam o ser rechazados con el código de error 5.7.26.

Si envías 5.000 o más mensajes al día a direcciones personales de Gmail, Google te clasifica como remitente masivo y las reglas se endurecen. Los remitentes masivos no pueden elegir entre SPF o DKIM: deben configurar los dos protocolos. También deben publicar un registro DMARC, mantener la alineación de dominio entre el encabezado From visible y SPF o DKIM, e incluir un mecanismo de baja con un clic que funcione en los mensajes de marketing. Google cuenta este umbral de 5.000 mensajes sumando tu dominio principal y todos sus subdominios en una ventana de 24 horas. Cuando tu dominio llega a ese umbral, Google considera que la condición de remitente masivo es permanente. Desde noviembre de 2025, Gmail empezó a endurecer la aplicación sobre el tráfico que no cumple, con retrasos temporales de entrega y rechazos permanentes. Estas directrices se aplican a las cuentas personales de Gmail, no a los buzones de empresa de Google Workspace.

Microsoft empezó a aplicar su propia autenticación el 5 de mayo de 2025 para los remitentes que envían 5.000 o más mensajes al día a cuentas de consumo de Outlook.com, Hotmail y Live. Los remitentes que superan este umbral necesitan que SPF pase, que la firma DKIM pase y un registro DMARC publicado con p=none o más estricto, alineado con SPF o DKIM. Si no cumples estos requisitos, Microsoft bloquea tus mensajes con el código de rebote 550 5.7.515 Access denied, sending domain does not meet the required authentication level (acceso denegado, el dominio de envío no cumple el nivel de autenticación exigido). Yahoo introdujo reglas parecidas para los remitentes masivos en 2024.

| Código | Qué falló |
| --- | --- |
| 4.7.27 y 5.7.27 | SPF no pasó |
| 4.7.30 y 5.7.30 | DKIM no pasó |
| 4.7.31 | Falta el registro DMARC o no tiene política |
| 4.7.32 | El dominio From no está alineado con SPF ni con DKIM |
| 4.7.23 y 5.7.25 | Problemas con el registro PTR |

Google usa los códigos 4.x para los límites temporales de envío y los códigos 5.x para los bloqueos permanentes de entrega. Cuando tus campañas reboten, no adivines qué falló a partir de tu panel de marketing. Revisa los encabezados originales del rechazo del servidor, como explicamos en nuestra guía para [leer los mensajes de rebote](/blog/550-5-7-1-error).

## SPF: qué servidores pueden enviar en nombre de tu dominio

Sender Policy Framework, estandarizado en la RFC 7208, verifica el remitente de sobre de un mensaje entrante. El remitente de sobre es la dirección Return-Path o MAIL FROM que usan los servidores de correo para devolver los rebotes. SPF también puede evaluar el nombre del servidor que se declara en el saludo inicial HELO o EHLO. SPF solo revisa el remitente de sobre e ignora la dirección From visible que la gente ve en su bandeja de entrada. Por eso SPF por sí solo no puede impedir que un atacante suplante el nombre de tu marca.

Un [registro SPF](/glossary/spf) está en el DNS como un único registro TXT. Indica a los servidores de destino qué direcciones IP, qué servidores MX y qué plataformas externas pueden enviar correo en nombre de tu dominio. Un registro típico tiene este aspecto:

```text
v=spf1 include:_spf.google.com include:spf.your-esp.example ~all
```

Todo registro empieza por `v=spf1`. La instrucción `include:_spf.google.com` indica a los servidores de destino que consulten el registro SPF de Google y autoricen las direcciones IP que contiene. El segundo include da permiso de envío a los servidores de tu plataforma de marketing o de tu servicio de correo transaccional.

La directiva final indica a los receptores cómo tratar a los remitentes que no están en la lista. El calificador softfail, escrito como `~all`, indica que los servidores no listados probablemente no están autorizados, pero sugiere a los receptores que acepten el mensaje y le apliquen el filtro de spam. El calificador fail, escrito como `-all`, marca los servidores no listados como un fallo duro, y algunos receptores rechazan ese correo directamente. Los remitentes que revisan configuraciones complejas suelen empezar con `~all`, para que el correo legítimo de la empresa no se pierda por accidente.

La RFC 7208 fija dos límites estrictos que no puedes saltarte. Primero, un dominio solo puede publicar un registro SPF. Publicar dos registros produce un permerror, y eso invalida SPF para todo tu correo saliente. Segundo, SPF limita las evaluaciones a un máximo de 10 consultas DNS entre `include`, `a`, `mx`, `ptr`, `exists` y `redirect`. Si resolver tu registro necesita una undécima consulta, los servidores de destino devuelven un permerror. El reenvío también rompe SPF: cuando un destinatario reenvía tu mensaje, la IP del servidor que reenvía no coincide con tu registro, y SPF falla.

## DKIM: una firma que demuestra que el mensaje no cambió

DKIM, definido en la RFC 6376, trabaja sobre el propio mensaje y no sobre el servidor. Cuando tu servidor prepara un mensaje para enviarlo, crea un hash criptográfico de algunos encabezados y del cuerpo. Firma ese hash con una clave privada y escribe el resultado en un encabezado `DKIM-Signature`. El encabezado lleva dos valores principales: el dominio que firma, en la etiqueta `d=`, y el selector, en la etiqueta `s=`. DKIM solo dice si la firma es válida. Decidir qué hacer ante un fallo es tarea de DMARC.

Cuando llega el mensaje, el receptor lee el selector y el dominio del encabezado, consulta en el DNS la clave pública en `s._domainkey.d` y comprueba la firma. DKIM firma los encabezados y el contenido. No cifra el correo. El cuerpo viaja como texto legible, pero la firma demuestra que nadie cambió el asunto, los datos del remitente ni el texto del cuerpo por el camino.

El reenvío de correo estándar mantiene intactos los encabezados y el cuerpo, así que una firma DKIM válida suele sobrevivir al reenvío. Eso hace que DKIM sea más fiable que SPF para el correo reenviado. Aun así, las listas de correo que añaden un pie de página o una etiqueta en el asunto pueden romper la firma. Gmail exige claves de al menos 1024 bits y recomienda 2048.

Un registro de clave pública DKIM en el DNS tiene esta forma:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

La etiqueta `v=DKIM1` indica la versión del protocolo, `k=rsa` identifica el algoritmo de la clave y `p=` contiene la clave pública codificada en base64. Si gestionas tu propio servidor de correo, puedes crear un par de claves con nuestro [generador de DKIM](/dkim-generator) (en inglés).

Un error frecuente ocurre cuando los remitentes confían en la firma por defecto de la plataforma. Muchas plataformas de correo firman el correo saliente con su propio dominio compartido por defecto (`d=shared-esp.example`). La firma pasa, pero el dominio que firma no coincide con tu dominio From visible, y la alineación DMARC falla. Tienes que configurar un DKIM personalizado en los ajustes de tu plataforma, para que la firma use tu dominio en la etiqueta `d=`.

## DMARC: la comprobación que une los dos con tu dirección From

Domain-based Message Authentication, Reporting, and Conformance une las comprobaciones del sobre y las firmas criptográficas con la dirección From visible que lee la gente. Alineación significa que el dominio que pasó SPF o DKIM es el mismo que el dominio de la línea From. DMARC pasa cuando SPF o DKIM pasa la autenticación Y también está alineado con el dominio del encabezado From. No hace falta que los dos estén alineados a la vez. Aun así, Google recomienda alinear los dos e indica que exigir ambos podría llegar más adelante.

Imagina que tu empresa envía una newsletter semanal. El mensaje muestra `From: news@example.com`. Para gestionar los rebotes, tu servicio de correo usa su propia dirección de sobre y pone como Return-Path `bounce-123@bounces.esp-mail.example`. Tu servicio también firma el mensaje con un DKIM personalizado que usa `d=example.com`.

Cuando el servidor de destino procesa este mensaje:
1. SPF comprueba el dominio del sobre `bounces.esp-mail.example` y pasa. Pero `esp-mail.example` no coincide con `example.com`, así que SPF no consigue la alineación DMARC.
2. DKIM comprueba la firma de `example.com`, verifica el hash criptográfico y coincide con el dominio del encabezado From, `example.com`. Así que DKIM pasa y consigue la alineación DMARC.
3. Como DKIM pasó y está alineado, el mensaje pasa DMARC.

DMARC ofrece dos modos de alineación, tanto para SPF como para DKIM. La alineación relajada es la opción por defecto y permite que los subdominios de tu dominio de organización se alineen con el dominio raíz. Por ejemplo, el correo enviado desde `news.example.com` se alinea con un dominio SPF o DKIM `example.com`. La alineación estricta, que se configura con `aspf=s` o `adkim=s`, exige que el dominio coincida exactamente y no admite diferencias de subdominio.

Tu registro DMARC publica una de tres políticas posibles:
- `p=none`: pone DMARC en modo de supervisión. Los receptores entregan el correo con normalidad mientras recogen informes de autenticación.
- `p=quarantine`: pide a los receptores que envíen a la carpeta de spam o de correo no deseado el correo que no pasa DMARC.
- `p=reject`: pide a los receptores que rechacen el correo que no pasa DMARC.

La etiqueta rua indica a los receptores a dónde enviar los informes agregados. Normalmente son archivos XML diarios que muestran qué direcciones IP enviaron correo con tu dominio. Un registro inicial estándar publicado en `_dmarc.example.com` tiene este aspecto:

```text
_dmarc.example.com TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

En mayo de 2026, la Internet Engineering Task Force publicó la RFC 9989 en el Standards Track, junto con la RFC 9990 para los informes agregados y la RFC 9991 para los informes de fallos. Estos nuevos estándares dejan obsoletas de forma oficial la RFC 7489 y la RFC 9091. Los registros que ya empiezan por `v=DMARC1` siguen funcionando, pero la especificación actualizada cambia varias etiquetas. La etiqueta de porcentaje (`pct`) y la etiqueta de formato de informe (`rf`) se retiran y ya no forman parte del estándar. La etiqueta de intervalo de informes (`ri`) pasa a ser histórica. Los remitentes que prueban la implantación de una política ahora usan la nueva etiqueta `t` para el modo de prueba. Y los administradores pueden definir políticas para subdominios que no existen con la etiqueta `np`. Si tu registro DNS actual tiene una etiqueta de porcentaje, prevé quitarla. Puedes crear un registro actualizado o limpiar las etiquetas antiguas con nuestro [generador de DMARC](/dmarc-generator) (en inglés).

## Cómo comprueba un mensaje el servidor de destino

Cuando un correo llega a un gateway de destino, el servidor hace las comprobaciones de autenticación en un orden concreto:

1. El servidor acepta la conexión de red, anota la dirección IP del remitente y evalúa el saludo HELO o EHLO.
2. El servidor extrae el dominio del Return-Path del sobre y consulta el DNS para comprobar los permisos SPF de la IP de envío.
3. El servidor localiza el encabezado `DKIM-Signature`, consulta en el DNS la clave pública en `selector._domainkey.domain` y vuelve a calcular los hashes criptográficos de los encabezados y del cuerpo.
4. El servidor revisa el encabezado From visible y consulta en el DNS un registro de política DMARC en `_dmarc.domain`.
5. El servidor evalúa la alineación de dominio. Comprueba si el dominio SPF autenticado o el dominio DKIM autenticado coincide con el dominio From visible.
6. El servidor aplica la política DMARC publicada, none, quarantine o reject, según el resultado de la alineación.
7. Si pediste informes con rua, el servidor añade el resultado a su próximo informe agregado para ti.

En Gmail puedes ver los tres resultados con "Mostrar original" en cualquier mensaje.

## Dónde suelen fallar SPF, DKIM y DMARC

Publicar dos registros SPF es un error frecuente al añadir un servicio de correo nuevo. Un administrador puede seguir la documentación de configuración, añadir `v=spf1 include:sendgrid.net ~all` y publicar un segundo registro TXT junto a un registro de Google que ya existía. La RFC 7208 prohíbe tener varios registros SPF en un mismo dominio. Cuando los servidores de destino encuentran dos registros, se detienen con un permerror y SPF falla. Para arreglarlo, une todos los proveedores autorizados en una sola cadena: `v=spf1 include:_spf.google.com include:sendgrid.net ~all`.

Pasar del límite de 10 consultas provoca otro fallo de entrega que no se ve. Cada etiqueta `include`, `a`, `mx`, `ptr`, `exists` o `redirect` cuenta para este límite, y los includes que hay dentro de los registros de los proveedores también cuentan. Si tu registro necesita una undécima consulta, los servidores de destino devuelven un permerror automático. Para arreglarlo, elimina los registros de proveedores antiguos, usa herramientas que revisen las consultas o sustituye los includes por rangos `ip4` explícitos. Haz esto último solo con IP de envío que controlas y que no cambian.

Conectar un servicio de envío nuevo sin añadirlo al DNS deja tu correo saliente expuesto a los filtros de spam. Los equipos de ventas o de soporte suelen conectar programadores de citas, plataformas de atención al cliente o sistemas de facturación sin avisar a quien gestiona el DNS. Estos servidores nuevos no están en tu registro SPF y no firman con tus claves DKIM. Por eso sus mensajes no pasan la autenticación y terminan en la carpeta de spam. La solución es una regla sencilla: quien conecte una herramienta nueva debe avisar a quien gestiona el DNS. También conviene revisar tus informes DMARC para buscar remitentes que no reconoces.

Confiar en el DKIM que firma la plataforma rompe la alineación DMARC, aunque la firma sea válida a nivel criptográfico. Cuando un servicio de correo firma los mensajes con `d=platform-mail.example` y tu línea From muestra `From: support@yourcompany.example`, DKIM pasa las comprobaciones técnicas pero no se alinea con tu dominio. Para arreglarlo, abre los ajustes de tu plataforma, genera claves DKIM personalizadas para tu dominio y publica los registros del selector en tu panel de DNS.

El reenvío de mensajes rompe SPF de forma habitual cuando un destinatario reenvía el correo del trabajo a una bandeja personal. El servidor intermedio transmite el mensaje con su propia dirección IP, que no coincide con tu registro SPF. No puedes controlar el reenvío que configuran otros. Pero si tus mensajes tienen firmas DKIM válidas, sobreviven intactos al reenvío y cumplen los requisitos de DMARC en los saltos siguientes.

Enviar campañas masivas desde otra plataforma con una dirección From gratis `@gmail.com` hace que DMARC falle siempre. Las directrices para remitentes de Google advierten de forma explícita que suplantar direcciones de Gmail desde servidores externos perjudica la entregabilidad. Las plataformas externas no pueden generar firmas criptográficas válidas ni pasar SPF para el dominio de Google, así que los proveedores de correo rechazan ese correo o lo mandan a cuarentena. Los remitentes deben hacer siempre su outreach desde un dominio propio.

Dejar DMARC en `p=none` para siempre deja tu dominio expuesto a la suplantación. Una política de supervisión cumple el mínimo de Gmail y Microsoft, pero `p=none` indica a los servidores de destino que no tomen ninguna medida de protección cuando aparece correo suplantado. Con esa configuración, DMARC no detendrá a alguien que suplante tu dominio exacto. Revisa tus informes agregados diarios durante unas semanas y comprueba que todas las fuentes de envío legítimas están alineadas. Después sube tu política a `p=quarantine` y luego a `p=reject`.

## Lista de comprobación para configurar SPF, DKIM y DMARC

Sigue estos pasos en orden:

1. Haz una lista de todos los servicios internos, plataformas de marketing, servicios de soporte y herramientas transaccionales que envían correo con tu dominio.
2. Publica un único [registro SPF](/glossary/spf) que incluya los servidores de envío autorizados, con menos de 10 consultas en total. El [comprobador de SPF](/spf-checker) (en inglés) las cuenta por ti.
3. Activa la firma DKIM personalizada con tu propio dominio en cada plataforma de envío y publica en el DNS los registros del selector que correspondan.
4. Asegúrate de que tus direcciones IP de envío tienen un DNS directo válido y un [registro PTR](/glossary/ptr-record) que coincida en el DNS inverso.
5. Publica un primer [registro DMARC](/blog/what-is-a-dmarc-record) en `_dmarc` con `p=none` y un buzón `rua` activo para empezar a recibir informes XML agregados.
6. Registra tu dominio de envío en [Google Postmaster Tools](/glossary/postmaster-tools) para supervisar la reputación del dominio, los errores de entrega y la tasa de quejas de spam.
7. Revisa tus informes DMARC agregados durante unas semanas para comprobar que cada flujo de envío legítimo consigue la alineación SPF o DKIM.
8. Sube tu política DMARC de `p=none` a `p=quarantine`, comprueba que la entrega se mantiene estable y luego pasa tu política a `p=reject`.
9. Envía un mensaje de prueba a una cuenta personal de Gmail y abre "Mostrar original" para confirmar que SPF, DKIM y DMARC dicen PASS.

## Preguntas frecuentes

**¿DMARC necesita SPF y DKIM a la vez?**
No. DMARC exige que SPF o DKIM pase la autenticación y esté alineado con el dominio de tu encabezado From visible. Tener los dos protocolos activos en tu dominio te protege mejor cuando el reenvío rompe SPF, y Google recomienda configurar los dos para envíos de gran volumen. Pero un mensaje pasará DMARC aunque solo uno de los dos consiga una alineación válida.

**¿Cuál es la diferencia entre SPF y DMARC?**
SPF autoriza a direcciones IP concretas de servidores de correo a enviar correo para la dirección técnica del remitente de sobre, la del encabezado Return-Path. DMARC revisa la dirección From visible que la gente ve en su cliente de correo. Comprueba que SPF o DKIM está alineado con ese dominio visible, y dice a los servidores de destino si deben aceptar, poner en cuarentena o rechazar los mensajes que no pasan la validación.

**¿Necesito DMARC si envío menos de 5.000 correos al día?**
Gmail solo exige DMARC a los remitentes masivos, así que no te bloqueará por no tenerlo si envías poco volumen. Aun así, necesitas SPF o DKIM. Y vale la pena publicar un registro p=none con rua, porque los informes te muestran qué servicios envían como tu dominio. Eso incluye los que habías olvidado y a cualquiera que te esté suplantando.

**¿Puedo tener dos registros SPF?**
No. La RFC 7208 prohíbe publicar más de un registro SPF en un dominio. Si los servidores de destino encuentran varios registros SPF en el DNS, detienen la evaluación de inmediato con un permerror y tratan SPF como fallido. Debes unir todas las direcciones IP autorizadas y todos los includes de terceros en un solo registro que empiece por `v=spf1`.

**¿Cuál es la forma más sencilla de explicar DMARC?**
SPF comprueba que el servidor que envía el mensaje tiene permiso para enviar en nombre de tu dominio. DKIM comprueba una firma que demuestra que el mensaje no cambió. DMARC es la comprobación final: confirma que uno de esos dos pertenece al mismo dominio que la dirección From. Si ninguno pertenece, DMARC le dice al servidor de destino si debe entregar el mensaje igualmente, enviarlo a spam o rechazarlo.

Estos registros demuestran quién eres, pero no arreglan a quién envías, y el correo a direcciones muertas sigue rebotando. Nuestra guía sobre [cómo reducir la tasa de rebote](/blog/how-to-reduce-email-bounce-rate) explica esa parte, y puedes pasar tu lista por [Giggal.ai](/email-list-cleaning) (en inglés) antes del próximo envío.
