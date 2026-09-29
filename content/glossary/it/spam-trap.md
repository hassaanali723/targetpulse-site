---
title: Spam trap
description: Cos'è una spam trap, i tre tipi e come ognuno finisce in una lista, cosa succede quando invii a una spam trap e come tenerle fuori dalla tua lista.
slug: spam-trap
date: 2026-09-29
updated: 2026-09-29
keyword: spam trap
short: Una spam trap è un indirizzo email usato solo per individuare i mittenti. Nessuno si iscrive con quell'indirizzo. I provider di posta e le organizzazioni antispam lo tengono sotto controllo. Se invii a una spam trap, significa che la tua lista è stata comprata, raccolta con uno scraper o mai pulita.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Rimuovi gli indirizzi morti prima che diventino spam trap
---

## Cos'è una spam trap

Una spam trap è un indirizzo email che esiste solo per individuare i mittenti con liste di scarsa qualità. Nessuno lo usa. Nessuno si è mai iscritto con quell'indirizzo. Quando un'email arriva a una spam trap, l'organizzazione che la gestisce sa una cosa con certezza. Il mittente non ha preso l'indirizzo da un modulo di iscrizione.

La documentazione di Amazon per il suo servizio email dice che le spam trap sono gestite da provider internet, provider di posta e organizzazioni antispam. Gli indirizzi sono segreti. Scopri di aver inviato a una spam trap solo dopo. La tua email inizia a finire nello spam, oppure il tuo indirizzo IP viene aggiunto a una [blacklist](/glossary/email-blacklist).

## I tre tipi di spam trap

**Trappole pristine.** Indirizzi creati solo per fare da trappola. Vengono messi su pagine web dove gli strumenti di scraping li troveranno. Non vengono mai usati per altro. Solo le liste raccolte con uno scraper o comprate li contengono.

**Trappole riciclate.** Indirizzi reali che sono stati abbandonati. Il provider ha chiuso l'indirizzo e per un periodo ha fatto rimbalzare le email. Poi ha riaperto l'indirizzo come trappola. Amazon li descrive come indirizzi "that were once valid, but have been unused (and bouncing) for an extended period of time", cioè un tempo validi ma inutilizzati e in bounce da molto tempo. Le liste che non vengono mai pulite li accumulano nel tempo.

**Trappole da errore di battitura.** Indirizzi su domini che somigliano a un dominio vero con un errore di scrittura. Esempio: una versione sbagliata del dominio di un grande provider. Catturano i mittenti che non controllano cosa le persone hanno scritto nel modulo di iscrizione.

## Cosa succede quando invii a una spam trap

Non ricevi nessun bounce. La trappola accetta l'email. L'organizzazione che la gestisce registra il tuo indirizzo IP e il tuo dominio. Cosa succede dopo dipende dall'organizzazione:

- Il tuo indirizzo IP può essere aggiunto a una blocklist.
- La tua reputazione presso quel provider può calare.
- Il tuo servizio di invio può mettere il tuo account sotto revisione.

Amazon non dice quanti colpi su spam trap fanno scattare un'azione. Dice che "even a small number of spamtrap hits can have a very negative effect", cioè anche pochi colpi possono avere un effetto molto negativo.

## Come tenere le spam trap fuori dalla lista

Nessuno può darti un elenco di indirizzi spam trap. Proteggi la lista con questi passaggi:

- Non comprare, affittare o raccogliere indirizzi con uno scraper. Le trappole pristine arrivano solo così.
- Rimuovi ogni indirizzo che fa hard bounce. Fallo subito. Amazon dice di rimuoverli "long before they are converted to spamtraps", molto prima che vengano trasformati in trappole.
- Smetti di inviare a chi non apre o non clicca da mesi. Le trappole riciclate sono tra questi.
- Verifica gli indirizzi al momento dell'iscrizione, così gli errori di battitura vengono intercettati mentre la persona è ancora sulla pagina.

## Cosa può e non può fare un verificatore

Un [verificatore di indirizzi email](/email-checker) non può individuare una spam trap. Una trappola riciclata è una casella che esiste e accetta email, quindi risulta valida.

La verifica aiuta in due modi. Rimuove gli indirizzi morti prima che vengano riciclati in trappole. Intercetta i domini con errori di battitura prima del primo invio. Non ti protegge da una lista comprata. Quella è una decisione, non un controllo.
