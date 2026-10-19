---
title: "Gli indirizzi email distinguono maiuscole e minuscole?"
seoTitle: "Email con maiuscole o minuscole: cambia qualcosa? (Gmail e Outlook)"
description: "Quasi mai: Gmail e Outlook ignorano le maiuscole, ma lo standard permette di distinguerle prima della @. Quando conta e come salvare gli indirizzi email."
slug: indirizzi-email-maiuscole-minuscole
date: 2026-10-19
updated: 2026-10-19
keyword: email maiuscole o minuscole
image: /blog/covers/it/indirizzi-email-maiuscole-minuscole.webp
imageAlt: Copertina sulle maiuscole negli indirizzi email con le regole per domini, Gmail, Outlook e database
cta: Verifica la tua lista con Giggal.ai
---

Gli indirizzi email nella maggior parte dei casi non distinguono tra maiuscole e minuscole. Se scrivi John.Smith@gmail.com o john.smith@gmail.com, la posta arriva nella stessa casella. La parte dopo la @ ignora del tutto le maiuscole. L'eccezione è la parte prima della @. Lo standard delle email in teoria permette a un server di trattare Smith e smith come due persone diverse. È utile saperlo se gestisci un modulo di iscrizione o una lista di contatti.

## La parte dopo la @ non distingue mai

Il nome di dominio che segue la @ non distingue mai tra maiuscole e minuscole. La RFC 5321 dice che i domini delle caselle seguono le normali regole del DNS, e il DNS ignora le maiuscole. Quindi GMAIL.COM, Gmail.com e gmail.com puntano allo stesso server di posta. Puoi scrivere il dominio in maiuscolo o in minuscolo senza cambiare la destinazione del messaggio.

## Le email distinguono le maiuscole prima della @?

La parte locale, cioè il nome utente a sinistra della @, funziona in modo diverso. Secondo la RFC 5321, sezione 2.4, "la parte locale di una casella DEVE essere trattata come sensibile alle maiuscole". I server che inoltrano il tuo messaggio devono mantenere maiuscole e minuscole esattamente come sono scritte. È il server ricevente, quello che ospita la casella, a decidere se `Smith` e `smith` appartengono a due persone diverse.

La stessa sezione avverte anche che "basarsi sulla distinzione tra maiuscole e minuscole nelle parti locali delle caselle ostacola l'interoperabilità ed è sconsigliato". Pensa a due colleghi nella stessa azienda, JSmith@ e jsmith@, e a quante volte la loro posta verrebbe confusa. I grandi provider evitano il problema ignorando del tutto le maiuscole.

## Gmail e Outlook

I provider che gestiscono la maggior parte della posta privata hanno scelto di ignorare del tutto le maiuscole. Gli esperti della community di assistenza di Gmail confermano che Gmail ignora le maiuscole, sia quando crei un account sia quando arriva la posta. Che qualcuno scriva a `JaneDoe@gmail.com` o a `janedoe@gmail.com`, Google consegna entrambi i messaggi nella stessa casella. Google tratta anche `@googlemail.com` e `@gmail.com` come lo stesso indirizzo.

Gmail ignora anche i punti negli indirizzi privati, quindi `jane.doe@gmail.com` e `janedoe@gmail.com` arrivano nella stessa casella. Non dare però per scontato che valga ovunque. La documentazione di Google dice che i punti contano per gli account Google Workspace gestiti tramite domini di lavoro o di scuola. Punti e maiuscole sono regole separate. Non dare per scontato che un altro provider ignori i punti solo perché lo fa Gmail.

La risposta di Microsoft è simile. In una risposta sul forum di assistenza Microsoft, chi risponde spiega tre cose. La parte dopo la @ non distingue mai le maiuscole. Per il nome utente dipende dal provider. I grandi provider come Outlook e Gmail le ignorano. La stessa risposta aggiunge che alcune aziende usano server propri che distinguono le maiuscole.

## Quando le maiuscole possono ancora creare problemi

Di solito il problema compare negli accessi. Ti iscrivi come `Sarah@example.com` da telefono, perché la tastiera ha messo in maiuscolo la prima lettera. Poi accedi scrivendo `sarah@example.com`, e un sistema poco attento risponde che l'account non esiste. L'utente non ha cambiato indirizzo. È il modulo di accesso che ha confrontato il testo distinguendo le maiuscole.

Liste e CRM hanno una loro versione del problema. Una persona si iscrive come `Bob@company.com` e più tardi scarica una guida come `bob@company.com`. Molte piattaforme contano due contatti separati. Questo gonfia le tue metriche e manda alla stessa persona campagne doppie. Elimina i duplicati ignorando le maiuscole prima di [verificare o inviare](/email-list-cleaning) (in inglese) a una lista marketing.

