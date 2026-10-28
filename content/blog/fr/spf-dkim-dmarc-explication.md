---
title: "SPF, DKIM et DMARC : explication et fonctionnement"
seoTitle: "SPF, DKIM et DMARC expliqués : comment ils fonctionnent ensemble (2026)"
description: "SPF contrôle le serveur, DKIM la signature, DMARC que l'un des deux correspond au domaine From. Les enregistrements, les erreurs et ce qui change en 2026."
slug: spf-dkim-dmarc-explication
date: 2026-10-19
updated: 2026-10-19
keyword: spf dkim dmarc explication
image: /blog/covers/fr/spf-dkim-dmarc-explication.webp
imageAlt: Bannière bleu foncé avec SPF, DKIM et DMARC et trois colonnes d'explication technique
cta: Corrigez l'authentification, puis nettoyez la liste
---

SPF, DKIM et DMARC sont trois enregistrements DNS qui répondent chacun à une question différente sur un email. SPF (Sender Policy Framework) liste les serveurs autorisés à envoyer du courrier pour votre domaine. DKIM (DomainKeys Identified Mail) ajoute une signature à chaque message, pour que le destinataire sache que rien n'a été modifié après son départ. DMARC (Domain-based Message Authentication, Reporting and Conformance) vérifie qu'au moins l'un des deux correspond au domaine de votre adresse From, et dit au destinataire quoi faire quand aucun ne correspond. Depuis 2024, ils ne sont plus facultatifs. Gmail et Outlook.com refusent désormais une grande partie du courrier qui échoue à ces contrôles, au lieu de simplement le placer en spam.

| Enregistrement | Ce qu'il contrôle | Où il se trouve |
| --- | --- | --- |
| SPF | Quels serveurs peuvent envoyer pour votre domaine | Enregistrement TXT sur votre domaine |
| DKIM | Une signature numérique sur chaque message | Enregistrement TXT à selector._domainkey.votredomaine |
| DMARC | Que SPF ou DKIM correspond à votre domaine From, et quoi faire sinon | Enregistrement TXT à _dmarc.votredomaine |

## Pourquoi vous ne pouvez plus vous en passer

Depuis le 1er février 2024, Google impose des règles obligatoires à tous ceux qui envoient des emails vers des comptes Gmail personnels. Selon ces exigences de base, chaque expéditeur doit configurer SPF ou DKIM, mettre en place un DNS direct et inverse valide avec des enregistrements PTR correspondants pour les adresses IP d'envoi, utiliser le chiffrement TLS pour la transmission et respecter les spécifications de la RFC 5322. Votre taux de spam dans Google Postmaster Tools doit rester sous 0,3 %, et Google recommande de le garder sous 0,1 %. Si vous envoyez du courrier non authentifié, Google prévient que les messages risquent d'être placés en spam ou refusés directement avec le code d'erreur 5.7.26.

Si vous envoyez 5 000 messages ou plus par jour vers des adresses Gmail personnelles, Google vous classe comme expéditeur en masse et les règles se durcissent. Les expéditeurs en masse ne peuvent pas choisir entre SPF et DKIM. Ils doivent configurer les deux protocoles. Vous devez aussi publier un enregistrement DMARC, maintenir l'alignement entre votre en-tête From visible et SPF ou DKIM, et inclure un mécanisme de désinscription en un clic qui fonctionne pour les messages marketing. Google compte ce seuil de 5 000 messages sur votre domaine principal et tous ses sous-domaines, sur une période de 24 heures. Une fois que votre domaine atteint ce seuil, Google considère le statut d'expéditeur en masse comme permanent. Depuis novembre 2025, Gmail renforce progressivement l'application des règles sur le trafic non conforme, avec des retards de livraison temporaires et des refus permanents. Ces règles s'appliquent aux comptes Gmail personnels, pas aux boîtes professionnelles Google Workspace.

