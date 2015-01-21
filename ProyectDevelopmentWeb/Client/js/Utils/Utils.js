/**
 * 
 */

window.Constant = {
	URL_SERVER: function() { return "../Server/Services/Api.php"; },
	XMLHTTP_CLIENT: function() { return (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP"); }
}

//function Utils () {
//	parseJsonToObject = function(data, obj) {
//		console.log(data);
//		console.log(obj);
//	}
//}

window.Utils = {
		ParseJsonToObjct: function(data, obj) {
			var json = JSON.parse(data);
			console.log(json.id);
			return new obj(data.id, data.nombre, data.ayno_inicio, data.ayno_fin);
			
		}
}