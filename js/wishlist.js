class WishListItem {
    constructor(produk, catatan) {
        this.produk = produk;
        this.catatan = catatan;
    }
}

const wishListSessionKey = "wish-list";

function getWishList() {
    let wishList;
    const wishListJson = window.sessionStorage.getItem(wishListSessionKey);
    if(!wishListJson) {
        wishList = [];
    } else {
        try {
            wishList = JSON.parse(wishListJson);

            wishList = wishList.map((i) => new WishListItem(
                new Produk(
                    i.produk.nama,
                    i.produk.gambar,
                    i.produk.harga,
                    i.produk.hargaDiskon,
                    i.produk.stok,
                    i.produk.keterangan,
                    i.produk.spesifikasi,
                ),
                i.catatan
            ))
        } catch (error) {
            wishList = [];
        }
    }

    return wishList;
}

function isInWishList(namaProduk) {
    const wishlist = getWishList();
    const index = wishlist.findIndex((i) => i.produk.nama === namaProduk);

    if (index !== -1)
        return false;

    return true;
}

function addItemToWishList(produk, catatan) {
    const wishlist = getWishList();

    if(wishlist.length === 0) {
        wishlist.push(new WishListItem(produk, catatan));
    } else {
        if(!isInWishList(produk.nama))
            return;

        wishlist.push(new KeranjangItem(produk, catatan));
    }

    saveWishList(wishlist);
}

function removeItemToWishList(produk) {
    const wishList = getWishList();
    const newWishList = wishList.filter((e) => e.produk.nama !== produk.nama);

    saveWishList(newWishList);
}

function clearWishList() {
    window.sessionStorage.removeItem(wishListSessionKey);
    window.location.reload();
}

function saveWishList(wishList) {
    window.sessionStorage.setItem(wishListSessionKey, JSON.stringify(wishList));
    window.location.reload();
}

document.addEventListener("DOMContentLoaded", function () {
    const wishListBadge = document.getElementById("wishlist-badge");
    const wishList = getWishList();

    if(wishListBadge) {
        wishListBadge.innerText = wishList.length;
    }
});