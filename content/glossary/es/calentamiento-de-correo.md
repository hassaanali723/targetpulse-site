---
title: Calentamiento de correo (email warm up)
description: Qué es el warm up de email, por qué un dominio nuevo lo necesita, un calendario de ejemplo, herramientas de calentamiento y los errores que lo arruinan.
slug: calentamiento-de-correo
date: 2026-10-12
updated: 2026-10-12
keyword: warm up email
short: El calentamiento de correo, o email warm up, es aumentar poco a poco cuántos correos envía una dirección o un dominio nuevo. Así los proveedores de correo, como Gmail y Outlook, conocen al remitente y empiezan a confiar en él antes de los envíos grandes.
related: ip-warming, domain-reputation, sender-reputation, deliverability, bounce-rate, spam-filter
cta: Verifica tu lista antes de tu primera campaña real
---

## ¿Qué es el calentamiento de correo?

El calentamiento de correo, en inglés email warm up, es un plan para empezar a enviar con una dirección o un dominio nuevo. En lugar de enviar miles de correos el primer día, envías pocos. Después aumentas la cantidad semana a semana.

Un dominio es el nombre que va después de la @ en una dirección, por ejemplo ejemplo.com. El objetivo del calentamiento es que el dominio tenga un historial de envíos limpios antes de enviar mucho.

## Por qué un dominio nuevo necesita calentamiento

Gmail, Outlook y Yahoo deciden dónde poner un correo en parte por el historial del remitente. Un dominio nuevo no tiene historial. Los proveedores no saben si detrás hay una empresa real o alguien que envía spam.

Por eso son prudentes con los dominios nuevos. Si un dominio nuevo envía de pronto miles de correos, eso se parece a lo que hacen los que envían spam. El correo puede ir a la carpeta de spam o ser rechazado.

Con el calentamiento, el proveedor ve pocos correos al principio. Ve que la gente los abre, que no rebotan y que nadie se queja. Con el tiempo, la [reputación del dominio](/glossary/domain-reputation) crece y puedes enviar más.

## Un calendario de calentamiento de ejemplo

Esta tabla es solo un ejemplo para un dominio nuevo que envía correo a personas una a una, como un equipo de ventas. Los calendarios reales cambian según el proveedor, el tipo de correo y cómo responde la gente.

| Semana | Correos al día por dirección (ejemplo) |
|---|---|
| Semana 1 | Unos 20 |
| Semana 2 | Unos 40 |
| Semana 3 | Unos 60 |
| Semana 4 | Unos 80 |
| Semana 5 en adelante | Sube poco a poco si las métricas siguen bien |

En cada paso, mira tus resultados antes de subir. Si los rebotes o las quejas aumentan, mantén el mismo volumen o bájalo. No subas hasta que vuelvan a estar bajos.

## Calentamiento manual y herramientas de calentamiento

Hay dos formas de calentar un dominio.

**Calentamiento manual.** Tú envías correos reales a personas reales, en cantidades pequeñas al principio. Empiezas por los contactos que más probablemente responderán, como clientes actuales. Así los primeros envíos tienen buenas aperturas y respuestas.

**Herramientas de calentamiento.** Son servicios que conectan tu buzón a una red de buzones de otros usuarios. La herramienta envía correos entre esos buzones de forma automática. Los buzones de la red abren los correos, los responden y los sacan de la carpeta de spam si caen allí. El objetivo es crear actividad positiva en tu dominio.

Las dos formas se usan. Las herramientas ahorran tiempo, pero la actividad que crean no viene de tus contactos reales. El calentamiento manual es más lento, pero se basa en personas que de verdad quieren tu correo.

## Calentamiento de correo y calentamiento de IP

Son dos cosas parecidas, pero no iguales:

- **El calentamiento de correo** construye la reputación de un dominio o de una dirección de correo.
- **El [calentamiento de IP](/glossary/ip-warming)** construye la reputación de una dirección IP nueva. Una dirección IP es el número que identifica a un servidor en internet. Se usa cuando una empresa pasa a enviar desde una IP dedicada, solo para ella.

Si usas un proveedor de correo con IP compartidas, normalmente no tienes que calentar la IP. Sí conviene calentar un dominio nuevo.

## Errores que arruinan el calentamiento

- **Enviar a una lista sin verificar.** En la primera semana envías a 20 direcciones al día. Si 5 no existen, tu primer historial está lleno de rebotes. Los proveedores ven un dominio nuevo con muchos rebotes, y eso es justo lo que el calentamiento quería evitar.
- **Subir el volumen de golpe.** Pasar de 40 correos al día a 500 en una semana es el tipo de salto que los proveedores ven como sospechoso.
- **Enviar a una lista comprada.** Contiene direcciones muertas, [spam traps](/glossary/spam-trap) y personas que nunca pidieron tu correo.
- **No configurar la autenticación.** Antes del primer envío, configura [SPF](/glossary/spf), [DKIM](/glossary/dkim) y [DMARC](/glossary/dmarc) en el dominio nuevo.

## Calentamiento de correo y verificación de correo

Verifica la lista antes de la primera campaña real con el dominio nuevo. El [validador de correos masivos](/bulk-email-verifier) comprueba la lista entera y te dice qué direcciones no existen. Para comprobar un contacto suelto antes de escribirle, usa el [validador de correo](/email-checker). La [verificación de correo](/) no calienta el dominio por ti. Evita que los rebotes estropeen el historial que estás construyendo en las primeras semanas.
