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

// Extensión de la clase League para añadir función extática.
// Función que devuelve una única instancia de la clase League através de un array.
League.instanceUnique = function(arg) {
	return new League(arg.id, arg['nombre'], arg['ayno_inicio'], arg['ayno_fin']);
}

/**
 *
 */
function Team(nombre, liga_id, lat, lng, imagen) {
	console.log(imagen);
	this.nombre = nombre;
	this.liga_id = liga_id;
	this.lat = lat;
	this.lng = lng;
	this.imagen = imagen;
	
	// Funcion que devuelve el nombre.
	this.getNombre = function() {
		return this.nombre;
	}
	
	// Función que devuelve el id de la liga.
	this.getLiga_id = function() {
		return this.liga_id;
	}
	
	// Función que devuelve la latitud.
	this.getLat = function() {
		return this.lat;
	}
	
	// Función que devuelve la longitud.
	this.getLng = function() {
		return this.lng;
	}
	
	// Función que devuelve la imagen.
	this.getImagen = function() {
		return this.imagen;
	}
}

//Extensión de la clase League para añadir función extática.
//Función que prepara y devuelve una instancia de la clase League.
Team.instance = function(json) {
	var teams = [];
	for (var int = 0; int < json.length; int++) {
		teams[int] = new Team(json[int].nombre, League.instanceUnique(json[int].liga_id), json[int].lat, json[int].lng, json[int].imagen);
	}
	return teams;
}

//Extensión de la clase Team para añadir función extática.
//Función que devuelve una única instancia de la clase Team através de un array.
Team.instanceUnique = function(arg) {
	return new Team(arg[0]['nombre'], League.instanceUnique(arg[0]['liga_id']), arg[0]['lat'], arg[0]['lng'], arg[0]['image']);
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
	
	// Funcion que devuelve la jornada.
	this.getJornada = function() {
		return this.jornada;
	}
	
	// Función que devuelve la fecha.
	this.getFecha = function() {
		return this.fecha;
	}
	
	// Función que devuelve el id de la liga.
	this.getLiga_id = function() {
		return this.liga_id;
	}
	
	// Función que devuelve el equipo local.
	this.getEquipo_local = function() {
		return this.equipo_local;
	}
	
	// Función que devuelve el equipo visitante.
	this.getEquipo_visitante = function() {
		return this.equipo_visitante;
	}
	
	// Función que devuelve los goles locales.
	this.getGoles_local = function() {
		return this.goles_local;
	}
	
	// Función que devuelve los goles visitantes.
	this.getGoles_visitante = function() {
		return this.goles_visitante;
	}
}

//Extensión de la clase Match para añadir función extática.
//Función que prepara y devuelve una instancia de la clase Match.
Match.instance = function(json) {
	//console.log(json);
	var matches = [];
	for (var int = 0; int < json.length; int++) {
		matches[int] = new Match(json[int].jornada, json[int].fecha, League.instanceUnique(json[int].liga_id), Team.instanceUnique(json[int].equipo_local), Team.instanceUnique(json[int].equipo_visitante), json[int].goles_local, json[int].goles_visitante);
	}
	return matches;
}


/**
 * 
 */
function Calendar(id, title, start, className, allDay){
	this.id = id;
	this.title = title;
	this.start = start;
	this.className = className;
	this.allDay = allDay;
}
























