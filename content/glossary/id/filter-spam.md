---
title: Filter spam
description: Apa yang diperiksa filter spam sebelum mengirim, memindahkan, atau menolak email Anda, bedanya penolakan dengan folder spam, dan batas tingkat spam dari Google.
slug: filter-spam
date: 2026-10-23
updated: 2026-10-23
keyword: filter spam
short: Filter spam adalah sistem yang dipakai penyedia kotak masuk untuk menentukan ke mana email masuk pergi. Filter bisa mengirim email ke kotak masuk atau folder spam, atau menolaknya. Filter memeriksa pengirim, isi email, dan cara penerima sebelumnya menanggapi email dari pengirim itu.
related: spam-score, complaint-rate, ip-reputation, domain-reputation, deliverability, spam-trap
cta: Kirim ke alamat yang nyata agar filter spam punya lebih sedikit alasan untuk menahan email Anda
---

## Apa itu filter spam?

Filter spam adalah sistem yang memeriksa setiap email masuk dan menentukan apa yang terjadi padanya. Filter bisa mengirim email ke kotak masuk, memindahkannya ke folder spam, atau menolaknya. Spam adalah email massal yang tidak diinginkan.

Setiap penyedia kotak masuk punya filter spam. Penyedia kotak masuk adalah perusahaan atau server yang menjalankan kotak masuk. Gmail, Outlook.com, dan Yahoo punya filter spam. Server email perusahaan di balik [secure email gateway](/glossary/secure-email-gateway) juga punya. Secure email gateway, atau gateway keamanan email, adalah layanan keamanan yang memeriksa email perusahaan sebelum sampai ke kotak masuk karyawan.

Keputusan diambil di salah satu dari dua titik.

**Selama koneksi SMTP.** SMTP adalah cara standar server email mengirim email satu sama lain. Server penerima bisa menolak email sebelum menerimanya. Anda mendapat bounce dengan kode `5.7.x`. Bounce adalah pesan otomatis yang memberi tahu bahwa sebuah email tidak terkirim. Contoh: `550 5.7.1` dari Gmail untuk blokir karena kebijakan, atau `550 5.7.28` untuk jumlah email tidak diinginkan yang tidak biasa dari alamat IP Anda. Alamat IP adalah angka yang mengenali server pengirim Anda. Email tidak pernah sampai ke kotak masuk.

**Setelah email diterima.** Server menerima email, lalu menaruhnya di kotak masuk, tab promosi, atau folder spam. Anda tidak mendapat bounce. Satu-satunya tanda adalah open rate yang lebih rendah dan data di [Google Postmaster Tools](/glossary/postmaster-tools).

## Contoh sederhana

Begini cara filter spam bisa mengirim penawaran biasa ke folder spam. Angkanya hanya contoh.

1. **Sebuah pusat kebugaran mengirim penawaran.** City Gym mengirim penawaran diskon ke 8.000 anggota.
2. **Filter memeriksa pengirim.** SPF, DKIM, dan DMARC record milik pusat kebugaran itu lolos. Email itu benar-benar berasal dari City Gym.
3. **Filter memeriksa riwayatnya.** Bulan lalu City Gym mengirim email ke daftar lama. Banyak alamat di daftar itu tidak ada, dan emailnya bounce.
4. **Filter memeriksa tanggapan orang sebelumnya.** Banyak anggota menghapus penawaran terakhir tanpa membukanya. Sebagian menekan "laporkan spam".
5. **Filter memutuskan.** Filter memindahkan penawaran baru ke folder spam untuk banyak anggota.
6. **City Gym tidak mendapat pesan error.** Tidak ada bounce yang kembali. City Gym hanya melihat open rate yang lebih rendah.

Kata-kata dalam penawaran itu bukan masalahnya. Daftarnya yang bermasalah.

## Yang diperiksa filter

Penyedia tidak memublikasikan aturan persisnya. Berikut masukan yang sudah diketahui:

- **Autentikasi.** Apakah [SPF](/glossary/spf), [DKIM](/glossary/dkim), dan [DMARC](/glossary/dmarc) lolos. Ini adalah record di domain Anda yang membuktikan bahwa email benar-benar dari Anda. Google dan Microsoft sekarang menolak email massal yang gagal pemeriksaan ini.
- **Reputasi.** Riwayat pengiriman domain dan alamat IP Anda. Domain Anda adalah bagian alamat setelah tanda @. Lihat [reputasi domain](/glossary/domain-reputation) dan [reputasi IP](/glossary/ip-reputation).
- **Keluhan.** Seberapa sering penerima menekan "laporkan spam". Panduan Google menyarankan tingkat keluhan di Postmaster Tools di bawah 0,10 persen dan tidak pernah mencapai 0,30 persen. Misalnya, 0,10 persen sama dengan 10 keluhan dari 10.000 email.
- **Bounce.** Seberapa sering Anda mengirim ke alamat yang tidak ada. Daftar dengan banyak alamat mati terlihat seperti daftar yang dibeli atau di-scrape. Di-scrape berarti disalin dari situs web oleh sebuah program.
- **Interaksi.** Apakah orang membuka email Anda, membalasnya, menghapusnya tanpa membaca, atau memindahkannya ke folder lain.
- **Konten.** Tautan, lampiran, gambar, dan pola teks yang cocok dengan spam yang dikenal. Konten tidak sepenting dulu. Reputasi dan autentikasi lebih berpengaruh.

## Kenapa email pengirim disaring

Sebagian besar penyaringan tidak disebabkan oleh kata-kata di email. Penyebabnya adalah daftar. Alamat mati menyebabkan bounce. Orang yang tidak meminta email Anda menyebabkan keluhan. Kedua masalah ini berasal dari alamat yang tidak pernah diperiksa.

**Contoh:** sebuah perusahaan mengganti "FREE" menjadi "free" di setiap baris subjek, tetapi tetap mengirim ke daftar lama yang belum diperiksa. Emailnya tetap masuk ke spam, karena penyebabnya adalah daftar.

## Bagaimana alat verifikasi membantu

Alat verifikasi tidak berinteraksi dengan filter spam. Alat ini menghapus alamat yang menyebabkan bounce dan keluhan. Periksa daftar Anda dengan [email checker](/email-checker) sebelum mengirim. Alat ini menghapus kotak masuk yang sudah tidak ada. Alat ini juga menghapus alamat email sekali pakai dan alamat email berbasis peran seperti info@, yang lebih sering mendapat keluhan. Panduan [cara menurunkan bounce rate email](/blog/how-to-reduce-email-bounce-rate) menunjukkan seberapa besar bagian ini biasanya dalam sebuah daftar.

Untuk daftar yang besar, pakai alat [verifikasi email massal](/bulk-email-verifier). [Verifikasi email](/) tidak bisa membuat filter spam menerima email Anda. Verifikasi menghapus satu penyebab penyaringan: mengirim ke alamat yang tidak ada.
