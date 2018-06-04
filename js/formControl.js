function FormControl(sSelector) {
	
	var f = this;

	f.page = $(sSelector);

	f.select = f.page.find('#officesList');
	f.pseudoSelect = f.page.find('.contacts__offices');
	f.listOptions = f.page.find('.contactsOptions__wrap');
	f.option = f.listOptions.find('.contactsOptions__item');

	var openSelect = 'contactsOptions__wrap_open';
	f.open = false;

	f.showHideOptions = function () {
		
		f.listOptions.toggleClass(openSelect);

		f.open = !f.open;

		if (f.open) {

			$(document).bind('click', f.closeOptions);

		} else {

			$(document).unbind('click', f.closeOptions);

		}

	}

	f.closeOptions = function (event) {
		
		var target = $(event.target);

		if (!target.hasClass('contacts__offices')) {

			if (f.open) f.showHideOptions();

		}

	}

	f.changeOption = function (event) {
		
		var target = $(event.target)
			,text = target.text()
			,value = target.attr('id')
			;

		f.pseudoSelect.html(text);
		f.select.val(value).change();

	}

	f.changeSelect = function () {

		var offices = settings.get('offices')
			,currentOffice = f.select.val()
			;

		$.each(offices, function (className, officesData) {

			var currentElem = $('.' + className);

			currentElem.html(officesData[currentOffice]);

			if (currentElem.hasClass('contacts_phone1') || currentElem.hasClass('contacts_fax') || currentElem.hasClass('contacts_phoneFax')) {

				currentElem.attr('href', 'tel:' + officesData[currentOffice].replace(/\-|\(|\)|\s/gi, ""));

				if (officesData[currentOffice]) {

					currentElem.parents('.textWrap').show();

				} else {

					currentElem.parents('.textWrap').hide();

				}
			}

			if (currentElem.hasClass('contacts_phone2')) {

				currentElem.attr('href', 'tel:' + officesData[currentOffice].replace(/\-|\(|\)|\s/gi, ""));

				if (officesData[currentOffice]) {

					currentElem.show();

				} else {

					currentElem.hide();

				}

			}

			if (currentElem.hasClass('contacts_email')) {

				currentElem.attr('href', 'mailto:' + officesData[currentOffice]);

			}


		});

	}

	f.pseudoSelect.click(f.showHideOptions);
	f.option.click(f.changeOption);
	f.select.change(f.changeSelect);
	$(document).ready(f.changeSelect);

}