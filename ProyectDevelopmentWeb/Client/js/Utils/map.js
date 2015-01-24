var map;
var marketMatches = [];
var infowindow;
var int;
function initializeMap(){
	var mapProp = {
			center:new google.maps.LatLng(40.416775400000000000,-3.703790199999957600),
			zoom:6,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			disableDefaultUI: true
	};
	map = new google.maps.Map(document.getElementById("map"), mapProp);
	infowindow = new google.maps.InfoWindow({content: ''});
}

function inicializeMarker(matches){
	
	for (var int = 0; int < matches.length; int++) {
//		console.log(matches[int].equipo_local.lat);
//		console.log(matches[int].equipo_local.lng);
//		console.log(matches[int].equipo_local.nombre);
		marketMatches[int] = new google.maps.Marker({
			position: new google.maps.LatLng(matches[int].equipo_local.lat, matches[int].equipo_local.lng),
			map: map,
			title: matches[int].equipo_local.nombre
		});
	}
	//var request = requestAjax("default",liga,team,matchDay);
//	for (int = 1; int < Object.keys(request).length + 1; int++) {
//		equipos[int] = new google.maps.Marker({
//			position: new google.maps.LatLng(request[int]['lat'],request[int]['lng']),
//			map: map,
//			title: request[int]['nombre']
//		});
//		(function(marker,teams) {
//			google.maps.event.addListener(marker,'click',function(){
//				map.setZoom(17);
//				map.setCenter(marker.getPosition());
//				map.setOptions({mapTypeId:google.maps.MapTypeId.SATELLITE});
//				infowindow.setContent(teams);
//				infowindow.open(map,marker);
//				console.log(marker.title);
//				document.getElementById('allTeam').selected = "false";
//				document.getElementById(marker.title).selected = "true";
//			});
//			google.maps.event.addListener(infowindow,'closeclick',function(){
//				map.setZoom(6);
//				map.setCenter({lat: 40.416775400000000000,lng: -3.703790199999957600});
//				map.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP});
//				document.getElementById(marker.title).selected = "false";
//				document.getElementById('allTeam').selected = "true";
//			});
//		})(equipos[int],inicializeTeam(liga,request[int]['nombre'],matchDay));
//	}
}

//function inicializeMarker(liga,team,matchDay){
//	var request = requestAjax("default",liga,team,matchDay);
//	for (int = 1; int < Object.keys(request).length + 1; int++) {
//		equipos[int] = new google.maps.Marker({
//			position: new google.maps.LatLng(request[int]['lat'],request[int]['lng']),
//			map: map,
//			title: request[int]['nombre']
//		});
//		(function(marker,teams) {
//			google.maps.event.addListener(marker,'click',function(){
//				map.setZoom(17);
//				map.setCenter(marker.getPosition());
//				map.setOptions({mapTypeId:google.maps.MapTypeId.SATELLITE});
//				infowindow.setContent(teams);
//				infowindow.open(map,marker);
//				console.log(marker.title);
//				document.getElementById('allTeam').selected = "false";
//				document.getElementById(marker.title).selected = "true";
//			});
//			google.maps.event.addListener(infowindow,'closeclick',function(){
//				map.setZoom(6);
//				map.setCenter({lat: 40.416775400000000000,lng: -3.703790199999957600});
//				map.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP});
//				document.getElementById(marker.title).selected = "false";
//				document.getElementById('allTeam').selected = "true";
//			});
//		})(equipos[int],inicializeTeam(liga,request[int]['nombre'],matchDay));
//	}
//}

function removeMarker(){
	for ( var equipo in equipos) {
		equipos[equipo].setMap(null);
	}
}

function inicializeTeam(liga,team,matchDay){
	var match = requestAjax("getMatch",liga,team,matchDay);
	var playerMatch = requestAjax("getPlayerMatch",match[0]['jornada'],match[0]['fecha'],match[0]['liga_id'],match[0]['equipo_local']);
	var result;
	result = "<div id='infowindow'>";
	result += "<div id='escudos'>";
	result += "<img id='escudo-local' src='"+match[0]['imagen_local']+"' alt='"+match[0]['equipo_local']+"' />";
	result += "<img id='escudo-visitante' src='"+match[0]['imagen_visitante']+"' alt='"+match[0]['equipo_visitante']+"' />";
	result += "<div class='limpieza'></div>";
	result += "</div>";
	result += "<div id='resultado'>";
	result += "<h3>Resultado</h3>";
	result += "<h4 id='resultado-local'>"+match[0]['goles_local']+"</h4>";
	result += "<h4 id='resultado-visitante'>"+match[0]['goles_visitante']+"</h4>";
	result += "<div class='limpieza'></div>";
	result += "</div>";
	result += "<div id='alineacion'>";
	result += "<h3>Alineación</h3>"
	result += "<div id='equipo-local'>";
	result += "<table>";
	result += "<tr>";
	result += "<th>Dorsal</th>";
	result += "<th>Nombre</th>";
	result += "<th>Imagen</th>";
	result += "</tr>";
	for (var key in playerMatch[1]) {
		result += "<tr>";
		result += "<td>"+playerMatch[1][key]['jugador_dorsal']+"</td>";
		result += "<td>"+playerMatch[1][key]['nombre']+"</td>";
		result += "<td><img src='"+playerMatch[1][key]['imagen']+"' alt='"+playerMatch[1][key]['nombre']+"'/></td>";
		result += "</tr>";
	}
	result += "</table>";
	result += "</div>";
	result += "<div id='equipo-visitante'>"
	result += "<table>";
	result += "<tr>";
	result += "<th>Dorsal</th>";
	result += "<th>Nombre</th>";
	result += "<th>Imagen</th>";
	result += "</tr>";
	for (var key in playerMatch[0]) {
		result += "<tr>";
		result += "<td>"+playerMatch[0][key]['jugador_dorsal']+"</td>";
		result += "<td>"+playerMatch[0][key]['nombre']+"</td>";
		result += "<td><img src='"+playerMatch[0][key]['imagen']+"' alt='"+playerMatch[0][key]['nombre']+"'/></td>";
		result += "</tr>";
	}
	result += "</table>";
	result += "</div>";
	result += "<div class='limpieza'></div>";
	result += "</div>";
	result += "</div>";
	return result;
}