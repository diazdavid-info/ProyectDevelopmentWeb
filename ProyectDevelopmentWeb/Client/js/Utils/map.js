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
	removeMarker();
	//console.log(matches);
	window.Constant.COUNT_MARKER().innerHTML = matches.length;
	for (var int = 0; int < matches.length; int++) {
		marketMatches[int] = new google.maps.Marker({
			position: new google.maps.LatLng(matches[int].equipo_local.lat, matches[int].equipo_local.lng),
			map: map,
			title: matches[int].equipo_local.nombre + "-" + matches[int].equipo_visitante.nombre,
			icon: "img/soccer43.png",
		});
		(function(marker,teams) {
			google.maps.event.addListener(marker,'click',function(){
				map.setZoom(17);
				map.setCenter(marker.getPosition());
				map.setOptions({mapTypeId:google.maps.MapTypeId.SATELLITE});
				infowindow.setContent(teams);
				infowindow.open(map,marker);
				console.log(marker.title);
				console.log(marker.title.split("-")[0]);
				document.getElementById('allTeam').selected = "false";
				document.getElementById(marker.title.split("-")[0]).selected = "true";
			});
			google.maps.event.addListener(infowindow,'closeclick',function(){
				map.setZoom(6);
				map.setCenter({lat: 40.416775400000000000,lng: -3.703790199999957600});
				map.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP});
				document.getElementById(marker.title.split("-")[0]).selected = "false";
				document.getElementById('allTeam').selected = "true";
			});
		})(marketMatches[int],inicializeTeam(matches[int]));
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
	for ( var equipo in marketMatches) {
		marketMatches[equipo].setMap(null);
	}
}

function inicializeTeam(matches){
	result = "<div id='infowindow'>";
	result += "<div id='escudos'>";
	result += "<img id='escudo-local' src='"+matches.equipo_local.imagen+"' alt='"+matches.equipo_local.nombre+"' />";
	result += "<img id='escudo-visitante' src='"+matches.equipo_visitante.imagen+"' alt='"+matches.equipo_visitante.nombre+"' />";
	result += "<div class='limpieza'></div>";
	result += "</div>";
	result += "<div id='resultado'>";
	result += "<h3>Resultado</h3>";
	result += "<h4 id='resultado-local'>"+matches.goles_local+"</h4>";
	result += "<h4 id='resultado-visitante'>"+matches.goles_visitante+"</h4>";
	result += "<div class='limpieza'></div>";
	result += "</div>";
	result += "</div>";
	return result;
}