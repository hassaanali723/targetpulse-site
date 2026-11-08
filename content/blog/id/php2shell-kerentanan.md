---
title: "PHP2Shell (CVE-2026-109618 dan CVE-2026-109619): apa kerentanan ini dan cara menambal PHP"
seoTitle: "PHP2Shell: kerentanan PHP dan cara menambalnya"
description: "PHP2Shell adalah dua kerentanan kritis di PHP yang membuat penyerang bisa menjalankan kode di server web. Lihat versi PHP yang aman dan cara menambalnya."
slug: php2shell-kerentanan
date: 2026-11-08
updated: 2026-11-08
keyword: kerentanan php2shell
image: /blog/covers/id/php2shell-kerentanan.webp
imageAlt: "PHP2Shell: CVE-2026-109618 dan CVE-2026-109619, skor 9,2 dari 10, diperbaiki di PHP 8.5.12, 8.4.27, 8.3.36 dan 8.2.35"
cta: Pastikan email Anda sampai ke kotak masuk yang benar-benar aktif
---

PHP2Shell adalah nama untuk dua bug kritis di PHP itu sendiri: CVE-2026-109618 dan CVE-2026-109619. Keduanya membuat penyerang bisa menjalankan kodenya sendiri di server web yang menjalankan PHP. Penyerang tidak butuh kata sandi atau akun. PHP memperbaiki kedua bug ini pada 21 Oktober 2026, dan penyerang sudah memakainya.

Jika Anda hanya membaca satu baris, bacalah baris ini. Perbarui PHP ke **8.5.12, 8.4.27, 8.3.36 atau 8.2.35** (atau yang lebih baru), lalu **restart PHP**. Paket baru tidak berpengaruh apa pun sampai proses PHP di-restart.

![Yang perlu dilakukan terhadap PHP2Shell dalam 4 langkah: temukan setiap instalasi PHP, perbarui PHP ke versi yang sudah diperbaiki, restart PHP, lalu periksa tanda pembobolan](/blog/fig-id-php2shell-what-to-do.webp)

## Apa itu PHP2Shell, dalam bahasa sederhana

PHP adalah bahasa pemrograman yang dipakai oleh banyak sekali situs web. WordPress, Laravel, Drupal, Magento dan phpBB semuanya berjalan di atas PHP. Sebagian besar situs ini berjalan di server tempat PHP menangani setiap permintaan halaman.

PHP2Shell bukan bug di WordPress atau di kode Anda sendiri. Ini adalah bug di PHP, mesin yang ada di bawahnya. Jadi setiap situs PHP di server yang belum ditambal ikut rentan, walaupun kode situs itu sendiri sempurna.

PHP memberi kedua bug ini skor 9,2 dari 10 (CVSS v4.0). Skor itu masuk kategori "kritis". Nama PHP2Shell berasal dari akibatnya: sebuah shell. Artinya, penyerang bisa mengetik perintah di server Anda.

## Cara kerja PHP2Shell, langkah demi langkah

Pertama, Anda perlu tahu empat fakta tentang cara PHP menangani halaman web.

1. Server PHP menjalankan beberapa "worker" PHP. Setiap worker menangani satu permintaan web, lalu permintaan berikutnya, dan seterusnya.
2. Untuk setiap permintaan, PHP menyiapkan memori untuk data permintaan itu. Data ini mencakup isian formulir, cookie, file yang diunggah dan data sesi.
3. Saat permintaan selesai, PHP membersihkan memori itu. Permintaan berikutnya seharusnya dimulai tanpa sisa apa pun.
4. Setiap permintaan punya batas memori, yang diatur oleh `memory_limit` di `php.ini`. Jika sebuah permintaan melewati batas itu, PHP menghentikannya.

Kedua bug PHP2Shell adalah kesalahan di langkah 2 dan 3. PHP keliru menentukan memori mana yang masih valid.

### Bug 1 (CVE-2026-109618): PHP kehabisan memori di tengah jalan

