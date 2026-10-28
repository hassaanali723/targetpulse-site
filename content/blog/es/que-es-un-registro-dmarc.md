---
title: "¿Qué es un registro DMARC?"
seoTitle: "¿Qué es un registro DMARC? Etiquetas, ejemplos e informes (2026)"
description: "Un registro DMARC es un TXT en _dmarc.yourdomain que dice a los receptores qué hacer con el correo que falla la autenticación. Cada etiqueta de 2026."
slug: que-es-un-registro-dmarc
date: 2026-10-19
updated: 2026-10-19
keyword: qué es un registro DMARC
image: /blog/covers/es/que-es-un-registro-dmarc.webp
imageAlt: Guía sobre qué es un registro DMARC con el desglose de las etiquetas y un resumen de las políticas
cta: Protege tu dominio y elimina las direcciones no válidas
---

Un registro DMARC es una línea corta de texto que añades a la configuración DNS de tu dominio. Les dice a otros servidores de correo qué hacer con un correo que dice venir de tu dominio pero no pasa las comprobaciones de seguridad. También les dice a dónde enviarte informes sobre el correo que reciben en tu nombre.

**En una frase:** DMARC es una regla pública que dice "si un correo dice ser de mi dominio pero no es mío de verdad, mándalo a spam o bloquéalo, y envíame un informe".

## DMARC explicado con un ejemplo

### El problema

Cualquiera puede enviar un correo y poner tu dirección en la línea From. Imagina que tu dominio es `example.com`. Un estafador envía este correo a tu cliente:

```text
From: billing@example.com
Subject: Your invoice is overdue
Pay here: http://pay-now.example.net
```

El correo dice que su factura está vencida y le pide que pague en un enlace. Tu cliente ve `example.com` y confía en él. Pero tú nunca enviaste este correo.

### Las dos comprobaciones que ya existen

Proveedores de correo como Gmail y Outlook ya pueden hacer dos comprobaciones en cada correo:

- **SPF:** ¿este correo salió de un servidor que `example.com` permite usar para enviar su correo?
- **DKIM:** ¿este correo lleva la firma digital de `example.com`?

Por sí solas, estas comprobaciones tienen un hueco. El estafador puede pasarlas con su propio dominio, mientras la línea From sigue mostrando el tuyo. Nada une la comprobación con la dirección que ve tu cliente.

### Lo que añade DMARC

DMARC añade una regla. SPF o DKIM deben pasar para el mismo dominio que aparece en la línea From. Esa coincidencia se llama **alineación**. Si ninguna de las dos comprobaciones pasa para ese dominio, el correo no pasa DMARC.

DMARC también te deja decidir qué pasa con un correo que no pasa la comprobación.

### Un registro DMARC, parte por parte

Añades esta línea a la configuración DNS de `example.com`:

```text
v=DMARC1; p=reject; rua=mailto:reports@example.com
```

Esto es lo que dice cada parte:

- `v=DMARC1`: "Esta es mi regla DMARC."
- `p=reject`: "Si un correo dice ser de example.com pero no pasa la comprobación, bloquéalo."
- `rua=mailto:reports@example.com`: "Envíame un informe diario sobre todos los que envían correo en mi nombre."

### Qué pasa con el correo falso

1. El correo del estafador desde `billing@example.com` llega a Gmail.
2. Gmail ejecuta SPF y DKIM. Ninguna de las dos comprobaciones pasa para `example.com`.
3. Gmail lee tu registro DMARC. Dice `p=reject`.
4. Gmail bloquea el correo. Tu cliente nunca lo ve.

Tus correos reales pasan las mismas comprobaciones, así que se entregan con normalidad.

### Las tres opciones de p

| Configuración | Qué pasa con un correo que no pasa DMARC | Cuándo usarla |
| --- | --- | --- |
| p=none | Nada. Se entrega con normalidad y recibes informes. | Al principio, mientras encuentras todos tus remitentes reales |
| p=quarantine | Va a la carpeta de spam. | Cuando todos tus remitentes reales pasan |
| p=reject | Se bloquea por completo. | Cuando estás seguro de que nada real fallará |

