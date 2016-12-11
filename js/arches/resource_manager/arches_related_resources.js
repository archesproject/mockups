//	JavaScript to Support Arches Graph/Resource Configuration
//	Version: 0.1
//


//	Widgets	
	$('#editor').summernote({height: 150});
	
	// INLINE BOOTSTRAP DATEPICKER
	$('#search-from-a div').datepicker({
		format: "MM dd, yyyy",
		todayBtn: false,
		autoclose: true,
		todayHighlight: false,
		defaultViewDate: (2016, 8, 7)
	});

	$('#search-from-b input').datepicker({
		format: "MM dd, yyyy",
		todayBtn: false,
		autoclose: true,
		todayHighlight: true
	});

	$('#search-from-c input').datepicker({
		format: "MM dd, yyyy",
		todayBtn: false,
		autoclose: true,
		todayHighlight: true,
	});



//	Manage Search Panels
	$('#open-search').on('click', function (ev) {
		ev.preventDefault();

		
		//toggle display of attribute search panel
		if ($("#related-resoureces-drag-panel").hasClass("related-resources-slide-out")) {
		    //Related Resources Panel is fully visible.  Slide it over, slide search panel in
		    $("#related-resoureces-drag-panel").removeClass("related-resources-slide-out");
		    $(".search-control-container").removeClass("search-slide-out");

		} else { 
			//Hide search, slide related resources panel over
			$("#related-resoureces-drag-panel").addClass("related-resources-slide-out");
		    $(".search-control-container").addClass("search-slide-out");
		    
		}

	});





//	Manage Primary Search Panel Display (Related Resources, Time, Map, Advanced, Saved)
	$('#search-rr-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//Show Map Search Panel, Hide Related Resources Drag Panel, CRUD Panel
		$( ".search-container" ).each(function() {
			$( this ).addClass( "hidden" );
		});

		$("#related-resoureces-drag-panel").removeClass('hidden');
		$("#related-resourced-crud").removeClass('hidden');
			
	
		//toggle link display
		$( ".search" ).each(function() {
			$( this ).removeClass( "selected" );
		});

		$("#search-rr-btn").addClass('selected');

		//make sure searh results are showing
		$(".search-control-container").removeClass("hidden");

	});
	


	$('#search-map-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//Show Map Search Panel, Hide Related Resources Drag Panel, CRUD Panel
		$( ".search-container" ).each(function() {
			$( this ).addClass( "hidden" );
		});
		$(".map-search-container").removeClass('hidden');
	
		//toggle link display
		$( ".search" ).each(function() {
			$( this ).removeClass( "selected" );
		});

		$("#search-map-btn").addClass('selected');

		//force map to show after div is no longer hidden
		$("#search-map-test").css("position", "inherit");
		window.dispatchEvent(new Event('resize'));

		//make sure searh results are showing
		$(".search-control-container").removeClass("hidden");
	
	});



	$('#search-time-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//Show Map Search Panel, Hide Related Resources Drag Panel, CRUD Panel
		$( ".search-container" ).each(function() {
			$( this ).addClass( "hidden" );
		});

		$(".time-search-container").removeClass('hidden');
			
	
		//toggle link display
		$( ".search" ).each(function() {
			$( this ).removeClass( "selected" );
		});

		$("#search-time-btn").addClass('selected');

		//make sure searh results are showing
		$(".search-control-container").removeClass("hidden");

	});


	$('#advanced-search-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//Show Map Search Panel, Hide Related Resources Drag Panel, CRUD Panel
		$( ".search-container" ).each(function() {
			$( this ).addClass( "hidden" );
		});

		$(".advanced-search-container").removeClass('hidden');
			
	
		//toggle link display
		$( ".search" ).each(function() {
			$( this ).removeClass( "selected" );
		});

		$("#advanced-search-btn").addClass('selected');

		//make sure searh results are showing
		$(".search-control-container").removeClass("hidden");

	});


	$('#saved-search-btn').on('click', function (ev) {
		ev.preventDefault();
		
		//Show Map Search Panel, Hide Related Resources Drag Panel, CRUD Panel
		$( ".search-container" ).each(function() {
			$( this ).addClass( "hidden" );
		});

		$(".saved-search-container").removeClass('hidden');
			
	
		//toggle link display
		$( ".search" ).each(function() {
			$( this ).removeClass( "selected" );
		});

		$("#saved-search-btn").addClass('selected');

		//hide results panel
		$(".search-control-container").addClass("hidden");
		$(".saved-search-container").css("width", "100%");


		//Force image grid to load
		$grid.isotope('layout');

	});

	$('.saved-search-container').resize();


