$(function() {
  $('.global .list .box:not(.box1)').mouseover(function(){
		$('.global .list .box1').removeClass('active');
  });
})