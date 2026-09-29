---
title: Filtre anti-spam
description: Ce qu'un filtre anti-spam vérifie quand il décide où va votre e-mail, la différence entre un refus et le dossier spam, et les limites de taux de spam que Google publie.
slug: filtre-anti-spam
date: 2026-09-29
updated: 2026-09-29
keyword: filtre anti-spam
short: Un filtre anti-spam est le système qu'un fournisseur de messagerie utilise pour décider si un e-mail entrant va dans la boîte de réception, va dans le dossier spam ou est refusé. Il vérifie l'expéditeur, le contenu de l'e-mail et la façon dont les destinataires précédents ont réagi aux e-mails de cet expéditeur.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Envoyez à des adresses réelles et les filtres anti-spam auront moins de reproches à vous faire
---

## Ce que fait un filtre anti-spam

Chaque fournisseur de messagerie a un filtre anti-spam. Gmail, Outlook.com et Yahoo en ont un. Les serveurs de messagerie d'entreprise derrière une [passerelle de messagerie sécurisée](/glossary/secure-email-gateway) en ont un. Le filtre examine chaque e-mail entrant et décide s'il le livre, le déplace dans le dossier spam ou le refuse.

La décision se prend à l'un de deux moments.

**Pendant la connexion SMTP.** Le serveur de réception peut refuser l'e-mail avant de l'accepter. Vous recevez un rebond avec un code `5.7.x`. Exemples : le `550 5.7.1` de Gmail pour un blocage par règle, ou le `550 5.7.28` pour une quantité inhabituelle d'e-mails indésirables depuis votre adresse IP. L'e-mail n'atteint jamais la boîte.

**Après l'acceptation de l'e-mail.** Le serveur accepte l'e-mail, puis le place dans la boîte de réception, l'onglet promotions ou le dossier spam. Vous ne recevez aucun rebond. Les seuls signes sont des taux d'ouverture plus bas et les données de Google Postmaster Tools.

## Ce que le filtre vérifie

Les fournisseurs ne publient pas leurs règles exactes. Voici les critères connus :

- **Authentification.** Si [SPF](/glossary/spf), [DKIM](/glossary/dkim) et [DMARC](/glossary/dmarc) passent. Google et Microsoft refusent désormais les e-mails en masse qui échouent à ces contrôles.
- **Réputation.** L'historique d'envoi de votre domaine et de votre adresse IP. Voir [réputation de domaine](/glossary/domain-reputation) et [réputation d'IP](/glossary/ip-reputation).
- **Plaintes.** À quelle fréquence les destinataires cliquent sur "Signaler comme spam". Les consignes de Google disent de garder le taux de plaintes de Postmaster Tools sous 0,10 pour cent et de ne jamais atteindre 0,30 pour cent.
- **Rebonds.** À quelle fréquence vous envoyez à des adresses qui n'existent pas. Une liste avec beaucoup d'adresses mortes ressemble à une liste achetée ou collectée automatiquement.
- **Engagement.** Si les gens ouvrent vos e-mails, y répondent, les suppriment sans les lire ou les déplacent dans un autre dossier.
- **Contenu.** Liens, pièces jointes, images et motifs de texte qui correspondent à du spam connu. Le contenu pèse moins qu'avant. La réputation et l'authentification pèsent plus.

## Pourquoi les expéditeurs sont filtrés

La plupart du filtrage n'est pas déclenché par les mots de l'e-mail. Il est déclenché par la liste. Les adresses mortes causent des rebonds. Les personnes qui n'ont pas demandé vos e-mails causent des plaintes. Les deux problèmes viennent d'adresses qui n'ont jamais été vérifiées.

## Comment un vérificateur aide

Un vérificateur ne touche pas aux filtres anti-spam. Il retire les adresses qui causent des rebonds et des plaintes. Passez votre liste dans un [vérificateur d'adresses e-mail](/email-checker) avant d'envoyer. Il retire les boîtes qui n'existent plus. Il retire aussi les adresses jetables et les comptes de fonction comme info@, qui reçoivent plus de plaintes. Le guide sur le [taux de rebond des e-mails](/blog/how-to-reduce-email-bounce-rate) montre la taille que cette partie d'une liste a généralement.
