---
title: Enregistrement SPF
description: Ce qu'est un enregistrement SPF, à quoi il ressemble, comment les serveurs le vérifient, la limite de dix requêtes DNS et les codes de rebond en cas d'échec.
slug: enregistrement-spf
date: 2026-09-29
updated: 2026-09-29
keyword: enregistrement spf
short: Un enregistrement SPF est un enregistrement DNS sur votre domaine qui liste les serveurs autorisés à envoyer des e-mails pour ce domaine. Les serveurs de réception le vérifient pour confirmer qu'un e-mail qui prétend venir de votre domaine a été envoyé par un de vos serveurs.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: L'authentification corrige un type de rebond. La vérification corrige l'autre
---

## Ce qu'est un enregistrement SPF

SPF signifie Sender Policy Framework. Il est défini dans la RFC 7208. Un enregistrement SPF est un [enregistrement DNS TXT](/glossary/dns-txt-record) sur votre domaine. Il liste les serveurs autorisés à envoyer des e-mails avec votre nom de domaine.

Un enregistrement SPF simple ressemble à ceci :

`v=spf1 include:_spf.google.com -all`

Chaque partie a un sens :

- `v=spf1` indique qu'il s'agit d'un enregistrement SPF.
- `include:_spf.google.com` indique que tout serveur listé par Google peut envoyer pour ce domaine.
- `-all` indique de refuser les e-mails de tout autre serveur.
- `~all` est une fin plus souple. Elle indique de traiter les e-mails d'autres serveurs comme suspects, mais de ne pas les refuser.

## Comment les serveurs de réception le vérifient

Quand un e-mail arrive, le serveur de réception lit le domaine dans le [Return-Path](/glossary/return-path). Le Return-Path est l'adresse à laquelle les rebonds sont envoyés. Le serveur récupère l'enregistrement SPF de ce domaine. Puis il vérifie si l'adresse IP qui a livré l'e-mail figure dans l'enregistrement.

- **Pass.** L'adresse IP figure dans l'enregistrement. L'e-mail vient d'un serveur autorisé.
- **Fail.** L'adresse IP ne figure pas dans l'enregistrement et l'enregistrement se termine par `-all`. Le serveur peut refuser l'e-mail.
- **Softfail.** L'adresse IP ne figure pas dans l'enregistrement et l'enregistrement se termine par `~all`. Le serveur accepte l'e-mail mais le marque comme suspect.

Microsoft Exchange Online refuse un e-mail en échec avec `5.7.23 The message was rejected because of Sender Policy Framework violation`. Gmail répond `550 5.7.26` à un e-mail sans aucune authentification. Les deux codes commencent par 5. Votre outil d'envoi les enregistre comme des [hard bounces](/glossary/hard-bounce) même si l'adresse est correcte.

## Qui a besoin d'un enregistrement SPF

Toute personne qui envoie des e-mails en masse en a besoin. Les consignes aux expéditeurs de Google exigent SPF et DKIM des expéditeurs de 5 000 messages ou plus par jour vers Gmail. Elles exigent aussi DMARC. Microsoft exige les trois mêmes enregistrements des domaines qui envoient plus de 5 000 e-mails par jour vers Outlook.com, Hotmail et Live. Microsoft l'applique depuis le 5 mai 2025.

Si vous envoyez moins, les enregistrements comptent quand même. Sans eux, votre e-mail a plus de chances d'aller dans le dossier spam.

## La limite de dix requêtes DNS

La RFC 7208 limite un contrôle SPF à dix requêtes DNS. Chaque `include:`, `a`, `mx` et `redirect` dans votre enregistrement compte pour une requête. Les requêtes dans les enregistrements que vous incluez comptent aussi. Si le total dépasse dix, le contrôle renvoie une erreur permanente. La plupart des serveurs de réception traitent cette erreur comme un fail.

C'est ainsi que les enregistrements SPF se cassent le plus souvent. Une entreprise ajoute un outil e-mail après l'autre à l'enregistrement. Quand la onzième requête est ajoutée, tout l'enregistrement cesse de fonctionner.

## SPF est l'un de trois enregistrements

- SPF vérifie quel serveur a envoyé l'e-mail.
- [DKIM](/glossary/dkim) vérifie que l'e-mail n'a pas été modifié après l'envoi.
- [DMARC](/glossary/dmarc) relie les deux contrôles à l'adresse De que le lecteur voit. Il indique aussi aux serveurs de réception quoi faire quand les contrôles échouent.

Un domaine a besoin des trois. Le guide [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) montre comment les codes d'échec apparaissent dans un rapport de rebonds.
