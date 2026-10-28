---
title: "Regex Email: Pola Teruji untuk JavaScript, Python, dan HTML (Serta Batasan Regex)"
seoTitle: "Regex Email: Pola Validasi JavaScript, Python & HTML"
description: "Pola regex teruji untuk validasi email di JavaScript, Python, dan form HTML5. Pahami perbedaan standar vs RFC 5322, edge case, dan mengapa regex tidak memverifikasi inbox."
slug: regex-email
date: 2026-10-27
updated: 2026-10-27
keyword: regex email
image: /blog/covers/id/regex-email.webp
imageAlt: Pola regular expression untuk validasi email dan tahapan deliverability
cta: Verifikasi daftar email Anda dengan Giggal.ai
---

Memvalidasi alamat email menggunakan regular expression terdengar sederhana sampai Anda berhadapan dengan alamat email nyata di lingkungan produksi. Alamat seperti `budi+buletin@sub.domain.co.id` sepenuhnya valid, sedangkan `pengguna@localhost` atau `tes..123@domain.com` justru memicu kegagalan sistem.

Jika Anda meneliti standar resmi (RFC 5321 dan RFC 5322), ada satu kendala nyata: menulis pola regex yang mampu menangani setiap format yang diizinkan secara teoritis membutuhkan lebih dari 6.500 karakter. Standar tersebut mengizinkan komentar dalam tanda kurung, teks bertanda kutip dengan spasi, hingga alamat IP langsung di dalam tanda kurung siku. Di aplikasi web modern, regex resmi itu tidak praktis: memperlambat eksekusi kode, sangat sulit dibaca, dan meloloskan pola usang yang tidak lagi dipakai penyedia email mana pun.

Dalam praktiknya, Anda memerlukan pola regex yang pragmatis: ekspresi yang menyaring kesalahan ketik tanpa memblokir pengguna yang sah.

| Jenis Pola | Local-Part (sebelum @) | Subdomain & TLD | Penggunaan Terbaik |
| --- | --- | --- | --- |
| **Standar Produksi** | Huruf, angka, `._%+*-` | Beragam subdomain, TLD minimal 2 karakter | Form registrasi, aplikasi web |
| **Bawaan HTML5** | Subset RFC (ASCII) | Punycode / Alfanumerik | Validasi instan di peramban web |
| **Minimalis** | Apa saja selain spasi dan `@` | Minimal satu titik setelah `@` | Filter fleksibel, skrip sederhana |

---

## Pola regex yang direkomendasikan untuk produksi

Untuk sebagian besar aplikasi web, kami menyarankan pola yang menegakkan aturan penamaan umum sekaligus mendukung ekstensi domain modern:

```regex
^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
```

### Penjelasan cara kerja setiap bagian pola

Membedah setiap bagian memperlihatkan bagaimana pola ini mencegah kesalahan input:

1. `^`: Menandai awal baris teks sehingga mencegah pencocokan sebagian.
2. `[a-zA-Z0-9._%+-]+`: Mengizinkan satu atau lebih karakter yang valid pada nama pengguna (local-part): huruf kecil, huruf besar, angka, titik, garis bawah, persen, tanda tambah, dan tanda hubung.
3. `@`: Mewajibkan tepat satu simbol at (`@`).
4. `[a-zA-Z0-9.-]+`: Memvalidasi nama domain, mengizinkan huruf, angka, tanda hubung, serta titik untuk subdomain (misalnya `surat.marketing.contoh`).
5. `\.`: Mencocokkan titik pemisah antara domain dan ekstensi domain.
6. `[a-zA-Z]{2,}`: Mewajibkan top-level domain (TLD) terdiri dari minimal dua huruf. Aturan ini menerima `.id`, `.com`, hingga domain baru seperti `.technology` atau `.digital`, sekaligus menolak input terpotong seperti `nama@domain.i`.
7. `$`: Menandai akhir dari baris teks.

---

## Pola alternatif sesuai kebutuhan sistem