1. Penyerang mengirim permintaan yang dibuat untuk memakai banyak memori.
2. PHP mencapai batas memorinya saat masih mengisi data permintaan. Sebagian data itu baru tertulis setengah.
3. PHP menghentikan permintaan dan menjalankan proses pembersihan.
4. Proses pembersihan menganggap data yang baru setengah tertulis itu sudah lengkap. Akibatnya PHP bekerja dengan memori yang berisi data acak, atau data pilihan penyerang.

Solusi sementara dari PHP sendiri untuk bug ini adalah menghapus batas memori dan menjaga ukuran unggahan tetap kecil. Dari situ terlihat bahwa serangan ini bergantung pada permintaan besar yang mencapai batas memori.

### Bug 2 (CVE-2026-109619): sisa dari permintaan sebelumnya

1. Sebuah permintaan selesai, dan PHP melepas memori yang dipakainya.
2. Karena kesalahan, PHP tetap menyimpan catatan tentang lokasi sebagian memori yang sudah dilepas itu.
3. Worker yang sama mengambil permintaan berikutnya. Permintaan itu bisa datang dari penyerang.
4. Sebelum PHP menghapus catatan itu, permintaan baru mengikutinya. Permintaan itu membaca atau menulis memori yang kini berisi hal lain.

Programmer menyebut ini bug "use after free". PHP menyatakan satu akibat sudah terkonfirmasi: penyerang bisa membaca memori yang seharusnya tidak bisa ia lihat. Solusi sementara dari PHP mematikan fitur progres unggahan sesi (session upload progress). Fitur ini melaporkan sejauh mana sebuah file sudah terunggah. Fitur ini aktif secara default.

### Mengapa kesalahan memori membuat penyerang bisa menjalankan kode

Memori sebuah program menyimpan dua jenis isi. Yang pertama adalah data, seperti teks dan angka. Yang kedua adalah lokasi instruksi berikutnya yang akan dijalankan program.

Jika penyerang bisa memilih apa yang ditulis PHP ke memori yang seharusnya tidak dipakai, ia bisa mengubah lokasi-lokasi itu. PHP lalu menjalankan instruksi penyerang, bukan instruksinya sendiri. Ini disebut kerusakan memori (memory corruption). Inilah cara kedua bug berubah menjadi eksekusi kode jarak jauh (remote code execution atau RCE): seseorang di internet menjalankan perintah di server Anda.

![Cara PHP2Shell mengubah satu permintaan web menjadi kendali atas server: penyerang mengirim permintaan yang direkayasa tanpa login, PHP salah menangani memori permintaan, data penyerang menggantikan data milik PHP, dan PHP menjalankan perintah penyerang](/blog/fig-id-php2shell-how-it-works.webp)

Menurut PHP, risikonya paling tinggi di Apache dengan mod_php. Di sana, serangan bisa dimulai sebelum kode situs Anda berjalan sama sekali. Situs Anda tidak perlu punya bug sendiri.

### Perbandingan kedua bug

| | CVE-2026-109618 | CVE-2026-109619 |
|---|---|---|
| Nama dari PHP | RCE via OOM corruption | RCE via stale global state |
| Apa yang salah | PHP kehabisan memori saat menyiapkan permintaan, lalu memercayai data yang baru setengah jadi | PHP memakai ulang memori sisa permintaan sebelumnya |
| Yang dibutuhkan penyerang | Satu permintaan web, tanpa login | Beberapa permintaan ke worker PHP yang sama, tanpa login |
| Akibat yang terkonfirmasi | Eksekusi kode jarak jauh | Eksekusi kode jarak jauh, membaca memori |
| Tingkat keparahan (CVSS v4.0) | 9,2 kritis | 9,2 kritis |

## Bagaimana kerentanan ini ditemukan

PHP Foundation menyebut beberapa tim sebagai penemu, termasuk Calif, OpenAI dan Wiz. Calif dan Wiz mengatakan mereka memakai model AI dalam riset mereka. PHP memberi pemberitahuan awal tentang perbaikan pada 20 Oktober dan merilisnya pada 21 Oktober.

Penyerang bergerak lebih cepat daripada perbaikannya. Amazon melihat upaya memakai bug ini pada 17 Oktober, empat hari sebelum rilis.

## Apa yang bisa dilakukan penyerang dengan PHP2Shell

