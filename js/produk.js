class Produk {
    constructor(id, nama, gambar, kategori, harga, hargaDiskon, stok, keterangan, spesifikasi) {
        this.id = id;
        this.nama = nama;
        this.kategori = kategori;
        this.gambar = gambar;
        this.harga = harga;
        this.hargaDiskon = hargaDiskon;
        this.stok = stok;
        this.keterangan = keterangan;
        this.spesifikasi = spesifikasi;
    }

    spesifikasiHTMLLi() {
       let li = '';
       
       for (const key in this.spesifikasi) {
        li += `<li>${key} : ${this.spesifikasi[key]}</i>`;
       }

       return li;
    }
}

const daftarProduk = [
    new Produk(
        1,
        "Se'i Babi Asap",
        "assets/sei_makanan.png",
        "Makanan",
        25000,
        20000,
        20,
        "Se'i babi khas NTT",
        null,
    ),
    new Produk(
        2,
        "Tenun Ikat Sumba",
        "assets/sei_makanan.png",
        "Kain Tenun",
        750000,
        650000,
        15,
        "Tenun ikat khas Sumba yang dibuat dengan teknik tradisional dan motif etnik yang unik, cocok sebagai pakaian adat koleksi pribadi",
        {
            "Bahan" : "Katun Alami",
            "Warna" : "Kombinasi merah, hitam, kuning",
            "Ukuran" : "200 x 60 cm",
            "Cara Perawatan" : "Cuci dengan air dingin"
        },
    ),
    // Makanan
    new Produk(31, "Sambal Laku", "assets/sei_makanan.png", "Makanan", 15000, 12000, 100, "Sambal khas NTT yang pedas dan menggugah selera.", { bahan: "Cabe, terasi, bawang", pedas: "Tinggi" }),
    new Produk(32, "Jagung Bakar", "assets/sei_makanan.png", "Makanan", 20000, 17000, 80, "Jagung yang dibakar dan disajikan dengan bumbu khas.", { porsi: "1 tongkol", pedas: "Rendah" }),
    new Produk(3, "Ikan Bakar Jimbaran", "assets/sei_makanan.png", "Makanan", 30000, 25000, 50, "Ikan yang dibakar dengan bumbu khas.", { jenis: "Ikan laut", pedas: "Sedang" }),
    new Produk(4, "Kue Kacang", "assets/sei_makanan.png", "Makanan", 10000, 8000, 120, "Kue tradisional yang terbuat dari kacang.", { porsi: "1 porsi", pedas: "Tidak ada" }),
    new Produk(5, "Daging Babi Bakar", "assets/sei_makanan.png", "Makanan", 40000, 35000, 30, "Daging babi yang dibakar dengan bumbu rempah.", { porsi: "1 porsi", pedas: "Tinggi" }),
    new Produk(6, "Pangsit NTT", "assets/sei_makanan.png", "Makanan", 20000, 15000, 60, "Pangsit khas NTT dengan isi daging dan sayuran.", { porsi: "5 buah", pedas: "Sedang" }),
    new Produk(7, "Sop Buntut", "assets/sei_makanan.png", "Makanan", 35000, 30000, 40, "Sop dengan buntut sapi yang gurih.", { porsi: "1 mangkuk", pedas: "Rendah" }),
    new Produk(8, "Kolo", "assets/sei_makanan.png", "Makanan", 25000, 20000, 70, "Nasi yang dimasak dalam daun pisang.", { porsi: "1 porsi", pedas: "Tidak ada" }),
    new Produk(9, "Nasi Paha", "assets/sei_makanan.png", "Makanan", 30000, 25000, 50, "Nasi dengan lauk khas NTT.", { porsi: "1 porsi", pedas: "Rendah" }),
    new Produk(10, "Sagu Lempeng", "assets/sei_makanan.png", "Makanan", 12000, 10000, 90, "Makanan tradisional yang terbuat dari sagu.", { porsi: "1 porsi", pedas: "Tidak ada" }),

    // Minuman
    new Produk(11, "Tuak", "assets/sei_makanan.png", "Minuman", 20000, 18000, 50, "Minuman fermentasi dari nira pohon enau.", { asal: "NTT", manis: "Sedang" }),
    new Produk(12, "Kopi Manggarai", "assets/sei_makanan.png", "Minuman", 25000, 20000, 40, "Kopi khas NTT dengan cita rasa unik.", { asal: "Manggarai", pahit: "Sedang" }),
    new Produk(13, "Air Kelapa Muda", "assets/sei_makanan.png", "Minuman", 15000, 12000, 100, "Minuman segar dari kelapa muda.", { porsi: "1 buah", manis: "Rendah" }),
    new Produk(14, "Sari Kedelai", "assets/sei_makanan.png", "Minuman", 12000, 10000, 80, "Minuman sehat dari kedelai.", { porsi: "1 gelas", manis: "Rendah" }),
    new Produk(15, "Jus Mangga", "assets/sei_makanan.png", "Minuman", 20000, 17000, 60, "Jus segar dari mangga lokal.", { porsi: "1 gelas", manis: "Tinggi" }),
    new Produk(16, "Es Teh Manis", "assets/sei_makanan.png", "Minuman", 10000, 8000, 90, "Teh manis dingin yang menyegarkan.", { porsi: "1 gelas", manis: "Tinggi" }),
    new Produk(17, "Es Jeruk Nipis", "assets/sei_makanan.png", "Minuman", 12000, 10000, 70, "Minuman segar dari jeruk nipis.", { porsi: "1 gelas", asam: "Tinggi" }),
    new Produk(18, "Wedang Ronde", "assets/sei_makanan.png", "Minuman", 15000, 13000, 50, "Minuman hangat dengan bola ketan.", { porsi: "1 mangkuk", manis: "Sedang" }),
    new Produk(19, "Soda Gembira", "assets/sei_makanan.png", "Minuman", 10000, 8000, 120, "Minuman soda dengan susu kental manis.", { porsi: "1 gelas", manis: "Tinggi" }),
    new Produk(20, "Teh Sari Roti", "assets/sei_makanan.png", "Minuman", 15000, 12000, 80, "Teh khas yang disajikan dengan roti.", { porsi: "1 gelas", manis: "Sedang" }),

    // Kain Tenun
    new Produk(21, "Tenun Ikat NTT", "assets/sei_makanan.png", "Kain Tenun", 200000, 180000, 30, "Kain tenun tradisional dari NTT dengan motif khas.", { ukuran: "2m x 1m", bahan: "Katun" }),
    new Produk(22, "Tenun Sikka", "assets/sei_makanan.png", "Kain Tenun", 250000, 220000, 20, "Kain tenun dari Sikka dengan warna cerah.", { ukuran: "2m x 1.5m", bahan: "Katun" }),
    new Produk(23, "Tenun Flores", "assets/sei_makanan.png", "Kain Tenun", 230000, 200000, 25, "Kain tenun Flores dengan motif floral.", { ukuran: "2m x 1m", bahan: "Katun" }),
    new Produk(24, "Tenun Larantuka", "assets/sei_makanan.png", "Kain Tenun", 240000, 210000, 15, "Kain tenun dari Larantuka, kaya warna.", { ukuran: "2m x 1.5m", bahan: "Katun" }),
    new Produk(25, "Tenun Bajawa", "assets/sei_makanan.png", "Kain Tenun", 220000, 190000, 35, "Kain tenun dari Bajawa dengan desain tradisional.", { ukuran: "2m x 1m", bahan: "Katun" }),
    new Produk(26, "Tenun Rote", "assets/sei_makanan.png", "Kain Tenun", 260000, 230000, 10, "Kain tenun dari Rote, unik dan indah.", { ukuran: "2m x 1.5m", bahan: "Katun" }),
    new Produk(27, "Tenun Ndao", "assets/sei_makanan.png", "Kain Tenun", 200000, 180000, 20, "Kain tenun Ndao dengan motif tradisional.", { ukuran: "2m x 1m", bahan: "Katun" }),
    new Produk(28, "Tenun Ngada", "assets/sei_makanan.png", "Kain Tenun", 250000, 220000, 18, "Kain tenun Ngada yang indah.", { ukuran: "2m x 1m", bahan: "Katun" }),
    new Produk(29, "Tenun Alor", "assets/sei_makanan.png", "Kain Tenun", 210000, 190000, 28, "Kain tenun Alor dengan corak unik.", { ukuran: "2m x 1.5m", bahan: "Katun" }),
    new Produk(30, "Tenun Timor", "assets/sei_makanan.png", "Kain Tenun", 240000, 210000, 12, "Kain tenun Timor dengan warna yang cerah.", { ukuran: "2m x 1m", bahan: "Katun" }),

    // Aksesoris
    new Produk(33, "Kalung Tenun", "assets/sei_makanan.png", "Aksesoris", 50000, 45000, 50, "Kalung cantik dari bahan tenun tradisional.", { bahan: "Tenun, logam", panjang: "40cm" }),
    new Produk(34, "Gelang Etnik", "assets/sei_makanan.png", "Aksesoris", 30000, 25000, 75, "Gelang etnik yang unik dan menarik.", { bahan: "Akrilik, tenun", ukuran: "All size" }),
    new Produk(35, "Anting Etnik", "assets/sei_makanan.png", "Aksesoris", 70000, 65000, 40, "Anting dengan desain etnik yang menarik.", { bahan: "Logam, tenun", panjang: "5cm" }),
    new Produk(36, "Tas Anyaman", "assets/sei_makanan.png", "Aksesoris", 120000, 100000, 30, "Tas cantik yang dianyam dari bahan alami.", { ukuran: "30cm x 20cm", bahan: "Alami" }),

    // Pakaian
    new Produk(37, "Baju Adat NTT", "assets/sei_makanan.png", "Pakaian", 300000, 280000, 20, "Baju adat khas NTT yang elegan.", { ukuran: "M, L, XL", bahan: "Katun" }),
    new Produk(38, "Kaos NTT", "assets/sei_makanan.png", "Pakaian", 100000, 90000, 50, "Kaos dengan desain khas NTT.", { ukuran: "S, M, L", bahan: "Katun" }),
    new Produk(39, "Jaket Tradisional", "assets/sei_makanan.png", "Pakaian", 350000, 320000, 15, "Jaket dengan motif tradisional yang hangat.", { ukuran: "M, L", bahan: "Wool" }),
    new Produk(40, "Kebaya Modern", "assets/sei_makanan.png", "Pakaian", 400000, 370000, 10, "Kebaya dengan desain modern yang anggun.", { ukuran: "S, M, L", bahan: "Satin" }),

    // Lain-lain
    new Produk(41, "Kerajinan Tangan", "assets/sei_makanan.png", "Lain-lain", 80000, 70000, 25, "Kerajinan tangan dari bahan alami.", { jenis: "Unik", ukuran: "Variasi" }),
    new Produk(42, "Buku Budaya NTT", "assets/sei_makanan.png", "Lain-lain", 50000, 45000, 30, "Buku tentang budaya dan tradisi NTT.", { halaman: "100", kategori: "Budaya" }),
    new Produk(43, "Peta Wisata NTT", "assets/sei_makanan.png", "Lain-lain", 30000, 25000, 40, "Peta wisata lengkap untuk menjelajahi NTT.", { ukuran: "A3", jenis: "Peta" }),
    new Produk(44, "Souvenir NTT", "assets/sei_makanan.png", "Lain-lain", 15000, 12000, 100, "Souvenir unik dari NTT.", { ukuran: "Variasi", jenis: "Souvenir" }),
]

function getProdukById(id) {
    return daftarProduk.find((value) => value.id == id);
}