Microsoft a mis en place ses propres exigences d'authentification le 5 mai 2025, pour les expéditeurs qui envoient 5 000 messages ou plus par jour vers des comptes grand public Outlook.com, Hotmail et Live. Les expéditeurs qui dépassent ce seuil ont besoin d'un contrôle SPF réussi, d'une signature DKIM valide et d'un enregistrement DMARC publié avec p=none ou une politique plus stricte, aligné avec SPF ou DKIM. Si vous ne respectez pas ces exigences, Microsoft bloque vos messages avec le code de rebond 550 5.7.515 Access denied, sending domain does not meet the required authentication level (accès refusé, le domaine d'envoi n'atteint pas le niveau d'authentification requis). Yahoo a mis en place des règles similaires pour les expéditeurs en masse en 2024.

| Code | Ce qui a échoué |
| --- | --- |
| 4.7.27 et 5.7.27 | SPF n'a pas réussi |
| 4.7.30 et 5.7.30 | DKIM n'a pas réussi |
| 4.7.31 | Enregistrement DMARC absent ou sans politique |
| 4.7.32 | Domaine From non aligné avec SPF ou DKIM |
| 4.7.23 et 5.7.25 | Problèmes d'enregistrement PTR |

Google utilise les codes 4.x pour la limitation temporaire du débit et les codes 5.x pour les blocages de livraison permanents. Quand vos campagnes rebondissent, ne devinez pas la cause depuis votre tableau de bord marketing. Examinez les en-têtes bruts du refus du serveur, comme l'explique notre guide pour [lire les messages de rebond](/blog/550-5-7-1-error).

## SPF : quels serveurs peuvent envoyer pour votre domaine

Sender Policy Framework, normalisé dans la RFC 7208, vérifie l'expéditeur d'enveloppe d'un message entrant. L'expéditeur d'enveloppe est l'adresse Return-Path ou MAIL FROM que les serveurs de messagerie utilisent pour renvoyer les rebonds. SPF peut aussi évaluer le nom de serveur annoncé lors de l'échange initial HELO ou EHLO. Comme SPF n'examine que l'expéditeur d'enveloppe et ignore l'adresse From visible que les gens voient dans leur boîte de réception, SPF seul ne peut pas empêcher un attaquant d'usurper le nom de votre marque.

Un [enregistrement SPF](/glossary/spf) se trouve dans le DNS sous la forme d'un seul enregistrement TXT. Il indique aux serveurs de réception quelles adresses IP, quels serveurs MX et quelles plateformes tierces peuvent envoyer du courrier pour votre domaine. Un enregistrement typique ressemble à ceci :

```text
v=spf1 include:_spf.google.com include:spf.your-esp.example ~all
```

Chaque enregistrement commence par `v=spf1`. L'instruction `include:_spf.google.com` demande aux serveurs de réception d'interroger l'enregistrement SPF de Google et d'autoriser les adresses IP qu'il contient. Le second include donne le droit d'envoyer aux serveurs gérés par votre plateforme marketing ou votre service d'email transactionnel.

La directive finale dit aux destinataires comment traiter les expéditeurs non listés. Le qualificateur softfail, écrit `~all`, indique que les serveurs non listés ne sont probablement pas autorisés, mais suggère aux destinataires d'accepter le message et d'appliquer le filtrage anti-spam. Le qualificateur fail, écrit `-all`, marque les serveurs non listés comme un échec ferme, et certains destinataires refusent alors directement le courrier. Les expéditeurs qui auditent des configurations complexes commencent souvent par `~all`, pour que le courrier professionnel légitime ne soit pas perdu par accident.

La RFC 7208 fixe deux limites strictes à ne pas dépasser. D'abord, un domaine ne peut publier qu'un seul enregistrement SPF. Publier deux enregistrements produit un permerror, qui invalide SPF pour tout votre courrier sortant. Ensuite, SPF limite l'évaluation à 10 requêtes DNS au maximum, en comptant `include`, `a`, `mx`, `ptr`, `exists` et `redirect`. Si la résolution de votre enregistrement demande une onzième requête, les serveurs de réception renvoient un permerror. Le transfert casse aussi SPF : quand un destinataire transfère votre message, l'adresse IP du serveur qui transfère ne correspond pas à votre enregistrement, et SPF échoue.

## DKIM : une signature qui prouve que le message n'a pas été modifié

DKIM, défini dans la RFC 6376, porte sur le message lui-même plutôt que sur le serveur. Quand votre serveur prépare l'envoi d'un message, il calcule une empreinte cryptographique de certains en-têtes et du corps, signe cette empreinte avec une clé privée et écrit le résultat dans un en-tête `DKIM-Signature`. Cet en-tête contient deux valeurs principales : le domaine signataire dans la balise `d=` et le sélecteur dans la balise `s=`. DKIM dit seulement si la signature est valide. Décider quoi faire en cas d'échec est le rôle de DMARC.

Quand le message arrive, le destinataire lit le sélecteur et le domaine dans l'en-tête, interroge le DNS pour obtenir la clé publique à `s._domainkey.d` et vérifie la signature. DKIM signe les en-têtes et le contenu. Il ne chiffre pas l'email. Le corps voyage en texte lisible, mais la signature prouve que personne n'a modifié l'objet, les informations de l'expéditeur ou le texte du corps pendant le transport.

Comme le transfert d'email standard garde les en-têtes et le corps intacts, une signature DKIM valide survit en général au transfert. DKIM est donc plus fiable que SPF pour le courrier transféré. Les listes de diffusion qui ajoutent un pied de page ou une étiquette dans l'objet peuvent cependant casser la signature. Gmail exige des clés d'au moins 1024 bits et recommande 2048.

Un enregistrement de clé publique DKIM dans le DNS a cette forme :

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

La balise `v=DKIM1` indique la version du protocole, `k=rsa` identifie l'algorithme de la clé et `p=` contient la clé publique encodée en base64. Si vous gérez votre propre serveur de messagerie, vous pouvez créer une paire de clés avec notre [générateur DKIM](/dkim-generator).

Un piège fréquent apparaît quand les expéditeurs se fient aux signatures par défaut de leur plateforme. Beaucoup de plateformes d'email signent le courrier sortant avec leur propre domaine partagé par défaut (`d=shared-esp.example`). La signature est valide, mais le domaine signataire ne correspond pas à votre domaine From visible, et l'alignement DMARC échoue. Vous devez configurer un DKIM personnalisé dans les réglages de votre plateforme, pour que la signature utilise votre domaine dans la balise `d=`.

## DMARC : le contrôle qui relie les deux à votre adresse From

Domain-based Message Authentication, Reporting, and Conformance relie les contrôles d'enveloppe et les signatures cryptographiques à l'adresse From visible que les gens lisent. L'alignement signifie que le domaine qui a passé SPF ou DKIM est le même que le domaine de la ligne From. DMARC réussit quand SPF ou DKIM réussit l'authentification ET s'aligne avec le domaine de l'en-tête From. Un message n'a pas besoin que les deux soient alignés en même temps. Google recommande toutefois d'aligner les deux et indique qu'il pourrait exiger les deux plus tard.

Imaginons que votre entreprise envoie une newsletter chaque semaine. Le message affiche `From: news@example.com`. Pour gérer les rebonds, votre service d'email utilise sa propre adresse d'enveloppe, avec le Return-Path `bounce-123@bounces.esp-mail.example`. Votre service signe aussi le message avec un DKIM personnalisé en utilisant `d=example.com`.

Quand le serveur de réception traite ce message entrant :
1. SPF vérifie le domaine d'enveloppe `bounces.esp-mail.example` et réussit, mais `esp-mail.example` ne correspond pas à `example.com`. SPF échoue donc à l'alignement DMARC.
2. DKIM vérifie la signature pour `example.com`, contrôle l'empreinte cryptographique et correspond au domaine de l'en-tête From `example.com`. DKIM réussit donc et obtient l'alignement DMARC.
3. Comme DKIM a réussi et est aligné, le message réussit DMARC.

DMARC propose deux modes d'alignement, pour SPF comme pour DKIM. L'alignement souple (relaxed) est le réglage par défaut. Il permet aux sous-domaines de votre domaine organisationnel de s'aligner avec le domaine racine. Par exemple, le courrier envoyé depuis `news.example.com` s'aligne avec un domaine SPF ou DKIM `example.com`. L'alignement strict, configuré avec `aspf=s` ou `adkim=s`, exige une correspondance exacte du domaine et n'accepte pas les différences de sous-domaine.

Votre enregistrement DMARC publie l'une de trois politiques possibles :
- `p=none` : met DMARC en mode surveillance. Les destinataires livrent le courrier normalement tout en collectant des rapports d'authentification.
- `p=quarantine` : demande aux destinataires de placer le courrier qui échoue à DMARC dans le dossier spam ou courrier indésirable.
- `p=reject` : demande aux destinataires de refuser le courrier qui échoue à DMARC.

La balise rua indique aux destinataires où envoyer les rapports agrégés, en général des fichiers XML quotidiens qui montrent quelles adresses IP ont envoyé du courrier avec votre domaine. Un enregistrement de départ standard publié à `_dmarc.example.com` ressemble à ceci :

```text
_dmarc.example.com TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

En mai 2026, l'Internet Engineering Task Force a publié la RFC 9989 sur le Standards Track, avec la RFC 9990 pour les rapports agrégés et la RFC 9991 pour les rapports d'échec. Ces nouvelles normes rendent officiellement obsolètes la RFC 7489 et la RFC 9091. Les enregistrements existants qui commencent par `v=DMARC1` continuent de fonctionner, mais la spécification mise à jour modifie plusieurs balises. La balise de pourcentage (`pct`) et la balise de format de rapport (`rf`) sont retirées et ne font plus partie de la norme, tandis que la balise d'intervalle de rapport (`ri`) est classée comme historique. Les expéditeurs qui testent le déploiement d'une politique utilisent désormais la nouvelle balise `t` pour le mode test, et les administrateurs peuvent définir des politiques pour les sous-domaines inexistants avec la balise `np`. Si votre enregistrement DNS actuel contient une balise de pourcentage, prévoyez de la retirer. Vous pouvez créer un enregistrement à jour ou retirer les anciennes balises avec notre [générateur DMARC](/dmarc-generator).

## Comment un serveur de réception contrôle un message

Quand un email entrant arrive sur une passerelle de réception, le serveur exécute les contrôles d'authentification dans un ordre précis :

1. Le serveur accepte la connexion réseau, note l'adresse IP de l'expéditeur et évalue le message d'accueil HELO ou EHLO.
2. Le serveur extrait le domaine du Return-Path d'enveloppe et interroge le DNS pour vérifier les autorisations SPF de l'adresse IP d'envoi.
3. Le serveur trouve l'en-tête `DKIM-Signature`, interroge le DNS pour obtenir la clé publique à `selector._domainkey.domain` et recalcule les empreintes cryptographiques des en-têtes et du corps.
4. Le serveur examine l'en-tête From visible et interroge le DNS pour trouver un enregistrement de politique DMARC à `_dmarc.domain`.
5. Le serveur évalue l'alignement des domaines, en vérifiant si le domaine SPF authentifié ou le domaine DKIM authentifié correspond au domaine From visible.
6. Le serveur applique la politique DMARC publiée, none, quarantine ou reject, selon le résultat de l'alignement.
7. Si vous avez demandé des rapports avec rua, le serveur ajoute le résultat à son prochain rapport agrégé pour vous.

Dans Gmail, vous pouvez voir les trois résultats avec « Afficher l'original » sur n'importe quel message.

## Où SPF, DKIM et DMARC cassent le plus souvent

Publier deux enregistrements SPF est une erreur fréquente quand on ajoute un nouveau service d'email. Un administrateur suit la documentation d'installation, ajoute `v=spf1 include:sendgrid.net ~all` et publie ce second enregistrement TXT à côté d'un enregistrement Google existant. La RFC 7208 interdit plusieurs enregistrements SPF sur un même domaine. Quand les serveurs de réception trouvent deux enregistrements, ils s'arrêtent sur un permerror et SPF échoue. Pour corriger, fusionnez tous les fournisseurs autorisés en une seule chaîne : `v=spf1 include:_spf.google.com include:sendgrid.net ~all`.

Dépasser la limite de 10 requêtes provoque une autre panne de livraison silencieuse. Chaque balise `include`, `a`, `mx`, `ptr`, `exists` ou `redirect` compte dans cette limite, et les includes imbriqués dans les enregistrements des fournisseurs comptent aussi. Si votre enregistrement demande une onzième requête, les serveurs de réception renvoient automatiquement un permerror. Pour corriger ce dépassement, retirez les anciens enregistrements de fournisseurs, utilisez des outils d'audit des requêtes, ou remplacez des includes par des plages `ip4` explicites. Ne le faites que pour des adresses IP d'envoi que vous contrôlez et qui ne changent pas.

Connecter un nouveau service d'envoi sans l'ajouter au DNS expose votre courrier sortant aux filtres anti-spam. Les équipes commerciales ou support connectent souvent des outils de prise de rendez-vous, des plateformes de helpdesk ou des systèmes de facturation sans prévenir la personne qui gère le DNS. Comme ces nouveaux serveurs ne figurent pas dans votre enregistrement SPF et ne signent pas avec vos clés DKIM, leurs messages échouent à l'authentification et arrivent en spam. La solution est une règle simple : toute personne qui connecte un nouvel outil prévient celle qui gère le DNS. Ajoutez à cela une lecture de vos rapports DMARC pour repérer les expéditeurs que vous ne reconnaissez pas.

Se fier au DKIM signé par la plateforme casse l'alignement DMARC, même si la signature est valide sur le plan cryptographique. Quand un service d'email signe les messages avec `d=platform-mail.example` alors que votre ligne From affiche `From: support@yourcompany.example`, DKIM passe les contrôles techniques mais échoue à l'alignement avec votre domaine. Pour corriger cet écart, ouvrez les réglages de votre plateforme, générez des clés DKIM personnalisées pour votre domaine et publiez les enregistrements de sélecteur dans votre console DNS.

Le transfert de messages casse régulièrement SPF quand un destinataire transfère son courrier professionnel vers une boîte personnelle. Le serveur intermédiaire transmet le message avec sa propre adresse IP, qui ne correspond pas à votre enregistrement SPF. Vous ne pouvez pas contrôler les transferts externes. Mais des signatures DKIM valides permettent à vos messages de survivre intacts au transfert et de satisfaire DMARC lors des étapes suivantes.

Envoyer des campagnes en masse par une autre plateforme avec une adresse From gratuite en `@gmail.com` échoue à DMARC par construction. Les consignes de Google pour les expéditeurs avertissent explicitement qu'usurper des adresses Gmail depuis des serveurs externes nuit à la délivrabilité. Comme les plateformes tierces ne peuvent pas produire de signatures cryptographiques valides ni passer SPF pour le domaine de Google, les fournisseurs de messagerie refusent le courrier ou le mettent en quarantaine. Les expéditeurs doivent toujours faire leur prospection depuis un domaine personnalisé qui leur appartient.

Laisser DMARC en `p=none` de façon permanente rend votre domaine vulnérable à l'usurpation. Une politique de surveillance respecte le minimum de Gmail et de Microsoft, mais `p=none` dit aux serveurs de réception de ne prendre aucune mesure de protection quand du courrier usurpé apparaît. Avec ce réglage, DMARC n'arrêtera pas quelqu'un qui usurpe votre domaine exact. Examinez vos rapports agrégés quotidiens pendant quelques semaines, vérifiez que toutes les sources d'envoi légitimes sont alignées, puis passez votre politique à `p=quarantine` et enfin à `p=reject`.

## Liste de contrôle pour configurer SPF, DKIM et DMARC

Suivez ces étapes dans l'ordre :

1. Listez chaque service interne, plateforme marketing, outil de support et outil transactionnel qui envoie des emails avec votre domaine.
2. Publiez un seul [enregistrement SPF](/glossary/spf) unifié qui couvre les serveurs d'envoi autorisés, en gardant le total des requêtes sous 10. Le [vérificateur SPF](/spf-checker) les compte pour vous.
3. Activez la signature DKIM personnalisée avec votre propre domaine sur chaque plateforme d'envoi et publiez les enregistrements de sélecteur correspondants dans le DNS.
4. Assurez-vous que vos adresses IP d'envoi ont un DNS direct valide et un [enregistrement PTR](/glossary/ptr-record) correspondant configuré dans le DNS inverse.
5. Publiez un premier [enregistrement DMARC](/blog/what-is-a-dmarc-record) à `_dmarc` avec `p=none` et une boîte `rua` active, pour commencer à recevoir les rapports XML agrégés.
6. Enregistrez votre domaine d'envoi dans [Google Postmaster Tools](/glossary/postmaster-tools) pour suivre la réputation du domaine, les erreurs de livraison et les taux de plaintes pour spam.
7. Examinez vos rapports DMARC agrégés pendant quelques semaines pour vérifier que chaque flux d'envoi légitime obtient l'alignement SPF ou DKIM.
8. Faites passer votre politique DMARC de `p=none` à `p=quarantine`, observez la stabilité de la livraison, puis passez votre politique à `p=reject`.
9. Envoyez un message de test à un compte Gmail personnel et ouvrez « Afficher l'original » pour confirmer que SPF, DKIM et DMARC indiquent tous PASS.

## Questions fréquentes

**DMARC a-t-il besoin à la fois de SPF et de DKIM ?**
Non. DMARC exige que SPF ou DKIM réussisse l'authentification et s'aligne avec le domaine de votre en-tête From visible. Avoir les deux protocoles actifs sur votre domaine vous protège mieux quand le transfert casse SPF, et Google recommande de configurer les deux pour les gros volumes. Un message réussit cependant DMARC si un seul mécanisme obtient un alignement valide.

**Quelle est la différence entre SPF et DMARC ?**
SPF autorise des adresses IP de serveurs de messagerie précises à envoyer du courrier pour l'adresse d'expéditeur d'enveloppe technique, celle de l'en-tête Return-Path. DMARC examine l'adresse From visible que les gens voient dans leur client de messagerie. Il vérifie que SPF ou DKIM s'aligne avec ce domaine visible, et dit aux serveurs de réception s'il faut accepter, mettre en quarantaine ou refuser les messages qui échouent.

**Ai-je besoin de DMARC si j'envoie moins de 5 000 emails par jour ?**
Gmail n'exige DMARC que des expéditeurs en masse. Vous ne serez donc pas bloqué sans DMARC à faible volume, mais il vous faut quand même SPF ou DKIM. Il reste utile de publier un enregistrement p=none avec rua, parce que les rapports vous montrent quels services envoient au nom de votre domaine, y compris ceux que vous aviez oubliés et toute personne qui vous usurpe.

**Puis-je avoir deux enregistrements SPF ?**
Non. La RFC 7208 interdit de publier plus d'un enregistrement SPF sur un domaine. Si les serveurs de réception trouvent plusieurs enregistrements SPF dans le DNS, ils arrêtent tout de suite l'évaluation avec un permerror et considèrent que SPF a échoué. Vous devez fusionner toutes les adresses IP autorisées et tous les includes tiers dans un seul enregistrement qui commence par `v=spf1`.

**Quelle est la façon la plus simple d'expliquer DMARC ?**
SPF vérifie que le serveur qui envoie le message a le droit d'envoyer pour votre domaine, et DKIM vérifie une signature qui montre que le message n'a pas été modifié. DMARC est le contrôle final : il confirme que l'un des deux appartient au même domaine que l'adresse From. Si aucun ne correspond, DMARC dit au serveur de réception s'il doit quand même livrer le message, le placer en spam ou le refuser.

Ces enregistrements prouvent qui vous êtes, mais ils ne corrigent pas les adresses auxquelles vous envoyez, et le courrier vers des adresses mortes rebondit toujours. Notre guide pour [réduire le taux de rebond email](/blog/how-to-reduce-email-bounce-rate) couvre cet aspect, et vous pouvez passer votre liste dans [Giggal.ai](/email-list-cleaning) (en anglais) avant le prochain envoi.
