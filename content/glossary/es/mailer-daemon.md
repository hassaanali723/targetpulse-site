---
title: Mailer-Daemon
description: Qué es un mensaje de Mailer-Daemon, por qué lo recibes, cómo leer el código que contiene y qué hacer cuando recibes uno por un correo que no enviaste.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-09-29
keyword: mailer daemon
short: El Mailer-Daemon es la parte de un servidor de correo que envía mensajes automáticos. La mayoría de esos mensajes son avisos de rebote. Un mensaje del Mailer-Daemon significa que un correo que enviaste no se entregó.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Quita las direcciones que rebotan antes de enviar
---

## Qué es un Mailer-Daemon

Un daemon es un programa que se ejecuta en segundo plano en un servidor. El Mailer-Daemon es el programa que gestiona los correos que no se pueden entregar. Cuando tu correo se rechaza, el Mailer-Daemon te envía un aviso. El nombre del remitente suele ser `MAILER-DAEMON@` seguido del dominio del servidor, o `postmaster@`.

El aviso se llama [informe de no entrega](/glossary/ndr). Te dice qué dirección falló, cuándo falló y por qué.

## Cómo leer el mensaje

La parte importante del mensaje es el código. Busca un número de tres cifras y un número con puntos. Ejemplo: `550 5.1.1`.

- Un código que empieza por **5** es un [hard bounce](/glossary/hard-bounce). La dirección no existe o el servidor bloqueó tu correo. No reenvíes hasta saber cuál de los dos casos es.
- Un código que empieza por **4** es un [soft bounce](/glossary/soft-bounce). El buzón está lleno o el servidor está ocupado. Tu servidor de correo reintenta por sí solo.

El texto junto al código lo escribe el servidor receptor. Dos ejemplos:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft: `5.4.1 Recipient address rejected: Access denied`. La documentación de Microsoft dice que esto significa "the recipient's address doesn't exist", es decir, la dirección del destinatario no existe.

## Mensajes de Mailer-Daemon por correos que no enviaste

A veces recibes un aviso de rebote por un correo que nunca enviaste. Esto se llama [backscatter](/glossary/backscatter). Un spammer puso tu dirección en el campo De de sus correos. Cuando esos correos rebotan, los avisos te llegan a ti.

Tu cuenta no ha sido hackeada. La solución está en tu dominio. Publica registros SPF, DKIM y DMARC. Así los servidores receptores pueden rechazar los correos falsos en lugar de enviarte avisos de rebote.

## Por qué importa para los remitentes

Cada mensaje de Mailer-Daemon es un rebote. Los proveedores de correo cuentan cuántos de tus correos van a direcciones que no existen. Muchos avisos `5.1.1` les dicen que no has comprobado tu lista.

## Cómo ayuda un verificador

Un [comprobador de direcciones de correo](/email-checker) pregunta al servidor receptor si acepta correo para una dirección. Lo hace antes de que envíes nada. El servidor devuelve el mismo código que el Mailer-Daemon te enviaría después. La diferencia es que no se envió ningún correo y tu reputación no cambia.
