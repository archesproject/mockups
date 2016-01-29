//	JavaScript to Support Arches Configuration Manager
//	Version: 0.1
//	
	
//	Manage Form and Menu Item display with the following functions
	var forms = ["#core-form", "#maps-form", "#search-form"];
	var menuItems = ["#menu-core", "#menu-maps", "#menu-search"];
	
	var formsLength = forms.length;
	var menuItemsLength = menuItems.length;

	function closeForms () {
		//hide any form that is currently being shown
		for (var i = 0; i < formsLength; i++) {
			var currentForm;
			currentForm = forms[i];

			if ($(currentForm).hasClass('in')) {
				$(currentForm).removeClass('in');
				$(currentForm).removeClass('active');
			}
		}
	}

	function unselectMenu () {
		//Unselect any menu entry that is currently hightlighted
		for (var i = 0; i < menuItemsLength; i++) {
			var currentMenuItem;
			currentMenuItem = menuItems[i];

			if ($(currentMenuItem).hasClass('current')) {
				$(currentMenuItem).removeClass('current');
			}
		}
	}


//	Define Default Page State
	$(document).ready(function() {

		//Set initial menu/form to "Core"
		$("#menu-core").addClass("current");
		$("#core-form").addClass("in");
        $("#core-form").addClass("active");

    	//load core form
    	$( "#core-form" ).load("config_core.html");

    	//console.log ("doc ready");
			
	});


//	Handle Core Link
	$("#menu-core").click(function(){
            
		//turn off display of currently displayed form
		closeForms();
		unselectMenu();

		//load content
		$( "#core-form" ).load("config_core.html");

        //show the selected form
        $("#core-form").addClass("in");
        $("#core-form").addClass("active");

        //Highlight selected form menu
        $("#menu-core").addClass("current");

        return false;
    });


//	Handle Map Link
	$("#menu-maps").click(function(){
            
		//turn off display of currently displayed form
		closeForms();
		unselectMenu();

		//load content
		$( "#maps-form" ).load("config_map.html");

        //show the selected form
        $("#maps-form").addClass("in");
        $("#maps-form").addClass("active");

        //Highlight selected form menu
        $("#menu-maps").addClass("current");

        return false;
    });


 //	Handle Search Link
	$("#menu-search").click(function(){
            
		//turn off display of currently displayed form
		closeForms();
		unselectMenu();

		//load content
		$( "#search-form" ).load("config_search.html");

        //show the selected form
        $("#search-form").addClass("in");
        $("#search-form").addClass("active");

        //Highlight selected form menu
        $("#menu-search").addClass("current");

        return false;
    });













	