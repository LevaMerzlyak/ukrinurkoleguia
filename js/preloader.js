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

		setTimeout(function(){

			$('.loader').hide();

		}, 2000);

	}, 2000);	

}, time);