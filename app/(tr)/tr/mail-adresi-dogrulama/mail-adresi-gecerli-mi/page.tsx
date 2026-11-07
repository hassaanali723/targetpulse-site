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
import { consoleStrings, SIGNUP_URL } from '@/lib/i18n/tr'

// The "is this address valid" question: "mail adresi geçerli mi", with "mail
// adresi var mı" and "mail adresi kontrol" (SEO-Plan/i18n-batch5-tr-keyword-plan.md,
// final, Ahrefs Turkey 2026-11-07).
// Modelled on the Indonesian child (/id/cek-email-valid/cara-cek-email-aktif)
// and the Korean child: the page answers in the first paragraph, embeds the
// checker and lists four methods with their limits. The test-email method is
// named as unreliable. No figures beyond what the method itself states. The
// "not stored permanently" line comes from the Terms of Service, section 12.

const PATH = '/tr/mail-adresi-dogrulama/mail-adresi-gecerli-mi'
const TITLE = 'Mail adresi geçerli mi? 4 kontrol yöntemi'
const DESC =
  'Mail adresi geçerli mi, var mı? 4 mail adresi kontrol yöntemi ve sınırları. Ücretsiz araç, mail göndermeden posta kutusunu ve catch-all adresleri kontrol eder.'

export const metadata: Metadata = {
  title: { absolute: `${TITLE} | Giggal.ai` },
  description: DESC,
  alternates: { canonical: PATH },
  openGraph: {
    siteName: 'Giggal.ai',
    locale: 'tr_TR',
    title: TITLE,
    description: DESC,
    url: `https://giggal.ai${PATH}`,
    type: 'article',
    images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai mail adresi doğrulama' }],
  },
}

const steps = [
  {
    name: 'Mail adresi doğrulama aracıyla posta kutusunu kontrol edin (e-posta gönderilmez)',
    text: 'Mail adresi doğrulama aracı, alan adının e-posta sunucusuna bu adres için bir posta kutusu olup olmadığını sorar. Alıcıya hiçbir mesaj gönderilmez.',
  },
  {
    name: 'Mail adresinin formatını kontrol edin',
    text: 'Doğru bir adreste bir kullanıcı adı, tek bir @ işareti ve ".com.tr" gibi bir uzantıyla biten bir alan adı (örneğin sirket.com.tr) bulunur. Alan adında tek bir harf hatası bile adresi kullanılamaz hâle getirir. Ancak formatın doğru olması, posta kutusunun var olduğu anlamına gelmez.',
  },
  {
    name: 'Alan adının MX kaydını kontrol edin',
    text: 'MX kaydı, bir alan adına gelen e-postaları hangi sunucunun aldığını gösteren DNS ayarıdır. Alan adının MX kaydı yoksa o alan adındaki posta kutuları e-posta alamaz. Bunu bir DNS sorgusuyla birkaç saniyede kontrol edebilirsiniz. Ancak MX kaydının olması, belirli bir posta kutusunun var olduğunu kanıtlamaz.',
  },
  {
    name: 'Test e-postası gönderip bounce bekleyin (güvenilir değildir)',
    text: 'Birçok rehber bu yöntemi önerir. Ancak catch-all alan adlarında sunucu her alıcıyı kabul eder. Bu yüzden posta kutusu olmasa bile e-posta geri dönmez. Yani bounce gelmemesi hiçbir şeyi kanıtlamaz. Bu yöntem yalnızca alan adı catch-all değilse bir anlam taşır. Ayrıca her bounce, gönderen itibarınızı düşürür.',
  },
]

