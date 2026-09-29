---
title: Hard bounce
description: Qué es un hard bounce, qué códigos significan hard bounce, los dos tipos de hard bounce y qué hacer con cada uno.
slug: hard-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: que es un hard bounce
short: Un hard bounce es un correo que el servidor receptor rechazó de forma permanente. La dirección no existe, el dominio no existe o el servidor bloqueó tu correo. Si envías el mismo correo otra vez, vuelve a fallar.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Encuentra las direcciones que harían hard bounce antes de enviar
---

## Qué es un hard bounce

Un hard bounce es un fallo de entrega permanente. El servidor receptor rechazó tu correo y lo rechazará otra vez si lo reenvías.

El estándar de correo RFC 5321 lo llama respuesta negativa permanente. El código del mensaje de rebote empieza por 5. Ejemplo: `550 5.1.1`. Un código que empieza por 4 es un [soft bounce](/glossary/soft-bounce). Un soft bounce es temporal.

## Los dos tipos de hard bounce

Los dos tipos aparecen como "hard bounce" en el informe de la campaña. Tienen causas distintas y soluciones distintas.

**Tipo 1: la dirección está mal.** El buzón no existe, el dominio no existe o la dirección tiene una errata. Gmail responde con `550 5.1.1 The email account that you tried to reach does not exist`. Microsoft responde con `5.1.1 Bad destination mailbox address`. Una dirección que se cerró cuando un empleado dejó la empresa también entra en este grupo.

**Tipo 2: tu correo está bloqueado.** La dirección es real, pero el servidor no acepta correo tuyo. Estos códigos empiezan por `5.7`. El `550 5.7.26` de Gmail significa que tu dominio no está autenticado. El `5.7.23` de Microsoft significa que tu correo no pasó la comprobación SPF. Tu herramienta de envío cuenta estos códigos como hard bounces porque empiezan por 5. Pero la dirección está bien. El problema es la configuración de tu correo.

## Por qué importan los hard bounces

Los proveedores de correo cuentan cuántas veces envías a direcciones que no existen. Muchos hard bounces les dicen que tu lista no se ha comprobado. Amazon SES publica sus límites. Pone una cuenta en revisión cuando la tasa de rebote llega al 5 por ciento. Puede pausar la cuenta al 10 por ciento. Recomienda mantenerse por debajo del 2 por ciento.

## Qué hacer con un hard bounce

Si el código es `5.1.1`, `5.1.2` u otro error de dirección, quita la dirección de tu lista ahora. No le envíes más. Mailchimp quita estas direcciones de tu audiencia automáticamente. Amazon dice a los remitentes que las quiten "immediately", es decir, de inmediato.

Si el código empieza por `5.7`, conserva la dirección. Corrige tus registros SPF, DKIM y DMARC o tu reputación de remitente. Después vuelve a enviar a la misma dirección.

La tabla completa de códigos y la acción para cada uno está en la guía [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Cómo lo gestiona un verificador

Un verificador hace la misma pregunta al servidor receptor, pero antes de enviar. Un [comprobador de direcciones de correo](/email-checker) se conecta al servidor de correo y pregunta si acepta correo para esa dirección exacta. Si el servidor responde `550 5.1.1`, el verificador marca la dirección como no válida. La quitas antes de la campaña. No se envió ningún correo, así que tu reputación no cambia.
