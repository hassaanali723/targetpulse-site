---
title: Record MX
description: Cos'è un record MX, come i server di posta lo usano per trovare dove consegnare le email, cosa significa il numero di priorità e cosa dice a un verificatore un record MX mancante.
slug: record-mx
date: 2026-09-29
updated: 2026-09-29
keyword: record mx
short: Un record MX è un record DNS che dice quale server riceve le email per un dominio. Quando invii a nome@esempio.com, il tuo server di posta cerca il record MX di esempio.com per trovare il server a cui consegnare.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Controlla se un indirizzo può ricevere email
---

## Cos'è un record MX

MX sta per mail exchanger. Un record MX è un tipo di record DNS. Il DNS è l'elenco pubblico che collega i nomi di dominio ai server. I record MX di un dominio elencano i server che accettano le email in arrivo per quel dominio.

Un dominio può avere più di un record MX. Ogni record ha un numero di priorità. I server con i numeri più bassi vengono provati per primi. Questa è una configurazione tipica per un dominio Google Workspace:

| priorità | server di posta |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Se il server con priorità 1 non risponde, il server che invia prova il successivo.

## Come l'email usa i record MX

Quando invii a `nome@esempio.com`, il tuo server di posta fa tre cose:

- Cerca i record MX di `esempio.com`.
- Si collega al server con il numero di priorità più basso.
- Consegna l'email usando SMTP.

La RFC 5321, lo standard delle email, descrive questo processo. Copre anche i domini senza record MX. Se il dominio ha un normale record A, i server di posta trattano quel record come record MX.

## Cosa dice un record MX su un indirizzo

Il record MX è il primo controllo vero nella verifica email. Il controllo della sintassi viene prima.

- **Nessun record MX e nessun record A.** Il dominio non può ricevere email. Ogni indirizzo su quel dominio è non valido. Un errore di battitura come `gmial.com` di solito fallisce in questo passaggio.
- **Il record MX esiste.** Il dominio può ricevere email. Questo non dice se la casella specifica esiste. Serve il passaggio successivo: una conversazione SMTP con il server.
- **Il record MX punta a un gateway conosciuto.** Se il server di posta è Proofpoint, Mimecast o Barracuda, il dominio usa un [secure email gateway](/glossary/secure-email-gateway). Su questi domini il controllo della casella si comporta in modo diverso.

## Perché conta per chi invia

Chiunque può leggere il record MX di un dominio con una ricerca DNS. Quando un'azienda cambia provider di posta o chiude, i suoi record MX cambiano o spariscono. Gli indirizzi smettono di funzionare. Nessuno te lo dice. Questa è una causa comune di hard bounce nelle liste vecchie.

## Come lo gestisce un verificatore

Un [verificatore di indirizzi email](/email-checker) cerca prima il record MX. Se non c'è un record MX, l'indirizzo viene marcato come non valido e non vengono fatti altri controlli. Se c'è un record MX, il verificatore si collega a quel server e chiede se la casella esiste. La ricerca MX dice anche al verificatore che tipo di server è. Questo conta per i [domini catch-all](/glossary/catch-all-email) e per i gateway.
