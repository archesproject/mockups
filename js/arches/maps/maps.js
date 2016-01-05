
// Misc-Gmaps.js
// ====================================================================
// This file should not be included in your project.
// This is just a sample how to initialize plugins or components.
//
// - ThemeOn.net -



$(document).ready(function() {


	// GMAPS
	// =================================================================
	// Require gmaps
	// -----------------------------------------------------------------
	// http://hpneo.github.io/gmaps/
	// =================================================================



	// Marker
	// =================================================================
	var markerMap = new GMaps({
		el: '#demo-marker-map',
		zoom: 1,
		lat: 37.336095,
		lng: -121.8885431
	});
	// markerMap.addMarker({
	// 	lat: 37.336095,
	// 	lng: -121.8885431,
	// 	title: 'Location',
	// 	click: function(e) {
	// 		$.niftyNoty({
	// 			type: "info",
	// 			icon: "fa fa-info",
	// 			message: "You clicked in the marker",
	// 			container: 'floating',
	// 			timer: 3500
	// 		});
	// 	},
	// 	infoWindow: {
	// 		 content: '<div>HTML Content</div>'
	// 	}
	// });



	var thumbnailMap = new GMaps({
		el: '#google-thumbnail-map',
		lat: 37.336095,
		lng: -121.8885431
	});
	





	

});
