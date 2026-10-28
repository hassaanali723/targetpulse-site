---
title: "Cara verifikasi email di balik secure email gateway"
description: Proofpoint, Mimecast dan Barracuda menerima setiap alamat di tepi jaringan, sehingga verifikasi biasa gagal. Apa yang terjadi dan cara tetap mendapat jawaban.
slug: verifikasi-email-di-balik-secure-email-gateway
date: 2026-10-23
keyword: verifikasi email secure email gateway
image: /blog/covers/id/verifikasi-email-di-balik-secure-email-gateway.webp
imageAlt: Proofpoint, Mimecast dan Barracuda menerima setiap alamat di tepi gateway
cta: Dapatkan kembali kontak di balik gateway
---

Pernahkah Anda mengekspor laporan verifikasi dan melihat terlalu banyak kontak terbaik Anda dari perusahaan besar kembali dengan hasil unknown (tidak diketahui)? Jika ya, besar kemungkinan ada secure email gateway di tengahnya. Bukan domain catch-all, meskipun gejalanya terlihat sama persis. Sebuah gateway.

Perbedaan ini penting karena solusinya berbeda. Kontak di balik gateway juga biasanya justru kontak yang paling Anda inginkan. Perusahaan kecil jarang memakainya. Bank, perusahaan asuransi, rumah sakit, universitas dan sebagian besar perusahaan Fortune 500 memakainya.

## Apa yang dilakukan alat verifikasi saat gagal

Verifikasi standar adalah percakapan singkat. Alat verifikasi Anda terhubung ke server email yang tercantum di MX record domain. MX record adalah catatan DNS yang menunjukkan server mana yang menerima email untuk domain itu. Alat itu menyapa server, menyebut pengirim, lalu menyebut penerima dan menunggu. Server yang menyimpan daftar kotak masuk yang nyata akan menjawab dengan jujur. Server itu menjawab ya untuk alamat yang ada dan tidak untuk alamat yang tidak ada, lalu alat verifikasi Anda mencatat jawabannya.

Secure email gateway (SEG), atau gateway keamanan email, adalah lapisan penyaring yang berada di depan server email yang sebenarnya. Setiap pesan untuk domain itu masuk ke gateway lebih dulu. Pesan dipindai untuk malware, phishing dan pelanggaran kebijakan, baru kemudian diteruskan ke dalam. Proofpoint, Mimecast, Barracuda, Cisco dan belasan vendor yang lebih kecil bekerja dengan cara ini.

Gateway tidak punya alasan untuk tahu kotak masuk mana yang ada. Tugasnya menyaring, bukan mencari di direktori. Jadi saat alat verifikasi Anda bertanya tentang penerima tertentu, gateway menerimanya. Gateway menerima alamat yang nyata, alamat yang salah ketik, dan nama orang yang sudah keluar pada 2019. Penerimaan terjadi di batas luar. Keputusan apakah kotak masuk itu ada terjadi di suatu tempat di belakangnya, yang tidak pernah dicapai alat verifikasi Anda.

Dari luar, perilaku ini tidak bisa dibedakan dari domain catch-all. Percakapannya sama, jawabannya sama, dan hasilnya sama-sama tidak berguna.

## Kenapa berhenti di "berisiko" adalah langkah yang salah

Sebagian besar alat verifikasi menanggapinya dengan memberi label pada alamat itu. Labelnya berbeda di setiap vendor. Anda akan melihat risky, unknown, accept-all, catch-all atau ok_for_all, tergantung ekspor siapa yang Anda baca. Artinya sama di setiap kasus: kami tidak bisa memastikannya.

Sampai di situ, itu jawaban yang jujur. Masalahnya ada pada apa yang terjadi selanjutnya. Alat pengiriman cenderung menganggap label itu sebagai penolakan halus, dan sebagian besar orang mengikutinya. Tidak ada yang mau mempertaruhkan reputasi pengirim untuk sesuatu yang belum pasti. Jadi alamat itu disaring dari kampanye lalu dilupakan begitu saja.

Pada daftar B2B, jumlahnya sekitar 30% dari kontak Anda. Pada daftar yang condong ke perusahaan besar, jumlahnya lebih banyak. Anda sudah membayar untuk mendapatkan kontak itu dan membayar lagi untuk memverifikasinya, dan hasilnya tetap tidak jelas.

## Apa yang dilakukan pemeriksaan yang mengenali gateway

Singkatnya, Anda berhenti mengajukan pertanyaan yang tidak bisa dijawab gateway. Anda mencari pertanyaan lain yang bisa dijawabnya.

Gateway tidak diam. Gateway berperilaku dengan pola tertentu, tergantung produknya, konfigurasinya dan alamat tertentu yang ditanyakan. Waktu respons berbeda antara alamat yang nantinya akan diteruskan oleh gateway dan alamat yang nantinya akan ditolak. Kode error dan susunan katanya berbeda antar vendor dan antar versi. Beberapa gateway menunjukkan penolakan di bagian akhir transaksi, bukan di titik tempat sebagian besar alat verifikasi berhenti mendengarkan. Beberapa gateway berperilaku berbeda untuk kotak masuk yang nyata dibanding string acak di domain yang sama, jika Anda tahu apa yang harus dibandingkan.

