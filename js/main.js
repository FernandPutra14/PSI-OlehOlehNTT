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