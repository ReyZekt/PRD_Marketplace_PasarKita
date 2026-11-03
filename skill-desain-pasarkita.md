# Skill Desain UI — PasarKita Marketplace UMKM

## Tujuan Skill
Gunakan skill ini untuk merancang, membangun, atau memperbaiki antarmuka web marketplace **PasarKita**, sebuah marketplace produk UMKM Indonesia. Hasil desain harus mengikuti bahasa visual pada kode sumber: modern, bersih, ramah, berorientasi pada produk, dengan warna hijau sebagai identitas utama.

Skill ini berfokus pada **desain UI/UX dan konsistensi visual**. Jangan menganggap data contoh, harga, jumlah stok, ulasan, atau metrik di HTML sebagai data produksi yang sebenarnya.

## 1. Prinsip Desain

- **Utamakan kejelasan:** pengguna harus mudah menemukan produk, memahami harga, melihat promo, dan melakukan tindakan utama.
- **Dukung identitas lokal:** gunakan foto produk UMKM Indonesia yang relevan, misalnya batik, tenun, kuliner daerah, kopi, kerajinan, hasil pertanian, dan produk herbal.
- **Hierarki visual kuat:** bedakan judul bagian, judul produk, harga, informasi pendukung, badge, dan tombol.
- **Konsisten:** gunakan token warna, tipografi, radius, jarak, ikon, serta pola kartu yang sama di seluruh halaman.
- **Responsif:** tata letak harus beradaptasi dari ponsel ke tablet dan desktop tanpa kehilangan fungsi penting.
- **Aksesibel:** pastikan kontras teks memadai, kontrol dapat dikenali, label tombol jelas, dan gambar memiliki teks alternatif.
- **Interaksi memberi umpan balik:** hover, pilihan aktif, notifikasi, status pesanan, dan perubahan keranjang harus mudah dipahami.

## 2. Identitas Visual

### Karakter
- Modern, bersih, terpercaya, bersahabat, dan bernuansa lokal Indonesia.
- Gunakan latar terang dan permukaan berlapis secara halus.
- Hijau digunakan untuk aksi utama, status positif, dan identitas merek.
- Merah digunakan secara selektif untuk diskon, flash sale, stok kritis, dan peringatan.
- Warna amber dapat dipakai untuk rating bintang.

### Palet warna acuan
Warna berikut diambil dari konfigurasi Tailwind pada kode sumber. Pertahankan token semantik daripada menyebarkan kode warna langsung ke banyak komponen.

| Token | Nilai | Penggunaan |
|---|---|---|
| `primary` | `#006B2C` | Tombol utama, tautan aktif, aksen merek |
| `primary-container` | `#00873A` | Variasi hijau untuk hover/aksen |
| `secondary` | `#006D30` | Aksen hijau sekunder |
| `secondary-container` | `#92F5A4` | Badge atau permukaan hijau lembut |
| `secondary-fixed` | `#95F8A7` | Aksen positif yang lebih terang |
| `tertiary` | `#466252` | Aksen pendukung |
| `surface` | `#FAF8FF` | Latar halaman |
| `surface-container-lowest` | `#FFFFFF` | Kartu dan permukaan utama |
| `surface-container-low` | `#F2F3FF` | Latar sekunder |
| `surface-container` | `#EAEDFF` | Permukaan kontrol/kartu alternatif |
| `surface-container-high` | `#E2E7FF` | Permukaan yang lebih menonjol |
| `on-surface` | `#131B2E` | Teks utama |
| `on-surface-variant` | `#3E4A3D` | Teks sekunder |
| `outline` | `#6E7B6C` | Teks/batas pendukung |
| `outline-variant` | `#BD CABA` | Garis pemisah lembut; cek token sumber sebelum digunakan |
| `error` | `#BA1A1A` | Peringatan dan status diskon |
| `error-container` | `#FFDAD6` | Latar peringatan lembut |

**Catatan implementasi:** kode sumber mendefinisikan token warna bernama. Jika token digunakan kembali dalam proyek, validasi nilai warna yang mengandung spasi atau format tidak valid sebelum memasukkannya ke CSS.

