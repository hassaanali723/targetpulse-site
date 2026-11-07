---
title: "E-posta adresleri büyük küçük harfe duyarlı mı?"
description: "Çoğunlukla hayır: Gmail ve Outlook büyük harfleri dikkate almaz, ama standart @ öncesini duyarlı sayabilir. Ne zaman önemlidir ve adresler nasıl saklanır?"
slug: e-posta-adresleri-buyuk-kucuk-harfe-duyarli-mi
date: 2026-11-05
updated: 2026-11-05
keyword: e-posta adresleri büyük küçük harfe duyarlı mı
image: /blog/covers/tr/e-posta-adresleri-buyuk-kucuk-harfe-duyarli-mi.webp
imageAlt: Büyük küçük harf duyarlılığı kapağı, alan adları, Gmail, Outlook ve veritabanları için kurallar
cta: Bir e-posta adresinin gerçekten var olup olmadığını kontrol edin
---

E-posta adresleri çoğunlukla büyük küçük harfe duyarlı değildir. John.Smith@gmail.com veya john.smith@gmail.com yazdığınızda e-posta aynı gelen kutusuna ulaşır. @ işaretinden sonraki kısım büyük harfleri hiç dikkate almaz. Dikkat edilmesi gereken yer @ işaretinden önceki kısımdır. E-posta standardı, teknik olarak bir sunucunun Smith ve smith adlarını iki farklı kişi gibi ele almasına izin verir. Bir kayıt formu veya bir e-posta listesi yönetiyorsanız bunu bilmeniz faydalı olur.

## @ işaretinden sonraki kısım hiçbir zaman duyarlı değildir

@ işaretinden sonra gelen alan adı hiçbir zaman büyük küçük harfe duyarlı değildir. RFC 5321'e göre posta kutusu alan adları normal DNS kurallarına uyar ve DNS harflerin büyük ya da küçük olmasını dikkate almaz. Bu yüzden GMAIL.COM, Gmail.com ve gmail.com tam olarak aynı e-posta sunucusunu gösterir. Alan adını büyük veya küçük harfle yazmanız, mesajınızın gideceği yeri değiştirmez.

## @ işaretinden önceki kısım büyük küçük harfe duyarlı mı?

Yerel kısım (local-part), yani @ işaretinin solundaki kullanıcı adı, farklı çalışır. RFC 5321'in 2.4 numaralı bölümüne göre "bir posta kutusunun yerel kısmı büyük küçük harfe duyarlı olarak ele alınmak ZORUNDADIR." Mesajınızı ileten sunucular büyük ve küçük harfleri yazıldığı gibi korumalıdır. `Smith` ve `smith` adreslerinin iki ayrı kişiye ait olup olmadığına, posta kutusunu barındıran alıcı sunucu karar verir.

Aynı bölüm şu uyarıyı da yapar: "Posta kutusu yerel kısımlarının büyük küçük harf duyarlılığından yararlanmak birlikte çalışabilirliği zorlaştırır ve önerilmez." Aynı şirkette JSmith@ ve jsmith@ adreslerini kullanan iki çalışanı düşünün. E-postalarının ne sık karışacağını tahmin edebilirsiniz. Büyük sağlayıcılar bu sorunu, harf büyüklüğünü tamamen yok sayarak önler.

## Gmail ve Outlook

Bireysel e-postaların çoğunu taşıyan sağlayıcılar, büyük küçük harf ayrımını tamamen yok saymaya karar verdi. Gmail yardım topluluğundaki ürün uzmanları, Gmail'in hem hesap oluştururken hem de e-posta gelirken büyük harfleri dikkate almadığını doğrular. Biri `JaneDoe@gmail.com` adresine de yazsa `janedoe@gmail.com` adresine de yazsa, Google iki mesajı da aynı posta kutusuna teslim eder. Google ayrıca `@googlemail.com` ve `@gmail.com` uzantılarını aynı adres olarak kabul eder.

Gmail, bireysel adreslerdeki noktaları da dikkate almaz. Bu yüzden `jane.doe@gmail.com` ve `janedoe@gmail.com` aynı gelen kutusuna ulaşır. Ancak bunun her yerde geçerli olduğunu varsaymayın. Google'ın belgelerine göre iş veya okul alan adları üzerinden yönetilen Google Workspace hesaplarında noktalar önemlidir. Noktalar ve büyük harfler ayrı kurallardır. Gmail noktaları yok sayıyor diye başka bir sağlayıcının da yok saydığını varsaymayın.

