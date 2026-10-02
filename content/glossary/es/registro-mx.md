---
title: Registro MX
description: Qué es un registro MX, cómo lo usan los servidores de correo para encontrar el destino, qué significa la prioridad y qué indica un registro MX que falta.
slug: registro-mx
date: 2026-09-29
updated: 2026-09-29
keyword: registro mx
short: Un registro MX es un registro DNS que dice qué servidor recibe el correo de un dominio. Cuando envías a nombre@ejemplo.com, tu servidor de correo busca el registro MX de ejemplo.com para saber a qué servidor entregar.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Comprueba si una dirección puede recibir correo
---

## Qué es un registro MX

MX significa Mail Exchanger. Un registro MX es un tipo de registro DNS. DNS es el directorio público que conecta los nombres de dominio con los servidores. Los registros MX de un dominio listan los servidores que aceptan correo entrante para ese dominio.

Un dominio puede tener más de un registro MX. Cada registro tiene un número de prioridad. Los servidores con números más bajos se prueban primero. Esta es una configuración típica de un dominio de Google Workspace:

| Prioridad | Servidor de correo |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Si el servidor de prioridad 1 no responde, el servidor emisor prueba el siguiente.

## Cómo usa el correo los registros MX

Cuando envías a `nombre@ejemplo.com`, tu servidor de correo hace tres cosas:

- Busca los registros MX de `ejemplo.com`.
- Se conecta al servidor con el número de prioridad más bajo.
- Entrega el correo por SMTP.

RFC 5321, el estándar de correo, describe este proceso. También cubre los dominios sin registro MX. Si el dominio tiene un registro A normal, los servidores de correo tratan ese registro como si fuera un registro MX.

## Qué dice un registro MX sobre una dirección

El registro MX es la primera comprobación real de la verificación de correo. La comprobación de sintaxis va antes.

- **Sin registro MX y sin registro A.** El dominio no puede recibir correo. Cualquier dirección de ese dominio no es válida. Una errata como `gmial.com` suele fallar en este paso.
- **Registro MX presente.** El dominio puede recibir correo. Esto no dice nada sobre si el buzón concreto existe. Para eso hace falta el siguiente paso: una conversación SMTP con el servidor.
- **Registro MX que apunta a una pasarela conocida.** Si el servidor de correo es Proofpoint, Mimecast o Barracuda, el dominio usa una [pasarela de correo seguro](/glossary/secure-email-gateway). La comprobación del buzón se comporta de otra forma en estos dominios.

## Por qué importa para los remitentes

Cualquiera puede leer el registro MX de un dominio con una consulta DNS. Cuando una empresa cambia de proveedor de correo o cierra, sus registros MX cambian o desaparecen. Las direcciones dejan de funcionar. Nadie te avisa. Esta es una causa habitual de hard bounces en listas antiguas.

## Cómo lo gestiona un verificador

Un [comprobador de direcciones de correo](/email-checker) busca primero el registro MX. Si no hay registro MX, la dirección se marca como no válida y no se hacen más comprobaciones. Si hay registro MX, el verificador se conecta a ese servidor y pregunta si el buzón existe. La consulta MX también le dice al verificador qué tipo de servidor es. Esto importa en los [dominios catch-all](/glossary/catch-all-email) y en las pasarelas.
