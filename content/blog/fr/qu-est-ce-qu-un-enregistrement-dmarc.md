---
title: "Qu'est-ce qu'un enregistrement DMARC ?"
seoTitle: "Enregistrement DMARC : balises, exemples et rapports (2026)"
description: "Un enregistrement DMARC est un TXT à _dmarc.votredomaine qui dit quoi faire du courrier non authentifié. Chaque balise de la norme 2026, avec exemples."
slug: qu-est-ce-qu-un-enregistrement-dmarc
date: 2026-10-19
updated: 2026-10-19
keyword: enregistrement dmarc
image: /blog/covers/fr/qu-est-ce-qu-un-enregistrement-dmarc.webp
imageAlt: Guide sur l'enregistrement DMARC avec le détail des balises et un aperçu des politiques
cta: Protégez votre domaine, puis gardez vos rebonds bas
---

Un enregistrement DMARC est une courte ligne de texte que vous ajoutez dans les réglages DNS de votre domaine. Il dit aux autres serveurs de messagerie quoi faire d'un email qui prétend venir de votre domaine mais qui échoue aux contrôles de sécurité. Il leur dit aussi où vous envoyer des rapports sur les emails qu'ils reçoivent en votre nom.

**En une phrase :** DMARC est une règle publique qui dit « si un email prétend venir de mon domaine mais ne vient pas vraiment de moi, mettez-le en spam ou bloquez-le, et envoyez-moi un rapport ».

## DMARC expliqué avec un exemple

### Le problème

N'importe qui peut envoyer un email et mettre votre adresse dans la ligne From. Imaginons que votre domaine soit `example.com`. Un escroc envoie cet email à votre client :

```text
From: billing@example.com
Subject: Your invoice is overdue
Pay here: http://pay-now.example.net
```

Votre client voit `example.com` et lui fait confiance. Mais vous n'avez jamais envoyé cet email.

### Les deux contrôles qui existent déjà

Les fournisseurs de messagerie comme Gmail et Outlook peuvent déjà faire deux contrôles sur chaque email :

- **SPF :** cet email vient-il d'un serveur que `example.com` autorise à envoyer ses emails ?
- **DKIM :** cet email porte-t-il la signature numérique de `example.com` ?

Seuls, ces contrôles ont une faille. L'escroc peut les réussir pour son propre domaine, alors que la ligne From affiche toujours le vôtre. Rien ne relie le contrôle à l'adresse que voit votre client.

### Ce qu'ajoute DMARC

DMARC ajoute une règle. SPF ou DKIM doit réussir pour le même domaine que celui affiché dans la ligne From. Cette correspondance s'appelle l'**alignement**. Si aucun des deux contrôles ne réussit pour ce domaine, l'email échoue à DMARC.

DMARC vous permet aussi de décider de ce qui arrive à un email qui échoue.

### Un enregistrement DMARC, partie par partie

Vous ajoutez cette ligne dans les réglages DNS de `example.com` :

```text
v=DMARC1; p=reject; rua=mailto:reports@example.com
```

Voici ce que dit chaque partie :

- `v=DMARC1` : « Voici ma règle DMARC. »
- `p=reject` : « Si un email dit venir de example.com mais échoue au contrôle, bloquez-le. »
- `rua=mailto:reports@example.com` : « Envoyez-moi chaque jour un rapport sur tous ceux qui envoient des emails en mon nom. »

### Ce qui arrive au faux email

1. L'email de l'escroc venant de `billing@example.com` arrive chez Gmail.
2. Gmail fait les contrôles SPF et DKIM. Aucun ne réussit pour `example.com`.
3. Gmail lit votre enregistrement DMARC. Il indique `p=reject`.
4. Gmail bloque l'email. Votre client ne le voit jamais.

Vos vrais emails passent les mêmes contrôles, ils sont donc livrés normalement.

### Les trois choix pour p

| Réglage | Ce qui arrive à un email qui échoue à DMARC | Quand l'utiliser |
| --- | --- | --- |
| p=none | Rien. Il est livré normalement, et vous recevez des rapports. | D'abord, pendant que vous trouvez tous vos vrais expéditeurs |
| p=quarantine | Il va dans le dossier spam. | Une fois que tous vos vrais expéditeurs réussissent |
| p=reject | Il est entièrement bloqué. | Quand vous êtes sûr que rien de réel n'échouera |

