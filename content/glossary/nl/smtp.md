---
title: SMTP
description: Wat SMTP betekent, hoe een e-mail van de ene server naar de andere gaat, wat een SMTP-server is, welke SMTP-poorten je gebruikt en wat foutantwoorden betekenen.
slug: smtp
date: 2026-10-12
updated: 2026-10-12
keyword: smtp
short: SMTP staat voor Simple Mail Transfer Protocol. Het is de reeks regels die mailservers gebruiken om e-mail naar elkaar te sturen. Elke e-mail die je verstuurt, gaat via SMTP van server naar server.
related: mta, mx-record, smtp-error-codes, esp, hard-bounce, greylisting
cta: Controleer elk adres bij de ontvangende server voordat je verstuurt
---

## Wat is SMTP? (betekenis van SMTP)

SMTP staat voor Simple Mail Transfer Protocol. Een protocol is een vaste reeks regels die twee computers volgen om met elkaar te praten. SMTP is de reeks regels voor het versturen van e-mail. De huidige versie is vastgelegd in RFC 5321. Een RFC is een openbaar document dat een internetstandaard vastlegt.

Een server is een computer die altijd aanstaat en een taak uitvoert voor andere computers. Een mailserver verstuurt, ontvangt of bewaart e-mail. Het korte antwoord op "wat is SMTP" is dus dit. Het is de manier waarop mailservers e-mail aan elkaar doorgeven.

SMTP verplaatst alleen e-mail. Het toont je inbox niet. Dat doen andere protocollen, zoals verderop wordt uitgelegd.

## Een voorbeeld: Ana stuurt een e-mail naar Ben

Ana gebruikt Gmail. Ben werkt bij een bedrijf dat Northwind heet. Zijn adres is ben@northwind.com, en zijn bedrijf gebruikt Outlook via Microsoft 365. Ana schrijft een e-mail en klikt op Verzenden. Dit gebeurt er.

1. De verzendende server van Gmail neemt de e-mail van Ana aan.
2. De server leest het deel na het @-teken, northwind.com. Dit is het domein, de naam van het bedrijf van Ben op internet.
3. De server zoekt het MX-record van northwind.com op in DNS. DNS is het openbare register van internet. Een [MX-record](/glossary/mx-record) noemt de server die e-mail ontvangt voor een domein.
4. Het MX-record verwijst naar een server van Microsoft. De server van Gmail opent een verbinding ermee.
5. De server van Gmail stelt zich voor met het commando `EHLO`. Daarna geeft hij het adres van de afzender met `MAIL FROM`.
6. Hij geeft het adres van de ontvanger met `RCPT TO:<ben@northwind.com>`.
7. De server van Microsoft antwoordt `250`. Dit betekent dat hij e-mail voor dat adres accepteert.
8. De server van Gmail verstuurt de e-mail zelf met het commando `DATA`.
9. De server van Microsoft antwoordt opnieuw `250`. Hij heeft de e-mail geaccepteerd en zet die in de mailbox van Ben.
10. De server van Gmail beëindigt de verbinding met `QUIT`.

Ana en Ben zien geen van deze stappen. Ana ziet "Verzonden", en Ben ziet een nieuwe e-mail.

## Wat een SMTP-server is

Een SMTP-server is een server die e-mail verstuurt of ontvangt via SMTP. In het voorbeeld zijn de verzendende server van Gmail en de ontvangende server van Microsoft allebei SMTP-servers. De software die erop draait, heet een [mail transfer agent](/glossary/mta), of MTA.

Je komt SMTP-servers tegen als je een e-mailprogramma of een app instelt. Stel dat je wilt dat een contactformulier op een website e-mail verstuurt via een Gmail-account. Het formulier heeft dan het adres van de SMTP-server van Gmail nodig, en dat is `smtp.gmail.com`. Het heeft ook een poortnummer, een gebruikersnaam en een wachtwoord nodig. Het formulier geeft elke e-mail aan die server, en de server stuurt hem door.

