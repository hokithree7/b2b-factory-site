$(function () {
  var viewSwiper = new Swiper('.desy-about2 .view .swiper', {
    on: {
      slideChangeTransitionStart: function () {
        updateNavPosition()

      }

    }

  })



  $('.desy-about2 .view .arrow-left').on('click', function (e) {

    e.preventDefault()

    if (viewSwiper.activeIndex == 0) {

      viewSwiper.slideTo(viewSwiper.slides.length - 1, 1000);

      return

    }

    viewSwiper.slidePrev()

  })

  $('.desy-about2 .view .arrow-right').on('click', function (e) {

    e.preventDefault()

    if (viewSwiper.activeIndex == viewSwiper.slides.length - 1) {

      viewSwiper.slideTo(0, 1000);

      return

    }

    viewSwiper.slideNext()

  })



  var previewSwiper = new Swiper('.desy-about2 .preview .swiper', {

    //visibilityFullFit: true,

    slidesPerView: '5',

    spaceBetween: 24,

    allowTouchMove: false,

    on: {

      tap: function (swiper, event) {

        viewSwiper.slideTo(previewSwiper.clickedIndex)

      }

    }

  })



  function updateNavPosition() {

    $('.desy-about2 .preview .active-nav').removeClass('active-nav')

    var activeNav = $('.desy-about2 .preview .swiper-slide').eq(viewSwiper.activeIndex).addClass('active-nav')

    if (!activeNav.hasClass('swiper-slide-visible')) {

      if (activeNav.index() > previewSwiper.activeIndex) {

        var thumbsPerNav = Math.floor(previewSwiper.width / activeNav.width()) - 1

        previewSwiper.slideTo(activeNav.index() - thumbsPerNav)

      } else {

        previewSwiper.slideTo(activeNav.index())

      }

    }

  };
});