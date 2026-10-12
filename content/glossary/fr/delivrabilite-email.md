---
title: Délivrabilité email
description: Ce qu’est la délivrabilité email, la différence avec la délivrance, ce qui la fait baisser, comment la mesurer et comment l’améliorer.
slug: delivrabilite-email
date: 2026-10-12
updated: 2026-10-12
keyword: délivrabilité email
short: La délivrabilité email indique si vos e-mails arrivent dans la boîte de réception. Un e-mail peut être livré mais finir dans le dossier spam. Une bonne délivrabilité veut dire que vos e-mails arrivent là où les gens les lisent.
related: inbox-placement, sender-reputation, bounce-rate, spam-filter, email-warmup, postmaster-tools
cta: Améliorez votre délivrabilité en commençant par la liste
---

## Qu’est-ce que la délivrabilité email ?

La délivrabilité email est la capacité de vos e-mails à arriver dans la boîte de réception. Pas dans le dossier spam, et pas bloqués par le serveur du destinataire. Un serveur est un ordinateur qui reçoit et range les e-mails pour un service comme Gmail ou Outlook.

Un e-mail envoyé peut connaître trois sorts.

- **Il est refusé.** Le serveur du destinataire le rejette. C’est un rebond.
- **Il va dans le spam.** Le serveur l’accepte, mais le range dans le dossier spam.
- **Il arrive dans la boîte de réception.** C’est le seul cas où la personne a de bonnes chances de le lire.

## Délivrance et délivrabilité : un exemple chiffré

Ces deux mots se ressemblent, mais ils ne mesurent pas la même chose. Prenons des chiffres d’exemple.

Une boutique envoie sa newsletter à 1 000 adresses.

1. 40 e-mails rebondissent. Les adresses n’existent pas ou le serveur les refuse.
2. 960 e-mails sont donc livrés. Le taux de délivrance est de 96 %.
3. Sur ces 960 e-mails, 800 arrivent dans la boîte de réception.
4. Les 160 autres vont dans le dossier spam.

La boutique voit "96 % livrés" dans son outil d’envoi. Mais seuls 800 e-mails sur 1 000 sont arrivés là où les clients regardent. C’est cette différence que mesure la délivrabilité. Ici, le taux de délivrabilité est de 80 % : 800 e-mails en boîte de réception sur 1 000 envoyés. Le rangement dans la boîte de réception ou dans le spam s’appelle le [placement en boîte de réception](/glossary/inbox-placement).

## Ce qui fait baisser la délivrabilité

Les fournisseurs de messagerie comme Gmail et Outlook regardent plusieurs choses avant de ranger un e-mail.

- **L’authentification.** [SPF](/glossary/spf), [DKIM](/glossary/dkim) et [DMARC](/glossary/dmarc) prouvent que l’e-mail vient vraiment de votre domaine. Votre domaine est la partie de votre adresse après le @. Sans ces contrôles, vos e-mails ont plus de chances d’aller dans le spam.
- **La réputation de l’expéditeur.** C’est la confiance que les fournisseurs accordent à votre domaine et à vos serveurs. Elle se construit avec votre historique d’envoi. Voir [réputation de l’expéditeur](/glossary/sender-reputation).
- **Les rebonds.** Beaucoup d’adresses qui n’existent pas montrent que votre liste n’est pas entretenue. Voir [taux de rebond](/glossary/bounce-rate).
- **Les plaintes.** Chaque clic sur "Signaler comme spam" compte contre vous. Les consignes de Google demandent de rester sous 0,3 % de plaintes et recommandent moins de 0,1 %.
- **La qualité de la liste.** Les adresses achetées, anciennes ou mal tapées causent des rebonds et touchent des pièges à spam.
- **Le contenu.** Un e-mail rempli de liens, d’images lourdes ou de phrases agressives peut déclencher les [filtres anti-spam](/glossary/spam-filter).

## Comment mesurer votre délivrabilité

Votre outil d’envoi montre les rebonds, mais pas le dossier spam. Il faut d’autres méthodes.

**Un test avec une liste de contrôle.** Vous envoyez votre e-mail à un petit groupe d’adresses de test chez Gmail, Outlook, Yahoo et d’autres. Puis vous regardez où chaque e-mail est arrivé : boîte de réception ou spam. Ce groupe d’adresses s’appelle une seed list.

**Google Postmaster Tools.** Cet outil gratuit de Google montre comment Gmail traite les e-mails de votre domaine. Il affiche notamment votre taux de plaintes. Voir [Google Postmaster Tools](/glossary/postmaster-tools).

**Les signaux de vos campagnes.** Une baisse soudaine des ouvertures chez un seul fournisseur indique souvent un problème de spam chez lui.

## Comment améliorer la délivrabilité email

Suivez ces étapes dans l’ordre.

1. Publiez SPF, DKIM et DMARC pour chaque service qui envoie avec votre domaine.
2. Vérifiez votre liste et retirez les adresses qui n’existent pas.
3. Retirez tout de suite chaque adresse qui fait un hard bounce.
4. N’achetez pas de listes et n’ajoutez que des personnes qui se sont inscrites.
5. Mettez un lien de désinscription visible dans chaque e-mail.
6. Arrêtez d’écrire aux personnes qui n’ouvrent plus rien depuis des mois.
7. Augmentez le volume lentement sur un nouveau domaine. Cela s’appelle le [warm-up email](/glossary/email-warmup).
8. Suivez vos plaintes et vos rebonds après chaque campagne.

## Délivrabilité email et vérification d’email

La [vérification d’email](/) agit sur un des facteurs de la délivrabilité : les rebonds. Elle contrôle chaque adresse avant l’envoi et repère celles qui n’existent pas. Moins de rebonds montre aux fournisseurs que votre liste est entretenue. La vérification ne change pas votre contenu ni votre authentification. Vous pouvez [vérifier une adresse mail](/email-checker) à la main, ou toute une liste avec la [vérification d’email en masse](/bulk-email-verifier).
