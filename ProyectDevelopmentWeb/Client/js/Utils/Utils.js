
// Extensión del objeto window para añadir constantes globales.
window.Constant = {
	URL_SERVER: function() { return "../Server/Services/Api.php"; },
	XMLHTTP_CLIENT: function() { return (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); },
	SELECT_TEAM: function() { return document.getElementById('select-team'); }
}

// Extensión del objeto window para añadir funciones globales.
window.Utils = {
		ParseJsonToObjct: function(data, obj) {
			var json = JSON.parse(data);
			return obj.instance(json);
		}
}