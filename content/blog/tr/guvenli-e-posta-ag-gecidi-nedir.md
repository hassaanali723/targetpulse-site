---
title: "Güvenli e-posta ağ geçidi (SEG) nedir?"
description: "Güvenli e-posta ağ geçidi, şirketin e-posta sunucusunun önündeki filtreleme katmanıdır. Ne yaptığı, kimlerin ürettiği ve doğrulamayı neden zorlaştırdığı."
slug: guvenli-e-posta-ag-gecidi-nedir
date: 2026-11-05
keyword: güvenli e-posta ağ geçidi nedir
image: /blog/covers/tr/guvenli-e-posta-ag-gecidi-nedir.webp
imageAlt: E-posta sunucusu adına yanıt veren ve posta kutusunun durumunu gizleyen güvenli e-posta ağ geçidi
cta: SEG arkasındaki adresleri de doğrulayın
---

Güvenli e-posta ağ geçidi (secure email gateway, SEG), bir şirketin e-posta sunucusunun önünde duran bir filtreleme katmanıdır. Her mesajı geçmesine izin vermeden önce inceler. Doğrulama sonuçlarında sürekli SEG görüyor ve güvenli e-posta ağ geçidinin pratikte ne olduğunu merak ediyorsanız kısaca şöyle açıklanabilir: Bir şirketin gelen ve giden e-postalarının geçtiği kontrol noktasıdır. Bu nokta, e-postaları tehditlere karşı tarar ve şirket politikalarını uygular. Arkadaki e-posta sunucusu, ağ geçidinin engellemeye karar verdiği bir mesajı hiç görmez.

## SEG yalnızca bir kısaltmadır

SEG, secure email gateway (güvenli e-posta ağ geçidi) ifadesinin kısaltmasıdır. Dikkat etmeye başladığınızda kısaltmayı tam ifadeden daha sık göreceksiniz. İkisi aynı anlamda kullanılır. Bir doğrulama aracı bir adresi SEG arkasında olarak işaretlediğinde veya bir teslim edilebilirlik raporunda SEG filtrelemesinden söz edildiğinde, burada anlatılan filtreleme katmanı kastedilir. Terim, anlattığı fikirden daha teknik görünür. Fikir basittir: posta odasının önünde duran bir güvenlik görevlisi.

## Ağ geçidi aslında ne yapar?

Ağ geçidi, kötü e-postaları dışarıda, hassas e-postaları içeride tutmak için vardır. Gelen tarafta spam, kötü amaçlı yazılım ve kimlik avı taraması yapar. Bir kurala takılan her şeyi karantinaya alır veya reddeder. Giden tarafta veri kaybını önleme ve uyumluluk kurallarını uygular. Müşteri verilerini dışarı çıkaracak veya bir düzenlemeyi ihlal edecek mesajları durdurur. Birçoğu şifreleme ve uzun süreli arşivleme işlerini de üstlenir.

Bir şirket ağ geçidi kullanır, çünkü tüm bunları e-posta sunucusunun kendisinde çalıştırmak daha zor yönetilir ve hataya daha açıktır. Ağ geçidi, kuralları her mesajın geçmek zorunda olduğu tek bir yerde toplar.

## En sık karşılaşacağınız ağ geçitleri

Bu alana birkaç üretici hâkimdir. Kurumsal alan adlarında en sık karşılaşacağınız adlar Proofpoint, Mimecast, Barracuda ve Cisco IronPort'tur. Bunların arkasında daha küçük birçok üretici vardır. Biz toplam 15 güvenli e-posta ağ geçidini tespit ediyoruz.

Özellikleri ve fiyatları farklıdır, ancak dışarıdan bakıldığında hepsi aynı şekilde davranır. Her biri gerçek e-posta sisteminin önünde durur ve ona neyin ulaşacağına karar verir. Bu yüzden belirli bir üreticinin varlığı, size yalnızca şirketin o ürünü seçtiğini söyler. Arkasındaki adresler hakkında ise neredeyse hiçbir şey söylemez.

## Ağ geçidi, e-posta sağlayıcısı değildir

