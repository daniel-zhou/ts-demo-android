/**
 * app core process
 */

/* globals */
var rootUrl;

var isiPad = navigator.userAgent.match(/iPad/i) !== null;
var isiPhone = navigator.userAgent.match(/iPhone/i) !== null;
var isiPod = navigator.userAgent.match(/iPod/i) !== null;
var isAndroid = navigator.userAgent.match(/android/i) !== null;
var isIE = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
var isiOsDevice = (isiPad || isiPhone || isiPod);

var flagOrientation;
var navOption = {transition: "none", changeHash: false, showLoadMsg : false};


$( document ).ready(function() {

    $( document ).on( 'pagebeforeshow', ".ui-nav-page", function( e ) {
		/* nav panel 
		 * --------------------------------------------------------*/
    	$(".btn-nav-panel").bind("click", function(event) {
    		$(".nav-panel").panel( "open" );
        });

        $(".btn_nav_panel_profile").bind("click", function(event) {
        	navPage("profile", navOption);
        });

        $(".btn_nav_panel_activity").bind("click", function() {
        	navPage("activity", navOption);
        });

        $(".btn_nav_panel_connections").bind("click", function() {
        	navPage("connection", navOption);
        });

        $(".btn_nav_panel_documents").bind("click", function() {
        	navPage("document", navOption);
        });

        $(".btn_nav_panel_myapps").bind("click", function() {
        	navPage("myapps", navOption);
        });

        $(".btn_nav_panel_setting").bind("click", function() {
        	navPage("setting", navOption);
        });

        $(".btn_nav_panel_logout").bind("click", function() {
        	navPage("login", navOption);
        });    	
    });

	/* login
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#login', function (event) {
	    $("#logo > img").attr("src", rootUrl + "/img/logo.png");
        $("#username").attr("placeholder", "Username");
        $("#password").attr("placeholder", "Password");

        $("#username").val('');
        $("#password").val('');

        // Prevent default selection of input field on iOS
        $("#username").focus().blur();

        $("#btn_login").bind("click", function() {
            navPage("activity", {transition: "none", changeHash: false, showLoadMsg : false});
            $('#password').val('');
        });
    });

	/* activity
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#activity', function (event) {
		$("#btn_broadcast").bind("click", function(event) {
			navPage("broadcast", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* profile 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#profile', function (event) {
        $(".buying").show();
        $(".selling").hide();

        $("#radio-profile-buy").bind("click", function(event) {
        	$(".buying").show();
        	$(".selling").hide();
        });

        $("#radio-profile-sell").bind("click", function(event) {
        	$(".buying").hide();
        	$(".selling").show();
        });

		$("#btn_visibility").bind("click", function(event) {
			navPage("visibility", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* visibility 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#visibility', function (event) {
        $(".show").show();
        $(".link").hide();

        $("#radio-visibility-show").bind("click", function(event) {
        	$(".show").show();
        	$(".link").hide();
        });

        $("#radio-visibility-link").bind("click", function(event) {
        	$(".show").hide();
        	$(".link").show();
        });

		$("#btn_back").bind("click", function(event) {
			navPage("profile", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* broadcast 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#broadcast', function (event) {
		$("#btn_back").bind("click", function(event) {
			navPage("activity", {transition: "none", changeHash: false, showLoadMsg : false});
        });

		$("#btn_share").bind("click", function(event) {
			navPage("activity", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* connection 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#connection', function (event) {
		$("#btn_addcontact").bind("click", function(event) {
			navPage("addcontact", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* add connection 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#addcontact', function (event) {
        $(".manual").show();
        $(".phonebook").hide();
        $(".facebook").hide();

        $("#radio-add-manual").bind("click", function(event) {
        	$(".manual").show();
	        $(".phonebook").hide();
	        $(".facebook").hide();
        });

        $("#radio-add-phonebook").bind("click", function(event) {
        	$(".manual").hide();
        	$(".phonebook").show();
	        $(".facebook").hide();
        });

        $("#radio-add-facebook").bind("click", function(event) {
        	$(".manual").hide();
        	$(".phonebook").hide();
	        $(".facebook").show();
        });

		$("#btn_back").bind("click", function(event) {
			navPage("connection", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* document 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#document', function (event) {
		$("#btn_createdoc").bind("click", function(event) {
			navPage("createinvoice", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* createinvoice 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#createinvoice', function (event) {
        $(".invoice-header").show();
        $(".invoice-content").hide();
        $(".invoice-remark").hide();

        $("#radio-add-header").bind("click", function(event) {
        	$(".invoice-header").show();
	        $(".invoice-content").hide();
	        $(".invoice-remark").hide();
        });

        $("#radio-add-content").bind("click", function(event) {
        	$(".invoice-header").hide();
        	$(".invoice-content").show();
	        $(".invoice-remark").hide();
        });

        $("#radio-add-remark").bind("click", function(event) {
        	$(".invoice-header").hide();
        	$(".invoice-content").hide();
	        $(".invoice-remark").show();
        });

		$("#btn_back").bind("click", function(event) {
			navPage("document", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* createnote 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#createnote', function (event) {
        $(".note-header").show();
        $(".note-content").hide();
        $(".note-remark").hide();

        $("#radio-add-header").bind("click", function(event) {
        	$(".note-header").show();
	        $(".note-content").hide();
	        $(".note-remark").hide();
        });

        $("#radio-add-content").bind("click", function(event) {
        	$(".note-header").hide();
        	$(".note-content").show();
	        $(".note-remark").hide();
        });

        $("#radio-add-remark").bind("click", function(event) {
        	$(".note-header").hide();
        	$(".note-content").hide();
	        $(".note-remark").show();
        });

		$("#btn_back").bind("click", function(event) {
			navPage("document", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* myapps 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#myapps', function (event) {
		$("#btn_appcenter").bind("click", function(event) {
			navPage("appcenter", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* appcenter 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#appcenter', function (event) {
		$("#btn_back").bind("click", function(event) {
			navPage("myapps", {transition: "none", changeHash: false, showLoadMsg : false});
        });
    });

	/* setting 
	 * ------------------------------------------------------------------------------*/
    $(document).on('pagebeforeshow', '#setting', function (event) {

    });
});