const faqs: FaqItem[] = [
  {
    q: 'Mail göndermeden bir mail adresinin var olup olmadığını nasıl kontrol edebilirim?',
    a: 'Adresi bu sayfadaki mail adresi doğrulama aracına girin. Araç, e-posta sunucusuna posta kutusunun var olup olmadığını sorar ve mesaj göndermez. Sonuç (geçerli, geçersiz veya bilinmiyor) birkaç saniye içinde görünür.',
  },
  {
    q: 'Formatı doğru olan bir mail adresi geçerli midir?',
    a: 'Her zaman değil. Doğru format yalnızca bir kullanıcı adı, bir @ işareti ve bir alan adı olduğunu gösterir. Formatı doğru bir adres, e-posta sunucusu olmayan bir alan adına veya hiç oluşturulmamış bir posta kutusuna ait olabilir. Adresin geçerli olup olmadığını öğrenmek için posta kutusunu da kontrol etmeniz gerekir.',
  },
  {
    q: 'Gönderdiğim e-posta geri dönmezse adres geçerli midir?',
    a: 'Her zaman değil. Catch-all alan adlarında sunucu her adresi kabul eder ve bounce mesajı göndermez. Hata mesajı gelmemesi hiçbir şeyi kanıtlamaz. Bu durumda catch-all doğrulama gerekir.',
  },
  {
    q: 'Mail adresi doğrulama nasıl çalışır?',
    a: 'Önce adresin formatı kontrol edilir. Ardından alan adının MX kaydından e-posta sunucusu bulunur. Sonra sunucuya bu posta kutusunun var olup olmadığı sorulur. Mesaj içeriği gönderilmez. Catch-all alan adlarında sunucudan ve posta kutusundan gelen ek sinyaller de kontrol edilir.',
  },
  {
    q: 'E-posta adresi doğrulama güvenli mi?',
    a: 'Kontrol sırasında mesaj gönderilmez, bu yüzden alıcının gelen kutusuna hiçbir şey ulaşmaz. Doğrulama için girdiğiniz e-posta adresleri güvenli şekilde işlenir ve kalıcı olarak saklanmaz (Kullanım Koşulları, madde 12).',
  },
  {
    q: 'Sonuç neden "bilinmiyor" çıkıyor?',
    a: 'Bunun üç olası nedeni vardır. Sunucu zamanında yanıt vermemiş olabilir. Sunucu greylisting kullanıyor olabilir, yani yeni gönderenleri geçici olarak reddediyor olabilir. Ya da adres, her mesajı kabul eden bir güvenli e-posta ağ geçidinin (SEG) arkasında olabilir. Bir süre sonra tekrar deneyin veya catch-all doğrulamayı kullanın.',
  },
  {
    q: 'Mail adresi kontrolü, adresin sahibini gösterir mi?',
    a: 'Hayır. E-posta sunucusu yalnızca posta kutusunun var olup olmadığını söyler, sahibinin adını söylemez. Alan adından şirketi veya e-posta servisini öğrenebilirsiniz, ancak kişiyi öğrenemezsiniz.',
  },
  {
    q: 'Var olmayan bir mail adresiyle ne yapmalıyım?',
    a: 'Adresi listeden silin ve bir daha e-posta göndermeyin. Var olmayan bir posta kutusuna gönderilen her e-posta, alan adınızın itibarını düşürür. Önemli bir kişiyse güncel adresini bulmaya çalışın.',
  },
]

const sectionTitle = 'text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight'
const proseP = 'text-slate-600 leading-relaxed text-sm md:text-base font-medium'
const link = 'text-indigo-600 font-bold hover:underline'

