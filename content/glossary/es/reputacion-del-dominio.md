---
title: Reputación del dominio (domain reputation)
description: Qué es la reputación del dominio en el correo, por qué te sigue aunque cambies de proveedor, qué la daña, cómo comprobarla y cómo protegerla.
slug: reputacion-del-dominio
date: 2026-10-12
updated: 2026-10-12
keyword: domain reputation
short: La reputación del dominio es la confianza que los proveedores de correo tienen en tu dominio de envío, la parte de tu dirección que va después de la @. Si es buena, tus correos llegan a la bandeja de entrada. Si es mala, van a spam o se rechazan, desde cualquier servidor que los envíe.
related: ip-reputation, sender-reputation, postmaster-tools, dmarc, bounce-rate, email-warmup
cta: Protege la reputación de tu dominio con una lista verificada
---

## ¿Qué es la reputación del dominio?

Un dominio es el nombre que va después de la @ en una dirección de correo. En ventas@ejemplo.com, el dominio es ejemplo.com.

Gmail, Outlook, Yahoo y los demás proveedores de correo guardan el historial de cada dominio que les envía correo. Miran cuántos correos rebotan, cuántos se marcan como spam y si el dominio pasa las comprobaciones de autenticación. Con ese historial deciden cuánto confían en el dominio. Esa confianza es la reputación del dominio, en inglés domain reputation.

## Un ejemplo: cambiar de proveedor de correo

Una academia de idiomas usa el dominio ejemplo.com. Durante dos años envía su boletín con un [proveedor de servicios de correo](/glossary/esp). Sus envíos son limpios, así que su dominio tiene buena reputación.

Un día la academia cambia a otro proveedor. Esto es lo que pasa:

1. El nuevo proveedor envía el correo desde otros servidores, con otras direcciones IP. Una dirección IP es el número que identifica a un servidor en internet.
2. La reputación de las IP antiguas se queda con el proveedor antiguo.
3. El dominio sigue siendo ejemplo.com. Gmail reconoce el dominio y su historial.
4. El boletín puede seguir llegando a la bandeja de entrada con el nuevo proveedor, porque el historial del dominio es bueno.

Lo mismo pasa al revés. Si la academia hubiera enviado mucho spam con su dominio, cambiar de proveedor no borraría ese historial. La mala reputación iría con el dominio.

## Reputación del dominio frente a reputación IP

| | Reputación del dominio | [Reputación IP](/glossary/ip-reputation) |
|---|---|---|
| A qué va unida | Al nombre después de la @ | Al servidor que envía el correo |
| Si cambias de proveedor | Se queda contigo | Cambia, porque cambian los servidores |
| Quién la comparte | Solo tú y quien envía con tu dominio | En una IP compartida, todos sus remitentes |
| Cómo se protege | Autenticación, listas limpias, pocas quejas | Volumen estable, listas limpias, pocas quejas |

Las dos forman parte de tu [reputación del remitente](/glossary/sender-reputation). Los proveedores de correo tienen en cuenta las dos.

## Qué daña la reputación del dominio

- **Rebotes.** Enviar a muchas direcciones que no existen indica que la lista no se comprobó.
- **Quejas de spam.** Cada vez que alguien pulsa "Marcar como spam", el proveedor lo cuenta contra tu dominio.
- **Spam traps.** Una [spam trap](/glossary/spam-trap) es una dirección que solo sirve para detectar remitentes con listas malas. Enviar a una es una mala señal.
- **Falta de autenticación.** Sin [SPF](/glossary/spf), [DKIM](/glossary/dkim) y [DMARC](/glossary/dmarc), el proveedor no puede confirmar que el correo es tuyo.
- **Saltos de volumen.** Un dominio que envía poco y de repente envía miles de correos parece sospechoso.

## Cómo comprobar la reputación del dominio

Ningún proveedor publica la puntuación exacta de tu dominio. Hay formas de ver señales.

**Google Postmaster Tools.** Es una herramienta gratuita de Google para el correo que tu dominio envía a Gmail. Tienes que demostrar que el dominio es tuyo con un registro en el DNS. El DNS es el directorio público donde cada dominio guarda su configuración. Postmaster Tools muestra datos como la tasa de spam, los resultados de autenticación y los errores de entrega. Necesita un volumen mínimo de envío para mostrar datos. Ver [Google Postmaster Tools](/glossary/postmaster-tools).

**Listas negras de dominios.** Algunas listas negras incluyen dominios, no solo direcciones IP. Herramientas como MXToolbox comprueban si tu dominio aparece en ellas.

**Tus propios informes.** Si las aperturas bajan de golpe en Gmail o en Outlook, puede ser que tu correo esté yendo a spam allí.

## Cómo proteger la reputación del dominio

1. Configura SPF, DKIM y DMARC, y lleva DMARC a `quarantine` o `reject` cuando todos tus correos reales pasen.
2. Verifica tu lista antes de cada campaña y quita las direcciones que no existen.
3. Envía el cold email, es decir, el correo a personas que no te conocen, desde un dominio aparte o un subdominio, como ejemplo-ventas.com o ventas.ejemplo.com. Así un problema en esos envíos no toca el dominio de tu correo principal.
4. Si el dominio es nuevo, aumenta el volumen poco a poco. Esto se llama [calentamiento de correo](/glossary/email-warmup).
5. Pon un enlace de baja visible para que la gente no use el botón de spam.

## Reputación del dominio y verificación de correo

Los rebotes dañan la reputación del dominio, y muchos vienen de direcciones que ya no existen. El [validador de correo](/email-checker) comprueba una dirección antes de enviar. El [validador de correos masivos](/bulk-email-verifier) comprueba una lista entera y te dice qué direcciones quitar. La [verificación de correo](/) no cambia tu autenticación ni tu contenido. Sí evita que tu dominio acumule rebotes por enviar a buzones muertos.
