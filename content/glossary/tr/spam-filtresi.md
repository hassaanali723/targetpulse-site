---
title: Spam filtresi
seoTitle: "Spam filtresi nedir? Anlamı ve işleyişi"
description: Spam filtresi e-postanızı teslim etmeden, spam klasörüne koymadan veya reddetmeden önce neye bakar? Ret ve spam klasörü farkı, Google'ın spam oranı sınırları.
slug: spam-filtresi
date: 2026-11-05
updated: 2026-11-05
keyword: spam filtresi
short: Spam filtresi, bir e-posta sağlayıcısının gelen bir e-postanın nereye gideceğine karar vermek için kullandığı sistemdir. E-postayı gelen kutusuna veya spam klasörüne gönderebilir ya da reddedebilir. Göndereni, e-postanın içeriğini ve önceki alıcıların o gönderenin e-postalarına nasıl tepki verdiğini kontrol eder.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Gerçek adreslere gönderin, spam filtrelerine daha az neden bırakın
---

## Spam filtresi nedir?

Spam filtresi, gelen her e-postayı kontrol eden ve ona ne olacağına karar veren bir sistemdir. E-postayı gelen kutusuna teslim edebilir, spam klasörüne taşıyabilir veya reddedebilir. Spam, istenmeyen toplu e-postadır.

Her e-posta sağlayıcısının bir spam filtresi vardır. E-posta sağlayıcısı, gelen kutularını yöneten bir şirket veya sunucudur. Gmail, Outlook.com ve Yahoo'nun bir spam filtresi vardır. Bir [güvenli e-posta ağ geçidinin](/glossary/secure-email-gateway) arkasındaki şirket e-posta sunucularının da vardır. Güvenli e-posta ağ geçidi, bir şirketin e-postalarını çalışanların gelen kutularına ulaşmadan önce kontrol eden bir güvenlik hizmetidir.

Karar iki noktadan birinde verilir.

**SMTP bağlantısı sırasında.** SMTP, e-posta sunucularının birbirine e-posta göndermesinin standart yoludur. Alıcı sunucu e-postayı kabul etmeden önce reddedebilir. Size `5.7.x` kodlu bir bounce gelir. Bounce, bir e-postanın teslim edilmediğini size bildiren otomatik mesajdır. Örnekler: politika engeli için Gmail'in `550 5.7.1` kodu veya IP adresinizden gelen olağan dışı miktarda istenmeyen e-posta için `550 5.7.28` kodu. IP adresi, gönderim sunucunuzu tanımlayan numaradır. E-posta posta kutusuna hiç ulaşmaz.

**E-posta kabul edildikten sonra.** Sunucu e-postayı kabul eder ve sonra gelen kutusuna, promosyonlar sekmesine veya spam klasörüne koyar. Size bounce gelmez. Tek işaretler, daha düşük açılma oranları ve [Google Postmaster Tools](/glossary/postmaster-tools) içindeki verilerdir.

## Basit bir örnek

Bir spam filtresi normal bir teklifi şöyle spam klasörüne gönderebilir. Sayılar yalnızca bir örnektir.

1. **Bir spor salonu teklif gönderir.** City Gym, 8.000 üyesine bir indirim teklifi gönderir.
2. **Filtre göndereni kontrol eder.** Spor salonunun SPF, DKIM ve DMARC kayıtları kontrolden geçer. E-posta gerçekten spor salonundan gelmiştir.
3. **Spor salonunun geçmişini kontrol eder.** Geçen ay spor salonu eski bir listeye e-posta göndermiştir. Bu adreslerin birçoğu yoktur ve e-postalar bounce olmuştur.
4. **İnsanların daha önce nasıl tepki verdiğini kontrol eder.** Birçok üye son teklifi açmadan silmiştir. Bazıları "spam olarak bildir" seçeneğine tıklamıştır.
5. **Karar verir.** Filtre yeni teklifi birçok üye için spam klasörüne taşır.
6. **Spor salonu hiçbir hata almaz.** Hiçbir bounce geri gelmez. Spor salonu yalnızca daha düşük bir açılma oranı görür.

