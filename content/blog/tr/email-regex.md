---
title: "Email regex: JavaScript, Python ve HTML için test edilmiş kalıplar (ve regex'in sınırları)"
seoTitle: "Email regex: JavaScript, Python ve HTML (2026)"
description: "JavaScript, Python ve HTML5 formları için test edilmiş email regex kalıpları. Standart ve RFC 5322 regex farkı, uç durumlar ve regex'in neden yetmediği."
slug: email-regex
date: 2026-11-05
updated: 2026-11-05
keyword: email regex
image: /blog/covers/tr/email-regex.webp
imageAlt: "Email regex'i ve sınırları. RFC'ye tam uyan regex 6.500 karakterden uzun, adres uzunluğu sınırı 254 karakter, büyük sağlayıcıların beklediği bounce oranı eşiği %2"
cta: E-posta listenizi Giggal.ai ile doğrulayın
---

Bir e-posta adresini email regex, yani düzenli ifade ile doğrulamak, gerçek dünyadaki adreslerle karşılaşana kadar basit görünür. `alex+newsletter@sub.domain.co.uk` gibi bir e-posta adresi tamamen geçerlidir. Buna karşılık `user@localhost` veya `test..123@domain.com` canlı ortamda sorun çıkarır.

Resmi standartları (RFC 5321 ve RFC 5322) okursanız, geçerli her durumu kapsayan bir düzenli ifadenin 6.500 karakterden uzun olması gerektiğini görürsünüz. Bu ifade parantez içindeki yorumlara, boşluk içeren tırnaklı dizelere ve IP adresi içeren alan adı değişmezlerine (domain literal) izin verir. Gerçek web uygulamalarında bu resmi kalıp kullanılamaz. Yavaştır, okunması zordur ve bugün hiçbir e-posta sağlayıcısının kullanmadığı tuhaf dizeleri kabul eder.

Pratikte ihtiyacınız olan şey, gerçekçi bir düzenli ifadedir: gerçek kullanıcıları engellemeden bariz yazım hatalarını yakalayan bir ifade.

| Kalıp türü | Yerel kısım desteği | Alt alan adı ve TLD desteği | En uygun kullanım |
| --- | --- | --- | --- |
| **Standart (canlı ortam)** | Harfler, rakamlar, `._%+*-` | Birden fazla alt alan adı, en az 2 karakterli TLD | Web kayıt formları, kullanıcı kaydı |
| **HTML5 yerleşik** | Tam RFC alt kümesi (ASCII) | Punycode / harf ve rakam | Hızlı HTML form doğrulaması |
| **Minimal** | Boşluk ve `@` dışında her şey | `@` sonrasında nokta içeren her şey | Gevşek yazım kontrolleri, basit betikler |

---

## Canlı ortam için önerilen email regex'i

Çoğu web uygulaması için standart adlandırma kurallarını uygulayan ve modern uzantılara izin veren bir kalıp istersiniz:

```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### Bu kalıp parça parça nasıl çalışır?

Her bölümü ayrı ayrı incelemek, kalıbın yaygın giriş hatalarını neden önlediğini açıklar:

1. `^`: Dizenin başlangıcını belirtir ve kısmi eşleşmeleri önler.
2. `[a-zA-Z0-9._%+-]+`: Kullanıcı adında (yerel kısım, local-part) izin verilen bir veya daha fazla karakterle eşleşir. Bunlar küçük harfler, büyük harfler, rakamlar, noktalar, alt çizgiler, yüzde işaretleri, artı işaretleri ve kısa çizgilerdir.
3. `@`: Zorunlu `@` simgesiyle tam olarak bir kez eşleşir.
4. `[a-zA-Z0-9.-]+`: Alan adıyla eşleşir. Alt alan adları için harflere, rakamlara, kısa çizgilere ve noktalara izin verir (örneğin `mail.marketing.example`).
5. `\.`: Alan adını üst düzey alan adından (TLD) ayıran gerçek nokta karakteriyle eşleşir.
6. `[a-zA-Z]{2,}`: TLD'nin en az iki harften oluşmasını ister. Bu kural `.com`, `.org` ve `.technology` veya `.engineering` gibi yeni uzantılara izin verir. `user@domain.c` gibi tek karakterli yazım hatalarını ise engeller.
7. `$`: Dizenin sonunu belirtir.

---

## Alternatif kalıplar

Kullanıcı girişini nerede doğruladığınıza bağlı olarak daha katı veya daha esnek bir kalıbı tercih edebilirsiniz.

### 1. W3C'nin HTML5 standardındaki regex

World Wide Web Consortium (W3C), tarayıcıdaki `<input type="email">` öğeleri için özel bir e-posta doğrulama regex'i tanımlar:

```regex
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$
```

Bu kalıp HTML5 belirtimiyle uyumludur. Yerel kısımda `!` ve `~` gibi özel karakterlere izin verir ve alan adı etiketlerinin 63 karakteri aşmadığını kontrol eder.

### 2. Minimal regex

Kullanıcının, adresi bir arka uç doğrulama hizmetine göndermeden önce adrese benzeyen bir şey yazdığını kontrol etmek istiyorsanız:

```regex
^[^\s@]+@[^\s@]+\.[^\s@]+$
```

Bu kalıp üç şeyi kontrol eder: `@` öncesinde boşluk olmayan karakterler vardır, `@` sonrasında boşluk olmayan karakterler vardır ve alan adında en az bir nokta vardır. Alışılmadık uluslararası adları hiçbir zaman yanlışlıkla reddetmez.

---

## JavaScript, Python ve HTML'de uygulama

E-posta doğrulama regex'ini modern programlama ortamlarında şöyle uygulayabilirsiniz.

### 1. JavaScript'te e-posta doğrulama (tarayıcı ve Node.js)

JavaScript'te bir e-posta adresini doğrularken, test etmeden önce her zaman baştaki ve sondaki boşlukları silin ve girişi küçük harfe çevirin:

```javascript
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  
  // Trim leading/trailing whitespace
  const cleanEmail = email.trim();
  
  // Guard against excessive string lengths (RFC limit is 254 chars)
  if (cleanEmail.length === 0 || cleanEmail.length > 254) {
    return false;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(cleanEmail);
}

// Test cases
console.log(isValidEmail("sarah.connor+work@cyberdyne.com")); // true
console.log(isValidEmail("invalid..dots@domain.com"));        // true (syntax check)
console.log(isValidEmail("missing-at-domain.com"));           // false
console.log(isValidEmail("user@domain"));                     // false
```

### 2. Python'da e-posta regex'i

Python'da adres listeleri işliyorsanız regex'i bir kez derleyin ve `re.fullmatch` kullanın:

```python
import re

