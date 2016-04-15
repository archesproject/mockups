//	JavaScript to Support Arches Map Configuration
//	Version: 0.1
//

//	Show drag/drop tool for widget ordering on card
	$('.widget-container').on('mouseover', function (ev) {
		ev.preventDefault();

		// Get User Input, Update title
		//$('.drag-tool-widget').css("display", "block");

		//
		$( ".drag-tool-widget" ).each(function() {
	    	$( this ).css("display", "block");
	  	});

	  	// $('.widgets').each(function() {
	   //  	$( '.drag-tool-widget' ).css("display", "inline-block");
	  	// });
	});

	$('.widget-container').on('mouseout', function (ev) {
		ev.preventDefault();

		// Get User Input, Update title
		$('.drag-tool-widget').css("display", "none");
		
	});


//	switches
	new Switchery(document.getElementById('toggle-library'), {size: 'small'});

	new Switchery(document.getElementById('card-container-visibility'), {size: 'small'});
	new Switchery(document.getElementById('card-container-active'), {size: 'small'});
	new Switchery(document.getElementById('card-visibility'), {size: 'small'});
	new Switchery(document.getElementById('card-active'), {size: 'small'});



// chosen
	$(".functions").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});

	$(".design").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});



// Card Manager Events
	
	// Manage display of card grid and card preview
	$('.card-grid-item').on('click', function (ev) {
		ev.preventDefault();
		$("label[for=toggle-cards]").trigger('click');	
	});


	$("label[for=toggle-cards]").on('click', function(){

		//Toggle display to card preview, 
		$("#card-grid").toggle(350);
		$("#card-preview").toggle(350);

		//Toggle toolbar display
		$("#card-grid-tools").toggle(350);
		$("#card-preview-tools").toggle(350);

	});


	// Manage display of card preview and report preview
	$('#report-manager').on('click', function (ev) {
		ev.preventDefault();

		// Manage Tool Panels
		$('#report-preview').removeClass("hidden");
		$('#report-preview').fadeIn(600, "linear");
		$('#data-preview').fadeOut(600, "linear");

		//Manage link display
		$('#report-manager').addClass("selected");
		$('#data-entry-manager').removeClass("selected");

		//Close Card Settings Panel
		$('card-preview-config-panel').removeClass('cd-config-panel-in');
		
	});


	$('#data-entry-manager').on('click', function (ev) {
		ev.preventDefault();

		// Manage Tool Panels
		$('#report-preview').addClass("hidden");
		$('#report-preview').fadeOut(600, "linear");
		$('#data-preview').fadeIn(600, "linear");

		//Manage link display
		$('#report-manager').removeClass("selected");
		$('#data-entry-manager').addClass("selected");

		//Close Card Settings Panel
		
	});


// Card Container Title Function
	$('#cc-title').on('click', function (ev) {
		ev.preventDefault();

		//show config panel if its not visible
		// $("#card-config-panel").addClass("panel-left-in");
		// $("#form-container").addClass("form-container-config-in");

		//if card library is not shown, use full display for card preview
		// if (changeCheckbox.checked) {
		// 	$("#form-container").removeClass("form-container-config-lib-in");
		// }

		//show card container level form
		$('#card-settings').css("display", "none");
		$('#card-settings').fadeOut(300, "linear");
		$('#card-container-settings').fadeIn(300, "linear");


		//continue to highlight panel, card container level buttons
		$('#card-container').addClass("editable-highlight");
		$('#cc-save-btn').removeClass("btn-editable");
		$('#cc-delete-btn').removeClass("btn-editable");
		
	});



//Card Tab Functions 
	$('.editable-card').on('click', function (ev) {
		ev.preventDefault();

		// if the config panel is closed, open it

		//show card form
		$('#card-settings').fadeIn(300, "linear");
		$('#card-container-settings').fadeOut(300, "linear");

	});



