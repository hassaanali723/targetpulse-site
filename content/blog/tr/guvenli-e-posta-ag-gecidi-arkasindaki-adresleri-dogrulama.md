---
title: "Güvenli e-posta ağ geçidi arkasındaki adresler nasıl doğrulanır?"
seoTitle: "SEG arkasındaki e-posta adresleri nasıl doğrulanır?"
description: "Proofpoint, Mimecast ve Barracuda her adresi ağ geçidinde kabul eder ve normal doğrulamayı bozar. Bu alan adlarında ne olduğu ve nasıl sonuç alınacağı."
slug: guvenli-e-posta-ag-gecidi-arkasindaki-adresleri-dogrulama
date: 2026-11-05
keyword: SEG korumalı e-posta doğrulama
image: /blog/covers/tr/guvenli-e-posta-ag-gecidi-arkasindaki-adresleri-dogrulama.webp
imageAlt: Ağ geçidinin dış sınırında her adresi kabul eden Proofpoint, Mimecast ve Barracuda
cta: Ağ geçidinin arkasındaki kişilere yeniden ulaşın
---

Bir doğrulama raporunu dışa aktardığınızda en iyi kurumsal kişilerinizin şüphe uyandıracak kadar büyük bir kısmının "bilinmiyor" sonucuyla döndüğünü fark ettiyseniz, bunun bir güvenli e-posta ağ geçidinden (SEG) kaynaklanma olasılığı yüksektir. Belirti tamamen aynı görünse de sorun bir catch-all alan adı değildir. Sorun bir ağ geçididir.

Bu ayrım önemlidir, çünkü çözüm farklıdır. Ayrıca ağ geçitlerinin arkasındaki kişiler genellikle asıl ulaşmak istediğiniz kişilerdir. Küçük şirketler nadiren ağ geçidi kullanır. Bankalar, sigorta şirketleri, hastaneler, üniversiteler ve Fortune 500 şirketlerinin çoğu kullanır.

## Doğrulama aracı başarısız olduğunda ne yapıyor?

Standart bir doğrulama kısa bir konuşmadır. Doğrulama aracınız, alan adının MX kayıtlarında yazan e-posta sunucusuna bağlanır. MX kaydı, bir alan adına gelen e-postayı hangi sunucunun aldığını gösteren DNS kaydıdır. Araç sunucuyu selamlar, bir gönderici bildirir, sonra alıcıyı bildirir ve bekler. Posta kutularının gerçek bir listesini tutan sunucu dürüst yanıt verir. Var olan bir adrese evet, var olmayan bir adrese hayır der. Doğrulama aracınız da bu yanıtı kaydeder.

Güvenli e-posta ağ geçidi, gerçek e-posta sunucusunun önünde duran bir filtreleme katmanıdır. Alan adına gelen her mesaj önce ağ geçidine ulaşır. Mesaj burada kötü amaçlı yazılım, kimlik avı ve politika ihlallerine karşı taranır. İçeriye ancak bundan sonra aktarılır. Proofpoint, Mimecast, Barracuda, Cisco ve bir düzine küçük üretici bu şekilde çalışır.

Ağ geçidinin hangi posta kutularının var olduğunu bilmesi için bir neden yoktur. Görevi dizin sorgulamak değil, filtrelemektir. Bu yüzden doğrulama aracınız belirli bir alıcıyı sorduğunda ağ geçidi kabul eder. Gerçek adresleri kabul eder, yazım hatalı adresleri kabul eder, 2019'da işten ayrılmış kişilerin adlarını kabul eder. Kabul işlemi dış sınırda gerçekleşir. Posta kutusunun var olup olmadığına ise bu sınırın arkasında, doğrulama aracınızın hiç ulaşamadığı bir yerde karar verilir.

Dışarıdan bakıldığında bu davranış bir catch-all alan adından ayırt edilemez. Konuşma aynıdır, yanıt aynıdır ve sonuç yine işe yaramaz.

