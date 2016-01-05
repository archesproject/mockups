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
	    .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

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
	    .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
	    .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
	    .text(function(d) { return d.name; });
	});

	d3.select("#graph").style("height", diameter - 150 + "px");


$(document).ready(function(){
  	$("#graph").click(function(e){
        
        //get cursor position, add a bit of offset
        var x = e.pageX + 10;
        var y = e.pageY - 5;

        //$("#graph").show(2000);
        $("#nodeCrud").offset({left:x,top:y});

    })
})

