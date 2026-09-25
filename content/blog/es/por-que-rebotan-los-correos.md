---
title: "¿Por qué rebotan los correos? Causas y qué hacer"
description: Por qué rebotan los correos, rebote duro frente a rebote suave, las causas más comunes en campañas en frío, qué significa un correo rebotado y qué hacer.
slug: por-que-rebotan-los-correos
date: 2026-09-23
keyword: por qué rebotan los correos
image: /blog/covers/es/por-que-rebotan-los-correos.webp
imageAlt: ¿Por qué rebotan los correos? Causas y qué hacer
cta: Baja tu tasa de rebote antes del próximo envío
---

Los correos en frío rebotan cuando el servidor que los recibe rechaza el mensaje y lo devuelve en lugar de entregarlo. Si acabas de lanzar una campaña y quieres saber por qué rebotan los correos en frío más que tu correo normal, casi todo se reduce a dos cosas. Escribes a personas que nunca pidieron saber de ti, así que la lista es más fría y menos precisa, y envías desde un dominio con el que el servidor del destinatario no tiene historial. Las causas concretas están debajo de esas dos.

## ¿Qué es un correo rebotado?

Un correo rebotado es un mensaje que el servidor de correo receptor rechazó y devolvió con un código de motivo, en lugar de dejarlo en un buzón. La respuesta viene del servidor, no de la persona, y llega como un informe de no entrega (NDR) a la bandeja del remitente o al registro de rebotes de la herramienta de envío. El código de ese informe es la parte útil: un código 5xx es un rechazo permanente, un código 4xx es temporal. Casi todas las dudas sobre qué significa un correo rebotado se resuelven leyendo ese código.

## El rebote duro y el rebote suave no son el mismo problema

Lo primero es comprobar qué tipo de rebote recibiste, porque cambia lo que haces después.

Un rebote duro (hard bounce) es permanente. La dirección no existe, el dominio no existe o el servidor la rechazó sin más. Un mensaje con rebote duro nunca se entregará, y la dirección debe salir de tu lista de inmediato. Un rebote suave (soft bounce) es temporal. El buzón estaba lleno, el servidor estaba ocupado o el mensaje se retuvo para revisarlo. Los rebotes suaves a veces se resuelven solos, y la herramienta de envío suele reintentarlos por ti.

La distinción importa por la reputación. Los proveedores de correo observan con qué frecuencia envías a direcciones que dan rebote duro, y un patrón repetido te marca como alguien que trabaja con una lista mala. Una dirección muerta es ruido. Una campaña llena de ellas es una señal.

## Las causas habituales, de la más común a la menos

Los rebotes se concentran en un puñado de causas. Más o menos en el orden en que aparecen en las campañas en frío:

- La dirección ya no existe. La gente cambia de trabajo y el buzón se elimina, mientras el contacto sigue vivo en una base de datos que compraste o extrajiste de la web.
- El dominio ya no existe. Las empresas pequeñas cierran, su dominio deja de resolver y no queda ningún servidor que acepte nada.
- El buzón está lleno. Frecuente en direcciones descuidadas o personales, y casi siempre un rebote suave.
- El servidor receptor rechazó tu dominio de envío. Es un bloqueo por reputación o por política, no un problema del destinatario.
- Greylisting. El servidor rechaza temporalmente un primer intento de un remitente desconocido y acepta el reintento unos minutos después.
- Filtro antispam. El mensaje se rechazó por contenido o por política antes de llegar a la bandeja de entrada.

El orden importa porque las dos primeras, direcciones muertas y dominios muertos, son las que detecta la verificación, y también las más comunes en una lista comprada o extraída de la web. Las causas de más abajo tienen más que ver con el momento del envío y con tu propia configuración que con la dirección.

A menudo puedes leer la causa directamente en el mensaje de rebote. Una línea como 550 5.1.1 user unknown es un rebote duro de una dirección que no existe. Un 451 4.7.1 greylisted, try again later es un rechazo suave y temporal que suele resolverse en el reintento. Aprender a leer el código te ahorra adivinar el motivo.