### Comment la plupart des domaines le configurent

1. Commencez avec `p=none` et lisez les rapports quotidiens.
2. Trouvez chaque vrai service qui envoie des emails pour vous, comme votre outil d'emailing et votre support client. Assurez-vous que chacun réussit.
3. Passez à `p=quarantine`, puis à `p=reject`. Plus personne ne peut alors usurper votre domaine auprès des destinataires qui suivent votre politique.

La plupart des domaines commencent donc avec un enregistrement comme celui-ci, qui se contente d'observer :

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

La suite de ce guide explique plus en détail chaque partie d'un enregistrement DMARC, ainsi que les options que vous pouvez ajouter plus tard.

## SPF, DKIM et l'adresse From plus en détail

DMARC repose sur SPF et DKIM. Notre guide sur [SPF et DKIM](/blog/spf-dkim-dmarc-explained) les couvre en entier. En voici la version courte.

**SPF** est une liste des serveurs autorisés à envoyer des emails pour votre domaine. Un serveur de réception vérifie si l'email vient d'un serveur de cette liste.

**DKIM** est une signature numérique ajoutée à chaque email. Le serveur de réception vérifie la signature avec une clé publiée dans votre DNS. Si la signature est valide, l'email n'a pas été modifié en route et a été signé par votre domaine.

**L'adresse From** est l'adresse d'expéditeur que votre destinataire voit dans sa boîte de réception, par exemple `hello@example.com`. DMARC vérifie que SPF ou DKIM a réussi pour ce même domaine.

## À quoi ressemble un enregistrement DMARC

### Où il se place dans le DNS

Le DNS est la liste publique des réglages de votre domaine. Vous la modifiez chez votre hébergeur DNS, en général la société où vous avez acheté le domaine ou votre hébergeur web. Un enregistrement DMARC est un enregistrement TXT, c'est-à-dire une entrée DNS qui contient du texte simple.

Vous l'ajoutez sous le nom d'hôte `_dmarc`. La plupart des interfaces DNS ajoutent automatiquement votre domaine à la fin, et `_dmarc` devient donc `_dmarc.example.com`.

Attention à une erreur fréquente. Certaines interfaces attendent seulement `_dmarc`. Si vous y tapez le nom complet `_dmarc.example.com`, l'enregistrement se retrouve à `_dmarc.example.com.example.com`. Les serveurs de réception ne le trouveront pas à cet endroit.

### Les règles d'écriture

- **Il doit commencer par `v=DMARC1`.** Ce doit être la première partie de l'enregistrement. `DMARC1` doit être en majuscules. Si vous écrivez `v=dmarc1`, placez une autre partie en premier ou faites une faute de frappe, les serveurs de réception ignorent tout l'enregistrement. Votre domaine est alors traité comme s'il n'avait pas de politique DMARC.
- **Séparez les parties par des points-virgules.** Les espaces autour des points-virgules sont acceptés.
- **Si la politique manque.** Supposons que la partie `p` manque ou soit fausse, mais que l'enregistrement ait une adresse de rapport valide dans `rua`. Les destinataires traitent alors la politique comme `p=none`. Si `p` et `rua` manquent ou sont faux tous les deux, les destinataires ignorent complètement DMARC pour votre domaine.
- **Ne publiez qu'un seul enregistrement DMARC.** Si un serveur de réception trouve deux enregistrements TXT ou plus qui commencent par `v=DMARC1`, il les rejette tous. Cette règle vient de la [RFC 9989](https://www.rfc-editor.org/info/rfc9989), la norme DMARC actuelle. Deux enregistrements ne vous donnent pas deux politiques. Ils laissent votre domaine sans aucune protection.

### Comment vérifier votre enregistrement

Vous pouvez consulter votre enregistrement avec une commande dans le terminal de votre ordinateur :

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

Utilisez `dig` sous Linux et macOS. Il affiche votre enregistrement sur une ligne, entre guillemets. Utilisez `nslookup` sous Windows. Il affiche l'enregistrement que renvoie votre serveur DNS.

Si la commande ne renvoie rien, l'une de deux choses est vraie. Soit l'enregistrement ne s'est pas encore propagé dans le DNS, soit il a été ajouté sous le mauvais nom d'hôte.

## Chaque balise DMARC, et celles dont vous avez besoin

Chaque partie d'un enregistrement DMARC, comme `p=none`, s'appelle une balise. La norme actuelle, de mai 2026, compte onze balises.

