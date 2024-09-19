class Produk {
    constructor(nama, gambar, kategori, harga, hargaDiskon, stok, keterangan, spesifikasi) {
        this.nama = nama;
        this.kategori = kategori;
        this.gambar = gambar;
        this.harga = harga;
        this.hargaDiskon = hargaDiskon;
        this.stok = stok;
        this.keterangan = keterangan;
        this.spesifikasi = spesifikasi;
    }
}

const daftarProduk = [
    new Produk(
        "Se'i Babi Asap",
        "assets/sei_makanan.png",
        "makanan",
        25000,
        20000,
        20,
        "Se'i babi khas NTT",
        null,
    ),
    new Produk(
        "Tenun Ikat Sumba",
        "assets/sei_makanan.png",
        "Kain Tenun",
        750000,
        650000,
        15,
        "Tenun ikat khas Sumba yang dibuat dengan teknik tradisional dan motif etnik yang unik, cocok sebagai pakaian adat koleksi pribadi",
        {
            bahan : "Katun Alami",
            warna : "Kombinasi merah, hitam, kuning",
            ukuran : "200 x 60 cm",
            caraPerawatan : "Cuci dengan air dingin"
        },
    ),
]