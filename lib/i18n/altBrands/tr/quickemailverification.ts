// Turkish QuickEmailVerification alternative page. Translated from
// app/(en)/quickemailverification-alternative (2026-11-27). The competitor's
// words (free tier, expiry, strengths) are in lib/i18n/altBrands/tr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'quickemailverification',
  path: '/tr/quickemailverification-alternatifi',
  cluster: 'altQuickemailverification',
  metaTitle: 'QuickEmailVerification alternatifi ve fiyatları | Giggal.ai',
  ogTitle: 'Catch-all mailleri kontrol eden QuickEmailVerification alternatifi',
  desc: "QuickEmailVerification 10.000 kredi için $60 alır, catch-all için yalnızca bir durum gösterir. Giggal.ai bu mailler için sonuç verir. 10.000 adres $9,90 tutar.",
  h1: ['Catch-all mailleri kontrol eden ', 'QuickEmailVerification alternatifi', ''],
  heroP:
    "QuickEmailVerification uzun süredir hizmet veren bir mail doğrulama aracıdır ve günde 100 ücretsiz kredi verir. Catch-all adresleri catch-all olarak işaretler ve başka bir kontrol yapmaz. Giggal.ai bu adresler için sonuç verir. Fiyatı 10.000 mail için $9,90'dır.",
  bluf: [
    { k: 'Catch-all', v: 'QuickEmailVerification catch-all adresleri yalnızca bir durum olarak işaretler. Giggal.ai sonuç verir.' },
    { k: 'Fiyat', v: "10.000 kredi QuickEmailVerification'da $60, Giggal.ai'da $9,90 tutar." },
    { k: 'Ücretsiz krediler', v: 'QuickEmailVerification günde 100 kredi verir. Giggal.ai bir kez 1.000 kredi verir, kredi kartı gerekmez.' },
    { k: 'Kredilerin süresi', v: 'İki araçta da kullandıkça öde kredilerinin süresi hiç dolmaz.' },
  ],
  about: {
    heading: 'QuickEmailVerification nedir?',
    paragraphs: [
      'QuickEmailVerification, quickemailverification.com sitesinden sunulan bir e-posta doğrulama hizmetidir. Toplu listeleri, tek tek adresleri ve kayıt formlarını bir REST API üzerinden doğrular.',
      "Ücretsiz paketinde her gün 100 ücretsiz kredi verir. Zapier ve WordPress dahil 50'den fazla pazarlama aracıyla entegre olduğunu söyler.",
      'Sitesinde ISO 27001, GDPR, CCPA ve HIPAA rozetleri gösterir. %99 doğruluk iddia eder.',
    ],
  },
  reasons: {
    heading: 'Ekipler neden QuickEmailVerification alternatifi arıyor',
    items: [
      { k: 'Catch-all', v: 'Catch-all adresler catch-all olarak döner. Bu adreslere gönderim yapıp yapmamaya yine sizin karar vermeniz gerekir.' },
      { k: 'Fiyat', v: '10.000 kredi $60, 100.000 kredi $320 tutar.' },
      { k: 'Ağ geçitleri', v: 'Proofpoint veya Mimecast gibi güvenli e-posta ağ geçitlerini desteklediğini belirtmez.' },
    ],
  },
  catchAllHeading: 'İki araçta catch-all maillere ne olur',
  catchAllProse:
    'QuickEmailVerification catch-all adresleri catch-all durumuyla döndürür. Posta kutusunu doğrulamaz. Bir B2B listesinde bu durum, birçok adresin net bir yanıt olmadan kalmasına yol açabilir. Giggal.ai bu adresleri daha ileri düzeyde kontrol eder ve dört sonuçtan birini verir. Her adres 1 kredi kullanır.',
  pricingHeading: 'QuickEmailVerification fiyatları: Giggal.ai ile karşılaştırma',
  pricingProse:
    'QuickEmailVerification süresi hiç dolmayan kalıcı krediler satar. 500 kredi $4, 10.000 kredi $60, 100.000 kredi $320 ve bir milyon kredi $1.350 tutar. Ücretsiz günlük paket her gün 100 kredi verir.',
  pricingExtra: [
    "Giggal.ai'da 10.000 kredi $9,90, 100.000 kredi $76 ve bir milyon kredi $680 tutar. Giggal.ai kredilerinin süresi de hiç dolmaz.",
  ],
  strengths: {
    heading: 'QuickEmailVerification hangi durumlarda iyi bir seçimdir',
    intro: "QuickEmailVerification'ın şu güçlü yönleri vardır:",
  },
  others: {
    heading: 'Diğer QuickEmailVerification alternatifleri',
    intro: "Bu doğrulama araçları catch-all adresleri farklı şekillerde ele alır. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'Bounceless', text: '10.000 kredi $29 tutar. Catch-all bilgisi fiyata dahildir.' },
      { name: 'no2bounce', text: '10.000 kredi $20 tutar. Catch-all posta kutularını doğrulamak için test mesajları gönderir.' },
      { name: 'Mailfloss', text: '41 e-posta platformunun içinde listeleri her gün temizler. Ön ödemeli krediler 10.000 kredi için $40 tutar.' },
    ],
  },
  testHeading: 'Catch-all satırlarınızı Giggal.ai ile yeniden kontrol edin',
  testSteps: [
    "Daha önce QuickEmailVerification'da kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "QuickEmailVerification'ın catch-all olarak işaretlediği satırlara bakın ve sonuçları karşılaştırın.",
  ],
  ctaHeadline: 'Catch-all olarak işaretlenen adresler için sonuç alın',
  faqs: [
    {
      q: "QuickEmailVerification'ın fiyatı ne kadar?",
      a: "Kalıcı krediler 500 kredi için $4'dan başlar. 10.000 kredi $60, 100.000 kredi $320 ve bir milyon kredi $1.350 tutar. Bu kredilerin süresi hiç dolmaz.",
    },
    {
      q: 'QuickEmailVerification ücretsiz mi?',
      a: 'Günde 100 kredi veren ücretsiz bir paketi vardır ve krediler her gün sıfırlanır. Giggal.ai kredi kartı istemeden bir kez 1.000 ücretsiz kredi verir. Bu kredileri toplu yüklemede de kullanabilirsiniz.',
    },
    {
      q: 'QuickEmailVerification catch-all mailleri doğrular mı?',
      a: 'Catch-all alan adlarını tespit eder ve catch-all durumunu döndürür. Posta kutusunun var olup olmadığını doğrulamaz. Giggal.ai bu adresler için sonuç verir.',
    },
    {
      q: 'Giggal.ai iyi bir QuickEmailVerification alternatifi mi?',
      a: 'Evet, çok sayıda catch-all adres içeren B2B listeleri için. Giggal.ai 10.000 kredi için $9,90 alır ve bu adresler için sonuç verir.',
    },
  ],
  breadcrumb: 'QuickEmailVerification alternatifi',
}

export default cfg
