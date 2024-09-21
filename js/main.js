// const scrollRevealOption = {
// origin: "bottom",
// distance: "50px",
// duration: 1000,
// };
// 
// ScrollReveal().reveal(".header__image img", {
// ...scrollRevealOption,
// origin: "right",
// });
// ScrollReveal().reveal(".header__content .section__subheader", {
// ...scrollRevealOption,
// delay: 500,
// });
// ScrollReveal().reveal(".header__content h1", {
// ...scrollRevealOption,
// delay: 1000,
// });
// ScrollReveal().reveal(".header__content .section__description", {
// ...scrollRevealOption,
// delay: 1500,
// });
// ScrollReveal().reveal(".header__btns", {
// ...scrollRevealOption,
// delay: 2000,
// });
// 
// ScrollReveal().reveal(".service__content .section__subheader", {
// ...scrollRevealOption,
// });
// ScrollReveal().reveal(".service__content .section__header", {
// ...scrollRevealOption,
// delay: 500,
// });
// ScrollReveal().reveal(".service__content .section__description", {
// ...scrollRevealOption,
// delay: 1000,
// });
// ScrollReveal().reveal(".service__btn", {
// ...scrollRevealOption,
// delay: 1500,
// });
// 
// ScrollReveal().reveal(".service__card", {
// duration: 1000,
// interval: 500,
// delay: 2000,
// });

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

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

function showContent(contentId) {
  //Sembunyikan semua content
  var contents = document.getElementsByClassName('content');
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }

  //Tunjukan Content yang terpilih
  document.getElementById(contentId).style.display = 'block';
}

const buttonWishListClick = (id) => {
  const authState = getAuthState();

  if (authState.signin) {
    if (isInWishList(id)) {
      removeItemToWishList(getProdukById(id));
    } else {
      addItemToWishList(getProdukById(id), "");
    }
  } else {
    window.location.href = `masuk_atau_daftar.html?returnUrl=${window.location.href}`;
  }
}

const buttonKeranjangClick = (id) => {
  const authState = getAuthState();

  if (authState.signin) {
    addItem(getProdukById(id), 1);
    window.location.reload();
  } else {
    window.location.href = `masuk_atau_daftar.html?returnUrl=${window.location.href}`;
  }
}
function authorizeContent(authState) {
  const authorizeElements = document.querySelectorAll('.authorize');
  const notAuthorizeElements = document.querySelectorAll('.not-authorize');

  if (authState.signin) {
    authorizeElements.forEach((e) => e.classList.remove('authorize'));
  } else {
    notAuthorizeElements.forEach((e) => e.classList.remove('not-authorize'));
  }
}

function accountPlaceholders(authState) {
  const namePlaceholders = document.querySelectorAll('.name-placeholder');
  const emailPlaceholders = document.querySelectorAll('.email-placeholder');

  if (authState.signin) {
    namePlaceholders.forEach(function (element) {
      element.outerHTML = authState.identity.name;
    });

    emailPlaceholders.forEach(function (element) {
      element.outerHTML = authState.identity.email;
    });
  }
}

function redirect(authState) {
  const redirectElement = document.querySelector("span#redirectLogin");

  if (redirectElement) {
    const dataWhen = redirectElement.getAttribute("data-when");
    const dataTo = redirectElement.getAttribute("data-to");

    if (!dataTo || !dataWhen) return;

    if (dataWhen == "signin") {
      if (authState.signin) {
        window.location.href = dataTo;
        return;
      }
    }

    if (dataWhen == "signout") {
      if (!authState.signin) {
        window.location.href = `masuk_atau_daftar.html?returnUrl=${window.location.href}`;
        return;
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const authState = getAuthState();

  authorizeContent(authState);
  accountPlaceholders(authState);
  redirect(authState);
});

document.addEventListener("DOMContentLoaded", function () {
  const keranjangBadge = document.getElementById("keranjang-badge");
  const keranjang = getKeranjang();

  if (keranjangBadge) {
    keranjangBadge.innerText = keranjang.length;
  }
});

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
                <div class="action-produk-card">
                  <button class="btn-produk-none btn-sukai" onclick="buttonWishListClick(${element.id})">
                    ${isInWishList(element.id) ? `<i class="ri-heart-fill tidak-sukai"></i>` : `<i class="ri-heart-line sukai"></i>`}
                  </button>
                  <button class="btn-produk-none btn-keranjangi" onclick="buttonKeranjangClick(${element.id})">
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

document.addEventListener("DOMContentLoaded", function () {
  const wishListBadge = document.getElementById("wishlist-badge");
  const wishList = getWishList();

  if (wishListBadge) {
    wishListBadge.innerText = wishList.length;
  }
});