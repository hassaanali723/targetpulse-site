---
title: Spam trap
description: Ce qu'est une spam trap, les trois types et comment chacun arrive dans une liste, ce qui se passe si vous en touchez une et comment les éviter.
slug: spam-trap
date: 2026-09-29
updated: 2026-10-12
keyword: spam trap
short: Une spam trap est une adresse e-mail que personne n'utilise. Elle existe seulement pour repérer les expéditeurs qui écrivent à des gens sans leur accord. Envoyer à une spam trap montre que votre liste a été achetée, copiée sur des sites web ou jamais nettoyée.
related: honeypot, email-blacklist, email-hygiene, email-list-decay, role-based-email, hard-bounce
cta: Retirez les adresses mortes avant qu'elles deviennent des spam traps
---

## Qu'est-ce qu'une spam trap ?

Une spam trap est une adresse e-mail qui a l'air normale. Mais aucune vraie personne ne la lit. Personne ne s'est jamais inscrit à une newsletter avec. Personne ne l'a jamais donnée à une entreprise.

Donc, quand un e-mail arrive dans une spam trap, l'organisation qui la gère apprend une chose certaine. L'expéditeur n'a pas obtenu cette adresse par un formulaire d'inscription. Il l'a achetée, copiée sur un site web ou gardée trop longtemps sur une vieille liste.

Qui gère les spam traps ? La documentation d'Amazon pour son service d'envoi d'e-mails (Amazon SES) répond à cette question. Ce sont des fournisseurs d'accès à Internet, des fournisseurs de messagerie et des organisations anti-spam. Les adresses sont secrètes. Si les expéditeurs les connaissaient, ils les supprimeraient simplement.

Vous découvrez donc le problème après coup. Vos e-mails commencent à aller dans le dossier spam. Ou votre adresse IP apparaît sur une [liste noire](/glossary/email-blacklist). Une adresse IP est le numéro qui identifie le serveur qui envoie vos e-mails.

## Un exemple simple

Voici comment une entreprise envoie un e-mail à une spam trap sans le remarquer.

1. **Une boutique achète une liste.** La boutique "Mode Facile" achète 10 000 adresses e-mail sur un site qui vend des contacts.
2. **La liste contient un piège.** Une des adresses est info@page-cachee.example. Une organisation anti-spam l'a placée sur une page web il y a des années. Aucune personne ne l'a jamais utilisée.
3. **La boutique envoie une promotion.** L'e-mail part vers les 10 000 adresses, y compris la spam trap.
4. **Rien ne semble anormal.** Le piège ne renvoie pas l'e-mail. Il l'accepte comme une boîte normale. La boutique ne voit aucune erreur.
5. **Le piège enregistre l'expéditeur.** L'organisation note le serveur d'envoi et le domaine de la boutique. Le domaine est la partie de l'adresse après le @.
6. **Les problèmes arrivent plus tard.** Quelques jours après, plus d'e-mails de la boutique vont dans le spam. Certains clients ne reçoivent plus leurs confirmations de commande.

La boutique ne reçoit jamais de message "vous avez touché une spam trap". Elle voit seulement le résultat.

## Les trois types de spam trap

### 1. Les traps pures (jamais utilisées)

Ces adresses ont été créées uniquement comme pièges. Elles sont cachées sur des pages web. Des outils de collecte copient les adresses trouvées sur Internet. Ces outils les ramassent.

**Exemple :** l'adresse contact-7731@un-domaine.example se trouve dans le code d'une page web. Un visiteur ne la voit pas. Un outil de collecte la copie.

Seules les listes achetées ou collectées automatiquement contiennent ce type de spam trap. Une personne qui s'inscrit sur votre site ne peut jamais en être une.

### 2. Les traps recyclées (anciennes adresses réactivées)

