---
title: DNS TXT kaydı
seoTitle: "DNS TXT kaydı nedir? Anlamı ve işleyişi"
description: DNS TXT kaydı nedir, e-postada ne için kullanılır (SPF, DKIM ve DMARC), nasıl eklenir, hangi kurallar onu bozar ve nasıl kontrol edilir? Örneklerle.
slug: dns-txt-kaydi
date: 2026-11-05
updated: 2026-11-05
keyword: dns txt kaydı
short: DNS TXT kaydı, alan adınızın ayarlarında saklanan bir metin satırıdır. E-posta sunucuları SPF, DKIM ve DMARC kontrolleri için TXT kayıtlarını okur. Başka servisler de alan adının size ait olduğunu doğrulamak için bu kayıtları okur.
related: spf, dkim, dmarc, mx-record, ptr-record, bimi
cta: Kayıtlarınız hazır. Şimdi e-posta gönderdiğiniz adresleri kontrol edin
---

## DNS TXT kaydı nedir?

DNS TXT kaydı, alan adınızın ayarlarında saklanan bir metin satırıdır. İnternetteki herkes bu kaydı okuyabilir.

Önce DNS nedir, ona bakalım. DNS, Domain Name System (Alan Adı Sistemi) ifadesinin kısaltmasıdır. Alan adları için herkese açık bir telefon rehberi gibi çalışır. Biri alan adınızı yazdığında DNS, onun bilgisayarına alan adını nerede bulacağını söyler. DNS, kayıt (record) denen farklı türde girişler tutar. Her kayıt türünün tek bir görevi vardır.

TXT kaydı düz metin tutar. Kimseyi bir yere yönlendirmez. Alan adınıza eklenmiş bir nottur. Diğer sistemler bu notu okur ve ona göre işlem yapar.

## TXT kayıtları ne için kullanılır?

E-postada TXT kayıtları, e-postalarınızın gerçek olduğunu kanıtlayan kuralları tutar.

| Kullanım | Kaydın eklendiği yer | Örnek değer |
|---|---|---|
| **[SPF](/glossary/spf)** | alan adınız, örneğin `example.com` | `v=spf1 include:_spf.google.com ~all` |
| **[DKIM](/glossary/dkim)** | `selector._domainkey.example.com` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
| **[DMARC](/glossary/dmarc)** | `_dmarc.example.com` | `v=DMARC1; p=none; rua=mailto:reports@example.com` |
| **Alan adı sahipliği** | alan adınız | `google-site-verification=abc123...` |

Yukarıdaki değerler kısaltılmış örneklerdir. Gerçek değerlerinizi e-posta sağlayıcınız veya bağladığınız servis verir.

## Basit bir örnek

Bir TXT kaydı şöyle eklenir.

1. **Marco, Google Workspace kullanmaya başlar.** marco@studio.example adresinden gönderdiği e-postaların gelen kutularına ulaşmasını ister.
2. **Google ona bir değer verir.** Kurulum rehberi, `v=spf1 include:_spf.google.com ~all` değeriyle bir SPF kaydı eklemesini söyler.
3. **Marco alan adı ayarlarını açar.** Alan adını satın aldığı yerde oturum açar. Bu yere kayıt şirketi (registrar) veya DNS sağlayıcısı denir.
4. **Bir TXT kaydı ekler.** Tür olarak TXT seçer, ad alanını alan adı olarak bırakır ve değeri yapıştırır.
5. **Bekler.** Değişikliğin her yerde görünmesi birkaç dakika ila birkaç saat sürebilir.
6. **Sunucular artık onu kontrol edebilir.** Marco bir e-posta gönderdiğinde alıcı sunucu onun TXT kaydını okur. Google'ın sunucularının studio.example adına göndermesine izin verildiğini görür.

## TXT kayıtlarını bozan kurallar

TXT kayıtlarıyla ilgili sorunların çoğu birkaç basit hatadan kaynaklanır.

- **Her alan adı için yalnızca bir SPF kaydı.** Bir alan adında `v=spf1` ile başlayan iki TXT kaydı varsa SPF başarısız olur. Bunun yerine ikisini tek bir kayıtta birleştirin.
- **Uzun değerler bölünür.** TXT kaydındaki bir metin parçası en fazla 255 karakter tutabilir. DKIM anahtarları gibi uzun değerler birkaç parça hâlinde saklanır. Çoğu DNS sağlayıcısı bunu sizin için yapar.
- **Adı tam olarak kullanın.** DMARC kaydı ana alan adınızda değil, `_dmarc` adında bulunmalıdır. DKIM kaydı, sağlayıcınızın verdiği seçici (selector) adında bulunmalıdır.
- **Değeri tam olarak kopyalayın.** Tek bir eksik karakter kaydı işe yaramaz hâle getirir.

## TXT kaydı nasıl kontrol edilir?

Herhangi bir alan adının TXT kayıtlarını okuyabilirsiniz. Mac veya Linux bilgisayarda terminali açın ve `dig TXT example.com` yazın. Windows'ta `nslookup -type=TXT example.com` yazın.

[SPF kaydı kontrol aracımızı](/spf-checker) da kullanabilirsiniz. Bu araç bir alan adının SPF kaydını okur ve kaydın neye izin verdiğini açıklar.

## TXT kayıtlarının doğrulamayla ilişkisi

TXT kayıtları gönderdiğiniz e-postayı korur. E-postanın sizden geldiğini kanıtlar. Yazdığınız kişinin hâlâ bir posta kutusu olup olmadığı hakkında hiçbir şey söylemez.

Bu farklı bir kontroldür. Bir [mail adresi doğrulama aracı](/email-checker), alıcı sunucuya bir adresin var olup olmadığını sorar. İkisine de ihtiyacınız vardır: alan adınızda doğru kayıtlar ve gerçek adreslerden oluşan temiz bir liste.
