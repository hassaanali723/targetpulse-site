---
title: "Hard bounce et soft bounce : ce que chacun signifie et quoi faire"
seoTitle: "Hard bounce et soft bounce : définition et solutions"
description: Hard bounce et soft bounce expliqués simplement. Comment lire le code de rebond, pourquoi les outils le classent différemment et quel taux est sûr.
slug: hard-bounce-et-soft-bounce
date: 2026-09-27
updated: 2026-09-27
keyword: hard bounce soft bounce
image: /blog/covers/fr/hard-bounce-et-soft-bounce.webp
imageAlt: Hard bounce et soft bounce, un 5 dans le code signifie permanent et un 4 signifie réessayer
cta: Trouvez les hard bounces avant d'envoyer
---

Un hard bounce est un échec permanent. L'adresse e-mail n'existe pas, le domaine n'existe pas, ou le serveur de réception vous a bloqué. Si vous renvoyez, ça rebondit encore.

Un soft bounce est un échec temporaire. L'adresse est réelle, mais quelque chose a bloqué la livraison pour l'instant. La boîte est pleine, le serveur est occupé, ou le serveur vous demande de réessayer plus tard. Si vous renvoyez, l'e-mail passe souvent.

Voilà pour les définitions. Il y a trois autres choses à savoir, et elles comptent plus que les définitions :

- Chaque outil d'envoi applique ses propres règles. Le même rebond peut compter comme hard dans un outil et comme soft dans un autre.
- Une adresse correcte et active peut quand même faire un hard bounce. Cela arrive quand la configuration de votre e-mail est mauvaise, pas l'adresse.
- Le taux de rebond qui fait suspendre votre compte n'est pas toujours celui que vous voyez dans le rapport de campagne.

Ce guide couvre les trois points.

## Hard bounce et soft bounce : la différence

| | Hard bounce | Soft bounce |
|---|---|---|
| Ce que ça signifie | Permanent. L'e-mail ne sera pas livré | Temporaire. Il peut être livré lors d'un essai suivant |
| Code dans le message de rebond | Commence par 5 (550, 5.1.1, 5.7.1) | Commence par 4 (421, 450, 4.2.2) |
| Causes fréquentes | L'adresse n'existe pas, le domaine n'existe pas, expéditeur bloqué | Boîte pleine, serveur occupé, trop d'e-mails d'un coup |
| Ce que fait votre outil d'envoi | Arrête d'envoyer à cette adresse, en général tout de suite | Réessaie pendant un moment, souvent jusqu'à 72 heures |
| Ce que vous devez faire | Retirer l'adresse. Ne plus envoyer | Attendre. Ne la retirer que si elle continue de rebondir |
| Dommage pour votre réputation | Élevé. Beaucoup de hard bounces disent aux fournisseurs que votre liste est mauvaise | Faible pour un rebond. S'accumule si les mêmes adresses continuent de rebondir |

## Qu'est-ce qu'un hard bounce ?

Un hard bounce signifie que le serveur de réception a refusé votre e-mail pour de bon. Réessayer ne sert à rien.

Le standard de l'e-mail, la RFC 5321, appelle cela un échec permanent. Ses mots exacts sont que l'expéditeur "should not retry", c'est-à-dire ne doit pas répéter la même requête.

Il existe deux sortes de hard bounce. Dans votre rapport, elles se ressemblent, mais elles demandent des corrections différentes.

**Première sorte : l'adresse est mauvaise.** La boîte n'existe pas. Ou le domaine n'existe pas. Ou l'adresse est mal écrite. Une liste vérifiée ne devrait jamais produire ces rebonds. Voici à quoi ils ressemblent :

