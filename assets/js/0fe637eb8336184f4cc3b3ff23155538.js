window.onload = function() {
  // 产品轮播
  const productSlider = new Swiper('.product_list.showlist_section .swiper', {
    grid: {
      rows: 2,
      fill: 'row',
    },
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.product_list.showlist_section .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      1024: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      768: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
      },
      320: {
        slidesPerView: 2,
        grid: {
          rows: 2,
          fill: 'row',
        },
      }
    }
  });

  // faq 轮播
  var faq_swiper = new Swiper('.faq.showlist_section .swiper', {
    loop: false,
    navigation: {
      nextEl: '.faq.showlist_section .swiper-button-next',
      prevEl: '.faq.showlist_section .swiper-button-prev',
    },
  });

  // blog 轮播
  var bc = document.querySelectorAll('.blog.showlist_section .swiper .swiper-slide').length;

  let blPC;
  if (bc > 3) {
    blPC = 3;
  } else {
    blPC = bc;
  }

  const blogSlider = new Swiper('.blog.showlist_section .swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    pagination: {
      el: '.blog.showlist_section .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      1280: {
        slidesPerView:  blPC > 2 ? 3 : blPC,
      },
      1024: {
        slidesPerView:  blPC > 1 ? 2 : blPC,
      },
      320: {
        slidesPerView: 1,
      },
    }
  });

  // review 轮播
  var rc = document.querySelectorAll('.review.showlist_section .swiper .swiper-slide').length;

  let rePC;
  if (rc > 3) {
    rePC = 3;
  } else {
    rePC = rc;
  }

  const reviewsSlider = new Swiper('.review.showlist_section .swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 800,
    pagination: {
      el: '.review.showlist_section .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      1280: {
        slidesPerView: rePC > 2 ? 3 : rePC,
    },
      1024: {
        slidesPerView: rePC > 1 ? 2 : rePC,
      },
      320: {
        slidesPerView: 1,
      }
    }
  });

  // 关键词分类hover切换
  var mixer = $(".keyword_series .gallery");
  mixer.mixItUp({
    load: {
      filter: '.sort-1'
    },
    controls: {
      enable: false
    }
  });

  var keywordType = $('.keyword_type a');
  keywordType.hover(function() {
    var filter = $(this).attr('data-filter');
    keywordType.removeClass('active');
    $(this).addClass('active');
    mixer.mixItUp('filter', filter, true);
  });
};
