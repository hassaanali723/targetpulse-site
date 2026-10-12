---
title: Score de spam
description: Ce qu’est un spam score, comment SpamAssassin le calcule, ce qui fait monter le score de spam d’un e-mail, comment le tester et comment le faire baisser.
slug: score-de-spam
date: 2026-10-12
updated: 2026-10-12
keyword: spam score
short: Un score de spam, ou spam score, est le nombre de points qu’un filtre anti-spam donne à un e-mail. Plus le score est élevé, plus l’e-mail a de chances d’aller dans le dossier spam. Chaque problème détecté dans l’e-mail ajoute des points.
related: spam-filter, spam-trap, deliverability, sender-reputation, email-blacklist, complaint-rate
cta: Faites baisser les rebonds en même temps que votre score de spam
---

## Qu’est-ce qu’un spam score ?

Un spam score est un nombre qu’un [filtre anti-spam](/glossary/spam-filter) calcule pour chaque e-mail reçu. Un filtre anti-spam est un logiciel qui trie les e-mails entrants et écarte les indésirables. Il vérifie l’e-mail avec une liste de règles. Chaque règle déclenchée ajoute des points. Au-dessus d’un certain total, l’e-mail est classé comme spam.

Chaque filtre a sa propre méthode. Gmail et Outlook ne publient pas leurs règles ni leurs scores. SpamAssassin, lui, publie ses règles. C’est un logiciel libre installé sur de nombreux serveurs de messagerie.

## Un exemple avec SpamAssassin

Par défaut, SpamAssassin classe un e-mail comme spam à partir de 5,0 points. Voici un e-mail d’exemple. Les points ci-dessous sont donnés à titre d’illustration. Les vrais points dépendent de la version et des réglages du serveur.

Une agence de voyage envoie une promotion. L’objet est "PROMO EXCEPTIONNELLE AUJOURD’HUI". SpamAssassin vérifie l’e-mail.

| Règle déclenchée | Points (exemple) |
|---|---|
| L’objet est écrit tout en majuscules | 1,5 |
| L’adresse IP d’envoi figure sur une liste noire | 2,5 |
| Le code HTML de l’e-mail est mal formé | 1,4 |
| **Total** | **5,4** |

Le total dépasse 5,0. L’e-mail est marqué comme spam. Si l’agence corrige l’objet, le total descend à 3,9. L’e-mail passe alors sous le seuil.

Certaines règles retirent aussi des points. Par exemple, une signature DKIM valide peut baisser le score.

## Ce qui fait monter un score de spam

- **Une authentification absente.** Pas d’enregistrement [SPF](/glossary/spf), pas de signature [DKIM](/glossary/dkim), pas de règle [DMARC](/glossary/dmarc). Ces contrôles prouvent que l’e-mail vient bien de votre domaine.
- **Une adresse IP sur une liste noire.** Une adresse IP est le numéro qui identifie un serveur sur Internet. Si celle de votre serveur d’envoi figure sur une [blacklist email](/glossary/email-blacklist), le score monte beaucoup.
- **Des mots typiques du spam et des MAJUSCULES.** "Gratuit", "Gagnez", "Urgent", surtout en série et en capitales.
- **Un code HTML cassé.** Le HTML est le code qui met en forme l’e-mail. Des balises mal fermées sont fréquentes dans les e-mails de spam.
- **Des liens raccourcis.** Les liens de type bit.ly cachent la vraie destination. Les spammeurs s’en servent souvent.
- **Une seule grande image et presque pas de texte.** Le filtre ne peut pas lire le texte d’une image.

## Le Spam Score de Moz n’a rien à voir

Si vous cherchez "spam score" sur Internet, vous trouverez aussi le Spam Score de Moz. C’est une mesure pour les sites web, pas pour les e-mails. Elle concerne le référencement naturel, c’est-à-dire la place d’un site dans Google. Moz indique le pourcentage de sites aux caractéristiques proches qui ont été pénalisés par Google. Ce score ne dit rien sur vos e-mails.

## Comment tester le score de spam de votre e-mail

**mail-tester.com.** Le site vous donne une adresse e-mail de test. Vous envoyez votre e-mail à cette adresse depuis votre outil d’envoi habituel. Le site affiche ensuite une note sur 10 et la liste des problèmes trouvés. Attention, ici la logique est inversée : 10 sur 10 est le meilleur résultat.

**Notre vérificateur de mots spam.** Le [spam word checker](/spam-word-checker) (en anglais) lit le texte de votre e-mail dans votre navigateur. Il signale les mots et les tournures qui posent souvent problème. Il ne donne pas de note, car aucun outil ne sait comment une boîte précise traitera votre e-mail.

## Comment faire baisser votre score de spam

1. Publiez SPF, DKIM et DMARC pour votre domaine.
2. Vérifiez que l’adresse IP de votre serveur d’envoi n’est pas sur une liste noire.
3. Écrivez l’objet en minuscules, sans série de points d’exclamation.
4. Utilisez des liens écrits en entier vers votre propre domaine, pas des liens raccourcis.
5. Gardez un bon équilibre entre texte et images.
6. Faites valider votre code HTML ou utilisez un modèle de votre outil d’envoi.
7. Refaites un test sur mail-tester.com avant chaque grande campagne.

## Score de spam et vérification d’email

La [vérification d’email](/) ne change pas le score de contenu d’un e-mail. Un filtre note l’e-mail lui-même, pas votre liste. La vérification agit sur votre réputation. Elle retire les adresses mortes, donc vous faites moins de rebonds. Elle retire aussi les adresses abandonnées avant qu’elles deviennent des [spam traps](/glossary/spam-trap). Vous pouvez [vérifier une adresse mail](/email-checker) ou toute votre liste avec la [vérification d’email en masse](/bulk-email-verifier).
