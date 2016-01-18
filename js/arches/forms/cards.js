// Summernote Editor
	$('#condition-summernote').summernote({
		height: 150,
		placeholder: 'placeholder text'
	});


// Date Picker
	$('#condition-dp input').datepicker();


// Disturbance Multiselect
	$('#disturbance-multiselect').chosen({width:'100%'});
	$('#recomend-multiselect').chosen({width:'100%'});
	$('#threat-multiselect').chosen({width:'100%'});


// Help Panel
	$('#address-help').on('click', function (ev) {
		ev.preventDefault();

		// Show help/thesaurus panel
		$('.arches-help-container').css('left', '80%');
		$('.arches-form-container').css('right', '19%');

		
	});


//	Addresses Card
	$('#address-add').on('click', function (ev) {
		ev.preventDefault();

		// Card Alert (Uncomment to show alert panel and notification text)
		// $.niftyNoty({
		//     type: 'danger',
		//     container : '#address-alert',
		//     html : '<h4 class="alert-title">Oh snap! You got an error!</h4><p class="alert-message">Change this and that and try again. Duis mollis, est non commodo luctus.</p><div class="mar-top"><button type="button" class="btn btn-danger" data-dismiss="noty">Close this notification</button></div>',
		//     closeBtn : false
		// });

		// Show results grid
		//$('#address-results').addClass('in');
		$('#address-results').fadeIn(2000);
		//$('#address-results').removeClass('hidden').delay(1000);
		
	});


//	Condition Wizard
	$('#condition-start').on('click', function (ev) {
		ev.preventDefault();

		// Show wizard forms
		$('#condition-forms').fadeIn(450);
		$('#condition-forms').removeClass('hidden');
		$('#condition-forms').addClass('in');
		
	});

	$('#condition-add').on('click', function (ev) {
		ev.preventDefault();

		// Show results tiles
		//$('#condition-results').fadeIn(450);
		$('#condition-results').removeClass('hidden');
		$('#condition-results').addClass('in');

	});


// Map Form
	$('#geometry-creation').on('change', function(){
		
		$('#geometry-related-nodes').addClass('in');


	});

	$('#close-form').on('click', function(){

		$('#geometry-related-nodes').removeClass('in');
		$('#map-results').addClass('in');
		$('#map-results').removeClass('hidden');


	});

















	