---
title: "Apa itu SPF, DKIM dan DMARC?"
seoTitle: "SPF, DKIM dan DMARC Adalah: Cara Kerjanya Bersama (2026)"
description: "SPF memeriksa server, DKIM tanda tangan, dan DMARC apakah salah satunya cocok dengan domain From. Record yang dipasang, kesalahan umum dan perubahan 2026."
slug: spf-dkim-dmarc-adalah
date: 2026-10-23
updated: 2026-10-23
keyword: spf dkim dmarc adalah
image: /blog/covers/id/spf-dkim-dmarc-adalah.webp
imageAlt: Banner biru tua bertuliskan SPF, DKIM, DMARC dengan tiga kolom penjelasan teknis
cta: Benahi autentikasi dulu, lalu bersihkan daftar Anda
---

SPF, DKIM dan DMARC adalah tiga record DNS yang masing-masing menjawab pertanyaan berbeda tentang sebuah email. SPF (Sender Policy Framework) mencantumkan server yang boleh mengirim email untuk domain Anda. DKIM (DomainKeys Identified Mail) menambahkan tanda tangan pada setiap pesan. Dengan tanda tangan itu, penerima bisa memastikan tidak ada yang diubah setelah pesan keluar dari server Anda. DMARC (Domain-based Message Authentication, Reporting and Conformance) memeriksa bahwa setidaknya salah satu dari keduanya cocok dengan domain di alamat From Anda. DMARC juga memberi tahu penerima apa yang harus dilakukan jika keduanya tidak cocok. Sejak 2024, ketiganya tidak lagi opsional. Gmail dan Outlook.com kini menolak banyak email yang gagal dalam pemeriksaan ini, bukan sekadar memindahkannya ke folder spam.

| Record | Apa yang diperiksa | Lokasinya |
| --- | --- | --- |
| SPF | Server mana yang boleh mengirim untuk domain Anda | TXT record di domain Anda |
| DKIM | Tanda tangan digital pada setiap pesan | TXT record di selector._domainkey.yourdomain |
| DMARC | Bahwa SPF atau DKIM cocok dengan domain From Anda, dan apa yang dilakukan jika tidak | TXT record di _dmarc.yourdomain |

## Kenapa Anda tidak bisa melewatkannya lagi

Mulai 1 Februari 2024, Google memberlakukan aturan wajib untuk semua pengirim yang mengirim email ke akun Gmail pribadi. Berdasarkan persyaratan dasar ini, setiap pengirim harus menyiapkan SPF atau DKIM. Pengirim juga harus punya DNS forward dan reverse yang valid dengan PTR record yang cocok untuk IP pengirim, memakai enkripsi TLS saat pengiriman, dan mematuhi spesifikasi RFC 5322. Tingkat spam Anda di Google Postmaster Tools harus tetap di bawah 0,3%, dan Google menyarankan di bawah 0,1%. Jika Anda mengirim email tanpa autentikasi, Google memperingatkan bahwa pesan bisa masuk ke folder spam atau langsung ditolak dengan kode error 5.7.26.

Jika Anda mengirim 5.000 pesan atau lebih per hari ke alamat Gmail pribadi, Google menggolongkan Anda sebagai pengirim massal, dan aturannya menjadi lebih ketat. Pengirim massal tidak bisa memilih antara SPF atau DKIM. Anda harus menyiapkan keduanya. Anda juga harus memublikasikan DMARC record, menjaga kecocokan domain antara header From yang terlihat dan SPF atau DKIM, serta menyediakan tombol berhenti berlangganan satu klik yang berfungsi untuk pesan marketing. Google menghitung batas 5.000 pesan ini dari domain utama dan semua subdomainnya dalam jangka 24 jam. Setelah domain Anda mencapai batas itu, Google menganggap status pengirim massal sebagai permanen. Mulai November 2025, Gmail meningkatkan penegakan aturan terhadap lalu lintas yang tidak patuh, dengan penundaan pengiriman sementara dan penolakan permanen. Pedoman ini berlaku untuk akun Gmail pribadi, bukan untuk kotak masuk bisnis Google Workspace.