## 3. Tipografi

- Gunakan **Inter** sebagai font utama untuk seluruh antarmuka.
- Terapkan bobot secara konsisten: 400 untuk isi, 500 untuk label, 600 untuk judul kecil, dan 700 untuk judul/penekanan.
- Hindari terlalu banyak ukuran font dalam satu tampilan.
- Gunakan angka yang mudah dipindai untuk harga, KPI, jumlah pesanan, dan statistik.

### Skala tipografi acuan
| Token | Ukuran | Line height | Bobot |
|---|---:|---:|---:|
| `display-lg` | 40 px | 48 px | 700 |
| `headline-lg` | 32 px | 40 px | 700 |
| `headline-md` | 24 px | 32 px | 600 |
| `headline-sm` | 20 px | 28 px | 600 |
| `title-md` | 16 px | 24 px | 600 |
| `title-sm` | 14 px | 20 px | 600 |
| `body-lg` | 16 px | 24 px | 400 |
| `body-md` | 14 px | 20 px | 400 |
| `body-sm` | 12 px | 16 px | 400 |
| `label-lg` | 14 px | 20 px | 500 |
| `label-md` | 12 px | 16 px | 500 |
| `label-sm` | 10 px | 14 px | 600 |

Untuk layar kecil, gunakan judul hero sekitar 24 px dan naikkan secara responsif menuju 32 px pada layar yang lebih besar.

## 4. Spasi, Radius, dan Elevasi

### Spasi
Gunakan skala berulang yang sejalan dengan kode:
- `space-xs`: 4 px
- `space-sm`: 8 px
- `space-md`: 16 px
- `space-lg`: 24 px
- `space-xl`: 32 px
- `space-2xl`: 48 px
- Gutter halaman: sekitar 16 px pada ponsel dan 24 px pada layar yang lebih lebar.
- Margin konten dapat diperbesar hingga sekitar 48 px pada desktop besar.

### Radius
- Radius default: 4 px.
- `lg`: 8 px.
- `xl`: 12 px.
- `full`: bentuk pil/bulat penuh.
- Kartu utama umumnya menggunakan radius 12 px; badge dan chip dapat menggunakan radius penuh.

### Elevasi dan batas
- Gunakan bayangan lembut untuk header, kartu, dan elemen yang perlu terpisah dari latar.
- Hindari bayangan berat dan border kontras tinggi yang tidak diperlukan.
- Gunakan garis pemisah halus untuk membedakan kelompok informasi.

## 5. Ikon dan Gambar

- Gunakan **Material Symbols Outlined** untuk ikon navigasi dan aksi, seperti pencarian, lokasi, keranjang, notifikasi, obrolan, toko, kategori, kupon, dan pengiriman.
- Ikon harus konsisten dalam gaya dan ukuran.
- Foto produk sebaiknya tajam, terang, relevan, dan memiliki rasio yang seragam di dalam satu kelompok kartu.
- Untuk kartu produk, gunakan gambar persegi (`aspect-square`) dan `object-fit: cover`.
- Untuk banner, gunakan gambar lebar dengan `background-cover` dan `background-position: center`.
- Tambahkan overlay gradasi pada banner yang memuat teks agar teks tetap terbaca.
- Jangan menggunakan foto dekoratif yang tidak berhubungan dengan produk atau kategori.

## 6. Pola Layout dan Komponen

### A. Header marketplace
Header pembeli memiliki beberapa lapisan:
1. Bar informasi kecil untuk lokasi pengiriman dan tautan utilitas.
2. Area utama berisi logo, pencarian, akses pesan/notifikasi/keranjang, dan profil.
3. Navigasi kategori atau promo.
4. Pada desktop, konten dibatasi dengan lebar maksimum sekitar `max-w-7xl`; gunakan gutter konsisten.

