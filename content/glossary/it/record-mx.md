---
title: Record MX
description: Cos'è un record MX, come i server di posta lo usano per trovare la destinazione, cosa significa la priorità e cosa indica un record MX mancante.
slug: record-mx
date: 2026-09-29
updated: 2026-10-12
keyword: record mx
short: Un record MX è un'impostazione pubblica di un dominio che dice quale server riceve le sue email. Quando invii a nome@example.com, il tuo server di posta legge il record MX di example.com per sapere dove consegnare l'email.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Controlla se un indirizzo può ricevere email
---

## Cos'è un record MX?

Prima, tre parole che servono per capire.

- **Dominio:** la parte dell'indirizzo email dopo la @. In anna@example.com il dominio è example.com.
- **Server di posta:** il computer che riceve e conserva le email di un dominio.
- **DNS:** l'elenco pubblico di impostazioni di ogni dominio. Ogni computer su internet può leggerlo. Ogni riga di questo elenco si chiama record.

MX sta per mail exchanger, cioè "scambiatore di posta". Un record MX è un tipo di record DNS. I record MX di un dominio elencano i server che accettano le email in arrivo per quel dominio.

Un dominio può avere più di un record MX. Ogni record MX ha un numero di priorità. I server con il numero più basso vengono provati per primi. Questa è una configurazione tipica per un dominio che usa Google Workspace:

| priorità | server di posta |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Se il server con priorità 1 non risponde, il server che invia prova il successivo. Così l'email arriva anche se un server è fermo.

## Un esempio semplice

Luca lavora per un'azienda che usa il dominio example.com. La sua collega Chiara gli scrive da un altro dominio.

1. Chiara scrive a luca@example.com e preme Invia.
2. Il server di posta di Chiara guarda il dominio: example.com.
3. Il server legge i record MX di example.com nel DNS.
4. Il record MX con il numero più basso indica `aspmx.l.google.com`.
5. Il server di Chiara si collega a quel server e consegna l'email.
6. Luca trova l'email nella sua casella.

Senza un record MX, il server di Chiara non saprebbe dove portare l'email.

## Come l'email usa i record MX

Quando invii a `nome@example.com`, il tuo server di posta fa tre cose:

1. Cerca i record MX di `example.com`.
2. Si collega al server con il numero di priorità più basso.
3. Consegna l'email usando SMTP. SMTP è il linguaggio che i server di posta usano per parlare tra loro.

La RFC 5321, lo standard delle email, descrive questo processo. Copre anche i domini senza record MX. Se il dominio ha un normale record A, i server di posta trattano quel record come un record MX. Un record A collega un nome di dominio all'indirizzo IP di un server. L'indirizzo IP è il numero che identifica un computer su internet.

## Cosa dice un record MX su un indirizzo

Il record MX è il primo controllo vero nella verifica di un indirizzo email. Prima c'è solo il controllo della sintassi, cioè della forma dell'indirizzo. Per esempio, che ci sia una sola @.

- **Nessun record MX e nessun record A.** Il dominio non può ricevere email. Ogni indirizzo su quel dominio non è valido. Un errore di battitura nel dominio di solito fallisce in questo passaggio. Esempio: nome@example.con invece di nome@example.com.
- **Il record MX esiste.** Il dominio può ricevere email. Ma il record MX non dice se la casella specifica esiste. Serve il passaggio successivo: una conversazione SMTP con il server.
- **Il record MX punta a un gateway conosciuto.** Se il server di posta è Proofpoint, Mimecast o Barracuda, il dominio usa un [secure email gateway](/glossary/secure-email-gateway). È un filtro di sicurezza che sta davanti alle caselle di un'azienda. Su questi domini il controllo della casella si comporta in modo diverso.

## Perché conta per chi invia

Chiunque può leggere il record MX di un dominio con una ricerca DNS. Le aziende però cambiano. Quando un'azienda cambia provider di posta o chiude, i suoi record MX cambiano o spariscono.

**Esempio:** una piccola ditta chiude nel 2024. Nessuno rinnova il dominio. Il record MX sparisce. Tutti gli indirizzi dei dipendenti smettono di funzionare. Nessuno ti avvisa.

Se quegli indirizzi sono ancora nella tua lista, ogni email rimbalza. Questa è una causa comune di hard bounce nelle liste vecchie. Un hard bounce è un'email rifiutata in modo permanente.

## Come lo gestisce un verificatore

Un verificatore cerca prima il record MX del dominio. Se non c'è nessun record MX, l'indirizzo viene marcato come non valido. Non vengono fatti altri controlli. Se il record MX c'è, il verificatore si collega a quel server e chiede se la casella esiste.

La ricerca del record MX dice anche al verificatore che tipo di server è. Questo conta per i [domini catch-all](/glossary/catch-all-email), che accettano email per qualsiasi indirizzo, e per i gateway.

Puoi fare questo controllo su un indirizzo con il [verificatore email](/email-checker). Per una lista intera usa la [verifica email in blocco](/bulk-email-verifier). Il nostro [servizio di verifica email](/) trova i domini senza record MX e le caselle che non esistono, prima che tu invii.
