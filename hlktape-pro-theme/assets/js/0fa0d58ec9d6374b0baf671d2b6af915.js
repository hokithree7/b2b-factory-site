$(function() {
	// 顶部搜索栏提交搜索请求
	$('.search-box-only .submit_btn').click(function () {
		var formData = $(this).parents('.search-box-only').find('form').serialize();
		window.location.href = `/search?${formData}`;
	});

	// // 语言切换
	// var pathArr = location.pathname.split('/') || [];

	// var lang = pathArr[1] || 'en';
	// var langList = [];
	// $('.language-switch-song a').each(function(){
	// 	langList.push($(this).data('lang'));
	// });
	// if (langList.includes(lang)) {
	// 	var imgUrl = $('.header-lang-song .box img').attr('src');
	// 	var imgUrlSeg = imgUrl.split('/');
	// 	imgUrlSeg[imgUrlSeg.length - 1] = lang + '.png';
	// 	$('.header-lang-song .box img').attr('src', imgUrlSeg.join('/'));
	// 	$('.header-lang-song .box em').text(lang.toUpperCase());
	// };

	// 移动端菜单
	$(".mo-header-menu-song").click(function(){
		$(".mo-leftmenu-song").toggleClass("menu-transitioning");
	});
	$(".mo-leftmenu-song .tit span").click(function(){
		$(".mo-leftmenu-song").removeClass("menu-transitioning");
	});
	$(".mo-header-search-song").click(function(){
		$(".mo-search-song").toggle();
	});
	$(".down-btn-song").on('click',function(){
		$(this).parent('li').toggleClass("active");
		$(this).siblings('ul').slideToggle();
		return false;
	});
});