---
title: Alan adı itibarı
seoTitle: "Alan adı itibarı nedir? Anlamı ve işleyişi"
description: E-posta alan adı itibarı nedir, IP itibarından farkı nedir, ona ne zarar verir, nasıl kontrol edilir ve gönderim alan adınızı nasıl korursunuz?
slug: alan-adi-itibari
date: 2026-11-05
updated: 2026-11-05
keyword: alan adı itibarı
short: Alan adı itibarı, Gmail gibi e-posta sağlayıcılarının gönderim alan adınıza ne kadar güvendiğidir. Alan adınız, e-posta adresinizde @ işaretinden sonra gelen kısımdır, örneğin example.com. İyi bir alan adı itibarı, gönderim servisinizi değiştirseniz bile sizinle kalır.
related: ip-reputation, sender-reputation, postmaster-tools, dmarc, bounce-rate, email-warmup
cta: Bir sonraki gönderimden önce alan adı itibarınızı koruyun
---

## Alan adı itibarı nedir?

Alan adınız, e-posta adresinizde @ işaretinden sonra gelen addır. anna@example.com adresinde alan adı example.com'dur. Gmail, Outlook.com ve Yahoo gibi e-posta sağlayıcıları, her alan adından gelen e-postaların geçmişini tutar. Bounce'ları, spam şikâyetlerini ve kimlik doğrulama sonuçlarını takip eder. İnsanların e-postaya nasıl tepki verdiğini de takip eder. Bu geçmişe bakarak alan adına ne kadar güveneceklerine karar verirler. Bu güven düzeyi, alan adının itibarıdır.

Sağlayıcılar her e-postayı üç kayıt sayesinde gerçek alan adına bağlayabilir. [SPF](/glossary/spf), [DKIM](/glossary/dkim) ve [DMARC](/glossary/dmarc), bir e-postanın gerçekte hangi alan adından geldiğini kanıtlar. Bir işletme gönderim sunucularını sık sık değiştirebilir, ancak alan adını genellikle yıllarca korur.

## Örnek: yeni bir ESP'ye geçmek

Brightline adlı bir şirket, news@brightline.com adresinden bülten gönderir. Üç yıldır aynı ESP'yi kullanmaktadır. ESP, müşterileri adına e-posta gönderen bir şirkettir. Mailchimp ve Brevo buna örnektir.

Brightline başka bir ESP'ye geçmeye karar verir. Değişenler şunlardır.

1. Yeni ESP farklı sunuculardan gönderir, bu yüzden IP adresi değişir. IP adresi, internette bir sunucuyu tanımlayan numaradır.
2. Alan adı aynı kalır. E-postalar yine news@brightline.com adresinden gelir.
3. Gmail yeni IP adreslerini görür. Ancak brightline.com alan adını ve onun DKIM imzasını tanır.
4. Brightline'ın alan adı itibarı da onunla birlikte yeni ESP'ye taşınır. Üç yıllık geçmişi, e-postalarının gelen kutusuna ulaşmaya devam etmesine yardımcı olur.

Tersi de doğrudur. Brightline'ın alan adı itibarı kötü olsaydı, yeni bir ESP bunu düzeltmezdi. Sorun alan adında kalırdı.

## Alan adı itibarı ve IP itibarı

| | Alan adı itibarı | IP itibarı |
| --- | --- | --- |
| Neyi puanlar? | example.com gibi gönderim alan adınızı | E-postanızın çıktığı sunucu adresini |
| ESP değiştirdiğinizde değişir mi? | Hayır | Evet |
| Başka gönderenlerle paylaşılır mı? | Hayır, alan adınızı yalnızca siz kullanırsınız | Ortak bir IP'de çoğu zaman evet |
| Sağlayıcı onu nasıl tanır? | SPF, DKIM ve DMARC'taki alan adıyla | Bağlantı kuran IP adresiyle |

Sağlayıcılar ikisini de kullanır. Diğer yarısını [IP itibarı](/glossary/ip-reputation) sayfası anlatır.