//	Manage saved search hrefs
	$('.search-query-link-captions').on('click', function (ev) {
		ev.preventDefault();

		//close saved search panel
		$(".saved-search-container").addClass("hidden");

		//make sure searh results, map is showing
		$(".search-control-container").removeClass("hidden");
		$(".map-search-container").removeClass("hidden");
		
		//manage map button
		$( ".search" ).each(function() {
			$( this ).removeClass( "selected" );
		});

		$("#search-map-btn").addClass('selected');


		//force map to show after div is no longer hidden
		$("#search-map-test").css("position", "inherit");
		window.dispatchEvent(new Event('resize'));

		//make sure searh results are showing
		$(".search-control-container").removeClass("hidden");

		

	});



//	Manage Time Search sub panels
	$('#time-wheel').on('click', function (ev) {
		ev.preventDefault();
		
		//Show Map Search Panel, Hide Related Resources Drag Panel, CRUD Panel
		$( ".time-search-subcontainer" ).each(function() {
			$( this ).addClass( "hidden" );
		});

		$("#main").removeClass('hidden');
			
	
		//toggle link display
		$( ".time-search" ).each(function() {
			$( this ).removeClass( "selected" );
		});

		$("#time-wheel").addClass('selected');

	});

	$('#time-calendar').on('click', function (ev) {
		ev.preventDefault();
		
		//Show Map Search Panel, Hide Related Resources Drag Panel, CRUD Panel
		$( ".time-search-subcontainer" ).each(function() {
			$( this ).addClass( "hidden" );
		});

		$("#calendar").removeClass('hidden');
			
	
		//toggle link display
		$( ".time-search" ).each(function() {
			$( this ).removeClass( "selected" );
		});

		$("#time-calendar").addClass('selected');

	});


// 	Saved Search Grid
	var $grid = $('.saved-search-grid').isotope({
	  	// set itemSelector so .grid-sizer is not used in layout
	  	itemSelector: '.ss-grid-item',
	  	percentPosition: true,
		layoutMode: 'fitRows'
	});