export default function EpostaAdresiGecerliMiPage() {
  return (
    <main className="relative min-h-screen bg-slate-50 grid-lines overflow-x-hidden text-slate-800 antialiased">
      <JsonLd
        data={breadcrumbL10n('tr', [
          { name: 'Mail adresi doğrulama', path: '/tr/mail-adresi-dogrulama' },
          { name: 'Mail adresi geçerli mi?', path: PATH },
        ])}
      />
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd
        data={howToLd({
          id: `https://giggal.ai${PATH}#howto`,
          name: 'Bir mail adresinin geçerli olup olmadığı nasıl kontrol edilir',
          description: DESC,
          steps,
        })}
      />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[120px] -z-10 pointer-events-none" />

      <NavbarL10n locale="tr" />

      <section className="max-w-3xl mx-auto px-6 pt-28 md:pt-32 pb-10 space-y-6">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-indigo-600">
          <Link href="/tr/mail-adresi-dogrulama" className="hover:underline">Mail adresi doğrulama</Link> › Mail adresi geçerli mi?
        </p>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] text-slate-900">
          Mail adresi geçerli mi, nasıl kontrol edilir?
        </h1>
        <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
          Bir mail adresi, posta kutusu oluşturulmuşsa ve hâlâ e-posta kabul ediyorsa geçerlidir. Mail adresi var mı sorusunun yanıtını e-posta göndermeden alabilirsiniz.
          Aşağıdaki araçla kontrol ettiğinizde sonuç birkaç saniye içinde gelir. Adresin geçerli olup olmadığını alan adının e-posta sunucusu söyler.
          Catch-all alan adları her adresi kabul ettiği için ek bir kontrol gerekir. Bu araç o kontrolü de yapar.
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
          Bu mail adresi doğrulama aracı ücretsizdir ve kayıt gerektirmez.{' '}
          <Link href="/tr/mail-adresi-dogrulama" className={link}>Mail adresi doğrulama</Link> sayfasındaki araçla aynıdır.
        </p>
      </section>

      {steps.map((s, i) => (
        <section key={s.name} className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
          <h2 className={sectionTitle}>Yöntem {i + 1}: {s.name}</h2>
          <p className={proseP}>{s.text}</p>
          {i === 0 && (
            <p className={proseP}>
              Bu en güvenilir ve en hızlı yöntemdir, ancak sınırları da vardır. Bazı sunucular ilk kez gördükleri bir gönderene hemen yanıt vermez.
              Buna greylisting denir: sunucu yeni gönderenleri geçici olarak reddeder. Bazı sunucular ise her adrese &quot;var&quot; der.
              İlk durumda sonuç &quot;bilinmiyor&quot; olur, bir süre sonra tekrar deneyin. İkinci durumda alan adı catch-all&apos;dur ve aşağıda anlatılan adımlar gerekir.
            </p>
          )}
          {i === 2 && (
            <p className={proseP}>
              Geçerli bir MX kaydı ve yanıt veren bir sunucu asgari koşuldur. Bu koşulu karşılamayan adresleri başka bir kontrol yapmadan listeden çıkarabilirsiniz.
              Koşul karşılansa bile belirli bir posta kutusunu kontrol etmek için Yöntem 1 gerekir.
            </p>
          )}
        </section>
      ))}

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Gönderdiğiniz e-posta geri dönmezse adres geçerli midir?</h2>
        <p className={proseP}>
          Bu kesin değildir. Catch-all alan adlarında sunucu her alıcıyı kabul eder. Bu yüzden posta kutusu olmasa bile e-posta geri dönmez.
          E-posta kimsenin okumadığı bir klasöre gider veya bildirim yapılmadan silinir. Yani bounce gelmemesi bir kanıt değildir.
          Format ve MX kaydı da bunu göstermez. İkisi de yalnızca adresi ve alan adını kontrol eder, posta kutusunu kontrol etmez.
          Giggal.ai&apos;ın{' '}
          <Link href="/tr/catch-all-dogrulama" className={link}>
            catch-all doğrulaması
          </Link>{' '}
          sunucudan ve posta kutusundan ek sinyaller toplar. Bu durumda da geçerli veya geçersiz sonucu verir.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-12 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Mail adresi kontrolünün göstermediği şey: adresin sahibi</h2>
        <p className={proseP}>
          E-posta sunucusu yalnızca o posta kutusuna gelen e-postayı kabul eder veya reddeder. Sahibinin adını söylemez.
          E-posta adreslerini kişilerle eşleştiren herkese açık bir veritabanı da yoktur. Kontrolden öğrenebileceğiniz şey alan adıdır, yani şirket veya e-posta servisi.
          Giggal.ai&apos;ın tam doğrulaması, adresin rol tabanlı bir adres (info@ gibi), geçici bir e-posta adresi veya ücretsiz bir e-posta servisine ait bir adres olup olmadığını da gösterir.
          Sahibini bulmak için şirketin adres biçimini (örneğin ad.soyad@) şirketin web sitesi veya LinkedIn gibi herkese açık profillerle karşılaştırın.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-16 border-t border-slate-200 space-y-4">
        <h2 className={sectionTitle}>Mail adresi yoksa ne yapmalısınız</h2>
        <p className={proseP}>
          Adresi listeden silin ve bir daha e-posta göndermeyin. Var olmayan bir posta kutusuna gönderilen her e-posta hard bounce (kalıcı olarak reddedilen e-posta) olur.
          E-posta sağlayıcıları, bir alan adının güvenilir bir gönderen olup olmadığına karar verirken hard bounce&apos;ları sayar. Önemli bir kişiyse güncel adresini bulmaya çalışın.
          Tüm listenizdeki geçerli adresleri kontrol etmek için göndermeden önce{' '}
          <Link href="/tr/toplu-mail-dogrulama" className={link}>
            toplu mail doğrulama
          </Link>{' '}
          kullanın. Araç her satırı kontrol eder.
        </p>
      </section>

      <section className="cv-section max-w-3xl mx-auto px-6 pt-12 pb-20 border-t border-slate-200 space-y-10">
        <div className="text-center space-y-3">
          <h2 className={sectionTitle}>Sık sorulan sorular</h2>
        </div>
        <FaqAccordion items={faqs} />
      </section>

      <CtaBandL10n locale="tr" headline="Tüm e-posta listenizi doğrulayın" />
      <FooterL10n locale="tr" />
    </main>
  )
}
