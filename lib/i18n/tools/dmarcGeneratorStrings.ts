// All page copy for the DMARC generator, one object per language the page ships in.
// The page is components/tools/DmarcGenerator/DmarcGeneratorPage.tsx; the URLs live in
// CLUSTERS.dmarcGenerator (lib/i18n/clusters.ts). The tool's own labels are in
// lib/i18n/tools/dmarcToolStrings.ts.
//
// Inline markup (rendered by components/disposable/LocalText.tsx `Rich`):
// **bold** and [label](/english-path). Paths are always English; the page routes
// each one to the reader's language when that page exists.
//
// English is the original page wording moved here unchanged.

import type { Locale } from '@/lib/i18n/clusters'
import type { FaqItem } from '@/components/landing/FaqAccordion'

export interface DmarcPageStrings {
  metaTitle: string
  ogTitle: string
  description: string
  ogLocale?: string
  ogImage: string
  ogAlt: string
  crumb: string
  appName: string
  featureList: string[]
  h1: string
  heroIntro: string
  howTitle: string
  /** The first step names the tool's "Already have a DMARC record?" toggle. */
  howSteps: [string, string, string, string]
  imageAlt: string
  changedTitle: string
  /** May carry a link. */
  changedText: string
  policyTitle: string
  /** The third may carry a link. */
  policyParas: [string, string, string]
  reportsTitle: string
  reportsParas: [string, string]
  mistakesTitle: string
  /** The second may carry a link. */
  mistakesParas: [string, string]
  faqTitle: string
  faqs: FaqItem[]
  ctaHeadline: string
  /** English CTA band only; the localized band uses each language's standard offer line and button. */
  ctaSupporting?: string
  ctaButton?: string
}

const en: DmarcPageStrings = {
  metaTitle: 'Free DMARC Generator: Build a DMARC Record (2026) | Giggal.ai',
  ogTitle: 'Free DMARC Generator: Build a DMARC Record (2026)',
  description:
    'Build a valid DMARC record for the 2026 standard (RFC 9989): policy, subdomains, reports and test mode. Paste an old record to remove retired tags. Free.',
  ogImage: '/tools/dmarc-generator-og-v2.webp',
  ogAlt: 'Free DMARC Record Generator',
  crumb: 'DMARC Record Generator',
  appName: 'Free DMARC Record Generator',
  featureList: [
    'Build valid DMARC records for RFC 9989 (2026 standard)',
    'Clean old records by removing retired tags (pct, rf, ri)',
    'Configure policy, subdomains, reporting and test mode (t=y)',
    'Generate external destination consent authorization records',
    'Runs 100% in-browser with zero telemetry',
  ],
  h1: 'DMARC Record Generator',
  heroIntro:
    'A DMARC record tells mail providers what to do with email that fakes your domain. Answer three questions to build yours.',
  howTitle: 'How to publish your DMARC record',
  howSteps: [
    'Fill in the three steps above. If you already have a record, paste it under “Already have a DMARC record?” to clean it up.',
    'At your DNS host, create a TXT record with the host name _dmarc. Some providers want the full name, _dmarc.yourdomain.com.',
    "Paste the value and save. Make sure it's the only DMARC record on the domain; receivers that find two ignore both.",
    'Wait for DNS to update, then watch your report inbox (the rua address). Providers that send aggregate reports should send them at least once every 24 hours.',
  ],
  imageAlt: 'Illustration of a DMARC policy record with three enforcement steps and protective shield.',
  changedTitle: 'What changed for DMARC records in 2026',
  changedText:
    "In May 2026, RFC 9989 replaced RFC 7489 and put DMARC on the Standards Track. Records still start with v=DMARC1, so existing records keep working. Three tags are retired: pct, rf and ri. Two are new: t, a test mode, and np, a policy for subdomains that don't exist. This DMARC record generator never writes the retired tags, and the check for existing records strips them out. The full tag list is in [what is a DMARC record](/blog/what-is-a-dmarc-record).",
  policyTitle: 'Which DMARC policy to choose',
  policyParas: [
    'Start with p=none and a rua address. Nothing changes for your mail, and the reports show you which services send as your domain. The standard says getting every legitimate source authenticated can take many months. For domains whose users post to mailing lists, it suggests p=none for at least a month, then quarantine for an equally long period, comparing results before you move to reject.',
    "The t=y option helps with the last step. Publish p=reject with t=y and receivers apply quarantine instead, so you can see what would have been rejected without losing mail. Remove t=y when you're ready.",
    'Before you publish reject, make sure all your mail is DKIM-signed. The standard says a domain at p=reject must not rely on SPF alone, because forwarding breaks SPF. If you run your own mail server, the [DKIM generator](/dkim-generator) can create a key.',
  ],
  reportsTitle: 'Reporting addresses',
  reportsParas: [
    "rua is where aggregate reports go: XML files, usually covering one day each, listing which IP addresses sent mail as your domain and whether they passed. ruf is for per-message failure reports, which many receivers redact heavily or don't send at all for privacy reasons, so don't rely on them.",
    "If a report address is on a different domain than the one you're protecting, for example a reporting service, that domain has to publish a consent record before receivers will send anything there. The helper above writes the record for you; send it to whoever runs the reporting domain. The rule is in section 4 of RFC 9990.",
  ],
  mistakesTitle: 'Mistakes this DMARC generator prevents',
  mistakesParas: [
    "The generator always puts v=DMARC1 first, because receivers ignore a record that starts with anything else. It adds the mailto: prefix that rua and ruf addresses need, and flags addresses that look wrong. It never writes pct, and when you check an old record with pct below 100, it suggests t=y instead. It warns you when you choose reject, since that's only safe once all your mail is DKIM-signed, and when strict alignment would make mail from your subdomains fail.",
    "The one thing it can't check is your DNS. Publish the result as the only DMARC record on the domain. For how DMARC works with SPF and DKIM, see [SPF, DKIM and DMARC explained](/blog/spf-dkim-dmarc-explained).",
  ],
  faqTitle: 'Frequently asked questions',
  faqs: [
    {
      q: 'What should my first DMARC record be?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc-reports@yourdomain.com. It doesn’t change how your mail is handled, and it starts the reports. Choose Monitor only in the tool to build it.',
    },
    {
      q: 'Is pct still supported?',
      a: 'Not in the current standard. RFC 9989 retired pct along with rf and ri. A leftover pct=100 is harmless, but if you want a softer rollout, use t=y instead of a percentage.',
    },
    {
      q: 'What does t=y do?',
      a: 'It asks receivers to apply one level below your published policy, so reject is treated as quarantine and quarantine as none. It doesn’t change the reports, and it does nothing on p=none.',
    },
    {
      q: 'Do I need rua and ruf?',
      a: 'You need rua if you want to see what’s happening; without it you get no aggregate reports. ruf is optional, and many receivers don’t send failure reports at all.',
    },
    {
      q: 'What is np?',
      a: 'The policy for subdomains that don’t exist in DNS, such as a made-up invoices-2026.yourdomain.com. If you leave it out, sp applies, and if sp is missing too, p does.',
    },
    {
      q: 'Where do I publish the record?',
      a: 'As a TXT record at _dmarc.yourdomain.com. Most DNS panels only need _dmarc in the host field and add the domain themselves.',
    },
  ],
  ctaHeadline: 'DMARC done? Check your list next.',
  ctaSupporting:
    'Authentication proves the mail is yours. Verifying your list stops bounces from addresses that no longer exist. 1,000 free credits.',
  ctaButton: 'Get 1,000 free credits',
}

