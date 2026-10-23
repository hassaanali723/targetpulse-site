---
title: "Cara verifikasi email di Claude dan ChatGPT"
description: Hubungkan alat verifikasi email ke Claude, ChatGPT, Cursor atau VS Code lewat MCP, lalu cek alamat email langsung di chat tanpa harus mengekspor file CSV.
slug: verifikasi-email-di-claude-dan-chatgpt
date: 2026-10-23
keyword: verifikasi email di claude dan chatgpt
image: /blog/covers/id/verifikasi-email-di-claude-dan-chatgpt.webp
imageAlt: Memverifikasi alamat email di Claude dan ChatGPT lewat MCP
cta: Verifikasi email tanpa keluar dari chat
---

Sebagian besar verifikasi email masih dilakukan dengan cara yang sama seperti tahun 2015. Anda mengekspor CSV, membuka tab browser, mengunggah file, menunggu, mengunduh CSV lain, lalu mengimpornya ke tempat lain. Cara ini berhasil. Namun ada empat kali pindah konteks hanya untuk satu pertanyaan dasar: apakah kotak masuk ini nyata.

Jika sebagian pekerjaan Anda sudah dilakukan di Claude atau ChatGPT, kini ada jalan yang lebih singkat. Model Context Protocol memungkinkan asisten AI memanggil alat eksternal secara langsung. Artinya, verifikasi bisa dilakukan di dalam percakapan yang sedang Anda jalankan.

## Apa sebenarnya MCP

MCP adalah spesifikasi tentang cara asisten AI berkomunikasi dengan layanan dari luar. Anthropic memublikasikannya pada akhir 2024, dan sejak itu MCP dipakai jauh di luar Claude. Cara paling mudah memahaminya adalah sebagai standar colokan. Sebelum ada MCP, setiap asisten butuh integrasi khusus untuk setiap alat. Sekarang sebuah layanan cukup memublikasikan satu server MCP, dan setiap klien yang mendukungnya bisa memakainya.

Untuk alat verifikasi, cakupannya kecil. Hanya ada beberapa hal yang akan Anda tanyakan: cek alamat ini, cek daftar ini, tampilkan rincian lengkapnya, dan berapa sisa kredit saya. Giggal.ai menyediakan persis hal itu sebagai tiga alat, yaitu `verify_emails`, `get_verification_details` dan `get_credit_balance`.

Yang membuatnya terasa berbeda dari API adalah Anda tidak menulis panggilannya. Anda cukup menyebut apa yang Anda inginkan dalam kalimat yang memang akan Anda ketik. Asisten lalu menentukan alat mana yang dipanggil dan dengan argumen apa.

## Kapan cara ini berguna, dan kapan tidak

Jujur soal batasannya akan menghindarkan Anda dari kekecewaan.

Cara ini berguna jika verifikasi adalah satu langkah dalam pekerjaan yang lebih besar yang sedang Anda lakukan di percakapan. Misalnya Anda menempelkan daftar peserta konferensi dan ingin alamat yang mati dihapus sebelum menulis email outreach. Anda sedang men-debug alur pendaftaran dan ingin tahu apakah alamat tertentu itu nyata. Anda sedang menyusun rangkaian email dan ingin mengecek dua belas nama di akun target sebelum mengirim. Dalam semua kasus itu, alternatifnya adalah keluar dari percakapan, dan panggilan alat memang lebih cepat.

Cara ini tidak cocok untuk membersihkan daftar berisi 200.000 baris. Itu pekerjaan untuk upload massal atau API. Memprosesnya lewat antarmuka chat tidak menambah apa pun selain waktu tunggu yang lebih lama dan banyak token. Pakai dashboard atau endpoint REST untuk pekerjaan itu, karena memang untuk itulah keduanya dibuat.

## Cara menyiapkannya

Anda butuh akun Giggal.ai dan API key (kunci API). Key itu ada di tab Developer API di aplikasi, bukan di Settings. Ini hal kecil, tetapi lebih sering membuat orang bingung daripada seharusnya.

Servernya berjalan secara remote, jadi tidak ada yang perlu diinstal dan tidak ada SDK. Alamatnya `https://mcp.giggal.ai/mcp`, dan autentikasinya memakai API key Anda.

