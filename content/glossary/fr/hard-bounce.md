---
title: Hard bounce
description: Ce qu'est un hard bounce, quels codes signifient hard bounce, les deux types de hard bounce et ce qu'il faut faire pour chacun.
slug: hard-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: qu'est-ce qu'un hard bounce
short: Qu'est-ce qu'un hard bounce ? C'est un e-mail que le serveur du destinataire refuse pour toujours, parce que l'adresse ou le domaine n'existe pas, ou parce que votre e-mail est bloqué. Si vous renvoyez le même e-mail, il échoue à nouveau.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Trouvez les adresses qui feraient un hard bounce avant d'envoyer
---

## Qu'est-ce qu'un hard bounce ?

Un hard bounce est un e-mail qui ne peut pas être livré, et ne le pourra jamais. Le serveur de réception l'a refusé. Il le refusera à nouveau si vous le renvoyez.

Le serveur de réception est l'ordinateur qui reçoit les e-mails pour l'adresse du destinataire. Quand il refuse un e-mail, il vous renvoie un message d'erreur. Ce retour s'appelle un rebond, ou "bounce" en anglais.

Le message de rebond contient un code. La norme e-mail RFC 5321 appelle le cas du hard bounce une réponse négative permanente. Le code commence alors par 5. Exemple : `550 5.1.1`. Un code qui commence par 4 est un [soft bounce](/glossary/soft-bounce). Un soft bounce est temporaire.

## Un exemple simple

Voici comment un hard bounce se produit.

1. **Paul écrit à un ancien client.** Il envoie une offre à marc@ancienne-societe.example.
2. **Le serveur cherche la boîte.** Le serveur de ancienne-societe.example reçoit l'e-mail. Il cherche une boîte nommée "marc".
3. **La boîte n'existe plus.** Marc a quitté l'entreprise l'an dernier. Son adresse a été supprimée.
4. **Le serveur refuse l'e-mail.** Il répond avec le code `550 5.1.1`. Cela veut dire que l'adresse n'existe pas.
5. **Paul reçoit un avis de rebond.** Son outil d'envoi enregistre un hard bounce pour cette adresse.

Si Paul renvoie l'offre demain, le résultat sera le même. L'adresse n'existe pas, donc l'e-mail ne peut jamais arriver.

## Les deux types de hard bounce

Les deux types apparaissent comme "hard bounce" dans le rapport de campagne. Ils ont des causes différentes et des solutions différentes.

### Type 1 : l'adresse est fausse

La boîte n'existe pas, le domaine n'existe pas ou l'adresse contient une faute de frappe. Le domaine est la partie de l'adresse après le @.

- Gmail répond `550 5.1.1 The email account that you tried to reach does not exist`. Cela veut dire : le compte que vous essayez de joindre n'existe pas.
- Microsoft répond `5.1.1 Bad destination mailbox address`. Cela veut dire : mauvaise adresse de boîte de destination.

Une adresse fermée quand un employé a quitté l'entreprise entre aussi dans ce groupe. C'est le cas de Marc dans l'exemple.

**Exemple :** une personne s'inscrit avec jean@exampel.example au lieu de jean@example.com. Le domaine mal écrit n'existe pas. Chaque envoi fait un hard bounce.

### Type 2 : votre e-mail est bloqué

L'adresse est réelle, mais le serveur n'accepte pas d'e-mail de votre part. Ces codes commencent par `5.7`.

- Le `550 5.7.26` de Gmail veut dire que votre domaine n'est pas authentifié. L'authentification est un ensemble de contrôles qui prouvent que l'e-mail vient bien de votre domaine.
- Le `5.7.23` de Microsoft veut dire que votre e-mail a échoué au contrôle SPF. SPF est un de ces contrôles.

Votre outil d'envoi compte ces codes comme des hard bounces parce qu'ils commencent par 5. Mais l'adresse est correcte. Le problème vient de la configuration de votre e-mail.

**Exemple :** une association envoie sa lettre d'information sans configurer SPF, DKIM et DMARC. Gmail refuse les e-mails avec `550 5.7.26`. Les adresses des membres sont bonnes. Il faut corriger la configuration du domaine.

## Pourquoi les hard bounces comptent

Les fournisseurs de messagerie comptent combien de fois vous écrivez à des adresses qui n'existent pas. Beaucoup de hard bounces leur indiquent que votre liste n'a pas été vérifiée. Vos e-mails suivants risquent alors d'aller dans le dossier spam.

Amazon SES, le service d'envoi d'e-mails d'Amazon, publie ses limites :

| Taux de rebond | Ce que fait Amazon SES |
|---|---|
| Sous 2 % | Le niveau recommandé |
| 5 % | Le compte est placé en examen |
| 10 % | Le compte peut être suspendu |

Le taux de rebond est la part de vos e-mails qui rebondissent. Sur 1 000 e-mails, 50 rebonds donnent un taux de 5 %. Ces chiffres sont un exemple de calcul.

## Que faire avec un hard bounce

Lisez d'abord le code dans le message de rebond. Puis suivez ces étapes :

1. **Si le code est `5.1.1`, `5.1.2` ou une autre erreur d'adresse,** retirez l'adresse de votre liste maintenant. N'envoyez plus rien à cette adresse.
2. **Laissez votre outil faire le travail s'il le peut.** Mailchimp retire ces adresses de votre audience automatiquement. Amazon demande aux expéditeurs de les retirer "immediately", c'est-à-dire immédiatement.
3. **Si le code commence par `5.7`,** gardez l'adresse. Corrigez vos enregistrements SPF, DKIM et DMARC ou votre réputation d'expéditeur.
4. **Après la correction,** renvoyez à la même adresse.

Le tableau de tous les codes, avec l'action pour chacun, se trouve dans le guide [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Comment un vérificateur gère cela

Un vérificateur pose la même question au serveur de réception, mais avant que vous envoyiez. Quand vous utilisez le [vérificateur d'email](/email-checker), l'outil se connecte au serveur de messagerie. Il demande si le serveur accepte des e-mails pour cette adresse exacte. Si le serveur répond `550 5.1.1`, l'adresse est marquée comme invalide. Vous la retirez avant la campagne. Aucun e-mail n'est parti, donc votre réputation ne change pas.

Pour une liste entière, la [vérification d'email en masse](/bulk-email-verifier) fait ce contrôle sur chaque adresse. La [vérification d'email](/) trouve les adresses qui feraient un hard bounce du type 1. Elle ne corrige pas un blocage du type 2, qui dépend de votre configuration.
