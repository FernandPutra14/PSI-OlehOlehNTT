const swiperElement = document.querySelector('.swiper');
const isClass2 = swiperElement.classList.contains('class-2');
const spaceBetweenValue = isClass2 ? 50 : 0;

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: spaceBetweenValue,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, 
  },

  autoplay: isClass2 ? {
    delay: 2000,
    disableOnInteraction: false,
  } : false, 

  loop: isClass2,
  loopedSlides: isClass2 ? 3 : 0,
});