const de: DmarcPageStrings = {
  metaTitle: 'DMARC-Generator: DMARC-Eintrag kostenlos erstellen | Giggal.ai',
  ogTitle: 'DMARC-Generator: DMARC-Eintrag kostenlos erstellen',
  description:
    'Kostenloser DMARC-Generator: gültiger DMARC-Eintrag nach RFC 9989 (2026) mit Richtlinie, Subdomains, Berichten und Testmodus. Bereinigt auch alte Einträge.',
  ogLocale: 'de_DE',
  ogImage: '/og-card.png',
  ogAlt: 'Kostenloser DMARC-Generator von Giggal.ai',
  crumb: 'DMARC-Generator',
  appName: 'Kostenloser DMARC-Generator',
  featureList: [
    'Erstellt gültige DMARC-Einträge nach RFC 9989 (Standard von 2026)',
    'Bereinigt alte Einträge und entfernt abgeschaffte Tags (pct, rf, ri)',
    'Richtlinie, Subdomains, Berichte und Testmodus (t=y) einstellen',
    'Erstellt Freigabe-Einträge für externe Berichtsadressen',
    'Läuft vollständig im Browser, ohne Telemetrie',
  ],
  h1: 'DMARC-Generator',
  heroIntro:
    'Ein DMARC-Eintrag sagt E-Mail-Anbietern, was mit gefälschten E-Mails unter Ihrer Domain passieren soll. Beantworten Sie drei Fragen, und der DMARC-Generator erstellt Ihren Eintrag.',
  howTitle: 'So veröffentlichen Sie Ihren DMARC-Eintrag',
  howSteps: [
    'Gehen Sie die drei Schritte oben durch. Haben Sie schon einen Eintrag, fügen Sie ihn unter "Sie haben schon einen DMARC-Eintrag?" ein, um ihn zu bereinigen.',
    'Legen Sie bei Ihrem DNS-Anbieter einen TXT-Eintrag mit dem Hostnamen _dmarc an. Manche Anbieter wollen den vollständigen Namen, _dmarc.ihredomain.de.',
    'Fügen Sie den Wert ein und speichern Sie. Achten Sie darauf, dass es der einzige DMARC-Eintrag der Domain ist. Empfänger, die zwei finden, ignorieren beide.',
    'Warten Sie, bis das DNS aktualisiert ist. Beobachten Sie dann das Postfach für Ihre Berichte (die rua-Adresse). Anbieter, die Sammelberichte senden, sollen das mindestens alle 24 Stunden tun.',
  ],
  imageAlt: 'Illustration: Ein DMARC-Eintrag mit einer Richtlinie in drei Stufen und einem Schutzschild.',
  changedTitle: 'Was sich 2026 für DMARC-Einträge geändert hat',
  changedText:
    'Im Mai 2026 hat RFC 9989 den RFC 7489 ersetzt. DMARC ist damit Teil des Standards Track. Einträge beginnen weiterhin mit v=DMARC1. Bestehende Einträge funktionieren also weiter. Drei Tags sind abgeschafft: pct, rf und ri. Zwei sind neu: t, ein Testmodus, und np, eine Richtlinie für Subdomains, die es nicht gibt. Dieser DMARC-Generator schreibt die abgeschafften Tags nie, und die Prüfung bestehender Einträge entfernt sie. Alle Tags finden Sie in [Was ist ein DMARC-Eintrag?](/blog/what-is-a-dmarc-record).',
  policyTitle: 'Welche DMARC-Richtlinie Sie wählen sollten',
  policyParas: [
    'Beginnen Sie mit p=none und einer rua-Adresse. Für Ihre E-Mails ändert sich nichts. Die Berichte zeigen Ihnen, welche Dienste unter Ihrer Domain senden. Der Standard sagt, dass es viele Monate dauern kann, bis jede legitime Quelle authentifiziert ist. Für Domains, deren Nutzer an Mailinglisten schreiben, schlägt er mindestens einen Monat p=none vor. Danach folgt quarantine für einen ebenso langen Zeitraum. Vergleichen Sie die Ergebnisse, bevor Sie zu reject wechseln.',
    'Die Option t=y hilft beim letzten Schritt. Wenn Sie p=reject mit t=y veröffentlichen, wenden Empfänger stattdessen quarantine an. So sehen Sie, was abgelehnt worden wäre, ohne E-Mails zu verlieren. Entfernen Sie t=y, wenn Sie bereit sind.',
    'Bevor Sie reject veröffentlichen, sollten alle Ihre E-Mails eine DKIM-Signatur tragen. Laut Standard darf sich eine Domain mit p=reject nicht allein auf SPF verlassen, weil SPF bei Weiterleitungen fehlschlägt. Wenn Sie einen eigenen Mailserver betreiben, erstellt der [DKIM-Generator](/dkim-generator) einen Schlüssel.',
  ],
  reportsTitle: 'Adressen für Berichte',
  reportsParas: [
    'An die rua-Adresse gehen die Sammelberichte. Das sind XML-Dateien, die meist je einen Tag abdecken. Sie zeigen, welche IP-Adressen unter Ihrer Domain gesendet haben und ob diese E-Mails die Prüfung bestanden haben. An die ruf-Adresse gehen Fehlerberichte zu einzelnen Nachrichten. Viele Empfänger schwärzen diese aus Datenschutzgründen stark oder senden sie gar nicht. Verlassen Sie sich deshalb nicht darauf.',
    'Liegt eine Berichtsadresse auf einer anderen Domain als der, die Sie schützen? Das ist zum Beispiel bei einem Berichtsdienst der Fall. Dann muss diese Domain einen Freigabe-Eintrag veröffentlichen, bevor Empfänger Berichte dorthin senden. Das Tool oben schreibt diesen Eintrag für Sie. Senden Sie ihn an die Person, die die Berichtsdomain verwaltet. Die Regel steht in Abschnitt 4 von RFC 9990.',
  ],
  mistakesTitle: 'Fehler, die dieser DMARC-Generator verhindert',
  mistakesParas: [
    'Der Generator setzt v=DMARC1 immer an den Anfang, denn Empfänger ignorieren einen Eintrag, der anders beginnt. Er ergänzt das Präfix mailto:, das rua- und ruf-Adressen brauchen, und markiert Adressen, die falsch aussehen. Er schreibt nie pct. Wenn Sie einen alten Eintrag mit pct unter 100 prüfen, schlägt er stattdessen t=y vor. Er warnt Sie, wenn Sie reject wählen, denn das ist erst sicher, wenn alle Ihre E-Mails DKIM-signiert sind. Er warnt auch, wenn striktes Alignment E-Mails von Ihren Subdomains durchfallen ließe.',
    'Nur Ihr DNS kann er nicht prüfen. Veröffentlichen Sie das Ergebnis als einzigen DMARC-Eintrag der Domain. Wie DMARC mit SPF und DKIM zusammenarbeitet, lesen Sie in [SPF, DKIM und DMARC erklärt](/blog/spf-dkim-dmarc-explained).',
  ],
  faqTitle: 'Häufige Fragen zum DMARC-Eintrag',
  faqs: [
    {
      q: 'Wie sollte mein erster DMARC-Eintrag aussehen?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc-berichte@ihredomain.de. Er ändert nichts daran, wie Ihre E-Mails behandelt werden, und startet die Berichte. Wählen Sie im Tool "Nur beobachten", um ihn zu erstellen.',
    },
    {
      q: 'Wird pct noch unterstützt?',
      a: 'Im aktuellen Standard nicht. RFC 9989 hat pct zusammen mit rf und ri abgeschafft. Ein übrig gebliebenes pct=100 schadet nicht. Für eine schrittweise Einführung nutzen Sie aber t=y statt eines Prozentsatzes.',
    },
    {
      q: 'Was bewirkt t=y?',
      a: 'Es bittet Empfänger, eine Stufe milder vorzugehen als Ihre veröffentlichte Richtlinie. Aus reject wird also quarantine, und aus quarantine wird none. Die Berichte ändern sich nicht, und bei p=none hat es keine Wirkung.',
    },
    {
      q: 'Brauche ich rua und ruf?',
      a: 'rua brauchen Sie, wenn Sie sehen wollen, was passiert. Ohne rua bekommen Sie keine Sammelberichte. ruf ist optional, und viele Empfänger senden gar keine Fehlerberichte.',
    },
    {
      q: 'Was ist np?',
      a: 'Die Richtlinie für Subdomains, die es im DNS nicht gibt, etwa ein erfundenes rechnungen-2026.ihredomain.de. Fehlt np, gilt sp. Fehlt auch sp, gilt p.',
    },
    {
      q: 'Wo veröffentliche ich den DMARC-Eintrag?',
      a: 'Als TXT-Eintrag unter _dmarc.ihredomain.de. Bei den meisten DNS-Oberflächen tragen Sie nur _dmarc in das Feld für den Host ein. Die Domain hängt die Oberfläche selbst an.',
    },
  ],
  ctaHeadline: 'DMARC eingerichtet? Prüfen Sie als Nächstes Ihre E-Mail-Liste',
}


