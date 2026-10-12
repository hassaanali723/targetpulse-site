---
title: Proveedor de servicios de correo (ESP)
description: Qué es un proveedor de servicios de correo electrónico o ESP, ejemplos como Mailchimp y SendGrid, en qué se diferencia de Gmail y qué hace por ti.
slug: proveedor-de-servicios-de-correo
date: 2026-10-12
updated: 2026-10-12
keyword: proveedor de email marketing
short: Un proveedor de servicios de correo, o ESP, es una empresa que envía correos por ti, como boletines, promociones o recibos. Mailchimp, Brevo y SendGrid son ejemplos. No es lo mismo que Gmail u Outlook, que son los servicios donde la gente lee su correo.
related: smtp, mta, deliverability, sender-reputation, bounce-rate, list-cleaning
cta: Verifica tu lista antes de subirla a tu ESP
---

## ¿Qué es un proveedor de servicios de correo?

Un proveedor de servicios de correo electrónico es una empresa que envía correos en tu nombre. En inglés se llama email service provider, y por eso se abrevia ESP. Las empresas lo usan para enviar boletines, promociones, recibos y avisos a muchas personas a la vez.

Tú escribes el correo y eliges a quién enviarlo. El ESP lo entrega desde sus propios servidores. Un servidor es una computadora conectada a internet que, en este caso, envía correo.

Cuando un ESP se usa sobre todo para campañas de marketing, mucha gente lo llama proveedor de email marketing.

## Un ejemplo: el boletín de una panadería

Una panadería tiene 3.000 clientes en su lista de correo. Cada mes quiere enviarles un boletín con los panes de temporada.

Si lo envía desde su cuenta normal de Gmail, tiene varios problemas. Gmail limita cuántos correos puede enviar una cuenta personal al día. No hay enlace de baja automático. Y no sabe quién abrió el correo ni qué direcciones rebotaron.

Por eso la panadería usa un ESP. El proceso es este:

1. La panadería sube su lista de 3.000 direcciones al ESP.
2. Diseña el boletín con el editor del ESP.
3. Pulsa Enviar. El ESP entrega los 3.000 correos desde sus servidores.
4. El ESP añade un enlace de baja a cada correo.
5. Al día siguiente, la panadería ve un informe con aperturas, clics, bajas y rebotes.

## Ejemplos de ESP

Estos son algunos ESP conocidos:

- **Mailchimp.** Muy usado por pequeñas empresas para boletines y campañas.
- **Brevo.** Ofrece campañas de marketing y correos transaccionales.
- **SendGrid.** Muy usado por desarrolladores para enviar correo desde una app o una web.
- **Amazon SES.** El servicio de envío de correo de Amazon Web Services. Se conecta por código o por [SMTP](/glossary/smtp).
- **Postmark.** Centrado en correos transaccionales, como recibos y restablecimientos de contraseña.

## ESP frente a proveedor de buzón

Esta es la diferencia que más confunde.

| | ESP | Proveedor de buzón |
|---|---|---|
| Qué hace | Envía correo en tu nombre a muchas personas | Guarda el correo de una persona y le deja leerlo y escribir |
| Ejemplos | Mailchimp, Brevo, SendGrid, Amazon SES, Postmark | Gmail, Outlook, Yahoo |
| Quién lo usa | Empresas que envían campañas o avisos | Cualquier persona con una dirección de correo |

En el ejemplo, la panadería usa un ESP para enviar. Sus clientes leen el boletín en Gmail u Outlook, que son sus proveedores de buzón. El ESP envía. El proveedor de buzón recibe y decide si el correo va a la bandeja de entrada o a spam.

## ESP de marketing y ESP transaccional

Hay dos tipos de correo, y muchos ESP se especializan en uno:

- **Correo de marketing.** Boletines, ofertas y anuncios. Se envía a una lista entera a la vez. Mailchimp es un ejemplo de ESP de marketing.
- **Correo transaccional.** Un recibo, un código de acceso o un aviso de envío. Se envía a una sola persona cuando hace algo, como comprar o pedir una contraseña nueva. Postmark y Amazon SES se usan mucho para esto.

Algunos ESP, como Brevo y SendGrid, ofrecen los dos tipos.

## Qué hace un ESP por ti

- **Servidores de envío.** El ESP mantiene los servidores y las direcciones IP desde donde sale tu correo. Una dirección IP es el número que identifica a un servidor en internet.
- **Enlaces de baja.** Añade un enlace para darse de baja y quita de la lista a quien lo pulsa.
- **Gestión de rebotes.** Lee las respuestas de error de los servidores y marca las direcciones que rebotan.
- **Informes.** Muestra aperturas, clics, bajas, rebotes y quejas de spam.
- **Autenticación.** Te da los registros [SPF](/glossary/spf) y [DKIM](/glossary/dkim) para tu dominio.

## Por qué a los ESP les importan tus rebotes

Un ESP envía correo de muchos clientes desde los mismos servidores. Si un cliente envía a muchas direcciones que no existen, la reputación de esos servidores baja. Eso afecta también a los demás clientes del ESP.

Por eso muchos ESP vigilan la [tasa de rebote](/glossary/bounce-rate) de cada cuenta. Si un cliente tiene demasiados rebotes, muchos ESP revisan la cuenta o pausan los envíos. Algunos publican sus límites en su documentación.

## Proveedores de servicios de correo y verificación de correo

Verifica tu lista antes de subirla a tu ESP, no después del primer envío. Con el [validador de correos masivos](/bulk-email-verifier) subes el archivo y recibes el resultado de cada dirección. Para una sola dirección, usa el [verificador de correo](/email-checker). La [verificación de correo](/) quita las direcciones que rebotarían, así que tu primera campaña en el ESP empieza con menos rebotes y menos riesgo para tu cuenta.
