//	JavaScript to Support Arches Map Configuration
//	Version: 0.1
//

// Map Extent
	var markerMap = new GMaps({
		el: '#demo-marker-map',
		zoom: 1,
		lat: 37.336095,
		lng: -121.8885431
	});



//	Basemaps
	$('#add-basemap').on('click', function (ev) {
		ev.preventDefault();

		// Show wizard forms
		$('#add-basemap-wizard').fadeIn(450);
		$('#add-basemap-wizard').removeClass('hidden');
		$('#add-basemap-wizard').addClass('in');


		//scroll dive to top of page
		$("html, body").animate({ scrollTop: $("#add-basemap-scroll").offset().top }, 1000);

		map.updateSize();
	});


	$(".tile-panel").delegate("div", "click", function() {
	   //call the edit function
	   console.log("clicked tile-panel");

	});

	$(".tile-panel").hover (function() {
		$( this ).css("cursor", "pointer");
  		$( this ).css("cursor", "normal");
	});



// 	Delete Handler
	$('#basemap-delete').on('click', function (ev) {
		ev.preventDefault();

		// Card Alert (Uncomment to show alert panel and notification text)
		$.niftyNoty({
		    type: 'danger',
		    container : '#basemap-delete-alert',
		    html : '<h4 class="alert-title">Are you really sure you want to <strong> permantly delete </strong> this basemap? </h4><p class="alert-message">Go ahead and press the delete button if you are sure. Otherwise, press cancel</p><div class="mar-top"><button type="button" class="btn btn-danger mar-rgt" data-dismiss="noty">Delete this basemap</button><button type="button" class="btn btn-mint" data-dismiss="noty">Cancel</button></div>',
		    closeBtn : false
		});
	
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
		        'http://192.168.99.100:32771/tiles/{z}/{x}/{y}@2x.png'
		    ],
		    extent: extent,
		    minZoom: 1,
		    maxZoom: 5,
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
		target: 'map1',
		view: view
	});

	//view.fit(extent, map.getSize());


	// Resize Map when help panel is called
	$('#add-basemap-wizard-help-link').on('click', function (ev) {
	  	//console.log('resized');
	  	var delay = 500;
			setTimeout(function() {
				setTimeout( function() { map.updateSize();}, 200);
		}, delay);
	});

	$('#add-basemap-wizard-help-close').on('click', function (ev) {
		// Need to delay resize because we wait to move the card container back into position on close
	  	var delay = 800;
			setTimeout(function() {
				setTimeout( function() { map.updateSize();}, 200);
		}, delay);
	});


	// Map Service Selection
	$('#map-services').chosen({width:'100%'});

	$('#map-preview').on('click', function (ev) {
		ev.preventDefault();


		// show map
		$('#map-preview-panel').fadeOut(500);
		$('#map1').fadeIn(300);
		$('.ol-control').fadeIn(600);
		

		var delay = 500;
			setTimeout(function() {
				setTimeout( function() { map.updateSize();}, 200);
		}, delay);
		
	
	});


	// Row selection (single row)
	// -----------------------------------------------------------------
	$(window).on('load', function() {
	
		$.fn.DataTable.ext.pager.numbers_length = 5;

		var rowSelection = $('#demo-dt-selection').DataTable({
			"responsive": true,
			"language": {
				"paginate": {
				  "previous": '<i class="fa fa-angle-left"></i>',
				  "next": '<i class="fa fa-angle-right"></i>'
				}
			}
		});

		$('#demo-dt-selection').on( 'click', 'tr', function () {
			if ( $(this).hasClass('selected') ) {
				$(this).removeClass('selected');
			}
			else {
				rowSelection.$('tr.selected').removeClass('selected');
				$(this).addClass('selected');
			}
		} );

	});



	// Disturbance Multiselect
	// $('#disturbance-multiselect').chosen({width:'100%'});
	// $('#recomend-multiselect').chosen({width:'100%'});
	// $('#threat-multiselect').chosen({width:'100%'});




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








