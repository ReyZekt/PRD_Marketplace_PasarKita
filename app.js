// ========================================================
// PasarKita - State & Data Management Engine (F-01 s/d F-10)
// ========================================================

const APP_STATE = {
  currentView: 'home', // 'home' | 'product-detail' | 'checkout' | 'orders' | 'seller-dashboard' | 'admin-panel'
  selectedProduct: null,
  activeCategory: 'all',
  activeSort: 'terbaru',
  searchQuery: '',
  
  // Keranjang (F-04: Dikelompokkan per toko)
  cart: [
    { productId: 'prod-1', qty: 2 }
  ],

  // Produk UMKM Indonesia Otentik (F-02 & F-03)
  products: [
    {
      id: 'prod-1',
      name: 'Kopi Arabika Gayo Single Origin 250g',
      shopId: 'shop-1',
      shopName: 'Gayo Highland Coffee',
      shopOrigin: 'Aceh Tengah, Aceh',
      category: 'kopi',
      price: 85000,
      originalPrice: 100000,
      discount: 15,
      stock: 45,
      weightGram: 300,
      rating: 4.9,
      soldCount: 342,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&auto=format&fit=crop&q=80',
      description: 'Biji kopi pilihan dari dataran tinggi Gayo Aceh dengan ketinggian 1.400 mdpl. Notes rasa: aroma floral semerbak, citarasa cokelat hitam, dan keasaman segar buah jeruk alami.',
      story: 'Ditanam langsung oleh 35 petani lokal koperasi pegunungan Takengon dengan metode petik merah organik demi menjaga kelestarian hutan lindung Leuser.',
      status: 'ACTIVE'
    },
    {
      id: 'prod-2',
      name: 'Kain Tenun Ikat Tradisional Motif Flores',
      shopId: 'shop-2',
      shopName: 'Tenun Nusantara Indah',
      shopOrigin: 'Ende, Nusa Tenggara Timur',
      category: 'kain',
      price: 350000,
      originalPrice: 420000,
      discount: 16,
      stock: 12,
      weightGram: 500,
      rating: 5.0,
      soldCount: 88,
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
      description: 'Tenun asli buatan tangan menggunakan alat tenun bukan mesin (ATBM). Pewarna alami dari akar mengkudu dan daun tarum. Ukuran: 200 x 110 cm.',
      story: 'Ditenun selama 2 bulan oleh mama-mama pengrajin tenun di desa Ndua, menjaga warisan budaya leluhur Nusantara.',
      status: 'ACTIVE'
    },
    {
      id: 'prod-3',
      name: 'Sambal Roa Asap Manado Pedas Gurih 200g',
      shopId: 'shop-3',
      shopName: 'Dapur Roa Oma Maria',
      shopOrigin: 'Manado, Sulawesi Utara',
      category: 'kuliner',
      price: 45000,
      originalPrice: 50000,
      discount: 10,
      stock: 80,
      weightGram: 250,
      rating: 4.8,
      soldCount: 1250,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80',
      description: 'Sambal khas Manado dengan ikan roa panggang asap asli 60%. Diracik bersama cabai rawit gunung dan minyak kelapa murni tanpa pengawet kimia.',
      story: 'Resep warisan keluarga turun temurun sejak 1978, mendukung hasil tangkapan nelayan pesisir Teluk Manado.',
      status: 'ACTIVE'
    },
    {
      id: 'prod-4',
      name: 'Tas Anyaman Bambu Eco-Friendly Handmade',
      shopId: 'shop-4',
      shopName: 'Bambu Lestari Craft',
      shopOrigin: 'Sleman, D.I. Yogyakarta',
      category: 'kerajinan',
      price: 125000,
      originalPrice: 150000,
      discount: 16,
      stock: 25,
      weightGram: 450,
      rating: 4.9,
      soldCount: 215,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&auto=format&fit=crop&q=80',
      description: 'Tas jinjing cantik dari bilah bambu apus pilihan yang dihaluskan dan dilapisi pernis nabati tahan air. Cocok untuk belanja minim plastik maupun pelengkap busana etnik.',
      story: 'Dibuat oleh kelompok wanita tani di lereng Gunung Merapi sebagai mata pencaharian alternatif berkelanjutan.',
      status: 'ACTIVE'
    },
    {
      id: 'prod-5',
      name: 'Batik Tulis Sutra Halus Motif Parang Kusumo',
      shopId: 'shop-5',
      shopName: 'Griya Batik Solo',
      shopOrigin: 'Surakarta, Jawa Tengah',
      category: 'fashion',
      price: 275000,
      originalPrice: 320000,
      discount: 14,
      stock: 18,
      weightGram: 350,
      rating: 4.9,
      soldCount: 160,
      image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&auto=format&fit=crop&q=80',
      description: 'Kain batik tulis canting tembaga dengan motif klasik Parang Kusumo berfilosofi luhur. Bahan katun primisima mori halus adem dan anggun.',
      story: 'Karya pembatik sepuh di Laweyan Solo dengan proses malam alami dan fiksasi daun jati.',
      status: 'ACTIVE'
    },
    {
      id: 'prod-6',
      name: 'Madu Hutan Liar Murni Sumbawa Asli 500ml',
      shopId: 'shop-6',
      shopName: 'Hutan Tropis Organik',
      shopOrigin: 'Sumbawa, NTB',
      category: 'herbal',
      price: 95000,
      originalPrice: 120000,
      discount: 20,
      stock: 6, // Stok kritis
      weightGram: 700,
      rating: 5.0,
      soldCount: 420,
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&auto=format&fit=crop&q=80',
      description: 'Madu murni hasil panen sarang lebah Apis dorsata di pohon sialang hutan Sumbawa. Tanpa pasteurisasi sehingga enzim bee pollen tetap terjaga utuh.',
      story: 'Pemberdayaan kelompok pemburu madu tradisional yang melestarikan habitat lebah liar secara turun-temurun.',
      status: 'ACTIVE'
    },
    {
      id: 'prod-7',
      name: 'Keripik Tempe Sagu Renyah Gurih Malang 250g',
      shopId: 'shop-3',
      shopName: 'Dapur Roa Oma Maria',
      shopOrigin: 'Manado, Sulawesi Utara',
      category: 'kuliner',
      price: 22000,
      originalPrice: 25000,
      discount: 12,
      stock: 90,
      weightGram: 300,
      rating: 4.7,
      soldCount: 890,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80',
      description: 'Keripik tempe kedelai lokal non-GMO dengan campuran sagu renyah. Dibumbui rempah ketumbar dan daun jeruk tanpa MSG berlebih.',
      story: 'Produksi UMKM rumahan Sanan Malang yang bermitra dengan perajin tempe setempat.',
      status: 'ACTIVE'
    },
    {
      id: 'prod-8',
      name: 'Minyak Kelapa Murni Virgin Coconut Oil (VCO) 250ml',
      shopId: 'shop-6',
      shopName: 'Hutan Tropis Organik',
      shopOrigin: 'Sumbawa, NTB',
      category: 'herbal',
      price: 60000,
      originalPrice: 70000,
      discount: 14,
      stock: 35,
      weightGram: 350,
      rating: 4.8,
      soldCount: 310,
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=80',
      description: 'Minyak kelapa murni metode cold-press tanpa pemanasan. Mengandung asam laurat tinggi untuk imunitas tubuh, perawatan kulit dan rambut.',
      story: 'Diolah dari kelapa segar perkebunan rakyat pesisir pantai pulau Lombok dan Sumbawa.',
      status: 'ACTIVE'
    }
  ],

  // Alamat Pengguna Tersimpan (F-01)
  addresses: [
    {
      id: 'addr-1',
      recipientName: 'Sinta Maharani',
      phone: '081234567890',
      fullAddress: 'Jl. Riau No. 45, Citarum, Kec. Bandung Wetan, Kota Bandung, Jawa Barat 40115',
      biteshipAreaId: 'IDNP11JB40115',
      isDefault: true
    },
    {
      id: 'addr-2',
      recipientName: 'Sinta (Kantor)',
      phone: '081234567890',
      fullAddress: 'Gedung Wisma Asia Lt. 5, Jl. Letjen S. Parman Kav. 79, Jakarta Barat 11420',
      biteshipAreaId: 'IDNP31JB11420',
      isDefault: false
    }
  ],

  // Kurir Pilihan Biteship (F-05)
  selectedCourier: {
    courierName: 'JNE',
    serviceName: 'Reguler (CTC)',
    price: 14000,
    etd: '2-3 hari'
  },

  // Daftar Pesanan Aktif (F-08 Lifecycle)
  orders: [
    {
      id: 'ord-101',
      orderCode: 'PSK-2610-00101',
      shopId: 'shop-1',
      shopName: 'Gayo Highland Coffee',
      items: [
        { productId: 'prod-1', name: 'Kopi Arabika Gayo Single Origin 250g', qty: 2, price: 85000, image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&auto=format&fit=crop&q=80' }
      ],
      subtotal: 170000,
      shippingCost: 14000,
      totalAmount: 184000,
      paymentMethod: 'GOPAY',
      status: 'TERKIRIM', // Siap dikonfirmasi terima
      courier: 'JNE Reguler',
      waybillId: 'PSK-JNE-88291039',
      createdAt: '2026-10-12 10:30',
      timeline: [
        { status: 'DIBAYAR', time: '12 Okt, 10:32', note: 'Pembayaran GoPay diverifikasi otomatis via Webhook' },
        { status: 'DIPROSES', time: '12 Okt, 14:00', note: 'Penjual memproses pesanan dan mencetak resi Biteship' },
        { status: 'DIKIRIM', time: '12 Okt, 18:40', note: 'Paket diserahkan ke kurir JNE Bandung Hub' },
        { status: 'TERKIRIM', time: '13 Okt, 14:15', note: 'Paket telah diterima oleh Sinta Maharani' }
      ]
    }
  ],

  // Rekening Bersama Append-Only Ledger (F-07)
  escrowLedger: [
    { id: 'ledg-1', orderId: 'ord-101', shopId: 'shop-1', type: 'HOLD', amount: 170000, bucket: 'HELD', note: 'Dana pesanan PSK-2610-00101 ditahan di rekening bersama' }
  ],

  // Saldo Penjual
  sellerBalance: {
    shopId: 'shop-1',
    held: 170000,       // Dana tertahan di escrow
    available: 1250000  // Dana siap ditarik
  },

  // Riwayat Chat (F-09)
  chatMessages: [
    { sender: 'seller', text: 'Halo kak Sinta! Terima kasih sudah mampir di Gayo Highland Coffee. Ada yang bisa kami bantu?', time: '10:15' },
    { sender: 'buyer', text: 'Halo kak, untuk Kopi Gayo ini roas profile-nya medium atau dark ya?', time: '10:16' },
    { sender: 'seller', text: 'Medium roast kak, acidity segar dan aroma karamelnya sangat seimbang. Cocok untuk pour-over V60 maupun French Press!', time: '10:17' }
  ]
};

// ========================================================
// Helper Utilities
// ========================================================
function formatIDR(amount) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(amount);
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  const toastIcon = document.getElementById('toast-icon');
  if (!toast) return;

  toastText.textContent = message;
  toastIcon.textContent = type === 'success' ? 'check_circle' : 'info';
  toast.className = `fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg text-white font-medium transition-all duration-300 transform translate-y-0 opacity-100 ${
    type === 'success' ? 'bg-primary' : 'bg-on-surface'
  }`;

  setTimeout(() => {
    toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg text-white font-medium transition-all duration-300 transform translate-y-12 opacity-0 pointer-events-none';
  }, 3200);
}

