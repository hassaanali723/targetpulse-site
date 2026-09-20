import type { Metadata } from 'next'
import Link from 'next/link'
import NavbarL10n from '@/components/l10n/Navbar'
import FooterL10n from '@/components/l10n/Footer'
import CtaBandL10n from '@/components/l10n/CtaBand'
import VerifierConsole from '@/components/landing/VerifierConsole'
import FaqAccordion, { type FaqItem } from '@/components/landing/FaqAccordion'
import JsonLd from '@/components/JsonLd'
import { faqPageLd, howToLd } from '@/lib/schema'
import { breadcrumbL10n } from '@/lib/i18n/schema'
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/fr'

// The validity and existence question: "comment savoir si une adresse mail
// est valide" 450 / KD 2 (Emailable at 1 with its tool page), "comment savoir
// si une adresse mail existe" 200 / 1, "vérifier si une adresse mail existe"
// 200 / 1 and the smaller phrasings, 7 rows and 1,160 searches (plans/12
// section 2.2). The page answers in the first 60 words and embeds the
// checker. Ownership ("à qui appartient") gets one honest sentence, not a
// section (plans/12 section 8 item 5).

const PATH = '/fr/verifier-adresse-mail/comment-savoir-si-une-adresse-mail-est-valide'
const DESC =
  'Quatre méthodes pour savoir si une adresse mail est valide ou existe, leurs limites, et un vérificateur qui confirme la boîte sans envoyer de message.'

export const metadata: Metadata = {
  title: { absolute: 'Comment Savoir si une Adresse Mail est Valide | Giggal.ai' },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'fr_FR',
    title: 'Comment savoir si une adresse mail est valide ou existe : quatre méthodes',
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'article',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai vérification d’email' }],
  },
}

