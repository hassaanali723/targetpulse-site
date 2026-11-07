---
title: "Cara Cek Domain Email Masuk Blacklist (dan Cara Keluar dari Blacklist)"
seoTitle: "Cek Blacklist Email dan Cara Keluar dari Blacklist"
description: "Cara cek apakah domain email atau IP pengirim Anda masuk blacklist, membaca kode error SMTP, menjalankan lookup DNSBL, dan langkah untuk keluar dari blacklist."
slug: cara-cek-domain-email-masuk-blacklist
date: 2026-11-07
updated: 2026-11-07
keyword: cek blacklist email
image: /blog/covers/id/cara-cek-domain-email-masuk-blacklist.webp
imageAlt: "Banner teknis biru tua tentang cek blacklist email, kueri DNSBL, dan alur keluar dari blacklist"
cta: "Bersihkan daftar Anda sebelum mengirim agar tidak masuk blacklist lagi"
---

Hanya sedikit masalah dalam operasional email yang seberat deliverability (tingkat keterkiriman email) yang tiba-tiba anjlok. Pada satu pagi, kampanye email Anda masih mendapat respons normal. Keesokan harinya, open rate turun hampir ke nol, balasan hilang, dan antrean email keluar Anda penuh dengan pemberitahuan penolakan:

```text
550 5.7.1 Service unavailable; client [198.51.100.24] blocked using zen.spamhaus.org
554 5.7.1 Access denied; sender IP listed in Barracuda Reputation Network
```

Jika server email penerima menolak pesan Anda sebelum menilai subjek atau isi pesan, berarti alamat IP pengirim atau domain Anda masuk ke DNS-based Blackhole List (DNSBL). Daftar ini lebih dikenal sebagai blacklist email atau RBL.

Masuk blacklist bukan filter konten sementara. Ini adalah pemblokiran langsung di tingkat jaringan. Jaringan penerima besar (termasuk Google Workspace, Microsoft 365, Yahoo Mail, dan gateway email perusahaan) mengecek database real-time ini saat handshake SMTP pertama. Jika identitas Anda ditandai, koneksi langsung diputus.

Berikut cara kerja blacklist email, cara cek apakah domain atau IP Anda terdaftar di database anti-spam utama, cara mengajukan permintaan penghapusan (delisting) yang berhasil, dan cara melindungi reputasi pengirim Anda agar tidak ditandai lagi.

---

## Pemblokiran oleh blacklist vs filter spam: apa bedanya?

Sebelum mencari penyebab, pastikan dulu apakah Anda menghadapi blacklist atau email yang masuk ke folder spam.

| Ciri | Blacklist DNSBL / RBL | Filter spam penyedia kotak masuk |
| --- | --- | --- |
| **Titik deteksi** | Handshake SMTP pertama (tahap koneksi) | Analisis setelah email diterima (penyortiran kotak masuk) |
| **Respons server** | Hard bounce (kode `550` atau `554`) atau koneksi diputus | Diterima dengan kode `250 OK` |
| **Yang terlihat oleh penerima** | Penerima tidak pernah menerima email | Email masuk ke folder Spam penerima |
| **Cakupan** | Global, di semua server email yang memakai DNSBL tersebut | Hanya di satu penyedia kotak masuk (misalnya hanya Gmail) |
| **Penyebab utama** | Terkena spam trap, bounce rate tinggi, open relay | Interaksi pengguna rendah, teks yang terlihat seperti spam, SPF/DKIM tidak ada |
| **Penyelesaian** | Permintaan delisting resmi ke pengelola blacklist | Warm-up domain, merapikan daftar, memulihkan reputasi |

Jika pesan Anda masuk ke folder Spam tetapi log server email Anda menunjukkan status pengiriman `250 OK`, domain Anda tidak masuk blacklist DNSBL. Penyedia kotak masuk penerima sedang menyortir pesan Anda berdasarkan skor reputasi dari algoritma mereka.

Jika server email Anda menerima penolakan keras yang menyebut nama host blacklist tertentu, domain atau IP Anda sedang terdaftar di DNSBL dan perlu segera ditangani.

---

## Cara cek apakah domain email atau IP Anda masuk blacklist

Untuk cek blacklist, Anda mengirim kueri ke server DNSBL dan melihat apakah IP pengirim atau domain Anda mengembalikan record positif. Anda bisa cek status dengan pemindai multi-RBL otomatis atau dengan lookup DNS manual dari terminal.

