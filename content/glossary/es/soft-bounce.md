---
title: Soft bounce
description: Qué es un soft bounce, sus causas habituales y sus códigos, cuánto reintentan las herramientas de envío y cuándo quitar una dirección de tu lista.
slug: soft-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: soft bounce
short: Un soft bounce es un correo que no se entregó esta vez por un problema temporal. La dirección es real, pero el buzón está lleno, el servidor está ocupado o el servidor pidió que lo intentes más tarde.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Mira qué direcciones de tu lista son reales antes de enviar
---

## ¿Qué es un soft bounce?

Un soft bounce es un correo que no se pudo entregar esta vez. En español también se llama rebote suave. La dirección existe, pero algo impidió la entrega en ese momento. El servidor que debía recibir el correo te permite intentarlo otra vez más tarde.

Un servidor de correo es la computadora que recibe los correos de un dominio. Un dominio es la parte de la dirección que va después de la @. En ana@example.com, el dominio es example.com.

Cuando el servidor no acepta un correo, tu herramienta de envío recibe un aviso de rebote con un código. El estándar de correo RFC 5321 llama a este caso respuesta negativa transitoria. Transitoria significa que dura poco. El código de un soft bounce empieza por 4. Ejemplo: `452 4.2.2`.

Un código que empieza por 5 es un [hard bounce](/glossary/hard-bounce). Un hard bounce es permanente. La dirección no existe o el servidor bloqueó tu correo.

## Un ejemplo sencillo

1. Marta tiene la dirección marta@example.com. Hace meses que no borra correos.
2. Su buzón llega al límite de espacio.
3. Una tienda le envía un correo con su factura.
4. El servidor de Marta responde con el código `452 4.2.2`. Significa que el buzón está lleno.
5. La herramienta de envío de la tienda registra un soft bounce. Guarda el correo y lo intenta otra vez más tarde.
6. Al día siguiente, Marta borra correos viejos y libera espacio.
7. El siguiente intento funciona. La factura llega.

La dirección de Marta nunca dejó de existir. Solo falló la entrega durante un tiempo.

## Causas habituales

| Causa | Código de ejemplo | Qué significa |
|---|---|---|
| El buzón está lleno | `452 4.2.2` | La persona tiene que borrar correos |
| Demasiados correos demasiado rápido | `450 4.2.1` o `421 4.7.28` | El servidor pide que envíes más despacio |
| Greylisting | `450` o `451` | El servidor rechaza el primer intento de un remitente que no conoce |
| El servidor está caído o lento | `421`, `4.4.1` o `4.4.2` | El servidor no está disponible o la conexión falló |
| El correo caducó | `4.4.7` | Tu servidor dejó de intentarlo |

Cada causa explicada con más detalle:

- **El buzón está lleno.** Gmail responde con `452 4.2.2 The recipient's inbox is out of storage space`. Es el caso de Marta.
- **Demasiados correos demasiado rápido.** Gmail responde con `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Gmail responde con `421 4.7.28` cuando llegan demasiados correos desde tu dirección IP. La dirección IP es el número que identifica al servidor que envía.
- **Greylisting.** El servidor rechaza el primer correo de un remitente que no conoce. Acepta el mismo correo en el segundo intento. Ver [greylisting](/glossary/greylisting).
- **El servidor está caído o lento.** Un código `421` significa que el servidor no está disponible. Un código `4.4.1` o `4.4.2` significa que la conexión falló o tardó demasiado.
- **El correo caducó.** Un código `4.4.7` significa que tu servidor lo intentó durante todo el periodo de reintentos y después paró. RFC 5321 dice que los servidores deberían intentarlo durante unos cuatro o cinco días.

## Qué hace tu herramienta de envío

Tu herramienta de envío reintenta los soft bounces de forma automática. Cada herramienta tiene sus propias reglas:

- SendGrid reintenta hasta 72 horas.
- HubSpot marca el correo como pendiente hasta 72 horas. Después registra un soft bounce.
- Mailchimp convierte una dirección en hard bounce después de 7 soft bounces si el contacto nunca abrió un correo. Si el contacto abrió un correo antes, el límite es de 15 soft bounces.

El mismo soft bounce puede tener nombres distintos en herramientas distintas. Lee el código del mensaje de rebote, no la etiqueta.

## Qué hacer con un soft bounce

Al principio, nada. Deja que tu herramienta de envío reintente. Un soft bounce aislado es normal.

Quita una dirección que hace soft bounce en varios envíos seguidos. Mira este ejemplo:

1. Envías un boletín cada semana a pablo@example.com.
2. Cada semana recibes un `452 4.2.2`, buzón lleno.
3. Esto pasa durante seis semanas seguidas.

Un buzón que está lleno en cada envío durante seis semanas no está lleno. Nadie lo usa. Quita la dirección. El límite de 7 soft bounces de Mailchimp es una regla segura.

## Cómo lo gestiona un verificador

Un verificador se conecta al servidor de correo antes de que envíes. Si el servidor responde con un código 4xx, el verificador reintenta. Si la respuesta no cambia, el verificador marca la dirección como desconocida, no como válida. Desconocida significa que el buzón existe, pero puede que no reciba correo.

El [validador de correo](/email-checker) hace esta comprobación con una dirección. El [validador de correos masivos](/bulk-email-verifier) la hace con una lista entera. La [verificación de correo](/) no vacía buzones llenos, pero sí encuentra las direcciones que no existen antes de enviar. La guía [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) explica cada código y qué hacer con él.
