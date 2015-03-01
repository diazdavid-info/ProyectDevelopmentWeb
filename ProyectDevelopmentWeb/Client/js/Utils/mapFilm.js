/**
 * 
 */

var map;
var marketCountries = [];
var infowindow;
var int;
function initializeMap(){
	var mapProp = {
			center:new google.maps.LatLng(40.416775400000000000,-3.703790199999957600),
			zoom:2,
			mapTypeId:google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			disableDefaultUI: true
	};
	map = new google.maps.Map(document.getElementById("map"), mapProp);
	infowindow = new google.maps.InfoWindow({content: ''});
}

function inicializeMarker(country){
	removeMarker();
	//console.log(matches);
	window.Constant.COUNT_MARKER().innerHTML = country.length;
	for (var int = 0; int < country.length; int++) {
//		marketCountries[int] = new google.maps.Marker({
//			position: new google.maps.LatLng(country[int].lat, country[int].lng),
//			map: map,
//			title: country[int].nombre,
//			icon: "img/soccer43.png",
//		});
		marketCountries[int] = new google.maps.Circle({
			strokeColor: "#FF0000",
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: "#FF0000",
			fillOpacity: 0.35,
			map: map,
			center: new google.maps.LatLng(country[int].lat, country[int].lng),
			radius: country[int].film.length * 40000
			
		});
		(function(marker,films) {
			google.maps.event.addListener(marker,'click',function(){
				map.setZoom(4);
				map.setCenter(marker.getCenter());
				map.setOptions({mapTypeId:google.maps.MapTypeId.SATELLITE});
				infowindow.setContent(films);
				infowindow.open(map,marker);
//				console.log(marker.title);
//				console.log(marker.title.split("-")[0]);
//				document.getElementById('allTeam').selected = "false";
//				document.getElementById(marker.title.split("-")[0]).selected = "true";
			});
			google.maps.event.addListener(infowindow,'closeclick',function(){
				map.setZoom(2);
				map.setCenter({lat: 40.416775400000000000,lng: -3.703790199999957600});
				map.setOptions({mapTypeId:google.maps.MapTypeId.ROADMAP});
//				document.getElementById(marker.title.split("-")[0]).selected = "false";
//				document.getElementById('allTeam').selected = "true";
			});
		})(marketCountries[int],inicializeFilm(country[int].film));
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

function inicializeFilm(films){
	result = "<div id='infowindow'>";
	for (var int = 0; int < films.length; int++){
		result += "<img onclick='popUp(event)' class='image-film' src='"+films[int].imagen+"' alt='"+films[int].nombre+"' />";
		result += "<p class='title-film'>"+films[int].nombre+"</p>";
	}
	result += "</div>";
//	result = "<div id='infowindow'>";
//	result += "<div id='escudos'>";
//	result += "<img id='escudo-local' src='"+matches.equipo_local.imagen+"' alt='"+matches.equipo_local.nombre+"' />";
//	result += "<img id='escudo-visitante' src='"+matches.equipo_visitante.imagen+"' alt='"+matches.equipo_visitante.nombre+"' />";
//	result += "<div class='limpieza'></div>";
//	result += "</div>";
//	result += "<div id='resultado'>";
//	result += "<h3>Resultado</h3>";
//	result += "<h4 id='resultado-local'>"+matches.goles_local+"</h4>";
//	result += "<h4 id='resultado-visitante'>"+matches.goles_visitante+"</h4>";
//	result += "<div class='limpieza'></div>";
//	result += "</div>";
//	result += "</div>";
	return result;
}

function removeMarker(){
	for ( var coun in marketCountries) {
		marketCountries[coun].setMap(null);
	}
}