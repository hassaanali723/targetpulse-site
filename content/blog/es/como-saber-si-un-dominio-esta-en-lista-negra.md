---
title: "Cómo saber si tu dominio de correo está en una lista negra (y cómo salir de ella)"
seoTitle: "Cómo saber si un dominio está en lista negra (2026)"
description: "Cómo saber si tu dominio o tu IP de envío está en una lista negra: lee los códigos de error SMTP, haz consultas DNSBL y sigue los pasos para salir de ella."
slug: como-saber-si-un-dominio-esta-en-lista-negra
date: 2026-11-07
updated: 2026-11-07
keyword: cómo saber si un dominio está en lista negra
image: /blog/covers/es/como-saber-si-un-dominio-esta-en-lista-negra.webp
imageAlt: "Banner técnico azul oscuro sobre la comprobación de listas negras de correo, las consultas DNSBL y los pasos para salir de ellas"
cta: "Limpia tu lista antes de volver a enviar"
---

Pocas cosas alteran tanto el envío de correo como una caída repentina de la entregabilidad. Un día tus campañas tienen una interacción normal. Al día siguiente, la tasa de apertura cae casi a cero, las respuestas desaparecen y tu cola de envío se llena de avisos de rechazo:

```text
550 5.7.1 Service unavailable; client [198.51.100.24] blocked using zen.spamhaus.org
554 5.7.1 Access denied; sender IP listed in Barracuda Reputation Network
```

Cuando los servidores de destino rechazan tus mensajes antes de mirar el asunto o el cuerpo, tu IP de envío o tu dominio ha entrado en una DNS-based Blackhole List (DNSBL). También se conoce como lista negra de correo o RBL.

Una entrada en una lista negra no es un filtro de contenido temporal. Es un bloqueo directo a nivel de red. Las grandes redes de correo, como Google Workspace, Microsoft 365, Yahoo Mail y los gateways de correo de empresa, consultan estas bases de datos en tiempo real durante el saludo SMTP inicial. Si tu IP o tu dominio aparece marcado, la conexión se corta en ese momento.

En esta guía verás cómo funcionan las listas negras de correo, cómo comprobar si tu dominio o tu IP aparece en las principales bases de datos antispam, cómo pedir la exclusión con éxito y cómo proteger tu reputación de remitente para no volver a entrar.

---

## Bloqueo por lista negra vs filtro de spam: ¿en qué se diferencian?

Antes de buscar la causa, conviene saber si tienes una entrada en una lista negra o si tus correos solo van a la carpeta de spam.

| Característica | Lista negra DNSBL / RBL | Filtro de spam del proveedor de correo |
| --- | --- | --- |
| **Momento de la detección** | Saludo SMTP inicial (fase de conexión) | Análisis tras la entrega (clasificación en la bandeja) |
| **Respuesta del servidor** | Rebote duro (código `550` o `554`) o conexión cortada | Aceptado con el código `250 OK` |
| **Qué ve el destinatario** | El destinatario nunca recibe el correo | El correo llega a la carpeta de spam del destinatario |
| **Alcance** | Global, en todos los servidores de correo que usan esa DNSBL | Limitado a un solo proveedor de correo (por ejemplo, solo Gmail) |
| **Causa principal** | Envíos a trampas de spam, tasas de rebote altas, relays abiertos | Poca interacción de los usuarios, textos con aspecto de spam, falta de SPF o DKIM |
| **Solución** | Solicitud formal de exclusión al operador de la lista negra | Calentamiento del dominio, depuración de la lista, recuperación de la reputación |

Si tus mensajes llegan a la carpeta de spam pero los registros de tu servidor de correo muestran el estado de entrega `250 OK`, tu dominio no está en una DNSBL. Lo que pasa es que el proveedor de destino clasifica tu mensaje según puntuaciones de reputación calculadas por algoritmos.

Si tu servidor de correo recibe rechazos duros que citan nombres de host de listas negras concretas, tienes una entrada activa en una DNSBL. Hay que corregirla de inmediato.

---

## Cómo saber si tu dominio de correo o tu IP está en una lista negra