Microsoft memberlakukan aturan autentikasinya sendiri pada 5 Mei 2025 untuk pengirim yang mengirim 5.000 pesan atau lebih per hari ke akun konsumen Outlook.com, Hotmail dan Live. Pengirim yang melewati batas ini membutuhkan SPF yang lolos, tanda tangan DKIM yang lolos, dan DMARC record yang dipublikasikan dengan p=none atau lebih ketat, yang cocok dengan SPF atau DKIM. Jika Anda tidak memenuhi persyaratan ini, Microsoft memblokir pesan Anda dengan kode bounce 550 5.7.515 Access denied, sending domain does not meet the required authentication level. Yahoo memberlakukan aturan serupa untuk pengirim massal pada 2024.

| Kode | Apa yang gagal |
| --- | --- |
| 4.7.27 dan 5.7.27 | SPF tidak lolos |
| 4.7.30 dan 5.7.30 | DKIM tidak lolos |
| 4.7.31 | DMARC record tidak ada atau tidak punya kebijakan |
| 4.7.32 | Domain From tidak cocok dengan SPF atau DKIM |
| 4.7.23 dan 5.7.25 | Masalah PTR record |

Google memakai kode 4.x untuk pembatasan sementara dan kode 5.x untuk blokir pengiriman permanen. Saat kampanye Anda bounce, jangan menebak penyebabnya dari dashboard marketing. Periksa header penolakan asli dari server, seperti dijelaskan dalam panduan kami tentang [cara membaca pesan bounce](/blog/550-5-7-1-error).

## SPF: server mana yang boleh mengirim untuk domain Anda

Sender Policy Framework, yang distandarkan dalam RFC 7208, memverifikasi envelope sender dari pesan yang masuk. Envelope sender adalah alamat Return-Path atau MAIL FROM yang dipakai server email untuk mengembalikan bounce. SPF juga bisa menilai nama server yang disebut saat handshake HELO atau EHLO di awal. SPF hanya memeriksa envelope sender dan mengabaikan alamat From yang terlihat di kotak masuk. Karena itu SPF saja tidak bisa mencegah penyerang memalsukan nama merek Anda.

[SPF record](/glossary/spf) disimpan di DNS sebagai satu TXT record. Record ini memberi tahu server penerima alamat IP, server MX dan platform pihak ketiga mana yang boleh mengirim email untuk domain Anda. Record yang umum terlihat seperti ini:

```text
v=spf1 include:_spf.google.com include:spf.your-esp.example ~all
```

Setiap record dimulai dengan `v=spf1`. Pernyataan `include:_spf.google.com` meminta server penerima membaca SPF record milik Google dan mengizinkan alamat IP yang tercantum di dalamnya. Include kedua memberi izin mengirim kepada server yang dijalankan oleh platform marketing atau layanan email transaksional Anda.

Perintah di bagian akhir memberi tahu penerima cara memperlakukan pengirim yang tidak tercantum. Qualifier softfail, ditulis `~all`, menunjukkan bahwa server yang tidak tercantum kemungkinan tidak berwenang. Namun penerima disarankan tetap menerima pesan dan menerapkan filter spam. Qualifier fail, ditulis `-all`, menandai server yang tidak tercantum sebagai gagal total, dan sebagian penerima langsung menolak email itu. Pengirim yang memeriksa konfigurasi yang rumit sering mulai dengan `~all` agar email bisnis yang sah tidak terbuang tanpa sengaja.

RFC 7208 menetapkan dua batas ketat yang tidak boleh dilanggar. Pertama, satu domain hanya boleh memublikasikan satu SPF record. Dua record akan menghasilkan permerror, sehingga SPF tidak berlaku untuk semua email keluar Anda. Kedua, SPF membatasi pemeriksaan sampai paling banyak 10 lookup DNS untuk `include`, `a`, `mx`, `ptr`, `exists` dan `redirect`. Jika record Anda membutuhkan lookup kesebelas, server penerima mengembalikan permerror. Penerusan email juga membuat SPF gagal. Saat penerima meneruskan pesan Anda, IP server yang meneruskan tidak cocok dengan record Anda, sehingga SPF gagal.

## DKIM: tanda tangan yang membuktikan pesan tidak diubah