### Cómo lo configuran la mayoría de los dominios

1. Empieza con `p=none` y lee los informes diarios.
2. Encuentra cada servicio real que envía correo en tu nombre, como tu herramienta de correo y tu servicio de soporte. Asegúrate de que cada uno pasa.
3. Pasa a `p=quarantine` y luego a `p=reject`. Ahora nadie puede falsificar tu dominio en los receptores que siguen tu política.

Por eso la mayoría de los dominios empiezan con un registro como este, que solo observa:

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

El resto de esta guía explica con más detalle cada parte de un registro DMARC, y las opciones extra que puedes añadir más adelante.

## SPF, DKIM y la dirección From con más detalle

DMARC funciona por encima de SPF y DKIM. Nuestra guía sobre [SPF y DKIM](/blog/spf-dkim-dmarc-explained) los explica a fondo. Abajo tienes la versión corta.

**SPF** es una lista de los servidores que pueden enviar correo en nombre de tu dominio. Un servidor de destino comprueba si el correo salió de un servidor de esa lista.

**DKIM** es una firma digital que se añade a cada correo. El servidor de destino compara la firma con una clave que está en tu DNS. Si la firma es válida, el correo no cambió por el camino y lo firmó tu dominio.

**La dirección From** es la dirección del remitente que ve tu destinatario en su bandeja de entrada, por ejemplo `hello@example.com`. DMARC comprueba que SPF o DKIM pasaron para ese mismo dominio.

## Cómo es un registro DMARC

### Dónde va en el DNS

El DNS es la lista pública de configuración de tu dominio. Lo editas en tu proveedor de DNS, que normalmente es la empresa donde compraste el dominio o tu proveedor de hosting. Un registro DMARC es un registro TXT, una entrada del DNS que contiene texto simple.

Lo añades con el nombre de host `_dmarc`. La mayoría de los paneles de DNS añaden tu dominio al final de forma automática, así que `_dmarc` se convierte en `_dmarc.example.com`.

Ten cuidado con un error común. Algunos paneles solo esperan `_dmarc`. Si ahí escribes el nombre completo `_dmarc.example.com`, el registro acaba en `_dmarc.example.com.example.com`. Los servidores de destino no lo encontrarán ahí.

### Las reglas para escribirlo

