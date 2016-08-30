//	JavaScript to Support Arches Graph/Resource Configuration
//	Version: 0.1
//


// Toggle Resource/Records
	$('#lnk-resource-records').on('click', function (ev) {
		ev.preventDefault();
		
		//toggle panels
		$("#resource-records").removeClass('hidden');	
		$("#resource-list").addClass('hidden');	
	
		//toggle link display
		$("#lnk-resource-records").addClass('active');
		$("#lnk-resource-list").removeClass('active');

	});





// Resource Instance Data Table
// Row selection (single row)
	// -----------------------------------------------------------------
	// var rowSelection = $('#demo-dt-selection').DataTable({
	// 	"responsive": true,
	// 	"language": {
	// 		"paginate": {
	// 		  "previous": '<i class="fa fa-angle-left"></i>',
	// 		  "next": '<i class="fa fa-angle-right"></i>'
	// 		}
	// 	}
	// });

	// $('#demo-dt-selection').on( 'click', 'tr', function () {
	// 	if ( $(this).hasClass('selected') ) {
	// 		$(this).removeClass('selected');
	// 	}
	// 	else {
	// 		rowSelection.$('tr.selected').removeClass('selected');
	// 		$(this).addClass('selected');
	// 	}
	// } );


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
	

// Find Resource/Graph
	$('.graph-find').on('click', function (ev) {
		ev.preventDefault();
		
		$(".find-widget").toggle();	
		$(".resource-tools").toggle();	
	
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


	//Report Manager Switches
	new Switchery(document.getElementById('report-section-visibility'), {size: 'small',});

	


// chosen
	$(".functions").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});


	$(".resources").chosen({
	  	disable_search_threshold: 1,
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


	// Manage display of form grid and form preview
	$('.form-grid-item').on('click', function (ev) {
		ev.preventDefault();
		
		//Update Panel Display (hide card library, show card manager, card manager tools)	
		$("#form-grid").toggle();
		$("#ep-form-crud-container").toggle();
		$("#ep-form-crud").toggle();
		$("#ep-form-crud-manager").toggle();

		$("#ep-settings-form-crud").toggle();
		$("#form-members-card").toggle();
		

		
		//Update Card Toolbar
		$("#form-grid-controls-btn-discard").toggle();
		$("#form-grid-controls-btn-save").toggle();

	});



//Manage Card Crud Forms
	$('#forms-btn').on('click', function (ev) {
		ev.preventDefault();

		//Toogle Form/Report TOCs
		$("#card-management-forms").fadeIn();
		$("#card-management-reports").fadeOut();

		$(".report-link").click();

	});

	$('#reports-btn').on('click', function (ev) {
		ev.preventDefault();

		//Toogle Form/Report TOCs
		$("#card-management-forms").fadeOut();
		$("#card-management-reports").fadeIn();

		$(".report-link").click();
	});



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
	
	$('#editor').summernote({height: 250});

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





// Report Manager
	//Manage NEW REPORT display
	$('.new-report').on('click', function (ev) {
		ev.preventDefault();
		
		//Update Panel Display (hide card library, show card manager, card manager tools)	
		$("#report-grid").addClass("new-card-indent");
		$("#ep-new-report-crud").addClass("show-card-library");
	});


	$('.dismiss-template-library').on('click', function (ev) {
		ev.preventDefault();

		$("#report-grid").removeClass("new-card-indent");
		$("#ep-new-report-crud").removeClass("show-card-library");

	});


	// Manage display of report template preview
	$('.report-template-item').on('click', function (ev) {
		ev.preventDefault();
		
		//Update Panel Display (hide template library, show template manager, template manager tools)	
		$("#report-grid").toggle();
		$("#report-image-grid").toggle();
		$("#ep-report-tools").toggle();
		$("#ep-report-header").toggle();

		$("#report-template-preview").toggle();
		//$("#report-card").toggle();


		//Update Card Toolbar
		$("#card-grid-controls-btn-discard").toggle();
		$("#card-grid-controls-btn-save").toggle();

		var reportMap = new GMaps({
			el: '#report-map',
			zoom: 11,
			scrollwheel: false,
			lat: 37.786095,
			lng: -122.09888,
			styles: [{"featureType":"all","elementType":"geometry","stylers":[{"gamma":"0.82"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"gamma":"1.21"}]},{"featureType":"all","elementType":"labels","stylers":[{"lightness":"-60"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"gamma":"5.37"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#419d8c"},{"lightness":"-39"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"saturation":"0"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#42738d"},{"gamma":"5.37"}]}]
		});


	});

	//Report Header Link
	$('.report-header').on('click', function (ev) {
		ev.preventDefault();

		//Close and Header, Footer, Widget Forms that are current open
		$( ".report-crud-form" ).each(function() {
			$( this ).css("display", "none");
		});

		//Show Report Section Form
		$('.report-header-crud-form').toggle();

	});


	//Report Section Link
	$('.report-section').on('click', function (ev) {
		ev.preventDefault();

		//Close and Header, Footer, Widget Forms that are current open
		$( ".report-crud-form" ).each(function() {
			$( this ).css("display", "none");
		});

		//Show Report Section Form
		$('.report-section-crud-form').toggle();

	});


	//Report Subsection Link
	$('.report-cc').on('click', function (ev) {
		ev.preventDefault();

		//Close and Header, Footer, Widget Forms that are current open
		$( ".report-crud-form" ).each(function() {
			$( this ).css("display", "none");
		});

		//Show Report Section Form
		$('.report-cc-crud-form').toggle();

	});


	//Report Tile Link
	$('.report-tile').on('click', function (ev) {
		ev.preventDefault();

		//Close and Header, Footer, Widget Forms that are current open
		$( ".report-crud-form" ).each(function() {
			$( this ).css("display", "none");
		});

		//Show Report Section Form
		$('.report-tile-crud-form').toggle();

	});


	//Report Footer Link
	$('.report-footer').on('click', function (ev) {
		ev.preventDefault();

		//Close and Header, Footer, Widget Forms that are current open
		$( ".report-crud-form" ).each(function() {
			$( this ).css("display", "none");
		});

		//Show Report Section Form
		$('.report-footer-crud-form').toggle();

	});






// Manage Widget Tools
	$('#widget-settings-btn').on('click', function (ev) {
		ev.preventDefault();
		
		$( "#widget-settings" ).fadeIn();
		$( ".library-tools .active" ).each(function() {
			$( this ).removeClass("active");
		});

		//Show Default Settings form, update tool display
		$("#widget-advanced-settings").fadeOut();
		$('#widget-settings-btn').addClass("active");
	});

	$('#widget-advanced-btn').on('click', function (ev) {
		ev.preventDefault();
		
		$( "#widget-settings" ).fadeOut();
		$( ".library-tools .active" ).each(function() {
			$( this ).removeClass("active");
		});

		//Show ADVANCED SETTINGS form, update tool display
		$("#widget-advanced-settings").fadeIn();
		$('#widget-advanced-btn').addClass("active");
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


	//Form Manager Menu
	$('#form-manager').on('click', function (ev) {
		ev.preventDefault();

		//Manage form manager CRUD forms
		$( ".fade .in" ).each(function() {
			$( this ).css( "display", "none" );
		});

		//Update Panel Display (hide card library, show card manager, card manager tools)	
		$("#form-library").toggle();

		//Update Menu display: remove 'selected' class from currently active menu item, set settings-manager to 
		//selected
		$( ".edit-menu-item.selected" ).each(function() {
			$( this ).removeClass( "selected" );
		});
		$('#form-manager').addClass('selected');

		//close menu
		$("#menu-panel").toggle();

	});


	//Reports Manager Menu
	$('#report-manager').on('click', function (ev) {
		ev.preventDefault();

		//Close the currently open panel, then open form manager
		$( ".fade .in" ).each(function() {
			$( this ).css( "display", "none" );
		});

		//Update Panel Display (hide card library, show card manager, card manager tools)	
		$("#report-library").toggle();

		//Update Menu display: remove 'selected' class from currently active menu item, set settings-manager to 
		//selected
		$( ".edit-menu-item.selected" ).each(function() {
			$( this ).removeClass( "selected" );
		});
		$('#report-manager').addClass('selected');

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
		
		//toggle display of link children
		var linkChildren = this.id;
		linkChildren = "#" + linkChildren + "-child";
		$(linkChildren).toggle();

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



// Alert Panel Example
	// Show Alert on discard edits
	$('#card-grid-controls-btn-discard').on('click', function (ev) {
		ev.preventDefault();

		// Show Alert Panel
		$('#card-alert-panel').fadeIn(600, "linear");


		//Add shim to card container
		$('#ep-card-crud-container').addClass("ep-form-alert-shim");

	});

	//dismiss alert
	$('.ep-form-alert-default-dismiss').on('click', function (ev) {
		ev.preventDefault();

		// Show Alert Panel
		$('#card-alert-panel').fadeOut(600, "linear");


		//Add shim to card container
		$('#ep-card-crud-container').removeClass("ep-form-alert-shim");

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



//Map
var markerMap = new GMaps({
	el: '#search-map',
	zoom: 11,
	scrollwheel: false,
	lat: 37.786095,
	lng: -122.09888,
	styles: [{"featureType":"all","elementType":"geometry","stylers":[{"gamma":"0.82"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"gamma":"1.21"}]},{"featureType":"all","elementType":"labels","stylers":[{"lightness":"-60"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"gamma":"5.37"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#419d8c"},{"lightness":"-39"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"saturation":"0"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#42738d"},{"gamma":"5.37"}]}]
});



//Map Tools
	$('.map-widget-container-closed').on('click', function (ev) {
		ev.preventDefault();
		
		//Open Tools Panel
		$(".map-widget-container-closed").addClass('map-widget-container-expanded');
		$(".map-widget-container-closed").removeClass('map-widget-container-closed');

		//Slide Geocode widget to make room
		$("#geocode-container").addClass('geocode-container-shim');

		//hide map tools icon
		$("#map-tools").toggle();

		//Show Default Tool Panel
		$("#map-widget-toolbar").delay(400).fadeIn(300);
		$("#map-widget-basemaps").delay(400).fadeIn(300);			
	});


	$('#close-map-tools').on('click', function (ev) {
		ev.preventDefault();
		
		//Open Tools Panel
		$(".map-widget-container-expanded").addClass('map-widget-container-closed');
		$(".map-widget-container-expanded").removeClass('map-widget-container-expanded');

		//Slide Geocode widget to make room
		$("#geocode-container").removeClass('geocode-container-shim');

		//show map tools icon
		$("#map-tools").toggle();

		//Hide Default Tool Panel
		$("#map-widget-toolbar").toggle();

		//close all map widget panels
		$( ".map-widget-panel" ).each(function() {
	    	$( this ).css("display", "none");
	  	});
	});


	//Basemap Item Highlight
	$('.map-widget-overlay-item').on('mouseover', function (ev) {
		ev.preventDefault();
		
		var kids = $( event.target ).children(); 
		var relatedIcon = kids.find("i");
		relatedIcon.addClass("in");
		relatedIcon.addClass("basemap-mask");

	});

	//Basemap Item Highlight
	$('.map-widget-overlay-item').on('mouseout', function (ev) {
		ev.preventDefault();
		
		var kids = $( event.target ).children(); 
		var relatedIcon = kids.find("i");
		relatedIcon.removeClass("in");
		relatedIcon.removeClass("basemap-mask");

	});


	//Overlays Panel
	$('#overlays').on('click', function (ev) {
		ev.preventDefault();
		
		//close all map widget panels
		$( ".map-widget-panel" ).each(function() {
	    	$( this ).css("display", "none");
	  	});

	  	//update toolbar buttons
	  	$(".map-widget-tool").each(function() {
	    	$( this ).removeClass("active");
	  	});

	  	$("#btn-overlays").addClass("active");

	  	//show overlays panel
	  	$( "#overlays-panel" ).fadeIn();
	});



	//Show Overlay Item tools
	$('.overlay-toggle').on('click', function (ev) {
		ev.preventDefault();
		
		//get id of selected overlay item
		var linkID = this.id;
		var linkNumber = linkID.split("-")[1];

		var container = "#op-" + linkNumber;
		var toolsPanel = "#op-" + linkNumber + "-tools";
		var icon = "#op-" + linkNumber + "-icon";

		//manage display of overlay tools
		if ($( icon ).hasClass("ion-arrow-left-b")) {
			$( container ).addClass("show-tools");
			$( toolsPanel ).delay(200).fadeIn();

			//update arrow
			$( icon ).removeClass("ion-arrow-left-b");
			$( icon ).addClass("ion-arrow-down-b");	

		} else {
			$( container ).removeClass("show-tools");
			$( toolsPanel ).toggle();

			//update arrow
			$( icon ).addClass("ion-arrow-left-b");
			$( icon ).removeClass("ion-arrow-down-b");	
		}
	
	});






//  Overlay Opacity Sliders
	// RANGE SLIDER PIPS
	// =================================================================
	var range_all_sliders = {
		'min': [ 0 ],
		'25%': [ 25 ],
		'50%': [ 50 ],
		'75%': [ 75 ],
		'max': [ 100 ]
	};



	// RANGE SLIDER - HORIZONTAL PIPS
	// =================================================================
	// Require noUiSlider
	// http://refreshless.com/nouislider/
	// =================================================================
	$("#op-1-slider").noUiSlider({
		range: range_all_sliders,
		connect: 'lower',
		start: 100
	});

	$("#op-2-slider").noUiSlider({
		range: range_all_sliders,
		connect: 'lower',
		start: 100
	});

	$("#op-3-slider").noUiSlider({
		range: range_all_sliders,
		connect: 'lower',
		start: 100
	});
	


