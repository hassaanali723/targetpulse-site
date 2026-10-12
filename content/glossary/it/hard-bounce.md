---
title: Hard bounce
description: Cos'è un hard bounce, quali codici indicano un hard bounce, i due tipi di hard bounce e cosa fare con ciascun tipo.
slug: hard-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: hard bounce
short: Un hard bounce è un'email che il server di chi la riceve ha rifiutato per sempre. L'indirizzo non esiste, il dominio non esiste, oppure il server ha bloccato la tua email. Se rispedisci la stessa email, fallisce di nuovo.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Trova gli indirizzi che farebbero hard bounce prima di inviare
---

## Cos'è un hard bounce?

Un hard bounce è un'email che non può essere consegnata, e non potrà esserlo nemmeno in futuro. Il server di destinazione l'ha rifiutata. La rifiuterà di nuovo se la rispedisci.

Il server di destinazione è il computer che riceve le email per un indirizzo. Per un indirizzo Gmail, è il server di Google. Quando rifiuta un'email, ti rimanda un messaggio automatico. Questo messaggio si chiama messaggio di rimbalzo, o bounce.

Il messaggio contiene un codice. Lo standard delle email, la RFC 5321, chiama questo caso "risposta negativa permanente". Il codice di un hard bounce inizia con 5. Esempio: `550 5.1.1`.

Un codice che inizia con 4 indica invece un [soft bounce](/glossary/soft-bounce). Un soft bounce è temporaneo. Il server ti dice di riprovare più tardi.

## Un esempio semplice

Marco gestisce la newsletter di una palestra. Nella lista c'è luca.bianchi@ditta.example. Luca ha lasciato quell'azienda un anno fa.

1. Marco invia la newsletter a tutta la lista.
2. Il server di ditta.example riceve l'email per Luca.
3. Il server controlla le sue caselle. La casella di Luca è stata chiusa.
4. Il server rifiuta l'email con il codice `550 5.1.1`.
5. Marco riceve un avviso di rimbalzo. Il suo strumento di invio registra un hard bounce.
6. Se Marco invia di nuovo a Luca la settimana dopo, succede la stessa cosa.

L'indirizzo è morto. L'unica cosa giusta da fare è toglierlo dalla lista.

## I due tipi di hard bounce

Nel report della campagna, entrambi i tipi compaiono come "hard bounce". Ma hanno cause diverse e soluzioni diverse.

### Tipo 1: l'indirizzo è sbagliato

La casella non esiste, il dominio non esiste, oppure l'indirizzo ha un errore di scrittura. Il dominio è la parte dopo la @.

I server rispondono con testi come questi:

- Gmail: `550 5.1.1 The email account that you tried to reach does not exist`. Cioè l'account che hai cercato di raggiungere non esiste.
- Microsoft: `5.1.1 Bad destination mailbox address`. Cioè l'indirizzo della casella di destinazione è sbagliato.

**Esempio:** un cliente scrive giulia@example.con invece di giulia@example.com. Il dominio con ".con" non esiste. Ogni email fa hard bounce.

Anche un indirizzo chiuso quando un dipendente ha lasciato l'azienda rientra in questo tipo, come nel caso di Luca.

### Tipo 2: la tua email è bloccata

L'indirizzo è reale, ma il server rifiuta le email che arrivano da te. Questi codici iniziano con `5.7`.

- Il `550 5.7.26` di Gmail significa che il tuo dominio non è autenticato. L'autenticazione è il modo in cui dimostri che l'email arriva davvero dal tuo dominio.
- Il `5.7.23` di Microsoft significa che la tua email non ha superato il controllo SPF. SPF è un elenco pubblico dei server autorizzati a inviare per il tuo dominio.

Il tuo strumento di invio conta questi codici come hard bounce, perché iniziano con 5. Ma l'indirizzo va bene. Il problema è la configurazione della tua email.

## Perché gli hard bounce contano

I provider di posta contano quante volte invii a indirizzi che non esistono. Un provider di posta è l'azienda che gestisce le caselle, come Gmail o Outlook. Molti hard bounce indicano che non hai controllato la tua lista. Allora il provider si fida meno di te e manda più email nello spam.

Amazon SES, il servizio di invio email di Amazon, pubblica i suoi limiti:

| tasso di bounce | cosa fa Amazon SES |
|---|---|
| sotto il 2% | è il livello consigliato |
| 5% | mette l'account sotto revisione |
| 10% | può sospendere l'account |

Il tasso di bounce è la percentuale di email che rimbalzano. Su 1.000 email, 50 bounce sono il 5 percento. Questo è solo un esempio di calcolo.

## Cosa fare con un hard bounce

Prima leggi il codice nel messaggio di rimbalzo. Poi segui questi passaggi.

1. **Il codice è `5.1.1`, `5.1.2` o un altro errore di indirizzo.** Rimuovi subito l'indirizzo dalla lista. Non inviare più a quell'indirizzo. Mailchimp rimuove questi indirizzi dalla tua audience in automatico. Amazon dice ai mittenti di rimuoverli "immediately", cioè subito.
2. **Il codice inizia con `5.7`.** Tieni l'indirizzo. Sistema i record SPF, DKIM e DMARC, oppure la tua reputazione di mittente. Questi record sono impostazioni pubbliche del tuo dominio. Poi invia di nuovo allo stesso indirizzo.

La tabella con tutti i codici, e cosa fare per ciascuno, è nella guida [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Come lo gestisce un verificatore

Un verificatore fa al server di destinazione la stessa domanda, ma prima dell'invio. Si collega al server di posta e chiede se accetta email per quell'indirizzo esatto. Se il server risponde `550 5.1.1`, l'indirizzo viene marcato come non valido. Così lo togli prima della campagna, e quell'hard bounce non avviene mai.

Puoi controllare un indirizzo alla volta con il [verificatore email](/email-checker). Per una lista intera usa la [verifica email in blocco](/bulk-email-verifier). Nessuna email viene inviata alla persona, quindi la tua reputazione non ne risente. La verifica trova gli indirizzi che non esistono. Non risolve gli hard bounce di tipo 2, che dipendono dalla configurazione del tuo dominio. Il nostro [servizio di verifica email](/) copre solo il tipo 1.