Microsoft'un yanıtı da benzerdir. Microsoft destek forumundaki bir yanıtta, @ işaretinden sonraki kısmın hiçbir zaman büyük küçük harfe duyarlı olmadığı açıklanır. Aynı yanıta göre kullanıcı adındaki harf büyüklüğünün önemi sağlayıcıya bağlıdır ve Outlook ile Gmail gibi büyük sağlayıcılar bunu yok sayar. Yanıt ayrıca birkaç şirketin büyük küçük harfe duyarlı kendi sunucularını çalıştırdığını ekler.

## Büyük harfler hangi durumlarda yine de sorun çıkarabilir

Sorun genellikle oturum açarken çıkar. Telefon klavyesi ilk harfi otomatik olarak büyüttüğü için `Sarah@example.com` ile kaydolduğunuzu düşünün. Daha sonra `sarah@example.com` yazarak oturum açtığınızda, basit bir sistem hesap bulunamadığını bildirir. Kullanıcı adresini değiştirmemiştir. Ancak oturum açma formu metni katı bir büyük küçük harf duyarlılığıyla karşılaştırmıştır.

Listelerde ve CRM sistemlerinde de sorunun kendine özgü bir biçimi vardır. Biri `Bob@company.com` ile kaydolup daha sonra bir rehberi `bob@company.com` ile indirdiğinde, birçok platform bunu iki ayrı potansiyel müşteri olarak sayar. Bu durum metriklerinizi şişirir ve kişilere aynı kampanyaları iki kez gönderir. Bir pazarlama listesini [doğrulamadan veya ona göndermeden](/email-list-cleaning) (İngilizce) önce, büyük küçük harfi dikkate almadan yinelenen kayıtları temizleyin.

Bir de harf büyüklüğünü gerçekten katı biçimde ele alan nadir şirket sunucuları vardır. Bunlar, Microsoft forumundaki yanıtın bahsettiği istisnadır. Bir kişi kartvizitinde adresini `M.MacDonald@specialtycorp.com` şeklinde yazıyorsa, ona yazarken bu büyük harfleri koruyun. Bu, standart sistemlere zarar vermez. Harf büyüklüğünü önemseyen sistemlerde ise teslimat sorunlarını önler.

## E-posta adreslerini saklıyorsanız

Web uygulamaları geliştiriyor veya kişi veritabanları yönetiyorsanız, harf büyüklüğünü koruyan bir yaklaşım kullanın. Adresi kullanıcının yazdığı şekliyle saklayın, ancak tüm karşılaştırmaları, aramaları ve benzersizlik kontrollerini küçük harfle yapın.

Orijinal girişi korumak, profillerde ve e-posta başlıklarında kullanıcının tercih ettiği görünüme saygı gösterir. Küçük harfe dönüştürerek karşılaştırmak ise yinelenen hesapları önler. Biri `IStillUse@AOL.COM` ile kaydolursa, görünen adını küçük harfe zorlamayın. Ancak `iSTilLUSE@aol.com` adresini bu adresin bir kopyası olarak kabul edin.

PostgreSQL'de benzersizlik için düz bir benzersizlik kısıtlaması eklemek yerine, küçük harfe dönüştürülmüş ifadeyi dizinleyin:

```sql
CREATE UNIQUE INDEX users_email_lower ON users (lower(email));
```

PostgreSQL ayrıca metinleri büyük küçük harf ayrımı yapmadan karşılaştıran `citext` uzantısını da sunar. MySQL'de varsayılan karşılaştırma kuralı (`utf8mb4_0900_ai_ci`) zaten büyük küçük harfe duyarsızdır. Bu yüzden standart benzersiz anahtarlar, ek fonksiyon gerektirmeden farklı harf büyüklüğündeki kopyaları yakalar.