Poi c'è il raro server aziendale che distingue davvero le maiuscole, l'eccezione citata nella risposta di Microsoft. Se un contatto scrive il suo indirizzo come `M.MacDonald@specialtycorp.com` su un biglietto da visita, mantieni quelle maiuscole quando gli scrivi. Non crea problemi ai sistemi standard ed evita problemi di consegna sui sistemi che le distinguono.

## Se salvi indirizzi email

Se sviluppi applicazioni web o gestisci database di contatti, conserva le maiuscole ma confronta in minuscolo. Salva l'indirizzo esattamente come l'utente lo ha scritto. Esegui però tutti i confronti, le ricerche e i controlli di unicità in minuscolo.

Conservare il testo originale rispetta le preferenze di visualizzazione dell'utente nei profili e nelle intestazioni delle email. La normalizzazione in minuscolo evita gli account duplicati. Se qualcuno si iscrive come `IStillUse@AOL.COM`, non forzare il suo nome visualizzato in minuscolo. Tratta però `iSTilLUSE@aol.com` come un duplicato.

Per l'unicità in PostgreSQL, crea un indice sull'espressione in minuscolo invece di aggiungere un semplice vincolo di unicità:

```sql
CREATE UNIQUE INDEX users_email_lower ON users (lower(email));
```

PostgreSQL offre anche l'estensione `citext`, che confronta le stringhe senza distinguere le maiuscole. In MySQL la collation predefinita (`utf8mb4_0900_ai_ci`) non distingue già le maiuscole. Le normali chiavi univoche gestiscono quindi i duplicati con maiuscole diverse senza funzioni aggiuntive.

Attenzione alla trappola della conversione in minuscolo nei linguaggi di backend, in particolare Java. In Java, `email.toLowerCase()` usa la lingua e le impostazioni locali predefinite del server. Con le impostazioni locali turche, la lettera latina maiuscola `I` diventa `ı` (una i minuscola senza punto) invece di `i`. Questo rompe indirizzi come `INFO@example.com`. Per evitare il bug, passa `Locale.ROOT`:

```java
// Locale.ROOT avoids language-specific letter mapping like Turkish dotless i
String cleanEmail = email.toLowerCase(Locale.ROOT);
```

`toLowerCase()` di JavaScript non ha questo problema, perché usa le corrispondenze Unicode predefinite e non le impostazioni locali del sistema. Solo `toLocaleLowerCase()` dipende dalle impostazioni locali.

Per bloccare formati sbagliati e indirizzi non validi prima che entrino nel database, controlla gli indirizzi con una [API di validazione email](/email-validation-api) (in inglese) al momento dell'iscrizione. Intercetta errori di battitura e domini morti mentre la persona è ancora sulla pagina.

## Domande frequenti

**Gmail distingue maiuscole e minuscole?**
No, Gmail ignora le maiuscole sia nella creazione dell'account sia nella consegna dei messaggi. Se il tuo indirizzo è john.doe@gmail.com, ricevi i messaggi inviati a JOHN.DOE@gmail.com e a John.Doe@googlemail.com. Non puoi registrare un nuovo account che differisce da un utente esistente solo per le maiuscole.

**Conta se scrivo il mio indirizzo email con le maiuscole?**
Per i normali invii a caselle private e aziendali, le maiuscole non bloccano la consegna. Il server di posta ricevente ignora le maiuscole e consegna il messaggio come sempre. Devi fare attenzione solo ai moduli di accesso che confrontano gli indirizzi email come stringhe esatte.

**Un ID email distingue le maiuscole?**
In pratica no. Un ID email è solo un altro nome per un indirizzo email, e Gmail, Outlook e gli altri grandi provider ignorano le maiuscole. Lo standard permette a un server di considerare diverse le maiuscole prima della @, ma è raro. Scrivere il tuo ID con le maiuscole per renderlo più leggibile quasi certamente non ti farà perdere posta.

**Devo salvare gli indirizzi email in minuscolo?**
Dovresti confrontare e indicizzare gli indirizzi email in minuscolo, per evitare account duplicati ed errori di accesso. Tenere le maiuscole originali dell'utente in una colonna di visualizzazione ti permette di formattare bene le notifiche. Se puoi tenere una sola colonna, salva l'indirizzo come è stato scritto e confrontalo con lower(), così non perdi l'originale.

**Le maiuscole possono far rimbalzare un'email?**
Molto raramente. Succede solo su un server insolito configurato per trattare Admin@ e admin@ come caselle separate. Se un indirizzo con maiuscole rimbalza, cerca prima un'altra causa, come un errore di battitura o una casella che non esiste più. Il codice nel messaggio di rimbalzo ti dice quale, come spiegato in [hard bounce e soft bounce](/blog/hard-bounce-vs-soft-bounce).

Le maiuscole non impediscono a un'email di arrivare, ma [un errore di battitura](/email-checker) sì. Se stai pulendo una lista di contatti prima del prossimo invio, passala da [Giggal.ai](/email-list-cleaning) (in inglese) per trovare prima le caselle morte e i domini non funzionanti.
