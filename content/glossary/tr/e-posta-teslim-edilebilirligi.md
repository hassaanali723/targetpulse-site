---
title: E-posta teslim edilebilirliği
seoTitle: "E-posta teslim edilebilirliği nedir?"
description: E-posta teslim edilebilirliği nedir, teslimattan farkı nedir, onu neler etkiler, nasıl ölçülür ve hangi adımlarla iyileştirilir?
slug: e-posta-teslim-edilebilirligi
date: 2026-11-05
updated: 2026-11-05
keyword: e-posta teslim edilebilirliği
short: E-posta teslim edilebilirliği, e-postalarınızın gelen kutusuna ulaşıp ulaşmadığıdır. Bir e-posta teslim edilip yine de spam klasörüne düşebilir. İyi teslim edilebilirlik, e-postalarınızın çoğunun spam klasörüne düşmeden ve engellenmeden gelen kutusuna ulaşması demektir.
related: inbox-placement, sender-reputation, bounce-rate, spam-filter, email-warmup, postmaster-tools
cta: Daha az bounce, daha iyi teslim edilebilirliğin ilk adımıdır
---

## E-posta teslim edilebilirliği nedir?

E-posta teslim edilebilirliği, e-postalarınızın gelen kutusuna ulaşabilmesidir. Gönderdiğiniz bir e-posta üç yerden birine gidebilir. Gelen kutusuna ulaşabilir. Spam klasörüne düşebilir. Ya da alıcı sunucu onu reddedebilir. Buna bounce (geri dönen e-posta) denir.

Teslim edilebilirlik ilk yerle, yani gelen kutusuyla ilgilidir. Her e-postanın nereye gideceğine e-posta sağlayıcısı karar verir. E-posta sağlayıcısı, alıcının gelen kutusunu barındıran şirkettir. Gmail, Outlook.com ve Yahoo buna örnektir. Her sağlayıcı, bu kararı her e-posta için veren bir [spam filtresi](/glossary/spam-filter) çalıştırır.

## Teslimat ve teslim edilebilirlik

Bu iki kelime birbirine benzer, ancak farklı şeyleri ölçer. Teslimat, alıcı sunucunun kabul ettiği e-postaları sayar. Teslim edilebilirlik ise kabul edilen bu e-postaların nereye gittiğini sorar.

Diyelim ki müşterilerinize 1.000 e-posta gönderdiniz. Aşağıdaki sayılar örnektir.

| Adım | E-posta | Anlamı |
| --- | --- | --- |
| Gönderildi | 1.000 | Gönder düğmesine bastınız |
| Bounce oldu | 40 | Alıcı sunucular bunları reddetti |
| Teslim edildi | 960 | Alıcı sunucular bunları kabul etti |
| Gelen kutusunda | 800 | Müşteriler bunları gelen kutularında görür |
| Spam klasöründe | 160 | Müşteriler bunları yalnızca spam klasörünü açarsa görür |

Gönderim aracınız %96 teslimat oranı gösterir. Bu iyi görünür. Ancak 1.000 e-postanın yalnızca 800'ü bir gelen kutusuna ulaştı. Bu, %80 [gelen kutusuna ulaşma](/glossary/inbox-placement) oranıdır. Gönderim aracı, bir e-postanın hangi klasöre gittiğini göremez. Bu yüzden %96 oranını bildirir.

## E-posta teslim edilebilirliğini neler etkiler?

Sağlayıcılar kesin kurallarını yayımlamaz. Bilinen etkenler şunlardır.

