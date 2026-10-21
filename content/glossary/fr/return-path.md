---
title: Return-Path
description: Ce qu’est l’adresse Return-Path, en quoi elle diffère de l’adresse De, où vont les avis de rebond et pourquoi SPF et DMARC la contrôlent. Avec un exemple simple.
slug: return-path
date: 2026-10-22
updated: 2026-10-22
keyword: return path
short: Le Return-Path est l’adresse où vont les avis de rebond. Le serveur d’envoi la fixe, et elle est souvent différente de l’adresse De que vous voyez dans votre boîte de réception. SPF contrôle le domaine du Return-Path.
related: spf, dmarc, mailer-daemon, ndr, hard-bounce, email-spoofing
cta: Retirez les adresses mortes avant qu’elles rebondissent
---

## Qu’est-ce que le Return-Path ?

Le Return-Path est l’adresse où vont les avis de rebond. Un avis de rebond est le message automatique qu’un serveur envoie quand un e-mail ne peut pas être livré.

Chaque e-mail a deux adresses d’expéditeur. La première est l’adresse **De** (From). C’est le nom et l’adresse que le lecteur voit dans sa boîte de réception. La seconde est le **Return-Path**. Les lecteurs ne la voient pas. Les serveurs de messagerie l’utilisent.

Pensez à une lettre papier. La lettre dans l’enveloppe porte votre nom en haut. C’est l’adresse De. L’enveloppe porte une adresse de retour dans le coin. La poste ne l’utilise que si elle ne peut pas livrer la lettre. C’est le Return-Path.

Le Return-Path s’appelle aussi l’expéditeur d’enveloppe (envelope sender) ou l’adresse de rebond. Le serveur d’envoi le donne au serveur de réception au début de la livraison. Le serveur de réception l’écrit ensuite dans une ligne en haut de l’e-mail qui commence par `Return-Path:`.

## Un exemple simple

Voici comment fonctionne le Return-Path quand un e-mail rebondit.

1. **Tom envoie une newsletter.** Tom tient une boulangerie. Il envoie une newsletter chaque mois avec un routeur email. Un routeur email est une entreprise qui envoie des e-mails en masse pour vous.
2. **Deux adresses sont fixées.** L’adresse De est tom@bakery.example. Le routeur fixe le Return-Path sur sa propre adresse de rebond, par exemple bounces@mail.provider.example.
3. **Une cliente est partie.** Une cliente de la liste a changé d’emploi. Son ancienne adresse n’existe plus.
4. **Le rebond va au Return-Path.** Le serveur de réception envoie l’avis de rebond à bounces@mail.provider.example, pas à Tom.
5. **Le routeur agit.** Le routeur lit le rebond et arrête d’envoyer à cette adresse. Tom ne voit jamais l’avis.

C’est pour cela que les rebonds de vos newsletters n’arrivent souvent pas dans votre propre boîte. Ils vont au Return-Path, et votre routeur s’en occupe.

## Return-Path et adresse De

| | Adresse De | Return-Path |
|---|---|---|
| **Qui la voit** | Le lecteur, dans sa boîte de réception | Les serveurs de messagerie |
| **Qui la fixe** | Vous, ou votre logiciel de messagerie | Le serveur d’envoi |
| **À quoi elle sert** | Montrer qui a envoyé l’e-mail | Recevoir les avis de rebond |
| **Contrôlée par SPF** | Non | Oui |

Les deux adresses peuvent être identiques. Quand vous envoyez un e-mail normal depuis Gmail ou Outlook, elles le sont en général. Quand vous envoyez avec un routeur email, elles sont en général différentes.

## Comment trouver le Return-Path d’un e-mail

Ouvrez les en-têtes complets de l’e-mail. Dans Gmail, ouvrez l’e-mail, cliquez sur les trois points et choisissez **Afficher l’original**. Dans Outlook, ouvrez les propriétés du message. Cherchez en haut une ligne comme celle-ci :

`Return-Path: <bounces@mail.provider.example>`

## Pourquoi il compte pour SPF et DMARC

[SPF](/glossary/spf) est une règle sur votre domaine qui liste les serveurs autorisés à envoyer vos e-mails. SPF contrôle le domaine du Return-Path. Il ne contrôle pas l’adresse De.

[DMARC](/glossary/dmarc) ajoute un second test. Il vérifie si le domaine qui a passé SPF correspond au domaine de l’adresse De. Si votre routeur utilise son propre domaine de Return-Path, SPF peut passer pour le routeur sans correspondre à votre domaine De.

Beaucoup de routeurs vous permettent de fixer un Return-Path sur votre propre domaine. On parle souvent de domaine de rebond personnalisé (custom bounce domain). Avec lui, SPF passe pour votre propre domaine, et DMARC peut compter ce résultat.

**Exemple :** l’adresse De de Tom est sur bakery.example. Son routeur lui permet de fixer le Return-Path sur bounces.bakery.example. Le domaine qui passe SPF correspond maintenant au domaine de l’adresse De.

## Comment un vérificateur aide

Chaque rebond de votre liste va au Return-Path. Votre routeur les compte. Quand il y en a trop, beaucoup de routeurs suspendent le compte ou vous demandent de nettoyer la liste.

Un [vérificateur d’email](/email-checker) demande au serveur de réception si une adresse existe, avant que vous envoyiez quoi que ce soit. Les adresses mortes sont retirées avant l’envoi. Beaucoup moins de rebonds arrivent alors au Return-Path.
