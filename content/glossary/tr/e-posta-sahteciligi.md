---
title: E-posta sahteciliği (spoofing)
seoTitle: "E-posta sahteciliği (spoofing) nedir?"
description: E-posta sahteciliği (spoofing) nedir, sahte bir CEO e-postası örneği, e-posta buna neden izin verir, sahte e-posta nasıl anlaşılır, alan adınız nasıl korunur?
slug: e-posta-sahteciligi
date: 2026-11-05
updated: 2026-11-05
keyword: e-posta sahteciliği
short: E-posta sahteciliği (spoofing), sahte bir gönderen adresiyle e-posta göndermektir. Böylece e-posta başka birinden gelmiş gibi görünür. Dolandırıcılar bunu bir banka, bir tedarikçi veya kendi yöneticiniz gibi görünmek için kullanır. Bir alan adı için bunu durduran kayıtlar SPF, DKIM ve DMARC'tır.
related: dmarc, spf, dkim, dmarc-alignment, bimi, return-path
cta: E-posta doğrulama adresleri kontrol eder. DMARC ise gönderenleri kontrol eder
---

## E-posta sahteciliği nedir?

E-posta sahteciliği (spoofing), sahte bir gönderen adresiyle e-posta göndermek demektir. E-posta, tanıdığınız bir kişiden veya şirketten gelmiş gibi görünür. Gerçekte onu başka biri göndermiştir. Dolandırıcılar, insanlara sahte fatura ödetmek, şifre paylaştırmak veya zararlı dosya açtırmak için sahteciliği kullanır.

Sahte bir e-posta, From satırında gerçek bir adres gösterir. From satırı, gelen kutunuzda gördüğünüz gönderen adı ve adresidir. E-posta sahteciliğini benzer görünen bir adresten gönderilen e-postadan ayıran şey budur. İkisi de aşağıda açıklanmıştır.

## Örnek: CEO'dan gelmiş gibi görünen sahte bir e-posta

Sara, example.com alan adını kullanan bir şirketin finans bölümünde çalışır. Alan adı, bir e-posta adresinde @ işaretinden sonra gelen addır. Bir cuma günü saat 16.00'da Sara şu e-postayı alır.

- **From (Kimden):** David Brown, david.brown@example.com
- **Konu:** Bugün acil ödeme
- **Metin:** "Lütfen ekteki faturayı saat 17.00'den önce yeni tedarikçimize ödeyin. Toplantılardayım, bu yüzden yalnızca e-postayla yanıt verin."

David Brown gerçek CEO'dur ve adres onun gerçek adresidir. Ancak bu e-postayı David göndermedi. Onu, example.com ile hiçbir ilgisi olmayan bir sunucudan bir dolandırıcı gönderdi.

Sara ödeme yaparsa para dolandırıcının banka hesabına gider. Bu tür dolandırıcılığa çoğu zaman iş e-postası dolandırıcılığı (business email compromise) denir. İşe yarar, çünkü e-posta normal görünür ve acele edilmesini ister.

## E-posta sahteciliği neden mümkündür?

SMTP, e-postayı sunucular arasında gönderen protokoldür. İlk kez 1982'de tanımlandı. From adresini kontrol etmez. Herhangi bir e-posta sunucusu bu satıra herhangi bir adresi yazacak şekilde ayarlanabilir ve e-posta yine gönderilir.

Bu yüzden alıcı sunucunun From adresinin doğru olup olmadığını anlamak için yerleşik bir yolu yoktur. Daha sonra üç kontrolün eklenmesinin nedeni budur. Alan adı sahipleri bu kontrolleri DNS üzerinden yayımlar. DNS, bir alan adının ayarlarını listelediği herkese açık dizindir.

## Sahte bir e-postanın işaretleri

Sahte bir e-posta her ayrıntısıyla doğru görünebilir. Aşağıdaki işaretler onu fark etmenize yardımcı olur.

- **Reply-To adresi farklıdır.** Yanıtla düğmesine tıklayın ve adrese bakın. Adres bilinmeyen bir adrese dönüşüyorsa e-posta sahte olabilir.
- **Kontroller başarısız olur.** Gmail'de e-postayı açın, üç noktaya tıklayın ve "Orijinali göster" seçeneğini seçin. SPF, DKIM ve DMARC satırlarına bakın. DMARC FAIL güçlü bir uyarıdır.
- **Hızlıca para veya şifre ister.** Bugün ödeme yapma, banka bilgilerini değiştirme veya oturum açma talepleri, sahte e-postaların olağan hedefleridir.
- **Başka kanalları kullanmamanızı söyler.** "Yalnızca e-postayla" veya "beni aramayın" gibi ifadeler bir uyarı işaretidir.
- **Üslup veya imza yanlıştır.** Gerçek kişi belki hiç böyle yazmaz.

