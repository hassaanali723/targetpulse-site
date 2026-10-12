---
title: SMTP
description: Cos'è SMTP, come viaggia un'email da Gmail a Outlook passo per passo, cos'è un server SMTP, le porte 25, 587 e 465 e i codici di errore.
slug: smtp
date: 2026-10-12
updated: 2026-10-12
keyword: smtp
short: SMTP è l'insieme di regole che i server di posta usano per inviarsi le email tra loro. Un server SMTP è il server che spedisce la tua email. Se il server che riceve rifiuta l'email, risponde con un codice di errore.
related: mta, mx-record, smtp-error-codes, esp, hard-bounce, greylisting
cta: Chiedi al server SMTP se la casella esiste, prima di inviare
---

## Cos'è SMTP?

SMTP sta per Simple Mail Transfer Protocol. È il protocollo che i server di posta usano per inviarsi le email tra loro. Un protocollo è un insieme di regole che due computer seguono per parlarsi. Un server è un computer sempre acceso che svolge un compito per molte persone. Un server di posta riceve e spedisce email.

Lo standard attuale di SMTP è la RFC 5321. SMTP serve solo a inviare. Per leggere le email, il tuo telefono o il tuo programma di posta usa altri protocolli, IMAP o POP3. Ne parliamo più sotto.

## Come funziona SMTP: Ana scrive a Ben

Ana ha un account Gmail. Ben lavora in un'azienda che usa Outlook, con l'indirizzo ben@azienda.it. Ana scrive un'email a Ben e preme Invia. Ecco cosa succede.

1. L'app di Gmail consegna l'email al server di invio di Gmail.
2. Il server di Gmail guarda la parte dopo la @, cioè azienda.it. Questa parte si chiama dominio.
3. Il server cerca nel DNS il [record MX](/glossary/mx-record) di azienda.it. Il DNS è l'elenco pubblico di impostazioni di ogni dominio. Il record MX è la riga che indica quale server riceve la posta per quel dominio.
4. Il server di Gmail si collega al server di posta di azienda.it, gestito da Microsoft.
5. I due server si parlano in SMTP. Gmail dice chi invia l'email e a chi è destinata. Il server di Microsoft risponde a ogni passaggio con un codice numerico.
6. Il server di Microsoft risponde `250`. Significa che accetta l'email. Gmail invia il testo del messaggio.
7. Ben apre Outlook e legge l'email. Per questo ultimo passaggio Outlook usa IMAP, non SMTP.

La conversazione tra i due server, semplificata, ha questo aspetto. Le righe con S sono il server di Ben. Le righe con C sono il server di Gmail.

```
S: 220 mx.azienda.it ESMTP
C: EHLO server.gmail.example
S: 250 OK
C: MAIL FROM:<ana@gmail.com>
S: 250 OK
C: RCPT TO:<ben@azienda.it>
S: 250 OK
C: DATA
S: 354 Start mail input
```

## Cos'è un server SMTP

Un server SMTP è il server che spedisce le email. Ogni servizio di posta ne ha uno. Il server SMTP di Gmail, per esempio, si chiama smtp.gmail.com.

Quando configuri un programma di posta come Outlook o Thunderbird, inserisci alcuni dati. Sono il nome del server SMTP, una porta, il tuo nome utente e la password. Da quel momento il programma consegna a quel server le email che scrivi.

Anche le piattaforme di invio come Mailchimp, Brevo o Amazon SES hanno i loro server SMTP. Un sito che invia conferme d'ordine spesso si collega a uno di questi. Il software che fa funzionare un server SMTP si chiama [mail transfer agent](/glossary/mta), o MTA.

## Le porte SMTP: 25, 587 e 465

Una porta è un numero che indica quale servizio vuoi usare su un server. Un server ascolta su porte diverse per compiti diversi. SMTP usa tre porte.

| Porta | Chi la usa | Crittografia |
| --- | --- | --- |
| 25 | Server che inviano email ad altri server | Facoltativa, con STARTTLS |
| 587 | App e programmi di posta che consegnano un'email al proprio server | Attivata con STARTTLS dopo la connessione |
| 465 | App e programmi di posta, come la 587 | Attiva dall'inizio della connessione |

La crittografia rende il contenuto illeggibile a chi intercetta la connessione. STARTTLS è un comando che attiva la crittografia su una connessione già aperta.

Se configuri un programma di posta, di solito usi la porta 587 o la 465. La porta 25 serve al passaggio tra server. Molti provider internet la bloccano sulle connessioni di casa, per ridurre lo spam.

## SMTP, IMAP e POP3

- **SMTP** invia le email. Porta l'email dal mittente al server del destinatario.
- **IMAP** ti fa leggere le email che restano sul server. Se leggi un'email sul telefono, risulta letta anche sul computer.
- **POP3** scarica le email sul tuo dispositivo. Spesso le email vengono tolte dal server dopo lo scaricamento.

Per questo un programma di posta ti chiede due server. Uno è per la posta in arrivo, con IMAP o POP3. L'altro è per la posta in uscita, con SMTP.

## Quando il server SMTP rifiuta un'email

Il server che riceve può rifiutare un'email. Risponde con un codice di tre cifre. La prima cifra dice che tipo di risposta è.

- **2xx** significa che il passaggio è riuscito. `250` è la risposta più comune.
- **4xx** è un errore temporaneo. Il server di invio riprova più tardi. Un esempio è il [greylisting](/glossary/greylisting).
- **5xx** è un errore permanente. Riprovare non serve. `550 5.1.1` significa che la casella non esiste.

Un rifiuto permanente diventa un [hard bounce](/glossary/hard-bounce) nel report della tua campagna. I codici più comuni e il loro significato sono nella pagina sui [codici di errore SMTP](/glossary/smtp-error-codes).

## SMTP e verifica email

Un verificatore usa la stessa conversazione SMTP, ma si ferma prima di inviare. Si collega al server del dominio e chiede se accetta email per quell'indirizzo. Di solito una risposta `250` dice che la casella esiste, mentre una risposta `550 5.1.1` dice che non esiste. Poi il verificatore chiude la connessione senza inviare il messaggio, quindi nessuna email arriva alla persona. Puoi controllare un indirizzo con il [verificatore email](/email-checker) o un file intero con la [verifica email in blocco](/bulk-email-verifier), due strumenti del nostro [servizio di verifica email](/).
