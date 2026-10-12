---
title: Réputation IP
description: Ce qu’est l’IP reputation, la différence entre IP partagée et IP dédiée, ce qui fait baisser la réputation IP, et comment la vérifier.
slug: reputation-ip
date: 2026-10-12
updated: 2026-10-12
keyword: ip reputation
short: La réputation IP, ou IP reputation, mesure la confiance que Gmail, Outlook et les autres fournisseurs accordent à l’adresse IP qui envoie vos e-mails. Une bonne réputation IP aide vos e-mails à arriver dans la boîte de réception. Une mauvaise réputation les envoie dans le spam ou les fait bloquer.
related: domain-reputation, sender-reputation, ip-warming, email-blacklist, dnsbl, spam-trap
cta: Protégez votre réputation IP en n’envoyant qu’à des adresses réelles
---

## Qu’est-ce que l’IP reputation ?

Une adresse IP est le numéro qui identifie un serveur sur Internet, par exemple `203.0.113.25`. Un serveur est un ordinateur allumé en permanence qui rend un service. Chaque e-mail part d’un serveur, donc d’une adresse IP.

La réputation IP est la confiance que les fournisseurs de messagerie accordent à cette adresse. Les fournisseurs de messagerie sont les services où les gens lisent leurs e-mails, comme Gmail, Outlook ou Yahoo. Ils gardent un historique de chaque adresse IP qui leur envoie des e-mails. Si cette adresse a envoyé du spam par le passé, ils se méfient de ses nouveaux e-mails.

## Un exemple : deux expéditeurs sur la même IP

Un fleuriste et un site de jeux en ligne utilisent le même ESP, un service qui envoie des e-mails pour ses clients. Pour réduire les coûts, l’ESP les fait envoyer depuis la même adresse IP.

1. Le fleuriste envoie sa newsletter à des clients inscrits. Peu de plaintes, peu de rebonds.
2. Le site de jeux achète une liste de 50 000 adresses et envoie une promotion.
3. Beaucoup d’adresses n’existent pas. Beaucoup de destinataires cliquent sur "Signaler comme spam".
4. Gmail baisse sa confiance envers cette adresse IP.
5. La newsletter suivante du fleuriste part de la même IP. Une partie arrive dans le spam.

Le fleuriste n’a rien fait de mal. Il partage simplement l’adresse IP d’un mauvais expéditeur. Les ESP surveillent leurs clients pour limiter ce risque.

## IP partagée et IP dédiée

| | IP partagée | IP dédiée |
|---|---|---|
| Qui l’utilise | Plusieurs clients de l’ESP | Vous seul |
| Réputation | Dépend de tous les expéditeurs | Dépend seulement de vos envois |
| Pour qui | Les petits et moyens volumes | Les gros volumes réguliers |
| Mise en route | Prête tout de suite | Il faut la chauffer progressivement |

Une IP dédiée n’est pas toujours un avantage. Avec peu d’envois, les fournisseurs n’ont pas assez d’historique pour lui faire confiance. Une IP partagée bien gérée donne souvent de meilleurs résultats aux petits expéditeurs.

## Ce qui fait monter ou baisser la réputation IP

**Ce qui la fait monter :**

- Un volume d’envoi régulier, sans pics soudains.
- Des destinataires qui ouvrent, lisent et répondent.
- Très peu de rebonds et de plaintes.

**Ce qui la fait baisser :**

- **Les rebonds.** Beaucoup d’e-mails envoyés à des adresses qui n’existent pas.
- **Les spam traps.** Ce sont des adresses pièges qui ne servent qu’à repérer les mauvaises listes. Voir [spam trap](/glossary/spam-trap).
- **Les plaintes.** Les clics sur "Signaler comme spam".
- **Une inscription sur une liste noire.** Une liste noire est une liste publique d’adresses IP connues pour envoyer du spam. Voir [blacklist email](/glossary/email-blacklist).

## Comment vérifier la réputation de votre IP

D’abord, trouvez l’adresse IP de votre serveur d’envoi. Votre ESP l’indique dans ses réglages. Vous pouvez aussi la lire dans l’original d’un e-mail reçu.

- **Les vérificateurs de listes noires.** MXToolbox et des outils similaires testent votre IP sur des dizaines de listes noires en une fois. Ces listes s’appellent aussi des [DNSBL](/glossary/dnsbl).
- **Spamhaus.** Le site de Spamhaus permet de vérifier si une IP figure sur ses listes.
- **Microsoft SNDS.** Smart Network Data Services est un service gratuit de Microsoft. Il montre comment Outlook.com voit les adresses IP que vous possédez.

## Comment améliorer la réputation IP

1. Trouvez la cause, par exemple une liste achetée, un formulaire sans contrôle ou un compte piraté.
2. Corrigez-la avant de renvoyer quoi que ce soit.
3. Vérifiez votre liste et retirez les adresses qui n’existent pas.
4. Retirez les personnes qui n’ont rien ouvert depuis des mois.
5. Sur une nouvelle IP dédiée, augmentez le volume petit à petit. C’est le [warm-up IP](/glossary/ip-warming).
6. Si votre IP est sur une liste noire, demandez son retrait une fois la cause corrigée.

## Réputation IP et réputation de domaine

La réputation IP suit l’adresse du serveur. La [réputation de domaine](/glossary/domain-reputation) suit votre nom de domaine, la partie de votre adresse après le @. Si vous changez d’ESP, votre IP change, mais votre domaine reste le même. Les fournisseurs de messagerie regardent les deux pour décider où ranger vos e-mails.

## Réputation IP et vérification d’email

Les rebonds et les spam traps sont deux causes connues d’une mauvaise réputation IP. La [vérification d’email](/) agit sur les deux. Elle retire les adresses qui n’existent pas avant l’envoi. Elle retire aussi les adresses mortes avant qu’elles soient recyclées en pièges. Vous pouvez [vérifier une adresse mail](/email-checker) ou une liste entière avec la [vérification d’email en masse](/bulk-email-verifier).