DKIM, yang didefinisikan dalam RFC 6376, bekerja pada pesannya, bukan pada servernya. Saat server Anda menyiapkan pesan untuk dikirim, server membuat hash kriptografis dari header tertentu dan isi pesan. Hash itu ditandatangani dengan private key, lalu hasilnya ditulis ke header `DKIM-Signature`. Header ini membawa dua nilai utama: domain penanda tangan di tag `d=` dan string selector di tag `s=`. DKIM hanya menyatakan apakah tanda tangannya valid. Keputusan tentang apa yang dilakukan jika gagal adalah tugas DMARC.

Saat pesan tiba, penerima membaca selector dan domain dari header, mencari public key di DNS pada `s._domainkey.d`, lalu memeriksa tanda tangannya. DKIM menandatangani header dan isi. DKIM tidak mengenkripsi email itu sendiri. Isi pesan tetap terkirim sebagai teks yang bisa dibaca, tetapi tanda tangannya membuktikan tidak ada yang mengubah subjek, data pengirim atau isi pesan selama pengiriman.

Penerusan email standar tidak mengubah header dan isi pesan. Karena itu tanda tangan DKIM yang valid biasanya tetap berlaku setelah diteruskan. Ini membuat DKIM lebih andal daripada SPF untuk email yang diteruskan. Meski begitu, mailing list yang menambahkan footer atau tag pada subjek tetap bisa merusak tanda tangan. Gmail mewajibkan key minimal 1024 bit dan menyarankan 2048.

Record public key DKIM di DNS berbentuk seperti ini:

```text
v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA...
```

Tag `v=DKIM1` menunjukkan versi protokol, `k=rsa` menyebut algoritma key, dan `p=` berisi public key dalam format base64. Jika Anda menjalankan server email sendiri, Anda bisa membuat pasangan key dengan [DKIM generator](/dkim-generator) (dalam bahasa Inggris) kami.

Jebakan yang sering terjadi adalah mengandalkan tanda tangan bawaan platform. Banyak platform email secara default menandatangani email keluar dengan domain bersama milik mereka sendiri (`d=shared-esp.example`). Tanda tangannya lolos, tetapi domain penanda tangan tidak cocok dengan domain From yang terlihat, sehingga kecocokan DMARC gagal. Anda perlu menyiapkan custom DKIM di pengaturan platform agar tanda tangannya memakai domain Anda di tag `d=`.

## DMARC: pemeriksaan yang mengikat keduanya ke alamat From Anda

Domain-based Message Authentication, Reporting, and Conformance mengikat pemeriksaan envelope dan tanda tangan kriptografis ke alamat From yang dibaca orang. Alignment atau kecocokan berarti domain yang lolos SPF atau DKIM sama dengan domain di baris From. DMARC lolos jika SPF atau DKIM lolos autentikasi DAN cocok dengan domain di header From. Pesan tidak perlu cocok di keduanya sekaligus. Namun Google menyarankan keduanya cocok dan menyebut bahwa kewajiban untuk keduanya mungkin datang nanti.

Misalkan perusahaan Anda mengirim newsletter mingguan. Pesannya menampilkan `From: news@example.com`. Untuk menangani bounce, layanan email Anda memakai alamat envelope miliknya sendiri, dengan Return-Path `bounce-123@bounces.esp-mail.example`. Layanan Anda juga menandatangani pesan dengan custom DKIM memakai `d=example.com`.

Saat server penerima memproses pesan yang masuk ini:
1. SPF memeriksa domain envelope `bounces.esp-mail.example` dan lolos, tetapi `esp-mail.example` tidak sama dengan `example.com`, sehingga SPF gagal dalam kecocokan DMARC.
2. DKIM memeriksa tanda tangan untuk `example.com`, memverifikasi hash kriptografisnya, dan cocok dengan domain header From `example.com`, sehingga DKIM lolos dan memenuhi kecocokan DMARC.
3. Karena DKIM lolos dan cocok, pesan itu lolos DMARC.

