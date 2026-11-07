import type { Metadata } from 'next'
import LegalPageL10n, { type LegalSection } from '@/components/l10n/LegalPage'
import { hreflangAlternates } from '@/lib/i18n/clusters'

// Translated clause by clause from the current English /terms-of-service
// (Last Updated: October 22, 2026). The English version is binding; the
// notice at the top of the page says so and links to it.

export const metadata: Metadata = {
  title: 'E-posta doğrulama hizmeti kullanım koşulları',
  description: 'Giggal.ai e-posta doğrulama hizmeti kullanım koşulları: hesap, kredi satın alma, abonelikler, kredi kullanımı ve hizmet kuralları. İngilizce metin geçerlidir.',
  alternates: { canonical: '/tr/kullanim-kosullari', languages: hreflangAlternates('terms') },
  openGraph: { siteName: 'Giggal.ai', locale: 'tr_TR', title: 'Kullanım koşulları', url: 'https://giggal.ai/tr/kullanim-kosullari', type: 'website', images: [{ url: '/og-card.png', width: 1200, height: 630, alt: 'Giggal.ai' }] },
}

const sections: LegalSection[] = [
  { heading: '1. Koşulların kabulü', paragraphs: [
    'Bu hizmet, İngiltere ve Galler\'de 17079825 şirket numarasıyla kayıtlı, kayıtlı ofisi Office 17366, 182-184 High Street North, East Ham, London E6 2JA adresinde bulunan TargetPulse Ltd ("biz") tarafından işletilmektedir. TargetPulse Ltd, Giggal.ai aracılığıyla işlenen kişisel veriler için veri sorumlusudur. İletişim: info@giggal.ai. Kötüye kullanım bildirimleri: abuse@giggal.ai.',
    'Giggal.ai hizmetlerine erişerek ve bu hizmetleri kullanarak bu sözleşmenin koşullarını ve hükümlerini kabul eder, bunlarla bağlı olmayı onaylarsınız. Yukarıdakilere uymayı kabul etmiyorsanız lütfen bu hizmeti kullanmayın.',
    'Bu Kullanım Koşulları, Giggal.ai ticari adıyla faaliyet gösteren TargetPulse Ltd tarafından işletilen Giggal.ai Email Verifier hizmetini kullanımınızı düzenler.',
  ]},
  { heading: '2. Hizmetin tanımı', paragraphs: [
    'Giggal.ai Email Verifier, ekiplerin e-posta listelerini temizlemesine ve doğrulamasına yardımcı olan bulut tabanlı bir araçtır. Kullanıcılar CSV dosyaları veya tek tek e-posta adresleri yükler. Biz de geçersiz adresleri azaltmak ve liste kalitesini artırmak için teslim edilebilirliği, alan adı kayıtlarını ve her posta kutusunun var olup olmadığını kontrol ederiz. Ürün, kullandıkça öde esasına dayanan bir kredi sistemiyle satılır. Böylece müşteriler yalnızca gerçekten doğruladıkları e-posta adresleri için ödeme yapar.',
    'Hizmet, bu Kullanım Koşullarına ve geçerli olabilecek ek hüküm ve koşullara tabi olarak size sunulur.',
  ]},
  { heading: '2.1 E-posta doğrulama hizmeti', level: 3, paragraphs: ['Temel hizmetimiz e-posta doğrulama ve geçerlilik kontrolüdür. Bu hizmet şunları içerir:'], list: [
    'Ağ geçidi tespiti: güvenli e-posta ağ geçitlerini (SEG) ve savunma amaçlı çevre filtrelerini belirleme',
    'Alan adı doğrulama: e-posta alan adının var olup olmadığını ve geçerli MX kayıtları olup olmadığını kontrol etme',
    'Posta kutusu doğrulama: belirli bir e-posta adresinin var olup olmadığını ve e-posta alıp alamadığını doğrulama',
    'Geçici e-posta tespiti: geçici veya tek kullanımlık e-posta adreslerini belirleme',
    'Rol tabanlı adres tespiti: genel amaçlı e-posta adreslerini (ör. info@, support@) tespit etme',
    'Catch-all tespiti: tüm e-posta adreslerini kabul eden alan adlarını belirleme',
    'Gerçek zamanlı doğrulama: alıcının posta kutusunun var olup olmadığını kontrol etme',
    'Toplu doğrulama: binlerce e-posta adresini aynı anda işleme',
  ]},
  { heading: '2.2 Kredi tabanlı sistem', level: 3, paragraphs: ['Hizmetimiz aşağıdaki kredi tabanlı modelle çalışır:'], list: [
    '1 kredi = 1 e-posta doğrulaması: her e-posta adresi doğrulaması hesap bakiyenizden tam olarak 1 kredi kullanır',
    'Kullandıkça öde: istediğiniz zaman 3.000 ila 1.000.000 kredilik paketler hâlinde kredi satın alabilirsiniz',
    'Yinelenen abonelikler: normal fiyata göre %10 indirimle aylık yinelenen kredi paketlerine abone olabilirsiniz',
    'Süre sınırı yok: kredilerin süresi hiç dolmaz ve krediler kullanılana kadar hesabınızda kalır',
    'Ücretsiz deneme: yeni hesaplar, hizmeti denemek için 1.000 ücretsiz kredi alır',
  ]},
  { heading: '2.3 Hizmet özellikleri', level: 3, paragraphs: ['E-posta doğrulama hizmetimiz şunları içerir:'], list: [
    'Anında doğrulama için gerçek zamanlı API erişimi',
    'Toplu yükleme ve işleme olanakları',
    'Ayrıntılı doğrulama raporları ve analizler',
    'Sonuçları CSV, Excel ve JSON formatlarında dışa aktarma',
    'Yinelenen e-posta adreslerini tespit etme ve kaldırma',
    'Liste temizleme ve segmentasyon araçları',
    'API ve uyumlu üçüncü taraf sistemler üzerinden entegrasyon desteği',
  ]},
  { heading: '3. Kullanıcı hesabı', paragraphs: ['Hizmetin bazı özelliklerini kullanmak için bir hesap oluşturmanız gerekir. Şunları kabul edersiniz:'], list: [
    'Kayıt sırasında doğru, güncel ve eksiksiz bilgi vermek',
    'Hesap bilgilerinizi güncel tutmak ve gerektiğinde hemen güncellemek',
    'Şifrenizin güvenliğini sağlamak ve yetkisiz erişimin tüm risklerini üstlenmek',
    'Hesabınızın yetkisiz kullanıldığını fark ettiğinizde bunu bize hemen bildirmek',
    'Hesabınız altında gerçekleşen tüm işlemlerden sorumlu olmak',
  ]},
  { heading: '4. Ödeme koşulları', paragraphs: ['Ödemeler, yetkili ödeme altyapımız üzerinden güvenli şekilde işlenir. Kredi veya hizmet satın alarak şunları kabul edersiniz:'], list: [
    'Güncel, eksiksiz ve doğru satın alma ve hesap bilgileri vermek',
    'Hesap ve ödeme bilgilerinizi gerektiğinde hemen güncellemek',
    'Satın alımlarınız için o sırada geçerli olan fiyatlar üzerinden tüm ücretleri ödemek',
    'Satın alımlarınızla ilgili geçerli vergileri, KDV\'yi veya diğer ücretleri ödemek',
  ]},
  { heading: '4.1 Kredi satın alma seçenekleri', level: 3, paragraphs: ['Krediyi aşağıdaki yöntemlerle satın alabilirsiniz:'], list: [
    'Tek seferlik satın alma (kullandıkça öde): ihtiyaç duyduğunuzda kredi paketleri satın alırsınız, krediler hesabınıza hemen eklenir',
    'Aylık yinelenen abonelik: %10 indirimle her ay otomatik olarak kredi alırsınız',
  ]},
  { heading: '4.2 Fiyatlar ve faturalandırma', level: 3, paragraphs: [
    'Tüm fiyatlar ABD doları (USD) cinsinden gösterilir ve geçerli ücretleri içerir. Krediler, ödemenin başarıyla onaylanmasının ardından hemen hesabınıza eklenir. Kanunun gerektirdiği durumlar veya İade Politikamızda açıkça belirtilen durumlar dışında tüm kredi satın alımları iade edilmez.',
  ]},
  { heading: '4.3 Ücretsiz deneme kredileri', level: 3, paragraphs: ['Yeni kullanıcılar hesap oluşturduklarında 1.000 ücretsiz deneme kredisi alır. Deneme kredileri:'], list: [
    'Ücretsiz olarak verilir ve ödeme bilgisi gerektirmez',
    'E-posta doğrulamada ücretli kredilerle aynı şekilde çalışır',
    'Ücretsiz verildiği için iade edilmez',
    'En fazla 1.000 e-posta adresini doğrulamak için kullanılabilir',
    'Satın almadan önce hizmet kalitemizi değerlendirmenize yardımcı olur',
  ]},
  { heading: '5. Yinelenen abonelik hizmetleri', paragraphs: ['Aylık yinelenen kredi abonelikleri her ay otomatik olarak faturalandırılır. Ücret her ay düzenli olarak peşin tahsil edilir ve ödeme başarılı olduğunda krediler hesabınıza eklenir. Temel koşullar şunlardır:'], list: [
    'Abonelikler, iptal edilmedikçe her fatura döneminin sonunda otomatik olarak yenilenir',
    'Aboneliğinizi bir sonraki fatura tarihinden önce istediğiniz zaman iptal edebilirsiniz',
    'İptaller, mevcut fatura döneminin sonunda geçerli olur',
    'Hesabınıza daha önce eklenmiş krediler iptalden sonra da kullanılabilir',
    'Yinelenen aboneler, kullandıkça öde fiyatlarına göre %10 indirim alır',
  ]},
  { heading: '6. Kredi kullanımı ve yönetimi' },
  { heading: '6.1 Kredi tüketimi', level: 3, paragraphs: ['Krediler şu şekilde kullanılır:'], list: [
    'Her başarılı e-posta doğrulaması tam olarak 1 kredi kullanır',
    'Krediler yalnızca tamamlanan doğrulamalar için düşülür',
    'Sistem hataları nedeniyle başarısız olan doğrulamalar kredi kullanmaz',
    'Aynı toplu işteki yinelenen e-posta adresleri yalnızca bir kez işlenir',
  ]},
  { heading: '6.2 Kredilerin geçerliliği ve devri', level: 3, paragraphs: ['Önemli kredi kuralları:'], list: [
    'Süre sınırı yok: kredilerin süresi hiç dolmaz ve krediler hesabınızda süresiz olarak kalır',
    'Devredilemez: krediler hesaplar arasında devredilemez',
    'İade edilmez: satın alınan krediler iade edilmez (istisnalar için İade Politikasına bakın)',
    'Hesaba özel: krediler hesabınıza bağlıdır ve paylaşılamaz',
  ]},
  { id: 'cancellation-policy', heading: '7. İptal ve iadeler', paragraphs: ['Yinelenen aboneliğinizi hesap ayarlarınızdan veya info@giggal.ai adresinden destek ekibimize ulaşarak istediğiniz zaman iptal edebilirsiniz. İptal ettiğinizde:'], list: [
    'Aboneliğiniz bir sonraki fatura dönemi için yenilenmez',
    'Hesabınızdaki tüm krediler sizde kalır',
    'Mevcut kredilerinizi kısıtlama olmadan kullanmaya devam edebilirsiniz',
    'Kullandıkça öde kredi paketlerini satın almaya devam edebilirsiniz',
  ], after: ['Olağan dışı etkinlik veya istisnai durumlar nedeniyle yapılacak iadeler İade Politikamıza göre ele alınır. Bir sorun yaşarsanız veya dolandırıcılıktan şüphelenirseniz inceleme için hemen destek ekibimize ulaşın.']},
  { heading: '8. Kabul edilebilir kullanım politikası', paragraphs: ['Hizmeti yalnızca yasal amaçlarla ve geçerli tüm kanun ve düzenlemelere uygun olarak kullanmayı kabul edersiniz. Hizmeti aşağıdaki amaçlarla kullanmamayı kabul edersiniz:'], list: [
    'Gerekli izin veya yetki olmadan elde edilmiş e-posta adreslerini doğrulamak',
    'Doğrulamadan sonra spam veya istenmeyen e-posta mesajları göndermek',
    'CAN-SPAM Act, GDPR ve CASL dahil olmak üzere geçerli herhangi bir kanunu veya düzenlemeyi ihlal etmek',
    'Başkalarının haklarını çiğnemek veya ihlal etmek',
    'Kötü amaçlı yazılım veya başka zararlı kod dağıtmak',
    'Herhangi bir kişinin veya kuruluşun kimliğine bürünmek',
    'Herhangi bir dolandırıcılık faaliyetinde bulunmak veya hizmetimizi kötüye kullanmak',
    'Doğrulama hizmetlerimizi izinsiz olarak yeniden satmak veya dağıtmak',
    'Doğrulama sistemlerimize tersine mühendislik uygulamaya veya bu sistemleri tehlikeye atmaya çalışmak',
    'Hesap giriş bilgilerinizi veya kredilerinizi yetkisiz kullanıcılarla paylaşmak',
  ]},
  { heading: '9. Hizmetin doğruluğu ve sınırlamaları', paragraphs: ['E-posta doğrulamada en yüksek doğruluğu hedeflesek de aşağıdakileri kabul edersiniz:'], list: [
    'Teknik sınırlamalar nedeniyle e-posta doğrulama %100 doğruluğu garanti edemez',
    'Bazı e-posta sunucuları yanlış pozitif veya yanlış negatif yanıtlar verebilir',
    'Doğrulama sonuçları gerçek zamanlı kontrollere dayanır ve zamanla değişebilir',
    'Doğrulama sonuçlarını "olduğu gibi" sunarız ve teslim edilebilirlik konusunda hiçbir garanti vermeyiz',
    'Doğrulanmış verilerin yasal kullanımından ve bu verilerle yapılan sonraki tüm iletişimlerden siz sorumlusunuz',
  ]},
  { heading: '10. Yasal kullanım ve mesajlaşma uyumluluğu', paragraphs: ['Doğrulanmış e-posta adreslerini kişilere ulaşma (outreach), işlemsel mesajlar veya destek mesajları için kullanırsanız, aşağıdakiler dahil ancak bunlarla sınırlı olmamak üzere geçerli tüm kanun ve düzenlemelere uyulmasını sağlamaktan yalnızca siz sorumlusunuz:'], list: [
    'CAN-SPAM Act (Amerika Birleşik Devletleri)',
    'GDPR (Avrupa Birliği)',
    'CASL (Kanada)',
    'Geçerli diğer spam karşıtı ve veri koruma kanunları',
  ], after: ['Gerekli tüm izinleri almanız ve geçerli olduğu durumlarda kanunen zorunlu abonelikten çıkma veya tercih seçeneklerini eklemeniz gerekir. Giggal.ai, doğrulanmış e-posta adreslerini nasıl kullandığınızdan sorumlu değildir.']},
  { heading: '11. Fikri mülkiyet', paragraphs: ['Hizmet ile Hizmetin orijinal içeriği, özellikleri ve işlevleri Giggal.ai\'a aittir ve uluslararası telif hakkı, ticari marka, patent, ticari sır ve diğer fikri mülkiyet kanunlarıyla korunur. Önceden yazılı izin almadan hizmetlerimizin herhangi bir bölümünü kopyalayamaz, değiştiremez, dağıtamaz, satamaz veya kiralayamazsınız.']},
  { heading: '12. Veriler ve gizlilik', paragraphs: [
    'Hizmeti kullanımınız ayrıca Gizlilik Politikamıza tabidir. Verilerinizi Gizlilik Politikasında açıklandığı şekilde toplar, saklar ve işleriz. Müşteri verileriniz ve e-posta listeleriniz üzerindeki tüm haklar sizde kalır. Bunları yalnızca Hizmeti sunmak için gerekli olduğu ölçüde veya kanunun gerektirdiği durumlarda kullanırız.',
    'Doğrulama için gönderilen e-posta adresleri güvenli şekilde işlenir ve kalıcı olarak saklanmaz. E-posta listelerinizi satmayız, paylaşmayız ve doğrulama hizmeti sunmak dışında hiçbir amaçla kullanmayız.',
  ]},
  { heading: '13. Hizmette değişiklikler ve hizmetin erişilebilirliği', paragraphs: [
    'Hizmeti veya Hizmetin herhangi bir bölümünü, bildirimde bulunarak veya bulunmadan, geçici veya kalıcı olarak değiştirme veya sonlandırma hakkımızı saklı tutarız. Hizmetin değiştirilmesi, askıya alınması veya sonlandırılması nedeniyle size veya herhangi bir üçüncü tarafa karşı sorumlu olmayız.',
    'Hizmetin yüksek oranda erişilebilir olmasını sağlamaya çalışırız, ancak kesintisiz erişimi garanti etmeyiz. Planlı bakım çalışmaları mümkün olduğunda önceden duyurulur.',
  ]},
  { heading: '14. Sorumluluğun sınırlandırılması', paragraphs: ['KANUNUN İZİN VERDİĞİ AZAMİ ÖLÇÜDE, GIGGAL.AI, YÖNETİCİLERİ, ÇALIŞANLARI, ORTAKLARI, TEMSİLCİLERİ, TEDARİKÇİLERİ VEYA BAĞLI KURULUŞLARI, KÂR, VERİ, KULLANIM VEYA İTİBAR KAYBI İLE DİĞER MADDİ OLMAYAN KAYIPLAR DAHİL ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE, AŞAĞIDAKİ DURUMLARDAN KAYNAKLANAN HİÇBİR DOLAYLI, ARIZİ, ÖZEL, NETİCE NİTELİĞİNDEKİ VEYA CEZAİ ZARARDAN HİÇBİR DURUMDA SORUMLU TUTULAMAZ:'], list: [
    'Hizmete erişiminiz veya Hizmeti kullanımınız ya da Hizmete erişememeniz veya Hizmeti kullanamamanız',
    'Hizmetteki herhangi bir üçüncü tarafın davranışı veya içeriği',
    'Hizmetten elde edilen herhangi bir içerik',
    'İletimlerinize veya içeriğinize yetkisiz erişim ya da bunların yetkisiz kullanımı veya değiştirilmesi',
    'Hatalı e-posta doğrulama sonuçları',
    'Doğrulamadan sonra başarısız olan e-posta teslimleri veya bounce\'lar',
    'Kullanıcı hatası veya kötüye kullanım nedeniyle harcanan krediler',
  ]},
  { heading: '15. Garantilerin reddi', paragraphs: [
    'HİZMET, AÇIK VEYA ZIMNİ HİÇBİR TÜRDE GARANTİ OLMAKSIZIN "OLDUĞU GİBİ" VE "MEVCUT OLDUĞU ŞEKİLDE" SUNULUR. GIGGAL.AI, TİCARİ ELVERİŞLİLİK, BELİRLİ BİR AMACA UYGUNLUK VE HAK İHLALİ BULUNMAMASINA İLİŞKİN ZIMNİ GARANTİLER DAHİL ANCAK BUNLARLA SINIRLI OLMAMAK ÜZERE TÜM GARANTİLERİ REDDEDER.',
    'HİZMETİN KESİNTİSİZ, ZAMANINDA, GÜVENLİ VEYA HATASIZ OLACAĞINI YA DA E-POSTA DOĞRULAMA SONUÇLARININ %100 DOĞRU OLACAĞINI GARANTİ ETMEYİZ.',
  ]},
  { heading: '16. Tazminat', paragraphs: ['Hizmeti kullanımınızdan veya bu Koşulları ihlal etmenizden doğan her türlü talep, zarar, yükümlülük, kayıp, sorumluluk, maliyet veya borç ile masraflara karşı Giggal.ai\'ı, lisans alanlarını ve lisans verenlerini savunmayı, bu zararları tazmin etmeyi ve onları zarardan korumayı kabul edersiniz.']},
  { heading: '17. Fesih', paragraphs: ['Bu Koşulları ihlal etmeniz dahil ancak bununla sınırlı olmamak üzere herhangi bir nedenle, önceden bildirimde bulunmadan ve herhangi bir sorumluluk üstlenmeden hesabınızı ve Hizmete erişiminizi derhal feshedebilir veya askıya alabiliriz. Fesih durumunda:'], list: [
    'Hizmeti kullanma hakkınız derhal sona erer',
    'Kullanılmamış krediler iade edilmeden geçersiz olur',
    'Yinelenen abonelikler iptal edilir',
    'Hesabınıza ve verilerinize erişiminiz kalıcı olarak kaldırılabilir',
  ]},
  { heading: '18. Uygulanacak hukuk', paragraphs: ['Bu Koşullar, kanunlar ihtilafı kurallarına bakılmaksızın Giggal.ai\'ın faaliyet gösterdiği yargı bölgesinin kanunlarına göre yönetilir ve yorumlanır.']},
  { heading: '19. Uyuşmazlıkların çözümü', paragraphs: ['Bu Koşullardan veya Hizmetten doğan ya da bunlarla ilgili her türlü uyuşmazlık önce iyi niyetli müzakerelerle çözülmeye çalışılır. Müzakereler sonuç vermezse uyuşmazlıklar, ilgili tahkim kurumunun kurallarına göre bağlayıcı tahkim yoluyla çözülür.']},
  { heading: '20. Koşullarda değişiklik', paragraphs: ['Bu Koşulları istediğimiz zaman, tamamen kendi takdirimize bağlı olarak değiştirme veya başka koşullarla değiştirme hakkımızı saklı tutarız. Bir değişiklik önemliyse, yeni koşullar yürürlüğe girmeden en az 30 gün önce bildirimde bulunuruz. Neyin önemli değişiklik sayılacağına tamamen kendi takdirimizle karar veririz.']},
  { heading: '21. Bölünebilirlik', paragraphs: ['Bu Koşulların herhangi bir hükmünün uygulanamaz veya geçersiz olduğuna karar verilirse, bu hüküm geçerli kanunun izin verdiği en geniş ölçüde amacına ulaşacak şekilde değiştirilir ve yorumlanır. Diğer hükümler tam olarak yürürlükte kalmaya devam eder.']},
  { heading: '22. İletişim bilgileri', paragraphs: ['Bu Kullanım Koşulları hakkında sorularınız varsa bizimle şu adresten iletişime geçin:', 'E-posta: info@giggal.ai', 'Web sitesi: https://giggal.ai', 'Giggal.ai hizmetlerini kullanarak bu Kullanım Koşullarını okuduğunuzu ve anladığınızı kabul eder, bunlarla bağlı olmayı onaylarsınız.']},
]

export default function KullanimKosullariPage() {
  return (
    <LegalPageL10n
      locale="tr"
      path="/tr/kullanim-kosullari"
      title="Giggal.ai"
      accent="kullanım koşulları"
      updated="22 Ekim 2026"
      englishHref="/terms-of-service"
      sections={sections}
    />
  )
}