| Balise | Ce qu'elle fait, en termes simples | Valeurs possibles | Si vous l'omettez | En avez-vous besoin ? |
| --- | --- | --- | --- | --- |
| v | Dit « ceci est un enregistrement DMARC ». Doit venir en premier. | DMARC1 | Obligatoire | Oui |
| p | Votre politique : quoi faire des emails qui échouent. Couvre votre domaine et ses sous-domaines. | none, quarantine, reject | Traitée comme none, si rua est valide | Oui |
| rua | Où envoyer les rapports de synthèse quotidiens | Une ou plusieurs adresses mailto:, séparées par des virgules | Vous ne recevez aucun rapport | Oui |
| sp | Une politique distincte pour les sous-domaines qui existent, comme news.example.com | none, quarantine, reject | Identique à p | Seulement si les sous-domaines ont besoin d'autres règles |
| np | Une politique pour les sous-domaines qui n'existent pas dans le DNS | none, quarantine, reject | Identique à sp, ou à p si sp manque | Seulement pour bloquer les sous-domaines inventés |
| adkim | Le niveau d'exactitude de la correspondance du domaine DKIM. r = souple, s = strict | r, s | r | Rarement. Le mode souple est le choix normal |
| aspf | Le niveau d'exactitude de la correspondance du domaine SPF. r = souple, s = strict | r, s | r | Rarement. Le mode souple est le choix normal |
| t | Mode test. Les destinataires appliquent votre politique un cran plus souple | y, n | n | Seulement pendant le passage à une politique plus stricte |
| ruf | Où envoyer un rapport sur chaque email en échec | Une ou plusieurs adresses mailto:, séparées par des virgules | Vous ne recevez aucun rapport | Rarement, à cause des limites liées à la vie privée |
| fo | Options pour les rapports par email | 0, 1, d, s | 0 | Seulement si vous utilisez ruf |
| psd | Marque un domaine de suffixe public | y, n, u | u | Seulement pour les suffixes publics ou les grandes organisations qui délèguent des parties de leur DNS |

Le mode souple et le mode strict fonctionnent ainsi. En mode souple, un sous-domaine compte comme une correspondance : `mail.example.com` correspond donc à `example.com`. En mode strict, les deux domaines doivent être exactement identiques.

Trois anciennes balises ont été retirées dans la norme de 2026. Ce sont la balise de pourcentage (`pct`), la balise de format de rapport (`rf`) et la balise d'intervalle de rapport (`ri`). Un `pct=100` resté en place ne pose pas de problème. Un `pct` inférieur à 100 servait à n'appliquer une politique qu'à une partie de vos emails pendant un déploiement. La nouvelle balise `t` remplit désormais ce rôle.

**Ce dont la plupart des domaines ont besoin :** seulement `v`, `p` et `rua`.

- Ajoutez `sp` ou `np` si vos sous-domaines ont besoin d'autres règles.
- Ne touchez pas à `psd`. Vous n'en avez besoin que si vous gérez une grande organisation qui délègue des parties de son DNS (`psd=n`), ou un suffixe public comme `co.uk` (`psd=y`).
- La correspondance souple (`adkim=r` et `aspf=r`) est le réglage par défaut et convient à presque tous les domaines. Vous n'avez besoin des balises d'alignement que si des règles de conformité strictes interdisent de signer avec un sous-domaine.

Vous pouvez créer un enregistrement avec ces balises, ou nettoyer un ancien enregistrement, avec notre [générateur DMARC](/dmarc-generator).

## Ce que font vraiment p=none, quarantine et reject

La balise `p` est la partie la plus importante de l'enregistrement. Elle dit aux serveurs de réception quoi faire d'un email qui échoue à DMARC. Il y a trois choix. Chacun est une étape vers une protection complète.

**p=none : observer seulement.** Les destinataires ne font rien de particulier avec les emails qui échouent. Ils sont livrés normalement, et seuls les filtres anti-spam habituels s'appliquent. Associé à des rapports dans `rua`, ce réglage est appelé Monitoring Mode (mode surveillance) dans la RFC 9989. Il vous montre chaque service qui envoie des emails au nom de votre domaine, sans aucun risque pour votre livraison.

