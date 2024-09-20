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
    ...Array.from({length : 99}, (value, index) => new Produk(
        2 + index,
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
    ))
]

function getProdukById(id) {
    return daftarProduk.find((value) => value.id == id);
}