EMAIL_PATTERN = re.compile(r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")

def validate_email_address(email: str) -> bool:
    if not isinstance(email, str):
        return False
    
    clean_email = email.strip()
    if len(clean_email) > 254:
        return False
        
    return bool(EMAIL_PATTERN.fullmatch(clean_email))

# Test cases
print(validate_email_address("dev@company.io"))      # True
print(validate_email_address("bad email@domain.com")) # False
print(validate_email_address("user@.domain.com"))     # False
```

### 3. Yerleşik HTML5 form doğrulaması (JavaScript olmadan)

Modern tarayıcılar, `type="email"` özniteliğiyle e-posta söz dizimini kendileri doğrular. Bir üst düzey alan adını zorunlu kılmak için bunu `pattern` özniteliğiyle birleştirebilirsiniz:

```html
<form action="/signup" method="POST">
  <label for="user-email">Work Email</label>
  <input 
    type="email" 
    id="user-email" 
    name="email" 
    required 
    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    placeholder="you@company.com"
  />
  <button type="submit">Continue</button>
</form>
```

Bir kullanıcı bu formu gönderdiğinde dize kalıpla eşleşmezse tarayıcı gönderimi engeller ve kullanıcının dilinde bir uyarı gösterir.

---

## Çoğu email regex kalıbını bozan uç durumlar

Bir regex kalıbına karar vermeden önce, uygulamanızın şu dört yaygın uç durumu ele alması gerekip gerekmediğini kontrol edin:

### 1. Artı adresleme (alt adresleme)
Gmail, Outlook ve Fastmail gibi hizmetler, kullanıcıların kullanıcı adlarından sonra bir artı işareti ve istedikleri bir etiket eklemesine izin verir (örneğin `alex+finance@gmail.com`). Karakter sınıfına `+` işaretini koymayan aşırı katı regex kalıpları bu meşru adresleri reddeder ve kullanıcıları zor durumda bırakır.

### 2. Uzun genel üst düzey alan adları (gTLD)
Eski regex rehberleri, tüm alan adlarının `.com`, `.net` veya `.org` ile bittiğini varsayarak çoğu zaman `\.[a-zA-Z]{2,4}$` ile bitiyordu. Bugün `.management`, `.technology` ve `.international` gibi yüzlerce daha uzun uzantı var. Keyfi bir üst sınır koymadan her zaman `[a-zA-Z]{2,}` kullanın.

### 3. Uluslararası alan adları (IDN)
Almanya, Fransa, İspanya veya Asya'daki kullanıcılara hizmet veriyorsanız alıcı alan adları ASCII olmayan karakterler içerebilir (`kontakt@münchen.de` veya `info@académie.fr` gibi). Standart ASCII düzenli ifadeleri bu dizeleri reddeder. Sisteminiz uluslararası alan adlarını kabul ediyorsa, söz dizimi doğrulamasını çalıştırmadan önce alan adı kısmını Punycode (`xn--...`) ile ASCII'ye dönüştürün.

### 4. Art arda gelen noktalar
Teknik olarak RFC 5322, tırnak içindeki dizelerde noktalara izin verir (`"john..doe"@domain.com`). Ancak neredeyse hiçbir e-posta sunucusu tırnaksız art arda noktalara izin vermez (`john..doe@domain.com`). Yerel kısımda art arda noktaları engellemeniz gerekiyorsa `(?!.*\.\.)` şeklinde bir negatif ileri bakış (negative lookahead) ekleyebilirsiniz.

---

## Regex'in yetmediği yer: teslim edilebilirlikteki kör nokta

Bir düzenli ifade yalnızca tek bir şeyi kontrol eder: **söz dizimi yapısı**. Şu soruyu yanıtlar: *"Bu metin dizesi bir e-posta adresine benziyor mu?"*

Asıl önemli olan soruyu ise yanıtlayamaz: *"Bu adrese gönderilen bir e-posta bir gelen kutusuna ulaşacak mı?"*

### Mimari açıdan inceleme: regex tek başına neden bir e-postayı doğrulayamaz?

Yazılım mühendisliğinde e-posta doğrulamayı basit bir kalıp eşleştirme sorunu olarak görmek, yaygın bir mimari hatadır. Aşağıdaki videoda yazılım mimarı Derek Comartin (Code Opinion), RFC'ye uygun e-postaları düzenli ifadelerle ayrıştırmanın neden kırılgan koda yol açtığını anlatıyor. Söz dizimini kontrol etmenin, gelen kutusunun var olup olmadığını doğrulamaktan neden tamamen farklı olduğunu da açıklıyor:

```youtube
M6itpAfbvas
İzleyin: [Regex for Email Validation? Think Again!](https://www.youtube.com/watch?v=M6itpAfbvas), Derek Comartin (Code Opinion)
```

Bu incelemeden çıkan başlıca sonuçlar:
- **RFC belirtimi tuzağı**: RFC'deki her uç durumu hesaba katmaya çalışmak, binlerce karakterlik okunamaz bir regex ortaya çıkarır. Bu regex, modern e-posta adreslerinde sık sık bozulur.
- **Biçim ve posta kutusunun varlığı**: `nonexistent.user.991@gmail.com` gibi bir adres tüm regex kurallarından sorunsuz geçer. Ancak alıcı e-posta sunucusunda eşleşen bir hesap olmadığı için yine hemen geri döner.
- **Çok adımlı yaklaşım**: Canlı ortamdaki bir uygulama, ön yüzde (frontend) yalnızca bariz yazım hatalarını yakalayan hafif bir kalıp kullanmalıdır. Kişileri veritabanına kaydetmeden önce ise gerçek posta kutusu doğrulamasına güvenmelidir.

Bir regex kalıbıyla sorunsuz eşleşen bir adresin, mesaj gönderdiğinizde yine de başarısız olmasının beş nedeni vardır:

```
[ User types: fake.account.8821@gmail.com ]
                      │
                      ▼
 1. Regex Syntax Check ────────► PASSES (Valid characters, has @, has TLD)
                      │
                      ▼
 2. DNS MX Record Check ───────► PASSES (gmail.com has real Google mail servers)
                      │
                      ▼
 3. SMTP Mailbox Check ────────► FAILS (Google server responds: 550 5.1.1 User Unknown)
                      │
                      ▼
          [ RESULT: HARD BOUNCE ]
```

### 1. Var olmayan alan adları
`contact@thisdomaindoesnotexist99238.com` dizesi standart regex kalıplarıyla eşleşir. Ancak bu alan adı hiç kaydedilmemiştir ve hiçbir MX (Mail Exchange) kaydı yoktur. Bu adrese e-posta göndermek hemen bir bounce üretir.

### 2. Silinmiş veya kullanılmayan posta kutuları
`alex.smith@largecorp.example` adresi tüm regex kurallarıyla eşleşir. Ancak Alex altı ay önce şirketten ayrıldıysa posta kutusu silinmiştir. E-posta sunucunuz şirketin e-posta sunucusuna bağlandığında sunucu `550 5.1.1: Recipient address rejected: User unknown` hatasıyla yanıt verir. Bu, alan adınızın itibarını etkileyen bir hard bounce olarak sayılır.

### 3. Geçici ve tek kullanımlık gelen kutuları
10MinuteMail, GuerrillaMail ve Mailinator gibi hizmetler geçici adresler üretir (örneğin `temp992@guerrillamail.com`). Bu adresler regex söz dizimi testlerinden sorunsuz geçer, ancak posta kutusunun süresi birkaç dakika içinde dolar. Bu adreslere karşılama e-postaları veya makbuzlar gönderirseniz sonraki e-postalar geri döner.

### 4. Catch-all e-posta sunucuları
Birçok şirket, alan adının e-posta sunucusunu, ilgili posta kutusunun var olup olmadığına bakmadan gelen her mesajı kabul edecek şekilde yapılandırır. Bir regex kontrolü, `steve.jobs@company.com` adresinin aktif bir çalışana mı ait olduğunu yoksa yer tutucu bir adres mi olduğunu söyleyemez.

### 5. Spam tuzakları
Spam tuzağı adresleri sıradan kişisel e-postalarla aynı görünür (örneğin `info.audits@security-network.org`). Regex kontrollerinden geçerler ve gelen SMTP bağlantılarını kabul ederler. Bu adreslere e-posta göndermek, gönderim IP adresinizin Spamhaus gibi engelleme listelerine eklenmesine yol açar.

---

## İki katmanlı doğrulama stratejisi

Kayıt sürecini kullanıcı için kolay tutmak ve hatalı verilerin veritabanınıza girmesini önlemek için doğrulamanızı iki katmana ayırın:

```
┌────────────────────────────────────────────────────────┐
│                   TIER 1: FRONTEND                     │
│  Fast Syntax Validation (HTML5 + Lightweight Regex)    │
│  - Catches typing errors in real time                  │
│  - Prevents missing @ and broken TLDs                  │
│  - Instant feedback to the user                        │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                   TIER 2: BACKEND                      │
│  Deliverability Verification (DNS + SMTP Check)        │
│  - Checks DNS MX records for the domain                │
│  - Simulates SMTP handshake without sending email      │
│  - Detects disposable domains and catch-all servers    │
└────────────────────────────────────────────────────────┘
```

1. **İstemci tarafı (anında geri bildirim)**: Ön yüzde standart e-posta regex'ini veya yerleşik HTML5 `<input type="email">` öğesini kullanın. Bu, kullanıcıların nokta yerine virgül yazmak gibi kazara yaptıkları yazım hatalarını göndermesini önler (`user@gmail,com`).
2. **Sunucu tarafı (gerçek zamanlı teslim edilebilirlik)**: Kullanıcı formu gönderdiğinde, adresi veritabanınıza kaydetmeden önce posta kutusunun var olduğunu doğrulayın. Tek tek adresleri [ücretsiz mail adresi doğrulama aracımızla](/email-checker) inceleyebilirsiniz. Geçici hesapları [geçici mail kontrol aracımızla](/disposable-email-checker) ayıklayabilir veya kontrolü [e-posta doğrulama API'mizle](/public/docs) otomatikleştirebilirsiniz.

Biçimi kontrol etmek için regex kullanmak gerekli bir ilk adımdır. Bunu bir teslim edilebilirlik kontrolüyle birleştirmek gönderen itibarınızı korur. Bounce oranlarını da büyük sağlayıcıların beklediği %2 eşiğinin altında tutar.