**p=quarantine : envoyer en spam.** Les destinataires traitent les emails en échec comme suspects. Chez la plupart des fournisseurs de messagerie, ils vont dans le dossier spam du destinataire. Cela protège vos destinataires contre les faux emails. Les vrais emails d'un outil mal configuré ne sont pas perdus, parce qu'on peut encore les trouver dans le dossier spam.

**p=reject : bloquer.** Les destinataires refusent les emails en échec. La plupart le font pendant la livraison, avec un code d'erreur permanent qui commence par 5. L'email n'atteint jamais une boîte. Le serveur d'envoi reçoit à la place un message de rebond.

### Les destinataires ne suivent pas toujours votre politique

Votre politique est une demande, pas un ordre. La norme indique que les destinataires ne devraient pas refuser un email à cause de `p=reject` seul. S'ils ne savent rien d'autre sur l'email, ils devraient plutôt le traiter comme quarantine. Les fournisseurs de messagerie utilisent aussi leurs propres données de réputation d'expéditeur et leurs filtres anti-spam en plus de votre politique.

### Pourquoi reject demande DKIM, et pas seulement SPF

Le transfert casse SPF. Imaginons qu'une personne transfère son courrier professionnel vers un compte personnel. Le serveur qui transfère envoie l'email depuis sa propre adresse IP. Cette adresse ne figure pas dans votre enregistrement SPF, donc le contrôle SPF échoue.

DKIM survit au transfert. La signature voyage dans l'email lui-même, elle reste donc valide et correspond toujours à votre domaine. C'est pourquoi un domaine en `p=reject` doit utiliser DKIM et ne pas dépendre de SPF seul.

### Le mode test avec t=y

La RFC 9989 ajoute un mode test. Réglez `t=y`, et les destinataires appliquent votre politique un cran plus souple que celle que vous avez publiée :

- `reject` est traité comme `quarantine`.
- `quarantine` est traité comme `none`.

Le mode test ne change pas vos rapports. Il n'a aucun effet non plus quand votre politique est `p=none`. Il vous permet de voir comment une politique plus stricte se comporte avec de vrais emails avant de la rendre permanente.

## Les sous-domaines : sp et np

Un sous-domaine est un nom supplémentaire placé devant votre domaine, comme `marketing.example.com` ou `support.example.com`. Beaucoup d'entreprises envoient des emails depuis des sous-domaines. Les balises `sp` et `np` fixent les règles pour eux, pour tout sous-domaine qui n'a pas son propre enregistrement DMARC.

### Comment un destinataire trouve le bon enregistrement

1. Le destinataire cherche d'abord un enregistrement DMARC pour le domaine exact de la ligne From. Si vous envoyez depuis `news.example.com` et que `_dmarc.news.example.com` existe, il utilise cet enregistrement.
2. S'il n'y a pas d'enregistrement à cet endroit, il cherche votre enregistrement principal à `_dmarc.example.com`. Il le trouve en remontant le nom de domaine, une partie à la fois, vers la fin du nom. Il n'utilise pas la Public Suffix List pour cela.
3. Une fois votre enregistrement principal trouvé, il vérifie si le sous-domaine d'envoi existe dans le DNS.

Il choisit ensuite la règle :

- Si le sous-domaine existe, il applique `sp`. S'il n'y a pas de `sp`, il applique `p`.
- Si le sous-domaine n'existe pas (le DNS renvoie NXDOMAIN, c'est-à-dire « ce nom n'existe pas »), il applique `np`. S'il n'y a pas de `np`, il utilise `sp`. S'il n'y a pas non plus de `sp`, il utilise `p`.

### Un exemple

Imaginons que cet enregistrement soit publié à `_dmarc.example.com` :

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

Il fixe trois règles différentes :

- **Les emails venant de `example.com` lui-même** utilisent `p=reject`. S'ils échouent à DMARC, les destinataires sont priés de les bloquer.
- **Les emails venant de `news.example.com`**, un sous-domaine qui existe dans le DNS, utilisent `sp=quarantine`. Imaginons qu'une newsletter échoue parce qu'un prestataire a mal configuré quelque chose. Elle part en spam au lieu de rebondir.
- **Les emails venant d'un nom inventé comme `invoices-2026.example.com`**, qui n'existe pas dans le DNS, utilisent `np=reject`. Un sous-domaine que quelqu'un a simplement inventé reçoit la règle stricte, alors que vos vrais sous-domaines reçoivent quarantine.

## Qu'est-ce qu'un rapport DMARC ?

