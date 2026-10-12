---
title: Registro PTR
description: Qué es un registro PTR, por qué los servidores de correo lo comprueban, qué pasa cuando una IP emisora no tiene registro PTR y cómo configurar uno.
slug: registro-ptr
date: 2026-09-29
updated: 2026-10-12
keyword: registro ptr
short: Un registro PTR es un registro DNS que conecta una dirección IP con el nombre de un servidor. Los servidores de correo comprueban el registro PTR de la IP que les envía correo. Algunos rechazan el correo de las direcciones IP que no tienen registro PTR.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Comprueba tu lista, no solo tu DNS
---

## ¿Qué es un registro PTR?

Un registro PTR dice qué nombre tiene un servidor a partir de su dirección IP. PTR significa Pointer, en español puntero.

Antes, unas palabras básicas:

- **Servidor.** Es una computadora conectada a internet que da un servicio, por ejemplo enviar correo.
- **Dirección IP.** Es el número que identifica a un servidor en internet. Ejemplo: `203.0.113.10`.
- **Nombre de host.** Es el nombre de un servidor concreto. Ejemplo: `mail.example.com`.
- **DNS.** Es el directorio público de internet. Conecta los nombres con las direcciones IP.
- **Registro.** Es una entrada del DNS que guarda un dato.

Un registro DNS normal conecta un nombre con una dirección IP. Por ejemplo, `mail.example.com` apunta a `203.0.113.10`. Un registro PTR hace lo contrario. Conecta `203.0.113.10` con `mail.example.com`. Esto se llama DNS inverso.

El registro PTR no está en el DNS de tu dominio. Está en una zona DNS aparte, que pertenece al dueño de la dirección IP. Normalmente el dueño es tu proveedor de hosting o tu proveedor de correo. Para crear o cambiar un registro PTR, se lo pides a ellos.

## Un ejemplo sencillo

Una agencia tiene su propio servidor de correo. Su dirección IP es `203.0.113.10`.

1. La agencia envía un correo a un cliente con cuenta de Gmail.
2. El servidor de Gmail ve que el correo llega desde `203.0.113.10`.
3. Gmail pregunta al DNS: ¿qué nombre tiene `203.0.113.10`?
4. El registro PTR responde: `mail.example.com`.
5. Gmail pregunta al DNS otra vez: ¿a qué IP apunta `mail.example.com`?
6. La respuesta es `203.0.113.10`. Los dos datos coinciden.
7. Gmail acepta la conexión y sigue con sus otras comprobaciones.

Si en el paso 4 no hubiera registro PTR, Gmail podría rechazar el correo.

## Por qué los servidores de correo lo comprueban

Cuando tu servidor se conecta a un servidor receptor, el receptor ve tu dirección IP. Busca el registro PTR de esa IP. Después comprueba dos cosas:

1. ¿La dirección IP tiene un registro PTR?
2. ¿El nombre de host del registro PTR apunta de vuelta a la misma dirección IP?

Si las dos cosas se cumplen, el remitente parece un servidor de correo real. Alguien lo configuró a propósito.

Si no hay registro PTR, el remitente parece una de estas tres cosas:

- una conexión de internet de una casa;
- una computadora infectada por un virus;
- un servidor que nadie ha configurado.

El spam suele venir de este tipo de máquinas.

## Qué pasa sin registro PTR

Algunos proveedores rechazan el correo. La referencia de errores de Gmail lista este código:

`550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`

Significa que el correo se bloqueó porque la IP que lo envió no tiene registro PTR. Es un rechazo permanente. Tu herramienta de envío lo registra como [hard bounce](/glossary/hard-bounce) aunque la dirección del destinatario exista.

Otros proveedores aceptan el correo, pero le dan una puntuación peor. Una puntuación peor significa que el correo tiene más probabilidades de ir a la carpeta de spam.

## Cómo configurar un registro PTR

Sigue estos pasos:

1. Encuentra la dirección IP desde la que sale tu correo.
2. Elige el nombre de host al que debe apuntar. Ejemplo: `mail.example.com`.
3. Asegúrate de que ese nombre de host tiene un registro DNS normal que apunta a la misma dirección IP.
4. Pide a tu proveedor de hosting o de correo que ponga el registro PTR de esa IP con ese nombre de host.

¿Necesitas hacerlo tú? Depende de cómo envías:

| Cómo envías | ¿Tienes que configurar el registro PTR? |
|---|---|
| Google Workspace, Microsoft 365, SendGrid o Amazon SES | No. Las IP son del proveedor y ya tienen registro PTR |
| Tu propio servidor de correo | Sí |
| Una dirección IP dedicada | Sí |

Una dirección IP dedicada es una IP que solo usa tu empresa para enviar.

## Registros PTR y verificación

Un registro PTR afecta a la dirección IP del remitente. No afecta a la dirección del destinatario. El [verificador de correo](/email-checker) no necesita tu registro PTR para comprobar tu lista. Pero el verificador sí necesita registros PTR en sus propias direcciones IP. Sin ellos, los servidores receptores no hablan con él. Esta es una razón por la que un servicio de verificación obtiene respuestas distintas que un script ejecutado en una laptop. El [validador de correos masivos](/bulk-email-verifier) comprueba una lista entera, y la [verificación de correo](/) encuentra las direcciones que no existen antes de enviar.
