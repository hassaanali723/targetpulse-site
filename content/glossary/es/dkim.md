---
title: DKIM
description: Qué es DKIM, cómo funciona la firma DKIM con un ejemplo, cómo es un registro DKIM en el DNS, cómo configurarlo y cómo comprobar que pasa.
slug: dkim
date: 2026-10-12
updated: 2026-10-12
keyword: que es dkim
short: DKIM es una firma digital que tu servidor añade a cada correo que envías. El servidor que lo recibe comprueba la firma para saber que el correo salió de tu dominio y que nadie lo cambió por el camino.
related: spf, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, bimi
cta: Firma tus correos y envíalos solo a direcciones que existen
---

## ¿Qué es DKIM?

DKIM significa DomainKeys Identified Mail. Es una firma digital que va dentro de cada correo. La firma demuestra dos cosas. El correo lo envió un servidor autorizado por tu dominio. Y nadie cambió el asunto, el remitente ni el texto después del envío.

El estándar RFC 6376 define DKIM. Un dominio es el nombre que va después de la @ en una dirección, por ejemplo ejemplo.com en ventas@ejemplo.com.

DKIM usa un par de claves. Una clave es un número muy largo que un programa usa para firmar o comprobar datos. Las dos claves van juntas:

- **La clave privada** se queda en tu servidor de envío. Solo tu servidor la conoce. Con ella firma cada correo.
- **La clave pública** se publica en el DNS de tu dominio. El DNS es el directorio público de internet donde cada dominio guarda su configuración. Cualquier servidor puede leer la clave pública y comprobar la firma.

## Un ejemplo de DKIM paso a paso

Una tienda online usa el dominio ejemplo.com. Lucía compra unas zapatillas y la tienda le envía el recibo a su cuenta de Gmail.

1. El servidor de la tienda prepara el correo con el recibo.
2. Antes de enviarlo, el servidor calcula un resumen del asunto, del remitente y del texto. Firma ese resumen con la clave privada.
3. El servidor añade la firma al correo, en una línea oculta llamada cabecera DKIM-Signature. Una cabecera es una línea de información técnica que viaja con el correo y que el lector normalmente no ve.
4. Gmail recibe el correo. Lee la cabecera y ve que la firma es de ejemplo.com.
5. Gmail busca la clave pública de ejemplo.com en el DNS.
6. Gmail usa la clave pública para comprobar la firma. Si coincide con el correo, DKIM pasa.

Si alguien cambió el importe del recibo por el camino, la firma ya no coincide. DKIM falla.

## La firma DKIM

La firma va en la cabecera `DKIM-Signature`. Tiene varias partes. Dos son las más importantes:

- `d=` es el dominio que firma. En el ejemplo, `d=ejemplo.com`.
- `s=` es el selector. Es un nombre que eliges para la clave, por ejemplo `s=s2026a`. El selector dice al receptor qué clave pública buscar, porque un dominio puede tener varias.

El receptor junta las dos partes para encontrar la clave. Con `s=s2026a` y `d=ejemplo.com`, busca en `s2026a._domainkey.ejemplo.com`.

## El registro DKIM en el DNS

El registro DKIM es un [registro TXT](/glossary/dns-txt-record) del DNS. Un registro TXT es una entrada del DNS que guarda texto. El registro DKIM va en el nombre `selector._domainkey.tudominio`. Tiene este aspecto:

```
s2026a._domainkey.ejemplo.com  TXT  "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA..."
```

Cada parte significa algo:

- `v=DKIM1` dice que es un registro DKIM.
- `k=rsa` dice qué tipo de clave es.
- `p=` contiene la clave pública. Es un texto largo de letras y números.

La clave privada nunca va en el DNS. Se queda solo en el servidor que firma. Para el tamaño de la clave, usa 2048 bits. Gmail acepta como mínimo 1024 bits pero recomienda 2048, y el estándar RFC 8301 dice que los firmantes deberían usar 2048.

## Por qué importa DKIM

**DKIM sobrevive al reenvío.** Cuando alguien reenvía tu correo, el servidor que lo reenvía tiene otra dirección IP. Una dirección IP es el número que identifica a un servidor en internet. Por eso [SPF](/glossary/spf) suele fallar en un correo reenviado. DKIM firma el contenido, no el servidor, así que la firma normalmente sigue siendo válida. Las listas de correo que añaden un pie de página o cambian el asunto sí pueden romper la firma.

**DMARC usa DKIM.** [DMARC](/glossary/dmarc) comprueba que SPF o DKIM pasen para el mismo dominio que aparece en el campo De. Esa coincidencia se llama [alineación DMARC](/glossary/dmarc-alignment).

**Gmail y Outlook lo exigen.** Las directrices para remitentes de Google exigen SPF, DKIM y DMARC a quien envía 5.000 o más correos al día a cuentas personales de Gmail. Microsoft exige lo mismo desde el 5 de mayo de 2025 para Outlook.com, Hotmail y Live.

## Cómo configurar DKIM

Depende de quién envía tu correo.

**Si usas un servicio de correo**, como Google Workspace, Microsoft 365, Mailchimp o SendGrid, el servicio crea las claves por ti. En su panel de configuración te da el registro DKIM. Tú lo copias en el DNS de tu dominio. Activa la firma con tu propio dominio. Muchos servicios firman por defecto con su dominio, y eso no sirve para la alineación DMARC.

**Si tienes tu propio servidor de correo**, creas tú el par de claves. El [generador de DKIM](/dkim-generator) crea una clave de 2048 bits y el registro TXT en tu navegador. La clave privada no se envía a ningún sitio. Después sigues estos pasos:

1. Publica el registro TXT en el DNS con el nombre `selector._domainkey`.
2. Instala la clave privada en la configuración DKIM de tu servidor, con el mismo selector.
3. Envía un correo de prueba y comprueba el resultado.

## Cómo comprobar que DKIM pasa

Envía un correo desde tu dominio a una cuenta personal de Gmail. Abre el correo en Gmail. Abre el menú de los tres puntos y elige "Mostrar original". Gmail muestra el resultado de DKIM arriba. Debe decir PASS con tu dominio.

Si dice FAIL, revisa dos cosas. Comprueba que el registro del DNS ya está publicado. Y comprueba que el selector del servidor es exactamente el mismo que el del DNS.

## DKIM y verificación de correo

DKIM demuestra que el correo es tuyo. No dice si la dirección del destinatario existe. Un correo bien firmado a un buzón que no existe sigue rebotando. El [validador de correo](/email-checker) comprueba una dirección antes de enviar, y el [validador de correos masivos](/bulk-email-verifier) comprueba una lista entera. Con DKIM configurado y la [verificación de correo](/) hecha, envías correos firmados a direcciones que existen.
