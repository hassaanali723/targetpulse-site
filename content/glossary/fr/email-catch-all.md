---
title: Email catch-all
description: Ce qu’est un domaine email catch-all, pourquoi les entreprises en installent un, pourquoi une vérification normale ne peut pas confirmer ses adresses et que faire avec elles.
slug: email-catch-all
date: 2026-10-22
updated: 2026-10-22
keyword: email catch all
short: Un domaine catch-all accepte le courrier envoyé à n’importe quelle adresse du domaine, même à des noms qui n’existent pas. Comme le serveur dit oui à tout, une vérification normale ne peut pas savoir si une boîte précise est réelle.
related: mx-record, smtp, hard-bounce, greylisting, secure-email-gateway, email-blacklist
cta: Obtenez une vraie réponse sur les adresses catch-all
---

## Qu’est-ce qu’un email catch-all ?

Un domaine catch-all accepte le courrier envoyé à n’importe quelle adresse du domaine. L’adresse n’a pas besoin d’exister.

La plupart des domaines refusent les e-mails envoyés à un nom qu’ils n’ont pas. Un domaine catch-all ne les refuse pas. Il accepte l’e-mail et le place dans une boîte partagée. Parfois, il le supprime sans prévenir personne.

Ce même réglage s’appelle aussi **accept-all** ou **domaine catch-all**. Beaucoup d’outils de vérification marquent ces adresses « catch-all », « accept-all » ou « risqué ».

## Un exemple simple

1. **Acme installe un catch-all.** Acme est une petite entreprise avec le domaine acme.example. Sa responsable administrative active le catch-all pour ne perdre aucun e-mail de client.
2. **Sara écrit à une vraie personne.** Elle envoie un e-mail à jon@acme.example. Jon travaille là. Il reçoit l’e-mail.
3. **Sara fait une faute de frappe.** La fois suivante, elle tape jonn@acme.example. Cette personne n’existe pas.
4. **Le serveur dit quand même oui.** L’e-mail ne rebondit pas. Il arrive dans la boîte partagée, et personne ne le lira peut-être.

Sara ne voit aucune erreur, donc elle pense que les deux e-mails sont arrivés. Un seul a atteint Jon.

## Pourquoi les entreprises utilisent le catch-all

Les entreprises activent le catch-all pour ne rater aucun e-mail. Les clients font des fautes de frappe. Les noms d’anciens salariés continuent de recevoir du courrier. Un catch-all garde tout au même endroit.

## Pourquoi le catch-all pose problème à la vérification d’email

Une vérification normale pose une seule question au serveur : « Acceptez-vous le courrier pour cette adresse ? » Sur un domaine catch-all, la réponse est toujours oui. Une vraie personne et un nom inventé reçoivent la même réponse.

Une vérification de base ne peut donc pas confirmer la boîte. Elle peut seulement signaler que le domaine accepte tout.

Cela compte surtout pour les listes B2B. Dans un test publié portant sur 10 000 vraies adresses email professionnelles, 28 % étaient sur des domaines catch-all. Le test a été mené par LeadMagic, une entreprise qui vend de la vérification d’email. Considérez-le donc comme le test d’un éditeur.

## Que faire des adresses catch-all

Vous avez trois choix :

| Choix | Ce qui se passe |
|---|---|
| **Les retirer** | Aucun risque, mais vous perdez aussi de vrais contacts |
| **Leur écrire** | Certains e-mails atteignent de vraies personnes, d’autres sont perdus ou rebondissent plus tard |
| **Les vérifier plus en profondeur** | Un vérificateur qui va au-delà du contrôle de base sépare les vraies adresses des fausses |

## Comment un vérificateur aide

Giggal.ai fait une [vérification catch-all](/catch-all-verification) dans chaque contrôle. Elle utilise des signaux supplémentaires pour donner un vrai résultat, valide ou invalide, au lieu d’une étiquette « risqué ». Pour un guide plus long avec plus d’exemples, lisez [ce qu’est une adresse email catch-all](/blog/what-is-a-catch-all-email-address).