// ========================================================
// Render View Controllers
// ========================================================
function navigateTo(viewName, param = null) {
  APP_STATE.currentView = viewName;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Hide all view containers
  document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));

  // Update Navigation active states
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('text-primary', 'font-bold');
    if (link.dataset.view === viewName) link.classList.add('text-primary', 'font-bold');
  });

  if (viewName === 'home') {
    document.getElementById('view-home').classList.remove('hidden');
    renderProductCatalog();
  } else if (viewName === 'product-detail') {
    document.getElementById('view-product-detail').classList.remove('hidden');
    renderProductDetail(param || APP_STATE.products[0].id);
  } else if (viewName === 'cart') {
    document.getElementById('view-cart').classList.remove('hidden');
    renderCartView();
  } else if (viewName === 'checkout') {
    document.getElementById('view-checkout').classList.remove('hidden');
    renderCheckoutView();
  } else if (viewName === 'orders') {
    document.getElementById('view-orders').classList.remove('hidden');
    renderOrdersView();
  } else if (viewName === 'seller-dashboard') {
    document.getElementById('view-seller-dashboard').classList.remove('hidden');
    renderSellerDashboard();
  } else if (viewName === 'admin-panel') {
    document.getElementById('view-admin-panel').classList.remove('hidden');
    renderAdminPanel();
  }

  updateCartBadge();
}

