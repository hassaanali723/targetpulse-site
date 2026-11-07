import type { AffiliatesContent } from '@/lib/i18n/affiliates/types'

// Turkish copy for /tr/ortaklik-programi. Source: app/(en)/affiliates/page.tsx.
// Formal "siz", numbers 1.000 and 10.000, percent sign first (%20), money $50
// (currency stays USD). Affiliate program = ortaklık programı (terminology
// sheet). The component puts a space on both sides of the Giggal.ai wordmark,
// so intro.after starts with a word, not a suffix.

export const AFFILIATES_TR: AffiliatesContent = {
  meta: {
    title: 'Ortaklık programı: %20 tekrarlayan komisyon | Giggal.ai',
    description:
      'Giggal.ai ortaklık programı: yönlendirdiğiniz müşterilerin her ödemesinden %20 tekrarlayan komisyon, 3 aylık atıf süresi, aylık ödeme, sınırsız kazanç.',
    ogTitle: 'Ortaklık programı: e-posta doğrulamada %20 tekrarlayan komisyon',
    ogDescription:
      "Giggal.ai'a yönlendirdiğiniz her müşteri için %20 tekrarlayan komisyon kazanın. Süre sınırı ve kazanç sınırı yoktur.",
  },
  crumb: 'Ortaklık programı',
  h1Lead: '%20 tekrarlayan komisyon kazanın',
  h1Accent: 'her ay, süre sınırı olmadan',
  intro: {
    before: 'Kitlenize',
    after:
      'aracını önerin. Yönlendirdiğiniz kişiler müşterimiz olduğu sürece yaptıkları her ödemeden %20 komisyon kazanın. Kazanç sınırı ve süre sınırı yoktur.',
  },
  joinCta: 'Ortaklık programına katılın',
  howCta: 'Nasıl çalıştığını görün',
  stats: [
    { value: '%20', label: 'Tekrarlayan komisyon' },
    { value: '3 ay', label: 'Atıf süresi' },
    { value: 'Aylık', label: 'Ödemeler' },
    { value: '$50', label: 'Asgari ödeme' },
  ],
  why: {
    eyebrow: 'Neden katılmalısınız',
    h2: 'E-posta araçları arasında en cömert programlardan biri',
    sub: 'Tek seferlik bir ödül değil, gerçek tekrarlayan gelir.',
    cards: [
      {
        title: '%20 tekrarlayan komisyon',
        body: 'Yönlendirdiğiniz müşterilerin yaptığı her ödemeden her ay ve her yıl kazanın.',
      },
      {
        title: 'Kazanç sınırı yok',
        body: '10 müşteri ya da 10.000 müşteri yönlendirin. Kazanabileceğiniz tutarın bir üst sınırı yoktur.',
      },
      {
        title: '3 aylık atıf süresi',
        body: 'Yönlendirdiğiniz kişi bağlantınıza tıkladıktan sonraki 3 ay içinde kaydolursa bu kayıt size yazılır.',
      },
      {
        title: 'Aylık ödemeler',
        body: "Bakiyeniz en az $50'a ulaştığında her ay PayPal veya Wise ile ödeme alın.",
      },
    ],
  },
  how: {
    eyebrow: 'Nasıl çalışır',
    h2: 'Kayıttan ilk ödemeye aylar değil, günler içinde',
    steps: [
      {
        title: '30 saniyede başvurun',
        body: 'Programa kaydolun ve size özel yönlendirme bağlantınızı hemen alın. Görüşme yok, bekleme süresi yok.',
      },
      {
        title: 'Bağlantınızı paylaşın',
        body: "Giggal.ai'ı blogunuzda, bülteninizde, sosyal medyada, YouTube'da ya da daha temiz e-posta listelerine ihtiyacı olan müşterilerinize doğrudan tanıtın.",
      },
      {
        title: 'Her ay ödeme alın',
        body: "Yönlendirdiğiniz müşterilerin yaptığı her ödemenin %20'sini kazanın. Her şey otomatik olarak takip edilir ve her ay ödenir.",
      },
    ],
  },
  earn: {
    eyebrow: 'Kazanç potansiyeliniz',
    h2: 'Ne kadar kazanabilirsiniz',
    sub: "100.000 kredilik popüler paketimizi ($76/ay) kullanan müşterilere göre hesaplanmıştır. Diğer paketler de %20 komisyon kazandırır.",
    colCustomers: 'Yönlendirilen müşteri',
    colPlan: 'Paket',
    colEarnings: 'Aylık kazancınız',
    perMonth: '/ay',
    note: 'Bu rakamlar örnek amaçlıdır. Gerçek kazancınız, yönlendirdiğiniz kişilerin seçtiği pakete bağlıdır.',
  },
  who: {
    eyebrow: 'Kimler için',
    h2: 'Teslim edilebilirliği önemseyenler için geliştirildi',
    sub: 'Kitleniz e-posta gönderiyorsa Giggal.ai için de bir kitleniz var demektir.',
    cards: [
      {
        title: 'E-posta pazarlamacıları',
        body: 'Kampanyalardan önce listeleri temizlemek için zaten güvendiğiniz aracı önerin.',
      },
      {
        title: 'Ajanslar',
        body: "Giggal.ai'a getirdiğiniz her müşteriden tekrarlayan bir gelir elde edin.",
      },
      {
        title: 'Kurs hazırlayanlar',
        body: 'Giggal.ai aracını soğuk e-posta veya müşteri adayı bulma kursunuzun içeriğine ekleyin.',
      },
      {
        title: 'SaaS toplulukları',
        body: 'Pazarlamacılardan, kuruculardan ve büyüme uzmanlarından oluşan kitlenizle paylaşın.',
      },
    ],
  },
  faq: {
    eyebrow: 'SSS',
    h2: 'Sık sorulan sorular',
    items: [
      {
        q: 'Ödemeyi ne zaman ve nasıl alırım?',
        a: "Ödemeler, ödenmemiş bakiyeniz $50'a ulaştığında her ay PayPal veya Wise ile (tercihinize göre) yapılır. Komisyonlarda bekletme süresi yoktur. Yönlendirdiğiniz müşteri ödeme yaptığında komisyon sizindir.",
      },
      {
        q: 'Komisyon ne kadar süre devam eder?',
        a: "Yönlendirdiğiniz müşteri ödeme yapmaya devam ettiği sürece. Müşteri 3 yıl boyunca müşterimiz kalırsa 3 yıl boyunca her ödemenin %20'sini kazanırsınız. Bu gerçek anlamda tekrarlayan bir gelirdir.",
      },
      {
        q: 'Yönlendirdiğim müşteri aboneliğini iptal ederse ne olur?',
        a: 'Müşteri iptal ettiği anda o müşteriden komisyon kazanmayı bırakırsınız. Daha sonra aynı hesapla yeniden abone olursa komisyonunuz devam eder.',
      },
      {
        q: 'Atıf süresi ne kadar?',
        a: 'Takip, bir kişinin bağlantınıza tıkladığı andan itibaren 3 ay sürer. Kişi bu süre içinde kaydolursa yönlendirme size yazılır.',
      },
      {
        q: 'YouTube, bloglar ve ücretli reklamlarla tanıtım yapabilir miyim?',
        a: 'YouTube, bloglar, bültenler, sosyal medya ve Reddit için evet. Marka anahtar kelimelerimiz (örneğin "Giggal.ai") üzerinde ücretli reklam vermeye izin verilmez. Bunun dışındaki her yöntem serbesttir.',
      },
      {
        q: 'Katılmak için müşteri olmam gerekir mi?',
        a: 'Hayır, ancak ürünü önce denemenizi önemle öneririz (1.000 ücretsiz kredi alırsınız). Böylece ürünü kendi deneyiminize dayanarak önerebilirsiniz.',
      },
      {
        q: 'Asgari bir ödeme tutarı var mı?',
        a: 'Evet, $50. Ödenmemiş komisyon bu tutara ulaşana kadar sonraki aya aktarılır, sonra otomatik olarak ödenir.',
      },
    ],
    more: 'Başka sorunuz mu var?',
    talk: 'Bize ulaşın',
  },
  final: {
    h2: 'Yönlendirmelerinizi tekrarlayan gelire dönüştürmeye hazır mısınız?',
    text: 'Programa 30 saniyede kaydolun ve yönlendirdiğiniz müşterilerin yaptığı her ödemeden %20 komisyon kazanmaya başlayın.',
    checks: ['Katılım ücretsiz', 'Onay süreci yok', 'Ömür boyu komisyon'],
  },
}