DMARC a deux types de rapports :

- **Les rapports agrégés**, réglés avec `rua`. Ce sont des synthèses quotidiennes.
- **Les rapports d'échec**, réglés avec `ruf`. Ils décrivent des emails en échec un par un.

### Les rapports agrégés (rua)

Un rapport agrégé est une synthèse envoyée par un fournisseur de messagerie, comme Gmail. Il liste tous les emails que ce fournisseur a reçus et qui prétendaient venir de votre domaine. C'est un fichier XML, un fichier texte structuré destiné à être lu par un logiciel. Les fournisseurs l'envoient en pièce jointe d'un email, soit en simple fichier `.xml`, soit en fichier compressé comme `.xml.gz`.

Chaque rapport couvre en général une journée UTC. La norme indique que les destinataires devraient envoyer des rapports agrégés au moins toutes les 24 heures. Ils ne sont pas obligés d'en envoyer.

Voici un exemple de rapport raccourci :

```xml
<feedback>
  <report_metadata>
    <org_name>mail.receiver.example</org_name>
    <report_id>20261003.example.com</report_id>
    <date_range>
      <begin>1790985600</begin>
      <end>1791071999</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>example.com</domain>
    <p>none</p>
    <sp>none</sp>
  </policy_published>
  <record>
    <row>
      <source_ip>192.0.2.10</source_ip>
      <count>412</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>example.com</header_from>
      <envelope_from>bounces.esp-mail.example</envelope_from>
    </identifiers>
    <auth_results>
      <dkim><domain>example.com</domain><result>pass</result></dkim>
      <spf><domain>bounces.esp-mail.example</domain><result>pass</result></spf>
    </auth_results>
  </record>
</feedback>
```

Voici ce qu'il dit, bloc par bloc :

- **`<report_metadata>`** : le rapport vient de `mail.receiver.example`. Il couvre une journée UTC complète.
- **`<policy_published>`** : la politique que le destinataire a vue pour `example.com`. Ici, c'est `p=none` et `sp=none`.
- **`<row>`** : 412 emails sont arrivés depuis l'adresse IP `192.0.2.10`.
- **SPF** : dans `<auth_results>`, SPF a réussi, mais pour le domaine `bounces.esp-mail.example`. Ce domaine n'est pas votre domaine From, `example.com`. Dans `<policy_evaluated>`, SPF indique donc `fail`, parce qu'il ne correspondait pas.
- **DKIM** : dans `<auth_results>`, DKIM a réussi pour `example.com`. Cela correspond au domaine From indiqué dans `<identifiers>`. DKIM a donc réussi et correspondait, et ces 412 emails ont réussi DMARC.

Le point clé est simple. `<auth_results>` montre les contrôles SPF et DKIM bruts. `<policy_evaluated>` montre si chaque contrôle correspondait aussi à votre domaine From. DMARC utilise le second.

### Les rapports d'échec (ruf)

Les rapports d'échec, souvent appelés rapports forensiques, décrivent chacun un email en échec. Ils peuvent contenir les en-têtes de l'email et des détails sur le destinataire. À cause de ce risque pour la vie privée, beaucoup de destinataires retirent la plupart des détails, ou n'envoient pas du tout de rapports d'échec. La balise `fo` fixe les options de ces rapports. Elle ne compte que si vous utilisez `ruf`.

### Lire les rapports

La norme recommande d'utiliser un logiciel pour lire les rapports agrégés, plutôt que de les lire à la main. Si vous envoyez vers de nombreux fournisseurs de messagerie, chacun vous envoie son propre rapport, chaque jour.

## Pourquoi est-ce que je reçois des emails DMARC ?

Vous recevez ces emails quotidiens parce que la balise `rua` de votre enregistrement DMARC contient votre adresse. Chaque fournisseur de messagerie qui reçoit des emails en votre nom envoie une synthèse quotidienne à chaque adresse de cette balise.

L'objet suit un format fixe, défini par la [RFC 9990](https://www.rfc-editor.org/info/rfc9990) :

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

Le Submitter est le fournisseur qui a contrôlé les emails, comme Google ou Microsoft. Le rapport XML est en pièce jointe, souvent compressé.

N'envoyez pas ces rapports vers une boîte personnelle. Faites plutôt pointer `rua` vers une boîte séparée ou vers un service de traitement des rapports. Si vous ne vous souvenez pas d'avoir configuré cela, vérifiez votre enregistrement DMARC. Un ancien administrateur, ou le guide d'installation d'une plateforme d'email, a pu l'ajouter.

