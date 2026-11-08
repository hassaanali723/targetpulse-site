---
title: "PHP2Shell (CVE-2026-109618 et CVE-2026-109619) : définition et correctif PHP"
seoTitle: "PHP2Shell : la vulnérabilité PHP et comment corriger"
description: "PHP2Shell désigne deux vulnérabilités critiques de PHP qui permettent d'exécuter du code sur un serveur web. Versions sûres, mise à jour et contrôles à faire."
slug: php2shell-vulnerabilite
date: 2026-11-08
updated: 2026-11-08
keyword: php2shell vulnérabilité
image: /blog/covers/fr/php2shell-vulnerabilite.webp
imageAlt: "PHP2Shell : CVE-2026-109618 et CVE-2026-109619, gravité de 9,2 sur 10, corrigées dans PHP 8.5.12, 8.4.27, 8.3.36 et 8.2.35"
cta: Vérifiez que votre domaine n'est pas sur une liste noire
---

PHP2Shell est le nom de deux failles critiques dans PHP lui-même : CVE-2026-109618 et CVE-2026-109619. Elles permettent à un attaquant d'exécuter son propre code sur un serveur web qui utilise PHP. L'attaquant n'a besoin ni d'un mot de passe ni d'un compte. PHP a corrigé les deux failles le 21 octobre 2026, et des attaquants les exploitent déjà.

Si vous ne lisez qu'une ligne, lisez celle-ci. Mettez PHP à jour vers **8.5.12, 8.4.27, 8.3.36 ou 8.2.35** (ou une version plus récente), puis **redémarrez PHP**. Un nouveau paquet ne change rien tant que les processus PHP n'ont pas redémarré.

