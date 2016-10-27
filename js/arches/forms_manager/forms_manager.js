//	JavaScript to Support Arches Functions Configuration
//	Version: 0.1
//


//	Add a new form
	$('#add-form').on('click', function (ev) {

		$(".library-card").removeClass("hidden");

	});	


//	Toggle Select Card Text
	$('.add-card-button').on('click', function (ev) {

		var button_id = $(this).attr('id');
		var card_id = "#" + button_id + "-card";

		//toggle card selection state
		if ($(this).text() == "Select Card") {

			//user wants to select the card
			$(this).text("Unselect Card");
			$(this).removeClass ("btn-primary");
			$(this).addClass ("btn-warning");

			//Select card
			$(card_id).addClass("selected");

		} else {

			//user wants to deselect the card
			$(this).text("Select Card");
			$(this).addClass ("btn-primary");
			$(this).removeClass ("btn-warning");

			//Unselect card
			$(card_id).removeClass("selected");

		}

		//$(this).text("Unselect Card");

	});	










