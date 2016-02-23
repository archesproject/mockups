//D3 Radial Tree Layout	

	//Define basic SVG Container variables
    var nodesize = 6;  //Default node size
        nodeMouseOver = 8;	//Mouseover Node size
        opacity = 0.5;
	
	var diameter = 960;

	var tree = d3.layout.tree()
	    .size([360, diameter / 2 - 120])
	    .separation(function(a, b) { return (a.parent == b.parent ? 1 : 2) / a.depth; });

	var diagonal = d3.svg.diagonal.radial()
	    .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

	var svg = d3.select("#graph").append("svg")
	    .attr("width", diameter)
	    .attr("height", diameter - 150)
	    .append("g")
	    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + "), rotate(0)");
	   


	d3.json("flare.json", function(error, root) {
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
				var nodeName = d.name;
				
				d3.select("#nodeCrud")					
				.select("#nodeName")
				.text(nodeName);
				console.log(nodeName);

		    	//Show the form if user clicks on a node
    			d3.select("#nodeCrud").classed("hidden", false);				

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
        	if(d.name.length > 13)
           		return d.name.substring(0,13)+'...';
         	else
             	return d.name;                       
        });
	});

	d3.select("#graph").style("height", diameter - 150 + "px");


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
        console.log ("xScreen = " + xScreen + ", yScreen = " + yScreen + "window" + windowHeight);
       

        // Offset Crud Form.  
        // Magic Numbers: 	top of form should be at 130px. 
        //         			Form is 600px tall; half of form is 300px;
        // 
        // If current node position is less than 430 (e.g.: 130 + 300) place top of crud form at 130px
        // Else, offset crud form up 300px so that it is centered around node

        
        
        

        if ((yScreen + 300) > windowHeight) {
		    $("#nodeCrud").offset({left:x,top:300});
		    
		    //scroll div to top of page
			$("html, body").animate({ scrollTop: $("#nodeCrud").offset().top }, 400);
		 //    console.log("hitting bottom");
		
		} else if ((yScreen - 300) < 150) { 
		    $("#nodeCrud").offset({left:x,top:yScreen-100});
		    $("html, body").animate({ scrollTop: $("#page-title").offset().top }, 400);
		    // console.log("hitting top");
		
		} else { 
		    $("#nodeCrud").offset({left:x,top:y-300});
		    $("html, body").animate({ scrollTop: $("#nodeCrud").offset().top }, 400);
		}

		

    })
})

