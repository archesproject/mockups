//	JavaScript to Support Arches Resource Editor
//	Version: 0.1
//


// Chosen
	$(".resources").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});


// grid
	


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


// <div class="card-grid-item" data-bind="" style="width: 600px;">
// <div class="panel mar-no" style="height: 425px;">