Panduan:
- Pertahankan header mudah dipindai dan tidak terlalu padat.
- Pencarian harus menjadi salah satu elemen paling menonjol.
- Badge jumlah notifikasi/keranjang berukuran kecil dan kontras.
- Header tetap/sticky boleh digunakan, tetapi beri ruang atas pada konten agar tidak tertutup.

### B. Hero dan banner promosi
- Gunakan layout dua kolom pada desktop: banner utama sekitar 8/12 lebar dan dua banner pendukung sekitar 4/12.
- Pada ponsel, susun banner secara vertikal.
- Banner utama memuat label kampanye, judul manfaat, teks singkat, dan CTA utama.
- Gunakan overlay gelap di bagian teks.
- Indikator carousel harus menunjukkan slide aktif dengan jelas.
- Banner pendukung menggunakan judul pendek, detail promo, dan tautan eksplorasi.

### C. Banner ajakan seller
- Letakkan pada panel berwarna sekunder yang lembut.
- Gunakan ikon toko, judul ajakan, keterangan singkat, dan tombol panduan/aktivasi toko.
- Buat hierarki antara CTA utama dan CTA sekunder.

### D. Layanan cepat
- Gunakan grid ikon dengan label pendek.
- Desktop dapat menampilkan delapan item dalam satu baris; ponsel menampilkan empat kolom jika ruang mencukupi.
- Setiap item memiliki area ikon, latar berwarna lembut, dan hover yang mengubah warna/posisi secara halus.
- Pastikan label tetap terbaca dan tidak terpotong secara tidak sengaja.

### E. Kartu produk
Pola kartu produk standar:
1. Gambar produk dengan rasio persegi.
2. Badge status bila relevan, misalnya diskon, gratis ongkir, atau merchant terverifikasi.
3. Nama produk maksimal sekitar dua baris.
4. Harga utama yang paling mudah dilihat.
5. Harga lama dicoret jika ada diskon.
6. Informasi pendukung seperti asal daerah, rating, jumlah ulasan/terjual, dan stok.
7. Tombol aksi seperti tambah ke keranjang.

Aturan:
- Gunakan grid 2 kolom pada ponsel, 4 kolom pada tablet, dan 5–6 kolom pada desktop sesuai konteks.
- Pertahankan tinggi kartu dan posisi harga/tombol seragam.
- Terapkan hover ringan pada gambar dan bayangan kartu.
- Jangan menampilkan semua metadata jika membuat kartu terlalu padat.

### F. Flash sale
- Gunakan label merah yang mudah dikenali, hitung mundur, dan tautan menuju semua promo.
- Kartu menampilkan diskon, harga, harga awal, informasi stok, serta indikator progres.
- Status stok kritis harus jelas tetapi tidak menggantikan informasi produk.
- Timer dan progres stok harus berasal dari data aplikasi saat implementasi; jangan membuat angka statis seolah-olah data langsung.

### G. Kategori dan navigasi chip
- Gunakan chip berbentuk pil dengan ikon kategori.
- Chip aktif menggunakan warna utama dan teks kontras; chip tidak aktif memakai permukaan netral.
- Kartu kategori dapat menggunakan pola **bento grid** dengan gambar persegi, nama kategori, dan jumlah produk.
- Pada layar sempit, chip boleh digulir horizontal; jangan memaksa semua chip tampil sekaligus.

### H. Rekomendasi produk
- Letakkan judul bagian dan opsi pengurutan di panel terpisah.
- Opsi pengurutan dapat mencakup relevansi, terlaris, harga termurah, atau jarak.
- Gunakan grid produk responsif.
- Jika menyediakan “muat lebih banyak” atau infinite scroll, pastikan pengguna tetap mendapat umpan balik dan tidak kehilangan konteks.

### I. Halaman detail produk dan checkout
Gunakan komposisi tiga area pada desktop:
- **Kiri:** galeri gambar, thumbnail, profil seller, statistik toko, dan informasi keamanan.
- **Tengah/kanan:** nama produk, kategori/badge, rating, harga, varian, pengiriman, dan estimasi kurir.
- **Area pembelian:** pemilih kuantitas, subtotal, tombol tambah keranjang, tombol beli langsung, dan wishlist.

