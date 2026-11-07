---
title: "Mailchimp'te Cleaned ne demek?"
seoTitle: "Mailchimp'te Cleaned ne demek ve ne yapmalı?"
description: "Mailchimp'te Cleaned, adres hard bounce ya da tekrarlanan soft bounce verdiği için gönderimin durdurulması demektir. Nedenleri, maliyeti ve yapılacaklar."
slug: mailchimp-cleaned-ne-demek
date: 2026-11-05
updated: 2026-11-05
keyword: mailchimp cleaned ne demek
image: /blog/covers/tr/mailchimp-cleaned-ne-demek.webp
imageAlt: "Mailchimp'te Cleaned ne demek? Abone etkinliği yoksa 7 soft bounce, etkinlik varsa en fazla 15 soft bounce, bounce kayıtları raporlarda 30 gün kalır"
cta: Mailchimp Cleaned olarak işaretlemeden önce geçersiz adresleri bulun
---

Mailchimp'te Cleaned, Mailchimp'in o adrese göndermeyi durdurduğu anlamına gelir. Bunun nedeni adresin hard bounce vermesi veya çok fazla soft bounce vermesidir. Mailchimp bu adresi geçersiz kabul eder. Bu ad insanların kafasını karıştırır. Çünkü "cleaned" (temizlendi) sözcüğü, Mailchimp'in sizin için bir şeyi düzenlediği veya düzelttiği izlenimini verir. Gerçekte hiçbir şey onarılmamıştır. Kişi, Cleaned etiketiyle kitlenizde (audience) kalır. Sizden hiçbir e-posta alamaz ve aylık kişi sınırınıza dahil edilmez.

## Mailchimp bir adresi neden temizler?

Hard bounce'lar, alıcı sunucunun bir e-postayı doğrudan reddettiği kalıcı teslim hatalarıdır. Mailchimp'in belirttiği yaygın nedenler, var olmayan bir posta kutusu ve teslimi kalıcı olarak engelleyen bir alıcı sunucudur. Tipik örnekler, "com" yerine "con" yazmak gibi yazım hataları ve şirketten ayrılmış kişilerin eski adresleridir. Çoğu durumda Mailchimp, hard bounce veren adresleri otomatik olarak ve hemen temizler. Bu adresler, kitlenize gönderilen gelecekteki tüm kampanyaların dışında kalır.

Soft bounce'lar farklı çalışır, çünkü geçici teslim hatalarıdır. Bir adres soft bounce verdiğinde Mailchimp adresi hemen devre dışı bırakmaz. Sonraki gönderimlerde teslimi yeniden dener. Ancak bir adres sürekli başarısız olursa Mailchimp onu hard bounce'a dönüştürür ve temizler. Mailchimp bu süreçte belirli bir sayı uygular. Daha önce abone etkinliği olmayan bir kişinin adresini 7 soft bounce'tan sonra temizler. Daha önce abone etkinliği olan kişiler için en fazla 15 soft bounce'a izin verir.

Mailchimp, bir kampanya mesajının soft bounce vermesi için birden fazla neden sayar. Alıcının posta kutusu dolu ya da yanlış yapılandırılmış olabilir veya etkin olmayabilir. Alıcının e-posta sunucusu çalışmıyor veya çevrimdışı olabilir. Ya da kampanyanız kısa bir sürede o sunucuya çok fazla e-posta göndermiş olabilir. Diğer soft bounce nedenleri arasında çok büyük mesajlar, geçici olarak var olmayan alan adları, içerik filtreleri ve aktarılamayan mesajlar vardır. Bir e-posta, hedef sunucunun virüs koruması, spam koruması veya gönderici gereksinimlerini karşılamazsa da soft bounce verebilir. Mesaj [DMARC kontrolünden geçemezse](/blog/spf-dkim-dmarc-explained) de aynı şey olur.

