---
title: Filtro de spam
description: Qué comprueba un filtro de spam antes de entregar, mover o rechazar tu correo, en qué se diferencia un rechazo de la carpeta de spam y los límites de Google.
slug: filtro-de-spam
date: 2026-09-29
updated: 2026-09-29
keyword: filtro de spam
short: Un filtro de spam es el sistema que usa un proveedor de correo para decidir si un correo entrante va a la bandeja de entrada, va a la carpeta de spam o se rechaza. Comprueba el remitente, el contenido del correo y cómo reaccionaron los destinatarios anteriores al correo de ese remitente.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Envía a direcciones reales y los filtros de spam tendrán menos en tu contra
---

## Qué hace un filtro de spam

Cada proveedor de correo tiene un filtro de spam. Gmail, Outlook.com y Yahoo tienen uno. Los servidores de correo de empresa detrás de una [pasarela de correo seguro](/glossary/secure-email-gateway) tienen uno. El filtro examina cada correo entrante y decide si lo entrega, lo mueve a la carpeta de spam o lo rechaza.

La decisión se toma en uno de dos momentos.

**Durante la conexión SMTP.** El servidor receptor puede rechazar el correo antes de aceptarlo. Recibes un rebote con un código `5.7.x`. Ejemplos: el `550 5.7.1` de Gmail para un bloqueo por política, o el `550 5.7.28` para una cantidad inusual de correo no deseado desde tu dirección IP. El correo nunca llega al buzón.

**Después de aceptar el correo.** El servidor acepta el correo y después lo pone en la bandeja de entrada, la pestaña de promociones o la carpeta de spam. No recibes ningún rebote. Las únicas señales son tasas de apertura más bajas y los datos de Google Postmaster Tools.

## Qué comprueba el filtro

Los proveedores no publican sus reglas exactas. Estos son los criterios conocidos:

- **Autenticación.** Si [SPF](/glossary/spf), [DKIM](/glossary/dkim) y [DMARC](/glossary/dmarc) pasan. Google y Microsoft ahora rechazan el correo masivo que no pasa estas comprobaciones.
- **Reputación.** El historial de envío de tu dominio y tu dirección IP. Ver [reputación de dominio](/glossary/domain-reputation) y [reputación de IP](/glossary/ip-reputation).
- **Quejas.** Con qué frecuencia los destinatarios pulsan "Marcar como spam". Las directrices de Google dicen que mantengas la tasa de quejas de Postmaster Tools por debajo del 0,10 por ciento y que nunca llegue al 0,30 por ciento.
- **Rebotes.** Con qué frecuencia envías a direcciones que no existen. Una lista con muchas direcciones muertas parece una lista comprada o extraída.
- **Interacción.** Si la gente abre tus correos, responde, los borra sin leer o los mueve a otra carpeta.
- **Contenido.** Enlaces, adjuntos, imágenes y patrones de texto que coinciden con spam conocido. El contenido pesa menos que antes. La reputación y la autenticación pesan más.

## Por qué se filtra a los remitentes

La mayor parte del filtrado no lo provocan las palabras del correo. Lo provoca la lista. Las direcciones muertas causan rebotes. Las personas que no pidieron tu correo causan quejas. Los dos problemas vienen de direcciones que nunca se comprobaron.

## Cómo ayuda un verificador

Un verificador no toca los filtros de spam. Quita las direcciones que causan rebotes y quejas. Pasa tu lista por un [comprobador de direcciones de correo](/email-checker) antes de enviar. Quita los buzones que ya no existen. También quita las direcciones desechables y las cuentas de rol como info@, que reciben más quejas. La guía sobre la [tasa de rebote de correo](/blog/how-to-reduce-email-bounce-rate) muestra qué tamaño suele tener esa parte de una lista.
