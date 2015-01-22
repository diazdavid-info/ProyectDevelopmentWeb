/**
 * 
 */

var leagues;
var teams;
var matches;

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

function getAllLeague() {
	leagues = window.Utils.ParseJsonToObjct(requestServer("getLeague"), League);
	console.log(leagues);
}

function getTeamLeague() {
	teams = window.Utils.ParseJsonToObjct(requestServer("getTeam/"+leagues[0].getId()), Team);
	console.log(teams);
}

function getPlayerTeam() {
	
}

function getAllMatch() {
	
}

function getMatchLeagueDay() {
	matches = window.Utils.ParseJsonToObjct(requestServer("getMatchLeagueDay/"+leagues[0].getId()+"/1"), Match);
	console.log(matches);
}

function requestServer(request){
	var xmlhttp = window.Constant.XMLHTTP_CLIENT();
	xmlhttp.open("GET", window.Constant.URL_SERVER() + "?q=" + request, false);
	xmlhttp.send();
	return xmlhttp.responseText;
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