### 1. Pemindai multi-RBL otomatis

Layanan lookup multi-RBL mengecek puluhan blacklist publik sekaligus dalam beberapa detik. Pemindai gratis yang paling andal antara lain:

- **MXToolbox Blacklist Check**: Memindai lebih dari 100 DNSBL untuk IP pengirim atau nama domain Anda.
- **DNSChecker Email Blacklist**: Lookup cepat secara bersamaan di lebih dari 50 database DNSBL dan SURBL.
- **MultiRBL (valli.org)**: Mesin lookup ringan untuk developer yang mengecek lebih dari 200 blacklist.

Untuk menjalankan pemindaian, masukkan alamat IP pengirim Anda (IP server email Anda, bukan Wi-Fi kantor Anda) atau domain pengirim Anda (misalnya `company.com`).

```youtube
wOIJHhHZt04
Tonton: [How To Use Email Blacklist Checker or Spam Database Lookup Tool](https://www.youtube.com/watch?v=wOIJHhHZt04) dari InboxAlly: Mastering Email Deliverability
```

### 2. Cek DNSBL manual dari command line (untuk sysadmin)

Alat lookup web otomatis memang praktis. Namun kueri manual dengan `dig` atau `nslookup` memberi hasil mentah tanpa cache, langsung dari name server otoritatif milik pengelola blacklist.

