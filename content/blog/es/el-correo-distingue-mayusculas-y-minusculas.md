---
title: "¿El correo electrónico distingue mayúsculas y minúsculas?"
seoTitle: "¿El correo distingue mayúsculas y minúsculas? (Gmail y Outlook)"
description: "Casi nunca: Gmail y Outlook ignoran las mayúsculas, pero el estándar permite distinguirlas antes de la @. Cuándo importa y cómo guardar las direcciones."
slug: el-correo-distingue-mayusculas-y-minusculas
date: 2026-10-19
updated: 2026-10-19
keyword: el correo distingue mayúsculas y minúsculas
image: /blog/covers/es/el-correo-distingue-mayusculas-y-minusculas.webp
imageAlt: Portada sobre si el correo distingue mayúsculas, con las reglas para dominios, Gmail, Outlook y bases de datos
cta: Comprueba que tus direcciones existen de verdad
---

Las direcciones de correo casi nunca distinguen mayúsculas y minúsculas. Si escribes John.Smith@gmail.com o john.smith@gmail.com, el correo llega a la misma bandeja de entrada. La parte después de la @ ignora las mayúsculas por completo. La excepción es la parte antes de la @. Técnicamente, el estándar del correo permite que un servidor trate Smith y smith como dos personas distintas. Conviene saberlo si gestionas un formulario de registro o una lista de correo.

## La parte después de la @ nunca distingue mayúsculas

El nombre de dominio que va después de la @ nunca distingue mayúsculas y minúsculas. La RFC 5321 dice que los dominios de los buzones siguen las reglas normales del DNS, y el DNS ignora si una letra es mayúscula o minúscula. Eso significa que GMAIL.COM, Gmail.com y gmail.com apuntan exactamente al mismo servidor de correo. Puedes escribir el dominio en mayúsculas o en minúsculas sin cambiar a dónde va tu mensaje.

## ¿El correo distingue mayúsculas antes de la @?

La parte local, el nombre de usuario a la izquierda de la @, funciona de otra forma. Según la sección 2.4 de la RFC 5321, "la parte local de un buzón DEBE tratarse como sensible a mayúsculas y minúsculas". Los servidores que transmiten tu mensaje deben mantener las mayúsculas y las minúsculas tal como están escritas. El servidor de destino que tiene el buzón decide si `Smith` y `smith` son dos personas distintas.

La misma sección también advierte de que "explotar la distinción entre mayúsculas y minúsculas en las partes locales de los buzones dificulta la interoperabilidad y se desaconseja". Imagina a dos compañeros de una misma empresa, JSmith@ y jsmith@, y cuántas veces se mezclaría su correo. Los grandes proveedores evitan ese problema ignorando las mayúsculas por completo.

## Gmail y Outlook

Los proveedores que gestionan la mayor parte del correo personal decidieron ignorar las mayúsculas por completo. Los expertos de producto de la comunidad de ayuda de Gmail confirman que Gmail ignora las mayúsculas, tanto al crear una cuenta como al recibir correo. Si alguien escribe a `JaneDoe@gmail.com` o a `janedoe@gmail.com`, Google entrega los dos al mismo buzón. Google también trata `@googlemail.com` y `@gmail.com` como la misma dirección.

Gmail también ignora los puntos en las direcciones personales, así que `jane.doe@gmail.com` y `janedoe@gmail.com` llegan a la misma bandeja de entrada. Pero no des por hecho que eso vale en todas partes. La documentación de Google dice que los puntos sí importan en las cuentas de Google Workspace gestionadas a través de dominios de trabajo o de centros educativos. Los puntos y las mayúsculas son reglas distintas. No supongas que otro proveedor ignora los puntos solo porque Gmail lo hace.

La respuesta de Microsoft es parecida. En una respuesta en el foro de soporte de Microsoft, quien responde explica tres cosas. La parte después de la @ nunca distingue mayúsculas. Que el nombre de usuario las distinga depende del proveedor. Y los grandes proveedores como Outlook y Gmail las ignoran. La misma respuesta añade que algunas empresas sí tienen servidores propios que distinguen mayúsculas.

## Cuándo las mayúsculas pueden causar problemas

El problema suele aparecer en el inicio de sesión. Imagina que te registras como `Sarah@example.com` en un móvil porque el teclado puso la primera letra en mayúscula. Más tarde inicias sesión escribiendo `sarah@example.com`. Un sistema mal diseñado dice que no encuentra la cuenta. El usuario no cambió su dirección. El formulario de inicio de sesión comparó el texto distinguiendo mayúsculas de forma estricta.

Las listas y los CRM tienen su propia versión del problema. Cuando alguien se registra como `Bob@company.com` y más tarde descarga una guía como `bob@company.com`, muchas plataformas cuentan dos leads distintos. Eso infla tus métricas y envía campañas duplicadas a la misma persona. Elimina los duplicados ignorando las mayúsculas antes de [verificar o enviar](/email-list-cleaning) (en inglés) a una lista de marketing.

