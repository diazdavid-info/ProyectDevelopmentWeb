/**
 * 
 */

var leagues;

window.onload = function() {
	//alert(window.Constant.URL_SERVER());
	getAllLeague();
	//getMatchLeague();
	getTeamLeague();
}

function getAllLeague(){
	leagues = window.Utils.ParseJsonToObjct(requestServer("getLeague"), League);
	console.log(leagues);
}

function getTeamLeague() {
	teams = window.Utils.ParseJsonToObjct(requestServer("getTeam/"+leagues.getId()), Team);
	console.log(teams);
}

function getAllMatch(){
	
}

function getMatchLeague(){
	var Matches = window.Utils.ParseJsonToObjct(requestServer("getMatch/"+leagues.getId()), Match);
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