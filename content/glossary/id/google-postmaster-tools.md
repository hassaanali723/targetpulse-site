---
title: Google Postmaster Tools
description: Apa yang ditampilkan Google Postmaster Tools tentang email Anda ke Gmail, cara memasangnya, batas tingkat spam dari Google, dan apa yang tidak ditampilkannya.
slug: google-postmaster-tools
date: 2026-10-23
updated: 2026-10-23
keyword: google postmaster tools
short: Google Postmaster Tools adalah situs web gratis dari Google yang menunjukkan cara Gmail menilai domain pengirim Anda. Situs ini melaporkan tingkat spam, reputasi domain, reputasi IP, hasil autentikasi, dan error pengiriman untuk email yang dikirim ke pengguna Gmail.
related: complaint-rate, domain-reputation, ip-reputation, spam-filter, dmarc, deliverability
cta: Postmaster Tools melaporkan masalah setelah pengiriman. Verifikasi mencegahnya
---

## Apa itu Google Postmaster Tools?

Google Postmaster Tools adalah situs web gratis dari Google untuk orang yang mengirim email. Situs ini menunjukkan cara Gmail memperlakukan email yang dikirim domain Anda ke alamat Gmail.

Pertama, beberapa istilah. Domain adalah nama setelah tanda @ di alamat email Anda, seperti example.com. DNS adalah direktori publik tempat domain menerbitkan pengaturannya. Setiap pengaturan disebut record.

Anda menambahkan domain Anda dan membuktikan kepemilikannya dengan menambahkan sebuah DNS record. Setelah itu, Google menampilkan data tentang email yang dikirim domain Anda ke alamat Gmail. Layanan ini gratis. Ini satu-satunya sumber resmi tentang cara Gmail menilai domain Anda.

Layanan ini hanya mencakup Gmail. Email yang dikirim ke Outlook.com, Yahoo, atau server email perusahaan tidak muncul. Microsoft punya layanan terpisah untuk jaringannya sendiri.

## Contoh sederhana

Begini cara sebuah perusahaan kecil bisa memakainya. Angkanya hanya contoh.

1. **Sebuah perusahaan wisata mendaftar.** Sunny Trips menambahkan domainnya, sunnytrips.example, ke Google Postmaster Tools.
2. **Perusahaan membuktikan kepemilikan domain.** Google memberinya sebuah kode. Perusahaan menambahkan kode itu ke DNS sebagai record.
3. **Perusahaan terus mengirim.** Perusahaan mengirim newsletter mingguannya. Banyak pelanggannya memakai Gmail.
4. **Data muncul.** Setelah cukup banyak email dikirim ke Gmail, Google Postmaster Tools mulai menampilkan grafik.
5. **Perusahaan melihat masalah.** Suatu minggu tingkat spam naik ke 0,25 persen. Artinya 25 dari setiap 10.000 email yang terkirim ditandai sebagai spam oleh pembaca.
6. **Perusahaan menemukan penyebabnya.** Kenaikan dimulai saat perusahaan mengirim email ke daftar baru berisi orang yang tidak pernah mendaftar. Perusahaan berhenti memakai daftar itu.

Tanpa dashboard ini, Sunny Trips hanya akan melihat open rate yang turun, tanpa tahu alasannya.

## Yang ditampilkan

- **Tingkat spam.** Persentase email Anda yang terkirim dan ditandai sebagai spam oleh pengguna Gmail. Panduan pengirim dari Google merujuk pada angka ini.
- **Reputasi domain dan reputasi IP.** Penilaian untuk masing-masing: bad, low, medium, atau high (buruk, rendah, sedang, atau tinggi). Alamat IP Anda adalah angka yang mengenali server pengirim Anda. High berarti Gmail jarang menyaring email Anda. Bad berarti sebagian besar email Anda masuk ke spam atau ditolak.
- **Autentikasi.** Persentase email Anda yang lolos [SPF](/glossary/spf), [DKIM](/glossary/dkim), dan [DMARC](/glossary/dmarc). Ini adalah record di domain Anda yang membuktikan bahwa email benar-benar dari Anda.
- **Enkripsi.** Persentase email Anda yang dikirim melalui TLS. TLS adalah standar yang mengenkripsi email selama perjalanan antarserver.
- **Error pengiriman.** Persentase email Anda yang ditolak atau ditunda oleh Gmail, beserta alasannya.
- **Feedback loop.** Tingkat keluhan per kampanye, untuk pengirim besar yang memakai header Feedback-ID. Header adalah baris informasi teknis di bagian atas email.

## Batas yang dipublikasikan Google

Panduan pengirim dari Google menyatakan:

1. Jaga tingkat spam yang tampil di Postmaster Tools di bawah 0,10 persen.
2. Jangan pernah mencapai tingkat spam 0,30 persen atau lebih.
3. Pengirim 5.000 pesan atau lebih per hari wajib punya SPF, DKIM, dan DMARC.
4. Email pemasaran dari pengirim ini wajib punya fitur berhenti berlangganan dengan satu klik.

Email dari pengirim yang melewati 0,30 persen akan disaring atau ditolak. Batas ini kecil. Dari 10.000 email yang terkirim, 0,30 persen sama dengan 30 keluhan.

## Yang tidak ditampilkan

Postmaster Tools melaporkan email yang terkirim. Layanan ini tidak bisa menunjukkan alamat yang tidak ada. Email ke alamat mati ditolak selama koneksi SMTP. SMTP adalah cara standar server email mengirim email satu sama lain. Penolakan itu adalah bounce, yaitu pesan otomatis yang menyatakan bahwa email tidak terkirim.

Bounce tidak termasuk dalam tingkat spam. Daftar dengan banyak alamat tidak valid bisa menunjukkan tingkat spam yang rendah, sementara bounce rate merusak reputasi Anda.

**Contoh:** sebuah toko mengirim ke 10.000 alamat, dan 1.000 di antaranya tidak ada. Google Postmaster Tools menunjukkan tingkat spam yang baik, karena hanya email yang terkirim yang dihitung. 1.000 bounce itu tidak muncul di angka tersebut.

Postmaster Tools juga memerlukan volume. Jika domain Anda hanya mengirim sedikit email ke Gmail, grafiknya kosong. Google tidak memublikasikan volume minimumnya.

## Cara kerjanya bersama verifikasi

Postmaster Tools melaporkan masalah setelah Anda mengirim. Verifikasi menghapus penyebabnya sebelum Anda mengirim. Memeriksa daftar dengan [email checker](/email-checker) menghapus alamat yang akan bounce. Pemeriksaan ini juga menghapus alamat email sekali pakai dan alamat email berbasis peran (seperti info@) yang menimbulkan keluhan. Alat [verifikasi email massal](/bulk-email-verifier) melakukan hal ini untuk seluruh daftar dalam satu kali unggah. Setelah itu, Postmaster Tools punya lebih sedikit hal untuk dilaporkan.

[Verifikasi email](/) sendiri tidak mengubah penilaian Gmail untuk Anda. Verifikasi mencegah Anda mengirim ke alamat yang tidak ada. Panduan [cara menurunkan bounce rate email](/blog/how-to-reduce-email-bounce-rate) menjelaskan kedua sisi ini.
