---
title: IP itibarı
seoTitle: "IP itibarı nedir? Anlamı ve işleyişi"
description: E-posta IP itibarı nedir, ortak ve özel IP'ler nasıl farklıdır, itibarı ne oluşturur ve ne zedeler, IP itibarınızı nasıl kontrol eder ve iyileştirirsiniz?
slug: ip-itibari
date: 2026-11-05
updated: 2026-11-05
keyword: ip itibarı
short: IP itibarı, Gmail ve Outlook gibi e-posta sağlayıcılarının e-postalarınızın geldiği IP adresine ne kadar güvendiğidir. IP adresi, internette bir sunucuyu tanımlayan numaradır. Kötü bir IP itibarı, e-postalarınızın spam klasörüne gitmesine veya engellenmesine neden olur.
related: domain-reputation, sender-reputation, ip-warming, email-blacklist, dnsbl, spam-trap
cta: IP itibarınızı korumak için artık var olmayan adresleri listenizden çıkarın
---

## IP itibarı nedir?

İnternetteki her sunucunun bir IP adresi vardır. Bu, sunucuyu tanımlayan `192.0.2.10` gibi bir numaradır. Bir e-posta gönderdiğinizde e-posta, IP adresi olan bir sunucudan çıkar.

Gmail, Outlook.com ve Yahoo gibi e-posta sağlayıcıları, her IP adresinden gelen e-postaları takip eder. Kaç e-postanın bounce olduğunu ve kaç kişinin onları spam olarak işaretlediğini sayarlar. IP'nin [kara listelerde](/glossary/email-blacklist) olup olmadığını da kontrol ederler. Bu geçmişe bakarak IP'ye ne kadar güveneceklerine karar verirler. Bu güven düzeyi, IP'nin itibarıdır.

İyi bir e-posta IP itibarı, e-postalarınızın gelen kutusuna ulaşmasına yardımcı olur. Kötü bir itibar ise spam klasörüne, daha yavaş teslimata veya reddedilen e-postalara yol açar.

## Örnek: ortak bir IP'deki iki gönderen

ESP, müşterileri adına e-posta gönderen bir şirkettir. Mailchimp ve SendGrid buna örnektir. Diyelim ki bir ESP'nin iki müşterisi aynı IP adresinden, `192.0.2.10` adresinden gönderiyor.

- **A müşterisi** bir kitapçıdır. Web sitesinde kaydolan kişilere e-posta gönderir. Az sayıda e-posta bounce olur ve az sayıda kişi şikâyet eder.
- **B müşterisi** 50.000 adreslik bir liste satın almıştır. Bu adreslerin binlercesi bounce olur. Birçok alıcı "Spam olarak bildir" seçeneğine tıklar.

Gmail, bounce'ları ve şikâyetleri `192.0.2.10` adresi için kaydeder. Bu IP'nin itibarı düşer. Kitapçı yanlış bir şey yapmamış olsa da artık onun e-postalarının bir kısmı da spam klasörüne gidebilir.

ESP'ler bunu önlemeye çalışır. Birçoğu her müşterinin bounce ve şikâyet oranlarını izler. Aynı IP'deki diğer müşterileri korumak için B müşterisininki gibi hesapları duraklatır.

## Ortak IP ve özel IP

| | Ortak IP (shared IP) | Özel IP (dedicated IP) |
| --- | --- | --- |
| Kim gönderir? | Aynı ESP'nin birçok müşterisi | Yalnızca siz |
| İtibarı neye bağlıdır? | O IP'den gönderen herkese | Yalnızca sizin e-postanıza |
| Kime uygundur? | Küçük ve orta ölçekli gönderenlere | Hacmi sabit olan büyük gönderenlere |
| Kurulum | Kullanıma hazırdır | Önce ısıtılması gerekir |

Özel bir IP, itibarı üzerinde size tam kontrol verir. Bu aynı zamanda başkalarının iyi e-postalarının size yardımcı olmayacağı anlamına gelir. Yeni bir özel IP'nin geçmişi yoktur, bu yüzden itibarını yavaş yavaş oluşturursunuz.

