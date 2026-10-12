---
title: Email spoofing
description: Ce qu’est l’email spoofing, ou usurpation d’adresse mail, pourquoi il est possible, comment le repérer et comment protéger votre domaine.
slug: usurpation-email
date: 2026-10-12
updated: 2026-10-12
keyword: email spoofing
short: L’email spoofing, ou usurpation d’adresse mail, consiste à envoyer un e-mail avec une fausse adresse d’expéditeur. L’e-mail semble venir de quelqu’un d’autre, par exemple votre banque ou votre directeur. Le but est souvent de vous faire payer ou de voler un mot de passe.
related: dmarc, spf, dkim, dmarc-alignment, bimi, return-path
cta: Un vérificateur dit si une adresse existe. Il ne dit pas qui a envoyé un e-mail
---

## Qu’est-ce que l’email spoofing ?

L’email spoofing est l’envoi d’un e-mail avec une fausse adresse d’expéditeur. En français, on parle aussi d’usurpation d’adresse mail. Le fraudeur écrit l’adresse de quelqu’un d’autre dans le champ De. Le destinataire croit que l’e-mail vient de cette personne ou de cette entreprise.

Le fraudeur n’a pas besoin d’accéder au compte de la vraie personne. Il tape simplement une autre adresse dans le champ De. C’est la différence avec un compte piraté, où le fraudeur utilise le vrai compte.

## Un exemple : le faux e-mail du directeur

Une entreprise utilise le domaine exemple.com. Sa directrice s’appelle Sophie Durand. Son adresse est sophie.durand@exemple.com.

1. Un lundi matin, Marc, du service comptable, reçoit un e-mail.
2. L’expéditeur affiché est "Sophie Durand <sophie.durand@exemple.com>".
3. Le message dit : "Je suis en réunion. Payez cette facture fournisseur aujourd’hui, c’est urgent. Ne m’appelez pas."
4. Une facture est jointe, avec un numéro de compte bancaire.
5. L’e-mail ne vient pas de Sophie. Un fraudeur l’a envoyé depuis son propre serveur.

Si Marc paie, l’argent part sur le compte du fraudeur. Ce type de fraude est souvent appelé "fraude au président".

## Pourquoi l’email spoofing est possible

Les premières règles de l’e-mail datent de 1982. Elles ne prévoyaient aucun contrôle de l’expéditeur. Aujourd’hui encore, [SMTP](/glossary/smtp), le protocole qui transporte les e-mails, ne vérifie pas le champ De. Un protocole est un ensemble de règles que les ordinateurs suivent pour se parler. N’importe qui peut écrire n’importe quelle adresse dans ce champ.

Pour corriger ce problème, trois contrôles ont été ajoutés plus tard. Ils sont publiés dans le DNS du domaine. Le DNS est l’annuaire public d’Internet qui relie les noms de domaine aux serveurs. Le domaine est la partie de l’adresse après le @.

## Comment repérer un e-mail usurpé

Aucun signe n’est sûr à lui seul. Plusieurs signes ensemble doivent vous alerter.

- **L’adresse de réponse est différente.** Cliquez sur Répondre. Si l’adresse proposée n’est pas celle de l’expéditeur, méfiez-vous. Ce champ s’appelle Reply-To.
- **Les contrôles échouent.** Dans Gmail, ouvrez le menu à trois points et choisissez "Afficher l’original". Regardez les lignes SPF, DKIM et DMARC. Un FAIL sur DMARC est un signal fort.
- **La demande est urgente.** Payer aujourd’hui, changer un numéro de compte, envoyer un mot de passe, ne rien dire à personne.
- **Le ton ne correspond pas.** La personne n’écrit pas comme d’habitude, ou elle demande quelque chose qu’elle ne demande jamais.

## Comment protéger votre domaine contre l’usurpation

Vous ne pouvez pas empêcher quelqu’un de taper votre adresse. Vous pouvez demander aux serveurs de réception de refuser ces e-mails. Il faut trois réglages.

1. **[SPF](/glossary/spf)** liste les serveurs autorisés à envoyer pour votre domaine.
2. **[DKIM](/glossary/dkim)** ajoute une signature numérique à vos vrais e-mails.
3. **[DMARC](/glossary/dmarc)** vérifie que SPF ou DKIM passe pour le domaine du champ De. Il dit aussi quoi faire si ce n’est pas le cas.

La protection ne fonctionne vraiment qu’avec DMARC en `p=reject`. Avec `p=none`, les serveurs livrent le faux e-mail normalement. Le contrôle du domaine du champ De s’appelle l’[alignement DMARC](/glossary/dmarc-alignment).

## Spoofing, phishing et domaines sosies

Ces trois mots sont souvent mélangés. Ils désignent des choses différentes.

| Terme | Ce que c’est | Exemple |
|---|---|---|
| Spoofing | Le vrai domaine est écrit dans le champ De, mais l’e-mail ne vient pas de lui | Un faux e-mail "de" sophie.durand@exemple.com |
| Domaine sosie | Le fraudeur achète un domaine presque identique | sophie.durand@exempel.com |
| Phishing | Le but de l’attaque : voler de l’argent ou un mot de passe | Un lien vers une fausse page de connexion |

Le phishing, ou hameçonnage, peut utiliser le spoofing ou un domaine sosie. DMARC bloque le spoofing de votre vrai domaine. Il ne bloque pas un domaine sosie, car le fraudeur contrôle ce domaine et peut configurer SPF, DKIM et DMARC lui-même.

## Que faire si vous recevez un e-mail usurpé

1. Ne cliquez sur aucun lien et n’ouvrez pas la pièce jointe.
2. Ne répondez pas à l’e-mail.
3. Contactez la personne par un autre moyen connu, par exemple son numéro de téléphone habituel.
4. Signalez l’e-mail comme hameçonnage dans votre messagerie.
5. Prévenez votre service informatique si c’est un e-mail professionnel.
6. Si vous avez déjà payé, contactez votre banque tout de suite. En France, le site cybermalveillance.gouv.fr aide les victimes.

## Email spoofing et vérification d’email

La vérification ne détecte pas l’email spoofing. Un vérificateur dit si une adresse existe et peut recevoir des e-mails. Il ne dit pas qui a vraiment envoyé un e-mail. Une adresse usurpée comme sophie.durand@exemple.com existe, donc elle est valide. Utilisez la [vérification d’email](/) pour retirer les adresses mortes de vos listes, pas pour juger un e-mail reçu. Vous pouvez [vérifier une adresse mail](/email-checker) ou une liste entière avec la [vérification d’email en masse](/bulk-email-verifier).
