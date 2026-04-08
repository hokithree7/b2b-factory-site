$(function () {
	new Swiper('.nans_videos .swiper', {
		loop: true,
		pagination: {
			type: 'fraction',
			el: '.nans_videos .swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.nans_videos .swiper-button-next',
			prevEl: '.nans_videos .swiper-button-prev'
		}
	});
});


