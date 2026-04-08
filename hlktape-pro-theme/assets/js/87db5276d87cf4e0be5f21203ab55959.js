$(function () {
  var swiper3 = new Swiper('.arshine-cert-list .swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    navigation: {
      nextEl: '.arshine-cert-list .swiper-button-next',
      prevEl: '.arshine-cert-list .swiper-button-prev',
    },
    breakpoints: {
      1280: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });
});
