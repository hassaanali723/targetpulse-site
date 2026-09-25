---
title: "Vérifier un email derrière une passerelle sécurisée"
description: Proofpoint, Mimecast et Barracuda acceptent toute adresse et cassent le contrôle habituel. Ce qui s'y passe et comment obtenir une vraie réponse.
slug: verifier-un-email-derriere-une-passerelle-securisee
date: 2026-09-23
keyword: vérifier un email derrière une passerelle sécurisée
image: /blog/covers/fr/verifier-un-email-derriere-une-passerelle-securisee.webp
imageAlt: Vérifier un email derrière une passerelle sécurisée
cta: Récupérez les contacts derrière les passerelles
---

Si vous avez déjà exporté un rapport de vérification et remarqué qu'un nombre suspect de vos meilleurs contacts grands comptes revenait en inconnu, il y a de bonnes chances qu'une passerelle de messagerie sécurisée, un secure email gateway, se soit trouvée sur le chemin. Pas un domaine catch-all, même si le symptôme est identique. Une passerelle.

La distinction compte parce que la solution est différente, et parce que les contacts derrière les passerelles sont souvent ceux que vous vouliez. Les petites entreprises en utilisent rarement. Les banques, les assureurs, les hôpitaux, les universités et la plupart des entreprises du Fortune 500, oui.

## Ce que fait le vérificateur quand il échoue

Une vérification standard est une courte conversation. Votre vérificateur se connecte au serveur de messagerie indiqué dans les enregistrements MX du domaine, dit bonjour, annonce un expéditeur, puis annonce le destinataire et attend. Un serveur qui tient une vraie liste de ses boîtes répond honnêtement. Il dit oui à une adresse qui existe et non à une qui n'existe pas, et votre vérificateur note la réponse.

Une passerelle de messagerie sécurisée est une couche de filtrage placée devant le vrai serveur de messagerie. Chaque message pour le domaine arrive d'abord sur la passerelle, est analysé pour les malwares, le phishing et les violations de règles, et n'est transmis vers l'intérieur qu'ensuite. Proofpoint, Mimecast, Barracuda, Cisco et une douzaine d'éditeurs plus petits fonctionnent tous ainsi.

La passerelle n'a aucune raison de savoir quelles boîtes existent. Son travail est de filtrer, pas de consulter un annuaire. Donc quand votre vérificateur demande un destinataire précis, la passerelle accepte. Elle accepte les vraies adresses, elle accepte les fautes de frappe, elle accepte les noms de personnes parties en 2019. L'acceptation a lieu en bordure, et la décision sur l'existence de la boîte se prend quelque part derrière, là où votre vérificateur n'arrive jamais.

Vu de l'extérieur, ce comportement ne se distingue pas d'un domaine catch-all. Même conversation, même réponse, même résultat inutile.

## Pourquoi "risqué" est le mauvais endroit où s'arrêter

La plupart des vérificateurs réagissent en étiquetant l'adresse. L'étiquette varie selon l'éditeur. Vous verrez risky, unknown, accept-all, catch-all ou ok_for_all selon l'export que vous lisez. Le sens est le même dans chaque cas : nous n'avons pas pu savoir.

C'est une réponse honnête en soi. Le problème, c'est ce qui suit. Les outils d'envoi ont tendance à traiter ces étiquettes comme un non poli, et la plupart des gens font de même, parce que personne ne veut miser sa réputation d'expéditeur sur un peut-être. Les adresses sont donc filtrées de la campagne et discrètement oubliées.

Sur une liste B2B, cela représente environ 30 % de vos contacts. Sur une liste orientée grands comptes, davantage. Vous avez payé pour obtenir ces contacts et payé à nouveau pour les vérifier, et le résultat a été un haussement d'épaules.

## Ce que fait différemment un contrôle qui connaît les passerelles

En bref : vous arrêtez de poser à la passerelle une question à laquelle elle ne peut pas répondre, et vous trouvez une autre question à laquelle elle peut.

Les passerelles ne sont pas muettes. Elles se comportent selon des schémas qui dépendent du produit, de la configuration et de l'adresse précise. Les temps de réponse diffèrent entre une adresse que la passerelle finira par acheminer et une qu'elle finira par rejeter. Les codes d'erreur et leur formulation exacte diffèrent selon les éditeurs et les versions. Certaines passerelles révèlent un rejet plus tard dans la transaction, après le moment où la plupart des vérificateurs cessent d'écouter. Certaines se comportent différemment pour une vraie boîte et pour une chaîne aléatoire sur le même domaine, si vous savez quoi comparer.

