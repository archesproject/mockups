



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

		
	// Wizard
		// =================================================================
		// Require Bootstrap Wizard
		// http://vadimg.com/twitter-bootstrap-wizard-example/
		// =================================================================	
		$('#main-wz').bootstrapWizard({
			tabClass		: 'wz-steps',
			nextSelector	: '.next',
			previousSelector	: '.previous',
			onTabClick: function(tab, navigation, index) {
				return false;
			},
			onInit : function(){
				$('#main-wz').find('.finish').hide().prop('disabled', true);
			},
			onTabShow: function(tab, navigation, index) {
				var $total = navigation.find('li').length;
				var $current = index+1;
				var $percent = ($current/$total) * 100;
				var wdt = 100/$total;
				var lft = wdt*index;



				$('#main-wz').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});


				// If it's the last tab then hide the last button and show the finish instead
				if($current >= $total) {
					$('#main-wz').find('.next').hide();
					$('#main-wz').find('.finish').show();
					$('#main-wz').find('.finish').prop('disabled', false);
				} else {
					$('#main-wz').find('.next').show();
					$('#main-wz').find('.finish').hide().prop('disabled', true);
				}
			}
		});


		$('#address').bootstrapWizard({
			tabClass		: 'wz-steps',
			nextSelector	: '.next',
			previousSelector	: '.previous',
			onTabClick: function(tab, navigation, index) {
				return false;
			},
			onInit : function(){
				$('#address').find('.finish').hide().prop('disabled', true);
			},
			onTabShow: function(tab, navigation, index) {
				var $total = navigation.find('li').length;
				var $current = index+1;
				var $percent = ($current/$total) * 100;
				var wdt = 100/$total;
				var lft = wdt*index;



				$('#address').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});


				// If it's the last tab then hide the last button and show the finish instead
				if($current >= $total) {
					$('#address').find('.next').hide();
					$('#address').find('.finish').show();
					$('#address').find('.finish').prop('disabled', false);
				} else {
					$('#address').find('.next').show();
					$('#address').find('.finish').hide().prop('disabled', true);
				}
			}
		});
  	


	