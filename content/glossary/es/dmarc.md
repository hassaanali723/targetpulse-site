---
title: DMARC
description: Qué es DMARC, por qué existe, cómo bloquea un correo falso con tu dominio, las tres políticas, un registro sencillo y cómo empezar.
slug: dmarc
date: 2026-10-12
updated: 2026-10-12
keyword: que es dmarc
short: DMARC es una regla que publicas en el DNS de tu dominio. Dice a los servidores receptores qué hacer con un correo que usa tu dominio en el remitente pero no pasa las comprobaciones SPF y DKIM. También les dice dónde enviarte informes.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: Protege tu dominio y envía solo a direcciones que existen
---

## ¿Qué es DMARC?

DMARC significa Domain-based Message Authentication, Reporting and Conformance. Es una regla corta que publicas en el DNS de tu dominio. El DNS es el directorio público de internet donde cada dominio guarda su configuración. Un dominio es el nombre que va después de la @, por ejemplo ejemplo.com.

La regla dice dos cosas a los demás servidores de correo:

- Qué hacer con un correo que dice venir de tu dominio pero no pasa las comprobaciones. Puede entregarse, ir a spam o bloquearse.
- A qué dirección enviarte informes sobre los correos que llegan con tu dominio.

DMARC existe porque cualquiera puede escribir cualquier dirección en el campo De de un correo. Esto se llama [suplantación de correo](/glossary/email-spoofing). DMARC es la forma de decir a Gmail, Outlook y los demás: "si no es de verdad mío, no lo entregues".

## Un ejemplo: un correo falso de facturación

Tu empresa usa el dominio ejemplo.com. Un estafador envía este correo a uno de tus clientes:

- **De:** facturacion@ejemplo.com
- **Asunto:** Su factura está vencida
- **Texto:** Pague hoy en este enlace.

Tu cliente ve ejemplo.com y confía en el correo. Pero tu empresa nunca lo envió. Tu dominio tiene un registro DMARC con `p=reject`. Esto es lo que pasa:

1. El correo falso llega a Gmail.
2. Gmail comprueba [SPF](/glossary/spf) y [DKIM](/glossary/dkim). Ninguno de los dos pasa para ejemplo.com, porque el estafador no usa tus servidores ni tu firma.
3. Gmail lee tu registro DMARC. Dice `p=reject`.
4. Gmail bloquea el correo. Tu cliente nunca lo ve.

Tus correos reales sí pasan las comprobaciones, así que se entregan con normalidad.

## Cómo decide DMARC si un correo pasa

SPF comprueba qué servidor envió el correo. DKIM comprueba una firma digital dentro del correo. Las dos comprobaciones tienen un hueco. Un estafador puede pasarlas con su propio dominio y, a la vez, poner tu dominio en el campo De.

DMARC cierra ese hueco con una regla. SPF o DKIM debe pasar para el mismo dominio que aparece en el campo De. Esa coincidencia se llama [alineación DMARC](/glossary/dmarc-alignment). Basta con que uno de los dos pase y coincida. Si ninguno lo hace, el correo falla DMARC.

## Las tres políticas de DMARC

La política es la parte `p=` del registro. Tiene tres valores posibles:

| Política | Qué pasa con un correo que falla DMARC | Cuándo usarla |
|---|---|---|
| `p=none` | Nada. Se entrega como siempre y recibes informes. | Al principio, mientras encuentras todos tus servicios de envío. |
| `p=quarantine` | Va a la carpeta de spam. | Cuando todos tus servicios reales ya pasan. |
| `p=reject` | Se bloquea del todo. | Cuando estás seguro de que nada real va a fallar. |

Con `p=none` tu dominio no está protegido. Solo recibes información. La protección empieza con `quarantine`. Con `reject`, los servidores que siguen tu política bloquean el correo falso.

## Un registro DMARC sencillo

Un registro DMARC es un [registro TXT](/glossary/dns-txt-record) del DNS. Un registro TXT es una entrada que guarda texto. Va en el nombre `_dmarc` de tu dominio. Este es un registro para empezar:

```
_dmarc.ejemplo.com  TXT  "v=DMARC1; p=none; rua=mailto:informes@ejemplo.com"
```

Cada parte significa algo:

- `v=DMARC1` dice que es un registro DMARC. Siempre va primero.
- `p=none` es la política. Aquí solo pide informes.
- `rua=mailto:informes@ejemplo.com` es la dirección donde recibes los informes. Son archivos que dicen qué servidores enviaron correo con tu dominio y si pasaron.

Publica un solo registro DMARC por dominio. Si un servidor encuentra dos, los ignora los dos.

## Cómo empezar con DMARC

La mayoría de los dominios siguen tres pasos:

1. Publica `p=none` con una dirección `rua`. Lee los informes durante unas semanas.
2. Encuentra todos los servicios que envían correo con tu dominio, como tu herramienta de boletines o tu sistema de soporte. Configura SPF y DKIM en cada uno hasta que pasen.
3. Cambia a `p=quarantine`. Si todo va bien, cambia a `p=reject`.

El [generador de DMARC](/dmarc-generator) (en inglés) crea el registro por ti. Cada parte del registro y cómo leer los informes están en la guía [qué es un registro DMARC](/blog/what-is-a-dmarc-record).

## Quién exige DMARC

Las directrices para remitentes de Google exigen un registro DMARC a quien envía 5.000 o más correos al día a cuentas personales de Gmail. Microsoft exige lo mismo para Outlook.com, Hotmail y Live desde el 5 de mayo de 2025. Los dos aceptan `p=none` como mínimo.

El estándar actual de DMARC es RFC 9989, publicado en mayo de 2026. Sustituye a RFC 7489. Los registros que empiezan por `v=DMARC1` siguen funcionando.

## DMARC y verificación de correo

DMARC protege tu dominio de los correos falsos. No dice si las direcciones de tu lista existen. Un correo que pasa DMARC rebota igual si el buzón del destinatario no existe. El [verificador de correo](/email-checker) comprueba una dirección antes de enviar, y el [validador de correos masivos](/bulk-email-verifier) comprueba una lista entera. DMARC y la [verificación de correo](/) resuelven dos problemas distintos, y un dominio que envía campañas necesita los dos.
