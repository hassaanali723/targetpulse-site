---
title: ESP (routeur email)
description: Ce qu’est un ESP ou routeur email, avec des exemples comme Mailchimp et Brevo, la différence avec Gmail, et pourquoi il surveille vos rebonds.
slug: fournisseur-de-service-email
date: 2026-10-12
updated: 2026-10-12
keyword: esp email
short: Un ESP, ou routeur email, est un service qui envoie des e-mails pour vous, comme vos newsletters ou vos factures. Mailchimp, Brevo et SendGrid sont des ESP. Gmail et Outlook ne sont pas des ESP : ce sont des messageries où les gens lisent leurs e-mails.
related: smtp, mta, deliverability, sender-reputation, bounce-rate, list-cleaning
cta: Vérifiez votre liste avant de l’importer dans votre routeur email
---

## Qu’est-ce qu’un ESP ?

ESP signifie Email Service Provider, soit fournisseur de service e-mail. C’est une entreprise dont le service envoie des e-mails à votre place. Vous lui donnez votre liste d’adresses et votre message. L’ESP envoie le message à chaque adresse depuis ses propres serveurs. Un serveur est un ordinateur allumé en permanence qui rend un service, ici l’envoi d’e-mails.

En France, les professionnels du marketing appellent souvent un ESP un "routeur email". Ici, router veut dire acheminer un grand nombre d’e-mails. Un routeur email n’a rien à voir avec le routeur Wi-Fi de votre box Internet. C’est un logiciel en ligne. Son prix dépend souvent du nombre d’e-mails ou de contacts.

## Un exemple : la newsletter d’une boulangerie

Une boulangerie a 3 000 clients inscrits à sa newsletter. Chaque mois, elle annonce ses nouveaux gâteaux.

**Sans ESP.** La gérante essaie d’envoyer la newsletter depuis son compte Gmail. Gmail limite le nombre d’e-mails par jour pour un compte personnel. Il n’y a pas de lien de désinscription automatique. Elle ne sait pas qui a ouvert l’e-mail. Les adresses qui rebondissent restent dans sa liste.

**Avec un ESP.** La gérante importe sa liste dans Brevo. Elle prépare la newsletter avec un modèle. Elle clique sur Envoyer. Brevo envoie les 3 000 e-mails, ajoute un lien de désinscription et retire les adresses qui rebondissent. Le lendemain, elle voit combien de clients ont ouvert l’e-mail et cliqué.

## Exemples d’ESP

- **Mailchimp**, connu pour les newsletters des petites entreprises.
- **Brevo**, un service français, anciennement appelé Sendinblue.
- **SendGrid**, utilisé par les développeurs pour les e-mails envoyés par une application.
- **Amazon SES**, le service d’envoi d’Amazon Web Services.
- **Postmark**, centré sur les e-mails transactionnels.

## ESP et fournisseur de messagerie : la différence

Les deux mots se ressemblent, mais les deux services font l’inverse l’un de l’autre.

| | ESP (routeur email) | Fournisseur de messagerie |
|---|---|---|
|---|---|---|
| Rôle | Envoie des e-mails pour une entreprise | Reçoit et range les e-mails d’une personne |
| Exemples | Mailchimp, Brevo, SendGrid | Gmail, Outlook, Yahoo, Orange |
| Qui l’utilise | L’expéditeur | Le destinataire |

Quand la boulangerie envoie sa newsletter, Brevo est l’ESP. Le client qui la lit sur Gmail utilise un fournisseur de messagerie. C’est Gmail qui décide si l’e-mail va dans la boîte de réception ou dans le spam.

## ESP marketing et ESP transactionnel

Il existe deux grands usages.

- **Marketing.** Des e-mails envoyés à beaucoup de gens en même temps : newsletters, promotions, annonces. L’outil sert à créer la campagne et à gérer la liste. Mailchimp et Brevo sont surtout utilisés pour cela.
- **Transactionnel.** Des e-mails envoyés à une seule personne après une action : un reçu, un mot de passe oublié, une confirmation de commande. Ils sont souvent envoyés par l’application elle-même. SendGrid, Amazon SES et Postmark sont souvent utilisés pour cela.

Beaucoup d’ESP proposent les deux. Certaines entreprises séparent quand même les deux types d’envoi, pour qu’un problème sur les newsletters ne bloque pas les reçus.

## Ce qu’un ESP fait pour vous

- **Les serveurs d’envoi.** L’ESP gère les serveurs [SMTP](/glossary/smtp) qui livrent vos e-mails. SMTP est l’ensemble de règles que les serveurs utilisent pour s’envoyer des e-mails.
- **La désinscription.** Il ajoute un lien de désinscription et retire les personnes qui cliquent dessus.
- **Les rebonds.** Il lit les refus des serveurs et arrête d’envoyer aux adresses qui n’existent pas.
- **Les rapports.** Il affiche les ouvertures, les clics, les rebonds et les plaintes.
- **L’authentification.** Il vous donne les enregistrements SPF et DKIM à publier pour votre domaine.

## Pourquoi un ESP surveille vos rebonds

Tous les clients d’un ESP envoient depuis ses serveurs. Si un client envoie à beaucoup d’adresses mortes, Gmail et Outlook font moins confiance à ces serveurs. Les autres clients peuvent en souffrir.

C’est pourquoi beaucoup d’ESP surveillent le [taux de rebond](/glossary/bounce-rate) de chaque compte. Si vos rebonds sont trop nombreux, l’ESP peut mettre votre compte en examen ou suspendre vos envois. Les seuils varient d’un ESP à l’autre. Une liste ancienne ou achetée contient souvent beaucoup d’adresses mortes.

## ESP et vérification d’email

Vérifiez votre liste avant de l’importer dans votre ESP. La [vérification d’email](/) contrôle chaque adresse et repère celles qui n’existent pas. Vous les retirez avant le premier envoi, donc votre compte ne commence pas avec des rebonds. Pour un fichier entier, utilisez la [vérification d’email en masse](/bulk-email-verifier). Pour une seule adresse, vous pouvez [vérifier une adresse mail](/email-checker) directement.
