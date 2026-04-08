// 询盘点击弹出
jQuery(document).ready(function ($) {
  if (typeof cdPopupFlag !== 'undefined') return;
  cdPopupFlag = 1;

  //open popup
  $('.cd-popup-trigger').on('click', function() {
    var index = $('.cd-popup-trigger').index(this);
    $('.click-popup').removeClass('is-visible');
    $('.click-popup').eq(index).addClass('is-visible');
  });
  // mobile popup
  $('.m-cd-popup-trigger').on('click', function() {
    $('.click-popup').removeClass('is-visible');
    $('.click-popup').eq(0).addClass('is-visible');
  });
  // three party
  $('.fix-cd-popup-trigger').on('click', function() {
    $('.click-popup').removeClass('is-visible');
    $('.click-popup').eq(0).addClass('is-visible');
  });

  //close popup
  $('.click-popup').on('click', function (event) {
    if ($(event.target).is('.cd-popup-close') || $(event.target).is('.click-popup')) {
      event.preventDefault();
      $(this).removeClass('is-visible');
    }
  });
  
  //close popup when clicking the esc keyboard button
  $(document).keyup(function (event) {
    if (event.which == '27') {
      $('.click-popup').removeClass('is-visible');
    }
  });
});