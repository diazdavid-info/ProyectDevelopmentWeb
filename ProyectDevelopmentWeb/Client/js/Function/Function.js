/**
 * 
 */

var leagues = [];
var teams = [];
var matches = [];
var allMatches = [];
var matchDay = [];
var calendar = [];

window.onload = function() {
	
	initApp();
	
}

function initApp(){
	getAllLeague();
	getTeamLeague();
	
	getAllMatchLeague();
	
	initSelectLeague();
	
	initializeMap();
	
	initEvents();
	
	initStyle()
}

function initSelectLeague(){
	var select = document.getElementById('select-liga');
	for (var int = 0; int < leagues.length; int++) {
		var node = document.createElement("option");
		var nodeText = document.createTextNode(leagues[int].nombre);
		node.appendChild(nodeText);
		var attr = document.createAttribute("value");
		attr.value = leagues[int].id;
		node.setAttributeNode(attr);
		select.appendChild(node);
	}
}

function initSelectTeam(){
	var select = document.getElementById('select-team');
	for (var int = 0; int < teams.length; int++) {
		var node = document.createElement("option");
		var nodeText = document.createTextNode(teams[int].nombre);
		node.appendChild(nodeText);
		var attr = document.createAttribute("value");
		attr.value = teams[int].nombre;
		node.setAttributeNode(attr);
		select.appendChild(node);
		var attr2 = document.createAttribute("id");
		attr2.value = teams[int].nombre;
		node.setAttributeNode(attr2);
		select.appendChild(node);
	}
}

function initSelectMatchDay(){
	var select = document.getElementById('select-matchDay');
	for (var int = 0; int < matchDay.length; int++) {
		var node = document.createElement("option");
		var nodeText = document.createTextNode(matchDay[int]);
		node.appendChild(nodeText);
		var attr = document.createAttribute("value");
		attr.value = matchDay[int];
		node.setAttributeNode(attr);
		attr = document.createAttribute("id");
		attr.value = "J"+matchDay[int];
		node.setAttributeNode(attr);
		select.appendChild(node);
	}
}

function initEvents(){
	window.Constant.SELECT_TEAM().onchange = setMarker;
	window.Constant.SELECT_MATCH_DAY().onchange = setMarker;
	window.Constant.BUTTON_MENU().onclick = leftMenu;
	window.Constant.BUTTON_CLOSE().onclick = rightMenu;
	window.Constant.BUTTON_FILTERS().onclick = change_aside;
	window.Constant.BUTTON_CONTROLLERS().onclick = change_aside;
	window.Constant.CONTROL_ZOOM().onchange = controller_map;
	window.Constant.BUTTON_ZOOM_MORE().onclick = controller_map;
	window.Constant.BUTTON_ZOOM_LESS().onclick = controller_map;
	window.Constant.BUTTON_TOP().onclick = controller_map;
	window.Constant.BUTTON_BOTTOM().onclick = controller_map;
	window.Constant.BUTTON_LEFT().onclick = controller_map;
	window.Constant.BUTTON_RIGHT().onclick = controller_map;
}

function setMarker(e){
	if(this.id == "select-team"){
		extractTeam(this.value);
	}else if (this.id == "select-matchDay") {
		extractMatches(this.value);
	}
}

function leftMenu(event){
	window.Constant.DESPLE_MENU().style.right = '0px';
}

function rightMenu(){
	window.Constant.DESPLE_MENU().style.right = '-40%';
}

function change_aside(e){
	for (var int = 0; int <  window.Constant.BUTTONS_ASIDE().length; int++) {
		window.Constant.BUTTONS_ASIDE()[int].className = "button-aside";
	}
	this.parentElement.className += " select";
	switch (this.id) {
	case "button-filters":
		window.Constant.BODY_FILTER().style.display = "block";
		window.Constant.BODY_CONTROLLER().style.display = "none";
		break;
	case "button-controllers":
		window.Constant.BODY_FILTER().style.display = "none";
		window.Constant.BODY_CONTROLLER().style.display = "block";
		break;
	}
}

