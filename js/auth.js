const authSessionKey = "auth";

class Alamat {
    constructor(rt, rw, jalan, kelurahanDesa, kecamatan, kotaKabupatan, provinsi) {
        this.rt = rt;
        this.rw = rw;
        this.jalan = jalan;
        this.kelurahanDesa = kelurahanDesa;
        this.kecamatan = kecamatan;
        this.kotaKabupatan = kotaKabupatan;
        this.provinsi = provinsi;
    }
}

class Account {
    constructor(name, email, noHP, tanggalLahir, alamat) {
        this.name = name;
        this.email = email;
        this.noHP = noHP;
        this.tanggalLahir = tanggalLahir;
        this.alamat = alamat;
    }
}

const defaultAccount = new Account(
    "PSI 4",
    "psi4@gmail.com",
    "081234567890",
    new Date(2004, 2, 29),
    new Alamat(
        1,
        2,
        "Jln. Jalan",
        "Kelurahan 1",
        "Kecamatan 1",
        "Kota Kupang",
        "Nusa Tenggara Timur"
    )
);

function getAuthState() {
    const account = window.sessionStorage.getItem(authSessionKey);

    if(!account) {
        return { signin : false };
    }

    return {
        signin : true,
        identity: JSON.parse(account)
    }
};

function signin(account, returnUrl) {
    if(!account) {
        window.sessionStorage.setItem(authSessionKey, JSON.stringify(defaultAccount));
    } else {
        window.sessionStorage.setItem(authSessionKey, JSON.stringify(account));
    }

    window.location.replace(returnUrl ? returnUrl : '/index.html');
}

function signout() {
    window.sessionStorage.removeItem(authSessionKey);

    window.location.reload();
}