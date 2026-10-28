---
title: BIMI
description: Ce qu’est BIMI dans l’e-mail, comment afficher votre logo dans Gmail, ce qu’il faut avant (DMARC, logo SVG, certificat) et l’enregistrement BIMI.
slug: bimi
date: 2026-10-12
updated: 2026-10-12
keyword: bimi email
short: BIMI est une norme e-mail qui affiche le logo de votre marque à côté de vos e-mails, dans les boîtes de réception qui la prennent en charge. Elle ne fonctionne que si votre domaine est déjà protégé par DMARC.
related: dmarc, dkim, spf, email-spoofing, dns-txt-record, domain-reputation
cta: Votre logo s’affiche. Assurez-vous que vos e-mails arrivent
---

## Qu’est-ce que BIMI dans l’e-mail ?

BIMI signifie Brand Indicators for Message Identification. C’est une norme e-mail qui affiche le logo d’une marque à côté de ses e-mails. Le logo s’affiche dans le petit cercle qui montre d’habitude l’initiale de l’expéditeur. Il n’apparaît que dans les boîtes de réception qui prennent BIMI en charge.

BIMI ne remplace aucun contrôle de sécurité. Il s’appuie sur [DMARC](/glossary/dmarc). Le logo ne s’affiche que pour les e-mails qui passent DMARC.

## Un exemple dans Gmail

Ouvrez l’application Gmail. À gauche de chaque e-mail, il y a un petit cercle. Pour la plupart des expéditeurs, le cercle montre une lettre ou une photo de profil.

Prenons une marque fictive, Boulangerie Martin, avec le domaine exemple.com. Elle a publié un enregistrement BIMI et obtenu un certificat. Quand vous recevez sa newsletter, le cercle affiche le logo de la boulangerie. Avec un certificat VMC, Gmail ajoute aussi une coche bleue à côté du nom de l’expéditeur.

## Ce qu’il faut avant d’utiliser BIMI

Il faut trois choses.

**1. DMARC en mode application.** Votre politique DMARC doit être `p=quarantine` ou `p=reject`. Google indique que BIMI ne fonctionne pas avec une politique `p=none`. Vos e-mails doivent aussi passer DMARC, grâce à [SPF](/glossary/spf) ou [DKIM](/glossary/dkim).

**2. Un logo au format SVG Tiny PS.** SVG est un format d’image fait de formes, pas de pixels. SVG Tiny PS est une version réduite de ce format, faite pour s’afficher sans risque dans une boîte de réception. Le logo doit être carré et contenir un titre avec le nom de la marque. Les scripts, les images intégrées, les animations et les liens vers des fichiers externes sont interdits. Le fichier doit rester sous 32 Ko.

**3. Un certificat de marque pour Gmail.** Un certificat est un fichier émis par un organisme qui confirme que le logo vous appartient. Il en existe deux types.

| Certificat | Ce qu’il faut | Ce que Gmail affiche |
|---|---|---|
| VMC (Verified Mark Certificate) | Une marque déposée | Le logo et une coche bleue |
| CMC (Common Mark Certificate) | Pas de marque déposée | Le logo, sans coche |

Les certificats viennent d’une courte liste d’autorités de certification. Google publie la liste de celles qu’il accepte.

## L’enregistrement BIMI

L’enregistrement BIMI est un [enregistrement DNS TXT](/glossary/dns-txt-record). Le DNS est l’annuaire public d’Internet qui relie les noms de domaine aux serveurs. Un enregistrement TXT est une ligne de texte publiée dans ce DNS. L’enregistrement BIMI se place à l’adresse `default._bimi.exemple.com`. Voici un exemple :

```
v=BIMI1; l=https://exemple.com/bimi/logo.svg; a=https://exemple.com/bimi/cert.pem
```

- `v=BIMI1` indique qu’il s’agit d’un enregistrement BIMI.
- `l=` est l’adresse HTTPS de votre logo SVG.
- `a=` est l’adresse HTTPS de votre certificat VMC ou CMC, un fichier PEM.

Le mot `default` dans l’adresse est le sélecteur. La plupart des marques n’en ont besoin que d’un. Un autre sélecteur ne sert que si vous voulez des logos différents selon le type d’e-mail.

## Quelles boîtes de réception affichent BIMI

Chaque fournisseur a ses propres règles.

- **Gmail** affiche le logo seulement avec un certificat VMC ou CMC.
- **Apple Mail** affiche le logo seulement avec un certificat VMC.
- **Yahoo et Fastmail** peuvent afficher un logo à partir d’un enregistrement sans certificat.

Si votre logo ne s’affiche pas, les causes les plus fréquentes sont connues. DMARC est encore à `p=none`. Le logo n’est pas un SVG Tiny PS valide. Le certificat manque ou a expiré. Ou la boîte de réception ne prend pas BIMI en charge. Les fournisseurs peuvent aussi mettre un certain temps à lire un nouvel enregistrement.

## Comment configurer BIMI

1. Passez votre politique DMARC à `p=quarantine` ou `p=reject`.
2. Préparez votre logo en SVG Tiny PS et testez le fichier.
3. Choisissez un certificat, VMC ou CMC, selon que votre logo est une marque déposée.
4. Mettez le logo et le certificat en ligne à des adresses HTTPS.
5. Publiez l’enregistrement TXT à `default._bimi` sur votre domaine.

Notre [générateur BIMI](/bimi-generator) crée l’enregistrement. Il vérifie aussi votre logo SVG dans votre navigateur, avant que vous achetiez un certificat.

## BIMI et vérification d’email

BIMI ne fait pas arriver vos e-mails dans la boîte de réception. Il affiche un logo sur les e-mails qui y arrivent déjà. La [vérification d’email](/) agit avant l’envoi. Elle retire les adresses qui n’existent pas, donc vos e-mails font moins de hard bounces. Vous pouvez [vérifier une adresse mail](/email-checker) ou passer toute la liste dans la [vérification d’email en masse](/bulk-email-verifier).
