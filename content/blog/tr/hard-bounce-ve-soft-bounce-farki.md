---
title: "Hard bounce ve soft bounce: her biri ne anlama gelir ve ne yapmalısınız"
seoTitle: "Hard bounce ve soft bounce farkı: anlamı ve çözümü"
description: "Hard bounce ile soft bounce arasındaki fark sade bir dille: bounce kodu nasıl okunur, araçlar neden farklı etiketler ve hangi bounce oranları güvenlidir."
slug: hard-bounce-ve-soft-bounce-farki
date: 2026-11-05
updated: 2026-11-05
keyword: hard bounce ve soft bounce farkı
image: /blog/covers/tr/hard-bounce-ve-soft-bounce-farki.webp
imageAlt: Hard bounce ve soft bounce, koddaki 5 kalıcı hata, 4 ise tekrar deneme anlamına gelir
cta: Göndermeden önce hard bounce olacak adresleri bulun
---

Hard bounce kalıcı bir hatadır. E-posta adresi yoktur, alan adı yoktur ya da alıcı sunucu sizi engellemiştir. Tekrar gönderirseniz e-posta yine geri döner.

Soft bounce geçici bir hatadır. Adres gerçektir, ancak bir şey teslimatı şimdilik durdurmuştur. Gelen kutusu doludur, sunucu meşguldür ya da sunucu daha sonra tekrar denemenizi istiyordur. Tekrar gönderirseniz e-posta çoğu zaman ulaşır.

Tanımlar bunlardır. Bilmeniz gereken üç şey daha var ve bunlar tanımlardan daha önemlidir:

- Farklı gönderim araçları farklı kurallar kullanır. Aynı bounce bir araçta hard, başka bir araçta soft sayılabilir.
- Doğru ve çalışan bir adres bile hard bounce olabilir. Bu, sorun adreste değil de e-posta kurulumunuzda olduğunda yaşanır.
- Hesabınızın askıya alınmasına neden olan bounce oranı, kampanya raporunuzda gördüğünüz oran olmayabilir.

Bu rehber üçünü de ele alıyor.

## Hard bounce ve soft bounce: aradaki fark

| | Hard bounce | Soft bounce |
|---|---|---|
| Anlamı | Kalıcı. E-posta teslim edilmeyecek | Geçici. Sonraki bir denemede teslim edilebilir |
| Bounce mesajındaki kod | 5 ile başlar (550, 5.1.1, 5.7.1) | 4 ile başlar (421, 450, 4.2.2) |
| Yaygın nedenler | Adres yok, alan adı yok, gönderen engellenmiş | Gelen kutusu dolu, sunucu meşgul, aynı anda çok fazla e-posta |
| Gönderim aracınızın yaptığı | O adrese göndermeyi genellikle hemen durdurur | Bir süre, çoğu zaman 72 saate kadar tekrar dener |
| Sizin yapmanız gereken | Adresi silin. Tekrar göndermeyin | Bekleyin. Yalnızca geri dönmeye devam ederse silin |
| İtibarınıza verdiği zarar | Yüksek. Çok sayıda hard bounce, sağlayıcılara listenizin kötü olduğunu söyler | Tek bir bounce için düşük. Aynı adresler geri dönmeye devam ederse birikir |

## Hard bounce nedir?

Hard bounce, alıcı sunucunun e-postanızı kalıcı olarak reddettiği anlamına gelir. Tekrar denemek işe yaramaz.

E-posta standardı RFC 5321, buna kalıcı hata der. Standardın ifadesine göre gönderen aynı isteği "tekrar denememelidir".

İki tür hard bounce vardır. Raporunuzda aynı görünürler, ancak farklı çözümler gerektirirler.

**Birinci tür: adres hatalıdır.** Posta kutusu yoktur. Ya da alan adı yoktur. Ya da adres yanlış yazılmıştır. Doğrulanmış bir liste bu bounce'ları hiçbir zaman üretmemelidir. Şöyle görünürler:

- Gmail şunu söyler: `550 5.1.1 The email account that you tried to reach does not exist`
- Microsoft şunu söyler: `5.1.1 Bad destination mailbox address`
- Microsoft ayrıca şunu da söyler: `5.4.1 Recipient address rejected: Access denied`. Microsoft'un kendi belgeleri bu kodu "alıcının adresi mevcut değil" diye açıklar.

Biri işten ayrıldığında kapatılan bir adres de bu gruba girer.

**İkinci tür: siz engellenmişsinizdir.** Adres gerçektir. Ancak alıcı sunucu sizden gelen e-postayı kabul etmez. Bu bounce'ların kodları 5.7 ile başlar:

- [550 5.7.1](/blog/550-5-7-1-error), bir politika engeli anlamına gelir.
- `550 5.7.26`, alan adınızın kimliği doğrulanmadığı için Gmail'in e-postanızı reddettiği anlamına gelir.
- `550 5.7.30`, e-postanızın DKIM kontrolünden geçemediği anlamına gelir.

Gönderim aracınız bunları hard bounce olarak sayar, çünkü kod 5 ile başlar. Ancak adres sorunsuzdur. Sorun sizin taraftadır. Bunu aşağıda daha ayrıntılı açıklıyoruz. Çünkü 2025'ten bu yana temiz listelerde hard bounce'ların en hızlı artan nedeni budur.

## Soft bounce nedir?

Soft bounce, alıcı sunucunun "şu an olmaz" dediği anlamına gelir. RFC 5321 buna geçici hata der. Standardın ifadesi şöyledir: "hata durumu geçicidir ve işlem yeniden istenebilir". Gönderim aracınız bunu okur ve daha sonra tekrar dener.

Yaygın nedenler ve göreceğiniz kodlar şunlardır:

- **Gelen kutusu dolu.** Gmail `452 4.2.2 The recipient's inbox is out of storage space` der. Kişi bazı e-postaları silip yer açabilir.
- **Çok kısa sürede çok fazla e-posta.** Gmail `450 4.2.1 The user you are trying to contact is receiving email too quickly` der. IP adresinizden çok fazla e-posta geldiğini gördüğünde ise `421 4.7.28` der. Microsoft, etkinliğinizi kontrol ederken `4.7.500` ila `4.7.699 Access denied, please try again later` kodlarını verir.
- **Greylisting.** Bazı sunucular ve birçok güvenli e-posta ağ geçidi, tanımadıkları bir gönderenden gelen ilk e-postayı reddeder. Ardından ikinci denemede kabul eder. Bekleme süresi genellikle yaklaşık 15 dakikadır.
- **Sunucu çalışmıyor.** `421` kodu sunucunun kullanılamadığı anlamına gelir. `4.4.1` veya `4.4.2` kodu bağlantının başarısız olduğu veya zaman aşımına uğradığı anlamına gelir.
- **E-postanın süresi doldu.** `4.4.7` kodu, sunucunuzun denemeye devam ettiği ve sonunda vazgeçtiği anlamına gelir. RFC 5321'e göre sunucular yaklaşık dört ila beş gün boyunca denemeye devam etmelidir.

Tek bir soft bounce normaldir. Tekrarlanan bir soft bounce ise bir sorundur. Bir gelen kutusu altı hafta boyunca her gönderimde "dolu" ise, o gelen kutusu dolu değildir. Terk edilmiştir. Her gönderim aracı sonunda onu böyle değerlendirir.

## Bir bounce mesajındaki kod nasıl okunur

Her bounce mesajında bir kod vardır. Bu kodu okuyabildiğinizde kimsenin etiketine ihtiyacınız kalmaz. Ne olduğunu kendiniz görebilirsiniz.

Her mesajda iki kod bulunur.

**Birinci kod üç basamaklıdır**, örneğin 550 veya 421. Burada yalnızca ilk basamak önemlidir. 4 geçici, 5 kalıcı anlamına gelir.

**İkinci kod noktalarla ayrılmış üç sayıdan oluşur**, örneğin 5.1.1. İlk sayı aynı kuralı tekrarlar: 4 geçici, 5 kalıcıdır. İkinci ve üçüncü sayılar size nedeni söyler:

- `.1.1`, posta kutusunun olmadığı anlamına gelir (@ işaretinden önceki kısım yanlıştır).
- `.1.2`, alan adının olmadığı anlamına gelir (@ işaretinden sonraki kısım yanlıştır).
- `.2.2`, gelen kutusunun dolu olduğu anlamına gelir.
- `.7.1`, sunucunun sizi bir politika nedeniyle reddettiği anlamına gelir.

![Bir bounce kodu nasıl okunur: ilk basamak hard veya soft olduğunu, genişletilmiş kod nedenini söyler ve yapılacak işlem ikisine göre belirlenir](/blog/fig-tr-bounce-code-reading.webp)
Türü öğrenmek için ilk basamağı okuyun. Nedeni öğrenmek için kodun tamamını okuyun. Ardından nedene göre hareket edin.

Aşağıdaki tablo, gerçekten göreceğiniz kodları listeliyor. Mesaj metinleri Gmail'in ve Microsoft'un kendi belgelerinden alınmıştır.

| Kod | Nerede görülür | Anlamı | Tür | Ne yapmalı |
|---|---|---|---|---|
| 550 5.1.1 | Gmail, Microsoft, çoğu sunucu | Posta kutusu yok | Hard | Adresi silin |
| 5.1.2 | Herhangi bir sunucu | Alan adı yok | Hard | Adresi silin |
| 5.4.1 Recipient address rejected: Access denied | Microsoft | Adres yok | Hard | Adresi silin |
| 550 5.2.1 | Gmail | Hesap etkin değil | Hard | Adresi silin |
| 552 5.2.2 | Gmail | Gelen kutusu dolu ve hesap etkin değil | Hard | Adresi silin |
| 452 4.2.2 | Gmail | Gelen kutusu dolu | Soft | Bekleyin. Tekrarlanırsa silin |
| 450 4.2.1 | Gmail | Kişiye çok fazla e-posta geliyor | Soft | Bekleyin |
| 421 4.7.28 | Gmail | IP adresinizden çok fazla e-posta geliyor | Soft | Daha yavaş gönderin. Listenizi kontrol edin |
| 550 5.7.28 | Gmail | IP adresinizden çok fazla istenmeyen e-posta geliyor | Hard | Göndermeyi durdurun. Listenizi ve hacminizi düzeltin |
| 550 5.7.1 | Gmail, Microsoft | Bir politika tarafından engellendi | Hard, ancak adres sorunsuz | Kimlik doğrulamanızı ve itibarınızı kontrol edin |
| 550 5.7.26 | Gmail | Alan adınızın kimliği doğrulanmamış | Hard, ancak adres sorunsuz | SPF ve DKIM kurun |
| 550 5.7.30 | Gmail | E-postanız DKIM kontrolünden geçemedi | Hard, ancak adres sorunsuz | DKIM kurulumunuzu düzeltin |
| 5.7.23 | Microsoft | E-postanız SPF kontrolünden geçemedi | Hard, ancak adres sorunsuz | SPF kaydınızı düzeltin |
| 5.7.606 ila 5.7.649 | Microsoft | Gönderim yaptığınız IP adresi yasaklanmış | Hard, ancak adres sorunsuz | Microsoft'tan yasağı kaldırmasını isteyin, ardından nedeni düzeltin |
| 4.7.500 ila 4.7.699 | Microsoft | Şüpheli etkinlik, şimdilik engellendi | Soft | Bekleyin. Meşru bir gönderenseniz kendiliğinden kalkar |
| 4.4.7 | Herhangi bir sunucu | E-posta günlerce denendikten sonra süresi doldu | Soft, ancak sunucu vazgeçti | Tekrarlanırsa adresi silin |

Son sütuna bakın. İki kodun ikisi de hard bounce olabilir ve birbirinin tersi işlemler gerektirebilir. `5.1.1` adresi silin demektir. `5.7.26` ise adresi tutun ve DNS ayarlarınızı düzeltin demektir.

