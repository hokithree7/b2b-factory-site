(function($) {
  'use strict';


/*==== Brand active ====*/
var witrbslick = $('.brand_act');
if(witrbslick.length > 0){

    witrbslick.slick({
        infinite: true,
        rtl: !!($('html').attr('dir') === 'rtl'),
        autoplay: true,
        default: true,
        autoplaySpeed: 6000,
        speed: 1000,					
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            ]
        });
}
      
})(jQuery);