const fr: DmarcPageStrings = {
  metaTitle: 'Générateur DMARC Gratuit : Créer un Enregistrement DMARC (2026) | Giggal.ai',
  ogTitle: 'Générateur DMARC Gratuit : Créer un Enregistrement DMARC (2026)',
  description:
    'Générez un enregistrement DMARC conforme au standard 2026 (RFC 9989) : politique, sous-domaines, rapports et mode test. Nettoyez les anciennes balises obsolètes. Gratuit.',
  ogLocale: 'fr_FR',
  ogImage: '/og-card.png',
  ogAlt: 'Générateur d\'enregistrement DMARC Gratuit',
  crumb: 'Générateur DMARC',
  appName: 'Générateur d\'enregistrement DMARC Gratuit',
  featureList: [
    'Génération d\'enregistrements DMARC conformes RFC 9989 (norme 2026)',
    'Nettoyage des anciens enregistrements et retrait des balises obsolètes (pct, rf, ri)',
    'Configuration des politiques, sous-domaines, rapports et mode test (t=y)',
    'Création automatique des enregistrements d\'autorisation externe (RFC 9990)',
    'Exécution 100% dans le navigateur sans transmission de données',
  ],
  h1: 'Générateur d\'enregistrement DMARC',
  heroIntro:
    'Un enregistrement DMARC indique aux messageries comment traiter les e-mails usurpant votre nom de domaine. Répondez à trois questions pour créer le vôtre.',
  howTitle: 'Comment publier votre enregistrement DMARC',
  howSteps: [
    'Remplissez les trois étapes ci-dessus. Si vous possédez déjà un enregistrement, collez-le sous "Vous avez déjà un enregistrement DMARC ?" pour le nettoyer.',
    'Chez votre hébergeur DNS, créez un enregistrement TXT avec l\'hôte _dmarc. Certains hébergeurs exigent le nom complet, _dmarc.votredomaine.fr.',
    'Collez la valeur et sauvegardez. Assurez-vous qu\'il s\'agit du seul enregistrement DMARC du domaine ; la présence de deux enregistrements entraîne leur rejet.',
    'Patientez pendant la propagation DNS, puis surveillez votre boîte de rapports (adresse rua). Les fournisseurs envoient les rapports agrégés toutes les 24 heures.',
  ],
  imageAlt: 'Illustration d\'un enregistrement DMARC avec trois niveaux de politique et un bouclier protecteur.',
  changedTitle: 'Ce qui a changé pour DMARC en 2026',
  changedText:
    'En mai 2026, la RFC 9989 a remplacé la RFC 7489 en intégrant DMARC au Standards Track officiel. Les enregistrements débutent toujours par v=DMARC1. Trois balises sont désormais obsolètes : pct, rf et ri. Deux nouvelles balises apparaissent : t (mode test) et np (politique pour les sous-domaines inexistants). Ce générateur supprime automatiquement les balises obsolètes. Consultez notre article [qu\'est-ce qu\'un enregistrement DMARC ?](/blog/what-is-a-dmarc-record).',
  policyTitle: 'Quelle politique DMARC choisir',
  policyParas: [
    'Commencez par p=none avec une adresse rua. Vos flux d\'e-mails ne sont pas modifiés et les rapports vous montrent qui envoie des messages sous votre nom de domaine. Le standard indique que l\'authentification complète de toutes les sources légitimes peut prendre plusieurs mois. Pour les domaines actifs, maintenez p=none pendant au moins un mois avant d\'évoluer.',
    'L\'option t=y facilite la transition finale. En publiant p=reject avec t=y, les serveurs appliquent une mise en quarantaine au lieu du rejet strict, vous permettant d\'observer l\'impact sans perdre de messages légitimes.',
    'Avant d\'activer p=reject, assurez-vous que tous vos e-mails sont signés avec DKIM. La norme stipule qu\'un domaine en p=reject ne doit pas reposer uniquement sur SPF, car les transferts d\'e-mails brisent SPF. Utilisez notre [générateur DKIM](/dkim-generator) pour créer vos clés.',
  ],
  reportsTitle: 'Adresses de réception des rapports',
  reportsParas: [
    'rua est l\'adresse recevant les rapports agrégés : des fichiers XML quotidiens récapitulant les adresses IP expéditrices et leurs statuts d\'authentification. ruf est dédié aux rapports d\'échec individuels, souvent omis par les messageries pour des raisons de confidentialité.',
    'Si l\'adresse de rapport se situe sur un domaine différent de celui que vous protégez (par exemple un service d\'analyse), ce domaine tiers doit publier un enregistrement d\'autorisation (consent record) selon la RFC 9990, généré ci-dessus.',
  ],
  mistakesTitle: 'Erreurs évitées par ce générateur',
  mistakesParas: [
    'Le générateur place toujours v=DMARC1 en tête, ajoute automatiquement le préfixe mailto: requis pour rua et ruf, et exclut la balise obsolète pct en proposant t=y à la place. Il avertit également si l\'alignement strict risque de bloquer vos sous-domaines.',
    'La seule vérification externe nécessaire concerne votre DNS : publiez un enregistrement DMARC unique par domaine. Pour approfondir, lisez notre [guide explicatif SPF, DKIM et DMARC](/blog/spf-dkim-dmarc-explained).',
  ],
  faqTitle: 'Foire aux questions sur DMARC',
  faqs: [
    {
      q: 'Quel doit être mon tout premier enregistrement DMARC ?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc@votredomaine.fr. Cette configuration n\'altère pas la livraison de vos e-mails et active la réception des rapports d\'audit. Choisissez "Surveillance seule" dans l\'outil.',
    },
    {
      q: 'La balise pct est-elle encore supportée ?',
      a: 'Non, la RFC 9989 a retiré la balise pct ainsi que rf et ri. Pour tester une politique de manière progressive, activez le mode test t=y au lieu d\'un pourcentage.',
    },
    {
      q: 'Que fait le mode test (t=y) ?',
      a: 'Il demande aux serveurs destinataires d\'appliquer une politique un cran inférieure : reject devient quarantine, et quarantine devient none. Les rapports continuent d\'indiquer les échecs réels.',
    },
    {
      q: 'Ai-je besoin à la fois de rua et ruf ?',
      a: 'rua est indispensable pour obtenir la visibilité sur vos envois. ruf est facultatif car la plupart des grands fournisseurs de messagerie ne l\'envoient plus pour préserver la vie privée.',
    },
    {
      q: 'À quoi sert la balise np ?',
      a: 'Elle définit la politique pour les sous-domaines inexistants dans le DNS (ex. faussesfactures.votredomaine.fr). Sans cette balise, la politique sp s\'applique.',
    },
    {
      q: 'Où dois-je publier l\'enregistrement ?',
      a: 'Sous la forme d\'un enregistrement DNS TXT au nom de _dmarc.votredomaine.fr. La plupart des consoles DNS ajoutent automatiquement votre domaine de base.',
    },
  ],
  ctaHeadline: 'DMARC configuré ? Vérifiez maintenant votre liste d\'e-mails.',
}

