---
title: Enregistrement MX
description: Ce qu'est un enregistrement MX, comment les serveurs de messagerie l'utilisent pour trouver le serveur de destination, ce que signifie le numéro de priorité et ce qu'un enregistrement MX absent indique à un vérificateur.
slug: enregistrement-mx
date: 2026-09-29
updated: 2026-09-29
keyword: enregistrement mx
short: Un enregistrement MX est un enregistrement DNS qui indique quel serveur reçoit les e-mails d'un domaine. Quand vous envoyez à nom@exemple.com, votre serveur de messagerie consulte l'enregistrement MX de exemple.com pour savoir à quel serveur livrer.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Vérifiez si une adresse peut recevoir des e-mails
---

## Ce qu'est un enregistrement MX

MX signifie Mail Exchanger. Un enregistrement MX est un type d'enregistrement DNS. Le DNS est l'annuaire public qui relie les noms de domaine aux serveurs. Les enregistrements MX d'un domaine listent les serveurs qui acceptent les e-mails entrants pour ce domaine.

Un domaine peut avoir plusieurs enregistrements MX. Chaque enregistrement a un numéro de priorité. Les serveurs avec les numéros les plus bas sont essayés en premier. Voici une configuration typique pour un domaine Google Workspace :

| Priorité | Serveur de messagerie |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Si le serveur de priorité 1 ne répond pas, le serveur expéditeur essaie le suivant.

## Comment l'e-mail utilise les enregistrements MX

Quand vous envoyez à `nom@exemple.com`, votre serveur de messagerie fait trois choses :

- Il consulte les enregistrements MX de `exemple.com`.
- Il se connecte au serveur avec le numéro de priorité le plus bas.
- Il remet l'e-mail par SMTP.

La RFC 5321, la norme e-mail, décrit ce processus. Elle couvre aussi les domaines sans enregistrement MX. Si le domaine a un enregistrement A normal, les serveurs de messagerie traitent cet enregistrement comme un enregistrement MX.

## Ce qu'un enregistrement MX indique sur une adresse

L'enregistrement MX est le premier vrai contrôle de la vérification d'e-mail. Le contrôle de syntaxe vient avant.

- **Pas d'enregistrement MX et pas d'enregistrement A.** Le domaine ne peut pas recevoir d'e-mails. Toute adresse sur ce domaine est invalide. Une faute de frappe comme `gmial.com` échoue généralement à cette étape.
- **Enregistrement MX présent.** Le domaine peut recevoir des e-mails. Cela ne dit rien sur l'existence de la boîte précise. Il faut pour cela l'étape suivante : une conversation SMTP avec le serveur.
- **Enregistrement MX pointant vers une passerelle connue.** Si le serveur de messagerie est Proofpoint, Mimecast ou Barracuda, le domaine utilise une [passerelle de messagerie sécurisée](/glossary/secure-email-gateway). Le contrôle de la boîte se comporte différemment sur ces domaines.

## Pourquoi cela compte pour les expéditeurs

N'importe qui peut lire l'enregistrement MX d'un domaine avec une requête DNS. Quand une entreprise change de fournisseur de messagerie ou ferme, ses enregistrements MX changent ou disparaissent. Les adresses cessent de fonctionner. Personne ne vous prévient. C'est une cause fréquente de hard bounces sur les vieilles listes.

## Comment un vérificateur gère cela

Un [vérificateur d'adresses e-mail](/email-checker) consulte d'abord l'enregistrement MX. S'il n'y a pas d'enregistrement MX, l'adresse est marquée comme invalide et aucun autre contrôle n'est effectué. S'il y a un enregistrement MX, le vérificateur se connecte à ce serveur et demande si la boîte existe. La requête MX indique aussi au vérificateur de quel type de serveur il s'agit. Cela compte sur les [domaines catch-all](/glossary/catch-all-email) et les passerelles.
