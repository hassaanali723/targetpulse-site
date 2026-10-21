---
title: Backscatter
description: Qué es el backscatter, por qué recibes mensajes de rebote por correos que nunca enviaste, si hackearon tu cuenta y cómo detenerlo en tu propio dominio.
slug: backscatter
date: 2026-10-22
updated: 2026-10-22
keyword: backscatter correo
short: El backscatter son los mensajes de rebote que recibes por correos que nunca enviaste. Un spammer puso tu dirección en el campo del remitente de sus correos. Cuando esos correos fallaron, los mensajes de rebote volvieron a ti.
related: email-spoofing, ndr, mailer-daemon, spf, dmarc, email-blacklist
cta: Mantén bajos tus propios rebotes con una lista limpia
---

## ¿Qué es el backscatter?

El backscatter son los mensajes de rebote que recibes por correos que nunca enviaste.

Empieza con spam. Un spammer envía miles de correos y escribe tu dirección en el campo del remitente. Muchos de esos correos van a direcciones que no existen. Los servidores receptores envían un mensaje de rebote a la dirección del remitente. Esa dirección es la tuya, así que los rebotes llegan a tu bandeja de entrada.

Un mensaje de rebote es el aviso automático que envía un servidor cuando un correo no se puede entregar. Su nombre formal es [informe de no entrega](/glossary/ndr).

## Un ejemplo sencillo

Así es como el backscatter llega a un pequeño negocio.

1. **Lena tiene una florería.** Su dirección es hello@flowers.example.
2. **Un spammer copia su dirección.** El spammer envía 10.000 correos falsos. Cada uno dice que viene de hello@flowers.example.
3. **Muchos correos fallan.** Cerca de un tercio va a direcciones que no existen.
4. **Algunos servidores aceptan primero y comprueban después.** Estos servidores reciben el correo y luego ven que ese buzón no existe.
5. **Los rebotes van a Lena.** Esos servidores envían los avisos de rebote a hello@flowers.example.
6. **La bandeja de Lena se llena.** Una mañana encuentra cientos de mensajes "No se puede entregar" por correos que nunca escribió.

Estas cifras son solo un ejemplo. El patrón es común.

## ¿Hackearon mi cuenta?

Normalmente no. Para enviar un correo con una dirección de remitente falsa no hace falta entrar a tu cuenta. Es como escribir la dirección de otra persona como remitente en un sobre. Nadie necesitó su llave para hacerlo.

Revisa tu carpeta Enviados. Si los correos no están ahí, tu cuenta no los envió. Si están ahí, cambia tu contraseña y activa la verificación en dos pasos.

## Por qué pasa

El backscatter pasa porque algunos servidores aceptan primero un correo y comprueban la dirección después. Cuando la comprobación falla, envían un rebote a la dirección del remitente. No pueden saber que la dirección del remitente era falsa.

Los servidores bien configurados comprueban la dirección mientras el otro servidor sigue conectado. Si la dirección no existe, rechazan el correo en ese momento. No se crea ningún mensaje de rebote, así que no le llega backscatter a nadie.

## Cómo detenerlo en tu dominio

No puedes impedir que los spammers escriban tu dirección. Sí puedes hacer que los servidores receptores rechacen sus correos falsos. Para eso necesitas tres registros en tu dominio.

| Registro | Qué hace |
|---|---|
| [SPF](/glossary/spf) | Lista los servidores que pueden enviar correo con tu dominio |
| [DKIM](/glossary/dkim) | Agrega una firma que demuestra que un correo de verdad salió de ti |
| [DMARC](/glossary/dmarc) | Dice a los servidores receptores qué hacer con los correos que fallan esas comprobaciones |

Empieza DMARC con `p=none` y lee los informes. Cuando solo pasen tus propios servicios, cambia a `p=quarantine` y después a `p=reject`. Con `p=reject`, los servidores rechazan los correos falsos en lugar de devolverte los rebotes.

Mientras tanto, puedes mover los mensajes de rebote a una carpeta con un filtro. No los respondas.

## Por qué les importa a quienes administran servidores

Si administras un servidor de correo, revisa cómo trata las direcciones desconocidas. Un servidor que acepta el correo y lo rebota después envía backscatter a personas inocentes. Algunas listas negras incluyen a los servidores que hacen esto, por ejemplo la lista de backscatterer.org. Estar en una lista negra puede impedir que tu propio correo se entregue.

## Cómo ayuda un verificador

La [verificación de correo](/) no detiene el backscatter, porque tú no enviaste esos correos. Te ayuda con los rebotes que sí causas tú. Quita las direcciones muertas de tu propia lista antes de enviar, así cada rebote en tu bandeja es uno que puedes explicar.
