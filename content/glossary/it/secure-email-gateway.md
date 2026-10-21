---
title: Secure email gateway (SEG)
description: Cos'è un secure email gateway, come filtra le email prima che arrivino nelle caselle di un'azienda, come riconoscerlo dal record MX e perché influisce sui controlli email.
slug: secure-email-gateway
date: 2026-10-22
updated: 2026-10-22
keyword: secure email gateway
short: Un secure email gateway, o SEG, è un filtro che sta davanti alle caselle di un'azienda. Controlla ogni email in arrivo per spam, phishing e file dannosi prima che qualcuno la riceva. Esempi comuni sono Mimecast, Proofpoint e Barracuda.
related: spam-filter, mx-record, catch-all-email, greylisting, email-spoofing, dmarc
cta: Verifica gli indirizzi dietro i secure email gateway
---

## Cos'è un secure email gateway?

Un secure email gateway, o SEG, è un filtro di sicurezza per le email di un'azienda. Sta tra internet e le caselle dell'azienda.

Ogni email inviata all'azienda passa prima dal gateway. Il gateway la analizza. Cerca spam, link di phishing e allegati dannosi. Le email sicure proseguono verso la casella. Le email pericolose vengono bloccate o trattenute.

Grandi aziende, banche, ospedali ed enti pubblici usano spesso un gateway. I prodotti più conosciuti sono Mimecast, Proofpoint e Barracuda.

## Un esempio semplice

1. **Daniele scrive a una banca.** Daniele vende software. Scrive a un responsabile di una banca.
2. **Il gateway la riceve per primo.** Le email della banca passano da un gateway Proofpoint.
3. **Il gateway la analizza.** Controlla i link e l'allegato dell'email di Daniele.
4. **L'email viene consegnata.** Niente sembra dannoso, quindi il gateway la passa alla casella del responsabile.

Daniele non vede mai il gateway. Se la sua email avesse avuto un link pericoloso, si sarebbe fermata lì.

## Come riconoscere un gateway

Guarda il [record MX](/glossary/mx-record) del dominio. Il record MX dice a tutti quale server riceve le email di un dominio. Quando c'è un gateway, il record MX punta al gateway invece che al provider della casella.

| Gateway | Il record MX spesso finisce con |
|---|---|
| **Mimecast** | `mimecast.com` |
| **Proofpoint** | `pphosted.com` |
| **Barracuda** | `barracudanetworks.com` |

Puoi leggere il record MX di qualsiasi dominio con uno strumento di ricerca MX.

## Perché i gateway influiscono sulla verifica email

Un verificatore email chiede al server di destinazione se un indirizzo esiste. Su un dominio con un gateway, risponde il gateway invece del vero server di posta.

Alcuni gateway non rispondono affatto ai controlli. La maggior parte degli strumenti allora restituisce "sconosciuto", anche quando la persona è reale. Altri gateway rispondono sì a ogni indirizzo, e questo sembra uguale a un dominio [catch-all](/glossary/catch-all-email).

Questo colpisce di più le liste aziendali, perché i contatti che lavorano in grandi aziende spesso stanno dietro un gateway.

## Come aiuta un verificatore

Giggal.ai riconosce 15 gateway specifici, tra cui Mimecast, Proofpoint e Barracuda, e restituisce un risultato reale sugli indirizzi che stanno dietro di loro. Per vedere come funziona passo dopo passo, leggi [come verificare le email dietro un secure email gateway](/blog/how-to-verify-emails-behind-secure-email-gateways).
