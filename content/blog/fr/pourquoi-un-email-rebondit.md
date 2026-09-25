---
title: "Pourquoi un email rebondit : causes et solutions"
description: Pourquoi un email rebondit, rebond dur contre rebond doux, les causes les plus fréquentes en prospection à froid, ce que signifie un rebond et quoi faire.
slug: pourquoi-un-email-rebondit
date: 2026-09-23
keyword: pourquoi un email rebondit
image: /blog/covers/fr/pourquoi-un-email-rebondit.webp
imageAlt: Pourquoi un email rebondit : causes et solutions
cta: Réduisez votre taux de rebond avant le prochain envoi
---

Un cold email rebondit quand le serveur destinataire refuse le message et le renvoie au lieu de le distribuer. Si vous venez de lancer une campagne et voulez savoir pourquoi les emails à froid rebondissent plus que votre courrier habituel, presque tout revient à deux choses. Vous écrivez à des personnes qui n'ont jamais demandé à vous lire, donc la liste est plus froide et moins exacte, et vous envoyez depuis un domaine avec lequel le serveur du destinataire n'a aucun historique. Les causes précises se trouvent sous ces deux-là.

## Qu'est-ce qu'un email qui a rebondi ?

Un email qui a rebondi est un message que le serveur de messagerie destinataire a refusé et renvoyé avec un code de motif, au lieu de le déposer dans une boîte. La réponse vient du serveur, pas de la personne, et arrive sous forme de rapport de non-distribution (NDR) dans la boîte de l'expéditeur ou dans le journal des rebonds de l'outil d'envoi. Le code de ce rapport est la partie utile : un code 5xx est un refus définitif, un code 4xx un refus temporaire. Presque toutes les questions sur ce que signifie un rebond se règlent en lisant ce code.

## Rebond dur et rebond doux ne sont pas le même problème

La première chose à vérifier est le type de rebond que vous avez reçu, parce qu'il change ce que vous faites ensuite.

Un rebond dur (hard bounce) est définitif. L'adresse n'existe pas, le domaine n'existe pas, ou le serveur l'a refusée net. Un message qui fait un rebond dur ne sera jamais distribué, et l'adresse doit sortir de votre liste tout de suite. Un rebond doux (soft bounce) est temporaire. La boîte était pleine, le serveur était occupé, ou le message a été retenu pour un examen plus poussé. Les rebonds doux se règlent parfois d'eux-mêmes, et l'outil d'envoi réessaie généralement pour vous.

La distinction compte à cause de la réputation. Les fournisseurs de messagerie observent la fréquence de vos envois vers des adresses qui font un rebond dur, et un schéma répété vous signale comme quelqu'un qui travaille avec une mauvaise liste. Une adresse morte, c'est du bruit. Une campagne pleine d'adresses mortes, c'est un signal.

## Les causes habituelles, des plus fréquentes aux moins fréquentes

Les rebonds se concentrent sur une poignée de causes. À peu près dans l'ordre où elles apparaissent en prospection à froid :

- L'adresse n'existe plus. Les gens changent d'emploi, la boîte est supprimée, et le contact continue de vivre dans une base achetée ou récupérée sur le web.
- Le domaine lui-même a disparu. Les petites entreprises ferment, leur domaine ne se résout plus, et il ne reste aucun serveur pour accepter quoi que ce soit.
- La boîte est pleine. Fréquent sur les adresses délaissées ou personnelles, et généralement un rebond doux.
- Le serveur destinataire a refusé votre domaine d'envoi. C'est un blocage de réputation ou de politique, pas un problème du destinataire.
- Le greylisting. Le serveur refuse temporairement une première tentative d'un expéditeur inconnu et accepte le nouvel essai quelques minutes plus tard.
- Le filtrage antispam. Le message a été refusé pour son contenu ou pour une règle avant d'atteindre la boîte de réception.

L'ordre compte parce que les deux premières, adresses mortes et domaines morts, sont celles que la vérification détecte, et ce sont aussi les plus fréquentes sur une liste achetée ou récupérée. Les causes plus bas tiennent davantage au moment de l'envoi et à votre propre configuration qu'à l'adresse.

Vous pouvez souvent lire la cause directement dans le message de rebond. Une ligne comme 550 5.1.1 user unknown est un rebond dur pour une adresse qui n'existe pas. Un 451 4.7.1 greylisted, try again later est un refus doux et temporaire qui se règle en général au nouvel essai. Savoir lire le code évite de deviner.