// ========================================================
// F-03: Render Katalog Produk & Filter
// ========================================================
function renderProductCatalog() {
  const container = document.getElementById('products-grid');
  if (!container) return;

  let filtered = [...APP_STATE.products];

  // Kategori filter
  if (APP_STATE.activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === APP_STATE.activeCategory);
  }

  // Search filter
  if (APP_STATE.searchQuery.trim() !== '') {
    const q = APP_STATE.searchQuery.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.shopName.toLowerCase().includes(q) || p.shopOrigin.toLowerCase().includes(q));
  }

  // Sorting
  if (APP_STATE.activeSort === 'termurah') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (APP_STATE.activeSort === 'terlaris') {
    filtered.sort((a, b) => b.soldCount - a.soldCount);
  } else {
    // Default: terbaru
    filtered.sort((a, b) => b.id.localeCompare(a.id));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <span class="material-symbols-outlined text-6xl text-outline-variant mb-2">inventory_2</span>
        <h4 class="text-headline-sm font-semibold text-on-surface">Produk Tidak Ditemukan</h4>
        <p class="text-body-md text-on-surface-variant mt-1">Coba gunakan kata kunci pencarian lain atau pilih kategori lain.</p>
        <button onclick="resetFilters()" class="mt-4 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-container">Reset Pencarian</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(product => {
    return `
      <div class="bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden card-hover flex flex-col group cursor-pointer" onclick="navigateTo('product-detail', '${product.id}')">
        <!-- Foto Produk Persegi -->
        <div class="relative aspect-square w-full overflow-hidden bg-surface-container-low">
          <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" loading="lazy">
          ${product.discount > 0 ? `
            <span class="absolute top-2.5 left-2.5 bg-error text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
              Diskon ${product.discount}%
            </span>
          ` : ''}
          ${product.stock <= 10 ? `
            <span class="absolute bottom-2.5 left-2.5 bg-on-surface/80 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-full">
              Sisa ${product.stock}
            </span>
          ` : ''}
        </div>

        <!-- Detail Produk -->
        <div class="p-3.5 flex flex-col flex-1">
          <!-- Asal Daerah -->
          <div class="flex items-center gap-1 text-[11px] text-on-surface-variant mb-1">
            <span class="material-symbols-outlined text-xs text-primary">location_on</span>
            <span class="truncate">${product.shopOrigin}</span>
          </div>

          <!-- Nama Produk (Maks 2 Baris) -->
          <h3 class="text-sm font-semibold text-on-surface line-clamp-2 leading-snug group-hover:text-primary transition-colors mb-2">
            ${product.name}
          </h3>

          <!-- Harga -->
          <div class="mt-auto">
            <div class="flex items-baseline gap-1.5">
              <span class="text-base font-bold text-primary">${formatIDR(product.price)}</span>
              ${product.originalPrice ? `
                <span class="text-xs text-outline line-through">${formatIDR(product.originalPrice)}</span>
              ` : ''}
            </div>

            <!-- Rating & Terjual -->
            <div class="flex items-center justify-between text-xs text-on-surface-variant mt-2 pt-2 border-t border-outline-variant/30">
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm text-amber-500 fill-current" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="font-semibold text-on-surface text-xs">${product.rating}</span>
                <span class="text-outline text-[11px]">(${product.soldCount})</span>
              </div>
              <button onclick="event.stopPropagation(); quickAddToCart('${product.id}')" title="Tambah ke Keranjang" class="p-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-white text-primary transition-colors">
                <span class="material-symbols-outlined text-base">add_shopping_cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function resetFilters() {
  APP_STATE.activeCategory = 'all';
  APP_STATE.searchQuery = '';
  APP_STATE.activeSort = 'terbaru';
  document.getElementById('search-input').value = '';
  document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('bg-primary', 'text-white'));
  document.querySelector('[data-cat="all"]').classList.add('bg-primary', 'text-white');
  renderProductCatalog();
}

// ========================================================
// F-03.4: Render Halaman Detail Produk (3-Kolom Desktop)
// ========================================================
function renderProductDetail(productId) {
  const product = APP_STATE.products.find(p => p.id === productId) || APP_STATE.products[0];
  APP_STATE.selectedProduct = product;
  const container = document.getElementById('view-product-detail');

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-xs text-on-surface-variant mb-6">
        <a href="javascript:void(0)" onclick="navigateTo('home')" class="hover:text-primary">Beranda</a>
        <span class="material-symbols-outlined text-xs">chevron_right</span>
        <span class="capitalize">${product.category}</span>
        <span class="material-symbols-outlined text-xs">chevron_right</span>
        <span class="text-on-surface font-semibold truncate max-w-xs">${product.name}</span>
      </nav>

      <!-- Komposisi 3 Kolom di Desktop -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <!-- KOLOM KIRI (Galeri & Profil Toko) - 4 Kolom -->
        <div class="lg:col-span-4 space-y-5">
          <div class="aspect-square w-full rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/40 shadow-sm">
            <img id="detail-main-img" src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
          </div>
          
          <!-- Profil Toko Seller -->
          <div class="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-secondary-container text-primary flex items-center justify-center font-bold text-lg">
                ${product.shopName.charAt(0)}
              </div>
              <div>
                <h4 class="text-sm font-bold text-on-surface flex items-center gap-1">
                  ${product.shopName}
                  <span class="material-symbols-outlined text-sm text-primary" title="Toko Terverifikasi">verified</span>
                </h4>
                <p class="text-xs text-on-surface-variant flex items-center gap-0.5">
                  <span class="material-symbols-outlined text-xs">location_on</span> ${product.shopOrigin}
                </p>
              </div>
            </div>
            <button onclick="openChatModal('${product.shopName}', '${product.id}')" class="px-3 py-1.5 text-xs font-semibold rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">chat</span> Chat
            </button>
          </div>

          <!-- Jaminan Keamanan PasarKita Escrow -->
          <div class="p-3.5 rounded-xl bg-secondary-container/40 border border-secondary/20 text-xs space-y-1.5">
            <div class="font-bold text-primary flex items-center gap-1.5">
              <span class="material-symbols-outlined text-base">verified_user</span> Jaminan Rekening Bersama
            </div>
            <p class="text-on-surface-variant leading-relaxed">
              Dana Anda ditahan aman oleh PasarKita hingga barang tiba dan Anda konfirmasi puas. Bebas risiko penipuan.
            </p>
          </div>
        </div>

        <!-- KOLOM TENGAH (Informasi, Cerita, Spesifikasi) - 5 Kolom -->
        <div class="lg:col-span-5 space-y-6">
          <div>
            <span class="inline-block px-2.5 py-1 text-xs font-semibold rounded-full bg-secondary-container text-secondary mb-2">
              Produk Asli UMKM Indonesia
            </span>
            <h1 class="text-headline-sm font-bold text-on-surface leading-snug">${product.name}</h1>
            
            <div class="flex items-center gap-3 text-xs text-on-surface-variant mt-2.5">
              <div class="flex items-center gap-1">
                <span class="material-symbols-outlined text-sm text-amber-500 fill-current" style="font-variation-settings: 'FILL' 1;">star</span>
                <span class="font-bold text-on-surface">${product.rating}</span>
                <span>(38 Ulasan)</span>
              </div>
              <span>•</span>
              <span>Terjual <strong>${product.soldCount}</strong> produk</span>
            </div>
          </div>

          <!-- Harga & Diskon -->
          <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 flex items-center gap-3">
            <span class="text-2xl font-bold text-primary">${formatIDR(product.price)}</span>
            ${product.originalPrice ? `
              <span class="text-sm text-outline line-through">${formatIDR(product.originalPrice)}</span>
              <span class="text-xs font-bold text-error bg-error-container/60 px-2 py-0.5 rounded-full">Hemat ${product.discount}%</span>
            ` : ''}
          </div>

          <!-- Tab Navigasi: Deskripsi & Cerita Produk UMKM -->
          <div class="border-b border-outline-variant/40 flex gap-6 text-sm">
            <button id="tab-btn-desc" onclick="switchDetailTab('desc')" class="pb-2 font-bold text-primary border-b-2 border-primary">Deskripsi</button>
            <button id="tab-btn-story" onclick="switchDetailTab('story')" class="pb-2 text-on-surface-variant hover:text-primary font-medium">Kisah Pengrajin</button>
            <button id="tab-btn-shipping" onclick="switchDetailTab('shipping')" class="pb-2 text-on-surface-variant hover:text-primary font-medium">Estimasi Kurir</button>
          </div>

          <!-- Tab Content: Deskripsi -->
          <div id="tab-content-desc" class="text-sm text-on-surface-variant space-y-3 leading-relaxed">
            <p>${product.description}</p>
            <div class="grid grid-cols-2 gap-3 pt-2 text-xs">
              <div class="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
                <span class="text-outline block">Berat Produk</span>
                <span class="font-bold text-on-surface">${product.weightGram} gram</span>
              </div>
              <div class="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30">
                <span class="text-outline block">Stok Tersedia</span>
                <span class="font-bold text-on-surface">${product.stock} unit</span>
              </div>
            </div>
          </div>

          <!-- Tab Content: Kisah UMKM -->
          <div id="tab-content-story" class="text-sm text-on-surface-variant space-y-2 leading-relaxed hidden">
            <div class="p-4 rounded-xl bg-surface-container-lowest border-l-4 border-primary">
              <h5 class="font-bold text-on-surface mb-1 text-xs uppercase tracking-wider text-primary">Kearifan Lokal</h5>
              <p>${product.story}</p>
            </div>
          </div>

          <!-- Tab Content: Kurir Biteship -->
          <div id="tab-content-shipping" class="text-sm text-on-surface-variant space-y-2 leading-relaxed hidden">
            <p class="text-xs">Dikirim dari: <strong>${product.shopOrigin}</strong></p>
            <div class="space-y-1.5 text-xs">
              <div class="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex justify-between items-center">
                <span>JNE Reguler (2-3 hari)</span>
                <span class="font-bold text-primary">Rp14.000</span>
              </div>
              <div class="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex justify-between items-center">
                <span>SiCepat BEST (1-2 hari)</span>
                <span class="font-bold text-primary">Rp18.000</span>
              </div>
              <div class="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex justify-between items-center">
                <span>J&T Reguler (2-4 hari)</span>
                <span class="font-bold text-primary">Rp13.000</span>
              </div>
            </div>
          </div>
        </div>

        <!-- KOLOM KANAN (Buy Box Sticky) - 3 Kolom -->
        <div class="lg:col-span-3">
          <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-card sticky top-24 space-y-4">
            <h4 class="font-bold text-on-surface text-sm">Atur Jumlah Pembelian</h4>

            <!-- Pemilih Kuantitas -->
            <div class="flex items-center gap-3">
              <div class="flex items-center border border-outline-variant rounded-lg">
                <button onclick="changeQty(-1)" class="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container">-</button>
                <input id="input-buy-qty" type="text" value="1" readonly class="w-10 text-center font-bold text-sm bg-transparent outline-none">
                <button onclick="changeQty(1)" class="w-8 h-8 flex items-center justify-center text-on-surface hover:bg-surface-container">+</button>
              </div>
              <span class="text-xs text-on-surface-variant">Sisa <strong>${product.stock}</strong> unit</span>
            </div>

            <!-- Subtotal Kalkulasi -->
            <div class="pt-3 border-t border-outline-variant/30 flex justify-between items-baseline">
              <span class="text-xs text-on-surface-variant">Subtotal</span>
              <span id="buy-subtotal" class="text-lg font-bold text-primary">${formatIDR(product.price)}</span>
            </div>

            <!-- Tombol Aksi -->
            <div class="space-y-2 pt-2">
              <button onclick="addToCartAndNotify('${product.id}')" class="w-full py-2.5 px-4 rounded-lg bg-secondary-container text-primary font-bold text-sm hover:bg-secondary-fixed transition-colors flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-lg">add_shopping_cart</span> + Keranjang
              </button>
              <button onclick="directCheckout('${product.id}')" class="w-full py-2.5 px-4 rounded-lg bg-primary text-white font-bold text-sm hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-lg">shopping_bag</span> Beli Langsung
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

function switchDetailTab(tabName) {
  ['desc', 'story', 'shipping'].forEach(t => {
    document.getElementById(`tab-content-${t}`).classList.add('hidden');
    const btn = document.getElementById(`tab-btn-${t}`);
    btn.className = 'pb-2 text-on-surface-variant hover:text-primary font-medium';
  });

  document.getElementById(`tab-content-${tabName}`).classList.remove('hidden');
  const activeBtn = document.getElementById(`tab-btn-${tabName}`);
  activeBtn.className = 'pb-2 font-bold text-primary border-b-2 border-primary';
}

function changeQty(delta) {
  const input = document.getElementById('input-buy-qty');
  if (!input || !APP_STATE.selectedProduct) return;
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > APP_STATE.selectedProduct.stock) {
    showToast(`Maksimal pembelian ${APP_STATE.selectedProduct.stock} unit`, 'info');
    val = APP_STATE.selectedProduct.stock;
  }
  input.value = val;
  document.getElementById('buy-subtotal').textContent = formatIDR(val * APP_STATE.selectedProduct.price);
}

// ========================================================
// F-04: Keranjang Belanja
// ========================================================
function quickAddToCart(productId) {
  const existing = APP_STATE.cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    APP_STATE.cart.push({ productId, qty: 1 });
  }
  updateCartBadge();
  showToast('Produk berhasil ditambahkan ke keranjang!');
}

function addToCartAndNotify(productId) {
  const input = document.getElementById('input-buy-qty');
  const qty = input ? parseInt(input.value) : 1;
  const existing = APP_STATE.cart.find(item => item.productId === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    APP_STATE.cart.push({ productId, qty });
  }
  updateCartBadge();
  showToast(`${qty} produk ditambahkan ke keranjang!`);
}

function directCheckout(productId) {
  const input = document.getElementById('input-buy-qty');
  const qty = input ? parseInt(input.value) : 1;
  APP_STATE.cart = [{ productId, qty }];
  updateCartBadge();
  navigateTo('checkout');
}

function updateCartBadge() {
  const total = APP_STATE.cart.reduce((sum, i) => sum + i.qty, 0);
  const badge = document.getElementById('cart-badge');
  if (badge) {
    badge.textContent = total;
    badge.className = total > 0 
      ? 'absolute -top-1.5 -right-1.5 bg-error text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full min-w-[18px] text-center'
      : 'hidden';
  }
}

function renderCartView() {
  const container = document.getElementById('view-cart');
  if (APP_STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="max-w-4xl mx-auto px-4 py-16 text-center">
        <span class="material-symbols-outlined text-6xl text-outline-variant mb-2">shopping_cart</span>
        <h2 class="text-headline-sm font-bold text-on-surface">Keranjang Belanja Kosong</h2>
        <p class="text-sm text-on-surface-variant mt-1 mb-6">Jelajahi beragam produk unggulan UMKM nusantara dan mulai belanja.</p>
        <button onclick="navigateTo('home')" class="px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-container">Eksplor Produk</button>
      </div>
    `;
    return;
  }

  let totalSemua = 0;
  const itemsMarkup = APP_STATE.cart.map((cartItem, idx) => {
    const product = APP_STATE.products.find(p => p.id === cartItem.productId);
    if (!product) return '';
    const itemSubtotal = product.price * cartItem.qty;
    totalSemua += itemSubtotal;

    return `
      <div class="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 flex items-center gap-4">
        <img src="${product.image}" class="w-20 h-20 rounded-lg object-cover bg-surface-container-low" alt="${product.name}">
        <div class="flex-1">
          <span class="text-xs text-primary font-semibold flex items-center gap-1">
            <span class="material-symbols-outlined text-xs">store</span> ${product.shopName}
          </span>
          <h4 class="font-bold text-on-surface text-sm line-clamp-1 mt-0.5">${product.name}</h4>
          <span class="text-sm font-bold text-primary block mt-1">${formatIDR(product.price)}</span>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex items-center border border-outline-variant rounded-lg text-xs">
            <button onclick="updateCartItemQty(${idx}, -1)" class="w-7 h-7 flex items-center justify-center hover:bg-surface-container">-</button>
            <span class="w-8 text-center font-bold">${cartItem.qty}</span>
            <button onclick="updateCartItemQty(${idx}, 1)" class="w-7 h-7 flex items-center justify-center hover:bg-surface-container">+</button>
          </div>
          <button onclick="removeCartItem(${idx})" class="text-outline hover:text-error p-1">
            <span class="material-symbols-outlined text-lg">delete</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h1 class="text-headline-md font-bold text-on-surface mb-6 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl text-primary">shopping_cart</span> Keranjang Belanja
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-8 space-y-3">
          <p class="text-xs text-on-surface-variant mb-2">Checkout dilakukan per toko sesuai ketentuan PRD F-04.7</p>
          ${itemsMarkup}
        </div>

        <div class="lg:col-span-4 p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-4 shadow-sm">
          <h3 class="font-bold text-on-surface text-sm">Ringkasan Belanja</h3>
          <div class="flex justify-between text-sm">
            <span class="text-on-surface-variant">Total Harga (${APP_STATE.cart.reduce((s,i)=>s+i.qty,0)} Barang)</span>
            <span class="font-bold text-on-surface">${formatIDR(totalSemua)}</span>
          </div>
          <div class="pt-3 border-t border-outline-variant/30 flex justify-between items-baseline">
            <span class="font-bold text-on-surface text-sm">Total Tagihan</span>
            <span class="text-xl font-bold text-primary">${formatIDR(totalSemua)}</span>
          </div>
          <button onclick="navigateTo('checkout')" class="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-container text-sm transition-colors shadow-sm">
            Lanjut ke Checkout
          </button>
        </div>
      </div>
    </div>
  `;
}

function updateCartItemQty(index, delta) {
  APP_STATE.cart[index].qty += delta;
  if (APP_STATE.cart[index].qty <= 0) {
    APP_STATE.cart.splice(index, 1);
  }
  updateCartBadge();
  renderCartView();
}

function removeCartItem(index) {
  APP_STATE.cart.splice(index, 1);
  updateCartBadge();
  renderCartView();
  showToast('Item dihapus dari keranjang');
}

// ========================================================
// F-05 & F-06: Checkout, Biteship Rates & Midtrans Snap
// ========================================================
function renderCheckoutView() {
  const container = document.getElementById('view-checkout');
  const cartItems = APP_STATE.cart.map(i => {
    const p = APP_STATE.products.find(prod => prod.id === i.productId);
    return { ...p, qty: i.qty };
  }).filter(Boolean);

  if (cartItems.length === 0) {
    navigateTo('home');
    return;
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const totalWeight = cartItems.reduce((sum, item) => sum + (item.weightGram * item.qty), 0);
  const shippingCost = APP_STATE.selectedCourier.price;
  const grandTotal = subtotal + shippingCost;

  container.innerHTML = `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 class="text-headline-md font-bold text-on-surface mb-6 flex items-center gap-2">
        <span class="material-symbols-outlined text-2xl text-primary">local_mall</span> Checkout Pesanan
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-8 space-y-6">
          
          <!-- 1. Alamat Pengiriman (F-01.4) -->
          <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-on-surface text-sm flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-lg">pin_drop</span> Alamat Pengiriman
              </h3>
              <span class="text-xs text-primary font-semibold">Utama</span>
            </div>
            <div class="p-3 rounded-lg bg-surface-container-low text-xs space-y-1">
              <p class="font-bold text-on-surface">${APP_STATE.addresses[0].recipientName} (${APP_STATE.addresses[0].phone})</p>
              <p class="text-on-surface-variant">${APP_STATE.addresses[0].fullAddress}</p>
            </div>
          </div>

          <!-- 2. Produk yang Dibeli -->
          <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">
            <h3 class="font-bold text-on-surface text-sm flex items-center gap-2">
              <span class="material-symbols-outlined text-primary text-lg">store</span> Toko: ${cartItems[0].shopName}
            </h3>
            <div class="divide-y divide-outline-variant/20">
              ${cartItems.map(item => `
                <div class="py-3 flex items-center justify-between gap-4">
                  <div class="flex items-center gap-3">
                    <img src="${item.image}" class="w-14 h-14 rounded-lg object-cover">
                    <div>
                      <h4 class="font-semibold text-xs text-on-surface line-clamp-1">${item.name}</h4>
                      <span class="text-xs text-on-surface-variant">${item.qty} x ${formatIDR(item.price)} (${item.weightGram * item.qty}g)</span>
                    </div>
                  </div>
                  <span class="font-bold text-sm text-primary">${formatIDR(item.price * item.qty)}</span>
                </div>
              `).join('')}
            </div>
            <p class="text-[11px] text-outline text-right">Total Berat: ${totalWeight} gram</p>
          </div>

          <!-- 3. Integrasi Biteship Rates API (F-05.2) -->
          <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-on-surface text-sm flex items-center gap-2">
                <span class="material-symbols-outlined text-primary text-lg">local_shipping</span> Pilihan Kurir Pengiriman (Biteship API)
              </h3>
              <span class="text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">Tarif Real-Time</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div onclick="selectCourier('JNE', 'Reguler (CTC)', 14000, '2-3 hari')" class="p-3 rounded-lg border-2 cursor-pointer transition-all ${APP_STATE.selectedCourier.courierName === 'JNE' ? 'border-primary bg-secondary-container/20' : 'border-outline-variant/40 hover:border-primary'}">
                <div class="flex justify-between items-center text-xs font-bold text-on-surface">
                  <span>JNE Reguler</span>
                  <span class="text-primary">Rp14.000</span>
                </div>
                <p class="text-[11px] text-on-surface-variant mt-1">Estimasi 2-3 hari</p>
              </div>

              <div onclick="selectCourier('SiCepat', 'BEST Express', 18000, '1-2 hari')" class="p-3 rounded-lg border-2 cursor-pointer transition-all ${APP_STATE.selectedCourier.courierName === 'SiCepat' ? 'border-primary bg-secondary-container/20' : 'border-outline-variant/40 hover:border-primary'}">
                <div class="flex justify-between items-center text-xs font-bold text-on-surface">
                  <span>SiCepat BEST</span>
                  <span class="text-primary">Rp18.000</span>
                </div>
                <p class="text-[11px] text-on-surface-variant mt-1">Estimasi 1-2 hari</p>
              </div>

              <div onclick="selectCourier('J&T', 'EZ Reguler', 13000, '2-4 hari')" class="p-3 rounded-lg border-2 cursor-pointer transition-all ${APP_STATE.selectedCourier.courierName === 'J&T' ? 'border-primary bg-secondary-container/20' : 'border-outline-variant/40 hover:border-primary'}">
                <div class="flex justify-between items-center text-xs font-bold text-on-surface">
                  <span>J&T EZ</span>
                  <span class="text-primary">Rp13.000</span>
                </div>
                <p class="text-[11px] text-on-surface-variant mt-1">Estimasi 2-4 hari</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Ringkasan & Pembayaran Midtrans (F-06) -->
        <div class="lg:col-span-4 p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-card space-y-4 sticky top-24">
          <h3 class="font-bold text-on-surface text-sm">Ringkasan Pembayaran</h3>

          <div class="space-y-2 text-xs">
            <div class="flex justify-between text-on-surface-variant">
              <span>Subtotal Produk</span>
              <span class="font-semibold text-on-surface">${formatIDR(subtotal)}</span>
            </div>
            <div class="flex justify-between text-on-surface-variant">
              <span>Ongkos Kirim (${APP_STATE.selectedCourier.courierName})</span>
              <span class="font-semibold text-on-surface">${formatIDR(shippingCost)}</span>
            </div>
            <div class="flex justify-between text-on-surface-variant">
              <span>Biaya Layanan Platform</span>
              <span class="font-semibold text-primary">Rp0 (Gratis)</span>
            </div>
          </div>

          <div class="pt-3 border-t border-outline-variant/30 flex justify-between items-baseline">
            <span class="font-bold text-on-surface text-sm">Total Tagihan</span>
            <span class="text-xl font-bold text-primary">${formatIDR(grandTotal)}</span>
          </div>

          <button onclick="openMidtransSnapModal(${grandTotal}, ${subtotal}, ${shippingCost})" class="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-container text-sm transition-colors shadow-sm flex items-center justify-center gap-2">
            <span class="material-symbols-outlined text-lg">lock</span> Bayar via Midtrans Snap
          </button>

          <p class="text-[11px] text-outline text-center">
            Pembayaran diamankan rekening bersama PasarKita (Escrow Sandbox).
          </p>
        </div>
      </div>
    </div>
  `;
}

function selectCourier(name, service, price, etd) {
  APP_STATE.selectedCourier = { courierName: name, serviceName: service, price, etd };
  renderCheckoutView();
}

// ========================================================
// F-06: Simulasi Midtrans Snap Popup Modal
// ========================================================
function openMidtransSnapModal(totalAmount, subtotal, shippingCost) {
  const modal = document.getElementById('midtrans-modal');
  const snapAmount = document.getElementById('snap-total-amount');
  snapAmount.textContent = formatIDR(totalAmount);
  modal.dataset.total = totalAmount;
  modal.dataset.subtotal = subtotal;
  modal.dataset.shipping = shippingCost;
  modal.classList.remove('hidden');
}

function closeMidtransModal() {
  document.getElementById('midtrans-modal').classList.add('hidden');
}

function simulatePaymentSuccess(method) {
  closeMidtransModal();
  const subtotal = parseInt(document.getElementById('midtrans-modal').dataset.subtotal) || 170000;
  const shipping = parseInt(document.getElementById('midtrans-modal').dataset.shipping) || 14000;
  const total = subtotal + shipping;

  const newOrderId = `ord-${Date.now().toString().slice(-4)}`;
  const orderCode = `PSK-2610-${Math.floor(10000 + Math.random() * 90000)}`;

  // 1. Buat pesanan baru berstatus PERLU_DIPROSES (F-06.6)
  const newOrder = {
    id: newOrderId,
    orderCode: orderCode,
    shopId: 'shop-1',
    shopName: 'Gayo Highland Coffee',
    items: APP_STATE.cart.map(i => {
      const p = APP_STATE.products.find(prod => prod.id === i.productId);
      return { productId: p.id, name: p.name, qty: i.qty, price: p.price, image: p.image };
    }),
    subtotal: subtotal,
    shippingCost: shipping,
    totalAmount: total,
    paymentMethod: method.toUpperCase(),
    status: 'PERLU_DIPROSES',
    courier: `${APP_STATE.selectedCourier.courierName} ${APP_STATE.selectedCourier.serviceName}`,
    waybillId: 'MENUNGGU_RESI',
    createdAt: 'Baru saja',
    timeline: [
      { status: 'DIBAYAR', time: 'Baru Saja', note: `Pembayaran ${method.toUpperCase()} diverifikasi (Webhook valid)` },
      { status: 'PERLU_DIPROSES', time: 'Baru Saja', note: 'Menunggu penjual memproses & membuat pengiriman' }
    ]
  };

  APP_STATE.orders.unshift(newOrder);

  // 2. Catat HOLD ke Rekening Bersama Escrow (F-07.1)
  APP_STATE.escrowLedger.unshift({
    id: `ledg-${Date.now()}`,
    orderId: newOrderId,
    shopId: 'shop-1',
    type: 'HOLD',
    amount: subtotal,
    bucket: 'HELD',
    note: `Dana pesanan ${orderCode} ditahan di escrow`
  });
  APP_STATE.sellerBalance.held += subtotal;

  // 3. Kosongkan keranjang
  APP_STATE.cart = [];
  updateCartBadge();

  showToast(`Pembayaran Berhasil! Pesanan ${orderCode} sedang diproses.`, 'success');
  navigateTo('orders');
}

// ========================================================
// F-08: Halaman Daftar Pesanan & Pelacakan Paket Pembeli
// ========================================================
function renderOrdersView() {
  const container = document.getElementById('view-orders');
  if (APP_STATE.orders.length === 0) {
    container.innerHTML = `
      <div class="max-w-4xl mx-auto px-4 py-16 text-center">
        <span class="material-symbols-outlined text-6xl text-outline-variant mb-2">package_2</span>
        <h2 class="text-headline-sm font-bold text-on-surface">Belum Ada Pesanan</h2>
        <p class="text-sm text-on-surface-variant mt-1 mb-6">Mulai belanja produk UMKM favorit Anda sekarang.</p>
        <button onclick="navigateTo('home')" class="px-6 py-2.5 bg-primary text-white font-bold rounded-lg hover:bg-primary-container">Eksplor Produk</button>
      </div>
    `;
    return;
  }

  const ordersMarkup = APP_STATE.orders.map(order => {
    let statusBadgeColor = 'bg-surface-container text-on-surface';
    if (order.status === 'PERLU_DIPROSES') statusBadgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
    if (order.status === 'DIKIRIM') statusBadgeColor = 'bg-blue-100 text-blue-800 border-blue-300';
    if (order.status === 'TERKIRIM') statusBadgeColor = 'bg-secondary-container text-primary font-bold';
    if (order.status === 'SELESAI') statusBadgeColor = 'bg-green-100 text-green-800 border-green-300';

    return `
      <div class="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-4">
        <!-- Header Pesanan -->
        <div class="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-outline-variant/30 text-xs">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-base">store</span>
            <span class="font-bold text-on-surface">${order.shopName}</span>
            <span class="text-outline">•</span>
            <span class="font-mono text-on-surface-variant">${order.orderCode}</span>
          </div>
          <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${statusBadgeColor}">
            ${order.status.replace('_', ' ')}
          </span>
        </div>

        <!-- Daftar Item -->
        <div class="space-y-3">
          ${order.items.map(item => `
            <div class="flex items-center gap-4">
              <img src="${item.image}" class="w-16 h-16 rounded-lg object-cover bg-surface-container-low">
              <div class="flex-1">
                <h4 class="font-bold text-sm text-on-surface">${item.name}</h4>
                <p class="text-xs text-on-surface-variant">${item.qty} barang x ${formatIDR(item.price)}</p>
              </div>
              <span class="font-bold text-sm text-on-surface">${formatIDR(item.price * item.qty)}</span>
            </div>
          `).join('')}
        </div>

        <!-- Info Logistik & Total -->
        <div class="p-3 rounded-lg bg-surface-container-low text-xs flex flex-wrap justify-between items-center gap-2">
          <div>
            <span class="text-outline block">Kurir Pengiriman:</span>
            <span class="font-semibold text-on-surface">${order.courier} (Resi: <code class="text-primary font-mono">${order.waybillId}</code>)</span>
          </div>
          <div class="text-right">
            <span class="text-outline block">Total Pesanan:</span>
            <span class="font-bold text-primary text-base">${formatIDR(order.totalAmount)}</span>
          </div>
        </div>

        <!-- Timeline Pelacakan Pengiriman (Biteship) -->
        <div class="pt-2">
          <h5 class="text-xs font-bold text-on-surface mb-2 flex items-center gap-1">
            <span class="material-symbols-outlined text-sm text-primary">timeline</span> Riwayat Pengiriman Paket
          </h5>
          <div class="border-l-2 border-primary/40 ml-2 pl-4 space-y-2 text-xs">
            ${order.timeline.map(t => `
              <div class="relative">
                <span class="w-2.5 h-2.5 rounded-full bg-primary absolute -left-[21px] top-1"></span>
                <p class="font-bold text-on-surface">${t.status} <span class="font-normal text-outline text-[11px]">• ${t.time}</span></p>
                <p class="text-on-surface-variant text-[11px]">${t.note}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Tombol Aksi Pembeli (F-07.2 Konfirmasi Terima & Lepas Dana) -->
        <div class="pt-3 border-t border-outline-variant/30 flex justify-end gap-3">
          ${order.status === 'TERKIRIM' ? `
            <button onclick="buyerConfirmReceived('${order.id}')" class="px-5 py-2.5 bg-primary text-white font-bold text-xs rounded-lg hover:bg-primary-container shadow-sm flex items-center gap-1.5">
              <span class="material-symbols-outlined text-sm">check_circle</span> Konfirmasi Pesanan Diterima
            </button>
          ` : ''}
          ${order.status === 'SELESAI' ? `
            <span class="text-xs text-primary font-bold flex items-center gap-1">
              <span class="material-symbols-outlined text-sm">verified</span> Transaksi Selesai & Dana Dilepas ke Toko
            </span>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-headline-md font-bold text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-2xl text-primary">receipt_long</span> Pesanan Saya
        </h1>
        <button onclick="navigateTo('home')" class="text-xs font-semibold text-primary hover:underline">Belanja Lagi</button>
      </div>
      <div class="space-y-4">
        ${ordersMarkup}
      </div>
    </div>
  `;
}

// Konfirmasi Pesanan Diterima -> Auto-release Escrow ke Seller (FR-07.2)
function buyerConfirmReceived(orderId) {
  const order = APP_STATE.orders.find(o => o.id === orderId);
  if (!order) return;

  order.status = 'SELESAI';
  order.timeline.push({
    status: 'SELESAI',
    time: 'Baru saja',
    note: 'Pembeli mengonfirmasi pesanan diterima. Dana escrow dilepas ke saldo penjual.'
  });

  // Catat RELEASE ke Rekening Bersama Escrow
  APP_STATE.escrowLedger.unshift({
    id: `ledg-${Date.now()}`,
    orderId: order.id,
    shopId: order.shopId,
    type: 'RELEASE',
    amount: order.subtotal,
    bucket: 'AVAILABLE',
    note: `Pelepasan dana pesanan ${order.orderCode} ke saldo penjual`
  });

  // Mutasi Saldo Toko
  APP_STATE.sellerBalance.held -= order.subtotal;
  APP_STATE.sellerBalance.available += order.subtotal;

  showToast('Terima kasih! Dana transaksi telah dilepas ke penjual.', 'success');
  renderOrdersView();
}

// ========================================================
// F-08 & F-07: Dashboard Penjual (Seller)
// ========================================================
function renderSellerDashboard() {
  const container = document.getElementById('view-seller-dashboard');
  const pendingOrders = APP_STATE.orders.filter(o => o.status === 'PERLU_DIPROSES');

  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <!-- Header Seller -->
      <div class="flex flex-wrap justify-between items-center gap-4 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
            G
          </div>
          <div>
            <h1 class="text-headline-sm font-bold text-on-surface flex items-center gap-2">
              Gayo Highland Coffee
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-secondary-container text-primary">Toko Buka</span>
            </h1>
            <p class="text-xs text-on-surface-variant">Takengon, Aceh Tengah • Bergabung sejak 2026</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <button onclick="showToast('Fitur Tambah Produk dibuka', 'info')" class="px-4 py-2 bg-primary text-white font-bold text-xs rounded-lg hover:bg-primary-container shadow-sm flex items-center gap-1.5">
            <span class="material-symbols-outlined text-base">add</span> Tambah Produk
          </button>
        </div>
      </div>

      <!-- KPI Strip (Sesuai Skill Desain Seksi 6.J) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm">
          <span class="text-xs text-on-surface-variant font-medium">Pesanan Baru (Perlu Diproses)</span>
          <div class="text-2xl font-bold text-on-surface mt-1">${pendingOrders.length}</div>
          <span class="text-[11px] text-primary font-semibold">SLA: Maks 2 Hari Kerja</span>
        </div>

        <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm">
          <span class="text-xs text-on-surface-variant font-medium">Saldo Tersedia (Siap Tarik)</span>
          <div class="text-2xl font-bold text-primary mt-1">${formatIDR(APP_STATE.sellerBalance.available)}</div>
          <button onclick="requestWithdrawal()" class="text-[11px] text-primary font-bold hover:underline mt-1 block">Tarik Saldo »</button>
        </div>

        <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm">
          <span class="text-xs text-on-surface-variant font-medium">Dana Tertahan (Escrow Hold)</span>
          <div class="text-2xl font-bold text-amber-600 mt-1">${formatIDR(APP_STATE.sellerBalance.held)}</div>
          <span class="text-[11px] text-outline">Menunggu Paket Tiba</span>
        </div>

        <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm">
          <span class="text-xs text-on-surface-variant font-medium">Total Produk Aktif</span>
          <div class="text-2xl font-bold text-on-surface mt-1">12 SKU</div>
          <span class="text-[11px] text-primary font-semibold">Semua Stok Aman</span>
        </div>
      </div>

      <!-- Manajemen Pesanan Masuk (Biteship Order Creation) -->
      <div class="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-4">
        <h3 class="text-title-md font-bold text-on-surface flex items-center justify-between">
          <span>Pesanan Masuk Membutuhkan Tindakan</span>
          <span class="text-xs font-semibold text-outline">P-03: SLA Penjual</span>
        </h3>

        ${pendingOrders.length === 0 ? `
          <p class="text-xs text-on-surface-variant py-4 text-center">Tidak ada pesanan tertunda yang perlu diproses saat ini.</p>
        ` : `
          <div class="divide-y divide-outline-variant/30">
            ${pendingOrders.map(order => `
              <div class="py-4 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span class="text-xs font-mono font-bold text-primary">${order.orderCode}</span>
                  <h4 class="font-bold text-sm text-on-surface mt-0.5">${order.items.map(i=>i.name).join(', ')}</h4>
                  <p class="text-xs text-on-surface-variant mt-0.5">Kurir: <strong>${order.courier}</strong> • Total Subtotal: ${formatIDR(order.subtotal)}</p>
                </div>
                <div class="flex items-center gap-2">
                  <button onclick="sellerProcessShipment('${order.id}')" class="px-4 py-2 bg-primary text-white font-bold text-xs rounded-lg hover:bg-primary-container shadow-sm flex items-center gap-1.5">
                    <span class="material-symbols-outlined text-sm">local_shipping</span> Proses & Buat Resi Biteship
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>

      <!-- Mutasi Buku Besar (Ledger Escrow Transparan) -->
      <div class="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-4">
        <h3 class="text-title-md font-bold text-on-surface flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-lg">account_balance_wallet</span> Buku Besar Mutasi Saldo (Escrow Ledger)
        </h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-surface-container-low text-on-surface-variant uppercase text-[10px]">
              <tr>
                <th class="p-3">ID Entry</th>
                <th class="p-3">ID Pesanan</th>
                <th class="p-3">Tipe Mutasi</th>
                <th class="p-3">Bucket</th>
                <th class="p-3">Jumlah</th>
                <th class="p-3">Keterangan</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline-variant/20">
              ${APP_STATE.escrowLedger.map(l => `
                <tr>
                  <td class="p-3 font-mono">${l.id}</td>
                  <td class="p-3 font-mono">${l.orderId}</td>
                  <td class="p-3 font-bold ${l.type === 'HOLD' ? 'text-amber-600' : 'text-primary'}">${l.type}</td>
                  <td class="p-3">${l.bucket}</td>
                  <td class="p-3 font-bold">${formatIDR(l.amount)}</td>
                  <td class="p-3 text-on-surface-variant">${l.note}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

// Penjual Membuat Pengiriman Biteship (FR-08.2)
function sellerProcessShipment(orderId) {
  const order = APP_STATE.orders.find(o => o.id === orderId);
  if (!order) return;

  const mockResi = `PSK-JNE-${Math.floor(10000000 + Math.random() * 90000000)}`;
  order.status = 'DIKIRIM';
  order.waybillId = mockResi;
  order.timeline.push(
    { status: 'DIKIRIM', time: 'Baru saja', note: `Biteship Order dibuat. Resi kurir: ${mockResi}` }
  );

  showToast(`Pengiriman Berhasil Dibuat! Resi: ${mockResi}`, 'success');
  renderSellerDashboard();

  // Simulasi webhook Biteship bahwa paket tiba (TERKIRIM) dalam beberapa detik untuk demo testing
  setTimeout(() => {
    order.status = 'TERKIRIM';
    order.timeline.push({
      status: 'TERKIRIM',
      time: 'Baru saja',
      note: 'Kurir Biteship menandai paket telah sampai di alamat tujuan.'
    });
    showToast(`Paket pesanan ${order.orderCode} telah sampai di alamat pembeli!`, 'info');
  }, 6000);
}

function requestWithdrawal() {
  if (APP_STATE.sellerBalance.available < 50000) {
    showToast('Minimal penarikan saldo adalah Rp50.000 (P-09)', 'info');
    return;
  }
  const jumlah = APP_STATE.sellerBalance.available;
  APP_STATE.sellerBalance.available = 0;
  APP_STATE.escrowLedger.unshift({
    id: `ledg-${Date.now()}`,
    orderId: '-',
    shopId: 'shop-1',
    type: 'WITHDRAW',
    amount: -jumlah,
    bucket: 'AVAILABLE',
    note: 'Pengajuan penarikan dana ke rekening BCA 88201928'
  });
  showToast(`Pengajuan penarikan ${formatIDR(jumlah)} berhasil dikirim ke Admin.`, 'success');
  renderSellerDashboard();
}

// ========================================================
// F-10: Panel Admin Dasar
// ========================================================
function renderAdminPanel() {
  const container = document.getElementById('view-admin-panel');
  container.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div class="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm flex items-center justify-between">
        <div>
          <h1 class="text-headline-sm font-bold text-on-surface flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-2xl">admin_panel_settings</span> Panel Kontrol Admin PasarKita
          </h1>
          <p class="text-xs text-on-surface-variant mt-0.5">Moderasi Toko, Audit Log Webhook, & Rekonsiliasi Escrow</p>
        </div>
        <span class="px-3 py-1 bg-secondary-container text-primary font-bold text-xs rounded-full">Sistem Sandbox Berjalan</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40">
          <span class="text-xs text-on-surface-variant font-medium">Total Volume Transaksi Escrow</span>
          <div class="text-2xl font-bold text-primary mt-1">${formatIDR(184000 + APP_STATE.sellerBalance.held)}</div>
          <span class="text-[11px] text-outline">Rekonsiliasi Bersih: Rp0 Selisih</span>
        </div>
        <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40">
          <span class="text-xs text-on-surface-variant font-medium">Sengketa / Komplain Terbuka</span>
          <div class="text-2xl font-bold text-on-surface mt-1">0 Kasus</div>
          <span class="text-[11px] text-primary">Tidak Ada Masalah</span>
        </div>
        <div class="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40">
          <span class="text-xs text-on-surface-variant font-medium">Webhook Midtrans / Biteship</span>
          <div class="text-2xl font-bold text-on-surface mt-1">100% Valid</div>
          <span class="text-[11px] text-primary">Signature SHA-512 Verified</span>
        </div>
      </div>

      <!-- Log Audit Transaksi -->
      <div class="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-3">
        <h3 class="font-bold text-on-surface text-sm">Audit Log Sistem & Webhook Real-Time</h3>
        <div class="p-4 rounded-lg bg-surface-container-low font-mono text-xs space-y-2 text-on-surface-variant overflow-x-auto">
          <p>[2026-10-13 14:15:02] [BITESHIP_WEBHOOK] Event: order.delivered -> Order PSK-2610-00101 status updated to TERKIRIM.</p>
          <p>[2026-10-12 18:40:11] [BITESHIP_WEBHOOK] Event: order.picked_up -> Waybill PSK-JNE-88291039 active.</p>
          <p>[2026-10-12 10:32:00] [MIDTRANS_WEBHOOK] Signature Valid (SHA-512) -> Payment settlement 184000 IDR -> HOLD escrow ledger created.</p>
        </div>
      </div>
    </div>
  `;
}

// ========================================================
// F-09: Chat Pembeli - Penjual
// ========================================================
function openChatModal(shopName = 'Gayo Highland Coffee', productId = null) {
  const modal = document.getElementById('chat-modal');
  document.getElementById('chat-shop-title').textContent = shopName;
  modal.classList.remove('hidden');
  renderChatMessages();
}

function closeChatModal() {
  document.getElementById('chat-modal').classList.add('hidden');
}

function renderChatMessages() {
  const container = document.getElementById('chat-messages-container');
  container.innerHTML = APP_STATE.chatMessages.map(msg => `
    <div class="flex flex-col ${msg.sender === 'buyer' ? 'items-end' : 'items-start'}">
      <div class="max-w-[75%] p-3 rounded-xl text-xs ${msg.sender === 'buyer' ? 'bg-primary text-white rounded-br-none' : 'bg-surface-container text-on-surface rounded-bl-none'}">
        <p>${msg.text}</p>
      </div>
      <span class="text-[10px] text-outline mt-0.5">${msg.time}</span>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

function sendChatMessage() {
  const input = document.getElementById('chat-input-text');
  const text = input.value.trim();
  if (!text) return;

  APP_STATE.chatMessages.push({
    sender: 'buyer',
    text: text,
    time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
  });

  input.value = '';
  renderChatMessages();

  // Balasan otomatis dari penjual untuk simulasi live chat
  setTimeout(() => {
    APP_STATE.chatMessages.push({
      sender: 'seller',
      text: 'Siap kak! Pesanan dan pertanyaan kakak sudah kami catat. Terima kasih telah mendukung UMKM kami!',
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    });
    renderChatMessages();
  }, 1200);
}

// ========================================================
// Event Listeners & Inisialisasi
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  // Category chip filtering
  document.querySelectorAll('.category-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('bg-primary', 'text-white'));
      chip.classList.add('bg-primary', 'text-white');
      APP_STATE.activeCategory = chip.dataset.cat;
      renderProductCatalog();
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      APP_STATE.searchQuery = e.target.value;
      if (APP_STATE.currentView !== 'home') navigateTo('home');
      renderProductCatalog();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      APP_STATE.activeSort = e.target.value;
      renderProductCatalog();
    });
  }

  // Flash Sale Timer Countdown (Realistis)
  let flashHours = 4, flashMins = 32, flashSecs = 18;
  setInterval(() => {
    if (flashSecs > 0) {
      flashSecs--;
    } else {
      flashSecs = 59;
      if (flashMins > 0) flashMins--;
      else { flashMins = 59; if (flashHours > 0) flashHours--; }
    }
    const timerEl = document.getElementById('flash-sale-timer');
    if (timerEl) {
      const hh = String(flashHours).padStart(2, '0');
      const mm = String(flashMins).padStart(2, '0');
      const ss = String(flashSecs).padStart(2, '0');
      timerEl.textContent = `${hh} : ${mm} : ${ss}`;
    }
  }, 1000);

  // Inisialisasi tampilan awal
  navigateTo('home');
});
