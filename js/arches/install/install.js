//Installation Functions


jQuery(document).ready(function() {
    

	//welcome button handler
	$("#install-welcome").click(function(){
              
        //Navigate to next page
        window.location.href = "http://127.0.0.1/arches41_mockups/install_wizard_dependencies.html";

    });


	//Dependency Handler
	$('#dependencies').on('click', function (ev) {
		ev.preventDefault();

		// Card Alert (Uncomment to show alert panel and notification text)
		$.niftyNoty({
		    type: 'mint',
		    container : '#python-alert',
		    html : '<span class="icon-wrap icon-circle icon-bg-success"><i class="fa fa-check"></i></span><div class="dependency-message"><p><strong>Python 2.7.6</strong> Confirmed!</p></div>',
		    closeBtn : false
		});

		$.niftyNoty({
		    type: 'mint',
		    container : '#geos-alert',
		    html : '<span class="icon-wrap icon-circle icon-bg-success"><i class="fa fa-check"></i></span><div class="dependency-message"><p><strong>GEOS</strong> Confirmed!</p></div>',
		    closeBtn : false
		});

		$.niftyNoty({
		    type: 'danger',
		    container : '#jdk-alert',
		    html : '<span class="icon-wrap icon-circle icon-bg-fail"><i class="fa fa-times"></i></span><div class="dependency-message"><p><strong>Java (JDK)</strong> Could not verify your JDK.  <button class="btn btn-danger btn-dependency">Suggested fixes</button></p></div>',
		    closeBtn : false
		});

		$('#dependency-next').removeClass("disabled");
		$('#db').removeClass("install-item-disabled");
		$('#db-icon').addClass("bg-primary");
		$('#db-icon').removeClass("bg-gray-dark");

		
	});


	//Dependency Next button handler
	$("#dependency-next").click(function(){
              
        //Navigate to next page
        window.location.href = "http://127.0.0.1/arches41_mockups/install_wizard_db.html";

    });


	//DB Test Connection Handler
    $('#db-test-connection').on('click', function (ev) {
		ev.preventDefault();

		// Card Alert (Uncomment to show alert panel and notification text)
		$.niftyNoty({
		    type: 'mint',
		    container : '#db-connection-alert',
		    html : '<span class="icon-wrap icon-circle icon-bg-success"><i class="fa fa-check"></i></span><div class="dependency-message"><p><strong>Success</strong> Your PostgreSQL/PostGIS database connection parameters are valid</p></div>',
		    closeBtn : false
		});

		$('#db-next').removeClass("disabled");
		$('#arches-framework').removeClass("install-item-disabled");
		$('#arches-framework-icon').addClass("bg-primary");
		$('#arches-framework-icon').removeClass("bg-gray-dark");

		
	});

	//DB Next button handler
	$("#db-next").click(function(){
              
        //Navigate to next page
        window.location.href = "http://127.0.0.1/arches41_mockups/install_wizard_framework.html";

    });

    //Framework Install button handler
	$("#framework-install").click(function(){
              
        $('#framework-install-window').removeClass('hidden');
        $('#framework-next').removeClass('disabled');
        $('#arches-app').removeClass("install-item-disabled");
		$('#arches-app-icon').addClass("bg-primary");
		$('#arches-app-icon').removeClass("bg-gray-dark");

    });

    //Framework Next button handler
	$("#framework-next").click(function(){
              
        //Navigate to next page
        window.location.href = "http://127.0.0.1/arches41_mockups/install_wizard_apps.html";

    });


    //Select HIP button handler
	$("#select-hip").click(function(){
              
        //Navigate to next page
        $('#install-menu').removeClass("install-tab-disabled");
        $('#select-tab').removeClass("in");
        $('#select-tab').removeClass("active");
        $('#install-tab').addClass("in");
        $('#install-tab').addClass("active");

        $('#install-menu-li').addClass("active");
        $('#select-menu-li').removeClass("active");


    });


    //Framework Install button handler
	$("#install-app").click(function(){
              
        $('#app-install-window').removeClass('hidden');
        $('#app-next').removeClass('disabled');
        $('#web').removeClass("install-item-disabled");
		$('#web-icon').addClass("bg-primary");
		$('#web-icon').removeClass("bg-gray-dark");

    });



    new Switchery(document.getElementById('load-thesauri'));
    new Switchery(document.getElementById('load-data'));
    new Switchery(document.getElementById('load-search'));


    //ElasticSearch Config
    $('#load-search').change(function(){
	    
	    $('#elasticsearch-config').toggle(400);
	});


        
	//Delete from here down

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

	

