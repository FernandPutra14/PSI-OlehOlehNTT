const keranjangSessionKey = "keranjang-session-key";
let keranjang;

function getKeranjang() {
    if(keranjang) return keranjang;

    const keranjangJson = window.sessionStorage.ge(keranjangSessionKey);
    keranjang = JSON.parse(keranjangJson);

    return keranjang;
}