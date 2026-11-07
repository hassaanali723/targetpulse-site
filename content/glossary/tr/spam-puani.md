---
title: Spam puanı
seoTitle: "Spam puanı nedir? Anlamı ve işleyişi"
description: E-posta spam puanı nedir, SpamAssassin puanları nasıl toplar, puanı ne yükseltir, spam puanınızı nasıl kontrol eder ve nasıl düşürürsünüz?
slug: spam-puani
date: 2026-11-05
updated: 2026-11-05
keyword: spam puanı
short: Spam puanı, bir spam filtresinin bir e-postaya verdiği sayıdır. Sayı ne kadar yüksekse e-postanın spam klasörüne gitme olasılığı o kadar yüksektir. Filtrenin bulduğu her uyarı işareti puan ekler.
related: spam-filter, spam-trap, deliverability, sender-reputation, email-blacklist, complaint-rate
cta: Yalnızca spam puanınızı değil, bounce oranınızı da düşürün
---

## Spam puanı nedir?

Spam puanı, bir [spam filtresinin](/glossary/spam-filter) her e-posta için hesapladığı sayıdır. Spam filtresi, bir e-postanın gelen kutusuna mı yoksa spam klasörüne mi gideceğine karar veren yazılımdır. Filtre e-postayı bir kurallar listesiyle karşılaştırır. Eşleşen her kural puan ekler, birkaç kural da puan düşürür. Toplam, e-postanın spam puanıdır.

Puan belirli bir sınıra ulaşırsa filtre e-postayı spam olarak işaretler. En bilinen örnek, birçok e-posta sunucusunun kullandığı ücretsiz bir spam filtresi olan SpamAssassin'dir. Gmail ve Outlook.com gibi büyük sağlayıcılar kendi sistemlerini kullanır. Gönderenlere bir puan göstermezler.

## Spam puanı nasıl çalışır: bir SpamAssassin örneği

SpamAssassin, Apache Software Foundation'ın bir projesidir. Varsayılan olarak, puan 5,0'a ulaştığında e-postayı spam olarak işaretler. Her e-posta sunucusunun sahibi bu sınırı değiştirebilir.

Diyelim ki bir mağaza şu üç sorunu taşıyan bir e-posta gönderiyor.

- Konu satırı "ÜCRETSİZ HEDİYE!!! HEMEN HAREKETE GEÇİN".
- E-postada geçerli bir DKIM imzası yok.
- E-posta, neredeyse hiç metin içermeyen tek bir büyük resimden oluşuyor.

Üç kural eşleşir. Aşağıdaki puanlar, açıklama için verilmiş örnek değerlerdir. Gerçek SpamAssassin kurallarının kendi puanları vardır ve bu puanlar sürümden sürüme değişir.

| Eşleşen kural | Örnek puan |
| --- | --- |
| Konu satırı çoğunlukla büyük harflerle yazılmış | 1,5 |
| Geçerli DKIM imzası yok | 1,0 |
| E-posta çoğunlukla az metinli tek bir resimden oluşuyor | 2,0 |
| **Toplam** | **4,5** |

Toplam 4,5 olduğu için e-posta varsayılan 5,0 sınırının hemen altında kalır. Bağlantı kısaltıcı gibi bir kural daha, e-postanın sınırı aşmasına yol açabilir. O zaman e-posta spam klasörüne gider.

## Spam puanını ne yükseltir?

- **Eksik kimlik doğrulama.** [SPF](/glossary/spf), [DKIM](/glossary/dkim) veya [DMARC](/glossary/dmarc) kaydının olmaması ya da kayıtların kontrolden geçememesi.
- **Kara listedeki bir gönderim IP adresi.** IP adresi, internette bir sunucuyu tanımlayan numaradır. Birçok filtre, bilinen spam kaynaklarının herkese açık listelerini kontrol eder. Bkz. [e-posta kara listesi](/glossary/email-blacklist).
- **Spam çağrıştıran kelimeler ve TAMAMI BÜYÜK HARF.** "Hemen harekete geçin" veya "%100 ücretsiz" gibi ifadeler, art arda ünlem işaretleri ve büyük harflerle yazılmış konu satırları.
- **Bozuk HTML.** HTML, bir e-postayı biçimlendiren koddur. Hatalı kod veya bir web sayfasından kopyalanmış kod, filtreye özensiz görünür.
- **Bağlantı kısaltıcılar.** bit.ly gibi kısa bağlantılar nereye gittiklerini gizler. Hem filtreler hem okuyucular bunlara güvenmez.

## Web siteleri için spam puanı farklı bir şeydir

SEO araçlarında da "Spam Score" ifadesini görebilirsiniz. SEO, bir web sitesinin arama sonuçlarında daha üstte görünmesini sağlama çalışmasıdır. Bir SEO şirketi olan Moz, Spam Score ile bir web sitesinin Google'ın cezalandırdığı sitelere ne kadar benzediğini tahmin eder. Bu, e-postalar için değil, web siteleri için bir puandır. E-postanızın gelen kutusuna ulaşıp ulaşmamasıyla hiçbir ilgisi yoktur.

## E-posta spam puanınızı nasıl kontrol edersiniz?

1. mail-tester.com adresine gidin. Site size bir test e-posta adresi gösterir.
2. Gerçek e-postanızı, normalde kullandığınız araçtan bu adrese gönderin.
3. Sonuç sayfasını açın. Sayfa 10 üzerinden bir puan gösterir ve bulduğu her sorunu listeler.
4. Konu satırınızı ve metninizi [spam kelime kontrol aracımıza](/spam-word-checker) (İngilizce) yapıştırın. Araç riskli kelimeleri, büyük harfleri ve bağlantı kısaltıcıları tarayıcınızda işaretler.

mail-tester.com'da yüksek puan daha iyidir. SpamAssassin'de ise düşük puan daha iyidir. Yalnızca sayıyı değil, sorunların listesini de okuyun.

## Spam puanınızı nasıl düşürürsünüz?

1. Gönderim alan adınız için SPF, DKIM ve DMARC kurun.
2. Gönderim IP adresinizin bir kara listede olmadığını kontrol edin. MXToolbox gibi bir araç bunu yapabilir.
3. Konu satırlarını normal harflerle yazın. En fazla bir ünlem işareti kullanın.
4. Bağlantı kısaltıcılar yerine kendi alan adınıza giden tam bağlantılar kullanın.
5. Tek bir büyük resim yerine metin ve resimleri birlikte gönderin.
6. Bir web sitesinden kopyalanmış kod yerine e-posta aracınızın düzenleyicisinden gelen temiz HTML kullanın.
7. Her değişiklikten sonra yeniden test edin.

## Spam puanı ve e-posta doğrulama

[E-posta doğrulama](/) yapmak spam puanınızı değiştirmez. Puan, e-postanızın içeriği ve ayarlarıyla ilgilidir. Doğrulama aracı bunların hiçbirine dokunmaz. Bir [mail adresi doğrulama aracının](/email-checker) yaptığı şey, siz göndermeden önce var olmayan adresleri bulmaktır. Bir [toplu mail doğrulama aracı](/bulk-email-verifier) bu adresleri bütün bir listeden kaldırır. Bu da bounce'ları azaltır ve artık var olmayan adresleri [spam tuzağına](/glossary/spam-trap) dönüşmeden önce kaldırır. Bounce'lar ve spam tuzakları gönderen itibarınızı etkiler. Gmail gibi büyük sağlayıcılar da kararlarını içerik puanına göre değil, çoğunlukla itibara göre verir.