### Envoyer les rapports vers un autre domaine

Imaginons que votre domaine soit `example.com` et que vous vouliez recevoir les rapports à une adresse sur `reports.example.net`. Le domaine qui reçoit doit accepter de les recevoir. Il le fait en publiant un enregistrement TXT dans son DNS. Sans cet enregistrement, les destinataires ignorent l'adresse et n'envoient aucun rapport.

L'enregistrement se place à ce nom d'hôte :

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

Les services de rapports publient souvent un enregistrement générique à la place (`*._report._dmarc.reports.example.net`). Ce seul enregistrement couvre chaque domaine client, et aucune configuration n'est donc nécessaire pour chacun.

## Passer de p=none à reject sans perdre de courrier

Ne passez pas directement à reject. Montez une étape à la fois :

1. **Commencez par observer.** Publiez un enregistrement DMARC à `_dmarc` avec `p=none` et une adresse `rua` qui fonctionne. Vous commencez à recevoir des rapports, et rien ne change pour votre livraison.
2. **Corrigez vos expéditeurs.** Lisez les rapports. Trouvez chaque vrai service qui envoie des emails pour votre domaine et échoue aux contrôles, puis corrigez sa configuration.
3. **Passez à quarantine.** Passez à `p=quarantine` une fois que tous vos vrais expéditeurs réussissent de façon constante. Vérifiez les dossiers spam pour vous assurer qu'aucun vrai email n'y arrive.
4. **Passez à reject.** Passez à `p=reject`. Les faux emails envoyés en votre nom sont désormais bloqués avant d'atteindre qui que ce soit.

Cela peut prendre du temps. La norme indique que faire réussir chaque expéditeur peut prendre de nombreux mois, selon la fréquence de vos envois. Les outils de facturation, les outils de support et les plateformes marketing sont faciles à oublier. Continuez donc à examiner vos rapports.

**Si vos utilisateurs écrivent sur des listes de diffusion**, allez plus lentement. La norme conseille au moins un mois en `p=none`, puis la même durée en quarantine. Comparez les résultats avant de passer à reject. Les listes de diffusion modifient souvent l'objet, ajoutent des pieds de page ou renvoient les messages. Ces changements cassent SPF et parfois aussi DKIM. Comparer plusieurs semaines de rapports fait apparaître ces problèmes avant que reject ne commence à bloquer du courrier.

**Utilisez le mode test pour la dernière étape.** Avec `t=y`, vous pouvez publier `p=reject` pendant que les destinataires appliquent encore quarantine. Vous voyez comment les destinataires réagissent à reject, mais les emails en échec partent encore en spam au lieu de rebondir.

**Une remarque sur le SPF strict.** Si votre enregistrement SPF se termine par `-all`, certains destinataires refusent les emails en échec dès le contrôle SPF, avant que DMARC ne s'exécute. Ces emails n'atteignent jamais le contrôle DMARC. Ils n'apparaissent pas non plus dans vos rapports quotidiens.

## Erreurs fréquentes dans un enregistrement DMARC

### Deux enregistrements DMARC

Cela arrive souvent quand quelqu'un ajoute un second enregistrement TXT au lieu de modifier le premier. Les destinataires voient les deux et les rejettent tous les deux, comme le prévoit la RFC 9989. Votre domaine se comporte alors comme s'il n'avait aucun enregistrement DMARC.

**Correction :** vérifiez votre DNS et regroupez toutes les balises dans un seul enregistrement TXT.

### L'enregistrement est sur le domaine principal, pas sur _dmarc

Si vous saisissez `example.com` comme nom d'hôte, l'enregistrement est créé sur votre domaine principal, et non à `_dmarc.example.com`. Les serveurs de messagerie ne cherchent DMARC qu'au nom `_dmarc`, ils ne le trouvent donc jamais.

**Correction :** réglez le nom d'hôte sur `_dmarc`.

### v=DMARC1 n'est pas en premier, ou n'a pas la bonne casse

Taper `v=dmarc1`, ou commencer par `p=none; v=DMARC1`, casse l'enregistrement. Les destinataires l'ignorent.

**Correction :** placez `v=DMARC1` tout au début de l'enregistrement, suivi d'un point-virgule.

### Des adresses de rapport sans mailto:

