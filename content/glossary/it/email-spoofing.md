---
title: Email spoofing
description: Cos'è lo spoofing email, un esempio con una falsa email del CEO, perché è possibile, come riconoscerlo e come proteggere il tuo dominio.
slug: email-spoofing
date: 2026-10-12
updated: 2026-10-12
keyword: email spoofing
short: Lo spoofing email è l'invio di un'email con un indirizzo mittente falso. L'email sembra arrivare da una persona o da un'azienda che conosci, ma l'ha inviata qualcun altro. I truffatori lo usano per chiedere soldi o password.
related: dmarc, spf, dkim, dmarc-alignment, bimi, return-path
cta: Proteggi il dominio con DMARC e verifica la tua lista
---

## Cos'è lo spoofing email?

Lo spoofing email è l'invio di un'email con un indirizzo mittente falso. Il destinatario vede nel campo Da un indirizzo che conosce, per esempio quello della sua banca o del suo capo. In realtà l'email l'ha inviata un'altra persona.

Spoofing è una parola inglese. Significa fingersi qualcun altro. Nelle email si falsifica l'indirizzo del mittente.

## Un esempio: la falsa email del CEO

Laura lavora nell'ufficio contabilità di un'azienda con il dominio example.com. Il CEO si chiama Paolo Rossi. Un lunedì mattina Laura riceve questa email:

- **Da:** Paolo Rossi, paolo.rossi@example.com
- **Oggetto:** Bonifico urgente
- **Testo:** "Laura, devo chiudere un accordo con un fornitore oggi. Fai un bonifico di 18.500 euro a questo conto. Sono in riunione, non chiamarmi."

L'indirizzo nel campo Da è quello vero di Paolo. Ma Paolo non ha scritto l'email. Un truffatore ha inserito l'indirizzo di Paolo nel campo Da. Poi ha inviato l'email dal proprio server. Se Laura fa il bonifico, i soldi vanno al truffatore.

## Perché lo spoofing email è possibile

Il protocollo che trasporta le email si chiama [SMTP](/glossary/smtp). Un protocollo è un insieme di regole che due computer seguono per parlarsi. SMTP da solo non controlla che il mittente sia chi dice di essere.

Chiunque abbia un server di posta può scrivere qualsiasi indirizzo nel campo Da. Un server è un computer che invia e riceve email per un servizio. Il campo Da è testo scritto da chi invia, e SMTP lo consegna così com'è.

Per questo esistono tre controlli: SPF, DKIM e DMARC. Li vediamo più sotto.

## Come riconoscere un'email falsificata

- **L'indirizzo di risposta è diverso.** Premi Rispondi e guarda il destinatario. Il campo Da dice paolo.rossi@example.com, ma la risposta va a un indirizzo Gmail sconosciuto.
- **I controlli di autenticazione falliscono.** In Gmail apri l'email, clicca sui tre puntini e scegli Mostra originale. Se SPF, DKIM o DMARC dicono FAIL, l'email potrebbe essere falsa.
- **La richiesta è urgente e riguarda soldi o password.** Bonifici da fare subito, codici da comunicare, password da reinserire.
- **Il mittente ti chiede di non usare altri canali.** Frasi come "non chiamarmi" o "rispondi solo a questa email".

Nessun segno da solo dimostra che un'email è falsa. Se hai un dubbio, contatta il mittente in un altro modo. Per esempio, chiamalo al numero che conosci già.

## Come proteggere il tuo dominio dallo spoofing

Non puoi impedire a un truffatore di scrivere il tuo indirizzo. Puoi però dire ai server che ricevono come riconoscere le email false. Servono tre record nel DNS. Il DNS è l'elenco pubblico di impostazioni del tuo dominio. Il dominio è la parte dell'indirizzo dopo la @.

1. [SPF](/glossary/spf) elenca i server autorizzati a inviare email per il tuo dominio.
2. [DKIM](/glossary/dkim) aggiunge una firma digitale a ogni email che invii.
3. [DMARC](/glossary/dmarc) dice ai server cosa fare con un'email che non supera SPF né DKIM per il dominio nel campo Da. Questa corrispondenza si chiama [allineamento DMARC](/glossary/dmarc-alignment).

Con DMARC a `p=reject`, i server che seguono la tua policy bloccano le email false con il tuo dominio. Con `p=none` le email false arrivano lo stesso. Con DMARC a `quarantine` o `reject` puoi anche mostrare il tuo logo accanto alle email vere, tramite [BIMI](/glossary/bimi).

## Spoofing, phishing e domini simili

| Termine | Cosa significa | Esempio |
| --- | --- | --- |
| Spoofing | Nel campo Da c'è l'indirizzo vero di un'altra persona | Da: paolo.rossi@example.com, inviata da un truffatore |
| Phishing | Un'email che cerca di farti dare soldi, password o dati | Un link a una falsa pagina di accesso della banca |
| Dominio simile | Un dominio registrato per sembrare quello vero | Da: paolo.rossi@exampel.com, con due lettere invertite |

Lo spoofing è spesso uno strumento del phishing. Il dominio simile è un'altra tecnica. Il truffatore registra un dominio suo, quindi può superare SPF, DKIM e DMARC per quel dominio. DMARC sul tuo dominio non lo blocca. Per questo conviene leggere l'indirizzo lettera per lettera.

## Cosa fare se ricevi un'email falsificata

1. Non cliccare sui link e non aprire gli allegati.
2. Non rispondere e non fare pagamenti.
3. Controlla la richiesta con il mittente in un altro modo, per esempio con una telefonata.
4. Segnala l'email nel tuo programma di posta. In Gmail scegli Segnala phishing dal menu dei tre puntini.
5. Se lavori in un'azienda, avvisa il reparto IT.

## Email spoofing e verifica email

Un verificatore non può dirti chi ha inviato davvero un'email. La [verifica email](/email-checker) controlla solo se un indirizzo esiste e accetta posta. In un'email falsificata l'indirizzo del mittente è spesso vero, quindi risulterebbe valido. La verifica serve a te quando invii: con la [verifica email in blocco](/bulk-email-verifier) togli dalla lista gli indirizzi inesistenti, così meno email rimbalzano. Contro lo spoofing usa SPF, DKIM e DMARC, mentre per la qualità della lista usa il nostro [servizio di verifica email](/).
