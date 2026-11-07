---
title: "E-postalar neden geri döner? Nedenleri ve yapılacaklar"
seoTitle: "E-postalar neden geri döner? Nedenler ve çözümler"
description: "E-postaların neden geri döndüğü, hard ve soft bounce farkı, soğuk kampanyalarda en sık görülen nedenler, geri dönen e-postanın anlamı ve onunla ne yapılacağı."
slug: soguk-e-postalar-neden-geri-doner
date: 2026-11-05
updated: 2026-11-05
keyword: e-postalar neden geri döner
image: /blog/covers/tr/soguk-e-postalar-neden-geri-doner.webp
imageAlt: "SMTP bounce kodları: 550 5.1.1 hard bounce, 4.x.x soft bounce, 5.7.1 engelleme"
cta: Bir sonraki gönderimden önce bounce oranınızı düşürün
---

Soğuk e-postalar, alıcı sunucu mesajı teslim etmek yerine reddedip geri gönderdiğinde geri döner (bounce). Bir kampanya gönderdiyseniz ve soğuk e-postaların neden normal e-postalarınızdan daha çok geri döndüğünü merak ediyorsanız, bunun büyük kısmı iki nedene dayanır. Birincisi, sizden haber almayı hiç istememiş kişilere ulaşıyorsunuz. Bu yüzden liste daha soğuk ve daha az doğrudur. İkincisi, alıcının sunucusunun hiç geçmişini bilmediği bir alan adından gönderiyorsunuz. Tek tek nedenler bu ikisinin altında yer alır.

## Geri dönen e-posta nedir?

Geri dönen e-posta (bounce), alıcı e-posta sunucusunun bir posta kutusuna koymak yerine reddettiği ve bir neden koduyla geri gönderdiği mesajdır. Yanıt kişiden değil, sunucudan gelir. Gönderenin gelen kutusuna veya gönderim aracının bounce kaydına bir teslim edilemedi raporu (NDR) olarak ulaşır. Bu rapordaki kod işe yarayan kısımdır. 5xx kodu kalıcı bir reddi, 4xx kodu geçici bir reddi gösterir. "Geri dönen e-posta ne demek" sorusunun yanıtı hemen her zaman bu kodu okumaktır.

## Hard bounce ve soft bounce aynı sorun değildir

İlk kontrol etmeniz gereken şey, hangi tür bounce aldığınızdır. Çünkü bundan sonra ne yapacağınızı bu belirler.

Hard bounce kalıcıdır. Adres yoktur, alan adı yoktur ya da sunucu adresi açıkça reddetmiştir. Hard bounce veren bir mesaj hiçbir zaman teslim edilmez ve bu adres hemen listenizden çıkarılmalıdır. Soft bounce geçicidir. Posta kutusu doludur, sunucu meşguldür ya da mesaj daha ayrıntılı inceleme için bekletilmiştir. Soft bounce'lar bazen kendiliğinden çözülür ve gönderim aracı genellikle bunları sizin için yeniden dener.

Bu ayrımın önemli olmasının nedeni itibardır. E-posta sağlayıcıları, hard bounce veren adreslere ne sıklıkla gönderim yaptığınızı izler. Bu durum sürekli tekrarlanırsa sizi kötü bir listeyle çalışan biri olarak işaretler. Tek bir kullanılmayan adres pek fark edilmez. Bu adreslerle dolu bir kampanya ise açık bir işarettir.

## Bounce nedenleri, en sık görülenden başlayarak

Bounce'lar birkaç nedende toplanır. Soğuk kampanyalarda görülme sıklığına göre yaklaşık sıralama şöyledir:

- Adres artık yok. İnsanlar iş değiştirir ve posta kutusu silinir. Kişi kaydı ise satın aldığınız veya web'den topladığınız bir veritabanında kalmaya devam eder.
- Alan adının kendisi yok. Küçük şirketler kapanır, alan adları artık çözümlenmez ve hiçbir şeyi kabul edecek bir sunucu kalmaz.
- Posta kutusu dolu. Bu durum, bakımsız veya kişisel adreslerde yaygındır ve genellikle bir soft bounce'tur.
- Alıcı sunucu gönderim alan adınızı reddetti. Bu, alıcıyla ilgili bir sorun değil, bir itibar veya politika engelidir.
- Greylisting. Sunucu, tanımadığı bir göndericiden gelen ilk denemeyi geçici olarak reddeder ve birkaç dakika sonraki yeniden denemeyi kabul eder.
- Spam filtrelemesi. Mesaj, gelen kutusuna ulaşmadan önce içerik veya politika nedeniyle reddedildi.

Bu sıra önemlidir. Çünkü ilk ikisi, yani kullanılmayan adresler ve kapanmış alan adları, doğrulamanın yakaladığı nedenlerdir. Bunlar satın alınmış veya web'den toplanmış listelerde en sık görülen nedenlerdir de. Alttaki nedenler ise adresten çok zamanlama ve kendi kurulumunuzla ilgilidir.

Nedeni çoğu zaman doğrudan bounce mesajından okuyabilirsiniz. 550 5.1.1 user unknown gibi bir satır, var olmayan bir adres için verilen bir hard bounce'tur. 451 4.7.1 greylisted, try again later ise genellikle yeniden denemede çözülen geçici bir reddir, yani bir soft bounce'tur. Kodu okumayı öğrenmek sizi nedeni tahmin etmekten kurtarır.