Setelah penyerang menjalankan kode lewat PHP, ia bertindak sebagai akun yang menjalankan PHP. Di banyak server Linux, akun itu adalah `www-data`. Akun itu bisa membaca dan mengubah file situs web Anda.

| Yang bisa dilakukan penyerang | Artinya bagi Anda |
|---|---|
| Menjalankan perintah di server | Membaca, mengubah atau menghapus file situs Anda. Memasang halaman palsu. |
| Membaca data rahasia dari memori | Menurut Wiz, memori yang bocor bisa membuka kata sandi, token, API key dan sertifikat dari permintaan pengunjung lain. |
| Membaca file konfigurasi Anda | File seperti `wp-config.php` dan `.env` berisi kata sandi database. Dengan itu, penyerang bisa menyalin data pelanggan. |
| Memasang backdoor (pintu belakang) | File PHP tersembunyi membuat penyerang bisa masuk lagi setelah Anda menambal. NCSC meminta Anda mencari file seperti ini. |
| Mengirim spam dan phishing dari server Anda | Domain dan IP Anda masuk blacklist, dan email asli Anda berhenti sampai. |
| Mengambil alih seluruh mesin | Dream Research melaporkan penyerang menggabungkan PHP2Shell dengan bug di kernel Linux (CVE-2026-46300) untuk menguasai penuh 24 firewall. Tenable belum mengonfirmasi laporan ini. |

## Siapa yang terdampak

Peringatan keamanan dari PHP menyebut setiap konfigurasi PHP yang melayani permintaan web:

- PHP-FPM (konfigurasi yang paling umum dengan Nginx)
- Apache dengan mod_php
- php-cgi
- FrankenPHP
- LiteSpeed

National Cyber Security Centre (NCSC) Inggris melangkah lebih jauh. NCSC mengatakan setiap organisasi yang memakai PHP sebaiknya menganggap dirinya rentan, apa pun versinya. Ini termasuk PHP yang tertanam di produk yang Anda beli, seperti perangkat jaringan dan layanan yang di-hosting.

Pada 26 Oktober, perusahaan keamanan Trail of Bits mengatakan exploit yang berfungsi bisa menyerang PHP 8.2 sampai 8.5 yang belum ditambal. Trail of Bits menunjukkannya pada MediaWiki, Symfony, Laravel dan phpBB.

## Apakah kerentanan ini dipakai dalam serangan nyata?

Ya. Ini bukan teori.

![Linimasa PHP2Shell: upaya serangan pertama terlihat pada 17 Oktober, perbaikan dirilis 21 Oktober, masuk daftar CISA KEV pada 26 Oktober, tenggat penambalan untuk lembaga federal AS pada 29 Oktober](/blog/fig-id-php2shell-timeline.webp)

- **17 Oktober:** Tim intelijen ancaman Amazon melihat upaya memakai bug ini. Itu empat hari sebelum perbaikan keluar.
- **21 Oktober:** PHP merilis versi yang sudah diperbaiki. Cloudflare mengatakan pada hari yang sama mereka melihat serangan awal.
- **26 Oktober:** CISA, badan pertahanan siber AS, menambahkan kedua bug ke katalog Known Exploited Vulnerabilities (KEV). Daftar itu hanya memuat bug yang terbukti dipakai dalam serangan nyata.
- **29 Oktober:** Tenggat yang diberikan CISA kepada lembaga federal AS untuk menambal.

## Versi PHP mana yang aman

Cari cabang PHP Anda di tabel. Jika versi Anda lebih rendah dari versi yang sudah diperbaiki, Anda rentan.

| Cabang PHP Anda | Rentan jika di bawah | Versi yang diperbaiki | Catatan |
|---|---|---|---|
| 8.5 | 8.5.12 | 8.5.12 | |
| 8.4 | 8.4.27 | 8.4.27 | |
| 8.3 | 8.3.36 | 8.3.36 | |
| 8.2 | 8.2.35 | 8.2.35 | 8.2 berhenti mendapat perbaikan pada 31 Desember 2026 |
| 8.1, 8.0, 7.4 | semua versi | tidak ada rilis resmi | PHP menerbitkan patch kecil untuk kode sumber. Vendor Linux Anda mungkin punya perbaikan. |
| 7.3 sampai 5.4 | semua versi | tidak ada | Sudah tidak didukung. Lakukan upgrade. |

