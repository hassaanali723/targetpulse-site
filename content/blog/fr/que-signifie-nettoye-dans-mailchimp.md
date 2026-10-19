---
title: "Que signifie « nettoyé » (cleaned) dans Mailchimp ?"
seoTitle: "Contact nettoyé (cleaned) dans Mailchimp : causes et que faire"
description: "Un contact nettoyé (cleaned) dans Mailchimp a fait un hard bounce ou trop de soft bounces, et ne reçoit plus rien. Pourquoi, ce que cela coûte et quoi faire."
slug: que-signifie-nettoye-dans-mailchimp
date: 2026-10-19
updated: 2026-10-19
keyword: contact nettoyé mailchimp
image: /blog/covers/fr/que-signifie-nettoye-dans-mailchimp.webp
imageAlt: Guide sur le statut nettoyé (cleaned) d'une audience Mailchimp avec les causes de rebond et les différences entre statuts
cta: Trouvez les adresses invalides avant que Mailchimp ne les nettoie
---

Un contact nettoyé (Cleaned) dans Mailchimp signifie que Mailchimp a cessé d'envoyer à cette adresse. Elle a fait un hard bounce, ou trop de soft bounces, et Mailchimp la considère comme invalide. Le nom induit en erreur, parce que « nettoyé » donne l'impression que Mailchimp a rangé ou réparé quelque chose pour vous. En réalité, rien n'a été réparé. Le contact reste dans votre audience avec un badge Cleaned, ne peut recevoir aucun email de votre part et ne compte pas dans votre limite mensuelle de contacts.

## Pourquoi Mailchimp nettoie une adresse

Les hard bounces sont des échecs de livraison permanents : le serveur de réception refuse directement l'email. Les raisons courantes citées par Mailchimp sont une boîte qui n'existe pas et un serveur de réception qui a bloqué la livraison de façon permanente. Les fautes de frappe, comme con au lieu de com, et les anciennes adresses de personnes qui ont quitté une entreprise en sont des exemples typiques. Dans la plupart des cas, Mailchimp nettoie automatiquement et immédiatement les adresses qui font un hard bounce, et les exclut de toutes les campagnes futures envoyées à votre audience.

Les soft bounces fonctionnent autrement, parce qu'ils représentent des échecs de livraison temporaires. Quand une adresse fait un soft bounce, Mailchimp tente à nouveau la livraison lors des envois suivants au lieu de la couper tout de suite. Mais si une adresse échoue de façon répétée, Mailchimp la convertit en hard bounce et la nettoie. Mailchimp applique un compte précis : il nettoie une adresse après 7 soft bounces si le contact n'a aucune activité d'abonné antérieure, et accepte jusqu'à 15 soft bounces pour les contacts qui ont une activité d'abonné antérieure.

Mailchimp liste plusieurs raisons pour lesquelles un message de campagne peut faire un soft bounce. La boîte du destinataire peut être pleine, inactive ou mal configurée. Son serveur de messagerie peut être en panne ou hors ligne, ou votre campagne a pu envoyer trop d'emails à ce serveur en peu de temps. Les autres raisons de soft bounce sont les messages trop volumineux, les domaines qui n'existent temporairement pas, les filtres de contenu ou les messages qui ne peuvent pas être relayés. Un email peut aussi faire un soft bounce s'il ne respecte pas les exigences antivirus, anti-spam ou d'expéditeur du serveur de destination, ou si le message [a échoué à DMARC](/blog/spf-dkim-dmarc-explained).

Mailchimp indique ne pas pouvoir prédire si un email va rebondir avant que vous ne l'envoyiez, et que chaque fournisseur de messagerie rejette le courrier selon ses propres règles. Une fois l'envoi d'une campagne terminé, les accusés de rebond restent disponibles dans vos rapports d'emails Mailchimp pendant 30 jours après l'envoi. Vous pouvez en lire plus sur la façon dont les serveurs classent les problèmes de livraison dans notre guide [hard bounce et soft bounce](/blog/hard-bounce-vs-soft-bounce), ou consulter le guide de Mailchimp [Soft vs. Hard Bounces](https://mailchimp.com/help/soft-vs-hard-bounces/).

## Nettoyé, désabonné, archivé et les autres types de contacts

Mailchimp répartit les contacts en catégories distinctes. Elles déterminent s'ils peuvent recevoir des messages et si vous payez pour eux :

