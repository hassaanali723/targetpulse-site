---
title: Secure email gateway (SEG)
description: Qué es un secure email gateway, cómo filtra el correo antes de que llegue a los buzones de una empresa, cómo reconocerlo por el registro MX y por qué afecta a las comprobaciones de correo.
slug: secure-email-gateway
date: 2026-10-22
updated: 2026-10-22
keyword: secure email gateway
short: Un secure email gateway, o SEG, es un filtro que está delante de los buzones de una empresa. Revisa cada correo que llega en busca de spam, phishing y archivos dañinos antes de que alguien lo reciba. Ejemplos comunes son Mimecast, Proofpoint y Barracuda.
related: spam-filter, mx-record, catch-all-email, greylisting, email-spoofing, dmarc
cta: Verifica direcciones detrás de un secure email gateway
---

## ¿Qué es un secure email gateway?

Un secure email gateway, o SEG, es un filtro de seguridad para el correo de una empresa. En español también se llama pasarela de correo seguro. Está entre internet y los buzones de la empresa.

Cada correo enviado a la empresa pasa primero por el gateway. El gateway lo analiza. Busca spam, enlaces de phishing y adjuntos dañinos. El correo seguro sigue hacia el buzón. El correo peligroso se bloquea o se retiene.

Las grandes empresas, los bancos, los hospitales y las oficinas de gobierno suelen usar un gateway. Los productos más conocidos son Mimecast, Proofpoint y Barracuda.

## Un ejemplo sencillo

1. **Daniel escribe a un banco.** Daniel vende software. Le escribe a un gerente de un banco.
2. **El gateway lo recibe primero.** El correo del banco pasa por un gateway de Proofpoint.
3. **El gateway lo analiza.** Revisa los enlaces y el adjunto del correo de Daniel.
4. **El correo se entrega.** Nada parece dañino, así que el gateway lo pasa al buzón del gerente.

Daniel nunca ve el gateway. Si su correo hubiera tenido un enlace peligroso, se habría detenido ahí.

## Cómo reconocer un gateway

Mira el [registro MX](/glossary/mx-record) del dominio. El registro MX le dice a todo el mundo qué servidor recibe el correo de un dominio. Cuando hay un gateway, el registro MX apunta al gateway en lugar de al proveedor del buzón.

| Gateway | El registro MX suele terminar en |
|---|---|
| **Mimecast** | `mimecast.com` |
| **Proofpoint** | `pphosted.com` |
| **Barracuda** | `barracudanetworks.com` |

Puedes consultar el registro MX de cualquier dominio con una herramienta de consulta MX.

## Por qué los gateways afectan a la verificación de correo

Un verificador de correo pregunta al servidor receptor si una dirección existe. En un dominio con gateway, responde el gateway en lugar del servidor de correo real.

Algunos gateways se niegan a responder las comprobaciones. La mayoría de las herramientas entonces devuelven "desconocido", aunque la persona sea real. Otros gateways responden que sí a todas las direcciones, y eso se ve igual que un dominio [catch-all](/glossary/catch-all-email).

Esto afecta más a las listas de empresas, porque los contactos que trabajan en empresas grandes suelen estar detrás de un gateway.

## Cómo ayuda un verificador

Giggal.ai reconoce 15 gateways concretos, entre ellos Mimecast, Proofpoint y Barracuda, y devuelve un resultado real en las direcciones que están detrás de ellos. Para ver cómo funciona paso a paso, lee [cómo verificar correos detrás de un secure email gateway](/blog/how-to-verify-emails-behind-secure-email-gateways).
