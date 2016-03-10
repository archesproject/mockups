//	JavaScript to Support Arches Map Configuration
//	Version: 0.1
//

// Card Container


	//Edit Card Container title
	$('#cc-title-link').on('click', function (ev) {
		ev.preventDefault();

		// Show Input, buttons
		$('#cc-title-input').fadeIn(450);
		$('#cc-title-save').fadeIn(450);
		$('#cc-title-cancel').fadeIn(450);

		$('#cc-title').fadeOut(450);
		
	});


	$('#cc-title-save').on('click', function (ev) {
		ev.preventDefault();

		// Get User Input, Update title
		var userInput = $('#cc-title-input').val();
		$('#cc-title').html(userInput);


		//Show Title, hide input/buttons
		$('#cc-title-input').fadeOut(450);
		$('#cc-title-save').fadeOut(450);
		$('#cc-title-cancel').fadeOut(450);

		$('#cc-title').fadeIn(450);
		$('#cc-title-link').fadeIn(450);
		
	});


//	Show drag/drop tool for widget ordering on card
	$('.widget-container').on('mouseover', function (ev) {
		ev.preventDefault();

		// Get User Input, Update title
		$('.drag-tool-widget').css("display", "block");
		
	});

	$('.widget-container').on('mouseout', function (ev) {
		ev.preventDefault();

		// Get User Input, Update title
		$('.drag-tool-widget').css("display", "none");
		
	});


//	switches
	new Switchery(document.getElementById('card-visibility'), {size: 'small'});



// chosen
	$('.design').chosen({width:'100%'});


//	Container functions
	$('#container-functions').on('click', function (ev) {
		ev.preventDefault();

		// Slide panels to expose input panle
		$('.cd-preview').css("left", "301px");
		$('.cd-config-panel').css("left", "0px");
		
	});
