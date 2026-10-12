---
title: Registro MX
description: Qué es un registro MX, cómo lo usan los servidores de correo para encontrar el destino, qué significa la prioridad y qué indica un registro MX que falta.
slug: registro-mx
date: 2026-09-29
updated: 2026-10-12
keyword: registro mx
short: Un registro MX es un registro DNS que dice qué servidor recibe el correo de un dominio. Cuando envías a nombre@example.com, tu servidor de correo busca el registro MX de example.com para saber a qué servidor entregar.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Comprueba si una dirección puede recibir correo
---

## ¿Qué es un registro MX?

Un registro MX es una línea de configuración pública de un dominio. Dice qué servidor recibe el correo de ese dominio. MX significa Mail Exchanger, en español intercambiador de correo.

Primero, unas palabras básicas:

- **Dominio.** Es la parte de la dirección que va después de la @. En ana@example.com, el dominio es example.com.
- **Servidor de correo.** Es la computadora que recibe y guarda los correos de un dominio.
- **DNS.** Es el directorio público de internet. Conecta los nombres de dominio con los servidores.
- **Registro.** Es una entrada del DNS. Cada registro guarda un dato sobre el dominio.

El registro MX es un tipo de registro DNS. Los registros MX de un dominio listan los servidores que aceptan el correo que llega para ese dominio.

Un dominio puede tener más de un registro MX. Cada registro tiene un número de prioridad. Los servidores con el número más bajo se prueban primero. Esta es una configuración típica de un dominio de Google Workspace:

| Prioridad | Servidor de correo |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Si el servidor de prioridad 1 no responde, el servidor que envía prueba el siguiente de la lista.

## Un ejemplo sencillo

Pedro trabaja en una empresa con el dominio empresa.example. Ana le escribe a pedro@empresa.example.

1. Ana pulsa Enviar.
2. El servidor de correo de Ana lee el dominio de la dirección: empresa.example.
3. El servidor consulta el DNS. Pide el registro MX de empresa.example.
4. El DNS responde con el registro MX: el correo de empresa.example lo recibe el servidor correo.empresa.example.
5. El servidor de Ana se conecta a correo.empresa.example y entrega el correo.
6. Pedro abre su buzón y lee el correo de Ana.

Sin el registro MX, el servidor de Ana no sabría a qué servidor entregar el correo.

## Cómo usa el correo los registros MX

Cuando envías a `nombre@example.com`, tu servidor de correo hace tres cosas:

1. Busca los registros MX de `example.com`.
2. Se conecta al servidor con el número de prioridad más bajo.
3. Entrega el correo por [SMTP](/glossary/smtp). SMTP es el conjunto de reglas que usan los servidores para pasarse correos.

RFC 5321, el estándar de correo, describe este proceso. También cubre los dominios sin registro MX. Si el dominio tiene un registro A normal, los servidores de correo tratan ese registro A como si fuera un registro MX. Un registro A es el registro que conecta un dominio con la dirección IP de un servidor. La dirección IP es el número que identifica a un servidor en internet.

## Qué dice un registro MX sobre una dirección

El registro MX es la primera comprobación real de la verificación de correo. Antes solo va la comprobación de sintaxis. La sintaxis es la forma de la dirección: que tenga una @, un nombre y un dominio.

Hay tres casos posibles:

- **Sin registro MX y sin registro A.** El dominio no puede recibir correo. Ninguna dirección de ese dominio es válida. Una errata en el dominio suele fallar en este paso. Ejemplo: alguien escribe ana@tineda.example en lugar de ana@tienda.example. El dominio con la errata no tiene registro MX.
- **Registro MX presente.** El dominio puede recibir correo. Pero un registro MX no dice nada sobre si el buzón concreto existe. Para eso hace falta el siguiente paso: una conversación SMTP con el servidor.
- **Registro MX que apunta a una pasarela conocida.** Si el servidor de correo es Proofpoint, Mimecast o Barracuda, el dominio usa una [pasarela de correo seguro](/glossary/secure-email-gateway). Una pasarela es un servidor que filtra el correo antes de entregarlo a la empresa. La comprobación del buzón se comporta de otra forma en estos dominios.

## Por qué importa para los remitentes

Cualquiera puede leer el registro MX de un dominio con una consulta DNS. Es información pública.

Cuando una empresa cambia de proveedor de correo o cierra, su registro MX cambia o desaparece. Las direcciones de esa empresa dejan de funcionar. Nadie te avisa.

**Ejemplo:** tienes en tu lista 40 contactos de una empresa que cerró el año pasado. Su dominio ya no tiene registro MX. Si les envías tu boletín, los 40 correos rebotan. Esta es una causa habitual de [hard bounces](/glossary/hard-bounce) en listas antiguas.

## Cómo lo gestiona un verificador

El [validador de correo](/email-checker) busca primero el registro MX. Si no hay registro MX, la dirección se marca como no válida y no se hacen más comprobaciones. Si hay registro MX, el verificador se conecta a ese servidor y pregunta si el buzón existe. La consulta del registro MX también dice qué tipo de servidor es. Esto importa en los [dominios catch-all](/glossary/catch-all-email) y en las pasarelas. El [validador de correos masivos](/bulk-email-verifier) hace estas comprobaciones con una lista entera. Así la [verificación de correo](/) quita las direcciones que no existen antes de enviar.