const es: DmarcPageStrings = {
  metaTitle: 'Generador DMARC Gratis: Crear Registro DMARC (2026) | Giggal.ai',
  ogTitle: 'Generador DMARC Gratis: Crear Registro DMARC (2026)',
  description:
    'Genera un registro DMARC válido según el estándar 2026 (RFC 9989): políticas, subdominios, reportes y modo de prueba. Limpia etiquetas obsoletas gratis.',
  ogLocale: 'es_ES',
  ogImage: '/og-card.png',
  ogAlt: 'Generador de Registro DMARC Gratis',
  crumb: 'Generador DMARC',
  appName: 'Generador de Registro DMARC Gratis',
  featureList: [
    'Crea registros DMARC válidos para RFC 9989 (estándar 2026)',
    'Limpia registros antiguos eliminando etiquetas obsoletas (pct, rf, ri)',
    'Configura política, subdominios, reportes y modo de prueba (t=y)',
    'Genera registros de autorización de reporte externo (RFC 9990)',
    'Ejecución 100% en el navegador sin almacenamiento de datos',
  ],
  h1: 'Generador de Registro DMARC',
  heroIntro:
    'Un registro DMARC indica a los proveedores de correo qué hacer con los mensajes que falsifican tu dominio. Responde tres preguntas para generar el tuyo.',
  howTitle: 'Cómo publicar tu registro DMARC',
  howSteps: [
    'Completa los tres pasos anteriores. Si ya tienes un registro, pégalo en "¿Ya tienes un registro DMARC?" para limpiarlo.',
    'En tu proveedor de DNS, crea un registro TXT con el nombre de host _dmarc. Algunos proveedores requieren el nombre completo _dmarc.tudominio.com.',
    'Pega el valor generado y guarda los cambios. Asegúrate de que sea el único registro DMARC del dominio para evitar que sea ignorado.',
    'Espera la propagación DNS y revisa tu buzón de reportes (dirección rua). Los servidores envían resúmenes consolidados cada 24 horas.',
  ],
  imageAlt: 'Ilustración de un registro DMARC con tres niveles de aplicación y escudo de seguridad.',
  changedTitle: 'Novedades para los registros DMARC en 2026',
  changedText:
    'En mayo de 2026, la RFC 9989 reemplazó a la RFC 7489 y elevó DMARC a estándar oficial de Internet. Los registros continúan comenzando con v=DMARC1. Tres etiquetas han sido retiradas: pct, rf y ri. Se han incorporado dos nuevas: t (modo de prueba) y np (política para subdominios inexistentes). Este generador elimina automáticamente las etiquetas obsoletas. Más detalles en [qué es un registro DMARC](/blog/what-is-a-dmarc-record).',
  policyTitle: 'Qué política DMARC elegir',
  policyParas: [
    'Comienza siempre con p=none y una dirección rua. Tus envíos no sufrirán alteraciones y recibirás informes de qué servidores envían correo en tu nombre. El estándar señala que autenticar todas las fuentes legítimas puede llevar varios meses.',
    'La opción t=y permite suavizar la transición hacia el bloqueo estricto. Al publicar p=reject con t=y, los receptores aplican cuarentena, permitiéndote comprobar qué se habría bloqueado sin perder mensajes legítimos.',
    'Antes de activar p=reject, asegúrate de que todos tus correos salientes estén firmados con DKIM. El estándar prohíbe depender solo de SPF al aplicar reject debido al reenvío de correo. Usa nuestro [generador DKIM](/dkim-generator) si gestionas tu servidor.',
  ],
  reportsTitle: 'Direcciones para recepción de reportes',
  reportsParas: [
    'rua recibe los reportes agregados: archivos XML diarios con el desglose de direcciones IP que enviaron correo bajo tu dominio y su resultado de validación. ruf recibe reportes forenses de fallos específicos, aunque muchos proveedores no los envían por privacidad.',
    'Si la dirección de reporte pertenece a un dominio diferente al protegido (por ejemplo un servicio de monitorización), ese dominio externo debe publicar un registro de consentimiento según RFC 9990, que nuestra herramienta genera automáticamente.',
  ],
  mistakesTitle: 'Errores que evita este generador DMARC',
  mistakesParas: [
    'Garantiza que v=DMARC1 sea siempre la primera etiqueta, añade el prefijo obligatorio mailto: a las direcciones de reporte y descarta etiquetas en desuso como pct ofreciendo t=y. También avisa si la alineación estricta afectaría a tus subdominios.',
    'Publica siempre un único registro DMARC por dominio. Para conocer en profundidad el ecosistema de seguridad de correo, consulta nuestra [guía de SPF, DKIM y DMARC](/blog/spf-dkim-dmarc-explained).',
  ],
  faqTitle: 'Preguntas frecuentes sobre DMARC',
  faqs: [
    {
      q: '¿Cómo debe ser mi primer registro DMARC?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc@tudominio.com. No altera el comportamiento de tus correos y activa la recepción de informes. Selecciona "Solo monitorizar" en la herramienta.',
    },
    {
      q: '¿Se sigue utilizando la etiqueta pct?',
      a: 'No en el estándar RFC 9989 actual. Ha sido retirada junto con rf y ri. Para un despliegue progresivo y seguro, utiliza el modo de prueba t=y en lugar de porcentajes.',
    },
    {
      q: '¿Qué función cumple t=y?',
      a: 'Indica a los receptores que apliquen un nivel inferior de rigurosidad: reject se procesa como quarantine, y quarantine como none. Los reportes continúan mostrando los fallos reales.',
    },
    {
      q: '¿Son necesarias ambas direcciones rua y ruf?',
      a: 'rua es fundamental para supervisar quién envía correos desde tu dominio. ruf es opcional y la mayoría de proveedores prescinden de enviarlo por motivos de privacidad.',
    },
    {
      q: '¿Qué significa la etiqueta np?',
      a: 'Define la política aplicable a subdominios inexistentes en DNS (como facturas-falsas.tudominio.com). Si se omite, se aplica el valor de sp o p.',
    },
    {
      q: '¿Dónde se publica el registro DMARC?',
      a: 'Como un registro TXT en el host _dmarc.tudominio.com. En la mayoría de paneles DNS solo necesitas escribir _dmarc en el campo de host.',
    },
  ],
  ctaHeadline: '¿DMARC configurado? Verifica ahora tu lista de correo.',
}

