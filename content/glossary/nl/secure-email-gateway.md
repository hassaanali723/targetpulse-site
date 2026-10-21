---
title: Secure email gateway (SEG)
description: Wat een secure email gateway is, hoe die e-mail filtert vóór de inbox van een bedrijf, hoe je er een herkent aan het MX-record en wat het doet met verificatie.
slug: secure-email-gateway
date: 2026-10-22
updated: 2026-10-22
keyword: secure email gateway
short: Een secure email gateway, of SEG, is een filter dat vóór de mailboxen van een bedrijf staat. Het controleert elke inkomende e-mail op spam, phishing en schadelijke bestanden voordat iemand hem ontvangt. Bekende voorbeelden zijn Mimecast, Proofpoint en Barracuda.
related: spam-filter, mx-record, catch-all-email, greylisting, email-spoofing, dmarc
cta: Verifieer adressen achter secure email gateways
---

## Wat is een secure email gateway?

Een secure email gateway, of SEG, is een beveiligingsgateway voor e-mail. Het is een beveiligingsfilter voor de e-mail van een bedrijf. Het staat tussen internet en de mailboxen van het bedrijf.

Elke e-mail die naar het bedrijf wordt gestuurd, gaat eerst naar de gateway. De gateway scant de e-mail. Hij zoekt naar spam, phishinglinks en schadelijke bijlagen. Veilige e-mail gaat door naar de mailbox. Gevaarlijke e-mail wordt geblokkeerd of vastgehouden.

Grote bedrijven, banken, ziekenhuizen en overheidsinstellingen gebruiken vaak een gateway. Bekende producten zijn onder andere Mimecast, Proofpoint en Barracuda.

## Een eenvoudig voorbeeld

1. **Daniel mailt een bank.** Daniel verkoopt software. Hij schrijft een manager bij een bank.
2. **De gateway ontvangt de e-mail eerst.** De e-mail van de bank loopt via een gateway van Proofpoint.
3. **De gateway scant de e-mail.** Hij controleert de links en de bijlage in de e-mail van Daniel.
4. **De e-mail wordt bezorgd.** Niets lijkt schadelijk, dus de gateway geeft de e-mail door aan de inbox van de manager.

Daniel ziet de gateway nooit. Als zijn e-mail een gevaarlijke link had gehad, was hij daar tegengehouden.

## Zo herken je een gateway

Kijk naar het [MX-record](/glossary/mx-record) van het domein. Het MX-record vertelt welke server de e-mail voor een domein ontvangt. Als er een gateway wordt gebruikt, verwijst het MX-record naar de gateway in plaats van naar de mailboxprovider.

| Gateway | Het MX-record eindigt vaak op |
|---|---|
| **Mimecast** | `mimecast.com` |
| **Proofpoint** | `pphosted.com` |
| **Barracuda** | `barracudanetworks.com` |

Je kunt het MX-record van elk domein opzoeken met een tool voor MX lookup.

## Waarom gateways invloed hebben op e-mailverificatie

Een email checker vraagt de ontvangende server of een adres bestaat. Op een domein met een gateway antwoordt de gateway in plaats van de echte mailserver.

Sommige gateways weigeren helemaal op controles te antwoorden. De meeste tools geven dan "onbekend", ook als de persoon echt bestaat. Andere gateways zeggen ja tegen elk adres. Dat ziet er hetzelfde uit als een [catch-all](/glossary/catch-all-email)-domein.

Dit raakt zakelijke lijsten het hardst, want contacten die bij grote bedrijven werken, zitten vaak achter een gateway.

## Hoe een verificatietool helpt

Giggal.ai herkent 15 gateways bij naam, waaronder Mimecast, Proofpoint en Barracuda, en geeft een echt resultaat voor adressen achter die gateways. Lees stap voor stap hoe dit werkt in [e-mails verifiëren achter een secure email gateway](/blog/how-to-verify-emails-behind-secure-email-gateways).
