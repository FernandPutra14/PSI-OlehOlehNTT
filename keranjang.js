const keranjangSessionKey = "keranjang-session-key";

class KeranjangItem {
    constructor(produk, jumlah) {
        this.produk = produk;
        this.jumlah = jumlah;
    }
}

function getKeranjang() {
    let keranjang;
    const keranjangJson = window.sessionStorage.getItem(keranjangSessionKey);
    if(!keranjangJson) {
        keranjang = [];
    } else {
        try {
            keranjang = JSON.parse(keranjangJson);

            keranjang = keranjang.map((i) => new KeranjangItem(
                new Produk(
                    i.produk.nama,
                    i.produk.gambar,
                    i.produk.harga,
                    i.produk.hargaDiskon,
                    i.produk.stok,
                    i.produk.keterangan,
                    i.produk.spesifikasi,
                ),
                i.jumlah
            ))
        } catch (error) {
            keranjang = [];
        }
    }

    return keranjang;
}

function getTotal() {
    const keranjang = getKeranjang();

    return keranjang.reduce((total, curr) => total + curr.produk.harga * curr.jumlah, 0);
}

function addItem(produk, jumlah) {
    const keranjang = getKeranjang();

    if(keranjang.length === 0) {
        keranjang.push(new KeranjangItem(produk, jumlah));
    } else {
        const index = keranjang.findIndex((i) => i.produk.nama === produk.nama);

        if(index !== -1) {
            keranjang[index].jumlah += jumlah;
        } else {
            keranjang.push(new KeranjangItem(produk, jumlah));
        }
    }

    saveKeranjang(keranjang);
    window.location.reload();
}

function clearKeranjang() {
    window.sessionStorage.removeItem(keranjangSessionKey);
    window.location.reload();
}

function saveKeranjang(keranjang) {
    window.sessionStorage.setItem(keranjangSessionKey, JSON.stringify(keranjang));
}