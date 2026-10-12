---
title: Greylisting
description: Ce qu'est le greylisting, pourquoi un serveur refuse votre premier e-mail et accepte le second, la durée du délai et son effet sur la vérification.
slug: greylisting
date: 2026-09-29
updated: 2026-10-12
keyword: greylisting
short: Le greylisting est une protection contre le spam. Un serveur de messagerie refuse d'abord l'e-mail d'un expéditeur inconnu, puis accepte le même e-mail quand l'expéditeur réessaie quelques minutes plus tard. Les vrais serveurs de messagerie réessaient, alors que la plupart des logiciels de spam ne le font pas.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Obtenez une vraie réponse sur les adresses qui appliquent le greylisting à vos contrôles
---

## Qu'est-ce que le greylisting ?

Le greylisting est une protection contre le spam qui fonctionne avec un délai. Il est décrit dans la RFC 6647, un document qui fixe la norme.

Un serveur de messagerie est un ordinateur qui envoie ou reçoit des e-mails. Avec le greylisting, le serveur qui reçoit les e-mails tient un registre des expéditeurs qu'il a déjà vus. Pour chaque e-mail, il regarde trois choses :

1. l'adresse IP d'envoi, c'est-à-dire le numéro qui identifie le serveur de l'expéditeur ;
2. l'adresse e-mail de l'expéditeur ;
3. l'adresse e-mail du destinataire.

S'il n'a jamais vu ce groupe de trois, il refuse l'e-mail avec une erreur temporaire. Un serveur de messagerie bien configuré garde l'e-mail en file d'attente et réessaie. La plupart des logiciels de spam envoient une fois et ne réessaient pas.

Quand la nouvelle tentative arrive, le serveur accepte l'e-mail. Il enregistre l'expéditeur dans son registre. Ensuite, les e-mails du même expéditeur sont acceptés dès la première tentative.

## Un exemple simple

Voici le greylisting du point de vue de deux expéditeurs.

**Un vrai expéditeur :**

1. À 10 h 00, Julie envoie un devis à marc@entreprise.example. C'est la première fois qu'elle lui écrit.
2. Le serveur de entreprise.example ne connaît pas Julie. Il répond avec un code `451`, qui veut dire "réessayez plus tard".
3. Le serveur de Julie garde le devis et attend.
4. À 10 h 15, il réessaie.
5. Le serveur de entreprise.example accepte le devis. Il note Julie comme expéditeur connu.
6. Marc reçoit le devis avec 15 minutes de retard. Les e-mails suivants de Julie arrivent tout de suite.

**Un logiciel de spam :**

1. Il envoie le même jour un million d'e-mails, dont un à marc@entreprise.example.
2. Le serveur répond `451`.
3. Le logiciel ne réessaie pas. Il passe à l'adresse suivante.
4. Le spam n'arrive jamais dans la boîte de Marc.

Les heures de cet exemple sont des exemples. Le délai réel dépend du serveur.

## Ce que voit l'expéditeur

La première tentative reçoit un code qui commence par 4. C'est en général `450` ou `451`, avec un message comme "greylisted, try again later". Cela veut dire : mis en liste grise, réessayez plus tard. Votre serveur de messagerie traite cela comme un [soft bounce](/glossary/soft-bounce), un échec temporaire. Il réessaie selon son propre calendrier.

Le serveur de réception décide combien de temps il attend avant d'accepter la nouvelle tentative. Environ 15 minutes est courant. Certains serveurs utilisent un délai plus court ou plus long.

En temps normal, vous ne remarquez pas le greylisting. L'e-mail arrive quelques minutes plus tard. Si votre outil affiche un avis de rebond, il se règle tout seul.

## Quand le greylisting compte

Le greylisting n'affecte pas une campagne normale. Il compte dans deux cas.

**E-mail urgent.** Une réinitialisation de mot de passe ou un code à usage unique qui arrive avec 15 minutes de retard ne sert à rien pour l'utilisateur. C'est pourquoi les expéditeurs d'e-mails transactionnels demandent parfois aux domaines de réception d'ajouter leurs adresses IP à une liste d'autorisation. Un e-mail transactionnel est un e-mail déclenché par une action, comme une commande ou une connexion.

**Vérification.** Un vérificateur contrôle une adresse en démarrant une conversation SMTP. SMTP est l'ensemble de règles que les serveurs utilisent pour se passer les e-mails. Le vérificateur s'arrête avant d'envoyer quoi que ce soit. Sur un serveur avec greylisting, la première tentative reçoit une réponse `4xx`. Un vérificateur qui s'arrête après une tentative signale l'adresse comme inconnue. Pourtant, l'adresse peut être valide.

## Greylisting et passerelles de messagerie sécurisée

Beaucoup de domaines d'entreprise utilisent une [passerelle de messagerie sécurisée](/glossary/secure-email-gateway), comme Proofpoint ou Mimecast. Une passerelle est un service qui filtre les e-mails avant qu'ils arrivent dans l'entreprise. Ces passerelles appliquent le greylisting aux expéditeurs inconnus par défaut.

C'est une des raisons pour lesquelles un contrôle de base renvoie inconnu sur beaucoup d'adresses B2B. Les adresses B2B sont les adresses professionnelles des entreprises.

## Comment un vérificateur gère cela

Un bon outil pour [vérifier une adresse mail](/email-checker) traite une réponse `4xx` comme "réessayer", pas comme un résultat. Il attend, réessaie depuis la même adresse IP et signale la réponse que le serveur donne après le délai du greylisting. Giggal.ai fait cela quand il résout les domaines avec passerelle. C'est ainsi qu'il renvoie valide ou invalide là où un contrôle à une seule tentative renvoie inconnu.

La [vérification d'email en masse](/bulk-email-verifier) applique la même méthode à chaque adresse d'une liste. Le but de la [vérification d'email](/) reste le même : trouver les adresses qui n'existent pas avant votre envoi.
