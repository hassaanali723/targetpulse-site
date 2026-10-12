---
title: Spam score (puntuación de spam)
description: Qué es el spam score de un correo, cómo lo calcula un filtro como SpamAssassin con un ejemplo, qué lo sube, cómo comprobarlo y cómo bajarlo.
slug: puntuacion-de-spam
date: 2026-10-12
updated: 2026-10-12
keyword: spam score
short: El spam score, o puntuación de spam, es el número que un filtro de spam da a un correo. Cuanto más alto es el número, más probable es que el correo vaya a la carpeta de spam.
related: spam-filter, spam-trap, deliverability, sender-reputation, email-blacklist, complaint-rate
cta: Baja el riesgo de spam con una lista de direcciones reales
---

## ¿Qué es el spam score de un correo?

El spam score, en español puntuación de spam, es un número que un [filtro de spam](/glossary/spam-filter) asigna a cada correo que recibe. Un filtro de spam es el programa que decide si un correo va a la bandeja de entrada o a la carpeta de spam.

El filtro revisa el correo con una lista de reglas. Cada regla que el correo cumple suma o resta puntos. Al final, el filtro compara el total con un límite. Si el total supera el límite, el correo se marca como spam.

## Un ejemplo con SpamAssassin

SpamAssassin es un filtro de spam gratuito y de código abierto. Lo usan muchos servidores de correo y muchas herramientas de prueba. Por defecto, SpamAssassin marca un correo como spam cuando llega a 5,0 puntos.

Imagina que Pedro envía este correo a sus clientes:

- **Asunto:** OFERTA INCREÍBLE SOLO HOY!!!
- **Texto:** un enlace acortado de bit.ly y una sola imagen grande sin texto.
- **Dominio:** sin registro DKIM.

SpamAssassin revisa el correo y tres reglas se activan. Los puntos de esta tabla son un ejemplo inventado. Los valores reales cambian según la versión y la configuración de cada servidor.

| Regla que se activa | Puntos de ejemplo |
|---|---|
| El asunto está todo en mayúsculas | 1,5 |
| El correo es casi solo una imagen | 1,8 |
| El correo no tiene firma DKIM | 1,0 |
| **Total** | **4,3** |

Con 4,3 puntos, el correo de Pedro queda por debajo de 5,0. Pasa, pero por poco. Si otra regla suma un punto más, el correo va a spam.

Gmail y Outlook usan sus propios filtros y no publican una puntuación. Sus filtros dan más peso a la reputación del remitente y a las quejas que al texto.

## Qué sube el spam score

Estos son los motivos más comunes:

- **Falta autenticación.** El dominio no tiene [SPF](/glossary/spf), [DKIM](/glossary/dkim) o [DMARC](/glossary/dmarc), o no pasan.
- **La dirección IP está en una lista negra.** Una dirección IP es el número que identifica al servidor que envía. Si aparece en una [lista negra de correo](/glossary/email-blacklist), muchos filtros suman puntos.
- **Palabras y formato agresivos.** Frases como "dinero gratis" o "actúa ahora", asuntos en mayúsculas y muchos signos de exclamación.
- **HTML roto.** El HTML es el código que da formato al correo. Si está mal escrito o es casi solo una imagen, los filtros desconfían.
- **Enlaces acortados.** Un enlace de bit.ly u otro acortador esconde a dónde lleva.

## El spam score de Moz es otra cosa

Si buscas "spam score" en internet, también verás el Spam Score de Moz. Es una métrica de SEO para sitios web, no para correos. Mide si un sitio web se parece a sitios que los buscadores penalizaron. No tiene relación con los filtros de spam del correo.

## Cómo comprobar tu spam score

**mail-tester.com.** La web te da una dirección de correo de prueba. Envías tu correo a esa dirección. Después la web te muestra una nota sobre 10 y la lista de problemas que encontró, como reglas de SpamAssassin y fallos de autenticación.

**Nuestro comprobador de palabras de spam.** El [spam word checker](/spam-word-checker) (en inglés) revisa el asunto y el texto de tu correo en tu navegador. Marca palabras de riesgo, mayúsculas y enlaces acortados. También marca campos personalizados que no se rellenaron, como `{{first_name}}`. No da un número, porque ninguna herramienta sabe cómo tratará tu correo cada buzón.

## Cómo bajar tu spam score, paso a paso

1. Configura SPF, DKIM y DMARC en tu dominio.
2. Comprueba si tu dirección IP o tu dominio están en una lista negra con una herramienta como MXToolbox.
3. Escribe el asunto en minúsculas normales y usa como mucho un signo de exclamación.
4. Usa enlaces normales de tu propio dominio, no acortadores.
5. Equilibra texto e imágenes. No envíes un correo que sea solo una imagen.
6. Haz una prueba en mail-tester.com antes de cada campaña grande.

## Spam score y verificación de correo

La verificación no cambia la puntuación del contenido de tu correo. El [verificador de correo](/email-checker) no lee tu asunto ni tu texto. Lo que hace es comprobar si una dirección existe antes de enviar. Con el [validador de correos masivos](/bulk-email-verifier) quitas de tu lista las direcciones muertas, que causan rebotes y pueden convertirse en [spam traps](/glossary/spam-trap). Los rebotes y las spam traps dañan tu reputación de remitente, y la reputación pesa en los filtros más que el texto. Por eso la [verificación de correo](/) ayuda a la entregabilidad aunque no toque el spam score.
