---
title: "Apa Itu DMARC Record?"
seoTitle: "Apa Itu DMARC Record? Tag, Contoh dan Laporan (2026)"
description: "DMARC record adalah TXT record di _dmarc.domainanda yang memberi tahu penerima cara menangani email gagal autentikasi. Semua tag standar 2026, dengan contoh."
slug: apa-itu-dmarc-record
date: 2026-10-23
updated: 2026-10-23
keyword: apa itu dmarc record
image: /blog/covers/id/apa-itu-dmarc-record.webp
imageAlt: Panduan apa itu DMARC record dengan rincian tag dan ringkasan kebijakan
cta: Lindungi domain Anda, lalu jaga bounce tetap rendah
---

DMARC record adalah satu baris teks pendek yang Anda tambahkan ke pengaturan DNS domain Anda. Record ini memberi tahu server email lain apa yang harus dilakukan dengan email yang mengaku berasal dari domain Anda tetapi gagal dalam pemeriksaan keamanan. Record ini juga memberi tahu ke mana laporan tentang email yang mereka terima atas nama Anda harus dikirim.

**Dalam satu kalimat:** DMARC adalah aturan publik yang berbunyi "jika ada email yang mengaku dari domain saya tetapi sebenarnya bukan dari saya, masukkan ke spam atau blokir, lalu kirimi saya laporan."

## Penjelasan DMARC dengan contoh

### Masalahnya

Siapa pun bisa mengirim email dan menulis alamat Anda di baris From. Misalkan domain Anda `example.com`. Seorang penipu mengirim email ini ke pelanggan Anda:

```text
From: billing@example.com
Subject: Your invoice is overdue
Pay here: http://pay-now.example.net
```

Pelanggan Anda melihat `example.com` dan memercayainya. Padahal Anda tidak pernah mengirim email itu.

### Dua pemeriksaan yang sudah ada

Penyedia layanan email seperti Gmail dan Outlook sudah bisa menjalankan dua pemeriksaan pada setiap email:

- **SPF:** apakah email ini datang dari server yang diizinkan `example.com` untuk mengirim emailnya?
- **DKIM:** apakah email ini membawa tanda tangan digital `example.com`?

Jika berdiri sendiri, kedua pemeriksaan ini punya celah. Penipu bisa lolos untuk domainnya sendiri, sementara baris From tetap menampilkan domain Anda. Tidak ada yang menghubungkan pemeriksaan itu dengan alamat yang dilihat pelanggan Anda.

### Apa yang ditambahkan DMARC

DMARC menambahkan satu aturan. SPF atau DKIM harus lolos untuk domain yang sama dengan domain di baris From. Kecocokan ini disebut **alignment**. Jika tidak ada pemeriksaan yang lolos untuk domain itu, email tersebut gagal DMARC.

DMARC juga membuat Anda bisa menentukan apa yang terjadi pada email yang gagal.

### Isi DMARC record, bagian demi bagian

Anda menambahkan baris ini ke pengaturan DNS `example.com`:

```text
v=DMARC1; p=reject; rua=mailto:reports@example.com
```

Inilah arti setiap bagiannya:

- `v=DMARC1`: "Ini aturan DMARC saya."
- `p=reject`: "Jika ada email yang mengaku dari example.com tetapi gagal pemeriksaan, blokir."
- `rua=mailto:reports@example.com`: "Kirimi saya laporan harian tentang semua pihak yang mengirim email atas nama saya."

### Apa yang terjadi pada email palsu itu

1. Email penipu dari `billing@example.com` sampai di Gmail.
2. Gmail menjalankan SPF dan DKIM. Tidak ada pemeriksaan yang lolos untuk `example.com`.
3. Gmail membaca DMARC record Anda. Isinya `p=reject`.
4. Gmail memblokir email itu. Pelanggan Anda tidak pernah melihatnya.

Email asli Anda lolos pemeriksaan yang sama, jadi email itu terkirim seperti biasa.

