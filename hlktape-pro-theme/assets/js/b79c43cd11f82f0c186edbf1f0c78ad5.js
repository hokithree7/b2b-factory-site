$(function() {
	// 点击展开
	$('.sidemenu .menu-content').click(function (event) {
		const grandMenu = $(this).parent();
		const subMenuList = grandMenu.find('> .sub-menu-list') || grandMenu.find('> .third-menu-list')

		grandMenu.toggleClass('open');
		
		if (subMenuList) {
			if (subMenuList.is(':hidden')) {
				subMenuList.slideDown();
			} else {
				subMenuList.slideUp();
			}
		}
	})

	// 初始化active展开
	// $('.sidemenu ul li').click(function (event) {
	// 	const grandNav = $(event.target).hasClass('sub-menu-list') ? $(event.target) : Array.from($(event.target).parents()).find(function(item) {return $(item).hasClass('sub-navs')});
	
	// 	if(grandNav){
	// 		 if ($("dl", grandNav).is(':hidden')) {
	// 				$('.sidemenu ul li dl dd').removeClass('active').find("dl").slideUp();
	// 				$(grandNav).toggleClass('active').find("> dl").slideDown();
	// 			} else {
	// 				$(grandNav).toggleClass('active').find("> dl").slideUp();
	// 			}
			 
	// 		 return
	// 	}
	
	// 	if ($(this).hasClass('active')) {
	// 		$(this).toggleClass('active').find("> dl").slideUp();
	// 	} else {
	// 	 $('.sidemenu ul li').removeClass('active').find("> dl").slideUp();
	// 		$(this).toggleClass('active').find("> dl").slideDown();
		 
	// 	}
	// });
});