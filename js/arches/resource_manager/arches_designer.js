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

	//Card CRUD forms
	new Switchery(document.getElementById('card-cardinality'), {size: 'small',});


	new Switchery(document.getElementById('enable-card-help'), {size: 'small',});
	new Switchery(document.getElementById('preview-card-help'), {size: 'small',});



	


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
		$("#card-grid").addClass("new-card-indent");
		$("#ep-new-card-crud").addClass("show-card-library");

		//Update Card Toolbar
		// $("#card-grid-controls-btn-discard").toggle();
		// $("#card-grid-controls-btn-save").toggle();

	});



	$('.dismiss-card-library').on('click', function (ev) {
		ev.preventDefault();

		$("#card-grid").removeClass("new-card-indent");
		$("#ep-new-card-crud").removeClass("show-card-library");

	});

	
	// Manage display of card grid and card preview
	$('.card-grid-item').on('click', function (ev) {
		ev.preventDefault();
		
		//Update Panel Display (hide card library, show card manager, card manager tools)	
		$("#card-grid").toggle();
		$("#card-preview").toggle();
		$("#ep-card-tools").toggle();
		$("#ep-card-container-crud").toggle();

		$("#card-preview-crud").toggle();
		$("#summary-card").toggle();


		//Update Card Toolbar
		$("#card-grid-controls-btn-discard").toggle();
		$("#card-grid-controls-btn-save").toggle();

	});



//Manage Card Crud Forms

	//Show Card level CRUD Form
	$('.card-link').on('click', function (ev) {
		ev.preventDefault();
		
		//Hide Any Card Container or Widget Forms
		$("#ep-card-container-crud").fadeOut();
		$("#ep-widget-crud").fadeOut();

		//Show Card CRUD
		$("#ep-card-crud").fadeIn();

		//remove all "active" links, active this link
		$( ".cc-link" ).each(function() {
			$( this ).removeClass("active");
		});

		$( this ).addClass("active");

		//Toogle Card Preview and Report Previews
		$("#card-preview").fadeIn();
		$("#report-preview").fadeOut();

	});

	$('.card-widget-link').on('click', function (ev) {
		ev.preventDefault();
		
		//Hide Any Card Container or Widget Forms
		$("#ep-card-crud").fadeOut();
		$("#ep-card-container-crud").fadeOut();
		

		//Show Card CRUD
		$("#ep-widget-crud").fadeIn();

		//remove all "active" links, active this link
		$( ".cc-link" ).each(function() {
			$( this ).removeClass("active");
		});

		$( this ).addClass("active");

		//Toogle Card Preview and Report Previews
		$("#card-preview").fadeIn();
		$("#report-preview").fadeOut();

	});

	$('.card-container-link').on('click', function (ev) {
		ev.preventDefault();
		
		//Hide Any Card Container or Widget Forms
		$("#ep-card-crud").fadeOut();
		$("#ep-widget-crud").fadeOut();

		//Show Card CRUD
		$("#ep-card-container-crud").fadeIn();

		//remove all "active" links, active this link
		$( ".cc-link" ).each(function() {
			$( this ).removeClass("active");
		});

		$( this ).addClass("active");

		//Toogle Card Preview and Report Previews
		$("#card-preview").fadeIn();
		$("#report-preview").fadeOut();

	});

	//Card Help Panel
	$('#enable-card-help').change(function() {
        
		// If user enables Card Level Help, show help CRUD form and Help link
        if($(this).is(":checked")) {
            $("#help-text-crud").fadeIn();
            $("#card-help-link").fadeIn();
        } else {
        	$("#help-text-crud").fadeOut();
        	$("#card-help-link").fadeOut();
        }    
    });

	// Help WYSIWYG Editor
    $('#help-editor').summernote({height: 250});
    //$('.note-toolbar .note-insert, .note-toolbar .note-table, .note-toolbar .note-style:first, .note-toolbar .note-para').remove();
	

    //Preview Help Panel
    $('#preview-card-help').change(function() {
        
		// If user enables Card Level Help, show help CRUD form
        if($(this).is(":checked")) {
            $("#card-help-panel").fadeIn();
        } else {
        	$("#card-help-panel").fadeOut();
        }    
    });


    //Card-Level Cardinality Panel
	$('#card-cardinality').change(function() {
        
		// If user enables Card Level Help, show help CRUD form and Help link
        if($(this).is(":checked")) {
            $(".cardinality-form").fadeIn();
            $("#card-save-tile-btn").fadeIn();
            $("#card-save-tile-list").fadeIn();
        } else {
        	$(".cardinality-form").fadeOut();
        	$("#card-save-tile-btn").fadeOut();
        	$("#card-save-tile-list").fadeOut();
        }    
    });



