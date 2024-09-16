class Produk {
    constructor(nama, gambar, harga, hargaDiskon, stok, keterangan, spesifikasi) {
        this.nama = nama;
        this.gambar = gambar;
        this.harga = harga;
        this.hargaDiskon = hargaDiskon;
        this.stok = stok;
        this.keterangan = keterangan;
        this.spesifikasi = spesifikasi;
    }
}

async function getProducts() {
    const result = await fetch("/data/produk.json");
    if(!result.ok) return null;
    const json = await result.json();

    return json.map((p) => new Produk(
        p.nama,
        p.gambar,
        p.harga,
        p.hargaDiskon,
        p.stok,
        p.keterangan,
        p.spesifikasi
    ));
}