Para comprobarlo, se consultan los servidores DNSBL y se mira si tu IP de envío o tu dominio devuelve un registro positivo. Puedes hacerlo con escáneres automáticos de varias RBL o con consultas DNS manuales desde tu terminal.

### 1. Escáneres automáticos de varias RBL

Los servicios de consulta de varias RBL revisan decenas de listas negras públicas a la vez en pocos segundos. Los escáneres gratuitos más fiables son:

- **MXToolbox Blacklist Check**: revisa más de 100 DNSBL para tu IP de envío o tu nombre de dominio.
- **DNSChecker Email Blacklist**: consulta rápida y simultánea en más de 50 bases de datos DNSBL y SURBL.
- **MultiRBL (valli.org)**: un motor de consulta ligero, pensado para desarrolladores, que revisa más de 200 listas negras.

Para hacer un escaneo, escribe tu IP de envío (la IP de tu servidor de correo, no la del wifi de tu oficina) o tu dominio de envío (por ejemplo, `company.com`).

```youtube
wOIJHhHZt04
Mira el video: [How To Use Email Blacklist Checker or Spam Database Lookup Tool](https://www.youtube.com/watch?v=wOIJHhHZt04) de InboxAlly: Mastering Email Deliverability
```

### 2. Consultas DNSBL manuales desde la línea de comandos (para administradores de sistemas)

Las herramientas web de consulta automática son cómodas. Pero las consultas manuales con `dig` o `nslookup` te dan una respuesta directa y sin caché desde los servidores de nombres autoritativos del operador de la lista negra.

