//	JavaScript to Support Arches Resource Editor
//	Version: 0.1
//


// Chosen
	$(".resources").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});


// Manage panels
	$('#lnk-resource-records').on('click', function (ev) {
		ev.preventDefault();
		
		//toggle panels
		$("#new-relations-panel").removeClass('hidden');
		$("#related-resources-panel").addClass('hidden');	
		$("#resource-list").addClass('hidden');	
	
		//toggle link display
		$("#lnk-resource-records").addClass('active');
		$("#lnk-resource-list").removeClass('active');

	});
	

	// Find Resource/Graph
	$('.graph-find').on('click', function (ev) {
		ev.preventDefault();
		
		$(".find-widget").toggle();	
		$(".resource-tools").toggle();	
	
	});


// Toggle Resource/Records
	$('#related-resources-open-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//toggle panels
		$("#current-resource-panel").addClass('hidden');	
		$("#related-resources-panel").removeClass('hidden');	
	

	});


	$('#related-resources-close-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//toggle panels
		$("#current-resource-panel").removeClass('hidden');	
		$("#related-resources-panel").addClass('hidden');	
	

	});



// Manage Edit Panel Tools Menu
	$("#menu-control").click(function(ev){
 		ev.preventDefault();

 		//Toogle display of menu panel
 		$("#menu-panel").toggle();
	});


	$("#help-control").click(function(ev){
 		ev.preventDefault();

 		//Toogle display of menu panel
 		$(".ep-help").toggle();
	});

	$("#close-help").click(function(ev){
 		ev.preventDefault();

 		//Toogle display of menu panel
 		$(".ep-help").toggle();
	});


// Resource Instance Data Table
// Row selection (single row)
	// -----------------------------------------------------------------
	var rowSelection = $('#demo-dt-selection').DataTable({
		"responsive": true,
		"language": {
			"paginate": {
			  "previous": '<i class="fa fa-angle-left"></i>',
			  "next": '<i class="fa fa-angle-right"></i>'
			}
		}
	});

	$('#demo-dt-selection').on( 'click', 'tr', function () {
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
		}
		else {
			rowSelection.$('tr.selected').removeClass('selected');
			$(this).addClass('selected');
		}
	} );