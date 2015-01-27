
// Extensión del objeto window para añadir constantes globales.
window.Constant = {
	URL_SERVER: function() { return "../Server/Services/Api.php"; },
	XMLHTTP_CLIENT: function() { return (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); },
	SELECT_TEAM: function() { return document.getElementById('select-team'); },
	SELECT_MATCH_DAY: function() { return document.getElementById('select-matchDay'); },
	DESPLE_MENU: function() { return document.getElementById('desple-menu'); },
	BUTTON_MENU: function() { return document.getElementById('botton-menu'); },
	BUTTON_CLOSE: function() { return document.getElementById('botton-close'); }
	//desple_menu = document.getElementById('desple-menu');
	//botton_close = document.getElementById('botton-close');
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