$(function () {
  var swiper4 = new Swiper('.bobo-cert-list .swiper', {

    watchSlidesProgress: false,
    slidesPerView: 2,
    centeredSlides: false,

    loop: true,

    loopedSlides: 5,

    autoplay: true,

    pagination: {

      el: '.bobo-cert-list .swiper-pagination',

      clickable: true,

    },

    navigation: {

      nextEl: '.bobo-cert-list .swiper-button-next',

      prevEl: '.bobo-cert-list .swiper-button-prev',

    },

    on: {

      progress: function (progress) {

        for (i = 0; i < this.slides.length; i++) {

          var slide = this.slides.eq(i);

          var slideProgress = this.slides[i].progress;

          modify = 1;

          if (Math.abs(slideProgress) > 1) {

            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;

          }

          translate = slideProgress * modify * 70 + 'px';

          scale = 1 - Math.abs(slideProgress) / 5;

          zIndex = 999 - Math.abs(Math.round(10 * slideProgress));

          slide.transform('translateX(' + translate + ') scale(' + scale + ')');

          slide.css('zIndex', zIndex);

          slide.css('opacity', 1);

          if (Math.abs(slideProgress) > 3) {

            slide.css('opacity', 0);

          }

        }

      },

      setTransition: function (swiper, transition) {

        for (var i = 0; i < this.slides.length; i++) {

          var slide = this.slides.eq(i)

          slide.transition(transition);

        }
      }
    },
    breakpoints: {
      768: {
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 15
      }
    }
  });

});
