import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Translated clause by clause from the current English /privacy-policy
// (Last Updated: October 1, 2026). The English version is binding; the
// notice at the top of the page says so and links to it.

export const metadata: Metadata = {
  title: 'E-posta doğrulama hizmeti gizlilik politikası',
  description: 'TargetPulse Ltd\'nin işlettiği Giggal.ai verilerinizi nasıl toplar, kullanır, paylaşır ve korur? Saklama süresi ve GDPR haklarınız. İngilizce metin geçerlidir.',
  alternates: { canonical: '/tr/gizlilik-politikasi', languages: hreflangAlternates('privacy') },
  openGraph: { siteName: 'Giggal.ai', locale: 'tr_TR', title: 'Gizlilik politikası', url: 'https://giggal.ai/tr/gizlilik-politikasi', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Giriş', paragraphs: [
    'Bu hizmet, İngiltere ve Galler\'de 17079825 şirket numarasıyla kayıtlı, kayıtlı ofisi Office 17366, 182-184 High Street North, East Ham, London E6 2JA adresinde bulunan TargetPulse Ltd ("biz") tarafından işletilmektedir. TargetPulse Ltd, Giggal.ai aracılığıyla işlenen kişisel veriler için veri sorumlusudur. İletişim: info@giggal.ai. Kötüye kullanım bildirimleri: abuse@giggal.ai.',
    'Giggal.ai ("biz") gizliliğinizi korumayı taahhüt eder. Bu Gizlilik Politikası, e-posta doğrulama hizmetlerimizi ve web sitemizi kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı, açıkladığımızı ve koruduğumuzu anlatır.',
  ]},
  { heading: '2. Topladığımız bilgiler' },
  { heading: '2.1 Kişisel bilgiler', level: 3, paragraphs: ['Aşağıdaki durumlarda bize kendi isteğinizle verdiğiniz kişisel bilgileri toplayabiliriz:'], list: [
    'Bir hesap oluşturduğunuzda',
    'Doğrulama kredisi veya abonelik satın aldığınızda',
    'Müşteri destek ekibimizle iletişime geçtiğinizde',
    'Doğrulama için e-posta listeleri gönderdiğinizde',
    'Web sitemizdeki iletişim veya destek formlarını kullandığınızda',
  ], after: ['Bu bilgiler şunları içerebilir: ad, e-posta adresi, hesap tanımlayıcıları, isteğe bağlı şirket bilgileri ve işlem meta verileri. Ödeme kartı bilgileri ödeme işlemcimiz tarafından işlenir ve bizim tarafımızdan saklanmaz.']},
  { heading: '2.2 Kimlik doğrulama ve teknik veriler', level: 3, paragraphs: ['Hesap oluşturma ve giriş için Clerk\'ü kullanırız (Google ile giriş ve e-posta/şifre ile kayıt dahil). Bu kimlik doğrulama süreci sırasında şunları toplar ve işleriz:'], list: [
    'Hesap tanımlayıcıları (kullanıcı kimliği, ad ve e-posta adresi gibi)',
    'Kimlik doğrulama sağlayıcısı ve giriş yöntemi (Google veya e-posta/şifre)',
    'Giriş etkinliği meta verileri (giriş zaman damgaları gibi)',
    'Hesapları korumak ve kötüye kullanımı önlemek için kullanılan güvenlikle ilgili teknik veriler (IP adresi ve kullanıcı aracısı gibi)',
    'Güvenli şekilde oturum açık kalmanız için gereken zorunlu oturum çerezleri veya belirteçleri',
  ]},
  { heading: '2.3 E-posta doğrulama verileri', level: 3, paragraphs: ['E-posta doğrulama hizmetlerimizi kullandığınızda şunları toplar ve işleriz:'], list: [
    'Doğrulama için gönderilen e-posta adresleri',
    'Doğrulama sonuçları ve durumları (geçerli, geçersiz, catch-all, geçici vb.)',
    'İşlenmek üzere yüklenen toplu e-posta listeleri',
    'API kullanım verileri ve doğrulama geçmişi',
  ]},
  { heading: '3. Bilgilerinizi nasıl kullanırız', paragraphs: ['Toplanan bilgileri aşağıdaki amaçlarla kullanırız:'], list: [
    'Hizmetlerimizi sunmak ve sürdürmek',
    'İşlemlerinizi gerçekleştirmek ve aboneliklerinizi yönetmek',
    'Size hizmetle ilgili bildirimler göndermek',
    'Müşteri desteği sağlamak',
    'Hizmetlerimizi geliştirmek ve iyileştirmek',
    'Dolandırıcılığı ve kötüye kullanımı tespit etmek ve önlemek',
    'Yasal yükümlülüklere uymak',
    'Kullanım düzenlerini ve eğilimlerini analiz etmek',
  ]},
  { heading: '4. İşlemenin hukuki dayanağı (GDPR)', paragraphs: ['Avrupa Ekonomik Alanı\'ndaysanız (AEA), bilgilerinizi toplamamızın ve kullanmamızın hukuki dayanağı verilere ve bağlama göre değişir:'], list: [
    'Sözleşmenin ifası: işleme, hizmetlerimizi sunmak için gereklidir',
    'Meşru menfaatler: işleme, meşru ticari menfaatlerimiz doğrultusundadır',
    'Rıza: belirli amaçlar için açık rızanızı vermişsinizdir',
    'Yasal yükümlülük: işleme, kanuna uymak için gereklidir',
  ]},
  { heading: '5. Verilerin paylaşılması ve açıklanması' },
  { heading: '5.1 Hizmet sağlayıcılar', level: 3, paragraphs: ['Bilgilerinizi, bizim adımıza hizmet veren üçüncü taraf hizmet sağlayıcılarla paylaşırız:'], list: [
    'Ödeme işlemcileri (yetkili ödeme altyapımız)',
    'Kimlik doğrulama sağlayıcıları (Clerk gibi)',
    'Bulut barındırma sağlayıcıları',
    'Güvenlik ve izleme sağlayıcıları',
    'Müşteri destek araçları',
  ]},
  { heading: '5.2 Yasal gereklilikler', level: 3, paragraphs: ['Kanunen zorunlu olduğunda veya kamu makamlarının geçerli taleplerine (ör. mahkeme kararları, celpnameler) yanıt olarak bilgilerinizi açıklayabiliriz.']},
  { heading: '5.3 İşletme devirleri', level: 3, paragraphs: ['Bir birleşme, satın alma veya varlık satışına dahil olursak bilgileriniz bu işlemin bir parçası olarak devredilebilir.']},
  { heading: '6. Veri güvenliği', paragraphs: ['Bilgilerinizi korumak için uygun teknik ve idari güvenlik önlemleri uygularız. Bu önlemler şunları içerir:'], list: [
    'Aktarım sırasında ve depolanırken verilerin şifrelenmesi',
    'Düzenli güvenlik değerlendirmeleri',
    'Erişim kontrolleri ve kimlik doğrulama',
    'Güvenli veri merkezleri',
    'Çalışanlara veri koruma eğitimi',
  ], after: ['Ancak internet üzerinden hiçbir aktarım yöntemi %100 güvenli değildir ve mutlak güvenliği garanti edemeyiz.']},
  { heading: '7. Verilerin saklanması', paragraphs: ['Kişisel bilgilerinizi, kanunen daha uzun bir saklama süresi gerekmedikçe veya buna izin verilmedikçe, yalnızca bu Gizlilik Politikasında belirtilen amaçları yerine getirmek için gerekli olduğu süre boyunca saklarız. Bilgilerinize artık ihtiyacımız olmadığında bunları güvenli şekilde siler veya anonim hâle getiririz.']},
  { heading: '8. Haklarınız', paragraphs: ['Bulunduğunuz yere bağlı olarak aşağıdaki haklara sahip olabilirsiniz:'], list: [
    'Erişim: kişisel bilgilerinize erişim talep etme',
    'Düzeltme: yanlış bilgilerin düzeltilmesini talep etme',
    'Silme: bilgilerinizin silinmesini talep etme',
    'Taşınabilirlik: verilerinizin taşınabilir bir formatta bir kopyasını talep etme',
    'Kısıtlama: işlemenin kısıtlanmasını talep etme',
    'İtiraz: bilgilerinizin işlenmesine itiraz etme',
    'Rızanın geri alınması: işleme rızaya dayanıyorsa rızanızı geri alma',
  ], after: ['Bu hakları kullanmak için lütfen info@giggal.ai adresinden bizimle iletişime geçin.']},
  { heading: '9. Çerezler ve izleme teknolojileri', paragraphs: ['Web sitemizdeki etkinliği izlemek ve belirli bilgileri saklamak için çerezler ve benzeri izleme teknolojileri kullanırız. Tarayıcınızı tüm çerezleri reddedecek veya bir çerez gönderildiğinde bunu gösterecek şekilde ayarlayabilirsiniz. Ancak çerezleri kabul etmezseniz hizmetimizin bazı bölümlerini kullanamayabilirsiniz.']},
  { heading: '10. Üçüncü taraf bağlantıları', paragraphs: ['Web sitemiz üçüncü taraf web sitelerine bağlantılar içerebilir. Bu harici sitelerin gizlilik uygulamalarından sorumlu değiliz. Ziyaret ettiğiniz üçüncü taraf sitelerin gizlilik politikalarını okumanızı öneririz.']},
  { heading: '11. Çocukların gizliliği', paragraphs: ['Hizmetlerimiz 18 yaşından küçük kişilere yönelik değildir. Çocuklardan bilerek kişisel bilgi toplamayız. Bir çocuğun bize kişisel bilgi verdiğini fark ederseniz lütfen bizimle iletişime geçin. Bu bilgileri silmek için gerekli adımları atarız.']},
  { heading: '12. Uluslararası veri aktarımları', paragraphs: ['Bilgileriniz, veri koruma kanunlarının farklı olabileceği eyaletiniz, ilniz, ülkeniz veya başka bir yargı bölgeniz dışında bulunan bilgisayarlara aktarılabilir ve orada saklanabilir. Bu tür aktarımlar için uygun güvencelerin bulunmasını sağlarız.']},
  { heading: '13. Kaliforniya gizlilik hakları (CCPA)', paragraphs: ['Kaliforniya\'da ikamet ediyorsanız kişisel bilgilerinizle ilgili belirli haklarınız vardır:'], list: [
    'Hangi kişisel bilgilerin toplandığını öğrenme hakkı',
    'Kişisel bilgilerin satılıp satılmadığını veya açıklanıp açıklanmadığını öğrenme hakkı',
    'Kişisel bilgilerin satışını reddetme hakkı',
    'Kişisel bilgilerin silinmesini isteme hakkı',
    'CCPA haklarını kullandığınız için ayrımcılığa uğramama hakkı',
  ]},
  { heading: '14. Bu Gizlilik Politikasındaki değişiklikler', paragraphs: ['Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Değişiklikleri, yeni Gizlilik Politikasını bu sayfada yayımlayarak ve "Son güncelleme" tarihini güncelleyerek size bildiririz. Değişiklikleri görmek için bu Gizlilik Politikasını düzenli aralıklarla incelemenizi öneririz.']},
  { heading: '15. Bize ulaşın', paragraphs: ['Bu Gizlilik Politikası hakkında sorularınız varsa lütfen bizimle iletişime geçin:', 'E-posta: info@giggal.ai', 'Web sitesi: https://giggal.ai', 'Giggal.ai hizmetlerini kullanarak bu Gizlilik Politikasını okuduğunuzu ve anladığınızı kabul eder, koşullarını onaylarsınız.']},
]

export default function GizlilikPolitikasiPage() {
  return (
    <LegalPageL10n
      locale="tr"
      path="/tr/gizlilik-politikasi"
      title="Giggal.ai"
      accent="gizlilik politikası"
      updated="1 Ekim 2026"
      englishHref="/privacy-policy"
      sections={sections}
    />
  )
}