- Gmail dit : `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft dit : `5.1.1 Bad destination mailbox address`
- Microsoft dit aussi : `5.4.1 Recipient address rejected: Access denied`. La documentation Microsoft explique ce code ainsi : "the recipient's address doesn't exist", l'adresse du destinataire n'existe pas.

Une adresse fermée quand quelqu'un a quitté son entreprise entre aussi dans ce groupe.

**Deuxième sorte : vous êtes bloqué.** L'adresse est réelle. Mais le serveur de réception n'accepte pas de courrier venant de vous. Ces rebonds ont des codes qui commencent par 5.7 :

- `550 5.7.1` signifie un blocage par une politique.
- `550 5.7.26` signifie que Gmail a refusé votre e-mail parce que votre domaine n'est pas authentifié.
- `550 5.7.30` signifie que votre e-mail a échoué au contrôle DKIM.

Votre outil d'envoi les compte comme des hard bounces, parce que le code commence par 5. Mais l'adresse est bonne. Le problème est de votre côté. Nous y revenons plus bas, parce que depuis 2025 c'est la cause de hard bounces qui progresse le plus vite sur les listes propres.

## Qu'est-ce qu'un soft bounce ?

Un soft bounce signifie que le serveur de réception a dit "pas maintenant". La RFC 5321 appelle cela un échec temporaire. Ses mots sont : "the error condition is temporary and the action may be requested again", la condition d'erreur est temporaire et l'action peut être demandée à nouveau. Votre outil d'envoi le prend au pied de la lettre et réessaie plus tard.

Voici les causes fréquentes, avec les codes que vous verrez :

- **Boîte pleine.** Gmail dit `452 4.2.2 The recipient's inbox is out of storage space`. La personne peut supprimer des e-mails et libérer de la place.
- **Trop d'e-mails trop vite.** Gmail dit `450 4.2.1 The user you are trying to contact is receiving email too quickly`. Ou `421 4.7.28` quand il voit trop de courrier venant de votre adresse IP. Microsoft dit de `4.7.500` à `4.7.699 Access denied, please try again later` pendant qu'il examine votre activité.
- **Greylisting.** Certains serveurs, et beaucoup de secure email gateways, refusent le premier e-mail d'un expéditeur qu'ils ne connaissent pas. Puis ils l'acceptent au deuxième essai. L'attente est en général d'environ 15 minutes.
- **Serveur indisponible.** Un code `421` signifie que le serveur n'est pas disponible. Un `4.4.1` ou `4.4.2` signifie que la connexion a échoué ou a expiré.
- **E-mail expiré.** Un code `4.4.7` signifie que votre serveur a continué d'essayer, puis a abandonné. La RFC 5321 dit que les serveurs devraient réessayer pendant environ quatre à cinq jours.

Un soft bounce est normal. Un soft bounce qui se répète est un problème. Si une boîte est "pleine" à chaque envoi pendant six semaines, cette boîte n'est pas pleine. Elle est abandonnée. Tous les outils d'envoi finissent par la traiter ainsi.

## Comment lire le code d'un message de rebond

Chaque message de rebond contient un code. Une fois que vous savez le lire, vous n'avez plus besoin de l'étiquette de qui que ce soit. Vous voyez vous-même ce qui s'est passé.

Il y a deux codes dans chaque message.

**Le premier code a trois chiffres**, comme 550 ou 421. Seul le premier chiffre compte ici. Un 4 signifie temporaire. Un 5 signifie permanent.

**Le deuxième code a trois nombres séparés par des points**, comme 5.1.1. Le premier nombre répète la même règle : 4 est temporaire, 5 est permanent. Le deuxième et le troisième nombre donnent la raison :

- `.1.1` signifie que la boîte n'existe pas (la partie avant le @ est fausse).
- `.1.2` signifie que le domaine n'existe pas (la partie après le @ est fausse).
- `.2.2` signifie que la boîte est pleine.
- `.7.1` signifie que le serveur vous a refusé à cause d'une politique.