## Aynı bounce neden bir araçta hard, başka bir araçta soft sayılır

İnsanlar araçlar arasında bounce oranlarını karşılaştırır ve kafaları karışır. Nedeni şudur.

Alıcı sunucu bir kod gönderir. Yaptığı tek şey budur. Ardından gönderim aracınız bu kodla ne yapacağına karar verir. Her aracın kendi kuralı vardır ve kurallar farklıdır. Twilio'nun kendi rehberi şöyle der: "tüm internet servis sağlayıcıları bu koda tutarlı biçimde uymaz".

Dört popüler araç ve kuralları şunlardır:

| Araç | Soft bounce ile ne yapar | Soft bounce ne zaman hard bounce'a dönüşür |
|---|---|---|
| Mailchimp | Tekrar dener ve kişiyi tutar | Kişi hiçbir şey açmadıysa 7 soft bounce'tan sonra. Daha önce açtıysa 15 soft bounce'tan sonra |
| HubSpot | "Beklemede" (pending) olarak işaretler ve 72 saate kadar dener. Ardından bir soft bounce kaydeder | Otomatik olarak dönüşmez. Ancak HubSpot "posta kutusu dolu" durumunu soft değil, hard bounce grubuna koyar |
| SendGrid | 72 saate kadar tekrar dener | 72 saatten sonra denemeyi bırakır. Hard bounce'lar bir engelleme listesine eklenir |
| Amazon SES | Bir süre tekrar dener, ardından denemeyi bıraktığını size bildirir | Hiçbir zaman otomatik olarak dönüşmez. Bounce oranınıza yalnızca hard bounce'lar dahil edilir. Otomatik yanıtlar hiç sayılmaz |

![Dört gönderim platformu ve her birinin soft bounce'un ne zaman hard bounce'a dönüştüğüne dair kuralları](/blog/fig-tr-bounce-rules-by-platform.webp)
Aynı kod, dört farklı kural. Bir listeyi Mailchimp'ten HubSpot'a taşırsanız, adresler değişmediği hâlde hard bounce sayınız değişir.

Yani dolu bir gelen kutusu Gmail'de soft bounce'tur. HubSpot'ta hard bounce'tur. Amazon SES'te ise hiçbir zaman hard bounce'a dönüşmeyen bir soft bounce'tur. Araç değiştirdikten sonra bounce oranınız değişirse, listeyi suçlamadan önce kuralları kontrol edin.

Basit çözüm, etikete güvenmeyi bırakıp kodu okumaktır. Her araç bounce mesajını dışa aktarmanıza izin verir. İçindeki kod, onu hangi araç toplamış olursa olsun aynıdır.

## Kabul edilebilir hard bounce oranı nedir?

Sınırı, e-postanızı gönderen şirket belirler. Çoğu bu sınırı yayımlamaz. Amazon SES yayımlar ve sayıları, sağlayıcıların nasıl düşündüğüne dair iyi bir rehberdir.

| Hard bounce oranı | Amazon SES ne yapar |
|---|---|
| %2'nin altında | SES'in "en iyi sonuçlar için" altında kalmanızı söylediği seviye |
| %5 veya daha fazla | Hesabınız incelemeye alınır |
| %10 veya daha fazla | Sorunu düzeltene kadar gönderiminiz durdurulabilir |

Burada iki ayrıntı önemlidir. SES yalnızca hard bounce'ları sayar. Soft bounce'lar ve engellenen IP adreslerinden kaynaklanan bounce'lar aleyhinize sayılmaz. Ayrıca SES sabit bir zaman aralığı kullanmaz. Gönderiminizin tipik bir miktarına bakar. Böylece küçük bir gönderen de büyük bir gönderenle aynı şekilde değerlendirilir.

