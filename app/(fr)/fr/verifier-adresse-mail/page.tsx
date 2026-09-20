import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd } from '@/lib/schema'
import { breadcrumbL10n, webApplicationL10n } from '@/lib/i18n/schema'
import { hreflangAlternates } from '@/lib/i18n/clusters'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/fr'

// French free checker, one page for every French-speaking country. Primary
// "verifier adresse mail" in its three spellings (3,800 / KD 0 to 4), with the
// test, vérification, vérificateur and validity families and the fraud family
// that is France's own (plans/12 section 2.2). Two sections are written for
// the market rather than translated: the test walk-through and the fraud
// section, which claims only what the result panel returns (plans/12 3.2.1).
// French punctuation keeps a no-break space before ":", "?" and "!".

const PATH = '/fr/verifier-adresse-mail'
const DESC =
  'Vérifiez si une adresse mail existe et est valide, sans envoyer de message : syntaxe, MX, SMTP, catch-all et adresses jetables. Gratuit, sans inscription.'

export const metadata: Metadata = {
  title: { absolute: 'Vérifier une Adresse Mail : Testeur d’Email Gratuit | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH, languages: hreflangAlternates('tool') },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    title: 'Vérifier une adresse mail gratuitement',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai vérification d’email' }],
  },
  twitter: { card: 'summary_large_image', title: 'Vérifier une adresse mail gratuitement', description: DESC },
}