// UX/Editable Functions (MouseOver, MouseOut Events)
	
	//UX for Card Container Title
	$('#cc-title').on('mouseover', function (ev) {
		ev.preventDefault();

		// highlight card container level buttons
		$('#cc-save-btn').removeClass("btn-editable");
		$('#cc-delete-btn').removeClass("btn-editable");

		//fade cards, wizard level tile
		$('#cards').addClass("fade-back");
		$('.wizard-level-tile').addClass("fade-back");
	});

	$('#cc-title').on('mouseout', function (ev) {
		ev.preventDefault();

		// Remove highlight
		$('#cc-save-btn').addClass("btn-editable");
		$('#cc-delete-btn').addClass("btn-editable");

		//un-fade cards, wizard level tile
		$('#cards').removeClass("fade-back");
		$('.wizard-level-tile').removeClass("fade-back");
		
	});


	// UX for Wizard Level Tile
	$('.wizard-level-tile').on('mouseover', function (ev) {
		ev.preventDefault();

		//fade card container title, wizard level tile
		$('.editable').addClass("fade-back");
		$('#cards').addClass("fade-back");

		// Card container level buttons,
		$('#cc-save-btn').removeClass("btn-editable");
		$('#cc-delete-btn').removeClass("btn-editable");
		$('#cc-save-btn').addClass("fade-back");
		$('#cc-delete-btn').addClass("fade-back");
	
	});

	$('.wizard-level-tile').on('mouseout', function (ev) {
		ev.preventDefault();

		//fade card container title, wizard level tile
		$('.editable').removeClass("fade-back");
		$('#cards').removeClass("fade-back");

		// Card container level buttons,
		$('#cc-save-btn').addClass("btn-editable");
		$('#cc-delete-btn').addClass("btn-editable");
		$('#cc-save-btn').removeClass("fade-back");
		$('#cc-delete-btn').removeClass("fade-back");
	
	});


	function clearCardContainerHighlight() {
		// Remove highlight
		$('#card-container').removeClass("editable-highlight");
		$('#cc-save-btn').addClass("btn-editable");
		$('#cc-delete-btn').addClass("btn-editable");
	}


	//UX for Card Tabs
	$('.card-tab-title').on('mouseover', function (ev) {
		ev.preventDefault();

		//fade card container title, wizard level tile
		$('.editable').addClass("fade-back");
		$('.wizard-level-tile').addClass("fade-back");

		// Card container level buttons,
		$('#cc-save-btn').removeClass("btn-editable");
		$('#cc-delete-btn').removeClass("btn-editable");
		$('#cc-save-btn').addClass("fade-back");
		$('#cc-delete-btn').addClass("fade-back");

		//highlight card button
		$('#map-preview').removeClass("btn-editable");

		//card widgets
		$('.editable-widget').addClass("fade-back");

		
	});

	$('.card-tab-title').on('mouseout', function (ev) {
		ev.preventDefault();

		//fade card container title, wizard level tile
		$('.editable').removeClass("fade-back");
		$('.wizard-level-tile').removeClass("fade-back");

		// Card container level buttons,
		$('#cc-save-btn').addClass("btn-editable");
		$('#cc-delete-btn').addClass("btn-editable");
		$('#cc-save-btn').removeClass("fade-back");
		$('#cc-delete-btn').removeClass("fade-back");

		//highlight card button
		$('#map-preview').addClass("btn-editable");

		//card widgets
		$('.editable-widget').removeClass("fade-back");
		
	});





	$('#cc-form-delete-btn').on('click', function (ev) {
		ev.preventDefault();
		clearCardContainerHighlight();
		
	});


	$('.close-card-form').on('click', function (ev) {
		ev.preventDefault();

		//hide config panel
		$("#card-config-panel").removeClass("panel-left-in");
		$("#form-container").removeClass("form-container-config-in");
	});




// Form Manager Events

	// Manage display of form grid and card preview
	$('.form-item').on('click', function (ev) {
		ev.preventDefault();
		$("label[for=toggle-forms]").trigger('click');	
	});


	$("label[for=toggle-forms]").on('click', function(){

		//Toggle display to card preview, 
		$("#form-grid").toggle(350);
		$("#form-preview").toggle(350);

		//Toggle toolbar display
		$("#form-grid-tools").toggle(350);
		$("#form-preview-tools").toggle(350);

	});


	// Show Card library on "cards" tab click
	$('#card-list-tab').on('click', function (ev) {
		ev.preventDefault();
		
		//slide card library in, slide data entry card container over to make room
		$("#card-library").addClass('cd-config-panel-in');	
		$("#form-preview-data-entry-card").addClass('card-preview-indent');	

		
	});











