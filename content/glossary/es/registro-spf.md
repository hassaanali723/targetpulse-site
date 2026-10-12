---
title: Registro SPF
description: Qué es un registro SPF, cómo es, cómo lo comprueban los servidores, el límite de diez consultas DNS y qué códigos de rebote recibes si falla.
slug: registro-spf
date: 2026-09-29
updated: 2026-10-12
keyword: registro spf
short: Un registro SPF es una entrada pública del DNS de tu dominio que lista los servidores que pueden enviar correo con ese dominio. Los servidores receptores lo comprueban para confirmar que un correo que dice venir de tu dominio salió de uno de tus servidores.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: La autenticación arregla un tipo de rebote. La verificación arregla el otro
---

## ¿Qué es un registro SPF?

Un registro SPF es una lista pública de los servidores que pueden enviar correo con tu dominio. SPF significa Sender Policy Framework. Está definido en el estándar RFC 7208.

Antes, unas palabras básicas:

- **Dominio.** Es la parte de la dirección que va después de la @. En ventas@example.com, el dominio es example.com.
- **Servidor.** Es una computadora conectada a internet que envía o recibe correo.
- **Dirección IP.** Es el número que identifica a un servidor en internet.
- **DNS.** Es el directorio público de internet donde cada dominio guarda su configuración.

Un registro SPF es un [registro DNS TXT](/glossary/dns-txt-record) de tu dominio. Un registro TXT es una entrada del DNS que guarda texto. Un registro SPF sencillo tiene este aspecto:

`v=spf1 include:_spf.google.com -all`

Cada parte significa algo:

| Parte | Qué dice |
|---|---|
| `v=spf1` | Esto es un registro SPF |
| `include:_spf.google.com` | Cualquier servidor que Google liste puede enviar para este dominio |
| `-all` | Rechaza el correo de cualquier otro servidor |
| `~all` | Un final más suave: trata el correo de otros servidores como sospechoso, pero no lo rechaces |

Un registro termina con `-all` o con `~all`, no con los dos.

## Un ejemplo sencillo

Una tienda usa el dominio tienda.example. Envía correo desde dos sitios: Google Workspace y una herramienta de boletines. Su registro SPF es este:

`v=spf1 include:_spf.google.com include:envios.boletines.example -all`

1. Un día, alguien intenta enviar un correo falso que dice venir de ventas@tienda.example.
2. El correo falso sale de un servidor que no está en el registro SPF.
3. El servidor que recibe el correo lee el registro SPF de tienda.example.
4. Ve que la dirección IP del servidor no está en la lista.
5. El registro termina en `-all`, así que el resultado es Fail.
6. El servidor receptor puede rechazar el correo falso.

Los correos reales de la tienda salen de Google o de la herramienta de boletines. Esos sí pasan la comprobación.

## Cómo lo comprueban los servidores receptores

Cuando llega un correo, el servidor receptor lee el dominio del [Return-Path](/glossary/return-path). El Return-Path es la dirección a la que se envían los rebotes. Un rebote es un aviso de que un correo no se entregó.

Después, el servidor obtiene el registro SPF de ese dominio. Comprueba si la dirección IP que entregó el correo está en el registro. Hay tres resultados posibles:

- **Pass.** La dirección IP está en el registro. El correo vino de un servidor autorizado.
- **Fail.** La dirección IP no está en el registro, y el registro termina en `-all`. El servidor puede rechazar el correo.
- **Softfail.** La dirección IP no está en el registro, y el registro termina en `~all`. El servidor acepta el correo, pero lo marca como sospechoso.

Cuando el correo se rechaza, recibes un código:

- Microsoft Exchange Online rechaza un correo que falla con `5.7.23 The message was rejected because of Sender Policy Framework violation`.
- Gmail responde con `550 5.7.26` a un correo sin ninguna autenticación.

Los dos códigos empiezan por 5. Tu herramienta de envío los registra como [hard bounces](/glossary/hard-bounce), aunque la dirección del destinatario esté bien.

## Quién necesita un registro SPF

Cualquiera que envíe correo masivo necesita uno. Estas son las reglas publicadas:

- **Google.** Sus directrices para remitentes exigen SPF y DKIM a quien envía 5.000 o más mensajes al día a Gmail. También exigen DMARC.
- **Microsoft.** Exige los mismos tres registros a los dominios que envían más de 5.000 correos al día a Outlook.com, Hotmail y Live. Lo aplica desde el 5 de mayo de 2025.

Si envías menos, los registros siguen importando. Sin ellos, tu correo tiene más probabilidades de ir a la carpeta de spam.

## El límite de diez consultas DNS

RFC 7208 limita una comprobación SPF a diez consultas DNS. Una consulta es una pregunta que el servidor receptor hace al DNS. Cada `include:`, `a`, `mx` y `redirect` de tu registro cuenta como una consulta. Las consultas dentro de los registros que incluyes también cuentan.

Si el total supera diez, la comprobación devuelve un error permanente. La mayoría de los servidores receptores tratan ese error como Fail.

Así es como se rompe un registro SPF con más frecuencia:

1. Una empresa añade Google Workspace a su registro SPF.
2. Después añade una herramienta de boletines.
3. Después, una herramienta de ventas, otra de soporte y otra de facturas.
4. Cada herramienta suma consultas, también las que tiene dentro.
5. Cuando se añade la undécima consulta, todo el registro deja de funcionar.

## SPF es uno de tres registros

- SPF comprueba qué servidor envió el correo.
- [DKIM](/glossary/dkim) comprueba que el correo no se modificó después de enviarse.
- [DMARC](/glossary/dmarc) conecta las dos comprobaciones con la dirección De que ve el lector. También dice a los servidores receptores qué hacer cuando las comprobaciones fallan.

Un dominio necesita los tres. La guía [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) muestra cómo aparecen los códigos de fallo en un informe de rebotes.

## Registro SPF y verificación de correo

Un registro SPF demuestra que el correo sale de un servidor tuyo. No dice si la dirección del destinatario existe. Un correo que pasa SPF y va a un buzón que no existe sigue rebotando. El [verificador de correo](/email-checker) comprueba una dirección antes de enviar, y el [validador de correos masivos](/bulk-email-verifier) comprueba una lista entera. Con el registro SPF bien configurado y la [verificación de correo](/) hecha, evitas dos tipos de rebote. Son los rebotes por autenticación y los rebotes por direcciones que no existen.
