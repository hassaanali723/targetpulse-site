---
title: Enregistrement PTR
description: Ce qu'est un enregistrement PTR, pourquoi les serveurs de messagerie le vérifient, ce qui se passe s'il manque et comment en configurer un.
slug: enregistrement-ptr
date: 2026-09-29
updated: 2026-10-12
keyword: enregistrement ptr
short: Un enregistrement PTR relie une adresse IP à un nom de serveur, dans le sens inverse d'un enregistrement DNS normal. Les serveurs de messagerie lisent l'enregistrement PTR de l'adresse IP qui leur envoie un e-mail. Certains refusent les e-mails d'une adresse IP qui n'en a pas.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Vérifiez votre liste, pas seulement votre DNS
---

## Qu'est-ce qu'un enregistrement PTR ?

Commençons par quatre mots simples :

- **Serveur :** un ordinateur qui tourne en permanence et rend un service, par exemple envoyer des e-mails.
- **Adresse IP :** le numéro qui identifie un serveur sur Internet, par exemple `203.0.113.10`.
- **Nom d'hôte :** le nom lisible d'un serveur, par exemple `mail.example.com`.
- **DNS :** l'annuaire public d'Internet. Chaque ligne de cet annuaire s'appelle un enregistrement.

Un enregistrement DNS normal relie un nom à une adresse IP. Par exemple, `mail.example.com` pointe vers `203.0.113.10`. Un enregistrement PTR fait l'inverse. Il relie `203.0.113.10` à `mail.example.com`. Cela s'appelle le DNS inverse.

PTR signifie Pointer. L'enregistrement PTR ne se trouve pas dans le DNS de votre domaine. Il se trouve dans une zone DNS séparée, qui appartient au propriétaire de l'adresse IP. C'est en général votre hébergeur ou votre fournisseur de messagerie. Pour créer ou modifier un enregistrement PTR, vous leur en faites la demande.

## Un exemple simple

Une petite entreprise, "Atelier Bois", gère son propre serveur d'envoi. Voici deux situations.

**Avec un enregistrement PTR :**

1. Le serveur d'Atelier Bois envoie une facture à un client Gmail.
2. Gmail voit que l'e-mail vient de l'adresse IP `203.0.113.10`.
3. Gmail cherche l'enregistrement PTR de cette adresse IP. Il trouve `mail.atelier-bois.example`.
4. Gmail vérifie que `mail.atelier-bois.example` pointe bien vers `203.0.113.10`. C'est le cas.
5. Gmail accepte l'e-mail et continue ses autres contrôles.

**Sans enregistrement PTR :**

1. Le même serveur envoie la même facture.
2. Gmail cherche l'enregistrement PTR de `203.0.113.10`. Il n'en trouve aucun.
3. Gmail refuse l'e-mail avec le code `550 5.7.25`.
4. Le client ne reçoit jamais la facture. Pourtant, son adresse est correcte.

## Pourquoi les serveurs de messagerie le vérifient

Quand votre serveur se connecte à un serveur de réception, celui-ci voit votre adresse IP. Il consulte l'enregistrement PTR de cette IP. Puis il vérifie deux choses :

1. L'adresse IP a-t-elle un enregistrement PTR ?
2. Le nom d'hôte dans l'enregistrement PTR pointe-t-il vers la même adresse IP ?

Si les deux sont vrais, l'expéditeur ressemble à un vrai serveur de messagerie que quelqu'un a configuré exprès. S'il n'y a pas d'enregistrement PTR, l'expéditeur ressemble à l'une de ces trois choses :

- une connexion Internet à la maison ;
- un ordinateur infecté par un virus ;
- un serveur que personne n'a configuré.

Le spam vient souvent de là.

## Ce qui se passe sans enregistrement PTR

Certains fournisseurs refusent l'e-mail. La liste des erreurs de Gmail contient ce message : `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. Cela veut dire que le message a été bloqué parce que l'adresse IP d'envoi n'a pas d'enregistrement PTR.

C'est un refus permanent. Votre outil d'envoi l'enregistre comme un [hard bounce](/glossary/hard-bounce), même si l'adresse du destinataire existe. Un hard bounce est un e-mail refusé de façon définitive.

D'autres fournisseurs acceptent l'e-mail mais lui donnent un moins bon score. Un moins bon score veut dire que l'e-mail a plus de chances d'aller dans le dossier spam.

## Comment configurer un enregistrement PTR

1. Trouvez l'adresse IP depuis laquelle vos e-mails sont envoyés.
2. Choisissez le nom d'hôte vers lequel elle doit pointer. Exemple : `mail.votre-domaine.example`.
3. Assurez-vous que ce nom d'hôte a un enregistrement DNS normal qui pointe vers la même adresse IP.
4. Demandez à votre hébergeur ou à votre fournisseur de messagerie de définir l'enregistrement PTR de l'adresse IP avec ce nom d'hôte.

Si vous envoyez via Google Workspace, Microsoft 365, SendGrid ou Amazon SES, les adresses IP d'envoi appartiennent au fournisseur. Chaque enregistrement PTR est déjà configuré. Vous n'avez besoin de configurer un enregistrement PTR que dans deux cas :

- vous gérez votre propre serveur de messagerie ;
- vous utilisez une adresse IP dédiée, c'est-à-dire réservée à vous seul.

**Exemple :** une boutique envoie ses newsletters avec SendGrid sur les adresses IP partagées de SendGrid. Elle n'a rien à faire pour l'enregistrement PTR.

## Enregistrements PTR et vérification

Un enregistrement PTR concerne l'adresse IP de l'expéditeur. Il ne concerne pas l'adresse du destinataire. Pour [vérifier une adresse mail](/email-checker), vous n'avez pas besoin de votre propre enregistrement PTR.

En revanche, un vérificateur a besoin d'un enregistrement PTR sur chacune de ses propres adresses IP. Sans cela, les serveurs de réception refusent de lui parler. C'est une des raisons pour lesquelles un service de vérification obtient des réponses différentes d'un script lancé sur un ordinateur portable.

La [vérification d'email](/) trouve les adresses qui n'existent pas avant votre envoi. La [vérification d'email en masse](/bulk-email-verifier) fait ce contrôle sur une liste entière. Elle ne remplace pas un enregistrement PTR manquant sur votre serveur d'envoi.
