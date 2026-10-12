---
title: BIMI (correo electrónico)
description: Qué es BIMI en el correo electrónico, cómo muestra tu logo en la bandeja de entrada, qué necesitas, cómo es el registro BIMI y qué buzones lo muestran.
slug: bimi
date: 2026-10-12
updated: 2026-10-12
keyword: que es bimi
short: BIMI es un estándar del correo electrónico que muestra el logo de tu marca junto a tus correos en la bandeja de entrada. Solo funciona si tu dominio tiene DMARC en modo quarantine o reject, y solo en los buzones que lo admiten.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: Tu logo solo se ve si el correo llega. Comprueba tu lista
---

## ¿Qué es BIMI en el correo electrónico?

BIMI es un estándar del correo electrónico. Las siglas significan Brand Indicators for Message Identification, en español indicadores de marca para identificar mensajes. BIMI hace que el logo de tu marca aparezca junto a tus correos en la bandeja de entrada.

No hay que confundirlo con el bimi, la verdura. Aquí BIMI es solo un registro técnico de tu dominio. Un dominio es el nombre que va después de la @ en una dirección, por ejemplo ejemplo.com.

## Un ejemplo de BIMI en Gmail

Abre tu bandeja de entrada de Gmail. Junto a cada correo hay un círculo pequeño. En la mayoría de los correos, el círculo muestra solo una letra, por ejemplo una "T" para Tienda Ejemplo.

Algunas marcas muestran su logo en ese círculo. Esas marcas tienen BIMI configurado. Cuando Gmail recibe su correo, hace tres cosas:

1. Comprueba que el correo pasa [DMARC](/glossary/dmarc) para el dominio de la marca.
2. Busca el registro BIMI de ese dominio en el DNS. El DNS es el directorio público de internet donde cada dominio guarda su configuración.
3. Descarga el logo y el certificado que indica el registro, y muestra el logo en el círculo.

Si cualquiera de los tres pasos falla, Gmail muestra la letra de siempre.

## Qué necesitas para BIMI

BIMI tiene tres requisitos.

**DMARC en modo de aplicación.** Tu política DMARC debe ser `p=quarantine` o `p=reject`. Google dice que BIMI no admite una política `p=none`. Para llegar ahí, primero necesitas [SPF](/glossary/spf) y [DKIM](/glossary/dkim) configurados en todos tus servicios de envío.

**El logo en formato SVG Tiny PS.** SVG es un formato de imagen hecho de líneas y formas, no de píxeles. SVG Tiny PS es una versión reducida de SVG pensada para mostrarse con seguridad en el correo. El archivo debe cumplir estas reglas:

- La imagen es cuadrada.
- El elemento principal tiene `baseProfile` con el valor `tiny-ps` y `version` con el valor `1.2`.
- Tiene un elemento `title` con el nombre de tu marca.
- No tiene scripts, imágenes de píxeles incrustadas, animaciones ni enlaces a archivos externos.
- Pesa menos de 32 KB.

Un SVG exportado de un programa de diseño normal suele romper al menos una de estas reglas.

**Un certificado de marca para Gmail.** Un certificado es un archivo que emite una empresa autorizada y que confirma que el logo es de tu marca. Hay dos tipos:

| Certificado | Qué necesita | Qué muestra Gmail |
|---|---|---|
| VMC (Verified Mark Certificate) | Una marca registrada | El logo y una marca de verificación azul |
| CMC (Common Mark Certificate) | No necesita marca registrada | El logo, sin la marca de verificación |

## El registro BIMI

El registro BIMI es un [registro TXT](/glossary/dns-txt-record) del DNS. Un registro TXT es una entrada que guarda texto. Va en el nombre `default._bimi` de tu dominio. Tiene este aspecto:

```
default._bimi.ejemplo.com  TXT  "v=BIMI1; l=https://ejemplo.com/bimi/logo.svg; a=https://ejemplo.com/bimi/cert.pem"
```

Cada parte significa algo:

- `v=BIMI1` dice que es un registro BIMI.
- `l=` es la dirección web de tu logo SVG. Debe empezar por https.
- `a=` es la dirección web de tu certificado VMC o CMC, un archivo PEM.

La palabra `default` es el selector. Solo necesitas otro selector si quieres logos distintos para distintos tipos de correo.

## Qué buzones muestran el logo de BIMI

No todos los buzones muestran logos BIMI, y cada uno tiene sus reglas:

- **Gmail** muestra el logo solo con un certificado VMC o CMC.
- **Apple Mail** muestra el logo solo con un certificado VMC.
- **Yahoo y Fastmail**, entre otros, pueden mostrar el logo con un registro sin certificado.

Los proveedores pueden tardar un tiempo en leer un registro nuevo.

## Cómo configurar BIMI

1. Lleva tu política DMARC a `quarantine` o `reject`. El [generador de DMARC](/dmarc-generator) (en inglés) te ayuda con el registro.
2. Prepara el logo en SVG Tiny PS y compruébalo.
3. Decide qué certificado necesitas y solicítalo a una autoridad de certificación aceptada.
4. Sube el SVG y el certificado a direcciones web con https.
5. Publica el registro TXT en `default._bimi.tudominio`.

El [generador de BIMI](/bimi-generator) (en inglés) crea el registro y revisa tu SVG contra las reglas de Tiny PS en tu navegador. El archivo no se sube a ningún sitio.

## BIMI y verificación de correo

BIMI no mejora la entrega por sí mismo. Solo muestra un logo en correos que ya pasan DMARC y que ya llegaron a la bandeja de entrada. Si un correo rebota porque la dirección no existe, nadie ve tu logo. El [verificador de correo](/email-checker) comprueba una dirección antes de enviar, y el [validador de correos masivos](/bulk-email-verifier) comprueba una lista entera. La [verificación de correo](/) quita las direcciones muertas, para que más correos lleguen a buzones donde el logo se puede ver.
