/**
 * 
 */

var leagues = [];
var teams = [];
var matches = [];
var allMatches = [];
var matchDay = [];

window.onload = function() {
	
	initApp();
	
}

function initApp(){
	getAllLeague();
	getTeamLeague();
	//getMatchLeagueDay();
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
	//console.log(matches);
//	inicializeMarker(matches);
	var select = document.getElementById('select-matchDay');
	for (var int = 0; int < matchDay.length; int++) { //<option value="<?php echo $year['id']; ?>"><?php echo $year['nombre']; ?></option>
		var node = document.createElement("option");
		var nodeText = document.createTextNode(matchDay[int]);
		node.appendChild(nodeText);
		var attr = document.createAttribute("value");
		attr.value = matchDay[int];
		node.setAttributeNode(attr);
		select.appendChild(node);
	}
}

function initEvents(){
	window.Constant.SELECT_TEAM().onchange = setMarker;
	window.Constant.SELECT_MATCH_DAY().onchange = setMarker;
}

function setMarker(e){
	if(this.id == "select-team"){
		var response = [];
		if(this.value == "0"){ inicializeMarker(matches); }
		for(var int = 0; int < matches.length; int++){
			if(matches[int].equipo_local.nombre == this.value || matches[int].equipo_visitante.nombre == this.value){
				response[0] = matches[int];
				inicializeMarker(response);
			}
		}
	}else if (this.id == "select-matchDay") {
		//console.log(this.value);
		extractMatches(this.value);
	}
}

function setTeams(args){
	teams = args;
}

//function setMatches(args){
//	matches = args;
//}

function setAllMatches(arg){
	allMatches = arg;
	//console.log(allMatches);
}

function descomposition(){
	//var jornadas = [];
//	var flagJornada = 0;
//	var mat = [];
	extractMatches("1");
	extractMatchDay();
//	for (var int = 0; int < allMatches.length; int++) {
////		if(flagJornada != allMatches[int].jornada){
////			matchDay[flagJornada] = allMatches[int].jornada;
////			flagJornada = allMatches[int].jornada;
////		}
////		if(allMatches[int].jornada == 1){
////			console.log("IF");
////			matches[flagMat] = allMatches[int];
////			flagMat++;
////		}
//	}
//	initSelectMatchDay();
//	console.log(matchDay);
//	console.log(mat);
}

function extractMatches(matchDay){
	var flagMatch = 0;
	for (var int = 0; int < allMatches.length; int++){
		if(allMatches[int].jornada == matchDay){
			matches[flagMatch] = allMatches[int];
			flagMatch++;
		}
	}
	inicializeMarker(matches);
}

function extractMatchDay(){
	var flagMatchDay = 0;
	var mat = [];
	for (var int = 0; int < allMatches.length; int++){
		if(flagMatchDay != allMatches[int].jornada){
			matchDay[flagMatchDay] = allMatches[int].jornada;
			flagMatchDay = allMatches[int].jornada;
		}
	}
	initSelectMatchDay();
}

function getAllLeague() {
	leagues = window.Utils.ParseJsonToObjct(requestServer("getLeague"), League);
}

function getTeamLeague() {
	requestServerAsync("getTeam/"+leagues[0].getId(), Team, setTeams, initSelectTeam);
}

function getMatchLeagueDay() {
	//requestServerAsync("getMatchLeagueDay/"+leagues[0].getId()+"/1", Match, setMatches, initSelectMatchDay);
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