//Installation Functions


jQuery(document).ready(function() {
    

	//welcome button handler
	$("#install-welcome").click(function(){
              
        //Navigate to next page
        window.location.href = "http://127.0.0.1/arches41_mockups/install_wizard_v2.html";

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

		//Update state of next button, enable tab for next step
		$('#dependency-next').removeClass("disabled");
        $('#db-menu').removeClass("install-tab-disabled");
	
	});

	//Dependency Next button handler
	$("#dependency-next").click(function(){    
        
        //Hide dependency tab
        $('#depend-menu-li').removeClass("active");
        $('#depend-tab').removeClass("in");
        $('#depend-tab').removeClass("active");

        //Enable next tab menu
        $('#db-menu-li').addClass("active");

        //Show new tab
        $('#db-tab').addClass("in");
        $('#db-tab').addClass("active");

        //Update Footer
        $('#footer-message').text('Define Database connection parameters');
        $('#help-message').attr("href", "http://www.google.com/");
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

		//Update state of next button, enable tab for next step
		$('#db-next').removeClass("disabled");
        $('#framework-menu').removeClass("install-tab-disabled");
		
	});

	//DB Next button handler
	$("#db-next").click(function(){
              
        //Hide db tab
        $('#db-menu-li').removeClass("active");
        $('#db-tab').removeClass("in");
        $('#db-tab').removeClass("active");

        //Enable next tab menu
        $('#framework-menu-li').addClass("active");

        //Show new tab
        $('#framework-tab').addClass("in");
        $('#framework-tab').addClass("active");

        //Update Footer
        $('#footer-message').text('Install framework components');
        $('#help-message').attr("href", "http://www.google.com/");

    });

    //Framework Install button handler
	$("#framework-install").click(function(){

		//Update state of next button, enable tab for next step
		$('#framework-next').removeClass("disabled");
        $('#select-menu').removeClass("install-tab-disabled");

        //Show framework installation progress
        $('#framework-install-window').removeClass('hidden');

    });

    //Framework Next button handler
	$("#framework-next").click(function(){
              
        //Hide framework tab
        $('#framework-menu-li').removeClass("active");
        $('#framework-tab').removeClass("in");
        $('#framework-tab').removeClass("active");

        //Enable next tab menu
        $('#select-menu-li').addClass("active");

        //Show new tab
        $('#select-tab').addClass("in");
        $('#select-tab').addClass("active");

        //Update Footer
        $('#footer-message').text('Select an application');
        $('#help-message').attr("href", "http://www.google.com/");


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

        //Update Footer
        $('#footer-message').text('Install application');
        $('#help-message').attr("href", "http://www.google.com/");

    });


    //Framework Install button handler
	$("#install-app").click(function(){
              
        $('#app-install-window').removeClass('hidden');
        $('#app-next').removeClass('disabled');
        $('#web').removeClass("install-item-disabled");
		$('#web-icon').addClass("bg-primary");
		$('#web-icon').removeClass("bg-gray-dark");

    });

    //Install Next button handler
    $("#app-next").click(function(){
              
        //Hide install tab
        $('#install-menu-li').removeClass("active");
        $('#install-tab').removeClass("in");
        $('#install-tab').removeClass("active");

        //Enable next tab menu
        $('#web-menu-li').addClass("active");
        $('#web-menu').removeClass("install-tab-disabled");

        //Show new tab
        $('#web-tab').addClass("in");
        $('#web-tab').addClass("active");

        //Update Footer
        $('#footer-message').text('Setup Web Server');
        $('#help-message').attr("href", "http://www.google.com/");


    });


    //Update Finish
    $('#web-preview').change(function(){
        if(('#web-preview').checked) {
            $("#install-finish").text('Finish and close preview');
        } else {
            $("#install-finish").text('Finish');
        }
    });


    new Switchery(document.getElementById('node-cardinality'));
    new Switchery(document.getElementById('load-data'));
    new Switchery(document.getElementById('load-search'));
    new Switchery(document.getElementById('web-preview'));


    //ElasticSearch Config
    $('#load-search').change(function(){
	    $('#elasticsearch-config').toggle(400);
	});


    //console.log( "ready!" );

});

	

