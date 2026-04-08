$(function () {
  var swiper1 = new Swiper('.arshine-pic-list .swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
    },
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: '.arshine-pic-list .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      920: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });
});
