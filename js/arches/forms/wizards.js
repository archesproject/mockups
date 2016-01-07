
// Arches JS to manage hidden panels for Geometry and File input forms
	$('#geometry-creation').on('change', function(){
		
		$('#geometry-related-nodes').addClass('in');

	});

	$('#close-form').on('click', function(){

		$('#geometry-related-nodes').removeClass('in');
	});


// DROPZONE.JS
	// =================================================================
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

	
  	
  	


	