Bagian lanjutan:
- Navigasi tab untuk spesifikasi dan deskripsi.
- Tabel spesifikasi yang mudah dipindai.
- Cerita produk yang menjelaskan konteks/asal produk.
- Informasi perawatan bila relevan.
- Ulasan terverifikasi, ringkasan rating, dan progress bar.
- Rekomendasi produk terkait.
- Modal panduan ukuran jika produk memiliki ukuran.

Pada ponsel, susun secara vertikal dan pastikan CTA pembelian mudah ditemukan. Sticky buy box hanya digunakan jika tidak menutupi konten atau kontrol penting.

### J. Dashboard penjual
Dashboard seller harus mengutamakan pekerjaan operasional:
- Identitas toko dan status operasional.
- Aksi cepat di header.
- Strip KPI untuk penjualan hari ini, pesanan baru, produk dilihat, dan konversi.
- Area tindakan yang membutuhkan perhatian.
- Grafik tren pendapatan mingguan.
- Ringkasan target penjualan dan kategori terlaris.
- Tabel manajemen pesanan dengan status dan pagination.
- Panel produk unggulan, pengingat stok rendah, dan navigasi alat seller.

Panduan:
- Gunakan kartu KPI dengan angka utama besar, label jelas, dan konteks/perbandingan jika tersedia.
- Grafik harus memiliki label sumbu atau label hari yang terbaca.
- Tabel harus tetap bisa digunakan pada layar sempit, misalnya dengan scroll horizontal atau tampilan alternatif.
- Bedakan status pesanan dengan label warna dan teks, bukan warna saja.

### K. Dashboard admin
Dashboard admin merupakan area kontrol platform. Terapkan pola dashboard yang konsisten dengan seller, tetapi prioritaskan:
- Status platform dan kontrol utama.
- Aksi cepat untuk tugas admin.
- Metrik eksekutif.
- Pemantauan aktivitas dan status yang memerlukan tindakan.
- Tabel atau panel operasional dengan filter yang jelas.

Jangan menambahkan metrik atau fitur admin yang tidak didukung kebutuhan produk; ikuti pola visual dan struktur yang telah ditetapkan oleh aplikasi.

## 7. Responsivitas

Gunakan pendekatan mobile-first:
- **Ponsel:** satu kolom untuk area kompleks, grid produk dua kolom, navigasi horizontal yang dapat digulir, teks dan tombol yang mudah disentuh.
- **Tablet:** tingkatkan jumlah kolom dan kelompokkan panel yang berkaitan.
- **Desktop:** gunakan container terpusat dengan lebar maksimum, grid multi-kolom, dan panel samping bila membantu alur kerja.

Breakpoint Tailwind yang tampak dalam kode:
- `sm`: perubahan untuk layar yang lebih lebar.
- `md`: layout tablet/desktop kecil.
- `lg`: layout desktop multi-kolom.

Pastikan tidak ada overflow horizontal yang tidak disengaja, kecuali pada komponen yang memang dirancang untuk scroll horizontal.

## 8. Motion dan State Interaksi

Gunakan animasi singkat dan halus:
- Hover kartu: bayangan bertambah atau gambar membesar sedikit.
- Hover tombol: perubahan warna latar dan/atau warna teks.
- Hover kategori: perubahan warna dan pergeseran kecil.
- Transisi warna/transformasi umumnya sekitar 200–500 ms, sesuai elemen.
- Modal harus memiliki hierarki yang jelas dan cara menutup yang mudah ditemukan.
- Toast/notifikasi harus menjelaskan hasil tindakan tanpa menghalangi alur utama.
- State aktif pada tab, chip, filter, dan navigasi harus terlihat jelas.

Hindari animasi berlebihan, gerakan yang mengganggu, atau efek yang menurunkan keterbacaan. Hormati preferensi `prefers-reduced-motion` jika memungkinkan.

## 9. Aksesibilitas dan Kualitas UI

