// Turkish MyEmailVerifier alternative page. Translated from
// app/(en)/myemailverifier-alternative (2026-11-27). Its prices are from the
// August 2026 check, as in the English. The competitor's words (free tier,
// expiry, strengths) are in lib/i18n/altBrands/tr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'myemailverifier',
  path: '/tr/myemailverifier-alternatifi',
  cluster: 'altMyemailverifier',
  metaTitle: 'MyEmailVerifier alternatifi: fiyatlar ve catch-all | Giggal.ai',
  ogTitle: 'B2B listeleri için MyEmailVerifier alternatifi',
  desc: "MyEmailVerifier günde 100 ücretsiz kredi verir ama catch-all için yalnızca bir durum gösterir. Giggal.ai bu mailler için sonuç verir. 10.000 adres $9,90 tutar.",
  h1: ['Catch-all alan adları içeren B2B listeleri için ', 'MyEmailVerifier alternatifi', ''],
  heroP:
    "MyEmailVerifier, günde 100 ücretsiz kredi veren düşük maliyetli bir mail doğrulama aracıdır. Catch-all adresleri ayrı bir durumla işaretler ve bu adresleri doğrulamaz. Giggal.ai bu adresler için sonuç verir. Fiyatı 10.000 mail için $9,90'dır.",
  bluf: [
    { k: 'Catch-all', v: 'MyEmailVerifier catch-all adresleri yalnızca bir durum olarak işaretler. Giggal.ai sonuç verir.' },
    { k: 'Fiyat', v: "10.000 kredi MyEmailVerifier'da $15, Giggal.ai'da $9,90 tutar." },
    { k: 'Yüksek miktarda', v: "Bir milyon kredi MyEmailVerifier'da $349, Giggal.ai'da $680 tutar." },
    { k: 'Ücretsiz krediler', v: 'MyEmailVerifier günde 100 kredi verir. Giggal.ai bir kez 1.000 kredi verir, kredi kartı gerekmez.' },
  ],
  about: {
    heading: 'MyEmailVerifier nedir?',
    paragraphs: [
      "MyEmailVerifier, myemailverifier.com sitesinden sunulan bir e-posta doğrulama hizmetidir. Toplu listeleri ve tek tek adresleri doğrular. Bir API'si de vardır.",
      "Her gün 100 ücretsiz kredi verir. Ücretli krediler 1.000 kredi için $4'dan başlar ve süreleri hiç dolmaz.",
      'Catch-all adresleri ayrı bir catch-all durumuyla döndürür. Bu posta kutularının var olup olmadığını doğrulamaz.',
    ],
  },
  reasons: {
    heading: 'Kullanıcılar neden MyEmailVerifier alternatifi arıyor',
    items: [
      { k: 'Catch-all', v: 'Catch-all adresler net bir yanıt olmadan döner. B2B listelerinde bu adresler listenin büyük bir kısmı olabilir.' },
      { k: 'Ağ geçitleri', v: 'MyEmailVerifier, arkasındaki adresleri kontrol edebildiği Proofpoint, Mimecast veya başka bir ağ geçidini listelemez.' },
    ],
  },
  catchAllHeading: 'Catch-all mailler: MyEmailVerifier ve Giggal.ai',
  catchAllProse:
    'Birçok şirket alan adı her adresi kabul eder. Bu yüzden basit bir kontrol, gerçek bir adresi sahte bir adresten ayıramaz. MyEmailVerifier bu adresleri catch-all olarak işaretler ve kararı size bırakır. Giggal.ai bu adresleri daha ileri düzeyde kontrol eder ve aşağıdaki dört sonuçtan birini verir. Her adres 1 kredi kullanır.',
  pricingHeading: 'MyEmailVerifier fiyatları: Giggal.ai ile karşılaştırma',
  pricingProse:
    "MyEmailVerifier süresi hiç dolmayan krediler satar. Ağustos 2026'daki kontrolümüzde 1.000 kredi $4, 10.000 kredi $15, 100.000 kredi $99 ve bir milyon kredi $349 tutuyordu.",
  pricingExtra: [
    "Giggal.ai'da 10.000 kredi $9,90, 100.000 kredi $76 ve bir milyon kredi $680 tutar. Bir milyon kredide MyEmailVerifier daha ucuzdur. Giggal.ai ise catch-all adresler ve ağ geçidi arkasındaki adresler için de sonuç verir.",
  ],
  strengths: {
    heading: 'MyEmailVerifier hangi durumlarda iyi bir seçimdir',
    intro: 'MyEmailVerifier bazı listeler için iyi bir seçimdir:',
  },
  others: {
    heading: 'Diğer MyEmailVerifier alternatifleri',
    intro: "Bu doğrulama araçlarının da fiyatları düşüktür ya da her gün ücretsiz kredi verirler. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'QuickEmailVerification', text: 'Bu araç da günde 100 ücretsiz kredi verir. 10.000 kalıcı kredi $60 tutar.' },
      { name: 'Bounceless', text: 'İş e-posta adresiyle ayda 1.000 ücretsiz kredi verir. 10.000 kredi $29 tutar ve catch-all bilgisi fiyata dahildir.' },
      { name: 'no2bounce', text: '10.000 kredi $20 tutar ve kredilerin süresi hiç dolmaz. Catch-all posta kutularını doğrulamak için test mesajları gönderir.' },
    ],
  },
  testHeading: 'Catch-all satırlarınızı Giggal.ai ile kontrol edin',
  testSteps: [
    "Daha önce MyEmailVerifier'da kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "MyEmailVerifier'ın catch-all olarak işaretlediği satırları karşılaştırın.",
  ],
  ctaHeadline: 'Catch-all adresler için sonuç alın',
  faqs: [
    {
      q: "MyEmailVerifier'ın fiyatı ne kadar?",
      a: "Ağustos 2026'daki kontrolümüzde 1.000 kredi $4, 10.000 kredi $15, 100.000 kredi $99 ve bir milyon kredi $349 tutuyordu. Kredilerin süresi hiç dolmaz.",
    },
    {
      q: 'MyEmailVerifier ücretsiz mi?',
      a: 'Her gün 100 ücretsiz kredi verir. Günlük krediler bir deneme süresinden sonra bitmez, her gün yenilenir. Giggal.ai kredi kartı istemeden bir kez 1.000 ücretsiz kredi verir.',
    },
    {
      q: 'MyEmailVerifier catch-all mailleri doğrular mı?',
      a: 'Catch-all alan adlarını tespit eder ve catch-all durumunu döndürür. Posta kutusunu doğrulamaz. Giggal.ai catch-all adresler için sonuç verir ve her adres 1 kredi kullanır.',
    },
    {
      q: 'Giggal.ai kredilerinin süresi dolar mı?',
      a: 'Hayır. Giggal.ai kredilerinin süresi hiç dolmaz. MyEmailVerifier kredilerinin süresi de hiç dolmaz.',
    },
  ],
  breadcrumb: 'MyEmailVerifier alternatifi',
}

export default cfg