| Statut | Ce que cela signifie | Peut recevoir | Compte dans la limite de contacts |
| --- | --- | --- | --- |
| Abonné (Subscribed) | A accepté de recevoir vos campagnes email | Emails marketing, SMS marketing, publicités, emails transactionnels | Oui |
| Désabonné (Unsubscribed) | A refusé de recevoir vos campagnes marketing | Publicités et emails transactionnels | Oui |
| Non abonné (Non-subscribed) | A interagi avec vous (une boutique, une intégration ou un import) sans jamais s'abonner | Publicités et emails transactionnels | Oui |
| Nettoyé (Cleaned) | L'adresse a fait un hard bounce ou des soft bounces répétés, elle n'est pas livrable | Rien | Non |
| En attente (Pending) | A envoyé un formulaire d'inscription mais n'a pas confirmé le double opt-in | Rien | Non |
| Archivé (Archived) | Retiré de l'audience active, avec conservation des données du profil | Rien | Non |
| Supprimé (Deleted) | Retiré définitivement, sans retour possible | Rien | Non |

Les statuts nettoyé et désabonné vous empêchent tous les deux d'envoyer des campagnes marketing à une adresse email, mais la différence compte pour votre facture mensuelle. Le désabonnement est le choix de l'abonné, et Mailchimp compte toujours ce contact dans votre limite mensuelle de contacts. Le nettoyage est la décision de Mailchimp après un échec de livraison. L'adresse ne peut rien recevoir, et Mailchimp ne la facture pas. Les contacts en attente qui restent non confirmés sont retirés automatiquement de votre audience après 60 jours. Les comptes sur d'anciennes offres payantes créées avant le 15 mai 2019 peuvent avoir des règles de limite de contacts différentes.

## Que faire des contacts nettoyés

Mailchimp recommande d'archiver les contacts nettoyés plutôt que de les supprimer. L'archivage garde l'historique du contact et conserve la mauvaise adresse dans votre audience, ce qui, selon Mailchimp, vous aide à ne pas rebondir de nouveau dessus. Mailchimp conseille de ne supprimer des contacts que pour les demandes liées au RGPD, parce que la suppression efface définitivement la fiche et ne peut pas être annulée. Archiver les contacts nettoyés ne réduit pas votre facture mensuelle, parce que les adresses nettoyées ne comptent de toute façon pas dans la limite de votre offre. Mailchimp explique cette règle dans sa documentation [About Cleaned Contacts](https://mailchimp.com/help/about-cleaned-contacts/).

Pour examiner ou exporter toutes les adresses nettoyées de votre audience Mailchimp, vous pouvez les isoler avec des segments. Les libellés de l'interface sont donnés en anglais, avec leur sens entre parenthèses :

1. Ouvrez l'onglet Audience de votre tableau de bord Mailchimp et cliquez sur Segments.
2. Cliquez sur Create segment (créer un segment).
3. Réglez les critères du segment pour que Email subscription status (statut d'abonnement email) soit one of Cleaned (l'un des statuts : nettoyé).
4. Cliquez sur Use segment (utiliser le segment), donnez un nom au segment et enregistrez-le.
5. Ouvrez le segment enregistré, cliquez sur Export segment (exporter le segment) et confirmez la demande d'export.
6. Cliquez sur View exports (voir les exports) dans la bannière de notification, puis sur Download CSV (télécharger le CSV) pour enregistrer le fichier.

Quand un contact est nettoyé à cause d'une simple faute de frappe, comme user@gmai.com ou name@conpany.com, vous ne pouvez pas modifier la fiche existante. Pour corriger l'erreur, ajoutez l'adresse corrigée comme un tout nouveau contact. Comme Mailchimp ne facture pas les adresses nettoyées, garder la fiche d'origine avec la faute de frappe ne vous coûte rien.

Des adresses email valides font parfois un hard bounce. Avant d'agir, regardez la raison du rebond dans votre rapport de campagne. Un pare-feu d'entreprise strict ou un filtre anti-spam a pu refuser le message avec des réponses SMTP comme Denied (refusé), Unacceptable Content (contenu inacceptable) ou Blocked (bloqué). Dans les entreprises, un filtre peut bloquer entièrement les adresses IP d'envoi de Mailchimp. L'équipe informatique du destinataire peut corriger cela en ajoutant les adresses IP de Mailchimp à sa liste d'autorisation. Dans d'autres cas, un grand fournisseur de messagerie peut vous bloquer temporairement. Selon Mailchimp, ce blocage peut être levé en un jour ou deux une fois que les plaintes pour spam diminuent. Vous pouvez diagnostiquer les réponses d'erreur des serveurs en [lisant les messages de rebond](/blog/550-5-7-1-error). Si l'adresse est bien valide et que l'obstacle à la livraison a été levé, le contact doit se réinscrire par votre formulaire d'inscription pour revenir dans votre audience. Mailchimp ne vous permet pas de repasser vous-même un contact nettoyé au statut abonné.

## Quand beaucoup de contacts sont nettoyés d'un coup

