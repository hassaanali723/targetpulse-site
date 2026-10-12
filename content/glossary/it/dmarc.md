---
title: DMARC
description: Cos'è DMARC e perché esiste, come blocca un'email falsa, le tre policy none, quarantine e reject e un primo record DMARC spiegato parte per parte.
slug: dmarc
date: 2026-10-12
updated: 2026-10-12
keyword: dmarc
short: DMARC è una regola che pubblichi nel DNS del tuo dominio. Dice ai server che ricevono cosa fare con un'email che usa il tuo dominio ma non supera i controlli SPF e DKIM. Dice anche dove inviarti i report.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: Proteggi il tuo dominio e verifica la tua lista
---

## Cos'è DMARC?

DMARC sta per Domain-based Message Authentication, Reporting and Conformance. È una regola che pubblichi nel DNS del tuo dominio. Il dominio è la parte dell'indirizzo dopo la @, ad esempio example.com. Il DNS è l'elenco pubblico di impostazioni di un dominio. Ogni server di posta lo può leggere.

La regola DMARC dice due cose ai server che ricevono le email. Primo, cosa fare con un'email che dice di venire dal tuo dominio ma non supera i controlli [SPF](/glossary/spf) e [DKIM](/glossary/dkim). Secondo, a quale indirizzo inviarti i report su chi invia email con il tuo dominio.

DMARC esiste per un motivo semplice. Chiunque può scrivere il tuo indirizzo nel campo Da di un'email. Senza DMARC, il server che riceve non sa cosa vuoi che faccia con le email false.

## Un esempio: la falsa fattura scaduta

La tua azienda usa il dominio example.com. Un truffatore invia un'email a un tuo cliente. Il campo Da mostra billing@example.com. L'oggetto è "La tua fattura è scaduta". Nel testo c'è un link per pagare.

Il cliente vede example.com e si fida. Ma l'email non l'hai inviata tu. Ecco cosa succede se il tuo dominio ha un record DMARC con `p=reject`.

1. L'email falsa arriva al server Gmail del cliente.
2. Gmail controlla SPF. Il server del truffatore non è nel tuo record SPF, quindi SPF non passa per example.com.
3. Gmail controlla DKIM. L'email non ha una firma valida di example.com, quindi DKIM non passa.
4. Gmail legge il tuo record DMARC. Dice `p=reject`, cioè blocca.
5. Gmail blocca l'email. Il cliente non la vede mai.

Le tue email vere superano gli stessi controlli e arrivano normalmente.

## Come decide DMARC: l'allineamento

Un truffatore può superare SPF e DKIM con un dominio suo. Per esempio, può firmare l'email con il dominio truffa.example. Nel campo Da, però, scrive comunque il tuo dominio. SPF e DKIM da soli non collegano il controllo all'indirizzo che il lettore vede.

DMARC aggiunge questa regola. SPF o DKIM deve passare per lo stesso dominio che compare nel campo Da. Questa corrispondenza si chiama [allineamento DMARC](/glossary/dmarc-alignment). Basta che uno dei due controlli passi e sia allineato. Se nessuno dei due lo è, l'email non supera DMARC.

## Le tre policy DMARC

La policy è il valore del tag `p`. Indica cosa fare con un'email che non supera DMARC.

| Policy | Cosa succede all'email che non supera DMARC | Quando usarla |
| --- | --- | --- |
| `p=none` | Niente. Viene consegnata come sempre e tu ricevi i report. | All'inizio, mentre trovi tutti i servizi che inviano per te |
| `p=quarantine` | Finisce nella cartella spam. | Quando tutti i tuoi servizi di invio superano i controlli |
| `p=reject` | Viene bloccata del tutto. | Quando sei sicuro che nessuna email vera fallirà |

## Un primo record DMARC

Un record DMARC è un [record TXT](/glossary/dns-txt-record) pubblicato al nome `_dmarc.example.com`. Un record TXT è una riga di testo semplice nelle impostazioni DNS. Molti domini iniziano con questo record:

```
v=DMARC1; p=none; rua=mailto:reports@example.com
```

- `v=DMARC1` dice che è un record DMARC. Deve venire per primo.
- `p=none` è la policy. Per ora non cambia niente per le tue email.
- `rua=mailto:reports@example.com` è l'indirizzo che riceve i report. Di solito arriva un report al giorno da ogni provider. Il report elenca i server che hanno inviato email con il tuo dominio e dice se hanno superato i controlli.

Pubblica un solo record DMARC per dominio. Se un server ne trova due, li ignora entrambi.

## Come iniziare con DMARC

1. Pubblica un record con `p=none` e un indirizzo `rua`.
2. Leggi i report per alcune settimane. Trova ogni servizio che invia email per te, come la piattaforma di newsletter e il software di assistenza clienti.
3. Fai in modo che ognuno superi SPF o DKIM con il tuo dominio.
4. Passa a `p=quarantine`.
5. Quando i report non mostrano più email vere che falliscono, passa a `p=reject`.

Il nostro [generatore DMARC](/dmarc-generator) (in inglese) crea il record per te. La guida [cos'è un record DMARC](/blog/what-is-a-dmarc-record) (in inglese) spiega ogni tag e come leggere i report.

## Chi richiede DMARC

Google e Microsoft richiedono un record DMARC a chi invia 5.000 o più email al giorno ai loro account personali. Per Google sono gli account Gmail. Per Microsoft sono Outlook.com, Hotmail e Live. Per queste regole basta anche `p=none`, purché il dominio nel campo Da sia allineato con SPF o DKIM.

Ma `p=none` non blocca le email false. Per proteggere davvero il dominio serve `p=quarantine` o `p=reject`.

Lo standard attuale è la RFC 9989, pubblicata a maggio 2026. Ha sostituito la RFC 7489. I record esistenti continuano a funzionare, perché iniziano ancora con `v=DMARC1`.

## DMARC e verifica email

DMARC protegge il tuo dominio da chi lo usa senza permesso. Non controlla se gli indirizzi della tua lista esistono. Un'email che supera DMARC rimbalza comunque se la casella del destinatario è stata chiusa. Prima di inviare, controlla un indirizzo con la [verifica email](/email-checker) o tutta la lista con la [verifica email in blocco](/bulk-email-verifier). Il nostro [servizio di verifica email](/) trova gli indirizzi inesistenti, così meno email rimbalzano.
