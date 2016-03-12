//	JavaScript to Support Arches Map Configuration
//	Version: 0.1
//

//	Show drag/drop tool for widget ordering on card
	$('.widget-container').on('mouseover', function (ev) {
		ev.preventDefault();

		// Get User Input, Update title
		//$('.drag-tool-widget').css("display", "block");

		//
		$( ".drag-tool-widget" ).each(function() {
	    	$( this ).css("display", "block");
	  	});

	  	// $('.widgets').each(function() {
	   //  	$( '.drag-tool-widget' ).css("display", "inline-block");
	  	// });
	});

	$('.widget-container').on('mouseout', function (ev) {
		ev.preventDefault();

		// Get User Input, Update title
		$('.drag-tool-widget').css("display", "none");
		
	});


//	switches
	new Switchery(document.getElementById('card-container-visibility'), {size: 'small'});
	new Switchery(document.getElementById('card-container-active'), {size: 'small'});
	new Switchery(document.getElementById('card-visibility'), {size: 'small'});
	new Switchery(document.getElementById('card-active'), {size: 'small'});



// chosen
	$(".functions").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});

	$(".design").chosen({
	  	disable_search_threshold: 15,
	  	inherit_select_classes: true,
	  	width: '100%'
	});


//	Container functions
	$('#container-functions').on('click', function (ev) {
		ev.preventDefault();

		// Slide panels to expose input panle
		$('.cd-preview').css("left", "301px");
		$('.cd-config-panel').css("left", "0px");
		
	});


	//
	$('#report-manager').on('click', function (ev) {
		ev.preventDefault();

		// Manage Tool Panels
		$('#report-preview').removeClass("hidden");
		$('#report-preview').fadeIn(300, "linear");
		$('#data-preview').fadeOut(300, "linear");

		//Manage link display
		$('#report-manager').addClass("selected");
		$('#data-entry-manager').removeClass("selected");
		
	});

	$('#data-entry-manager').on('click', function (ev) {
		ev.preventDefault();

		// Manage Tool Panels
		$('#report-preview').addClass("hidden");
		$('#report-preview').fadeOut(300, "linear");
		$('#data-preview').fadeIn(300, "linear");

		//Manage link display
		$('#report-manager').removeClass("selected");
		$('#data-entry-manager').addClass("selected");
		
	});