## ¿Qué significa "correo devuelto"?

Correo devuelto es el nombre de todos los días para lo mismo: tu mensaje volvió a ti. La redacción del informe cambia según el proveedor. Gmail dice "Address not found", Microsoft 365 dice "Recipient address rejected" y los servidores tipo Postfix citan la línea SMTP en bruto, 550 5.1.1 User unknown. Las tres significan que el buzón no está. Un correo devuelto que menciona "mailbox full", "greylisted" o "try again later" es temporal y suele resolverse con el reintento que hace tu herramienta de envío.

## No todo rebote es un problema de la lista

Es tentador leer cada rebote como una dirección mala, pero una parte real de los rebotes en frío no tiene nada que ver con tu lista. Si tu dominio de envío es nuevo y no se ha calentado, los servidores lo tratan con desconfianza y rechazan más correo. Un dominio recién creado que envía unos cientos de correos en frío el primer día verá rebotes que un dominio de seis meses con la misma lista no vería. Si tus registros SPF, DKIM o DMARC faltan o están mal configurados, algunos proveedores te rechazan antes de mirar siquiera al destinatario.

Ninguna de esas dos cosas se arregla limpiando direcciones. Son problemas del lado del remitente, y aparecen como rebotes idénticos a los de una dirección muerta hasta que lees el motivo que hay detrás.

## ¿Qué hago con un correo rebotado?

Una sola dirección: lee el código. Un 5.1.1 o "user unknown" significa que el buzón ya no existe; quítalo y, si el contacto importa, busca su dirección actual en lugar de reintentar. Un 4.x.x o "mailbox full" significa esperar; tu herramienta reintenta sola. Un 5.7.1 o "blocked" apunta a tu dominio de envío, no al destinatario, así que revisa SPF, DKIM y DMARC antes de enviar nada más. Si no sabes si una dirección sigue activa, puedes [validar el correo](/email-checker) gratis antes de volver a escribir.

## Qué hacer después de que una campaña rebote

Empieza sacando de tu lista cada rebote duro y no vuelvas a escribir a esas direcciones. No las reintentes ni las dejes para el próximo envío esperando que se recuperen, porque no lo harán, y cada intento repetido te cuesta reputación. Deja en paz los rebotes suaves; tu herramienta de envío gestiona esos reintentos.

Después mira la proporción. Si una parte grande de una lista nueva rebotó en el primer envío, la lista ya era mala antes de que la tocaras, y la solución está antes, donde recoges o compras las direcciones. Limpiar después ayuda al siguiente envío, pero no deshace el golpe a la reputación de este.

## El origen de la lista suele ser la verdadera historia

De dónde viene una lista predice cómo va a rebotar. Una lista exportada de tu propio CRM, con personas que ya te han respondido, rebota muy poco. Una lista extraída de la web o comprada a un proveedor rebota mucho más, porque las direcciones se recogieron una vez y nunca se volvieron a comprobar, y una parte murió en el camino. Si sabes que una lista es comprada o extraída, da por hecho que una parte está desactualizada y verifícala antes del primer envío en lugar de enterarte por el informe de rebotes.

## Dónde ayuda la verificación y dónde no

La verificación elimina antes del envío las direcciones que darían rebote duro, y es la palanca más grande en una lista en frío. Comprobar la lista primero convierte una suposición en una cifra conocida, y merece la pena en cualquier lista que no hayas construido tú.

Lo que no hace es arreglar un registro DNS mal configurado ni calentar un dominio nuevo. Son problemas del remitente, y ninguna limpieza de la lista los toca. Así que separa tus rebotes por causa. Si son direcciones que ya no existen, pasa la lista por la [verificación de correo](/), con la [verificación catch-all](/catch-all-verification) incluida, antes del próximo envío. Si son fallos de autenticación o de reputación, el trabajo está en tu propio dominio, no en la lista.
