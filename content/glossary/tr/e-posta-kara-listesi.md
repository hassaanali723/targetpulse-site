---
title: E-posta kara listesi
seoTitle: "E-posta kara listesi nedir? Anlamı ve işleyişi"
description: E-posta kara listesi nedir, IP ve alan adı kara listeleri nasıl farklıdır, gönderenler nasıl listelenir, nasıl kontrol edilir ve listeden nasıl çıkılır?
slug: e-posta-kara-listesi
date: 2026-11-05
updated: 2026-11-05
keyword: e-posta kara listesi
short: E-posta kara listesi, spam gönderdiği bilinen IP adreslerinin veya alan adlarının herkese açık bir listesidir. Alıcı e-posta sunucuları bu listeleri kontrol eder ve listedeki gönderenlerden gelen e-postaları engeller veya filtreler. En bilinen listelerden bazılarını Spamhaus yönetir.
related: dnsbl, blocklist, spam-trap, ip-reputation, domain-reputation, hard-bounce
cta: Sizi spam tuzaklarına ve kara listelere götürebilecek, artık var olmayan adresleri kaldırın
---

## E-posta kara listesi nedir?

E-posta kara listesi, spam gönderdiği bilinen gönderenlerin listesidir. Bir gönderen, IP adresiyle veya alan adıyla listelenebilir. IP adresi, internette bir sunucuyu tanımlayan numaradır. Alan adı, bir e-posta adresinde @ işaretinden sonra gelen addır, örneğin example.com.

Spamhaus gibi kuruluşlar bu listeleri oluşturur ve yayımlar. Şirketlerin ve e-posta sağlayıcılarının e-posta sunucuları, gelen her e-postayı bir veya daha fazla listeye karşı kontrol eder. Gönderen listedeyse sunucu e-postayı reddedebilir veya spam klasörüne gönderebilir.

Kara listelerin çoğu, internetin herkese açık dizin sistemi olan DNS üzerinden yayımlanır. Bu şekilde yayımlanan listeye [DNSBL](/glossary/dnsbl) denir.

## Örnek: e-postalar bounce olmaya başlıyor

Orbit adlı bir şirket, faturalarını kendi e-posta sunucusundan gönderir. Bir pazartesi günü birçok müşteri faturasını hiç almadığını söyler. Orbit'in BT işlerini yöneten Kofi, bounce mesajlarını okur. Bunların birçoğunda şuna benzer bir ifade vardır:

`554 5.7.1 Service unavailable; Client host [192.0.2.25] blocked using zen.spamhaus.org`

Mesajda Spamhaus adı geçer. Kofi, `192.0.2.25` IP adresini Spamhaus'un web sitesinde sorgular. Adres listededir. Sonra nedenini bulur. Hafta sonu bir çalışanın hesabı ele geçirilmiş ve binlerce spam e-posta göndermek için kullanılmıştır.

Kofi şifreyi değiştirir ve spam gönderimini durdurur. Sonra Spamhaus'tan kaydın kaldırılmasını ister. Kayıt kaldırıldıktan sonra Orbit'in faturaları yeniden teslim edilir.

## IP kara listeleri ve alan adı kara listeleri

| Tür | Listelenen | Alıcı sunucunun kontrol ettiği |
| --- | --- | --- |
| IP kara listesi | Gönderen bir sunucunun IP adresi | E-postayı teslim etmek için bağlanan sunucu |
| Alan adı kara listesi | Bir alan adı | Gönderen adresindeki ve e-postanın içindeki bağlantılardaki alan adları |

Spamhaus iki türü de yönetir. DBL adlı Domain Blocklist listesi alan adlarını listeler. SBL ve XBL gibi diğer listeleri ise IP adreslerini listeler.

## Kara liste mi, engelleme listesi mi?

