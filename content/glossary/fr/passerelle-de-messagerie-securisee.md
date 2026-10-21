---
title: Passerelle de messagerie sécurisée (SEG)
description: Ce qu’est une passerelle de messagerie sécurisée, comment elle filtre le courrier avant la boîte d’une entreprise, comment la repérer dans l’enregistrement MX et son effet sur la vérification.
slug: passerelle-de-messagerie-securisee
date: 2026-10-22
updated: 2026-10-22
keyword: passerelle de messagerie sécurisée
short: Une passerelle de messagerie sécurisée, ou SEG (secure email gateway), est un filtre placé devant les boîtes d’une entreprise. Elle contrôle chaque e-mail entrant pour trouver le spam, le phishing et les fichiers dangereux avant que quelqu’un le reçoive. Mimecast, Proofpoint et Barracuda sont des exemples courants.
related: spam-filter, mx-record, catch-all-email, greylisting, email-spoofing, dmarc
cta: Vérifiez les adresses derrière une passerelle de messagerie sécurisée
---

## Qu’est-ce qu’une passerelle de messagerie sécurisée ?

Une passerelle de messagerie sécurisée, ou SEG (secure email gateway), est un filtre de sécurité pour les e-mails d’une entreprise. Elle se place entre Internet et les boîtes de l’entreprise.

Chaque e-mail envoyé à l’entreprise passe d’abord par la passerelle. La passerelle l’analyse. Elle cherche le spam, les liens de phishing et les pièces jointes dangereuses. Les e-mails sûrs continuent vers la boîte. Les e-mails dangereux sont bloqués ou mis de côté.

Les grandes entreprises, les banques, les hôpitaux et les administrations utilisent souvent une passerelle. Parmi les produits les plus connus, on trouve Mimecast, Proofpoint et Barracuda.

## Un exemple simple

1. **Daniel écrit à une banque.** Daniel vend un logiciel. Il écrit à une responsable dans une banque.
2. **La passerelle reçoit l’e-mail en premier.** Le courrier de la banque passe par une passerelle Proofpoint.
3. **La passerelle l’analyse.** Elle contrôle les liens et la pièce jointe de l’e-mail de Daniel.
4. **L’e-mail est livré.** Rien ne semble dangereux, donc la passerelle le transmet à la boîte de réception de la responsable.

Daniel ne voit jamais la passerelle. Si son e-mail avait contenu un lien dangereux, il aurait été arrêté là.

## Comment repérer une passerelle

Regardez l’[enregistrement MX](/glossary/mx-record) du domaine. L’enregistrement MX indique quel serveur reçoit les e-mails d’un domaine. Quand une passerelle est utilisée, l’enregistrement MX pointe vers la passerelle et non vers le fournisseur de messagerie.

| Passerelle | L’enregistrement MX se termine souvent par |
|---|---|
| **Mimecast** | `mimecast.com` |
| **Proofpoint** | `pphosted.com` |
| **Barracuda** | `barracudanetworks.com` |

Vous pouvez consulter l’enregistrement MX de n’importe quel domaine avec un outil de recherche MX.

## Pourquoi les passerelles influencent la vérification d’email

Un vérificateur d’email demande au serveur de réception si une adresse existe. Sur un domaine avec une passerelle, c’est la passerelle qui répond à la place du vrai serveur de messagerie.

Certaines passerelles refusent de répondre aux contrôles. La plupart des outils donnent alors « inconnu », même quand la personne est réelle. D’autres passerelles répondent oui à toutes les adresses. Le résultat ressemble alors à celui d’un domaine [catch-all](/glossary/catch-all-email).

Cela touche surtout les listes B2B, car les contacts qui travaillent dans de grandes entreprises sont souvent derrière une passerelle.

## Comment un vérificateur aide

Giggal.ai reconnaît 15 passerelles nommées, dont Mimecast, Proofpoint et Barracuda, et donne un vrai résultat pour les adresses qui se trouvent derrière. Pour voir comment cela fonctionne étape par étape, lisez [comment vérifier des e-mails derrière une passerelle de messagerie sécurisée](/blog/how-to-verify-emails-behind-secure-email-gateways).