## Alan adınızı sahtecilikten nasıl korursunuz?

Birinin From satırına sizin adresinizi yazmasını engelleyemezsiniz. Ancak alıcı sunuculara bu e-postaları engellemelerini söyleyebilirsiniz. Bunun için üç DNS kaydı gerekir.

1. **SPF**, alan adınız adına e-posta göndermesine izin verilen sunucuları listeler. Bkz. [SPF kaydı](/glossary/spf).
2. **DKIM**, gerçek e-postalarınıza bir dolandırıcının oluşturamayacağı bir imza ekler. Bkz. [DKIM](/glossary/dkim).
3. **DMARC**, From satırında alan adınızı kullanan ama iki kontrolden de geçemeyen e-postalarla ne yapılacağını alıcı sunuculara söyler. Bkz. [DMARC](/glossary/dmarc).

DMARC `p=reject` olduğunda, politikanıza uyan alıcılar sahte e-postayı kimseye ulaşmadan engeller. `p=none` olduğunda DMARC size yalnızca rapor gönderir. E-postayı durdurmaz. DMARC'ın geçmesi için SPF veya DKIM, From satırında görünen alan adının aynısı için geçmelidir. Buna [DMARC hizalaması](/glossary/dmarc-alignment) denir.

## Sahtecilik, kimlik avı ve benzer görünen alan adları

Bu terimler sık sık karıştırılır. Farklı anlamlara gelirler.

| Terim | Nedir? | Örnek |
| --- | --- | --- |
| E-posta sahteciliği (spoofing) | Gerçek adresinizi izniniz olmadan From satırında kullanan bir e-posta | From: billing@example.com, bir dolandırıcı tarafından gönderilmiş |
| Kimlik avı (phishing) | Sizi kandırarak para, veri veya şifre vermenizi sağlamaya çalışan her e-posta | Giriş bağlantısı içeren sahte bir "hesabınız kilitlendi" e-postası |
| Benzer görünen alan adı | Sizinkine benzemesi için kaydedilmiş ayrı bir alan adı | exampel.com veya example-billing.com |

Sahtecilik kimlik avının bir yöntemidir. Benzer görünen alan adı da başka bir yöntemdir. DMARC, sizin tam alan adınızla yapılan sahteciliği durdurur. Benzer görünen bir alan adını durduramaz. O alan adının sahibi dolandırıcıdır, bu yüzden SPF, DKIM ve DMARC kayıtlarını kendisi kurabilir.

## Sahte bir e-posta alırsanız ne yapmalısınız?

1. Yanıt vermeyin, bağlantılara tıklamayın ve ekleri açmayın.
2. Talebi başka bir yolla kontrol edin. Kişiyi, e-postadaki numarayı değil, zaten bildiğiniz bir telefon numarasını kullanarak arayın.
3. E-postayı bildirin. Gmail'de üç nokta menüsünü açın ve "Report phishing" (kimlik avını bildir) seçeneğini seçin. Outlook'ta "Report" (Bildir) düğmesini kullanın.
4. E-postada şirketinizin alan adı kullanılıyorsa BT ekibinize haber verin. Ekip, DMARC raporlarınızı kontrol edebilir.
5. Ödemeyi zaten yaptıysanız veya şifrenizi paylaştıysanız hemen bankanızla iletişime geçin veya şifrenizi değiştirin.

## E-posta sahteciliği ve e-posta doğrulama

Bir [mail adresi doğrulama aracı](/email-checker) sahteciliği tespit etmez. Bir mesajı gerçekte kimin gönderdiğini değil, bir adresin var olup olmadığını ve e-posta kabul edip etmediğini söyler. Sahte bir e-posta gerçek bir adres kullanır, bu yüzden o adres kontrolde yine geçerli çıkar. Bir [toplu mail doğrulama aracı](/bulk-email-verifier), kendi gönderiminiz tarafında yardımcı olur. Bir kampanyadan önce listenizden artık var olmayan adresleri kaldırır. Sahteciliği durdurmak için SPF, DKIM ve DMARC kullanın. Bounce oranınızı düşük tutmak için de [e-posta doğrulama](/) kullanın.
