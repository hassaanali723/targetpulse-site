---
title: Google Postmaster Tools
description: Qué muestra Google Postmaster Tools sobre el correo que envías a Gmail, cómo configurarlo, los límites de tasa de spam que publica Google y qué no muestra.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-10-12
keyword: google postmaster tools
short: Google Postmaster Tools es un panel gratuito de Google que muestra cómo valora Gmail tu dominio. Informa de tu tasa de spam, tu reputación, tus resultados de autenticación y tus errores de entrega en el correo que envías a usuarios de Gmail.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools informa de los problemas después de enviar. La verificación los evita
---

## ¿Qué es Google Postmaster Tools?

Google Postmaster Tools es un sitio web gratuito de Google para quienes envían correo. Muestra datos sobre el correo que tu dominio envía a direcciones de Gmail. Es la única fuente oficial de información sobre cómo valora Gmail tu dominio.

Un dominio es la parte de la dirección que va después de la @. En ventas@example.com, el dominio es example.com.

Para usarlo, añades tu dominio y demuestras que es tuyo. Lo demuestras añadiendo un registro DNS. El DNS es el directorio público de internet donde cada dominio guarda su configuración. Un registro es una entrada de ese directorio. Google te da un texto, tú lo publicas en tu DNS y Google comprueba que está ahí.

Solo cubre Gmail. El correo que envías a Outlook.com, a Yahoo o a servidores de empresa no aparece. Microsoft tiene un servicio aparte para su red.

## Un ejemplo sencillo

1. Una tienda online con el dominio tienda.example envía boletines a sus clientes. Muchos usan Gmail.
2. La tienda entra en Google Postmaster Tools y añade tienda.example.
3. Google le da un registro DNS. La tienda lo publica en su DNS.
4. Google confirma que el dominio es de la tienda.
5. Unos días después aparecen los primeros gráficos.
6. Un lunes, la tienda ve que su tasa de spam subió. Muchas personas marcaron como spam el boletín del viernes.
7. La tienda revisa ese boletín y a quién se envió.

Sin Postmaster Tools, la tienda solo vería que sus aperturas bajaron. No sabría por qué.

## Qué muestra

| Dato | Qué significa |
|---|---|
| **Tasa de spam** | El porcentaje de tu correo entregado que los usuarios de Gmail marcaron como spam. Las directrices para remitentes de Google se refieren a esta cifra |
| **Reputación de dominio y reputación de IP** | Una valoración para cada una: bad, low, medium o high. High significa que Gmail rara vez filtra tu correo. Bad significa que la mayoría de tu correo va a spam o se rechaza |
| **Autenticación** | El porcentaje de tu correo que pasa [SPF](/glossary/spf), [DKIM](/glossary/dkim) y [DMARC](/glossary/dmarc) |
| **Cifrado** | El porcentaje de tu correo enviado con TLS |
| **Errores de entrega** | El porcentaje de tu correo que Gmail rechazó o retrasó, con el motivo |
| **Feedback loop** | Tasas de quejas por campaña, para remitentes grandes que usan la cabecera Feedback-ID |

Algunas palabras de la tabla:

- **Dirección IP.** Es el número que identifica al servidor que envía tu correo.
- **SPF, DKIM y DMARC.** Son registros públicos que demuestran que el correo sale de tu dominio.
- **TLS.** Es un cifrado que protege el correo mientras viaja de un servidor a otro.
- **Cabecera.** Es una línea de información técnica que viaja con el correo. El lector normalmente no la ve.

## Los límites que publica Google

Las directrices para remitentes de Google dicen:

1. Mantén la tasa de spam que muestra Postmaster Tools por debajo del 0,10 por ciento.
2. Nunca llegues a una tasa de spam del 0,30 por ciento o más.
3. Los remitentes de 5.000 o más mensajes al día deben tener SPF, DKIM y DMARC.
4. El correo de marketing de esos remitentes debe permitir darse de baja con un clic.

Los remitentes que superan el 0,30 por ciento ven su correo filtrado o rechazado. Estos límites son pequeños. En 10.000 correos entregados, el 0,30 por ciento son 30 quejas.

## Qué no muestra

Postmaster Tools informa sobre el correo que se entregó. No puede mostrarte direcciones que no existen.

Así pasa con una dirección muerta:

1. Envías un correo a una dirección de Gmail que ya no existe.
2. Gmail lo rechaza durante la conexión SMTP. SMTP es el conjunto de reglas que usan los servidores para pasarse correos.
3. Ese rechazo es un rebote, es decir, un aviso de que el correo no se entregó.
4. Los rebotes no forman parte de la tasa de spam.

Por eso una lista con muchas direcciones no válidas puede mostrar una tasa de spam baja. Mientras tanto, la tasa de rebote daña tu reputación.

Postmaster Tools también necesita volumen. Si tu dominio envía poco correo a Gmail, los gráficos quedan vacíos. Google no publica el volumen mínimo.

## Cómo encaja con la verificación

Google Postmaster Tools informa de los problemas después de enviar. La [verificación de correo](/) quita las causas antes de enviar. El [verificador de correo](/email-checker) comprueba una dirección, y el [validador de correos masivos](/bulk-email-verifier) comprueba una lista entera. Los dos quitan las direcciones que rebotan, y también las direcciones desechables y de rol que causan quejas. Después de eso, Postmaster Tools tiene menos que informar. La guía sobre la [tasa de rebote de correo](/blog/how-to-reduce-email-bounce-rate) explica las dos partes.
