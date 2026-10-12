---
title: Lista negra de correo (email blacklist)
description: Qué es una lista negra de correo, cómo un remitente entra en ella, la diferencia entre listas de IP y de dominios, cómo comprobarlo y cómo salir.
slug: lista-negra-de-correo
date: 2026-10-12
updated: 2026-10-12
keyword: lista negra de correo
short: Una lista negra de correo es una lista pública de direcciones IP o dominios que envían spam. Los servidores de correo la consultan y bloquean o filtran el correo de quien aparece en ella. En inglés se llama blacklist o blocklist.
related: dnsbl, blocklist, spam-trap, ip-reputation, domain-reputation, hard-bounce
cta: Quita las direcciones muertas antes de que te lleven a una lista negra
---

## ¿Qué es una lista negra de correo?

Una lista negra de correo es una lista pública de remitentes que envían spam. En inglés se llama email blacklist. La publican organizaciones antispam, como Spamhaus.

La lista puede contener dos cosas:

- **Direcciones IP.** Una dirección IP es el número que identifica a un servidor en internet. Un servidor es la computadora que envía el correo.
- **Dominios.** Un dominio es el nombre que va después de la @ en una dirección, o el nombre de una web, por ejemplo ejemplo.com.

Cuando un correo llega, muchos servidores receptores consultan una o varias listas negras. Si la IP o el dominio del remitente está en la lista, el servidor puede rechazar el correo o enviarlo a spam.

## Un ejemplo: cuando tus correos empiezan a rebotar

Una agencia de viajes envía cada semana un boletín a sus clientes. Un lunes, su herramienta de envío muestra cientos de rebotes. Los rebotes llegan de varias empresas distintas.

1. La agencia abre uno de los mensajes de rebote. El texto incluye un código que empieza por 5 y menciona a Spamhaus, con un enlace a su web.
2. La agencia sigue el enlace. La web de Spamhaus dice que la IP desde la que envía está en una de sus listas.
3. Los servidores de esas empresas consultan Spamhaus antes de aceptar un correo. Como la IP está en la lista, rechazan el boletín.
4. La agencia revisa sus envíos. La semana anterior importó una lista antigua de clientes de hace cinco años. Muchas direcciones ya no existían, y alguna era una [spam trap](/glossary/spam-trap).

El problema no estaba en el texto del boletín. Estaba en la lista de direcciones.

## Listas negras de IP y listas negras de dominios

| Tipo | Qué contiene | Qué se bloquea |
|---|---|---|
| Lista negra de IP | Direcciones IP de servidores que envían spam | Todo el correo que sale de esa IP, sea de quien sea |
| Lista negra de dominios | Dominios que aparecen en spam, en el remitente o en los enlaces | Correos que usan ese dominio, aunque salgan de otra IP |

Si usas una IP compartida con tu proveedor de correo, otro cliente puede hacer que esa IP entre en una lista. Ver [reputación IP](/glossary/ip-reputation). Una lista de dominios afecta solo a tu dominio, porque nadie más lo usa. Ver [reputación del dominio](/glossary/domain-reputation).

Muchas listas negras se consultan por DNS, el directorio público de internet. Ese tipo de lista se llama [DNSBL](/glossary/dnsbl).

## Blacklist o blocklist

Las dos palabras se usan para lo mismo. Spamhaus, por ejemplo, dice blocklist, que en español también se traduce como lista de bloqueo. Muchas herramientas y artículos siguen diciendo blacklist. Ver [blocklist](/glossary/blocklist).

## Cómo entra un remitente en una lista negra

Cada lista tiene sus propias reglas, y muchas no las publican en detalle. Estas son causas habituales:

- **Spam traps.** Enviar a direcciones que solo existen para detectar listas malas.
- **Quejas de spam.** Muchas personas marcan tu correo como spam.
- **Una cuenta hackeada.** Alguien entra en una cuenta o en un servidor de tu empresa y lo usa para enviar spam.
- **Volumen repentino desde una IP nueva.** Una IP sin historial que de pronto envía miles de correos parece sospechosa.
- **Listas compradas o extraídas de webs.** Contienen direcciones muertas, spam traps y personas que nunca pidieron tu correo.

## Cómo comprobar si estás en una lista negra

Herramientas como MXToolbox comprueban tu IP o tu dominio en muchas listas negras a la vez. Escribes tu IP o tu dominio, y la herramienta te dice en qué listas apareces.

Para saber tu IP de envío, mira la configuración de tu proveedor de correo o abre un correo tuyo en Gmail con "Mostrar original". Los mensajes de rebote también suelen decir qué lista te bloqueó.

## Cómo salir de una lista negra

1. **Corrige la causa primero.** Limpia tu lista, cambia las contraseñas si hubo un acceso no autorizado y para los envíos que causaron el problema.
2. **Busca la página de retirada.** Cada lista tiene la suya. En la web de Spamhaus, por ejemplo, puedes consultar tu IP o tu dominio y pedir la retirada.
3. **Explica lo que corregiste.** Algunas listas te piden una explicación breve.
4. **Espera.** Algunas listas retiran las entradas solas después de un tiempo si el problema no se repite.

Si pides la retirada sin corregir la causa, vuelves a entrar en la lista con el próximo envío.

## Listas negras de correo y verificación de correo

Las direcciones antiguas y falsas llevan a spam traps y a rebotes, y las dos cosas pueden llevarte a una lista negra. El [verificador de correo](/email-checker) comprueba una dirección antes de enviar. El [validador de correos masivos](/bulk-email-verifier) comprueba una lista entera, como la lista antigua del ejemplo, y te dice qué direcciones ya no existen. La [verificación de correo](/) no puede sacarte de una lista negra ni detectar spam traps. Sí quita las direcciones muertas antes de enviar, y esa es una causa que tú puedes controlar.