Untuk membaca sinyal itu, gateway harus dikenali lebih dulu. Setelah itu, pemeriksaan yang dibuat khusus untuk produk tersebut diterapkan, bukan pemeriksaan umum. Karena itulah cakupan gateway biasanya disebut dalam angka. Giggal.ai mengenali lima belas, termasuk Proofpoint, Mimecast dan Barracuda. Alat lain yang mencoba hal ini menyebut tiga atau lima. Alat verifikasi yang tidak menyebut satu pun hampir pasti mengembalikan hasil umum dan memberinya label risky.

Batasannya juga perlu disampaikan dengan jujur. Ini adalah kesimpulan dari perilaku yang diamati, bukan pencarian di direktori. Jadi hasilnya tidak selalu benar, dan vendor yang jujur tidak akan mengatakan sebaliknya. Yang bisa diandalkan adalah ini: segmen besar yang tadinya tidak bisa dipakai menjadi sebagian besar bisa dipakai. Itu klaim yang berbeda dan lebih sederhana daripada kesempurnaan.

## Menghitung berapa banyak daftar Anda yang terdampak

Anda tidak perlu alat khusus untuk memeriksa apakah gateway adalah masalah Anda. Anda hanya perlu MX record dari domain di daftar Anda.

Ambil bagian domain dari setiap alamat, hapus domain yang dobel, lalu [cari MX record](/mx-lookup) untuk setiap domain. Domain di balik Proofpoint mengarah ke hostname yang berisi pphosted atau ppe-hosted. Domain Mimecast mengarah ke host mimecast.com, biasanya dengan kode wilayah. Barracuda terlihat sebagai barracudanetworks.com. Cisco muncul sebagai iphmx.com. Domain Microsoft 365 dan Google Workspace masing-masing mengarah ke host outlook.com dan google.com. Itu bukan gateway, meskipun tetap bisa disetel sebagai catch-all.

Cocokkan daftar itu dengan alamat yang tidak bisa dipastikan oleh alat verifikasi Anda. Jika banyak yang tumpang tindih, gateway-lah penyebabnya. Menjalankan ulang alat yang sama berapa kali pun tidak akan mengubah hasilnya.

## Memilih alat untuk masalah ini

Tiga pertanyaan membedakan alat verifikasi yang bisa menangani hal ini dari yang tidak bisa.

Apakah alat itu menyebut gateway yang dikenalinya? Vendor yang benar-benar mengerjakan hal ini akan memublikasikan daftar atau setidaknya jumlahnya, karena itulah yang dijual. Bahasa yang samar tentang deteksi canggih tanpa menyebut produk biasanya berarti hanya deteksi, bukan penyelesaian. Alat itu bisa memberi tahu ada gateway, tetapi tetap tidak bisa memberi tahu apakah kotak masuknya nyata.

Apakah alat itu mengembalikan valid atau tidak valid, atau hanya label? Tanyakan secara spesifik seperti apa hasilnya untuk alamat di balik Mimecast. Jika jawabannya Anda mendapat tanda risky dan skor keyakinan, Anda hanya membeli label yang sedikit lebih baik.

Berapa biayanya untuk alamat yang perlu pekerjaan ini? Penyelesaian gateway dan catch-all lebih mahal untuk dijalankan oleh vendor, jadi sebagian besar vendor memberi harga yang berbeda. Ada yang menagih beberapa kali lipat kredit standar. Ada yang memotongnya dari jatah terpisah yang lebih kecil, yang habis lebih dulu daripada jatah standar. Keduanya wajar, tetapi Anda perlu tahu sebelum mengunggah daftar yang 40% isinya domain perusahaan besar. Giggal.ai menagih semua verifikasi dengan tarif tetap 1 kredit per alamat, dari saldo yang sama dengan semua hal lain.

## Urutan langkah dalam praktik

Jalankan daftar Anda dengan alat yang Anda pakai sekarang dan simpan hasil ekspornya. Ambil setiap baris yang kembali dengan hasil risky, unknown atau accept-all. Periksa MX record domain-domain itu untuk melihat berapa banyak yang berupa gateway, bukan catch-all biasa. Lalu jalankan segmen itu saja dengan alat yang dibuat untuk masalah ini, dan bandingkan kedua ekspor berdampingan.

Perbandingan itulah intinya. Setiap vendor di sini, termasuk kami, membuat klaim akurasi yang terdengar mirip di halaman harga. Satu-satunya angka yang berarti adalah berapa banyak kontak Anda yang tadinya dianggap mati ternyata hidup. Lalu lihat apakah alamat yang ditandai valid benar-benar menerima email saat Anda mengirim ke sana.

Jika Anda ingin mencobanya, Giggal.ai memberi 1.000 kredit gratis tanpa kartu kredit. Kredit itu bisa dipakai untuk upload massal, bukan satu per satu, dan hanya dengan cara itu tes ini memberi informasi yang berguna. Anda juga bisa membaca lebih lanjut tentang [cara kami memverifikasi domain catch-all dan accept-all](/catch-all-verification), atau tentang [pendekatan verifikasi SEG](/seg-email-verification) (dalam bahasa Inggris) secara lebih rinci.