Arka uç dillerinde, özellikle Java'da, küçük harfe dönüştürme tuzağına dikkat edin. Java'da `email.toLowerCase()` çağrısı sunucunun varsayılan yerel ayarını (locale) kullanır. Türkçe yerel ayarında büyük Latin harfi `I`, `i` yerine `ı` harfine (noktasız küçük i) dönüşür. Bu da `INFO@example.com` gibi adresleri bozar. Bu hatayı önlemek için `Locale.ROOT` değerini parametre olarak verin:

```java
// Locale.ROOT avoids language-specific letter mapping like Turkish dotless i
String cleanEmail = email.toLowerCase(Locale.ROOT);
```

JavaScript'teki `toLowerCase()` bu tuzaktan etkilenmez, çünkü sunucunun yerel ayarlarını değil, Unicode'un varsayılan eşlemelerini kullanır. Yalnızca `toLocaleLowerCase()` yerel ayara bağlıdır.

Hatalı biçimleri ve kötü girişleri veritabanınıza ulaşmadan yakalamak için kayıt sırasında adresleri bir [e-posta doğrulama API'siyle](/email-validation-api) (İngilizce) kontrol edin. Bu, kişi henüz sayfadayken yazım hatalarını ve çalışmayan alan adlarını yakalar.

## Sık sorulan sorular

**Gmail büyük küçük harfe duyarlı mı?**
Hayır, Gmail hesap oluştururken ve mesaj teslim ederken büyük küçük harf ayrımını dikkate almaz. Adresiniz john.doe@gmail.com ise JOHN.DOE@gmail.com ve John.Doe@googlemail.com adreslerine gönderilen mesajları da alırsınız. Mevcut bir kullanıcının adresinden yalnızca harf büyüklüğüyle ayrılan yeni bir hesap açamazsınız.

**E-posta adresimi büyük harflerle yazmam sorun olur mu?**
Bireysel ve kurumsal gelen kutularına yapılan normal gönderimlerde büyük harfler teslimatı engellemez. Alıcı e-posta sunucusu harf büyüklüğünü dikkate almaz ve mesajı normal şekilde teslim eder. Yalnızca e-posta adreslerini birebir metin olarak karşılaştıran oturum açma formlarında dikkatli olmanız gerekir.

**Bir e-posta kimliği (email ID) büyük küçük harfe duyarlı mı?**
Uygulamada hayır. E-posta kimliği, e-posta adresinin başka bir adıdır. Gmail, Outlook ve diğer büyük sağlayıcılar bu adreslerdeki büyük harfleri dikkate almaz. Standart, bir sunucunun @ işaretinden önceki büyük harfleri farklı saymasına izin verir. Ancak bu nadirdir. Bu yüzden kimliğinizi okunması kolay olsun diye büyük harflerle yazmanız, büyük olasılıkla hiçbir e-postayı kaçırmanıza yol açmaz.

**E-posta adreslerini küçük harfle mi kaydetmeliyim?**
Yinelenen hesapları ve oturum açma hatalarını önlemek için e-posta adreslerini küçük harfle karşılaştırmalı ve dizinlemelisiniz. Kullanıcının orijinal yazımını bir görünen ad sütununda tutmak, bildirimleri düzgün biçimlendirmenizi sağlar. Yalnızca bir sütun tutabiliyorsanız, adresi yazıldığı gibi saklayın ve lower() ile karşılaştırın. Böylece orijinal yazımı kaybetmezsiniz.

**Büyük harfler bir e-postanın bounce olmasına neden olabilir mi?**
Çok nadiren. Bu yalnızca Admin@ ve admin@ adreslerini ayrı posta kutuları olarak ele alacak şekilde ayarlanmış alışılmadık bir sunucuda olur. Büyük harf içeren bir adres bounce olursa, önce başka bir nedene bakın. Örneğin bir yazım hatası veya artık var olmayan bir posta kutusu olabilir. Bounce mesajındaki kod hangisi olduğunu söyler. Bunu [hard bounce ve soft bounce](/blog/hard-bounce-vs-soft-bounce) yazımızda açıklıyoruz.

Büyük harfler bir e-postanın ulaşmasını engellemez, ancak [bir yazım hatası](/email-checker) engeller. Bir sonraki gönderimden önce kişi listenizi temizliyorsanız, çalışmayan posta kutularını ve bozuk alan adlarını önceden yakalamak için listeyi [Giggal.ai](/email-list-cleaning) (İngilizce) ile kontrol edin.