Spam şikâyetleri bounce'larla birlikte gelir. Google'ın gönderen yönergeleri, şikâyet oranınızı %0,10'un altında tutmanızı ve hiçbir zaman %0,30'a ulaştırmamanızı söyler. Amazon SES hesapları %0,1'de incelemeye alır ve %0,5'te durdurabilir. %2'nin üzerinde hard bounce alan bir liste genellikle şikâyet de alır. İkisi de aynı nedenden kaynaklanır: e-postanızı istemeyen kişiler ve kimsenin kontrol etmediği adresler.

[E-posta bounce oranı karşılaştırma değerleri](/blog/how-to-reduce-email-bounce-rate) yazısı, güvenli sınırları e-posta türüne ve listenin nereden geldiğine göre ayrıntılı olarak veriyor.

## Hard bounce olan adresleri listenizden silmeli misiniz?

Evet. Hemen.

Amazon'un ifadesi şöyledir: "alıcının e-posta adresini e-posta listenizden hemen kaldırmalısınız". Aynı sayfa, hard bounce olan adreslere göndermeye devam ederseniz gönderiminizin durdurulabileceği konusunda uyarır. Mailchimp ise size seçim hakkı bile vermez. Hard bounce olan adresler "kitlenizden otomatik olarak ve hemen temizlenir" ve bunlara bir daha gönderim yapılmaz.

Bu adresleri tekrar denemeyin. Posta kutusu geri gelir diye bir sonraki kampanya için saklamayın. Geçen ay bounce olan bir `5.1.1` adresi gelecek ay da bounce olur. Her ek deneme, e-posta sağlayıcısına tanımadığınız adreslere gönderim yaptığınızı söyler.

Bir istisna var. Kod `5.7.26`, `5.7.30`, `5.7.23` veya `5.7.6xx` gibi bir IP yasağı koduysa sorun adreste değildir. Adresi silmek hiçbir şeyi düzeltmez. Kimlik doğrulamanızı veya itibarınızı düzeltin. Ardından aynı adrese tekrar gönderin.

Soft bounce'lar ise tam tersidir. Onlara dokunmayın. Gönderim aracınız kendiliğinden tekrar dener. Aracınızın tekrarlanan bounce'lar için bir kuralı yoksa bir kural oluşturun. Bir ay içinde art arda üç gönderimde soft bounce olan bir adres geri gelmeyecektir. Mailchimp'in yedi bounce kuralı herkes için güvenli bir sınırdır.

## Doğru bir adres neden hard bounce olur?

Çünkü hard bounce, adresin var olup olmadığını değil, e-postanın kabul edilip edilmediğini ölçer. Gerçek ve çalışan bir posta kutusunda 5xx bounce'a dört şey neden olur.

**E-postanızın kimliği doğrulanmamıştır.** Microsoft, 5 Mayıs 2025'te Outlook.com, Hotmail ve Live adreslerine günde 5.000'den fazla e-posta gönderen her alan adı için SPF, DKIM ve DMARC zorunluluğunu uygulamaya başladı. Önce kontrollerden geçemeyen e-postaları gereksiz klasörüne taşıdı. Ardından bunları `550 5.7.515 Access denied, sending domain does not meet the required authentication level` ile reddetmeye başladı. Google da toplu gönderenlerden aynı üç kaydı ister. Gmail'in `550 5.7.26` ve `550 5.7.30` kodları, eksik bir kaydın sizin tarafınızdan nasıl göründüğüdür. Bu kodların hepsi 5 ile başlar. Bu yüzden adresler e-postayı kabul edecek olsa bile hard bounce sütununuza düşerler.

**Şirket bilinmeyen adresleri girişte engeller.** Microsoft Exchange, şirket dizininde olmayan her adresi reddedecek şekilde ayarlanabilir. Bunu `5.4.1 Recipient address rejected: Access denied` ile yapar. Çoğu zaman bu gerçek bir hard bounce'tur. Bazen ise posta kutusu henüz eklenmemiş yeni bir çalışandır. Posta kutusunun kendisini kontrol eden bir doğrulama aracının size bounce mesajından daha iyi bir yanıt vermesinin nedeni budur.