Las listas negras basadas en DNS usan la notación de IP invertida que define el [RFC 5782 del IETF](https://datatracker.ietf.org/doc/html/rfc5782). Para consultar una lista negra a mano:

1. Invierte los cuatro octetos de tu IPv4 de envío. Por ejemplo, si la IP de tu servidor de correo es `198.51.100.24`, la cadena invertida es `24.100.51.198`.
2. Añade al final el dominio raíz de la DNSBL (por ejemplo, `zen.spamhaus.org`).
3. Haz una consulta DNS normal de tipo `A` con `dig`:

```bash
# Query Spamhaus ZEN for IP 198.51.100.24
dig +short 24.100.51.198.zen.spamhaus.org

# Query Barracuda Reputation Block List (BRBL)
dig +short 24.100.51.198.b.barracudacentral.org

# Query SpamCop (SCBL)
dig +short 24.100.51.198.bl.spamcop.net
```

#### Cómo leer el código de respuesta

- **Sin respuesta / `NXDOMAIN`**: tu IP está limpia. La lista negra no tiene ningún registro negativo para tu dirección.
- **Respuesta `127.0.0.X`**: tu IP está en la lista. El último octeto indica la categoría de la entrada:

```text
127.0.0.2 -> SBL (Spamhaus Block List: Verified spam source or trap hit)
127.0.0.4 -> XBL (Exploit Block List: Compromised server, malware, or open proxy)
127.0.0.10 -> PBL (Policy Block List: Residential/dynamic IP that should not send direct MX mail)
```

En el bloque anterior, SBL significa fuente de spam verificada o envío a una trampa. XBL significa servidor comprometido, malware o proxy abierto. PBL significa una IP residencial o dinámica que no debería enviar correo directo a los servidores MX.

Para saber si tu nombre de dominio (y no tu IP de envío) aparece en una lista negra de dominios (DBL), consulta el nombre de dominio directamente:

```bash
# Query Spamhaus Domain Blocklist (DBL)
dig +short company.com.dbl.spamhaus.org
```

Una respuesta `127.0.1.2` indica que el propio nombre de dominio está marcado como dominio de spam. Eso hace que los proveedores de correo rechacen tus mensajes aunque cambies de IP de envío.

---

## Las 5 listas negras que de verdad importan

En internet hay cientos de listas negras de correo públicas y privadas. Pero solo unas pocas deciden de verdad si tus correos llegan a la bandeja de entrada.

Los grandes proveedores de correo ignoran muchas listas negras pequeñas o de poca seriedad, como las listas de aficionados o los servicios que cobran por sacarte de ellas. Si apareces en una lista desconocida que nadie usa, tu entregabilidad no sufre.

Céntrate en las listas principales que sí importan:

### 1. Spamhaus (ZEN: SBL, XBL, CSS, DBL)

Spamhaus es la organización antispam con más influencia del mundo. Sus datos protegen más de 3.000 millones de buzones en todo el mundo, entre ellos grandes redes de telecomunicaciones, gateways de correo de empresas de la lista Fortune 500 y proveedores de correo para consumidores.

- **SBL (Spamhaus Block List)**: incluye fuentes de spam verificadas, listas de correo sin confirmación y remitentes que envían a trampas de spam.
- **XBL (Exploit Block List)**: incluye servidores infectados por exploits de terceros, botnets y malware.
- **DBL (Domain Block List)**: marca dominios que aparecen dentro de mensajes de spam, cebos de phishing o servicios de alojamiento a prueba de denuncias (bulletproof hosting).
- **ZEN**: la zona combinada que reúne los registros de SBL, SBLCSS, XBL y PBL.

Una entrada en Spamhaus es una emergencia operativa inmediata. Bloquea las entregas en los grandes servidores de correo de empresa y en proveedores de internet de todo el mundo.

### 2. Barracuda (BRBL)

La Barracuda Reputation Block List (`b.barracudacentral.org`) la mantiene Barracuda Networks. Se construye con datos de tráfico de miles de equipos Barracuda Email Security Gateway que funcionan dentro de redes de empresa.

Si envías prospección B2B en frío o correos de marketing a empresas, una entrada en Barracuda dispara de inmediato los rebotes en los destinatarios corporativos que usan filtros de seguridad de Barracuda, locales o en la nube.

### 3. SpamCop (SCBL)

SpamCop gestiona una de las listas negras basadas en denuncias más antiguas (`bl.spamcop.net`). Los remitentes entran automáticamente cuando los destinatarios marcan correos como spam o cuando trampas automáticas reciben mensajes no deseados.

A diferencia de Spamhaus, las entradas en SpamCop son dinámicas y duran poco. Suelen caducar solas en 24 a 48 horas cuando las denuncias de spam bajan del umbral.

### 4. Invaluement (ivmURI, ivmSIP)

Invaluement es una base de datos comercial de reputación para empresas. La usan a menudo los filtros de correo corporativos de gran volumen y el software de seguridad. Es conocida por detectar rápido el spam snowshoe (repartir el spam entre bloques grandes de IP) y por seguir la reputación de las URL a nivel de dominio.

### 5. Por qué puedes ignorar UCEPROTECT Level 3

Al usar herramientas de consulta de varias RBL, muchos remitentes se alarman al ver una entrada en rojo en **UCEPROTECT Level 3**.

UCEPROTECT Level 3 incluye subredes enteras y números de sistema autónomo (ASN), no IP de envío individuales. Si un cliente que no tiene nada que ver contigo envía spam desde tu proveedor de alojamiento en la nube (como DigitalOcean, AWS, Linode o Hetzner), UCEPROTECT marca miles de IP vecinas limpias de todo ese proveedor.

Como este método perjudica a muchos remitentes inocentes, los grandes proveedores de correo (entre ellos Google, Microsoft y Yahoo) no usan UCEPROTECT Level 3 para decidir las entregas. Los ingenieros de entregabilidad y los postmasters no suelen tener en cuenta las entradas de Level 3. No pagues tarifas de exclusión a servicios que piden dinero por sacarte de una lista.

---

## Guía paso a paso para salir de una lista negra

Si tu comprobación confirma una entrada activa en una base de datos principal, sigue este proceso de recuperación en cuatro pasos.

```
[ Step 1: Halt Outbound Queues ]
             │
             ▼
[ Step 2: Audit Root Cause & Logs ]
             │
             ▼
[ Step 3: Implement Technical Fixes ]
             │
             ▼
[ Step 4: Submit Delisting Request ]
```

Los cuatro pasos del diagrama son: detener las colas de envío, revisar la causa y los registros, aplicar las correcciones técnicas y enviar la solicitud de exclusión.

### Paso 1: detén los envíos de inmediato

No envíes una solicitud de exclusión mientras tu servidor de correo sigue enviando mensajes. Si pides la exclusión mientras tu servidor sigue enviando a trampas de spam o generando rebotes, rechazarán tu solicitud. Además, tu IP quedará marcada como reincidente que no colabora.

- Pausa las secuencias automáticas de envío y las campañas de prospección en frío.
- Revisa la cola de tu servidor de correo (`mailq` en Postfix) para detectar envíos masivos de spam causados por cuentas comprometidas o por formularios de contacto vulnerables.

### Paso 2: encuentra y corrige la causa

Las listas negras no marcan una IP sin un motivo. Revisa tus registros y tu infraestructura para saber cuál de estas cuatro causas habituales provocó la entrada:

1. **Trampas de spam prístinas**: enviaste correo a direcciones que nunca tuvieron dueño. Estas direcciones se publican solo para atrapar a los bots que extraen datos de sitios web. Si compraste una lista de contactos o extrajiste contactos de páginas web sin verificarlos, lo más probable es que hayas enviado a una trampa prístina.
2. **Tasas de rebote altas**: tu tasa de rebote superó un umbral de entre el 2,0 % y el 5,0 %, una señal de contactos antiguos, no verificados o inventados.
3. **Credenciales comprometidas**: alguien entró en una cuenta de usuario de tu servidor y la usó para enviar mensajes de phishing o spam.
4. **Falta de autenticación**: tu dominio no tiene registros SPF y DKIM alineados, así que otros pueden suplantar tu nombre de dominio.

### Paso 3: envía las solicitudes de exclusión a las listas principales

Cuando hayas resuelto el problema y tus registros estén limpios, envía solicitudes formales de exclusión directamente en los portales oficiales:

#### Exclusión en Spamhaus
1. Ve al [Spamhaus IP and Domain Reputation Checker](https://check.spamhaus.org/) oficial.
2. Escribe la IP o el dominio que está en la lista.
3. Revisa el código exacto de la entrada y la descripción que da Spamhaus.
4. Haz clic en el botón **Request Removal** y completa el formulario de verificación.
5. Indica una dirección de correo administrativa que funcione en tu dominio. Las primeras solicitudes de remitentes limpios suelen procesarse en 1 a 4 horas.

#### Exclusión en Barracuda
1. Visita el [Barracuda Central Reputation System](https://www.barracudacentral.org/lookups).
2. Escribe la IP de tu servidor de correo.
3. Sigue los pasos hasta el formulario **Barracuda Removal Request**.
4. Escribe tus datos de contacto y una explicación clara y basada en hechos de las medidas que tomaste. El plazo habitual es de 12 a 24 horas.

#### Exclusión en SpamCop
- En [SpamCop](https://www.spamcop.net/bl.shtml) casi nunca hace falta una solicitud manual. Si detuviste el envío que causó el problema, SpamCop elimina la entrada automáticamente entre 24 y 48 horas después de la última denuncia.

### Qué escribir en una solicitud de exclusión (y qué NO decir)

Las solicitudes de exclusión las revisan ingenieros de redes con experiencia. La forma en que redactas tu solicitud decide si la aprueban:

> **No escribas:**  
> *"Somos una empresa legítima y esto es un error urgente. Nos están haciendo perder dinero. Eliminen nuestra IP de inmediato."*  
> (Esto no da ninguna garantía técnica y hace que tu solicitud pase al final de la cola.)

> **Escribe:**  
> *"Identificamos una lista de marketing sin verificar, subida el 24 de octubre, que provocó picos de rebotes y de denuncias. Detuvimos los envíos de inmediato. Eliminamos todos los contactos sin verificar, pusimos en marcha una limpieza automática de listas antes de cada envío para quitar las direcciones no válidas y desechables, y comprobamos la alineación de SPF y DKIM. Nuestra cola de envío está limpia."*

---

## Cómo no volver a entrar en una lista negra

Salir de la lista es solo la mitad del trabajo. Si tus hábitos de envío no cambian, tu dominio volverá a las mismas listas negras en pocos días.

Para proteger tu reputación de remitente necesitas tres defensas continuas:

### 1. Exige una autenticación de correo estricta

Los envíos sin autenticar quedan expuestos a la suplantación de dominio. Si un spammer usa tu nombre de dominio en la cabecera `From:` de una campaña de phishing, la reputación de tu dominio sufre las consecuencias.

- **SPF (Sender Policy Framework)**: indica de forma explícita qué servidores de correo pueden enviar en nombre de tu dominio. Comprueba tu configuración con nuestro [verificador de registros SPF](/spf-checker) gratuito.
- **DKIM (DomainKeys Identified Mail)**: firma cada mensaje saliente con una clave criptográfica de 2048 bits. Puedes generar claves DNS correctas con nuestro [generador DKIM](/dkim-generator).
- **DMARC**: indica a los servidores de destino que rechacen los mensajes no autorizados que dicen venir de tu dominio.

### 2. Vigila la tasa de rebote y los datos de SMR

Mantén tu tasa de rebote siempre por debajo del 2,0 %. Una tasa de rebote por encima del 3,0 % indica un mal mantenimiento de la lista. Una tasa por encima del 5,0 % activa listas negras automáticas en los filtros de empresa.

- Mide y compara tus datos históricos de entrega con nuestra [calculadora de tasa de rebote](/bounce-rate-calculator).
- Distingue los problemas temporales del servidor de las direcciones que no existen con nuestra guía sobre [rebote duro vs rebote suave](/blog/hard-bounce-vs-soft-bounce).

### 3. Limpia cada lista de contactos antes de enviar

Más del 85 % de las entradas en listas negras de correo se deben a envíos a trampas de spam prístinas o a envíos repetidos a buzones eliminados.

Las listas de prospectos extraídas de webs, las bases de datos de CRM antiguas y los registros de webinars suelen contener dominios mal escritos, correos temporales desechables y direcciones abandonadas que se han convertido en trampas de spam recicladas.

Antes de importar listas de contactos a tu plataforma de envío o a tu herramienta de cold email, verifica las direcciones con una pasada de verificación específica. Puedes probar direcciones sueltas con nuestro [verificador de correo gratis](/email-checker) o detectar dominios desechables con nuestro [verificador de correos desechables](/disposable-email-checker). La limpieza de la lista filtra los dominios muertos, los errores de sintaxis, los proveedores temporales y las redes de trampas conocidas antes de que tu servidor de correo los toque.

---

## Preguntas frecuentes

### ¿Cuánto tarda en hacer efecto la exclusión de una lista negra?
Cuando un operador aprueba tu solicitud de exclusión, sus servidores DNSBL autoritativos se actualizan casi de inmediato. Pero los servidores de destino guardan los registros DNS en caché. Según el tiempo de vida DNS (TTL) que use cada servidor de destino, la entrega normal suele volver en todas las redes en un plazo de 2 a 24 horas.

### ¿Puede mi dominio entrar en una lista negra si uso un ESP fiable como Google Workspace o SendGrid?
Sí. Los proveedores de servicios de correo gestionan la infraestructura, pero tú sigues siendo responsable de las direcciones a las que envías. Si haces prospección en frío o envías listas masivas sin verificar con Google Workspace o SendGrid y das con trampas de spam, Spamhaus puede marcar tu dominio de envío en la Domain Blocklist (DBL). Entonces tu correo se rechaza sea cual sea la plataforma de envío.

### ¿Debo cambiar de nombre de dominio si mi dominio está en una lista negra?
No. Abandonar un dominio que está en una lista negra para registrar uno nuevo es un error. Los dominios nuevos no tienen ninguna reputación de remitente y los proveedores de correo les aplican límites de envío estrictos y greylisting. Es más rápido, y mejor para tu entregabilidad a largo plazo, corregir la causa, limpiar tu lista de suscriptores y completar el proceso formal de exclusión con tu dominio de siempre.
