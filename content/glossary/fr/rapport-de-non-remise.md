---
title: Rapport de non-remise (NDR)
description: Ce qu’est un rapport de non-remise, qui l’envoie, comment lire le code et les parties qu’il contient, et que faire quand vous en recevez un. Avec un exemple simple.
slug: rapport-de-non-remise
date: 2026-10-22
updated: 2026-10-22
keyword: rapport de non remise
short: Un rapport de non-remise, ou NDR, est un e-mail automatique qui vous dit qu’un message que vous avez envoyé n’a pas été livré. Il cite l’adresse qui a échoué et donne un code qui explique pourquoi. La plupart des gens l’appellent un avis de rebond.
related: mailer-daemon, hard-bounce, soft-bounce, backscatter, return-path, smtp
cta: Retirez les adresses qui vous enverraient un NDR
---

## Qu’est-ce qu’un rapport de non-remise ?

Un rapport de non-remise, ou NDR (Non-Delivery Report), est un e-mail automatique qui vous dit qu’un message n’a pas été livré. Il arrive quelques secondes ou quelques heures après l’envoi.

La plupart des gens l’appellent un avis de rebond. Le nom technique dans les normes de l’e-mail est delivery status notification, ou DSN. Les trois noms désignent la même chose.

Un NDR vient en général d’une adresse comme `MAILER-DAEMON@` ou `postmaster@`. Ce sont des expéditeurs automatiques sur un serveur de messagerie. Personne n’écrit ces messages à la main. Un programme appelé le [Mailer-Daemon](/glossary/mailer-daemon) les crée.

## Un exemple simple

Voici comment un NDR vous arrive.

1. **Ana envoie une facture.** Ana est comptable. Elle envoie une facture par e-mail à un client, à l’adresse mark@oldfirm.example.
2. **L’adresse n’existe plus.** Mark a quitté l’entreprise l’an dernier. Sa boîte a été supprimée.
3. **Le serveur refuse l’e-mail.** Le serveur de messagerie de oldfirm.example n’a pas de boîte pour Mark. Il refuse l’e-mail.
4. **Le NDR arrive.** Une minute plus tard, Ana reçoit un e-mail intitulé « Non remis » ou « Delivery Status Notification (Failure) ».
5. **Ana lit le code.** Elle y trouve `550 5.1.1`. Ce code veut dire que l’adresse n’existe pas.
6. **Ana corrige.** Elle demande au client un nouveau contact et lui envoie la facture.

Le NDR n’a pas causé le problème. Il a seulement prévenu Ana.

## Ce que contient un NDR

La plupart des NDR ont les mêmes parties, même s’ils ont un aspect différent dans chaque logiciel de messagerie.

| Partie | Ce qu’elle montre |
|---|---|
| **Adresse en échec** | L’adresse qui n’a pas pu recevoir votre e-mail |
| **Code d’erreur** | Un code court, par exemple `550 5.1.1`, qui explique le problème |
| **Message du serveur** | Une phrase du serveur de réception, par exemple « user unknown » (utilisateur inconnu) |
| **Votre e-mail d’origine** | Souvent joint, pour que vous voyiez ce qui a échoué |

## Comment lire le code

Le premier chiffre du code vous dit le type de problème.

| Premier chiffre | Type | Ce que cela veut dire | Ce qu’il faut faire |
|---|---|---|---|
| **5** | [Hard bounce](/glossary/hard-bounce) | L’échec est définitif. L’adresse n’existe peut-être pas, ou le serveur vous a bloqué. | Ne renvoyez pas à cette adresse avant de savoir lequel des deux cas s’applique. |
| **4** | [Soft bounce](/glossary/soft-bounce) | L’échec est temporaire. La boîte est peut-être pleine ou le serveur occupé. | Attendez. Votre serveur de messagerie réessaie tout seul. |

Deux exemples courants :

- `550 5.1.1` veut dire que l’adresse n’existe pas. Retirez-la de votre liste.
- `452 4.2.2` veut dire que la boîte est pleine. Réessayez plus tard.

## Quand vous recevez un NDR pour un e-mail que vous n’avez pas envoyé

Parfois, un NDR arrive pour un e-mail que vous n’avez jamais écrit. Cela s’appelle le [backscatter](/glossary/backscatter). Un spammeur a mis votre adresse dans le champ de l’expéditeur, l’e-mail a échoué et le NDR vous est arrivé. En général, votre compte n’a pas été piraté. Publiez des enregistrements SPF, DKIM et DMARC pour votre domaine. Les serveurs de réception pourront alors refuser les faux e-mails à la place.

## Pourquoi les NDR comptent pour les expéditeurs

Chaque NDR venant d’une adresse morte compte contre vous. Les fournisseurs de messagerie comme Google et Microsoft surveillent combien de vos e-mails vont vers des adresses qui n’existent pas. Beaucoup de NDR avec `5.1.1` leur indiquent que votre liste est ancienne.

**Exemple :** une boutique envoie une offre à 5 000 anciens contacts. Si 400 NDR reviennent, cela fait 8 % de la liste. Beaucoup de plateformes d’envoi examinent ou suspendent les comptes avec de tels chiffres. Ces chiffres sont seulement un exemple.

## Comment un vérificateur aide

Un [vérificateur d’email](/email-checker) interroge le serveur de réception sur une adresse avant que vous envoyiez. Le serveur donne la même réponse que celle qu’il mettrait dans un NDR. La différence est qu’aucun e-mail n’a été envoyé. Rien ne rebondit et votre réputation ne change pas.
