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
    constructor(name, email, alamat) {
        this.name = name;
        this.email = email;
        this.alamat = alamat;
    }
}

const defaultAccount = new Account(
    "Tim Ziro",
    "timziro@gmail.com",
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

function signin(account) {
    if(!account) {
        window.sessionStorage.setItem(authSessionKey, JSON.stringify(defaultAccount));
    } else {
        window.sessionStorage.setItem(authSessionKey, JSON.stringify(account));
    }

    window.location.replace('/index.html');
}

function signout() {
    window.sessionStorage.removeItem(authSessionKey);

    window.location.reload();
}

document.addEventListener('DOMContentLoaded', function () {
    const authorizeElements = document.querySelectorAll('.authorize');
    const notAuthorizeElements = document.querySelectorAll('.not-authorize');
    const namePlaceholders = document.querySelectorAll('.name-placeholder');
    const emailPlaceholders = document.querySelectorAll('.email-placeholder');

    const authState = getAuthState();

    if(authState.signin) {
        authorizeElements.forEach(function(element) {
            element.classList.add('show');
        });

        namePlaceholders.forEach(function(element) {
            element.outerHTML = authState.identity.name;
        });
        
        emailPlaceholders.forEach(function(element) {
            element.outerHTML = authState.identity.email;
        });
    } else {
        notAuthorizeElements.forEach(function(element) {
            element.classList.add('show');
        });
    }
});