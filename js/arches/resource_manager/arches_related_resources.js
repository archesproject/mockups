//	JavaScript to Support Arches Graph/Resource Configuration
//	Version: 0.1
//


	$('#editor').summernote({height: 150});
	

//	Manage Search Panels
	$('#search-rr-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//Show Map Search Panel, Hide Related Resources Drag Panel, CRUD Panel
		$( ".search-container" ).each(function() {
			$( this ).addClass( "hidden" );
		});

		$("#related-resoureces-drag-panel").removeClass('hidden');
		$("#related-resourced-crud").removeClass('hidden');
			
	
		//toggle link display
		$( ".search-filter" ).each(function() {
			$( this ).removeClass( "active" );
		});

		$("#search-rr-btn .search-filter").addClass('active');

	});
	

	$('#search-map-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//Show Map Search Panel, Hide Related Resources Drag Panel, CRUD Panel
		$( ".search-container" ).each(function() {
			$( this ).addClass( "hidden" );
		});
		$(".map-search-container").removeClass('hidden');
	
		//toggle link display
		$( ".search-filter" ).each(function() {
			$( this ).removeClass( "active" );
		});

		$("#search-map-btn .search-filter").addClass('active');
	});


	$('#search-time-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//Show Map Search Panel, Hide Related Resources Drag Panel, CRUD Panel
		$( ".search-container" ).each(function() {
			$( this ).addClass( "hidden" );
		});

		$(".time-search-container").removeClass('hidden');
			
	
		//toggle link display
		$( ".search-filter" ).each(function() {
			$( this ).removeClass( "active" );
		});

		$("#search-time-btn .search-filter").addClass('active');

	});



//	Edit History
	$('#history-manager').on('click', function (ev) {
		ev.preventDefault();
		
		$("#current-resource-panel").addClass('hidden');
		$("#edit-history-panel").removeClass('hidden');
		$("#menu-panel").css("display", "none");

	});