Tergantung pada lokasi pemeriksaan input di aplikasi Anda, pola yang lebih ketat atau lebih longgar dapat dipertimbangkan.

### 1. Pola standar W3C untuk HTML5

Konsorsium World Wide Web (W3C) merumuskan pola regex ini khusus untuk elemen `<input type="email">`:

```regex
^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$
```

Pola ini mengacu pada spesifikasi HTML5. Karakter khusus seperti `!` dan `~` diperbolehkan di bagian local-part, dan panjang tiap label domain dibatasi maksimal 63 karakter.

### 2. Pola regex minimalis

Jika tujuan Anda di sisi pengguna hanya memastikan kolom tidak dikirim dalam keadaan kosong atau berupa teks acak tanpa struktur sebelum diteruskan ke API verifikasi:

```regex
^[^\s@]+@[^\s@]+\.[^\s@]+$
```

Pola ini hanya memastikan tiga hal: tanpa spasi sebelum `@`, tanpa spasi setelah `@`, dan terdapat minimal satu titik pada domain. Format ini tidak menghasilkan penolakan salah pada nama alamat internasional yang tidak biasa.

---

## Implementasi di JavaScript, Python, dan HTML

Berikut cara memasang validasi di berbagai lingkungan pengembangan populer.

### 1. Validasi email di JavaScript (Frontend dan Node.js)

Di JavaScript, biasakan memangkas spasi kosong di awal dan akhir string serta memeriksa panjang teks sebelum menguji regex:

```javascript
function isValidEmail(email) {
  if (typeof email !== 'string') return false;
  
  // Hapus spasi di awal dan akhir teks
  const cleanEmail = email.trim();
  
  // Pastikan tidak melampaui batas RFC (maksimal 254 karakter)
  if (cleanEmail.length === 0 || cleanEmail.length > 254) {
    return false;
  }
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(cleanEmail);
}

// Kasus pengujian
console.log(isValidEmail("siti.rahma+kerja@perusahaan.co.id")); // true
console.log(isValidEmail("titik..ganda@domain.co.id"));          // true (uji sintaks)
console.log(isValidEmail("tanpa-tanda-at.co.id"));               // false
console.log(isValidEmail("pengguna@domain"));                    // false
```

### 2. Regex email di Python

Di Python, lakukan kompilasi pola sekali saja menggunakan `re.compile` dan manfaatkan fungsi `re.fullmatch`:

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

# Kasus pengujian
print(validate_email_address("dev@perusahaan.co.id"))    # True
print(validate_email_address("email ada spasi@web.id"))  # False
print(validate_email_address("pengguna@.domain.id"))     # False
```

### 3. Validasi bawaan form HTML5 (tanpa JavaScript)

Peramban web modern menguji format input secara otomatis melalui atribut `type="email"`. Jika dikombinasikan dengan atribut `pattern`, Anda dapat memastikan pengguna mencantumkan domain lengkap beserta ekstensinya:

```html
<form action="/daftar" method="POST">
  <label for="user-email">Email Kantor</label>
  <input 
    type="email" 
    id="user-email" 
    name="email" 
    required 
    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    placeholder="nama@perusahaan.co.id"
  />
  <button type="submit">Lanjutkan</button>