**Distribusi Linux memakai nomor versi yang berbeda.** Debian, Ubuntu dan Red Hat sering menambahkan perbaikan ke versi lama tanpa mengubah nomornya. Jadi `php -v` bisa menampilkan nomor "lama" di server yang sebenarnya sudah aman. Di sistem seperti ini, periksa pemberitahuan keamanan dari vendor Anda untuk CVE-2026-109618, jangan hanya melihat nomornya.

## Cara mengecek versi PHP Anda

Pilih cara yang sesuai dengan konfigurasi Anda.

| Tempat situs Anda berjalan | Cara melihat versi PHP |
|---|---|
| Server Anda sendiri (SSH) | Jalankan `php -v`. Untuk versi yang dipakai situs web, periksa juga paket PHP-FPM atau Apache. |
| WordPress | Buka **Perkakas**, lalu **Kesehatan Situs**, lalu **Info**, lalu **Server**. |
| Hosting cPanel | Buka **MultiPHP Manager**. Di sana tercantum versi PHP untuk setiap domain. |
| Shared hosting lainnya | Lihat di panel hosting Anda, atau tanyakan ke tim support. |

Command line dan situs web bisa memakai versi PHP yang berbeda di server yang sama. Periksa versi yang melayani halaman web.

## Cara menambal

Perbaikannya adalah memasang versi PHP yang baru lalu me-restart PHP. Kata PHP sendiri: "Tidak ada mitigasi yang lengkap, pembaruan adalah satu-satunya pilihan yang aman."

**Shared hosting.** Penyedia hosting Anda yang menambal PHP. Minta tim support memastikan bahwa server memakai versi yang sudah diperbaiki. Jika panel Anda memungkinkan memilih versi PHP, pilih cabang yang masih didukung.

**Server Debian atau Ubuntu.**

```bash
sudo apt update
sudo apt upgrade
sudo systemctl restart php8.3-fpm   # use your version number
sudo systemctl restart apache2      # only if you use Apache
```

**Server Red Hat, AlmaLinux atau Rocky Linux.**

```bash
sudo dnf upgrade 'php*'
sudo systemctl restart php-fpm
sudo systemctl restart httpd        # only if you use Apache
```

**Docker.** Ganti image Anda ke tag yang sudah diperbaiki, misalnya `php:8.4.27-fpm`. Build ulang dan deploy ulang setiap container. Container lama yang masih berjalan tetap rentan.

Setelah itu, periksa lagi. Jalankan `php -v` atau muat ulang halaman Kesehatan Situs di WordPress. Pastikan versi baru sudah terpasang, atau pastikan paket perbaikan dari vendor Anda sudah terpasang.

## Jika Anda tidak bisa menambal hari ini

PHP menyebut beberapa pengaturan yang mengurangi risiko. PHP menegaskan bahwa pengaturan ini tidak membuat server aman. Pakai hanya selama Anda menyiapkan pembaruan.

| Pengaturan | Membantu melawan | Tempat mengaturnya |
|---|---|---|
| `memory_limit=-1` | CVE-2026-109618 | `php.ini`, dengan cara yang tidak bisa diubah oleh aplikasi |
| `post_max_size` yang rendah | CVE-2026-109618 | `php.ini` |
| `session.upload_progress.enabled=0` | CVE-2026-109619 | `php.ini` atau konfigurasi pool FPM. Bukan `ini_set()` atau `.user.ini` |
| `fatal_error_backtraces=0` | CVE-2026-109619, hanya PHP 8.5 | `php.ini` |

Restart setiap worker PHP setelah Anda mengubah pengaturan ini. PHP juga memperingatkan agar tidak memakai `RLIMIT_AS` atau `RLIMIT_DATA` sebagai batas memori. Keduanya justru bisa memicu bug.