Mailchimp, bir e-postanın geri dönüp dönmeyeceğini göndermeden önce tahmin edemediğini söyler. Ayrıca her e-posta sağlayıcısının e-postaları kendi kurallarına göre geri çevirdiğini belirtir. Bir kampanya gönderimi tamamlandıktan sonra bounce bildirimleri, gönderimden itibaren 30 gün boyunca Mailchimp e-posta raporlarınızda kalır. E-posta sunucularının teslim sorunlarını nasıl sınıflandırdığını [hard bounce ve soft bounce farkı](/blog/hard-bounce-vs-soft-bounce) rehberimizde okuyabilirsiniz. Mailchimp'in [Soft vs. Hard Bounces](https://mailchimp.com/help/soft-vs-hard-bounces/) rehberine de bakabilirsiniz.

## Cleaned ile unsubscribed, archived ve diğer kişi türleri arasındaki fark

Mailchimp kişileri ayrı kategorilere ayırır. Bu kategoriler, kişilerin mesaj alıp alamayacağını ve onlar için ödeme yapıp yapmayacağınızı belirler:

| Durum | Anlamı | Ne alabilir? | Kişi sınırına dahil mi? |
| --- | --- | --- | --- |
| Subscribed (abone) | E-posta kampanyalarınızı almayı kabul etmiş | Pazarlama e-postaları, pazarlama SMS'leri, reklamlar, işlemsel e-postalar | Evet |
| Unsubscribed (abonelikten çıkmış) | Pazarlama kampanyalarınızı almayı bırakmış | Reklamlar ve işlemsel e-postalar | Evet |
| Non-subscribed (abone değil) | Sizinle etkileşime girmiş (mağaza, entegrasyon veya içe aktarma yoluyla), ancak hiç onay vermemiş | Reklamlar ve işlemsel e-postalar | Evet |
| Cleaned (temizlenmiş) | Adres hard bounce veya tekrarlanan soft bounce vermiş, teslim edilemez | Hiçbir şey | Hayır |
| Pending (beklemede) | Kayıt formunu göndermiş, ancak double opt-in onayını vermemiş | Hiçbir şey | Hayır |
| Archived (arşivlenmiş) | Profil verileri korunarak etkin kitleden çıkarılmış | Hiçbir şey | Hayır |
| Deleted (silinmiş) | Kalıcı olarak kaldırılmış, geri alınamaz | Hiçbir şey | Hayır |

Cleaned ve Unsubscribed durumlarının ikisi de bir e-posta adresine pazarlama kampanyası göndermenizi engeller. Ancak aradaki fark aylık faturanız için önemlidir. Unsubscribed, abonenin kendi tercihidir ve Mailchimp bu kişiyi yine de aylık kişi sınırınıza dahil eder. Cleaned ise teslim başarısız olduktan sonra Mailchimp'in verdiği karardır. Adres hiçbir şey alamaz ve Mailchimp bunun için ücret almaz. Onaylanmamış olarak kalan Pending kişiler 60 gün sonra kitlenizden otomatik olarak kaldırılır. 15 Mayıs 2019'dan önce oluşturulmuş eski ücretli planlardaki hesaplarda kişi sınırı kuralları farklı olabilir.

## Cleaned kişilerle ne yapmalısınız?

Mailchimp, Cleaned kişileri silmek yerine arşivlemeyi önerir. Arşivleme, kişinin geçmişini korur ve hatalı adresi kitlenizde kayıtlı tutar. Mailchimp'e göre bu, o adrese yeniden gönderim yapıp bounce almanızı önlemeye yardımcı olur. Mailchimp, kişileri yalnızca GDPR (AB Genel Veri Koruma Tüzüğü) kapsamındaki talepler için silmenizi önerir. Çünkü silme işlemi kaydı kalıcı olarak yok eder ve geri alınamaz. Cleaned kişileri arşivlemek aylık faturanızı düşürmez. Çünkü Cleaned adresler zaten plan sınırınıza dahil edilmez. Mailchimp bu politikayı [About Cleaned Contacts](https://mailchimp.com/help/about-cleaned-contacts/) belgesinde açıklar.

Mailchimp kitlenizdeki tüm Cleaned adresleri incelemek veya dışa aktarmak için segmentleri kullanabilirsiniz:

