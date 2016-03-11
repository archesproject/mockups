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
	    	$( this ).css("display", "inline-block");
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

		// highlight panel, card container level buttons
		$('#card-container').addClass("editable-highlight");
		$('#cc-save-btn').removeClass("btn-editable");
		$('#cc-delete-btn').removeClass("btn-editable");
		
	});

	$('#cc-title').on('click', function (ev) {
		ev.preventDefault();

		//show config panel
		$(".cd-config-panel").css("right", "0px");
		$(".cd-preview").css("right", "300px");

		//continue to highlight panel, card container level buttons
		$('#card-container').addClass("editable-highlight");
		$('#cc-save-btn').removeClass("btn-editable");
		$('#cc-delete-btn').removeClass("btn-editable");
		
	});

	$('#cc-title').on('mouseout', function (ev) {
		ev.preventDefault();

		// Remove highlight
		$('#card-container').removeClass("editable-highlight");
		$('#cc-save-btn').addClass("btn-editable");
		$('#cc-delete-btn').addClass("btn-editable");
		
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
		zoom: 1,
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
    zoom: 0
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

  view.fit(extent, map.getSize());




