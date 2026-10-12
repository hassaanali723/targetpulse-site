---
title: SMTP
description: Ce qu’est SMTP, comment un e-mail passe d’un serveur à l’autre, ce qu’est un serveur SMTP, les ports 25, 587 et 465 et les codes d’erreur.
slug: smtp
date: 2026-10-12
updated: 2026-10-12
keyword: smtp
short: SMTP est l’ensemble de règles que les serveurs utilisent pour s’envoyer des e-mails. Quand vous cliquez sur Envoyer, votre e-mail voyage d’un serveur SMTP à un autre jusqu’au serveur du destinataire.
related: mta, mx-record, smtp-error-codes, esp, hard-bounce, greylisting
cta: Demandez au serveur SMTP si l’adresse existe avant d’envoyer
---

## Qu’est-ce que SMTP ?

SMTP signifie Simple Mail Transfer Protocol. Un protocole est un ensemble de règles que deux ordinateurs suivent pour se parler. SMTP fixe les règles pour envoyer un e-mail d’un serveur à un autre. Un serveur est un ordinateur qui reste allumé en permanence et rend un service, ici l’envoi et la réception d’e-mails.

La norme actuelle de SMTP est la RFC 5321. Une RFC est un document technique publié par l’IETF, l’organisme qui écrit les normes d’Internet. Tous les services d’e-mail suivent ces mêmes règles. C’est pour cela qu’un e-mail envoyé depuis Gmail arrive chez Outlook.

## Un exemple : Ana écrit à Ben

Ana a une adresse Gmail. Ben travaille dans une entreprise qui utilise Outlook. Son adresse est ben@entreprise.fr. Ana écrit un e-mail et clique sur Envoyer. Voici ce qui se passe.

1. L’application Gmail d’Ana transmet l’e-mail au serveur SMTP de Gmail.
2. Le serveur de Gmail lit la partie après le @, ici entreprise.fr. C’est le domaine de Ben.
3. Il consulte le DNS de ce domaine. Le DNS est l’annuaire public d’Internet qui relie les noms de domaine aux serveurs.
4. Le DNS répond avec l’[enregistrement MX](/glossary/mx-record) de entreprise.fr. Cet enregistrement indique quel serveur reçoit les e-mails du domaine.
5. Le serveur de Gmail se connecte au serveur de réception d’Outlook. Il dit qui envoie, puis à qui l’e-mail est destiné.
6. Le serveur d’Outlook répond `250 OK`. L’adresse existe et il accepte l’e-mail.
7. Gmail transmet le texte de l’e-mail. Outlook le range dans la boîte de réception de Ben.

Toute cette conversation entre les deux serveurs suit les règles SMTP. Elle prend en général quelques secondes.

## Ce qu’est un serveur SMTP

Un serveur SMTP est le serveur qui envoie les e-mails. Il reçoit votre e-mail et le transmet au serveur du destinataire. Le serveur SMTP de Gmail s’appelle `smtp.gmail.com`. Outlook, Yahoo et les autres services ont aussi le leur.

Vous voyez souvent ce nom dans les réglages d’une application. Par exemple, un logiciel de facturation peut envoyer ses factures depuis votre adresse. Vous entrez alors le nom du serveur SMTP, un port, votre identifiant et votre mot de passe. Les services d’envoi comme Brevo, SendGrid ou Amazon SES fournissent aussi un serveur SMTP pour cela.

## Les ports SMTP : 25, 587 et 465

Un port est un numéro qui indique à un serveur quel service vous voulez joindre. SMTP utilise trois ports courants.

| Port | Qui l’utilise | Chiffrement |
|---|---|---|
| 25 | Un serveur qui livre à un autre serveur | Possible, mais pas toujours |
| 587 | Une application ou un logiciel de messagerie qui dépose un e-mail | STARTTLS, le chiffrement démarre après la connexion |
| 465 | Une application ou un logiciel de messagerie qui dépose un e-mail | Chiffrement dès le début de la connexion |

Le chiffrement rend le contenu illisible pour quelqu’un qui intercepte la connexion. Si vous configurez une application, utilisez le port 587 ou 465. Le port 25 sert aux échanges entre serveurs. Beaucoup de fournisseurs d’accès à Internet le bloquent pour les connexions de particuliers.

## SMTP, IMAP et POP3 : envoyer ou lire

SMTP sert seulement à envoyer et à transmettre des e-mails. Pour lire vos e-mails, votre application utilise un autre protocole.

- **SMTP** envoie l’e-mail de votre application vers le serveur, puis de serveur à serveur.
- **IMAP** affiche les e-mails stockés sur le serveur. Ils restent synchronisés sur votre téléphone et votre ordinateur.
- **POP3** télécharge les e-mails sur un seul appareil. Selon le réglage, ils sont ensuite effacés du serveur.

Une application de messagerie a donc besoin de deux réglages. Un serveur SMTP pour envoyer, et un serveur IMAP ou POP3 pour recevoir.

## Quand le serveur SMTP refuse un e-mail

À chaque étape, le serveur de réception répond par un code à trois chiffres. Un code qui commence par 2 veut dire que tout va bien. Les autres codes signalent un problème.

- **4xx : erreur temporaire.** Le serveur refuse pour l’instant, par exemple parce qu’il est surchargé. Le serveur expéditeur réessaie plus tard. Cela peut donner un [soft bounce](/glossary/soft-bounce).
- **5xx : erreur permanente.** Le serveur refuse pour de bon. Exemple : `550 5.1.1`, qui veut dire que la boîte n’existe pas. Cela donne un [hard bounce](/glossary/hard-bounce).

Certains serveurs répondent volontairement par un code 4xx au premier essai d’un expéditeur inconnu. Cette technique s’appelle le [greylisting](/glossary/greylisting). La liste des codes et leur sens se trouve dans la page sur les [codes d’erreur SMTP](/glossary/smtp-error-codes).

## SMTP et vérification d’email

Un vérificateur utilise SMTP, mais il n’envoie aucun e-mail. Il se connecte au serveur de réception, comme Gmail l’a fait pour Ben. Il donne l’adresse à tester et lit la réponse. Un `250` veut dire que la boîte existe, un `550 5.1.1` qu’elle n’existe pas. Il ferme ensuite la connexion avant l’envoi du texte.

Le [vérificateur d’email](/email-checker) contrôle les adresses de cette façon, une par une. Pour un fichier entier, utilisez la [vérification d’email en masse](/bulk-email-verifier). La [vérification d’email](/) retire ainsi les adresses qui feraient un hard bounce, avant votre envoi.
