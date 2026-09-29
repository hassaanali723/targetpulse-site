---
title: Enregistrement PTR
description: Ce qu'est un enregistrement PTR, pourquoi les serveurs de messagerie le vérifient, ce qui se passe quand une IP expéditrice n'a pas d'enregistrement PTR et comment en configurer un.
slug: enregistrement-ptr
date: 2026-09-29
updated: 2026-09-29
keyword: enregistrement ptr
short: Un enregistrement PTR est un enregistrement DNS qui relie une adresse IP à un nom d'hôte. C'est l'inverse d'un enregistrement DNS normal. Les serveurs de messagerie vérifient l'enregistrement PTR de l'adresse IP qui leur envoie des e-mails. Certains serveurs refusent les e-mails venant d'adresses IP sans enregistrement PTR.
related: mx-record, spf, ip-reputation, smtp-error-codes, dns-txt-record, smtp
cta: Vérifiez votre liste, pas seulement votre DNS
---

## Ce qu'est un enregistrement PTR

Un enregistrement DNS normal relie un nom à une adresse IP. Par exemple, `mail.exemple.com` pointe vers `203.0.113.10`. Un enregistrement PTR fait l'inverse. Il relie `203.0.113.10` à `mail.exemple.com`. Cela s'appelle le DNS inverse.

PTR signifie Pointer. L'enregistrement PTR ne se trouve pas dans le DNS de votre domaine. Il se trouve dans une zone DNS séparée qui appartient au propriétaire de l'adresse IP. C'est généralement votre hébergeur ou votre fournisseur de messagerie. Pour créer ou modifier un enregistrement PTR, vous leur en faites la demande.

## Pourquoi les serveurs de messagerie le vérifient

Quand votre serveur se connecte à un serveur de réception, le serveur de réception voit votre adresse IP. Il consulte l'enregistrement PTR de cette IP. Puis il vérifie deux choses :

- L'adresse IP a-t-elle un enregistrement PTR ?
- Le nom d'hôte dans l'enregistrement PTR pointe-t-il vers la même adresse IP ?

Si les deux sont vrais, l'expéditeur ressemble à un vrai serveur de messagerie que quelqu'un a configuré exprès. S'il n'y a pas d'enregistrement PTR, l'expéditeur ressemble à l'une de ces trois choses : une connexion domestique, un ordinateur infecté ou un serveur que personne n'a configuré. Le spam vient souvent de là.

## Ce qui se passe sans enregistrement PTR

Certains fournisseurs refusent l'e-mail. La référence des erreurs de Gmail liste `550 5.7.25 This message was blocked because the sending IP address doesn't have a PTR record`. C'est un refus permanent. Votre outil d'envoi l'enregistre comme un [hard bounce](/glossary/hard-bounce) même si l'adresse existe.

D'autres fournisseurs acceptent l'e-mail mais lui donnent un moins bon score. Un moins bon score signifie que l'e-mail a plus de chances d'aller dans le dossier spam.

## Comment configurer un enregistrement PTR

- Trouvez l'adresse IP depuis laquelle vos e-mails sont envoyés.
- Choisissez le nom d'hôte vers lequel elle doit pointer. Exemple : `mail.votredomaine.com`.
- Assurez-vous que ce nom d'hôte a un enregistrement DNS normal qui pointe vers la même adresse IP.
- Demandez à votre hébergeur ou à votre fournisseur de messagerie de définir l'enregistrement PTR de l'adresse IP avec ce nom d'hôte.

Si vous envoyez via Google Workspace, Microsoft 365, SendGrid ou Amazon SES, les adresses IP expéditrices appartiennent au fournisseur. Les enregistrements PTR sont déjà configurés. Vous n'avez besoin de configurer un enregistrement PTR que si vous gérez votre propre serveur de messagerie ou utilisez une adresse IP dédiée.

## Enregistrements PTR et vérification

Un enregistrement PTR concerne l'adresse IP de l'expéditeur. Il ne concerne pas l'adresse du destinataire. Un [vérificateur d'adresses e-mail](/email-checker) n'a pas besoin de votre enregistrement PTR pour vérifier votre liste.

Un vérificateur a besoin d'enregistrements PTR sur ses propres adresses IP. Sans eux, les serveurs de réception refusent de lui parler. C'est une des raisons pour lesquelles un service de vérification obtient des réponses différentes d'un script lancé sur un ordinateur portable.
