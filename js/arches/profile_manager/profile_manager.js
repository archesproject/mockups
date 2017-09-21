//	JavaScript to Support Arches Graph/Resource Configuration
//	Version: 0.1
//


//	Widgets	
	$('.btn-profile-password').popover({ html : true});


// Toggle Resource/Records
	$('#account-edit-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//toggle panels
		$("#account-report").toggle();	
		$("#account-crud").toggle();	

		//Update Buttons
		$("#account-edit-btn").toggle();
	    $("#account-edit-done-btn").toggle();
	});

	$('#account-edit-done-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//toggle panels
		$("#account-report").toggle();	
		$("#account-crud").toggle();	

		//Update Buttons
		$("#account-edit-btn").toggle();
	    $("#account-edit-done-btn").toggle();
	});