DMARC punya dua mode kecocokan untuk SPF dan DKIM. Relaxed alignment adalah pengaturan default dan mengizinkan subdomain dari domain organisasi Anda cocok dengan domain utamanya. Misalnya, email yang dikirim dari `news.example.com` cocok dengan domain SPF atau DKIM `example.com`. Strict alignment, yang disetel dengan `aspf=s` atau `adkim=s`, mewajibkan domain sama persis dan tidak menerima perbedaan subdomain.

DMARC record Anda bisa memuat tiga instruksi kebijakan:
- `p=none`: Menjalankan DMARC dalam mode pemantauan. Penerima tetap mengirimkan email seperti biasa sambil mengumpulkan laporan autentikasi.
- `p=quarantine`: Meminta penerima memindahkan email yang gagal DMARC ke folder spam atau junk.
- `p=reject`: Meminta penerima menolak email yang gagal DMARC.

Tag rua memberi tahu penerima ke mana laporan agregat dikirim. Biasanya laporan ini berupa file XML harian yang menunjukkan alamat IP mana yang mengirim email atas nama domain Anda. Record awal standar yang dipublikasikan di `_dmarc.example.com` terlihat seperti ini:

```text
_dmarc.example.com TXT "v=DMARC1; p=none; rua=mailto:dmarc@example.com"
```

Pada Mei 2026, Internet Engineering Task Force memublikasikan RFC 9989 di Standards Track, bersama RFC 9990 untuk laporan agregat dan RFC 9991 untuk laporan kegagalan. Standar baru ini secara resmi menggantikan RFC 7489 dan RFC 9091. Record lama yang dimulai dengan `v=DMARC1` tetap berfungsi, tetapi spesifikasi baru mengubah beberapa tag operasional. Tag persentase (`pct`) dan tag format laporan (`rf`) dihapus dan tidak lagi menjadi bagian dari standar. Tag interval laporan (`ri`) diberi status historis. Pengirim yang menguji penerapan kebijakan kini memakai tag baru `t` untuk mode uji. Administrator bisa menetapkan kebijakan untuk subdomain yang tidak ada dengan tag `np`. Jika DNS record Anda saat ini berisi tag persentase, rencanakan untuk menghapusnya. Anda bisa membuat record yang baru atau membersihkan tag lama dengan [DMARC generator](/dmarc-generator) (dalam bahasa Inggris) kami.

## Cara server penerima memeriksa pesan

Saat email masuk tiba di gateway penerima, server menjalankan pemeriksaan autentikasi dalam urutan tertentu:

1. Server menerima koneksi jaringan, mencatat alamat IP pengirim, dan menilai sapaan HELO atau EHLO.
2. Server mengambil domain dari Return-Path di envelope dan membaca DNS untuk memeriksa izin SPF bagi IP pengirim.
3. Server menemukan header `DKIM-Signature`, mencari public key di DNS pada `selector._domainkey.domain`, lalu menghitung ulang hash kriptografis dari header dan isi pesan.
4. Server memeriksa header From yang terlihat dan mencari DMARC record di DNS pada `_dmarc.domain`.
5. Server menilai kecocokan domain, yaitu apakah domain SPF atau domain DKIM yang lolos autentikasi sama dengan domain From yang terlihat.
6. Server menerapkan kebijakan DMARC yang dipublikasikan, yaitu none, quarantine atau reject, berdasarkan hasil kecocokan.
7. Jika Anda meminta laporan dengan rua, server menambahkan hasilnya ke laporan agregat berikutnya untuk Anda.

Di Gmail, Anda bisa melihat ketiga hasil ini dengan "Tampilkan versi asli" pada pesan apa pun.

## Di mana SPF, DKIM dan DMARC biasanya bermasalah

Memublikasikan dua SPF record adalah kesalahan yang sering terjadi saat menambah layanan email baru. Admin mungkin mengikuti panduan setup untuk menambahkan `v=spf1 include:sendgrid.net ~all` dan memublikasikan TXT record kedua di samping record Google yang sudah ada. RFC 7208 melarang lebih dari satu SPF record di satu domain. Saat server penerima menemukan dua record, pemeriksaan berhenti dengan permerror dan SPF gagal. Solusinya adalah menggabungkan semua vendor yang diizinkan ke dalam satu string: `v=spf1 include:_spf.google.com include:sendgrid.net ~all`.

