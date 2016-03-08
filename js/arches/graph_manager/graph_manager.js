//	JavaScript to Support Arches Graph Manager
//	Version: 0.1
//

//	Chosen Select Widgets
	$("#crm").chosen({
	  	disable_search_threshold: 5,
	  	inherit_select_classes: true,
	  	width: '100%'
	});

	$("#property").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});

	$("#data-type").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});

	$("#node-group").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});

	$("#permissions").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});



// 	Switches
	new Switchery(document.getElementById('node-required'), {size: 'small'});
	new Switchery(document.getElementById('node-cardinality'), {size: 'small'});


	
//	Library Panel
	$('#permissions-close').on('click', function (ev) {
		ev.preventDefault();
		$('#permissions-panel').fadeOut(100, "linear");

		//"unselect" permissions items
		$( "#user-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});
	});

	
	$('.library-card.permissions').on('click', function (ev) {
		ev.preventDefault();
		$(this).toggleClass("selected-card");
		$('#permissions-panel').fadeIn(100, "linear");

		//console.log('permission card clicked')
	});


	$('.library-card.graph-library').on('click', function (ev) {
		ev.preventDefault();

		// Clear all selected branches
		$( "#branch-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});

	  	//Highlight selected branch
		$(this).toggleClass("selected-card");
		$('#branch-panel').fadeIn(100, "linear");

		//console.log('permission card clicked')
	});


	$('.library-card.node-list').on('click', function (ev) {
		ev.preventDefault();
		$(this).toggleClass("selected-card");
	});


	$('#apply-permissions').on('click', function (ev) {
		ev.preventDefault();
		$('#confirm-permissions').fadeIn(100, "linear");
	});


	$('#clear-user-selection').on('click', function (ev) {
		ev.preventDefault();
	  	$( "#user-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});
	});


	$('#clear-node-selection').on('click', function (ev) {
		ev.preventDefault();
	  	$( "#node-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});
	});


//	Toggle all accounts when user selects "all"
	$('#all').on('click', function (ev) {
		ev.preventDefault();

		if ($('#all').hasClass("selected-card")) {
		    $( "#user-grid>div" ).each(function() {
		    	$( this ).addClass( "selected-card" );
		  	});
		
		} else { 
		    console.log("update accounts to selected");
		    $( "#user-grid>div" ).each(function() {
		    	$( this ).removeClass( "selected-card" );
		  	});
		}

	});

	

//	Permissions Alert
	$('.permission-alert').on('click', function (ev) {
		ev.preventDefault();

		// Card Alert (Uncomment to show alert panel and notification text)
		$.niftyNoty({
		    type: 'danger',
		    container : '#permission-alert',
		    html : '<h4 class="alert-title">Parent Node is No Access</h4><p class="alert-message">You can not give this user [Permission] because they do not have access privileges for [Parent Node].</p><div class="mar-top"><button type="button" class="btn btn-mint" data-dismiss="noty">OK</button></div>',
		    closeBtn : false
		});
	
	});



//	Branch Panel
	$('#branch-close').on('click', function (ev) {
		ev.preventDefault();
		$('#branch-panel').fadeOut(100, "linear");

		//"unselect" branch items
		$( "#branch-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});

	});


	$('#branch-append').on('click', function (ev) {
		ev.preventDefault();

		// Card Alert (Uncomment to show alert panel and notification text)
		$.niftyNoty({
		    type: 'mint',
		    container : '#branch-alert',
		    html : '<h4 class="alert-title" style="color: #123;">Branch Added!</h4><p class="alert-message" style="color: #123;">You have successfully appended this branch to your resource graph.  Great job! </p><div class="mar-top"><button type="button" class="btn btn-mint" style="color: #123;" data-dismiss="noty">OK</button></div>',
		    closeBtn : false
		});
	
	});


//	Manage Visibility of Branch/Permissions Panels
	$('#nodes-tab').on('click', function (ev) {
		ev.preventDefault();

		// Close Branch if it is visible
		if ($("#branch-panel").is(':visible')) {
			$('#branch-panel').fadeOut(100, "linear");
		}

		// Close Permissions if it is visible
		if ($("#permissions-panel").is(':visible')) {
			$('#permissions-panel').fadeOut(100, "linear");
		}

		//"unselect" all node items
		$( "#node-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});
		
	});


	$('#permissions-tab').on('click', function (ev) {
		ev.preventDefault();

		// Close Branch if it is visible
		if ($("#branch-panel").is(':visible')) {
			$('#branch-panel').fadeOut(100, "linear");
		}

		//"unselect" all permissions items
		$( "#user-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});
		
	});


	$('#branches-tab').on('click', function (ev) {
		ev.preventDefault();

		// Close Branch if it is visible
		if ($("#permissions-panel").is(':visible')) {
			$('#permissions-panel').fadeOut(100, "linear");
		}

		//"unselect" all branches items
		$( "#branch-grid>div" ).each(function() {
	    	$( this ).removeClass( "selected-card" );
	  	});
		
	});


	



//	CRUD Panel
	$('#node-crud-close').on('click', function (ev) {
		ev.preventDefault();
		$('#nodeCrud').fadeOut(200, "linear");;
	});



//	Search Mockup
	// var $grid = $('.grid').isotope({
	//   	// set itemSelector so .grid-sizer is not used in layout
	//   	itemSelector: '.library-card',
	//   	percentPosition: true,
	//   	masonry: {
	//     	// use element for option
	//     	columnWidth: 200
	//   	}
	// })


	// $grid.isotope({ filter: function() {
	//   	var name = $('#node-search').find('a').text();
	//   	return name.match( $("#search-node").val() );
	//   	}
	// })	




