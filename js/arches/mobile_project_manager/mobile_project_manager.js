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


	var changeCheckbox = document.querySelector('#activate-data');

	changeCheckbox.onchange = function() {
	  	//Manage Display of Data query panel
		$("#data-definition").removeClass("hidden");
	};


	//Manage Download definition type
	$('#custom-download').on('click', function (ev) {
		ev.preventDefault();

		//Manage Button Display
		$("#standard-download").removeClass("active");
		$("#custom-download").addClass("active");

		//Manage Panel Display
		$("#custom-download-panel").removeClass("hidden");
		$("#standard-download-panel").addClass("hidden");

	});

	$('#standard-download').on('click', function (ev) {
		ev.preventDefault();

		//Manage Button Display
		$("#custom-download").removeClass("active");
		$("#standard-download").addClass("active");

		//Manage Panel Display
		$("#standard-download-panel").removeClass("hidden");
		$("#custom-download-panel").addClass("hidden");

	});

	

// http://abpetkov.github.io/switchery/
	new Switchery(document.getElementById('demo-sw-unchecked'), { size: 'small' });
	new Switchery(document.getElementById('activate-project'), { size: 'small' });
	new Switchery(document.getElementById('wipe-project'), { size: 'small' });
	new Switchery(document.getElementById('activate-data'), { size: 'small' });







