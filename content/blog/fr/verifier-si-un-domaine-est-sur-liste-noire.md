---
title: "Comment vérifier si votre domaine email est sur liste noire (et en sortir)"
seoTitle: "Blacklist email : vérifier et retirer votre domaine"
description: "Vérifiez si votre domaine ou votre IP d'envoi est sur liste noire : codes d'erreur SMTP, requêtes DNSBL et étapes pour obtenir le retrait de la blacklist."
slug: verifier-si-un-domaine-est-sur-liste-noire
date: 2026-11-07
updated: 2026-11-07
keyword: vérifier si un domaine est sur liste noire
image: /blog/covers/fr/verifier-si-un-domaine-est-sur-liste-noire.webp
imageAlt: "Bannière technique bleu foncé sur la vérification de liste noire email, les requêtes DNSBL et les étapes de retrait"
cta: "Vérifiez votre liste avant le prochain envoi"
---

Peu de choses perturbent autant l'envoi d'emails qu'une chute soudaine de la délivrabilité. Un matin, vos campagnes obtiennent un engagement normal. Le lendemain, les taux d'ouverture tombent presque à zéro, les réponses disparaissent et votre file d'envoi se remplit de messages de rejet :

```text
550 5.7.1 Service unavailable; client [198.51.100.24] blocked using zen.spamhaus.org
554 5.7.1 Access denied; sender IP listed in Barracuda Reputation Network
```

Quand les serveurs de réception rejettent vos messages avant même de lire l'objet ou le corps du message, votre adresse IP d'envoi ou votre domaine figure sur une liste noire DNS (DNSBL, souvent appelée blacklist email ou RBL).

Une inscription sur liste noire n'est pas un filtre de contenu temporaire. C'est un blocage direct au niveau du réseau. Les grands réseaux de réception (dont Google Workspace, Microsoft 365, Yahoo Mail et les passerelles de messagerie d'entreprise) interrogent ces bases en temps réel dès le début de l'échange SMTP. Si votre IP ou votre domaine est signalé, la connexion s'arrête immédiatement.

Voici comment fonctionnent les listes noires email, comment vérifier si votre domaine ou votre IP figure dans les principales bases anti-spam, comment demander un retrait qui aboutit et comment protéger votre réputation d'expéditeur contre de nouvelles inscriptions.

---

## Blocage par liste noire ou filtre anti-spam : quelle différence ?

Avant de chercher une solution, identifiez si vous avez affaire à une inscription sur liste noire ou à un classement dans le dossier spam.

| Caractéristique | Liste noire DNSBL / RBL | Filtre anti-spam du fournisseur de messagerie |
| --- | --- | --- |
| **Moment de détection** | Début de l'échange SMTP (phase de connexion) | Analyse après la livraison (tri dans la boîte) |
| **Réponse du serveur** | Hard bounce (code `550` ou `554`) ou connexion coupée | Accepté avec le code `250 OK` |
| **Ce que voit le destinataire** | Il ne reçoit jamais l'email | L'email arrive dans son dossier spam |
| **Portée** | Tous les serveurs de messagerie qui utilisent cette DNSBL | Un seul fournisseur de messagerie (par exemple, Gmail seulement) |
| **Cause principale** | Pièges à spam touchés, taux de rebond élevés, relais ouverts | Faible engagement, texte qui ressemble à du spam, SPF/DKIM absents |
| **Solution** | Demande de retrait officielle auprès de l'opérateur de la liste | Warm-up du domaine, nettoyage de la liste, reconstruction de la réputation |

Si vos messages arrivent dans le dossier spam mais affichent le statut `250 OK` dans les journaux de votre serveur, votre domaine n'est pas sur une DNSBL. C'est le fournisseur de messagerie du destinataire qui trie votre message selon ses scores de réputation.

Si votre serveur reçoit des rejets définitifs qui citent des noms de listes noires précis, votre domaine ou votre IP figure sur une DNSBL. Il faut corriger le problème tout de suite.

---

## Comment vérifier si votre domaine ou votre IP est sur liste noire

Pour vérifier une inscription sur liste noire, vous interrogez les serveurs DNSBL. Vous regardez si votre IP d'envoi ou votre domaine renvoie un enregistrement positif. Vous pouvez le faire avec un outil qui interroge plusieurs RBL à la fois, ou avec des requêtes DNS manuelles depuis votre terminal.

### 1. Les outils automatiques multi-RBL

Les services de recherche multi-RBL interrogent des dizaines de listes noires publiques en même temps, en quelques secondes. Les outils gratuits les plus fiables sont :

- **MXToolbox Blacklist Check** : analyse plus de 100 DNSBL pour votre IP d'envoi ou votre nom de domaine.
- **DNSChecker Email Blacklist** : recherche rapide et simultanée sur plus de 50 bases DNSBL et SURBL.
- **MultiRBL (valli.org)** : un outil léger, pensé pour les développeurs, qui interroge plus de 200 listes noires.

Pour lancer une analyse, saisissez votre adresse IP d'envoi (l'IP de votre serveur de messagerie, pas celle du Wi-Fi de votre bureau) ou votre domaine d'envoi (par exemple `company.com`).

