---
title: E-posta servis sağlayıcısı (ESP)
seoTitle: "E-posta servis sağlayıcısı (ESP) nedir?"
description: E-posta servis sağlayıcısı (ESP) nedir, Mailchimp ve SendGrid gibi örnekler, ESP'nin Gmail veya Outlook'tan farkı ve ESP'ler bounce oranınızı neden izler?
slug: e-posta-servis-saglayicisi
date: 2026-11-05
updated: 2026-11-05
keyword: e-posta servis sağlayıcısı
short: E-posta servis sağlayıcısı (ESP), e-postalarınızı sizin adınıza gönderen bir hizmet şirketidir. İşletmeler bülten, makbuz ve şifre sıfırlama e-postalarını birçok kişiye göndermek için ESP kullanır. Mailchimp, Brevo ve SendGrid buna örnektir.
related: smtp, mta, deliverability, sender-reputation, bounce-rate, list-cleaning
cta: Listenizi ESP'nize yüklemeden önce doğrulayın
---

## E-posta servis sağlayıcısı (ESP) nedir?

E-posta servis sağlayıcısı (ESP, email service provider), başka işletmeler adına e-posta gönderen bir şirkettir. Bu şekilde gönderilen e-postaya bazen ESP e-postası denir. E-postayı siz yazarsınız ve kimin alacağını siz seçersiniz. ESP'nin sunucuları e-postayı her adrese gönderir. Sunucu, sürekli çalışan ve başka bilgisayarlar için bir iş yapan bilgisayardır.

İşletmeler ESP kullanır, çünkü normal bir gelen kutusu birçok kişiye göndermek için yapılmamıştır. Gmail ve Outlook.com, bir hesabın her gün gönderebileceği e-posta sayısını sınırlar. Ayrıca abonelikten çıkma bağlantıları, bounce yönetimi veya kampanya raporları için araçları yoktur.

## Örnek: bir fırın bültenini gönderiyor

Rosa'nın bir fırını var. E-posta listesinde 3.000 müşteri bulunuyor. Her ay yeni pastalar ve çalışma saatleri hakkında bir bülten gönderiyor.

İlk başta bülteni kişisel Gmail hesabından göndermeyi denedi. Gmail birkaç yüz e-postadan sonra onu durdurdu, çünkü kişisel hesapların günlük gönderim sınırı vardır. Müşterilerinin de abonelikten çıkma imkânı yoktu.

Bu yüzden bir ESP'ye kaydoldu. Şimdi her ay şunları yapıyor.

1. 3.000 adreslik listesini ESP'ye yükler.
2. Bülteni ESP'nin düzenleyicisinde yazar.
3. Gönder düğmesine tıklar. ESP'nin sunucuları e-postayı 3.000 adresin hepsine gönderir.
4. ESP her e-postaya bir abonelikten çıkma bağlantısı ekler. Bu bağlantıya tıklayan kişileri listeden çıkarır.
5. Ertesi gün Rosa bir rapor okur. Rapor, kaç e-postanın bounce olduğunu, açıldığını ve tıklandığını gösterir.

## E-posta servis sağlayıcısı örnekleri

| ESP | Genellikle ne için kullanılır? |
| --- | --- |
| Mailchimp | Bültenler ve pazarlama kampanyaları |
| Brevo | Pazarlama kampanyaları ve işlemsel e-posta |
| SendGrid | Uygulamalardan gönderilen işlemsel e-posta ve pazarlama e-postası |
| Amazon SES | Uygulamalardan ve web sitelerinden e-posta gönderme |
| Postmark | Makbuz ve şifre sıfırlama gibi işlemsel e-postalar |

## ESP ve e-posta sağlayıcısı

Bu ikisi sık sık karıştırılır. Farklı işler yaparlar.

- **E-posta servis sağlayıcısı** sizin adınıza e-posta gönderir. Örnekler: Mailchimp, SendGrid, Amazon SES.
- **E-posta sağlayıcısı** (mailbox provider), insanların e-postalarını okuduğu gelen kutusunu barındırır. Örnekler: Gmail, Outlook.com, Yahoo Mail.

Fırın örneğinde Rosa'nın bültenini ESP gönderir. Müşterileri bülteni Gmail, Outlook.com ve Yahoo Mail'de okur. Bültenin gelen kutusuna mı yoksa spam klasörüne mi gideceğine e-posta sağlayıcısı karar verir. ESP bu kararı veremez.

## Pazarlama ESP'si ve işlemsel ESP

ESP'ler iki tür e-postayı işler.

- **Pazarlama e-postası**, sizin belirlediğiniz zamanda aynı anda birçok kişiye gider. Bültenler ve indirim duyuruları pazarlama e-postasıdır.
- **İşlemsel e-posta** (transactional email), bir kişi bir şey yaptıktan sonra o kişiye gider. Makbuzlar, şifre sıfırlama e-postaları ve kargo bildirimleri işlemsel e-postadır.

Bazı ESP'ler tek bir türe odaklanır. Postmark ve Amazon SES çoğunlukla işlemsel e-posta için kullanılır. Mailchimp en çok pazarlama e-postasıyla bilinir. Brevo ve SendGrid gibi diğerleri ikisini de sunar. Birçok işletme iki türü ayrı hesaplar veya servisler üzerinden gönderir. Böylece bir kampanyadaki sorun, şifre sıfırlama e-postalarını geciktirmez.

## E-posta servis sağlayıcısı sizin için ne yapar?

- Gönderim sunucularını ve bu sunuculardaki [mail transfer agent](/glossary/mta) yazılımını çalıştırır.
- Her e-postayı [SMTP](/glossary/smtp) üzerinden gönderir. SMTP, sunucuların e-postayı birbirine iletmek için kullandığı standart kurallardır.
- Abonelikten çıkma bağlantıları ekler ve abonelikten çıkan kişilerin listesini tutar.
- Bounce mesajlarını okur ve hard bounce olan adreslere göndermeyi durdurur.
- Açılma, tıklama, bounce ve spam şikâyeti raporlarını gösterir.
- E-postalarınızın alan adınızdan geldiğini kanıtlaması için SPF ve DKIM kurmanıza yardımcı olur.

## ESP'ler bounce oranınızı neden önemser?

Bir ESP üzerinden gönderdiğinizde onun sunucularını ve çoğu zaman onun IP adreslerini kullanırsınız. IP adresi, internette bir sunucuyu tanımlayan numaradır. E-postalarınız bounce olursa veya spam şikâyeti alırsa bu IP adreslerinin itibarı düşer. Aynı IP adreslerini paylaşan diğer müşteriler de bundan etkilenebilir.

Bu nedenle birçok ESP her hesabın bounce oranını izler. Oran çok yüksekse hesabı incelemeye alabilir veya duraklatabilir. Çok sayıda eski veya yanlış yazılmış adres içeren bir liste, yüksek bir [bounce oranına](/glossary/bounce-rate) yol açar.

## E-posta servis sağlayıcıları ve e-posta doğrulama

Listenizi ESP'nize yüklemeden önce doğrulayın. Bir [mail adresi doğrulama aracı](/email-checker), bir adresin var olup olmadığını söyler. Bir [toplu mail doğrulama aracı](/bulk-email-verifier), Rosa'nın 3.000 adresi gibi bütün bir dosyayı kontrol eder ve bounce olacak adresleri işaretler. Siz de bu adresleri kaldırıp temiz listeyi yüklersiniz. Bu [e-posta doğrulama](/) adımı ESP'nizin yerini tutmaz. Ancak bounce oranınızı düşürür ve ESP hesabınızı korur.