// Editable Functions
	//MouseOver Card Container Title Function
	$('#cc-title').on('mouseover', function (ev) {
		ev.preventDefault();

		// highlight card container level buttons
		$('#cc-save-btn').removeClass("btn-editable");
		$('#cc-delete-btn').removeClass("btn-editable");

		//fade cards, wizard level tile
		$('#cards').addClass("fade-back");
		$('.wizard-level-tile').addClass("fade-back");
		
	});

	//Card Container Title 
	$('#cc-title').on('click', function (ev) {
		ev.preventDefault();

		//show config panel
		$(".cd-config-panel").css("right", "0px");
		$(".cd-preview").css("right", "300px");

		//show card container level form
		$('#card-settings').css("display", "none");
		$('#card-settings').fadeOut(300, "linear");
		$('#card-container-settings').fadeIn(300, "linear");


		//continue to highlight panel, card container level buttons
		$('#card-container').addClass("editable-highlight");
		$('#cc-save-btn').removeClass("btn-editable");
		$('#cc-delete-btn').removeClass("btn-editable");
		
	});

	$('#cc-title').on('mouseout', function (ev) {
		ev.preventDefault();

		// Remove highlight
		$('#cc-save-btn').addClass("btn-editable");
		$('#cc-delete-btn').addClass("btn-editable");

		//un-fade cards, wizard level tile
		$('#cards').removeClass("fade-back");
		$('.wizard-level-tile').removeClass("fade-back");
		
	});


	//card tab
	$('.card-tab-title').on('mouseover', function (ev) {
		ev.preventDefault();

		//fade card container title, wizard level tile
		$('.panel-heading').addClass("fade-back");
		$('.wizard-level-tile').addClass("fade-back");

		// Card container level buttons,
		$('#cc-save-btn').removeClass("btn-editable");
		$('#cc-delete-btn').removeClass("btn-editable");
		$('#cc-save-btn').addClass("fade-back");
		$('#cc-delete-btn').addClass("fade-back");

		//highlight card button
		$('#map-preview').removeClass("btn-editable");

		//card widgets
		$('.editable-widget').addClass("fade-back");

		
	});

	$('.card-tab-title').on('mouseout', function (ev) {
		ev.preventDefault();

		//fade card container title, wizard level tile
		$('.panel-heading').removeClass("fade-back");
		$('.wizard-level-tile').removeClass("fade-back");

		// Card container level buttons,
		$('#cc-save-btn').addClass("btn-editable");
		$('#cc-delete-btn').addClass("btn-editable");
		$('#cc-save-btn').removeClass("fade-back");
		$('#cc-delete-btn').removeClass("fade-back");

		//highlight card button
		$('#map-preview').addClass("btn-editable");

		//card widgets
		$('.editable-widget').removeClass("fade-back");
		
	});


	// Card COntainer Tile
	$('.wizard-level-tile').on('mouseover', function (ev) {
		ev.preventDefault();

		//fade card container title, wizard level tile
		$('.panel-heading').addClass("fade-back");
		$('#cards').addClass("fade-back");

		// Card container level buttons,
		$('#cc-save-btn').removeClass("btn-editable");
		$('#cc-delete-btn').removeClass("btn-editable");
		$('#cc-save-btn').addClass("fade-back");
		$('#cc-delete-btn').addClass("fade-back");
	
	});

	$('.wizard-level-tile').on('mouseout', function (ev) {
		ev.preventDefault();

		//fade card container title, wizard level tile
		$('.panel-heading').removeClass("fade-back");
		$('#cards').removeClass("fade-back");

		// Card container level buttons,
		$('#cc-save-btn').addClass("btn-editable");
		$('#cc-delete-btn').addClass("btn-editable");
		$('#cc-save-btn').removeClass("fade-back");
		$('#cc-delete-btn').removeClass("fade-back");
	
	});


	function clearCardContainerHighlight() {
		// Remove highlight
		$('#card-container').removeClass("editable-highlight");
		$('#cc-save-btn').addClass("btn-editable");
		$('#cc-delete-btn').addClass("btn-editable");
	}


	$('#cc-form-delete-btn').on('click', function (ev) {
		ev.preventDefault();
		clearCardContainerHighlight();
		
	});


	$('.close-card-form').on('click', function (ev) {
		ev.preventDefault();

		//hide config panel
		$(".cd-config-panel").css("right", "-300px");
		$(".cd-preview").css("right", "0px");
	});


	//Card Tab Functions 
	$('.editable-card').on('click', function (ev) {
		ev.preventDefault();

		//open config panel
		$(".cd-config-panel").css("right", "0px");
		$(".cd-preview").css("right", "300px");

		//show card form
		$('#card-settings').css("display", "block");
		$('#card-settings').fadeIn(300, "linear");
		$('#card-container-settings').fadeOut(300, "linear");

	});






	// Reports
	var $container = $('#report-image-grid');

	// $container.imagesLoaded( function(){
	//   $container.isotope({
	//     containerClass: 'report-image-grid',
	//     layoutMode: 'masonry'
	//   });
	// });

	var markerMap = new GMaps({
		el: '#demo-marker-map',
		lat: 37.336095,
		lng: -121.8885431
	});
	



//	Test Local Map Server
  var extent = ol.proj.transformExtent([-180,-85.0511,180,85.0511],
                                 'EPSG:4326', 'EPSG:3857');
  var center = ol.proj.transform([-118.2518, 34.0442],
                                 'EPSG:4326', 'EPSG:3857');
  var view = new ol.View({
    projection: 'EPSG:3857',
    center: center,
    zoom: 2
  });

  var overlay = new ol.layer.Tile({
    source: new ol.source.XYZ({
      urls:[
        'http://192.168.99.100:32768/tiles/{z}/{x}/{y}@2x.png'
      ],
      extent: extent,
      minZoom: 0,
      maxZoom: 22,
      attributions: [
        new ol.Attribution({html: '<a href=\'https://www.mapbox.com/about/maps/\' target=\'_blank\'>&copy; Mapbox</a> <a href=\'https://openstreetmap.org/about/\' target=\'_blank\'>&copy; OpenStreetMap</a> <a class=\'mapbox-improve-map\' href=\'https://www.mapbox.com/map-feedback/\' target=\'_blank\'>Improve this map</a>'})
      ],
      tilePixelRatio: 2
    })
  });

  var map = new ol.Map({
    layers: [
      overlay
    ],
    renderer: 'canvas',
    target: 'map',
    view: view
  });

  //view.fit(extent, map.getSize());

  	$('#report-manager').on('click', function (ev) {
	
		// Need to delay resize because we wait to move the card container back into position on close
  		var delay = 500;
			setTimeout(function() {
			setTimeout( function() { map.updateSize();}, 200);
		}, delay);
	});



