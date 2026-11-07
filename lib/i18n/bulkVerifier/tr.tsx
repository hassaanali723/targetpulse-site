import type { BulkVerifierCopy } from '@/components/l10n/BulkVerifierL10n'
import { InlineLink } from '@/components/l10n/BulkVerifierL10n'

// Turkish copy for /tr/toplu-mail-dogrulama, translated from the English
// /bulk-email-verifier page (app/(en)/bulk-email-verifier/page.tsx), with the
// Indonesian copy as the structural model. Final keyword plan
// (SEO-Plan/i18n-batch5-tr-keyword-plan.md, Ahrefs Turkey): head term "toplu
// mail doğrulama" in title, H1 and intro, the English "bulk email
// verification" once in the definition and once in the FAQ. Body prose keeps
// "e-posta". Numbers 50.000, %98,5, %3. Formal "siz".

export const copy: BulkVerifierCopy = {
  meta: {
    title: 'Toplu mail doğrulama: mail listenizi temizleyin',
    description:
      "50.000 adrese kadar CSV ve Excel listeleri için toplu mail doğrulama. Catch-all dahil her satır geçerli ya da geçersiz sonuç alır. 1.000 ücretsiz kredi.",
    breadcrumb: 'Toplu mail doğrulama',
    appName: 'Giggal.ai toplu mail doğrulama',
  },
  hero: {
    h1Lead: 'Toplu mail doğrulama:',
    h1Rest: 'listenizin tamamını tek seferde kontrol edin',
    intro:
      'Bir CSV veya Excel dosyası yükleyin. Bu toplu mail doğrulama aracı dosyadaki her adresi kontrol eder. Catch-all adresler dahil her satır geçerli ya da geçersiz bir sonuç alır.',
    ctaPrimary: 'Listenizi ücretsiz doğrulayın',
    ctaPricing: 'Fiyatları görün',
    checks: ['1.000 ücretsiz kredi', 'Kredi kartı gerekmez', 'Kredilerin süresi hiç dolmaz'],
  },
  facts: [
    { v: '50.000', l: 'dosya başına adres' },
    { v: '%98,5', l: 'kurumsal listelerde doğruluk' },
    { v: '1 kredi', l: 'adres başına, catch-all dahil' },
    { v: '<%3', l: 'doğrulamadan sonra genellikle görülen bounce oranı' },
  ],
  definition: {
    title: 'Toplu mail doğrulama nedir?',
    text: "Toplu mail doğrulama (İngilizcede bulk email verification), bir e-posta adresi listesinin tamamını tek seferde kontrol eder ve hangi adreslerin e-posta alabileceğini gösterir. Toplu e-posta doğrulama aracı her alan adının e-posta sunucularını bulur ve her posta kutusunun var olup olmadığını sorar. Bunu yaparken e-posta göndermez. Geri dönecek (bounce) adresleri göndermeden önce çıkarırsınız. Bu, gönderen itibarınızı ve teslim edilebilirliğinizi korur.",
  },
  steps: {
    title: 'Toplu mail doğrulama nasıl çalışır',
    intro:
      'Üç adım vardır ve listenizdeki kimseye e-posta gönderilmez. Çoğu liste birkaç dakika içinde tamamlanır.',
    items: [
      {
        title: 'Listenizi yükleyin',
        text: 'En fazla 50.000 e-posta adresi içeren bir CSV veya Excel dosyası ekleyin. Daha büyük bir liste için listeyi birkaç dosyaya bölün.',
      },
      {
        title: 'Her adres kontrol edilir',
        text: 'Araç her alan adının e-posta sunucularını bulur ve posta kutusunun var olup olmadığını sorar. Ayrıca geçici, rol tabanlı, yinelenen ve catch-all adresleri işaretler.',
      },
      {
        title: 'Sonuçları indirin',
        text: 'Her satırında bir sonuç bulunan bir CSV dosyası alırsınız. Geçerli adresleri tutun, geçersiz olanları silin ve bilinmiyor sonucu alanları daha sonra tekrar deneyin.',
      },
    ],
  },
  results: {
    title: 'Toplu e-posta doğrulama aracı her adres için ne döndürür',
    intro: 'Her satır üç sonuçtan birini alır.',
    valid: {
      title: 'Geçerli',
      text: 'Posta kutusu var, bu yüzden bu adrese gönderilen e-posta ulaşmalıdır. Bu adresleri tutun.',
    },
    invalid: {
      title: 'Geçersiz',
      text: 'Biçim hatalıdır, alan adının e-posta sunucusu yoktur ya da posta kutusu yoktur. Bu adrese gönderilen e-posta geri döner. Bu adresleri silin.',
    },
    unknown: {
      title: 'Bilinmiyor',
      text: 'E-posta sunucusu net bir yanıt vermedi. Bunun nedeni çoğu zaman greylisting olur. Bu adresleri daha sonra tekrar deneyin. Bilinmiyor sonuçlarının kredileri iade edilir.',
    },
    flagsIntro: 'Her satırda ayrıca şu işaretler görünür. Böylece hangi adresleri tutacağınıza siz karar verirsiniz:',
    flags: [
      { lead: 'Catch-all', rest: ', riskli olarak bırakılmaz, geçerli ya da geçersiz olarak sonuçlandırılır' },
      { lead: 'Geçici e-posta', rest: ', yakında çalışmayı bırakacak geçici bir gelen kutusu' },
      { lead: 'Rol tabanlı adres', rest: ', info@ veya sales@ gibi, bir kişiye değil ortak bir gelen kutusuna ait adres' },
      { lead: 'Yinelenen adres', rest: ', dosyanızda birden fazla kez geçen aynı adres' },
    ],
  },
  catchAll: {
    title: 'Catch-all adresler gerçek bir sonuç alır',
    paragraphs: [
      <>
        Bazı şirket e-posta sunucuları gerçek ya da uydurma her adresi kabul eder. Buna{' '}
        <InlineLink locale="tr" href="/catch-all-verification">catch-all alan adı</InlineLink> denir. Normal bir
        kontrol böyle bir alan adındaki her adres için evet yanıtı alır. Bu yüzden gerçek bir posta kutusunu yazım
        hatasından ayıramaz.
      </>,
      <>
        Birçok toplu e-posta doğrulama aracı burada durur ve her catch-all adresi &quot;riskli&quot; olarak işaretler.
        B2B listelerinde bu adresler kişilerinizin büyük bir kısmı olabilir ve bunların birçoğu gerçek kişilerdir. Kime e-posta
        göndereceğinizi tahmin etmek zorunda kalırsınız.
      </>,
      <>
        Giggal.ai her catch-all adresi kontrol eder ve diğer adreslerle aynı şekilde 1 kredi karşılığında geçerli ya da
        geçersiz sonucu verir. Diğer araçların çoğu zaman bilinmiyor sonucu verdiği{' '}
        <InlineLink locale="tr" href="/seg-email-verification">Proofpoint ve Mimecast gibi güvenli e-posta ağ geçitlerinin arkasındaki alan adlarında</InlineLink>{' '}
        (İngilizce) da çalışır.
      </>,
    ],
  },
  pricing: {
    title: 'Ücretsiz toplu mail doğrulama: 1.000 krediyle başlayın',
    intro:
      "Her yeni hesap, kredi kartı gerekmeden 1.000 ücretsiz kredi alır. Bu kredilerle 1.000 adrese kadar bir listeyi ücretsiz doğrularsınız. Sonrasında bu toplu e-posta doğrulama hizmetinde kullandıkça ödersiniz. Krediyi bir kez satın alırsınız, aylık paket yoktur ve kredilerin süresi hiç dolmaz.",
    colCredits: 'Kredi (adres)',
    colPrice: 'Fiyat',
    colPer1k: '1.000 adres başına',
    freeLabel: 'Ücretsiz',
    freeNote: 'Yeni hesap, kredi kartı gerekmez',
    footnote: (
      <>
        Bir kredi bir adresi doğrular, catch-all kontrolleri dahildir. Tüm{' '}
        <InlineLink locale="tr" href="/pricing">fiyatları</InlineLink> görün.
      </>
    ),
  },
  useCases: {
    title: 'Toplu e-posta doğrulama aracı ne zaman kullanılır',
    intro:
      'Aynı anda çok sayıda adrese e-posta göndermeden önce listenizi doğrulayın. Geçersiz adresleri önceden çıkarmak teslim edilebilirliğinizi yüksek tutar.',
    items: [
      'Bir soğuk e-posta kampanyasından önce, geri dönen e-postalar teslim edilebilirliğinize zarar vermesin diye.',
      'Bir formdan, bir etkinlikten veya bir müşteri adayı veritabanından kişi topladıktan sonra.',
      'Aylardır kullanılmayan eski bir bülten listesine e-posta göndermeden önce.',
      'Kişileri CRM sisteminize veya e-posta aracınıza aktarmadan önce.',
    ],
  },
  software: {
    title: 'Kendi araçlarınız için toplu e-posta doğrulama yazılımı',
    intro:
      'Dosya yüklemek yollardan biridir. Toplu e-posta doğrulamayı kendi uygulamanızdan veya iş akışınızdan da çalıştırabilirsiniz.',
    items: [
      {
        title: "E-posta doğrulama API'si (İngilizce)",
        text: 'Adresleri uygulamanızdan veya kayıt formunuzdan gönderin ve sonucu JSON olarak alın.',
      },
      {
        title: 'Entegrasyonlar',
        text: 'Yeni kişileri Zapier veya n8n ile otomatik olarak doğrulayın.',
      },
      {
        title: 'MCP sunucusu',
        text: 'E-posta adreslerini Claude, ChatGPT, Cursor ve VS Code içinden doğrulayın.',
      },
    ],
  },
  versus: {
    listTitle: 'E-posta listesi doğrulama mı, e-posta listesi temizleme mi?',
    listText: (
      <>
        E-posta listesi doğrulama her adrese bir sonuç verir. Temizleme ise bu sonuçlarla yaptığınız iştir: geçersiz,
        geçici ve yinelenen adresleri silersiniz ve temiz bir dosya elde edersiniz. İkisi de aynı yüklemeyle başlar.{' '}
        <InlineLink locale="tr" href="/email-list-cleaning">E-posta listesi temizleme</InlineLink> hakkında daha
        fazlasını okuyun (İngilizce).
      </>
    ),
    oneTitle: 'Yalnızca tek bir adresi mi kontrol etmek istiyorsunuz?',
    oneText: (
      <>
        Ücretsiz{' '}
        <InlineLink locale="tr" href="/email-checker">mail adresi doğrulama aracını</InlineLink> kullanın. Aynı
        kontrollerle her seferinde bir adresi doğrular ve kayıt gerektirmez.
      </>
    ),
  },
  faqTitle: 'Toplu mail doğrulama: sık sorulan sorular',
  faqs: [
    {
      q: 'Toplu mail doğrulama aracı nedir?',
      a: 'Toplu e-posta doğrulama aracı, adresleri tek tek kontrol etmek yerine bir e-posta adresi listesinin tamamını tek seferde kontrol eder. Bir dosya yüklersiniz ve her adres bir sonuç alır: geçerli, geçersiz veya bilinmiyor. İngilizcede bu işe bulk email verification, araca da bulk email verifier veya bulk email checker denir.',
    },
    {
      q: 'Tek seferde kaç e-posta adresi doğrulayabilirim?',
      a: 'Dosya başına en fazla 50.000 adres. Listeniz daha büyükse listeyi birkaç dosyaya bölün ve her birini ayrı yükleyin.',
    },
    {
      q: 'Ücretsiz bir toplu mail doğrulama aracı var mı?',
      a: 'Evet. Her yeni hesap, kredi kartı gerekmeden 1.000 ücretsiz kredi alır. Bir kredi bir adresi doğrular. Böylece 1.000 adrese kadar bir listeyi ücretsiz doğrulayabilirsiniz.',
    },
    {
      q: 'Ücretsiz toplu e-posta doğrulama gerçekten ücretsiz mi?',
      a: 'Evet. İlk 1.000 adresiniz ücretsizdir ve kredi kartı gerekmez. Ücretsiz kredilerin süresi hiç dolmaz, bu yüzden onları istediğiniz zaman kullanabilirsiniz. Yalnızca 1.000 adresten fazlasını doğrulamanız gerekirse ödeme yaparsınız.',
    },
    {
      q: 'Toplu mail doğrulama ne kadar sürer?',
      a: 'Çoğu liste birkaç dakika içinde tamamlanır.',
    },
    {
      q: 'Hangi dosya biçimlerini yükleyebilirim?',
      a: 'CSV veya Excel. Sonuçları, her satırda bir sonuç bulunan bir CSV dosyası olarak indirirsiniz.',
    },
    {
      q: 'Toplu e-posta doğrulama aracı listemdeki adreslere e-posta gönderir mi?',
      a: 'Hayır. Araç her e-posta sunucusuna posta kutusunun var olup olmadığını sorar ve herhangi bir mesaj gönderilmeden önce durur. Listenizdeki hiç kimseye bir şey ulaşmaz.',
    },
    {
      q: 'Toplu e-posta doğrulamanın maliyeti nedir?',
      a: 'Adres başına bir kredi, catch-all kontrolleri dahil. 10.000 adres $9,90, 100.000 adres $76 tutar. Bir kez ödersiniz, aylık paket yoktur ve kredilerin süresi hiç dolmaz.',
    },
    {
      q: 'Catch-all adreslere ne olur?',
      a: 'Her biri kontrol edilir ve diğer adreslerle aynı şekilde 1 kredi karşılığında geçerli ya da geçersiz olarak döner. Birçok toplu e-posta doğrulama aracı ise bunların hepsini "riskli" olarak işaretler.',
    },
    {
      q: '"Bilinmiyor" ne demek ve bunun için ödeme yapar mıyım?',
      a: 'Bilinmiyor, e-posta sunucusunun net bir yanıt vermediği anlamına gelir. Bunun nedeni çoğu zaman sunucunun yeni gönderenleri bilerek bekletmesidir (greylisting). Bu adresleri daha sonra tekrar deneyin. Bilinmiyor sonuçlarının kredileri iade edilir.',
    },
    {
      q: 'Toplu e-posta geçerlilik kontrolü ile toplu e-posta doğrulama aynı şey mi?',
      a: 'Evet. Geçerlilik kontrolü, doğrulama ve kontrol etme aynı işi anlatan üç farklı ifadedir: bir listedeki hangi adreslerin e-posta alabileceğini bulmak.',
    },
    {
      q: 'Toplu e-posta doğrulama aracı ne kadar doğru?',
      a: "Giggal.ai'ın kurumsal listelerde ölçülen doğruluk oranı %98,5'tir. Bu araçla doğrulanan listelerin bounce oranı genellikle %3'ün altındadır.",
    },
    {
      q: 'Listem gizli tutulur mu?',
      a: 'Giggal.ai, TargetPulse Ltd tarafından işletilir ve kişisel verileri GDPR kapsamında işler. giggal.ai/tr/gizlilik-politikasi adresindeki gizlilik politikası hangi verilerin toplandığını, nasıl kullanıldığını ve ne kadar süre saklandığını açıklar.',
    },
  ],
  ctaHeadline: 'E-posta listenizi birkaç dakikada doğrulayın',
}
