---
title: DMARC
description: Ce qu’est DMARC, comment il bloque les faux e-mails envoyés au nom de votre domaine, les trois politiques none, quarantine et reject, et par où commencer.
slug: dmarc
date: 2026-10-12
updated: 2026-10-12
keyword: dmarc
short: DMARC est une règle que vous publiez dans le DNS de votre domaine. Elle dit aux serveurs de réception quoi faire d’un e-mail qui prétend venir de votre domaine mais échoue aux contrôles SPF et DKIM. Elle indique aussi où vous envoyer des rapports.
related: spf, dkim, dmarc-alignment, email-spoofing, bimi, dns-txt-record
cta: DMARC protège votre domaine. La vérification protège votre liste
---

## Qu’est-ce que DMARC ?

DMARC signifie Domain-based Message Authentication, Reporting and Conformance. C’est une règle que le propriétaire d’un domaine publie dans son DNS. Le domaine est la partie de l’adresse après le @. Le DNS est l’annuaire public d’Internet qui relie les noms de domaine aux serveurs.

La règle DMARC répond à une question simple. Que doit faire un serveur de réception avec un e-mail qui dit venir de votre domaine, mais qui ne le prouve pas ? DMARC lui donne trois choix : ne rien faire, mettre l’e-mail dans le spam ou le refuser.

DMARC ne fait pas ses propres contrôles. Il utilise les résultats de deux autres contrôles, [SPF](/glossary/spf) et [DKIM](/glossary/dkim). SPF vérifie quel serveur a envoyé l’e-mail. DKIM vérifie une signature numérique dans l’e-mail.

## Un exemple : une fausse facture

Une entreprise utilise le domaine exemple.com. Un fraudeur envoie un e-mail à ses clients. L’expéditeur affiché est billing@exemple.com. L’objet est "Facture en retard, payez aujourd’hui". Le fraudeur envoie cet e-mail depuis son propre serveur.

1. Gmail reçoit l’e-mail. Le champ De affiche exemple.com.
2. Gmail fait le contrôle SPF. Le serveur du fraudeur n’est pas dans la liste SPF de exemple.com. SPF échoue.
3. Gmail fait le contrôle DKIM. Le fraudeur n’a pas la clé privée de exemple.com. Il n’y a pas de signature valide. DKIM échoue.
4. Gmail lit la règle DMARC de exemple.com. Elle dit `p=reject`.
5. Gmail refuse l’e-mail. Le client ne le voit jamais.

Sans règle DMARC, Gmail aurait dû décider seul. L’e-mail aurait pu arriver dans la boîte de réception.

## Comment DMARC décide : l’alignement

Pour passer DMARC, il faut que SPF ou DKIM passe. Il faut aussi que ce contrôle concerne le même domaine que celui affiché dans le champ De. Cette correspondance s’appelle l’[alignement DMARC](/glossary/dmarc-alignment).

Un seul des deux contrôles suffit. Par exemple, SPF peut passer pour le domaine de votre service d’envoi, pas pour le vôtre. Si DKIM passe avec `d=exemple.com`, l’e-mail passe quand même DMARC.

## Les trois politiques DMARC

La politique se règle avec la partie `p=` de l’enregistrement.

| Politique | Ce qui arrive à un e-mail qui échoue | Quand l’utiliser |
|---|---|---|
| `p=none` | Il est livré normalement. Vous recevez des rapports. | Au début, pour observer |
| `p=quarantine` | Il va dans le dossier spam. | Quand tous vos vrais envois passent |
| `p=reject` | Il est refusé. | Quand vous êtes sûr que rien de légitime n’échoue |

Votre politique est une demande, pas un ordre. Les fournisseurs de messagerie utilisent aussi leurs propres filtres et leurs données de réputation.

## Un enregistrement DMARC simple

L’enregistrement DMARC est un [enregistrement DNS TXT](/glossary/dns-txt-record). Un enregistrement TXT est une ligne de texte publiée dans le DNS. L’enregistrement DMARC se place à l’adresse `_dmarc.exemple.com`. Voici un enregistrement de départ :

```
v=DMARC1; p=none; rua=mailto:reports@exemple.com
```

- `v=DMARC1` indique qu’il s’agit d’un enregistrement DMARC. Cette partie doit venir en premier.
- `p=none` est la politique. Ici, les serveurs ne changent rien à la livraison.
- `rua=mailto:reports@exemple.com` est l’adresse qui reçoit les rapports. Les serveurs de réception y envoient en général un fichier par jour. Il liste les serveurs qui ont envoyé des e-mails avec votre domaine.

Publiez un seul enregistrement DMARC par domaine. S’il y en a deux, les serveurs les ignorent tous les deux.

## Par où commencer avec DMARC

Avancez par étapes, pour ne bloquer aucun de vos vrais e-mails.

1. Publiez un enregistrement avec `p=none` et une adresse `rua`.
2. Lisez les rapports pendant quelques semaines. Repérez chaque service qui envoie avec votre domaine : newsletter, facturation, support.
3. Configurez SPF et DKIM pour chacun de ces services.
4. Passez à `p=quarantine` quand tous vos envois passent.
5. Passez à `p=reject` quand la livraison reste stable.

Notre [générateur DMARC](/dmarc-generator) (en anglais) crée l’enregistrement pour chaque étape. Le guide [What is a DMARC record](/blog/what-is-a-dmarc-record) (en anglais) explique chaque partie de l’enregistrement et les rapports.

## Qui exige DMARC

Google exige un enregistrement DMARC des expéditeurs qui envoient 5 000 e-mails ou plus par jour vers Gmail. Microsoft fait de même depuis le 5 mai 2025 pour Outlook.com, Hotmail et Live, au même seuil. Pour ces deux fournisseurs, `p=none` suffit pour respecter la règle. Mais `p=none` ne bloque aucun faux e-mail.

La norme actuelle de DMARC est la RFC 9989, publiée en mai 2026. Elle remplace la RFC 7489. Les enregistrements qui commencent par `v=DMARC1` continuent de fonctionner.

## DMARC et vérification d’email

DMARC et la vérification protègent deux choses différentes. DMARC empêche d’autres personnes d’envoyer des e-mails avec votre domaine. La [vérification d’email](/) contrôle que les adresses de votre liste existent. Un domaine avec `p=reject` peut quand même avoir beaucoup de hard bounces si la liste contient des adresses mortes. Vous pouvez [vérifier une adresse mail](/email-checker) une par une, ou toute une liste avec la [vérification d’email en masse](/bulk-email-verifier).
