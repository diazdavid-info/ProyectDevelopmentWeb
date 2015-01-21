
// Extensión del objeto window para añadir constantes globales.
window.Constant = {
	URL_SERVER: function() { return "../Server/Services/Api.php"; },
	XMLHTTP_CLIENT: function() { return (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); }
}

// Extensión del objeto window para añadir funciones globales.
window.Utils = {
		ParseJsonToObjct: function(data, obj) {
			var json = JSON.parse(data);
			return new obj(json[0].id, data.nombre, data.ayno_inicio, data.ayno_fin);
			
		}
}