const it: DmarcPageStrings = {
  metaTitle: 'Generatore DMARC Gratis: Crea Record DMARC (2026) | Giggal.ai',
  ogTitle: 'Generatore DMARC Gratis: Crea Record DMARC (2026)',
  description:
    'Crea un record DMARC conforme allo standard 2026 (RFC 9989): policy, sottodomini, report e modalità test. Pulisce i record dai tag obsoleti. Gratis.',
  ogLocale: 'it_IT',
  ogImage: '/og-card.png',
  ogAlt: 'Generatore di Record DMARC Gratuito',
  crumb: 'Generatore DMARC',
  appName: 'Generatore DMARC Gratuito',
  featureList: [
    'Genera record DMARC validi secondo RFC 9989 (standard 2026)',
    'Pulisce i record esistenti eliminando i tag ritirati (pct, rf, ri)',
    'Configura policy, sottodomini, reportistica e modalità test (t=y)',
    'Crea record di autorizzazione per report verso domini esterni (RFC 9990)',
    'Funziona interamente nel browser senza tracciamento o invio dati',
  ],
  h1: 'Generatore di Record DMARC',
  heroIntro:
    'Un record DMARC dice ai provider di posta cosa fare con i messaggi che contraffanno il tuo dominio. Rispondi a tre domande per creare il tuo.',
  howTitle: 'Come pubblicare il record DMARC nel DNS',
  howSteps: [
    'Completa i tre passaggi qui sopra. Se hai già un record, incollalo sotto "Hai già un record DMARC?" per ripulirlo.',
    'Presso il tuo gestore DNS, crea un record TXT con nome host _dmarc (oppure il nome completo _dmarc.tuodominio.it).',
    'Incolla il valore generato e salva. Assicurati che sia l\'unico record DMARC presente per quel dominio.',
    'Attendi la propagazione DNS e controlla la casella dei report (indirizzo rua). I report aggregati arrivano generalmente ogni 24 ore.',
  ],
  imageAlt: 'Illustrazione di un record DMARC con tre livelli di policy e uno scudo protettivo.',
  changedTitle: 'Cosa è cambiato per i record DMARC nel 2026',
  changedText:
    'A maggio 2026, la RFC 9989 ha sostituito la RFC 7489 portando DMARC nello Standards Track ufficiale. I record iniziano sempre con v=DMARC1. Tre tag sono stati ritirati: pct, rf e ri. Due sono nuovi: t (modalità test) e np (policy per sottodomini inesistenti). Questo generatore rimuove automaticamente i tag obsoleti. Approfondisci in [cos\'è un record DMARC](/blog/what-is-a-dmarc-record).',
  policyTitle: 'Quale policy DMARC scegliere',
  policyParas: [
    'Inizia sempre con p=none e un indirizzo rua. Non cambierà nulla per la consegna delle tue email, ma riceverai i report che indicano chi invia posta usando il tuo dominio. Autenticare tutte le fonti legittime può richiedere diversi mesi.',
    'L\'opzione t=y aiuta nella fase finale. Pubblicando p=reject con t=y, i destinatari applicano la quarantena invece del blocco immediato, permettendoti di verificare cosa sarebbe stato scartato senza perdere email buone.',
    'Prima di pubblicare reject, assicurati che tutte le tue email siano firmate con DKIM. Lo standard vieta di affidarsi solo a SPF per p=reject perché l\'inoltro dei messaggi invalida SPF. Usa il nostro [generatore DKIM](/dkim-generator) per creare le chiavi.',
  ],
  reportsTitle: 'Indirizzi di reportistica',
  reportsParas: [
    'rua riceve i report aggregati: file XML giornalieri con l\'elenco degli indirizzi IP che hanno spedito a nome del tuo dominio e l\'esito dei controlli. ruf è per i report di errore dettagliati, spesso non inviati dai provider per motivi di privacy.',
    'Se l\'indirizzo per i report si trova su un dominio diverso rispetto a quello protetto, tale dominio esterno deve pubblicare un record di autorizzazione secondo la RFC 9990, generato automaticamente dallo strumento qui sopra.',
  ],
  mistakesTitle: 'Errori evitati da questo generatore',
  mistakesParas: [
    'Inserisce sempre v=DMARC1 come primo tag obbligatorio, aggiunge il prefisso mailto: agli indirizzi di report e suggerisce t=y al posto del deprecato pct. Segnala inoltre quando l\'allineamento strict potrebbe bloccare i sottodomini.',
    'Ricorda di mantenere un solo record DMARC nel DNS per ciascun dominio. Per una guida completa, consulta [SPF, DKIM e DMARC spiegati](/blog/spf-dkim-dmarc-explained).',
  ],
  faqTitle: 'Domande frequenti su DMARC',
  faqs: [
    {
      q: 'Come deve essere il mio primo record DMARC?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc@tuodominio.it. Non altera il recapito della posta e attiva la ricezione dei report. Scegli "Solo monitoraggio" nello strumento.',
    },
    {
      q: 'Il tag pct è ancora valido?',
      a: 'Non nello standard attuale. La RFC 9989 ha ritirato pct assieme a rf e ri. Se vuoi un rilascio graduale, usa la modalità test t=y al posto delle percentuali.',
    },
    {
      q: 'Cosa fa la modalità test t=y?',
      a: 'Indica ai server riceventi di applicare una policy più tollerante: reject viene trattato come quarantine, e quarantine come none. I report mantengono la massima precisione.',
    },
    {
      q: 'Servono sia rua che ruf?',
      a: 'rua è fondamentale per capire chi invia posta dal tuo dominio. ruf è opzionale e raramente supportato dai grandi provider per ragioni di privacy.',
    },
    {
      q: 'Cos\'è il tag np?',
      a: 'Indica la policy applicata ai sottodomini che non esistono nel DNS (ad esempio falsafattura.tuodominio.it). Se non impostato, eredita da sp o p.',
    },
    {
      q: 'Dove si pubblica il record DMARC?',
      a: 'Come record TXT con nome host _dmarc.tuodominio.it. Nella maggior parte dei pannelli DNS è sufficiente inserire _dmarc nel campo del nome host.',
    },
  ],
  ctaHeadline: 'DMARC configurato? Ora verifica la tua lista di email.',
}

const ptBr: DmarcPageStrings = {
  metaTitle: 'Gerador DMARC Grátis: Criar Registro DMARC (2026) | Giggal.ai',
  ogTitle: 'Gerador DMARC Grátis: Criar Registro DMARC (2026)',
  description:
    'Gere um registro DMARC válido conforme o padrão 2026 (RFC 9989): políticas, subdomínios, relatórios e modo teste. Limpe tags obsoletas. Gratuito.',
  ogLocale: 'pt_BR',
  ogImage: '/og-card.png',
  ogAlt: 'Gerador de Registro DMARC Gratuito',
  crumb: 'Gerador DMARC',
  appName: 'Gerador de Registro DMARC Gratuito',
  featureList: [
    'Gera registros DMARC compatíveis com a RFC 9989 (padrão 2026)',
    'Limpa registros antigos removendo tags aposentadas (pct, rf, ri)',
    'Configura políticas, subdomínios, relatórios e modo de teste (t=y)',
    'Cria registros de autorização para envio de relatórios externos (RFC 9990)',
    'Execução 100% no navegador, sem coleta de dados',
  ],
  h1: 'Gerador de Registro DMARC',
  heroIntro:
    'Um registro DMARC instrui os servidores de e-mail sobre o que fazer com mensagens forjadas usando o seu domínio. Responda a três perguntas para gerar o seu.',
  howTitle: 'Como publicar seu registro DMARC',
  howSteps: [
    'Preencha as três etapas acima. Se já possui um registro, cole-o em "Já possui um registro DMARC?" para higienizá-lo.',
    'No seu provedor DNS, crie um registro TXT com o nome de host _dmarc (ou nome completo _dmarc.seudominio.com.br).',
    'Cole o valor gerado e salve. Certifique-se de manter apenas um único registro DMARC por domínio.',
    'Aguarde a propagação DNS e monitore sua caixa de relatórios (endereço rua). Os relatórios consolidados chegam a cada 24 horas.',
  ],
  imageAlt: 'Ilustração de um registro DMARC com três níveis de política e escudo de proteção.',
  changedTitle: 'O que mudou para os registros DMARC em 2026',
  changedText:
    'Em maio de 2026, a RFC 9989 substituiu a RFC 7489, promovendo o DMARC a padrão oficial da Internet. Os registros continuam iniciando com v=DMARC1. Três tags foram descontinuadas: pct, rf e ri. Duas novas tags foram adicionadas: t (modo de teste) e np (política para subdomínios inexistentes). Este gerador remove automaticamente tags obsoletas. Saiba mais em [o que é um registro DMARC](/blog/what-is-a-dmarc-record).',
  policyTitle: 'Qual política DMARC escolher',
  policyParas: [
    'Inicie sempre com p=none e um endereço rua. O fluxo de e-mails permanece inalterado enquanto você recebe relatórios indicando todos os servidores que enviam mensagens pelo seu domínio.',
    'A opção t=y viabiliza uma transição controlada. Ao publicar p=reject com t=y, os destinatários aplicam quarentena, permitindo constatar rejeições sem perder mensagens autênticas.',
    'Antes de adotar reject, certifique-se de que todos os seus e-mails possuam assinatura DKIM. O padrão estipula que domínios em reject não dependam apenas de SPF devido ao encaminhamento de mensagens. Utilize nosso [gerador DKIM](/dkim-generator) se gerencia seu servidor.',
  ],
  reportsTitle: 'Endereços para recebimento de relatórios',
  reportsParas: [
    'rua recebe os relatórios agregados: relatórios diários em XML com o histórico de IPs emissores e seus status de validação. ruf recebe notificações de falhas pontuais, que muitos servidores omitem por privacidade.',
    'Se o endereço de relatório pertencer a um domínio externo, esse domínio de destino deve publicar um registro de autorização conforme a RFC 9990, gerado automaticamente pela ferramenta acima.',
  ],
  mistakesTitle: 'Erros prevenidos por este gerador',
  mistakesParas: [
    'O gerador garante que v=DMARC1 esteja sempre na abertura, inclui o prefixo obrigatório mailto: nos e-mails de relatório e descarta a tag descontinuada pct oferecendo t=y. Também alerta sobre os riscos do alinhamento estrito em subdomínios.',
    'Certifique-se de manter apenas um registro DMARC ativo no DNS. Para uma visão completa, consulte nosso [guia de SPF, DKIM e DMARC](/blog/spf-dkim-dmarc-explained).',
  ],
  faqTitle: 'Perguntas frequentes sobre DMARC',
  faqs: [
    {
      q: 'Qual deve ser o meu primeiro registro DMARC?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc@seudominio.com.br. Ele não interfere na entrega dos seus e-mails e dá início ao recebimento de relatórios. Escolha "Apenas monitorar" na ferramenta.',
    },
    {
      q: 'A tag pct ainda é suportada?',
      a: 'Não no padrão atual. A RFC 9989 descontinuou pct, rf e ri. Para uma implantação gradual, utilize o modo de teste t=y em vez de percentuais.',
    },
    {
      q: 'Qual o papel da tag t=y?',
      a: 'Ela solicita aos servidores receptores que apliquem um nível mais brando que a política publicada: reject é tratado como quarantine, e quarantine como none.',
    },
    {
      q: 'Preciso configurar rua e ruf?',
      a: 'rua é indispensável para obter visibilidade dos envios sob seu domínio. ruf é opcional e raramente enviado pelos grandes provedores.',
    },
    {
      q: 'O que significa a tag np?',
      a: 'Determina a política para subdomínios inexistentes no DNS (como cobrancas-falsas.seudominio.com.br). Quando omitida, herda o valor de sp ou p.',
    },
    {
      q: 'Onde publico o registro DMARC?',
      a: 'Como um registro TXT com o host _dmarc.seudominio.com.br. Na maioria dos gerenciadores DNS, basta digitar _dmarc no campo do host.',
    },
  ],
  ctaHeadline: 'DMARC configurado? Valide sua lista de e-mails agora.',
}