// Manage Toggles for CARD crud form
	$('#card-crud-settings').on('click', function (ev) {
		ev.preventDefault();
		
		//Hide All CARD toggle forms, de-active currently active tool icon
		$( ".ep-card-crud-panel .card-crud" ).each(function() {
			$( this ).fadeOut();
		});
		$( "#help-text-crud" ).each(function() {
			$( this ).fadeOut();
		});
		$( ".library-tools .active" ).each(function() {
			$( this ).removeClass("active");
		});

		//Show SETTINGS form, update tool display
		$("#ep-card-crud-settings").fadeIn();
		$('#card-crud-settings').addClass("active");
	});

	$('#card-crud-advanced').on('click', function (ev) {
		ev.preventDefault();
		
		//Hide All CARD toggle forms, de-active currently active tool icon
		$( ".ep-card-crud-panel .card-crud" ).each(function() {
			$( this ).fadeOut();
		});
		$( "#help-text-crud" ).each(function() {
			$( this ).fadeOut();
		});
		$( ".library-tools .active" ).each(function() {
			$( this ).removeClass("active");
		});

		//Show ADVANCED SETTINGS form, update tool display
		$("#ep-card-crud-advanced").fadeIn();
		$('#card-crud-advanced').addClass("active");
	});

	$('#card-crud-validation').on('click', function (ev) {
		ev.preventDefault();
		
		//Hide All CARD toggle forms, de-active currently active tool icon
		$( ".ep-card-crud-panel .card-crud" ).each(function() {
			$( this ).fadeOut();
		});
		$( "#help-text-crud" ).each(function() {
			$( this ).fadeOut();
		});
		$( ".library-tools .active" ).each(function() {
			$( this ).removeClass("active");
		});

		//Show VALIDATION form, update tool display
		$("#ep-card-crud-validation").fadeIn();
		$('#card-crud-validation').addClass("active");
	});

	$('#card-crud-permissions').on('click', function (ev) {
		ev.preventDefault();
		
		//Hide All CARD toggle forms, de-active currently active tool icon
		$( ".ep-card-crud-panel .card-crud" ).each(function() {
			$( this ).fadeOut();
		});
		$( "#help-text-crud" ).each(function() {
			$( this ).fadeOut();
		});
		$( ".library-tools .active" ).each(function() {
			$( this ).removeClass("active");
		});

		//Show PERMISSIONS form, update tool display
		$("#ep-card-crud-permissions").fadeIn();
		$('#card-crud-permissions').addClass("active");
	});


	$('#card-crud-help').on('click', function (ev) {
		ev.preventDefault();
		
		//Hide All CARD toggle forms, de-active currently active tool icon
		$( ".ep-card-crud-panel .card-crud" ).each(function() {
			$( this ).fadeOut();
		});
		$( ".library-tools .active" ).each(function() {
			$( this ).removeClass("active");
		});

		//Show HELP form, update tool display
		$("#ep-card-crud-help").fadeIn();
		$('#card-crud-help').addClass("active");
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



// Report Tile
	//Show Card level CRUD Form
	$('.report-link').on('click', function (ev) {
		ev.preventDefault();
		
		//Hide Any Card Container or Widget Forms
		$("#ep-card-container-crud").fadeOut();
		$("#ep-widget-crud").fadeOut();

		//Show Report Tile CRUD
		$("#ep-report-crud").fadeIn();

		//remove all "active" links, active this link
		$( ".cc-link" ).each(function() {
			$( this ).removeClass("active");
		});

		$( this ).addClass("active");

		//Toogle Card Preview and Report Previews
		$("#card-preview").fadeOut();
		$("#report-preview").fadeIn();
		

	});


// Permissions Functions
	//	Library Panel
	$('#permissions-close').on('click', function (ev) {
		ev.preventDefault();
		$('#permissions-crud').fadeOut();

		//"unselect" permissions items
		$( "#user-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});
	});

	
	$('.library-card.permissions').on('click', function (ev) {
		ev.preventDefault();
		$(this).toggleClass("selected-card");
		$('#permissions-crud').fadeIn();

		//console.log('permission card clicked')
	});


	$('.library-card.graph-library').on('click', function (ev) {
		ev.preventDefault();

		// Clear all selected branches
		$( "#branch-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});

	  	//Highlight selected branch
		$(this).toggleClass("selected-card");
		$('#branch-panel').fadeIn(100, "linear");

		//console.log('permission card clicked')
	});


	$('.library-card.node-list').on('click', function (ev) {
		ev.preventDefault();
		$(this).toggleClass("selected-card");
	});


	$('#apply-permissions').on('click', function (ev) {
		ev.preventDefault();
		$('#confirm-permissions').fadeIn();
	});


	$('#clear-user-selection').on('click', function (ev) {
		ev.preventDefault();
	  	$( "#user-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});
	});


	$('#clear-node-selection').on('click', function (ev) {
		ev.preventDefault();
	  	$( "#node-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});
	});


//	Toggle all accounts when user selects "all"
	$('#all').on('click', function (ev) {
		ev.preventDefault();

		if ($('#all').hasClass("selected-card")) {
		    $( "#user-grid>div" ).each(function() {
		    	$( this ).addClass( "selected-card" );
		  	});
		
		} else { 
		    console.log("update accounts to selected");
		    $( "#user-grid>div" ).each(function() {
		    	$( this ).removeClass( "selected-card" );
		  	});
		}

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



	// Show Card library on "cards" tab click
	$('#card-list-tab').on('click', function (ev) {
		ev.preventDefault();
		
		//slide card library in, slide data entry card container over to make room
		$("#card-library").addClass('cd-config-panel-in');	
		$("#form-preview-data-entry-card").addClass('card-preview-indent');	

		
	});












