---
title: Email spoofing (suplantación de correo)
description: Qué es el spoofing de correo, cómo funciona con un ejemplo real, cómo reconocer un correo suplantado, cómo proteger tu dominio y qué hacer si recibes uno.
slug: suplantacion-de-correo
date: 2026-10-12
updated: 2026-10-12
keyword: que es spoofing
short: El email spoofing, o suplantación de correo, es enviar un correo con una dirección de remitente falsa. El correo parece venir de otra persona o empresa, pero lo envió otra persona.
related: dmarc, spf, dkim, dmarc-alignment, bimi, return-path
cta: Comprueba direcciones antes de enviar y protege tu dominio con DMARC
---

## ¿Qué es el spoofing de correo?

El email spoofing, en español suplantación de correo, es enviar un correo con una dirección de remitente falsa. El campo De muestra una dirección que no es la del verdadero remitente. El lector cree que el correo viene de su banco, de su jefe o de una tienda conocida.

El objetivo suele ser que el lector haga algo. Puede ser pagar una factura, escribir una contraseña o abrir un archivo.

## Un ejemplo: el correo falso del director general

Carlos trabaja en el departamento de finanzas de una empresa con el dominio ejemplo.com. Un martes por la mañana recibe este correo:

- **De:** Marta Ruiz, directora general, marta.ruiz@ejemplo.com
- **Asunto:** Pago urgente hoy
- **Texto:** Carlos, necesito que pagues hoy esta factura a un proveedor nuevo. Estoy en una reunión y no puedo hablar. Te envío los datos bancarios.

El nombre y la dirección son los de su directora. Pero Marta no escribió el correo. Un estafador escribió la dirección de Marta en el campo De y lo envió desde su propio servidor. Un servidor es una computadora conectada a internet que envía o recibe correo. Si Carlos paga, el dinero va a la cuenta del estafador.

## Por qué es posible el spoofing

El correo se envía con [SMTP](/glossary/smtp), el conjunto de reglas que usan los servidores para entregarse correos. SMTP no comprueba si el remitente es quien dice ser. El campo De es texto que escribe quien envía. Cualquiera puede escribir cualquier dirección ahí, igual que puede escribir cualquier asunto.

Por eso se crearon tres comprobaciones que el servidor receptor hace por su cuenta:

- [SPF](/glossary/spf) comprueba si el servidor que envió el correo está autorizado por el dominio.
- [DKIM](/glossary/dkim) comprueba una firma digital que el dominio añade a cada correo.
- [DMARC](/glossary/dmarc) comprueba que SPF o DKIM pasen para el mismo dominio del campo De, y dice qué hacer si no pasan.

## Cómo reconocer un correo suplantado

Estas señales no prueban nada por sí solas, pero juntas deben hacerte dudar:

- **La dirección de respuesta es otra.** Pulsa Responder y mira a quién va la respuesta. Si el campo De dice ejemplo.com pero la respuesta va a otro dominio, desconfía. Esa dirección de respuesta se llama Reply-To.
- **Las comprobaciones fallan.** En Gmail, abre el menú de los tres puntos y elige "Mostrar original". Gmail muestra el resultado de SPF, DKIM y DMARC. Un FAIL en un correo de una empresa conocida es mala señal.
- **Pide dinero o contraseñas con prisa.** "Hoy", "urgente" y "no puedo hablar" son frases típicas.
- **Pide saltarse el proceso normal.** Un proveedor nuevo, una cuenta bancaria nueva o un pago sin la aprobación habitual.

## Cómo proteger tu dominio del spoofing

No puedes impedir que alguien escriba tu dirección en un correo. Sí puedes pedir a los servidores receptores que bloqueen esos correos. Sigue estos pasos:

1. Publica un registro SPF con todos los servidores que envían correo para tu dominio.
2. Activa DKIM con tu propio dominio en cada servicio de envío.
3. Publica un registro DMARC con `p=none` y lee los informes.
4. Cuando todos tus correos reales pasen, cambia a `p=quarantine` y después a `p=reject`.

Con `p=reject`, Gmail, Outlook y los demás servidores que siguen DMARC bloquean el correo falso con tu dominio. La guía [qué es un registro DMARC](/blog/what-is-a-dmarc-record) explica cada paso.

## Spoofing, phishing y dominios parecidos

Son tres cosas distintas que a menudo van juntas:

| Término | Qué es | Ejemplo |
|---|---|---|
| Spoofing | Usar la dirección exacta de otra persona en el campo De | marta.ruiz@ejemplo.com, enviado por un estafador |
| Phishing | Un correo que intenta engañarte para robar dinero o datos | "Tu cuenta se bloqueará. Escribe tu contraseña aquí" |
| Dominio parecido | Registrar un dominio casi igual al real | marta.ruiz@exemplo.com o marta.ruiz@ejemplo-pagos.com |

El phishing puede usar spoofing o un dominio parecido. DMARC frena el spoofing de tu dominio exacto. No frena un dominio parecido, porque ese dominio es de otra persona y puede tener su propio SPF, DKIM y DMARC.

## Qué hacer si recibes un correo suplantado

1. No respondas, no pulses los enlaces y no abras los archivos.
2. Confirma por otra vía. Llama a la persona a un número que ya conoces, no al que viene en el correo.
3. Usa la opción de tu servicio de correo para denunciar phishing o marcar como spam.
4. Si trabajas en una empresa, avisa al equipo de sistemas.
5. Si ya pagaste o escribiste una contraseña, avisa a tu banco o cambia la contraseña de inmediato.

## Email spoofing y verificación de correo

Un verificador no detecta el spoofing. El [verificador de correo](/email-checker) te dice si una dirección existe y puede recibir correo. No te dice quién envió un correo que ya recibiste. La dirección de Marta en el ejemplo existe, así que se verificaría como válida. Lo que sí hacen el [validador de correos masivos](/bulk-email-verifier) y la [verificación de correo](/) es quitar de tu lista las direcciones que no existen antes de enviar, para que tus correos reales reboten menos.
