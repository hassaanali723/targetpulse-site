---
title: Greylisting
seoTitle: "Greylisting nedir? Anlamı ve işleyişi"
description: Greylisting nedir, bir sunucu ilk e-postanızı neden reddedip ikincisini kabul eder, gecikme genellikle ne kadar sürer ve doğrulama sonuçlarını nasıl etkiler?
slug: greylisting
date: 2026-11-05
updated: 2026-11-05
keyword: greylisting
short: Greylisting bir spam savunmasıdır. Bir e-posta sunucusu, tanımadığı bir gönderenden gelen ilk e-postayı reddeder. Gönderen birkaç dakika sonra yeniden denediğinde aynı e-postayı kabul eder. Gerçek e-posta sunucuları yeniden dener, ancak çoğu spam yazılımı denemez.
related: soft-bounce, throttling, smtp-error-codes, unknown-email-result, secure-email-gateway, spam-filter
cta: Kontrollerinize greylisting uygulayan adresler için gerçek bir yanıt alın
---

## Greylisting nedir?

Greylisting, gecikmeyle çalışan bir spam savunmasıdır. Bir e-posta sunucusu, yeni bir gönderenden gelen ilk e-postayı geri çevirir ve ikinci denemede kabul eder. RFC 6647 içinde açıklanmıştır.

Önce birkaç terim. Sunucu, sürekli çalışan ve e-postaları işleyen bir bilgisayardır. IP adresi, internette bir sunucuyu tanımlayan numaradır. Spam, istenmeyen toplu e-postadır.

Greylisting kullanan bir alıcı sunucu, gördüğü her gönderenin kaydını tutar. Üç şeye bakar:

1. gönderen IP adresi;
2. gönderen adresi;
3. alıcı adresi.

Bu üçlüyü daha önce görmediyse e-postayı geçici bir hatayla reddeder. Doğru yapılandırılmış bir e-posta sunucusu e-postayı bir kuyruğa koyar ve yeniden dener. Kuyruk, bir sunucunun göndermek için beklettiği e-postaların listesidir. Çoğu spam yazılımı bir kez gönderir ve yeniden denemez.

Yeniden deneme geldiğinde sunucu e-postayı kabul eder ve göndereni kaydına ekler. Bundan sonra aynı gönderenden gelen e-postalar ilk denemede kabul edilir.

## Basit bir örnek

Gönderen tarafından greylisting şöyle görünür.

1. **Nina yeni bir tedarikçiye e-posta gönderir.** Nina bir kafede çalışır. Saat 09.00'da orders@supplier.example adresine ilk kez e-posta gönderir.
2. **Tedarikçinin sunucusu onu tanımaz.** Nina'nın sunucusu, adresi ve bu alıcıdan oluşan bu üçlüyü daha önce hiç görmemiştir.
3. **Sunucu geçici bir hata gönderir.** "greylisted, try again later" (greylisting uygulandı, daha sonra yeniden deneyin) gibi bir mesajla `451` yanıtı verir.
4. **Nina'nın sunucusu bekler.** E-posta sunucusu e-postayı kuyruğunda tutar. Nina hiçbir şey görmez.
5. **Sunucu yeniden dener.** Saat 09.15 civarında Nina'nın sunucusu aynı e-postayı yeniden gönderir.
6. **E-posta kabul edilir.** Tedarikçinin sunucusu ikinci denemeyi görür. E-postayı kabul eder ve Nina'nın bilgilerini kaydeder.
7. **Bir sonraki sefer bekleme olmaz.** Nina gelecek hafta tedarikçiye e-posta gönderdiğinde e-posta ilk denemede kabul edilir.

Binlerce e-posta gönderen bir spam programı genellikle ikinci kez denemez. Bu yüzden onun e-postaları hiç ulaşmaz.

## Gönderen için nasıl görünür?

İlk deneme 4 ile başlayan bir kod alır. Bu kod genellikle `450` veya `451` olur ve "greylisted, try again later" gibi bir mesajla gelir. E-posta sunucunuz bunu bir [soft bounce](/glossary/soft-bounce) olarak değerlendirir ve kendi takvimine göre yeniden dener. Soft bounce, geçici bir teslimat hatasıdır.

Yeniden denemeyi kabul etmeden önce ne kadar bekleneceğine alıcı sunucu karar verir. Yaklaşık 15 dakika yaygındır. Bazı sunucular daha kısa veya daha uzun bir gecikme kullanır.

Genellikle greylisting'i fark etmezsiniz. E-posta birkaç dakika geç ulaşır. Aracınız bir bounce bildirimi gösterse bile bu bildirim kendiliğinden ortadan kalkar.

## Greylisting ne zaman önemlidir?

Greylisting normal bir kampanyayı etkilemez. İki durumda önemlidir.

**Zamana duyarlı e-postalar.** 15 dakika geç gelen bir şifre sıfırlama e-postası veya tek kullanımlık kod, kullanıcının işine yaramaz. Bu nedenle işlemsel e-posta gönderenler bazen alıcı alan adlarından IP adreslerini bir izin listesine (allow list) eklemelerini ister. İşlemsel e-posta, makbuz veya giriş kodu gibi, kullanıcının yaptığı bir işlem nedeniyle gönderilen e-postadır.

**Örnek:** Leo bir web sitesinden giriş kodu ister. Kod, greylisting kullanan iş adresine gider. Kod 15 dakika sonra ulaşır. O zamana kadar Leo giriş yapmaya çalışmayı bırakmıştır.

**Doğrulama.** Bir doğrulama aracı, bir adresi kontrol etmek için SMTP konuşması başlatır ve herhangi bir şey göndermeden önce durur. SMTP, e-posta sunucularının e-posta göndermek için birbiriyle konuşmasının standart yoludur. Greylisting uygulayan bir sunucuda ilk deneme `4xx` yanıtı alır, yani 4 ile başlayan bir kod. Tek denemeden sonra duran bir doğrulama aracı adresi bilinmiyor olarak bildirir. Oysa adres geçerli olabilir.

## Greylisting ve güvenli e-posta ağ geçitleri

Birçok şirket alan adı, Proofpoint veya Mimecast gibi bir [güvenli e-posta ağ geçidi](/glossary/secure-email-gateway) kullanır. Güvenli e-posta ağ geçidi (SEG), bir şirketin e-postalarını çalışanların gelen kutularına ulaşmadan önce kontrol eden bir güvenlik hizmetidir. Bu ağ geçitleri, varsayılan olarak bilinmeyen gönderenlere greylisting uygular. Basit bir kontrolün birçok B2B adres için bilinmiyor sonucu vermesinin bir nedeni budur. B2B adresler, başka şirketlerde çalışan kişilerin iş adresleridir.

## Doğrulama aracı bunu nasıl ele alır?

İyi bir [mail adresi doğrulama aracı](/email-checker), `4xx` yanıtını bir sonuç olarak değil, "yeniden dene" olarak değerlendirir. Bekler, aynı IP adresinden yeniden dener ve greylisting gecikmesinden sonra sunucunun verdiği yanıtı bildirir. Giggal.ai, ağ geçidi kullanan alan adlarını çözerken bunu yapar. Tek denemeli bir kontrolün bilinmiyor sonucu verdiği yerde geçerli veya geçersiz sonucunu böyle verir.

Bir [toplu mail doğrulama aracı](/bulk-email-verifier) aynı işi listedeki her adres için yapar. [E-posta doğrulama](/) greylisting'i kapatamaz. Gecikmenin bitmesini bekler ve sonra her adresin var olup olmadığını bildirir.
