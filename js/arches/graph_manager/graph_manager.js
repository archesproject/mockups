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



// 	Switches
	new Switchery(document.getElementById('node-required'), {size: 'small'});
	new Switchery(document.getElementById('node-cardinality'), {size: 'small'});


	
// Permissions Table
	var rowSelection = $('#permissions-table').DataTable({
		"responsive": true,
		"language": {
			"paginate": {
			  "previous": '<i class="fa fa-angle-left"></i>',
			  "next": '<i class="fa fa-angle-right"></i>'
			}
		}
	});

	// $('#permissions-table').on( 'click', 'tr', function () {
	// 	if ( $(this).hasClass('selected') ) {
	// 		$(this).removeClass('selected');
	// 	}
	// 	else {
	// 		rowSelection.$('tr.selected').removeClass('selected');
	// 		$(this).addClass('selected');
	// 	}
	// } );