</form>
```

Bila teks yang diketik tidak cocok dengan pola, peramban akan menahan pengiriman formulir dan menampilkan pesan peringatan dalam bahasa pengguna.

---

## Situasi khusus yang sering menggagalkan pola regex biasa

Sebelum menetapkan aturan regex di aplikasi Anda, periksa apakah proyek Anda harus menangani empat situasi berikut:

### 1. Alamat dengan tanda tambah (Subaddressing)
Layanan seperti Gmail, Outlook, dan Fastmail memperbolehkan pengguna menyisipkan tanda tambah dan label khusus (misalnya `budi+promo@gmail.com`). Pola regex yang terlalu kaku dan tidak menyertakan tanda `+` akan menolak alamat valid semacam ini, sehingga merugikan konversi pendaftaran.

### 2. Domain tingkat atas yang panjang (gTLD)
Banyak dokumentasi lama memakai pola berakhiran `\.[a-zA-Z]{2,4}$`, dengan asumsi ekstensi yang ada hanya `.id`, `.com`, atau `.net`. Saat ini telah ada ratusan ekstensi panjang seperti `.technology`, `.international`, atau `.management`. Selalu terapkan `[a-zA-Z]{2,}` tanpa menetapkan batasan maksimal yang sempit.

### 3. Internationalized Domain Names (IDN)
Di beberapa kawasan, nama domain memuat karakter non-ASCII atau aksen lokal. Regex standar berbasis ASCII akan otomatis menolak karakter-karakter ini. Jika aplikasi Anda ditujukan untuk mendukung nama domain internasional, konversikan domain ke format ASCII memakai Punycode (`xn--...`) sebelum melakukan pengujian sintaks.

### 4. Titik ganda berurutan
RFC 5322 secara teknis memperbolehkan titik berurutan bila diletakkan di dalam tanda kutip (`"budi..santoso"@domain.id`), namun server email di seluruh dunia hampir pasti menolak titik ganda tanpa tanda kutip (`budi..santoso@domain.id`). Jika Anda ingin melarang titik berturut-turut pada bagian local-part, Anda bisa menambahkan negative lookahead `(?!.*\.\.)`.

---

## Batasan regex: titik buta dalam deliverability

Regular expression hanya memeriksa satu hal: **struktur sintaks**. Pola ini hanya menjawab pertanyaan: *“Apakah susunan teks ini terlihat seperti alamat email?”*

Regex sama sekali tidak bisa menjawab pertanyaan yang sesungguhnya menentukan: *“Apakah pesan yang dikirim ke alamat ini benar-benar akan sampai ke kotak masuk yang aktif?”*

### Analisis Arsitektur: Mengapa Regex Saja Tidak Bisa Memverifikasi Kotak Masuk

Dalam rekayasa perangkat lunak, menganggap validasi email hanya sebagai persoalan pencocokan pola teks adalah kekeliruan arsitektur yang lazim terjadi. Dalam video di bawah ini, arsitek perangkat lunak Derek Comartin (Code Opinion) memaparkan alasan mengapa membedah format email berbasis RFC memakai regex menghasilkan kode yang rapuh, serta mengapa menguji sintaks sama sekali berbeda dengan memastikan kotak masuk benar-benar aktif:

```youtube
M6itpAfbvas
Tonton video: [Regex for Email Validation? Think Again!](https://www.youtube.com/watch?v=M6itpAfbvas) oleh Derek Comartin (Code Opinion)
```

Poin penting dari pembahasan ini:
- **Jebakan Spesifikasi RFC**: Berusaha menangani setiap kasus khusus RFC memunculkan ribuan karakter regex yang sulit dibaca dan justru sering gagal mengenali alamat email modern.
- **Format vs Keberadaan Akun**: Alamat seperti `akun.tidak.ada.991@gmail.com` lolos pengujian regex tanpa cela, tetapi pengiriman email tetap langsung memantul (bounce) karena server penerima tidak memiliki akun tersebut.
- **Pendekatan Dua Tahap**: Aplikasi produksi sebaiknya mengandalkan pola regex sederhana di sisi klien untuk menyaring saltik (typo), kemudian menerapkan verifikasi kotak masuk sungguhan sebelum menyimpan data ke basis data.

Berikut lima skenario umum di mana alamat yang lolos uji regex tetap gagal menerima pesan:

```
[ Pengguna mengetik: akun.palsu.991@gmail.com ]
                        │
                        ▼
 1. Uji Sintaks Regex ──────────► LOLOS (Karakter valid, memiliki @ dan TLD)
                        │
                        ▼
 2. Uji Rekaman DNS MX ─────────► LOLOS (gmail.com memiliki server email sungguhan)
                        │
                        ▼
 3. Pemeriksaan Kotak Masuk SMTP ► GAGAL (Server Google menjawab: 550 5.1.1 User Unknown)
                        │
                        ▼
             [ HASIL: HARD BOUNCE ]
```

### 1. Domain yang tidak pernah ada
Alamat `kontak@domain-ini-tidak-pernah-terdaftar-881.id` cocok dengan format regex mana pun. Namun domain tersebut tidak pernah dibeli dan tidak memiliki DNS MX. Mengirim email ke sana langsung menghasilkan pantulan (bounce).

### 2. Kotak masuk yang sudah dihapus atau tidak aktif
Alamat `rina.wijaya@perusahaanbesar.co.id` lolos uji susunan karakter. Apabila Rina mengundurkan diri beberapa bulan lalu, kotak masuknya sudah dinonaktifkan. Saat koneksi SMTP berlangsung, server penerima merespons dengan `550 5.1.1 Recipient rejected: User unknown`. Kondisi ini menimbulkan hard bounce yang merusak reputasi domain pengirim Anda.

### 3. Email sementara dan sekali pakai (Disposable Inboxes)
Layanan seperti 10MinuteMail atau GuerrillaMail membagikan alamat kotak masuk yang kedaluwarsa dalam hitungan menit. Regex akan menganggapnya benar. Jika beberapa waktu kemudian Anda mengirim invoice atau email berkala ke alamat tersebut, pengiriman akan gagal total.

### 4. Server email catch-all
Banyak server perusahaan disetel untuk menerima semua pesan masuk ke domain mereka, tanpa peduli apakah kotak masuk penerima benar-benar ada. Pola regex tidak dapat mengetahui apakah alamat tersebut milik staf yang aktif atau sekadar diterima otomatis oleh server.

### 5. Jebakan spam (Spam Traps)
Spam trap dirancang sangat mirip dengan alamat email pribadi atau bisnis biasa. Alamat ini lolos uji sintaks dan menerima respons koneksi SMTP. Mengirim email ke alamat jebakan ini berisiko membuat alamat IP pengirim Anda diblokir oleh otoritas seperti Spamhaus.

---

## Strategi validasi dua tingkat

Untuk menjaga proses pendaftaran tetap nyaman bagi pengguna tanpa memasukkan data rusak ke database, bagilah validasi menjadi dua tingkatan:

```
┌────────────────────────────────────────────────────────┐
│                   TINGKAT 1: FRONTEND                  │
│  Validasi Sintaks Cepat (HTML5 + Regex Ringkas)        │
│  - Mencegah salah ketik saat pengguna memasukkan data  │
│  - Menghindari @ tertinggal dan ekstensi terpotong     │
│  - Respons instan bagi pengguna                        │
└──────────────────────────┬─────────────────────────────┘
                           │
                           ▼
┌────────────────────────────────────────────────────────┐
│                   TINGKAT 2: BACKEND                   │
│  Verifikasi Deliverability (DNS + Uji Handshake SMTP)  │
│  - Memeriksa rekaman MX pada domain                    │
│  - Mensimulasikan koneksi SMTP tanpa mengirim pesan    │
│  - Mendeteksi email sekali pakai dan server catch-all  │
└────────────────────────────────────────────────────────┘
```

1. **Di sisi klien (Umpan balik langsung)**: Gunakan pola regex standar atau elemen HTML5 `<input type="email">`. Langkah ini mencegah kesalahan pengetikan sederhana, seperti mengetik tanda koma alih-alih titik (`nama@gmail,com`).
2. **Di sisi server (Deliverability nyata)**: Sebelum menyimpan data ke database, pastikan kotak masuk tersebut benar-benar aktif. Anda dapat menguji alamat satu per satu melalui [alat cek email gratis](/email-checker), menyaring alamat email sementara dengan [pemverifikasi email sekali pakai](/disposable-email-checker), atau mengotomatiskan seluruh alur melalui [API verifikasi email](/public/docs).

Memeriksa format teks dengan regex adalah tahap awal yang perlu dilakukan. Mengombinasikannya dengan pengujian deliverability menyeluruh akan melindungi reputasi pengirim Anda dan menjaga angka bounce rate tetap di bawah batas aman 2 persen.
