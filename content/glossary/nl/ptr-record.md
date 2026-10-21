---
title: PTR-record
description: Wat een PTR-record is, waarom mailservers het controleren, wat er gebeurt als een verzendend IP-adres geen PTR-record heeft en hoe je er een instelt.
slug: ptr-record
date: 2026-09-29
updated: 2026-10-12
keyword: ptr record
short: Een PTR-record is een DNS-record dat een IP-adres aan een servernaam koppelt. Het is het omgekeerde van een normaal DNS-record. Mailservers controleren het PTR-record van het IP-adres dat naar hen verstuurt, en sommige weigeren e-mail van een IP-adres zonder PTR-record.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Controleer je lijst, niet alleen je DNS
---

## Wat is een PTR-record?

Een PTR-record is een instelling die een IP-adres aan een servernaam koppelt. PTR staat voor pointer.

Eerst een paar begrippen. Een server is een computer die altijd aanstaat, bijvoorbeeld om e-mail te versturen. Een IP-adres is het nummer dat een server op internet aanduidt, zoals `203.0.113.10`. Een hostnaam is de naam van één server, zoals `mail.example.com`. DNS is het openbare register dat namen en nummers aan elkaar koppelt. Elke regel in DNS heet een record.

Een normaal DNS-record koppelt een naam aan een IP-adres. Zo verwijst `mail.example.com` naar `203.0.113.10`. Een PTR-record doet het omgekeerde. Het koppelt `203.0.113.10` aan `mail.example.com`. Dit heet reverse DNS.

Het PTR-record staat niet in de DNS van je domein. Het staat in een aparte DNS-zone die van de eigenaar van het IP-adres is. Een zone is de reeks DNS-records die één eigenaar beheert. De eigenaar is meestal je hostingbedrijf of je e-mailprovider. Om een PTR-record in te stellen of te wijzigen, vraag je het aan hen.

## Een eenvoudig voorbeeld

Dit gebeurt er als een verzendende server geen PTR-record heeft.

1. **Een bedrijf richt een mailserver in.** Green Garden Ltd heeft een eigen mailserver op het IP-adres `203.0.113.10`.
2. **De server verstuurt een e-mail.** De server stuurt een nieuwsbrief naar een klant met een Gmail-adres.
3. **Gmail zoekt het PTR-record op.** Gmail ziet het IP-adres `203.0.113.10`. Gmail vraagt aan DNS welke naam erbij hoort.
4. **Er komt geen antwoord.** Niemand heeft een PTR-record voor dat IP-adres ingesteld.
5. **Gmail weigert de e-mail.** Gmail geeft de code `550 5.7.25` terug. Het bericht zegt dat het verzendende IP-adres geen PTR-record heeft.
6. **Green Garden lost het op.** Het bedrijf vraagt zijn hostingbedrijf om het PTR-record voor `203.0.113.10` in te stellen op `mail.greengarden.example`.
7. **De volgende e-mail slaagt voor deze controle.** Gmail zoekt het PTR-record opnieuw op en vindt een naam die terugverwijst naar hetzelfde IP-adres.

Het adres van de klant was de hele tijd in orde. Alleen de instelling bij de afzender ontbrak.

## Waarom mailservers het controleren

Als je server verbinding maakt met een ontvangende server, ziet de ontvangende server je IP-adres. Die zoekt het PTR-record van dat IP-adres op. Daarna controleert hij twee dingen:

1. Heeft het IP-adres een PTR-record?
2. Verwijst de hostnaam in het PTR-record terug naar hetzelfde IP-adres?

**Voorbeeld:** het PTR-record van `203.0.113.10` zegt `mail.greengarden.example`. Het normale DNS-record van `mail.greengarden.example` zegt `203.0.113.10`. Ze verwijzen naar elkaar, dus op beide vragen is het antwoord ja.

Als beide waar zijn, lijkt de afzender een echte mailserver die iemand bewust heeft ingericht. Als er geen PTR-record is, lijkt de afzender op een van deze drie dingen:

- een internetverbinding bij iemand thuis;
- een besmette computer;
- een server die niemand heeft ingesteld.

Spam komt vaak van zulke afzenders.

## Wat er gebeurt zonder PTR-record

Sommige providers weigeren de e-mail. De foutcodelijst van Gmail noemt `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. Dit is een definitieve weigering. Je verzendtool noteert het als een [hard bounce](/glossary/hard-bounce), ook al bestaat het adres. Een hard bounce is een e-mail die definitief is geweigerd.

Andere providers accepteren de e-mail, maar geven hem een lagere score. Met een lagere score komt de e-mail eerder in de spammap terecht. Een ontbrekend PTR-record kan je dus schaden, ook als er geen foutmelding terugkomt.

## Zo stel je een PTR-record in

1. Zoek het IP-adres op waarvandaan je e-mail wordt verstuurd.
2. Kies de hostnaam waarnaar het moet verwijzen. Voorbeeld: `mail.example.com`.
3. Zorg dat die hostnaam een normaal DNS-record heeft dat naar hetzelfde IP-adres verwijst.
4. Vraag je hostingbedrijf of e-mailprovider om het PTR-record van het IP-adres in te stellen op die hostnaam.
5. Doe een reverse DNS-opzoeking op het IP-adres. Die hoort de hostnaam te tonen die je in stap 2 hebt gekozen.

Als je verstuurt via Google Workspace, Microsoft 365, SendGrid of Amazon SES, is de provider eigenaar van de verzendende IP-adressen. De PTR-records zijn dan al ingesteld. Je hoeft alleen een PTR-record in te stellen als je een eigen mailserver hebt of een dedicated IP-adres gebruikt. Een dedicated IP-adres is een adres waarvandaan alleen jouw bedrijf e-mail verstuurt.

## PTR-records en verificatie

Een PTR-record gaat over het IP-adres van de afzender. Het gaat niet over het adres van de ontvanger. Een [email checker](/email-checker) heeft je PTR-record niet nodig om je lijst te verifiëren. Voor [bulk e-mailverificatie](/bulk-email-verifier) is het ook niet nodig.

Een verificatietool heeft wel een PTR-record nodig op elk van zijn eigen IP-adressen. Zonder die records weigeren ontvangende servers om met de tool te praten. Dit is een van de redenen waarom een verificatiedienst andere antwoorden krijgt dan een script dat vanaf een laptop draait. [E-mailverificatie](/) controleert of de adressen op je lijst bestaan. Je eigen PTR-record is een aparte instelling, die je regelt met je hostingbedrijf of e-mailprovider.
