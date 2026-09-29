---
title: Registro PTR
description: Qué es un registro PTR, por qué los servidores de correo lo comprueban, qué pasa cuando una IP emisora no tiene registro PTR y cómo configurar uno.
slug: registro-ptr
date: 2026-09-29
updated: 2026-09-29
keyword: registro ptr
short: Un registro PTR es un registro DNS que conecta una dirección IP con un nombre de host. Es lo contrario de un registro DNS normal. Los servidores de correo comprueban el registro PTR de la dirección IP que les envía. Algunos servidores rechazan el correo de direcciones IP sin registro PTR.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Comprueba tu lista, no solo tu DNS
---

## Qué es un registro PTR

Un registro DNS normal conecta un nombre con una dirección IP. Por ejemplo, `mail.ejemplo.com` apunta a `203.0.113.10`. Un registro PTR hace lo contrario. Conecta `203.0.113.10` con `mail.ejemplo.com`. Esto se llama DNS inverso.

PTR significa Pointer. El registro PTR no está en el DNS de tu dominio. Está en una zona DNS aparte que pertenece al dueño de la dirección IP. Normalmente es tu proveedor de hosting o tu proveedor de correo. Para crear o cambiar un registro PTR, se lo pides a ellos.

## Por qué los servidores de correo lo comprueban

Cuando tu servidor se conecta a un servidor receptor, el servidor receptor ve tu dirección IP. Busca el registro PTR de esa IP. Después comprueba dos cosas:

- ¿La dirección IP tiene un registro PTR?
- ¿El nombre de host del registro PTR apunta de vuelta a la misma dirección IP?

Si las dos cosas se cumplen, el remitente parece un servidor de correo real que alguien configuró a propósito. Si no hay registro PTR, el remitente parece una de estas tres cosas: una conexión doméstica, un ordenador infectado o un servidor que nadie ha configurado. El spam suele venir de estos.

## Qué pasa sin registro PTR

Algunos proveedores rechazan el correo. La referencia de errores de Gmail lista `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. Es un rechazo permanente. Tu herramienta de envío lo registra como [hard bounce](/glossary/hard-bounce) aunque la dirección exista.

Otros proveedores aceptan el correo pero le dan una puntuación peor. Una puntuación peor significa que el correo tiene más probabilidades de ir a la carpeta de spam.

## Cómo configurar un registro PTR

- Encuentra la dirección IP desde la que se envía tu correo.
- Elige el nombre de host al que debe apuntar. Ejemplo: `mail.tudominio.com`.
- Asegúrate de que ese nombre de host tiene un registro DNS normal que apunta a la misma dirección IP.
- Pide a tu proveedor de hosting o de correo que ponga el registro PTR de la dirección IP en ese nombre de host.

Si envías a través de Google Workspace, Microsoft 365, SendGrid o Amazon SES, las direcciones IP emisoras son del proveedor. Los registros PTR ya están configurados. Solo necesitas configurar un registro PTR si gestionas tu propio servidor de correo o usas una dirección IP dedicada.

## Registros PTR y verificación

Un registro PTR afecta a la dirección IP del remitente. No afecta a la dirección del destinatario. Un [comprobador de direcciones de correo](/email-checker) no necesita tu registro PTR para comprobar tu lista.

Un verificador necesita registros PTR en sus propias direcciones IP. Sin ellos, los servidores receptores no hablan con él. Esta es una razón por la que un servicio de verificación obtiene respuestas distintas que un script ejecutado en un portátil.