```youtube
wOIJHhHZt04
Vidéo : [How To Use Email Blacklist Checker or Spam Database Lookup Tool](https://www.youtube.com/watch?v=wOIJHhHZt04) par InboxAlly: Mastering Email Deliverability
```

### 2. Vérifications DNSBL manuelles en ligne de commande (pour les administrateurs système)

Les outils web automatiques sont pratiques. Les requêtes manuelles avec `dig` ou `nslookup` vous donnent une réponse brute, sans cache, directement depuis les serveurs de noms de l'opérateur de la liste noire.

Les listes noires DNS utilisent la notation d'adresse IP inversée décrite dans la [RFC 5782 de l'IETF](https://datatracker.ietf.org/doc/html/rfc5782). Pour interroger une liste noire à la main :

1. Inversez les quatre octets de votre adresse IPv4 d'envoi. Par exemple, si l'IP de votre serveur est `198.51.100.24`, la chaîne inversée est `24.100.51.198`.
2. Ajoutez le domaine racine de la DNSBL (par exemple `zen.spamhaus.org`).
3. Lancez une requête DNS standard de type `A` avec `dig` :

```bash
# Query Spamhaus ZEN for IP 198.51.100.24
dig +short 24.100.51.198.zen.spamhaus.org

# Query Barracuda Reputation Block List (BRBL)
dig +short 24.100.51.198.b.barracudacentral.org

# Query SpamCop (SCBL)
dig +short 24.100.51.198.bl.spamcop.net
```

#### Lire le code de retour

- **Aucune réponse / `NXDOMAIN`** : votre IP est propre. La liste noire n'a aucun enregistrement négatif pour votre adresse.
- **Réponse `127.0.0.X`** : votre IP est inscrite. Le dernier octet indique la catégorie de l'inscription :

```text
127.0.0.2 -> SBL (Spamhaus Block List: Verified spam source or trap hit)
127.0.0.4 -> XBL (Exploit Block List: Compromised server, malware, or open proxy)
127.0.0.10 -> PBL (Policy Block List: Residential/dynamic IP that should not send direct MX mail)
```

Dans ce bloc, SBL désigne une source de spam vérifiée ou un piège à spam touché. XBL désigne un serveur compromis, un logiciel malveillant ou un proxy ouvert. PBL désigne une IP résidentielle ou dynamique qui ne devrait pas envoyer de courrier directement aux serveurs MX.

Pour vérifier si votre nom de domaine (et non votre IP d'envoi) est signalé sur une liste noire de domaines (DBL), interrogez directement le nom de domaine :

```bash
# Query Spamhaus Domain Blocklist (DBL)
dig +short company.com.dbl.spamhaus.org
```

Une réponse `127.0.1.2` indique que le nom de domaine lui-même est signalé comme domaine de spam. Les fournisseurs de messagerie rejettent alors vos messages même si vous changez d'adresse IP d'envoi.

---

## Les 5 listes noires qui comptent vraiment

Il existe des centaines de listes noires email publiques et privées. Seules quelques-unes décident vraiment si vos emails arrivent dans les boîtes de réception.

Beaucoup de petites listes noires sans audience (comme des listes tenues par des amateurs ou des services qui font payer le retrait) sont ignorées par les grands fournisseurs de messagerie. Une inscription sur une liste obscure que personne n'utilise ne nuira pas à votre délivrabilité.

Concentrez-vous sur les listes principales :

### 1. Spamhaus (ZEN : SBL, XBL, CSS, DBL)

Spamhaus est l'organisation anti-spam la plus influente au monde. Ses données protègent plus de 3 milliards de boîtes mail, dont de grands réseaux de télécommunications, des passerelles de messagerie d'entreprises du Fortune 500 et des fournisseurs de messagerie grand public.

- **SBL (Spamhaus Block List)** : vise les sources de spam vérifiées, les listes d'envoi non confirmées et les expéditeurs qui touchent des pièges à spam.
- **XBL (Exploit Block List)** : vise les serveurs infectés par des failles exploitées par des tiers, des botnets et des logiciels malveillants.
- **DBL (Domain Block List)** : signale les domaines trouvés dans des messages de spam, des leurres de phishing ou chez des hébergeurs qui tolèrent les abus.
- **ZEN** : la zone combinée qui regroupe les enregistrements SBL, SBLCSS, XBL et PBL.

Une inscription chez Spamhaus est une urgence. Elle bloque vos envois vers les grands serveurs d'entreprise et les fournisseurs d'accès à Internet du monde entier.

### 2. Barracuda (BRBL)

La Barracuda Reputation Block List (`b.barracudacentral.org`) est gérée par Barracuda Networks. Elle s'appuie sur les données de trafic collectées par des milliers de passerelles Barracuda Email Security Gateway installées dans les réseaux d'entreprise.

Si vous faites de la prospection B2B en cold email ou du marketing par email vers les entreprises, une inscription chez Barracuda provoque tout de suite des rebonds chez les destinataires qui utilisent les filtres de sécurité Barracuda, sur site ou dans le cloud.

### 3. SpamCop (SCBL)

SpamCop gère l'une des plus anciennes listes noires basées sur les signalements (`bl.spamcop.net`). Les expéditeurs sont ajoutés automatiquement quand des destinataires signalent leurs emails comme spam ou quand des pièges automatiques reçoivent des messages non sollicités.

Contrairement à Spamhaus, les inscriptions SpamCop sont dynamiques et de courte durée. Elles expirent en général automatiquement en 24 à 48 heures, une fois que les plaintes passent sous le seuil.

### 4. Invaluement (ivmURI, ivmSIP)

Invaluement est une base de réputation commerciale de niveau entreprise. Elle est souvent utilisée par les filtres de messagerie d'entreprise à fort volume et par les logiciels de sécurité. Elle est connue pour détecter vite le snowshoe spamming (le spam réparti sur de grands blocs d'adresses IP) et pour suivre la réputation des URL au niveau du domaine.

### 5. Pourquoi vous pouvez ignorer UCEPROTECT Level 3

Quand ils utilisent des outils multi-RBL, beaucoup d'expéditeurs s'inquiètent en voyant une inscription en rouge vif sur **UCEPROTECT Level 3**.

UCEPROTECT Level 3 inscrit des sous-réseaux entiers et des numéros de système autonome (ASN), et non des IP d'envoi individuelles. Si un autre client de votre hébergeur cloud (comme DigitalOcean, AWS, Linode ou Hetzner) envoie du spam, UCEPROTECT signale des milliers d'adresses IP voisines et propres chez tout l'hébergeur.

Comme cette liste touche beaucoup d'expéditeurs innocents, les grands fournisseurs de messagerie (dont Google, Microsoft et Yahoo) ne l'utilisent pas pour leurs décisions de livraison. Les ingénieurs en délivrabilité et les postmasters ignorent largement les inscriptions Level 3. Ne payez pas les frais de retrait demandés par des services qui font payer la suppression.

---

## La procédure de retrait étape par étape

Si votre vérification confirme une inscription active sur une base principale, suivez ces quatre étapes.

```
[ Step 1: Halt Outbound Queues ]
             │
             ▼
[ Step 2: Audit Root Cause & Logs ]
             │
             ▼
[ Step 3: Implement Technical Fixes ]
             │
             ▼
[ Step 4: Submit Delisting Request ]
```

Les quatre étapes du schéma sont : arrêter les files d'envoi, rechercher la cause dans les journaux, appliquer les corrections techniques et envoyer la demande de retrait.

### Étape 1 : arrêtez les envois tout de suite

N'envoyez pas de demande de retrait tant que votre serveur envoie encore des messages. Si vous demandez le retrait alors que votre serveur touche encore des pièges à spam ou génère des rebonds, votre demande sera refusée. Votre IP sera aussi signalée comme récidiviste qui ne coopère pas.

- Mettez en pause vos séquences d'envoi automatiques et vos campagnes de cold email.
- Vérifiez la file d'attente de votre serveur (`mailq` sur Postfix) pour repérer un afflux de spam sortant causé par des comptes piratés ou des formulaires de contact vulnérables.

### Étape 2 : trouvez et corrigez la cause

Les listes noires n'inscrivent pas une IP sans événement déclencheur. Examinez vos journaux et votre infrastructure pour savoir lequel de ces quatre déclencheurs courants a causé l'inscription :

1. **Pièges à spam purs** : vous avez écrit à des adresses qui n'ont jamais appartenu à une personne. Ces adresses sont publiées uniquement pour attraper les robots qui collectent des adresses sur le web. Si vous avez acheté une liste de leads ou extrait des pages de contact sans vérification, vous avez probablement touché un piège pur.
2. **Taux de rebond élevés** : votre taux de rebond a dépassé un seuil situé entre 2,0 % et 5,0 %, ce qui indique des contacts obsolètes, non vérifiés ou inventés.
3. **Identifiants piratés** : un compte utilisateur de votre serveur a été piraté et utilisé pour relayer du phishing ou du spam.
4. **Authentification absente** : votre domaine n'a pas d'enregistrements SPF et DKIM alignés, ce qui permet à des tiers d'usurper votre nom de domaine.

### Étape 3 : envoyez les demandes de retrait aux organismes principaux

Une fois le problème réglé et vos journaux propres, envoyez des demandes de retrait officielles directement sur les portails officiels :

#### Retrait chez Spamhaus
1. Allez sur le [Spamhaus IP and Domain Reputation Checker](https://check.spamhaus.org/) officiel.
2. Saisissez l'adresse IP ou le domaine inscrit.
3. Lisez le code et la description exacts de l'inscription fournis par Spamhaus.
4. Cliquez sur le bouton **Request Removal** et remplissez le formulaire de vérification.
5. Indiquez une adresse email d'administration active sur votre domaine. Les premiers retraits pour des expéditeurs propres sont en général traités en 1 à 4 heures.

#### Retrait chez Barracuda
1. Allez sur le [Barracuda Central Reputation System](https://www.barracudacentral.org/lookups).
2. Saisissez l'adresse IP de votre serveur de messagerie.
3. Ouvrez le formulaire **Barracuda Removal Request**.
4. Indiquez vos coordonnées et expliquez de façon claire et factuelle les corrections effectuées. Le délai habituel est de 12 à 24 heures.

#### Retrait chez SpamCop
- Pour [SpamCop](https://www.spamcop.net/bl.shtml), une demande manuelle est rarement nécessaire. Si vous avez arrêté le flux d'envoi en cause, SpamCop retire automatiquement l'inscription 24 à 48 heures après la dernière plainte signalée.

### Ce qu'il faut écrire dans une demande de retrait (et ce qu'il ne faut PAS dire)

Les demandes de retrait sont examinées par des ingénieurs réseau expérimentés. La façon dont vous présentez votre demande décide si elle est acceptée :

> **N'écrivez pas :**  
> *« Nous sommes une entreprise légitime et il s'agit d'une erreur urgente. Vous nous faites perdre de l'argent. Retirez notre IP immédiatement. »*  
> (Ce message n'apporte aucune garantie technique et passe en bas de la pile.)

> **Écrivez plutôt :**  
> *« Nous avons identifié une liste marketing non vérifiée, importée le 24 octobre, qui a provoqué des pics de rebonds et de plaintes. Les envois ont été arrêtés immédiatement. Nous avons supprimé tous les contacts non vérifiés, mis en place un nettoyage automatique des listes avant envoi pour éliminer les adresses invalides et jetables, et vérifié l'alignement de nos SPF et DKIM. Notre file d'envoi est propre. »*

---

## Comment rester hors des listes noires

Obtenir le retrait ne règle que la moitié du problème. Si vos habitudes d'envoi ne changent pas, votre domaine reviendra sur les mêmes listes noires en quelques jours.

Protéger votre réputation d'expéditeur demande trois mesures permanentes :

### 1. Imposez une authentification stricte des emails

Les flux d'emails non authentifiés sont exposés à l'usurpation de domaine. Si un spammeur utilise votre nom de domaine dans l'en-tête `From:` d'une campagne de phishing, c'est la réputation de votre domaine qui en paie le prix.

- **SPF (Sender Policy Framework)** : indiquez précisément quels serveurs de messagerie peuvent envoyer au nom de votre domaine. Vérifiez votre configuration avec notre [vérificateur SPF](/spf-checker) gratuit.
- **DKIM (DomainKeys Identified Mail)** : signez chaque message sortant avec une clé de 2048 bits. Vous pouvez créer des clés DNS propres avec notre [générateur DKIM](/dkim-generator).
- **DMARC** : demandez aux serveurs de réception de rejeter les messages non autorisés qui prétendent venir de votre domaine.

### 2. Surveillez les taux de rebond et les données SMR

Gardez votre taux de rebond strictement sous 2,0 %. Un taux de rebond au-dessus de 3,0 % révèle une liste mal entretenue. Un taux au-dessus de 5,0 % déclenche une inscription automatique sur liste noire par les filtres d'entreprise.

- Mesurez et comparez vos statistiques de livraison passées avec notre [calculateur de taux de rebond](/bounce-rate-calculator).
- Distinguez les problèmes temporaires de serveur des adresses définitivement invalides avec notre article [hard bounce et soft bounce](/blog/hard-bounce-vs-soft-bounce).

### 3. Nettoyez chaque liste de leads avant l'envoi

Plus de 85 % des inscriptions sur liste noire viennent de pièges à spam purs touchés ou d'envois répétés vers des boîtes mail supprimées.

Les listes de prospects extraites du web, les bases CRM anciennes et les inscriptions aux webinaires contiennent souvent des domaines avec des fautes de frappe, des adresses jetables temporaires et des adresses abandonnées devenues des pièges à spam recyclés.

Avant d'importer des listes de contacts dans votre plateforme d'envoi ou votre outil de cold email, faites passer les adresses par une vérification dédiée. Vous pouvez tester une adresse avec notre [vérificateur d'adresse mail gratuit](/email-checker) ou repérer les domaines jetables avec notre [vérificateur d'adresse mail jetable](/disposable-email-checker). Le nettoyage de liste retire les domaines morts, les erreurs de syntaxe, les fournisseurs d'adresses temporaires et les réseaux de pièges connus avant que votre serveur ne leur écrive.

---

## Questions fréquentes

### Combien de temps faut-il pour qu'un retrait de liste noire prenne effet ?
Une fois que l'opérateur a accepté votre demande de retrait, ses serveurs DNSBL se mettent à jour presque immédiatement. Mais les serveurs de réception gardent les enregistrements DNS en cache. Selon la durée de vie DNS (TTL) choisie par le serveur de réception, il faut en général entre 2 et 24 heures pour que la livraison normale reprenne sur tous les réseaux.

### Mon domaine peut-il être mis sur liste noire si j'utilise un fournisseur reconnu comme Google Workspace ou SendGrid ?
Oui. Les fournisseurs de services d'email gèrent l'infrastructure, mais vous restez responsable des adresses auxquelles vous écrivez. Si vous envoyez du cold email ou des listes non vérifiées par Google Workspace ou SendGrid et que vous touchez des pièges à spam, Spamhaus peut inscrire votre domaine d'envoi sur la Domain Blocklist (DBL). Vos emails sont alors rejetés, quelle que soit la plateforme d'envoi.

### Dois-je changer de nom de domaine si mon domaine est sur liste noire ?
Non. Abandonner un domaine sur liste noire pour en enregistrer un nouveau est une erreur. Un domaine tout neuf n'a aucune réputation d'expéditeur. Les fournisseurs de messagerie lui appliquent des limites de débit strictes et du greylisting. Il est plus rapide, et meilleur pour votre délivrabilité à long terme, de corriger la cause, de nettoyer votre liste d'abonnés et de terminer la procédure de retrait officielle sur votre domaine existant.
