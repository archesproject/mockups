//	JavaScript to Support Arches Core Configuration
//	Version: 0.1
//

//	Arches Server Card functions.  Functions for clicking on a card navigation tab
 	var helpPanel = "#arches-server-help-content";
 	var footer = "#arches-server-footer";
 	var helpPage = "";
 	var footerText ="";


// 	Handle Summary Link
 	$("#settings-menu").click(function(){

		// Update Help file tag
 		helpPage = "./help/config_manager/arches_server_summary.html";
		$(helpPanel).load(helpPage);

		// Update Footer Text
		footerText = "<strong>Framework:</strong> Arches v4.0.0  &nbsp; &nbsp; <strong>Application:</strong> Arches-HIP v2.0.0";
		$(footer).html(footerText)

	});

// 	Handle db Link
 	$("#db-menu").click(function(){

		//Update Help file tag
 		helpPage = "./help/config_manager/database.html";
		$(helpPanel).load(helpPage);

		// Update Footer Text
		footerText = "<strong>Database Server:</strong> PostgreSQL/PostGIS  &nbsp; &nbsp; <strong>Port:</strong> 5432";
		$(footer).html(footerText);

	});



// Tile Records
 	$("#record-1").click(function(){

		//Show form
		$("#record-1-form").show(600);
		$(this).find('#record-1-delete').show();
		$(this).find('#record-1-close').show();

		//update background color
		$("#record-1").css("background", "#fff");

	});

	$("#record-1").hover(
	  	function() {
	    	// On hover
	    	//$( this ).append( $( "<span> ***</span>" ) );
	    	$(this).css("cursor", "pointer");
	    	$(this).css("background", "#fff");
	    	$(this).find('#record-1-delete').show();


	  	}, function() {
	  		// On exit
	  		$( this ).css("cursor", "normal");
	  		$(this).css("background", "#fafafa");
	    	$(this).find('#record-1-delete').hide();
	  	}
	);

	$("#record-1-close").click(function(){

		//hide form
		var delay = 500;
			setTimeout(function() {
				$("#record-1-form").hide(500);
				$(this).find('#record-1-delete').hide();
				$("#record-1-close").hide();

				//update background color
				$("#record-1").css("background", "#fafafa");
		}, delay);

		
		
		return false;

	});

	// $(".tile-record").hover(
	//   	function() {
	//     	// On hover
	//     	//$( this ).append( $( "<span> ***</span>" ) );
	//     	$(this).css("cursor", "pointer");
	//     	$(this).css("background", "#fff");


	//   	}, function() {
	//   		// On exit
	//   		$( this ).css("cursor", "normal");
	//   		$(this).css("background", "#f7f7f7");

	//   	}
	// );




// 	});