const nl: DmarcPageStrings = {
  metaTitle: 'Gratis DMARC Generator: Maak een DMARC Record (2026) | Giggal.ai',
  ogTitle: 'Gratis DMARC Generator: Maak een DMARC Record (2026)',
  description:
    'Genereer een geldig DMARC-record volgens de standaard van 2026 (RFC 9989): beleid, subdomeinen, rapportages en testmodus. Verwijder verouderde tags. Gratis.',
  ogLocale: 'nl_NL',
  ogImage: '/og-card.png',
  ogAlt: 'Gratis DMARC Record Generator',
  crumb: 'DMARC Generator',
  appName: 'Gratis DMARC Record Generator',
  featureList: [
    'Genereer geldige DMARC-records volgens RFC 9989 (standaard van 2026)',
    'Schoont oude records op en verwijdert vervallen tags (pct, rf, ri)',
    'Configureer beleid, subdomeinen, rapportage en testmodus (t=y)',
    'Maakt autorisatierecords voor externe rapportagedomeinen (RFC 9990)',
    'Werkt 100% in uw browser zonder gegevensopslag',
  ],
  h1: 'DMARC Record Generator',
  heroIntro:
    'Een DMARC-record vertelt mailproviders wat ze moeten doen met e-mails die uw domeinnaam nabootsen. Beantwoord drie vragen om uw record aan te maken.',
  howTitle: 'Hoe u uw DMARC-record publiceert',
  howSteps: [
    'Doorloop de drie bovenstaande stappen. Heeft u al een record? Plak deze onder "Heeft u al een DMARC-record?" om deze op te schonen.',
    'Maak bij uw DNS-provider een TXT-record aan met de hostnaam _dmarc (of de volledige naam _dmarc.uwdomein.nl).',
    'Plak de gegenereerde waarde en sla op. Zorg dat dit het enige DMARC-record op uw domein is om fouten te voorkomen.',
    'Wacht tot de DNS-wijziging actief is en houd uw rapportage-inbox (rua-adres) in de gaten. Rapporten worden doorgaans elke 24 uur verzonden.',
  ],
  imageAlt: 'Illustratie van een DMARC-beleidsrecord met drie beveiligingsstappen en een schild.',
  changedTitle: 'Wat er in 2026 is gewijzigd voor DMARC-records',
  changedText:
    'In mei 2026 heeft RFC 9989 de eerdere RFC 7489 vervangen en DMARC officieel op het Standards Track geplaatst. Records beginnen nog steeds met v=DMARC1. Drie tags zijn komen te vervallen: pct, rf en ri. Twee tags zijn nieuw: t (testmodus) en np (beleid voor niet-bestaande subdomeinen). Deze generator verwijdert verouderde tags automatisch. Lees meer in [wat is een DMARC-record?](/blog/what-is-a-dmarc-record).',
  policyTitle: 'Welk DMARC-beleid u moet kiezen',
  policyParas: [
    'Begin altijd met p=none en een rua-adres. Er verandert nog niets voor de aflevering van uw e-mails, terwijl u rapporten ontvangt over welke diensten uit uw naam verzenden. Het volledig valideren van alle legitieme bronnen kan enkele maanden in beslag nemen.',
    'De optie t=y ondersteunt een veilige overgang naar blokkering. Door p=reject met t=y te publiceren, plaatsen ontvangende servers verdachte mails in spam in plaats van directe weigering, zodat u kunt monitoren zonder legitieme e-mails te verliezen.',
    'Zorg dat al uw e-mails voorzien zijn van een DKIM-handtekening voordat u reject activeert. De standaard stelt dat p=reject niet uitsluitend op SPF mag leunen wegens het doorsturen van e-mails. Gebruik onze [DKIM generator](/dkim-generator) om sleutels aan te maken.',
  ],
  reportsTitle: 'Adressen voor rapportages',
  reportsParas: [
    'rua ontvangt de geaggregeerde rapporten: dagelijkse XML-bestanden met een overzicht van verzendende IP-adressen en verificatiestatussen. ruf is voor foutrapporten per bericht, die door veel providers wegens privacyredenen niet worden aangeboden.',
    'Als uw rapportage-adres op een ander domein staat dan het beschermde domein, dient dat externe domein een autorisatierecord volgens RFC 9990 te publiceren, die onze tool hierboven automatisch genereert.',
  ],
  mistakesTitle: 'Fouten die deze generator voorkomt',
  mistakesParas: [
    'Zorgt dat v=DMARC1 altijd vooraan staat, voegt het verplichte mailto: toe aan rapportadressen en vervangt de verouderde pct-tag door t=y. Waarschuwt tevens wanneer strikte uitlijning subdomeinen kan verstoren.',
    'Publiceer maximaal één DMARC-record per domein in DNS. Lees voor een volledig overzicht onze [uitleg over SPF, DKIM en DMARC](/blog/spf-dkim-dmarc-explained).',
  ],
  faqTitle: 'Veelgestelde vragen over DMARC',
  faqs: [
    {
      q: 'Wat moet mijn eerste DMARC-record zijn?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc@uwdomein.nl. Dit beïnvloedt uw e-mailbezorging niet en start de rapportage. Kies "Alleen monitoren" in de tool.',
    },
    {
      q: 'Wordt de pct-tag nog ondersteund?',
      a: 'Niet in de huidige standaard. RFC 9989 heeft pct, rf en ri laten vervallen. Gebruik de testmodus t=y voor een gecontroleerde uitrol in plaats van percentages.',
    },
    {
      q: 'Wat doet de optie t=y?',
      a: 'Het verzoekt ontvangende servers om één niveau milder op te treden dan het gepubliceerde beleid: reject wordt behandeld als quarantine, en quarantine als none.',
    },
    {
      q: 'Zijn zowel rua als ruf nodig?',
      a: 'rua is essentieel om inzicht te krijgen in uw e-mailstromen. ruf is optioneel en wordt door de meeste grote mailproviders niet verzonden om privacyredenen.',
    },
    {
      q: 'Wat betekent de tag np?',
      a: 'Dit bepaalt het beleid voor subdomeinen die niet bestaan in DNS (zoals valsefactuur.uwdomein.nl). Zonder np is sp of p van toepassing.',
    },
    {
      q: 'Waar publiceer ik het DMARC-record?',
      a: 'Als een TXT-record onder _dmarc.uwdomein.nl. In de meeste DNS-panelen vult u enkel _dmarc in bij de hostnaam.',
    },
  ],
  ctaHeadline: 'DMARC geregeld? Controleer nu uw e-maillijst.',
}