![Que faire face à PHP2Shell en 4 étapes : trouver chaque installation de PHP, mettre PHP à jour vers une version corrigée, redémarrer PHP, puis chercher des traces d'intrusion](/blog/fig-fr-php2shell-what-to-do.webp)

## Ce qu'est PHP2Shell, en termes simples

PHP est le langage qui fait tourner une grande partie des sites web. WordPress, Laravel, Drupal, Magento et phpBB fonctionnent tous avec PHP. La plupart de ces sites tournent sur un serveur où PHP traite chaque demande de page.

PHP2Shell n'est pas une faille de WordPress ni de votre propre code. C'est une faille de PHP, le moteur en dessous. Tout site PHP sur un serveur non corrigé est donc exposé, même si le code du site est parfait.

PHP a noté les deux failles 9,2 sur 10 (CVSS v4.0). C'est la catégorie "critique". Le nom PHP2Shell vient du résultat : un shell, ce qui veut dire que l'attaquant peut taper des commandes sur votre serveur.

## Comment fonctionne PHP2Shell, étape par étape

Il vous faut d'abord quatre faits sur la façon dont PHP traite une page web.

1. Un serveur PHP garde quelques "workers" PHP en marche. Chaque worker traite une requête web, puis la suivante, et ainsi de suite.
2. Pour chaque requête, PHP réserve de la mémoire pour les données de cette requête. Cela comprend les champs de formulaire, les cookies, les fichiers envoyés et les données de session.
3. Quand la requête se termine, PHP nettoie cette mémoire. La requête suivante devrait démarrer sans aucun reste.
4. Chaque requête a une limite de mémoire, fixée par `memory_limit` dans `php.ini`. Si une requête la dépasse, PHP arrête la requête.

Les deux failles PHP2Shell sont des erreurs dans les étapes 2 et 3. PHP confond la mémoire valide et celle qui ne l'est pas.

### Faille 1 (CVE-2026-109618) : PHP manque de mémoire en cours de route

1. L'attaquant envoie une requête conçue pour utiliser beaucoup de mémoire.
2. PHP atteint sa limite de mémoire alors qu'il remplit encore les données de la requête. Une partie de ces données n'est écrite qu'à moitié.
3. PHP arrête la requête et lance son nettoyage.
4. Le nettoyage traite les données à moitié écrites comme si elles étaient complètes. PHP travaille alors avec une mémoire qui contient des données inutiles, ou des données choisies par l'attaquant.

La solution de contournement donnée par PHP pour cette faille consiste à supprimer la limite de mémoire et à garder les envois de fichiers petits. Cela montre que l'attaque dépend d'une grosse requête qui atteint la limite.

### Faille 2 (CVE-2026-109619) : des restes d'une requête précédente

1. Une requête se termine, et PHP libère la mémoire qu'elle a utilisée.
2. Par erreur, PHP garde une note qui indique où se trouvait une partie de cette mémoire libérée.
3. Le même worker prend la requête suivante. Cette requête peut venir de l'attaquant.
4. Avant que PHP efface la note, la nouvelle requête la suit. Elle lit ou écrit une mémoire qui contient maintenant autre chose.

Les programmeurs appellent cela une faille "use after free". PHP indique un résultat confirmé : l'attaquant peut lire de la mémoire qu'il ne devrait pas voir. La solution de contournement de PHP désactive la progression d'upload de session. C'est une fonction qui indique où en est l'envoi d'un fichier. Elle est activée par défaut.

### Pourquoi une erreur de mémoire permet d'exécuter du code

La mémoire d'un programme contient deux types d'éléments. Le premier, ce sont les données, comme du texte et des nombres. Le second, c'est l'emplacement des prochaines instructions que le programme va exécuter.

Si un attaquant peut choisir ce que PHP écrit dans une mémoire qu'il ne devrait pas utiliser, il peut changer ces emplacements. PHP exécute alors les instructions de l'attaquant à la place des siennes. On appelle cela une corruption de mémoire. C'est ainsi que les deux failles deviennent une exécution de code à distance (RCE) : quelqu'un sur internet exécute des commandes sur votre serveur.

![Comment PHP2Shell transforme une requête web en contrôle d'un serveur : l'attaquant envoie une requête spécialement conçue sans connexion, PHP gère mal la mémoire de la requête, les données de l'attaquant remplacent celles de PHP et PHP exécute les commandes de l'attaquant](/blog/fig-fr-php2shell-how-it-works.webp)

Selon PHP, le risque est le plus élevé avec Apache et mod_php. Dans ce cas, l'attaque peut commencer avant que le code de votre site ne s'exécute. Votre site n'a pas besoin d'avoir sa propre faille.

### Les deux failles côte à côte

| | CVE-2026-109618 | CVE-2026-109619 |
|---|---|---|
| Nom donné par PHP | RCE via OOM corruption | RCE via stale global state |
| Ce qui ne va pas | PHP manque de mémoire pendant la préparation, puis fait confiance à des données construites à moitié | PHP réutilise de la mémoire restée d'une requête précédente |
| Ce dont l'attaquant a besoin | Une requête web, sans connexion | Des requêtes vers le même worker PHP, sans connexion |
| Résultats confirmés | Exécution de code à distance | Exécution de code à distance, lecture de mémoire |
| Gravité (CVSS v4.0) | 9,2 critique | 9,2 critique |

## Comment les failles ont été découvertes

La PHP Foundation a cité plusieurs équipes, dont Calif, OpenAI et Wiz. Calif et Wiz ont dit avoir utilisé des modèles d'IA dans leurs recherches. PHP a annoncé le correctif à l'avance le 20 octobre et l'a publié le 21 octobre.

Les attaquants ont été plus rapides que le correctif. Amazon a vu une tentative d'exploitation de la faille le 17 octobre, quatre jours avant la publication.

## Ce qu'un attaquant peut faire avec PHP2Shell

Une fois que l'attaquant exécute du code via PHP, il agit avec le compte sous lequel tourne PHP. Sur beaucoup de serveurs Linux, ce compte est `www-data`. Ce compte peut lire et modifier les fichiers de votre site.

| Ce que l'attaquant peut faire | Ce que cela signifie pour vous |
|---|---|
| Exécuter des commandes sur le serveur | Lire, modifier ou supprimer les fichiers de votre site. Publier de fausses pages. |
| Lire des secrets dans la mémoire | Wiz indique que la mémoire divulguée peut exposer des mots de passe, des jetons, des clés API et des certificats issus des requêtes d'autres visiteurs. |
| Lire vos fichiers de configuration | Des fichiers comme `wp-config.php` et `.env` contiennent les mots de passe de la base de données. Avec eux, l'attaquant peut copier les données de vos clients. |
| Installer une porte dérobée | Un fichier PHP caché lui permet de revenir après votre mise à jour. Le NCSC vous demande de les chercher. |
| Envoyer du spam et du phishing depuis votre serveur | Votre domaine et votre IP se retrouvent sur des listes noires, et vos vrais emails n'arrivent plus. |
| Prendre le contrôle de toute la machine | Dream Research a signalé des attaquants qui ont combiné PHP2Shell avec une faille du noyau Linux (CVE-2026-46300) pour prendre le contrôle total de 24 pare-feu. Tenable n'a pas confirmé ce signalement. |

## Qui est concerné

L'avis de sécurité de PHP cite chaque configuration de PHP qui traite des requêtes web :

- PHP-FPM (la configuration la plus courante avec Nginx)
- Apache avec mod_php
- php-cgi
- FrankenPHP
- LiteSpeed

Le National Cyber Security Centre (NCSC) du Royaume-Uni va plus loin. Il dit que toute organisation qui utilise PHP doit se considérer comme exposée, quelle que soit la version. Cela comprend PHP intégré dans des produits que vous achetez, comme des appliances et des outils hébergés.

Le 26 octobre, la société de sécurité Trail of Bits a indiqué que des exploits fonctionnels touchent PHP 8.2 à 8.5 non corrigé. Elle les a montrés contre MediaWiki, Symfony, Laravel et phpBB.

## La faille est-elle utilisée dans de vraies attaques ?

Oui. Ce n'est pas une théorie.

![Chronologie de PHP2Shell : première tentative d'attaque vue le 17 octobre, correctif publié le 21 octobre, ajout au catalogue KEV de la CISA le 26 octobre, date limite fédérale américaine le 29 octobre](/blog/fig-fr-php2shell-timeline.webp)

- **17 octobre :** l'équipe de threat intelligence d'Amazon a vu une tentative d'exploitation de la faille. C'était quatre jours avant la sortie du correctif.
- **21 octobre :** PHP a publié les versions corrigées. Cloudflare a dit voir les premières attaques le jour même.
- **26 octobre :** la CISA, l'agence américaine de cyberdéfense, a ajouté les deux failles à son catalogue Known Exploited Vulnerabilities (KEV). Cette liste ne contient que des failles avec des preuves d'attaques réelles.
- **29 octobre :** la date limite fixée par la CISA aux agences fédérales américaines pour appliquer le correctif.

## Quelles versions de PHP sont sûres

Trouvez votre branche PHP dans le tableau. Si votre version est inférieure à la version corrigée, vous êtes exposé.

| Votre branche PHP | Exposée si inférieure à | Version corrigée | Remarques |
|---|---|---|---|
| 8.5 | 8.5.12 | 8.5.12 | |
| 8.4 | 8.4.27 | 8.4.27 | |
| 8.3 | 8.3.36 | 8.3.36 | |
| 8.2 | 8.2.35 | 8.2.35 | La branche 8.2 cesse de recevoir des correctifs le 31 décembre 2026 |
| 8.1, 8.0, 7.4 | toutes les versions | pas de version officielle | PHP a publié de petits correctifs du code source. L'éditeur de votre distribution Linux a peut-être un correctif. |
| de 7.3 à 5.4 | toutes les versions | aucune | Plus prises en charge. Passez à une branche récente. |

**Les distributions Linux utilisent d'autres numéros de version.** Debian, Ubuntu et Red Hat ajoutent souvent un correctif à une ancienne version sans changer son numéro. Ainsi, `php -v` peut afficher un numéro "ancien" sur un serveur déjà sûr. Sur ces systèmes, consultez le bulletin de sécurité de votre éditeur pour CVE-2026-109618, pas seulement le numéro.

## Comment connaître votre version de PHP

Choisissez la méthode qui correspond à votre installation.

| Où tourne votre site | Comment voir la version de PHP |
|---|---|
| Votre propre serveur (SSH) | Lancez `php -v`. Pour la version utilisée par le site, vérifiez aussi le paquet PHP-FPM ou Apache. |
| WordPress | Allez dans **Outils**, puis **Santé du site**, puis **Informations**, puis **Serveur**. |
| Hébergement avec cPanel | Ouvrez **MultiPHP Manager**. Il affiche la version de PHP de chaque domaine. |
| Autre hébergement mutualisé | Regardez dans le panneau de votre hébergeur, ou demandez au support. |

La ligne de commande et le site peuvent utiliser des versions de PHP différentes sur le même serveur. Vérifiez celle qui sert les pages web.

## Comment appliquer le correctif

La solution est d'installer la nouvelle version de PHP et de redémarrer PHP. Pour reprendre les mots de PHP : "Il n'existe pas de mesure d'atténuation complète, la mise à jour est le seul choix sûr."

**Hébergement mutualisé.** Votre hébergeur met PHP à jour pour vous. Demandez au support de confirmer que le serveur utilise une version corrigée. Si votre panneau vous laisse choisir la version de PHP, choisissez une branche prise en charge.

**Serveur Debian ou Ubuntu.**

```bash
sudo apt update
sudo apt upgrade
sudo systemctl restart php8.3-fpm   # use your version number
sudo systemctl restart apache2      # only if you use Apache
```

**Serveur Red Hat, AlmaLinux ou Rocky Linux.**

```bash
sudo dnf upgrade 'php*'
sudo systemctl restart php-fpm
sudo systemctl restart httpd        # only if you use Apache
```

**Docker.** Passez votre image à un tag corrigé, par exemple `php:8.4.27-fpm`. Reconstruisez et redéployez chaque conteneur. Un ancien conteneur toujours en marche reste exposé.

Après l'une de ces méthodes, vérifiez à nouveau. Lancez `php -v` ou rechargez la page Santé du site de WordPress. Confirmez la nouvelle version, ou confirmez le paquet corrigé de votre éditeur.

## Si vous ne pouvez pas corriger aujourd'hui

PHP liste quelques réglages qui réduisent le risque. PHP dit clairement qu'ils ne rendent pas un serveur sûr. Utilisez-les seulement pendant que vous préparez la mise à jour.

| Réglage | Aide contre | Où le définir |
|---|---|---|
| `memory_limit=-1` | CVE-2026-109618 | `php.ini`, de façon que les applications ne puissent pas le modifier |
| `post_max_size` bas | CVE-2026-109618 | `php.ini` |
| `session.upload_progress.enabled=0` | CVE-2026-109619 | `php.ini` ou la configuration du pool FPM. Pas `ini_set()` ni `.user.ini` |
| `fatal_error_backtraces=0` | CVE-2026-109619, PHP 8.5 seulement | `php.ini` |

Redémarrez chaque worker PHP après avoir changé ces réglages. PHP déconseille aussi d'utiliser `RLIMIT_AS` ou `RLIMIT_DATA` comme limite de mémoire. Ils peuvent déclencher la faille.

Le NCSC donne une autre option. Si vous ne pouvez pas mettre à jour ni réduire le risque rapidement, mettez le système hors ligne jusqu'à ce que ce soit possible.

## Vérifiez si vous avez déjà été piraté

Les attaquants avaient de l'avance. La première tentative a eu lieu quatre jours avant le correctif. Un serveur corrigé aujourd'hui a donc pu être piraté avant.

Le NCSC demande de vérifier les systèmes non corrigés pour trouver des traces d'intrusion et des portes dérobées. Signes courants sur un serveur PHP :

- De nouveaux fichiers `.php` que vous n'avez pas créés, souvent dans les dossiers d'upload ou de cache.
- De nouveaux comptes administrateurs dans WordPress ou dans votre application.
- Des connexions sortantes inhabituelles, ou une utilisation du processeur que vous ne savez pas expliquer.
- Une hausse soudaine des emails sortants de votre serveur.
- Des rebonds qui indiquent que votre IP ou votre domaine est sur une liste noire.

Les deux derniers comptent même si votre site semble normal. Un serveur piraté sert souvent à envoyer du spam ou du phishing depuis votre domaine. Votre domaine peut alors finir sur des listes noires, et vos vrais emails n'arrivent plus dans les boîtes de réception. Notre guide pour [vérifier si votre domaine email est sur une liste noire](/blog/how-to-check-if-email-domain-is-blacklisted) explique comment contrôler et corriger une inscription.

Si vous trouvez des traces d'intrusion, appliquer le correctif ne suffit pas. L'attaquant a peut-être laissé une porte dérobée. Restaurez une sauvegarde saine ou faites appel à une équipe de réponse aux incidents.

## Deux problèmes liés à connaître

**CVE-2026-115560.** Le 23 octobre, PHP a publié un avis séparé sur la progression d'upload de session. PHP juge peu probable que cette faille soit exploitée. Le réglage `session.upload_progress.enabled=0` du tableau ci-dessus la couvre aussi.

**Un problème SimpleXML dans les versions corrigées.** PHP 8.4.27 et 8.5.12 peuvent faire planter certaines applications qui utilisent SimpleXML (php-src issue #24488). La cause est une modification distincte, pas le correctif de sécurité. Au 26 octobre, un correctif avait été intégré mais pas encore publié. Testez votre application après la mise à jour. Ne restez pas sur la version vulnérable pour cette raison.

## Vidéo : comment l'équipe sécurité de PHP a géré la faille

```youtube
No3T8JQqhtM
Voir la vidéo : [PHP2Shell: How the PHP Security Team Handled It (with Volker Dusch)](https://www.youtube.com/watch?v=No3T8JQqhtM) par Laravel News
```

## Réponses rapides

| Question | Réponse |
|---|---|
| Qu'est-ce que PHP2Shell ? | Deux failles critiques de PHP, CVE-2026-109618 et CVE-2026-109619, qui permettent à des attaquants d'exécuter du code sur un serveur. |
| Faut-il une connexion ? | Non. Un attaquant sur internet peut l'exploiter sans compte. |
| Est-elle utilisée dans des attaques ? | Oui. La CISA a ajouté les deux failles à son catalogue KEV le 26 octobre 2026. |
| Quelles versions la corrigent ? | 8.5.12, 8.4.27, 8.3.36 et 8.2.35. |
| Mettre à jour le paquet suffit-il ? | Non. Redémarrez aussi PHP-FPM, Apache ou vos conteneurs. |
| Un pare-feu règle-t-il le problème ? | Non. Les règles d'un pare-feu web peuvent bloquer certaines attaques, mais seule la mise à jour corrige la faille. |

## Sources

- [PHP news archive 2026](https://www.php.net/archive/2026.php) : notes de version et avis de sécurité
- [NCSC: Critical security issue affecting PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php)
- [CISA Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [Tenable: PHP2Shell FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote) : signalements d'attaques d'Amazon, Cloudflare et Trail of Bits
