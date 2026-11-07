import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Translated clause by clause from the current English /refund-policy
// (Last Updated: October 22, 2026). The English version is binding; the
// notice at the top of the page says so and links to it.

export const metadata: Metadata = {
  title: 'E-posta doğrulama kredileri iade politikası',
  description: 'Giggal.ai iade kuralları: kullandıkça öde kredileri, abonelikler, deneme kredileri, hizmet sorunları, ters ibrazlar ve iade talebi. İngilizce metin geçerlidir.',
  alternates: { canonical: '/tr/iade-politikasi', languages: hreflangAlternates('refund') },
  openGraph: { siteName: 'Giggal.ai', locale: 'tr_TR', title: 'İade politikası', url: 'https://giggal.ai/tr/iade-politikasi', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Genel bakış', paragraphs: [
    'Giggal.ai olarak üstün kalitede e-posta doğrulama hizmeti sunmaya çalışırız. Bu İade Politikası, kredi tabanlı hizmetimiz için hangi durumlarda iade yapılabileceğini açıklar.',
    'Yalnızca dijital e-posta doğrulama hizmetleri sunarız. Fiziksel ürün satmayız ve göndermeyiz.',
  ]},
  { heading: '2. Kredi sistemimiz nasıl çalışır', paragraphs: ['Giggal.ai, e-posta doğrulama için kredi tabanlı bir sistemle çalışır:'], list: [
    '1 kredi = 1 e-posta doğrulaması: her e-posta adresi doğrulaması hesabınızdan 1 kredi kullanır',
    'Kullandıkça öde: istediğiniz zaman toplu olarak kredi satın alabilirsiniz (3.000 ila 1.000.000 kredilik paketler)',
    'Yinelenen krediler: %10 indirimle aylık yinelenen kredi paketlerine abone olabilirsiniz',
    'Süre sınırı yok: kredilerin süresi hiç dolmaz ve krediler kullanılana kadar hesabınızda kalır',
  ]},
  { heading: '3. Ücretsiz deneme kredileri', paragraphs: ['Yeni kullanıcılar, e-posta doğrulama hizmetimizi denemek için 1.000 ücretsiz deneme kredisi alır. Lütfen şunlara dikkat edin:'], list: [
    'Deneme kredileri ücretsiz verilir ve ödeme gerektirmez',
    'Deneme kredileri ücretsiz verildiği için iade edilmez',
    'Deneme kredileri, ücretli kredilerle aynı doğrulama kurallarına tabidir',
    'Deneme kredileriyle 1.000 e-posta adresi doğrulanabilir',
  ]},
  { heading: '4. Kredi satın alımlarında iade politikası' },
  { heading: '4.1 Kullandıkça öde kredileri (tek seferlik satın alma)', level: 3, paragraphs: ['Kullandıkça öde paketleriyle satın alınan krediler, satın alma tamamlandıktan sonra genel olarak iade edilmez. Bunun nedenleri şunlardır:'], list: [
    'Krediler hesabınıza anında eklenir ve hemen kullanılabilir',
    'Kredilerin süresi dolmaz ve değerlerini süresiz olarak korur',
    'Kredileri istediğiniz zaman kullanma esnekliğine sahipsiniz',
  ]},
  { heading: '4.2 Yinelenen kredi abonelikleri', level: 3, paragraphs: ['Aylık yinelenen kredi abonelikleri için:'], list: [
    'Krediler her ay faturalandırılır ve hesabınıza eklenir',
    'Aboneliğinizi bir sonraki fatura döneminden önce istediğiniz zaman iptal edebilirsiniz',
    'Hesabınıza daha önce eklenmiş krediler iade edilmez',
    'İptal, mevcut fatura döneminizin sonunda geçerli olur',
    'Önceki aylardan kalan kullanılmamış krediler iptalden sonra hesabınızda kalır',
  ]},
  { heading: '5. İstisnai durumlar ve destek', paragraphs: ['Standart politikamıza göre krediler iade edilmez. Ancak olağan dışı durumlar yaşanabileceğini biliyoruz. Aşağıdaki durumlarda:'], list: [
    'Hatalı kredi düşülmesine yol açan teknik hatalar',
    'E-posta doğrulamayı engelleyen hizmet arızaları',
    'Mükerrer ödemeler veya faturalandırma hataları',
    'Olağan dışı hesap etkinliği veya dolandırıcılık şüphesi',
    'Diğer istisnai durumlar',
  ], after: ['Lütfen hemen info@giggal.ai adresinden destek ekibimize ulaşın. Durumunuzu ayrıntılı şekilde inceleriz ve kendi takdirimize bağlı olarak, her durumu ayrı değerlendirerek iade yapabilir veya kredi düzeltmesi uygulayabiliriz.']},
  { heading: '6. Hizmet kalitesi sorunları', paragraphs: ['E-posta doğrulamayı engelleyen teknik sorunlar veya hizmet kesintileri yaşarsanız:'], list: [
    'Sistem hatalarımız nedeniyle başarısız olan doğrulamalar için kredi düşülmez',
    'Doğrulama sorunlarını hemen destek ekibimize bildirin',
    'Hizmet kesintileri için hesabınıza telafi kredisi ekleyebiliriz',
    'Uzun süreli kesintiler, kendi takdirimize bağlı olarak kısmi iade kapsamına girebilir',
  ]},
  { heading: '7. Hesabın feshi ve ihlaller', paragraphs: ['Hesabınız Kullanım Koşullarımızın veya Kabul Edilebilir Kullanım Politikamızın ihlali nedeniyle feshedilirse:'], list: [
    'Kullanılmamış krediler için iade yapılmaz',
    'Hesabınıza ve kalan kredilerinize erişiminiz kalıcı olarak kaldırılır',
    'Yinelenen abonelikler derhal iptal edilir',
  ]},
  { heading: '8. İade talebi veya sorun bildirimi nasıl yapılır', paragraphs: [
    'İade talep etmek veya olağan dışı etkinliği bildirmek için lütfen destek ekibimize ulaşın:',
    'E-posta: info@giggal.ai',
    'Konu: Refund Request / Issue Report',
    'Lütfen talebinize aşağıdaki bilgileri ekleyin:',
  ], list: [
    'Hesabınızın e-posta adresi',
    'İşlem numarası veya sipariş numarası',
    'Sorunun veya olağan dışı etkinliğin ayrıntılı açıklaması',
    'Olayın tarihi ve saati (varsa)',
    'Talebinizi destekleyen ekran görüntüleri veya kanıtlar (varsa)',
    'Etkilenen kredi sayısı',
  ]},
  { heading: '9. İade işlem süresi', paragraphs: ['İade talebiniz onaylanırsa:'], list: [
    'Durumunuzu 2 ila 3 iş günü içinde inceleriz',
    'Kararla ilgili yanıtı e-posta ile alırsınız',
    'Onaylanan iadeler 5 ila 10 iş günü içinde işleme alınır',
    'İadeler, ödeme işlemcimiz aracılığıyla ödemede kullandığınız yönteme yapılır',
    'Ödeme sağlayıcınıza bağlı olarak iadenin hesabınızda görünmesi 5 ila 7 iş günü daha sürebilir',
  ]},
  { heading: '10. Ters ibrazlar (chargeback)', paragraphs: ['Sorunu çözmek için önce bizimle iletişime geçmeden bankanız veya ödeme sağlayıcınız nezdinde ters ibraz ya da ödeme itirazı başlatırsanız:'], list: [
    'Hesabınızı kalıcı olarak kapatma hakkımızı saklı tutarız',
    'Hizmetlerimizi gelecekte kullanmanız yasaklanır',
    'Kalan tüm kredileriniz geçersiz olur',
    'Ödemenin geçerliliğini savunmak için ödeme işlemcisine kanıt sunarız',
  ], after: ['Önce destek ekibimizle iletişime geçmenizi önemle tavsiye ederiz. Sorunları adil ve hızlı şekilde çözmeye kararlıyız.']},
  { heading: '11. Kredi devri ve hesap paylaşımı', paragraphs: ['Krediler hesaplar arasında devredilemez. Aşağıdakiler için iade yapılmaz:'], list: [
    'Yanlış hesapta satın alınan krediler',
    'Kredilerin başka bir hesaba devredilmesi talepleri',
    'Hesap paylaşımı ihlalleri',
  ]},
  { heading: '12. Bu politikadaki değişiklikler', paragraphs: ['Bu İade Politikasını istediğimiz zaman değiştirme hakkımızı saklı tutarız. Değişiklikler web sitemizde yayımlandığı anda yürürlüğe girer. Değişikliklerden sonra hizmetlerimizi kullanmaya devam etmeniz, yeni politikayı kabul ettiğiniz anlamına gelir.']},
  { heading: '13. İletişim bilgileri', paragraphs: [
    'Bu İade Politikası hakkında sorularınız varsa veya yardıma ihtiyacınız olursa lütfen bizimle iletişime geçin:',
    'E-posta: info@giggal.ai',
    'Web sitesi: https://giggal.ai',
    'Destek ekibimiz sorularınızı ele almaya ve adil çözümler bulmaya kararlıdır. Tüm sorulara genellikle 24 ila 48 saat içinde yanıt veririz.',
    'Bu İade Politikası, Kullanım Koşullarımızın bir parçasıdır. Giggal.ai hizmetlerini kullanarak bu politikayı okuduğunuzu ve anladığınızı kabul edersiniz.',
  ]},
]

export default function IadePolitikasiPage() {
  return (
    <LegalPageL10n
      locale="tr"
      path="/tr/iade-politikasi"
      title="Giggal.ai"
      accent="iade politikası"
      updated="22 Ekim 2026"
      englishHref="/refund-policy"
      sections={sections}
    />
  )
}
