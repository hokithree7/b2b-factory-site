
$(function () {
  $(window).scroll(function () {

    if ($(window).width() > 768) {

      if ($(this).scrollTop() >= 200) {

        $('#arshine2-gotop').fadeIn();

      } else {

        $('#arshine2-gotop').fadeOut();

      }
    }

  });

  $('#arshine2-gotop').click(function () {

    $('html, body').animate({ scrollTop: 0 }, 'slow');

  });
})