const pl: DmarcPageStrings = {
  metaTitle: 'Darmowy Generator DMARC: Wygeneruj Rekord DMARC (2026) | Giggal.ai',
  ogTitle: 'Darmowy Generator DMARC: Wygeneruj Rekord DMARC (2026)',
  description:
    'Wygeneruj prawidłowy rekord DMARC zgodny ze standardem 2026 (RFC 9989): polityka, subdomeny, raporty i tryb testowy. Wyczyść stare tagi. Darmowy.',
  ogLocale: 'pl_PL',
  ogImage: '/og-card.png',
  ogAlt: 'Darmowy Generator Rekordów DMARC',
  crumb: 'Generator DMARC',
  appName: 'Darmowy Generator Rekordów DMARC',
  featureList: [
    'Generuje rekordy DMARC zgodne ze standardem RFC 9989 (norma 2026)',
    'Czyści stare rekordy usuwając wycofane tagi (pct, rf, ri)',
    'Konfiguruje politykę, subdomeny, raporty i tryb testowy (t=y)',
    'Tworzy rekordy autoryzacji raportowania zewnętrznego (RFC 9990)',
    'Działa w 100% w przeglądarce bez przesyłania danych',
  ],
  h1: 'Generator Rekordów DMARC',
  heroIntro:
    'Rekord DMARC wskazuje serwerom pocztowym, jak traktować wiadomości podszywające się pod Twoją domenę. Odpowiedz na trzy pytania, aby stworzyć swój rekord.',
  howTitle: 'Jak opublikować rekord DMARC w DNS',
  howSteps: [
    'Wypełnij trzy powyższe kroki. Jeśli masz już rekord, wklej go w sekcji "Masz już rekord DMARC?", aby go zoptymalizować.',
    'W panelu DNS swojego rejestratora dodaj rekord TXT z nazwą hosta _dmarc (lub pełną nazwą _dmarc.twojadomena.pl).',
    'Wklej wygenerowaną wartość i zapisz. Upewnij się, że w domenie istnieje tylko jeden rekord DMARC.',
    'Poczekaj na propagację DNS i obserwuj skrzynkę raportów (adres rua). Raporty zbiorcze są wysyłane zazwyczaj co 24 godziny.',
  ],
  imageAlt: 'Ilustracja rekordu DMARC z trzema poziomami polityki ochronnej i tarczą.',
  changedTitle: 'Co zmieniło się w rekordach DMARC w 2026 roku',
  changedText:
    'W maju 2026 roku specyfikacja RFC 9989 zastąpiła RFC 7489, wprowadzając DMARC na oficjalną ścieżkę standardów internetowych. Rekordy nadal rozpoczynają się od v=DMARC1. Trzy tagi zostały wycofane: pct, rf oraz ri. Dodano dwa nowe: t (tryb testowy) oraz np (polityka dla nieistniejących subdomen). Ten generator automatycznie usuwa wycofane tagi. Dowiedz się więcej w artykule [co to jest rekord DMARC](/blog/what-is-a-dmarc-record).',
  policyTitle: 'Jaką politykę DMARC wybrać',
  policyParas: [
    'Zawsze rozpoczynaj od p=none oraz adresu rua. Nie wpłynie to na dostarczanie wiadomości, a pozwoli uzyskać raporty o tym, jakie serwery wysyłają pocztę z Twojej domeny. Pełna autoryzacja wszystkich źródeł może zająć kilka miesięcy.',
    'Opcja t=y ułatwia bezpieczne wdrożenie polityki blokowania. Publikując p=reject z parametrem t=y, odbiorcy stosują kwarantannę zamiast odrzucenia, co pozwala sprawdzić poprawność bez ryzyka utraty pożądanych maili.',
    'Przed ustawieniem reject upewnij się, że cała poczta jest podpisywana przez DKIM. Standard zabrania polegania wyłącznie na SPF przy p=reject z powodu przekierowań poczty. Użyj naszego [generatora DKIM](/dkim-generator) do utworzenia kluczy.',
  ],
  reportsTitle: 'Adresy do odbierania raportów',
  reportsParas: [
    'rua służy do odbierania raportów zbiorczych: dziennych plików XML podsumowujących adresy IP wysyłające pocztę i ich statusy uwierzytelnienia. ruf dotyczy raportów o pojedynczych błędach, które większość serwerów pomija ze względów prywatności.',
    'Jeśli adres raportowania znajduje się w innej domenie niż chroniona, domena odbiorcza musi opublikować rekord zgody zgodnie z RFC 9990, który nasze narzędzie tworzy automatycznie powyżej.',
  ],
  mistakesTitle: 'Błędy, którym zapobiega ten generator',
  mistakesParas: [
    'Gwarantuje, że v=DMARC1 znajduje się na samym początku, uzupełnia wymagany prefiks mailto: w adresach raportowania i zastępuje przestarzały tag pct parametrem t=y. Ostrzega też przed ryzykiem rygorystycznego dopasowania subdomen.',
    'Pamiętaj, aby opublikować dokładnie jeden rekord DMARC dla domeny. Kompletny przewodnik znajdziesz w artykule [SPF, DKIM i DMARC w pigułce](/blog/spf-dkim-dmarc-explained).',
  ],
  faqTitle: 'Często zadawane pytania o DMARC',
  faqs: [
    {
      q: 'Jak powinien wyglądać mój pierwszy rekord DMARC?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc@twojadomena.pl. Taki rekord nie wpływa negatywnie na doręczalność i rozpoczyna zbieranie raportów. Wybierz opcję "Tylko monitoruj" w narzędziu.',
    },
    {
      q: 'Czy tag pct jest nadal obsługiwany?',
      a: 'Nie w bieżącym standardzie RFC 9989. Został wycofany wraz z rf i ri. Do stopniowego wdrażania rygorystycznych zasad służy tryb testowy t=y.',
    },
    {
      q: 'Co robi tryb testowy t=y?',
      a: 'Wskazuje serwerom odbiorczym, aby zastosowały politykę o jeden stopień łagodniejszą: reject staje się quarantine, a quarantine staje się none. Raporty zachowują pełną dokładność.',
    },
    {
      q: 'Czy potrzebuję adresów rua oraz ruf?',
      a: 'rua jest konieczny, aby monitorować nadawców w Twojej domenie. ruf jest opcjonalny i ze względów ochrony prywatności rzadko dostarczany przez serwery pocztowe.',
    },
    {
      q: 'Do czego służy tag np?',
      a: 'Określa politykę dla subdomen, które nie istnieją w rekordach DNS (np. falszywafaktura.twojadomena.pl). Przy braku np zastosowanie ma parametr sp lub p.',
    },
    {
      q: 'Gdzie należy opublikować rekord DMARC?',
      a: 'Jako rekord DNS TXT o nazwie hosta _dmarc.twojadomena.pl. W większości paneli wystarczy wpisać samo _dmarc w polu nazwy rekordu.',
    },
  ],
  ctaHeadline: 'DMARC skonfigurowany? Sprawdź teraz swoją listę odbiorców.',
}

