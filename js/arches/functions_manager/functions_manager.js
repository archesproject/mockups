//	JavaScript to Support Arches Functions Configuration
//	Version: 0.1
//


//	Add Functions
	$('#show-functions').on('click', function (ev) {

		//Manage Display of Function Library/Configuration Panel
		if ($('#show-functions').text() == 'Close Function Library') {
			
			//User Wants to close library panel
			$("#function-library").addClass("hidden");
			$("#function-configuration").removeClass("hidden");

			//Update button text
			$('#show-functions').text('Show Function Library');

		} else {

			//User Wants to open library panel
			$("#function-library").removeClass("hidden");
			$("#function-configuration").addClass("hidden");
			
			//Update button text
			$('#show-functions').text('Close Function Library');
		}

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










