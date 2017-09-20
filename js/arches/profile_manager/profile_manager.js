//	JavaScript to Support Arches Graph/Resource Configuration
//	Version: 0.1
//


//	Widgets	
	$('.btn-profile-password').popover({ html : true});


// Toggle Resource/Records
	$('#account-edit-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//toggle panels
		$("#account-report").addClass('hidden');	
		$("#account-crud").removeClass('hidden');	

		//Update Button Text
		
	

	});




	$('#related-resources-open-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//toggle panels
		$("#current-resource-panel").addClass('hidden');	
		$("#related-resources-panel").removeClass('hidden');	

		//force map to show after div is no longer hidden
		$("#search-map-test").css("position", "inherit");
		window.dispatchEvent(new Event('resize'));
	

	});


	$('#related-resources-close-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//toggle panels
		$("#current-resource-panel").removeClass('hidden');	
		$("#related-resources-panel").addClass('hidden');	
	

	});



// Manage panels
	$('#lnk-resource-records').on('click', function (ev) {
		ev.preventDefault();
		
		//toggle panels
		$("#resource-records").removeClass('hidden');
		$("#resource-list").addClass('hidden');	
	
		//toggle link display
		$("#lnk-resource-records").addClass('active');
		$("#lnk-resource-list").removeClass('active');

	});








//	Edit History
	$('#history-manager').on('click', function (ev) {
		ev.preventDefault();
		
		$("#current-resource-panel").addClass('hidden');
		$("#edit-history-panel").removeClass('hidden');
		$("#menu-panel").css("display", "none");

	});