İki kelime de aynı anlama gelir. Spamhaus artık "blocklist" (engelleme listesi) kelimesini kullanır. Birçok araç ve kişi hâlâ "email blacklist" (e-posta kara listesi) der. "Denylist" kelimesini de görebilirsiniz. Bkz. [engelleme listesi](/glossary/blocklist).

## Gönderenler nasıl listelenir?

- **Spam tuzakları.** Yalnızca kötü listelere sahip gönderenleri yakalamak için var olan bir adrese, yani bir [spam tuzağına](/glossary/spam-trap) göndermek. Eski ve satın alınmış listeler bu adresleri içerir.
- **Spam şikâyetleri.** Birçok alıcının e-postanızı spam olarak işaretlemesi.
- **Ele geçirilmiş bir hesap veya sunucu.** Birinin bir hesabı ele geçirip oradan spam göndermesi. Orbit örneğindeki durum budur.
- **Yeni bir IP'den ani gönderim hacmi.** Bir anda çok fazla e-posta gönderen yeni bir IP adresi, spam gönderenlerin davranışına benzer.
- **Virüslü bir bilgisayar.** Ofisinizdeki bir bilgisayarda bulunan zararlı yazılımın ağınız üzerinden spam göndermesi.

## E-posta kara listesinde olup olmadığınızı nasıl kontrol edersiniz?

1. Gönderim IP adresinizi ve alan adınızı bulun. ESP'niz veya BT ekibiniz bunları size söyleyebilir.
2. Bunları MXToolbox gibi bir kara liste kontrol aracına girin. Araç birçok listeyi aynı anda kontrol eder.
3. Bir liste sizi listelenmiş olarak gösteriyorsa o listenin kendi web sitesine gidin. Kaydı doğrulayın ve nedenini okuyun.
4. Bounce mesajlarınızı okuyun. Engelleme mesajı, Orbit örneğinde olduğu gibi çoğu zaman listenin adını verir.

Her listenin etkisi aynı değildir. Bazı küçük listeleri az sayıda e-posta sunucusu kullanır. Spamhaus kaydı ise daha önemlidir, çünkü birçok e-posta sunucusu Spamhaus listelerini kontrol eder.

## Kara listeden nasıl çıkılır?

1. **Önce nedeni düzeltin.** Ele geçirilmiş şifreleri değiştirin, virüslü bilgisayarları temizleyin veya kötü listelere göndermeyi bırakın. Neden ortadan kalkmazsa yeniden listelenirsiniz.
2. **Listenin kaldırma sayfasını kullanın.** Çoğu listede kaldırma talebi için bir form vardır. Bu işleme çoğu zaman delisting denir.
3. **Neyi düzelttiğinizi açıklayın.** Bazı listeler ne olduğunu ve neyi değiştirdiğinizi sorar.
4. **Sonucu bekleyin.** Bazı listeler, spam gönderilmeyen bir sürenin ardından sizi otomatik olarak kaldırır. Diğerleri talebiniz üzerine işlem yapar.
5. **Sonrasında gönderiminizi izleyin.** Birkaç hafta boyunca bounce mesajlarınızı ve kara liste kontrol aracını yeniden kontrol edin.

## E-posta kara listeleri ve e-posta doğrulama

Spam tuzakları, gönderenlerin kara listeye girmesinin bir yoludur. Bu tuzaklar eski, satın alınmış veya yanlış yazılmış adresler arasında bulunur. Bir [mail adresi doğrulama aracı](/email-checker), artık var olmayan adresleri tuzağa dönüştürülmeden önce bulur. Bir [toplu mail doğrulama aracı](/bulk-email-verifier) bunu bütün bir liste için yapar ve alan adı yanlış yazılmış adresleri de işaretler. Doğrulama her spam tuzağını tespit edemez, çünkü bazı tuzaklar çalışan posta kutularıdır. Ancak düzenli [e-posta doğrulama](/) artık var olmayan adresleri kaldırır. Bu da bounce oranınızı ve geri dönüştürülmüş bir tuzağa gönderme riskinizi düşürür.