Blacklist berbasis DNS memakai notasi alamat IP terbalik sesuai [IETF RFC 5782](https://datatracker.ietf.org/doc/html/rfc5782). Untuk mengecek blacklist secara manual:

1. Balik urutan keempat oktet alamat IPv4 pengirim Anda. Contohnya, jika IP server email Anda `198.51.100.24`, hasil baliknya adalah `24.100.51.198`.
2. Tambahkan domain utama DNSBL di belakangnya (misalnya `zen.spamhaus.org`).
3. Jalankan kueri DNS record `A` standar dengan `dig`:

```bash
# Query Spamhaus ZEN for IP 198.51.100.24
dig +short 24.100.51.198.zen.spamhaus.org

# Query Barracuda Reputation Block List (BRBL)
dig +short 24.100.51.198.b.barracudacentral.org

# Query SpamCop (SCBL)
dig +short 24.100.51.198.bl.spamcop.net
```

#### Cara membaca kode balasan

- **Tidak ada respons / `NXDOMAIN`**: IP Anda bersih. Blacklist tidak punya catatan negatif untuk alamat Anda.
- **Respons `127.0.0.X`**: IP Anda terdaftar. Oktet terakhir menunjukkan kategori entrinya:

```text
127.0.0.2 -> SBL (Spamhaus Block List: Verified spam source or trap hit)
127.0.0.4 -> XBL (Exploit Block List: Compromised server, malware, or open proxy)
127.0.0.10 -> PBL (Policy Block List: Residential/dynamic IP that should not send direct MX mail)
```

Untuk mengecek apakah nama domain Anda (bukan IP pengirim) ditandai di domain blacklist (DBL), kirim kueri langsung untuk nama domainnya:

```bash
# Query Spamhaus Domain Blocklist (DBL)
dig +short company.com.dbl.spamhaus.org
```

Respons `127.0.1.2` berarti nama domain itu sendiri ditandai sebagai domain spam. Akibatnya, penyedia email menolak pesan Anda meskipun Anda mengganti IP pengirim.

---

## 5 blacklist yang benar-benar berpengaruh

Ada ratusan blacklist email publik dan privat di internet. Namun hanya sedikit yang benar-benar menentukan apakah email Anda sampai ke kotak masuk penerima.

Banyak blacklist kecil atau tidak penting (misalnya blocklist pribadi milik amatir atau layanan penghapusan berbayar yang mengeksploitasi pengirim) diabaikan oleh penyedia kotak masuk besar. Terdaftar di daftar yang tidak dikenal dan tidak dipakai siapa pun tidak akan merusak deliverability Anda.

Fokuskan perhatian Anda pada daftar utama berikut:

### 1. Spamhaus (ZEN: SBL, XBL, CSS, DBL)

Spamhaus adalah organisasi anti-spam paling berpengaruh di dunia. Data mereka melindungi lebih dari 3 miliar kotak masuk di seluruh dunia, termasuk jaringan telekomunikasi besar, gateway email perusahaan Fortune 500, dan penyedia email konsumen.

- **SBL (Spamhaus Block List)**: Menyasar sumber spam yang sudah dipastikan, mailing list tanpa konfirmasi, dan pengirim yang terkena spam trap.
- **XBL (Exploit Block List)**: Menyasar server yang terinfeksi exploit pihak ketiga, botnet, dan malware.
- **DBL (Domain Block List)**: Menandai domain yang ditemukan di dalam pesan spam, umpan phishing, atau layanan bulletproof hosting.
- **ZEN**: Zona gabungan yang berisi record SBL, SBLCSS, XBL, dan PBL.

Masuk daftar Spamhaus adalah keadaan darurat yang harus segera ditangani. Daftar ini akan memblokir pengiriman di server email perusahaan besar dan penyedia layanan internet di seluruh dunia.

### 2. Barracuda (BRBL)

Barracuda Reputation Block List (`b.barracudacentral.org`) dikelola oleh Barracuda Networks. Daftar ini dibuat dari data lalu lintas yang dikumpulkan oleh ribuan perangkat Barracuda Email Security Gateway di dalam jaringan perusahaan.

Jika Anda mengirim cold outreach B2B atau email marketing ke perusahaan, masuk daftar Barracuda akan langsung menaikkan bounce rate pada penerima perusahaan yang memakai filter keamanan Barracuda, baik on-premises maupun cloud.

### 3. SpamCop (SCBL)

SpamCop mengelola salah satu blacklist berbasis laporan yang paling lama (`bl.spamcop.net`). Pengirim ditambahkan secara otomatis saat penerima menandai email sebagai spam atau saat spam trap otomatis menerima pesan yang tidak diinginkan.

Berbeda dengan Spamhaus, entri di SpamCop bersifat dinamis dan berumur pendek. Entri ini biasanya kedaluwarsa otomatis dalam 24 sampai 48 jam setelah jumlah laporan spam turun di bawah ambang batas.

### 4. Invaluement (ivmURI, ivmSIP)

Invaluement adalah database reputasi komersial kelas perusahaan yang sering dipakai oleh filter email perusahaan bervolume tinggi dan software keamanan. Invaluement dikenal cepat mendeteksi snowshoe spamming (menyebarkan spam ke banyak blok alamat IP) dan melacak reputasi URL di tingkat domain.

### 5. Kenapa Anda bisa mengabaikan UCEPROTECT Level 3

Saat memakai alat lookup multi-RBL, pengirim sering panik setelah melihat tanda merah terang pada **UCEPROTECT Level 3**.

UCEPROTECT Level 3 memasukkan seluruh subnet dan autonomous system number (ASN) ke blacklist, bukan IP pengirim satu per satu. Jika ada pelanggan lain yang tidak terkait dengan Anda di penyedia cloud hosting Anda (seperti DigitalOcean, AWS, Linode, atau Hetzner) mengirim spam, UCEPROTECT menandai ribuan alamat IP bersih di sekitarnya di seluruh penyedia hosting tersebut.

Karena dampak sampingan yang begitu luas, penyedia email besar (termasuk Google, Microsoft, dan Yahoo) tidak memakai UCEPROTECT Level 3 untuk keputusan pengiriman. Engineer deliverability dan postmaster umumnya mengabaikan entri di Level 3. Jangan membayar biaya delisting kepada layanan yang meminta uang untuk penghapusan.

---

## Langkah demi langkah untuk keluar dari blacklist

Jika hasil cek blacklist memastikan domain atau IP Anda terdaftar di database utama, ikuti proses pemulihan empat langkah ini.

```
[ Step 1: Halt Outbound Queues ]
             │
             ▼
[ Step 2: Audit Root Cause & Logs ]
             │
             ▼
[ Step 3: Implement Technical Fixes ]
             │
             ▼
[ Step 4: Submit Delisting Request ]
```

### Langkah 1: Segera hentikan semua pengiriman keluar

Jangan mengajukan tiket delisting selama server email Anda masih mengirim pesan. Jika Anda meminta penghapusan saat server masih terkena spam trap atau masih menghasilkan bounce, tiket Anda akan ditolak. IP Anda juga akan ditandai sebagai pelanggar berulang yang tidak kooperatif.

- Hentikan sementara sequence otomatis dan kampanye cold outreach.
- Cek antrean server email Anda (`mailq` di Postfix) untuk melihat apakah ada banjir spam keluar dari akun yang dibobol atau formulir kontak yang rentan.

### Langkah 2: Temukan dan perbaiki penyebab utamanya

Blacklist tidak menandai IP tanpa ada kejadian pemicunya. Periksa log dan infrastruktur Anda untuk mengetahui mana dari empat pemicu umum ini yang menyebabkan Anda masuk daftar:

1. **Pristine spam trap**: Anda mengirim email ke alamat yang tidak pernah dimiliki manusia. Alamat ini dipublikasikan hanya untuk menangkap bot scraper web. Jika Anda membeli daftar kontak atau mengambil kontak dari halaman website tanpa verifikasi, kemungkinan besar Anda terkena pristine trap.
2. **Bounce rate tinggi**: Bounce rate pengiriman Anda melewati 2,0% sampai 5,0%. Ini menunjukkan data kontak yang usang, belum diverifikasi, atau palsu.
3. **Kredensial yang dibobol**: Akun pengguna di server Anda dibobol dan dipakai untuk meneruskan pesan phishing atau spam.
4. **Autentikasi tidak ada**: Domain Anda tidak punya record SPF dan DKIM yang selaras, sehingga pihak ketiga bisa memalsukan nama domain Anda.

### Langkah 3: Ajukan permintaan penghapusan ke pengelola utama

Setelah masalahnya selesai dan log Anda bersih, ajukan permintaan delisting resmi langsung melalui portal resmi:

#### Penghapusan dari Spamhaus
1. Buka [Spamhaus IP and Domain Reputation Checker](https://check.spamhaus.org/) yang resmi.
2. Masukkan alamat IP atau domain Anda yang terdaftar.
3. Baca kode dan deskripsi entri yang diberikan Spamhaus.
4. Klik tombol **Request Removal** dan isi formulir verifikasinya.
5. Berikan alamat email administratif yang aktif di domain Anda. Penghapusan pertama untuk pengirim yang bersih biasanya diproses dalam 1 sampai 4 jam.

#### Penghapusan dari Barracuda
1. Buka [Barracuda Central Reputation System](https://www.barracudacentral.org/lookups).
2. Masukkan alamat IP server email Anda.
3. Lanjutkan ke formulir **Barracuda Removal Request**.
4. Isi detail kontak Anda dan tulis penjelasan yang jelas dan faktual tentang perbaikan yang sudah dilakukan. Waktu proses biasanya 12 sampai 24 jam.

#### Penghapusan dari SpamCop
- Untuk [SpamCop](https://www.spamcop.net/bl.shtml), tiket manual jarang diperlukan. Selama Anda sudah menghentikan aliran email yang bermasalah, SpamCop otomatis menghapus entri Anda 24 sampai 48 jam setelah laporan terakhir.

### Yang perlu ditulis dalam permohonan delisting (dan yang JANGAN ditulis)

Permintaan delisting ditinjau oleh engineer jaringan yang berpengalaman. Cara Anda menulis permintaan menentukan apakah permintaan itu disetujui:

> **Jangan tulis:**  
> *"Kami bisnis yang sah dan ini kesalahan yang mendesak. Anda membuat kami rugi. Segera hapus IP kami."*  
> (Ini tidak memberi jaminan teknis apa pun dan akan diprioritaskan paling akhir.)

> **Tulis:**  
> *"Kami menemukan daftar marketing yang belum diverifikasi dan diunggah pada 24 Oktober. Daftar itu memicu lonjakan bounce dan laporan spam. Pengiriman keluar langsung kami hentikan. Kami sudah menghapus semua data yang belum diverifikasi, memasang pembersihan daftar otomatis sebelum pengiriman untuk menghapus alamat tidak valid dan email sekali pakai, dan memastikan SPF serta DKIM kami selaras. Antrean email keluar kami sudah bersih."*

---

## Cara agar tidak masuk blacklist lagi

Keluar dari blacklist baru setengah dari pekerjaan. Jika kebiasaan pengiriman Anda tidak berubah, domain Anda akan kembali masuk blacklist yang sama dalam beberapa hari.

Untuk melindungi reputasi pengirim, Anda perlu tiga perlindungan yang dijalankan terus-menerus:

### 1. Terapkan autentikasi email yang ketat

Aliran email tanpa autentikasi rentan terhadap pemalsuan domain. Jika spammer memakai nama domain Anda di header `From:` dalam kampanye phishing, reputasi domain Anda yang menanggung akibatnya.

- **SPF (Sender Policy Framework)**: Tentukan secara jelas server email mana yang boleh mengirim atas nama domain Anda. Cek pengaturan Anda dengan [SPF checker](/spf-checker) gratis kami.
- **DKIM (DomainKeys Identified Mail)**: Tanda tangani setiap pesan keluar secara kriptografis dengan kunci 2048-bit. Anda bisa membuat kunci DNS yang rapi dengan [Generator DKIM](/dkim-generator) kami.
- **DMARC**: Minta server penerima menolak pesan tanpa izin yang mengaku berasal dari domain Anda.

### 2. Pantau bounce rate dan data SMR

Jaga bounce rate Anda tetap di bawah 2,0%. Bounce rate di atas 3,0% menunjukkan perawatan daftar yang buruk, sedangkan bounce rate di atas 5,0% memicu blacklist otomatis di filter perusahaan.

- Ukur dan bandingkan metrik pengiriman Anda dari waktu ke waktu dengan [Kalkulator Bounce Rate](/bounce-rate-calculator) kami.
- Bedakan masalah server sementara dari alamat yang tidak valid secara permanen dengan membaca penjelasan kami tentang [Hard Bounce vs Soft Bounce](/blog/hard-bounce-vs-soft-bounce).

### 3. Bersihkan setiap daftar kontak sebelum mengirim

Lebih dari 85% kasus masuk blacklist email berasal dari terkena pristine spam trap atau dari pengiriman berulang ke kotak masuk yang sudah dihapus.

Daftar prospek hasil scraping, database CRM yang usang, dan pendaftaran webinar sering berisi domain salah ketik, email sementara, dan alamat terbengkalai yang sudah diubah menjadi recycled spam trap.

Sebelum mengimpor daftar kontak ke platform pengiriman atau alat cold email Anda, verifikasi alamatnya dalam satu tahap verifikasi khusus. Anda bisa mengetes satu per satu alamat dengan [email checker gratis](/email-checker) kami atau mendeteksi domain email sementara dengan [pemeriksa email sekali pakai](/disposable-email-checker) kami. Pembersihan daftar menyaring domain yang sudah mati, kesalahan sintaks, penyedia email sementara, dan jaringan spam trap yang dikenal sebelum server email Anda menyentuhnya.

---

## Pertanyaan yang sering diajukan

### Berapa lama sampai penghapusan dari blacklist berlaku?
Setelah pengelola menyetujui permintaan delisting Anda, server DNSBL otoritatif mereka diperbarui hampir seketika. Namun server email penerima menyimpan DNS record di cache lokal. Tergantung pengaturan DNS Time to Live (TTL) di server penerima, biasanya perlu 2 sampai 24 jam sampai pengiriman email kembali normal di semua jaringan.

### Bisakah domain saya masuk blacklist jika saya memakai ESP tepercaya seperti Google Workspace atau SendGrid?
Bisa. Penyedia layanan email mengurus infrastrukturnya, tetapi Anda tetap bertanggung jawab atas alamat yang Anda kirimi email. Jika Anda mengirim cold outreach atau daftar massal yang belum diverifikasi melalui Google Workspace atau SendGrid dan terkena spam trap, Spamhaus bisa menandai domain pengirim Anda di Domain Blocklist (DBL). Akibatnya, email Anda ditolak apa pun platform pengirimannya.

### Haruskah saya mengganti nama domain jika domain saya masuk blacklist?
Tidak. Meninggalkan domain yang masuk blacklist lalu mendaftarkan domain baru adalah kesalahan. Domain baru tidak punya reputasi pengirim sama sekali dan akan menghadapi pembatasan kecepatan dan greylisting yang ketat dari penyedia kotak masuk. Lebih cepat dan lebih baik untuk deliverability jangka panjang jika Anda memperbaiki penyebab utamanya, membersihkan daftar pelanggan, dan menyelesaikan proses delisting resmi untuk domain yang sudah Anda pakai.
