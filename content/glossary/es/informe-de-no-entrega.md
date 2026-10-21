---
title: Informe de no entrega (NDR)
description: Qué es un informe de no entrega, quién lo envía, cómo leer el código y las partes que contiene y qué hacer cuando recibes uno. Con un ejemplo sencillo.
slug: informe-de-no-entrega
date: 2026-10-22
updated: 2026-10-22
keyword: informe de no entrega
short: Un informe de no entrega, o NDR, es un correo automático que te dice que un mensaje que enviaste no se entregó. Indica la dirección que falló y da un código que explica por qué. La mayoría de la gente lo llama mensaje de rebote.
related: mailer-daemon, hard-bounce, soft-bounce, backscatter, return-path, smtp
cta: Quita las direcciones que te enviarían un NDR
---

## ¿Qué es un informe de no entrega?

Un informe de no entrega, o NDR (non-delivery report), es un correo automático que te dice que un mensaje no se entregó. Llega entre unos segundos y unas horas después de enviar.

La mayoría de la gente lo llama mensaje de rebote. El nombre técnico en los estándares de correo es delivery status notification, o DSN, es decir, notificación del estado de entrega. Los tres nombres significan lo mismo.

Un NDR suele venir de una dirección como `MAILER-DAEMON@` o `postmaster@`. Son remitentes automáticos de un servidor de correo. Nadie escribe estos mensajes a mano. Los crea un programa llamado [Mailer-Daemon](/glossary/mailer-daemon).

## Un ejemplo sencillo

Así es como te llega un NDR.

1. **Ana envía una factura.** Ana es contadora. Envía por correo una factura a un cliente, mark@oldfirm.example.
2. **La dirección ya no existe.** Mark dejó esa empresa el año pasado. Su buzón se eliminó.
3. **El servidor lo rechaza.** El servidor de correo de oldfirm.example no tiene ningún buzón para Mark. Rechaza el correo.
4. **Llega el NDR.** Un minuto después, Ana recibe un correo con un asunto como "No se puede entregar" o "Delivery Status Notification (Failure)".
5. **Ana lee el código.** Dentro encuentra `550 5.1.1`. Este código significa que la dirección no existe.
6. **Ana lo corrige.** Le pide al cliente un nuevo contacto y envía la factura ahí.

El NDR no causó el problema. Solo le avisó a Ana.

## Qué contiene un NDR

La mayoría de los NDR tienen las mismas partes, aunque se vean distintos en cada programa de correo.

| Parte | Qué muestra |
|---|---|
| **Dirección que falló** | La dirección que no pudo recibir tu correo |
| **Código de error** | Un código corto, por ejemplo `550 5.1.1`, que explica el problema |
| **Mensaje del servidor** | Una frase del servidor receptor, por ejemplo "user unknown", es decir, usuario desconocido |
| **Tu correo original** | Muchas veces va adjunto, para que veas qué falló |

## Cómo leer el código

El primer dígito del código te dice el tipo de problema.

| Primer dígito | Tipo | Qué significa | Qué hacer |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | El fallo es permanente. Puede que la dirección no exista, o que el servidor te haya bloqueado. | No vuelvas a enviar a esa dirección hasta saber cuál de los dos casos es. |
| **4** | [Soft bounce](/glossary/soft-bounce) | El fallo es temporal. Puede que el buzón esté lleno o que el servidor esté ocupado. | Espera. Tu servidor de correo lo vuelve a intentar solo. |

Dos ejemplos comunes:

- `550 5.1.1` significa que la dirección no existe. Quítala de tu lista.
- `452 4.2.2` significa que el buzón está lleno. Inténtalo más tarde.

## Cuando recibes un NDR por un correo que no enviaste

A veces llega un NDR por un correo que nunca escribiste. Esto se llama [backscatter](/glossary/backscatter). Un spammer puso tu dirección en el campo del remitente, el correo falló y el NDR te llegó a ti. Normalmente tu cuenta no fue hackeada. Si publicas registros SPF, DKIM y DMARC para tu dominio, los servidores receptores pueden rechazar los correos falsos en su lugar.

## Por qué los NDR importan a los remitentes

Cada NDR de una dirección muerta cuenta en tu contra. Los proveedores de correo como Google y Microsoft vigilan cuántos de tus correos van a direcciones que no existen. Muchos NDR con `5.1.1` les dicen que tu lista es vieja.

**Ejemplo:** una tienda envía una oferta a 5.000 contactos viejos. Si vuelven 400 NDR, eso es el 8% de la lista. Muchas plataformas de envío revisan o pausan las cuentas con cifras así. Estas cifras son solo un ejemplo.

## Cómo ayuda un verificador

El [verificador de correo](/email-checker) pregunta al servidor receptor por una dirección antes de que envíes. El servidor da la misma respuesta que pondría en un NDR. La diferencia es que no se envió ningún correo, así que nada rebota y tu reputación no se ve afectada.