Ağ geçidini şirketin e-posta sistemiyle karıştırmak kolaydır, ancak bunlar ayrı katmanlardır. Bir şirket posta kutularını Microsoft 365 veya Google Workspace üzerinde çalıştırabilir ve önlerine başka bir üreticinin ağ geçidini koyabilir. Yani bir şirket güvenlik katmanını sağlarken başka bir şirket gelen kutularını barındırabilir. Bu yüzden e-posta yolundaki bir ağ geçidi, posta kutusunu gerçekte hangi sağlayıcının tuttuğunu söylemez. Önde duran bir güvenlik ürünü, arkasındaki gelen kutusu hakkında hiçbir şey göstermez. Bu iki seçim birbirinden bağımsız yapılır. Çoğu zaman da farklı bütçelere sahip farklı ekipler tarafından yapılır.

## Ağ geçidi bir e-postanın izlediği yolu nasıl değiştirir?

Normalde bir mesaj doğrudan alan adının e-posta sunucusuna gider. Bir ağ geçidi varsa alan adı, e-posta yönlendirmesini bunun yerine ağ geçidine yöneltir. Böylece gelen her mesaj önce oraya ulaşır. Ağ geçidi mesajı inceler. Mesaj yalnızca incelemeden geçerse, posta kutusunun bulunduğu gerçek sunucuya iletilir.

Alıcı bunların hiçbirini fark etmez. Dışarıdaki herhangi bir sistem için ağ geçidi, alan adının e-posta sistemidir. Çünkü yanıt veren tek parça odur. Bazı ağ geçitleri bir adım daha ileri gider ve tanımadığı göndericileri bilerek erteler. İlk teması bekletir ve ancak sonraki bir denemede düzgün yanıt verir.

## Ağ geçitleri doğrulamayı neden zorlaştırır?

Doğrulama, e-posta sunucusuna doğrudan bir soru sormaya ve doğrudan bir yanıtı okumaya dayanır. Ağ geçidi bu zinciri bozar. Alan adı adına yanıt verdiği için, arkasındaki posta kutusunun var olup olmadığına hiç bakmadan bir mesajı kabul edebilir veya inceleme için bekletebilir.

Bu yüzden belirli bir adresi soran bir doğrulama aracı, posta kutusunun durumunu değil, ağ geçidinin politikasını yansıtan bir yanıt alabilir. Bu yanıt bir kabul veya belirsiz bir yanıt olabilir. Erteleme davranışı durumu daha da kötüleştirir. Çünkü bekletilen bir ilk deneme, posta kutusu tamamen gerçek olsa bile sonuçsuz bir yanıt gibi görünür. Standart kontrole yanlış taraf yanıt vermektedir.

Somut bir örnek konuyu netleştirir. Bir doğrulama aracı, ağ geçidiyle korunan bir alan adındaki bir adresi sorgular. Ağ geçidi, tanımadığı göndericiler için kendi kurallarını uygulayarak sorguyu kabul eder veya erteler. Her iki durumda da doğrulama aracı, posta kutusunun var olup olmadığını bilen sunucudan değil, ağ geçidinden gelen bir yanıtı kaydeder. Gerçek gelen kutusuyla ilgili hiçbir şey test edilmemiştir. Yine de kontrolün raporlayacağı bir yanıtı vardır.

## Ağ geçidi, posta kutusunun gerçek olup olmadığı hakkında hiçbir şey söylemez

Akılda tutulması gereken nokta budur. Bir ağ geçidinin varlığı, şirketin güvenliği ciddiye aldığını gösterir. Arkasındaki belirli bir adresin gerçek ve aktif bir posta kutusuna ait olup olmadığı hakkında ise hiçbir şey söylemez. Artık kullanılmayan bir adres ile aktif bir adres aynı ağ geçidinin arkasında durabilir ve dışarıdan aynı görünebilir. Ağ geçidiyle korunan adreslerin çoğu zaman catch-all alan adlarıyla aynı sonuçsuz gruba düşmesinin nedeni tam olarak budur.

Pazarlamacılar için bunun önemli olmasının nedeni erişimdir. Bir B2B listesinde en iyi kişilerinizin önemli bir kısmı tam olarak bu ağ geçitlerinin arkasındadır. Bunlar, daha büyük ve güvenliğe daha çok önem veren şirketlerdeki kişilerdir. Hepsinden vazgeçerseniz listenizin kurumsal kısmını kaybedersiniz. Kontrol etmeden gönderirseniz engellemeler gönderen itibarınıza zarar verir. Listeniz bu adreslerle doluysa [SEG ağ geçitleriyle korunan e-postaları](/seg-email-verification) (İngilizce) nasıl ele aldığımızı okuyabilirsiniz.
