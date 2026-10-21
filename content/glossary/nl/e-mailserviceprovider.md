---
title: E-mailserviceprovider (ESP)
description: Wat een e-mailserviceprovider is, voorbeelden zoals Mailchimp en SendGrid, hoe een ESP verschilt van Gmail of Outlook en waarom ESP's op je bounces letten.
slug: e-mailserviceprovider
date: 2026-10-12
updated: 2026-10-12
keyword: email service provider
short: Een e-mailserviceprovider, of ESP, is een bedrijf waarvan de dienst e-mails voor je verstuurt. Bedrijven gebruiken er een om nieuwsbrieven, bonnen en wachtwoordresets naar veel mensen te sturen. Mailchimp, Brevo en SendGrid zijn voorbeelden.
related: smtp, mta, deliverability, sender-reputation, bounce-rate, list-cleaning
cta: Verifieer je lijst voordat je hem uploadt naar je ESP
---

## Wat is een e-mailserviceprovider (ESP)?

Een e-mailserviceprovider (email service provider), of ESP, is een bedrijf dat e-mail verstuurt voor andere bedrijven. E-mail die zo wordt verstuurd, heet soms ESP-mail. Jij schrijft de e-mail en kiest wie hem krijgt. De servers van de ESP sturen hem naar elk adres. Een server is een computer die altijd aanstaat en een taak uitvoert voor andere computers.

Bedrijven gebruiken een ESP omdat een normale inbox niet gemaakt is om naar veel mensen te mailen. Gmail en Outlook.com beperken hoeveel e-mails één account per dag kan versturen. Ze hebben ook geen tools voor afmeldlinks, het verwerken van bounces of campagnerapporten.

## Een voorbeeld: een bakkerij verstuurt haar nieuwsbrief

Rosa heeft een bakkerij. Ze heeft 3.000 klanten op haar e-maillijst. Elke maand verstuurt ze een nieuwsbrief over nieuwe taarten en openingstijden.

Eerst probeerde ze de nieuwsbrief te versturen vanaf haar persoonlijke Gmail-account. Gmail hield haar na een paar honderd e-mails tegen, omdat persoonlijke accounts een daglimiet hebben. Haar klanten konden zich ook niet afmelden.

Daarom nam ze een account bij een ESP. Nu doet ze elke maand dit.

1. Ze uploadt haar lijst van 3.000 adressen naar de ESP.
2. Ze schrijft de nieuwsbrief in de editor van de ESP.
3. Ze klikt op verzenden. De servers van de ESP sturen de e-mail naar alle 3.000 adressen.
4. De ESP voegt aan elke e-mail een afmeldlink toe. Mensen die erop klikken, worden verwijderd.
5. De volgende dag leest ze een rapport. Dat toont hoeveel e-mails zijn gebouncet, geopend en aangeklikt.

## Voorbeelden van e-mailserviceproviders

| ESP | Wordt vaak gebruikt voor |
| --- | --- |
| Mailchimp | Nieuwsbrieven en marketingcampagnes |
| Brevo | Marketingcampagnes en transactionele e-mail |
| SendGrid | Transactionele e-mail vanuit apps, en marketingmail |
| Amazon SES | E-mail versturen vanuit apps en websites |
| Postmark | Transactionele e-mail zoals bonnen en wachtwoordresets |

## ESP en mailboxprovider

Deze twee worden vaak door elkaar gehaald. Ze doen verschillende dingen.

- Een **e-mailserviceprovider** verstuurt e-mail voor je. Voorbeelden: Mailchimp, SendGrid, Amazon SES.
- Een **mailboxprovider** host de inbox waarin mensen hun e-mail lezen. Voorbeelden: Gmail, Outlook.com, Yahoo Mail.

In het voorbeeld van de bakkerij verstuurt de ESP de nieuwsbrief van Rosa. Gmail, Outlook.com en Yahoo Mail zijn de plekken waar haar klanten hem lezen. De mailboxprovider bepaalt of de nieuwsbrief in de inbox of in spam terechtkomt. De ESP kan die beslissing niet nemen.

## Marketing-ESP en transactionele ESP

ESP's verwerken twee soorten e-mail.

- **Marketingmail** gaat tegelijk naar veel mensen, op het moment dat jij kiest. Nieuwsbrieven en aankondigingen van uitverkoop zijn marketingmail.
- **Transactionele e-mail** gaat naar één persoon nadat die iets heeft gedaan. Bonnen, wachtwoordresets en verzendupdates zijn transactionele e-mail.

Sommige ESP's richten zich op één soort. Postmark en Amazon SES worden vooral gebruikt voor transactionele e-mail. Mailchimp is het bekendst om marketingmail. Andere, zoals Brevo en SendGrid, bieden allebei. Veel bedrijven versturen de twee soorten via aparte accounts of diensten. Zo vertraagt een probleem met een campagne de wachtwoordresets niet.

## Wat een e-mailserviceprovider voor je doet

- Beheert de verzendservers en de software voor de [mail transfer agent](/glossary/mta) daarop.
- Verstuurt elke e-mail via [SMTP](/glossary/smtp), de standaardregels die servers gebruiken om e-mail aan elkaar door te geven.
- Voegt afmeldlinks toe en houdt een lijst bij van mensen die zich hebben afgemeld.
- Leest bounceberichten en stopt met mailen naar adressen die een hard bounce geven.
- Toont rapporten over opens, kliks, bounces en spamklachten.
- Helpt je SPF en DKIM in te stellen, zodat je e-mails bewijzen dat ze van je domein komen.

## Waarom ESP's op je bounces letten

Als je via een ESP verstuurt, gebruik je de servers en vaak ook de IP-adressen van de ESP. Een IP-adres is het nummer dat een server op internet aanduidt. Als je e-mails bouncen of spamklachten krijgen, daalt de reputatie van die IP-adressen. Andere klanten die dezelfde IP-adressen delen, kunnen daar ook last van krijgen.

Daarom houden veel ESP's het bouncepercentage van elk account in de gaten. Als dat te hoog is, kunnen ze het account controleren of pauzeren. Een lijst met veel oude of verkeerd getypte adressen leidt tot een hoog [bouncepercentage](/glossary/bounce-rate).

## E-mailserviceproviders en e-mailverificatie

Verifieer je lijst voordat je hem uploadt naar je ESP. Een [email checker](/email-checker) vertelt je of één adres bestaat. Met [bulk e-mailverificatie](/bulk-email-verifier) controleer je een heel bestand, zoals de 3.000 adressen van Rosa, en zie je welke adressen zouden bouncen. Die verwijder je, en daarna upload je de opgeschoonde lijst. Deze stap van [e-mailverificatie](/) vervangt je ESP niet, maar verlaagt wel je bouncepercentage en beschermt je ESP-account.