## IP itibarını ne oluşturur, ne zedeler?

Aşağıdakiler iyi bir IP itibarı oluşturur:

- Ani sıçramalar olmadan sabit miktarda e-posta göndermek.
- Listeniz temiz olduğu için düşük bounce oranları.
- İnsanlar e-postanızı istediği için az sayıda spam şikâyeti.

Aşağıdakiler itibara zarar verir:

- Var olmayan adreslerden gelen çok sayıda [hard bounce](/glossary/hard-bounce).
- Yalnızca kötü listelere sahip gönderenleri yakalamak için var olan adreslere, yani [spam tuzaklarına](/glossary/spam-trap) gönderilen e-postalar.
- E-postanızı beklemeyen kişilerden gelen spam şikâyetleri.
- Spamhaus gibi bir kara listede yer almak.
- Geçmişi olmayan yeni bir IP'den gönderilen yüksek hacimli e-posta.

## IP itibarınızı nasıl kontrol edersiniz?

1. Gönderim IP'nizi bulun. Kendi Gmail adresinize bir e-posta gönderin, e-postayı açın ve "Orijinali göster" seçeneğini seçin. Gmail, IP adresini SPF sonucunun yanında gösterir. ESP'niz de bunu size söyleyebilir.
2. IP'yi MXToolbox gibi bir kara liste kontrol aracına girin. Araç, IP'yi aynı anda birçok herkese açık kara listede kontrol eder.
3. Outlook.com için Microsoft SNDS (Smart Network Data Services) hizmetine kaydolun. Bu hizmet, IP'nizin Outlook.com kullanıcılarına gönderdiği e-postalarla ilgili verileri gösterir.
4. Gmail için [Google Postmaster Tools](/glossary/postmaster-tools) kullanın. Bu hizmet, alan adınızın Gmail kullanıcılarına gönderdiği e-postalarla ilgili verileri gösterir.

## IP itibarınızı nasıl iyileştirirsiniz?

1. Önce kötü bir liste veya ele geçirilmiş bir hesap gibi nedeni bulun ve düzeltin.
2. Bounce olan adresleri kaldırın ve bir sonraki gönderimden önce listenizi doğrulayın.
3. E-postanızı hiç açmayan kişilere göndermeyi bırakın.
4. IP'niz bir kara listedeyse nedeni düzelttikten sonra listeden çıkarılmayı isteyin.
5. Her yeni IP ile yavaş başlayın. Günlük olarak az sayıda e-posta gönderin ve bu sayıyı birkaç hafta içinde artırın. Bkz. [IP ısıtma](/glossary/ip-warming).

## IP itibarı ve alan adı itibarı

IP itibarı sunucu adresine aittir. [Alan adı itibarı](/glossary/domain-reputation) ise e-posta adresinizde @ işaretinden sonra gelen ada, örneğin example.com'a aittir. Yeni bir ESP'ye geçerseniz IP'niz değişir, ancak alan adınız aynı kalır. Sağlayıcılar ikisini de kullanır ve herhangi birindeki bir sorun teslimatınıza zarar verebilir.

## IP itibarı ve e-posta doğrulama

Bounce'lar da spam tuzakları da IP itibarına zarar verir. İkisi de listenizdeki kötü adreslerden kaynaklanır. Bir [mail adresi doğrulama aracı](/email-checker), siz göndermeden önce alıcı sunucuya bir adresin var olup olmadığını sorar. Bir [toplu mail doğrulama aracı](/bulk-email-verifier) bunu bütün bir liste için yapar ve bounce olacak adresleri işaretler. Bu adresleri [e-posta doğrulama](/) ile kaldırmak, IP'niz için daha az bounce kaydedilmesi demektir. Doğrulama her spam tuzağını bulamaz, çünkü bazı tuzaklar çalışan posta kutularıdır. Ancak artık var olmayan adresleri tuzağa dönüştürülmeden önce kaldırır.
