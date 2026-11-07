---
title: "Catch-all e-posta adresi nedir? Anlamı ve doğrulanması"
seoTitle: "Catch-all e-posta adresi nedir ve nasıl doğrulanır?"
description: "Catch-all e-posta adresi, gerçek olsun olmasın her ada gelen e-postayı kabul eden bir alan adındadır. Anlamı, neden kurulduğu ve nasıl doğrulanacağı."
slug: catch-all-e-posta-adresi-nedir
date: 2026-11-05
updated: 2026-11-05
keyword: catch-all e-posta nedir
image: /blog/covers/tr/catch-all-e-posta-adresi-nedir.webp
imageAlt: Gerçek olsun olmasın her adresi kabul eden bir catch-all alan adı
cta: Catch-all adreslerinizin gerçek durumunu öğrenin
---

Catch-all e-posta adresi, olası her ada gelen e-postayı kabul edecek şekilde yapılandırılmış bir alan adındaki adrestir. Adresin arkasında gerçek bir posta kutusu olup olmaması bunu değiştirmez. Bir doğrulama raporunda catch-all olarak işaretlenmiş bir adres gördüyseniz ve arama kutusuna catch-all e-posta adresi nedir yazdıysanız kısa cevap şudur: Bu etiket kişiyi değil, alan adını tanımlar. Alan adı her şeyi kabul eder. Bir mesaj sales@ adresine gitse, bir ad yanlış yazılsa veya yıllar önce ayrılmış bir çalışana gönderilse bile reddedilmez, bir yere ulaşır.

Catch-all adreslerle çalışmanın zor olmasının nedeni bu tek tasarım tercihidir. Listenizdeki catch-all adreslerle ne yapacağınıza karar vermeden önce bunu anlamaya değer.

## Bu etiketi genellikle nerede görürsünüz?

Çoğu kişi bu terimle iki yerden birinde karşılaşır. Birincisi bir doğrulama dışa aktarımıdır. Burada tamamen sıradan görünen bir adresin satırı catch-all veya accept-all (her adresi kabul eden) olarak işaretlenmiştir. İkincisi, bir adreste durup sizden karar vermenizi isteyen bir gönderim aracıdır. Araç bunu yapar, çünkü adresi net olarak sınıflandıramaz.

Her iki durumda da adresin kendisi hiçbir ipucu vermez. Bir catch-all alan adı büyük bir şirkete de iki kişilik bir ajansa da ait olabilir. @ işaretinden önceki ad da diğer adlardan farksız görünür. Bir catch-all adresle karşı karşıya olduğunuzu ancak bir aracın koyduğu etiket sayesinde anlarsınız. Bu terimin ilk seferde insanları şaşırtmasının nedeni budur.

## Bir şirket neden tüm alan adının her şeyi kabul etmesini ister?

Catch-all alan adlarının çoğu olağandışı bir şeyin sonucu değildir. E-posta sunucusunu yöneten kişiler için anlamlı nedenlerle bilerek kurulurlar.

En yaygın neden ortak departman takma adlarıdır. Örneğin info@, careers@ ve billing@ gibi adresler tek bir kişiye bağlı değildir. Catch-all yapılandırması sayesinde bunların hiçbirinin elle oluşturulması gerekmez. Yazım hatalarına tolerans da bir nedendir. Bir müşteri john yerine jon adresine yazarsa, her şeyi kabul eden bir alan adı mesajı geri göndermek yerine yine de teslim eder.

Personel değişimi de şirketleri aynı yöne iter. Biri işten ayrıldığında eski adresine aylarca e-posta gelmeye devam eder. Bu e-postaları bir yöneticiye veya ortak bir gelen kutusuna yönlendirmek, reddetmekten daha kolaydır. Birleşmeler ve satın almalar da buna eklenir. Çünkü iki şirket çoğu zaman birkaç alan adını birleştirir ve eski adreslerin hepsini tek tek denetlemek yerine her şeyi kabul etmeyi tercih eder.

Uygulamada catch-all alan adlarının çoğunu küçük bir BT ekibi yönetir. Bu ekip, e-postayı kabul etmenin geçerli alıcıların listesini tutmaktan daha az iş olduğuna karar vermiştir.

## Catch-all e-posta adresi ve accept-all: aynı yapılandırma

