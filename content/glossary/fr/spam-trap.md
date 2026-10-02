---
title: Spam trap
description: Ce qu'est une spam trap, les trois types et comment chacun arrive dans une liste, ce qui se passe si vous en touchez une et comment les éviter.
slug: spam-trap
date: 2026-09-29
updated: 2026-09-29
keyword: spam trap
short: Une spam trap est une adresse e-mail qui n'existe que pour repérer les expéditeurs. Personne ne s'inscrit avec. Les fournisseurs de messagerie et les organisations anti-spam la surveillent. Envoyer à une spam trap signifie que votre liste a été achetée, collectée automatiquement ou jamais nettoyée.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Retirez les adresses mortes avant qu'elles deviennent des spam traps
---

## Ce qu'est une spam trap

Une spam trap est une adresse e-mail qui n'existe que pour repérer les expéditeurs avec de mauvaises listes. Personne ne l'utilise. Personne ne s'est jamais inscrit avec. Quand un e-mail arrive dans une spam trap, l'organisation qui la gère sait une chose avec certitude. L'expéditeur n'a pas obtenu cette adresse par un formulaire d'inscription.

La documentation d'Amazon pour son service d'e-mail dit que les spam traps sont gérées par des fournisseurs d'accès, des fournisseurs de messagerie et des organisations anti-spam. Les adresses sont secrètes. Vous découvrez que vous avez envoyé à l'une d'elles après coup. Vos e-mails commencent à aller dans le spam, ou votre adresse IP apparaît sur une [liste noire](/glossary/email-blacklist).

## Les trois types de spam trap

**Traps pures.** Des adresses créées uniquement comme pièges. Elles sont placées sur des pages web où les outils de collecte les trouvent. Elles ne servent jamais à autre chose. Seules les listes collectées automatiquement ou achetées les contiennent.

**Traps recyclées.** De vraies adresses qui ont été abandonnées. Le fournisseur a fermé l'adresse et laissé les e-mails rebondir pendant un temps. Puis le fournisseur a rouvert l'adresse comme piège. Amazon les décrit comme des adresses "that were once valid, but have been unused (and bouncing) for an extended period of time", c'est-à-dire autrefois valides, mais inutilisées et rebondissant depuis longtemps. Les listes qui ne sont jamais nettoyées en accumulent avec le temps.

**Traps de faute de frappe.** Des adresses sur des domaines qui ressemblent à un vrai domaine avec une faute de frappe. Exemple : une version mal orthographiée du domaine d'un grand fournisseur. Elles repèrent les expéditeurs qui ne vérifient pas ce que les gens ont tapé dans le formulaire d'inscription.

## Ce qui se passe quand vous envoyez à une spam trap

Vous ne recevez aucun rebond. Le piège accepte l'e-mail. L'organisation qui gère le piège enregistre votre adresse IP et votre domaine. Ce qui se passe ensuite dépend de l'organisation :

- Votre adresse IP peut être placée sur une liste de blocage.
- Votre réputation chez ce fournisseur peut baisser.
- Votre service d'envoi peut placer votre compte en examen.

Amazon ne dit pas combien de touches de spam trap déclenchent une action. Il dit : "even a small number of spamtrap hits can have a very negative effect", c'est-à-dire que même un petit nombre de touches peut avoir un effet très négatif.

## Comment garder les spam traps hors de votre liste

Personne ne peut vous donner une liste d'adresses de spam trap. Vous protégez votre liste avec ces étapes :

- N'achetez pas, ne louez pas et ne collectez pas automatiquement d'adresses. Les traps pures n'arrivent que par cette voie.
- Retirez toute adresse qui fait un hard bounce. Faites-le immédiatement. Amazon dit de les retirer "long before they are converted to spamtraps", c'est-à-dire bien avant qu'elles soient converties en pièges.
- Arrêtez d'envoyer aux personnes qui n'ont rien ouvert ni cliqué depuis des mois. Les traps recyclées sont parmi elles.
- Vérifiez les adresses à l'inscription pour repérer les fautes de frappe pendant que la personne est encore sur la page.

## Ce qu'un vérificateur peut et ne peut pas faire

Un [vérificateur d'adresses e-mail](/email-checker) ne peut pas repérer une spam trap. Une trap recyclée est une boîte qui existe et accepte les e-mails, donc elle est vérifiée comme valide.

La vérification aide de deux façons. Elle retire les adresses mortes avant qu'elles soient recyclées en pièges. Elle repère les domaines avec faute de frappe avant le premier envoi. Elle ne vous protège pas d'une liste achetée. C'est une décision, pas un contrôle.
