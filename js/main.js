const swiper = new Swiper('.swiper', {
  loop: false,  // ← отключаем зацикливание
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 300,
  
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  
  // Автоматически обновляет при изменении DOM
  observer: true,
  observeParents: true,
  
  // Дополнительно: автовысота (опционально)
  // autoHeight: false,
  
  // Отключаем эффект наложения
  effect: 'slide',
});