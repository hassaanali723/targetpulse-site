---
title: Hard bounce
seoTitle: "Hard bounce nedir? Anlamı ve işleyişi"
description: Hard bounce nedir, hangi bounce kodları hard bounce anlamına gelir, iki hard bounce türü nelerdir ve her bir türle ne yapmalısınız?
slug: hard-bounce
date: 2026-11-05
updated: 2026-11-05
keyword: hard bounce
short: Hard bounce, alıcı sunucunun kalıcı olarak reddettiği bir e-postadır. Adres yoktur, alan adı yoktur veya sunucu e-postanızı engellemiştir. Aynı e-postayı yeniden gönderirseniz yine başarısız olur.
related: soft-bounce, email-bounce, smtp-error-codes, mailer-daemon, invalid-email, bounce-rate
cta: Hard bounce olacak adresleri göndermeden önce bulun
---

## Hard bounce nedir?

Hard bounce, teslim edilmemiş ve hiçbir zaman teslim edilmeyecek bir e-postadır. Alıcı sunucu onu reddetmiştir. Yeniden gönderirseniz sunucu yine reddeder.

Önce birkaç terim. Sunucu, sürekli çalışan ve bir alan adının e-postalarını işleyen bir bilgisayardır. Alan adı, bir adreste @ işaretinden sonra gelen kısımdır, örneğin example.com. Bounce, bir e-postanın teslim edilmediğini size bildiren otomatik mesajdır.

Her bounce mesajı bir kod içerir. E-posta standardı RFC 5321, hard bounce için kalıcı olumsuz yanıt (permanent negative reply) ifadesini kullanır. Kodu 5 ile başlar. Örnek: `550 5.1.1`. 4 ile başlayan bir kod ise [soft bounce](/glossary/soft-bounce) anlamına gelir. Soft bounce geçicidir, bu yüzden daha sonraki bir deneme başarılı olabilir.

## Basit bir örnek

Normal bir listede hard bounce şöyle olur.

1. **Tom bir adres toplar.** Tom küçük bir çevrim içi kitapçı işletir. 2022'de bir müşteri ben@company.example adresiyle kaydolur.
2. **Müşteri işinden ayrılır.** 2025'te Ben, Company Ltd'den ayrılır. Şirket onun posta kutusunu kapatır.
3. **Tom bir bülten gönderir.** Gönderim aracı bülteni ben@company.example adresine gönderir.
4. **Sunucu e-postayı reddeder.** company.example alan adındaki e-posta sunucusunda artık Ben için bir posta kutusu yoktur. Sunucu `550 5.1.1` koduyla yanıt verir.
5. **Tom bir bounce mesajı alır.** Gönderim aracı bu adres için bir hard bounce kaydeder.
6. **Tom adresi kaldırır.** Ben'in eski posta kutusu geri gelmeyecektir. Bu adrese yeniden gönderilen e-posta da başarısız olur.

Tom adresi toplarken yanlış bir şey yapmadı. Adres 2022'de gerçekti. Daha sonra çalışmayı bıraktı ve kimse Tom'a haber vermedi.

## İki hard bounce türü

İki tür de kampanya raporunuzda "hard bounce" olarak görünür. Nedenleri ve çözümleri farklıdır.

### Tür 1: adres hatalı

Posta kutusu yoktur, alan adı yoktur veya adreste yazım hatası vardır. Ben'inki gibi, çalışan şirketten ayrıldığında kapatılan bir adres de bu gruba girer.

Büyük sağlayıcılar bunu kendi ifadeleriyle bildirir:

- Gmail, `550 5.1.1 The email account that you tried to reach does not exist` yanıtını verir.
- Microsoft, `5.1.1 Bad destination mailbox address` yanıtını verir.

**Örnek:** bir müşteri anna@example.com yazmak isterken ana@example.com yazar. "ana" adında bir posta kutusu yoktur. Sunucu bir hard bounce döndürür.

### Tür 2: e-postanız engellendi

Adres gerçektir, ancak sunucu sizden gelen e-postayı reddeder. Bu kodlar `5.7` ile başlar.

