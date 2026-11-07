---
title: Soft bounce
seoTitle: "Soft bounce nedir? Anlamı ve işleyişi"
description: Soft bounce nedir, yaygın nedenleri ve kodları nelerdir, gönderim araçları ne kadar yeniden dener ve sürekli soft bounce olan adresi ne zaman kaldırmalısınız?
slug: soft-bounce
date: 2026-11-05
updated: 2026-11-05
keyword: soft bounce
short: Soft bounce, geçici bir sorun nedeniyle bu sefer teslim edilmeyen bir e-postadır. Adres gerçektir. Gelen kutusu doludur, sunucu meşguldür veya sunucu daha sonra yeniden denemenizi istemiştir.
related: hard-bounce, mailbox-full, greylisting, throttling, email-bounce, bounce-rate
cta: Göndermeden önce hangi adreslerinizin gerçek olduğunu görün
---

## Soft bounce nedir?

Soft bounce, bu sefer teslim edilmeyen ama daha sonra teslim edilebilecek bir e-postadır. Sorun geçicidir. Alıcı sunucu yeniden denemenize izin verir.

Önce birkaç terim. Sunucu, sürekli çalışan ve bir alan adının e-postalarını işleyen bir bilgisayardır. Alan adı, bir adreste @ işaretinden sonra gelen kısımdır, örneğin example.com. Bounce, bir e-postanın teslim edilmediğini size bildiren otomatik mesajdır.

E-posta standardı RFC 5321, soft bounce için geçici olumsuz yanıt (temporary negative reply) ifadesini kullanır. Bounce mesajındaki kod 4 ile başlar. Örnek: `452 4.2.2`. 5 ile başlayan bir kod ise [hard bounce](/glossary/hard-bounce) anlamına gelir. Hard bounce kalıcıdır.

## Basit bir örnek

Baştan sona normal bir soft bounce şöyle olur.

1. **Lucy bir fatura gönderir.** Lucy bir temizlik şirketi işletir. Pazartesi günü james@example.com adresindeki bir müşterisine fatura gönderir.
2. **Gelen kutusu doludur.** James yıllardır hiçbir e-postayı silmemiştir. Posta kutusunda yer kalmamıştır.
3. **Sunucu e-postayı şimdilik reddeder.** Sunucu 4 ile başlayan bir kodla yanıt verir. Bu kod "şimdi değil, daha sonra deneyin" anlamına gelir.
4. **Lucy'nin aracı yeniden dener.** Gönderim aracı bekler ve birkaç saat sonra faturayı yeniden gönderir. Bunu kendiliğinden yapar.
5. **James gelen kutusunu temizler.** Salı sabahı James eski e-postaları siler.
6. **Bir sonraki deneme başarılı olur.** Fatura salı öğleden sonra ulaşır. Lucy'nin hiçbir şey yapması gerekmez.

Adres baştan beri gerçekti. Yalnızca zamanlama uygun değildi.

## Yaygın nedenler

Her nedenin kendi kodu vardır. Yaygın olanlar şunlardır.

- **Gelen kutusu dolu.** Gmail, `452 4.2.2 The recipient's inbox is out of storage space` yanıtını verir. Kişinin bazı e-postaları silmesi gerekir. Yukarıda James'e olan budur.
- **Çok kısa sürede çok fazla e-posta.** Gmail, `450 4.2.1 The user you are trying to contact is receiving email too quickly` yanıtını verir. IP adresinizden çok fazla e-posta geldiğinde de `421 4.7.28` yanıtını verir. IP adresi, e-postanızın geldiği sunucuyu tanımlayan numaradır. Örnek: bir mağaza büyük bir indirim e-postasını tüm Gmail müşterilerine aynı anda gönderir ve Gmail mağazadan yavaşlamasını ister.
- **Greylisting.** Sunucu, tanımadığı bir gönderenden gelen ilk e-postayı reddeder. Aynı e-postayı ikinci denemede kabul eder. Bkz. [greylisting](/glossary/greylisting).
- **Sunucu çalışmıyor veya yavaş.** `421` kodu, sunucunun kullanılamadığı anlamına gelir. `4.4.1` veya `4.4.2` kodu, bağlantının başarısız olduğu veya zaman aşımına uğradığı anlamına gelir. Örnek: küçük bir şirketin e-posta sunucusu onarım için bir saatliğine kapatılır.
- **E-postanın süresi doldu.** `4.4.7` kodu, sunucunuzun yeniden deneme süresinin tamamı boyunca denediği ve sonra durduğu anlamına gelir. RFC 5321, sunucuların yaklaşık dört ila beş gün boyunca yeniden denemesi gerektiğini söyler.

## Gönderim aracınız ne yapar?

Gönderim aracınız bir soft bounce durumunda otomatik olarak yeniden dener. Her aracın kendi kuralları vardır.

| Araç | Ne yapar? |
|---|---|
| SendGrid | En fazla 72 saat boyunca yeniden dener. |
| HubSpot | E-postayı en fazla 72 saat boyunca beklemede olarak işaretler. Sonra bir soft bounce kaydeder. |
| Mailchimp | Kişi hiç e-posta açmadıysa bir adresi 7 soft bounce sonrasında hard bounce olarak değiştirir. Kişi daha önce bir e-posta açtıysa sınır 15 soft bounce olur. |

Aynı soft bounce farklı araçlarda farklı etiketlenebilir. Etiketi değil, bounce mesajındaki kodu okuyun.

## Soft bounce ile ne yapmalısınız?

1. **İlk başta hiçbir şey yapmayın.** Gönderim aracınızın yeniden denemesine izin verin. Tek bir soft bounce normaldir.
2. **Sonraki gönderimlerde adresi izleyin.** Adresin gelecek hafta ve ondan sonraki hafta yeniden bounce olup olmadığını not edin.
3. **Sürekli bounce oluyorsa kaldırın.** Art arda birkaç gönderimde soft bounce olan bir adresi kaldırın. Mailchimp'in 7 soft bounce sınırı güvenli bir kuraldır.

**Örnek:** haftalık bir bülten gönderiyorsunuz. Bir adres altı hafta boyunca her hafta "gelen kutusu dolu" yanıtı döndürüyor. O gelen kutusu aslında dolu değildir. Kimse onu kullanmıyordur. Adresi kaldırın.

## Doğrulama aracı bunu nasıl ele alır?

Bir doğrulama aracı, siz göndermeden önce e-posta sunucusuna bağlanır. Sunucu 4xx koduyla, yani 4 ile başlayan herhangi bir kodla yanıt verirse araç yeniden dener. Yanıt aynı kalırsa araç adresi geçerli olarak değil, bilinmiyor olarak işaretler. Bilinmiyor, posta kutusunun var olduğu ama e-posta almıyor olabileceği anlamına gelir. [Hard bounce ve soft bounce](/blog/hard-bounce-vs-soft-bounce) rehberi her kodu ve onunla ne yapılacağını açıklar.

Bir [mail adresi doğrulama aracı](/email-checker) bu testi tek bir adres için yapar. Bir [toplu mail doğrulama aracı](/bulk-email-verifier) ise bütün bir liste için yapar. [E-posta doğrulama](/) dolu bir gelen kutusunu boşaltamaz veya çalışmayan bir sunucuyu başlatamaz. Göndermeden önce hangi adreslerin var olduğunu ve hangilerine ikinci kez bakmanız gerektiğini söyler.
