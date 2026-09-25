---
title: "Taux de rebond email : repères et comment le réduire"
description: Ce qu'est le taux de rebond email, les repères pour le marketing, le transactionnel et le cold email, et une séquence pour faire baisser un taux élevé.
slug: comment-reduire-le-taux-de-rebond
date: 2026-09-23
updated: 2026-09-26
keyword: taux de rebond email
image: /blog/covers/fr/comment-reduire-le-taux-de-rebond.webp
imageAlt: Taux de rebond email : repères et comment le réduire
cta: Reprenez le contrôle de votre taux de rebond
---

Un taux de rebond élevé est rarement un seul problème. Ce sont généralement trois ou quatre petits problèmes empilés, et on a tendance à les attaquer dans le mauvais ordre : d'abord le travail technique intéressant, et en dernier l'ennuyeuse hygiène de liste qui aurait réglé l'essentiel.

Cet article est donc classé selon ce que vaut réellement chaque étape, pas selon le plaisir qu'on a à la faire.

## Qu'est-ce que le taux de rebond email ?

Le taux de rebond email est la part des messages d'un envoi qui sont revenus sans être distribués : messages rebondis divisés par messages envoyés, en pourcentage. Vous en envoyez 10 000, 250 reviennent, et le taux de rebond est de 2,5 pour cent. La plupart des outils l'affichent par campagne et le divisent en rebonds durs (l'adresse ou le domaine n'existe pas) et rebonds doux (boîte pleine, serveur occupé, blocage temporaire). Les fournisseurs de messagerie surveillent surtout la part de rebonds durs, parce que c'est le signe le plus clair d'une liste jamais vérifiée.

## Repères de taux de rebond

Le chiffre acceptable dépend du type de courrier, parce que les fournisseurs jugent chacun différemment.

| Type d'envoi | Sain | À surveiller | Nuisible |
|---|---|---|---|
| Marketing vers une liste avec consentement | moins de 1% | de 1 à 2% | plus de 2% |
| Transactionnel (reçus, réinitialisations) | moins de 0,5% | de 0,5 à 1% | plus de 1% |
| Prospection à froid | moins de 2% | de 2 à 5% | plus de 5% |

![Fourchettes saine, à surveiller et nuisible du taux de rebond pour les emails marketing, transactionnels et à froid](/blog/fig-fr-bounce-rate-bands.webp)
Le même taux de rebond est correct sur un type d'envoi et problématique sur un autre.

Le cold email a une fourchette plus large parce que la liste est plus froide par définition, mais il est aussi jugé plus durement dès qu'il franchit la limite : une campagne à froid à 6 pour cent attire les blocages plus vite qu'une newsletter au même taux. Ces fourchettes sont celles qu'utilisent en pratique les équipes de délivrabilité ; les règles de Google et Yahoo pour les expéditeurs en masse fixent le plafond des plaintes pour spam à 0,3 pour cent, et un taux de rebond au-dessus de ces fourchettes s'accompagne souvent de plaintes.

## Quel est le taux de rebond moyen d'un email ?

Le chiffre le plus souvent cité tourne autour de 2 à 2,5 pour cent, tous expéditeurs confondus. Prenez-le comme une anecdote et non comme un objectif, car cette moyenne rassemble des expéditeurs dont les listes n'ont presque rien en commun, et la dispersion à l'intérieur est bien plus large que le chiffre ne le laisse croire.

Si vous cherchez le taux de rebond moyen par secteur, vous trouverez un tableau repris sur des dizaines de sites, avec des valeurs bien rangées pour l'ecommerce, la santé, l'éducation et le reste. Ces chiffres remontent presque tous à une seule page de références de Mailchimp, et cette page ne publie aujourd'hui que des taux d'ouverture, de clic et de désabonnement. Il n'y a pas de tableau des rebonds par secteur. Les sites qui citent ces valeurs se citent en grande partie les uns les autres, et plusieurs d'entre eux vendent de la vérification d'email.

Le secteur reste de toute façon un mauvais indicateur. Deux entreprises SaaS de la même catégorie auront des taux de rebond séparés par un ordre de grandeur si l'une a construit sa liste avec des formulaires et l'autre l'a achetée. Ce qui prédit vraiment le chiffre, c'est d'où viennent les adresses et depuis combien de temps.

| D'où vient la liste | Rebond total typique | Pourquoi |
|---|---|---|
| Grand public avec consentement, envoi dans les 90 derniers jours | moins de 0,5% | Les adresses sont données par la personne et confirmées récemment |
| Professionnel avec consentement, envoi dans les 90 derniers jours | moins de 1% | Pareil, mais les boîtes professionnelles ferment quand quelqu'un part |
| Professionnel avec consentement, inactive depuis 12 mois | de 2 à 5% | Environ un quart des données de contact B2B vieillit en un an |
| B2B à froid, vérifiée avant envoi | de 1 à 3% | Le reste, ce sont surtout des domaines catch-all qu'un vérificateur n'a pas su trancher |
| B2B à froid, non vérifiée | de 5 à 15% | Rien n'a retiré les adresses qui n'existent plus |
| Achetée ou collectée, non vérifiée | de 10 à 30% | Les données revendues vieillissent chez le fournisseur avant d'arriver chez vous |