Sorun teklifteki kelimeler değildi. Sorun listeydi.

## Filtre neleri kontrol eder?

Sağlayıcılar kesin kurallarını yayımlamaz. Bilinen girdiler şunlardır:

- **Kimlik doğrulama.** [SPF](/glossary/spf), [DKIM](/glossary/dkim) ve [DMARC](/glossary/dmarc) kontrollerinin geçip geçmediği. Bunlar, bir e-postanın gerçekten sizden geldiğini kanıtlayan alan adı kayıtlarıdır. Google ve Microsoft artık bu kontrollerden geçemeyen toplu e-postaları reddeder.
- **İtibar.** Alan adınızın ve IP adresinizin gönderim geçmişi. Alan adınız, adresinizde @ işaretinden sonra gelen kısımdır. Bkz. [alan adı itibarı](/glossary/domain-reputation) ve [IP itibarı](/glossary/ip-reputation).
- **Şikâyetler.** Alıcıların ne sıklıkla "spam olarak bildir" seçeneğine tıkladığı. Google'ın yönergeleri, Postmaster Tools'taki şikâyet oranının %0,10'un altında tutulmasını ve hiçbir zaman %0,30'a ulaşmamasını söyler. Örneğin 10.000 e-postada %0,10, 10 şikâyet demektir.
- **Bounce'lar.** Var olmayan adreslere ne sıklıkla gönderdiğiniz. Artık var olmayan çok sayıda adres içeren bir liste, satın alınmış veya kazınmış (scraped) bir listeye benzer. Kazınmış, bir program tarafından web sitelerinden kopyalanmış demektir.
- **Etkileşim.** İnsanların e-postalarınızı açıp açmadığı, yanıtlayıp yanıtlamadığı, okumadan silip silmediği veya başka bir klasöre taşıyıp taşımadığı.
- **İçerik.** Bilinen spam ile eşleşen bağlantılar, ekler, resimler ve metin kalıpları. İçerik eskisi kadar önemli değildir. İtibar ve kimlik doğrulama daha önemlidir.

## Gönderenler neden filtrelenir?

Filtrelemenin çoğunun nedeni e-postadaki kelimeler değildir. Nedeni listedir. Artık var olmayan adresler bounce'a yol açar. E-postanızı istemeyen kişiler şikâyete yol açar. İki sorun da hiç kontrol edilmemiş adreslerden kaynaklanır.

**Örnek:** bir şirket her konu satırında "ÜCRETSİZ" kelimesini "ücretsiz" olarak değiştirir, ancak eski ve kontrol edilmemiş bir listeye göndermeye devam eder. E-postaları yine spam klasörüne gider, çünkü neden listedir.

## Doğrulama aracı nasıl yardımcı olur?

Doğrulama aracı spam filtreleriyle etkileşime girmez. Bounce'lara ve şikâyetlere yol açan adresleri kaldırır. Göndermeden önce listenizi bir [mail adresi doğrulama aracından](/email-checker) geçirin. Araç artık var olmayan posta kutularını kaldırır. Daha fazla şikâyet alan geçici adresleri ve info@ gibi rol tabanlı hesapları da kaldırır. [E-posta bounce oranı nedir ve nasıl düşürülür](/blog/how-to-reduce-email-bounce-rate) rehberi, bunların bir listede genellikle ne kadar yer tuttuğunu gösterir.

Büyük bir liste için bir [toplu mail doğrulama aracı](/bulk-email-verifier) kullanın. [E-posta doğrulama](/), bir spam filtresinin e-postanızı kabul etmesini sağlayamaz. Filtrelemenin bir nedenini ortadan kaldırır: var olmayan adreslere göndermeyi.
