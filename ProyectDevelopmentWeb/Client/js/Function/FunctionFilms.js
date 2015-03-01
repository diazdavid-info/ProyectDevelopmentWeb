/**
 * 
 */

var countries = [];
window.onload = function() {
	
	initApp();
	
}

function initApp(){
	getAllCountry();
	
	initSelectTime();
	
	initializeMap();
	
	initEvents();
}

function setCountry(response){
	countries = response;
}

function initSelectCountry(){
	inicializeMarker(countries);
	var select = document.getElementById('select-country');
	while (select.firstChild) {
	    select.removeChild(select.firstChild);
	}
	select.innerHTML += "<option id='todos' value='todos'>Todos</option>";
	for (var int = 0; int < countries.length; int++) { 
		var node = document.createElement("option");
		var nodeText = document.createTextNode(countries[int].nombre);
		node.appendChild(nodeText);
		var attr = document.createAttribute("value");
		attr.value = countries[int].nombre;
		node.setAttributeNode(attr);
		select.appendChild(node);
		var attr2 = document.createAttribute("id");
		attr2.value = countries[int].nombre;
		node.setAttributeNode(attr2);
		select.appendChild(node);
	}
}

function initSelectTime(){
	var select = document.getElementById('select-time');
	select.innerHTML += "<option id='20150222' value='20150222'>Hace una semana</option>";
	select.innerHTML += "<option id='20150203' value='20150203'>Hace un mes</option>";
	select.innerHTML += "<option id='20150103' value='20150103'>Hace dos mes</option>";
	select.innerHTML += "<option id='20141003' value='20141003'>Hace seis mes</option>";
	select.innerHTML += "<option id='20140301' value='20140301'>Hace un año</option>";
	select.innerHTML += "<option id='20130301' value='20130301'>Hace dos años</option>";
}

function getAllCountry(){
	requestServerAsync("getAllCountry/20150222", Country, setCountry, initSelectCountry);
}

function initEvents(){
	window.Constant.SELECT_TIME().onchange = setMarker;
	window.Constant.SELECT_COUNTRY().onchange = setMarker;
	window.Constant.POPUP().onclick = noneImg;
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

function popUp(e){
	console.log(e);
	console.log(e.target.src);
	window.Constant.IMAGE_POPUP().src = e.target.src;
	window.Constant.POPUP().style.display = "block";
}

function noneImg(e){
	this.style.display = "none";
}

function setMarker(e){
	if(this.id == "select-time"){
		requestServerAsync("getAllCountry/"+e.target.value, Country, setCountry, initSelectCountry);
	}else if (this.id == "select-country") {
		if(e.target.value != "todos"){
			var tempCountries = []
			for (var int = 0; int < countries.length; int++) {
				if(countries[int].nombre == e.target.value){
					tempCountries.push(countries[int]);
				}
			}
			inicializeMarker(tempCountries);
		}else{
			inicializeMarker(countries);
		}
		
	}
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