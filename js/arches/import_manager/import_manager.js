//	JavaScript to Support Arches Import Manager
//	Version: 0.1
//


//	Config File Upload Widget
	myDropzone = Dropzone.options.uploadDropzone = { // The camelized version of the ID of the form element
		// The configuration we've talked about above
		autoProcessQueue: false,
		//uploadMultiple: true,
		//parallelUploads: 25,
		maxFiles: 1,

		init: function() {
		    this.on("addedfile", function(file) { 

		    	// On file load, show upload button
		    	$('#import-options-panel').removeClass("hidden");

		
		    });
		
		}

		
	};




//	Import Button
	$('#import-options-panel').on('click', function (ev) {

		// reset upload panel, show new import job
		$('#import-file-upload-panel').removeClass("hidden");
		$('#import-job-status-panel').addClass("hidden");
		$('#import-options-panel').addClass("hidden");
		$('#import-metadata-panel').addClass("hidden");

		$('#validating-job').removeClass("hidden");

		//Update counter
		$('#import-jobs-counter').text("Current Import Jobs: 2");


		//remove file from dropzone
		myDropzone.removeFile(file);	

	});	











