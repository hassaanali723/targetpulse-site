---
title: Enregistrement TXT DNS
description: Ce qu’est un enregistrement TXT DNS, à quoi il sert pour l’e-mail (SPF, DKIM et DMARC), comment en ajouter un, les règles qui le cassent et comment le vérifier. Avec des exemples.
slug: enregistrement-txt-dns
date: 2026-10-22
updated: 2026-10-22
keyword: enregistrement txt
short: Un enregistrement TXT DNS est une ligne de texte enregistrée dans les réglages de votre domaine. Les serveurs de messagerie lisent les enregistrements TXT pour contrôler SPF, DKIM et DMARC. D’autres services les lisent pour confirmer que le domaine vous appartient.
related: spf, dkim, dmarc, mx-record, ptr-record, bimi
cta: Vos enregistrements sont en place. Vérifiez maintenant les adresses auxquelles vous écrivez
---

## Qu’est-ce qu’un enregistrement TXT DNS ?

Un enregistrement TXT DNS est une ligne de texte enregistrée dans les réglages de votre domaine. Tout le monde sur Internet peut la lire.

D’abord, ce qu’est le DNS. DNS signifie Domain Name System. Il fonctionne comme un annuaire téléphonique public pour les domaines. Quand quelqu’un tape votre domaine, le DNS dit à son ordinateur où le trouver. Le DNS contient plusieurs types d’entrées, appelées enregistrements. Chaque type d’enregistrement a un rôle.

Un enregistrement TXT contient du texte simple. Il n’envoie personne nulle part. C’est une note attachée à votre domaine. D’autres systèmes lisent la note et agissent en fonction.

## À quoi servent les enregistrements TXT

Pour l’e-mail, les enregistrements TXT contiennent les règles qui prouvent que vos e-mails sont authentiques.

| Usage | Où se place l’enregistrement | Exemple de valeur |
|---|---|---|
| **[SPF](/glossary/spf)** | votre domaine, par exemple `example.com` | `v=spf1 include:_spf.google.com ~all` |
| **[DKIM](/glossary/dkim)** | `selector._domainkey.example.com` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
| **[DMARC](/glossary/dmarc)** | `_dmarc.example.com` | `v=DMARC1; p=none; rua=mailto:reports@example.com` |
| **Propriété du domaine** | votre domaine | `google-site-verification=abc123...` |

Les valeurs ci-dessus sont des exemples raccourcis. Vos vraies valeurs viennent de votre fournisseur de messagerie ou du service que vous connectez.

## Un exemple simple

Voici comment on ajoute un enregistrement TXT.

1. **Marco commence à utiliser Google Workspace.** Il veut que ses e-mails envoyés depuis marco@studio.example arrivent en boîte de réception.
2. **Google lui donne une valeur.** Le guide de configuration lui demande d’ajouter un enregistrement SPF avec `v=spf1 include:_spf.google.com ~all`.
3. **Marco ouvre les réglages de son domaine.** Il se connecte là où il a acheté le domaine. On appelle cela le registrar ou l’hébergeur DNS.
4. **Il ajoute un enregistrement TXT.** Il choisit le type TXT, laisse le nom sur son domaine et colle la valeur.
5. **Il attend.** La modification peut prendre de quelques minutes à quelques heures pour être visible partout.
6. **Les serveurs peuvent maintenant le contrôler.** Quand Marco envoie un e-mail, le serveur de réception lit son enregistrement TXT. Il voit que les serveurs de Google ont le droit d’envoyer pour studio.example.

## Les règles qui cassent un enregistrement TXT

La plupart des problèmes avec les enregistrements TXT viennent de quelques erreurs simples.

- **Un seul enregistrement SPF par domaine.** Si un domaine a deux enregistrements TXT qui commencent par `v=spf1`, SPF échoue. Fusionnez-les en un seul enregistrement.
- **Les valeurs longues sont découpées.** Un morceau de texte dans un enregistrement TXT peut contenir jusqu’à 255 caractères. Les valeurs longues, comme les clés DKIM, sont stockées en plusieurs morceaux. La plupart des hébergeurs DNS le font pour vous.
- **Utilisez le nom exact.** Un enregistrement DMARC doit se trouver sur `_dmarc`, pas sur votre domaine principal. Un enregistrement DKIM doit se trouver sur le nom de sélecteur que votre fournisseur vous donne.
- **Copiez la valeur exactement.** Un seul caractère manquant rend l’enregistrement inutile.

## Comment vérifier un enregistrement TXT

Vous pouvez lire les enregistrements TXT de n’importe quel domaine. Sur un Mac ou un ordinateur Linux, ouvrez le terminal et tapez `dig TXT example.com`. Sous Windows, tapez `nslookup -type=TXT example.com`.

Vous pouvez aussi utiliser notre [vérificateur SPF](/spf-checker). Il lit l’enregistrement SPF d’un domaine et explique ce qu’il autorise.

## Le lien entre les enregistrements TXT et la vérification

Les enregistrements TXT protègent les e-mails que vous envoyez. Ils prouvent que l’e-mail vient de vous. Ils ne disent rien sur le fait que la personne à qui vous écrivez a toujours une boîte.

C’est un autre contrôle. Un [vérificateur d’email](/email-checker) demande au serveur de réception si une adresse existe. Il vous faut les deux : des enregistrements corrects sur votre domaine et une liste propre d’adresses réelles.
