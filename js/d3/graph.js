//D3 Radial Tree Layout	

	//Define basic SVG Container variables
    var nodesize = 6;  //Default node size
        nodeMouseOver = 8;	//Mouseover Node size
        opacity = 0.5;
	
	var diameter = 1080;
	var height = 700;

	var tree = d3.layout.tree()
	    .size([360, diameter / 2 ])
	    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

	var diagonal = d3.svg.diagonal.radial()
	    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

	var svg = d3.select("#graph").append("svg")
	    .attr("width", diameter)
	    .attr("height", height)
	    .call(d3.behavior.zoom().on("zoom", redraw))
	    .append("g")
	    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + "), rotate(0)");
	   


	d3.json("resourcegraph.json", function(error, root) {
	  if (error) throw error;

	  var nodes = tree.nodes(root),
	      links = tree.links(nodes);

	  var link = svg.selectAll(".link")
	    .data(links)
	    .enter().append("path")
	    .attr("class", "link")
	    .attr("d", diagonal);

	  var node = svg.selectAll(".node")
	    .data(nodes)
	    .enter().append("g")
	    .attr("class", "node")
	    .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

	    	
	  node.append("circle")
	    .attr("r", nodesize)

			//add interactivity
		    .on("mouseover", function() {
              	d3.select(this)
	          	.attr("r", nodeMouseOver)
	          	.attr("class", "nodeMouseOver")
		    })

		    .on("click", function (d) {
		    	d3.select(this)
		    			
				//Get the Node Name
				var nodeName = d.entitytypeid;
				
				d3.select("#nodeCrud")					
				.select("#nodeName")
				.text(nodeName);
				
				// move entire graph on click
				// var tempx = 100;
				// var tempy = 100;
				// svg.attr("transform", "translate(" + tempx + "," + tempy + "), rotate(0)");

		    	//Show the form if user clicks on a node
    			d3.select("#nodeCrud").classed("hidden", false);	


    			console.log("x: " + d.x + " y: " + d.y);
				// svg.attr("transform",
	   //    			"translate(" + d.x + "," + d.y + ")"
	   //    			+ " scale(" + 1.75 + ")");


				 $("#nodeCrud").fadeIn(300, "linear");

		        // Close Permissions/Branch Library panels
		        $('#branch-panel').fadeOut(200, "linear");
		        $('#permissions-panel').fadeOut(200, "linear");



    		})


		    .on("mouseout", function(d) {
		      	d3.select(this)
		      	.attr("r", nodesize)
		      	.attr("class", "node");

		      	//Hide the form
				//d3.select("#nodeCrud").classed("hidden", true);
		    })


	  node.append("text")
	    .attr("dy", ".31em")
	    .attr("class", "node-text")
	    .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
	    .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
	    // .text(function(d) { return d.name; });

	    .text(function (d) {
        	if(d.entitytypeid.length > 13)
           		return d.entitytypeid.substring(0,13)+'...';
         	else
             	return d.entitytypeid;                       
        });
	});

	d3.select("#graph").style("height", diameter - 150 + "px");


	//Zoom support: Redraw Graph on zoom
	function redraw() {
	  	
	  	//console.log("here", d3.event.translate[0], d3.event.translate[1], d3.event.scale);

	  	var xt = d3.event.translate[0] + 180;

	  	svg.attr("transform",
	      	"translate(" + xt + "," + d3.event.translate[1] + ")"
	      	+ " scale(" + d3.event.scale + ")");
	}





$(document).ready(function(){
  	$("#graph").click(function(e){
        
        //get cursor position, add a bit of offset
        // var x = e.pageX + 15;
        // var y = e.pageY - 5;

        //Get cursor position, add x offset
        var x = e.pageX + 15;
        var y = e.pageY;

        var xScreen = e.clientX;
        var yScreen = e.clientY;
        var windowHeight = $(window).height();
        //console.log ("xScreen = " + xScreen + ", yScreen = " + yScreen + "window" + windowHeight);
       

        // Offset Crud Form.  
        // Magic Numbers: 	top of form should be at 130px. 
        //         			Form is 600px tall; half of form is 300px;
        // 
        // If current node position is less than 430 (e.g.: 130 + 300) place top of crud form at 130px
        // Else, offset crud form up 300px so that it is centered around node

        
        // $("#nodeCrud").fadeIn(300, "linear");

        // // Close Permissions/Branch Library panels
        // $('#branch-panel').fadeOut(200, "linear");
        // $('#permissions-panel').fadeOut(200, "linear");
        

  //       if ((yScreen + 300) > windowHeight) {
		//     $("#nodeCrud").offset({left:x,top:300});
		    
		//     //scroll div to top of page
		// 	$("html, body").animate({ scrollTop: $("#nodeCrud").offset().top }, 400);
		//  //    console.log("hitting bottom");
		
		// } else if ((yScreen - 300) < 150) { 
		//     $("#nodeCrud").offset({left:x,top:yScreen-100});
		//     $("html, body").animate({ scrollTop: $("#page-title").offset().top }, 400);
		//     // console.log("hitting top");
		
		// } else { 
		//     $("#nodeCrud").offset({left:x,top:y-300});
		//     $("html, body").animate({ scrollTop: $("#nodeCrud").offset().top }, 400);
		// }

		

    })
})