### Tiga pilihan untuk p

| Pengaturan | Apa yang terjadi pada email yang gagal DMARC | Kapan dipakai |
| --- | --- | --- |
| p=none | Tidak ada. Email terkirim seperti biasa, dan Anda mendapat laporan. | Pertama, saat Anda mencari semua pengirim asli Anda |
| p=quarantine | Email masuk ke folder spam. | Setelah semua pengirim asli Anda lolos |
| p=reject | Email diblokir sepenuhnya. | Saat Anda yakin tidak ada email asli yang akan gagal |

### Cara sebagian besar domain menyiapkannya

1. Mulai dengan `p=none` dan baca laporan hariannya.
2. Temukan setiap layanan asli yang mengirim email untuk Anda, seperti alat email dan helpdesk Anda. Pastikan setiap layanan lolos.
3. Pindah ke `p=quarantine`, lalu ke `p=reject`. Sekarang tidak ada yang bisa memalsukan domain Anda di server penerima yang mengikuti kebijakan Anda.

Jadi sebagian besar domain mulai dengan record seperti ini, yang hanya memantau:

```text
v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com
```

Sisa panduan ini menjelaskan setiap bagian DMARC record secara lebih rinci, serta opsi tambahan yang bisa Anda pasang nanti.

## SPF, DKIM dan alamat From secara lebih rinci

DMARC bekerja di atas SPF dan DKIM. Panduan kami tentang [SPF dan DKIM](/blog/spf-dkim-dmarc-explained) membahas keduanya secara lengkap. Versi singkatnya ada di bawah ini.

**SPF** adalah daftar server yang diizinkan mengirim email untuk domain Anda. Server penerima memeriksa apakah email datang dari server yang ada di daftar itu.

**DKIM** adalah tanda tangan digital yang ditambahkan ke setiap email. Server penerima mencocokkan tanda tangan itu dengan key di DNS Anda. Jika tanda tangannya valid, email tidak diubah selama perjalanan dan ditandatangani oleh domain Anda.

**Alamat From** adalah alamat pengirim yang dilihat penerima di kotak masuknya, misalnya `hello@example.com`. DMARC memeriksa apakah SPF atau DKIM lolos untuk domain yang sama ini.

## Seperti apa bentuk DMARC record

### Lokasinya di DNS

DNS adalah daftar pengaturan publik untuk domain Anda. Anda mengubahnya di penyedia DNS, yang biasanya adalah perusahaan tempat Anda membeli domain atau penyedia hosting Anda. DMARC record adalah TXT record, yaitu entri DNS yang berisi teks biasa.

Anda menambahkannya dengan nama host `_dmarc`. Sebagian besar dashboard DNS otomatis menambahkan domain Anda di bagian akhir, jadi `_dmarc` menjadi `_dmarc.example.com`.

Waspadai satu kesalahan yang umum. Sebagian dashboard hanya meminta `_dmarc`. Jika Anda mengetik nama lengkap `_dmarc.example.com` di sana, record akan berada di `_dmarc.example.com.example.com`. Server penerima tidak akan menemukannya di situ.

### Aturan penulisannya

