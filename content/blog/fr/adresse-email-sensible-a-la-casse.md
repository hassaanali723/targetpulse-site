---
title: "Une adresse email est-elle sensible à la casse ?"
seoTitle: "Adresse email : majuscules ou minuscules ? (Gmail, Outlook)"
description: "En général non. Gmail et Outlook ignorent les majuscules, mais la norme permet une casse stricte avant le @. Quand cela compte et comment stocker les adresses."
slug: adresse-email-sensible-a-la-casse
date: 2026-10-19
updated: 2026-10-19
keyword: adresse email sensible à la casse
image: /blog/covers/fr/adresse-email-sensible-a-la-casse.webp
imageAlt: Couverture sur la casse des adresses email avec les règles pour les domaines, Gmail, Outlook et les bases de données
cta: Vérifiez qu'une adresse email existe vraiment
---

Les adresses email ne sont en général pas sensibles à la casse. Tapez John.Smith@gmail.com ou john.smith@gmail.com et le courrier arrive dans la même boîte de réception. La partie après le @ ignore totalement les majuscules. La difficulté se trouve dans la partie avant le @. La norme de l'email permet en théorie à un serveur de traiter Smith et smith comme deux personnes différentes. C'est utile à savoir si vous gérez un formulaire d'inscription ou une liste d'envoi.

## La partie après le @ ne tient jamais compte de la casse

Le nom de domaine qui suit le signe @ n'est jamais sensible à la casse. La RFC 5321 indique que les domaines de boîtes suivent les règles normales du DNS, et le DNS ignore la casse des lettres. GMAIL.COM, Gmail.com et gmail.com pointent donc vers le même serveur de messagerie. Vous pouvez taper le domaine en majuscules ou en minuscules sans changer la destination de votre message.

## Les emails sont-ils sensibles à la casse avant le @ ?

La partie locale, le nom d'utilisateur à gauche du @, fonctionne autrement. Selon la section 2.4 de la RFC 5321, « la partie locale d'une boîte DOIT être traitée comme sensible à la casse ». Les serveurs qui transmettent votre message doivent garder les majuscules et les minuscules exactement comme elles sont écrites. Le serveur de réception qui héberge la boîte décide si `Smith` et `smith` appartiennent à deux personnes distinctes.

La même section avertit aussi que « exploiter la sensibilité à la casse des parties locales des boîtes nuit à l'interopérabilité et est déconseillé ». Imaginez deux collègues dans la même entreprise, JSmith@ et jsmith@, et le nombre de fois où leur courrier serait mélangé. Les grands fournisseurs évitent ce problème en ignorant totalement la casse.

## Gmail et Outlook

Les fournisseurs qui traitent la plus grande partie du courrier grand public ont décidé d'ignorer complètement les majuscules. Des experts produit de la communauté d'aide Gmail confirment que Gmail ignore les majuscules, à la création du compte comme à l'arrivée du courrier. Que quelqu'un écrive à `JaneDoe@gmail.com` ou à `janedoe@gmail.com`, Google livre les deux dans la même boîte. Google traite aussi `@googlemail.com` et `@gmail.com` comme la même adresse.

Gmail ignore aussi les points dans les adresses grand public. `jane.doe@gmail.com` et `janedoe@gmail.com` arrivent donc dans la même boîte de réception. Mais ne supposez pas que cela vaut partout. La documentation de Google indique que les points comptent pour les comptes Google Workspace gérés par des domaines professionnels ou scolaires. Les points et les majuscules sont deux règles distinctes. Ne supposez donc pas qu'un autre fournisseur ignore les points simplement parce que Gmail le fait.

La réponse de Microsoft est proche. Dans une réponse sur le forum d'assistance de Microsoft, un intervenant explique que la partie après le @ n'est jamais sensible à la casse. Il ajoute que la casse du nom d'utilisateur dépend du fournisseur, et que les grands fournisseurs comme Outlook et Gmail l'ignorent. La même réponse précise que quelques entreprises font tourner leurs propres serveurs sensibles à la casse.

## Quand les majuscules peuvent encore poser problème

C'est en général à la connexion que le problème apparaît. Vous vous inscrivez avec `Sarah@example.com` sur un téléphone parce que le clavier a mis la première lettre en majuscule. Plus tard, vous vous connectez en tapant `sarah@example.com`, et un système mal conçu répond qu'aucun compte n'existe. L'utilisateur n'a pas changé d'adresse, mais le formulaire de connexion a comparé le texte en tenant compte de la casse.