## "Email bounce back" ne demek?

Bounce back, aynı şeyin günlük kullanımdaki adıdır: Mesajınız size geri döndü. Rapordaki ifade sağlayıcıya göre değişir. Gmail "Address not found", Microsoft 365 "Recipient address rejected" yazar. Postfix tarzı sunucular ise ham SMTP satırını aktarır: 550 5.1.1 User unknown. Üçü de posta kutusunun orada olmadığı anlamına gelir. "mailbox full", "greylisted" veya "try again later" ifadelerini içeren bir bounce back geçicidir. Genellikle gönderim aracınızın yaptığı yeniden denemede çözülür.

## Her bounce bir liste sorunu değildir

Her bounce'u kötü bir adres olarak okumak cazip gelebilir. Ancak soğuk e-posta bounce'larının önemli bir kısmının listenizle hiçbir ilgisi yoktur. Gönderim alan adınız yeniyse ve ısıtılmamışsa sunucular ona şüpheyle yaklaşır ve e-postalarınızın daha fazlasını reddeder. İlk gününde birkaç yüz soğuk e-posta gönderen yepyeni bir alan adı, bounce'larla karşılaşır. Aynı listeyi gönderen altı aylık bir alan adı ise bu bounce'ları görmez. SPF, DKIM veya DMARC kayıtlarınız eksikse ya da yanlış ayarlandıysa bazı sağlayıcılar alıcıya bakmadan bile sizi reddeder.

Bunların hiçbiri adresleri temizleyerek düzelmez. Bunlar gönderici tarafındaki sorunlardır. Arkalarındaki nedeni okuyana kadar, kullanılmayan bir adresin bounce'uyla aynı görünürler.

## Geri dönen bir e-postayla ne yapmalıyım?

Tek bir adres için kodu okuyun. 5.1.1 veya "user unknown", posta kutusunun artık olmadığı anlamına gelir. Adresi silin. Kişi önemliyse yeniden denemek yerine güncel adresini bulun. 4.x.x veya "mailbox full", beklemeniz gerektiği anlamına gelir. Aracınız kendisi yeniden dener. 5.7.1 veya "blocked", alıcıya değil gönderim alan adınıza işaret eder. Bu yüzden başka bir şey göndermeden önce SPF, DKIM ve DMARC'ı kontrol edin. Bir adresin hâlâ çalışıp çalışmadığından emin değilseniz tekrar göndermeden önce onu [mail adresi doğrulama aracından](/email-checker) geçirin.

## Bir kampanyada bounce aldıktan sonra yapılacaklar

İşe tüm hard bounce'ları listenizden çıkararak başlayın ve bu adreslere bir daha göndermeyin. Bunları yeniden denemeyin. Düzelir umuduyla bir sonraki gönderim için de listede bırakmayın. Çünkü düzelmezler ve her tekrar deneme size itibar kaybettirir. Soft bounce'lara dokunmayın. Gönderim aracınız bu yeniden denemeleri kendisi yapar.

Ardından orana bakın. Yeni bir listenin büyük bir kısmı ilk gönderimde geri döndüyse, liste siz dokunmadan önce de kötüydü. Çözüm daha önceki aşamada, yani adresleri topladığınız veya satın aldığınız noktadadır. Sonradan temizlemek bir sonraki gönderime yardımcı olur, ancak bu gönderimin itibarınıza verdiği zararı geri almaz.

## Asıl belirleyici genellikle listenin kaynağıdır

Bir listenin nereden geldiği, ne kadar geri döneceğini gösterir. Kendi CRM'inizden dışa aktardığınız ve size daha önce yanıt vermiş kişilerden oluşan bir liste çok az geri döner. Web'den toplanmış veya bir aracıdan satın alınmış bir liste çok daha fazla geri döner. Çünkü adresler bir kez toplanmış ve bir daha hiç kontrol edilmemiştir. O zamandan beri bir kısmı da kullanılmaz hâle gelmiştir. Bir listenin satın alınmış veya web'den toplanmış olduğunu biliyorsanız bir kısmının eskidiğini varsayın. Bunu bounce raporundan öğrenmek yerine ilk gönderimden önce listeyi bir [e-posta listesi temizleme aracından](/email-list-cleaning) geçirin.

## Doğrulama nerede işe yarar, nerede yaramaz?

Doğrulama, hard bounce verecek adresleri siz göndermeden önce çıkarır. Bu, soğuk bir listede sonucu en çok etkileyen adımdır. Listeyi önce kontrol etmek bir tahmini bilinen bir rakama dönüştürür. Bunu, kendiniz oluşturmadığınız her listede yapmaya değer.

Doğrulamanın yapamadığı şey, yanlış yapılandırılmış bir DNS kaydını düzeltmek veya soğuk bir alan adını ısıtmaktır. Bunlar gönderici sorunlarıdır ve liste temizliği bunlara hiç dokunmaz. Bu yüzden bounce'larınızı nedenlerine göre ayırın. Bounce'lar artık var olmayan adreslerden geliyorsa bir sonraki gönderimden önce listeyi [e-posta doğrulama](/) işleminden geçirin. Kimlik doğrulama veya itibar hatalarından geliyorsa yapılacak iş listede değil, kendi alan adınızdadır.
