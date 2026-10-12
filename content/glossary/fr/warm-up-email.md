---
title: Warm-up email
description: Ce qu’est l’email warm up, pourquoi un nouveau domaine en a besoin, un exemple de calendrier, les outils de warm-up et les erreurs qui annulent le travail.
slug: warm-up-email
date: 2026-10-12
updated: 2026-10-12
keyword: email warm up
short: Le warm-up email consiste à augmenter lentement le nombre d’e-mails envoyés depuis une nouvelle adresse ou un nouveau domaine. Gmail, Outlook et les autres fournisseurs apprennent ainsi à faire confiance à cet expéditeur. Sans warm-up, un gros premier envoi risque d’aller dans le spam.
related: ip-warming, domain-reputation, sender-reputation, deliverability, bounce-rate, spam-filter
cta: Vérifiez votre liste avant le premier envoi de votre warm-up
---

## Qu’est-ce que l’email warm-up ?

Le warm-up email, ou "chauffe" d’une adresse, est une méthode d’envoi progressive. Vous commencez avec quelques e-mails par jour. Puis vous augmentez le nombre petit à petit, sur plusieurs semaines.

Le but est de construire une bonne réputation. Les fournisseurs de messagerie, comme Gmail ou Outlook, observent chaque nouvel expéditeur. Si les premiers e-mails sont ouverts, lus et ne reçoivent pas de plaintes, ils accordent plus de confiance aux suivants.

## Pourquoi un nouveau domaine a besoin d’un warm-up

Votre domaine est la partie de votre adresse après le @. Un domaine que vous venez d’acheter n’a aucun historique d’envoi. Les fournisseurs de messagerie ne savent pas encore si vous envoyez des e-mails attendus ou du spam.

Les spammeurs achètent souvent des domaines neufs et envoient tout de suite des milliers d’e-mails. Un nouveau domaine qui fait la même chose ressemble à un spammeur. Ses e-mails vont dans le spam ou sont bloqués. Le warm-up montre l’inverse : un volume petit, régulier, avec des destinataires qui réagissent.

C’est la même chose pour une nouvelle adresse sur un domaine existant, ou pour un domaine qui n’a rien envoyé depuis longtemps.

## Un exemple de calendrier de warm-up

Julien crée une start-up. Il achète le domaine exemple.com et crée l’adresse julien@exemple.com pour la prospection. Voici un calendrier d’exemple. Les vrais calendriers varient selon le fournisseur, le type d’e-mail et la réaction des destinataires.

| Semaine | E-mails par jour (exemple) |
|---|---|
| 1 | Environ 20 |
| 2 | Environ 40 |
| 3 | Environ 80 |
| 4 | Environ 150 |
| 5 et suivantes | Augmentation progressive jusqu’au volume visé |

Pendant la première semaine, Julien écrit surtout à des personnes qui le connaissent et qui vont répondre. Il surveille ses rebonds et ses plaintes chaque jour. Si un problème apparaît, il reste au même volume une semaine de plus.

## Warm-up manuel et outils de warm-up

**Le warm-up manuel.** Vous envoyez de vrais e-mails à de vrais contacts, en suivant un calendrier. Vous commencez par les contacts les plus susceptibles d’ouvrir et de répondre. C’est plus lent, mais chaque e-mail a un vrai destinataire.

**Les outils de warm-up.** Ces services relient votre boîte à un réseau d’autres boîtes. L’outil envoie automatiquement des e-mails entre ces boîtes. Les boîtes du réseau ouvrent les e-mails, y répondent et les sortent du dossier spam si besoin. Ces actions donnent des signaux positifs aux fournisseurs. Beaucoup d’outils de prospection proposent cette fonction.

Les deux méthodes peuvent se combiner. Un outil de warm-up ne remplace pas une liste propre. Si vos vrais envois rebondissent, l’outil ne compense pas ces rebonds.

## Warm-up email et warm-up IP

Les deux mots se ressemblent, mais ils ne concernent pas la même chose.

- **Le warm-up email** construit la réputation d’un domaine ou d’une adresse e-mail.
- **Le [warm-up IP](/glossary/ip-warming)** construit la réputation d’une nouvelle adresse IP dédiée. Une adresse IP est le numéro qui identifie un serveur sur Internet. Une IP dédiée est utilisée par vous seul.

Si vous envoyez avec un ESP sur une IP partagée, vous n’avez pas à chauffer l’IP. Un ESP est un service qui envoie des e-mails pour vous, comme Brevo ou Mailchimp. Vous devez quand même chauffer un nouveau domaine.

## Les erreurs qui annulent un warm-up

- **Envoyer à une liste non vérifiée.** Par exemple, si 10 % des adresses de la première semaine rebondissent, les fournisseurs voient tout de suite une mauvaise liste. Votre réputation baisse dès le départ.
- **Augmenter trop vite.** Passer de 50 à 2 000 e-mails en un jour ressemble à un comportement de spammeur.
- **Envoyer à des adresses achetées.** Elles contiennent des pièges à spam et causent des plaintes.
- **Oublier l’authentification.** Publiez SPF, DKIM et DMARC avant le premier e-mail, pas après.
- **Arrêter puis reprendre d’un coup.** Après une longue pause, reprenez avec un volume réduit.

## Warm-up email et vérification d’email

Le warm-up ne marche que si les premiers e-mails arrivent à de vraies personnes. Vérifiez votre liste avant la première vraie campagne. La [vérification d’email](/) repère les adresses qui n’existent pas, pour que vos premières semaines se fassent avec le moins de rebonds possible. Pour un fichier entier, utilisez la [vérification d’email en masse](/bulk-email-verifier). Pour un contact ajouté à la main, vous pouvez contrôler son adresse avec le [vérificateur d’email](/email-checker) avant de lui écrire.
