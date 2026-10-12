---
title: Réputation de domaine
description: Ce qu’est la réputation de domaine (domain reputation), la différence avec la réputation IP, ce qui l’abîme, comment la suivre et comment la protéger.
slug: reputation-de-domaine
date: 2026-10-12
updated: 2026-10-12
keyword: domain reputation
short: La réputation de domaine, ou domain reputation, mesure la confiance que Gmail, Outlook et les autres fournisseurs accordent à votre nom de domaine, la partie de votre adresse après le @. Elle vous suit même si vous changez de service d’envoi.
related: ip-reputation, sender-reputation, postmaster-tools, dmarc, bounce-rate, email-warmup
cta: Gardez votre domaine propre en envoyant à des adresses vérifiées
---

## Qu’est-ce que la réputation de domaine ?

Votre domaine est la partie de votre adresse e-mail après le @. Dans contact@exemple.com, le domaine est exemple.com. La réputation de domaine est la confiance que les fournisseurs de messagerie accordent à ce domaine. Les fournisseurs de messagerie sont les services où les gens lisent leurs e-mails, comme Gmail, Outlook ou Yahoo.

Ces fournisseurs gardent un historique des e-mails envoyés avec chaque domaine. Ils regardent combien de destinataires les ouvrent, combien les signalent comme spam et combien rebondissent. Un bon historique aide vos e-mails à arriver dans la boîte de réception. Un mauvais historique les envoie dans le spam.

## Un exemple : une entreprise change de service d’envoi

Une marque de vêtements utilise le domaine exemple.com. Elle envoie ses newsletters avec un ESP, un service qui envoie des e-mails pour elle. Pendant un an, elle envoie à une liste ancienne sans la nettoyer. Beaucoup d’e-mails rebondissent et beaucoup de clients se plaignent.

1. Ses e-mails commencent à arriver dans le spam chez Gmail.
2. La marque pense que le problème vient de son ESP. Elle passe chez un autre ESP.
3. Le nouvel ESP envoie depuis d’autres serveurs, avec d’autres adresses IP. Une adresse IP est le numéro qui identifie un serveur sur Internet.
4. Les e-mails partent toujours avec le domaine exemple.com.
5. Gmail reconnaît le domaine. Les e-mails continuent d’arriver dans le spam.

L’adresse IP a changé, mais le domaine est resté le même. Sa réputation l’a suivi chez le nouvel ESP.

## Réputation de domaine et réputation IP

| | Réputation de domaine | Réputation IP |
|---|---|---|
| Ce qui est noté | Votre nom de domaine, par exemple exemple.com | L’adresse du serveur qui envoie |
| Si vous changez d’ESP | Elle vous suit | Elle reste chez l’ancien ESP |
| Qui en est responsable | Vous seul | Vous, et les autres clients si l’IP est partagée |

Les fournisseurs de messagerie regardent les deux. Plus de détails dans la page sur la [réputation IP](/glossary/ip-reputation).

## Ce qui abîme la réputation de domaine

- **Les rebonds.** Envoyer à beaucoup d’adresses qui n’existent pas montre que votre liste n’est pas entretenue. Voir [taux de rebond](/glossary/bounce-rate).
- **Les plaintes.** Chaque clic sur "Signaler comme spam" compte contre votre domaine.
- **Les spam traps.** Ce sont des adresses pièges qui ne servent qu’à repérer les listes achetées ou jamais nettoyées.
- **Une authentification absente.** Sans [SPF](/glossary/spf), [DKIM](/glossary/dkim) et [DMARC](/glossary/dmarc), les fournisseurs ne peuvent pas confirmer que vos e-mails viennent bien de vous. Des fraudeurs peuvent aussi envoyer des faux e-mails avec votre domaine.

## Comment suivre la réputation de votre domaine

Pour Gmail, Google propose [Google Postmaster Tools](/glossary/postmaster-tools). L’outil est gratuit. Vous ajoutez votre domaine et vous prouvez qu’il vous appartient avec un enregistrement DNS. Le DNS est l’annuaire public d’Internet qui relie les noms de domaine aux serveurs.

Postmaster Tools montre ensuite des données sur vos e-mails envoyés vers Gmail. Vous y voyez notamment votre taux de plaintes et les résultats d’authentification. Les données n’apparaissent que si vous envoyez un volume suffisant d’e-mails vers Gmail. Postmaster Tools ne concerne que Gmail. Les autres fournisseurs ont leurs propres outils ou n’en proposent pas.

## Comment protéger la réputation de domaine

1. **Authentifiez votre domaine.** Publiez SPF, DKIM et DMARC pour chaque service qui envoie avec votre domaine.
2. **Vérifiez vos listes.** Retirez les adresses qui n’existent pas avant chaque grand envoi.
3. **Séparez la prospection.** Envoyez vos e-mails de prospection à froid depuis un autre domaine ou un sous-domaine. Un sous-domaine est un nom placé avant votre domaine, comme news.exemple.com. Si la prospection pose problème, votre domaine principal reste protégé.
4. **Chauffez les nouveaux domaines.** Un domaine neuf n’a pas d’historique. Augmentez le volume petit à petit. C’est le [warm-up email](/glossary/email-warmup).
5. **Facilitez la désinscription.** Si le lien est facile à trouver, moins de personnes cliquent sur "Signaler comme spam".

## Réputation de domaine et vérification d’email

Les rebonds sont un des signaux que les fournisseurs utilisent pour noter votre domaine. La [vérification d’email](/) contrôle chaque adresse avant l’envoi et repère celles qui n’existent pas. Vous les retirez, donc votre domaine fait moins de rebonds. La vérification ne règle pas les plaintes ni l’authentification. Vous pouvez contrôler une adresse avec le [vérificateur d’email](/email-checker), ou toute une liste avec la [vérification d’email en masse](/bulk-email-verifier).
