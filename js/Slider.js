function Slider(sSelector) {

	var s = this;

	s.slider 	= $(sSelector);
	s.slide 	= s.slider.find('.slide');
	s.length 	= s.slide.length;
	s.slideActive = 'slide_active';

	s.cntrl = s.slider.find('.sliderControls__link');

	s.pags 		= s.slider.find('.sliderPag');
	s.pagsItem 	= s.pags.find('.sliderPag__item');
	s.pag 		= s.pags.find('.sliderPag__link');
	s.pagActive = 'sliderPag__item_active';

	s.shift = 0;
	

	s.pagInit = function () {

		var item = s.pags.html();
		
		for (var i = 1; i < s.length; i++) {

			s.pags.append(item);

		}

		s.pags 		= s.slider.find('.sliderPag');
		s.pagsItem 	= s.pags.find('.sliderPag__item');
		s.pag 		= s.pags.find('.sliderPag__link');

		s.pag.each(function (index, el) {
			// el == this;
			$(el).text('0' + (index + 1));

		});
		
		s.pag.bind("click", s.pagination);
		s.pag.bind("mouseenter", s.stopSlider);
		s.pag.bind("mouseleave", s.changeSlider);

	};

	s.pagination = function (event) {

		event.preventDefault();

		var  target = $(event.target)
			,current = target.parent()
			,pag = current.index()
			;

		s.showSlide(pag);

		s.shift = pag;

	}

	s.control = function (event) {
		
		event.preventDefault();

		var target = $(event.target);

		console.log('shift' + s.shift);

		if (target.hasClass('sliderControls__link_prev') || target.parent().hasClass('sliderControls__link_prev')) {

			s.shift -= 1;

		} else if (target.hasClass('sliderControls__link_next') || target.parent().hasClass('sliderControls__link_next')) {

			s.shift += 1;

		}

		console.log(s.shift + "shift");

		s.display(s.shift);

	}

	s.display = function (index) {
		
		if (index < 0) {

			s.shift = s.length - 1;

		} else if (index > s.length - 1) {

			s.shift = 0;

		}

		s.showSlide(s.shift);

	}

	s.showSlide = function (index) {
		
		var  active = s.slider.find('.' + s.slideActive)
			,prev = s.slider.find('.slide_prev')
			,pag = s.slider.find('.' + s.pagActive)
			;

		active.removeClass(s.slideActive).addClass('slide_prev');
		s.slide.eq(index).addClass(s.slideActive);
		setTimeout(function(){

			active.removeClass('slide_prev');

		}, 2000);
		pag.removeClass(s.pagActive);
		s.pagsItem.eq(index).addClass(s.pagActive);
	}

	var slideChanger;
	s.changeDelay = 5000;
	s.changeSlider = function () {
		
	    slideChanger = setInterval(changeSlide, s.changeDelay);
		function changeSlide() {

			s.shift ++;
			s.display(s.shift);

		};

	}

	s.stopSlider = function () {
		
		clearInterval(slideChanger);

	}

	var ifLoaded = setInterval(loading, 1000);
	function loading() {

		if (!sliderStart) return;
		setTimeout(s.changeSlider(), s.changeDelay);
		clearInterval(ifLoaded);

	}

	s.cntrl.bind("click", s.control);
	s.cntrl.bind("mouseenter", s.stopSlider);
	s.cntrl.bind("mouseleave", s.changeSlider);
	$(document).ready(s.pagInit);
}