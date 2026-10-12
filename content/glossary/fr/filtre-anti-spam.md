---
title: Filtre anti-spam
description: Ce qu'un filtre anti-spam vérifie avant de livrer, déplacer ou refuser votre e-mail, la différence entre un refus et le dossier spam, et les limites de Google.
slug: filtre-anti-spam
date: 2026-09-29
updated: 2026-10-12
keyword: filtre anti-spam
short: Un filtre anti-spam est le système qui décide où va un e-mail entrant : la boîte de réception, le dossier spam ou le refus. Il regarde l'expéditeur, le contenu de l'e-mail et la façon dont les destinataires ont réagi aux e-mails de cet expéditeur.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Envoyez à des adresses réelles et les filtres anti-spam auront moins de reproches à vous faire
---

## Qu'est-ce qu'un filtre anti-spam ?

Un fournisseur de messagerie est l'entreprise qui gère votre boîte e-mail. Chaque fournisseur de messagerie a un filtre anti-spam. Gmail, Outlook.com et Yahoo en ont un. Les serveurs de messagerie d'entreprise derrière une [passerelle de messagerie sécurisée](/glossary/secure-email-gateway) en ont un aussi. Une passerelle est un service qui contrôle les e-mails avant qu'ils arrivent dans l'entreprise.

Le filtre anti-spam examine chaque e-mail entrant. Il prend une de trois décisions :

1. livrer l'e-mail dans la boîte de réception ;
2. le déplacer dans le dossier spam ;
3. le refuser.

La décision se prend à l'un de deux moments.

**Pendant la connexion SMTP.** SMTP est l'ensemble de règles que les serveurs utilisent pour se passer les e-mails. Le serveur de réception peut refuser l'e-mail avant de l'accepter. Vous recevez alors un rebond, un avis de non-livraison, avec un code `5.7.x`. Exemples : le `550 5.7.1` de Gmail pour un blocage par règle, ou le `550 5.7.28` pour une quantité inhabituelle d'e-mails non sollicités depuis votre adresse IP. Une adresse IP est le numéro qui identifie votre serveur d'envoi. Dans ce cas, l'e-mail n'atteint jamais la boîte.

**Après l'acceptation de l'e-mail.** Le serveur accepte l'e-mail, puis le place dans la boîte de réception, l'onglet promotions ou le dossier spam. Vous ne recevez aucun rebond. Les seuls signes sont des taux d'ouverture plus bas et les données de [Google Postmaster Tools](/glossary/postmaster-tools).

## Un exemple simple

Deux boutiques envoient la même promotion le même jour.

**La boutique "Café Clair"** n'écrit qu'à des clients qui se sont inscrits. Elle a configuré SPF, DKIM et DMARC. Elle retire les adresses qui rebondissent.

1. Gmail reçoit son e-mail.
2. Le filtre anti-spam voit que l'authentification passe.
3. Il voit que peu de gens signalent ses e-mails comme spam.
4. L'e-mail arrive dans la boîte de réception.

**La boutique "Promo Rapide"** a acheté une liste de 20 000 adresses.

1. Beaucoup d'adresses n'existent plus. Les e-mails rebondissent.
2. Des personnes qui ne connaissent pas la boutique cliquent sur "Signaler comme spam".
3. Le filtre anti-spam note ces rebonds et ces plaintes.
4. Les e-mails suivants de Promo Rapide vont dans le dossier spam, puis sont refusés.

Les deux e-mails avaient le même texte. La différence venait de la liste.

## Ce que le filtre vérifie

Les fournisseurs ne publient pas leurs règles exactes. Voici les critères connus :

- **Authentification.** Le filtre regarde si [SPF](/glossary/spf), [DKIM](/glossary/dkim) et [DMARC](/glossary/dmarc) passent. Ces trois contrôles prouvent que l'e-mail vient bien de votre domaine. Google et Microsoft refusent désormais les e-mails en masse qui échouent à ces contrôles.
- **Réputation.** C'est l'historique d'envoi de votre domaine et de votre adresse IP. Voir [réputation de domaine](/glossary/domain-reputation) et [réputation d'IP](/glossary/ip-reputation).
- **Plaintes.** C'est la fréquence à laquelle les destinataires cliquent sur "Signaler comme spam". Les consignes de Google disent de garder le taux de plaintes de Postmaster Tools sous 0,10 pour cent. Elles disent de ne jamais atteindre 0,30 pour cent.
- **Rebonds.** C'est la fréquence à laquelle vous envoyez à des adresses qui n'existent pas. Une liste avec beaucoup d'adresses mortes ressemble à une liste achetée ou collectée automatiquement.
- **Engagement.** Le filtre regarde si les gens ouvrent vos e-mails, y répondent, les suppriment sans les lire ou les déplacent dans un autre dossier.
- **Contenu.** Ce sont les liens, pièces jointes, images et motifs de texte qui ressemblent à du spam connu. Le contenu pèse moins qu'avant. La réputation et l'authentification pèsent plus.

## Pourquoi les expéditeurs sont filtrés

La plupart du filtrage n'est pas déclenché par les mots de l'e-mail. Il est déclenché par la liste.

- Les adresses mortes causent des rebonds.
- Les personnes qui n'ont pas demandé vos e-mails causent des plaintes.

Les deux problèmes viennent d'adresses qui n'ont jamais été vérifiées. Changer les mots d'un e-mail ne règle donc pas un problème de liste.

## Comment un vérificateur aide

Un vérificateur ne touche pas au filtre anti-spam. Il retire les adresses qui causent des rebonds et des plaintes. Avant d'envoyer, vous pouvez [vérifier une adresse mail](/email-checker), ou passer toute votre liste dans la [vérification d'email en masse](/bulk-email-verifier). La [vérification d'email](/) retire les boîtes qui n'existent plus. Elle retire aussi les adresses jetables et les comptes de fonction comme info@, qui reçoivent plus de plaintes. Le guide sur le [taux de rebond des e-mails](/blog/how-to-reduce-email-bounce-rate) montre la taille que cette partie d'une liste a en général.
