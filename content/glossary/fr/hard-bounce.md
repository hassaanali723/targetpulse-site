---
title: Hard bounce
description: Ce qu'est un hard bounce, quels codes signifient hard bounce, les deux types de hard bounce et ce qu'il faut faire pour chacun.
slug: hard-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: qu'est-ce qu'un hard bounce
short: Un hard bounce est un e-mail que le serveur de réception a refusé de façon permanente. L'adresse n'existe pas, le domaine n'existe pas ou le serveur a bloqué votre e-mail. Si vous renvoyez le même e-mail, il échoue à nouveau.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Trouvez les adresses qui feraient un hard bounce avant d'envoyer
---

## Ce qu'est un hard bounce

Un hard bounce est un échec de livraison permanent. Le serveur de réception a refusé votre e-mail et le refusera à nouveau si vous le renvoyez.

La norme e-mail RFC 5321 appelle cela une réponse négative permanente. Le code dans le message de rebond commence par 5. Exemple : `550 5.1.1`. Un code qui commence par 4 est un [soft bounce](/glossary/soft-bounce). Un soft bounce est temporaire.

## Les deux types de hard bounce

Les deux types apparaissent comme "hard bounce" dans le rapport de campagne. Ils ont des causes différentes et des solutions différentes.

**Type 1 : l'adresse est fausse.** La boîte n'existe pas, le domaine n'existe pas ou l'adresse contient une faute de frappe. Gmail répond `550 5.1.1 The email account that you tried to reach does not exist`. Microsoft répond `5.1.1 Bad destination mailbox address`. Une adresse fermée quand un employé a quitté l'entreprise entre aussi dans ce groupe.

**Type 2 : votre e-mail est bloqué.** L'adresse est réelle, mais le serveur n'accepte pas d'e-mail de votre part. Ces codes commencent par `5.7`. Le `550 5.7.26` de Gmail signifie que votre domaine n'est pas authentifié. Le `5.7.23` de Microsoft signifie que votre e-mail a échoué au contrôle SPF. Votre outil d'envoi compte ces codes comme des hard bounces parce qu'ils commencent par 5. Mais l'adresse est correcte. Le problème vient de la configuration de votre e-mail.

## Pourquoi les hard bounces comptent

Les fournisseurs de messagerie comptent combien de fois vous envoyez à des adresses qui n'existent pas. Beaucoup de hard bounces leur indiquent que votre liste n'a pas été vérifiée. Amazon SES publie ses limites. Il place un compte en examen quand le taux de rebond atteint 5 pour cent. Il peut suspendre le compte à 10 pour cent. Il recommande de rester sous 2 pour cent.

## Que faire avec un hard bounce

Si le code est `5.1.1`, `5.1.2` ou une autre erreur d'adresse, retirez l'adresse de votre liste maintenant. N'envoyez plus rien à cette adresse. Mailchimp retire ces adresses de votre audience automatiquement. Amazon demande aux expéditeurs de les retirer "immediately", c'est-à-dire immédiatement.

Si le code commence par `5.7`, gardez l'adresse. Corrigez vos enregistrements SPF, DKIM et DMARC ou votre réputation d'expéditeur. Puis renvoyez à la même adresse.

Le tableau complet des codes et de l'action pour chacun se trouve dans le guide [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce).

## Comment un vérificateur gère cela

Un vérificateur pose la même question au serveur de réception, mais avant que vous envoyiez. Un [vérificateur d'adresses e-mail](/email-checker) se connecte au serveur de messagerie et demande s'il accepte des e-mails pour cette adresse exacte. Si le serveur répond `550 5.1.1`, le vérificateur marque l'adresse comme invalide. Vous la retirez avant la campagne. Aucun e-mail n'a été envoyé, donc votre réputation ne change pas.