// The FAQ questions are pack rows where one exists (plans/12 section 3.2):
// "comment vérifier une adresse mail" 300 / 1, "comment savoir si un mail est
// frauduleux" 250 / 12. The validity and existence questions belong to the
// child page and are linked, not answered, here.
const faqs: FaqItem[] = [
  {
    q: 'Comment vérifier une adresse mail ?',
    a: 'Saisissez-la ci-dessus et cliquez sur Vérifier. Le vérificateur demande au serveur de messagerie du domaine si cette boîte existe et lit la réponse, sans envoyer de message. En quelques secondes vous avez le résultat : valide, invalide ou inconnu.',
  },
  {
    q: 'Comment savoir si un mail est frauduleux ?',
    a: 'Regardez d’abord le message : un nom d’expéditeur qui ne correspond pas au domaine, un domaine qui imite une marque à une lettre près, une demande urgente d’argent ou de mot de passe. Puis vérifiez l’adresse ici : un domaine sans serveur de messagerie, une boîte inexistante ou une adresse jetable ne viennent pas d’une entreprise réelle. Une boîte valide ne prouve pas l’honnêteté de l’expéditeur ; elle élimine seulement une partie des faux.',
  },
  {
    q: 'Vérifier, tester, valider une adresse mail : quelle différence ?',
    a: 'Aucune dans les faits. Valider une adresse, c’est souvent contrôler son format ; tester ou vérifier une adresse, c’est interroger le serveur pour savoir si la boîte existe. Cette page fait les deux, plus la résolution des domaines catch-all.',
  },
  {
    q: 'Envoyez-vous un message à l’adresse ?',
    a: 'Non. La vérification passe par une conversation SMTP : l’outil ouvre la connexion avec le serveur, annonce le destinataire et lit le code de réponse (250 si la boîte est acceptée, 550 si elle n’existe pas). Le destinataire ne reçoit rien.',
  },
  {
    q: 'Que veut dire « risqué » ?',
    a: 'C’est l’étiquette que la plupart des vérificateurs donnent à une adresse sur un domaine catch-all, parce que le serveur accepte n’importe quel destinataire et qu’un contrôle standard ne peut pas confirmer la boîte. Giggal effectue des vérifications supplémentaires et renvoie valide ou invalide sur ces domaines aussi.',
  },
  {
    q: 'Comment savoir si une adresse mail est valide ou existe ?',
    a: 'Avec la vérification SMTP de cette page, en quelques secondes. Les autres méthodes, avec leurs limites, sont dans le guide « Comment savoir si une adresse mail est valide » : recherche sur le web, lecture du rebond, récupération de mot de passe et message à une adresse volontairement fausse.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function VerifierAdresseMailPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd data={breadcrumbL10n('fr', [{ name: 'Vérifier une adresse mail', path: PATH }])} />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd data={webApplicationL10n('fr', PATH, 'Vérificateur d’email gratuit de Giggal.ai', DESC)} />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="fr" />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900">
          Vérifier une adresse mail{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-600 bg-clip-text text-transparent">
            gratuitement
          </span>
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Testez n&apos;importe quelle adresse email&nbsp;: existence, validité, catch-all et signes d&apos;une
          adresse frauduleuse, en quelques secondes. Aucun message n&apos;est envoyé.
        </p>
      </section>

      {/* ── L'OUTIL ──────────────────────────────────────────── */}
      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Gratuit, sans inscription, sans carte. Une adresse par vérification, contrôle SMTP complet.
        </p>
      </section>

      {/* ── VÉRIFICATEUR MAIL : LE RÉSULTAT ──────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Vérificateur mail ou vérificateur d&apos;adresse email&nbsp;: ce que le résultat signifie</h2>
        <p className={proseP}>
          Une vérification mail sérieuse, vérifier un mail, vérifier un email ou vérifier une adresse email
          avant l&apos;envoi, se termine par l&apos;un de trois verdicts. <strong className="text-slate-900">Valide</strong>{' '}
          signifie que le serveur a confirmé la boîte et qu&apos;elle a passé les contrôles supplémentaires&nbsp;: un
          email à cette adresse devrait arriver. <strong className="text-slate-900">Invalide</strong> signifie
          que la syntaxe est fausse, que le domaine n&apos;a pas de serveur de messagerie ou que le serveur a
          refusé la boîte&nbsp;: l&apos;envoi produirait un rebond dur. <strong className="text-slate-900">Inconnu</strong>{' '}
          est rare et indique que le serveur n&apos;a pas répondu à temps ou applique le greylisting&nbsp;:
          réessayez plus tard plutôt que de considérer l&apos;adresse comme morte.
        </p>
        <p className={proseP}>
          Sous le verdict se trouvent les détails dont dépend la délivrabilité&nbsp;: le fournisseur (Google
          Workspace, Microsoft 365, une passerelle comme Proofpoint), l&apos;hôte MX qui a répondu, si
          l&apos;adresse est <strong className="text-slate-900">jetable</strong> (une boîte temporaire qui va
          disparaître), <strong className="text-slate-900">générique</strong> (contact@, ventes@, support@&nbsp;:
          des boîtes partagées, mauvaises pour la prospection) et si elle est chez un{' '}
          <strong className="text-slate-900">fournisseur gratuit</strong> comme Gmail ou Outlook, une donnée
          utile pour qualifier des contacts B2B.
        </p>
      </section>

      {/* ── EXISTE OU EST VALIDE ─────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Comment savoir si une adresse mail existe ou est valide&nbsp;?</h2>
        <p className={proseP}>
          Une adresse existe si le serveur de son domaine accepte cette boîte quand on la lui propose dans
          une conversation SMTP. On peut poser la question sans rien envoyer&nbsp;: c&apos;est ce que fait
          l&apos;outil ci-dessus. Avant de répondre à un contact noté à la main, quand un formulaire renvoie
          un rebond ou pour tester une adresse d&apos;une liste achetée, la question est la même. Les quatre
          méthodes qui fonctionnent, avec leurs limites, sont dans le guide{' '}
          <Link href="/fr/verifier-adresse-mail/comment-savoir-si-une-adresse-mail-est-valide" className="text-indigo-600 font-bold hover:underline">
            Comment savoir si une adresse mail est valide&nbsp;?
          </Link>
        </p>
      </section>

      {/* ── TESTER UNE ADRESSE MAIL : ÉTAPE PAR ÉTAPE ────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Test d&apos;adresse mail&nbsp;: ce que le test vérifie, étape par étape</h2>
        <p className={proseP}>
          Tester une adresse mail, ou faire une vérification d&apos;adresse mail, compte quatre étapes.
          Les outils gratuits qui s&apos;arrêtent à la première sont la raison pour laquelle tant de
          listes «&nbsp;vérifiées&nbsp;» continuent de rebondir.
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-slate-600 text-sm md:text-base font-medium leading-relaxed">
          <li>
            <strong className="text-slate-900">Syntaxe.</strong> L&apos;adresse est bien formée&nbsp;: une seule
            arobase, une partie locale valide, un domaine avec extension. Cette étape trouve les fautes de
            frappe et rien d&apos;autre.
          </li>
          <li>
            <strong className="text-slate-900">Enregistrements MX.</strong> Le domaine publie-t-il des serveurs
            de messagerie&nbsp;? Sans enregistrement MX, aucune boîte ne peut exister, donc l&apos;adresse est
            morte avant tout envoi.
          </li>
          <li>
            <strong className="text-slate-900">Vérification SMTP de la boîte.</strong> Nous ouvrons une
            conversation avec le serveur destinataire, annonçons le destinataire et lisons la réponse. Un
            code 250 signifie que la boîte est acceptée&nbsp;; un 550, qu&apos;elle n&apos;existe pas.
          </li>
          <li>
            <strong className="text-slate-900">Résolution catch-all.</strong> Si le serveur a dit oui aussi à
            une adresse inventée, l&apos;étape trois n&apos;a rien prouvé. C&apos;est là que la plupart des
            vérificateurs écrivent «&nbsp;catch-all&nbsp;» et s&apos;arrêtent. Giggal analyse les signaux qui
            séparent une vraie boîte d&apos;une réponse accept-all et renvoie valide ou invalide.
          </li>
        </ol>
        <p className={proseP}>
          Le panneau ci-dessus affiche chaque étape au fur et à mesure, plus le fournisseur, l&apos;hôte MX et
          si l&apos;adresse est jetable, générique ou chez un fournisseur gratuit.
        </p>
      </section>

      {/* ── ADRESSE MAIL FRAUDULEUSE ─────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Vérifier une adresse mail frauduleuse&nbsp;: les signes d&apos;un email suspect</h2>
        <p className={proseP}>
          Une adresse frauduleuse se repère d&apos;abord dans le message, puis dans l&apos;adresse elle-même.
          Les signes à contrôler vous-même&nbsp;: un nom d&apos;affichage qui ne correspond pas au domaine (une
          banque qui écrit depuis une adresse Gmail), un domaine qui imite une marque à une lettre près ou
          avec une extension inhabituelle, une adresse chez un fournisseur gratuit qui prétend parler au nom
          d&apos;une entreprise, une adresse générique qui n&apos;apparaît nulle part sur le site de
          l&apos;entreprise, et une demande urgente d&apos;argent, de mot de passe ou de code.
        </p>
        <p className={proseP}>
          Ce que le vérificateur ajoute, c&apos;est ce qu&apos;il mesure&nbsp;: le domaine a-t-il des serveurs de
          messagerie, la boîte existe-t-elle, l&apos;adresse est-elle jetable, générique ou catch-all. Un
          expéditeur dont le domaine n&apos;a pas d&apos;enregistrement MX, dont la boîte n&apos;existe pas ou dont
          l&apos;adresse est jetable n&apos;est pas une entreprise réelle&nbsp;: le test tranche en quelques secondes.
          Il n&apos;existe pas de liste fiable d&apos;adresses frauduleuses&nbsp;: les fraudeurs changent d&apos;adresse
          plus vite qu&apos;une liste ne se met à jour, ce qui est précisément la raison de vérifier une adresse
          vous-même. Et une boîte valide ne rend pas l&apos;expéditeur honnête&nbsp;: elle compte comme un signe
          parmi les autres, pas comme une preuve.
        </p>
      </section>

      {/* ── CATCH-ALL ────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Qu&apos;est-ce qu&apos;un domaine catch-all et pourquoi d&apos;autres outils disent «&nbsp;risqué&nbsp;»&nbsp;?</h2>
        <p className={proseP}>
          Détecter un domaine catch-all coûte peu&nbsp;: l&apos;outil cherche les serveurs de messagerie, ouvre une
          connexion et propose une adresse au hasard qui n&apos;existe presque certainement pas. Si le serveur
          l&apos;accepte, le domaine accepte tout, et la réponse arrive en un seul échange. C&apos;est pourquoi
          presque tous les vérificateurs gratuits vous diront volontiers qu&apos;un domaine est catch-all. Savoir
          quelles boîtes sont réelles derrière ce domaine est un autre travail&nbsp;: il faut plus de sondes,
          plus de signaux et une infrastructure à la réputation d&apos;envoi propre. Dans une liste B2B, les
          adresses catch-all représentent souvent un tiers des contacts, et les supprimer en bloc jette de
          vrais clients. Giggal les résout une par une et vous dit lesquelles garder. La méthode est
          expliquée dans{' '}
          <Link href="/fr/verification-catch-all" className="text-indigo-600 font-bold hover:underline">
            vérification catch-all
          </Link>
          .
        </p>
      </section>

      {/* ── LISTE ENTIÈRE ────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-6">
        <h2 className={sectionTitle}>Vérifier une liste entière&nbsp;: en masse, API et intégrations</h2>
        <p className={proseP}>
          Le contrôle unitaire sert pour une adresse à la fois. Pour un fichier entier, inscrivez-vous,
          importez le CSV et la vérification mail en masse exécute les mêmes contrôles sur chaque ligne,
          catch-all compris. Les 1&nbsp;000 premiers crédits sont offerts, sans carte. Les{' '}
          <Link href="/fr/tarifs" className="text-indigo-600 font-bold hover:underline">
            tarifs
          </Link>{' '}
          commencent à 9,90&nbsp;$ pour 10&nbsp;000 vérifications. Le même contrôle est disponible en API REST et
          via les{' '}
          <Link href="/fr/integrations" className="text-indigo-600 font-bold hover:underline">
            intégrations
          </Link>{' '}
          Zapier, n8n et HubSpot.
        </p>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Questions fréquentes</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="fr" headline="Vérifiez toute votre liste" />

      {/* ── LIENS ────────────────────────────────────────────── */}
      <section className="cv-section max-w-3xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-8 space-y-3">
          {[
            { href: '/fr/verifier-adresse-mail/comment-savoir-si-une-adresse-mail-est-valide', label: 'Comment savoir si une adresse mail est valide ? Quatre méthodes' },
            { href: '/fr/verification-catch-all', label: 'Vérification catch-all et adresses risquées' },
            { href: '/fr/tarifs', label: 'Tarifs et crédits' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-3.5 hover:border-indigo-300 hover:bg-indigo-50/40 transition-all card-vivid-shadow"
            >
              <span className="text-sm font-bold text-slate-700 group-hover:text-indigo-700">{l.label}</span>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      <FooterL10n locale="fr" />
    </main>
  )
}
