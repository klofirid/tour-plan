const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 300,
  
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
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