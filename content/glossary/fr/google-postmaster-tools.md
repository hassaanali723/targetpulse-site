---
title: Google Postmaster Tools
description: Ce que Google Postmaster Tools montre sur vos e-mails envoyés à Gmail, comment le configurer, les limites de taux de spam de Google et ce qu'il ne montre pas.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-09-29
keyword: google postmaster tools
short: Google Postmaster Tools est un tableau de bord gratuit de Google. Il montre comment Gmail évalue votre domaine expéditeur. Il indique votre taux de spam, votre réputation de domaine, votre réputation d'IP, vos résultats d'authentification et vos erreurs de livraison pour les e-mails envoyés aux utilisateurs de Gmail.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools signale les problèmes après l'envoi. La vérification les évite
---

## Ce qu'est Google Postmaster Tools

Google Postmaster Tools est un site web que Google met à disposition des expéditeurs d'e-mails. Vous ajoutez votre domaine et prouvez qu'il vous appartient en ajoutant un enregistrement DNS. Google vous montre ensuite des données sur les e-mails que votre domaine envoie aux adresses Gmail. C'est gratuit. C'est la seule source officielle d'information sur la façon dont Gmail évalue votre domaine.

Il ne couvre que Gmail. Les e-mails envoyés à Outlook.com, Yahoo ou aux serveurs d'entreprise n'apparaissent pas. Microsoft a un service séparé pour son réseau.

## Ce qu'il montre

- **Taux de spam.** Le pourcentage de vos e-mails livrés que les utilisateurs de Gmail ont marqués comme spam. Les consignes aux expéditeurs de Google se réfèrent à ce chiffre.
- **Réputation de domaine et réputation d'IP.** Une note pour chacune : bad, low, medium ou high. High signifie que Gmail filtre rarement vos e-mails. Bad signifie que la plupart de vos e-mails vont dans le spam ou sont refusés.
- **Authentification.** Le pourcentage de vos e-mails qui passent [SPF](/glossary/spf), [DKIM](/glossary/dkim) et [DMARC](/glossary/dmarc).
- **Chiffrement.** Le pourcentage de vos e-mails envoyés avec TLS.
- **Erreurs de livraison.** Le pourcentage de vos e-mails que Gmail a refusés ou retardés, avec le motif.
- **Feedback loop.** Les taux de plaintes par campagne, pour les grands expéditeurs qui utilisent l'en-tête Feedback-ID.

## Les limites que Google publie

Les consignes aux expéditeurs de Google disent :

- Gardez le taux de spam affiché dans Postmaster Tools sous 0,10 pour cent.
- N'atteignez jamais un taux de spam de 0,30 pour cent ou plus.
- Les expéditeurs de 5 000 messages ou plus par jour doivent avoir SPF, DKIM et DMARC.
- Les e-mails marketing de ces expéditeurs doivent avoir un désabonnement en un clic.

Les expéditeurs au-dessus de 0,30 pour cent voient leurs e-mails filtrés ou refusés. Ces limites sont petites. Sur 10 000 e-mails livrés, 0,30 pour cent représente 30 plaintes.

## Ce qu'il ne montre pas

Postmaster Tools rend compte des e-mails qui ont été livrés. Il ne peut pas vous montrer les adresses qui n'existent pas. Un e-mail vers une adresse morte est refusé pendant la connexion SMTP. Ce refus est un rebond. Les rebonds ne font pas partie du taux de spam. Une liste avec beaucoup d'adresses invalides peut afficher un taux de spam bas pendant que le taux de rebond abîme votre réputation.

Postmaster Tools a aussi besoin de volume. Si votre domaine envoie peu d'e-mails à Gmail, les graphiques restent vides. Google ne publie pas le volume minimum.

## Comment il s'articule avec la vérification

Postmaster Tools signale les problèmes après l'envoi. La vérification retire les causes avant l'envoi. Passer une liste dans un [vérificateur d'adresses e-mail](/email-checker) retire les adresses qui rebondissent. Il retire aussi les adresses jetables et de fonction qui causent des plaintes. Après cela, Postmaster Tools a moins de choses à signaler. Le guide sur le [taux de rebond des e-mails](/blog/how-to-reduce-email-bounce-rate) explique les deux côtés.