Les listes et les CRM ont leur propre version du problème. Quand quelqu'un s'inscrit avec `Bob@company.com` puis télécharge un guide avec `bob@company.com`, beaucoup de plateformes comptent deux contacts distincts. Cela gonfle vos statistiques et envoie des campagnes en double aux mêmes personnes. Dédoublonnez les fiches sans tenir compte de la casse avant de [vérifier ou d'envoyer](/email-list-cleaning) (en anglais) à une liste marketing.

Il reste enfin le rare serveur d'entreprise qui applique strictement la casse, l'exception citée dans la réponse de Microsoft. Si un contact écrit son adresse `M.MacDonald@specialtycorp.com` sur une carte de visite, gardez ces majuscules quand vous lui écrivez. Cela ne gêne pas les systèmes standards et évite des problèmes de livraison sur les systèmes qui tiennent compte de la casse.

## Si vous stockez des adresses email

Si vous développez des applications web ou gérez des bases de contacts, gardez la casse d'origine : stockez l'adresse exactement comme l'utilisateur l'a tapée, mais faites toutes les comparaisons, recherches et contrôles d'unicité en minuscules.

Garder la saisie d'origine respecte l'affichage choisi par l'utilisateur dans les profils et les en-têtes d'email. La normalisation en minuscules, elle, évite les comptes en double. Si quelqu'un s'inscrit avec `IStillUse@AOL.COM`, ne forcez pas son affichage en minuscules, mais traitez `iSTilLUSE@aol.com` comme un doublon de cette adresse.

Pour l'unicité dans PostgreSQL, indexez l'expression en minuscules plutôt que d'ajouter une simple contrainte unique :

```sql
CREATE UNIQUE INDEX users_email_lower ON users (lower(email));
```

PostgreSQL fournit aussi l'extension `citext`, qui compare les chaînes sans tenir compte de la casse. Dans MySQL, la collation par défaut (`utf8mb4_0900_ai_ci`) est déjà insensible à la casse. Les clés uniques standards gèrent donc les doublons de casse sans fonction supplémentaire.

Attention au piège de la mise en minuscules dans les langages côté serveur, en particulier Java. En Java, appeler `email.toLowerCase()` utilise la locale par défaut du serveur. Avec une locale turque, la lettre latine majuscule `I` devient `ı` (un i minuscule sans point) au lieu de `i`. Cela casse des adresses comme `INFO@example.com`. Pour éviter ce bug, passez `Locale.ROOT` :

```java
// Locale.ROOT avoids language-specific letter mapping like Turkish dotless i
String cleanEmail = email.toLowerCase(Locale.ROOT);
```

La méthode `toLowerCase()` de JavaScript ne tombe pas dans ce piège, parce qu'elle utilise les correspondances Unicode par défaut et non les réglages de locale de l'hôte. Seule `toLocaleLowerCase()` dépend de la locale.

Pour attraper les formats cassés et les mauvaises saisies avant qu'ils n'arrivent dans votre base, validez les adresses avec une [API de validation d'email](/email-validation-api) (en anglais) à l'inscription. Elle attrape les fautes de frappe et les domaines morts pendant que la personne est encore sur la page.

## Questions fréquentes

**Gmail est-il sensible à la casse ?**
Non, Gmail ignore les majuscules à la création du compte et à la livraison des messages. Si votre adresse est john.doe@gmail.com, vous recevrez les messages envoyés à JOHN.DOE@gmail.com et à John.Doe@googlemail.com. Vous ne pouvez pas créer un nouveau compte dont les lettres ne diffèrent d'un compte existant que par la casse.

**Est-ce grave si je tape mon adresse email avec des majuscules ?**
Pour un envoi normal vers des boîtes grand public ou professionnelles, les majuscules n'empêchent pas la livraison. Le serveur de réception ignore la casse et livre le message normalement. Vous devez seulement faire attention aux formulaires de connexion qui comparent les adresses email comme des chaînes exactes.

**Un identifiant email est-il sensible à la casse ?**
En pratique, non. Un identifiant email n'est qu'un autre nom pour une adresse email, et Gmail, Outlook et les autres grands fournisseurs y ignorent les majuscules. La norme permet bien à un serveur de distinguer les majuscules avant le @, mais c'est rare. Écrire votre identifiant avec des majuscules pour le rendre plus lisible a donc très peu de chances de vous faire perdre du courrier.

**Faut-il enregistrer les adresses email en minuscules ?**
Comparez et indexez les adresses email en minuscules pour éviter les comptes en double et les échecs de connexion. Garder la casse d'origine de l'utilisateur dans une colonne d'affichage permet de bien présenter les notifications. Si vous ne pouvez garder qu'une colonne, stockez l'adresse telle qu'elle a été tapée et comparez-la avec lower(), pour ne pas perdre l'original.

**Les majuscules peuvent-elles faire rebondir un email ?**
Très rarement. Cela n'arrive que sur un serveur inhabituel configuré pour traiter Admin@ et admin@ comme deux boîtes distinctes. Si une adresse avec des majuscules rebondit, cherchez d'abord une autre cause, comme une faute de frappe ou une boîte qui n'existe plus. Le code du message de rebond vous dit laquelle, comme l'explique l'article [hard bounce et soft bounce](/blog/hard-bounce-vs-soft-bounce).

Les majuscules n'empêchent pas un email d'arriver, mais [une faute de frappe](/email-checker) l'en empêche. Si vous nettoyez une liste de contacts avant le prochain envoi, passez-la d'abord dans [Giggal.ai](/email-list-cleaning) (en anglais) pour attraper les boîtes mortes et les domaines cassés.
