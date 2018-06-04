function MobileMenu(sSelector) {
	
	var m = this;

	m.header = $(sSelector);

	m.btn = m.header.find('.btn_mobMenu');

	var opened =  'header_mobMenuOpen';

	m.openClose = function (event) {
		
		event.preventDefault();

		m.header.toggleClass(opened);
		
		$('.grid_top').toggleClass('grid_mobMenu');

	}
	
	m.btn.click(m.openClose);
}