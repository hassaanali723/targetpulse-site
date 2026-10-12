---
title: Mailer-Daemon
description: Qué es un mensaje de Mailer-Daemon, por qué lo recibes, cómo leer el código que contiene y qué hacer cuando recibes uno por un correo que no enviaste.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-10-12
keyword: mailer daemon
short: El Mailer-Daemon es la parte de un servidor de correo que envía mensajes automáticos. Casi siempre son avisos de rebote. Un mensaje del Mailer-Daemon significa que un correo que enviaste no se entregó.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Quita las direcciones que rebotan antes de enviar
---

## ¿Qué es un Mailer-Daemon?

El Mailer-Daemon es un programa de un servidor de correo. Su trabajo es avisarte cuando un correo tuyo no se pudo entregar.

Un servidor de correo es la computadora que envía y recibe los correos de un dominio. Un dominio es la parte de la dirección que va después de la @. Un daemon es un programa que funciona en segundo plano en un servidor, sin que nadie lo abra.

Cuando tu correo se rechaza, el Mailer-Daemon te envía un aviso. El remitente de ese aviso suele ser `MAILER-DAEMON@` seguido del dominio del servidor. A veces es `postmaster@`.

Ese aviso se llama [informe de no entrega](/glossary/ndr). Te dice qué dirección falló, cuándo falló y por qué. Un correo que vuelve así se llama rebote.

## Un ejemplo sencillo

1. Laura escribe a un cliente, jorge@example.com, para enviarle un presupuesto.
2. Se equivoca y escribe jorje@example.com.
3. El servidor de example.com busca el buzón "jorje". No existe.
4. El servidor rechaza el correo.
5. Unos segundos después, Laura recibe un correo de MAILER-DAEMON. El asunto dice algo como "Undelivered Mail Returned to Sender".
6. Dentro, el mensaje del Mailer-Daemon muestra la dirección jorje@example.com y el código `550 5.1.1`.

Laura corrige la errata y envía el presupuesto otra vez. Esta vez llega.

## Cómo leer el mensaje

La parte que importa del mensaje es el código. Busca un número de tres cifras y un número con puntos. Ejemplo: `550 5.1.1`.

| El código empieza por | Tipo de rebote | Qué significa | Qué hacer |
|---|---|---|---|
| **5** | [hard bounce](/glossary/hard-bounce) | La dirección no existe o el servidor bloqueó tu correo | No reenvíes hasta saber cuál de los dos casos es |
| **4** | [soft bounce](/glossary/soft-bounce) | El buzón está lleno o el servidor está ocupado | Nada. Tu servidor de correo reintenta solo |

El texto que va junto al código lo escribe el servidor que rechazó el correo. Dos ejemplos reales:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`. Significa que la cuenta de correo no existe.
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. La documentación de Microsoft dice que esto significa "the recipient's address doesn't exist", es decir, la dirección del destinatario no existe.

## Mensajes de Mailer-Daemon por correos que no enviaste

A veces recibes un aviso del Mailer-Daemon por un correo que nunca enviaste. Esto se llama [backscatter](/glossary/backscatter).

Así pasa, paso a paso:

1. Un spammer envía miles de correos.
2. En el campo De de esos correos pone tu dirección, sin tu permiso.
3. Muchos de esos correos van a direcciones que no existen y rebotan.
4. Los servidores envían los avisos de rebote a la dirección del campo De. Esa dirección es la tuya.
5. Tu bandeja de entrada se llena de mensajes de Mailer-Daemon.

Tu cuenta no ha sido hackeada. El spammer solo copió tu dirección. La solución está en tu dominio. Publica registros SPF, DKIM y DMARC. Son registros públicos que dicen qué servidores pueden enviar correo con tu dominio. Con ellos, los servidores receptores pueden rechazar los correos falsos en lugar de enviarte avisos de rebote.

## Por qué importa para los remitentes

Cada mensaje de Mailer-Daemon es un rebote. Los proveedores de correo cuentan cuántos de tus correos van a direcciones que no existen. Muchos avisos `5.1.1` les dicen que no has comprobado tu lista.

**Ejemplo:** una empresa envía un boletín a una lista vieja. Recibe cientos de mensajes de Mailer-Daemon con `5.1.1`. Cada uno es una dirección muerta. Si sigue enviando a esas direcciones, su reputación con los proveedores baja y más correos van a spam.

## Cómo ayuda un verificador

El [verificador de correo](/email-checker) pregunta al servidor receptor si acepta correo para una dirección. Lo hace antes de que envíes nada. El servidor devuelve el mismo código que el Mailer-Daemon te enviaría después. La diferencia es que no se envió ningún correo, así que tu reputación no cambia. Para una lista entera, usa el [validador de correos masivos](/bulk-email-verifier). La [verificación de correo](/) encuentra las direcciones que no existen antes de enviar, así recibes menos mensajes del Mailer-Daemon.