- **Debe empezar por `v=DMARC1`.** Tiene que ser la primera parte del registro. `DMARC1` debe ir en mayúsculas. Si escribes `v=dmarc1`, pones otra parte primero o lo escribes mal, los servidores de destino ignoran el registro entero. Tu dominio se trata entonces como si no tuviera política DMARC.
- **Separa las partes con punto y coma.** Se permiten espacios alrededor de los puntos y coma.
- **Si falta la política.** Imagina que la parte `p` falta o está mal, pero el registro tiene una dirección de informes válida en `rua`. En ese caso los receptores tratan la política como `p=none`. Si faltan o están mal tanto `p` como `rua`, los receptores no aplican DMARC a tu dominio.
- **Publica un solo registro DMARC.** Si un servidor de destino encuentra dos o más registros TXT que empiezan por `v=DMARC1`, los descarta todos. Esta regla viene de la [RFC 9989](https://www.rfc-editor.org/info/rfc9989), el estándar DMARC actual. Dos registros no te dan dos políticas. Dejan tu dominio sin ninguna protección.

### Cómo comprobar tu registro

Puedes consultar tu registro con un comando en el terminal de tu computadora:

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

Usa `dig` en Linux y macOS. Muestra tu registro en una línea, entre comillas. Usa `nslookup` en Windows. Muestra el registro que devuelve tu servidor DNS.

Si el comando no devuelve nada, pasa una de dos cosas. O el registro todavía no se ha propagado por el DNS, o se añadió con un nombre de host equivocado.

## Cada etiqueta DMARC, y cuáles necesitas

Cada parte de un registro DMARC, como `p=none`, se llama etiqueta. El estándar actual, de mayo de 2026, tiene once etiquetas.

| Etiqueta | Qué hace, en palabras sencillas | Valores posibles | Si no la pones | ¿La necesitas? |
| --- | --- | --- | --- | --- |
| v | Dice "esto es un registro DMARC". Debe ir primero. | DMARC1 | Obligatoria | Sí |
| p | Tu política: qué hacer con el correo que no pasa. Cubre tu dominio y sus subdominios. | none, quarantine, reject | Se trata como none, si rua es válida | Sí |
| rua | A dónde enviar los informes resumen diarios | Una o más direcciones mailto:, separadas por comas | No recibes informes | Sí |
| sp | Una política aparte para los subdominios que existen, como news.example.com | none, quarantine, reject | Igual que p | Solo si los subdominios necesitan otras reglas |
| np | Una política para los subdominios que no existen en el DNS | none, quarantine, reject | Igual que sp, o que p si falta sp | Solo para bloquear subdominios inventados |
| adkim | Lo exacta que debe ser la coincidencia del dominio DKIM. r = relajada, s = estricta | r, s | r | Rara vez. La relajada es la opción normal |
| aspf | Lo exacta que debe ser la coincidencia del dominio SPF. r = relajada, s = estricta | r, s | r | Rara vez. La relajada es la opción normal |
| t | Modo de prueba. Hace que los receptores apliquen tu política un nivel más suave | y, n | n | Solo mientras pasas a una política más estricta |
| ruf | A dónde enviar un informe sobre cada correo fallido | Una o más direcciones mailto:, separadas por comas | No recibes informes | Rara vez, por los límites de privacidad |
| fo | Opciones para los informes de correos individuales | 0, 1, d, s | 0 | Solo si usas ruf |
| psd | Marca un dominio de sufijo público | y, n, u | u | Solo para sufijos públicos u organizaciones grandes que reparten partes de su DNS |

La alineación relajada y la estricta funcionan así. Con la relajada, un subdominio cuenta como coincidencia, así que `mail.example.com` coincide con `example.com`. Con la estricta, los dos dominios deben ser exactamente iguales.

El estándar de 2026 retiró tres etiquetas antiguas. Son la etiqueta de porcentaje (`pct`), la etiqueta de formato de informe (`rf`) y la etiqueta de intervalo de informes (`ri`). Un `pct=100` que se quedó en el registro no hace daño. Un `pct` por debajo de 100 servía para aplicar una política solo a una parte de tu correo durante una implantación. Ahora esa función la cumple la nueva etiqueta `t`.

**Lo que necesitan la mayoría de los dominios:** solo `v`, `p` y `rua`.

- Añade `sp` o `np` si tus subdominios necesitan otras reglas.
- No toques `psd`. Solo la necesitas si gestionas una organización grande que reparte partes de su DNS (`psd=n`), o un sufijo público como `co.uk` (`psd=y`).
- La coincidencia relajada (`adkim=r` y `aspf=r`) es la opción por defecto y funciona para casi todos los dominios. Solo necesitas las etiquetas de alineación si unas normas de cumplimiento estrictas prohíben firmar con un subdominio.

Puedes crear un registro con estas etiquetas, o limpiar uno antiguo, con nuestro [generador de DMARC](/dmarc-generator).

## Qué hacen de verdad p=none, quarantine y reject

La etiqueta `p` es la parte más importante del registro. Dice a los servidores de destino qué hacer con un correo que no pasa DMARC. Hay tres opciones. Cada una es una etapa en el camino hacia la protección completa.

**p=none: solo observar.** Los receptores no hacen nada especial con el correo que no pasa. Se entrega con normalidad, y solo se aplican los filtros de spam habituales. Junto con los informes en `rua`, la RFC 9989 llama a esto Monitoring Mode (modo de supervisión). Te muestra cada servicio que envía correo como tu dominio, sin ningún riesgo para tu entrega.

**p=quarantine: enviarlo a spam.** Los receptores tratan el correo que no pasa como sospechoso. En la mayoría de los proveedores de correo, va a la carpeta de spam del destinatario. Esto protege a tus destinatarios de los correos falsos. El correo real de una herramienta mal configurada no se pierde, porque se puede encontrar en la carpeta de spam.

**p=reject: bloquearlo.** Los receptores rechazan el correo que no pasa. La mayoría lo hace durante la entrega, con un código de error permanente que empieza por 5. El correo nunca llega a un buzón. El servidor que envía recibe un mensaje de rebote.

### Los receptores no siempre siguen tu política

Tu política es una petición, no una orden. El estándar dice que los receptores no deberían rechazar un correo solo por `p=reject`. Si no saben nada más del correo, deberían tratarlo como quarantine. Los proveedores de correo también usan sus propios datos de reputación del remitente y sus filtros de spam junto con tu política.

### Por qué reject necesita DKIM, y no solo SPF

El reenvío rompe SPF. Imagina que alguien reenvía su correo del trabajo a una cuenta personal. El servidor que reenvía envía el correo desde su propia dirección IP. Esa dirección no está en tu registro SPF, así que la comprobación SPF falla.

DKIM sobrevive al reenvío. La firma viaja dentro del propio correo, así que sigue siendo válida y sigue coincidiendo con tu dominio. Por eso un dominio con `p=reject` debe usar DKIM y no depender solo de SPF.

### Modo de prueba con t=y

La RFC 9989 añade un modo de prueba. Pon `t=y` y los receptores aplican tu política un nivel más suave que la que publicaste:

- `reject` se trata como `quarantine`.
- `quarantine` se trata como `none`.

El modo de prueba no cambia tus informes. Tampoco hace nada cuando tu política es `p=none`. Te deja ver cómo se comporta una política más estricta con correo real antes de hacerla permanente.

## Subdominios: sp y np

Un subdominio es un nombre extra delante de tu dominio, como `marketing.example.com` o `support.example.com`. Muchas empresas envían correo desde subdominios. Las etiquetas `sp` y `np` fijan las reglas para ellos, para cualquier subdominio que no tenga su propio registro DMARC.

### Cómo encuentra un receptor el registro correcto

1. El receptor busca primero un registro DMARC para el dominio exacto de la línea From. Si envías desde `news.example.com` y existe `_dmarc.news.example.com`, usa ese registro.
2. Si ahí no hay registro, busca tu registro principal en `_dmarc.example.com`. Lo encuentra subiendo por el nombre de dominio, una parte cada vez, hacia el final del nombre. No usa la Public Suffix List para esto.
3. Cuando tiene tu registro principal, comprueba si el subdominio que envía existe en el DNS.

Luego elige la regla:

- Si el subdominio existe, aplica `sp`. Si no hay `sp`, aplica `p`.
- Si el subdominio no existe (el DNS devuelve NXDOMAIN, que significa "ese nombre no existe"), aplica `np`. Si no hay `np`, usa `sp`. Si tampoco hay `sp`, usa `p`.

### Un ejemplo

Imagina que este registro está publicado en `_dmarc.example.com`:

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

Fija tres reglas distintas:

- **El correo desde el propio `example.com`** usa `p=reject`. Si no pasa DMARC, se pide a los receptores que lo bloqueen.
- **El correo desde `news.example.com`**, un subdominio que existe en el DNS, usa `sp=quarantine`. Imagina que una newsletter no pasa porque un proveedor configuró algo mal. Va a spam en lugar de rebotar.
- **El correo desde un nombre inventado como `invoices-2026.example.com`**, que no existe en el DNS, usa `np=reject`. Un subdominio que alguien se inventó recibe la regla estricta, aunque tus subdominios reales reciban quarantine.

## ¿Qué es un informe DMARC?

DMARC tiene dos tipos de informes:

- **Informes agregados**, que se configuran con `rua`. Son resúmenes diarios.
- **Informes de fallos**, que se configuran con `ruf`. Describen correos fallidos individuales.

### Informes agregados (rua)

Un informe agregado es un resumen de un proveedor de correo, como Gmail. Incluye todo el correo que ese proveedor recibió diciendo ser de tu dominio. Es un archivo XML, un archivo de texto estructurado pensado para que lo lea un programa. Los proveedores lo envían como adjunto de un correo, como un archivo `.xml` simple o como un archivo comprimido, por ejemplo `.xml.gz`.

Cada informe suele cubrir un día UTC. El estándar dice que los receptores deberían enviar informes agregados al menos cada 24 horas. No están obligados a enviar ninguno.

Este es un ejemplo de informe acortado:

```xml
<feedback>
  <report_metadata>
    <org_name>mail.receiver.example</org_name>
    <report_id>20261003.example.com</report_id>
    <date_range>
      <begin>1790985600</begin>
      <end>1791071999</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>example.com</domain>
    <p>none</p>
    <sp>none</sp>
  </policy_published>
  <record>
    <row>
      <source_ip>192.0.2.10</source_ip>
      <count>412</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>example.com</header_from>
      <envelope_from>bounces.esp-mail.example</envelope_from>
    </identifiers>
    <auth_results>
      <dkim><domain>example.com</domain><result>pass</result></dkim>
      <spf><domain>bounces.esp-mail.example</domain><result>pass</result></spf>
    </auth_results>
  </record>
</feedback>
```

Esto es lo que dice, bloque por bloque:

- **`<report_metadata>`**: el informe vino de `mail.receiver.example`. Cubre un día UTC completo.
- **`<policy_published>`**: la política que vio el receptor para `example.com`. Aquí es `p=none` y `sp=none`.
- **`<row>`**: llegaron 412 correos desde la dirección IP `192.0.2.10`.
- **SPF**: en `<auth_results>`, SPF pasó, pero para el dominio `bounces.esp-mail.example`. Ese dominio no es tu dominio From, `example.com`. Por eso, en `<policy_evaluated>`, SPF aparece como `fail`, porque no coincidió.
- **DKIM**: en `<auth_results>`, DKIM pasó para `example.com`. Eso coincide con el dominio From que aparece en `<identifiers>`. Así que DKIM pasó y coincidió, y estos 412 correos pasaron DMARC.

La idea principal es sencilla. `<auth_results>` muestra las comprobaciones SPF y DKIM sin más. `<policy_evaluated>` muestra si cada comprobación también coincidió con tu dominio From. DMARC usa la segunda.

### Informes de fallos (ruf)

Los informes de fallos, que a menudo se llaman informes forenses, describen cada uno un solo correo fallido. Pueden incluir los encabezados del correo y datos sobre el destinatario. Por este riesgo para la privacidad, muchos receptores quitan la mayoría de los datos, o no envían informes de fallos. La etiqueta `fo` fija las opciones de estos informes. Solo importa si usas `ruf`.

### Cómo leer los informes

El estándar recomienda usar un programa para leer los informes agregados, no leerlos a mano. Si envías a muchos proveedores de correo, cada uno te envía su propio informe, todos los días.

## ¿Por qué recibo correos de DMARC?

Recibes estos correos diarios porque la etiqueta `rua` de tu registro DMARC contiene tu dirección. Cada proveedor de correo que recibe correo en tu nombre envía un resumen diario a cada dirección de esa etiqueta.

El asunto sigue un formato fijo, definido en la [RFC 9990](https://www.rfc-editor.org/info/rfc9990):

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

El Submitter es el proveedor que comprobó el correo, como Google o Microsoft. El informe XML va adjunto, a menudo comprimido.

No envíes estos informes a una bandeja personal. Haz que `rua` apunte a un buzón aparte o a un servicio que procese informes. Si no recuerdas haber configurado esto, revisa tu registro DMARC. Puede que lo añadiera un administrador anterior, o la guía de configuración de una plataforma de correo.

### Enviar informes a otro dominio

Imagina que tu dominio es `example.com` y quieres que los informes lleguen a una dirección de `reports.example.net`. El dominio que recibe debe aceptar recibirlos. Lo hace publicando un registro TXT en su DNS. Sin ese registro, los receptores ignoran la dirección y no envían informes.

El registro va en este nombre de host:

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

Los servicios de informes suelen publicar un registro comodín (`*._report._dmarc.reports.example.net`). Ese único registro cubre todos los dominios de sus clientes, así que no hace falta configurar nada para cada uno.

## Pasar de p=none a reject sin perder correo

No saltes directamente a reject. Sube un paso cada vez:

1. **Empieza a observar.** Publica un registro DMARC en `_dmarc` con `p=none` y una dirección `rua` que funcione. Empiezas a recibir informes, y nada cambia en tu entrega.
2. **Arregla tus remitentes.** Lee los informes. Encuentra cada servicio real que envía correo en nombre de tu dominio y no pasa las comprobaciones, y arregla su configuración.
3. **Pasa a quarantine.** Cambia a `p=quarantine` cuando todos tus remitentes reales pasen de forma constante. Revisa las carpetas de spam para asegurarte de que ningún correo real acaba ahí.
4. **Pasa a reject.** Cambia a `p=reject`. El correo falso en tu nombre ahora se bloquea antes de llegar a nadie.

Esto puede llevar un tiempo. El estándar dice que conseguir que todos los remitentes pasen puede llevar muchos meses, según la frecuencia con la que envíes. Las herramientas de facturación, los servicios de soporte y las plataformas de marketing se olvidan con facilidad, así que sigue revisando tus informes.

**Si tus usuarios escriben en listas de correo**, ve más despacio. El estándar recomienda al menos un mes con `p=none`, y luego el mismo tiempo con quarantine. Compara los resultados antes de pasar a reject. Las listas de correo suelen cambiar el asunto, añadir pies de página o reenviar mensajes. Estos cambios rompen SPF y a veces también DKIM. Comparar varias semanas de informes muestra estos problemas antes de que reject empiece a bloquear correo.

**Usa el modo de prueba para el último paso.** Con `t=y`, puedes publicar `p=reject` mientras los receptores siguen aplicando quarantine. Ves cómo reaccionan los receptores a reject, pero el correo que no pasa sigue yendo a spam en lugar de rebotar.

**Una nota sobre el SPF estricto.** Si tu registro SPF termina en `-all`, algunos receptores rechazan el correo que no pasa en la comprobación SPF, antes de que se ejecute DMARC. Esos correos nunca llegan a la comprobación DMARC. Tampoco aparecen en tus informes diarios.

## Errores comunes en los registros DMARC

### Dos registros DMARC

Esto suele pasar cuando alguien añade un segundo registro TXT en lugar de editar el primero. Los receptores ven los dos y descartan los dos, como dice la RFC 9989. Tu dominio funciona entonces como si no tuviera ningún registro DMARC.

**Solución:** revisa tu DNS y une todas las etiquetas en un único registro TXT.

### El registro está en el dominio principal, no en _dmarc

Si escribes `example.com` como nombre de host, el registro se crea en tu dominio principal, no en `_dmarc.example.com`. Los servidores de correo solo buscan DMARC en el nombre `_dmarc`, así que nunca lo encuentran.

**Solución:** pon `_dmarc` como nombre de host.

### v=DMARC1 no va primero, o tiene las mayúsculas mal

Escribir `v=dmarc1`, o empezar con `p=none; v=DMARC1`, rompe el registro. Los receptores lo ignoran.

**Solución:** pon `v=DMARC1` como lo primero del registro, seguido de un punto y coma.

### Direcciones de informes sin mailto:

Escribir `rua=dmarc@example.com` en lugar de `rua=mailto:dmarc@example.com` rompe el formato de la dirección. Los receptores no pueden usar una dirección sin ese prefijo, así que no llega ningún informe.

**Solución:** empieza cada dirección de `rua` y `ruf` con `mailto:`.

### Informes enviados a otro dominio sin su permiso

Si envías los informes al dominio de un proveedor y ese dominio no ha publicado el registro de permiso, no recibes informes.

**Solución:** asegúrate de que cada dirección de informes externa tiene su registro `_report._dmarc` correspondiente, como se explica arriba.

### Reject solo con SPF

El reenvío cambia la dirección IP que envía el correo, así que el correo reenviado no pasa SPF. Sin DKIM, el correo real reenviado no pasa DMARC y rebota con una política reject.

**Solución:** configura la firma DKIM en cada servicio que envía tu correo antes de pasar de `p=none`.

### Etiquetas retiradas de guías antiguas

Muchas guías antiguas añadían una etiqueta de porcentaje, con valores como 100, o 20 para una implantación parcial. Un `pct=100` que se quedó en el registro no hace daño, pero las implantaciones por porcentaje ya no forman parte del estándar.

**Solución:** quita las etiquetas de porcentaje antiguas. Usa `t=y` si necesitas una política más suave mientras haces cambios.

## Preguntas frecuentes

**¿De verdad necesito un registro DMARC?**
Sí, si envías correo a cuentas personales de Gmail o de Outlook. Google y Microsoft exigen a los remitentes de 5.000 o más correos al día que publiquen un registro DMARC, con el dominio From alineado. Los remitentes más pequeños también deberían tener uno. Un registro `p=none` con `rua` no cuesta nada, y los informes te muestran quién envía correo en tu nombre.

**¿Cómo compruebo mi registro DMARC?**
Ejecuta `dig TXT _dmarc.yourdomain.com +short` en tu terminal, o `nslookup -type=TXT _dmarc.yourdomain.com` en Windows. El resultado debería ser tu registro, empezando por `v=DMARC1`. También puedes enviar un correo de prueba a una cuenta de Gmail, abrirlo y elegir "Mostrar original". Ahí se ve si DMARC pasó.

**¿Qué significa que DMARC falle?**
Significa que el correo no pasó ninguna de las dos comprobaciones. Ni SPF ni DKIM pasaron para un dominio que coincida con el dominio From visible. Los receptores siguen entonces tu política. Algunos devuelven un rechazo claro, como `550 5.7.1 Email rejected per DMARC policy for example.com`. Puedes encontrar la causa si sabes [leer el mensaje de rebote](/blog/550-5-7-1-error). Gmail usa el código de error `4.7.31` cuando falta el registro DMARC, y `4.7.32` cuando el dominio From no coincide.

**¿Puedo tener más de un registro DMARC?**
No. Un dominio solo puede publicar un registro DMARC. La RFC 9989 dice que, si un servidor de destino encuentra más de uno, debe descartarlos todos. Tu dominio se queda entonces sin política DMARC. Edita tu registro existente en lugar de añadir otro.

**¿DMARC detiene los dominios parecidos?**
No. DMARC solo protege el dominio exacto que está en tu DNS. No puede impedir que alguien registre un dominio que se parece al tuyo, por ejemplo uno con dos letras cambiadas de sitio o con otra terminación como .net. Tampoco puede impedir un nombre visible falso. Los dominios parecidos necesitan otras medidas, como vigilar los registros de dominios nuevos que copian tu nombre.

Un registro DMARC demuestra que tu correo viene de ti de verdad. No sirve cuando envías a direcciones que ya no existen. Pasa tu lista por [Giggal.ai](/email-list-cleaning) (en inglés) antes de tu próximo envío para eliminar las direcciones no válidas y mantener baja tu tasa de rebote.
