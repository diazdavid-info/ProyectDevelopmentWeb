
// Extensión del objeto window para añadir constantes globales.
window.Constant = {
	URL_SERVER: function() { return "../Server/Services/Api.php"; },
	XMLHTTP_CLIENT: function() { return (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); },
	SELECT_TEAM: function() { return document.getElementById('select-team'); },
	SELECT_MATCH_DAY: function() { return document.getElementById('select-matchDay'); },
	SELECT_TIME: function() { return document.getElementById('select-time'); },
	SELECT_COUNTRY: function() { return document.getElementById('select-country'); },
	DESPLE_MENU: function() { return document.getElementById('desple-menu'); },
	BUTTON_MENU: function() { return document.getElementById('botton-menu'); },
	BUTTON_CLOSE: function() { return document.getElementById('botton-close'); },
	BUTTONS_ASIDE: function() { return document.getElementsByClassName('button-aside'); },
	BUTTON_FILTERS: function() { return document.getElementById('button-filters'); },
	BUTTON_CONTROLLERS: function() { return document.getElementById('button-controllers'); },
	BODY_FILTER: function() { return document.getElementById('body-filter'); },
	BODY_CONTROLLER: function() { return document.getElementById('body-controller'); },
	CONTROL_ZOOM: function() { return document.getElementById('control-zoom'); },
	BUTTON_ZOOM_MORE: function() { return document.getElementById('button-zoom-more'); },
	BUTTON_ZOOM_LESS: function() { return document.getElementById('button-zoom-less'); },
	BUTTON_TOP: function() { return document.getElementById('button-top'); },
	BUTTON_LEFT: function() { return document.getElementById('button-left'); },
	BUTTON_RIGHT: function() { return document.getElementById('button-right'); },
	BUTTON_BOTTOM: function() { return document.getElementById('button-bottom'); },
	COUNT_MARKER: function() { return document.getElementById('num-cantidad'); },
	IMAGE_POPUP: function() { return document.getElementById('imagen-popup'); },
	POPUP: function() { return document.getElementById('popup'); }
}

// Extensión del objeto window para añadir funciones globales.
window.Utils = {
		ParseJsonToObjct: function(data, obj) {
			var json = JSON.parse(data);
			return obj.instance(json);
		},
		ParseDate: function(date) {
			var dates = date.split("-");
			return dates[2].trim()+"-"+dates[1].trim()+"-"+dates[0].trim();
		}
}