---
title: Correo catch-all
description: Qué es un dominio de correo catch-all, por qué las empresas lo configuran, por qué una comprobación de correo normal no puede confirmar sus direcciones y qué hacer con ellas.
slug: correo-catch-all
date: 2026-10-22
updated: 2026-10-22
keyword: correo catch all
short: Un dominio de correo catch-all acepta el correo enviado a cualquier dirección, incluso a nombres que no existen. Como el servidor dice que sí a todo, una comprobación de correo normal no puede saber si un buzón concreto es real.
related: mx-record, smtp, hard-bounce, greylisting, secure-email-gateway, email-blacklist
cta: Obtén una respuesta real sobre las direcciones catch-all
---

## ¿Qué es un correo catch-all?

Un dominio de correo catch-all acepta el correo enviado a cualquier dirección de ese dominio. No hace falta que la dirección exista.

La mayoría de los dominios rechazan el correo enviado a un nombre que no tienen. Un dominio catch-all no. Acepta el correo y lo pone en un buzón compartido, o a veces lo borra sin avisar a nadie.

Otros nombres para la misma configuración son **accept-all** y **dominio catch-all**. Muchas herramientas de verificación marcan estas direcciones como "catch-all", "accept-all" o "riesgosa".

## Un ejemplo sencillo

1. **Acme configura un catch-all.** Acme es una empresa pequeña con el dominio acme.example. Su encargada de oficina activa el catch-all para que no se pierda ningún correo de clientes.
2. **Sara escribe a una persona real.** Envía un correo a jon@acme.example. Jon trabaja ahí. Recibe el correo.
3. **Sara comete un error al escribir.** La vez siguiente escribe jonn@acme.example. Esa persona no existe.
4. **El servidor igual dice que sí.** El correo no rebota. Llega al buzón compartido, y puede que nadie lo lea.

Sara no ve ningún error, así que cree que los dos correos llegaron. Solo uno llegó a Jon.

## Por qué las empresas usan catch-all

Las empresas activan el catch-all para no perder correos. Los clientes cometen errores al escribir. Los nombres de empleados que ya se fueron siguen recibiendo correo. Un catch-all guarda todo en un solo lugar.

## Por qué el catch-all es un problema para la verificación de correo

Una comprobación de correo normal le hace al servidor una sola pregunta: "¿Aceptas correo para esta dirección?" En un dominio catch-all, la respuesta siempre es sí. Una persona real y un nombre inventado reciben la misma respuesta.

Por eso una comprobación básica no puede confirmar el buzón. Solo puede decir que el dominio acepta todo.

Esto importa sobre todo en las listas B2B. En una prueba publicada con 10.000 correos de empresa reales, el 28% estaba en dominios catch-all. La prueba la hizo LeadMagic, una empresa que vende verificación de correo, así que tómala como la prueba de un proveedor.

## Qué hacer con las direcciones catch-all

Tienes tres opciones:

| Opción | Qué pasa |
|---|---|
| **Quitarlas** | Ningún riesgo, pero también pierdes contactos reales |
| **Enviarles correo** | Algunos correos llegan a personas reales, otros se pierden o rebotan más tarde |
| **Comprobarlas a fondo** | Un verificador que va más allá de la comprobación básica separa las reales de las falsas |

## Cómo ayuda un verificador

Giggal.ai hace la [verificación catch-all](/catch-all-verification) en cada comprobación. Usa señales adicionales para dar un resultado real, entregable o no entregable, en lugar de una etiqueta "riesgosa". Para una guía más larga con más ejemplos, lee [qué es una dirección de correo catch-all](/blog/what-is-a-catch-all-email-address).
