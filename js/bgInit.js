function BgInit(sSelector) {
	
	var b = this;

	b.container = $(sSelector);
	b.img = b.container.find('.bg__img');
	b.imgSrc = b.img.attr('src');
	b.parts = b.container.find('.bg__inner');

	b.initBg = function () {
		
		b.parts.css('background-image', 'url(' + b.imgSrc + ')');
	}

	$(document).ready(b.initBg);

}