const id: DmarcPageStrings = {
  metaTitle: 'DMARC Generator Gratis: Buat Catatan DMARC (2026) | Giggal.ai',
  ogTitle: 'DMARC Generator Gratis: Buat Catatan DMARC (2026)',
  description:
    'Buat catatan DMARC valid sesuai standar 2026 (RFC 9989): kebijakan, subdomain, laporan, dan mode uji coba. Bersihkan tag usang secara gratis.',
  ogLocale: 'id_ID',
  ogImage: '/og-card.png',
  ogAlt: 'DMARC Record Generator Gratis',
  crumb: 'DMARC Generator',
  appName: 'DMARC Record Generator Gratis',
  featureList: [
    'Buat catatan DMARC valid sesuai RFC 9989 (standar resmi 2026)',
    'Bersihkan catatan lama dengan menghapus tag usang (pct, rf, ri)',
    'Konfigurasi kebijakan, subdomain, laporan agregat, dan mode uji coba (t=y)',
    'Hasilkan catatan otorisasi laporan tujuan eksternal (RFC 9990)',
    'Berjalan 100% di browser tanpa transmisi data ke server',
  ],
  h1: 'DMARC Record Generator',
  heroIntro:
    'Catatan DMARC memberi tahu penyedia email tindakan apa yang harus diambil terhadap email palsu yang mengatasnamakan domain Anda. Jawab tiga pertanyaan untuk membuatnya.',
  howTitle: 'Cara mempublikasikan catatan DMARC Anda',
  howSteps: [
    'Lengkapi tiga langkah di atas. Jika Anda sudah memiliki catatan DMARC, tempelkan di bawah "Sudah memiliki catatan DMARC?" untuk membersihkannya.',
    'Pada panel DNS penyedia hosting Anda, buat catatan TXT dengan nama host _dmarc (atau nama lengkap _dmarc.domainanda.id).',
    'Tempelkan nilai yang dihasilkan lalu simpan. Pastikan hanya ada satu catatan DMARC pada domain tersebut.',
    'Tunggu propagasi DNS dan pantau kotak masuk laporan Anda (alamat rua). Laporan agregat biasanya dikirim setiap 24 jam sekali.',
  ],
  imageAlt: 'Ilustrasi catatan kebijakan DMARC dengan tiga tahap penegakan dan perisai pelindung.',
  changedTitle: 'Pembaruan catatan DMARC pada tahun 2026',
  changedText:
    'Pada Mei 2026, RFC 9989 resmi menggantikan RFC 7489 dan menempatkan DMARC ke dalam Standards Track resmi. Catatan tetap diawali dengan v=DMARC1. Tiga tag resmi dihapus: pct, rf, dan ri. Dua tag baru diperkenalkan: t (mode uji coba) dan np (kebijakan subdomain yang tidak ada). Generator ini secara otomatis menghapus tag usang tersebut. Pelajari lebih lanjut di [apa itu catatan DMARC?](/blog/what-is-a-dmarc-record).',
  policyTitle: 'Kebijakan DMARC mana yang harus dipilih',
  policyParas: [
    'Awali selalu dengan p=none dan alamat email rua. Pengiriman email Anda tidak akan terganggu, dan Anda akan menerima laporan yang memperlihatkan pihak mana saja yang mengirim email atas nama domain Anda. Proses autentikasi seluruh sumber resmi membutuhkan waktu beberapa bulan.',
    'Pilihan mode uji coba t=y memudahkan transisi akhir menuju pemblokiran. Mempublikasikan p=reject dengan t=y membuat server penerima menerapkan karantina alih-alih penolakan langsung, sehingga Anda dapat melihat email yang berpotensi gagal tanpa khawatir kehilangan email sah.',
    'Sebelum menerapkan reject, pastikan seluruh email keluar telah ditandatangani dengan DKIM. Standar melarang hanya bergantung pada SPF saat menggunakan reject karena pengalihan email (forwarding) merusak SPF. Gunakan [generator DKIM](/dkim-generator) kami untuk membuat kunci.',
  ],
  reportsTitle: 'Alamat tujuan penerimaan laporan',
  reportsParas: [
    'rua digunakan untuk menerima laporan agregat: file XML harian yang merangkum alamat IP pengirim dan status validasinya. ruf digunakan untuk laporan kegagalan forensik per pesan, yang sebagian besar penyedia email abaikan demi menjaga privasi.',
    'Jika alamat laporan berada di domain yang berbeda dengan domain yang dilindungi, domain eksternal tersebut wajib mempublikasikan catatan otorisasi (consent record) sesuai RFC 9990 yang dibuat otomatis oleh alat di atas.',
  ],
  mistakesTitle: 'Kesalahan yang dicegah oleh generator ini',
  mistakesParas: [
    'Memastikan v=DMARC1 selalu berada di posisi pertama, menambahkan awalan wajib mailto: pada alamat laporan, dan mengganti tag usang pct dengan parameter t=y. Generator juga memberi peringatan jika penyelarasan ketat berisiko merusak pengiriman subdomain Anda.',
    'Pastikan hanya mempublikasikan satu catatan DMARC di DNS domain Anda. Untuk pemahaman mendalam, baca panduan [penjelasan SPF, DKIM, dan DMARC](/blog/spf-dkim-dmarc-explained).',
  ],
  faqTitle: 'Pertanyaan umum seputar DMARC',
  faqs: [
    {
      q: 'Seperti apa catatan DMARC pertama yang harus saya buat?',
      a: 'v=DMARC1; p=none; rua=mailto:dmarc@domainanda.id. Catatan ini tidak mengganggu pengiriman email Anda dan mulai mengumpulkan laporan pemantauan. Pilih "Hanya pantau" di generator.',
    },
    {
      q: 'Apakah tag pct masih didukung?',
      a: 'Tidak lagi di standar resmi RFC 9989. Tag pct telah dihapus bersama rf dan ri. Untuk peluncuran bertahap, gunakan mode uji coba t=y.',
    },
    {
      q: 'Apa fungsi dari mode uji coba t=y?',
      a: 'Meminta server penerima menerapkan tindakan satu tingkat lebih lunak: reject diproses sebagai quarantine, dan quarantine diproses sebagai none.',
    },
    {
      q: 'Apakah saya membutuhkan alamat rua dan ruf sekaligus?',
      a: 'rua sangat wajib untuk memantau keamanan domain Anda. ruf bersifat opsional dan jarang didukung oleh penyedia email besar karena alasan privasi.',
    },
    {
      q: 'Apa fungsi dari tag np?',
      a: 'Menentukan kebijakan khusus untuk subdomain yang tidak ada di DNS (seperti tagihanpalsu.domainanda.id). Jika tidak diisi, kebijakan sp atau p yang akan berlaku.',
    },
    {
      q: 'Di mana saya harus menambahkan catatan DMARC?',
      a: 'Sebagai catatan DNS TXT dengan nama host _dmarc.domainanda.id. Pada sebagian besar panel DNS, Anda hanya perlu mengisi _dmarc pada kolom host.',
    },
  ],
  ctaHeadline: 'DMARC sudah terpasang? Sekarang saatnya verifikasi daftar email Anda.',
}

export const DMARC_PAGE_STRINGS: Record<Locale, DmarcPageStrings> = { en, de, fr, es, it, 'pt-br': ptBr, nl, pl, id }
