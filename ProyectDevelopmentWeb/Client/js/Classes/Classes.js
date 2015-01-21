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
	return new League(json[0].id, json[0].nombre, json[0].ayno_inicio, json[0].ayno_fin);
}