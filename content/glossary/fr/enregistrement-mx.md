---
title: Enregistrement MX
description: Ce qu'est un enregistrement MX, comment les serveurs l'utilisent pour trouver la destination, ce que veut dire la priorité et ce qu'indique un MX absent.
slug: enregistrement-mx
date: 2026-09-29
updated: 2026-10-12
keyword: enregistrement mx
short: Un enregistrement MX est une ligne du DNS qui indique quel serveur reçoit les e-mails d'un domaine. Quand vous écrivez à nom@example.com, votre serveur de messagerie lit l'enregistrement MX de example.com pour savoir à quel serveur livrer.
related: dns-txt-record, ptr-record, spf, smtp, invalid-email, catch-all-email
cta: Vérifiez si une adresse peut recevoir des e-mails
---

## Qu'est-ce qu'un enregistrement MX ?

MX signifie Mail Exchanger. Un enregistrement MX est un type d'enregistrement DNS. Voici les mots à connaître :

- **Domaine :** la partie d'une adresse e-mail après le @. Dans nom@example.com, le domaine est example.com.
- **Serveur :** un ordinateur qui tourne en permanence et rend un service, ici recevoir des e-mails.
- **DNS :** l'annuaire public d'Internet. Il relie les noms de domaine aux serveurs.
- **Enregistrement :** une ligne d'information dans le DNS d'un domaine.

L'enregistrement MX d'un domaine donne le nom du serveur qui accepte les e-mails entrants pour ce domaine. Un domaine peut en avoir plusieurs. Chaque enregistrement MX a un numéro de priorité. Les serveurs avec les numéros les plus bas sont essayés en premier.

Voici une configuration typique pour un domaine Google Workspace :

| Priorité | Serveur de messagerie |
|---|---|
| 1 | aspmx.l.google.com |
| 5 | alt1.aspmx.l.google.com |
| 5 | alt2.aspmx.l.google.com |
| 10 | alt3.aspmx.l.google.com |

Si le serveur de priorité 1 ne répond pas, le serveur expéditeur essaie le suivant.

## Un exemple simple

Thomas écrit à claire@cabinet-martin.example. Voici ce qui se passe en quelques secondes.

1. **Thomas clique sur Envoyer.** Son e-mail part vers le serveur de messagerie de son fournisseur.
2. **Le serveur lit le domaine.** Il prend la partie après le @ : cabinet-martin.example.
3. **Il consulte le DNS.** Il demande l'enregistrement MX de cabinet-martin.example.
4. **Le DNS répond.** L'enregistrement MX indique mx1.cabinet-martin.example, avec la priorité 10.
5. **Le serveur se connecte à mx1.** Il remet l'e-mail à ce serveur.
6. **Claire reçoit l'e-mail.** Le serveur mx1 le place dans sa boîte.

Sans enregistrement MX, l'étape 4 ne donnerait aucun serveur. L'e-mail ne pourrait pas partir.

## Comment l'e-mail utilise les enregistrements MX

Quand vous envoyez à `nom@example.com`, votre serveur de messagerie fait trois choses :

1. Il consulte l'enregistrement MX de `example.com`.
2. Il se connecte au serveur avec le numéro de priorité le plus bas.
3. Il remet l'e-mail par SMTP. SMTP est le protocole, c'est-à-dire l'ensemble de règles, que les serveurs utilisent pour se passer les e-mails.

La RFC 5321, la norme e-mail, décrit ce processus. Elle couvre aussi les domaines sans enregistrement MX. Si le domaine a un enregistrement A normal, les serveurs de messagerie traitent cet enregistrement comme un enregistrement MX. Un enregistrement A relie un nom de domaine à une adresse IP, le numéro qui identifie un serveur.

## Ce qu'un enregistrement MX indique sur une adresse

L'enregistrement MX est le premier vrai contrôle de la vérification d'e-mail. Le contrôle de syntaxe vient avant. La syntaxe est la forme de l'adresse : un nom, un @, puis un domaine.

- **Pas d'enregistrement MX et pas d'enregistrement A.** Le domaine ne peut pas recevoir d'e-mails. Toute adresse sur ce domaine est invalide. Une faute de frappe comme `gmial.com` échoue en général à cette étape.
- **Un enregistrement MX est présent.** Le domaine peut recevoir des e-mails. Cela ne dit rien sur l'existence de la boîte précise. Il faut pour cela l'étape suivante : une conversation SMTP avec le serveur.
- **L'enregistrement MX pointe vers une passerelle connue.** Si le serveur de messagerie est Proofpoint, Mimecast ou Barracuda, le domaine utilise une [passerelle de messagerie sécurisée](/glossary/secure-email-gateway). Une passerelle est un service qui filtre les e-mails avant qu'ils arrivent dans l'entreprise. Le contrôle de la boîte se comporte autrement sur ces domaines.

**Exemple :** un formulaire reçoit trois adresses. La première est sur un domaine sans enregistrement MX, donc elle est invalide. La deuxième a un enregistrement MX, donc il faut encore tester la boîte. La troisième a un enregistrement MX qui pointe vers Mimecast, donc le test de la boîte doit tenir compte de la passerelle.

## Pourquoi cela compte pour les expéditeurs

N'importe qui peut lire l'enregistrement MX d'un domaine avec une requête DNS. Une requête DNS est une simple question posée à l'annuaire. Notre outil gratuit de [recherche d'enregistrement MX](/mx-lookup) (en anglais) affiche les enregistrements MX de n'importe quel domaine. Quand une entreprise change de fournisseur de messagerie ou ferme, son enregistrement MX change ou disparaît. Les adresses cessent de fonctionner. Personne ne vous prévient.

**Exemple :** une petite agence ferme en 2023. Son domaine expire et son enregistrement MX disparaît. Vos cinq contacts dans cette agence sont toujours dans votre liste. À l'envoi suivant, les cinq e-mails rebondissent.

C'est une cause fréquente de hard bounces sur les vieilles listes. Un hard bounce est un refus définitif de livrer un e-mail.

## Comment un vérificateur gère cela

Quand vous utilisez le [vérificateur d'email](/email-checker), l'outil consulte d'abord l'enregistrement MX du domaine. S'il n'y a pas d'enregistrement MX, l'adresse est marquée comme invalide et aucun autre contrôle n'est effectué. S'il y a un enregistrement MX, le vérificateur se connecte à ce serveur et demande si la boîte existe.

La requête MX indique aussi de quel type de serveur il s'agit. Cela compte sur les [domaines catch-all](/glossary/catch-all-email) et les passerelles. La [vérification d'email en masse](/bulk-email-verifier) fait ce contrôle pour chaque adresse d'une liste. La [vérification d'email](/) trouve ainsi les adresses qui n'existent pas avant que vous envoyiez.