Luego está el caso raro del servidor de empresa que sí trata las mayúsculas de forma estricta, la excepción que menciona la respuesta de Microsoft. Si un contacto escribe su dirección como `M.MacDonald@specialtycorp.com` en una tarjeta de visita, mantén esas mayúsculas cuando le escribas. No afecta a los sistemas estándar y evita problemas de entrega en los sistemas que sí las distinguen.

## Si guardas direcciones de correo

Si desarrollas aplicaciones web o gestionas bases de datos de contactos, usa un método que conserve las mayúsculas. Guarda la dirección tal como la escribió el usuario. Pero haz todas las comparaciones, búsquedas y comprobaciones de unicidad en minúsculas.

Conservar el texto original respeta cómo quiere el usuario que se muestre su dirección en el perfil y en los encabezados del correo. Normalizar a minúsculas evita las cuentas duplicadas. Si alguien se registra como `IStillUse@AOL.COM`, no pases su nombre visible a minúsculas. Pero trata `iSTilLUSE@aol.com` como un duplicado de esa dirección.

Para la unicidad en PostgreSQL, indexa la expresión en minúsculas en lugar de añadir una restricción única simple:

```sql
CREATE UNIQUE INDEX users_email_lower ON users (lower(email));
```

PostgreSQL también ofrece la extensión `citext`, que compara cadenas sin distinguir mayúsculas. En MySQL, la intercalación por defecto (`utf8mb4_0900_ai_ci`) ya no distingue mayúsculas, así que las claves únicas estándar detectan los duplicados por mayúsculas sin funciones extra.

Ten cuidado con un fallo al pasar a minúsculas en los lenguajes de backend, sobre todo en Java. En Java, llamar a `email.toLowerCase()` usa la configuración regional por defecto del servidor. Con una configuración regional turca, la letra latina mayúscula `I` se convierte en `ı` (una i minúscula sin punto) en lugar de `i`. Eso rompe direcciones como `INFO@example.com`. Para evitar este error, pasa `Locale.ROOT`:

```java
// Locale.ROOT avoids language-specific letter mapping like Turkish dotless i
String cleanEmail = email.toLowerCase(Locale.ROOT);
```

El `toLowerCase()` de JavaScript no tiene este problema, porque usa las correspondencias por defecto de Unicode y no la configuración regional del equipo. Solo `toLocaleLowerCase()` depende de la configuración regional.

Para detectar formatos rotos y entradas incorrectas antes de que lleguen a tu base de datos, valida las direcciones con una [API de validación de correo](/email-validation-api) (en inglés) en el registro. Detecta erratas y dominios muertos mientras la persona sigue en la página.

## Preguntas frecuentes

**¿Gmail distingue mayúsculas y minúsculas?**
No. Gmail ignora las mayúsculas al crear cuentas y al entregar mensajes. Si tu dirección es john.doe@gmail.com, recibirás los mensajes enviados a JOHN.DOE@gmail.com y a John.Doe@googlemail.com. No puedes registrar una cuenta nueva cuyas letras solo se diferencien en mayúsculas de las de un usuario existente.

**¿Importa si escribo mi correo con mayúsculas?**
Para enviar de forma normal a bandejas personales y de empresa, las mayúsculas no impiden la entrega. El servidor de destino ignora las mayúsculas y entrega el mensaje con normalidad. Solo debes tener cuidado con los formularios de inicio de sesión que comparan las direcciones como cadenas exactas.

**¿Un ID de correo distingue mayúsculas y minúsculas?**
En la práctica, no. Un ID de correo es solo otro nombre para una dirección de correo, y Gmail, Outlook y los demás grandes proveedores ignoran sus mayúsculas. El estándar permite que un servidor trate como distintas las mayúsculas antes de la @, pero es raro. Escribir tu ID con mayúsculas para que se lea mejor casi seguro no te hará perder ningún correo.

**¿Debo guardar las direcciones de correo en minúsculas?**
Debes comparar e indexar las direcciones en minúsculas para evitar cuentas duplicadas y fallos de inicio de sesión. Si guardas las mayúsculas originales del usuario en una columna de visualización, puedes dar un formato limpio a las notificaciones. Si solo puedes guardar una columna, guarda la dirección tal como se escribió y compárala con lower(). Así no pierdes el original.

**¿Las mayúsculas pueden hacer que un correo rebote?**
Muy rara vez. Solo pasa en un servidor poco habitual configurado para tratar Admin@ y admin@ como buzones distintos. Si una dirección con mayúsculas rebota, busca primero otra causa, como una errata o un buzón que ya no existe. El código del mensaje de rebote te dice cuál es, como se explica en [rebote duro vs rebote suave](/blog/hard-bounce-vs-soft-bounce).

Las mayúsculas no impiden que un correo llegue, pero [una errata](/email-checker) sí. Si vas a limpiar una lista de contactos antes del próximo envío, pásala por [Giggal.ai](/email-list-cleaning) (en inglés) para detectar antes los buzones muertos y los dominios rotos.
