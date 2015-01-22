/**
 * 
 */

/**
 * Clase Liga.
 * @param int id Identificador de la liga.
 * @param String nombre Nombre de la liga.
 * @param String ayno_inicio Indica el año en el que empieza una liga.
 * @param String ayno_fin Indica el año en el que finaliza una liga.
 */
function League(id, nombre, ayno_inicio, ayno_fin) {
	this.id = id;
	this.nombre = nombre;
	this.ayno_inicio = ayno_inicio;
	this.ayno_fin = ayno_fin;
	
	// Funcion que devuelve el id.
	this.getId = function() {
		return this.id;
	}
	
	// Función que devuelve el nombre.
	this.getNombre = function() {
		return this.nombre;
	}
	
	// Función que devuelve el anyo_inicio.
	this.getAyno_inicio = function() {
		return this.anyo_inicio;
	}
	
	// Función que devuelve el anyo_fin.
	this.getAyno_fin = function() {
		return this.anyo_fin;
	}
	
}

// Extensión de la clase League para añadir función extática.
// Función que prepara y devuelve una instancia de la clase League.
League.instance = function(json) {
	var leagues = [];
	for (var int = 0; int < json.length; int++) {
		leagues[int] = new League(json[int].id, json[int].nombre, json[int].ayno_inicio, json[int].ayno_fin);
	}
	return leagues;
}

/**
 *
 */
function Team(nombre, liga_id, lat, lng, imagen) {
	this.nombre = nombre;
	this.liga_id = liga_id;
	this.lat = lat;
	this.lng = lng;
	this.imagen = imagen;
}

//Extensión de la clase League para añadir función extática.
//Función que prepara y devuelve una instancia de la clase League.
Team.instance = function(json) {
	var teams = [];
	for (var int = 0; int < json.length; int++) {
		teams[int] = new Team(json[int].nombre, json[int].liga_id, json[int].lat, json[int].lng, json[int].imagen);
	}
	return teams;
}

/**
 * 
 */
function Match(jornada, fecha, liga_id, equipo_local, equipo_visitante, goles_local, goles_visitante){
	this.jornada = jornada;
	this.fecha = fecha;
	this.liga_id = liga_id;
	this.equipo_local = equipo_local;
	this.equipo_visitante = equipo_visitante;
	this.goles_local = goles_local;
	this.goles_visitante = goles_visitante;
}

Match.instance = function(json) {
	var matches = [];
	for (var int = 0; int < json.length; int++) {
		matches[int] = new Match(json[int].jornada, json[int].fecha, json[int].liga_id, json[int].equipo_local, json[int].equipo_visitante, json[int].equipo_local, json[int].goles_local, json[int].goles_visitante);
	}
	return matches;
}

























