---
title: SMTP
description: Qué es SMTP, cómo viaja un correo de un servidor a otro paso a paso, qué es un servidor SMTP, qué puertos usa y qué significan sus respuestas de error.
slug: smtp
date: 2026-10-12
updated: 2026-10-12
keyword: que es smtp
short: SMTP es el conjunto de reglas que usan los servidores de correo para enviarse correos entre ellos. Cada vez que envías un correo, tu servidor usa SMTP para entregarlo al servidor del destinatario.
related: mta, mx-record, smtp-error-codes, esp, hard-bounce, greylisting
cta: Pregunta al servidor si la dirección existe antes de enviar
---

## ¿Qué es SMTP?

SMTP significa Simple Mail Transfer Protocol, en español protocolo simple de transferencia de correo. Un protocolo es un conjunto de reglas que dos máquinas siguen para hablar entre ellas. SMTP define cómo un servidor de correo entrega un correo a otro servidor. Un servidor es una computadora que está siempre encendida y conectada a internet para dar un servicio, en este caso enviar y recibir correo.

La versión actual de las reglas está en el estándar RFC 5321. Gmail, Outlook, Yahoo y casi todos los demás servicios de correo usan SMTP para enviar.

## Qué pasa cuando envías un correo, paso a paso

Ana tiene una cuenta de Gmail. Escribe a Ben, que trabaja en una empresa con el dominio empresa.com. La empresa de Ben usa Outlook para su correo. Un dominio es el nombre que va después de la @.

1. Ana pulsa Enviar en Gmail. Su correo llega al servidor SMTP de Gmail.
2. El servidor de Gmail lee la dirección de Ben y ve el dominio empresa.com.
3. Gmail busca el [registro MX](/glossary/mx-record) de empresa.com en el DNS. El DNS es el directorio público de internet que dice qué servidor atiende cada dominio. El registro MX dice qué servidor recibe el correo de ese dominio.
4. Gmail se conecta a ese servidor de Outlook. Los dos servidores empiezan una conversación SMTP.
5. El servidor de Outlook acepta el correo y lo guarda en el buzón de Ben.
6. Ben abre Outlook y lee el correo de Ana.

La conversación del paso 4 sigue siempre el mismo orden. Cada mensaje de un servidor recibe una respuesta con un código de tres cifras.

| Gmail dice | Outlook responde | Qué significa |
|---|---|---|
| `EHLO servidor.gmail.example` | `250` | Gmail se presenta. Outlook acepta la conexión. |
| `MAIL FROM:<ana@gmail.com>` | `250` | Gmail dice quién envía. Outlook lo acepta. |
| `RCPT TO:<ben@empresa.com>` | `250` | Gmail dice para quién es. Outlook confirma que el buzón existe. |
| `DATA` y después el correo | `250` | Gmail envía el texto del correo. Outlook lo guarda. |
| `QUIT` | `221` | Gmail cierra la conexión. |

Un código que empieza por 2 significa que todo fue bien.

## Qué es un servidor SMTP

Un servidor SMTP es el servidor que envía el correo. Recibe tu correo y lo entrega al servidor del destinatario.

Cada servicio de correo tiene el suyo. El servidor SMTP de Gmail para programas de correo es `smtp.gmail.com`. Si configuras tu cuenta de Gmail en un programa como Thunderbird o en la app de Correo de tu teléfono, escribes ese nombre en el campo "servidor de salida".

Las empresas que envían boletines y recibos usan el servidor SMTP de un [proveedor de servicios de correo](/glossary/esp), como SendGrid, Amazon SES o Brevo. La tienda conecta su web a ese servidor, y el proveedor entrega los correos.

## Los puertos SMTP: 25, 587 y 465

Un puerto es un número que indica qué servicio de un servidor quieres usar. SMTP usa tres puertos habituales:

| Puerto | Para qué se usa |
|---|---|
| 25 | De servidor a servidor. Es el que usa Gmail para entregar a Outlook en el ejemplo de arriba. |
| 587 | Para que una app o un programa de correo entregue tu correo a tu servidor SMTP. La conexión se cifra con STARTTLS después de empezar. |
| 465 | El mismo uso que el 587, pero la conexión va cifrada desde el primer momento. |

Cifrar significa convertir el contenido en un código que solo pueden leer los dos servidores de la conversación. Si configuras un programa de correo, normalmente usas el 587 o el 465. Muchos proveedores de internet bloquean el puerto 25 en las conexiones de casa para frenar el spam.

## SMTP frente a IMAP y POP3

SMTP solo sirve para enviar. Para leer tu correo se usan otros dos protocolos:

- **SMTP** lleva el correo desde el remitente hasta el servidor del destinatario.
- **IMAP** te deja leer el correo que está guardado en el servidor. Los cambios se ven en todos tus dispositivos. Si borras un correo en el teléfono, también desaparece en la computadora.
- **POP3** descarga el correo del servidor a un solo dispositivo. Muchas configuraciones lo borran del servidor después.

En el ejemplo, Gmail usa SMTP para entregar el correo a Ben. Ben usa IMAP, o la app de Outlook, para leerlo.

## Cuando SMTP dice que no

El servidor receptor no siempre acepta el correo. Si hay un problema, responde con un código de error en lugar de `250`. La primera cifra dice qué tipo de problema es:

- **Códigos 4xx: error temporal.** El servidor no puede aceptar el correo ahora. El servidor emisor lo vuelve a intentar más tarde. Ejemplo: el buzón está lleno, o el servidor usa [greylisting](/glossary/greylisting).
- **Códigos 5xx: error permanente.** El servidor no aceptará el correo, por muchas veces que lo intentes. Ejemplo: `550 5.1.1`, que significa que el buzón no existe.

Un error 5xx produce un [hard bounce](/glossary/hard-bounce). Un error 4xx que no se resuelve produce un [soft bounce](/glossary/soft-bounce). La lista de códigos y lo que significa cada uno está en [códigos de error SMTP](/glossary/smtp-error-codes).

## SMTP y verificación de correo

Un verificador usa la misma conversación SMTP, pero se detiene antes de enviar nada. Se conecta al servidor del destinatario, se presenta y escribe `RCPT TO` con la dirección que quieres comprobar. Si el servidor responde `250`, el buzón existe. Si responde `550 5.1.1`, no existe. Después escribe `QUIT` y cierra la conexión, sin llegar nunca al paso `DATA`.

Con el [validador de correo](/email-checker) compruebas una dirección de esta forma. Con el [validador de correos masivos](/bulk-email-verifier) compruebas una lista entera antes de una campaña. Así quitas antes de enviar las direcciones que harían hard bounce. La [verificación de correo](/) sirve para eso: menos rebotes en cada envío.
