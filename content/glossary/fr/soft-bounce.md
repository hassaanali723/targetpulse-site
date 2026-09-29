---
title: Soft bounce
description: Ce qu'est un soft bounce, les causes fréquentes et leurs codes, combien de temps les outils d'envoi réessaient et quand retirer une adresse qui continue de faire des soft bounces.
slug: soft-bounce
date: 2026-09-29
updated: 2026-09-29
keyword: soft bounce
short: Un soft bounce est un e-mail qui n'a pas été livré cette fois à cause d'un problème temporaire. L'adresse est réelle. La boîte est pleine, le serveur est occupé ou le serveur vous a demandé de réessayer plus tard.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Voyez quelles adresses de votre liste sont réelles avant d'envoyer
---

## Ce qu'est un soft bounce

Un soft bounce est un échec de livraison temporaire. Le serveur de réception n'a pas livré votre e-mail cette fois. Il vous permet de réessayer plus tard.

La norme e-mail RFC 5321 appelle cela une réponse négative transitoire. Le code dans le message de rebond commence par 4. Exemple : `452 4.2.2`. Un code qui commence par 5 est un [hard bounce](/glossary/hard-bounce). Un hard bounce est permanent.

## Causes fréquentes

- **La boîte est pleine.** Gmail répond `452 4.2.2 The recipient's inbox is out of storage space`. La personne doit supprimer des e-mails.
- **Trop d'e-mails trop vite.** Gmail répond `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Gmail répond `421 4.7.28` quand trop d'e-mails arrivent de votre adresse IP.
- **Greylisting.** Le serveur refuse le premier e-mail d'un expéditeur qu'il ne connaît pas. Il accepte le même e-mail à la deuxième tentative. Voir [greylisting](/glossary/greylisting).
- **Le serveur est en panne ou lent.** Un code `421` signifie que le serveur n'est pas disponible. Un code `4.4.1` ou `4.4.2` signifie que la connexion a échoué ou expiré.
- **L'e-mail a expiré.** Un code `4.4.7` signifie que votre serveur a essayé pendant toute la période de nouvelles tentatives, puis a arrêté. La RFC 5321 dit que les serveurs devraient essayer pendant environ quatre à cinq jours.

## Ce que fait votre outil d'envoi

Votre outil d'envoi réessaie les soft bounces automatiquement. Chaque outil a ses propres règles.

- SendGrid réessaie jusqu'à 72 heures.
- HubSpot marque l'e-mail comme en attente jusqu'à 72 heures. Ensuite il enregistre un soft bounce.
- Mailchimp transforme une adresse en hard bounce après 7 soft bounces si le contact n'a jamais ouvert un e-mail. Si le contact a déjà ouvert un e-mail, la limite est de 15 soft bounces.

Le même soft bounce peut porter des noms différents selon l'outil. Lisez le code dans le message de rebond, pas l'étiquette.

## Que faire avec un soft bounce

Au début, rien. Laissez votre outil d'envoi réessayer. Un soft bounce est normal.

Retirez une adresse qui fait un soft bounce sur plusieurs envois de suite. Une boîte qui est pleine à chaque envoi pendant six semaines n'est pas pleine. Personne ne l'utilise. La limite de 7 soft bounces de Mailchimp est une règle sûre.

## Comment un vérificateur gère cela

Un vérificateur se connecte au serveur de messagerie avant que vous envoyiez. Si le serveur répond avec un code 4xx, le vérificateur réessaie. Si la réponse reste la même, le vérificateur marque l'adresse comme inconnue, pas comme valide. Inconnue signifie que la boîte existe mais ne reçoit peut-être pas d'e-mails. Le guide [Hard bounce vs soft bounce](/blog/hard-bounce-vs-soft-bounce) explique chaque code et ce qu'il faut en faire.