const steps = [
  {
    name: 'Vérification SMTP sans envoyer d’email',
    text: 'Un vérificateur ouvre une conversation avec le serveur de messagerie du domaine, annonce le destinataire et lit le code de réponse : 250 si la boîte est acceptée, 550 si elle n’existe pas. Aucun message n’est remis.',
  },
  {
    name: 'Consulter les enregistrements MX du domaine',
    text: 'Si le domaine ne publie pas d’enregistrement MX, aucune boîte ne peut y exister. Une requête DNS le dit en une seconde, mais un enregistrement MX présent ne prouve pas que la boîte précise existe.',
  },
  {
    name: 'Chercher sur le web ou sur LinkedIn',
    text: 'Pour un contact important, cherchez le format des adresses de l’entreprise (prenom.nom@, initiale+nom@) sur son site ou dans des profils publics et comparez. Lent, mais utile quand le serveur répond « inconnu ».',
  },
  {
    name: 'Envoyer un message et attendre le rebond (la méthode qui échoue)',
    text: 'Beaucoup de guides la recommandent. Sur un domaine catch-all, le serveur accepte n’importe quel destinataire et ne renvoie pas de rebond même si la boîte n’existe pas, donc l’absence de rebond ne confirme rien. Elle ne sert que sur les domaines qui ne sont pas catch-all, et chaque rebond abîme votre réputation d’envoi.',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'Comment savoir si une adresse mail existe ?',
    a: 'Avec la vérification SMTP : on demande au serveur de messagerie si la boîte existe et on lit la réponse sans remettre de message. C’est la méthode qu’utilise l’outil de cette page.',
  },
  {
    q: 'Vérifier si une adresse mail existe sans envoyer de message, c’est possible ?',
    a: 'Oui, c’est même la seule méthode fiable. Le serveur répond à la question « cette boîte existe-t-elle ? » pendant la conversation SMTP, avant tout envoi. Saisissez l’adresse dans le vérificateur ci-dessus ; en quelques secondes vous voyez valide ou invalide.',
  },
  {
    q: 'Une adresse mail valide existe-t-elle forcément ?',
    a: 'Non. « Valide » au sens du format signifie seulement bien écrite : une arobase, un domaine, une extension. Une adresse au format parfait sur un domaine sans serveur de messagerie, ou vers une boîte jamais créée, n’existe pas. Seule la vérification SMTP tranche.',
  },
  {
    q: 'Pourquoi le résultat dit-il « inconnu » ?',
    a: 'Le serveur n’a pas répondu à temps, applique le greylisting aux expéditeurs nouveaux ou se trouve derrière une passerelle de sécurité qui accepte tout. Réessayez plus tard ou utilisez la vérification catch-all complète.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'

export default function CommentSavoirSiUneAdresseMailEstValidePage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbL10n('fr', [
          { name: 'Vérifier une adresse mail', path: '/fr/verifier-adresse-mail' },
          { name: 'Comment savoir si une adresse mail est valide ?', path: PATH },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${PATH}#howto`,
          name: 'Comment savoir si une adresse mail est valide ou existe',
          description: DESC,
          steps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="fr" />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">
          <Link href="/fr/verifier-adresse-mail" className="hover:underline">Vérifier une adresse mail</Link> › Cette adresse existe-t-elle&nbsp;?
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          Comment savoir si une adresse mail est valide ou existe&nbsp;: quatre méthodes
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Une adresse mail existe si le serveur de messagerie de son domaine accepte cette boîte quand on
          la lui propose dans une conversation SMTP. On peut poser la question sans envoyer le moindre
          message&nbsp;: c&apos;est ce que fait l&apos;outil ci-dessous en quelques secondes. Sur les domaines
          catch-all, qui acceptent tout, des contrôles supplémentaires sont nécessaires, et il les exécute
          aussi.
        </p>
      </section>

      <section className="cv-section max-w-5xl mx-auto px-6 pb-16">
        <VerifierConsole
          variant="catchall"
          endpoint="/api/tools/catch-all-check"
          defaultEmail=""
          signupUrl={SIGNUP_URL}
          strings={consoleStrings}
        />
        <p className="text-center text-[13px] text-slate-500 font-medium mt-4">
          Gratuit, sans inscription. Le même outil que la page{' '}
          <Link href="/fr/verifier-adresse-mail" className="text-indigo-600 font-bold hover:underline">vérifier une adresse mail</Link>.
        </p>
      </section>

      {steps.map((s, i) => (
        <section key={s.name} className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
          <h2 className={sectionTitle}>Méthode {i + 1}&nbsp;: {s.name}</h2>
          <p className={proseP}>{s.text}</p>
          {i === 0 && (
            <p className={proseP}>
              C&apos;est la méthode la plus fiable et la plus rapide, avec une limite&nbsp;: certains serveurs ne
              répondent pas aux expéditeurs inconnus (greylisting) ou répondent oui à tout. Dans le premier
              cas le résultat est «&nbsp;inconnu&nbsp;» et il faut réessayer&nbsp;; dans le second le domaine est
              catch-all et il faut l&apos;étape décrite plus bas.
            </p>
          )}
          {i === 1 && (
            <p className={proseP}>
              Un domaine avec des enregistrements MX valides et un serveur qui répond, c&apos;est la base.
              S&apos;il manque, vous pouvez écarter l&apos;adresse sans autre contrôle. S&apos;il est là, il faut
              quand même passer à la méthode 1 pour la boîte précise.
            </p>
          )}
        </section>
      ))}

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Ce que la vérification SMTP fait que les méthodes manuelles ne font pas</h2>
        <p className={proseP}>
          Les méthodes manuelles contrôlent des signes autour de l&apos;adresse&nbsp;: un format de noms, la
          présence d&apos;un serveur, l&apos;absence d&apos;un rebond. La vérification SMTP demande au serveur
          lui-même la boîte précise et lit sa réponse. C&apos;est la seule question à laquelle le serveur
          répond directement, et c&apos;est pourquoi une liste «&nbsp;vérifiée&nbsp;» seulement par le format et
          les MX continue de rebondir. Sur un domaine catch-all, le serveur accepte tous les destinataires,
          donc le message ne revient pas même si la boîte n&apos;existe pas. La{' '}
          <Link href="/fr/verification-catch-all" className="text-indigo-600 font-bold hover:underline">
            vérification catch-all
          </Link>{' '}
          de Giggal analyse d&apos;autres signaux du serveur et de la boîte et renvoie valide ou invalide dans
          ces cas aussi. Ce qu&apos;aucune vérification ne dit, c&apos;est à qui appartient l&apos;adresse&nbsp;: le
          serveur confirme une boîte, pas une identité, et un outil qui promet le nom du propriétaire cherche
          dans d&apos;autres sources que le serveur de messagerie.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Que faire d&apos;une adresse qui n&apos;existe pas</h2>
        <p className={proseP}>
          Retirez-la de la liste et n&apos;insistez pas&nbsp;: chaque envoi vers une boîte inexistante est un
          rebond dur, et les fournisseurs comptent les rebonds durs pour décider si vous êtes un expéditeur
          fiable. Si le contact compte, cherchez son adresse actuelle plutôt que d&apos;insister sur l&apos;ancienne.
          Pour une liste entière, la vérification en masse fait ce nettoyage sur chaque ligne avant l&apos;envoi.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Questions fréquentes</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="fr" headline="Vérifiez toute votre liste" />
      <FooterL10n locale="fr" />
    </main>
  )
}
