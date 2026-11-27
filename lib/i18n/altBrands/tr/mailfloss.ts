// Turkish Mailfloss alternative page. Translated from app/(en)/mailfloss-alternative
// (2026-11-27). The competitor's words (free tier, expiry, strengths) are in
// lib/i18n/altBrands/tr/facts.ts.
import type { AltL10nConfig } from '@/components/l10n/AltPage'

const cfg: AltL10nConfig = {
  locale: 'tr',
  slug: 'mailfloss',
  path: '/tr/mailfloss-alternatifi',
  cluster: 'altMailfloss',
  metaTitle: 'Mailfloss alternatifi: fiyatlar ve catch-all | Giggal.ai',
  ogTitle: 'Catch-all mailleri kontrol eden Mailfloss alternatifi',
  desc: "Mailfloss, mail platformunuzdaki listeyi her gün temizler ama catch-all mailleri yalnızca işaretler. Giggal.ai bunlar için sonuç verir. 10.000 kredi $9,90.",
  h1: ['Tek seferlik liste temizliği için ', 'Mailfloss alternatifi', ''],
  heroP:
    "Mailfloss, mail pazarlama platformunuza bağlanır ve listeyi her gün temizler. Catch-all adresleri işaretler ama doğrulamaz. Giggal.ai yüklediğiniz listeleri doğrular ve catch-all adresler için sonuç verir. Fiyatı 10.000 mail için $9,90'dır.",
  bluf: [
    { k: 'Nasıl çalışır', v: 'Mailfloss listenizi e-posta platformunuzun içinde temizler. Giggal.ai, yüklediğiniz ya da API ile gönderdiğiniz listeleri kontrol eder.' },
    { k: 'Catch-all', v: 'Mailfloss catch-all adresleri işaretler. Giggal.ai bu adresler için sonuç verir.' },
    { k: 'Fiyat', v: "Mailfloss'un ön ödemeli kredileri 10.000 kredi için $40 tutar. Giggal.ai'da aynı miktar $9,90 tutar." },
    { k: 'Ücretsiz kullanım', v: 'Mailfloss ayda 500 ücretsiz kontrol verir. Giggal.ai bir kez 1.000 kredi verir, kredi kartı gerekmez.' },
  ],
  about: {
    heading: 'Mailfloss nedir?',
    paragraphs: [
      'Mailfloss bir e-posta listesi temizleme hizmetidir. Mailchimp, Klaviyo, HubSpot ve ActiveCampaign gibi 41 e-posta platformuna bağlanır. Ardından geçersiz adresleri her gün listenizden kaldırır.',
      "E-posta adreslerindeki yaygın yazım hatalarını da düzeltir. Gerçek zamanlı bir API'si, webhook desteği ve bir form bileşeni vardır.",
      'Mailfloss aylık abonelikler ve ön ödemeli krediler satar. Ön ödemeli kredilerin süresi hiç dolmaz.',
    ],
  },
  reasons: {
    heading: 'Kullanıcılar neden Mailfloss alternatifi arıyor',
    items: [
      { k: 'Catch-all', v: 'Mailfloss catch-all adresleri işaretler. Posta kutusunun var olup olmadığını doğrulamaz.' },
      { k: 'Deneme için kart', v: 'Aboneliklerdeki 7 günlük deneme için kredi kartı gerekir.' },
      { k: 'Platform sınırları', v: 'Lite paketi 1 e-posta platformuna, Business paketi 10 platforma bağlanır.' },
      { k: 'Fiyat', v: 'Ön ödemeli krediler 10.000 kredi için $40, 100.000 kredi için $300 tutar.' },
    ],
  },
  catchAllHeading: 'Mailfloss ve Giggal.ai catch-all mailleri nasıl ele alır',
  catchAllProse:
    'Mailfloss catch-all adresleri işaretler ve kararı size bırakır. Giggal.ai bu adresleri daha ileri düzeyde kontrol eder ve dört sonuçtan birini verir. Her adres 1 kredi kullanır. Giggal.ai ayrıca adı belirtilen 15 güvenli e-posta ağ geçidinin arkasındaki adresleri kontrol eder.',
  pricingHeading: 'Mailfloss fiyatları: Giggal.ai ile karşılaştırma',
  pricingProse:
    'Mailfloss abonelikleri şunlardır: 10.000 kredi için ayda $29 olan Lite, 25.000 kredi için $59 olan Business ve 125.000 kredi için $209 olan Pro. Ön ödemeli krediler 1.000 kredi için $8, 10.000 kredi için $40, 100.000 kredi için $300 ve bir milyon kredi için $1.200 tutar.',
  pricingExtra: [
    "Her Mailfloss hesabı ayrıca ayda 500 ücretsiz doğrulama alır. Giggal.ai'da 10.000 kredi $9,90, bir milyon kredi $680 tutar ve abonelik gerekmez.",
  ],
  strengths: {
    heading: 'Mailfloss hangi durumlarda iyi bir seçimdir',
    intro: "Mailfloss, Giggal.ai'ın yapmadığı bazı işleri yapar:",
  },
  others: {
    heading: 'Diğer Mailfloss alternatifleri',
    intro: "Bu doğrulama araçları da pazarlama listelerini temizler. Fiyatlar, 27 Kasım 2026'da her sağlayıcının kendi sitesinden alınmıştır.",
    items: [
      { name: 'QuickEmailVerification', text: "50'den fazla pazarlama aracıyla entegre olur. 10.000 kalıcı kredi $60 tutar." },
      { name: 'Bounceless', text: '10.000 kredi $29 tutar. İş e-posta adresiyle ayda 1.000 ücretsiz kredi verir.' },
      { name: 'no2bounce', text: 'HubSpot, Klaviyo ve Zoho ile entegre olur. 10.000 kredi $20 tutar ve kredilerin süresi hiç dolmaz.' },
    ],
  },
  testHeading: "E-posta platformunuzdan dışa aktardığınız bir listeyle Giggal.ai'ı deneyin",
  testSteps: [
    "Daha önce Mailfloss'ta kontrol ettiğiniz bir listeyi dışa aktarın.",
    'Listeyi burada 1.000 ücretsiz krediyle kontrol edin. Kredi kartı gerekmez.',
    "Catch-all satırlarını Mailfloss'un işaretledikleriyle karşılaştırın.",
  ],
  ctaHeadline: 'Catch-all adresler için bir işaret değil, sonuç alın',
  faqs: [
    {
      q: "Mailfloss'un fiyatı ne kadar?",
      a: "Abonelikler 10.000 kredi için ayda $29'dan başlar. Ön ödemeli krediler 10.000 kredi için $40, bir milyon kredi için $1.200 tutar ve süreleri hiç dolmaz.",
    },
    {
      q: "Mailfloss'un ücretsiz paketi var mı?",
      a: 'Evet. Her hesap ayda 500 ücretsiz doğrulama alır. Aboneliklerde ayrıca 7 günlük bir deneme vardır ve bunun için kredi kartı gerekir.',
    },
    {
      q: 'Mailfloss catch-all mailleri doğrular mı?',
      a: 'Bu adresleri işaretler. Posta kutusunun var olup olmadığını doğrulamaz. Giggal.ai catch-all adresler için sonuç verir ve her adres 1 kredi kullanır.',
    },
    {
      q: 'Giggal.ai, mail platformumdaki listeyi Mailfloss gibi temizler mi?',
      a: 'Hayır. Giggal.ai yüklemeler, API, Zapier, n8n ve HubSpot ile çalışır. E-posta platformunuzun içinde günlük bir temizleme işi çalıştırmaz.',
    },
  ],
  breadcrumb: 'Mailfloss alternatifi',
}

export default cfg
