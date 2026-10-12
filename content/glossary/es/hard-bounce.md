---
title: Hard bounce
description: Qué es un hard bounce, qué códigos significan hard bounce, los dos tipos de hard bounce y qué hacer con cada uno.
slug: hard-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: que es un hard bounce
short: ¿Qué es un hard bounce? Es un rebote duro: un correo que el servidor receptor rechazó de forma permanente. Si envías el mismo correo otra vez, vuelve a fallar.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Encuentra las direcciones que harían hard bounce antes de enviar
---

## ¿Qué es un hard bounce?

Un hard bounce es un correo que no se puede entregar, ni ahora ni más tarde. En español también se llama rebote duro. El servidor que debía recibirlo lo rechazó. Si lo envías de nuevo, lo rechazará otra vez.

Un servidor de correo es la computadora que recibe los correos de un dominio. Un dominio es la parte de la dirección que va después de la @. En ana@example.com, el dominio es example.com.

Cuando el servidor rechaza un correo, tu herramienta de envío recibe un aviso de rebote. Ese aviso lleva un código. El estándar de correo RFC 5321 llama a este rechazo respuesta negativa permanente. El código de un hard bounce empieza por 5. Ejemplo: `550 5.1.1`.

Un código que empieza por 4 es un [soft bounce](/glossary/soft-bounce). Un soft bounce es temporal. El servidor puede aceptar el correo más tarde.

## Un ejemplo sencillo

1. Carlos trabaja en una empresa y usa la dirección carlos@empresa.example.
2. En marzo, Carlos deja la empresa. El equipo de sistemas borra su buzón.
3. En abril, una tienda online envía su boletín a esa dirección.
4. El servidor de empresa.example busca el buzón de Carlos. No lo encuentra.
5. El servidor responde con el código `550 5.1.1`. Ese código significa que la cuenta no existe.
6. La herramienta de envío de la tienda marca la dirección como hard bounce.

Si la tienda envía otro boletín en mayo, pasará lo mismo. El buzón no va a volver. Por eso la tienda tiene que quitar la dirección de su lista.

## Los dos tipos de hard bounce

Los dos tipos aparecen como "hard bounce" en el informe de la campaña. Pero tienen causas distintas y soluciones distintas.

### Tipo 1: la dirección está mal

El buzón no existe, el dominio no existe o la dirección tiene una errata. Una dirección que se cerró cuando un empleado dejó la empresa también entra en este grupo, como la de Carlos.

Así responden dos proveedores grandes cuando el buzón no existe:

| Proveedor | Respuesta del servidor |
|---|---|
| Gmail | `550 5.1.1 The email account that you tried to reach does not exist` |
| Microsoft | `5.1.1 Bad destination mailbox address` |

**Ejemplo de errata:** alguien escribe lusi@example.com en lugar de luis@example.com. El buzón "lusi" no existe. El correo rebota con un código `5.1.1`.

### Tipo 2: tu correo está bloqueado

La dirección es real, pero el servidor no acepta correo tuyo. Estos códigos empiezan por `5.7`.

- El `550 5.7.26` de Gmail significa que tu dominio no está autenticado. Autenticar el dominio es publicar registros que demuestran que tus correos son tuyos.
- El `5.7.23` de Microsoft significa que tu correo no pasó la comprobación SPF. SPF es uno de esos registros. Lista los servidores que pueden enviar correo con tu dominio.

Tu herramienta de envío cuenta estos códigos como hard bounces porque empiezan por 5. Pero la dirección está bien. El problema está en la configuración de tu correo.

## Por qué importan los hard bounces

Los proveedores de correo cuentan cuántas veces envías a direcciones que no existen. Muchos hard bounces les dicen que tu lista no se ha comprobado.

Amazon SES, el servicio de envío de correo de Amazon, publica sus límites. Los mide con la tasa de rebote. La tasa de rebote es el porcentaje de tus correos que rebotan.

| Tasa de rebote | Qué hace Amazon SES |
|---|---|
| Menos del 2 por ciento | Es el nivel que recomienda |
| 5 por ciento | Pone la cuenta en revisión |
| 10 por ciento | Puede pausar la cuenta |

**Ejemplo con números inventados:** envías 1.000 correos y 50 hacen hard bounce. Tu tasa de rebote es del 5 por ciento. En Amazon SES, tu cuenta entraría en revisión.

## Qué hacer con un hard bounce

Primero lee el código del aviso de rebote. Después sigue estos pasos:

1. **Si el código es `5.1.1`, `5.1.2` u otro error de dirección, quita la dirección de tu lista ahora.** No le envíes más. Mailchimp quita estas direcciones de tu audiencia de forma automática. Amazon dice a los remitentes que las quiten "immediately", es decir, de inmediato.
2. **Si el código empieza por `5.7`, conserva la dirección.** La persona existe. Corrige tus registros SPF, DKIM y DMARC, o tu reputación de remitente. DKIM y DMARC son otros dos registros de autenticación.
3. **Después vuelve a enviar a la misma dirección.** Si la configuración ya está bien, el correo llega.

Un rebote duro con código `5.1.1` nunca se arregla solo. Un rebote con código `5.7` sí se arregla cuando corriges tu configuración.

La tabla completa de códigos y la acción para cada uno está en la guía [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Cómo lo gestiona un verificador

Un verificador hace la misma pregunta al servidor receptor, pero antes de enviar. El [validador de correo](/email-checker) se conecta al servidor de correo y pregunta si acepta correo para esa dirección exacta. Si el servidor responde `550 5.1.1`, el verificador marca la dirección como no válida. La quitas antes de la campaña, y como no se envió ningún correo, tu reputación no cambia. El [validador de correos masivos](/bulk-email-verifier) hace lo mismo con una lista entera. La [verificación de correo](/) no corrige un bloqueo `5.7`, porque ese problema está en tu configuración y no en la dirección.