![Taux de rebond typique selon l'origine de la liste, du grand public avec consentement sous 0,5 pour cent à la liste achetée et non vérifiée entre 10 et 30 pour cent](/blog/fig-fr-bounce-by-list-source.webp)
Entre la première ligne et la dernière, il y a un facteur soixante. Aucune moyenne sectorielle ne couvre un tel écart.

Le B2B est plus haut que le B2C à chaque étape équivalente, pour une raison qui n'a rien à voir avec le secteur : les gens changent d'emploi, et la boîte professionnelle ferme en général à ce moment-là. Une adresse personnelle chez un fournisseur gratuit peut rester inutilisée des années et continuer d'accepter le courrier.

La question utile n'est donc pas de savoir où se situe votre taux face à votre secteur. C'est de savoir laquelle des lignes ci-dessus décrit votre liste, et si vous avez fait la seule étape qui la déplace.

## D'abord, savoir quel type vous avez

Votre outil d'envoi sépare les rebonds en durs et doux. Ils ne veulent pas dire la même chose, et la solution de l'un ne fait rien pour l'autre.

Un rebond dur est définitif. La boîte n'existe pas, le domaine n'existe pas, ou le serveur vous a refusé net. Renvoyer donnera toujours le même résultat. C'est la catégorie qui vous nuit, parce que les fournisseurs lisent une série de rebonds durs comme un expéditeur qui ne sait pas qui sont ses destinataires, c'est-à-dire l'apparence d'un spammeur vu de l'extérieur.

Un rebond doux est temporaire. La boîte est pleine, le serveur est en panne, le message était trop lourd, ou vous avez été mis en greylisting avec une invitation à réessayer bientôt. La plupart des outils d'envoi réessaient automatiquement, et une bonne partie se règle d'elle-même.

Sortez le rapport de votre dernière campagne et regardez la répartition avant toute autre chose. Si vous rebondissez surtout en dur, c'est un problème de liste, et le reste de cet article en parle surtout. Si vous rebondissez surtout en doux, à un taux stable sur toutes les campagnes, le problème tient plus probablement à la réputation ou à l'infrastructure, et nettoyer la liste ne le fera pas beaucoup bouger.

## Ce qui est considéré comme mauvais

Il n'existe pas de seuil universel, mais les chiffres de travail sont assez constants.

| Taux de rebond dur | Ce que cela signifie |
|---|---|
| Moins de 2% | Normal pour une liste entretenue |
| De 2% à 5% | La liste vieillit ou n'a pas été vérifiée avant l'envoi |
| Plus de 5% | Les fournisseurs vous limitent probablement déjà |
| Plus de 10% | Attendez-vous à une suspension sur la plupart des plateformes d'envoi |

La prospection à froid se situe dans le haut de la normale parce que les données sont achetées ou récupérées plutôt que collectées avec consentement. Moins de 3 % est un objectif raisonnable pour une liste froide nettoyée, et si vous travaillez avec une liste chaude de personnes inscrites, vous devriez être bien en dessous de 1 %.

## L'étape qui règle l'essentiel

Vérifiez la liste avant d'envoyer. C'est toute l'étape, et elle explique la grande majorité des rebonds durs sur presque toutes les listes que nous voyons.

Un vérificateur contrôle la syntaxe, confirme que le domaine existe et a des serveurs de messagerie configurés, puis vérifie si la boîte précise est réelle. Passez-y toute la liste avant une campagne, et repassez-y tout ce qui a plus de six mois environ, parce que les adresses B2B se dégradent vite. Les gens changent d'emploi. Les entreprises se réorganisent. Une adresse valable en février ne l'est pas forcément en août, et environ un quart des données de contact B2B se périme en un an. Pour une seule adresse, vous pouvez [vérifier une adresse mail](/email-checker) gratuitement.

Il y a un point à surveiller, et c'est la raison pour laquelle beaucoup de gens vérifient et rebondissent quand même. Environ 30 % d'une liste professionnelle se trouve sur des domaines catch-all, qui acceptent le courrier pour n'importe quelle adresse possible, que la boîte existe ou non. La plupart des vérificateurs ne savent pas les résoudre et les renvoient comme risqués, inconnus ou accept-all. Il vous reste alors deux mauvaises options : supprimer un tiers de votre liste, ou envoyer et l'apprendre à vos dépens.

![Graphique en anneau : environ 70 pour cent d'une liste B2B se résout proprement et environ 30 pour cent se trouve sur des domaines catch-all](/blog/fig-fr-catch-all-share.webp)
La part orange est ce qu'une vérification standard renvoie sans réponse, et c'est de là que viennent les rebonds que vous n'aviez pas prévus.

Supprimer est la plus sûre des deux et c'est ce que fait presque tout le monde, ce qui explique qu'une liste vérifiée puisse sembler maigre. Un vérificateur qui transforme les adresses catch-all en vrai valide ou invalide vous sort de ce choix. C'est pour cela qu'est conçu [Giggal.ai](/), avec sa [vérification catch-all](/catch-all-verification), et il applique le même traitement aux boîtes derrière les secure email gateways comme Proofpoint et Mimecast, qui échouent de façon similaire pour une autre raison.

## Ensuite, retirez les adresses qui n'auraient jamais marché

Deux catégories méritent d'être retirées même quand elles ressortent valides.

Les adresses génériques sont des alias partagés : info@, ventes@, support@, admin@. Elles existent généralement, donc elles passent la vérification, mais elles arrivent dans une boîte partagée qui n'appartient à personne. L'engagement est faible et le taux de plaintes plus élevé que la moyenne. Pour la prospection à froid, elles ne valent presque rien.

Les adresses jetables viennent de services de messagerie temporaire et existent quelques minutes. Elles passent la vérification tant qu'elles vivent, puis disparaissent. Tout vérificateur correct signale ces deux catégories à part des adresses valides, donc c'est une étape de filtrage, pas du travail en plus.

## Corrigez l'entrée, pas seulement la liste

Si de mauvaises adresses continuent d'arriver, le nettoyage devient un tapis roulant.

Mettez une vérification en temps réel sur vos formulaires d'inscription pour qu'une faute de frappe soit détectée pendant que la personne est encore sur la page. L'essentiel de la valeur consiste à attraper gmial.com et hotmial.com au moment où ils sont tapés, ce qui améliore à la fois la délivrabilité et l'expérience de quelqu'un qui voulait vraiment vous lire.

Supprimez le second champ « confirmez votre adresse email ». Il ne marche pas. Les gens copient-collent depuis le premier champ, et vous avez ajouté de la friction pour rien.

Si vous achetez des listes, vérifiez-les le jour où elles arrivent et non le jour où vous envoyez. Les vendeurs revendent les mêmes données plusieurs fois, et elles vieillissent sur leur étagère, pas seulement sur la vôtre.

## Le travail d'authentification

Cela figurait parmi les choses qui ne réduisent pas les rebonds, et ce conseil a mal vieilli. SPF, DKIM et DMARC déterminent si les serveurs destinataires vous croient quand vous dites qui vous êtes, et deux des plus gros fournisseurs refusent désormais le courrier quand ils manquent.

Microsoft a commencé à refuser les envois en masse non authentifiés vers les adresses Outlook.com, Hotmail et Live le 5 mai 2025. Au-delà de 5 000 messages par jour sans les trois enregistrements, vous recevez `550 5.7.15 Access denied, sending domain does not meet the required authentication level`. C'est un code 5xx, donc votre outil d'envoi l'enregistre comme un rebond dur, contre une boîte qui existe et qui aurait accepté le message. Google a serré dans le même sens en novembre 2025, en passant du classement en spam au refus au niveau SMTP.

Concrètement, une faille d'authentification apparaît aujourd'hui dans votre rapport de rebonds plutôt que, discrètement, dans votre taux d'ouverture. Si une part importante de vos rebonds porte des codes 5.7.x et que vos destinataires sont concentrés chez Outlook ou Gmail, le problème n'est pas la liste, et la vérifier à nouveau n'y changera rien.

Configurez proprement les trois enregistrements, vérifiez-les une fois avec l'un des vérificateurs DMARC gratuits, puis n'y pensez plus. Si en revanche vos rebonds sont des erreurs de boîte inexistante, qui portent le code 5.1.1, aucun travail sur le DNS ne les changera.

## Chauffez le domaine s'il est neuf

Un domaine d'envoi tout neuf qui envoie 5 000 messages le premier jour sera limité, et la limitation produit des rebonds doux qui ressemblent à un problème de liste.

Commencez à faible volume et augmentez sur deux à quatre semaines. La plupart des plateformes d'envoi l'automatisent aujourd'hui. Si la vôtre ne le fait pas, montez à la main et résistez à l'envie de brûler les étapes, parce que la réputation que vous construisez décide si la prochaine campagne arrive à destination.

## Une séquence qui marche

Lisez la répartition dur et doux de votre dernière campagne. Vérifiez toute la liste, y compris la partie catch-all, au lieu de l'écarter. Retirez les adresses génériques et jetables. Mettez la vérification sur le formulaire d'inscription pour que le problème ne revienne pas. Contrôlez SPF, DKIM et DMARC une fois. Chauffez le domaine s'il est neuf. Puis envoyez, lisez les nouveaux chiffres et répétez la vérification chaque trimestre.

La plupart des listes passent d'un chiffre désagréable à un chiffre acceptable avec la seule deuxième étape. Le reste de la séquence sert à éviter la rechute.

Si vous voulez savoir où en est votre liste actuelle, Giggal.ai offre 1 000 crédits gratuits sans carte, et ils fonctionnent aussi sur un import en masse. À lire aussi : [ce qu'est une adresse catch-all](/blog/what-is-a-catch-all-email-address), [ce que risqué signifie dans un rapport de vérification](/blog/what-does-risky-mean-in-email-verification) et [un bon taux de rebond en cold emailing](/blog/good-bounce-rate-for-cold-email).
