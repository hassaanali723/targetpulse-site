---
title: Google Postmaster Tools
description: Ce que Google Postmaster Tools montre sur vos e-mails envoyés à Gmail, comment le configurer, les limites de taux de spam de Google et ce qu'il ne montre pas.
slug: google-postmaster-tools
date: 2026-09-29
updated: 2026-10-12
keyword: google postmaster tools
short: Google Postmaster Tools est un tableau de bord gratuit de Google, qui montre comment Gmail juge les e-mails de votre domaine. Il affiche votre taux de spam, votre réputation, vos résultats d'authentification et vos erreurs de livraison vers les utilisateurs de Gmail.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools signale les problèmes après l'envoi. La vérification les évite
---

## Qu'est-ce que Google Postmaster Tools ?

Google Postmaster Tools est un site web que Google met à disposition des expéditeurs d'e-mails. Il montre des données sur les e-mails que votre domaine envoie aux adresses Gmail. Votre domaine est la partie de votre adresse après le @, par exemple example.com.

Pour l'utiliser, vous ajoutez votre domaine. Puis vous prouvez qu'il vous appartient en ajoutant un enregistrement DNS. Le DNS est l'annuaire public d'Internet, qui relie les noms de domaine aux serveurs. Un enregistrement est une ligne dans cet annuaire.

C'est gratuit. C'est la seule source officielle d'information sur la façon dont Gmail évalue votre domaine.

Il ne couvre que Gmail. Les e-mails envoyés à Outlook.com, Yahoo ou aux serveurs d'entreprise n'apparaissent pas. Microsoft a un service séparé pour son réseau.

## Un exemple simple

Une librairie en ligne utilise le domaine librairie.example. Elle envoie une newsletter chaque semaine. Beaucoup de ses clients ont une adresse Gmail.

1. **Elle ajoute son domaine.** Dans Google Postmaster Tools, elle saisit librairie.example.
2. **Elle prouve qu'il lui appartient.** Google lui donne une ligne de texte. Elle l'ajoute au DNS de son domaine.
3. **Elle continue d'envoyer.** Après quelques jours, les premiers graphiques apparaissent.
4. **Elle lit son taux de spam.** Il montre la part de ses e-mails que les utilisateurs de Gmail ont signalés comme spam.
5. **Elle voit un problème.** Après un envoi à une vieille liste, le taux de spam monte. Elle arrête d'écrire aux adresses inactives.

Google Postmaster Tools ne lui dit pas quelles adresses posent problème. Il lui montre seulement les chiffres pour tout le domaine.

## Ce qu'il montre

- **Taux de spam.** Le pourcentage de vos e-mails livrés que les utilisateurs de Gmail ont marqués comme spam. Les consignes aux expéditeurs de Google se réfèrent à ce chiffre.
- **Réputation de domaine et réputation d'IP.** Une note pour chacune : bad, low, medium ou high. L'adresse IP est le numéro qui identifie votre serveur d'envoi. High veut dire que Gmail filtre rarement vos e-mails. Bad veut dire que la plupart de vos e-mails vont dans le spam ou sont refusés.
- **Authentification.** Le pourcentage de vos e-mails qui passent [SPF](/glossary/spf), [DKIM](/glossary/dkim) et [DMARC](/glossary/dmarc). Ces trois contrôles prouvent que l'e-mail vient bien de votre domaine.
- **Chiffrement.** Le pourcentage de vos e-mails envoyés avec TLS. TLS protège l'e-mail pendant son trajet entre les serveurs.
- **Erreurs de livraison.** Le pourcentage de vos e-mails que Gmail a refusés ou retardés, avec le motif.
- **Feedback loop.** Les taux de plaintes par campagne, pour les grands expéditeurs qui utilisent l'en-tête Feedback-ID. Un en-tête est une ligne technique en haut de l'e-mail, que le lecteur ne voit pas.

## Les limites que Google publie

Les consignes aux expéditeurs de Google disent :

1. Gardez le taux de spam affiché dans Postmaster Tools sous 0,10 pour cent.
2. N'atteignez jamais un taux de spam de 0,30 pour cent ou plus.
3. Les expéditeurs de 5 000 messages ou plus par jour doivent avoir SPF, DKIM et DMARC.
4. Les e-mails marketing de ces expéditeurs doivent avoir un désabonnement en un clic.

Les expéditeurs au-dessus de 0,30 pour cent voient leurs e-mails filtrés ou refusés. Ces limites sont petites. Sur 10 000 e-mails livrés, 0,30 pour cent représente 30 plaintes.

## Ce qu'il ne montre pas

Postmaster Tools rend compte des e-mails qui ont été livrés. Il ne peut pas vous montrer les adresses qui n'existent pas.

Voici pourquoi. Un e-mail vers une adresse morte est refusé pendant la connexion SMTP. SMTP est l'ensemble de règles que les serveurs utilisent pour se passer les e-mails. Ce refus est un rebond, c'est-à-dire un avis de non-livraison. Les rebonds ne font pas partie du taux de spam. Une liste avec beaucoup d'adresses invalides peut donc afficher un taux de spam bas pendant que le taux de rebond abîme votre réputation.

Postmaster Tools a aussi besoin de volume. Si votre domaine envoie peu d'e-mails à Gmail, les graphiques restent vides. Google ne publie pas le volume minimum.

## Comment il s'articule avec la vérification

Google Postmaster Tools signale les problèmes après l'envoi. La [vérification d'email](/) retire les causes avant l'envoi. Vous pouvez [vérifier une adresse mail](/email-checker) une par une, ou passer toute votre liste dans la [vérification d'email en masse](/bulk-email-verifier). Cela retire les adresses qui rebondissent, ainsi que les adresses jetables et de fonction qui causent des plaintes. Après cela, Postmaster Tools a moins de choses à signaler. Le guide sur le [taux de rebond des e-mails](/blog/how-to-reduce-email-bounce-rate) explique les deux côtés.