![Comment lire un code de rebond : le premier chiffre dit hard ou soft, le code étendu dit pourquoi, et l'action dépend des deux](/blog/fig-fr-bounce-code-reading.webp)
Lisez le premier chiffre pour connaître le type. Lisez le code complet pour connaître la raison. Puis agissez selon la raison.

Le tableau ci-dessous liste les codes que vous verrez vraiment. Le texte des messages est copié de la documentation officielle de Gmail et de Microsoft.

| Code | Où vous le voyez | Ce que ça signifie | Type | Quoi faire |
|---|---|---|---|---|
| 550 5.1.1 | Gmail, Microsoft, la plupart des serveurs | La boîte n'existe pas | Hard | Retirez l'adresse |
| 5.1.2 | N'importe quel serveur | Le domaine n'existe pas | Hard | Retirez l'adresse |
| 5.4.1 Recipient address rejected: Access denied | Microsoft | L'adresse n'existe pas | Hard | Retirez l'adresse |
| 550 5.2.1 | Gmail | Le compte est inactif | Hard | Retirez l'adresse |
| 552 5.2.2 | Gmail | Boîte pleine et compte inactif | Hard | Retirez l'adresse |
| 452 4.2.2 | Gmail | Boîte pleine | Soft | Attendez. Retirez-la si ça se répète |
| 450 4.2.1 | Gmail | La personne reçoit trop d'e-mails | Soft | Attendez |
| 421 4.7.28 | Gmail | Trop de courrier venant de votre IP | Soft | Envoyez plus lentement. Vérifiez votre liste |
| 550 5.7.28 | Gmail | Trop de courrier indésirable venant de votre IP | Hard | Arrêtez d'envoyer. Corrigez votre liste et votre volume |
| 550 5.7.1 | Gmail, Microsoft | Bloqué par une politique | Hard, mais l'adresse est bonne | Vérifiez votre authentification et votre réputation |
| 550 5.7.26 | Gmail | Votre domaine n'est pas authentifié | Hard, mais l'adresse est bonne | Configurez SPF et DKIM |
| 550 5.7.30 | Gmail | Votre e-mail a échoué à DKIM | Hard, mais l'adresse est bonne | Corrigez votre configuration DKIM |
| 5.7.23 | Microsoft | Votre e-mail a échoué à SPF | Hard, mais l'adresse est bonne | Corrigez votre enregistrement SPF |
| 5.7.606 à 5.7.649 | Microsoft | Votre IP d'envoi est bannie | Hard, mais l'adresse est bonne | Demandez à Microsoft de lever le bannissement, puis corrigez la cause |
| 4.7.500 à 4.7.699 | Microsoft | Activité suspecte, bloqué pour l'instant | Soft | Attendez. Ça se lève tout seul si vous êtes un expéditeur légitime |
| 4.4.7 | N'importe quel serveur | L'e-mail a expiré après des jours d'essais | Soft, mais il a abandonné | Retirez l'adresse si ça se répète |

Regardez la dernière colonne. Deux codes peuvent être tous les deux des hard bounces et appeler des actions opposées. Un `5.1.1` veut dire supprimez l'adresse. Un `5.7.26` veut dire gardez l'adresse et corrigez votre DNS.

## Pourquoi le même rebond est hard dans un outil et soft dans un autre

Les gens comparent les taux de rebond entre outils et s'y perdent. Voici pourquoi.

Le serveur de réception envoie un code. C'est tout ce qu'il fait. Ensuite votre outil d'envoi décide quoi faire de ce code. Chaque outil a sa propre règle, et les règles diffèrent. Le guide de Twilio le dit clairement : "not all ISPs adhere to that code consistently", tous les fournisseurs ne respectent pas ce code de façon cohérente.

Voici quatre outils répandus et leurs règles :

| Outil | Ce qu'il fait d'un soft bounce | Quand un soft bounce devient un hard bounce |
|---|---|---|
| Mailchimp | Réessaie et garde le contact | Après 7 soft bounces si le contact n'a jamais rien ouvert. Après 15 s'il a déjà ouvert |
| HubSpot | L'appelle "pending" et réessaie jusqu'à 72 heures. Puis enregistre un soft bounce | Pas automatiquement. Mais HubSpot range "boîte pleine" dans les hard bounces, pas les soft |
| SendGrid | Réessaie jusqu'à 72 heures | Après 72 heures il arrête. Les hard bounces vont sur une liste de blocage |
| Amazon SES | Réessaie un moment, puis vous prévient qu'il a arrêté | Jamais automatiquement. Seuls les hard bounces comptent dans votre taux de rebond. Les réponses automatiques ne comptent pas du tout |

![Quatre plateformes d'envoi et leurs règles sur le moment où un soft bounce devient un hard bounce](/blog/fig-fr-bounce-rules-by-platform.webp)
Même code, quatre règles différentes. Déplacez une liste de Mailchimp vers HubSpot et votre nombre de hard bounces change, alors que les adresses sont les mêmes.

Donc une boîte pleine est un soft bounce chez Gmail. C'est un hard bounce chez HubSpot. Et chez Amazon SES c'est un soft bounce qui ne devient jamais hard. Si votre taux de rebond change après un changement d'outil, vérifiez les règles avant d'accuser la liste.

La solution simple est d'arrêter de faire confiance à l'étiquette et de lire le code. Tous les outils permettent d'exporter le message de rebond. Le code à l'intérieur est le même, quel que soit l'outil qui l'a collecté.

## Quel est un taux de hard bounce acceptable ?

La limite est fixée par l'entreprise qui envoie votre courrier. La plupart ne la publient pas. Amazon SES le fait, et ses chiffres sont un bon guide de la façon dont les fournisseurs raisonnent.

| Taux de hard bounce | Ce que fait Amazon SES |
|---|---|
| Moins de 2 % | Le niveau sous lequel SES vous dit de rester "for best results", pour de meilleurs résultats |
| 5 % ou plus | Votre compte est placé en révision |
| 10 % ou plus | Votre envoi peut être suspendu jusqu'à ce que vous corrigiez le problème |

Deux détails comptent. SES ne compte que les hard bounces. Les soft bounces et les rebonds pour IP bloquée ne comptent pas contre vous. Et SES n'utilise pas de fenêtre de temps fixe. Il regarde un volume typique de vos envois, donc un petit expéditeur est jugé de la même façon qu'un gros.

Les plaintes pour spam vont de pair avec les rebonds. Les consignes pour expéditeurs de Google disent de garder votre taux de plaintes sous 0,10 pour cent et de ne jamais atteindre 0,30 pour cent. Amazon SES place les comptes en révision à 0,1 pour cent et peut les suspendre à 0,5 pour cent. Une liste qui fait des hard bounces au-dessus de 2 pour cent reçoit en général aussi des plaintes. Les deux viennent de la même cause : des gens qui n'ont pas demandé votre courrier, et des adresses que personne n'a vérifiées.

L'article sur les [repères du taux de rebond email](/blog/how-to-reduce-email-bounce-rate) détaille les limites sûres par type d'e-mail et par origine de la liste.

## Faut-il retirer les hard bounces de votre liste ?

Oui. Tout de suite.

Les mots exacts d'Amazon sont : "you should immediately remove the recipient's email address from your mailing list", vous devez retirer immédiatement l'adresse du destinataire de votre liste. La même page prévient que si vous continuez d'envoyer à des adresses en hard bounce, votre envoi peut être suspendu. Mailchimp ne vous laisse même pas le choix. Les adresses en hard bounce sont "cleaned from your audience automatically and immediately", retirées de votre audience automatiquement et immédiatement, et ne reçoivent plus jamais rien.

Ne réessayez pas. Ne les gardez pas pour la prochaine campagne au cas où la boîte reviendrait. Une adresse `5.1.1` qui a rebondi le mois dernier rebondira le mois prochain. Chaque essai supplémentaire dit au fournisseur que vous envoyez à des adresses que vous ne connaissez pas.

Il y a une exception. Si le code est `5.7.26`, `5.7.30`, `5.7.23`, ou un code d'IP bannie comme `5.7.6xx`, l'adresse n'est pas le problème. La supprimer ne règle rien. Corrigez votre authentification ou votre réputation. Puis renvoyez à la même adresse.

Les soft bounces, c'est l'inverse. Laissez-les tranquilles. Votre outil d'envoi réessaiera de lui-même. Si votre outil n'a pas de règle pour les rebonds répétés, créez-en une. Une adresse qui fait un soft bounce sur trois envois d'affilée en un mois ne reviendra pas. La règle de sept de Mailchimp est une limite sûre pour tout le monde.

## Pourquoi une adresse correcte fait-elle un hard bounce ?

Parce qu'un hard bounce mesure si l'e-mail a été accepté. Il ne mesure pas si l'adresse existe. Quatre choses provoquent un rebond 5xx sur une boîte réelle et active.

**Votre e-mail n'est pas authentifié.** Le 5 mai 2025, Microsoft a commencé à imposer SPF, DKIM et DMARC à tout domaine envoyant plus de 5 000 e-mails par jour vers des adresses Outlook.com, Hotmail et Live. D'abord, le courrier non conforme est parti dans les indésirables. Puis il a été refusé avec `550 5.7.15 Access denied, sending domain does not meet the required authentication level`. Google exige les trois mêmes enregistrements des expéditeurs en masse. Les codes `550 5.7.26` et `550 5.7.30` de Gmail sont ce que vous voyez de votre côté quand un enregistrement manque. Tous ces codes commencent par 5. Ils atterrissent donc dans votre colonne hard bounce, alors que les adresses auraient accepté l'e-mail.

**L'entreprise bloque les adresses inconnues à l'entrée.** Microsoft Exchange peut être réglé pour refuser toute adresse absente de l'annuaire de l'entreprise. Il le fait avec `5.4.1 Recipient address rejected: Access denied`. La plupart du temps, c'est un vrai hard bounce. Parfois, c'est un nouvel employé dont la boîte n'a pas encore été créée. C'est pourquoi un vérificateur qui contrôle la boîte elle-même vous donne une meilleure réponse que le rebond.

**Un secure email gateway se trouve devant la boîte.** Beaucoup d'entreprises font passer tout le courrier entrant par un [secure email gateway](/blog/what-is-a-secure-email-gateway) comme Proofpoint, Mimecast ou Barracuda. La passerelle répond pour tout le domaine. Elle analyse chaque e-mail et refuse tout ce qui enfreint une de ses règles, en général avec un code de politique `5.7.1`. C'est un hard bounce sur une boîte qui existe. Les passerelles provoquent aussi des rebonds tardifs. La passerelle accepte l'e-mail à l'entrée sans vérifier si la boîte existe. Le rebond arrive des minutes ou des heures plus tard, quand le serveur derrière la passerelle ne trouve pas la boîte. Votre rapport affiche un hard bounce, mais il est arrivé après l'envoi, pas pendant.

**Le domaine est catch-all.** C'est le problème inverse. Un [domaine catch-all](/blog/what-is-a-catch-all-email-address) accepte le courrier pour n'importe quelle adresse, réelle ou non. Il ne dit donc jamais `5.1.1` à l'entrée. L'e-mail est accepté, puis rebondit plus tard, ou disparaît sans un mot. Environ 30 pour cent d'une liste B2B se trouve sur ces domaines. C'est de là que viennent les hard bounces que vous n'attendiez pas.

Si vous voulez savoir [pourquoi un email rebondit](/blog/why-cold-emails-bounce) en cold outreach en particulier, les causes s'additionnent autrement. Là, c'est l'âge de la liste qui fait le plus de dégâts.

## Comment éviter les hard bounces avant d'envoyer

Presque chaque `5.1.1` d'un rapport de campagne aurait pu être évité. La boîte avait déjà disparu avant que vous n'appuyiez sur envoyer. La vérification pose au serveur de réception la même question que le rebond aurait posée, mais avant la campagne au lieu d'après.

Un [vérificateur d'adresses e-mail](/email-checker) fait trois contrôles dans l'ordre :

- **Syntaxe.** Attrape des choses comme `nom@gmail..com` avant qu'elles ne vous coûtent un envoi.
- **Domaine.** Attrape les fautes de frappe comme `gmial.com` et les domaines expirés.
- **Boîte.** Ouvre une connexion avec le serveur de réception et demande s'il accepte le courrier pour cette adresse précise. Si la réponse est `5.1.1`, c'est le même rebond que vous auriez eu en campagne. Mais il ne vous coûte aucune réputation, parce qu'aucun e-mail n'a été envoyé.

La vérification standard cesse de fonctionner à un endroit. Sur un domaine catch-all, le serveur dit oui à toutes les adresses. Le contrôle revient donc "inconnu" ou "risqué", et vous devez deviner. Giggal.ai a été conçu pour transformer cette partie de la liste en une vraie réponse : valide ou invalide. La page de [vérification catch-all](/catch-all-verification) explique comment.

Les passerelles causent le même problème. Une passerelle accepte la question du vérificateur pour n'importe quelle adresse, donc un contrôle standard revient "inconnu" là aussi. Giggal.ai vérifie ces adresses autrement. L'article sur la [vérification des e-mails derrière les secure email gateways](/blog/how-to-verify-emails-behind-secure-email-gateways) explique ce que fait la passerelle et comment le contrôle la contourne.

Pour les formulaires d'inscription, ajoutez un appel de [vérification en temps réel](/public/docs) à la soumission du formulaire. Une adresse mal tapée est attrapée pendant que la personne est encore sur la page. C'est la seule étape qui réduit les rebonds sur des listes que vous n'avez pas encore construites.

Ensuite, occupez-vous de deux types d'adresses qui passent la vérification mais vous nuisent quand même. Les adresses de rôle comme info@ et support@ existent, donc elles passent. Mais personne ne les possède à titre personnel, et elles reçoivent plus de plaintes. Les adresses jetables passent tant qu'elles existent et disparaissent ensuite. Tout bon vérificateur signale les deux. Une liste de [cold email](/blog/good-bounce-rate-for-cold-email) en particulier devrait les retirer avant le premier envoi.

## Questions fréquentes

**Quelle est la différence entre le taux de hard bounce et le taux de soft bounce ?**
Chacun est ce type de rebond divisé par les e-mails envoyés. Le taux de hard bounce est celui qui vous met en difficulté, parce qu'il montre la qualité de votre liste. Amazon SES, par exemple, ne compte que les hard bounces quand il décide de réviser ou de suspendre un compte. Le taux de soft bounce en dit plus sur votre vitesse d'envoi, votre volume et votre réputation. Lisez-le séparément.

**Dois-je supprimer les e-mails qui ont rebondi ?**
Supprimez tout de suite les hard bounces avec des codes d'adresse : `5.1.1`, `5.1.2`, `5.2.1` et similaires. Gardez les hard bounces avec des codes d'authentification, `5.7.26`, `5.7.30` et `5.7.23`, et corrigez plutôt votre authentification. Gardez les soft bounces et laissez la nouvelle tentative se faire. Retirez toute adresse qui fait un soft bounce plusieurs fois d'affilée.

**Un soft bounce peut-il devenir un hard bounce ?**
Oui, de deux façons. Le serveur de réception peut changer sa réponse. Gmail signale une boîte pleine par `452 4.2.2` tant que le compte est actif, et par `552 5.2.2` une fois le compte inactif. Ou votre outil d'envoi peut changer l'étiquette. Mailchimp transforme une adresse en hard bounce après 7 soft bounces sans activité, ou 15 avec activité.

**Les soft bounces nuisent-ils à la réputation de l'expéditeur ?**
Un seul, non. Un flux régulier, oui. Les fournisseurs voient que vous envoyez encore et encore vers des boîtes qui ne peuvent pas recevoir. Et un taux de soft bounce élevé est souvent un avertissement en soi. Un code comme `421 4.7.28`, c'est le fournisseur qui vous dit directement de ralentir.

**Pourquoi mon e-mail a-t-il fait un hard bounce alors que l'adresse est correcte ?**
Presque toujours à cause de l'authentification. Gmail et Outlook.com refusent désormais le courrier en masse sans SPF, DKIM et DMARC. Ce refus est un code 5xx, donc votre outil le classe en hard bounce. Regardez le code. S'il commence par `5.7`, l'adresse n'est pas le problème.

Un rapport de rebonds n'est utile que si vous savez le lire. Lisez le premier chiffre. Puis lisez la raison. Puis agissez selon la raison. Les adresses qui auraient rebondi avec `5.1.1` sont la partie facile, parce que vous pouvez les trouver avant d'envoyer. Passez d'abord la liste dans [Giggal.ai](/). La colonne hard bounce de votre prochain rapport ne contiendra presque plus que des choses que vous ne pouviez pas savoir.