function startApp() {
    locale = $.localise.defaultLanguage.substring(0, 2);
    mimeType = "text/html";

    var ele = location.href.split("/");
    var result = [];
    for( i=0; i<ele.length-1; i++)
        result.push(ele[i]);
    rootUrl = result.join("/");
    load_Language(locale);

    navPage("login", {transition: "none", changeHash: false, showLoadMsg : false});

    if (document.addEventListener) {
        document.addEventListener("deviceready", initApp, false);
    }
}

function load_Language(newLang) {
    $.localise(rootUrl + '/i18n/strings', {language: newLang, loadBase: false});
}

function navPage(to, page_opt) {
    var view = to + ".html";
    var controller = to + ".js";
    var path = rootUrl + "/pages/";

    $.mobile.changePage(path + view, page_opt);
}

function initApp() {
    if(isAndroid) {
        cordova.exec(null, null, "SplashScreen", "hide", []);
    }

    document.addEventListener("pause", onPause, false);
    document.addEventListener("orientationChanged", onOrientationChanged);
	document.addEventListener("backbutton", onBackKey, false);
	document.addEventListener("menubutton", onMenuKey, false);
}

function onPause() {
}

function onOrientationChanged() {
}

function onBackKey(e) {
	if ($("#btn_back").length) {
        $("#btn_back").click();
	} else {
		navigator.notification.confirm(
			'Do you confirm to exit the application?', // message
			 function(buttonIndex) { 
				if (buttonIndex == 1)
					navigator.app.exitApp(); 
			},            // callback to invoke with index of button pressed
			'Exit',           // title
			['Confirm','Cancel']         // buttonLabels
		);
	}
}

function onMenuKey(e) {
	if ($(".nav-panel").length) {
		if ($(".nav-panel").hasClass("ui-panel-open"))
			$(".nav-panel").panel( "close" );
		else
			$(".nav-panel").panel( "open" );
	}
}

checkorientation = function(o) {
    switch(o) {
    case 0: // portrait, home bottom
        flagOrientation = "portrait";
        break;
    case 180: // portrait, home top
        flagOrientation = "portrait";
        break;
    case -90: // landscape, home left
        flagOrientation = "landscape";
        break;
    case 90: // landscape, home right
        flagOrientation = "landscape";
        break;
    }
}

/******************************************
 * phonegap functions
 *
 */
var preventBehavior = function(e) { e.preventDefault(); };

function fail(error) {
    _alertBox(Str_txt_failed_request);
}
function close() {
    var viewport = document.getElementById('viewport');
    viewport.style.position = "relative";
    viewport.style.display = "none";
}

function get_contacts() {
    if (typeof navigator.contacts !== 'undefined') {
        var obj = new ContactFindOptions();
        obj.filter="";
        obj.multiple=true;
        obj.limit=100;
        navigator.contacts.find(["name", "phoneNumbers"], getContactsBack, fail, obj);
    }
}

function getContactsBack(contacts) {
}

function get_currentLocation() {
    if (typeof navigator.geolocation !== 'undefined') {
        navigator.geolocation.getCurrentPosition(getGeolocationBack, fail, {maximumAge:60000, timeout:5000, enableHighAccuracy:true});
    }
}

function getGeolocationBack(position) {
}