Bedrijven die veel e-mail versturen, gebruiken meestal een [e-mailserviceprovider](/glossary/esp) zoals SendGrid of Amazon SES. Deze diensten beheren SMTP-servers voor hun klanten.

## SMTP-poorten: 25, 587 en 465

Een poort is een nummer dat een server vertelt voor welke dienst een verbinding bedoeld is. SMTP gebruikt drie gebruikelijke poortnummers.

| Poort | Waarvoor hij wordt gebruikt | Versleuteling |
| --- | --- | --- |
| 25 | De ene mailserver stuurt e-mail naar een andere mailserver | Optioneel, aangezet met STARTTLS |
| 587 | Een app of e-mailprogramma geeft e-mail aan de eigen SMTP-server | Aangezet met STARTTLS vóór het inloggen |
| 465 | Dezelfde taak als poort 587 | Versleuteld vanaf het eerste moment |

STARTTLS is een commando dat een open verbinding omzet in een versleutelde verbinding. Versleuteling maakt de inhoud onleesbaar, zodat niemand tussen de twee servers die kan lezen.

Als je een app of een e-mailprogramma instelt, gebruik dan poort 587 of 465. Veel internetproviders voor thuisgebruik en cloudhosts blokkeren uitgaande verbindingen op poort 25. Ze doen dit om te voorkomen dat besmette computers spam versturen.

## SMTP, IMAP en POP3

SMTP verstuurt e-mail. Je kunt er geen e-mail mee lezen. Twee andere protocollen regelen het lezen.

- **SMTP** verstuurt e-mail, van je programma naar je server en van server naar server.
- **IMAP** laat een e-mailprogramma e-mail lezen die op de server blijft staan. Je ziet dezelfde inbox op je telefoon en op je laptop.
- **POP3** downloadt e-mail naar één apparaat. Oudere instellingen verwijderden de e-mail daarna vaak van de server.

Een e-mailprogramma zoals Outlook of Apple Mail gebruikt dus twee instellingen. Het gebruikt IMAP of POP3 om je inbox te lezen. Het gebruikt SMTP om te versturen.

## Als een SMTP-server nee zegt

Elk SMTP-antwoord begint met een code van drie cijfers. Het eerste cijfer vertelt je wat voor antwoord het is.

- **2xx betekent gelukt.** `250` betekent dat het verzoek is geaccepteerd.
- **4xx betekent een tijdelijk probleem.** De verzendende server probeert het later opnieuw. Voorbeeld: `451`, probeer het later opnieuw.
- **5xx betekent een definitieve fout.** Opnieuw versturen mislukt ook. Voorbeeld: `550 5.1.1`, de mailbox bestaat niet.

Een 5xx-antwoord op een echte e-mail wordt een [hard bounce](/glossary/hard-bounce). Een 4xx-antwoord is een [soft bounce](/glossary/soft-bounce). De pagina over [SMTP-foutcodes](/glossary/smtp-error-codes) noemt de gebruikelijke codes en wat elke code betekent.

Sommige servers sturen bewust een 4xx-antwoord naar afzenders die ze nog niet kennen. Dit heet [greylisting](/glossary/greylisting). De eerste poging mislukt, en een latere poging wordt geaccepteerd.

## SMTP en e-mailverificatie

Een [email verifier](/email-checker) gebruikt hetzelfde SMTP-gesprek als in het voorbeeld hierboven, maar stopt vóór stap 8. De tool vraagt naar het adres met `RCPT TO`, en een antwoord `250` betekent dat de server e-mail voor dat adres accepteert. Een antwoord `550 5.1.1` betekent dat de mailbox niet bestaat. De tool stuurt daarna `QUIT`, dus er wordt nooit een e-mail verstuurd. [Bulk e-mailverificatie](/bulk-email-verifier) voert deze [e-mailverificatie](/) uit voor een hele lijst, zodat je adressen kunt verwijderen die zouden bouncen.
