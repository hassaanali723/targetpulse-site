---
title: "Qu'est-ce qu'un secure email gateway (SEG) ?"
description: Un secure email gateway filtre le courrier devant le serveur de messagerie d'une entreprise. Son rôle, ses éditeurs et pourquoi il gêne la vérification.
slug: qu-est-ce-qu-un-secure-email-gateway
date: 2026-09-23
keyword: qu'est-ce qu'un secure email gateway
image: /blog/what-is-a-secure-email-gateway.webp
imageAlt: Illustration de ce qu'est un secure email gateway
cta: Vérifiez aussi les adresses derrière un SEG
---

Un secure email gateway est une couche de filtrage placée devant le serveur de messagerie d'une entreprise, qui inspecte chaque message avant de le laisser passer. Si vous voyez sans cesse SEG dans vos résultats de vérification et voulez savoir concrètement ce qu'est un secure email gateway, c'est le point de contrôle par lequel passe le courrier entrant et sortant d'une entreprise, qui cherche les menaces et applique les règles au passage. Le serveur de messagerie derrière ne voit jamais un message que la passerelle décide de bloquer.

## SEG n'est que l'abréviation

SEG signifie secure email gateway, en français passerelle de messagerie sécurisée, et dès que vous y prêtez attention vous voyez le sigle plus souvent que l'expression complète. Les deux s'emploient indifféremment. Quand un outil de vérification indique qu'une adresse se trouve derrière un SEG, ou qu'un rapport de délivrabilité mentionne un filtrage SEG, il s'agit de la couche de filtrage décrite ici. Le terme paraît plus technique que l'idée, qui est celle d'un vigile posté devant le service courrier.

## Ce que fait vraiment la passerelle

Une passerelle existe pour garder le mauvais courrier dehors et le courrier sensible dedans. En entrée, elle cherche le spam, les malwares et le phishing, puis met en quarantaine ou rejette tout ce qui déclenche une règle. En sortie, elle applique la prévention des fuites de données et la conformité, en bloquant les messages qui divulgueraient des données clients ou enfreindraient une réglementation. Beaucoup gèrent aussi le chiffrement et l'archivage à long terme.

Une entreprise en adopte une parce que faire tout cela sur le serveur de messagerie lui-même est plus difficile à gérer et plus facile à rater. La passerelle centralise les règles en un seul point que chaque message doit franchir.

## Les passerelles que vous croiserez le plus

Une poignée d'éditeurs domine ce marché. Proofpoint, Mimecast, Barracuda et Cisco IronPort sont les noms que vous croiserez le plus souvent sur les domaines professionnels, et il en existe beaucoup de plus petits derrière. Au total, nous détectons 15 secure email gateways.

Elles diffèrent par leurs fonctions et leurs prix, mais vues de l'extérieur elles se comportent de la même façon. Chacune se place devant le vrai système de messagerie et décide de ce qui l'atteint. C'est pourquoi la présence d'un éditeur précis vous apprend que l'entreprise a choisi ce produit, et pas grand-chose de plus sur les adresses qui se trouvent derrière.

## Une passerelle n'est pas le fournisseur de la boîte

On confond facilement la passerelle avec le système de messagerie de l'entreprise, mais ce sont des couches distinctes. Une entreprise peut héberger ses boîtes chez Microsoft 365 ou Google Workspace et placer malgré tout devant elles une passerelle d'un autre éditeur. Une entreprise fournit alors la couche de sécurité et une autre héberge les boîtes. C'est pourquoi une passerelle sur le chemin du courrier ne vous dit pas quel fournisseur héberge réellement la boîte, et qu'un produit de sécurité placé devant ne révèle rien de la boîte derrière. Les deux choix sont faits indépendamment, souvent par des équipes différentes avec des budgets différents.

## Comment une passerelle modifie le trajet d'un email

Normalement, un message va directement au serveur de messagerie du domaine. Avec une passerelle, le domaine oriente son routage de courrier vers la passerelle, si bien que chaque message entrant y arrive en premier. La passerelle l'inspecte et, seulement s'il passe, le transmet au vrai serveur où se trouve la boîte.

Le destinataire ne remarque rien de tout cela. Pour tout ce qui est à l'extérieur, la passerelle est le système de messagerie du domaine, puisque c'est la seule partie qui répond. Certaines passerelles vont plus loin et font volontairement patienter les expéditeurs inconnus, en retenant un premier contact et en ne répondant vraiment qu'à une tentative ultérieure.

## Pourquoi les passerelles perturbent la vérification

La vérification repose sur une question directe posée au serveur de messagerie et une réponse directe. Une passerelle rompt cette chaîne. Comme elle répond au nom du domaine, elle peut accepter un message, ou le retenir pour inspection, sans jamais vérifier si la boîte derrière existe.

Un vérificateur qui interroge une adresse précise peut donc recevoir une réponse d'acceptation ou évasive qui reflète la politique de la passerelle, et non l'état de la boîte. La mise en attente aggrave les choses, car une première tentative retenue ressemble à un résultat non concluant même quand la boîte est parfaitement réelle. C'est la mauvaise partie qui répond au contrôle standard.

Un exemple concret aide. Un vérificateur sonde une adresse sur un domaine protégé par une passerelle. La passerelle, selon ses propres règles pour les expéditeurs inconnus, accepte la sonde ou la fait patienter. Dans les deux cas, le vérificateur enregistre une réponse venue de la passerelle, pas du serveur qui sait si la boîte existe. Rien de la vraie boîte n'a été testé, et pourtant le contrôle a une réponse à rapporter.

## Une passerelle ne dit rien de l'existence de la boîte

C'est le point à retenir. La présence d'une passerelle indique qu'une entreprise prend la sécurité au sérieux. Elle ne dit absolument rien sur le fait qu'une adresse précise derrière elle corresponde à une boîte réelle et active. Une adresse morte et une adresse vivante peuvent se trouver derrière la même passerelle et paraître identiques de l'extérieur, et c'est justement pour cela que les adresses protégées par une passerelle finissent si souvent dans la même pile non résolue que les domaines catch-all.

Pour un marketeur, l'enjeu est la portée. Sur une liste B2B, une bonne part de vos meilleurs contacts, ceux des grandes entreprises les plus attentives à la sécurité, se trouve précisément derrière ces passerelles. Écartez-les tous et vous perdez la partie grands comptes de votre liste. Envoyez à l'aveugle et les blocages retombent sur votre réputation d'expéditeur. Pour une seule adresse, commencez par [vérifier une adresse mail](/email-checker) ; si votre liste en est pleine, voici comment nous traitons les [emails protégés par une passerelle SEG](/seg-email-verification) (en anglais).
