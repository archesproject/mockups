//	JavaScript to Support Arches Map Configuration
//	Version: 0.1
//

// Map Extent
	var markerMap = new GMaps({
		el: '#demo-marker-map',
		zoom: 11,
		lat: 37.336095,
		lng: -121.8885431
	});



//	Basemaps
	$('#add-basemap').on('click', function (ev) {
		ev.preventDefault();

		// Show wizard forms
		$('#add-basemap-wizard').fadeIn(450);
		$('#add-basemap-wizard').removeClass('hidden');
		$('#add-basemap-wizard').addClass('in');
		
	});


	$(".tile-panel").delegate("div", "click", function() {
	   //call the edit function
	   
	});

	$(".tile-panel").hover (function() {
		$( this ).css("cursor", "pointer");
  		$( this ).css("cursor", "normal");
	});



	

	// $('#condition-add').on('click', function (ev) {
	// 	ev.preventDefault();

	// 	// Show results tiles
	// 	//$('#condition-results').fadeIn(450);
	// 	$('#condition-results').removeClass('hidden');
	// 	$('#condition-results').addClass('in');

	// });



	// Disturbance Multiselect
	// $('#disturbance-multiselect').chosen({width:'100%'});
	// $('#recomend-multiselect').chosen({width:'100%'});
	// $('#threat-multiselect').chosen({width:'100%'});




// Require Dropzone
// http://www.dropzonejs.com/
// =================================================================
	Dropzone.options.demoDropzone = { // The camelized version of the ID of the form element
		// The configuration we've talked about above
		autoProcessQueue: false,
		//uploadMultiple: true,
		//parallelUploads: 25,
		//maxFiles: 25,

		// The setting up of the dropzone
		init: function() {
		var myDropzone = this;
		//  Here's the change from enyo's tutorial...
		//  $("#submit-all").click(function (e) {
		//  e.preventDefault();
		//  e.stopPropagation();
		//  myDropzone.processQueue();
			//
		//}
		//    );

			this.on('addedfile', function() {

				$('#file-related-nodes').addClass('in').delay(1500);

			});

			$('#close-file-form').on('click', function(){
				$('#file-related-nodes').removeClass('in');
				$('.dz-preview').remove();
				$('#demo-dropzone').removeClass('dz-started');

			});

		}	
	}








