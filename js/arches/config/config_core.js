//	JavaScript to Support Arches Core Configuration
//	Version: 0.1
//

//	Config_core page scripts
	$('#address-help').on('click', function (ev) {
			ev.preventDefault();

			// Show help/thesaurus panel
			$('.arches-help-container').css('left', '79.5%');
			$('.arches-form-container').css('right', '19%');
		
	});