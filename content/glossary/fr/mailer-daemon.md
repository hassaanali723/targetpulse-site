---
title: Mailer-Daemon
description: Ce qu'est un message du Mailer-Daemon, comment lire le code qu'il contient et que faire s'il concerne un e-mail que vous n'avez pas envoyé.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-09-29
keyword: mailer daemon
short: Le Mailer-Daemon est la partie d'un serveur de messagerie qui envoie des messages automatiques. La plupart de ces messages sont des avis de rebond. Un message du Mailer-Daemon signifie qu'un e-mail que vous avez envoyé n'a pas été livré.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Retirez les adresses qui rebondissent avant d'envoyer
---

## Ce qu'est un Mailer-Daemon

Un daemon est un programme qui tourne en arrière-plan sur un serveur. Le Mailer-Daemon est le programme qui gère les e-mails qui ne peuvent pas être livrés. Quand votre e-mail est refusé, le Mailer-Daemon vous envoie un avis. Le nom de l'expéditeur est généralement `MAILER-DAEMON@` suivi du domaine du serveur, ou `postmaster@`.

L'avis s'appelle un [rapport de non-remise](/glossary/ndr). Il vous dit quelle adresse a échoué, quand elle a échoué et pourquoi.

## Comment lire le message

La partie importante du message est le code. Cherchez un nombre à trois chiffres et un nombre avec des points. Exemple : `550 5.1.1`.

- Un code qui commence par **5** est un [hard bounce](/glossary/hard-bounce). L'adresse n'existe pas ou le serveur a bloqué votre e-mail. Ne renvoyez pas avant de savoir lequel des deux cas s'applique.
- Un code qui commence par **4** est un [soft bounce](/glossary/soft-bounce). La boîte est pleine ou le serveur est occupé. Votre serveur de messagerie réessaie tout seul.

Le texte à côté du code est écrit par le serveur de réception. Deux exemples :

- Gmail : `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft : `5.4.1 Recipient address rejected: Access denied`. La documentation de Microsoft dit que cela signifie "the recipient's address doesn't exist", c'est-à-dire que l'adresse du destinataire n'existe pas.

## Messages du Mailer-Daemon pour des e-mails que vous n'avez pas envoyés

Parfois vous recevez un avis de rebond pour un e-mail que vous n'avez jamais envoyé. Cela s'appelle le [backscatter](/glossary/backscatter). Un spammeur a mis votre adresse dans le champ De de ses e-mails. Quand ces e-mails rebondissent, les avis vous parviennent.

Votre compte n'a pas été piraté. La solution se trouve sur votre domaine. Publiez des enregistrements SPF, DKIM et DMARC. Les serveurs de réception peuvent alors refuser les faux e-mails au lieu de vous envoyer des avis de rebond.

## Pourquoi cela compte pour les expéditeurs

Chaque message du Mailer-Daemon est un rebond. Les fournisseurs de messagerie comptent combien de vos e-mails vont vers des adresses qui n'existent pas. Beaucoup d'avis `5.1.1` leur indiquent que vous n'avez pas vérifié votre liste.

## Comment un vérificateur aide

Un [vérificateur d'adresses e-mail](/email-checker) demande au serveur de réception s'il accepte des e-mails pour une adresse. Il le fait avant que vous envoyiez quoi que ce soit. Le serveur renvoie le même code que le Mailer-Daemon vous enverrait plus tard. La différence est qu'aucun e-mail n'a été envoyé et que votre réputation ne change pas.
