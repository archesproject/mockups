//	JavaScript to Support Arches Graph/Resource Configuration
//	Version: 0.1
//


// Manage Edit Panel Tools Menu
	$("#menu-control").click(function(ev){
 		ev.preventDefault();

 		//Toogle display of menu panel
 		$("#menu-panel").toggle();
	});


	$("#help-control").click(function(ev){
 		ev.preventDefault();

 		//Toogle display of menu panel
 		$(".ep-help").toggle();
	});

	$("#close-help").click(function(ev){
 		ev.preventDefault();

 		//Toogle display of menu panel
 		$(".ep-help").toggle();
	});



// Resource Grid Item Highlight
	$('.resource-grid-item').on('mouseover', function (ev) {

		//select the 'resource-grid-main-container' div child
		var container = $( event.target ).closest('.resource-grid-main-container');
		container.addClass('container-highlight');

		var icon = $( event.target ).find('.resource-grid-icon');
		icon.addClass('resource-grid-icon-highlight');

		//$('.resource-grid-item .resource-grid-main-container .resource-grid-main .resource-grid-icon').addClass('resource-grid-icon-highlight');
		

		//$( event.target ).closest('.resource-grid-main-container').addClass('container-highlight');
		//$( event.target ).closest('.resource-grid-main-container').children('.resource-grid-main').children('.resource-grid-icon').addClass('resource-grid-icon-highlight');

	});

	$('.resource-grid-item').on('mouseout', function (ev) {

		//select the 'resource-grid-main-container' div child
		var container = $( event.target ).closest('.resource-grid-main-container');
		container.removeClass('container-highlight');

		var icon = $( event.target ).find('.resource-grid-icon');
		icon.removeClass('resource-grid-icon-highlight');

	});


// Manage Display of edit panel
	$('.resource-grid-item').on('click', function (ev) {
		ev.preventDefault();
		
		$("#content-container").addClass('hidden');	
		$("#edit-panel").addClass('in');	

		//hide nav, footer
		$('#mainnav-container').addClass('hidden');
		$('#navbar').addClass('hidden');
		$('#footer').addClass('hidden');
	
	});

	$('.dismiss-panel').on('click', function (ev) {
		ev.preventDefault();
		
		$("#content-container").removeClass('hidden');	
		$("#edit-panel").removeClass('in');	

		//show nav, footer
		$('#mainnav-container').removeClass('hidden');
		$('#navbar').removeClass('hidden');
		$('#footer').removeClass('hidden');
	
	
	});






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


	$(".resources").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});

	$(".multiple").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%',
	  	multiple: true
	});





// Card Manager Events
	//Manage NEW CARD display
	$('.new-card').on('click', function (ev) {
		ev.preventDefault();
		
		//Update Panel Display (hide card library, show card manager, card manager tools)	
		$("#card-grid").toggle();
		$("#ep-new-card-crud").toggle();
		$("#ep-selected-card-crud").toggle();
		$("#card-pre-drop").toggle();
		$("#card-pre-drag").toggle();
		

		//Update Card Toolbar
		$("#card-grid-controls-btn-discard").toggle();
		$("#card-grid-controls-btn-save").toggle();

	});
	
	// Manage display of card grid and card preview
	$('.card-grid-item').on('click', function (ev) {
		ev.preventDefault();
		
		//Update Panel Display (hide card library, show card manager, card manager tools)	
		$("#card-grid").toggle();
		$("#card-preview").toggle();
		$("#ep-card-tools").toggle();
		$("#ep-card-crud").toggle();

		$("#card-preview-crud").toggle();
		$("#summary-card").toggle();


		//Update Card Toolbar
		$("#card-grid-controls-btn-discard").toggle();
		$("#card-grid-controls-btn-save").toggle();

	});


	//Settings Menu
	$('#settings-manager').on('click', function (ev) {
		ev.preventDefault();

		//Close the currently open panel, them open card manager
		$( ".fade .in" ).each(function() {
			$( this ).css( "display", "none" );
		});

		//Update Panel Display (hide card library, show card manager, card manager tools)	
		$("#settings-form").toggle();
		$("#settings-form-crud").toggle();
		$("#id-card").toggle();

		//Update Menu display: remove 'selected' class from currently active menu item, set settings-manager to 
		//selected
		$( ".edit-menu-item.selected" ).each(function() {
			$( this ).removeClass( "selected" );
		});
		$('#settings-manager').addClass('selected');

		//close menu
		$("#menu-panel").toggle();

	});


	//Graph Manager Menu
	$('#graph-manager').on('click', function (ev) {
		ev.preventDefault();

		//Close the currently open panel, them open card manager
		$( ".fade .in" ).each(function() {
			$( this ).css( "display", "none" );
		});

		//Update Panel Display (hide card library, show card manager, card manager tools)	
		$("#graph-container").toggle();

		

		//Update Menu display: remove 'selected' class from currently active menu item, set settings-manager to 
		//selected
		$( ".edit-menu-item.selected" ).each(function() {
			$( this ).removeClass( "selected" );
		});
		$('#graph-manager').addClass('selected');

		//close menu
		$("#menu-panel").toggle();

	});



	//Card Manager Menu
	$('#card-manager').on('click', function (ev) {
		ev.preventDefault();

		//Close the currently open panel, them open card manager
		$( ".fade .in" ).each(function() {
			$( this ).css( "display", "none" );
		});

		//Update Panel Display (hide card library, show card manager, card manager tools)	
		$("#card-library").toggle();

		//Update Menu display: remove 'selected' class from currently active menu item, set settings-manager to 
		//selected
		$( ".edit-menu-item.selected" ).each(function() {
			$( this ).removeClass( "selected" );
		});
		$('#card-manager').addClass('selected');

		//close menu
		$("#menu-panel").toggle();

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




//Card Tab Functions 
	$('.editable-card').on('click', function (ev) {
		ev.preventDefault();

		// if the config panel is closed, open it

		//show card form
		$('#card-settings').fadeIn(300, "linear");
		$('#card-container-settings').fadeOut(300, "linear");

	});



// UX/Editable Functions (MouseOver, MouseOut Events)
	
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





$('.ion-ios-trash').on('click', function(ev){
	//console.log("trashing");
	ev.preventDefault();

	//push content to accomodate alert
	$('#external-page-content').addClass('slide-down');

    $.niftyNoty({
        type: 'danger',
        container : '#edit-page-alert',
        html : '<h4 class="alert-title">Oh snap! You got an error!</h4><p class="alert-message">Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p><div class="mar-top"><button type="button" class="btn btn-danger" data-dismiss="noty">Close this notification</button></div>',
        closeBtn : false
    });
});









