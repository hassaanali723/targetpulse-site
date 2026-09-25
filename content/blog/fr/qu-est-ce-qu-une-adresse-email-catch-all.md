---
title: "Qu'est-ce qu'une adresse email catch-all ?"
description: Une adresse catch-all se trouve sur un domaine qui accepte le courrier pour tous les noms, réels ou non. Ce que cela signifie, pourquoi et comment la vérifier.
slug: qu-est-ce-qu-une-adresse-email-catch-all
date: 2026-09-23
keyword: qu'est-ce qu'une adresse email catch-all
image: /blog/covers/fr/qu-est-ce-qu-une-adresse-email-catch-all.webp
imageAlt: Qu'est-ce qu'une adresse email catch-all ?
cta: Découvrez ce que sont vraiment vos adresses catch-all
---

Une adresse email catch-all est une adresse sur un domaine configuré pour accepter le courrier adressé à n'importe quel nom, qu'une vraie boîte existe derrière ou non. Si vous venez de voir une adresse signalée catch-all dans un rapport de vérification et avez cherché ce qu'est une adresse email catch-all, la version courte est que l'étiquette décrit le domaine, pas la personne. Le domaine accepte tout. Un message à ventes@, un nom mal tapé ou un salarié parti il y a des années arrivent quelque part au lieu d'être refusés.

Ce seul choix de configuration explique pourquoi les adresses catch-all sont délicates à gérer, et il vaut la peine de le comprendre avant de décider quoi faire de celles de votre liste.

## Où l'on rencontre généralement l'étiquette

La plupart des gens croisent le terme à l'un de deux endroits. Le premier est un export de vérification, où une ligne est marquée catch-all ou accept-all à côté d'une adresse d'apparence tout à fait ordinaire. Le second est un outil d'envoi qui s'arrête sur une adresse et vous demande de trancher, parce qu'il ne peut pas la classer clairement.

Dans les deux cas, l'adresse elle-même ne révèle rien. Un domaine catch-all peut appartenir à un grand groupe comme à une agence de deux personnes, et le nom devant l'arobase ressemble à n'importe quel autre. Vous ne savez que vous avez affaire à l'un d'eux que grâce à l'étiquette posée par un outil, et c'est pourquoi le terme surprend la première fois.

## Pourquoi une entreprise fait accepter tout à son domaine

La plupart des domaines catch-all ne résultent de rien d'inhabituel. Ils sont configurés volontairement, pour des raisons qui ont du sens pour ceux qui gèrent le serveur de messagerie.

Les alias de service partagés sont la raison la plus courante. Des adresses comme info@, recrutement@ et facturation@ ne sont liées à personne en particulier, et avec une configuration catch-all aucune n'a besoin d'être créée à la main. La tolérance aux fautes de frappe en est une autre. Si un client écrit à jon au lieu de john, un domaine qui accepte tout distribue quand même le message au lieu de le renvoyer.

Le renouvellement du personnel pousse dans le même sens. Quand quelqu'un part, du courrier continue d'arriver à son ancienne adresse pendant des mois, et le diriger vers un responsable ou une boîte partagée est plus simple que de le refuser. Les fusions et acquisitions s'ajoutent, car deux entreprises regroupent souvent plusieurs domaines et préfèrent tout accepter plutôt que d'auditer chaque ancienne adresse.

En pratique, la plupart des domaines catch-all sont gérés par une petite équipe informatique qui a jugé qu'accepter le courrier demandait moins de travail que de tenir une liste de destinataires valides.

## Adresse email catch-all et accept-all : la même configuration

Vous verrez les deux termes, parfois sur le même écran de résultats. Catch-all est l'étiquette la plus ancienne et la plus courante. Accept-all est ce que certains fournisseurs et outils affichent à la place. Il n'y a aucune différence de comportement entre les deux. Les deux signifient que le serveur destinataire a accepté de recevoir du courrier adressé à n'importe quel nom du domaine. Si un outil dit catch-all et un autre accept-all, ils vous disent la même chose.

## Pourquoi une adresse catch-all est difficile à vérifier

La vérification fonctionne normalement en posant une question au serveur destinataire. Le vérificateur engage la procédure de remise pour une adresse précise et lit la façon dont le serveur répond. Un serveur qui tient une liste de vraies boîtes refuse un nom qu'il ne reconnaît pas, et ce refus est le signal que l'adresse est invalide.

Un serveur catch-all ne donne jamais ce signal. Comme il est réglé pour accepter tous les destinataires, il répond à un vrai nom et à un nom manifestement faux par la même réponse de succès, un simple SMTP 250. Le vérificateur a demandé si la boîte existe et a reçu un oui qu'il aurait obtenu pour n'importe quel nom. Le test habituel va donc jusqu'au bout et ne renvoie rien d'exploitable.

## Ce qu'un résultat catch-all signifie pour votre liste

Un résultat catch-all ne tranche rien à lui seul. Il ne signifie pas que l'adresse est invalide, et il ne confirme pas que la boîte est réelle. Il signifie que le contrôle standard n'a pas pu répondre à la question. La boîte derrière peut appartenir à un salarié actif ou être morte depuis des années, et l'étiquette seule ne peut pas faire la différence.

C'est pourquoi les outils classent les adresses catch-all sous un statut prudent, souvent Risqué ou Catch-All, plutôt que valide ou invalide. Sur une liste B2B, la part est rarement faible. Traiter tout le groupe comme du déchet supprime en silence de vraies personnes, et le traiter comme sûr invite les rebonds.

## À quelle fréquence vous les rencontrez

Ce n'est pas un cas marginal. Sur une liste B2B type, une minorité importante d'adresses se trouve sur des domaines catch-all, et la proportion grimpe à mesure que vos contacts travaillent dans des entreprises moyennes et grandes, où les alias partagés et la messagerie gérée sont la norme. Les grands webmails grand public ne se comportent presque jamais ainsi, donc une liste d'adresses personnelles en montre très peu. Une liste d'adresses professionnelles peut en montrer énormément. Ce mélange explique pourquoi l'étiquette catch-all apparaît surtout sur les listes qui comptent pour la vente et la prospection, et pourquoi décider comment la traiter mérite quelques minutes plutôt qu'une règle générale.

## Que faire ensuite

Pour contrôler tout de suite une seule adresse catch-all, vous pouvez [vérifier une adresse mail](/email-checker) gratuitement : l'outil lance la vérification complète et renvoie valide ou invalide au lieu de l'étiquette catch-all.

Vous avez trois choix honnêtes. Supprimer toutes les adresses catch-all en acceptant de jeter des contacts qui auraient ouvert votre courrier. Leur écrire quand même en acceptant un taux de rebond plus élevé et le coût de réputation qui suit. Ou les contrôler à un niveau plus profond que le test SMTP standard, la seule option qui garde les vrais contacts sans les rebonds.

Si c'est cette dernière voie que vous voulez, utilisez la [vérification catch-all](/catch-all-verification) plutôt que de deviner de quel côté de la ligne tombe chaque adresse.
