---
title: Entregabilidad de correo
description: Qué es la entregabilidad de correo, en qué se diferencia de la entrega, qué la afecta, cómo medirla y los pasos para mejorarla.
slug: entregabilidad-de-correo
date: 2026-10-12
updated: 2026-10-12
keyword: entregabilidad
short: La entregabilidad de correo es la capacidad de tus correos de llegar a la bandeja de entrada. Un correo con buena entregabilidad no rebota, no se bloquea y no termina en la carpeta de spam.
related: inbox-placement, sender-reputation, bounce-rate, spam-filter, email-warmup, postmaster-tools
cta: Mejora tu entregabilidad empezando por la lista
---

## ¿Qué es la entregabilidad de correo?

La entregabilidad de correo dice cuántos de tus correos llegan a la bandeja de entrada del destinatario. No basta con que el correo llegue al servidor. Tiene que aparecer en la bandeja principal, donde la persona lo ve.

Un correo puede terminar en uno de tres sitios:

- **La bandeja de entrada.** La persona lo ve. Esto es buena entregabilidad.
- **La carpeta de spam.** El correo llegó, pero la persona probablemente no lo verá.
- **Ningún sitio.** El servidor receptor rechazó el correo. Recibes un rebote.

## Entrega y entregabilidad no son lo mismo

La entrega cuenta los correos que el servidor receptor aceptó. La entregabilidad cuenta los que llegaron a la bandeja de entrada. Un ejemplo con números inventados lo muestra.

Imagina que envías 1.000 correos. Estos son los resultados:

| Resultado | Correos |
|---|---|
| Enviados | 1.000 |
| Rebotados, porque la dirección no existe o el servidor los rechazó | 40 |
| Entregados, es decir, aceptados por el servidor | 960 |
| En la bandeja de entrada | 800 |
| En la carpeta de spam | 160 |

Tu herramienta de envío puede mostrar una tasa de entrega del 96 por ciento. Pero solo 800 de 1.000 correos llegaron a la bandeja de entrada. Eso es la entregabilidad, y en este ejemplo es más baja. La herramienta no te dice cuántos fueron a spam.

## Qué afecta a la entregabilidad

Los proveedores de correo, como Gmail, Outlook y Yahoo, no publican sus reglas exactas. Estos son los factores conocidos:

- **Autenticación.** Si tu dominio pasa [SPF](/glossary/spf), [DKIM](/glossary/dkim) y [DMARC](/glossary/dmarc). Son tres registros que demuestran que el correo es tuyo. Google y Microsoft los exigen a quien envía 5.000 o más correos al día a Gmail o a Outlook.com.
- **[Reputación del remitente](/glossary/sender-reputation).** El historial de envío de tu dominio y de tu dirección IP. Una dirección IP es el número que identifica a un servidor en internet.
- **Rebotes.** Cuántas veces envías a direcciones que no existen. Muchos rebotes indican que tu lista no se comprobó. Ver [tasa de rebote](/glossary/bounce-rate).
- **Quejas de spam.** Cuántas personas pulsan "Marcar como spam". Las directrices de Google piden mantener la tasa de spam por debajo del 0,10 por ciento y no llegar nunca al 0,30 por ciento.
- **Calidad de la lista.** Si las personas pidieron tu correo y si siguen abriéndolo. Una lista comprada contiene direcciones muertas y [spam traps](/glossary/spam-trap).
- **Contenido.** Enlaces acortados, texto en mayúsculas o frases agresivas. El contenido pesa menos que la reputación y la autenticación.

## Cómo medir la entregabilidad

Tu herramienta de envío no puede ver dentro del buzón del destinatario. Para medir la entregabilidad se usan dos métodos.

**Una prueba con lista semilla.** Una lista semilla, o [seed list](/glossary/seed-list), es un grupo de direcciones de prueba en Gmail, Outlook, Yahoo y otros proveedores. Envías tu campaña también a esas direcciones. Después miras en cada una si el correo llegó a la bandeja de entrada o a spam.

**Google Postmaster Tools.** Es una herramienta gratuita de Google. Muestra datos sobre el correo que tu dominio envía a Gmail, como la tasa de spam y los errores de entrega. Necesita un volumen mínimo de envío para mostrar datos. Ver [Google Postmaster Tools](/glossary/postmaster-tools).

## Cómo mejorar la entregabilidad, paso a paso

1. Configura SPF, DKIM y DMARC en tu dominio y en cada servicio que envía por ti.
2. Verifica tu lista antes de cada campaña grande y quita las direcciones que no existen.
3. Envía solo a personas que pidieron tu correo. No compres listas.
4. Pon un enlace de baja visible. Es mejor que alguien se dé de baja a que marque tu correo como spam.
5. Deja de enviar a personas que llevan muchos meses sin abrir tus correos.
6. Si tu dominio es nuevo, aumenta el volumen poco a poco. Esto se llama [calentamiento de correo](/glossary/email-warmup).
7. Revisa Google Postmaster Tools cada semana y actúa si la tasa de spam sube.

## Entregabilidad de correo y verificación de correo

La verificación ataca una parte concreta de la entregabilidad: los rebotes. Una dirección que no existe produce un hard bounce, y muchos hard bounces dañan tu reputación de remitente. El [verificador de correo](/email-checker) comprueba una dirección antes de enviar, y el [validador de correos masivos](/bulk-email-verifier) comprueba una lista entera. La [verificación de correo](/) no cambia tu contenido ni tu autenticación. Quita las direcciones muertas, que son la causa de rebote que tú controlas.
