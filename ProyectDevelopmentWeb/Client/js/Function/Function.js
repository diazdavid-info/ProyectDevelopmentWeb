/**
 * 
 */

var leagues = [];
var teams = [];
var matches = [];
var allMatches = [];

window.onload = function() {
	
	initApp();
	
}

function initApp(){
	getAllLeague();
	getTeamLeague();
	getMatchLeagueDay();
	getAllMatchLeague();
	
	initSelectLeague();
	
	initializeMap();
	
	initEvents();
	
}

function initSelectLeague(){
	var select = document.getElementById('select-liga');
	for (var int = 0; int < leagues.length; int++) { //<option value="<?php echo $year['id']; ?>"><?php echo $year['nombre']; ?></option>
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
	//console.log(teams);
	var select = document.getElementById('select-team');
	for (var int = 0; int < teams.length; int++) { //<option value="<?php echo $year['id']; ?>"><?php echo $year['nombre']; ?></option>
		var node = document.createElement("option");
		var nodeText = document.createTextNode(teams[int].nombre);
		node.appendChild(nodeText);
		var attr = document.createAttribute("value");
		attr.value = teams[int].nombre;
		node.setAttributeNode(attr);
		select.appendChild(node);
	}
}

function initSelectMatchDay(){
	console.log(matches);
	inicializeMarker(matches);
	var select = document.getElementById('select-matchDay');
	for (var int = 0; int < matches.length; int++) { //<option value="<?php echo $year['id']; ?>"><?php echo $year['nombre']; ?></option>
		var node = document.createElement("option");
		var nodeText = document.createTextNode(matches[int].jornada);
		node.appendChild(nodeText);
		var attr = document.createAttribute("value");
		attr.value = matches[int].jornada;
		node.setAttributeNode(attr);
		select.appendChild(node);
	}
}

function initEvents(){
	window.Constant.SELECT_TEAM().onchange = setMarker;
}

function setMarker(e){
	var response = [];
	for(var int = 0; int < matches.length; int++){
		if(matches[int].equipo_local.nombre == this.value || matches[int].equipo_visitante.nombre == this.value){
			response[0] = matches[int];
			removeMarker();
			inicializeMarker(response);
		}
	}
}

function setTeams(args){
	teams = args;
}

function setMatches(args){
	matches = args;
}

function setAllMatches(arg){
	allMatches = arg;
	console.log(allMatches);
}

function descomposition(){
	var jornadas = [];
	var flagJornada = 0;
	var mat = [];
	var flagMat = 0;
	for (var int = 0; int < allMatches.length; int++) {
		if(flagJornada != allMatches[int].jornada){
			jornadas[flagJornada] = allMatches[int].jornada;
			flagJornada = allMatches[int].jornada;
		}
		if(allMatches[int].jornada == 1){
			console.log("IF");
			mat[flagMat] = allMatches[int];
			flagMat++;
		}
	}
	console.log(jornadas);
	console.log(mat);
}

function getAllLeague() {
	leagues = window.Utils.ParseJsonToObjct(requestServer("getLeague"), League);
}

function getTeamLeague() {
	requestServerAsync("getTeam/"+leagues[0].getId(), Team, setTeams, initSelectTeam);
}

function getMatchLeagueDay() {
	requestServerAsync("getMatchLeagueDay/"+leagues[0].getId()+"/1", Match, setMatches, initSelectMatchDay);
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

//function ajax() {
//	var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
//	xmlhttp.onreadystatechange = function() {
//		if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
//			console.log(xmlhttp.responseText);
//			var provincia = parseJsonToObject(xmlhttp.responseText);
//			console.log(provincia);
//		}
//	}
//	xmlhttp.open("GET","http://localhost/git/Object-Relation%20Mapping/Object-Relation%20Mapping/Server/Services/Api.php?q=getProvincia/1/2", true);
//	xmlhttp.send();
//}