## "Riskli" sonucunda durmak neden yanlış?

Çoğu doğrulama aracı bu duruma adresi etiketleyerek yanıt verir. Etiket üreticiye göre değişir. Kimin dışa aktarımını okuduğunuza bağlı olarak risky, unknown, accept-all, catch-all veya ok_for_all görürsünüz. Hepsinin anlamı aynıdır: sonucu belirleyemedik.

Bu yanıt kendi sınırları içinde dürüsttür. Sorun, bundan sonra olanlarda başlar. Gönderim araçları bu etiketleri genellikle yumuşak bir "hayır" olarak değerlendirir ve çoğu kişi de aynısını yapar. Çünkü kimse gönderen itibarını bir "belki" için riske atmak istemez. Böylece bu adresler kampanyadan çıkarılır ve sessizce unutulur.

Bir B2B listesinde bu, kişilerinizin yaklaşık %30'u demektir. Büyük kurumsal şirketlerin ağırlıkta olduğu bir listede oran daha yüksektir. Bu kişileri edinmek için para ödediniz, doğrulamak için bir kez daha ödediniz. Sonuç ise belirsiz bir yanıt oldu.

## Ağ geçidini tanıyan bir kontrol neyi farklı yapar?

Kısaca, ağ geçidine yanıtlayamayacağı bir soruyu sormayı bırakırsınız. Onun yerine yanıtlayabileceği başka bir soru bulursunuz.

Ağ geçitleri sessiz değildir. Ürüne, yapılandırmaya ve adrese bağlı olarak belirli kalıplarla davranırlar. Ağ geçidinin sonunda içeri ileteceği bir adres ile sonunda reddedeceği bir adres arasında yanıt süresi farklıdır. Hata kodları ve bunların tam metni, üreticiler arasında ve sürümler arasında farklıdır. Bazı ağ geçitleri reddi, çoğu doğrulama aracının dinlemeyi bıraktığı noktada değil, işlemin daha ilerisinde gösterir. Bazı ağ geçitleri aynı alan adında gerçek bir posta kutusuna ve rastgele bir karakter dizisine farklı davranır. Neyi karşılaştıracağınızı biliyorsanız bu farkı görebilirsiniz.

Bu sinyalleri okumak için önce ağ geçidinin parmak izi çıkarılır, yani hangi ürün olduğu belirlenir. Ardından genel kontrol yerine o ürün için geliştirilmiş bir kontrol uygulanır. Ağ geçidi kapsamının genellikle bir sayı olarak belirtilmesinin nedeni budur. Giggal.ai 15 ağ geçidini tespit eder. Proofpoint, Mimecast ve Barracuda da bunların arasındadır. Bunu deneyen diğer araçlar üç veya beş ağ geçidinin adını verir. Hiçbir ağ geçidi adı vermeyen bir doğrulama aracı, neredeyse kesinlikle genel sonucu döndürüyor ve ona riskli etiketi koyuyordur.

Sınırlar konusunda açık olmak gerekir. Bu yöntem bir dizin sorgusu değil, gözlenen davranıştan yapılan bir çıkarımdır. Bu yüzden hatasız değildir ve dürüst hiçbir üretici size hatasız olduğunu söylemez. Güvenilir şekilde yaptığı şey, kullanılamayan büyük bir bölümü büyük ölçüde kullanılabilir hâle getirmektir. Bu, hatasız sonuç iddiasından farklı ve daha mütevazı bir iddiadır.

## Listenizin ne kadarının etkilendiğini bulma

Sorunun ağ geçitleri olup olmadığını kontrol etmek için bir araca ihtiyacınız yok. Listenizdeki alan adlarının MX kayıtlarına ihtiyacınız var.

