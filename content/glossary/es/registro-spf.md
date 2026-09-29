---
title: Registro SPF
description: Qué es un registro SPF, cómo es, cómo lo comprueban los servidores receptores, el límite de diez consultas DNS y los códigos de rebote que recibes cuando la comprobación falla.
slug: registro-spf
date: 2026-09-29
updated: 2026-09-29
keyword: registro spf
short: Un registro SPF es un registro DNS en tu dominio que lista los servidores autorizados a enviar correo para ese dominio. Los servidores receptores lo comprueban para confirmar que un correo que dice venir de tu dominio se envió desde uno de tus servidores.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: La autenticación arregla un tipo de rebote. La verificación arregla el otro
---

## Qué es un registro SPF

SPF significa Sender Policy Framework. Está definido en RFC 7208. Un registro SPF es un [registro DNS TXT](/glossary/dns-txt-record) en tu dominio. Lista los servidores autorizados a enviar correo con tu nombre de dominio.

Un registro SPF sencillo tiene este aspecto:

`v=spf1 include:_spf.google.com -all`

Cada parte significa algo:

- `v=spf1` dice que esto es un registro SPF.
- `include:_spf.google.com` dice que cualquier servidor que Google liste puede enviar para este dominio.
- `-all` dice que se rechace el correo de cualquier otro servidor.
- `~all` es un final más suave. Dice que el correo de otros servidores se trate como sospechoso, pero no se rechace.

## Cómo lo comprueban los servidores receptores

Cuando llega un correo, el servidor receptor lee el dominio del [Return-Path](/glossary/return-path). El Return-Path es la dirección a la que se envían los rebotes. El servidor obtiene el registro SPF de ese dominio. Después comprueba si la dirección IP que entregó el correo está en el registro.

- **Pass.** La dirección IP está en el registro. El correo vino de un servidor autorizado.
- **Fail.** La dirección IP no está en el registro y el registro termina en `-all`. El servidor puede rechazar el correo.
- **Softfail.** La dirección IP no está en el registro y el registro termina en `~all`. El servidor acepta el correo pero lo marca como sospechoso.

Microsoft Exchange Online rechaza un correo que falla con `5.7.23 The message was rejected because of Sender Policy Framework violation`. Gmail responde con `550 5.7.26` a un correo sin ninguna autenticación. Los dos códigos empiezan por 5. Tu herramienta de envío los registra como [hard bounces](/glossary/hard-bounce) aunque la dirección esté bien.

## Quién necesita un registro SPF

Cualquiera que envíe correo masivo necesita uno. Las directrices para remitentes de Google exigen SPF y DKIM a los remitentes de 5.000 o más mensajes al día a Gmail. También exigen DMARC. Microsoft exige los mismos tres registros a los dominios que envían más de 5.000 correos al día a Outlook.com, Hotmail y Live. Microsoft lo aplica desde el 5 de mayo de 2025.

Si envías menos, los registros siguen importando. Sin ellos, tu correo tiene más probabilidades de ir a la carpeta de spam.

## El límite de diez consultas DNS

RFC 7208 limita una comprobación SPF a diez consultas DNS. Cada `include:`, `a`, `mx` y `redirect` de tu registro cuenta como una consulta. Las consultas dentro de los registros que incluyes también cuentan. Si el total supera diez, la comprobación devuelve un error permanente. La mayoría de los servidores receptores tratan ese error como fail.

Así es como se rompen los registros SPF con más frecuencia. Una empresa añade una herramienta de correo tras otra al registro. Cuando se añade la undécima consulta, todo el registro deja de funcionar.

## SPF es uno de tres registros

- SPF comprueba qué servidor envió el correo.
- [DKIM](/glossary/dkim) comprueba que el correo no se modificó después de enviarse.
- [DMARC](/glossary/dmarc) conecta las dos comprobaciones con la dirección De que ve el lector. También dice a los servidores receptores qué hacer cuando las comprobaciones fallan.

Un dominio necesita los tres. La guía [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) muestra cómo aparecen los códigos de fallo en un informe de rebotes.