Si une campagne récente a fait nettoyer un grand nombre de contacts d'un coup, votre compte risque une suspension automatique. Mailchimp suspend automatiquement les comptes quand un seul envoi dépasse les seuils établis du secteur pour les rebonds, les désabonnements ou les plaintes pour abus. Mailchimp indique que les fournisseurs d'accès à internet et les organisations anti-spam l'obligent à appliquer ces limites. Si Mailchimp suspend votre compte, l'envoi est désactivé pendant que les équipes de conformité enquêtent, mais la connexion, les appels API et l'accès aux données continuent de fonctionner normalement.

Les vieilles listes sont la cause habituelle, parce que les gens changent d'emploi, abandonnent des boîtes et ferment des comptes. Si vous n'avez pas écrit à votre audience depuis un moment, Mailchimp conseille de reconfirmer vos contacts avant de programmer une campagne de masse, en demandant aux abonnés de confirmer qu'ils veulent toujours recevoir vos messages.

Mailchimp recommande aussi fortement d'authentifier votre domaine d'envoi, de [configurer DMARC](/blog/what-is-a-dmarc-record) et de ne jamais utiliser une adresse email gratuite Gmail ou Yahoo comme adresse From.

## Comment éviter que des contacts soient nettoyés

Le moyen le plus direct d'éviter que des adresses soient nettoyées est de vérifier vos listes avant de les importer ou d'envoyer des campagnes. Un outil de vérification d'email teste si chaque boîte existe vraiment sur le serveur de destination avant le départ d'une campagne. Les adresses invalides ne rebondissent donc pas dans votre compte. C'est là que [Giggal peut se connecter à Mailchimp](/integrations) avec une clé API : il importe les contacts abonnés de votre audience, vérifie si chaque boîte existe et résout les adresses sur les [domaines catch-all](/catch-all-verification). Une fois la vérification terminée, vous téléchargez les résultats en fichier CSV, puis vous archivez ou désabonnez vous-même les mauvaises adresses dans Mailchimp. Giggal ne modifie rien dans votre audience Mailchimp.

Vérifier avant d'envoyer limite les rebonds. Si vous avez un ancien segment qui n'a pas reçu d'email depuis un moment, passez-le dans un vérificateur ou envoyez une campagne de reconfirmation avant de l'inclure dans une newsletter principale. Assurez-vous que vos enregistrements d'authentification de domaine restent valides dans le DNS, parce qu'un échec d'alignement DMARC fait partie des causes de soft bounce reconnues par Mailchimp. N'oubliez pas que vérifier votre audience ne restaurera pas les contacts que Mailchimp a déjà nettoyés. Une fois qu'une adresse a reçu le statut nettoyé, Mailchimp ne permet à cette personne de revenir que par une nouvelle inscription sur votre formulaire.

## Questions fréquentes

**Les contacts nettoyés comptent-ils dans ma facture Mailchimp ?**
Non. Les contacts nettoyés ne comptent pas dans votre limite mensuelle de contacts, et Mailchimp ne les facture pas. Parmi les types de contacts, seuls les contacts abonnés, désabonnés et non abonnés comptent dans la limite de contacts de votre offre.

**Puis-je réabonner un contact nettoyé ?**
Non. Vous ne pouvez pas repasser manuellement un contact nettoyé au statut abonné depuis votre tableau de bord Mailchimp. L'abonné doit saisir de nouveau ses informations dans votre formulaire d'inscription hébergé par Mailchimp ou dans un formulaire intégré à votre site pour se réabonner.

**Combien de soft bounces avant que Mailchimp ne nettoie un contact ?**
Mailchimp nettoie une adresse après 7 soft bounces si le contact n'a aucune activité d'abonné antérieure enregistrée. Si le contact a une activité d'abonné antérieure, Mailchimp accepte jusqu'à 15 soft bounces avant de convertir l'adresse en hard bounce et de la nettoyer.

**Faut-il supprimer les contacts nettoyés ?**
Non. Mailchimp recommande d'archiver les contacts nettoyés plutôt que de les supprimer. L'archivage garde la fiche dans votre audience, ce qui, selon Mailchimp, vous aide à ne pas rebondir de nouveau sur cette adresse. Mailchimp conseille de ne supprimer des contacts que pour le RGPD.

**Pourquoi Mailchimp a-t-il nettoyé une adresse que je sais valide ?**
Des adresses email valides peuvent faire un hard bounce si un filtre anti-spam ou un pare-feu d'entreprise bloque les serveurs de Mailchimp avec des réponses SMTP comme Denied ou Blocked. Si le destinataire demande à son administrateur réseau d'autoriser les adresses IP d'envoi de Mailchimp, il peut revenir dans votre audience par votre formulaire d'inscription.

Un badge Cleaned, c'est Mailchimp qui protège votre réputation d'expéditeur après coup. Vérifier d'abord empêche le rebond d'arriver. Passez votre liste d'abonnés dans [Giggal.ai](/email-list-cleaning) (en anglais) avant votre prochain envoi pour trouver les adresses invalides avant que Mailchimp ne les nettoie.
