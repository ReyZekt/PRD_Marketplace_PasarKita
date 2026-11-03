# PRODUCT REQUIREMENT DOCUMENT (PRD)

**PasarKita – Marketplace Multi-Penjual**

*(nama produk sementara / working title)*

|              |                                                 |
|--------------|-------------------------------------------------|
| **Versi**    | 1.0 (MVP)                                       |
| **Status**   | Draft for Review                                |
| **Tanggal**  | 6 Oktober 2026                                  |
| **Konteks**  | Tugas kuliah – pengembangan website marketplace |
| **Platform** | Web responsif (desktop & mobile browser)        |
| **Author**   | \[Nama / NIM\]                                  |

## Daftar Isi

- [1. Problem Statement](#1-problem-statement)
- [2. Target User & Persona](#2-target-user--persona)
  - [2.1 Target User](#21-target-user)
  - [2.2 Persona 1: Sinta Maharani (24 tahun) – Pembeli](#22-persona-1-sinta-maharani-24-tahun--pembeli)
  - [2.3 Persona 2: Bu Dewi Lestari (38 tahun) – Penjual](#23-persona-2-bu-dewi-lestari-38-tahun--penjual)
- [3. Goals & Non-Goals](#3-goals--non-goals)
  - [3.1 Goals](#31-goals)
  - [3.2 Non-Goals (di luar MVP)](#32-non-goals-di-luar-mvp)
  - [3.3 Batasan & Asumsi](#33-batasan--asumsi)
- [4. User Stories](#4-user-stories)
- [5. Daftar Fitur (Roadmap)](#5-daftar-fitur-roadmap)
  - [5.1 MVP](#51-mvp)
  - [5.2 Version 2 (Should-Have)](#52-version-2-should-have)
  - [5.3 Later / Horizon (Nice-to-Have)](#53-later--horizon-nice-to-have)
  - [5.4 Rekomendasi Integrasi & Teknologi](#54-rekomendasi-integrasi--teknologi)
- [6. Functional Requirement Detail (MVP)](#6-functional-requirement-detail-mvp)
  - [6.1 Parameter Konfigurasi (nilai default usulan)](#61-parameter-konfigurasi-nilai-default-usulan)
  - [6.2 F-01: Akun, Autentikasi & Alamat](#62-f-01-akun-autentikasi--alamat)
  - [6.3 F-02: Toko & Manajemen Produk](#63-f-02-toko--manajemen-produk)
  - [6.4 F-03: Katalog, Pencarian & Detail Produk](#64-f-03-katalog-pencarian--detail-produk)
  - [6.5 F-04: Keranjang](#65-f-04-keranjang)
  - [6.6 F-05: Checkout & Ongkir](#66-f-05-checkout--ongkir)
  - [6.7 F-06: Pembayaran](#67-f-06-pembayaran)
  - [6.8 F-07: Rekening Bersama (Escrow) & Saldo Penjual](#68-f-07-rekening-bersama-escrow--saldo-penjual)
  - [6.9 F-08: Pesanan & Pengiriman](#69-f-08-pesanan--pengiriman)
  - [6.10 F-09: Chat Pembeli–Penjual](#610-f-09-chat-pembelipenjual)
  - [6.11 F-10: Panel Admin Dasar](#611-f-10-panel-admin-dasar)
  - [6.12 Non-Functional Requirements](#612-non-functional-requirements)
- [7. Sketsa Data Model](#7-sketsa-data-model)
  - [7.1 Relasi Entitas](#71-relasi-entitas)
  - [7.2 Entitas & Field Kunci](#72-entitas--field-kunci)
- [8. Edge Case & Failure State](#8-edge-case--failure-state)
- [9. Success Metrics](#9-success-metrics)
  - [9.1 Metrik](#91-metrik)
  - [9.2 Definisi Selesai (MVP Done)](#92-definisi-selesai-mvp-done)
- [10. Open Questions](#10-open-questions)

---

## 1. Problem Statement

- **Siapa yang dirugikan (penjual):** UMKM dan penjual individu di Indonesia yang ingin berjualan online. Mereka harus memilih antara membangun toko sendiri (mahal dan teknis) atau berjualan lewat chat/media sosial dengan proses manual: verifikasi transfer, input resi, dan sinkronisasi stok.

- **Siapa yang dirugikan (pembeli):** Pembeli di toko independen menanggung risiko membayar tanpa jaminan barang tiba, tidak melihat ongkir sebelum bayar, dan tidak punya pelacakan pengiriman terpadu.

- **Kenapa:** Tidak ada alur terpadu yang menggabungkan katalog multi-toko, pembayaran terverifikasi otomatis, ongkir dan resi otomatis, rekening bersama (escrow), dan chat dalam satu website untuk penjual kecil.

- **Batasan klaim:** Dokumen ini tidak memuat angka kerugian atau ukuran pasar karena belum ada data tervalidasi. Data pendukung dicatat sebagai pertanyaan terbuka (OQ-02).

- **Konteks proyek:** Produk dibangun sebagai tugas kuliah. Seluruh transaksi berjalan di lingkungan sandbox, tanpa uang sungguhan.

## 2. Target User & Persona

### 2.1 Target User

| **Peran**          | **Siapa**                                                                                          | **Tujuan utama di produk**                                                                |
|--------------------|----------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| **Pembeli**        | Individu di Indonesia, 18–45 tahun, terbiasa belanja online dan memakai e-wallet atau transfer VA. | Menemukan barang, membayar dengan aman, dan memantau pengiriman.                          |
| **Penjual**        | UMKM atau individu yang menjual barang fisik; mengelola 10–100 produk sendiri.                     | Memasang produk, menerima pesanan, mengirim tanpa input resi manual, dan mencairkan dana. |
| **Admin platform** | Pengelola internal (tim pengembang pada fase tugas kuliah).                                        | Moderasi, menyelesaikan komplain, memproses penarikan, menelusuri masalah transaksi.      |

*Catatan: rentang usia dan jumlah produk adalah asumsi, belum divalidasi riset pengguna.*

### 2.2 Persona 1: Sinta Maharani (24 tahun) – Pembeli

- **Profil:** Karyawan muda di Bandung; belanja online 4–6 kali per bulan; membayar dengan GoPay, ShopeePay, atau VA.

- **Kebutuhan:** Ongkir terlihat sebelum bayar, uang aman sampai barang tiba, status pengiriman jelas, dan bisa bertanya ke penjual tanpa pindah aplikasi.

- **Pain point:** Pernah menerima barang tidak sesuai dan sulit mengklaim; ongkir baru muncul setelah negosiasi di toko independen; harus bertanya lewat WhatsApp yang terpisah dari pesanan.

### 2.3 Persona 2: Bu Dewi Lestari (38 tahun) – Penjual

- **Profil:** Pemilik usaha kerajinan rumahan, ±50 produk; saat ini berjualan lewat Instagram dan WhatsApp.

- **Kebutuhan:** Katalog yang rapi, pembayaran terverifikasi otomatis, resi dan pelacakan otomatis, stok yang tidak oversell, serta saldo yang transparan.

- **Pain point:** Memeriksa bukti transfer satu per satu, risiko bukti transfer palsu, mengetik resi manual, dan pembeli yang bertanya status pesanan berulang kali.

*Kedua persona adalah fiktif berbasis asumsi, belum divalidasi wawancara.*

## 3. Goals & Non-Goals

### 3.1 Goals

- **G-01:** Alur end-to-end berjalan di sandbox tanpa intervensi manual developer: pesan → bayar → penjual membuat pengiriman → resi terlacak → pembeli konfirmasi → dana dilepas ke saldo penjual.

- **G-02:** Status pesanan selalu konsisten dengan data payment gateway dan kurir. Tidak ada pesanan berstatus dibayar tanpa notifikasi pembayaran yang valid.

- **G-03:** Stok tidak pernah negatif dan tidak terjual melebihi ketersediaan, termasuk saat dua pembeli checkout bersamaan.

- **G-04:** Seluruh alur pembeli dan penjual dapat dipakai pada lebar layar 360 px hingga desktop.

- **G-05:** Seluruh saldo escrow dapat direkonsiliasi: total dana tertahan + tersedia + ditarik = total pembayaran masuk dikurangi refund.

### 3.2 Non-Goals (di luar MVP)

- Live shopping, video produk, dan checkout dari video (fitur khas TikTok Shop).

- Voucher, flash sale, koin/poin loyalitas, iklan penjual, dan program afiliasi.

- Aplikasi mobile native (iOS/Android).

- Ulasan/rating produk, retur barang, dan wishlist (masuk v2).

- Pencairan dana ke rekening bank sungguhan dan penerimaan uang nyata (MVP memakai sandbox dan simulasi).

- Fulfillment/gudang platform, pengiriman internasional, multi-bahasa, dan multi-mata uang.

- Rekomendasi produk berbasis AI atau personalisasi.

### 3.3 Batasan & Asumsi

- Web responsif; tim kecil (jumlah anggota dan tenggat: OQ-02); stack bebas.

- Payment gateway dan logistik belum dimiliki; rekomendasi ada di 5.4. Integrasi memakai akun sandbox.

- Mata uang Rupiah (IDR) bilangan bulat; tanpa desimal.

- Satu pesanan = satu toko (OQ-04).

## 4. User Stories

| **ID**    | **Sebagai...** | **Saya ingin...**                                                            | **Supaya...**                                               |
|-----------|----------------|------------------------------------------------------------------------------|-------------------------------------------------------------|
| **US-01** | Pembeli        | mendaftar dan login dengan email                                             | bisa berbelanja dan menyimpan alamat pengiriman.            |
| **US-02** | Pembeli        | mencari produk dengan kata kunci                                             | cepat menemukan barang yang dibutuhkan.                     |
| **US-03** | Pembeli        | memfilter dan mengurutkan hasil berdasarkan kategori, harga, dan lokasi toko | pilihan menyempit sesuai kebutuhan.                         |
| **US-04** | Pembeli        | melihat detail produk (foto, harga, stok, berat, info toko)                  | yakin sebelum membeli.                                      |
| **US-05** | Pembeli        | menambah produk ke keranjang dan mengubah jumlahnya                          | bisa menyiapkan pembelian sebelum membayar.                 |
| **US-06** | Pembeli        | melihat ongkir dari beberapa kurir sebelum membayar                          | bisa memilih sesuai anggaran dan kecepatan.                 |
| **US-07** | Pembeli        | membayar dengan e-wallet, virtual account, atau COD                          | memakai metode yang biasa saya pakai.                       |
| **US-08** | Pembeli        | uang saya ditahan platform sampai barang diterima                            | tidak rugi jika barang tidak sampai atau tidak sesuai.      |
| **US-09** | Pembeli        | melacak pengiriman dari halaman pesanan                                      | tahu posisi paket dan perkiraan tiba.                       |
| **US-10** | Pembeli        | chat dengan penjual sebelum dan sesudah membeli                              | bisa bertanya soal stok, spesifikasi, atau masalah pesanan. |
| **US-11** | Pembeli        | mengonfirmasi pesanan diterima atau mengajukan komplain                      | dana hanya dilepas jika barang sesuai.                      |
| **US-12** | Penjual        | membuka toko dengan alamat asal pengiriman                                   | bisa berjualan dan ongkir terhitung akurat.                 |
| **US-13** | Penjual        | menambah, mengubah, menonaktifkan produk dan stok                            | katalog toko selalu akurat.                                 |
| **US-14** | Penjual        | melihat pesanan masuk dan membuat pengiriman dengan satu aksi                | tidak perlu mengetik resi manual.                           |
| **US-15** | Penjual        | melihat saldo tertahan dan tersedia serta mengajukan penarikan               | tahu kapan dana bisa dicairkan.                             |
| **US-16** | Penjual        | membalas chat semua pembeli dari satu kotak masuk                            | pelayanan cepat tanpa pindah aplikasi.                      |
| **US-17** | Admin          | menonaktifkan produk, toko, atau akun yang melanggar                         | platform tetap aman.                                        |
| **US-18** | Admin          | memutuskan komplain dan memproses penarikan                                  | sengketa selesai dan dana berpindah sesuai keputusan.       |
| **US-19** | Admin          | melihat semua pesanan, pembayaran, dan log webhook                           | bisa menelusuri masalah transaksi.                          |

## 5. Daftar Fitur (Roadmap)

### 5.1 MVP

- **F-01 Akun, Autentikasi & Alamat** — registrasi, login, buku alamat.

- **F-02 Toko & Manajemen Produk** — buka toko, CRUD produk, stok, foto.

- **F-03 Katalog, Pencarian & Detail Produk** — browse, cari, filter, urutkan.

- **F-04 Keranjang** — tambah, ubah, hapus item; dikelompokkan per toko.

- **F-05 Checkout & Ongkir** — pilih alamat, kurir, hitung total, buat pesanan.

- **F-06 Pembayaran** — e-wallet (GoPay, ShopeePay), VA (BCA, BNI, BRI), COD.

- **F-07 Rekening Bersama (Escrow) & Saldo Penjual** — dana ditahan, dilepas, penarikan, komplain dasar.

- **F-08 Pesanan & Pengiriman** — status pesanan, pembuatan pengiriman, pelacakan kurir, notifikasi in-app.

- **F-09 Chat Pembeli–Penjual** — pesan teks real-time per toko.

- **F-10 Panel Admin Dasar** — kategori, moderasi, komplain, penarikan, log.

### 5.2 Version 2 (Should-Have)

- Ulasan dan rating produk setelah pesanan selesai.

- Retur dan refund terotomasi.

- Voucher toko dan voucher platform.

- Wishlist dan produk terakhir dilihat.

- Varian produk (ukuran/warna) dengan stok per varian (jika tidak masuk MVP, lihat OQ-03).

- Pembayaran QRIS dan checkout multi-toko dalam satu pembayaran (OQ-04).

- Notifikasi email/WhatsApp, kirim gambar di chat, dan verifikasi toko.

### 5.3 Later / Horizon (Nice-to-Have)

- Live shopping dan video commerce.

- Flash sale, koin/loyalitas, afiliasi, dan iklan penjual.

- Aplikasi mobile native.

- Rekomendasi personalisasi dan pencarian berbasis AI.

- Pencairan dana nyata (payout API), integrasi fulfillment, dan multi-bahasa.

### 5.4 Rekomendasi Integrasi & Teknologi

Rekomendasi untuk kebutuhan yang belum Anda tentukan. Semua berstatus sandbox/pengujian; keputusan final menunggu konfirmasi (OQ-06, OQ-07).

| **Kebutuhan**           | **Rekomendasi**                                            | **Alasan & catatan**                                                                                                                                                                                                                                                  |
|-------------------------|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Payment gateway         | **Midtrans (Snap API)**                                    | Satu integrasi mencakup GoPay, ShopeePay, dan VA BCA/BNI/BRI/Permata; menyediakan sandbox dan notifikasi webhook bertanda tangan. Alternatif: Xendit.                                                                                                                 |
| Logistik                | **Biteship (Rates, Order, Tracking API)**                  | Satu API untuk banyak kurir: cek tarif, buat pengiriman, resi, dan pelacakan; tersedia mode sandbox. Di sandbox, Order API gratis; Rates dan Public Tracking dikenai biaya kecil per hit, sehingga cache ongkir dan pakai Retrieve Tracking (gratis) untuk pengujian. |
| Escrow                  | **Ledger internal (buku besar)**                           | Midtrans dan Biteship tidak menyediakan escrow marketplace siap pakai pada alur ini. Dana pembeli masuk ke akun merchant platform; pemisahan “tertahan” dan “tersedia” dicatat di ledger. Untuk produk komersial perlu kajian regulasi (OQ-06).                       |
| COD                     | **COD tercatat di sistem; eksekusi mengikuti OQ-08**       | Payment gateway tidak menangani COD. Biteship memiliki opsi COD pada tarif dan order, namun ketersediaannya bergantung kurir dan akun.                                                                                                                                |
| Database                | **PostgreSQL**                                             | Stok, pesanan, dan ledger memerlukan transaksi ACID dan locking baris.                                                                                                                                                                                                |
| Aplikasi (non-mengikat) | Web responsif: React/Next.js + Node.js (REST) + PostgreSQL | Stack bebas; pilih yang paling dikuasai tim. Chat memakai WebSocket atau SSE dengan fallback polling.                                                                                                                                                                 |

## 6. Functional Requirement Detail (MVP)

### 6.1 Parameter Konfigurasi (nilai default usulan)

Nilai di bawah belum ditetapkan oleh Anda atau dosen. Nilai ini dipakai sebagai default sementara dan disimpan sebagai konfigurasi, bukan hard-code. Konfirmasi ada di OQ-01.

| **ID**   | **Parameter**                                     | **Nilai default**                            |
|----------|---------------------------------------------------|----------------------------------------------|
| **P-01** | Batas waktu pembayaran online                     | 24 jam sejak pesanan dibuat                  |
| **P-02** | Auto-release dana setelah kurir menandai terkirim | 3 hari kalender                              |
| **P-03** | SLA penjual memproses pesanan setelah dibayar     | 2 hari kalender                              |
| **P-04** | Masa berlaku hasil ongkir                         | 15 menit                                     |
| **P-05** | Foto produk                                       | 1–5 foto; maks 2 MB; JPG/PNG/WebP            |
| **P-06** | Alamat tersimpan per pengguna                     | Maks 5                                       |
| **P-07** | Produk per halaman katalog                        | 24                                           |
| **P-08** | Pesan chat                                        | Maks 1.000 karakter; 20 pesan/menit/pengguna |
| **P-09** | Minimal penarikan saldo                           | Rp50.000                                     |
| **P-10** | Komisi platform                                   | 0% (kolom tetap ada di data)                 |
| **P-11** | Password                                          | Min. 8 karakter, ≥1 huruf, ≥1 angka          |
| **P-12** | Login gagal beruntun                              | 5 kali dalam 15 menit → kunci 15 menit       |

### 6.2 F-01: Akun, Autentikasi & Alamat

- **FR-01.1** Registrasi dengan nama lengkap, email unik, nomor telepon, dan password sesuai P-11. Verifikasi email: OQ-05.

- **FR-01.2** Login dengan email dan password; password disimpan sebagai hash (bcrypt atau argon2); pembatasan percobaan sesuai P-12.

- **FR-01.3** Satu akun dapat menjadi pembeli sekaligus penjual. Peran penjual aktif setelah akun membuka toko (F-02). Admin dibuat lewat seed, tidak lewat registrasi publik.

- **FR-01.4** Buku alamat (maks P-06): nama penerima, telepon, provinsi, kota, kecamatan, kode pos, detail alamat, dan area Biteship hasil autocomplete (Maps API). Satu alamat dapat ditandai default.

- **FR-01.5** Pembeli wajib punya minimal satu alamat sebelum checkout.

- **FR-01.6** Logout dan perubahan password membatalkan sesi aktif lain.

### 6.3 F-02: Toko & Manajemen Produk

- **FR-02.1** Buka toko: nama toko (unik), deskripsi, nomor telepon toko, dan alamat asal pengiriman (dipilih dari alamat akun). Satu akun = satu toko.

- **FR-02.2** Tambah produk: nama (maks 120 karakter), deskripsi (maks 3.000), kategori, harga (bilangan bulat ≥ 100), stok (≥ 0), berat dalam gram (wajib, \> 0), dimensi p×l×t cm (opsional), foto sesuai P-05.

- **FR-02.3** Satu produk = satu SKU tanpa varian (OQ-03).

- **FR-02.4** Status produk: aktif, nonaktif, diarsipkan, diblokir_admin. Hanya aktif dengan stok \> 0 yang dapat dibeli.

- **FR-02.5** Penjual hanya dapat melihat dan mengubah produk dan pesanan tokonya sendiri; akses ke milik toko lain ditolak (HTTP 403).

- **FR-02.6** Produk yang pernah dipesan tidak dihapus permanen; hanya diarsipkan. Pesanan menyimpan salinan (snapshot) nama dan harga.

- **FR-02.7** Produk diblokir_admin tidak dapat diaktifkan kembali oleh penjual.

### 6.4 F-03: Katalog, Pencarian & Detail Produk

- **FR-03.1** Beranda menampilkan daftar kategori dan produk aktif terbaru dengan paginasi sesuai P-07.

- **FR-03.2** Pencarian kata kunci pada nama produk dan nama toko; tidak sensitif huruf besar/kecil; hasil kosong menampilkan pesan “Produk tidak ditemukan”.

- **FR-03.3** Filter: kategori, rentang harga (min–maks), provinsi/kota asal toko. Urutan: terbaru, harga terendah, harga tertinggi, terlaris (berdasarkan sold_count).

- **FR-03.4** Halaman detail: galeri foto, nama, harga, stok, berat, deskripsi, info toko, tombol “Tambah ke Keranjang”, “Beli Sekarang”, dan “Chat Penjual”.

- **FR-03.5** Halaman toko menampilkan profil toko dan semua produk aktifnya.

- **FR-03.6** Produk non-aktif/arsip/diblokir tidak muncul di katalog; akses langsung via URL menampilkan “Produk tidak tersedia”.

- **FR-03.7** Pengunjung belum login boleh menelusuri katalog; login diminta saat menambah ke keranjang atau chat.

### 6.5 F-04: Keranjang

- **FR-04.1** Keranjang tersimpan di server per akun dan dikelompokkan per toko.

- **FR-04.2** Ubah jumlah: minimum 1, maksimum sebesar stok saat ini; melebihi stok ditolak dengan pesan stok tersisa.

- **FR-04.3** Keranjang tidak mereservasi stok; stok divalidasi ulang saat membuat pesanan.

- **FR-04.4** Jika harga produk berubah sejak ditambahkan, keranjang menampilkan harga terbaru dan penanda perubahan.

- **FR-04.5** Item yang tidak lagi tersedia ditandai dan tidak dapat di-checkout.

- **FR-04.6** Pembeli tidak dapat menambahkan produk dari tokonya sendiri.

- **FR-04.7** Checkout dilakukan per toko: pembeli memilih satu toko dari keranjang (OQ-04).

### 6.6 F-05: Checkout & Ongkir

- **FR-05.1** Checkout dimulai dari keranjang (satu toko) atau “Beli Sekarang”. Pembeli memilih alamat tujuan dari buku alamat.

- **FR-05.2** Sistem memanggil Biteship Rates API: asal = alamat toko, tujuan = alamat pembeli, berat total = Σ(berat × jumlah), nilai barang = subtotal. Hasil berupa daftar kurir/layanan dengan nama, estimasi hari, dan harga.

- **FR-05.3** Daftar kurir yang ditampilkan mengikuti kurir aktif pada akun Biteship (OQ-07). Pembeli wajib memilih satu layanan.

- **FR-05.4** Total = subtotal produk + ongkir + biaya layanan (default 0, P-10). Seluruh perhitungan dilakukan di server; angka dari browser tidak dipercaya.

- **FR-05.5** Hasil ongkir kedaluwarsa setelah P-04; jika lewat, sistem menghitung ulang dan menampilkan perubahan sebelum pesanan dibuat.

- **FR-05.6** Saat “Buat Pesanan”, server memvalidasi dalam satu transaksi database: produk aktif, stok cukup, alamat valid, ongkir berlaku; lalu mengurangi (mereservasi) stok.

- **FR-05.7** Pesanan menyimpan snapshot alamat, harga satuan, nama produk, kurir, layanan, dan ongkir.

- **FR-05.8** Pesanan non-COD berstatus MENUNGGU_PEMBAYARAN dengan batas waktu P-01. Jika kedaluwarsa atau dibatalkan, stok dikembalikan.

- **FR-05.9** Tombol “Buat Pesanan” memakai idempotency key sehingga klik ganda tidak membuat pesanan ganda.

### 6.7 F-06: Pembayaran

- **FR-06.1** Metode MVP: GoPay dan ShopeePay (e-wallet); VA BCA, BNI, dan BRI; COD. Metode lain dinonaktifkan melalui konfigurasi enabled_payments Midtrans.

- **FR-06.2** Untuk pembayaran online, server membuat transaksi Midtrans Snap dengan order_id unik dan gross_amount = total pesanan yang dihitung server. Pembeli diarahkan ke Snap/halaman instruksi pembayaran.

- **FR-06.3** Status pembayaran hanya berubah lewat webhook Midtrans yang tanda tangannya valid (SHA-512 dari order_id+status_code+gross_amount+server key). Webhook tidak valid ditolak dan dicatat; status tidak berubah.

- **FR-06.4** Pemrosesan webhook idempoten: notifikasi duplikat atau datang tidak berurutan tidak menggandakan efek (mis. ledger, stok) dan tidak memundurkan status final.

- **FR-06.5** Pemetaan status: pending → menunggu bayar; settlement/capture → dibayar; expire → kedaluwarsa; cancel/deny/failure → gagal/batal.

- **FR-06.6** Setelah dibayar, pesanan berpindah ke PERLU_DIPROSES dan penjual dinotifikasi.

- **FR-06.7** Halaman “Menunggu Pembayaran” menampilkan nomor VA atau tautan e-wallet, hitung mundur P-01, tombol “Lanjutkan Pembayaran”, dan “Batalkan Pesanan”.

- **FR-06.8** COD: pesanan langsung PERLU_DIPROSES tanpa pembayaran online. COD hanya tersedia jika layanan kurir yang dipilih mendukung COD menurut hasil Rates API. Batas nilai dan mekanisme setoran: OQ-08.

- **FR-06.9** Jumlah dibayar yang tidak sama dengan total pesanan menandai pembayaran sebagai “perlu ditinjau” dan pesanan tidak diproses (EC-06).

### 6.8 F-07: Rekening Bersama (Escrow) & Saldo Penjual

- **FR-07.1** Setiap pembayaran online yang berhasil mencatat entri ledger HOLD sebesar subtotal produk (setelah komisi) atas pesanan tersebut. Dana tidak masuk saldo tersedia penjual.

- **FR-07.2** Dana dilepas (RELEASE) ke saldo tersedia penjual ketika: (a) pembeli menekan “Pesanan Diterima”, atau (b) otomatis setelah P-02 sejak kurir menandai terkirim dan tidak ada komplain terbuka.

- **FR-07.3** Ongkir tidak masuk saldo penjual; ongkir dibayarkan ke kurir.

- **FR-07.4** Ledger bersifat append-only: tidak ada UPDATE/DELETE pada entri. Saldo dihitung dari ledger.

- **FR-07.5** Penarikan: penjual mengisi bank, nomor rekening, atas nama, dan jumlah (≥ P-09, ≤ saldo tersedia). Status diminta → disetujui → dibayar/ditolak oleh admin. Pencairan MVP berupa simulasi (OQ-10).

- **FR-07.6** Komplain: pembeli dapat mengajukan komplain (alasan + foto opsional) pada status TERKIRIM sebelum konfirmasi. Dana tetap HOLD; pesanan berstatus DIKOMPLAIN. Admin memutuskan lepas ke penjual atau refund ke pembeli.

- **FR-07.7** Refund pada MVP dicatat sebagai entri REFUND oleh admin; eksekusi dana sungguhan mengikuti OQ-11.

- **FR-07.8** Penarikan memakai transaksi database dan penguncian saldo agar dua permintaan bersamaan tidak melebihi saldo (EC-17).

### 6.9 F-08: Pesanan & Pengiriman

Status pesanan:

| **Status**          | **Arti**                                                     | **Pemicu**                     |
|---------------------|--------------------------------------------------------------|--------------------------------|
| MENUNGGU_PEMBAYARAN | Pesanan dibuat, belum dibayar (non-COD).                     | Buat pesanan                   |
| PERLU_DIPROSES      | Sudah dibayar atau COD; menunggu penjual membuat pengiriman. | Webhook pembayaran / pilih COD |
| DIKIRIM             | Kurir sudah mengambil paket.                                 | Webhook Biteship               |
| TERKIRIM            | Kurir menandai paket sampai.                                 | Webhook Biteship               |
| SELESAI             | Pembeli konfirmasi atau auto-release; dana dilepas.          | Pembeli / sistem               |
| DIKOMPLAIN          | Komplain terbuka; dana ditahan.                              | Pembeli                        |
| DIBATALKAN          | Dibatalkan pembeli, penjual, atau melewati SLA.              | Pengguna / sistem              |
| KEDALUWARSA         | Waktu bayar habis.                                           | Sistem (P-01)                  |
| DIKEMBALIKAN        | Paket kembali ke penjual (ditolak/gagal kirim).              | Webhook Biteship               |

- **FR-08.1** Penjual melihat daftar pesanan dengan filter status; pesanan PERLU_DIPROSES ditampilkan paling atas.

- **FR-08.2** Aksi “Proses & Buat Pengiriman” memanggil Biteship Order API dengan data toko, alamat, item, dan kurir yang dipilih pembeli. Sistem menyimpan ID order Biteship dan nomor resi. Jika resi belum tersedia, tampilkan “Menunggu resi” sampai webhook atau polling mengisinya.

- **FR-08.3** Pesanan PERLU_DIPROSES yang tidak diproses penjual dalam P-03 otomatis DIBATALKAN, stok dikembalikan, dan pembeli di-refund (FR-07.7).

- **FR-08.4** Pembaruan status pengiriman diterima lewat webhook Biteship; cadangan: polling berkala memakai Retrieve Tracking. Riwayat peristiwa disimpan dan ditampilkan sebagai timeline di halaman pesanan pembeli dan penjual.

- **FR-08.5** Pemetaan status Biteship ke status pesanan (mis. paket diambil → DIKIRIM, terkirim → TERKIRIM, dikembalikan/ditolak → DIKEMBALIKAN) diverifikasi terhadap dokumentasi Biteship saat implementasi.

- **FR-08.6** Tombol “Pesanan Diterima” aktif hanya pada status TERKIRIM.

- **FR-08.7** Pembeli dapat membatalkan pesanan MENUNGGU_PEMBAYARAN kapan saja, dan PERLU_DIPROSES selama penjual belum membuat pengiriman. Setelah pengiriman dibuat, pembatalan oleh pembeli tidak diizinkan.

- **FR-08.8** Penjual dapat membatalkan PERLU_DIPROSES dengan alasan wajib (mis. stok habis); pembeli di-refund.

- **FR-08.9** Notifikasi in-app untuk setiap perubahan status, dengan penghitung belum dibaca di navigasi.

### 6.10 F-09: Chat Pembeli–Penjual

- **FR-09.1** Satu percakapan unik per pasangan (pembeli, toko). Dapat dimulai dari halaman produk, toko, atau pesanan.

- **FR-09.2** Pesan teks saja, maks P-08. Jika dimulai dari halaman produk, tautan produk terlampir otomatis sebagai konteks.

- **FR-09.3** Pesan baru muncul tanpa refresh (WebSocket atau SSE); jika koneksi putus, fallback polling dan pesan tertunda dikirim ulang.

- **FR-09.4** Penanda belum dibaca dan penghitung per percakapan; riwayat dimuat bertahap (paginasi).

- **FR-09.5** Penjual melihat semua percakapan tokonya dalam satu kotak masuk.

- **FR-09.6** Pembatasan laju sesuai P-08; pesan kosong dan hanya spasi ditolak.

- **FR-09.7** Akun yang disuspend tidak dapat mengirim pesan. Akses admin ke isi chat: OQ-14.

### 6.11 F-10: Panel Admin Dasar

- **FR-10.1** Login admin memakai akun dengan peran admin; akses halaman admin oleh non-admin ditolak.

- **FR-10.2** CRUD kategori produk (nama, slug, induk opsional).

- **FR-10.3** Moderasi: blokir/aktifkan produk, toko, atau akun dengan alasan wajib; alasan dikirim sebagai notifikasi.

- **FR-10.4** Daftar semua pesanan dan pembayaran dengan filter status, tanggal, dan metode; detail menampilkan log webhook terkait.

- **FR-10.5** Antrian komplain dan permintaan penarikan beserta aksi keputusan (FR-07.5 – FR-07.7).

- **FR-10.6** Audit log untuk setiap aksi admin: siapa, aksi, target, alasan, waktu. Log tidak dapat diubah.

### 6.12 Non-Functional Requirements

- **NFR-01** **Keamanan:** HTTPS; password ter-hash; kunci API (Midtrans, Biteship) hanya di server dan variabel lingkungan; perlindungan terhadap OWASP Top 10 (SQL injection, XSS, CSRF); otorisasi diperiksa di server pada setiap endpoint.

- **NFR-02** **Integritas data:** operasi stok dan ledger dalam transaksi database; nilai uang bilangan bulat Rupiah.

- **NFR-03** **Responsif:** tata letak berfungsi pada lebar 360 px – 1440 px.

- **NFR-04** **Performa (target usulan):** halaman katalog memuat \< 3 detik di jaringan 4G; skor Lighthouse mobile ≥ 70.

- **NFR-05** **Observabilitas:** setiap webhook dan panggilan API pihak ketiga dicatat (payload, hasil, waktu).

- **NFR-06** **Ketahanan integrasi:** panggilan Midtrans dan Biteship dibungkus lapisan adaptor sehingga dapat diganti penyedia tiruan (mock) saat demo atau saat layanan sandbox bermasalah.

## 7. Sketsa Data Model

### 7.1 Relasi Entitas

| **Entitas A**   | **Relasi** | **Entitas B**   | **Keterangan**                       |
|-----------------|------------|-----------------|--------------------------------------|
| users           | 1 — 0..1   | shops           | Satu pengguna maksimal satu toko     |
| users           | 1 — \*     | addresses       | Alamat milik pengguna                |
| shops           | 1 — \*     | products        |                                      |
| categories      | 1 — \*     | products        | Dapat berinduk (parent_id)           |
| products        | 1 — \*     | product_images  |                                      |
| users           | 1 — 1      | carts           |                                      |
| carts           | 1 — \*     | cart_items      | Merujuk products                     |
| users (pembeli) | 1 — \*     | orders          |                                      |
| shops           | 1 — \*     | orders          | Satu pesanan = satu toko             |
| orders          | 1 — \*     | order_items     | Snapshot nama dan harga              |
| orders          | 1 — \*     | payments        | Mendukung percobaan pembayaran ulang |
| orders          | 1 — 0..1   | shipments       |                                      |
| shipments       | 1 — \*     | shipment_events | Riwayat pelacakan                    |
| orders          | 1 — \*     | ledger_entries  | HOLD, RELEASE, REFUND, FEE           |
| shops           | 1 — \*     | withdrawals     |                                      |
| orders          | 1 — 0..1   | disputes        |                                      |
| users + shops   | *—*        | conversations   | Unik per pasangan (pembeli, toko)    |
| conversations   | 1 — \*     | messages        |                                      |

### 7.2 Entitas & Field Kunci

| **Entitas**              | **Field kunci**                                                                                                                                                                                                                                 |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| users                    | user_id (PK), email (unik), password_hash, full_name, phone, role (user/admin), status (aktif/suspend), created_at                                                                                                                              |
| addresses                | address_id (PK), user_id (FK), recipient_name, phone, province, city, district, postal_code, detail, biteship_area_id, latitude, longitude, is_default                                                                                          |
| shops                    | shop_id (PK), owner_user_id (FK, unik), name (unik), slug, description, phone, origin_address_id (FK), status                                                                                                                                   |
| categories               | category_id (PK), name, slug, parent_id (FK, nullable)                                                                                                                                                                                          |
| products                 | product_id (PK), shop_id (FK), category_id (FK), name, description, price (int), stock (int ≥ 0), weight_gram, length_cm, width_cm, height_cm, status, sold_count, created_at                                                                   |
| product_images           | image_id (PK), product_id (FK), url, sort_order                                                                                                                                                                                                 |
| carts / cart_items       | cart_id (PK), user_id (FK, unik) / cart_item_id (PK), cart_id (FK), product_id (FK), qty                                                                                                                                                        |
| orders                   | order_id (PK), order_code (unik), buyer_id (FK), shop_id (FK), address_snapshot (JSON), subtotal, shipping_cost, platform_fee, total_amount, payment_method (online/cod), status, expires_at, cancel_reason, idempotency_key (unik), created_at |
| order_items              | order_item_id (PK), order_id (FK), product_id (FK), product_name_snapshot, unit_price, qty, subtotal                                                                                                                                            |
| payments                 | payment_id (PK), order_id (FK), provider, provider_order_id (unik), payment_type (gopay/shopeepay/bca_va/bni_va/bri_va/cod), gross_amount, status, snap_token, va_number, paid_at, raw_response (JSON)                                          |
| shipments                | shipment_id (PK), order_id (FK, unik), courier_company, courier_service, biteship_order_id, waybill_id (nullable), shipping_cost, status, created_at                                                                                            |
| shipment_events          | event_id (PK), shipment_id (FK), status, note, event_time                                                                                                                                                                                       |
| ledger_entries           | entry_id (PK), order_id (FK), shop_id (FK), type (HOLD/RELEASE/REFUND/FEE/WITHDRAW), amount (int bertanda), bucket (held/available), created_at — append-only                                                                                   |
| withdrawals              | withdrawal_id (PK), shop_id (FK), amount, bank_name, account_number, account_holder, status, processed_by (FK), processed_at                                                                                                                    |
| disputes                 | dispute_id (PK), order_id (FK), opened_by (FK), reason, evidence_url, status, resolved_by (FK), resolution_note                                                                                                                                 |
| conversations / messages | conversation_id (PK), buyer_id (FK), shop_id (FK), unik(buyer, shop), last_message_at / message_id (PK), conversation_id (FK), sender_id (FK), body, product_id (opsional), read_at, created_at                                                 |
| notifications            | notification_id (PK), user_id (FK), type, title, body, ref_type, ref_id, read_at                                                                                                                                                                |
| webhook_logs             | log_id (PK), source (midtrans/biteship), payload (JSON), signature_valid, status, received_at                                                                                                                                                   |
| admin_audit_logs         | log_id (PK), admin_id (FK), action, target_type, target_id, reason, created_at                                                                                                                                                                  |

## 8. Edge Case & Failure State

| **ID**    | **Skenario**                                                | **Failure state**                     | **Penanganan**                                                                                                                          |
|-----------|-------------------------------------------------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **EC-01** | Dua pembeli checkout produk dengan stok terakhir bersamaan  | Oversell, stok negatif                | Pengurangan stok atomik dalam transaksi dengan penguncian baris; pembeli kedua menerima “Stok tidak mencukupi”.                         |
| **EC-02** | Pembayaran tidak dilakukan sampai P-01                      | Stok tertahan terus                   | Pesanan menjadi KEDALUWARSA, stok dikembalikan; webhook expire diproses idempoten.                                                      |
| **EC-03** | Webhook Midtrans duplikat, terlambat, atau tidak berurutan  | Status mundur atau efek ganda         | Status final tidak dapat dimundurkan; efek (ledger, stok) dijaga kunci idempotensi per provider_order_id dan jenis event.               |
| **EC-04** | Webhook dengan tanda tangan tidak valid                     | Pemalsuan pembayaran                  | Tolak, catat di webhook_logs dengan signature_valid=false, status tidak berubah.                                                        |
| **EC-05** | Pembeli membayar VA setelah pesanan kedaluwarsa             | Dana masuk tanpa pesanan aktif        | Tandai “pembayaran terlambat”; tidak mengaktifkan pesanan; admin memutuskan refund (OQ-11).                                             |
| **EC-06** | Jumlah dibayar ≠ total pesanan                              | Salah hitung / manipulasi             | Pembayaran ditandai “perlu ditinjau”; pesanan tidak diproses sampai admin memutuskan.                                                   |
| **EC-07** | Biteship Rates API gagal atau timeout                       | Ongkir tidak bisa dihitung            | Tampilkan “Ongkir belum tersedia, coba lagi”; coba ulang otomatis sekali; checkout tidak lanjut tanpa ongkir; tidak ada ongkir default. |
| **EC-08** | Alamat tujuan tidak terjangkau kurir                        | Tidak ada opsi pengiriman             | Tampilkan “Alamat tidak terjangkau”; sarankan mengganti alamat.                                                                         |
| **EC-09** | Pembuatan order Biteship gagal (mis. kurir tidak ditemukan) | Pesanan menggantung di PERLU_DIPROSES | Tampilkan penyebab ke penjual dengan tombol coba lagi; SLA P-03 tetap berjalan.                                                         |
| **EC-10** | Tarif final kurir berbeda dari tarif saat checkout          | Selisih biaya                         | Selisih dicatat di shipments; kebijakan penanggung selisih: OQ-12.                                                                      |
| **EC-11** | Paket ditolak atau dikembalikan ke penjual                  | Dana tertahan tanpa kejelasan         | Status DIKEMBALIKAN; dana tetap HOLD; admin memutuskan refund (OQ-13).                                                                  |
| **EC-12** | Pembeli tidak mengonfirmasi penerimaan                      | Dana tertahan selamanya               | Auto-release setelah P-02 jika tidak ada komplain terbuka.                                                                              |
| **EC-13** | Penjual tidak memproses pesanan sesuai SLA                  | Pesanan terbengkalai                  | Auto-batal sesuai P-03; refund dicatat; penjual dinotifikasi.                                                                           |
| **EC-14** | Produk dinonaktifkan atau diblokir saat ada di keranjang    | Checkout produk tidak tersedia        | Keranjang menandai item tidak tersedia; pesanan yang sudah dibuat tidak terpengaruh.                                                    |
| **EC-15** | Harga produk berubah saat di keranjang                      | Harga tidak sesuai ekspektasi         | Tampilkan harga baru dengan penanda; pembeli melihatnya sebelum membuat pesanan.                                                        |
| **EC-16** | Klik ganda atau refresh saat “Buat Pesanan”/bayar           | Pesanan atau pembayaran ganda         | Idempotency key; permintaan kedua mengembalikan pesanan yang sama.                                                                      |
| **EC-17** | Dua permintaan penarikan bersamaan melebihi saldo           | Saldo negatif                         | Transaksi database dengan penguncian; permintaan yang melebihi saldo ditolak.                                                           |
| **EC-18** | Sesi habis di tengah checkout                               | Data keranjang hilang                 | Keranjang tersimpan server; setelah login, pembeli kembali ke halaman checkout.                                                         |
| **EC-19** | Unggah foto produk gagal atau melebihi P-05                 | Produk tanpa foto                     | Validasi tipe dan ukuran di klien dan server; pesan galat spesifik; produk tidak dapat aktif tanpa minimal 1 foto.                      |
| **EC-20** | Koneksi chat real-time terputus                             | Pesan tidak terkirim                  | Fallback polling; pesan tertunda dikirim ulang; indikator “mengirim ulang”.                                                             |
| **EC-21** | Layanan sandbox Midtrans/Biteship tidak tersedia saat demo  | Demo gagal                            | Beralih ke adaptor tiruan (mock) lewat konfigurasi (NFR-06).                                                                            |

## 9. Success Metrics

### 9.1 Metrik

Target di bawah adalah usulan karena kriteria penilaian dan jumlah penguji belum diketahui (OQ-02).

| **Metrik**                                 | **Definisi**                                                                                              | **Target (usulan)**                              |
|--------------------------------------------|-----------------------------------------------------------------------------------------------------------|--------------------------------------------------|
| **North Star: Pesanan selesai end-to-end** | Jumlah pesanan berstatus SELESAI yang melewati bayar → kirim → konfirmasi → dana dilepas pada uji.        | ≥ 20 pesanan; ≥ 3 per metode (e-wallet, VA, COD) |
| Task success rate pembeli                  | % penguji pembeli yang menyelesaikan alur cari → checkout → bayar tanpa bantuan.                          | ≥ 80% dari ≥ 10 penguji                          |
| Task success rate penjual                  | % penguji penjual yang menyelesaikan buka toko → tambah produk → proses pesanan tanpa bantuan.            | ≥ 80% dari ≥ 3 penguji                           |
| Konsistensi pembayaran                     | Pesanan berstatus dibayar tanpa webhook valid.                                                            | 0                                                |
| Integritas stok                            | Kejadian stok negatif atau oversell pada uji beban kecil (mis. 20 checkout bersamaan satu produk stok 5). | 0                                                |
| Rekonsiliasi escrow                        | Selisih antara total ledger dan total pembayaran bersih.                                                  | Rp0                                              |
| Waktu checkout                             | Rata-rata waktu dari membuka checkout sampai instruksi pembayaran tampil.                                 | ≤ 2 menit                                        |
| Performa halaman                           | Skor Lighthouse mobile halaman katalog.                                                                   | ≥ 70                                             |
| Lulus skenario E2E utama                   | Skenario otomatis: bayar sukses, bayar kedaluwarsa, webhook duplikat, komplain, auto-release.             | 100% lulus                                       |

### 9.2 Definisi Selesai (MVP Done)

- Semua fitur F-01 sampai F-10 berjalan di lingkungan yang dapat diakses penguji (hosting/demo), memakai sandbox Midtrans dan Biteship.

- Satu skenario demo lengkap berhasil untuk masing-masing metode: e-wallet, VA, dan COD.

- Seluruh edge case EC-01 sampai EC-21 yang bertanda “Penanganan” telah diuji minimal sekali; hasil tercatat.

- Metrik di 9.1 terukur dan dilaporkan.

- Dokumen yang dikumpulkan ke dosen: PRD ini dan artefak lain sesuai ketentuan tugas (OQ-02).

## 10. Open Questions

Setiap pertanyaan memiliki default sementara agar pengembangan tidak terhenti. Default bukan keputusan final.

| **ID**    | **Pertanyaan**                                                                                                                                                                               | **Dampak**                               | **Default sementara**                                                              |
|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------|------------------------------------------------------------------------------------|
| **OQ-01** | Apakah parameter default pada 6.1 (P-01 s.d. P-12) dapat diterima?                                                                                                                           | Perilaku sistem, uji                     | Pakai nilai di 6.1; semua dapat diubah lewat konfigurasi.                          |
| **OQ-02** | Apa ketentuan tugas dari dosen: jumlah anggota tim, tenggat, kriteria penilaian, deliverables, dan jumlah penguji yang diharapkan? Apakah ada data pendukung masalah yang wajib dicantumkan? | Scope, target metrik, Definition of Done | Target 9.1 dipakai apa adanya; Problem Statement tanpa angka.                      |
| **OQ-03** | Apakah varian produk (ukuran/warna) wajib ada di MVP?                                                                                                                                        | Model data produk, keranjang, stok       | Tidak; satu produk = satu SKU.                                                     |
| **OQ-04** | Apakah satu pembayaran harus dapat mencakup beberapa toko (seperti Shopee)?                                                                                                                  | Model order/payment, ongkir, escrow      | Tidak; satu pesanan = satu toko = satu pembayaran.                                 |
| **OQ-05** | Apakah verifikasi email atau nomor telepon wajib sebelum berbelanja atau berjualan?                                                                                                          | Alur registrasi                          | Tidak wajib di MVP.                                                                |
| **OQ-06** | Apakah sandbox cukup untuk penilaian, atau perlu akun produksi? Bila dikomersialkan, regulasi apa yang berlaku untuk menahan dana pembeli (escrow) dan memproses pembayaran?                 | Legal, arsitektur dana                   | Sandbox dan ledger internal; tidak ada uang nyata. Kajian regulasi di luar MVP.    |
| **OQ-07** | Kurir apa yang ditampilkan? Bergantung ketersediaan kurir pada akun Biteship (sandbox).                                                                                                      | Checkout ongkir                          | Gunakan kurir aktif pada akun, dibatasi maksimal 3 kurir reguler.                  |
| **OQ-08** | COD: apakah disimulasikan atau memakai fitur COD kurir? Berapa batas nilai COD? Siapa menanggung biaya jika COD ditolak?                                                                     | Pembayaran, escrow, pengembalian         | COD disimulasikan; dianggap lunas saat kurir menandai terkirim; tanpa batas nilai. |
| **OQ-09** | Apakah ada komisi platform atau biaya layanan di MVP?                                                                                                                                        | Perhitungan total, ledger                | Tidak; 0% (P-10).                                                                  |
| **OQ-10** | Apakah pencairan saldo penjual disimulasikan atau memakai payout API sungguhan?                                                                                                              | Penarikan                                | Simulasi; admin menandai dibayar.                                                  |
| **OQ-11** | Bagaimana refund dieksekusi? Apakah semua metode pembayaran (termasuk VA) dapat direfund otomatis lewat API, atau perlu proses manual? Perlu dicek di dokumentasi Midtrans.                  | Komplain, pembatalan, EC-05              | Refund dicatat di ledger oleh admin; eksekusi dana di luar sistem.                 |
| **OQ-12** | Siapa menanggung selisih jika tarif final kurir berbeda dari tarif checkout?                                                                                                                 | Biaya platform                           | Platform menanggung; selisih dicatat.                                              |
| **OQ-13** | Siapa menanggung ongkir retur dan bagaimana dana diperlakukan jika paket dikembalikan?                                                                                                       | Escrow, EC-11                            | Dana tetap ditahan; admin memutuskan kasus per kasus.                              |
| **OQ-14** | Apakah admin boleh membaca isi chat? Apakah perlu filter tautan eksternal atau nomor telepon?                                                                                                | Privasi, moderasi                        | Admin hanya mengakses chat pada kasus komplain; tanpa filter konten di MVP.        |
| **OQ-15** | Kategori barang apa yang dilarang dijual (mis. obat keras, barang ilegal)? Siapa yang menegakkan?                                                                                            | Moderasi, syarat layanan                 | Daftar larangan di syarat layanan; admin memblokir manual.                         |
| **OQ-16** | Apakah kepatuhan perlindungan data pribadi dan ketentuan perdagangan elektronik perlu dicakup dalam tugas ini?                                                                               | Penyimpanan data, kebijakan privasi      | Tidak dicakup; hanya praktik keamanan dasar (NFR-01).                              |
