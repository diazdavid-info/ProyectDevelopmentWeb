/**
 * 
 */

var leagues = [];
var teams = [];
var matches = [];

window.onload = function() {
	
	initApp();
	
}

function initApp(){
	getAllLeague();
	getTeamLeague();
	getMatchLeagueDay();
	
	initSelectLeague();
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
	var select = document.getElementById('select-matchDay');
	for (var int = 0; int < teams.length; int++) { //<option value="<?php echo $year['id']; ?>"><?php echo $year['nombre']; ?></option>
		var node = document.createElement("option");
		var nodeText = document.createTextNode(matches[int].getJornada());
		node.appendChild(nodeText);
		var attr = document.createAttribute("value");
		attr.value = matches[int].getJornada();
		node.setAttributeNode(attr);
		select.appendChild(node);
	}
}

function setTeams(args){
	teams = args;
}

function setMatches(args){
	matches = args;
	console.log(matches);
}

function getAllLeague() {
	leagues = window.Utils.ParseJsonToObjct(requestServer("getLeague"), League);
	console.log(leagues);
}

function getTeamLeague() {
	requestServerAsync("getTeam/"+leagues[0].getId(), Team, setTeams, initSelectTeam);
}

function getPlayerTeam() {
	
}

function getAllMatch() {
	
}

function getMatchLeagueDay() {
	requestServerAsync("getMatchLeagueDay/"+leagues[0].getId()+"/1", Match, setMatches, initSelectMatchDay);
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