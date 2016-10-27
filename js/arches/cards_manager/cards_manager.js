//	JavaScript to Support Arches Functions Configuration
//	Version: 0.1
//

//	dropdown
	$(".resources").chosen({
	  	disable_search_threshold: 1,
	  	inherit_select_classes: true,
	  	width: '100%'
	});


//	Add Functions
	$('#show-functions').on('click', function (ev) {

		//Manage Display of Function Library/Configuration Panel
		if ($('#show-functions').text() == 'Close Card Library') {
			
			//User Wants to close library panel
			$("#function-library").addClass("hidden");
			$("#function-configuration").removeClass("hidden");
			$(".middle-column-container").removeClass("hidden");

			//Update button text
			$('#show-functions').text('Open Card Library');

		} else {

			//User Wants to open library panel
			$("#function-library").removeClass("hidden");
			$("#function-configuration").addClass("hidden");
			$(".middle-column-container").addClass("hidden");
			
			//Update button text
			$('#show-functions').text('Close Card Library');
		}

	});	



//	Add Function
	$('.add-card-button').on('click', function (ev) {

		//get id of user selected function
		// var functionID = ev.target.id;
		// var functionNameID = functionID + "-name";
		// var parent = "'#" + functionNameID + "'";

		//Hide default message in Functions list, add entry
		$(".left-column-message").addClass("hidden");
		$(".library-card").removeClass("hidden");

	});



//	Clicking on a function in the function list should act like clicking the show function library button
	$('.library-card').on('click', function (ev) {

		//if function library is open, close it and update show library button
		if ($('#show-functions').text() == 'Close Card Library') {
			
			//User Wants to close library panel
			$("#function-library").addClass("hidden");
			$("#function-configuration").removeClass("hidden");
			$(".middle-column-container").removeClass("hidden");

			//Update button text
			$('#show-functions').text('Open Card Library');

			$("#card-grid-tools").removeClass("hidden");


			//Replace Card Listing with Card Node Tree
			$("#cards-list").addClass("hidden");
			$("#selected-card").removeClass("hidden");

		}

	});	



//	Return to card list
	$('#card-name').on('click', function (ev) {

		//Show Card Listing 
		$("#cards-list").removeClass("hidden");
		$("#selected-card").addClass("hidden");

		$("#card-grid-tools").addClass("hidden");

		$("#function-library").removeClass("hidden");
		$("#function-configuration").addClass("hidden");
		$(".middle-column-container").addClass("hidden");



	});	