## Alan adı itibarına ne zarar verir?

- **Bounce'lar.** Var olmayan adreslere giden çok sayıda e-posta, satın alınmış veya hiç temizlenmemiş bir listeye işaret eder.
- **Spam şikâyetleri.** Google'ın gönderen yönergeleri, spam oranının %0,10'un altında tutulmasını ve hiçbir zaman %0,30'a ulaşmamasını söyler.
- **Spam tuzakları.** Bunlar, yalnızca kötü listelere sahip gönderenleri yakalamak için var olan adreslerdir. Bkz. [spam tuzağı](/glossary/spam-trap).
- **Eksik kimlik doğrulama.** SPF, DKIM ve DMARC olmadan sağlayıcılar bir e-postanın gerçekten size ait olduğundan emin olamaz.
- **Ani gönderim hacmi.** Yeni veya uzun süredir sessiz bir alan adının birden binlerce e-posta göndermesi, spam gönderenlerin davranışına benzer.

## Alan adı itibarınızı nasıl kontrol edersiniz?

Herkese açık tek bir puan yoktur. Her sağlayıcı alan adınız hakkında kendi değerlendirmesini tutar. Bunu görmenin başlıca yolları şunlardır.

- **Google Postmaster Tools.** Google'ın, Gmail kullanıcılarına gönderilen e-postalar için sunduğu ücretsiz bir hizmettir. Alan adınızı eklersiniz ve sahibi olduğunuzu bir DNS kaydıyla kanıtlarsınız. DNS kaydı, alan adınızın herkese açık dizinindeki bir ayardır. Hizmet daha sonra spam oranınız ve kimlik doğrulama sonuçlarınız gibi verileri gösterir. Bkz. [Google Postmaster Tools](/glossary/postmaster-tools).
- **Kendi sayılarınız.** Bir sağlayıcıda düşen açılma oranları, e-postanızın orada spam klasörüne gittiği anlamına gelebilir.
- **Kara liste kontrolleri.** MXToolbox gibi araçlar, alan adınızın herkese açık bir alan adı kara listesinde olup olmadığını gösterir.

## Alan adı itibarınızı nasıl korursunuz?

1. Alan adınızla e-posta gönderen her servis için SPF, DKIM ve DMARC kurun.
2. Her büyük gönderimden önce listenizi doğrulayın ve bounce olacak adresleri kaldırın.
3. Soğuk e-postayı ayrı bir alan adından veya alt alan adından gönderin. brightline-mail.com veya outreach.brightline.com buna örnektir. Bu, soğuk e-posta ile ana alan adınız arasında biraz mesafe bırakır. Sağlayıcılar yine de bir alt alan adını ana alan adına bağlayabilir.
4. Yeni bir alan adıyla yavaş başlayın. Günlük olarak az sayıda e-posta gönderin ve bu sayıyı birkaç hafta içinde artırın. Bkz. [e-posta ısıtma](/glossary/email-warmup).
5. Abonelikten çıkmayı kolaylaştırın. Böylece insanlar "Spam olarak bildir" seçeneğine tıklamak yerine abonelikten çıkar.

## Alan adı itibarı ve e-posta doğrulama

Bounce'lar, sağlayıcıların alan adınızı puanlamak için kullandığı sinyallerden biridir. Bunları göndermeden önce kontrol edebilirsiniz. Bir [mail adresi doğrulama aracı](/email-checker) var olmayan adresleri bulur. Bir [toplu mail doğrulama aracı](/bulk-email-verifier) aynı işi bütün bir liste için yapar. Böylece kampanyanız gerçek posta kutularına gider. Düzenli [e-posta doğrulama](/), eski adresleri geri dönüştürülmüş spam tuzağına dönüşmeden önce de kaldırır. Şikâyetleri veya eksik kimlik doğrulamayı düzeltmez. Bu yüzden yukarıdaki diğer adımlar yine geçerlidir.
