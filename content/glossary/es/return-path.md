---
title: Return-Path
description: Qué es la dirección Return-Path, en qué se diferencia de la dirección De, adónde van los mensajes de rebote y por qué SPF y DMARC la comprueban. Con un ejemplo sencillo.
slug: return-path
date: 2026-10-22
updated: 2026-10-22
keyword: return path
short: El Return-Path es la dirección adonde van los mensajes de rebote. La define el servidor que envía, y muchas veces es distinta de la dirección De que ves en tu bandeja de entrada. SPF comprueba el dominio del Return-Path.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: Quita las direcciones muertas antes de que reboten
---

## ¿Qué es el Return-Path?

El Return-Path es la dirección adonde van los mensajes de rebote. Un mensaje de rebote es el aviso automático que envía un servidor cuando un correo no se puede entregar.

Cada correo tiene dos direcciones de remitente. La primera es la dirección **De**. Es el nombre y la dirección que el lector ve en su bandeja de entrada. La segunda es el **Return-Path**. Los lectores no la ven. La usan los servidores de correo.

Piensa en una carta de papel. La carta dentro del sobre tiene tu nombre arriba. Esa es la dirección De. El sobre tiene un remitente en una esquina. El correo postal lo usa solo cuando no puede entregar la carta. Ese es el Return-Path.

El Return-Path también se llama remitente del sobre (envelope sender) o dirección de rebote (bounce address). El servidor que envía se lo da al servidor receptor al inicio de la entrega. Después, el servidor receptor lo escribe en una línea al principio del correo que empieza con `Return-Path:`.

## Un ejemplo sencillo

Así funciona el Return-Path cuando un correo rebota.

1. **Tomás envía un boletín.** Tomás tiene una panadería. Envía un boletín mensual a través de un proveedor de servicios de correo. Un proveedor es una empresa que envía correo masivo por ti.
2. **Se definen dos direcciones.** La dirección De es tom@bakery.example. El proveedor define el Return-Path con su propia dirección de rebote, por ejemplo bounces@mail.provider.example.
3. **Una clienta ya no está.** Una clienta de la lista cambió de trabajo. Su dirección anterior ya no existe.
4. **El rebote va al Return-Path.** El servidor receptor envía el aviso de rebote a bounces@mail.provider.example, no a Tomás.
5. **El proveedor actúa.** El proveedor lee el rebote y deja de enviar a esa dirección. Tomás nunca ve el aviso.

Por eso los rebotes de los boletines muchas veces no llegan a tu bandeja de entrada. Van al Return-Path, y tu proveedor los gestiona.

## Return-Path y dirección De

| | Dirección De | Return-Path |
|---|---|---|
| **Quién la ve** | El lector, en su bandeja de entrada | Los servidores de correo |
| **Quién la define** | Tú, o tu programa de correo | El servidor que envía |
| **Para qué sirve** | Mostrar quién envió el correo | Recibir los mensajes de rebote |
| **La comprueba SPF** | No | Sí |

Las dos direcciones pueden ser la misma. Cuando envías un correo normal desde Gmail u Outlook, suelen serlo. Cuando envías a través de un proveedor, suelen ser distintas.

## Cómo encontrar el Return-Path de un correo

Abre los encabezados completos del correo. En Gmail, abre el correo, haz clic en los tres puntos y elige **Mostrar original**. En Outlook, abre las propiedades del mensaje. Busca cerca del principio una línea como esta:

`Return-Path: <bounces@mail.provider.example>`

## Por qué importa para SPF y DMARC

[SPF](/glossary/spf) es una regla en tu dominio que lista los servidores que pueden enviar tu correo. SPF comprueba el dominio del Return-Path. No comprueba la dirección De.

[DMARC](/glossary/dmarc) agrega una segunda prueba. Pregunta si el dominio que pasó SPF coincide con el dominio de la dirección De. Si tu proveedor usa su propio dominio en el Return-Path, SPF puede pasar para el proveedor sin coincidir con tu dominio De.

Muchos proveedores te dejan definir un Return-Path en tu propio dominio. Esto suele llamarse dominio de rebote personalizado (custom bounce domain). Con él, SPF pasa para tu propio dominio, y DMARC puede contar ese resultado.

**Ejemplo:** la dirección De de Tomás está en bakery.example. Su proveedor le deja definir el Return-Path como bounces.bakery.example. Ahora el dominio que pasa SPF coincide con el dominio de la dirección De.

## Cómo ayuda un verificador

Cada rebote de tu lista va al Return-Path. Tu proveedor los cuenta. Cuando vuelven demasiados, muchos proveedores pausan la cuenta o te piden que limpies la lista.

El [verificador de correo](/email-checker) pregunta al servidor receptor si una dirección existe antes de que envíes nada. Las direcciones muertas se quitan primero, así que llegan muchos menos rebotes al Return-Path.
