---
title: Backscatter
description: Ce qu’est le backscatter, pourquoi vous recevez des avis de rebond pour des e-mails que vous n’avez pas envoyés, si votre compte a été piraté et comment l’arrêter sur votre domaine.
slug: backscatter
date: 2026-10-22
updated: 2026-10-22
keyword: backscatter email
short: Le backscatter, ce sont des avis de rebond que vous recevez pour des e-mails que vous n’avez jamais envoyés. Un spammeur a mis votre adresse dans le champ de l’expéditeur de ses e-mails. Quand ces e-mails ont échoué, les avis de rebond sont revenus vers vous.
related: email-spoofing, ndr, mailer-daemon, spf, dmarc, email-blacklist
cta: Gardez vos propres rebonds bas avec une liste propre
---

## Qu’est-ce que le backscatter ?

Le backscatter, ce sont des avis de rebond que vous recevez pour des e-mails que vous n’avez jamais envoyés.

Tout commence par du spam. Un spammeur envoie des milliers d’e-mails et tape votre adresse dans le champ de l’expéditeur. Beaucoup de ces e-mails vont vers des adresses qui n’existent pas. Les serveurs de réception renvoient un avis de rebond à l’adresse de l’expéditeur. Cette adresse est la vôtre, donc les rebonds arrivent dans votre boîte.

Un avis de rebond est le message automatique qu’un serveur envoie quand un e-mail ne peut pas être livré. Son nom officiel est [rapport de non-remise](/glossary/ndr).

## Un exemple simple

Voici comment le backscatter touche une petite entreprise.

1. **Lena tient une boutique de fleurs.** Son adresse est hello@flowers.example.
2. **Un spammeur copie son adresse.** Le spammeur envoie 10 000 faux e-mails. Chacun dit venir de hello@flowers.example.
3. **Beaucoup d’e-mails échouent.** Environ un tiers va vers des adresses qui n’existent pas.
4. **Certains serveurs acceptent d’abord et contrôlent ensuite.** Ces serveurs prennent l’e-mail, puis découvrent que la boîte n’existe pas.
5. **Les rebonds vont à Lena.** Ces serveurs envoient les avis de rebond à hello@flowers.example.
6. **La boîte de Lena se remplit.** Un matin, elle trouve des centaines de messages « Non remis » pour des e-mails qu’elle n’a jamais écrits.

Ces chiffres sont seulement un exemple. Le schéma est courant.

## Mon compte a-t-il été piraté ?

En général, non. Envoyer un e-mail avec une fausse adresse d’expéditeur ne demande aucun accès à votre compte. C’est comme écrire l’adresse de retour de quelqu’un d’autre sur une enveloppe. Personne n’a eu besoin de sa clé pour le faire.

Regardez votre dossier Éléments envoyés. Si les e-mails n’y sont pas, votre compte ne les a pas envoyés. S’ils y sont, changez votre mot de passe et activez la validation en deux étapes.

## Pourquoi cela arrive

Le backscatter existe parce que certains serveurs acceptent d’abord un e-mail et contrôlent l’adresse ensuite. Quand le contrôle échoue, ils envoient un rebond à l’adresse de l’expéditeur. Ils ne peuvent pas savoir que cette adresse était fausse.

Les serveurs bien gérés contrôlent l’adresse pendant que l’autre serveur est encore connecté. Si l’adresse n’existe pas, ils refusent l’e-mail tout de suite. Aucun avis de rebond n’est créé, donc aucun backscatter n’arrive chez personne.

## Comment l’arrêter sur votre domaine

Vous ne pouvez pas empêcher les spammeurs de taper votre adresse. Vous pouvez faire en sorte que les serveurs de réception refusent leurs faux e-mails. Pour cela, publiez trois enregistrements sur votre domaine.

| Enregistrement | Ce qu’il fait |
|---|---|
| [SPF](/glossary/spf) | Liste les serveurs autorisés à envoyer des e-mails pour votre domaine |
| [DKIM](/glossary/dkim) | Ajoute une signature qui prouve qu’un e-mail vient vraiment de vous |
| [DMARC](/glossary/dmarc) | Dit aux serveurs de réception quoi faire des e-mails qui échouent à ces contrôles |

Commencez DMARC avec `p=none` et lisez les rapports. Quand seuls vos propres services passent, passez à `p=quarantine`, puis à `p=reject`. Avec `p=reject`, les serveurs refusent les faux e-mails au lieu de vous renvoyer des rebonds.

En attendant, vous pouvez filtrer les avis de rebond dans un dossier. N’y répondez pas.

## Pourquoi les gestionnaires de serveurs s’en soucient

Si vous gérez un serveur de messagerie, vérifiez comment il traite les adresses inconnues. Un serveur qui accepte le courrier puis le renvoie plus tard en rebond envoie du backscatter à des personnes innocentes. Certaines blacklists listent les serveurs qui font cela, par exemple la liste de backscatterer.org. Être sur une blacklist peut empêcher la livraison de vos propres e-mails.

## Comment un vérificateur aide

La [vérification d’email](/) n’arrête pas le backscatter, car vous n’avez pas envoyé ces e-mails. Elle aide pour les rebonds que vous causez vous-même. Retirez les adresses mortes de votre propre liste avant d’envoyer. Ainsi, vous pouvez expliquer chaque rebond qui arrive dans votre boîte.
