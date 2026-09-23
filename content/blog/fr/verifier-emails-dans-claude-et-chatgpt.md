---
title: "Vérifier des emails dans Claude et ChatGPT"
description: Connectez un outil de vérification d'email à Claude, ChatGPT, Cursor ou VS Code via MCP et vérifiez des adresses dans la conversation au lieu d'exporter un CSV.
slug: verifier-emails-dans-claude-et-chatgpt
date: 2026-09-23
keyword: vérifier des emails dans claude et chatgpt
cta: Vérifiez des emails sans quitter le chat
---

L'essentiel de la vérification d'email se fait encore comme en 2015. Vous exportez un CSV, ouvrez un onglet du navigateur, importez le fichier, attendez, téléchargez un autre CSV et l'importez ailleurs. Ça marche. C'est aussi quatre changements de contexte pour ce qui n'est au fond qu'une seule question : cette boîte est-elle réelle ?

Si vous faites déjà une partie de votre travail dans Claude ou ChatGPT, il existe désormais un chemin plus court. Le Model Context Protocol permet à un assistant d'appeler directement un outil externe, donc la vérification peut se faire dans la conversation que vous avez déjà.

## Ce qu'est vraiment MCP

MCP est une spécification qui décrit comment un assistant IA dialogue avec un service externe. Anthropic l'a publiée fin 2024 et elle a depuis été adoptée bien au-delà de Claude. Le bon modèle mental est celui d'une norme de prise. Avant, chaque assistant avait besoin d'une intégration sur mesure pour chaque outil. Désormais, un service publie un seul serveur MCP et n'importe quel client compatible peut l'utiliser.

Pour un outil de vérification, la surface est petite. Il n'y a qu'une poignée de choses que vous demanderiez : vérifie cette adresse, vérifie cette liste, montre-moi le détail complet, dis-moi combien de crédits il me reste. Giggal.ai expose exactement cela sous forme de trois outils, `verify_emails`, `get_verification_details` et `get_credit_balance`.

Ce qui change par rapport à une API, c'est que vous n'écrivez pas l'appel. Vous dites ce que vous voulez dans la phrase que vous alliez taper de toute façon, et l'assistant trouve quel outil appeler et avec quels arguments.

## À quoi cela sert, et à quoi non

Être honnête sur la limite évite les déceptions.

C'est utile quand la vérification est une étape d'un travail plus large que vous faites déjà dans la conversation. Vous avez collé une liste de participants à une conférence et voulez retirer les adresses mortes avant d'écrire la prospection. Vous déboguez un parcours d'inscription et voulez savoir si une adresse précise est réelle. Vous rédigez une séquence et voulez vérifier les douze noms du compte cible avant de vous engager. Dans tous ces cas, l'alternative est de quitter la conversation, et l'appel à l'outil est vraiment plus rapide.

Ce n'est pas utile pour nettoyer une liste de 200 000 lignes. C'est un travail pour un import en masse ou pour l'API, et le faire passer par une interface de chat n'apporte rien, sauf une attente plus longue et beaucoup de tokens. Utilisez pour cela le tableau de bord ou l'endpoint REST, qui sont faits pour ça. Pour contrôler vite une seule adresse, vous pouvez aussi [vérifier une adresse mail](/email-checker) sur le site.

## Configuration

Il vous faut un compte Giggal.ai et une clé API. La clé se trouve dans l'onglet Developer API de l'application, pas dans Paramètres, un détail qui piège les gens plus souvent qu'il ne devrait.

Le serveur est distant, il n'y a donc rien à installer et aucun SDK. Il se trouve à `https://mcp.giggal.ai/mcp` et s'authentifie avec votre clé API.

Dans Claude Desktop, ouvrez Paramètres, puis Connecteurs, et ajoutez un connecteur personnalisé pointant vers cette URL. Claude Code accepte le même serveur via `claude mcp add`. Cursor et VS Code lisent tous deux les serveurs MCP depuis un fichier de configuration JSON dans le dossier du projet ou de l'utilisateur, et la forme de ce fichier est documentée sur la [page MCP](/mcp) (en anglais) avec les extraits exacts. ChatGPT prend en charge les serveurs MCP distants via ses paramètres de connecteurs, sur les offres où la fonction est activée.

Une fois connecté, l'assistant liste les trois outils et vous pouvez commencer à demander.

## À quoi ressemble l'utilisation

Pas besoin de formulation spéciale. Tout cela fonctionne :

- Vérifie hello@stripe.com et dis-moi si c'est une vraie boîte
- Voici onze adresses d'une inscription à un webinaire, vérifie lesquelles vont rebondir
- Lesquels de ces domaines sont catch-all, et les boîtes existent-elles vraiment
- Combien de crédits de vérification me reste-t-il avant de lancer ceci

L'assistant appelle `verify_emails`, reçoit un résultat par adresse et l'explique dans sa réponse. Si vous avez demandé une liste, vous pouvez continuer dans la même conversation. Demandez-lui de retirer tout ce qui est invalide, de regrouper le reste par domaine et de l'écrire sous forme de bloc CSV à coller directement dans votre outil d'envoi. C'est cette seconde moitié qui en fait l'intérêt, car l'assistant a déjà les données en main et peut les remanier sans nouvel aller-retour.

## La question du catch-all compte ici plus que d'habitude

Environ 30 % d'une liste B2B se trouve sur des domaines qui acceptent le courrier pour toute adresse possible, réelle ou non. La plupart des vérificateurs les renvoient avec l'étiquette risqué ou accept-all, autrement dit : ils n'ont pas pu savoir.

Cette étiquette est gênante dans un tableau de bord. Dans une conversation, c'est pire, car l'assistant rapportera fidèlement ce qu'il a reçu et vous obtiendrez une réponse indiquant que quatre de vos onze adresses sont incertaines, exactement là où vous en étiez avant de demander. Giggal.ai les tranche en valides ou invalides, de même que les boîtes derrière quinze secure email gateways identifiées, pour que ce qui revient à l'assistant soit une réponse et non un haussement d'épaules.

## Coût et une précaution utile

Les vérifications via MCP consomment les mêmes crédits que partout ailleurs. Chaque vérification d'adresse coûte 1 crédit fixe (y compris les adresses catch-all et protégées par SEG), et l'offre gratuite comprend 1 000 crédits sans carte. Les crédits n'expirent pas.

La précaution est simple : un assistant fait ce que vous demandez, y compris lancer un travail plus gros que prévu. Demandez le solde de crédits avant toute opération importante, et collez les adresses plutôt que de lui indiquer un fichier que vous n'avez pas regardé. Rien de cela n'est propre à la vérification, mais avec une API facturée à l'usage, l'erreur est plus agaçante que d'habitude.

## Cela vaut-il la peine de le configurer ?

Si vous ouvrez Claude ou ChatGPT presque tous les jours et que les listes d'emails font partie de votre travail, cela prend environ deux minutes et supprime une étape que vous faisiez à la main. Si la vérification est un traitement mensuel en masse que vous lancez dans le navigateur, le tableau de bord est vraiment le meilleur outil et ceci ne changera pas votre vie.

Les instructions de configuration et les extraits pour chaque client sont sur la [page MCP](/mcp) (en anglais). La [référence de l'API](/public/docs) (en anglais) couvre les mêmes opérations en REST si vous préférez passer par un script.
