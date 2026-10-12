---
title: Blacklist email
description: Ce qu’est une blacklist email, comment une adresse IP ou un domaine s’y retrouve, comment vérifier si vous êtes listé et comment en sortir.
slug: blacklist-email
date: 2026-10-12
updated: 2026-10-12
keyword: blacklist email
short: Une blacklist email, ou liste noire, est une liste publique d’adresses IP et de domaines connus pour envoyer du spam. Les serveurs de réception la consultent à chaque e-mail. Si l’expéditeur y figure, ils bloquent ses e-mails ou les envoient dans le spam.
related: dnsbl, blocklist, spam-trap, ip-reputation, domain-reputation, hard-bounce
cta: Évitez les listes noires en retirant les adresses mortes avant d’envoyer
---

## Qu’est-ce qu’une blacklist email ?

Une blacklist email est une liste publique d’expéditeurs connus pour envoyer du spam. Elle contient des adresses IP ou des noms de domaine. Une adresse IP est le numéro qui identifie un serveur sur Internet, par exemple `203.0.113.25`. Un domaine est la partie d’une adresse e-mail après le @.

Des organisations anti-spam gèrent ces listes. Spamhaus est une des plus connues. Quand un e-mail arrive, le serveur de réception regarde si l’expéditeur figure sur une ou plusieurs de ces listes. Si oui, il peut refuser l’e-mail ou le mettre dans le spam. Chaque serveur choisit les listes qu’il consulte.

## Un exemple : les e-mails d’une entreprise rebondissent

Une agence immobilière envoie ses e-mails depuis son propre serveur. Un mardi, plusieurs clients disent ne pas avoir reçu ses messages. L’agence regarde ses messages de rebond. Elle trouve une réponse de ce type :

```
554 5.7.1 Service unavailable; Client host [203.0.113.25] blocked using zen.spamhaus.org
```

1. Le code commence par 5. Le refus est permanent.
2. `203.0.113.25` est l’adresse IP du serveur de l’agence.
3. `zen.spamhaus.org` est le nom d’une liste de Spamhaus.
4. Conclusion : l’adresse IP de l’agence a été ajoutée à une liste de Spamhaus.

L’agence cherche la cause. Un des ordinateurs du bureau a été piraté. Depuis deux jours, il envoie du spam par le serveur de l’agence.

## Listes noires d’IP et listes noires de domaines

| Type | Ce qui est listé | Ce qui est bloqué |
|---|---|---|
| Liste d’IP | L’adresse du serveur qui envoie | Tous les e-mails envoyés depuis ce serveur |
| Liste de domaines | Un nom de domaine | Les e-mails qui contiennent ce domaine, dans l’expéditeur ou dans les liens |

Chez Spamhaus, par exemple, la SBL et la XBL listent des adresses IP. La DBL liste des domaines. Beaucoup de listes noires sont consultées par le DNS, l’annuaire public d’Internet. Elles s’appellent alors des [DNSBL](/glossary/dnsbl).

## Blacklist ou blocklist

Les deux mots désignent la même chose. "Blacklist" est le mot le plus ancien. Spamhaus et d’autres organisations utilisent aujourd’hui le mot "blocklist". En français, on dit aussi "liste noire" ou "liste de blocage". Voir [blocklist](/glossary/blocklist).

## Comment un expéditeur se retrouve sur une liste noire

- **Des spam traps.** Ce sont des adresses pièges qui n’appartiennent à personne. Seules les listes achetées ou jamais nettoyées les contiennent. Voir [spam trap](/glossary/spam-trap).
- **Des plaintes.** Beaucoup de destinataires cliquent sur "Signaler comme spam".
- **Un compte ou un ordinateur piraté.** Un fraudeur se sert de votre serveur ou de votre compte pour envoyer du spam.
- **Un volume soudain depuis une nouvelle IP.** Une adresse sans historique qui envoie d’un coup des milliers d’e-mails ressemble à un spammeur.

## Comment vérifier si vous êtes sur une blacklist

1. Trouvez l’adresse IP de votre serveur d’envoi. Votre ESP, le service qui envoie vos e-mails, l’indique dans ses réglages.
2. Entrez cette adresse dans un vérificateur de listes noires, comme celui de MXToolbox. Il teste l’IP sur de nombreuses listes en une fois.
3. Faites aussi le test avec votre nom de domaine.
4. Lisez vos messages de rebond. Ils nomment souvent la liste qui vous bloque, comme dans l’exemple plus haut.

Si vous utilisez un ESP avec une IP partagée, c’est souvent l’ESP qui gère ce type de problème.

## Comment sortir d’une liste noire

**Corrigez d’abord la cause.** Si vous demandez un retrait sans rien corriger, vous serez listé à nouveau. Selon la cause :

- Nettoyez l’ordinateur ou le compte piraté et changez les mots de passe.
- Retirez de votre liste les adresses achetées et les adresses qui rebondissent.
- Arrêtez d’écrire aux personnes qui n’ont jamais demandé vos e-mails.

**Ensuite, demandez le retrait.** Chaque liste a sa propre page de retrait. Celle de Spamhaus se trouve sur son site, avec l’outil de vérification d’adresse. Certaines listes retirent une adresse automatiquement après un certain temps sans spam. Suivez les règles de chaque liste.

## Blacklist email et vérification d’email

Une liste ancienne contient des adresses abandonnées. Certaines deviennent des spam traps, et les spam traps mènent aux listes noires. La [vérification d’email](/) retire les adresses qui n’existent plus avant qu’elles soient recyclées en pièges. Elle ne détecte pas une spam trap active et ne vous retire pas d’une liste noire. Vous pouvez [vérifier une adresse mail](/email-checker) ou une liste entière avec la [vérification d’email en masse](/bulk-email-verifier).
