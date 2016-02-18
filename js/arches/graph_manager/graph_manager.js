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
	});

	
	$('.permission-card').on('click', function (ev) {
		ev.preventDefault();
		$(this).toggleClass("selected-card");
		$('#permissions-panel').fadeIn(100, "linear");

		//console.log('permission card clicked')
	});

	