- **Kimlik doğrulama.** Alan adınızın [SPF](/glossary/spf), [DKIM](/glossary/dkim) ve [DMARC](/glossary/dmarc) kontrollerinden geçip geçmediği. Bu kayıtlar, e-postanın gerçekten sizden geldiğini kanıtlar.
- **Gönderen itibarı.** Sağlayıcıların, geçmiş e-postalarınıza bakarak alan adınıza ve gönderim IP adresinize ne kadar güvendiği. IP adresi, internette bir sunucuyu tanımlayan numaradır. Bkz. [gönderen itibarı](/glossary/sender-reputation).
- **Bounce'lar.** Var olmayan adreslere göndermek, sağlayıcılara listenizin kontrol edilmediğini gösterir.
- **Spam şikâyetleri.** İnsanların ne sıklıkla "Spam olarak bildir" seçeneğine tıkladığı. Google'ın gönderen yönergeleri bu oranın %0,10'un altında tutulmasını ve hiçbir zaman %0,30'a ulaşmamasını söyler.
- **Liste kalitesi.** İnsanların e-postanızı isteyip istemediği ve listede [spam tuzakları](/glossary/spam-trap) olup olmadığı.
- **İçerik.** Bağlantılar, resimler ve kelime seçimi. İçerik, yukarıdaki etkenlerden daha az önemlidir.

## Teslim edilebilirlik nasıl ölçülür?

Başkalarının gelen kutularının içine bakamazsınız. Bu yüzden teslim edilebilirliği iki yolla ölçersiniz.

**Seed testi.** E-postanızı Gmail, Outlook.com, Yahoo ve diğer sağlayıcılarda sizin kontrol ettiğiniz bir grup test gelen kutusuna gönderirsiniz. Sonra e-postanın her birinde nereye düştüğünü kontrol edersiniz. Bu test adresleri grubuna [seed list](/glossary/seed-list) denir.

**Sağlayıcı verileri.** [Google Postmaster Tools](/glossary/postmaster-tools), Google'ın ücretsiz bir hizmetidir. Alan adınızın Gmail kullanıcılarına gönderdiği e-postalarla ilgili verileri gösterir. Spam şikâyet oranınız ve kimlik doğrulama sonuçlarınız bunlara örnektir. Microsoft da Outlook.com için SNDS adlı benzer bir hizmet sunar.

Kendi sayılarınızı da takip edin. Bir sağlayıcıda açılma oranının aniden düşmesi, e-postanızın orada spam klasörüne gitmeye başladığı anlamına gelebilir.

## E-posta teslim edilebilirliği nasıl iyileştirilir?

1. Alan adınız adına e-posta gönderen her servis için SPF, DKIM ve DMARC kurun.
2. Göndermeden önce listenizi doğrulayın ve var olmayan adresleri kaldırın.
3. Yalnızca e-posta almak isteyen kişilere gönderin. Asla liste satın almayın.
4. Açık bir abonelikten çıkma bağlantısı ekleyin. Google, günde 5.000 veya daha fazla e-posta gönderenlerin pazarlama e-postalarında tek tıkla abonelikten çıkmayı zorunlu tutar.
5. Aylardır hiçbir şey açmamış kişilere göndermeyi bırakın.
6. Yeni bir alan adı veya IP adresiyle yavaş başlayın. Bkz. [e-posta ısıtma](/glossary/email-warmup).
7. Postmaster Tools'ta şikâyet oranınızı izleyin. Oran yükseldiğinde nedenini bulun.

## E-posta teslim edilebilirliği ve e-posta doğrulama

Doğrulama, teslim edilebilirliğin bir parçasını iyileştirir: bounce oranınızı. Bir [mail adresi doğrulama aracı](/email-checker), siz göndermeden önce var olmayan adresleri bulur. Bir [toplu mail doğrulama aracı](/bulk-email-verifier) bunu tek bir yüklemeyle bütün bir liste için yapar. Daha az bounce, gönderen itibarınızı korur. İtibar da e-postalarınızın gelen kutusuna ulaşıp ulaşmayacağını etkiler. Yine de [e-posta doğrulama](/) kimlik doğrulama, içerik veya şikâyet sorunlarını çözmez. Bu yüzden yukarıdaki diğer adımlar da önemlidir.
