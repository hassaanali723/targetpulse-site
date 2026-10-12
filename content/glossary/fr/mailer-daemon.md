---
title: Mailer-Daemon
description: Ce qu'est un message du Mailer-Daemon, comment lire le code qu'il contient et que faire s'il concerne un e-mail que vous n'avez pas envoyé.
slug: mailer-daemon
date: 2026-09-29
updated: 2026-10-12
keyword: mailer daemon
short: Le Mailer-Daemon est le programme d'un serveur de messagerie qui envoie des messages automatiques. La plupart de ces messages sont des avis de rebond. Un message du Mailer-Daemon veut dire qu'un e-mail que vous avez envoyé n'a pas été livré.
related: hard-bounce, soft-bounce, ndr, smtp-error-codes, backscatter, email-spoofing
cta: Retirez les adresses qui rebondissent avant d'envoyer
---

## Qu'est-ce qu'un Mailer-Daemon ?

Un serveur de messagerie est un ordinateur qui envoie et reçoit des e-mails. Un daemon est un programme qui tourne en arrière-plan sur un serveur. Le Mailer-Daemon est le programme qui gère les e-mails qui ne peuvent pas être livrés.

Quand votre e-mail est refusé, le Mailer-Daemon vous envoie un avis. Le nom de l'expéditeur est en général `MAILER-DAEMON@` suivi du domaine du serveur. Parfois, c'est `postmaster@`. Le domaine est la partie d'une adresse après le @.

L'avis s'appelle un [rapport de non-remise](/glossary/ndr). Il vous dit quelle adresse a échoué, quand elle a échoué et pourquoi. On l'appelle aussi un rebond.

## Un exemple simple

Voici comment un message du Mailer-Daemon arrive dans votre boîte.

1. **Nadia écrit à un fournisseur.** Elle envoie une commande à comptabilite@fournisseur.example.
2. **Elle fait une faute.** En réalité, l'adresse est compta@fournisseur.example. La boîte "comptabilite" n'existe pas.
3. **Le serveur du fournisseur refuse l'e-mail.** Il répond avec le code `550 5.1.1`.
4. **Le Mailer-Daemon prévient Nadia.** Quelques secondes plus tard, elle reçoit un e-mail de MAILER-DAEMON@mail.example.com.
5. **Nadia lit l'avis.** Il cite l'adresse fausse et le code `550 5.1.1`. Elle corrige l'adresse et renvoie la commande.

Le message du Mailer-Daemon n'est pas un virus ni une attaque. C'est un avis automatique qui explique pourquoi l'e-mail n'est pas arrivé.

## Comment lire le message

La partie importante du message est le code. Cherchez un nombre à trois chiffres et un nombre avec des points. Exemple : `550 5.1.1`.

| Le code commence par | Ce que cela veut dire | Ce qu'il faut faire |
|---|---|---|
| **5** | Un [hard bounce](/glossary/hard-bounce). L'adresse n'existe pas ou le serveur a bloqué votre e-mail. | Ne renvoyez pas avant de savoir lequel des deux cas s'applique. |
| **4** | Un [soft bounce](/glossary/soft-bounce). La boîte est pleine ou le serveur est occupé. | Rien. Votre serveur de messagerie réessaie tout seul. |

Le texte à côté du code est écrit par le serveur de réception. Deux exemples :

- Gmail : `550 5.1.1 The email account that you tried to reach does not exist`. Cela veut dire que le compte que vous essayez de joindre n'existe pas.
- Microsoft : `5.4.1 Recipient address rejected: Access denied`. La documentation de Microsoft dit que cela signifie "the recipient's address doesn't exist", c'est-à-dire que l'adresse du destinataire n'existe pas.

## Messages du Mailer-Daemon pour des e-mails que vous n'avez pas envoyés

Parfois, vous recevez un avis de rebond pour un e-mail que vous n'avez jamais envoyé. Cela s'appelle le [backscatter](/glossary/backscatter).

Voici ce qui se passe :

1. Un spammeur envoie des milliers d'e-mails.
2. Il met votre adresse dans le champ De de ces e-mails, à la place de la sienne.
3. Certains de ces e-mails sont refusés.
4. Le Mailer-Daemon de chaque serveur renvoie l'avis à l'adresse du champ De, donc à vous.

Votre compte n'a pas été piraté. La solution se trouve sur votre domaine. Publiez des enregistrements SPF, DKIM et DMARC. Ce sont des lignes de réglage publiées pour votre domaine. Elles disent quels serveurs ont le droit d'envoyer en votre nom. Les serveurs de réception peuvent alors refuser les faux e-mails au lieu de vous envoyer des avis de rebond.

## Pourquoi cela compte pour les expéditeurs

Chaque message du Mailer-Daemon est un rebond. Les fournisseurs de messagerie comptent combien de vos e-mails vont vers des adresses qui n'existent pas. Beaucoup d'avis `5.1.1` leur indiquent que vous n'avez pas vérifié votre liste.

**Exemple :** une association envoie sa newsletter à une vieille liste. Le lendemain, elle reçoit des dizaines de messages du Mailer-Daemon avec le code `5.1.1`. Pour Gmail ou Microsoft, c'est le signe d'une liste mal tenue. Les envois suivants risquent d'aller dans le dossier spam.

## Comment un vérificateur aide

Un outil pour [vérifier une adresse mail](/email-checker) demande au serveur de réception s'il accepte des e-mails pour une adresse. Il le fait avant que vous envoyiez quoi que ce soit. Le serveur renvoie le même code que le Mailer-Daemon vous enverrait plus tard. La différence est qu'aucun e-mail n'a été envoyé et que votre réputation ne change pas.

Pour une liste entière, la [vérification d'email en masse](/bulk-email-verifier) contrôle chaque adresse de la même façon. La [vérification d'email](/) réduit donc le nombre de messages du Mailer-Daemon pour des adresses qui n'existent pas. Elle n'empêche pas le backscatter, qui dépend de la configuration de votre domaine.
