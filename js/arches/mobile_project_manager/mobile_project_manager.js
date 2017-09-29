//	JavaScript to Support Arches Functions Configuration
//	Version: 0.1
//


//	Add Functions
	$('#btn-save-edits').on('click', function (ev) {

		//Manage Display of Project listing
		$("#default-message-panel").addClass("hidden");
		$("#project-listing-panel").removeClass("hidden");


	});	



//	Add Function
	$('.add-function-button').on('click', function (ev) {

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
		if ($('#show-functions').text() == 'Close Function Library') {
			
			//User Wants to close library panel
			$("#function-library").addClass("hidden");
			$("#function-configuration").removeClass("hidden");

			//Update button text
			$('#show-functions').text('Show Function Library');

		}

	});	










