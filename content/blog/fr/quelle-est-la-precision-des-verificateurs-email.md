---
title: "Quelle est la précision des vérificateurs d'email ?"
description: Chaque vérificateur annonce entre 97 et 99 pour cent. Ce que mesure ce chiffre, pourquoi ils se ressemblent tous et comment tester un outil sur votre liste.
slug: quelle-est-la-precision-des-verificateurs-email
date: 2026-09-23
keyword: précision des vérificateurs d'email
cta: Testez-le sur votre propre liste
---

Ouvrez la page de tarifs de dix vérificateurs d'email au hasard et vous trouverez dix annonces de précision entre 97 % et 99,9 %. Nous en publions une aussi. Les chiffres sont si resserrés qu'ils n'apportent presque aucune information, un drôle de résultat pour une mesure censée vous aider à choisir.

Ce resserrement n'est pas un complot. Il vient de l'absence de définition commune de ce qui est mesuré : chaque éditeur choisit une mesure vraie et flatteuse, et les mesures vraies et flatteuses finissent par converger.

## Ce que mesure généralement le chiffre

La définition courante ressemble à ceci : parmi les adresses pour lesquelles nous avons donné un résultat définitif, quelle part avons-nous eue juste. Lisez-la attentivement, car cette réserve fait énormément de travail.

Les adresses que l'outil a refusé de juger ne sont pas au dénominateur. Si un vérificateur renvoie valide ou invalide pour 70 % de votre liste et étiquette les 30 % restants comme risqués, sa précision est calculée sur les 70 %. Le tiers difficile, justement la partie pour laquelle vous aviez besoin d'aide, est exclu du score par construction.

C'est pourquoi la précision seule dit très peu, et pourquoi un second chiffre compte au moins autant : la couverture, c'est-à-dire la part de la liste sur laquelle l'outil a accepté de se prononcer. Un outil à 99 % de précision et 70 % de couverture en fait moins pour vous qu'un outil à 97 % de précision et 95 % de couverture, même si le premier chiffre paraît meilleur. Très peu d'éditeurs publient la couverture. Anymail Finder le fait, avec 86,4 % de couverture à côté de 98,9 % de précision, et ce duo est plus utile que chacun des deux chiffres pris seul.

## Pourquoi chaque outil est précis sur la partie facile

Sur un domaine ordinaire avec un serveur de messagerie normal, la vérification est pratiquement réglée. Le serveur tient une liste de ses boîtes et répond honnêtement quand on l'interroge, donc un vérificateur lit la réponse et la note. Il n'y a pas beaucoup de place pour qu'un éditeur fasse mieux ou moins bien.

Autrement dit, la précision affichée mesure surtout la performance sur la partie du travail qui n'est pas difficile. Les différences entre outils se jouent ailleurs.

## Là où ils diffèrent vraiment

Deux catégories cassent le contrôle standard, et la façon dont un outil les traite est la vraie différence de produit.

Les domaines catch-all acceptent le courrier pour toute adresse possible, réelle ou non. Le serveur est réglé pour tout prendre, afin que les alias partagés, les fautes de frappe et les anciens salariés arrivent quelque part. Interrogez-le sur une boîte jamais créée et il répond oui. Environ 30 % d'une liste B2B type se trouve sur des domaines de ce genre.

Les secure email gateways produisent le même symptôme pour une autre raison. Proofpoint, Mimecast, Barracuda et les produits similaires filtrent le courrier en bordure et acceptent tout avant de décider quoi en faire, donc l'acceptation que vous recevez ne dit rien de l'existence de la boîte. Les domaines grands comptes y sont très représentés, ce qui signifie que les contacts qui comptent le plus pour vous sont les plus touchés.

À elles deux, ces catégories sont l'endroit où un outil de vérification justifie son prix, ou pas.

## Bien lire l'annonce d'un éditeur

Trois questions passent outre le marketing.

Quel est le dénominateur ? Demandez si le chiffre de précision inclut les adresses renvoyées comme risquées ou inconnues. Si ce n'est pas le cas, demandez quel pourcentage d'une liste type tombe dans cette catégorie. Un éditeur qui ne répond pas à la seconde question vous a déjà appris quelque chose.