- Gmail'in `550 5.7.26` kodu, alan adınızın kimlik doğrulamasının yapılmadığı anlamına gelir. Kimlik doğrulama, alan adınızda bulunan ve bir e-postanın gerçekten sizden geldiğini kanıtlayan kayıtlardır.
- Microsoft'un `5.7.23` kodu, e-postanızın SPF kontrolünden geçemediği anlamına gelir. SPF bu kayıtlardan biridir. Alan adınız adına e-posta göndermesine izin verilen sunucuları listeler.

Gönderim aracınız bunları hard bounce olarak sayar, çünkü kod 5 ile başlar. Ancak adreste sorun yoktur. Sorun sizin e-posta ayarlarınızdadır.

**Örnek:** Maria, maria-design.example adında yeni bir alan adı kurar. Hiçbir kimlik doğrulama kaydı eklemeden Gmail kullanan bir müşterisine e-posta gönderir. Gmail `550 5.7.26` döndürür. Müşterinin adresi çalışıyordur. Düzeltilmesi gereken, Maria'nın ayarlarıdır.

## Hard bounce neden önemlidir?

E-posta sağlayıcıları, Google ve Microsoft gibi gelen kutularını yöneten şirketlerdir. Var olmayan adreslere ne sıklıkla gönderdiğinizi sayarlar. Çok sayıda hard bounce, onlara listenizin kontrol edilmediğini gösterir.

E-posta gönderim servisleri de bu sayıyı izler. Bounce oranı, e-postalarınızdan bounce olanların payıdır. Örneğin 1.000 e-postada 50 bounce, %5 bounce oranı demektir. Amazon'un e-posta gönderim servisi Amazon SES, sınırlarını yayımlar:

| Bounce oranı | Amazon SES'in yaptığı |
|---|---|
| %2'nin altında | Önerdiği seviye budur |
| %5 | Hesabı incelemeye alır |
| %10 | Hesabı duraklatabilir |

Yani tek bir hard bounce sorun değildir. Artık var olmayan adreslerle dolu bir liste ise sorundur.

## Hard bounce ile ne yapmalısınız?

Önce bounce mesajındaki kodu okuyun. Kod, hangi tür hard bounce olduğunu size söyler.

1. **Kod `5.1.1`, `5.1.2` veya başka bir adres hatasıdır.** Adresi hemen listenizden kaldırın. Bu adrese bir daha göndermeyin. Mailchimp bu adresleri kitlenizden (audience) otomatik olarak kaldırır. Amazon, gönderenlere bu adresleri "hemen" (immediately) kaldırmalarını söyler.
2. **Kod `5.7` ile başlar.** Adresi tutun. SPF, DKIM ve DMARC kayıtlarınızı veya gönderen itibarınızı düzeltin. Gönderen itibarı, sağlayıcıların geçmiş gönderimlerinize bakarak size verdiği puandır. Sonra aynı adrese yeniden gönderin.

Kodların tam tablosu ve her biriyle ne yapılacağı, [Hard bounce ve soft bounce](/blog/hard-bounce-vs-soft-bounce) rehberinde yer alır.

## Doğrulama aracı bunu nasıl ele alır?

Bir doğrulama aracı, siz göndermeden önce alıcı sunucuya aynı soruyu sorar. Bir [mail adresi doğrulama aracı](/email-checker) e-posta sunucusuna bağlanır. Sunucunun tam olarak o adres için e-posta kabul edip etmediğini sorar ve herhangi bir e-posta gönderilmeden önce durur. Sunucu `550 5.1.1` yanıtı verirse araç adresi geçersiz olarak işaretler. Siz de adresi kampanyadan önce kaldırırsınız. Hiçbir e-posta gönderilmediği için itibarınız etkilenmez.

Bütün bir listeyi aynı anda kontrol etmek için listeyi bir [toplu mail doğrulama aracına](/bulk-email-verifier) yükleyin. [E-posta doğrulama](/), Tür 1 sorunlarını, yani var olmayan adresleri bulur. Tür 2 hard bounce'u önleyemez, çünkü bu sorun sizin kendi e-posta ayarlarınızdan kaynaklanır.