Melewati batas 10 lookup juga membuat pengiriman gagal tanpa terlihat. Setiap tag `include`, `a`, `mx`, `ptr`, `exists` atau `redirect` dihitung dalam batas ini, termasuk include yang bersarang di dalam record vendor. Jika record Anda membutuhkan lookup kesebelas, server penerima otomatis mengembalikan permerror. Anda bisa mengatasinya dengan menghapus record vendor lama, memakai alat audit lookup, atau mengganti include dengan rentang `ip4` yang eksplisit. Cara terakhir hanya untuk IP pengirim yang Anda kendalikan dan tidak berubah.

Menghubungkan layanan pengiriman baru tanpa menambahkannya ke DNS membuat email keluar Anda rentan terkena filter spam. Tim sales atau support sering menghubungkan aplikasi penjadwalan, platform helpdesk atau sistem invoice tanpa memberi tahu pengelola DNS. Server baru ini tidak tercantum di SPF record Anda dan tidak menandatangani dengan DKIM key Anda. Akibatnya pesan mereka gagal autentikasi dan masuk ke folder spam. Solusinya adalah aturan sederhana: siapa pun yang menghubungkan alat baru harus memberi tahu pengelola DNS. Periksa juga laporan DMARC Anda untuk menemukan pengirim yang tidak Anda kenali.

Mengandalkan DKIM yang ditandatangani platform merusak kecocokan DMARC, meskipun tanda tangannya valid secara kriptografis. Saat layanan email menandatangani pesan dengan `d=platform-mail.example` sementara baris From menampilkan `From: support@yourcompany.example`, DKIM lolos pemeriksaan teknis tetapi gagal dalam kecocokan dengan domain Anda. Untuk memperbaikinya, buka pengaturan platform, buat custom DKIM key untuk domain Anda, dan publikasikan record selector di konsol DNS Anda.

Penerusan pesan sering membuat SPF gagal saat penerima meneruskan email kantor ke kotak masuk pribadi. Server perantara meneruskan pesan dengan alamat IP miliknya sendiri, yang tidak cocok dengan SPF record Anda. Anda tidak bisa mengendalikan pengaturan penerusan di luar. Namun tanda tangan DKIM yang valid membuat pesan Anda tetap utuh setelah diteruskan dan tetap memenuhi syarat DMARC di server berikutnya.

Mengirim kampanye massal lewat platform lain dengan alamat From `@gmail.com` gratis memang pasti gagal DMARC. Pedoman pengirim Google secara jelas memperingatkan bahwa memalsukan alamat Gmail dari server luar merusak deliverability (tingkat keterkiriman email). Platform pihak ketiga tidak bisa membuat tanda tangan kriptografis yang valid atau lolos SPF untuk domain Google. Karena itu penyedia mailbox seperti Gmail menolak atau mengkarantina email tersebut. Pengirim sebaiknya selalu melakukan outreach dari domain sendiri.

Membiarkan DMARC tetap di `p=none` untuk selamanya membuat domain Anda rentan dipalsukan. Kebijakan pemantauan memang memenuhi syarat minimum Gmail dan Microsoft. Namun `p=none` meminta server penerima untuk tidak mengambil tindakan perlindungan apa pun saat email palsu muncul. Orang yang memalsukan domain Anda tidak akan dihentikan oleh DMARC dengan pengaturan itu. Tinjau laporan agregat harian Anda selama beberapa minggu, pastikan semua sumber pengiriman yang sah sudah cocok, lalu naikkan kebijakan Anda ke `p=quarantine` dan kemudian ke `p=reject`.

## Checklist setup SPF, DKIM dan DMARC

Kerjakan langkah-langkah ini secara berurutan:

1. Catat setiap layanan internal, platform marketing, helpdesk dan alat transaksional yang mengirim email dengan domain Anda.
2. Publikasikan satu [SPF record](/glossary/spf) gabungan yang mencakup server pengirim yang diizinkan, dengan total lookup di bawah 10. [SPF checker](/spf-checker) (dalam bahasa Inggris) menghitungnya untuk Anda.
3. Aktifkan custom DKIM dengan domain Anda sendiri untuk setiap platform pengiriman dan publikasikan record selector yang sesuai di DNS.
4. Pastikan alamat IP pengirim Anda punya DNS forward yang valid dan [PTR record](/glossary/ptr-record) yang cocok di reverse DNS.
5. Publikasikan [DMARC record](/blog/what-is-a-dmarc-record) awal di `_dmarc` dengan `p=none` dan kotak masuk `rua` yang aktif untuk mulai menerima laporan agregat XML.
6. Daftarkan domain pengirim Anda di [Google Postmaster Tools](/glossary/postmaster-tools) untuk memantau reputasi domain, error pengiriman dan tingkat keluhan spam.
7. Tinjau laporan agregat DMARC Anda selama beberapa minggu untuk memastikan setiap aliran pengiriman yang sah sudah cocok di SPF atau DKIM.
8. Naikkan kebijakan DMARC Anda dari `p=none` ke `p=quarantine`, nilai kestabilan pengiriman, lalu pindahkan kebijakan Anda ke `p=reject`.
9. Kirim pesan uji ke akun Gmail pribadi dan buka "Tampilkan versi asli" untuk memastikan SPF, DKIM dan DMARC semuanya menunjukkan PASS.

## Pertanyaan yang sering diajukan

**Apakah DMARC membutuhkan SPF dan DKIM sekaligus?**
Tidak. DMARC mensyaratkan SPF atau DKIM lolos autentikasi dan cocok dengan domain di header From yang terlihat. Mengaktifkan kedua protokol di domain Anda memberi ketahanan lebih saat penerusan merusak SPF, dan Google menyarankan keduanya untuk pengiriman bervolume tinggi. Namun pesan tetap lolos DMARC jika hanya satu mekanisme yang lolos dan cocok.

**Apa perbedaan SPF dan DMARC?**
SPF mengizinkan alamat IP server email tertentu untuk mengirim email atas nama alamat envelope sender di header Return-Path. DMARC memeriksa alamat From yang terlihat di aplikasi email orang. DMARC memastikan SPF atau DKIM cocok dengan domain yang terlihat itu, dan memberi tahu server penerima apakah pesan yang gagal harus diterima, dikarantina atau ditolak.

**Apakah saya butuh DMARC jika mengirim kurang dari 5.000 email per hari?**
Gmail hanya mewajibkan DMARC untuk pengirim massal. Jadi Anda tidak akan diblokir karena tidak memakainya pada volume rendah, tetapi Anda tetap butuh SPF atau DKIM. Meski begitu, record p=none dengan rua tetap layak dipublikasikan. Laporannya menunjukkan layanan apa saja yang mengirim atas nama domain Anda, termasuk layanan yang Anda lupakan dan siapa pun yang memalsukan domain Anda.

**Bolehkah saya punya dua SPF record?**
Tidak. RFC 7208 melarang lebih dari satu SPF record di satu domain. Jika server penerima menemukan beberapa SPF record di DNS, pemeriksaan langsung dihentikan dengan permerror dan SPF dianggap gagal. Anda harus menggabungkan semua alamat IP yang diizinkan dan include pihak ketiga ke dalam satu record yang dimulai dengan `v=spf1`.

**Bagaimana cara paling sederhana menjelaskan DMARC?**
SPF memeriksa bahwa server pengirim boleh mengirim untuk domain Anda. DKIM memeriksa tanda tangan yang menunjukkan pesan tidak diubah. DMARC adalah pemeriksaan terakhir. DMARC memastikan salah satu dari keduanya milik domain yang sama dengan alamat From. Jika tidak ada yang cocok, DMARC memberi tahu server penerima apakah pesan tetap dikirimkan, dipindahkan ke spam atau ditolak.

Record ini membuktikan siapa Anda, tetapi tidak memperbaiki alamat tujuan pengiriman Anda. Email ke alamat yang sudah mati tetap akan bounce. Panduan kami tentang [cara menurunkan bounce rate email](/blog/how-to-reduce-email-bounce-rate) membahas sisi itu, dan Anda bisa memeriksa daftar Anda dengan [Giggal.ai](/email-list-cleaning) (dalam bahasa Inggris) sebelum pengiriman berikutnya.