1. Mailchimp panelinizde Audience sekmesini açın ve Segments seçeneğine tıklayın.
2. Create segment seçeneğine tıklayın.
3. Segment koşulunu "Email subscription status is one of Cleaned" olacak şekilde ayarlayın.
4. Use segment seçeneğine tıklayın, segment için bir ad girin ve segmenti kaydedin.
5. Kaydedilen segmenti açın, Export segment seçeneğine tıklayın ve dışa aktarma isteğini onaylayın.
6. Bildirim çubuğundaki View exports seçeneğine tıklayın. Ardından dosyayı kaydetmek için Download CSV seçeneğine tıklayın.

Bir kişi, user@gmai.com veya name@conpany.com gibi basit bir yazım hatası yüzünden temizlendiyse mevcut kişi kaydını düzenleyemezsiniz. Hatayı düzeltmek için düzeltilmiş e-posta adresini tamamen yeni bir kişi olarak ekleyin. Mailchimp Cleaned adresler için ücret almadığından, yazım hatalı orijinal kaydı saklamanın size bir maliyeti yoktur.

Geçerli e-posta adresleri de zaman zaman hard bounce verir. Bir işlem yapmadan önce kampanya raporunuzdaki bounce nedenini inceleyin. Katı bir kurumsal güvenlik duvarı veya spam filtresi, mesajı Denied, Unacceptable Content veya Blocked gibi SMTP yanıtlarıyla reddetmiş olabilir. Kurumsal yapılarda bir şirket filtresi Mailchimp'in gönderim IP adreslerini tamamen engelliyor olabilir. Alıcının BT ekibi, Mailchimp'in IP adreslerini izin listesine ekleyerek bunu düzeltebilir. Başka durumlarda büyük bir e-posta sağlayıcısı sizi geçici olarak engelliyor olabilir. Mailchimp'e göre bu engel, spam şikâyetleri azaldıktan sonra bir iki gün içinde kalkabilir. Belirli sunucu hata yanıtlarını [bounce mesajlarını okuyarak](/blog/550-5-7-1-error) teşhis edebilirsiniz. Adres kesinlikle geçerliyse ve teslim engeli kaldırıldıysa, kişinin kitlenize yeniden katılması için kayıt formunuz üzerinden tekrar kaydolması gerekir. Mailchimp, Cleaned bir kişiyi kendiniz elle yeniden Subscribed durumuna almanıza izin vermez.

## Çok sayıda kişi aynı anda temizlendiğinde

Yakın tarihli bir kampanya çok sayıda kişinin aynı anda temizlenmesine neden olduysa hesabınız otomatik olarak askıya alınabilir. Mailchimp, tek bir gönderim bounce, abonelikten çıkma veya kötüye kullanım şikâyeti için kabul edilmiş sektör eşiklerini aştığında hesapları otomatik olarak askıya alır. Mailchimp'e göre internet servis sağlayıcıları ve spam karşıtı kuruluşlar, Mailchimp'in bu sınırları uygulamasını zorunlu tutar. Mailchimp hesabınızı askıya alırsa, uyum ekipleri inceleme yaparken gönderim devre dışı kalır. Ancak oturum açma, API çağrıları ve verilere erişim normal şekilde çalışmaya devam eder.

Bunun olağan nedeni eski listelerdir. Çünkü insanlar iş değiştirir, posta kutularını terk eder ve hesaplarını kapatır. Kitlenize bir süredir e-posta göndermediyseniz Mailchimp, toplu bir kampanya planlamadan önce kişilerinizden yeniden onay almanızı önerir. Bu, abonelerden mesajlarınızı hâlâ almak isteyip istemediklerini doğrulamalarını istemek demektir.

