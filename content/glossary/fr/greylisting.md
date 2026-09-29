---
title: Greylisting
description: Ce qu'est le greylisting, pourquoi un serveur refuse votre premier e-mail et accepte le second, combien de temps dure généralement le délai et comment cela affecte les résultats de vérification.
slug: greylisting
date: 2026-09-29
updated: 2026-09-29
keyword: greylisting
short: Le greylisting est une défense contre le spam. Un serveur de messagerie refuse le premier e-mail d'un expéditeur qu'il ne reconnaît pas. Il accepte le même e-mail quand l'expéditeur réessaie quelques minutes plus tard. Les vrais serveurs de messagerie réessaient. La plupart des logiciels de spam ne le font pas.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Obtenez une vraie réponse sur les adresses qui appliquent le greylisting à vos contrôles
---

## Ce qu'est le greylisting

Le greylisting est une défense contre le spam qui fonctionne avec un délai. Il est décrit dans la RFC 6647.

Un serveur de réception tient un registre de tous les expéditeurs qu'il a vus. Le serveur regarde trois choses : l'adresse IP expéditrice, l'adresse de l'expéditeur et l'adresse du destinataire. S'il n'a jamais vu cette combinaison, il refuse l'e-mail avec une erreur temporaire. Un serveur de messagerie bien configuré met l'e-mail en file d'attente et réessaie. La plupart des logiciels de spam envoient une fois et ne réessaient pas.

Quand la nouvelle tentative arrive, le serveur accepte l'e-mail et enregistre l'expéditeur dans son registre. Ensuite, les e-mails du même expéditeur sont acceptés à la première tentative.

## Ce que voit l'expéditeur

La première tentative reçoit un code qui commence par 4. C'est généralement `450` ou `451`, avec un message comme "greylisted, try again later". Votre serveur de messagerie traite cela comme un [soft bounce](/glossary/soft-bounce) et réessaie selon son propre calendrier.

Le serveur de réception décide combien de temps il attend avant d'accepter la nouvelle tentative. Environ 15 minutes est courant. Certains serveurs utilisent un délai plus court ou plus long.

Normalement vous ne remarquez pas le greylisting. L'e-mail arrive quelques minutes plus tard. Si votre outil affiche un avis de rebond, il se résout tout seul.

## Quand le greylisting compte

Le greylisting n'affecte pas une campagne normale. Il compte dans deux cas.

**E-mail urgent.** Une réinitialisation de mot de passe ou un code à usage unique qui arrive avec 15 minutes de retard ne sert à rien pour l'utilisateur. C'est pourquoi les expéditeurs d'e-mails transactionnels demandent parfois aux domaines de réception d'ajouter leurs adresses IP à une liste d'autorisation.

**Vérification.** Un vérificateur contrôle une adresse en démarrant une conversation SMTP et en s'arrêtant avant d'envoyer quoi que ce soit. Sur un serveur avec greylisting, la première tentative reçoit une réponse `4xx`. Un vérificateur qui s'arrête après une tentative signale l'adresse comme inconnue. L'adresse peut être valide.

## Greylisting et passerelles de messagerie sécurisée

Beaucoup de domaines d'entreprise utilisent une [passerelle de messagerie sécurisée](/glossary/secure-email-gateway) comme Proofpoint ou Mimecast. Ces passerelles appliquent le greylisting aux expéditeurs inconnus par défaut. C'est une des raisons pour lesquelles un contrôle de base renvoie inconnu sur beaucoup d'adresses B2B.

## Comment un vérificateur gère cela

Un bon [vérificateur d'adresses e-mail](/email-checker) traite une réponse `4xx` comme "réessayer", pas comme un résultat. Il attend, réessaie depuis la même adresse IP et signale la réponse que le serveur donne après le délai du greylisting. Giggal.ai fait cela quand il résout les domaines avec passerelle. C'est ainsi qu'il renvoie valide ou invalide là où un contrôle à une seule tentative renvoie inconnu.
