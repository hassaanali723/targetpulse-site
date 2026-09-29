---
title: Greylisting
description: Qué es el greylisting, por qué un servidor rechaza tu primer correo y acepta el segundo, cuánto suele durar el retraso y cómo afecta a los resultados de verificación.
slug: greylisting
date: 2026-09-29
updated: 2026-09-29
keyword: greylisting
short: El greylisting es una defensa contra el spam. Un servidor de correo rechaza el primer correo de un remitente que no reconoce. Acepta el mismo correo cuando el remitente lo reintenta unos minutos después. Los servidores de correo reales reintentan. La mayoría del software de spam no.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Obtén una respuesta real en las direcciones que aplican greylisting a tus comprobaciones
---

## Qué es el greylisting

El greylisting es una defensa contra el spam que funciona con un retraso. Está descrito en RFC 6647.

Un servidor receptor mantiene un registro de todos los remitentes que ha visto. El servidor mira tres cosas: la dirección IP emisora, la dirección del remitente y la dirección del destinatario. Si nunca ha visto esa combinación, rechaza el correo con un error temporal. Un servidor de correo bien configurado pone el correo en cola y reintenta. La mayoría del software de spam envía una vez y no reintenta.

Cuando llega el reintento, el servidor acepta el correo y guarda el remitente en su registro. Después de eso, el correo del mismo remitente se acepta en el primer intento.

## Cómo lo ve el remitente

El primer intento recibe un código que empieza por 4. Suele ser `450` o `451`, con un mensaje como "greylisted, try again later". Tu servidor de correo lo trata como un [soft bounce](/glossary/soft-bounce) y reintenta según su propio calendario.

El servidor receptor decide cuánto espera antes de aceptar el reintento. Unos 15 minutos es lo habitual. Algunos servidores usan un retraso más corto o más largo.

Normalmente no notas el greylisting. El correo llega unos minutos más tarde. Si tu herramienta muestra algún aviso de rebote, se resuelve solo.

## Cuándo importa el greylisting

El greylisting no afecta a una campaña normal. Importa en dos casos.

**Correo urgente.** Un restablecimiento de contraseña o un código de un solo uso que llega 15 minutos tarde no sirve al usuario. Por eso los remitentes de correo transaccional a veces piden a los dominios receptores que añadan sus direcciones IP a una lista de permitidos.

**Verificación.** Un verificador comprueba una dirección iniciando una conversación SMTP y parando antes de enviar nada. En un servidor con greylisting, el primer intento recibe una respuesta `4xx`. Un verificador que para tras un intento informa de la dirección como desconocida. La dirección puede ser válida.

## Greylisting y pasarelas de correo seguro

Muchos dominios de empresa usan una [pasarela de correo seguro](/glossary/secure-email-gateway) como Proofpoint o Mimecast. Estas pasarelas aplican greylisting a los remitentes desconocidos por defecto. Esta es una razón por la que una comprobación básica devuelve desconocido en muchas direcciones B2B.

## Cómo lo gestiona un verificador

Un buen [comprobador de direcciones de correo](/email-checker) trata una respuesta `4xx` como "reintentar", no como un resultado. Espera, reintenta desde la misma dirección IP e informa de la respuesta que da el servidor después del retraso del greylisting. Giggal.ai hace esto cuando resuelve dominios con pasarela. Así devuelve válida o no válida donde una comprobación de un solo intento devuelve desconocida.
