---
title: DKIM
description: Ce qu’est DKIM, comment la signature DKIM prouve qu’un e-mail vient de votre domaine, à quoi ressemble l’enregistrement DKIM et comment le vérifier.
slug: dkim
date: 2026-10-12
updated: 2026-10-12
keyword: dkim
short: DKIM est une signature numérique ajoutée à chaque e-mail que vous envoyez. Elle prouve que l’e-mail vient bien de votre domaine et que personne ne l’a modifié en route. Le serveur qui reçoit l’e-mail vérifie cette signature avec une clé publiée dans votre DNS.
related: spf, dmarc, dmarc-alignment, dns-txt-record, email-spoofing, bimi
cta: Votre e-mail est signé. Vérifiez maintenant qu’il arrive à une vraie adresse
---

## Qu’est-ce que DKIM ?

DKIM signifie DomainKeys Identified Mail. La norme est la RFC 6376. DKIM ajoute une signature numérique à chaque e-mail envoyé depuis votre domaine. Votre domaine est la partie de votre adresse après le @, par exemple exemple.com.

La signature répond à deux questions. L’e-mail vient-il vraiment de ce domaine ? A-t-il été modifié après l’envoi ? Si la signature est valide, la réponse est oui à la première et non à la seconde.

DKIM fonctionne avec deux clés. Une clé est une longue suite de caractères produite par un calcul mathématique. La clé privée reste secrète sur le serveur qui envoie. La clé publique est publiée dans le DNS, l’annuaire public d’Internet qui relie les noms de domaine aux serveurs. Ce que la clé privée signe, seule la clé publique correspondante peut le vérifier.

## Un exemple : le reçu d’une boutique en ligne

Une boutique en ligne utilise le domaine exemple.com. Claire achète une lampe. La boutique lui envoie un reçu à son adresse Gmail.

1. Le serveur de la boutique prépare le reçu.
2. Il calcule une empreinte de l’e-mail : l’expéditeur, l’objet et le texte.
3. Il signe cette empreinte avec sa clé privée.
4. Il ajoute le résultat dans l’e-mail, sous la forme d’un en-tête. Un en-tête est une ligne technique en haut de l’e-mail, que le lecteur ne voit pas d’habitude.
5. Gmail reçoit le reçu. Il lit l’en-tête et trouve le domaine et le nom de la clé.
6. Gmail récupère la clé publique dans le DNS de exemple.com.
7. Gmail refait le calcul. Si le résultat correspond à la signature, DKIM passe.

Si quelqu’un avait changé le montant du reçu en route, le calcul ne correspondrait plus. DKIM échouerait.

## La signature DKIM

La signature DKIM se trouve dans un en-tête appelé `DKIM-Signature`. Il contient plusieurs parties. Deux sont utiles à connaître.

- `d=` est le domaine qui a signé, par exemple `d=exemple.com`.
- `s=` est le sélecteur. C’est un nom que vous choisissez pour la clé, par exemple `s=s2026a`.

Le sélecteur permet d’avoir plusieurs clés sur un même domaine. Vous pouvez par exemple avoir une clé pour Google Workspace et une autre pour votre outil de newsletter.

## L’enregistrement DKIM

L’enregistrement DKIM est un [enregistrement DNS TXT](/glossary/dns-txt-record). Un enregistrement TXT est une ligne de texte publiée dans le DNS de votre domaine. L’enregistrement DKIM se place à une adresse précise : `sélecteur._domainkey.exemple.com`. Avec le sélecteur s2026a, cela donne `s2026a._domainkey.exemple.com`.

Sa valeur ressemble à ceci :

```
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

- `v=DKIM1` indique qu’il s’agit d’un enregistrement DKIM.
- `k=rsa` indique le type de clé.
- `p=` contient la clé publique. Un `p=` vide veut dire que la clé a été retirée.

La clé privée n’est jamais publiée dans le DNS. Elle reste sur le serveur d’envoi. Pour la taille de la clé, utilisez 2048 bits. Gmail accepte 1024 bits au minimum et recommande 2048. La RFC 8301 dit aussi que les signataires devraient utiliser au moins 2048 bits.

## Pourquoi DKIM compte

**DKIM résiste au transfert.** Quand quelqu’un transfère votre e-mail, le contrôle [SPF](/glossary/spf) échoue souvent. Le serveur qui transfère n’est pas dans votre liste de serveurs autorisés. La signature DKIM, elle, voyage dans l’e-mail. Elle reste valide tant que le contenu ne change pas.

**DMARC s’appuie sur DKIM.** [DMARC](/glossary/dmarc) vérifie que SPF ou DKIM passe pour le domaine affiché dans le champ De. Ce contrôle s’appelle l’[alignement DMARC](/glossary/dmarc-alignment). Un DKIM signé avec votre propre domaine est la façon la plus fiable de passer DMARC.

**Google l’exige.** Google exige SPF, DKIM et DMARC des expéditeurs qui envoient 5 000 e-mails ou plus par jour vers Gmail. La règle figure dans ses consignes aux expéditeurs. Microsoft exige les mêmes trois contrôles au même seuil pour Outlook.com, Hotmail et Live.

## Comment configurer DKIM

Il y a deux cas.

**Vous utilisez un service d’e-mail.** Google Workspace, Microsoft 365, Mailchimp ou Brevo créent eux-mêmes la clé. Leur console vous donne le nom et la valeur de l’enregistrement. Vous les copiez dans le DNS de votre domaine, puis vous activez la signature dans le service.

**Vous gérez votre propre serveur d’envoi.** Vous devez créer la paire de clés. Notre [générateur DKIM](/dkim-generator) crée une clé de 2048 bits dans votre navigateur. Il vous donne aussi l’enregistrement TXT à publier. Vous installez ensuite la clé privée dans les réglages de signature de votre serveur, avec le même sélecteur.

## Comment vérifier que DKIM fonctionne

Envoyez un e-mail depuis votre domaine vers une adresse Gmail personnelle. Ouvrez-le. Dans le menu à trois points, choisissez "Afficher l’original". Gmail affiche le résultat DKIM en haut de la page. Vous devez voir PASS pour votre domaine.

Si vous voyez FAIL, vérifiez deux choses. L’enregistrement DNS a-t-il fini d’être publié ? Le sélecteur du serveur est-il exactement le même que dans le DNS ?

## DKIM et vérification d’email

DKIM et la vérification ne font pas le même travail. DKIM prouve que l’e-mail vient de votre domaine. La [vérification d’email](/) contrôle si l’adresse du destinataire existe. Un e-mail bien signé envoyé à une adresse morte fait quand même un hard bounce. Avant d’envoyer, vous pouvez contrôler une adresse avec le [vérificateur d’email](/email-checker) ou passer votre liste dans la [vérification d’email en masse](/bulk-email-verifier).