Lire ces signaux, c'est d'abord identifier la passerelle, puis appliquer un contrôle conçu pour ce produit précis plutôt que le contrôle générique. C'est pourquoi la couverture des passerelles est généralement annoncée par un chiffre. Giggal.ai en détecte quinze, dont Proofpoint, Mimecast et Barracuda. D'autres outils qui s'y essaient en citent trois ou cinq. Un vérificateur qui n'en cite aucune renvoie presque certainement le résultat générique en l'étiquetant risqué.

Il faut être franc sur les limites. C'est une déduction à partir du comportement observé, pas une consultation d'annuaire, donc ce n'est pas infaillible, et aucun éditeur honnête ne vous dira le contraire. Ce que cela fait de façon fiable, c'est transformer un grand segment inutilisable en un segment en grande partie utilisable, ce qui est une promesse différente et plus modeste que la perfection.

## Mesurer la part de votre liste concernée

Vous n'avez pas besoin d'outil pour savoir si les passerelles sont votre problème. Il vous faut les enregistrements MX des domaines de votre liste.

Prenez la partie domaine de chaque adresse, dédoublonnez et consultez les enregistrements MX de chacun. Un domaine derrière Proofpoint pointe vers des noms d'hôte contenant pphosted ou ppe-hosted. Les domaines Mimecast pointent vers des hôtes mimecast.com, généralement avec un code de région. Barracuda apparaît comme barracudanetworks.com. Cisco apparaît comme iphmx.com. Les domaines Microsoft 365 et Google Workspace pointent respectivement vers des hôtes outlook.com et google.com, et ce ne sont pas des passerelles, même s'ils peuvent être configurés en catch-all.

Croisez cette liste avec les adresses sur lesquelles votre vérificateur a abandonné. Si le recoupement est important, la passerelle est l'explication, et relancer le même outil ne changera pas le résultat.

## Choisir un outil pour cela

Trois questions séparent un vérificateur qui gère ce cas de celui qui ne le gère pas.

Nomme-t-il les passerelles qu'il détecte ? Un éditeur qui fait un vrai travail ici publie une liste ou au moins un chiffre, parce que c'est précisément ce qu'il vend. Un discours vague sur une détection avancée sans produit nommé signifie généralement détection, pas résolution : l'outil peut vous dire qu'une passerelle est présente sans pouvoir dire si la boîte est réelle.

Renvoie-t-il valide ou invalide, ou une étiquette ? Demandez précisément à quoi ressemble le résultat pour une adresse derrière Mimecast. Si la réponse est un drapeau risqué avec un score de confiance, vous avez acheté une étiquette un peu meilleure.

Combien coûte-t-il sur les adresses qui demandent ce travail ? La résolution des passerelles et des catch-all coûte plus cher à l'éditeur, donc la plupart la facturent autrement. Certains facturent un multiple du crédit standard. D'autres la décomptent d'un quota séparé et plus petit qui s'épuise avant le quota standard. Ni l'un ni l'autre n'est déraisonnable, mais mieux vaut le savoir avant d'importer une liste composée à 40 % de domaines grands comptes. Giggal.ai facture toutes les vérifications à 1 crédit fixe par adresse, sur le même solde que tout le reste.

## La séquence pratique

Passez votre liste dans l'outil que vous utilisez aujourd'hui et gardez l'export. Sortez chaque ligne revenue en risqué, inconnu ou accept-all. Consultez les enregistrements MX de ces domaines pour voir combien sont des passerelles plutôt que de simples catch-all. Passez ensuite ce seul segment dans un outil conçu pour cela et comparez les deux exports côte à côte.

La comparaison est tout l'intérêt. Tous les éditeurs, nous compris, avancent des promesses de précision qui se ressemblent sur une page de tarifs. Le seul chiffre qui compte, c'est combien de vos propres contacts perdus reviennent à la vie, et si ceux marqués valides ont réellement accepté le courrier quand vous leur avez écrit.

Si vous voulez essayer, Giggal.ai offre 1 000 crédits gratuits sans carte, et ils fonctionnent sur un import en masse plutôt qu'adresse par adresse, ce qui est la seule façon pour ce test de vous apprendre quelque chose. Pour une seule adresse, vous pouvez [vérifier une adresse mail](/email-checker). Vous pouvez aussi en lire plus sur [notre façon de vérifier les domaines catch-all et accept-all](/catch-all-verification), ou sur [l'approche de vérification SEG](/seg-email-verification) (en anglais) en détail.
