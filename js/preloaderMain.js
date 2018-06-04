var width = 0,
    perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100,
    sliderStart = false;

// Loadbar Animation
$(".loader__bg").animate({
	width: width + "%"
}, time);

setTimeout(function(){

	$('body').removeClass('loading').addClass('loaded');

	setTimeout(function(){

		$('.slide').eq(0).addClass('slide_active');
		$('.sliderPag__item').eq(0).addClass('sliderPag__item_active');

		setTimeout(function(){

			$('.loader').hide();
			
			p1 = new PageScroll('#bodyScroll');

			sliderStart = true;

		}, 2000);

	}, 2000);	

}, time);