Le test était-il indépendant ? La plupart des benchmarks publiés sont réalisés par des éditeurs, et ces benchmarks ont une forte tendance à classer l'éditeur en premier. Nous en citons un sur ce site, un test LeadMagic de février 2026 portant sur 10 000 vraies adresses B2B, dont 28 % sur des domaines catch-all. Ce sont des données vraiment utiles, et LeadMagic s'y est classé premier, ce dont il faut tenir compte. Giggal.ai ne faisait pas partie des outils mesurés.

La précision veut-elle dire la même chose que la délivrabilité ? Non. Une boîte peut exister et refuser quand même votre message à cause du filtrage, de la réputation ou du contenu. La vérification vous dit que l'adresse est réelle. Elle ne promet pas que le message arrive. Les éditeurs qui brouillent cela vous vendent quelque chose qu'ils ne peuvent pas fournir.

## Tester vous-même, la seule chose qui tranche

Cela prend un après-midi et vaut mieux que toutes les annonces de toutes les pages de tarifs.

Constituez un échantillon d'environ 500 adresses tirées de vos propres données plutôt que d'un jeu de test public. Mélangez-les exprès : certaines que vous savez actives parce que ces personnes vous ont répondu, certaines que vous savez mortes d'après des rebonds passés, et une bonne part de domaines catch-all et grands comptes. Les adresses connues comme bonnes et connues comme mortes servent de témoin, puisque vous pouvez confronter la réponse de l'outil à un fait que vous avez déjà.

Passez cet échantillon dans deux ou trois outils. Comparez ensuite trois choses.

D'abord, les adresses connues. Combien d'actives ont été correctement déclarées valides, et combien de mortes correctement déclarées invalides. Un outil qui marque invalides vos contacts connus comme actifs est pire qu'inutile, parce que vous supprimerez de vrais prospects sur sa parole.

Ensuite, la couverture. Comptez les lignes renvoyées comme risquées, inconnues, accept-all ou catch-all. Ce nombre est la partie de votre liste sur laquelle l'outil n'a pas pu vous aider, et c'est généralement le chiffre le plus révélateur de tout l'exercice.

Enfin, et seulement si vous le pouvez, envoyez à une partie de ce que chaque outil a déclaré valide sur les domaines catch-all et observez le taux de rebond réel. C'est la seule mesure qui teste l'annonce plutôt que le marketing, et c'est pourquoi une offre gratuite limitée aux vérifications unitaires n'en est pas vraiment une. Il vous faut le traitement en masse pour faire ce test.

## Ce que nous annonçons, et ce que cela vaut

Giggal.ai annonce 98,5 % de précision sur des listes professionnelles standard et des taux de rebond typiques sous 3 % sur une liste nettoyée. Ce sont nos chiffres, mesurés par nous, et vous devriez les traiter avec la même méfiance que ceux des autres tant que vous n'avez pas fait le test ci-dessus.

Nous préférons être jugés sur la couverture. L'objectif de conception était de renvoyer valide ou invalide sur les adresses catch-all et protégées par une passerelle plutôt qu'une étiquette, sur quinze passerelles identifiées, pour que la catégorie risquée soit petite au lieu de représenter un tiers du fichier. Savoir si cela tient sur vos données, votre propre échantillon de 500 adresses y répond mieux que cette page.

L'offre gratuite comprend 1 000 crédits, sans carte, et fonctionne sur un import en masse justement pour que le test soit possible. Pour une seule adresse, vous pouvez d'abord [vérifier une adresse mail](/email-checker). Si vous voulez d'abord le contexte, nous avons expliqué [ce qu'est une adresse catch-all](/blog/what-is-a-catch-all-email-address), [ce que risqué veut vraiment dire](/blog/what-does-risky-mean-in-email-verification) et [comment on vérifie les boîtes protégées par une passerelle](/blog/how-to-verify-emails-behind-secure-email-gateways).
