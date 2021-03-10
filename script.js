//== Initialize Swiper ==//
//== start ==//
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        990: {
          slidesPerView: 4,
        },
      },
  });
//== end ==//