// 	Map Panel
	var markerMap = new GMaps({
		el: '#search-map-test',
		zoom: 11,
		scrollwheel: false,
		lat: 37.886095,
		lng: -122.59888,
		styles: [{"featureType":"all","elementType":"geometry","stylers":[{"gamma":"0.82"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"gamma":"1.21"}]},{"featureType":"all","elementType":"labels","stylers":[{"lightness":"-60"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"gamma":"5.37"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#419d8c"},{"lightness":"-39"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"saturation":"0"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#42738d"},{"gamma":"5.37"}]}]
	});




//	Edit History
	$('#history-manager').on('click', function (ev) {
		ev.preventDefault();
		
		$("#current-resource-panel").addClass('hidden');
		$("#edit-history-panel").removeClass('hidden');
		$("#menu-panel").css("display", "none");

	});



//	Time Search
// 	Dimensions of sunburst.
	var width = 750;
	var height = 600;
	var radius = Math.min(width, height) / 2;
	var colortheme = d3.scale.category20c();

	// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
	var b = {
	  w: 100, h: 30, s: 3, t: 10
	};

	// Mapping of step names to colors.
	var colors = {
	  "HISTORIC": "#5687d1",
	  "product": "#7b615c",
	  "search": "#de783b",
	  "account": "#6ab975",
	  "other": "#a173d1",
	  "end": "#bbbbbb"
	};

	// Total size of all segments; we set this later, after loading the data.
	var totalSize = 0; 

	var vis = d3.select("#chart").append("svg:svg")
	    .attr("width", width)
	    .attr("height", height)
	    .append("svg:g")
	    .attr("id", "container")
	    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

	var partition = d3.layout.partition()
	    .size([2 * Math.PI, radius * radius])
	    .value(function(d) { return d.size; })
	    .sort(function(d) { return d3.descending(d.hits); });

	var arc = d3.svg.arc()
	    .startAngle(function(d) { return d.x; })
	    .endAngle(function(d) { return d.x + d.dx; })
	    .innerRadius(function(d) { return Math.sqrt(d.y); })
	    .outerRadius(function(d) { return Math.sqrt(d.y + d.dy); });

	// Use d3.text and d3.csv.parseRows so that we do not need to have a header
	// row, and can receive the csv as an array of arrays.
	d3.text("facets.csv", function(text) {
	  var csv = d3.csv.parseRows(text);
	  var json = buildHierarchy(csv);
	  createVisualization(json);
	});

	// Main function to draw and set up the visualization, once we have the data.
	function createVisualization(json) {

	  // Basic setup of page elements.
	  initializeBreadcrumbTrail();
	 

	  // Bounding circle underneath the sunburst, to make it easier to detect
	  // when the mouse leaves the parent g.
	  vis.append("svg:circle")
	      .attr("r", radius)
	      .style("opacity", 0);

	  // For efficiency, filter nodes to keep only those large enough to see.
	  var nodes = partition.nodes(json)
	      .filter(function(d) {
	      return (d.dx > 0.0005); // 0.005 radians = 0.29 degrees
	      });

	  var path = vis.data([json]).selectAll("path")
	      .data(nodes)
	      .enter().append("svg:path")
	      .attr("display", function(d) { return d.depth ? null : "none"; })
	      .attr("d", arc)
	      .attr("fill-rule", "evenodd")
	      .style("fill", function(d) { return colortheme((d.children ? d : d.parent).name); })
	      .style("opacity", 1)
	      .on("mouseover", mouseover);

	  // Add the mouseleave handler to the bounding circle.
	  d3.select("#container").on("mouseleave", mouseleave);

	  // Get total size of the tree = value of root node from partition.
	  totalSize = path.node().__data__.value;


	 };


	 // Set default count value
	 var percentage = "86425";
	 var percentageString = percentage;

	 d3.select("#percentage")
	      .text(percentageString);


	// Fade all but the current sequence, and show it in the breadcrumb trail.
	function mouseover(d) {

	  percentage = (d.value);
	  percentageString = percentage;
	  if (percentage < 1) {
	    percentageString = "< 1";
	  }

	  d3.select("#percentage")
	      .text(percentageString);

	  d3.select("#explanation")
	      .style("visibility", "");

	  var sequenceArray = getAncestors(d);
	  updateBreadcrumbs(sequenceArray, percentageString);

	  // Fade all the segments.
	  d3.selectAll("path")
	      .style("opacity", 0.3);

	  // Then highlight only those that are an ancestor of the current segment.
	  vis.selectAll("path")
	      .filter(function(node) {
	                return (sequenceArray.indexOf(node) >= 0);
	              })
	      .style("opacity", 1);
	}


	// Restore everything to full opacity when moving off the visualization.
	function mouseleave(d) {

	  // Hide the breadcrumb trail
	  d3.select("#trail")
	      .style("visibility", "hidden");

	  // Deactivate all segments during transition.
	  d3.selectAll("path").on("mouseover", null);

	  // Transition each segment to full opacity and then reactivate it.
	  d3.selectAll("path")
	      .transition()
	      .duration(1000)
	      .style("opacity", 1)
	      .each("end", function() {
	              d3.select(this).on("mouseover", mouseover);
	            });

	  d3.select("#explanation")
	      .style("visibility", "hidden");
	}

	// Given a node in a partition layout, return an array of all of its ancestor
	// nodes, highest first, but excluding the root.
	function getAncestors(node) {
	  var path = [];
	  var current = node;
	  while (current.parent) {
	    path.unshift(current);
	    current = current.parent;
	  }
	  return path;
	}

	function initializeBreadcrumbTrail() {
	  // Add the svg area.
	  var trail = d3.select("#sequence").append("svg:svg")
	      .attr("width", width)
	      .attr("height", 50)
	      .attr("id", "trail");
	  // Add the label at the end, for the percentage.
	  trail.append("svg:text")
	    .attr("id", "endlabel")
	    .style("fill", "#000");
	}

	// Generate a string that describes the points of a breadcrumb polygon.
	function breadcrumbPoints(d, i) {
	  var points = [];
	  points.push("0,0");
	  points.push(b.w + ",0");
	  points.push(b.w + b.t + "," + (b.h / 2));
	  points.push(b.w + "," + b.h);
	  points.push("0," + b.h);
	  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
	    points.push(b.t + "," + (b.h / 2));
	  }
	  return points.join(" ");
	}

	// Update the breadcrumb trail to show the current sequence and percentage.
	function updateBreadcrumbs(nodeArray, percentageString) {

	  // Data join; key function combines name and depth (= position in sequence).
	  var g = d3.select("#trail")
	      .selectAll("g")
	      .data(nodeArray, function(d) { return d.name + d.depth; });

	  // Add breadcrumb and label for entering nodes.
	  var entering = g.enter().append("svg:g");

	  // entering.append("svg:polygon")
	  //     .attr("points", breadcrumbPoints)
	  //     .style("fill", function(d) { return colors[d.name]; });

	  entering.append("svg:text")
	      .attr("x", (b.w + b.t) / 2)
	      .attr("y", b.h / 2)
	      .attr("dy", "0.35em")
	      .attr("text-anchor", "middle")
	      .attr("fill", "#123")
	      .text(function(d) { return d.name; });

	  //Set position for entering and updating nodes.
	  g.attr("transform", function(d, i) {
	    return "translate(" + i * (b.w + b.s) + ", 0)";
	  });

	 //  var start = 0;
	 //  g.attr("transform", function(d, i) {
		// start += d.name.length;
		// //console.log(start);
	 //    return "translate(" + d.name.length + ", 0)";
	 //  });

	  // Remove exiting nodes.
	  g.exit().remove();

	  // Now move and update the percentage at the end.
	  // d3.select("#trail").select("#endlabel")
	  //     .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
	  //     .attr("y", b.h / 2)
	  //     .attr("dy", "0.35em")
	  //     .attr("text-anchor", "middle")
	  //     .text(percentageString);

	  // Make the breadcrumb trail visible, if it's hidden.
	  d3.select("#trail")
	      .style("visibility", "");

	}

	


	// Take a 2-column CSV and transform it into a hierarchical structure suitable
	// for a partition layout. The first column is a sequence of step names, from
	// root to leaf, separated by hyphens. The second column is a count of how 
	// often that sequence occurred.
	function buildHierarchy(csv) {
	  var root = {"name": "root", "children": []};
	  for (var i = 0; i < csv.length; i++) {
	    var sequence = csv[i][0];
	    var size = +csv[i][1];
	    var hits = +csv[i][2];
	    if (isNaN(size)) { // e.g. if this is a header row
	      continue;
	    }
	    var parts = sequence.split("-");
	    var currentNode = root;
	    for (var j = 0; j < parts.length; j++) {
	      var children = currentNode["children"];
	      var nodeName = parts[j];
	      var childNode;
	      if (j + 1 < parts.length) {
	   // Not yet at the end of the sequence; move down the tree.
	  var foundChild = false;
	  for (var k = 0; k < children.length; k++) {
	    if (children[k]["name"] == nodeName) {
	      childNode = children[k];
	      foundChild = true;
	      break;
	    }
	  }
	  // If we don't already have a child node for this branch, create it.
	  if (!foundChild) {
	    childNode = {"name": nodeName, "children": []};
	    children.push(childNode);
	  }
	  currentNode = childNode;
	      } else {
			  // Reached the end of the sequence; create a leaf node.
			  childNode = {"name": nodeName, "size": size, "hits": hits};
			  children.push(childNode);
			  // console.log(childNode);
	      }
	    }
	  }
	  return root;
	};

//	Fill Colors
	var hue = d3.scale.category10();

	var luminance = d3.scale.sqrt()
	    .domain([0, 1e6])
	    .clamp(true)
	    .range([90, 20]);

	function fill(d) {
	  var p = d;
	  while (p.depth > 1) p = p.parent;
	  var c = d3.lab(hue(p.name));
	  c.l = luminance(d.sum);
	  return c;
	}


