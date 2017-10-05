//	JavaScript to Support Arches Functions Configuration
//	Version: 0.1
//


//	Add Functions
	$('#btn-save-edits').on('click', function (ev) {
		ev.preventDefault();

		//Manage Display of Project listing
		$("#default-message-panel").addClass("hidden");
		$("#project-listing-panel").removeClass("hidden");

	});	


	$('.get-project-detail').on('click', function (ev) {
		ev.preventDefault();

		//Manage Display of Project listing
		$("#resource-cards").addClass("hidden");
		$("#card-detail").removeClass("hidden");

	});

	$('#card-detail').on('click', function (ev) {
		ev.preventDefault();

		//Manage Display of Project listing
		$("#resource-cards").removeClass("hidden");
		$("#card-detail").addClass("hidden");

	});

	$('.get-user-detail').on('click', function (ev) {
		ev.preventDefault();

		//Manage Display of Project listing
		$("#user-cards").addClass("hidden");
		$("#user-detail").removeClass("hidden");

	});

	$('#user-detail').on('click', function (ev) {
		ev.preventDefault();

		//Manage Display of Project listing
		$("#user-cards").removeClass("hidden");
		$("#user-detail").addClass("hidden");

	});




	

// http://abpetkov.github.io/switchery/
	new Switchery(document.getElementById('demo-sw-unchecked'), { size: 'small' });