İki terimi de görürsünüz, bazen aynı sonuç ekranında. Catch-all daha eski ve daha yaygın etikettir. Accept-all ise bazı sağlayıcıların ve araçların bunun yerine yazdığı etikettir. İkisi arasında davranış farkı yoktur. İkisi de alıcı sunucunun, alan adındaki herhangi bir ada gönderilen e-postayı almaya razı olduğu anlamına gelir. Bir araç catch-all, diğeri accept-all diyorsa size aynı şeyi söylüyorlardır.

## Catch-all bir adresi doğrulamak neden zordur?

Doğrulama normalde alıcı sunucuya bir soru sorarak çalışır. Doğrulama aracı, belirli bir adres için teslim sürecini başlatır ve sunucunun nasıl yanıt verdiğini okur. Gerçek posta kutularının listesini tutan bir sunucu, tanımadığı bir adı reddeder. Bu ret, adresin geçersiz olduğunun işaretidir.

Catch-all bir sunucu bu işareti hiçbir zaman vermez. Her alıcıyı kabul edecek şekilde ayarlandığı için gerçek bir ada da açıkça sahte bir ada da aynı başarılı yanıtı verir: basit bir SMTP 250 yanıtı. Doğrulama aracı posta kutusunun var olup olmadığını sordu. Herhangi bir ad için de gelecek olan bir evet yanıtı aldı. Bu yüzden normal test sonuna kadar çalışır, ama işinize yarayacak hiçbir sonuç döndürmez.

## Catch-all sonucu listeniz için ne anlama gelir?

Catch-all sonucu tek başına hiçbir şeyi kesinleştirmez. Adresin geçersiz olduğu anlamına gelmez, posta kutusunun gerçek olduğunu da doğrulamaz. Sorunun standart kontrolle yanıtlanamadığı anlamına gelir. Arkasındaki posta kutusu aktif bir çalışana ait olabilir ya da yıllardır kullanılmıyor olabilir. Etiket tek başına bu ikisini ayıramaz.

Araçların catch-all adresleri geçerli veya geçersiz olarak değil de temkinli bir durum altında sınıflandırmasının nedeni budur. Bu durum çoğu zaman Riskli (Risky) veya Catch-All olur. Kurumsal bir listede bu adreslerin payı nadiren küçüktür. Grubun tamamını gereksiz veri saymak, gerçek kişileri fark ettirmeden listeden çıkarır. Grubu güvenli saymak ise bounce'lara yol açar.

## Bunlarla ne sıklıkla karşılaşırsınız?

Bunlar istisnai bir durum değildir. Tipik bir kurumsal listede adreslerin azımsanmayacak bir kısmı catch-all alan adlarındadır. Kişilerinizden ne kadar çoğu orta ve büyük ölçekli şirketlerde çalışıyorsa bu oran o kadar yükselir. Çünkü bu şirketlerde ortak takma adlar ve yönetilen e-posta sistemleri olağandır. Büyük ücretsiz e-posta sağlayıcıları neredeyse hiçbir zaman bu şekilde davranmaz. Bu yüzden kişisel adreslerden oluşan bir listede çok az catch-all adres görülür. İş adreslerinden oluşan bir listede ise çok sayıda görülebilir. Catch-all etiketinin en çok satış ve e-posta kampanyaları için önemli olan listelerde çıkmasının nedeni bu dağılımdır. Bu nedenle bu etiketle ne yapacağınıza genel bir kuralla değil, birkaç dakika düşünerek karar vermeye değer.

## Bundan sonra ne yapmalısınız?

Tek bir catch-all adresi hemen kontrol etmek için [mail adresi doğrulama aracı](/email-checker) tam doğrulamayı çalıştırır. Catch-all etiketi yerine geçerli veya geçersiz sonucu döndürür.

Gerçekçi üç seçeneğiniz var. Tüm catch-all adresleri silebilirsiniz. Bu durumda e-postanızı açacak kişileri attığınızı kabul edersiniz. Yine de bu adreslere gönderebilirsiniz. Bu durumda daha yüksek bir bounce oranını ve bunun getirdiği itibar kaybını kabul edersiniz. Ya da bu adresleri standart SMTP testinden daha derin bir düzeyde kontrol edebilirsiniz. Gerçek kişileri bounce olmadan tutmanın tek yolu bu son seçenektir.

İstediğiniz yol bu sonuncusuysa, her adresin hangi tarafta olduğunu tahmin etmek yerine [catch-all ve riskli e-postaları doğrulayabilirsiniz](/catch-all-verification).
