---
title: Google Postmaster Tools
description: Qué muestra Google Postmaster Tools sobre el correo que envías a Gmail, cómo configurarlo, los límites de tasa de spam que publica Google y qué no muestra.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-09-29
keyword: google postmaster tools
short: Google Postmaster Tools es un panel gratuito de Google. Muestra cómo valora Gmail tu dominio remitente. Informa de tu tasa de spam, reputación de dominio, reputación de IP, resultados de autenticación y errores de entrega para el correo enviado a usuarios de Gmail.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools informa de los problemas después de enviar. La verificación los evita
---

## Qué es Google Postmaster Tools

Google Postmaster Tools es un sitio web que Google ofrece a los remitentes de correo. Añades tu dominio y demuestras que es tuyo añadiendo un registro DNS. Después Google te muestra datos sobre el correo que tu dominio envía a direcciones de Gmail. Es gratuito. Es la única fuente oficial de información sobre cómo valora Gmail tu dominio.

Solo cubre Gmail. El correo enviado a Outlook.com, Yahoo o servidores de empresa no aparece. Microsoft tiene un servicio aparte para su red.

## Qué muestra

- **Tasa de spam.** El porcentaje de tu correo entregado que los usuarios de Gmail marcaron como spam. Las directrices para remitentes de Google se refieren a esta cifra.
- **Reputación de dominio y reputación de IP.** Una valoración para cada una: bad, low, medium o high. High significa que Gmail rara vez filtra tu correo. Bad significa que la mayoría de tu correo va a spam o se rechaza.
- **Autenticación.** El porcentaje de tu correo que pasa [SPF](/glossary/spf), [DKIM](/glossary/dkim) y [DMARC](/glossary/dmarc).
- **Cifrado.** El porcentaje de tu correo enviado con TLS.
- **Errores de entrega.** El porcentaje de tu correo que Gmail rechazó o retrasó, con el motivo.
- **Feedback loop.** Tasas de quejas por campaña, para remitentes grandes que usan la cabecera Feedback-ID.

## Los límites que publica Google

Las directrices para remitentes de Google dicen:

- Mantén la tasa de spam que muestra Postmaster Tools por debajo del 0,10 por ciento.
- Nunca llegues a una tasa de spam del 0,30 por ciento o más.
- Los remitentes de 5.000 o más mensajes al día deben tener SPF, DKIM y DMARC.
- El correo de marketing de esos remitentes debe tener baja en un clic.

Los remitentes que superan el 0,30 por ciento ven su correo filtrado o rechazado. Estos límites son pequeños. En 10.000 correos entregados, el 0,30 por ciento son 30 quejas.

## Qué no muestra

Postmaster Tools informa sobre el correo que se entregó. No puede mostrarte direcciones que no existen. Un correo a una dirección muerta se rechaza durante la conexión SMTP. Ese rechazo es un rebote. Los rebotes no forman parte de la tasa de spam. Una lista con muchas direcciones no válidas puede mostrar una tasa de spam baja mientras la tasa de rebote daña tu reputación.

Postmaster Tools también necesita volumen. Si tu dominio envía poco correo a Gmail, los gráficos quedan vacíos. Google no publica el volumen mínimo.

## Cómo encaja con la verificación

Postmaster Tools informa de los problemas después de enviar. La verificación quita las causas antes de enviar. Pasar una lista por un [comprobador de direcciones de correo](/email-checker) quita las direcciones que rebotan. También quita las direcciones desechables y de rol que causan quejas. Después de eso, Postmaster Tools tiene menos que informar. La guía sobre la [tasa de rebote de correo](/blog/how-to-reduce-email-bounce-rate) explica las dos partes.
