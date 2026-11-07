import type { EmailCheckerCopy } from '@/components/l10n/EmailCheckerL10n'
import { InlineLink } from '@/components/l10n/EmailCheckerL10n'

// Turkish copy for /tr/mail-adresi-dogrulama, translated from the English
// /email-checker page (app/(en)/email-checker/page.tsx), with the Indonesian
// copy as the structural model. Final keyword plan
// (SEO-Plan/i18n-batch5-tr-keyword-plan.md, Ahrefs Turkey): head term and H1
// "mail adresi doğrulama", supported by "email checker", "mail adresi
// sorgulama", "mail doğrulama" and "mail kontrol" in headings, intro and FAQ.
// Body prose keeps the written form "e-posta". The "is this
// address valid" how-to (mail adresi geçerli mi) belongs to the child page
// /tr/mail-adresi-dogrulama/mail-adresi-gecerli-mi, linked first in
// `related`, so this page does not use it as a heading. Never framed as
// finding one's own address or as a leak check. Formal "siz".

export const copy: EmailCheckerCopy = {
  hero: {
    // The component renders h1Lead + " " + <accent>h1Rest</accent>, so the H1
    // reads exactly "Mail adresi doğrulama".
    h1Lead: 'Mail adresi',
    h1Rest: 'doğrulama',
    intro:
      'Herhangi bir mail adresini çevrimiçi olarak ücretsiz kontrol edin. Mail adresi sorgulama için adresi yapıştırmanız yeterli. Bu email checker adresin biçimini, e-posta sunucusunu ve posta kutusunun kendisini test eder. Catch-all alan adlarında da kontrole devam eder ve geçerli ya da geçersiz sonucunu verir.',
  },
  tool: {
    caption: 'Kayıt yok, kredi kartı yok. Her kontrolde bir adres.',
    freeCredits: 'Daha fazla kontrol mü gerekiyor? Bir hesap oluşturun ve 1.000 ücretsiz kredi alın. Kredi kartı gerekmez.',
  },
  ratings: {
    reviews: (count) => `${count} değerlendirme`,
    ratedAria: (rating, platform) => `Giggal.ai, ${platform} üzerinde 5 üzerinden ${rating.replace('.', ',')} puan aldı`,
  },
  awards: {
    headingLead: "Giggal.ai, SourceForge ve Slashdot'ta",
    headingRest: 'Leader olarak değerlendirildi',
    showLabel: '{badge} rozetini gösterin',
  },
  steps: {
    title: 'Mail adresi doğrulama dört adımda nasıl yapılır',
    intro:
      'Tam bir e-posta kontrolü, yani e-posta doğrulama, dört aşamadan oluşur. Birçok araç yalnızca ilk aşamayı yapar. Bu yüzden "kontrol edilmiş" pek çok liste yine de geri dönen e-postalarla (bounce) karşılaşır.',
    items: [
      {
        title: 'Biçim',
        text: 'Adres doğru yazılmış mı: tek bir @ işareti, önünde geçerli bir ad ve .com veya .com.tr gibi bir uzantıyla biten bir alan adı. Bu adım yazım hatalarını yakalar, başka bir şeyi değil.',
      },
      {
        title: 'E-posta sunucusu',
        text: 'Alan adı e-posta sunucusu kayıtları (MX kayıtları) yayınlıyor mu? MX kaydı yoksa o alan adında posta kutusu olamaz. Bu durumda adres, siz bir şey göndermeden önce zaten kullanılamaz.',
      },
      {
        title: 'Posta kutusu',
        text: 'Araç, e-posta göndermeden e-posta sunucusuna bu posta kutusunun var olup olmadığını sorar. Evet yanıtı posta kutusunun var olduğu anlamına gelir. Hayır yanıtı posta kutusunun olmadığı anlamına gelir.',
      },
      {
        title: 'Catch-all',
        text: 'Sunucu uydurma bir adrese de evet diyorsa üçüncü adım hiçbir şey kanıtlamamıştır. Çoğu e-posta doğrulama aracı burada "catch-all" yazar ve durur. Giggal.ai gerçek bir posta kutusunu accept-all (her adresi kabul eden) bir yanıttan ayıran ek sinyallere bakar. Sonra geçerli ya da geçersiz sonucunu verir.',
      },
    ],
    footnote:
      'Yukarıdaki sonuç paneli her aşamayı çalışırken gösterir. Bir e-posta adresinin geçerliliğini kontrol etmek için adresi yapıştırın ve düğmeye basın. Bir adresin kontrolü birkaç saniye sürer.',
  },
  results: {
    title: 'Email checker her adres için ne gösterir',
    intro: 'Her kontrol üç sonuçtan biriyle biter.',
    valid: {
      title: 'Geçerli',
      text: 'Posta kutusu var ve ek sinyallerden geçti. Bu yüzden bu adrese gönderilen e-posta ulaşmalıdır.',
    },
    invalid: {
      title: 'Geçersiz',
      text: 'Adresin biçimi hatalıdır, e-posta sunucusu yoktur ya da sunucu posta kutusunu reddetmiştir. Bu adrese gönderilen e-posta geri döner.',
    },
    unknown: {
      title: 'Bilinmiyor',
      text: 'Burada nadiren görülür. Sunucu zamanında yanıt vermedi ya da yeni gönderenleri bilerek bekletiyor. Adresi kullanılamaz saymak yerine daha sonra tekrar kontrol edin.',
    },
    detailsIntro: 'Sonucun altında araç, teslim edilebilirlik kararı için gereken ayrıntıları listeler:',
    details: [
      { lead: 'E-posta sağlayıcısı', rest: ' (Google Workspace, Microsoft 365 veya Proofpoint gibi bir ağ geçidi)' },
      { lead: 'Yanıt veren e-posta sunucusu', rest: '' },
      { lead: 'Adresin geçici olup olmadığı', rest: ' (kısa süre sonra kaybolacak geçici bir gelen kutusu)', href: '/tr/gecici-mail-kontrolu' },
      { lead: 'Adresin rol tabanlı olup olmadığı', rest: ' (info@, sales@, support@ gibi, bir kişiye değil ortak bir gelen kutusuna ulaşan adresler)' },
      { lead: 'Adresin kişisel bir e-posta sağlayıcısında olup olmadığı', rest: ' (Gmail veya Yahoo gibi). Bu bilgi B2B müşteri adaylarını değerlendirirken önemlidir.' },
    ],
  },
  exists: {
    title: 'Bir mail adresinin var olup olmadığı nasıl kontrol edilir',
    p1: 'Bir e-posta adresi, posta kutusu alıcı e-posta sunucusunda kurulu olduğunda ve e-posta kabul ettiğinde vardır. Adresi doğrulamak için araç, mesaj göndermeden doğrudan bu sunucuya sorar. Bu kontrol posta kutusunun var olduğunu kanıtlar. Adresin kime ait olduğunu veya ne sıklıkla okunduğunu kanıtlamaz.',
    p2: 'Kişilerinizdeki bir adresin var olup olmadığından emin değilseniz adresi yukarıdaki mail adresi doğrulama aracında kontrol edin.',
    signsIntro: 'Var olmayan adreslerde genellikle şu işaretlerden biri görülür:',
    signs: [
      { lead: 'Yazım hatalı alan adları', rest: ' (gmial.com veya yaho.com gibi). Bu alan adlarının e-posta sunucusu yoktur ya da sunucu her şeyi reddeder.' },
      { lead: 'E-posta sunucusu kaydı yok', rest: ': alan adında kayıt olmadığı için e-postanın gidebileceği bir yer yoktur.' },
      { lead: 'Reddedilen posta kutusu:', rest: ' alan adı gerçektir, ancak sunucu bu kişinin orada olmadığını söyler. Bunun nedeni çoğu zaman kişinin şirketten ayrılmış olmasıdır.' },
      { lead: '@ işaretinden önce rastgele karakterler', rest: ': bunları botlar ya da doldurmak istemedikleri bir formu dolduran kişiler yazar.' },
    ],
  },
  whySend: {
    title: 'Göndermeden önce mail adresini neden doğrulamalısınız',
    p1: "Var olmayan bir adrese gönderilen e-posta hard bounce olarak geri döner. Gmail, Outlook ve diğer e-posta sağlayıcıları bounce sayınızı takip eder. E-postalarınızın çok fazlası geri dönerse gönderim alan adınıza daha az güvenirler. Sonuçta gerçek kişilere gönderilenler dahil daha fazla e-postanız spam klasörüne düşer ya da engellenir. E-posta doğrulama bu adresleri siz göndermeden önce bulur.",
    readMore: (
      <>
        Her bounce kodunun ne anlama geldiğini ve ne yapmanız gerektiğini öğrenmek için{' '}
        <InlineLink href="/tr/blog/hard-bounce-ve-soft-bounce-farki">hard bounce ve soft bounce farkı</InlineLink>{' '}
        yazısını okuyun.
      </>
    ),
    bounceTitle: 'Daha düşük bounce oranı.',
    bounceText: "Giggal.ai ile temizlenen listelerin bounce oranı genellikle %3'ün altındadır.",
    benefits: [
      {
        title: 'Sağlıklı bir gönderen itibarı.',
        text: 'Daha az bounce, alan adınızın e-posta sağlayıcıları nezdinde iyi durumda kalmasını sağlar.',
      },
      {
        title: 'Daha iyi teslim edilebilirlik.',
        text: 'İyi bir itibar, e-postalarınızın daha fazlasının spam klasörü yerine gelen kutusuna ulaşması demektir.',
      },
      {
        title: 'Daha temiz veriler.',
        text: 'Geçersiz adresler size zaman veya gönderim kredisi kaybettirmeden CRM sisteminizden çıkar.',
      },
    ],
  },
  whenToUse: {
    title: 'Mail kontrol aracı ne zaman kullanılır',
    intro: 'Tek bir adres bir sonraki adımınızı belirlediğinde bu aracı kullanın:',
    items: [
      'Adresi elle yazılmış gibi görünen gelen bir müşteri adayına yanıt vermeden önce.',
      'Bir kayıt e-postası geri döndüğünde ve adresin hiç var olup olmadığını öğrenmek istediğinizde.',
      'Bir web sitesinde veya CRM sisteminde bulduğunuz bir adrese e-posta göndermeden önce.',
      'Satın alınmış bir listenin tamamını temizlemek için ödeme yapmadan önce listeden bir adresi test etmek için.',
      'Başka bir aracın "riskli" olarak işaretlediği, catch-all bir alan adındaki kişiyi doğrulamak için.',
    ],
  },
  catchAll: {
    title: 'Diğer e-posta doğrulama araçları neden catch-all adreslerde durur',
    paragraphs: [
      <>
        Bazı şirket e-posta sunucuları gerçek ya da uydurma her adresi kabul eder. Buna{' '}
        <InlineLink href="/tr/catch-all-dogrulama">catch-all alan adı</InlineLink> denir. Sunucuya gerçek bir
        çalışanı sorarsanız evet der. Uydurduğunuz bir adı sorarsanız ona da evet der. Bu yüzden normal posta kutusu
        kontrolü bu alan adlarında hiçbir şey kanıtlamaz.
      </>,
      <>
        Catch-all bir alan adını tespit etmek kolaydır: uydurma bir adresi test edersiniz ve kabul edilip
        edilmediğine bakarsınız. Bu yüzden neredeyse her e-posta doğrulama aracı bir alan adının catch-all olduğunu
        söyleyebilir. Bu alan adının arkasındaki hangi posta kutularının gerçek olduğunu bulmak çok daha fazla iş
        gerektirir. Bu nedenle çoğu araç etikette durur ve kararı size bırakır. B2B listelerinde catch-all adresler
        çoğu zaman kişilerin büyük bir kısmını oluşturur ve bunların birçoğu gerçek kişilerdir.
      </>,
      <>
        Giggal.ai her catch-all adreste ek sinyallere bakar ve geçerli ya da geçersiz sonucunu verir. Bu sayfada
        her ziyaretçinin yalnızca birkaç kontrol yapabilmesinin nedeni de budur. Konunun tamamı için{' '}
        <InlineLink href="/tr/blog/catch-all-e-posta-adresi-nedir">catch-all e-posta adresi nedir</InlineLink>{' '}
        yazısını okuyun.
      </>,
    ],
  },
  wholeList: {
    title: 'Tek bir adres yerine listenin tamamını doğrulayın',
    list: (
      <>
        Bu sayfadaki araç her seferinde bir adresi kontrol eder. Bir listenin toplu e-posta doğrulaması için bir
        hesap oluşturun ve en fazla 50.000 adres içeren bir CSV veya Excel dosyası yükleyin. Ardından her satırda
        aynı kontrollerle <InlineLink href="/tr">e-posta listenizi temizleyin</InlineLink>. Kredi kartı gerekmeden
        1.000 ücretsiz krediyle başlarsınız.
      </>
    ),
    api: (
      <>
        Adresleri kendi uygulamanızda veya kayıt formunuzda kontrol etmek için{' '}
        <InlineLink href="/email-verification-api">e-posta doğrulama API</InlineLink> sayfasına bakın (İngilizce).
        API aynı kontrolleri çalıştırır ve sonucu JSON olarak döndürür.
      </>
    ),
  },
  faqTitle: 'Mail adresi doğrulama: sık sorulan sorular',
  faqs: [
    {
      q: 'Email checker nedir?',
      a: 'Email checker, yani mail adresi doğrulama aracı, bir e-posta adresinin biçimini, e-posta sunucusunu ve posta kutusunun kendisini kontrol ederek adresin geçerli olup olmadığını söyler. İngilizcede email verifier veya email validator olarak da bilinir. Adrese e-posta göndermeden çalışır.',
    },
    {
      q: 'Mail doğrulama ile mail adresi sorgulama aynı şey mi?',
      a: 'Evet. Mail doğrulama, mail adresi sorgulama ve e-posta doğrulama aynı işi anlatır. İngilizcedeki email checker, email verifier ve email validator da aynı tür aracın üç adıdır. Hepsi bir adresin biçimini, e-posta sunucusunu ve posta kutusunu kontrol eder. Araçlar arasındaki fark catch-all alan adlarında ortaya çıkar. Birçoğu orada "riskli" sonucuyla durur. Bu araç geçerli ya da geçersiz sonucunu verir.',
    },
    {
      q: 'Mail adresi doğrulama aracı nasıl çalışır?',
      a: 'Dört kontrolü sırayla yapar. Önce adresin biçimini kontrol eder. Sonra alan adının e-posta sunucusu kayıtlarına bakar. Ardından e-posta sunucusuna posta kutusunun var olup olmadığını sorar. Sunucunun her adrese evet dediği catch-all alan adlarında Giggal.ai, gerçek bir posta kutusunu sahte olandan ayırmak için ek sinyallere bakar.',
    },
    {
      q: 'Bir mail adresini doğrulamak ne anlama gelir?',
      a: 'Bu araçla, adresin gerçekten var olup olmadığını ve e-posta alıp alamayacağını kontrol etmek anlamına gelir. Araç posta kutusunun var olduğunu doğrular ve adresin geçici bir adres olup olmadığını gösterir. Adresin kime ait olduğunu söylemez. Size gelen bir e-postanın güvenilir olup olmadığını da söylemez.',
    },
    {
      q: 'Bir mail adresinin geçerli olup olmadığını nasıl kontrol ederim?',
      a: 'Adresi bu sayfanın üst kısmındaki email checker\'a yapıştırın ve kontrolü başlatın. Birkaç saniye içinde bir sonuç alırsınız: geçerli, geçersiz veya bilinmiyor. Sonucun altında nedeni ve e-posta sunucusu ayrıntıları yer alır.',
    },
    {
      q: 'Bir mail adresinin var olup olmadığını e-posta göndermeden kontrol edebilir miyim?',
      a: 'Evet. Araç, alıcının e-posta sunucusuna posta kutusunun var olup olmadığını sorar ve herhangi bir mesaj gönderilmeden önce durur. Kişinin gelen kutusuna hiçbir şey düşmez.',
    },
    {
      q: 'Bir e-posta adresinin hâlâ aktif olup olmadığını kontrol edebilir miyim?',
      a: 'Aktif derken adresin hâlâ var olduğunu ve e-posta alabildiğini kastediyorsanız evet. Araç e-posta sunucusuna posta kutusunun var olup olmadığını ve e-posta kabul edip etmediğini sorar. Adresin kişi tarafından ne sıklıkla okunduğunu göstermez.',
    },
    {
      q: 'Araç adrese e-posta gönderir mi?',
      a: 'Hayır. Kontrol yalnızca e-posta sunucusuyla iletişim kurar. Adresin sahibine hiçbir şey ulaşmaz ve adresinin kontrol edildiği ona bildirilmez.',
    },
    {
      q: 'Mail doğrulama araçları ne kadar doğru?',
      a: `Araca göre değişir. Çoğu normal alan adlarında doğrudur, ancak catch-all alan adlarında vazgeçer ve "riskli" ya da "bilinmiyor" sonucunu verir. Giggal.ai catch-all alan adlarında kontrole devam eder ve geçerli ya da geçersiz sonucunu verir. Kurumsal listelerde ölçülen doğruluk oranı %98,5'tir.`,
    },
    {
      q: 'Catch-all bir alan adında "geçerli" ne anlama gelir?',
      a: 'Yalnızca alan adının alıcıyı kabul ettiği değil, posta kutusunun doğrulandığı anlamına gelir. Basit bir catch-all etiketi yalnızca sunucunun her şeye evet dediğini söyler. Burada geçerli, adresin gerçek bir posta kutusunu geri dönecek bir adresten ayıran ek kontrollerden geçtiği anlamına gelir.',
    },
    {
      q: 'Mail doğrulamada "bilinmiyor" ne anlama gelir?',
      a: 'E-posta sunucusu zamanında net bir yanıt vermedi. Bunun nedeni çoğu zaman sunucunun yeni gönderenleri bilerek bekletmesidir (greylisting). Bu, adresin kullanılamaz olduğunu kanıtlamaz. Adresi daha sonra tekrar kontrol edin.',
    },
    {
      q: 'Burada kaç adresi kontrol edebilirim?',
      a: 'Kayıt ve kredi kartı olmadan saatte birkaç adres. Her kontrol tüm adımları çalıştırır, sayının az olmasının nedeni budur. Daha fazlasını kontrol etmek için bir hesap oluşturun.',
    },
    {
      q: 'Geçerli bir e-posta adresi yine de geri dönebilir mi?',
      a: 'Evet, ama nadiren. Geçerli sonucu, posta kutusunun kontrol anında var olduğu anlamına gelir. Posta kutusu doluysa, e-posta sunucusu bir süre çalışmıyorsa, kişi kontrolden sonra şirketten ayrılırsa veya sunucu gönderim alan adınızı engellerse e-posta yine de geri dönebilir. Adresleri göndermeye yakın bir zamanda kontrol edin.',
    },
    {
      q: 'Verilerim gizli kalır mı?',
      a: 'Giggal.ai, TargetPulse Ltd tarafından işletilir ve kişisel verileri GDPR kapsamında işler. giggal.ai/tr/gizlilik-politikasi adresindeki gizlilik politikası hangi verilerin toplandığını, nasıl kullanıldığını ve ne kadar süre saklandığını açıklar.',
    },
    {
      q: 'Burada bir listenin tamamını kontrol edebilir miyim?',
      a: 'Bu sayfada edemezsiniz. Bir hesap oluşturun ve listeyi CSV veya Excel dosyası olarak yükleyin. Her adres aynı kontrollerden geçer. Kredi kartı gerekmeden 1.000 ücretsiz krediyle başlarsınız.',
    },
  ],
  ctaHeadline: 'Listenizin tamamını kontrol edin',
  related: [
    { href: '/tr/mail-adresi-dogrulama/mail-adresi-gecerli-mi', label: 'Mail adresi geçerli mi, nasıl anlaşılır' },
    { href: '/tr/catch-all-dogrulama', label: 'Catch-all ve riskli adresleri doğrulama' },
    { href: '/tr/fiyatlar', label: 'Fiyatlar ve krediler' },
    { href: '/tr/gecici-mail-kontrolu', label: 'Geçici mail kontrolü' },
    { href: '/tr/blog/catch-all-e-posta-adresi-nedir', label: 'Catch-all e-posta adresi nedir?' },
  ],
}