**Posta kutusunun önünde güvenli bir e-posta ağ geçidi vardır.** Birçok şirket gelen tüm e-postaları Proofpoint, Mimecast veya Barracuda gibi bir [güvenli e-posta ağ geçidinden](/blog/what-is-a-secure-email-gateway) geçirir. Ağ geçidi tüm alan adı adına yanıt verir. Her e-postayı tarar ve kurallarından birini çiğneyen her şeyi, genellikle bir `5.7.1` politika koduyla reddeder. Bu, var olan bir posta kutusuna karşı bir hard bounce'tur. Ağ geçitleri gecikmeli bounce'lara da neden olur. Ağ geçidi, posta kutusunun var olup olmadığını kontrol etmeden e-postayı girişte kabul eder. Bounce, ağ geçidinin arkasındaki e-posta sunucusu böyle bir posta kutusu bulamadığında, dakikalar veya saatler sonra gelir. Raporunuz bir hard bounce gösterir, ancak bu bounce gönderim sırasında değil, gönderimden sonra gelmiştir.

**Alan adı catch-all'dur.** Bu, tersi bir sorundur. [Catch-all alan adı](/blog/what-is-a-catch-all-email-address), gerçek olsun ya da olmasın her adres için e-posta kabul eder. Bu yüzden girişte hiçbir zaman `5.1.1` demez. E-posta kabul edilir, ardından daha sonra geri döner ya da hiçbir bildirim olmadan silinir. Bir B2B listesinin yaklaşık %30'u bu alan adlarındadır. Beklenmedik hard bounce'lar buradan gelir.

Özellikle soğuk e-postalarda [e-postaların neden geri döndüğünü](/blog/why-cold-emails-bounce) öğrenmek istiyorsanız, nedenlerin ağırlığı farklıdır. Orada zararın çoğunu listenin eskiliği verir.

## Göndermeden önce hard bounce'ları nasıl önlersiniz

Bir kampanya raporundaki `5.1.1` kodlarının neredeyse hepsi önlenebilirdi. Posta kutusu, gönder düğmesine basmadan önce zaten yoktu. Doğrulama, alıcı sunucuya bounce mesajının soracağı soruyu kampanyadan sonra değil, kampanyadan önce sorar.

Bir [mail adresi doğrulama aracı](/email-checker) sırayla üç kontrol yapar:

- **Söz dizimi.** `name@gmail..com` gibi hataları size bir gönderime mal olmadan yakalar.
- **Alan adı.** `gmial.com` gibi yazım hatalarını ve süresi dolmuş alan adlarını yakalar.
- **Posta kutusu.** Alıcı sunucuyla bir bağlantı açar ve tam olarak bu adres için e-posta kabul edip etmeyeceğini sorar. Yanıt `5.1.1` ise, bu kampanyadan alacağınız bounce'un aynısıdır. Ancak hiçbir e-posta gönderilmediği için itibarınıza bir maliyeti olmaz.

Standart doğrulama tek bir yerde çalışmaz. Catch-all bir alan adında sunucu her adrese evet der. Bu yüzden kontrol "riskli" veya "accept-all" olarak döner ve sizin tahmin etmeniz gerekir. Giggal.ai, listenin bu kısmını gerçek bir geçerli veya geçersiz yanıtına dönüştürmek için geliştirildi. [Catch-all doğrulama](/catch-all-verification) sayfası bunun nasıl yapıldığını açıklıyor.

Ağ geçitleri de aynı soruna yol açar. Bir ağ geçidi, doğrulama aracının sorusunu her adres için kabul eder. Bu yüzden standart bir kontrol orada "bilinmiyor" olarak döner. Giggal.ai bu adresleri farklı bir yolla kontrol eder. [Güvenli e-posta ağ geçitlerinin arkasındaki e-postaları doğrulama](/blog/how-to-verify-emails-behind-secure-email-gateways) yazısı, ağ geçidinin ne yaptığını ve kontrolün onu nasıl aştığını açıklıyor.