function controller_map(e){
	switch (e.type) {
	case "change":
		map.setZoom(parseInt(e.target.value));
		break;
	case "click":
		if(e.target.id == "button-zoom-more"){
			map.setZoom((map.getZoom() + 1));
			window.Constant.CONTROL_ZOOM().value = (map.getZoom() + 1);
		}else if (e.target.id == "button-zoom-less") {
			map.setZoom((map.getZoom() - 1));
			window.Constant.CONTROL_ZOOM().value = (map.getZoom() - 1);
		}else if(e.target.id == "button-top"){
			var pepep = map.getCenter();
			map.setCenter({lat:pepep.lat()-getNumberMove(map.getZoom()),lng:pepep.lng()});
		}else if(e.target.id == "button-bottom"){
			var pepep = map.getCenter();
			map.setCenter({lat:pepep.lat()+getNumberMove(map.getZoom()),lng:pepep.lng()});
		}else if(e.target.id == "button-left"){
			var pepep = map.getCenter();
			map.setCenter({lat:pepep.lat(),lng:pepep.lng()+getNumberMove(map.getZoom())});
		}else if(e.target.id == "button-right"){
			var pepep = map.getCenter();
			map.setCenter({lat:pepep.lat(),lng:pepep.lng()-getNumberMove(map.getZoom())});
		}
		
		break;
	default:
		break;
	}
}

function getNumberMove(zoom){
	var result;
	if(zoom > -1 && zoom <= 2){
		result = 5;
	}else if (zoom > 2 && zoom <= 7) {
		result = 1;
	}else if (zoom > 7 && zoom <= 12) {
		result = 0.01;
	}else if (zoom > 12 && zoom <= 17) {
		result = 0.001;
	}else if (zoom > 17 && zoom <= 21){
		result = 0.0001;
	}
	return result;
}


function setTeams(args){
	teams = args;
}

function setAllMatches(arg){
	allMatches = arg;
}

function descomposition(){
	extractMatches("1");
	extractMatchDay();
}

function extractMatches(matchDay){
	var flagMatch = 0;
	for (var int = 0; int < allMatches.length; int++){
		if(allMatches[int].jornada == matchDay){
			matches[flagMatch] = allMatches[int];
			flagMatch++;
		}
	}
	extractTeam(window.Constant.SELECT_TEAM().value);
}

function extractMatchDay(){
	var flagMatchDay = 0;
	var mat = [];
	for (var int = 0; int < allMatches.length; int++){
		if(flagMatchDay != allMatches[int].jornada){
			matchDay[flagMatchDay] = allMatches[int].jornada;
			calendar[flagMatchDay] = new Calendar(allMatches[int].jornada,"J"+allMatches[int].jornada, window.Utils.ParseDate(allMatches[int].fecha), "event", true);
			flagMatchDay = allMatches[int].jornada;
		}
	}
	inicializeCalendar();
	initSelectMatchDay();
}

function extractTeam(team){
	var response = [];
	if(team == "0"){ inicializeMarker(matches); }
	for(var int = 0; int < matches.length; int++){
		if(matches[int].equipo_local.nombre == team || matches[int].equipo_visitante.nombre == team){
			response[0] = matches[int];
			inicializeMarker(response);
		}
	}
}

function getAllLeague() {
	leagues = window.Utils.ParseJsonToObjct(requestServer("getLeague"), League);
}

function getTeamLeague() {
	requestServerAsync("getTeam/"+leagues[0].getId(), Team, setTeams, initSelectTeam);
}

function getAllMatchLeague() {
	requestServerAsync("getAllMatchLeague/"+leagues[0].getId(), Match, setAllMatches, descomposition);
}

function requestServer(request){
	var xmlhttp = window.Constant.XMLHTTP_CLIENT();
	xmlhttp.open("GET", window.Constant.URL_SERVER() + "?q=" + request, false);
	xmlhttp.send();
	return xmlhttp.responseText;
}

function requestServerAsync(request, obj, fun, callBack){
	var xmlhttp = window.Constant.XMLHTTP_CLIENT();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
			var temp = window.Utils.ParseJsonToObjct(xmlhttp.responseText, obj);
			if(fun != null) fun(temp);
			callBack();
		}
	}
	xmlhttp.open("GET", window.Constant.URL_SERVER() + "?q=" + request, true);
	xmlhttp.send();
}