Écrire `rua=dmarc@example.com` au lieu de `rua=mailto:dmarc@example.com` casse le format de l'adresse. Les destinataires ne peuvent pas utiliser une adresse seule, et aucun rapport n'arrive.

**Correction :** commencez chaque adresse de `rua` et `ruf` par `mailto:`.

### Des rapports envoyés vers un autre domaine sans son autorisation

Si vous envoyez les rapports vers le domaine d'un prestataire, et que ce domaine n'a pas publié l'enregistrement d'autorisation, vous ne recevez aucun rapport.

**Correction :** assurez-vous que chaque adresse de rapport externe a un enregistrement `_report._dmarc` correspondant, comme expliqué plus haut.

### Reject avec SPF seul

Le transfert change l'adresse IP qui envoie l'email, donc les emails transférés échouent à SPF. Sans DKIM, de vrais emails transférés échouent à DMARC et rebondissent avec une politique reject.

**Correction :** configurez la signature DKIM sur chaque service qui envoie vos emails avant d'aller au-delà de `p=none`.

### Des balises retirées reprises d'anciens guides

Beaucoup d'anciens guides ajoutaient une balise de pourcentage, avec des valeurs comme 100, ou 20 pour un déploiement partiel. Un `pct=100` resté en place ne pose pas de problème, mais les déploiements par pourcentage ne font plus partie de la norme.

**Correction :** retirez les anciennes balises de pourcentage. Utilisez `t=y` si vous avez besoin d'une politique plus souple pendant vos changements.

## Questions fréquentes

**Ai-je vraiment besoin d'un enregistrement DMARC ?**
Oui, si vous envoyez des emails vers des comptes Gmail ou Outlook personnels. Google et Microsoft exigent tous deux que les expéditeurs de 5 000 emails ou plus par jour publient un enregistrement DMARC, avec un domaine From qui correspond. Les plus petits expéditeurs devraient quand même en avoir un. Un enregistrement `p=none` avec `rua` ne coûte rien, et les rapports vous montrent qui envoie des emails en votre nom.

**Comment vérifier mon enregistrement DMARC ?**
Lancez `dig TXT _dmarc.yourdomain.com +short` dans votre terminal, ou `nslookup -type=TXT _dmarc.yourdomain.com` sous Windows. Le résultat doit être votre enregistrement, qui commence par `v=DMARC1`. Vous pouvez aussi envoyer un email de test à un compte Gmail, l'ouvrir et choisir « Afficher l'original ». Cette vue indique si DMARC a réussi.

**Que signifie un échec DMARC ?**
Cela signifie que l'email a échoué aux deux contrôles. Ni SPF ni DKIM n'a réussi pour un domaine qui correspond au domaine From visible. Les destinataires suivent alors votre politique. Certains renvoient un refus clair, comme `550 5.7.1 Email rejected per DMARC policy for example.com` (email refusé selon la politique DMARC de example.com). Vous pouvez trouver la cause en [lisant le message de rebond](/blog/550-5-7-1-error). Gmail utilise le code d'erreur `4.7.31` quand l'enregistrement DMARC manque, et `4.7.32` quand le domaine From ne correspond pas.

**Puis-je avoir plus d'un enregistrement DMARC ?**
Non. Un domaine ne peut publier qu'un seul enregistrement DMARC. La RFC 9989 indique que si un serveur de réception en trouve plus d'un, il doit tous les rejeter. Votre domaine se retrouve alors sans politique DMARC. Modifiez votre enregistrement existant au lieu d'en ajouter un second.

**DMARC bloque-t-il les domaines qui imitent le vôtre ?**
Non. DMARC ne protège que le domaine exact publié dans votre DNS. Il ne peut pas empêcher quelqu'un d'enregistrer un domaine qui ressemble au vôtre, par exemple avec deux lettres inversées ou une autre terminaison comme .net. Il ne peut pas non plus empêcher un faux nom d'affichage. Les domaines d'imitation demandent d'autres mesures, comme surveiller les nouveaux enregistrements de domaines qui copient votre nom.

Un enregistrement DMARC prouve que vos emails viennent vraiment de vous. Il ne peut rien quand vous envoyez à des adresses qui n'existent plus. Passez votre liste dans [Giggal.ai](/email-list-cleaning) (en anglais) avant votre prochain envoi, pour retirer les adresses invalides et garder un taux de rebond bas.
