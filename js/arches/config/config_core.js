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



// 	});