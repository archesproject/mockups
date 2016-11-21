//	JavaScript to Support Arches Import Manager
//	Version: 0.1
//


//	Config JSON Editor
	$('#map-config-editor').summernote({
		height: 250,
		toolbar: [
		    // [groupName, [list of button]]
		    ['code', ['codeview']]
		],
		codemirror: { // codemirror options
		    theme: 'monokai'
		},

		oninit: function() {
	        $("div.note-editor button[data-event='codeview']").click();
	        $('#map-config-editor').summernote('editor.insertText', 'hello world');

	    }


	});

	//$('#map-config-editor').summernote('insertText', 'Hello, world');


	//
	// $('#map-config-editor').summernote();
	// $('#map-config-editor').summernote('editor.insertText', 'hello world');