- **Harus dimulai dengan `v=DMARC1`.** Ini harus menjadi bagian pertama dari record. `DMARC1` harus ditulis dengan huruf kapital. Jika Anda menulis `v=dmarc1`, menaruh bagian lain di depan, atau salah mengejanya, server penerima mengabaikan seluruh record. Domain Anda lalu dianggap tidak punya kebijakan DMARC.
- **Pisahkan setiap bagian dengan titik koma.** Spasi di sekitar titik koma diperbolehkan.
- **Jika kebijakannya tidak ada.** Misalkan bagian `p` tidak ada atau salah, tetapi record punya alamat laporan yang valid di `rua`. Penerima lalu menganggap kebijakannya `p=none`. Jika `p` dan `rua` sama-sama tidak ada atau salah, penerima melewatkan DMARC untuk domain Anda sepenuhnya.
- **Publikasikan hanya satu DMARC record.** Jika server penerima menemukan dua TXT record atau lebih yang dimulai dengan `v=DMARC1`, semua record itu dibuang. Aturan ini berasal dari [RFC 9989](https://www.rfc-editor.org/info/rfc9989), standar DMARC yang berlaku sekarang. Dua record tidak memberi Anda dua kebijakan. Domain Anda justru tidak terlindungi sama sekali.

### Cara memeriksa record Anda

Anda bisa melihat record Anda dengan perintah di terminal komputer:

```text
dig TXT _dmarc.example.com +short
nslookup -type=TXT _dmarc.example.com
```

Pakai `dig` di Linux dan macOS. Perintah ini menampilkan record Anda dalam satu baris, di dalam tanda kutip. Pakai `nslookup` di Windows. Perintah ini menampilkan record yang dikembalikan server DNS Anda.

Jika perintah itu tidak menampilkan apa pun, ada dua kemungkinan. Record belum tersebar di DNS, atau record ditambahkan dengan nama host yang salah.

## Semua tag DMARC, dan mana yang Anda butuhkan

Setiap bagian DMARC record, seperti `p=none`, disebut tag. Standar yang berlaku sekarang, dari Mei 2026, punya sebelas tag.

| Tag | Fungsinya, dalam bahasa sederhana | Nilai yang mungkin | Jika tidak dipasang | Apakah Anda butuh? |
| --- | --- | --- | --- | --- |
| v | Menyatakan "ini DMARC record". Harus di urutan pertama. | DMARC1 | Wajib | Ya |
| p | Kebijakan Anda: apa yang dilakukan dengan email yang gagal. Berlaku untuk domain Anda dan subdomainnya. | none, quarantine, reject | Dianggap none, jika rua valid | Ya |
| rua | Ke mana laporan ringkasan harian dikirim | Satu atau beberapa alamat mailto:, dipisahkan koma | Anda tidak mendapat laporan | Ya |
| sp | Kebijakan terpisah untuk subdomain yang ada, seperti news.example.com | none, quarantine, reject | Sama dengan p | Hanya jika subdomain butuh aturan berbeda |
| np | Kebijakan untuk subdomain yang tidak ada di DNS | none, quarantine, reject | Sama dengan sp, atau p jika sp tidak ada | Hanya untuk memblokir subdomain karangan |
| adkim | Seberapa persis domain DKIM harus cocok. r = relaxed, s = strict | r, s | r | Jarang. Relaxed adalah pilihan normal |
| aspf | Seberapa persis domain SPF harus cocok. r = relaxed, s = strict | r, s | r | Jarang. Relaxed adalah pilihan normal |
| t | Mode uji. Membuat penerima menerapkan kebijakan Anda satu tingkat lebih lunak | y, n | n | Hanya saat Anda pindah ke kebijakan yang lebih ketat |
| ruf | Ke mana laporan untuk setiap email gagal dikirim | Satu atau beberapa alamat mailto:, dipisahkan koma | Anda tidak mendapat laporan | Jarang, karena batasan privasi |
| fo | Opsi untuk laporan per email | 0, 1, d, s | 0 | Hanya jika Anda memakai ruf |
| psd | Menandai domain public suffix | y, n, u | u | Hanya untuk public suffix atau organisasi besar yang membagikan sebagian DNS-nya |

Relaxed dan strict bekerja seperti ini. Dengan relaxed, subdomain dihitung cocok, jadi `mail.example.com` cocok dengan `example.com`. Dengan strict, kedua domain harus sama persis.

Tiga tag lama dihapus dalam standar 2026. Ketiganya adalah tag persentase (`pct`), tag format laporan (`rf`) dan tag interval laporan (`ri`). Sisa `pct=100` tidak menimbulkan masalah. `pct` di bawah 100 dulu dipakai untuk menerapkan kebijakan hanya pada sebagian email Anda selama masa peralihan. Sekarang tugas itu dikerjakan oleh tag `t` yang baru.

**Yang dibutuhkan sebagian besar domain:** hanya `v`, `p` dan `rua`.

- Tambahkan `sp` atau `np` jika subdomain Anda butuh aturan berbeda.
- Biarkan `psd`. Anda hanya membutuhkannya jika menjalankan organisasi besar yang membagikan sebagian DNS-nya (`psd=n`), atau public suffix seperti `co.uk` (`psd=y`).
- Kecocokan relaxed (`adkim=r` dan `aspf=r`) adalah default dan berfungsi untuk hampir semua domain. Anda hanya butuh tag alignment jika aturan kepatuhan yang ketat melarang penandatanganan dengan subdomain.

Anda bisa membuat record dengan tag-tag ini, atau merapikan record lama, dengan [DMARC generator](/dmarc-generator) (dalam bahasa Inggris) kami.

## Apa yang sebenarnya dilakukan p=none, quarantine dan reject

Tag `p` adalah bagian terpenting dari record. Tag ini memberi tahu server penerima apa yang dilakukan dengan email yang gagal DMARC. Ada tiga pilihan. Setiap pilihan adalah satu tahap menuju perlindungan penuh.

**p=none: hanya memantau.** Penerima tidak melakukan apa pun yang khusus pada email yang gagal. Email terkirim seperti biasa, dan hanya filter spam biasa yang berlaku. Jika digabung dengan laporan di `rua`, RFC 9989 menyebut ini Monitoring Mode. Mode ini menunjukkan setiap layanan yang mengirim email atas nama domain Anda, tanpa risiko bagi pengiriman Anda.

**p=quarantine: kirim ke spam.** Penerima menganggap email yang gagal sebagai email mencurigakan. Di sebagian besar penyedia layanan email, email itu masuk ke folder spam penerima. Ini melindungi penerima Anda dari email palsu. Email asli dari alat yang salah disetel tidak hilang, karena masih bisa ditemukan di folder spam.

**p=reject: blokir.** Penerima menolak email yang gagal. Sebagian besar melakukannya saat pengiriman, dengan kode error permanen yang diawali angka 5. Email itu tidak pernah sampai ke kotak masuk. Server pengirim menerima pesan bounce sebagai gantinya.

### Penerima tidak selalu mengikuti kebijakan Anda

Kebijakan Anda adalah permintaan, bukan perintah. Standar menyatakan bahwa penerima sebaiknya tidak menolak email hanya karena `p=reject`. Jika penerima tidak tahu hal lain tentang email itu, penerima sebaiknya memperlakukannya sebagai quarantine. Penyedia layanan email juga memakai data reputasi pengirim dan filter spam mereka sendiri di samping kebijakan Anda.

### Kenapa reject butuh DKIM, bukan hanya SPF

Penerusan email membuat SPF gagal. Misalkan seseorang meneruskan email kantornya ke akun pribadi. Server yang meneruskan mengirim email itu dari alamat IP miliknya sendiri. Alamat itu tidak ada di SPF record Anda, jadi pemeriksaan SPF gagal.

DKIM tetap berlaku setelah penerusan. Tanda tangannya ikut di dalam email itu sendiri, jadi tetap valid dan tetap cocok dengan domain Anda. Karena itu domain dengan `p=reject` harus memakai DKIM dan tidak bergantung pada SPF saja.

### Mode uji dengan t=y

RFC 9989 menambahkan mode uji. Pasang `t=y`, dan penerima menerapkan kebijakan Anda satu tingkat lebih lunak daripada yang Anda publikasikan:

- `reject` diperlakukan sebagai `quarantine`.
- `quarantine` diperlakukan sebagai `none`.

Mode uji tidak mengubah laporan Anda. Mode ini juga tidak berpengaruh jika kebijakan Anda `p=none`. Dengan mode ini, Anda bisa melihat bagaimana kebijakan yang lebih ketat bekerja pada email nyata sebelum Anda menjadikannya permanen.

## Subdomain: sp dan np

Subdomain adalah nama tambahan di depan domain Anda, seperti `marketing.example.com` atau `support.example.com`. Banyak perusahaan mengirim email dari subdomain. Tag `sp` dan `np` menetapkan aturan untuk subdomain yang tidak punya DMARC record sendiri.

### Cara penerima menemukan record yang tepat

1. Penerima lebih dulu mencari DMARC record untuk domain yang sama persis dengan baris From. Jika Anda mengirim dari `news.example.com` dan `_dmarc.news.example.com` ada, penerima memakai record itu.
2. Jika record tidak ada di sana, penerima mencari record utama Anda di `_dmarc.example.com`. Penerima menemukannya dengan naik ke atas nama domain, satu bagian demi satu bagian, ke arah ujung nama. Penerima tidak memakai Public Suffix List untuk hal ini.
3. Setelah menemukan record utama Anda, penerima memeriksa apakah subdomain pengirim ada di DNS.

Lalu penerima memilih aturannya:

- Jika subdomain ada, penerima menerapkan `sp`. Jika tidak ada `sp`, penerima menerapkan `p`.
- Jika subdomain tidak ada (DNS mengembalikan NXDOMAIN, yang berarti "nama itu tidak ada"), penerima menerapkan `np`. Jika tidak ada `np`, penerima memakai `sp`. Jika `sp` juga tidak ada, penerima memakai `p`.

### Contoh

Misalkan record ini dipublikasikan di `_dmarc.example.com`:

```text
v=DMARC1; p=reject; sp=quarantine; np=reject; rua=mailto:dmarc-reports@example.com
```

Record ini menetapkan tiga aturan berbeda:

- **Email dari `example.com` sendiri** memakai `p=reject`. Jika gagal DMARC, penerima diminta memblokirnya.
- **Email dari `news.example.com`**, subdomain yang ada di DNS, memakai `sp=quarantine`. Misalkan newsletter gagal karena vendor salah menyetel sesuatu. Email itu masuk ke spam, bukan bounce.
- **Email dari nama karangan seperti `invoices-2026.example.com`**, yang tidak ada di DNS, memakai `np=reject`. Subdomain yang hanya dikarang seseorang mendapat aturan yang ketat, meskipun subdomain asli Anda mendapat quarantine.

## Apa itu laporan DMARC?

DMARC punya dua jenis laporan:

- **Laporan agregat**, disetel dengan `rua`. Ini ringkasan harian.
- **Laporan kegagalan**, disetel dengan `ruf`. Laporan ini menjelaskan satu per satu email yang gagal.

### Laporan agregat (rua)

Laporan agregat adalah ringkasan dari satu penyedia layanan email, seperti Gmail. Laporan ini mencantumkan semua email yang diterima penyedia itu dan mengaku berasal dari domain Anda. Bentuknya file XML, yaitu file teks terstruktur yang dibuat untuk dibaca software. Penyedia mengirimnya sebagai lampiran email, berupa file `.xml` biasa atau file terkompresi seperti `.xml.gz`.

Setiap laporan biasanya mencakup satu hari UTC. Standar menyatakan penerima sebaiknya mengirim laporan agregat setidaknya setiap 24 jam. Penerima tidak wajib mengirim laporan apa pun.

Berikut contoh laporan yang dipersingkat:

```xml
<feedback>
  <report_metadata>
    <org_name>mail.receiver.example</org_name>
    <report_id>20261003.example.com</report_id>
    <date_range>
      <begin>1790985600</begin>
      <end>1791071999</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>example.com</domain>
    <p>none</p>
    <sp>none</sp>
  </policy_published>
  <record>
    <row>
      <source_ip>192.0.2.10</source_ip>
      <count>412</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>example.com</header_from>
      <envelope_from>bounces.esp-mail.example</envelope_from>
    </identifiers>
    <auth_results>
      <dkim><domain>example.com</domain><result>pass</result></dkim>
      <spf><domain>bounces.esp-mail.example</domain><result>pass</result></spf>
    </auth_results>
  </record>
</feedback>
```

Inilah isinya, blok demi blok:

- **`<report_metadata>`**: laporan ini datang dari `mail.receiver.example`. Laporan ini mencakup satu hari UTC penuh.
- **`<policy_published>`**: kebijakan yang dilihat penerima untuk `example.com`. Di sini kebijakannya `p=none` dan `sp=none`.
- **`<row>`**: 412 email datang dari alamat IP `192.0.2.10`.
- **SPF**: di bawah `<auth_results>`, SPF lolos, tetapi untuk domain `bounces.esp-mail.example`. Domain itu bukan domain From Anda, `example.com`. Jadi di bawah `<policy_evaluated>`, SPF menunjukkan `fail`, karena tidak cocok.
- **DKIM**: di bawah `<auth_results>`, DKIM lolos untuk `example.com`. Itu cocok dengan domain From yang ditampilkan di `<identifiers>`. Jadi DKIM lolos dan cocok, dan 412 email ini lolos DMARC.

Intinya sederhana. `<auth_results>` menunjukkan hasil mentah pemeriksaan SPF dan DKIM. `<policy_evaluated>` menunjukkan apakah setiap pemeriksaan juga cocok dengan domain From Anda. DMARC memakai yang kedua.

### Laporan kegagalan (ruf)

Laporan kegagalan, yang sering disebut laporan forensik, masing-masing menjelaskan satu email yang gagal. Laporan ini bisa berisi header email dan rincian tentang penerima. Karena risiko privasi ini, banyak penerima menghapus sebagian besar rinciannya atau tidak mengirim laporan kegagalan sama sekali. Tag `fo` menetapkan opsi untuk laporan ini. Tag ini hanya berpengaruh jika Anda memakai `ruf`.

### Membaca laporan

Standar menyarankan memakai software untuk membaca laporan agregat, bukan membacanya secara manual. Jika Anda mengirim ke banyak penyedia layanan email, setiap penyedia mengirimi Anda laporannya sendiri, setiap hari.

## Kenapa saya menerima email DMARC?

Anda menerima email harian ini karena tag `rua` di DMARC record Anda berisi alamat Anda. Setiap penyedia layanan email yang menerima email atas nama Anda mengirim ringkasan harian ke setiap alamat di tag itu.

Baris subjeknya mengikuti format tetap yang ditetapkan oleh [RFC 9990](https://www.rfc-editor.org/info/rfc9990):

```text
Report Domain: example.com Submitter: mail.receiver.example Report-ID: 20261003.example.com
```

Submitter adalah penyedia yang memeriksa email itu, seperti Google atau Microsoft. Laporan XML dilampirkan, sering dalam bentuk terkompresi.

Jangan kirim laporan ini ke kotak masuk pribadi. Arahkan `rua` ke kotak masuk terpisah atau ke layanan pengolah laporan. Jika Anda tidak ingat pernah menyetelnya, periksa DMARC record Anda. Admin sebelumnya, atau panduan setup sebuah platform email, mungkin telah menambahkannya.

### Mengirim laporan ke domain lain

Misalkan domain Anda `example.com`, dan Anda ingin laporan dikirim ke alamat di `reports.example.net`. Domain penerima laporan harus setuju menerimanya. Caranya dengan memublikasikan TXT record di DNS-nya. Tanpa record itu, penerima mengabaikan alamat tersebut dan tidak mengirim laporan.

Record itu dipasang di nama host ini:

```text
example.com._report._dmarc.reports.example.net  TXT  v=DMARC1
```

Layanan laporan sering memublikasikan record wildcard sebagai gantinya (`*._report._dmarc.reports.example.net`). Satu record itu mencakup setiap domain pelanggan, jadi tidak perlu setup untuk setiap domain.

## Pindah dari p=none ke reject tanpa kehilangan email

Jangan langsung lompat ke reject. Naik satu tahap demi satu tahap:

1. **Mulai memantau.** Publikasikan DMARC record di `_dmarc` dengan `p=none` dan alamat `rua` yang berfungsi. Anda mulai menerima laporan, dan tidak ada yang berubah pada pengiriman Anda.
2. **Perbaiki pengirim Anda.** Baca laporannya. Temukan setiap layanan asli yang mengirim email untuk domain Anda dan gagal pemeriksaan, lalu perbaiki setup-nya.
3. **Pindah ke quarantine.** Ganti ke `p=quarantine` setelah semua pengirim asli Anda lolos secara konsisten. Periksa folder spam untuk memastikan tidak ada email asli yang masuk ke sana.
4. **Pindah ke reject.** Ganti ke `p=reject`. Email palsu atas nama Anda kini diblokir sebelum sampai ke siapa pun.

Proses ini bisa memakan waktu. Standar menyatakan bahwa membuat setiap pengirim lolos bisa memakan waktu berbulan-bulan, tergantung seberapa sering Anda mengirim. Alat penagihan, helpdesk dan platform marketing mudah terlewat, jadi terus tinjau laporan Anda.

**Jika pengguna Anda mengirim ke mailing list**, jalani lebih pelan. Standar menyarankan setidaknya satu bulan di `p=none`, lalu waktu yang sama di quarantine. Bandingkan hasilnya sebelum Anda pindah ke reject. Mailing list sering mengubah baris subjek, menambahkan footer atau mengirim ulang pesan. Perubahan ini merusak SPF dan kadang juga merusak DKIM. Membandingkan laporan beberapa minggu akan memperlihatkan masalah ini sebelum reject mulai memblokir email.

**Pakai mode uji untuk tahap terakhir.** Dengan `t=y`, Anda bisa memublikasikan `p=reject` sementara penerima tetap menerapkan quarantine. Anda bisa melihat reaksi penerima terhadap reject, tetapi email yang gagal tetap masuk ke spam, bukan bounce.

**Catatan tentang SPF yang ketat.** Jika SPF record Anda diakhiri dengan `-all`, sebagian penerima menolak email yang gagal di pemeriksaan SPF, sebelum DMARC berjalan. Email itu tidak pernah sampai ke pemeriksaan DMARC. Email itu juga tidak muncul di laporan harian Anda.

## Kesalahan umum pada DMARC record

### Dua DMARC record

Ini sering terjadi saat seseorang menambahkan TXT record kedua alih-alih mengubah yang pertama. Penerima melihat keduanya dan membuang keduanya, sesuai RFC 9989. Domain Anda lalu bertindak seolah-olah tidak punya DMARC record sama sekali.

**Solusi:** periksa DNS Anda dan gabungkan semua tag ke dalam satu TXT record.

### Record dipasang di domain utama, bukan di _dmarc

Jika Anda memasukkan `example.com` sebagai nama host, record dibuat di domain utama Anda, bukan di `_dmarc.example.com`. Server email hanya mencari DMARC di nama `_dmarc`, jadi record itu tidak pernah ditemukan.

**Solusi:** isi nama host dengan `_dmarc`.

### v=DMARC1 tidak di urutan pertama, atau huruf besar kecilnya salah

Mengetik `v=dmarc1`, atau memulai dengan `p=none; v=DMARC1`, merusak record. Penerima mengabaikannya.

**Solusi:** jadikan `v=DMARC1` bagian paling awal dari record, diikuti titik koma.

### Alamat laporan tanpa mailto:

Menulis `rua=dmarc@example.com` alih-alih `rua=mailto:dmarc@example.com` merusak format alamat. Penerima tidak bisa memakai alamat tanpa awalan itu, jadi tidak ada laporan yang datang.

**Solusi:** awali setiap alamat di `rua` dan `ruf` dengan `mailto:`.

### Laporan dikirim ke domain lain tanpa izinnya

Jika Anda mengirim laporan ke domain vendor, dan domain itu belum memublikasikan record izin, Anda tidak mendapat laporan.

**Solusi:** pastikan setiap alamat laporan di luar domain Anda punya record `_report._dmarc` yang sesuai, seperti dijelaskan di atas.

### Reject dengan SPF saja

Penerusan email mengubah alamat IP yang mengirim email, jadi email yang diteruskan gagal SPF. Tanpa DKIM, email asli yang diteruskan gagal DMARC dan bounce di bawah kebijakan reject.

**Solusi:** siapkan penandatanganan DKIM di setiap layanan yang mengirim email Anda sebelum Anda melewati `p=none`.

### Tag yang sudah dihapus dari panduan lama

Banyak panduan lama menambahkan tag persentase, dengan nilai seperti 100, atau 20 untuk penerapan sebagian. Sisa `pct=100` tidak menimbulkan masalah, tetapi penerapan dengan persentase tidak lagi menjadi bagian dari standar.

**Solusi:** hapus tag persentase lama. Pakai `t=y` jika Anda butuh kebijakan yang lebih lunak selama melakukan perubahan.

## Pertanyaan yang sering diajukan

**Apakah saya benar-benar butuh DMARC record?**
Ya, jika Anda mengirim email ke akun Gmail atau Outlook pribadi. Google dan Microsoft sama-sama mewajibkan pengirim 5.000 email atau lebih per hari untuk memublikasikan DMARC record, dengan domain From yang cocok. Pengirim yang lebih kecil tetap sebaiknya memilikinya. Record `p=none` dengan `rua` tidak memakan biaya, dan laporannya menunjukkan siapa yang mengirim email atas nama Anda.

**Bagaimana cara memeriksa DMARC record saya?**
Jalankan `dig TXT _dmarc.yourdomain.com +short` di terminal Anda, atau `nslookup -type=TXT _dmarc.yourdomain.com` di Windows. Hasilnya seharusnya record Anda, yang dimulai dengan `v=DMARC1`. Anda juga bisa mengirim email uji ke akun Gmail, membukanya, lalu memilih "Tampilkan versi asli". Di sana terlihat apakah DMARC lolos.

**Apa arti DMARC fail?**
Artinya email itu gagal di kedua pemeriksaan. SPF maupun DKIM tidak lolos untuk domain yang cocok dengan domain From yang terlihat. Penerima lalu mengikuti kebijakan Anda. Sebagian mengirim balik penolakan yang jelas, seperti `550 5.7.1 Email rejected per DMARC policy for example.com`. Anda bisa menemukan penyebabnya dengan [membaca pesan bounce](/blog/550-5-7-1-error). Gmail memakai kode error `4.7.31` jika DMARC record tidak ada, dan `4.7.32` jika domain From tidak cocok.

**Bolehkah saya punya lebih dari satu DMARC record?**
Tidak. Satu domain hanya boleh memublikasikan satu DMARC record. RFC 9989 menyatakan bahwa jika server penerima menemukan lebih dari satu, semua record harus dibuang. Domain Anda lalu tidak punya kebijakan DMARC. Ubah record yang sudah ada, jangan menambahkan record kedua.

**Apakah DMARC menghentikan domain tiruan?**
Tidak. DMARC hanya melindungi domain yang sama persis di DNS Anda. DMARC tidak bisa mencegah orang mendaftarkan domain yang mirip, misalnya domain dengan dua huruf yang ditukar atau akhiran berbeda seperti .net. DMARC juga tidak bisa mencegah nama tampilan palsu. Domain tiruan membutuhkan langkah lain, seperti memantau pendaftaran domain baru yang meniru nama Anda.

DMARC record membuktikan bahwa email Anda benar-benar berasal dari Anda. Record ini tidak membantu saat Anda mengirim ke alamat yang sudah tidak ada. Periksa daftar Anda dengan [Giggal.ai](/email-list-cleaning) (dalam bahasa Inggris) sebelum pengiriman berikutnya untuk menghapus alamat tidak valid dan menjaga bounce rate tetap rendah.