Ces adresses ont été de vraies adresses. Puis la personne a cessé de les utiliser. Le fournisseur a fermé la boîte. Pendant longtemps, chaque e-mail envoyé a rebondi, c'est-à-dire qu'il est revenu comme non livrable. Ensuite, le fournisseur a rouvert l'adresse comme piège.

Amazon les décrit comme des adresses "that were once valid, but have been unused (and bouncing) for an extended period of time". Cela veut dire : autrefois valides, mais inutilisées et en rebond depuis longtemps.

**Exemple :** Sophie s'inscrit à votre newsletter en 2019 avec sophie.m@ancien-travail.example. Elle quitte ce travail. Son adresse commence à rebondir, mais vous continuez à envoyer. Des années plus tard, l'adresse devient une spam trap. Votre e-mail suivant tombe dedans.

Les listes qui ne sont jamais nettoyées en accumulent avec le temps.

### 3. Les traps de faute de frappe

Ces pièges utilisent des domaines qui ressemblent à un vrai domaine connu, avec une petite faute.

**Exemple :** une personne tape son adresse dans votre formulaire avec une lettre de travers dans le domaine. Le domaine ressemble à celui d'un grand fournisseur, mais ce n'en est pas un. Si ce domaine mal écrit sert de piège, chaque e-mail que vous lui envoyez est enregistré.

Ces pièges repèrent les expéditeurs qui ne vérifient pas ce que les gens tapent dans le formulaire d'inscription.

## Ce qui se passe quand vous envoyez à une spam trap

Vous ne recevez aucun rebond. Le piège accepte l'e-mail. L'organisation qui gère la spam trap enregistre votre adresse IP et votre domaine. La suite dépend de l'organisation :

- **Votre adresse IP ou votre domaine peut aller sur une liste de blocage.** Beaucoup de serveurs de messagerie consultent ces listes. Ils refusent les e-mails des expéditeurs qui y figurent.
- **Votre réputation chez ce fournisseur peut baisser.** Plus de vos e-mails vont alors dans le spam.
- **Votre service d'envoi peut placer votre compte en examen.** Il peut bloquer vos envois jusqu'à ce que vous nettoyiez votre liste.

Combien de touches faut-il ? Amazon ne donne pas de nombre. Il dit : "even a small number of spamtrap hits can have a very negative effect". Cela veut dire que même un petit nombre de touches peut avoir un effet très négatif.

## Comment garder les spam traps hors de votre liste

Personne ne peut vous donner une liste d'adresses de spam trap. Elles sont secrètes. Vous protégez donc votre liste avec ces étapes :

1. **N'achetez pas, ne louez pas et ne collectez pas d'adresses.** Les traps pures n'arrivent que par cette voie.
2. **Retirez tout de suite chaque adresse qui fait un hard bounce.** Un hard bounce veut dire que l'adresse n'existe pas. Amazon dit de les retirer "long before they are converted to spamtraps", c'est-à-dire bien avant qu'elles deviennent des pièges.
3. **Arrêtez d'écrire aux personnes qui n'ont rien ouvert ni cliqué depuis des mois.** Les traps recyclées se trouvent parmi ces adresses silencieuses.
4. **Vérifiez les adresses à l'inscription.** Une faute repérée pendant que la personne est sur la page ne deviendra pas une spam trap dans votre liste.

## Ce qu'un vérificateur peut et ne peut pas faire

Un [vérificateur d'email](/email-checker) ne peut pas repérer une spam trap à coup sûr. Une trap recyclée est une vraie boîte qui accepte les e-mails. Elle passe donc le contrôle comme valide.

La [vérification d'email](/) aide d'une autre façon. Elle trouve les adresses qui n'existent plus, pour que vous les supprimiez avant qu'un fournisseur les recycle en pièges. Elle repère aussi les domaines mal écrits avant le premier envoi. Pour contrôler toute une liste, utilisez la [vérification d'email en masse](/bulk-email-verifier). Elle ne rend pas une liste achetée sûre. Ne pas acheter de liste est une décision, pas un contrôle.
