

$(document).ready(function () {
  $('.gazolin-service-we-offer-block .col-md-6 .item-box').on('mouseenter', function (e) {
    x = e.pageX - $(this).offset().left,
      y = e.pageY - $(this).offset().top;
    $(this).find('span').css({
      top: y,
      left: x
    });
  });
  $('.gazolin-service-we-offer-block .col-md-6 .item-box').on('mouseout', function (e) {
    x = e.pageX - $(this).offset().left,
      y = e.pageY - $(this).offset().top;
    $(this).find('span').css({
      top: y,
      left: x
    });
  });

});
