//	JavaScript to Support Arches Configuration Manager
//	Version: 0.1
//	
	
//	Manage Form and Menu Item display with the following functions
	var forms = ["#core-form", "#maps-form", "#search-form", "#gui-form"];
	var menuItems = ["#menu-core", "#menu-maps", "#menu-search", "#menu-gui"];
	
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
	$("#menu-core").addClass("current");
	$("#core-form").addClass("in");
    $("#core-form").addClass("active");

	//load core form
	$( "#core-form" ).load("config_core.html");

	//console.log ("doc ready");



// 	Manage Aside panel visibility
	$('#toggle-aside').on('click', function (ev) {
		ev.preventDefault();
		if (!nifty.container.hasClass('aside-in')) {
			$.niftyAside('show');
			//asdVisCheckbox.niftyCheck('toggleOn')

			//update icon
			$('#toggle-aside-icon').removeClass('fa-toggle-on');
			$('#toggle-aside-icon').addClass('fa-toggle-off');

		} else {
			$.niftyAside('hide');
			//asdVisCheckbox.niftyCheck('toggleOff')

			//update icon
			$('#toggle-aside-icon').removeClass('fa-toggle-off');
			$('#toggle-aside-icon').addClass('fa-toggle-on');
		}
	});



//	Config_manager page scripts
	$(document).ready(function(){

		// Open Help Panel
        $(document).delegate(".help", "click", function(event) {

        	// Get id of user selected help link, strip off '-link' to get id of target help aside
        	var helpLink = '#' + event.target.id;
        	var helpPanel = helpLink.slice(0, -5);
        	var helpPanelContent = helpPanel + '-content';
        	var cardContainer = helpPanel + '-cc';

			// console.log('cc ' + cardContainer);
   //      	console.log('target panel ' + helpPanelContent);

        	//get page to load into help panel
        	var page = $(helpPanel).attr("data-page");
        	$(helpPanelContent).load(page);
        	
			// Show help/thesaurus panel
			//$(document).find(cardContainer).css('margin-right', '240px');
			var delay = 300;
				setTimeout(function() {
					$(document).find(cardContainer).animate({
					    "margin-right": "240px"
					});
			}, delay);

			var delayPanel = 800;
				setTimeout(function() {
					$(document).find(helpPanel).fadeIn(1400);
			}, delayPanel);
			//$(document).find(helpPanel).fadeIn(1200);
			
			return false;

        });

        //dismiss Help panel
        $(document).delegate(".help-close", "click", function(event) {

        	// Get id of user selected help close, strip off '-close' to get id of target help aside
        	var helpLink = '#' + event.target.id;
        	var helpClose = helpLink.slice(0, -6);
        	var cardContainer = helpClose + '-cc';

        	console.log('cc ' + cardContainer);

        	// Hide
			$(document).find(helpClose).fadeOut(750);
			var delay = 600;
				setTimeout(function() {
					$(document).find(cardContainer).animate({
					    "margin-right": "0px"
					 });
			}, delay);
			
			return false;

        });



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













	