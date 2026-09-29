---
title: Soft bounce
description: Qué es un soft bounce, las causas habituales y sus códigos, cuánto tiempo reintentan las herramientas de envío y cuándo quitar una dirección que sigue haciendo soft bounce.
slug: soft-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: soft bounce
short: Un soft bounce es un correo que no se entregó esta vez por un problema temporal. La dirección es real. El buzón está lleno, el servidor está ocupado o el servidor te pidió que lo intentes más tarde.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Mira qué direcciones de tu lista son reales antes de enviar
---

## Qué es un soft bounce

Un soft bounce es un fallo de entrega temporal. El servidor receptor no entregó tu correo esta vez. Te permite intentarlo otra vez más tarde.

El estándar de correo RFC 5321 lo llama respuesta negativa transitoria. El código del mensaje de rebote empieza por 4. Ejemplo: `452 4.2.2`. Un código que empieza por 5 es un [hard bounce](/glossary/hard-bounce). Un hard bounce es permanente.

## Causas habituales

- **El buzón está lleno.** Gmail responde con `452 4.2.2 The recipient's inbox is out of storage space`. La persona tiene que borrar correos.
- **Demasiados correos demasiado rápido.** Gmail responde con `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Gmail responde con `421 4.7.28` cuando llegan demasiados correos desde tu dirección IP.
- **Greylisting.** El servidor rechaza el primer correo de un remitente que no conoce. Acepta el mismo correo en el segundo intento. Ver [greylisting](/glossary/greylisting).
- **El servidor está caído o lento.** Un código `421` significa que el servidor no está disponible. Un código `4.4.1` o `4.4.2` significa que la conexión falló o caducó.
- **El correo caducó.** Un código `4.4.7` significa que tu servidor lo intentó durante todo el periodo de reintentos y después paró. RFC 5321 dice que los servidores deberían intentarlo durante unos cuatro o cinco días.

## Qué hace tu herramienta de envío

Tu herramienta de envío reintenta los soft bounces automáticamente. Cada herramienta tiene sus propias reglas.

- SendGrid reintenta hasta 72 horas.
- HubSpot marca el correo como pendiente hasta 72 horas. Después registra un soft bounce.
- Mailchimp convierte una dirección en hard bounce después de 7 soft bounces si el contacto nunca ha abierto un correo. Si el contacto abrió un correo antes, el límite es de 15 soft bounces.

El mismo soft bounce puede tener nombres distintos en herramientas distintas. Lee el código del mensaje de rebote, no la etiqueta.

## Qué hacer con un soft bounce

Al principio, nada. Deja que tu herramienta de envío reintente. Un soft bounce es normal.

Quita una dirección que hace soft bounce en varios envíos seguidos. Un buzón que está lleno en cada envío durante seis semanas no está lleno. Nadie lo usa. El límite de 7 soft bounces de Mailchimp es una regla segura.

## Cómo lo gestiona un verificador

Un verificador se conecta al servidor de correo antes de que envíes. Si el servidor responde con un código 4xx, el verificador reintenta. Si la respuesta no cambia, el verificador marca la dirección como desconocida, no como válida. Desconocida significa que el buzón existe pero puede que no reciba correo. La guía [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) explica cada código y qué hacer con él.