- Gunakan elemen HTML semantik: `header`, `nav`, `main`, `section`, `button`, `form`, dan tabel yang sesuai.
- Semua kontrol interaktif harus dapat diakses dengan keyboard.
- Jangan memakai `href="#"` untuk aksi nyata dalam implementasi final; gunakan tujuan navigasi atau handler yang benar.
- Berikan label aksesibel pada tombol ikon.
- Pastikan kontras teks dan latar memadai.
- Jangan menyampaikan status hanya melalui warna.
- Gunakan teks alternatif gambar yang menjelaskan produk atau tujuan gambar.
- Pastikan fokus keyboard terlihat.
- Hindari menyembunyikan scrollbar jika hal itu membuat pengguna tidak menyadari bahwa area dapat digulir.

## 10. Aturan Implementasi

Kode sumber menggunakan HTML, Tailwind CSS melalui CDN, konfigurasi tema Tailwind khusus, Material Symbols, dan font Inter.

Saat mengimplementasikan desain berdasarkan skill ini:
1. Periksa framework dan struktur proyek yang sudah ada sebelum memilih pendekatan.
2. Jika proyek memang menggunakan Tailwind, gunakan utility class dan token tema yang telah ada.
3. Jangan mengganti stack proyek tanpa alasan.
4. Pecah antarmuka menjadi komponen yang dapat digunakan kembali: header, banner, product card, category chip, KPI card, order table, dan sebagainya.
5. Pisahkan data produk dari markup UI.
6. Pastikan semua tombol, filter, tab, modal, pencarian, dan aksi keranjang benar-benar berfungsi.
7. Gunakan data contoh dengan penanda yang jelas bila API belum tersedia.
8. Jangan mengklaim timer, stok, rating, atau statistik sebagai real-time tanpa integrasi data yang mendukungnya.
9. Periksa tampilan pada beberapa ukuran layar.
10. Hindari duplikasi gaya yang tidak perlu dan gunakan token desain bersama.

## 11. Checklist Sebelum Selesai

- [ ] Identitas hijau PasarKita konsisten.
- [ ] Font Inter dan skala tipografi diterapkan dengan benar.
- [ ] Warna menggunakan token semantik.
- [ ] Spasi dan radius konsisten.
- [ ] Header dan pencarian mudah ditemukan.
- [ ] Kartu produk memiliki ukuran gambar dan struktur informasi yang seragam.
- [ ] CTA utama terlihat jelas dan berbeda dari CTA sekunder.
- [ ] Banner memiliki kontras teks yang baik.
- [ ] Layout responsif pada ponsel, tablet, dan desktop.
- [ ] Tab, chip, tombol, modal, dan filter memiliki state yang jelas.
- [ ] Tidak ada tautan atau tombol palsu yang terlihat berfungsi tetapi tidak melakukan apa pun.
- [ ] Informasi stok, timer, rating, dan metrik tidak disajikan sebagai data langsung tanpa sumber.
- [ ] Aksesibilitas dasar, keyboard focus, label ikon, dan alt gambar diperiksa.
- [ ] Tidak ada overflow, teks terpotong, atau elemen yang saling menimpa.

## 12. Instruksi Singkat untuk AI Desainer/Pengembang

> Rancang antarmuka PasarKita sebagai marketplace UMKM Indonesia yang modern, bersih, responsif, dan terpercaya. Ikuti sistem desain dalam dokumen ini: warna hijau sebagai identitas utama, latar terang berlapis lembut, font Inter, ikon Material Symbols Outlined, radius kartu sekitar 12 px, dan grid produk responsif. Pertahankan pola komponen untuk beranda pembeli, detail produk/checkout, dashboard penjual, dan dashboard admin. Prioritaskan hierarki informasi, gambar produk yang relevan, CTA yang jelas, aksesibilitas, dan interaksi yang benar-benar berfungsi. Jangan mengarang integrasi atau menyatakan data contoh sebagai data real-time. Periksa struktur proyek yang ada sebelum melakukan perubahan teknis.
