---
title: Registro TXT de DNS
description: Qué es un registro TXT de DNS, para qué se usa en el correo (SPF, DKIM y DMARC), cómo agregar uno, las reglas que lo rompen y cómo comprobarlo. Con ejemplos.
slug: registro-txt-dns
date: 2026-10-22
updated: 2026-10-22
keyword: registro txt dns
short: Un registro TXT de DNS es una línea de texto guardada en la configuración de tu dominio. Los servidores de correo leen los registros TXT para comprobar SPF, DKIM y DMARC. Otros servicios los leen para confirmar que el dominio es tuyo.
related: spf, dkim, dmarc, mx-record, ptr-record, bimi
cta: Tus registros están listos. Ahora comprueba las direcciones a las que escribes
---

## ¿Qué es un registro TXT de DNS?

Un registro TXT de DNS es una línea de texto guardada en la configuración de tu dominio. Cualquiera en internet puede leerla.

Primero, qué es el DNS. DNS significa Domain Name System, es decir, sistema de nombres de dominio. Funciona como una guía telefónica pública de dominios. Cuando alguien escribe tu dominio, el DNS le dice a su computadora dónde encontrarlo. El DNS guarda distintos tipos de entradas, llamadas registros. Cada tipo de registro tiene una sola función.

Un registro TXT guarda texto simple. No lleva a nadie a ningún lado. Es una nota unida a tu dominio. Otros sistemas leen la nota y actúan según lo que dice.

## Para qué se usan los registros TXT

En el correo, los registros TXT guardan las reglas que demuestran que tus correos son reales.

| Uso | Dónde va el registro | Valor de ejemplo |
|---|---|---|
| **[SPF](/glossary/spf)** | tu dominio, por ejemplo `example.com` | `v=spf1 include:_spf.google.com ~all` |
| **[DKIM](/glossary/dkim)** | `selector._domainkey.example.com` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
| **[DMARC](/glossary/dmarc)** | `_dmarc.example.com` | `v=DMARC1; p=none; rua=mailto:reports@example.com` |
| **Propiedad del dominio** | tu dominio | `google-site-verification=abc123...` |

Los valores de arriba son ejemplos acortados. Tus valores reales te los da tu proveedor de correo o el servicio que estás conectando.

## Un ejemplo sencillo

Así se agrega un registro TXT.

1. **Marco empieza a usar Google Workspace.** Quiere que sus correos desde marco@studio.example lleguen a la bandeja de entrada.
2. **Google le da un valor.** La guía de configuración le dice que agregue un registro SPF con `v=spf1 include:_spf.google.com ~all`.
3. **Marco abre la configuración de su dominio.** Inicia sesión donde compró el dominio. Esto se llama registrador o proveedor de DNS.
4. **Agrega un registro TXT.** Elige el tipo TXT, deja como nombre su dominio y pega el valor.
5. **Espera.** El cambio puede tardar desde unos minutos hasta unas horas en verse en todas partes.
6. **Ahora los servidores pueden comprobarlo.** Cuando Marco envía un correo, el servidor receptor lee su registro TXT. Ve que los servidores de Google pueden enviar correo para studio.example.

## Reglas que rompen los registros TXT

La mayoría de los problemas con los registros TXT vienen de unos pocos errores simples.

- **Solo un registro SPF por dominio.** Si un dominio tiene dos registros TXT que empiezan con `v=spf1`, SPF falla. Únelos en un solo registro.
- **Los valores largos se dividen.** Un fragmento de texto en un registro TXT puede tener hasta 255 caracteres. Los valores largos, como las claves DKIM, se guardan en varios fragmentos. La mayoría de los proveedores de DNS lo hacen por ti.
- **Usa el nombre exacto.** Un registro DMARC tiene que estar en `_dmarc`, no en tu dominio principal. Un registro DKIM tiene que estar en el nombre de selector que te da tu proveedor.
- **Copia el valor exactamente.** Un solo carácter que falte hace que el registro no sirva.

## Cómo comprobar un registro TXT

Puedes leer los registros TXT de cualquier dominio. En una computadora Mac o Linux, abre la terminal y escribe `dig TXT example.com`. En Windows, escribe `nslookup -type=TXT example.com`.

También puedes usar nuestro [verificador de SPF](/spf-checker). Lee el registro SPF de un dominio y explica qué permite.

## Qué relación tienen los registros TXT con la verificación

Los registros TXT protegen el correo que envías. Demuestran que el correo sale de ti. No dicen nada sobre si la persona a la que escribes todavía tiene un buzón.

Esa es otra comprobación. El [verificador de correo](/email-checker) pregunta al servidor receptor si una dirección existe. Necesitas las dos cosas: registros correctos en tu dominio y una lista limpia de direcciones reales.
