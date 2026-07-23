const hotelSwiper = new Swiper(".hotel-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 300,

  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  pagination: {
    el: ".hotel-slider .swiper-pagination",
    clickable: true,
  },

  // Управление с клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // Автообновление
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  observer: true,
  observeParents: true,
});

const reviewsSwiper = new Swiper(".reviews-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 300,
  watchOverflow: false,

  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  // Управление с клавиатуры
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  observer: true,
  observeParents: true,
});