Di Claude Desktop, buka Settings, lalu Connectors, dan tambahkan custom connector yang mengarah ke URL itu. Claude Code menerima server yang sama lewat `claude mcp add`. Cursor dan VS Code sama-sama membaca server MCP dari file konfigurasi JSON di folder proyek atau folder pengguna. Bentuk file itu dijelaskan di [halaman MCP](/mcp), lengkap dengan potongan kodenya. ChatGPT mendukung server MCP remote lewat pengaturan connector, pada paket yang mengaktifkan fitur tersebut.

Setelah terhubung, asisten akan menampilkan ketiga alat itu dan Anda bisa mulai bertanya.

## Seperti apa pemakaiannya

Anda tidak butuh kalimat khusus. Semua contoh ini berfungsi:

- Verifikasi hello@stripe.com dan beri tahu saya apakah itu kotak masuk yang nyata
- Ini sebelas alamat dari pendaftaran webinar, cek mana yang akan bounce
- Mana di antara ini yang domain catch-all, dan apakah kotak masuknya benar-benar ada
- Berapa sisa kredit verifikasi saya sebelum saya menjalankan ini

Asisten memanggil `verify_emails`, menerima hasil untuk setiap alamat, lalu menjelaskannya dalam balasan. Jika Anda bertanya tentang sebuah daftar, Anda bisa melanjutkan di percakapan yang sama. Minta asisten membuang semua yang tidak valid, mengelompokkan sisanya per domain, dan menuliskannya sebagai blok CSV yang bisa langsung Anda tempel ke alat pengiriman. Bagian kedua inilah yang membuatnya layak dilakukan. Asisten sudah memegang datanya dan bisa mengubah bentuknya tanpa bolak-balik lagi.

## Bagian catch-all lebih penting di sini daripada biasanya

Sekitar 30% daftar B2B berada di domain yang menerima email untuk setiap alamat, nyata atau tidak. Domain seperti ini disebut catch-all. Sebagian besar alat verifikasi mengembalikan alamat itu dengan label risky atau accept-all, yang berarti alat itu tidak bisa memastikannya.

Label itu sudah merepotkan di dashboard. Di percakapan, hasilnya lebih buruk. Asisten akan melaporkan apa adanya, lalu Anda mendapat balasan bahwa empat dari sebelas alamat Anda belum pasti. Itu sama persis dengan keadaan Anda sebelum bertanya. Giggal.ai memastikan alamat itu menjadi valid atau tidak valid. Hal yang sama berlaku untuk kotak masuk di balik lima belas secure email gateway yang disebut namanya. Jadi yang kembali ke asisten adalah jawaban yang jelas, bukan ketidakpastian.

## Biaya dan satu langkah hati-hati

Verifikasi lewat MCP memakai kredit yang sama seperti di tempat lain. Setiap verifikasi alamat dikenai tarif tetap 1 kredit (termasuk alamat catch-all dan alamat yang dilindungi SEG). Paket gratisnya berisi 1.000 kredit tanpa kartu kredit. Kredit tidak kedaluwarsa.

Langkah hati-hatinya sederhana. Asisten akan melakukan apa yang Anda minta, termasuk menjalankan pekerjaan yang lebih besar dari yang Anda maksud. Tanyakan saldo kredit sebelum menjalankan sesuatu yang besar. Tempelkan alamatnya langsung, jangan arahkan asisten ke file yang belum Anda lihat. Kedua hal ini tidak khusus untuk verifikasi, tetapi kesalahan pada API berbayar lebih merepotkan daripada biasanya.

## Apakah layak disiapkan

Jika Anda membuka Claude atau ChatGPT hampir setiap hari dan daftar email adalah bagian dari pekerjaan Anda, setup ini memakan waktu sekitar dua menit. Setup ini menghapus satu langkah yang tadinya Anda kerjakan secara manual. Jika verifikasi adalah pekerjaan massal bulanan yang Anda jalankan di browser, dashboard memang alat yang lebih baik, dan cara ini tidak akan banyak mengubah pekerjaan Anda.

Petunjuk setup dan potongan konfigurasi untuk setiap klien ada di [halaman MCP](/mcp). [Referensi API](/public/docs) mencakup operasi yang sama lewat REST jika Anda lebih suka membuat skrip.
