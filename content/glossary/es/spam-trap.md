---
title: Spam trap
description: Qué es una spam trap, los tres tipos y cómo llega cada uno a una lista, qué pasa cuando envías a una y cómo mantenerlas fuera de tu lista.
slug: spam-trap
date: 2026-09-29
updated: 2026-09-29
keyword: spam trap
short: Una spam trap es una dirección de correo que solo sirve para detectar remitentes. Nadie se registra con ella. Los proveedores de correo y las organizaciones antispam la vigilan. Enviar a una spam trap significa que tu lista se compró, se extrajo o nunca se limpió.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Quita las direcciones muertas antes de que se conviertan en spam traps
---

## Qué es una spam trap

Una spam trap es una dirección de correo que solo existe para detectar remitentes con listas malas. Nadie la usa. Nadie se registró nunca con ella. Cuando un correo llega a una spam trap, la organización que la gestiona sabe una cosa con seguridad. El remitente no obtuvo la dirección de un formulario de registro.

La documentación de Amazon para su servicio de correo dice que las spam traps las gestionan proveedores de internet, proveedores de correo y organizaciones antispam. Las direcciones son secretas. Descubres que enviaste a una después. Tu correo empieza a ir a spam, o tu dirección IP aparece en una [lista negra](/glossary/email-blacklist).

## Los tres tipos de spam trap

**Trampas puras.** Direcciones creadas solo como trampas. Se colocan en páginas web donde las herramientas de extracción las encuentran. Nunca se usan para nada más. Solo las listas extraídas o compradas las contienen.

**Trampas recicladas.** Direcciones reales que se abandonaron. El proveedor cerró la dirección y dejó que el correo rebotara durante un tiempo. Después el proveedor reabrió la dirección como trampa. Amazon las describe como direcciones "that were once valid, but have been unused (and bouncing) for an extended period of time", es decir, que antes eran válidas pero llevan mucho tiempo sin uso y rebotando. Las listas que nunca se limpian acumulan estas con el tiempo.

**Trampas de erratas.** Direcciones en dominios que parecen un dominio real con una errata. Ejemplo: una versión mal escrita del dominio de un proveedor grande. Detectan a los remitentes que no comprueban lo que la gente escribió en el formulario de registro.

## Qué pasa cuando envías a una spam trap

No recibes ningún rebote. La trampa acepta el correo. La organización que gestiona la trampa registra tu dirección IP y tu dominio. Lo que pasa después depende de la organización:

- Tu dirección IP puede entrar en una lista de bloqueo.
- Tu reputación en ese proveedor puede bajar.
- Tu servicio de envío puede poner tu cuenta en revisión.

Amazon no dice cuántos impactos en spam traps provocan acciones. Dice: "even a small number of spamtrap hits can have a very negative effect", es decir, incluso un número pequeño de impactos puede tener un efecto muy negativo.

## Cómo mantener las spam traps fuera de tu lista

Nadie puede darte una lista de direcciones de spam trap. Proteges tu lista con estos pasos:

- No compres, alquiles ni extraigas direcciones. Las trampas puras solo llegan por esta vía.
- Quita toda dirección que haga hard bounce. Hazlo de inmediato. Amazon dice que las quites "long before they are converted to spamtraps", es decir, mucho antes de que se conviertan en trampas.
- Deja de enviar a personas que llevan meses sin abrir ni hacer clic. Las trampas recicladas están entre ellas.
- Comprueba las direcciones en el registro para detectar las erratas mientras la persona sigue en la página.

## Qué puede y qué no puede hacer un verificador

Un [comprobador de direcciones de correo](/email-checker) no puede detectar una spam trap. Una trampa reciclada es un buzón que existe y acepta correo, así que se verifica como válida.

La verificación ayuda de dos formas. Quita las direcciones muertas antes de que se reciclen como trampas. Detecta los dominios con erratas antes del primer envío. No te protege de una lista comprada. Eso es una decisión, no una comprobación.
