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

function templateDaftarProduk(containerGrid, products) {
    const numberFormatter = new Intl.NumberFormat('id-ID', {
        style: "currency",
        currency: "IDR"
    })

    products.forEach((element, index) => {
        containerGrid.insertAdjacentHTML('beforeend', `
        <a href="detail_produk.html?id=${element.id}" class="laris__card-link">
          <div class="laris__card">
            <img class="gambar_terlaris" src="${element.gambar}" alt="trip" />
            <div class="laris__details">
              <p>${element.kategori}</p>
              <h6>${element.nama}</h6>
              <div class="bagian__price">
                <div class="price"><span>${numberFormatter.format(element.harga)}</span></div>
                <div class="action-produk-card authorize">
                  <button class="btn-produk-none btn-sukai" onclick="${isInWishList(element.id) ? `removeItemToWishList(getProdukById(${element.id}))` : `addItemToWishList(getProdukById(${element.id}), 'Catatan')`}">
                    ${isInWishList(element.id) ? `<i class="ri-heart-fill tidak-sukai"></i>` : `<i class="ri-heart-line sukai"></i>`}
                  </button>
                  <button class="btn-produk-none btn-keranjangi" onclick="addItem(getProdukById(${element.id}), 1);window.location.reload()">
                    <i class="ri-shopping-cart-2-line keranjangi"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a>`);
    });

    authorizeContent(getAuthState());

    document.querySelectorAll('.sukai').forEach(function (icon) {
        icon.addEventListener('mouseover', function () {
            this.classList.replace('ri-heart-line', 'ri-heart-fill');
        });
        icon.addEventListener('mouseout', function () {
            this.classList.replace('ri-heart-fill', 'ri-heart-line');
        });
    });

    document.querySelectorAll('.keranjangi').forEach(function (icon) {
        icon.addEventListener('mouseover', function () {
            this.classList.replace('ri-shopping-cart-2-line', 'ri-shopping-cart-fill');
        });
        icon.addEventListener('mouseout', function () {
            this.classList.replace('ri-shopping-cart-fill', 'ri-shopping-cart-2-line');
        });
    });

    document.querySelectorAll('.btn-produk-none').forEach((item) => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
        });
    });
}