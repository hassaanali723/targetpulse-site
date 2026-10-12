---
title: Enregistrement SPF
description: Ce qu'est un enregistrement SPF, à quoi il ressemble, comment les serveurs le vérifient, la limite de dix requêtes DNS et les codes de rebond en cas d'échec.
slug: enregistrement-spf
date: 2026-09-29
updated: 2026-10-12
keyword: enregistrement spf
short: Un enregistrement SPF est une ligne publiée dans le DNS de votre domaine, qui liste les serveurs autorisés à envoyer des e-mails en son nom. Le serveur qui reçoit un e-mail le lit pour vérifier que l'e-mail vient bien d'un de vos serveurs.
related: dkim, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, return-path
cta: L'authentification corrige un type de rebond. La vérification corrige l'autre
---

## Qu'est-ce qu'un enregistrement SPF ?

SPF signifie Sender Policy Framework. Il est défini dans la RFC 7208, un document qui fixe la norme. Voici les mots à connaître :

- **Domaine :** la partie de votre adresse e-mail après le @, par exemple example.com.
- **Serveur :** un ordinateur qui envoie ou reçoit des e-mails.
- **DNS :** l'annuaire public d'Internet, qui relie les noms de domaine aux serveurs.
- **Adresse IP :** le numéro qui identifie un serveur.

Un enregistrement SPF est un [enregistrement DNS TXT](/glossary/dns-txt-record) sur votre domaine. Un enregistrement TXT est une ligne de texte publiée dans le DNS. L'enregistrement SPF liste les serveurs autorisés à envoyer des e-mails avec votre nom de domaine.

Un enregistrement SPF simple ressemble à ceci :

`v=spf1 include:_spf.google.com -all`

Chaque partie a un sens :

- `v=spf1` indique qu'il s'agit d'un enregistrement SPF.
- `include:_spf.google.com` indique que tout serveur listé par Google peut envoyer pour ce domaine.
- `-all` indique de refuser les e-mails de tout autre serveur.
- `~all` est une fin plus souple. Elle indique de traiter les e-mails d'autres serveurs comme suspects, mais de ne pas les refuser.

## Un exemple simple

La société "Jardin Plus" utilise le domaine jardinplus.example. Ses employés envoient leurs e-mails avec Google Workspace. Son enregistrement SPF est `v=spf1 include:_spf.google.com -all`.

1. **Un vrai e-mail part.** Inès, de Jardin Plus, écrit à un client chez Gmail. L'e-mail passe par un serveur de Google.
2. **Gmail lit l'enregistrement SPF.** Il voit que les serveurs de Google sont autorisés.
3. **Le contrôle passe.** L'e-mail d'Inès continue vers la boîte du client.
4. **Un faux e-mail part.** Un fraudeur envoie un e-mail qui prétend venir de jardinplus.example. Il utilise son propre serveur.
5. **Gmail lit le même enregistrement SPF.** Le serveur du fraudeur n'est pas dans la liste. L'enregistrement se termine par `-all`.
6. **Le contrôle échoue.** Gmail peut refuser le faux e-mail.

## Comment les serveurs de réception le vérifient

Quand un e-mail arrive, le serveur de réception lit le domaine dans le [Return-Path](/glossary/return-path). Le Return-Path est l'adresse à laquelle les rebonds sont envoyés. Un rebond est un avis qui dit qu'un e-mail n'a pas été livré. Le serveur récupère l'enregistrement SPF de ce domaine. Puis il vérifie si l'adresse IP qui a livré l'e-mail figure dans l'enregistrement.

| Résultat | Ce qui s'est passé | Ce que fait le serveur |
|---|---|---|
| **Pass** | L'adresse IP figure dans l'enregistrement. | L'e-mail vient d'un serveur autorisé. |
| **Fail** | L'adresse IP n'y figure pas et l'enregistrement se termine par `-all`. | Le serveur peut refuser l'e-mail. |
| **Softfail** | L'adresse IP n'y figure pas et l'enregistrement se termine par `~all`. | Le serveur accepte l'e-mail mais le marque comme suspect. |

Microsoft Exchange Online refuse un e-mail en échec avec `5.7.23 The message was rejected because of Sender Policy Framework violation`. Cela veut dire que le message a été refusé à cause d'une violation SPF. Gmail répond `550 5.7.26` à un e-mail sans aucune authentification. Les deux codes commencent par 5. Votre outil d'envoi les enregistre comme des [hard bounces](/glossary/hard-bounce), même si l'adresse est correcte.

## Qui a besoin d'un enregistrement SPF

Toute personne qui envoie des e-mails en masse en a besoin. Les consignes aux expéditeurs de Google exigent SPF et DKIM des expéditeurs de 5 000 messages ou plus par jour vers Gmail. Elles exigent aussi DMARC. Microsoft exige les trois mêmes enregistrements des domaines qui envoient plus de 5 000 e-mails par jour vers Outlook.com, Hotmail et Live. Microsoft l'applique depuis le 5 mai 2025.

Si vous envoyez moins, l'enregistrement SPF compte quand même. Sans lui, votre e-mail a plus de chances d'aller dans le dossier spam.

## La limite de dix requêtes DNS

La RFC 7208 limite un contrôle SPF à dix requêtes DNS. Une requête DNS est une question posée à l'annuaire. Chaque `include:`, `a`, `mx` et `redirect` dans votre enregistrement compte pour une requête. Les requêtes dans les enregistrements que vous incluez comptent aussi. Si le total dépasse dix, le contrôle renvoie une erreur permanente. La plupart des serveurs de réception traitent cette erreur comme un fail.

C'est la cause de panne la plus courante d'un enregistrement SPF. Une entreprise ajoute un outil e-mail après l'autre.

**Exemple :** une entreprise ajoute Google Workspace, puis un outil de newsletter, puis un outil de facturation, puis un outil d'assistance client. Chaque `include:` cache d'autres requêtes. Quand la onzième requête est ajoutée, tout l'enregistrement SPF cesse de fonctionner. Les e-mails de tous les outils échouent au contrôle.

## SPF est l'un de trois enregistrements

- SPF vérifie quel serveur a envoyé l'e-mail.
- [DKIM](/glossary/dkim) vérifie que l'e-mail n'a pas été modifié après l'envoi.
- [DMARC](/glossary/dmarc) relie les deux contrôles à l'adresse De que le lecteur voit. Il indique aussi aux serveurs de réception quoi faire quand les contrôles échouent.

Un domaine a besoin des trois. Le guide [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) montre comment les codes d'échec apparaissent dans un rapport de rebonds.

## Enregistrement SPF et vérification d'email

Un enregistrement SPF et la vérification règlent deux problèmes différents. L'enregistrement SPF prouve que vos e-mails viennent de vos serveurs. La [vérification d'email](/) contrôle si l'adresse du destinataire existe. Un e-mail qui passe SPF fait quand même un hard bounce s'il part vers une adresse morte. Avant d'envoyer, vous pouvez [vérifier une adresse mail](/email-checker) ou passer votre liste dans la [vérification d'email en masse](/bulk-email-verifier).
