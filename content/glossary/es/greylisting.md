---
title: Greylisting
description: Qué es el greylisting, por qué un servidor rechaza tu primer correo y acepta el segundo, cuánto dura el retraso y cómo afecta a la verificación.
slug: greylisting
date: 2026-09-29
updated: 2026-10-12
keyword: greylisting
short: El greylisting es una defensa contra el spam. Un servidor de correo rechaza el primer correo de un remitente que no conoce y lo acepta cuando el remitente lo vuelve a intentar unos minutos después. Los servidores de correo reales reintentan, y la mayoría del software de spam no.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Obtén una respuesta real en las direcciones que aplican greylisting a tus comprobaciones
---

## ¿Qué es el greylisting?

El greylisting es una defensa contra el spam que funciona con un retraso. El servidor que recibe el correo rechaza el primer intento de un remitente nuevo. Si el remitente lo intenta otra vez, el servidor acepta el correo. Está descrito en el estándar RFC 6647.

Antes, unas palabras básicas:

- **Servidor de correo.** Es la computadora que envía o recibe los correos de un dominio.
- **Dirección IP.** Es el número que identifica a un servidor en internet.
- **Remitente.** Es quien envía el correo. **Destinatario** es quien lo recibe.

El servidor receptor guarda un registro de todos los remitentes que ha visto. Para cada correo, mira tres datos:

1. la dirección IP que envía;
2. la dirección del remitente;
3. la dirección del destinatario.

Si nunca ha visto esa combinación, rechaza el correo con un error temporal. Un servidor de correo bien configurado guarda el correo en una cola y lo intenta otra vez. La mayoría del software de spam envía una sola vez y no reintenta.

Cuando llega el reintento, el servidor acepta el correo y guarda al remitente en su registro. A partir de ahí, el correo de ese remitente se acepta en el primer intento.

## Un ejemplo sencillo

1. Elena se registra en una tienda online con elena@empresa.example. El servidor de empresa.example usa greylisting.
2. La tienda envía el correo de bienvenida a las 10:00.
3. El servidor de empresa.example no conoce a la tienda. Responde con un error temporal `451`.
4. El servidor de la tienda guarda el correo en su cola.
5. A las 10:15, el servidor de la tienda envía el mismo correo otra vez.
6. El servidor de empresa.example ve el mismo remitente, la misma IP y la misma destinataria. Esta vez acepta el correo.
7. Elena recibe el correo de bienvenida a las 10:15, no a las 10:00.

El siguiente correo de la tienda a Elena entra al primer intento.

## Cómo lo ve el remitente

El primer intento recibe un código que empieza por 4. Suele ser `450` o `451`, con un mensaje como "greylisted, try again later". Significa que el servidor te puso en espera y que lo intentes más tarde.

Tu servidor de correo lo trata como un [soft bounce](/glossary/soft-bounce), es decir, un fallo temporal de entrega. Después reintenta según su propio calendario.

El servidor receptor decide cuánto espera antes de aceptar el reintento. Unos 15 minutos es lo habitual. Algunos servidores usan un retraso más corto o más largo.

Normalmente no notas el greylisting. El correo llega unos minutos más tarde. Si tu herramienta muestra algún aviso de rebote, se resuelve solo.

## Cuándo importa el greylisting

El greylisting no afecta a una campaña normal. Importa en dos casos.

**Correo urgente.** Un restablecimiento de contraseña que llega 15 minutos tarde no sirve al usuario. Tampoco sirve un código de un solo uso que llega tarde. Por eso los remitentes de correo transaccional a veces piden a los dominios receptores que añadan sus direcciones IP a una lista de permitidos. El correo transaccional es el que se envía por una acción del usuario, como una compra o un inicio de sesión.

**Verificación.** Un verificador comprueba una dirección con una conversación SMTP. SMTP es el conjunto de reglas que usan los servidores para pasarse correos. El verificador empieza la conversación y para antes de enviar nada. En un servidor con greylisting, el primer intento recibe una respuesta `4xx`. Un verificador que para tras un intento informa de que la dirección es desconocida. Pero la dirección puede ser válida.

## Greylisting y pasarelas de correo seguro

Muchos dominios de empresa usan una [pasarela de correo seguro](/glossary/secure-email-gateway), como Proofpoint o Mimecast. Una pasarela es un servidor que revisa el correo antes de entregarlo a la empresa. Estas pasarelas aplican greylisting a los remitentes desconocidos por defecto.

Esta es una razón por la que una comprobación básica devuelve "desconocida" en muchas direcciones B2B. B2B significa de empresa a empresa: direcciones de trabajo, no personales.

## Cómo lo gestiona un verificador

Un buen [verificador de correo](/email-checker) trata una respuesta `4xx` como "reintentar", no como un resultado. Espera, reintenta desde la misma dirección IP e informa de la respuesta que da el servidor después del retraso del greylisting. Giggal.ai hace esto cuando resuelve dominios con pasarela. Así devuelve válida o no válida donde una comprobación de un solo intento devuelve desconocida. El [validador de correos masivos](/bulk-email-verifier) aplica estos reintentos a una lista entera. La [verificación de correo](/) te dice qué direcciones no existen antes de enviar.
