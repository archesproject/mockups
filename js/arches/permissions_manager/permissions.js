//	JavaScript to Support Arches Permissions Configuration
//	Version: 0.1
//



//	Manage Select State of Group/Account and Disable state of resource model nodes
	$('.permissions').on('click', function (ev) {
		ev.preventDefault();

		
		// Allow user to select one group
		$( ".permissions" ).each(function() {
			$( this ).removeClass( "selected" );
		});

		$( this ).addClass( "selected" );

		//Update List on settings form
		$("#account-list-empty").addClass("hidden");
		$("#account-list").removeClass("hidden");

	});


//	Show Node Selection Tools
	$('.node-entry').on('mouseover', function (ev) {
		ev.preventDefault();
		$(this).find($("div .node-selection-tools")).removeClass("hidden");	
	});

	$('.node-entry').on('mouseout', function (ev) {
		ev.preventDefault();
		$(this).find($("div .node-selection-tools")).addClass("hidden");	
	});


//	Toggle Node Children Display
	$('#cc-expand-1').on('click', function (ev) {

		var parent = '#cc-expand';

		//toggle card container children
		if ($("#cc-expand-1").hasClass("ion-arrow-left-b")) {
		    $(parent).find($("div .card-container-children")).css("display", "block");
		    $("#cc-expand-1").removeClass("ion-arrow-left-b");
		    $("#cc-expand-1").addClass("ion-arrow-down-b");

		} else { 
		    $(parent).find($("div .card-container-children")).css("display", "none");
		    $("#cc-expand-1").addClass("ion-arrow-left-b");
		    $("#cc-expand-1").removeClass("ion-arrow-down-b");
		}

	});


// Select Card Container Children
	$('#cc-select-1').on('click', function (ev) {

		var parent = '#cc-expand';

		//toggle card container children
		if ($(parent).hasClass("selected")) {

			//Unselect all children nodes
			$( ".node-entry" ).each(function() {
				$( this ).removeClass( "selected" );
			});
		    
		    //Update toggle icon
		    $( ".fa-toggle-on" ).each(function() {
				$( this ).addClass( "fa-toggle-off" );
				$( this ).removeClass( "fa-toggle-on" );
			});

		    //Disable Form
	 		$("#cc-save-btn").prop('disabled', true);
	 		$("#cc-delete-btn").prop('disabled', true);

		} else { 
		    //Select all children nodes
		    $( ".node-entry" ).each(function() {
				$( this ).addClass( "selected" );
			});

		    $( ".fa-toggle-off" ).each(function() {
				$( this ).addClass( "fa-toggle-on" );
				$( this ).removeClass( "fa-toggle-off" );
			});

		    //Enable Form
	 		$("#cc-save-btn").prop('disabled', false);
	 		$("#cc-delete-btn").prop('disabled', false);
		}


		//Update node list
		$("#node-list-empty").addClass("hidden");
		$("#node-list").removeClass("hidden");

	});


//	Show confirmation on save
	$('#cc-save-btn').on('click', function (ev) {

		$(".confirmation").removeClass("hidden");

	});	


//	Update Select All button text
	$('#select-groups').on('click', function (ev) {

		//If text is "Select all", toggle to "Unselect All"
		if ($('#select-groups').text() == 'Show Accounts') {
			$('#select-groups').text('Show Groups');
		} else {
			$('#select-groups').text('Show Accounts');
		}
	});	


	$('#expand-nodes').on('click', function (ev) {

		//If text is "Select all", toggle to "Unselect All"
		if ($('#expand-nodes').text() == 'Expand All') {
			$('#expand-nodes').text('Collapse All');
		} else {
			$('#expand-nodes').text('Expand All');
		}
	});	





// Toggle Node Children Display
	// $('.node-card-container').on('click', function (ev) {

	// 	//toggle card container children
	// 	if ($(this).find($("div .card-container-children")).is(":visible")) {
	// 	    $(this).find($("div .card-container-children")).css("display", "none");

	// 	} else { 
	// 	    $(this).find($("div .card-container-children")).css("display", "block");
	// 	}

	// });




// Select all nodes in a card container 
	$('.select-child-nodes').on('click', function (ev) {

		console.log("click!")


	});


// Manage Select State of Nodes and Disable state of Data Entry Form
	// $('.node-entry').on('click', function (ev) {
	// 	ev.preventDefault();

	// 	var counter=0;

	// 	//Toggle the group/account that the user clicked
	// 	if ($(this).hasClass("selected")) {
		    
	// 		//User clicked on a previously selected group/account.  Toggle it off
	// 	    $(this).removeClass("selected");
	// 	    counter--;

	// 	} else {

	// 		//User wants to selecte group/account.  Toggle it on 
	// 		$(this).addClass("selected");
	// 	    counter++;   
	// 	}


	// 	//If user has at least one node selected, enable Form
	// 	if (counter >> 0) {
		    
	// 		//Enable Form
	// 		$("#permissions-form").removeClass("form-disabled");
	// 		$("#cards").removeClass("cards-disabled");
	// 		$(".permission-buttons").removeClass("form-buttons-disabled");


	// 	} else {

	// 		//Disable Form
	// 		$("#permissions-form").addClass("form-disabled");
	// 		$("#cards").addClass("cards-disabled");
	// 		$(".permission-buttons").addClass("form-buttons-disabled");
			  
	// 	}

	// 	console.log(counter);

	// });









