---
title: Filtro de spam
description: Qué comprueba un filtro de spam antes de entregar, mover o rechazar tu correo, en qué se diferencia un rechazo de la carpeta de spam y los límites de Google.
slug: filtro-de-spam
date: 2026-09-29
updated: 2026-10-12
keyword: filtro de spam
short: Un filtro de spam es el sistema que usa un proveedor de correo para decidir si un correo va a la bandeja de entrada, a la carpeta de spam o se rechaza. Comprueba quién envía, qué dice el correo y cómo reaccionaron otras personas al correo de ese remitente.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Envía a direcciones reales y los filtros de spam tendrán menos en tu contra
---

## ¿Qué es un filtro de spam?

Un filtro de spam es un programa que revisa cada correo que llega a un buzón. Decide si lo entrega, si lo mueve a la carpeta de spam o si lo rechaza.

Cada proveedor de correo tiene un filtro de spam. Gmail, Outlook.com y Yahoo tienen uno. Muchas empresas también tienen uno en su propio servidor de correo, detrás de una [pasarela de correo seguro](/glossary/secure-email-gateway). Un servidor de correo es la computadora que recibe los correos de un dominio. Una pasarela es un servidor que revisa el correo antes de entregarlo a la empresa.

La decisión se toma en uno de dos momentos.

**Durante la conexión SMTP.** SMTP es el conjunto de reglas que usan los servidores para pasarse correos. En este momento, el servidor receptor puede rechazar el correo antes de aceptarlo. Recibes un rebote con un código `5.7.x`. Un rebote es un aviso de que tu correo no se entregó. Dos ejemplos de Gmail:

- `550 5.7.1`: un bloqueo por política.
- `550 5.7.28`: una cantidad inusual de correo no deseado desde tu dirección IP. La dirección IP es el número que identifica al servidor que envía.

En los dos casos, el correo nunca llega al buzón.

**Después de aceptar el correo.** El servidor acepta el correo. Después lo pone en la bandeja de entrada, en la pestaña de promociones o en la carpeta de spam. No recibes ningún rebote. Las únicas señales son tasas de apertura más bajas y los datos de Google Postmaster Tools.

## Un ejemplo sencillo

Dos tiendas envían el mismo tipo de boletín a clientes de Gmail.

| | Tienda A | Tienda B |
|---|---|---|
| Origen de la lista | Personas que se registraron en su web | Una lista comprada |
| Autenticación | SPF, DKIM y DMARC pasan | Sin DMARC |
| Rebotes | Pocos | Muchos, por direcciones muertas |
| Quejas | Pocas | Muchas personas pulsan "Marcar como spam" |
| Resultado | El filtro de spam entrega en la bandeja de entrada | El filtro manda el correo a spam o lo rechaza |

El texto de los dos boletines es casi igual. El filtro de spam trata distinto a cada tienda por su lista y su historial.

## Qué comprueba el filtro

Los proveedores no publican sus reglas exactas. Estos son los criterios conocidos:

- **Autenticación.** Si [SPF](/glossary/spf), [DKIM](/glossary/dkim) y [DMARC](/glossary/dmarc) pasan. Son registros públicos que demuestran que el correo sale de tu dominio. Google y Microsoft ahora rechazan el correo masivo que no pasa estas comprobaciones.
- **Reputación.** El historial de envío de tu dominio y de tu dirección IP. Ver [reputación de dominio](/glossary/domain-reputation) y [reputación de IP](/glossary/ip-reputation).
- **Quejas.** Con qué frecuencia los destinatarios pulsan "Marcar como spam". Las directrices de Google dicen que mantengas la tasa de quejas de Postmaster Tools por debajo del 0,10 por ciento. También dicen que nunca llegue al 0,30 por ciento.
- **Rebotes.** Con qué frecuencia envías a direcciones que no existen. Una lista con muchas direcciones muertas parece una lista comprada o extraída de sitios web.
- **Interacción.** Si la gente abre tus correos, responde, los borra sin leer o los mueve a otra carpeta.
- **Contenido.** Enlaces, archivos adjuntos, imágenes y textos que se parecen a spam conocido. El contenido pesa menos que antes. La reputación y la autenticación pesan más.

**Ejemplo con números inventados:** envías 10.000 correos y 10 personas los marcan como spam. Tu tasa de quejas es del 0,10 por ciento. Eso ya está en el límite de Google.

## Por qué se filtra a los remitentes

La mayor parte del filtrado no lo provocan las palabras del correo. Lo provoca la lista.

1. Las direcciones muertas causan rebotes.
2. Las personas que no pidieron tu correo causan quejas.
3. Los rebotes y las quejas bajan tu reputación.
4. Con una reputación baja, el filtro de spam manda más correos tuyos a spam.

Los dos problemas del inicio vienen de direcciones que nunca se comprobaron.

## Cómo ayuda un verificador

Un verificador no cambia cómo funciona un filtro de spam. Quita de tu lista las direcciones que causan rebotes y quejas. Pasa una dirección por el [verificador de correo](/email-checker), o una lista entera por el [validador de correos masivos](/bulk-email-verifier), antes de enviar. La [verificación de correo](/) quita los buzones que ya no existen. También quita las direcciones desechables y las cuentas de rol como info@, que reciben más quejas. La guía sobre la [tasa de rebote de correo](/blog/how-to-reduce-email-bounce-rate) muestra qué tamaño suele tener esa parte de una lista.
