---
title: Soft bounce
description: Ce qu'est un soft bounce, ses causes fréquentes et leurs codes, combien de temps les outils réessaient et quand retirer une adresse de votre liste.
slug: soft-bounce
date: 2026-09-29
updated: 2026-10-12
keyword: soft bounce
short: Un soft bounce est un e-mail qui n'a pas été livré cette fois, à cause d'un problème temporaire. L'adresse existe, mais la boîte est pleine, le serveur est occupé ou il demande de réessayer plus tard.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Voyez quelles adresses de votre liste sont réelles avant d'envoyer
---

## Qu'est-ce qu'un soft bounce ?

Un soft bounce est un échec de livraison temporaire. Le serveur de réception n'a pas livré votre e-mail cette fois. Il vous permet de réessayer plus tard.

Le serveur de réception est l'ordinateur qui reçoit les e-mails pour l'adresse du destinataire. Quand il ne livre pas un e-mail, il renvoie un message d'erreur. Ce retour s'appelle un rebond, ou "bounce" en anglais.

Le message de rebond contient un code. La norme e-mail RFC 5321 appelle le cas du soft bounce une réponse négative transitoire. Le code commence alors par 4. Exemple : `452 4.2.2`. Un code qui commence par 5 est un [hard bounce](/glossary/hard-bounce). Un hard bounce est permanent.

## Un exemple simple

Voici un soft bounce du début à la fin.

1. **Léa envoie une facture.** Elle écrit à son client karim@example.com un lundi matin.
2. **La boîte de Karim est pleine.** Il n'a pas supprimé d'e-mails depuis des mois. Il n'a plus d'espace.
3. **Le serveur refuse pour l'instant.** Il répond avec `452 4.2.2`. Le 4 veut dire que le problème est temporaire.
4. **L'outil de Léa réessaie.** Il renvoie la facture plusieurs fois pendant les heures suivantes.
5. **Karim fait de la place.** Le mardi, il supprime de vieux e-mails.
6. **La facture arrive.** La tentative suivante réussit. Léa n'a rien eu à faire.

Si Karim n'avait jamais fait de place, l'outil aurait fini par arrêter. Le soft bounce serait alors resté sans livraison.

## Causes fréquentes

- **La boîte est pleine.** Gmail répond `452 4.2.2 The recipient's inbox is out of storage space`. Cela veut dire que la boîte n'a plus d'espace. La personne doit supprimer des e-mails.
- **Trop d'e-mails trop vite.** Gmail répond `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Cela veut dire que la personne reçoit des e-mails trop vite. Gmail répond `421 4.7.28` quand trop d'e-mails arrivent de votre adresse IP. Une adresse IP est le numéro qui identifie votre serveur d'envoi.
- **Greylisting.** Le serveur refuse le premier e-mail d'un expéditeur qu'il ne connaît pas. Il accepte le même e-mail à la deuxième tentative. Voir [greylisting](/glossary/greylisting).
- **Le serveur est en panne ou lent.** Un code `421` veut dire que le serveur n'est pas disponible. Un code `4.4.1` ou `4.4.2` veut dire que la connexion a échoué ou a expiré.
- **L'e-mail a expiré.** Un code `4.4.7` veut dire que votre serveur a essayé pendant toute la période prévue, puis a arrêté. La RFC 5321 dit que les serveurs devraient essayer pendant environ quatre à cinq jours.

## Ce que fait votre outil d'envoi

Votre outil d'envoi réessaie les soft bounces automatiquement. Chaque outil a ses propres règles.

| Outil | Ce qu'il fait |
|---|---|
| SendGrid | Il réessaie jusqu'à 72 heures. |
| HubSpot | Il marque l'e-mail comme en attente jusqu'à 72 heures. Ensuite, il enregistre un soft bounce. |
| Mailchimp | Il transforme l'adresse en hard bounce après 7 soft bounces si le contact n'a jamais ouvert un e-mail. Si le contact a déjà ouvert un e-mail, la limite est de 15 soft bounces. |

Le même soft bounce peut porter des noms différents selon l'outil. Lisez le code dans le message de rebond, pas l'étiquette.

**Exemple :** un outil affiche "rebond temporaire" et un autre affiche "différé". Si les deux montrent `452 4.2.2`, c'est le même problème : une boîte pleine.

## Que faire avec un soft bounce

1. **Au début, ne faites rien.** Laissez votre outil d'envoi réessayer. Un soft bounce isolé est normal.
2. **Regardez si le problème se répète.** Notez les adresses qui font un soft bounce sur plusieurs envois de suite.
3. **Retirez les adresses qui échouent toujours.** Une boîte qui est pleine à chaque envoi pendant six semaines n'est pas vraiment pleine. Personne ne l'utilise.
4. **Fixez une règle simple.** La limite de 7 soft bounces de Mailchimp est une règle sûre.

## Comment un vérificateur gère cela

Un vérificateur se connecte au serveur de messagerie avant que vous envoyiez. Si le serveur répond avec un code 4xx, le vérificateur réessaie. Si la réponse reste la même, l'adresse est marquée comme inconnue, pas comme valide. Inconnue veut dire que la boîte existe, mais qu'elle ne reçoit peut-être pas d'e-mails.

Vous pouvez contrôler une adresse avec le [vérificateur d'email](/email-checker) avant un envoi important, ou passer toute votre liste dans la [vérification d'email en masse](/bulk-email-verifier). La [vérification d'email](/) trouve les adresses qui n'existent pas. Elle ne peut pas vider une boîte pleine. Le guide [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) explique chaque code et ce qu'il faut en faire.
