---
title: Spam trap
description: Qué es una spam trap, los tres tipos y cómo llega cada uno a una lista, qué pasa cuando envías a una y cómo mantenerlas fuera de tu lista.
slug: spam-trap
date: 2026-09-29
updated: 2026-10-12
keyword: spam trap
short: Una spam trap es una dirección de correo que ninguna persona real usa. Existe solo para detectar a quienes envían correo sin permiso. Si tu correo llega a una spam trap, tu lista se compró, se copió de sitios web o nunca se limpió.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Quita las direcciones muertas antes de que se conviertan en spam traps
---

## ¿Qué es una spam trap?

Una spam trap es una dirección de correo que parece normal, pero nadie la lee. Nadie se registró nunca con ella en un boletín. Nadie se la dio nunca a una empresa.

Por eso, cuando un correo llega a esa dirección, la organización que gestiona la trampa sabe una cosa con seguridad. El remitente no obtuvo la dirección de un formulario de registro. La compró, la copió de un sitio web o la guardó demasiado tiempo en una lista vieja.

¿Quién gestiona las spam traps? La documentación de Amazon para su servicio de envío de correo, Amazon SES, responde a esa pregunta. Dice que las gestionan proveedores de internet, proveedores de correo y organizaciones antispam. Las direcciones son secretas a propósito. Si los remitentes las conocieran, las borrarían de sus listas.

## Un ejemplo sencillo

Así es como una empresa envía correo a una spam trap sin darse cuenta.

1. **Una tienda compra una lista.** La "Tienda Sol" compra una lista de 10.000 direcciones a un sitio web que vende datos de contacto.
2. **La lista contiene una trampa.** Una de esas direcciones es info@pagina-oculta.example. Una organización antispam la puso en una página web hace años. Ninguna persona la usó nunca.
3. **La tienda envía una promoción.** El correo sale hacia las 10.000 direcciones, también hacia la trampa.
4. **Nada parece fallar.** La trampa no devuelve el correo. Lo acepta como cualquier buzón normal. La tienda no ve ningún error.
5. **La trampa registra al remitente.** La organización anota el dominio de la tienda y su dirección IP. El dominio es la parte de la dirección que va después de la @. La dirección IP es el número que identifica al servidor que envió el correo. Un servidor es la computadora que envía o recibe los correos.
6. **Los problemas llegan después.** Unos días más tarde, más correos de la tienda van a la carpeta de spam. Algunos clientes dejan de recibir sus confirmaciones de pedido.

La tienda nunca recibe un aviso que diga "enviaste a una spam trap". Solo ve el resultado. Su correo empieza a ir a spam, o su dirección IP aparece en una lista negra.

## Los tres tipos de spam trap

### 1. Trampas puras (nadie las usó nunca)

Estas direcciones se crearon solo para ser trampas. Se esconden en páginas web. Allí las encuentran las herramientas que copian direcciones de internet, llamadas herramientas de extracción.

**Ejemplo:** la dirección contacto-7731@algun-dominio.example aparece en el código de una página web. Un visitante real no la ve. Una herramienta de extracción sí la copia.

Solo las listas compradas o extraídas contienen trampas puras. Una persona que se registró en tu sitio web nunca puede ser una.

### 2. Trampas recicladas (direcciones viejas que volvieron como trampas)

Estas direcciones fueron reales. Después la persona dejó de usarlas. Durante un tiempo, el proveedor de correo rebotó todo lo que llegaba a ellas. Rebotar significa devolver el correo al remitente como no entregable. Después el proveedor reabrió la dirección como trampa.

Amazon las describe como direcciones "that were once valid, but have been unused (and bouncing) for an extended period of time". Es decir, antes eran válidas, pero llevan mucho tiempo sin uso y rebotando.

**Ejemplo:** Sofía se registró en tu boletín en 2019 con sofia.m@trabajoanterior.example. Después dejó ese trabajo. Su dirección empezó a rebotar, pero seguiste enviando. Años después, la dirección se convierte en trampa. Tu siguiente correo cae en ella.

Las listas que nunca se limpian acumulan trampas recicladas con el tiempo.

### 3. Trampas de erratas (errores en el dominio)

Estas trampas están en dominios que se parecen a un dominio conocido, pero con una errata.

**Ejemplo:** una persona escribe su dirección en tu formulario de registro. Se equivoca en una letra del dominio. El dominio se parece al de un proveedor de correo grande, pero no es el mismo. Si ese dominio mal escrito funciona como trampa, cada correo que envías a esa dirección queda registrado.

Las trampas de erratas detectan a los remitentes que no comprueban lo que la gente escribe en sus formularios.

## Qué pasa cuando envías a una spam trap

No recibes ningún rebote. La trampa acepta el correo como un buzón normal. Después, la organización que la gestiona registra tu dirección IP y tu dominio.

Lo que pasa después depende de quién gestiona la trampa:

- **Tu dirección IP o tu dominio pueden entrar en una [lista negra](/glossary/email-blacklist).** Muchos servidores de correo consultan estas listas. Rechazan el correo de quien aparece en ellas.
- **Tu reputación en ese proveedor puede bajar.** Entonces más correos tuyos van a la carpeta de spam.
- **Tu servicio de envío puede revisar tu cuenta.** Puede pausar tus envíos hasta que limpies tu lista.

¿Cuántos impactos en spam traps hacen falta? Amazon no da una cifra. Dice: "even a small number of spamtrap hits can have a very negative effect". Es decir, incluso unos pocos impactos pueden tener un efecto muy negativo.

## Cómo mantener las spam traps fuera de tu lista

Nadie puede darte una lista de direcciones de spam trap, porque son secretas. Por eso proteges tu lista con estos hábitos:

1. **No compres, alquiles ni extraigas direcciones.** Las trampas puras solo llegan a una lista por esta vía.
2. **Quita de inmediato toda dirección que haga [hard bounce](/glossary/hard-bounce).** Un hard bounce significa que la dirección no existe. Amazon dice que las quites "long before they are converted to spamtraps", es decir, mucho antes de que se conviertan en trampas.
3. **Deja de enviar a quien lleva meses sin abrir ni hacer clic.** Las trampas recicladas se esconden entre las direcciones viejas e inactivas.
4. **Comprueba las direcciones en el registro.** Una errata detectada en la página de registro nunca se convierte en una trampa de erratas en tu lista.

## Qué puede y qué no puede hacer un verificador

Un [validador de correo](/email-checker) no puede saber si una dirección es una spam trap. Una trampa reciclada es un buzón que existe y acepta correo, así que se verifica como válida.

La [verificación de correo](/) ayuda de dos formas. Encuentra las direcciones que ya no existen, para que las quites antes de que se reciclen como trampas. También detecta los dominios con erratas antes del primer envío. Para revisar una lista entera, súbela al [validador de correos masivos](/bulk-email-verifier). No te protege de una lista comprada. Eso es una decisión, no una comprobación.