## Que signifie « email renvoyé » ?

Email renvoyé, ou bounce back, est le nom courant de la même chose : votre message vous est revenu. La formulation du rapport varie selon le fournisseur. Gmail écrit « Address not found », Microsoft 365 « Recipient address rejected », et les serveurs de type Postfix citent la ligne SMTP brute, 550 5.1.1 User unknown. Les trois veulent dire que la boîte n'existe pas. Un email renvoyé qui parle de « mailbox full », « greylisted » ou « try again later » est temporaire et se règle en général avec le nouvel essai de votre outil d'envoi.

## Tous les rebonds ne viennent pas de la liste

On est tenté de lire chaque rebond comme une mauvaise adresse, mais une vraie part des rebonds en prospection à froid n'a rien à voir avec votre liste. Si votre domaine d'envoi est neuf et n'a pas été chauffé, les serveurs s'en méfient et refusent davantage de courrier. Un domaine tout neuf qui envoie quelques centaines de cold emails le premier jour verra des rebonds qu'un domaine de six mois avec la même liste ne verrait pas. Si vos enregistrements SPF, DKIM ou DMARC manquent ou sont mal configurés, certains fournisseurs vous refusent avant même de regarder le destinataire.

Aucun des deux ne se corrige en nettoyant les adresses. Ce sont des problèmes côté expéditeur, et ils apparaissent comme des rebonds identiques à ceux d'une adresse morte tant qu'on ne lit pas le motif derrière.

## Que faire d'un email qui a rebondi ?

Une seule adresse : lisez le code. Un 5.1.1 ou « user unknown » signifie que la boîte a disparu ; retirez-la et, si le contact compte, cherchez son adresse actuelle au lieu de réessayer. Un 4.x.x ou « mailbox full » signifie attendre ; votre outil réessaie tout seul. Un 5.7.1 ou « blocked » désigne votre domaine d'envoi, pas le destinataire, donc vérifiez SPF, DKIM et DMARC avant d'envoyer quoi que ce soit d'autre. Si vous n'êtes pas sûr qu'une adresse soit encore active, vous pouvez [vérifier une adresse mail](/email-checker) gratuitement avant de réécrire.

## Que faire après une campagne qui rebondit

Commencez par retirer de votre liste chaque rebond dur et n'écrivez plus jamais à ces adresses. Ne réessayez pas et ne les gardez pas pour le prochain envoi en espérant qu'elles reviennent, car elles ne reviendront pas, et chaque nouvelle tentative vous coûte de la réputation. Laissez les rebonds doux tranquilles ; votre outil d'envoi gère ces nouveaux essais.

Regardez ensuite la proportion. Si une grande partie d'une liste neuve a rebondi au premier envoi, la liste était mauvaise avant même que vous y touchiez, et la solution est en amont, là où vous collectez ou achetez les adresses. Nettoyer après coup aide le prochain envoi, mais n'efface pas l'atteinte à la réputation de celui-ci.

## La provenance de la liste est souvent la vraie histoire

L'origine d'une liste prédit la façon dont elle va rebondir. Une liste exportée de votre propre CRM, faite de personnes qui vous ont déjà répondu, rebondit très peu. Une liste récupérée sur le web ou achetée à un courtier rebondit bien plus, parce que les adresses ont été collectées une fois et jamais revérifiées, et qu'une partie est morte entre-temps. Si vous savez qu'une liste est achetée ou récupérée, partez du principe qu'une partie est périmée et vérifiez-la avant le premier envoi plutôt que de l'apprendre par le rapport de rebonds.

## Là où la vérification aide, et là où elle n'aide pas

La vérification retire avant l'envoi les adresses qui feraient un rebond dur, et c'est le levier le plus puissant sur une liste froide. Contrôler la liste d'abord transforme une supposition en quantité connue, et cela vaut la peine sur toute liste que vous n'avez pas construite vous-même.

Ce qu'elle ne fait pas, c'est corriger un enregistrement DNS mal configuré ou chauffer un domaine neuf. Ce sont des problèmes d'expéditeur, et aucun nettoyage de liste n'y touche. Séparez donc vos rebonds par cause. S'il s'agit d'adresses qui n'existent plus, passez la liste par la [vérification d'email](/) avant le prochain envoi, [vérification catch-all](/catch-all-verification) comprise. S'il s'agit d'échecs d'authentification ou de réputation, le travail porte sur votre propre domaine, pas sur la liste.