Mailchimp ayrıca gönderim alan adınızın kimliğini doğrulamanızı ve [DMARC'ı yapılandırmanızı](/blog/what-is-a-dmarc-record) önemle önerir. From adresi olarak asla Gmail veya Yahoo'dan ücretsiz bir e-posta adresi kullanmamanızı da önerir.

## Kişilerin temizlenmesini nasıl önlersiniz?

Adreslerin temizlenmesini önlemenin en doğrudan yolu, listelerinizi içe aktarmadan veya kampanya göndermeden önce doğrulamaktır. Bir e-posta doğrulama aracı, kampanya gönderilmeden önce her posta kutusunun hedef sunucuda gerçekten var olup olmadığını test eder. Böylece geçersiz adresler hesabınızda bounce oluşturmaz. Bu noktada Giggal, bir API anahtarıyla [Mailchimp'e bağlanabilir](/integrations). Giggal, kitlenizdeki abone kişileri içe aktarır ve her posta kutusunun var olup olmadığını kontrol eder. [Catch-all alan adlarındaki](/catch-all-verification) adresleri de çözümler. Doğrulama bittiğinde sonuçları CSV dosyası olarak indirirsiniz. Hatalı adresleri ise Mailchimp içinde elle arşivler veya abonelikten çıkarırsınız. Giggal, Mailchimp kitlenizde hiçbir şeyi değiştirmez.

Göndermeden önce doğrulama yapmak bounce'ları düşük tutar. Bir süredir e-posta almamış eski bir segmentiniz varsa, onu ana bültene eklemeden önce bir doğrulama aracından geçirin veya yeniden onay kampanyası gönderin. Alan adı kimlik doğrulama kayıtlarınızın DNS'te geçerli kalmasını sağlayın. Çünkü DMARC hizalama hatası, Mailchimp'in kabul ettiği soft bounce nedenlerinden biridir. Kitlenizi doğrulamanın, Mailchimp'in zaten temizlediği kişileri geri getirmeyeceğini unutmayın. Bir adres Cleaned durumunu aldığında Mailchimp, o kişinin yalnızca kayıt formunuz üzerinden yeniden kaydolarak geri dönmesine izin verir.

## Sık sorulan sorular

**Cleaned kişiler Mailchimp faturama dahil edilir mi?**
Hayır. Cleaned kişiler aylık kişi sınırınıza dahil edilmez ve Mailchimp bunlar için ücret almaz. Kişi türlerinden yalnızca Subscribed, Unsubscribed ve Non-subscribed kişiler planınızın kişi sınırına dahil edilir.

**Cleaned bir kişiyi yeniden abone yapabilir miyim?**
Hayır. Cleaned bir kişiyi Mailchimp panelinizden elle yeniden Subscribed durumuna alamazsınız. Abonenin yeniden katılmak için bilgilerini tekrar girmesi gerekir. Bunu Mailchimp'in barındırdığı kayıt formundan veya web sitenize yerleştirilmiş bir formdan yapabilir.

**Mailchimp bir kişiyi kaç soft bounce'tan sonra temizler?**
Kişinin kayıtlı bir abone etkinliği yoksa Mailchimp adresi 7 soft bounce'tan sonra temizler. Kişinin daha önce abone etkinliği varsa Mailchimp, adresi hard bounce'a dönüştürüp temizlemeden önce en fazla 15 soft bounce'a izin verir.

**Cleaned kişileri silmeli miyim?**
Hayır. Mailchimp, Cleaned kişileri silmek yerine arşivlemeyi önerir. Arşivleme kaydı kitlenizde tutar. Mailchimp'e göre bu, o adrese yeniden gönderim yapıp bounce almanızı önlemeye yardımcı olur. Mailchimp, kişileri yalnızca GDPR amaçlarıyla silmenizi söyler.

**Mailchimp geçerli olduğunu bildiğim bir adresi neden temizledi?**
Kurumsal bir spam filtresi veya güvenlik duvarı, Mailchimp'in sunucularını Denied veya Blocked gibi SMTP yanıtlarıyla engellerse geçerli e-posta adresleri de hard bounce verebilir. Alıcı, ağ yöneticisinden Mailchimp'in gönderim IP adreslerini izin listesine eklemesini isterse kayıt formunuz üzerinden kitlenize yeniden katılabilir.

Cleaned etiketi, Mailchimp'in sorun oluştuktan sonra gönderen itibarınızı koruma yöntemidir. Önce doğrulama yapmak ise bounce'un hiç oluşmamasını sağlar. Bir sonraki gönderiminizden önce abone listenizi [Giggal.ai](/email-list-cleaning) (İngilizce) ile kontrol edin. Böylece geçersiz adresleri Mailchimp temizlemeden önce bulursunuz.
