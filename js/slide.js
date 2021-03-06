var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  fadeEffect: { crossFade: true },
  virtualTranslate: true,
  speed: 1000,
  slidersPerView: 1,
  effect: "fade",
});