NCSC memberi satu pilihan lagi. Jika Anda tidak bisa memperbarui atau mengurangi risiko dengan cepat, putuskan sistem dari jaringan sampai Anda bisa melakukannya.

## Periksa apakah server Anda sudah dibobol

Penyerang sudah mulai lebih dulu. Upaya pertama terjadi empat hari sebelum perbaikan. Jadi server yang sekarang sudah ditambal mungkin sudah dibobol sebelumnya.

NCSC meminta Anda memeriksa sistem yang belum ditambal untuk mencari tanda pembobolan dan backdoor. Tanda umum di server PHP:

- File `.php` baru yang tidak Anda buat, sering di folder upload atau cache.
- Pengguna admin baru di WordPress atau aplikasi Anda.
- Koneksi keluar yang tidak biasa, atau pemakaian CPU yang tidak bisa Anda jelaskan.
- Kenaikan mendadak jumlah email keluar dari server Anda.
- Bounce (email yang ditolak) yang menyebut IP atau domain Anda masuk blacklist.

Dua tanda terakhir tetap penting walaupun situs Anda terlihat normal. Server yang dibobol sering dipakai untuk mengirim spam atau phishing dari domain Anda. Akibatnya domain Anda bisa masuk blacklist, lalu email asli Anda tidak lagi sampai ke kotak masuk. Panduan kami tentang [cara cek apakah domain email Anda masuk blacklist](/blog/how-to-check-if-email-domain-is-blacklisted) menjelaskan cara mencari dan memperbaiki listing tersebut.

Jika Anda menemukan tanda pembobolan, menambal saja tidak cukup. Penyerang mungkin meninggalkan backdoor. Pulihkan dari backup yang bersih atau minta bantuan tim incident response.

## Dua masalah terkait yang perlu Anda ketahui

**CVE-2026-115560.** Pada 23 Oktober, PHP menerbitkan peringatan keamanan terpisah tentang progres unggahan sesi. Menurut PHP, bug ini kecil kemungkinannya untuk dipakai. Pengaturan `session.upload_progress.enabled=0` dari tabel di atas juga mencakup bug ini.

**Masalah SimpleXML di versi yang sudah diperbaiki.** PHP 8.4.27 dan 8.5.12 bisa membuat sebagian aplikasi yang memakai SimpleXML crash (php-src issue #24488). Penyebabnya adalah perubahan lain, bukan perbaikan keamanannya. Per 26 Oktober, perbaikannya sudah di-merge tetapi belum dirilis. Uji aplikasi Anda setelah memperbarui. Jangan tetap memakai versi yang rentan karena masalah ini.

## Tonton: cara tim keamanan PHP menanganinya

```youtube
No3T8JQqhtM
Tonton: [PHP2Shell: How the PHP Security Team Handled It (with Volker Dusch)](https://www.youtube.com/watch?v=No3T8JQqhtM) dari Laravel News
```

## Jawaban singkat

| Pertanyaan | Jawaban |
|---|---|
| Apa itu PHP2Shell? | Dua bug kritis di PHP, CVE-2026-109618 dan CVE-2026-109619, yang membuat penyerang bisa menjalankan kode di server. |
| Apakah perlu login? | Tidak. Penyerang di internet bisa memakainya tanpa akun. |
| Apakah dipakai dalam serangan? | Ya. CISA menambahkan kedua bug ke katalog KEV pada 26 Oktober 2026. |
| Versi mana yang memperbaikinya? | 8.5.12, 8.4.27, 8.3.36 dan 8.2.35. |
| Apakah cukup memperbarui paket? | Tidak. Restart juga PHP-FPM, Apache atau container Anda. |
| Apakah firewall bisa memperbaikinya? | Tidak. Aturan web firewall bisa memblokir sebagian serangan, tetapi hanya pembaruan yang memperbaiki bug. |

## Sumber

- [PHP news archive 2026](https://www.php.net/archive/2026.php): catatan rilis dan peringatan keamanan
- [NCSC: Critical security issue affecting PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php)
- [CISA Known Exploited Vulnerabilities catalog](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- [Tenable: PHP2Shell FAQ](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote): laporan eksploitasi dari Amazon, Cloudflare dan Trail of Bits
