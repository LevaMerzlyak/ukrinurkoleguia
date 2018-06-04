function MobileMenu(sSelector) {
	
	var m = this;

	m.header = $(sSelector);

	m.btn = m.header.find('.btn_mobMenu');

	var opened =  'header_mobMenuOpen';

	m.openClose = function (event) {
		
		event.preventDefault();

		m.header.toggleClass(opened);
		
		$('.grid').toggleClass('grid_mobMenu');

		p1.scrollBlock = !p1.scrollBlock;

		if (m.header.hasClass(opened) && p1.current == 0) {

			s1.stopSlider();

		} else {

			s1.changeSlider();
			
		}

	}
	
	m.btn.click(m.openClose);
}