Kayıt formları için form gönderildiğinde bir [gerçek zamanlı doğrulama](/public/docs) çağrısı ekleyin. Yanlış yazılmış bir adres, kişi henüz sayfadayken yakalanır. Henüz oluşturmadığınız listelerde bounce'ları azaltan tek adım budur.

Ardından doğrulamadan geçen ama yine de size zarar veren iki tür adresle ilgilenin. info@ ve support@ gibi rol tabanlı adresler vardır, bu yüzden doğrulamadan geçerler. Ancak bunların kişisel bir sahibi yoktur ve daha fazla şikâyet alırlar. Geçici adresler var oldukları sürece doğrulamadan geçer ve daha sonra kaybolur. İyi bir doğrulama aracı ikisini de işaretler. Özellikle bir [soğuk e-posta](/blog/good-bounce-rate-for-cold-email) listesi bu adresleri ilk gönderimden önce çıkarmalıdır.

## Sık sorulan sorular

**Hard bounce oranı ile soft bounce oranı arasındaki fark nedir?**
Her biri, o türdeki bounce'ların gönderdiğiniz e-postalara bölünmesidir. Başınızı derde sokan hard bounce oranıdır, çünkü listenizin kalitesini gösterir. Örneğin Amazon SES, bir hesabı incelemeye almaya veya durdurmaya karar verirken yalnızca hard bounce'ları sayar. Soft bounce oranı ise gönderim hızınız, hacminiz ve itibarınız hakkında daha çok bilgi verir. Onu ayrı okuyun.

**Bounce olan e-postaları silmeli miyim?**
Adres kodlu hard bounce'ları hemen silin: `5.1.1`, `5.1.2`, `5.2.1` ve benzerleri. Kimlik doğrulama kodlu hard bounce'ları, yani `5.7.26`, `5.7.30` ve `5.7.23` kodlarını tutun ve bunun yerine kimlik doğrulamanızı düzeltin. Soft bounce'ları tutun ve tekrar denemelerin çalışmasına izin verin. Art arda birkaç kez soft bounce olan her adresi silin.

**Bir soft bounce, hard bounce'a dönüşebilir mi?**
Evet, iki şekilde. Alıcı sunucu yanıtını değiştirebilir. Gmail, hesap etkinken dolu bir gelen kutusunu `452 4.2.2` olarak, hesap etkinliğini yitirdiğinde ise `552 5.2.2` olarak bildirir. Ya da gönderim aracınız etiketi değiştirebilir. Mailchimp, etkinliği olmayan bir adresi 7 soft bounce'tan sonra, etkinliği olan bir adresi ise 15 soft bounce'tan sonra hard bounce'a dönüştürür.

**Soft bounce'lar gönderen itibarına zarar verir mi?**
Tek bir soft bounce vermez. Sürekli gelen soft bounce'lar verir. E-posta sağlayıcıları, e-posta alamayan gelen kutularına tekrar tekrar gönderim yaptığınızı görür. Yüksek bir soft bounce oranı da çoğu zaman başlı başına bir uyarıdır. `421 4.7.28` gibi bir kod, sağlayıcının size doğrudan yavaşlamanızı söylemesidir.

**Adres doğru olduğu hâlde e-postam neden hard bounce oldu?**
Neredeyse her zaman kimlik doğrulaması yüzünden. Gmail ve Outlook.com artık SPF, DKIM ve DMARC kayıtları olmayan toplu e-postaları reddediyor. Bu ret bir 5xx kodudur, bu yüzden aracınız onu hard bounce olarak kaydeder. Kodu kontrol edin. `5.7` ile başlıyorsa sorun adreste değildir.

Bir bounce raporu, ancak onu okuyabiliyorsanız işe yarar. İlk basamağı okuyun. Ardından nedeni okuyun. Ardından nedene göre hareket edin. `5.1.1` ile geri dönecek adresler işin kolay kısmıdır, çünkü onları göndermeden önce bulabilirsiniz. Listenizi önce [Giggal.ai](/) ile kontrol edin. Bir sonraki raporunuzdaki hard bounce sütununda büyük ölçüde önceden bilemeyeceğiniz durumlar kalır.