Her adresin alan adı kısmını alın, tekrarları kaldırın ve her biri için [MX kayıtlarını sorgulayın](/mx-lookup). Proofpoint arkasındaki bir alan adı, içinde pphosted veya ppe-hosted geçen sunucu adlarını gösterir. Mimecast alan adları, genellikle bir bölge koduyla birlikte mimecast.com sunucularını gösterir. Barracuda, barracudanetworks.com olarak görünür. Cisco, iphmx.com olarak görünür. Microsoft 365 ve Google Workspace alan adları sırasıyla outlook.com ve google.com sunucularını gösterir. Bunlar ağ geçidi değildir, ancak yine de catch-all olarak yapılandırılmış olabilirler.

Bu listeyi, doğrulama aracınızın sonuç veremediği adreslerle karşılaştırın. Örtüşme büyükse sorunun kaynağı ağ geçididir. Aynı aracı tekrar tekrar çalıştırmak sonucu değiştirmez.

## Bu iş için araç seçme

Üç soru, bu durumu çözebilen bir doğrulama aracını çözemeyenden ayırır.

Tespit ettiği ağ geçitlerinin adını veriyor mu? Bu konuda gerçekten çalışan bir üretici bir liste ya da en azından bir sayı yayımlar. Çünkü satılan şey tam olarak budur. Hiçbir ürün adı vermeden "gelişmiş tespit" gibi belirsiz ifadeler kullanılıyorsa bu genellikle çözüm değil, yalnızca tespit anlamına gelir. Yani araç bir ağ geçidi olduğunu söyleyebilir, ancak posta kutusunun gerçek olup olmadığını yine de söyleyemez.

Geçerli veya geçersiz sonucu mu döndürüyor, yoksa bir etiket mi? Mimecast arkasındaki bir adres için sonucun nasıl göründüğünü açıkça sorun. Yanıt, riskli işareti ve bir güven puanı alacağınız yönündeyse, yalnızca biraz daha iyi bir etiket satın almış olursunuz.

Bu işi gerektiren adresler için maliyet ne? Ağ geçidi ve catch-all çözümlemesi üreticiye daha pahalıya mal olur. Bu yüzden çoğu üretici bunu farklı fiyatlandırır. Bazıları standart kredinin birkaç katını alır. Bazıları bunu ayrı ve daha küçük bir kotadan düşer ve bu kota standart kotadan önce biter. İki yöntem de mantıksız değildir. Ancak %40'ı büyük kurumsal alan adlarından oluşan bir listeyi yüklemeden önce bunu bilmek istersiniz. Giggal.ai tüm doğrulamaları, diğer tüm işlemlerle aynı bakiyeden, adres başına sabit 1 kredi olarak ücretlendirir.

## Pratikte izlenecek sıra

Listenizi şu anda kullandığınız araçtan geçirin ve dışa aktarılan dosyayı saklayın. Riskli, bilinmiyor veya accept-all olarak dönen her satırı ayırın. Bu alan adlarının MX kayıtlarını kontrol edin ve kaçının sıradan catch-all değil, ağ geçidi olduğunu görün. Ardından yalnızca bu bölümü, bu iş için geliştirilmiş bir araçtan geçirin ve iki dışa aktarımı yan yana karşılaştırın.

Önemli olan bu karşılaştırmadır. Bu alandaki her üretici, biz de dahil, fiyat sayfasında birbirine benzeyen doğruluk iddiaları sunar. Anlamlı olan tek ölçüt şudur: Kullanılamaz durumdaki kişilerinizden kaçı yeniden kullanılabilir hâle geldi ve geçerli olarak işaretlenen adresler, gönderim yaptığınızda e-postayı gerçekten kabul etti mi?

Bunu denemek isterseniz Giggal.ai kart bilgisi istemeden 1.000 ücretsiz kredi verir. Bu krediler adresleri tek tek kontrol etmek yerine toplu yüklemede kullanılabilir. Bu test ancak bu şekilde işe yarar bir sonuç verir. Ayrıca [catch-all ve accept-all alan adlarını nasıl doğruladığımızı](/catch-all-verification) veya [SEG doğrulama yaklaşımımızı](/seg-email-verification) daha ayrıntılı okuyabilirsiniz.
