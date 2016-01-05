//Installation Functions


jQuery(document).ready(function() {
    

	//welcome button handler
	$("#install-welcome").click(function(){
              
        //Navigate to next page
        window.location.href = "http://127.0.0.1/arches41_mockups/install_wizard.html";

    });




        


	// MAIN FORM WIZARD
	// =================================================================
	$('#dependencies').bootstrapWizard({
		tabClass		: 'wz-steps',
		nextSelector	: '.next',
		previousSelector	: '.previous',
		onTabClick: function(tab, navigation, index) {
			return false;
		},
		onInit : function(){
			$('#demo-main-wz').find('.finish').hide().prop('disabled', true);
		},
		onTabShow: function(tab, navigation, index) {
			var $total = navigation.find('li').length;
			var $current = index+1;
			var $percent = ($current/$total) * 100;
			var wdt = 100/$total;
			var lft = wdt*index;

			$('#dependencies').find('.progress-bar').css({width:wdt+'%',left:lft+"%", 'position':'relative', 'transition':'all .5s'});


			// If it's the last tab then hide the last button and show the finish instead
			if($current >= $total) {
				$('#dependencies').find('.next').hide();
				$('#dependencies').find('.finish').show();
				$('#dependencies').find('.finish').prop('disabled', false);
			} else {
				$('#dependencies').find('.next').show();
				$('#dependencies').find('.finish').hide().prop('disabled', true);
			}

		}

	});


	// Manage display of instruction/help panels.  Need to display current intstruction/help panel
	// and ensure all previous panels are "turned off" as user works their way up or down the wizard
	var base_panel_id = '#depend-tab-';
	var base_icon_id = '#depend-icon-';
	var step = 0;

	$("#depend-next").click(function(){

		//show next panel
		$(base_panel_id + (step + 1)).css('display', 'block');
		$(base_panel_id + (step + 1)).css('opacity', 1.0);

		$(base_icon_id + (step + 1)).addClass('bg-dark');


		//hide current panel
		$(base_panel_id + step).css('display', 'none');
		$(base_panel_id + step).css('opacity', 0.0);

		$(base_icon_id + step).addClass('bg-gray-dark');
		$(base_icon_id + step).removeClass('bg-dark');

		step = step + 1;


    });


    $("#depend-prev").click(function(){

        //hide current panel
		$(base_panel_id + step).css('display', 'none');
		$(base_panel_id + step).css('opacity', 0.0);

		//show previous panel
		$(base_panel_id + (step - 1)).css('display', 'block');
		$(base_panel_id + (step - 1)).css('opacity', 1.0);

		$(base_icon_id + (step - 1)).addClass('bg-dark');


		step = step - 1;

    });


    //Manage display of help panels
    $("#help-db-button").click(function(){

        //Show db help panel
		$("#help-db-panel").css('display', 'block');
		$("#help-db-panel").css('opacity', 1.0);
    	$("#help-db-panel").css('-webkit-transition', 'opacity .5s linear');
    	
    });





    //console.log( "ready!" );

});

	

